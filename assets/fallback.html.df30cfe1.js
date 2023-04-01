import{r as e,o as n,c as a,a as t,b as o,w as s,F as l,d as r,e as i}from"./app.de4f22e0.js";const c={},p=r('<h1 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback" aria-hidden="true">#</a> Fallback</h1><blockquote><p><strong>Fallback is one of the most powerful features of Xray, which can effectively prevent active probing and allows you to use one port for multiple services</strong></p></blockquote><p>Fallback provides Xray with high-strength anti-active probing capabilities and has a unique first-packet fallback mechanism.</p><p>Fallback can also divide traffic of different types based on path for multi-service sharing on a single port.</p><p>Currently, you can use the fallback feature by configuring fallbacks when using VLESS or Trojan protocols, thus creating an unimaginable combo of services becomes REALITY.</p><h2 id="fallbacks-configuration" tabindex="-1"><a class="header-anchor" href="#fallbacks-configuration" aria-hidden="true">#</a> fallbacks configuration</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token property">&quot;fallbacks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>fallbacks</code>: [ <a href="#fallbackobject">FallbackObject</a> ]</p></blockquote><p><strong><code>fallbacks</code> is an array, and here is an example configuration of one of its child elements.</strong></p><h3 id="fallbackobject" tabindex="-1"><a class="header-anchor" href="#fallbackobject" aria-hidden="true">#</a> FallbackObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;alpn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;xver&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The <code>fallbacks</code> object is optional and can only be used for the <code>TCP+TLS</code> transport combination.</p>',12),d=i("When "),u=t("code",null,"fallbacks",-1),h=i(" configure with any child elements，"),b=t("code",null,'"alpn":["http/1.1"]',-1),f=i(" needs to be configured in "),m=i("Inbound TLS"),k=i("."),g=r('<p>Usually, you need to set up a default fallback with both <code>alpn</code> and <code>path</code> omitted or empty, and then configure other routing rules as needed.</p><p>VLESS will forward traffic with TLS decrypted first packet length &lt;18, invalid protocol version, or failed authentication to the address specified by <code>dest</code>.</p><p>For other transport combinations, you must remove the <code>fallbacks</code> object or all its child elements. At this point, no <code>fallbacks</code> will be enabled, and VLESS will wait until it reads enough data. If the protocol version is invalid or authentication fails, the connection will be terminated directly.</p><blockquote><p><code>name</code>: string</p></blockquote><p>Attempt to match the TLS SNI (Server Name Indication), where an empty value matches any SNI. The default value is <code>&quot;&quot;</code>, which means empty value.</p><blockquote><p><code>alpn</code>: string</p></blockquote><p>Attempt to match the result of TLS ALPN negotiation, where an empty value matches any ALPN result. The default value is <code>&quot;&quot;</code> , which means empty value.</p><p>VLESS will read the TLS ALPN negotiation result only when necessary. If successful, it will output <code>realAlpn =</code> info to the log. Purpose: To solve the problem of Nginx&#39;s inability to simultaneously support http/1.1 and h2c services. Nginx needs to write two lines of listen, one for 1.1 and one for h2c. Note: When <code>&quot;h2&quot;</code> is included in fallbacks alpn, the Inbound TLS needs to be set as <code>&quot;alpn&quot;:[&quot;h2&quot;,&quot;http/1.1&quot;]</code> to support <code>h2</code> access.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>The <code>alpn</code> set in the Fallback is used to match the actual negotiated ALPN, while the <code>alpn</code> set in the Inbound TLS represents the list of optional ALPNs during the handshake. These two have different meanings.</p></div><blockquote><p><code>path</code>: string</p></blockquote><p>Attempt to match the first packet HTTP PATH, where an empty value matches any PATH and a default value is empty. If non-empty, it must start with <code>/</code>, and h2c is not supported.</p><p>Smart: VLESS will only attempt to check the PATH (no more than 55 bytes; the fastest algorithm that does not fully parse HTTP) when necessary. If successful, it will output <code>realPath =</code> in the INFO log. Purpose: To route other inbound WebSocket traffic or HTTP disguised traffic, without additional processing, purely forwarding traffic, and theoretically better performance than Nginx.</p><p>Note: <strong>The inbound where fallbacks is located must be TCP+TLS</strong>. This is for routing to other WebSocket inbound, while the inbound being routed doesn&#39;t need to configure TLS.</p><blockquote><p><code>dest</code>: string | number</p></blockquote><p>Determines the destination of decrypted TLS TCP traffic, which currently supports two types of addresses: (this field is required, otherwise it cannot be started)</p>',15),y=t("li",null,[i("TCP, in the format of "),t("code",null,'"addr:port"'),i(", where addr supports IPv4, domain names, and IPv6. If a domain name is entered, a direct TCP connection will be made (rather than using the built-in DNS resolver).")],-1),w=i("Unix domain socket, in the format of an absolute path, such as "),v=t("code",null,'"/dev/shm/domain.socket"',-1),q=i(", which can be prefixed with "),T=t("code",null,"@",-1),P=i(" to represent "),x={href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"},S=i("abstract"),L=i(", and "),I=t("code",null,"@@",-1),A=i(" to represent padded abstract."),j=t("p",null,[i("If only the port is specified, both numbers and strings are accepted, such as "),t("code",null,"80"),i(" or "),t("code",null,'"80"'),i(". This usually points to a plaintext HTTP service (and the addr will be filled in as "),t("code",null,'"127.0.0.1"'),i(").")],-1),N=t("blockquote",null,[t("p",null,[t("code",null,"xver"),i(": number")])],-1),F=i("Sends the "),C={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},H=i("PROXY protocol"),O=i(" protocol, which is used to transmit the real source IP and port of the request. The version can be set to "),_=t("code",null,"1",-1),W=i(" or "),X=t("code",null,"2",-1),E=i(", with a default value of "),R=t("code",null,"0",-1),V=i(", which means no PROXY protocol is sent. Version "),Y=t("code",null,"1",-1),D=i(" is recommended if needed."),U=r("<p>Currently, versions <code>1</code> and <code>2</code> have the same functionality but different structures, where version <code>1</code> is printable while version 2 is <code>binary</code>. Xray&#39;s <code>TCP</code> and <code>WebSocket</code> inbound already support receiving the PROXY protocol.</p>",1),B={class:"custom-container warning"},M=t("p",{class:"custom-container-title"},"Warning",-1),z=i("If you are "),G={href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/using-proxy-protocol/#configuring-nginx-to-accept-the-proxy-protocol",target:"_blank",rel:"noopener noreferrer"},J=i("configuring Nginx to receive the PROXY protocol"),K=i(", you need to not only set "),Q=t("code",null,"proxy_protocol",-1),Z=i(", but also "),$=t("code",null,"set_real_ip_from",-1),ee=i(" to avoid potential issues."),ne=r('<h3 id="additional-information" tabindex="-1"><a class="header-anchor" href="#additional-information" aria-hidden="true">#</a> Additional Information</h3><ul><li>Matches the most precise sub-element, regardless of the order of arrangement of the sub-elements. If several sub-elements have the same <code>alpn</code> and <code>path</code> configurations, the last one specified will be used.</li><li>Fallback routing is performed at the decrypted TCP layer rather than the HTTP layer, and the first packet PATH is only checked when necessary.</li><li>You can learn more about tips and experiences in using Fallbacks by visiting <ul><li><a href="../../document/level-1/fallbacks-lv1">An Analysis of Fallback Functionality.</a></li></ul></li></ul>',2),ae={id:"fallbacks-design-theory",tabindex:"-1"},te=t("a",{class:"header-anchor",href:"#fallbacks-design-theory","aria-hidden":"true"},"#",-1),oe=i(" Fallbacks design theory ");c.render=function(r,i){const c=e("RouterLink"),se=e("OutboundLink"),le=e("Badge");return n(),a(l,null,[p,t("ul",null,[t("li",null,[d,u,h,b,f,o(c,{to:"/en/config/transport.html#tlsobject"},{default:s((()=>[m])),_:1}),k])]),g,t("ol",null,[y,t("li",null,[w,v,q,T,P,t("a",x,[S,o(se)]),L,I,A])]),j,N,t("p",null,[F,t("a",C,[H,o(se)]),O,_,W,X,E,R,V,Y,D]),U,t("div",B,[M,t("p",null,[z,t("a",G,[J,o(se)]),K,Q,Z,$,ee])]),ne,t("h2",ae,[te,oe,o(le,{text:"WIP",type:"warning"})])],64)};export default c;
