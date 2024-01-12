import{_ as s,r as o,o as l,c as r,a as e,b as t,d as n,w as c}from"./app-SSPprGd_.js";const d={},h=e("h1",{id:"vst3-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vst3-plugin","aria-hidden":"true"},"#"),t(" VST3 Plugin")],-1),u=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),_={href:"https://storage.googleapis.com/docs-assets/DAWNetInstaller_v0_1_6.zip",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,".vst3",-1),m=e("code",null,"/Library/Audio/Plug-Ins/VST3",-1),f=e("code",null," ~/Library/Audio/Plug-Ins/VST3",-1),g=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"NOTE: The plugin is in an active development, pre-alpha state. It has only been tested on Ableton 11 on MAC M1.")],-1),v=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),b=e("li",null,"Once the plugin becomes available in the DAW, add it to a track.",-1),x=e("li",null,[t("We can now connect the plugin to the "),e("code",null,"DAWNet Remote"),t(". To do this open the plugin and generate/copy a token from the top bar in the GUI.")],-1),A=e("li",null,[t("Paste this token in the "),e("code",null,"DAWNet Remote"),t(" and run it.")],-1),y=e("li",null,'Within a few seconds the plugin and remote should "discover" each other via the discovery server.',-1),N=e("li",null,"At this point you should see a representation of the remote function and are able to run it",-1),k=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[t("To add an audio file to the plugin from Ableton "),e("code",null,"opt + mouse drag"),t(" the file into the plugin To add an output file from the plugin to Ableton "),e("code",null,"opt + mouse drag"),t(" the icon found in the results view, on the right of the file name.")])],-1);function T(w,I){const i=o("ExternalLinkIcon"),a=o("RouterLink");return l(),r("div",null,[h,u,e("p",null,[e("a",_,[t("Download"),n(i)]),t(" the zip package installer. Run it. By default, the "),p,t(" file should end up at this location: "),m,t(". Note: some people prefer plugins in their user directory: "),f,t(". Move it if you wish.")]),g,v,e("ul",null,[b,e("li",null,[t("Next, you will need to connect it to a remote compute instance. The easy way to get started is to use a pre-made "),n(a,{to:"/remotes/"},{default:c(()=>[t("DAWNet remote")]),_:1}),t(" and host it in Google CoLab.")]),x,A,y,N]),k])}const L=s(d,[["render",T],["__file","index.html.vue"]]);export{L as default};
