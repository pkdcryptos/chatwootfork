(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{2619:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return u})),a.d(e,"e",(function(){return d}));var n={1:{id:1,period:"day"},2:{id:2,period:"week"},3:{id:3,period:"month"},4:{id:4,period:"year"}},r={DAY:{id:"DAY",period:"day",translationKey:"REPORT.GROUPING_OPTIONS.DAY"},WEEK:{id:"WEEK",period:"week",translationKey:"REPORT.GROUPING_OPTIONS.WEEK"},MONTH:{id:"MONTH",period:"month",translationKey:"REPORT.GROUPING_OPTIONS.MONTH"},YEAR:{id:"YEAR",period:"year",translationKey:"REPORT.GROUPING_OPTIONS.YEAR"}},i={LAST_7_DAYS:{id:"LAST_7_DAYS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_7_DAYS",offset:6,groupByOptions:[r.DAY]},LAST_30_DAYS:{id:"LAST_30_DAYS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_30_DAYS",offset:29,groupByOptions:[r.DAY,r.WEEK]},LAST_3_MONTHS:{id:"LAST_3_MONTHS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_3_MONTHS",offset:89,groupByOptions:[r.DAY,r.WEEK,r.MONTH]},LAST_6_MONTHS:{id:"LAST_6_MONTHS",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_6_MONTHS",offset:179,groupByOptions:[r.WEEK,r.MONTH]},LAST_YEAR:{id:"LAST_YEAR",translationKey:"REPORT.DATE_RANGE_OPTIONS.LAST_YEAR",offset:364,groupByOptions:[r.WEEK,r.MONTH]},CUSTOM_DATE_RANGE:{id:"CUSTOM_DATE_RANGE",translationKey:"REPORT.DATE_RANGE_OPTIONS.CUSTOM_DATE_RANGE",offset:null,groupByOptions:[r.DAY,r.WEEK,r.MONTH,r.YEAR]}},o='PlusJakarta,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',s={type:"bar",backgroundColor:"rgb(31, 147, 255)"},l={datasets:[s],scales:{xAxes:[{ticks:{fontFamily:o},gridLines:{drawOnChartArea:!1}}],yAxes:[{id:"y-left",type:"linear",position:"left",ticks:{fontFamily:o,beginAtZero:!0,stepSize:1,callback:function(t,e,a){return e&&e!==a.length-1?"":t}},gridLines:{drawOnChartArea:!1}}]}},c={datasets:[s],scales:{xAxes:[{ticks:{fontFamily:o},gridLines:{drawOnChartArea:!1}}],yAxes:[{id:"y-left",type:"linear",position:"left",ticks:{fontFamily:o,callback:function(t,e,a){return e&&e!==a.length-1?"":function(t){if(!t)return"";if(t<60)return"".concat(t,"s");if(t<3600){var e=Math.floor(t/60);return"".concat(e,"m")}if(t<86400){var a=Math.floor(t/3600);return"".concat(a,"h")}var n=Math.floor(t/86400);return"".concat(n,"d")}(t)}},gridLines:{drawOnChartArea:!1}}]}},u={conversations_count:l,incoming_messages_count:l,outgoing_messages_count:l,avg_first_response_time:c,reply_time:c,avg_resolution_time:c,resolutions_count:l,bot_resolutions_count:l,bot_handoffs_count:l},d={open:"OPEN",unattended:"UNATTENDED",unassigned:"UNASSIGNED",pending:"PENDING",online:"ONLINE",busy:"BUSY",offline:"OFFLINE"}},2926:function(t,e,a){},2927:function(t,e,a){},3084:function(t,e,a){"use strict";a(2926)},3085:function(t,e,a){"use strict";a(2927)},3326:function(t,e,a){"use strict";a.r(e);a(12),a(13),a(9),a(11),a(15),a(16);var n=a(34),r=(a(57),a(89),a(44),a(161),a(2796)),i=a(191),o=a(1923),s=a(1786),l=a(271),c={name:"AgentTable",components:{EmptyState:o.a,Spinner:i.a,VeTable:r.VeTable,VePagination:r.VePagination},mixins:[s.a],props:{agents:{type:Array,default:function(){return[]}},agentMetrics:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},pageIndex:{type:Number,default:1}},computed:{tableData:function(){var t=this;return this.agentMetrics.filter((function(e){return t.getAgentInformation(e.id)})).map((function(e){var a=t.getAgentInformation(e.id);return{agent:a.name||a.available_name,email:a.email,thumbnail:a.thumbnail,open:e.metric.open||0,unattended:e.metric.unattended||0,status:a.availability_status}}))},columns:function(){var t=this.$createElement;return[{field:"agent",key:"agent",title:this.$t("OVERVIEW_REPORTS.AGENT_CONVERSATIONS.TABLE_HEADER.AGENT"),fixed:"left",align:this.isRTLView?"right":"left",width:25,renderBodyCell:function(e){var a=e.row;return t("div",{class:"row-user-block"},[t(l.a,{attrs:{src:a.thumbnail,size:"32px",username:a.agent,status:a.status}}),t("div",{class:"user-block"},[t("h6",{class:"title overflow-hidden whitespace-nowrap text-ellipsis"},[a.agent]),t("span",{class:"sub-title"},[a.email])])])}},{field:"open",key:"open",title:this.$t("OVERVIEW_REPORTS.AGENT_CONVERSATIONS.TABLE_HEADER.OPEN"),align:this.isRTLView?"right":"left",width:10},{field:"unattended",key:"unattended",title:this.$t("OVERVIEW_REPORTS.AGENT_CONVERSATIONS.TABLE_HEADER.UNATTENDED"),align:this.isRTLView?"right":"left",width:10}]}},methods:{onPageNumberChange:function(t){this.$emit("page-change",t)},getAgentInformation:function(t){var e;return null===(e=this.agents)||void 0===e?void 0:e.find((function(e){return e.id===Number(t)}))}}},u=(a(3084),a(8)),d=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"agent-table-container"},[e("ve-table",{attrs:{"max-height":"calc(100vh - 21.875rem)","fixed-header":!0,columns:t.columns,"table-data":t.tableData}}),t._v(" "),t.isLoading?e("div",{staticClass:"agents-loader"},[e("spinner"),t._v(" "),e("span",[t._v(t._s(t.$t("OVERVIEW_REPORTS.AGENT_CONVERSATIONS.LOADING_MESSAGE")))])],1):t.isLoading||t.agentMetrics.length?t._e():e("empty-state",{attrs:{title:t.$t("OVERVIEW_REPORTS.AGENT_CONVERSATIONS.NO_AGENTS")}}),t._v(" "),t.agentMetrics.length>0?e("div",{staticClass:"table-pagination"},[e("ve-pagination",{attrs:{total:t.agents.length,"page-index":t.pageIndex,"page-size":25,"page-size-option":[25]},on:{"on-page-number-change":t.onPageNumberChange}})],1):t._e()],1)}),[],!1,null,"79c10260",null).exports,f={name:"MetricCard",components:{Spinner:i.a},props:{header:{type:String,default:""},isLoading:{type:Boolean,default:!1},loadingMessage:{type:String,default:""}}},g=(a(3085),Object(u.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"metric-card flex flex-col m-2 p-4 border border-solid overflow-hidden rounded-md flex-grow shadow-sm text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-800 border-slate-75 dark:border-slate-700 min-h-[10rem]"},[e("div",{staticClass:"card-header"},[t._t("header",(function(){return[e("div",{staticClass:"flex items-center gap-0.5 flex-row"},[e("h5",{staticClass:"mb-0 text-slate-800 dark:text-slate-100 font-medium text-xl"},[t._v("\n          "+t._s(t.header)+"\n        ")]),t._v(" "),e("span",{staticClass:"flex flex-row items-center pr-2 pl-2 m-1 rounded-sm text-green-400 dark:text-green-400 text-xs bg-green-100/30 dark:bg-green-100/20"},[e("span",{staticClass:"bg-green-500 dark:bg-green-500 h-1 w-1 rounded-full mr-1 rtl:mr-0 rtl:ml-0"}),t._v(" "),e("span",[t._v("\n            "+t._s(t.$t("OVERVIEW_REPORTS.LIVE"))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"card-header--control-area"},[t._t("control")],2)]}))],2),t._v(" "),t.isLoading?t.isLoading?e("div",{staticClass:"items-center flex text-base justify-center px-12 py-6"},[e("spinner"),t._v(" "),e("span",{staticClass:"text-slate-300 dark:text-slate-200"},[t._v("\n      "+t._s(t.loadingMessage)+"\n    ")])],1):t._e():e("div",{staticClass:"card-body max-w-full w-full ml-auto mr-auto justify-between flex"},[t._t("default")],2)])}),[],!1,null,"a2e7d924",null).exports),p=a(2619),_=(a(282),a(51),a(36),a(10),a(39),a(21),a(23),a(25),a(72),a(68),a(6)),O=a(288),E=a(19),m=a(14);var A=a(280),v=a(1803),h=a(1779);function T(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return b(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var S={__name:"Heatmap",props:{heatData:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1}},setup:function(t){var e=t,a=Object(h.a)().t,n=Object(_.computed)((function(){return Object(v.b)(e.heatData)})),r=Object(_.computed)((function(){var t=e.heatData.map((function(t){return t.value}));return Object(A.h)(t,[.2,.4,.6,.8,.9,.99])}));return{__sfc:!0,t:a,props:e,processedData:n,quantileRange:r,getCountTooltip:function(t){return t?a(1===t?"OVERVIEW_REPORTS.CONVERSATION_HEATMAP.CONVERSATION":"OVERVIEW_REPORTS.CONVERSATION_HEATMAP.CONVERSATIONS",{count:t}):a("OVERVIEW_REPORTS.CONVERSATION_HEATMAP.NO_CONVERSATIONS")},formatDate:function(t){return Object(O.a)(new Date(t),"MMM d, yyyy")},getDayOfTheWeek:function(t){var e=function(t){return Object(m.a)(1,arguments),Object(E.a)(t).getDay()}(t);return[a("DAYS_OF_WEEK.SUNDAY"),a("DAYS_OF_WEEK.MONDAY"),a("DAYS_OF_WEEK.TUESDAY"),a("DAYS_OF_WEEK.WEDNESDAY"),a("DAYS_OF_WEEK.THURSDAY"),a("DAYS_OF_WEEK.FRIDAY"),a("DAYS_OF_WEEK.SATURDAY")][e]},getHeatmapLevelClass:function(t){if(!t)return"outline-slate-100 dark:outline-slate-700 dark:bg-slate-700/40 bg-slate-50/50";var e=[].concat(T(r.value),[1/0]).findIndex((function(e){return t<=e&&t>0}));return e>6&&(e=5),0===e?"outline-slate-100 dark:outline-slate-700 dark:bg-slate-700/40 bg-slate-50/50":["bg-woot-50 dark:bg-woot-800/40 dark:outline-woot-800/80","bg-woot-100 dark:bg-woot-800/30 dark:outline-woot-800/80","bg-woot-200 dark:bg-woot-500/40 dark:outline-woot-700/80","bg-woot-300 dark:bg-woot-500/60 dark:outline-woot-600/80","bg-woot-600 dark:bg-woot-500/80 dark:outline-woot-500/80","bg-woot-800 dark:bg-woot-500 dark:outline-woot-400/80"][e-1]}}}},R=S,y=Object(u.a)(R,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"grid relative w-full gap-x-4 gap-y-2.5 overflow-y-scroll md:overflow-visible grid-cols-[80px_1fr] min-h-72"},[t.isLoading?[e("div",{staticClass:"grid gap-[5px] flex-shrink-0"},t._l(7,(function(t){return e("div",{key:t,staticClass:"w-full rounded-sm bg-slate-100 dark:bg-slate-900 animate-loader-pulse h-8 min-w-[70px]"})})),0),t._v(" "),e("div",{staticClass:"grid gap-[5px] w-full min-w-[700px]"},t._l(7,(function(a){return e("div",{key:a,staticClass:"grid gap-[5px] grid-cols-[repeat(24,_1fr)]"},t._l(24,(function(t){return e("div",{key:t,staticClass:"w-full h-8 rounded-sm bg-slate-100 dark:bg-slate-900 animate-loader-pulse"})})),0)})),0),t._v(" "),e("div"),t._v(" "),e("div",{staticClass:"grid grid-cols-[repeat(24,_1fr)] gap-[5px] w-full text-[8px] font-semibold h-5 text-slate-800 dark:text-slate-200"},t._l(24,(function(a){return e("div",{key:a,staticClass:"flex items-center justify-center"},[t._v("\n        "+t._s(a-1)+" \u2013 "+t._s(a)+"\n      ")])})),0)]:[e("div",{staticClass:"grid gap-[5px] flex-shrink-0"},t._l(a.processedData.keys(),(function(n){return e("div",{key:n,staticClass:"h-8 min-w-[70px] text-slate-800 dark:text-slate-200 text-[10px] font-semibold flex flex-col items-end justify-center"},[t._v("\n        "+t._s(a.getDayOfTheWeek(new Date(n)))+"\n        "),e("time",{staticClass:"font-normal text-slate-700 dark:text-slate-200"},[t._v("\n          "+t._s(a.formatDate(n))+"\n        ")])])})),0),t._v(" "),e("div",{staticClass:"grid gap-[5px] w-full min-w-[700px]"},t._l(a.processedData.keys(),(function(n){return e("div",{key:n,staticClass:"grid gap-[5px] grid-cols-[repeat(24,_1fr)]"},t._l(a.processedData.get(n),(function(t){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:a.getCountTooltip(t.value),expression:"getCountTooltip(data.value)",modifiers:{top:!0}}],key:t.timestamp,staticClass:"h-8 rounded-sm shadow-inner dark:outline dark:outline-1 shadow-black",class:a.getHeatmapLevelClass(t.value)})})),0)})),0),t._v(" "),e("div"),t._v(" "),e("div",{staticClass:"grid grid-cols-[repeat(24,_1fr)] gap-[5px] w-full text-[8px] font-semibold h-5 text-slate-800 dark:text-slate-200"},t._l(24,(function(a){return e("div",{key:a,staticClass:"flex items-center justify-center"},[t._v("\n        "+t._s(a-1)+" \u2013 "+t._s(a)+"\n      ")])})),0)]],2)}),[],!1,null,null,null).exports,w=a(523),N=a(1775),C=a(160),x=a(1780);function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){I(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function I(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var P={name:"LiveReports",components:{AgentTable:d,MetricCard:g,ReportHeatmap:y},data:function(){return{pageIndex:1}},computed:k(k({},Object(n.mapGetters)({agentStatus:"agents/getAgentStatus",agents:"agents/getAgents",accountConversationMetric:"getAccountConversationMetric",agentConversationMetric:"getAgentConversationMetric",accountConversationHeatmap:"getAccountConversationHeatmapData",uiFlags:"getOverviewUIFlags"})),{},{agentStatusMetrics:function(){var t=this,e={};return Object.keys(this.agentStatus).forEach((function(a){var n=t.$t("OVERVIEW_REPORTS.AGENT_STATUS.".concat(p.e[a]));e[n]=t.agentStatus[a]})),e},conversationMetrics:function(){var t=this,e={};return Object.keys(this.accountConversationMetric).forEach((function(a){var n=t.$t("OVERVIEW_REPORTS.ACCOUNT_CONVERSATIONS.".concat(p.e[a]));e[n]=t.accountConversationMetric[a]})),e}}),mounted:function(){var t=this;this.$store.dispatch("agents/get"),this.fetchAllData(),this.$emitter.on("fetch_overview_reports",(function(){t.fetchAllData()}))},methods:{fetchAllData:function(){this.fetchAccountConversationMetric(),this.fetchAgentConversationMetric(),this.fetchHeatmapData()},downloadHeatmapData:function(){var t=Object(w.a)(new Date);this.$store.dispatch("downloadAccountConversationHeatmap",{to:Object(N.a)(t)})},fetchHeatmapData:function(){if(!this.uiFlags.isFetchingAccountConversationsHeatmap){var t=Object(w.a)(new Date),e=Object(C.a)(Object(x.a)(t,6));this.accountConversationHeatmap.length&&(t=Object(w.a)(new Date),e=Object(C.a)(t)),this.$store.dispatch("fetchAccountConversationHeatmap",{metric:"conversations_count",from:Object(N.a)(e),to:Object(N.a)(t),groupBy:"hour",businessHours:!1})}},fetchAccountConversationMetric:function(){this.$store.dispatch("fetchAccountConversationMetric",{type:"account"})},fetchAgentConversationMetric:function(){this.$store.dispatch("fetchAgentConversationMetric",{type:"agent",page:this.pageIndex})},onPageNumberChange:function(t){this.pageIndex=t,this.fetchAgentConversationMetric()}}},M=Object(u.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 overflow-auto p-4"},[e("div",{staticClass:"flex flex-col md:flex-row items-center"},[e("div",{staticClass:"flex-1 w-full max-w-full md:w-[65%] md:max-w-[65%] conversation-metric"},[e("metric-card",{attrs:{header:t.$t("OVERVIEW_REPORTS.ACCOUNT_CONVERSATIONS.HEADER"),"is-loading":t.uiFlags.isFetchingAccountConversationMetric,"loading-message":t.$t("OVERVIEW_REPORTS.ACCOUNT_CONVERSATIONS.LOADING_MESSAGE")}},t._l(t.conversationMetrics,(function(a,n,r){return e("div",{key:r,staticClass:"metric-content flex-1 min-w-0"},[e("h3",{staticClass:"heading"},[t._v("\n            "+t._s(n)+"\n          ")]),t._v(" "),e("p",{staticClass:"metric"},[t._v(t._s(a))])])})),0)],1),t._v(" "),e("div",{staticClass:"flex-1 w-full max-w-full md:w-[35%] md:max-w-[35%]"},[e("metric-card",{attrs:{header:t.$t("OVERVIEW_REPORTS.AGENT_STATUS.HEADER")}},t._l(t.agentStatusMetrics,(function(a,n,r){return e("div",{key:r,staticClass:"metric-content flex-1 min-w-0"},[e("h3",{staticClass:"heading"},[t._v("\n            "+t._s(n)+"\n          ")]),t._v(" "),e("p",{staticClass:"metric"},[t._v(t._s(a))])])})),0)],1)]),t._v(" "),e("div",{staticClass:"max-w-full flex flex-wrap flex-row ml-auto mr-auto"},[e("metric-card",{attrs:{header:t.$t("OVERVIEW_REPORTS.CONVERSATION_HEATMAP.HEADER")},scopedSlots:t._u([{key:"control",fn:function(){return[e("woot-button",{attrs:{icon:"arrow-download",size:"small",variant:"smooth","color-scheme":"secondary"},on:{click:t.downloadHeatmapData}},[t._v("\n          Download Report\n        ")])]},proxy:!0}])},[t._v(" "),e("report-heatmap",{attrs:{"heat-data":t.accountConversationHeatmap,"is-loading":t.uiFlags.isFetchingAccountConversationsHeatmap}})],1)],1),t._v(" "),e("div",{staticClass:"max-w-full flex flex-wrap flex-row ml-auto mr-auto"},[e("metric-card",{attrs:{header:t.$t("OVERVIEW_REPORTS.AGENT_CONVERSATIONS.HEADER")}},[e("agent-table",{attrs:{agents:t.agents,"agent-metrics":t.agentConversationMetric,"page-index":t.pageIndex,"is-loading":t.uiFlags.isFetchingAgentConversationMetric},on:{"page-change":t.onPageNumberChange}})],1)],1)])}),[],!1,null,null,null);e.default=M.exports}}]);
//# sourceMappingURL=62-fb2979f1e7fb559c5edc.chunk.js.map