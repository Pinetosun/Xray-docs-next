import{r as o,o as l,c as t,a as e,b as n,w as u,F as a,e as r}from"./app.bc80e69a.js";const s={},c=e("h1",{id:"出站协议",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#出站协议","aria-hidden":"true"},"#"),r(" 出站协议")],-1),d=e("blockquote",null,[e("p",null,[e("strong",null,"这个章节包含了目前所有可用于 Outbounds 的协议及具体配置细节.")])],-1),p=e("h2",{id:"协议列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#协议列表","aria-hidden":"true"},"#"),r(" 协议列表")],-1),f=r("Blackhole"),h=r("Blackhole（黑洞）是一个出站数据协议，它会阻碍所有数据的出站，配合 "),k=r("路由（Routing）"),i=r(" 一起使用，可以达到禁止访问某些网站的效果。"),b=r("DNS"),g=e("p",null,"DNS 是一个出站协议，主要用于拦截和转发 DNS 查询。此出站协议只能接收 DNS 流量（包含基于 UDP 和 TCP 协议的查询），其它类型的流量会导致错误。",-1),m=r("Freedom"),S=e("p",null,"Freedom 是一个出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。",-1),_=r("HTTP"),q=e("p",null,"HTTP 协议",-1),w=r("Socks"),T=r("标准 Socks 协议实现，兼容 "),j={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},D=r("Socks 4"),P=r("、Socks 4a 和 "),v={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},C=r("Socks 5"),L=r("。"),N=r("VLESS"),O=e("p",null,"VLESS 是一个无状态的轻量传输协议，可以作为 Xray 客户端和服务器之间的桥梁。",-1),V=r("VMess"),x=r("VMess"),F=r(" 是一个加密传输协议，可以作为 Xray 客户端和服务器之间的桥梁。"),y=r("Trojan"),B={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},E=r("Trojan"),H=r(" 协议。"),K=r("Shadowsocks"),M={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},R=r("Shadowsocks"),U=r(" 协议。");s.render=function(r,s){const X=o("RouterLink"),z=o("OutboundLink");return l(),t(a,null,[c,d,p,e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/blackhole.html"},{default:u((()=>[f])),_:1})])]),e("p",null,[h,n(X,{to:"/config/routing.html"},{default:u((()=>[k])),_:1}),i]),e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/dns.html"},{default:u((()=>[b])),_:1})])]),g,e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/freedom.html"},{default:u((()=>[m])),_:1})])]),S,e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/http.html"},{default:u((()=>[_])),_:1})])]),q,e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/socks.html"},{default:u((()=>[w])),_:1})])]),e("p",null,[T,e("a",j,[D,n(z)]),P,e("a",v,[C,n(z)]),L]),e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/vless.html"},{default:u((()=>[N])),_:1})])]),O,e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/vmess.html"},{default:u((()=>[V])),_:1})])]),e("p",null,[n(X,{to:"/config/development/protocols/vmess.html"},{default:u((()=>[x])),_:1}),F]),e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/trojan.html"},{default:u((()=>[y])),_:1})])]),e("p",null,[e("a",B,[E,n(z)]),H]),e("blockquote",null,[e("p",null,[n(X,{to:"/config/outbounds/shadowsocks.html"},{default:u((()=>[K])),_:1})])]),e("p",null,[e("a",M,[R,n(z)]),U])],64)};export default s;
