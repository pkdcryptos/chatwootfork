(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{2168:function(t,o,e){"use strict";e.r(o);var i={components:{Sidebar:Sidebar,CommandBar:CommandBar,WootKeyShortcutModal:WootKeyShortcutModal,AddAccountModal:AddAccountModal,AccountSelector:AccountSelector,AddLabelModal:AddLabelModal,NotificationPanel:NotificationPanel},setup:function(){var t=useUISettings();return{uiSettings:t.uiSettings,updateUISettings:t.updateUISettings}},data:function(){return{showAccountModal:!1,showCreateAccountModal:!1,showAddLabelModal:!1,showShortcutModal:!1,isNotificationPanel:!1,displayLayoutType:""}},computed:{currentRoute:function(){return" "},isSidebarOpen:function(){return this.uiSettings.show_secondary_sidebar},previouslyUsedDisplayType:function(){return this.uiSettings.previously_used_conversation_display_type},previouslyUsedSidebarView:function(){return this.uiSettings.previously_used_sidebar_view}},watch:{displayLayoutType:function(){var t=wootConstants.LAYOUT_TYPES;this.updateUISettings({conversation_display_type:this.displayLayoutType===t.EXPANDED?t.EXPANDED:this.previouslyUsedDisplayType,show_secondary_sidebar:this.displayLayoutType!==t.EXPANDED&&this.previouslyUsedSidebarView})}},mounted:function(){this.handleResize(),window.addEventListener("resize",this.handleResize),this.$emitter.on(BUS_EVENTS.TOGGLE_SIDEMENU,this.toggleSidebar)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),this.$emitter.off(BUS_EVENTS.TOGGLE_SIDEMENU,this.toggleSidebar)},methods:{handleResize:function(){var t=this,o=wootConstants,e=o.SMALL_SCREEN_BREAKPOINT,i=o.LAYOUT_TYPES,n=!1;n||(n=!0,setTimeout((function(){n=!1,window.innerWidth<=e?t.displayLayoutType=i.EXPANDED:t.displayLayoutType=i.CONDENSED}),150))},toggleSidebar:function(){this.updateUISettings({show_secondary_sidebar:!this.isSidebarOpen,previously_used_sidebar_view:!this.isSidebarOpen})},openCreateAccountModal:function(){this.showAccountModal=!1,this.showCreateAccountModal=!0},closeCreateAccountModal:function(){this.showCreateAccountModal=!1},toggleAccountModal:function(){this.showAccountModal=!this.showAccountModal},toggleKeyShortcutModal:function(){this.showShortcutModal=!0},closeKeyShortcutModal:function(){this.showShortcutModal=!1},showAddLabelPopup:function(){this.showAddLabelModal=!0},hideAddLabelPopup:function(){this.showAddLabelModal=!1},openNotificationPanel:function(){this.isNotificationPanel=!0},closeNotificationPanel:function(){this.isNotificationPanel=!1}}},n=e(8),s=Object(n.a)(i,(function(){return(0,this._self._c)("div",[this._v("\n  App/javascript..haha\n")])}),[],!1,null,null,null);o.default=s.exports}}]);
//# sourceMappingURL=107-638adc8527ce4231276d.chunk.js.map