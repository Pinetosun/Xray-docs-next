import{r as e,o as a,c as n,a as s,b as o,F as p,d as t,e as c}from"./app.bc80e69a.js";const r={},l=t('<h1 id="mkcp" tabindex="-1"><a class="header-anchor" href="#mkcp" aria-hidden="true">#</a> mKCP</h1><p>mKCP 使用 UDP 来模拟 TCP 连接。</p><p>mKCP 牺牲带宽来降低延迟。传输同样的内容，mKCP 一般比 TCP 消耗更多的流量。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>请确定主机上的防火墙配置正确</p></div><h2 id="kcpobject" tabindex="-1"><a class="header-anchor" href="#kcpobject" aria-hidden="true">#</a> KcpObject</h2><p><code>KcpObject</code> 对应传输配置的 <code>kcpSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;mtu&quot;</span><span class="token operator">:</span> <span class="token number">1350</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;tti&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;uplinkCapacity&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;downlinkCapacity&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;congestion&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;readBufferSize&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;writeBufferSize&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;seed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Password&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p><code>mtu</code>: number</p></blockquote><p>最大传输单元（maximum transmission unit） 请选择一个介于 576 - 1460 之间的值。</p><p>默认值为 <code>1350</code>。</p><blockquote><p><code>tti</code>: number</p></blockquote><p>传输时间间隔（transmission time interval），单位毫秒（ms），mKCP 将以这个时间频率发送数据。 请选译一个介于 10 - 100 之间的值。</p><p>默认值为 <code>50</code>。</p><blockquote><p><code>uplinkCapacity</code>: number</p></blockquote><p>上行链路容量，即主机发出数据所用的最大带宽，单位 MB/s，注意是 Byte 而非 bit。 可以设置为 0，表示一个非常小的带宽。</p><p>默认值 <code>5</code>。</p><blockquote><p><code>downlinkCapacity</code>: number</p></blockquote><p>下行链路容量，即主机接收数据所用的最大带宽，单位 MB/s，注意是 Byte 而非 bit。 可以设置为 0，表示一个非常小的带宽。</p><p>默认值 <code>20</code>。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>uplinkCapacity</code> 和 <code>downlinkCapacity</code> 决定了 mKCP 的传输速度。 以客户端发送数据为例，客户端的 <code>uplinkCapacity</code> 指定了发送数据的速度，而服务器端的 <code>downlinkCapacity</code> 指定了接收数据的速度。两者的值以较小的一个为准。</p><p>推荐把 <code>downlinkCapacity</code> 设置为一个较大的值，比如 100，而 <code>uplinkCapacity</code> 设为实际的网络速度。当速度不够时，可以逐渐增加 <code>uplinkCapacity</code> 的值，直到带宽的两倍左右。</p></div><blockquote><p><code>congestion</code>: true | false</p></blockquote><p>是否启用拥塞控制。</p><p>开启拥塞控制之后，Xray 会自动监测网络质量，当丢包严重时，会自动降低吞吐量；当网络畅通时，也会适当增加吞吐量。</p><p>默认值为 <code>false</code></p><blockquote><p><code>readBufferSize</code>: number</p></blockquote><p>单个连接的读取缓冲区大小，单位是 MB。</p><p>默认值为 <code>2</code>。</p><blockquote><p><code>writeBufferSize</code>: number</p></blockquote><p>单个连接的写入缓冲区大小，单位是 MB。</p><p>默认值为 <code>2</code>。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>readBufferSize</code> 和 <code>writeBufferSize</code> 指定了单个连接所使用的内存大小。 在需要高速传输时，指定较大的 <code>readBufferSize</code> 和 <code>writeBufferSize</code> 会在一定程度上提高速度，但也会使用更多的内存。</p><p>在网速不超过 20MB/s 时，默认值 1MB 可以满足需求；超过之后，可以适当增加 <code>readBufferSize</code> 和 <code>writeBufferSize</code> 的值，然后手动平衡速度和内存的关系。</p></div><blockquote><p><code>header</code>: <a href="#headerobject">HeaderObject</a></p></blockquote><p>数据包头部伪装设置</p><blockquote><p><code>seed</code>: string</p></blockquote><p>可选的混淆密码，使用 AES-128-GCM 算法混淆流量数据，客户端和服务端需要保持一致。</p><p>本混淆机制不能用于保证通信内容的安全，但可能可以对抗部分封锁。</p><blockquote><p>目前测试环境下开启此设置后没有出现原版未混淆版本的封端口现象</p></blockquote><h3 id="headerobject" tabindex="-1"><a class="header-anchor" href="#headerobject" aria-hidden="true">#</a> HeaderObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: string</p></blockquote><p>伪装类型，可选的值有：</p><ul><li><code>&quot;none&quot;</code>：默认值，不进行伪装，发送的数据是没有特征的数据包。</li><li><code>&quot;srtp&quot;</code>：伪装成 SRTP 数据包，会被识别为视频通话数据（如 FaceTime）。</li><li><code>&quot;utp&quot;</code>：伪装成 uTP 数据包，会被识别为 BT 下载数据。</li><li><code>&quot;wechat-video&quot;</code>：伪装成微信视频通话的数据包。</li><li><code>&quot;dtls&quot;</code>：伪装成 DTLS 1.2 数据包。</li><li><code>&quot;wireguard&quot;</code>：伪装成 WireGuard 数据包。（并不是真正的 WireGuard 协议）</li></ul><h2 id="鸣谢" tabindex="-1"><a class="header-anchor" href="#鸣谢" aria-hidden="true">#</a> 鸣谢</h2>',43),u={href:"https://github.com/skywind3000",target:"_blank",rel:"noopener noreferrer"},i=c("@skywind3000"),d=c(" 发明并实现了 KCP 协议。"),b={href:"https://github.com/xtaci",target:"_blank",rel:"noopener noreferrer"},k=c("@xtaci"),m=c(" 将 KCP 由 C 语言实现翻译成 Go。"),h={href:"https://github.com/xiaokangwang",target:"_blank",rel:"noopener noreferrer"},q=c("@xiaokangwang"),f=c(" 测试 KCP 与 Xray 的整合并提交了最初的 PR。"),C=t('<h2 id="对-kcp-协议的改进" tabindex="-1"><a class="header-anchor" href="#对-kcp-协议的改进" aria-hidden="true">#</a> 对 KCP 协议的改进</h2><h3 id="更小的协议头" tabindex="-1"><a class="header-anchor" href="#更小的协议头" aria-hidden="true">#</a> 更小的协议头</h3><p>原生 KCP 协议使用了 24 字节的固定头部，而 mKCP 修改为数据包 18 字节，确认（ACK）包 16 字节。更小的头部有助于躲避特征检查，并加快传输速度。</p><p>另外，原生 KCP 的单个确认包只能确认一个数据包已收到，也就是说当 KCP 需要确认 100 个数据已收到时，它会发出 24 * 100 = 2400 字节的数据。其中包含了大量重复的头部数据，造成带宽的浪费。mKCP 会对多个确认包进行压缩，100 个确认包只需要 16 + 2 + 100 * 4 = 418 字节，相当于原生的六分之一。</p><h3 id="确认包重传" tabindex="-1"><a class="header-anchor" href="#确认包重传" aria-hidden="true">#</a> 确认包重传</h3><p>原生 KCP 协议的确认（ACK）包只发送一次，如果确认包丢失，则一定会导致数据重传，造成不必要的带宽浪费。而 mKCP 会以一定的频率重发确认包，直到发送方确认为止。单个确认包的大小为 22 字节，相比起数据包的 1000 字节以上，重传确认包的代价要小得多。</p><h3 id="连接状态控制" tabindex="-1"><a class="header-anchor" href="#连接状态控制" aria-hidden="true">#</a> 连接状态控制</h3><p>mKCP 可以有效地开启和关闭连接。当远程主机主动关闭连接时，连接会在两秒钟之内释放；当远程主机断线时，连接会在最多 30 秒内释放。</p><p>原生 KCP 不支持这个场景。</p>',9);r.render=function(t,c){const r=e("OutboundLink");return a(),n(p,null,[l,s("ul",null,[s("li",null,[s("a",u,[i,o(r)]),d]),s("li",null,[s("a",b,[k,o(r)]),m]),s("li",null,[s("a",h,[q,o(r)]),f])]),C],64)};export default r;
