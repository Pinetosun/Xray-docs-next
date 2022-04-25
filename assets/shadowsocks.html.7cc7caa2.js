import{r as n,o as s,c as a,a as o,b as p,w as e,F as t,e as l,d as c}from"./app.bc80e69a.js";const u={},r=o("h1",{id:"shadowsocks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),l(" Shadowsocks")],-1),i={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},d=l("Shadowsocks"),b=l(" 协议，兼容大部分其它版本的实现。"),k=c('<p>目前兼容性如下：</p><ul><li><p>支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭；</p></li><li><p>推荐的加密方式：</p><ul><li>AES-256-GCM</li><li>AES-128-GCM</li><li>ChaCha20-Poly1305 或称 ChaCha20-IETF-Poly1305</li><li>none 或 plain</li></ul><p>不推荐的加密方式:</p><ul><li>AES-256-CFB</li><li>AES-128-CFB</li><li>ChaCha20</li><li>ChaCha20-IETF</li></ul></li></ul><div class="custom-container danger"><p class="custom-container-title">警告</p><p>&quot;none&quot; 不加密方式下，服务器端不会验证 &quot;password&quot; 中的密码。为确保安全性, 一般需要加上 TLS 并在传输层使用安全配置，例如 WebSocket 配置较长的 path</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp,udp&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p><code>network</code>: &quot;tcp&quot; | &quot;udp&quot; | &quot;tcp,udp&quot;</p></blockquote><p>可接收的网络协议类型。比如当指定为 <code>&quot;tcp&quot;</code> 时，仅会接收 TCP 流量。默认值为 <code>&quot;tcp&quot;</code>。</p><h2 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-gcm&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>(v1.2.3+) Xray 支持 Shadowsocks 单端口多用户，但是需要将该入站所有用户的加密方式设置为 AEAD。</p></div><blockquote><p><code>method</code>: string</p></blockquote><p>必填。</p><ul><li>推荐的加密方式： <ul><li>AES-256-GCM</li><li>AES-128-GCM</li><li>ChaCha20-Poly1305 或称 ChaCha20-IETF-Poly1305</li><li>none 或 plain</li></ul></li></ul><blockquote><p><code>password</code>: string</p></blockquote><p>必填，任意字符串。</p><p>Shadowsocks 协议不限制密码长度，但短密码会更可能被破解，建议使用 16 字符或更长的密码。</p><blockquote><p><code>level</code>: number</p></blockquote>',17),q=l("用户等级，连接会使用这个用户等级对应的 "),m=l("本地策略"),h=l("。"),g=o("code",null,"level",-1),y=l(" 的值, 对应 "),v=l("policy"),C=l(" 中 "),w=o("code",null,"level",-1),f=l(" 的值。 如不指定, 默认为 0。"),j=o("blockquote",null,[o("p",null,[o("code",null,"email"),l(": string")])],-1),S=o("p",null,"用户邮箱，用于区分不同用户的流量（日志、统计）。",-1);u.render=function(l,c){const u=n("OutboundLink"),E=n("RouterLink");return s(),a(t,null,[r,o("p",null,[o("a",i,[d,p(u)]),b]),k,o("p",null,[q,p(E,{to:"/config/policy.html#levelpolicyobject"},{default:e((()=>[m])),_:1}),h]),o("p",null,[g,y,p(E,{to:"/config/policy.html#levelpolicyobject"},{default:e((()=>[v])),_:1}),C,w,f]),j,S],64)};export default u;
