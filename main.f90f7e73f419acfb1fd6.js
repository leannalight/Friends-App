!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=77)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(45))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(7),o=e(17),i=e(13);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(12),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(0),o=e(24).f,i=e(4),c=e(26),u=e(18),a=e(52),f=e(60);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(14),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(0),o=e(28),i=e(3),c=e(29),u=e(35),a=e(61),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(15),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(7),o=e(25),i=e(10),c=e(16),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(4);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(18),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r,o,i=e(65),c=e(66),u=RegExp.prototype.exec,a=String.prototype.replace,f=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,e,r,o,c=this,f=l&&c.sticky,v=i.call(c),d=c.source,h=0,g=t;return f&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),e=new RegExp("^(?:"+d+")",v)),p&&(e=new RegExp("^"+d+"$(?!\\s)",v)),s&&(n=c.lastIndex),r=u.call(f?e:c,g),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){"use strict";var r=e(6),o=e(1),i=e(20),c=e(2),u=e(21),a=e(5),f=e(33),s=e(34),l=e(36),p=e(11),v=e(37),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l("concat"),y=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!g},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(y(i=-1===n?c:arguments[n])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){var r=e(7),o=e(46),i=e(13),c=e(8),u=e(16),a=e(3),f=e(25),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(7),o=e(1),i=e(47);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(4),i=e(3),c=e(18),u=e(27),a=e(48),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(19),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(51),o=e(19);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(54),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(12),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){"use strict";var r=e(16),o=e(17),i=e(13);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(2),o=e(20),i=e(11)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(1),o=e(11),i=e(37),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),c=e(62),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(7),o=e(1),i=e(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){"use strict";var r=e(6),o=e(22);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";e(40);var r=e(26),o=e(1),i=e(11),c=e(22),u=e(4),a=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var d=i(t),h=!o((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),g=h&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!h||!g||"replace"===t&&(!f||!s||p)||"split"===t&&!v){var y=/./[d],x=e(d,""[t],(function(t,n,e,r,o){return n.exec===c?h&&!o?{done:!0,value:y.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],S=x[1];r(String.prototype,t,m),r(RegExp.prototype,d,2==n?function(t,n){return S.call(t,this,n)}:function(t){return S.call(t,this)})}l&&u(RegExp.prototype[d],"sham",!0)}},function(t,n,e){"use strict";var r=e(68).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(15),o=e(22);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){"use strict";var r=e(72).forEach,o=e(38),i=e(39),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(2),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r,o,i,c=e(49),u=e(0),a=e(2),f=e(4),s=e(3),l=e(19),p=e(50),v=e(30),d=u.WeakMap;if(c){var h=l.state||(l.state=new d),g=h.get,y=h.has,x=h.set;r=function(t,n){return n.facade=t,x.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var m=p("state");v[m]=!0,r=function(t,n){return n.facade=t,f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(27),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(28),o=e(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(3),o=e(53),i=e(24),c=e(17);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(31),o=e(55),i=e(59),c=e(10);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(56),o=e(58).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(8),i=e(57).indexOf,c=e(30);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(8),o=e(5),i=e(32),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(35);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(31);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(6),o=e(14),i=e(8),c=e(38),u=[].join,a=o!=Object,f=c("join",",");r({target:"Array",proto:!0,forced:a||!f},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},function(t,n,e){"use strict";var r=e(6),o=e(2),i=e(20),c=e(32),u=e(5),a=e(8),f=e(33),s=e(11),l=e(36),p=e(39),v=l("slice"),d=p("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),g=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!v||!d},{slice:function(t,n){var e,r,s,l=a(this),p=u(l.length),v=c(t,p),d=c(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(e=l.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[h])&&(e=void 0):e=void 0,e===Array||void 0===e))return g.call(l,v,d);for(r=new(void 0===e?Array:e)(y(d-v,0)),s=0;v<d;v++,s++)v in l&&f(r,s,l[v]);return r.length=s,r}})},function(t,n,e){"use strict";var r=e(10);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){"use strict";var r=e(41),o=e(10),i=e(5),c=e(9),u=e(42),a=e(43);r("match",1,(function(t,n,e){return[function(n){var e=c(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(c,f));){var d=String(l[0]);p[v]=d,""===d&&(c.lastIndex=u(f,i(c.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n,e){var r=e(12),o=e(9),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){"use strict";var r=e(41),o=e(10),i=e(21),c=e(5),u=e(12),a=e(9),f=e(42),s=e(43),l=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,n,e,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=g?"$":"$0";return[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!g&&y||"string"==typeof r&&-1===r.indexOf(x)){var i=e(n,t,this,r);if(i.done)return i.value}var a=o(t),v=String(this),d="function"==typeof r;d||(r=String(r));var h=a.global;if(h){var S=a.unicode;a.lastIndex=0}for(var b=[];;){var E=s(a,v);if(null===E)break;if(b.push(E),!h)break;""===String(E[0])&&(a.lastIndex=f(v,c(a.lastIndex),S))}for(var _,w="",O=0,T=0;T<b.length;T++){E=b[T];for(var j=String(E[0]),A=l(p(u(E.index),v.length),0),L=[],P=1;P<E.length;P++)L.push(void 0===(_=E[P])?_:String(_));var k=E.groups;if(d){var R=[j].concat(L,A,v);void 0!==k&&R.push(k);var C=String(r.apply(void 0,R))}else C=m(j,v,A,L,k,r);A>=O&&(w+=v.slice(O,A)+C,O=A+j.length)}return w+v.slice(O)}];function m(t,e,r,o,c,u){var a=r+t.length,f=o.length,s=h;return void 0!==c&&(c=i(c),s=d),n.call(u,s,(function(n,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var l=v(s/10);return 0===l?n:l<=f?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):n}u=o[s-1]}return void 0===u?"":u}))}}))},function(t,n,e){},function(t,n,e){"use strict";var r=e(6),o=e(44);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(73),o=e(14),i=e(21),c=e(5),u=e(34),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,g){for(var y,x,m=i(v),S=o(m),b=r(d,h,3),E=c(S.length),_=0,w=g||u,O=n?w(v,E):e?w(v,0):void 0;E>_;_++)if((p||_ in S)&&(x=b(y=S[_],_,m),t))if(n)O[_]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:a.call(O,y)}else if(s)return!1;return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(74);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(0),o=e(76),i=e(44),c=e(4);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";e.r(n);e(23),e(63),e(64),e(40),e(67),e(69),e(70),e(71),e(75);function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o,i,c,u,a=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.blockName=n.blockName,this.container=n.container}var n,e,o;return n=t,(e=[{key:"render",value:function(t){var n=this;t.forEach((function(t){return n.addToList(t)}))}},{key:"addToList",value:function(t){var n=this.create(t.id,t.photo_100,t.first_name,t.last_name);this.container.insertAdjacentHTML("beforeend",n)}},{key:"create",value:function(t,n,e,r){return'<li class="'.concat(this.blockName,'__item">\n                    <a class="').concat(this.blockName,'__link" href="https://vk.com/id').concat(t,'"><img class="').concat(this.blockName,'__photo" src="').concat(n,'">').concat(e," ").concat(r,"</a>\n                </li>")}}])&&r(n.prototype,e),o&&r(n,o),t}(),f=document.querySelector(".button_type_authorisation"),s=document.querySelector(".button_type_exit"),l=document.querySelector(".friendlist"),p=document.querySelector(".friends__title"),v=new a({container:l,blockName:"friendlist"});function d(t,n){return $.ajax({url:t,method:"GET",dataType:"JSONP",success:n})}window.location.hash.match(/(#access_token=)([a-z0-9]+)\&/g)&&(c=window.location.hash.match(/(#access_token=)([a-z0-9]+)\&/g),u=window.location.hash.match(/(user_id=)([0-9]+)\&/g),o=c.join("").slice(14,-1),i=u.join("").slice(8,-1),d("https://api.vk.com/method/users.get?fields=photo_200&user_id=".concat(i,"&access_token=").concat(o,"&v=5.52"),(function(t){var n=document.querySelector(".profile__name"),e=document.querySelector(".profile__image");n.textContent="".concat(t.response[0].first_name," ").concat(t.response[0].last_name),e.style.backgroundImage="url('".concat(t.response[0].photo_200,"')")}))),f.addEventListener("click",(function(t){t.preventDefault(),window.location="https://oauth.vk.com/authorize?client_id=7653662&display=popup&redirect_uri=https://leannalight.github.io/friends-app/&scope=friends,status&response_type=token&v=5.52&state=123456",function(t){d("https://api.vk.com/method/friends.search?count=5&fields=photo_100&access_token=".concat(t,"&v=5.52"),(function(t){var n;console.log(t),p.textContent="".concat(t.response.count," ").concat((n=t.response.count,[" друг"," друга"," друзей"][n%100>4&&n%100<20?2:[2,0,1,1,1,2][n%10<5?n%10:5]])),v.render(t.response.items)}))}(o)})),s.addEventListener("click",(function(){VK.Auth.getLoginStatus((function(t){"connected"==t.status&&VK.Auth.logout((function(){window.location.replace("https://leannalight.github.io/friends-app/")}))}))}))}]);