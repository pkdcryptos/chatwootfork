(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1461:function(t,e,o){},1522:function(t,e,o){"use strict";o(1461)},1596:function(t,e,o){"use strict";var n=o(129),s=o(69),i=o(67),r=o(750),a=o(314),c=o(739),d={components:{WootSubmitButton:r.a,Modal:a.a,WootMessageEditor:c.a},props:{responseContent:{type:String,default:""},onClose:{type:Function,default:function(){}}},setup:function(){return{v$:Object(n.a)()}},data:function(){return{shortCode:"",content:this.responseContent||"",addCanned:{showLoading:!1,message:""},show:!0}},validations:{shortCode:{required:s.f,minLength:Object(s.d)(2)},content:{required:s.f}},methods:{resetForm:function(){this.shortCode="",this.content="",this.v$.shortCode.$reset(),this.v$.content.$reset()},addCannedResponse:function(){var t=this;this.addCanned.showLoading=!0,this.$store.dispatch("createCannedResponse",{short_code:this.shortCode,content:this.content}).then((function(){t.addCanned.showLoading=!1,Object(i.a)(t.$t("CANNED_MGMT.ADD.API.SUCCESS_MESSAGE")),t.resetForm(),t.onClose()})).catch((function(e){t.addCanned.showLoading=!1;var o=(null===e||void 0===e?void 0:e.message)||t.$t("CANNED_MGMT.ADD.API.ERROR_MESSAGE");Object(i.a)(o)}))}}},l=(o(1522),o(8)),u=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("modal",{attrs:{show:t.show,"on-close":t.onClose},on:{"update:show":function(e){t.show=e}}},[e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.$t("CANNED_MGMT.ADD.TITLE"),"header-content":t.$t("CANNED_MGMT.ADD.DESC")}}),t._v(" "),e("form",{staticClass:"flex flex-col w-full",on:{submit:function(e){return e.preventDefault(),t.addCannedResponse()}}},[e("div",{staticClass:"w-full"},[e("label",{class:{error:t.v$.shortCode.$error}},[t._v("\n          "+t._s(t.$t("CANNED_MGMT.ADD.FORM.SHORT_CODE.LABEL"))+"\n          "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.shortCode,expression:"shortCode",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("CANNED_MGMT.ADD.FORM.SHORT_CODE.PLACEHOLDER")},domProps:{value:t.shortCode},on:{input:[function(e){e.target.composing||(t.shortCode=e.target.value.trim())},t.v$.shortCode.$touch],blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),e("div",{staticClass:"w-full"},[e("label",{class:{error:t.v$.content.$error}},[t._v("\n          "+t._s(t.$t("CANNED_MGMT.ADD.FORM.CONTENT.LABEL"))+"\n        ")]),t._v(" "),e("div",{staticClass:"editor-wrap"},[e("woot-message-editor",{staticClass:"message-editor [&>div]:px-1",class:{editor_warning:t.v$.content.$error},attrs:{"enable-variables":!0,"enable-canned-responses":!1,placeholder:t.$t("CANNED_MGMT.ADD.FORM.CONTENT.PLACEHOLDER")},on:{blur:t.v$.content.$touch},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-submit-button",{attrs:{disabled:t.v$.content.$invalid||t.v$.shortCode.$invalid||t.addCanned.showLoading,"button-text":t.$t("CANNED_MGMT.ADD.FORM.SUBMIT"),loading:t.addCanned.showLoading}}),t._v(" "),e("button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n          "+t._s(t.$t("CANNED_MGMT.ADD.CANCEL_BUTTON_TEXT"))+"\n        ")])],1)])],1)])}),[],!1,null,"2ac633c6",null);e.a=u.exports},1710:function(t,e,o){},1872:function(t,e,o){"use strict";o(1710)},2157:function(t,e,o){"use strict";o.r(e);o(51),o(26),o(11),o(23),o(30),o(25),o(31);var n=o(34),s=o(67),i=o(1596),r=(o(57),o(44),o(129)),a=o(69),c=o(739),d=o(750),l=o(314),u={components:{WootSubmitButton:d.a,Modal:l.a,WootMessageEditor:c.a},props:{id:{type:Number,default:null},edcontent:{type:String,default:""},edshortCode:{type:String,default:""},onClose:{type:Function,default:function(){}}},setup:function(){return{v$:Object(r.a)()}},data:function(){return{editCanned:{showAlert:!1,showLoading:!1},shortCode:this.edshortCode,content:this.edcontent,show:!0}},validations:{shortCode:{required:a.f,minLength:Object(a.d)(2)},content:{required:a.f}},computed:{pageTitle:function(){return"".concat(this.$t("CANNED_MGMT.EDIT.TITLE")," - ").concat(this.edshortCode)}},methods:{setPageName:function(t){var e=t.name;this.v$.content.$touch(),this.content=e},resetForm:function(){this.shortCode="",this.content="",this.v$.shortCode.$reset(),this.v$.content.$reset()},editCannedResponse:function(){var t=this;this.editCanned.showLoading=!0,this.$store.dispatch("updateCannedResponse",{id:this.id,short_code:this.shortCode,content:this.content}).then((function(){t.editCanned.showLoading=!1,Object(s.a)(t.$t("CANNED_MGMT.EDIT.API.SUCCESS_MESSAGE")),t.resetForm(),setTimeout((function(){t.onClose()}),10)})).catch((function(e){t.editCanned.showLoading=!1;var o=(null===e||void 0===e?void 0:e.message)||t.$t("CANNED_MGMT.EDIT.API.ERROR_MESSAGE");Object(s.a)(o)}))}}},p=(o(1872),o(8)),h=Object(p.a)(u,(function(){var t=this,e=t._self._c;return e("modal",{attrs:{show:t.show,"on-close":t.onClose},on:{"update:show":function(e){t.show=e}}},[e("div",{staticClass:"flex flex-col h-auto overflow-auto"},[e("woot-modal-header",{attrs:{"header-title":t.pageTitle}}),t._v(" "),e("form",{staticClass:"flex flex-col w-full",on:{submit:function(e){return e.preventDefault(),t.editCannedResponse()}}},[e("div",{staticClass:"w-full"},[e("label",{class:{error:t.v$.shortCode.$error}},[t._v("\n          "+t._s(t.$t("CANNED_MGMT.EDIT.FORM.SHORT_CODE.LABEL"))+"\n          "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.shortCode,expression:"shortCode",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("CANNED_MGMT.EDIT.FORM.SHORT_CODE.PLACEHOLDER")},domProps:{value:t.shortCode},on:{input:[function(e){e.target.composing||(t.shortCode=e.target.value.trim())},t.v$.shortCode.$touch],blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),e("div",{staticClass:"w-full"},[e("label",{class:{error:t.v$.content.$error}},[t._v("\n          "+t._s(t.$t("CANNED_MGMT.EDIT.FORM.CONTENT.LABEL"))+"\n        ")]),t._v(" "),e("div",{staticClass:"editor-wrap"},[e("woot-message-editor",{staticClass:"message-editor [&>div]:px-1",class:{editor_warning:t.v$.content.$error},attrs:{"enable-variables":!0,"enable-canned-responses":!1,placeholder:t.$t("CANNED_MGMT.EDIT.FORM.CONTENT.PLACEHOLDER")},on:{blur:t.v$.content.$touch},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-row justify-end w-full gap-2 px-0 py-2"},[e("woot-submit-button",{attrs:{disabled:t.v$.content.$invalid||t.v$.shortCode.$invalid||t.editCanned.showLoading,"button-text":t.$t("CANNED_MGMT.EDIT.FORM.SUBMIT"),loading:t.editCanned.showLoading}}),t._v(" "),e("button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n          "+t._s(t.$t("CANNED_MGMT.EDIT.CANCEL_BUTTON_TEXT"))+"\n        ")])],1)])],1)])}),[],!1,null,"5d5f78ba",null),C=h.exports;function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function E(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){v(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function v(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var _={components:{AddCanned:i.a,EditCanned:C},data:function(){return{loading:{},showAddPopup:!1,showEditPopup:!1,showDeleteConfirmationPopup:!1,selectedResponse:{},cannedResponseAPI:{message:""},sortOrder:"asc"}},computed:E(E({},Object(n.mapGetters)({records:"getCannedResponses",uiFlags:"getUIFlags"})),{},{deleteConfirmText:function(){return"".concat(this.$t("CANNED_MGMT.DELETE.CONFIRM.YES")," ").concat(this.selectedResponse.short_code)},deleteRejectText:function(){return"".concat(this.$t("CANNED_MGMT.DELETE.CONFIRM.NO")," ").concat(this.selectedResponse.short_code)},deleteMessage:function(){return" ".concat(this.selectedResponse.short_code,"?")}}),mounted:function(){var t=this;this.$store.dispatch("getCannedResponse").then((function(){t.toggleSort()}))},methods:{toggleSort:function(){var t=this;this.records.sort((function(e,o){return"asc"===t.sortOrder?e.short_code.localeCompare(o.short_code):o.short_code.localeCompare(e.short_code)})),this.sortOrder="asc"===this.sortOrder?"desc":"asc"},showAlertMessage:function(t){this.loading[this.selectedResponse.id]=!1,this.selectedResponse={},this.cannedResponseAPI.message=t,Object(s.a)(t)},openAddPopup:function(){this.showAddPopup=!0},hideAddPopup:function(){this.showAddPopup=!1},openEditPopup:function(t){this.showEditPopup=!0,this.selectedResponse=t},hideEditPopup:function(){this.showEditPopup=!1},openDeletePopup:function(t){this.showDeleteConfirmationPopup=!0,this.selectedResponse=t},closeDeletePopup:function(){this.showDeleteConfirmationPopup=!1},confirmDeletion:function(){this.loading[this.selectedResponse.id]=!0,this.closeDeletePopup(),this.deleteCannedResponse(this.selectedResponse.id)},deleteCannedResponse:function(t){var e=this;this.$store.dispatch("deleteCannedResponse",t).then((function(){e.showAlertMessage(e.$t("CANNED_MGMT.DELETE.API.SUCCESS_MESSAGE"))})).catch((function(t){var o=(null===t||void 0===t?void 0:t.message)||e.$t("CANNED_MGMT.DELETE.API.ERROR_MESSAGE");e.showAlertMessage(o)}))}}},T=Object(p.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 overflow-auto"},[e("woot-button",{attrs:{"color-scheme":"success","class-names":"button--fixed-top",icon:"add-circle"},on:{click:function(e){return t.openAddPopup()}}},[t._v("\n    "+t._s(t.$t("CANNED_MGMT.HEADER_BTN_TXT"))+"\n  ")]),t._v(" "),e("div",{staticClass:"flex flex-row gap-4 p-8"},[e("div",{staticClass:"w-full xl:w-3/5"},[t.uiFlags.fetchingList||t.records.length?t._e():e("p",{staticClass:"flex flex-col items-center justify-center h-full"},[t._v("\n        "+t._s(t.$t("CANNED_MGMT.LIST.404"))+"\n      ")]),t._v(" "),t.uiFlags.fetchingList?e("woot-loading-state",{attrs:{message:t.$t("CANNED_MGMT.LOADING")}}):t._e(),t._v(" "),!t.uiFlags.fetchingList&&t.records.length?e("table",{staticClass:"woot-table"},[e("thead",t._l(t.$t("CANNED_MGMT.LIST.TABLE_HEADER"),(function(o){return e("th",{key:o,staticClass:"last:text-right first:m-0 first:p-0"},[o!==t.$t("CANNED_MGMT.LIST.TABLE_HEADER[0]")?e("p",[t._v("\n              "+t._s(o)+"\n            ")]):t._e(),t._v(" "),o===t.$t("CANNED_MGMT.LIST.TABLE_HEADER[0]")?e("button",{staticClass:"flex items-center p-0 cursor-pointer",on:{click:t.toggleSort}},[e("p",{staticClass:"uppercase"},[t._v("\n                "+t._s(o)+"\n              ")]),t._v(" "),e("fluent-icon",{staticClass:"mb-2 ml-2",attrs:{icon:"asc"===t.sortOrder?"chevron-up":"chevron-down"}})],1):t._e()])})),0),t._v(" "),e("tbody",t._l(t.records,(function(o,n){return e("tr",{key:o.short_code},[e("td",{staticClass:"w-[8.75rem] truncate max-w-[8.75rem]",attrs:{title:o.short_code}},[t._v("\n              "+t._s(o.short_code)+"\n            ")]),t._v(" "),e("td",{staticClass:"break-all whitespace-normal"},[t._v("\n              "+t._s(o.content)+"\n            ")]),t._v(" "),e("td",{staticClass:"flex justify-end gap-1 min-w-[12.5rem]"},[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("CANNED_MGMT.EDIT.BUTTON_TEXT"),expression:"$t('CANNED_MGMT.EDIT.BUTTON_TEXT')",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny","color-scheme":"secondary",icon:"edit"},on:{click:function(e){return t.openEditPopup(o)}}}),t._v(" "),e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("CANNED_MGMT.DELETE.BUTTON_TEXT"),expression:"$t('CANNED_MGMT.DELETE.BUTTON_TEXT')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn","is-loading":t.loading[o.id]},on:{click:function(e){return t.openDeletePopup(o,n)}}})],1)])})),0)]):t._e()],1),t._v(" "),e("div",{staticClass:"hidden w-1/3 xl:block"},[e("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.$t("CANNED_MGMT.SIDEBAR_TXT"),expression:"$t('CANNED_MGMT.SIDEBAR_TXT')"}]})])]),t._v(" "),e("woot-modal",{attrs:{show:t.showAddPopup,"on-close":t.hideAddPopup},on:{"update:show":function(e){t.showAddPopup=e}}},[e("add-canned",{attrs:{"on-close":t.hideAddPopup}})],1),t._v(" "),e("woot-modal",{attrs:{show:t.showEditPopup,"on-close":t.hideEditPopup},on:{"update:show":function(e){t.showEditPopup=e}}},[t.showEditPopup?e("edit-canned",{attrs:{id:t.selectedResponse.id,"edshort-code":t.selectedResponse.short_code,edcontent:t.selectedResponse.content,"on-close":t.hideEditPopup}}):t._e()],1),t._v(" "),e("woot-delete-modal",{attrs:{show:t.showDeleteConfirmationPopup,"on-close":t.closeDeletePopup,"on-confirm":t.confirmDeletion,title:t.$t("CANNED_MGMT.DELETE.CONFIRM.TITLE"),message:t.$t("CANNED_MGMT.DELETE.CONFIRM.MESSAGE"),"message-value":t.deleteMessage,"confirm-text":t.deleteConfirmText,"reject-text":t.deleteRejectText},on:{"update:show":function(e){t.showDeleteConfirmationPopup=e}}})],1)}),[],!1,null,null,null);e.default=T.exports}}]);
//# sourceMappingURL=66-99690b3952eca78289d0.chunk.js.map