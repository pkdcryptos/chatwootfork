(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1915:function(e,t,n){"use strict";n(68),n(52),n(73),n(1914),n(148),n(21),n(10),n(23),n(25),n(208),n(12);var r=n(1917),s=n.n(r),i=(n(369),/mention:\/\/(user|team)\/(\d+)\/(.+)/gm);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(e){e.children.forEach((function(e){"image"===e.type&&function(e){var t=e.attrGet("src");if(t){var n=new URL(t).searchParams.get("cw_image_height");n&&e.attrSet("style","height: ".concat(n,";"))}}(e)}))},c=n(1808)({html:!1,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20}).use((function(e){e.renderer.rules.mention=function(e,t){return'<span class="prosemirror-mention-node">'.concat(e[t].content,"</span>")},e.inline.ruler.before("link","mention",(function(e,t){var n,r,s,a,o,l,c="",u=e.posMax;return 91===e.src.charCodeAt(e.pos)&&(s=e.pos+1,!((r=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)&&(n=e.src.slice(s,r),(a=r+1)<u&&40===e.src.charCodeAt(a)&&(a+=1,(o=e.md.helpers.parseLinkDestination(e.src,a,e.posMax)).ok&&(c=e.md.normalizeLink(o.str),e.md.validateLink(c)?a=o.pos:c=""),a+=1),!!c.match(new RegExp(i))&&(t||(e.pos=s,e.posMax=r,(l=e.push("mention","")).href=c,l.content=n),e.pos=a,e.posMax=u,!0)))}))})).use((function(e){e.core.ruler.after("inline","add-image-height",(function(e){e.tokens.forEach((function(e){"inline"===e.type&&l(e)}))}))})).use(s.a,{attrs:{class:"link",rel:"noreferrer noopener nofollow",target:"_blank"}}),u=/(^|[^@\w])@(\w{1,15})\b/g,d=/(^|\s)#(\w+)/g,p=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(this,e),this.message=t||"",this.isAPrivateNote=r,this.isATweet=n}var t,n,r;return t=e,(n=[{key:"formatMessage",value:function(){var e=this.message;return this.isATweet&&!this.isAPrivateNote&&(e=(e=e.replace(u,"$1[@$2](http://twitter.com/$2)")).replace(d,"$1[#$2](https://twitter.com/hashtag/$2)")),c.render(e)}},{key:"formattedMessage",get:function(){return this.formatMessage()}},{key:"plainText",get:function(){return(new DOMParser).parseFromString(this.formattedMessage,"text/html").body.textContent||""}}])&&o(t.prototype,n),r&&o(t,r),e}(),g=p;t.a={methods:{formatMessage:function(e,t,n){return new g(e,t,n).formattedMessage},getPlainText:function(e,t){return new g(e,t).plainText},truncateMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<100?e:"".concat(e.slice(0,97),"...")},highlightContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.getPlainText(e),s=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return r.replace(new RegExp("(".concat(s,")"),"ig"),'<span class="'.concat(n,'">$1</span>'))}}}},2632:function(e,t,n){"use strict";var r=n(1809),s={props:{inbox:{type:Object,default:function(){}}},computed:{computedInboxClass:function(){var e=this.inbox,t=e.phone_number,n=e.channel_type;return Object(r.a)(n,t)}}},i=n(8),a=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"inbox--name inline-flex items-center py-0.5 px-0 leading-3 whitespace-nowrap font-medium bg-none text-slate-600 dark:text-slate-500 text-xs my-0 mx-2.5"},[t("fluent-icon",{staticClass:"mr-0.5 rtl:ml-0.5 rtl:mr-0",attrs:{icon:e.computedInboxClass,size:"12"}}),e._v("\n  "+e._s(e.inbox.name)+"\n")],1)}),[],!1,null,null,null);t.a=a.exports},2644:function(e,t,n){"use strict";var r={components:{Thumbnail:n(271).a},props:{user:{type:Object,default:function(){}},size:{type:String,default:"20px"},textClass:{type:String,default:"text-xs text-slate-600"}}},s=n(8),i=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex items-center gap-1.5 text-left"},[t("thumbnail",{attrs:{src:e.user.thumbnail,size:e.size,username:e.user.name,status:e.user.availability_status}}),e._v(" "),t("h6",{staticClass:"my-0 dark:text-slate-100 overflow-hidden whitespace-nowrap text-ellipsis text-capitalize",class:e.textClass},[e._v("\n    "+e._s(e.user.name)+"\n  ")])],1)}),[],!1,null,null,null);t.a=i.exports},2891:function(e,t,n){},2892:function(e,t,n){},2893:function(e,t,n){},3053:function(e,t,n){"use strict";n(2891)},3054:function(e,t,n){"use strict";n(2892)},3055:function(e,t,n){"use strict";n(2893)},3318:function(e,t,n){"use strict";n.r(t);n(44);var r="ongoing",s="one_off",i={computed:{campaignType:function(){return{ongoing_campaigns:r,one_off:s}[this.$route.name]},isOngoingType:function(){return this.campaignType===r},isOneOffType:function(){return this.campaignType===s}}},a=(n(13),n(9),n(11),n(15),n(12),n(16),n(10),n(28),n(37),n(34)),o=n(67),l=n(191),c=n(1923),u=n(2644),d=n(2632),p=n(1915),g=n(1916),m={components:{UserAvatarWithName:u.a,InboxName:d.a},mixins:[p.a],props:{campaign:{type:Object,required:!0},isOngoingType:{type:Boolean,default:!0}},computed:{campaignStatus:function(){return this.isOngoingType?this.campaign.enabled?this.$t("CAMPAIGN.LIST.STATUS.ENABLED"):this.$t("CAMPAIGN.LIST.STATUS.DISABLED"):"completed"===this.campaign.campaign_status?this.$t("CAMPAIGN.LIST.STATUS.COMPLETED"):this.$t("CAMPAIGN.LIST.STATUS.ACTIVE")},colorScheme:function(){return this.isOngoingType?this.campaign.enabled?"success":"secondary":"completed"===this.campaign.campaign_status?"secondary":"success"}},methods:{messageStamp:g.c}},f=n(8),v=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-5 py-4 mb-2 bg-white border rounded-md dark:bg-slate-800 border-slate-50 dark:border-slate-900"},[t("div",{staticClass:"flex flex-row items-start justify-between"},[t("div",{staticClass:"flex flex-col"},[t("div",{staticClass:"mb-1 -mt-1 text-base font-medium text-slate-900 dark:text-slate-100"},[e._v("\n        "+e._s(e.campaign.title)+"\n      ")]),e._v(" "),t("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.formatMessage(e.campaign.message),expression:"formatMessage(campaign.message)"}],staticClass:"text-sm line-clamp-1 [&>p]:mb-0"})]),e._v(" "),t("div",{staticClass:"flex flex-row space-x-4"},[e.isOngoingType?t("woot-button",{attrs:{variant:"link",icon:"edit","color-scheme":"secondary",size:"small"},on:{click:function(t){return e.$emit("edit",e.campaign)}}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.LIST.BUTTONS.EDIT"))+"\n      ")]):e._e(),e._v(" "),t("woot-button",{attrs:{variant:"link",icon:"dismiss-circle",size:"small","color-scheme":"secondary"},on:{click:function(t){return e.$emit("delete",e.campaign)}}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.LIST.BUTTONS.DELETE"))+"\n      ")])],1)]),e._v(" "),t("div",{staticClass:"flex flex-row items-center mt-5 space-x-3"},[t("woot-label",{staticClass:"mr-3 text-xs",attrs:{small:"",title:e.campaignStatus,"color-scheme":e.colorScheme}}),e._v(" "),t("inbox-name",{staticClass:"mb-1 ltr:ml-0 rtl:mr-0",attrs:{inbox:e.campaign.inbox}}),e._v(" "),e.campaign.sender?t("user-avatar-with-name",{staticClass:"mb-1",attrs:{user:e.campaign.sender}}):e._e(),e._v(" "),e.campaign.trigger_rules.url?t("div",{staticClass:"w-1/4 mb-1 text-xs text-woot-600 text-truncate"},[e._v("\n      "+e._s(e.campaign.trigger_rules.url)+"\n    ")]):e._e(),e._v(" "),e.campaign.scheduled_at?t("div",{staticClass:"mb-1 text-xs text-slate-700 dark:text-slate-500"},[e._v("\n      "+e._s(e.messageStamp(new Date(e.campaign.scheduled_at),"LLL d, h:mm a"))+"\n    ")]):e._e()],1)])}),[],!1,null,null,null).exports,h={components:{EmptyState:c.a,Spinner:l.a,CampaignCard:v},mixins:[i],props:{campaigns:{type:Array,default:function(){return[]}},showEmptyResult:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:{currentInboxId:function(){return this.$route.params.inboxId},inbox:function(){return this.$store.getters["inboxes/getInbox"](this.currentInboxId)},inboxes:function(){return this.isOngoingType?this.$store.getters["inboxes/getWebsiteInboxes"]:this.$store.getters["inboxes/getTwilioInboxes"]},emptyMessage:function(){return this.isOngoingType?this.inboxes.length?this.$t("CAMPAIGN.ONGOING.404"):this.$t("CAMPAIGN.ONGOING.INBOXES_NOT_FOUND"):this.inboxes.length?this.$t("CAMPAIGN.ONE_OFF.404"):this.$t("CAMPAIGN.ONE_OFF.INBOXES_NOT_FOUND")}}},A=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex items-center flex-col"},[e.isLoading?t("div",{staticClass:"items-center flex text-base justify-center"},[t("spinner",{attrs:{"color-scheme":"primary"}}),e._v(" "),t("span",[e._v(e._s(e.$t("CAMPAIGN.LIST.LOADING_MESSAGE")))])],1):t("div",{staticClass:"w-full"},[e.showEmptyResult?t("empty-state",{attrs:{title:e.emptyMessage}}):t("div",{staticClass:"w-full"},e._l(e.campaigns,(function(n){return t("campaign-card",{key:n.id,attrs:{campaign:n,"is-ongoing-type":e.isOngoingType},on:{edit:t=>e.$emit("edit",t),delete:t=>e.$emit("delete",t)}})})),1)],1)])}),[],!1,null,null,null).exports,b=(n(322),n(51),n(36),n(39),n(21),n(23),n(25),n(72),n(68),n(129)),O=n(69),_=n(1918),y=n(1947);function E(e,t,n,r,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(r,s)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){E(i,r,s,a,o,"next",e)}function o(e){E(i,r,s,a,o,"throw",e)}a(void 0)}))}}function D(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M={components:{WootMessageEditor:_.a},mixins:[i],props:{selectedCampaign:{type:Object,default:function(){}}},setup:function(){return{v$:Object(b.a)()}},data:function(){return{title:"",message:"",selectedSender:"",selectedInbox:null,endPoint:"",timeOnPage:10,triggerOnlyDuringBusinessHours:!1,show:!0,enabled:!0,senderList:[]}},validations:{title:{required:O.f},message:{required:O.f},selectedSender:{required:O.f},endPoint:{required:O.f,shouldBeAValidURLPattern:function(e){try{return new y.a(e),!0}catch(t){return!1}},shouldStartWithHTTP:function(e){return!!e&&(e.startsWith("https://")||e.startsWith("http://"))}},timeOnPage:{required:O.f},selectedInbox:{required:O.f}},computed:$($({},Object(a.mapGetters)({uiFlags:"campaigns/getUIFlags",inboxes:"inboxes/getTwilioInboxes"})),{},{inboxes:function(){return this.isOngoingType?this.$store.getters["inboxes/getWebsiteInboxes"]:this.$store.getters["inboxes/getSMSInboxes"]},pageTitle:function(){return"".concat(this.$t("CAMPAIGN.EDIT.TITLE")," - ").concat(this.selectedCampaign.title)},sendersAndBotList:function(){return[{id:0,name:"Bot"}].concat(D(this.senderList))}}),mounted:function(){this.setFormValues()},methods:{onClose:function(){this.$emit("on-close")},loadInboxMembers:function(){var e=this;return P(regeneratorRuntime.mark((function t(){var n,r,s,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("inboxMembers/get",{inboxId:e.selectedInbox});case 3:n=t.sent,r=n.data.payload,e.senderList=r,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),i=(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.message)||e.$t("CAMPAIGN.ADD.API.ERROR_MESSAGE"),Object(o.a)(i);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onChangeInbox:function(){this.loadInboxMembers()},setFormValues:function(){var e=this.selectedCampaign,t=e.title,n=e.message,r=e.enabled,s=e.trigger_only_during_business_hours,i=e.inbox.id,a=e.trigger_rules,o=a.url,l=a.time_on_page,c=e.sender;this.title=t,this.message=n,this.endPoint=o,this.timeOnPage=l,this.selectedInbox=i,this.triggerOnlyDuringBusinessHours=s,this.selectedSender=c&&c.id||0,this.enabled=r,this.loadInboxMembers()},editCampaign:function(){var e=this;return P(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.v$.$touch(),!e.v$.$invalid){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.$store.dispatch("campaigns/update",{id:e.selectedCampaign.id,title:e.title,message:e.message,inbox_id:e.selectedInbox,trigger_only_during_business_hours:e.triggerOnlyDuringBusinessHours,sender_id:e.selectedSender||null,enabled:e.enabled,trigger_rules:{url:e.endPoint,time_on_page:e.timeOnPage}});case 6:Object(o.a)(e.$t("CAMPAIGN.EDIT.API.SUCCESS_MESSAGE")),e.onClose(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),Object(o.a)(e.$t("CAMPAIGN.EDIT.API.ERROR_MESSAGE"));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}},w=(n(3053),Object(f.a)(M,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col h-auto overflow-auto"},[t("woot-modal-header",{attrs:{"header-title":e.pageTitle}}),e._v(" "),t("form",{staticClass:"flex flex-col w-full",on:{submit:function(t){return t.preventDefault(),e.editCampaign.apply(null,arguments)}}},[t("div",{staticClass:"w-full"},[t("woot-input",{class:{error:e.v$.title.$error},attrs:{label:e.$t("CAMPAIGN.ADD.FORM.TITLE.LABEL"),type:"text",error:e.v$.title.$error?e.$t("CAMPAIGN.ADD.FORM.TITLE.ERROR"):"",placeholder:e.$t("CAMPAIGN.ADD.FORM.TITLE.PLACEHOLDER")},on:{blur:e.v$.title.$touch},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),t("div",{staticClass:"editor-wrap"},[t("label",[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.MESSAGE.LABEL"))+"\n        ")]),e._v(" "),t("woot-message-editor",{staticClass:"message-editor",class:{editor_warning:e.v$.message.$error},attrs:{"is-format-mode":!0,placeholder:e.$t("CAMPAIGN.ADD.FORM.MESSAGE.PLACEHOLDER")},on:{input:e.v$.message.$touch},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),e.v$.message.$error?t("span",{staticClass:"editor-warning__message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.MESSAGE.ERROR"))+"\n        ")]):e._e()],1),e._v(" "),t("label",{class:{error:e.v$.selectedInbox.$error}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.INBOX.LABEL"))+"\n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedInbox,expression:"selectedInbox"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedInbox=t.target.multiple?n:n[0]},function(t){return e.onChangeInbox(t)}]}},e._l(e.inboxes,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v("\n            "+e._s(n.name)+"\n          ")])})),0),e._v(" "),e.v$.selectedInbox.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.INBOX.ERROR"))+"\n        ")]):e._e()]),e._v(" "),t("label",{class:{error:e.v$.selectedSender.$error}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.SENT_BY.LABEL"))+"\n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedSender,expression:"selectedSender"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedSender=t.target.multiple?n:n[0]}}},e._l(e.sendersAndBotList,(function(n){return t("option",{key:n.name,domProps:{value:n.id}},[e._v("\n            "+e._s(n.name)+"\n          ")])})),0),e._v(" "),e.v$.selectedSender.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.SENT_BY.ERROR"))+"\n        ")]):e._e()]),e._v(" "),t("woot-input",{class:{error:e.v$.endPoint.$error},attrs:{label:e.$t("CAMPAIGN.ADD.FORM.END_POINT.LABEL"),type:"text",error:e.v$.endPoint.$error?e.$t("CAMPAIGN.ADD.FORM.END_POINT.ERROR"):"",placeholder:e.$t("CAMPAIGN.ADD.FORM.END_POINT.PLACEHOLDER")},on:{blur:e.v$.endPoint.$touch},model:{value:e.endPoint,callback:function(t){e.endPoint=t},expression:"endPoint"}}),e._v(" "),t("woot-input",{class:{error:e.v$.timeOnPage.$error},attrs:{label:e.$t("CAMPAIGN.ADD.FORM.TIME_ON_PAGE.LABEL"),type:"text",error:e.v$.timeOnPage.$error?e.$t("CAMPAIGN.ADD.FORM.TIME_ON_PAGE.ERROR"):"",placeholder:e.$t("CAMPAIGN.ADD.FORM.TIME_ON_PAGE.PLACEHOLDER")},on:{blur:e.v$.timeOnPage.$touch},model:{value:e.timeOnPage,callback:function(t){e.timeOnPage=t},expression:"timeOnPage"}}),e._v(" "),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.enabled,expression:"enabled"}],attrs:{type:"checkbox",value:"enabled",name:"enabled"},domProps:{checked:Array.isArray(e.enabled)?e._i(e.enabled,"enabled")>-1:e.enabled},on:{change:function(t){var n=e.enabled,r=t.target,s=!!r.checked;if(Array.isArray(n)){var i="enabled",a=e._i(n,i);r.checked?a<0&&(e.enabled=n.concat([i])):a>-1&&(e.enabled=n.slice(0,a).concat(n.slice(a+1)))}else e.enabled=s}}}),e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.ENABLED"))+"\n      ")]),e._v(" "),e.isOngoingType?t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.triggerOnlyDuringBusinessHours,expression:"triggerOnlyDuringBusinessHours"}],attrs:{type:"checkbox",value:"triggerOnlyDuringBusinessHours",name:"triggerOnlyDuringBusinessHours"},domProps:{checked:Array.isArray(e.triggerOnlyDuringBusinessHours)?e._i(e.triggerOnlyDuringBusinessHours,"triggerOnlyDuringBusinessHours")>-1:e.triggerOnlyDuringBusinessHours},on:{change:function(t){var n=e.triggerOnlyDuringBusinessHours,r=t.target,s=!!r.checked;if(Array.isArray(n)){var i="triggerOnlyDuringBusinessHours",a=e._i(n,i);r.checked?a<0&&(e.triggerOnlyDuringBusinessHours=n.concat([i])):a>-1&&(e.triggerOnlyDuringBusinessHours=n.slice(0,a).concat(n.slice(a+1)))}else e.triggerOnlyDuringBusinessHours=s}}}),e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.TRIGGER_ONLY_BUSINESS_HOURS"))+"\n      ")]):e._e()],1),e._v(" "),t("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[t("woot-button",{attrs:{"is-loading":e.uiFlags.isCreating}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.EDIT.UPDATE_BUTTON_TEXT"))+"\n      ")]),e._v(" "),t("woot-button",{attrs:{variant:"clear"},on:{click:function(t){return t.preventDefault(),e.onClose.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.CANCEL_BUTTON_TEXT"))+"\n      ")])],1)])],1)}),[],!1,null,"260d39aa",null));function N(e,t,n,r,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(r,s)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L={components:{CampaignsTable:A,EditCampaign:w.exports},mixins:[i],props:{type:{type:String,default:""}},data:function(){return{showEditPopup:!1,selectedCampaign:{},showDeleteConfirmationPopup:!1}},computed:R(R({},Object(a.mapGetters)({uiFlags:"campaigns/getUIFlags",labelList:"labels/getLabels"})),{},{campaigns:function(){return this.$store.getters["campaigns/getCampaigns"](this.campaignType)},showEmptyResult:function(){return!this.uiFlags.isFetching&&0===this.campaigns.length}}),methods:{openEditPopup:function(e){this.selectedCampaign=e,this.showEditPopup=!0},hideEditPopup:function(){this.showEditPopup=!1},openDeletePopup:function(e){this.showDeleteConfirmationPopup=!0,this.selectedCampaign=e},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},confirmDeletion:function(){this.closeDeletePopup();var e=this.selectedCampaign.id;this.deleteCampaign(e)},deleteCampaign:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.$store.dispatch("campaigns/delete",e);case 3:Object(o.a)(n.$t("CAMPAIGN.DELETE.API.SUCCESS_MESSAGE")),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),Object(o.a)(n.$t("CAMPAIGN.DELETE.API.ERROR_MESSAGE"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,n=arguments;return new Promise((function(r,s){var i=t.apply(e,n);function a(e){N(i,r,s,a,o,"next",e)}function o(e){N(i,r,s,a,o,"throw",e)}a(void 0)}))})()}}},G=L,k=(n(3054),Object(f.a)(G,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-1 overflow-auto"},[t("campaigns-table",{attrs:{campaigns:e.campaigns,"show-empty-result":e.showEmptyResult,"is-loading":e.uiFlags.isFetching,"campaign-type":e.type},on:{edit:e.openEditPopup,delete:e.openDeletePopup}}),e._v(" "),t("woot-modal",{attrs:{show:e.showEditPopup,"on-close":e.hideEditPopup},on:{"update:show":function(t){e.showEditPopup=t}}},[t("edit-campaign",{attrs:{"selected-campaign":e.selectedCampaign},on:{"on-close":e.hideEditPopup}})],1),e._v(" "),t("woot-delete-modal",{attrs:{show:e.showDeleteConfirmationPopup,"on-close":e.closeDeletePopup,"on-confirm":e.confirmDeletion,title:e.$t("CAMPAIGN.DELETE.CONFIRM.TITLE"),message:e.$t("CAMPAIGN.DELETE.CONFIRM.MESSAGE"),"confirm-text":e.$t("CAMPAIGN.DELETE.CONFIRM.YES"),"reject-text":e.$t("CAMPAIGN.DELETE.CONFIRM.NO")},on:{"update:show":function(t){e.showDeleteConfirmationPopup=t}}})],1)}),[],!1,null,"54bc4b11",null).exports),B=(n(89),n(374)),j={components:{DatePicker:n(2779).a},props:{confirmText:{type:String,default:""},placeholder:{type:String,default:""},value:{type:Date,default:[]}},methods:{handleChange:function(e){this.$emit("change",e)},disableBeforeToday:function(e){return e<Object(B.a)(new Date,-1)}}},F=Object(f.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"date-picker"},[t("date-picker",{attrs:{type:"datetime",confirm:!0,clearable:!1,editable:!1,"confirm-text":e.confirmText,placeholder:e.placeholder,value:e.value,"disabled-date":e.disableBeforeToday},on:{change:e.handleChange}})],1)}),[],!1,null,null,null).exports,H=n(95);function U(e,t,n,r,s,i,a){try{var o=e[i](a),l=o.value}catch(c){return void n(c)}o.done?t(l):Promise.resolve(l).then(r,s)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function a(e){U(i,r,s,a,o,"next",e)}function o(e){U(i,r,s,a,o,"throw",e)}a(void 0)}))}}function W(e){return function(e){if(Array.isArray(e))return X(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={components:{WootDateTimePicker:F,WootMessageEditor:_.a},mixins:[i],setup:function(){return{v$:Object(b.a)()}},data:function(){return{title:"",message:"",selectedSender:0,selectedInbox:null,endPoint:"",timeOnPage:10,show:!0,enabled:!0,triggerOnlyDuringBusinessHours:!1,scheduledAt:null,selectedAudience:[],senderList:[]}},validations:function(){var e={title:{required:O.f},message:{required:O.f},selectedInbox:{required:O.f}};return this.isOngoingType?Y(Y({},e),{},{selectedSender:{required:O.f},endPoint:{required:O.f,shouldBeAValidURLPattern:function(e){try{return new y.a(e),!0}catch(t){return!1}},shouldStartWithHTTP:function(e){return!!e&&(e.startsWith("https://")||e.startsWith("http://"))}},timeOnPage:{required:O.f}}):Y(Y({},e),{},{selectedAudience:{isEmpty:function(){return!!this.selectedAudience.length}}})},computed:Y(Y({},Object(a.mapGetters)({uiFlags:"campaigns/getUIFlags",audienceList:"labels/getLabels"})),{},{inboxes:function(){return this.isOngoingType?this.$store.getters["inboxes/getWebsiteInboxes"]:this.$store.getters["inboxes/getSMSInboxes"]},sendersAndBotList:function(){return[{id:0,name:"Bot"}].concat(W(this.senderList))}}),mounted:function(){this.$track(H.b.OPEN_NEW_CAMPAIGN_MODAL,{type:this.campaignType})},methods:{onClose:function(){this.$emit("on-close")},onChange:function(e){this.scheduledAt=e},onChangeInbox:function(){var e=this;return q(regeneratorRuntime.mark((function t(){var n,r,s,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("inboxMembers/get",{inboxId:e.selectedInbox});case 3:n=t.sent,r=n.data.payload,e.senderList=r,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),i=(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.message)||e.$t("CAMPAIGN.ADD.API.ERROR_MESSAGE"),Object(o.a)(i);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getCampaignDetails:function(){var e=null;if(this.isOngoingType)e={title:this.title,message:this.message,inbox_id:this.selectedInbox,sender_id:this.selectedSender||null,enabled:this.enabled,trigger_only_during_business_hours:this.triggerOnlyDuringBusinessHours,trigger_rules:{url:this.endPoint,time_on_page:this.timeOnPage}};else{var t=this.selectedAudience.map((function(e){return{id:e.id,type:"Label"}}));e={title:this.title,message:this.message,inbox_id:this.selectedInbox,scheduled_at:this.scheduledAt,audience:t}}return e},addCampaign:function(){var e=this;return q(regeneratorRuntime.mark((function t(){var n,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.v$.$touch(),!e.v$.$invalid){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,n=e.getCampaignDetails(),t.next=7,e.$store.dispatch("campaigns/create",n);case 7:e.$track(H.b.CREATE_CAMPAIGN,{type:e.campaignType}),Object(o.a)(e.$t("CAMPAIGN.ADD.API.SUCCESS_MESSAGE")),e.onClose(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),s=(null===t.t0||void 0===t.t0||null===(r=t.t0.response)||void 0===r?void 0:r.message)||e.$t("CAMPAIGN.ADD.API.ERROR_MESSAGE"),Object(o.a)(s);case 16:case"end":return t.stop()}}),t,null,[[3,12]])})))()}}},K=(n(3055),Object(f.a)(J,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col h-auto overflow-auto"},[t("woot-modal-header",{attrs:{"header-title":e.$t("CAMPAIGN.ADD.TITLE"),"header-content":e.$t("CAMPAIGN.ADD.DESC")}}),e._v(" "),t("form",{staticClass:"flex flex-col w-full",on:{submit:function(t){return t.preventDefault(),e.addCampaign.apply(null,arguments)}}},[t("div",{staticClass:"w-full"},[t("woot-input",{class:{error:e.v$.title.$error},attrs:{label:e.$t("CAMPAIGN.ADD.FORM.TITLE.LABEL"),type:"text",error:e.v$.title.$error?e.$t("CAMPAIGN.ADD.FORM.TITLE.ERROR"):"",placeholder:e.$t("CAMPAIGN.ADD.FORM.TITLE.PLACEHOLDER")},on:{blur:e.v$.title.$touch},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),e.isOngoingType?t("div",{staticClass:"editor-wrap"},[t("label",[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.MESSAGE.LABEL"))+"\n        ")]),e._v(" "),t("div",[t("woot-message-editor",{staticClass:"message-editor",class:{editor_warning:e.v$.message.$error},attrs:{placeholder:e.$t("CAMPAIGN.ADD.FORM.MESSAGE.PLACEHOLDER")},on:{blur:e.v$.message.$touch},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),e.v$.message.$error?t("span",{staticClass:"editor-warning__message"},[e._v("\n            "+e._s(e.$t("CAMPAIGN.ADD.FORM.MESSAGE.ERROR"))+"\n          ")]):e._e()],1)]):t("label",{class:{error:e.v$.message.$error}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.MESSAGE.LABEL"))+"\n        "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{rows:"5",type:"text",placeholder:e.$t("CAMPAIGN.ADD.FORM.MESSAGE.PLACEHOLDER")},domProps:{value:e.message},on:{blur:e.v$.message.$touch,input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),e.v$.message.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.MESSAGE.ERROR"))+"\n        ")]):e._e()]),e._v(" "),t("label",{class:{error:e.v$.selectedInbox.$error}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.INBOX.LABEL"))+"\n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedInbox,expression:"selectedInbox"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedInbox=t.target.multiple?n:n[0]},function(t){return e.onChangeInbox(t)}]}},e._l(e.inboxes,(function(n){return t("option",{key:n.name,domProps:{value:n.id}},[e._v("\n            "+e._s(n.name)+"\n          ")])})),0),e._v(" "),e.v$.selectedInbox.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.INBOX.ERROR"))+"\n        ")]):e._e()]),e._v(" "),e.isOneOffType?t("label",{staticClass:"multiselect-wrap--small",class:{error:e.v$.selectedAudience.$error}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.AUDIENCE.LABEL"))+"\n        "),t("multiselect",{attrs:{options:e.audienceList,"track-by":"id",label:"title",multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,placeholder:e.$t("CAMPAIGN.ADD.FORM.AUDIENCE.PLACEHOLDER"),"selected-label":"","select-label":e.$t("FORMS.MULTISELECT.ENTER_TO_SELECT"),"deselect-label":e.$t("FORMS.MULTISELECT.ENTER_TO_REMOVE")},on:{blur:e.v$.selectedAudience.$touch,select:e.v$.selectedAudience.$touch},model:{value:e.selectedAudience,callback:function(t){e.selectedAudience=t},expression:"selectedAudience"}}),e._v(" "),e.v$.selectedAudience.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.AUDIENCE.ERROR"))+"\n        ")]):e._e()],1):e._e(),e._v(" "),e.isOngoingType?t("label",{class:{error:e.v$.selectedSender.$error}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.SENT_BY.LABEL"))+"\n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedSender,expression:"selectedSender"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedSender=t.target.multiple?n:n[0]}}},e._l(e.sendersAndBotList,(function(n){return t("option",{key:n.name,domProps:{value:n.id}},[e._v("\n            "+e._s(n.name)+"\n          ")])})),0),e._v(" "),e.v$.selectedSender.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("CAMPAIGN.ADD.FORM.SENT_BY.ERROR"))+"\n        ")]):e._e()]):e._e(),e._v(" "),e.isOneOffType?t("label",[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.SCHEDULED_AT.LABEL"))+"\n        "),t("woot-date-time-picker",{attrs:{value:e.scheduledAt,"confirm-text":e.$t("CAMPAIGN.ADD.FORM.SCHEDULED_AT.CONFIRM"),placeholder:e.$t("CAMPAIGN.ADD.FORM.SCHEDULED_AT.PLACEHOLDER")},on:{change:e.onChange}})],1):e._e(),e._v(" "),e.isOngoingType?t("woot-input",{class:{error:e.v$.endPoint.$error},attrs:{label:e.$t("CAMPAIGN.ADD.FORM.END_POINT.LABEL"),type:"text",error:e.v$.endPoint.$error?e.$t("CAMPAIGN.ADD.FORM.END_POINT.ERROR"):"",placeholder:e.$t("CAMPAIGN.ADD.FORM.END_POINT.PLACEHOLDER")},on:{blur:e.v$.endPoint.$touch},model:{value:e.endPoint,callback:function(t){e.endPoint=t},expression:"endPoint"}}):e._e(),e._v(" "),e.isOngoingType?t("woot-input",{class:{error:e.v$.timeOnPage.$error},attrs:{label:e.$t("CAMPAIGN.ADD.FORM.TIME_ON_PAGE.LABEL"),type:"text",error:e.v$.timeOnPage.$error?e.$t("CAMPAIGN.ADD.FORM.TIME_ON_PAGE.ERROR"):"",placeholder:e.$t("CAMPAIGN.ADD.FORM.TIME_ON_PAGE.PLACEHOLDER")},on:{blur:e.v$.timeOnPage.$touch},model:{value:e.timeOnPage,callback:function(t){e.timeOnPage=t},expression:"timeOnPage"}}):e._e(),e._v(" "),e.isOngoingType?t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.enabled,expression:"enabled"}],attrs:{type:"checkbox",value:"enabled",name:"enabled"},domProps:{checked:Array.isArray(e.enabled)?e._i(e.enabled,"enabled")>-1:e.enabled},on:{change:function(t){var n=e.enabled,r=t.target,s=!!r.checked;if(Array.isArray(n)){var i="enabled",a=e._i(n,i);r.checked?a<0&&(e.enabled=n.concat([i])):a>-1&&(e.enabled=n.slice(0,a).concat(n.slice(a+1)))}else e.enabled=s}}}),e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.ENABLED"))+"\n      ")]):e._e(),e._v(" "),e.isOngoingType?t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.triggerOnlyDuringBusinessHours,expression:"triggerOnlyDuringBusinessHours"}],attrs:{type:"checkbox",value:"triggerOnlyDuringBusinessHours",name:"triggerOnlyDuringBusinessHours"},domProps:{checked:Array.isArray(e.triggerOnlyDuringBusinessHours)?e._i(e.triggerOnlyDuringBusinessHours,"triggerOnlyDuringBusinessHours")>-1:e.triggerOnlyDuringBusinessHours},on:{change:function(t){var n=e.triggerOnlyDuringBusinessHours,r=t.target,s=!!r.checked;if(Array.isArray(n)){var i="triggerOnlyDuringBusinessHours",a=e._i(n,i);r.checked?a<0&&(e.triggerOnlyDuringBusinessHours=n.concat([i])):a>-1&&(e.triggerOnlyDuringBusinessHours=n.slice(0,a).concat(n.slice(a+1)))}else e.triggerOnlyDuringBusinessHours=s}}}),e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.FORM.TRIGGER_ONLY_BUSINESS_HOURS"))+"\n      ")]):e._e()],1),e._v(" "),t("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[t("woot-button",{attrs:{"is-loading":e.uiFlags.isCreating}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.CREATE_BUTTON_TEXT"))+"\n      ")]),e._v(" "),t("woot-button",{attrs:{variant:"clear"},on:{click:function(t){return t.preventDefault(),e.onClose.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("CAMPAIGN.ADD.CANCEL_BUTTON_TEXT"))+"\n      ")])],1)])],1)}),[],!1,null,"395c2c84",null)),Q={components:{Campaign:k,AddCampaign:K.exports},mixins:[i],data:function(){return{showAddPopup:!1}},computed:{buttonText:function(){return this.isOngoingType?this.$t("CAMPAIGN.HEADER_BTN_TXT.ONGOING"):this.$t("CAMPAIGN.HEADER_BTN_TXT.ONE_OFF")}},mounted:function(){this.$store.dispatch("campaigns/get")},methods:{openAddPopup:function(){this.showAddPopup=!0},hideAddPopup:function(){this.showAddPopup=!1}}},Z=Object(f.a)(Q,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-1 overflow-auto p-4"},[t("woot-button",{attrs:{"color-scheme":"success","class-names":"button--fixed-top",icon:"add-circle"},on:{click:e.openAddPopup}},[e._v("\n    "+e._s(e.buttonText)+"\n  ")]),e._v(" "),t("campaign"),e._v(" "),t("woot-modal",{attrs:{show:e.showAddPopup,"on-close":e.hideAddPopup},on:{"update:show":function(t){e.showAddPopup=t}}},[t("add-campaign",{on:{"on-close":e.hideAddPopup}})],1)],1)}),[],!1,null,null,null);t.default=Z.exports}}]);
//# sourceMappingURL=52-8f3e95d7ddd26f6e01f1.chunk.js.map