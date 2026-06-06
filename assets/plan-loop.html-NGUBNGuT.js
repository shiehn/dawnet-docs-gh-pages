import{_ as d,r as i,o as r,c as l,a as e,b as n,w as t,d as a,e as c}from"./app-qdDqsorv.js";const p={},u=c(`<h1 id="the-plan-as-artifact-loop" tabindex="-1"><a class="header-anchor" href="#the-plan-as-artifact-loop" aria-hidden="true">#</a> The plan-as-artifact loop</h1><blockquote><p><em>Do not expose a DAW as hundreds of low-level commands and hope the agent figures it out. Expose a small, typed, reversible, state-aware command surface that lets the agent inspect → plan → validate → preview → commit → undo.</em></p></blockquote><p>S&amp;S takes that pattern literally. Every mutation an AI agent triggers begins life as a <strong>typed JSON Plan</strong> — a self-describing artifact the agent can read, edit, validate against current state, hand to the executor, and undo cleanly if the result misses the mark.</p><p>This page is the agent-facing reference. It covers when to use the loop, the six verbs, the Plan and PlanValidationResult shapes, error recovery via <code>suggestedFix</code>, and the relationship to checkpoints.</p><h2 id="when-to-use-the-loop" tabindex="-1"><a class="header-anchor" href="#when-to-use-the-loop" aria-hidden="true">#</a> When to use the loop</h2><table><thead><tr><th>Situation</th><th>Recommended path</th></tr></thead><tbody><tr><td>Multi-step musical change (&quot;make a beat&quot;, &quot;add bass + drums + keys&quot;)</td><td>Plan loop</td></tr><tr><td>One-shot read (&quot;what scenes exist?&quot;)</td><td><code>sas inspect …</code> directly</td></tr><tr><td>One-shot mutation already covered by a composite (<code>compose_scene</code>)</td><td>Either — composite auto-applies with checkpoint</td></tr><tr><td>Pure transport (&quot;play&quot;, &quot;stop&quot;)</td><td>Direct tool call (<code>sas dsl_play</code>)</td></tr><tr><td>Anything you might want to undo</td><td>Plan loop</td></tr><tr><td>State-dependent change (&quot;revise the bass darker&quot;)</td><td>Plan loop — validator catches missing preconditions</td></tr></tbody></table><p>The non-loop tools are still there. The loop is a <em>higher-leverage</em> path for changes the agent expects to think about: it forces a state check, saves a recovery point automatically, and gives the agent a structured preview of what would happen before the engine touches anything.</p><h2 id="the-six-verbs" tabindex="-1"><a class="header-anchor" href="#the-six-verbs" aria-hidden="true">#</a> The six verbs</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                 ┌─────────────────────────────┐
                 │       sas inspect …          │  Read current state
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │       sas plan &lt;intent&gt;      │  Intent → typed Plan
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │       sas validate &lt;plan&gt;    │  Schema + preconditions
                 └──────────────┬──────────────┘
                          valid │
                                ▼
                 ┌─────────────────────────────┐
                 │       sas apply &lt;plan&gt;       │  Auto-checkpoint + execute
                 └──────────────┬──────────────┘
                                ▼
                 ┌─────────────────────────────┐
                 │       sas preview            │  Hear the result
                 └──────────────┬──────────────┘
                       miss     │     hit
                       ┌────────┴───────┐
                       ▼                ▼
       ┌────────────────────────┐   ┌─────────────────┐
       │  sas history undo      │   │  next iteration │
       │  → back to checkpoint  │   │  (revise / add) │
       └────────────────────────┘   └─────────────────┘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Every verb is read-only or reversible. The only step that writes is <code>apply</code>, and it always saves a checkpoint first.</p><h2 id="a-worked-example" tabindex="-1"><a class="header-anchor" href="#a-worked-example" aria-hidden="true">#</a> A worked example</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. See what we&#39;re working with</span>
sas inspect project <span class="token parameter variable">--json</span> <span class="token operator">|</span> jq <span class="token builtin class-name">.</span>

<span class="token comment"># 2. Ask for a plan</span>
sas plan <span class="token string">&quot;make a chill 4-bar lo-fi beat in A minor at 85 BPM&quot;</span> <span class="token punctuation">\\</span>
  --plan-out /tmp/lofi.plan.json

<span class="token comment"># 3. Sanity-check the plan against current state</span>
sas validate /tmp/lofi.plan.json
<span class="token comment"># → { &quot;valid&quot;: true, &quot;preview&quot;: { &quot;wouldCreate&quot;: { &quot;scenes&quot;: 1, &quot;tracks&quot;: 4 }, ... } }</span>

<span class="token comment"># 4. Apply with auto-checkpoint</span>
sas apply /tmp/lofi.plan.json <span class="token parameter variable">--checkpoint</span> pre-lofi
<span class="token comment"># → &quot;Applied 5/5 steps · Checkpoint: pre-lofi&quot;</span>

<span class="token comment"># 5. Listen</span>
sas preview <span class="token parameter variable">--json</span> <span class="token operator">|</span> jq <span class="token string">&#39;.data.changes.audio.url&#39;</span>
<span class="token comment"># → &quot;file:///.../render-cache/&lt;hash&gt;.wav&quot;</span>

<span class="token comment"># 6a. Happy with it? Iterate.</span>
sas plan <span class="token string">&quot;make the keys jazzier&quot;</span> --plan-out /tmp/jazzier.plan.json
sas apply /tmp/jazzier.plan.json

<span class="token comment"># 6b. Or roll back to the pre-lofi state</span>
sas <span class="token function">history</span> undo pre-lofi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Every line is one <code>sas</code> invocation. No engine state-machine to track, no manual cleanup if something goes wrong.</p><h2 id="the-plan-shape" tabindex="-1"><a class="header-anchor" href="#the-plan-shape" aria-hidden="true">#</a> The Plan shape</h2><p>Plans are versioned JSON. The current schema is <code>plan_schema_version: 1</code>.</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
  // Stable id; agents key revisions by this.
  &quot;id&quot;: &quot;plan-scene_create-1714850000-abc123&quot;,

  // Free-text user-facing goal — mirrored from the user&#39;s input.
  &quot;intent&quot;: &quot;make a chill 4-bar lo-fi beat&quot;,

  // Top-level type tag. Determines validator branch + builder template.
  // One of: scene_create | scene_revise | track_revise | transition_create
  //       | mix_balance | render_preview | composite
  &quot;type&quot;: &quot;scene_create&quot;,

  // What the plan assumes at apply time. Validator checks before execution.
  &quot;preconditions&quot;: {
    &quot;project_bound&quot;: true,
    &quot;scene_active&quot;: false,    // we&#39;re creating, not modifying
    &quot;bpm&quot;: 85,
    &quot;key&quot;: &quot;A minor&quot;
  },

  // Sequential steps. Each step&#39;s \`outputs\` may be referenced by later
  // steps via \`\${steps.&lt;id&gt;.outputs.&lt;key&gt;}\` placeholders.
  &quot;steps&quot;: [
    {
      &quot;id&quot;: &quot;plan-…0.scene_create&quot;,
      &quot;type&quot;: &quot;scene_create&quot;,
      &quot;label&quot;: &quot;Create scene &#39;lo-fi&#39;&quot;,
      &quot;inputs&quot;: { &quot;name&quot;: &quot;lo-fi&quot; }
    },
    {
      &quot;id&quot;: &quot;plan-…1.dsl_track_create&quot;,
      &quot;type&quot;: &quot;dsl_track_create&quot;,
      &quot;label&quot;: &quot;Add bass track&quot;,
      &quot;inputs&quot;: {
        &quot;name&quot;: &quot;Bass&quot;,
        &quot;role&quot;: &quot;bass&quot;,
        &quot;sceneId&quot;: &quot;\${steps.plan-…0.scene_create.outputs.sceneId}&quot;
      }
    }
    // … more steps
  ],

  // How to undo on partial failure. Default is checkpoint_undo.
  // compensate_per_step uses LIFO inverse hooks instead.
  // no_rollback is for pure-read plans.
  &quot;rollback&quot;: { &quot;strategy&quot;: &quot;checkpoint_undo&quot; },

  &quot;metadata&quot;: {
    &quot;created_at&quot;: &quot;2026-05-04T15:00:00.000Z&quot;,
    &quot;created_by&quot;: &quot;cli&quot;,        // &#39;cli&#39; | &#39;mcp&#39; | &#39;workflow&#39;
    &quot;tool_origin&quot;: &quot;make_beat&quot;, // composite that emitted the plan, if any
    &quot;plan_schema_version&quot;: 1,
    &quot;notes&quot;: &quot;Free-form annotations from the agent&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plan-steps-reference-each-other-via-steps" tabindex="-1"><a class="header-anchor" href="#plan-steps-reference-each-other-via-steps" aria-hidden="true">#</a> Plan steps reference each other via <code>\${steps.…}</code></h3><p>When <code>dsl_track_create</code> needs the <code>sceneId</code> produced by <code>scene_create</code> earlier in the plan, it refers to it by step id:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
  &quot;id&quot;: &quot;plan-…1.dsl_track_create&quot;,
  &quot;type&quot;: &quot;dsl_track_create&quot;,
  &quot;inputs&quot;: {
    &quot;name&quot;: &quot;Bass&quot;,
    &quot;role&quot;: &quot;bass&quot;,
    &quot;sceneId&quot;: &quot;\${steps.plan-…0.scene_create.outputs.sceneId}&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The executor resolves these at run time, so plans stay deterministic even before the engine has assigned IDs.</p><h2 id="the-planvalidationresult-shape" tabindex="-1"><a class="header-anchor" href="#the-planvalidationresult-shape" aria-hidden="true">#</a> The PlanValidationResult shape</h2><p><code>sas validate</code> returns:</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>{
  &quot;valid&quot;: false,
  &quot;errors&quot;: [
    {
      // JSONPath into the offending Plan.
      &quot;path&quot;: &quot;$.preconditions.project_bound&quot;,
      // Stable error code — programmatic dispatch.
      &quot;code&quot;: &quot;missing_precondition&quot;,
      &quot;message&quot;: &quot;No project is bound — open or create one first.&quot;,
      // Concrete recovery — exactly what to call to unblock.
      &quot;suggestedFix&quot;: { &quot;tool&quot;: &quot;list_projects&quot;, &quot;args&quot;: {} }
    }
  ],
  &quot;warnings&quot;: [
    {
      &quot;path&quot;: &quot;$.preconditions.bpm&quot;,
      &quot;code&quot;: &quot;bpm_drift&quot;,
      &quot;message&quot;: &quot;Plan asks for 90 BPM; scene is 85 BPM. Will use scene tempo.&quot;
    }
  ],
  &quot;preview&quot;: {
    // Counts of net-new objects.
    &quot;wouldCreate&quot;: { &quot;scenes&quot;: 1, &quot;tracks&quot;: 4, &quot;clips&quot;: 4 },
    // Names/IDs modified in place.
    &quot;wouldModify&quot;: { &quot;tracks&quot;: [] },
    // Names/IDs deleted — high-risk.
    &quot;wouldDelete&quot;: { &quot;tracks&quot;: [] },
    // Aggregate risk: low ≤2 mods, no deletes; medium ≤5 mods OR creates;
    // high any delete OR ≥6 mods.
    &quot;riskLevel&quot;: &quot;medium&quot;,
    // Convenience flag: agents check before auto-applying.
    &quot;requiresConfirmation&quot;: false
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Errors block <code>apply</code>. Warnings don&#39;t, but agents should surface them to the user.</p><h3 id="common-error-codes" tabindex="-1"><a class="header-anchor" href="#common-error-codes" aria-hidden="true">#</a> Common error codes</h3><table><thead><tr><th>Code</th><th>Meaning</th><th>Typical <code>suggestedFix</code></th></tr></thead><tbody><tr><td><code>missing_precondition</code></td><td>A required <code>preconditions.*</code> flag isn&#39;t satisfied</td><td>Tool that creates the missing state (<code>list_projects</code>, <code>scene_activate</code>, …)</td></tr><tr><td><code>unknown_step_type</code></td><td>Step <code>type</code> not registered in ToolRegistry</td><td>None — agent should pick a different action</td></tr><tr><td><code>unresolved_reference</code></td><td><code>\${steps.…}</code> placeholder references a non-existent step</td><td>Reorder steps; verify ids</td></tr><tr><td><code>duplicate_step_id</code></td><td>Two steps share the same id</td><td>Regenerate ids; the convention is <code>\${plan.id}.\${idx}.\${type}</code></td></tr><tr><td><code>invalid_chord</code></td><td>Chord token doesn&#39;t parse via <code>parseChordString</code></td><td>Use <code>Root:type</code> form (<code>C#:min</code>, <code>G:7</code>, …)</td></tr><tr><td><code>capacity_exceeded</code></td><td>Track count exceeds scene capacity (default 12)</td><td>Drop tracks or increase capacity</td></tr></tbody></table><h2 id="error-recovery-via-suggestedfix" tabindex="-1"><a class="header-anchor" href="#error-recovery-via-suggestedfix" aria-hidden="true">#</a> Error recovery via <code>suggestedFix</code></h2><p>The validator&#39;s <code>suggestedFix</code> is structured exactly like the Phase 3 <code>Remediation.mcp</code> shape, so an agent can pattern-match instead of re-parsing the error message:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Extract suggested fixes the agent would call next</span>
sas validate /tmp/plan.json <span class="token parameter variable">--json</span> <span class="token operator">|</span> jq <span class="token string">&#39;.data.changes.validation.errors[].suggestedFix&#39;</span>

<span class="token comment"># Apply the first suggested fix automatically:</span>
<span class="token assign-left variable">FIX</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>sas validate /tmp/plan.json <span class="token parameter variable">--json</span> <span class="token punctuation">\\</span>
  <span class="token operator">|</span> jq <span class="token parameter variable">-c</span> <span class="token string">&#39;.data.changes.validation.errors[0].suggestedFix // empty&#39;</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$FIX</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">TOOL</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FIX</span>&quot;</span> <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> .tool<span class="token variable">)</span></span>
  sas <span class="token string">&quot;<span class="token variable">$TOOL</span>&quot;</span> <span class="token parameter variable">--json</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$FIX</span>&quot;</span> <span class="token operator">|</span> jq .args<span class="token variable">)</span></span>&quot;</span>
  sas validate /tmp/plan.json    <span class="token comment"># re-check</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The pattern is: <strong>read errors → apply suggested fixes → re-validate → repeat → apply when valid</strong>. The agent never has to guess what state the engine needs.</p><h2 id="checkpoints-—-the-safety-net" tabindex="-1"><a class="header-anchor" href="#checkpoints-—-the-safety-net" aria-hidden="true">#</a> Checkpoints — the safety net</h2><p>Every <code>apply</code> call auto-creates a checkpoint named <code>pre-apply-&lt;plan.id&gt;-&lt;timestamp&gt;</code>. Override the name with <code>--checkpoint &lt;name&gt;</code>. Disable with <code>--skip-checkpoint</code> (rare — use when the caller is itself a higher-level reversible flow).</p><p>What&#39;s captured:</p><table><thead><tr><th>Layer</th><th>What&#39;s snapshotted</th><th>Why</th></tr></thead><tbody><tr><td><code>scenes</code> rows (scoped to <code>project_id</code>)</td><td>Full row</td><td>Scene structure + key + BPM</td></tr><tr><td><code>tracks</code> / <code>audio_tracks</code> / <code>sample_tracks</code> rows</td><td>Full rows</td><td>Track inventory + role + ordering</td></tr><tr><td>MIDI clips per track</td><td>Notes payload + serialized clip</td><td>Restoring a track means restoring its clip</td></tr><tr><td><code>plugin_data</code> rows for the project</td><td>Full</td><td>Plugin settings, samples, audio textures</td></tr><tr><td>Engine surface state per track</td><td>mute, solo, volume_db, pan, plugin_state base64</td><td>Live-mix state</td></tr></tbody></table><p>What&#39;s <strong>not</strong> captured:</p><ul><li>Full audio bounces — they&#39;re content-addressable and survive in the render cache independently. To preserve a specific render before a checkpoint, run <code>sas preview</code> (or <code>render_to_performance</code>) first.</li><li>Raw plugin DLL state beyond serialized form. If a plugin doesn&#39;t support state serialization, expect drift on restore.</li></ul><p>Restoration is a single SQLite transaction + sequence of engine RPCs. Total time target: &lt;2s for typical projects (≤20 tracks). In-flight renders are cancelled.</p><p>Checkpoints expire after 24h by default. <code>sas history prune</code> evicts expired ones; eviction also runs at app startup.</p><h2 id="where-each-verb-fits" tabindex="-1"><a class="header-anchor" href="#where-each-verb-fits" aria-hidden="true">#</a> Where each verb fits</h2><h3 id="read-with-inspect" tabindex="-1"><a class="header-anchor" href="#read-with-inspect" aria-hidden="true">#</a> Read with <code>inspect</code></h3><p>Before planning, the agent typically inspects state to ground its plan:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas inspect project <span class="token parameter variable">--include</span> scenes,tracks,musical_context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns scenes, tracks, key/BPM/chord progression, and recent checkpoints. Use this to fill in precondition fields when authoring a plan by hand, or just to ground the agent&#39;s reasoning.</p><h3 id="plan-with-plan" tabindex="-1"><a class="header-anchor" href="#plan-with-plan" aria-hidden="true">#</a> Plan with <code>plan</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas plan <span class="token string">&quot;make a beat&quot;</span> --plan-out plan.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The router maps the free-text intent to a <code>PlanType</code> and dispatches to a builder. To override the router&#39;s guess:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas plan <span class="token string">&quot;add a sub bass&quot;</span> <span class="token parameter variable">--type</span> track_revise --plan-out plan.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="validate-with-validate" tabindex="-1"><a class="header-anchor" href="#validate-with-validate" aria-hidden="true">#</a> Validate with <code>validate</code></h3><p>Always validate before <code>apply</code>. Validation is fast (no engine RPCs); it checks schema, preconditions, idempotency-reference correctness, and musical validity (chord tokens, etc.).</p><h3 id="apply-with-apply" tabindex="-1"><a class="header-anchor" href="#apply-with-apply" aria-hidden="true">#</a> Apply with <code>apply</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas apply plan.json                        <span class="token comment"># auto-checkpoint</span>
sas apply plan.json <span class="token parameter variable">--checkpoint</span> mine      <span class="token comment"># named checkpoint</span>
sas apply plan.json --dry-run              <span class="token comment"># validate-only</span>
sas apply plan.json --skip-checkpoint      <span class="token comment"># caller handles undo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Idempotent: re-running a partially-failed plan replays from the last non-completed step. Step ids are deterministic so the executor can resume safely.</p><h3 id="hear-with-preview" tabindex="-1"><a class="header-anchor" href="#hear-with-preview" aria-hidden="true">#</a> Hear with <code>preview</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas preview                                <span class="token comment"># active scene, cache-friendly</span>
sas preview <span class="token operator">&lt;</span>sceneId<span class="token operator">&gt;</span> <span class="token parameter variable">--refresh</span>            <span class="token comment"># force re-render</span>
sas preview --track-id <span class="token operator">&lt;</span>trackId<span class="token operator">&gt;</span>           <span class="token comment"># bounce one track</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Returns <code>audio.url</code>, <code>durationSeconds</code>, <code>cacheHit</code>, and <code>staleness</code>. Per-track preview uses the C++ <code>trackIds</code> filter in <code>SceneRenderer.cpp</code>.</p><h3 id="undo-with-history-undo" tabindex="-1"><a class="header-anchor" href="#undo-with-history-undo" aria-hidden="true">#</a> Undo with <code>history undo</code></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas <span class="token function">history</span> list                           <span class="token comment"># find a checkpoint</span>
sas <span class="token function">history</span> undo <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>                    <span class="token comment"># restore</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>After undo, the project is byte-identical to the state at checkpoint creation. Render cache entries from after the checkpoint are preserved (content-addressable + immutable), so re-applying the same plan would hit the cache.</p><h2 id="composite-tools-—-same-loop-less-typing" tabindex="-1"><a class="header-anchor" href="#composite-tools-—-same-loop-less-typing" aria-hidden="true">#</a> Composite tools — same loop, less typing</h2><p><code>compose_scene</code>, <code>add_instrument</code>, <code>play_scene</code>, <code>render_to_performance</code>, and <code>create_transition</code> already follow the same pattern under the hood: they emit a plan, validate it, auto-checkpoint, apply, and report.</p><p>Use composites when the workflow is well-trodden. Drop down to the plan loop when:</p><ul><li>The agent needs to <strong>show the user what it&#39;s about to do</strong> before doing it.</li><li>The agent needs to <strong>edit a plan mid-flight</strong> (e.g., swap one step&#39;s inputs).</li><li>The agent is <strong>iterating</strong> (&quot;preview, then revise, then preview again&quot;).</li><li>The composite doesn&#39;t fit and you&#39;d otherwise be writing 5+ shell lines.</li></ul><h2 id="see-also" tabindex="-1"><a class="header-anchor" href="#see-also" aria-hidden="true">#</a> See also</h2>`,63),v={href:"https://github.com/shiehn/sas-platform/blob/main/sas-app/src/shared/types/agent-plan.ts",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"agent-plan.ts",-1);function m(b,g){const s=i("RouterLink"),o=i("ExternalLinkIcon");return r(),l("div",null,[u,e("ul",null,[e("li",null,[e("strong",null,[n(s,{to:"/automation/cli-reference.html"},{default:t(()=>[a("CLI reference")]),_:1})]),a(" — full flag reference for every plan verb.")]),e("li",null,[e("strong",null,[n(s,{to:"/automation/examples.html"},{default:t(()=>[a("Worked examples")]),_:1})]),a(" — runnable shell scripts including the plan loop.")]),e("li",null,[e("strong",null,[n(s,{to:"/automation/for-agents.html"},{default:t(()=>[a("For agents")]),_:1})]),a(" — integration notes for Claude Code, OpenClaw, Cursor, and HTTP-direct.")]),e("li",null,[a("Source-of-truth Plan schema: "),e("a",v,[h,n(o)]),a(" in the S&S repo.")])])])}const k=d(p,[["render",m],["__file","plan-loop.html.vue"]]);export{k as default};
