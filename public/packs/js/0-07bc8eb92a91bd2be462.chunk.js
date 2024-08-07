(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1433:function(t,e,n){"use strict";var o=n(352),r={__name:"BackButton",props:{backUrl:{type:[String,Object],default:""},buttonLabel:{type:String,default:""},compact:{type:Boolean,default:!1}},setup:function(t){var e=t,n=e.compact?"text-sm text-slate-600 dark:text-slate-300":"text-base text-woot-500 dark:text-woot-500";return{__sfc:!0,props:e,goBack:function(){""!==e.backUrl?o.a.push(e.backUrl):o.a.go(-1)},buttonStyleClass:n}}},a=n(8),s=Object(a.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("button",{staticClass:"flex items-center font-normal p-0 cursor-pointer",class:n.buttonStyleClass,on:{"!click":function(t){return n.goBack.apply(null,arguments)}}},[e("fluent-icon",{staticClass:"-ml-1",attrs:{icon:"chevron-left"}}),t._v("\n  "+t._s(t.buttonLabel||t.$t("GENERAL_SETTINGS.BACK"))+"\n")],1)}),[],!1,null,null,null);e.a=s.exports},1498:function(t,e,n){"use strict";n(26),n(11),n(23),n(30),n(25),n(31);var o=n(34),r=n(351);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={components:{BackButton:n(1433).a},props:{headerTitle:{default:"",type:String},buttonRoute:{default:"",type:String},buttonText:{default:"",type:String},icon:{default:"",type:String},showBackButton:{type:Boolean,default:!1},showNewButton:{type:Boolean,default:!1},backUrl:{type:[String,Object],default:""},backButtonLabel:{type:String,default:""},showSidemenuIcon:{type:Boolean,default:!0}},setup:function(){return{isAdmin:Object(r.a)().isAdmin}},computed:s(s({},Object(o.mapGetters)({currentUser:"getCurrentUser"})),{},{iconClass:function(){return"icon ".concat(this.icon," header--icon")}})},c=n(8),i=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center h-14 min-h-[3.5rem] px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-50 dark:border-slate-800/50"},[e("h1",{staticClass:"flex items-center mb-0 text-2xl text-slate-900 dark:text-slate-100"},[t.showSidemenuIcon?e("woot-sidemenu-icon"):t._e(),t._v(" "),t.showBackButton?e("back-button",{staticClass:"ml-2 mr-4",attrs:{"button-label":t.backButtonLabel,"back-url":t.backUrl}}):t._e(),t._v(" "),t.icon?e("fluent-icon",{staticClass:"hidden ml-1 mr-2 rtl:ml-2 rtl:mr-1 md:block",class:t.iconClass,attrs:{icon:t.icon}}):t._e(),t._v(" "),t._t("default"),t._v(" "),e("span",{staticClass:"text-2xl font-medium text-slate-900 dark:text-slate-100"},[t._v("\n      "+t._s(t.headerTitle)+"\n    ")])],2),t._v(" "),t.showNewButton&&t.isAdmin?e("router-link",{staticClass:"button success button--fixed-top px-3.5 py-1 rounded-[5px] flex gap-2",attrs:{to:t.buttonRoute}},[e("fluent-icon",{attrs:{icon:"add-circle"}}),t._v(" "),e("span",{staticClass:"button__content"},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},2175:function(t,e,n){"use strict";n.r(e);n(44);var o={components:{SettingsHeader:n(1498).a},props:{headerTitle:{type:String,default:""},headerButtonText:{type:String,default:""},icon:{type:String,default:""},keepAlive:{type:Boolean,default:!0},newButtonRoutes:{type:Array,default:function(){return[]}},showBackButton:{type:Boolean,default:!1},backUrl:{type:[String,Object],default:""},showSidemenuIcon:{type:Boolean,default:!0}},data:function(){return{}},computed:{currentPage:function(){return this.$store.state.route.name},showNewButton:function(){return 0!==this.newButtonRoutes.length&&!this.showBackButton}}},r=n(8),a=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-1 h-full justify-between flex-col m-0 bg-slate-25 dark:bg-slate-900 overflow-auto"},[e("settings-header",{attrs:{"button-route":"new",icon:t.icon,"header-title":t.$t(t.headerTitle),"button-text":t.$t(t.headerButtonText),"show-back-button":t.showBackButton,"back-url":t.backUrl,"show-new-button":t.showNewButton,"show-sidemenu-icon":t.showSidemenuIcon}}),t._v(" "),t.keepAlive?e("keep-alive",[e("router-view")],1):e("router-view")],1)}),[],!1,null,null,null);e.default=a.exports}}]);
//# sourceMappingURL=0-07bc8eb92a91bd2be462.chunk.js.map