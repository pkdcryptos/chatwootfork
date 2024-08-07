(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1427:function(e,t,n){"use strict";n.r(t);n(37),n(89),n(9),n(24);var s=n(736),r=n(248),a={__name:"Header",props:{responseSourcePath:{type:String,required:!0},responseSourceName:{type:String,required:!0}},setup:function(e){return{__sfc:!0}}},o=n(8),i=Object(o.a)(a,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"flex items-center px-8 py-4 bg-white border-b border-slate-100",attrs:{role:"banner"}},[t("a",{staticClass:"text-woot-500 hover:underline mr-4",attrs:{href:e.responseSourcePath}},[e._v("\n    Back\n  ")]),e._v(" "),t("div",{staticClass:"border border-solid border-slate-100 text-slate-700 mr-4 p-2 rounded-full"},[t("svg",{attrs:{width:"24",height:"24"}},[t("use",{attrs:{"xlink:href":"#icon-mist-fill"}})])]),e._v(" "),t("div",{staticClass:"flex flex-col h-14 justify-center"},[t("h1",{staticClass:"text-base font-medium text-slate-900",attrs:{id:"page-title"}},[e._v("\n      Robin AI playground\n    ")]),e._v(" "),t("p",{staticClass:"text-sm text-slate-600"},[e._v("\n      Chat with the source\n      "),t("span",{staticClass:"font-medium"},[e._v("\n        "+e._s(e.responseSourceName)+"\n      ")]),e._v("\n      and evaluate it\u2019s efficiency.\n    ")])])])}),[],!1,null,null,null).exports,u={__name:"UserMessage",props:{message:{type:String,required:!0}},setup:function(e){return{__sfc:!0}}},c=Object(o.a)(u,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"w-full mb-4 flex items-center justify-end"},[t("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.message,expression:"message"}],staticClass:"px-4 py-3 bg-woot-400 text-white text-sm rounded-md inline-block"})])}),[],!1,null,null,null).exports,l={__name:"BotMessage",props:{message:{type:String,required:!0}},setup:function(e){return{__sfc:!0}}},d=Object(o.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"w-full mb-4 flex items-center justify-start"},[t("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.message,expression:"message"}],staticClass:"px-4 py-3 bg-white max-w-4xl text-slate-700 leading-6 text-sm rounded-md inline-block border border-slate-100"})])}),[],!1,null,null,null).exports,f=n(2081),p=n.n(f),g={__name:"TypingIndicator",setup:function(e){return{__sfc:!0,TypingIndicator:p.a}}};function m(e,t,n,s,r,a,o){try{var i=e[a](o),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(s,r)}var h={components:{PlaygroundHeader:i,UserMessage:c,BotMessage:d,TypingIndicator:Object(o.a)(g,(function(){var e=this._self._c;return e("div",{staticClass:"w-full mb-4 flex items-center justify-start"},[e("div",{staticClass:"px-2 py-2 bg-white max-w-4xl text-slate-700 leading-6 text-sm rounded-md inline-block border border-slate-100"},[e("img",{staticClass:"h-4",attrs:{src:this._self._setupProxy.TypingIndicator,alt:"TypingIndicator"}})])])}),[],!1,null,null,null).exports},mixins:[s.a,r.a],props:{componentData:{type:Object,default:function(){return{}}}},data:function(){return{messages:[],messageContent:"",isWaiting:!1}},computed:{previousMessages:function(){return this.messages.map((function(e){return{type:e.type,message:e.content}}))}},mounted:function(){this.focusInput()},methods:{getKeyboardEvents:function(){var e=this;return{"$mod+Enter":{action:function(){e.onMessageSend()},allowOnFocusedInput:!0}}},focusInput:function(){this.$refs.messageInput.focus()},onMessageSend:function(){this.addMessageToData("User",this.messageContent),this.sendMessageToServer(this.messageContent)},scrollToLastMessage:function(){var e=this;this.$nextTick((function(){var t=e.messages[e.messages.length-1].id;document.getElementById("message-".concat(t)).scrollIntoView({behavior:"smooth"})}))},addMessageToData:function(e,t){this.messages.push({id:this.messages.length,type:e,content:t}),this.scrollToLastMessage()},sendMessageToServer:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){var s,r,a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.messageContent="",n.isWaiting=!0,s=document.querySelector('meta[name="csrf-token"]').getAttribute("content"),t.prev=3,t.next=6,fetch(window.location.href,{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-Token":s},body:JSON.stringify({message:e,previous_messages:n.previousMessages}),credentials:"include"});case 6:if((r=t.sent).ok){t.next=9;break}throw new Error("HTTP error! status: ".concat(r.status));case 9:return t.next=11,r.json();case 11:a=t.sent,o=a.message,n.addMessageToData("Bot",o),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),n.addMessageToData("bot","Error: Could not retrieve response. Please check the console for more details.");case 19:return t.prev=19,n.isWaiting=!1,n.focusInput(),t.finish(19);case 23:case"end":return t.stop()}}),t,null,[[3,16,19,23]])})),function(){var e=this,n=arguments;return new Promise((function(s,r){var a=t.apply(e,n);function o(e){m(a,s,r,o,i,"next",e)}function i(e){m(a,s,r,o,i,"throw",e)}o(void 0)}))})()}}},v=h,y=Object(o.a)(v,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"h-full w-full flex flex-col bg-slate-25"},[t("PlaygroundHeader",{attrs:{"response-source-name":e.componentData.responseSourceName,"response-source-path":e.componentData.responseSourcePath}}),e._v(" "),t("div",{ref:"chatContainer",staticClass:"flex-1 overflow-auto px-8 py-4"},[e._l(e.messages,(function(n){return t("div",{key:n.id,attrs:{id:`message-${n.id}`}},["User"===n.type?t("UserMessage",{attrs:{message:e.formatMessage(n.content)}}):t("BotMessage",{attrs:{message:e.formatMessage(n.content)}})],1)})),e._v(" "),e.isWaiting?t("TypingIndicator"):e._e()],2),e._v(" "),t("div",{staticClass:"w-full px-8 py-6"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageContent,expression:"messageContent"}],ref:"messageInput",staticClass:"resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border !outline-2 border-slate-100 focus:ring-woot-500 focus:border-woot-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-woot-500 dark:focus:border-woot-500",attrs:{rows:4,placeholder:"Type a message... [CMD/CTRL + Enter to send]",autofocus:"",autocomplete:"off"},domProps:{value:e.messageContent},on:{input:function(t){t.target.composing||(e.messageContent=t.target.value)}}})])],1)}),[],!1,null,null,null);t.default=y.exports},2081:function(e,t,n){e.exports=n.p+"media/superadmin_pages/components/playground/assets/typing-929e3aeb589b7668d0b4ff57f73e17e3.gif"},248:function(e,t,n){"use strict";n(25),n(26);var s=n(274),r=n(522),a=[];t.a={mounted:function(){var e=this.getKeyboardEvents();if(e){var t=this.wrapEventsInKeybindingsHandler(e),n=Object(r.a)(t);this.addEventHandler(n)}},beforeDestroy:function(){var e;if(this.$el&&null!==(e=this.$el.dataset)&&void 0!==e&&e.keydownHandlerIndex){var t=a[this.$el.dataset.keydownHandlerIndex];document.removeEventListener("keydown",t)}},methods:{addEventHandler:function(e){var t=a.push(e)-1,n=this.$el;n&&n.dataset&&(document.addEventListener("keydown",e),n.dataset.keydownHandlerIndex=t)},getKeyboardEvents:function(){return null},wrapEventsInKeybindingsHandler:function(e){var t=this,n={};return Object.keys(e).forEach((function(s){n[s]=t.keydownWrapper(e[s])})),n},keydownWrapper:function(e){return function(t){var n="function"===typeof e?e:e.action,r="function"!==typeof e&&e.allowOnFocusedInput;Object(s.d)(t)&&(Object(s.e)(t)&&t.target.blur(),!r)||n(t)}}}}},274:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return u}));n(80),n(103);var s=function(e){return"Enter"===e.key},r=function(e){return"Escape"===e.key},a=function(e){return e.metaKey},o=function(e){return s(e)&&!a(e)&&!function(e){return e.shiftKey}(e)},i=function(e){return a(e)&&s(e)},u=function(e){var t,n=e.target||document.activeElement;return!!("INPUT"===(null===n||void 0===n?void 0:n.tagName)||"NINJA-KEYS"===(null===n||void 0===n?void 0:n.tagName)||"TEXTAREA"===(null===n||void 0===n?void 0:n.tagName)||"true"===(null===n||void 0===n?void 0:n.contentEditable)||null!==n&&void 0!==n&&null!==(t=n.className)&&void 0!==t&&t.includes("ProseMirror"))}},736:function(e,t,n){"use strict";n(68),n(52),n(73),n(735),n(148),n(16),n(9),n(18),n(20),n(208),n(25);var s=n(738),r=n.n(s),a=(n(369),/mention:\/\/(user|team)\/(\d+)\/(.+)/gm);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var u=function(e){e.children.forEach((function(e){"image"===e.type&&function(e){var t=e.attrGet("src");if(t){var n=new URL(t).searchParams.get("cw_image_height");n&&e.attrSet("style","height: ".concat(n,";"))}}(e)}))},c=n(629)({html:!1,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20}).use((function(e){e.renderer.rules.mention=function(e,t){return'<span class="prosemirror-mention-node">'.concat(e[t].content,"</span>")},e.inline.ruler.before("link","mention",(function(e,t){var n,s,r,o,i,u,c="",l=e.posMax;return 91===e.src.charCodeAt(e.pos)&&(r=e.pos+1,!((s=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)&&(n=e.src.slice(r,s),(o=s+1)<l&&40===e.src.charCodeAt(o)&&(o+=1,(i=e.md.helpers.parseLinkDestination(e.src,o,e.posMax)).ok&&(c=e.md.normalizeLink(i.str),e.md.validateLink(c)?o=i.pos:c=""),o+=1),!!c.match(new RegExp(a))&&(t||(e.pos=r,e.posMax=s,(u=e.push("mention","")).href=c,u.content=n),e.pos=o,e.posMax=l,!0)))}))})).use((function(e){e.core.ruler.after("inline","add-image-height",(function(e){e.tokens.forEach((function(e){"inline"===e.type&&u(e)}))}))})).use(r.a,{attrs:{class:"link",rel:"noreferrer noopener nofollow",target:"_blank"}}),l=/(^|[^@\w])@(\w{1,15})\b/g,d=/(^|\s)#(\w+)/g,f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];o(this,e),this.message=t||"",this.isAPrivateNote=s,this.isATweet=n}var t,n,s;return t=e,(n=[{key:"formatMessage",value:function(){var e=this.message;return this.isATweet&&!this.isAPrivateNote&&(e=(e=e.replace(l,"$1[@$2](http://twitter.com/$2)")).replace(d,"$1[#$2](https://twitter.com/hashtag/$2)")),c.render(e)}},{key:"formattedMessage",get:function(){return this.formatMessage()}},{key:"plainText",get:function(){return(new DOMParser).parseFromString(this.formattedMessage,"text/html").body.textContent||""}}])&&i(t.prototype,n),s&&i(t,s),e}(),p=f;t.a={methods:{formatMessage:function(e,t,n){return new p(e,t,n).formattedMessage},getPlainText:function(e,t){return new p(e,t).plainText},truncateMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<100?e:"".concat(e.slice(0,97),"...")},highlightContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=this.getPlainText(e),r=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return s.replace(new RegExp("(".concat(r,")"),"ig"),'<span class="'.concat(n,'">$1</span>'))}}}}}]);
//# sourceMappingURL=78-ff40d75a7ee23ee0e7f4.chunk.js.map