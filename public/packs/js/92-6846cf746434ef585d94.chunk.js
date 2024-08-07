(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{2940:function(e,t,n){},3171:function(e,t,n){"use strict";n(2940)},3391:function(e,t,n){"use strict";n.r(t);n(37),n(51),n(44),n(13),n(9),n(11),n(15),n(12),n(16),n(10),n(28);var o=n(34),i=n(67),s=n(352);function r(e,t,n,o,i,s,r){try{var a=e[s](r),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(o,i)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T={components:{},mixins:[n(314).a],setup:function(){return{isAdmin:Object(s.a)().isAdmin}},data:function(){return{loading:{},showSettings:!1,showDeletePopup:!1,selectedTeam:{}}},computed:c(c({},Object(o.mapGetters)({teamsList:"teams/getTeams",globalConfig:"globalConfig/get"})),{},{deleteConfirmText:function(){return"".concat(this.$t("TEAMS_SETTINGS.DELETE.CONFIRM.YES")," ").concat(this.selectedTeam.name)},deleteRejectText:function(){return this.$t("TEAMS_SETTINGS.DELETE.CONFIRM.NO")},confirmDeleteTitle:function(){return this.$t("TEAMS_SETTINGS.DELETE.CONFIRM.TITLE",{teamName:this.selectedTeam.name})},confirmPlaceHolderText:function(){return"".concat(this.$t("TEAMS_SETTINGS.DELETE.CONFIRM.PLACE_HOLDER",{teamName:this.selectedTeam.name}))}}),methods:{deleteTeam:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.id,t.prev=1,t.next=4,n.$store.dispatch("teams/delete",o);case 4:Object(i.a)(n.$t("TEAMS_SETTINGS.DELETE.API.SUCCESS_MESSAGE")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),Object(i.a)(n.$t("TEAMS_SETTINGS.DELETE.API.ERROR_MESSAGE"));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var s=t.apply(e,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))})()},confirmDeletion:function(){this.deleteTeam(this.selectedTeam),this.closeDelete()},openDelete:function(e){this.showDeletePopup=!0,this.selectedTeam=e},closeDelete:function(){this.showDeletePopup=!1,this.selectedTeam={}}}},u=T,m=(n(3171),n(8)),E=Object(m.a)(u,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-1 overflow-auto"},[t("div",{staticClass:"flex flex-row gap-4 p-8"},[t("div",{staticClass:"w-full md:w-3/5"},[e.teamsList.length?e._e():t("p",{staticClass:"flex flex-col items-center justify-center h-full"},[e._v("\n        "+e._s(e.$t("TEAMS_SETTINGS.LIST.404"))+"\n        "),e.isAdmin?t("router-link",{attrs:{to:e.addAccountScoping("settings/teams/new")}},[e._v("\n          "+e._s(e.$t("TEAMS_SETTINGS.NEW_TEAM"))+"\n        ")]):e._e()],1),e._v(" "),e.teamsList.length?t("table",{staticClass:"woot-table"},[t("tbody",e._l(e.teamsList,(function(n){return t("tr",{key:n.id},[t("td",[t("span",{staticClass:"agent-name"},[e._v(e._s(n.name))]),e._v(" "),t("p",[e._v(e._s(n.description))])]),e._v(" "),t("td",[t("div",{staticClass:"button-wrapper"},[t("router-link",{attrs:{to:e.addAccountScoping(`settings/teams/${n.id}/edit`)}},[e.isAdmin?t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("TEAMS_SETTINGS.LIST.EDIT_TEAM"),expression:"$t('TEAMS_SETTINGS.LIST.EDIT_TEAM')",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny","color-scheme":"secondary","class-names":"grey-btn",icon:"settings"}}):e._e()],1),e._v(" "),e.isAdmin?t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("TEAMS_SETTINGS.DELETE.BUTTON_TEXT"),expression:"$t('TEAMS_SETTINGS.DELETE.BUTTON_TEXT')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn","is-loading":e.loading[n.id]},on:{click:function(t){return e.openDelete(n)}}}):e._e()],1)])])})),0)]):e._e()]),e._v(" "),t("div",{staticClass:"hidden w-1/3 md:block"},[t("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.$t("TEAMS_SETTINGS.SIDEBAR_TXT",{installationName:e.globalConfig.installationName}),expression:"\n          $t('TEAMS_SETTINGS.SIDEBAR_TXT', {\n            installationName: globalConfig.installationName,\n          })\n        "}]})])]),e._v(" "),e.showDeletePopup?t("woot-confirm-delete-modal",{attrs:{show:e.showDeletePopup,title:e.confirmDeleteTitle,message:e.$t("TEAMS_SETTINGS.DELETE.CONFIRM.MESSAGE"),"confirm-text":e.deleteConfirmText,"reject-text":e.deleteRejectText,"confirm-value":e.selectedTeam.name,"confirm-place-holder-text":e.confirmPlaceHolderText},on:{"update:show":function(t){e.showDeletePopup=t},"on-confirm":e.confirmDeletion,"on-close":e.closeDelete}}):e._e()],1)}),[],!1,null,"5c46a9da",null);t.default=E.exports}}]);
//# sourceMappingURL=92-6846cf746434ef585d94.chunk.js.map