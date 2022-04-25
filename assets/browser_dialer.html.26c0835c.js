import{r as e,o as a,c as r,b as l,a as o,F as n,e as d,d as i}from"./app.bc80e69a.js";const c={},t=o("h1",{id:"browser-dialer",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#browser-dialer","aria-hidden":"true"},"#"),d(" Browser Dialer")],-1),s=d(),u=o("h2",{id:"background",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),d(" Background")],-1),h=d("基于 "),y={href:"https://github.com/v2ray/discussion/issues/754#issuecomment-647934994",target:"_blank",rel:"noopener noreferrer"},S=d("一年前的想法"),p=d(" ，利用原生 JS 实现了简洁的 WSS Browser Dialer，达到了真实浏览器的 TLS 指纹、行为特征。"),b=i('<p>不过 WSS 仍存在 ALPN 明显的问题，所以下一步是浏览器转发 <code>HTTP/2</code>,<code>QUIC</code>。</p><h2 id="xray-js" tabindex="-1"><a class="header-anchor" href="#xray-js" aria-hidden="true">#</a> Xray &amp; JS</h2><p>创造了一个非常简单、巧妙的通信机制：</p><ul><li>Xray 监听地址端口 A，作为 HTTP 服务，浏览器访问 A，加载网页中的 JS。</li><li>JS 主动向 A 建立 WebSocket 连接，成功后，Xray 将连接发给 channel。</li><li>需要建立连接时，Xray 从 channel 接收一个可用的连接，并发送目标 URL 和可选的 early data。</li><li>JS 成功连接到目标后告知 Xray，并继续用这个 conn 全双工双向转发数据，连接关闭行为同步。</li><li>连接使用后就会被关闭，但 JS 会确保始终有新空闲连接可用。</li></ul><h2 id="early-data" tabindex="-1"><a class="header-anchor" href="#early-data" aria-hidden="true">#</a> Early data</h2><p>根据浏览器的需求，对 early data 机制进行了如下调整：</p>',6),g=o("li",null,[d("服务端响应头会带有请求的 "),o("code",null,"Sec-WebSocket-Protocol"),d("，这也初步混淆了 WSS 握手响应的长度特征。")],-1),f=o("li",null,[d("用于浏览器的 early data 编码是 "),o("code",null,"base64.RawURLEncoding"),d(" 而不是 "),o("code",null,"StdEncoding"),d("，服务端做了兼容。")],-1),x=d("此外，由于 "),X={href:"https://github.com/XTLS/Xray-core/pull/375",target:"_blank",rel:"noopener noreferrer"},k=d("Xray-core#375"),w=d(" 推荐 "),R=o("code",null,"?ed=2048",-1),W=d("，这个 PR 顺便将服务端一处 "),m=o("code",null,"MaxHeaderBytes",-1),A=d(" 扩至了 4096。 "),B=o("s",null,"（虽然好像不改也没问题）",-1),L={id:"configuration",tabindex:"-1"},T=o("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#",-1),E=d(" Configuration "),J=i("<p>这是一个探索的过程，目前两边都是 Xray-core v1.4.1 时的配置方式：</p><ul><li>准备一份可用的 WSS 配置，注意 address 必须填域名，若需要指定 IP，请配置 DNS 或系统 hosts。</li><li>若浏览器的流量也会经过 Xray-core，务必将这个域名设为直连，否则会造成流量回环。</li><li>设置环境变量指定要监听的地址端口，比如 <code>XRAY_BROWSER_DIALER = 127.0.0.1:8080</code>。</li><li>先运行 Xray-core，再用任意浏览器访问上面指定的地址端口，还可以 <code>F12</code> 看 <code>Console</code> 和 <code>Network</code>。</li><li>浏览器会限制 WebSocket 连接数，所以建议开启 <code>Mux.Cool</code>。</li></ul>",2);c.render=function(d,i){const c=e("Badge"),P=e("OutboundLink");return a(),r(n,null,[t,l(c,{text:"BETA",type:"warning"}),s,l(c,{text:"v1.4.1+",type:"warning"}),u,o("p",null,[h,o("a",y,[S,l(P)]),p]),b,o("ul",null,[g,f,o("li",null,[x,o("a",X,[k,l(P)]),w,R,W,m,A,B])]),o("h2",L,[T,E,l(c,{text:"v1.4.1",type:"warning"})]),J],64)};export default c;
