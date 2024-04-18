import{_ as l,r,o as d,c as h,a as e,d as t,b as o,w as n,e as a}from"./app-5htsH_p-.js";const c="/sas_getting_started.png",u="/sas_patch_bay.png",p={},g=a('<p><img src="'+c+'" alt="getting-started"></p><h1 id="getting-started-end-user-web-app-workflow" tabindex="-1"><a class="header-anchor" href="#getting-started-end-user-web-app-workflow" aria-hidden="true">#</a> Getting Started (end-user web app workflow)</h1><h2 id="how-do-i-use-it" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-it" aria-hidden="true">#</a> How do I use it?</h2>',3),m={href:"https://signalsandsorcery.app",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"Copy or generate a new Token",-1),_=e("li",null,"Launch a Google Colab. With the generated Token",-1),b=e("li",null,[t("Open & use the "),e("code",null,"Connected Elixir"),t(" in the Crucible Web app")],-1),w=a('<h1 id="getting-started-end-user-music-workflow" tabindex="-1"><a class="header-anchor" href="#getting-started-end-user-music-workflow" aria-hidden="true">#</a> Getting Started (end-user music workflow)</h1><h2 id="how-do-i-use-it-1" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-it-1" aria-hidden="true">#</a> How do I use it?</h2><video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/getting-started-video.mov"> Your browser does not support the video tag. </video><ol><li><p>Download the plugin installer. Run it.</p></li><li><p>Open <a href="Ableton">https://www.ableton.com/</a>. Find the plugin in Ableton&#39;s plugin menu: <code>Plugin-Ins -&gt; SignalsAndSorcery -&gt; DAWNet.vst3</code>. (If you don&#39;t see the plugin go to <code>options -&gt; preferences -&gt; &quot;Use VST3 plugin system folder&quot; -&gt; rescan</code>) <img src="https://storage.googleapis.com/docs-assets/gettingstarted2.png" alt="Step 1&amp;2"></p></li><li><p>Open the plugin. The home view of the plugin lists remade Google Colabs. Click on a Colab to open it.</p></li><li><p>From the plugin copy the &quot;token&quot; from top right of DAWNet VST interface. <img src="https://storage.googleapis.com/docs-assets/gettingsstarted4.png" alt="Step 3&amp;4"></p></li><li><p>Paste the &quot;token&quot; into Colab. Find the token variable (called something similar to <code>dawnet_token</code>). Set the value. <img src="https://storage.googleapis.com/docs-assets/gettingstarted5.png" alt="Step 5"></p></li><li><p>At this point the Plugin and the Colab server should have <code>found</code> each other via the underlying web-socket server.</p></li><li><p>If a Python function was registered it will be translated into a web form/interface in the plugin. Files, e.x Audio &amp; MIDI files can be dragged from the host DAW&#39;s timeline into the plugin. The plugin will handle transferring files and other input params over the network to the remote compute.<br><img src="https://storage.googleapis.com/docs-assets/gettingstarted7.png" alt="Step 7"></p></li></ol><h2 id="workflow-example" tabindex="-1"><a class="header-anchor" href="#workflow-example" aria-hidden="true">#</a> Workflow example</h2>',5),x=e("a",{href:"/crucible-plugins"},"Crucible plugin",-1),k=e("code",null,"audio style transfer",-1),v={href:"https://ai.meta.com/resources/models-and-libraries/audiocraft/",target:"_blank",rel:"noopener noreferrer"},y=a('<video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/style-tranfer-demo.mov"> Your browser does not support the video tag. </video><p><img src="'+u+'" alt="getting-started"></p><h1 id="getting-started-developing-an-elixir" tabindex="-1"><a class="header-anchor" href="#getting-started-developing-an-elixir" aria-hidden="true">#</a> Getting Started (developing an Elixir)</h1><h2 id="create-an-elixir" tabindex="-1"><a class="header-anchor" href="#create-an-elixir" aria-hidden="true">#</a> Create an Elixir</h2>',4),C=e("li",null,"Launch the Elixir template in either a Google Colab or as a Jyuptyer notebook.",-1),S=e("h2",{id:"publish-an-elixir-to-the-vault-coming-soon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#publish-an-elixir-to-the-vault-coming-soon","aria-hidden":"true"},"#"),t(" Publish an Elixir to the Vault (coming soon ...)")],-1),I=e("li",null,[t("Build your "),e("code",null,".ipynb"),t(" file into an Elixir using the "),e("code",null,"runes-cli")],-1),E=e("li",null,[t("Publish your Elixir to the Vault using the "),e("code",null,"runes-cli")],-1);function A(G,T){const s=r("ExternalLinkIcon"),i=r("RouterLink");return d(),h("div",null,[g,e("ol",null,[e("li",null,[t("Go to "),e("a",m,[t("Crucible Web"),o(s)])]),f,_,b]),w,e("p",null,[t("In this video I demonstrate how to use a "),x,t(" to perform "),k,t(" powered by Meta's "),e("a",v,[t("MusicGen"),o(s)]),t(" project.")]),y,e("ol",null,[C,e("li",null,[t("Write your function in the notebook. See the "),o(i,{to:"/elixirs/"},{default:n(()=>[t("Elixir")]),_:1}),t(" section for more details.")]),e("li",null,[t("Test your function by connecting it to a Crucible plugin. See the "),o(i,{to:"/crucible-plugins/"},{default:n(()=>[t("Crucible")]),_:1}),t(" section for more details")])]),S,e("ol",null,[e("li",null,[t("Install the "),o(i,{to:"/runes-cli/"},{default:n(()=>[t("RUNES CLI")]),_:1})]),I,E])])}const W=l(p,[["render",A],["__file","index.html.vue"]]);export{W as default};
