import{_ as n,r as i,o as a,c as l,a as e,b as t,d as r,w as s,e as d}from"./app-t9lE3VTp.js";const c={},h=e("h2",{id:"how-do-i-try-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-try-it","aria-hidden":"true"},"#"),t(" How do I try it?")],-1),u=e("li",null,"Download the plugin installer. Run it.",-1),m=d('<li>Open <a href="Ableton">https://www.ableton.com/</a>. Find the plugin in Ableton at <code>Plugin-Ins -&gt; SignalsAndSorcery -&gt; DAWNet.vst3</code>. (If you don&#39;t see the plugin go to <code>options -&gt; preferences -&gt; &quot;Use VST3 plugin system folder&quot; -&gt; rescan</code>)</li><li>Generate &amp; Copy a &quot;token&quot; from the DAWNet VST interface (top bar).</li><li>Paste the &quot;token&quot; into Colab. Find the token variable (called something similar to <code>dawnet_token</code>). Set the value.</li><li>At this point the Plugin and the Colab server should have <code>found</code> each other via the underlying web-socket server.</li><li>If a Python function was registered it will be translated into a web form/interface in the plugin. Files, e.x Audio &amp; MIDI files can be dragged from the host DAW&#39;s timeline into the plugin. The plugin will handle transferring files and other input params over the network to the remote compute.</li>',5);function p(f,g){const o=i("RouterLink");return a(),l("div",null,[h,e("ol",null,[u,e("li",null,[t("Choose a community "),r(o,{to:"/remote/"},{default:s(()=>[t("remote")]),_:1}),t(", AKA Google Colab notebook. Load it in Colab.")]),m])])}const b=n(c,[["render",p],["__file","index.html.vue"]]);export{b as default};
