import{_ as r,r as l,o as t,c as o,a as e,b as a,d as s,e as i}from"./app-6ZbMGagj.js";const d="/sas_runes_cli_2.png",u={},c=i('<p><img src="'+d+`" alt="runes_cli"></p><h1 id="runes-cli" tabindex="-1"><a class="header-anchor" href="#runes-cli" aria-hidden="true">#</a> Runes CLI</h1><h2 id="what-is-it" tabindex="-1"><a class="header-anchor" href="#what-is-it" aria-hidden="true">#</a> What is it?</h2><p>The <code>RUNES CLI</code> is a command line tool for building, running and publishing Runes to the Vault.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements:</h2><ul><li>ensure Python &gt;= 3.x is installed</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>python <span class="token operator">-</span><span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>ensure Pip is installed</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip <span class="token builtin">list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),h={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},p=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,`which docker
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),m={href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation:</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sudo pip install <span class="token operator">-</span>U runes<span class="token operator">-</span>cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage:</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>runes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage-examples" tabindex="-1"><a class="header-anchor" href="#usage-examples" aria-hidden="true">#</a> Usage Examples:</h2><h4 id="as-a-developer-use-the-runes-cli-to" tabindex="-1"><a class="header-anchor" href="#as-a-developer-use-the-runes-cli-to" aria-hidden="true">#</a> As a developer use the runes-cli to:</h4><ul><li>build your CoLab/Jupyter notebook (<code>.ipynb</code> file) into an Rune</li><li>publish your build Rune to the Vault</li></ul><h4 id="as-an-end-user-use-the-runes-cli-to" tabindex="-1"><a class="header-anchor" href="#as-an-end-user-use-the-runes-cli-to" aria-hidden="true">#</a> As an end-user use the runes-cli to:</h4><ul><li>search for &amp; install Runes listed in the Vault</li><li>run Runes on your local machine or a remote server</li></ul>`,9),v=e("iframe",{width:"100%",height:"400px",src:"https://www.youtube.com/embed/K65jKKUyAvQ?si=-4e-xfKmKqjKR4BI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,-1);function g(_,y){const n=l("ExternalLinkIcon");return t(),o("div",null,[c,e("ul",null,[e("li",null,[a("ensure "),e("a",h,[a("Docker"),s(n)]),a(" is installed")])]),p,e("ul",null,[e("li",null,[a("(if you plan to run GPU dependent functions) ensure "),e("a",m,[a("Nvidia Docker Extention"),s(n)]),a(" is installed")])]),b,v])}const x=r(u,[["render",g],["__file","index.html.vue"]]);export{x as default};
