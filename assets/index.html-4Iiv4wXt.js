import{_ as r,r as o,o as s,c as l,a as e,b as t,d as n,w as d,e as c}from"./app-SSPprGd_.js";const h={},u=e("h2",{id:"how-do-i-use-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-use-it","aria-hidden":"true"},"#"),t(" How do I use it?")],-1),p=e("li",null,"Download the plugin installer. Run it.",-1),m=c('<li>Open <a href="Ableton">https://www.ableton.com/</a>. Find the plugin in Ableton at <code>Plugin-Ins -&gt; SignalsAndSorcery -&gt; DAWNet.vst3</code>. (If you don&#39;t see the plugin go to <code>options -&gt; preferences -&gt; &quot;Use VST3 plugin system folder&quot; -&gt; rescan</code>)</li><li>Generate &amp; Copy a &quot;token&quot; from the DAWNet VST interface (top bar).</li><li>Paste the &quot;token&quot; into Colab. Find the token variable (called something similar to <code>dawnet_token</code>). Set the value.</li><li>At this point the Plugin and the Colab server should have <code>found</code> each other via the underlying web-socket server.</li><li>If a Python function was registered it will be translated into a web form/interface in the plugin. Files, e.x Audio &amp; MIDI files can be dragged from the host DAW&#39;s timeline into the plugin. The plugin will handle transferring files and other input params over the network to the remote compute.</li>',5),f=e("h2",{id:"workflow-example",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#workflow-example","aria-hidden":"true"},"#"),t(" Workflow example")],-1),_=e("code",null,"audio style transfer",-1),g={href:"https://ai.meta.com/resources/models-and-libraries/audiocraft/",target:"_blank",rel:"noopener noreferrer"},w=e("video",{width:"100%",controls:""},[e("source",{src:"https://storage.googleapis.com/docs-assets/style-tranfer-demo.mov"}),t(" Your browser does not support the video tag. ")],-1);function b(k,v){const i=o("RouterLink"),a=o("ExternalLinkIcon");return s(),l("div",null,[u,e("ol",null,[p,e("li",null,[t("Choose a community "),n(i,{to:"/remotes/"},{default:d(()=>[t("remote")]),_:1}),t(", AKA Google Colab notebook. Load it in Colab.")]),m]),f,e("p",null,[t("In this video I demonstrate how to use the DAWNet plugin to perform "),_,t(" powered by Meta's "),e("a",g,[t("MusicGen"),n(a)]),t(" project.")]),w])}const A=r(h,[["render",b],["__file","index.html.vue"]]);export{A as default};
