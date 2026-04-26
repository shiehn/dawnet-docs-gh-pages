import{_ as s,o as a,c as n,e}from"./app-MIHCHNBl.js";const t={},o=e(`<h1 id="worked-examples" tabindex="-1"><a class="header-anchor" href="#worked-examples" aria-hidden="true">#</a> Worked examples</h1><p>Real shell scripts an AI agent (or you) can run to drive Signals &amp; Sorcery. Each example is self-contained — copy/paste and go.</p><h2 id="_1-compose-a-chill-lo-fi-beat" tabindex="-1"><a class="header-anchor" href="#_1-compose-a-chill-lo-fi-beat" aria-hidden="true">#</a> 1. Compose a chill lo-fi beat</h2><p>The simplest path: one <code>compose_scene</code> call.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

sas compose_scene <span class="token punctuation">\\</span>
  <span class="token parameter variable">--description</span> <span class="token string">&quot;chill lo-fi hip hop beat at 85 bpm, A minor&quot;</span> <span class="token punctuation">\\</span>
  --scene-name <span class="token string">&quot;Verse&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--json</span> <span class="token string">&#39;{
    &quot;tracks&quot;: [
      {&quot;name&quot;: &quot;Bass&quot;,  &quot;role&quot;: &quot;bass&quot;,  &quot;prompt&quot;: &quot;deep, slow, jazz-inflected&quot;},
      {&quot;name&quot;: &quot;Drums&quot;, &quot;role&quot;: &quot;drums&quot;, &quot;prompt&quot;: &quot;laid-back, swung 16ths&quot;},
      {&quot;name&quot;: &quot;Keys&quot;,  &quot;role&quot;: &quot;chords&quot;,&quot;prompt&quot;: &quot;sparse jazzy Rhodes&quot;},
      {&quot;name&quot;: &quot;Pad&quot;,   &quot;role&quot;: &quot;pad&quot;,   &quot;prompt&quot;: &quot;soft, wide, background&quot;}
    ]
  }&#39;</span> <span class="token parameter variable">--pretty</span>

sas play_scene --scene-name <span class="token string">&quot;Verse&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-build-a-verse-chorus-transition" tabindex="-1"><a class="header-anchor" href="#_2-build-a-verse-chorus-transition" aria-hidden="true">#</a> 2. Build a verse + chorus + transition</h2><p>Compose two scenes, then a transition that bridges them.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># Verse</span>
sas compose_scene <span class="token punctuation">\\</span>
  <span class="token parameter variable">--description</span> <span class="token string">&quot;mellow verse groove&quot;</span> <span class="token punctuation">\\</span>
  --scene-name <span class="token string">&quot;Verse&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--json</span> <span class="token string">&#39;{&quot;tracks&quot;:[
    {&quot;name&quot;:&quot;Bass&quot;,&quot;role&quot;:&quot;bass&quot;,&quot;prompt&quot;:&quot;sub bass, sparse&quot;},
    {&quot;name&quot;:&quot;Drums&quot;,&quot;role&quot;:&quot;drums&quot;,&quot;prompt&quot;:&quot;minimal kick+hat&quot;},
    {&quot;name&quot;:&quot;Keys&quot;,&quot;role&quot;:&quot;chords&quot;,&quot;prompt&quot;:&quot;ambient pad chords&quot;}
  ]}&#39;</span>

<span class="token comment"># Chorus — energetic, same key</span>
sas compose_scene <span class="token punctuation">\\</span>
  <span class="token parameter variable">--description</span> <span class="token string">&quot;energetic chorus, same key, bigger sound&quot;</span> <span class="token punctuation">\\</span>
  --scene-name <span class="token string">&quot;Chorus&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--json</span> <span class="token string">&#39;{&quot;tracks&quot;:[
    {&quot;name&quot;:&quot;Bass&quot;,&quot;role&quot;:&quot;bass&quot;,&quot;prompt&quot;:&quot;driving moving line&quot;},
    {&quot;name&quot;:&quot;Drums&quot;,&quot;role&quot;:&quot;drums&quot;,&quot;prompt&quot;:&quot;full kit, punchy&quot;},
    {&quot;name&quot;:&quot;Keys&quot;,&quot;role&quot;:&quot;chords&quot;,&quot;prompt&quot;:&quot;piano stabs&quot;},
    {&quot;name&quot;:&quot;Lead&quot;,&quot;role&quot;:&quot;lead&quot;,&quot;prompt&quot;:&quot;catchy hook melody&quot;}
  ]}&#39;</span>

<span class="token comment"># Transition</span>
sas create_transition --from-scene <span class="token string">&quot;Verse&quot;</span> --to-scene <span class="token string">&quot;Chorus&quot;</span> <span class="token parameter variable">--bars</span> <span class="token number">2</span>

<span class="token comment"># Play them in order: verse → transition → chorus</span>
sas scene_activate --scene-id Verse
sas dsl_play
<span class="token function">sleep</span> <span class="token number">16</span> <span class="token comment"># let verse breathe</span>
sas scene_activate --scene-id Chorus
sas dsl_play
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-add-one-instrument-to-the-current-scene" tabindex="-1"><a class="header-anchor" href="#_3-add-one-instrument-to-the-current-scene" aria-hidden="true">#</a> 3. Add one instrument to the current scene</h2><p>Common iterative workflow — the agent doesn&#39;t need to rebuild the whole scene, just add one part.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas add_instrument <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> <span class="token string">&quot;Sub Bass&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--role</span> <span class="token string">&quot;bass&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--prompt</span> <span class="token string">&quot;thick sub, A minor, follow the root notes&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--bars</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-apply-reverb-to-everything" tabindex="-1"><a class="header-anchor" href="#_4-apply-reverb-to-everything" aria-hidden="true">#</a> 4. Apply reverb to everything</h2><p>Batch FX across every track in the active scene.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas set_scene_fx <span class="token punctuation">\\</span>
  <span class="token parameter variable">--category</span> reverb <span class="token punctuation">\\</span>
  <span class="token parameter variable">--enabled</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--preset</span> <span class="token number">3</span> <span class="token punctuation">\\</span>
  --dry-wet <span class="token number">0.35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If some tracks fail, <code>set_scene_fx</code> returns <code>success: true</code> with a <code>failed</code> array listing which tracks errored — the agent can then retry those individually with <code>dsl_set_track_fx</code>.</p><h2 id="_5-export-a-scene-as-wav" tabindex="-1"><a class="header-anchor" href="#_5-export-a-scene-as-wav" aria-hidden="true">#</a> 5. Export a scene as WAV</h2><p>Render the scene offline and save to a user-specified path.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sas export_audio <span class="token punctuation">\\</span>
  <span class="token parameter variable">--output</span> <span class="token string">&quot;~/Desktop/my-beat.wav&quot;</span> <span class="token punctuation">\\</span>
  --scene-name <span class="token string">&quot;Verse&quot;</span>

<span class="token comment"># With overwrite</span>
sas export_audio <span class="token punctuation">\\</span>
  <span class="token parameter variable">--output</span> <span class="token string">&quot;~/Desktop/my-beat.wav&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--overwrite</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Path tilde is expanded; <code>.wav</code> is auto-appended if missing.</p><h2 id="_6-search-use-a-sample-from-the-library" tabindex="-1"><a class="header-anchor" href="#_6-search-use-a-sample-from-the-library" aria-hidden="true">#</a> 6. Search &amp; use a sample from the library</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Find a breakbeat at 136 BPM in A minor</span>
<span class="token assign-left variable">MATCH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>sas search_samples <span class="token punctuation">\\</span>
  <span class="token parameter variable">--query</span> <span class="token string">&quot;breakbeat&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--bpm</span> <span class="token number">136</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--key</span> <span class="token string">&quot;A minor&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--limit</span> <span class="token number">1</span> <span class="token punctuation">\\</span>
  <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;.changes.samples[0].id // empty&#39;</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$MATCH</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token comment"># Drop it into the active scene</span>
  sas add_sample_track --sample-id <span class="token string">&quot;<span class="token variable">$MATCH</span>&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No matching sample found — importing from disk&quot;</span>
  sas import_samples <span class="token parameter variable">--paths</span> <span class="token string">&quot;/tmp/amen.wav&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-stream-events-while-an-agent-works" tabindex="-1"><a class="header-anchor" href="#_7-stream-events-while-an-agent-works" aria-hidden="true">#</a> 7. Stream events while an agent works</h2><p>Watch what the agent is doing in real time from another terminal.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Terminal A (an agent is running some workflow)</span>
sas compose_scene --scene-name <span class="token string">&quot;Verse&quot;</span> <span class="token parameter variable">--description</span> <span class="token string">&quot;lo-fi&quot;</span> <span class="token parameter variable">--json</span> <span class="token string">&#39;{...}&#39;</span>

<span class="token comment"># Terminal B (human watching)</span>
sas events stream <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;
  select(.event == &quot;domainEvent&quot;)
  | .data
  | &quot;\\(.type): \\(.payload | tostring)&quot;
&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Typical output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scene:created: {&quot;sceneId&quot;:&quot;abc&quot;,&quot;name&quot;:&quot;Verse&quot;}
track:created: {&quot;sceneId&quot;:&quot;abc&quot;,&quot;trackId&quot;:&quot;t1&quot;,&quot;displayName&quot;:&quot;Bass&quot;,&quot;role&quot;:&quot;bass&quot;,&quot;kind&quot;:&quot;synth&quot;}
track:midi-written: {&quot;trackId&quot;:&quot;t1&quot;,&quot;noteCount&quot;:16}
track:created: {&quot;sceneId&quot;:&quot;abc&quot;,&quot;trackId&quot;:&quot;t2&quot;,&quot;displayName&quot;:&quot;Drums&quot;,&quot;role&quot;:&quot;drums&quot;,&quot;kind&quot;:&quot;synth&quot;}
track:midi-written: {&quot;trackId&quot;:&quot;t2&quot;,&quot;noteCount&quot;:32}
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-idempotent-retry-on-a-flaky-call" tabindex="-1"><a class="header-anchor" href="#_8-idempotent-retry-on-a-flaky-call" aria-hidden="true">#</a> 8. Idempotent retry on a flaky call</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">KEY</span><span class="token operator">=</span><span class="token string">&quot;compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">attempt</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">if</span> sas compose_scene <span class="token punctuation">\\</span>
      --idempotency-key <span class="token string">&quot;<span class="token variable">$KEY</span>&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--description</span> <span class="token string">&quot;lo-fi&quot;</span> <span class="token punctuation">\\</span>
      --scene-name <span class="token string">&quot;Verse&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--json</span> <span class="token string">&#39;{&quot;tracks&quot;:[...]}&#39;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;attempt <span class="token variable">$attempt</span> failed, retrying...&quot;</span>
  <span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Same <code>idempotency-key</code> means the first successful response is cached (60s, per-project) — subsequent attempts during that window return the cached success without re-executing.</p><h2 id="_9-discover-a-deferred-tool-and-use-it" tabindex="-1"><a class="header-anchor" href="#_9-discover-a-deferred-tool-and-use-it" aria-hidden="true">#</a> 9. Discover a deferred tool and use it</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># The agent wants to export, but export_audio isn&#39;t in its default tool list.</span>
sas tool_search <span class="token parameter variable">--query</span> <span class="token string">&quot;export wav&quot;</span> <span class="token parameter variable">--limit</span> <span class="token number">3</span>

<span class="token comment"># Top match: { name: &quot;export_audio&quot;, ... }</span>
<span class="token comment"># Read its full help to understand parameters:</span>
sas <span class="token builtin class-name">help</span> export_audio

<span class="token comment"># Now call it:</span>
sas export_audio <span class="token parameter variable">--output</span> ~/Desktop/x.wav
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-full-compose-→-render-for-performance-pipeline" tabindex="-1"><a class="header-anchor" href="#_10-full-compose-→-render-for-performance-pipeline" aria-hidden="true">#</a> 10. Full compose → render-for-performance pipeline</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 1. Create the scene</span>
sas compose_scene <span class="token punctuation">\\</span>
  <span class="token parameter variable">--description</span> <span class="token string">&quot;dark trap banger&quot;</span> <span class="token punctuation">\\</span>
  --scene-name <span class="token string">&quot;Drop&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--json</span> <span class="token string">&#39;{&quot;tracks&quot;:[
    {&quot;name&quot;:&quot;808&quot;,&quot;role&quot;:&quot;bass&quot;,&quot;prompt&quot;:&quot;deep dark 808 with slides&quot;},
    {&quot;name&quot;:&quot;Hats&quot;,&quot;role&quot;:&quot;drums&quot;,&quot;prompt&quot;:&quot;fast triplet hats&quot;},
    {&quot;name&quot;:&quot;Kick&quot;,&quot;role&quot;:&quot;drums&quot;,&quot;prompt&quot;:&quot;trap kick pattern&quot;},
    {&quot;name&quot;:&quot;Lead&quot;,&quot;role&quot;:&quot;lead&quot;,&quot;prompt&quot;:&quot;ominous brass stabs&quot;}
  ]}&#39;</span>

<span class="token comment"># 2. Tweak the mix</span>
sas dsl_set_track_fx <span class="token parameter variable">--track</span> <span class="token string">&quot;808&quot;</span> <span class="token parameter variable">--category</span> compressor <span class="token parameter variable">--enabled</span> <span class="token parameter variable">--preset</span> <span class="token number">4</span> --dry-wet <span class="token number">0.6</span>
sas set_scene_fx <span class="token parameter variable">--category</span> reverb <span class="token parameter variable">--enabled</span> <span class="token parameter variable">--preset</span> <span class="token number">2</span> --dry-wet <span class="token number">0.2</span>

<span class="token comment"># 3. Send to main output</span>
sas render_to_performance --scene-name <span class="token string">&quot;Drop&quot;</span>

<span class="token comment"># 4. Optionally export</span>
sas export_audio <span class="token parameter variable">--output</span> <span class="token string">&quot;~/Desktop/drop.wav&quot;</span> --scene-name <span class="token string">&quot;Drop&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s a multi-step composition → mix → perform → archive pipeline. Every line is one <code>sas</code> call. An agent would write this same script when asked to &quot;make a trap drop and send it to the main speakers, then save it.&quot;</p>`,34),i=[o];function r(l,u){return a(),n("div",null,i)}const c=s(t,[["render",r],["__file","examples.html.vue"]]);export{c as default};
