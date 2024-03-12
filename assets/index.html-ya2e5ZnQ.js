import{_ as s,r as a,o as i,c as r,a as t,b as e,d as n,e as l}from"./app-0vCEJtZT.js";const d="/sas_getting_started.png",c={},p=l('<p><img src="'+d+'" alt="getting-started"></p><h1 id="getting-started-end-user-music-workflow" tabindex="-1"><a class="header-anchor" href="#getting-started-end-user-music-workflow" aria-hidden="true">#</a> Getting Started (end-user music workflow)</h1><h2 id="how-do-i-use-it" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-it" aria-hidden="true">#</a> How do I use it?</h2><video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/getting-started-video.mov"> Your browser does not support the video tag. </video><ol><li><p>Download the plugin installer. Run it.</p></li><li><p>Open <a href="Ableton">https://www.ableton.com/</a>. Find the plugin in Ableton&#39;s plugin menu: <code>Plugin-Ins -&gt; SignalsAndSorcery -&gt; DAWNet.vst3</code>. (If you don&#39;t see the plugin go to <code>options -&gt; preferences -&gt; &quot;Use VST3 plugin system folder&quot; -&gt; rescan</code>) <img src="https://storage.googleapis.com/docs-assets/gettingstarted2.png" alt="Step 1&amp;2"></p></li><li><p>Open the plugin. The home view of the plugin lists remade Google Colabs. Click on a Colab to open it.</p></li><li><p>From the plugin copy the &quot;token&quot; from top right of DAWNet VST interface. <img src="https://storage.googleapis.com/docs-assets/gettingsstarted4.png" alt="Step 3&amp;4"></p></li><li><p>Paste the &quot;token&quot; into Colab. Find the token variable (called something similar to <code>dawnet_token</code>). Set the value. <img src="https://storage.googleapis.com/docs-assets/gettingstarted5.png" alt="Step 5"></p></li><li><p>At this point the Plugin and the Colab server should have <code>found</code> each other via the underlying web-socket server.</p></li><li><p>If a Python function was registered it will be translated into a web form/interface in the plugin. Files, e.x Audio &amp; MIDI files can be dragged from the host DAW&#39;s timeline into the plugin. The plugin will handle transferring files and other input params over the network to the remote compute.<br><img src="https://storage.googleapis.com/docs-assets/gettingstarted7.png" alt="Step 7"></p></li></ol><h2 id="workflow-example" tabindex="-1"><a class="header-anchor" href="#workflow-example" aria-hidden="true">#</a> Workflow example</h2>',6),g=t("code",null,"audio style transfer",-1),h={href:"https://ai.meta.com/resources/models-and-libraries/audiocraft/",target:"_blank",rel:"noopener noreferrer"},u=t("video",{width:"100%",controls:""},[t("source",{src:"https://storage.googleapis.com/docs-assets/style-tranfer-demo.mov"}),e(" Your browser does not support the video tag. ")],-1);function m(f,w){const o=a("ExternalLinkIcon");return i(),r("div",null,[p,t("p",null,[e("In this video I demonstrate how to use the DAWNet plugin to perform "),g,e(" powered by Meta's "),t("a",h,[e("MusicGen"),n(o)]),e(" project.")]),u])}const b=s(c,[["render",m],["__file","index.html.vue"]]);export{b as default};
