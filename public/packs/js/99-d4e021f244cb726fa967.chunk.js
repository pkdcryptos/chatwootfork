(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{2617:function(t,e,n){"use strict";var a=n(250),o={__name:"BackButton",props:{backUrl:{type:[String,Object],default:""},buttonLabel:{type:String,default:""},compact:{type:Boolean,default:!1}},setup:function(t){var e=t,n=e.compact?"text-sm text-slate-600 dark:text-slate-300":"text-base text-woot-500 dark:text-woot-500";return{__sfc:!0,props:e,goBack:function(){""!==e.backUrl?a.a.push(e.backUrl):a.a.go(-1)},buttonStyleClass:n}}},s=n(8),r=Object(s.a)(o,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("button",{staticClass:"flex items-center font-normal p-0 cursor-pointer",class:n.buttonStyleClass,on:{"!click":function(t){return n.goBack.apply(null,arguments)}}},[e("fluent-icon",{staticClass:"-ml-1",attrs:{icon:"chevron-left"}}),t._v("\n  "+t._s(t.buttonLabel||t.$t("GENERAL_SETTINGS.BACK"))+"\n")],1)}),[],!1,null,null,null);e.a=r.exports},2775:function(t,e,n){"use strict";var a=n(284),o=n(6),s={__name:"CustomBrandPolicyWrapper",props:{showOnCustomBrandedInstance:{type:Boolean,default:!0}},setup:function(t){var e=t,n=Object(a.b)(),s=n["globalConfig/isACustomBrandedInstance"],r=Object(o.computed)((function(){return e.showOnCustomBrandedInstance||!s.value}));return{__sfc:!0,props:e,getters:n,isACustomBrandedInstance:s,shouldShowContent:r}}},r=n(8),i=Object(r.a)(s,(function(){var t=this,e=t._self._c;return t._self._setupProxy.shouldShowContent?e("div",[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,l={channel_email:"https://chwt.app/hc/email",channel_facebook:"https://chwt.app/hc/fb",help_center:"https://chwt.app/hc/help-center",agent_bots:"https://chwt.app/hc/agent-bots",team_management:"https://chwt.app/hc/teams",labels:"https://chwt.app/hc/labels",custom_attributes:"https://chwt.app/hc/custom-attributes",canned_responses:"https://chwt.app/hc/canned",integrations:"https://chwt.app/hc/integrations",campaigns:"https://chwt.app/hc/campaigns",reports:"https://chwt.app/hc/reports",message_reply_to:"https://chwt.app/hc/reply-to",sla:"https://chwt.app/hc/sla",dashboard_apps:"https://chwt.app/hc/dashboard-apps"};var p=n(2617),c={__name:"BaseSettingsHeader",props:{title:{type:String,required:!0},description:{type:String,required:!0},iconName:{type:String,default:""},linkText:{type:String,default:""},featureName:{type:String,default:""},backButtonLabel:{type:String,default:""}},setup:function(t){var e;return{__sfc:!0,props:t,helpURL:(e=t.featureName,l[e]),openInNewTab:function(t){t&&window.open(t,"_blank","noopener noreferrer")},CustomBrandPolicyWrapper:i,BackButton:p.a}}},u=Object(r.a)(c,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"flex flex-col items-start w-full gap-2 pt-4"},[t.backButtonLabel?e(n.BackButton,{attrs:{compact:"","button-label":t.backButtonLabel}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-between w-full gap-4"},[e("div",{staticClass:"flex items-center gap-3"},[t.iconName?e("div",{staticClass:"flex items-center w-10 h-10 p-1 rounded-full bg-woot-25/60 dark:bg-woot-900/60"},[e("div",{staticClass:"flex items-center justify-center w-full h-full rounded-full bg-woot-75/70 dark:bg-woot-800/40"},[e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"14",icon:t.iconName,type:"outline"}})],1)]):t._e(),t._v(" "),e("h1",{staticClass:"text-2xl font-semibold font-interDisplay tracking-[0.3px] text-slate-900 dark:text-slate-25"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"hidden gap-2 sm:flex"},[t._t("actions")],2)]),t._v(" "),e("div",{staticClass:"flex flex-col gap-3 text-slate-600 dark:text-slate-300 w-full"},[e("p",{staticClass:"mb-0 text-base font-normal line-clamp-5 sm:line-clamp-none max-w-3xl tracking-[-0.1px]"},[t._t("description",(function(){return[t._v(t._s(t.description))]}))],2),t._v(" "),e(n.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[n.helpURL&&t.linkText?e("a",{staticClass:"sm:inline-flex hidden gap-1 w-fit items-center text-woot-500 dark:text-woot-500 text-sm font-medium hover:underline",attrs:{href:n.helpURL,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.linkText)+"\n        "),e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"16",icon:"chevron-right",type:"outline"}})],1):t._e()])],1),t._v(" "),e("div",{staticClass:"flex items-start justify-start w-full gap-3 sm:hidden flex-wrap"},[t._t("actions"),t._v(" "),e(n.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[n.helpURL&&t.linkText?e("woot-button",{staticClass:"flex-row-reverse rounded-md min-w-0 !bg-slate-50 !text-slate-900 dark:!text-white dark:!bg-slate-800",attrs:{"color-scheme":"secondary",icon:"arrow-outwards"},on:{click:function(t){return n.openInNewTab(n.helpURL)}}},[t._v("\n        "+t._s(t.linkText)+"\n      ")]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.a=u.exports},3333:function(t,e,n){"use strict";n.r(e);n(13),n(9),n(11),n(15),n(12),n(16),n(10),n(28),n(37);var a=n(34),o=n(67),s=n(129),r=n(69);function i(t,e,n,a,o,s,r){try{var i=t[s](r),l=i.value}catch(p){return void n(p)}i.done?e(l):Promise.resolve(l).then(a,o)}var l={props:{show:{type:Boolean,default:!1},mode:{type:String,default:"create"},selectedAppData:{type:Object,default:function(){return{}}}},setup:function(){return{v$:Object(s.a)()}},validations:{app:{title:{required:r.f},content:{type:{required:r.f},url:{required:r.f,url:r.h}}}},data:function(){return{isLoading:!1,app:{title:"",content:{type:"frame",url:""}}}},computed:{header:function(){return this.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(this.mode,".HEADER"))},submitButtonLabel:function(){return this.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(this.mode,".FORM_SUBMIT"))}},mounted:function(){"UPDATE"===this.mode&&this.selectedAppData&&(this.app.title=this.selectedAppData.title,this.app.content=this.selectedAppData.content[0])},methods:{closeModal:function(){this.app={title:"",content:{type:"frame",url:""}},this.$emit("close")},submit:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.v$.$touch(),!e.v$.$invalid){t.next=4;break}return t.abrupt("return");case 4:return n=e.mode.toLowerCase(),a={title:e.app.title,content:[e.app.content]},"update"===n&&(a.id=e.selectedAppData.id),e.isLoading=!0,t.next=10,e.$store.dispatch("dashboardApps/".concat(n),a);case 10:Object(o.a)(e.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(e.mode,".API_SUCCESS"))),e.closeModal(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),Object(o.a)(e.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.".concat(e.mode,".API_ERROR")));case 17:return t.prev=17,e.isLoading=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})),function(){var e=this,n=arguments;return new Promise((function(a,o){var s=t.apply(e,n);function r(t){i(s,a,o,r,l,"next",t)}function l(t){i(s,a,o,r,l,"throw",t)}r(void 0)}))})()}}},p=l,c=n(8),u=Object(c.a)(p,(function(){var t=this,e=t._self._c;return e("woot-modal",{attrs:{show:t.show,"on-close":t.closeModal}},[e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.header}}),t._v(" "),e("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("woot-input",{staticClass:"w-full",class:{error:t.v$.app.title.$error},attrs:{label:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.TITLE_LABEL"),placeholder:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.TITLE_PLACEHOLDER"),error:t.v$.app.title.$error?t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.TITLE_ERROR"):null,"data-testid":"app-title"},on:{input:t.v$.app.title.$touch},model:{value:t.app.title,callback:function(e){t.$set(t.app,"title","string"===typeof e?e.trim():e)},expression:"app.title"}}),t._v(" "),e("woot-input",{staticClass:"w-full",class:{error:t.v$.app.content.url.$error},attrs:{label:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.URL_LABEL"),placeholder:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.URL_PLACEHOLDER"),error:t.v$.app.content.url.$error?t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.FORM.URL_ERROR"):null,"data-testid":"app-url"},on:{input:t.v$.app.content.url.$touch},model:{value:t.app.content.url,callback:function(e){t.$set(t.app.content,"url","string"===typeof e?e.trim():e)},expression:"app.content.url"}}),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-button",{attrs:{"is-loading":t.isLoading,"is-disabled":t.v$.$invalid,"data-testid":"label-submit"}},[t._v("\n          "+t._s(t.submitButtonLabel)+"\n        ")]),t._v(" "),e("woot-button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.closeModal.apply(null,arguments)}}},[t._v("\n          "+t._s(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.CREATE.FORM_CANCEL"))+"\n        ")])],1)],1)],1)])}),[],!1,null,null,null),d=u.exports,f={__name:"DashboardAppsRow",props:{app:{type:Object,default:function(){return{}}}},emits:["edit","delete"],setup:function(t){return{__sfc:!0}}},h=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("tr",{staticClass:"py-1 max-w-full"},[e("td",{staticClass:"py-4 pr-4 text-sm w-40 max-w-[10rem] truncate",attrs:{title:t.app.title}},[t._v("\n    "+t._s(t.app.title)+"\n  ")]),t._v(" "),e("td",{staticClass:"py-4 pr-4 text-sm max-w-lg truncate",attrs:{title:t.app.content[0].url}},[t._v("\n    "+t._s(t.app.content[0].url)+"\n  ")]),t._v(" "),e("td",{staticClass:"py-4 pr-4 text-sm flex gap-2 sm:pr-0"},[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.EDIT_TOOLTIP"),expression:"\n        $t('INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.EDIT_TOOLTIP')\n      ",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny","color-scheme":"secondary","class-names":"grey-btn",icon:"edit"},on:{click:function(e){return t.$emit("edit",t.app)}}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.DELETE_TOOLTIP"),expression:"\n        $t('INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.DELETE_TOOLTIP')\n      ",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn"},on:{click:function(e){return t.$emit("delete",t.app)}}})],1)])}),[],!1,null,null,null).exports,_=n(272);function A(t,e,n,a,o,s,r){try{var i=t[s](r),l=i.value}catch(p){return void n(p)}i.done?e(l):Promise.resolve(l).then(a,o)}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S={components:{BaseSettingsHeader:n(2775).a,DashboardAppModal:d,DashboardAppsRow:h},mixins:[_.a],data:function(){return{loading:{},showDashboardAppPopup:!1,showDeleteConfirmationPopup:!1,selectedApp:{},mode:"CREATE"}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.mapGetters)({globalConfig:"globalConfig/get",records:"dashboardApps/getRecords",uiFlags:"dashboardApps/getUIFlags"})),mounted:function(){this.$store.dispatch("dashboardApps/get")},methods:{toggleDashboardAppPopup:function(){this.showDashboardAppPopup=!this.showDashboardAppPopup,this.selectedApp={}},openDeletePopup:function(t){this.showDeleteConfirmationPopup=!0,this.selectedApp=t},openCreatePopup:function(){this.mode="CREATE",this.selectedApp={},this.showDashboardAppPopup=!0},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},editApp:function(t){this.loading[t.id]=!0,this.mode="UPDATE",this.selectedApp=t,this.showDashboardAppPopup=!0},confirmDeletion:function(){this.loading[this.selectedApp.id]=!0,this.closeDeletePopup(),this.deleteApp(this.selectedApp.id)},deleteApp:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$store.dispatch("dashboardApps/delete",t);case 3:Object(o.a)(n.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.API_SUCCESS")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(o.a)(n.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.API_ERROR"));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function r(t){A(s,a,o,r,i,"next",t)}function i(t){A(s,a,o,r,i,"throw",t)}r(void 0)}))})()}}},b=S,E=Object(c.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 overflow-auto flex gap-8 flex-col"},[e("BaseSettingsHeader",{attrs:{title:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.TITLE"),description:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DESCRIPTION"),"link-text":t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LEARN_MORE"),"feature-name":"dashboard_apps","back-button-label":t.$t("INTEGRATION_SETTINGS.HEADER")},scopedSlots:t._u([{key:"actions",fn:function(){return[e("woot-button",{staticClass:"button nice rounded-md",attrs:{icon:"add-circle"},on:{click:t.openCreatePopup}},[t._v("\n        "+t._s(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.HEADER_BTN_TXT"))+"\n      ")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"w-full text-slate-700 dark:text-slate-200 overflow-x-auto"},[t.uiFlags.isFetching||t.records.length?t._e():e("p",{staticClass:"flex flex-col items-center justify-center h-full"},[t._v("\n      "+t._s(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.404"))+"\n    ")]),t._v(" "),t.uiFlags.isFetching?e("woot-loading-state",{attrs:{message:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.LOADING")}}):t._e(),t._v(" "),!t.uiFlags.isFetching&&t.records.length?e("table",{staticClass:"min-w-full divide-y divide-slate-75 dark:divide-slate-700"},[e("thead",t._l(t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.LIST.TABLE_HEADER"),(function(n){return e("th",{key:n,staticClass:"py-4 pr-4 text-left font-semibold text-slate-700 dark:text-slate-300"},[t._v("\n          "+t._s(n)+"\n        ")])})),0),t._v(" "),e("tbody",{staticClass:"divide-y divide-slate-50 dark:divide-slate-800"},t._l(t.records,(function(n,a){return e("dashboard-apps-row",{key:n.id,attrs:{index:a,app:n},on:{edit:t.editApp,delete:t.openDeletePopup}})})),1)]):t._e()],1),t._v(" "),t.showDashboardAppPopup?e("dashboard-app-modal",{attrs:{show:t.showDashboardAppPopup,mode:t.mode,"selected-app-data":t.selectedApp},on:{close:t.toggleDashboardAppPopup}}):t._e(),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.confirmDeletion,title:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.TITLE"),message:t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.MESSAGE",{appName:t.selectedApp.title}),"confirm-text":t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.CONFIRM_YES"),"reject-text":t.$t("INTEGRATION_SETTINGS.DASHBOARD_APPS.DELETE.CONFIRM_NO")},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null);e.default=E.exports}}]);
//# sourceMappingURL=99-d4e021f244cb726fa967.chunk.js.map