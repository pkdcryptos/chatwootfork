(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1583:function(e,t,o){},1584:function(e,t,o){},1665:function(e,t,o){"use strict";o(1583)},1666:function(e,t,o){"use strict";o(1584)},1682:function(e,t,o){"use strict";var a={mixins:[o(603).a],props:{locales:{type:Array,default:function(){return[]}},selectedLocaleCode:{type:String,default:""}},methods:{changeDefaultLocale:function(e){this.$emit("change-default-locale",{localeCode:e})},deleteLocale:function(e){this.$emit("delete",{localeCode:e})}}},n=(o(1665),o(8)),l=Object(n.a)(a,(function(){var e=this,t=e._self._c;return t("table",{staticClass:"woot-table"},[t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[e._v("\n        "+e._s(e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.NAME"))+"\n      ")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("\n        "+e._s(e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.CODE"))+"\n      ")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("\n        "+e._s(e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.ARTICLE_COUNT"))+"\n      ")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("\n        "+e._s(e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.CATEGORIES"))+"\n      ")]),e._v(" "),t("th",{attrs:{scope:"col"}})])]),e._v(" "),e._m(0),e._v(" "),t("tbody",e._l(e.locales,(function(o){return t("tr",{key:o.code},[t("td",[t("span",[e._v(e._s(e.localeName(o.code)))]),e._v(" "),o.code===e.selectedLocaleCode?t("woot-label",{staticClass:"default-status",attrs:{title:e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DEFAULT_LOCALE"),"color-scheme":"warning",small:!0,variant:"smooth"}}):e._e()],1),e._v(" "),t("td",[t("span",[e._v(e._s(o.code))])]),e._v(" "),t("td",[t("span",[e._v(e._s(o.articles_count))])]),e._v(" "),t("td",[t("span",[e._v(e._s(o.categories_count))])]),e._v(" "),t("td",[t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.SWAP"),expression:"\n            $t(\n              'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.SWAP'\n            )\n          ",modifiers:{"top-end":!0}}],attrs:{size:"tiny",variant:"smooth",icon:"arrow-swap","color-scheme":"primary",disabled:o.code===e.selectedLocaleCode},on:{click:function(t){return e.changeDefaultLocale(o.code)}}}),e._v(" "),t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DELETE"),expression:"\n            $t(\n              'HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.AVAILABLE_LOCALES.TABLE.DELETE'\n            )\n          ",modifiers:{"top-end":!0}}],attrs:{size:"tiny",variant:"smooth",icon:"delete","color-scheme":"alert",disabled:o.code===e.selectedLocaleCode},on:{click:function(t){return e.deleteLocale(o.code)}}})],1)])})),0)])}),[function(){var e=this._self._c;return e("tr",[e("td",{staticClass:"horizontal-line",attrs:{colspan:"100%"}})])}],!1,null,"14a63e09",null);t.a=l.exports},1683:function(e,t,o){"use strict";o(37),o(89),o(23),o(26),o(80),o(103),o(44),o(9),o(24);var a=o(314),n=o(129),l=o(67),c=o(69),r=o(766),s=o(95);function u(e,t,o,a,n,l,c){try{var r=e[l](c),s=r.value}catch(u){return void o(u)}r.done?t(s):Promise.resolve(s).then(a,n)}var i={components:{Modal:a.a},props:{show:{type:Boolean,default:!0},portal:{type:Object,default:function(){return{}}}},setup:function(){return{v$:Object(n.a)()}},data:function(){return{selectedLocale:"",isUpdating:!1}},computed:{addedLocales:function(){return this.portal.config.allowed_locales.map((function(e){return e.code}))},locales:function(){var e=this.portal.config.allowed_locales.map((function(e){return e.code}));return Object.keys(r.a).map((function(e){return{id:e,name:r.a[e],code:e}})).filter((function(t){return!e.includes(t.code)}))}},validations:{selectedLocale:{required:c.f}},methods:{onCreate:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.v$.$touch(),!t.v$.$invalid){e.next=3;break}return e.abrupt("return");case 3:return(o=t.addedLocales).push(t.selectedLocale),t.isUpdating=!0,e.prev=6,e.next=9,t.$store.dispatch("portals/update",{portalSlug:t.portal.slug,config:{allowed_locales:o}});case 9:t.alertMessage=t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.API.SUCCESS_MESSAGE"),t.onClose(),t.$track(s.i.CREATE_LOCALE,{localeAdded:t.selectedLocale,totalLocales:o.length,from:t.$route.name}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),t.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||t.$t("HELP_CENTER.PORTAL.ADD_LOCALE.API.ERROR_MESSAGE");case 17:return e.prev=17,Object(l.a)(t.alertMessage),t.isUpdating=!1,e.finish(17);case 21:case"end":return e.stop()}}),e,null,[[6,14,17,21]])})),function(){var t=this,o=arguments;return new Promise((function(a,n){var l=e.apply(t,o);function c(e){u(l,a,n,c,r,"next",e)}function r(e){u(l,a,n,c,r,"throw",e)}c(void 0)}))})()},onClose:function(){this.$emit("cancel")}}},L=i,d=(o(1666),o(8)),E=Object(d.a)(L,(function(){var e=this,t=e._self._c;return t("modal",{attrs:{show:e.show,"on-close":e.onClose},on:{"update:show":function(t){e.show=t}}},[t("woot-modal-header",{attrs:{"header-title":e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.TITLE"),"header-content":e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.SUB_TITLE")}}),e._v(" "),t("form",{staticClass:"w-full",on:{submit:function(t){return t.preventDefault(),e.onCreate.apply(null,arguments)}}},[t("div",{staticClass:"w-full"},[t("label",{class:{error:e.v$.selectedLocale.$error}},[e._v("\n        "+e._s(e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.LOCALE.LABEL"))+"\n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLocale,expression:"selectedLocale"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedLocale=t.target.multiple?o:o[0]}}},e._l(e.locales,(function(o){return t("option",{key:o.name,domProps:{value:o.id}},[e._v("\n            "+e._s(o.name)+"-"+e._s(o.code)+"\n          ")])})),0),e._v(" "),e.v$.selectedLocale.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.LOCALE.ERROR"))+"\n        ")]):e._e()]),e._v(" "),t("div",{staticClass:"w-full"},[t("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[t("woot-button",{staticClass:"button clear",on:{click:function(t){return t.preventDefault(),e.onClose.apply(null,arguments)}}},[e._v("\n            "+e._s(e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.BUTTONS.CANCEL"))+"\n          ")]),e._v(" "),t("woot-button",[e._v("\n            "+e._s(e.$t("HELP_CENTER.PORTAL.ADD_LOCALE.BUTTONS.CREATE"))+"\n          ")])],1)])])])],1)}),[],!1,null,"985d038a",null);t.a=E.exports},2180:function(e,t,o){"use strict";o.r(t);o(37),o(89),o(26),o(44),o(23),o(9),o(24);var a=o(1682),n=o(1683),l=o(95),c=o(67),r=o(283),s=o(755),u=o(601),i=o(6);function L(e,t,o,a,n,l,c){try{var r=e[l](c),s=r.value}catch(u){return void o(u)}r.done?t(s):Promise.resolve(s).then(a,n)}function d(e){return function(){var t=this,o=arguments;return new Promise((function(a,n){var l=e.apply(t,o);function c(e){L(l,a,n,c,r,"next",e)}function r(e){L(l,a,n,c,r,"throw",e)}c(void 0)}))}}var E={__name:"EditPortalLocales",setup:function(e){Object(i.defineComponent)({name:"EditPortalLocales"});var t=Object(i.ref)(!1),o=Object(r.b)(),L=Object(r.a)(),E=Object(s.a)(),_=Object(c.b)(),A=Object(u.a)().t,f=Object(i.computed)((function(){return E.params.portalSlug})),p=Object(i.computed)((function(){var e=f.value;return e?o["portals/portalBySlug"].value(e):o["portals/allPortals"].value[0]})),v=Object(i.computed)((function(){var e;return null===(e=p.value)||void 0===e?void 0:e.config.allowed_locales})),T=Object(i.computed)((function(){return Object.keys(v.value).map((function(e){return v.value[e].code}))}));function O(){return m.apply(this,arguments)}function m(){return(m=d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.dispatch("portals/index");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return h.apply(this,arguments)}function h(){return(h=d(regeneratorRuntime.mark((function e(t){var o,a,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.newAllowedLocales,a=t.defaultLocale,n=t.messageKey,l="",e.prev=2,e.next=5,L.dispatch("portals/update",{portalSlug:f.value,config:{default_locale:a,allowed_locales:o}});case 5:l=A("HELP_CENTER.PORTAL.".concat(n,".API.SUCCESS_MESSAGE")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||A("HELP_CENTER.PORTAL.".concat(n,".API.ERROR_MESSAGE"));case 11:return e.prev=11,Object(c.a)(l),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])})))).apply(this,arguments)}return Object(i.onBeforeMount)((function(){O()})),{__sfc:!0,isAddLocaleModalOpen:t,getters:o,store:L,route:E,track:_,t:A,currentPortalSlug:f,currentPortal:p,locales:v,allowedLocales:T,fetchPortals:O,updatePortalLocales:C,changeDefaultLocale:function(e){var t=e.localeCode;C({newAllowedLocales:T.value,defaultLocale:t,messageKey:"CHANGE_DEFAULT_LOCALE"}),_(l.i.SET_DEFAULT_LOCALE,{newLocale:t,from:E.name})},deletePortalLocale:function(e){var t,o=e.localeCode;C({newAllowedLocales:T.value.filter((function(e){return e!==o})),defaultLocale:null===(t=p.value)||void 0===t?void 0:t.meta.default_locale,messageKey:"DELETE_LOCALE"}),_(l.i.DELETE_LOCALE,{deletedLocale:o,from:E.name})},closeAddLocaleModal:function(){t.value=!1},addLocale:function(){t.value=!0},LocaleItemTable:a.a,AddLocale:n.a}}},_=E,A=o(8),f=Object(A.a)(_,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t("div",{staticClass:"w-full h-full max-w-6xl space-y-4 bg-white dark:bg-slate-900"},[t("div",{staticClass:"flex justify-end"},[t("woot-button",{staticClass:"header-action-buttons",attrs:{variant:"smooth",size:"small","color-scheme":"primary"},on:{click:o.addLocale}},[e._v("\n      "+e._s(e.$t("HELP_CENTER.PORTAL.PORTAL_SETTINGS.LIST_ITEM.HEADER.ADD"))+"\n    ")])],1),e._v(" "),o.currentPortal?t(o.LocaleItemTable,{attrs:{locales:o.locales,"selected-locale-code":o.currentPortal.meta.default_locale},on:{"change-default-locale":o.changeDefaultLocale,delete:o.deletePortalLocale}}):e._e(),e._v(" "),t("woot-modal",{attrs:{show:o.isAddLocaleModalOpen,"on-close":o.closeAddLocaleModal},on:{"update:show":function(e){o.isAddLocaleModalOpen=e}}},[t(o.AddLocale,{attrs:{show:o.isAddLocaleModalOpen,portal:o.currentPortal},on:{cancel:o.closeAddLocaleModal}})],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);
//# sourceMappingURL=59-79c5fde1424588238f78.chunk.js.map