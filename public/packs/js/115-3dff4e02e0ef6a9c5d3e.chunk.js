(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{2187:function(e,t,n){"use strict";n.r(t);n(37),n(9),n(148),n(44),n(26),n(11),n(23),n(30),n(25),n(31),n(36),n(39),n(16),n(18),n(20),n(72),n(68),n(24);var a=n(129),o=n(69),r=n(34),i=n(67),l=n(350),s=n(371),u=n(313),c=n(109),E=n(727),d=n.n(E),p=n(751);function v(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(a,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){v(r,a,o,i,l,"next",e)}function l(e){v(r,a,o,i,l,"throw",e)}i(void 0)}))}}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={mixins:[u.a,s.a],setup:function(){return{updateUISettings:Object(l.a)().updateUISettings,v$:Object(a.a)()}},data:function(){return{id:"",name:"",locale:"en",domain:"",supportEmail:"",features:{},autoResolveDuration:null,latestChatwootVersion:null}},validations:{name:{required:o.f},locale:{required:o.f},autoResolveDuration:{minValue:Object(o.e)(1),maxValue:Object(o.c)(999)}},computed:b(b({},Object(r.mapGetters)({globalConfig:"globalConfig/get",getAccount:"accounts/getAccount",uiFlags:"accounts/getUIFlags",accountId:"getCurrentAccountId",isFeatureEnabledonAccount:"accounts/isFeatureEnabledonAccount"})),{},{showAutoResolutionConfig:function(){return this.isFeatureEnabledonAccount(this.accountId,c.a.AUTO_RESOLVE_CONVERSATIONS)},hasAnUpdateAvailable:function(){return!!d.a.valid(this.latestChatwootVersion)&&d.a.lt(this.globalConfig.appVersion,this.latestChatwootVersion)},languagesSortedByCode:function(){return m(this.enabledLanguages).sort((function(e,t){return e.iso_639_1_code.localeCompare(t.iso_639_1_code)}))},isUpdating:function(){return this.uiFlags.isUpdating},featureInboundEmailEnabled:function(){var e;return!(null===(e=this.features)||void 0===e||!e.inbound_emails)},featureCustomReplyDomainEnabled:function(){return this.featureInboundEmailEnabled&&!!this.features.custom_reply_domain},featureCustomReplyEmailEnabled:function(){return this.featureInboundEmailEnabled&&!!this.features.custom_reply_email},getAccountId:function(){return this.id.toString()}}),mounted:function(){this.initializeAccount()},methods:{initializeAccount:function(){var e=this;return _(regeneratorRuntime.mark((function t(){var n,a,o,r,i,l,s,u,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n=e.getAccount(e.accountId),a=n.name,o=n.locale,r=n.id,i=n.domain,l=n.support_email,s=n.features,u=n.auto_resolve_duration,c=n.latest_chatwoot_version,e.$root.$i18n.locale=o,e.name=a,e.locale=o,e.id=r,e.domain=i,e.supportEmail=l,e.features=s,e.autoResolveDuration=u,e.latestChatwootVersion=c}catch(E){}case 1:case"end":return t.stop()}}),t)})))()},updateAccount:function(){var e=this;return _(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.v$.$touch(),!e.v$.$invalid){t.next=4;break}return Object(i.a)(e.$t("GENERAL_SETTINGS.FORM.ERROR")),t.abrupt("return");case 4:return t.prev=4,t.next=7,e.$store.dispatch("accounts/update",{locale:e.locale,name:e.name,domain:e.domain,support_email:e.supportEmail,auto_resolve_duration:e.autoResolveDuration});case 7:e.$root.$i18n.locale=e.locale,e.getAccount(e.id).locale=e.locale,e.updateDirectionView(e.locale),Object(i.a)(e.$t("GENERAL_SETTINGS.UPDATE.SUCCESS")),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),Object(i.a)(e.$t("GENERAL_SETTINGS.UPDATE.ERROR"));case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))()},updateDirectionView:function(e){var t=Object(p.b)(e);this.updateUISettings({rtl_view:t})}}},O=n(8),S=Object(O.a)(g,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-grow flex-shrink min-w-0 p-6 overflow-auto"},[e.uiFlags.isFetchingItem?e._e():t("form",{on:{submit:function(t){return t.preventDefault(),e.updateAccount.apply(null,arguments)}}},[t("div",{staticClass:"flex flex-row p-4 border-b border-slate-25 dark:border-slate-800"},[t("div",{staticClass:"flex-grow-0 flex-shrink-0 flex-[25%] min-w-0 py-4 pr-6 pl-0"},[t("h4",{staticClass:"text-lg font-medium text-black-900 dark:text-slate-200"},[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.GENERAL_SECTION.TITLE"))+"\n        ")]),e._v(" "),t("p",[e._v(e._s(e.$t("GENERAL_SETTINGS.FORM.GENERAL_SECTION.NOTE")))])]),e._v(" "),t("div",{staticClass:"p-4 flex-grow-0 flex-shrink-0 flex-[50%]"},[t("label",{class:{error:e.v$.name.$error}},[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.NAME.LABEL"))+"\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:e.$t("GENERAL_SETTINGS.FORM.NAME.PLACEHOLDER")},domProps:{value:e.name},on:{blur:e.v$.name.$touch,input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),e.v$.name.$error?t("span",{staticClass:"message"},[e._v("\n            "+e._s(e.$t("GENERAL_SETTINGS.FORM.NAME.ERROR"))+"\n          ")]):e._e()]),e._v(" "),t("label",{class:{error:e.v$.locale.$error}},[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.LANGUAGE.LABEL"))+"\n          "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.locale,expression:"locale"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.locale=t.target.multiple?n:n[0]}}},e._l(e.languagesSortedByCode,(function(n){return t("option",{key:n.iso_639_1_code,domProps:{value:n.iso_639_1_code}},[e._v("\n              "+e._s(n.name)+"\n            ")])})),0),e._v(" "),e.v$.locale.$error?t("span",{staticClass:"message"},[e._v("\n            "+e._s(e.$t("GENERAL_SETTINGS.FORM.LANGUAGE.ERROR"))+"\n          ")]):e._e()]),e._v(" "),e.featureInboundEmailEnabled?t("label",[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.FEATURES.INBOUND_EMAIL_ENABLED"))+"\n        ")]):e._e(),e._v(" "),e.featureCustomReplyDomainEnabled?t("label",[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.FEATURES.CUSTOM_EMAIL_DOMAIN_ENABLED"))+"\n        ")]):e._e(),e._v(" "),e.featureCustomReplyDomainEnabled?t("label",[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.DOMAIN.LABEL"))+"\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.domain,expression:"domain"}],attrs:{type:"text",placeholder:e.$t("GENERAL_SETTINGS.FORM.DOMAIN.PLACEHOLDER")},domProps:{value:e.domain},on:{input:function(t){t.target.composing||(e.domain=t.target.value)}}})]):e._e(),e._v(" "),e.featureCustomReplyEmailEnabled?t("label",[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.SUPPORT_EMAIL.LABEL"))+"\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.supportEmail,expression:"supportEmail"}],attrs:{type:"text",placeholder:e.$t("GENERAL_SETTINGS.FORM.SUPPORT_EMAIL.PLACEHOLDER")},domProps:{value:e.supportEmail},on:{input:function(t){t.target.composing||(e.supportEmail=t.target.value)}}})]):e._e(),e._v(" "),e.showAutoResolutionConfig?t("label",{class:{error:e.v$.autoResolveDuration.$error}},[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.AUTO_RESOLVE_DURATION.LABEL"))+"\n          "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.autoResolveDuration,expression:"autoResolveDuration"}],attrs:{type:"number",placeholder:e.$t("GENERAL_SETTINGS.FORM.AUTO_RESOLVE_DURATION.PLACEHOLDER")},domProps:{value:e.autoResolveDuration},on:{blur:e.v$.autoResolveDuration.$touch,input:function(t){t.target.composing||(e.autoResolveDuration=t.target.value)}}}),e._v(" "),e.v$.autoResolveDuration.$error?t("span",{staticClass:"message"},[e._v("\n            "+e._s(e.$t("GENERAL_SETTINGS.FORM.AUTO_RESOLVE_DURATION.ERROR"))+"\n          ")]):e._e()]):e._e()])]),e._v(" "),t("div",{staticClass:"flex flex-row p-4 border-slate-25 dark:border-slate-700 text-black-900 dark:text-slate-300"},[t("div",{staticClass:"flex-grow-0 flex-shrink-0 flex-[25%] min-w-0 py-4 pr-6 pl-0"},[t("h4",{staticClass:"text-lg font-medium text-black-900 dark:text-slate-200"},[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.ACCOUNT_ID.TITLE"))+"\n        ")]),e._v(" "),t("p",[e._v("\n          "+e._s(e.$t("GENERAL_SETTINGS.FORM.ACCOUNT_ID.NOTE"))+"\n        ")])]),e._v(" "),t("div",{staticClass:"p-4 flex-grow-0 flex-shrink-0 flex-[50%]"},[t("woot-code",{attrs:{script:e.getAccountId}})],1)]),e._v(" "),t("div",{staticClass:"p-4 text-sm text-center"},[t("div",[e._v(e._s(`v${e.globalConfig.appVersion}`))]),e._v(" "),e.hasAnUpdateAvailable&&e.globalConfig.displayManifest?t("div",[e._v("\n        "+e._s(e.$t("GENERAL_SETTINGS.UPDATE_CHATWOOT",{latestChatwootVersion:e.latestChatwootVersion}))+"\n      ")]):e._e(),e._v(" "),t("div",{staticClass:"build-id"},[t("div",[e._v(e._s(`Build ${e.globalConfig.gitSha}`))])])]),e._v(" "),t("woot-submit-button",{staticClass:"button nice success button--fixed-top",attrs:{"button-text":e.$t("GENERAL_SETTINGS.SUBMIT"),loading:e.isUpdating}})],1),e._v(" "),e.uiFlags.isFetchingItem?t("woot-loading-state"):e._e()],1)}),[],!1,null,null,null);t.default=S.exports}}]);
//# sourceMappingURL=115-3dff4e02e0ef6a9c5d3e.chunk.js.map