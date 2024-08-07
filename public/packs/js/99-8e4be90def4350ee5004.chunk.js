(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1446:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a}));r(51);var i=function(t){var e=window.chatwootConfig,r=e.hostURL,i=e.helpCenterURL;return"".concat(i||r||"","/hc/").concat(t)},a=function(t,e,r,a){var n=i(t);return"".concat(n,"/articles/").concat(a)}},2186:function(t,e,r){"use strict";r.r(e);r(37),r(690),r(26),r(11),r(23),r(30),r(25),r(31),r(9),r(24);var i=r(34),a=r(67),n=r(1856),s=r(1853),o=r(1857),c=r(191),l=r(603),u=r(149),p=r(1446),E=r(95);function h(t,e,r,i,a,n,s){try{var o=t[n](s),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(i,a)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var n=t.apply(e,r);function s(t){h(n,i,a,s,o,"next",t)}function o(t){h(n,i,a,s,o,"throw",t)}s(void 0)}))}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A=u.b.ARTICLE_STATUS_TYPES,R={components:{EditArticleHeader:n.a,ArticleEditor:s.a,Spinner:c.a,ArticleSettings:o.a},mixins:[l.a],data:function(){return{isUpdating:!1,isSaved:!1,showArticleSettings:!0,alertMessage:"",showDeleteConfirmationPopup:!1}},computed:g(g({},Object(i.mapGetters)({isFetching:"articles/isFetching",articles:"articles/articles"})),{},{article:function(){return this.$store.getters["articles/articleById"](this.articleId)},articleId:function(){return this.$route.params.articleSlug},selectedPortalSlug:function(){return this.$route.params.portalSlug},selectedLocale:function(){return this.$route.params.locale},portalLink:function(){var t=this.$route.params.portalSlug;return Object(p.a)(t,this.article.category.slug,this.article.category.locale,this.article.slug)}}),mounted:function(){this.fetchArticleDetails()},methods:{onClickGoBack:function(){window.history.length>2?this.$router.go(-1):this.$router.push({name:"list_all_locale_articles"})},fetchArticleDetails:function(){this.$store.dispatch("articles/show",{id:this.articleId,portalSlug:this.selectedPortalSlug})},openDeletePopup:function(){this.showDeleteConfirmationPopup=!0},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},confirmDeletion:function(){var t;this.closeDeletePopup(),this.deleteArticle(),this.$track(E.i.DELETE_ARTICLE,{status:null===(t=this.article)||void 0===t?void 0:t.status})},saveArticle:function(t){var e=this;return d(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=Object.assign({},t),e.isUpdating=!0,r.prev=2,r.next=5,e.$store.dispatch("articles/update",g({portalSlug:e.selectedPortalSlug,articleId:e.articleId},i));case 5:r.next=11;break;case 7:r.prev=7,r.t0=r.catch(2),e.alertMessage=(null===r.t0||void 0===r.t0?void 0:r.t0.message)||e.$t("HELP_CENTER.EDIT_ARTICLE.API.ERROR"),Object(a.a)(e.alertMessage);case 11:return r.prev=11,setTimeout((function(){e.isUpdating=!1,e.isSaved=!0}),1500),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[2,7,11,14]])})))()},deleteArticle:function(){var t=this;return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("articles/delete",{portalSlug:t.selectedPortalSlug,articleId:t.articleId});case 3:t.alertMessage=t.$t("HELP_CENTER.DELETE_ARTICLE.API.SUCCESS_MESSAGE"),t.$router.push({name:"list_all_locale_articles",params:{portalSlug:t.selectedPortalSlug,locale:t.locale,recentlyDeleted:!0}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||t.$t("HELP_CENTER.DELETE_ARTICLE.API.ERROR_MESSAGE");case 10:return e.prev=10,Object(a.a)(t.alertMessage),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},archiveArticle:function(){var t=this;return d(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("articles/update",{portalSlug:t.selectedPortalSlug,articleId:t.articleId,status:A.ARCHIVE});case 3:t.alertMessage=t.$t("HELP_CENTER.ARCHIVE_ARTICLE.API.SUCCESS"),t.$track(E.i.ARCHIVE_ARTICLE,{uiFrom:"sidebar"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||t.$t("HELP_CENTER.ARCHIVE_ARTICLE.API.ERROR");case 10:return e.prev=10,Object(a.a)(t.alertMessage),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},updateMeta:function(){var t={portalSlug:this.selectedPortalSlug,locale:this.selectedLocale};return this.$store.dispatch("portals/show",t)},openArticleSettings:function(){this.showArticleSettings=!0},closeArticleSettings:function(){this.showArticleSettings=!1},showArticleInPortal:function(){var t;window.open(this.portalLink,"_blank"),this.$track(E.i.PREVIEW_ARTICLE,{status:null===(t=this.article)||void 0===t?void 0:t.status})}}},w=r(8),S=Object(w.a)(R,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex w-full overflow-auto article-container"},[e("div",{staticClass:"flex-1 flex-shrink-0 px-6 overflow-auto",class:{"flex-grow-1 flex-shrink-0":t.showArticleSettings}},[e("edit-article-header",{attrs:{"back-button-label":t.$t("HELP_CENTER.HEADER.TITLES.ALL_ARTICLES"),"is-updating":t.isUpdating,"is-saved":t.isSaved,"is-sidebar-open":t.showArticleSettings},on:{back:t.onClickGoBack,open:t.openArticleSettings,close:t.closeArticleSettings,show:t.showArticleInPortal,"update-meta":t.updateMeta}}),t._v(" "),t.isFetching?e("div",{staticClass:"h-full p-4 text-base text-center"},[e("spinner",{attrs:{size:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("HELP_CENTER.EDIT_ARTICLE.LOADING")))])],1):e("article-editor",{attrs:{"is-settings-sidebar-open":t.showArticleSettings,article:t.article},on:{"save-article":t.saveArticle}})],1),t._v(" "),t.showArticleSettings?e("article-settings",{attrs:{article:t.article},on:{"save-article":t.saveArticle,"delete-article":t.openDeletePopup,"archive-article":t.archiveArticle,"update-meta":t.updateMeta}}):t._e(),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.confirmDeletion,title:t.$t("HELP_CENTER.DELETE_ARTICLE.MODAL.CONFIRM.TITLE"),message:t.$t("HELP_CENTER.DELETE_ARTICLE.MODAL.CONFIRM.MESSAGE"),"confirm-text":t.$t("HELP_CENTER.DELETE_ARTICLE.MODAL.CONFIRM.YES"),"reject-text":t.$t("HELP_CENTER.DELETE_ARTICLE.MODAL.CONFIRM.NO")},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null);e.default=S.exports}}]);
//# sourceMappingURL=99-8e4be90def4350ee5004.chunk.js.map