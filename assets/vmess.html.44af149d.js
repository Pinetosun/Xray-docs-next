import{r as n,o as e,c as s,a,b as t,w as o,F as l,e as p,d as c}from"./app.6378c79d.js";const r={},u=a("h1",{id:"vmess",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),p(" VMess")],-1),i=p("VMess"),d=p(" is an encrypted transport protocol that is commonly used as a bridge between Xray clients and servers."),b=c('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>VMess relies on system time. Please ensure that the system UTC time used by Xray is within 120 seconds of the actual time, regardless of time zone. On Linux systems, you can install the <code>ntp</code> service to automatically synchronize the system time.</p></div><h2 id="inboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#inboundconfigurationobject" aria-hidden="true">#</a> InboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;detour&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>clients</code>: [ <a href="#clientobject">ClientObject</a> ]</p></blockquote><p>An array representing a group of users approved by the server.</p><p>Each item in the array is a user <a href="#clientobject">ClientObject</a>.</p><p>When this configuration is used for dynamic ports, Xray will automatically create users.</p><blockquote><p><code>detour</code>: <a href="#detourobject">DetourObject</a></p></blockquote><p>Indicates that another server should be used for the corresponding outbound protocol.</p><blockquote><p><code>default</code>: <a href="#defaultobject">DefaultObject</a></p></blockquote><p>Optional. The default configuration for clients. Only effective when used with <code>detour</code>.</p><h3 id="clientobject" tabindex="-1"><a class="header-anchor" href="#clientobject" aria-hidden="true">#</a> ClientObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The user ID for VMess. It can be any string less than 30 bytes or a valid UUID.</p>',15),h={class:"custom-container tip"},m=a("p",{class:"custom-container-title"},"Tip",-1),k=a("p",null,"Custom strings and their corresponding UUIDs are equivalent, which means you can use either of the following in the configuration file to identify the same user:",-1),f=a("ul",null,[a("li",null,[a("code",null,'"id": "我爱🍉老师1314"')]),a("li",null,[a("code",null,'"id": "5783a3e7-e373-51cd-8642-c83782b807c5"'),p(' (This UUID is the mapping of the string "我爱 🍉 老师 1314")')])],-1),g=p("The mapping standard is described in the "),q={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},v=p("VLESS UUID Mapping Standard: Mapping a Custom String to a UUIDv5"),y=p("."),j=a("p",null,[p("You can use the command "),a("code",null,'xray uuid -i "custom string"'),p(" to generate the UUID corresponding to a custom string.")],-1),x=a("p",null,[p("You can also use the command "),a("code",null,"xray uuid"),p(" to generate a random UUID. :::")],-1),U=a("blockquote",null,[a("p",null,[a("code",null,"level"),p(": number")])],-1),D=p("The user level that the connection will use to determine the corresponding "),I=p("Local Policy"),T=p("."),O=p("The value of "),w=a("code",null,"level",-1),_=p(" corresponds to the value of "),C=a("code",null,"level",-1),L=p(" in the "),M=p("policy"),V=p(". If not specified, the default value is 0."),S=c('<blockquote><p><code>email</code>: string</p></blockquote><p>The user&#39;s email address, used to differentiate traffic from different users.</p><h3 id="detourobject" tabindex="-1"><a class="header-anchor" href="#detourobject" aria-hidden="true">#</a> DetourObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tag_to_detour&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>to</code>: string</p></blockquote><p>The <code>tag</code> of an inbound that specifies the inbound using the VMess protocol.</p><h3 id="defaultobject" tabindex="-1"><a class="header-anchor" href="#defaultobject" aria-hidden="true">#</a> DefaultObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>level</code>: number</p></blockquote>',9),X=p("The user level that the connection will use to determine the corresponding "),P=p("Local Policy"),z=p("."),E=p("The value of "),Y=a("code",null,"level",-1),A=p(" corresponds to the value of "),F=a("code",null,"level",-1),R=p(" in the "),W=p("policy"),B=p(". If not specified, the default value is 0.");r.render=function(p,c){const r=n("RouterLink"),G=n("OutboundLink");return e(),s(l,null,[u,a("p",null,[t(r,{to:"/en/development/protocols/vmess.html"},{default:o((()=>[i])),_:1}),d]),b,a("div",h,[m,k,f,a("p",null,[g,a("a",q,[v,t(G)]),y]),j,x,U,a("p",null,[D,t(r,{to:"/en/config/policy.html#levelpolicyobject"},{default:o((()=>[I])),_:1}),T]),a("p",null,[O,w,_,C,L,t(r,{to:"/en/config/policy.html#policyobject"},{default:o((()=>[M])),_:1}),V]),S,a("p",null,[X,t(r,{to:"/en/config/policy.html#levelpolicyobject"},{default:o((()=>[P])),_:1}),z]),a("p",null,[E,Y,A,F,R,t(r,{to:"/en/config/policy.html#policyobject"},{default:o((()=>[W])),_:1}),B])])],64)};export default r;