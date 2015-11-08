var Zepto=function(){var t,e,n,r,i=[],o=i.slice,a=i.filter,s=window.document,u={},c={},f={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],g=["after","prepend","before","append"],y=s.createElement("table"),x=s.createElement("tr"),b={tr:s.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":s.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},C=j.toString,S={},T,G,N=s.createElement("div"),M={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},P=Array.isArray||function(t){return t instanceof Array};S.matches=function(t,e){if(!e||!t||t.nodeType!==1)return false;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;if(o)(i=N).appendChild(t);r=~S.qsa(i,e).indexOf(t);o&&N.removeChild(t);return r};function O(t){return t==null?String(t):j[C.call(t)]||"object"}function A(t){return O(t)=="function"}function _(t){return t!=null&&t==t.window}function I(t){return t!=null&&t.nodeType==t.DOCUMENT_NODE}function k(t){return O(t)=="object"}function R(t){return k(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function L(t){return typeof t.length=="number"}function Z(t){return a.call(t,function(t){return t!=null})}function F(t){return t.length>0?n.fn.concat.apply([],t):t}T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})};function D(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}G=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})};function $(t){return t in c?c[t]:c[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function B(t,e){return typeof e=="number"&&!f[D(t)]?e+"px":e}function V(t){var e,n;if(!u[t]){e=s.createElement(t);s.body.appendChild(e);n=getComputedStyle(e,"").getPropertyValue("display");e.parentNode.removeChild(e);n=="none"&&(n="block");u[t]=n}return u[t]}function z(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){if(t.nodeType==1)return t})}S.fragment=function(e,r,i){var a,u,c;if(h.test(e))a=n(s.createElement(RegExp.$1));if(!a){if(e.replace)e=e.replace(p,"<$1></$2>");if(r===t)r=l.test(e)&&RegExp.$1;if(!(r in b))r="*";c=b[r];c.innerHTML=""+e;a=n.each(o.call(c.childNodes),function(){c.removeChild(this)})}if(R(i)){u=n(a);n.each(i,function(t,e){if(v.indexOf(t)>-1)u[t](e);else u.attr(t,e)})}return a};S.Z=function(t,e){t=t||[];t.__proto__=n.fn;t.selector=e||"";return t};S.isZ=function(t){return t instanceof S.Z};S.init=function(e,r){var i;if(!e)return S.Z();else if(typeof e=="string"){e=e.trim();if(e[0]=="<"&&l.test(e))i=S.fragment(e,RegExp.$1,r),e=null;else if(r!==t)return n(r).find(e);else i=S.qsa(s,e)}else if(A(e))return n(s).ready(e);else if(S.isZ(e))return e;else{if(P(e))i=Z(e);else if(k(e))i=[e],e=null;else if(l.test(e))i=S.fragment(e.trim(),RegExp.$1,r),e=null;else if(r!==t)return n(r).find(e);else i=S.qsa(s,e)}return S.Z(i,e)};n=function(t,e){return S.init(t,e)};function q(n,r,i){for(e in r)if(i&&(R(r[e])||P(r[e]))){if(R(r[e])&&!R(n[e]))n[e]={};if(P(r[e])&&!P(n[e]))n[e]=[];q(n[e],r[e],i)}else if(r[e]!==t)n[e]=r[e]}n.extend=function(t){var e,n=o.call(arguments,1);if(typeof t=="boolean"){e=t;t=n.shift()}n.forEach(function(n){q(t,n,e)});return t};S.qsa=function(t,e){var n,r=e[0]=="#",i=!r&&e[0]==".",a=r||i?e.slice(1):e,s=E.test(a);return I(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:t.nodeType!==1&&t.nodeType!==9?[]:o.call(s&&!r?i?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))};function J(t,e){return e==null?n(t):n(t).filter(e)}n.contains=s.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){while(e&&(e=e.parentNode))if(e===t)return true;return false};function H(t,e,n,r){return A(e)?e.call(t,n,r):e}function U(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function X(e,n){var r=e.className||"",i=r&&r.baseVal!==t;if(n===t)return i?r.baseVal:r;i?r.baseVal=n:e.className=n}function W(t){try{return t?t=="true"||(t=="false"?false:t=="null"?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}n.type=O;n.isFunction=A;n.isWindow=_;n.isArray=P;n.isPlainObject=R;n.isEmptyObject=function(t){var e;for(e in t)return false;return true};n.inArray=function(t,e,n){return i.indexOf.call(e,t,n)};n.camelCase=T;n.trim=function(t){return t==null?"":String.prototype.trim.call(t)};n.uuid=0;n.support={};n.expr={};n.map=function(t,e){var n,r=[],i,o;if(L(t))for(i=0;i<t.length;i++){n=e(t[i],i);if(n!=null)r.push(n)}else for(o in t){n=e(t[o],o);if(n!=null)r.push(n)}return F(r)};n.each=function(t,e){var n,r;if(L(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===false)return t}else{for(r in t)if(e.call(t[r],r,t[r])===false)return t}return t};n.grep=function(t,e){return a.call(t,e)};if(window.JSON)n.parseJSON=JSON.parse;n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()});n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,indexOf:i.indexOf,concat:i.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){if(w.test(s.readyState)&&s.body)t(n);else s.addEventListener("DOMContentLoaded",function(){t(n)},false);return this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null)this.parentNode.removeChild(this)})},each:function(t){i.every.call(this,function(e,n){return t.call(e,n,e)!==false});return this},filter:function(t){if(A(t))return this.not(this.not(t));return n(a.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(G(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var r=[];if(A(e)&&e.call!==t)this.each(function(t){if(!e.call(this,t))r.push(this)});else{var i=typeof e=="string"?this.filter(e):L(e)&&A(e.item)?o.call(e):n(e);this.forEach(function(t){if(i.indexOf(t)<0)r.push(t)})}return n(r)},has:function(t){return this.filter(function(){return k(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!k(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!k(t)?t:n(t)},find:function(t){var e,r=this;if(!t)e=n();else if(typeof t=="object")e=n(t).filter(function(){var t=this;return i.some.call(r,function(e){return n.contains(e,t)})});else if(this.length==1)e=n(S.qsa(this[0],t));else e=this.map(function(){return S.qsa(this,t)});return e},closest:function(t,e){var r=this[0],i=false;if(typeof t=="object")i=n(t);while(r&&!(i?i.indexOf(r)>=0:S.matches(r,t)))r=r!==e&&!I(r)&&r.parentNode;return n(r)},parents:function(t){var e=[],r=this;while(r.length>0)r=n.map(r,function(t){if((t=t.parentNode)&&!I(t)&&e.indexOf(t)<0){e.push(t);return t}});return J(e,t)},parent:function(t){return J(G(this.pluck("parentNode")),t)},children:function(t){return J(this.map(function(){return z(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return J(this.map(function(t,e){return a.call(z(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none")this.style.display=V(this.nodeName)})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=A(t);if(this[0]&&!e)var r=n(t).get(0),i=r.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):i?r.cloneNode(true):r)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));var e;while((e=t.children()).length)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=A(t);return this.each(function(r){var i=n(this),o=i.contents(),a=e?t.call(this,r):t;o.length?o.wrapAll(a):i.append(a)})},unwrap:function(){this.parent().each(function(){n(this).replaceWith(n(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var r=n(this);(e===t?r.css("display")=="none":e)?r.show():r.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var r=this.innerHTML;n(this).empty().append(H(this,t,e,r))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=H(this,t,e,this.textContent);this.textContent=n==null?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,r){var i;return typeof n=="string"&&!(1 in arguments)?!this.length||this[0].nodeType!==1?t:!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(t){if(this.nodeType!==1)return;if(k(n))for(e in n)U(this,e,n[e]);else U(this,n,H(this,r,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){this.nodeType===1&&t.split(" ").forEach(function(t){U(this,t)},this)})},prop:function(t,e){t=M[t]||t;return 1 in arguments?this.each(function(n){this[t]=H(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var r="data-"+e.replace(m,"-$1").toLowerCase();var i=1 in arguments?this.attr(r,n):this.attr(r);return i!==null?W(i):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=H(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var r=n(this),i=H(this,t,e,r.offset()),o=r.offsetParent().offset(),a={top:i.top-o.top,left:i.left-o.left};if(r.css("position")=="static")a["position"]="relative";r.css(a)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,r){if(arguments.length<2){var i,o=this[0];if(!o)return;i=getComputedStyle(o,"");if(typeof t=="string")return o.style[T(t)]||i.getPropertyValue(t);else if(P(t)){var a={};n.each(t,function(t,e){a[e]=o.style[T(e)]||i.getPropertyValue(e)});return a}}var s="";if(O(t)=="string"){if(!r&&r!==0)this.each(function(){this.style.removeProperty(D(t))});else s=D(t)+":"+B(t,r)}else{for(e in t)if(!t[e]&&t[e]!==0)this.each(function(){this.style.removeProperty(D(e))});else s+=D(e)+":"+B(e,t[e])+";"}return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){if(!t)return false;return i.some.call(this,function(t){return this.test(X(t))},$(t))},addClass:function(t){if(!t)return this;return this.each(function(e){if(!("className"in this))return;r=[];var i=X(this),o=H(this,t,e,i);o.split(/\s+/g).forEach(function(t){if(!n(this).hasClass(t))r.push(t)},this);r.length&&X(this,i+(i?" ":"")+r.join(" "))})},removeClass:function(e){return this.each(function(n){if(!("className"in this))return;if(e===t)return X(this,"");r=X(this);H(this,e,n,r).split(/\s+/g).forEach(function(t){r=r.replace($(t)," ")});X(this,r.trim())})},toggleClass:function(e,r){if(!e)return this;return this.each(function(i){var o=n(this),a=H(this,e,i,X(this));a.split(/\s+/g).forEach(function(e){(r===t?!o.hasClass(e):r)?o.addClass(e):o.removeClass(e)})})},scrollTop:function(e){if(!this.length)return;var n="scrollTop"in this[0];if(e===t)return n?this[0].scrollTop:this[0].pageYOffset;return this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})},scrollLeft:function(e){if(!this.length)return;var n="scrollLeft"in this[0];if(e===t)return n?this[0].scrollLeft:this[0].pageXOffset;return this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})},position:function(){if(!this.length)return;var t=this[0],e=this.offsetParent(),r=this.offset(),i=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();r.top-=parseFloat(n(t).css("margin-top"))||0;r.left-=parseFloat(n(t).css("margin-left"))||0;i.top+=parseFloat(n(e[0]).css("border-top-width"))||0;i.left+=parseFloat(n(e[0]).css("border-left-width"))||0;return{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var t=this.offsetParent||s.body;while(t&&!d.test(t.nodeName)&&n(t).css("position")=="static")t=t.offsetParent;return t})}};n.fn.detach=n.fn.remove;["width","height"].forEach(function(e){var r=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(i){var o,a=this[0];if(i===t)return _(a)?a["inner"+r]:I(a)?a.documentElement["scroll"+r]:(o=this.offset())&&o[e];else return this.each(function(t){a=n(this);a.css(e,H(this,i,t,a[e]()))})}});function Y(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)Y(t.childNodes[n],e)}g.forEach(function(t,e){var r=e%2;n.fn[t]=function(){var t,i=n.map(arguments,function(e){t=O(e);return t=="object"||t=="array"||e==null?e:S.fragment(e)}),o,a=this.length>1;if(i.length<1)return this;return this.each(function(t,u){o=r?u:u.parentNode;u=e==0?u.nextSibling:e==1?u.firstChild:e==2?u:null;var c=n.contains(s.documentElement,o);i.forEach(function(t){if(a)t=t.cloneNode(true);else if(!o)return n(t).remove();o.insertBefore(t,u);if(c)Y(t,function(t){if(t.nodeName!=null&&t.nodeName.toUpperCase()==="SCRIPT"&&(!t.type||t.type==="text/javascript")&&!t.src)window["eval"].call(window,t.innerHTML)})})})};n.fn[r?t+"To":"insert"+(e?"Before":"After")]=function(e){n(e)[t](this);return this}});S.Z.prototype=n.fn;S.uniq=G;S.deserializeValue=W;n.zepto=S;return n}();window.Zepto=Zepto;window.$===undefined&&(window.$=Zepto);(function(t){var e=1,n,r=Array.prototype.slice,i=t.isFunction,o=function(t){return typeof t=="string"},a={},s={},u="onfocusin"in window,c={focus:"focusin",blur:"focusout"},f={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents";function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,r){e=p(e);if(e.ns)var i=d(e.ns);return(a[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!r||t.sel==r)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&(!u&&t.e in c)||!!e}function v(t){return f[t]||u&&c[t]||t}function g(e,r,i,o,s,u,c){var h=l(e),d=a[h]||(a[h]=[]);r.split(/\s/).forEach(function(r){if(r=="ready")return t(document).ready(i);var a=p(r);a.fn=i;a.sel=s;if(a.e in f)i=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return a.fn.apply(this,arguments)};a.del=u;var l=u||i;a.proxy=function(t){t=j(t);if(t.isImmediatePropagationStopped())return;t.data=o;var r=l.apply(e,t._args==n?[t]:[t].concat(t._args));if(r===false)t.preventDefault(),t.stopPropagation();return r};a.i=d.length;d.push(a);if("addEventListener"in e)e.addEventListener(v(a.e),a.proxy,m(a,c))})}function y(t,e,n,r,i){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,r).forEach(function(e){delete a[o][e.i];if("removeEventListener"in t)t.removeEventListener(v(e.e),e.proxy,m(e,i))})})}t.event={add:g,remove:y};t.proxy=function(e,n){var a=2 in arguments&&r.call(arguments,2);if(i(e)){var s=function(){return e.apply(n,a?a.concat(r.call(arguments)):arguments)};s._zid=l(e);return s}else if(o(n)){if(a){a.unshift(e[n],e);return t.proxy.apply(null,a)}else{return t.proxy(e[n],e)}}else{throw new TypeError("expected function")}};t.fn.bind=function(t,e,n){return this.on(t,e,n)};t.fn.unbind=function(t,e){return this.off(t,e)};t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return true},b=function(){return false},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function j(e,r){if(r||!e.isDefaultPrevented){r||(r=e);t.each(E,function(t,n){var i=r[t];e[t]=function(){this[n]=x;return i&&i.apply(r,arguments)};e[n]=b});if(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?r.returnValue===false:r.getPreventDefault&&r.getPreventDefault())e.isDefaultPrevented=x}return e}function C(t){var e,r={originalEvent:t};for(e in t)if(!w.test(e)&&t[e]!==n)r[e]=t[e];return j(r,t)}t.fn.delegate=function(t,e,n){return this.on(e,t,n)};t.fn.undelegate=function(t,e,n){return this.off(e,t,n)};t.fn.live=function(e,n){t(document.body).delegate(this.selector,e,n);return this};t.fn.die=function(e,n){t(document.body).undelegate(this.selector,e,n);return this};t.fn.on=function(e,a,s,u,c){var f,l,h=this;if(e&&!o(e)){t.each(e,function(t,e){h.on(t,a,s,e,c)});return h}if(!o(a)&&!i(u)&&u!==false)u=s,s=a,a=n;if(i(s)||s===false)u=s,s=n;if(u===false)u=b;return h.each(function(n,i){if(c)f=function(t){y(i,t.type,u);return u.apply(this,arguments)};if(a)l=function(e){var n,o=t(e.target).closest(a,i).get(0);if(o&&o!==i){n=t.extend(C(e),{currentTarget:o,liveFired:i});return(f||u).apply(o,[n].concat(r.call(arguments,1)))}};g(i,e,u,s,a,l||f)})};t.fn.off=function(e,r,a){var s=this;if(e&&!o(e)){t.each(e,function(t,e){s.off(t,r,e)});return s}if(!o(r)&&!i(a)&&a!==false)a=r,r=n;if(a===false)a=b;return s.each(function(){y(this,e,a,r)})};t.fn.trigger=function(e,n){e=o(e)||t.isPlainObject(e)?t.Event(e):j(e);e._args=n;return this.each(function(){if(e.type in c&&typeof this[e.type]=="function")this[e.type]();else if("dispatchEvent"in this)this.dispatchEvent(e);else t(this).triggerHandler(e,n)})};t.fn.triggerHandler=function(e,n){var r,i;this.each(function(a,s){r=C(o(e)?t.Event(e):e);r._args=n;r.target=s;t.each(h(s,e.type||e),function(t,e){i=e.proxy(r);if(r.isImmediatePropagationStopped())return false})});return i};("focusin focusout focus blur load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select keydown keypress keyup error").split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}});t.Event=function(t,e){if(!o(t))e=t,t=e.type;var n=document.createEvent(s[t]||"Events"),r=true;if(e)for(var i in e)i=="bubbles"?r=!!e[i]:n[i]=e[i];n.initEvent(t,r,true);return j(n)}})(Zepto);(function(t){var e=0,n=window.document,r,i,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,s=/^(?:text|application)\/xml/i,u="application/json",c="text/html",f=/^\s*$/,l=n.createElement("a");l.href=window.location.href;function h(e,n,r){var i=t.Event(n);t(e).trigger(i,r);return!i.isDefaultPrevented()}function p(t,e,r,i){if(t.global)return h(e||n,r,i)}t.active=0;function d(e){if(e.global&&t.active++===0)p(e,null,"ajaxStart")}function m(e){if(e.global&&!--t.active)p(e,null,"ajaxStop")}function v(t,e){var n=e.context;if(e.beforeSend.call(n,t,e)===false||p(e,n,"ajaxBeforeSend",[t,e])===false)return false;p(e,n,"ajaxSend",[t,e])}function g(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e);if(r)r.resolveWith(i,[t,o,e]);p(n,i,"ajaxSuccess",[e,n,t]);x(o,e,n)}function y(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t);if(i)i.rejectWith(o,[n,e,t]);p(r,o,"ajaxError",[n,r,t||e]);x(e,n,r)}function x(t,e,n){var r=n.context;n.complete.call(r,e,t);p(n,r,"ajaxComplete",[e,n]);m(n)}function b(){}t.ajaxJSONP=function(r,i){if(!("type"in r))return t.ajax(r);var o=r.jsonpCallback,a=(t.isFunction(o)?o():o)||"jsonp"+ ++e,s=n.createElement("script"),u=window[a],c,f=function(e){t(s).triggerHandler("error",e||"abort")},l={abort:f},h;if(i)i.promise(l);t(s).on("load error",function(e,n){clearTimeout(h);t(s).off().remove();if(e.type=="error"||!c){y(null,n||"error",l,r,i)}else{g(c[0],l,r,i)}window[a]=u;if(c&&t.isFunction(u))u(c[0]);u=c=undefined});if(v(l,r)===false){f("abort");return l}window[a]=function(){c=arguments};s.src=r.url.replace(/\?(.+)=\?/,"?$1="+a);n.head.appendChild(s);if(r.timeout>0)h=setTimeout(function(){f("timeout")},r.timeout);return l};t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:true,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true};function w(t){if(t)t=t.split(";",2)[0];return t&&(t==c?"html":t==u?"json":a.test(t)?"script":s.test(t)&&"xml")||"text"}function E(t,e){if(e=="")return t;return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){if(e.processData&&e.data&&t.type(e.data)!="string")e.data=t.param(e.data,e.traditional);if(e.data&&(!e.type||e.type.toUpperCase()=="GET"))e.url=E(e.url,e.data),e.data=undefined}t.ajax=function(e){var o=t.extend({},e||{}),a=t.Deferred&&t.Deferred(),s;for(r in t.ajaxSettings)if(o[r]===undefined)o[r]=t.ajaxSettings[r];d(o);if(!o.crossDomain){s=n.createElement("a");s.href=o.url;s.href=s.href;o.crossDomain=l.protocol+"//"+l.host!==s.protocol+"//"+s.host}if(!o.url)o.url=window.location.toString();j(o);var u=o.dataType,c=/\?.+=\?/.test(o.url);if(c)u="jsonp";if(o.cache===false||(!e||e.cache!==true)&&("script"==u||"jsonp"==u))o.url=E(o.url,"_="+Date.now());if("jsonp"==u){if(!c)o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===false?"":"callback=?");return t.ajaxJSONP(o,a)}var h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,C=o.xhr(),S=C.setRequestHeader,T;if(a)a.promise(C);if(!o.crossDomain)m("X-Requested-With","XMLHttpRequest");m("Accept",h||"*/*");if(h=o.mimeType||h){if(h.indexOf(",")>-1)h=h.split(",",2)[0];C.overrideMimeType&&C.overrideMimeType(h)}if(o.contentType||o.contentType!==false&&o.data&&o.type.toUpperCase()!="GET")m("Content-Type",o.contentType||"application/x-www-form-urlencoded");if(o.headers)for(i in o.headers)m(i,o.headers[i]);C.setRequestHeader=m;C.onreadystatechange=function(){if(C.readyState==4){C.onreadystatechange=b;clearTimeout(T);var e,n=false;if(C.status>=200&&C.status<300||C.status==304||C.status==0&&x=="file:"){u=u||w(o.mimeType||C.getResponseHeader("content-type"));e=C.responseText;try{if(u=="script")(1,eval)(e);else if(u=="xml")e=C.responseXML;else if(u=="json")e=f.test(e)?null:t.parseJSON(e)}catch(r){n=r}if(n)y(n,"parsererror",C,o,a);else g(e,C,o,a)}else{y(C.statusText||null,C.status?"error":"abort",C,o,a)}}};if(v(C,o)===false){C.abort();y(null,"abort",C,o,a);return C}if(o.xhrFields)for(i in o.xhrFields)C[i]=o.xhrFields[i];var G="async"in o?o.async:true;C.open(o.type,o.url,G,o.username,o.password);for(i in p)S.apply(C,p[i]);if(o.timeout>0)T=setTimeout(function(){C.onreadystatechange=b;C.abort();y(null,"timeout",C,o,a)},o.timeout);C.send(o.data?o.data:null);return C};function C(e,n,r,i){if(t.isFunction(n))i=r,r=n,n=undefined;if(!t.isFunction(r))i=r,r=undefined;return{url:e,data:n,success:r,dataType:i}}t.get=function(){return t.ajax(C.apply(null,arguments))};t.post=function(){var e=C.apply(null,arguments);e.type="POST";return t.ajax(e)};t.getJSON=function(){var e=C.apply(null,arguments);e.dataType="json";return t.ajax(e)};t.fn.load=function(e,n,r){if(!this.length)return this;var i=this,a=e.split(/\s/),s,u=C(e,n,r),c=u.success;if(a.length>1)u.url=a[0],s=a[1];u.success=function(e){i.html(s?t("<div>").html(e.replace(o,"")).find(s):e);c&&c.apply(i,arguments)};t.ajax(u);return this};var S=encodeURIComponent;function T(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u);if(i)n=r?i:i+"["+(s||o=="object"||o=="array"?n:"")+"]";if(!i&&a)e.add(u.name,u.value);else if(o=="array"||!r&&o=="object")T(e,u,r,n);else e.add(n,u)})}t.param=function(e,n){var r=[];r.add=function(e,n){if(t.isFunction(n))n=n();if(n==null)n="";this.push(S(e)+"="+S(n))};T(r,e,n);return r.join("&").replace(/%20/g,"+")}})(Zepto);(function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){if(t.forEach)return t.forEach(i);r.push({name:e,value:t})};if(this[0])t.each(this[0].elements,function(r,o){n=o.type,e=o.name;if(e&&o.nodeName.toLowerCase()!="fieldset"&&!o.disabled&&n!="submit"&&n!="reset"&&n!="button"&&n!="file"&&(n!="radio"&&n!="checkbox"||o.checked))i(t(o).val())});return r};t.fn.serialize=function(){var t=[];this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))});return t.join("&")};t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n);if(!n.isDefaultPrevented())this.get(0).submit()}return this}})(Zepto);(function(t){if(!("__proto__"in{})){t.extend(t.zepto,{Z:function(e,n){e=e||[];t.extend(e,t.fn);e.selector=n||"";e.__Z=true;return e},isZ:function(e){return t.type(e)==="array"&&"__Z"in e}})}try{getComputedStyle(undefined)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}})(Zepto);