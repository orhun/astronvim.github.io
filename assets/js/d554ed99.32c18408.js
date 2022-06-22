"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[417],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"override_formats",title:"Override Formats"},o=void 0,l={unversionedId:"configuration/override_formats",id:"configuration/override_formats",title:"Override Formats",description:"This applies to all init.lua fields except those that expect specific",source:"@site/docs/configuration/override_formats.md",sourceDirName:"configuration",slug:"/configuration/override_formats",permalink:"/configuration/override_formats",tags:[],version:"current",frontMatter:{id:"override_formats",title:"Override Formats"},sidebar:"docs",previous:{title:"Available User Options",permalink:"/configuration/config_options"},next:{title:"Splitting Up Configuration",permalink:"/configuration/splitting_up"}},p={},u=[{value:"Override Table",id:"override-table",level:3},{value:"Override Function",id:"override-function",level:3}],s={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This applies to all ",(0,a.kt)("inlineCode",{parentName:"p"},"init.lua")," fields except those that expect specific\nfunction definitions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.on_attach"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lsp.server_registration"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"polish"),"."),(0,a.kt)("p",null,"Anywhere where you want to override a default provided lua table such as\n",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," (specifying user plugins) or ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.X")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," is a default\nplugin where you want to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup()")," call."),(0,a.kt)("h3",{id:"override-table"},"Override Table"),(0,a.kt)("p",null,"For most use cases, supplying a table is more than enough for supplying your\nown configuration changes to a default table. This is done by simply providing\na new table and we merge the table with the default table where the user table\ntakes precedence."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init")," table can be used to add new plugins to be\ninstalled along side the default plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'plugins = {\n  init = {\n    { "andweeb/presence.nvim" }, -- each table entry is a plugin using the Packer syntax without the "use"\n    {\n      "ray-x/lsp_signature.nvim",\n      event = "BufRead",\n      config = function()\n        require("lsp_signature").setup()\n      end,\n    },\n  },\n},\n')),(0,a.kt)("p",null,"Or adding new bindings to ",(0,a.kt)("inlineCode",{parentName:"p"},"which-key"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'["which-key"] = {\n  register_mappings = {\n    n = { -- normal mode\n      ["<leader>"] = { -- leader prefix\n        ["N"] = { "<cmd>tabnew<cr>", "New Buffer" }, -- normal mode, <leader>N\n      },\n    }\n  },\n},\n')),(0,a.kt)("h3",{id:"override-function"},"Override Function"),(0,a.kt)("p",null,"There may be cases where you want to have more control over the default tables\nwhen overriding them. For these situations we also provide the ability to use a\n",(0,a.kt)("inlineCode",{parentName:"p"},"function")," that takes one parameter (the default table) and returns a new table\nto be used in it's place. This method is a lot more advanced and requires\nknowledge of the Lua programming language."),(0,a.kt)("p",null,"For example with ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.init"),", you may want to disable lazy-loading for a default plugin while also providing your own plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'plugins = {\n  init = function(default_plugins)\n    -- A table for your own plugins to load\n    local my_plugins = {\n      { "andweeb/presence.nvim" },\n      {\n        "ray-x/lsp_signature.nvim",\n        event = "BufRead",\n        config = function()\n          require("lsp_signature").setup()\n        end,\n      },\n    }\n\n    -- The default plugin table is indexable by the package github username/repository\n    -- You can directly modify the default table and remove the Packer "cmd" configuration\n    default_plugins["akinsho/nvim-toggleterm.lua"]["cmd"] = nil\n\n    -- Finally  you will want to add the my_plugins table to the default table and return it\n    return vim.tbl_deep_extend("force", plugins, my_plugins)\n  end,\n},\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": These functions are called when they are needed are are lazy-loaded, so\nfor example if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins.cmp")," with a function\n(",(0,a.kt)("inlineCode",{parentName:"p"},"function(table)...end"),"), this will be run after ",(0,a.kt)("inlineCode",{parentName:"p"},"cmp")," is loaded and you will\nbe able to do ",(0,a.kt)("inlineCode",{parentName:"p"},'cmp = require("cmp")')," within the function."))}d.isMDXComponent=!0}}]);