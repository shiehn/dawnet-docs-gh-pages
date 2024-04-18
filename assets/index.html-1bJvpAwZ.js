import{_ as l,r as s,o as c,c as d,a as e,d as t,b as o,w as r,e as n}from"./app-5htsH_p-.js";const h="/sas_patch_bay_two.png",u="/sas_crucible.png",p={},_=n('<p><img src="'+h+'" alt="Patch Bay Two"></p><h1 id="crucible-plugins" tabindex="-1"><a class="header-anchor" href="#crucible-plugins" aria-hidden="true">#</a> Crucible Plugins</h1><h2 id="crucible-web" tabindex="-1"><a class="header-anchor" href="#crucible-web" aria-hidden="true">#</a> Crucible Web</h2>',3),g={href:"http://signalsandsorcery.app",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"crucible-audio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#crucible-audio","aria-hidden":"true"},"#"),t(" Crucible Audio")],-1),b=e("code",null,"audio stem splitting",-1),f=n('<video width="100%" controls><source src="https://storage.googleapis.com/docs-assets/dawnet-intro.mov" type="video/mp4"> Your browser does not support the video tag. </video><p><img src="'+u+'" alt="crucible-plugins"></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>',3),v={href:"https://storage.googleapis.com/docs-assets/DAWNetInstaller_v0_7_6_universal.zip",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,".vst3",-1),x=e("code",null,"/Library/Audio/Plug-Ins/VST3",-1),y=e("code",null," ~/Library/Audio/Plug-Ins/VST3",-1),A=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"NOTE: The plugin is in an active development, pre-alpha state. It has only been tested on Ableton 11 on MAC M1.")],-1),N=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),t(" Usage")],-1),k=e("li",null,"Once the plugin becomes available in the DAW, add it to a track.",-1),C=e("li",null,[t("We can now connect the plugin to the "),e("code",null,"DAWNet Remote"),t(". To do this open the plugin and generate/copy a token from the top bar in the GUI.")],-1),T=e("li",null,[t("Paste this token in the "),e("code",null,"DAWNet Remote"),t(" and run it.")],-1),W=e("li",null,'Within a few seconds the plugin and remote should "discover" each other via the discovery server.',-1),I=e("li",null,"At this point you should see a representation of the remote function and are able to run it",-1),D=n('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To add an audio file to the plugin from Ableton <code>opt + mouse drag</code> the file into the plugin To add an output file from the plugin to Ableton <code>opt + mouse drag</code> the icon found in the results view, on the right of the file name.</p></div><h2 id="crucible-video" tabindex="-1"><a class="header-anchor" href="#crucible-video" aria-hidden="true">#</a> Crucible Video</h2><p>(coming soon ...)</p><h2 id="crucible-design-figma" tabindex="-1"><a class="header-anchor" href="#crucible-design-figma" aria-hidden="true">#</a> Crucible Design (FIGMA)</h2><p>(coming soon ...)</p>',5);function V(L,P){const i=s("ExternalLinkIcon"),a=s("RouterLink");return c(),d("div",null,[_,e("p",null,[e("a",g,[t("CrucibleWeb"),o(i)]),t(" is the best place to get started. Connect, test, and use your Elixirs in the browser.")]),m,e("p",null,[t("Crucible-Audio is a VST plugin that executes remote python functions. As an example, a user may want to perform "),b,t(" on a remote server. Using the "),o(a,{to:"/client/"},{default:r(()=>[t("DAWNet Client")]),_:1}),t(" they can send data from the DAW to the remote function, and back again.")]),f,e("p",null,[e("a",v,[t("Download"),o(i)]),t(" the zip package installer. Run it. By default, the "),w,t(" file should end up at this location: "),x,t(". Note: some people prefer plugins in their user directory: "),y,t(". Move it if you wish.")]),A,N,e("ul",null,[k,e("li",null,[t("Next, you will need to connect it to a remote compute instance. The easy way to get started is to use a pre-made "),o(a,{to:"/remotes/"},{default:r(()=>[t("DAWNet remote")]),_:1}),t(" and host it in Google CoLab.")]),C,T,W,I]),D])}const B=l(p,[["render",V],["__file","index.html.vue"]]);export{B as default};
