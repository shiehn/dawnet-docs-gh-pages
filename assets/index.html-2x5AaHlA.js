import{_ as l,r as s,o as d,c,a as t,d as e,b as o,w as n,e as a}from"./app-y0Q3fYoN.js";const h="/sas_getting_started.png",u={},g=a('<p><img src="'+h+'" alt="getting-started"></p><h1 id="getting-started-end-user-music-workflow" tabindex="-1"><a class="header-anchor" href="#getting-started-end-user-music-workflow" aria-hidden="true">#</a> Getting Started (end-user music workflow)</h1><h2 id="how-do-i-use-it" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-it" aria-hidden="true">#</a> How do I use it?</h2><video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/getting-started-video.mov"> Your browser does not support the video tag. </video><ol><li><p>Download the plugin installer. Run it.</p></li><li><p>Open <a href="Ableton">https://www.ableton.com/</a>. Find the plugin in Ableton&#39;s plugin menu: <code>Plugin-Ins -&gt; SignalsAndSorcery -&gt; DAWNet.vst3</code>. (If you don&#39;t see the plugin go to <code>options -&gt; preferences -&gt; &quot;Use VST3 plugin system folder&quot; -&gt; rescan</code>) <img src="https://storage.googleapis.com/docs-assets/gettingstarted2.png" alt="Step 1&amp;2"></p></li><li><p>Open the plugin. The home view of the plugin lists remade Google Colabs. Click on a Colab to open it.</p></li><li><p>From the plugin copy the &quot;token&quot; from top right of DAWNet VST interface. <img src="https://storage.googleapis.com/docs-assets/gettingsstarted4.png" alt="Step 3&amp;4"></p></li><li><p>Paste the &quot;token&quot; into Colab. Find the token variable (called something similar to <code>dawnet_token</code>). Set the value. <img src="https://storage.googleapis.com/docs-assets/gettingstarted5.png" alt="Step 5"></p></li><li><p>At this point the Plugin and the Colab server should have <code>found</code> each other via the underlying web-socket server.</p></li><li><p>If a Python function was registered it will be translated into a web form/interface in the plugin. Files, e.x Audio &amp; MIDI files can be dragged from the host DAW&#39;s timeline into the plugin. The plugin will handle transferring files and other input params over the network to the remote compute.<br><img src="https://storage.googleapis.com/docs-assets/gettingstarted7.png" alt="Step 7"></p></li></ol><h2 id="workflow-example" tabindex="-1"><a class="header-anchor" href="#workflow-example" aria-hidden="true">#</a> Workflow example</h2>',6),p=t("a",{href:"/crucible-plugins"},"Crucible plugin",-1),m=t("code",null,"audio style transfer",-1),f={href:"https://ai.meta.com/resources/models-and-libraries/audiocraft/",target:"_blank",rel:"noopener noreferrer"},_=a('<video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/style-tranfer-demo.mov"> Your browser does not support the video tag. </video><h1 id="getting-started-developing-an-elixir" tabindex="-1"><a class="header-anchor" href="#getting-started-developing-an-elixir" aria-hidden="true">#</a> Getting Started (developing an Elixir)</h1><h2 id="create-an-elixir" tabindex="-1"><a class="header-anchor" href="#create-an-elixir" aria-hidden="true">#</a> Create an Elixir</h2>',3),b=t("li",null,"Launch the Elixir template in either a Google Colab or as a Jyuptyer notebook.",-1),w=t("h2",{id:"publish-an-elixir-to-the-vault-coming-soon",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#publish-an-elixir-to-the-vault-coming-soon","aria-hidden":"true"},"#"),e(" Publish an Elixir to the Vault (coming soon ...)")],-1),x=t("li",null,[e("Build your "),t("code",null,".ipynb"),e(" file into an Elixir using the "),t("code",null,"runes-cli")],-1),v=t("li",null,[e("Publish your Elixir to the Vault using the "),t("code",null,"runes-cli")],-1);function k(y,S){const r=s("ExternalLinkIcon"),i=s("RouterLink");return d(),c("div",null,[g,t("p",null,[e("In this video I demonstrate how to use a "),p,e(" to perform "),m,e(" powered by Meta's "),t("a",f,[e("MusicGen"),o(r)]),e(" project.")]),_,t("ol",null,[b,t("li",null,[e("Write your function in the notebook. See the "),o(i,{to:"/elixirs/"},{default:n(()=>[e("Elixir")]),_:1}),e(" section for more details.")]),t("li",null,[e("Test your function by connecting it to a Crucible plugin. See the "),o(i,{to:"/crucible-plugins/"},{default:n(()=>[e("Crucible")]),_:1}),e(" section for more details")])]),w,t("ol",null,[t("li",null,[e("Install the "),o(i,{to:"/runes-cli/"},{default:n(()=>[e("RUNES CLI")]),_:1})]),x,v])])}const I=l(u,[["render",k],["__file","index.html.vue"]]);export{I as default};
