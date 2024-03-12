import{_ as l,r as a,o as r,c,a as e,b as t,d as o,w as i,e as d}from"./app-LXEm777p.js";const h="/sas_crucible.png",u={},p=d('<p><img src="'+h+'" alt="crucible-plugins"></p><h1 id="vst3-plugin" tabindex="-1"><a class="header-anchor" href="#vst3-plugin" aria-hidden="true">#</a> VST3 Plugin</h1><h2 id="what-is-dawnet" tabindex="-1"><a class="header-anchor" href="#what-is-dawnet" aria-hidden="true">#</a> What is DAWNet?</h2>',3),_=e("code",null,"audio stem splitting",-1),m=e("video",{width:"100%",controls:""},[e("source",{src:"https://storage.googleapis.com/docs-assets/dawnet-intro.mov",type:"video/mp4"}),t(" Your browser does not support the video tag. ")],-1),g=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),f={href:"https://storage.googleapis.com/docs-assets/DAWNetInstaller_v0_7_2_universal.zip",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,".vst3",-1),b=e("code",null,"/Library/Audio/Plug-Ins/VST3",-1),w=e("code",null," ~/Library/Audio/Plug-Ins/VST3",-1),A=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"NOTE: The plugin is in an active development, pre-alpha state. It has only been tested on Ableton 11 on MAC M1.")],-1),x=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),y=e("li",null,"Once the plugin becomes available in the DAW, add it to a track.",-1),N=e("li",null,[t("We can now connect the plugin to the "),e("code",null,"DAWNet Remote"),t(". To do this open the plugin and generate/copy a token from the top bar in the GUI.")],-1),W=e("li",null,[t("Paste this token in the "),e("code",null,"DAWNet Remote"),t(" and run it.")],-1),k=e("li",null,'Within a few seconds the plugin and remote should "discover" each other via the discovery server.',-1),T=e("li",null,"At this point you should see a representation of the remote function and are able to run it",-1),D=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("To add an audio file to the plugin from Ableton "),e("code",null,"opt + mouse drag"),t(" the file into the plugin To add an output file from the plugin to Ableton "),e("code",null,"opt + mouse drag"),t(" the icon found in the results view, on the right of the file name.")])],-1);function I(V,L){const n=a("RouterLink"),s=a("ExternalLinkIcon");return r(),c("div",null,[p,e("p",null,[t("DAWNet is a VST plugin that executes remote python functions. As an example, a user may want to perform "),_,t(" on a remote server. Using the "),o(n,{to:"/client/"},{default:i(()=>[t("DAWNet Client")]),_:1}),t(" they can send data from the DAW to the remote function, and back again.")]),m,g,e("p",null,[e("a",f,[t("Download"),o(s)]),t(" the zip package installer. Run it. By default, the "),v,t(" file should end up at this location: "),b,t(". Note: some people prefer plugins in their user directory: "),w,t(". Move it if you wish.")]),A,x,e("ul",null,[y,e("li",null,[t("Next, you will need to connect it to a remote compute instance. The easy way to get started is to use a pre-made "),o(n,{to:"/remotes/"},{default:i(()=>[t("DAWNet remote")]),_:1}),t(" and host it in Google CoLab.")]),N,W,k,T]),D])}const C=l(u,[["render",I],["__file","index.html.vue"]]);export{C as default};
