true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs$1 (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var lsplugin_user = {exports: {}};

/*! For license information please see lsplugin.user.js.LICENSE.txt */
lsplugin_user.exports;

(function (module, exports$1) {
	!function(e,t){module.exports=t();}(self,(()=>(()=>{var e={833:(e,t,n)=>{var r=n(606);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r));})),t.splice(o,0,n);},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug");}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug");}catch(e){}!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return  true;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return  false;return "undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=false;return ()=>{e||(e=true,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(736)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return "[UnexpectedJSONParseError]: "+e.message}};},736:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,i,s=null;function a(...e){if(!a.enabled)return;const r=a,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=t.formatters[o];if("function"==typeof i){const t=e[s];n=i.call(r,t),e.splice(s,1),s--;}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e);}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=r,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:true,configurable:false,get:()=>null!==s?s:(o!==t.namespaces&&(o=t.namespaces,i=t.enabled(e)),i),set:e=>{s=e;}}),"function"==typeof t.init&&t.init(a),a}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")));},t.enabled=function(e){if("*"===e[e.length-1])return  true;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return  false;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return  true;return  false},t.humanize=n(585),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(e).forEach((n=>{t[n]=e[n];})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t};},744:e=>{var t=function(e){return function(e){return !!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return "[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return  false!==t.clone&&t.isMergeableObject(e)?c((n=e,Array.isArray(n)?[]:{}),e,t):e;var n;}function o(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function s(e,t){try{return t in e}catch(e){return  false}}function a(e,t,n){var o={};return n.isMergeableObject(e)&&i(e).forEach((function(t){o[t]=r(e[t],n);})),i(t).forEach((function(i){(function(e,t){return s(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,i)||(s(e,i)&&n.isMergeableObject(t[i])?o[i]=function(e,t){if(!t.customMerge)return c;var n=t.customMerge(e);return "function"==typeof n?n:c}(i,n)(e[i],t[i],n):o[i]=r(t[i],n));})),o}function c(e,n,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||t,i.cloneUnlessOtherwiseSpecified=r;var s=Array.isArray(n);return s===Array.isArray(e)?s?i.arrayMerge(e,n,i):a(e,n,i):r(n,i)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})};var l=c;e.exports=l;},228:e=>{var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||false;}function i(e,t,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||e,s),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t];}function a(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=false)),a.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},a.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},a.prototype.emit=function(e,t,r,o,i,s){var a=n?n+e:e;if(!this._events[a])return  false;var c,l,u=this._events[a],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,true),f){case 1:return u.fn.call(u.context),true;case 2:return u.fn.call(u.context,t),true;case 3:return u.fn.call(u.context,t,r),true;case 4:return u.fn.call(u.context,t,r,o),true;case 5:return u.fn.call(u.context,t,r,o,i),true;case 6:return u.fn.call(u.context,t,r,o,i,s),true}for(l=1,c=new Array(f-1);l<f;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var p,h=u.length;for(l=0;l<h;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,true),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,o);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c);}}return  true},a.prototype.on=function(e,t,n){return i(this,e,t,n,false)},a.prototype.once=function(e,t,n){return i(this,e,t,n,true)},a.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==t||o&&!a.once||r&&a.context!==r||s(this,i);else {for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==t||o&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[i]=1===l.length?l[0]:l:s(this,i);}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&s(this,t)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a;},698:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e;};},585:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,i=7*o,s=365.25*o;function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,c){c=c||{};var l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case "years":case "year":case "yrs":case "yr":case "y":return c*s;case "weeks":case "week":case "w":return c*i;case "days":case "day":case "d":return c*o;case "hours":case "hour":case "hrs":case "hr":case "h":return c*r;case "minutes":case "minute":case "mins":case "min":case "m":return c*n;case "seconds":case "second":case "secs":case "sec":case "s":return c*t;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":return c;default:return}}(e);if("number"===l&&isFinite(e))return c.long?function(e){var i=Math.abs(e);if(i>=o)return a(e,i,o,"day");if(i>=r)return a(e,i,r,"hour");if(i>=n)return a(e,i,n,"minute");if(i>=t)return a(e,i,t,"second");return e+" ms"}(e):function(e){var i=Math.abs(e);if(i>=o)return Math.round(e/o)+"d";if(i>=r)return Math.round(e/r)+"h";if(i>=n)return Math.round(e/n)+"m";if(i>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};},627:(e,t,n)=>{var r=n(606),o="win32"===r.platform,i=n(537);function s(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():t&&n.push(".."):n.push(o));}return n}function a(e){for(var t=e.length-1,n=0;n<=t&&!e[n];n++);for(var r=t;r>=0&&!e[r];r--);return 0===n&&r===t?e:n>r?[]:e.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function f(e){var t=c.exec(e),n=(t[1]||"")+(t[2]||""),r=t[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function p(e){var t=c.exec(e),n=t[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!t[2],tail:t[3]}}function h(e){return "\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var e="",t="",n=false,o=arguments.length-1;o>=-1;o--){var a;if(o>=0?a=arguments[o]:e?(a=r.env["="+e])&&a.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(a=e+"\\"):a=r.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=p(a),l=c.device,u=c.isUnc,f=c.isAbsolute,d=c.tail;if((!l||!e||l.toLowerCase()===e.toLowerCase())&&(e||(e=l),n||(t=d+"\\"+t,n=f),e&&n))break}}return u&&(e=h(e)),e+(n?"\\":"")+(t=s(t.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(e){var t=p(e),n=t.device,r=t.isUnc,o=t.isAbsolute,i=t.tail,a=/[\\\/]$/.test(i);return (i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&a&&(i+="\\"),r&&(n=h(n)),n+(o?"\\":"")+i},u.isAbsolute=function(e){return p(e).isAbsolute},u.join=function(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&e.push(n);}var r=e.join("\\");return /^[\\\/]{2}[^\\\/]/.test(e[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(e,t){e=u.resolve(e),t=u.resolve(t);for(var n=e.toLowerCase(),r=t.toLowerCase(),o=a(t.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(i.length,s.length),l=c,f=0;f<c;f++)if(i[f]!==s[f]){l=f;break}if(0==l)return t;var p=[];for(f=l;f<i.length;f++)p.push("..");return (p=p.concat(o.slice(l))).join("\\")},u._makeLong=function(e){if(!i.isString(e))return e;if(!e)return "";var t=u.resolve(e);return /^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},u.dirname=function(e){var t=f(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(e,t){var n=f(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},u.extname=function(e){return f(e)[3]},u.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var n=e.dir,r=e.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=f(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return {root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},u.sep="\\",u.delimiter=";";var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(e){return d.exec(e).slice(1)}m.resolve=function(){for(var e="",t=false,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o[0]);}return (t?"/":"")+(e=s(e.split("/"),!t).join("/"))||"."},m.normalize=function(e){var t=m.isAbsolute(e),n=e&&"/"===e[e.length-1];return (e=s(e.split("/"),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e},m.isAbsolute=function(e){return "/"===e.charAt(0)},m.join=function(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(e+=e?"/"+n:n);}return m.normalize(e)},m.relative=function(e,t){e=m.resolve(e).substr(1),t=m.resolve(t).substr(1);for(var n=a(e.split("/")),r=a(t.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var c=[];for(s=i;s<n.length;s++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(e){return e},m.dirname=function(e){var t=g(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(e,t){var n=g(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},m.extname=function(e){return g(e)[3]},m.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return (e.dir?e.dir+m.sep:"")+(e.base||"")},m.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=g(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},m.sep="/",m.delimiter=":",e.exports=o?u:m,e.exports.posix=m,e.exports.win32=u;},606:e=>{var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o;}catch(e){t=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(e){n=i;}}();var a,c=[],l=false,u=-1;function f(){l&&a&&(l=false,a.length?c=a.concat(c):u=-1,c.length&&p());}function p(){if(!l){var e=s(f);l=true;for(var t=c.length;t;){for(a=c,c=[];++u<t;)a&&a[u].run();u=-1,t=c.length;}a=null,l=false,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e);}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e);}}function h(e,t){this.fun=e,this.array=t;}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(p);},h.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=true,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return []},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},135:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};},537:(e,t,n)=>{var r=n(606),o=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(e).replace(o,(function(e){if("%%"===e)return "%";if(n>=i)return e;switch(e){case "%s":return String(r[n++]);case "%d":return Number(r[n++]);case "%j":try{return JSON.stringify(r[n++])}catch(e){return "[Circular]"}default:return e}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},t.deprecate=function(e,o){if(v(n.g.process))return function(){return t.deprecate(e,o).apply(this,arguments)};if(true===r.noDeprecation)return e;var i=false;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=true;}return e.apply(this,arguments)}};var i,s={};function a(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&t._extend(r,n),v(r.showHidden)&&(r.showHidden=false),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=false),v(r.customInspect)&&(r.customInspect=true),r.colors&&(r.stylize=c),u(r,e,r.depth)}function c(e,t){var n=a.styles[t];return n?"["+a.colors[n][0]+"m"+e+"["+a.colors[n][1]+"m":e}function l(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return y(o)||(o=u(e,o,r)),o}var i=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(d(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,n);if(i)return i;var s=Object.keys(n),a=function(e){var t={};return e.forEach((function(e,n){t[e]=true;})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(S(n)){var c=n.name?": "+n.name:"";return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return e.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,_="",C=false,E=["{","}"];(h(n)&&(C=true,E=["[","]"]),S(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+f(n)),0!==s.length||C&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=C?function(e,t,n,r,o){for(var i=[],s=0,a=t.length;s<a;++s)T(t,String(s))?i.push(p(e,t,n,r,String(s),true)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,true));})),i}(e,n,r,a,s):s.map((function(t){return p(e,n,r,a,t,C)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,_,E)):E[0]+_+E[1]}function f(e){return "["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),T(r,o)||(s="["+o+"]"),a||(e.seen.indexOf(c.value)<0?(a=m(n)?u(e,c.value,null):u(e,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(e){return "  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return "   "+e})).join("\n")):a=e.stylize("[Circular]","special")),v(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"));}return s+": "+a}function h(e){return Array.isArray(e)}function d(e){return "boolean"==typeof e}function m(e){return null===e}function g(e){return "number"==typeof e}function y(e){return "string"==typeof e}function v(e){return void 0===e}function b(e){return _(e)&&"[object RegExp]"===C(e)}function _(e){return "object"==typeof e&&null!==e}function w(e){return _(e)&&"[object Date]"===C(e)}function x(e){return _(e)&&("[object Error]"===C(e)||e instanceof Error)}function S(e){return "function"==typeof e}function C(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(i)&&(i=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var n=r.pid;s[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r);};}else s[e]=function(){};return s[e]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=d,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=y,t.isSymbol=function(e){return "symbol"==typeof e},t.isUndefined=v,t.isRegExp=b,t.isObject=_,t.isDate=w,t.isError=x,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(135);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function O(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return [e.getDate(),A[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",O(),t.format.apply(t,arguments));},t.inherits=n(698),t._extend=function(e,t){if(!t||!_(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:true,get:t[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:true});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Ko,setupPluginUserInstance:()=>Vo});var e=n(627);const{entries:t,setPrototypeOf:o,isFrozen:i,getPrototypeOf:s,getOwnPropertyDescriptor:a}=Object;let{freeze:c,seal:l,create:u}=Object,{apply:f,construct:p}="undefined"!=typeof Reflect&&Reflect;c||(c=function(e){return e}),l||(l=function(e){return e}),f||(f=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return e.apply(t,r)}),p||(p=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const h=T(Array.prototype.forEach),d=T(Array.prototype.lastIndexOf),m=T(Array.prototype.pop),g=T(Array.prototype.push),y=T(Array.prototype.splice),v=T(String.prototype.toLowerCase),b=T(String.prototype.toString),_=T(String.prototype.match),w=T(String.prototype.replace),x=T(String.prototype.indexOf),S=T(String.prototype.trim),C=T(Object.prototype.hasOwnProperty),E=T(RegExp.prototype.test),A=(O=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return p(O,t)});var O;function T(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return f(e,t,r)}}function k(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v;o&&o(e,null);let r=t.length;for(;r--;){let o=t[r];if("string"==typeof o){const e=n(o);e!==o&&(i(t)||(t[r]=e),o=e);}e[o]=true;}return e}function j(e){for(let t=0;t<e.length;t++){C(e,t)||(e[t]=null);}return e}function I(e){const n=u(null);for(const[r,o]of t(e)){C(e,r)&&(Array.isArray(o)?n[r]=j(o):o&&"object"==typeof o&&o.constructor===Object?n[r]=I(o):n[r]=o);}return n}function L(e,t){for(;null!==e;){const n=a(e,t);if(n){if(n.get)return T(n.get);if("function"==typeof n.value)return T(n.value)}e=s(e);}return function(){return null}}const M=c(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),N=c(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=c(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=c(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),P=c(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),D=c(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),U=c(["#text"]),z=c(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),$=c(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=c(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=c(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=l(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=l(/<%[\w\W]*|[\w\W]*%>/gm),G=l(/\$\{[\w\W]*/gm),J=l(/^data-[\-\w.\u00B7-\uFFFF]+$/),Y=l(/^aria-[\-\w]+$/),Z=l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),X=l(/^(?:\w+script|data):/i),K=l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),V=l(/^html$/i),Q=l(/^[a-z][.\w]*(-[.\w]+)+$/i);var ee=Object.freeze({__proto__:null,ARIA_ATTR:Y,ATTR_WHITESPACE:K,CUSTOM_ELEMENT:Q,DATA_ATTR:J,DOCTYPE_NAME:V,ERB_EXPR:W,IS_ALLOWED_URI:Z,IS_SCRIPT_OR_DATA:X,MUSTACHE_EXPR:q,TMPLIT_EXPR:G});const te=1,ne=3,re=7,oe=8,ie=9,se=function(){return "undefined"==typeof window?null:window},ae=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};(function e(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se();const r=t=>e(t);if(r.version="3.3.1",r.removed=[],!n||!n.document||n.document.nodeType!==ie||!n.Element)return r.isSupported=false,r;let{document:o}=n;const i=o,s=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:l,Node:f,Element:p,NodeFilter:O,NamedNodeMap:T=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:j,DOMParser:q,trustedTypes:W}=n,G=p.prototype,J=L(G,"cloneNode"),Y=L(G,"remove"),X=L(G,"nextSibling"),K=L(G,"childNodes"),Q=L(G,"parentNode");if("function"==typeof l){const e=o.createElement("template");e.content&&e.content.ownerDocument&&(o=e.content.ownerDocument);}let ce,le="";const{implementation:ue,createNodeIterator:fe,createDocumentFragment:pe,getElementsByTagName:he}=o,{importNode:de}=i;let me={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof t&&"function"==typeof Q&&ue&&void 0!==ue.createHTMLDocument;const{MUSTACHE_EXPR:ge,ERB_EXPR:ye,TMPLIT_EXPR:ve,DATA_ATTR:be,ARIA_ATTR:_e,IS_SCRIPT_OR_DATA:we,ATTR_WHITESPACE:xe,CUSTOM_ELEMENT:Se}=ee;let{IS_ALLOWED_URI:Ce}=ee,Ee=null;const Ae=k({},[...M,...N,...R,...P,...U]);let Oe=null;const Te=k({},[...z,...$,...H,...B]);let ke=Object.seal(u(null,{tagNameCheck:{writable:true,configurable:false,enumerable:true,value:null},attributeNameCheck:{writable:true,configurable:false,enumerable:true,value:null},allowCustomizedBuiltInElements:{writable:true,configurable:false,enumerable:true,value:false}})),je=null,Ie=null;const Le=Object.seal(u(null,{tagCheck:{writable:true,configurable:false,enumerable:true,value:null},attributeCheck:{writable:true,configurable:false,enumerable:true,value:null}}));let Me=true,Ne=true,Re=false,Fe=true,Pe=false,De=true,Ue=false,ze=false,$e=false,He=false,Be=false,qe=false,We=true,Ge=false;const Je="user-content-";let Ye=true,Ze=false,Xe={},Ke=null;const Ve=k({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Qe=null;const et=k({},["audio","video","img","source","image","track"]);let tt=null;const nt=k({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),rt="http://www.w3.org/1998/Math/MathML",ot="http://www.w3.org/2000/svg",it="http://www.w3.org/1999/xhtml";let st=it,at=false,ct=null;const lt=k({},[rt,ot,it],b);let ut=k({},["mi","mo","mn","ms","mtext"]),ft=k({},["annotation-xml"]);const pt=k({},["title","style","font","a","script"]);let ht=null;const dt=["application/xhtml+xml","text/html"],mt="text/html";let gt=null,yt=null;const vt=o.createElement("form"),bt=function(e){return e instanceof RegExp||e instanceof Function},_t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!yt||yt!==e){if(e&&"object"==typeof e||(e={}),e=I(e),ht=-1===dt.indexOf(e.PARSER_MEDIA_TYPE)?mt:e.PARSER_MEDIA_TYPE,gt="application/xhtml+xml"===ht?b:v,Ee=C(e,"ALLOWED_TAGS")?k({},e.ALLOWED_TAGS,gt):Ae,Oe=C(e,"ALLOWED_ATTR")?k({},e.ALLOWED_ATTR,gt):Te,ct=C(e,"ALLOWED_NAMESPACES")?k({},e.ALLOWED_NAMESPACES,b):lt,tt=C(e,"ADD_URI_SAFE_ATTR")?k(I(nt),e.ADD_URI_SAFE_ATTR,gt):nt,Qe=C(e,"ADD_DATA_URI_TAGS")?k(I(et),e.ADD_DATA_URI_TAGS,gt):et,Ke=C(e,"FORBID_CONTENTS")?k({},e.FORBID_CONTENTS,gt):Ve,je=C(e,"FORBID_TAGS")?k({},e.FORBID_TAGS,gt):I({}),Ie=C(e,"FORBID_ATTR")?k({},e.FORBID_ATTR,gt):I({}),Xe=!!C(e,"USE_PROFILES")&&e.USE_PROFILES,Me=false!==e.ALLOW_ARIA_ATTR,Ne=false!==e.ALLOW_DATA_ATTR,Re=e.ALLOW_UNKNOWN_PROTOCOLS||false,Fe=false!==e.ALLOW_SELF_CLOSE_IN_ATTR,Pe=e.SAFE_FOR_TEMPLATES||false,De=false!==e.SAFE_FOR_XML,Ue=e.WHOLE_DOCUMENT||false,He=e.RETURN_DOM||false,Be=e.RETURN_DOM_FRAGMENT||false,qe=e.RETURN_TRUSTED_TYPE||false,$e=e.FORCE_BODY||false,We=false!==e.SANITIZE_DOM,Ge=e.SANITIZE_NAMED_PROPS||false,Ye=false!==e.KEEP_CONTENT,Ze=e.IN_PLACE||false,Ce=e.ALLOWED_URI_REGEXP||Z,st=e.NAMESPACE||it,ut=e.MATHML_TEXT_INTEGRATION_POINTS||ut,ft=e.HTML_INTEGRATION_POINTS||ft,ke=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&bt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&bt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Ne=false),Be&&(He=true),Xe&&(Ee=k({},U),Oe=[],true===Xe.html&&(k(Ee,M),k(Oe,z)),true===Xe.svg&&(k(Ee,N),k(Oe,$),k(Oe,B)),true===Xe.svgFilters&&(k(Ee,R),k(Oe,$),k(Oe,B)),true===Xe.mathMl&&(k(Ee,P),k(Oe,H),k(Oe,B))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?Le.tagCheck=e.ADD_TAGS:(Ee===Ae&&(Ee=I(Ee)),k(Ee,e.ADD_TAGS,gt))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?Le.attributeCheck=e.ADD_ATTR:(Oe===Te&&(Oe=I(Oe)),k(Oe,e.ADD_ATTR,gt))),e.ADD_URI_SAFE_ATTR&&k(tt,e.ADD_URI_SAFE_ATTR,gt),e.FORBID_CONTENTS&&(Ke===Ve&&(Ke=I(Ke)),k(Ke,e.FORBID_CONTENTS,gt)),e.ADD_FORBID_CONTENTS&&(Ke===Ve&&(Ke=I(Ke)),k(Ke,e.ADD_FORBID_CONTENTS,gt)),Ye&&(Ee["#text"]=true),Ue&&k(Ee,["html","head","body"]),Ee.table&&(k(Ee,["tbody"]),delete je.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ce=e.TRUSTED_TYPES_POLICY,le=ce.createHTML("");}else void 0===ce&&(ce=ae(W,s)),null!==ce&&"string"==typeof le&&(le=ce.createHTML(""));c&&c(e),yt=e;}},wt=k({},[...N,...R,...F]),xt=k({},[...P,...D]),St=function(e){let t=Q(e);t&&t.tagName||(t={namespaceURI:st,tagName:"template"});const n=v(e.tagName),r=v(t.tagName);return !!ct[e.namespaceURI]&&(e.namespaceURI===ot?t.namespaceURI===it?"svg"===n:t.namespaceURI===rt?"svg"===n&&("annotation-xml"===r||ut[r]):Boolean(wt[n]):e.namespaceURI===rt?t.namespaceURI===it?"math"===n:t.namespaceURI===ot?"math"===n&&ft[r]:Boolean(xt[n]):e.namespaceURI===it?!(t.namespaceURI===ot&&!ft[r])&&(!(t.namespaceURI===rt&&!ut[r])&&(!xt[n]&&(pt[n]||!wt[n]))):!("application/xhtml+xml"!==ht||!ct[e.namespaceURI]))},Ct=function(e){g(r.removed,{element:e});try{Q(e).removeChild(e);}catch(t){Y(e);}},Et=function(e,t){try{g(r.removed,{attribute:t.getAttributeNode(e),from:t});}catch(e){g(r.removed,{attribute:null,from:t});}if(t.removeAttribute(e),"is"===e)if(He||Be)try{Ct(t);}catch(e){}else try{t.setAttribute(e,"");}catch(e){}},At=function(e){let t=null,n=null;if($e)e="<remove></remove>"+e;else {const t=_(e,/^[\r\n\t ]+/);n=t&&t[0];}"application/xhtml+xml"===ht&&st===it&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const r=ce?ce.createHTML(e):e;if(st===it)try{t=(new q).parseFromString(r,ht);}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(st,"template",null);try{t.documentElement.innerHTML=at?le:r;}catch(e){}}const i=t.body||t.documentElement;return e&&n&&i.insertBefore(o.createTextNode(n),i.childNodes[0]||null),st===it?he.call(t,Ue?"html":"body")[0]:Ue?t.documentElement:i},Ot=function(e){return fe.call(e.ownerDocument||e,e,O.SHOW_ELEMENT|O.SHOW_COMMENT|O.SHOW_TEXT|O.SHOW_PROCESSING_INSTRUCTION|O.SHOW_CDATA_SECTION,null)},Tt=function(e){return e instanceof j&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof T)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},kt=function(e){return "function"==typeof f&&e instanceof f};function jt(e,t,n){h(e,(e=>{e.call(r,t,n,yt);}));}const It=function(e){let t=null;if(jt(me.beforeSanitizeElements,e,null),Tt(e))return Ct(e),true;const n=gt(e.nodeName);if(jt(me.uponSanitizeElement,e,{tagName:n,allowedTags:Ee}),De&&e.hasChildNodes()&&!kt(e.firstElementChild)&&E(/<[/\w!]/g,e.innerHTML)&&E(/<[/\w!]/g,e.textContent))return Ct(e),true;if(e.nodeType===re)return Ct(e),true;if(De&&e.nodeType===oe&&E(/<[/\w]/g,e.data))return Ct(e),true;if(!(Le.tagCheck instanceof Function&&Le.tagCheck(n))&&(!Ee[n]||je[n])){if(!je[n]&&Mt(n)){if(ke.tagNameCheck instanceof RegExp&&E(ke.tagNameCheck,n))return  false;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))return  false}if(Ye&&!Ke[n]){const t=Q(e)||e.parentNode,n=K(e)||e.childNodes;if(n&&t){for(let r=n.length-1;r>=0;--r){const o=J(n[r],true);o.__removalCount=(e.__removalCount||0)+1,t.insertBefore(o,X(e));}}}return Ct(e),true}return e instanceof p&&!St(e)?(Ct(e),true):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!E(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&e.nodeType===ne&&(t=e.textContent,h([ge,ye,ve],(e=>{t=w(t,e," ");})),e.textContent!==t&&(g(r.removed,{element:e.cloneNode()}),e.textContent=t)),jt(me.afterSanitizeElements,e,null),false):(Ct(e),true)},Lt=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in o||n in vt))return  false;if(Ne&&!Ie[t]&&E(be,t));else if(Me&&E(_e,t));else if(Le.attributeCheck instanceof Function&&Le.attributeCheck(t,e));else if(!Oe[t]||Ie[t]){if(!(Mt(e)&&(ke.tagNameCheck instanceof RegExp&&E(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&E(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t,e))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&E(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return  false}else if(tt[t]);else if(E(Ce,w(n,xe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!Qe[e]){if(Re&&!E(we,w(n,xe,"")));else if(n)return  false}else;return  true},Mt=function(e){return "annotation-xml"!==e&&_(e,Se)},Nt=function(e){jt(me.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Tt(e))return;const n={attrName:"",attrValue:"",keepAttr:true,allowedAttributes:Oe,forceKeepAttr:void 0};let o=t.length;for(;o--;){const i=t[o],{name:s,namespaceURI:a,value:c}=i,l=gt(s),u=c;let f="value"===s?u:S(u);if(n.attrName=l,n.attrValue=f,n.keepAttr=true,n.forceKeepAttr=void 0,jt(me.uponSanitizeAttribute,e,n),f=n.attrValue,!Ge||"id"!==l&&"name"!==l||(Et(s,e),f=Je+f),De&&E(/((--!?|])>)|<\/(style|title|textarea)/i,f)){Et(s,e);continue}if("attributename"===l&&_(f,"href")){Et(s,e);continue}if(n.forceKeepAttr)continue;if(!n.keepAttr){Et(s,e);continue}if(!Fe&&E(/\/>/i,f)){Et(s,e);continue}Pe&&h([ge,ye,ve],(e=>{f=w(f,e," ");}));const p=gt(e.nodeName);if(Lt(p,l,f)){if(ce&&"object"==typeof W&&"function"==typeof W.getAttributeType)if(a);else switch(W.getAttributeType(p,l)){case "TrustedHTML":f=ce.createHTML(f);break;case "TrustedScriptURL":f=ce.createScriptURL(f);}if(f!==u)try{a?e.setAttributeNS(a,s,f):e.setAttribute(s,f),Tt(e)?Ct(e):m(r.removed);}catch(t){Et(s,e);}}else Et(s,e);}jt(me.afterSanitizeAttributes,e,null);},Rt=function e(t){let n=null;const r=Ot(t);for(jt(me.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)jt(me.uponSanitizeShadowNode,n,null),It(n),Nt(n),n.content instanceof a&&e(n.content);jt(me.afterSanitizeShadowDOM,t,null);};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,c=null;if(at=!e,at&&(e="\x3c!--\x3e"),"string"!=typeof e&&!kt(e)){if("function"!=typeof e.toString)throw A("toString is not a function");if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}if(!r.isSupported)return e;if(ze||_t(t),r.removed=[],"string"==typeof e&&(Ze=false),Ze){if(e.nodeName){const t=gt(e.nodeName);if(!Ee[t]||je[t])throw A("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof f)n=At("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,true),o.nodeType===te&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else {if(!He&&!Pe&&!Ue&&-1===e.indexOf("<"))return ce&&qe?ce.createHTML(e):e;if(n=At(e),!n)return He?null:qe?le:""}n&&$e&&Ct(n.firstChild);const l=Ot(Ze?e:n);for(;s=l.nextNode();)It(s),Nt(s),s.content instanceof a&&Rt(s.content);if(Ze)return e;if(He){if(Be)for(c=pe.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return (Oe.shadowroot||Oe.shadowrootmode)&&(c=de.call(i,c,true)),c}let u=Ue?n.outerHTML:n.innerHTML;return Ue&&Ee["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&E(V,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),Pe&&h([ge,ye,ve],(e=>{u=w(u,e," ");})),ce&&qe?ce.createHTML(u):u},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_t(e),ze=true;},r.clearConfig=function(){yt=null,ze=false;},r.isValidAttribute=function(e,t,n){yt||_t({});const r=gt(e),o=gt(t);return Lt(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&g(me[e],t);},r.removeHook=function(e,t){if(void 0!==t){const n=d(me[e],t);return  -1===n?void 0:y(me[e],n,1)[0]}return m(me[e])},r.removeHooks=function(e){me[e]=[];},r.removeAllHooks=function(){me={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};},r})();var ce=n(744),le=n.n(ce);var ue=function(){return ue=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ue.apply(this,arguments)};function fe(e){return e.toLowerCase()}var pe=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],he=/[^A-Z0-9]+/gi;function de(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function me(e,t){return void 0===t&&(t={}),function(e,t){ void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?pe:n,o=t.stripRegexp,i=void 0===o?he:o,s=t.transform,a=void 0===s?fe:s,c=t.delimiter,l=void 0===c?" ":c,u=de(de(e,r,"$1\0$2"),i,"\0"),f=0,p=u.length;"\0"===u.charAt(f);)f++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(f,p).split("\0").map(a).join(l)}(e,ue({delimiter:"."},t))}var ge=n(228),ye=n.n(ge);function ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}const be="win32"===navigator.platform.toLowerCase()?e.win32:e.posix;const _e=function(e,t){return void 0===t&&(t={}),me(e,ue({delimiter:"_"},t))};class we extends(ye()){constructor(e,t){super(),ve(this,"_tag",void 0),ve(this,"_opts",void 0),ve(this,"_logs",[]),this._tag=e,this._opts=t;}write(e,t,n){var r;null!=t&&t.length&&true===t[t.length-1]&&(n=true,t.pop());const o=t.reduce(((e,t)=>(t&&t instanceof Error?e+=`${t.message} ${t.stack}`:e+=t.toString(),e)),`[${this._tag}][${(new Date).toLocaleTimeString()}] `);var i;(this._logs.push([e,o]),n||null!==(r=this._opts)&&void 0!==r&&r.console)&&(null===(i=console)||void 0===i||i["ERROR"===e?"error":"debug"](`${e}: ${o}`));this.emit("change");}clear(){this._logs=[],this.emit("change");}info(...e){this.write("INFO",e);}error(...e){this.write("ERROR",e);}warn(...e){this.write("WARN",e);}setTag(e){this._tag=e;}toJSON(){return this._logs}}function xe(e,...t){try{const n=new URL(e);if(!n.origin)throw new Error(null);const r=be.join(e.substr(n.origin.length),...t);return n.origin+r}catch(n){return be.join(e,...t)}}function Se(e,t){let n,r,o=false;const i=t=>n=>{e&&clearTimeout(e),t(n),o=true;},s=new Promise(((o,s)=>{n=i(o),r=i(s),e&&(e=setTimeout((()=>r(new Error(`[deferred timeout] ${t}`))),e));}));return {created:Date.now(),setTag:e=>t=e,resolve:n,reject:r,promise:s,get settled(){return o}}}const Ce=new Map;window.__injectedUIEffects=Ce;var Ee=n(833),Ae=n.n(Ee);function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}const Te="application/x-postmate-v1+json";let ke=0;const je={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},Ie=(e,t)=>("string"!=typeof t||e.origin===t)&&(!!e.data&&(("object"!=typeof e.data||"postmate"in e.data)&&(e.data.type===Te&&!!je[e.data.postmate])));class Le{constructor(e){Oe(this,"parent",void 0),Oe(this,"frame",void 0),Oe(this,"child",void 0),Oe(this,"events",{}),Oe(this,"childOrigin",void 0),Oe(this,"listener",void 0),this.parent=e.parent,this.frame=e.frame,this.child=e.child,this.childOrigin=e.childOrigin,this.listener=e=>{if(!Ie(e,this.childOrigin))return  false;const{data:t,name:n}=((e||{}).data||{}).value||{};"emit"===e.data.postmate&&n in this.events&&this.events[n].forEach((e=>{e.call(this,t);}));},this.parent.addEventListener("message",this.listener,false);}get(e,...t){return new Promise(((n,r)=>{const o=++ke,i=e=>{e.data.uid===o&&"reply"===e.data.postmate&&(this.parent.removeEventListener("message",i,false),e.data.error?r(e.data.error):n(e.data.value));};this.parent.addEventListener("message",i,false),this.child.postMessage({postmate:"request",type:Te,property:e,args:t,uid:o},this.childOrigin);}))}call(e,t){this.child.postMessage({postmate:"call",type:Te,property:e,data:t},this.childOrigin);}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t);}destroy(){window.removeEventListener("message",this.listener,false),this.frame.parentNode.removeChild(this.frame);}}class Me{constructor(e){Oe(this,"model",void 0),Oe(this,"parent",void 0),Oe(this,"parentOrigin",void 0),Oe(this,"child",void 0),this.model=e.model,this.parent=e.parent,this.parentOrigin=e.parentOrigin,this.child=e.child,this.child.addEventListener("message",(e=>{if(!Ie(e,this.parentOrigin))return;const{property:t,uid:n,data:r,args:o}=e.data;"call"!==e.data.postmate?((e,t,n)=>{const r="function"==typeof e[t]?e[t].apply(null,n):e[t];return Promise.resolve(r)})(this.model,t,o).then((r=>{e.source.postMessage({property:t,postmate:"reply",type:Te,uid:n,value:r},e.origin);})).catch((r=>{e.source.postMessage({property:t,postmate:"reply",type:Te,uid:n,error:r},e.origin);})):t in this.model&&"function"==typeof this.model[t]&&this.model[t](r);}));}emit(e,t){this.parent.postMessage({postmate:"emit",type:Te,value:{name:e,data:t}},this.parentOrigin);}}class Ne{constructor(e){Oe(this,"container",void 0),Oe(this,"parent",void 0),Oe(this,"frame",void 0),Oe(this,"child",void 0),Oe(this,"childOrigin",void 0),Oe(this,"url",void 0),Oe(this,"model",void 0),this.container=e.container,this.url=e.url,this.parent=window,this.frame=document.createElement("iframe"),e.id&&(this.frame.id=e.id),e.name&&(this.frame.name=e.name),e.allow&&(this.frame.allow=e.allow),this.frame.classList.add.apply(this.frame.classList,e.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=e.model||{};}sendHandshake(e){const t=(e=>{const t=document.createElement("a");t.href=e;const n=t.protocol.length>4?t.protocol:window.location.protocol,r=t.host.length?"80"===t.port||"443"===t.port?t.hostname:t.host:window.location.host;return t.origin||`${n}//${r}`})(e=e||this.url);let n,r=0;return new Promise(((o,i)=>{const s=e=>!!Ie(e,t)&&("handshake-reply"===e.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",s,false),this.childOrigin=e.origin,o(new Le(this))):i("Failed handshake"));this.parent.addEventListener("message",s,false);const a=()=>{r++,this.child.postMessage({postmate:"handshake",type:Te,model:this.model},t),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{a(),n=setInterval(a,500);})),this.frame.src=e;}))}destroy(){this.frame.parentNode.removeChild(this.frame);}}Oe(Ne,"debug",false),Oe(Ne,"Model",void 0);class Re{constructor(e){Oe(this,"child",void 0),Oe(this,"model",void 0),Oe(this,"parent",void 0),Oe(this,"parentOrigin",void 0),this.child=window,this.model=e,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((e,t)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,false),r.source.postMessage({postmate:"handshake-reply",type:Te},r.origin),this.parentOrigin=r.origin;const t=r.data.model;return t&&Object.keys(t).forEach((e=>{this.model[e]=t[e];})),e(new Me(this))}return t("Handshake Reply Failed")}};this.child.addEventListener("message",n,false);}))}}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}const{importHTML:Pe,createSandboxContainer:De}=window.QSandbox||{};function Ue(e,t){return e.startsWith("http")?fetch(e,t):(e=e.replace("file://",""),new Promise((async(t,n)=>{try{const n=await window.apis.doAction(["readFile",e]);t({text:()=>n});}catch(e){console.error(e),n(e);}})))}class ze extends(ye()){constructor(e){super(),Fe(this,"_pluginLocal",void 0),Fe(this,"_frame",void 0),Fe(this,"_root",void 0),Fe(this,"_loaded",false),Fe(this,"_unmountFns",[]),this._pluginLocal=e,e._dispose((()=>{this._unmount();}));}async load(){const{name:e,entry:t}=this._pluginLocal.options;if(this.loaded||!t)return;const{template:n,execScripts:r}=await Pe(t,{fetch:Ue});this._mount(n,document.body);const o=De(e,{elementGetter:()=>{var e;return null===(e=this._root)||void 0===e?void 0:e.firstChild}}).instance.proxy;o.__shadow_mode__=true,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Ko(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,true);this._unmountFns.push(i.unmount),this._loaded=true;}_mount(e,t){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${e}</div>`,t.appendChild(n),this.emit("mounted");}_unmount(){for(const e of this._unmountFns)e&&e.call(null);}destroy(){var e,t;null===(e=this.frame)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(this.frame);}get loaded(){return this._loaded}get document(){var e;return null===(e=this._root)||void 0===e?void 0:e.firstChild}get frame(){return this._frame}}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}const He=Ae()("LSPlugin:caller"),Be="#await#response#",qe="#lspmsg#",We="#lspmsg#error#",Ge=e=>`#lspmsg#${e}`;class Je extends(ye()){constructor(e){super(),$e(this,"_pluginLocal",void 0),$e(this,"_connected",false),$e(this,"_parent",void 0),$e(this,"_child",void 0),$e(this,"_shadow",void 0),$e(this,"_status",void 0),$e(this,"_userModel",{}),$e(this,"_call",void 0),$e(this,"_callUserModel",void 0),$e(this,"_debugTag",""),this._pluginLocal=e,e&&(this._debugTag=e.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:e}=this._pluginLocal;e?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(e={}){if(this._connected)return;const t=this,n=null!=this._pluginLocal;let o=0;const i=new Map,s=Se(6e4),a=this._extendUserModel({"#lspmsg#ready#":async e=>{a[Ge(null==e?void 0:e.pid)]=({type:e,payload:n})=>{He(`[host (_call) -> *user] ${this._debugTag}`,e,n),t.emit(e,n);},await s.resolve();},"#lspmsg#beforeunload#":async e=>{const n=Se(1e4);t.emit("beforeunload",Object.assign({actor:n},e)),await n.promise;},"#lspmsg#settings#":async({type:e,payload:n})=>{t.emit("settings:changed",n);},[qe]:async({ns:e,type:n,payload:r})=>{He(`[host (async) -> *user] ${this._debugTag} ns=${e} type=${n}`,r),e&&e.startsWith("hook")?t.emit(`${e}:${n}`,r):t.emit(n,r);},"#lspmsg#reply#":({_sync:e,result:t})=>{if(He(`[sync host -> *user] #${e}`,t),i.has(e)){const n=i.get(e);n&&(null!=t&&t.hasOwnProperty(We)?n.reject(t[We]):n.resolve(t),i.delete(e));}},...e});var c;if(n)return await s.promise,JSON.parse(JSON.stringify(null===(c=this._pluginLocal)||void 0===c?void 0:c.toJSON()));const l=new Re(a).sendHandshakeReply();return this._status="pending",await l.then((e=>{this._child=e,this._connected=true,this._call=async(t,n={},r)=>{if(r){const e=++o;i.set(e,r),n._sync=e,r.setTag(`async call #${e}`),He(`async call #${e}`);}return e.emit(Ge(a.baseInfo.id),{type:t,payload:n}),null==r?void 0:r.promise},this._callUserModel=async(e,t)=>{try{a[e](t);}catch(t){He(`[model method] #${e} not existed`);}},setInterval((()=>{if(i.size>100)for(const[e,t]of i)t.settled&&i.delete(e);}),18e5);})).finally((()=>{this._status=void 0;})),await s.promise,a.baseInfo}async call(e,t={}){var n;return null===(n=this._call)||void 0===n?void 0:n.call(this,e,t)}async callAsync(e,t={}){var n;const r=Se(1e4);return null===(n=this._call)||void 0===n?void 0:n.call(this,e,t,r)}async callUserModel(e,...t){var n;return null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[e,...t])}async callUserModelAsync(e,...t){var n;return e=`${Be}${e}`,null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[e,...t])}async _setupIframeSandbox(){const e=this._pluginLocal,t=e.id,n=`${t}_lsp_main`,r=new URL(e.options.entry);r.searchParams.set("__v__",e.options.version);const o=document.querySelector(`#${n}`);o&&o.parentElement.removeChild(o);const i=document.createElement("div");i.classList.add("lsp-iframe-sandbox-container"),i.id=n,i.dataset.pid=t;try{var s;const e=null===(s=await this._pluginLocal._loadLayoutsData())||void 0===s?void 0:s.$$0;if(e){i.dataset.inited_layout="true";let{width:t,height:n,left:r,top:o,vw:s,vh:a}=e;r=Math.max(r,0),r="number"==typeof s?`${Math.min(100*r/s,99)}%`:`${r}px`,o=Math.max(o,45),o="number"==typeof a?`${Math.min(100*o/a,99)}%`:`${o}px`,Object.assign(i.style,{width:t+"px",height:n+"px",left:r,top:o});}}catch(e){console.error("[Restore Layout Error]",e);}document.body.appendChild(i);const a=new Ne({id:t+"_iframe",container:i,url:r.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(e.toJSON()))},allow:e.options.allow});let c,l=a.sendHandshake();return this._status="pending",new Promise(((t,n)=>{c=setTimeout((()=>{n(new Error("handshake Timeout")),a.destroy();}),8e3),l.then((n=>{this._parent=n,this._connected=true,this.emit("connected"),n.on(Ge(e.id),(({type:e,payload:t})=>{var n,r;He("[user -> *host] ",e,t),null===(n=this._pluginLocal)||void 0===n||n.emit(e,t||{}),null===(r=this._pluginLocal)||void 0===r||r.caller.emit(e,t||{});})),this._call=async(...t)=>{n.call(Ge(e.id),{type:t[0],payload:Object.assign(t[1]||{},{$$pid:e.id})});},this._callUserModel=async(e,...t)=>{if(e.startsWith(Be))return await n.get(e.replace(Be,""),...t);n.call(e,null==t?void 0:t[0]);},t(null);})).catch((e=>{n(e);})).finally((()=>{clearTimeout(c);}));})).catch((e=>{throw He("[iframe sandbox] error",e),e})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const e=this._pluginLocal,t=this._shadow=new ze(e);try{this._status="pending",await t.load(),this._connected=!0,this.emit("connected"),this._call=async(t,n={},r)=>{var o;return r&&(n.actor=r),null===(o=this._pluginLocal)||void 0===o||o.emit(t,Object.assign(n,{$$pid:e.id})),null==r?void 0:r.promise},this._callUserModel=async(...e)=>{var t;let n=e[0];null!==(t=n)&&void 0!==t&&t.startsWith(Be)&&(n=n.replace(Be,""));const r=e[1]||{},o=this._userModel[n];"function"==typeof o&&await o.call(null,r);};}catch(e){throw He("[shadow sandbox] error",e),e}finally{this._status=void 0;}}_extendUserModel(e){return Object.assign(this._userModel,e)}_getSandboxIframeContainer(){var e;return null===(e=this._parent)||void 0===e?void 0:e.frame.parentNode}_getSandboxShadowContainer(){var e;return null===(e=this._shadow)||void 0===e?void 0:e.frame.parentNode}_getSandboxIframeRoot(){var e;return null===(e=this._parent)||void 0===e?void 0:e.frame}_getSandboxShadowRoot(){var e;return null===(e=this._shadow)||void 0===e?void 0:e.frame}set debugTag(e){this._debugTag=e;}async destroy(){var e;let t=null;this._parent&&(t=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(t=this._getSandboxShadowContainer(),this._shadow.destroy()),null===(e=t)||void 0===e||e.parentNode.removeChild(t);}}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}class Ze{constructor(e,t){Ye(this,"ctx",void 0),Ye(this,"opts",void 0),this.ctx=e,this.opts=t;}get ctxId(){return this.ctx.baseInfo.id}setItem(e,t){var n;return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,e,t,null===(n=this.opts)||void 0===n?void 0:n.assets]})}getItem(e){var t;return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,e,null===(t=this.opts)||void 0===t?void 0:t.assets]})}removeItem(e){var t;return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,e,null===(t=this.opts)||void 0===t?void 0:t.assets]})}allKeys(){var e;return this.ctx.caller.callAsync("api:call",{method:"list-plugin-storage-files",args:[this.ctxId,null===(e=this.opts)||void 0===e?void 0:e.assets]})}clear(){var e;return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId,null===(e=this.opts)||void 0===e?void 0:e.assets]})}hasItem(e){var t;return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,e,null===(t=this.opts)||void 0===t?void 0:t.assets]})}}class Xe{constructor(e){var t,n,r;r=void 0,(n="ctx")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:true,configurable:true,writable:true}):t[n]=r,this.ctx=e;}get React(){return this.ensureHostScope().React}get ReactDOM(){return this.ensureHostScope().ReactDOM}get Components(){return {Editor:this.ensureHostScope().logseq.sdk.experiments.cp_page_editor}}get Utils(){const e=this.ensureHostScope().logseq.sdk.utils,t=t=>e[_e(t)];return {toClj:t("toClj"),jsxToClj:t("jsxToClj"),toJs:t("toJs"),toKeyword:t("toKeyword"),toSymbol:t("toSymbol")}}get pluginLocal(){return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id)}invokeExperMethod(e,...t){var n;const r=this.ensureHostScope();e=null===(n=_e(e))||void 0===n?void 0:n.toLowerCase();const o=r.logseq.api["exper_"+e]||r.logseq.sdk.experiments[e];return null==o?void 0:o.apply(r,t)}async loadScripts(...e){(e=e.map((e=>null!=e&&e.startsWith("http")?e:this.ctx.resolveResourceFullUrl(e)))).unshift(this.ctx.baseInfo.id),await this.invokeExperMethod("loadScripts",...e);}registerFencedCodeRenderer(e,t){return this.invokeExperMethod("registerFencedCodeRenderer",this.ctx.baseInfo.id,e,t)}registerDaemonRenderer(e,t){return this.invokeExperMethod("registerDaemonRenderer",this.ctx.baseInfo.id,e,t)}registerRouteRenderer(e,t){return this.invokeExperMethod("registerRouteRenderer",this.ctx.baseInfo.id,e,t)}registerExtensionsEnhancer(e,t){const n=this.ensureHostScope();if("katex"===e)n.katex&&t(n.katex).catch(console.error);return this.invokeExperMethod("registerExtensionsEnhancer",this.ctx.baseInfo.id,e,t)}ensureHostScope(){try{var e;null===(e=window.top)||void 0===e||e.document;}catch(e){console.error("Can not access host scope!");}return window.top}}function Ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}const Ve=e=>`task_callback_${e}`;class Qe{constructor(e,t,n={}){Ke(this,"_client",void 0),Ke(this,"_requestId",void 0),Ke(this,"_requestOptions",void 0),Ke(this,"_promise",void 0),Ke(this,"_aborted",false),this._client=e,this._requestId=t,this._requestOptions=n,this._promise=new Promise(((e,t)=>{if(!this._requestId)return t(null);this._client.once(Ve(this._requestId),(n=>{n&&n instanceof Error?t(n):e(n);}));}));const{success:r,fail:o,final:i}=this._requestOptions;this._promise.then((e=>{null==r||r(e);})).catch((e=>{null==o||o(e);})).finally((()=>{null==i||i();}));}abort(){this._requestOptions.abortable&&!this._aborted&&(this._client.ctx._execCallableAPI("http_request_abort",this._requestId),this._aborted=true);}get promise(){return this._promise}get client(){return this._client}get requestId(){return this._requestId}}class et extends ge.EventEmitter{constructor(e){super(),Ke(this,"_ctx",void 0),this._ctx=e,this.ctx.caller.on("#lsp#request#callback",(e=>{const t=null==e?void 0:e.requestId;t&&this.emit(Ve(t),null==e?void 0:e.payload);}));}static createRequestTask(e,t,n){return new Qe(e,t,n)}async _request(e){const t=this.ctx.baseInfo.id,{success:n,fail:r,final:o,...i}=e,s=this.ctx.Experiments.invokeExperMethod("request",t,i),a=et.createRequestTask(this.ctx.Request,s,e);return i.abortable?a:a.promise}get ctx(){return this._ctx}}const tt=Array.isArray;const nt="object"==typeof commonjsGlobal$1&&commonjsGlobal$1&&commonjsGlobal$1.Object===Object&&commonjsGlobal$1;var rt="object"==typeof self&&self&&self.Object===Object&&self;const ot=nt||rt||Function("return this")();const it=ot.Symbol;var st=Object.prototype,at=st.hasOwnProperty,ct=st.toString,lt=it?it.toStringTag:void 0;const ut=function(e){var t=at.call(e,lt),n=e[lt];try{e[lt]=void 0;var r=!0;}catch(e){}var o=ct.call(e);return r&&(t?e[lt]=n:delete e[lt]),o};var ft=Object.prototype.toString;const pt=function(e){return ft.call(e)};var ht=it?it.toStringTag:void 0;const dt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ht&&ht in Object(e)?ut(e):pt(e)};const mt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const gt=function(e){if(!mt(e))return  false;var t=dt(e);return "[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};const yt=ot["__core-js_shared__"];var vt,bt=(vt=/[^.]+$/.exec(yt&&yt.keys&&yt.keys.IE_PROTO||""))?"Symbol(src)_1."+vt:"";const _t=function(e){return !!bt&&bt in e};var wt=Function.prototype.toString;const xt=function(e){if(null!=e){try{return wt.call(e)}catch(e){}try{return e+""}catch(e){}}return ""};var St=/^\[object .+?Constructor\]$/,Ct=Function.prototype,Et=Object.prototype,At=Ct.toString,Ot=Et.hasOwnProperty,Tt=RegExp("^"+At.call(Ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const kt=function(e){return !(!mt(e)||_t(e))&&(gt(e)?Tt:St).test(xt(e))};const jt=function(e,t){return null==e?void 0:e[t]};const It=function(e,t){var n=jt(e,t);return kt(n)?n:void 0};const Lt=function(){try{var e=It(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();const Mt=function(e,t,n){"__proto__"==t&&Lt?Lt(e,t,{configurable:true,enumerable:true,value:n,writable:true}):e[t]=n;};const Nt=function(e){return function(t,n,r){for(var o=-1,i=Object(t),s=r(t),a=s.length;a--;){var c=s[++o];if(false===n(i[c],c,i))break}return t}}();const Rt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};const Ft=function(e){return null!=e&&"object"==typeof e};const Pt=function(e){return Ft(e)&&"[object Arguments]"==dt(e)};var Dt=Object.prototype,Ut=Dt.hasOwnProperty,zt=Dt.propertyIsEnumerable;const $t=Pt(function(){return arguments}())?Pt:function(e){return Ft(e)&&Ut.call(e,"callee")&&!zt.call(e,"callee")};const Ht=function(){return  false};var Bt=exports$1&&!exports$1.nodeType&&exports$1,qt=Bt&&"object"=='object'&&module&&!module.nodeType&&module,Wt=qt&&qt.exports===Bt?ot.Buffer:void 0;const Gt=(Wt?Wt.isBuffer:void 0)||Ht;var Jt=/^(?:0|[1-9]\d*)$/;const Yt=function(e,t){var n=typeof e;return !!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Jt.test(e))&&e>-1&&e%1==0&&e<t};const Zt=function(e){return "number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var Xt={};Xt["[object Float32Array]"]=Xt["[object Float64Array]"]=Xt["[object Int8Array]"]=Xt["[object Int16Array]"]=Xt["[object Int32Array]"]=Xt["[object Uint8Array]"]=Xt["[object Uint8ClampedArray]"]=Xt["[object Uint16Array]"]=Xt["[object Uint32Array]"]=true,Xt["[object Arguments]"]=Xt["[object Array]"]=Xt["[object ArrayBuffer]"]=Xt["[object Boolean]"]=Xt["[object DataView]"]=Xt["[object Date]"]=Xt["[object Error]"]=Xt["[object Function]"]=Xt["[object Map]"]=Xt["[object Number]"]=Xt["[object Object]"]=Xt["[object RegExp]"]=Xt["[object Set]"]=Xt["[object String]"]=Xt["[object WeakMap]"]=false;const Kt=function(e){return Ft(e)&&Zt(e.length)&&!!Xt[dt(e)]};const Vt=function(e){return function(t){return e(t)}};var Qt=exports$1&&!exports$1.nodeType&&exports$1,en=Qt&&"object"=='object'&&module&&!module.nodeType&&module,tn=en&&en.exports===Qt&&nt.process,nn=function(){try{var e=en&&en.require&&en.require("util").types;return e||tn&&tn.binding&&tn.binding("util")}catch(e){}}();var rn=nn&&nn.isTypedArray;const on=rn?Vt(rn):Kt;var sn=Object.prototype.hasOwnProperty;const an=function(e,t){var n=tt(e),r=!n&&$t(e),o=!n&&!r&&Gt(e),i=!n&&!r&&!o&&on(e),s=n||r||o||i,a=s?Rt(e.length,String):[],c=a.length;for(var l in e)!sn.call(e,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Yt(l,c))||a.push(l);return a};var cn=Object.prototype;const ln=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||cn)};const un=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object);var fn=Object.prototype.hasOwnProperty;const pn=function(e){if(!ln(e))return un(e);var t=[];for(var n in Object(e))fn.call(e,n)&&"constructor"!=n&&t.push(n);return t};const hn=function(e){return null!=e&&Zt(e.length)&&!gt(e)};const dn=function(e){return hn(e)?an(e):pn(e)};const mn=function(e,t){return e&&Nt(e,t,dn)};const gn=function(){this.__data__=[],this.size=0;};const yn=function(e,t){return e===t||e!=e&&t!=t};const vn=function(e,t){for(var n=e.length;n--;)if(yn(e[n][0],t))return n;return  -1};var bn=Array.prototype.splice;const _n=function(e){var t=this.__data__,n=vn(t,e);return !(n<0)&&(n==t.length-1?t.pop():bn.call(t,n,1),--this.size,true)};const wn=function(e){var t=this.__data__,n=vn(t,e);return n<0?void 0:t[n][1]};const xn=function(e){return vn(this.__data__,e)>-1};const Sn=function(e,t){var n=this.__data__,r=vn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Cn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}Cn.prototype.clear=gn,Cn.prototype.delete=_n,Cn.prototype.get=wn,Cn.prototype.has=xn,Cn.prototype.set=Sn;const En=Cn;const An=function(){this.__data__=new En,this.size=0;};const On=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};const Tn=function(e){return this.__data__.get(e)};const kn=function(e){return this.__data__.has(e)};const jn=It(ot,"Map");const In=It(Object,"create");const Ln=function(){this.__data__=In?In(null):{},this.size=0;};const Mn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};var Nn=Object.prototype.hasOwnProperty;const Rn=function(e){var t=this.__data__;if(In){var n=t[e];return "__lodash_hash_undefined__"===n?void 0:n}return Nn.call(t,e)?t[e]:void 0};var Fn=Object.prototype.hasOwnProperty;const Pn=function(e){var t=this.__data__;return In?void 0!==t[e]:Fn.call(t,e)};const Dn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=In&&void 0===t?"__lodash_hash_undefined__":t,this};function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}Un.prototype.clear=Ln,Un.prototype.delete=Mn,Un.prototype.get=Rn,Un.prototype.has=Pn,Un.prototype.set=Dn;const zn=Un;const $n=function(){this.size=0,this.__data__={hash:new zn,map:new(jn||En),string:new zn};};const Hn=function(e){var t=typeof e;return "string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};const Bn=function(e,t){var n=e.__data__;return Hn(t)?n["string"==typeof t?"string":"hash"]:n.map};const qn=function(e){var t=Bn(this,e).delete(e);return this.size-=t?1:0,t};const Wn=function(e){return Bn(this,e).get(e)};const Gn=function(e){return Bn(this,e).has(e)};const Jn=function(e,t){var n=Bn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1]);}}Yn.prototype.clear=$n,Yn.prototype.delete=qn,Yn.prototype.get=Wn,Yn.prototype.has=Gn,Yn.prototype.set=Jn;const Zn=Yn;const Xn=function(e,t){var n=this.__data__;if(n instanceof En){var r=n.__data__;if(!jn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Zn(r);}return n.set(e,t),this.size=n.size,this};function Kn(e){var t=this.__data__=new En(e);this.size=t.size;}Kn.prototype.clear=An,Kn.prototype.delete=On,Kn.prototype.get=Tn,Kn.prototype.has=kn,Kn.prototype.set=Xn;const Vn=Kn;const Qn=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};const er=function(e){return this.__data__.has(e)};function tr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Zn;++t<n;)this.add(e[t]);}tr.prototype.add=tr.prototype.push=Qn,tr.prototype.has=er;const nr=tr;const rr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return  true;return  false};const or=function(e,t){return e.has(t)};const ir=function(e,t,n,r,o,i){var s=1&n,a=e.length,c=t.length;if(a!=c&&!(s&&c>a))return  false;var l=i.get(e),u=i.get(t);if(l&&u)return l==t&&u==e;var f=-1,p=true,h=2&n?new nr:void 0;for(i.set(e,t),i.set(t,e);++f<a;){var d=e[f],m=t[f];if(r)var g=s?r(m,d,f,t,e,i):r(d,m,f,e,t,i);if(void 0!==g){if(g)continue;p=false;break}if(h){if(!rr(t,(function(e,t){if(!or(h,t)&&(d===e||o(d,e,n,r,i)))return h.push(t)}))){p=false;break}}else if(d!==m&&!o(d,m,n,r,i)){p=false;break}}return i.delete(e),i.delete(t),p};const sr=ot.Uint8Array;const ar=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e];})),n};const cr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e;})),n};var lr=it?it.prototype:void 0,ur=lr?lr.valueOf:void 0;const fr=function(e,t,n,r,o,i,s){switch(n){case "[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return  false;e=e.buffer,t=t.buffer;case "[object ArrayBuffer]":return !(e.byteLength!=t.byteLength||!i(new sr(e),new sr(t)));case "[object Boolean]":case "[object Date]":case "[object Number]":return yn(+e,+t);case "[object Error]":return e.name==t.name&&e.message==t.message;case "[object RegExp]":case "[object String]":return e==t+"";case "[object Map]":var a=ar;case "[object Set]":var c=1&r;if(a||(a=cr),e.size!=t.size&&!c)return  false;var l=s.get(e);if(l)return l==t;r|=2,s.set(e,t);var u=ir(a(e),a(t),r,o,i,s);return s.delete(e),u;case "[object Symbol]":if(ur)return ur.call(e)==ur.call(t)}return  false};const pr=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e};const hr=function(e,t,n){var r=t(e);return tt(e)?r:pr(r,n(e))};const dr=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var s=e[n];t(s,n,e)&&(i[o++]=s);}return i};const mr=function(){return []};var gr=Object.prototype.propertyIsEnumerable,yr=Object.getOwnPropertySymbols;const vr=yr?function(e){return null==e?[]:(e=Object(e),dr(yr(e),(function(t){return gr.call(e,t)})))}:mr;const br=function(e){return hr(e,dn,vr)};var _r=Object.prototype.hasOwnProperty;const wr=function(e,t,n,r,o,i){var s=1&n,a=br(e),c=a.length;if(c!=br(t).length&&!s)return  false;for(var l=c;l--;){var u=a[l];if(!(s?u in t:_r.call(t,u)))return  false}var f=i.get(e),p=i.get(t);if(f&&p)return f==t&&p==e;var h=true;i.set(e,t),i.set(t,e);for(var d=s;++l<c;){var m=e[u=a[l]],g=t[u];if(r)var y=s?r(g,m,u,t,e,i):r(m,g,u,e,t,i);if(!(void 0===y?m===g||o(m,g,n,r,i):y)){h=false;break}d||(d="constructor"==u);}if(h&&!d){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(h=false);}return i.delete(e),i.delete(t),h};const xr=It(ot,"DataView");const Sr=It(ot,"Promise");const Cr=It(ot,"Set");const Er=It(ot,"WeakMap");var Ar="[object Map]",Or="[object Promise]",Tr="[object Set]",kr="[object WeakMap]",jr="[object DataView]",Ir=xt(xr),Lr=xt(jn),Mr=xt(Sr),Nr=xt(Cr),Rr=xt(Er),Fr=dt;(xr&&Fr(new xr(new ArrayBuffer(1)))!=jr||jn&&Fr(new jn)!=Ar||Sr&&Fr(Sr.resolve())!=Or||Cr&&Fr(new Cr)!=Tr||Er&&Fr(new Er)!=kr)&&(Fr=function(e){var t=dt(e),n="[object Object]"==t?e.constructor:void 0,r=n?xt(n):"";if(r)switch(r){case Ir:return jr;case Lr:return Ar;case Mr:return Or;case Nr:return Tr;case Rr:return kr}return t});const Pr=Fr;var Dr="[object Arguments]",Ur="[object Array]",zr="[object Object]",$r=Object.prototype.hasOwnProperty;const Hr=function(e,t,n,r,o,i){var s=tt(e),a=tt(t),c=s?Ur:Pr(e),l=a?Ur:Pr(t),u=(c=c==Dr?zr:c)==zr,f=(l=l==Dr?zr:l)==zr,p=c==l;if(p&&Gt(e)){if(!Gt(t))return  false;s=true,u=false;}if(p&&!u)return i||(i=new Vn),s||on(e)?ir(e,t,n,r,o,i):fr(e,t,c,n,r,o,i);if(!(1&n)){var h=u&&$r.call(e,"__wrapped__"),d=f&&$r.call(t,"__wrapped__");if(h||d){var m=h?e.value():e,g=d?t.value():t;return i||(i=new Vn),o(m,g,n,r,i)}}return !!p&&(i||(i=new Vn),wr(e,t,n,r,o,i))};const Br=function e(t,n,r,o,i){return t===n||(null==t||null==n||!Ft(t)&&!Ft(n)?t!=t&&n!=n:Hr(t,n,r,o,e,i))};const qr=function(e,t,n,r){var o=n.length,i=o;if(null==e)return !i;for(e=Object(e);o--;){var a=n[o];if(a[2]?a[1]!==e[a[0]]:!(a[0]in e))return  false}for(;++o<i;){var c=(a=n[o])[0],l=e[c],u=a[1];if(a[2]){if(void 0===l&&!(c in e))return  false}else {var f=new Vn;var p; if(!(void 0===p?Br(u,l,3,r,f):p))return  false}}return  true};const Wr=function(e){return e==e&&!mt(e)};const Gr=function(e){for(var t=dn(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Wr(o)];}return t};const Jr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}};const Yr=function(e){var t=Gr(e);return 1==t.length&&t[0][2]?Jr(t[0][0],t[0][1]):function(n){return n===e||qr(n,e,t)}};const Zr=function(e){return "symbol"==typeof e||Ft(e)&&"[object Symbol]"==dt(e)};var Xr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kr=/^\w*$/;const Vr=function(e,t){if(tt(e))return  false;var n=typeof e;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Zr(e))||(Kr.test(e)||!Xr.test(e)||null!=t&&e in Object(t))};function Qr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=e.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(Qr.Cache||Zn),n}Qr.Cache=Zn;const eo=Qr;var to=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,no=/\\(\\)?/g;const ro=function(e){var t=eo(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(to,(function(e,n,r,o){t.push(r?o.replace(no,"$1"):n||e);})),t}));const oo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};var io=it?it.prototype:void 0,so=io?io.toString:void 0;const ao=function e(t){if("string"==typeof t)return t;if(tt(t))return oo(t,e)+"";if(Zr(t))return so?so.call(t):"";var n=t+"";return "0"==n&&1/t==-Infinity?"-0":n};const co=function(e){return null==e?"":ao(e)};const lo=function(e,t){return tt(e)?e:Vr(e,t)?[e]:ro(co(e))};const uo=function(e){if("string"==typeof e||Zr(e))return e;var t=e+"";return "0"==t&&1/e==-Infinity?"-0":t};const fo=function(e,t){for(var n=0,r=(t=lo(t,e)).length;null!=e&&n<r;)e=e[uo(t[n++])];return n&&n==r?e:void 0};const po=function(e,t,n){var r=null==e?void 0:fo(e,t);return void 0===r?n:r};const ho=function(e,t){return null!=e&&t in Object(e)};const mo=function(e,t,n){for(var r=-1,o=(t=lo(t,e)).length,i=false;++r<o;){var s=uo(t[r]);if(!(i=null!=e&&n(e,s)))break;e=e[s];}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Zt(o)&&Yt(s,o)&&(tt(e)||$t(e))};const go=function(e,t){return null!=e&&mo(e,t,ho)};const yo=function(e,t){return Vr(e)&&Wr(t)?Jr(uo(e),t):function(n){var r=po(n,e);return void 0===r&&r===t?go(n,e):Br(t,r,3)}};const vo=function(e){return e};const bo=function(e){return function(t){return null==t?void 0:t[e]}};const _o=function(e){return function(t){return fo(t,e)}};const wo=function(e){return Vr(e)?bo(uo(e)):_o(e)};const xo=function(e){return "function"==typeof e?e:null==e?vo:"object"==typeof e?tt(e)?yo(e[0],e[1]):Yr(e):wo(e)};const So=function(e,t){var n={};return t=xo(t),mn(e,(function(e,r,o){Mt(n,t(e,r,o),e);})),n};function Co(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}class Eo{constructor(e,t){Co(this,"ctx",void 0),Co(this,"serviceHooks",void 0),this.ctx=e,this.serviceHooks=t,e._execCallableAPI("register-search-service",e.baseInfo.id,t.name,t.options);Object.entries({query:{f:"onQuery",args:["graph","q",true],reply:true,transformOutput:e=>(tt(null==e?void 0:e.blocks)&&(e.blocks=e.blocks.map((e=>e&&So(e,((e,t)=>`block/${t}`))))),e)},rebuildBlocksIndice:{f:"onIndiceInit",args:["graph","blocks"]},transactBlocks:{f:"onBlocksChanged",args:["graph","data"]},truncateBlocks:{f:"onIndiceReset",args:["graph"]},removeDb:{f:"onGraph",args:["graph"]}}).forEach((([n,r])=>{const o=(e=>`service:search:${e}:${t.name}`)(n);e.caller.on(o,(async n=>{if(gt(null==t?void 0:t[r.f])){let i=null;try{i=await t[r.f].apply(t,(r.args||[]).map((e=>{if(n){if(!0===e)return n;if(n.hasOwnProperty(e)){const t=n[e];return delete n[e],t}}}))),r.transformOutput&&(i=r.transformOutput(i));}catch(e){console.error("[SearchService] ",e),i=e;}finally{r.reply&&e.caller.call(`${o}:reply`,i);}}}));}));}}function Ao(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n);}function Oo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function To(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else {if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n;}}(e,jo(e,t,"set"),n),n}function ko(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,jo(e,t,"get"))}function jo(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}const Io=Symbol.for("proxy-continue"),Lo=Ae()("LSPlugin:user"),Mo=new we("",{console:true});function No(e,t,n){var r;const{key:o,label:i,desc:s,palette:a,keybinding:c,extras:l}=t;if("function"!=typeof n)return this.logger.error(`${o||i}: command action should be function.`),false;const u=function(e){if("string"==typeof e)return e.trim().replace(/\s/g,"_").toLowerCase()}(o);if(!u)return this.logger.error(`${i}: command key is required.`),false;const f=`SimpleCommandHook${u}${++Uo}`;this.Editor["on"+f](n),null===(r=this.caller)||void 0===r||r.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:u,label:i,type:e,desc:s,keybinding:c,extras:l},["editor/hook",f]],a]});}function Ro(e){return !("string"!=typeof(t=e)||36!==t.length||!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(t))||(Mo.error(`#${e} is not a valid UUID string.`),false);var t;}let Fo=null,Po=new Map;const Do={async getInfo(e){return Fo||(Fo=await this._execCallableAPIAsync("get-app-info")),"string"==typeof e?Fo[e]:Fo},registerCommand:No,registerSearchService(e){if(Po.has(e.name))throw new Error(`SearchService: #${e.name} has registered!`);Po.set(e.name,new Eo(this,e));},registerCommandPalette(e,t){const{key:n,label:r,keybinding:o}=e;return No.call(this,"$palette$",{key:n,label:r,palette:true,keybinding:o},t)},registerCommandShortcut(e,t,n={}){"string"==typeof e&&(e={mode:"global",binding:e});const{binding:r}=e,o="$shortcut$",i=n.key||o+_e(null==r?void 0:r.toString());return No.call(this,o,{...n,key:i,palette:false,keybinding:e},t)},registerUIItem(e,t){var n;const r=this.baseInfo.id;null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-ui-item",args:[r,e,t]});},registerPageMenuItem(e,t){if("function"!=typeof t)return  false;const n=e+"_"+this.baseInfo.id,r=e;No.call(this,"page-menu-item",{key:n,label:r},t);},onBlockRendererSlotted(e,t){if(!Ro(e))return;const n=this.baseInfo.id,r=`hook:editor:${_e(`slot:${e}`)}`;return this.caller.on(r,t),this.App._installPluginHook(n,r),()=>{this.caller.off(r,t),this.App._uninstallPluginHook(n,r);}},invokeExternalPlugin(e,...t){var n;if(!(e=null===(n=e)||void 0===n?void 0:n.trim()))return;let[r,o]=e.split(".");if(!["models","commands"].includes(null==o?void 0:o.toLowerCase()))throw new Error("Type only support '.models' or '.commands' currently.");const i=e.replace(`${r}.${o}.`,"");if(!r||!o||!i)throw new Error(`Illegal type of #${e} to invoke external plugin.`);return this._execCallableAPIAsync("invoke_external_plugin_cmd",r,o.toLowerCase(),i,t)},setFullScreen(e){const t=(...e)=>this._callWin("setFullScreen",...e);"toggle"===e?this._callWin("isFullScreen").then((e=>{e?t():t(true);})):e?t(true):t();}};let Uo=0;const zo={newBlockUUID(){return this._execCallableAPIAsync("new_block_uuid")},isPageBlock:e=>e.uuid&&e.hasOwnProperty("name"),registerSlashCommand(e,t){var n;Lo("Register slash command #",this.baseInfo.id,e,t),"function"==typeof t&&(t=[["editor/clear-current-slash",false],["editor/restore-saved-cursor"],["editor/hook",t]]),t=t.map((e=>{const[t,...n]=e;if("editor/hook"===t){let r=n[0],o=()=>{var e;null===(e=this.caller)||void 0===e||e.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${t}${++Uo}`;e[1]=i,this.Editor["on"+i](o);}return e})),null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[e,t]]});},registerBlockContextMenuItem(e,t){if("function"!=typeof t)return  false;const n=e+"_"+this.baseInfo.id;No.call(this,"block-context-menu-item",{key:n,label:e},t);},registerHighlightContextMenuItem(e,t,n){if("function"!=typeof t)return  false;const r=e+"_"+this.baseInfo.id;No.call(this,"highlight-context-menu-item",{key:r,label:e,extras:n},t);},scrollToBlockInPage(e,t,n){const r="block-content-"+t;null!=n&&n.replaceState?this.App.replaceState("page",{name:e},{anchor:r}):this.App.pushState("page",{name:e},{anchor:r});}},$o={onBlockChanged(e,t){if(!Ro(e))return;const n=this.baseInfo.id,r=`hook:db:${_e(`block:${e}`)}`,o=({block:n,txData:r,txMeta:o})=>{n.uuid===e&&t(n,r,o);};return this.caller.on(r,o),this.App._installPluginHook(n,r),()=>{this.caller.off(r,o),this.App._uninstallPluginHook(n,r);}},datascriptQuery(e,...t){if(t.pop(),null!=t&&t.some((e=>"function"==typeof e))){return this.Experiments.ensureHostScope().logseq.api.datascript_query(e,...t)}return this._execCallableAPIAsync("datascript_query",e,...t)}},Ho={},Bo={},qo={},Wo={makeSandboxStorage(){return new Ze(this,{assets:true})}};var Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Zo=new WeakMap,Xo=new WeakMap;class Ko extends(ye()){constructor(e,t){super(),Oo(this,"_baseInfo",void 0),Oo(this,"_caller",void 0),Oo(this,"_version","0.2.11"),Oo(this,"_debugTag",""),Oo(this,"_settingsSchema",void 0),Oo(this,"_connected",false),Oo(this,"_ui",new Map),Oo(this,"_mFileStorage",void 0),Oo(this,"_mRequest",void 0),Oo(this,"_mExperiments",void 0),Oo(this,"_beforeunloadCallback",void 0),Ao(this,Go,{writable:true,value:void 0}),Ao(this,Jo,{writable:true,value:void 0}),Ao(this,Yo,{writable:true,value:void 0}),Ao(this,Zo,{writable:true,value:void 0}),Ao(this,Xo,{writable:true,value:void 0}),this._baseInfo=e,this._caller=t,t.on("sys:ui:visible",(e=>{null!=e&&e.toggle&&this.toggleMainUI();})),t.on("settings:changed",(e=>{const t=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,e);this.emit("settings:changed",{...n},t);})),t.on("beforeunload",(async e=>{const{actor:t,...n}=e,r=this._beforeunloadCallback;try{r&&await r(n),null==t||t.resolve(null);}catch(e){this.logger.error("[beforeunload] ",e),null==t||t.reject(e);}}));}async ready(e,t){var n,r;if(!this._connected)try{var o;"function"==typeof e&&(t=e,e={});let i=await this._caller.connectToParent(e);this._connected=!0,n=this._baseInfo,r=i,i=le()(n,r,{arrayMerge:(e,t)=>t}),this._baseInfo=i,null!==(o=i)&&void 0!==o&&o.id&&(this._debugTag=this._caller.debugTag=`#${i.id} [${i.name}]`,this.logger.setTag(this._debugTag)),this._settingsSchema&&(i.settings=function(e,t){const n=(t||[]).reduce(((e,t)=>("default"in t&&(e[t.key]=t.default),e)),{});return Object.assign(n,e)}(i.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema));try{await this._execCallableAPIAsync("setSDKMetadata",{version:this._version,runtime:"js"});}catch(e){console.warn(e);}t&&t.call(this,i);}catch(e){console.error(`${this._debugTag} [Ready Error]`,e);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(e){"function"==typeof e&&(this._beforeunloadCallback=e);}provideModel(e){return this.caller._extendUserModel(e),this}provideTheme(e){return this.caller.call("provider:theme",e),this}provideStyle(e){return this.caller.call("provider:style",e),this}provideUI(e){return this.caller.call("provider:ui",e),this}useSettingsSchema(e){return this.connected&&this.caller.call("settings:schema",{schema:e,isSync:true}),this._settingsSchema=e,this}updateSettings(e){this.caller.call("settings:update",e);}onSettingsChanged(e){const t="settings:changed";return this.on(t,e),()=>this.off(t,e)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:true});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:false});}setMainUIAttrs(e){this.caller.call("main-ui:attrs",e);}setMainUIInlineStyle(e){this.caller.call("main-ui:style",e);}hideMainUI(e){const t={key:0,visible:false,cursor:null==e?void 0:e.restoreEditingCursor};this.caller.call("main-ui:visible",t),this.emit("ui:visible:changed",t),this._ui.set(t.key,t);}showMainUI(e){const t={key:0,visible:true,autoFocus:null==e?void 0:e.autoFocus};this.caller.call("main-ui:visible",t),this.emit("ui:visible:changed",t),this._ui.set(t.key,t);}toggleMainUI(){const e=0,t=this._ui.get(e);t&&t.visible?this.hideMainUI():this.showMainUI();}get version(){return this._version}get isMainUIVisible(){const e=this._ui.get(0);return Boolean(e&&e.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get effect(){return (e=this)&&((null===(t=e.baseInfo)||void 0===t?void 0:t.effect)||!(null!==(n=e.baseInfo)&&void 0!==n&&n.iir));var e,t,n;}get logger(){return Mo}get settings(){var e;return null===(e=this.baseInfo)||void 0===e?void 0:e.settings}get caller(){return this._caller}resolveResourceFullUrl(e){if(this.ensureConnected(),e)return e=e.replace(/^[.\\/]+/,""),xe(this._baseInfo.lsr,e)}_makeUserProxy(e,t){const n=this,r=this.caller;return new Proxy(e,{get(e,o,i){const s=e[o];return function(...e){if(s){0!==(null==e?void 0:e.length)&&e.concat(t);const r=s.apply(n,e);if(r!==Io)return r}if(t){const i=o.toString().match(/^(once|off|on)/i);if(null!=i){const o=i[0].toLowerCase(),s=i.input,a="off"===o,c=n.baseInfo.id;let l=s.slice(o.length),u=e[0],f=e[1];"string"==typeof u&&"function"==typeof f&&(u=u.replace(/^logseq./,":"),l=`${l}${u}`,u=f,f=e[2]),l=`hook:${t}:${_e(l)}`,r[o](l,u);const p=()=>{r.off(l,u),r.listenerCount(l)||n.App._uninstallPluginHook(c,l);};return a?void p():(n.App._installPluginHook(c,l,f),p)}}let i=o;return ["git","ui","assets","utils"].includes(t)&&(i=t+"_"+i),r.callAsync("api:call",{tag:t,method:i,args:e})}}})}_execCallableAPIAsync(e,...t){return this._caller.callAsync("api:call",{method:e,args:t})}_execCallableAPI(e,...t){this._caller.call("api:call",{method:e,args:t});}_callWin(...e){return this._execCallableAPIAsync("_callMainWin",...e)}get App(){return ko(this,Go)?ko(this,Go):To(this,Go,this._makeUserProxy(Do,"app"))}get Editor(){return ko(this,Jo)?ko(this,Jo):To(this,Jo,this._makeUserProxy(zo,"editor"))}get DB(){return ko(this,Yo)?ko(this,Yo):To(this,Yo,this._makeUserProxy($o,"db"))}get UI(){return ko(this,Zo)?ko(this,Zo):To(this,Zo,this._makeUserProxy(Bo,"ui"))}get Utils(){return ko(this,Xo)?ko(this,Xo):To(this,Xo,this._makeUserProxy(qo,"utils"))}get Git(){return this._makeUserProxy(Ho,"git")}get Assets(){return this._makeUserProxy(Wo,"assets")}get FileStorage(){let e=this._mFileStorage;return e||(e=this._mFileStorage=new Ze(this)),e}get Request(){let e=this._mRequest;return e||(e=this._mRequest=new et(this)),e}get Experiments(){let e=this._mExperiments;return e||(e=this._mExperiments=new Xe(this)),e}}function Vo(e,t){return new Ko(e,t)}if(null==window.__LSP__HOST__){const e=new Je(null);window.logseq=Vo({},e);}})(),r})())); 
} (lsplugin_user, lsplugin_user.exports));

lsplugin_user.exports;

/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$f = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$f.call(val, key);
const isArray$d = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction$4 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$5 = (val) => typeof val === "symbol";
const isObject$b = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$b(val) || isFunction$4(val)) && isFunction$4(val.then) && isFunction$4(val.catch);
};
const objectToString$3 = Object.prototype.toString;
const toTypeString = (value) => objectToString$3.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-\w/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString$1(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray$d(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value) || isObject$b(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$1(value)) {
    res = value;
  } else if (isArray$d(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$b(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString$1(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$d(val) || isObject$b(val) && (val.toString === objectToString$3 || !isFunction$4(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol$5(val)) {
    return stringifySymbol(val);
  } else if (isObject$b(val) && !isArray$d(val) && !isPlainObject$2(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol$5(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};

/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = /* @__PURE__ */ Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  ""
);
const ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray$d(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol$5(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (isReadonly(target)) {
    return isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray$d(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply$3(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply$3(
      this,
      "filter",
      fn,
      thisArg,
      (v) => v.map((item) => toWrapped(this, item)),
      arguments
    );
  },
  find(fn, thisArg) {
    return apply$3(
      this,
      "find",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findIndex(fn, thisArg) {
    return apply$3(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply$3(
      this,
      "findLast",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findLastIndex(fn, thisArg) {
    return apply$3(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply$3(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply$3(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply$3(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self, method, wrapValue) {
  const arr = shallowReadArray(self);
  const iter = arr[method]();
  if (arr !== self && !isShallow(self)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (!result.done) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto$1 = Array.prototype;
function apply$3(self, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self);
  const needsWrap = arr !== self && !isShallow(self);
  const methodFn = arr[method];
  if (methodFn !== arrayProto$1[method]) {
    const result2 = methodFn.apply(self, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toWrapped(self, item), index, self);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
  const arr = shallowReadArray(self);
  let wrappedFn = fn;
  if (arr !== self) {
    if (!isShallow(self)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toWrapped(self, item), index, self);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
  const arr = toRaw(self);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && isProxy(args[0])) {
    args[0] = toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self, method, args = []) {
  pauseTracking();
  startBatch();
  const res = toRaw(self)[method].apply(self, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$5)
);
function hasOwnProperty$e(key) {
  if (!isSymbol$5(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$d(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty$e;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      isRef(target) ? target : receiver
    );
    if (isSymbol$5(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject$b(value) ? readonly(value) : value;
    }
    if (isObject$b(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray$d(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      isRef(target) ? target : receiver
    );
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol$5(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$d(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !isShallow(value) && !isReadonly(value)) {
          value = toRaw(value);
        }
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = toRaw(key);
          hadKey = has.call(target, key);
        }
        get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0);
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$b(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$b(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$b(value) ? readonly(value) : value;
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
    newValue = useDirectValue ? newValue : toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray$d(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
    this._raw = toRaw(_object);
    let shallow = true;
    let obj = _object;
    if (!isArray$d(_object) || !isIntegerKey(String(_key))) {
      do {
        shallow = !isProxy(obj) || isShallow(obj);
      } while (shallow && (obj = obj["__v_raw"]));
    }
    this._shallow = shallow;
  }
  get value() {
    let val = this._object[this._key];
    if (this._shallow) {
      val = unref(val);
    }
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    if (this._shallow && isRef(this._raw[this._key])) {
      const nestedRef = this._object[this._key];
      if (isRef(nestedRef)) {
        nestedRef.value = newVal;
        return;
      }
    }
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(this._raw, this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction$4(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$b(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  return new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction$4(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$d(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction$4(s)) {
        return call ? call(s, 2) : s();
      } else ;
    });
  } else if (isFunction$4(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject$b(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Map();
  if ((seen.get(value) || 0) >= depth) {
    return value;
  }
  seen.set(value, depth);
  depth--;
  if (isRef(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray$d(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject$2(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}

/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack = [];
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$1(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$4(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$4(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray$d(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$d(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction$4(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function provide(key, value) {
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$4(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
const ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$4(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
const TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
const enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c of children) {
      if (c.type !== Comment) {
        child = c;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$d(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction$4(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$4(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
const pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$d(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray$d(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
    return hasOwn(rawSetupState, key);
  };
  if (oldRef != null && oldRef !== ref3) {
    invalidatePendingSetRef(oldRawRef);
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      {
        oldRef.value = null;
      }
      const oldRawRefAtom = oldRawRef;
      if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
    }
  }
  if (isFunction$4(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString$1(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : ref3.value ;
          if (isUnmount) {
            isArray$d(existing) && remove(existing, refValue);
          } else {
            if (!isArray$d(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                const newVal = [refValue];
                {
                  ref3.value = newVal;
                }
                if (rawRef.k) refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          {
            ref3.value = value;
          }
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        const job = () => {
          doSet();
          pendingSetRefMap.delete(rawRef);
        };
        job.id = -1;
        pendingSetRefMap.set(rawRef, job);
        queuePostRenderEffect(job, parentSuspense);
      } else {
        invalidatePendingSetRef(rawRef);
        doSet();
      }
    }
  }
}
function invalidatePendingSetRef(rawRef) {
  const pendingSetRef = pendingSetRefMap.get(rawRef);
  if (pendingSetRef) {
    pendingSetRef.flags |= 8;
    pendingSetRefMap.delete(rawRef);
  }
}
getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString$1(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache;
  const sourceIsArray = isArray$d(source);
  if (sourceIsArray || isString$1(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
        i,
        void 0,
        cached
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached);
    }
  } else if (isObject$b(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached)
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    const hasProps = Object.keys(props).length > 0;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      hasProps ? -2 : 64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol$5(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key in obj) {
    ret[/[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i) ,
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i) 
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (hasOwn(props, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, props, type }
  }, key) {
    let cssModules;
    return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function normalizePropsOrEmits(props) {
  return isArray$d(props) ? props.reduce(
    (normalized, p) => (normalized[p] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$4(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$b(data)) ; else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction$4(opt) ? opt.bind(publicThis, publicThis) : isFunction$4(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set = !isFunction$4(opt) && isFunction$4(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$4(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$d(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$d(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$d(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$b(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$d(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$4(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction$4(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject$b(raw)) {
    if (isArray$d(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction$4(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$4(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$b(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") ; else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction$4(to) ? to.call(this, this) : to,
      isFunction$4(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$d(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$d(to) && isArray$d(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!isFunction$4(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$b(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) ; else if (plugin && isFunction$4(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction$4(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
const mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$b(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray$d(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$b(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (false) ;
      result = normalizeVNode(
        render2.length > 1 ? render2(
          false ? shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render2(
          false ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root, vnode.transition);
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$4(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$b(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$d(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$d(opt) || isFunction$4(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray$d(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction$4(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction$4(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$b(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
const normalizeSlotValue = (value) => isArray$d(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction$4(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref3 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        {
          hostSetText(el, n2.children);
        }
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      const customElement = !!(n1.el && n1.el._isVueCE) ? n1.el : null;
      try {
        if (customElement) {
          customElement._beginPatch();
        }
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } finally {
        if (customElement) {
          customElement._endPatch();
        }
      }
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        {
          if (root.ce && // @ts-expect-error _def is private
          root.ce._def.shadowRoot !== false) {
            root.ce._injectChildStyle(type);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode)
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          if (el._isLeaving) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      pauseTracking();
      setRef(ref3, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, job, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    let instance;
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
        instance = container._vnode.component;
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs(instance);
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  return {
    render,
    hydrate,
    createApp: createAppAPI(render)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$d(ch1) && isArray$d(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        if (c2.patchFlag !== -1) {
          c2.el = c1.el;
        } else {
          c2.__elIndex = i + // take fragment start anchor into account
          (n1.type === Fragment ? 1 : 0);
        }
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
  if (anchorVnode.placeholder) {
    return anchorVnode.placeholder;
  }
  const instance = anchorVnode.component;
  if (instance) {
    return resolveAsyncComponentPlaceholder(instance.subTree);
  }
  return null;
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$d(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
const Text = /* @__PURE__ */ Symbol.for("v-txt");
const Comment = /* @__PURE__ */ Symbol.for("v-cmt");
const Static = /* @__PURE__ */ Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString$1(ref3) || isRef(ref3) || isFunction$4(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$1(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$b(style)) {
      if (isProxy(style) && !isArray$d(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$b(type) ? 4 : isFunction$4(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray$d(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$d(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$d(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$4(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$d(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult);
    }
  } else {
    finishComponentSetup(instance);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$4(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$b(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance);
}
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    instance.render = Component.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])\w/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction$4(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(
      instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$4(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h(type, propsOrChildren, children) {
  try {
    setBlockTracking(-1);
    const l = arguments.length;
    if (l === 2) {
      if (isObject$b(propsOrChildren) && !isArray$d(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  } finally {
    setBlockTracking(1);
  }
}
const version = "3.5.26";

/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = /* @__PURE__ */ Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray$d(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$d(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow(el);
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow(el);
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$b(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
  const targetDocument = el ? el.ownerDocument : document;
  return targetDocument.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
const vShowHidden = /* @__PURE__ */ Symbol("_vsh");
const CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
const displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString$1(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$d(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean ? "" : isSymbol$5(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$d(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString$1(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction$4(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "sandbox" && el.tagName === "IFRAME") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString$1(value)) {
    return false;
  }
  return key in el;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k) => k === eventKey || keyNames[k] === eventKey
    )) {
      return fn(event);
    }
  });
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!isFunction$4(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var symbolTag$2 = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal$2 = typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$9 = freeGlobal$2 || freeSelf$1 || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto$h = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$h.toString;

/** Built-in value references. */
var Symbol$6 = root$9.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$6 ? Symbol$6.prototype : undefined,
    symbolToString$1 = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$2(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol$4(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$c(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$4(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$c(value) && objectToString$2.call(value) == symbolTag$2);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$2(value) {
  return value == null ? '' : baseToString$2(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString$2(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString$2(string);
  pattern = pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

var lodash_kebabcase = kebabCase;

const kebabCase$1 = /*@__PURE__*/getDefaultExportFromCjs$1(lodash_kebabcase);

var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
const en = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};

var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q: Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

const U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};

var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = en;

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs;
}; // eslint-disable-line no-use-before-define


var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = U; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate$2 = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate$2(cfg);
    this.$x = cfg.x || {};
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;

    if (unit === M || unit === Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === M) {
      return this.set(M, this.$M + number);
    }

    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }

    if (unit === D) {
      return instanceFactorySet(1);
    }

    if (unit === W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below

    };
    return str.replace(REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', MS], ['$s', S], ['$m', MIN], ['$H', H], ['$W', D], ['$M', M], ['$y', Y], ['$D', DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};

const _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

function createSetterContainerStyle (mode) {
  let containerStyle = null;

  return (k, v, ...args) => {
    if (!containerStyle) {
      containerStyle = document.querySelector('.calendar-inner').style;
    }

    if (['backgroundColor'].includes(k)) {
      containerStyle?.setProperty(`--vc-custom-bg`, v);
    } else {
      containerStyle?.setProperty(kebabCase$1(k), v, ...args);
    }
  }
}

const setLightContainerStyle = createSetterContainerStyle();
const setDarkContainerStyle = createSetterContainerStyle();

async function safeLogseqAppCall (name, ...args) {
  try {
    return await logseq.App[name]?.apply(null, args)
  } catch (e) {
    console.warn(e);
    return false
  }
}

const _sfc_main$l = {
  name: 'App',

  data () {
    const d = new Date();
    const {
      props, firstDayOfWeek,
      backgroundColorOfContainerLight, backgroundColorOfContainerDark,
      keepOpenOnSelect,
      showWeekNumbers,
      showIsoWeeknumbers,
    } = logseq.settings;

    return {
      ready: false,
      bgColor: {
        dark: backgroundColorOfContainerDark,
        light: backgroundColorOfContainerLight,
      },
      preferredDateFormat: null,
      journals: null,
      opts: {
        color: 'orange',
        [`show-weeknumbers`]: showWeekNumbers,
        [`show-iso-weeknumbers`]: showIsoWeeknumbers,
        attributes: [
          {
            dot: true,
            dates: [],
          },
          {
            key: 'today',
            highlight: true,
            dates: new Date(),
          },
        ],
        // [`first-day-of-week`]: firstDayOfWeek,
        ...(props || {}),
      },
      mDate: {
        month: d.getMonth() + 1,
        year: d.getFullYear(),
      },
      keepOpenOnSelect,
    }
  },

  mounted () {
    logseq.App.onThemeModeChanged(({ mode }) => {
      this.opts[`is-dark`] = mode === 'dark';
    });

    logseq.App.onCurrentGraphChanged(() => {
      this.journals = null;
    });

    logseq.App.onTodayJournalCreated(({ title }) => {
      this.opts.attributes[1] = {
        key: 'today',
        highlight: true,
        dates: new Date(),
      };
    });

    this.$watch('mDate', () => {
      this._updateCalendarInMonth();
    }, {
      immediate: true,
    });

    this.$watch('currentBgColor', (color) => {
      setLightContainerStyle('backgroundColor', `${color}`, 'important');
    }, {
      immediate: true,
    });

    const refreshConfigs = this._refreshUserConfigs.bind(this);

    // TODO: expose
    setDarkContainerStyle('borderColor', 'rgba(81,81,81,0.21)');

    logseq.on('ui:visible:changed', ({ visible }) => {
      if (visible) {
        this.ready = true;
        refreshConfigs().then(() => {
          this._updateCalendarInMonth();
        });
      }
    });

    logseq.on('settings:changed', (settings) => {
      const {
        props, firstDayOfWeek,
        backgroundColorOfContainerDark, backgroundColorOfContainerLight,
        keepOpenOnSelect,
        showWeekNumbers,
        showIsoWeeknumbers,
      } = settings || {};

      this.opts[`first-day-of-week`] = firstDayOfWeek;
      this.opts[`show-weeknumbers`] = showWeekNumbers;
      this.opts[`show-iso-weeknumbers`] = showIsoWeeknumbers;
      this.bgColor.dark = backgroundColorOfContainerDark;
      this.bgColor.light = backgroundColorOfContainerLight;
      this.keepOpenOnSelect = keepOpenOnSelect;
    });

    setTimeout(refreshConfigs, 1000);

    // ESC
    document.addEventListener('keydown', this._closeHandle);
  },

  methods: {
    _closeHandle (e) {
      if (e.which === 27) {
        logseq.hideMainUI();
      }
    },

    async _refreshUserConfigs () {
      const configs = await logseq.App.getUserConfigs();

      if (configs.preferredDateFormat) {
        this.preferredDateFormat = configs.preferredDateFormat;
      }
      if (configs.preferredLanguage) {
        this.opts[`locale`] = configs.preferredLanguage;
      }
      if (configs.preferredThemeMode === 'dark') {
        this.opts[`is-dark`] = true;
      }
    },

    async _updateCalendarInMonth () {
      const journals = await this._getCurrentRepoRangeJournals();

      this.journals = journals.reduce((ac, it) => {
        const k = it[`journal-day`].toString();
        ac[k] = it;
        return ac
      }, {});

      // console.debug('[query journals]', journals)

      const dates = journals.map(it => {
        const d = dayjs(it[`journal-day`].toString());
        if (d.isValid() && !d.isToday()) {
          return d.toDate()
        }
      });

      this.opts.attributes[0] = {
        dot: true,
        dates,
      };

      this.opts.attributes = [...this.opts.attributes];
    },

    _onToPage (e) {
      if (!e?.[0]?.year) {
        throw new Error(`Invalid month change event: ${e}`)
      }

      const { month, year } = e[0];
      this.mDate = { month, year };
    },

    async _getCurrentRepoRangeJournals () {
      const { month, year } = this.mDate;
      const my = year + (month < 10 ? '0' : '') + month;
      const graph = await logseq.App.getCurrentGraph();
      graph.name?.startsWith('logseq_db');

      let ret;

      try {
        ret = await logseq.DB.datascriptQuery(`
          [:find (pull ?p [*])
           :where
           [?p :block/journal-day ?d]
           [(>= ?d ${my}01)] [(<= ?d ${my}31)]]
        `);

        // console.debug('[query journals]', ret)
      } catch (e) {
        console.error(e);
      }

      return (ret || []).flat()
    },

    _onClickOutside ({ target }) {
      const inner = target.closest('.calendar-inner');

      !inner && logseq.hideMainUI({
        restoreEditingCursor: true,
      });
    },

    async _onDaySelect (payload, event) {
      const { id } = payload;

      this.date = id;

      let t = id;
      let k = id.replaceAll('-', '');

      if (this.journals?.hasOwnProperty(k)) {
        const target = this.journals[k];
        t = target?.[`original-name`] || target?.[`name`] || target?.[`title`];
      }

      if (((t === id) || !t) && this.preferredDateFormat) {
        const format = this.preferredDateFormat.replace('yyyy', 'YYYY').
          replace('dd', 'DD').
          replace('do', 'Do').
          replace('EEEE', 'dddd').
          replace('EEE', 'ddd').
          replace('EE', 'dd').
          replace('E', 'ddd');

        t = dayjs(id).format(format);
      }

      if (!this.keepOpenOnSelect) {
        logseq.hideMainUI();
      }

      const { supportDb } = await logseq.App.getInfo();
      const isDbGraph = await safeLogseqAppCall('checkCurrentIsDbGraph');
      let page = await logseq.Editor.getPage(t);

      if (isDbGraph || supportDb || event.shiftKey) {
        if (page == null) {
          // Journal entry does not exist. Create it.
          page = await logseq.Editor.createPage(t, {}, {
            journal: true,
            redirect: false,
          });
        }
      }

      if (event.shiftKey) {
        logseq.Editor.openInRightSidebar(page?.uuid);
        logseq.hideMainUI();
      } else {
        if (isDbGraph || supportDb) {
          t = page?.uuid;
        }

        logseq.App.pushState('page', { name: t });
      }
    },
  },

  computed: {
    currentBgColor () {
      if (this.opts[`is-dark`]) {
        return this.bgColor.dark
      } else {
        return this.bgColor.light
      }
    },
  },

  beforeUnmount () {
    logseq.off('ui:visible:changed');
    logseq.off('settings:changed');
    document.removeEventListener('keydown', this._closeHandle);
  },
};

const _hoisted_1$d = { class: "calendar-inner" };

function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_calendar = resolveComponent("v-calendar");

  return (openBlock(), createElementBlock("div", {
    class: "calendar-wrap",
    onClick: _cache[0] || (_cache[0] = (...args) => ($options._onClickOutside && $options._onClickOutside(...args)))
  }, [
    createBaseVNode("div", _hoisted_1$d, [
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          ($data.ready)
            ? (openBlock(), createBlock(_component_v_calendar, mergeProps({
                key: 0,
                ref: "calendar",
                onDayclick: $options._onDaySelect,
                onDidMove: $options._onToPage
              }, $data.opts), null, 16, ["onDayclick", "onDidMove"]))
            : createCommentVNode("", true)
        ]),
        _: 1
      })
    ])
  ]))
}
const App = /*#__PURE__*/_export_sfc$1(_sfc_main$l, [['render',_sfc_render$8]]);

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main$1 = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main$1, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference,
        popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference2 = _state$elements.reference, popper2 = _state$elements.popper;
        if (!areValidElements(reference2, popper2)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference2, getOffsetParent(popper2), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper2)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn === "function") {
            state = fn({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
        if (typeof effect === "function") {
          var cleanupFn = effect({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var objectProto$g = Object.prototype;
var hasOwnProperty$d = objectProto$g.hasOwnProperty;
function baseHas$1(object, key) {
  return object != null && hasOwnProperty$d.call(object, key);
}
var _baseHas = baseHas$1;
var isArray$c = Array.isArray;
var isArray_1 = isArray$c;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$a(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$a;
function isObjectLike$b(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$b;
var baseGetTag$9 = _baseGetTag, isObjectLike$a = isObjectLike_1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$3(value) {
  return typeof value == "symbol" || isObjectLike$a(value) && baseGetTag$9(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol$3;
var isArray$b = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object) {
  if (isArray$b(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$3;
function isObject$a(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$a;
var baseGetTag$8 = _baseGetTag, isObject$9 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$9(value)) {
    return false;
  }
  var tag = baseGetTag$8(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$8 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$8(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$a.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$9.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$6(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$6;
var eq$5 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$5(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$3 = getNative$5(root$5, "Map");
var _Map = Map$3;
var Hash = _Hash, ListCache$3 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2)();
  return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$2 = _Symbol, arrayMap = _arrayMap, isArray$a = isArray_1, isSymbol$1 = isSymbol_1;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$a(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$9 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object) {
  if (isArray$9(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var baseGetTag$7 = _baseGetTag, isObjectLike$9 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$9(value) && baseGetTag$7(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$8 = isObjectLike_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$8(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var isSymbol = isSymbol_1;
function toKey$4(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var _toKey = toKey$4;
var castPath$1 = _castPath, isArguments$2 = isArguments_1, isArray$8 = isArray_1, isIndex$2 = _isIndex, isLength$2 = isLength_1, toKey$3 = _toKey;
function hasPath$2(object, path, hasFunc) {
  path = castPath$1(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$2(length) && isIndex$2(key, length) && (isArray$8(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;
var baseHas = _baseHas, hasPath$1 = _hasPath;
function has$1(object, path) {
  return object != null && hasPath$1(object, path, baseHas);
}
var has_1 = has$1;
var baseGetTag$6 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
var dateTag$2 = "[object Date]";
function baseIsDate$1(value) {
  return isObjectLike$7(value) && baseGetTag$6(value) == dateTag$2;
}
var _baseIsDate = baseIsDate$1;
function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$2;
var _nodeUtilExports = {};
var _nodeUtil = {
  get exports() {
    return _nodeUtilExports;
  },
  set exports(v) {
    _nodeUtilExports = v;
  }
};
(function(module, exports$1) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports$1 && !exports$1.nodeType && exports$1;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtilExports);
var baseIsDate = _baseIsDate, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsDate = nodeUtil$1 && nodeUtil$1.isDate;
var isDate$1 = nodeIsDate ? baseUnary$1(nodeIsDate) : baseIsDate;
var isDate_1 = isDate$1;
var baseGetTag$5 = _baseGetTag, isArray$7 = isArray_1, isObjectLike$6 = isObjectLike_1;
var stringTag$2 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$7(value) && isObjectLike$6(value) && baseGetTag$5(value) == stringTag$2;
}
var isString_1 = isString;
function arraySome$2(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache$1) {
    var pairs = data2.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache$1(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$3(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack$3.prototype.clear = stackClear;
Stack$3.prototype["delete"] = stackDelete;
Stack$3.prototype.get = stackGet;
Stack$3.prototype.has = stackHas;
Stack$3.prototype.set = stackSet;
var _Stack = Stack$3;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome$1 = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$1(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array$1 = _Uint8Array, eq$4 = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$2 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$2:
    case dateTag$1:
    case numberTag$2:
      return eq$4(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var arrayPush = _arrayPush, isArray$6 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$6(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$9 = Object.prototype;
var propertyIsEnumerable = objectProto$9.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var isBufferExports = {};
var isBuffer$3 = {
  get exports() {
    return isBufferExports;
  },
  set exports(v) {
    isBufferExports = v;
  }
};
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports$1) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports$1 && !exports$1.nodeType && exports$1;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBufferExports);
var baseGetTag$4 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$5 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$3 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$4(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$5 = isArray_1, isBuffer$2 = isBufferExports, isIndex$1 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$5(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$7 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$7;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$6 = Object.prototype;
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$5(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$5;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$3;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$2 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$2, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$5.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$4 = _getNative, root$3 = _root;
var DataView$1 = getNative$4(root$3, "DataView");
var _DataView = DataView$1;
var getNative$3 = _getNative, root$2 = _root;
var Promise$2 = getNative$3(root$2, "Promise");
var _Promise = Promise$2;
var getNative$2 = _getNative, root$1 = _root;
var Set$1 = getNative$2(root$1, "Set");
var _Set = Set$1;
var getNative$1 = _getNative, root = _root;
var WeakMap$1 = getNative$1(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$4 = _Map, Promise$1 = _Promise, Set$2 = _Set, WeakMap$2 = _WeakMap, baseGetTag$3 = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$4), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag$1 = baseGetTag$3;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$4 && getTag$1(new Map$4()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$2 && getTag$1(new Set$2()) != setTag || WeakMap$2 && getTag$1(new WeakMap$2()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag$3(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$2 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$4 = isArray_1, isBuffer$1 = isBufferExports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag$1 = "[object Object]";
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$4(object), othIsArr = isArray$4(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag$1 : objTag;
  othTag = othTag == argsTag ? objectTag$1 : othTag;
  var objIsObj = objTag == objectTag$1, othIsObj = othTag == objectTag$1, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$2());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$4.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$2());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$2());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$4 = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$4(value) && !isObjectLike$4(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack$1 = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data2 = matchData[index2];
    if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data2 = matchData[index2];
    var key = data2[0], objValue = object[key], srcValue = data2[1];
    if (noCustomizer && data2[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$1();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$7 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$7(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$1 = keys_1;
function getMatchData$1(object) {
  var result = keys$1(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var castPath = _castPath, toKey$2 = _toKey;
function baseGet$2(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$2(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$1(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
function baseProperty$1(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$2 = identity_1, isArray$3 = isArray_1, property = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$2;
  }
  if (typeof value == "object") {
    return isArray$3(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$2 = createBaseFor();
var _baseFor = baseFor$2;
var baseFor$1 = _baseFor, keys = keys_1;
function baseForOwn$2(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
var _baseForOwn = baseForOwn$2;
var isArrayLike$3 = isArrayLike_1;
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$1;
var baseForOwn$1 = _baseForOwn, createBaseEach = _createBaseEach;
var baseEach$1 = createBaseEach(baseForOwn$1);
var _baseEach = baseEach$1;
var baseEach = _baseEach;
function baseSome$1(collection, predicate) {
  var result;
  baseEach(collection, function(value, index2, collection2) {
    result = predicate(value, index2, collection2);
    return !result;
  });
  return !!result;
}
var _baseSome = baseSome$1;
var eq$3 = eq_1, isArrayLike$2 = isArrayLike_1, isIndex = _isIndex, isObject$6 = isObject_1;
function isIterateeCall$3(value, index2, object) {
  if (!isObject$6(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$2(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq$3(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$3;
var arraySome = _arraySome, baseIteratee$1 = _baseIteratee, baseSome = _baseSome, isArray$2 = isArray_1, isIterateeCall$2 = _isIterateeCall;
function some(collection, predicate, guard) {
  var func = isArray$2(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall$2(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee$1(predicate));
}
var some_1 = some;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var boolTag = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike$3(value) && baseGetTag$2(value) == boolTag;
}
var isBoolean_1 = isBoolean;
var baseGetTag$1 = _baseGetTag, isObjectLike$2 = isObjectLike_1;
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike$2(value) && baseGetTag$1(value) == numberTag;
}
var isNumber_1 = isNumber;
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$4(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$4;
var baseAssignValue$3 = _baseAssignValue, eq$2 = eq_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq$2(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$3(object, key, value);
  }
}
var _assignValue = assignValue$1;
var baseAssignValue$2 = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object, function(value, key, object2) {
    baseAssignValue$2(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_1 = mapValues;
function apply$2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$2;
var apply$1 = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply$1(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$3(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$3;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$5 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$5(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var baseRest$2 = _baseRest, eq$1 = eq_1, isIterateeCall$1 = _isIterateeCall, keysIn$2 = keysIn_1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var defaults = baseRest$2(function(object, sources) {
  object = Object(object);
  var index2 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index2 < length) {
    var source = sources[index2];
    var props = keysIn$2(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq$1(value, objectProto$1[key]) && !hasOwnProperty$1.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_1 = defaults;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
var _cloneBufferExports = {};
var _cloneBuffer = {
  get exports() {
    return _cloneBufferExports;
  },
  set exports(v) {
    _cloneBufferExports = v;
  }
};
(function(module, exports$1) {
  var root2 = _root;
  var freeExports = exports$1 && !exports$1.nodeType && exports$1;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBufferExports);
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$1;
var cloneArrayBuffer = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
function copyArray$1(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$1;
var isObject$4 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$4(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var isArrayLike = isArrayLike_1, isObjectLike$1 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$1(value) && isArrayLike(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var baseGetTag = _baseGetTag, getPrototype = _getPrototype, isObjectLike = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var assignValue = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$1;
var copyObject = _copyObject, keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBufferExports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments = isArguments_1, isArray$1 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer = isBufferExports, isFunction = isFunction_1, isObject$3 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$3(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$2 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$2(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$2;
var baseMerge$1 = _baseMerge, isObject$1 = isObject_1;
function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
  if (isObject$1(objValue) && isObject$1(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge$1(objValue, srcValue, void 0, customDefaultsMerge$1, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var _customDefaultsMerge = customDefaultsMerge$1;
var baseRest$1 = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest$1(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
var mergeWith_1 = mergeWith$1;
var apply = _apply, baseRest = _baseRest, customDefaultsMerge = _customDefaultsMerge, mergeWith = mergeWith_1;
var defaultsDeep = baseRest(function(args) {
  args.push(void 0, customDefaultsMerge);
  return apply(mergeWith, void 0, args);
});
var defaultsDeep_1 = defaultsDeep;
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_1 = head;
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last;
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);
const isDate = (value) => isDate_1(value) && !isNaN(value.getTime());
const isObject = (value) => getType(value) === "Object";
const has = has_1;
const hasAny = (obj, props) => some_1(props, (p) => has_1(obj, p));
const pad = (val, len, char = "0") => {
  val = val !== null && val !== void 0 ? String(val) : "";
  len = len || 2;
  while (val.length < len) {
    val = `${char}${val}`;
  }
  return val;
};
const isArray = (val) => Array.isArray(val);
const arrayHasItems = (array) => isArray(array) && array.length > 0;
const resolveEl = (target) => {
  if (target == null)
    return null;
  if (document && isString_1(target))
    return document.querySelector(target);
  return target.$el ?? target;
};
const off = (element, event, handler, opts = void 0) => {
  element.removeEventListener(event, handler, opts);
};
const on = (element, event, handler, opts = void 0) => {
  element.addEventListener(event, handler, opts);
  return () => off(element, event, handler, opts);
};
const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
const onSpaceOrEnter = (event, handler) => {
  if (event.key === " " || event.key === "Enter") {
    handler(event);
    event.preventDefault();
  }
};
const omit = (obj, ...keys2) => {
  const ret = {};
  let key;
  for (key in obj) {
    if (!keys2.includes(key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};
const pick = (obj, keys2) => {
  const ret = {};
  keys2.forEach((key) => {
    if (key in obj)
      ret[key] = obj[key];
  });
  return ret;
};
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
var toIntegerExports = {};
var toInteger$2 = {
  get exports() {
    return toIntegerExports;
  },
  set exports(v) {
    toIntegerExports = v;
  }
};
(function(module, exports$1) {
  Object.defineProperty(exports$1, "__esModule", {
    value: true
  });
  exports$1.default = toInteger2;
  function toInteger2(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  module.exports = exports$1.default;
})(toInteger$2, toIntegerExports);
const toInteger$1 = /* @__PURE__ */ getDefaultExportFromCjs(toIntegerExports);
var getTimezoneOffsetInMillisecondsExports = {};
var getTimezoneOffsetInMilliseconds$2 = {
  get exports() {
    return getTimezoneOffsetInMillisecondsExports;
  },
  set exports(v) {
    getTimezoneOffsetInMillisecondsExports = v;
  }
};
(function(module, exports$1) {
  Object.defineProperty(exports$1, "__esModule", {
    value: true
  });
  exports$1.default = getTimezoneOffsetInMilliseconds2;
  function getTimezoneOffsetInMilliseconds2(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  module.exports = exports$1.default;
})(getTimezoneOffsetInMilliseconds$2, getTimezoneOffsetInMillisecondsExports);
const getTimezoneOffsetInMilliseconds$1 = /* @__PURE__ */ getDefaultExportFromCjs(getTimezoneOffsetInMillisecondsExports);
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];
      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  var utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$1 = 6e4;
var patterns$1 = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token2;
  var absoluteOffset;
  if (!timezoneString) {
    return 0;
  }
  token2 = patterns$1.timezoneZ.exec(timezoneString);
  if (token2) {
    return 0;
  }
  var hours2;
  token2 = patterns$1.timezoneHH.exec(timezoneString);
  if (token2) {
    hours2 = parseInt(token2[1], 10);
    if (!validateTimezone(hours2)) {
      return NaN;
    }
    return -(hours2 * MILLISECONDS_IN_HOUR$1);
  }
  token2 = patterns$1.timezoneHHMM.exec(timezoneString);
  if (token2) {
    hours2 = parseInt(token2[1], 10);
    var minutes = parseInt(token2[2], 10);
    if (!validateTimezone(hours2, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours2) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1;
    return hours2 > 0 ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    var utcDate = toUtcDate(date);
    var offset = calcOffset(utcDate, timezoneString);
    var fixedOffset = fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
function calcOffset(date, timezoneString) {
  var tokens = tzTokenizeDate(date, timezoneString);
  var asUTC = newDateUTC(
    tokens[0],
    tokens[1] - 1,
    tokens[2],
    tokens[3] % 24,
    tokens[4],
    tokens[5],
    0
  ).getTime();
  var asTS = date.getTime();
  var over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime();
  var utcGuess = localTS - offset;
  var o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  var o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours2, minutes) {
  return -23 <= hours2 && hours2 <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const tzPattern$1 = tzPattern;
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern$1
};
function toDate$1(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger$1(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate$1(restDateString, year);
  if (isNaN(date)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds$1(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds$1(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var parts = patterns.dateTimePattern.exec(dateString);
  var timeString;
  if (!parts) {
    parts = patterns.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    var token2 = patterns.timeZone.exec(timeString);
    if (token2) {
      dateStrings.time = timeString.replace(token2[1], "");
      dateStrings.timeZone = token2[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token2;
  token2 = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token2) {
    var yearString = token2[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token2 = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token2) {
    var centuryString = token2[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate$1(dateString, year) {
  if (year === null) {
    return null;
  }
  var token2;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token2 = patterns.MM.exec(dateString);
  if (token2) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token2[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token2 = patterns.DDD.exec(dateString);
  if (token2) {
    date = /* @__PURE__ */ new Date(0);
    var dayOfYear = parseInt(token2[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token2 = patterns.MMDD.exec(dateString);
  if (token2) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token2[1], 10) - 1;
    var day = parseInt(token2[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token2 = patterns.Www.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token2 = patterns.WwwD.exec(dateString);
  if (token2) {
    week = parseInt(token2[1], 10) - 1;
    var dayOfWeek = parseInt(token2[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token2;
  var hours2;
  var minutes;
  token2 = patterns.HH.exec(timeString);
  if (token2) {
    hours2 = parseFloat(token2[1].replace(",", "."));
    if (!validateTime(hours2)) {
      return NaN;
    }
    return hours2 % 24 * MILLISECONDS_IN_HOUR;
  }
  token2 = patterns.HHMM.exec(timeString);
  if (token2) {
    hours2 = parseInt(token2[1], 10);
    minutes = parseFloat(token2[2].replace(",", "."));
    if (!validateTime(hours2, minutes)) {
      return NaN;
    }
    return hours2 % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }
  token2 = patterns.HHMMSS.exec(timeString);
  if (token2) {
    hours2 = parseInt(token2[1], 10);
    minutes = parseInt(token2[2], 10);
    var seconds = parseFloat(token2[3].replace(",", "."));
    if (!validateTime(hours2, minutes, seconds)) {
      return NaN;
    }
    return hours2 % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours2, minutes, seconds) {
  if (hours2 != null && (hours2 < 0 || hours2 >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek$1(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
var MILLISECONDS_IN_WEEK$2 = 6048e5;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
  requiredArgs(2, arguments);
  var startOfWeekLeft = startOfWeek$1(dirtyDateLeft, options);
  var startOfWeekRight = startOfWeek$1(dirtyDateRight, options);
  var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$2);
}
function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getWeeksInMonth(date, options) {
  requiredArgs(1, arguments);
  return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
function getWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek$1(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek$1(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek$1(firstWeek, options);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfWeek$1(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek$1(dirtyDate, {
    weekStartsOn: 1
  });
}
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
const viewAddressKeys = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function getDays({
  monthComps,
  prevMonthComps,
  nextMonthComps
}, locale) {
  const days = [];
  const {
    firstDayOfWeek,
    firstWeekday,
    isoWeeknumbers,
    weeknumbers,
    numDays,
    numWeeks
  } = monthComps;
  const prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
  let prevMonth = true;
  let thisMonth = false;
  let nextMonth = false;
  let position = 0;
  const formatter = new Intl.DateTimeFormat(locale.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let day = prevMonthComps.numDays - prevMonthDaysToShow + 1;
  let dayFromEnd = prevMonthComps.numDays - day + 1;
  let weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
  let weekdayOrdinalFromEnd = 1;
  let week = prevMonthComps.numWeeks;
  let weekFromEnd = 1;
  let month = prevMonthComps.month;
  let year = prevMonthComps.year;
  const today = /* @__PURE__ */ new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();
  for (let w = 1; w <= weeksInMonth; w++) {
    for (let i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
      if (prevMonth && weekday === firstWeekday) {
        day = 1;
        dayFromEnd = monthComps.numDays;
        weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
        weekdayOrdinalFromEnd = Math.floor((numDays - day) / daysInWeek + 1);
        week = 1;
        weekFromEnd = numWeeks;
        month = monthComps.month;
        year = monthComps.year;
        prevMonth = false;
        thisMonth = true;
      }
      const startDate = locale.getDateFromParams(year, month, day, 0, 0, 0, 0);
      const noonDate = locale.getDateFromParams(year, month, day, 12, 0, 0, 0);
      const endDate = locale.getDateFromParams(
        year,
        month,
        day,
        23,
        59,
        59,
        999
      );
      const date = startDate;
      const id = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
      const weekdayPosition = i;
      const weekdayPositionFromEnd = daysInWeek - i;
      const weeknumber = weeknumbers[w - 1];
      const isoWeeknumber = isoWeeknumbers[w - 1];
      const isToday = day === todayDay && month === todayMonth && year === todayYear;
      const isFirstDay = thisMonth && day === 1;
      const isLastDay = thisMonth && day === numDays;
      const onTop = w === 1;
      const onBottom = w === numWeeks;
      const onLeft = i === 1;
      const onRight = i === daysInWeek;
      const dayIndex = getDayIndex(year, month, day);
      days.push({
        locale,
        id,
        position: ++position,
        label: day.toString(),
        ariaLabel: formatter.format(new Date(year, month - 1, day)),
        day,
        dayFromEnd,
        weekday,
        weekdayPosition,
        weekdayPositionFromEnd,
        weekdayOrdinal,
        weekdayOrdinalFromEnd,
        week,
        weekFromEnd,
        weekPosition: w,
        weeknumber,
        isoWeeknumber,
        month,
        year,
        date,
        startDate,
        endDate,
        noonDate,
        dayIndex,
        isToday,
        isFirstDay,
        isLastDay,
        isDisabled: !thisMonth,
        isFocusable: !thisMonth,
        isFocused: false,
        inMonth: thisMonth,
        inPrevMonth: prevMonth,
        inNextMonth: nextMonth,
        onTop,
        onBottom,
        onLeft,
        onRight,
        classes: [
          `id-${id}`,
          `day-${day}`,
          `day-from-end-${dayFromEnd}`,
          `weekday-${weekday}`,
          `weekday-position-${weekdayPosition}`,
          `weekday-ordinal-${weekdayOrdinal}`,
          `weekday-ordinal-from-end-${weekdayOrdinalFromEnd}`,
          `week-${week}`,
          `week-from-end-${weekFromEnd}`,
          {
            "is-today": isToday,
            "is-first-day": isFirstDay,
            "is-last-day": isLastDay,
            "in-month": thisMonth,
            "in-prev-month": prevMonth,
            "in-next-month": nextMonth,
            "on-top": onTop,
            "on-bottom": onBottom,
            "on-left": onLeft,
            "on-right": onRight
          }
        ]
      });
      if (thisMonth && isLastDay) {
        thisMonth = false;
        nextMonth = true;
        day = 1;
        dayFromEnd = numDays;
        weekdayOrdinal = 1;
        weekdayOrdinalFromEnd = Math.floor((numDays - day) / daysInWeek + 1);
        week = 1;
        weekFromEnd = nextMonthComps.numWeeks;
        month = nextMonthComps.month;
        year = nextMonthComps.year;
      } else {
        day++;
        dayFromEnd--;
        weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
        weekdayOrdinalFromEnd = Math.floor((numDays - day) / daysInWeek + 1);
      }
    }
    week++;
    weekFromEnd--;
  }
  return days;
}
function getWeeks(days, showWeeknumbers, showIsoWeeknumbers, locale) {
  const result = days.reduce((result2, day, i) => {
    const weekIndex = Math.floor(i / 7);
    let week = result2[weekIndex];
    if (!week) {
      week = {
        id: `week-${weekIndex + 1}`,
        title: "",
        week: day.week,
        weekPosition: day.weekPosition,
        weeknumber: day.weeknumber,
        isoWeeknumber: day.isoWeeknumber,
        weeknumberDisplay: showWeeknumbers ? day.weeknumber : showIsoWeeknumbers ? day.isoWeeknumber : void 0,
        days: []
      };
      result2[weekIndex] = week;
    }
    week.days.push(day);
    return result2;
  }, Array(days.length / daysInWeek));
  result.forEach((week) => {
    const fromDay = week.days[0];
    const toDay = week.days[week.days.length - 1];
    if (fromDay.month === toDay.month) {
      week.title = `${locale.formatDate(fromDay.date, "MMMM YYYY")}`;
    } else if (fromDay.year === toDay.year) {
      week.title = `${locale.formatDate(
        fromDay.date,
        "MMM"
      )} - ${locale.formatDate(toDay.date, "MMM YYYY")}`;
    } else {
      week.title = `${locale.formatDate(
        fromDay.date,
        "MMM YYYY"
      )} - ${locale.formatDate(toDay.date, "MMM YYYY")}`;
    }
  });
  return result;
}
function getWeekdays(week, locale) {
  return week.days.map((day) => ({
    label: locale.formatDate(day.date, locale.masks.weekdays),
    weekday: day.weekday
  }));
}
function getPageId(month, year) {
  return `${year}.${pad(month, 2)}`;
}
function getPageAddressForDate(date, view, locale) {
  return pick(
    locale.getDateParts(locale.toDate(date)),
    viewAddressKeys[view]
  );
}
function addPages({ day, week, month, year }, count, view, locale) {
  if (view === "daily" && day) {
    const date = new Date(year, month - 1, day);
    const newDate = addDays(date, count);
    return {
      day: newDate.getDate(),
      month: newDate.getMonth() + 1,
      year: newDate.getFullYear()
    };
  } else if (view === "weekly" && week) {
    const comps = locale.getMonthParts(month, year);
    const date = comps.firstDayOfMonth;
    const newDate = addDays(date, (week - 1 + count) * 7);
    const parts = locale.getDateParts(newDate);
    return {
      week: parts.week,
      month: parts.month,
      year: parts.year
    };
  } else {
    const date = new Date(year, month - 1, 1);
    const newDate = addMonths(date, count);
    return {
      month: newDate.getMonth() + 1,
      year: newDate.getFullYear()
    };
  }
}
function pageIsValid(page) {
  return page != null && page.month != null && page.year != null;
}
function pageIsBeforePage(page, comparePage) {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  page = page;
  comparePage = comparePage;
  if (page.year !== comparePage.year)
    return page.year < comparePage.year;
  if (page.month && comparePage.month && page.month !== comparePage.month)
    return page.month < comparePage.month;
  if (page.week && comparePage.week && page.week !== comparePage.week) {
    return page.week < comparePage.week;
  }
  if (page.day && comparePage.day && page.day !== comparePage.day) {
    return page.day < comparePage.day;
  }
  return false;
}
function pageIsAfterPage(page, comparePage) {
  if (!pageIsValid(page) || !pageIsValid(comparePage))
    return false;
  page = page;
  comparePage = comparePage;
  if (page.year !== comparePage.year) {
    return page.year > comparePage.year;
  }
  if (page.month && comparePage.month && page.month !== comparePage.month) {
    return page.month > comparePage.month;
  }
  if (page.week && comparePage.week && page.week !== comparePage.week) {
    return page.week > comparePage.week;
  }
  if (page.day && comparePage.day && page.day !== comparePage.day) {
    return page.day > comparePage.day;
  }
  return false;
}
function pageIsBetweenPages(page, fromPage, toPage) {
  return (page || false) && !pageIsBeforePage(page, fromPage) && !pageIsAfterPage(page, toPage);
}
function pageIsEqualToPage(aPage, bPage) {
  if (!aPage && bPage)
    return false;
  if (aPage && !bPage)
    return false;
  if (!aPage && !bPage)
    return true;
  aPage = aPage;
  bPage = bPage;
  return aPage.year === bPage.year && aPage.month === bPage.month && aPage.week === bPage.week && aPage.day === bPage.day;
}
function pageRangeToArray(from, to, view, locale) {
  if (!pageIsValid(from) || !pageIsValid(to))
    return [];
  const result = [];
  while (!pageIsAfterPage(from, to)) {
    result.push(from);
    from = addPages(from, 1, view, locale);
  }
  return result;
}
function getPageKey(config) {
  const { day, week, month, year } = config;
  let id = `${year}-${pad(month, 2)}`;
  if (week)
    id = `${id}-w${week}`;
  if (day)
    id = `${id}-${pad(day, 2)}`;
  return id;
}
function getCachedPage(config, locale) {
  const { month, year, showWeeknumbers, showIsoWeeknumbers } = config;
  const date = new Date(year, month - 1, 15);
  const monthComps = locale.getMonthParts(month, year);
  const prevMonthComps = locale.getPrevMonthParts(month, year);
  const nextMonthComps = locale.getNextMonthParts(month, year);
  const days = getDays({ monthComps, prevMonthComps, nextMonthComps }, locale);
  const weeks = getWeeks(days, showWeeknumbers, showIsoWeeknumbers, locale);
  const weekdays2 = getWeekdays(weeks[0], locale);
  return {
    id: getPageKey(config),
    month,
    year,
    monthTitle: locale.formatDate(date, locale.masks.title),
    shortMonthLabel: locale.formatDate(date, "MMM"),
    monthLabel: locale.formatDate(date, "MMMM"),
    shortYearLabel: year.toString().substring(2),
    yearLabel: year.toString(),
    monthComps,
    prevMonthComps,
    nextMonthComps,
    days,
    weeks,
    weekdays: weekdays2
  };
}
function getPage(config, cachedPage) {
  const { day, week, view, trimWeeks } = config;
  const page = {
    ...cachedPage,
    ...config,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (view) {
    case "daily": {
      let dayObj = page.days.find((d) => d.inMonth);
      if (day) {
        dayObj = page.days.find((d) => d.day === day && d.inMonth) || dayObj;
      } else if (week) {
        dayObj = page.days.find((d) => d.week === week && d.inMonth);
      }
      const weekObj = page.weeks[dayObj.week - 1];
      page.viewWeeks = [weekObj];
      page.viewDays = [dayObj];
      page.week = dayObj.week;
      page.weekTitle = weekObj.title;
      page.day = dayObj.day;
      page.dayTitle = dayObj.ariaLabel;
      page.title = page.dayTitle;
      break;
    }
    case "weekly": {
      page.week = week || 1;
      const weekObj = page.weeks[page.week - 1];
      page.viewWeeks = [weekObj];
      page.viewDays = weekObj.days;
      page.weekTitle = weekObj.title;
      page.title = page.weekTitle;
      break;
    }
    default: {
      page.title = page.monthTitle;
      page.viewWeeks = page.weeks.slice(
        0,
        trimWeeks ? page.monthComps.numWeeks : void 0
      );
      page.viewDays = page.days;
      break;
    }
  }
  return page;
}
class Cache {
  constructor(size, createKey, createItem) {
    __publicField(this, "keys", []);
    __publicField(this, "store", {});
    this.size = size;
    this.createKey = createKey;
    this.createItem = createItem;
  }
  get(...args) {
    const key = this.createKey(...args);
    return this.store[key];
  }
  getOrSet(...args) {
    const key = this.createKey(...args);
    if (this.store[key])
      return this.store[key];
    const item = this.createItem(...args);
    if (this.keys.length >= this.size) {
      const removeKey = this.keys.shift();
      if (removeKey != null) {
        delete this.store[removeKey];
      }
    }
    this.keys.push(key);
    this.store[key] = item;
    return item;
  }
}
class DateRange {
  constructor(config, locale = new Locale()) {
    __publicField(this, "order");
    __publicField(this, "locale");
    __publicField(this, "start", null);
    __publicField(this, "end", null);
    __publicField(this, "repeat", null);
    var _a;
    this.locale = locale;
    const { start, end, span, order, repeat } = config;
    if (isDate(start)) {
      this.start = locale.getDateParts(start);
    }
    if (isDate(end)) {
      this.end = locale.getDateParts(end);
    } else if (this.start != null && span) {
      this.end = locale.getDateParts(addDays(this.start.date, span - 1));
    }
    this.order = order ?? 0;
    if (repeat) {
      this.repeat = new DateRepeat(
        {
          from: (_a = this.start) == null ? void 0 : _a.date,
          ...repeat
        },
        {
          locale: this.locale
        }
      );
    }
  }
  static fromMany(ranges, locale) {
    return (isArray(ranges) ? ranges : [ranges]).filter((d) => d).map((d) => DateRange.from(d, locale));
  }
  static from(source, locale) {
    if (source instanceof DateRange)
      return source;
    const config = {
      start: null,
      end: null
    };
    if (source != null) {
      if (isArray(source)) {
        config.start = source[0] ?? null;
        config.end = source[1] ?? null;
      } else if (isObject(source)) {
        Object.assign(config, source);
      } else {
        config.start = source;
        config.end = source;
      }
    }
    if (config.start != null)
      config.start = new Date(config.start);
    if (config.end != null)
      config.end = new Date(config.end);
    return new DateRange(config, locale);
  }
  get opts() {
    const { order, locale } = this;
    return { order, locale };
  }
  get hasRepeat() {
    return !!this.repeat;
  }
  get isSingleDay() {
    const { start, end } = this;
    return start && end && start.year === end.year && start.month === end.month && start.day === end.day;
  }
  get isMultiDay() {
    return !this.isSingleDay;
  }
  get daySpan() {
    if (this.start == null || this.end == null) {
      if (this.hasRepeat)
        return 1;
      return Infinity;
    }
    return this.end.dayIndex - this.start.dayIndex;
  }
  startsOnDay(dayParts) {
    var _a, _b;
    return ((_a = this.start) == null ? void 0 : _a.dayIndex) === dayParts.dayIndex || !!((_b = this.repeat) == null ? void 0 : _b.passes(dayParts));
  }
  intersectsDay(dayIndex) {
    return this.intersectsDayRange(dayIndex, dayIndex);
  }
  intersectsRange(range) {
    var _a, _b;
    return this.intersectsDayRange(
      ((_a = range.start) == null ? void 0 : _a.dayIndex) ?? -Infinity,
      ((_b = range.end) == null ? void 0 : _b.dayIndex) ?? Infinity
    );
  }
  intersectsDayRange(startDayIndex, endDayIndex) {
    if (this.start && this.start.dayIndex > endDayIndex)
      return false;
    if (this.end && this.end.dayIndex < startDayIndex)
      return false;
    return true;
  }
}
class DateRangeContext {
  constructor() {
    __publicField(this, "records", {});
  }
  render(data2, range, days) {
    var _a, _b, _c, _d;
    let result = null;
    const startDayIndex = days[0].dayIndex;
    const endDayIndex = days[days.length - 1].dayIndex;
    if (range.hasRepeat) {
      days.forEach((day) => {
        var _a2, _b2;
        if (range.startsOnDay(day)) {
          const span = range.daySpan < Infinity ? range.daySpan : 1;
          result = {
            startDay: day.dayIndex,
            startTime: ((_a2 = range.start) == null ? void 0 : _a2.time) ?? 0,
            endDay: day.dayIndex + span - 1,
            endTime: ((_b2 = range.end) == null ? void 0 : _b2.time) ?? MS_PER_DAY
          };
          this.getRangeRecords(data2).push(result);
        }
      });
    } else if (range.intersectsDayRange(startDayIndex, endDayIndex)) {
      result = {
        startDay: ((_a = range.start) == null ? void 0 : _a.dayIndex) ?? -Infinity,
        startTime: ((_b = range.start) == null ? void 0 : _b.time) ?? -Infinity,
        endDay: ((_c = range.end) == null ? void 0 : _c.dayIndex) ?? Infinity,
        endTime: ((_d = range.end) == null ? void 0 : _d.time) ?? Infinity
      };
      this.getRangeRecords(data2).push(result);
    }
    return result;
  }
  getRangeRecords(data2) {
    let record = this.records[data2.key];
    if (!record) {
      record = {
        ranges: [],
        data: data2
      };
      this.records[data2.key] = record;
    }
    return record.ranges;
  }
  getCell(key, day) {
    const cells = this.getCells(day);
    const result = cells.find((cell) => cell.data.key === key);
    return result;
  }
  cellExists(key, dayIndex) {
    const records = this.records[key];
    if (records == null)
      return false;
    return records.ranges.some(
      (r) => r.startDay <= dayIndex && r.endDay >= dayIndex
    );
  }
  getCells(day) {
    const records = Object.values(this.records);
    const result = [];
    const { dayIndex } = day;
    records.forEach(({ data: data2, ranges }) => {
      ranges.filter((r) => r.startDay <= dayIndex && r.endDay >= dayIndex).forEach((range) => {
        const onStart = dayIndex === range.startDay;
        const onEnd = dayIndex === range.endDay;
        const startTime = onStart ? range.startTime : 0;
        const startDate = new Date(day.startDate.getTime() + startTime);
        const endTime = onEnd ? range.endTime : MS_PER_DAY;
        const endDate = new Date(day.endDate.getTime() + endTime);
        const allDay = startTime === 0 && endTime === MS_PER_DAY;
        const order = data2.order || 0;
        result.push({
          ...range,
          data: data2,
          onStart,
          onEnd,
          startTime,
          startDate,
          endTime,
          endDate,
          allDay,
          order
        });
      });
    });
    result.sort((a, b) => a.order - b.order);
    return result;
  }
}
const locales = {
  // Arabic
  ar: { dow: 7, L: "D/‏M/‏YYYY" },
  // Bulgarian
  bg: { dow: 2, L: "D.MM.YYYY" },
  // Catalan
  ca: { dow: 2, L: "DD/MM/YYYY" },
  // Chinese (China)
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  // Chinese (Taiwan)
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  // Croatian
  hr: { dow: 2, L: "DD.MM.YYYY" },
  // Czech
  cs: { dow: 2, L: "DD.MM.YYYY" },
  // Danish
  da: { dow: 2, L: "DD.MM.YYYY" },
  // Dutch
  nl: { dow: 2, L: "DD-MM-YYYY" },
  // English (US)
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  // English (Australia)
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  // English (Canada)
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  // English (Great Britain)
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  // English (Ireland)
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  // English (New Zealand)
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  // English (South Africa)
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  // Esperanto
  eo: { dow: 2, L: "YYYY-MM-DD" },
  // Estonian
  et: { dow: 2, L: "DD.MM.YYYY" },
  // Finnish
  fi: { dow: 2, L: "DD.MM.YYYY" },
  // French
  fr: { dow: 2, L: "DD/MM/YYYY" },
  // French (Canada)
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  // French (Switzerland)
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  // German
  de: { dow: 2, L: "DD.MM.YYYY" },
  // Hebrew
  he: { dow: 1, L: "DD.MM.YYYY" },
  // Indonesian
  id: { dow: 2, L: "DD/MM/YYYY" },
  // Italian
  it: { dow: 2, L: "DD/MM/YYYY" },
  // Japanese
  ja: { dow: 1, L: "YYYY年M月D日" },
  // Korean
  ko: { dow: 1, L: "YYYY.MM.DD" },
  // Latvian
  lv: { dow: 2, L: "DD.MM.YYYY" },
  // Lithuanian
  lt: { dow: 2, L: "DD.MM.YYYY" },
  // Macedonian
  mk: { dow: 2, L: "D.MM.YYYY" },
  // Norwegian
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  // Polish
  pl: { dow: 2, L: "DD.MM.YYYY" },
  // Portuguese
  pt: { dow: 2, L: "DD/MM/YYYY" },
  // Romanian
  ro: { dow: 2, L: "DD.MM.YYYY" },
  // Russian
  ru: { dow: 2, L: "DD.MM.YYYY" },
  // Slovak
  sk: { dow: 2, L: "DD.MM.YYYY" },
  // Spanish (Spain)
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  // Spanish (Mexico)
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  // Swedish
  sv: { dow: 2, L: "YYYY-MM-DD" },
  // Thai
  th: { dow: 1, L: "DD/MM/YYYY" },
  // Turkish
  tr: { dow: 2, L: "DD.MM.YYYY" },
  // Ukrainian
  uk: { dow: 2, L: "DD.MM.YYYY" },
  // Vietnam
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
locales.en = locales["en-US"];
locales.es = locales["es-ES"];
locales.no = locales.nb;
locales.zh = locales["zh-CN"];
const localeSettings = Object.entries(locales).reduce(
  (res, [id, { dow, L }]) => {
    res[id] = {
      id,
      firstDayOfWeek: dow,
      masks: { L }
    };
    return res;
  },
  {}
);
const title = "MMMM YYYY";
const weekdays = "W";
const navMonths = "MMM";
const hours = "h A";
const input = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
const inputDateTime = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
];
const inputDateTime24hr = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
];
const inputTime = [
  "h:mm A"
];
const inputTime24hr = [
  "HH:mm"
];
const dayPopover = "WWW, MMM D, YYYY";
const data = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
];
const model$1 = "iso";
const iso = "YYYY-MM-DDTHH:mm:ss.SSSZ";
const masks = {
  title,
  weekdays,
  navMonths,
  hours,
  input,
  inputDateTime,
  inputDateTime24hr,
  inputTime,
  inputTime24hr,
  dayPopover,
  data,
  model: model$1,
  iso
};
const maxSwipeTime = 300;
const minHorizontalSwipeDistance = 60;
const maxVerticalSwipeDistance = 80;
const touch = {
  maxSwipeTime,
  minHorizontalSwipeDistance,
  maxVerticalSwipeDistance
};
const defaultConfig = {
  componentPrefix: "V",
  color: "blue",
  isDark: false,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch,
  masks,
  locales: localeSettings,
  datePicker: {
    updateOnInput: true,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: true
    }
  }
};
const state = reactive(defaultConfig);
const defaultLocales = computed(() => {
  return mapValues_1(state.locales, (l) => {
    l.masks = defaultsDeep_1(l.masks, state.masks);
    return l;
  });
});
const getDefault = (path) => {
  if (typeof window !== "undefined" && has(window.__vcalendar__, path)) {
    return get_1(window.__vcalendar__, path);
  }
  return get_1(state, path);
};
const setupDefaults = (app, userDefaults) => {
  app.config.globalProperties.$VCalendar = state;
  return Object.assign(state, defaultsDeep_1(userDefaults, state));
};
const DEFAULT_MONTH_CACHE_SIZE = 12;
const DEFAULT_PAGE_CACHE_SIZE = 5;
function resolveConfig(config, locales2) {
  const detLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
  let id;
  if (isString_1(config)) {
    id = config;
  } else if (has(config, "id")) {
    id = config.id;
  }
  id = (id || detLocale).toLowerCase();
  const localeKeys = Object.keys(locales2);
  const validKey = (k) => localeKeys.find((lk) => lk.toLowerCase() === k);
  id = validKey(id) || validKey(id.substring(0, 2)) || detLocale;
  const defLocale = {
    ...locales2["en-IE"],
    ...locales2[id],
    id,
    monthCacheSize: DEFAULT_MONTH_CACHE_SIZE,
    pageCacheSize: DEFAULT_PAGE_CACHE_SIZE
  };
  const result = isObject(config) ? defaultsDeep_1(config, defLocale) : defLocale;
  return result;
}
class Locale {
  constructor(config = void 0, timezone) {
    __publicField(this, "id");
    __publicField(this, "daysInWeek");
    __publicField(this, "firstDayOfWeek");
    __publicField(this, "masks");
    __publicField(this, "timezone");
    __publicField(this, "hourLabels");
    __publicField(this, "dayNames");
    __publicField(this, "dayNamesShort");
    __publicField(this, "dayNamesShorter");
    __publicField(this, "dayNamesNarrow");
    __publicField(this, "monthNames");
    __publicField(this, "monthNamesShort");
    __publicField(this, "relativeTimeNames");
    __publicField(this, "amPm", ["am", "pm"]);
    __publicField(this, "monthCache");
    __publicField(this, "pageCache");
    const { id, firstDayOfWeek, masks: masks2, monthCacheSize, pageCacheSize } = resolveConfig(config, defaultLocales.value);
    this.monthCache = new Cache(
      monthCacheSize,
      getMonthPartsKey,
      getMonthParts
    );
    this.pageCache = new Cache(pageCacheSize, getPageKey, getCachedPage);
    this.id = id;
    this.daysInWeek = daysInWeek;
    this.firstDayOfWeek = clamp(firstDayOfWeek, 1, daysInWeek);
    this.masks = masks2;
    this.timezone = timezone || void 0;
    this.hourLabels = this.getHourLabels();
    this.dayNames = getDayNames("long", this.id);
    this.dayNamesShort = getDayNames("short", this.id);
    this.dayNamesShorter = this.dayNamesShort.map((s) => s.substring(0, 2));
    this.dayNamesNarrow = getDayNames("narrow", this.id);
    this.monthNames = getMonthNames("long", this.id);
    this.monthNamesShort = getMonthNames("short", this.id);
    this.relativeTimeNames = getRelativeTimeNames(this.id);
  }
  formatDate(date, masks2) {
    return formatDate(date, masks2, this);
  }
  parseDate(dateString, mask) {
    return parseDate(dateString, mask, this);
  }
  toDate(d, opts = {}) {
    const nullDate = /* @__PURE__ */ new Date(NaN);
    let result = nullDate;
    const { fillDate, mask, patch, rules } = opts;
    if (isNumber_1(d)) {
      opts.type = "number";
      result = /* @__PURE__ */ new Date(+d);
    } else if (isString_1(d)) {
      opts.type = "string";
      result = d ? parseDate(d, mask || "iso", this) : nullDate;
    } else if (isDate(d)) {
      opts.type = "date";
      result = new Date(d.getTime());
    } else if (isDateParts(d)) {
      opts.type = "object";
      result = this.getDateFromParts(d);
    }
    if (result && (patch || rules)) {
      let parts = this.getDateParts(result);
      if (patch && fillDate != null) {
        const fillParts = this.getDateParts(this.toDate(fillDate));
        parts = this.getDateParts(
          this.toDate({ ...fillParts, ...pick(parts, DatePatchKeys[patch]) })
        );
      }
      if (rules) {
        parts = applyRulesForDateParts(parts, rules);
      }
      result = this.getDateFromParts(parts);
    }
    return result || nullDate;
  }
  toDateOrNull(d, opts = {}) {
    const dte = this.toDate(d, opts);
    return isNaN(dte.getTime()) ? null : dte;
  }
  fromDate(date, { type, mask } = {}) {
    switch (type) {
      case "number":
        return date ? date.getTime() : NaN;
      case "string":
        return date ? this.formatDate(date, mask || "iso") : "";
      case "object":
        return date ? this.getDateParts(date) : null;
      default:
        return date ? new Date(date) : null;
    }
  }
  range(source) {
    return DateRange.from(source, this);
  }
  ranges(ranges) {
    return DateRange.fromMany(ranges, this);
  }
  getDateParts(date) {
    return getDateParts(date, this);
  }
  getDateFromParts(parts) {
    return getDateFromParts(parts, this.timezone);
  }
  getDateFromParams(year, month, day, hours2, minutes, seconds, milliseconds) {
    return this.getDateFromParts({
      year,
      month,
      day,
      hours: hours2,
      minutes,
      seconds,
      milliseconds
    });
  }
  getPage(config) {
    const cachedPage = this.pageCache.getOrSet(config, this);
    return getPage(config, cachedPage);
  }
  getMonthParts(month, year) {
    const { firstDayOfWeek } = this;
    return this.monthCache.getOrSet(month, year, firstDayOfWeek);
  }
  getThisMonthParts() {
    const date = /* @__PURE__ */ new Date();
    return this.getMonthParts(
      date.getMonth() + 1,
      date.getFullYear()
    );
  }
  getPrevMonthParts(month, year) {
    if (month === 1)
      return this.getMonthParts(12, year - 1);
    return this.getMonthParts(month - 1, year);
  }
  getNextMonthParts(month, year) {
    if (month === 12)
      return this.getMonthParts(1, year + 1);
    return this.getMonthParts(month + 1, year);
  }
  getHourLabels() {
    return getHourDates().map((d) => {
      return this.formatDate(d, this.masks.hours);
    });
  }
  getDayId(date) {
    return this.formatDate(date, "YYYY-MM-DD");
  }
}
var GroupRuleType = /* @__PURE__ */ ((GroupRuleType2) => {
  GroupRuleType2["Any"] = "any";
  GroupRuleType2["All"] = "all";
  return GroupRuleType2;
})(GroupRuleType || {});
var IntervalRuleType = /* @__PURE__ */ ((IntervalRuleType2) => {
  IntervalRuleType2["Days"] = "days";
  IntervalRuleType2["Weeks"] = "weeks";
  IntervalRuleType2["Months"] = "months";
  IntervalRuleType2["Years"] = "years";
  return IntervalRuleType2;
})(IntervalRuleType || {});
var ComponentRuleType = /* @__PURE__ */ ((ComponentRuleType2) => {
  ComponentRuleType2["Days"] = "days";
  ComponentRuleType2["Weekdays"] = "weekdays";
  ComponentRuleType2["Weeks"] = "weeks";
  ComponentRuleType2["Months"] = "months";
  ComponentRuleType2["Years"] = "years";
  return ComponentRuleType2;
})(ComponentRuleType || {});
var OrdinalComponentRuleType = /* @__PURE__ */ ((OrdinalComponentRuleType2) => {
  OrdinalComponentRuleType2["OrdinalWeekdays"] = "ordinalWeekdays";
  return OrdinalComponentRuleType2;
})(OrdinalComponentRuleType || {});
class IntervalRule {
  constructor(type, interval, from) {
    __publicField(this, "validated", true);
    this.type = type;
    this.interval = interval;
    this.from = from;
    if (!this.from) {
      console.error(
        `A valid "from" date is required for date interval rule. This rule will be skipped.`
      );
      this.validated = false;
    }
  }
  passes(dateParts) {
    if (!this.validated)
      return true;
    const { date } = dateParts;
    switch (this.type) {
      case "days": {
        return diffInDays(this.from.date, date) % this.interval === 0;
      }
      case "weeks": {
        return diffInWeeks(this.from.date, date) % this.interval === 0;
      }
      case "months": {
        return diffInMonths(this.from.date, date) % this.interval === 0;
      }
      case "years": {
        return diffInYears(this.from.date, date) % this.interval === 0;
      }
      default: {
        return false;
      }
    }
  }
}
class ComponentRule {
  constructor(type, components2, validator, getter) {
    __publicField(this, "components", []);
    this.type = type;
    this.validator = validator;
    this.getter = getter;
    this.components = this.normalizeComponents(components2);
  }
  static create(type, config) {
    switch (type) {
      case "days":
        return new DaysRule(config);
      case "weekdays":
        return new WeekdaysRule(config);
      case "weeks":
        return new WeeksRule(config);
      case "months":
        return new MonthsRule(config);
      case "years":
        return new YearsRule(config);
    }
  }
  normalizeComponents(components2) {
    if (this.validator(components2))
      return [components2];
    if (!isArray(components2))
      return [];
    const result = [];
    components2.forEach((component) => {
      if (!this.validator(component)) {
        console.error(
          `Component value ${component} in invalid for "${this.type}" rule. This rule will be skipped.`
        );
        return;
      }
      result.push(component);
    });
    return result;
  }
  passes(dayParts) {
    const comps = this.getter(dayParts);
    const result = comps.some((comp) => this.components.includes(comp));
    return result;
  }
}
class DaysRule extends ComponentRule {
  constructor(components2) {
    super(
      "days",
      components2,
      isDayInMonth,
      ({ day, dayFromEnd }) => [day, -dayFromEnd]
    );
  }
}
class WeekdaysRule extends ComponentRule {
  constructor(components2) {
    super(
      "weekdays",
      components2,
      isDayOfWeek,
      ({ weekday }) => [weekday]
    );
  }
}
class WeeksRule extends ComponentRule {
  constructor(components2) {
    super(
      "weeks",
      components2,
      isWeekInMonth,
      ({ week, weekFromEnd }) => [week, -weekFromEnd]
    );
  }
}
class MonthsRule extends ComponentRule {
  constructor(components2) {
    super("months", components2, isMonthInYear, ({ month }) => [
      month
    ]);
  }
}
class YearsRule extends ComponentRule {
  constructor(components2) {
    super("years", components2, isNumber_1, ({ year }) => [year]);
  }
}
class OrdinalComponentRule {
  constructor(type, components2) {
    __publicField(this, "components");
    this.type = type;
    this.components = this.normalizeComponents(components2);
  }
  normalizeArrayConfig(config) {
    const result = [];
    config.forEach((numOrArray, i) => {
      if (isNumber_1(numOrArray)) {
        if (i === 0)
          return;
        if (!isOrdinalWeekInMonth(config[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!isDayOfWeek(numOrArray)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        result.push([config[0], numOrArray]);
      } else if (isArray(numOrArray)) {
        result.push(...this.normalizeArrayConfig(numOrArray));
      }
    });
    return result;
  }
  normalizeComponents(config) {
    const result = [];
    config.forEach((numOrArray, i) => {
      if (isNumber_1(numOrArray)) {
        if (i === 0)
          return;
        if (!isOrdinalWeekInMonth(config[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!isDayOfWeek(numOrArray)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        result.push([config[0], numOrArray]);
      } else if (isArray(numOrArray)) {
        result.push(...this.normalizeArrayConfig(numOrArray));
      }
    });
    return result;
  }
  passes(dayParts) {
    const { weekday, weekdayOrdinal, weekdayOrdinalFromEnd } = dayParts;
    return this.components.some(
      ([ordinalWeek, ordinalWeekday]) => (ordinalWeek === weekdayOrdinal || ordinalWeek === -weekdayOrdinalFromEnd) && weekday === ordinalWeekday
    );
  }
}
class FunctionRule {
  constructor(fn) {
    __publicField(this, "type", "function");
    __publicField(this, "validated", true);
    this.fn = fn;
    if (!isFunction_1(fn)) {
      console.error(
        `The function rule requires a valid function. This rule will be skipped.`
      );
      this.validated = false;
    }
  }
  passes(dayParts) {
    if (!this.validated)
      return true;
    return this.fn(dayParts);
  }
}
class DateRepeat {
  constructor(config, options = {}, parent) {
    __publicField(this, "validated", true);
    __publicField(this, "config");
    __publicField(this, "type", GroupRuleType.Any);
    __publicField(this, "from");
    __publicField(this, "until");
    __publicField(this, "rules", []);
    __publicField(this, "locale", new Locale());
    this.parent = parent;
    if (options.locale)
      this.locale = options.locale;
    this.config = config;
    if (isFunction_1(config)) {
      this.type = GroupRuleType.All;
      this.rules = [new FunctionRule(config)];
    } else if (isArray(config)) {
      this.type = GroupRuleType.Any;
      this.rules = config.map((c) => new DateRepeat(c, options, this));
    } else if (isObject(config)) {
      this.type = GroupRuleType.All;
      this.from = config.from ? this.locale.getDateParts(config.from) : parent == null ? void 0 : parent.from;
      this.until = config.until ? this.locale.getDateParts(config.until) : parent == null ? void 0 : parent.until;
      this.rules = this.getObjectRules(config);
    } else {
      console.error("Rule group configuration must be an object or an array.");
      this.validated = false;
    }
  }
  getObjectRules(config) {
    const rules = [];
    if (config.every) {
      if (isString_1(config.every)) {
        config.every = [1, `${config.every}s`];
      }
      if (isArray(config.every)) {
        const [interval = 1, type = IntervalRuleType.Days] = config.every;
        rules.push(new IntervalRule(type, interval, this.from));
      }
    }
    Object.values(ComponentRuleType).forEach((type) => {
      if (!(type in config))
        return;
      rules.push(ComponentRule.create(type, config[type]));
    });
    Object.values(OrdinalComponentRuleType).forEach((type) => {
      if (!(type in config))
        return;
      rules.push(new OrdinalComponentRule(type, config[type]));
    });
    if (config.on != null) {
      if (!isArray(config.on))
        config.on = [config.on];
      rules.push(
        new DateRepeat(config.on, { locale: this.locale }, this.parent)
      );
    }
    return rules;
  }
  passes(dayParts) {
    if (!this.validated)
      return true;
    if (this.from && dayParts.dayIndex <= this.from.dayIndex)
      return false;
    if (this.until && dayParts.dayIndex >= this.until.dayIndex)
      return false;
    if (this.type === GroupRuleType.Any) {
      return this.rules.some((r) => r.passes(dayParts));
    }
    return this.rules.every((r) => r.passes(dayParts));
  }
}
function isDayInMonth(dayInMonth) {
  if (!isNumber_1(dayInMonth))
    return false;
  return dayInMonth >= 1 && dayInMonth <= 31;
}
function isDayOfWeek(dayOfWeek) {
  if (!isNumber_1(dayOfWeek))
    return false;
  return dayOfWeek >= 1 && dayOfWeek <= 7;
}
function isWeekInMonth(weekInMonth) {
  if (!isNumber_1(weekInMonth))
    return false;
  return weekInMonth >= -6 && weekInMonth <= -1 || weekInMonth >= 1 && weekInMonth <= 6;
}
function isMonthInYear(monthInYear) {
  if (!isNumber_1(monthInYear))
    return false;
  return monthInYear >= 1 && monthInYear <= 12;
}
function isOrdinalWeekInMonth(weekInMonth) {
  if (!isNumber_1(weekInMonth))
    return false;
  if (weekInMonth < -5 || weekInMonth > 5 || weekInMonth === 0)
    return false;
  return true;
}
const DatePatchKeys = {
  dateTime: [
    "year",
    "month",
    "day",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ],
  date: ["year", "month", "day"],
  time: ["hours", "minutes", "seconds", "milliseconds"]
};
const daysInWeek = 7;
const weeksInMonth = 6;
const MS_PER_SECOND = 1e3;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const maskMacros = ["L", "iso"];
const DATE_PART_RANGES = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
};
const token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
const literal = /\[([^]*?)\]/gm;
const formatFlags = {
  D(d) {
    return d.day;
  },
  DD(d) {
    return pad(d.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(d) {
    return d.weekday - 1;
  },
  dd(d) {
    return pad(d.weekday - 1, 2);
  },
  W(d, l) {
    return l.dayNamesNarrow[d.weekday - 1];
  },
  WW(d, l) {
    return l.dayNamesShorter[d.weekday - 1];
  },
  WWW(d, l) {
    return l.dayNamesShort[d.weekday - 1];
  },
  WWWW(d, l) {
    return l.dayNames[d.weekday - 1];
  },
  M(d) {
    return d.month;
  },
  MM(d) {
    return pad(d.month, 2);
  },
  MMM(d, l) {
    return l.monthNamesShort[d.month - 1];
  },
  MMMM(d, l) {
    return l.monthNames[d.month - 1];
  },
  YY(d) {
    return String(d.year).substr(2);
  },
  YYYY(d) {
    return pad(d.year, 4);
  },
  h(d) {
    return d.hours % 12 || 12;
  },
  hh(d) {
    return pad(d.hours % 12 || 12, 2);
  },
  H(d) {
    return d.hours;
  },
  HH(d) {
    return pad(d.hours, 2);
  },
  m(d) {
    return d.minutes;
  },
  mm(d) {
    return pad(d.minutes, 2);
  },
  s(d) {
    return d.seconds;
  },
  ss(d) {
    return pad(d.seconds, 2);
  },
  S(d) {
    return Math.round(d.milliseconds / 100);
  },
  SS(d) {
    return pad(Math.round(d.milliseconds / 10), 2);
  },
  SSS(d) {
    return pad(d.milliseconds, 3);
  },
  a(d, l) {
    return d.hours < 12 ? l.amPm[0] : l.amPm[1];
  },
  A(d, l) {
    return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
  },
  Z() {
    return "Z";
  },
  ZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}`;
  },
  ZZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(
      Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60,
      4
    )}`;
  },
  ZZZZ(d) {
    const o = d.timezoneOffset;
    return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}:${pad(
      Math.abs(o) % 60,
      2
    )}`;
  }
};
const twoDigits = /\d\d?/;
const threeDigits = /\d{3}/;
const fourDigits = /\d{4}/;
const word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
const noop = () => {
};
const monthUpdate = (arrName) => (d, v, l) => {
  const index2 = l[arrName].indexOf(
    v.charAt(0).toUpperCase() + v.substr(1).toLowerCase()
  );
  if (~index2) {
    d.month = index2;
  }
};
const parseFlags = {
  D: [
    twoDigits,
    (d, v) => {
      d.day = v;
    }
  ],
  Do: [
    new RegExp(twoDigits.source + word.source),
    (d, v) => {
      d.day = parseInt(v, 10);
    }
  ],
  d: [twoDigits, noop],
  W: [word, noop],
  M: [
    twoDigits,
    (d, v) => {
      d.month = v - 1;
    }
  ],
  MMM: [word, monthUpdate("monthNamesShort")],
  MMMM: [word, monthUpdate("monthNames")],
  YY: [
    twoDigits,
    (d, v) => {
      const da = /* @__PURE__ */ new Date();
      const cent = +da.getFullYear().toString().substr(0, 2);
      d.year = +`${v > 68 ? cent - 1 : cent}${v}`;
    }
  ],
  YYYY: [
    fourDigits,
    (d, v) => {
      d.year = v;
    }
  ],
  S: [
    /\d/,
    (d, v) => {
      d.milliseconds = v * 100;
    }
  ],
  SS: [
    /\d{2}/,
    (d, v) => {
      d.milliseconds = v * 10;
    }
  ],
  SSS: [
    threeDigits,
    (d, v) => {
      d.milliseconds = v;
    }
  ],
  h: [
    twoDigits,
    (d, v) => {
      d.hours = v;
    }
  ],
  m: [
    twoDigits,
    (d, v) => {
      d.minutes = v;
    }
  ],
  s: [
    twoDigits,
    (d, v) => {
      d.seconds = v;
    }
  ],
  a: [
    word,
    (d, v, l) => {
      const val = v.toLowerCase();
      if (val === l.amPm[0]) {
        d.isPm = false;
      } else if (val === l.amPm[1]) {
        d.isPm = true;
      }
    }
  ],
  Z: [
    /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
    (d, v) => {
      if (v === "Z")
        v = "+00:00";
      const parts = `${v}`.match(/([+-]|\d\d)/gi);
      if (parts) {
        const minutes = +parts[1] * 60 + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
      }
    }
  ]
};
parseFlags.DD = parseFlags.D;
parseFlags.dd = parseFlags.d;
parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
parseFlags.MM = parseFlags.M;
parseFlags.mm = parseFlags.m;
parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
parseFlags.ss = parseFlags.s;
parseFlags.A = parseFlags.a;
parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
function normalizeMasks(masks2, locale) {
  return (arrayHasItems(masks2) && masks2 || [
    isString_1(masks2) && masks2 || "YYYY-MM-DD"
  ]).map(
    (m) => maskMacros.reduce(
      (prev, curr) => prev.replace(curr, locale.masks[curr] || ""),
      m
    )
  );
}
function isDateParts(parts) {
  return isObject(parts) && "year" in parts && "month" in parts && "day" in parts;
}
function startOfWeek(date, firstDayOfWeek = 1) {
  const day = date.getDay() + 1;
  const daysToAdd = day >= firstDayOfWeek ? firstDayOfWeek - day : -(7 - (firstDayOfWeek - day));
  return addDays(date, daysToAdd);
}
function getDayIndex(year, month, day) {
  const utcDate = Date.UTC(year, month - 1, day);
  return diffInDays(/* @__PURE__ */ new Date(0), new Date(utcDate));
}
function diffInDays(d1, d2) {
  return Math.round((d2.getTime() - d1.getTime()) / MS_PER_DAY);
}
function diffInWeeks(d1, d2) {
  return Math.ceil(diffInDays(startOfWeek(d1), startOfWeek(d2)) / 7);
}
function diffInYears(d1, d2) {
  return d2.getUTCFullYear() - d1.getUTCFullYear();
}
function diffInMonths(d1, d2) {
  return diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
}
function getDateFromParts(parts, timezone = "") {
  const d = /* @__PURE__ */ new Date();
  const {
    year = d.getFullYear(),
    month = d.getMonth() + 1,
    day = d.getDate(),
    hours: hrs = 0,
    minutes: min = 0,
    seconds: sec = 0,
    milliseconds: ms = 0
  } = parts;
  if (timezone) {
    const dateString = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}T${pad(
      hrs,
      2
    )}:${pad(min, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
    return toDate$1(dateString, { timeZone: timezone });
  }
  return new Date(year, month - 1, day, hrs, min, sec, ms);
}
function getDateParts(date, locale) {
  let tzDate = new Date(date.getTime());
  if (locale.timezone) {
    tzDate = new Date(
      date.toLocaleString("en-US", { timeZone: locale.timezone })
    );
    tzDate.setMilliseconds(date.getMilliseconds());
  }
  const milliseconds = tzDate.getMilliseconds();
  const seconds = tzDate.getSeconds();
  const minutes = tzDate.getMinutes();
  const hours2 = tzDate.getHours();
  const time = milliseconds + seconds * MS_PER_SECOND + minutes * MS_PER_MINUTE + hours2 * MS_PER_HOUR;
  const month = tzDate.getMonth() + 1;
  const year = tzDate.getFullYear();
  const monthParts = locale.getMonthParts(month, year);
  const day = tzDate.getDate();
  const dayFromEnd = monthParts.numDays - day + 1;
  const weekday = tzDate.getDay() + 1;
  const weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
  const weekdayOrdinalFromEnd = Math.floor((monthParts.numDays - day) / 7 + 1);
  const week = Math.ceil(
    (day + Math.abs(monthParts.firstWeekday - monthParts.firstDayOfWeek)) / 7
  );
  const weekFromEnd = monthParts.numWeeks - week + 1;
  const weeknumber = monthParts.weeknumbers[week];
  const dayIndex = getDayIndex(year, month, day);
  const parts = {
    milliseconds,
    seconds,
    minutes,
    hours: hours2,
    time,
    day,
    dayFromEnd,
    weekday,
    weekdayOrdinal,
    weekdayOrdinalFromEnd,
    week,
    weekFromEnd,
    weeknumber,
    month,
    year,
    date: tzDate,
    dateTime: tzDate.getTime(),
    dayIndex,
    timezoneOffset: 0,
    isValid: true
  };
  return parts;
}
function getMonthPartsKey(month, year, firstDayOfWeek) {
  return `${year}-${month}-${firstDayOfWeek}`;
}
function getMonthParts(month, year, firstDayOfWeek) {
  const inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstWeekday = firstDayOfMonth.getDay() + 1;
  const numDays = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
  const weekStartsOn = firstDayOfWeek - 1;
  const numWeeks = getWeeksInMonth(firstDayOfMonth, {
    weekStartsOn
  });
  const weeknumbers = [];
  const isoWeeknumbers = [];
  for (let i = 0; i < numWeeks; i++) {
    const date = addDays(firstDayOfMonth, i * 7);
    weeknumbers.push(getWeek(date, { weekStartsOn }));
    isoWeeknumbers.push(getISOWeek(date));
  }
  return {
    firstDayOfWeek,
    firstDayOfMonth,
    inLeapYear,
    firstWeekday,
    numDays,
    numWeeks,
    month,
    year,
    weeknumbers,
    isoWeeknumbers
  };
}
function getWeekdayDates() {
  const dates = [];
  const year = 2020;
  const month = 1;
  const day = 5;
  for (let i = 0; i < daysInWeek; i++) {
    dates.push(
      getDateFromParts({
        year,
        month,
        day: day + i,
        hours: 12
      })
    );
  }
  return dates;
}
function getDayNames(length, localeId = void 0) {
  const dtf = new Intl.DateTimeFormat(localeId, {
    weekday: length
  });
  return getWeekdayDates().map((d) => dtf.format(d));
}
function getHourDates() {
  const dates = [];
  for (let i = 0; i <= 24; i++) {
    dates.push(new Date(2e3, 0, 1, i));
  }
  return dates;
}
function getRelativeTimeNames(localeId = void 0) {
  const units = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year"
  ];
  const rtf = new Intl.RelativeTimeFormat(localeId);
  return units.reduce((names, unit) => {
    const parts = rtf.formatToParts(100, unit);
    names[unit] = parts[1].unit;
    return names;
  }, {});
}
function getMonthDates() {
  const dates = [];
  for (let i = 0; i < 12; i++) {
    dates.push(new Date(2e3, i, 15));
  }
  return dates;
}
function getMonthNames(length, localeId = void 0) {
  const dtf = new Intl.DateTimeFormat(localeId, {
    month: length,
    timeZone: "UTC"
  });
  return getMonthDates().map((d) => dtf.format(d));
}
function datePartIsValid(part, rule, parts) {
  if (isNumber_1(rule))
    return rule === part;
  if (isArray(rule))
    return rule.includes(part);
  if (isFunction_1(rule))
    return rule(part, parts);
  if (rule.min != null && rule.min > part)
    return false;
  if (rule.max != null && rule.max < part)
    return false;
  if (rule.interval != null && part % rule.interval !== 0)
    return false;
  return true;
}
function getDatePartOptions(parts, range, rule) {
  const options = [];
  const [min, max, padding] = range;
  for (let i = min; i <= max; i++) {
    if (rule == null || datePartIsValid(i, rule, parts)) {
      options.push({
        value: i,
        label: pad(i, padding)
      });
    }
  }
  return options;
}
function getDatePartsOptions(parts, rules) {
  return {
    milliseconds: getDatePartOptions(
      parts,
      DATE_PART_RANGES.milliseconds,
      rules.milliseconds
    ),
    seconds: getDatePartOptions(parts, DATE_PART_RANGES.seconds, rules.seconds),
    minutes: getDatePartOptions(parts, DATE_PART_RANGES.minutes, rules.minutes),
    hours: getDatePartOptions(parts, DATE_PART_RANGES.hours, rules.hours)
  };
}
function getNearestDatePart(parts, range, value, rule) {
  const options = getDatePartOptions(parts, range, rule);
  const result = options.reduce((prev, opt) => {
    if (opt.disabled)
      return prev;
    if (isNaN(prev))
      return opt.value;
    const diffPrev = Math.abs(prev - value);
    const diffCurr = Math.abs(opt.value - value);
    return diffCurr < diffPrev ? opt.value : prev;
  }, NaN);
  return isNaN(result) ? value : result;
}
function applyRulesForDateParts(dateParts, rules) {
  const result = { ...dateParts };
  Object.entries(rules).forEach(([key, rule]) => {
    const range = DATE_PART_RANGES[key];
    const value = dateParts[key];
    result[key] = getNearestDatePart(
      dateParts,
      range,
      value,
      rule
    );
  });
  return result;
}
function parseDate(dateString, mask, locale) {
  const masks2 = normalizeMasks(mask, locale);
  return masks2.map((m) => {
    if (typeof m !== "string") {
      throw new Error("Invalid mask");
    }
    let str = dateString;
    if (str.length > 1e3) {
      return false;
    }
    let isValid = true;
    const dp = {};
    m.replace(token, ($0) => {
      if (parseFlags[$0]) {
        const info = parseFlags[$0];
        const index2 = str.search(info[0]);
        if (!~index2) {
          isValid = false;
        } else {
          str.replace(info[0], (result) => {
            info[1](dp, result, locale);
            str = str.substr(index2 + result.length);
            return result;
          });
        }
      }
      return parseFlags[$0] ? "" : $0.slice(1, $0.length - 1);
    });
    if (!isValid) {
      return false;
    }
    const today = /* @__PURE__ */ new Date();
    if (dp.hours != null) {
      if (dp.isPm === true && +dp.hours !== 12) {
        dp.hours = +dp.hours + 12;
      } else if (dp.isPm === false && +dp.hours === 12) {
        dp.hours = 0;
      }
    }
    let date;
    if (dp.timezoneOffset != null) {
      dp.minutes = +(dp.minutes || 0) - +dp.timezoneOffset;
      date = new Date(
        Date.UTC(
          dp.year || today.getFullYear(),
          dp.month || 0,
          dp.day || 1,
          dp.hours || 0,
          dp.minutes || 0,
          dp.seconds || 0,
          dp.milliseconds || 0
        )
      );
    } else {
      date = locale.getDateFromParts({
        year: dp.year || today.getFullYear(),
        month: (dp.month || 0) + 1,
        day: dp.day || 1,
        hours: dp.hours || 0,
        minutes: dp.minutes || 0,
        seconds: dp.seconds || 0,
        milliseconds: dp.milliseconds || 0
      });
    }
    return date;
  }).find((d) => d) || new Date(dateString);
}
function formatDate(date, masks2, locale) {
  if (date == null)
    return "";
  let mask = normalizeMasks(masks2, locale)[0];
  if (/Z$/.test(mask))
    locale.timezone = "utc";
  const literals = [];
  mask = mask.replace(literal, ($0, $1) => {
    literals.push($1);
    return "??";
  });
  const dateParts = locale.getDateParts(date);
  mask = mask.replace(
    token,
    ($0) => $0 in formatFlags ? formatFlags[$0](dateParts, locale) : $0.slice(1, $0.length - 1)
  );
  return mask.replace(/\?\?/g, () => literals.shift());
}
let attrKey = 0;
class Attribute {
  constructor(config, theme, locale) {
    __publicField(this, "key", "");
    __publicField(this, "hashcode", "");
    __publicField(this, "highlight", null);
    __publicField(this, "content", null);
    __publicField(this, "dot", null);
    __publicField(this, "bar", null);
    __publicField(this, "event", null);
    __publicField(this, "popover", null);
    __publicField(this, "customData", null);
    __publicField(this, "ranges");
    __publicField(this, "hasRanges", false);
    __publicField(this, "order", 0);
    __publicField(this, "pinPage", false);
    __publicField(this, "maxRepeatSpan", 0);
    __publicField(this, "locale");
    const { dates } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: false },
      config
    );
    this.key || (this.key = ++attrKey);
    this.locale = locale;
    theme.normalizeGlyphs(this);
    this.ranges = locale.ranges(dates ?? []);
    this.hasRanges = !!arrayHasItems(this.ranges);
    this.maxRepeatSpan = this.ranges.filter((r) => r.hasRepeat).map((r) => r.daySpan).reduce((res, curr) => Math.max(res, curr), 0);
  }
  intersectsRange({ start, end }) {
    if (start == null || end == null)
      return false;
    const simpleRanges = this.ranges.filter((r) => !r.hasRepeat);
    for (const range of simpleRanges) {
      if (range.intersectsDayRange(start.dayIndex, end.dayIndex)) {
        return true;
      }
    }
    const repeatRanges = this.ranges.filter((r) => r.hasRepeat);
    if (!repeatRanges.length)
      return false;
    let day = start;
    if (this.maxRepeatSpan > 1) {
      day = this.locale.getDateParts(addDays(day.date, -this.maxRepeatSpan));
    }
    while (day.dayIndex <= end.dayIndex) {
      for (const range of repeatRanges) {
        if (range.startsOnDay(day))
          return true;
      }
      day = this.locale.getDateParts(addDays(day.date, 1));
    }
    return false;
  }
}
function showPopover(opts) {
  if (document) {
    document.dispatchEvent(
      new CustomEvent("show-popover", {
        detail: opts
      })
    );
  }
}
function hidePopover(opts) {
  if (document) {
    document.dispatchEvent(
      new CustomEvent("hide-popover", {
        detail: opts
      })
    );
  }
}
function togglePopover(opts) {
  if (document) {
    document.dispatchEvent(
      new CustomEvent("toggle-popover", {
        detail: opts
      })
    );
  }
}
function getPopoverEventHandlers(opts) {
  const { visibility } = opts;
  const click = visibility === "click";
  const hover = visibility === "hover";
  const hoverFocus = visibility === "hover-focus";
  const focus = visibility === "focus";
  opts.autoHide = !click;
  let hovered = false;
  let focused = false;
  const clickHandler = (e) => {
    if (click) {
      togglePopover({
        ...opts,
        target: opts.target || e.currentTarget
      });
      e.stopPropagation();
    }
  };
  const mouseMoveHandler = (e) => {
    if (!hovered) {
      hovered = true;
      if (hover || hoverFocus) {
        showPopover({
          ...opts,
          target: opts.target || e.currentTarget
        });
      }
    }
  };
  const mouseLeaveHandler = () => {
    if (hovered) {
      hovered = false;
      if (hover || hoverFocus && !focused) {
        hidePopover(opts);
      }
    }
  };
  const focusInHandler = (e) => {
    if (!focused) {
      focused = true;
      if (focus || hoverFocus) {
        showPopover({
          ...opts,
          target: opts.target || e.currentTarget
        });
      }
    }
  };
  const focusOutHandler = (e) => {
    if (focused && !elementContains(e.currentTarget, e.relatedTarget)) {
      focused = false;
      if (focus || hoverFocus && !hovered) {
        hidePopover(opts);
      }
    }
  };
  const handlers = {};
  switch (opts.visibility) {
    case "click":
      handlers.click = clickHandler;
      break;
    case "hover":
      handlers.mousemove = mouseMoveHandler;
      handlers.mouseleave = mouseLeaveHandler;
      break;
    case "focus":
      handlers.focusin = focusInHandler;
      handlers.focusout = focusOutHandler;
      break;
    case "hover-focus":
      handlers.mousemove = mouseMoveHandler;
      handlers.mouseleave = mouseLeaveHandler;
      handlers.focusin = focusInHandler;
      handlers.focusout = focusOutHandler;
      break;
  }
  return handlers;
}
const removeHandlers = (target) => {
  const el = resolveEl(target);
  if (el == null)
    return;
  const handlers = el.popoverHandlers;
  if (!handlers || !handlers.length)
    return;
  handlers.forEach((handler) => handler());
  delete el.popoverHandlers;
};
const addHandlers = (target, opts) => {
  const el = resolveEl(target);
  if (el == null)
    return;
  const remove = [];
  const handlers = getPopoverEventHandlers(opts);
  Object.entries(handlers).forEach(([event, handler]) => {
    remove.push(on(el, event, handler));
  });
  el.popoverHandlers = remove;
};
const popoverDirective = {
  mounted(el, binding) {
    const { value } = binding;
    if (!value)
      return;
    addHandlers(el, value);
  },
  updated(el, binding) {
    const { oldValue, value } = binding;
    const oldVisibility = oldValue == null ? void 0 : oldValue.visibility;
    const newVisibility = value == null ? void 0 : value.visibility;
    if (oldVisibility !== newVisibility) {
      if (oldVisibility) {
        removeHandlers(el);
        if (!newVisibility)
          hidePopover(oldValue);
      }
      if (newVisibility) {
        addHandlers(el, value);
      }
    }
  },
  unmounted(el) {
    removeHandlers(el);
  }
};
const addHorizontalSwipeHandler = (element, handler, {
  maxSwipeTime: maxSwipeTime2,
  minHorizontalSwipeDistance: minHorizontalSwipeDistance2,
  maxVerticalSwipeDistance: maxVerticalSwipeDistance2
}) => {
  if (!element || !element.addEventListener || !isFunction_1(handler)) {
    return null;
  }
  let startX = 0;
  let startY = 0;
  let startTime = null;
  let isSwiping = false;
  function touchStart(e) {
    const t = e.changedTouches[0];
    startX = t.screenX;
    startY = t.screenY;
    startTime = (/* @__PURE__ */ new Date()).getTime();
    isSwiping = true;
  }
  function touchEnd(e) {
    if (!isSwiping || !startTime)
      return;
    isSwiping = false;
    const t = e.changedTouches[0];
    const deltaX = t.screenX - startX;
    const deltaY = t.screenY - startY;
    const deltaTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
    if (deltaTime < maxSwipeTime2) {
      if (Math.abs(deltaX) >= minHorizontalSwipeDistance2 && Math.abs(deltaY) <= maxVerticalSwipeDistance2) {
        const arg = { toLeft: false, toRight: false };
        if (deltaX < 0) {
          arg.toLeft = true;
        } else {
          arg.toRight = true;
        }
        handler(arg);
      }
    }
  }
  on(element, "touchstart", touchStart, { passive: true });
  on(element, "touchend", touchEnd, { passive: true });
  return () => {
    off(element, "touchstart", touchStart);
    off(element, "touchend", touchEnd);
  };
};
const watchSkippers = {};
const skipWatcher = (watcher, durationMs = 10) => {
  watchSkippers[watcher] = Date.now() + durationMs;
};
const handleWatcher = (watcher, handler) => {
  if (watcher in watchSkippers) {
    const dateTime = watchSkippers[watcher];
    if (Date.now() < dateTime)
      return;
    delete watchSkippers[watcher];
  }
  handler();
};
function windowExists() {
  return typeof window !== "undefined";
}
function windowHasFeature(feature) {
  return windowExists() && feature in window;
}
function useDarkMode(config) {
  const isDark = ref(false);
  const displayMode = computed(() => isDark.value ? "dark" : "light");
  let mediaQuery;
  let mutationObserver;
  function mqListener(ev) {
    isDark.value = ev.matches;
  }
  function setupSystem() {
    if (windowHasFeature("matchMedia")) {
      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", mqListener);
      isDark.value = mediaQuery.matches;
    }
  }
  function moListener() {
    const { selector = ":root", darkClass = "dark" } = config.value;
    const el = document.querySelector(selector);
    isDark.value = el.classList.contains(darkClass);
  }
  function setupClass(config2) {
    const { selector = ":root", darkClass = "dark" } = config2;
    if (windowExists() && selector && darkClass) {
      const el = document.querySelector(selector);
      if (el) {
        mutationObserver = new MutationObserver(moListener);
        mutationObserver.observe(el, {
          attributes: true,
          attributeFilter: ["class"]
        });
        isDark.value = el.classList.contains(darkClass);
      }
    }
  }
  function setup() {
    stopObservers();
    const type = typeof config.value;
    if (type === "string" && config.value.toLowerCase() === "system") {
      setupSystem();
    } else if (type === "object") {
      setupClass(config.value);
    } else {
      isDark.value = !!config.value;
    }
  }
  const stopWatch = watch(() => config.value, () => setup(), {
    immediate: true
  });
  function stopObservers() {
    if (mediaQuery) {
      mediaQuery.removeEventListener("change", mqListener);
      mediaQuery = void 0;
    }
    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver = void 0;
    }
  }
  function cleanup() {
    stopObservers();
    stopWatch();
  }
  onUnmounted(() => cleanup());
  return {
    isDark,
    displayMode,
    cleanup
  };
}
const targetProps = ["base", "start", "end", "startEnd"];
const displayProps = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
];
const _defaultProfile = { base: {}, start: {}, end: {} };
function normalizeConfig(color, config, defaultProfile = _defaultProfile) {
  let rootColor = color;
  let root2 = {};
  if (config === true || isString_1(config)) {
    rootColor = isString_1(config) ? config : rootColor;
    root2 = { ...defaultProfile };
  } else if (isObject(config)) {
    if (hasAny(config, targetProps)) {
      root2 = { ...config };
    } else {
      root2 = {
        base: { ...config },
        start: { ...config },
        end: { ...config }
      };
    }
  }
  const result = defaultsDeep_1(
    root2,
    { start: root2.startEnd, end: root2.startEnd },
    defaultProfile
  );
  Object.entries(result).forEach(([targetType, targetConfig]) => {
    let targetColor = rootColor;
    if (targetConfig === true || isString_1(targetConfig)) {
      targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
      result[targetType] = { color: targetColor };
    } else if (isObject(targetConfig)) {
      if (hasAny(targetConfig, displayProps)) {
        result[targetType] = { ...targetConfig };
      } else {
        result[targetType] = {};
      }
    }
    defaultsDeep_1(result[targetType], { color: targetColor });
  });
  return result;
}
class HighlightRenderer {
  constructor() {
    __publicField(this, "type", "highlight");
  }
  normalizeConfig(color, config) {
    return normalizeConfig(color, config, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(glyphs) {
    glyphs.highlights = [];
    if (!glyphs.content)
      glyphs.content = [];
  }
  render({ data: data2, onStart, onEnd }, glyphs) {
    const { key, highlight } = data2;
    if (!highlight)
      return;
    const { highlights } = glyphs;
    const { base, start, end } = highlight;
    if (onStart && onEnd) {
      highlights.push({
        ...start,
        key,
        wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${start.color}`,
        class: [`vc-highlight vc-highlight-bg-${start.fillMode}`, start.class],
        contentClass: [
          `vc-attr vc-highlight-content-${start.fillMode} vc-${start.color}`,
          start.contentClass
        ]
      });
    } else if (onStart) {
      highlights.push({
        ...base,
        key: `${key}-base`,
        wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${base.color}`,
        class: [
          `vc-highlight vc-highlight-base-start vc-highlight-bg-${base.fillMode}`,
          base.class
        ]
      });
      highlights.push({
        ...start,
        key,
        wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${start.color}`,
        class: [`vc-highlight vc-highlight-bg-${start.fillMode}`, start.class],
        contentClass: [
          `vc-attr vc-highlight-content-${start.fillMode} vc-${start.color}`,
          start.contentClass
        ]
      });
    } else if (onEnd) {
      highlights.push({
        ...base,
        key: `${key}-base`,
        wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${base.color}`,
        class: [
          `vc-highlight vc-highlight-base-end vc-highlight-bg-${base.fillMode}`,
          base.class
        ]
      });
      highlights.push({
        ...end,
        key,
        wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${end.color}`,
        class: [`vc-highlight vc-highlight-bg-${end.fillMode}`, end.class],
        contentClass: [
          `vc-attr vc-highlight-content-${end.fillMode} vc-${end.color}`,
          end.contentClass
        ]
      });
    } else {
      highlights.push({
        ...base,
        key: `${key}-middle`,
        wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${base.color}`,
        class: [
          `vc-highlight vc-highlight-base-middle vc-highlight-bg-${base.fillMode}`,
          base.class
        ],
        contentClass: [
          `vc-attr vc-highlight-content-${base.fillMode} vc-${base.color}`,
          base.contentClass
        ]
      });
    }
  }
}
class BaseRenderer {
  constructor(type, collectionType) {
    __publicField(this, "type", "");
    __publicField(this, "collectionType", "");
    this.type = type;
    this.collectionType = collectionType;
  }
  normalizeConfig(color, config) {
    return normalizeConfig(color, config);
  }
  prepareRender(glyphs) {
    glyphs[this.collectionType] = [];
  }
  render({ data: data2, onStart, onEnd }, glyphs) {
    const { key } = data2;
    const item = data2[this.type];
    if (!key || !item) {
      return;
    }
    const collection = glyphs[this.collectionType];
    const { base, start, end } = item;
    if (onStart) {
      collection.push({
        ...start,
        key,
        class: [
          `vc-${this.type} vc-${this.type}-start vc-${start.color} vc-attr`,
          start.class
        ]
      });
    } else if (onEnd) {
      collection.push({
        ...end,
        key,
        class: [
          `vc-${this.type} vc-${this.type}-end vc-${end.color} vc-attr`,
          end.class
        ]
      });
    } else {
      collection.push({
        ...base,
        key,
        class: [
          `vc-${this.type} vc-${this.type}-base vc-${base.color} vc-attr`,
          base.class
        ]
      });
    }
  }
}
class ContentRenderer extends BaseRenderer {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(_, config) {
    return normalizeConfig("base", config);
  }
}
class DotRenderer extends BaseRenderer {
  constructor() {
    super("dot", "dots");
  }
}
class BarRenderer extends BaseRenderer {
  constructor() {
    super("bar", "bars");
  }
}
class Theme {
  constructor(color) {
    __publicField(this, "color");
    __publicField(this, "renderers", [
      new ContentRenderer(),
      new HighlightRenderer(),
      new DotRenderer(),
      new BarRenderer()
    ]);
    this.color = color;
  }
  normalizeGlyphs(attr) {
    this.renderers.forEach((renderer) => {
      const type = renderer.type;
      if (attr[type] != null) {
        attr[type] = renderer.normalizeConfig(this.color, attr[type]);
      }
    });
  }
  prepareRender(glyphs = {}) {
    this.renderers.forEach((renderer) => {
      renderer.prepareRender(glyphs);
    });
    return glyphs;
  }
  render(cell, glyphs) {
    this.renderers.forEach((renderer) => {
      renderer.render(cell, glyphs);
    });
  }
}
const contextKey$4 = Symbol("__vc_base_context__");
const propsDef$2 = {
  color: {
    type: String,
    default: () => getDefault("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => getDefault("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function createBase(props) {
  const color = computed(() => props.color ?? "");
  const isDark = computed(() => props.isDark ?? false);
  const { displayMode } = useDarkMode(isDark);
  const theme = computed(() => new Theme(color.value));
  const locale = computed(() => {
    if (props.locale instanceof Locale)
      return props.locale;
    const config = isObject(props.locale) ? props.locale : {
      id: props.locale,
      firstDayOfWeek: props.firstDayOfWeek,
      masks: props.masks
    };
    return new Locale(config, props.timezone);
  });
  const masks2 = computed(() => locale.value.masks);
  const minDate = computed(() => props.minDate);
  const maxDate = computed(() => props.maxDate);
  const disabledDates = computed(() => {
    const dates = props.disabledDates ? [...props.disabledDates] : [];
    if (minDate.value != null) {
      dates.push({
        start: null,
        end: addDays(locale.value.toDate(minDate.value), -1)
      });
    }
    if (maxDate.value != null) {
      dates.push({
        start: addDays(locale.value.toDate(maxDate.value), 1),
        end: null
      });
    }
    return locale.value.ranges(dates);
  });
  const disabledAttribute = computed(() => {
    return new Attribute(
      {
        key: "disabled",
        dates: disabledDates.value,
        order: 100
      },
      theme.value,
      locale.value
    );
  });
  const context = {
    color,
    isDark,
    displayMode,
    theme,
    locale,
    masks: masks2,
    minDate,
    maxDate,
    disabledDates,
    disabledAttribute
  };
  provide(contextKey$4, context);
  return context;
}
function useOrCreateBase(props) {
  return inject(contextKey$4, () => createBase(props), true);
}
function contextKey$3(slotKey) {
  return `__vc_slot_${slotKey}__`;
}
function provideSlots(slots, remap = {}) {
  Object.keys(slots).forEach((slotKey) => {
    provide(contextKey$3(remap[slotKey] ?? slotKey), slots[slotKey]);
  });
}
function useSlot(slotKey) {
  return inject(contextKey$3(slotKey), null);
}
const propsDef$1 = {
  ...propsDef$2,
  view: {
    type: String,
    default: "monthly",
    validator(value) {
      return ["daily", "weekly", "monthly"].includes(value);
    }
  },
  rows: {
    type: Number,
    default: 1
  },
  columns: {
    type: Number,
    default: 1
  },
  step: Number,
  titlePosition: {
    type: String,
    default: () => getDefault("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => getDefault("navVisibility")
  },
  showWeeknumbers: [Boolean, String],
  showIsoWeeknumbers: [Boolean, String],
  expanded: Boolean,
  borderless: Boolean,
  transparent: Boolean,
  initialPage: Object,
  initialPagePosition: { type: Number, default: 1 },
  minPage: Object,
  maxPage: Object,
  transition: String,
  attributes: Array,
  trimWeeks: Boolean,
  disablePageSwipe: Boolean
};
const emitsDef = [
  "dayclick",
  "daymouseenter",
  "daymouseleave",
  "dayfocusin",
  "dayfocusout",
  "daykeydown",
  "weeknumberclick",
  "transition-start",
  "transition-end",
  "did-move",
  "update:view",
  "update:pages"
];
const contextKey$2 = Symbol("__vc_calendar_context__");
function createCalendar(props, { slots, emit }) {
  const containerRef = ref(null);
  const focusedDay = ref(null);
  const focusableDay = ref((/* @__PURE__ */ new Date()).getDate());
  const inTransition = ref(false);
  const navPopoverId = ref(Symbol());
  const dayPopoverId = ref(Symbol());
  const _view = ref(props.view);
  const _pages = ref([]);
  const transitionName = ref("");
  let transitionPromise = null;
  let removeHandlers2 = null;
  provideSlots(slots);
  const {
    theme,
    color,
    displayMode,
    locale,
    masks: masks2,
    minDate,
    maxDate,
    disabledAttribute,
    disabledDates
  } = useOrCreateBase(props);
  const count = computed(() => props.rows * props.columns);
  const step = computed(() => props.step || count.value);
  const firstPage = computed(() => head_1(_pages.value) ?? null);
  const lastPage = computed(() => last_1(_pages.value) ?? null);
  const minPage = computed(
    () => props.minPage || (minDate.value ? getDateAddress(minDate.value) : null)
  );
  const maxPage = computed(
    () => props.maxPage || (maxDate.value ? getDateAddress(maxDate.value) : null)
  );
  const navVisibility = computed(() => props.navVisibility);
  const showWeeknumbers = computed(() => !!props.showWeeknumbers);
  const showIsoWeeknumbers = computed(() => !!props.showIsoWeeknumbers);
  const isMonthly = computed(() => _view.value === "monthly");
  const isWeekly = computed(() => _view.value === "weekly");
  const isDaily = computed(() => _view.value === "daily");
  const onTransitionBeforeEnter = () => {
    inTransition.value = true;
    emit("transition-start");
  };
  const onTransitionAfterEnter = () => {
    inTransition.value = false;
    emit("transition-end");
    if (transitionPromise) {
      transitionPromise.resolve(true);
      transitionPromise = null;
    }
  };
  const addPages$1 = (address, count2, view = _view.value) => {
    return addPages(address, count2, view, locale.value);
  };
  const getDateAddress = (date) => {
    return getPageAddressForDate(date, _view.value, locale.value);
  };
  const refreshDisabled = (day) => {
    if (!disabledAttribute.value || !attributeContext.value)
      return;
    day.isDisabled = attributeContext.value.cellExists(
      disabledAttribute.value.key,
      day.dayIndex
    );
  };
  const refreshFocusable = (day) => {
    day.isFocusable = day.inMonth && day.day === focusableDay.value;
  };
  const forDays = (pages, fn) => {
    for (const page of pages) {
      for (const day of page.days) {
        if (fn(day) === false)
          return;
      }
    }
  };
  const days = computed(
    () => _pages.value.reduce((result, page) => {
      result.push(...page.viewDays);
      return result;
    }, [])
  );
  const attributes = computed(() => {
    const result = [];
    (props.attributes || []).forEach((attr, i) => {
      if (!attr || !attr.dates)
        return;
      result.push(
        new Attribute(
          {
            ...attr,
            order: attr.order || 0
          },
          theme.value,
          locale.value
        )
      );
    });
    if (disabledAttribute.value) {
      result.push(disabledAttribute.value);
    }
    return result;
  });
  const hasAttributes = computed(() => arrayHasItems(attributes.value));
  const attributeContext = computed(() => {
    const ctx = new DateRangeContext();
    attributes.value.forEach((attr) => {
      attr.ranges.forEach((range) => {
        ctx.render(attr, range, days.value);
      });
    });
    return ctx;
  });
  const dayCells = computed(() => {
    return days.value.reduce((result, day) => {
      result[day.dayIndex] = { day, cells: [] };
      result[day.dayIndex].cells.push(...attributeContext.value.getCells(day));
      return result;
    }, {});
  });
  const getWeeknumberPosition = (column, columnFromEnd) => {
    const showWeeknumbers2 = props.showWeeknumbers || props.showIsoWeeknumbers;
    if (showWeeknumbers2 == null)
      return "";
    if (isBoolean_1(showWeeknumbers2)) {
      return showWeeknumbers2 ? "left" : "";
    }
    if (showWeeknumbers2.startsWith("right")) {
      return columnFromEnd > 1 ? "right" : showWeeknumbers2;
    }
    return column > 1 ? "left" : showWeeknumbers2;
  };
  const getPageForAttributes = () => {
    var _a, _b;
    if (!hasAttributes.value)
      return null;
    const attr = attributes.value.find((attr2) => attr2.pinPage) || attributes.value[0];
    if (!attr || !attr.hasRanges)
      return null;
    const [range] = attr.ranges;
    const date = ((_a = range.start) == null ? void 0 : _a.date) || ((_b = range.end) == null ? void 0 : _b.date);
    return date ? getDateAddress(date) : null;
  };
  const getDefaultInitialPage = () => {
    if (pageIsValid(firstPage.value))
      return firstPage.value;
    const page = getPageForAttributes();
    if (pageIsValid(page))
      return page;
    return getDateAddress(/* @__PURE__ */ new Date());
  };
  const getTargetPageRange = (page, opts = {}) => {
    const { view = _view.value, position = 1, force } = opts;
    const pagesToAdd = position > 0 ? 1 - position : -(count.value + position);
    let fromPage = addPages$1(page, pagesToAdd, view);
    let toPage = addPages$1(fromPage, count.value - 1, view);
    if (!force) {
      if (pageIsBeforePage(fromPage, minPage.value)) {
        fromPage = minPage.value;
      } else if (pageIsAfterPage(toPage, maxPage.value)) {
        fromPage = addPages$1(maxPage.value, 1 - count.value);
      }
      toPage = addPages$1(fromPage, count.value - 1);
    }
    return { fromPage, toPage };
  };
  const getPageTransition = (oldPage, newPage, defaultTransition = "") => {
    if (defaultTransition === "none" || defaultTransition === "fade")
      return defaultTransition;
    if ((oldPage == null ? void 0 : oldPage.view) !== (newPage == null ? void 0 : newPage.view))
      return "fade";
    const moveNext2 = pageIsAfterPage(newPage, oldPage);
    const movePrev2 = pageIsBeforePage(newPage, oldPage);
    if (!moveNext2 && !movePrev2) {
      return "fade";
    }
    if (defaultTransition === "slide-v") {
      return movePrev2 ? "slide-down" : "slide-up";
    }
    return movePrev2 ? "slide-right" : "slide-left";
  };
  const refreshPages = (opts = {}) => {
    return new Promise((resolve, reject) => {
      const { position = 1, force = false, transition } = opts;
      const page = pageIsValid(opts.page) ? opts.page : getDefaultInitialPage();
      const { fromPage } = getTargetPageRange(page, {
        position,
        force
      });
      const pages = [];
      for (let i = 0; i < count.value; i++) {
        const newPage = addPages$1(fromPage, i);
        const position2 = i + 1;
        const row = Math.ceil(position2 / props.columns);
        const rowFromEnd = props.rows - row + 1;
        const column = position2 % props.columns || props.columns;
        const columnFromEnd = props.columns - column + 1;
        const weeknumberPosition = getWeeknumberPosition(column, columnFromEnd);
        pages.push(
          locale.value.getPage({
            ...newPage,
            view: _view.value,
            titlePosition: props.titlePosition,
            trimWeeks: props.trimWeeks,
            position: position2,
            row,
            rowFromEnd,
            column,
            columnFromEnd,
            showWeeknumbers: showWeeknumbers.value,
            showIsoWeeknumbers: showIsoWeeknumbers.value,
            weeknumberPosition
          })
        );
      }
      transitionName.value = getPageTransition(
        _pages.value[0],
        pages[0],
        transition
      );
      _pages.value = pages;
      if (transitionName.value && transitionName.value !== "none") {
        transitionPromise = {
          resolve,
          reject
        };
      } else {
        resolve(true);
      }
    });
  };
  const targetBy = (pages) => {
    const fromPage = firstPage.value ?? getDateAddress(/* @__PURE__ */ new Date());
    return addPages$1(fromPage, pages);
  };
  const canMove = (target, opts = {}) => {
    const page = pageIsValid(target) ? target : getDateAddress(target);
    Object.assign(
      opts,
      getTargetPageRange(page, {
        ...opts,
        force: true
      })
    );
    const pagesInRange = pageRangeToArray(
      opts.fromPage,
      opts.toPage,
      _view.value,
      locale.value
    ).map((p) => pageIsBetweenPages(p, minPage.value, maxPage.value));
    return pagesInRange.some((val) => val);
  };
  const canMoveBy = (pages, opts = {}) => {
    return canMove(targetBy(pages), opts);
  };
  const canMovePrev = computed(() => canMoveBy(-step.value));
  const canMoveNext = computed(() => canMoveBy(step.value));
  const move = async (target, opts = {}) => {
    if (!opts.force && !canMove(target, opts))
      return false;
    if (opts.fromPage && !pageIsEqualToPage(opts.fromPage, firstPage.value)) {
      hidePopover({ id: navPopoverId.value, hideDelay: 0 });
      if (opts.view) {
        skipWatcher("view", 10);
        _view.value = opts.view;
      }
      await refreshPages({
        ...opts,
        page: opts.fromPage,
        position: 1,
        force: true
      });
      emit("did-move", _pages.value);
    }
    return true;
  };
  const moveBy = (pages, opts = {}) => {
    return move(targetBy(pages), opts);
  };
  const movePrev = () => {
    return moveBy(-step.value);
  };
  const moveNext = () => {
    return moveBy(step.value);
  };
  const tryFocusDate = (date) => {
    const inMonth = isMonthly.value ? ".in-month" : "";
    const daySelector = `.id-${locale.value.getDayId(date)}${inMonth}`;
    const selector = `${daySelector}.vc-focusable, ${daySelector} .vc-focusable`;
    const el = containerRef.value;
    if (el) {
      const focusableEl = el.querySelector(selector);
      if (focusableEl) {
        focusableEl.focus();
        return true;
      }
    }
    return false;
  };
  const focusDate = async (date, opts = {}) => {
    if (tryFocusDate(date))
      return true;
    await move(date, opts);
    return tryFocusDate(date);
  };
  const onDayClick = (day, event) => {
    focusableDay.value = day.day;
    emit("dayclick", day, event);
  };
  const onDayMouseenter = (day, event) => {
    emit("daymouseenter", day, event);
  };
  const onDayMouseleave = (day, event) => {
    emit("daymouseleave", day, event);
  };
  const onDayFocusin = (day, event) => {
    focusableDay.value = day.day;
    focusedDay.value = day;
    day.isFocused = true;
    emit("dayfocusin", day, event);
  };
  const onDayFocusout = (day, event) => {
    focusedDay.value = null;
    day.isFocused = false;
    emit("dayfocusout", day, event);
  };
  const onDayKeydown = (day, event) => {
    emit("daykeydown", day, event);
    const date = day.noonDate;
    let newDate = null;
    switch (event.key) {
      case "ArrowLeft": {
        newDate = addDays(date, -1);
        break;
      }
      case "ArrowRight": {
        newDate = addDays(date, 1);
        break;
      }
      case "ArrowUp": {
        newDate = addDays(date, -7);
        break;
      }
      case "ArrowDown": {
        newDate = addDays(date, 7);
        break;
      }
      case "Home": {
        newDate = addDays(date, -day.weekdayPosition + 1);
        break;
      }
      case "End": {
        newDate = addDays(date, day.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        if (event.altKey) {
          newDate = addYears(date, -1);
        } else {
          newDate = addMonths(date, -1);
        }
        break;
      }
      case "PageDown": {
        if (event.altKey) {
          newDate = addYears(date, 1);
        } else {
          newDate = addMonths(date, 1);
        }
        break;
      }
    }
    if (newDate) {
      event.preventDefault();
      focusDate(newDate).catch();
    }
  };
  const onKeydown = (event) => {
    const day = focusedDay.value;
    if (day != null) {
      onDayKeydown(day, event);
    }
  };
  const onWeeknumberClick = (week, event) => {
    emit("weeknumberclick", week, event);
  };
  refreshPages({
    page: props.initialPage,
    position: props.initialPagePosition
  });
  onMounted(() => {
    if (!props.disablePageSwipe && containerRef.value) {
      removeHandlers2 = addHorizontalSwipeHandler(
        containerRef.value,
        ({ toLeft = false, toRight = false }) => {
          if (toLeft) {
            moveNext();
          } else if (toRight) {
            movePrev();
          }
        },
        getDefault("touch")
      );
    }
  });
  onUnmounted(() => {
    _pages.value = [];
    if (removeHandlers2)
      removeHandlers2();
  });
  watch(
    () => locale.value,
    () => {
      refreshPages();
    }
  );
  watch(
    () => count.value,
    () => refreshPages()
  );
  watch(
    () => props.view,
    () => _view.value = props.view
  );
  watch(
    () => _view.value,
    () => {
      handleWatcher("view", () => {
        refreshPages();
      });
      emit("update:view", _view.value);
    }
  );
  watch(
    () => focusableDay.value,
    () => {
      forDays(_pages.value, (day) => refreshFocusable(day));
    }
  );
  watchEffect(() => {
    emit("update:pages", _pages.value);
    forDays(_pages.value, (day) => {
      refreshDisabled(day);
      refreshFocusable(day);
    });
  });
  const context = {
    emit,
    containerRef,
    focusedDay,
    inTransition,
    navPopoverId,
    dayPopoverId,
    view: _view,
    pages: _pages,
    transitionName,
    theme,
    color,
    displayMode,
    locale,
    masks: masks2,
    attributes,
    disabledAttribute,
    disabledDates,
    attributeContext,
    days,
    dayCells,
    count,
    step,
    firstPage,
    lastPage,
    canMovePrev,
    canMoveNext,
    minPage,
    maxPage,
    isMonthly,
    isWeekly,
    isDaily,
    navVisibility,
    showWeeknumbers,
    showIsoWeeknumbers,
    getDateAddress,
    canMove,
    canMoveBy,
    move,
    moveBy,
    movePrev,
    moveNext,
    onTransitionBeforeEnter,
    onTransitionAfterEnter,
    tryFocusDate,
    focusDate,
    onKeydown,
    onDayKeydown,
    onDayClick,
    onDayMouseenter,
    onDayMouseleave,
    onDayFocusin,
    onDayFocusout,
    onWeeknumberClick
  };
  provide(contextKey$2, context);
  return context;
}
function useCalendar() {
  const context = inject(contextKey$2);
  if (context)
    return context;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const _sfc_main$k = defineComponent({
  inheritAttrs: false,
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  props: {
    id: { type: [Number, String, Symbol], required: true },
    showDelay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 110 },
    boundarySelector: { type: String }
  },
  setup(props, { emit }) {
    let timeout = void 0;
    const popoverRef = ref();
    let resizeObserver = null;
    let popper = null;
    const state2 = reactive({
      isVisible: false,
      target: null,
      data: null,
      transition: "slide-fade",
      placement: "bottom",
      direction: "",
      positionFixed: false,
      modifiers: [],
      isInteractive: true,
      visibility: "click",
      isHovered: false,
      isFocused: false,
      autoHide: false,
      force: false
    });
    function updateDirection(placement) {
      if (placement)
        state2.direction = placement.split("-")[0];
    }
    function onPopperUpdate({ placement, options }) {
      updateDirection(placement || (options == null ? void 0 : options.placement));
    }
    const popperOptions = computed(() => {
      return {
        placement: state2.placement,
        strategy: state2.positionFixed ? "fixed" : "absolute",
        boundary: "",
        modifiers: [
          {
            name: "onUpdate",
            enabled: true,
            phase: "afterWrite",
            fn: onPopperUpdate
          },
          ...state2.modifiers || []
        ],
        onFirstUpdate: onPopperUpdate
      };
    });
    const alignment = computed(() => {
      const isLeftRight = state2.direction === "left" || state2.direction === "right";
      let alignment2 = "";
      if (state2.placement) {
        const parts = state2.placement.split("-");
        if (parts.length > 1)
          alignment2 = parts[1];
      }
      if (["start", "top", "left"].includes(alignment2)) {
        return isLeftRight ? "top" : "left";
      }
      if (["end", "bottom", "right"].includes(alignment2)) {
        return isLeftRight ? "bottom" : "right";
      }
      return isLeftRight ? "middle" : "center";
    });
    function destroyPopper() {
      if (popper) {
        popper.destroy();
        popper = null;
      }
    }
    function setupPopper() {
      nextTick(() => {
        const el = resolveEl(state2.target);
        if (!el || !popoverRef.value)
          return;
        if (popper && popper.state.elements.reference !== el) {
          destroyPopper();
        }
        if (!popper) {
          popper = createPopper(
            el,
            popoverRef.value,
            popperOptions.value
          );
        } else {
          popper.update();
        }
      });
    }
    function updateState(newState) {
      Object.assign(state2, omit(newState, "force"));
    }
    function setTimer(delay, fn) {
      clearTimeout(timeout);
      if (delay > 0) {
        timeout = setTimeout(fn, delay);
      } else {
        fn();
      }
    }
    function isCurrentTarget(target) {
      if (!target || !popper)
        return false;
      const el = resolveEl(target);
      return el === popper.state.elements.reference;
    }
    async function show(opts = {}) {
      if (state2.force)
        return;
      if (opts.force)
        state2.force = true;
      setTimer(opts.showDelay ?? props.showDelay, () => {
        if (state2.isVisible) {
          state2.force = false;
        }
        updateState({
          ...opts,
          isVisible: true
        });
        setupPopper();
      });
    }
    function hide(opts = {}) {
      if (!popper)
        return;
      if (opts.target && !isCurrentTarget(opts.target))
        return;
      if (state2.force)
        return;
      if (opts.force)
        state2.force = true;
      setTimer(opts.hideDelay ?? props.hideDelay, () => {
        if (!state2.isVisible)
          state2.force = false;
        state2.isVisible = false;
      });
    }
    function toggle(opts = {}) {
      if (opts.target == null)
        return;
      if (state2.isVisible && isCurrentTarget(opts.target)) {
        hide(opts);
      } else {
        show(opts);
      }
    }
    function onDocumentClick(e) {
      if (!popper)
        return;
      const popperRef = popper.state.elements.reference;
      if (!popoverRef.value || !popperRef) {
        return;
      }
      const target = e.target;
      if (elementContains(popoverRef.value, target) || elementContains(popperRef, target)) {
        return;
      }
      hide({ force: true });
    }
    function onDocumentKeydown(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        hide();
      }
    }
    function onDocumentShowPopover({ detail }) {
      if (!detail.id || detail.id !== props.id)
        return;
      show(detail);
    }
    function onDocumentHidePopover({ detail }) {
      if (!detail.id || detail.id !== props.id)
        return;
      hide(detail);
    }
    function onDocumentTogglePopover({ detail }) {
      if (!detail.id || detail.id !== props.id)
        return;
      toggle(detail);
    }
    function addEvents() {
      on(document, "keydown", onDocumentKeydown);
      on(document, "click", onDocumentClick);
      on(document, "show-popover", onDocumentShowPopover);
      on(document, "hide-popover", onDocumentHidePopover);
      on(document, "toggle-popover", onDocumentTogglePopover);
    }
    function removeEvents() {
      off(document, "keydown", onDocumentKeydown);
      off(document, "click", onDocumentClick);
      off(document, "show-popover", onDocumentShowPopover);
      off(document, "hide-popover", onDocumentHidePopover);
      off(document, "toggle-popover", onDocumentTogglePopover);
    }
    function beforeEnter(el) {
      emit("before-show", el);
    }
    function afterEnter(el) {
      state2.force = false;
      emit("after-show", el);
    }
    function beforeLeave(el) {
      emit("before-hide", el);
    }
    function afterLeave(el) {
      state2.force = false;
      destroyPopper();
      emit("after-hide", el);
    }
    function onClick(e) {
      e.stopPropagation();
    }
    function onMouseOver() {
      state2.isHovered = true;
      if (state2.isInteractive && ["hover", "hover-focus"].includes(state2.visibility)) {
        show();
      }
    }
    function onMouseLeave() {
      state2.isHovered = false;
      if (!popper)
        return;
      const popperRef = popper.state.elements.reference;
      if (state2.autoHide && !state2.isFocused && (!popperRef || popperRef !== document.activeElement) && ["hover", "hover-focus"].includes(state2.visibility)) {
        hide();
      }
    }
    function onFocusIn() {
      state2.isFocused = true;
      if (state2.isInteractive && ["focus", "hover-focus"].includes(state2.visibility)) {
        show();
      }
    }
    function onFocusOut(e) {
      if (["focus", "hover-focus"].includes(state2.visibility) && (!e.relatedTarget || !elementContains(popoverRef.value, e.relatedTarget))) {
        state2.isFocused = false;
        if (!state2.isHovered && state2.autoHide)
          hide();
      }
    }
    function cleanupRO() {
      if (resizeObserver != null) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    }
    watch(
      () => popoverRef.value,
      (val) => {
        cleanupRO();
        if (!val)
          return;
        resizeObserver = new ResizeObserver(() => {
          if (popper)
            popper.update();
        });
        resizeObserver.observe(val);
      }
    );
    watch(() => state2.placement, updateDirection, {
      immediate: true
    });
    onMounted(() => {
      addEvents();
    });
    onUnmounted(() => {
      destroyPopper();
      cleanupRO();
      removeEvents();
    });
    return {
      ...toRefs(state2),
      popoverRef,
      alignment,
      hide,
      setupPopper,
      beforeEnter,
      afterEnter,
      beforeLeave,
      afterLeave,
      onClick,
      onMouseOver,
      onMouseLeave,
      onFocusIn,
      onFocusOut
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-popover-content-wrapper", { "is-interactive": _ctx.isInteractive }]),
    ref: "popoverRef",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
    onMouseover: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseOver && _ctx.onMouseOver(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
    onFocusin: _cache[3] || (_cache[3] = (...args) => _ctx.onFocusIn && _ctx.onFocusIn(...args)),
    onFocusout: _cache[4] || (_cache[4] = (...args) => _ctx.onFocusOut && _ctx.onFocusOut(...args))
  }, [
    createVNode(Transition, {
      name: `vc-${_ctx.transition}`,
      appear: "",
      onBeforeEnter: _ctx.beforeEnter,
      onAfterEnter: _ctx.afterEnter,
      onBeforeLeave: _ctx.beforeLeave,
      onAfterLeave: _ctx.afterLeave
    }, {
      default: withCtx(() => [
        _ctx.isVisible ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${_ctx.direction}`
        }, _ctx.$attrs), [
          renderSlot(_ctx.$slots, "default", {
            direction: _ctx.direction,
            alignment: _ctx.alignment,
            data: _ctx.data,
            hide: _ctx.hide
          }, () => [
            createTextVNode(toDisplayString(_ctx.data), 1)
          ]),
          createBaseVNode("span", {
            class: normalizeClass([
              "vc-popover-caret",
              `direction-${_ctx.direction}`,
              `align-${_ctx.alignment}`
            ])
          }, null, 2)
        ], 16)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const Popover = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$7]]);
const _hoisted_1$c = { class: "vc-day-popover-row" };
const _hoisted_2$b = {
  key: 0,
  class: "vc-day-popover-row-indicator"
};
const _hoisted_3$9 = { class: "vc-day-popover-row-label" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "PopoverRow",
  props: {
    attribute: null
  },
  setup(__props) {
    const props = __props;
    const indicator = computed(() => {
      const { content, highlight, dot, bar, popover } = props.attribute;
      if (popover && popover.hideIndicator)
        return null;
      if (content) {
        return {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${content.base.color}`
        };
      }
      if (highlight) {
        return {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${highlight.base.color}`
        };
      }
      if (dot) {
        return {
          class: `vc-dot vc-attr vc-${dot.base.color}`
        };
      }
      if (bar) {
        return {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${bar.base.color}`
        };
      }
      return null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        unref(indicator) ? (openBlock(), createElementBlock("div", _hoisted_2$b, [
          createBaseVNode("span", {
            class: normalizeClass(unref(indicator).class)
          }, null, 2)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$9, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.attribute.popover ? __props.attribute.popover.label : "No content provided"), 1)
          ])
        ])
      ]);
    };
  }
});
const __default__$3 = {
  inheritAttrs: false
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(__props) {
    const props = __props;
    const slot = useSlot(props.name);
    return (_ctx, _cache) => {
      return unref(slot) ? (openBlock(), createBlock(resolveDynamicComponent(unref(slot)), normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs)), null, 16)) : renderSlot(_ctx.$slots, "default", { key: 1 });
    };
  }
});
const _hoisted_1$b = { class: "vc-day-popover-container" };
const _hoisted_2$a = {
  key: 0,
  class: "vc-day-popover-header"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CalendarDayPopover",
  setup(__props) {
    const { dayPopoverId, displayMode, color, masks: masks2, locale } = useCalendar();
    function format(date, mask) {
      return locale.value.formatDate(date, mask);
    }
    function dayTitle(day) {
      return locale.value.formatDate(day.date, masks2.value.dayPopover);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Popover, {
        id: unref(dayPopoverId),
        class: normalizeClass([`vc-${unref(color)}`, `vc-${unref(displayMode)}`])
      }, {
        default: withCtx(({ data: { day, attributes }, hide }) => [
          createVNode(_sfc_main$i, {
            name: "day-popover",
            day,
            "day-title": dayTitle(day),
            attributes,
            format,
            masks: unref(masks2),
            hide
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$b, [
                unref(masks2).dayPopover ? (openBlock(), createElementBlock("div", _hoisted_2$a, toDisplayString(dayTitle(day)), 1)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(attributes, (attribute) => {
                  return openBlock(), createBlock(_sfc_main$j, {
                    key: attribute.key,
                    attribute
                  }, null, 8, ["attribute"]);
                }), 128))
              ])
            ]),
            _: 2
          }, 1032, ["day", "day-title", "attributes", "masks", "hide"])
        ]),
        _: 1
      }, 8, ["id", "class"]);
    };
  }
});
const _sfc_main$g = {};
const _hoisted_1$a = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("polyline", { points: "9 18 15 12 9 6" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$9
];
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$8);
}
const IconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$6]]);
const _sfc_main$f = {};
const _hoisted_1$9 = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("polyline", { points: "15 18 9 12 15 6" }, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$8
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$7);
}
const IconChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$5]]);
const _sfc_main$e = {};
const _hoisted_1$8 = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("polyline", { points: "6 9 12 15 18 9" }, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$7
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$6);
}
const IconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$4]]);
const _sfc_main$d = {};
const _hoisted_1$7 = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$6
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$5);
}
const IconClock = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$3]]);
const icons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClock
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: true },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(__props) {
    const props = __props;
    const width = computed(() => props.width || props.size);
    const height = computed(() => props.height || props.size);
    const icon = computed(() => icons[`Icon${props.name}`]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(icon)), {
        width: unref(width),
        height: unref(height),
        class: "vc-base-icon"
      }, null, 8, ["width", "height"]);
    };
  }
});
const _hoisted_1$6 = ["disabled"];
const _hoisted_2$5 = {
  key: 1,
  class: "vc-title-wrapper"
};
const _hoisted_3$4 = {
  type: "button",
  class: "vc-title"
};
const _hoisted_4$3 = ["disabled"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeader",
  props: {
    page: null,
    layout: null,
    isLg: { type: Boolean },
    isXl: { type: Boolean },
    is2xl: { type: Boolean },
    hideTitle: { type: Boolean },
    hideArrows: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const {
      navPopoverId,
      navVisibility,
      canMovePrev,
      movePrev,
      canMoveNext,
      moveNext
    } = useCalendar();
    const navPlacement = computed(() => {
      switch (props.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    });
    const navPopoverOptions = computed(() => {
      const { page } = props;
      return {
        id: navPopoverId.value,
        visibility: navVisibility.value,
        placement: navPlacement.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page },
        isInteractive: true
      };
    });
    const titleLeft = computed(() => props.page.titlePosition.includes("left"));
    const titleRight = computed(() => props.page.titlePosition.includes("right"));
    const layout_ = computed(() => {
      if (props.layout)
        return props.layout;
      if (titleLeft.value)
        return "tu-pn";
      if (titleRight.value)
        return "pn-tu";
      return "p-tu-n;";
    });
    const show = computed(() => {
      return {
        prev: layout_.value.includes("p") && !props.hideArrows,
        title: layout_.value.includes("t") && !props.hideTitle,
        next: layout_.value.includes("n") && !props.hideArrows
      };
    });
    const gridStyle = computed(() => {
      const gridTemplateColumns = layout_.value.split("").map((l) => {
        switch (l) {
          case "p":
            return "[prev] auto";
          case "n":
            return "[next] auto";
          case "t":
            return "[title] auto";
          case "-":
            return "1fr";
          default:
            return "";
        }
      }).join(" ");
      return { gridTemplateColumns };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vc-header", { "is-lg": __props.isLg, "is-xl": __props.isXl, "is-2xl": __props.is2xl }]),
        style: normalizeStyle(unref(gridStyle))
      }, [
        unref(show).prev ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: "vc-arrow vc-prev vc-focus",
          disabled: !unref(canMovePrev),
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(movePrev) && unref(movePrev)(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys(
            //@ts-ignore
            (...args) => unref(movePrev) && unref(movePrev)(...args),
            ["space", "enter"]
          ))
        }, [
          createVNode(_sfc_main$i, {
            name: "header-prev-button",
            disabled: !unref(canMovePrev)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$c, {
                name: "ChevronLeft",
                size: "24"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, _hoisted_1$6)) : createCommentVNode("", true),
        unref(show).title ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          createVNode(_sfc_main$i, { name: "header-title-wrapper" }, {
            default: withCtx(() => [
              withDirectives((openBlock(), createElementBlock("button", _hoisted_3$4, [
                createVNode(_sfc_main$i, {
                  name: "header-title",
                  title: __props.page.title
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(__props.page.title), 1)
                  ]),
                  _: 1
                }, 8, ["title"])
              ])), [
                [unref(popoverDirective), unref(navPopoverOptions)]
              ])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(show).next ? (openBlock(), createElementBlock("button", {
          key: 2,
          type: "button",
          class: "vc-arrow vc-next vc-focus",
          disabled: !unref(canMoveNext),
          onClick: _cache[2] || (_cache[2] = //@ts-ignore
          (...args) => unref(moveNext) && unref(moveNext)(...args)),
          onKeydown: _cache[3] || (_cache[3] = withKeys(
            //@ts-ignore
            (...args) => unref(moveNext) && unref(moveNext)(...args),
            ["space", "enter"]
          ))
        }, [
          createVNode(_sfc_main$i, {
            name: "header-next-button",
            disabled: !unref(canMoveNext)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$c, {
                name: "ChevronRight",
                size: "24"
              })
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 40, _hoisted_4$3)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
const contextKey$1 = Symbol("__vc_page_context__");
function createPage(page) {
  const { locale, getDateAddress, canMove } = useCalendar();
  function getMonthItems(year, mask) {
    const { month: thisMonth, year: thisYear } = getDateAddress(/* @__PURE__ */ new Date());
    return getMonthDates().map((d, i) => {
      const month = i + 1;
      return {
        month,
        year,
        id: getPageId(month, year),
        label: locale.value.formatDate(d, mask),
        ariaLabel: locale.value.formatDate(d, "MMMM"),
        isActive: month === page.value.month && year === page.value.year,
        isCurrent: month === thisMonth && year === thisYear,
        isDisabled: !canMove(
          { month, year },
          { position: page.value.position }
        )
      };
    });
  }
  function getYearItems(startYear, endYear) {
    const { year: thisYear } = getDateAddress(/* @__PURE__ */ new Date());
    const { position } = page.value;
    const items = [];
    for (let year = startYear; year <= endYear; year += 1) {
      const enabled = [...Array(12).keys()].some(
        (m) => canMove({ month: m + 1, year }, { position })
      );
      items.push({
        year,
        id: year.toString(),
        label: year.toString(),
        ariaLabel: year.toString(),
        isActive: year === page.value.year,
        isCurrent: year === thisYear,
        isDisabled: !enabled
      });
    }
    return items;
  }
  const context = { page, getMonthItems, getYearItems };
  provide(contextKey$1, context);
  return context;
}
function usePage() {
  const context = inject(contextKey$1);
  if (context)
    return context;
  throw new Error(
    "Page context missing. Please verify this component is nested within a valid context provider."
  );
}
const _hoisted_1$5 = { class: "vc-nav-header" };
const _hoisted_2$4 = ["disabled"];
const _hoisted_3$3 = ["disabled"];
const _hoisted_4$2 = { class: "vc-nav-items" };
const _hoisted_5$2 = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CalendarNav",
  setup(__props) {
    const { masks: masks2, move } = useCalendar();
    const { page, getMonthItems, getYearItems } = usePage();
    const monthMode = ref(true);
    const yearGroupCount = 12;
    const selectedYear = ref(page.value.year);
    const selectedYearGroup = ref(getYearGroupIndex(page.value.year));
    const navContainer = ref(null);
    function focusFirstItem() {
      setTimeout(() => {
        if (navContainer.value == null)
          return;
        const focusableEl = navContainer.value.querySelector(
          ".vc-nav-item:not(:disabled)"
        );
        if (focusableEl) {
          focusableEl.focus();
        }
      }, 10);
    }
    function getYearGroupIndex(year) {
      return Math.floor(year / yearGroupCount);
    }
    function toggleMode() {
      monthMode.value = !monthMode.value;
    }
    function getStartYear(groupIndex) {
      return groupIndex * yearGroupCount;
    }
    function getEndYear(groupIndex) {
      return yearGroupCount * (groupIndex + 1) - 1;
    }
    function movePrev() {
      if (!prevItemsEnabled.value)
        return;
      if (monthMode.value) {
        movePrevYear();
      }
      movePrevYearGroup();
    }
    function moveNext() {
      if (!nextItemsEnabled.value)
        return;
      if (monthMode.value) {
        moveNextYear();
      }
      moveNextYearGroup();
    }
    function movePrevYear() {
      selectedYear.value--;
    }
    function moveNextYear() {
      selectedYear.value++;
    }
    function movePrevYearGroup() {
      selectedYearGroup.value--;
    }
    function moveNextYearGroup() {
      selectedYearGroup.value++;
    }
    const monthItems = computed(
      () => getMonthItems(selectedYear.value, masks2.value.navMonths).map((item) => ({
        ...item,
        click: () => move(
          { month: item.month, year: item.year },
          { position: page.value.position }
        )
      }))
    );
    const prevMonthItems = computed(
      () => getMonthItems(selectedYear.value - 1, masks2.value.navMonths)
    );
    const prevMonthItemsEnabled = computed(
      () => prevMonthItems.value.some((i) => !i.isDisabled)
    );
    const nextMonthItems = computed(
      () => getMonthItems(selectedYear.value + 1, masks2.value.navMonths)
    );
    const nextMonthItemsEnabled = computed(
      () => nextMonthItems.value.some((i) => !i.isDisabled)
    );
    const yearItems = computed(
      () => getYearItems(
        getStartYear(selectedYearGroup.value),
        getEndYear(selectedYearGroup.value)
      ).map((item) => {
        return {
          ...item,
          click: () => {
            selectedYear.value = item.year;
            monthMode.value = true;
            focusFirstItem();
          }
        };
      })
    );
    const prevYearItems = computed(
      () => getYearItems(
        getStartYear(selectedYearGroup.value - 1),
        getEndYear(selectedYearGroup.value - 1)
      )
    );
    const prevYearItemsEnabled = computed(
      () => prevYearItems.value.some((i) => !i.isDisabled)
    );
    const nextYearItems = computed(
      () => getYearItems(
        getStartYear(selectedYearGroup.value + 1),
        getEndYear(selectedYearGroup.value + 1)
      )
    );
    const nextYearItemsEnabled = computed(
      () => nextYearItems.value.some((i) => !i.isDisabled)
    );
    const activeItems = computed(
      () => monthMode.value ? monthItems.value : yearItems.value
    );
    const prevItemsEnabled = computed(
      () => monthMode.value ? prevMonthItemsEnabled.value : prevYearItemsEnabled.value
    );
    const nextItemsEnabled = computed(
      () => monthMode.value ? nextMonthItemsEnabled.value : nextYearItemsEnabled.value
    );
    const firstYear = computed(() => head_1(yearItems.value.map((i) => i.year)));
    const lastYear = computed(() => last_1(yearItems.value.map((i) => i.year)));
    const title2 = computed(() => {
      return monthMode.value ? selectedYear.value : `${firstYear.value} - ${lastYear.value}`;
    });
    watchEffect(() => {
      selectedYear.value = page.value.year;
      focusFirstItem();
    });
    watch(
      () => selectedYear.value,
      (val) => selectedYearGroup.value = getYearGroupIndex(val)
    );
    onMounted(() => focusFirstItem());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vc-nav-container",
        ref_key: "navContainer",
        ref: navContainer
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("button", {
            type: "button",
            class: "vc-nav-arrow is-left vc-focus",
            disabled: !unref(prevItemsEnabled),
            onClick: movePrev,
            onKeydown: _cache[0] || (_cache[0] = (e) => unref(onSpaceOrEnter)(e, movePrev))
          }, [
            createVNode(_sfc_main$i, {
              name: "nav-prev-button",
              move: movePrev,
              disabled: !unref(prevItemsEnabled)
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$c, {
                  name: "ChevronLeft",
                  width: "22px",
                  height: "24px"
                })
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 40, _hoisted_2$4),
          createBaseVNode("button", {
            type: "button",
            class: "vc-nav-title vc-focus",
            onClick: toggleMode,
            onKeydown: _cache[1] || (_cache[1] = (e) => unref(onSpaceOrEnter)(e, toggleMode))
          }, toDisplayString(unref(title2)), 33),
          createBaseVNode("button", {
            type: "button",
            class: "vc-nav-arrow is-right vc-focus",
            disabled: !unref(nextItemsEnabled),
            onClick: moveNext,
            onKeydown: _cache[2] || (_cache[2] = (e) => unref(onSpaceOrEnter)(e, moveNext))
          }, [
            createVNode(_sfc_main$i, {
              name: "nav-next-button",
              move: moveNext,
              disabled: !unref(nextItemsEnabled)
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$c, {
                  name: "ChevronRight",
                  width: "22px",
                  height: "24px"
                })
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 40, _hoisted_3$3)
        ]),
        createBaseVNode("div", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(activeItems), (item) => {
            return openBlock(), createElementBlock("button", {
              key: item.label,
              type: "button",
              "data-id": item.id,
              "aria-label": item.ariaLabel,
              class: normalizeClass(["vc-nav-item vc-focus", [
                item.isActive ? "is-active" : item.isCurrent ? "is-current" : ""
              ]]),
              disabled: item.isDisabled,
              onClick: item.click,
              onKeydown: (e) => unref(onSpaceOrEnter)(e, item.click)
            }, toDisplayString(item.label), 43, _hoisted_5$2);
          }), 128))
        ])
      ], 512);
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CalendarPageProvider",
  props: {
    page: null
  },
  setup(__props) {
    const props = __props;
    createPage(toRef(props, "page"));
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CalendarNavPopover",
  setup(__props) {
    const { navPopoverId, color, displayMode } = useCalendar();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Popover, {
        id: unref(navPopoverId),
        class: normalizeClass(["vc-nav-popover-container", `vc-${unref(color)}`, `vc-${unref(displayMode)}`])
      }, {
        default: withCtx(({ data: data2 }) => [
          createVNode(_sfc_main$9, {
            page: data2.page
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$i, { name: "nav" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a)
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1032, ["page"])
        ]),
        _: 1
      }, 8, ["id", "class"]);
    };
  }
});
const _sfc_main$7 = defineComponent({
  directives: { popover: popoverDirective },
  components: { CalendarSlot: _sfc_main$i },
  props: {
    day: { type: Object, required: true }
  },
  setup(props) {
    const {
      locale,
      theme,
      attributeContext,
      dayPopoverId,
      onDayClick,
      onDayMouseenter,
      onDayMouseleave,
      onDayFocusin,
      onDayFocusout,
      onDayKeydown
    } = useCalendar();
    const day = computed(() => props.day);
    const attributeCells = computed(() => {
      return attributeContext.value.getCells(day.value);
    });
    const attributes = computed(
      () => attributeCells.value.map((cell) => cell.data)
    );
    const attributedDay = computed(() => {
      return {
        ...day.value,
        attributes: attributes.value,
        attributeCells: attributeCells.value
      };
    });
    function processPopover({ data: attribute }, { popovers: popovers2 }) {
      const { key, customData, popover } = attribute;
      if (!popover)
        return;
      const resolvedPopover = defaults_1(
        {
          key,
          customData,
          attribute
        },
        { ...popover },
        {
          visibility: popover.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !popover.label
        }
      );
      popovers2.splice(0, 0, resolvedPopover);
    }
    const glyphs = computed(() => {
      const result = {
        ...theme.value.prepareRender({}),
        popovers: []
      };
      attributeCells.value.forEach((cell) => {
        theme.value.render(cell, result);
        processPopover(cell, result);
      });
      return result;
    });
    const highlights = computed(() => glyphs.value.highlights);
    const hasHighlights = computed(() => !!arrayHasItems(highlights.value));
    const content = computed(() => glyphs.value.content);
    const dots = computed(() => glyphs.value.dots);
    const hasDots = computed(() => !!arrayHasItems(dots.value));
    const bars = computed(() => glyphs.value.bars);
    const hasBars = computed(() => !!arrayHasItems(bars.value));
    const popovers = computed(() => glyphs.value.popovers);
    const popoverAttrs = computed(
      () => popovers.value.map((p) => p.attribute)
    );
    const dayContentSlot = useSlot("day-content");
    const dayClasses = computed(() => {
      return [
        "vc-day",
        ...day.value.classes,
        { "vc-day-box-center-center": !dayContentSlot },
        { "is-not-in-month": !props.day.inMonth }
      ];
    });
    const dayContentProps = computed(() => {
      let tabindex;
      if (day.value.isFocusable) {
        tabindex = "0";
      } else {
        tabindex = "-1";
      }
      const classes = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": day.value.isDisabled },
        get_1(last_1(highlights.value), "contentClass"),
        get_1(last_1(content.value), "class") || ""
      ];
      const style = {
        ...get_1(last_1(highlights.value), "contentStyle"),
        ...get_1(last_1(content.value), "style")
      };
      return {
        class: classes,
        style,
        tabindex,
        "aria-label": day.value.ariaLabel,
        "aria-disabled": day.value.isDisabled ? true : false,
        role: "button"
      };
    });
    const dayContentEvents = computed(() => {
      return {
        click(event) {
          onDayClick(attributedDay.value, event);
        },
        mouseenter(event) {
          onDayMouseenter(attributedDay.value, event);
        },
        mouseleave(event) {
          onDayMouseleave(attributedDay.value, event);
        },
        focusin(event) {
          onDayFocusin(attributedDay.value, event);
        },
        focusout(event) {
          onDayFocusout(attributedDay.value, event);
        },
        keydown(event) {
          onDayKeydown(attributedDay.value, event);
        }
      };
    });
    const dayPopover2 = computed(() => {
      if (!arrayHasItems(popovers.value))
        return null;
      return defaults_1(
        {
          id: dayPopoverId.value,
          data: { day, attributes: popoverAttrs.value }
        },
        ...popovers.value
      );
    });
    return {
      attributes,
      attributeCells,
      bars,
      dayClasses,
      dayContentProps,
      dayContentEvents,
      dayPopover: dayPopover2,
      glyphs,
      dots,
      hasDots,
      hasBars,
      highlights,
      hasHighlights,
      locale,
      popovers
    };
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "vc-highlights vc-day-layer"
};
const _hoisted_2$3 = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
};
const _hoisted_3$2 = { class: "vc-dots" };
const _hoisted_4$1 = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
};
const _hoisted_5$1 = { class: "vc-bars" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CalendarSlot = resolveComponent("CalendarSlot");
  const _directive_popover = resolveDirective("popover");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.dayClasses)
  }, [
    _ctx.hasHighlights ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.highlights, ({ key, wrapperClass, class: bgClass, style }) => {
        return openBlock(), createElementBlock("div", {
          key,
          class: normalizeClass(wrapperClass)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(bgClass),
            style: normalizeStyle(style)
          }, null, 6)
        ], 2);
      }), 128))
    ])) : createCommentVNode("", true),
    createVNode(_component_CalendarSlot, {
      name: "day-content",
      day: _ctx.day,
      attributes: _ctx.attributes,
      "attribute-cells": _ctx.attributeCells,
      dayProps: _ctx.dayContentProps,
      dayEvents: _ctx.dayContentEvents,
      locale: _ctx.locale
    }, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", mergeProps(_ctx.dayContentProps, toHandlers(_ctx.dayContentEvents, true)), [
          createTextVNode(toDisplayString(_ctx.day.label), 1)
        ], 16)), [
          [_directive_popover, _ctx.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    _ctx.hasDots ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dots, ({ key, class: bgClass, style }) => {
          return openBlock(), createElementBlock("span", {
            key,
            class: normalizeClass(bgClass),
            style: normalizeStyle(style)
          }, null, 6);
        }), 128))
      ])
    ])) : createCommentVNode("", true),
    _ctx.hasBars ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
      createBaseVNode("div", _hoisted_5$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.bars, ({ key, class: bgClass, style }) => {
          return openBlock(), createElementBlock("span", {
            key,
            class: normalizeClass(bgClass),
            style: normalizeStyle(style)
          }, null, 6);
        }), 128))
      ])
    ])) : createCommentVNode("", true)
  ], 2);
}
const CalendarDay = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$2]]);
const _hoisted_1$3 = { class: "vc-weekdays" };
const _hoisted_2$2 = ["onClick"];
const __default__$2 = {
  inheritAttrs: false
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  __name: "CalendarPage",
  setup(__props) {
    const { page } = usePage();
    const { onWeeknumberClick } = useCalendar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          "vc-pane",
          `row-${unref(page).row}`,
          `row-from-end-${unref(page).rowFromEnd}`,
          `column-${unref(page).column}`,
          `column-from-end-${unref(page).columnFromEnd}`
        ]),
        ref: "pane"
      }, [
        createVNode(_sfc_main$b, {
          page: unref(page),
          "is-lg": "",
          "hide-arrows": ""
        }, null, 8, ["page"]),
        createBaseVNode("div", {
          class: normalizeClass(["vc-weeks", {
            [`vc-show-weeknumbers-${unref(page).weeknumberPosition}`]: unref(page).weeknumberPosition
          }])
        }, [
          createBaseVNode("div", _hoisted_1$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(page).weekdays, ({ weekday, label }, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(`vc-weekday vc-weekday-${weekday}`)
              }, toDisplayString(label), 3);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(page).viewWeeks, (week) => {
            return openBlock(), createElementBlock("div", {
              key: `weeknumber-${week.weeknumber}`,
              class: "vc-week"
            }, [
              unref(page).weeknumberPosition ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["vc-weeknumber", `is-${unref(page).weeknumberPosition}`])
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(["vc-weeknumber-content"]),
                  onClick: ($event) => unref(onWeeknumberClick)(week, $event)
                }, toDisplayString(week.weeknumberDisplay), 9, _hoisted_2$2)
              ], 2)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(week.days, (day) => {
                return openBlock(), createBlock(CalendarDay, {
                  key: day.id,
                  day
                }, null, 8, ["day"]);
              }), 128))
            ]);
          }), 128))
        ], 2)
      ], 2);
    };
  }
});
const _sfc_main$5 = defineComponent({
  components: {
    CalendarHeader: _sfc_main$b,
    CalendarPage: _sfc_main$6,
    CalendarNavPopover: _sfc_main$8,
    CalendarDayPopover: _sfc_main$h,
    CalendarPageProvider: _sfc_main$9,
    CalendarSlot: _sfc_main$i
  },
  props: propsDef$1,
  emit: emitsDef,
  setup(props, { emit, slots }) {
    return createCalendar(props, { emit, slots });
  }
});
const _hoisted_1$2 = { class: "vc-pane-header-wrapper" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CalendarHeader = resolveComponent("CalendarHeader");
  const _component_CalendarPage = resolveComponent("CalendarPage");
  const _component_CalendarSlot = resolveComponent("CalendarSlot");
  const _component_CalendarPageProvider = resolveComponent("CalendarPageProvider");
  const _component_CalendarDayPopover = resolveComponent("CalendarDayPopover");
  const _component_CalendarNavPopover = resolveComponent("CalendarNavPopover");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", mergeProps({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, _ctx.$attrs, {
      class: [
        "vc-container",
        `vc-${_ctx.view}`,
        `vc-${_ctx.color}`,
        `vc-${_ctx.displayMode}`,
        {
          "vc-expanded": _ctx.expanded,
          "vc-bordered": !_ctx.borderless,
          "vc-transparent": _ctx.transparent
        }
      ],
      onMouseup: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      createBaseVNode("div", {
        class: normalizeClass(["vc-pane-container", { "in-transition": _ctx.inTransition }])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          _ctx.firstPage ? (openBlock(), createBlock(_component_CalendarHeader, {
            key: 0,
            page: _ctx.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : createCommentVNode("", true)
        ]),
        createVNode(Transition, {
          name: `vc-${_ctx.transitionName}`,
          onBeforeEnter: _ctx.onTransitionBeforeEnter,
          onAfterEnter: _ctx.onTransitionAfterEnter
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("div", {
              key: _ctx.pages[0].id,
              class: "vc-pane-layout",
              style: normalizeStyle({
                gridTemplateColumns: `repeat(${_ctx.columns}, 1fr)`
              })
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pages, (page) => {
                return openBlock(), createBlock(_component_CalendarPageProvider, {
                  key: page.id,
                  page
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CalendarSlot, {
                      name: "page",
                      page
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CalendarPage)
                      ]),
                      _: 2
                    }, 1032, ["page"])
                  ]),
                  _: 2
                }, 1032, ["page"]);
              }), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        createVNode(_component_CalendarSlot, { name: "footer" })
      ], 2)
    ], 16),
    createVNode(_component_CalendarDayPopover),
    createVNode(_component_CalendarNavPopover)
  ], 64);
}
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
const contextKey = Symbol("__vc_date_picker_context__");
const propsDef = {
  ...propsDef$2,
  mode: { type: String, default: "date" },
  modelValue: {
    type: [Number, String, Date, Object]
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  rules: [String, Object],
  is24hr: Boolean,
  hideTimeHeader: Boolean,
  timeAccuracy: { type: Number, default: 2 },
  isRequired: Boolean,
  isRange: Boolean,
  updateOnInput: {
    type: Boolean,
    default: () => getDefault("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => getDefault("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: true
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
};
const emits = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function createDatePicker(props, { emit, slots }) {
  provideSlots(slots, { footer: "dp-footer" });
  const baseCtx = createBase(props);
  const { locale, masks: masks2, disabledAttribute } = baseCtx;
  const showCalendar = ref(false);
  const datePickerPopoverId = ref(Symbol());
  const dateValue = ref(null);
  const dragValue = ref(null);
  const inputValues = ref(["", ""]);
  const popoverRef = ref(null);
  const calendarRef = ref(null);
  let updateTimeout = void 0;
  let dragTrackingValue;
  let watchValue = true;
  const isRange = computed(() => {
    return props.isRange || props.modelModifiers.range === true;
  });
  const valueStart = computed(
    () => isRange.value && dateValue.value != null ? dateValue.value.start : null
  );
  const valueEnd = computed(
    () => isRange.value && dateValue.value != null ? dateValue.value.end : null
  );
  const isDateMode = computed(() => props.mode.toLowerCase() === "date");
  const isDateTimeMode = computed(
    () => props.mode.toLowerCase() === "datetime"
  );
  const isTimeMode = computed(() => props.mode.toLowerCase() === "time");
  const isDragging = computed(() => !!dragValue.value);
  const modelConfig = computed(() => {
    let type = "date";
    if (props.modelModifiers.number)
      type = "number";
    if (props.modelModifiers.string)
      type = "string";
    const mask = masks2.value.modelValue || "iso";
    return normalizeConfig2({ type, mask });
  });
  const dateParts = computed(
    () => getDateParts2(dragValue.value ?? dateValue.value)
  );
  const inputMask = computed(() => {
    if (isTimeMode.value) {
      return props.is24hr ? masks2.value.inputTime24hr : masks2.value.inputTime;
    }
    if (isDateTimeMode.value) {
      return props.is24hr ? masks2.value.inputDateTime24hr : masks2.value.inputDateTime;
    }
    return masks2.value.input;
  });
  const inputMaskHasTime = computed(() => /[Hh]/g.test(inputMask.value));
  const inputMaskHasDate = computed(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(inputMask.value)
  );
  const inputMaskPatch = computed(() => {
    if (inputMaskHasTime.value && inputMaskHasDate.value) {
      return "dateTime";
    }
    if (inputMaskHasDate.value)
      return "date";
    if (inputMaskHasTime.value)
      return "time";
    return void 0;
  });
  const popover = computed(() => {
    var _a;
    const target = ((_a = popoverRef.value) == null ? void 0 : _a.$el.previousElementSibling) ?? void 0;
    return defaultsDeep_1({}, props.popover, getDefault("datePicker.popover"), {
      target
    });
  });
  const popoverEvents = computed(
    () => getPopoverEventHandlers({
      ...popover.value,
      id: datePickerPopoverId.value
    })
  );
  const inputValue = computed(() => {
    return isRange.value ? {
      start: inputValues.value[0],
      end: inputValues.value[1]
    } : inputValues.value[0];
  });
  const inputEvents = computed(() => {
    const events = ["start", "end"].map((target) => ({
      input: onInputInput(target),
      change: onInputChange(target),
      keyup: onInputKeyup,
      ...props.popover && popoverEvents.value
    }));
    return isRange.value ? {
      start: events[0],
      end: events[1]
    } : events[0];
  });
  const selectAttribute = computed(() => {
    if (!hasValue(dateValue.value))
      return null;
    const attribute = {
      key: "select-drag",
      ...props.selectAttribute,
      dates: dateValue.value,
      pinPage: true
    };
    const { dot, bar, highlight, content } = attribute;
    if (!dot && !bar && !highlight && !content) {
      attribute.highlight = true;
    }
    return attribute;
  });
  const dragAttribute = computed(() => {
    if (!isRange.value || !hasValue(dragValue.value)) {
      return null;
    }
    const attribute = {
      key: "select-drag",
      ...props.dragAttribute,
      dates: dragValue.value
    };
    const { dot, bar, highlight, content } = attribute;
    if (!dot && !bar && !highlight && !content) {
      attribute.highlight = {
        startEnd: {
          fillMode: "outline"
        }
      };
    }
    return attribute;
  });
  const attributes = computed(() => {
    const attrs = isArray(props.attributes) ? [...props.attributes] : [];
    if (dragAttribute.value) {
      attrs.unshift(dragAttribute.value);
    } else if (selectAttribute.value) {
      attrs.unshift(selectAttribute.value);
    }
    return attrs;
  });
  const rules = computed(() => {
    return normalizeConfig2(
      props.rules === "auto" ? getAutoRules() : props.rules ?? {}
    );
  });
  function getAutoRules() {
    const _rules = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    };
    const accuracy = isDateMode.value ? 0 : props.timeAccuracy;
    return [0, 1].map((i) => {
      switch (accuracy) {
        case 0:
          return {
            hours: _rules.hr[i],
            minutes: _rules.min[i],
            seconds: _rules.sec[i],
            milliseconds: _rules.ms[i]
          };
        case 1:
          return {
            minutes: _rules.min[i],
            seconds: _rules.sec[i],
            milliseconds: _rules.ms[i]
          };
        case 3:
          return { milliseconds: _rules.ms[i] };
        case 4:
          return {};
        default:
          return { seconds: _rules.sec[i], milliseconds: _rules.ms[i] };
      }
    });
  }
  function normalizeConfig2(config2) {
    if (isArray(config2)) {
      if (config2.length === 1)
        return [config2[0], config2[0]];
      return config2;
    }
    return [config2, config2];
  }
  function normalizeDateConfig(config2) {
    return normalizeConfig2(config2).map(
      (c, i) => ({
        ...c,
        rules: rules.value[i]
      })
    );
  }
  function hasDateValue(value) {
    if (value == null)
      return false;
    if (isNumber_1(value))
      return !isNaN(value);
    if (isDate(value))
      return !isNaN(value.getTime());
    if (isString_1(value))
      return value !== "";
    return isDateParts(value);
  }
  function hasRangeValue(value) {
    return isObject(value) && "start" in value && "end" in value && hasDateValue(value.start ?? null) && hasDateValue(value.end ?? null);
  }
  function hasValue(value) {
    return hasRangeValue(value) || hasDateValue(value);
  }
  function valuesAreEqual(a, b) {
    if (a == null && b == null)
      return true;
    if (a == null || b == null)
      return false;
    const aIsDate = isDate(a);
    const bIsDate = isDate(b);
    if (aIsDate && bIsDate)
      return a.getTime() === b.getTime();
    if (aIsDate || bIsDate)
      return false;
    return valuesAreEqual(a.start, b.start) && valuesAreEqual(a.end, b.end);
  }
  function valueIsDisabled(value) {
    if (!hasValue(value) || !disabledAttribute.value)
      return false;
    return disabledAttribute.value.intersectsRange(locale.value.range(value));
  }
  function normalizeValue(value, config2, patch, targetPriority) {
    if (!hasValue(value))
      return null;
    if (hasRangeValue(value)) {
      const start = locale.value.toDate(value.start, {
        ...config2[0],
        fillDate: valueStart.value ?? void 0,
        patch
      });
      const end = locale.value.toDate(value.end, {
        ...config2[1],
        fillDate: valueEnd.value ?? void 0,
        patch
      });
      return sortRange({ start, end }, targetPriority);
    }
    return locale.value.toDateOrNull(value, {
      ...config2[0],
      fillDate: dateValue.value,
      patch
    });
  }
  function denormalizeValue(value, config2) {
    if (hasRangeValue(value)) {
      return {
        start: locale.value.fromDate(value.start, config2[0]),
        end: locale.value.fromDate(value.end, config2[1])
      };
    }
    if (isRange.value) {
      return null;
    }
    return locale.value.fromDate(value, config2[0]);
  }
  function updateValue(value, opts = {}) {
    clearTimeout(updateTimeout);
    return new Promise((resolve) => {
      const { debounce = 0, ...args } = opts;
      if (debounce > 0) {
        updateTimeout = window.setTimeout(() => {
          resolve(forceUpdateValue(value, args));
        }, debounce);
      } else {
        resolve(forceUpdateValue(value, args));
      }
    });
  }
  function forceUpdateValue(value, {
    config: config2 = modelConfig.value,
    patch = "dateTime",
    clearIfEqual = false,
    formatInput: fInput = true,
    hidePopover: hPopover = false,
    dragging = isDragging.value,
    targetPriority,
    moveToValue: mValue = false
  } = {}) {
    const normalizedConfig = normalizeDateConfig(config2);
    let normalizedValue = normalizeValue(
      value,
      normalizedConfig,
      patch,
      targetPriority
    );
    const isDisabled = valueIsDisabled(normalizedValue);
    if (isDisabled) {
      if (dragging)
        return null;
      normalizedValue = dateValue.value;
      hPopover = false;
    } else if (normalizedValue == null && props.isRequired) {
      normalizedValue = dateValue.value;
    } else if (
      // Clear value if same value was passed
      normalizedValue != null && valuesAreEqual(dateValue.value, normalizedValue) && clearIfEqual
    ) {
      normalizedValue = null;
    }
    const valueRef = dragging ? dragValue : dateValue;
    const notify = !valuesAreEqual(valueRef.value, normalizedValue);
    valueRef.value = normalizedValue;
    if (!dragging)
      dragValue.value = null;
    const denormalizedValue = denormalizeValue(
      normalizedValue,
      modelConfig.value
    );
    if (notify) {
      watchValue = false;
      emit(dragging ? "drag" : "update:modelValue", denormalizedValue);
      nextTick(() => watchValue = true);
    }
    if (hPopover && !dragging)
      hidePopover$1();
    if (fInput)
      formatInput();
    if (mValue) {
      nextTick(() => moveToValue(targetPriority ?? "start"));
    }
    return denormalizedValue;
  }
  function formatInput() {
    nextTick(() => {
      const config2 = normalizeDateConfig({
        type: "string",
        mask: inputMask.value
      });
      const value = denormalizeValue(
        dragValue.value ?? dateValue.value,
        config2
      );
      if (isRange.value) {
        inputValues.value = [value && value.start, value && value.end];
      } else {
        inputValues.value = [value, ""];
      }
    });
  }
  function onInputUpdate(inputValue2, target, opts) {
    inputValues.value.splice(target === "start" ? 0 : 1, 1, inputValue2);
    const value = isRange.value ? {
      start: inputValues.value[0],
      end: inputValues.value[1] || inputValues.value[0]
    } : inputValue2;
    const config2 = {
      type: "string",
      mask: inputMask.value
    };
    updateValue(value, {
      ...opts,
      config: config2,
      patch: inputMaskPatch.value,
      targetPriority: target,
      moveToValue: true
    });
  }
  function onInputInput(target) {
    return (e) => {
      if (!props.updateOnInput)
        return;
      onInputUpdate(e.currentTarget.value, target, {
        formatInput: false,
        hidePopover: false,
        debounce: props.inputDebounce
      });
    };
  }
  function onInputChange(target) {
    return (e) => {
      onInputUpdate(e.currentTarget.value, target, {
        formatInput: true,
        hidePopover: false
      });
    };
  }
  function onInputKeyup(e) {
    if (e.key !== "Escape")
      return;
    updateValue(dateValue.value, {
      formatInput: true,
      hidePopover: true
    });
  }
  function getDateParts2(value) {
    if (isRange.value) {
      return [
        value && value.start ? locale.value.getDateParts(value.start) : null,
        value && value.end ? locale.value.getDateParts(value.end) : null
      ];
    }
    return [value ? locale.value.getDateParts(value) : null];
  }
  function cancelDrag() {
    dragValue.value = null;
    formatInput();
  }
  function onPopoverBeforeShow(el) {
    emit("popover-will-show", el);
  }
  function onPopoverAfterShow(el) {
    emit("popover-did-show", el);
  }
  function onPopoverBeforeHide(el) {
    cancelDrag();
    emit("popover-will-hide", el);
  }
  function onPopoverAfterHide(el) {
    emit("popover-did-hide", el);
  }
  function handleDayClick(day) {
    const opts = {
      patch: "date",
      formatInput: true,
      hidePopover: true
    };
    if (isRange.value) {
      const dragging = !isDragging.value;
      if (dragging) {
        dragTrackingValue = { start: day.startDate, end: day.endDate };
      } else if (dragTrackingValue != null) {
        dragTrackingValue.end = day.date;
      }
      updateValue(dragTrackingValue, {
        ...opts,
        dragging
      });
    } else {
      updateValue(day.date, {
        ...opts,
        clearIfEqual: !props.isRequired
      });
    }
  }
  function onDayClick(day, event) {
    handleDayClick(day);
    emit("dayclick", day, event);
  }
  function onDayKeydown(day, event) {
    switch (event.key) {
      case " ":
      case "Enter": {
        handleDayClick(day);
        event.preventDefault();
        break;
      }
      case "Escape": {
        hidePopover$1();
      }
    }
    emit("daykeydown", day, event);
  }
  function onDayMouseEnter(day, event) {
    if (!isDragging.value || dragTrackingValue == null)
      return;
    dragTrackingValue.end = day.date;
    updateValue(sortRange(dragTrackingValue), {
      patch: "date",
      formatInput: true
    });
  }
  function showPopover$1(opts = {}) {
    showPopover({
      ...popover.value,
      ...opts,
      isInteractive: true,
      id: datePickerPopoverId.value
    });
  }
  function hidePopover$1(opts = {}) {
    hidePopover({
      hideDelay: 10,
      force: true,
      ...popover.value,
      ...opts,
      id: datePickerPopoverId.value
    });
  }
  function togglePopover$1(opts) {
    togglePopover({
      ...popover.value,
      ...opts,
      isInteractive: true,
      id: datePickerPopoverId.value
    });
  }
  function sortRange(range, priority) {
    const { start, end } = range;
    if (start > end) {
      switch (priority) {
        case "start":
          return { start, end: start };
        case "end":
          return { start: end, end };
        default:
          return { start: end, end: start };
      }
    }
    return { start, end };
  }
  async function move(target, opts = {}) {
    if (calendarRef.value == null)
      return false;
    return calendarRef.value.move(target, opts);
  }
  async function moveBy(pages, opts = {}) {
    if (calendarRef.value == null)
      return false;
    return calendarRef.value.moveBy(pages, opts);
  }
  async function moveToValue(target, opts = {}) {
    const dValue = dateValue.value;
    if (calendarRef.value == null || !hasValue(dValue))
      return false;
    const start = target !== "end";
    const position = start ? 1 : -1;
    const date = hasRangeValue(dValue) ? start ? dValue.start : dValue.end : dValue;
    const page = getPageAddressForDate(date, "monthly", locale.value);
    return calendarRef.value.move(page, { position, ...opts });
  }
  watch(
    () => props.isRange,
    (val) => {
      if (val) {
        console.warn(
          "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
        );
      }
    },
    { immediate: true }
  );
  watch(
    () => isRange.value,
    () => {
      forceUpdateValue(null, { formatInput: true });
    }
  );
  watch(
    () => inputMask.value,
    () => formatInput()
  );
  watch(
    () => props.modelValue,
    (val) => {
      if (!watchValue)
        return;
      forceUpdateValue(val, {
        formatInput: true,
        hidePopover: false
      });
    }
  );
  watch(
    () => rules.value,
    () => {
      if (isObject(props.rules)) {
        forceUpdateValue(props.modelValue, {
          formatInput: true,
          hidePopover: false
        });
      }
    }
  );
  watch(
    () => props.timezone,
    () => {
      forceUpdateValue(dateValue.value, { formatInput: true });
    }
  );
  const config = normalizeConfig2(modelConfig.value);
  dateValue.value = normalizeValue(
    props.modelValue ?? null,
    config,
    "dateTime"
  );
  onMounted(() => {
    forceUpdateValue(props.modelValue, {
      formatInput: true,
      hidePopover: false
    });
  });
  nextTick(() => showCalendar.value = true);
  const context = {
    ...baseCtx,
    showCalendar,
    datePickerPopoverId,
    popoverRef,
    popoverEvents,
    calendarRef,
    isRange,
    isTimeMode,
    isDateTimeMode,
    is24hr: toRef(props, "is24hr"),
    hideTimeHeader: toRef(props, "hideTimeHeader"),
    timeAccuracy: toRef(props, "timeAccuracy"),
    isDragging,
    inputValue,
    inputEvents,
    dateParts,
    attributes,
    rules,
    move,
    moveBy,
    moveToValue,
    updateValue,
    showPopover: showPopover$1,
    hidePopover: hidePopover$1,
    togglePopover: togglePopover$1,
    onDayClick,
    onDayKeydown,
    onDayMouseEnter,
    onPopoverBeforeShow,
    onPopoverAfterShow,
    onPopoverBeforeHide,
    onPopoverAfterHide
  };
  provide(contextKey, context);
  return context;
}
function useDatePicker() {
  const context = inject(contextKey);
  if (context)
    return context;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const _amOptions = [
  { value: 0, label: "12" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" }
];
const _pmOptions = [
  { value: 12, label: "12" },
  { value: 13, label: "1" },
  { value: 14, label: "2" },
  { value: 15, label: "3" },
  { value: 16, label: "4" },
  { value: 17, label: "5" },
  { value: 18, label: "6" },
  { value: 19, label: "7" },
  { value: 20, label: "8" },
  { value: 21, label: "9" },
  { value: 22, label: "10" },
  { value: 23, label: "11" }
];
function createTimePicker(props) {
  const ctx = useDatePicker();
  const {
    locale,
    isRange,
    isTimeMode,
    dateParts,
    rules,
    is24hr,
    hideTimeHeader,
    timeAccuracy,
    updateValue: updateDpValue
  } = ctx;
  function updateParts(newParts) {
    newParts = Object.assign(parts.value, newParts);
    let newValue = null;
    if (isRange.value) {
      const start = isStart.value ? newParts : dateParts.value[0];
      const end = isStart.value ? dateParts.value[1] : newParts;
      newValue = { start, end };
    } else {
      newValue = newParts;
    }
    updateDpValue(newValue, {
      patch: "time",
      targetPriority: isStart.value ? "start" : "end",
      moveToValue: true
    });
  }
  const isStart = computed(() => props.position === 0);
  const parts = computed(
    () => dateParts.value[props.position] || { isValid: false }
  );
  const partsValid = computed(() => isDateParts(parts.value));
  const isValid = computed(() => !!parts.value.isValid);
  const showHeader = computed(() => {
    return !hideTimeHeader.value && isValid.value;
  });
  const date = computed(() => {
    if (!partsValid.value)
      return null;
    let date2 = locale.value.toDate(parts.value);
    if (parts.value.hours === 24) {
      date2 = new Date(date2.getTime() - 1);
    }
    return date2;
  });
  const hours2 = computed({
    get() {
      return parts.value.hours;
    },
    set(val) {
      updateParts({ hours: val });
    }
  });
  const minutes = computed({
    get() {
      return parts.value.minutes;
    },
    set(val) {
      updateParts({ minutes: val });
    }
  });
  const seconds = computed({
    get() {
      return parts.value.seconds;
    },
    set(val) {
      updateParts({ seconds: val });
    }
  });
  const milliseconds = computed({
    get() {
      return parts.value.milliseconds;
    },
    set(val) {
      updateParts({ milliseconds: val });
    }
  });
  const isAM = computed({
    get() {
      return parts.value.hours < 12;
    },
    set(value) {
      value = String(value).toLowerCase() == "true";
      let hValue = hours2.value;
      if (value && hValue >= 12) {
        hValue -= 12;
      } else if (!value && hValue < 12) {
        hValue += 12;
      }
      updateParts({ hours: hValue });
    }
  });
  const options = computed(
    () => getDatePartsOptions(parts.value, rules.value[props.position])
  );
  const amHourOptions = computed(() => {
    return _amOptions.filter(
      (opt) => options.value.hours.some((ho) => ho.value === opt.value)
    );
  });
  const pmHourOptions = computed(() => {
    return _pmOptions.filter(
      (opt) => options.value.hours.some((ho) => ho.value === opt.value)
    );
  });
  const hourOptions = computed(() => {
    if (is24hr.value)
      return options.value.hours;
    if (isAM.value)
      return amHourOptions.value;
    return pmHourOptions.value;
  });
  const isAMOptions = computed(() => {
    const result = [];
    if (arrayHasItems(amHourOptions.value))
      result.push({ value: true, label: "AM" });
    if (arrayHasItems(pmHourOptions.value))
      result.push({ value: false, label: "PM" });
    return result;
  });
  return {
    ...ctx,
    showHeader,
    timeAccuracy,
    parts,
    isValid,
    date,
    hours: hours2,
    minutes,
    seconds,
    milliseconds,
    options,
    hourOptions,
    isAM,
    isAMOptions,
    is24hr
  };
}
const _hoisted_1$1 = ["value"];
const _hoisted_2$1 = ["value", "disabled"];
const _hoisted_3$1 = {
  key: 1,
  class: "vc-base-sizer",
  "aria-hidden": "true"
};
const __default__$1 = {
  inheritAttrs: false
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  __name: "BaseSelect",
  props: {
    options: null,
    modelValue: null,
    alignRight: { type: Boolean },
    alignLeft: { type: Boolean },
    showIcon: { type: Boolean },
    fitContent: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const selectedLabel = computed(() => {
      const option = props.options.find((opt) => opt.value === props.modelValue);
      return option == null ? void 0 : option.label;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vc-base-select", {
          "vc-fit-content": __props.fitContent,
          "vc-has-icon": __props.showIcon
        }])
      }, [
        createBaseVNode("select", mergeProps(_ctx.$attrs, {
          value: __props.modelValue,
          class: ["vc-focus", {
            "vc-align-right": __props.alignRight,
            "vc-align-left": __props.alignLeft
          }],
          onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
        }), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
            return openBlock(), createElementBlock("option", {
              key: option.value,
              value: option.value,
              disabled: option.disabled
            }, toDisplayString(option.label), 9, _hoisted_2$1);
          }), 128))
        ], 16, _hoisted_1$1),
        __props.showIcon ? (openBlock(), createBlock(_sfc_main$c, {
          key: 0,
          name: "ChevronDown",
          size: "18"
        })) : createCommentVNode("", true),
        __props.fitContent ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(unref(selectedLabel)), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "vc-time-header"
};
const _hoisted_2 = { class: "vc-time-weekday" };
const _hoisted_3 = { class: "vc-time-month" };
const _hoisted_4 = { class: "vc-time-day" };
const _hoisted_5 = { class: "vc-time-year" };
const _hoisted_6 = { class: "vc-time-select-group" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "vc-time-colon" }, ":", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "vc-time-colon" }, ":", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "vc-time-decimal" }, ".", -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(__props, { expose }) {
    const props = __props;
    const timePicker = createTimePicker(props);
    expose(timePicker);
    const {
      locale,
      isValid,
      date,
      hours: hours2,
      minutes,
      seconds,
      milliseconds,
      options,
      hourOptions,
      isTimeMode,
      isAM,
      isAMOptions,
      is24hr,
      showHeader,
      timeAccuracy
    } = timePicker;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["vc-time-picker", [{ "vc-invalid": !unref(isValid), "vc-attached": !unref(isTimeMode) }]])
      }, [
        createVNode(_sfc_main$i, { name: "time-header" }, {
          default: withCtx(() => [
            unref(showHeader) && unref(date) ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("span", _hoisted_2, toDisplayString(unref(locale).formatDate(unref(date), "WWW")), 1),
              createBaseVNode("span", _hoisted_3, toDisplayString(unref(locale).formatDate(unref(date), "MMM")), 1),
              createBaseVNode("span", _hoisted_4, toDisplayString(unref(locale).formatDate(unref(date), "D")), 1),
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(locale).formatDate(unref(date), "YYYY")), 1)
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_6, [
          createVNode(_sfc_main$c, {
            name: "Clock",
            size: "17"
          }),
          createVNode(_sfc_main$4, {
            modelValue: unref(hours2),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(hours2) ? hours2.value = $event : null),
            modelModifiers: { number: true },
            options: unref(hourOptions),
            class: "vc-time-select-hours",
            "align-right": ""
          }, null, 8, ["modelValue", "options"]),
          unref(timeAccuracy) > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _hoisted_7,
            createVNode(_sfc_main$4, {
              modelValue: unref(minutes),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(minutes) ? minutes.value = $event : null),
              modelModifiers: { number: true },
              options: unref(options).minutes,
              class: "vc-time-select-minutes",
              "align-left": unref(timeAccuracy) === 2
            }, null, 8, ["modelValue", "options", "align-left"])
          ], 64)) : createCommentVNode("", true),
          unref(timeAccuracy) > 2 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            _hoisted_8,
            createVNode(_sfc_main$4, {
              modelValue: unref(seconds),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(seconds) ? seconds.value = $event : null),
              modelModifiers: { number: true },
              options: unref(options).seconds,
              class: "vc-time-select-seconds",
              "align-left": unref(timeAccuracy) === 3
            }, null, 8, ["modelValue", "options", "align-left"])
          ], 64)) : createCommentVNode("", true),
          unref(timeAccuracy) > 3 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            _hoisted_9,
            createVNode(_sfc_main$4, {
              modelValue: unref(milliseconds),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(milliseconds) ? milliseconds.value = $event : null),
              modelModifiers: { number: true },
              options: unref(options).milliseconds,
              class: "vc-time-select-milliseconds",
              "align-left": ""
            }, null, 8, ["modelValue", "options"])
          ], 64)) : createCommentVNode("", true),
          !unref(is24hr) ? (openBlock(), createBlock(_sfc_main$4, {
            key: 3,
            modelValue: unref(isAM),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(isAM) ? isAM.value = $event : null),
            options: unref(isAMOptions)
          }, null, 8, ["modelValue", "options"])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DatePickerBase",
  setup(__props) {
    const {
      attributes,
      calendarRef,
      color,
      displayMode,
      isDateTimeMode,
      isTimeMode,
      isRange,
      onDayClick,
      onDayMouseEnter,
      onDayKeydown
    } = useDatePicker();
    const positions = isRange.value ? [0, 1] : [0];
    return (_ctx, _cache) => {
      return unref(isTimeMode) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`vc-container vc-bordered vc-${unref(color)} vc-${unref(displayMode)}`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(positions), (position) => {
          return openBlock(), createBlock(_sfc_main$3, {
            key: position,
            position
          }, null, 8, ["position"]);
        }), 128))
      ], 2)) : (openBlock(), createBlock(Calendar, {
        key: 1,
        attributes: unref(attributes),
        ref_key: "calendarRef",
        ref: calendarRef,
        onDayclick: unref(onDayClick),
        onDaymouseenter: unref(onDayMouseEnter),
        onDaykeydown: unref(onDayKeydown)
      }, {
        footer: withCtx(() => [
          unref(isDateTimeMode) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(positions), (position) => {
            return openBlock(), createBlock(_sfc_main$3, {
              key: position,
              position
            }, null, 8, ["position"]);
          }), 128)) : createCommentVNode("", true),
          createVNode(_sfc_main$i, { name: "dp-footer" })
        ]),
        _: 1
      }, 8, ["attributes", "onDayclick", "onDaymouseenter", "onDaykeydown"]));
    };
  }
});
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "DatePickerPopover",
  setup(__props) {
    const {
      datePickerPopoverId,
      color,
      displayMode,
      popoverRef,
      onPopoverBeforeShow,
      onPopoverAfterShow,
      onPopoverBeforeHide,
      onPopoverAfterHide
    } = useDatePicker();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Popover, {
        id: unref(datePickerPopoverId),
        placement: "bottom-start",
        class: normalizeClass(`vc-date-picker-content vc-${unref(color)} vc-${unref(displayMode)}`),
        ref_key: "popoverRef",
        ref: popoverRef,
        onBeforeShow: unref(onPopoverBeforeShow),
        onAfterShow: unref(onPopoverAfterShow),
        onBeforeHide: unref(onPopoverBeforeHide),
        onAfterHide: unref(onPopoverAfterHide)
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$2, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
        ]),
        _: 1
      }, 8, ["id", "class", "onBeforeShow", "onAfterShow", "onBeforeHide", "onAfterHide"]);
    };
  }
});
const _sfc_main = defineComponent({
  inheritAttrs: false,
  emits,
  props: propsDef,
  components: { DatePickerBase: _sfc_main$2, DatePickerPopover: _sfc_main$1 },
  setup(props, ctx) {
    const datePicker = createDatePicker(props, ctx);
    const slotCtx = reactive(omit(datePicker, "calendarRef", "popoverRef"));
    return { ...datePicker, slotCtx };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DatePickerPopover = resolveComponent("DatePickerPopover");
  const _component_DatePickerBase = resolveComponent("DatePickerBase");
  return _ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotCtx))),
    createVNode(_component_DatePickerPopover, normalizeProps(guardReactiveProps(_ctx.$attrs)), null, 16)
  ], 64)) : (openBlock(), createBlock(_component_DatePickerBase, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), null, 16));
}
const DatePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Calendar,
  DatePicker,
  Popover,
  PopoverRow: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const install = (app, defaults2 = {}) => {
  app.use(setupDefaults, defaults2);
  const prefix = app.config.globalProperties.$VCalendar.componentPrefix;
  for (const componentKey in components) {
    const component = components[componentKey];
    app.component(`${prefix}${componentKey}`, component);
  }
};
const index = { install };

// eslint-disable-next-line import/prefer-default-export
var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchOffset = /[+-]\d\d:?(\d\d)?|Z/; // +00:00 -00:00 +0000 or -0000 +00 or Z

var matchWord = /\d*[^-_:/,()\s\d]+/; // Word

var locale = {};

var parseTwoDigitYear = function parseTwoDigitYear(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2000);
};

function offsetFromString(string) {
  if (!string) return 0;
  if (string === 'Z') return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes; // eslint-disable-line no-nested-ternary
}

var addInput = function addInput(property) {
  return function (input) {
    this[property] = +input;
  };
};

var zoneExpressions = [matchOffset, function (input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];

var getLocalePart = function getLocalePart(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};

var meridiemMatch = function meridiemMatch(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale,
      meridiem = _locale.meridiem;

  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? 'pm' : 'PM');
  } else {
    for (var i = 1; i <= 24; i += 1) {
      // todo: fix input === meridiem(i, 0, isLowerCase)
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }

  return isAfternoon;
};

var expressions = {
  A: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  Do: [matchWord, function (input) {
    var _locale2 = locale,
        ordinal = _locale2.ordinal;

    var _input$match = input.match(/\d+/);

    this.day = _input$match[0];
    if (!ordinal) return;

    for (var i = 1; i <= 31; i += 1) {
      if (ordinal(i).replace(/\[|\]/g, '') === input) {
        this.day = i;
      }
    }
  }],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var monthsShort = getLocalePart('monthsShort');
    var matchIndex = (monthsShort || months.map(function (_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var matchIndex = months.indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};

function correctHours(time) {
  var afternoon = time.afternoon;

  if (afternoon !== undefined) {
    var hours = time.hours;

    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }

    delete time.afternoon;
  }
}

function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];

    if (parser) {
      array[i] = {
        regex: regex,
        parser: parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, '');
    }
  }

  return function (input) {
    var time = {};

    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];

      if (typeof _token === 'string') {
        start += _token.length;
      } else {
        var _regex = _token.regex,
            _parser = _token.parser;
        var part = input.slice(start);

        var match = _regex.exec(part);

        var value = match[0];

        _parser.call(time, value);

        input = input.replace(value, '');
      }
    }

    correctHours(time);
    return time;
  };
}

var parseFormattedInput = function parseFormattedInput(input, format, utc) {
  try {
    if (['x', 'X'].indexOf(format) > -1) return new Date((format === 'X' ? 1000 : 1) * input);
    var parser = makeParser(format);

    var _parser2 = parser(input),
        year = _parser2.year,
        month = _parser2.month,
        day = _parser2.day,
        hours = _parser2.hours,
        minutes = _parser2.minutes,
        seconds = _parser2.seconds,
        milliseconds = _parser2.milliseconds,
        zone = _parser2.zone;

    var now = new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M = 0;

    if (!(year && !month)) {
      M = month > 0 ? month - 1 : now.getMonth();
    }

    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;

    if (zone) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms + zone.offset * 60 * 1000));
    }

    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms));
    }

    return new Date(y, M, d, h, m, s, ms);
  } catch (e) {
    return new Date(''); // Invalid Date
  }
};

const customParseFormat = (function (o, C, d) {
  d.p.customParseFormat = true;

  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }

  var proto = C.prototype;
  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    var date = cfg.date,
        utc = cfg.utc,
        args = cfg.args;
    this.$u = utc;
    var format = args[1];

    if (typeof format === 'string') {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];

      if (isStrictWithLocale) {
        pl = args[2];
      }

      locale = this.$locale();

      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }

      this.$d = parseFormattedInput(date, format, utc);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L; // use != to treat
      // input number 1410715640579 and format string '1410715640579' equal
      // eslint-disable-next-line eqeqeq

      if (isStrict && date != this.format(format)) {
        this.$d = new Date('');
      } // reset global locale to make parallel unit test


      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;

      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);

        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }

        if (i === len) this.$d = new Date('');
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
});

const advancedFormat = (function (o, c) {
  // locale needed later
  var proto = c.prototype;
  var oldFormat = proto.format;

  proto.format = function (formatStr) {
    var _this = this;

    var locale = this.$locale();

    if (!this.isValid()) {
      return oldFormat.bind(this)(formatStr);
    }

    var utils = this.$utils();
    var str = formatStr || FORMAT_DEFAULT;
    var result = str.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (match) {
      switch (match) {
        case 'Q':
          return Math.ceil((_this.$M + 1) / 3);

        case 'Do':
          return locale.ordinal(_this.$D);

        case 'gggg':
          return _this.weekYear();

        case 'GGGG':
          return _this.isoWeekYear();

        case 'wo':
          return locale.ordinal(_this.week(), 'W');
        // W for week

        case 'w':
        case 'ww':
          return utils.s(_this.week(), match === 'w' ? 1 : 2, '0');

        case 'W':
        case 'WW':
          return utils.s(_this.isoWeek(), match === 'W' ? 1 : 2, '0');

        case 'k':
        case 'kk':
          return utils.s(String(_this.$H === 0 ? 24 : _this.$H), match === 'k' ? 1 : 2, '0');

        case 'X':
          return Math.floor(_this.$d.getTime() / 1000);

        case 'x':
          return _this.$d.getTime();

        case 'z':
          return "[" + _this.offsetName() + "]";

        case 'zzz':
          return "[" + _this.offsetName('long') + "]";

        default:
          return match;
      }
    });
    return oldFormat.bind(this)(result);
  };
});

const isToday = (function (o, c, d) {
  var proto = c.prototype;

  proto.isToday = function () {
    var comparisonTemplate = 'YYYY-MM-DD';
    var now = d();
    return this.format(comparisonTemplate) === now.format(comparisonTemplate);
  };
});

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(isToday);

/** settings **/
const settingsSchema = [
  {
    key: 'showTodayBtn',
    type: 'boolean',
    title: 'Do you like today button?',
    description: 'Do you want to show Today button from toolbar? (reload needed)',
    default: true,
  }, {
    key: 'firstDayOfWeek',
    type: 'number',
    title: 'The first day of week',
    description: 'Day number for the first day of the week (1: Sun - 7: Sat). Ignore setting this prop if you want to allow the locale to determine this setting.',
    default: 1,
  }, {
    key: 'backgroundColorOfContainerLight',
    type: 'string',
    title: 'The background color of calendar container (light mode)',
    description: '🌝 color of light mode!',
    default: '#ffffff',
    inputAs: 'color',
  }, {
    key: 'backgroundColorOfContainerDark',
    type: 'string',
    title: 'The background color of calendar container (dark mode)',
    description: '🌚 color of dark mode!',
    default: '#000000',
    inputAs: 'color',
  }, {
    key: 'hotkey',
    type: 'string',
    title: 'Hotkey to open calendar',
    description: 'Hotkey to open calendar',
    default: null,
  }, {
    key: 'hotkeyPrevDay',
    type: 'string',
    title: 'Hotkey to go to previous day journal',
    description: 'Navigate to yesterday\'s journal (e.g., "mod+shift+left")',
    default: 'mod+shift+left',
  }, {
    key: 'hotkeyNextDay',
    type: 'string',
    title: 'Hotkey to go to next day journal',
    description: 'Navigate to tomorrow\'s journal (e.g., "mod+shift+right")',
    default: 'mod+shift+right',
  }, {
    key: 'keepOpenOnSelect',
    type: 'boolean',
    title: '',
    description: 'Keep the calendar open after selecting a date',
    default: false,
  }, {
    key: 'showWeekNumbers',
    type: 'boolean',
    title: '',
    description: 'Show week numbers in calendar',
    default: false,
  }, {
    key: 'showIsoWeeknumbers',
    type: 'boolean',
    title: '',
    description: 'Show week number in ISO format',
    default: false,
  }];

let app = null;

/**
 * user model
 */
const model = {
  openCalendar (e) {
    const { rect } = e;
    const inner = document.querySelector('.calendar-inner');

    Object.assign(inner.style, {
      top: `${rect.top + 30}px`, left: `${rect.left - 115}px`,
    });

    logseq.showMainUI();
  },

  goToDayOfJournal (date) {
    if (typeof date !== 'string') {
      date = dayjs(date).format('YYYY-MM-DD');
    }

    app?._refreshUserConfigs().then(() => {
      app._onDaySelect({ id: date }, {});
    });
  },

  goToToday () {
    model.goToDayOfJournal(Date.now());
  },

  async _navigateToJournalOffset (offset) {
    try {
      const currentPage = await logseq.Editor.getCurrentPage();

      if (!currentPage?.journalDay) {
        console.warn('Not a journal page or page not found');
        return
      }

      const referenceDate = dayjs(currentPage.journalDay.toString(), 'YYYYMMDD');

      if (!referenceDate.isValid()) {
        console.warn('Invalid journal date:', currentPage.journalDay);
        return
      }

      const targetDay = referenceDate.add(offset, 'day');
      model.goToDayOfJournal(targetDay.format('YYYY-MM-DD'));
    } catch (error) {
      console.error('Journal navigation error:', error);
    }
  },

  async goToPreviousDayJournal () {
    await model._navigateToJournalOffset(-1);
  },

  async goToNextDayJournal () {
    await model._navigateToJournalOffset(1);
  },
};

/**
 * app entry
 */
function main () {
  logseq.setMainUIInlineStyle({
    position: 'fixed', zIndex: 11,
  });

  const key = logseq.baseInfo.id;

  logseq.provideModel(model);
  logseq.provideStyle(`
    div[data-injected-ui=open-calendar-${key}] {
      display: flex;
      align-items: center;
      font-weight: 500;
      position: relative;
    }
  `);

  // external btns
  logseq.App.registerUIItem('toolbar', {
    key: 'open-calendar', template: `
      <a class="button" id="open-calendar-button"
      data-on-click="openCalendar"
      data-rect>
       <i class="ti ti-calendar-event"></i> 
      </a>
    `,
  });

  if (logseq.settings.hotkey) {
    logseq.App.registerCommandShortcut({
      binding: logseq.settings.hotkey,
    }, async () => {
      if (logseq.isMainUIVisible) {
        return logseq.hideMainUI()
      }

      const rect = await logseq.App.queryElementRect('#open-calendar-button');
      model.openCalendar({ rect });
    }, {
      label: 'Open Journals Calendar',
    });
  }

  // Previous day shortcut
  if (logseq.settings.hotkeyPrevDay) {
    logseq.App.registerCommandShortcut({
      binding: logseq.settings.hotkeyPrevDay,
    }, async () => {
      await model.goToPreviousDayJournal();
    }, {
      label: 'Go to Previous Day Journal',
    });
  }

  // Next day shortcut
  if (logseq.settings.hotkeyNextDay) {
    logseq.App.registerCommandShortcut({
      binding: logseq.settings.hotkeyNextDay,
    }, async () => {
      await model.goToNextDayJournal();
    }, {
      label: 'Go to Next Day Journal',
    });
  }

  if (logseq.settings.showTodayBtn) {
    logseq.App.registerUIItem('toolbar', {
      key: 'goto-today', template: `
      <a 
      class="button" title="Today's journal" 
      data-on-click="goToToday">
        <i class="ti ti-edit-circle"></i>
      </a>
    `,
    });
  }

  // main UI
  app = createApp(App).use(index, {}).mount('#app');
}

// bootstrap
logseq.useSettingsSchema(settingsSchema).ready(main).catch(null);
