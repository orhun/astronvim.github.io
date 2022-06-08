"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[664],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=i.createContext({}),u=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=u(n.components);return i.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),f=u(t),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?i.createElement(d,a(a({ref:e},c),{},{components:t})):i.createElement(d,a({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4985:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],s={id:"basic_configuration",title:"Basic Configuration"},l=void 0,u={unversionedId:"configuration/basic_configuration",id:"configuration/basic_configuration",title:"Basic Configuration",description:"Set Up User Configuration",source:"@site/docs/configuration/basic_configuration.md",sourceDirName:"configuration",slug:"/configuration/basic_configuration",permalink:"/configuration/basic_configuration",tags:[],version:"current",frontMatter:{id:"basic_configuration",title:"Basic Configuration"},sidebar:"docs",previous:{title:"Managing AstroNvim Updates",permalink:"/configuration/updater"},next:{title:"Default Plugin Configurations",permalink:"/configuration/plugin_defaults"}},c={},p=[{value:"Set Up User Configuration",id:"set-up-user-configuration",level:2},{value:"Example User Configuration",id:"example-user-configuration",level:3}],f={toc:p};function m(n){var e=n.components,t=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"set-up-user-configuration"},"Set Up User Configuration"),(0,o.kt)("p",null,"To begin making custom user configurations you must create a ",(0,o.kt)("inlineCode",{parentName:"p"},"user/")," folder. The provided example can be created with (please note the trailing slashes after the directory names)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to keep your user configuration completely separate from the cloned repository, you can also put this folder in ",(0,o.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim/lua/user"),". AstroNvim adds the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtimepath")," so any ",(0,o.kt)("inlineCode",{parentName:"p"},"vimscript")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"lua")," files in there can be sourced."))),(0,o.kt)("h3",{id:"example-user-configuration"},"Example User Configuration"),(0,o.kt)("p",null,"Below is the provided user configuration template found at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user/init.lua")," after the ",(0,o.kt)("inlineCode",{parentName:"p"},"cp")," command above."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more details of the provided defaults for each plugin please refer to ",(0,o.kt)("a",{parentName:"p",href:"/configuration/plugin_defaults"},"Default Plugin Configurations")),(0,o.kt)("p",{parentName:"div"},"For an exhaustive list of all available options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file please refer to ",(0,o.kt)("a",{parentName:"p",href:"/configuration/config_options"},"Available User Options")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = {\n\n  -- Configure AstroNvim updates\n  updater = {\n    remote = "origin", -- remote to use\n    channel = "nightly", -- "stable" or "nightly"\n    version = "latest", -- "latest", tag name, or regex search like "v1.*" to only do updates before v2 (STABLE ONLY)\n    branch = "main", -- branch name (NIGHTLY ONLY)\n    commit = nil, -- commit hash (NIGHTLY ONLY)\n    pin_plugins = true, -- true, false, or a string for a specific AstroNvim snapshot to use (true will only track the current version if channel is "stable")\n    skip_prompts = false, -- skip prompts about breaking changes\n    show_changelog = true, -- show the changelog after performing an update\n    -- remotes = { -- easily add new remotes to track\n    --   ["remote_name"] = "https://remote_url.come/repo.git", -- full remote url\n    --   ["remote2"] = "github_user/repo", -- GitHub user/repo shortcut,\n    --   ["remote3"] = "github_user", -- GitHub user assume AstroNvim fork\n    -- },\n  },\n\n  -- Set colorscheme\n  colorscheme = "default_theme",\n\n  -- set vim options here (vim.<first_key>.<second_key> =  value)\n  options = {\n    opt = {\n      relativenumber = true, -- sets vim.opt.relativenumber\n    },\n    g = {\n      mapleader = " ", -- sets vim.g.mapleader\n    },\n  },\n\n  -- Set dashboard header\n  header = {\n    " ",\n    " ",\n    " ",\n    " ",\n    " ",\n    " \u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588         \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588      \u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588 \u2588\u2588    \u2588\u2588",\n    "\u2588\u2588   \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588",\n    " ",\n    "    \u2588\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2001   \u2588\u2588\u2588",\n    "    \u2588\u2588\u2588\u2588\u2001  \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2001 \u2588\u2588\u2588\u2588",\n    "    \u2588\u2588\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2588\u2588\u2001   \u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2588\u2588\u2588\u2588\u2001\u2588\u2588",\n    "    \u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001 \u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2588\u2588\u2001\u2001\u2588\u2588\u2001\u2001\u2588\u2588",\n    "    \u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001 \u2001\u2588\u2588\u2588\u2588\u2001\u2001 \u2588\u2588\u2001\u2588\u2588\u2001 \u2001\u2001\u2001 \u2588\u2588",\n    " ",\n    " ",\n    " ",\n  },\n\n  -- Default theme configuration\n  default_theme = {\n    diagnostics_style = "none",\n    -- Modify the color table\n    colors = {\n      fg = "#abb2bf",\n    },\n    -- Modify the highlight groups\n    highlights = function(highlights)\n      local C = require "default_theme.colors"\n\n      highlights.Normal = { fg = C.fg, bg = C.bg }\n      return highlights\n    end,\n    -- enable or disable highlighting for supported plugins\n    plugins = {\n      aerial = true,\n      beacon = false,\n      bufferline = true,\n      dashboard = true,\n      highlighturl = true,\n      hop = false,\n      indent_blankline = true,\n      lightspeed = false,\n      ["neo-tree"] = true,\n      notify = true,\n      ["nvim-tree"] = false,\n      ["nvim-web-devicons"] = true,\n      rainbow = true,\n      symbols_outline = false,\n      telescope = true,\n      vimwiki = false,\n      ["which-key"] = true,\n    },\n  },\n\n  -- Disable AstroNvim ui features\n  ui = {\n    nui_input = true,\n    telescope_select = true,\n  },\n\n  -- Configure plugins\n  plugins = {\n    -- Add plugins, the packer syntax without the "use"\n    init = {\n      -- ["goolord/alpha-nvim"] = { disable = true }, -- New method for disbaling a default plugin\n      -- { "andweeb/presence.nvim" },\n      -- {\n      --   "ray-x/lsp_signature.nvim",\n      --   event = "BufRead",\n      --   config = function()\n      --     require("lsp_signature").setup()\n      --   end,\n      -- },\n    },\n    -- All other entries override the setup() call for default plugins\n    -- override require("null-ls").setup() options\n    ["null-ls"] = function(config)\n      local null_ls = require "null-ls"\n      -- Check supported formatters and linters\n      -- https://github.com/jose-elias-alvarez/null-ls.nvim/tree/main/lua/null-ls/builtins/formatting\n      -- https://github.com/jose-elias-alvarez/null-ls.nvim/tree/main/lua/null-ls/builtins/diagnostics\n      config.sources = {\n        -- Set a formatter\n        null_ls.builtins.formatting.rufo,\n        -- Set a linter\n        null_ls.builtins.diagnostics.rubocop,\n      }\n      -- set up null-ls\'s on_attach function\n      config.on_attach = function(client)\n        -- NOTE: You can remove this on attach function to disable format on save\n        if client.resolved_capabilities.document_formatting then\n          vim.api.nvim_create_autocmd("BufWritePre", {\n            desc = "Auto format before save",\n            pattern = "<buffer>",\n            callback = vim.lsp.buf.formatting_sync,\n          })\n        end\n      end\n      return config -- return final config table\n    end,\n    -- override require("nvim-treesitter.configs").setup() options\n    treesitter = {\n    --   ensure_installed = { "lua" },\n    },\n    -- override require("packer").setup() configuration options\n    packer = {\n      compile_path = vim.fn.stdpath "config" .. "/lua/packer_compiled.lua",\n    },\n  },\n\n  -- Add paths for including more VS Code style snippets in luasnip\n  luasnip = {\n    vscode_snippet_paths = {},\n  },\n\n  -- Modify which-key registration\n  ["which-key"] = {\n    -- Add bindings\n    register_mappings = {\n      -- first key is the mode, n == normal mode\n      n = {\n        -- second key is the prefix, <leader> prefixes\n        ["<leader>"] = {\n          -- which-key registration table for normal mode, leader prefix\n          -- ["N"] = { "<cmd>tabnew<cr>", "New Buffer" },\n        },\n      },\n    },\n  },\n\n  -- CMP Source Priorities\n  -- modify here the priorities of default cmp sources\n  -- higher value == higher priority\n  -- The value can also be set to a boolean for disabling default sources:\n  -- false == disabled\n  -- true == 1000\n  cmp = {\n    source_priority = {\n      nvim_lsp = 1000,\n      luasnip = 750,\n      buffer = 500,\n      path = 250,\n    },\n  },\n\n  -- Extend LSP configuration\n  lsp = {\n    -- add to the server on_attach function\n    -- on_attach = function(client, bufnr)\n    -- if client.name == "sqls" then\n    --   require("sqls").on_attach(client, bufnr)\n    -- end\n    -- end,\n\n    -- override the lsp installer server-registration function\n    -- server_registration = function(server, opts)\n    --   require("lspconfig")[server].setup(opts)\n    -- end,\n\n    -- Add overrides for LSP server settings, the keys are the name of the server\n    -- ["server-settings"] = {\n      -- example for addings schemas to yamlls\n      -- yamlls = {\n      --   settings = {\n      --     yaml = {\n      --       schemas = {\n      --         ["http://json.schemastore.org/github-workflow"] = ".github/workflows/*.{yml,yaml}",\n      --         ["http://json.schemastore.org/github-action"] = ".github/action.{yml,yaml}",\n      --         ["http://json.schemastore.org/ansible-stable-2.9"] = "roles/tasks/*.{yml,yaml}",\n      --       },\n      --     },\n      --   },\n      -- },\n    -- },\n  },\n\n  -- Diagnostics configuration (for vim.diagnostics.config())\n  diagnostics = {\n    virtual_text = true,\n    underline = true,\n  },\n\n  -- This function is run last\n  -- good place to configure mappings and vim options\n  polish = function()\n    -- Set key bindings\n    vim.keymap.set("n", "<C-s>", ":w!<CR>")\n\n    -- Set autocommands\n    vim.api.nvim_create_augroup("packer_conf", {})\n    vim.api.nvim_create_autocmd("BufWritePost", {\n      desc = "Sync packer after modifying plugins.lua",\n      group = "packer_conf",\n      pattern = "plugins.lua",\n      command = "source <afile> | PackerSync",\n    })\n\n    -- Set up custom filetypes\n    -- vim.filetype.add {\n    --   extension = {\n    --     foo = "fooscript",\n    --   },\n    --   filename = {\n    --     ["Foofile"] = "fooscript",\n    --   },\n    --   pattern = {\n    --     ["~/%.config/foo/.*"] = "fooscript",\n    --   },\n    -- }\n  end,\n}\n\nreturn config\n')))}m.isMDXComponent=!0}}]);