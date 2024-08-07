(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{2861:function(t,e,r){"use strict";r(9),r(36),r(44);var n=r(1929),a=r(69),i={title:{required:a.f,minLength:Object(a.d)(2)},description:{},showOnSidebar:{}},o=r(129),s={components:{WootSubmitButton:n.a},props:{onSubmit:{type:Function,default:function(){}},submitInProgress:{type:Boolean,default:!1},formData:{type:Object,default:function(){}},submitButtonText:{type:String,default:""}},setup:function(){return{v$:Object(o.a)()}},data:function(){var t=this.formData||{},e=t.description,r=void 0===e?"":e,n=t.name,a=void 0===n?"":n,i=t.allow_auto_assign;return{description:r,title:a,allowAutoAssign:void 0===i||i}},validations:i,methods:{handleSubmit:function(){this.v$.$touch(),this.v$.$invalid||this.onSubmit({description:this.description,name:this.title,allow_auto_assign:this.allowAutoAssign})}}},l=r(8),u=Object(l.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-0 flex flex-wrap"},[e("div",{staticClass:"flex-shrink-0 flex-grow-0 w-full md:w-[65%]"},[e("form",{staticClass:"mx-0 flex flex-wrap",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("woot-input",{staticClass:"w-full",class:{error:t.v$.title.$error},attrs:{label:t.$t("TEAMS_SETTINGS.FORM.NAME.LABEL"),placeholder:t.$t("TEAMS_SETTINGS.FORM.NAME.PLACEHOLDER")},on:{input:t.v$.title.$touch},model:{value:t.title,callback:function(e){t.title="string"===typeof e?e.trim():e},expression:"title"}}),t._v(" "),e("woot-input",{staticClass:"w-full",class:{error:t.v$.description.$error},attrs:{label:t.$t("TEAMS_SETTINGS.FORM.DESCRIPTION.LABEL"),placeholder:t.$t("TEAMS_SETTINGS.FORM.DESCRIPTION.PLACEHOLDER")},on:{input:t.v$.description.$touch},model:{value:t.description,callback:function(e){t.description="string"===typeof e?e.trim():e},expression:"description"}}),t._v(" "),e("div",{staticClass:"w-full flex items-center gap-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.allowAutoAssign,expression:"allowAutoAssign"}],attrs:{type:"checkbox"},domProps:{value:!0,checked:Array.isArray(t.allowAutoAssign)?t._i(t.allowAutoAssign,!0)>-1:t.allowAutoAssign},on:{change:function(e){var r=t.allowAutoAssign,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=t._i(r,true);n.checked?i<0&&(t.allowAutoAssign=r.concat([true])):i>-1&&(t.allowAutoAssign=r.slice(0,i).concat(r.slice(i+1)))}else t.allowAutoAssign=a}}}),t._v(" "),e("label",{attrs:{for:"conversation_creation"}},[t._v("\n          "+t._s(t.$t("TEAMS_SETTINGS.FORM.AUTO_ASSIGN.LABEL"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex flex-row justify-end gap-2 py-2 px-0 w-full"},[e("div",{staticClass:"w-full"},[e("woot-submit-button",{attrs:{disabled:t.v$.title.$invalid||t.submitInProgress,"button-text":t.submitButtonText,loading:t.submitInProgress}})],1)])],1)])])}),[],!1,null,null,null);e.a=u.exports},3386:function(t,e,r){"use strict";r.r(e);r(37),r(52),r(73),r(10),r(28),r(13),r(9),r(11),r(15),r(12),r(16);var n=r(67),a=r(2861),i=r(250),o=r(159);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e,r,n,a,i,o){try{var s=t[i](o),l=s.value}catch(u){return void r(u)}s.done?e(l):Promise.resolve(l).then(n,a)}var p={components:{TeamForm:a.a,PageHeader:o.a},data:function(){return{enabledFeatures:{}}},methods:{createTeam:function(t){var e,r=this;return(e=regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.$store.dispatch("teams/create",l({},t));case 3:a=e.sent,i.a.replace({name:"settings_teams_add_agents",params:{page:"new",teamId:a.id}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(n.a)(r.$t("TEAMS_SETTINGS.TEAM_FORM.ERROR_MESSAGE"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(t){c(i,n,a,o,s,"next",t)}function s(t){c(i,n,a,o,s,"throw",t)}o(void 0)}))})()}}},d=p,f=r(8),m=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"border border-slate-25 dark:border-slate-800/60 bg-white dark:bg-slate-900 h-full p-6 w-full max-w-full md:w-3/4 md:max-w-[75%] flex-shrink-0 flex-grow-0"},[e("page-header",{attrs:{"header-title":t.$t("TEAMS_SETTINGS.CREATE_FLOW.CREATE.TITLE"),"header-content":t.$t("TEAMS_SETTINGS.CREATE_FLOW.CREATE.DESC")}}),t._v(" "),e("div",{staticClass:"flex flex-wrap"},[e("team-form",{attrs:{"on-submit":t.createTeam,"submit-in-progress":!1,"submit-button-text":t.$t("TEAMS_SETTINGS.FORM.SUBMIT_CREATE")}})],1)],1)}),[],!1,null,null,null);e.default=m.exports}}]);
//# sourceMappingURL=104-727445e9690574d842a6.chunk.js.map