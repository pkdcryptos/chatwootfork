(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{2617:function(t,e,s){"use strict";var n=s(250),r={__name:"BackButton",props:{backUrl:{type:[String,Object],default:""},buttonLabel:{type:String,default:""},compact:{type:Boolean,default:!1}},setup:function(t){var e=t,s=e.compact?"text-sm text-slate-600 dark:text-slate-300":"text-base text-woot-500 dark:text-woot-500";return{__sfc:!0,props:e,goBack:function(){""!==e.backUrl?n.a.push(e.backUrl):n.a.go(-1)},buttonStyleClass:s}}},i=s(8),o=Object(i.a)(r,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("button",{staticClass:"flex items-center font-normal p-0 cursor-pointer",class:s.buttonStyleClass,on:{"!click":function(t){return s.goBack.apply(null,arguments)}}},[e("fluent-icon",{staticClass:"-ml-1",attrs:{icon:"chevron-left"}}),t._v("\n  "+t._s(t.buttonLabel||t.$t("GENERAL_SETTINGS.BACK"))+"\n")],1)}),[],!1,null,null,null);e.a=o.exports},2775:function(t,e,s){"use strict";var n=s(284),r=s(6),i={__name:"CustomBrandPolicyWrapper",props:{showOnCustomBrandedInstance:{type:Boolean,default:!0}},setup:function(t){var e=t,s=Object(n.b)(),i=s["globalConfig/isACustomBrandedInstance"],o=Object(r.computed)((function(){return e.showOnCustomBrandedInstance||!i.value}));return{__sfc:!0,props:e,getters:s,isACustomBrandedInstance:i,shouldShowContent:o}}},o=s(8),a=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t._self._setupProxy.shouldShowContent?e("div",[t._t("default")],2):t._e()}),[],!1,null,null,null).exports,l={channel_email:"https://chwt.app/hc/email",channel_facebook:"https://chwt.app/hc/fb",help_center:"https://chwt.app/hc/help-center",agent_bots:"https://chwt.app/hc/agent-bots",team_management:"https://chwt.app/hc/teams",labels:"https://chwt.app/hc/labels",custom_attributes:"https://chwt.app/hc/custom-attributes",canned_responses:"https://chwt.app/hc/canned",integrations:"https://chwt.app/hc/integrations",campaigns:"https://chwt.app/hc/campaigns",reports:"https://chwt.app/hc/reports",message_reply_to:"https://chwt.app/hc/reply-to",sla:"https://chwt.app/hc/sla",dashboard_apps:"https://chwt.app/hc/dashboard-apps"};var u=s(2617),c={__name:"BaseSettingsHeader",props:{title:{type:String,required:!0},description:{type:String,required:!0},iconName:{type:String,default:""},linkText:{type:String,default:""},featureName:{type:String,default:""},backButtonLabel:{type:String,default:""}},setup:function(t){var e;return{__sfc:!0,props:t,helpURL:(e=t.featureName,l[e]),openInNewTab:function(t){t&&window.open(t,"_blank","noopener noreferrer")},CustomBrandPolicyWrapper:a,BackButton:u.a}}},p=Object(o.a)(c,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"flex flex-col items-start w-full gap-2 pt-4"},[t.backButtonLabel?e(s.BackButton,{attrs:{compact:"","button-label":t.backButtonLabel}}):t._e(),t._v(" "),e("div",{staticClass:"flex items-center justify-between w-full gap-4"},[e("div",{staticClass:"flex items-center gap-3"},[t.iconName?e("div",{staticClass:"flex items-center w-10 h-10 p-1 rounded-full bg-woot-25/60 dark:bg-woot-900/60"},[e("div",{staticClass:"flex items-center justify-center w-full h-full rounded-full bg-woot-75/70 dark:bg-woot-800/40"},[e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"14",icon:t.iconName,type:"outline"}})],1)]):t._e(),t._v(" "),e("h1",{staticClass:"text-2xl font-semibold font-interDisplay tracking-[0.3px] text-slate-900 dark:text-slate-25"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"hidden gap-2 sm:flex"},[t._t("actions")],2)]),t._v(" "),e("div",{staticClass:"flex flex-col gap-3 text-slate-600 dark:text-slate-300 w-full"},[e("p",{staticClass:"mb-0 text-base font-normal line-clamp-5 sm:line-clamp-none max-w-3xl tracking-[-0.1px]"},[t._t("description",(function(){return[t._v(t._s(t.description))]}))],2),t._v(" "),e(s.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[s.helpURL&&t.linkText?e("a",{staticClass:"sm:inline-flex hidden gap-1 w-fit items-center text-woot-500 dark:text-woot-500 text-sm font-medium hover:underline",attrs:{href:s.helpURL,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.linkText)+"\n        "),e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"16",icon:"chevron-right",type:"outline"}})],1):t._e()])],1),t._v(" "),e("div",{staticClass:"flex items-start justify-start w-full gap-3 sm:hidden flex-wrap"},[t._t("actions"),t._v(" "),e(s.CustomBrandPolicyWrapper,{attrs:{"show-on-custom-branded-instance":!1}},[s.helpURL&&t.linkText?e("woot-button",{staticClass:"flex-row-reverse rounded-md min-w-0 !bg-slate-50 !text-slate-900 dark:!text-white dark:!bg-slate-800",attrs:{"color-scheme":"secondary",icon:"arrow-outwards"},on:{click:function(t){return s.openInNewTab(s.helpURL)}}},[t._v("\n        "+t._s(t.linkText)+"\n      ")]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.a=p.exports},2795:function(t,e,s){"use strict";var n=s(27),r=s(74),i=s(221),o=s(24),a=s(64),l=s(141),u=s(222),c=s(47);n({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=l(this,a("Promise")),s="function"==typeof t;return this.then(s?function(s){return u(e,t()).then((function(){return s}))}:t,s?function(s){return u(e,t()).then((function(){throw s}))}:t)}}),r||"function"!=typeof i||i.prototype.finally||c(i.prototype,"finally",a("Promise").prototype.finally)},2802:function(t,e,s){s(27)({target:"Number",stat:!0},{isNaN:function(t){return t!=t}})},2870:function(t,e,s){"use strict";var n={__name:"SettingsLayout",props:{isLoading:{type:Boolean,default:!1},loadingMessage:{type:String,default:""}},setup:function(t){return{__sfc:!0}}},r=s(8),i=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col w-full h-full gap-10 font-inter"},[t._t("header"),t._v(" "),e("div",[t.isLoading?t._t("loading",(function(){return[e("woot-loading-state",{attrs:{message:t.loadingMessage}})]})):t._t("body")],2)],2)}),[],!1,null,null,null);e.a=i.exports},3313:function(t,e,s){"use strict";s.r(e);s(44),s(10),s(28),s(2795),s(51),s(13),s(9),s(11),s(15),s(12),s(16),s(37);var n=s(34),r=s(67),i=(s(36),s(57),s(313),s(280)),o=s(69),a={name:{required:o.f,minLength:Object(o.d)(2)},thresholdTime:{decimal:o.a,minValue:Object(o.e)(.001)}},l=(s(2802),s(129)),u={props:{threshold:{type:Number,default:null},thresholdUnit:{type:String,default:"Minutes"},label:{type:String,default:""},placeholder:{type:String,default:""}},setup:function(){return{v$:Object(l.a)()}},data:function(){return{thresholdTime:this.threshold||"",thresholdUnitValue:this.thresholdUnit,options:[{value:"Minutes",label:"minutes"},{value:"Hours",label:"hours"},{value:"Days",label:"days"}]}},validations:a,computed:{thresholdTimeErrorMessage:function(){var t="";return this.v$.thresholdTime.$error&&(this.v$.thresholdTime.numeric&&this.v$.thresholdTime.minValue||(t=this.$t("SLA.FORM.THRESHOLD_TIME.INVALID_FORMAT_ERROR"))),t}},watch:{threshold:{immediate:!0,handler:function(t){Number.isNaN(t)||(this.thresholdTime=t)}},thresholdUnit:{immediate:!0,handler:function(t){this.thresholdUnitValue=t}}},methods:{onThresholdUnitChange:function(){this.$emit("unit",this.thresholdUnitValue)},onThresholdTimeChange:function(){this.v$.thresholdTime.$touch();var t=this.v$.thresholdTime.$invalid;this.$emit("isInValid",t),this.$emit("input",Number(this.thresholdTime))}}},c=s(8);function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){f(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function f(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var m={components:{SlaTimeInput:Object(c.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center w-full gap-3"},[e("woot-input",{staticClass:"flex-grow",class:{error:t.v$.thresholdTime.$error},attrs:{styles:{borderRadius:"12px",padding:"6px 12px",fontSize:"14px"},label:t.label,placeholder:t.placeholder,error:t.thresholdTimeErrorMessage},on:{input:t.onThresholdTimeChange},model:{value:t.thresholdTime,callback:function(e){t.thresholdTime=e},expression:"thresholdTime"}}),t._v(" "),e("div",{staticClass:"mt-7"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.thresholdUnitValue,expression:"thresholdUnitValue"}],staticClass:"px-4 py-1.5 min-w-[6.5rem] h-10 text-sm font-medium border-0 bg-slate-50 rounded-xl hover:cursor-pointer pr-7 text-slate-800 dark:text-slate-300",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.thresholdUnitValue=e.target.multiple?s:s[0]},t.onThresholdUnitChange]}},t._l(t.options,(function(s,n){return e("option",{key:n,domProps:{value:s.value}},[t._v("\n        "+t._s(s.label)+"\n      ")])})),0)])],1)}),[],!1,null,null,null).exports},props:{selectedResponse:{type:Object,default:function(){}},submitLabel:{type:String,required:!0}},setup:function(){return{v$:Object(l.a)()}},data:function(){return{name:"",description:"",isSlaTimeInputsInvalid:!1,slaTimeInputsValidation:{},slaTimeInputs:[{threshold:null,unit:"Minutes",label:"SLA.FORM.FIRST_RESPONSE_TIME.LABEL",placeholder:"SLA.FORM.FIRST_RESPONSE_TIME.PLACEHOLDER"},{threshold:null,unit:"Minutes",label:"SLA.FORM.NEXT_RESPONSE_TIME.LABEL",placeholder:"SLA.FORM.NEXT_RESPONSE_TIME.PLACEHOLDER"},{threshold:null,unit:"Minutes",label:"SLA.FORM.RESOLUTION_TIME.LABEL",placeholder:"SLA.FORM.RESOLUTION_TIME.PLACEHOLDER"}],onlyDuringBusinessHours:!1}},validations:a,computed:d(d({},Object(n.mapGetters)({uiFlags:"sla/getUIFlags"})),{},{isSubmitDisabled:function(){return this.v$.name.$invalid||this.isSlaTimeInputsInvalid||this.uiFlags.isUpdating},slaNameErrorMessage:function(){var t="";return this.v$.name.$error&&(this.v$.name.required?this.v$.name.minLength||(t=this.$t("SLA.FORM.NAME.MINIMUM_LENGTH_ERROR")):t=this.$t("SLA.FORM.NAME.REQUIRED_ERROR")),t}}),mounted:function(){this.selectedResponse&&this.setFormValues()},methods:{onClose:function(){this.$emit("close")},setFormValues:function(){var t=this.selectedResponse,e=t.name,s=t.description,n=t.first_response_time_threshold,r=t.next_response_time_threshold,o=t.resolution_time_threshold,a=t.only_during_business_hours;this.name=e,this.description=s,this.onlyDuringBusinessHours=a;var l=[n,r,o];this.slaTimeInputs.forEach((function(t,e){var s=Object(i.a)(l[e],{minute:"Minutes",hour:"Hours",day:"Days"});t.threshold=s.time,t.unit=s.unit}))},updateThreshold:function(t,e){this.slaTimeInputs[t].threshold=e},updateUnit:function(t,e){this.slaTimeInputs[t].unit=e},onSubmit:function(){var t={name:this.name,description:this.description,first_response_time_threshold:this.convertToSeconds(0),next_response_time_threshold:this.convertToSeconds(1),resolution_time_threshold:this.convertToSeconds(2),only_during_business_hours:this.onlyDuringBusinessHours};this.$emit("submit",t)},convertToSeconds:function(t){var e=this.slaTimeInputs[t],s=e.threshold,n=e.unit;if(null===s||0===s)return null;return Number(s*({Minutes:60,Hours:3600,Days:86400}[n]||1))},handleIsInvalid:function(t,e){this.slaTimeInputsValidation=d(d({},this.slaTimeInputsValidation),{},f({},t,e)),this.checkValidationState()},checkValidationState:function(){var t=Object.values(this.slaTimeInputsValidation).some((function(t){return t}));this.isSlaTimeInputsInvalid=t}}},h=Object(c.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("form",{staticClass:"flex flex-wrap mx-0",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("woot-input",{staticClass:"w-full",class:{error:t.v$.name.$error},attrs:{styles:{borderRadius:"12px",padding:"6px 12px",fontSize:"14px"},label:t.$t("SLA.FORM.NAME.LABEL"),placeholder:t.$t("SLA.FORM.NAME.PLACEHOLDER"),error:t.slaNameErrorMessage},on:{input:t.v$.name.$touch},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),e("woot-input",{staticClass:"w-full",attrs:{styles:{borderRadius:"12px",padding:"6px 12px",fontSize:"14px"},label:t.$t("SLA.FORM.DESCRIPTION.LABEL"),placeholder:t.$t("SLA.FORM.DESCRIPTION.PLACEHOLDER")},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),t._l(t.slaTimeInputs,(function(s,n){return e("sla-time-input",{key:n,attrs:{threshold:s.threshold,"threshold-unit":s.unit,label:t.$t(s.label),placeholder:t.$t(s.placeholder)},on:{input:function(e){return t.updateThreshold(n,e)},unit:function(e){return t.updateUnit(n,e)},isInValid:function(e){return t.handleIsInvalid(n,e)}}})})),t._v(" "),e("div",{staticClass:"mt-3 flex h-10 items-center text-sm w-full gap-2 border border-solid border-slate-200 dark:border-slate-600 px-3 py-1.5 rounded-xl justify-between"},[e("span",{staticClass:"text-slate-700 dark:text-slate-200",attrs:{for:"sla_bh"}},[t._v("\n        "+t._s(t.$t("SLA.FORM.BUSINESS_HOURS.PLACEHOLDER"))+"\n      ")]),t._v(" "),e("woot-switch",{attrs:{id:"sla_bh"},model:{value:t.onlyDuringBusinessHours,callback:function(e){t.onlyDuringBusinessHours=e},expression:"onlyDuringBusinessHours"}})],1),t._v(" "),e("div",{staticClass:"flex items-center justify-end w-full gap-2 mt-8"},[e("woot-button",{staticClass:"px-4 rounded-xl button clear outline-woot-200/50 outline",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n        "+t._s(t.$t("SLA.FORM.CANCEL"))+"\n      ")]),t._v(" "),e("woot-button",{staticClass:"px-4 rounded-xl",attrs:{"is-disabled":t.isSubmitDisabled,"is-loading":t.uiFlags.isUpdating}},[t._v("\n        "+t._s(t.submitLabel)+"\n      ")])],1)],2)])}),[],!1,null,null,null);function _(t,e,s,n,r,i,o){try{var a=t[i](o),l=a.value}catch(u){return void s(u)}a.done?e(l):Promise.resolve(l).then(n,r)}function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function x(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var v={components:{SlaForm:h.exports},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){x(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(n.mapGetters)({uiFlags:"sla/getUIFlags"})),methods:{onClose:function(){this.$emit("close")},addSLA:function(t){var e,s=this;return(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.$store.dispatch("sla/create",t);case 3:Object(r.a)(s.$t("SLA.ADD.API.SUCCESS_MESSAGE")),s.onClose(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.message||s.$t("SLA.ADD.API.ERROR_MESSAGE"),Object(r.a)(n);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,s=arguments;return new Promise((function(n,r){var i=e.apply(t,s);function o(t){_(i,n,r,o,a,"next",t)}function a(t){_(i,n,r,o,a,"throw",t)}o(void 0)}))})()}}},S=v,g=Object(c.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.$t("SLA.ADD.TITLE"),"header-content":t.$t("SLA.ADD.DESC")}}),t._v(" "),e("sla-form",{attrs:{"submit-label":t.$t("SLA.FORM.CREATE")},on:{submit:t.addSLA,close:t.onClose}})],1)}),[],!1,null,null,null).exports,y=s(2870),w={__name:"BaseSettingsListItem",props:{title:{type:String,default:""},description:{type:String,default:""}},setup:function(t){return{__sfc:!0}}},L=Object(c.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex relative flex-col sm:flex-row p-4 gap-4 sm:p-6 justify-between shadow-sm group bg-white border border-solid rounded-xl dark:bg-slate-800 border-slate-75 dark:border-slate-700/50 w-full"},[t._t("leftSection",(function(){return[e("div",{staticClass:"flex flex-col min-w-0 items-start gap-3 max-w-[480px] w-full"},[e("div",{staticClass:"flex items-center justify-between w-full gap-3 sm:justify-normal whitespace-nowrap"},[e("h3",{staticClass:"justify-between text-sm font-medium truncate w-fit sm:justify-normal text-slate-900 dark:text-slate-25"},[t._t("title",(function(){return[t._v("\n            "+t._s(t.title)+"\n          ")]}))],2),t._v(" "),t._t("label")],2),t._v(" "),e("p",{staticClass:"text-base text-slate-600 dark:text-slate-300 max-w-[400px] w-full line-clamp-2"},[t._t("description",(function(){return[t._v("\n          "+t._s(t.description)+"\n        ")]}))],2)])]})),t._v(" "),t._t("rightSection"),t._v(" "),t.$slots.actions?e("div",{staticClass:"absolute flex-col items-center hidden gap-1 border-none ltr:-right-3 rtl:-left-3 top-3 group-hover:flex"},[t._t("actions")],2):t._e()],2)}),[],!1,null,null,null).exports,A={__name:"SLAResponseTime",props:{responseType:{type:String,default:""},responseTime:{type:String,default:""}},setup:function(t){return{__sfc:!0}}},O=Object(c.a)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-row items-start w-full h-full gap-1 sm:items-end sm:px-6 sm:py-2 sm:gap-2 sm:flex-col"},[e("span",{staticClass:"inline-flex items-center gap-1 tracking-[-0.6%] text-sm ltr:pl-1.5 sm:ltr:pl-0 rtl:pr-1.5 sm:rtl:pr-0 text-slate-600 dark:text-slate-300"},[e("fluent-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.$t(`SLA.LIST.RESPONSE_TYPES.${t.responseType}`),expression:"$t(`SLA.LIST.RESPONSE_TYPES.${responseType}`)",modifiers:{left:!0}}],staticClass:"flex-shrink-0 hidden text-sm font-normal sm:flex sm:font-medium text-slate-500 dark:text-slate-500",attrs:{size:"14",icon:"information",type:"outline"}}),t._v("\n    "+t._s(t.$t(`SLA.LIST.RESPONSE_TYPES.SHORT_HAND.${t.responseType}`))+"\n    "),e("span",{staticClass:"flex sm:hidden"},[t._v(":")])],1),t._v(" "),e("span",{staticClass:"text-sm sm:text-2xl font-medium tracking-[-1.5%] text-slate-900 dark:text-slate-25"},[t._v("\n    "+t._s(t.responseTime)+"\n  ")])])}),[],!1,null,null,null).exports,E={__name:"SLABusinessHoursLabel",props:{hasBusinessHours:{type:Boolean,required:!0}},setup:function(t){return{__sfc:!0}}},C=Object(c.a)(E,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"inline-flex items-center min-w-0 gap-1 px-1.5 sm:px-2 py-1 border border-solid rounded-lg border-slate-75 dark:border-slate-700/50"},[e("fluent-icon",{staticClass:"flex-shrink-0",class:t.hasBusinessHours?"text-slate-600 dark:text-slate-400":"text-slate-300 dark:text-slate-700",attrs:{size:"14",icon:t.hasBusinessHours?"alarm-on":"alarm-off",type:"outline"}}),t._v(" "),e("span",{staticClass:"hidden text-xs tracking-[0.2%] font-normal truncate sm:block",class:t.hasBusinessHours?"text-slate-600 dark:text-slate-400":"text-slate-300 dark:text-slate-700"},[t._v("\n    "+t._s(t.hasBusinessHours?t.$t("SLA.LIST.BUSINESS_HOURS_ON"):t.$t("SLA.LIST.BUSINESS_HOURS_OFF"))+"\n  ")])],1)}),[],!1,null,null,null).exports,T={__name:"SLAListItem",props:{slaName:{type:String,required:!0},description:{type:String,required:!0},firstResponse:{type:String,required:!0},nextResponse:{type:String,required:!0},resolutionTime:{type:String,required:!0},hasBusinessHours:{type:Boolean,required:!0},isLoading:{type:Boolean,default:!1}},setup:function(t){return{__sfc:!0,BaseSettingsListItem:L,SLAResponseTime:O,SLABusinessHoursLabel:C}}},k=Object(c.a)(T,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e(s.BaseSettingsListItem,{staticClass:"sm:divide-x sm:divide-slate-75 sm:dark:divide-slate-700/50",attrs:{title:t.slaName,description:t.description},scopedSlots:t._u([{key:"label",fn:function(){return[e(s.SLABusinessHoursLabel,{attrs:{"has-business-hours":t.hasBusinessHours}})]},proxy:!0},{key:"rightSection",fn:function(){return[e("div",{staticClass:"flex items-center divide-x rtl:divide-x-reverse sm:rtl:!border-l-0 sm:rtl:!border-r sm:rtl:border-solid sm:rtl:border-slate-75 sm:rtl:dark:border-slate-700/50 gap-1.5 w-fit sm:w-full sm:gap-0 sm:justify-between divide-slate-75 dark:divide-slate-700/50"},[e(s.SLAResponseTime,{attrs:{"response-type":"FRT","response-time":t.firstResponse}}),t._v(" "),e(s.SLAResponseTime,{attrs:{"response-type":"NRT","response-time":t.nextResponse}}),t._v(" "),e(s.SLAResponseTime,{attrs:{"response-type":"RT","response-time":t.resolutionTime}})],1)]},proxy:!0},{key:"actions",fn:function(){return[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("SLA.FORM.DELETE"),expression:"$t('SLA.FORM.DELETE')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"delete","class-names":"grey-btn","is-loading":t.isLoading},on:{click:function(e){return t.$emit("click")}}})]},proxy:!0}])})}),[],!1,null,null,null).exports,P={__name:"BaseEmptyState",setup:function(t){return{__sfc:!0,SLAListItem:k}}},R=Object(c.a)(P,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"w-full min-h-[12rem] relative"},[e("div",{staticClass:"w-full space-y-3"},[e(s.SLAListItem,{staticClass:"opacity-25 dark:opacity-20",attrs:{"sla-name":t.$t("SLA.LIST.EMPTY.TITLE_1"),description:t.$t("SLA.LIST.EMPTY.DESC_1"),"first-response":"20m","next-response":"1h","resolution-time":"24h","has-business-hours":""}}),t._v(" "),e(s.SLAListItem,{staticClass:"opacity-25 dark:opacity-20",attrs:{"sla-name":t.$t("SLA.LIST.EMPTY.TITLE_2"),description:t.$t("SLA.LIST.EMPTY.DESC_2"),"first-response":"2h","next-response":"4h","resolution-time":"4d","has-business-hours":""}})],1),t._v(" "),e("div",{staticClass:"absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-white dark:from-slate-900 to-transparent"},[t._t("default")],2)])}),[],!1,null,null,null).exports,I={__name:"SLAEmptyState",emits:["primary-action"],setup:function(t,e){var s=e.emit;return{__sfc:!0,emit:s,primaryAction:function(){return s("primary-action")},BaseEmptyState:R}}},j=Object(c.a)(I,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e(s.BaseEmptyState,[e("p",{staticClass:"max-w-xs text-sm font-medium text-center"},[t._v("\n    "+t._s(t.$t("SLA.LIST.404"))+"\n  ")]),t._v(" "),e("woot-button",{staticClass:"px-5 mt-4 rounded-xl",attrs:{"color-scheme":"primary",icon:"plus-sign"},on:{click:s.primaryAction}},[t._v("\n    "+t._s(t.$t("SLA.ADD_ACTION_LONG"))+"\n  ")])],1)}),[],!1,null,null,null).exports,$=s(2775),D={__name:"SLAHeader",props:{showActions:{type:Boolean,default:!0}},emits:["click"],setup:function(t){return{__sfc:!0,BaseSettingsHeader:$.a}}},B=Object(c.a)(D,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e(s.BaseSettingsHeader,{attrs:{title:t.$t("SLA.HEADER"),description:t.$t("SLA.DESCRIPTION"),"link-text":t.$t("SLA.LEARN_MORE"),"feature-name":"sla"},scopedSlots:t._u([t.showActions?{key:"actions",fn:function(){return[e("woot-button",{staticClass:"rounded-xl",attrs:{"color-scheme":"primary",icon:"plus-sign"},on:{click:function(e){return t.$emit("click")}}},[t._v("\n      "+t._s(t.$t("SLA.ADD_ACTION"))+"\n    ")])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null).exports,N={__name:"SLAListItemLoading",setup:function(t){return{__sfc:!0,BaseSettingsListItem:L}}},M=Object(c.a)(N,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e(s.BaseSettingsListItem,{staticClass:"opacity-50",scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"w-24 h-[26px] rounded-md bg-slate-50 dark:bg-slate-700 animate-pulse"})]},proxy:!0},{key:"description",fn:function(){return[e("div",{staticClass:"w-64 h-4 mb-0.5 rounded-md bg-slate-50 dark:bg-slate-700 animate-pulse"}),t._v(" "),e("div",{staticClass:"w-48 h-4 rounded-md bg-slate-50 dark:bg-slate-700 animate-pulse"})]},proxy:!0},{key:"label",fn:function(){return[e("div",{staticClass:"w-32 h-[26px] bg-slate-50 dark:bg-slate-700 animate-pulse rounded-md"})]},proxy:!0},{key:"rightSection",fn:function(){return[e("div",{staticClass:"flex items-center sm:rtl:!border-l-0 sm:rtl:!border-r sm:rtl:border-solid sm:rtl:border-slate-75 sm:rtl:dark:border-slate-700/50 gap-1.5 w-fit sm:w-full sm:gap-0 sm:justify-between"},t._l(3,(function(t){return e("div",{key:t,staticClass:"flex justify-end w-1/3 h-full px-4"},[e("div",{staticClass:"w-32 h-full rounded-md bg-slate-50 dark:bg-slate-700 animate-pulse"})])})),0)]},proxy:!0}])})}),[],!1,null,null,null).exports,F={__name:"SLAPaywallEnterprise",props:{isSuperAdmin:{type:Boolean,default:!1},isOnChatwootCloud:{type:Boolean,default:!1}},emits:["click"],setup:function(t,e){return{__sfc:!0,props:t,emit:e.emit,i18nKey:t.isOnChatwootCloud?"PAYWALL":"ENTERPRISE_PAYWALL",BaseEmptyState:R}}},U=Object(c.a)(F,(function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e(s.BaseEmptyState,[e("div",{staticClass:"flex flex-col max-w-md px-6 py-6 bg-white border shadow dark:bg-slate-800 rounded-xl border-slate-100 dark:border-slate-900"},[e("div",{staticClass:"flex items-center w-full gap-2 mb-4"},[e("span",{staticClass:"flex items-center justify-center w-6 h-6 rounded-full bg-woot-75/70 dark:bg-woot-800/40"},[e("fluent-icon",{staticClass:"flex-shrink-0 text-woot-500 dark:text-woot-500",attrs:{size:"14",icon:"lock-closed"}})],1),t._v(" "),e("span",{staticClass:"text-base font-medium text-slate-900 dark:text-white"},[t._v("\n        "+t._s(t.$t("SLA.PAYWALL.TITLE"))+"\n      ")])]),t._v(" "),e("p",{staticClass:"text-sm font-normal",domProps:{innerHTML:t._s(t.$t(`SLA.${s.i18nKey}.AVAILABLE_ON`))}}),t._v(" "),e("p",{staticClass:"text-sm font-normal"},[t._v("\n      "+t._s(t.$t(`SLA.${s.i18nKey}.UPGRADE_PROMPT`))+"\n      "),t.isOnChatwootCloud||t.isSuperAdmin?t._e():e("span",[t._v("\n        "+t._s(t.$t("SLA.ENTERPRISE_PAYWALL.ASK_ADMIN"))+"\n      ")])]),t._v(" "),(t.isOnChatwootCloud,[e("woot-button",{staticClass:"w-full mt-2 text-center rounded-xl",attrs:{"color-scheme":"primary",size:"expanded","is-expanded":""},on:{click:function(t){return s.emit("click")}}},[t._v("\n        "+t._s(t.$t("SLA.PAYWALL.UPGRADE_NOW"))+"\n      ")]),t._v(" "),e("span",{staticClass:"mt-2 text-xs tracking-tight text-center"},[t._v("\n        "+t._s(t.$t("SLA.PAYWALL.CANCEL_ANYTIME"))+"\n      ")])])],2)])}),[],!1,null,null,null).exports,H=s(371);function V(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function G(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?V(Object(s),!0).forEach((function(e){Y(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):V(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function Y(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var q={components:{AddSLA:g,SettingsLayout:y.a,SLAEmptyState:j,SLAHeader:B,SLAListItem:k,SLAListItemLoading:M,SLAPaywallEnterprise:U},mixins:[H.a],data:function(){return{loading:{},showAddPopup:!1,showDeleteConfirmationPopup:!1,selectedResponse:{}}},computed:G(G({},Object(n.mapGetters)({globalConfig:"globalConfig/get",isOnChatwootCloud:"globalConfig/isOnChatwootCloud",isFeatureEnabledonAccount:"accounts/isFeatureEnabledonAccount",records:"sla/getSLA",currentUser:"getCurrentUser",accountId:"getCurrentAccountId",uiFlags:"sla/getUIFlags"})),{},{deleteConfirmText:function(){return this.$t("SLA.DELETE.CONFIRM.YES")},deleteRejectText:function(){return this.$t("SLA.DELETE.CONFIRM.NO")},deleteMessage:function(){return" ".concat(this.selectedResponse.name)},isBehindAPaywall:function(){return!this.isFeatureEnabledonAccount(this.accountId,"sla")},isSuperAdmin:function(){return"SuperAdmin"===this.currentUser.type}}),mounted:function(){this.$store.dispatch("sla/get")},methods:{openAddPopup:function(){this.isBehindAPaywall||(this.showAddPopup=!0)},hideAddPopup:function(){this.showAddPopup=!1},openDeletePopup:function(t){this.showDeleteConfirmationPopup=!0,this.selectedResponse=t},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},confirmDeletion:function(){this.loading[this.selectedResponse.id]=!0,this.closeDeletePopup(),this.deleteSla(this.selectedResponse.id)},deleteSla:function(t){var e=this;this.$store.dispatch("sla/delete",t).then((function(){Object(r.a)(e.$t("SLA.DELETE.API.SUCCESS_MESSAGE"))})).catch((function(){Object(r.a)(e.$t("SLA.DELETE.API.ERROR_MESSAGE"))})).finally((function(){e.loading[e.selectedResponse.id]=!1}))},displayTime:function(t){var e=Object(i.a)(t,{minute:"m",hour:"h",day:"d"}),s=e.time,n=e.unit;return s?"".concat(s).concat(n):"-"},onClickCTA:function(){this.$router.push({name:"billing_settings_index",params:{accountId:this.accountId}})}}},W=Object(c.a)(q,(function(){var t=this,e=t._self._c;return e("settings-layout",{attrs:{"is-loading":t.uiFlags.isFetching,"loading-message":t.$t("SLA.LOADING")},scopedSlots:t._u([{key:"header",fn:function(){return[e("SLA-header",{attrs:{"show-actions":t.records.length>0},on:{click:t.openAddPopup}})]},proxy:!0},{key:"loading",fn:function(){return t._l(2,(function(t){return e("SLAListItemLoading",{key:t,staticClass:"mb-3"})}))},proxy:!0},{key:"body",fn:function(){return[t.isBehindAPaywall?e("SLAPaywallEnterprise",{attrs:{"is-super-admin":t.isSuperAdmin,"is-on-chatwoot-cloud":t.isOnChatwootCloud},on:{click:t.onClickCTA}}):t.records.length?e("div",{staticClass:"flex flex-col w-full h-full gap-3"},t._l(t.records,(function(s){return e("SLA-list-item",{key:s.title,attrs:{"sla-name":s.name,description:s.description,"first-response":t.displayTime(s.first_response_time_threshold),"next-response":t.displayTime(s.next_response_time_threshold),"resolution-time":t.displayTime(s.resolution_time_threshold),"has-business-hours":s.only_during_business_hours,"is-loading":t.loading[s.id]},on:{click:function(e){return t.openDeletePopup(s)}}})})),1):e("SLAEmptyState",{on:{"primary-action":t.openAddPopup}}),t._v(" "),e("woot-modal",{attrs:{show:t.showAddPopup,"on-close":t.hideAddPopup},on:{"update:show":function(e){t.showAddPopup=e}}},[e("add-SLA",{on:{close:t.hideAddPopup}})],1),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.confirmDeletion,title:t.$t("SLA.DELETE.CONFIRM.TITLE"),message:t.$t("SLA.DELETE.CONFIRM.MESSAGE"),"message-value":t.deleteMessage,"confirm-text":t.deleteConfirmText,"reject-text":t.deleteRejectText},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})]},proxy:!0}])})}),[],!1,null,null,null);e.default=W.exports}}]);
//# sourceMappingURL=76-b6e1310cac1ad51bda1b.chunk.js.map