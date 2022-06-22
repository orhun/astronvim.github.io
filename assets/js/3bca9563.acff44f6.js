"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),b=n,m=h["".concat(s,".").concat(b)]||h[b]||p[b]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={id:"globalstatus",title:"Disable Global Statusbar"},i=void 0,l={unversionedId:"recipes/globalstatus",id:"recipes/globalstatus",title:"Disable Global Statusbar",description:"By default AstroNvim enables the new global statusbar that comes with Neovim v0.7+. Some users may not like this behavior and prefer the traditional per-buffer status bar. The following code block is a minimal user/init.lua that will disable the global statusbar with lualine. If you are using Dashboard.nvim as well you will also need to override the autocommands that we include with this plugin as well which are the changes made to the polish() function. If you have disabled or removed the Dashboard.nvim plugin then you can ignore the polish function changes below.",source:"@site/docs/recipes/globalstatus.md",sourceDirName:"recipes",slug:"/recipes/globalstatus",permalink:"/recipes/globalstatus",tags:[],version:"current",frontMatter:{id:"globalstatus",title:"Disable Global Statusbar"},sidebar:"docs",previous:{title:"Dashboard Customizations",permalink:"/recipes/alpha"},next:{title:"NvChad Telescope Theme",permalink:"/recipes/telescope_theme"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"By default AstroNvim enables the new global statusbar that comes with Neovim v0.7+. Some users may not like this behavior and prefer the traditional per-buffer status bar. The following code block is a minimal ",(0,n.kt)("inlineCode",{parentName:"p"},"user/init.lua")," that will disable the global statusbar with lualine. If you are using Dashboard.nvim as well you will also need to override the autocommands that we include with this plugin as well which are the changes made to the ",(0,n.kt)("inlineCode",{parentName:"p"},"polish()")," function. If you have disabled or removed the Dashboard.nvim plugin then you can ignore the ",(0,n.kt)("inlineCode",{parentName:"p"},"polish")," function changes below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  options = { opt = { laststatus = 2 } }\n}\n")))}p.isMDXComponent=!0}}]);