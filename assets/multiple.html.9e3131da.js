import{d as n}from"./app.de4f22e0.js";const s={},a=n('<h1 id="multi-file-configuration" tabindex="-1"><a class="header-anchor" href="#multi-file-configuration" aria-hidden="true">#</a> Multi-file configuration</h1><p>The Xray program supports the use of multiple configuration files.</p><p>The main purpose of using multiple configuration files is to distribute different module configurations, making it easier to manage and maintain.</p><p>This feature is mainly designed to enrich the Xray ecosystem. For example, for GUI-based clients, only fixed functions such as node selection are usually implemented, and complex configurations are difficult to implement graphically. By leaving a custom <code>confdir</code> configuration directory for complex functions, server deployment scripts can simply add files to <code>confdir</code> to implement multiple protocol configurations.</p><h2 id="multi-file-startup" tabindex="-1"><a class="header-anchor" href="#multi-file-startup" aria-hidden="true">#</a> Multi-file startup</h2><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>The startup information will indicate each configuration file being read in sequence. Please pay attention to whether the startup information matches the order you have set.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ xray run -confdir /etc/xray/confs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can also use <code>Xray.location.confdir</code> or <code>Xray_LOCATION_CONFDIR</code> to specify the <code>confdir</code>.</p><p>The <code>-confdir</code> parameter takes precedence over the environment variable. If a valid directory is specified by the parameter, the path in the environment variable will not be read.</p><h2 id="rule-explaination" tabindex="-1"><a class="header-anchor" href="#rule-explaination" aria-hidden="true">#</a> Rule Explaination</h2><h3 id="normal-objects" tabindex="-1"><a class="header-anchor" href="#normal-objects" aria-hidden="true">#</a> Normal Objects（<code>{}</code>）</h3><p><strong>In the top-level object of <code>JSON</code>, the latter overrides or supplements the former.</strong></p><p>For ecample：</p><ul><li>base.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>outbounds.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>When starting Xray with multiple configurations, use the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ xray run -confdir /etc/xray/confs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>These two configuration files are equivalent to a single combined configuration. If you need to modify the outbound nodes, simply modify the content of <code>outbounds.json</code>.</p><p>If you need to change the log level for debugging purposes, there is no need to modify <code>base.json</code>. You can add an additional configuration file:</p><ul><li>debuglog.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Start the program in sequence after <code>base.json</code> to output logs at the debug level.</p><h3 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays（<code>[]</code>）</h3><p>In the JSON configuration, <code>inbounds</code> and <code>outbounds</code> are array structures with special rules:</p><ul><li>When there are two or more elements in the array, the latter overrides the former for <code>inbounds</code>/<code>outbounds</code>.</li><li>When there is only one element in the array, it searches for an existing element with the same <code>tag</code> to override. If it cannot be found: <ul><li>For <code>inbounds</code>, add it to the end (the order of elements in <code>inbounds</code> is irrelevant).</li><li>For <code>outbounds</code>, add it to the beginning (the default first-choice outbound). However, if the filename contains &quot;tail&quot; (case-insensitive), add it to the end.</li></ul></li></ul><p>With multiple configurations, it is easy to add inbound for different protocols to the original configuration without modifying the original configuration.</p><p>The following example is not a valid configuration but is provided to demonstrate the above rules.</p><ul><li>000.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>001.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>002.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4321</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>The three configurations will be combined into:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">4321</span> <span class="token comment">// &lt; 002顺序在000后，因此覆盖tag为socks的inbound端口为4321</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="recommended-multi-file-list" tabindex="-1"><a class="header-anchor" href="#recommended-multi-file-list" aria-hidden="true">#</a> Recommended Multi-file List</h2><p>Execute：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">BASE</span> <span class="token keyword">in</span> 00_log 01_api 02_dns 03_routing 04_policy 05_inbounds 06_outbounds 07_transport 08_stats 09_reverse<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;{}&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;/etc/Xray/<span class="token variable">$BASE</span>.json&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">BASE</span> <span class="token keyword">in</span> 00_log 01_api 02_dns 03_routing 04_policy 05_inbounds 06_outbounds 07_transport 08_stats 09_reverse<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;{}&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;/usr/local/etc/Xray/<span class="token variable">$BASE</span>.json&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">.</span>\n├── 00_log.json\n├── 01_api.json\n├── 02_dns.json\n├── 03_routing.json\n├── 04_policy.json\n├── 05_inbounds.json\n├── 06_outbounds.json\n├── 07_transport.json\n├── 08_stats.json\n└── 09_reverse.json\n\n<span class="token number">0</span> directories, <span class="token number">10</span> files\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',43);s.render=function(n,s){return a};export default s;
