(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1449:function(t,e,n){"use strict";var r=n(541),a=(window.chatwootConfig||{}).apiHost,s=void 0===a?"":a,o=r.a.create({baseURL:"".concat(s,"/")});e.a=o},1453:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return p}));n(600),n(9),n(24),n(26),n(11),n(37);var r=n(54),a=n(1449),s=n(381);function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function i(t,e,n,r,a,s,o){try{var i=t[s](o),u=i.value}catch(l){return void n(l)}i.done?e(u):Promise.resolve(u).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function o(t){i(s,r,a,o,u,"next",t)}function u(t){i(s,r,a,o,u,"throw",t)}o(void 0)}))}}var l=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,i,u,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.ssoAccountId,i=e.ssoConversationId,u=o(e,["ssoAccountId","ssoConversationId"]),t.prev=1,t.next=4,a.a.post("auth/sign_in",u);case 4:l=t.sent,Object(r.g)(l),Object(r.c)(),window.location=Object(s.a)({ssoAccountId:n,ssoConversationId:i,user:l.data.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),Object(r.i)(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.post("api/v1/accounts.json",{account_name:e.accountName.trim(),user_full_name:e.fullName.trim(),email:e.email,password:e.password,h_captcha_client_response:e.hCaptchaClientResponse});case 3:return n=t.sent,Object(r.g)(n),t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),Object(r.i)(t.t0);case 11:return t.abrupt("return",null);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.confirmationToken,t.prev=1,t.next=4,a.a.post("auth/confirmation",{confirmation_token:n});case 4:s=t.sent,Object(r.g)(s),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Object(r.i)(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=u(regeneratorRuntime.mark((function t(e){var n,s,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.resetPasswordToken,s=e.password,o=e.confirmPassword,t.prev=1,t.next=4,a.a.put("auth/password",{reset_password_token:n,password_confirmation:o,password:s});case 4:i=t.sent,Object(r.g)(i),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),Object(r.i)(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=u(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.email,t.abrupt("return",a.a.post("auth/password",{email:n}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},1455:function(t,e,n){"use strict";var r={props:{label:{type:String,default:""},name:{type:String,required:!0},icon:{type:String,default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""}}},a=n(8),s=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-1"},[t.label?e("label",{staticClass:"flex justify-between text-sm font-medium leading-6 text-slate-900 dark:text-white",class:{"text-red-500":t.hasError},attrs:{for:t.name}},[t._t("label",(function(){return[t._v("\n      "+t._s(t.label)+"\n    ")]})),t._v(" "),t._t("rightOfLabel")],2):t._e(),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex items-center relative w-full"},[t.icon?e("fluent-icon",{staticClass:"absolute left-2 transform text-slate-400 dark:text-slate-600 w-5 h-5",attrs:{size:"16",icon:t.icon}}):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.errorMessage&&t.hasError?e("span",{staticClass:"text-xs text-red-400 leading-2"},[t._v("\n      "+t._s(t.errorMessage)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.a=s.exports},1496:function(t,e,n){"use strict";n(51);var r={components:{Spinner:n(191).a},props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},buttonText:{type:String,default:""},buttonClass:{type:String,default:""},iconClass:{type:String,default:""},type:{type:String,default:"submit"}},computed:{computedClass:function(){return"\n        ".concat(this.disabled?"opacity-40 hover:bg-woot-500":"","\n        ").concat(this.buttonClass||" ","\n      ")}},methods:{onClick:function(){this.$emit("click")}}},a=n(8),s=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("button",{staticClass:"flex items-center w-full justify-center rounded-md bg-woot-500 py-3 px-3 text-base font-medium text-white shadow-sm hover:bg-woot-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-woot-500 cursor-pointer",class:t.computedClass,attrs:{type:t.type,"data-testid":"submit_button",disabled:t.disabled},on:{click:t.onClick}},[e("span",[t._v(t._s(t.buttonText))]),t._v(" "),t.iconClass?e("fluent-icon",{staticClass:"icon",attrs:{icon:t.iconClass}}):t._e(),t._v(" "),t.loading?e("spinner"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},1497:function(t,e,n){"use strict";n(57),n(80);var r={components:{WithLabel:n(1455).a},props:{label:{type:String,default:""},name:{type:String,required:!0},type:{type:String,default:"text"},tabindex:{type:Number,default:void 0},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},value:{type:[String,Number],default:""},icon:{type:String,default:""},hasError:{type:Boolean,default:!1},errorMessage:{type:String,default:""},dataTestid:{type:String,default:""},spacing:{type:String,default:"base",validator:function(t){return["base","compact"].includes(t)}}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},a=n(8),s=Object(a.a)(r,(function(){var t=this,e=t._self._c;return e("with-label",{attrs:{label:t.label,icon:t.icon,name:t.name,"has-error":t.hasError,"error-message":t.errorMessage},scopedSlots:t._u([{key:"rightOfLabel",fn:function(){return[t._t("default")]},proxy:!0}],null,!0)},[t._v(" "),e("input",{staticClass:"block w-full border-none rounded-md shadow-sm appearance-none outline outline-1 focus:outline-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 sm:text-sm sm:leading-6 dark:bg-slate-800",class:{"focus:outline-red-600 outline-red-600 dark:focus:outline-red-600 dark:outline-red-600":t.hasError,"outline-slate-200 dark:outline-slate-600 dark:focus:outline-woot-500 focus:outline-woot-500":!t.hasError,"px-3 py-3":"base"===t.spacing,"px-3 py-2 mb-0":"compact"===t.spacing,"pl-9":t.icon},attrs:{id:t.name,name:t.name,type:t.type,autocomplete:"off",tabindex:t.tabindex,required:t.required,placeholder:t.placeholder,"data-testid":t.dataTestid},domProps:{value:t.value},on:{input:t.onInput,blur:function(e){return t.$emit("blur")}}})])}),[],!1,null,null,null);e.a=s.exports},191:function(t,e,n){"use strict";var r={props:{size:{type:String,default:"small"},colorScheme:{type:String,default:""}},computed:{colorSchemeClasses:function(){return"primary"===this.colorScheme?"before:!border-t-woot-500":"warning"===this.colorScheme?"before:!border-t-yellow-500":"success"===this.colorScheme?"before:!border-t-success-500":this.colorScheme}}},a=(n(370),n(8)),s=Object(a.a)(r,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"spinner",class:`${t.size} ${t.colorSchemeClasses}`})}),[],!1,null,"25f4edd6",null);e.a=s.exports},2172:function(t,e,n){"use strict";n.r(e);n(26),n(11),n(23),n(30),n(25),n(31);var r=n(129),a=n(34),s=n(67),o=n(69),i=n(271),u=n(1497),l=n(1453),c=n(1496);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={components:{FormInput:u.a,SubmitButton:c.a},mixins:[i.a],setup:function(){return{v$:Object(r.a)()}},data:function(){return{credentials:{email:""},resetPassword:{message:"",showLoading:!1},error:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.mapGetters)({globalConfig:"globalConfig/get"})),validations:{credentials:{email:{required:o.f,email:o.b,minLength:Object(o.d)(4)}}},methods:{showAlertMessage:function(t){this.resetPassword.showLoading=!1,Object(s.a)(t)},submit:function(){var t=this;this.resetPassword.showLoading=!0,Object(l.c)(this.credentials).then((function(e){var n=t.$t("RESET_PASSWORD.API.SUCCESS_MESSAGE");e.data&&e.data.message&&(n=e.data.message),t.showAlertMessage(n)})).catch((function(e){var n,r,a=t.$t("RESET_PASSWORD.API.ERROR_MESSAGE");null!==e&&void 0!==e&&null!==(n=e.response)&&void 0!==n&&null!==(r=n.data)&&void 0!==r&&r.message&&(a=e.response.data.message),t.showAlertMessage(a)}))}}},m=p,v=n(8),b=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col justify-center w-full min-h-full py-12 bg-woot-25 sm:px-6 lg:px-8 dark:bg-slate-900"},[e("form",{staticClass:"bg-white shadow sm:mx-auto sm:w-full sm:max-w-lg dark:bg-slate-800 p-11 sm:shadow-lg sm:rounded-lg",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("h1",{staticClass:"mb-1 text-2xl font-medium tracking-tight text-left text-slate-900 dark:text-white"},[t._v("\n      "+t._s(t.$t("RESET_PASSWORD.TITLE"))+"\n    ")]),t._v(" "),e("p",{staticClass:"mb-4 text-sm font-normal leading-6 tracking-normal text-slate-600 dark:text-woot-50"},[t._v("\n      "+t._s(t.useInstallationName(t.$t("RESET_PASSWORD.DESCRIPTION"),t.globalConfig.installationName))+"\n    ")]),t._v(" "),e("div",{staticClass:"space-y-5"},[e("form-input",{attrs:{name:"email_address","has-error":t.v$.credentials.email.$error,"error-message":t.$t("RESET_PASSWORD.EMAIL.ERROR"),placeholder:t.$t("RESET_PASSWORD.EMAIL.PLACEHOLDER")},on:{input:t.v$.credentials.email.$touch},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email","string"===typeof e?e.trim():e)},expression:"credentials.email"}}),t._v(" "),e("SubmitButton",{attrs:{disabled:t.v$.credentials.email.$invalid||t.resetPassword.showLoading,"button-text":t.$t("RESET_PASSWORD.SUBMIT"),loading:t.resetPassword.showLoading}})],1),t._v(" "),e("p",{staticClass:"mt-4 -mb-1 text-sm text-slate-600 dark:text-woot-50"},[t._v("\n      "+t._s(t.$t("RESET_PASSWORD.GO_BACK_TO_LOGIN"))+"\n      "),e("router-link",{staticClass:"text-link",attrs:{to:"/auth/login"}},[t._v("\n        "+t._s(t.$t("COMMON.CLICK_HERE"))+".\n      ")])],1)])])}),[],!1,null,null,null);e.default=b.exports},271:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(52),n(73);var r=function(t,e){return t&&e?t.replace(/Chatwoot/g,e):t};e.a={methods:{useInstallationName:r}}},282:function(t,e,n){var r=n(53),a=Math.floor,s="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,l,c){var d=n+t.length,f=u.length,p=i;return void 0!==l&&(l=r(l),p=o),s.call(c,p,(function(r,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":o=l[s.slice(1,-1)];break;default:var i=+s;if(0===i)return r;if(i>f){var c=a(i/10);return 0===c?r:c<=f?void 0===u[c-1]?s.charAt(1):u[c-1]+s.charAt(1):r}o=u[i-1]}return void 0===o?"":o}))}},310:function(t,e,n){},370:function(t,e,n){"use strict";n(310)},67:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o}));var r=n(6),a=n(55),s=function(){var t=Object(r.getCurrentInstance)();if(!t)throw new Error("must be called in setup");return t.proxy.$track},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;a.a.emit("newToastMessage",{message:t,action:e})}},73:function(t,e,n){"use strict";var r=n(162),a=n(28),s=n(49),o=n(77),i=n(61),u=n(181),l=n(282),c=n(163),d=Math.max,f=Math.min;r("replace",2,(function(t,e,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,v=p?"$":"$0";return[function(n,r){var a=i(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!p&&m||"string"===typeof r&&-1===r.indexOf(v)){var i=n(e,t,this,r);if(i.done)return i.value}var b=a(t),g=String(this),h="function"===typeof r;h||(r=String(r));var w=b.global;if(w){var S=b.unicode;b.lastIndex=0}for(var _=[];;){var x=c(b,g);if(null===x)break;if(_.push(x),!w)break;""===String(x[0])&&(b.lastIndex=u(g,s(b.lastIndex),S))}for(var y,O="",E=0,C=0;C<_.length;C++){x=_[C];for(var k=String(x[0]),j=d(f(o(x.index),g.length),0),R=[],P=1;P<x.length;P++)R.push(void 0===(y=x[P])?y:String(y));var $=x.groups;if(h){var A=[k].concat(R,j,g);void 0!==$&&A.push($);var I=String(r.apply(void 0,A))}else I=l(k,g,j,R,$,r);j>=E&&(O+=g.slice(E,j)+I,E=j+k.length)}return O+g.slice(E)}]}))}}]);
//# sourceMappingURL=45-f2cee7b324e8a5960f7a.chunk.js.map