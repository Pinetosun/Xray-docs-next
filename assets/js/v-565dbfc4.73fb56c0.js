(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[4376],{2207:(e,a,l)=>{"use strict";l.r(a),l.d(a,{data:()=>t});const t={key:"v-565dbfc4",path:"/en/config/features/env.html",title:"环境变量",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"XTLS 信息显示",slug:"xtls-信息显示",children:[{level:3,title:"VLESS",slug:"vless",children:[]},{level:3,title:"TROJAN",slug:"trojan",children:[]}]},{level:2,title:"资源文件路径",slug:"资源文件路径",children:[]},{level:2,title:"配置文件位置",slug:"配置文件位置",children:[]},{level:2,title:"多配置目录",slug:"多配置目录",children:[]}],filePathRelative:"en/config/features/env.md",git:{updatedTime:1622027153e3,contributors:[]}}},6813:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>i});const t=(0,l(6252).uE)('<h1 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h1><p>Xray 提供以下环境变量以供修改 Xray 的一些底层配置。</p><h2 id="xtls-信息显示" tabindex="-1"><a class="header-anchor" href="#xtls-信息显示" aria-hidden="true">#</a> XTLS 信息显示</h2><h3 id="vless" tabindex="-1"><a class="header-anchor" href="#vless" aria-hidden="true">#</a> VLESS</h3><ul><li>名称：<code>xray.vless.xtls.show</code> 或 <code>XRAY_VLESS_XTLS_SHOW</code>。</li><li>默认值：<code>&quot;&quot;</code>。</li></ul><p>使用 VLESS 协议时,设置此环境变量为 true 时, 会在终端或日志中输出 XTLS 的相关信息.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>可打开此环境变量并根据是否有输出 XTLS 相关信息, 来确定 XTLS 是否成功被应用.</p></div><h3 id="trojan" tabindex="-1"><a class="header-anchor" href="#trojan" aria-hidden="true">#</a> TROJAN</h3><ul><li>名称：<code>xray.trojan.xtls.show</code> 或 <code>XRAY_TROJAN_XTLS_SHOW</code>。</li><li>默认值：<code>&quot;&quot;</code>。</li></ul><p>使用 trojan 协议时, 设置此环境变量为 true 时, 会在终端或日志中输出 XTLS 的相关信息.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>可打开此环境变量并根据是否有输出 XTLS 相关信息, 来确定 XTLS 是否成功被应用.</p></div><h2 id="资源文件路径" tabindex="-1"><a class="header-anchor" href="#资源文件路径" aria-hidden="true">#</a> 资源文件路径</h2><ul><li>名称：<code>xray.location.asset</code> 或 <code>XRAY_LOCATION_ASSET</code>。</li><li>默认值：和 Xray 文件同路径。</li></ul><p>这个环境变量指定了一个文件夹位置，这个文件夹应当包含 geoip.dat 和 geosite.dat 文件。</p><h2 id="配置文件位置" tabindex="-1"><a class="header-anchor" href="#配置文件位置" aria-hidden="true">#</a> 配置文件位置</h2><ul><li>名称：<code>xray.location.config</code> 或 <code>XRAY_LOCATION_CONFIG</code>。</li><li>默认值：和 Xray 文件同路径。</li></ul><p>这个环境变量指定了一个文件夹位置，这个文件夹应当包含 config.json 文件。</p><h2 id="多配置目录" tabindex="-1"><a class="header-anchor" href="#多配置目录" aria-hidden="true">#</a> 多配置目录</h2><ul><li>名称：<code>xray.location.confdir</code> 或 <code>XRAY_LOCATION_CONFDIR</code>。</li><li>默认值：<code>&quot;&quot;</code>。</li></ul><p>这个目录内的 <code>.json</code> 文件会按文件名顺序读取，作为多配置选项。</p>',20),i={render:function(e,a){return t}}}}]);