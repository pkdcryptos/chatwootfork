(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{2709:function(t,e,n){},2803:function(t,e,n){"use strict";n(2709)},2871:function(t,e,n){"use strict";n(80),n(103),n(11),n(51),n(89),n(9),n(36),n(10),n(39),n(21),n(23),n(25),n(72),n(68),n(44);function r(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a={components:{Thumbnail:n(271).a},props:{agentList:{type:Array,default:function(){return[]}},selectedAgents:{type:Array,default:function(){return[]}},updateSelectedAgents:{type:Function,default:function(){}},isWorking:{type:Boolean,default:!1},submitButtonText:{type:String,default:""}},data:function(){return{}},computed:{selectedAgentCount:function(){return this.selectedAgents.length},allAgentsSelected:function(){return this.selectedAgents.length===this.agentList.length},disableSubmitButton:function(){return 0===this.selectedAgentCount}},methods:{isAgentSelected:function(t){return this.selectedAgents.includes(t)},handleSelectAgent:function(t){var e=[];e=this.isAgentSelected(t)?this.selectedAgents.filter((function(e){return e!==t})):[].concat(r(this.selectedAgents),[t]),this.updateSelectedAgents(e)},selectAllAgents:function(){var t=this.agentList.map((function(t){return t.id}));this.updateSelectedAgents(t)},agentRowClass:function(t){return{"is-active":this.isAgentSelected(t)}}}},i=(n(2803),n(8)),l=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"add-agents__header"}),t._v(" "),e("table",{staticClass:"woot-table"},[e("thead",[e("tr",[e("td",{staticClass:"ltr:pl-2.5 rtl:pr-2.5"},[e("div",{staticClass:"flex items-center"},[e("input",{attrs:{name:"select-all-agents",type:"checkbox",title:t.$t("TEAMS_SETTINGS.AGENTS.SELECT_ALL")},domProps:{checked:t.allAgentsSelected?"checked":""},on:{click:function(e){return e.target!==e.currentTarget?null:t.selectAllAgents.apply(null,arguments)}}})])]),t._v(" "),e("td",{staticClass:"text-slate-800 dark:text-slate-100 ltr:pl-2.5 rtl:pr-2.5"},[t._v("\n          "+t._s(t.$t("TEAMS_SETTINGS.AGENTS.AGENT"))+"\n        ")]),t._v(" "),e("td",{staticClass:"text-slate-800 dark:text-slate-100 ltr:pl-2.5 rtl:pr-2.5"},[t._v("\n          "+t._s(t.$t("TEAMS_SETTINGS.AGENTS.EMAIL"))+"\n        ")])])]),t._v(" "),e("tbody",t._l(t.agentList,(function(n){return e("tr",{key:n.id,class:t.agentRowClass(n.id)},[e("td",{staticClass:"w-12"},[e("div",{staticClass:"flex items-center"},[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.isAgentSelected(n.id)},on:{click:function(e){return e.target!==e.currentTarget?null:(()=>t.handleSelectAgent(n.id)).apply(null,arguments)}}})])]),t._v(" "),e("td",[e("div",{staticClass:"flex items-center gap-2"},[e("thumbnail",{attrs:{src:n.thumbnail,size:"24px",username:n.name,status:n.availability_status}}),t._v(" "),e("h4",{staticClass:"text-base mb-0 text-slate-800 dark:text-slate-100"},[t._v("\n              "+t._s(n.name)+"\n            ")])],1)]),t._v(" "),e("td",[t._v("\n          "+t._s(n.email||"---")+"\n        ")])])})),0)]),t._v(" "),e("div",{staticClass:"flex items-center justify-between mt-2"},[e("p",[t._v("\n      "+t._s(t.$t("TEAMS_SETTINGS.AGENTS.SELECTED_COUNT",{selected:t.selectedAgents.length,total:t.agentList.length}))+"\n    ")]),t._v(" "),e("woot-submit-button",{attrs:{"button-text":t.submitButtonText,loading:t.isWorking,disabled:t.disableSubmitButton}})],1)])}),[],!1,null,"427f3357",null);e.a=l.exports},3388:function(t,e,n){"use strict";n.r(e);n(37),n(44),n(89),n(52),n(73),n(13),n(9),n(11),n(15),n(12),n(16),n(36),n(10),n(39),n(21),n(23),n(25),n(72),n(68),n(28);var r=n(34),s=n(67),a=n(250),i=n(159),l=n(2871),c=n(129);function o(t,e,n,r,s,a,i){try{var l=t[a](i),c=l.value}catch(o){return void n(o)}l.done?e(c):Promise.resolve(c).then(r,s)}function u(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={components:{PageHeader:i.a,AgentSelector:l.a},props:{team:{type:Object,default:function(){}}},validations:{selectedAgents:{isEmpty:function(){return!!this.selectedAgents.length}}},setup:function(){return{v$:Object(c.a)()}},data:function(){return{selectedAgents:[],isCreating:!1}},computed:g(g({},Object(r.mapGetters)({agentList:"agents/getAgents"})),{},{teamId:function(){return this.$route.params.teamId},headerTitle:function(){return this.$t("TEAMS_SETTINGS.ADD.TITLE",{teamName:this.currentTeam.name})},currentTeam:function(){return this.$store.getters["teams/getTeam"](this.teamId)}}),mounted:function(){this.$store.dispatch("agents/get")},methods:{updateSelectedAgents:function(t){this.v$.selectedAgents.$touch(),this.selectedAgents=u(t)},selectAllAgents:function(){this.selectedAgents=this.agentList.map((function(t){return t.id}))},addAgents:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isCreating=!0,n=e.teamId,r=e.selectedAgents,t.prev=2,t.next=5,e.$store.dispatch("teamMembers/create",{teamId:n,agentsList:r});case 5:a.a.replace({name:"settings_teams_finish",params:{page:"new",teamId:n}}),e.$store.dispatch("teams/get"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),Object(s.a)(t.t0.message);case 12:e.isCreating=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})),function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function i(t){o(a,r,s,i,l,"next",t)}function l(t){o(a,r,s,i,l,"throw",t)}i(void 0)}))})()}}},h=m,A=n(8),b=Object(A.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"border border-slate-25 dark:border-slate-800/60 overflow-x-auto bg-white dark:bg-slate-900 h-full p-6 w-full max-w-full md:w-3/4 md:max-w-[75%] flex-shrink-0 flex-grow-0"},[e("form",{staticClass:"flex flex-wrap mx-0 overflow-x-auto",on:{submit:function(e){return e.preventDefault(),t.addAgents.apply(null,arguments)}}},[e("div",{staticClass:"w-full"},[e("page-header",{attrs:{"header-title":t.headerTitle,"header-content":t.$t("TEAMS_SETTINGS.ADD.DESC")}})],1),t._v(" "),e("div",{staticClass:"w-full"},[t.v$.selectedAgents.$error?e("div",[e("p",{staticClass:"error-message"},[t._v("\n          "+t._s(t.$t("TEAMS_SETTINGS.ADD.AGENT_VALIDATION_ERROR"))+"\n        ")])]):t._e(),t._v(" "),e("agent-selector",{attrs:{"agent-list":t.agentList,"selected-agents":t.selectedAgents,"update-selected-agents":t.updateSelectedAgents,"is-working":t.isCreating,"submit-button-text":t.$t("TEAMS_SETTINGS.ADD.BUTTON_TEXT")}})],1)])])}),[],!1,null,null,null);e.default=b.exports}}]);
//# sourceMappingURL=83-2b85cbbc35743a36d6ff.chunk.js.map