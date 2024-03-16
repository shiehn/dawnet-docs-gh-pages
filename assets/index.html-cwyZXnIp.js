import{_ as e}from"./sas_prologue-3YDA6afg.js";import{_ as i,o,c as t,e as a}from"./app-lBblJAmW.js";const s={},n=a('<p><img src="'+e+'" alt="prologue"></p><h2 id="what-is-signals-sorcery" tabindex="-1"><a class="header-anchor" href="#what-is-signals-sorcery" aria-hidden="true">#</a> What is Signals &amp; Sorcery?</h2><p>Signals &amp; Sorcery is a platform for creating, sharing, and consuming machine learning operations. A developer can write a python function, publish it, host it, and have it consumed from native applications such as Ableton, Figma, and Chrome Extensions.</p><h2 id="who-is-this-for" tabindex="-1"><a class="header-anchor" href="#who-is-this-for" aria-hidden="true">#</a> Who is this for?</h2><ul><li>Application power users who want to extend their applications with self-hosted SOTA AI operations. ex. META releases a new audio generation model and a user wants to use it in their DAW immediately.</li><li>Developers creating Colab/Jupyter notebooks who want to use them in the context of a native application. ex. A developer creates a new audio stem splitting model and wants to use it in int the context of their DAW.</li></ul><h2 id="how-does-it-work" tabindex="-1"><a class="header-anchor" href="#how-does-it-work" aria-hidden="true">#</a> How does it work?</h2><p>Signals &amp; Sorcery is composed of three core components.</p><ul><li>A network discovery server. Essentially a system that brokers data transfer between the <code>Crucible Plugins</code> and the <code>Elixir AI&#39;s</code>.</li><li>A Python3 pip package <code>runes-cli</code>. The package is used to packaging, invoke and publish a python functions as <code>Elixir AI&#39;s</code>.</li><li>Native plugins called <code>Crucible Plugins</code>. The plugins are essentially a web-forms. An interface which is generated from the <code>Elixir AI&#39;s</code> function signature. In the case of <code>Crucible-Audio</code> the user can drag/drop audio/midi files from the DAW into plugin, which is then transferred to the <code>Elixirs</code> compute instance.</li></ul>',8),r=[n];function c(d,l){return o(),t("div",null,r)}const u=i(s,[["render",c],["__file","index.html.vue"]]);export{u as default};