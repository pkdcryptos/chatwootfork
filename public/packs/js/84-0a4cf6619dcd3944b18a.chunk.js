(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{2144:function(e,t,n){"use strict";n.r(t);n(37),n(52),n(73),n(26),n(11),n(23),n(30),n(25),n(31),n(36),n(9),n(39),n(16),n(18),n(20),n(68),n(44),n(72),n(24);var r=n(34),a=n(271),i=(n(57),n(12)),o=n(67);function s(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={mixins:[a.a],props:{integrationId:{type:[String,Number],required:!0},integrationLogo:{type:String,default:""},integrationName:{type:String,default:""},integrationDescription:{type:String,default:""},integrationEnabled:{type:Boolean,default:!1},integrationAction:{type:String,default:""},actionButtonText:{type:String,default:""},deleteConfirmationText:{type:Object,default:function(){return{}}}},data:function(){return{showDeleteConfirmationPopup:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.mapGetters)({currentUser:"getCurrentUser",accountId:"getCurrentAccountId",globalConfig:"globalConfig/get"})),methods:{frontendURL:i.c,openDeletePopup:function(){this.showDeleteConfirmationPopup=!0},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},confirmDeletion:function(){this.closeDeletePopup(),this.deleteIntegration(this.deleteIntegration),this.$router.push({name:"settings_integrations"})},deleteIntegration:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("integrations/deleteIntegration",t.integrationId);case 3:Object(o.a)(t.$t("INTEGRATION_SETTINGS.DELETE.API.SUCCESS_MESSAGE")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(o.a)(t.$t("INTEGRATION_SETTINGS.WEBHOOK.DELETE.API.ERROR_MESSAGE"));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))})()}}},f=u,d=n(8),p=Object(d.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col md:flex-row justify-between items-start md:items-center"},[t("div",{staticClass:"flex items-center justify-start m-0 mx-4 flex-1"},[t("img",{staticClass:"p-2 h-16 w-16 mr-4",attrs:{src:`/dashboard/images/integrations/${e.integrationId}.png`}}),e._v(" "),t("div",[t("h3",{staticClass:"text-xl font-medium mb-1 text-slate-800 dark:text-slate-100"},[e._v("\n        "+e._s(e.integrationName)+"\n      ")]),e._v(" "),t("p",{staticClass:"text-slate-700 dark:text-slate-200"},[e._v("\n        "+e._s(e.useInstallationName(e.integrationDescription,e.globalConfig.installationName))+"\n      ")])])]),e._v(" "),t("div",{staticClass:"flex justify-center items-center mb-0 w-[15%]"},[t("router-link",{attrs:{to:e.frontendURL(`accounts/${e.accountId}/settings/integrations/`+e.integrationId)}},[e.integrationEnabled?t("div",["disconnect"===e.integrationAction?t("div",[t("div",{on:{click:e.openDeletePopup}},[t("woot-submit-button",{attrs:{"button-text":e.actionButtonText||e.$t("INTEGRATION_SETTINGS.WEBHOOK.DELETE.BUTTON_TEXT"),"button-class":"smooth alert"}})],1)]):t("div",[t("button",{staticClass:"button nice"},[e._v("\n            "+e._s(e.$t("INTEGRATION_SETTINGS.WEBHOOK.CONFIGURE"))+"\n          ")])])]):e._e()]),e._v(" "),e.integrationEnabled?e._e():t("div",[t("a",{staticClass:"button success nice rounded",attrs:{href:e.integrationAction}},[e._v("\n        "+e._s(e.$t("INTEGRATION_SETTINGS.CONNECT.BUTTON_TEXT"))+"\n      ")])])],1),e._v(" "),t("woot-delete-modal",{attrs:{show:e.showDeleteConfirmationPopup,"on-close":e.closeDeletePopup,"on-confirm":e.confirmDeletion,title:e.deleteConfirmationText.title||e.$t("INTEGRATION_SETTINGS.WEBHOOK.DELETE.CONFIRM.TITLE"),message:e.deleteConfirmationText.message||e.$t("INTEGRATION_SETTINGS.WEBHOOK.DELETE.CONFIRM.MESSAGE"),"confirm-text":e.$t("INTEGRATION_SETTINGS.WEBHOOK.DELETE.CONFIRM.YES"),"reject-text":e.$t("INTEGRATION_SETTINGS.WEBHOOK.DELETE.CONFIRM.NO")},on:{"update:show":function(t){e.showDeleteConfirmationPopup=t}}})],1)}),[],!1,null,null,null).exports,g=n(736);function h(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){h(i,r,a,o,s,"next",e)}function s(e){h(i,r,a,o,s,"throw",e)}o(void 0)}))}}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={mixins:[a.a,g.a],props:{hasConnectedAChannel:{type:Boolean,default:!0}},data:function(){return{selectedChannelId:"",availableChannels:[]}},computed:v(v({},Object(r.mapGetters)({globalConfig:"globalConfig/get",uiFlags:"integrations/getUIFlags"})),{},{errorDescription:function(){return this.hasConnectedAChannel?this.$t("INTEGRATION_SETTINGS.SLACK.SELECT_CHANNEL.EXPIRED"):this.$t("INTEGRATION_SETTINGS.SLACK.SELECT_CHANNEL.DESCRIPTION")}}),methods:{fetchChannels:function(){var e=this;return m(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("integrations/listAllSlackChannels");case 3:e.availableChannels=t.sent,e.availableChannels.sort((function(e,t){return e.name-t.name})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),e.$t("INTEGRATION_SETTINGS.SLACK.FAILED_TO_FETCH_CHANNELS"),e.availableChannels=[];case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},updateIntegration:function(){var e=this;return m(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("integrations/updateSlack",{referenceId:e.selectedChannelId});case 3:Object(o.a)(e.$t("INTEGRATION_SETTINGS.SLACK.UPDATE_SUCCESS")),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),Object(o.a)(t.t0.message||"INTEGRATION_SETTINGS.SLACK.UPDATE_ERROR");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},O=Object(d.a)(b,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-6 py-4 mb-4 border border-yellow-200 rounded-md bg-yellow-50 dark:border-slate-700 dark:bg-slate-800"},[t("div",{staticClass:"flex"},[t("div",{staticClass:"flex-shrink-0 mt-0.5"},[t("fluent-icon",{staticClass:"text-yellow-500 dark:text-yellow-400",attrs:{icon:"alert",size:"24"}})],1),e._v(" "),t("div",{staticClass:"ml-3"},[t("p",{staticClass:"mb-1 text-base font-semibold text-yellow-900 dark:text-yellow-500"},[e._v("\n        "+e._s(e.$t("INTEGRATION_SETTINGS.SLACK.SELECT_CHANNEL.ATTENTION_REQUIRED"))+"\n      ")]),e._v(" "),t("div",{staticClass:"mt-2 text-sm text-yellow-800 dark:text-yellow-600"},[t("p",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.formatMessage(e.useInstallationName(e.errorDescription,e.globalConfig.installationName),!1),expression:"\n            formatMessage(\n              useInstallationName(\n                errorDescription,\n                globalConfig.installationName\n              ),\n              false\n            )\n          "}]})])])]),e._v(" "),e.hasConnectedAChannel?e._e():t("div",{staticClass:"mt-2 ml-8"},[e.availableChannels.length?t("div",{staticClass:"inline-flex"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedChannelId,expression:"selectedChannelId"}],staticClass:"h-8 py-1 mr-4 text-xs leading-4 border border-yellow-300",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedChannelId=t.target.multiple?n:n[0]}}},[t("option",{attrs:{value:""}},[e._v("\n          "+e._s(e.$t("INTEGRATION_SETTINGS.SLACK.SELECT_CHANNEL.OPTION_LABEL"))+"\n        ")]),e._v(" "),e._l(e.availableChannels,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v("\n          #"+e._s(n.name)+"\n        ")])}))],2),e._v(" "),t("woot-submit-button",{attrs:{"button-class":"smooth small success","button-text":e.$t("INTEGRATION_SETTINGS.SLACK.SELECT_CHANNEL.UPDATE"),"spinner-class":"success",loading:e.uiFlags.isUpdatingSlack},on:{click:e.updateIntegration}})],1):t("woot-submit-button",{attrs:{"button-class":"smooth small warning",loading:e.uiFlags.isFetchingSlackChannels,"button-text":e.$t("INTEGRATION_SETTINGS.SLACK.SELECT_CHANNEL.BUTTON_TEXT"),"spinner-class":"warning"},on:{click:e.fetchChannels}})],1)])}),[],!1,null,null,null).exports,I={mixins:[g.a],props:{selectedChannelName:{type:String,required:!0}}},N=Object(d.a)(I,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-1 w-full p-6 bg-white rounded-md border border-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"},[t("div",{staticClass:"prose-lg max-w-5xl"},[t("h5",{staticClass:"dark:text-slate-100"},[e._v("\n      "+e._s(e.$t("INTEGRATION_SETTINGS.SLACK.HELP_TEXT.TITLE"))+"\n    ")]),e._v(" "),t("p",[t("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.formatMessage(e.$t("INTEGRATION_SETTINGS.SLACK.HELP_TEXT.BODY",{selectedChannelName:e.selectedChannelName}),!1),expression:"\n          formatMessage(\n            $t('INTEGRATION_SETTINGS.SLACK.HELP_TEXT.BODY', {\n              selectedChannelName: selectedChannelName,\n            }),\n            false\n          )\n        "}]})])])])}),[],!1,null,null,null).exports;function C(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,a,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={components:{Spinner:n(191).a,Integration:p,SelectChannelWarning:O,SlackIntegrationHelpText:N},mixins:[a.a,g.a],props:{code:{type:String,default:""}},data:function(){return{integrationLoaded:!1}},computed:_(_({integration:function(){return this.$store.getters["integrations/getIntegration"]("slack")},areHooksAvailable:function(){var e=(this.integration||{}).hooks;return!!(void 0===e?[]:e).length},hook:function(){var e=(this.integration||{}).hooks,t=S(void 0===e?[]:e,1)[0];return t||{}},isIntegrationHookEnabled:function(){return this.hook.status||!1},hasConnectedAChannel:function(){return!!this.hook.reference_id},selectedChannelName:function(){if(this.hook.status){var e=this.hook.settings,t=(e=void 0===e?{}:e).channel_name;return(void 0===t?"":t)||"customer-conversations"}return this.$t("INTEGRATION_SETTINGS.SLACK.HELP_TEXT.SELECTED")}},Object(r.mapGetters)({currentUser:"getCurrentUser",globalConfig:"globalConfig/get",accountId:"getCurrentAccountId",uiFlags:"integrations/getUIFlags"})),{},{integrationAction:function(){return this.integration.enabled?"disconnect":this.integration.action}}),mounted:function(){this.intializeSlackIntegration()},methods:{intializeSlackIntegration:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("integrations/get","slack");case 2:if(!t.code){e.next=6;break}return e.next=5,t.$store.dispatch("integrations/connectSlack",t.code);case 5:t.$router.replace(t.$route.path);case 6:t.integrationLoaded=!0;case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){C(i,r,a,o,s,"next",e)}function s(e){C(i,r,a,o,s,"throw",e)}o(void 0)}))})()}}},k=A,P=Object(d.a)(k,(function(){var e=this,t=e._self._c;return e.integrationLoaded&&!e.uiFlags.isCreatingSlack?t("div",{staticClass:"flex flex-col flex-1 overflow-auto"},[t("div",{staticClass:"bg-white dark:bg-slate-800 border-b border-solid border-slate-75 dark:border-slate-700/50 rounded-sm p-4"},[t("integration",{attrs:{"integration-id":e.integration.id,"integration-logo":e.integration.logo,"integration-name":e.integration.name,"integration-description":e.integration.description,"integration-enabled":e.integration.enabled,"integration-action":e.integrationAction,"action-button-text":e.$t("INTEGRATION_SETTINGS.SLACK.DELETE"),"delete-confirmation-text":{title:e.$t("INTEGRATION_SETTINGS.SLACK.DELETE_CONFIRMATION.TITLE"),message:e.$t("INTEGRATION_SETTINGS.SLACK.DELETE_CONFIRMATION.MESSAGE")}}})],1),e._v(" "),e.areHooksAvailable?t("div",{staticClass:"p-6 flex-1"},[e.isIntegrationHookEnabled?e._e():t("select-channel-warning",{attrs:{"has-connected-a-channel":e.hasConnectedAChannel}}),e._v(" "),t("slack-integration-help-text",{attrs:{"selected-channel-name":e.selectedChannelName}})],1):e._e()]):t("div",{staticClass:"flex flex-1 items-center justify-center"},[t("spinner",{attrs:{size:"","color-scheme":"primary"}})],1)}),[],!1,null,null,null);t.default=P.exports},735:function(e,t,n){var r=n(40),a=n(13),i=n(112),o=n(210),s=n(43).f,c=n(99).f,l=n(209),u=n(180),f=n(192),d=n(47),p=n(19),g=n(65).enforce,h=n(193),m=n(15)("match"),E=a.RegExp,v=E.prototype,T=/a/g,b=/a/g,O=new E(T)!==T,I=f.UNSUPPORTED_Y;if(r&&i("RegExp",!O||I||p((function(){return b[m]=!1,E(T)!=T||E(b)==b||"/a/i"!=E(T,"i")})))){for(var N=function(e,t){var n,r=this instanceof N,a=l(e),i=void 0===t;if(!r&&a&&e.constructor===N&&i)return e;O?a&&!i&&(e=e.source):e instanceof N&&(i&&(t=u.call(e)),e=e.source),I&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var s=o(O?new E(e,t):E(e,t),r?this:v,N);I&&n&&(g(s).sticky=!0);return s},C=function(e){e in N||s(N,e,{configurable:!0,get:function(){return E[e]},set:function(t){E[e]=t}})},S=c(E),y=0;S.length>y;)C(S[y++]);v.constructor=N,N.prototype=v,d(a,"RegExp",N)}h("RegExp")},736:function(e,t,n){"use strict";n(68),n(52),n(73),n(735),n(148),n(16),n(9),n(18),n(20),n(208),n(25);var r=n(738),a=n.n(r),i=(n(369),/mention:\/\/(user|team)\/(\d+)\/(.+)/gm);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(e){e.children.forEach((function(e){"image"===e.type&&function(e){var t=e.attrGet("src");if(t){var n=new URL(t).searchParams.get("cw_image_height");n&&e.attrSet("style","height: ".concat(n,";"))}}(e)}))},l=n(629)({html:!1,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20}).use((function(e){e.renderer.rules.mention=function(e,t){return'<span class="prosemirror-mention-node">'.concat(e[t].content,"</span>")},e.inline.ruler.before("link","mention",(function(e,t){var n,r,a,o,s,c,l="",u=e.posMax;return 91===e.src.charCodeAt(e.pos)&&(a=e.pos+1,!((r=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)&&(n=e.src.slice(a,r),(o=r+1)<u&&40===e.src.charCodeAt(o)&&(o+=1,(s=e.md.helpers.parseLinkDestination(e.src,o,e.posMax)).ok&&(l=e.md.normalizeLink(s.str),e.md.validateLink(l)?o=s.pos:l=""),o+=1),!!l.match(new RegExp(i))&&(t||(e.pos=a,e.posMax=r,(c=e.push("mention","")).href=l,c.content=n),e.pos=o,e.posMax=u,!0)))}))})).use((function(e){e.core.ruler.after("inline","add-image-height",(function(e){e.tokens.forEach((function(e){"inline"===e.type&&c(e)}))}))})).use(a.a,{attrs:{class:"link",rel:"noreferrer noopener nofollow",target:"_blank"}}),u=/(^|[^@\w])@(\w{1,15})\b/g,f=/(^|\s)#(\w+)/g,d=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];o(this,e),this.message=t||"",this.isAPrivateNote=r,this.isATweet=n}var t,n,r;return t=e,(n=[{key:"formatMessage",value:function(){var e=this.message;return this.isATweet&&!this.isAPrivateNote&&(e=(e=e.replace(u,"$1[@$2](http://twitter.com/$2)")).replace(f,"$1[#$2](https://twitter.com/hashtag/$2)")),l.render(e)}},{key:"formattedMessage",get:function(){return this.formatMessage()}},{key:"plainText",get:function(){return(new DOMParser).parseFromString(this.formattedMessage,"text/html").body.textContent||""}}])&&s(t.prototype,n),r&&s(t,r),e}(),p=d;t.a={methods:{formatMessage:function(e,t,n){return new p(e,t,n).formattedMessage},getPlainText:function(e,t){return new p(e,t).plainText},truncateMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<100?e:"".concat(e.slice(0,97),"...")},highlightContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.getPlainText(e),a=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return r.replace(new RegExp("(".concat(a,")"),"ig"),'<span class="'.concat(n,'">$1</span>'))}}}},738:function(e,t,n){"use strict";function r(e,t){t=t?Array.isArray(t)?t:[t]:[],Object.freeze(t);var n=e.renderer.rules.link_open||this.defaultRender;e.renderer.rules.link_open=function(e,r,a,i,o){var s=function(e,t){var n,r,a=e.attrs[e.attrIndex("href")][1];for(n=0;n<t.length;++n){if("function"!==typeof(r=t[n]).matcher)return r;if(r.matcher(a,r))return r}}(e[r],t),c=s&&s.attrs;return c&&function(e,t,n){Object.keys(n).forEach((function(r){var a,i=n[r];"className"===r&&(r="class"),(a=t[e].attrIndex(r))<0?t[e].attrPush([r,i]):t[e].attrs[a][1]=i}))}(r,e,c),n(e,r,a,i,o)}}r.defaultRender=function(e,t,n,r,a){return a.renderToken(e,t,n)},e.exports=r}}]);
//# sourceMappingURL=84-0a4cf6619dcd3944b18a.chunk.js.map