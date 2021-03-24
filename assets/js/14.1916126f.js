(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{388:function(e,t,a){e.exports=a.p+"assets/img/ch06-img01-acme-install.3a4129f3.gif"},461:function(e,t,a){"use strict";a.r(t);var c=a(26),s=Object(c.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"【第6章】证书管理篇"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#【第6章】证书管理篇"}},[e._v("#")]),e._v(" 【第6章】证书管理篇")]),e._v(" "),c("h2",{attrs:{id:"_6-1-申请tls证书"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-申请tls证书"}},[e._v("#")]),e._v(" 6.1 申请TLS证书")]),e._v(" "),c("p",[e._v("接下来我们要做的，是为我们的域名申请一个真实的TLS证书，使网站具备标准TLS加密的能力及HTTPS访问的能力。这就是Xray等现阶段安全代理工具确保流量充分加密最重要的工具。")]),e._v(" "),c("div",{staticClass:"custom-block warning"},[c("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),c("p",[e._v("请不要轻易使用自签证书。它并没有让操作简单太多，但增加了无谓的风险（如中间人攻击）。")])]),e._v(" "),c("p",[e._v("这里我会使用一个叫做 "),c("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[c("code",[e._v("acme.sh")]),c("OutboundLink")],1),e._v(" 的证书管理工具，它简单、轻量、高效，并可完成证书自动更新。")]),e._v(" "),c("p",[e._v("另外，我相信，现在你已经逐渐熟悉了Linux的基础操作，所以已经多次出现的命令从本章开始不再重复截图、只做简单的描述。如果实在想不起来怎么用的话，就稍微复习一下前面的章节吧。")]),e._v(" "),c("h2",{attrs:{id:"_6-2-安装-acme-sh"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-安装-acme-sh"}},[e._v("#")]),e._v(" 6.2 安装 "),c("code",[e._v("acme.sh")])]),e._v(" "),c("ol",[c("li",[c("p",[e._v("小小白白Linux基础命令：")]),e._v(" "),c("table",[c("thead",[c("tr",[c("th",{staticStyle:{"text-align":"center"}},[e._v("编号")]),e._v(" "),c("th",{staticStyle:{"text-align":"center"}},[e._v("命令名称")]),e._v(" "),c("th",{staticStyle:{"text-align":"center"}},[e._v("命令说明")])])]),e._v(" "),c("tbody",[c("tr",[c("td",{staticStyle:{"text-align":"center"}},[c("code",[e._v("cmd-12")])]),e._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[e._v("wget")])]),e._v(" "),c("td",{staticStyle:{"text-align":"center"}},[e._v("访问（或下载）某个网页文件")])]),e._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"center"}},[c("code",[e._v("cmd-13")])]),e._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[e._v("acme.sh")])]),e._v(" "),c("td",{staticStyle:{"text-align":"center"}},[e._v("acme.sh证书管理相关的命令")])])])])]),e._v(" "),c("li",[c("p",[e._v("运行安装脚本")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("$ wget -O -  https://get.acme.sh | sh\n")])])])]),e._v(" "),c("li",[c("p",[e._v("让 "),c("code",[e._v("acme.sh")]),e._v(" 命令生效")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("$ . .bashrc\n")])])])]),e._v(" "),c("li",[c("p",[e._v("开启 "),c("code",[e._v("acme.sh")]),e._v(" 的自动升级")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("$ acme.sh --upgrade --auto-upgrade\n")])])])]),e._v(" "),c("li",[c("p",[e._v("到这一步的完整流程如下图：")]),e._v(" "),c("img",{attrs:{src:a(388),alt:"acme.sh安装演示"}})])]),e._v(" "),c("h2",{attrs:{id:"_6-3-测试证书申请"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-测试证书申请"}},[e._v("#")]),e._v(" 6.3 测试证书申请")]),e._v(" "),c("p",[e._v("在正式申请证书之前，我们先用测试命令("),c("code",[e._v("--issue --test")]),e._v(")来验证是否可以成功申请，这样可以避免在本地配置有误时，反复申请证书失败，超过 Let's Encrypt 的频率上限（比如，每小时、每个域名、每个用户失败最多5次），导致后面的步骤无法进行。")]),e._v(" "),c("ol",[c("li",[e._v("测试证书申请的命令如下（本文均以 "),c("code",[e._v("ECC")]),e._v(" 证书为例，因为时至今日，实在没什么理由不用它）："),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("$ acme.sh --issue --test -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256\n")])])])])]),e._v(" "),c("div",{staticClass:"custom-block warning"},[c("p",{staticClass:"custom-block-title"},[e._v("说明")]),e._v(" "),c("p",[c("code",[e._v("ECC")]),e._v("证书的主要优势在于它的Keysize更小，意味着同等大小下安全性的提升和加密解密速度的加快。如 ECC-256bit 的强度大约相当于 RSA-3072bit，何乐而不为呢？当然，有人说ECC证书握手会明显更快，这我觉得就有些夸张了，因为RSA握手也没有太慢，就算有差别应该也是毫秒级，很难直接感知。")]),e._v(" "),c("p",[e._v("另外，如果有些网站确实需要兼容某些古老设备的，那也还是请按需选择"),c("code",[e._v("RSA")]),e._v("证书。")])]),e._v(" "),c("ol",{attrs:{start:"2"}},[c("li",[e._v("你最终应该看到类似这样的提示："),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("[Wed 30 Dec 2022 04:25:12 AM EST] Using ACME_DIRECTORY: https://acme-staging-v02.api.letsencrypt.org/directory\n[Wed 30 Dec 2022 04:25:13 AM EST] Using CA: https://acme-staging-v02.api.letsencrypt.org/directory\n[Wed 30 Dec 2022 04:25:13 AM EST] Create account key ok.\n[Wed 30 Dec 2022 04:25:13 AM EST] Registering account: https://acme-staging-v02.api.letsencrypt.org/directory\n[Wed 30 Dec 2022 04:25:13 AM EST] Registered\n[Wed 30 Dec 2022 04:25:13 AM EST] ACCOUNT_THUMBPRINT='CU6qmPKuRqhyTAIrF4swosR375194z_1ddUlWef8xDc'\n[Wed 30 Dec 2022 04:25:13 AM EST] Creating domain key\n[Wed 30 Dec 2022 04:25:13 AM EST] The domain key is here: /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key\n[Wed 30 Dec 2022 04:25:13 AM EST] Single domain='二级域名.你的域名.com'\n[Wed 30 Dec 2022 04:25:13 AM EST] Getting domain auth token for each domain\n[Wed 30 Dec 2022 04:25:14 AM EST] Getting webroot for domain='二级域名.你的域名.com'\n[Wed 30 Dec 2022 04:25:14 AM EST] Verifying: 二级域名.你的域名.com\n[Wed 30 Dec 2022 04:25:23 AM EST] Pending\n[Wed 30 Dec 2022 04:25:25 AM EST] Success\n[Wed 30 Dec 2022 04:25:25 AM EST] Verify finished, start to sign.\n[Wed 30 Dec 2022 04:25:25 AM EST] Lets finalize the order.\n[Wed 30 Dec 2022 04:25:25 AM EST] Le_OrderFinalize='https://acme-staging-v02.api.letsencrypt.org/acme/finalize/490205995/7730242871'\n[Wed 30 Dec 2022 04:25:25 AM EST] Downloading cert.\n[Wed 30 Dec 2022 04:25:25 AM EST] Le_LinkCert='https://acme-staging-v02.api.letsencrypt.org/acme/cert/xujss5xt8i38waubafz2xujss5xt8i38waubz2'\n[Wed 30 Dec 2022 15:21:52 AM EST] Cert success.\n")])])])])]),e._v(" "),c("p",[e._v("--BEGIN CERTIFICAT--\nsxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN\ncTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp\nwAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC\n2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid\nSjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb\nwXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX\ntOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK\n0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA\n1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG\n0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV\n7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY\nIeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX\nTnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0\niMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF\ntYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos\nhaiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg\n0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2\nYO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV\nFmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc\nG6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd\nAm65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6\nNZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0\nx6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp\nyiLKcBFc5H7dgJCImo7us7aJeftC44uWkPIjw9AKH=\n--END CERTIFICAT--\n[Wed 30 Dec 2022 15:21:52 AM EST] Your cert is in  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.cer\n[Wed 30 Dec 2022 15:21:52 AM EST] Your cert key is in  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key\n[Wed 30 Dec 2022 15:21:52 AM EST] The intermediate CA cert is in  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/ca.cer\n[Wed 30 Dec 2022 15:21:52 AM EST] And the full chain certs is there:  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/fullchain.cer\n```")]),e._v(" "),c("ol",{attrs:{start:"3"}},[c("li",[c("p",[e._v("注意：这里申请的是测试证书，没办法直接用的，只是用来证明你的域名、配置全都正确。仔细观察，你会发现给你发证书的域名是 "),c("code",[e._v("https://acme-staging-v02.api.letsencrypt.org")]),e._v("，这个 "),c("code",[e._v("staging")]),e._v(" 你就理解成【测试服】吧！")])]),e._v(" "),c("li",[c("p",[e._v("如果这一步出错的话，你可以运行下面的命令，来查看详细的申请过程和具体的错误。（看不懂就隐藏掉敏感信息后，去Xray群里问吧）")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("$ acme.sh --issue --test -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256 --debug\n")])])]),c("p",[e._v("嗯没错，就是在命令的最后加了一个 "),c("code",[e._v("--debug")]),e._v(" 参数")])]),e._v(" "),c("li",[c("p",[e._v("这一步确定成功之后，就可以申请正式的证书了。（测试证书不需要删除，它会自动被正式证书覆盖）")])])]),e._v(" "),c("h2",{attrs:{id:"_6-4-正式证书申请"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-正式证书申请"}},[e._v("#")]),e._v(" 6.4 正式证书申请")]),e._v(" "),c("ol",[c("li",[e._v("申请正式证书的命令如下（即删掉 "),c("code",[e._v("--test")]),e._v(" 参数，并在最后加入 "),c("code",[e._v("--force")]),e._v("参数）："),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("$ acme.sh --issue -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256 --force\n")])])])])]),e._v(" "),c("div",{staticClass:"custom-block warning"},[c("p",{staticClass:"custom-block-title"},[e._v("说明")]),e._v(" "),c("p",[c("code",[e._v("--force")]),e._v(" 参数的意思就是，在现有证书到期前，手动（强行）更新证书。上一步我们从“测试服”申请的证书虽然不能直接用，但是它本身是尚未过期的，所以需要用到这个参数。")])]),e._v(" "),c("ol",{attrs:{start:"2"}},[c("li",[e._v("你最终应该看到跟上面很像的提示："),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("vpsadmin@vps-server:~$ acme.sh --issue -d 二级域名.你的域名.com -w /home/vpsadmin/www/webpage --keylength ec-256\n[Wed 30 Dec 2022 15:22:51 AM EST] Using CA: https://acme-v02.api.letsencrypt.org/directory\n[Wed 30 Dec 2022 15:22:51 AM EST] Creating domain key\n[Wed 30 Dec 2022 15:22:51 AM EST] The domain key is here: /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key\n[Wed 30 Dec 2022 15:22:51 AM EST] Single domain='二级域名.你的域名.com'\n[Wed 30 Dec 2022 15:22:51 AM EST] Getting domain auth token for each domain\n[Wed 30 Dec 2022 15:22:51 AM EST] Getting webroot for domain='二级域名.你的域名.com'\n[Wed 30 Dec 2022 15:22:51 AM EST] Verifying: 二级域名.你的域名.com\n[Wed 30 Dec 2022 15:22:51 AM EST] Pending\n[Wed 30 Dec 2022 15:22:51 AM EST] Success\n[Wed 30 Dec 2022 15:22:51 AM EST] Verify finished, start to sign.\n[Wed 30 Dec 2022 15:22:51 AM EST] Lets finalize the order.\n[Wed 30 Dec 2022 15:22:51 AM EST] Le_OrderFinalize='https://acme-v02.api.letsencrypt.org/acme/finalize/490205996/7730242872'\n[Wed 30 Dec 2022 15:22:51 AM EST] Downloading cert.\n[Wed 30 Dec 2022 15:22:51 AM EST] Le_LinkCert='https://acme-v02.api.letsencrypt.org/acme/cert/vsxvk0oldnuobe51ayxz4dms62sk2dwmw9zhuw'\n[Wed 30 Dec 2022 15:22:51 AM EST] Cert success.\n")])])])])]),e._v(" "),c("p",[e._v("--BEGIN CERTIFICAT--\nsxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN\ncTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp\nwAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC\n2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid\nSjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb\nwXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX\ntOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK\n0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA\n1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG\n0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV\n7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY\nIeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX\nTnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0\niMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF\ntYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos\nhaiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg\n0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2\nYO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV\nFmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc\nG6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd\nAm65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6\nNZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0\nx6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp\nyiLKcBFc5H7dgJCImo7us7aJeftC44uWkPM=\n--END CERTIFICAT--\n[Wed 30 Dec 2022 15:22:52 AM EST] Your cert is in  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.cer\n[Wed 30 Dec 2022 15:22:52 AM EST] Your cert key is in  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/二级域名.你的域名.com.key\n[Wed 30 Dec 2022 15:22:52 AM EST] The intermediate CA cert is in  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/ca.cer\n[Wed 30 Dec 2022 15:22:52 AM EST] And the full chain certs is there:  /home/vpsadmin/.acme.sh/二级域名.你的域名.com_ecc/fullchain.cer\n```")]),e._v(" "),c("ol",{attrs:{start:"3"}},[c("li",[e._v("仔细观察，你会发现这次给你发证书的域名是 "),c("code",[e._v("https://acme-v02.api.letsencrypt.org")]),e._v("，少了 "),c("code",[e._v("staging")]),e._v("，自然就是【正式服】了！")])]),e._v(" "),c("h2",{attrs:{id:"_6-5-你的进度"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-你的进度"}},[e._v("#")]),e._v(" 6.5 你的进度")]),e._v(" "),c("p",[e._v("至此，Xray所需要的两个基础设施终于全部就位！千呼万唤始出来的Xray马上就要揭开面纱，我们终于要进入最激动人心章节啦！")]),e._v(" "),c("blockquote",[c("p",[c("code",[e._v("⬛⬛⬛⬛⬛⬛⬜⬜ 75%")]),e._v(" :::")])])])}),[],!1,null,null,null);t.default=s.exports}}]);