(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{2141:function(t,e,n){"use strict";n.r(e);n(37),n(57),n(26),n(11),n(23),n(30),n(25),n(31),n(9),n(24);var o=n(323),i=n(34),r=n(67),s={computed:{isHookTypeInbox:function(){return"inbox"===this.integration.hook_type},hasConnectedHooks:function(){return!!this.integration.hooks.length}}};n(89),n(80),n(103),n(44),n(16),n(20);function a(t,e,n,o,i,r,s){try{var a=t[r](s),l=a.value}catch(u){return void n(u)}a.done?e(l):Promise.resolve(l).then(o,i)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={mixins:[s],props:{integration:{type:Object,default:function(){return{}}}},data:function(){return{endPoint:"",alertMessage:"",values:{}}},computed:u(u({},Object(i.mapGetters)({uiFlags:"integrations/getUIFlags",websiteInboxes:"inboxes/getWebsiteInboxes",dialogFlowEnabledInboxes:"inboxes/dialogFlowEnabledInboxes"})),{},{inboxes:function(){var t=this;return this.dialogFlowEnabledInboxes.filter((function(e){return!t.isIntegrationDialogflow||!t.connectedDialogflowInboxIds.includes(e.id)})).map((function(t){return{label:t.name,value:t.id}}))},connectedDialogflowInboxIds:function(){return this.isIntegrationDialogflow?this.integration.hooks.map((function(t){var e;return null===(e=t.inbox)||void 0===e?void 0:e.id})):[]},formItems:function(){return this.integration.settings_form_schema},isIntegrationDialogflow:function(){return"dialogflow"===this.integration.id}}),methods:{onClose:function(){this.$emit("close")},buildHookPayload:function(){var t=this,e={app_id:this.integration.id,settings:{}};return e.settings=Object.keys(this.values).reduce((function(e,n){return"inbox"!==n&&(e[n]=t.values[n]),e}),{}),this.formItems.forEach((function(t){t.validation.includes("JSON")&&(e.settings[t.name]=JSON.parse(e.settings[t.name]))})),this.isHookTypeInbox&&this.values.inbox&&(e.inbox_id=this.values.inbox),e},submitForm:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("integrations/createHook",e.buildHookPayload());case 3:e.alertMessage=e.$t("INTEGRATION_APPS.ADD.API.SUCCESS_MESSAGE"),e.onClose(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),i=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message,e.alertMessage=i||e.$t("INTEGRATION_APPS.ADD.API.ERROR_MESSAGE");case 11:return t.prev=11,Object(r.a)(e.alertMessage),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var r=t.apply(e,n);function s(t){a(r,o,i,s,l,"next",t)}function l(t){a(r,o,i,s,l,"throw",t)}s(void 0)}))})()}}},f=d,p=n(8),g=Object(p.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-auto overflow-auto integration-hooks"},[e("woot-modal-header",{attrs:{"header-title":t.integration.name,"header-content":t.integration.description}}),t._v(" "),e("formulate-form",{staticClass:"w-full",on:{submit:t.submitForm},scopedSlots:t._u([{key:"default",fn:function({hasErrors:n}){return[t._l(t.formItems,(function(n){return e("formulate-input",t._b({key:n.name},"formulate-input",n,!1))})),t._v(" "),t.isHookTypeInbox?e("formulate-input",{attrs:{options:t.inboxes,type:"select",name:"inbox",placeholder:t.$t("INTEGRATION_APPS.ADD.FORM.INBOX.LABEL"),label:t.$t("INTEGRATION_APPS.ADD.FORM.INBOX.PLACEHOLDER"),validation:"required","validation-name":"Inbox"}}):t._e(),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-button",{attrs:{disabled:n,loading:t.uiFlags.isCreatingHook}},[t._v("\n        "+t._s(t.$t("INTEGRATION_APPS.ADD.FORM.SUBMIT"))+"\n      ")]),t._v(" "),e("woot-button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n        "+t._s(t.$t("INTEGRATION_APPS.ADD.FORM.CANCEL"))+"\n      ")])],1)]}}]),model:{value:t.values,callback:function(e){t.values=e},expression:"values"}})],1)}),[],!1,null,null,null),b=g.exports,h={mixins:[s],props:{integration:{type:Object,default:function(){return{}}}}},v=Object(p.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-shrink flex-grow overflow-auto p-4"},[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"bg-white dark:bg-slate-800 border border-solid border-slate-75 dark:border-slate-700/50 rounded-sm mb-4 p-4"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"flex h-[6.25rem] w-[6.25rem]"},[e("img",{staticClass:"max-w-full p-6",attrs:{src:`/dashboard/images/integrations/${t.integration.id}.png`}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center m-0 mx-4 flex-1"},[e("h3",{staticClass:"text-xl font-medium mb-1 text-slate-800 dark:text-slate-100"},[t._v("\n            "+t._s(t.integration.name)+"\n          ")]),t._v(" "),e("p",{staticClass:"text-slate-700 dark:text-slate-200"},[t._v("\n            "+t._s(t.integration.description)+"\n          ")])]),t._v(" "),e("div",{staticClass:"flex justify-center items-center mb-0 w-[15%]"},[t.hasConnectedHooks?e("div",[e("div",{on:{click:function(e){return t.$emit("delete",t.integration.hooks[0])}}},[e("woot-button",{staticClass:"nice alert"},[t._v("\n                "+t._s(t.$t("INTEGRATION_APPS.DISCONNECT.BUTTON_TEXT"))+"\n              ")])],1)]):e("div",[e("woot-button",{staticClass:"button nice",on:{click:function(e){return t.$emit("add")}}},[t._v("\n              "+t._s(t.$t("INTEGRATION_APPS.CONNECT.BUTTON_TEXT"))+"\n            ")])],1)])])])])])}),[],!1,null,null,null).exports;function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I={mixins:[s],props:{integration:{type:Object,default:function(){return{}}}},computed:O(O({},Object(i.mapGetters)({globalConfig:"globalConfig/get"})),{},{hookHeaders:function(){return this.integration.visible_properties},hooks:function(){var t=this;if(!this.hasConnectedHooks)return[];var e=this.integration.hooks;return e.map((function(e){return O(O({},e),{},{id:e.id,properties:t.hookHeaders.map((function(t){return e.settings[t]?e.settings[t]:"--"}))})}))}}),mounted:function(){},methods:{inboxName:function(t){return t.inbox?t.inbox.name:""}}};function _(t,e,n,o,i,r,s){try{var a=t[r](s),l=a.value}catch(u){return void n(u)}a.done?e(l):Promise.resolve(l).then(o,i)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N={components:{NewHook:b,SingleIntegrationHooks:v,MultipleIntegrationHooks:Object(p.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-row gap-4"},[e("div",{staticClass:"w-full lg:w-3/5"},[t.hasConnectedHooks?e("table",{staticClass:"woot-table"},[e("thead",[t._l(t.hookHeaders,(function(n){return e("th",{key:n},[t._v("\n          "+t._s(n)+"\n        ")])})),t._v(" "),t.isHookTypeInbox?e("th",[t._v("\n          "+t._s(t.$t("INTEGRATION_APPS.LIST.INBOX"))+"\n        ")]):t._e()],2),t._v(" "),e("tbody",t._l(t.hooks,(function(n){return e("tr",{key:n.id},[t._l(n.properties,(function(n){return e("td",{key:n,staticClass:"break-words"},[t._v("\n            "+t._s(n)+"\n          ")])})),t._v(" "),t.isHookTypeInbox?e("td",{staticClass:"break-words"},[t._v("\n            "+t._s(t.inboxName(n))+"\n          ")]):t._e(),t._v(" "),e("td",{staticClass:"flex justify-end gap-1"},[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("INTEGRATION_APPS.LIST.DELETE.BUTTON_TEXT"),expression:"$t('INTEGRATION_APPS.LIST.DELETE.BUTTON_TEXT')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn"},on:{click:function(e){return t.$emit("delete",n)}}})],1)],2)})),0)]):e("p",{staticClass:"flex flex-col items-center justify-center h-full"},[t._v("\n      "+t._s(t.$t("INTEGRATION_APPS.NO_HOOK_CONFIGURED",{integrationId:t.integration.id}))+"\n    ")])]),t._v(" "),e("div",{staticClass:"hidden w-1/3 lg:block"},[e("p",[e("b",[t._v(t._s(t.integration.name))])]),t._v(" "),e("p",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.$t(`INTEGRATION_APPS.SIDEBAR_DESCRIPTION.${t.integration.name.toUpperCase()}`,{installationName:t.globalConfig.installationName}),expression:"\n        $t(\n          `INTEGRATION_APPS.SIDEBAR_DESCRIPTION.${integration.name.toUpperCase()}`,\n          { installationName: globalConfig.installationName }\n        )\n      "}]})])])}),[],!1,null,null,null).exports},mixins:[s],props:{integrationId:{type:[String,Number],required:!0}},data:function(){return{loading:{},showAddHookModal:!1,showDeleteConfirmationPopup:!1,selectedHook:{},alertMessage:""}},computed:P(P({},Object(i.mapGetters)({uiFlags:"integrations/getUIFlags"})),{},{integration:function(){return this.$store.getters["integrations/getIntegration"](this.integrationId)},showIntegrationHooks:function(){return!this.uiFlags.isFetching&&!Object(o.f)(this.integration)},integrationType:function(){return this.integration.allow_multiple_hooks?"multiple":"single"},isIntegrationMultiple:function(){return"multiple"===this.integrationType},isIntegrationSingle:function(){return"single"===this.integrationType},showAddButton:function(){return this.showIntegrationHooks&&this.isIntegrationMultiple},deleteTitle:function(){return this.isHookTypeInbox?this.$t("INTEGRATION_APPS.DELETE.TITLE.INBOX"):this.$t("INTEGRATION_APPS.DELETE.TITLE.ACCOUNT")},deleteMessage:function(){return this.isHookTypeInbox?this.$t("INTEGRATION_APPS.DELETE.MESSAGE.INBOX"):this.$t("INTEGRATION_APPS.DELETE.MESSAGE.ACCOUNT")},confirmText:function(){return this.isHookTypeInbox?this.$t("INTEGRATION_APPS.DELETE.CONFIRM_BUTTON_TEXT.INBOX"):this.$t("INTEGRATION_APPS.DELETE.CONFIRM_BUTTON_TEXT.ACCOUNT")},cancelText:function(){return this.$t("INTEGRATION_APPS.DELETE.CANCEL_BUTTON_TEXT")}}),methods:{openAddHookModal:function(){this.showAddHookModal=!0},hideAddHookModal:function(){this.showAddHookModal=!1},openDeletePopup:function(t){this.showDeleteConfirmationPopup=!0,this.selectedHook=t},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},confirmDeletion:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("integrations/deleteHook",{hookId:e.selectedHook.id,appId:e.selectedHook.app_id});case 3:e.alertMessage=e.$t("INTEGRATION_APPS.DELETE.API.SUCCESS_MESSAGE"),e.closeDeletePopup(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),i=null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.message,e.alertMessage=i||e.$t("INTEGRATION_APPS.DELETE.API.ERROR_MESSAGE");case 11:return t.prev=11,Object(r.a)(e.alertMessage),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var r=t.apply(e,n);function s(t){_(r,o,i,s,a,"next",t)}function a(t){_(r,o,i,s,a,"throw",t)}s(void 0)}))})()}}},x=N,A=Object(p.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-auto p-4 max-w-full my-auto flex flex-wrap h-full"},[t.showAddButton?e("woot-button",{attrs:{"color-scheme":"success","class-names":"button--fixed-top",icon:"add-circle"},on:{click:t.openAddHookModal}},[t._v("\n    "+t._s(t.$t("INTEGRATION_APPS.ADD_BUTTON"))+"\n  ")]):t._e(),t._v(" "),t.showIntegrationHooks?e("div",{staticClass:"w-full"},[t.isIntegrationMultiple?e("div",[e("multiple-integration-hooks",{attrs:{integration:t.integration},on:{delete:t.openDeletePopup}})],1):t._e(),t._v(" "),t.isIntegrationSingle?e("div",[e("single-integration-hooks",{attrs:{integration:t.integration},on:{add:t.openAddHookModal,delete:t.openDeletePopup}})],1):t._e()]):t._e(),t._v(" "),e("woot-modal",{attrs:{show:t.showAddHookModal,"on-close":t.hideAddHookModal},on:{"update:show":function(e){t.showAddHookModal=e}}},[e("new-hook",{attrs:{integration:t.integration},on:{close:t.hideAddHookModal}})],1),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.confirmDeletion,title:t.deleteTitle,message:t.deleteMessage,"confirm-text":t.confirmText,"reject-text":t.cancelText},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null);e.default=A.exports}}]);
//# sourceMappingURL=121-98b49449e9c2a6d0d3ec.chunk.js.map