import{_ as c,r as o,o as p,c as u,a as n,d as e,b as s,w as l,e as a}from"./app-uNg7KWIm.js";const r="/sas_runes_client_2.png",d={},m=a('<p><img src="'+r+'" alt="runes"></p><h1 id="runes" tabindex="-1"><a class="header-anchor" href="#runes" aria-hidden="true">#</a> Runes</h1><h2 id="what-are-they" tabindex="-1"><a class="header-anchor" href="#what-are-they" aria-hidden="true">#</a> What are they?</h2><p>Runes are special python scripts that can be distributed by the <code>Signals &amp; Sorcery</code> registry (aka the <a href="/vault">VAULT</a>). Runes discovered and run from within a Crucible plugin. They can be hosted locally, on a server, or in Google Colabs. They can be used to execute arbitrary code, or to wrap existing projects.</p><h2 id="how-do-i-use-a-rune" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-a-rune" aria-hidden="true">#</a> How do I use a Rune?</h2><p>There are multiple ways to consume Runes. Lets start with the web plugin.</p>',6),h={href:"https://signalsandsorcery.app/",target:"_blank",rel:"noopener noreferrer"},k=a("<li>Copy the &quot;token&quot; from the top right of the plugin.</li><li>Install the Runes CLI. See [Runes-CLI]/runes-cli/ for details. TLDR: <code>pip install runes-cli</code></li><li>Run the runes-cli in a terminal with the key word <code>runes</code>. Select <code>tokens</code>, then <code>add</code>, then paste the token copied from the plugin.</li><li>Run a pre-made Rune. From the runes-cli, select <code>runes (run or manage published runes)</code> then select an <code>available rune</code> from the list. I recommend starting with a rune that does not require a GPU. (look for CPU) Try the <code>Rune Template</code> for starter.</li><li>After the Rune has has started, you can interact with if from the Crucible Web plugin. Go back to the plugin and select the <code>Connected Runes</code> tab. You should see the Rune you started. Click on the Rune to interact with it!</li>",5),b=n("h1",{id:"elixir-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elixir-client","aria-hidden":"true"},"#"),e(" Elixir Client")],-1),v=n("p",null,"The Elixir client is a Python package that enables you to write python functions, package the functions and expose them to Crucible plugins. It is a simple wrapper around the Signals & Sorcery API.",-1),g=n("h2",{id:"how-do-i-create-a-rune",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-do-i-create-a-rune","aria-hidden":"true"},"#"),e(" How do I create a Rune?")],-1),_={href:"https://github.com/shiehn/dawnet-remotes/blob/main/DAWNet_Remote_template.ipynb",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"steps-to-create-a-custom-rune",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#steps-to-create-a-custom-rune","aria-hidden":"true"},"#"),e(" Steps to create a custom Rune")],-1),w=n("p",null,"Publishing a Rune to the Vault can be divided into 3 steps:",-1),f=a(`<p>Develop your Rune as a Jupyter Notebook <code>.ipynb</code> file</p><ul><li>create a directory for your Rune</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">mkdir</span> my_rune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>enter the directory</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> my_rune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),R={href:"https://github.com/shiehn/rune_notebooks/blob/main/elixir_template.ipynb",target:"_blank",rel:"noopener noreferrer"},T=n("li",null,"install Jupyter notebooks",-1),x=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> notebook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>launch the Jupyter notebook then open the .ipynb file</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jupyter notebook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),N=n("p",null,[e("Build your "),n("code",null,".ipynb"),e(" file into as Rune docker-image using the "),n("code",null,"runes-cli")],-1),q=n("li",null,[e("launch the "),n("code",null,"runes-cli"),e(" using the "),n("code",null,"runes"),e(" keyword")],-1),E=n("li",null,[e("select "),n("code",null,"build rune from jupyter notebook")],-1),I=n("li",null,[e("you will be prompted to enter the path to your "),n("code",null,".ipynb"),e(" file")],-1),C=n("li",null,"follow the prompts to build your notebook into a Rune docker-image",-1),P=n("li",null,[n("p",null,[e("Publish the docker-image as a Rune to the Vault using the "),n("code",null,"runes-cli")])],-1),S=n("li",null,[e("using "),n("code",null,"runes-cli"),e(" select the newly created docker-image")],-1),F=n("li",null,"first run the image locally to ensure it works",-1),U=n("li",null,"you will be required to have a dockerhub account where the image will be pushed",-1),W={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},L=n("li",null,"now using the runes-cli again select your docker-image and publish the image to the Vault. You will be prompted for metadata about the Rune. Fill in the metadata and the Rune will be published to the Vault!",-1),A=a(`<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>NOTE: The system does not guarantee any security. Do not expose sensitive data in your remotes.</p></div><h2 id="runes-client-docs" tabindex="-1"><a class="header-anchor" href="#runes-client-docs" aria-hidden="true">#</a> RUNES-CLIENT DOCS</h2><p>Insallation</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> runes-client <span class="token parameter variable">--upgrade</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is a simple example of a RUNES script created using the runes-client. The script defines an arbitrary function that takes two arguments, an integer and a RunesFilePath. The function is registered with the SignalsAndSorceryAPI server. The script then connects to the SignalsAndSorceryAPI server and waits for a plugin to interact with it.</p>`,5),V={href:"https://signalsandsorcery.app/client/",target:"_blank",rel:"noopener noreferrer"},D=a(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> runes_client<span class="token punctuation">.</span>core <span class="token keyword">as</span> runes 
<span class="token keyword">from</span> runes_client <span class="token keyword">import</span> RunesFilePath<span class="token punctuation">,</span> ui_param

<span class="token comment"># The token generated by the Crucible plugin.  </span>
<span class="token comment"># The token is used by the discovery server.  It associates the RUNE with the plugin.</span>
TOKEN<span class="token operator">=</span><span class="token string">&quot;0715c132-0b31-406e-b562-9206c479a48a&quot;</span>

<span class="token comment"># There are two separate function you need to register.  </span>
<span class="token comment"># 1. The imports.  This is where you load any libraries you need to use in your RUNE.  This is important so that the RUNE is aware when dependencies are loaded and its ready to be called from the plugin.</span>
<span class="token comment"># 2. The method.  This is the primary function of the RUNE.  This is where you write the code that will be executed when the RUNE is triggered.</span>

<span class="token comment"># Name the function anything you like.  This is the imports function.  This is where you load any libraries you need to use in your RUNE.</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">register_imports</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    
    <span class="token comment"># perform any \`\`\`pip install &lt;package&gt;\`\`\` here</span>
   
    <span class="token keyword">import</span> uuid<span class="token punctuation">,</span> os<span class="token punctuation">,</span> random<span class="token punctuation">,</span> shutil 

    <span class="token comment"># all imports need to be made global.  If your imports are straight forward you can use the \`make_imports_global\` function.</span>
    <span class="token comment"># If you need to do something more complex you will need to manually make the imports global. For example, in this case we download a large pre-trained model and need to make it global.</span>

    <span class="token comment"># global model</span>
    <span class="token comment"># model = MusicGen.get_pretrained(&#39;facebook/musicgen-melody&#39;)</span>

    runes<span class="token punctuation">.</span>make_imports_global<span class="token punctuation">(</span><span class="token punctuation">[</span>uuid<span class="token punctuation">,</span> os<span class="token punctuation">,</span> random<span class="token punctuation">,</span> shutil<span class="token punctuation">]</span><span class="token punctuation">)</span>
    
    <span class="token comment">#NOTE: \`make_imports_global()\` does not support imports with aliases.  You will need to manually make these global.</span>
    
<span class="token comment"># Now register the imports function with the discovery server.</span>
runes<span class="token punctuation">.</span>register_imports<span class="token punctuation">(</span>register_imports<span class="token punctuation">)</span>

<span class="token comment"># The registered method can be named anything.  This is the primary function of the RUNE.  </span>
<span class="token comment"># This function will be rendered as a web form in the crucible plugin. Note: the method must be \`async\`.  </span>
<span class="token comment"># All parameters must be type hinted.  </span>
<span class="token comment"># Five parameter types are supported: int, float, str, bool, RunesFilePath</span>
<span class="token comment"># RunesFilePath is a special type. When the file is sent to the remote, it is intercepted by the system and </span>
<span class="token comment"># transported to a temp dir on the remote.  In this case the variable \`b\` is local path to the file.</span>

<span class="token comment"># The \`ui_param\` is an optional decorator. It is used to define how the parameter input UI will be rendered in the plugin.  </span>
<span class="token comment"># If the decorator is not used, the parameter will be rendered as a text input field. </span>
<span class="token decorator annotation punctuation">@ui_param</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;RunesNumberSlider&#39;</span><span class="token punctuation">,</span> <span class="token builtin">min</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">max</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> step<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@ui_param</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;RunesMultiChoice&#39;</span><span class="token punctuation">,</span> options<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;cherries&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;oranges&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;grapes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token string">&#39;grapes&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">arbitrary_method</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> RunesFilePath<span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span> 
        <span class="token comment"># -----------------------------------------</span>
        <span class="token comment"># This is where you can write custom code to operate on the input params.</span>
        <span class="token comment"># ex param \`a\` could be the number of variations created from param \`b\` using something like MusicLM</span>
        <span class="token comment"># -----------------------------------------</span>
        
        <span class="token comment"># This is how you send results back to the plugin, when processing is complete.</span>
        <span class="token keyword">await</span> runes<span class="token punctuation">.</span>results<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_file<span class="token punctuation">(</span>b<span class="token punctuation">)</span> 
        <span class="token comment"># This message is displayed in the plugin.</span>
        <span class="token keyword">await</span> runes<span class="token punctuation">.</span>results<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_message<span class="token punctuation">(</span><span class="token string">&quot;This is a message XYZ&quot;</span><span class="token punctuation">)</span> 

        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span> 
        <span class="token comment">#explicitly send an error message back to the plugin</span>
        <span class="token keyword">await</span> runes<span class="token punctuation">.</span>results<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>add_error<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Method encountered an error: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token comment"># The token generated by the plugin. </span>
runes<span class="token punctuation">.</span>set_token<span class="token punctuation">(</span>token<span class="token operator">=</span>TOKEN<span class="token punctuation">)</span>
<span class="token comment"># The name of the remote.  This is displayed in the plugin.</span>
runes<span class="token punctuation">.</span>set_name<span class="token punctuation">(</span><span class="token string">&quot;My Remote Code&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># The description of the remote.  This is displayed in the plugin.</span>
runes<span class="token punctuation">.</span>set_description<span class="token punctuation">(</span><span class="token string">&quot;This is not a real description.&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># Register the method with the discovery server.</span>
runes<span class="token punctuation">.</span>register_method<span class="token punctuation">(</span>arbitrary_method<span class="token punctuation">)</span>

<span class="token comment"># When a file is sent to the remote as a RunesFilePath, it will become available at this sample rate. </span>
runes<span class="token punctuation">.</span>set_input_target_sample_rate<span class="token punctuation">(</span><span class="token number">44100</span><span class="token punctuation">)</span> <span class="token comment">#supported values [22050, 32000, 44100, 48000]</span>
<span class="token comment"># When a file is sent to the remote as a RunesFilePath, it will become available at this bit rate. </span>
runes<span class="token punctuation">.</span>set_input_target_bit_depth<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">#supported values [16, 24, 32]</span>
<span class="token comment"># When a file is sent to the remote as a RunesFilePath, it will become available with this number of channels.</span>
runes<span class="token punctuation">.</span>set_input_target_channels<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">#supported values [1, 2] mono/stereo respectively</span>
<span class="token comment"># When a file is sent to the remote as a RunesFilePath, it will become available in this format.</span>
runes<span class="token punctuation">.</span>set_input_target_format<span class="token punctuation">(</span><span class="token string">&#39;wav&#39;</span><span class="token punctuation">)</span> <span class="token comment">#supported values [&quot;wav&quot;, &quot;mp3&quot;, &quot;aif&quot;, &quot;flac&quot;]</span>

<span class="token comment"># When results are sent back to the plugin, they will be sent at this sample rate.</span>
runes<span class="token punctuation">.</span>set_output_target_sample_rate<span class="token punctuation">(</span><span class="token number">44100</span><span class="token punctuation">)</span>
<span class="token comment"># When results are sent back to the plugin, they will be sent at this bit rate.</span>
runes<span class="token punctuation">.</span>set_output_target_bit_depth<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token comment"># When results are sent back to the plugin, they will be sent with this number of channels.</span>
runes<span class="token punctuation">.</span>set_output_target_channels<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># When results are sent back to the plugin, they will be sent in this format.</span>
runes<span class="token punctuation">.</span>set_output_target_format<span class="token punctuation">(</span><span class="token string">&#39;wav&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># This should be the last line of the script.  It connects to the discovery server and waits for a remote trigger.</span>
runes<span class="token punctuation">.</span>connect_to_server<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function M(O,Y){const t=o("ExternalLinkIcon"),i=o("RouterLink");return p(),u("div",null,[m,n("ol",null,[n("li",null,[e("Open the "),n("a",h,[e("Crucible Web"),s(t)]),e(" plugin in a browser.")]),k]),b,v,g,n("p",null,[e("Creating your own Rune is easy. The quickest way to get started is by copying the "),n("a",_,[e("Rune Template"),s(t)]),e(". You will see a commented section indicating where to write your custom code. You can write any Python3 code you wish.")]),y,w,n("ol",null,[n("li",null,[f,n("ul",null,[n("li",null,[e("download the Rune template into your directory "),n("a",R,[e("RUNEs Template"),s(t)])]),T]),x,n("ul",null,[n("li",null,[e("customize, test, and save the template. See the "),s(i,{to:"/runes/"},{default:l(()=>[e("Rune")]),_:1}),e(" section for more details.")])])]),n("li",null,[N,n("ul",null,[n("li",null,[e("install the "),s(i,{to:"/runes-cli/"},{default:l(()=>[e("RUNES CLI")]),_:1})]),q,E,I,C])]),P,n("li",null,[n("ul",null,[S,F,U,n("li",null,[e("go to "),n("a",W,[e("DockerHub"),s(t)]),e(" to create an account and remember your credentials")]),L])])]),A,n("p",null,[e("For thorough documentation and tutorials visit: "),n("a",V,[e("https://signalsandsorcery.app/client/"),s(t)])]),D])}const B=c(d,[["render",M],["__file","index.html.vue"]]);export{B as default};
