import{r as a,o as r,c as n,b as e,F as l,a as A,e as E}from"./app.bc80e69a.js";const i={},u=A("h1",{id:"xray-的工作模式",tabindex:"-1"},[A("a",{class:"header-anchor",href:"#xray-的工作模式","aria-hidden":"true"},"#"),E(" Xray 的工作模式")],-1),d=A("h2",{id:"单服务器模式",tabindex:"-1"},[A("a",{class:"header-anchor",href:"#单服务器模式","aria-hidden":"true"},"#"),E(" 单服务器模式")],-1),h=A("p",null,"与其它的网络代理工具一样，你需要一台配置了 Xray 的服务器，然后在自己的设备上安装并配置 Xray 客户端，然后即可流畅地访问互联网。",-1),o=A("p",null,"一个 Xray 服务器可同时支持多台设备使用不同的代理协议访问。同时，经过合理的配置，Xray 可以识别并区分需要代理以及不需要代理的流量，直连的流量不需要绕路。",-1),t=A("h2",{id:"桥接模式",tabindex:"-1"},[A("a",{class:"header-anchor",href:"#桥接模式","aria-hidden":"true"},"#"),E(" 桥接模式")],-1),D=A("p",null,"如果你不想在每一台设备上都配置路由，你也可以设置一台中转服务器，用于接收客户端发来的所有流量，然后在服务器中进行转发判断。",-1),s=A("h2",{id:"工作原理",tabindex:"-1"},[A("a",{class:"header-anchor",href:"#工作原理","aria-hidden":"true"},"#"),E(" 工作原理")],-1),B=A("p",null,"在配置 Xray 之前，不妨先来看一下 Xray 的工作原理，以下是单个 Xray 进程的内部结构示意图。多个 Xray 之间相互独立，互不影响。",-1),b=A("ul",null,[A("li",null,[E("需要配置至少一个入站连接（Inbound）和一个出站连接（Outbound）才可以正常工作。 "),A("ul",null,[A("li",null,[E("入站连接负责与客户端（如浏览器）通信： "),A("ul",null,[A("li",null,"入站连接通常可以配置用户认证，如 ID 和密码等；"),A("li",null,"入站连接收到数据之后，会交给分发器（Dispatcher）进行分发；")])]),A("li",null,"出站连接负责将数据发给服务器，如另一台主机上的 Xray。")])]),A("li",null,[E("当有多个出站连接时，可以配置路由（Routing）来指定某一类流量由某一个出站连接发出。 "),A("ul",null,[A("li",null,"路由会在必要时查询 DNS 以获取更多信息来进行判断。")])])],-1);i.render=function(A,E){const i=a("Mermaid");return r(),n(l,null,[u,d,h,e(i,{identifier:"mermaid_1a962853",graph:"graph%20LR;%0AA(PC)%20-.-%20B(%E9%98%B2%E7%81%AB%E5%A2%99);%0AB%20-.-%3E%20C(%E5%A2%99%E5%A4%96%E7%BD%91%E7%AB%99);%0AA%20--%3E%20D(Xray/VPS);%0AD%20--%3E%20C;%0AA%20--%3E%20E(%E5%A2%99%E5%86%85%E7%BD%91%E7%AB%99);%0A"}),o,t,D,e(i,{identifier:"mermaid_382ee14e",graph:"graph%20LR;%0AA(PC)%20-.-%3E%20B(%E9%98%B2%E7%81%AB%E5%A2%99);%0AB%20-.-%3E%20C(%E5%A2%99%E5%A4%96%E7%BD%91%E7%AB%99);%0AA%20--%3E%20D(%E5%A2%99%E5%86%85%20VPS);%0AD%20--%3E%20E(%E5%A2%99%E5%A4%96%20VPS);%0AE%20--%3E%20C;%0AD%20--%3E%20F(%E5%A2%99%E5%86%85%E7%BD%91%E7%AB%99);%0A"}),s,B,e(i,{identifier:"mermaid_382ee16a",graph:"graph%20LR;%0AA1(inbound)%20--%3E%20D(Dispatcher%20/%20Router%20/%20DNS);%0AA2(inbound)%20--%3E%20D;%0AA3(inbound)%20--%3E%20D;%0AA4(inbound)%20--%3E%20D;%0AD%20--%3E%20B1(outbound);%0AD%20--%3E%20B2(outbound);%0AD%20--%3E%20B3(outbound);%0AD%20--%3E%20B4(outbound);%0A"}),b],64)};export default i;
