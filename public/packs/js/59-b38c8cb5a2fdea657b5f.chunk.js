(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{2617:function(t,e,n){"use strict";var o=n(250),s={__name:"BackButton",props:{backUrl:{type:[String,Object],default:""},buttonLabel:{type:String,default:""},compact:{type:Boolean,default:!1}},setup:function(t){var e=t,n=e.compact?"text-sm text-slate-600 dark:text-slate-300":"text-base text-woot-500 dark:text-woot-500";return{__sfc:!0,props:e,goBack:function(){""!==e.backUrl?o.a.push(e.backUrl):o.a.go(-1)},buttonStyleClass:n}}},a=n(8),r=Object(a.a)(s,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("button",{staticClass:"flex items-center font-normal p-0 cursor-pointer",class:n.buttonStyleClass,on:{"!click":function(t){return n.goBack.apply(null,arguments)}}},[e("fluent-icon",{staticClass:"-ml-1",attrs:{icon:"chevron-left"}}),t._v("\n  "+t._s(t.buttonLabel||t.$t("GENERAL_SETTINGS.BACK"))+"\n")],1)}),[],!1,null,null,null);e.a=r.exports},2683:function(t,e,n){"use strict";n(13),n(9),n(11),n(15),n(12),n(16);var o=n(34),s=n(352);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={components:{BackButton:n(2617).a},props:{headerTitle:{default:"",type:String},buttonRoute:{default:"",type:String},buttonText:{default:"",type:String},icon:{default:"",type:String},showBackButton:{type:Boolean,default:!1},showNewButton:{type:Boolean,default:!1},backUrl:{type:[String,Object],default:""},backButtonLabel:{type:String,default:""},showSidemenuIcon:{type:Boolean,default:!0}},setup:function(){return{isAdmin:Object(s.a)().isAdmin}},computed:r(r({},Object(o.mapGetters)({currentUser:"getCurrentUser"})),{},{iconClass:function(){return"icon ".concat(this.icon," header--icon")}})},l=n(8),u=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center h-14 min-h-[3.5rem] px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-50 dark:border-slate-800/50"},[e("h1",{staticClass:"flex items-center mb-0 text-2xl text-slate-900 dark:text-slate-100"},[t.showSidemenuIcon?e("woot-sidemenu-icon"):t._e(),t._v(" "),t.showBackButton?e("back-button",{staticClass:"ml-2 mr-4",attrs:{"button-label":t.backButtonLabel,"back-url":t.backUrl}}):t._e(),t._v(" "),t.icon?e("fluent-icon",{staticClass:"hidden ml-1 mr-2 rtl:ml-2 rtl:mr-1 md:block",class:t.iconClass,attrs:{icon:t.icon}}):t._e(),t._v(" "),t._t("default"),t._v(" "),e("span",{staticClass:"text-2xl font-medium text-slate-900 dark:text-slate-100"},[t._v("\n      "+t._s(t.headerTitle)+"\n    ")])],2),t._v(" "),t.showNewButton&&t.isAdmin?e("router-link",{staticClass:"button success button--fixed-top px-3.5 py-1 rounded-[5px] flex gap-2",attrs:{to:t.buttonRoute}},[e("fluent-icon",{attrs:{icon:"add-circle"}}),t._v(" "),e("span",{staticClass:"button__content"},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1):t._e()],1)}),[],!1,null,null,null);e.a=u.exports},2995:function(t,e,n){},2996:function(t,e,n){},3248:function(t,e,n){"use strict";n(2995)},3249:function(t,e,n){"use strict";n(2996)},3322:function(t,e,n){"use strict";n.r(e);n(57),n(13),n(9),n(11),n(15),n(12),n(16);var o=n(34),s=n(3036),a=n(1918),r=n(248),c={components:{WootMessageEditor:a.a},mixins:[r.a],data:function(){return{noteContent:""}},computed:{buttonDisabled:function(){return""===this.noteContent}},methods:{getKeyboardEvents:function(){var t=this;return{"$mod+Enter":{action:function(){return t.onAdd()},allowOnFocusedInput:!0}}},onAdd:function(){""!==this.noteContent&&this.$emit("add",this.noteContent),this.noteContent=""}}},i=(n(3248),n(8)),l=Object(i.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col mb-2 p-4 border border-solid border-slate-75 dark:border-slate-700 overflow-hidden rounded-md flex-grow shadow-sm bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100"},[e("woot-message-editor",{staticClass:"input--note",attrs:{placeholder:t.$t("NOTES.ADD.PLACEHOLDER"),"enable-suggestions":!1},model:{value:t.noteContent,callback:function(e){t.noteContent=e},expression:"noteContent"}}),t._v(" "),e("div",{staticClass:"flex justify-end w-full"},[e("woot-button",{attrs:{"color-scheme":"warning",title:t.$t("NOTES.ADD.TITLE"),"is-disabled":t.buttonDisabled},on:{click:t.onAdd}},[t._v("\n      "+t._s(t.$t("NOTES.ADD.BUTTON"))+" (\u2318\u23ce)\n    ")])],1)],1)}),[],!1,null,"9a26ccca",null).exports,u=(n(44),n(271)),d=n(1915),f=n(1916),b={components:{Thumbnail:u.a},mixins:[d.a],props:{id:{type:Number,default:0},note:{type:String,default:""},user:{type:Object,default:function(){}},createdAt:{type:Number,default:0}},data:function(){return{showDeleteModal:!1}},computed:{readableTime:function(){return Object(f.b)(this.createdAt)},noteAuthor:function(){return this.user||{}},noteAuthorName:function(){return this.noteAuthor.name||this.$t("APP_GLOBAL.DELETED_USER")}},methods:{toggleDeleteModal:function(){this.showDeleteModal=!this.showDeleteModal},onDelete:function(){this.$emit("delete",this.id)},confirmDeletion:function(){this.onDelete(),this.closeDelete()},closeDelete:function(){this.showDeleteModal=!1}}},p=(n(3249),Object(i.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col flex-grow p-4 mb-2 overflow-hidden bg-white border border-solid rounded-md shadow-sm border-slate-75 dark:border-slate-700 dark:bg-slate-900 text-slate-700 dark:text-slate-100 note-wrap"},[e("div",{staticClass:"flex items-end justify-between gap-1 text-xs"},[e("div",{staticClass:"flex items-center"},[e("thumbnail",{attrs:{title:t.noteAuthorName,src:t.noteAuthor.thumbnail,username:t.noteAuthorName,size:"20px"}}),t._v(" "),e("div",{staticClass:"my-0 mx-1 p-0.5 flex flex-row gap-1"},[e("span",{staticClass:"font-medium text-slate-800 dark:text-slate-100"},[t._v("\n          "+t._s(t.noteAuthorName)+"\n        ")]),t._v(" "),e("span",{staticClass:"text-slate-700 dark:text-slate-100"},[t._v("\n          "+t._s(t.$t("NOTES.LIST.LABEL"))+"\n        ")]),t._v(" "),e("span",{staticClass:"font-medium text-slate-700 dark:text-slate-100"},[t._v("\n          "+t._s(t.readableTime)+"\n        ")])])],1),t._v(" "),e("div",{staticClass:"flex invisible actions"},[e("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("NOTES.CONTENT_HEADER.DELETE"),expression:"$t('NOTES.CONTENT_HEADER.DELETE')"}],attrs:{variant:"smooth",size:"tiny",icon:"delete","color-scheme":"secondary"},on:{click:t.toggleDeleteModal}})],1),t._v(" "),t.showDeleteModal?e("woot-delete-modal",{attrs:{show:t.showDeleteModal,"on-close":t.closeDelete,"on-confirm":t.confirmDeletion,title:t.$t("DELETE_NOTE.CONFIRM.TITLE"),message:t.$t("DELETE_NOTE.CONFIRM.MESSAGE"),"confirm-text":t.$t("DELETE_NOTE.CONFIRM.YES"),"reject-text":t.$t("DELETE_NOTE.CONFIRM.NO")},on:{"update:show":function(e){t.showDeleteModal=e}}}):t._e()],1),t._v(" "),e("p",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.formatMessage(t.note||""),expression:"formatMessage(note || '')"}],staticClass:"mt-4 note__content"})])}),[],!1,null,"73a29b02",null).exports),h=n(191),m={components:{AddNote:l,ContactNote:p,Spinner:h.a},props:{notes:{type:Array,default:function(){return[]}},isFetching:{type:Boolean,default:!1}},methods:{onAddNote:function(t){this.$emit("add",t)},onEditNote:function(t){this.$emit("edit",t)},onDeleteNote:function(t){this.$emit("delete",t)}}};function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={components:{NoteList:Object(i.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("add-note",{on:{add:t.onAddNote}}),t._v(" "),t._l(t.notes,(function(n){return e("contact-note",{key:n.id,attrs:{id:n.id,note:n.content,user:n.user,"created-at":n.created_at},on:{edit:t.onEditNote,delete:t.onDeleteNote}})})),t._v(" "),t.isFetching?e("div",{staticClass:"text-center p-4 text-base"},[e("spinner",{attrs:{size:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("NOTES.FETCHING_NOTES")))])],1):t.notes.length?t._e():e("div",{staticClass:"text-center p-4 text-base"},[e("span",[t._v(t._s(t.$t("NOTES.NOT_AVAILABLE")))])])],2)}),[],!1,null,null,null).exports},props:{contactId:{type:Number,required:!0}},computed:v(v({},Object(o.mapGetters)({uiFlags:"contactNotes/getUIFlags"})),{},{notes:function(){return this.$store.getters["contactNotes/getAllNotesByContact"](this.contactId)}}),mounted:function(){this.fetchContactNotes()},methods:{fetchContactNotes:function(){var t=this.contactId;t&&this.$store.dispatch("contactNotes/get",{contactId:t})},onAdd:function(t){var e=this.contactId;this.$store.dispatch("contactNotes/create",{content:t,contactId:e})},onDelete:function(t){var e=this.contactId;this.$store.dispatch("contactNotes/delete",{noteId:t,contactId:e})}}},w=Object(i.a)(_,(function(){var t=this;return(0,t._self._c)("note-list",{attrs:{"is-fetching":t.uiFlags.isFetching,notes:t.notes},on:{add:t.onAdd,delete:t.onDelete}})}),[],!1,null,null,null).exports,x=n(2683);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var N={components:{ContactInfoPanel:s.a,ContactNotes:w,SettingsHeader:x.a,Spinner:h.a,Thumbnail:u.a},props:{contactId:{type:[String,Number],required:!0}},data:function(){return{selectedTabIndex:0}},computed:E(E({},Object(o.mapGetters)({uiFlags:"contacts/getUIFlags"})),{},{tabs:function(){return[{key:0,name:this.$t("NOTES.HEADER.TITLE")}]},showEmptySearchResult:function(){return!!this.searchQuery&&0===this.records.length},contact:function(){return this.$store.getters["contacts/getContact"](this.contactId)},backUrl:function(){return"/app/accounts/".concat(this.$route.params.accountId,"/contacts")}}),mounted:function(){this.fetchContactDetails()},methods:{onClickTabChange:function(t){this.selectedTabIndex=t},fetchContactDetails:function(){var t=this.contactId;this.$store.dispatch("contacts/show",{id:t})}}},T=Object(i.a)(N,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between flex-col h-full m-0 flex-1 bg-white dark:bg-slate-900"},[e("settings-header",{attrs:{"button-route":"new","header-title":t.contact.name,"show-back-button":"","back-button-label":t.$t("CONTACT_PROFILE.BACK_BUTTON"),"back-url":t.backUrl,"show-new-button":!1}},[t.contact.thumbnail?e("thumbnail",{staticClass:"mr-2 rtl:mr-0 rtl:ml-2",attrs:{src:t.contact.thumbnail,username:t.contact.name,size:"32px"}}):t._e()],1),t._v(" "),t.uiFlags.isFetchingItem?e("div",{staticClass:"text-center p-4 text-base h-full"},[e("spinner",{attrs:{size:""}}),t._v(" "),e("span",[t._v(t._s(t.$t("CONTACT_PROFILE.LOADING")))])],1):t.contact.id?e("div",{staticClass:"overflow-hidden flex-1 min-w-0"},[e("div",{staticClass:"flex flex-wrap ml-auto mr-auto max-w-full h-full"},[e("contact-info-panel",{attrs:{"show-close-button":!1,"show-avatar":!1,contact:t.contact}}),t._v(" "),e("div",{staticClass:"w-3/4 h-full"},[e("woot-tabs",{attrs:{index:t.selectedTabIndex},on:{change:t.onClickTabChange}},t._l(t.tabs,(function(t){return e("woot-tabs-item",{key:t.key,attrs:{name:t.name,"show-badge":!1}})})),1),t._v(" "),e("div",{staticClass:"bg-slate-25 dark:bg-slate-800 h-[calc(100%-40px)] p-4 overflow-auto"},[0===t.selectedTabIndex?e("contact-notes",{attrs:{"contact-id":Number(t.contactId)}}):t._e()],1)],1)],1)]):t._e()],1)}),[],!1,null,null,null);e.default=T.exports}}]);
//# sourceMappingURL=59-b38c8cb5a2fdea657b5f.chunk.js.map