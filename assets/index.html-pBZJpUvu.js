import{_ as t,r as i,o,c as p,a as n,d as s,b as c,e}from"./app-oLvSp76_.js";const l={},r=e(`<h1 id="python-client" tabindex="-1"><a class="header-anchor" href="#python-client" aria-hidden="true">#</a> Python Client</h1><h2 id="what-is-it" tabindex="-1"><a class="header-anchor" href="#what-is-it" aria-hidden="true">#</a> What is it?</h2><p>The <code>DAWNet client</code> is a python3 pip package. It is used to create <code>DAWNet remotes</code>. Remotes are scripts created with the python client. The client allows a user to register remote functions with the DAWNet discovery server. After a function has been registered it can then be triggered remotely from \`DAWNet plugin.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>NOTE: The plugin is in an active, pre-alpha state. It has only been tested on Ableton 11 on MAC M1.</p></div><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>!pip install elixir<span class="token operator">-</span>client <span class="token operator">-</span><span class="token operator">-</span>upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> elixir_client<span class="token punctuation">.</span>core <span class="token keyword">as</span> dawnet
<span class="token keyword">from</span> elixir_client <span class="token keyword">import</span> DAWNetFilePath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>NOTE: ffmpeg is a system requirement</p></div><h3 id="ffmpeg-install-instructions" tabindex="-1"><a class="header-anchor" href="#ffmpeg-install-instructions" aria-hidden="true">#</a> FFMPEG install instructions:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- On macOS: Use Homebrew by running &#39;brew install ffmpeg&#39; in the terminal.
- On Linux (Debian/Ubuntu): Run &#39;sudo apt-get install ffmpeg&#39; in the terminal.
- On Linux (Fedora): Run &#39;sudo dnf install ffmpeg&#39; in the terminal.
- On Linux (Arch Linux): Run &#39;sudo pacman -S ffmpeg&#39; in the terminal.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=n("br",null,null,-1),u={href:"https://ffmpeg.org/download.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>This is a simple example of a Rune script created using the elixir-client. The script defines an arbitrary function that takes two arguments, an integer and a DAWNetFilePath. The function is registered with the DAWNet discovery server. The script then connects to the DAWNet discovery server and waits for a remote trigger.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> elixir_client<span class="token punctuation">.</span>core <span class="token keyword">as</span> dawnet
<span class="token keyword">from</span> elixir_client <span class="token keyword">import</span> DAWNetFilePath

<span class="token comment"># The token is generated by the DAWNet plugin.  </span>
<span class="token comment"># It is used by the discovery server to associate the remote with the plugin.</span>
TOKEN<span class="token operator">=</span><span class="token string">&quot;0715c132-0b31-406e-b562-9206c479a48a&quot;</span>

<span class="token comment"># The registered method can be named anything. Note that the method must be \`async\`.  </span>
<span class="token comment"># All parameters must be type hinted.  </span>
<span class="token comment"># 4 parameter types are supported: int, float, str, DAWNetFilePath</span>
<span class="token comment"># DAWNetFilePath is a special type. When the file is sent to the remote, it is intercepted by the system and </span>
<span class="token comment"># transported to a temp dir on the remote.  In this case the variable \`b\` is local path to the file.</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">arbitrary_method</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> DAWNetFilePath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># -----------------------------------------</span>
        <span class="token comment"># This is where you can write custom code to operate on the input params.</span>
        <span class="token comment"># ex param \`a\` could be the number of variations created from param \`b\` using something like MusicLM</span>
        <span class="token comment"># -----------------------------------------</span>

        <span class="token comment"># This is how you send results back to the plugin, when processing is complete.</span>
        <span class="token keyword">await</span> dawnet<span class="token punctuation">.</span>output<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_file<span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        <span class="token comment"># This message is displayed in the plugin.</span>
        <span class="token keyword">await</span> dawnet<span class="token punctuation">.</span>output<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_message<span class="token punctuation">(</span><span class="token string">&quot;This is a message XYZ&quot;</span><span class="token punctuation">)</span> 

        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        
        <span class="token comment"># This is how you send errors back to the plugin</span>
        <span class="token keyword">await</span> dawnet<span class="token punctuation">.</span>output<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Method encountered an error: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token comment"># The token generated by the plugin. </span>
dawnet<span class="token punctuation">.</span>set_token<span class="token punctuation">(</span>token<span class="token operator">=</span>TOKEN<span class="token punctuation">)</span>
<span class="token comment"># The name of the remote.  This is displayed in the plugin.</span>
dawnet<span class="token punctuation">.</span>set_name<span class="token punctuation">(</span><span class="token string">&quot;My Remote Code&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># The description of the remote.  This is displayed in the plugin.</span>
dawnet<span class="token punctuation">.</span>set_description<span class="token punctuation">(</span><span class="token string">&quot;This is not a real description.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># Register the method with the discovery server.</span>
dawnet<span class="token punctuation">.</span>register_method<span class="token punctuation">(</span>arbitrary_method<span class="token punctuation">)</span>

<span class="token comment"># This should be the last line of the script.  It connects to the discovery server and waits for a remote trigger.</span>
dawnet<span class="token punctuation">.</span>connect_to_server<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(v,k){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[s("For other operating systems or more detailed instructions, visit the FFMpeg website "),d,n("a",u,[s("FFMpeg Download"),c(a)])]),m])}const g=t(l,[["render",h],["__file","index.html.vue"]]);export{g as default};
