/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};/*
 * SimpleModal 1.3 - jQuery Plugin
 * http://www.ericmmartin.com/projects/simplemodal/
 * Copyright (c) 2009 Eric Martin
 * Dual licensed under the MIT and GPL licenses
 * Revision: $Id: jquery.simplemodal.js 205 2009-06-12 13:29:21Z emartin24 $
 */
;(function($){var ie6=$.browser.msie&&parseInt($.browser.version)==6&&typeof window['XMLHttpRequest']!="object",ieQuirks=null,w=[];$.modal=function(data,options){return $.modal.impl.init(data,options);};$.modal.close=function(){$.modal.impl.close();};$.fn.modal=function(options){return $.modal.impl.init(this,options);};$.modal.defaults={appendTo:'form',focus:true,opacity:50,overlayId:'simplemodal-overlay',overlayCss:{},containerId:'simplemodal-container',containerCss:{},dataId:'simplemodal-data',dataCss:{},minHeight:200,minWidth:300,maxHeight:null,maxWidth:null,autoResize:false,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:'simplemodal-close',escClose:true,overlayClose:false,position:null,persist:false,onOpen:null,onShow:null,onClose:null};$.modal.impl={opts:null,dialog:{},init:function(data,options){if(this.dialog.data){return false;}ieQuirks=$.browser.msie&&!$.boxModel;this.opts=$.extend({},$.modal.defaults,options);this.zIndex=this.opts.zIndex;this.occb=false;if(typeof data=='object'){data=data instanceof jQuery?data:$(data);if(data.parent().parent().size()>0){this.dialog.parentNode=data.parent();if(!this.opts.persist){this.dialog.orig=data.clone(true);}}}else if(typeof data=='string'||typeof data=='number'){data=$('<div/>').html(data);}else{alert('SimpleModal Error: Unsupported data type: '+typeof data);return false;}this.create(data);data=null;this.open();if($.isFunction(this.opts.onShow)){this.opts.onShow.apply(this,[this.dialog]);}return this;},create:function(data){w=this.getDimensions();if(ie6){this.dialog.iframe=$('<iframe src="javascript:false;"/>').css($.extend(this.opts.iframeCss,{display:'none',opacity:0,position:'absolute',height:w[0],width:w[1],zIndex:this.opts.zIndex,top:0,left:0})).appendTo(this.opts.appendTo);}this.dialog.overlay=$('<div/>').attr('id',this.opts.overlayId).addClass('simplemodal-overlay').css($.extend(this.opts.overlayCss,{display:'none',opacity:this.opts.opacity/100,height:w[0],width:w[1],position:'absolute',left:0,top:0,zIndex:this.opts.zIndex+1})).appendTo(this.opts.appendTo);this.dialog.container=$('<div/>').attr('id',this.opts.containerId).addClass('simplemodal-container').css($.extend(this.opts.containerCss,{display:'none',position:'absolute',zIndex:this.opts.zIndex+2})).append(this.opts.close&&this.opts.closeHTML?$(this.opts.closeHTML).addClass(this.opts.closeClass):'').appendTo(this.opts.appendTo);this.dialog.wrap=$('<div/>').attr('tabIndex',-1).addClass('simplemodal-wrap').css({height:'100%',outline:0,width:'100%'}).appendTo(this.dialog.container);this.dialog.data=data.attr('id',data.attr('id')||this.opts.dataId).addClass('simplemodal-data').css($.extend(this.opts.dataCss,{display:'none'}));data=null;this.setContainerDimensions();this.dialog.data.appendTo(this.dialog.wrap);if(ie6||ieQuirks){this.fixIE();}},bindEvents:function(){var self=this;$('.'+self.opts.closeClass).bind('click.simplemodal',function(e){e.preventDefault();self.close();});if(self.opts.close&&self.opts.overlayClose){self.dialog.overlay.bind('click.simplemodal',function(e){e.preventDefault();self.close();});}$(document).bind('keydown.simplemodal',function(e){if(self.opts.focus&&e.keyCode==9){self.watchTab(e);}else if((self.opts.close&&self.opts.escClose)&&e.keyCode==27){e.preventDefault();self.close();}});$(window).bind('resize.simplemodal',function(){w=self.getDimensions();self.opts.autoResize?self.setContainerDimensions():self.setPosition();if(ie6||ieQuirks){self.fixIE();}else{self.dialog.iframe&&self.dialog.iframe.css({height:w[0],width:w[1]});self.dialog.overlay.css({height:w[0],width:w[1]});}});},unbindEvents:function(){$('.'+this.opts.closeClass).unbind('click.simplemodal');$(document).unbind('keydown.simplemodal');$(window).unbind('resize.simplemodal');this.dialog.overlay.unbind('click.simplemodal');},fixIE:function(){var p=this.opts.position;$.each([this.dialog.iframe||null,this.dialog.overlay,this.dialog.container],function(i,el){if(el){var bch='document.body.clientHeight',bcw='document.body.clientWidth',bsh='document.body.scrollHeight',bsl='document.body.scrollLeft',bst='document.body.scrollTop',bsw='document.body.scrollWidth',ch='document.documentElement.clientHeight',cw='document.documentElement.clientWidth',sl='document.documentElement.scrollLeft',st='document.documentElement.scrollTop',s=el[0].style;s.position='absolute';if(i<2){s.removeExpression('height');s.removeExpression('width');s.setExpression('height',''+bsh+' > '+bch+' ? '+bsh+' : '+bch+' + "px"');s.setExpression('width',''+bsw+' > '+bcw+' ? '+bsw+' : '+bcw+' + "px"');}else{var te,le;if(p&&p.constructor==Array){var top=p[0]?typeof p[0]=='number'?p[0].toString():p[0].replace(/px/,''):el.css('top').replace(/px/,'');te=top.indexOf('%')==-1?top+' + (t = '+st+' ? '+st+' : '+bst+') + "px"':parseInt(top.replace(/%/,''))+' * (('+ch+' || '+bch+') / 100) + (t = '+st+' ? '+st+' : '+bst+') + "px"';if(p[1]){var left=typeof p[1]=='number'?p[1].toString():p[1].replace(/px/,'');le=left.indexOf('%')==-1?left+' + (t = '+sl+' ? '+sl+' : '+bsl+') + "px"':parseInt(left.replace(/%/,''))+' * (('+cw+' || '+bcw+') / 100) + (t = '+sl+' ? '+sl+' : '+bsl+') + "px"';}}else{te='('+ch+' || '+bch+') / 2 - (this.offsetHeight / 2) + (t = '+st+' ? '+st+' : '+bst+') + "px"';le='('+cw+' || '+bcw+') / 2 - (this.offsetWidth / 2) + (t = '+sl+' ? '+sl+' : '+bsl+') + "px"';}s.removeExpression('top');s.removeExpression('left');s.setExpression('top',te);s.setExpression('left',le);}}});},focus:function(pos){var self=this,p=pos||'first';var input=$(':input:enabled:visible:'+p,self.dialog.wrap);input.length>0?input.focus():self.dialog.wrap.focus();},getDimensions:function(){var el=$(window);var h=$.browser.opera&&$.browser.version>'9.5'&&$.fn.jquery<='1.2.6'?document.documentElement['clientHeight']:$.browser.opera&&$.browser.version<'9.5'&&$.fn.jquery>'1.2.6'?window.innerHeight:el.height();return[h,el.width()];},getVal:function(v){return v=='auto'?0:parseInt(v.replace(/px/,''));},setContainerDimensions:function(){var ch=this.getVal(this.dialog.container.css('height')),cw=this.dialog.container.width(),dh=this.dialog.data.height(),dw=this.dialog.data.width();var mh=this.opts.maxHeight&&this.opts.maxHeight<w[0]?this.opts.maxHeight:w[0],mw=this.opts.maxWidth&&this.opts.maxWidth<w[1]?this.opts.maxWidth:w[1];if(!ch){if(!dh){ch=this.opts.minHeight;}else{if(dh>mh){ch=mh;}else if(dh<this.opts.minHeight){ch=this.opts.minHeight;}else{ch=dh;}}}else{ch=ch>mh?mh:ch;}if(!cw){if(!dw){cw=this.opts.minWidth;}else{if(dw>mw){cw=mw;}else if(dw<this.opts.minWidth){cw=this.opts.minWidth;}else{cw=dw;}}}else{cw=cw>mw?mw:cw;}this.dialog.container.css({height:ch,width:cw});if(dh>ch||dw>cw){this.dialog.wrap.css({overflow:'auto'});}this.setPosition();},setPosition:function(){var top,left,hc=(w[0]/2)-((this.dialog.container.height()||this.dialog.data.height())/2),vc=(w[1]/2)-((this.dialog.container.width()||this.dialog.data.width())/2);if(this.opts.position&&this.opts.position.constructor==Array){top=this.opts.position[0]||hc;left=this.opts.position[1]||vc;}else{top=hc;left=vc;}this.dialog.container.css({left:left,top:top});},watchTab:function(e){var self=this;if($(e.target).parents('.simplemodal-container').length>0){self.inputs=$(':input:enabled:visible:first, :input:enabled:visible:last',self.dialog.data);if(!e.shiftKey&&e.target==self.inputs[self.inputs.length-1]||e.shiftKey&&e.target==self.inputs[0]||self.inputs.length==0){e.preventDefault();var pos=e.shiftKey?'last':'first';setTimeout(function(){self.focus(pos);},10);}}else{e.preventDefault();setTimeout(function(){self.focus();},10);}},open:function(){this.dialog.iframe&&this.dialog.iframe.show();if($.isFunction(this.opts.onOpen)){this.opts.onOpen.apply(this,[this.dialog]);}else{this.dialog.overlay.show();this.dialog.container.show();this.dialog.data.show();}this.focus();this.bindEvents();},close:function(){if(!this.dialog.data){return false;}this.unbindEvents();if($.isFunction(this.opts.onClose)&&!this.occb){this.occb=true;this.opts.onClose.apply(this,[this.dialog]);}else{if(this.dialog.parentNode){if(this.opts.persist){this.dialog.data.hide().appendTo(this.dialog.parentNode);}else{this.dialog.data.hide().remove();this.dialog.orig.appendTo(this.dialog.parentNode);}}else{this.dialog.data.hide().remove();}this.dialog.container.hide().remove();this.dialog.overlay.hide().remove();this.dialog.iframe&&this.dialog.iframe.hide().remove();this.dialog={};}}};})(jQuery);/* Copyright (c) 2008 Kean Loong Tan http://www.gimiti.com/kltan
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * jFlow
 * Version: 1.2 (July 7, 2008)
 * Requires: jQuery 1.2+
 */
(function(A){A.fn.jFlow=function(K){var B=A.extend({},A.fn.jFlow.defaults,K);var G=Math.floor(Math.random()*11);var I=B.controller;var C=B.slideWrapper;var H=B.selectedWrapper;var J=0;var E=A(I).length;var F=function(M,L){A(B.slides).children().css({overflow:"hidden"});A(B.slides+" iframe").hide().addClass("temp_hide");A(B.slides).animate({marginLeft:"-"+(L*A(B.slides).find(":first-child").width()+"px")},B.duration*(M),B.easing,function(){A(B.slides).children().css({overflow:"auto"});A(".temp_hide").show()})};A(this).find(I).each(function(L){A(this).click(function(){if(A(B.slides).is(":not(:animated)")){A(I).removeClass(H);A(this).addClass(H);var M=Math.abs(J-L);F(M,L);J=L}})});A(B.slides).before('<div id="'+C.substring(1,C.length)+'"></div>').appendTo(C);A(B.slides).find("div").each(function(){A(this).before('<div class="jFlowSlideContainer"></div>').appendTo(A(this).prev())});A(I).eq(J).addClass(H);var D=function(L){A(C).css({position:"relative",width:B.width,height:B.height,overflow:"hidden"});A(B.slides).css({position:"relative",width:A(C).width()*A(I).length+"px",height:A(C).height()+"px",overflow:"hidden"});A(B.slides).children().css({position:"relative",width:A(C).width()+"px",height:A(C).height()+"px","float":"left",overflow:"hidden"});A(B.slides).css({marginLeft:"-"+(J*A(B.slides).find(":eq(0)").width()+"px")})};D();A(window).resize(function(){D()});A(B.prev).click(function(){if(A(B.slides).is(":not(:animated)")){var L=1;if(J>0){J--}else{J=E-1;L=J}A(I).removeClass(H);F(L,J);A(I).eq(J).addClass(H)}});A(B.next).click(function(){if(A(B.slides).is(":not(:animated)")){var L=1;if(J<E-1){J++}else{J=0;L=E-1}A(I).removeClass(H);F(L,J);A(I).eq(J).addClass(H)}})};A.fn.jFlow.defaults={controller:".jFlowControl",slideWrapper:"#jFlowSlide",selectedWrapper:"jFlowSelected",easing:"swing",duration:400,width:"100%",prev:".jFlowPrev",next:".jFlowNext"}})(jQuery);/**
 * Galleria (http://monc.se/kitchen)
 *
 * Galleria is a javascript image gallery written in jQuery. 
 * It loads the images one by one from an unordered list and displays thumbnails when each image is loaded. 
 * It will create thumbnails for you if you choose so, scaled or unscaled, 
 * centered and cropped inside a fixed thumbnail box defined by CSS.
 * 
 * The core of Galleria lies in it's smart preloading behaviour, snappiness and the fresh absence 
 * of obtrusive design elements. Use it as a foundation for your custom styled image gallery.
 *
 * MAJOR CHANGES v.FROM 0.9
 * Galleria now features a useful history extension, enabling back button and bookmarking for each image.
 * The main image is no longer stored inside each list item, instead it is placed inside a container
 * onImage and onThumb functions lets you customize the behaviours of the images on the site
 *
 * Tested in Safari 3, Firefox 2, MSIE 6, MSIE 7, Opera 9
 * 
 * Version 1.0
 * Februari 21, 2008
 *
 * Copyright (c) 2008 David Hellsing (http://monc.se)
 * Licensed under the GPL licenses.
 * http://www.gnu.org/licenses/gpl.txt
 **/

;(function($){

var $$;


/**
 * 
 * @desc Convert images from a simple html <ul> into a thumbnail gallery
 * @author David Hellsing
 * @version 1.0
 *
 * @name Galleria
 * @type jQuery
 *
 * @cat plugins/Media
 * 
 * @example $('ul.gallery').galleria({options});
 * @desc Create a a gallery from an unordered list of images with thumbnails
 * @options
 *   insert:   (selector string) by default, Galleria will create a container div before your ul that holds the image.
 *             You can, however, specify a selector where the image will be placed instead (f.ex '#main_img')
 *   history:  Boolean for setting the history object in action with enabled back button, bookmarking etc.
 *   onImage:  (function) a function that gets fired when the image is displayed and brings the jQuery image object.
 *             You can use it to add click functionality and effects.
 *             f.ex onImage(image) { image.css('display','none').fadeIn(); } will fadeIn each image that is displayed
 *   onThumb:  (function) a function that gets fired when the thumbnail is displayed and brings the jQuery thumb object.
 *             Works the same as onImage except it targets the thumbnail after it's loaded.
 *
**/

$$ = $.fn.galleria = function($options) {
	
	// check for basic CSS support
	if (!$$.hasCSS()) { return false; }
	
	// init the modified history object
	$.historyInit($$.onPageLoad);
	
	// set default options
	var $defaults = {
		insert      : '.galleria_container',
		history     : true,
		clickNext   : true,
		onImage     : function(image,caption,thumb) {},
		onThumb     : function(thumb) {}
	};
	

	// extend the options
	var $opts = $.extend($defaults, $options);
	
	// bring the options to the galleria object
	for (var i in $opts) {
		$.galleria[i]  = $opts[i];
	}
	
	// if no insert selector, create a new division and insert it before the ul
	var _insert = ( $($opts.insert).is($opts.insert) ) ? 
		$($opts.insert) : 
		jQuery(document.createElement('div')).insertBefore(this);
		
	// create a wrapping div for the image
	var _div = $(document.createElement('div')).addClass('galleria_wrapper');
	
	// create a caption span
	var _span = $(document.createElement('span')).addClass('caption');
	
	// inject the wrapper in in the insert selector
	//_insert.addClass('galleria_container').append(_div).append(_span);
	_insert.addClass('galleria_container').append(_div);
	//-------------
	
	return this.each(function(){
		
		// add the Galleria class
		$(this).addClass('galleria');
		
		// loop through list
		$(this).children('li').each(function(i) {
			
			// bring the scope
			var _container = $(this);
			                
			// build element specific options
			var _o = $.meta ? $.extend({}, $opts, _container.data()) : $opts;
			
			// remove the clickNext if image is only child
			_o.clickNext = $(this).is(':only-child') ? false : _o.clickNext;
			
			// try to fetch an anchor
			var _a = $(this).find('a').is('a') ? $(this).find('a') : false;
			
			// reference the original image as a variable and hide it
			var _img = $(this).children('img').css('display','none');
			
			// extract the original source
			var _src = _a ? _a.attr('href') : _img.attr('src');
			
			// find a title
			var _title = _a ? _a.attr('title') : _img.attr('title');
			
			// create loader image            
			var _loader = new Image();
			
			// check url and activate container if match
			if (_o.history && (window.location.hash && window.location.hash.replace(/\#/,'') == _src)) {
				_container.siblings('.active').removeClass('active');
				_container.addClass('active');
			}
		
			// begin loader
			$(_loader).load(function () {
				
				// try to bring the alt
				$(this).attr('alt',_img.attr('alt'));
				
				//-----------------------------------------------------------------
				// the image is loaded, let's create the thumbnail
				
				var _thumb = _a ? 
					_a.find('img').addClass('thumb noscale').css('display','none') :
					_img.clone(true).addClass('thumb').css('display','none');
				
				if (_a) { _a.replaceWith(_thumb); }
				
				if (!_thumb.hasClass('noscale')) { // scaled tumbnails!
					var w = Math.ceil( _img.width() / _img.height() * _container.height() );
					var h = Math.ceil( _img.height() / _img.width() * _container.width() );
					if (w < h) {
						_thumb.css({ height: 'auto', width: _container.width(), marginTop: -(h-_container.height())/2 });
					} else {
						_thumb.css({ width: 'auto', height: _container.height(), marginLeft: -(w-_container.width())/2 });
					}
				} else { // Center thumbnails.
					// a tiny timer fixed the width/height
					window.setTimeout(function() {
						_thumb.css({
							marginLeft: -( _thumb.width() - _container.width() )/2, 
							marginTop:  -( _thumb.height() - _container.height() )/2
						});
					}, 1);
				}
				
				// add the rel attribute
				_thumb.attr('rel',_src);
				
				// add the title attribute
				_thumb.attr('title',_title);
				
				// add the click functionality to the _thumb
				_thumb.click(function() {
					$.galleria.activate(_src);
					$(this).parent().parent().children('li').each(function(li){
						if($(this).hasClass('active')){
							$("#imgNr").text((parseInt(li)+1));
							//H�mta text f�r aktiv bild
							$('p.MainImgText').html($(this).children('span.ThumbText').html());
						}
					});
				});
				
				// hover classes for IE6
				_thumb.hover(
					function() { $(this).addClass('hover'); },
					function() { $(this).removeClass('hover'); }
				);
				_container.hover(
					function() { _container.addClass('hover'); },
					function() { _container.removeClass('hover'); }
				);

				// prepend the thumbnail in the container
				_container.prepend(_thumb);
				
				// show the thumbnail
				_thumb.css('display','block');
				
				// call the onThumb function
				_o.onThumb(jQuery(_thumb));
				
				// check active class and activate image if match
				if (_container.hasClass('active')) {
					$.galleria.activate(_src);
					//_span.text(_title);
				}
				
				//-----------------------------------------------------------------
				
				// finally delete the original image
				_img.remove();
				
			}).error(function () {
				
				// Error handling
			    _container.html('<span class="error" style="color:red">Error loading image: '+_src+'</span>');
			
			}).attr('src', _src);
		});
	});
};

/**
 *
 * @name NextSelector
 *
 * @desc Returns the sibling sibling, or the first one
 *
**/

$$.nextSelector = function(selector) {
	return $(selector).is(':last-child') ?
		   $(selector).siblings(':first-child') :
    	   $(selector).next();
    	   
};

/**
 *
 * @name previousSelector
 *
 * @desc Returns the previous sibling, or the last one
 *
**/

$$.previousSelector = function(selector) {
	return $(selector).is(':first-child') ?
		   $(selector).siblings(':last-child') :
    	   $(selector).prev();
    	   
};

/**
 *
 * @name hasCSS
 *
 * @desc Checks for CSS support and returns a boolean value
 *
**/

$$.hasCSS = function()  {
	$('body').append(
		$(document.createElement('div')).attr('id','css_test')
		.css({ width:'1px', height:'1px', display:'none' })
	);
	var _v = ($('#css_test').width() != 1) ? false : true;
	$('#css_test').remove();
	return _v;
};

/**
 *
 * @name onPageLoad
 *
 * @desc The function that displays the image and alters the active classes
 *
 * Note: This function gets called when:
 * 1. after calling $.historyInit();
 * 2. after calling $.historyLoad();
 * 3. after pushing "Go Back" button of a browser
 *
**/

$$.onPageLoad = function(_src) {	
	
	// get the wrapper
	var _wrapper = $('.galleria_wrapper');
	
	// get the thumb
	var _thumb = $('.galleria img[rel="'+_src+'"]');
	
	if (_src) {
		
		// new hash location
		if ($.galleria.history) {
			window.location = window.location.href.replace(/\#.*/,'') + '#' + _src;
		}
		
		// alter the active classes
		_thumb.parents('li').siblings('.active').removeClass('active');
		_thumb.parents('li').addClass('active');
	
		// define a new image
		var _img   = $(new Image()).attr('src',_src).addClass('replaced');

		// empty the wrapper and insert the new image
		_wrapper.empty().append(_img);

		// insert the caption
		_wrapper.siblings('.caption').text(_thumb.attr('title'));
		
		// fire the onImage function to customize the loaded image's features
		$.galleria.onImage(_img,_wrapper.siblings('.caption'),_thumb);
		
		// add clickable image helper
		if($.galleria.clickNext) {
			_img.css('cursor','pointer').click(function() { $.galleria.next(); })
		}
		
	} else {
		
		// clean up the container if none are active
		_wrapper.siblings().andSelf().empty();
		
		// remove active classes
		$('.galleria li.active').removeClass('active');
	}

	// place the source in the galleria.current variable
	$.galleria.current = _src;
	
}

/**
 *
 * @name jQuery.galleria
 *
 * @desc The global galleria object holds four constant variables and four public methods:
 *       $.galleria.history = a boolean for setting the history object in action with named URLs
 *       $.galleria.current = is the current source that's being viewed.
 *       $.galleria.clickNext = boolean helper for adding a clickable image that leads to the next one in line
 *       $.galleria.next() = displays the next image in line, returns to first image after the last.
 *       $.galleria.prev() = displays the previous image in line, returns to last image after the first.
 *       $.galleria.activate(_src) = displays an image from _src in the galleria container.
 *       $.galleria.onImage(image,caption) = gets fired when the image is displayed.
 *
**/

$.extend({galleria : {
	current : '',
	onImage : function(){},
	activate : function(_src) { 
		if ($.galleria.history) {
			$.historyLoad(_src);
		} else {
			$$.onPageLoad(_src);
		}
	},
	next : function() {
		var _next = $($$.nextSelector($('.galleria img[rel="'+$.galleria.current+'"]').parents('li'))).find('img').attr('rel');
		$.galleria.activate(_next);
		//Set image-counter - DanHan
		var currentNo = $("#imgNr").text();
		var totalImgs = $("#imgTot").text();
		//If next step is higher than total number of images we start over at image 1.
		if((parseInt(currentNo) + 1) <= totalImgs){
			$("#imgNr").text(parseInt(currentNo) + 1);
		}else{
			$("#imgNr").text("1");
		}
		//H�mta text f�r aktiv bild
		$('p.MainImgText').html($('.galleria').children('.active').children('span.ThumbText').html());
	},
	prev : function() {
		var _prev = $($$.previousSelector($('.galleria img[rel="'+$.galleria.current+'"]').parents('li'))).find('img').attr('rel');
		$.galleria.activate(_prev);
		//Set image-counter - DanHan
		var currentNo = $("#imgNr").text();
		var totalImgs = $("#imgTot").text();
		//If next step is lower than zero we start from the total number of images.
		if((parseInt(currentNo) - 1) > 0){
			$("#imgNr").text(parseInt(currentNo) - 1);
		}else{
			$("#imgNr").text(totalImgs);
		}
		//H�mta text f�r aktiv bild
		$('p.MainImgText').html($('.galleria').children('.active').children('span.ThumbText').html());
	}
}
});

})(jQuery);


/**
 *
 * Packed history extension for jQuery
 * Credits to http://www.mikage.to/
 *
**/


jQuery.extend({historyCurrentHash:undefined,historyCallback:undefined,historyInit:function(callback){jQuery.historyCallback=callback;var current_hash=location.hash;jQuery.historyCurrentHash=current_hash;if(jQuery.browser.msie){if(jQuery.historyCurrentHash==''){jQuery.historyCurrentHash='#'}$("body").prepend('<iframe id="jQuery_history" style="display: none;"></iframe>');var ihistory=$("#jQuery_history")[0];var iframe=ihistory.contentWindow.document;iframe.open();iframe.close();iframe.location.hash=current_hash}else if($.browser.safari){jQuery.historyBackStack=[];jQuery.historyBackStack.length=history.length;jQuery.historyForwardStack=[];jQuery.isFirst=true}jQuery.historyCallback(current_hash.replace(/^#/,''));setInterval(jQuery.historyCheck,100)},historyAddHistory:function(hash){jQuery.historyBackStack.push(hash);jQuery.historyForwardStack.length=0;this.isFirst=true},historyCheck:function(){if(jQuery.browser.msie){var ihistory=$("#jQuery_history")[0];var iframe=ihistory.contentDocument||ihistory.contentWindow.document;var current_hash=iframe.location.hash;if(current_hash!=jQuery.historyCurrentHash){location.hash=current_hash;jQuery.historyCurrentHash=current_hash;jQuery.historyCallback(current_hash.replace(/^#/,''))}}else if($.browser.safari){if(!jQuery.dontCheck){var historyDelta=history.length-jQuery.historyBackStack.length;if(historyDelta){jQuery.isFirst=false;if(historyDelta<0){for(var i=0;i<Math.abs(historyDelta);i++)jQuery.historyForwardStack.unshift(jQuery.historyBackStack.pop())}else{for(var i=0;i<historyDelta;i++)jQuery.historyBackStack.push(jQuery.historyForwardStack.shift())}var cachedHash=jQuery.historyBackStack[jQuery.historyBackStack.length-1];if(cachedHash!=undefined){jQuery.historyCurrentHash=location.hash;jQuery.historyCallback(cachedHash)}}else if(jQuery.historyBackStack[jQuery.historyBackStack.length-1]==undefined&&!jQuery.isFirst){if(document.URL.indexOf('#')>=0){jQuery.historyCallback(document.URL.split('#')[1])}else{var current_hash=location.hash;jQuery.historyCallback('')}jQuery.isFirst=true}}}else{var current_hash=location.hash;if(current_hash!=jQuery.historyCurrentHash){jQuery.historyCurrentHash=current_hash;jQuery.historyCallback(current_hash.replace(/^#/,''))}}},historyLoad:function(hash){var newhash;if(jQuery.browser.safari){newhash=hash}else{newhash='#'+hash;location.hash=newhash}jQuery.historyCurrentHash=newhash;if(jQuery.browser.msie){var ihistory=$("#jQuery_history")[0];var iframe=ihistory.contentWindow.document;iframe.open();iframe.close();iframe.location.hash=newhash;jQuery.historyCallback(hash)}else if(jQuery.browser.safari){jQuery.dontCheck=true;this.historyAddHistory(hash);var fn=function(){jQuery.dontCheck=false};window.setTimeout(fn,200);jQuery.historyCallback(hash);location.hash=newhash}else{jQuery.historyCallback(hash)}}});
/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($) {

$.effects = {
	version: "1.7.2",

	// Saves a set of properties in a data storage
	save: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
		}
	},

	setMode: function(el, mode) {
		if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
		return mode;
	},

	getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
		// this should be a little more flexible in the future to handle a string & hash
		var y, x;
		switch (origin[0]) {
			case 'top': y = 0; break;
			case 'middle': y = 0.5; break;
			case 'bottom': y = 1; break;
			default: y = origin[0] / original.height;
		};
		switch (origin[1]) {
			case 'left': x = 0; break;
			case 'center': x = 0.5; break;
			case 'right': x = 1; break;
			default: x = origin[1] / original.width;
		};
		return {x: x, y: y};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function(element) {

		//if the element is already wrapped, return it
		if (element.parent().is('.ui-effects-wrapper'))
			return element.parent();

		//Cache width,height and float properties of the element, and create a wrapper around it
		var props = { width: element.outerWidth(true), height: element.outerHeight(true), 'float': element.css('float') };
		element.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');
		var wrapper = element.parent();

		//Transfer the positioning of the element to the wrapper
		if (element.css('position') == 'static') {
			wrapper.css({ position: 'relative' });
			element.css({ position: 'relative'} );
		} else {
			var top = element.css('top'); if(isNaN(parseInt(top,10))) top = 'auto';
			var left = element.css('left'); if(isNaN(parseInt(left,10))) left = 'auto';
			wrapper.css({ position: element.css('position'), top: top, left: left, zIndex: element.css('z-index') }).show();
			element.css({position: 'relative', top: 0, left: 0 });
		}

		wrapper.css(props);
		return wrapper;
	},

	removeWrapper: function(element) {
		if (element.parent().is('.ui-effects-wrapper'))
			return element.parent().replaceWith(element);
		return element;
	},

	setTransition: function(element, list, factor, value) {
		value = value || {};
		$.each(list, function(i, x){
			unit = element.cssUnit(x);
			if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
		});
		return value;
	},

	//Base function to animate from one class to another in a seamless transition
	animateClass: function(value, duration, easing, callback) {

		var cb = (typeof easing == "function" ? easing : (callback ? callback : null));
		var ea = (typeof easing == "string" ? easing : null);

		return this.each(function() {

			var offset = {}; var that = $(this); var oldStyleAttr = that.attr("style") || '';
			if(typeof oldStyleAttr == 'object') oldStyleAttr = oldStyleAttr["cssText"]; /* Stupidly in IE, style is a object.. */
			if(value.toggle) { that.hasClass(value.toggle) ? value.remove = value.toggle : value.add = value.toggle; }

			//Let's get a style offset
			var oldStyle = $.extend({}, (document.defaultView ? document.defaultView.getComputedStyle(this,null) : this.currentStyle));
			if(value.add) that.addClass(value.add); if(value.remove) that.removeClass(value.remove);
			var newStyle = $.extend({}, (document.defaultView ? document.defaultView.getComputedStyle(this,null) : this.currentStyle));
			if(value.add) that.removeClass(value.add); if(value.remove) that.addClass(value.remove);

			// The main function to form the object for animation
			for(var n in newStyle) {
				if( typeof newStyle[n] != "function" && newStyle[n] /* No functions and null properties */
				&& n.indexOf("Moz") == -1 && n.indexOf("length") == -1 /* No mozilla spezific render properties. */
				&& newStyle[n] != oldStyle[n] /* Only values that have changed are used for the animation */
				&& (n.match(/color/i) || (!n.match(/color/i) && !isNaN(parseInt(newStyle[n],10)))) /* Only things that can be parsed to integers or colors */
				&& (oldStyle.position != "static" || (oldStyle.position == "static" && !n.match(/left|top|bottom|right/))) /* No need for positions when dealing with static positions */
				) offset[n] = newStyle[n];
			}

			that.animate(offset, duration, ea, function() { // Animate the newly constructed offset object
				// Change style attribute back to original. For stupid IE, we need to clear the damn object.
				if(typeof $(this).attr("style") == 'object') { $(this).attr("style")["cssText"] = ""; $(this).attr("style")["cssText"] = oldStyleAttr; } else $(this).attr("style", oldStyleAttr);
				if(value.add) $(this).addClass(value.add); if(value.remove) $(this).removeClass(value.remove);
				if(cb) cb.apply(this, arguments);
			});

		});
	}
};


function _normalizeArguments(a, m) {

	var o = a[1] && a[1].constructor == Object ? a[1] : {}; if(m) o.mode = m;
	var speed = a[1] && a[1].constructor != Object ? a[1] : (o.duration ? o.duration : a[2]); //either comes from options.duration or the secon/third argument
		speed = $.fx.off ? 0 : typeof speed === "number" ? speed : $.fx.speeds[speed] || $.fx.speeds._default;
	var callback = o.callback || ( $.isFunction(a[1]) && a[1] ) || ( $.isFunction(a[2]) && a[2] ) || ( $.isFunction(a[3]) && a[3] );

	return [a[0], o, speed, callback];
	
}

//Extend the methods of jQuery
$.fn.extend({

	//Save old methods
	_show: $.fn.show,
	_hide: $.fn.hide,
	__toggle: $.fn.toggle,
	_addClass: $.fn.addClass,
	_removeClass: $.fn.removeClass,
	_toggleClass: $.fn.toggleClass,

	// New effect methods
	effect: function(fx, options, speed, callback) {
		return $.effects[fx] ? $.effects[fx].call(this, {method: fx, options: options || {}, duration: speed, callback: callback }) : null;
	},

	show: function() {
		if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])))
			return this._show.apply(this, arguments);
		else {
			return this.effect.apply(this, _normalizeArguments(arguments, 'show'));
		}
	},

	hide: function() {
		if(!arguments[0] || (arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])))
			return this._hide.apply(this, arguments);
		else {
			return this.effect.apply(this, _normalizeArguments(arguments, 'hide'));
		}
	},

	toggle: function(){
		if(!arguments[0] ||
			(arguments[0].constructor == Number || (/(slow|normal|fast)/).test(arguments[0])) ||
			($.isFunction(arguments[0]) || typeof arguments[0] == 'boolean')) {
			return this.__toggle.apply(this, arguments);
		} else {
			return this.effect.apply(this, _normalizeArguments(arguments, 'toggle'));
		}
	},

	addClass: function(classNames, speed, easing, callback) {
		return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
	},
	removeClass: function(classNames,speed,easing,callback) {
		return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
	},
	toggleClass: function(classNames,speed,easing,callback) {
		return ( (typeof speed !== "boolean") && speed ) ? $.effects.animateClass.apply(this, [{ toggle: classNames },speed,easing,callback]) : this._toggleClass(classNames, speed);
	},
	morph: function(remove,add,speed,easing,callback) {
		return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
	},
	switchClass: function() {
		return this.morph.apply(this, arguments);
	},

	// helper functions
	cssUnit: function(key) {
		var style = this.css(key), val = [];
		$.each( ['em','px','%','pt'], function(i, unit){
			if(style.indexOf(unit) > 0)
				val = [parseFloat(style), unit];
		});
		return val;
	}
});

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

// We override the animation for all of these color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		$.fx.step[attr] = function(fx) {
				if ( fx.state == 0 ) {
						fx.start = getColor( fx.elem, attr );
						fx.end = getRGB( fx.end );
				}

				fx.elem.style[attr] = "rgb(" + [
						Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0],10), 255), 0),
						Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1],10), 255), 0),
						Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2],10), 255), 0)
				].join(",") + ")";
			};
});

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
				return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
				return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
				return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
				return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
				return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
				return colors['transparent'];

		// Otherwise, we're most likely dealing with a named color
		return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
		var color;

		do {
				color = $.curCSS(elem, attr);

				// Keep going until we find an element that has color, or we hit the body
				if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
						break;

				attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
};

// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/

var colors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	violet:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0],
	transparent: [255,255,255]
};

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert($.easing.default);
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

})(jQuery);
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
;jQuery.ui || (function($) {

var _remove = $.fn.remove,
	isFF2 = $.browser.mozilla && (parseFloat($.browser.version) < 1.9);

//Helper functions and ui object
$.ui = {
	version: "1.7.2",

	// $.ui.plugin is deprecated.  Use the proxy pattern instead.
	plugin: {
		add: function(module, option, set) {
			var proto = $.ui[module].prototype;
			for(var i in set) {
				proto.plugins[i] = proto.plugins[i] || [];
				proto.plugins[i].push([option, set[i]]);
			}
		},
		call: function(instance, name, args) {
			var set = instance.plugins[name];
			if(!set || !instance.element[0].parentNode) { return; }

			for (var i = 0; i < set.length; i++) {
				if (instance.options[set[i][0]]) {
					set[i][1].apply(instance.element, args);
				}
			}
		}
	},

	contains: function(a, b) {
		return document.compareDocumentPosition
			? a.compareDocumentPosition(b) & 16
			: a !== b && a.contains(b);
	},

	hasScroll: function(el, a) {

		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ($(el).css('overflow') == 'hidden') { return false; }

		var scroll = (a && a == 'left') ? 'scrollLeft' : 'scrollTop',
			has = false;

		if (el[scroll] > 0) { return true; }

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[scroll] = 1;
		has = (el[scroll] > 0);
		el[scroll] = 0;
		return has;
	},

	isOverAxis: function(x, reference, size) {
		//Determines when x coordinate is over "b" element axis
		return (x > reference) && (x < (reference + size));
	},

	isOver: function(y, x, top, left, height, width) {
		//Determines when x, y coordinates is over "b" element
		return $.ui.isOverAxis(y, top, height) && $.ui.isOverAxis(x, left, width);
	},

	keyCode: {
		BACKSPACE: 8,
		CAPS_LOCK: 20,
		COMMA: 188,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		INSERT: 45,
		LEFT: 37,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
};

// WAI-ARIA normalization
if (isFF2) {
	var attr = $.attr,
		removeAttr = $.fn.removeAttr,
		ariaNS = "http://www.w3.org/2005/07/aaa",
		ariaState = /^aria-/,
		ariaRole = /^wairole:/;

	$.attr = function(elem, name, value) {
		var set = value !== undefined;

		return (name == 'role'
			? (set
				? attr.call(this, elem, name, "wairole:" + value)
				: (attr.apply(this, arguments) || "").replace(ariaRole, ""))
			: (ariaState.test(name)
				? (set
					? elem.setAttributeNS(ariaNS,
						name.replace(ariaState, "aaa:"), value)
					: attr.call(this, elem, name.replace(ariaState, "aaa:")))
				: attr.apply(this, arguments)));
	};

	$.fn.removeAttr = function(name) {
		return (ariaState.test(name)
			? this.each(function() {
				this.removeAttributeNS(ariaNS, name.replace(ariaState, ""));
			}) : removeAttr.call(this, name));
	};
}

//jQuery plugins
$.fn.extend({
	remove: function() {
		// Safari has a native remove event which actually removes DOM elements,
		// so we have to use triggerHandler instead of trigger (#3037).
		$("*", this).add(this).each(function() {
			$(this).triggerHandler("remove");
		});
		return _remove.apply(this, arguments );
	},

	enableSelection: function() {
		return this
			.attr('unselectable', 'off')
			.css('MozUserSelect', '')
			.unbind('selectstart.ui');
	},

	disableSelection: function() {
		return this
			.attr('unselectable', 'on')
			.css('MozUserSelect', 'none')
			.bind('selectstart.ui', function() { return false; });
	},

	scrollParent: function() {
		var scrollParent;
		if(($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.curCSS(this,'position',1)) && (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		}

		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
	}
});


//Additional selectors
$.extend($.expr[':'], {
	data: function(elem, i, match) {
		return !!$.data(elem, match[3]);
	},

	focusable: function(element) {
		var nodeName = element.nodeName.toLowerCase(),
			tabIndex = $.attr(element, 'tabindex');
		return (/input|select|textarea|button|object/.test(nodeName)
			? !element.disabled
			: 'a' == nodeName || 'area' == nodeName
				? element.href || !isNaN(tabIndex)
				: !isNaN(tabIndex))
			// the element and all of its ancestors must be visible
			// the browser may report that the area is hidden
			&& !$(element)['area' == nodeName ? 'parents' : 'closest'](':hidden').length;
	},

	tabbable: function(element) {
		var tabIndex = $.attr(element, 'tabindex');
		return (isNaN(tabIndex) || tabIndex >= 0) && $(element).is(':focusable');
	}
});


// $.widget is a factory to create jQuery plugins
// taking some boilerplate code out of the plugin code
function getter(namespace, plugin, method, args) {
	function getMethods(type) {
		var methods = $[namespace][plugin][type] || [];
		return (typeof methods == 'string' ? methods.split(/,?\s+/) : methods);
	}

	var methods = getMethods('getter');
	if (args.length == 1 && typeof args[0] == 'string') {
		methods = methods.concat(getMethods('getterSetter'));
	}
	return ($.inArray(method, methods) != -1);
}

$.widget = function(name, prototype) {
	var namespace = name.split(".")[0];
	name = name.split(".")[1];

	// create plugin method
	$.fn[name] = function(options) {
		var isMethodCall = (typeof options == 'string'),
			args = Array.prototype.slice.call(arguments, 1);

		// prevent calls to internal methods
		if (isMethodCall && options.substring(0, 1) == '_') {
			return this;
		}

		// handle getter methods
		if (isMethodCall && getter(namespace, name, options, args)) {
			var instance = $.data(this[0], name);
			return (instance ? instance[options].apply(instance, args)
				: undefined);
		}

		// handle initialization and non-getter methods
		return this.each(function() {
			var instance = $.data(this, name);

			// constructor
			(!instance && !isMethodCall &&
				$.data(this, name, new $[namespace][name](this, options))._init());

			// method call
			(instance && isMethodCall && $.isFunction(instance[options]) &&
				instance[options].apply(instance, args));
		});
	};

	// create widget constructor
	$[namespace] = $[namespace] || {};
	$[namespace][name] = function(element, options) {
		var self = this;

		this.namespace = namespace;
		this.widgetName = name;
		this.widgetEventPrefix = $[namespace][name].eventPrefix || name;
		this.widgetBaseClass = namespace + '-' + name;

		this.options = $.extend({},
			$.widget.defaults,
			$[namespace][name].defaults,
			$.metadata && $.metadata.get(element)[name],
			options);

		this.element = $(element)
			.bind('setData.' + name, function(event, key, value) {
				if (event.target == element) {
					return self._setData(key, value);
				}
			})
			.bind('getData.' + name, function(event, key) {
				if (event.target == element) {
					return self._getData(key);
				}
			})
			.bind('remove', function() {
				return self.destroy();
			});
	};

	// add widget prototype
	$[namespace][name].prototype = $.extend({}, $.widget.prototype, prototype);

	// TODO: merge getter and getterSetter properties from widget prototype
	// and plugin prototype
	$[namespace][name].getterSetter = 'option';
};

$.widget.prototype = {
	_init: function() {},
	destroy: function() {
		this.element.removeData(this.widgetName)
			.removeClass(this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled')
			.removeAttr('aria-disabled');
	},

	option: function(key, value) {
		var options = key,
			self = this;

		if (typeof key == "string") {
			if (value === undefined) {
				return this._getData(key);
			}
			options = {};
			options[key] = value;
		}

		$.each(options, function(key, value) {
			self._setData(key, value);
		});
	},
	_getData: function(key) {
		return this.options[key];
	},
	_setData: function(key, value) {
		this.options[key] = value;

		if (key == 'disabled') {
			this.element
				[value ? 'addClass' : 'removeClass'](
					this.widgetBaseClass + '-disabled' + ' ' +
					this.namespace + '-state-disabled')
				.attr("aria-disabled", value);
		}
	},

	enable: function() {
		this._setData('disabled', false);
	},
	disable: function() {
		this._setData('disabled', true);
	},

	_trigger: function(type, event, data) {
		var callback = this.options[type],
			eventName = (type == this.widgetEventPrefix
				? type : this.widgetEventPrefix + type);

		event = $.Event(event);
		event.type = eventName;

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if (event.originalEvent) {
			for (var i = $.event.props.length, prop; i;) {
				prop = $.event.props[--i];
				event[prop] = event.originalEvent[prop];
			}
		}

		this.element.trigger(event, data);

		return !($.isFunction(callback) && callback.call(this.element[0], event, data) === false
			|| event.isDefaultPrevented());
	}
};

$.widget.defaults = {
	disabled: false
};


/** Mouse Interaction Plugin **/

$.ui.mouse = {
	_mouseInit: function() {
		var self = this;

		this.element
			.bind('mousedown.'+this.widgetName, function(event) {
				return self._mouseDown(event);
			})
			.bind('click.'+this.widgetName, function(event) {
				if(self._preventClickEvent) {
					self._preventClickEvent = false;
					event.stopImmediatePropagation();
					return false;
				}
			});

		// Prevent text selection in IE
		if ($.browser.msie) {
			this._mouseUnselectable = this.element.attr('unselectable');
			this.element.attr('unselectable', 'on');
		}

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind('.'+this.widgetName);

		// Restore text selection in IE
		($.browser.msie
			&& this.element.attr('unselectable', this._mouseUnselectable));
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		// TODO: figure out why we have to use originalEvent
		event.originalEvent = event.originalEvent || {};
		if (event.originalEvent.mouseHandled) { return; }

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var self = this,
			btnIsLeft = (event.which == 1),
			elIsCancel = (typeof this.options.cancel == "string" ? $(event.target).parents().add(event.target).filter(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				self.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return self._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return self._mouseUp(event);
		};
		$(document)
			.bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.bind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		// preventDefault() is used to prevent the selection of text here -
		// however, in Safari, this causes select boxes not to be selectable
		// anymore, so this fix is needed
		($.browser.safari || event.preventDefault());

		event.originalEvent.mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// IE mouseup check - mouseup happened when mouse was out of window
	    if ($.browser.msie && parseInt(jQuery.browser.version, 10) < 9 && !event.button) {
			return this._mouseUp(event);
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		$(document)
			.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		if (this._mouseStarted) {
			this._mouseStarted = false;
			this._preventClickEvent = (event.target == this._mouseDownEvent.target);
			this._mouseStop(event);
		}

		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(event) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(event) {},
	_mouseDrag: function(event) {},
	_mouseStop: function(event) {},
	_mouseCapture: function(event) { return true; }
};

$.ui.mouse.defaults = {
	cancel: null,
	distance: 1,
	delay: 0
};

})(jQuery);
/*
 * jQuery UI Slider 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	ui.core.js
 */

(function($) {

$.widget("ui.slider", $.extend({}, $.ui.mouse, {

	_init: function() {

		var self = this, o = this.options;
		this._keySliding = false;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();

		this.element
			.addClass("ui-slider"
				+ " ui-slider-" + this.orientation
				+ " ui-widget"
				+ " ui-widget-content"
				+ " ui-corner-all");

		this.range = $([]);

		if (o.range) {

			if (o.range === true) {
				this.range = $('<div></div>');
				if (!o.values) o.values = [this._valueMin(), this._valueMin()];
				if (o.values.length && o.values.length != 2) {
					o.values = [o.values[0], o.values[0]];
				}
			} else {
				this.range = $('<div></div>');
			}

			this.range
				.appendTo(this.element)
				.addClass("ui-slider-range");

			if (o.range == "min" || o.range == "max") {
				this.range.addClass("ui-slider-range-" + o.range);
			}

			// note: this isn't the most fittingly semantic framework class for this element,
			// but worked best visually with a variety of themes
			this.range.addClass("ui-widget-header");

		}
		//H�nger p� ett id p� f�rsta slide-handle f�r att kunna koppla p� en label
		if ($(".ui-slider-handle", this.element).length == 0){
			var _parentID = this.element.attr("id");
			var _href = '<a id="'+ _parentID+1 +'" href="#"></a>';
			$(_href)
				.appendTo(this.element)
				.addClass("ui-slider-handle");
		}
		
		if (o.values && o.values.length) {
			while ($(".ui-slider-handle", this.element).length < o.values.length)
				$('<a href="#"></a>')
					.appendTo(this.element)
					.addClass("ui-slider-handle");
		}

		this.handles = $(".ui-slider-handle", this.element)
			.addClass("ui-state-default"
				+ " ui-corner-all");

		this.handle = this.handles.eq(0);

		this.handles.add(this.range).filter("a")
			.click(function(event) {
				event.preventDefault();
			});
//			.hover(function() {
//				if (!o.disabled) {
//					$(this).addClass('ui-state-hover');
//				}
//			}, function() {
//				$(this).removeClass('ui-state-hover');
//			})
//			.focus(function() {
//				if (!o.disabled) {
//					$(".ui-slider .ui-state-focus").removeClass('ui-state-focus'); $(this).addClass('ui-state-focus');
//				} else {
//					$(this).blur();
//				}
//			})
//			.blur(function() {
//				$(this).removeClass('ui-state-focus');
//			});

		this.handles.each(function(i) {
			$(this).data("index.ui-slider-handle", i);
		});

		this.handles.keydown(function(event) {

			var ret = true;

			var index = $(this).data("index.ui-slider-handle");

			if (self.options.disabled)
				return;

			switch (event.keyCode) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					ret = false;
					if (!self._keySliding) {
						self._keySliding = true;
						$(this).addClass("ui-state-active");
						self._start(event, index);
					}
					break;
			}

			var curVal, newVal, step = self._step();
			if (self.options.values && self.options.values.length) {
				curVal = newVal = self.values(index);
			} else {
				curVal = newVal = self.value();
			}

			switch (event.keyCode) {
				case $.ui.keyCode.HOME:
					newVal = self._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = self._valueMax();
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if(curVal == self._valueMax()) return;
					newVal = curVal + step;
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if(curVal == self._valueMin()) return;
					newVal = curVal - step;
					break;
			}

			self._slide(event, index, newVal);

			return ret;

		}).keyup(function(event) {

			var index = $(this).data("index.ui-slider-handle");

			if (self._keySliding) {
				self._stop(event, index);
				self._change(event, index);
				self._keySliding = false;
				$(this).removeClass("ui-state-active");
			}

		});

		this._refreshValue();

	},

	destroy: function() {

		this.handles.remove();
		this.range.remove();

		this.element
			.removeClass("ui-slider"
				+ " ui-slider-horizontal"
				+ " ui-slider-vertical"
				+ " ui-slider-disabled"
				+ " ui-widget"
				+ " ui-widget-content"
				+ " ui-corner-all")
			.removeData("slider")
			.unbind(".slider");

		this._mouseDestroy();

	},

	_mouseCapture: function(event) {

		var o = this.options;

		if (o.disabled)
			return false;

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		var position = { x: event.pageX, y: event.pageY };
		var normValue = this._normValueFromMouse(position);

		var distance = this._valueMax() - this._valueMin() + 1, closestHandle;
		var self = this, index;
		this.handles.each(function(i) {
			var thisDistance = Math.abs(normValue - self.values(i));
			if (distance > thisDistance) {
				distance = thisDistance;
				closestHandle = $(this);
				index = i;
			}
		});

		// workaround for bug #3736 (if both handles of a range are at 0,
		// the first is always used as the one with least distance,
		// and moving it is obviously prevented by preventing negative ranges)
		if(o.range == true && this.values(1) == o.min) {
			closestHandle = $(this.handles[++index]);
		}

		this._start(event, index);

		self._handleIndex = index;

		closestHandle
			.addClass("ui-state-active")
			.focus();
		
		var offset = closestHandle.offset();
		var mouseOverHandle = !$(event.target).parents().andSelf().is('.ui-slider-handle');
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - (closestHandle.width() / 2),
			top: event.pageY - offset.top
				- (closestHandle.height() / 2)
				- (parseInt(closestHandle.css('borderTopWidth'),10) || 0)
				- (parseInt(closestHandle.css('borderBottomWidth'),10) || 0)
				+ (parseInt(closestHandle.css('marginTop'),10) || 0)
		};

		normValue = this._normValueFromMouse(position);
		this._slide(event, index, normValue);
		return true;

	},

	_mouseStart: function(event) {
		return true;
	},

	_mouseDrag: function(event) {

		var position = { x: event.pageX, y: event.pageY };
		var normValue = this._normValueFromMouse(position);
		
		this._slide(event, this._handleIndex, normValue);

		return false;

	},

	_mouseStop: function(event) {

		this.handles.removeClass("ui-state-active");
		this._stop(event, this._handleIndex);
		this._change(event, this._handleIndex);
		this._handleIndex = null;
		this._clickOffset = null;

		return false;

	},
	
	_detectOrientation: function() {
		this.orientation = this.options.orientation == 'vertical' ? 'vertical' : 'horizontal';
	},

	_normValueFromMouse: function(position) {

		var pixelTotal, pixelMouse;
		if ('horizontal' == this.orientation) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
		}

		var percentMouse = (pixelMouse / pixelTotal);
		if (percentMouse > 1) percentMouse = 1;
		if (percentMouse < 0) percentMouse = 0;
		if ('vertical' == this.orientation)
			percentMouse = 1 - percentMouse;

		var valueTotal = this._valueMax() - this._valueMin(),
			valueMouse = percentMouse * valueTotal,
			valueMouseModStep = valueMouse % this.options.step,
			normValue = this._valueMin() + valueMouse - valueMouseModStep;

		if (valueMouseModStep > (this.options.step / 2))
			normValue += this.options.step;

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat(normValue.toFixed(5));

	},

	_start: function(event, index) {
		var uiHash = {
			handle: this.handles[index],
			value: this.value()
		};
		if (this.options.values && this.options.values.length) {
			uiHash.value = this.values(index);
			uiHash.values = this.values();
		}
		this._trigger("start", event, uiHash);
	},

	_slide: function(event, index, newVal) {

		var handle = this.handles[index];

		if (this.options.values && this.options.values.length) {

			var otherVal = this.values(index ? 0 : 1);

			if ((this.options.values.length == 2 && this.options.range === true) && 
				((index == 0 && newVal > otherVal) || (index == 1 && newVal < otherVal))){
 				newVal = otherVal;
			}

			if (newVal != this.values(index)) {
				var newValues = this.values();
				newValues[index] = newVal;
				// A slide can be canceled by returning false from the slide callback
				var allowed = this._trigger("slide", event, {
					handle: this.handles[index],
					value: newVal,
					values: newValues
				});
				var otherVal = this.values(index ? 0 : 1);
				if (allowed !== false) {
					this.values(index, newVal, ( event.type == 'mousedown' && this.options.animate ), true);
				}
			}

		} else {

			if (newVal != this.value()) {
				// A slide can be canceled by returning false from the slide callback
				var allowed = this._trigger("slide", event, {
					handle: this.handles[index],
					value: newVal
				});
				if (allowed !== false) {
					this._setData('value', newVal, ( event.type == 'mousedown' && this.options.animate ));
				}
					
			}

		}

	},

	_stop: function(event, index) {
		var uiHash = {
			handle: this.handles[index],
			value: this.value()
		};
		if (this.options.values && this.options.values.length) {
			uiHash.value = this.values(index);
			uiHash.values = this.values();
		}
		this._trigger("stop", event, uiHash);
	},

	_change: function(event, index) {
		var uiHash = {
			handle: this.handles[index],
			value: this.value()
		};
		if (this.options.values && this.options.values.length) {
			uiHash.value = this.values(index);
			uiHash.values = this.values();
		}
		this._trigger("change", event, uiHash);
	},

	value: function(newValue) {

		if (arguments.length) {
			this._setData("value", newValue);
			this._change(null, 0);
		}

		return this._value();

	},

	values: function(index, newValue, animated, noPropagation) {

		if (arguments.length > 1) {
			this.options.values[index] = newValue;
			this._refreshValue(animated);
			if(!noPropagation) this._change(null, index);
		}

		if (arguments.length) {
			if (this.options.values && this.options.values.length) {
				return this._values(index);
			} else {
				return this.value();
			}
		} else {
			return this._values();
		}

	},

	_setData: function(key, value, animated) {

		$.widget.prototype._setData.apply(this, arguments);

		switch (key) {
			case 'disabled':
				if (value) {
					this.handles.filter(".ui-state-focus").blur();
					this.handles.removeClass("ui-state-hover");
					this.handles.attr("disabled", "disabled");
				} else {
					this.handles.removeAttr("disabled");
				}
			case 'orientation':

				this._detectOrientation();
				
				this.element
					.removeClass("ui-slider-horizontal ui-slider-vertical")
					.addClass("ui-slider-" + this.orientation);
				this._refreshValue(animated);
				break;
			case 'value':
				this._refreshValue(animated);
				break;
		}

	},

	_step: function() {
		var step = this.options.step;
		return step;
	},

	_value: function() {

		var val = this.options.value;
		if (val < this._valueMin()) val = this._valueMin();
		if (val > this._valueMax()) val = this._valueMax();

		return val;

	},

	_values: function(index) {

		if (arguments.length) {
			var val = this.options.values[index];
			if (val < this._valueMin()) val = this._valueMin();
			if (val > this._valueMax()) val = this._valueMax();

			return val;
		} else {
			return this.options.values;
		}

	},

	_valueMin: function() {
		var valueMin = this.options.min;
		return valueMin;
	},

	_valueMax: function() {
		var valueMax = this.options.max;
		return valueMax;
	},

	_refreshValue: function(animate) {

		var oRange = this.options.range, o = this.options, self = this;

		if (this.options.values && this.options.values.length) {
			var vp0, vp1;
			this.handles.each(function(i, j) {
				var valPercent = (self.values(i) - self._valueMin()) / (self._valueMax() - self._valueMin()) * 100;
				var _set = {}; _set[self.orientation == 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
				$(this).stop(1,1)[animate ? 'animate' : 'css'](_set, o.animate);
				if (self.options.range === true) {
					if (self.orientation == 'horizontal') {
						(i == 0) && self.range.stop(1,1)[animate ? 'animate' : 'css']({ left: valPercent + '%' }, o.animate);
						(i == 1) && self.range[animate ? 'animate' : 'css']({ width: (valPercent - lastValPercent) + '%' }, { queue: false, duration: o.animate });
					} else {
						(i == 0) && self.range.stop(1,1)[animate ? 'animate' : 'css']({ bottom: (valPercent) + '%' }, o.animate);
						(i == 1) && self.range[animate ? 'animate' : 'css']({ height: (valPercent - lastValPercent) + '%' }, { queue: false, duration: o.animate });
					}
				}
				lastValPercent = valPercent;
			});
		} else {
			var value = this.value(),
				valueMin = this._valueMin(),
				valueMax = this._valueMax(),
				valPercent = valueMax != valueMin
					? (value - valueMin) / (valueMax - valueMin) * 100
					: 0;
			var _set = {}; _set[self.orientation == 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
			this.handle.stop(1,1)[animate ? 'animate' : 'css'](_set, o.animate);

			(oRange == "min") && (this.orientation == "horizontal") && this.range.stop(1,1)[animate ? 'animate' : 'css']({ width: valPercent + '%' }, o.animate);
			(oRange == "max") && (this.orientation == "horizontal") && this.range[animate ? 'animate' : 'css']({ width: (100 - valPercent) + '%' }, { queue: false, duration: o.animate });
			(oRange == "min") && (this.orientation == "vertical") && this.range.stop(1,1)[animate ? 'animate' : 'css']({ height: valPercent + '%' }, o.animate);
			(oRange == "max") && (this.orientation == "vertical") && this.range[animate ? 'animate' : 'css']({ height: (100 - valPercent) + '%' }, { queue: false, duration: o.animate });
		}

	}
	
}));

$.extend($.ui.slider, {
	getter: "value values",
	version: "1.7.2",
	eventPrefix: "slide",
	defaults: {
		animate: false,
		delay: 0,
		distance: 0,
		max: 100,
		min: 0,
		orientation: 'horizontal',
		range: false,
		step: 1,
		value: 0,
		values: null
	}
});

})(jQuery);
/*
// jQuery multiSelect
//
// Version 1.0.2 beta
//
// Cory S.N. LaViska
// A Beautiful Site (http://abeautifulsite.net/)
// 10 May 2009
//
// Visit http://abeautifulsite.net/notebook.php?article=62 for more information
//
// Usage: $('#control_id').multiSelect( options, callback )
//
// Options:  selectAll          - whether or not to display the Select All option; true/false, default = true
//           selectAllText      - text to display for selecting/unselecting all options simultaneously
//           noneSelected       - text to display when there are no selected items in the list
//           oneOrMoreSelected  - text to display when there are one or more selected items in the list
//                                (note: you can use % as a placeholder for the number of items selected).
//                                Use * to show a comma separated list of all selected; default = '% selected'
//
// Dependencies:  jQuery 1.2.6 or higher (http://jquery.com/)
//
// Change Log:
//
//		1.0.1	- Updated to work with jQuery 1.2.6+ (no longer requires the dimensions plugin)
//				- Changed $(this).offset() to $(this).position(), per James' and Jono's suggestions
//
//		1.0.2	- Fixed issue where dropdown doesn't scroll up/down with keyboard shortcuts
//				- Changed '$' in setTimeout to use 'jQuery' to support jQuery.noConflict
//				- Renamed from jqueryMultiSelect.* to jquery.multiSelect.* per the standard recommended at
//				  http://docs.jquery.com/Plugins/Authoring (does not affect API methods)
//
// Licensing & Terms of Use
// 
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2008 A Beautiful Site, LLC. 
//	
*/
if(jQuery) (function($){
	
	$.extend($.fn, {
		multiSelect: function(o, callback) {
			// Default options
			var disabledClass = "";
			if( !o ) var o = {};
			if( o.selectAll == undefined ) o.selectAll = true;
			if( o.selectAllText == undefined ) o.selectAllText = "Select all";
			if( o.noneSelected == undefined ) o.noneSelected = "Make a choice";
			if( o.oneOrMoreSelected == undefined ) o.oneOrMoreSelected = '% selected';
 
			
			// Initialize each multiSelect
			$(this).each( function() {
				var select = $(this);
				var html = '<input type="text" readonly="readonly" class="multiSelect" value="" autocomplete="off" />';
				html += '<div class="multiSelectOptions" style="position: absolute; z-index: 99999; display: none;">';
				if( o.selectAll ) html += '<label class="selectAll"><input type="checkbox" value="0" checked="checked" class="selectAll" />' + o.selectAllText + '</label>';
				$(select).find('OPTION').each( function() {
					if( $(this).val() != '' ) {
						html += '<label><input type="checkbox" name="' + $(select).attr('name') + '" value="' + $(this).val() + '"';
						//Kommenterar bort eftersom vi inte vill ha n�gon kommun vald vid f�rsta laddningen
						//if( $(this).attr('selected') ) html += ' checked="checked"';
						html += ' />' + $(this).html() + '</label>';
					}
				});
				html += '</div>';
				$(select).after(html);
				
				// Events
				$(select).next('.multiSelect').mouseover( function() {
					$(this).addClass('hover');
				}).mouseout( function() {
					$(this).removeClass('hover');
				}).click( function() {
					// Show/hide on click
					if( $(this).hasClass('active') ) {
						$(this).multiSelectOptionsHide();
					} else {
						$(this).multiSelectOptionsShow();
					}
					return false;
				}).focus( function() {
					// So it can be styled with CSS
					$(this).addClass('focus');
				}).blur( function() {
					// So it can be styled with CSS
					$(this).removeClass('focus');
				});
				// Determine if Select All should be checked initially
				if( o.selectAll ) {
					var sa = true;
					$(select).next('.multiSelect').next('.multiSelectOptions').find('INPUT:checkbox').not('.selectAll').each( function() {
						if( !$(this).attr('checked') ) sa = false;
					});
					if( sa ) $(select).next('.multiSelect').next('.multiSelectOptions').find('INPUT.selectAll').attr('checked', true).parent().addClass('checked');
				}
				// Handle Select All
				$(select).next('.multiSelect').next('.multiSelectOptions').find('INPUT.selectAll').click( function() {
					if( $(this).attr('checked') == true ) $(this).parent().parent().find('INPUT:checkbox').attr('checked', true).parent().addClass('checked'); else $(this).parent().parent().find('INPUT:checkbox').attr('checked', false).parent().removeClass('checked');
				});
				// Handle checkboxes
				$(select).next('.multiSelect').next('.multiSelectOptions').find('INPUT:checkbox').click( function() {
					$(this).parent().parent().multiSelectUpdateSelected(o);
					$(this).parent().parent().find('LABEL').removeClass('checked').find('INPUT:checked').parent().addClass('checked');
					$(this).parent().parent().prev('.multiSelect').focus();
					if( !$(this).attr('checked') ) $(this).parent().parent().find('INPUT:checkbox.selectAll').attr('checked', false).parent().removeClass('checked');
					if( callback ) callback($(this));
				});
				// Initial display
				$(select).next('.multiSelect').next('.multiSelectOptions').each( function() {
					$(this).multiSelectUpdateSelected(o);
					$(this).find('INPUT:checked').parent().addClass('checked');
				});
				// Handle hovers
				$(select).next('.multiSelect').next('.multiSelectOptions').find('LABEL').mouseover( function() {
					$(this).parent().find('LABEL').removeClass('hover');
					$(this).addClass('hover');
				}).mouseout( function() {
					$(this).parent().find('LABEL').removeClass('hover');
				});
				// Keyboard
				$(select).next('.multiSelect').keydown( function(e) {
					// Is dropdown visible?
					if( $(this).next('.multiSelectOptions').is(':visible') ) {
						// Dropdown is visible
						// Tab
						if( e.keyCode == 9 ) {
							$(this).addClass('focus').trigger('click'); // esc, left, right - hide
							$(this).focus().next(':input').focus();
							return true;
						}
						// ESC, Left, Right
						if( e.keyCode == 27 || e.keyCode == 37 || e.keyCode == 39 ) {
							// Hide dropdown
							$(this).addClass('focus').trigger('click');
						}
						// Down
						if( e.keyCode == 40 ) {
							if( !$(this).next('.multiSelectOptions').find('LABEL').hasClass('hover') ) {
								// Default to first item
								$(this).next('.multiSelectOptions').find('LABEL:first').addClass('hover');
							} else {
								// Move down, cycle to top if on bottom
								$(this).next('.multiSelectOptions').find('LABEL.hover').removeClass('hover').next('LABEL').addClass('hover');
								if( !$(this).next('.multiSelectOptions').find('LABEL').hasClass('hover') ) {
									$(this).next('.multiSelectOptions').find('LABEL:first').addClass('hover');
								}
							}
							// Adjust the viewport if necessary
							$(this).multiSelectAdjustViewport($(this) );
							
							return false;
						}
						// Up
						if( e.keyCode == 38 ) {
							if( !$(this).next('.multiSelectOptions').find('LABEL').hasClass('hover') ) {
								// Default to first item
								$(this).next('.multiSelectOptions').find('LABEL:first').addClass('hover');
							} else {
								// Move up, cycle to bottom if on top
								$(this).next('.multiSelectOptions').find('LABEL.hover').removeClass('hover').prev('LABEL').addClass('hover');
								if( !$(this).next('.multiSelectOptions').find('LABEL').hasClass('hover') ) {
									$(this).next('.multiSelectOptions').find('LABEL:last').addClass('hover');
								}
							}
							
							// Adjust the viewport if necessary
							$(this).multiSelectAdjustViewport($(this) );
							
							return false;
						}
						// Enter, Space
						// Modified callback to return input.value (like click callback)
						if( e.keyCode == 13 || e.keyCode == 32 ) {
							// Select All
							if( $(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox').hasClass('selectAll') ) {
								if( $(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox').attr('checked') ) {
									// Uncheck all
									$(this).next('.multiSelectOptions').find('INPUT:checkbox').attr('checked', false).parent().removeClass('checked');
								} else {
									// Check all
									$(this).next('.multiSelectOptions').find('INPUT:checkbox').attr('checked', true).parent().addClass('checked');
								}
								$(this).next('.multiSelectOptions').multiSelectUpdateSelected(o);
								if( callback ) callback($(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox'));
								return false;
							}
							// Other checkboxes
							if( $(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox').attr('checked') ) {
								// Uncheck
								$(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox').attr('checked', false);
								$(this).next('.multiSelectOptions').multiSelectUpdateSelected(o);
								$(this).next('.multiSelectOptions').find('LABEL').removeClass('checked').find('INPUT:checked').parent().addClass('checked');
								// Select all status can't be checked at this point
								$(this).next('.multiSelectOptions').find('INPUT:checkbox.selectAll').attr('checked', false).parent().removeClass('checked');
								if( callback ) callback($(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox'));
							} else {
								// Check
								$(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox').attr('checked', true);
								$(this).next('.multiSelectOptions').multiSelectUpdateSelected(o);
								$(this).next('.multiSelectOptions').find('LABEL').removeClass('checked').find('INPUT:checked').parent().addClass('checked');
								if( callback ) callback($(this).next('.multiSelectOptions').find('LABEL.hover INPUT:checkbox'));
							}
						}
						return false;
					} else {
						// Dropdown is not visible
						if( e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13 || e.keyCode == 32 ) { // down, enter, space - show
							// Show dropdown
							$(this).removeClass('focus').trigger('click');
							$(this).next('.multiSelectOptions').find('LABEL:first').addClass('hover');
							return false;
						}
						//  Tab key
						if( e.keyCode == 9 ) {
							// Shift focus to next INPUT element on page
							$(this).focus().next(':input').focus();
							return true;
						}
					}
					// Prevent enter key from submitting form
					if( e.keyCode == 13 ) return false;
				});
				// Eliminate the original form element
				$(select).remove();
			});
		},
		
		// Hide the dropdown
		multiSelectOptionsHide: function() {
			$(this).removeClass('active').next('.multiSelectOptions').hide();
		},
		
		// Show the dropdown
		multiSelectOptionsShow: function() {
			// Hide any open option boxes
			$('.multiSelect').multiSelectOptionsHide();
			$(this).next('.multiSelectOptions').find('LABEL').removeClass('hover');
			$(this).addClass('active').next('.multiSelectOptions').show();
			
			// Position it
			var offset = $(this).position();
			$(this).next('.multiSelectOptions').css({ top:  offset.top + $(this).outerHeight() + 'px' });
			$(this).next('.multiSelectOptions').css({ left: offset.left + 'px' });
			
			// Disappear on hover out
			multiSelectCurrent = $(this);
			var timer = '';
			$(this).next('.multiSelectOptions').hover( function() {
				clearTimeout(timer);
			}, function() {
				timer = setTimeout('jQuery(multiSelectCurrent).multiSelectOptionsHide(); $(multiSelectCurrent).unbind("hover");', 250);
			});
		},
		
		// Update the textbox with the total number of selected items
		multiSelectUpdateSelected: function(o) {
			var i = 0, s = '';
			var dispArrray = new Array();
			$(this).find('INPUT:checkbox:checked').not('.selectAll').each( function() {
				i++;
			})
			if( i == 0 ) {
				$(this).prev('INPUT.multiSelect').val( o.noneSelected );
			} else {
				if( o.oneOrMoreSelected == '*') {
					var display = '';
					$(this).find('INPUT:checkbox:checked').each( function() {
						if( $(this).parent().text() != o.selectAllText ) display = display + $(this).parent().text() + ', ';
					});
					display = display.substr(0, display.length - 2);
					//Ers�tter alt. 3 med ... 
					dispArrray = display.split(",");
					if (dispArrray.length >= 3) {
						dispArrray[1] = "...";
						display = dispArrray.slice(0,3);
						display = display.join(", ");
					}
					$(this).prev('INPUT.multiSelect').val( display );
				} else {
					$(this).prev('INPUT.multiSelect').val( o.oneOrMoreSelected.replace('%', i) );
				}
			}
		},
		
		// Ensures that the selected item is always in the visible portion of the dropdown (for keyboard controls)
		multiSelectAdjustViewport: function(el) {
			// Calculate positions of elements
			var i = 0;
			var selectionTop = 0, selectionHeight = 0;
			$(el).next('.multiSelectOptions').find('LABEL').each( function() {
				if( $(this).hasClass('hover') ) { selectionTop = i; selectionHeight = $(this).outerHeight(); return; }
				i += $(this).outerHeight();
			});
			var divScroll = $(el).next('.multiSelectOptions').scrollTop();
			var divHeight = $(el).next('.multiSelectOptions').height();
			// Adjust the dropdown scroll position
			$(el).next('.multiSelectOptions').scrollTop(selectionTop - ((divHeight / 2) - (selectionHeight / 2)));
		}
	});
	
})(jQuery);/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();/*
 ### jQuery Multiple File Upload Plugin v1.46 - 2009-05-12 ###
 * Home: http://www.fyneworks.com/jquery/multiple-file-upload/
 * Code: http://code.google.com/p/jquery-multifile-plugin/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';3(U.1u)(6($){$.7.2=6(h){3(5.V==0)8 5;3(T S[0]==\'19\'){3(5.V>1){m i=S;8 5.M(6(){$.7.2.13($(5),i)})};$.7.2[S[0]].13(5,$.1N(S).27(1)||[]);8 5};m h=$.N({},$.7.2.F,h||{});$(\'2d\').1B(\'2-R\').Q(\'2-R\').1n($.7.2.Z);3($.7.2.F.15){$.7.2.1M($.7.2.F.15);$.7.2.F.15=10};5.1B(\'.2-1e\').Q(\'2-1e\').M(6(){U.2=(U.2||0)+1;m e=U.2;m g={e:5,E:$(5),L:$(5).L()};3(T h==\'21\')h={l:h};m o=$.N({},$.7.2.F,h||{},($.1m?g.E.1m():($.1S?g.E.17():10))||{},{});3(!(o.l>0)){o.l=g.E.D(\'28\');3(!(o.l>0)){o.l=(u(g.e.1D.B(/\\b(l|23)\\-([0-9]+)\\b/q)||[\'\']).B(/[0-9]+/q)||[\'\'])[0];3(!(o.l>0))o.l=-1;2b o.l=u(o.l).B(/[0-9]+/q)[0]}};o.l=18 2f(o.l);o.j=o.j||g.E.D(\'j\')||\'\';3(!o.j){o.j=(g.e.1D.B(/\\b(j\\-[\\w\\|]+)\\b/q))||\'\';o.j=18 u(o.j).t(/^(j|1d)\\-/i,\'\')};$.N(g,o||{});g.A=$.N({},$.7.2.F.A,g.A);$.N(g,{n:0,J:[],2c:[],1c:g.e.I||\'2\'+u(e),1i:6(z){8 g.1c+(z>0?\'1Z\'+u(z):\'\')},G:6(a,b){m c=g[a],k=$(b).D(\'k\');3(c){m d=c(b,k,g);3(d!=10)8 d}8 1a}});3(u(g.j).V>1){g.j=g.j.t(/\\W+/g,\'|\').t(/^\\W|\\W$/g,\'\');g.1k=18 2t(\'\\\\.(\'+(g.j?g.j:\'\')+\')$\',\'q\')};g.O=g.1c+\'1P\';g.E.1l(\'<P X="2-1l" I="\'+g.O+\'"></P>\');g.1q=$(\'#\'+g.O+\'\');g.e.H=g.e.H||\'p\'+e+\'[]\';3(!g.K){g.1q.1g(\'<P X="2-K" I="\'+g.O+\'1F"></P>\');g.K=$(\'#\'+g.O+\'1F\')};g.K=$(g.K);g.16=6(c,d){g.n++;c.2=g;3(d>0)c.I=c.H=\'\';3(d>0)c.I=g.1i(d);c.H=u(g.1j.t(/\\$H/q,$(g.L).D(\'H\')).t(/\\$I/q,$(g.L).D(\'I\')).t(/\\$g/q,e).t(/\\$i/q,d));3((g.l>0)&&((g.n-1)>(g.l)))c.14=1a;g.Y=g.J[d]=c;c=$(c);c.1b(\'\').D(\'k\',\'\')[0].k=\'\';c.Q(\'2-1e\');c.1V(6(){$(5).1X();3(!g.G(\'1Y\',5,g))8 y;m a=\'\',v=u(5.k||\'\');3(g.j&&v&&!v.B(g.1k))a=g.A.1o.t(\'$1d\',u(v.B(/\\.\\w{1,4}$/q)));1p(m f 2a g.J)3(g.J[f]&&g.J[f]!=5)3(g.J[f].k==v)a=g.A.1r.t(\'$p\',v.B(/[^\\/\\\\]+$/q));m b=$(g.L).L();b.Q(\'2\');3(a!=\'\'){g.1s(a);g.n--;g.16(b[0],d);c.1t().2e(b);c.C();8 y};$(5).1v({1w:\'1O\',1x:\'-1Q\'});c.1R(b);g.1y(5,d);g.16(b[0],d+1);3(!g.G(\'1T\',5,g))8 y});$(c).17(\'2\',g)};g.1y=6(c,d){3(!g.G(\'1U\',c,g))8 y;m r=$(\'<P X="2-1W"></P>\'),v=u(c.k||\'\'),a=$(\'<1z X="2-1A" 1A="\'+g.A.12.t(\'$p\',v)+\'">\'+g.A.p.t(\'$p\',v.B(/[^\\/\\\\]+$/q)[0])+\'</1z>\'),b=$(\'<a X="2-C" 2y="#\'+g.O+\'">\'+g.A.C+\'</a>\');g.K.1g(r.1g(b,\' \',a));b.1C(6(){3(!g.G(\'22\',c,g))8 y;g.n--;g.Y.14=y;g.J[d]=10;$(c).C();$(5).1t().C();$(g.Y).1v({1w:\'\',1x:\'\'});$(g.Y).11().1b(\'\').D(\'k\',\'\')[0].k=\'\';3(!g.G(\'24\',c,g))8 y;8 y});3(!g.G(\'25\',c,g))8 y};3(!g.2)g.16(g.e,0);g.n++;g.E.17(\'2\',g)})};$.N($.7.2,{11:6(){m a=$(5).17(\'2\');3(a)a.K.26(\'a.2-C\').1C();8 $(5)},Z:6(a){a=(T(a)==\'19\'?a:\'\')||\'1E\';m o=[];$(\'1h:p.2\').M(6(){3($(5).1b()==\'\')o[o.V]=5});8 $(o).M(6(){5.14=1a}).Q(a)},1f:6(a){a=(T(a)==\'19\'?a:\'\')||\'1E\';8 $(\'1h:p.\'+a).29(a).M(6(){5.14=y})},R:{},1M:6(b,c,d){m e,k;d=d||[];3(d.1G.1H().1I("1J")<0)d=[d];3(T(b)==\'6\'){$.7.2.Z();k=b.13(c||U,d);1K(6(){$.7.2.1f()},1L);8 k};3(b.1G.1H().1I("1J")<0)b=[b];1p(m i=0;i<b.V;i++){e=b[i]+\'\';3(e)(6(a){$.7.2.R[a]=$.7[a]||6(){};$.7[a]=6(){$.7.2.Z();k=$.7.2.R[a].13(5,S);1K(6(){$.7.2.1f()},1L);8 k}})(e)}}});$.7.2.F={j:\'\',l:-1,1j:\'$H\',A:{C:\'x\',1o:\'2g 2h 2i a $1d p.\\2j 2k...\',p:\'$p\',12:\'2l 12: $p\',1r:\'2m p 2n 2o 2p 12:\\n$p\'},15:[\'1n\',\'2q\',\'2r\',\'2s\'],1s:6(s){2u(s)}};$.7.11=6(){8 5.M(6(){2v{5.11()}2w(e){}})};$(6(){$("1h[2x=p].20").2()})})(1u);',62,159,'||MultiFile|if||this|function|fn|return|||||||||||accept|value|max|var|||file|gi|||replace|String||||false||STRING|match|remove|attr||options|trigger|name|id|slaves|list|clone|each|extend|wrapID|div|addClass|intercepted|arguments|typeof|window|length||class|current|disableEmpty|null|reset|selected|apply|disabled|autoIntercept|addSlave|data|new|string|true|val|instanceKey|ext|applied|reEnableEmpty|append|input|generateID|namePattern|rxAccept|wrap|metadata|submit|denied|for|wrapper|duplicate|error|parent|jQuery|css|position|top|addToList|span|title|not|click|className|mfD|_list|constructor|toString|indexOf|Array|setTimeout|1000|intercept|makeArray|absolute|_wrap|3000px|after|meta|afterFileSelect|onFileAppend|change|label|blur|onFileSelect|_F|multi|number|onFileRemove|limit|afterFileRemove|afterFileAppend|find|slice|maxlength|removeClass|in|else|files|form|prepend|Number|You|cannot|select|nTry|again|File|This|has|already|been|ajaxSubmit|ajaxForm|validate|RegExp|alert|try|catch|type|href'.split('|'),0,{}))/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CC Attribution-No Derivative Works 2.5 Brazil - http://creativecommons.org/licenses/by-nd/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.2N.3g=6(4){4=23.2H({2B:\'#34\',2g:0.8,1d:F,1M:\'18/5-33-Y.16\',1v:\'18/5-1u-2Q.16\',1E:\'18/5-1u-2L.16\',1W:\'18/5-1u-2I.16\',19:\'18/5-2F.16\',1f:10,2A:3d,2s:\'1j\',2o:\'32\',2j:\'c\',2f:\'p\',2d:\'n\',h:[],9:0},4);f I=N;6 20(){1X(N,I);u F}6 1X(1e,I){$(\'1U, 1S, 1R\').l({\'1Q\':\'2E\'});1O();4.h.B=0;4.9=0;7(I.B==1){4.h.1J(v 1m(1e.17(\'J\'),1e.17(\'2v\')))}j{36(f i=0;i<I.B;i++){4.h.1J(v 1m(I[i].17(\'J\'),I[i].17(\'2v\')))}}2n(4.h[4.9][0]!=1e.17(\'J\')){4.9++}D()}6 1O(){$(\'m\').31(\'<e g="q-13"></e><e g="q-5"><e g="5-s-b-w"><e g="5-s-b"><1w g="5-b"><e 2V="" g="5-k"><a J="#" g="5-k-V"></a><a J="#" g="5-k-X"></a></e><e g="5-Y"><a J="#" g="5-Y-29"><1w W="\'+4.1M+\'"></a></e></e></e><e g="5-s-b-T-w"><e g="5-s-b-T"><e g="5-b-A"><1i g="5-b-A-1t"></1i><1i g="5-b-A-1g"></1i></e><e g="5-1s"><a J="#" g="5-1s-22"><1w W="\'+4.1W+\'"></a></e></e></e></e>\');f z=1D();$(\'#q-13\').l({2K:4.2B,2J:4.2g,S:z[0],P:z[1]}).1V();f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]}).E();$(\'#q-13,#q-5\').C(6(){1a()});$(\'#5-Y-29,#5-1s-22\').C(6(){1a();u F});$(G).2G(6(){f z=1D();$(\'#q-13\').l({S:z[0],P:z[1]});f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]})})}6 D(){$(\'#5-Y\').E();7(4.1d){$(\'#5-b,#5-s-b-T-w,#5-b-A-1g\').1b()}j{$(\'#5-b,#5-k,#5-k-V,#5-k-X,#5-s-b-T-w,#5-b-A-1g\').1b()}f Q=v 1j();Q.1P=6(){$(\'#5-b\').2D(\'W\',4.h[4.9][0]);1N(Q.S,Q.P);Q.1P=6(){}};Q.W=4.h[4.9][0]};6 1N(1o,1r){f 1L=$(\'#5-s-b-w\').S();f 1K=$(\'#5-s-b-w\').P();f 1n=(1o+(4.1f*2));f 1y=(1r+(4.1f*2));f 1I=1L-1n;f 2z=1K-1y;$(\'#5-s-b-w\').3f({S:1n,P:1y},4.2A,6(){2y()});7((1I==0)&&(2z==0)){7($.3e.3c){1H(3b)}j{1H(3a)}}$(\'#5-s-b-T-w\').l({S:1o});$(\'#5-k-V,#5-k-X\').l({P:1r+(4.1f*2)})};6 2y(){$(\'#5-Y\').1b();$(\'#5-b\').1V(6(){2u();2t()});2r()};6 2u(){$(\'#5-s-b-T-w\').38(\'35\');$(\'#5-b-A-1t\').1b();7(4.h[4.9][1]){$(\'#5-b-A-1t\').2p(4.h[4.9][1]).E()}7(4.h.B>1){$(\'#5-b-A-1g\').2p(4.2s+\' \'+(4.9+1)+\' \'+4.2o+\' \'+4.h.B).E()}}6 2t(){$(\'#5-k\').E();$(\'#5-k-V,#5-k-X\').l({\'K\':\'1C M(\'+4.19+\') L-O\'});7(4.9!=0){7(4.1d){$(\'#5-k-V\').l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9-1;D();u F})}j{$(\'#5-k-V\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9-1;D();u F})}}7(4.9!=(4.h.B-1)){7(4.1d){$(\'#5-k-X\').l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9+1;D();u F})}j{$(\'#5-k-X\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9+1;D();u F})}}2k()}6 2k(){$(d).30(6(12){2i(12)})}6 1G(){$(d).11()}6 2i(12){7(12==2h){U=2Z.2e;1x=27}j{U=12.2e;1x=12.2Y}14=2X.2W(U).2U();7((14==4.2j)||(14==\'x\')||(U==1x)){1a()}7((14==4.2f)||(U==37)){7(4.9!=0){4.9=4.9-1;D();1G()}}7((14==4.2d)||(U==39)){7(4.9!=(4.h.B-1)){4.9=4.9+1;D();1G()}}}6 2r(){7((4.h.B-1)>4.9){2c=v 1j();2c.W=4.h[4.9+1][0]}7(4.9>0){2b=v 1j();2b.W=4.h[4.9-1][0]}}6 1a(){$(\'#q-5\').2a();$(\'#q-13\').2T(6(){$(\'#q-13\').2a()});$(\'1U, 1S, 1R\').l({\'1Q\':\'2S\'})}6 1D(){f o,r;7(G.1h&&G.28){o=G.26+G.2R;r=G.1h+G.28}j 7(d.m.25>d.m.24){o=d.m.2P;r=d.m.25}j{o=d.m.2O;r=d.m.24}f y,H;7(Z.1h){7(d.t.1l){y=d.t.1l}j{y=Z.26}H=Z.1h}j 7(d.t&&d.t.1A){y=d.t.1l;H=d.t.1A}j 7(d.m){y=d.m.1l;H=d.m.1A}7(r<H){1z=H}j{1z=r}7(o<y){1B=o}j{1B=y}21=v 1m(1B,1z,y,H);u 21};6 1p(){f o,r;7(Z.1Z){r=Z.1Z;o=Z.2M}j 7(d.t&&d.t.1F){r=d.t.1F;o=d.t.1Y}j 7(d.m){r=d.m.1F;o=d.m.1Y}2q=v 1m(o,r);u 2q};6 1H(2C){f 2x=v 2w();1q=2h;3h{f 1q=v 2w()}2n(1q-2x<2C)};u N.11(\'C\').C(20)}})(23);',62,204,'||||settings|lightbox|function|if||activeImage||image||document|div|var|id|imageArray||else|nav|css|body||xScroll||jquery|yScroll|container|documentElement|return|new|box||windowWidth|arrPageSizes|details|length|click|_set_image_to_view|show|false|window|windowHeight|jQueryMatchedObj|href|background|no|url|this|repeat|height|objImagePreloader|arrPageScroll|width|data|keycode|btnPrev|src|btnNext|loading|self||unbind|objEvent|overlay|key||gif|getAttribute|images|imageBlank|_finish|hide|left|fixedNavigation|objClicked|containerBorderSize|currentNumber|innerHeight|span|Image|bind|clientWidth|Array|intWidth|intImageWidth|___getPageScroll|curDate|intImageHeight|secNav|caption|btn|imageBtnPrev|img|escapeKey|intHeight|pageHeight|clientHeight|pageWidth|transparent|___getPageSize|imageBtnNext|scrollTop|_disable_keyboard_navigation|___pause|intDiffW|push|intCurrentHeight|intCurrentWidth|imageLoading|_resize_container_image_box|_set_interface|onload|visibility|select|object|top|embed|fadeIn|imageBtnClose|_start|scrollLeft|pageYOffset|_initialize|arrayPageSize|btnClose|jQuery|offsetHeight|scrollHeight|innerWidth||scrollMaxY|link|remove|objPrev|objNext|keyToNext|keyCode|keyToPrev|overlayOpacity|null|_keyboard_action|keyToClose|_enable_keyboard_navigation|right|hover|while|txtOf|html|arrayPageScroll|_preload_neighbor_images|txtImage|_set_navigation|_show_image_data|title|Date|date|_show_image|intDiffH|containerResizeSpeed|overlayBgColor|ms|attr|hidden|blank|resize|extend|close|opacity|backgroundColor|next|pageXOffset|fn|offsetWidth|scrollWidth|prev|scrollMaxX|visible|fadeOut|toLowerCase|style|fromCharCode|String|DOM_VK_ESCAPE|event|keydown|append|of|ico|000|fast|for||slideDown||100|250|msie|400|browser|animate|lightBox|do'.split('|'),0,{}))// Browser detect
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function(dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
		{
		    string: navigator.userAgent,
		    subString: "Chrome",
		    identity: "Chrome"
		},
		{ string: navigator.userAgent,
		    subString: "OmniWeb",
		    versionSearch: "OmniWeb/",
		    identity: "OmniWeb"
		},
		{
		    string: navigator.vendor,
		    subString: "Apple",
		    identity: "Safari",
		    versionSearch: "Version"
		},
		{
		    prop: window.opera,
		    identity: "Opera"
		},
		{
		    string: navigator.vendor,
		    subString: "iCab",
		    identity: "iCab"
		},
		{
		    string: navigator.vendor,
		    subString: "KDE",
		    identity: "Konqueror"
		},
		{
		    string: navigator.userAgent,
		    subString: "Firefox",
		    identity: "Firefox"
		},
		{
		    string: navigator.vendor,
		    subString: "Camino",
		    identity: "Camino"
		},
		{		// for newer Netscapes (6+)
		    string: navigator.userAgent,
		    subString: "Netscape",
		    identity: "Netscape"
		},
		{
		    string: navigator.userAgent,
		    subString: "MSIE",
		    identity: "Explorer",
		    versionSearch: "MSIE"
		},
		{
		    string: navigator.userAgent,
		    subString: "Gecko",
		    identity: "Mozilla",
		    versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
		    string: navigator.userAgent,
		    subString: "Mozilla",
		    identity: "Netscape",
		    versionSearch: "Mozilla"
		}
	],
    dataOS: [
		{
		    string: navigator.platform,
		    subString: "Win",
		    identity: "Windows"
		},
		{
		    string: navigator.platform,
		    subString: "Mac",
		    identity: "Mac"
		},
		{
		    string: navigator.userAgent,
		    subString: "iPhone",
		    identity: "iPhone/iPod"
		},
		{
		    string: navigator.platform,
		    subString: "Linux",
		    identity: "Linux"
		}
	]

};
BrowserDetect.init();

// Jämföra objekt-kryssrutor
function hookupCompareEvent() {
    $(".chkCompare").click(function (e) {
        //Max fyra objekt får man jämföra
        if ($(".chkCompare").find(':checked').length > 4) {
            $(this).find('input').removeAttr("checked");
            alert("V\u00E4lj maximalt fyra objekt att j\u00E4mf\u00F6ra");
        }
        //För att inte klick i checkboxen ska expandera div:en bakom
        e.stopPropagation();
    });
}

$(window).ready(function() {
    $(".ContentWrapper").css({ 'overflow-y': 'hidden' });
});

$(document).ready(function () {

    RegisterClickEventForShowLeavePageClass();

    // GENERIC CALENDAR
    $(".listChooseCategories").click(function () {
        $(this).toggleClass("active");
        $(".genericFiltering").slideToggle();
    });
    $(".wideList ul li").click(function () {
        $(this).children("div").slideToggle("slow");
        $(this).toggleClass("Selected");
    });
    $(".calBody").click(function (e) {
        if (e.originalTarget.tagName != "A") {
            e.preventDefault();
            return false;
        }
    });
    // end: GENERIC CALENDAR
    // GUIDE
    try {
        if ($(".slideItem").length > 0) {
            $(".myController").jFlow({
                slides: "#mySlides",
                controller: ".jFlowControl",
                slideWrapper: "#jFlowSlide",
                selectedWrapper: "jFlowSelected",
                width: "720px",
                height: oImgHeight,
                duration: 400,
                prev: ".jFlowPrev",
                next: ".jFlowNext"
            });
        }
    }
    catch (e) {
        //Det sabbar script på de sidor som saknar guiden
    }

    $("#guide #displayMyController").click(function () {
        $(this).toggleClass("active");
        $(".myController").slideToggle();
    });
    // end: GUIDE

    //Lightbox - Bildzoom, Inspirationsavdelningen.
    try {
        $('a.ViewLargeImg').lightBox({
            overlayOpacity: 0.6,
            imageLoading: '/templates/public/images/ajaxLoad.gif',
            imageBtnClose: '/templates/public/images/buttons/btnClose.png',
            imageBtnPrev: '',
            imageBtnNext: '',
            imageBlank: '/templates/public/images/lightbox-blank.gif',
            containerResizeSpeed: 350,
            txtImage: '',
            txtOf: ''
        });
        $("a.ViewLargeImg").click(function () {
            if (BrowserDetect.browser == "Opera") {
                var time = setTimeout("var btnLeft = $('#lightbox-container-image-data-box').width()-5; var btnMargin = '-16px 0 0 ' + btnLeft + 'px'; $('#lightbox-secNav-btnClose').css({'margin':btnMargin});", 800);
            }
            if (BrowserDetect.browser == "Chrome") {
                var time = setTimeout("var btnMargin = '-16px 0 0 10px'; $('#lightbox-secNav-btnClose').css({'margin':btnMargin});", 800);
            }
            var hide = setTimeout("$('#lightbox-secNav-btnClose img').css('visibility','hidden');", 600);
            var fader = setTimeout("$('#lightbox-secNav-btnClose img').css('visibility','visible');", 1900);
        });
    }
    catch (e) {
        //Det sabbar script på de sidor som saknar a.ViewLargeImg
    }

    //**************************************
    //  Bildbläddrare - projektstartsida
    //  jFlow smäller om id/klass saknas.
    //**************************************
    try {
        var oImgHeight = function () {
            var iHeight = 140;
            $(".SlideItem").each(function () {
                if ($(this).height() > iHeight) {
                    iHeight = $(this).height();
                }
            });
            iHeight = iHeight + 20;
            return iHeight + "px";
        };
        if ($(".SlideItem").length > 0) {
            $(".myController").jFlow({
                slides: "#mySlides",
                controller: ".jFlowControl",
                slideWrapper: "#jFlowSlide",
                selectedWrapper: "jFlowSelected",
                width: "450px",
                height: oImgHeight,
                duration: 400,
                prev: ".jFlowPrev",
                next: ".jFlowNext"
            });
        }
        else {
            $(".SimilarProjects .jFlowPrev,.SimilarProjects .jFlowNext").hide();
            $(".SimilarProjects").parent().hide();
        }
        if ($(".SlideItem").length < 4) {
            $(".SimilarProjects .jFlowPrev,.SimilarProjects .jFlowNext").hide();
        }
    }
    catch (e) { }
    // bildspel, objektpres.
    try {
        var oImgHeight = function () {
            var iHeight = 440;
            $(".SlideItem img").each(function () {
                if ($(this).height() > iHeight) {
                    iHeight = $(this).height();
                }
            });
            iHeight = iHeight + 15;
            return iHeight;
        };
        var oTextHeight = function () {
            var oHeight = 15;
            $(".SlideItem span.Display").each(function () {
                if ($(this).height() > oHeight) {
                    oHeight = $(this).height();
                }
            });
            return oHeight;
        };
        if ($(".SlideItem").length > 0) {

            $("#objController").jFlow({
                slides: "#objSlides",
                slideWrapper: "#objSlide",
                selectedWrapper: "jFlowSelected",
                width: "521px",
                height: oImgHeight() + oTextHeight() + 28 + "px",
                duration: 400,
                prev: ".jFlowPrev",
                next: ".jFlowNext"
            });
            $("#objSlide").height(oImgHeight() + oTextHeight() + 28);
        }
        else {
            $(".ObjectInfo .jFlowPrev,.ObjectInfo .jFlowNext,.ObjectInfo #objSlide,.ObjectInfo #objToolbar").hide();
        }
        if ($(".SlideItem").length == 1) {
            $(".ObjectInfo .jFlowPrev,.ObjectInfo .jFlowNext").hide();
        }
    }
    catch (e) { }

    //*************************
    //  MouseOver - TopMenu
    //*************************
    $("li.TopMenuItem").hover(function () {
        try {
            if (!$(this).hasClass("InspirationTopMenu")) {
                if ($(this).children(".SubLevelItem")[0].innerHTML.length > 100) {
                    $(this).addClass("Active");
                    $(this).children(".SubLevelItem").show();
                }
            }
        }
        catch (e) { }
    }, function () {
        try {
            if ($(this).children(".SubLevelItem")[0].innerHTML.length > 100) {
                $(this).children(".SubLevelItem").hide();
                $(this).removeClass("Active");
            }
        }
        catch (e) { }
    });
    // Hover vid valt element
    $("#topMenu li.Selected").hover(function () {
        try {
            if (!$(this).hasClass("InspirationTopMenu")) {
                if ($(this).children(".SubLevelItem")[0].innerHTML.length > 100) {
                    $(this).addClass("Active");
                    $(this).children(".SubLevelItem").show();
                }
            }
        }
        catch (e) { }
    }, function () {
        try {
            if ($(this).children(".SubLevelItem")[0].innerHTML.length > 100) {
                $(this).children(".SubLevelItem").hide();
                $(this).removeClass("Active");
            }
        }
        catch (e) { }
    });
    //*************************
    //  ExpandableBox element
    //*************************
    $(".ExpandableBoxHeader").each(function () {
        if ($(this).hasClass("Collapsed"))
            $(this).next().hide();
    });
    $(".ExpandableBoxHeader").click(function () {
        $(this).toggleClass("Collapsed");
        $(this).next().slideToggle(200);
    });
    //Onload
    $(window).load(function () {
        try {
            $(".Calendar .Hide, .Referral .Hide").switchClass("Hidden", "Hide");
        }
        catch (e) {
            //Sidan har ingen kalender
        }
        try {
            // leta kaka för nyheter
            var news = $.cookie("projectnews");
            news = news.split("|");
            var newsItem = "#" + news[1];
            $(newsItem).children(".Hidden").slideDown("slow");
            $(newsItem).children().children("a").toggleClass("Open");
            $(newsItem).toggleClass("WhiteBG");
            $(newsItem).toggleClass("Selected");
        }
        catch (e) {
            //Sidan har ingen kaka
        }
    });
    try {
        $(".Calendar p.FloatContainer, .Referral .Clickable").click(function () {
            $(this).parent().toggleClass("Selected");
        });
    }
    catch (e) {
        //Sidan har ingen kalender
    }
    //*************************
    //  Nyhetslista, projekt
    //*************************
    $(".NewsLine .Clickable").click(function () {
        if ($(this).children("a").hasClass("Open")) {
            $(this).next(".Hidden").slideUp("slow");
            $(this).children("a").toggleClass("Open");
            $(this).parent().toggleClass("WhiteBG");
            $(".NewsLine").removeClass("WhiteBG");
            $(".NewsLine").children().children("a").removeClass("Open");
            $(".NewsLine").children(".Hidden").slideUp("slow");
            try {
                $.cookie("projectnews", null);
            }
            catch (ex) {
                //listan använder inga kakor
            };
        } else {
            $(".NewsLine").removeClass("WhiteBG");
            $(".NewsLine").removeClass("Selected");
            $(".NewsLine").children().children("a").removeClass("Open");
            $(".NewsLine").children(".Hidden").slideUp("slow");
            $(this).next(".Hidden").slideDown("slow");
            $(this).children("a").toggleClass("Open");
            $(this).parent().toggleClass("WhiteBG");
            $(this).parent().toggleClass("Selected");
            try {
                $.cookie("projectnews", "newsid|" + $(this).parent().attr("id"));
            }
            catch (ex) {
                //listan använder inga kakor
            };
        }
    });
    //*****************************************
    //  Extra resultatlista, hitta.se, projekt
    //*****************************************
    $(".ExtraHeader").click(function () {
        if ($(this).hasClass("Open")) {
            if ($(this).next().hasClass("Hidden")) {
                $(this).next().slideUp("slow");
            }
            else {
                $(this).prev().slideUp("slow");
            }
            $(this).toggleClass("Open");
        } else {
            if ($(this).next().hasClass("Hidden")) {
                $(this).next().slideDown("slow");
            } else {
                $(this).prev().slideDown("slow");
            }
            $(this).toggleClass("Open");
        }
    });
    //******************************
    //  Tabmeny, i content - nivå 4
    //******************************
    $(".TabSwitch").click(function (e) {
        e.preventDefault();
        $(".TabSwitch").parent().removeClass("Selected");
        $(this).parent().addClass("Selected");
        $(".TabContent .FloatContainer, .TabContent").hide();
        //För att IE7 ska hinna med att anpassa floatcontainern
        $("." + this.name).show();
        $("." + this.name).children(".FloatContainer").slideDown(600);

        sIFR.replace(rbunit, {
            selector: '#column2-3 .TabContent h2'
			  , css: [
					'.sIFR-root { color:#111111; margin:0; }'
				],
            tuneHeight: -5, offsetTop: -1
        });
    });

    //************************
    //  Snabbsök i topparean
    //************************
    $(".QuickSearchField").focus(function () {
        $(this).css({ "background-position": "0 0", "margin-top": "-2px", "padding": "12px 20px 10px 47px" });
        $(this).attr("value", "");
    },
	function () {
	    $(this).css("background-position", "0 0");
	    /*$(this).attr("value", "Sök på Riksbyggen.se");*/
	});
    //************************
    // Projektlistning -tabell
    //************************
    $(".ProjectListProjectInfo").addClass("Hidden");

    //start block to be removed
    $(".ProjectListRow").hover(function () {
        if (!($(this).hasClass("WhiteBG"))) {
            $(this).children().css("color", "#d70115");
        }
    }, function () {
        if (!($(this).hasClass("WhiteBG"))) {
            $(this).children("td").css("color", "#000000");
            $(this).children(".ProjectLocation").css("color", "#444444");
        }
    });
    $(".ProjectListRow").click(function () {
        if ($(this).hasClass("WhiteBG")) {
            $(this).next().toggleClass("Hidden");
            $(this).toggleClass("WhiteBG");
        } else {
            $(this).next().toggleClass("Hidden");
            $(this).toggleClass("WhiteBG");
        }
    });
    $(".SearchObjectList .ObjectListRow").hover(function () {
        if (!($(this).hasClass("WhiteBG"))) {
            $(this).children().css("color", "#d70115");
        }
    },
	function () {
	    if (!($(this).hasClass("WhiteBG"))) {
	        $(this).children("td").css("color", "#000000");
	    }
	});
    $(".SearchObjectList .ObjectListRow").click(function () {
        if ($(this).hasClass("WhiteBG")) {
            $(this).next().toggleClass("Hidden");
            $(this).toggleClass("WhiteBG");
        }
        else {
            $(this).next().toggleClass("Hidden");
            $(this).toggleClass("WhiteBG");
        }
    });
    //end block to be removed
    $(".ProjectObjectList .ObjectListRow").hover(function () {
        if (!($(this).hasClass("WhiteBG"))) {
            $(this).children().css("color", "#ffffff");
            $(this).css("background", "#635542");
            $(this).children("td:first-child").css("background-color", "#635542");
            //$(this).children("td.ObjectStatus").css("background-position", "85% 169%");
        }
    },
	function () {
	    if (!($(this).hasClass("WhiteBG"))) {
	        $(this).children("td").css("color", "#000000");
	        $(this).children("td:first-child").css("color", "#444444");
	        $(this).children("td:first-child").css("background-color", "");
	        $(this).css("background", "none");
	        $(this).parent().children(".Even").css("background", "#ffffff");
	        $(this).parent().children(".Odd").css("background-color", "transparent");
	        //$(this).children("td.ObjectStatus").css("background-position", "85% 6px");
	    }
	});
    $(".ProjectObjectList .ObjectListRow").click(function () {
        if ($(this).hasClass("WhiteBG")) {
            $(this).next().toggleClass("Hidden");
            $(this).toggleClass("WhiteBG");
            $(this).css("background", "#ffffff");
            $(this).css("color", "#000000");
        }
        else {
            $(this).next().toggleClass("Hidden");
            $(this).toggleClass("WhiteBG");
            $(this).css("background", "#ffffff");
            $(this).children().css("color", "#000000");
            $(this).children("td:first-child").css("background-color", "#ffffff");
            $(this).children("td:first-child").css("color", "#444444");
        }
    });

    //**************************
    // Bildspel - Projektsidor *
    //**************************
    $('.RBImageGallery').addClass('Gallery'); // adds new class name to maintain degradability

    try {
        $('ul.Gallery').galleria({
            history: true, // activates the history object for bookmarking, back-button etc.
            clickNext: true, // helper for making the image clickable
            insert: '#main_image', // the containing selector for our main image
            onImage: function (image, caption, thumb) {
                // fade in the image & caption
                image.css('display', 'none').fadeIn(1000);
                caption.css('display', 'none').fadeIn(1000);

                // fetch the thumbnail container
                var _li = thumb.parents('li');

                // fade out inactive thumbnail
                _li.siblings().children('img.selected').fadeTo(500, 0.3);

                // fade in active thumbnail
                thumb.fadeTo('fast', 1).addClass('selected');

                // add a title for the clickable image
                image.attr('title', 'Nästa bild >>');
            },
            onThumb: function (thumb) {
                // thumbnail effects goes here
                // fetch the thumbnail container
                var _li = thumb.parents('li');

                // if thumbnail is active, fade all the way.
                var _fadeTo = _li.is('.active') ? '1' : '0.3';

                // fade in the thumbnail when finnished loading
                thumb.css({ display: 'none', opacity: _fadeTo }).fadeIn(1500);

                // hover effects
                thumb.hover(
				function () { thumb.fadeTo('fast', 1); },
				function () { _li.not('.active').children('img').fadeTo('fast', 0.3); } // don't fade out if the parent is active
			)
            }
        });
        // Kolla vilken bild som är aktiv vid sidans laddning, OM användaren kommer t.ex via bokmärke.
        $('ul.Gallery').children().each(function (li) {
            if ($(this).hasClass('active')) {
                $("#imgNr").text((parseInt(li) + 1));
                //Hämta text för aktiv bild
                $('p.MainImgText').html($(this).children('span.ThumbText').html());
            }
        });
    }
    catch (ee) {
        //rullar igenom som vanligt
    }
    // Sökresultat - Hitta adressuppgifter
    $(".LocateRBTbl tr.RbAddressResult").click(function () {
        if ($(this).hasClass("Even")) {
            $(this).css("background-color", "#eee8e0");
            $(this).children().css("background-color", "#eee8e0"); //För IE
        }
        if ($(this).next(".BlockRow").hasClass("Hidden")) {
            $(this).next(".BlockRow").fadeIn(900);
            $(".BlockRow").removeAttr("style");
        }
        else {
            $(this).next(".BlockRow").fadeOut(600);
            $(".BlockRow").removeAttr("style");
        }
        $(this).next(".BlockRow").toggleClass("Hidden");

        if ($(this).hasClass("Selected")) {
            $(this).removeAttr("style");
            $(this).children().removeAttr("style");
        }
        $(this).toggleClass("Selected");
        $(".BlockRow").removeAttr("style");
    });
    // *** öppna i nytt fönster ***
    $(".OpenNewWindow").click(function (e) {
        e.preventDefault();
        var src = this.href;
        popUp(src, 800, 600);
        //newWindow = window.open(src, "popup", "width=" + window.width + ",height=" + window.height + ",toolbar=no,menubar=no,scrollbars=yes,location=no,directories=no,status=no,resizable=1");
        //newWindow.focus();
    });
    // *** öppna i helskärmsfönster ***
    $(".OpenFullScreenWindow").click(function (e) {
        e.preventDefault();
        var src = this.href;
        popUp(src, null, null, true);
        //newWindow = window.open(src, "popup", "width=" + screen.width + ",height=" + screen.height + ",toolbar=no,menubar=no,scrollbars=yes,location=no,directories=no,status=no,resizable=1");
        //newWindow.focus();
    });
    //******* resultatlistan i sök kontor, visa kontaktformulär
    $(".LocateContactForm").click(function (e) {
        e.preventDefault();

        if ($('#dialogClose').hasClass('simplemodal-close'))
            return false;

        var attModal = "#" + $(this).parent().parent().prev().prev()[0].id;
        var src = this.href;

        $.modal('<iframe src="' + src + '" height="400" width="510" frameborder="0" allowtransparency="true" style="border:0">', {
            closeHTML: "<a id='dialogClose' href='/' title='Stäng formuläret'><span class='Hidden'>x</span></a>",
            containerCss: {
                height: 410,
                padding: 0,
                width: 512
            },
            appendTo: attModal,
            onOpen: contact.open,
            onShow: contact.show,
            onClose: interest.close
        });
        $(".LocateRBTbl .simplemodal-close").fadeIn(400);
        // stänga ev. modal-dialog när tabell-rad stängs
        $(attModal).parent().parent().prev('.Selected').click(function () {
            $(attModal + " .simplemodal-close").trigger('click');
        });
    });
    //******* resultatlistan i sök kontor, visa kontaktuppgifter
    $(".LocateOfficeAddress").click(function (e) {
        e.preventDefault();

        if ($('#dialogClose').hasClass('simplemodal-close'))
            return false;

        var attModal = "#" + $(this).parent().parent().prev().prev()[0].id;
        var src = this.href;

        $.modal('<iframe src="' + src + '" height="260" width="510" frameborder="0" allowtransparency="true" style="border:0">', {
            closeHTML: "<a id='contactDialogClose' href='/' title='Stäng formuläret'><span class='Hidden'>x</span></a>",
            containerCss: {
                height: 265,
                padding: 0,
                width: 512
            },
            appendTo: attModal,
            onOpen: contacts.open,
            onShow: contact.show,
            onClose: interest.close
        });
        $(".LocateRBTbl .simplemodal-close").fadeIn(400);
        // stänga ev. modal-dialog när tabell-rad stängs
        $(attModal).parent().parent().prev('.Selected').click(function () {
            $(attModal + " .simplemodal-close").trigger('click');
        });
    });
    //******* Intresseformulär
    $('.BtnApplyInterest').click(function (e) {
        e.preventDefault();
        if (typeof GA_Specifics != 'undefined') {
            GA_Specifics.IntresseAnmal();
        }
        //Hide iframe (that can contain flash and overlay the interestform)
        ShowHideIframes();

        var src = this.href;
        $.modal('<iframe src="' + src + '" id="interestFormIframe" height="1000" width="512" frameborder="0" scrolling="no" allowtransparency="true" style="border:0">', {
            closeHTML: "<a id='dialogClose' href='/'><span class='Hidden'>x</span></a>",
            containerCss: {
                height: 1000,
                padding: 0,
                width: 520
            },
            onOpen: interest.open,
            onShow: interest.show,
            onClose: interest.close,
            position: ["1%", ],
            autoPosition: false
        });

        //location.hash = "#simplemodal-container";


    });
    //****** Kontakta säljare
    $(".ContactSalesPerson").click(function (e) {
        e.preventDefault();

        var src = this.href;
        var contactID = this.id;
        $.modal('<iframe src="' + src + '" height="444" width="512" frameborder="0" scrolling="no" allowtransparency="true" style="border:0">', {
            closeHTML: "<a id='dialogClose' href='/'><span class='Hidden'>x</span></a>",
            containerCss: {
                height: 825,
                padding: 0,
                width: 512
            },
            onOpen: interest.open,
            onShow: interest.show,
            onClose: interest.close,
            overlayClose: true
        });
    });
    //***** Multiple file upload offertförfrågan
    try {
        $(function () {
            $('.MultiFile').MultiFile({
                accept: 'txt|doc|xls|pdf|docx|xlsx', max: 10, STRING: {
                    remove: 'Ta bort',
                    selected: 'Vald fil: $file',
                    denied: 'Felaktig filändelse $ext!',
                    duplicate: 'Filen redan vald:\n$file!'
                }
            });
        });
    }
    catch (e) {
        //Det sabbar script på de sidor som saknar .MultiFile
    }
    //***** Modal översikt av tjänstepaket
    $(".BtnServiceOverview").click(function (e) {
        e.preventDefault();
        var src = this.href;
        $.modal('<iframe src="' + src + '" height="800" width="890" frameborder="0" scrolling="no" allowtransparency="true" style="border:0">', {
            closeHTML: "<a id='dialogClose' href='/'><span class='Hidden'>x</span></a>",
            containerCss: {
                height: 800,
                padding: 0,
                width: 890
            },
            onOpen: interest.open,
            onShow: interest.show,
            onClose: interest.close,
            overlayClose: true,
            position: ["1%", ],
            autoPosition: false
        });
        location.hash = "#simplemodal-container";
    });
    //***** Modalt kontaktformulär - tjänster
    $(".BtnServiceInterestForm").click(function (e) {
        e.preventDefault();
        var src = this.href;
        $.modal('<iframe src="' + src + '" height="930" width="845" frameborder="0" scrolling="no" allowtransparency="true" style="border:0">', {
            closeHTML: "<a id='dialogClose' href='/'><span class='Hidden'>x</span></a>",
            containerCss: {
                height: 935,
                padding: 0,
                width: 847
            },
            onOpen: interest.open,
            onShow: interest.show,
            onClose: interest.close,
            overlayClose: true,
            position: ["1%", ],
            autoPosition: false
        });
        location.hash = "#simplemodal-container";
    });

    $(".ContentWrapper").removeAttr("style");
    $("#addThisContainer").append('<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js?pub=riksbyggen" defer="defer"></script>');
});

//Intresse-form
var interest = {
    open: function(dialog) {
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $(".simplemodal-overlay").removeAttr("style");
        $(".simplemodal-overlay").addClass("ModalMask");

        $(".simplemodal-overlay").css({ 'width': maskWidth, 'height': maskHeight });
        $(".simplemodal-overlay").css('z-index', '1001');

        dialog.overlay.fadeIn(400, function() {
            dialog.overlay.fadeTo(100, 0.6);
        });

        dialog.container.fadeIn(200, function() {
            if ($(".simplemodal-container").height() == 0) {
                $(".simplemodal-container").height("935")
                $(".simplemodal-data").height("935")
                dialog.data.find("iframe")[0].height = 930;
                dialog.data.find("iframe")[0].style.height = 935;
            }
            if ($(".simplemodal-overlay").height() != $(document).height()) {
                $(".simplemodal-overlay").css('height', $(document).height() + 'px');
            }
            dialog.data.fadeIn(100);
        });
    },
    show: function(dialog) {
        $("a#dialogClose", dialog.data).click(function(e) {
            e.preventDefault();
            interest.close();
        });
        $(window).resize(function() {
            resize(dialog);
        });
    },
    close: function(dialog) {
        $(".LocateRBTbl .simplemodal-close").hide();
        dialog.data.fadeOut(200, function() {
            dialog.container.fadeOut(200, function() {
                dialog.overlay.fadeOut(200, function() {
                    $.modal.close();
                    //show iframe
                    ShowHideIframes();
                });
            });
        });
    }
};
var iframesVisible = true;
function ShowHideIframes() {
    try {
        if(iframesVisible){
            $(".projectMainColumn").find("iframe").css("visibility", "hidden");
            $(".ObjectInfo").find("iframe").css("visibility", "hidden");
            $(".ProjectTableView").find("iframe").css("visibility", "hidden");
			$(".ProjectTableView").find(".HittaMapDiv").css("visibility","hidden");
            iframesVisible = false;
        }
        else{
            $(".projectMainColumn").find("iframe").css("visibility", "visible");
            $(".ObjectInfo").find("iframe").css("visibility", "visible");
            $(".ProjectTableView").find("iframe").css("visibility", "visible");
			$(".ProjectTableView").find(".HittaMapDiv").css("visibility","visible");
            iframesVisible = true;
        }
    }catch(e){}
}
function resize(dialog) {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $(".simplemodal-overlay").css({ 'width': maskWidth, 'height': maskHeight });
}
//Kontakt-form
var contact = {
    open: function(dialog) {
        var attModal = this.opts.appendTo;
        $(attModal + " .simplemodal-container").removeAttr("style");
        $(attModal + " .simplemodal-container").css({
            'height': '405px',
            'position': 'static',
            'width': '512px',
            'z-index': '1002'
        });
        $(attModal + " .simplemodal-overlay").removeAttr("style");
        $(attModal + " .simplemodal-overlay").css("display", "none");

        $(attModal + " .simplemodal-wrap").css("margin-top", "-30px");

        $(".LocateRBTbl .simplemodal-close").hide();

        dialog.container.fadeIn(200, function() {
            dialog.data.fadeIn(300);
        });
    },
    show: function(dialog) {
        $("a#dialogClose", dialog.data).click(function(e) {
            e.preventDefault();
            contact.close();
        });
    }
}
//Kontorets kontakter - i sökresultat
var contacts = {
    open: function(dialog) {
        var attModal = this.opts.appendTo;
        $(attModal + " .simplemodal-container").removeAttr("style");
        $(attModal + " .simplemodal-container").css({
            'height': '265px',
            'position': 'static',
            'width': '512px',
            'z-index': '1002'
        });
        $(attModal + " .simplemodal-overlay").removeAttr("style");
        $(attModal + " .simplemodal-overlay").css("display", "none");

        $(attModal + " .simplemodal-wrap").css("margin-top", "-30px");

        $(".LocateRBTbl .simplemodal-close").hide();

        dialog.container.fadeIn(200, function() {
            dialog.data.fadeIn(300);
        });
    }
}
function popUp(winURL, width, height, fullscreen) {
    //alert("w: " + width + "\n\rh: " + height + "\r\nfullscreen: " + fullscreen);
    var w = screen.width-12;
    var h = screen.height-66;
    var params = "";

	params = "toolbar=no,menubar=no,scrollbars=yes,location=no,directories=no,status=no,resizable=1";
    
	if (fullscreen == true) {
        params += ",top=0, left=0";
    }
    else {
		params += ",top=80";
        if (width)
            w = width;
        if (height)
            h = height;
    }
	params += ",width=" + w;
    params += ",height=" + h;
    
    try {
        newWindow = window.open(winURL, "popup", params);
        newWindow.focus();
    }
    catch (e) {
        window.open(winURL, "popup", params);
    }
}
//Used on the Sök Bostad page where , atfer you have filtered your search, are scrolled down to the results. this event is triggerd after the updatepanel has loaded
//variable 'element' is the ID of the element
var currentSearchElement = "";
function ScrollToResults(element) {

    currentSearchElement = "#" + element;

    try {
        $("body").css('overflow', 'hidden');
        $("#ajaxLoader").removeClass('Hidden');
        $("#ajaxLoader").css('display', 'block');
        $("#ajaxLoader").css('height', $(document).height());
        var wHeight = ($(window).height() / 2) - 16;
        $("#ajaxLoader img").css('margin-top', wHeight);

        var prm = Sys.WebForms.PageRequestManager.getInstance();
        if (!prm)
            location.hash = currentSearchElement;
        else
            prm.add_pageLoaded(scrollDown);
    }
    catch (e) {
        location.hash = currentSearchElement;
        $("body").css('overflow', 'auto');
        $("#ajaxLoader").addClass('Hidden');
        $("#ajaxLoader").removeAttr('style');
    }
}
function scrollDown(sender, args) {
    $('html').animate({
        scrollTop: $(currentSearchElement).offset().top
    }, 600, function() {
        $("body").css('overflow', 'auto');
        $("#ajaxLoader").addClass('Hidden');
        $("#ajaxLoader").removeAttr('style');
        location.hash = currentSearchElement;
    });
}

function Redirect(url) {
    window.location = url;
}
//Besökta objekt och projekt i sajtfoten
function GetVisitedObjects() {
    $.ajax({
        url: '/WebHandlers/HandleVisitedObjects.ashx',
        data: {},
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            if (response != null) {
                $('.RecentObjects').empty();
                var ul = $('<ul>').appendTo('.RecentObjects');
                $.each(response.objects, function (index, value) {
                    ul.append('<li>' + value );
                });
            }
        },
        error: function () {

        }
    });
}
function GetVisitedProjects() {
    $.ajax({
        url: '/WebHandlers/HandleVisitedProjects.ashx',
        data: {},
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            if (response != null) {
                $('.RecentProjects').empty();
                var ul = $('<ul>').appendTo('.RecentProjects');
                $.each(response.projects, function (index, value) {
                    ul.append('<li>' + value );
                });
            }
        },
        error: function () {

        }
    });
}

function RegisterClickEventForShowLeavePageClass() {
    $("a.showLeavePage,.showLeavePage a").click(function () {
        var url = $(this).attr('href');
        if (!url) {
            return false;
        }
        $.ajax({
            url: '/WebHandlers/LeaveRbDomain.ashx',
            data: { 'returnUrl': url },
            dataType: 'json',
            contentType: 'text/plain',
            async: false,
            success: function (data) {
                if (data == null) return;
                if (data.sameDomain) {
                    location.href = data.url;
                }
                else {
                    window.open(data.url, '_blank');
                }
            }
        });
        //Stoppa default beteende
        return false;
    });
}
/*******************************************************************
Script för Event hookups för Specifika Google analytics spårningar.

Patrik Jellerbo
Mainpipe
2013

*******************************************************************/
var GA_Specifics = {

    IntresseAnmal: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Projekt', 'Intresseanmalan ', 'Anmal intresse ', , false]);
    },
    IntresseSkicka: function () {
        //parent för att intresseformuläret ligger i en iframe
        parent._gaq.push(['_trackEvent', 'Riksbyggen_Projekt', 'Intresseanmalan', 'Skicka', , false]);
    },

    BosparBestallBlankett: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Bospar', 'Bestall_blanketter', 'Skicka', , false]);
    },
    BosparLoggaIn: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Bospar', 'Logga_in', 'Loggain_knapp', , false]);
    },

    Bostadsrattsforening: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Tjanster', 'Offertforfragan', 'Bostadsrattsforening', , false]);
    },
    BostadsrattSkicka: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Tjanster', 'Offertforfragan', 'Bostadsrattsforening_Skicka ', , false]);
    },
    KommersiellFastighetsagare: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Tjanster', 'Offertforfragan', 'Kommersiell_fastighet', , false]);
    },
    KommersiellFastighetsagareSkicka: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen_Tjanster', 'Offertforfragan', 'Kommersiell_fastighet_Skicka', , false]);
    },

    KontaktaOss: function () {
        _gaq.push(['_trackEvent', 'Riksbyggen ', 'Kontakta_oss ', 'Skicka ', , false]);
    }
}

$(document).ready(function () {

//    $(".BtnSendInterestForm").click(function (e) {
//        GA_Specifics.IntresseSkicka();
//        this.unbind().click();
//        return true;
//    });

    $(".blanketterdokument").find('input[type="submit"]').click(function (e) {
        GA_Specifics.BosparBestallBlankett();
    });

    $(".GAInquiryBrf").find('input').click(function (e) {
        GA_Specifics.Bostadsrattsforening();
    });
    $(".GAInquiryCom").find('input').click(function (e) {
        GA_Specifics.KommersiellFastighetsagare();
    });
    $(".InquiryBrfSend").click(function (e) {
        GA_Specifics.BostadsrattSkicka();
    });
    $(".InquiryComSend").click(function (e) {
        GA_Specifics.KommersiellFastighetsagareSkicka();
    });

    $(".GAContactSend").click(function (e) {
        GA_Specifics.KontaktaOss();
    });

    $(".GABoSpar").click(function (e) {
        GA_Specifics.BosparLoggaIn();
    });
    
});var fromCookie = false;
var chkTrigger;
var mIDs = "";
var countyIsClicked = false;
$(document).ready(function () {
    $("#saveFavSearch").click(function (h) {
        h.preventDefault();
        setHouseSearchCookie(60);
        this.innerHTML = "Favoritsökning sparad!"
    });
    function f(h) {
        try {
            var p = $.cookie(h);
            p = p.split(";");
            for (i = 0; i < p.length; i++) {
                var q = p[i].split("|");
                var k = "";
                var m = "";
                var o = "";
                var j = "";
                switch (q[0].toString()) {
                    case "county":
                        $(".MultiCounty").find("option").each(function (r, s) {
                            if (this.value.toString() == q[1].toString()) {
                                if (this.value.toString() != "0") {
                                    countyIsClicked = true
                                }
                                $(".MultiCounty").val(this.value.toString()).change()
                            }
                        });
                        break;
                    case "muncipalityIDs":
                        $("#hidMuncipalityIDs").val(q[1].toString());
                        mIDs = q[1].toString();
                        break;
                    case "housingType":
                        k = q[1].split(",");
                        if (k[0].toString() == "1") {
                            $(".ObjApartment input")[0].checked = true
                        } else {
                            $(".ObjApartment input")[0].checked = false
                        }
                        if (k[1].toString() == "2") {
                            $(".ObjHouse input")[0].checked = true
                        } else {
                            $(".ObjHouse input")[0].checked = false
                        }
                        break;
                    case "category":
                        k = q[1].toString();
                        if (k == "2") {
                            $(".ObjBonum input").trigger("click")
                        }
                        break;
                    case "price":
                        k = q[1].split(",");
                        $("#priceSlide").slider("option", "values", [parseInt(k[0].toString()), parseInt(k[1].toString())]);
                        $(".MinPriceVal").text(g(k[0].toString()) + " kr");
                        if (k[1].toString() == "8000000") {
                            $(".MaxPriceVal").text(g(k[1].toString()) + " kr +")
                        } else {
                            $(".MaxPriceVal").text(g(k[1].toString()) + " kr")
                        }
                        m = k[2].toString();
                        o = k[3].toString();
                        j = o.split("%")[0] - m.split("%")[0];
                        $("div#priceSlide a.ui-slider-handle")[0].style.left = m;
                        $("div#priceSlide a.ui-slider-handle")[1].style.left = o;
                        $("div#priceSlide div.ui-slider-range").attr("style", "left:" + m + ";width:" + j + "%;");
                        $(".HidMinPrice").val(k[0].toString());
                        $(".HidMaxPrice").val(k[1].toString());
                        break;
                    case "rooms":
                        k = q[1].split(",");
                        $("#roomSlide").slider("option", "values", [parseInt(k[0].toString()), parseInt(k[1].toString())]);
                        $(".MinRoomVal").text(g(k[0].toString()) + " st");
                        if (b == "5") {
                            $(".MaxRoomVal").text(g(k[1].toString()) + " st +")
                        } else {
                            $(".MaxRoomVal").text(g(k[1].toString()) + " st")
                        }
                        m = k[2].toString();
                        o = k[3].toString();
                        j = o.split("%")[0] - m.split("%")[0];
                        $("div#roomSlide a.ui-slider-handle")[0].style.left = m;
                        $("div#roomSlide a.ui-slider-handle")[1].style.left = o;
                        $("div#roomSlide div.ui-slider-range").attr("style", "left:" + m + ";width:" + j + "%;");
                        $(".HidMinRoom").attr("value", k[0].toString());
                        $(".HidMaxRoom").attr("value", k[1].toString());
                        break;
                    case "area":
                        k = q[1].split(",");
                        $("#areaSlide").slider("option", "values", [parseInt(k[0].toString()), parseInt(k[1].toString())]);
                        $(".MinAreaVal").html(g(k[0].toString()) + " m<sup>2</sup>");
                        if (b == "5") {
                            $(".MaxAreaVal").html(g(k[1].toString()) + " m<sup>2</sup> +")
                        } else {
                            $(".MaxAreaVal").html(g(k[1].toString()) + " m<sup>2</sup>")
                        }
                        m = k[2].toString();
                        o = k[3].toString();
                        j = o.split("%")[0] - m.split("%")[0];
                        $("div#areaSlide a.ui-slider-handle")[0].style.left = m;
                        $("div#areaSlide a.ui-slider-handle")[1].style.left = o;
                        $("div#areaSlide div.ui-slider-range").attr("style", "left:" + m + ";width:" + j + "%;");
                        $(".HidMinArea").attr("value", k[0].toString());
                        $(".HidMaxArea").attr("value", k[1].toString());
                        break;
                    case "fee":
                        k = q[1].split(",");
                        $("#feeSlide").slider("option", "values", [parseInt(k[0].toString()), parseInt(k[1].toString())]);
                        $(".MinFeeVal").text(g(k[0].toString()) + " kr");
                        if (b == "5") {
                            $(".MaxFeeVal").text(g(k[1].toString()) + " kr +")
                        } else {
                            $(".MaxFeeVal").text(g(k[1].toString()) + " kr")
                        }
                        m = k[2].toString();
                        o = k[3].toString();
                        j = o.split("%")[0] - m.split("%")[0];
                        $("div#feeSlide a.ui-slider-handle")[0].style.left = m;
                        $("div#feeSlide a.ui-slider-handle")[1].style.left = o;
                        $("div#feeSlide div.ui-slider-range").attr("style", "left:" + m + ";width:" + j + "%;");
                        $(".HidMinFee").attr("value", k[0].toString());
                        $(".HidMaxFee").attr("value", k[1].toString());
                        break;
                    case "properties":
                        k = q[1].split(",");
                        $(".ChkProperties input").each(function (r) {
                            k[r] == "1" ? this.checked = true : this.checked = false
                        });
                        break;
                    case "tenureStatus":
                        k = q[1].split(",");
                        k[0] == "1" ? $(".TenureStatus input")[0].checked = true : $(".TenureStatus input")[0].checked = false;
                        k[1] == "2" ? $(".TenureStatus input")[1].checked = true : $(".TenureStatus input")[1].checked = false;
                        break;
                    case "readyToMoveIn":
                        q[1] == "1" ? $(".ChkProjObjStatus input")[0].checked = true : $(".ChkProjObjStatus input")[0].checked = false;
                        break
                }
            }
            var n = setTimeout("setMunicipalitys(mIDs)", 1400)
        } catch (l) { }

    }
    setMunicipalitys = function (h) {
        if (h.indexOf(",") != -1) {
            h = h.split(",");
            $(h).each(function (j) {
                $(".multiSelectOptions").find("input:checkbox").each(function (k, l) {
                    if (l.value.toString() == h[j].toString()) {
                        l.checked = true;
                        $(l).parent("label").addClass("checked");
                        chkTrigger = l
                    }
                })
            })
        } else {
            $(".multiSelectOptions").find("input:checkbox").each(function (j, k) {
                if (k.value.toString() == h.toString()) {
                    k.checked = true;
                    $(k).parent("label").addClass("checked");
                    chkTrigger = k
                }
            })
        }
        if (chkTrigger == undefined) {
            chkTrigger = $("input.selectAll")[0]
        }
        fromCookie = true;
        $(chkTrigger).trigger("click");
        chkTrigger.checked = true
    };
    var c = new Array(8);
    var a = 0;
    var d = "";
    var b = "";
    var e = function () {
        c[0] = $("#priceSlide").slider("values", 0).toString();
        c[1] = $("#priceSlide").slider("values", 1).toString();
        c[2] = $("#roomSlide").slider("values", 0).toString();
        c[3] = $("#roomSlide").slider("values", 1).toString();
        c[4] = $("#areaSlide").slider("values", 0).toString();
        c[5] = $("#areaSlide").slider("values", 1).toString();
        c[6] = $("#feeSlide").slider("values", 0).toString();
        c[7] = $("#feeSlide").slider("values", 1).toString()
    };
    var g = function (n) {
        var k = "" + n;
        var l = "";
        var h,
		m;
        for (h = k.length - 1, m = 1; h >= 0; h--, m++) {
            l = k.charAt(h) + l;
            if (m == 3) {
                m = 0;
                l = " " + l
            }
        }
        return l
    };
    $(".MultiCounty").click(function () {
        countyIsClicked = true
    });
    $(".MultiCounty").change(function () {
        $(".MultiCounty option:selected").each(function () {
            if (this.value != "0") {
                switch (this.value) {
                    case "BigCityS":
                        for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                            var h = $(".MultiCounty")[0].options[iOpt].text;
                            var j = /stockholm/i;
                            if (!(h.search(j) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityS")) {
                                var l = $(".MultiCounty")[0].options[iOpt].value;
                                GetCountyMunicipalitys(parseInt(l), parseInt(l), false);
                                break
                            }
                        }
                        break;
                    case "BigCityG":
                        for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                            var h = $(".MultiCounty")[0].options[iOpt].text;
                            var j = /götaland/i;
                            if (!(h.search(j) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityG")) {
                                var l = $(".MultiCounty")[0].options[iOpt].value;
                                GetCountyMunicipalitys(parseInt(l), 20, true);
                                break
                            }
                        }
                        break;
                    case "BigCityM":
                        for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                            var h = $(".MultiCounty")[0].options[iOpt].text;
                            var j = /skåne/i;
                            if (!(h.search(j) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityM")) {
                                var l = $(".MultiCounty")[0].options[iOpt].value;
                                GetCountyMunicipalitys(parseInt(l), 30, true);
                                break
                            }
                        }
                        break;
                    default:
                        GetCountyMunicipalitys(this.value, this.value, false);
                        break
                }
            } else {
                if (!$.cookie("housesearchsettings") && !fromCookie && $(".MiniSearch").val() == undefined) {
                    GetProjects(0, "0", housingType(), tenureStatus(), category())
                }
                if (countyIsClicked) {
                    if (this.value == "0") {
                        $(".multiSelect").attr("value", "Alla kommuner");
                        GetProjects(0, "0", housingType(), tenureStatus(), category())
                    } else {
                        GetAllMunicipalitys()
                    }
                } else {
                    if (this.value == "0") {
                        var k = setTimeout("$('.multiSelect')[0].disabled = true", 600)
                    }
                }
            }
        })
    }).change();
    $(".SearchArea .MultiMunicipality").multiSelect({
        oneOrMoreSelected: "*",
        selectAll: true,
        selectAllText: "Alla kommuner",
        // unescape("%E4") producerar "ä". Work-around för Jira-ärende IT-232
        noneSelected: "V" + unescape("%E4") + "lj kommun"
    }, function (n) {
        var j = "";
        var k = GetMunicipalityID($(".MultiCounty").val());
        var o = $("#hidMuncipalityIDs").val();
        var p = $(n).val();
        var q = o.search(p);
        if (p == "0") {
            if (n.parent().hasClass("checked")) {
                n.parent().siblings().each(function (r) {
                    this.className = "";
                    $(this).children()[0].checked = false;
                    o = ""
                })
            } else {
                if (n[0].checked) {
                    n.parent().siblings().each(function (r) {
                        this.className = "";
                        $(this).children()[0].checked = false
                    });
                    if (!n.parent().hasClass("checked")) {
                        n.parent().addClass("checked")
                    }
                } else { }

            }
        } else {
            $(".multiSelectOptions").find("input:checkbox").each(function (r, s) {
                if (r == "0" && s.value == "0") {
                    s.checked = false;
                    s.parentNode.className = ""
                }
            });
            var l = false;
            $(".multiSelectOptions").find("input:checkbox").each(function (r, s) {
                if (s.checked) {
                    l = true
                }
            });
            if (!l) {
                $(".multiSelectOptions").find("input:checkbox.selectAll").val("0").trigger("click");
                $(".multiSelectOptions").find("input:checkbox.selectAll").val("0").parent().addClass("checked")
            }
        }
        switch (q) {
            case -1:
                if (o) {
                    j = o + "," + p
                } else {
                    j = p
                }
                break;
            default:
                var m = o.split(",");
                var h = 0;
                for (var h = 0; h < m.length; h++) {
                    if (!m[h].match(p)) {
                        if (j) {
                            j = j + "," + m[h]
                        } else {
                            j = m[h]
                        }
                    } else {
                        if (j) {
                            j = j + "," + m[h]
                        } else {
                            j = m[h]
                        }
                    }
                }
                break
        }
        $("#hidMuncipalityIDs").attr("value", j);
        if (j) {
            GetProjects(k, j, housingType(), tenureStatus(), category())
        } else {
            GetProjects(k, "0", housingType(), tenureStatus(), category())
        }
    });
    $(".ObjApartment input,.ObjHouse input,.TenureStatus input,.ObjBonum input,.ChkProjObjStatus input").click(function () {
        var j = GetMunicipalityID($(".MultiCounty").val());
        var h = "0";
        if ($("#hidMuncipalityIDs").val()) {
            h = $("#hidMuncipalityIDs").val()
        }
        GetProjects(j, h, housingType(), tenureStatus(), category())
    });

    $("#priceSlide").slider({
        min: 0,
        max: 8000000,
        step: 500000,
        range: true,
        values: [0, 8000000],
        stop: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".HidMinPrice").attr("value", d);
            $(".HidMaxPrice").attr("value", b);
            c[0] = d.toString();
            c[1] = b.toString();
            c[2] = $("#roomSlide").slider("values", 0).toString();
            c[3] = $("#roomSlide").slider("values", 1).toString();
            c[4] = $("#areaSlide").slider("values", 0).toString();
            c[5] = $("#areaSlide").slider("values", 1).toString();
            c[6] = $("#feeSlide").slider("values", 0).toString();
            c[7] = $("#feeSlide").slider("values", 1).toString();
            //TODO: Project search
            GetSearchResult(-1, c, objProperties(), readyToMoveIn())
        },
        slide: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".MinPriceVal").text(g(d) + " kr");
            if (b == "8000000") {
                $(".MaxPriceVal").text(g(b) + " kr +")
            } else {
                $(".MaxPriceVal").text(g(b) + " kr")
            }
        }
    });
    $("#roomSlide").slider({
        min: 1,
        max: 5,
        step: 1,
        range: true,
        values: [1, 5],
        stop: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".HidMinRoom").attr("value", d);
            $(".HidMaxRoom").attr("value", b);
            c[0] = $("#priceSlide").slider("values", 0).toString();
            c[1] = $("#priceSlide").slider("values", 1).toString();
            c[2] = d.toString();
            c[3] = b.toString();
            c[4] = $("#areaSlide").slider("values", 0).toString();
            c[5] = $("#areaSlide").slider("values", 1).toString();
            c[6] = $("#feeSlide").slider("values", 0).toString();
            c[7] = $("#feeSlide").slider("values", 1).toString();
            //TODO: ProjectSearch
            GetSearchResult(-1, c, objProperties(), readyToMoveIn())
        },
        slide: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".MinRoomVal").text(g(d) + " st");
            if (b == "5") {
                $(".MaxRoomVal").text(g(b) + " st +")
            } else {
                $(".MaxRoomVal").text(g(b) + " st")
            }
        }
    });
    $("#areaSlide").slider({
        min: 0,
        max: 200,
        step: 10,
        range: true,
        values: [0, 200],
        stop: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".HidMinArea").attr("value", d);
            $(".HidMaxArea").attr("value", b);
            c[0] = $("#priceSlide").slider("values", 0).toString();
            c[1] = $("#priceSlide").slider("values", 1).toString();
            c[2] = $("#roomSlide").slider("values", 0).toString();
            c[3] = $("#roomSlide").slider("values", 1).toString();
            c[4] = d.toString();
            c[5] = b.toString();
            c[6] = $("#feeSlide").slider("values", 0).toString();
            c[7] = $("#feeSlide").slider("values", 1).toString();
            //TODO: ProjectSearch
            GetSearchResult(-1, c, objProperties(), readyToMoveIn())
        },
        slide: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".MinAreaVal").html(g(d) + " m<sup>2</sup>");
            if (b == "200") {
                $(".MaxAreaVal").html(g(b) + " m<sup>2</sup> +")
            } else {
                $(".MaxAreaVal").html(g(b) + " m<sup>2</sup>")
            }
        }
    });

    $("#feeSlide").slider({
        min: 0,
        max: 10000,
        step: 500,
        range: true,
        values: [0, 10000],
        stop: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".HidMinFee").attr("value", d);
            $(".HidMaxFee").attr("value", b);
            c[0] = $("#priceSlide").slider("values", 0).toString();
            c[1] = $("#priceSlide").slider("values", 1).toString();
            c[2] = $("#roomSlide").slider("values", 0).toString();
            c[3] = $("#roomSlide").slider("values", 1).toString();
            c[4] = $("#areaSlide").slider("values", 0).toString();
            c[5] = $("#areaSlide").slider("values", 1).toString();
            c[6] = d.toString();
            c[7] = b.toString();
            //TODO: ProjectSearch
            GetSearchResult(-1, c, objProperties(), readyToMoveIn())
        },
        slide: function (j, h) {
            d = h.values[0];
            b = h.values[1];
            $(".MinFeeVal").text(g(d) + " kr");
            if (b == "10000") {
                $(".MaxFeeVal").text(g(b) + " kr +")
            } else {
                $(".MaxFeeVal").text(g(b) + " kr")
            }
        }
    });

    $(".ShowExtSearchOptions").click(function (h) {
        h.preventDefault();
        $(".ExtSearchOptions").toggleClass("Hidden");
        if ($(".ExtSearchOptions").hasClass("Hidden")) {
            $(this).removeAttr("style")
        } else {
            $(this).css("background", "url(/templates/public/images/backgrounds/btnMinusBig.png) no-repeat 130px 0px")
        }
    });
    $(".ShowExtSearchOptions").hover(function () {
        $(this).css("background-position", "130px -25px")
    }, function () {
        $(this).css("background-position", "130px 0px")
    });
    $(".ChkProperties input").click(function () {
        e();
        //TODO: ProjectSearch
        GetSearchResult(-1, c, objProperties(), readyToMoveIn())
    });
    $("a.ResetSearchForm").click(function (h) {
        h.preventDefault();
        $(".MultiCounty").val("0").change();
        $(".multiSelect").attr("value", "Alla kommuner");
        $("#hidMuncipalityIDs").attr("value", 0);
        $(".ObjApartment input")[0].checked = true;
        $(".ObjHouse input")[0].checked = true;
        $(".ObjBonum input")[0].checked = false;
        $("#priceSlide").slider("values", 0, [0]);
        $(".MinPriceVal").text("0 kr");
        $(".HidMinPrice").attr("value", 0);
        $("#priceSlide").slider("values", 1, [8000000]);
        $(".MaxPriceVal").text("8 000 000 kr +");
        $(".HidMaxPrice").attr("value", 8000000);
        $("#roomSlide").slider("values", 0, [1]);
        $(".MinRoomVal").text("0 st");
        $(".HidMinRoom").attr("value", 0);
        $("#roomSlide").slider("values", 1, [5]);
        $(".MaxRoomVal").text("5 st +");
        $(".HidMaxRoom").attr("value", 5);
        $("#areaSlide").slider("values", 0, [0]);
        $(".MinAreaVal").html("0 m<sup>2</sup>");
        $(".HidMinArea").attr("value", 0);
        $("#areaSlide").slider("values", 1, [200]);
        $(".MaxAreaVal").html("200 m<sup>2</sup> +");
        $(".HidMaxArea").attr("value", 200);
        $("#feeSlide").slider("values", 0, [0]);
        $(".MinFeeVal").text("0 kr");
        $(".HidMinFee").attr("value", 0);
        $("#feeSlide").slider("values", 1, [10000]);
        $(".MaxFeeVal").text("10 000 kr +");
        $(".HidMaxFee").attr("value", 10000);
        $(".ChkProperties input").each(function (j) {
            this.checked = false
        });
        $(".ChkProjObjStatus input").each(function (j) {
            this.checked = false
        });
        e();
        GetProjects(0, "0", housingType(), tenureStatus(), category());
        GetAllMunicipalitys();
        $.cookie("housesearchsettings", null)
    });
    $(".BtnShowSearchResult").click(function () {
        location.hash = "";
        if ($.cookie("housesearchsettings")) {
            $.cookie("housesearchsettings", null)
        }
        if (!$("#hidMuncipalityIDs").val()) {
            $("#hidMuncipalityIDs").val("0")
        }
        setHouseSearchCookie(null)
    });
    if ($.cookie("housesearchsettings") && countyQueryStr == "") {
        f("housesearchsettings")
    } else {
        if ($.cookie("favosearchsettings")) {
            f("favosearchsettings")
        }
    }
});
function setHouseSearchCookie(a) {
    var b;
    if (a != null) {
        b = "favosearchsettings"
    } else {
        b = "housesearchsettings"
    }
    $.cookie(b, "county|" + $(".MultiCounty").val() + ";muncipalityIDs|" + $("#hidMuncipalityIDs").val() + ";housingType|" + housingType() + ";category|" + category() + ";price|" + $("#priceSlide").slider("values") + "," + $("div#priceSlide a.ui-slider-handle")[0].style.left + "," + $("div#priceSlide a.ui-slider-handle")[1].style.left + ";rooms|" + $("#roomSlide").slider("values") + "," + $("div#roomSlide a.ui-slider-handle")[0].style.left + "," + $("div#roomSlide a.ui-slider-handle")[1].style.left + ";area|" + $("#areaSlide").slider("values") + "," + $("div#areaSlide a.ui-slider-handle")[0].style.left + "," + $("div#areaSlide a.ui-slider-handle")[1].style.left + ";fee|" + $("#feeSlide").slider("values") + "," + $("div#feeSlide a.ui-slider-handle")[0].style.left + "," + $("div#feeSlide a.ui-slider-handle")[1].style.left + ";properties|" + objProperties() + ";tenureStatus|" + tenureStatus() + ";readyToMoveIn|" + readyToMoveIn(), {
        expires: a,
        path: "/"
    })
}
var housingType = function () {
    var a = "0";
    var b = "0";
    var c = "";
    if ($(".ObjApartment input")[0].checked) {
        a = "1"
    }
    if ($(".ObjHouse input")[0].checked) {
        b = "2"
    }
    c = a + "," + b;
    return c
};
var tenureStatus = function () {
    var a = "0";
    var d = "0";
    var c = "";
    try {
        if ($(".TenureStatus input")[0].checked) {
            a = "1"
        }
        if ($(".TenureStatus input")[1].checked) {
            d = "2"
        }
    } catch (b) { }

    c = a + "," + d;
    return c
};
var category = function () {
    var a = "1";
    if ($(".ObjBonum input")[0].checked) {
        a = "2"
    }
    return a
};
var objProperties = function () {
    var a = new Array(3);
    $(".ChkProperties input").each(function (b) {
        a[b] = this.checked ? "1" : "0"
    });
    return a
};
function readyToMoveIn() {
    var b = "0";
    try {
        if ($(".ChkProjObjStatus input")[0].checked) {
            b = "1"
        }
    } catch (a) { }

    return b
}
function CreateMunicipalityDropDown(b) {
    var c = "";
    var a = "";
    var d = 0;
    c += '<div id="municipalitys"><select class="MultiMunicipality" width="150">';
    try {
        for (x in b) {
            a = b[d];
            a = a.split(",");
            c += '<option value="' + a[0] + '">' + a[1] + "</option>";
            d++
        }
    } catch (f) { }

    c += "</select></div>";
    $("#municipalitys").replaceWith(c);
    CreateMultiDropDown()
}
function CreateMultiDropDown() {
    $(".MultiMunicipality").multiSelect({
        oneOrMoreSelected: "*",
        selectAll: true,
        selectAllText: "Alla kommuner",
        // unescape("%E4") producerar "ä". Work-around för Jira-ärende IT-232
        noneSelected: "V" + unescape("%E4") + "lj kommun"
    }, function (g) {
        var b = "";
        var c = 0;
        switch ($(".MultiCounty").val()) {
            case "BigCityS":
                for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                    var h = $(".MultiCounty")[0].options[iOpt].text;
                    var a = /stockholm/i;
                    if (!(h.search(a) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityS")) {
                        var l = $(".MultiCounty")[0].options[iOpt].value;
                        c = parseInt(l)
                    }
                }
                break;
            case "BigCityG":
                for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                    var h = $(".MultiCounty")[0].options[iOpt].text;
                    var a = /götaland/i;
                    if (!(h.search(a) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityG")) {
                        var l = $(".MultiCounty")[0].options[iOpt].value;
                        c = parseInt(l)
                    }
                }
                break;
            case "BigCityM":
                for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                    var h = $(".MultiCounty")[0].options[iOpt].text;
                    var a = /skåne/i;
                    if (!(h.search(a) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityM")) {
                        var l = $(".MultiCounty")[0].options[iOpt].value;
                        c = parseInt(l)
                    }
                }
                break;
            default:
                c = parseInt($(".MultiCounty").val());
                break
        }
        var j = $("#hidMuncipalityIDs").val();
        var k = $(g).val();
        var m = j.search(k);
        if (k == "0") {
            if (g.parent().hasClass("checked")) {
                g.parent().siblings().each(function (n) {
                    this.className = "";
                    $(this).children()[0].checked = false;
                    j = ""
                })
            } else {
                if (g[0].checked) {
                    g.parent().siblings().each(function (n) {
                        this.className = "";
                        $(this).children()[0].checked = false
                    });
                    if (!g.parent().hasClass("checked")) {
                        g.parent().addClass("checked")
                    }
                } else { }

            }
        } else {
            $(".multiSelectOptions").find("input:checkbox").each(function (n, o) {
                if (o.value == "0") {
                    o.checked = false;
                    o.parentNode.className = ""
                }
            });
            var d = false;
            $(".multiSelectOptions").find("input:checkbox").each(function (n, o) {
                if (o.checked) {
                    d = true
                }
            });
            if (!d) {
                $(".multiSelectOptions").find("input:checkbox.selectAll").val("0").trigger("click");
                $(".multiSelectOptions").find("input:checkbox.selectAll").val("0").parent().addClass("checked")
            }
        }
        switch (m) {
            case -1:
                if (j) {
                    b = j + "," + k
                } else {
                    b = k
                }
                break;
            default:
                if (!j) {
                    b = k
                } else {
                    var f = j.split(",");
                    for (var e = 0; e < f.length; e++) {
                        if (!f[e].match(k)) {
                            if (b) {
                                b = b + "," + f[e]
                            } else {
                                b = f[e]
                            }
                        } 
                    }
                }
                break
        }
        $("#hidMuncipalityIDs").attr("value", b);
        if (b && $(".MiniSearch").val() == undefined) {
            GetProjects(c, b, housingType(), tenureStatus(), category())
        } else {
            GetProjects(c, "0", housingType(), tenureStatus(), category())
        }
    })
}
function GetCountyMunicipalitys(b, c, a) {
    RBExtern.WebHandlers.HandleSearchSlides.GetMunicipality(b, c, a, SucceededMuniCallback, FailedGCMCallback)
}
function SucceededMuniCallback(e) {
    var d = $(".multiSelectOptions");
    var g = e.split("|");
    var a = 0;
    var h = function () {
        var n = "0";
        var o = "0";
        var p = "";
        if ($(".ObjApartment input")[0].checked) {
            n = "1"
        }
        if ($(".ObjHouse input")[0].checked) {
            o = "2"
        }
        p = n + "," + o;
        return p
    };
    var m = function () {
        var n = "0";
        var q = "0";
        var p = "";
        try {
            if ($(".TenureStatus input")[0].checked) {
                n = "1"
            }
            if ($(".TenureStatus input")[1].checked) {
                q = "2"
            }
        } catch (o) { }

        p = n + "," + q;
        return p
    };
    var f = function () {
        var n = "1";
        if ($(".ObjBonum input")[0].checked) {
            n = "2"
        }
        return n
    };
    var j = function (o) {
        var n = "";
        var p = "";
        for (var q = 0; q < o.length; q++) {
            p = o[q];
            if (n) {
                n = n + "," + p.split(",")[0]
            } else {
                n = p.split(",")[0]
            }
        }
        return n
    };
    switch ($(".MultiCounty").val()) {
        case "BigCityS":
            for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                var c = $(".MultiCounty")[0].options[iOpt].text;
                var b = /stockholm/i;
                if (!(c.search(b) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityS")) {
                    var l = $(".MultiCounty")[0].options[iOpt].value;
                    GetProjects(parseInt(l), j(g), h(), m(), f())
                }
            }
            break;
        case "BigCityG":
            for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                var c = $(".MultiCounty")[0].options[iOpt].text;
                var b = /götaland/i;
                if (!(c.search(b) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityG")) {
                    var l = $(".MultiCounty")[0].options[iOpt].value;
                    GetProjects(parseInt(l), j(g), h(), m(), f())
                }
            }
            break;
        case "BigCityM":
            for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                var c = $(".MultiCounty")[0].options[iOpt].text;
                var b = /skåne/i;
                if (!(c.search(b) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityM")) {
                    var l = $(".MultiCounty")[0].options[iOpt].value;
                    GetProjects(parseInt(l), j(g), h(), m(), f())
                }
            }
            break;
        default:
            var k = parseInt($(".MultiCounty").val());
            GetProjects(k, "0", h(), m(), f());
            break
    }
    CreateMunicipalityDropDown(g)
}
function GetMunicipalityID(a) {
    switch (a) {
        case "BigCityS":
            for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                var d = $(".MultiCounty")[0].options[iOpt].text;
                var b = /stockholm/i;
                if (!(d.search(b) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityS")) {
                    var c = $(".MultiCounty")[0].options[iOpt].value;
                    return parseInt(c);
                    break
                }
            }
            break;
        case "BigCityG":
            for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                var d = $(".MultiCounty")[0].options[iOpt].text;
                var b = /götaland/i;
                if (!(d.search(b) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityG")) {
                    var c = $(".MultiCounty")[0].options[iOpt].value;
                    return parseInt(c);
                    break
                }
            }
            break;
        case "BigCityM":
            for (iOpt = 1; iOpt < $(".MultiCounty")[0].options.length; iOpt++) {
                var d = $(".MultiCounty")[0].options[iOpt].text;
                var b = /skåne/i;
                if (!(d.search(b) == -1) && !($(".MultiCounty")[0].options[iOpt].value == "BigCityM")) {
                    var c = $(".MultiCounty")[0].options[iOpt].value;
                    return parseInt(c);
                    break
                }
            }
            break;
        default:
            return parseInt($(".MultiCounty").val());
            break
    }
}
function GetAllMunicipalitys() {
    RBExtern.WebHandlers.HandleSearchSlides.GetAllMunicipalities(SucceededAMCallback, FailedAMCallback)
}
function SucceededAMCallback(b, c) {
    var a = b.split("|");
    CreateMunicipalityDropDown(a)
}
function GetSearchResult(c, b, a, d) {
    if (c == -1) {
        c = $(".HidProjectIDs").val()
    }
    RBExtern.WebHandlers.HandleSearchSlides.GetSearchResult(c, b, a, d, SucceededObjCallback, FailedGSRCallback)
}
function SucceededObjCallback(b, d) {
    //Om b är NullOrEmpty returnerar vi så koden inte kraschar
    if (!b)
        return;
    var g = b.split(';');
    var c = document.getElementById("objResult");
    c.innerHTML = g[0];
    var f = document.getElementById("projResult");
    f.innerHTML = g[1];
    $(".HidResObj").attr("value", g[0]);
    $(".HidResProj").attr("value", g[1]);

    if (countyIsClicked) {
        $(".multiSelect")[0].disabled = false
    } else {
        $(".multiSelect")[0].disabled = true
    }
    if (fromCookie) {
        location.hash = "";
        fromCookie = false
    }
}
function GetProjects(d, c, e, a, b) {
    ShowAjaxLoadIfProjectsAreNotCached();
    RBExtern.WebHandlers.HandleSearchSlides.GetProjects(d, c, e, a, b, readyToMoveIn(), SucceededProjCallback, FailedGPCallback)
}
function SucceededProjCallback(j, g) {
    if ($(".MiniSearch").val() == undefined) {
        var b = new Array(8);
        var f = "";
        var d = document.getElementById("projResult");
        var e = function () {
            var k = new Array(3);
            $(".ChkProperties input").each(function (l) {
                k[l] = this.checked ? "1" : "0"
            });
            return k
        };
        var a = function () {
            var k = 0;
            if ($(".ChkProjObjStatus input")[0].checked) {
                k = 1
            }
            return k
        };
        b[0] = $("#priceSlide").slider("values", 0).toString();
        b[1] = $("#priceSlide").slider("values", 1).toString();
        b[2] = $("#roomSlide").slider("values", 0).toString();
        b[3] = $("#roomSlide").slider("values", 1).toString();
        b[4] = $("#areaSlide").slider("values", 0).toString();
        b[5] = $("#areaSlide").slider("values", 1).toString();
        b[6] = $("#feeSlide").slider("values", 0).toString();
        b[7] = $("#feeSlide").slider("values", 1).toString();
        f = j.split("|");
        d.innerHTML = f.length;
        $(".HidResProj").attr("value", f.length);
        $(".HidProjectIDs").attr("value", j);
        if (j) {
            GetSearchResult(j, b, e(), a())
        } else {
            var c = document.getElementById("objResult");
            c.innerHTML = "0";
            d.innerHTML = "0";
            $(".HidResObj").attr("value", "");
            $(".HidResProj").attr("value", "")
        }
    } else {
        if (countyIsClicked) {
            $(".multiSelect")[0].disabled = false
        } else {
            $(".multiSelect")[0].disabled = true
        }
    }
    if ($(".MultiCounty").val() == "0") {
        var h = setTimeout("$('.multiSelect')[0].disabled = true", 600)
    } else {
        var h = setTimeout("$('.multiSelect')[0].disabled = false", 600)
    }

}
function FailedGCMCallback(a) { }

function FailedGSRCallback(a) {
    alert("fel: " + a.message); }

function FailedGPCallback(a) { }

function FailedAMCallback(a) { }

$(document).ready(function () {
    $(".MiniSearch .MultiMunicipality").multiSelect({
        oneOrMoreSelected: "*",
        selectAll: true,
        selectAllText: "Alla kommuner",
        // unescape("%E4") producerar "ä". Work-around för Jira-ärende IT-232
        noneSelected: "V" + unescape("%E4") + "lj kommun"
    }, function (f) {
        var b = "";
        var c = GetMunicipalityID($(".MultiCounty").val());
        var g = $("#hidMuncipalityIDs").val();
        var h = $(f).val();
        var j = g.search(h);
        if (h == "0") {
            if (f.parent().hasClass("checked")) {
                f.parent().siblings().each(function (k) {
                    this.className = "";
                    $(this).children()[0].checked = false;
                    g = ""
                })
            } else {
                if (f[0].checked) {
                    f.parent().siblings().each(function (k) {
                        this.className = "";
                        $(this).children()[0].checked = false
                    });
                    if (!f.parent().hasClass("checked")) {
                        f.parent().addClass("checked")
                    }
                } else {
                    alert("kolla upp")
                }
            }
        } else {
            $(".multiSelectOptions").find("input:checkbox").each(function (k, l) {
                if (k == "0" && l.value == "0") {
                    l.checked = false;
                    l.parentNode.className = ""
                }
            });
            var d = false;
            $(".multiSelectOptions").find("input:checkbox").each(function (k, l) {
                if (l.checked) {
                    d = true
                }
            });
            if (!d) {
                $(".multiSelectOptions").find("input:checkbox.selectAll").val("0").trigger("click");
                $(".multiSelectOptions").find("input:checkbox.selectAll").val("0").parent().addClass("checked")
            }
        }
        switch (j) {
            case -1:
                if (g) {
                    b = g + "," + h
                } else {
                    b = h
                }
                break;
            default:
                var e = g.split(",");
                var a = 0;
                for (y in e) {
                    if (!e[a].match(h)) {
                        if (b) {
                            b = b + "," + e[a]
                        } else {
                            b = e[a]
                        }
                    } else {
                        if (b) {
                            b = b + "," + e[a]
                        } else {
                            b = e[a]
                        }
                    }
                    a++
                }
                break
        }
        $("#hidMuncipalityIDs").attr("value", b)
    });
    $(".MiniSearch .SearchButton").click(function () {
        if ($.cookie("housesearchsettings")) {
            $.cookie("housesearchsettings", null)
        }
        setMiniSearchCookie()
    })
});
function setMiniSearchCookie() {
    if ($("#hidMuncipalityIDs").val() == "") {
        $("#hidMuncipalityIDs").val("0")
    } else {
        if ($(".MultiCounty").val() == "0") {
            $("#hidMuncipalityIDs").val("0")
        }
    }
    $.cookie("housesearchsettings", "county|" + $(".MultiCounty").val() + ";muncipalityIDs|" + $("#hidMuncipalityIDs").val() + ";housingType|" + housingType() + ";category|" + category() + ";price|" + [0, 8000000] + ",0%,100%;rooms|" + [1, 5] + ",0%,100%;area|" + [0, 200] + ",0%,100%;fee|" + [0, 10000] + ",0%,100%;properties|" + ["0", "0", "0"] + ";tenureStatus|1,2;readyToMoveIn|0")
};

function ShowAjaxLoadIfProjectsAreNotCached() {
    $.ajax({
        url: "/WebHandlers/HandleSearchSlides.asmx/IsAllProjectsCached",
        type: "post",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        async: false,
        success: function (data) {
            if (!data.d) {
                $('#objResult').html('<img width="21" src="/Templates/Public/Images/ajaxLoad.gif" alt="söker..." />');
                $('#projResult').html('<img width="21" src="/Templates/Public/Images/ajaxLoad.gif" alt="söker..." />');
            }
        }
    });
}