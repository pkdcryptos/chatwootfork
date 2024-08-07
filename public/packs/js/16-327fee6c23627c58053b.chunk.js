(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{2692:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return l}));n(21),n(10),n(25),n(12),n(68),n(80),n(13),n(9),n(11),n(15),n(16);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function(t){return t.attribute_key?t.filter_operator?"is_present"!==t.filter_operator&&"is_not_present"!==t.filter_operator&&(!t.values||Array.isArray(t.values)&&0===t.values.length)?"VALUE_REQUIRED":"days_before"===t.filter_operator&&(parseInt(t.values,10)<=0||parseInt(t.values,10)>=999)?"VALUE_MUST_BE_BETWEEN_1_AND_998":null:"FILTER_OPERATOR_REQUIRED":"ATTRIBUTE_KEY_REQUIRED"},s=function(t){var e={};return t.forEach((function(t,n){var a=o(t);a&&(e["filter_".concat(n)]=a)})),e},u=function(t){return t&&0!==t.length?t.reduce((function(t,e,n){var a=function(t){return["mute_conversation","snooze_conversation","resolve_conversation","remove_assigned_team"].includes(t.action_name)||t.action_params&&0!==t.action_params.length?null:"ACTION_PARAMETERS_REQUIRED"}(e);return a&&(t["action_".concat(n)]=a),t}),{}):{actions:"ATLEAST_ONE_ACTION_REQUIRED"}},l=function(t){var e,n,a=function(t){var e={};return["name","description","event_name"].forEach((function(n){t[n]||(e[n]="".concat(n.charAt(0).toUpperCase()+n.slice(1)," is required"))})),e}(t),i=(e=t.conditions,n={},e&&0!==e.length?(e.forEach((function(t,e){var a=o(t);a&&(n["condition_".concat(e)]=a)})),n):(n.conditions="ATLEAST_ONE_CONDITION_REQUIRED",n)),s=u(t.actions);return r(r(r({},a),i),s)}},2857:function(t,e,n){"use strict";n(161),n(13),n(9),n(11),n(15),n(12),n(16),n(89);var a={props:["teams","value"],data:function(){return{selectedTeams:[],message:""}},mounted:function(){var t=this.value.team_ids;this.selectedTeams=t,this.message=this.value.message},methods:{updateValue:function(){this.$emit("input",{team_ids:this.selectedTeams.map((function(t){return t.id})),message:this.message})}}},r=(n(3048),n(8)),i=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"multiselect-wrap--small"},[e("multiselect",{attrs:{"track-by":"id",label:"name",placeholder:t.$t("AUTOMATION.ACTION.TEAM_DROPDOWN_PLACEHOLDER"),multiple:!0,"selected-label":"","select-label":t.$t("FORMS.MULTISELECT.ENTER_TO_SELECT"),"deselect-label":"","max-height":160,options:t.teams,"allow-empty":!1},on:{input:t.updateValue},model:{value:t.selectedTeams,callback:function(e){t.selectedTeams=e},expression:"selectedTeams"}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{rows:"4",placeholder:t.$t("AUTOMATION.ACTION.TEAM_MESSAGE_INPUT_PLACEHOLDER")},domProps:{value:t.message},on:{input:[function(e){e.target.composing||(t.message=e.target.value)},t.updateValue]}})],1)])}),[],!1,null,"3a0353d8",null).exports,o=(n(10),n(28),n(37),n(67));function s(t,e,n,a,r,i,o){try{var s=t[i](o),u=s.value}catch(l){return void n(l)}s.done?e(u):Promise.resolve(u).then(a,r)}var u={components:{Spinner:n(191).a},props:{value:{type:Array,default:function(){return[]}},initialFileName:{type:String,default:""}},data:function(){return{uploadState:"idle",label:this.$t("AUTOMATION.ATTACHMENT.LABEL_IDLE")}},mounted:function(){this.initialFileName&&(this.label=this.initialFileName,this.uploadState="uploaded")},methods:{onChangeFile:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.uploadState="processing",n.label=n.$t("AUTOMATION.ATTACHMENT.LABEL_UPLOADING"),e.prev=2,a=t.target.files[0],e.next=6,n.$store.dispatch("automations/uploadAttachment",a);case 6:r=e.sent,n.$emit("input",[r]),n.uploadState="uploaded",n.label=n.$t("AUTOMATION.ATTACHMENT.LABEL_UPLOADED"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),n.uploadState="failed",n.label=n.$t("AUTOMATION.ATTACHMENT.LABEL_UPLOAD_FAILED"),Object(o.a)(n.$t("AUTOMATION.ATTACHMENT.UPLOAD_ERROR"));case 17:case"end":return e.stop()}}),e,null,[[2,12]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(t){s(i,a,r,o,u,"next",t)}function u(t){s(i,a,r,o,u,"throw",t)}o(void 0)}))})()}}},l=u;n(3049);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={components:{AutomationActionTeamMessageInput:i,AutomationActionFileInput:Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-wrapper",class:t.uploadState},["processing"!==t.uploadState?e("input",{class:"processing"===t.uploadState?"disabled":"",attrs:{type:"file",name:"attachment"},on:{change:t.onChangeFile}}):t._e(),t._v(" "),"processing"===t.uploadState?e("spinner"):t._e(),t._v(" "),"idle"===t.uploadState?e("fluent-icon",{attrs:{icon:"file-upload"}}):t._e(),t._v(" "),"uploaded"===t.uploadState?e("fluent-icon",{staticClass:"success-icon",attrs:{icon:"checkmark-circle",type:"outline"}}):t._e(),t._v(" "),"failed"===t.uploadState?e("fluent-icon",{staticClass:"error-icon",attrs:{icon:"dismiss-circle",type:"outline"}}):t._e(),t._v(" "),e("p",{staticClass:"file-button"},[t._v(t._s(t.label))])],1)}),[],!1,null,"25150911",null).exports,WootMessageEditor:n(1918).a},props:{value:{type:Object,default:function(){return null}},actionTypes:{type:Array,default:function(){return[]}},dropdownValues:{type:Array,default:function(){return[]}},errorMessage:{type:String,default:""},showActionInput:{type:Boolean,default:!0},initialFileName:{type:String,default:""},isMacro:{type:Boolean,default:!1}},computed:{action_name:{get:function(){return this.value?this.value.action_name:null},set:function(t){var e=this.value||{};this.$emit("input",p(p({},e),{},{action_name:t}))}},action_params:{get:function(){return this.value?this.value.action_params:null},set:function(t){var e=this.value||{};this.$emit("input",p(p({},e),{},{action_params:t}))}},inputType:function(){var t=this;return this.actionTypes.find((function(e){return e.key===t.action_name})).inputType},actionInputStyles:function(){return{"has-error":this.errorMessage,"is-a-macro":this.isMacro}},castMessageVmodel:{get:function(){return Array.isArray(this.action_params)?this.action_params[0]:this.action_params},set:function(t){this.action_params=t}}},methods:{removeAction:function(){this.$emit("removeAction")},resetAction:function(){this.$emit("resetAction")}}},_=(n(3050),Object(r.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter",class:t.actionInputStyles},[e("div",{staticClass:"filter-inputs"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.action_name,expression:"action_name"}],staticClass:"action__question",class:{"full-width":!t.showActionInput},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.action_name=e.target.multiple?n:n[0]},function(e){return t.resetAction()}]}},t._l(t.actionTypes,(function(n){return e("option",{key:n.key,domProps:{value:n.key}},[t._v("\n        "+t._s(n.label)+"\n      ")])})),0),t._v(" "),t.showActionInput?e("div",{staticClass:"filter__answer--wrap"},[t.inputType?e("div",{staticClass:"w-full"},["search_select"===t.inputType?e("div",{staticClass:"multiselect-wrap--small"},[e("multiselect",{attrs:{"track-by":"id",label:"name",placeholder:t.$t("FORMS.MULTISELECT.SELECT"),"selected-label":"","select-label":t.$t("FORMS.MULTISELECT.ENTER_TO_SELECT"),"deselect-label":"","max-height":160,options:t.dropdownValues,"allow-empty":!1,"option-height":104},model:{value:t.action_params,callback:function(e){t.action_params=e},expression:"action_params"}})],1):"multi_select"===t.inputType?e("div",{staticClass:"multiselect-wrap--small"},[e("multiselect",{attrs:{"track-by":"id",label:"name",placeholder:t.$t("FORMS.MULTISELECT.SELECT"),multiple:!0,"selected-label":"","select-label":t.$t("FORMS.MULTISELECT.ENTER_TO_SELECT"),"deselect-label":"","max-height":160,options:t.dropdownValues,"allow-empty":!1,"option-height":104},model:{value:t.action_params,callback:function(e){t.action_params=e},expression:"action_params"}})],1):"email"===t.inputType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.action_params,expression:"action_params"}],staticClass:"answer--text-input",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.action_params},on:{input:function(e){e.target.composing||(t.action_params=e.target.value)}}}):"url"===t.inputType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.action_params,expression:"action_params"}],staticClass:"answer--text-input",attrs:{type:"url",placeholder:"Enter url"},domProps:{value:t.action_params},on:{input:function(e){e.target.composing||(t.action_params=e.target.value)}}}):t._e(),t._v(" "),"attachment"===t.inputType?e("automation-action-file-input",{attrs:{"initial-file-name":t.initialFileName},model:{value:t.action_params,callback:function(e){t.action_params=e},expression:"action_params"}}):t._e()],1):t._e()]):t._e(),t._v(" "),t.isMacro?t._e():e("woot-button",{attrs:{icon:"dismiss",variant:"clear","color-scheme":"secondary"},on:{click:t.removeAction}})],1),t._v(" "),"team_message"===t.inputType?e("automation-action-team-message-input",{attrs:{teams:t.dropdownValues},model:{value:t.action_params,callback:function(e){t.action_params=e},expression:"action_params"}}):t._e(),t._v(" "),"textarea"===t.inputType?e("woot-message-editor",{staticClass:"action-message",attrs:{rows:"4","enable-variables":!0,placeholder:t.$t("AUTOMATION.ACTION.TEAM_MESSAGE_INPUT_PLACEHOLDER")},model:{value:t.castMessageVmodel,callback:function(e){t.castMessageVmodel=e},expression:"castMessageVmodel"}}):t._e(),t._v(" "),t.errorMessage?e("p",{staticClass:"filter-error"},[t._v("\n    "+t._s(t.errorMessage)+"\n  ")]):t._e()],1)}),[],!1,null,"0c5a16cc",null));e.a=_.exports},2883:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"n",(function(){return p})),n.d(e,"l",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return y})),n.d(e,"k",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return h})),n.d(e,"b",(function(){return A})),n.d(e,"m",(function(){return O})),n.d(e,"c",(function(){return T})),n.d(e,"o",(function(){return E})),n.d(e,"e",(function(){return S}));n(161),n(89),n(51),n(10),n(148),n(9),n(36),n(39),n(21),n(23),n(25),n(72),n(68),n(44);var a=n(2884),r=n(1944),i=n(2885);function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var u=[{id:"incoming",name:"Incoming Message"},{id:"outgoing",name:"Outgoing Message"}],l=[{id:"nil",name:"None"},{id:"low",name:"Low"},{id:"medium",name:"Medium"},{id:"high",name:"High"},{id:"urgent",name:"Urgent"}],c=function(t){return{date:"date",text:"plain_text",list:"search_select",checkbox:"search_select"}[t]||"plain_text"},p=function(t,e){return t.find((function(t){return t.attribute_key===e}))},m=function(t){return{list:a.a,text:a.c,number:a.a,link:a.a,date:a.d,checkbox:a.a}[t]||a.a},f=function(t,e){return t.map((function(t){return{key:t.attribute_key,name:t.attribute_display_name,inputType:c(t.attribute_display_type),filterOperators:m(t.attribute_display_type),customAttributeType:e}}))},_=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";return t.map((function(t){return{id:t[e],name:t.title}}))},d=function(t){return[{id:"nil",name:"None"}].concat(o(t||[]))},v=function(t){var e=t.agents,n=t.teams,a=t.labels,r=t.slaPolicies,i=t.type;return{assign_agent:d(e),assign_team:d(n),send_email_to_team:n,add_label:_(a,"title"),remove_label:_(a,"title"),change_priority:l,add_sla:r}[i]},y=function(t){var e=t.agents,n=t.booleanFilterOptions,a=t.campaigns,r=t.contacts,i=t.countries,o=t.customAttributes,s=t.inboxes,c=t.languages,p=t.statusFilterOptions,m=t.teams,f=t.type;return function(t,e){return t.find((function(t){return t.attribute_key===e&&"checkbox"===t.attribute_display_type}))}(o,f)?n:function(t,e){return t.find((function(t){return t.attribute_key===e&&"list"===t.attribute_display_type}))}(o,f)?function(t,e){return t.find((function(t){return t.attribute_key===e})).attribute_values.map((function(t){return{id:t,name:t}}))}(o,f):{status:p,assignee_id:e,contact:r,inbox_id:s,team_id:m,campaigns:_(a),browser_language:c,conversation_language:c,country_code:i,message_type:u,priority:l}[f]},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.action_params[0];if(!n)return"";if("send_attachment"===t.action_name){var a=e.find((function(t){return t.blob_id===n}));if(a)return a.filename.toString()}return""},g=function(t){return"message_created"===t?[{attribute_key:"message_type",filter_operator:"equal_to",values:"",query_operator:"and",custom_attribute_type:""}]:"conversation_opened"===t?[{attribute_key:"browser_language",filter_operator:"equal_to",values:"",query_operator:"and",custom_attribute_type:""}]:[{attribute_key:"status",filter_operator:"equal_to",values:"",query_operator:"and",custom_attribute_type:""}]},h=function(){return[{action_name:"assign_agent",action_params:[]}]},A=function(t){return t.map((function(t){return{key:t.attribute_key,name:t.attribute_display_name,type:t.attribute_display_type}}))},O=function(t,e,n){return t[e].conditions.find((function(t){return t.key===n})).inputType},T=function(t){var e=JSON.parse(JSON.stringify(t));return e.conditions[e.conditions.length-1].query_operator=null,e.conditions=Object(r.a)(e.conditions).payload,e.actions=Object(i.a)(e.actions),e},E=function(t,e){return t.find((function(t){return t.key===e}))},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r=[];return t.length&&r.push.apply(r,[{key:"conversation_custom_attribute",name:n,disabled:!0}].concat(o(t))),e.length&&r.push.apply(r,[{key:"contact_custom_attribute",name:a,disabled:!0}].concat(o(e))),r}},2884:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return s}));var a=[{value:"equal_to",label:"Equal to"},{value:"not_equal_to",label:"Not equal to"}],r=[{value:"equal_to",label:"Equal to"},{value:"not_equal_to",label:"Not equal to"},{value:"contains",label:"Contains"},{value:"does_not_contain",label:"Does not contain"}],i=[{value:"equal_to",label:"Equal to"},{value:"not_equal_to",label:"Not equal to"},{value:"is_present",label:"Is present"},{value:"is_not_present",label:"Is not present"}],o=[{value:"equal_to",label:"Equal to"},{value:"not_equal_to",label:"Not equal to"},{value:"is_present",label:"Is present"},{value:"is_not_present",label:"Is not present"},{value:"is_greater_than",label:"Is greater than"},{value:"is_less_than",label:"Is less than"}],s=[{value:"equal_to",label:"Equal to"},{value:"not_equal_to",label:"Not equal to"},{value:"contains",label:"Contains"},{value:"does_not_contain",label:"Does not contain"},{value:"starts_with",label:"Starts With"}]},2885:function(t,e,n){"use strict";n(89),n(9),n(36),n(10),n(39),n(21),n(23),n(25),n(72),n(68),n(44);function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.a=function(t){return JSON.parse(JSON.stringify(t)).map((function(t){var e;return Array.isArray(t.action_params)?t.action_params=e=(e=t.action_params).length<=0?[]:e.every((function(t){return"string"===typeof t}))||e.every((function(t){return"number"===typeof t}))?r(e):e.map((function(t){return t.id})):"object"===a(t.action_params)?t.action_params=function(t){return t.action_params.id?t.action_params=[t.action_params.id]:t.action_params=[t.action_params],t.action_params}(t):t.action_params?t.action_params=[t.action_params]:t.action_params=[],t}))}},2886:function(t,e,n){},2887:function(t,e,n){},2888:function(t,e,n){},3048:function(t,e,n){"use strict";n(2886)},3049:function(t,e,n){"use strict";n(2887)},3050:function(t,e,n){"use strict";n(2888)}}]);
//# sourceMappingURL=16-327fee6c23627c58053b.chunk.js.map