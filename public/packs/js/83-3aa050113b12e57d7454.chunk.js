(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{216:function(n,t){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},279:function(n,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return _})),r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return y})),r.d(t,"j",(function(){return c})),r.d(t,"k",(function(){return b})),r.d(t,"l",(function(){return u}));var e=function(n,t,r){var e;return function(){var o=null,i=arguments,u=function(){e=null,r||n.apply(o,i)},a=r&&!e;clearTimeout(e),e=window.setTimeout(u,t),a&&n.apply(o,i)}},o=function(n){var t=n.replace("#","");return.299*parseInt(t.slice(0,2),16)+.587*parseInt(t.slice(2,4),16)+.114*parseInt(t.slice(4,6),16)>186?"#000000":"#FFFFFF"},i=function(n){var t="";if(n>=60&&n<3600){var r=Math.floor(n/60);t=r+" Min";var e=60===r?0:Math.floor(n%60);return t+(e>0?" "+e+" Sec":"")}if(n>=3600&&n<86400){var o=Math.floor(n/3600);t=o+" Hr";var i=n%3600<60||24===o?0:Math.floor(n%3600/60);return t+(i>0?" "+i+" Min":"")}if(n>=86400){var u=Math.floor(n/86400);t=u+" Day";var a=n%86400<3600||u>=364?0:Math.floor(n%86400/3600);return t+(a>0?" "+a+" Hr":"")}return Math.floor(n)+" Sec"},u=function(n,t,r){void 0===n&&(n=""),void 0===t&&(t=1024),void 0===r&&(r=!1);var e=n;return n.length>t&&(e=n.substring(0,t)),r&&(e+="..."),e},a=function(n,t){return null===n||0===n?{time:"",unit:""}:n<3600?{time:Number((n/60).toFixed(1)),unit:t.minute}:n<86400?{time:Number((n/3600).toFixed(1)),unit:t.hour}:{time:Number((n/86400).toFixed(1)),unit:t.day}};function c(n){try{var t=String(n).toLowerCase();return Boolean(JSON.parse(t))}catch(r){return!1}}function l(n){return n.slice().sort((function(n,t){return n-t}))}function s(n,t){var r,e,o,i=(e=1,(o=t)<(r=0)?r:o>e?e:o),u=(n.length-1)*i,a=Math.floor(u),c=u-a;return void 0!==n[a+1]?n[a]+c*(n[a+1]-n[a]):n[a]}var f=function(n,t){var r=l(n);return t.map((function(n){return s(r,n)}))};function d(){return d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},d.apply(this,arguments)}var h=/{{(.*?)}}/g,p=function(n){return(n||"").replace(/\b(\w)/g,(function(n){return n.toUpperCase()}))},v=function(n){var t=n.user,r=null!=t&&t.name?t.name.split(" ").shift():"";return p(r)},m=function(n){var t=n.user;if(t&&t.name){var r=t.name.split(" ").length>1?t.name.split(" ").pop():"";return p(r)}return""},g=function(n){var t,r=n.conversation,e=n.contact,o=r.meta,i=o.assignee,u=o.sender,a=r.id,c=r.custom_attributes,l=void 0===c?{}:c,s=(e||{}).custom_attributes;return d({},{"contact.name":p((null==u?void 0:u.name)||""),"contact.first_name":v({user:u}),"contact.last_name":m({user:u}),"contact.email":null==u?void 0:u.email,"contact.phone":null==u?void 0:u.phone_number,"contact.id":null==u?void 0:u.id,"conversation.id":a,"agent.name":p((null==i?void 0:i.name)||""),"agent.first_name":v({user:i}),"agent.last_name":m({user:i}),"agent.email":null!=(t=null==i?void 0:i.email)?t:""},Object.entries(null!=l?l:{}).reduce((function(n,t){var r=t[0],e=t[1];return n["conversation.custom_attribute."+r]=e,n}),{}),Object.entries(null!=s?s:{}).reduce((function(n,t){var r=t[0],e=t[1];return n["contact.custom_attribute."+r]=e,n}),{}))},b=function(n){var t=n.message,r=n.variables;return null==t?void 0:t.replace(h,(function(n,t){return r[t.trim()]?r[t.trim().toLowerCase()]:""}))},y=function(n){var t=n.message,r=n.variables,e=t.replace(/```(?:.|\n)+?```/g,"").match(h);return e?e.map((function(n){return n.replace("{{","").replace("}}","").trim()})).filter((function(n){return void 0===r[n]})):[]},_=function(n,t,r){var e=null,o=function(){e&&(clearTimeout(e),e=null,t())},i=function(){e&&clearTimeout(e),e=setTimeout((function(){o()}),r)};return{start:function(){e||n(),i()},stop:o}},M=function(n,t){return null===t?null:n+t-Math.floor(Date.now()/1e3)},w=function(n){var t={y:31536e3,mo:2592e3,d:86400,h:3600,m:60};if(n<60)return"1m";var r=[];return Object.keys(t).forEach((function(e){var o=Math.floor(n/t[e]);n<60&&r.length>0||2!==r.length&&o>0&&(r.push(o+e),n-=o*t[e])})),r.join(" ")},x=function(n,t){return["FRT","NRT","RT"].map((function(r){return function(n,t,r){var e=t.sla_first_response_time_threshold,o=t.sla_next_response_time_threshold,i=t.sla_resolution_time_threshold,u=t.created_at,a=r.first_reply_created_at,c=r.waiting_since,l=r.status,s={FRT:{threshold:M(u,e),condition:null!==e&&(!a||0===a)},NRT:{threshold:M(c,o),condition:null!==o&&!!a&&!!c},RT:{threshold:M(u,i),condition:"open"===l&&null!==i}}[n];return s?d({},s,{type:n}):null}(r,n,t)})).filter((function(n){return!!n&&n.condition})).map((function(n){return d({},n,{icon:n.threshold<=0?"flame":"alarm",isSlaMissed:n.threshold<=0})}))},O=function(n){var t=n.appliedSla,r=n.chat;if(!t||!r)return{type:"",threshold:"",icon:"",isSlaMissed:!1};var e=function(n){return n.sort((function(n,t){return Math.abs(n.threshold)-Math.abs(t.threshold)})),n[0]}(x(t,r));return e?{type:null==e?void 0:e.type,threshold:w(e.threshold<=0?-e.threshold:e.threshold),icon:e.icon,isSlaMissed:e.isSlaMissed}:{type:"",threshold:"",icon:"",isSlaMissed:!1}}},735:function(n,t,r){var e=r(40),o=r(13),i=r(112),u=r(210),a=r(43).f,c=r(99).f,l=r(209),s=r(180),f=r(192),d=r(47),h=r(19),p=r(65).enforce,v=r(193),m=r(15)("match"),g=o.RegExp,b=g.prototype,y=/a/g,_=/a/g,M=new g(y)!==y,w=f.UNSUPPORTED_Y;if(e&&i("RegExp",!M||w||h((function(){return _[m]=!1,g(y)!=y||g(_)==_||"/a/i"!=g(y,"i")})))){for(var x=function(n,t){var r,e=this instanceof x,o=l(n),i=void 0===t;if(!e&&o&&n.constructor===x&&i)return n;M?o&&!i&&(n=n.source):n instanceof x&&(i&&(t=s.call(n)),n=n.source),w&&(r=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var a=u(M?new g(n,t):g(n,t),e?this:b,x);w&&r&&(p(a).sticky=!0);return a},O=function(n){n in x||a(x,n,{configurable:!0,get:function(){return g[n]},set:function(t){g[n]=t}})},R=c(g),T=0;R.length>T;)O(R[T++]);b.constructor=x,x.prototype=b,d(o,"RegExp",x)}v("RegExp")},738:function(n,t,r){"use strict";function e(n,t){t=t?Array.isArray(t)?t:[t]:[],Object.freeze(t);var r=n.renderer.rules.link_open||this.defaultRender;n.renderer.rules.link_open=function(n,e,o,i,u){var a=function(n,t){var r,e,o=n.attrs[n.attrIndex("href")][1];for(r=0;r<t.length;++r){if("function"!==typeof(e=t[r]).matcher)return e;if(e.matcher(o,e))return e}}(n[e],t),c=a&&a.attrs;return c&&function(n,t,r){Object.keys(r).forEach((function(e){var o,i=r[e];"className"===e&&(e="class"),(o=t[n].attrIndex(e))<0?t[n].attrPush([e,i]):t[n].attrs[o][1]=i}))}(e,n,c),r(n,e,o,i,u)}}e.defaultRender=function(n,t,r,e,o){return o.renderToken(n,t,r)},n.exports=e}}]);
//# sourceMappingURL=83-3aa050113b12e57d7454.chunk.js.map