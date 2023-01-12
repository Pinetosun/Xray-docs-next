import{r as n,o as t,c as s,a,b as e,F as r,d as l,e as u}from"./app.5706c26d.js";const p={},o=l('<h1 id="客户端服务端构建-nginx-隧道隐藏指纹" tabindex="-1"><a class="header-anchor" href="#客户端服务端构建-nginx-隧道隐藏指纹" aria-hidden="true">#</a> 客户端服务端构建 Nginx 隧道隐藏指纹</h1><p>网路结构：</p><p>xray_client ---tcp--- nginx_client ---tcp_TLS--- nginx_sever ---tcp--- xray_server</p><h2 id="编译-nginx-with-stream" tabindex="-1"><a class="header-anchor" href="#编译-nginx-with-stream" aria-hidden="true">#</a> 编译 nginx --with-stream</h2><p>在客户端及服务端均编译</p><p><code>curl -O -L http://nginx.org/download/nginx-1.22.1.tar.gz</code></p><p><code>tar -zxvf nginx-1.22.1.tar.gz</code></p><p><code>cd nginx-1.22.1</code></p><p><code>apt install gcc make</code> //编译依赖 gcc 以及 make</p><p><code>./configure --prefix=/usr/local/nginx --with-http_ssl_module --with-http_v2_module --with-stream --with-stream_ssl_module</code> //此步需要依赖一些库，根据报错安装相应 lib</p><p><code>make &amp;&amp; make install</code></p><p>编译之后 nginx 文件夹位于 <code>/usr/local/nginx</code></p><h2 id="配置-nginx" tabindex="-1"><a class="header-anchor" href="#配置-nginx" aria-hidden="true">#</a> 配置 nginx</h2><p>编辑 nginx 配置文件 nginx.conf</p><p><code>vim /usr/local/nginx/conf/nginx.conf</code></p><p>服务端加入如下配置</p>',16),b=u("服务器申请证书不再赘述，参考"),i={href:"https://xtls.github.io/document/level-0/ch06-certificates.html",target:"_blank",rel:"noopener noreferrer"},c=u("白话文"),m=l('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stream {\n    server {\n        listen 443 ssl;\n        listen [::]:443 ssl;\n        ssl_protocols TLSv1.3;\n        ssl_certificate /path/to/cert/domain.crt; #crt文件位置\n        ssl_certificate_key /path/to/cert/domain.key; #key文件位置\n        proxy_pass unix:/dev/shm/vless.sock; #使用 domain socket\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>stream 部分与 http 模块并列，客户端可删除 http 部分，服务端可删除或搭建网页伪装回落</p></div><p>客户端加入如下配置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stream {\n    server {\n        listen 6666;\n        listen [::]:6666;\n        proxy_ssl on;\n        proxy_ssl_protocols TLSv1.3;\n        proxy_ssl_server_name on;\n        proxy_ssl_name yourdomain.domain; #服务器域名\n        proxy_pass ip:443; #服务器 ip 形如 proxy_pass 6.6.6.6:443; 或 proxy_pass [2401:0:0::1]:443;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在 <code>/etc/systemd/system</code> 文件夹中创建 <code>nginx.service</code> 文件</p><p><code>vim /etc/systemd/system/nginx.service</code></p><p>写入如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]\nDescription=The NGINX HTTP and reverse proxy server\nAfter=syslog.target network-online.target remote-fs.target nss-lookup.target\nAfter=xray.service\n\n[Service]\nType=forking\nExecStartPre=/usr/local/nginx/sbin/nginx -t\nExecStart=/usr/local/nginx/sbin/nginx\nExecReload=/usr/local/nginx/sbin/nginx -s reload\nExecStop=/bin/kill -s QUIT $MAINPID\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>加入开机自启</p><p><code>systemctl enable nginx</code></p><h2 id="xray-配置" tabindex="-1"><a class="header-anchor" href="#xray-配置" aria-hidden="true">#</a> xray 配置</h2><p>服务端 xray 配置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n\t&quot;log&quot;: {\n\t\t&quot;loglevel&quot;: &quot;none&quot;\n\t},\n\t&quot;inbounds&quot;: [\n\t\t{\n\t\t\t&quot;listen&quot;: &quot;/dev/shm/vless.sock,0666&quot;,\n\t\t\t&quot;protocol&quot;: &quot;vless&quot;,\n\t\t\t&quot;settings&quot;: {\n\t\t\t\t&quot;clients&quot;: [\n\t\t\t\t\t{\n\t\t\t\t\t\t&quot;id&quot;: &quot;uuid&quot;\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t&quot;decryption&quot;: &quot;none&quot;\n\t\t\t},\n\t\t\t&quot;streamSettings&quot;: {\n\t\t\t\t&quot;network&quot;: &quot;tcp&quot;\n\t\t\t},\n\t\t\t&quot;sniffing&quot;: {\n\t\t\t\t&quot;enabled&quot;: true,\n\t\t\t\t&quot;destOverride&quot;: [\n\t\t\t\t\t&quot;http&quot;,\n\t\t\t\t\t&quot;tls&quot;\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t],\n\t&quot;outbounds&quot;: [\n\t\t{\n\t\t\t&quot;protocol&quot;: &quot;freedom&quot;\n\t\t}\n\t]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>客户端 xray 配置，此处以旁路由透明代理为例</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n\t&quot;log&quot;: {\n\t\t&quot;loglevel&quot;: &quot;none&quot;\n\t},\n\t&quot;inbounds&quot;: [\n\t\t{\n\t\t\t&quot;tag&quot;: &quot;tproxy-in&quot;,\n\t\t\t&quot;port&quot;: 12345,\n\t\t\t&quot;protocol&quot;: &quot;dokodemo-door&quot;,\n\t\t\t&quot;settings&quot;: {\n\t\t\t\t&quot;network&quot;: &quot;tcp,udp&quot;,\n\t\t\t\t&quot;followRedirect&quot;: true\n\t\t\t},\n\t\t\t&quot;sniffing&quot;: {\n\t\t\t\t&quot;enabled&quot;: true,\n\t\t\t\t&quot;destOverride&quot;: [\n\t\t\t\t\t&quot;http&quot;,\n\t\t\t\t\t&quot;tls&quot;\n\t\t\t\t],\n\t\t\t\t&quot;routeOnly&quot;: true\n\t\t\t},\n\t\t\t&quot;streamSettings&quot;: {\n\t\t\t\t&quot;sockopt&quot;: {\n\t\t\t\t\t&quot;tproxy&quot;: &quot;tproxy&quot;,\n\t\t\t\t\t&quot;mark&quot;: 255\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t&quot;tag&quot;: &quot;http&quot;,\n\t\t\t&quot;port&quot;: 10808,\n\t\t\t&quot;listen&quot;: &quot;127.0.0.1&quot;,\n\t\t\t&quot;protocol&quot;: &quot;http&quot;,\n\t\t\t&quot;sniffing&quot;: {\n\t\t\t\t&quot;enabled&quot;: true,\n\t\t\t\t&quot;destOverride&quot;: [\n\t\t\t\t\t&quot;http&quot;,\n\t\t\t\t\t&quot;tls&quot;\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t],\n\t&quot;outbounds&quot;: [\n\t\t{\n\t\t\t&quot;tag&quot;: &quot;nginxtls&quot;,\n\t\t\t&quot;protocol&quot;: &quot;vless&quot;,\n\t\t\t&quot;settings&quot;: {\n\t\t\t\t&quot;vnext&quot;: [\n\t\t\t\t\t{\n\t\t\t\t\t\t&quot;address&quot;: &quot;127.0.0.1&quot;,\n\t\t\t\t\t\t&quot;port&quot;: 6666,\n\t\t\t\t\t\t&quot;users&quot;: [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t&quot;id&quot;: &quot;uuid&quot;,\n\t\t\t\t\t\t\t\t&quot;encryption&quot;: &quot;none&quot;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t&quot;streamSettings&quot;: {\n\t\t\t\t&quot;sockopt&quot;: {\n\t\t\t\t\t&quot;mark&quot;: 255\n\t\t\t\t},\n\t\t\t\t&quot;network&quot;: &quot;tcp&quot;\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t&quot;tag&quot;: &quot;direct&quot;,\n\t\t\t&quot;protocol&quot;: &quot;freedom&quot;,\n\t\t\t&quot;streamSettings&quot;: {\n\t\t\t\t&quot;sockopt&quot;: {\n\t\t\t\t\t&quot;mark&quot;: 255\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t&quot;tag&quot;: &quot;block&quot;,\n\t\t\t&quot;protocol&quot;: &quot;blackhole&quot;,\n\t\t\t&quot;settings&quot;: {\n\t\t\t\t&quot;response&quot;: {\n\t\t\t\t\t&quot;type&quot;: &quot;http&quot;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n\t&quot;routing&quot;: {\n\t\t&quot;domainMatcher&quot;: &quot;mph&quot;,\n\t\t&quot;domainStrategy&quot;: &quot;AsIs&quot;,\n\t\t&quot;rules&quot;: [\n\t\t\t{\n\t\t\t\t&quot;type&quot;: &quot;field&quot;,\n\t\t\t\t&quot;domain&quot;: [\n\t\t\t\t\t&quot;geosite:category-ads-all&quot;\n\t\t\t\t],\n\t\t\t\t&quot;outboundTag&quot;: &quot;block&quot;\n\t\t\t},\n\t\t\t{\n\t\t\t\t&quot;type&quot;: &quot;field&quot;,\n\t\t\t\t&quot;port&quot;: 123,\n\t\t\t\t&quot;network&quot;: &quot;udp&quot;,\n\t\t\t\t&quot;outboundTag&quot;: &quot;direct&quot;\n\t\t\t},\n\t\t\t{\n\t\t\t\t&quot;type&quot;: &quot;field&quot;,\n\t\t\t\t&quot;domain&quot;: [\n\t\t\t\t\t&quot;geosite:cn&quot;\n\t\t\t\t],\n\t\t\t\t&quot;outboundTag&quot;: &quot;direct&quot;\n\t\t\t},\n\t\t\t{\n\t\t\t\t&quot;type&quot;: &quot;field&quot;,\n\t\t\t\t&quot;protocol&quot;: [\n\t\t\t\t\t&quot;bittorrent&quot;\n\t\t\t\t],\n\t\t\t\t&quot;outboundTag&quot;: &quot;direct&quot;\n\t\t\t},\n\t\t\t{\n\t\t\t\t&quot;type&quot;: &quot;field&quot;,\n\t\t\t\t&quot;ip&quot;: [\n\t\t\t\t\t&quot;geoip:private&quot;\n\t\t\t\t],\n\t\t\t\t&quot;outboundTag&quot;: &quot;direct&quot;\n\t\t\t},\n\t\t\t{\n\t\t\t\t&quot;type&quot;: &quot;field&quot;,\n\t\t\t\t&quot;inboundTag&quot;: [\n\t\t\t\t\t&quot;tproxy-in&quot;\n\t\t\t\t],\n\t\t\t\t&quot;outboundTag&quot;: &quot;nginxtls&quot;\n\t\t\t}\n\t\t]\n\t}\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br></div></div><p>如果使用透明代理需要在 iptables 或 ip6tables 配置中加入</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>iptables -t mangle -A XRAY_MASK -d VSP_IPv4/32 -j RETURN\nip6tables -t mangle -A XRAY6_MASK -d VPS_IPv6/128 -j RETURN\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="客户端及服务端启动服务" tabindex="-1"><a class="header-anchor" href="#客户端及服务端启动服务" aria-hidden="true">#</a> 客户端及服务端启动服务</h2><p><code>systemctl restart xray</code></p><p><code>systemctl restart nginx</code></p><h2 id="后记" tabindex="-1"><a class="header-anchor" href="#后记" aria-hidden="true">#</a> 后记</h2><p>客户端应该也是可以通过 domain socket 连接提高性能，但由于 xray outbound 不支持 ds 出站，想了半天没什么好的实现方法。如果 vnext 里支持 ds 就好了 (没有别的意思)。</p><p>从客户端 nginx 开始应该可以选择 http2 grpc ws 等传输方式。</p>',23);p.render=function(l,u){const p=n("OutboundLink");return t(),s(r,null,[o,a("p",null,[b,a("a",i,[c,e(p)])]),m],64)};export default p;
