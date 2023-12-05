import{_ as o,r as a,o as i,c as s,b as e,d as t,e as r,w as h}from"./app-fyx3_G0G.js";const l={},c=e("h2",{id:"what-is-dawnet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-dawnet","aria-hidden":"true"},"#"),t(" What is DAWNet?")],-1),d=e("code",null,"audio stem splitting",-1),u=e("h2",{id:"who-is-this-for",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#who-is-this-for","aria-hidden":"true"},"#"),t(" Who is this for?")],-1),m=e("p",null,"The target user for DAWNet is a technical musician/software developer. Google Colabs are a popular choice when experimenting with self-hosting machine learning models. However, there is a disconnect between traditional DAWs and remote machine leaning. DAWNet aims to be a solution for this by developing a native integration with popular DAWs.",-1),f=e("h2",{id:"how-does-it-work",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-does-it-work","aria-hidden":"true"},"#"),t(" How does it work?")],-1),p=e("p",null,"DAWNet is a P2P system (kinda?) made of three core components.",-1),_=e("ul",null,[e("li",null,"A network discovery server. Essentially a system that brokers data transfer between the DAWNet VST and the remote compute."),e("li",null,"A Python3 pip package dawnet-client. The package is responsible for registering a function for remote execution."),e("li",null,"A native DAW plugin. The plugin is essentially a web-form. An interface generated from the remote function's signature. The plugin allows the user to drag/drop audio/midi files from the DAW into plugin, which is then transferred to the remote compute instance")],-1);function w(g,A){const n=a("RouterLink");return i(),s("div",null,[c,e("p",null,[t("DAWNet is a VST plugin that executes remote python functions. As an example, a user may want to perform "),d,t(" on a remote server. Using the "),r(n,{to:"/client/"},{default:h(()=>[t("DAWNet Client")]),_:1}),t(" they can send data from the DAW to the remote function, and back again.")]),u,m,f,p,_])}const W=o(l,[["render",w],["__file","index.html.vue"]]);export{W as default};
