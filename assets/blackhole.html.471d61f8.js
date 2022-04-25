import{r as n,o as s,c as e,a,b as o,w as t,F as p,e as c,d as l}from"./app.bc80e69a.js";const r={},u=a("h1",{id:"blackhole",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#blackhole","aria-hidden":"true"},"#"),c(" Blackhole")],-1),i=c("Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 "),d=c("路由配置"),b=c(" 一起使用，可以达到禁止访问某些网站的效果。"),h=l('<h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>response</code>: <a href="#responseobject">ResponseObject</a></p></blockquote><p>配置黑洞的响应数据。</p><p>Blackhole 会在收到待转发数据之后，发送指定的响应数据，然后关闭连接，待转发的数据将被丢弃。 如不指定此项，Blackhole 将直接关闭连接。</p><h3 id="responseobject" tabindex="-1"><a class="header-anchor" href="#responseobject" aria-hidden="true">#</a> ResponseObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: &quot;http&quot; | &quot;none&quot;</p></blockquote><p>当 <code>type</code> 为 <code>&quot;none&quot;</code>（默认值）时，Blackhole 将直接关闭连接。</p><p>当 <code>type</code> 为 <code>&quot;http&quot;</code> 时，Blackhole 会发回一个简单的 HTTP 403 数据包，然后关闭连接。</p>',10);r.render=function(c,l){const r=n("RouterLink");return s(),e(p,null,[u,a("p",null,[i,o(r,{to:"/config/routing.html"},{default:t((()=>[d])),_:1}),b]),h],64)};export default r;
