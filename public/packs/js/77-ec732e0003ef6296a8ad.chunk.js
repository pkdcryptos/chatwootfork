(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1829:function(e,i,a){},2088:function(e,i,a){"use strict";a(1829)},2163:function(e,i,a){"use strict";a.r(i);a(51),a(23),a(44),a(80),a(103),a(161),a(321),a(52),a(73),a(72),a(18),a(11),a(36),a(9),a(39),a(16),a(20),a(68);var o=a(743),d=a(319),n={props:{context:{type:Object,required:!0}},computed:{type:function(){return this.context.type},attributes:function(){return this.context.attributes||{}},hasValue:function(){return this.context.hasValue}}},t=a(311);function m(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"===typeof e)return l(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,i){(null==i||i>e.length)&&(i=e.length);for(var a=0,o=new Array(i);a<i;a++)o[a]=e[a];return o}var c={components:{FluentIcon:d.a},mixins:[n,t.a],props:{placeholder:{type:String,default:""},hasErrorInPhoneInput:{type:Boolean,default:!1}},data:function(){return{selectedIndex:-1,showDropdown:!1,searchCountry:"",activeCountryCode:"",activeDialCode:"",phoneNumber:""}},computed:{countries:function(){return[{name:this.dropdownFirstItemName,dial_code:"",emoji:"",id:""}].concat(m(o.a))},dropdownFirstItemName:function(){return this.activeCountryCode?"Clear selection":"Select Country"},dropdownClass:function(){return"".concat(this.$dm("bg-slate-100","dark:bg-slate-700")," ").concat(this.$dm("text-slate-700","dark:text-slate-50"))},dropdownBackgroundClass:function(){return"".concat(this.$dm("bg-white","dark:bg-slate-700")," ").concat(this.$dm("text-slate-700","dark:text-slate-50"))},dropdownItemClass:function(){return"".concat(this.$dm("text-slate-700","dark:text-slate-50")," ").concat(this.$dm("hover:bg-slate-50","dark:hover:bg-slate-600"))},activeDropdownItemClass:function(){return"active ".concat(this.$dm("bg-slate-100","dark:bg-slate-800"))},focusedDropdownItemClass:function(){return"focus ".concat(this.$dm("bg-slate-50","dark:bg-slate-600"))},inputHasError:function(){return this.hasErrorInPhoneInput?"border-red-200 hover:border-red-300 focus:border-red-300 ".concat(this.inputLightAndDarkModeColor):"hover:border-black-300 focus:border-black-300 ".concat(this.inputLightAndDarkModeColor," ").concat(this.inputBorderColor)},inputBorderColor:function(){return"".concat(this.$dm("border-black-200","dark:border-black-500"))},inputLightAndDarkModeColor:function(){return"".concat(this.$dm("bg-white","dark:bg-slate-600")," ").concat(this.$dm("text-slate-700","dark:text-slate-50"))},items:function(){var e=this;return this.countries.filter((function(i){var a=i.name,o=i.dial_code,d=i.id,n=e.searchCountry.toLowerCase();return a.toLowerCase().includes(n)||o.toLowerCase().includes(n)||d.toLowerCase().includes(n)}))},activeCountry:function(){var e=this;return this.countries.find((function(i){return i.id===e.activeCountryCode}))||""}},watch:{items:function(e){e.length<this.selectedIndex+1&&(this.selectedIndex=0)}},methods:{setContextValue:function(e){this.context.model="".concat(e).concat(this.phoneNumber)},dynamicallySetCountryCode:function(e){if(e){var i=o.a.find((function(i){return e.startsWith(i.dial_code)}));i&&(this.activeCountryCode=i.id,this.activeDialCode=i.dial_code,this.phoneNumber=e.replace(i.dial_code,""))}},onChange:function(e){this.phoneNumber=e.target.value,this.dynamicallySetCountryCode(this.phoneNumber),this.setContextValue(this.activeDialCode)},dropdownItem:function(){var e;return this.showDropdown?Array.from(null===(e=this.$refs.dropdown)||void 0===e?void 0:e.querySelectorAll("div.country-dropdown div.country-dropdown--item")):[]},focusedOrActiveItem:function(e){var i;return this.showDropdown?Array.from(null===(i=this.$refs.dropdown)||void 0===i?void 0:i.querySelectorAll("div.country-dropdown div.country-dropdown--item.".concat(e))):[]},adjustScroll:function(){var e=this;this.$nextTick((function(){e.scrollToFocusedOrActiveItem(e.focusedOrActiveItem("focus"))}))},adjustSelection:function(e){if(this.showDropdown){var i=this.items.length-1;"up"===e?this.selectedIndex=this.selectedIndex<=0?i:this.selectedIndex-1:"down"===e&&(this.selectedIndex=this.selectedIndex>=i?0:this.selectedIndex+1),this.adjustScroll()}},moveSelectionUp:function(){this.adjustSelection("up")},moveSelectionDown:function(){this.adjustSelection("down")},onSelect:function(){this.showDropdown&&-1!==this.selectedIndex&&this.onSelectCountry(this.items[this.selectedIndex])},scrollToFocusedOrActiveItem:function(e){var i=e;if(i.length>0){var a=this.$refs.dropdown,o=a.clientHeight,d=i[0].offsetTop-o/2+i[0].offsetHeight/2;a.scrollTo({top:d,behavior:"auto"})}},onSelectCountry:function(e){this.activeCountryCode=e.id,this.searchCountry="",this.activeDialCode=e.dial_code?e.dial_code:"",this.setContextValue(e.dial_code),this.closeDropdown()},toggleCountryDropdown:function(){var e=this;this.showDropdown=!this.showDropdown,this.selectedIndex=-1,this.showDropdown&&this.$nextTick((function(){e.$refs.searchbar.focus(),e.scrollToFocusedOrActiveItem(e.focusedOrActiveItem("active"))}))},closeDropdown:function(){this.selectedIndex=-1,this.showDropdown=!1}}},r=(a(2088),a(8)),s=Object(r.a)(c,(function(){var e=this,i=e._self._c;return i("div",{staticClass:"phone-input--wrap relative mt-2"},[i("div",{staticClass:"phone-input rounded w-full flex items-center justify-start outline-none border border-solid",class:e.inputHasError},[i("div",{staticClass:"country-emoji--wrap h-full cursor-pointer flex items-center justify-between px-2 py-2",class:e.dropdownClass,on:{click:e.toggleCountryDropdown}},[e.activeCountry.emoji?i("h5",{staticClass:"text-xl mb-0"},[e._v("\n        "+e._s(e.activeCountry.emoji)+"\n      ")]):i("fluent-icon",{staticClass:"fluent-icon",attrs:{icon:"globe",size:"20"}}),e._v(" "),i("fluent-icon",{staticClass:"fluent-icon",attrs:{icon:"chevron-down",size:"12"}})],1),e._v(" "),e.activeDialCode?i("span",{staticClass:"py-2 pr-0 pl-2 text-base",class:e.$dm("text-slate-700","dark:text-slate-50")},[e._v("\n      "+e._s(e.activeDialCode)+"\n    ")]):e._e(),e._v(" "),i("input",{staticClass:"border-0 w-full py-2 pl-2 pr-3 leading-tight outline-none h-full rounded-r",class:e.inputLightAndDarkModeColor,attrs:{type:"phoneInput",name:"phoneNumber",placeholder:e.placeholder},domProps:{value:e.phoneNumber},on:{input:e.onChange,blur:e.context.blurHandler}})]),e._v(" "),e.showDropdown?i("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.closeDropdown,expression:"closeDropdown"}],ref:"dropdown",staticClass:"country-dropdown h-48 overflow-y-auto z-10 absolute top-12 px-0 pt-0 pl-1 pr-1 pb-1 rounded shadow-lg",class:e.dropdownBackgroundClass,on:{keydown:[function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"up",38,i.key,["Up","ArrowUp"])?null:e.moveSelectionUp.apply(null,arguments)},function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"down",40,i.key,["Down","ArrowDown"])?null:e.moveSelectionDown.apply(null,arguments)},function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.onSelect.apply(null,arguments)}]}},[i("div",{staticClass:"sticky top-0",class:e.dropdownBackgroundClass},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchCountry,expression:"searchCountry"}],ref:"searchbar",staticClass:"dropdown-search h-8 text-sm mb-1 mt-1 w-full rounded py-2 px-3 outline-none border border-solid",class:[e.$dm("bg-slate-50","dark:bg-slate-600"),e.inputBorderColor],attrs:{type:"text",placeholder:"Search country"},domProps:{value:e.searchCountry},on:{input:function(i){i.target.composing||(e.searchCountry=i.target.value)}}})]),e._v(" "),e._l(e.items,(function(a,o){return i("div",{key:o,ref:"dropdownItem",refInFor:!0,staticClass:"country-dropdown--item h-8 flex items-center cursor-pointer rounded py-2 px-2",class:[e.dropdownItemClass,a.id===e.activeCountryCode?e.activeDropdownItemClass:"",o===e.selectedIndex?e.focusedDropdownItemClass:""],on:{click:function(i){return e.onSelectCountry(a)}}},[a.emoji?i("span",{staticClass:"mr-2 text-xl"},[e._v(e._s(a.emoji))]):e._e(),e._v(" "),i("span",{staticClass:"truncate text-sm leading-5"},[e._v("\n        "+e._s(a.name)+"\n      ")]),e._v(" "),i("span",{staticClass:"ml-2 text-xs"},[e._v(e._s(a.dial_code))])])})),e._v(" "),0===e.items.length?i("div",[i("span",{staticClass:"text-sm mt-4 justify-center text-center flex",class:e.$dm("text-slate-700","dark:text-slate-50")},[e._v("\n        "+e._s(e.$t("PRE_CHAT_FORM.FIELDS.PHONE_NUMBER.DROPDOWN_EMPTY"))+"\n      ")])]):e._e()],2):e._e()])}),[],!1,null,"74dd26b2",null);i.default=s.exports},743:function(e,i,a){"use strict";i.a=[{name:"Afghanistan",dial_code:"+93",emoji:"\ud83c\udde6\ud83c\uddeb",id:"AF"},{name:"Aland Islands",dial_code:"+358",emoji:"\ud83c\udde6\ud83c\uddfd",id:"AX"},{name:"Albania",dial_code:"+355",emoji:"\ud83c\udde6\ud83c\uddf1",id:"AL"},{name:"Algeria",dial_code:"+213",emoji:"\ud83c\udde9\ud83c\uddff",id:"DZ"},{name:"AmericanSamoa",dial_code:"+1684",emoji:"\ud83c\udde6\ud83c\uddf8",id:"AS"},{name:"Andorra",dial_code:"+376",emoji:"\ud83c\udde6\ud83c\udde9",id:"AD"},{name:"Angola",dial_code:"+244",emoji:"\ud83c\udde6\ud83c\uddf4",id:"AO"},{name:"Anguilla",dial_code:"+1264",emoji:"\ud83c\udde6\ud83c\uddee",id:"AI"},{name:"Antarctica",dial_code:"+672",emoji:"\ud83c\udde6\ud83c\uddf6",id:"AQ"},{name:"Antigua and Barbuda",dial_code:"+1268",emoji:"\ud83c\udde6\ud83c\uddec",id:"AG"},{name:"Argentina",dial_code:"+54",emoji:"\ud83c\udde6\ud83c\uddf7",id:"AR"},{name:"Armenia",dial_code:"+374",emoji:"\ud83c\udde6\ud83c\uddf2",id:"AM"},{name:"Aruba",dial_code:"+297",emoji:"\ud83c\udde6\ud83c\uddfc",id:"AW"},{name:"Australia",dial_code:"+61",emoji:"\ud83c\udde6\ud83c\uddfa",id:"AU"},{name:"Austria",dial_code:"+43",emoji:"\ud83c\udde6\ud83c\uddf9",id:"AT"},{name:"Azerbaijan",dial_code:"+994",emoji:"\ud83c\udde6\ud83c\uddff",id:"AZ"},{name:"Bahamas",dial_code:"+1242",emoji:"\ud83c\udde7\ud83c\uddf8",id:"BS"},{name:"Bahrain",dial_code:"+973",emoji:"\ud83c\udde7\ud83c\udded",id:"BH"},{name:"Bangladesh",dial_code:"+880",emoji:"\ud83c\udde7\ud83c\udde9",id:"BD"},{name:"Barbados",dial_code:"+1246",emoji:"\ud83c\udde7\ud83c\udde7",id:"BB"},{name:"Belarus",dial_code:"+375",emoji:"\ud83c\udde7\ud83c\uddfe",id:"BY"},{name:"Belgium",dial_code:"+32",emoji:"\ud83c\udde7\ud83c\uddea",id:"BE"},{name:"Belize",dial_code:"+501",emoji:"\ud83c\udde7\ud83c\uddff",id:"BZ"},{name:"Benin",dial_code:"+229",emoji:"\ud83c\udde7\ud83c\uddef",id:"BJ"},{name:"Bermuda",dial_code:"+1441",emoji:"\ud83c\udde7\ud83c\uddf2",id:"BM"},{name:"Bhutan",dial_code:"+975",emoji:"\ud83c\udde7\ud83c\uddf9",id:"BT"},{name:"Bolivia, Plurinational State of",dial_code:"+591",emoji:"\ud83c\udde7\ud83c\uddf4",id:"BO"},{name:"Bosnia and Herzegovina",dial_code:"+387",emoji:"\ud83c\udde7\ud83c\udde6",id:"BA"},{name:"Botswana",dial_code:"+267",emoji:"\ud83c\udde7\ud83c\uddfc",id:"BW"},{name:"Brazil",dial_code:"+55",emoji:"\ud83c\udde7\ud83c\uddf7",id:"BR"},{name:"British Indian Ocean Territory",dial_code:"+246",emoji:"\ud83c\uddee\ud83c\uddf4",id:"IO"},{name:"Brunei Darussalam",dial_code:"+673",emoji:"\ud83c\udde7\ud83c\uddf3",id:"BN"},{name:"Bulgaria",dial_code:"+359",emoji:"\ud83c\udde7\ud83c\uddec",id:"BG"},{name:"Burkina Faso",dial_code:"+226",emoji:"\ud83c\udde7\ud83c\uddeb",id:"BF"},{name:"Burundi",dial_code:"+257",emoji:"\ud83c\udde7\ud83c\uddee",id:"BI"},{name:"Cambodia",dial_code:"+855",emoji:"\ud83c\uddf0\ud83c\udded",id:"KH"},{name:"Cameroon",dial_code:"+237",emoji:"\ud83c\udde8\ud83c\uddf2",id:"CM"},{name:"Canada",dial_code:"+1",emoji:"\ud83c\udde8\ud83c\udde6",id:"CA"},{name:"Cape Verde",dial_code:"+238",emoji:"\ud83c\udde8\ud83c\uddfb",id:"CV"},{name:"Cayman Islands",dial_code:"+345",emoji:"\ud83c\uddf0\ud83c\uddfe",id:"KY"},{name:"Central African Republic",dial_code:"+236",emoji:"\ud83c\udde8\ud83c\uddeb",id:"CF"},{name:"Chad",dial_code:"+235",emoji:"\ud83c\uddf9\ud83c\udde9",id:"TD"},{name:"Chile",dial_code:"+56",emoji:"\ud83c\udde8\ud83c\uddf1",id:"CL"},{name:"China",dial_code:"+86",emoji:"\ud83c\udde8\ud83c\uddf3",id:"CN"},{name:"Christmas Island",dial_code:"+61",emoji:"\ud83c\udde8\ud83c\uddfd",id:"CX"},{name:"Cocos (Keeling) Islands",dial_code:"+61",emoji:"\ud83c\udde8\ud83c\udde8",id:"CC"},{name:"Colombia",dial_code:"+57",emoji:"\ud83c\udde8\ud83c\uddf4",id:"CO"},{name:"Comoros",dial_code:"+269",emoji:"\ud83c\uddf0\ud83c\uddf2",id:"KM"},{name:"Congo",dial_code:"+242",emoji:"\ud83c\udde8\ud83c\uddec",id:"CG"},{name:"Congo, The Democratic Republic of the Congo",dial_code:"+243",emoji:"\ud83c\udde8\ud83c\udde9",id:"CD"},{name:"Cook Islands",dial_code:"+682",emoji:"\ud83c\udde8\ud83c\uddf0",id:"CK"},{name:"Costa Rica",dial_code:"+506",emoji:"\ud83c\udde8\ud83c\uddf7",id:"CR"},{name:"Cote d'Ivoire",dial_code:"+225",emoji:"\ud83c\udde8\ud83c\uddee",id:"CI"},{name:"Croatia",dial_code:"+385",emoji:"\ud83c\udded\ud83c\uddf7",id:"HR"},{name:"Cuba",dial_code:"+53",emoji:"\ud83c\udde8\ud83c\uddfa",id:"CU"},{name:"Cyprus",dial_code:"+357",emoji:"\ud83c\udde8\ud83c\uddfe",id:"CY"},{name:"Czech Republic",dial_code:"+420",emoji:"\ud83c\udde8\ud83c\uddff",id:"CZ"},{name:"Denmark",dial_code:"+45",emoji:"\ud83c\udde9\ud83c\uddf0",id:"DK"},{name:"Djibouti",dial_code:"+253",emoji:"\ud83c\udde9\ud83c\uddef",id:"DJ"},{name:"Dominica",dial_code:"+1767",emoji:"\ud83c\udde9\ud83c\uddf2",id:"DM"},{name:"Dominican Republic",dial_code:"+1849",emoji:"\ud83c\udde9\ud83c\uddf4",id:"DO"},{name:"Ecuador",dial_code:"+593",emoji:"\ud83c\uddea\ud83c\udde8",id:"EC"},{name:"Egypt",dial_code:"+20",emoji:"\ud83c\uddea\ud83c\uddec",id:"EG"},{name:"El Salvador",dial_code:"+503",emoji:"\ud83c\uddf8\ud83c\uddfb",id:"SV"},{name:"Equatorial Guinea",dial_code:"+240",emoji:"\ud83c\uddec\ud83c\uddf6",id:"GQ"},{name:"Eritrea",dial_code:"+291",emoji:"\ud83c\uddea\ud83c\uddf7",id:"ER"},{name:"Estonia",dial_code:"+372",emoji:"\ud83c\uddea\ud83c\uddea",id:"EE"},{name:"Ethiopia",dial_code:"+251",emoji:"\ud83c\uddea\ud83c\uddf9",id:"ET"},{name:"Falkland Islands (Malvinas)",dial_code:"+500",emoji:"\ud83c\uddeb\ud83c\uddf0",id:"FK"},{name:"Faroe Islands",dial_code:"+298",emoji:"\ud83c\uddeb\ud83c\uddf4",id:"FO"},{name:"Fiji",dial_code:"+679",emoji:"\ud83c\uddeb\ud83c\uddef",id:"FJ"},{name:"Finland",dial_code:"+358",emoji:"\ud83c\uddeb\ud83c\uddee",id:"FI"},{name:"France",dial_code:"+33",emoji:"\ud83c\uddeb\ud83c\uddf7",id:"FR"},{name:"French Guiana",dial_code:"+594",emoji:"\ud83c\uddec\ud83c\uddeb",id:"GF"},{name:"French Polynesia",dial_code:"+689",emoji:"\ud83c\uddf5\ud83c\uddeb",id:"PF"},{name:"Gabon",dial_code:"+241",emoji:"\ud83c\uddec\ud83c\udde6",id:"GA"},{name:"Gambia",dial_code:"+220",emoji:"\ud83c\uddec\ud83c\uddf2",id:"GM"},{name:"Georgia",dial_code:"+995",emoji:"\ud83c\uddec\ud83c\uddea",id:"GE"},{name:"Germany",dial_code:"+49",emoji:"\ud83c\udde9\ud83c\uddea",id:"DE"},{name:"Ghana",dial_code:"+233",emoji:"\ud83c\uddec\ud83c\udded",id:"GH"},{name:"Gibraltar",dial_code:"+350",emoji:"\ud83c\uddec\ud83c\uddee",id:"GI"},{name:"Greece",dial_code:"+30",emoji:"\ud83c\uddec\ud83c\uddf7",id:"GR"},{name:"Greenland",dial_code:"+299",emoji:"\ud83c\uddec\ud83c\uddf1",id:"GL"},{name:"Grenada",dial_code:"+1473",emoji:"\ud83c\uddec\ud83c\udde9",id:"GD"},{name:"Guadeloupe",dial_code:"+590",emoji:"\ud83c\uddec\ud83c\uddf5",id:"GP"},{name:"Guam",dial_code:"+1671",emoji:"\ud83c\uddec\ud83c\uddfa",id:"GU"},{name:"Guatemala",dial_code:"+502",emoji:"\ud83c\uddec\ud83c\uddf9",id:"GT"},{name:"Guernsey",dial_code:"+44",emoji:"\ud83c\uddec\ud83c\uddec",id:"GG"},{name:"Guinea",dial_code:"+224",emoji:"\ud83c\uddec\ud83c\uddf3",id:"GN"},{name:"Guinea-Bissau",dial_code:"+245",emoji:"\ud83c\uddec\ud83c\uddfc",id:"GW"},{name:"Guyana",dial_code:"+595",emoji:"\ud83c\uddec\ud83c\uddfe",id:"GY"},{name:"Haiti",dial_code:"+509",emoji:"\ud83c\udded\ud83c\uddf9",id:"HT"},{name:"Holy See (Vatican City State)",dial_code:"+379",emoji:"\ud83c\uddfb\ud83c\udde6",id:"VA"},{name:"Honduras",dial_code:"+504",emoji:"\ud83c\udded\ud83c\uddf3",id:"HN"},{name:"Hong Kong",dial_code:"+852",emoji:"\ud83c\udded\ud83c\uddf0",id:"HK"},{name:"Hungary",dial_code:"+36",emoji:"\ud83c\udded\ud83c\uddfa",id:"HU"},{name:"Iceland",dial_code:"+354",emoji:"\ud83c\uddee\ud83c\uddf8",id:"IS"},{name:"India",dial_code:"+91",emoji:"\ud83c\uddee\ud83c\uddf3",id:"IN"},{name:"Indonesia",dial_code:"+62",emoji:"\ud83c\uddee\ud83c\udde9",id:"ID"},{name:"Iran, Islamic Republic of Persian Gulf",dial_code:"+98",emoji:"\ud83c\uddee\ud83c\uddf7",id:"IR"},{name:"Iraq",dial_code:"+964",emoji:"\ud83c\uddee\ud83c\uddf7",id:"IQ"},{name:"Ireland",dial_code:"+353",emoji:"\ud83c\uddee\ud83c\uddea",id:"IE"},{name:"Isle of Man",dial_code:"+44",emoji:"\ud83c\uddee\ud83c\uddf2",id:"IM"},{name:"Israel",dial_code:"+972",emoji:"\ud83c\uddee\ud83c\uddf1",id:"IL"},{name:"Italy",dial_code:"+39",emoji:"\ud83c\uddee\ud83c\uddf9",id:"IT"},{name:"Jamaica",dial_code:"+1876",emoji:"\ud83c\uddef\ud83c\uddf2",id:"JM"},{name:"Japan",dial_code:"+81",emoji:"\ud83c\uddef\ud83c\uddf5",id:"JP"},{name:"Jersey",dial_code:"+44",emoji:"\ud83c\uddef\ud83c\uddea",id:"JE"},{name:"Jordan",dial_code:"+962",emoji:"\ud83c\uddef\ud83c\uddf4",id:"JO"},{name:"Kazakhstan",dial_code:"+77",emoji:"\ud83c\uddf0\ud83c\uddff",id:"KZ"},{name:"Kenya",dial_code:"+254",emoji:"\ud83c\uddf0\ud83c\uddea",id:"KE"},{name:"Kiribati",dial_code:"+686",emoji:"\ud83c\uddf0\ud83c\uddee",id:"KI"},{name:"Korea, Democratic People's Republic of Korea",dial_code:"+850",emoji:"\ud83c\uddf0\ud83c\uddf5",id:"KP"},{name:"Korea, Republic of South Korea",dial_code:"+82",emoji:"\ud83c\uddf0\ud83c\uddf7",id:"KR"},{name:"Kuwait",dial_code:"+965",emoji:"\ud83c\uddf0\ud83c\uddfc",id:"KW"},{name:"Kyrgyzstan",dial_code:"+996",emoji:"\ud83c\uddf0\ud83c\uddec",id:"KG"},{name:"Laos",dial_code:"+856",emoji:"\ud83c\uddf1\ud83c\udde6",id:"LA"},{name:"Latvia",dial_code:"+371",emoji:"\ud83c\uddf1\ud83c\uddfb",id:"LV"},{name:"Lebanon",dial_code:"+961",emoji:"\ud83c\uddf1\ud83c\udde7",id:"LB"},{name:"Lesotho",dial_code:"+266",emoji:"\ud83c\uddf1\ud83c\uddf8",id:"LS"},{name:"Liberia",dial_code:"+231",emoji:"\ud83c\uddf1\ud83c\uddf7",id:"LR"},{name:"Libyan Arab Jamahiriya",dial_code:"+218",emoji:"\ud83c\uddf1\ud83c\uddfe",id:"LY"},{name:"Liechtenstein",dial_code:"+423",emoji:"\ud83c\uddf1\ud83c\uddee",id:"LI"},{name:"Lithuania",dial_code:"+370",emoji:"\ud83c\uddf1\ud83c\uddf9",id:"LT"},{name:"Luxembourg",dial_code:"+352",emoji:"\ud83c\uddf1\ud83c\uddfa",id:"LU"},{name:"Macao",dial_code:"+853",emoji:"\ud83c\uddf2\ud83c\uddf4",id:"MO"},{name:"Macedonia",dial_code:"+389",emoji:"\ud83c\uddf2\ud83c\uddf0",id:"MK"},{name:"Madagascar",dial_code:"+261",emoji:"\ud83c\uddf2\ud83c\uddec",id:"MG"},{name:"Malawi",dial_code:"+265",emoji:"\ud83c\uddf2\ud83c\uddfc",id:"MW"},{name:"Malaysia",dial_code:"+60",emoji:"\ud83c\uddf2\ud83c\uddfe",id:"MY"},{name:"Maldives",dial_code:"+960",emoji:"\ud83c\uddf2\ud83c\uddfb",id:"MV"},{name:"Mali",dial_code:"+223",emoji:"\ud83c\uddf2\ud83c\uddf1",id:"ML"},{name:"Malta",dial_code:"+356",emoji:"\ud83c\uddf2\ud83c\uddf9",id:"MT"},{name:"Marshall Islands",dial_code:"+692",emoji:"\ud83c\uddf2\ud83c\udded",id:"MH"},{name:"Martinique",dial_code:"+596",emoji:"\ud83c\uddf2\ud83c\uddf6",id:"MQ"},{name:"Mauritania",dial_code:"+222",emoji:"\ud83c\uddf2\ud83c\uddf7",id:"MR"},{name:"Mauritius",dial_code:"+230",emoji:"\ud83c\uddf2\ud83c\uddfa",id:"MU"},{name:"Mayotte",dial_code:"+262",emoji:"\ud83c\uddfe\ud83c\uddf9",id:"YT"},{name:"Mexico",dial_code:"+52",emoji:"\ud83c\uddf2\ud83c\uddfd",id:"MX"},{name:"Micronesia, Federated States of Micronesia",dial_code:"+691",emoji:"\ud83c\uddeb\ud83c\uddf2",id:"FM"},{name:"Moldova",dial_code:"+373",emoji:"\ud83c\uddf2\ud83c\udde9",id:"MD"},{name:"Monaco",dial_code:"+377",emoji:"\ud83c\uddf2\ud83c\udde8",id:"MC"},{name:"Mongolia",dial_code:"+976",emoji:"\ud83c\uddf2\ud83c\uddf3",id:"MN"},{name:"Montenegro",dial_code:"+382",emoji:"\ud83c\uddf2\ud83c\uddea",id:"ME"},{name:"Montserrat",dial_code:"+1664",emoji:"\ud83c\uddf2\ud83c\uddf8",id:"MS"},{name:"Morocco",dial_code:"+212",emoji:"\ud83c\uddf2\ud83c\udde6",id:"MA"},{name:"Mozambique",dial_code:"+258",emoji:"\ud83c\uddf2\ud83c\uddff",id:"MZ"},{name:"Myanmar",dial_code:"+95",emoji:"\ud83c\uddf2\ud83c\uddf2",id:"MM"},{name:"Namibia",emoji:"\ud83c\uddf3\ud83c\udde6",dial_code:"+264",id:"NA"},{name:"Nauru",dial_code:"+674",emoji:"\ud83c\uddf3\ud83c\uddf7",id:"NR"},{name:"Nepal",dial_code:"+977",emoji:"\ud83c\uddf3\ud83c\uddf5",id:"NP"},{name:"Netherlands",dial_code:"+31",emoji:"\ud83c\uddf3\ud83c\uddf1",id:"NL"},{name:"Netherlands Antilles",dial_code:"+599",emoji:"\ud83c\udde7\ud83c\uddf6",id:"AN"},{name:"New Caledonia",dial_code:"+687",emoji:"\ud83c\uddf3\ud83c\udde8",id:"NC"},{name:"New Zealand",dial_code:"+64",emoji:"\ud83c\uddf3\ud83c\uddff",id:"NZ"},{name:"Nicaragua",dial_code:"+505",emoji:"\ud83c\uddf3\ud83c\uddee",id:"NI"},{name:"Niger",dial_code:"+227",emoji:"\ud83c\uddf3\ud83c\uddea",id:"NE"},{name:"Nigeria",dial_code:"+234",emoji:"\ud83c\uddf3\ud83c\uddec",id:"NG"},{name:"Niue",dial_code:"+683",emoji:"\ud83c\uddf3\ud83c\uddfa",id:"NU"},{name:"Norfolk Island",dial_code:"+672",emoji:"\ud83c\uddf3\ud83c\uddeb",id:"NF"},{name:"Northern Mariana Islands",dial_code:"+1670",emoji:"\ud83c\uddf2\ud83c\uddf5",id:"MP"},{name:"Norway",dial_code:"+47",emoji:"\ud83c\uddf3\ud83c\uddf4",id:"NO"},{name:"Oman",dial_code:"+968",emoji:"\ud83c\uddf4\ud83c\uddf2",id:"OM"},{name:"Pakistan",dial_code:"+92",emoji:"\ud83c\uddf5\ud83c\uddf0",id:"PK"},{name:"Palau",dial_code:"+680",emoji:"\ud83c\uddf5\ud83c\uddfc",id:"PW"},{name:"Palestinian Territory, Occupied",dial_code:"+970",emoji:"\ud83c\uddf5\ud83c\uddf8",id:"PS"},{name:"Panama",dial_code:"+507",emoji:"\ud83c\uddf5\ud83c\udde6",id:"PA"},{name:"Papua New Guinea",dial_code:"+675",emoji:"\ud83c\uddf5\ud83c\uddec",id:"PG"},{name:"Paraguay",dial_code:"+595",emoji:"\ud83c\uddf5\ud83c\uddfe",id:"PY"},{name:"Peru",dial_code:"+51",emoji:"\ud83c\uddf5\ud83c\uddea",id:"PE"},{name:"Philippines",dial_code:"+63",emoji:"\ud83c\uddf5\ud83c\udded",id:"PH"},{name:"Pitcairn",dial_code:"+872",emoji:"\ud83c\uddf5\ud83c\uddf3",id:"PN"},{name:"Poland",dial_code:"+48",emoji:"\ud83c\uddf5\ud83c\uddf1",id:"PL"},{name:"Portugal",dial_code:"+351",emoji:"\ud83c\uddf5\ud83c\uddf9",id:"PT"},{name:"Puerto Rico",dial_code:"+1939",emoji:"\ud83c\uddf5\ud83c\uddf7",id:"PR"},{name:"Qatar",dial_code:"+974",emoji:"\ud83c\uddf6\ud83c\udde6",id:"QA"},{name:"Romania",dial_code:"+40",emoji:"\ud83c\uddf7\ud83c\uddf4",id:"RO"},{name:"Russia",dial_code:"+7",emoji:"\ud83c\uddf7\ud83c\uddfa",id:"RU"},{name:"Rwanda",dial_code:"+250",emoji:"\ud83c\uddf7\ud83c\uddfc",id:"RW"},{name:"Reunion",dial_code:"+262",emoji:"\ud83c\uddf7\ud83c\uddea",id:"RE"},{name:"Saint Barthelemy",dial_code:"+590",emoji:"\ud83c\udde7\ud83c\uddf1",id:"BL"},{name:"Saint Helena, Ascension and Tristan Da Cunha",dial_code:"+290",emoji:"\ud83c\uddf8\ud83c\udded",id:"SH"},{name:"Saint Kitts and Nevis",dial_code:"+1869",emoji:"\ud83c\uddf0\ud83c\uddf3",id:"KN"},{name:"Saint Lucia",dial_code:"+1758",emoji:"\ud83c\uddf1\ud83c\udde8",id:"LC"},{name:"Saint Martin",dial_code:"+590",emoji:"\ud83c\uddf2\ud83c\uddeb",id:"MF"},{name:"Saint Pierre and Miquelon",dial_code:"+508",emoji:"\ud83c\uddf5\ud83c\uddf2",id:"PM"},{name:"Saint Vincent and the Grenadines",dial_code:"+1784",emoji:"\ud83c\uddfb\ud83c\udde8",id:"VC"},{name:"Samoa",dial_code:"+685",emoji:"\ud83c\uddfc\ud83c\uddf8",id:"WS"},{name:"San Marino",dial_code:"+378",emoji:"\ud83c\uddf8\ud83c\uddf2",id:"SM"},{name:"Sao Tome and Principe",dial_code:"+239",emoji:"\ud83c\uddf8\ud83c\uddf9",id:"ST"},{name:"Saudi Arabia",dial_code:"+966",emoji:"\ud83c\uddf8\ud83c\udde6",id:"SA"},{name:"Senegal",dial_code:"+221",emoji:"\ud83c\uddf8\ud83c\uddf3",id:"SN"},{name:"Serbia",dial_code:"+381",emoji:"\ud83c\uddf7\ud83c\uddf8",id:"RS"},{name:"Seychelles",dial_code:"+248",emoji:"\ud83c\uddf8\ud83c\udde8",id:"SC"},{name:"Sierra Leone",dial_code:"+232",emoji:"\ud83c\uddf8\ud83c\uddf1",id:"SL"},{name:"Singapore",dial_code:"+65",emoji:"\ud83c\uddf8\ud83c\uddec",id:"SG"},{name:"Slovakia",dial_code:"+421",emoji:"\ud83c\uddf8\ud83c\uddf0",id:"SK"},{name:"Slovenia",dial_code:"+386",emoji:"\ud83c\uddf8\ud83c\uddee",id:"SI"},{name:"Solomon Islands",dial_code:"+677",emoji:"\ud83c\uddf8\ud83c\udde7",id:"SB"},{name:"Somalia",dial_code:"+252",emoji:"\ud83c\uddf8\ud83c\uddf4",id:"SO"},{name:"South Africa",dial_code:"+27",emoji:"\ud83c\uddff\ud83c\udde6",id:"ZA"},{name:"South Sudan",dial_code:"+211",emoji:"\ud83c\uddf8\ud83c\uddf8",id:"SS"},{name:"South Georgia and the South Sandwich Islands",dial_code:"+500",emoji:"\ud83c\uddec\ud83c\uddf8",id:"GS"},{name:"Spain",dial_code:"+34",emoji:"\ud83c\uddea\ud83c\uddf8",id:"ES"},{name:"Sri Lanka",dial_code:"+94",emoji:"\ud83c\uddf1\ud83c\uddf0",id:"LK"},{name:"Sudan",dial_code:"+249",emoji:"\ud83c\uddf8\ud83c\udde9",id:"SD"},{name:"Suriname",dial_code:"+597",emoji:"\ud83c\uddf8\ud83c\uddf7",id:"SR"},{name:"Svalbard and Jan Mayen",dial_code:"+47",emoji:"\ud83c\uddf8\ud83c\uddef",id:"SJ"},{name:"Swaziland",dial_code:"+268",emoji:"\ud83c\uddf8\ud83c\uddff",id:"SZ"},{name:"Sweden",dial_code:"+46",emoji:"\ud83c\uddf8\ud83c\uddea",id:"SE"},{name:"Switzerland",dial_code:"+41",emoji:"\ud83c\udde8\ud83c\udded",id:"CH"},{name:"Syrian Arab Republic",dial_code:"+963",emoji:"\ud83c\uddf8\ud83c\uddfe",id:"SY"},{name:"Taiwan",dial_code:"+886",emoji:"\ud83c\uddf9\ud83c\uddfc",id:"TW"},{name:"Tajikistan",dial_code:"+992",emoji:"\ud83c\uddf9\ud83c\uddef",id:"TJ"},{name:"Tanzania, United Republic of Tanzania",dial_code:"+255",emoji:"\ud83c\uddf9\ud83c\uddff",id:"TZ"},{name:"Thailand",dial_code:"+66",emoji:"\ud83c\uddf9\ud83c\udded",id:"TH"},{name:"Timor-Leste",dial_code:"+670",emoji:"\ud83c\uddf9\ud83c\uddf1",id:"TL"},{name:"Togo",dial_code:"+228",emoji:"\ud83c\uddf9\ud83c\uddec",id:"TG"},{name:"Tokelau",dial_code:"+690",emoji:"\ud83c\uddf9\ud83c\uddf0",id:"TK"},{name:"Tonga",dial_code:"+676",emoji:"\ud83c\uddf9\ud83c\uddf4",id:"TO"},{name:"Trinidad and Tobago",dial_code:"+1868",emoji:"\ud83c\uddf9\ud83c\uddf9",id:"TT"},{name:"Tunisia",dial_code:"+216",emoji:"\ud83c\uddf9\ud83c\uddf3",id:"TN"},{name:"Turkey",dial_code:"+90",emoji:"\ud83c\uddf9\ud83c\uddf7",id:"TR"},{name:"Turkmenistan",dial_code:"+993",emoji:"\ud83c\uddf9\ud83c\uddf2",id:"TM"},{name:"Turks and Caicos Islands",dial_code:"+1649",emoji:"\ud83c\uddf9\ud83c\udde8",id:"TC"},{name:"Tuvalu",dial_code:"+688",emoji:"\ud83c\uddf9\ud83c\uddfb",id:"TV"},{name:"Uganda",dial_code:"+256",emoji:"\ud83c\uddfa\ud83c\uddec",id:"UG"},{name:"Ukraine",dial_code:"+380",emoji:"\ud83c\uddfa\ud83c\udde6",id:"UA"},{name:"United Arab Emirates",dial_code:"+971",emoji:"\ud83c\udde6\ud83c\uddea",id:"AE"},{name:"United Kingdom",dial_code:"+44",emoji:"\ud83c\uddec\ud83c\udde7",id:"GB"},{name:"United States",dial_code:"+1",emoji:"\ud83c\uddfa\ud83c\uddf8",id:"US"},{name:"Uruguay",dial_code:"+598",emoji:"\ud83c\uddfa\ud83c\uddfe",id:"UY"},{name:"Uzbekistan",dial_code:"+998",emoji:"\ud83c\uddfa\ud83c\uddff",id:"UZ"},{name:"Vanuatu",dial_code:"+678",emoji:"\ud83c\uddfb\ud83c\uddfa",id:"VU"},{name:"Venezuela, Bolivarian Republic of Venezuela",dial_code:"+58",emoji:"\ud83c\uddfb\ud83c\uddea",id:"VE"},{name:"Vietnam",dial_code:"+84",emoji:"\ud83c\uddfb\ud83c\uddf3",id:"VN"},{name:"Virgin Islands, British",dial_code:"+1284",emoji:"\ud83c\uddfb\ud83c\uddec",id:"VG"},{name:"Virgin Islands, U.S.",dial_code:"+1340",emoji:"\ud83c\uddfb\ud83c\uddee",id:"VI"},{name:"Wallis and Futuna",dial_code:"+681",emoji:"\ud83c\uddfc\ud83c\uddeb",id:"WF"},{name:"Yemen",dial_code:"+967",emoji:"\ud83c\uddfe\ud83c\uddea",id:"YE"},{name:"Zambia",dial_code:"+260",emoji:"\ud83c\uddff\ud83c\uddf2",id:"ZM"},{name:"Zimbabwe",dial_code:"+263",emoji:"\ud83c\uddff\ud83c\uddfc",id:"ZW"}]}}]);
//# sourceMappingURL=77-ec732e0003ef6296a8ad.chunk.js.map