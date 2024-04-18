import{_ as l,r as a,o as c,c as d,a as e,d as t,b as o,w as s,e as r}from"./app-Ji9I-h54.js";const h="/sas_crucible.png",u={},p=r('<p><img src="'+h+'" alt="crucible-plugins"></p><h1 id="crucible-plugins" tabindex="-1"><a class="header-anchor" href="#crucible-plugins" aria-hidden="true">#</a> Crucible Plugins</h1><h2 id="crucible-web" tabindex="-1"><a class="header-anchor" href="#crucible-web" aria-hidden="true">#</a> Crucible Web</h2>',3),_={href:"http://signalsandsorcery.app",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"crucible-audio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#crucible-audio","aria-hidden":"true"},"#"),t(" Crucible Audio")],-1),m=e("code",null,"audio stem splitting",-1),b=e("video",{width:"100%",controls:""},[e("source",{src:"https://storage.googleapis.com/docs-assets/dawnet-intro.mov",type:"video/mp4"}),t(" Your browser does not support the video tag. ")],-1),f=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),v={href:"https://storage.googleapis.com/docs-assets/DAWNetInstaller_v0_7_6_universal.zip",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,".vst3",-1),A=e("code",null,"/Library/Audio/Plug-Ins/VST3",-1),w=e("code",null," ~/Library/Audio/Plug-Ins/VST3",-1),y=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"NOTE: The plugin is in an active development, pre-alpha state. It has only been tested on Ableton 11 on MAC M1.")],-1),N=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),k=e("li",null,"Once the plugin becomes available in the DAW, add it to a track.",-1),C=e("li",null,[t("We can now connect the plugin to the "),e("code",null,"DAWNet Remote"),t(". To do this open the plugin and generate/copy a token from the top bar in the GUI.")],-1),W=e("li",null,[t("Paste this token in the "),e("code",null,"DAWNet Remote"),t(" and run it.")],-1),I=e("li",null,'Within a few seconds the plugin and remote should "discover" each other via the discovery server.',-1),T=e("li",null,"At this point you should see a representation of the remote function and are able to run it",-1),D=r('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To add an audio file to the plugin from Ableton <code>opt + mouse drag</code> the file into the plugin To add an output file from the plugin to Ableton <code>opt + mouse drag</code> the icon found in the results view, on the right of the file name.</p></div><h2 id="crucible-video" tabindex="-1"><a class="header-anchor" href="#crucible-video" aria-hidden="true">#</a> Crucible Video</h2><p>(coming soon ...)</p><h2 id="crucible-design-figma" tabindex="-1"><a class="header-anchor" href="#crucible-design-figma" aria-hidden="true">#</a> Crucible Design (FIGMA)</h2><p>(coming soon ...)</p>',5);function V(L,R){const n=a("ExternalLinkIcon"),i=a("RouterLink");return c(),d("div",null,[p,e("p",null,[e("a",_,[t("CrucibleWeb"),o(n)]),t(" is the best place to get started. Connect, test, and use your Elixirs in the browser.")]),g,e("p",null,[t("Crucible-Audio is a VST plugin that executes remote python functions. As an example, a user may want to perform "),m,t(" on a remote server. Using the "),o(i,{to:"/client/"},{default:s(()=>[t("DAWNet Client")]),_:1}),t(" they can send data from the DAW to the remote function, and back again.")]),b,f,e("p",null,[e("a",v,[t("Download"),o(n)]),t(" the zip package installer. Run it. By default, the "),x,t(" file should end up at this location: "),A,t(". Note: some people prefer plugins in their user directory: "),w,t(". Move it if you wish.")]),y,N,e("ul",null,[k,e("li",null,[t("Next, you will need to connect it to a remote compute instance. The easy way to get started is to use a pre-made "),o(i,{to:"/remotes/"},{default:s(()=>[t("DAWNet remote")]),_:1}),t(" and host it in Google CoLab.")]),C,W,I,T]),D])}const P=l(u,[["render",V],["__file","index.html.vue"]]);export{P as default};
