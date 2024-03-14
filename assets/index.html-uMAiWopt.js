import{_ as c,r as i,o as l,c as d,a as e,b as t,d as o,w as a,e as s}from"./app-A0fOer8q.js";const h="/sas_crucible.png",u={},p=s('<p><img src="'+h+'" alt="crucible-plugins"></p><h1 id="crucible-plugins" tabindex="-1"><a class="header-anchor" href="#crucible-plugins" aria-hidden="true">#</a> Crucible Plugins</h1><h2 id="crucible-audio" tabindex="-1"><a class="header-anchor" href="#crucible-audio" aria-hidden="true">#</a> Crucible Audio</h2>',3),_=e("code",null,"audio stem splitting",-1),m=e("video",{width:"100%",controls:""},[e("source",{src:"https://storage.googleapis.com/docs-assets/dawnet-intro.mov",type:"video/mp4"}),t(" Your browser does not support the video tag. ")],-1),g=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),b={href:"https://storage.googleapis.com/docs-assets/DAWNetInstaller_v0_7_2_universal.zip",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".vst3",-1),v=e("code",null,"/Library/Audio/Plug-Ins/VST3",-1),x=e("code",null," ~/Library/Audio/Plug-Ins/VST3",-1),A=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"NOTE: The plugin is in an active development, pre-alpha state. It has only been tested on Ableton 11 on MAC M1.")],-1),w=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),y=e("li",null,"Once the plugin becomes available in the DAW, add it to a track.",-1),N=e("li",null,[t("We can now connect the plugin to the "),e("code",null,"DAWNet Remote"),t(". To do this open the plugin and generate/copy a token from the top bar in the GUI.")],-1),k=e("li",null,[t("Paste this token in the "),e("code",null,"DAWNet Remote"),t(" and run it.")],-1),C=e("li",null,'Within a few seconds the plugin and remote should "discover" each other via the discovery server.',-1),I=e("li",null,"At this point you should see a representation of the remote function and are able to run it",-1),T=s('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To add an audio file to the plugin from Ableton <code>opt + mouse drag</code> the file into the plugin To add an output file from the plugin to Ableton <code>opt + mouse drag</code> the icon found in the results view, on the right of the file name.</p></div><h2 id="crucible-web-chrome-extension" tabindex="-1"><a class="header-anchor" href="#crucible-web-chrome-extension" aria-hidden="true">#</a> Crucible Web (Chrome Extension)</h2><p>(coming soon ...)</p><h2 id="crucible-video" tabindex="-1"><a class="header-anchor" href="#crucible-video" aria-hidden="true">#</a> Crucible Video</h2><p>(coming soon ...)</p><h2 id="crucible-design-figma" tabindex="-1"><a class="header-anchor" href="#crucible-design-figma" aria-hidden="true">#</a> Crucible Design (FIGMA)</h2><p>(coming soon ...)</p>',7);function W(D,V){const n=i("RouterLink"),r=i("ExternalLinkIcon");return l(),d("div",null,[p,e("p",null,[t("Crucible-Audio is a VST plugin that executes remote python functions. As an example, a user may want to perform "),_,t(" on a remote server. Using the "),o(n,{to:"/client/"},{default:a(()=>[t("DAWNet Client")]),_:1}),t(" they can send data from the DAW to the remote function, and back again.")]),m,g,e("p",null,[e("a",b,[t("Download"),o(r)]),t(" the zip package installer. Run it. By default, the "),f,t(" file should end up at this location: "),v,t(". Note: some people prefer plugins in their user directory: "),x,t(". Move it if you wish.")]),A,w,e("ul",null,[y,e("li",null,[t("Next, you will need to connect it to a remote compute instance. The easy way to get started is to use a pre-made "),o(n,{to:"/remotes/"},{default:a(()=>[t("DAWNet remote")]),_:1}),t(" and host it in Google CoLab.")]),N,k,C,I]),T])}const R=c(u,[["render",W],["__file","index.html.vue"]]);export{R as default};
