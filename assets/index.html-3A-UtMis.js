import{_ as r,r as l,o as u,c,a as e,d as t,b as n,w as s,e as a}from"./app-oLvSp76_.js";const d="/sas_elixir.png",h={},p=a('<p><img src="'+d+'" alt="runes"></p><h1 id="runes" tabindex="-1"><a class="header-anchor" href="#runes" aria-hidden="true">#</a> Runes</h1><h2 id="what-are-they" tabindex="-1"><a class="header-anchor" href="#what-are-they" aria-hidden="true">#</a> What are they?</h2><p>Runes are special python scripts that can be distributed by the <code>Signals &amp; Sorcery</code> registry (aka the <a href="/vault">VAULT</a>). Runes discovered and run from within a Crucible plugin. They can be hosted locally, on a server, or in Google Colabs. They can be used to execute arbitrary code, or to wrap existing projects.</p><h2 id="how-do-i-use-a-rune" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-a-rune" aria-hidden="true">#</a> How do I use a Rune?</h2><p>There are multiple ways to consume Runes. Lets start with the web plugin.</p>',6),m={href:"https://dawnet.tools/",target:"_blank",rel:"noopener noreferrer"},b=a("<li>Copy the &quot;token&quot; from the top right of the plugin.</li><li>Install the Runes CLI. See [Runes-CLI]/runes-cli/ for details. TLDR: <code>pip install runes-cli</code></li><li>Run the runes-cli in a terminal with the key word <code>runes</code>. Select <code>tokens</code>, then <code>add</code>, then paste the token copied from the plugin.</li><li>Run a pre-made Rune. From the runes-cli, select <code>runes (run or manage published runes)</code> then select an <code>available rune</code> from the list. I recommend starting with a rune that does not require a GPU. (look for CPU) Try the <code>Rune Template</code> for starter.</li><li>After the Rune has has started, you can interact with if from the Crucible Web plugin. Go back to the plugin and select the <code>Connected Runes</code> tab. You should see the Rune you started. Click on the Rune to interact with it!</li>",5),_=e("h1",{id:"elixir-client",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elixir-client","aria-hidden":"true"},"#"),t(" Elixir Client")],-1),g=e("p",null,"The Elixir client is a Python package that enables you to write python functions, package the functions and expose them to Crucible plugins. It is a simple wrapper around the Signals & Sorcery API.",-1),y=e("h2",{id:"how-do-i-create-a-rune",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-create-a-rune","aria-hidden":"true"},"#"),t(" How do I create a Rune?")],-1),f={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_template.ipynb",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"steps-to-create-a-custom-rune",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#steps-to-create-a-custom-rune","aria-hidden":"true"},"#"),t(" Steps to create a custom Rune")],-1),k=e("p",null,"Publishing a Rune to the Vault can be divided into 3 steps:",-1),v=a(`<p>Develop your Rune as a Jupyter Notebook <code>.ipynb</code> file</p><ul><li>create a directory for your Rune</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">mkdir</span> my_rune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>enter the directory</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> my_rune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),R={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_template.ipynb",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"install Jupyter notebooks",-1),C=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> notebook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>launch the Jupyter notebook then open the .ipynb file</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jupyter notebook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),T=e("p",null,[t("Build your "),e("code",null,".ipynb"),t(" file into as Rune docker-image using the "),e("code",null,"runes-cli")],-1),I=e("li",null,[t("launch the "),e("code",null,"runes-cli"),t(" using the "),e("code",null,"runes"),t(" keyword")],-1),L=e("li",null,[t("select "),e("code",null,"build rune from jupyter notebook")],-1),N=e("li",null,[t("you will be prompted to enter the path to your "),e("code",null,".ipynb"),t(" file")],-1),S=e("li",null,"follow the prompts to build your notebook into a Rune docker-image",-1),V=e("li",null,[e("p",null,[t("Publish the docker-image as a Rune to the Vault using the "),e("code",null,"runes-cli")])],-1),E=e("li",null,[t("using "),e("code",null,"runes-cli"),t(" select the newly created docker-image")],-1),D=e("li",null,"first run the image locally to ensure it works",-1),P=e("li",null,"you will be required to have a dockerhub account where the image will be pushed",-1),A={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,"now using the runes-cli again select your docker-image and publish the image to the Vault. You will be prompted for metadata about the Rune. Fill in the metadata and the Rune will be published to the Vault!",-1),W=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"NOTE: The system does not guarantee any security. Do not expose sensitive data in your remotes.")],-1);function B(G,U){const o=l("ExternalLinkIcon"),i=l("RouterLink");return u(),c("div",null,[p,e("ol",null,[e("li",null,[t("Open the "),e("a",m,[t("Crucible Web"),n(o)]),t(" plugin in a browser.")]),b]),_,g,y,e("p",null,[t("Creating your own Rune is easy. The quickest way to get started is by copying the "),e("a",f,[t("Rune Template"),n(o)]),t(". You will see a commented section indicating where to write your custom code. You can write any Python3 code you wish.")]),w,k,e("ol",null,[e("li",null,[v,e("ul",null,[e("li",null,[t("download the Rune template into your directory "),e("a",R,[t("Rune Template"),n(o)])]),x]),C,e("ul",null,[e("li",null,[t("customize, test, and save the template. See the "),n(i,{to:"/runes/"},{default:s(()=>[t("Rune")]),_:1}),t(" section for more details.")])])]),e("li",null,[T,e("ul",null,[e("li",null,[t("install the "),n(i,{to:"/runes-cli/"},{default:s(()=>[t("RUNES CLI")]),_:1})]),I,L,N,S])]),V,e("li",null,[e("ul",null,[E,D,P,e("li",null,[t("go to "),e("a",A,[t("DockerHub"),n(o)]),t(" to create an account and remember your credentials")]),q])])]),W])}const j=r(h,[["render",B],["__file","index.html.vue"]]);export{j as default};
