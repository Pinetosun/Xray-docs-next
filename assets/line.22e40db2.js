import{a as n}from"./array.999c8e45.js";import{p as t,c as o}from"./constant.4f073c13.js";import{o as r}from"./mermaid.core.fc3e57e5.js";function e(n){return n[0]}function u(n){return n[1]}function f(f,i){var l=o(!0),c=null,a=r,p=null;function s(o){var r,e,u,s=(o=n(o)).length,m=!1;for(null==c&&(p=a(u=t())),r=0;r<=s;++r)!(r<s&&l(e=o[r],r,o))===m&&((m=!m)?p.lineStart():p.lineEnd()),m&&p.point(+f(e,r,o),+i(e,r,o));if(u)return p=null,u+""||null}return f="function"==typeof f?f:void 0===f?e:o(f),i="function"==typeof i?i:void 0===i?u:o(i),s.x=function(n){return arguments.length?(f="function"==typeof n?n:o(+n),s):f},s.y=function(n){return arguments.length?(i="function"==typeof n?n:o(+n),s):i},s.defined=function(n){return arguments.length?(l="function"==typeof n?n:o(!!n),s):l},s.curve=function(n){return arguments.length?(a=n,null!=c&&(p=a(c)),s):a},s.context=function(n){return arguments.length?(null==n?c=p=null:p=a(c=n),s):c},s}export{f as l};
