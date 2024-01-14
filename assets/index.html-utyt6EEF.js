import{_ as r,r as a,o as s,c as h,a as e,b as t,d as o,w as c,e as i}from"./app-B3Sdicjj.js";const d={},u=i('<h1 id="dawnet-remotes" tabindex="-1"><a class="header-anchor" href="#dawnet-remotes" aria-hidden="true">#</a> DAWNet Remotes</h1><h2 id="what-are-they" tabindex="-1"><a class="header-anchor" href="#what-are-they" aria-hidden="true">#</a> What are they?</h2><p>DAWNet remotes are python scripts that are registered with the DAWNet discovery server. They are triggered remotely by the DAWNet plugin. They can be run locally, on a remote server, or in Google Colabs. They can be used to execute arbitrary code, or to wrap existing projects.</p><h2 id="how-do-i-use-them" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-them" aria-hidden="true">#</a> How do I use them?</h2>',4),_=e("li",null,'Generate & Copy a "token" from the DAWNet VST interface (top bar).',-1),p=e("li",null,"Choose a colab below and follow the link.",-1),m=e("li",null,'Open the colab in Google Colab by clicking the "Open in Colab" button.',-1),b=e("li",null,[t('Paste the "token" into Colab. Find the token variable (called something similar to '),e("code",null,"dawnet_token"),t("). Set the value.")],-1),g=e("li",null,[t("At this point the Plugin and the Colab server should have "),e("code",null,"found"),t(" each other via the underlying web-socket server.")],-1),f=e("li",null,'Fill in values & files in the colab form. Click "Run" in the colab form.',-1),y=e("h2",{id:"google-colabs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-colabs","aria-hidden":"true"},"#"),t(" Google Colabs")],-1),w=e("strong",null,"Style Transfer - MusicGen",-1),k=e("br",null,null,-1),D=e("br",null,null,-1),x={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_Style_Transfer_MusicGen.ipynb",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"Style Transfer - MusicLDM",-1),T=e("br",null,null,-1),A=e("br",null,null,-1),v={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_Style_Transfer_AudioLDM2.ipynb",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"Stemify - Demucs",-1),W=e("br",null,null,-1),G=e("br",null,null,-1),C={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_Demucs.ipynb",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"Text-To-Audio MusicGen",-1),L=e("br",null,null,-1),O=e("br",null,null,-1),R={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_MusicGen.ipynb",target:"_blank",rel:"noopener noreferrer"},V=i('<h2 id="virtual-machine-gpu-todo" tabindex="-1"><a class="header-anchor" href="#virtual-machine-gpu-todo" aria-hidden="true">#</a> Virtual Machine / GPU (TODO)</h2><p>(TODO) explain setting up a gpu somewhere ...</p><h2 id="local-gpu-todo" tabindex="-1"><a class="header-anchor" href="#local-gpu-todo" aria-hidden="true">#</a> Local GPU (TODO)</h2><p>(TODO) explain local gpu ...</p><h2 id="how-do-i-make-my-own" tabindex="-1"><a class="header-anchor" href="#how-do-i-make-my-own" aria-hidden="true">#</a> How do I make my own?</h2>',5),E={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_template.ipynb",target:"_blank",rel:"noopener noreferrer"},I=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"NOTE: The system does not guarantee any security. Do not expose sensitive data in your remotes.")],-1);function P(q,B){const l=a("RouterLink"),n=a("ExternalLinkIcon");return s(),h("div",null,[u,e("ol",null,[e("li",null,[t("Install the "),o(l,{to:"/getting-started/#installation"},{default:c(()=>[t("DAWNet plugin")]),_:1}),t(".")]),_,p,m,b,g,f]),y,e("blockquote",null,[e("p",null,[t("Name: "),w,k,t(" Description: Send an audio file with a text description and get back a file with the description applied."),D,t(" Link: "),e("a",x,[t("Style Transfer"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),N,T,t(" Description: Send an audio file with a text description and get back a file with the description applied. Note: Meta's MusicGen preforms much better."),A,t(" Link: "),e("a",v,[t("Style Transfer"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),S,W,t(" Description: Send an audio file and get stems back."),G,t(" Link: "),e("a",C,[t("DAWNet Demucs"),o(n)])])]),e("blockquote",null,[e("p",null,[t("Name: "),M,L,t(" Description: A wrapper for Meta's MusicGen project. Send a text description and get an audio clip back."),O,t(" Link: "),e("a",R,[t("Text-To-Audio"),o(n)])])]),V,e("p",null,[t("Creating your own remote is easy. Just copy and modify the "),e("a",E,[t("DAWNet Remote Template"),o(n)]),t(". You will see a commented section indicating where to write your custom code. You can write any Python3 code you wish.")]),I])}const F=r(d,[["render",P],["__file","index.html.vue"]]);export{F as default};
