import{_ as r,r as a,o as s,c as h,a as e,b as t,d as o,w as c,e as l}from"./app-dgk25ee9.js";const d="/sas_elixir.png",u={},_=l('<p><img src="'+d+'" alt="elixirs"></p><h1 id="dawnet-remotes" tabindex="-1"><a class="header-anchor" href="#dawnet-remotes" aria-hidden="true">#</a> DAWNet Remotes</h1><h2 id="what-are-they" tabindex="-1"><a class="header-anchor" href="#what-are-they" aria-hidden="true">#</a> What are they?</h2><p>DAWNet remotes are python scripts that are registered with the DAWNet discovery server. They are triggered remotely by the DAWNet plugin. They can be run locally, on a remote server, or in Google Colabs. They can be used to execute arbitrary code, or to wrap existing projects.</p><h2 id="how-do-i-use-them" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-them" aria-hidden="true">#</a> How do I use them?</h2>',5),m=e("li",null,'Generate & Copy a "token" from the DAWNet VST interface (top bar).',-1),p=e("li",null,"Choose a colab below and follow the link.",-1),b=e("li",null,'Open the colab in Google Colab by clicking the "Open in Colab" button.',-1),g=e("li",null,[t('Paste the "token" into Colab. Find the token variable (called something similar to '),e("code",null,"dawnet_token"),t("). Set the value.")],-1),f=e("li",null,[t("At this point the Plugin and the Colab server should have "),e("code",null,"found"),t(" each other via the underlying web-socket server.")],-1),y=e("li",null,'Fill in values & files in the colab form. Click "Run" in the colab form.',-1),k=e("h2",{id:"google-colabs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-colabs","aria-hidden":"true"},"#"),t(" Google Colabs")],-1),w=e("strong",null,"Remote Template",-1),D=e("br",null,null,-1),N=e("br",null,null,-1),x={href:"https://colab.research.google.com/github/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_template.ipynb",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"Style Transfer - MusicGen",-1),A=e("br",null,null,-1),v=e("br",null,null,-1),W={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_Style_Transfer_MusicGen.ipynb",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"Style Transfer - MusicLDM",-1),S=e("br",null,null,-1),G=e("br",null,null,-1),L={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_Style_Transfer_AudioLDM2.ipynb",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"Stemify - Demucs",-1),C=e("br",null,null,-1),O=e("br",null,null,-1),B={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_Demucs.ipynb",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"Text-To-Audio MusicGen",-1),P=e("br",null,null,-1),V=e("br",null,null,-1),E={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_MusicGen.ipynb",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"Beat Detection - BeatNet",-1),j=e("br",null,null,-1),F=e("br",null,null,-1),H={href:"https://colab.research.google.com/github/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_BeatNet.ipynb",target:"_blank",rel:"noopener noreferrer"},U=l('<h2 id="virtual-machine-gpu-todo" tabindex="-1"><a class="header-anchor" href="#virtual-machine-gpu-todo" aria-hidden="true">#</a> Virtual Machine / GPU (TODO)</h2><p>(TODO) explain setting up a gpu somewhere ...</p><h2 id="local-gpu-todo" tabindex="-1"><a class="header-anchor" href="#local-gpu-todo" aria-hidden="true">#</a> Local GPU (TODO)</h2><p>(TODO) explain local gpu ...</p><h2 id="how-do-i-make-my-own" tabindex="-1"><a class="header-anchor" href="#how-do-i-make-my-own" aria-hidden="true">#</a> How do I make my own?</h2>',5),Y={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_template.ipynb",target:"_blank",rel:"noopener noreferrer"},J=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"NOTE: The system does not guarantee any security. Do not expose sensitive data in your remotes.")],-1);function z(K,Q){const i=a("RouterLink"),n=a("ExternalLinkIcon");return s(),h("div",null,[_,e("ol",null,[e("li",null,[t("Install the "),o(i,{to:"/getting-started/#installation"},{default:c(()=>[t("DAWNet plugin")]),_:1}),t(".")]),m,p,b,g,f,y]),k,e("blockquote",null,[e("p",null,[t("Name: "),w,D,t(" Description: This is a template for making remotes or testing."),N,t(" Link: "),e("a",x,[t("Remote Template"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),T,A,t(" Description: Send an audio file with a text description and get back a file with the description applied."),v,t(" Link: "),e("a",W,[t("Style Transfer"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),R,S,t(" Description: Send an audio file with a text description and get back a file with the description applied. Note: Meta's MusicGen preforms much better."),G,t(" Link: "),e("a",L,[t("Style Transfer"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),M,C,t(" Description: Send an audio file and get stems back."),O,t(" Link: "),e("a",B,[t("DAWNet Demucs"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),q,P,t(" Description: A wrapper for Meta's MusicGen project. Send a text description and get an audio clip back."),V,t(" Link: "),e("a",E,[t("Text-To-Audio"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),I,j,t(" Description: This is a beat detection using the BeatNet library. Send an audio file and get a BPM back."),F,t(" Link: "),e("a",H,[t("BeatNet"),o(n)])])]),U,e("p",null,[t("Creating your own remote is easy. Just copy and modify the "),e("a",Y,[t("DAWNet Remote Template"),o(n)]),t(". You will see a commented section indicating where to write your custom code. You can write any Python3 code you wish.")]),J])}const Z=r(u,[["render",z],["__file","index.html.vue"]]);export{Z as default};