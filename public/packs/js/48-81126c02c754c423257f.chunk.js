(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1469:function(t,e,i){"use strict";i.d(e,"a",(function(){return _})),i.d(e,"b",(function(){return m}));var n=i(1430),s=i(1992),o=i(1993),r=i(1994),a=i(1429),c=i(1995),l=i(1996),u=i(1997),d=i(597),f=i(745),p=i(287),h=i(149).b.SNOOZE_OPTIONS,b=function(t){var e=Object(n.a)(Object(s.a)(t,1));return Object(o.a)(e)?e:Object(r.a)(e,{days:(8-e.getDay())%7})},x=function(t){var e=Object(a.a)(Object(r.a)(t,{months:1}));return Object(o.a)(e)?e:Object(r.a)(e,{days:(8-e.getDay())%7})},O=function(t){return Object(r.a)(t,{days:1})},v=function(t){return Object(c.a)(Object(l.a)(Object(u.a)(t,9),0),0)},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,i=null;return t===h.AN_HOUR_FROM_NOW?i=Object(r.a)(e,{hours:1}):t===h.UNTIL_TOMORROW?i=v(O(e)):t===h.UNTIL_NEXT_WEEK?i=v(b(e)):t===h.UNTIL_NEXT_MONTH&&(i=v(x(e))),i?Object(d.a)(i):null},m=function(t){if(!t)return null;var e=new Date(t);return Object(f.a)(e)?Object(p.a)(e,"h.mmaaa"):t?Object(p.a)(e,"d MMM, h.mmaaa"):null}},1681:function(t,e,i){"use strict";var n={props:{options:{type:Object,default:function(){return{root:document,rootMargin:"100px 0 100px 0)"}}}},mounted:function(){this.intersectionObserver=null,this.registerInfiniteLoader()},beforeDestroy:function(){this.unobserveInfiniteLoadObserver()},methods:{registerInfiniteLoader:function(){var t=this;this.intersectionObserver=new IntersectionObserver((function(e){e&&e[0].isIntersecting&&t.$emit("observed")}),this.options),this.intersectionObserver.observe(this.$refs.observedElement)},unobserveInfiniteLoadObserver:function(){this.intersectionObserver.unobserve(this.$refs.observedElement)}}},s=i(8),o=Object(s.a)(n,(function(){return(0,this._self._c)("div",{ref:"observedElement",staticClass:"h-6 w-full"})}),[],!1,null,null,null);e.a=o.exports},1815:function(t,e,i){},1992:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(32),s=i(374),o=i(10);function r(t,e){Object(o.a)(2,arguments);var i=Object(n.a)(e),r=7*i;return Object(s.a)(t,r)}},1993:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(14),s=i(10);function o(t){return Object(s.a)(1,arguments),1===Object(n.a)(t).getDay()}},1994:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i(374),s=i(616),o=i(14),r=i(10),a=i(32);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){if(Object(r.a)(2,arguments),!e||"object"!==c(e))return new Date(NaN);var i="years"in e?Object(a.a)(e.years):0,l="months"in e?Object(a.a)(e.months):0,u="weeks"in e?Object(a.a)(e.weeks):0,d="days"in e?Object(a.a)(e.days):0,f="hours"in e?Object(a.a)(e.hours):0,p="minutes"in e?Object(a.a)(e.minutes):0,h="seconds"in e?Object(a.a)(e.seconds):0,b=Object(o.a)(t),x=l||i?Object(s.a)(b,l+12*i):b,O=d||u?Object(n.a)(x,d+7*u):x,v=p+60*f,_=h+60*v,m=1e3*_,y=new Date(O.getTime()+m);return y}},1995:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(32),s=i(14),o=i(10);function r(t,e){Object(o.a)(2,arguments);var i=Object(s.a)(t),r=Object(n.a)(e);return i.setSeconds(r),i}},1996:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(32),s=i(14),o=i(10);function r(t,e){Object(o.a)(2,arguments);var i=Object(s.a)(t),r=Object(n.a)(e);return i.setMinutes(r),i}},1997:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(32),s=i(14),o=i(10);function r(t,e){Object(o.a)(2,arguments);var i=Object(s.a)(t),r=Object(n.a)(e);return i.setHours(r),i}},2068:function(t,e,i){"use strict";i(1815)},2132:function(t,e,i){"use strict";i.r(e);i(57),i(44),i(52),i(73),i(26),i(11),i(23),i(30),i(25),i(31);var n=i(34),s=i(67),o=i(350),r=i(149),a=(i(51),i(92)),c={props:{priority:{type:String,default:""}},data:function(){return{CONVERSATION_PRIORITY:a.f}}},l=i(8),u=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-flex items-center justify-center rounded-md"},[t.priority===t.CONVERSATION_PRIORITY.HIGH?e("svg",{staticClass:"h-4 w-4",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"4",y:"12",width:"4",height:"8",rx:"1",fill:"#FFC291"}}),t._v(" "),e("rect",{attrs:{x:"10",y:"8",width:"4",height:"12",rx:"1",fill:"#FFC291"}}),t._v(" "),e("rect",{attrs:{x:"16",y:"4",width:"4",height:"16",rx:"1",fill:"#FFC291"}})]):t._e(),t._v(" "),t.priority===t.CONVERSATION_PRIORITY.LOW?e("svg",{staticClass:"h-4 w-4",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"4",y:"12",width:"4",height:"8",rx:"1",fill:"#FFC291"}}),t._v(" "),e("rect",{attrs:{x:"10",y:"8",width:"4",height:"12",rx:"1",fill:"#DDDDDD"}}),t._v(" "),e("rect",{attrs:{x:"16",y:"4",width:"4",height:"16",rx:"1",fill:"#DDDDDD"}})]):t._e(),t._v(" "),t.priority===t.CONVERSATION_PRIORITY.MEDIUM?e("svg",{staticClass:"h-4 w-4",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"4",y:"12",width:"4",height:"8",rx:"1",fill:"#FFC291"}}),t._v(" "),e("rect",{attrs:{x:"10",y:"8",width:"4",height:"12",rx:"1",fill:"#FFC291"}}),t._v(" "),e("rect",{attrs:{x:"16",y:"4",width:"4",height:"16",rx:"1",fill:"#DDDDDD"}})]):t._e(),t._v(" "),t.priority===t.CONVERSATION_PRIORITY.URGENT?e("svg",{staticClass:"h-4 w-4",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"4",y:"12",width:"4",height:"8",rx:"1",fill:"#E5484D"}}),t._v(" "),e("rect",{attrs:{x:"10",y:"8",width:"4",height:"12",rx:"1",fill:"#E5484D"}}),t._v(" "),e("rect",{attrs:{x:"16",y:"4",width:"4",height:"16",rx:"1",fill:"#E5484D"}})]):t._e()])}),[],!1,null,null,null).exports,d={props:{status:{type:String,default:""}},data:function(){return{CONVERSATION_STATUS:a.h}}},f=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-flex items-center justify-center rounded-md"},[t.status===t.CONVERSATION_STATUS.PENDING?e("svg",{staticClass:"h-3.5 w-3.5",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"fill-[#B9BBC6]",attrs:{d:"M8.1 0.0449978V1.8558C4.5486 2.2986 1.8 5.328 1.8 9C1.8 12.9762 5.0238 16.2 9 16.2C10.6641 16.2 12.195 15.6357 13.4154 14.688L14.6961 15.9687C13.1445 17.2377 11.16 18 9 18C4.0293 18 0 13.9707 0 9C0 4.3335 3.5523 0.495898 8.1 0.0449978ZM17.955 9.9C17.775 11.7099 17.0604 13.3623 15.9687 14.6952L14.688 13.4154C15.462 12.4191 15.9804 11.2149 16.1442 9.9H17.9559H17.955ZM9.9018 0.0449978C14.1534 0.467098 17.5338 3.8484 17.9568 8.1H16.1451C15.7392 4.8438 13.158 2.2626 9.9018 1.8558V0.0440979V0.0449978Z"}})]):t._e(),t._v(" "),t.status===t.CONVERSATION_STATUS.OPEN?e("svg",{staticClass:"h-3.5 w-3.5",attrs:{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"fill-[#ED8A5C]",attrs:{d:"M9.375 18.875C4.19733 18.875 0 14.6776 0 9.5C0 4.32233 4.19733 0.125 9.375 0.125C14.5526 0.125 18.75 4.32233 18.75 9.5C18.75 14.6776 14.5526 18.875 9.375 18.875ZM9.375 17C13.5172 17 16.875 13.6422 16.875 9.5C16.875 5.35786 13.5172 2 9.375 2C5.23286 2 1.875 5.35786 1.875 9.5C1.875 13.6422 5.23286 17 9.375 17Z"}})]):t._e(),t._v(" "),t.status===t.CONVERSATION_STATUS.SNOOZED?e("svg",{staticClass:"h-3.5 w-3.5",attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"fill-[#0B68CB]",attrs:{d:"M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM2.9961 12.9825C3.58766 13.8676 4.36812 14.6105 5.28129 15.1577C6.19446 15.7049 7.21761 16.0428 8.27707 16.147C9.33652 16.2513 10.4059 16.1193 11.4082 15.7606C12.4105 15.4019 13.3208 14.8254 14.0736 14.0726C14.8263 13.3198 15.4027 12.4094 15.7613 11.4071C16.12 10.4047 16.2518 9.33532 16.1475 8.27588C16.0431 7.21644 15.7052 6.19332 15.1579 5.2802C14.6106 4.36707 13.8676 3.58668 12.9825 2.9952C13.3706 4.3796 13.383 5.84237 13.0186 7.23318C12.6542 8.62399 11.926 9.89269 10.9089 10.9089C9.89277 11.9258 8.62423 12.6539 7.23359 13.0183C5.84296 13.3828 4.38037 13.3704 2.9961 12.9825Z"}})]):t._e(),t._v(" "),t.status===t.CONVERSATION_STATUS.RESOLVED?e("svg",{staticClass:"h-3.5 w-3.5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"3 3 17.92 17.92"}},[e("path",{staticClass:"fill-[#5BB98C]",attrs:{d:"M11.96 20.92C7.01152 20.92 3 16.9084 3 11.96C3 7.01152 7.01152 3 11.96 3C16.9084 3 20.92 7.01152 20.92 11.96C20.92 16.9084 16.9084 20.92 11.96 20.92ZM11.96 19.128C15.9188 19.128 19.128 15.9188 19.128 11.96C19.128 8.00122 15.9188 4.792 11.96 4.792C8.00122 4.792 4.792 8.00122 4.792 11.96C4.792 15.9188 8.00122 19.128 11.96 19.128Z"}}),t._v(" "),e("path",{staticClass:"fill-[#5BB98C]",attrs:{d:"M11.9599 17.9333C15.2589 17.9333 17.9332 15.2589 17.9332 11.96C17.9332 8.66098 15.2589 5.98663 11.9599 5.98663C8.66092 5.98663 5.98657 8.66098 5.98657 11.96C5.98657 15.2589 8.66092 17.9333 11.9599 17.9333Z"}})]):t._e()])}),[],!1,null,null,null).exports,p=i(630),h={props:{inbox:{type:Object,default:function(){}},conversationId:{type:Number,default:0}},computed:{inboxIcon:function(){var t=this.inbox,e=t.phone_number,i=t.channel_type;return Object(p.a)(i,e)}}},b=Object(l.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-flex items-center rounded-[4px] border border-slate-100 dark:border-slate-700/50 divide-x divide-slate-100 dark:divide-slate-700/50 bg-none"},[t.inbox?e("div",{staticClass:"flex items-center gap-0.5 py-0.5 px-1.5"},[e("fluent-icon",{staticClass:"text-slate-600 dark:text-slate-300",attrs:{icon:t.inboxIcon,size:"14"}}),t._v(" "),e("span",{staticClass:"font-medium text-slate-600 dark:text-slate-200 text-xs"},[t._v("\n      "+t._s(t.inbox.name)+"\n    ")])],1):t._e(),t._v(" "),e("div",{staticClass:"flex items-center py-0.5 px-1.5"},[e("span",{staticClass:"font-medium text-slate-600 dark:text-slate-200 text-xs"},[t._v("\n      "+t._s(t.conversationId)+"\n    ")])])])}),[],!1,null,null,null).exports,x={__name:"MenuItem",props:{label:{type:String,default:""}},emits:["click"],setup:function(t,e){var i=e.emit;return{__sfc:!0,emits:i,onMenuItemClick:function(){i("click")}}}},O=Object(l.a)(x,(function(){var t=this,e=t._self._c,i=t._self._setupProxy;return e("div",{staticClass:"py-1 px-2 w-full h-8 font-medium text-xs text-slate-800 dark:text-slate-100 flex items-center whitespace-nowrap text-ellipsis overflow-hidden hover:text-woot-600 dark:hover:text-woot-500 cursor-pointer rounded-md",attrs:{role:"button"},on:{click:function(t){return t.stopPropagation(),i.onMenuItemClick.apply(null,arguments)}}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,null,null),v=O.exports,_={components:{MenuItem:v},props:{contextMenuPosition:{type:Object,default:function(){return{}}},menuItems:{type:Array,default:function(){return[]}}},methods:{handleClose:function(){this.$emit("close")},onMenuItemClick:function(t){this.$emit("click",t),this.handleClose()}}},m=Object(l.a)(_,(function(){var t=this,e=t._self._c;return e("woot-context-menu",{attrs:{x:t.contextMenuPosition.x,y:t.contextMenuPosition.y},on:{close:t.handleClose}},[e("div",{staticClass:"bg-white dark:bg-slate-900 w-40 py-1 border shadow-md border-slate-100 dark:border-slate-700/50 rounded-xl"},t._l(t.menuItems,(function(i){return e("menu-item",{key:i.key,attrs:{label:i.label},on:{click:function(e){return t.onMenuItemClick(i.key)}}})})),1)])}),[],!1,null,null,null).exports,y=i(270),I=i(737),w=i(1469),C=i(95),g={components:{PriorityIcon:u,InboxContextMenu:m,StatusIcon:f,InboxNameAndId:b,Thumbnail:y.a},props:{notificationItem:{type:Object,default:function(){}},active:{type:Boolean,default:!1}},data:function(){return{isContextMenuOpen:!1,contextMenuPosition:{x:null,y:null}}},computed:{primaryActor:function(){var t;return null===(t=this.notificationItem)||void 0===t?void 0:t.primary_actor},inbox:function(){return this.$store.getters["inboxes/getInbox"](this.primaryActor.inbox_id)},isUnread:function(){var t;return!(null!==(t=this.notificationItem)&&void 0!==t&&t.read_at)},meta:function(){var t;return null===(t=this.primaryActor)||void 0===t?void 0:t.meta},assigneeMeta:function(){var t;return null===(t=this.meta)||void 0===t?void 0:t.assignee},pushTitle:function(){return this.$t("INBOX.TYPES.".concat(this.notificationItem.notification_type.toUpperCase()))},lastActivityAt:function(){var t,e=Object(I.b)(null===(t=this.notificationItem)||void 0===t?void 0:t.last_activity_at);return Object(I.e)(e,!0)},menuItems:function(){var t=[{key:"delete",label:this.$t("INBOX.MENU_ITEM.DELETE")}];return this.isUnread?t.push({key:"mark_as_read",label:this.$t("INBOX.MENU_ITEM.MARK_AS_READ")}):t.push({key:"mark_as_unread",label:this.$t("INBOX.MENU_ITEM.MARK_AS_UNREAD")}),t},snoozedUntilTime:function(){return this.notificationItem.snoozed_until},snoozedDisplayText:function(){return this.snoozedUntilTime?"".concat(this.$t("INBOX.LIST.SNOOZED_UNTIL")," ").concat(Object(w.b)(this.snoozedUntilTime)):""}},unmounted:function(){this.closeContextMenu()},methods:{openConversation:function(t){var e=t.id,i=t.primary_actor_id,n=t.primary_actor_type,s=t.primary_actor.inbox_id,o=t.notification_type;this.$route.params.notification_id!==e&&(this.$track(C.f.OPEN_CONVERSATION_VIA_INBOX,{notificationType:o}),this.$store.dispatch("notifications/read",{id:e,primaryActorId:i,primaryActorType:n,unreadCount:this.meta.unreadCount}),this.$router.push({name:"inbox_view_conversation",params:{inboxId:s,notification_id:e}}))},closeContextMenu:function(){this.isContextMenuOpen=!1,this.contextMenuPosition={x:null,y:null},this.$emit("context-menu-close")},openContextMenu:function(t){this.closeContextMenu(),t.preventDefault(),this.contextMenuPosition={x:t.pageX||t.clientX,y:t.pageY||t.clientY},this.isContextMenuOpen=!0,this.$emit("context-menu-open")},handleAction:function(t){switch(t){case"mark_as_read":this.$emit("mark-notification-as-read",this.notificationItem);break;case"mark_as_unread":this.$emit("mark-notification-as-unread",this.notificationItem);break;case"delete":this.$emit("delete-notification",this.notificationItem)}}}},k=(i(2068),Object(l.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col ltr:pl-5 rtl:pl-3 rtl:pr-5 ltr:pr-3 gap-2.5 py-3 w-full border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-25 dark:hover:bg-slate-800 cursor-pointer",class:t.active?"bg-slate-25 dark:bg-slate-800 click-animation":"bg-white dark:bg-slate-900",attrs:{role:"button"},on:{contextmenu:function(e){return t.openContextMenu(e)},click:function(e){return t.openConversation(t.notificationItem)}}},[e("div",{staticClass:"relative flex items-center justify-between w-full"},[t.isUnread?e("div",{staticClass:"absolute ltr:-left-3.5 rtl:-right-3.5 flex w-2 h-2 rounded bg-woot-500 dark:bg-woot-500"}):t._e(),t._v(" "),e("InboxNameAndId",{attrs:{inbox:t.inbox,"conversation-id":t.primaryActor.id}}),t._v(" "),e("div",{staticClass:"flex gap-2"},[e("PriorityIcon",{attrs:{priority:t.primaryActor.priority}}),t._v(" "),e("StatusIcon",{attrs:{status:t.primaryActor.status}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row items-center justify-between w-full gap-2"},[t.assigneeMeta?e("Thumbnail",{attrs:{src:t.assigneeMeta.thumbnail,username:t.assigneeMeta.name,size:"16px"}}):t._e(),t._v(" "),e("span",{staticClass:"flex-1 overflow-hidden text-sm text-slate-800 dark:text-slate-50 text-ellipsis whitespace-nowrap",class:t.isUnread?"font-medium":"font-normal"},[t._v("\n      "+t._s(t.pushTitle)+"\n    ")]),t._v(" "),e("span",{staticClass:"text-xs font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap"},[t._v("\n      "+t._s(t.lastActivityAt)+"\n    ")])],1),t._v(" "),t.snoozedUntilTime?e("div",{staticClass:"flex items-center"},[e("span",{staticClass:"text-xs font-medium text-woot-500 dark:text-woot-500"},[t._v("\n      "+t._s(t.snoozedDisplayText)+"\n    ")])]):t._e(),t._v(" "),t.isContextMenuOpen?e("inbox-context-menu",{attrs:{"context-menu-position":t.contextMenuPosition,"menu-items":t.menuItems},on:{close:t.closeContextMenu,click:t.handleAction}}):t._e()],1)}),[],!1,null,"20fa93a5",null).exports),N={components:{MenuItem:v},data:function(){return{menuItems:[{key:"mark_all_read",label:this.$t("INBOX.MENU_ITEM.MARK_ALL_READ")},{key:"delete_all",label:this.$t("INBOX.MENU_ITEM.DELETE_ALL")},{key:"delete_all_read",label:this.$t("INBOX.MENU_ITEM.DELETE_ALL_READ")}]}},methods:{onClick:function(t){this.$emit("option-click",t)}}},S=Object(l.a)(N,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col gap-1 bg-white z-50 dark:bg-slate-900 w-40 py-1 border shadow-md border-slate-100 dark:border-slate-700/50 rounded-xl divide-y divide-slate-100 dark:divide-slate-700/50"},[e("div",{staticClass:"flex flex-col"},t._l(t.menuItems,(function(i){return e("menu-item",{key:i.key,attrs:{label:i.label},on:{click:function(e){return t.onClick(i.key)}}})})),1)])}),[],!1,null,null,null).exports;i(161);function E(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function T(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?E(Object(i),!0).forEach((function(e){A(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function A(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var M={setup:function(){var t=Object(o.a)();return{uiSettings:t.uiSettings,updateUISettings:t.updateUISettings}},data:function(){return{showSortMenu:!1,displayOptions:[{name:this.$t("INBOX.DISPLAY_MENU.DISPLAY_OPTIONS.SNOOZED"),key:r.b.INBOX_DISPLAY_BY.SNOOZED,selected:!1,type:r.b.INBOX_FILTER_TYPE.STATUS},{name:this.$t("INBOX.DISPLAY_MENU.DISPLAY_OPTIONS.READ"),key:r.b.INBOX_DISPLAY_BY.READ,selected:!1,type:r.b.INBOX_FILTER_TYPE.TYPE}],sortOptions:[{name:this.$t("INBOX.DISPLAY_MENU.SORT_OPTIONS.NEWEST"),key:r.b.INBOX_SORT_BY.NEWEST,type:r.b.INBOX_FILTER_TYPE.SORT_ORDER},{name:this.$t("INBOX.DISPLAY_MENU.SORT_OPTIONS.OLDEST"),key:r.b.INBOX_SORT_BY.OLDEST,type:r.b.INBOX_FILTER_TYPE.SORT_ORDER}],activeSort:r.b.INBOX_SORT_BY.NEWEST,activeDisplayFilter:{status:"",type:""}}},computed:{activeSortOption:function(){var t,e=this;return(null===(t=this.sortOptions.find((function(t){return t.key===e.activeSort})))||void 0===t?void 0:t.name)||""}},mounted:function(){this.setSavedFilter()},methods:{updateDisplayOption:function(t){var e=this;this.displayOptions.forEach((function(i){i.key===t.key&&(i.selected=!t.selected,e.activeDisplayFilter[i.type]=i.selected?i.key:"",e.saveSelectedDisplayFilter(),e.$emit("filter",t))}))},openSortMenu:function(){this.showSortMenu=!this.showSortMenu},onSortOptionClick:function(t){this.activeSort=t.key,this.showSortMenu=!1,this.saveSelectedDisplayFilter(),this.$emit("filter",t)},saveSelectedDisplayFilter:function(){this.updateUISettings({inbox_filter_by:T(T({},this.activeDisplayFilter),{},{sort_by:this.activeSort||r.b.INBOX_SORT_BY.NEWEST})})},setSavedFilter:function(){var t=this,e=this.uiSettings.inbox_filter_by,i=void 0===e?{}:e,n=i.status,s=i.type,o=i.sort_by;this.activeSort=o||r.b.INBOX_SORT_BY.NEWEST,this.displayOptions.forEach((function(e){e.selected=e.type===r.b.INBOX_FILTER_TYPE.STATUS?e.key===n:e.key===s,t.activeDisplayFilter[e.type]=e.selected?e.key:""}))}}},D={components:{InboxOptionMenu:S,InboxDisplayMenu:Object(l.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col bg-white z-50 dark:bg-slate-900 w-[170px] border shadow-md border-slate-100 dark:border-slate-700/50 rounded-xl divide-y divide-slate-100 dark:divide-slate-700/50"},[e("div",{staticClass:"flex items-center justify-between p-3 rounded-t-lg h-11"},[e("div",{staticClass:"flex gap-1.5"},[e("fluent-icon",{staticClass:"text-slate-700 dark:text-slate-100",attrs:{icon:"arrow-sort",type:"outline",size:"16"}}),t._v(" "),e("span",{staticClass:"text-xs font-medium text-slate-800 dark:text-slate-100"},[t._v("\n        "+t._s(t.$t("INBOX.DISPLAY_MENU.SORT"))+"\n      ")])],1),t._v(" "),e("div",{staticClass:"relative"},[e("div",{staticClass:"border h-5 flex gap-1 rounded-md items-center pr-1.5 pl-1 py-0.5 w-[70px] justify-between border-slate-100 dark:border-slate-700/50",attrs:{role:"button"},on:{click:t.openSortMenu}},[e("span",{staticClass:"text-xs font-medium text-slate-600 dark:text-slate-300"},[t._v("\n          "+t._s(t.activeSortOption)+"\n        ")]),t._v(" "),e("fluent-icon",{staticClass:"text-slate-600 dark:text-slate-200",attrs:{icon:"chevron-down",size:"12"}})],1),t._v(" "),t.showSortMenu?e("div",{staticClass:"absolute flex flex-col gap-0.5 bg-white z-60 dark:bg-slate-800 rounded-md p-0.5 top-0 w-[70px] border border-slate-100 dark:border-slate-700/50"},t._l(t.sortOptions,(function(i){return e("div",{key:i.key,staticClass:"flex rounded-[4px] h-5 w-full items-center justify-between p-0.5 gap-1",class:{"bg-woot-50 dark:bg-woot-700/50":t.activeSort===i.key},attrs:{role:"button"},on:{click:function(e){return e.stopPropagation(),t.onSortOptionClick(i)}}},[e("span",{staticClass:"text-xs font-medium hover:text-woot-600 dark:hover:text-woot-600",class:{"text-woot-600 dark:text-woot-600":t.activeSort===i.key,"text-slate-600 dark:text-slate-300":t.activeSort!==i.key}},[t._v("\n            "+t._s(i.name)+"\n          ")]),t._v(" "),t.activeSort===i.key?e("fluent-icon",{staticClass:"text-woot-600 dark:text-woot-600",attrs:{icon:"checkmark",size:"14"}}):t._e()],1)})),0):t._e()])]),t._v(" "),e("div",[e("span",{staticClass:"px-3 py-4 text-xs font-medium text-slate-400 dark:text-slate-400"},[t._v("\n      "+t._s(t.$t("INBOX.DISPLAY_MENU.DISPLAY"))+"\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-col divide-y divide-slate-100 dark:divide-slate-700/50"},t._l(t.displayOptions,(function(i){return e("div",{key:i.key,staticClass:"flex items-center px-3 py-2 gap-1.5 h-9"},[e("input",{staticClass:"m-0 border-[1.5px] shadow border-slate-200 dark:border-slate-600 appearance-none rounded-[4px] w-4 h-4 dark:bg-slate-800 focus:ring-1 focus:ring-slate-100 dark:focus:ring-slate-700 checked:bg-woot-600 dark:checked:bg-woot-600 after:content-[''] after:text-white checked:after:content-['\u2713'] after:flex after:items-center after:justify-center checked:border-t checked:border-woot-700 dark:checked:border-woot-300 checked:border-b-0 checked:border-r-0 checked:border-l-0 after:text-center after:text-xs after:font-bold after:relative after:-top-[1.5px]",attrs:{id:i.key,type:"checkbox",name:i.key},domProps:{checked:i.selected},on:{change:function(e){return t.updateDisplayOption(i)}}}),t._v(" "),e("label",{staticClass:"text-xs font-medium text-slate-800 !ml-0 !mr-0 dark:text-slate-100",attrs:{for:i.key}},[t._v("\n          "+t._s(i.name)+"\n        ")])])})),0)])])}),[],!1,null,null,null).exports},props:{isContextMenuOpen:{type:Boolean,default:!1}},data:function(){return{showInboxDisplayMenu:!1,showInboxOptionMenu:!1}},watch:{isContextMenuOpen:{handler:function(t){t&&(this.showInboxDisplayMenu=!1,this.showInboxOptionMenu=!1)},immediate:!0}},methods:{markAllRead:function(){var t=this;this.$track(C.f.MARK_ALL_NOTIFICATIONS_AS_READ),this.$store.dispatch("notifications/readAll").then((function(){Object(s.a)(t.$t("INBOX.ALERTS.MARK_ALL_READ"))}))},deleteAll:function(){var t=this;this.$store.dispatch("notifications/deleteAll").then((function(){Object(s.a)(t.$t("INBOX.ALERTS.DELETE_ALL"))}))},deleteAllRead:function(){var t=this;this.$store.dispatch("notifications/deleteAllRead").then((function(){Object(s.a)(t.$t("INBOX.ALERTS.DELETE_ALL_READ"))}))},openInboxDisplayMenu:function(){this.showInboxDisplayMenu=!this.showInboxDisplayMenu},openInboxOptionsMenu:function(){this.showInboxOptionMenu=!this.showInboxOptionMenu},onInboxOptionMenuClick:function(t){var e=this,i={mark_all_read:function(){return e.markAllRead()},delete_all:function(){return e.deleteAll()},delete_all_read:function(){return e.deleteAllRead()}}[t];i&&i(),this.$emit("redirect")},onFilterChange:function(t){this.$emit("filter",t),this.showInboxDisplayMenu=!1,this.$emit("redirect")}}};function j(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?j(Object(i),!0).forEach((function(e){L(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function L(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var B={components:{InboxCard:k,InboxListHeader:Object(l.a)(D,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-between w-full py-2 border-b ltr:pl-4 rtl:pl-2 rtl:pr-4 ltr:pr-2 h-14 border-slate-50 dark:border-slate-800/50"},[e("div",{staticClass:"flex items-center gap-1.5"},[e("h1",{staticClass:"text-xl font-medium text-slate-900 dark:text-slate-25"},[t._v("\n      "+t._s(t.$t("INBOX.LIST.TITLE"))+"\n    ")]),t._v(" "),e("div",{staticClass:"relative"},[e("div",{staticClass:"flex items-center gap-1 px-2 py-1 border rounded-md border-slate-100 dark:border-slate-700/50",attrs:{role:"button"},on:{click:t.openInboxDisplayMenu}},[e("span",{staticClass:"text-xs font-medium text-center text-slate-600 dark:text-slate-200"},[t._v("\n          "+t._s(t.$t("INBOX.LIST.DISPLAY_DROPDOWN"))+"\n        ")]),t._v(" "),e("fluent-icon",{staticClass:"text-slate-600 dark:text-slate-200",attrs:{icon:"chevron-down",size:"12"}})],1),t._v(" "),t.showInboxDisplayMenu?e("inbox-display-menu",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.openInboxDisplayMenu,expression:"openInboxDisplayMenu"}],staticClass:"absolute top-9 ltr:left-0 rtl:right-0",on:{filter:t.onFilterChange}}):t._e()],1)]),t._v(" "),e("div",{staticClass:"relative flex items-center gap-1"},[e("woot-button",{attrs:{variant:"clear",size:"small","color-scheme":"secondary",icon:"mail-inbox"},on:{click:t.openInboxOptionsMenu}}),t._v(" "),t.showInboxOptionMenu?e("inbox-option-menu",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.openInboxOptionsMenu,expression:"openInboxOptionsMenu"}],staticClass:"absolute top-9 ltr:right-0 ltr:md:right-[unset] rtl:left-0 rtl:md:left-[unset]",on:{"option-click":t.onInboxOptionMenuClick}}):t._e()],1)])}),[],!1,null,null,null).exports,IntersectionObserver:i(1681).a},setup:function(){return{uiSettings:Object(o.a)().uiSettings}},data:function(){return{infiniteLoaderOptions:{root:this.$refs.notificationList,rootMargin:"100px 0px 100px 0px"},page:1,status:"",type:"",sortOrder:r.b.INBOX_SORT_BY.NEWEST,isInboxContextMenuOpen:!1,notificationIdToSnooze:null}},computed:R(R({},Object(n.mapGetters)({accountId:"getCurrentAccountId",meta:"notifications/getMeta",uiFlags:"notifications/getUIFlags",notification:"notifications/getFilteredNotifications"})),{},{currentNotificationId:function(){return Number(this.$route.params.notification_id)},inboxFilters:function(){return{page:this.page,status:this.status,type:this.type,sortOrder:this.sortOrder}},notifications:function(){return this.notification(this.inboxFilters)},showEndOfList:function(){return this.uiFlags.isAllNotificationsLoaded&&!this.uiFlags.isFetching},showEmptyState:function(){return!this.uiFlags.isFetching&&!this.notifications.length}}),watch:{inboxFilters:function(t,e){t!==e&&this.$store.dispatch("notifications/updateNotificationFilters",t)}},mounted:function(){this.setSavedFilter(),this.fetchNotifications()},methods:{fetchNotifications:function(){this.page=1,this.$store.dispatch("notifications/clear");var t=this.inboxFilters;this.$store.dispatch("notifications/index",t)},redirectToInbox:function(){"inbox_view"!==this.$route.name&&this.$router.replace({name:"inbox_view"})},loadMoreNotifications:function(){this.uiFlags.isAllNotificationsLoaded||(this.$store.dispatch("notifications/index",{page:this.page+1,status:this.status,type:this.type,sortOrder:this.sortOrder}),this.page+=1)},markNotificationAsRead:function(t){var e=this;this.$track(C.f.MARK_NOTIFICATION_AS_READ);var i=t.id,n=t.primary_actor_id,o=t.primary_actor_type;this.$store.dispatch("notifications/read",{id:i,primaryActorId:n,primaryActorType:o,unreadCount:this.meta.unreadCount}).then((function(){Object(s.a)(e.$t("INBOX.ALERTS.MARK_AS_READ"))}))},markNotificationAsUnRead:function(t){var e=this;this.$track(C.f.MARK_NOTIFICATION_AS_UNREAD),this.redirectToInbox();var i=t.id;this.$store.dispatch("notifications/unread",{id:i}).then((function(){Object(s.a)(e.$t("INBOX.ALERTS.MARK_AS_UNREAD"))}))},deleteNotification:function(t){var e=this;this.$track(C.f.DELETE_NOTIFICATION),this.redirectToInbox(),this.$store.dispatch("notifications/delete",{notification:t,unread_count:this.meta.unreadCount,count:this.meta.count}).then((function(){Object(s.a)(e.$t("INBOX.ALERTS.DELETE"))}))},onFilterChange:function(t){var e=r.b.INBOX_FILTER_TYPE,i=e.STATUS,n=e.TYPE,s=e.SORT_ORDER;t.type===i&&(this.status=t.selected?t.key:""),t.type===n&&(this.type=t.selected?t.key:""),t.type===s&&(this.sortOrder=t.key),this.fetchNotifications()},setSavedFilter:function(){var t=this.uiSettings.inbox_filter_by,e=void 0===t?{}:t,i=e.status,n=e.type,s=e.sort_by;this.status=i,this.type=n,this.sortOrder=s||r.b.INBOX_SORT_BY.NEWEST,this.$store.dispatch("notifications/setNotificationFilters",this.inboxFilters)}}},P=Object(l.a)(B,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex w-full h-full bg-white dark:bg-slate-900"},[e("div",{staticClass:"flex flex-col h-full w-full md:min-w-[360px] md:max-w-[360px] ltr:border-r border-slate-50 dark:border-slate-800/50",class:t.currentNotificationId?"hidden md:flex":"flex"},[e("inbox-list-header",{attrs:{"is-context-menu-open":t.isInboxContextMenuOpen},on:{filter:t.onFilterChange,redirect:t.redirectToInbox}}),t._v(" "),e("div",{ref:"notificationList",staticClass:"flex flex-col w-full h-[calc(100%-56px)] overflow-x-hidden overflow-y-auto"},[t._l(t.notifications,(function(i){return e("inbox-card",{key:i.id,attrs:{active:t.currentNotificationId===i.id,"notification-item":i},on:{"mark-notification-as-read":t.markNotificationAsRead,"mark-notification-as-unread":t.markNotificationAsUnRead,"delete-notification":t.deleteNotification,"context-menu-open":function(e){t.isInboxContextMenuOpen=!0},"context-menu-close":function(e){t.isInboxContextMenuOpen=!1}}})})),t._v(" "),t.uiFlags.isFetching?e("div",{staticClass:"text-center"},[e("span",{staticClass:"mt-4 mb-4 spinner"})]):t._e(),t._v(" "),t.showEmptyState?e("p",{staticClass:"p-4 text-sm font-medium text-center text-slate-400 dark:text-slate-400"},[t._v("\n        "+t._s(t.$t("INBOX.LIST.NO_NOTIFICATIONS"))+"\n      ")]):t._e(),t._v(" "),t.showEndOfList||t.uiFlags.isFetching?t._e():e("intersection-observer",{attrs:{options:t.infiniteLoaderOptions},on:{observed:t.loadMoreNotifications}})],2)],1),t._v(" "),e("router-view")],1)}),[],!1,null,null,null);e.default=P.exports},745:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(372),s=i(10);function o(t){return Object(s.a)(1,arguments),Object(n.a)(t,Date.now())}}}]);
//# sourceMappingURL=48-81126c02c754c423257f.chunk.js.map