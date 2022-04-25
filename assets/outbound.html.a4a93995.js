import{r as n,o as s,c as o,a,b as t,w as e,F as p,e as c,d as u}from"./app.bc80e69a.js";const r={},l=a("h1",{id:"出站代理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#出站代理","aria-hidden":"true"},"#"),c(" 出站代理")],-1),i=c("出站连接用于发送数据，可用的协议请见 "),d=c("outbound protocols"),b=c("。"),k=u('<h2 id="outboundobject" tabindex="-1"><a class="header-anchor" href="#outboundobject" aria-hidden="true">#</a> OutboundObject</h2><p><code>OutboundObject</code> 对应配置文件中 <code>outbounds</code> 项的一个子元素。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>列表中的第一个元素作为主 outbound。当路由匹配不存在或没有匹配成功时，流量由主 outbound 发出。</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;sendThrough&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;协议名称&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标识&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;proxySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;mux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>sendThrough</code>: address</p></blockquote><p>用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 <code>&quot;0.0.0.0&quot;</code>。</p><blockquote><p><code>protocol</code>: string</p></blockquote>',7),m=c("连接协议名称，可选的协议类型见 "),g=c("outbound protocols"),q=c("。"),h=u('<blockquote><p><code>settings</code>: OutboundConfigurationObject</p></blockquote><p>具体的配置内容，视协议不同而不同。详见每个协议中的 <code>OutboundConfigurationObject</code>。</p><blockquote><p><code>tag</code>: string</p></blockquote><p>此出站连接的标识，用于在其它的配置中定位此连接。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>当其不为空时，其值必须在所有 <code>tag</code> 中 <strong>唯一</strong>。</p></div>',5),x=a("code",null,"streamSettings",-1),j=c(": "),y=c("StreamSettingsObject"),f=u('<p>底层传输方式（transport）是当前 Xray 节点和其它节点对接的方式</p><blockquote><p><code>proxySettings</code>: <a href="#proxysettingsobject">ProxySettingsObject</a></p></blockquote><p>出站代理配置。当出站代理生效时，此 outbound 的 <code>streamSettings</code> 将不起作用。</p><blockquote><p><code>mux</code>: <a href="#muxobject">MuxObject</a></p></blockquote><p>Mux 相关的具体配置。</p><h3 id="proxysettingsobject" tabindex="-1"><a class="header-anchor" href="#proxysettingsobject" aria-hidden="true">#</a> ProxySettingsObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>当指定另一个 outbound 的标识时，此 outbound 发出的数据，将被转发至所指定的 outbound 发出。</p>',9),v={class:"custom-container danger"},O=a("p",{class:"custom-container-title"},"DANGER",-1),P=c("这种转发方式"),T=a("strong",null,"不经过",-1),M=c("底层传输方式。如果需要使用支持底层传输方式的转发，请使用 "),S=c("SockOpt.dialerProxy"),C=c("。"),I=a("div",{class:"custom-container danger"},[a("p",{class:"custom-container-title"},"DANGER"),a("p",null,"此选项与 SockOpt.dialerProxy 不兼容")],-1),_={class:"custom-container tip"},w=a("p",{class:"custom-container-title"},"TIP",-1),R=c("兼容 v2fly/v2ray-core 的配置 "),A={href:"https://www.v2fly.org/config/outbounds.html#proxysettingsobject",target:"_blank",rel:"noopener noreferrer"},D=c("transportLayer"),E=u('<h3 id="muxobject" tabindex="-1"><a class="header-anchor" href="#muxobject" aria-hidden="true">#</a> MuxObject</h3><p>Mux 功能是在一条 TCP 连接上分发多个 TCP 连接的数据。实现细节详见 <a href="../../development/protocols/muxcool">Mux.Cool</a>。Mux 是为了减少 TCP 的握手延迟而设计，而非提高连接的吞吐量。使用 Mux 看视频、下载或者测速通常都有反效果。Mux 只需要在客户端启用，服务器端自动适配。</p><p><code>MuxObject</code> 对应 <code>OutboundObject</code> 中的 <code>mux</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">8</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>enabled</code>: true | false</p></blockquote><p>是否启用 Mux 转发请求，默认值 <code>false</code>。</p><blockquote><p><code>concurrency</code>: number</p></blockquote><p>最大并发连接数。最小值 <code>1</code>，最大值 <code>1024</code>，默认值 <code>8</code>。</p><p>这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。比如设置 <code>concurrency=8</code> 时，当客户端发出了 8 个 TCP 请求，Xray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>填负数时，如 <code>-1</code>，不加载 mux 模块。</p></div>',10);r.render=function(c,u){const r=n("RouterLink"),G=n("OutboundLink");return s(),o(p,null,[l,a("p",null,[i,t(r,{to:"/en/config/outbounds/"},{default:e((()=>[d])),_:1}),b]),k,a("p",null,[m,t(r,{to:"/en/config/outbounds/"},{default:e((()=>[g])),_:1}),q]),h,a("blockquote",null,[a("p",null,[x,j,t(r,{to:"/en/config/transport.html#streamsettingsobject"},{default:e((()=>[y])),_:1})])]),f,a("div",v,[O,a("p",null,[P,T,M,t(r,{to:"/en/config/transport.html#sockoptobject"},{default:e((()=>[S])),_:1}),C])]),I,a("div",_,[w,a("p",null,[R,a("a",A,[D,t(G)])])]),E],64)};export default r;
