"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Getting Started","href":"/","docId":"intro"},{"type":"category","label":"Usage","items":[{"type":"link","label":"Basic Walkthrough","href":"/usage/walkthrough","docId":"usage/walkthrough"},{"type":"link","label":"Default Mappings","href":"/usage/mappings","docId":"usage/mappings"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Managing User Configuration","href":"/configuration/manage_user_config","docId":"configuration/manage_user_config"},{"type":"link","label":"Basic Configuration","href":"/configuration/basic_configuration","docId":"configuration/basic_configuration"},{"type":"link","label":"Default Plugin Configurations","href":"/configuration/plugin_defaults","docId":"configuration/plugin_defaults"},{"type":"link","label":"Available User Options","href":"/configuration/config_options","docId":"configuration/config_options"},{"type":"link","label":"Override Formats","href":"/configuration/override_formats","docId":"configuration/override_formats"},{"type":"link","label":"Splitting Up Configuration","href":"/configuration/splitting_up","docId":"configuration/splitting_up"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Recipes","items":[{"type":"link","label":"Black Belt Example User Configs","href":"/recipes/black_belt","docId":"recipes/black_belt"},{"type":"link","label":"Custom Colorscheme","href":"/recipes/colorscheme","docId":"recipes/colorscheme"},{"type":"link","label":"Customize cmp Completion","href":"/recipes/cmp","docId":"recipes/cmp"},{"type":"link","label":"Custom VS Code Style Snippets","href":"/recipes/snippets","docId":"recipes/snippets"},{"type":"link","label":"Disable Global Statusbar","href":"/recipes/globalstatus","docId":"recipes/globalstatus"},{"type":"link","label":"Manually Add LSP","href":"/recipes/manual_lsp","docId":"recipes/manual_lsp"},{"type":"link","label":"NvChad Telescope Theme","href":"/recipes/telescope_theme","docId":"recipes/telescope_theme"},{"type":"link","label":"Unattended Installation","href":"/recipes/unattended_install","docId":"recipes/unattended_install"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Acknowledgements","href":"/acknowledgements","docId":"acknowledgements"}]},"docs":{"acknowledgements":{"id":"acknowledgements","title":"Acknowledgements","description":"\u2b50 Credits","sidebar":"docs"},"configuration/basic_configuration":{"id":"configuration/basic_configuration","title":"Basic Configuration","description":"Set Up User Configuration","sidebar":"docs"},"configuration/config_options":{"id":"configuration/config_options","title":"Available User Options","description":"| init.lua table key              | Expected Format                    | Use Case                                                                            |","sidebar":"docs"},"configuration/manage_user_config":{"id":"configuration/manage_user_config","title":"Managing User Configuration","description":"One of the best parts of separating the user configuration of AstroNvim away from modifying the system files is the ability to manage and track your own user configuration while maintaining the ability to still get AstroNvim updates. The easiest process to do this would be as follows:","sidebar":"docs"},"configuration/override_formats":{"id":"configuration/override_formats","title":"Override Formats","description":"This applies to all init.lua fields except those that expect specific","sidebar":"docs"},"configuration/plugin_defaults":{"id":"configuration/plugin_defaults","title":"Default Plugin Configurations","description":"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options would go in the plugins table in the user/init.lua configuration file.","sidebar":"docs"},"configuration/splitting_up":{"id":"configuration/splitting_up","title":"Splitting Up Configuration","description":"AstroNvim can be fully configured using just the user/init.lua file, but also","sidebar":"docs"},"intro":{"id":"intro","title":"Getting Started","description":"AstroNvim Screenshot","sidebar":"docs"},"recipes/black_belt":{"id":"recipes/black_belt","title":"Black Belt Example User Configs","description":"This is a collection of advanced fully complete AstroNvim user configurations for reference:","sidebar":"docs"},"recipes/cmp":{"id":"recipes/cmp","title":"Customize cmp Completion","description":"Customize Keybindings","sidebar":"docs"},"recipes/colorscheme":{"id":"recipes/colorscheme","title":"Custom Colorscheme","description":"Using a Custom Colorscheme Before Plugin Installed","sidebar":"docs"},"recipes/globalstatus":{"id":"recipes/globalstatus","title":"Disable Global Statusbar","description":"By default AstroNvim enables the new global statusbar that comes with Neovim v0.7+. Some users may not like this behavior and prefer the traditional per-buffer status bar. The following code block is a minimal user/init.lua that will disable the global statusbar with lualine. If you are using Dashboard.nvim as well you will also need to override the autocommands that we include with this plugin as well which are the changes made to the polish() function. If you have disabled or removed the Dashboard.nvim plugin then you can ignore the polish function changes below.","sidebar":"docs"},"recipes/manual_lsp":{"id":"recipes/manual_lsp","title":"Manually Add LSP","description":"AstroNvim comes with nvim-lsp-installer as an easy interface for setting up and installing language servers, but this might not be adequate for all users. The LSP installer doesn\'t support all of the language servers that Neovim\'s LSP config supports and some users may already have the language servers installed on their machine and don\'t want to reinstall it separately. In these cases the user can easily do a more traditional LSP set up workflow in their user/init.lua file in the polish function and utilizing the provided LSP on_attach function and capabilities. The following is a minimal user/init.lua file that simply sets up pyright language server for a user with pyright already available on their system:","sidebar":"docs"},"recipes/snippets":{"id":"recipes/snippets","title":"Custom VS Code Style Snippets","description":"user/init.lua:","sidebar":"docs"},"recipes/telescope_theme":{"id":"recipes/telescope_theme","title":"NvChad Telescope Theme","description":"These code snippets make the telescope look like the default NvChad telescope theme:","sidebar":"docs"},"recipes/unattended_install":{"id":"recipes/unattended_install","title":"Unattended Installation","description":"Instead of running nvim +PackerSync to initialize AstroNvim you can run the","sidebar":"docs"},"usage/mappings":{"id":"usage/mappings","title":"Default Mappings","description":"General Mappings","sidebar":"docs"},"usage/walkthrough":{"id":"usage/walkthrough","title":"Basic Walkthrough","description":"Opening file explorer","sidebar":"docs"}}}')}}]);