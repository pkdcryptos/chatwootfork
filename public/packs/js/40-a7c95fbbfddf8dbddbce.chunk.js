(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1448:function(t,e,n){"use strict";var s=n(630),r={props:{inbox:{type:Object,default:function(){}}},computed:{computedInboxClass:function(){var t=this.inbox,e=t.phone_number,n=t.channel_type;return Object(s.a)(n,e)}}},a=n(8),i=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inbox--name inline-flex items-center py-0.5 px-0 leading-3 whitespace-nowrap font-medium bg-none text-slate-600 dark:text-slate-500 text-xs my-0 mx-2.5"},[e("fluent-icon",{staticClass:"mr-0.5 rtl:ml-0.5 rtl:mr-0",attrs:{icon:t.computedInboxClass,size:"12"}}),t._v("\n  "+t._s(t.inbox.name)+"\n")],1)}),[],!1,null,null,null);e.a=i.exports},1799:function(t,e,n){},1800:function(t,e,n){},1801:function(t,e,n){},1802:function(t,e,n){},1803:function(t,e,n){},1804:function(t,e,n){},1805:function(t,e,n){},1806:function(t,e,n){},2052:function(t,e,n){"use strict";n(1799)},2053:function(t,e,n){"use strict";n(1800)},2054:function(t,e,n){"use strict";n(1801)},2055:function(t,e,n){"use strict";n(1802)},2056:function(t,e,n){"use strict";n(1803)},2057:function(t,e,n){"use strict";n(1804)},2058:function(t,e,n){"use strict";n(1805)},2059:function(t,e,n){"use strict";n(1806)},2130:function(t,e,n){"use strict";n.r(e);n(89),n(51),n(281),n(26),n(11),n(23),n(30),n(25),n(31),n(36),n(9),n(39),n(16),n(18),n(20),n(72),n(68),n(44),n(37),n(52),n(369),n(24);function s(t,e,n,s,r,a,i){try{var o=t[a](i),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(s,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){s(i,r,a,o,c,"next",t)}function c(t){s(i,r,a,o,c,"throw",t)}o(void 0)}))}}var a={data:function(){return{searchQuery:"",isInputFocused:!1}},mounted:function(){this.$refs.searchInput.focus(),document.addEventListener("keydown",this.handler)},beforeDestroy:function(){document.removeEventListener("keydown",this.handler)},methods:{handler:function(t){"/"===t.key&&"INPUT"!==document.activeElement.tagName?(t.preventDefault(),this.$refs.searchInput.focus()):"Escape"===t.key&&"INPUT"===document.activeElement.tagName&&(t.preventDefault(),this.$refs.searchInput.blur())},debounceSearch:function(t){var e=this;this.searchQuery=t.target.value,clearTimeout(this.debounce),this.debounce=setTimeout(r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.searchQuery.length>2||e.searchQuery.match(/^[0-9]+$/)?e.$emit("search",e.searchQuery):e.$emit("search","");case 1:case"end":return t.stop()}}),t)}))),500)},onFocus:function(){this.isInputFocused=!0},onBlur:function(){this.isInputFocused=!1}}},i=(n(2052),n(8)),o=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-container",class:{"is-focused":t.isInputFocused}},[e("div",{staticClass:"icon-container"},[e("fluent-icon",{staticClass:"icon",attrs:{icon:"search","aria-hidden":"true"}})],1),t._v(" "),e("input",{ref:"searchInput",staticClass:"dark:bg-slate-900",attrs:{type:"search",placeholder:t.$t("SEARCH.INPUT_PLACEHOLDER")},domProps:{value:t.searchQuery},on:{focus:t.onFocus,blur:t.onBlur,input:t.debounceSearch}}),t._v(" "),e("woot-label",{staticClass:"helper-label",attrs:{title:t.$t("SEARCH.PLACEHOLDER_KEYBINDING"),"show-close":!1,small:""}})],1)}),[],!1,null,"8985b720",null).exports,c=(n(57),{props:{tabs:{type:Array,default:function(){return[]}},selectedTab:{type:Number,default:0}},data:function(){return{activeTab:0}},watch:{selectedTab:function(t,e){t!==e&&(this.activeTab=this.selectedTab)}},methods:{onTabChange:function(t){this.activeTab=t,this.$emit("tab-change",this.tabs[t].key)}}}),u=(n(2053),Object(i.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-container"},[e("woot-tabs",{attrs:{index:t.activeTab,border:!1},on:{change:t.onTabChange}},t._l(t.tabs,(function(t){return e("woot-tabs-item",{key:t.key,attrs:{name:t.name,count:t.count}})})),1)],1)}),[],!1,null,"00f436ea",null).exports),l=n(34),h={props:{title:{type:String,default:""},empty:{type:Boolean,default:!1},query:{type:String,default:""},showTitle:{type:Boolean,default:!0},isFetching:{type:Boolean,default:!0}},computed:{titleCase:function(){return this.title.toLowerCase()}}},f=(n(2054),Object(i.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"result-section"},[t.showTitle?e("div",{staticClass:"header"},[e("h3",{staticClass:"text-sm text-slate-800 dark:text-slate-100"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.isFetching?e("woot-loading-state",{attrs:{message:"Searching"}}):t._t("default"),t._v(" "),t.empty&&!t.isFetching?e("div",{staticClass:"empty"},[e("fluent-icon",{staticClass:"icon",attrs:{icon:"info",size:"16px"}}),t._v(" "),e("p",{staticClass:"empty-state__text"},[t._v("\n      "+t._s(t.$t("SEARCH.EMPTY_STATE",{item:t.titleCase,query:t.query}))+"\n    ")])],1):t._e()],2)}),[],!1,null,"7313cb23",null).exports),p=n(12),d=n(737),m={components:{InboxName:n(1448).a},props:{id:{type:Number,default:0},inbox:{type:Object,default:function(){return{}}},name:{type:String,default:""},email:{type:String,default:""},accountId:{type:[String,Number],default:""},createdAt:{type:[String,Date,Number],default:""},messageId:{type:Number,default:0}},computed:{navigateTo:function(){var t={};return this.messageId&&(t.messageId=this.messageId),Object(p.c)("accounts/".concat(this.accountId,"/conversations/").concat(this.id),t)},createdAtTime:function(){return Object(d.b)(this.createdAt)}}},g=(n(2055),Object(i.a)(m,(function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"conversation-item",attrs:{to:t.navigateTo}},[e("div",{staticClass:"icon-wrap"},[e("fluent-icon",{attrs:{icon:"chat-multiple",size:14}})],1),t._v(" "),e("div",{staticClass:"conversation-details"},[e("div",{staticClass:"meta-wrap"},[e("div",{staticClass:"flex"},[e("woot-label",{staticClass:"conversation-id",attrs:{title:`#${t.id}`,"show-close":!1,small:""}}),t._v(" "),e("div",{staticClass:"inbox-name-wrap"},[e("inbox-name",{staticClass:"mr-2 rtl:mr-0 rtl:ml-2",attrs:{inbox:t.inbox}})],1)],1),t._v(" "),e("div",[e("span",{staticClass:"created-at"},[t._v(t._s(t.createdAtTime))])])]),t._v(" "),e("div",{staticClass:"user-details"},[t.name?e("h5",{staticClass:"text-sm name text-slate-800 dark:text-slate-100"},[e("span",{staticClass:"pre-text"},[t._v(" "+t._s(t.$t("SEARCH.FROM"))+": ")]),t._v("\n        "+t._s(t.name)+"\n      ")]):t._e(),t._v(" "),t.email?e("h5",{staticClass:"overflow-hidden text-sm email text-slate-700 dark:text-slate-200 whitespace-nowrap text-ellipsis"},[e("span",{staticClass:"pre-text"},[t._v(t._s(t.$t("SEARCH.EMAIL"))+":")]),t._v("\n        "+t._s(t.email)+"\n      ")]):t._e()]),t._v(" "),t._t("default")],2)])}),[],!1,null,"36f4ab40",null).exports);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={components:{SearchResultSection:f,SearchResultConversationItem:g},props:{conversations:{type:Array,default:function(){return[]}},query:{type:String,default:""},isFetching:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(l.mapGetters)({accountId:"getCurrentAccountId"}))},_=y,C=Object(i.a)(_,(function(){var t=this,e=t._self._c;return e("search-result-section",{attrs:{title:t.$t("SEARCH.SECTION.CONVERSATIONS"),empty:!t.conversations.length,query:t.query,"show-title":t.showTitle||t.isFetching,"is-fetching":t.isFetching}},[t.conversations.length?e("ul",{staticClass:"search-list"},t._l(t.conversations,(function(n){return e("li",{key:n.id},[e("search-result-conversation-item",{attrs:{id:n.id,name:n.contact.name,email:n.contact.email,"account-id":t.accountId,inbox:n.inbox,"created-at":n.created_at}})],1)})),0):t._e()])}),[],!1,null,null,null).exports,O=n(736),S={props:{shrink:{type:Boolean,default:!1}}},w=(n(2056),{components:{ReadMore:Object(i.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"read-more"},[e("div",{ref:"content",class:{"shrink-container after:shrink-gradient-light dark:after:shrink-gradient-dark":t.shrink}},[t._t("default"),t._v(" "),t.shrink?e("woot-button",{staticClass:"read-more-button",attrs:{size:"tiny",variant:"smooth","color-scheme":"primary"},on:{click:function(e){return e.preventDefault(),t.$emit("expand")}}},[t._v("\n      "+t._s(t.$t("SEARCH.READ_MORE"))+"\n    ")]):t._e()],2)])}),[],!1,null,"0a4cf672",null).exports},mixins:[O.a],props:{author:{type:String,default:""},content:{type:String,default:""},searchTerm:{type:String,default:""}},data:function(){return{isOverflowing:!1}},computed:{messageContent:function(){return this.formatMessage(this.content)}},mounted:function(){var t=this;this.$watch((function(){return t.$refs.messageContainer}),this.setOverflow),this.$nextTick(this.setOverflow)},methods:{setOverflow:function(){var t=this.$refs.messageContainer;if(t){var e=t.querySelector(".message-content");this.isOverflowing=e.offsetHeight>150}},escapeHtml:function(t){var e=document.createTextNode(t),n=document.createElement("p");return n.appendChild(e),n.innerText},prepareContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.escapeHtml(t);return this.highlightContent(e,this.searchTerm,"searchkey--highlight")}}}),x=w;n(2057);function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E={components:{SearchResultConversationItem:g,SearchResultSection:f,MessageContent:Object(i.a)(x,(function(){var t=this,e=t._self._c;return e("blockquote",{ref:"messageContainer",staticClass:"message border-l-2 border-slate-100 dark:border-slate-700"},[e("p",{staticClass:"header"},[e("strong",{staticClass:"text-slate-700 dark:text-slate-100"},[t._v("\n      "+t._s(t.author)+"\n    ")]),t._v("\n    "+t._s(t.$t("SEARCH.WROTE"))+"\n  ")]),t._v(" "),e("read-more",{attrs:{shrink:t.isOverflowing},on:{expand:function(e){t.isOverflowing=!1}}},[e("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.prepareContent(t.content),expression:"prepareContent(content)"}],staticClass:"message-content"})])],1)}),[],!1,null,"8384fd46",null).exports},props:{messages:{type:Array,default:function(){return[]}},query:{type:String,default:""},isFetching:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(l.mapGetters)({accountId:"getCurrentAccountId"})),methods:{getName:function(t){return t&&t.sender&&t.sender.name?t.sender.name:this.$t("SEARCH.BOT_LABEL")}}},k=E,A=Object(i.a)(k,(function(){var t=this,e=t._self._c;return e("search-result-section",{attrs:{title:t.$t("SEARCH.SECTION.MESSAGES"),empty:!t.messages.length,query:t.query,"show-title":t.showTitle,"is-fetching":t.isFetching}},[t.messages.length?e("ul",{staticClass:"search-list"},t._l(t.messages,(function(n){return e("li",{key:n.id},[e("search-result-conversation-item",{attrs:{id:n.conversation_id,"account-id":t.accountId,inbox:n.inbox,"created-at":n.created_at,"message-id":n.id}},[e("message-content",{attrs:{author:t.getName(n),content:n.content,"search-term":t.query}})],1)],1)})),0):t._e()])}),[],!1,null,null,null).exports,R={props:{id:{type:[String,Number],default:0},email:{type:String,default:""},phone:{type:String,default:""},name:{type:String,default:""},thumbnail:{type:String,default:""},accountId:{type:[String,Number],default:0}},computed:{navigateTo:function(){return Object(p.c)("accounts/".concat(this.accountId,"/contacts/").concat(this.id))}}};n(2058);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $={components:{SearchResultSection:f,SearchResultContactItem:Object(i.a)(R,(function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"contact-item",attrs:{to:t.navigateTo}},[e("woot-thumbnail",{attrs:{src:t.thumbnail,username:t.name,size:"24px"}}),t._v(" "),e("div",{staticClass:"ml-2 rtl:mr-2 rtl:ml-0"},[e("h5",{staticClass:"text-sm name text-slate-800 dark:text-slate-200"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),e("p",{staticClass:"m-0 text-slate-600 dark:text-slate-200 gap-1 text-sm flex items-center"},[t.email?e("span",{staticClass:"email text-slate-800 dark:text-slate-200"},[t._v(t._s(t.email))]):t._e(),t._v(" "),t.phone?e("span",{staticClass:"separator text-slate-700 dark:text-slate-200"},[t._v("\n        \u2022\n      ")]):t._e(),t._v(" "),t.phone?e("span",{staticClass:"phone text-slate-800 dark:text-slate-200"},[t._v("\n        "+t._s(t.phone)+"\n      ")]):t._e()])])],1)}),[],!1,null,"7e4e631e",null).exports},props:{contacts:{type:Array,default:function(){return[]}},query:{type:String,default:""},isFetching:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(l.mapGetters)({accountId:"getCurrentAccountId"}))},N=$,F=Object(i.a)(N,(function(){var t=this,e=t._self._c;return e("search-result-section",{attrs:{title:t.$t("SEARCH.SECTION.CONTACTS"),empty:!t.contacts.length,query:t.query,"show-title":t.showTitle,"is-fetching":t.isFetching}},[t.contacts.length?e("ul",{staticClass:"search-list"},t._l(t.contacts,(function(n){return e("li",{key:n.id},[e("search-result-contact-item",{attrs:{id:n.id,name:n.name,email:n.email,phone:n.phone_number,"account-id":t.accountId,thumbnail:n.thumbnail}})],1)})),0):t._e()])}),[],!1,null,null,null).exports,q=n(95);function D(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z={components:{SearchHeader:o,SearchTabs:u,SearchResultContactsList:F,SearchResultConversationsList:C,SearchResultMessagesList:A},data:function(){return{selectedTab:"all",query:""}},computed:H(H({},Object(l.mapGetters)({contactRecords:"conversationSearch/getContactRecords",conversationRecords:"conversationSearch/getConversationRecords",messageRecords:"conversationSearch/getMessageRecords",uiFlags:"conversationSearch/getUIFlags"})),{},{contacts:function(){return this.contactRecords.map((function(t){return H(H({},t),{},{type:"contact"})}))},conversations:function(){return this.conversationRecords.map((function(t){return H(H({},t),{},{type:"conversation"})}))},messages:function(){return this.messageRecords.map((function(t){return H(H({},t),{},{type:"message"})}))},all:function(){return[].concat(D(this.contacts),D(this.conversations),D(this.messages))},filterContacts:function(){return"contacts"===this.selectedTab||this.isSelectedTabAll},filterConversations:function(){return"conversations"===this.selectedTab||this.isSelectedTabAll},filterMessages:function(){return"messages"===this.selectedTab||this.isSelectedTabAll},totalSearchResultsCount:function(){return this.contacts.length+this.conversations.length+this.messages.length},tabs:function(){return[{key:"all",name:this.$t("SEARCH.TABS.ALL"),count:this.totalSearchResultsCount},{key:"contacts",name:this.$t("SEARCH.TABS.CONTACTS"),count:this.contacts.length},{key:"conversations",name:this.$t("SEARCH.TABS.CONVERSATIONS"),count:this.conversations.length},{key:"messages",name:this.$t("SEARCH.TABS.MESSAGES"),count:this.messages.length}]},activeTabIndex:function(){var t=this,e=this.tabs.findIndex((function(e){return e.key===t.selectedTab}));return e>=0?e:0},showEmptySearchResults:function(){return 0===this.totalSearchResultsCount&&this.uiFlags.isSearchCompleted&&!this.uiFlags.isFetching&&this.query},showResultsSection:function(){return this.uiFlags.isSearchCompleted&&0!==this.totalSearchResultsCount||this.uiFlags.isFetching},isSelectedTabAll:function(){return"all"===this.selectedTab}}),beforeDestroy:function(){this.query="",this.$store.dispatch("conversationSearch/clearSearchResults")},mounted:function(){this.$store.dispatch("conversationSearch/clearSearchResults")},methods:{onSearch:function(t){this.selectedTab="all",this.query=t,t?(this.$track(q.d.SEARCH_CONVERSATION),this.$store.dispatch("conversationSearch/fullSearch",{q:t})):this.$store.dispatch("conversationSearch/clearSearchResults")},onBack:function(){window.history.length>2?this.$router.go(-1):this.$router.push({name:"home"})}}},G=(n(2059),Object(i.a)(z,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-page"},[e("div",{staticClass:"page-header"},[e("woot-button",{staticClass:"back-button",attrs:{icon:"chevron-left",variant:"smooth",size:"small "},on:{click:t.onBack}},[t._v("\n      "+t._s(t.$t("GENERAL_SETTINGS.BACK"))+"\n    ")])],1),t._v(" "),e("section",{staticClass:"search-root"},[e("header",[e("search-header",{on:{search:t.onSearch}}),t._v(" "),t.query?e("search-tabs",{attrs:{tabs:t.tabs,"selected-tab":t.activeTabIndex},on:{"tab-change":e=>t.selectedTab=e}}):t._e()],1),t._v(" "),e("div",{staticClass:"search-results"},[t.showResultsSection?e("div",[t.filterContacts?e("search-result-contacts-list",{attrs:{"is-fetching":t.uiFlags.contact.isFetching,contacts:t.contacts,query:t.query,"show-title":t.isSelectedTabAll}}):t._e(),t._v(" "),t.filterMessages?e("search-result-messages-list",{attrs:{"is-fetching":t.uiFlags.message.isFetching,messages:t.messages,query:t.query,"show-title":t.isSelectedTabAll}}):t._e(),t._v(" "),t.filterConversations?e("search-result-conversations-list",{attrs:{"is-fetching":t.uiFlags.conversation.isFetching,conversations:t.conversations,query:t.query,"show-title":t.isSelectedTabAll}}):t._e()],1):t.showEmptySearchResults?e("div",{staticClass:"empty"},[e("fluent-icon",{staticClass:"icon",attrs:{icon:"info",size:"16px"}}),t._v(" "),e("p",{staticClass:"empty-state__text"},[t._v("\n          "+t._s(t.$t("SEARCH.EMPTY_STATE_FULL",{query:t.query}))+"\n        ")])],1):e("div",{staticClass:"empty text-center"},[e("p",{staticClass:"text-center margin-bottom-0"},[e("fluent-icon",{staticClass:"icon",attrs:{icon:"search",size:"24px"}})],1),t._v(" "),e("p",{staticClass:"empty-state__text"},[t._v("\n          "+t._s(t.$t("SEARCH.EMPTY_STATE_DEFAULT"))+"\n        ")])])])])])}),[],!1,null,"b4f1f662",null));e.default=G.exports},735:function(t,e,n){var s=n(40),r=n(13),a=n(112),i=n(210),o=n(43).f,c=n(99).f,u=n(209),l=n(180),h=n(192),f=n(47),p=n(19),d=n(65).enforce,m=n(193),g=n(15)("match"),v=r.RegExp,b=v.prototype,y=/a/g,_=/a/g,C=new v(y)!==y,O=h.UNSUPPORTED_Y;if(s&&a("RegExp",!C||O||p((function(){return _[g]=!1,v(y)!=y||v(_)==_||"/a/i"!=v(y,"i")})))){for(var S=function(t,e){var n,s=this instanceof S,r=u(t),a=void 0===e;if(!s&&r&&t.constructor===S&&a)return t;C?r&&!a&&(t=t.source):t instanceof S&&(a&&(e=l.call(t)),t=t.source),O&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=i(C?new v(t,e):v(t,e),s?this:b,S);O&&n&&(d(o).sticky=!0);return o},w=function(t){t in S||o(S,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},x=c(v),T=0;x.length>T;)w(x[T++]);b.constructor=S,S.prototype=b,f(r,"RegExp",S)}m("RegExp")},736:function(t,e,n){"use strict";n(68),n(52),n(73),n(735),n(148),n(16),n(9),n(18),n(20),n(208),n(25);var s=n(738),r=n.n(s),a=(n(369),/mention:\/\/(user|team)\/(\d+)\/(.+)/gm);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var c=function(t){t.children.forEach((function(t){"image"===t.type&&function(t){var e=t.attrGet("src");if(e){var n=new URL(e).searchParams.get("cw_image_height");n&&t.attrSet("style","height: ".concat(n,";"))}}(t)}))},u=n(629)({html:!1,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20}).use((function(t){t.renderer.rules.mention=function(t,e){return'<span class="prosemirror-mention-node">'.concat(t[e].content,"</span>")},t.inline.ruler.before("link","mention",(function(t,e){var n,s,r,i,o,c,u="",l=t.posMax;return 91===t.src.charCodeAt(t.pos)&&(r=t.pos+1,!((s=t.md.helpers.parseLinkLabel(t,t.pos,!0))<0)&&(n=t.src.slice(r,s),(i=s+1)<l&&40===t.src.charCodeAt(i)&&(i+=1,(o=t.md.helpers.parseLinkDestination(t.src,i,t.posMax)).ok&&(u=t.md.normalizeLink(o.str),t.md.validateLink(u)?i=o.pos:u=""),i+=1),!!u.match(new RegExp(a))&&(e||(t.pos=r,t.posMax=s,(c=t.push("mention","")).href=u,c.content=n),t.pos=i,t.posMax=l,!0)))}))})).use((function(t){t.core.ruler.after("inline","add-image-height",(function(t){t.tokens.forEach((function(t){"inline"===t.type&&c(t)}))}))})).use(r.a,{attrs:{class:"link",rel:"noreferrer noopener nofollow",target:"_blank"}}),l=/(^|[^@\w])@(\w{1,15})\b/g,h=/(^|\s)#(\w+)/g,f=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(this,t),this.message=e||"",this.isAPrivateNote=s,this.isATweet=n}var e,n,s;return e=t,(n=[{key:"formatMessage",value:function(){var t=this.message;return this.isATweet&&!this.isAPrivateNote&&(t=(t=t.replace(l,"$1[@$2](http://twitter.com/$2)")).replace(h,"$1[#$2](https://twitter.com/hashtag/$2)")),u.render(t)}},{key:"formattedMessage",get:function(){return this.formatMessage()}},{key:"plainText",get:function(){return(new DOMParser).parseFromString(this.formattedMessage,"text/html").body.textContent||""}}])&&o(e.prototype,n),s&&o(e,s),t}(),p=f;e.a={methods:{formatMessage:function(t,e,n){return new p(t,e,n).formattedMessage},getPlainText:function(t,e){return new p(t,e).plainText},truncateMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.length<100?t:"".concat(t.slice(0,97),"...")},highlightContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=this.getPlainText(t),r=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return s.replace(new RegExp("(".concat(r,")"),"ig"),'<span class="'.concat(n,'">$1</span>'))}}}},738:function(t,e,n){"use strict";function s(t,e){e=e?Array.isArray(e)?e:[e]:[],Object.freeze(e);var n=t.renderer.rules.link_open||this.defaultRender;t.renderer.rules.link_open=function(t,s,r,a,i){var o=function(t,e){var n,s,r=t.attrs[t.attrIndex("href")][1];for(n=0;n<e.length;++n){if("function"!==typeof(s=e[n]).matcher)return s;if(s.matcher(r,s))return s}}(t[s],e),c=o&&o.attrs;return c&&function(t,e,n){Object.keys(n).forEach((function(s){var r,a=n[s];"className"===s&&(s="class"),(r=e[t].attrIndex(s))<0?e[t].attrPush([s,a]):e[t].attrs[r][1]=a}))}(s,t,c),n(t,s,r,a,i)}}s.defaultRender=function(t,e,n,s,r){return r.renderToken(t,e,n)},t.exports=s}}]);
//# sourceMappingURL=40-a7c95fbbfddf8dbddbce.chunk.js.map