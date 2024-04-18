import{_ as i,r,o as a,c as l,a as e,d as t,b as n,e as o}from"./app-Nzex3tff.js";const d="/sas_getting_started.png",c="/sas_patch_bay.png",h={},p=o('<p><img src="'+d+'" alt="getting-started"></p><h1 id="getting-started-end-user-web-app-workflow" tabindex="-1"><a class="header-anchor" href="#getting-started-end-user-web-app-workflow" aria-hidden="true">#</a> Getting Started (end-user web app workflow)</h1><h2 id="how-do-i-use-it" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-it" aria-hidden="true">#</a> How do I use it?</h2>',3),u={href:"https://signalsandsorcery.app/",target:"_blank",rel:"noopener noreferrer"},g=o("<li>Copy the &quot;token&quot; from the top right of the plugin.</li><li>Install the Runes CLI. See [Runes-CLI]/runes-cli/ for details. TLDR: <code>pip install runes-cli</code></li><li>Run the runes-cli in a terminal with the key word <code>runes</code>. Select <code>tokens</code>, then <code>add</code>, then paste the token copied from the plugin.</li><li>Run a pre-made Rune. From the runes-cli, select <code>runes (run or manage published runes)</code> then select an <code>available rune</code> from the list. I recommend starting with a rune that does not require a GPU. (look for CPU) Try the <code>Rune Template</code> for starter.</li><li>After the Rune has has started, you can interact with if from the Crucible Web plugin. Go back to the plugin and select the <code>Connected Runes</code> tab. You should see the Rune you started. Click on the Rune to interact with it!</li>",5),m=o('<h1 id="getting-started-end-user-music-workflow" tabindex="-1"><a class="header-anchor" href="#getting-started-end-user-music-workflow" aria-hidden="true">#</a> Getting Started (end-user music workflow)</h1><h2 id="how-do-i-use-it-1" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-it-1" aria-hidden="true">#</a> How do I use it?</h2><video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/getting-started-video.mov"> Your browser does not support the video tag. </video><ol><li><p>Download the plugin installer. Run it.</p></li><li><p>Open <a href="Ableton">https://www.ableton.com/</a>. Find the plugin in Ableton&#39;s plugin menu: <code>Plugin-Ins -&gt; SignalsAndSorcery -&gt; DAWNet.vst3</code>. (If you don&#39;t see the plugin go to <code>options -&gt; preferences -&gt; &quot;Use VST3 plugin system folder&quot; -&gt; rescan</code>) <img src="https://storage.googleapis.com/docs-assets/gettingstarted2.png" alt="Step 1&amp;2"></p></li><li><p>Open the plugin. The home view of the plugin lists remade Google Colabs. Click on a Colab to open it.</p></li><li><p>From the plugin copy the &quot;token&quot; from top right of DAWNet VST interface. <img src="https://storage.googleapis.com/docs-assets/gettingsstarted4.png" alt="Step 3&amp;4"></p></li><li><p>Paste the &quot;token&quot; into Colab. Find the token variable (called something similar to <code>dawnet_token</code>). Set the value. <img src="https://storage.googleapis.com/docs-assets/gettingstarted5.png" alt="Step 5"></p></li><li><p>At this point the Plugin and the Colab server should have <code>found</code> each other via the underlying web-socket server.</p></li><li><p>If a Python function was registered it will be translated into a web form/interface in the plugin. Files, e.x Audio &amp; MIDI files can be dragged from the host DAW&#39;s timeline into the plugin. The plugin will handle transferring files and other input params over the network to the remote compute.<br><img src="https://storage.googleapis.com/docs-assets/gettingstarted7.png" alt="Step 7"></p></li></ol><h2 id="workflow-example" tabindex="-1"><a class="header-anchor" href="#workflow-example" aria-hidden="true">#</a> Workflow example</h2>',5),f=e("a",{href:"/crucible-plugins"},"Crucible plugin",-1),w=e("code",null,"audio style transfer",-1),_={href:"https://ai.meta.com/resources/models-and-libraries/audiocraft/",target:"_blank",rel:"noopener noreferrer"},b=e("video",{width:"100%",controls:""},[e("source",{src:"https://storage.googleapis.com/docs-assets/style-tranfer-demo.mov"}),t(" Your browser does not support the video tag. ")],-1),k=e("p",null,[e("img",{src:c,alt:"getting-started"})],-1);function v(x,y){const s=r("ExternalLinkIcon");return a(),l("div",null,[p,e("ol",null,[e("li",null,[t("Open the "),e("a",u,[t("Crucible Web"),n(s)]),t(" plugin in a browser.")]),g]),m,e("p",null,[t("In this video I demonstrate how to use a "),f,t(" to perform "),w,t(" powered by Meta's "),e("a",_,[t("MusicGen"),n(s)]),t(" project.")]),b,k])}const I=i(h,[["render",v],["__file","index.html.vue"]]);export{I as default};
