(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["styling"],{"02f4":function(t,e,n){var i=n("4588"),s=n("be13");t.exports=function(t){return function(e,n){var a,r,c=String(s(e)),o=i(n),l=c.length;return o<0||o>=l?t?"":void 0:(a=c.charCodeAt(o),a<55296||a>56319||o+1===l||(r=c.charCodeAt(o+1))<56320||r>57343?t?c.charAt(o):a:t?c.slice(o,o+2):r-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),s=n("32e9"),a=n("79e5"),r=n("be13"),c=n("2b4c"),o=n("520a"),l=c("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),v=!a(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=v?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!v||!p||"replace"===t&&!u||"split"===t&&!f){var b=/./[d],h=n(r,d,""[t],function(t,e,n,i,s){return e.exec===o?v&&!s?{done:!0,value:b.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=h[0],g=h[1];i(String.prototype,t,m),s(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"2b9d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDismissed?t._e():n("div",{staticClass:"notification"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[t._t("default")],2)]),n("div",{staticClass:"level-right"},[n("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},s=[],a={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0,this.$snackbar.open({message:"Dismissed",queue:!1})}}},r=a,c=n("2877"),o=Object(c["a"])(r,i,s,!1,null,"668fb9aa",null);e["a"]=o.exports},"3b2b":function(t,e,n){var i=n("7726"),s=n("5dbc"),a=n("86cc").f,r=n("9093").f,c=n("aae3"),o=n("0bfb"),l=i.RegExp,u=l,f=l.prototype,d=/a/g,v=/a/g,p=new l(d)!==d;if(n("9e1e")&&(!p||n("79e5")(function(){return v[n("2b4c")("match")]=!1,l(d)!=d||l(v)==v||"/a/i"!=l(d,"i")}))){l=function(t,e){var n=this instanceof l,i=c(t),a=void 0===e;return!n&&i&&t.constructor===l&&a?t:s(p?new u(i&&!a?t.source:t,e):u((i=t instanceof l)?t.source:t,i&&a?o.call(t):e),n?this:f,l)};for(var b=function(t){t in l||a(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},h=r(u),m=0;h.length>m;)b(h[m++]);f.constructor=l,l.prototype=f,n("2aba")(i,"RegExp",l)}n("7a56")("RegExp")},4917:function(t,e,n){"use strict";var i=n("cb7c"),s=n("9def"),a=n("0390"),r=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var i=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=c(n,t,this);if(e.done)return e.value;var o=i(t),l=String(this);if(!o.global)return r(o,l);var u=o.unicode;o.lastIndex=0;var f,d=[],v=0;while(null!==(f=r(o,l))){var p=String(f[0]);d[v]=p,""===p&&(o.lastIndex=a(l,s(o.lastIndex),u)),v++}return 0===v?null:d}]})},"520a":function(t,e,n){"use strict";var i=n("0bfb"),s=RegExp.prototype.exec,a=String.prototype.replace,r=s,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=o||l;u&&(r=function(t){var e,n,r,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),o&&(e=f[c]),r=s.call(f,t),o&&r&&(f[c]=f.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),s=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},a9cb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container-fluid"},[n("notification",{staticClass:"is-info"},[n("div",[n("b-icon",{attrs:{icon:"format-color-fill","custom-size":"default"}}),n("b",[t._v("Styling made easy")]),t._v(" with theme's SCSS variables\n      ")],1)]),n("card",{staticClass:"is-paddingless",attrs:{icon:"eyedropper-variant",title:"Theme's color variables"}},[n("card-toolbar",{attrs:{slot:"toolbar"},slot:"toolbar"},[n("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},t._l(t.stylingThemes,function(t){return n("style-theme-switch-item",{key:t.pathname,staticClass:"button",attrs:{theme:t}})}),1)]),n("pre",{staticClass:"has-bottom-radius"},[t._v(t._s(t.scssColorsSample))])],1),n("notification",{staticClass:"is-info"},[n("div",[n("b-icon",{attrs:{icon:"resize","custom-size":"default"}}),n("b",[t._v("Sizing variables")]),t._v(" help control layout\n      ")],1)]),n("card",{staticClass:"is-paddingless",attrs:{icon:"resize",title:"Theme's sizing variables"}},[n("pre",{staticClass:"has-bottom-radius"},[t._v(t._s(t.scssSizesSample))])])],1)])},s=[],a=(n("3b2b"),n("4917"),n("cebc")),r=n("bc3a"),c=n.n(r),o=n("2f62"),l=n("ae8d"),u=n("2b9d"),f=n("15e6"),d=n("e974"),v={name:"Styling",components:{CardToolbar:f["a"],Card:l["a"],Notification:u["a"],StyleThemeSwitchItem:d["a"]},data:function(){return{scssColorsSample:null,scssSizesSample:null}},computed:Object(a["a"])({},Object(o["b"])(["stylingThemes"])),mounted:function(){var t,e=this;this.$store.commit("subPage",{stack:["Admin","Styling"],title:"Styling with SCSS"}),t=document.location.pathname.match(/([a-z0-9-]+)\.html/)?RegExp.$1:"default",c.a.get("/data-sources/_theme-".concat(t,".scss")).then(function(t){e.scssColorsSample=t.data}),c.a.get("/data-sources/_variables-basic.scss").then(function(t){e.scssSizesSample=t.data})}},p=v,b=n("2877"),h=Object(b["a"])(p,i,s,!1,null,"3e9b0d70",null);e["default"]=h.exports},aae3:function(t,e,n){var i=n("d3f4"),s=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})}}]);
//# sourceMappingURL=styling.ccb0eb25.js.map