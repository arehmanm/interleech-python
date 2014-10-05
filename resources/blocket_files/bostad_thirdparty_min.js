/*!** Begin TMP_BUILDbostad_thirdparty_all.js package ***/
/*!** Begin file: jquery.nouislider.min.js ***/
/*

$.Link (part of noUiSlider) - WTFPL */
(function(c){function m(a,c,d){if((a[c]||a[d])&&a[c]===a[d])throw Error("(Link) '"+c+"' can't match '"+d+"'.'");}function r(a){void 0===a&&(a={});if("object"!==typeof a)throw Error("(Format) 'format' option must be an object.");var h={};c(u).each(function(c,n){if(void 0===a[n])h[n]=A[c];else if(typeof a[n]===typeof A[c]){if("decimals"===n&&(0>a[n]||7<a[n]))throw Error("(Format) 'format.decimals' option must be between 0 and 7.");h[n]=a[n]}else throw Error("(Format) 'format."+n+"' must be a "+typeof A[c]+
".");});m(h,"mark","thousand");m(h,"prefix","negative");m(h,"prefix","negativeBefore");this.r=h}function k(a,h){"object"!==typeof a&&c.error("(Link) Initialize with an object.");return new k.prototype.p(a.target||function(){},a.method,a.format||{},h)}var u="decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "),A=[2,".","","","",function(a){return a},function(a){return a},"-","",function(a){return a},function(a){return a}];r.prototype.a=function(a){return this.r[a]};
r.prototype.L=function(a){function c(a){return a.split("").reverse().join("")}a=this.a("encoder")(a);var d=this.a("decimals"),n="",k="",m="",r="";0===parseFloat(a.toFixed(d))&&(a="0");0>a&&(n=this.a("negative"),k=this.a("negativeBefore"));a=Math.abs(a).toFixed(d).toString();a=a.split(".");this.a("thousand")?(m=c(a[0]).match(/.{1,3}/g),m=c(m.join(c(this.a("thousand"))))):m=a[0];this.a("mark")&&1<a.length&&(r=this.a("mark")+a[1]);return this.a("to")(k+this.a("prefix")+n+m+r+this.a("postfix"))};r.prototype.w=
function(a){function c(a){return a.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g,"\\$&")}var d;if(null===a||void 0===a)return!1;a=this.a("from")(a);a=a.toString();d=a.replace(RegExp("^"+c(this.a("negativeBefore"))),"");a!==d?(a=d,d="-"):d="";a=a.replace(RegExp("^"+c(this.a("prefix"))),"");this.a("negative")&&(d="",a=a.replace(RegExp("^"+c(this.a("negative"))),"-"));a=a.replace(RegExp(c(this.a("postfix"))+"$"),"").replace(RegExp(c(this.a("thousand")),"g"),"").replace(this.a("mark"),".");a=this.a("decoder")(parseFloat(d+
a));return isNaN(a)?!1:a};k.prototype.K=function(a,h){this.method=h||"html";this.j=c(a.replace("-tooltip-","")||"<div/>")[0]};k.prototype.H=function(a){this.method="val";this.j=document.createElement("input");this.j.name=a;this.j.type="hidden"};k.prototype.G=function(a){function h(a,c){return[c?null:a,c?a:null]}var d=this;this.method="val";this.target=a.on("change",function(a){d.B.val(h(c(a.target).val(),d.t),{link:d,set:!0})})};k.prototype.p=function(a,h,d,k){this.g=d;this.update=!k;if("string"===
typeof a&&0===a.indexOf("-tooltip-"))this.K(a,h);else if("string"===typeof a&&0!==a.indexOf("-"))this.H(a);else if("function"===typeof a)this.target=!1,this.method=a;else{if(a instanceof c||c.zepto&&c.zepto.isZ(a)){if(!h){if(a.is("input, select, textarea")){this.G(a);return}h="html"}if("function"===typeof h||"string"===typeof h&&a[h]){this.method=h;this.target=a;return}}throw new RangeError("(Link) Invalid Link.");}};k.prototype.write=function(a,c,d,k){if(!this.update||!1!==k)if(this.u=a,this.F=a=
this.format(a),"function"===typeof this.method)this.method.call(this.target[0]||d[0],a,c,d);else this.target[this.method](a,c,d)};k.prototype.q=function(a){this.g=new r(c.extend({},a,this.g instanceof r?this.g.r:this.g))};k.prototype.J=function(a){this.B=a};k.prototype.I=function(a){this.t=a};k.prototype.format=function(a){return this.g.L(a)};k.prototype.A=function(a){return this.g.w(a)};k.prototype.p.prototype=k.prototype;c.Link=k})(window.jQuery||window.Zepto);/*

$.fn.noUiSlider - WTFPL - refreshless.com/nouislider/ */
(function(c){function m(e){return"number"===typeof e&&!isNaN(e)&&isFinite(e)}function r(e){return c.isArray(e)?e:[e]}function k(e,b){e.addClass(b);setTimeout(function(){e.removeClass(b)},300)}function u(e,b){return 100*b/(e[1]-e[0])}function A(e,b){if(b>=e.d.slice(-1)[0])return 100;for(var a=1,c,f,d;b>=e.d[a];)a++;c=e.d[a-1];f=e.d[a];d=e.c[a-1];c=[c,f];return d+u(c,0>c[0]?b+Math.abs(c[0]):b-c[0])/(100/(e.c[a]-d))}function a(e,b){if(100<=b)return e.d.slice(-1)[0];for(var a=1,c,f,d;b>=e.c[a];)a++;c=
e.d[a-1];f=e.d[a];d=e.c[a-1];c=[c,f];return 100/(e.c[a]-d)*(b-d)*(c[1]-c[0])/100+c[0]}function h(a,b){for(var c=1,g;(a.dir?100-b:b)>=a.c[c];)c++;if(a.m)return g=a.c[c-1],c=a.c[c],b-g>(c-g)/2?c:g;a.h[c-1]?(g=a.h[c-1],c=a.c[c-1]+Math.round((b-a.c[c-1])/g)*g):c=b;return c}function d(a,b){if(!m(b))throw Error("noUiSlider: 'step' is not numeric.");a.h[0]=b}function n(a,b){if("object"!==typeof b||c.isArray(b))throw Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
c.each(b,function(b,g){var d;"number"===typeof g&&(g=[g]);if(!c.isArray(g))throw Error("noUiSlider: 'range' contains invalid value.");d="min"===b?0:"max"===b?100:parseFloat(b);if(!m(d)||!m(g[0]))throw Error("noUiSlider: 'range' value isn't numeric.");a.c.push(d);a.d.push(g[0]);d?a.h.push(isNaN(g[1])?!1:g[1]):isNaN(g[1])||(a.h[0]=g[1])});c.each(a.h,function(b,c){if(!c)return!0;a.h[b]=u([a.d[b],a.d[b+1]],c)/(100/(a.c[b+1]-a.c[b]))})}function E(a,b){"number"===typeof b&&(b=[b]);if(!c.isArray(b)||!b.length||
2<b.length)throw Error("noUiSlider: 'start' option is incorrect.");a.b=b.length;a.start=b}function I(a,b){a.m=b;if("boolean"!==typeof b)throw Error("noUiSlider: 'snap' option must be a boolean.");}function J(a,b){if("lower"===b&&1===a.b)a.i=1;else if("upper"===b&&1===a.b)a.i=2;else if(!0===b&&2===a.b)a.i=3;else if(!1===b)a.i=0;else throw Error("noUiSlider: 'connect' option doesn't match handle count.");}function D(a,b){switch(b){case "horizontal":a.k=0;break;case "vertical":a.k=1;break;default:throw Error("noUiSlider: 'orientation' option is invalid.");
}}function K(a,b){if(2<a.c.length)throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");a.margin=u(a.d,b);if(!m(b))throw Error("noUiSlider: 'margin' option must be numeric.");}function L(a,b){switch(b){case "ltr":a.dir=0;break;case "rtl":a.dir=1;a.i=[0,2,1,3][a.i];break;default:throw Error("noUiSlider: 'direction' option was not recognized.");}}function M(a,b){if("string"!==typeof b)throw Error("noUiSlider: 'behaviour' must be a string containing options.");var c=0<=b.indexOf("snap");
a.n={s:0<=b.indexOf("tap")||c,extend:0<=b.indexOf("extend"),v:0<=b.indexOf("drag"),fixed:0<=b.indexOf("fixed"),m:c}}function N(a,b,d){a.o=[b.lower,b.upper];a.g=b.format;c.each(a.o,function(a,e){if(!c.isArray(e))throw Error("noUiSlider: 'serialization."+(a?"upper":"lower")+"' must be an array.");c.each(e,function(){if(!(this instanceof c.Link))throw Error("noUiSlider: 'serialization."+(a?"upper":"lower")+"' can only contain Link instances.");this.I(a);this.J(d);this.q(b.format)})});a.dir&&1<a.b&&a.o.reverse()}
function O(a,b){var f={c:[],d:[],h:[!1],margin:0},g;g={step:{e:!1,f:d},start:{e:!0,f:E},connect:{e:!0,f:J},direction:{e:!0,f:L},range:{e:!0,f:n},snap:{e:!1,f:I},orientation:{e:!1,f:D},margin:{e:!1,f:K},behaviour:{e:!0,f:M},serialization:{e:!0,f:N}};a=c.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},a);a.serialization=c.extend({lower:[],upper:[],format:{}},a.serialization);c.each(g,function(c,d){if(void 0===a[c]){if(d.e)throw Error("noUiSlider: '"+c+"' is required.");
return!0}d.f(f,a[c],b)});f.style=f.k?"top":"left";return f}function P(a,b){var d=c("<div><div/></div>").addClass(f[2]),g=["-lower","-upper"];a.dir&&g.reverse();d.children().addClass(f[3]+" "+f[3]+g[b]);return d}function Q(a,b){b.j&&(b=new c.Link({target:c(b.j).clone().appendTo(a),method:b.method,format:b.g},!0));return b}function R(a,b){var d,f=[];for(d=0;d<a.b;d++){var k=f,h=d,m=a.o[d],n=b[d].children(),r=a.g,s=void 0,v=[],s=new c.Link({},!0);s.q(r);v.push(s);for(s=0;s<m.length;s++)v.push(Q(n,m[s]));
k[h]=v}return f}function S(a,b,c){switch(a){case 1:b.addClass(f[7]);c[0].addClass(f[6]);break;case 3:c[1].addClass(f[6]);case 2:c[0].addClass(f[7]);case 0:b.addClass(f[6])}}function T(a,b){var c,d=[];for(c=0;c<a.b;c++)d.push(P(a,c).appendTo(b));return d}function U(a,b){b.addClass([f[0],f[8+a.dir],f[4+a.k]].join(" "));return c("<div/>").appendTo(b).addClass(f[1])}function V(d,b,m){function g(){return t[["width","height"][b.k]]()}function n(a){var b,c=[q.val()];for(b=0;b<a.length;b++)q.trigger(a[b],
c)}function u(d,p,e){var g=d[0]!==l[0][0]?1:0,H=x[0]+b.margin,k=x[1]-b.margin;e&&1<l.length&&(p=g?Math.max(p,H):Math.min(p,k));100>p&&(p=h(b,p));p=Math.max(Math.min(parseFloat(p.toFixed(7)),100),0);if(p===x[g])return 1===l.length?!1:p===H||p===k?0:!1;d.css(b.style,p+"%");d.is(":first-child")&&d.toggleClass(f[17],50<p);x[g]=p;b.dir&&(p=100-p);c(y[g]).each(function(){this.write(a(b,p),d.children(),q)});return!0}function B(a,b,c){c||k(q,f[14]);u(a,b,!1);n(["slide","set","change"])}function w(a,c,d,e){a=
a.replace(/\s/g,".nui ")+".nui";c.on(a,function(a){var c=q.attr("disabled");if(q.hasClass(f[14])||void 0!==c&&null!==c)return!1;a.preventDefault();var c=0===a.type.indexOf("touch"),p=0===a.type.indexOf("mouse"),F=0===a.type.indexOf("pointer"),g,k,l=a;0===a.type.indexOf("MSPointer")&&(F=!0);a.originalEvent&&(a=a.originalEvent);c&&(g=a.changedTouches[0].pageX,k=a.changedTouches[0].pageY);if(p||F)F||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=
document.documentElement.scrollTop),g=a.clientX+window.pageXOffset,k=a.clientY+window.pageYOffset;l.C=[g,k];l.cursor=p;a=l;a.l=a.C[b.k];d(a,e)})}function C(a,c){var b=c.b||l,d,e=!1,e=100*(a.l-c.start)/g(),f=b[0][0]!==l[0][0]?1:0;var k=c.D;d=e+k[0];e+=k[1];1<b.length?(0>d&&(e+=Math.abs(d)),100<e&&(d-=e-100),d=[Math.max(Math.min(d,100),0),Math.max(Math.min(e,100),0)]):d=[d,e];e=u(b[0],d[f],1===b.length);1<b.length&&(e=u(b[1],d[f?0:1],!1)||e);e&&n(["slide"])}function s(a){c("."+f[15]).removeClass(f[15]);
a.cursor&&c("body").css("cursor","").off(".nui");G.off(".nui");q.removeClass(f[12]);n(["set","change"])}function v(a,b){1===b.b.length&&b.b[0].children().addClass(f[15]);a.stopPropagation();w(z.move,G,C,{start:a.l,b:b.b,D:[x[0],x[l.length-1]]});w(z.end,G,s,null);a.cursor&&(c("body").css("cursor",c(a.target).css("cursor")),1<l.length&&q.addClass(f[12]),c("body").on("selectstart.nui",!1))}function D(a){var d=a.l,e=0;a.stopPropagation();c.each(l,function(){e+=this.offset()[b.style]});e=d<e/2||1===l.length?
0:1;d-=t.offset()[b.style];d=100*d/g();B(l[e],d,b.n.m);b.n.m&&v(a,{b:[l[e]]})}function E(a){var c=(a=a.l<t.offset()[b.style])?0:100;a=a?0:l.length-1;B(l[a],c,!1)}var q=c(d),x=[-1,-1],t,y,l;if(q.hasClass(f[0]))throw Error("Slider was already initialized.");t=U(b,q);l=T(b,t);y=R(b,l);S(b.i,q,l);(function(a){var b;if(!a.fixed)for(b=0;b<l.length;b++)w(z.start,l[b].children(),v,{b:[l[b]]});a.s&&w(z.start,t,D,{b:l});a.extend&&(q.addClass(f[16]),a.s&&w(z.start,q,E,{b:l}));a.v&&(b=t.find("."+f[7]).addClass(f[10]),
a.fixed&&(b=b.add(t.children().not(b).children())),w(z.start,b,v,{b:l}))})(b.n);d.vSet=function(){var a=Array.prototype.slice.call(arguments,0),d,e,g,h,m,s,t=r(a[0]);"object"===typeof a[1]?(d=a[1].set,e=a[1].link,g=a[1].update,h=a[1].animate):!0===a[1]&&(d=!0);b.dir&&1<b.b&&t.reverse();h&&k(q,f[14]);a=1<l.length?3:1;1===t.length&&(a=1);for(m=0;m<a;m++)h=e||y[m%2][0],h=h.A(t[m%2]),!1!==h&&(h=A(b,h),b.dir&&(h=100-h),!0!==u(l[m%2],h,!0)&&c(y[m%2]).each(function(a){if(!a)return s=this.u,!0;this.write(s,
l[m%2].children(),q,g)}));!0===d&&n(["set"]);return this};d.vGet=function(){var a,c=[];for(a=0;a<b.b;a++)c[a]=y[a][0].F;return 1===c.length?c[0]:b.dir?c.reverse():c};d.destroy=function(){c.each(y,function(){c.each(this,function(){this.target&&this.target.off(".nui")})});c(this).off(".nui").removeClass(f.join(" ")).empty();return m};q.val(b.start)}function W(a){if(!this.length)throw Error("noUiSlider: Can't initialize slider on empty selection.");var b=O(a,this);return this.each(function(){V(this,
b,a)})}function X(a){return this.each(function(){var b=c(this).val(),d=this.destroy(),f=c.extend({},d,a);c(this).noUiSlider(f);d.start===f.start&&c(this).val(b)})}function B(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var G=c(document),C=c.fn.val,z=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",
end:"mouseup touchend"},f="noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");c.fn.val=function(){var a=arguments,b=c(this[0]);return arguments.length?this.each(function(){(c(this).hasClass(f[0])?B:C).apply(c(this),a)}):(b.hasClass(f[0])?B:C).call(b)};c.noUiSlider={Link:c.Link};c.fn.noUiSlider=function(a,b){return(b?X:W).call(this,
a)}})(window.jQuery||window.Zepto);
/*!** End file: jquery.nouislider.min.js ***/
/*!** Begin file: jquery.placeholder.js ***/
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(window, document, $) {

	// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (err) {}
	}

}(this, document, jQuery));/*!** End file: jquery.placeholder.js ***/
/*!** Begin file: spin.js ***/
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {

  $.fn.spin = function(opts, color) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        opts = $.extend(
          { color: color || $this.css('color') },
          $.fn.spin.presets[opts] || opts
        )
        data.spinner = new Spinner(opts).spin(this)
      }
    })
  }

  $.fn.spin.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  }

}));/*!** End file: spin.js ***/
/*!** Begin file: blazy.js ***/
/*!
  hey, [be]Lazy.js - v1.2.0 - 2014.02.15 
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
;(function(bLazyJS) {
	if (typeof define === 'function' && define.amd) {
        	// Register bLazy as an AMD module
        	define(bLazyJS);
	} else {
        	// Register bLazy on window
        	window.Blazy = bLazyJS();
	}
})(function () {
	'use strict';
	
	//vars
	var source, options, winWidth, winHeight, images, count, isRetina, destroyed;
	//throttle vars
	var validateT, saveWinOffsetT;
	
	// constructor
	function Blazy(settings) {
		//IE7- fallback for missing querySelectorAll support
		if (!document.querySelectorAll) {
			var s=document.createStyleSheet();
			document.querySelectorAll = function(r, c, i, j, a) {
				a=document.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
				for (i=r.length; i--;) {
					s.addRule(r[i], 'k:v');
					for (j=a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
						s.removeRule(0);
				}
				return c;
			};
		}
		//init vars
		destroyed 		= true;
		images 			= [];
		//options
		options 		= settings 		|| {};
		options.error	 	= options.error 	|| false;
		options.offset		= options.offset 	|| 100;
		options.success		= options.success 	|| false;
	  	options.selector 	= options.selector 	|| '.b-lazy';
		options.separator 	= options.separator 	|| '|';
		options.container	= options.container 	?  document.querySelectorAll(options.container) : false;
		options.errorClass 	= options.errorClass 	|| 'b-error';
		options.breakpoints	= options.breakpoints	|| false;
		options.successClass 	= options.successClass 	|| 'b-loaded';
		options.src = source 	= options.src		|| 'data-src';
		isRetina		= window.devicePixelRatio > 1;
		//throttle, ensures that we don't call the functions too often
		validateT		= throttle(validate, 25); 
		saveWinOffsetT		= throttle(saveWinOffset, 50);

		saveWinOffset();		
		//handle multi-served image src
		each(options.breakpoints, function(object){
			if(object.width >= window.screen.width) {
				source = object.src;
				return false;
			}
		});
		
		// start lazy load
		initialize();	
  	}
	
	/* public functions
	************************************/
	Blazy.prototype.revalidate = function() {
 		initialize();
   	};
	Blazy.prototype.load = function(element){
		if(!isElementLoaded(element)) loadImage(element);
	};
	Blazy.prototype.destroy = function(){
		if(options.container){
			each(options.container, function(object){
				unbindEvent(object, 'scroll', validateT);
			});
		}
		unbindEvent(window, 'scroll', validateT);
		unbindEvent(window, 'resize', validateT);
		unbindEvent(window, 'resize', saveWinOffsetT);
		count = 0;
		images.length = 0;
		destroyed = true;
	};
	
	/* private helper functions
	************************************/
	function initialize(){
		// First we create an array of images to lazy load
		createImageArray(options.selector);
		// Then we bind resize and scroll events if not already binded
		if(destroyed) {
			destroyed = false;
			if(options.container) {
	 			each(options.container, function(object){
	 				bindEvent(object, 'scroll', validateT);
	 			});
	 		}
	 		bindEvent(window, 'scroll', validateT);
	 		bindEvent(window, 'resize', validateT);
	 		bindEvent(window, 'resize', saveWinOffsetT);
		}
		// And finally, we start to lazy load. Should bLazy ensure domready?
		validate();	
	}
	
	function validate() {
		for(var i = 0; i<count; i++){
			var image = images[i];
 			if(elementInView(image) || isElementLoaded(image)) {
				Blazy.prototype.load(image);
 				images.splice(i, 1);
 				count--;
 				i--;
 			} 
 		}
		if(count === 0) {
			Blazy.prototype.destroy();
		}
	}
	
	function loadImage(ele){
		// if element is visible
		if(ele.offsetWidth > 0 && ele.offsetHeight > 0) {
			var dataSrc = ele.getAttribute(source) || ele.getAttribute(options.src); // fallback to default data-src
			if(dataSrc) {
				var dataSrcSplitted = dataSrc.split(options.separator);
				var src = dataSrcSplitted[isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
				var img = new Image();
				// cleanup markup, remove data source attributes
				each(options.breakpoints, function(object){
					ele.removeAttribute(object.src);
				});
				ele.removeAttribute(options.src);
				img.onerror = function() {
					if(options.error) options.error(ele, "invalid");
					ele.className = ele.className + ' ' + options.errorClass;
				}; 
				img.onload = function() {
					// Is element an image or should we add the src as a background image?
			      		ele.nodeName.toLowerCase() === 'img' ? ele.src = src : ele.setAttribute('style', 'background-image: url("' + src + '");');	
					ele.className = ele.className + ' ' + options.successClass;	
					if(options.success) options.success(ele);
				};
				img.src = src; //preload image
			} else {
				if(options.error) options.error(ele, "missing");
				ele.className = ele.className + ' ' + options.errorClass;
			}
		}
	 }
			
	function elementInView(ele) {
		var rect = ele.getBoundingClientRect();
		var bottomline = winHeight + options.offset;
		
	    return (
		 // inside horizontal view
		 rect.left >= 0
		 && rect.right <= winWidth + options.offset	 
		 && (
		 // from top to bottom
		 rect.top  >= 0
		 && rect.top  <= bottomline
		 // from bottom to top
		 || rect.bottom <= bottomline
	 	 	&& rect.bottom >= 0 - options.offset
			)
		);
	 }
	 
	 function isElementLoaded(ele) {
		 return (' ' + ele.className + ' ').indexOf(' ' + options.successClass + ' ') !== -1;
	 }
	 
	 function createImageArray(selector) {
 		var nodelist 	= document.querySelectorAll(selector);
 		count 			= nodelist.length;
 		//converting nodelist to array
 		for(var i = count; i--; images.unshift(nodelist[i])){};
	 }
	 
	 function saveWinOffset(){
		 winHeight = window.innerHeight || document.documentElement.clientHeight;
		 winWidth = window.innerWidth || document.documentElement.clientWidth;
	 }
	 
	 function bindEvent(ele, type, fn) {
		 if (ele.attachEvent) {
         		ele.attachEvent && ele.attachEvent('on' + type, fn);
       	 	} else {
         	       ele.addEventListener(type, fn, false);
       		}
	 }
	 
	 function unbindEvent(ele, type, fn) {
		 if (ele.detachEvent) {
         		ele.detachEvent && ele.detachEvent('on' + type, fn);
       	 	} else {
         	       ele.removeEventListener(type, fn, false);
       		}
	 }
	 
	 function each(object, fn){
 		if(object && fn) {
 			var l = object.length;
 			for(var i = 0; i<l && fn(object[i], i) !== false; i++){}
 		}
	 }
	 
	 function throttle(fn, minDelay) {
     		 var lastCall = 0;
		 return function() {
			 var now = +new Date();
         		 if (now - lastCall < minDelay) {
           			 return;
			 }
         		 lastCall = now;
         		 fn.apply(images, arguments);
       		 };
	 }
  	
	 return Blazy;
});/*!** End file: blazy.js ***/
/*!** Begin file: jquery.textfill.js ***/
/**
 * @preserve  textfill
 * @name      jquery.textfill.js
 * @author    Russ Painter
 * @author    Yu-Jie Lin
 * @version   0.4.0
 * @date      2013-08-16
 * @copyright (c) 2012-2013 Yu-Jie Lin
 * @copyright (c) 2009 Russ Painter
 * @license   MIT License
 * @homepage  https://github.com/jquery-textfill/jquery-textfill
 * @example   http://jquery-textfill.github.io/jquery-textfill/index.html
*/
; (function($) {
  /**
  * Resizes an inner element's font so that the inner element completely fills the outer element.
  * @param {Object} Options which are maxFontPixels (default=40), innerTag (default='span')
  * @return All outer elements processed
  */
  $.fn.textfill = function(options) {
    var defaults = {
      debug: false,
      maxFontPixels: 40,
      minFontPixels: 4,
      innerTag: 'span',
      widthOnly: false,
      success: null,          // callback when a resizing is done
      callback: null,         // callback when a resizing is done (deprecated, use success)
      fail: null,             // callback when a resizing is failed
      complete: null,         // callback when all is done
      explicitWidth: null,
      explicitHeight: null
    };
    var Opts = $.extend(defaults, options);

    function _debug() {
      if (!Opts.debug
      ||  typeof console == 'undefined'
      ||  typeof console.debug == 'undefined') {
        return;
      }

      console.debug.apply(console, arguments);
    }

    function _warn() {
      if (typeof console == 'undefined'
      ||  typeof console.warn == 'undefined') {
        return;
      }

      console.warn.apply(console, arguments);
    }

    function _debug_sizing(prefix, ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels) {
      function _m(v1, v2) {
        var marker = ' / ';
        if (v1 > v2) {
          marker = ' > ';
        } else if (v1 == v2) {
          marker = ' = ';
        }
        return marker;
      }

      _debug(
        prefix +
        'font: ' + ourText.css('font-size') +
        ', H: ' + ourText.height() + _m(ourText.height(), maxHeight) + maxHeight +
        ', W: ' + ourText.width()  + _m(ourText.width() , maxWidth)  + maxWidth +
        ', minFontPixels: ' + minFontPixels +
        ', maxFontPixels: ' + maxFontPixels
      );
    }

    function _sizing(prefix, ourText, func, max, maxHeight, maxWidth, minFontPixels, maxFontPixels) {
      _debug_sizing(prefix + ': ', ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels);
      while (minFontPixels < maxFontPixels - 1) {
        var fontSize = Math.floor((minFontPixels + maxFontPixels) / 2)
        ourText.css('font-size', fontSize);
        if (func.call(ourText) <= max) {
          minFontPixels = fontSize;
          if (func.call(ourText) == max) {
            break;
          }
        } else {
          maxFontPixels = fontSize;
        }
        _debug_sizing(prefix + ': ', ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels);
      }
      ourText.css('font-size', maxFontPixels);
      if (func.call(ourText) <= max) {
        minFontPixels = maxFontPixels;
        _debug_sizing(prefix + '* ', ourText, maxHeight, maxWidth, minFontPixels, maxFontPixels);
      }
      return minFontPixels;
    }

    this.each(function() {
      var ourText = $(Opts.innerTag + ':visible:first', this);
      // Use explicit dimensions when specified
      var maxHeight = Opts.explicitHeight || $(this).height();
      var maxWidth = Opts.explicitWidth || $(this).width();
      var oldFontSize = ourText.css('font-size');
      var fontSize;

      _debug('Opts: ', Opts);
      _debug('Vars:' +
        ' maxHeight: ' + maxHeight +
        ', maxWidth: ' + maxWidth
      );

      var minFontPixels = Opts.minFontPixels;
      var maxFontPixels = Opts.maxFontPixels <= 0 ? maxHeight : Opts.maxFontPixels;
      var HfontSize = undefined;
      if (!Opts.widthOnly) {
        HfontSize = _sizing('H', ourText, $.fn.height, maxHeight, maxHeight, maxWidth, minFontPixels, maxFontPixels);
      }
      var WfontSize = _sizing('W', ourText, $.fn.width, maxWidth, maxHeight, maxWidth, minFontPixels, maxFontPixels);

      if (Opts.widthOnly) {
        ourText.css('font-size', WfontSize);
      } else {
        ourText.css('font-size', Math.min(HfontSize, WfontSize));
      }
      _debug('Final: ' + ourText.css('font-size'));

      if (ourText.width()  > maxWidth 
      || (ourText.height() > maxHeight && !Opts.widthOnly)
      ) {
        ourText.css('font-size', oldFontSize);
        if (Opts.fail) {
          Opts.fail(this);
        }
      } else if (Opts.success) {
        Opts.success(this);
      } else if (Opts.callback) {
        _warn('callback is deprecated, use success, instead');
        // call callback on each result
        Opts.callback(this);
      }
    });

    // call complete when all is complete
    if (Opts.complete) Opts.complete(this);

    return this;
  };
})(window.jQuery);/*!** End file: jquery.textfill.js ***/
/*!** Begin file: jquery.xdomainrequest.js ***/
// jQuery.XDomainRequest.js
// Author: Jason Moon - @JSONMOON
// IE8+
;(function($){

if (!$.support.cors && $.ajaxTransport && window.XDomainRequest) {
  var httpRegEx = /^https?:\/\//i;
  var getOrPostRegEx = /^get|post$/i;
  var sameSchemeRegEx = new RegExp('^'+location.protocol, 'i');
  var htmlRegEx = /text\/html/i;
  var jsonRegEx = /\/json/i;
  var xmlRegEx = /\/xml/i;
  
  // ajaxTransport exists in jQuery 1.5+
  $.ajaxTransport('* text html xml json', function(options, userOptions, jqXHR){
    // XDomainRequests must be: asynchronous, GET or POST methods, HTTP or HTTPS protocol, and same scheme as calling page
    if (options.crossDomain && options.async && getOrPostRegEx.test(options.type) && httpRegEx.test(options.url) && sameSchemeRegEx.test(options.url)) {
      var xdr = null;
      var userType = (userOptions.dataType||'').toLowerCase();
      return {
        send: function(headers, complete){
          xdr = new XDomainRequest();
          if (/^\d+$/.test(userOptions.timeout)) {
            xdr.timeout = userOptions.timeout;
          }
          xdr.ontimeout = function(){
            complete(500, 'timeout');
          };
          xdr.onload = function(){
            var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
            var status = {
              code: 200,
              message: 'success'
            };
            var responses = {
              text: xdr.responseText
            };
            try {
              if (userType === 'html' || htmlRegEx.test(xdr.contentType)) {
                responses.html = xdr.responseText;
              } else if (userType === 'json' || (userType !== 'text' && jsonRegEx.test(xdr.contentType))) {
                try {
                  responses.json = $.parseJSON(xdr.responseText);
                } catch(e) {
                  status.code = 500;
                  status.message = 'parseerror';
                  //throw 'Invalid JSON: ' + xdr.responseText;
                }
              } else if (userType === 'xml' || (userType !== 'text' && xmlRegEx.test(xdr.contentType))) {
                var doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = false;
                try {
                  doc.loadXML(xdr.responseText);
                } catch(e) {
                  doc = undefined;
                }
                if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
                  status.code = 500;
                  status.message = 'parseerror';
                  throw 'Invalid XML: ' + xdr.responseText;
                }
                responses.xml = doc;
              }
            } catch(parseMessage) {
              throw parseMessage;
            } finally {
              complete(status.code, status.message, responses, allResponseHeaders);
            }
          };
          // set an empty handler for 'onprogress' so requests don't get aborted
          xdr.onprogress = function(){};
          xdr.onerror = function(){
            complete(500, 'error', {
              text: xdr.responseText
            });
          };
          var postData = '';
          if (userOptions.data) {
            postData = ($.type(userOptions.data) === 'string') ? userOptions.data : $.param(userOptions.data);
          }
          xdr.open(options.type, options.url);
          xdr.send(postData);
        },
        abort: function(){
          if (xdr) {
            xdr.abort();
          }
        }
      };
    }
  });
}

})(jQuery);/*!** End file: jquery.xdomainrequest.js ***/
/*!** Begin file: underscore.js ***/
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.6.0';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };

  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = lookupIterator(predicate);
    var pass = [], fail = [];
    each(obj, function(elem) {
      (predicate.call(context, elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (array == null) return [];
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (iterator) value = iterator.call(context, value, i, array);
      if (isSorted ? (!i || seen !== value) : !_.contains(seen, value)) {
        if (isSorted) seen = value;
        else seen.push(value);
        result.push(array[i]);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function () {
      return value;
    };
  };

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true;
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);
/*!** End file: underscore.js ***/
/*!** Begin file: handlebars-runtime.js ***/
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module3__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module2__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module3__);

// handlebars/exception.js
var __module4__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module1__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module2__, __module4__);

// handlebars/runtime.js
var __module5__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module2__, __module4__, __module1__);

// handlebars.runtime.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module3__, __module4__, __module2__, __module5__);

  return __module0__;
})();/*!** End file: handlebars-runtime.js ***/
/*!** Begin file: inception.js ***/

/*
	Copyright (c) 2010-2012 Filip Moberg, (filip@mcsquare.se)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	Author:		Filip Moberg
	Name:		inception.js
	Version:	1.2.4-6-g5b491b7.71
	Codename:	Awesomenessism
	Released:	2012-09-10 13:26:44 +0200
*/


// Root reference combatibility (for execution in a non browser environment)
(function () {

	if (typeof window === "undefined") {
		window = this;
		var __isBrowser = false;
	} else {
		var __isBrowser = true;
	}
})();


// Sandbox the environment
/** @param {...undefined} undefined */
(function(window, undefined) { 

	// Declare environment variables
	var document = window.document, navigator = window.navigator, location = window.location;


	// Create function in window object
	/** @constructor */
	window.inception = (function inception(oo) {

		var env = this;
		var self = this;
		var core = env.__core__;

		// Make sure core function is instantiated
		if (this === window) {
			return new inception(arguments[0]);
		}

		// Declare core object (with core functions)
		this.__core__ = {

			onload: [],
			instance: arguments[0],

			// Create deep copy of target object
			clone: function() {
				return this.extend({to: {}, from: arguments[0]});
			},
			// Count child objects
			count : function(o) {

				var c = 0, i;

				for (i in o) {
					if (o.hasOwnProperty(o)) {
						++c;
					}
				}

				return c;
			},
			// Error handling
			error: function() {
				var core = env.__core__;

				if (core.settings.error.show === true) {
					throw new Error(arguments[0]);
				}
				return
			},
			// Extend a primary object with a secondary
			extend: function(o) {

				// Make sure the environment is from the global scope.
                                if (env && env.__core__ && window[env.__core__.instance]) {
                                        env = window[env.__core__.instance];
                                }	

				// If set to true, the returned object will be a copy instead of reference
				if (o.clone === true) {
					o.from = this.clone(o.from); 
				}

				for (var n in o.from) {
					if (o.from.hasOwnProperty(n) === false) {
						continue;
					}

					if (o.construct === true && typeof o.from[n] === "function" && n !== "wrapper") {

						// Make a clone so the use of multiple selectors won't construct the same function twice
						o.from = this.clone(o.from);
						var core = env.__core__, node = [core.instance].concat(o.node.replace(/@/g, "").split(".")), wrapper = node[0], cache;
						o.wrapper = [];

						cache = core.wrapper.cache[core.instance];

						if (typeof cache === "function") {
							o.wrapper.push(cache);
						}

						for (var i=1; i < node.length; ++i) {
							wrapper = wrapper + "__" + node[i];
							cache = core.wrapper.cache[wrapper];
							if (typeof cache === "function") {
								o.wrapper.push(cache);
							}
						}

						for (var i=o.wrapper.length; i >= 0; --i) {

							// Construct the function
							o.from[n] = this.functionConstructor({method: o.from[n], func: n, node: o.node, loop: o.loop, wrapper: o.wrapper[i]});
						}

						// onReady executer
						this.onready({method: o.from[n], func: n, node: o.node, loop: o.loop});
					}

					if (typeof o.from[n] === "object" && n !== "selector" && n !== "$") {

						if (typeof o.to[n] === "undefined") {
							if (o.from[n] === null) {
								o.to[n] = null;
							} else if (o.from[n].constructor.toString().indexOf("Array") !== -1) {
								o.to[n] = [];
							} else {
								o.to[n] = {};
							}
						}

						this.extend({to: o.to[n], from: o.from[n], construct: o.construct, node: o.node, loop: o.loop});
					} else {
						o.to[n] = o.from[n];
					}
				}

				return o.to;
			},
			// Construct user function(s)
			functionConstructor: function(o) {

				var self = this;
				var core = env.__core__;

				// Construct function as ordinary
				return function() {

					if (typeof this[o.func] === "function") {

						// Set up selector
						this[o.func].selector = this[o.func].$ = core.selector;

						// Set up selector (for new methods, if the current method is used as a constructor)
						if (this[o.func].prototype) {
							this[o.func].prototype.selector = this[o.func].prototype.$ = core.selector;
						}

						// Set up node
						this[o.func].node = core.clone(core.node);

						// This line is for legacy purposes only (where the selector is called from the global object)
						window[core.instance].$ = window[core.instance].selector = core.selector;
					}

					// Execute user function in correct environment
					if (typeof o.wrapper === "function") {
						var self = this;
						var args = arguments;

						// Execute user function inside wrappers (if available)
						return o.wrapper.call({
							call: function() {

								// Apply method with its parent object as reference
								return o.method.apply(self, args);
							}
						});
					} else {
						// Execute user function as ordinary (if there are no wrappers defined for this object)
						return o.method.apply(this, arguments);
					}
				};
			},
			// Construct user function(s)
			onready: function(o) {

				var self = this;
				var core = env.__core__;

				switch(o.func) {

					// If function is an onReady function and it's the first node selector, load it into jQuery ready - else, load it straight after the window object.
					case "onReady":
						if (o.loop === "0" && typeof o.method !== "undefined") {

							if (typeof window.jQuery === "function") {

								window.jQuery(window[core.settings.jQuery.ready]).ready(function() {

									o.nodeKeys = o.node.split(".");
									o.parentNode = window[self.instance];
									for (var i in o.nodeKeys) {
										if (o.nodeKeys.hasOwnProperty(i) === false) {
											continue;
										}
										
										o.parentNode = o.parentNode[o.nodeKeys[i]];
									}

									// Call method with its parent object as reference
									o.method.call(o.parentNode);
								});

							} else {

								this.onload.push(o.method);

								window.onload = function() {
									for (o in self.onload) {
										if (self.onload.hasOwnProperty(o) === false) {
											continue;
										}
										
										o.nodeKeys = o.node.split(".");
										o.parentNode = window[self.instance];
										for (var i in o.nodeKeys) {
											if (o.nodeKeys.hasOwnProperty(i) === false) {
												continue;
											}
											
											o.parentNode = o.parentNode[o.nodeKeys[i]];
										}

										// Call method with its parent object as reference
										self.onload[o].call(o.parentNode);
									}
								}
							}
						}
						break;
				}
			},
			settings: {
				jQuery: {
					ready: "document"
				},
				error: {
					show: true
				}
			},
			// Create array from node string
			stringToArray: function() {
				return arguments[0].replace(/ /g, "").split("@").slice(1);
			},
			// Create object from node string
			stringToObject: function() {

				var selector = arguments[0].replace(/ /g, "").split("@").slice(1), a = [], s, o, i, node, shell;

				for (s in selector) {
					if (selector.hasOwnProperty(s) === false) {
						continue;
					}
					node = selector[s].split(".");

					if (node[0] !== "") {
						o = {};
						shell = o;

						for (i = 0; i < node.length-1; ++i) {
							o = o[node[i]] = {};
						}

						if (arguments[1]) {
							o = o[node[i]] = arguments[1];
						} else {
							o = o[node[i]] = {};
						}

						a.push(shell);
					}
				}

				return a;
			},
			// Create selector from node string
			stringToSelector: function() {
				var a = [], n = this.stringToArray(arguments[0]), i, x;

				for (i in n) {
					if (n.hasOwnProperty(i) === false) {
						continue;
					}
					var s = n[i].split(".");
					var node = env;

					for (x in s) {
						if (s.hasOwnProperty(x) === false) {
							continue;
						}
						
						if (typeof node[s[x]] !== "undefined") {
							node = node[s[x]];
						}
					}

					if (node !== env) {
						a.push(node);
					}
				}

				return a;
			},
			// Wrapper engine. Used for fetching stored wrappers in runtime.
			wrapper: {
				cache: {
				},

				get: function(o) {
					var wrapper, core = env.__core__, node = [core.instance].concat(o.node.replace(/@/g, "").split(".")), n, i;

					for (i in node) {
						if (node.hasOwnProperty(i) === false) {
							continue;
						}

						if (!n) {
							n = node[i];
						} else {
							n = n + "__" + node[i];
						}
						if (typeof core.wrapper.cache[n] === "function") {
							wrapper = core.wrapper.cache[n];
						}
					}
					return wrapper;
				}
			}
		};

		// Make the global object a reference to the instance function and return it
		/** @constructor */
		return new (window[arguments[0]] = function() {

			var extended, core = env.__core__;

			// Extend core object with instance object internally
			// Declare user functions and variables
			extended = core.extend({to: env, from: {

				// Default node and selector values
				__core__: {
					node: {
						getString: "",
						getArray: []
					},
					selector: []
				},

				// a DOM helper, to easily create new elements through jQuery. This actually is more of a jQuery plugin, but it's often useful - so I included it.
				append: function() {
					var core = env.__core__, o = arguments[0], jQuery = window.jQuery;

					// Faster than jQueries append, but lets you pass through css, bind and attribute objects to jQuery.
					if (typeof window.jQuery === "function") {
						return core.$.each(function() {

							if (o.element) {
								var obj = document.createElement(o.element);
								this.appendChild(obj);
							}

							if (o.css) {
								jQuery(obj).css(o.css);
							}

							if (o.attr) {
								jQuery(obj).attr(o.attr);
							}

							if (o.bind) {
								for (var k in o.bind) {
									if (o.bind.hasOwnProperty(k) === false) {
										continue;
									}
									
									jQuery(obj).bind(k, o.bind[k]);
								}
							}
						});
					}

					return env;
				},
				// Create a new instance and extend with a copy of selected objects
				clone: function() {

					var name = [], arg = arguments[0], i;

					if (arg) {
						name.push(arg);
					} else {
						name = core.node.getArray; 
					}

					for (i in name) {
						if (name.hasOwnProperty(i) === false) {
							continue;
						}
						
						// Create a new instance 
						new inception(name[i]);

						// Extend with core object
						core.extend({to: window[name[i]], from: core.clone(env)});

						// Extend with inner object
						core.extend({to: window[name[i]](), from: core.clone(env)});
					}

					return env;
				},
				// Extend selected node(s) with given object/function
				extend: function() {
					var shell, s = [], node;

					// Error on invalid node selector
					if (typeof core.node.getArray[0] === "undefined") {
						return core.error("inception.js: Trying to extend with invalid node selector.");
					}

					// Error on false input object
					if (typeof arguments[0] === "undefined") {
						return core.error("inception.js: Trying to extend with invalid input object.");
					}

					// Create shell object of selector node(s)
					shell = core.stringToObject(core.node.getString, arguments[0]);

					// Match shell with node array
					node = core.node.getArray;

					// Iterate over shell and extend each node
					for (var i in shell) {
						core.extend({to: this, from: shell[i], construct: true, node: node[i], loop: i});
						s.push(shell[i]);
					}

					// Extend up to the global object
					window[core.instance] = core.extend({to: window[core.instance], from: this});

					// Return inception object
					return env;
				},
				// Used to read and set new environment settings
				settings: function() {
					var core = env.__core__, settings = arguments[0];

					return core.extend({to: core.settings, from: settings});
				},
				// Crate a wrapper that sticks to a specified node, and then wraps the calling function with itself.
				wrap: function() {

					var a, i;

					if (typeof arguments[0] === "function") {

						a = core.node.getString.replace(/\./g, "__").replace(/ /g, "").split("@").slice(1);

						if (a.length === 0) {

							// Set wrapper cache
							core.wrapper.cache[core.instance] = arguments[0];
						}

						for (i in a) {
							if (a.hasOwnProperty(i) === false) {
								continue;
							}
							

							// Set wrapper cache
							core.wrapper.cache[core.instance + "__" + a[i]] = arguments[0];

							// Extend to core object
							core.extend({to: window[core.instance].__core__.wrapper, from: core.wrapper});
						}
					}

					return env;
				}
			}});

			// Extend up to the global object
			window[core.instance] = core.extend({to: window[core.instance], from: extended});

			// Append correct selector
			if (typeof arguments[0] === "string" && arguments[0].indexOf("@") !== -1) {

				// Set selector to an inception selector
				core.$ = core.selector = core.stringToSelector(arguments[0]);

				// Save original selector string
				core.node.getString = arguments[0];
				core.node.getArray = core.stringToArray(arguments[0]);

			} else if (typeof window.jQuery === "function") {

				// Set selector to a jQuery selector (if it's not an inception selector and if jQuery is present)
				core.$ = core.selector = window.jQuery(arguments[0]);
			} else if (arguments[0] && __isBrowser) {

				// Use native javascript CSS selector
				core.$ = core.selector = document.querySelectorAll(arguments[0]);
			} else {

				// Clear all old selectors
				core.node.getString = "";
				core.node.getArray = "";
				core.$ = core.selector = [];
			}
		
			// Return extended core object
			return extended;
		});
	});

})(window);
/*!** End file: inception.js ***/
/*!** Begin file: json2.js ***/
/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());/*!** End file: json2.js ***/
/*!** Begin file: hframecom.compressed.js ***/
function HFrameParent(d,e,b){var a=arguments[2]||100;this.callback=e;if(typeof(d)=="string"){this.frame=document.getElementById(d)}else{if(typeof(d)=="object"){this.frame=d}}this.childUrl=this.frame.src;var c=this;if(window.postMessage){HFrameLib.addDomListener(window,"message",function(f){c.receive.call(c,f)})}else{if(a>0){this.interval=window.setInterval(function(){c.receive.call(c)},a)}}}HFrameParent.prototype.send=function(a){if(window.postMessage){this.frame.contentWindow.postMessage(a,this.childUrl)}else{this.frame.src=this.childUrl+"#"+encodeURIComponent(a)}};HFrameParent.prototype.receive=function(a){var b=HFrameLib.receiveMessage(a);if(b){this.callback(b)}};function HFrameChild(d,b){var a=arguments[1]||100;this.callback=d;var c=this;if(window.postMessage){HFrameLib.addDomListener(window,"message",function(e){c.receive.call(c,e)})}else{if(a>0){this.interval=window.setInterval(function(){c.receive.call(c)},a)}}}HFrameChild.prototype.send=function(a){if(!document.referrer){return}if(window.postMessage){parent.postMessage(a,document.referrer)}else{parent.location=document.referrer+"#"+encodeURIComponent(a)}};HFrameChild.prototype.receive=function(a){var b=HFrameLib.receiveMessage(a);if(b){this.callback(b)}};var HFrameLib={addDomListener:function(c,a,b){if(c.addEventListener){c.addEventListener(a,b,false)}else{if(c.attachEvent){c.attachEvent("on"+a,b)}}},receiveMessage:function(a){var b="";if(a&&a.data){b=a.data}else{if(location.hash===""||location.hash=="#"||location.hash=="#-"){return false}b=decodeURIComponent(location.hash.substring(1));location.hash="#-"}return b}};/*!** End file: hframecom.compressed.js ***/
/*!** Begin file: jquery.cookie.js ***/
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
/*!** End file: jquery.cookie.js ***/
/*!** Begin file: jquery.easing.1.3.js ***/
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
 * Copyright © 2008 George McGinley Smith
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
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
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
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
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
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
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
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!** End file: jquery.easing.1.3.js ***/
/*!** Begin file: ufo.js ***/
/*	Unobtrusive Flash Objects (UFO) v3.22 <http://www.bobbyvandersluis.com/ufo/>
	Copyright 2005-2007 Bobby van der Sluis
	This software is licensed under the CC-GNU LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

var UFO = {
	req: ["movie", "width", "height", "majorversion", "build"],
	opt: ["play", "loop", "menu", "quality", "scale", "salign", "wmode", "bgcolor", "base", "flashvars", "devicefont", "allowscriptaccess", "seamlesstabbing", "allownetworking"],
	optAtt: ["id", "name", "align"],
	optExc: ["swliveconnect"],
	ximovie: "ufo.swf",
	xiwidth: "215",
	xiheight: "138",
	ua: navigator.userAgent.toLowerCase(),
	pluginType: "",
	fv: [0,0],
	foList: [],
		
	create: function(FO, id) {
		if (!UFO.uaHas("w3cdom") || UFO.uaHas("ieMac")) return;
		UFO.getFlashVersion();
		UFO.foList[id] = UFO.updateFO(FO);
		UFO.createCSS("#" + id, "visibility:hidden;");
		UFO.domLoad(id);
	},

	updateFO: function(FO) {
		if (typeof FO.xi != "undefined" && FO.xi == "true") {
			if (typeof FO.ximovie == "undefined") FO.ximovie = UFO.ximovie;
			if (typeof FO.xiwidth == "undefined") FO.xiwidth = UFO.xiwidth;
			if (typeof FO.xiheight == "undefined") FO.xiheight = UFO.xiheight;
		}
		FO.mainCalled = false;
		return FO;
	},

	domLoad: function(id) {
		var _t = setInterval(function() {
			if ((document.getElementsByTagName("body")[0] != null || document.body != null) && document.getElementById(id) != null) {
				UFO.main(id);
				clearInterval(_t);
			}
		}, 250);
		if (typeof document.addEventListener != "undefined") {
			document.addEventListener("DOMContentLoaded", function() { UFO.main(id); clearInterval(_t); } , null); // Gecko, Opera 9+
		}
	},

	main: function(id) {
		var _fo = UFO.foList[id];
		if (_fo.mainCalled) return;
		UFO.foList[id].mainCalled = true;
		document.getElementById(id).style.visibility = "hidden";
		if (UFO.hasRequired(id)) {
			if (UFO.hasFlashVersion(parseInt(_fo.majorversion, 10), parseInt(_fo.build, 10))) {
				if (typeof _fo.setcontainercss != "undefined" && _fo.setcontainercss == "true") UFO.setContainerCSS(id);
				UFO.writeSWF(id);
			}
			else if (_fo.xi == "true" && UFO.hasFlashVersion(6, 65)) {
				UFO.createDialog(id);
			}
		}
		document.getElementById(id).style.visibility = "visible";
	},
	
	createCSS: function(selector, declaration) {
		var _h = document.getElementsByTagName("head")[0]; 
		var _s = UFO.createElement("style");
		if (!UFO.uaHas("ieWin")) _s.appendChild(document.createTextNode(selector + " {" + declaration + "}")); // bugs in IE/Win
		_s.setAttribute("type", "text/css");
		_s.setAttribute("media", "screen"); 
		_h.appendChild(_s);
		if (UFO.uaHas("ieWin") && document.styleSheets && document.styleSheets.length > 0) {
			var _ls = document.styleSheets[document.styleSheets.length - 1];
			if (typeof _ls.addRule == "object") _ls.addRule(selector, declaration);
		}
	},
	
	setContainerCSS: function(id) {
		var _fo = UFO.foList[id];
		var _w = /%/.test(_fo.width) ? "" : "px";
		var _h = /%/.test(_fo.height) ? "" : "px";
		UFO.createCSS("#" + id, "width:" + _fo.width + _w +"; height:" + _fo.height + _h +";");
		if (_fo.width == "100%") {
			UFO.createCSS("body", "margin-left:0; margin-right:0; padding-left:0; padding-right:0;");
		}
		if (_fo.height == "100%") {
			UFO.createCSS("html", "height:100%; overflow:hidden;");
			UFO.createCSS("body", "margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0; height:100%;");
		}
	},

	createElement: function(el) {
		return (UFO.uaHas("xml") && typeof document.createElementNS != "undefined") ?  document.createElementNS("http://www.w3.org/1999/xhtml", el) : document.createElement(el);
	},

	createObjParam: function(el, aName, aValue) {
		var _p = UFO.createElement("param");
		_p.setAttribute("name", aName);	
		_p.setAttribute("value", aValue);
		el.appendChild(_p);
	},

	uaHas: function(ft) {
		var _u = UFO.ua;
		switch(ft) {
			case "w3cdom":
				return (typeof document.getElementById != "undefined" && typeof document.getElementsByTagName != "undefined" && (typeof document.createElement != "undefined" || typeof document.createElementNS != "undefined"));
			case "xml":
				var _m = document.getElementsByTagName("meta");
				var _l = _m.length;
				for (var i = 0; i < _l; i++) {
					if (/content-type/i.test(_m[i].getAttribute("http-equiv")) && /xml/i.test(_m[i].getAttribute("content"))) return true;
				}
				return false;
			case "ieMac":
				return /msie/.test(_u) && !/opera/.test(_u) && /mac/.test(_u);
			case "ieWin":
				return /msie/.test(_u) && !/opera/.test(_u) && /win/.test(_u);
			case "gecko":
				return /gecko/.test(_u) && !/applewebkit/.test(_u);
			case "opera":
				return /opera/.test(_u);
			case "safari":
				return /applewebkit/.test(_u);
			default:
				return false;
		}
	},
	
	getFlashVersion: function() {
		if (UFO.fv[0] != 0) return;  
		if (navigator.plugins && typeof navigator.plugins["Shockwave Flash"] == "object") {
			UFO.pluginType = "npapi";
			var _d = navigator.plugins["Shockwave Flash"].description;
			if (typeof _d != "undefined") {
				_d = _d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				var _m = parseInt(_d.replace(/^(.*)\..*$/, "$1"), 10);
				var _r = /r/.test(_d) ? parseInt(_d.replace(/^.*r(.*)$/, "$1"), 10) : 0;
				UFO.fv = [_m, _r];
			}
		}
		else if (window.ActiveXObject) {
			UFO.pluginType = "ax";
			try { // avoid fp 6 crashes
				var _a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			}
			catch(e) {
				try { 
					var _a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					UFO.fv = [6, 0];
					_a.AllowScriptAccess = "always"; // throws if fp < 6.47 
				}
				catch(e) {
					if (UFO.fv[0] == 6) return;
				}
				try {
					var _a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				}
				catch(e) {}
			}
			if (typeof _a == "object") {
				var _d = _a.GetVariable("$version"); // bugs in fp 6.21/6.23
				if (typeof _d != "undefined") {
					_d = _d.replace(/^\S+\s+(.*)$/, "$1").split(",");
					UFO.fv = [parseInt(_d[0], 10), parseInt(_d[2], 10)];
				}
			}
		}
	},

	hasRequired: function(id) {
		var _l = UFO.req.length;
		for (var i = 0; i < _l; i++) {
			if (typeof UFO.foList[id][UFO.req[i]] == "undefined") return false;
		}
		return true;
	},
	
	hasFlashVersion: function(major, release) {
		return (UFO.fv[0] > major || (UFO.fv[0] == major && UFO.fv[1] >= release)) ? true : false;
	},

	writeSWF: function(id) {
		var _fo = UFO.foList[id];
		var _e = document.getElementById(id);
		if (UFO.pluginType == "npapi") {
			if (UFO.uaHas("gecko") || UFO.uaHas("xml")) {
				while(_e.hasChildNodes()) {
					_e.removeChild(_e.firstChild);
				}
				var _obj = UFO.createElement("object");
				_obj.id = id + "_obj";
				_obj.setAttribute("type", "application/x-shockwave-flash");
				_obj.setAttribute("data", _fo.movie);
				_obj.setAttribute("width", _fo.width);
				_obj.setAttribute("height", _fo.height);
				_obj.setAttribute("bgcolor", "#000000");
				var _l = UFO.optAtt.length;
				for (var i = 0; i < _l; i++) {
					if (typeof _fo[UFO.optAtt[i]] != "undefined") _obj.setAttribute(UFO.optAtt[i], _fo[UFO.optAtt[i]]);
				}
				var _o = UFO.opt.concat(UFO.optExc);
				var _l = _o.length;
				for (var i = 0; i < _l; i++) {
					if (typeof _fo[_o[i]] != "undefined") UFO.createObjParam(_obj, _o[i], _fo[_o[i]]);
				}
				_e.appendChild(_obj);
			}
			else {
				var _emb = "";
				var _o = UFO.opt.concat(UFO.optAtt).concat(UFO.optExc);
				var _l = _o.length;
				for (var i = 0; i < _l; i++) {
					if (typeof _fo[_o[i]] != "undefined") _emb += ' ' + _o[i] + '="' + _fo[_o[i]] + '"';
				}
				_e.innerHTML = '<embed type="application/x-shockwave-flash" src="' + _fo.movie + '" bgcolor="#000000" width="' + _fo.width + '" height="' + _fo.height + '" pluginspage="http://www.macromedia.com/go/getflashplayer"' + _emb + '></embed>';
			}
		}
		else if (UFO.pluginType == "ax") {
			var _objAtt = "";
			var _l = UFO.optAtt.length;
			for (var i = 0; i < _l; i++) {
				if (typeof _fo[UFO.optAtt[i]] != "undefined") _objAtt += ' ' + UFO.optAtt[i] + '="' + _fo[UFO.optAtt[i]] + '"';
			}
			var _objPar = "";
			var _l = UFO.opt.length;
			for (var i = 0; i < _l; i++) {
				if (typeof _fo[UFO.opt[i]] != "undefined") _objPar += '<param name="' + UFO.opt[i] + '" value="' + _fo[UFO.opt[i]] + '" />';
			}
			var _p = window.location.protocol == "https:" ? "https:" : "http:";
			_e.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + _objAtt + ' width="' + _fo.width + '" height="' + _fo.height + '" codebase="' + _p + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + _fo.majorversion + ',0,' + _fo.build + ',0"><param name="BGCOLOR" value="#000000"><param name="movie" value="' + _fo.movie + '" />' + _objPar + '</object>';
		}
	},

	createDialog: function(id) {
		var _fo = UFO.foList[id];
		UFO.createCSS("html", "height:100%; overflow:hidden;");
		UFO.createCSS("body", "height:100%; overflow:hidden;");
		UFO.createCSS("#xi-con", "position:absolute; left:0; top:0; z-index:1000; width:100%; height:100%; background-color:#fff; filter:alpha(opacity:75); opacity:0.75;");
		UFO.createCSS("#xi-dia", "position:absolute; left:50%; top:50%; margin-left: -" + Math.round(parseInt(_fo.xiwidth, 10) / 2) + "px; margin-top: -" + Math.round(parseInt(_fo.xiheight, 10) / 2) + "px; width:" + _fo.xiwidth + "px; height:" + _fo.xiheight + "px;");
		var _b = document.getElementsByTagName("body")[0];
		var _c = UFO.createElement("div");
		_c.setAttribute("id", "xi-con");
		var _d = UFO.createElement("div");
		_d.setAttribute("id", "xi-dia");
		_c.appendChild(_d);
		_b.appendChild(_c);
		var _mmu = window.location;
		if (UFO.uaHas("xml") && UFO.uaHas("safari")) {
			var _mmd = document.getElementsByTagName("title")[0].firstChild.nodeValue = document.getElementsByTagName("title")[0].firstChild.nodeValue.slice(0, 47) + " - Flash Player Installation";
		}
		else {
			var _mmd = document.title = document.title.slice(0, 47) + " - Flash Player Installation";
		}
		var _mmp = UFO.pluginType == "ax" ? "ActiveX" : "PlugIn";
		var _uc = typeof _fo.xiurlcancel != "undefined" ? "&xiUrlCancel=" + _fo.xiurlcancel : "";
		var _uf = typeof _fo.xiurlfailed != "undefined" ? "&xiUrlFailed=" + _fo.xiurlfailed : "";
		UFO.foList["xi-dia"] = { movie:_fo.ximovie, width:_fo.xiwidth, height:_fo.xiheight, majorversion:"6", build:"65", flashvars:"MMredirectURL=" + _mmu + "&MMplayerType=" + _mmp + "&MMdoctitle=" + _mmd + _uc + _uf };
		UFO.writeSWF("xi-dia");
	},

	expressInstallCallback: function() {
		var _b = document.getElementsByTagName("body")[0];
		var _c = document.getElementById("xi-con");
		_b.removeChild(_c);
		UFO.createCSS("body", "height:auto; overflow:auto;");
		UFO.createCSS("html", "height:auto; overflow:auto;");
	},

	cleanupIELeaks: function() {
		var _o = document.getElementsByTagName("object");
		var _l = _o.length
		for (var i = 0; i < _l; i++) {
			_o[i].style.display = "none";
			for (var x in _o[i]) {
				if (typeof _o[i][x] == "function") {
					_o[i][x] = null;
				}
			}
		}
	}

};

if (typeof window.attachEvent != "undefined" && UFO.uaHas("ieWin")) {
	window.attachEvent("onunload", UFO.cleanupIELeaks);
}
/*!** End file: ufo.js ***/
/*!** Begin file: jquery.scrollTo.js ***/
/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @author Ariel Flesler
 * @version 1.4.6
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number, Function} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @desc Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @desc Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */

;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
		limit:true
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			// Null target yields nothing, just like jQuery does
			if (target == null) return;

			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
					if (!targ.length) return;
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( settings.limit && /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, targ, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );/*!** End file: jquery.scrollTo.js ***/
/*!** Begin file: history.adapter.jquery.js ***/
/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

// Closure
(function(window,undefined){
	"use strict";

	// Localise Globals
	var
		History = window.History = window.History||{},
		jQuery = window.jQuery;

	// Check Existence
	if ( typeof History.Adapter !== 'undefined' ) {
		throw new Error('History.js Adapter has already been loaded...');
	}

	// Add the Adapter
	History.Adapter = {
		/**
		 * History.Adapter.bind(el,event,callback)
		 * @param {Element|string} el
		 * @param {string} event - custom and standard events
		 * @param {function} callback
		 * @return {void}
		 */
		bind: function(el,event,callback){
			jQuery(el).bind(event,callback);
		},

		/**
		 * History.Adapter.trigger(el,event)
		 * @param {Element|string} el
		 * @param {string} event - custom and standard events
		 * @param {Object=} extra - a object of extra event data (optional)
		 * @return {void}
		 */
		trigger: function(el,event,extra){
			jQuery(el).trigger(event,extra);
		},

		/**
		 * History.Adapter.extractEventData(key,event,extra)
		 * @param {string} key - key for the event data to extract
		 * @param {string} event - custom and standard events
		 * @param {Object=} extra - a object of extra event data (optional)
		 * @return {mixed}
		 */
		extractEventData: function(key,event,extra){
			// jQuery Native then jQuery Custom
			var result = (event && event.originalEvent && event.originalEvent[key]) || (extra && extra[key]) || undefined;

			// Return
			return result;
		},

		/**
		 * History.Adapter.onDomLoad(callback)
		 * @param {function} callback
		 * @return {void}
		 */
		onDomLoad: function(callback) {
			jQuery(callback);
		}
	};

	// Try and Initialise History
	if ( typeof History.init !== 'undefined' ) {
		History.init();
	}

})(window);
/*!** End file: history.adapter.jquery.js ***/
/*!** Begin file: history.js ***/
/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function(window,undefined){
	"use strict";

	// ========================================================================
	// Initialise

	// Localise Globals
	var
		console = window.console||undefined, // Prevent a JSLint complain
		document = window.document, // Make sure we are using the correct document
		navigator = window.navigator, // Make sure we are using the correct navigator
		sessionStorage = window.sessionStorage||false, // sessionStorage
		setTimeout = window.setTimeout,
		clearTimeout = window.clearTimeout,
		setInterval = window.setInterval,
		clearInterval = window.clearInterval,
		JSON = window.JSON,
		alert = window.alert,
		History = window.History = window.History||{}, // Public History Object
		history = window.history; // Old History Object

	try {
		sessionStorage.setItem('TEST', '1');
		sessionStorage.removeItem('TEST');
	} catch(e) {
		sessionStorage = false;
	}

	// MooTools Compatibility
	JSON.stringify = JSON.stringify||JSON.encode;
	JSON.parse = JSON.parse||JSON.decode;

	// Check Existence
	if ( typeof History.init !== 'undefined' ) {
		throw new Error('History.js Core has already been loaded...');
	}

	// Initialise History
	History.init = function(options){
		// Check Load Status of Adapter
		if ( typeof History.Adapter === 'undefined' ) {
			return false;
		}

		// Check Load Status of Core
		if ( typeof History.initCore !== 'undefined' ) {
			History.initCore();
		}

		// Check Load Status of HTML4 Support
		if ( typeof History.initHtml4 !== 'undefined' ) {
			History.initHtml4();
		}

		// Return true
		return true;
	};


	// ========================================================================
	// Initialise Core

	// Initialise Core
	History.initCore = function(options){
		// Initialise
		if ( typeof History.initCore.initialized !== 'undefined' ) {
			// Already Loaded
			return false;
		}
		else {
			History.initCore.initialized = true;
		}


		// ====================================================================
		// Options

		/**
		 * History.options
		 * Configurable options
		 */
		History.options = History.options||{};

		/**
		 * History.options.hashChangeInterval
		 * How long should the interval be before hashchange checks
		 */
		History.options.hashChangeInterval = History.options.hashChangeInterval || 100;

		/**
		 * History.options.safariPollInterval
		 * How long should the interval be before safari poll checks
		 */
		History.options.safariPollInterval = History.options.safariPollInterval || 500;

		/**
		 * History.options.doubleCheckInterval
		 * How long should the interval be before we perform a double check
		 */
		History.options.doubleCheckInterval = History.options.doubleCheckInterval || 500;

		/**
		 * History.options.disableSuid
		 * Force History not to append suid
		 */
		History.options.disableSuid = History.options.disableSuid || false;

		/**
		 * History.options.storeInterval
		 * How long should we wait between store calls
		 */
		History.options.storeInterval = History.options.storeInterval || 1000;

		/**
		 * History.options.busyDelay
		 * How long should we wait between busy events
		 */
		History.options.busyDelay = History.options.busyDelay || 250;

		/**
		 * History.options.debug
		 * If true will enable debug messages to be logged
		 */
		History.options.debug = History.options.debug || false;

		/**
		 * History.options.initialTitle
		 * What is the title of the initial state
		 */
		History.options.initialTitle = History.options.initialTitle || document.title;

		/**
		 * History.options.html4Mode
		 * If true, will force HTMl4 mode (hashtags)
		 */
		History.options.html4Mode = History.options.html4Mode || false;

		/**
		 * History.options.delayInit
		 * Want to override default options and call init manually.
		 */
		History.options.delayInit = History.options.delayInit || false;


		// ====================================================================
		// Interval record

		/**
		 * History.intervalList
		 * List of intervals set, to be cleared when document is unloaded.
		 */
		History.intervalList = [];

		/**
		 * History.clearAllIntervals
		 * Clears all setInterval instances.
		 */
		History.clearAllIntervals = function(){
			var i, il = History.intervalList;
			if (typeof il !== "undefined" && il !== null) {
				for (i = 0; i < il.length; i++) {
					clearInterval(il[i]);
				}
				History.intervalList = null;
			}
		};


		// ====================================================================
		// Debug

		/**
		 * History.debug(message,...)
		 * Logs the passed arguments if debug enabled
		 */
		History.debug = function(){
			if ( (History.options.debug||false) ) {
				History.log.apply(History,arguments);
			}
		};

		/**
		 * History.log(message,...)
		 * Logs the passed arguments
		 */
		History.log = function(){
			// Prepare
			var
				consoleExists = !(typeof console === 'undefined' || typeof console.log === 'undefined' || typeof console.log.apply === 'undefined'),
				textarea = document.getElementById('log'),
				message,
				i,n,
				args,arg
				;

			// Write to Console
			if ( consoleExists ) {
				args = Array.prototype.slice.call(arguments);
				message = args.shift();
				if ( typeof console.debug !== 'undefined' ) {
					console.debug.apply(console,[message,args]);
				}
				else {
					console.log.apply(console,[message,args]);
				}
			}
			else {
				message = ("\n"+arguments[0]+"\n");
			}

			// Write to log
			for ( i=1,n=arguments.length; i<n; ++i ) {
				arg = arguments[i];
				if ( typeof arg === 'object' && typeof JSON !== 'undefined' ) {
					try {
						arg = JSON.stringify(arg);
					}
					catch ( Exception ) {
						// Recursive Object
					}
				}
				message += "\n"+arg+"\n";
			}

			// Textarea
			if ( textarea ) {
				textarea.value += message+"\n-----\n";
				textarea.scrollTop = textarea.scrollHeight - textarea.clientHeight;
			}
			// No Textarea, No Console
			else if ( !consoleExists ) {
				alert(message);
			}

			// Return true
			return true;
		};


		// ====================================================================
		// Emulated Status

		/**
		 * History.getInternetExplorerMajorVersion()
		 * Get's the major version of Internet Explorer
		 * @return {integer}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 * @author James Padolsey <https://gist.github.com/527683>
		 */
		History.getInternetExplorerMajorVersion = function(){
			var result = History.getInternetExplorerMajorVersion.cached =
					(typeof History.getInternetExplorerMajorVersion.cached !== 'undefined')
				?	History.getInternetExplorerMajorVersion.cached
				:	(function(){
						var v = 3,
								div = document.createElement('div'),
								all = div.getElementsByTagName('i');
						while ( (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->') && all[0] ) {}
						return (v > 4) ? v : false;
					})()
				;
			return result;
		};

		/**
		 * History.isInternetExplorer()
		 * Are we using Internet Explorer?
		 * @return {boolean}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 */
		History.isInternetExplorer = function(){
			var result =
				History.isInternetExplorer.cached =
				(typeof History.isInternetExplorer.cached !== 'undefined')
					?	History.isInternetExplorer.cached
					:	Boolean(History.getInternetExplorerMajorVersion())
				;
			return result;
		};

		/**
		 * History.emulated
		 * Which features require emulating?
		 */

		if (History.options.html4Mode) {
			History.emulated = {
				pushState : true,
				hashChange: true
			};
		}

		else {

			History.emulated = {
				pushState: !Boolean(
					window.history && window.history.pushState && window.history.replaceState
					&& !(
						(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent) /* disable for versions of iOS before version 4.3 (8F190) */
						|| (/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent) /* disable for the mercury iOS browser, or at least older versions of the webkit engine */
					)
				),
				hashChange: Boolean(
					!(('onhashchange' in window) || ('onhashchange' in document))
					||
					(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8)
				)
			};
		}

		/**
		 * History.enabled
		 * Is History enabled?
		 */
		History.enabled = !History.emulated.pushState;

		/**
		 * History.bugs
		 * Which bugs are present
		 */
		History.bugs = {
			/**
			 * Safari 5 and Safari iOS 4 fail to return to the correct state once a hash is replaced by a `replaceState` call
			 * https://bugs.webkit.org/show_bug.cgi?id=56249
			 */
			setHash: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),

			/**
			 * Safari 5 and Safari iOS 4 sometimes fail to apply the state change under busy conditions
			 * https://bugs.webkit.org/show_bug.cgi?id=42940
			 */
			safariPoll: Boolean(!History.emulated.pushState && navigator.vendor === 'Apple Computer, Inc.' && /AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),

			/**
			 * MSIE 6 and 7 sometimes do not apply a hash even it was told to (requiring a second call to the apply function)
			 */
			ieDoubleCheck: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 8),

			/**
			 * MSIE 6 requires the entire hash to be encoded for the hashes to trigger the onHashChange event
			 */
			hashEscape: Boolean(History.isInternetExplorer() && History.getInternetExplorerMajorVersion() < 7)
		};

		/**
		 * History.isEmptyObject(obj)
		 * Checks to see if the Object is Empty
		 * @param {Object} obj
		 * @return {boolean}
		 */
		History.isEmptyObject = function(obj) {
			for ( var name in obj ) {
				if ( obj.hasOwnProperty(name) ) {
					return false;
				}
			}
			return true;
		};

		/**
		 * History.cloneObject(obj)
		 * Clones a object and eliminate all references to the original contexts
		 * @param {Object} obj
		 * @return {Object}
		 */
		History.cloneObject = function(obj) {
			var hash,newObj;
			if ( obj ) {
				hash = JSON.stringify(obj);
				newObj = JSON.parse(hash);
			}
			else {
				newObj = {};
			}
			return newObj;
		};


		// ====================================================================
		// URL Helpers

		/**
		 * History.getRootUrl()
		 * Turns "http://mysite.com/dir/page.html?asd" into "http://mysite.com"
		 * @return {String} rootUrl
		 */
		History.getRootUrl = function(){
			// Create
			var rootUrl = document.location.protocol+'//'+(document.location.hostname||document.location.host);
			if ( document.location.port||false ) {
				rootUrl += ':'+document.location.port;
			}
			rootUrl += '/';

			// Return
			return rootUrl;
		};

		/**
		 * History.getBaseHref()
		 * Fetches the `href` attribute of the `<base href="...">` element if it exists
		 * @return {String} baseHref
		 */
		History.getBaseHref = function(){
			// Create
			var
				baseElements = document.getElementsByTagName('base'),
				baseElement = null,
				baseHref = '';

			// Test for Base Element
			if ( baseElements.length === 1 ) {
				// Prepare for Base Element
				baseElement = baseElements[0];
				baseHref = baseElement.href.replace(/[^\/]+$/,'');
			}

			// Adjust trailing slash
			baseHref = baseHref.replace(/\/+$/,'');
			if ( baseHref ) baseHref += '/';

			// Return
			return baseHref;
		};

		/**
		 * History.getBaseUrl()
		 * Fetches the baseHref or basePageUrl or rootUrl (whichever one exists first)
		 * @return {String} baseUrl
		 */
		History.getBaseUrl = function(){
			// Create
			var baseUrl = History.getBaseHref()||History.getBasePageUrl()||History.getRootUrl();

			// Return
			return baseUrl;
		};

		/**
		 * History.getPageUrl()
		 * Fetches the URL of the current page
		 * @return {String} pageUrl
		 */
		History.getPageUrl = function(){
			// Fetch
			var
				State = History.getState(false,false),
				stateUrl = (State||{}).url||History.getLocationHref(),
				pageUrl;

			// Create
			pageUrl = stateUrl.replace(/\/+$/,'').replace(/[^\/]+$/,function(part,index,string){
				return (/\./).test(part) ? part : part+'/';
			});

			// Return
			return pageUrl;
		};

		/**
		 * History.getBasePageUrl()
		 * Fetches the Url of the directory of the current page
		 * @return {String} basePageUrl
		 */
		History.getBasePageUrl = function(){
			// Create
			var basePageUrl = (History.getLocationHref()).replace(/[#\?].*/,'').replace(/[^\/]+$/,function(part,index,string){
				return (/[^\/]$/).test(part) ? '' : part;
			}).replace(/\/+$/,'')+'/';

			// Return
			return basePageUrl;
		};

		/**
		 * History.getFullUrl(url)
		 * Ensures that we have an absolute URL and not a relative URL
		 * @param {string} url
		 * @param {Boolean} allowBaseHref
		 * @return {string} fullUrl
		 */
		History.getFullUrl = function(url,allowBaseHref){
			// Prepare
			var fullUrl = url, firstChar = url.substring(0,1);
			allowBaseHref = (typeof allowBaseHref === 'undefined') ? true : allowBaseHref;

			// Check
			if ( /[a-z]+\:\/\//.test(url) ) {
				// Full URL
			}
			else if ( firstChar === '/' ) {
				// Root URL
				fullUrl = History.getRootUrl()+url.replace(/^\/+/,'');
			}
			else if ( firstChar === '#' ) {
				// Anchor URL
				fullUrl = History.getPageUrl().replace(/#.*/,'')+url;
			}
			else if ( firstChar === '?' ) {
				// Query URL
				fullUrl = History.getPageUrl().replace(/[\?#].*/,'')+url;
			}
			else {
				// Relative URL
				if ( allowBaseHref ) {
					fullUrl = History.getBaseUrl()+url.replace(/^(\.\/)+/,'');
				} else {
					fullUrl = History.getBasePageUrl()+url.replace(/^(\.\/)+/,'');
				}
				// We have an if condition above as we do not want hashes
				// which are relative to the baseHref in our URLs
				// as if the baseHref changes, then all our bookmarks
				// would now point to different locations
				// whereas the basePageUrl will always stay the same
			}

			// Return
			return fullUrl.replace(/\#$/,'');
		};

		/**
		 * History.getShortUrl(url)
		 * Ensures that we have a relative URL and not a absolute URL
		 * @param {string} url
		 * @return {string} url
		 */
		History.getShortUrl = function(url){
			// Prepare
			var shortUrl = url, baseUrl = History.getBaseUrl(), rootUrl = History.getRootUrl();

			// Trim baseUrl
			if ( History.emulated.pushState ) {
				// We are in a if statement as when pushState is not emulated
				// The actual url these short urls are relative to can change
				// So within the same session, we the url may end up somewhere different
				shortUrl = shortUrl.replace(baseUrl,'');
			}

			// Trim rootUrl
			shortUrl = shortUrl.replace(rootUrl,'/');

			// Ensure we can still detect it as a state
			if ( History.isTraditionalAnchor(shortUrl) ) {
				shortUrl = './'+shortUrl;
			}

			// Clean It
			shortUrl = shortUrl.replace(/^(\.\/)+/g,'./').replace(/\#$/,'');

			// Return
			return shortUrl;
		};

		/**
		 * History.getLocationHref(document)
		 * Returns a normalized version of document.location.href
		 * accounting for browser inconsistencies, etc.
		 *
		 * This URL will be URI-encoded and will include the hash
		 *
		 * @param {object} document
		 * @return {string} url
		 */
		History.getLocationHref = function(doc) {
			doc = doc || document;

			// most of the time, this will be true
			if (doc.URL === doc.location.href)
				return doc.location.href;

			// some versions of webkit URI-decode document.location.href
			// but they leave document.URL in an encoded state
			if (doc.location.href === decodeURIComponent(doc.URL))
				return doc.URL;

			// FF 3.6 only updates document.URL when a page is reloaded
			// document.location.href is updated correctly
			if (doc.location.hash && decodeURIComponent(doc.location.href.replace(/^[^#]+/, "")) === doc.location.hash)
				return doc.location.href;

			if (doc.URL.indexOf('#') == -1 && doc.location.href.indexOf('#') != -1)
				return doc.location.href;
			
			return doc.URL || doc.location.href;
		};


		// ====================================================================
		// State Storage

		/**
		 * History.store
		 * The store for all session specific data
		 */
		History.store = {};

		/**
		 * History.idToState
		 * 1-1: State ID to State Object
		 */
		History.idToState = History.idToState||{};

		/**
		 * History.stateToId
		 * 1-1: State String to State ID
		 */
		History.stateToId = History.stateToId||{};

		/**
		 * History.urlToId
		 * 1-1: State URL to State ID
		 */
		History.urlToId = History.urlToId||{};

		/**
		 * History.storedStates
		 * Store the states in an array
		 */
		History.storedStates = History.storedStates||[];

		/**
		 * History.savedStates
		 * Saved the states in an array
		 */
		History.savedStates = History.savedStates||[];

		/**
		 * History.noramlizeStore()
		 * Noramlize the store by adding necessary values
		 */
		History.normalizeStore = function(){
			History.store.idToState = History.store.idToState||{};
			History.store.urlToId = History.store.urlToId||{};
			History.store.stateToId = History.store.stateToId||{};
		};

		/**
		 * History.getState()
		 * Get an object containing the data, title and url of the current state
		 * @param {Boolean} friendly
		 * @param {Boolean} create
		 * @return {Object} State
		 */
		History.getState = function(friendly,create){
			// Prepare
			if ( typeof friendly === 'undefined' ) { friendly = true; }
			if ( typeof create === 'undefined' ) { create = true; }

			// Fetch
			var State = History.getLastSavedState();

			// Create
			if ( !State && create ) {
				State = History.createStateObject();
			}

			// Adjust
			if ( friendly ) {
				State = History.cloneObject(State);
				State.url = State.cleanUrl||State.url;
			}

			// Return
			return State;
		};

		/**
		 * History.getIdByState(State)
		 * Gets a ID for a State
		 * @param {State} newState
		 * @return {String} id
		 */
		History.getIdByState = function(newState){

			// Fetch ID
			var id = History.extractId(newState.url),
				str;

			if ( !id ) {
				// Find ID via State String
				str = History.getStateString(newState);
				if ( typeof History.stateToId[str] !== 'undefined' ) {
					id = History.stateToId[str];
				}
				else if ( typeof History.store.stateToId[str] !== 'undefined' ) {
					id = History.store.stateToId[str];
				}
				else {
					// Generate a new ID
					while ( true ) {
						id = (new Date()).getTime() + String(Math.random()).replace(/\D/g,'');
						if ( typeof History.idToState[id] === 'undefined' && typeof History.store.idToState[id] === 'undefined' ) {
							break;
						}
					}

					// Apply the new State to the ID
					History.stateToId[str] = id;
					History.idToState[id] = newState;
				}
			}

			// Return ID
			return id;
		};

		/**
		 * History.normalizeState(State)
		 * Expands a State Object
		 * @param {object} State
		 * @return {object}
		 */
		History.normalizeState = function(oldState){
			// Variables
			var newState, dataNotEmpty;

			// Prepare
			if ( !oldState || (typeof oldState !== 'object') ) {
				oldState = {};
			}

			// Check
			if ( typeof oldState.normalized !== 'undefined' ) {
				return oldState;
			}

			// Adjust
			if ( !oldState.data || (typeof oldState.data !== 'object') ) {
				oldState.data = {};
			}

			// ----------------------------------------------------------------

			// Create
			newState = {};
			newState.normalized = true;
			newState.title = oldState.title||'';
			newState.url = History.getFullUrl(oldState.url?oldState.url:(History.getLocationHref()));
			newState.hash = History.getShortUrl(newState.url);
			newState.data = History.cloneObject(oldState.data);

			// Fetch ID
			newState.id = History.getIdByState(newState);

			// ----------------------------------------------------------------

			// Clean the URL
			newState.cleanUrl = newState.url.replace(/\??\&_suid.*/,'');
			newState.url = newState.cleanUrl;

			// Check to see if we have more than just a url
			dataNotEmpty = !History.isEmptyObject(newState.data);

			// Apply
			if ( (newState.title || dataNotEmpty) && History.options.disableSuid !== true ) {
				// Add ID to Hash
				newState.hash = History.getShortUrl(newState.url).replace(/\??\&_suid.*/,'');
				if ( !/\?/.test(newState.hash) ) {
					newState.hash += '?';
				}
				newState.hash += '&_suid='+newState.id;
			}

			// Create the Hashed URL
			newState.hashedUrl = History.getFullUrl(newState.hash);

			// ----------------------------------------------------------------

			// Update the URL if we have a duplicate
			if ( (History.emulated.pushState || History.bugs.safariPoll) && History.hasUrlDuplicate(newState) ) {
				newState.url = newState.hashedUrl;
			}

			// ----------------------------------------------------------------

			// Return
			return newState;
		};

		/**
		 * History.createStateObject(data,title,url)
		 * Creates a object based on the data, title and url state params
		 * @param {object} data
		 * @param {string} title
		 * @param {string} url
		 * @return {object}
		 */
		History.createStateObject = function(data,title,url){
			// Hashify
			var State = {
				'data': data,
				'title': title,
				'url': url
			};

			// Expand the State
			State = History.normalizeState(State);

			// Return object
			return State;
		};

		/**
		 * History.getStateById(id)
		 * Get a state by it's UID
		 * @param {String} id
		 */
		History.getStateById = function(id){
			// Prepare
			id = String(id);

			// Retrieve
			var State = History.idToState[id] || History.store.idToState[id] || undefined;

			// Return State
			return State;
		};

		/**
		 * Get a State's String
		 * @param {State} passedState
		 */
		History.getStateString = function(passedState){
			// Prepare
			var State, cleanedState, str;

			// Fetch
			State = History.normalizeState(passedState);

			// Clean
			cleanedState = {
				data: State.data,
				title: passedState.title,
				url: passedState.url
			};

			// Fetch
			str = JSON.stringify(cleanedState);

			// Return
			return str;
		};

		/**
		 * Get a State's ID
		 * @param {State} passedState
		 * @return {String} id
		 */
		History.getStateId = function(passedState){
			// Prepare
			var State, id;

			// Fetch
			State = History.normalizeState(passedState);

			// Fetch
			id = State.id;

			// Return
			return id;
		};

		/**
		 * History.getHashByState(State)
		 * Creates a Hash for the State Object
		 * @param {State} passedState
		 * @return {String} hash
		 */
		History.getHashByState = function(passedState){
			// Prepare
			var State, hash;

			// Fetch
			State = History.normalizeState(passedState);

			// Hash
			hash = State.hash;

			// Return
			return hash;
		};

		/**
		 * History.extractId(url_or_hash)
		 * Get a State ID by it's URL or Hash
		 * @param {string} url_or_hash
		 * @return {string} id
		 */
		History.extractId = function ( url_or_hash ) {
			// Prepare
			var id,parts,url, tmp;

			// Extract
			
			// If the URL has a #, use the id from before the #
			if (url_or_hash.indexOf('#') != -1)
			{
				tmp = url_or_hash.split("#")[0];
			}
			else
			{
				tmp = url_or_hash;
			}
			
			parts = /(.*)\&_suid=([0-9]+)$/.exec(tmp);
			url = parts ? (parts[1]||url_or_hash) : url_or_hash;
			id = parts ? String(parts[2]||'') : '';

			// Return
			return id||false;
		};

		/**
		 * History.isTraditionalAnchor
		 * Checks to see if the url is a traditional anchor or not
		 * @param {String} url_or_hash
		 * @return {Boolean}
		 */
		History.isTraditionalAnchor = function(url_or_hash){
			// Check
			var isTraditional = !(/[\/\?\.]/.test(url_or_hash));

			// Return
			return isTraditional;
		};

		/**
		 * History.extractState
		 * Get a State by it's URL or Hash
		 * @param {String} url_or_hash
		 * @return {State|null}
		 */
		History.extractState = function(url_or_hash,create){
			// Prepare
			var State = null, id, url;
			create = create||false;

			// Fetch SUID
			id = History.extractId(url_or_hash);
			if ( id ) {
				State = History.getStateById(id);
			}

			// Fetch SUID returned no State
			if ( !State ) {
				// Fetch URL
				url = History.getFullUrl(url_or_hash);

				// Check URL
				id = History.getIdByUrl(url)||false;
				if ( id ) {
					State = History.getStateById(id);
				}

				// Create State
				if ( !State && create && !History.isTraditionalAnchor(url_or_hash) ) {
					State = History.createStateObject(null,null,url);
				}
			}

			// Return
			return State;
		};

		/**
		 * History.getIdByUrl()
		 * Get a State ID by a State URL
		 */
		History.getIdByUrl = function(url){
			// Fetch
			var id = History.urlToId[url] || History.store.urlToId[url] || undefined;

			// Return
			return id;
		};

		/**
		 * History.getLastSavedState()
		 * Get an object containing the data, title and url of the current state
		 * @return {Object} State
		 */
		History.getLastSavedState = function(){
			return History.savedStates[History.savedStates.length-1]||undefined;
		};

		/**
		 * History.getLastStoredState()
		 * Get an object containing the data, title and url of the current state
		 * @return {Object} State
		 */
		History.getLastStoredState = function(){
			return History.storedStates[History.storedStates.length-1]||undefined;
		};

		/**
		 * History.hasUrlDuplicate
		 * Checks if a Url will have a url conflict
		 * @param {Object} newState
		 * @return {Boolean} hasDuplicate
		 */
		History.hasUrlDuplicate = function(newState) {
			// Prepare
			var hasDuplicate = false,
				oldState;

			// Fetch
			oldState = History.extractState(newState.url);

			// Check
			hasDuplicate = oldState && oldState.id !== newState.id;

			// Return
			return hasDuplicate;
		};

		/**
		 * History.storeState
		 * Store a State
		 * @param {Object} newState
		 * @return {Object} newState
		 */
		History.storeState = function(newState){
			// Store the State
			History.urlToId[newState.url] = newState.id;

			// Push the State
			History.storedStates.push(History.cloneObject(newState));

			// Return newState
			return newState;
		};

		/**
		 * History.isLastSavedState(newState)
		 * Tests to see if the state is the last state
		 * @param {Object} newState
		 * @return {boolean} isLast
		 */
		History.isLastSavedState = function(newState){
			// Prepare
			var isLast = false,
				newId, oldState, oldId;

			// Check
			if ( History.savedStates.length ) {
				newId = newState.id;
				oldState = History.getLastSavedState();
				oldId = oldState.id;

				// Check
				isLast = (newId === oldId);
			}

			// Return
			return isLast;
		};

		/**
		 * History.saveState
		 * Push a State
		 * @param {Object} newState
		 * @return {boolean} changed
		 */
		History.saveState = function(newState){
			// Check Hash
			if ( History.isLastSavedState(newState) ) {
				return false;
			}

			// Push the State
			History.savedStates.push(History.cloneObject(newState));

			// Return true
			return true;
		};

		/**
		 * History.getStateByIndex()
		 * Gets a state by the index
		 * @param {integer} index
		 * @return {Object}
		 */
		History.getStateByIndex = function(index){
			// Prepare
			var State = null;

			// Handle
			if ( typeof index === 'undefined' ) {
				// Get the last inserted
				State = History.savedStates[History.savedStates.length-1];
			}
			else if ( index < 0 ) {
				// Get from the end
				State = History.savedStates[History.savedStates.length+index];
			}
			else {
				// Get from the beginning
				State = History.savedStates[index];
			}

			// Return State
			return State;
		};
		
		/**
		 * History.getCurrentIndex()
		 * Gets the current index
		 * @return (integer)
		*/
		History.getCurrentIndex = function(){
			// Prepare
			var index = null;
			
			// No states saved
			if(History.savedStates.length < 1) {
				index = 0;
			}
			else {
				index = History.savedStates.length-1;
			}
			return index;
		};

		// ====================================================================
		// Hash Helpers

		/**
		 * History.getHash()
		 * @param {Location=} location
		 * Gets the current document hash
		 * Note: unlike location.hash, this is guaranteed to return the escaped hash in all browsers
		 * @return {string}
		 */
		History.getHash = function(doc){
			var url = History.getLocationHref(doc),
				hash;
			hash = History.getHashByUrl(url);
			return hash;
		};

		/**
		 * History.unescapeHash()
		 * normalize and Unescape a Hash
		 * @param {String} hash
		 * @return {string}
		 */
		History.unescapeHash = function(hash){
			// Prepare
			var result = History.normalizeHash(hash);

			// Unescape hash
			result = decodeURIComponent(result);

			// Return result
			return result;
		};

		/**
		 * History.normalizeHash()
		 * normalize a hash across browsers
		 * @return {string}
		 */
		History.normalizeHash = function(hash){
			// Prepare
			var result = hash.replace(/[^#]*#/,'').replace(/#.*/, '');

			// Return result
			return result;
		};

		/**
		 * History.setHash(hash)
		 * Sets the document hash
		 * @param {string} hash
		 * @return {History}
		 */
		History.setHash = function(hash,queue){
			// Prepare
			var State, pageUrl;

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.setHash: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.setHash,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Log
			//History.debug('History.setHash: called',hash);

			// Make Busy + Continue
			History.busy(true);

			// Check if hash is a state
			State = History.extractState(hash,true);
			if ( State && !History.emulated.pushState ) {
				// Hash is a state so skip the setHash
				//History.debug('History.setHash: Hash is a state so skipping the hash set with a direct pushState call',arguments);

				// PushState
				History.pushState(State.data,State.title,State.url,false);
			}
			else if ( History.getHash() !== hash ) {
				// Hash is a proper hash, so apply it

				// Handle browser bugs
				if ( History.bugs.setHash ) {
					// Fix Safari Bug https://bugs.webkit.org/show_bug.cgi?id=56249

					// Fetch the base page
					pageUrl = History.getPageUrl();

					// Safari hash apply
					History.pushState(null,null,pageUrl+'#'+hash,false);
				}
				else {
					// Normal hash apply
					document.location.hash = hash;
				}
			}

			// Chain
			return History;
		};

		/**
		 * History.escape()
		 * normalize and Escape a Hash
		 * @return {string}
		 */
		History.escapeHash = function(hash){
			// Prepare
			var result = History.normalizeHash(hash);

			// Escape hash
			result = window.encodeURIComponent(result);

			// IE6 Escape Bug
			if ( !History.bugs.hashEscape ) {
				// Restore common parts
				result = result
					.replace(/\%21/g,'!')
					.replace(/\%26/g,'&')
					.replace(/\%3D/g,'=')
					.replace(/\%3F/g,'?');
			}

			// Return result
			return result;
		};

		/**
		 * History.getHashByUrl(url)
		 * Extracts the Hash from a URL
		 * @param {string} url
		 * @return {string} url
		 */
		History.getHashByUrl = function(url){
			// Extract the hash
			var hash = String(url)
				.replace(/([^#]*)#?([^#]*)#?(.*)/, '$2')
				;

			// Unescape hash
			hash = History.unescapeHash(hash);

			// Return hash
			return hash;
		};

		/**
		 * History.setTitle(title)
		 * Applies the title to the document
		 * @param {State} newState
		 * @return {Boolean}
		 */
		History.setTitle = function(newState){
			// Prepare
			var title = newState.title,
				firstState;

			// Initial
			if ( !title ) {
				firstState = History.getStateByIndex(0);
				if ( firstState && firstState.url === newState.url ) {
					title = firstState.title||History.options.initialTitle;
				}
			}

			// Apply
			try {
				document.getElementsByTagName('title')[0].innerHTML = title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');
			}
			catch ( Exception ) { }
			document.title = title;

			// Chain
			return History;
		};


		// ====================================================================
		// Queueing

		/**
		 * History.queues
		 * The list of queues to use
		 * First In, First Out
		 */
		History.queues = [];

		/**
		 * History.busy(value)
		 * @param {boolean} value [optional]
		 * @return {boolean} busy
		 */
		History.busy = function(value){
			// Apply
			if ( typeof value !== 'undefined' ) {
				//History.debug('History.busy: changing ['+(History.busy.flag||false)+'] to ['+(value||false)+']', History.queues.length);
				History.busy.flag = value;
			}
			// Default
			else if ( typeof History.busy.flag === 'undefined' ) {
				History.busy.flag = false;
			}

			// Queue
			if ( !History.busy.flag ) {
				// Execute the next item in the queue
				clearTimeout(History.busy.timeout);
				var fireNext = function(){
					var i, queue, item;
					if ( History.busy.flag ) return;
					for ( i=History.queues.length-1; i >= 0; --i ) {
						queue = History.queues[i];
						if ( queue.length === 0 ) continue;
						item = queue.shift();
						History.fireQueueItem(item);
						History.busy.timeout = setTimeout(fireNext,History.options.busyDelay);
					}
				};
				History.busy.timeout = setTimeout(fireNext,History.options.busyDelay);
			}

			// Return
			return History.busy.flag;
		};

		/**
		 * History.busy.flag
		 */
		History.busy.flag = false;

		/**
		 * History.fireQueueItem(item)
		 * Fire a Queue Item
		 * @param {Object} item
		 * @return {Mixed} result
		 */
		History.fireQueueItem = function(item){
			return item.callback.apply(item.scope||History,item.args||[]);
		};

		/**
		 * History.pushQueue(callback,args)
		 * Add an item to the queue
		 * @param {Object} item [scope,callback,args,queue]
		 */
		History.pushQueue = function(item){
			// Prepare the queue
			History.queues[item.queue||0] = History.queues[item.queue||0]||[];

			// Add to the queue
			History.queues[item.queue||0].push(item);

			// Chain
			return History;
		};

		/**
		 * History.queue (item,queue), (func,queue), (func), (item)
		 * Either firs the item now if not busy, or adds it to the queue
		 */
		History.queue = function(item,queue){
			// Prepare
			if ( typeof item === 'function' ) {
				item = {
					callback: item
				};
			}
			if ( typeof queue !== 'undefined' ) {
				item.queue = queue;
			}

			// Handle
			if ( History.busy() ) {
				History.pushQueue(item);
			} else {
				History.fireQueueItem(item);
			}

			// Chain
			return History;
		};

		/**
		 * History.clearQueue()
		 * Clears the Queue
		 */
		History.clearQueue = function(){
			History.busy.flag = false;
			History.queues = [];
			return History;
		};


		// ====================================================================
		// IE Bug Fix

		/**
		 * History.stateChanged
		 * States whether or not the state has changed since the last double check was initialised
		 */
		History.stateChanged = false;

		/**
		 * History.doubleChecker
		 * Contains the timeout used for the double checks
		 */
		History.doubleChecker = false;

		/**
		 * History.doubleCheckComplete()
		 * Complete a double check
		 * @return {History}
		 */
		History.doubleCheckComplete = function(){
			// Update
			History.stateChanged = true;

			// Clear
			History.doubleCheckClear();

			// Chain
			return History;
		};

		/**
		 * History.doubleCheckClear()
		 * Clear a double check
		 * @return {History}
		 */
		History.doubleCheckClear = function(){
			// Clear
			if ( History.doubleChecker ) {
				clearTimeout(History.doubleChecker);
				History.doubleChecker = false;
			}

			// Chain
			return History;
		};

		/**
		 * History.doubleCheck()
		 * Create a double check
		 * @return {History}
		 */
		History.doubleCheck = function(tryAgain){
			// Reset
			History.stateChanged = false;
			History.doubleCheckClear();

			// Fix IE6,IE7 bug where calling history.back or history.forward does not actually change the hash (whereas doing it manually does)
			// Fix Safari 5 bug where sometimes the state does not change: https://bugs.webkit.org/show_bug.cgi?id=42940
			if ( History.bugs.ieDoubleCheck ) {
				// Apply Check
				History.doubleChecker = setTimeout(
					function(){
						History.doubleCheckClear();
						if ( !History.stateChanged ) {
							//History.debug('History.doubleCheck: State has not yet changed, trying again', arguments);
							// Re-Attempt
							tryAgain();
						}
						return true;
					},
					History.options.doubleCheckInterval
				);
			}

			// Chain
			return History;
		};


		// ====================================================================
		// Safari Bug Fix

		/**
		 * History.safariStatePoll()
		 * Poll the current state
		 * @return {History}
		 */
		History.safariStatePoll = function(){
			// Poll the URL

			// Get the Last State which has the new URL
			var
				urlState = History.extractState(History.getLocationHref()),
				newState;

			// Check for a difference
			if ( !History.isLastSavedState(urlState) ) {
				newState = urlState;
			}
			else {
				return;
			}

			// Check if we have a state with that url
			// If not create it
			if ( !newState ) {
				//History.debug('History.safariStatePoll: new');
				newState = History.createStateObject();
			}

			// Apply the New State
			//History.debug('History.safariStatePoll: trigger');
			History.Adapter.trigger(window,'popstate');

			// Chain
			return History;
		};


		// ====================================================================
		// State Aliases

		/**
		 * History.back(queue)
		 * Send the browser history back one item
		 * @param {Integer} queue [optional]
		 */
		History.back = function(queue){
			//History.debug('History.back: called', arguments);

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.back: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.back,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Make Busy + Continue
			History.busy(true);

			// Fix certain browser bugs that prevent the state from changing
			History.doubleCheck(function(){
				History.back(false);
			});

			// Go back
			history.go(-1);

			// End back closure
			return true;
		};

		/**
		 * History.forward(queue)
		 * Send the browser history forward one item
		 * @param {Integer} queue [optional]
		 */
		History.forward = function(queue){
			//History.debug('History.forward: called', arguments);

			// Handle Queueing
			if ( queue !== false && History.busy() ) {
				// Wait + Push to Queue
				//History.debug('History.forward: we must wait', arguments);
				History.pushQueue({
					scope: History,
					callback: History.forward,
					args: arguments,
					queue: queue
				});
				return false;
			}

			// Make Busy + Continue
			History.busy(true);

			// Fix certain browser bugs that prevent the state from changing
			History.doubleCheck(function(){
				History.forward(false);
			});

			// Go forward
			history.go(1);

			// End forward closure
			return true;
		};

		/**
		 * History.go(index,queue)
		 * Send the browser history back or forward index times
		 * @param {Integer} queue [optional]
		 */
		History.go = function(index,queue){
			//History.debug('History.go: called', arguments);

			// Prepare
			var i;

			// Handle
			if ( index > 0 ) {
				// Forward
				for ( i=1; i<=index; ++i ) {
					History.forward(queue);
				}
			}
			else if ( index < 0 ) {
				// Backward
				for ( i=-1; i>=index; --i ) {
					History.back(queue);
				}
			}
			else {
				throw new Error('History.go: History.go requires a positive or negative integer passed.');
			}

			// Chain
			return History;
		};


		// ====================================================================
		// HTML5 State Support

		// Non-Native pushState Implementation
		if ( History.emulated.pushState ) {
			/*
			 * Provide Skeleton for HTML4 Browsers
			 */

			// Prepare
			var emptyFunction = function(){};
			History.pushState = History.pushState||emptyFunction;
			History.replaceState = History.replaceState||emptyFunction;
		} // History.emulated.pushState

		// Native pushState Implementation
		else {
			/*
			 * Use native HTML5 History API Implementation
			 */

			/**
			 * History.onPopState(event,extra)
			 * Refresh the Current State
			 */
			History.onPopState = function(event,extra){
				// Prepare
				var stateId = false, newState = false, currentHash, currentState;

				// Reset the double check
				History.doubleCheckComplete();

				// Check for a Hash, and handle apporiatly
				currentHash = History.getHash();
				if ( currentHash ) {
					// Expand Hash
					currentState = History.extractState(currentHash||History.getLocationHref(),true);
					if ( currentState ) {
						// We were able to parse it, it must be a State!
						// Let's forward to replaceState
						//History.debug('History.onPopState: state anchor', currentHash, currentState);
						History.replaceState(currentState.data, currentState.title, currentState.url, false);
					}
					else {
						// Traditional Anchor
						//History.debug('History.onPopState: traditional anchor', currentHash);
						History.Adapter.trigger(window,'anchorchange');
						History.busy(false);
					}

					// We don't care for hashes
					History.expectedStateId = false;
					return false;
				}

				// Ensure
				stateId = History.Adapter.extractEventData('state',event,extra) || false;

				// Fetch State
				if ( stateId ) {
					// Vanilla: Back/forward button was used
					newState = History.getStateById(stateId);
				}
				else if ( History.expectedStateId ) {
					// Vanilla: A new state was pushed, and popstate was called manually
					newState = History.getStateById(History.expectedStateId);
				}
				else {
					// Initial State
					newState = History.extractState(History.getLocationHref());
				}

				// The State did not exist in our store
				if ( !newState ) {
					// Regenerate the State
					newState = History.createStateObject(null,null,History.getLocationHref());
				}

				// Clean
				History.expectedStateId = false;

				// Check if we are the same state
				if ( History.isLastSavedState(newState) ) {
					// There has been no change (just the page's hash has finally propagated)
					//History.debug('History.onPopState: no change', newState, History.savedStates);
					History.busy(false);
					return false;
				}

				// Store the State
				History.storeState(newState);
				History.saveState(newState);

				// Force update of the title
				History.setTitle(newState);

				// Fire Our Event
				History.Adapter.trigger(window,'statechange');
				History.busy(false);

				// Return true
				return true;
			};
			History.Adapter.bind(window,'popstate',History.onPopState);

			/**
			 * History.pushState(data,title,url)
			 * Add a new State to the history object, become it, and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.pushState = function(data,title,url,queue){
				//History.debug('History.pushState: called', arguments);

				// Check the State
				if ( History.getHashByUrl(url) && History.emulated.pushState ) {
					throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.pushState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.pushState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy + Continue
				History.busy(true);

				// Create the newState
				var newState = History.createStateObject(data,title,url);

				// Check it
				if ( History.isLastSavedState(newState) ) {
					// Won't be a change
					History.busy(false);
				}
				else {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;

					// Push the newState
					history.pushState(newState.id,newState.title,newState.url);

					// Fire HTML5 Event
					History.Adapter.trigger(window,'popstate');
				}

				// End pushState closure
				return true;
			};

			/**
			 * History.replaceState(data,title,url)
			 * Replace the State and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.replaceState = function(data,title,url,queue){
				//History.debug('History.replaceState: called', arguments);

				// Check the State
				if ( History.getHashByUrl(url) && History.emulated.pushState ) {
					throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.replaceState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.replaceState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy + Continue
				History.busy(true);

				// Create the newState
				var newState = History.createStateObject(data,title,url);

				// Check it
				if ( History.isLastSavedState(newState) ) {
					// Won't be a change
					History.busy(false);
				}
				else {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;

					// Push the newState
					history.replaceState(newState.id,newState.title,newState.url);

					// Fire HTML5 Event
					History.Adapter.trigger(window,'popstate');
				}

				// End replaceState closure
				return true;
			};

		} // !History.emulated.pushState


		// ====================================================================
		// Initialise

		/**
		 * Load the Store
		 */
		if ( sessionStorage ) {
			// Fetch
			try {
				History.store = JSON.parse(sessionStorage.getItem('History.store'))||{};
			}
			catch ( err ) {
				History.store = {};
			}

			// Normalize
			History.normalizeStore();
		}
		else {
			// Default Load
			History.store = {};
			History.normalizeStore();
		}

		/**
		 * Clear Intervals on exit to prevent memory leaks
		 */
		History.Adapter.bind(window,"unload",History.clearAllIntervals);

		/**
		 * Create the initial State
		 */
		History.saveState(History.storeState(History.extractState(History.getLocationHref(),true)));

		/**
		 * Bind for Saving Store
		 */
		if ( sessionStorage ) {
			// When the page is closed
			History.onUnload = function(){
				// Prepare
				var	currentStore, item, currentStoreString;

				// Fetch
				try {
					currentStore = JSON.parse(sessionStorage.getItem('History.store'))||{};
				}
				catch ( err ) {
					currentStore = {};
				}

				// Ensure
				currentStore.idToState = currentStore.idToState || {};
				currentStore.urlToId = currentStore.urlToId || {};
				currentStore.stateToId = currentStore.stateToId || {};

				// Sync
				for ( item in History.idToState ) {
					if ( !History.idToState.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.idToState[item] = History.idToState[item];
				}
				for ( item in History.urlToId ) {
					if ( !History.urlToId.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.urlToId[item] = History.urlToId[item];
				}
				for ( item in History.stateToId ) {
					if ( !History.stateToId.hasOwnProperty(item) ) {
						continue;
					}
					currentStore.stateToId[item] = History.stateToId[item];
				}

				// Update
				History.store = currentStore;
				History.normalizeStore();

				// In Safari, going into Private Browsing mode causes the
				// Session Storage object to still exist but if you try and use
				// or set any property/function of it it throws the exception
				// "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to
				// add something to storage that exceeded the quota." infinitely
				// every second.
				currentStoreString = JSON.stringify(currentStore);
				try {
					// Store
					sessionStorage.setItem('History.store', currentStoreString);
				}
				catch (e) {
					if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {
						if (sessionStorage.length) {
							// Workaround for a bug seen on iPads. Sometimes the quota exceeded error comes up and simply
							// removing/resetting the storage can work.
							sessionStorage.removeItem('History.store');
							sessionStorage.setItem('History.store', currentStoreString);
						} else {
							// Otherwise, we're probably private browsing in Safari, so we'll ignore the exception.
						}
					} else {
						throw e;
					}
				}
			};

			// For Internet Explorer
			History.intervalList.push(setInterval(History.onUnload,History.options.storeInterval));

			// For Other Browsers
			History.Adapter.bind(window,'beforeunload',History.onUnload);
			History.Adapter.bind(window,'unload',History.onUnload);

			// Both are enabled for consistency
		}

		// Non-Native pushState Implementation
		if ( !History.emulated.pushState ) {
			// Be aware, the following is only for native pushState implementations
			// If you are wanting to include something for all browsers
			// Then include it above this if block

			/**
			 * Setup Safari Fix
			 */
			if ( History.bugs.safariPoll ) {
				History.intervalList.push(setInterval(History.safariStatePoll, History.options.safariPollInterval));
			}

			/**
			 * Ensure Cross Browser Compatibility
			 */
			if ( navigator.vendor === 'Apple Computer, Inc.' || (navigator.appCodeName||'') === 'Mozilla' ) {
				/**
				 * Fix Safari HashChange Issue
				 */

				// Setup Alias
				History.Adapter.bind(window,'hashchange',function(){
					History.Adapter.trigger(window,'popstate');
				});

				// Initialise Alias
				if ( History.getHash() ) {
					History.Adapter.onDomLoad(function(){
						History.Adapter.trigger(window,'hashchange');
					});
				}
			}

		} // !History.emulated.pushState


	}; // History.initCore

	// Try to Initialise History
	if (!History.options || !History.options.delayInit) {
		History.init();
	}

})(window);/*!** End file: history.js ***/
/*!** Begin file: history.html4.js ***/
/**
 * History.js HTML4 Support
 * Depends on the HTML5 Support
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

(function(window,undefined){
	"use strict";

	// ========================================================================
	// Initialise

	// Localise Globals
	var
		document = window.document, // Make sure we are using the correct document
		setTimeout = window.setTimeout||setTimeout,
		clearTimeout = window.clearTimeout||clearTimeout,
		setInterval = window.setInterval||setInterval,
		History = window.History = window.History||{}; // Public History Object

	// Check Existence
	if ( typeof History.initHtml4 !== 'undefined' ) {
		throw new Error('History.js HTML4 Support has already been loaded...');
	}


	// ========================================================================
	// Initialise HTML4 Support

	// Initialise HTML4 Support
	History.initHtml4 = function(){
		// Initialise
		if ( typeof History.initHtml4.initialized !== 'undefined' ) {
			// Already Loaded
			return false;
		}
		else {
			History.initHtml4.initialized = true;
		}


		// ====================================================================
		// Properties

		/**
		 * History.enabled
		 * Is History enabled?
		 */
		History.enabled = true;


		// ====================================================================
		// Hash Storage

		/**
		 * History.savedHashes
		 * Store the hashes in an array
		 */
		History.savedHashes = [];

		/**
		 * History.isLastHash(newHash)
		 * Checks if the hash is the last hash
		 * @param {string} newHash
		 * @return {boolean} true
		 */
		History.isLastHash = function(newHash){
			// Prepare
			var oldHash = History.getHashByIndex(),
				isLast;

			// Check
			isLast = newHash === oldHash;

			// Return isLast
			return isLast;
		};

		/**
		 * History.isHashEqual(newHash, oldHash)
		 * Checks to see if two hashes are functionally equal
		 * @param {string} newHash
		 * @param {string} oldHash
		 * @return {boolean} true
		 */
		History.isHashEqual = function(newHash, oldHash){
			newHash = encodeURIComponent(newHash).replace(/%25/g, "%");
			oldHash = encodeURIComponent(oldHash).replace(/%25/g, "%");
			return newHash === oldHash;
		};

		/**
		 * History.saveHash(newHash)
		 * Push a Hash
		 * @param {string} newHash
		 * @return {boolean} true
		 */
		History.saveHash = function(newHash){
			// Check Hash
			if ( History.isLastHash(newHash) ) {
				return false;
			}

			// Push the Hash
			History.savedHashes.push(newHash);

			// Return true
			return true;
		};

		/**
		 * History.getHashByIndex()
		 * Gets a hash by the index
		 * @param {integer} index
		 * @return {string}
		 */
		History.getHashByIndex = function(index){
			// Prepare
			var hash = null;

			// Handle
			if ( typeof index === 'undefined' ) {
				// Get the last inserted
				hash = History.savedHashes[History.savedHashes.length-1];
			}
			else if ( index < 0 ) {
				// Get from the end
				hash = History.savedHashes[History.savedHashes.length+index];
			}
			else {
				// Get from the beginning
				hash = History.savedHashes[index];
			}

			// Return hash
			return hash;
		};


		// ====================================================================
		// Discarded States

		/**
		 * History.discardedHashes
		 * A hashed array of discarded hashes
		 */
		History.discardedHashes = {};

		/**
		 * History.discardedStates
		 * A hashed array of discarded states
		 */
		History.discardedStates = {};

		/**
		 * History.discardState(State)
		 * Discards the state by ignoring it through History
		 * @param {object} State
		 * @return {true}
		 */
		History.discardState = function(discardedState,forwardState,backState){
			//History.debug('History.discardState', arguments);
			// Prepare
			var discardedStateHash = History.getHashByState(discardedState),
				discardObject;

			// Create Discard Object
			discardObject = {
				'discardedState': discardedState,
				'backState': backState,
				'forwardState': forwardState
			};

			// Add to DiscardedStates
			History.discardedStates[discardedStateHash] = discardObject;

			// Return true
			return true;
		};

		/**
		 * History.discardHash(hash)
		 * Discards the hash by ignoring it through History
		 * @param {string} hash
		 * @return {true}
		 */
		History.discardHash = function(discardedHash,forwardState,backState){
			//History.debug('History.discardState', arguments);
			// Create Discard Object
			var discardObject = {
				'discardedHash': discardedHash,
				'backState': backState,
				'forwardState': forwardState
			};

			// Add to discardedHash
			History.discardedHashes[discardedHash] = discardObject;

			// Return true
			return true;
		};

		/**
		 * History.discardedState(State)
		 * Checks to see if the state is discarded
		 * @param {object} State
		 * @return {bool}
		 */
		History.discardedState = function(State){
			// Prepare
			var StateHash = History.getHashByState(State),
				discarded;

			// Check
			discarded = History.discardedStates[StateHash]||false;

			// Return true
			return discarded;
		};

		/**
		 * History.discardedHash(hash)
		 * Checks to see if the state is discarded
		 * @param {string} State
		 * @return {bool}
		 */
		History.discardedHash = function(hash){
			// Check
			var discarded = History.discardedHashes[hash]||false;

			// Return true
			return discarded;
		};

		/**
		 * History.recycleState(State)
		 * Allows a discarded state to be used again
		 * @param {object} data
		 * @param {string} title
		 * @param {string} url
		 * @return {true}
		 */
		History.recycleState = function(State){
			//History.debug('History.recycleState', arguments);
			// Prepare
			var StateHash = History.getHashByState(State);

			// Remove from DiscardedStates
			if ( History.discardedState(State) ) {
				delete History.discardedStates[StateHash];
			}

			// Return true
			return true;
		};


		// ====================================================================
		// HTML4 HashChange Support

		if ( History.emulated.hashChange ) {
			/*
			 * We must emulate the HTML4 HashChange Support by manually checking for hash changes
			 */

			/**
			 * History.hashChangeInit()
			 * Init the HashChange Emulation
			 */
			History.hashChangeInit = function(){
				// Define our Checker Function
				History.checkerFunction = null;

				// Define some variables that will help in our checker function
				var lastDocumentHash = '',
					iframeId, iframe,
					lastIframeHash, checkerRunning,
					startedWithHash = Boolean(History.getHash());

				// Handle depending on the browser
				if ( History.isInternetExplorer() ) {
					// IE6 and IE7
					// We need to use an iframe to emulate the back and forward buttons

					// Create iFrame
					iframeId = 'historyjs-iframe';
					iframe = document.createElement('iframe');

					// Adjust iFarme
					// IE 6 requires iframe to have a src on HTTPS pages, otherwise it will throw a
					// "This page contains both secure and nonsecure items" warning.
					iframe.setAttribute('id', iframeId);
					iframe.setAttribute('src', '#');
					iframe.style.display = 'none';

					// Append iFrame
					document.body.appendChild(iframe);

					// Create initial history entry
					iframe.contentWindow.document.open();
					iframe.contentWindow.document.close();

					// Define some variables that will help in our checker function
					lastIframeHash = '';
					checkerRunning = false;

					// Define the checker function
					History.checkerFunction = function(){
						// Check Running
						if ( checkerRunning ) {
							return false;
						}

						// Update Running
						checkerRunning = true;

						// Fetch
						var
							documentHash = History.getHash(),
							iframeHash = History.getHash(iframe.contentWindow.document);

						// The Document Hash has changed (application caused)
						if ( documentHash !== lastDocumentHash ) {
							// Equalise
							lastDocumentHash = documentHash;

							// Create a history entry in the iframe
							if ( iframeHash !== documentHash ) {
								//History.debug('hashchange.checker: iframe hash change', 'documentHash (new):', documentHash, 'iframeHash (old):', iframeHash);

								// Equalise
								lastIframeHash = iframeHash = documentHash;

								// Create History Entry
								iframe.contentWindow.document.open();
								iframe.contentWindow.document.close();

								// Update the iframe's hash
								iframe.contentWindow.document.location.hash = History.escapeHash(documentHash);
							}

							// Trigger Hashchange Event
							History.Adapter.trigger(window,'hashchange');
						}

						// The iFrame Hash has changed (back button caused)
						else if ( iframeHash !== lastIframeHash ) {
							//History.debug('hashchange.checker: iframe hash out of sync', 'iframeHash (new):', iframeHash, 'documentHash (old):', documentHash);

							// Equalise
							lastIframeHash = iframeHash;
							
							// If there is no iframe hash that means we're at the original
							// iframe state.
							// And if there was a hash on the original request, the original
							// iframe state was replaced instantly, so skip this state and take
							// the user back to where they came from.
							if (startedWithHash && iframeHash === '') {
								History.back();
							}
							else {
								// Update the Hash
								History.setHash(iframeHash,false);
							}
						}

						// Reset Running
						checkerRunning = false;

						// Return true
						return true;
					};
				}
				else {
					// We are not IE
					// Firefox 1 or 2, Opera

					// Define the checker function
					History.checkerFunction = function(){
						// Prepare
						var documentHash = History.getHash()||'';

						// The Document Hash has changed (application caused)
						if ( documentHash !== lastDocumentHash ) {
							// Equalise
							lastDocumentHash = documentHash;

							// Trigger Hashchange Event
							History.Adapter.trigger(window,'hashchange');
						}

						// Return true
						return true;
					};
				}

				// Apply the checker function
				History.intervalList.push(setInterval(History.checkerFunction, History.options.hashChangeInterval));

				// Done
				return true;
			}; // History.hashChangeInit

			// Bind hashChangeInit
			History.Adapter.onDomLoad(History.hashChangeInit);

		} // History.emulated.hashChange


		// ====================================================================
		// HTML5 State Support

		// Non-Native pushState Implementation
		if ( History.emulated.pushState ) {
			/*
			 * We must emulate the HTML5 State Management by using HTML4 HashChange
			 */

			/**
			 * History.onHashChange(event)
			 * Trigger HTML5's window.onpopstate via HTML4 HashChange Support
			 */
			History.onHashChange = function(event){
				//History.debug('History.onHashChange', arguments);

				// Prepare
				var currentUrl = ((event && event.newURL) || History.getLocationHref()),
					currentHash = History.getHashByUrl(currentUrl),
					currentState = null,
					currentStateHash = null,
					currentStateHashExits = null,
					discardObject;

				// Check if we are the same state
				if ( History.isLastHash(currentHash) ) {
					// There has been no change (just the page's hash has finally propagated)
					//History.debug('History.onHashChange: no change');
					History.busy(false);
					return false;
				}

				// Reset the double check
				History.doubleCheckComplete();

				// Store our location for use in detecting back/forward direction
				History.saveHash(currentHash);

				// Expand Hash
				if ( currentHash && History.isTraditionalAnchor(currentHash) ) {
					//History.debug('History.onHashChange: traditional anchor', currentHash);
					// Traditional Anchor Hash
					History.Adapter.trigger(window,'anchorchange');
					History.busy(false);
					return false;
				}

				// Create State
				currentState = History.extractState(History.getFullUrl(currentHash||History.getLocationHref()),true);

				// Check if we are the same state
				if ( History.isLastSavedState(currentState) ) {
					//History.debug('History.onHashChange: no change');
					// There has been no change (just the page's hash has finally propagated)
					History.busy(false);
					return false;
				}

				// Create the state Hash
				currentStateHash = History.getHashByState(currentState);

				// Check if we are DiscardedState
				discardObject = History.discardedState(currentState);
				if ( discardObject ) {
					// Ignore this state as it has been discarded and go back to the state before it
					if ( History.getHashByIndex(-2) === History.getHashByState(discardObject.forwardState) ) {
						// We are going backwards
						//History.debug('History.onHashChange: go backwards');
						History.back(false);
					} else {
						// We are going forwards
						//History.debug('History.onHashChange: go forwards');
						History.forward(false);
					}
					return false;
				}

				// Push the new HTML5 State
				//History.debug('History.onHashChange: success hashchange');
				History.pushState(currentState.data,currentState.title,encodeURI(currentState.url),false);

				// End onHashChange closure
				return true;
			};
			History.Adapter.bind(window,'hashchange',History.onHashChange);

			/**
			 * History.pushState(data,title,url)
			 * Add a new State to the history object, become it, and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.pushState = function(data,title,url,queue){
				//History.debug('History.pushState: called', arguments);

				// We assume that the URL passed in is URI-encoded, but this makes
				// sure that it's fully URI encoded; any '%'s that are encoded are
				// converted back into '%'s
				url = encodeURI(url).replace(/%25/g, "%");

				// Check the State
				if ( History.getHashByUrl(url) ) {
					throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.pushState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.pushState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy
				History.busy(true);

				// Fetch the State Object
				var newState = History.createStateObject(data,title,url),
					newStateHash = History.getHashByState(newState),
					oldState = History.getState(false),
					oldStateHash = History.getHashByState(oldState),
					html4Hash = History.getHash(),
					wasExpected = History.expectedStateId == newState.id;

				// Store the newState
				History.storeState(newState);
				History.expectedStateId = newState.id;

				// Recycle the State
				History.recycleState(newState);

				// Force update of the title
				History.setTitle(newState);

				// Check if we are the same State
				if ( newStateHash === oldStateHash ) {
					//History.debug('History.pushState: no change', newStateHash);
					History.busy(false);
					return false;
				}

				// Update HTML5 State
				History.saveState(newState);

				// Fire HTML5 Event
				if(!wasExpected)
					History.Adapter.trigger(window,'statechange');

				// Update HTML4 Hash
				if ( !History.isHashEqual(newStateHash, html4Hash) && !History.isHashEqual(newStateHash, History.getShortUrl(History.getLocationHref())) ) {
					History.setHash(newStateHash,false);
				}
				
				History.busy(false);

				// End pushState closure
				return true;
			};

			/**
			 * History.replaceState(data,title,url)
			 * Replace the State and trigger onpopstate
			 * We have to trigger for HTML4 compatibility
			 * @param {object} data
			 * @param {string} title
			 * @param {string} url
			 * @return {true}
			 */
			History.replaceState = function(data,title,url,queue){
				//History.debug('History.replaceState: called', arguments);

				// We assume that the URL passed in is URI-encoded, but this makes
				// sure that it's fully URI encoded; any '%'s that are encoded are
				// converted back into '%'s
				url = encodeURI(url).replace(/%25/g, "%");

				// Check the State
				if ( History.getHashByUrl(url) ) {
					throw new Error('History.js does not support states with fragment-identifiers (hashes/anchors).');
				}

				// Handle Queueing
				if ( queue !== false && History.busy() ) {
					// Wait + Push to Queue
					//History.debug('History.replaceState: we must wait', arguments);
					History.pushQueue({
						scope: History,
						callback: History.replaceState,
						args: arguments,
						queue: queue
					});
					return false;
				}

				// Make Busy
				History.busy(true);

				// Fetch the State Objects
				var newState        = History.createStateObject(data,title,url),
					newStateHash = History.getHashByState(newState),
					oldState        = History.getState(false),
					oldStateHash = History.getHashByState(oldState),
					previousState   = History.getStateByIndex(-2);

				// Discard Old State
				History.discardState(oldState,newState,previousState);

				// If the url hasn't changed, just store and save the state
				// and fire a statechange event to be consistent with the
				// html 5 api
				if ( newStateHash === oldStateHash ) {
					// Store the newState
					History.storeState(newState);
					History.expectedStateId = newState.id;
	
					// Recycle the State
					History.recycleState(newState);
	
					// Force update of the title
					History.setTitle(newState);
					
					// Update HTML5 State
					History.saveState(newState);

					// Fire HTML5 Event
					//History.debug('History.pushState: trigger popstate');
					History.Adapter.trigger(window,'statechange');
					History.busy(false);
				}
				else {
					// Alias to PushState
					History.pushState(newState.data,newState.title,newState.url,false);
				}

				// End replaceState closure
				return true;
			};

		} // History.emulated.pushState



		// ====================================================================
		// Initialise

		// Non-Native pushState Implementation
		if ( History.emulated.pushState ) {
			/**
			 * Ensure initial state is handled correctly
			 */
			if ( History.getHash() && !History.emulated.hashChange ) {
				History.Adapter.onDomLoad(function(){
					History.Adapter.trigger(window,'hashchange');
				});
			}

		} // History.emulated.pushState

	}; // History.initHtml4

	// Try to Initialise History
	if ( typeof History.init !== 'undefined' ) {
		History.init();
	}

})(window);/*!** End file: history.html4.js ***/
/*!** Begin file: jquery.loadmask.js ***/
/**
 * Copyright (c) 2009 Sergiy Kovalchuk (serg472@gmail.com)
 * 
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *  
 * Following code is based on Element.mask() implementation from ExtJS framework (http://extjs.com/)
 *
 */
;(function($){
	
	/**
	 * Displays loading mask over selected element(s). Accepts both single and multiple selectors.
	 *
	 * @param label Text message that will be displayed on top of the mask besides a spinner (optional). 
	 * 				If not provided only mask will be displayed without a label or a spinner.  	
	 * @param delay Delay in milliseconds before element is masked (optional). If unmask() is called 
	 *              before the delay times out, no mask is displayed. This can be used to prevent unnecessary 
	 *              mask display for quick processes.   	
	 */
	$.fn.mask = function(label, delay){
		$(this).each(function() {
			if(delay !== undefined && delay > 0) {
		        var element = $(this);
		        element.data("_mask_timeout", setTimeout(function() { $.maskElement(element, label)}, delay));
			} else {
				$.maskElement($(this), label);
			}
		});
	};
	
	/**
	 * Removes mask from the element(s). Accepts both single and multiple selectors.
	 */
	$.fn.unmask = function(){
		$(this).each(function() {
			$.unmaskElement($(this));
		});
	};
	
	/**
	 * Checks if a single element is masked. Returns false if mask is delayed or not displayed. 
	 */
	$.fn.isMasked = function(){
		return this.hasClass("masked");
	};

	$.maskElement = function(element, label){
	
		//if this element has delayed mask scheduled then remove it and display the new one
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}

		if(element.isMasked()) {
			$.unmaskElement(element);
		}
		
		if(element.css("position") == "static") {
			element.addClass("masked-relative");
		}
		
		element.addClass("masked");
		
		var maskDiv = $('<div class="loadmask"></div>');
		
		//auto height fix for IE
		if(navigator.userAgent.toLowerCase().indexOf("msie") > -1){
			maskDiv.height(element.height() + parseInt(element.css("padding-top")) + parseInt(element.css("padding-bottom")));
			maskDiv.width(element.width() + parseInt(element.css("padding-left")) + parseInt(element.css("padding-right")));
		}
		
		//fix for z-index bug with selects in IE6
		if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
			element.find("select").addClass("masked-hidden");
		}
		
		element.append(maskDiv);
		
		if(label !== undefined && label != "") {
			var maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>');
			maskMsgDiv.append('<div>' + label + '</div>');
			element.append(maskMsgDiv);
			
			//calculate center position
			//maskMsgDiv.css("top", Math.round(element.height() / 2 - (maskMsgDiv.height() - parseInt(maskMsgDiv.css("padding-top")) - parseInt(maskMsgDiv.css("padding-bottom"))) / 2)+"px");
			maskMsgDiv.css("top", "150px");
			maskMsgDiv.css("left", Math.round(element.width() / 2 - (maskMsgDiv.width() - parseInt(maskMsgDiv.css("padding-left")) - parseInt(maskMsgDiv.css("padding-right"))) / 2)+"px");
			
			maskMsgDiv.show();
		} 
		
	};
	
	$.unmaskElement = function(element){
		//if this element has delayed mask scheduled then remove it
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}
		
		element.find(".loadmask-msg,.loadmask").remove();
		element.removeClass("masked");
		element.removeClass("masked-relative");
		element.find("select").removeClass("masked-hidden");
	};
 
})(jQuery);
/*!** End file: jquery.loadmask.js ***/
/*!** Begin file: flowplayer.min.js ***/
/*!

   Flowplayer Commercial v5.4.3 (Wednesday, 05. June 2013 11:10AM) | flowplayer.org/license

*/
!function(e){function n(n,t){var o="obj"+(""+Math.random()).slice(2,15),r='<object class="fp-engine" id="'+o+'" name="'+o+'" ';r+=e.browser.msie?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">':' data="'+n+'" type="application/x-shockwave-flash">';var i={width:"100%",height:"100%",allowscriptaccess:"always",wmode:"transparent",quality:"high",flashvars:"",movie:n+(e.browser.msie?"?"+o:""),name:o};return e.each(t,function(e,n){i.flashvars+=e+"="+n+"&"}),e.each(i,function(e,n){r+='<param name="'+e+'" value="'+n+'"/>'}),r+="</object>",e(r)}function t(e){return Math.round(100*e)/100}function o(e){return/mpegurl/i.test(e)?"application/x-mpegurl":"video/"+e}function r(e){return/^(video|application)/.test(e)||(e=o(e)),!!g.canPlayType(e).replace("no","")}function i(n,t){var o=e.grep(n,function(e){return e.type===t});return o.length?o[0]:null}function a(e){var n=e.attr("src"),t=e.attr("type")||"",o=n.split(b)[1];return t=/mpegurl/.test(t)?"mpegurl":t.replace("video/",""),{src:n,suffix:o||t,type:t||o}}function s(n){var t=this,o=[];e("source",n).each(function(){o.push(a(e(this)))}),o.length||o.push(a(n)),t.initialSources=o,t.resolve=function(n){return n?(e.isArray(n)?n={sources:e.map(n,function(n){var t,o=e.extend({},n);return e.each(n,function(e){t=e}),o.type=t,o.src=n[t],delete o[t],o})}:"string"==typeof n&&(n={src:n,sources:[]},e.each(o,function(e,t){"flash"!=t.type&&n.sources.push({type:t.type,src:n.src.replace(b,"."+t.suffix+"$2")})})),n):{sources:o}}}function l(e){return e=parseInt(e,10),e>=10?e:"0"+e}function c(e){e=e||0;var n=Math.floor(e/3600),t=Math.floor(e/60);return e-=60*t,n>=1?(t-=60*n,n+":"+l(t)+":"+l(e)):l(t)+":"+l(e)}!function(e){if(!e.browser){var n=e.browser={},t=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(t)||/(safari)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];o[1]&&(n[o[1]]=!0,n.version=o[2]||"0")}}(jQuery),e(function(){"function"==typeof e.fn.flowplayer&&e("video").parent(".flowplayer").flowplayer()});var d=[],u=[],f=window.navigator.userAgent;window.flowplayer=function(n){return e.isFunction(n)?u.push(n):"number"==typeof n||void 0===n?d[n||0]:e(n).data("flowplayer")},e(window).on("beforeunload",function(){e.each(d,function(n,t){t.conf.splash?t.unload():t.bind("error",function(){e(".flowplayer.is-error .fp-message").remove()})})}),e.extend(flowplayer,{version:"5.4.3",engine:{},conf:{},support:{},defaults:{debug:!1,disabled:!1,engine:"html5",fullscreen:window==window.top,keyboard:!0,ratio:9/16,adaptiveRatio:!1,flashfit:!1,rtmp:0,splash:!1,swf:"//releases.flowplayer.org/5.4.3/commercial/flowplayer.swf",speeds:[.25,.5,1,1.5,2],tooltip:!0,volume:"object"!=typeof localStorage?1:"true"==localStorage.muted?0:isNaN(localStorage.volume)?1:localStorage.volume||1,errors:["","Video loading aborted","Network error","Video not properly encoded","Video file not found","Unsupported video","Skin not found","SWF file not found","Subtitles not found","Invalid RTMP URL","Unsupported video format. Try installing Adobe Flash."],errorUrls:["","","","","","","","","","","http://get.adobe.com/flashplayer/"],playlist:[]}});var p=1;e.fn.flowplayer=function(n,t){return"string"==typeof n&&(n={swf:n}),e.isFunction(n)&&(t=n,n={}),!n&&this.data("flowplayer")||this.each(function(){var o,r,i=e(this).addClass("is-loading"),a=e.extend({},flowplayer.defaults,flowplayer.conf,n,i.data()),l=e("video",i).addClass("fp-engine").removeAttr("controls"),c=l.length?new s(l):null,f={};if(a.playlist.length){var m,g=l.attr("preload");l.length&&l.replaceWith(m=e("<p />")),l=e("<video />").addClass("fp-engine"),m?m.replaceWith(l):i.prepend(l),l.attr("preload",g),"string"==typeof a.playlist[0]?l.attr("src",a.playlist[0]):e.each(a.playlist[0],function(n,t){for(var o in t)t.hasOwnProperty(o)&&l.append(e("<source />").attr({type:"video/"+o,src:t[o]}))}),c=new s(l)}var v=i.data("flowplayer");v&&v.unload(),i.data("fp-player_id",i.data("fp-player_id")||p++);try{f=window.localStorage||f}catch(h){}var b=this.currentStyle&&"rtl"===this.currentStyle.direction||window.getComputedStyle&&"rtl"===window.getComputedStyle(this,null).getPropertyValue("direction");b&&i.addClass("is-rtl");var y=v||{conf:a,currentSpeed:1,volumeLevel:"undefined"==typeof a.volume?1*f.volume:a.volume,video:{},disabled:!1,finished:!1,loading:!1,muted:"true"==f.muted||a.muted,paused:!1,playing:!1,ready:!1,splash:!1,rtl:b,load:function(n,t){if(!(y.error||y.loading||y.disabled)){if(n=c.resolve(n),e.extend(n,r.pick(n.sources)),n.src){var o=e.Event("load");i.trigger(o,[y,n,r]),o.isDefaultPrevented()?y.loading=!1:(r.load(n),e.isFunction(n)&&(t=n),t&&i.one("ready",t))}return y}},pause:function(e){return!y.ready||y.seeking||y.disabled||y.loading||(r.pause(),y.one("pause",e)),y},resume:function(){return y.ready&&y.paused&&!y.disabled&&(r.resume(),y.finished&&(y.trigger("resume"),y.finished=!1)),y},toggle:function(){return y.ready?y.paused?y.resume():y.pause():y.load()},seek:function(n,t){if(y.ready){if("boolean"==typeof n){var a=.1*y.video.duration;n=y.video.time+(n?a:-a)}n=o=Math.min(Math.max(n,0),y.video.duration).toFixed(1);var s=e.Event("beforeseek");i.trigger(s,[y,n]),s.isDefaultPrevented()?(y.seeking=!1,i.toggleClass("is-seeking",y.seeking)):(r.seek(n),e.isFunction(t)&&i.one("seek",t))}return y},seekTo:function(e,n){var t=void 0===e?o:.1*y.video.duration*e;return y.seek(t,n)},mute:function(e){return void 0===e&&(e=!y.muted),f.muted=y.muted=e,f.volume=isNaN(f.volume)?a.volume:f.volume,y.volume(e?0:f.volume,!0),y.trigger("mute",e),y},volume:function(e,n){return y.ready&&(e=Math.min(Math.max(e,0),1),n||(f.volume=e),r.volume(e)),y},speed:function(n,t){return y.ready&&("boolean"==typeof n&&(n=a.speeds[e.inArray(y.currentSpeed,a.speeds)+(n?1:-1)]||y.currentSpeed),r.speed(n),t&&i.one("speed",t)),y},stop:function(){return y.ready&&(y.pause(),y.seek(0,function(){i.trigger("stop")})),y},unload:function(){return i.hasClass("is-embedding")||(a.splash?(y.trigger("unload"),r.unload()):y.stop()),y},disable:function(e){return void 0===e&&(e=!y.disabled),e!=y.disabled&&(y.disabled=e,y.trigger("disable",e)),y}};y.conf=e.extend(y.conf,a),e.each(["bind","one","unbind"],function(e,n){y[n]=function(e,t){return i[n](e,t),y}}),y.trigger=function(e,n){return i.trigger(e,[y,n]),y},i.data("flowplayer")||i.bind("boot",function(){return e.each(["autoplay","loop","preload","poster"],function(e,n){var t=l.attr(n);void 0!==t&&(a[n]=t?t:!0)}),(a.splash||i.hasClass("is-splash")||!flowplayer.support.firstframe)&&(y.forcedSplash=!a.splash&&!i.hasClass("is-splash"),y.splash=a.splash=a.autoplay=!0,i.addClass("is-splash"),l.attr("preload","none")),e.each(u,function(){this(y,i)}),r=flowplayer.engine[a.engine],r&&(r=r(y,i)),r.pick(c.initialSources)?y.engine=a.engine:e.each(flowplayer.engine,function(e){return e!=a.engine?(r=this(y,i),r.pick(c.initialSources)&&(y.engine=e),!1):void 0}),d.push(y),y.engine?(a.splash?y.unload():y.load(),a.disabled&&y.disable(),r.volume(y.volumeLevel),i.one("ready",t),void 0):y.trigger("error",{code:flowplayer.support.flashVideo?5:10})}).bind("load",function(n,t){a.splash&&e(".flowplayer").filter(".is-ready, .is-loading").not(i).each(function(){var n=e(this).data("flowplayer");n.conf.splash&&n.unload()}),i.addClass("is-loading"),t.loading=!0}).bind("ready",function(e,n,t){function o(){i.removeClass("is-loading"),n.loading=!1}t.time=0,n.video=t,a.splash?i.one("progress",o):o(),n.muted?n.mute(!0):n.volume(n.volumeLevel)}).bind("unload",function(){a.splash&&l.remove(),i.removeClass("is-loading"),y.loading=!1}).bind("ready unload",function(e){var n="ready"==e.type;i.toggleClass("is-splash",!n).toggleClass("is-ready",n),y.ready=n,y.splash=!n}).bind("progress",function(e,n,t){n.video.time=t}).bind("speed",function(e,n,t){n.currentSpeed=t}).bind("volume",function(e,n,t){n.volumeLevel=Math.round(100*t)/100,n.muted?t&&n.mute(!1):f.volume=t}).bind("beforeseek seek",function(e){y.seeking="beforeseek"==e.type,i.toggleClass("is-seeking",y.seeking)}).bind("ready pause resume unload finish stop",function(e,n,t){y.paused=/pause|finish|unload|stop/.test(e.type),"ready"==e.type&&(y.paused="none"==a.preload,t&&(y.paused=!t.duration||!a.autoplay&&"none"!=a.preload)),y.playing=!y.paused,i.toggleClass("is-paused",y.paused).toggleClass("is-playing",y.playing),y.load.ed||y.pause()}).bind("finish",function(){y.finished=!0}).bind("error",function(){l.remove()}),i.trigger("boot",[y,i]).data("flowplayer",y)})},!function(){var n=function(e){var n=/Version\/(\d\.\d)/.exec(e);return n&&n.length>1?parseFloat(n[1],10):0},t=flowplayer.support,o=e.browser,r=e("<video loop autoplay preload/>")[0],i=o.msie,a=navigator.userAgent,s=/iPad|MeeGo/.test(a)&&!/CriOS/.test(a),l=/iPad/.test(a)&&/CriOS/.test(a),c=/iP(hone|od)/i.test(a)&&!/iPad/.test(a),d=/Android/.test(a)&&!/Firefox/.test(a),u=/Android/.test(a)&&/Firefox/.test(a),f=/Silk/.test(a),p=/IEMobile/.test(a),m=(s?n(a):0,d?parseFloat(/Android\ (\d\.\d)/.exec(a)[1],10):0);e.extend(t,{subtitles:!!r.addTextTrack,fullscreen:!d&&("function"==typeof document.webkitCancelFullScreen&&!/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(a)||document.mozFullScreenEnabled||"function"==typeof document.exitFullscreen),inlineBlock:!(i&&o.version<8),touch:"ontouchstart"in window,dataload:!s&&!c&&!p,zeropreload:!i&&!d,volume:!(s||d||c||f||l),cachedVideoTag:!(s||c||l||p),firstframe:!(c||s||d||f||l||p||u),inlineVideo:!c&&!f&&!p&&(!d||m>=3),hlsDuration:!o.safari||s||c||l,seekable:!s&&!l});try{var g=i?new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"):navigator.plugins["Shockwave Flash"].description;g=g.split(/\D+/),g.length&&!g[0]&&(g=g.slice(1)),t.flashVideo=g[0]>9||9==g[0]&&g[3]>=115}catch(v){}try{t.video=!!r.canPlayType,t.video&&r.canPlayType("video/mp4")}catch(h){t.video=!1}t.animation=function(){for(var n=["","Webkit","Moz","O","ms","Khtml"],t=e("<p/>")[0],o=0;o<n.length;o++)if("undefined"!==t.style[n[o]+"AnimationName"])return!0}()}(),window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_savedUnloadHandler=__flash_unloadHandler=function(){}}),flowplayer.engine.flash=function(t,o){var r,i,a,s=t.conf;t.video;var l={pick:function(n){if(flowplayer.support.flashVideo){var t=e.grep(n,function(e){return"flash"==e.type})[0];if(t)return t;for(var o,r=0;r<n.length;r++)if(o=n[r],/mp4|flv/.test(o.type))return o}},load:function(l){function c(e){return e.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}var d=e("video",o),u=c(l.src);if(is_absolute=/^https?:/.test(u),d.length>0&&flowplayer.support.video&&d[0].pause(),d.remove(),is_absolute||s.rtmp||(u=e("<img/>").attr("src",u)[0].src),a)a.__play(u);else{r="fp"+(""+Math.random()).slice(3,15);var f={hostname:s.embedded?s.hostname:location.hostname,url:u,callback:"jQuery."+r};o.data("origin")&&(f.origin=o.data("origin")),is_absolute&&delete s.rtmp,e.each(["key","autoplay","preload","rtmp","loop","debug","preload","splash"],function(e,n){s[n]&&(f[n]=s[n])}),f.rtmp&&(f.rtmp=c(f.rtmp)),i=n(s.swf,f),i.prependTo(o),a=i[0],setTimeout(function(){try{if(!a.PercentLoaded())return o.trigger("error",[t,{code:7,url:s.swf}])}catch(e){}},5e3),e[r]=function(n,o){s.debug&&"status"!=n&&console.log("--",n,o);var r=e.Event(n);switch(n){case"ready":o=e.extend(l,o);break;case"click":r.flash=!0;break;case"keydown":r.which=o;break;case"seek":l.time=o;break;case"buffered":l.buffered=!0;break;case"status":t.trigger("progress",o.time),o.buffer<=l.bytes&&!l.buffered?(l.buffer=o.buffer/l.bytes*l.duration,t.trigger("buffer",l.buffer)):l.buffered&&t.trigger("buffered")}setTimeout(function(){t.trigger(r,o)},1)}}},speed:e.noop,unload:function(){a&&a.__unload&&a.__unload(),delete e[r],e("object",o).remove(),a=0}};e.each("pause,resume,seek,volume".split(","),function(e,n){l[n]=function(e){t.ready&&("seek"==n&&t.video.time&&!t.paused&&t.trigger("beforeseek"),void 0===e?a["__"+n]():a["__"+n](e))}});var c=e(window);return t.bind("ready fullscreen fullscreen-exit",function(n){var r=o.height(),i=o.width();if(t.conf.flashfit||/full/.test(n.type)){var a,s,l=t.isFullscreen,d=l&&F,u=!flowplayer.support.inlineBlock,f=l?d?screen.availWidth:c.width():i,p=l?d?screen.availHeight:c.height():r,m=d?screen.width-screen.availWidth:0,g=d?screen.height-screen.availHeight:0,v=u?i:"",h=u?r:"";(t.conf.flashfit||"fullscreen"===n.type)&&(a=t.video.width/t.video.height,s=t.video.height/t.video.width,h=Math.max(s*f),v=Math.max(a*p),h=h>p?v*s:h,h=Math.min(Math.round(h),p),v=v>f?h*a:v,v=Math.min(Math.round(v),f),g=Math.max(Math.round((p+g-h)/2),0),m=Math.max(Math.round((f+m-v)/2),0)),e("object",o).css({width:v,height:h,marginTop:g,marginLeft:m})}}),l};var m,g=e("<video/>")[0],v={ended:"finish",pause:"pause",play:"resume",progress:"buffer",timeupdate:"progress",volumechange:"volume",ratechange:"speed",seeked:"seek",loadeddata:"ready",error:"error",dataunavailable:"error"},h=function(n){return m?m.attr({type:o(n.type),src:n.src}):m=e("<video/>",{src:n.src,type:o(n.type),"class":"fp-engine",autoplay:"autoplay",preload:"none","x-webkit-airplay":"allow"})};flowplayer.engine.html5=function(n,o){function a(i,a,s){i.listeners&&i.listeners.hasOwnProperty(o.data("fp-player_id"))||((i.listeners||(i.listeners={}))[o.data("fp-player_id")]=!0,a.bind("error",function(t){try{if(t.originalEvent&&e(t.originalEvent.originalTarget).is("img"))return t.preventDefault();r(e(t.target).attr("type"))&&n.trigger("error",{code:4})}catch(o){}}),e.each(v,function(r,a){i.addEventListener(r,function(c){if("progress"==a&&c.srcElement&&0===c.srcElement.readyState&&setTimeout(function(){n.video.duration||(a="error",n.trigger(a,{code:4}))},1e4),p.debug&&!/progress/.test(a)&&console.log(r,"->",a,c),(n.ready||/ready|error/.test(a))&&a&&e("video",o).length){var d,f=e.Event(a);switch(a){case"ready":d=e.extend(s,{duration:i.duration,width:i.videoWidth,height:i.videoHeight,url:i.currentSrc,src:i.currentSrc});try{d.seekable=i.seekable&&i.seekable.end(null)}catch(m){}if(l=l||setInterval(function(){try{d.buffer=i.buffered.end(null)}catch(e){}d.buffer&&(d.buffer<=d.duration&&!d.buffered?n.trigger("buffer",c):d.buffered||(d.buffered=!0,n.trigger("buffer",c).trigger("buffered",c),clearInterval(l),l=0))},250),!d.duration&&!u.hlsDuration&&"loadeddata"===r){var g=function(){d.duration=i.duration;try{d.seekable=i.seekable&&i.seekable.end(null)}catch(e){}n.trigger(f,d),i.removeEventListener("durationchange",g)};return i.addEventListener("durationchange",g),void 0}break;case"progress":case"seek":if(n.video.duration,i.currentTime>0){d=Math.max(i.currentTime,0);break}if("progress"==a)return;case"speed":d=t(i.playbackRate);break;case"volume":d=t(i.volume);break;case"error":try{d=(c.srcElement||c.originalTarget).error}catch(v){return}}n.trigger(f,d)}},!1)}))}var s,l,c,d=e("video",o),u=flowplayer.support,f=e("track",d),p=n.conf;return s={pick:function(e){if(u.video){if(p.videoTypePreference){var n=i(e,p.videoTypePreference);if(n)return n}for(var t=0;t<e.length;t++)if(r(e[t].type))return e[t]}},load:function(t){if(p.splash&&!c)d=h(t).prependTo(o),u.inlineVideo||d.css({position:"absolute",top:"-9999em"}),f.length&&d.append(f.attr("default","")),p.loop&&d.attr("loop","loop"),c=d[0];else{c=d[0];var r=d.find("source");!c.src&&r.length&&(c.src=t.src,r.remove()),n.video.src&&t.src!=n.video.src?(d.attr("autoplay","autoplay"),c.src=t.src):"none"!=p.preload&&u.dataload||(u.zeropreload?n.trigger("ready",t).trigger("pause").one("ready",function(){o.trigger("resume")}):n.one("ready",function(){o.trigger("pause")}))}a(c,e("source",d).add(d),t),"none"==p.preload&&u.zeropreload&&u.dataload||c.load(),p.splash&&c.load()},pause:function(){c.pause()},resume:function(){c.play()},speed:function(e){c.playbackRate=e},seek:function(e){try{var t=n.paused;c.currentTime=e,t&&c.pause()}catch(o){}},volume:function(e){c.volume=e},unload:function(){e("video.fp-engine",o).remove(),u.cachedVideoTag||(m=null),l=clearInterval(l),c=0}}};var b=/\.(\w{3,4})(\?.*)?$/i;e.throttle=function(e,n){var t;return function(){t||(e.apply(this,arguments),t=1,setTimeout(function(){t=0},n))}},e.fn.slider2=function(n){var t=/iPad/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent);return this.each(function(){var o,r,i,a,s,l,c,d,u=e(this),f=e(document),p=u.children(":last"),m=!1,g=function(){r=u.offset(),i=u.width(),a=u.height(),l=s?a:i,d=y(c)},v=function(e){o||e==w.value||c&&!(c>e)||(u.trigger("slide",[e]),w.value=e)},h=function(e){var t=e.pageX;!t&&e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length&&(t=e.originalEvent.touches[0].pageX);var o=s?e.pageY-r.top:t-r.left;o=Math.max(0,Math.min(d||l,o));var i=o/l;return s&&(i=1-i),n&&(i=1-i),b(i,0,!0)},b=function(e,n){void 0===n&&(n=0),e>1&&(e=1);var o=Math.round(1e3*e)/10+"%";return(!c||c>=e)&&(t||p.stop(),m?p.css("width",o):p.animate(s?{height:o}:{width:o},n,"linear")),e},y=function(e){return Math.max(0,Math.min(l,s?(1-e)*a:e*i))},w={max:function(e){c=e},disable:function(e){o=e},slide:function(e,n,t){g(),t&&v(e),b(e,n)},disableAnimation:function(e){m=e!==!1}};g(),u.data("api",w).bind("mousedown.sld touchstart",function(n){if(n.preventDefault(),!o){var t=e.throttle(v,100);g(),w.dragging=!0,u.addClass("is-dragging"),v(h(n)),f.bind("mousemove.sld touchmove",function(e){e.preventDefault(),t(h(e))}).one("mouseup touchend",function(){w.dragging=!1,u.removeClass("is-dragging"),f.unbind("mousemove.sld touchmove")})}})})},flowplayer(function(n,t){function o(n){return e(".fp-"+n,t)}function r(n){("0px"===t.css("width")||"0px"===t.css("height")||n!==flowplayer.defaults.ratio)&&(parseInt(b,10)||g.css("paddingTop",100*n+"%")),l.inlineBlock||e("object",t).height(t.height())}function i(e){t.toggleClass("is-mouseover",e).toggleClass("is-mouseout",!e)}var a,s=n.conf,l=flowplayer.support;t.find(".fp-ratio,.fp-ui").remove(),t.addClass("flowplayer").append('      <div class="ratio"/>      <div class="ui">         <div class="waiting"><em/><em/><em/></div>         <a class="fullscreen"/>         <a class="unload"/>         <p class="speed"/>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"/>               <div class="progress"/>            </div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"/>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"/>            <em class="duration">00:00</em>         </div>         <div class="message"><h2/><p/></div>      </div>'.replace(/class="/g,'class="fp-'));var d=o("progress"),u=o("buffer"),f=o("elapsed"),p=o("remaining"),m=o("waiting"),g=o("ratio"),v=o("speed"),h=o("duration"),b=g.css("paddingTop"),y=o("timeline").slider2(n.rtl),w=y.data("api"),k=(o("volume"),o("fullscreen")),x=o("volumeslider").slider2(n.rtl),C=x.data("api"),T=t.is(".fixed-controls, .no-toggle");w.disableAnimation(t.hasClass("is-touch")),l.animation||m.html("<p>loading &hellip;</p>"),r(s.ratio);try{s.fullscreen||k.remove()}catch(S){k.remove()}n.bind("ready",function(){var e=n.video.duration;w.disable(n.disabled||!e),s.adaptiveRatio&&r(n.video.height/n.video.width),h.add(p).html(c(e)),e>=3600&&t.addClass("is-long")||t.removeClass("is-long"),C.slide(n.volumeLevel)}).bind("unload",function(){b||g.css("paddingTop","")}).bind("buffer",function(){var e=n.video,t=e.buffer/e.duration;!e.seekable&&l.seekable&&w.max(t),1>t?u.css("width",100*t+"%"):u.css({width:"100%"})}).bind("speed",function(e,n,t){v.text(t+"x").addClass("fp-hilite"),setTimeout(function(){v.removeClass("fp-hilite")},1e3)}).bind("buffered",function(){u.css({width:"100%"}),w.max(1)}).bind("progress",function(){var e=n.video.time,t=n.video.duration;w.dragging||w.slide(e/t,n.seeking?0:250),f.html(c(e)),p.html("-"+c(t-e))}).bind("finish resume seek",function(e){t.toggleClass("is-finished","finish"==e.type)}).bind("stop",function(){f.html(c(0)),w.slide(0,100)}).bind("finish",function(){f.html(c(n.video.duration)),w.slide(1,100),t.removeClass("is-seeking")}).bind("beforeseek",function(){d.stop()}).bind("volume",function(){C.slide(n.volumeLevel)}).bind("disable",function(){var e=n.disabled;w.disable(e),C.disable(e),t.toggleClass("is-disabled",n.disabled)}).bind("mute",function(e,n,o){t.toggleClass("is-muted",o)}).bind("error",function(n,o,r){if(t.removeClass("is-loading").addClass("is-error"),r){r.message=s.errors[r.code],o.error=!0;var i=e(".fp-message",t);e("h2",i).text((o.engine||"html5")+": "+r.message),e("p",i).text(r.url||o.video.url||o.video.src||s.errorUrls[r.code]),t.unbind("mouseenter click").removeClass("is-mouseover")}}).bind("mouseenter mouseleave",function(e){if(!T){var n,o="mouseenter"==e.type;i(o),o?(t.bind("pause.x mousemove.x volume.x",function(){i(!0),n=new Date}),a=setInterval(function(){new Date-n>5e3&&(i(!1),n=new Date)},100)):(t.unbind(".x"),clearInterval(a))}}).bind("mouseleave",function(){(w.dragging||C.dragging)&&t.addClass("is-mouseover").removeClass("is-mouseout")}).bind("click.player",function(t){return e(t.target).is(".fp-ui, .fp-engine")||t.flash?(t.preventDefault(),n.toggle()):void 0}),s.poster&&t.css("backgroundImage","url("+s.poster+")");var F=t.css("backgroundColor"),_="none"!=t.css("backgroundImage")||F&&"rgba(0, 0, 0, 0)"!=F&&"transparent"!=F;!_||s.splash||s.autoplay||n.bind("ready stop",function(){t.addClass("is-poster").one("progress",function(){t.removeClass("is-poster")})}),!_&&n.forcedSplash&&t.css("backgroundColor","#555"),e(".fp-toggle, .fp-play",t).click(n.toggle),e.each(["mute","fullscreen","unload"],function(e,t){o(t).click(function(){n[t]()})}),y.bind("slide",function(e,t){n.seeking=!0,n.seek(t*n.video.duration)}),x.bind("slide",function(e,t){n.volume(t)}),o("time").click(function(){e(this).toggleClass("is-inverted")}),i(T)});var y,w,k="is-help";e(document).bind("keydown.fp",function(n){var t=y,o=n.ctrlKey||n.metaKey||n.altKey,r=n.which,i=t&&t.conf;if(t&&i.keyboard&&!t.disabled){if(-1!=e.inArray(r,[63,187,191,219]))return w.toggleClass(k),!1;if(27==r&&w.hasClass(k))return w.toggleClass(k),!1;if(!o&&t.ready){if(n.preventDefault(),n.shiftKey)return 39==r?t.speed(!0):37==r&&t.speed(!1),void 0;if(58>r&&r>47)return t.seekTo(r-48);switch(r){case 38:case 75:t.volume(t.volumeLevel+.15);break;case 40:case 74:t.volume(t.volumeLevel-.15);break;case 39:case 76:t.seeking=!0,t.seek(!0);break;case 37:case 72:t.seeking=!0,t.seek(!1);break;case 190:t.seekTo();break;case 32:t.toggle();break;case 70:i.fullscreen&&t.fullscreen();break;case 77:t.mute();break;case 27:t[t.isFullscreen?"fullscreen":"unload"]()}}}}),flowplayer(function(n,t){n.conf.keyboard&&(t.bind("mouseenter mouseleave",function(e){y=n.disabled||"mouseenter"!=e.type?0:n,y&&(w=t)}),t.append('      <div class="fp-help">         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>esc</em>stop</p>            <p><em>f</em>fullscreen</p>            <p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster <small>(latest Chrome and Safari)</small></p>         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip;<em>6</em> seek to 10%, 20%, &hellip;60% </p>         </div>      </div>   '),n.conf.tooltip&&e(".fp-ui",t).attr("title","Hit ? for help").on("mouseout.tip",function(){e(this).removeAttr("title").off("mouseout.tip")}),e(".fp-close",t).click(function(){t.toggleClass(k)}))});var x,C=e.browser.mozilla?"moz":"webkit",T="fullscreen",S="fullscreen-exit",F=flowplayer.support.fullscreen,_="function"==typeof document.exitFullscreen,E=navigator.userAgent.toLowerCase(),M=/(safari)[ \/]([\w.]+)/.exec(E)&&!/(chrome)[ \/]([\w.]+)/.exec(E);e(document).bind(_?"fullscreenchange":C+"fullscreenchange",function(n){var t=e(document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.fullscreenElement||n.target);t.length&&!x?x=t.trigger(T,[t]):(x.trigger(S,[x]),x=null)}),flowplayer(function(n,t){if(n.conf.fullscreen){var o,r=e(window),i={pos:0,play:!1};n.isFullscreen=!1,n.fullscreen=function(e){return n.disabled?void 0:(void 0===e&&(e=!n.isFullscreen),e&&(o=r.scrollTop()),F?e?_?t[0].requestFullscreen():(t[0][C+"RequestFullScreen"](Element.ALLOW_KEYBOARD_INPUT),!M||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||t[0][C+"RequestFullScreen"]()):_?document.exitFullscreen():document[C+"CancelFullScreen"]():("flash"===n.engine&&n.conf.rtmp&&(i={pos:n.video.time,play:n.playing}),n.trigger(e?T:S,[n])),n)};var a;t.bind("mousedown.fs",function(){+new Date-a<150&&n.ready&&n.fullscreen(),a=+new Date}),n.bind(T,function(){t.addClass("is-fullscreen"),n.isFullscreen=!0}).bind(S,function(){t.removeClass("is-fullscreen"),n.isFullscreen=!1,r.scrollTop(o)}).bind("ready",function(){i.pos&&!isNaN(i.pos)&&setTimeout(function(){n.play(),n.seek(i.pos),i.play||setTimeout(function(){n.pause()},100),i={pos:0,play:!1}},250)})}}),flowplayer(function(n,t){function o(){return e(i.query,t)}function r(){return e(i.query+"."+a,t)}var i=e.extend({active:"is-active",advance:!0,query:".fp-playlist a"},n.conf),a=i.active;n.play=function(t){return void 0===t?n.resume():"number"!=typeof t||n.conf.playlist[t]?("number"!=typeof t&&n.load.apply(null,arguments),n.unbind("resume.fromfirst"),n.video.index=t,n.load("string"==typeof n.conf.playlist[t]?n.conf.playlist[t].toString():e.map(n.conf.playlist[t],function(n){return e.extend({},n)})),n):n},n.next=function(e){e&&e.preventDefault();var t=n.video.index;return-1!=t&&(t=t===n.conf.playlist.length-1?0:t+1,n.play(t)),n},n.prev=function(e){e&&e.preventDefault();var t=n.video.index;return-1!=t&&(t=0===t?n.conf.playlist.length-1:t-1,n.play(t)),n},e(".fp-next",t).click(n.next),e(".fp-prev",t).click(n.prev),i.advance&&t.unbind("finish.pl").bind("finish.pl",function(e,n){var o=n.video.index+1;o<n.conf.playlist.length||i.loop?(o=o===n.conf.playlist.length?0:o,t.removeClass("is-finished"),setTimeout(function(){n.play(o)})):(t.addClass("is-playing"),n.conf.playlist.length>1&&n.one("resume.fromfirst",function(){return n.play(0),!1}))});var s=!1;if(n.conf.playlist.length){s=!0;var l=t.find(".fp-playlist");if(!l.length){l=e('<div class="fp-playlist"></div>');var c=e(".fp-next,.fp-prev",t).eq(0).before(l);c.length||e("video",t).after(l)}l.empty(),e.each(n.conf.playlist,function(n,t){var o;if("string"==typeof t)o=t;else for(var r in t[0])if(t[0].hasOwnProperty(r)){o=t[0][r];break}l.append(e("<a />").attr({href:o,"data-index":n}))})}if(o().length){s||(n.conf.playlist=[],o().each(function(){var t=e(this).attr("href");e(this).attr("data-index",n.conf.playlist.length),n.conf.playlist.push(t)})),t.on("click",i.query,function(t){t.preventDefault();var o=e(t.target).closest(i.query),r=Number(o.attr("data-index"));-1!=r&&n.play(r)});var d=o().filter("[data-cuepoints]").length;n.bind("load",function(o,i,s){var l=r().removeClass(a),c=l.attr("data-index"),u=s.index=n.video.index||0,f=e('a[data-index="'+u+'"]',t).addClass(a),p=u==n.conf.playlist.length-1;t.removeClass("video"+c).addClass("video"+u).toggleClass("last-video",p),s.index=i.video.index=u,s.is_last=i.video.is_last=p,d&&(n.cuepoints=f.data("cuepoints"))}).bind("unload.pl",function(){r().toggleClass(a)})}n.conf.playlist.length&&(n.conf.loop=!1)});var j=/ ?cue\d+ ?/;flowplayer(function(n,t){function o(e){t[0].className=t[0].className.replace(j," "),e>=0&&t.addClass("cue"+e)}var r=0;n.cuepoints=n.conf.cuepoints||[],n.bind("progress",function(e,i,a){if(r&&.015>a-r)return r=a;r=a;for(var s,l=n.cuepoints||[],c=0;c<l.length;c++)s=l[c],isNaN(s)||(s={time:s}),s.time<0&&(s.time=n.video.duration+s.time),s.index=c,Math.abs(s.time-a)<.125*n.currentSpeed&&(o(c),t.trigger("cuepoint",[n,s]))}).bind("unload seek",o),n.conf.generate_cuepoints&&n.bind("load",function(){e(".fp-cuepoint",t).remove()}).bind("ready",function(){var o=n.cuepoints||[],r=n.video.duration,i=e(".fp-timeline",t).css("overflow","visible");e.each(o,function(t,o){var a=o.time||o;0>a&&(a=r+o);var s=e("<a/>").addClass("fp-cuepoint fp-cuepoint"+t).css("left",100*(a/r)+"%");s.appendTo(i).mousedown(function(){return n.seek(a),!1})})})}),flowplayer(function(n,t){function o(e){var n=e.split(":");return 2==n.length&&n.unshift(0),60*60*n[0]+60*n[1]+parseFloat(n[2].replace(",","."))}var r=e("track",t),i=n.conf;if(!flowplayer.support.subtitles||(n.subtitles=r.length&&r[0].track,!i.nativesubtitles||"html5"!=i.engine)){r.remove();var a=/^(([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3}) --\> (([0-9]{2}:)?[0-9]{2}:[0-9]{2}[,.]{1}[0-9]{3})(.*)/;n.subtitles=[];var s=r.attr("src");if(s){e.get(s,function(t){for(var r,i,s,l,c=0,d=t.split("\n"),u=d.length,f={};u>c;c++)if(i=a.exec(d[c])){for(r=d[c-1],s="<p>"+d[++c]+"</p><br/>";e.trim(d[++c])&&c<d.length;)s+="<p>"+d[c]+"</p><br/>";f={title:r,startTime:o(i[1]),endTime:o(i[2]||i[3]),text:s},l={time:f.startTime,subtitle:f},n.subtitles.push(f),n.cuepoints.push(l),n.cuepoints.push({time:f.endTime,subtitleEnd:r}),0===f.startTime&&n.trigger("cuepoint",l)}}).fail(function(){return n.trigger("error",{code:8,url:s}),!1});var l,c=e("<div class='fp-subtitle'/>",t).appendTo(t);n.bind("cuepoint",function(e,n,t){t.subtitle?(l=t.index,c.html(t.subtitle.text).addClass("fp-active")):t.subtitleEnd&&(c.removeClass("fp-active"),l=t.index)}).bind("seek",function(t,o,r){l&&n.cuepoints[l]&&n.cuepoints[l].time>r&&(c.removeClass("fp-active"),l=null),e.each(n.cuepoints||[],function(e,t){var o=t.subtitle;o&&l!=t.index?r>=t.time&&(!o.endTime||r<=o.endTime)&&n.trigger("cuepoint",t):t.subtitleEnd&&r>=t.time&&t.index==l+1&&n.trigger("cuepoint",t)})})}}}),flowplayer(function(n,t){function o(){if(i&&"undefined"!=typeof _gat){var e=_gat._getTracker(r),o=n.video;e._setAllowLinker(!0),e._trackEvent("Video / Seconds played",n.engine+"/"+o.type,t.attr("title")||o.src.split("/").slice(-1)[0].replace(b,""),Math.round(i/1e3)),i=0}}var r=n.conf.analytics,i=0,a=0;r&&("undefined"==typeof _gat&&e.getScript("//google-analytics.com/ga.js"),n.bind("load unload",o).bind("progress",function(){n.seeking||(i+=a?+new Date-a:0,a=+new Date)}).bind("pause",function(){a=0}),e(window).unload(o))});var A=/IEMobile/.test(f);(flowplayer.support.touch||A)&&flowplayer(function(n,t){var o=/Android/.test(f)&&!/Firefox/.test(f)&&!/Opera/.test(f),r=/Silk/.test(f);if(o){n.conf.videoTypePreference="mp4";var i=n.load;n.load=function(){var e=i.apply(n,arguments);return n.trigger("ready",n,n.video),e}}flowplayer.support.volume||t.addClass("no-volume no-mute"),t.addClass("is-touch"),t.find(".fp-timeline").data("api").disableAnimation();var a=!1;t.bind("touchmove",function(){a=!0}).bind("touchend click",function(){return a?(a=!1,void 0):n.playing&&!t.hasClass("is-mouseover")?(t.addClass("is-mouseover").removeClass("is-mouseout"),!1):(n.paused&&t.hasClass("is-mouseout")&&n.toggle(),n.paused&&A&&e("video",t)[0].play(),void 0)}),n.conf.native_fullscreen&&(e.browser.webkit||e.browser.safari)&&(n.fullscreen=function(){var n=e("video",t);n[0].webkitEnterFullScreen(),n.one("webkitendfullscreen",function(){n.prop("controls",!0).prop("controls",!1)})}),(o||r)&&n.bind("ready",function(){var o=e("video",t);o.one("canplay",function(){o[0].play()}),o[0].play(),n.bind("progress.dur",function(){var r=o[0].duration;1!==r&&(n.video.duration=r,e(".fp-duration",t).html(c(r)),n.unbind("progress.dur"))})})}),flowplayer(function(n,t){if(n.conf.embed!==!1){var o=n.conf,r=e(".fp-ui",t),i=e("<a/>",{"class":"fp-embed",title:"Copy to your site"}).appendTo(r),a=e("<div/>",{"class":"fp-embed-code"}).append("<label>Paste this HTML code on your site to embed.</label><textarea/>").appendTo(r),s=e("textarea",a);n.embedCode=function(){var r=n.video,i=r.width||t.width(),a=r.height||t.height(),s=e("<div/>",{"class":"flowplayer",css:{width:i,height:a}}),l=e("<video/>").appendTo(s);
e.each(["origin","analytics","logo","key","rtmp"],function(e,n){o[n]&&s.attr("data-"+n,o[n])}),e.each(r.sources,function(n,t){l.append(e("<source/>",{type:"video/"+t.type,src:t.src}))});var c={src:"//embed.flowplayer.org/5.4.3/embed.min.js"};e.isPlainObject(o.embed)&&(c["data-swf"]=o.embed.swf,c["data-library"]=o.embed.library,c.src=o.embed.script||c.src,o.embed.skin&&(c["data-skin"]=o.embed.skin));var d=e("<foo/>",c).append(s);return e("<p/>").append(d).html().replace(/<(\/?)foo/g,"<$1script")},t.fptip(".fp-embed","is-embedding"),s.click(function(){this.select()}),i.click(function(){s.text(n.embedCode()),s[0].focus(),s[0].select()})}}),e.fn.fptip=function(n,t){return this.each(function(){function o(){r.removeClass(t),e(document).unbind(".st")}var r=e(this);e(n||"a",this).click(function(n){n.preventDefault(),r.toggleClass(t),r.hasClass(t)&&e(document).bind("keydown.st",function(e){27==e.which&&o()}).bind("click.st",function(n){e(n.target).parents("."+t).length||o()})})})}}(jQuery),flowplayer(function(e,n){function t(e){var n=i("<a/>")[0];return n.href=e,n.hostname}function o(e){var n="co.uk,org.uk,ltd.uk,plc.uk,me.uk,br.com,cn.com,eu.com,hu.com,no.com,qc.com,sa.comse.com,se.net,us.com,uy.com,co.ac,gv.ac,or.ac,ac.ac,ac.at,co.at,gv.at,or.atasn.au,com.au,edu.au,org.au,net.au,id.au,ac.be,adm.br,adv.br,am.br,arq.br,art.brbio.br,cng.br,cnt.br,com.br,ecn.br,eng.br,esp.br,etc.br,eti.br,fm.br,fot.br,fst.brg12.br,gov.br,ind.br,inf.br,jor.br,lel.br,med.br,mil.br,net.br,nom.br,ntr.brodo.br,org.br,ppg.br,pro.br,psc.br,psi.br,rec.br,slg.br,tmp.br,tur.br,tv.br,vet.brzlg.br,ab.ca,bc.ca,mb.ca,nb.ca,nf.ca,ns.ca,nt.ca,on.ca,pe.ca,qc.ca,sk.ca,yk.caac.cn,com.cn,edu.cn,gov.cn,org.cn,bj.cn,sh.cn,tj.cn,cq.cn,he.cn,nm.cn,ln.cnjl.cn,hl.cn,js.cn,zj.cn,ah.cn,gd.cn,gx.cn,hi.cn,sc.cn,gz.cn,yn.cn,xz.cn,sn.cngs.cn,qh.cn,nx.cn,xj.cn,tw.cn,hk.cn,mo.cn,com.ec,tm.fr,com.fr,asso.fr,presse.frco.il,net.il,ac.il,k12.il,gov.il,muni.il,ac.in,co.in,org.in,ernet.in,gov.innet.in,res.in,ac.jp,co.jp,go.jp,or.jp,ne.jp,ac.kr,co.kr,go.kr,ne.kr,nm.kr,or.krasso.mc,tm.mc,com.mm,org.mm,net.mm,edu.mm,gov.mm,org.ro,store.ro,tm.ro,firm.rowww.ro,arts.ro,rec.ro,info.ro,nom.ro,nt.ro,com.sg,org.sg,net.sg,gov.sg,ac.th,co.thgo.th,mi.th,net.th,or.th,com.tr,edu.tr,gov.tr,k12.tr,net.tr,org.tr,com.tw,org.twnet.tw,ac.uk,uk.com,uk.net,gb.com,gb.net,com.hk,org.hk,net.hk,edu.hk,eu.lv,co.nzorg.nz,net.nz,maori.nz,iwi.nz,com.pt,edu.pt,com.ve,net.ve,org.ve,web.ve,info.veco.ve,net.ru,org.ru,com.hr,tv.tr,com.qa,edu.qa,gov.qa,gov.au,com.my,edu.my,gov.myco.za,com.ar,com.pl,com.ua,biz.pl,biz.tr,co.gl,co.mg,co.ms,co.vi,co.za,com.agcom.ai,com.cy,com.de,com.do,com.es,com.fj,com.gl,com.gt,com.hu,com.kg,com.kicom.lc,com.mg,com.ms,com.mt,com.mu,com.mx,com.nf,com.ng,com.ni,com.pa,com.phcom.ro,com.ru,com.sb,com.sc,com.sv,de.com,de.org,firm.in,gen.in,idv.tw,ind.ininfo.pl,info.tr,kr.com,me.uk,net.ag,net.ai,net.cn,net.do,net.gl,net.kg,net.kinet.lc,net.mg,net.mu,net.ni,net.pl,net.sb,net.sc,nom.ni,off.ai,org.ag,org.aiorg.do,org.es,org.gl,org.kg,org.ki,org.lc,org.mg,org.ms,org.nf,org.ni,org.plorg.sb,org.sc,gov.tw".split(",");e=e.toLowerCase();var t=e.split("."),o=t.length;if(2>o)return e;var r=t.slice(-2).join(".");return o>=3&&i.inArray(r,n)>=0?t.slice(-3).join("."):r}function r(e,n){"localhost"==n||parseInt(n.split(".").slice(-1))||(n=o(n));for(var t=0,r=n.length-1;r>=0;r--)t+=2983723987*n.charCodeAt(r);for(t=(""+t).substring(0,7),r=0;r<e.length;r++)if(t===e[r].substring(1,8))return 1}var i=jQuery,a=e.conf,s=a.swf.indexOf("flowplayer.org")&&a.e&&n.data("origin"),l=s?t(s):location.hostname,c=a.key;if("file:"==location.protocol&&(l="localhost"),e.load.ed=1,a.hostname=l,a.origin=s||location.href,s&&n.addClass("is-embedded"),"string"==typeof c&&(c=c.split(/,\s*/)),c&&"function"==typeof r&&r(c,l))a.logo&&n.append(i("<a>",{"class":"fp-logo",href:s}).append(i("<img/>",{src:a.logo})));else{var d=i("<a/>").attr("href","http://flowplayer.org").appendTo(n);i(".fp-controls",n),e.bind("pause resume finish unload",function(e,n){var t=n.video.src?n.video.src.indexOf("://my.flowplayer.org"):-1;/pause|resume/.test(e.type)&&"flash"!=n.engine&&4!=t&&5!=t?(d.show().css({position:"absolute",left:16,bottom:36,zIndex:99999,width:100,height:20,backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"}),n.load.ed=d.is(":visible"),n.load.ed||n.pause()):d.hide()})}});
/*!** End file: flowplayer.min.js ***/
/*!** Begin file: affix.js ***/
/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/*!** End file: affix.js ***/
/*!** Begin file: alert.js ***/
/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/*!** End file: alert.js ***/
/*!** Begin file: button.js ***/
/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);
/*!** End file: button.js ***/
/*!** Begin file: carousel.js ***/
/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);
/*!** End file: carousel.js ***/
/*!** Begin file: collapse.js ***/
/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);
/*!** End file: collapse.js ***/
/*!** Begin file: dropdown.js ***/
/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);
/*!** End file: dropdown.js ***/
/*!** Begin file: modal.js ***/
/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
/*!** End file: modal.js ***/
/*!** Begin file: tooltip.js ***/
/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
/*!** End file: tooltip.js ***/
/*!** Begin file: popover.js ***/
/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);
/*!** End file: popover.js ***/
/*!** Begin file: scrollspy.js ***/
/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);
/*!** End file: scrollspy.js ***/
/*!** Begin file: tab.js ***/
/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);
/*!** End file: tab.js ***/
/*!** Begin file: transition.js ***/
/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
/*!** End file: transition.js ***/
/*!** Begin file: bostad_bootstrap-multiselect.js ***/
/**
 * bootstrap-multiselect.js
 * https://github.com/davidstutz/bootstrap-multiselect
 *
 * Copyright 2012, 2013 David Stutz
 *
 * Dual licensed under the BSD-3-Clause and the Apache License, Version 2.0.
 */
!function ($) {
    'use strict';

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {},
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var config = ko.utils.unwrapObservable(valueAccessor());
                var selectOptions = allBindingsAccessor().options;
                var ms = $(element).data('multiselect');

                if (!ms) {
                    $(element).multiselect(config);
                } else {
                    ms.updateOriginalOptions();
                    
                    if (selectOptions && selectOptions().length !== ms.originalOptions.length) {
                        $(element).multiselect('rebuild');
                    }
                }
            }
        };
    }

    /**
     * Constructor to create a new multiselect using the given select.
     * 
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.options = this.mergeOptions(options);
        this.$select = $(select);

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;

        this.options.multiple = this.$select.attr('multiple') === 'multiple';
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);

        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildSelectAll();
        this.buildDropdown();
        this.buildDropdownOptions();
        this.buildFilter();

        this.updateButtonText();
        this.updateSelectAll();

        this.$select.hide().after(this.$container);
    }

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length of 3 selected options.
             * 
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function (options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    if (options.length > this.numberDisplayed) {
                        return options.length + ' ' + this.nSelectedText;
                    }
                    else {
                        var selected = '';
                        options.each(function () {
                            var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                            selected += label + ', ';
                        });
                        return selected.substr(0, selected.length - 2);
                    }
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function (options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                } else {
                    var selected = '';
                    options.each(function () {
                        selected += $(this).text() + ', ';
                    });
                    return selected.substr(0, selected.length - 2);
                }
            },
            /**
             * Create a label.
             * 
             * @param {jQuery} element
             * @returns {String}
             */
            label: function (element) {
                return $(element).attr('label') || $(element).html();
            },
            /**
             * Triggered on change of the multiselect.
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange : function (option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             * 
             * @param {jQuery} event
             */
            onDropdownShow: function (event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             * 
             * @param {jQuery} event
             */
            onDropdownHide: function (event) {

            },
            buttonClass: 'btn btn-default',
            dropRight: false,
            selectedClass: 'active',
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            includeSelectAllOption: false,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            numberDisplayed: 3
        },

        templates: {
            button: '<button type="button" class="first multiselect dropdown-toggle" data-toggle="dropdown"></button><button type="button" class="last multiselect dropdown-toggle" data-toggle="dropdown"></button>',
            ul: '<ul class="multiselect-container dropdown-menu"></ul>',
            filter: '<div class="input-group"><span class="input-group-addon"><i class="blocket-icon blocket-icon-search"></i></span><input class="form-control multiselect-search" type="text"></div>',
            li: '<li><a href="javascript:void(0);"><label></label><span class="blocket-icon blocket-icon-check right"></span></a></li>',
            divider: '<li class="divider"></li>',
            liGroup: '<li><label class="multiselect-group"></label></li>',
            iconGlobe: '<span class="blocket-icon blocket-icon-globe"></span>'
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function () {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.toggleClass('multiple', this.options.multiple);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function () {
            this.$button = $(this.templates.button).addClass(this.options.buttonClass);

            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : this.options.buttonWidth
                });
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function () {

            // Build ul.
            this.$ul = $(this.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            this.$ul.toggleClass('multiple', this.options.multiple);

            this.$container.append(this.$ul);
        },

        /**
         * Build the dropdown options and binds all nessecary events.
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function () {

            this.$select.children().each($.proxy(function (index, element) {

                // Support optgroups and options without a group simultaneously.
                var tag = $(element).prop('tagName')
                .toLowerCase();

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($(element).data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element);
                    }

                }
                
                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function (event) {
                var checked = $(event.target).prop('checked') || false;
                var isSelectAllOption = $(event.target).val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $(event.target).parents('li')
                        .addClass(this.options.selectedClass);
                    }
                    else {
                        $(event.target).parents('li')
                        .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $(event.target).val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($(event.target));

                if (isSelectAllOption) {
                    if (this.$select[0][0].value === this.options.selectAllValue) {
                        var values = [];
                        var availableInputs = $('li input[value!="' + this.options.selectAllValue + '"][data-role!="divider"]', this.$ul).filter(':visible');
                        for (var i = 0, j = availableInputs.length; i < j; i++) {
                            values.push(availableInputs[i].value);
                        }

                        if (checked) {
                            this.select(values);
                        }
                        else {
                            this.deselect(values);
                        }
                    }
                }

                if (checked) {
                    $option.prop('selected', true);

                    if (this.options.multiple) {
                        // Simply select additional option.
                        $option.prop('selected', true);
                    }
                    else {
                        // Unselect all other options and corresponding checkboxes.
                        if (this.options.selectedClass) {
                            $($checkboxesNotThis).parents('li').removeClass(this.options.selectedClass);
                        }

                        $($checkboxesNotThis).prop('checked', false);
                        $optionsNotThis.prop('selected', false);

                        // It's a single selection, so close.
                        this.$button.click();
                    }

                    if (this.options.selectedClass === 'active') {
                        $optionsNotThis.parents('a').css('outline', '');
                    }
                }
                else {
                    // Unselect option.
                    $option.prop('selected', false);
                }

                this.$select.change();
                this.options.onChange($option, checked);
                
                this.updateButtonText();
                this.updateSelectAll();

                if (this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('li a', this.$ul).on('touchstart click', $.proxy(function (event) {
                event.stopPropagation();

                if (event.shiftKey) {
                    var checked = $(event.target).prop('checked') || false;

                    if (checked) {
                        var prev = $(event.target).parents('li:last').siblings('li[class="active"]:first'),
                            currentIdx = $(event.target).parents('li').index(),
                            prevIdx = prev.index(),
                            values = [],
                            untilDirection = currentIdx > prevIdx ? 'prevUntil' : 'nextUntil';

                        var updateOption = function () {
                            var value = $(this).find('input:first')[0].value;
                            values.push(value);
                        };

                        $(event.target).parents('li:last')[untilDirection](prev).each(updateOption);

                        this.select(values);

                        this.$select.change();
                    }
                }

                $(event.target).change();
            }, this));

            // Keyboard support.
            this.$container.on('keydown', $.proxy(function (event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
                }

                if ((event.keyCode === 9 || event.keyCode === 27) && this.$container.hasClass('open')) {
                    // Close on tab or escape.
                    this.$button.click();
                } else {
                    var $items = $(this.$container).find('li:not(.divider):visible a');

                    if (!$items.length) {
                        return;
                    }

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                    }
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                    }
                    else if (!~index) {
                        index = 0;
                    }

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop('checked', !$checkbox.prop('checked'));
                        $checkbox.change();
                    }

                    event.stopPropagation();
                    event.preventDefault();
                }
            }, this));
        },

        /**
         * Create an option using the given select option.
         * 
         * @param {jQuery} element
         */
        createOptionValue: function (element) {
            if ($(element).is(':selected')) {
                $(element).prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.label(element);
            var value = $(element).val();
            var inputType = this.options.multiple ? 'checkbox' : 'radio';

            var $li = $(this.templates.li);
            $li.addClass('value-' + value);
            $('label', $li).addClass(inputType);
            $('label', $li).append('<input type="' + inputType + '" />');

            var selected = $(element).prop('selected') || false;
            var $checkbox = $('input', $li);
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $checkbox.parent().parent()
                .addClass('multiselect-all');
            }

            $('label', $li).append(' ' + label);

            this.$ul.append($li);

            if ($(element).is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                .prop('disabled', true)
                .parents('li')
                .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.parents('li')
                .addClass(this.options.selectedClass);
            }

            if (value === '3080') {
                $('label', $li).prepend($(this.templates.iconGlobe));
            }
        },

        /**
         * Creates a divider using the given select option.
         * 
         * @param {jQuery} element
         */
        createDivider: function (element) {
            var $divider = $(this.templates.divider);
            this.$ul.append($divider);
        },

        /**
         * Creates an optgroup.
         * 
         * @param {jQuery} group
         */
        createOptgroup: function (group) {
            var groupName = $(group).prop('label');

            // Add a header for the group.
            var $li = $(this.templates.liGroup);
            $('label', $li).text(groupName);

            this.$ul.append($li);

            // Add the options of the group.
            $('option', group).each($.proxy(function (index, element) {
                this.createOptionValue(element);
            }, this));
        },

        /**
         * Build the selct all.
         * Checks if a select all ahs already been created.
         */
        buildSelectAll: function () {
            var alreadyHasSelectAll = this.hasSelectAll();
            
            // If options.includeSelectAllOption === true, add the include all checkbox.
            if (this.options.includeSelectAllOption && this.options.multiple && !alreadyHasSelectAll) {
                this.$select.prepend('<option value="' + this.options.selectAllValue + '">' + this.options.selectAllText + '</option>');
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function () {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);
                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function (event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function (event) {
                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function () {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                $.each($('li', this.$ul), $.proxy(function (index, element) {
                                    var value = $('input', element).val();
                                    var text = $('label', element).text();

                                    if (value !== this.options.selectAllValue && text) {
                                        // by default lets assume that element is not
                                        // interesting for this search
                                        var showElement = false;

                                        var filterCandidate = '';
                                        if ((this.options.filterBehavior === 'text' || this.options.filterBehavior === 'both')) {
                                            filterCandidate = text;
                                        }
                                        if ((this.options.filterBehavior === 'value' || this.options.filterBehavior === 'both')) {
                                            filterCandidate = value;
                                        }

                                        if (this.options.enableCaseInsensitiveFiltering && filterCandidate.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                            showElement = true;
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        if (showElement) {
                                            $(element).show();
                                        }
                                        else {
                                            $(element).hide();
                                        }
                                    }
                                }, this));
                            }

                            // TODO: check whether select all option needs to be updated.
                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function () {
            this.$container.remove();
            this.$select.show();
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function () {
            $('option', this.$select).each($.proxy(function (index, element) {
                var $input = $('li input', this.$ul).filter(function () {
                    return $(this).val() === $(element).val();
                });

                if ($(element).is(':selected')) {
                    $input.prop('checked', true);

                    if (this.options.selectedClass) {
                        $input.parents('li')
                        .addClass(this.options.selectedClass);
                    }
                }
                else {
                    $input.prop('checked', false);

                    if (this.options.selectedClass) {
                        $input.parents('li')
                        .removeClass(this.options.selectedClass);
                    }
                }

                if ($(element).is(':disabled')) {
                    $input.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .parents('li')
                    .addClass('disabled');
                }
                else {
                    $input.prop('disabled', false)
                    .parents('li')
                    .removeClass('disabled');
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * Select all options of the given values.
         * 
         * @param {Array} selectValues
         */
        select: function (selectValues) {
            if (selectValues && !$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if (this.options.selectedClass) {
                    $checkbox.parents('li')
                    .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
            }

            this.updateButtonText();
        },

        /**
         * Deselects all options of the given values.
         * 
         * @param {Array} deselectValues
         */
        deselect: function (deselectValues) {
            if (deselectValues && !$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {

                var value = deselectValues[i];

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if (this.options.selectedClass) {
                    $checkbox.parents('li')
                    .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
            }

            this.updateButtonText();
        },

        /**
         * Rebuild the plugin.
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function () {
            this.$ul.html('');

            // Remove select all option in select.
            $('option[value="' + this.options.selectAllValue + '"]', this.$select).remove();

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === 'multiple';

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();
            
            this.updateButtonText();
            this.updateSelectAll();
        },

        /**
         * The provided data will be used to build the dropdown.
         * 
         * @param {Array} dataprovider
         */
        dataprovider: function (dataprovider) {
            var optionDOM = '';
            dataprovider.forEach(function (option) {
                optionDOM += '<option value="' + option.value + '">' + option.label + '</option>';
            });

            this.$select.html(optionDOM);
            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function () {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
            .removeClass('disabled');
        },

        /**
         * Disable the multiselect.
         */
        disable: function () {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
            .addClass('disabled');
        },

        /**
         * Set the options.
         * 
         * @param {Array} options
         */
        setOptions: function (options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         * 
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function (options) {
            return $.extend({}, this.defaults, options);
        },
        
        /**
         * Checks whether a select all option is present.
         * 
         * @returns {Boolean}
         */
        hasSelectAll: function () {
            return this.$select[0][0] ? this.$select[0][0].value === this.options.selectAllValue : false;
        },
        
        /**
         * Updates the select all option based on the currently selected options.
         */
        updateSelectAll: function () {
            if (this.hasSelectAll()) {
                var selected = this.getSelected();
                
                if (selected.length === $('option', this.$select).length - 1) {
                    this.select(this.options.selectAllValue);
                }
                else {
                    this.deselect(this.options.selectAllValue);
                }
            }
        },
        
        /**
         * Update the button text and its title base don the currenty selected options.
         */
        updateButtonText: function () {
            var options = this.getSelected();
            
            // First update the displayed button text.
            $('button:first', this.$container).html(this.options.buttonText(options, this.$select));
            
            // Now update the title attribute of the button.
            $('button:first', this.$container).attr('title', this.options.buttonTitle(options, this.$select));

            $('button:last', this.$container).html('<b class="caret"></b>');
        },

        /**
         * Get all selected options.
         * 
         * @returns {jQUery}
         */
        getSelected: function () {
            return $('option[value!="' + this.options.selectAllValue + '"]:selected', this.$select).filter(function () {
                return $(this).prop('selected');
            });
        },

        /**
         * Gets a select option by its value.
         * 
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {
            return $('option', this.$select).filter(function () {
                return $(this).val() === value;
            });
        },

        /**
         * Get the input (radio/checkbox) by its value.
         * 
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {
            return $('li input', this.$ul).filter(function () {
                return $(this).val() === value;
            });
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function () {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function (callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function () {
                callback.apply(self || window, args);
            }, timeout);
        }
    };

    $.fn.multiselect = function (option, parameter) {
        return this.each(function () {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                $(this).data('multiselect', (data = new Multiselect(this, options)));
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter);
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function () {
        $('select[data-role=multiselect]').multiselect();
    });

}(window.jQuery);
/*!** End file: bostad_bootstrap-multiselect.js ***/
/*!** Begin file: typeahead.bundle.js ***/
/*!
 * typeahead.js 0.10.2
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
    var _ = {
        isMsie: function() {
            return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
        },
        isBlankString: function(str) {
            return !str || /^\s*$/.test(str);
        },
        escapeRegExChars: function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        isString: function(obj) {
            return typeof obj === "string";
        },
        isNumber: function(obj) {
            return typeof obj === "number";
        },
        isArray: $.isArray,
        isFunction: $.isFunction,
        isObject: $.isPlainObject,
        isUndefined: function(obj) {
            return typeof obj === "undefined";
        },
        bind: $.proxy,
        each: function(collection, cb) {
            $.each(collection, reverseArgs);
            function reverseArgs(index, value) {
                return cb(value, index);
            }
        },
        map: $.map,
        filter: $.grep,
        every: function(obj, test) {
            var result = true;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (!(result = test.call(null, val, key, obj))) {
                    return false;
                }
            });
            return !!result;
        },
        some: function(obj, test) {
            var result = false;
            if (!obj) {
                return result;
            }
            $.each(obj, function(key, val) {
                if (result = test.call(null, val, key, obj)) {
                    return false;
                }
            });
            return !!result;
        },
        mixin: $.extend,
        getUniqueId: function() {
            var counter = 0;
            return function() {
                return counter++;
            };
        }(),
        templatify: function templatify(obj) {
            return $.isFunction(obj) ? obj : template;
            function template() {
                return String(obj);
            }
        },
        defer: function(fn) {
            setTimeout(fn, 0);
        },
        debounce: function(func, wait, immediate) {
            var timeout, result;
            return function() {
                var context = this, args = arguments, later, callNow;
                later = function() {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            };
        },
        throttle: function(func, wait) {
            var context, args, timeout, result, previous, later;
            previous = 0;
            later = function() {
                previous = new Date();
                timeout = null;
                result = func.apply(context, args);
            };
            return function() {
                var now = new Date(), remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        noop: function() {}
    };
    var VERSION = "0.10.2";
    var tokenizers = function(root) {
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        };
        function whitespace(s) {
            return s.split(/\s+/);
        }
        function nonword(s) {
            return s.split(/\W+/);
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(key) {
                return function tokenize(o) {
                    return tokenizer(o[key]);
                };
            };
        }
    }();
    var LruCache = function() {
        function LruCache(maxSize) {
            this.maxSize = maxSize || 100;
            this.size = 0;
            this.hash = {};
            this.list = new List();
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
        } catch (err) {
            ls = null;
        }
        function PersistentStorage(namespace) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + this.prefix);
        }
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
                },
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
                },
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                    }
                    return decode(ls.getItem(this._prefix(key)));
                },
                set: function(key, val, ttl) {
                    if (_.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                    } else {
                        ls.removeItem(this._ttlKey(key));
                    }
                    return ls.setItem(this._prefix(key), encode(val));
                },
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
                },
                clear: function() {
                    var i, key, keys = [], len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                        }
                    }
                    for (i = keys.length; i--; ) {
                        this.remove(keys[i]);
                    }
                    return this;
                },
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return _.isNumber(ttl) && now() > ttl ? true : false;
                }
            };
        } else {
            methods = {
                get: _.noop,
                set: _.noop,
                remove: _.noop,
                clear: _.noop,
                isExpired: _.noop
            };
        }
        _.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return JSON.parse(val);
        }
    }();
    var Transport = function() {
        var pendingRequestsCount = 0, pendingRequests = {}, maxPendingRequests = 6, requestCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
        };
        Transport.resetCache = function clearCache() {
            requestCache = new LruCache(10);
        };
        _.mixin(Transport.prototype, {
            _get: function(url, o, cb) {
                var that = this, jqXhr;
                if (jqXhr = pendingRequests[url]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb && cb(null, resp);
                    requestCache.set(url, resp);
                }
                function fail() {
                    cb && cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[url];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(url, o, cb) {
                var resp;
                if (_.isFunction(o)) {
                    cb = o;
                    o = {};
                }
                if (resp = requestCache.get(url)) {
                    _.defer(function() {
                        cb && cb(null, resp);
                    });
                } else {
                    this._get(url, o, cb);
                }
                return !!resp;
            }
        });
        return Transport;
        function callbackToDeferred(fn) {
            return function customSendWrapper(url, o) {
                var deferred = $.Deferred();
                fn(url, o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var SearchIndex = function() {
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    id = that.datums.push(datum) - 1;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node.children[ch] || (node.children[ch] = newNode());
                            node.ids.push(id);
                        }
                    });
                });
            },
            get: function get(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node.children[ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node.ids.slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        matches = [];
                        return false;
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            reset: function reset() {
                this.datums = [];
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            return {
                ids: [],
                children: {}
            };
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0; i < array.length; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort(compare);
            arrayB = arrayB.sort(compare);
            while (ai < arrayA.length && bi < arrayB.length) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
            function compare(a, b) {
                return a - b;
            }
        }
    }();
    var oParser = function() {
        return {
            local: getLocal,
            prefetch: getPrefetch,
            remote: getRemote
        };
        function getLocal(o) {
            return o.local || null;
        }
        function getPrefetch(o) {
            var prefetch, defaults;
            defaults = {
                url: null,
                thumbprint: "",
                ttl: 24 * 60 * 60 * 1e3,
                filter: null,
                ajax: {}
            };
            if (prefetch = o.prefetch || null) {
                prefetch = _.isString(prefetch) ? {
                    url: prefetch
                } : prefetch;
                prefetch = _.mixin(defaults, prefetch);
                prefetch.thumbprint = VERSION + prefetch.thumbprint;
                prefetch.ajax.type = prefetch.ajax.type || "GET";
                prefetch.ajax.dataType = prefetch.ajax.dataType || "json";
                !prefetch.url && $.error("prefetch requires url to be set");
            }
            return prefetch;
        }
        function getRemote(o) {
            var remote, defaults;
            defaults = {
                url: null,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            };
            if (remote = o.remote || null) {
                remote = _.isString(remote) ? {
                    url: remote
                } : remote;
                remote = _.mixin(defaults, remote);
                remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait) : byDebounce(remote.rateLimitWait);
                remote.ajax.type = remote.ajax.type || "GET";
                remote.ajax.dataType = remote.ajax.dataType || "json";
                delete remote.rateLimitBy;
                delete remote.rateLimitWait;
                !remote.url && $.error("remote requires url to be set");
            }
            return remote;
            function byDebounce(wait) {
                return function(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function byThrottle(wait) {
                return function(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
    }();
    (function(root) {
        var old, keys;
        old = root.Bloodhound;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        root.Bloodhound = Bloodhound;
        function Bloodhound(o) {
            if (!o || !o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
            }
            this.limit = o.limit || 5;
            this.sorter = getSorter(o.sorter);
            this.dupDetector = o.dupDetector || ignoreDuplicates;
            this.local = oParser.local(o);
            this.prefetch = oParser.prefetch(o);
            this.remote = oParser.remote(o);
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
            this.index = new SearchIndex({
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;
        }
        Bloodhound.noConflict = function noConflict() {
            root.Bloodhound = old;
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            _loadPrefetch: function loadPrefetch(o) {
                var that = this, serialized, deferred;
                if (serialized = this._readFromStorage(o.thumbprint)) {
                    this.index.bootstrap(serialized);
                    deferred = $.Deferred().resolve();
                } else {
                    deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);
                }
                return deferred;
                function handlePrefetchResponse(resp) {
                    that.clear();
                    that.add(o.filter ? o.filter(resp) : resp);
                    that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);
                }
            },
            _getFromRemote: function getFromRemote(query, cb) {
                var that = this, url, uriEncodedQuery;
                query = query || "";
                uriEncodedQuery = encodeURIComponent(query);
                url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(this.remote.wildcard, uriEncodedQuery);
                return this.transport.get(url, this.remote.ajax, handleRemoteResponse);
                function handleRemoteResponse(err, resp) {
                    err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);
                }
            },
            _saveToStorage: function saveToStorage(data, thumbprint, ttl) {
                if (this.storage) {
                    this.storage.set(keys.data, data, ttl);
                    this.storage.set(keys.protocol, location.protocol, ttl);
                    this.storage.set(keys.thumbprint, thumbprint, ttl);
                }
            },
            _readFromStorage: function readFromStorage(thumbprint) {
                var stored = {}, isExpired;
                if (this.storage) {
                    stored.data = this.storage.get(keys.data);
                    stored.protocol = this.storage.get(keys.protocol);
                    stored.thumbprint = this.storage.get(keys.thumbprint);
                }
                isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            _initialize: function initialize() {
                var that = this, local = this.local, deferred;
                deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();
                local && deferred.done(addLocalToIndex);
                this.transport = this.remote ? new Transport(this.remote) : null;
                return this.initPromise = deferred.promise();
                function addLocalToIndex() {
                    that.add(_.isFunction(local) ? local() : local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
            },
            get: function get(query, cb) {
                var that = this, matches = [], cacheHit = false;
                matches = this.index.get(query);
                matches = this.sorter(matches).slice(0, this.limit);
                if (matches.length < this.limit && this.transport) {
                    cacheHit = this._getFromRemote(query, returnRemoteMatches);
                }
                if (!cacheHit) {
                    (matches.length > 0 || !this.transport) && cb && cb(matches);
                }
                function returnRemoteMatches(remoteMatches) {
                    var matchesWithBackfill = matches.slice(0);
                    _.each(remoteMatches, function(remoteMatch) {
                        var isDuplicate;
                        isDuplicate = _.some(matchesWithBackfill, function(match) {
                            return that.dupDetector(remoteMatch, match);
                        });
                        !isDuplicate && matchesWithBackfill.push(remoteMatch);
                        return matchesWithBackfill.length < that.limit;
                    });
                    cb && cb(that.sorter(matchesWithBackfill));
                }
            },
            clear: function clear() {
                this.index.reset();
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.storage && this.storage.clear();
            },
            clearRemoteCache: function clearRemoteCache() {
                this.transport && Transport.resetCache();
            },
            ttAdapter: function ttAdapter() {
                return _.bind(this.get, this);
            }
        });
        return Bloodhound;
        function getSorter(sortFn) {
            return _.isFunction(sortFn) ? sort : noSort;
            function sort(array) {
                return array.sort(sortFn);
            }
            function noSort(array) {
                return array;
            }
        }
        function ignoreDuplicates() {
            return false;
        }
    })(this);
    var html = {
        wrapper: '<span class="twitter-typeahead"></span>',
        dropdown: '<span class="tt-dropdown-menu"></span>',
        dataset: '<div class="tt-dataset-%CLASS%"></div>',
        suggestions: '<span class="tt-suggestions"></span>',
        suggestion: '<div class="tt-suggestion"></div>'
    };
    var css = {
        wrapper: {
            position: "relative",
            display: "inline-block"
        },
        hint: {
            position: "absolute",
            top: "0",
            left: "0",
            borderColor: "transparent",
            boxShadow: "none"
        },
        input: {
            position: "relative",
            verticalAlign: "top",
            backgroundColor: "transparent"
        },
        inputWithNoHint: {
            position: "relative",
            verticalAlign: "top"
        },
        dropdown: {
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "100",
            display: "none"
        },
        suggestions: {
            display: "block"
        },
        suggestion: {
            whiteSpace: "nowrap",
            cursor: "pointer"
        },
        suggestionChild: {
            whiteSpace: "normal"
        },
        ltr: {
            left: "0",
            right: "auto"
        },
        rtl: {
            left: "auto",
            right: " 0"
        }
    };
    if (_.isMsie()) {
        _.mixin(css.input, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        });
    }
    if (_.isMsie() && _.isMsie() <= 7) {
        _.mixin(css.input, {
            marginTop: "-1px"
        });
    }
    var EventBus = function() {
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0; !cancelled && i < callbacks.length; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0; i < patterns.length; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o) {
            var that = this, onBlur, onFocus, onKeydown, onInput;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
            } else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                    }
                    _.defer(_.bind(that._onInput, that, $e));
                });
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._checkInputValue();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                  case "tab":
                    hintValue = this.getHint();
                    inputValue = this.getInputValue();
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                    break;

                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query = inputValue);
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getQuery: function getQuery() {
                return this.query;
            },
            setQuery: function setQuery(query) {
                this.query = query;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";
        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                $.error("missing source");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
        };
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
        };
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
                }
                var that = this, hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
                }
                this.trigger("rendered");
                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                    });
                }
                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        node: $suggestions[0],
                        pattern: query
                    });
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                        });
                        return $el;
                    }
                }
                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                    });
                }
            },
            getRoot: function getRoot() {
                return this.$el;
            },
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);
                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                    }
                }
            },
            cancel: function cancel() {
                this.canceled = true;
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = null;
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Dropdown = function() {
        function Dropdown(o) {
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                $.error("menu is required");
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
            });
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
            },
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
                }
            },
            _hide: function() {
                this.$menu.hide();
            },
            _show: function() {
                this.$menu.css("display", "block");
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
            },
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
            },
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    };
                }
                return datum;
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
            },
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Dropdown;
        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
        }
    }();
    var Typeahead = function() {
        var attrsKey = "ttAttrs";
        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDomStructure(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
            $input.on("blur.tt", function($e) {
                var active, isActive, hasActive;
                active = document.activeElement;
                isActive = $menu.is(active);
                hasActive = $menu.has(active).length > 0;
                if (_.isMsie() && (isActive || hasActive)) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus();
                    });
                }
            });
            $menu.on("mousedown.tt", function($e) {
                $e.preventDefault();
            });
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
        }
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
                }
            },
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
            },
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
                } else {
                    this._autocomplete(true);
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
            },
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
            },
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
                }
            },
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
                } else {
                    this.input.clearHint();
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
                }
            },
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
            },
            open: function open() {
                this.dropdown.open();
            },
            close: function close() {
                this.dropdown.close();
            },
            setVal: function setVal(val) {
                if (this.isActivated) {
                    this.input.setInputValue(val);
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
                }
                this._setLanguageDirection();
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
            }
        });
        return Typeahead;
        function buildDomStructure(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", true).attr({
                autocomplete: "off",
                spellcheck: "false"
            });
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
            }).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
        }
    }();
    (function() {
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                return this.each(attach);
                function attach() {
                    var $input = $(this), eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                        }),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                    });
                    $input.data(typeaheadKey, typeahead);
                }
            },
            open: function open() {
                return this.each(openTypeahead);
                function openTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                    }
                }
            },
            close: function close() {
                return this.each(closeTypeahead);
                function closeTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                    }
                }
            },
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);
                function setVal() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                    }
                }
                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                    }
                    return query;
                }
            },
            destroy: function destroy() {
                return this.each(unattach);
                function unattach() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                    }
                }
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
    })();
})(window.jQuery);/*!** End file: typeahead.bundle.js ***/
/*!** Begin file: bootstrap-tagsinput.js ***/
(function ($) {
  "use strict";

  var defaultOptions = {
    tagClass: function(item) {
      return 'label label-info';
    },
    itemValue: function(item) {
      return item ? item.toString() : item;
    },
    itemText: function(item) {
      return this.itemValue(item);
    },
    freeInput: true,
    maxTags: undefined,
    confirmKeys: [13],
    onTagExists: function(item, $tag) {
      $tag.hide().fadeIn();
    }
  };

  /**
   * Constructor function
   */
  function TagsInput(element, options) {
    this.itemsArray = [];

    this.$element = $(element);
    this.$element.hide();

    this.isSelect = (element.tagName === 'SELECT');
    this.multiple = (this.isSelect && element.hasAttribute('multiple'));
    this.objectItems = options && options.itemValue;
    this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';
    this.inputSize = Math.max(1, this.placeholderText.length);

    this.$container = $('<div class="bootstrap-tagsinput"></div>');
    this.$input = $('<input size="' + this.inputSize + '" type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);

    this.$element.after(this.$container);

    this.build(options);
  }

  TagsInput.prototype = {
    constructor: TagsInput,

    /**
     * Adds the given item as a new tag. Pass true to dontPushVal to prevent
     * updating the elements val()
     */
    add: function(item, dontPushVal) {
      var self = this;

      if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
        return;

      // Ignore falsey values, except false
      if (item !== false && !item)
        return;

      // Throw an error when trying to add an object while the itemValue option was not set
      if (typeof item === "object" && !self.objectItems)
        throw("Can't add objects when itemValue option is not set");

      // Ignore strings only containg whitespace
      if (item.toString().match(/^\s*$/))
        return;

      // If SELECT but not multiple, remove current tag
      if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
        self.remove(self.itemsArray[0]);

      if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
        var items = item.split(',');
        if (items.length > 1) {
          for (var i = 0; i < items.length; i++) {
            this.add(items[i], true);
          }

          if (!dontPushVal)
            self.pushVal();
          return;
        }
      }

      var itemValue = self.options.itemValue(item),
          itemText = self.options.itemText(item),
          tagClass = self.options.tagClass(item);

      // Ignore items allready added
      var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];
      if (existing) {
        // Invoke onTagExists
        if (self.options.onTagExists) {
          var $existingTag = $(".tag", self.$container).filter(function() { return $(this).data("item") === existing; });
          self.options.onTagExists(item, $existingTag);
        }
        return;
      }

      // register item in internal array and map
      self.itemsArray.push(item);

      // add a tag element
      var $tag = $('<span class="tag ' + htmlEncode(tagClass) + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
      $tag.data('item', item);
      self.findInputWrapper().before($tag);
      $tag.after(' ');

      // add <option /> if item represents a value not present in one of the <select />'s options
      if (self.isSelect && !$('option[value="' + escape(itemValue) + '"]',self.$element)[0]) {
        var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
        $option.data('item', item);
        $option.attr('value', itemValue);
        self.$element.append($option);
      }

      if (!dontPushVal)
        self.pushVal();

      // Add class when reached maxTags
      if (self.options.maxTags === self.itemsArray.length)
        self.$container.addClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemAdded', { item: item }));
    },

    /**
     * Removes the given item. Pass true to dontPushVal to prevent updating the
     * elements val()
     */
    remove: function(item, dontPushVal) {
      var self = this;

      if (self.objectItems) {
        if (typeof item === "object")
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  self.options.itemValue(item); } )[0];
        else
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  item; } )[0];
      }

      if (item) {
        $('.tag', self.$container).filter(function() { return $(this).data('item') === item; }).remove();
        $('option', self.$element).filter(function() { return $(this).data('item') === item; }).remove();
        self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
      }

      if (!dontPushVal)
        self.pushVal();

      // Remove class when reached maxTags
      if (self.options.maxTags > self.itemsArray.length)
        self.$container.removeClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemRemoved',  { item: item }));
    },

    /**
     * Removes all items
     */
    removeAll: function() {
      var self = this;

      $('.tag', self.$container).remove();
      $('option', self.$element).remove();

      while(self.itemsArray.length > 0)
        self.itemsArray.pop();

      self.pushVal();
    },

    /**
     * Refreshes the tags so they match the text/value of their corresponding
     * item.
     */
    refresh: function() {
      var self = this;
      $('.tag', self.$container).each(function() {
        var $tag = $(this),
            item = $tag.data('item'),
            itemValue = self.options.itemValue(item),
            itemText = self.options.itemText(item),
            tagClass = self.options.tagClass(item);

          // Update tag's class and inner text
          $tag.attr('class', null);
          $tag.addClass('tag ' + htmlEncode(tagClass));
          $tag.contents().filter(function() {
            return this.nodeType == 3;
          })[0].nodeValue = htmlEncode(itemText);

          if (self.isSelect) {
            var option = $('option', self.$element).filter(function() { return $(this).data('item') === item; });
            option.attr('value', itemValue);
          }
      });
    },

    /**
     * Returns the items added as tags
     */
    items: function() {
      return this.itemsArray;
    },

    /**
     * Assembly value by retrieving the value of each item, and set it on the
     * element. 
     */
    pushVal: function() {
      var self = this,
          val = $.map(self.items(), function(item) {
            return self.options.itemValue(item).toString();
          });

      self.$element.val(val, true).trigger('change');
    },

    /**
     * Initializes the tags input behaviour on the element
     */
    build: function(options) {
      var self = this;

      self.options = $.extend({}, defaultOptions, options);
      var typeahead = self.options.typeahead || {};

      // When itemValue is set, freeInput should always be false
      if (self.objectItems)
        self.options.freeInput = false;

      makeOptionItemFunction(self.options, 'itemValue');
      makeOptionItemFunction(self.options, 'itemText');
      makeOptionItemFunction(self.options, 'tagClass');

      // for backwards compatibility, self.options.source is deprecated
      if (self.options.source)
        typeahead.source = self.options.source;

      if (typeahead.source && $.fn.typeahead) {
        makeOptionFunction(typeahead, 'source');

        self.$input.typeahead({
          source: function (query, process) {
            function processItems(items) {
              var texts = [];

              for (var i = 0; i < items.length; i++) {
                var text = self.options.itemText(items[i]);
                map[text] = items[i];
                texts.push(text);
              }
              process(texts);
            }

            this.map = {};
            var map = this.map,
                data = typeahead.source(query);

            if ($.isFunction(data.success)) {
              // support for Angular promises
              data.success(processItems);
            } else {
              // support for functions and jquery promises
              $.when(data)
               .then(processItems);
            }
          },
          updater: function (text) {
            self.add(this.map[text]);
          },
          matcher: function (text) {
            return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
          },
          sorter: function (texts) {
            return texts.sort();
          },
          highlighter: function (text) {
            var regex = new RegExp( '(' + this.query + ')', 'gi' );
            return text.replace( regex, "<strong>$1</strong>" );
          }
        });
      }

      self.$container.on('click', $.proxy(function(event) {
        self.$input.focus();
      }, self));

      self.$container.on('keydown', 'input', $.proxy(function(event) {
        var $input = $(event.target),
            $inputWrapper = self.findInputWrapper();

        switch (event.which) {
          // BACKSPACE
          case 8:
            if (doGetCaretPosition($input[0]) === 0) {
              var prev = $inputWrapper.prev();
              if (prev) {
                self.remove(prev.data('item'));
              }
            }
            break;

          // DELETE
          case 46:
            if (doGetCaretPosition($input[0]) === 0) {
              var next = $inputWrapper.next();
              if (next) {
                self.remove(next.data('item'));
              }
            }
            break;

          // LEFT ARROW
          case 37:
            // Try to move the input before the previous tag
            var $prevTag = $inputWrapper.prev();
            if ($input.val().length === 0 && $prevTag[0]) {
              $prevTag.before($inputWrapper);
              $input.focus();
            }
            break;
          // RIGHT ARROW
          case 39:
            // Try to move the input after the next tag
            var $nextTag = $inputWrapper.next();
            if ($input.val().length === 0 && $nextTag[0]) {
              $nextTag.after($inputWrapper);
              $input.focus();
            }
            break;
         default:
            // When key corresponds one of the confirmKeys, add current input
            // as a new tag
            if (self.options.freeInput && $.inArray(event.which, self.options.confirmKeys) >= 0) {
              self.add($input.val());
              $input.val('');
              event.preventDefault();
            }
        }

        // Reset internal input's size
        $input.attr('size', Math.max(this.inputSize, $input.val().length));
      }, self));

      // Remove icon clicked
      self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
        self.remove($(event.target).closest('.tag').data('item'));
      }, self));

      // Only add existing value as tags when using strings as tags
      if (self.options.itemValue === defaultOptions.itemValue) {
        if (self.$element[0].tagName === 'INPUT') {
            self.add(self.$element.val());
        } else {
          $('option', self.$element).each(function() {
            self.add($(this).attr('value'), true);
          });
        }
      }
    },

    /**
     * Removes all tagsinput behaviour and unregsiter all event handlers
     */
    destroy: function() {
      var self = this;

      // Unbind events
      self.$container.off('keypress', 'input');
      self.$container.off('click', '[role=remove]');

      self.$container.remove();
      self.$element.removeData('tagsinput');
      self.$element.show();
    },

    /**
     * Sets focus on the tagsinput 
     */
    focus: function() {
      this.$input.focus();
    },

    /**
     * Returns the internal input element
     */
    input: function() {
      return this.$input;
    },

    /**
     * Returns the element which is wrapped around the internal input. This
     * is normally the $container, but typeahead.js moves the $input element.
     */
    findInputWrapper: function() {
      var elt = this.$input[0],
          container = this.$container[0];
      while(elt && elt.parentNode !== container)
        elt = elt.parentNode;

      return $(elt);
    }
  };

  /**
   * Register JQuery plugin
   */
  $.fn.tagsinput = function(arg1, arg2) {
    var results = [];

    this.each(function() {
      var tagsinput = $(this).data('tagsinput');

      // Initialize a new tags input
      if (!tagsinput) {
        tagsinput = new TagsInput(this, arg1);
        $(this).data('tagsinput', tagsinput);
        results.push(tagsinput);

        if (this.tagName === 'SELECT') {
          $('option', $(this)).attr('selected', 'selected');
        }

        // Init tags from $(this).val()
        $(this).val($(this).val());
      } else {
        // Invoke function on existing tags input
        var retVal = tagsinput[arg1](arg2);
        if (retVal !== undefined)
          results.push(retVal);
      }
    });

    if ( typeof arg1 == 'string') {
      // Return the results from the invoked function calls
      return results.length > 1 ? results : results[0];
    } else {
      return results;
    }
  };

  $.fn.tagsinput.Constructor = TagsInput;
  
  /**
   * Most options support both a string or number as well as a function as 
   * option value. This function makes sure that the option with the given
   * key in the given options is wrapped in a function
   */
  function makeOptionItemFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var propertyName = options[key];
      options[key] = function(item) { return item[propertyName]; };
    }
  }
  function makeOptionFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var value = options[key];
      options[key] = function() { return value; };
    }
  }
  /**
   * HtmlEncodes the given value
   */
  var htmlEncodeContainer = $('<div />');
  function htmlEncode(value) {
    if (value) {
      return htmlEncodeContainer.text(value).html();
    } else {
      return '';
    }
  }

  /**
   * Returns the position of the caret in the given input field
   * http://flightschool.acylt.com/devnotes/caret-position-woes/
   */
  function doGetCaretPosition(oField) {
    var iCaretPos = 0;
    if (document.selection) {
      oField.focus ();
      var oSel = document.selection.createRange();
      oSel.moveStart ('character', -oField.value.length);
      iCaretPos = oSel.text.length;
    } else if (oField.selectionStart || oField.selectionStart == '0') {
      iCaretPos = oField.selectionStart;
    }
    return (iCaretPos);
  }

  /**
   * Initialize tagsinput behaviour on inputs and selects which have
   * data-role=tagsinput
   */
  $(function() {
    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
  });
})(window.jQuery);

/*!** End file: bootstrap-tagsinput.js ***/
/*!** Begin file: readmore.js ***/
/*!
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 */

;(function($) {

  var readmore = 'readmore',
      defaults = {
        speed: 100,
        maxHeight: 200,
        heightMargin: 16,
        moreLink: '<a href="#">Read More</a>',
        lessLink: '<a href="#">Close</a>',
        embedCSS: true,
        sectionCSS: 'display: block; width: 100%;',
        startOpen: false,
        expandedClass: 'readmore-js-expanded',
        collapsedClass: 'readmore-js-collapsed',

        // callbacks
        beforeToggle: function(){},
        afterToggle: function(){}
      },
      cssEmbedded = false;

  function Readmore( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options);

    $(this.element).data('max-height', this.options.maxHeight);
    $(this.element).data('height-margin', this.options.heightMargin);

    delete(this.options.maxHeight);

    if(this.options.embedCSS && ! cssEmbedded) {
      var styles = '.readmore-js-toggle, .readmore-js-section { ' + this.options.sectionCSS + ' } .readmore-js-section { overflow: hidden; }';

      (function(d,u) {
        var css=d.createElement('style');
        css.type = 'text/css';
        if(css.styleSheet) {
            css.styleSheet.cssText = u;
        }
        else {
            css.appendChild(d.createTextNode(u));
        }
        d.getElementsByTagName('head')[0].appendChild(css);
      }(document, styles));

      cssEmbedded = true;
    }

    this._defaults = defaults;
    this._name = readmore;

    this.init();
  }

  Readmore.prototype = {

    init: function() {
      var $this = this;

      $(this.element).each(function() {
        var current = $(this),
            maxHeight = (current.css('max-height').replace(/[^-\d\.]/g, '') > current.data('max-height')) ? current.css('max-height').replace(/[^-\d\.]/g, '') : current.data('max-height'),
            heightMargin = current.data('height-margin');

        if(current.css('max-height') != 'none') {
          current.css('max-height', 'none');
        }

        $this.setBoxHeight(current);

        if(current.outerHeight(true) <= maxHeight + heightMargin) {
          // The block is shorter than the limit, so there's no need to truncate it.
          return true;
        }
        else {
          current.addClass('readmore-js-section ' + $this.options.collapsedClass).data('collapsedHeight', maxHeight);

          var useLink = $this.options.startOpen ? $this.options.lessLink : $this.options.moreLink;
          current.after($(useLink).on('click', function(event) { $this.toggleSlider(this, current, event) }).addClass('readmore-js-toggle'));

          if(!$this.options.startOpen) {
            current.css({height: maxHeight});
          }
        }
      });

      $(window).on('resize', function(event) {
        $this.resizeBoxes();
      });
    },

    toggleSlider: function(trigger, element, event)
    {
      event.preventDefault();

      var $this = this,
          newHeight = newLink = sectionClass = '',
          expanded = false,
          collapsedHeight = $(element).data('collapsedHeight');

      if ($(element).height() <= collapsedHeight) {
        newHeight = $(element).data('expandedHeight') + 'px';
        newLink = 'lessLink';
        expanded = true;
        sectionClass = $this.options.expandedClass;
      }

      else {
        newHeight = collapsedHeight;
        newLink = 'moreLink';
        sectionClass = $this.options.collapsedClass;
      }

      // Fire beforeToggle callback
      $this.options.beforeToggle(trigger, element, expanded);

      $(element).animate({'height': newHeight}, {duration: $this.options.speed, complete: function() {
          // Fire afterToggle callback
          $this.options.afterToggle(trigger, element, expanded);

          $(trigger).replaceWith($($this.options[newLink]).on('click', function(event) { $this.toggleSlider(this, element, event) }).addClass('readmore-js-toggle'));

          $(this).removeClass($this.options.collapsedClass + ' ' + $this.options.expandedClass).addClass(sectionClass);
        }
      });
    },

    setBoxHeight: function(element) {
      var el = element.clone().css({'height': 'auto', 'width': element.width(), 'overflow': 'hidden'}).insertAfter(element),
          height = el.outerHeight(true);

      el.remove();

      element.data('expandedHeight', height);
    },

    resizeBoxes: function() {
      var $this = this;

      $('.readmore-js-section').each(function() {
        var current = $(this);

        $this.setBoxHeight(current);

        if(current.height() > current.data('expandedHeight') || (current.hasClass($this.options.expandedClass) && current.height() < current.data('expandedHeight')) ) {
          current.css('height', current.data('expandedHeight'));
        }
      });
    },

    destroy: function() {
      var $this = this;

      $(this.element).each(function() {
        var current = $(this);

        current.removeClass('readmore-js-section ' + $this.options.collapsedClass + ' ' + $this.options.expandedClass).css({'max-height': '', 'height': 'auto'}).next('.readmore-js-toggle').remove();

        current.removeData();
      });
    }
  };

  $.fn[readmore] = function( options ) {
    var args = arguments;
    if (options === undefined || typeof options === 'object') {
      return this.each(function () {
        if ($.data(this, 'plugin_' + readmore)) {
          var instance = $.data(this, 'plugin_' + readmore);
          instance['destroy'].apply(instance);
        }

        $.data(this, 'plugin_' + readmore, new Readmore( this, options ));
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      return this.each(function () {
        var instance = $.data(this, 'plugin_' + readmore);
        if (instance instanceof Readmore && typeof instance[options] === 'function') {
          instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
        }
      });
    }
  }
})(jQuery);/*!** End file: readmore.js ***/
/*!** Begin file: atemay.js ***/
/*
	AddThisEvent v1.5.1 <http://addthisevent.com>
	Copyright (c) 2012-2012 Michael Nilsson
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('D $d(d){1j 8.5p(d)}5 1I=\'1d://6.12/31/37-3b-3k.3o\';5 1V=\'\';5 24=L;5 1K=\'V\';5 1C=\'\';5 1W=\'5n 1M\';5 1X=\'5m 1M\';5 2h=\'5l 1M\';5 2m=\'5c 1M\';5 23=\'58 1M\';5 2r=\'57 55\';5 2t=V;5 2A=V;5 2B=V;5 2F=V;5 2L=V;5 2N=V;5 6=D(){5 C=L,3l=54,26=1,1J=\'\',2U;1j{Y:D(){1o{1I=1I}1h(e){1I=\'1d://6.12/31/37-3b-3k.3o\'}1o{1V=53}1h(e){}1o{24=4Z}1h(e){}1o{1K=4Y}1h(e){}5 a=6.3i(1V);5 b=8.2a(\'*\');2G(5 d=0;d<b.29;d+=1){5 c=\'\';5 f=L;5 g=\'\';5 h=b[d].M;4(h==\'6\'){5 i=b[d].2a(\'N\');2G(5 m=0;m<i.29;m+=1){4(i[m].M==\'2j\'){i[m].I.H=\'G\';5 j=i[m].Q.2K(/ /2H,"");c+=\'&4W=\'+U(j);g=j}4(i[m].M==\'2E\'){i[m].I.H=\'G\';c+=\'&4V=\'+U(i[m].Q)}4(i[m].M==\'2z\'){i[m].I.H=\'G\';c+=\'&4U=\'+U(i[m].Q)}4(i[m].M==\'2l\'){i[m].I.H=\'G\';c+=\'&4T=\'+U(i[m].Q)}4(i[m].M==\'2i\'){i[m].I.H=\'G\';c+=\'&4Q=\'+U(i[m].Q)}4(i[m].M==\'2T\'){i[m].I.H=\'G\';c+=\'&4O=\'+U(i[m].Q)}4(i[m].M==\'2q\'){i[m].I.H=\'G\';c+=\'&4N=\'+U(i[m].Q)}4(i[m].M==\'2R\'){i[m].I.H=\'G\';c+=\'&4L=\'+U(i[m].Q)}4(i[m].M==\'2o\'){i[m].I.H=\'G\';c+=\'&4K=\'+U(i[m].Q)}4(i[m].M==\'2k\'){i[m].I.H=\'G\';c+=\'&4J=\'+U(i[m].Q)}4(i[m].M==\'4I\'){i[m].I.H=\'G\';c+=\'&4H=\'+U(i[m].Q)}4(i[m].M==\'4G\'){i[m].I.H=\'G\';c+=\'&3Q=\'+U(i[m].Q)}4(i[m].M==\'2O\'){4(i[m].Q!=\'\'){i[m].I.H=\'G\';5 k=i[m].Q.2K(/ /2H,"");c+=\'&4E=\'+U(k);f=V}}}4(a){c+=\'&4D=L\'}c=c.2K(/\'/2H,"�");5 l=\'\';4(2t){l+=\'<N 1g="4C" Z="6.1p(\\\'1f\\\',\\\'\'+c+\'\\\',\\\'\'+g+\'\\\');">\'+1W+\'</N>\'}4(2A){l+=\'<N 1g="4B" Z="6.1p(\\\'1c\\\',\\\'\'+c+\'\\\',\\\'\'+g+\'\\\');">\'+1X+\'</N>\'}4(2B){l+=\'<N 1g="4A" Z="6.1p(\\\'1b\\\',\\\'\'+c+\'\\\',\\\'\'+g+\'\\\');">\'+2h+\'</N>\'}4(2F){l+=\'<N 1g="4z" Z="6.1p(\\\'1i\\\',\\\'\'+c+\'\\\',\\\'\'+g+\'\\\');">\'+2m+\'</N>\'}4(2L){l+=\'<N 1g="4y" Z="6.1p(\\\'1a\\\',\\\'\'+c+\'\\\',\\\'\'+g+\'\\\');">\'+23+\'</N>\'}4(f){4(2N){l+=\'<N Z="6.1p(\\\'1n\\\',\\\'\'+c+\'\\\',\\\'\'+g+\'\\\');">\'+2r+\'</N>\'}}4(!a){l+=\'<1G 1g="3N"><1G 1g="3O"></1G><1G 1g="2C" Z="6.1p(\\\'2I\\\');">2Z</1G></1G>\'}b[d].2M=\'33\'+26;b[d].M=\'6-7\';b[d].4x=\'\';4(24){b[d].4w=D(){4v(2U);6.P(39,\'1E\',\'1E\',V)};b[d].4u=D(){2U=2V("6.3c();",3d)};b[d].Z=D(){1j L}}F{b[d].Z=D(){6.P(39,\'1E\',\'1E\');1j L}}5 n=b[d];5 o=8.2n(\'N\');o.2M=\'33\'+26+\'-7\';o.M=\'19\';o.Q=l;n.1L(o);26++}}4(1K==\'L\'){6.2s()}F{6.3p(a)}},1p:D(f,a,b){5 c=\'\';5 d=2v.2w;5 g=V;5 h=4t 4s();5 j=h.4r();4(f==\'1f\'){c=\'1d://Y.6.12/?1y=4q\'+a+\'&1x=\'+j+\'&1w=\'+d;g=L}4(f==\'1c\'){c=\'1d://Y.6.12/?1y=4p\'+a+\'&1x=\'+j+\'&1w=\'+d}4(f==\'1b\'){c=\'1d://Y.6.12/?1y=4o\'+a+\'&1x=\'+j+\'&1w=\'+d}4(f==\'1i\'){c=\'1d://Y.6.12/?1y=4n\'+a+\'&1x=\'+j+\'&1w=\'+d}4(f==\'1a\'){c=\'1d://Y.6.12/?1y=4l\'+a+\'&1x=\'+j+\'&1w=\'+d;g=L}4(f==\'1n\'){c=\'1d://Y.6.12/?1y=4k\'+a+\'&1x=\'+j+\'&1w=\'+d}4(f==\'2I\'){c=\'1d://6.12/\'}4(c!=\'\'){4(f!=\'2I\'){1o{4i.4h([\'4g\',\'2Z\',f,b])}1h(e){}}4(g){W.4f(c)}F{2v.2w=c}}4(1C){2G(5 i=0;i<1C.29;i++){1o{4e(1C[i])}1h(e){5r(e.4d)}}}},3p:D(a){5 b;b=\'.6-7 {H:4a-1D;1B:30;13-46:40;1l:#3Z!1v;1k:#35 3Y(\'+1I+\') 3X-3W 1N 50%;J-1t:G!1v;O:K 14 #3V;1l:#3f;13-2u:3h;13-1P:3j;J-1t:G;1Q:1N 2x 3m 3U;-1R-O-1z:1m;-1S-O-1z:1m;}\';b+=\'.6-7:2D {O:K 14 #3S;1l:#3f;13-2u:3h;13-1P:3j;J-1t:G!1v;}\';b+=\'.6-7:4F {1e:K;}\';b+=\'.6-3v {1k-1l:#3R;}\';4(a){b+=\'.19 {1T:2J;1B:2c;z-2d:3C;1Q:T T T T;1k:#2e;J-2P:S;H:G;2f-1e:-1m;2f-S:-K;O-1e:K 14 #3I;O-1s:K 14 #2g;O-3L:K 14 #3M;O-S:K 14 #2g;-1R-O-1z:1m;-1S-O-1z:1m;-1S-1A-1u:K 1F 1r 1H(0,0,0,0.15);-1R-1A-1u:K 1F 1r 1H(0,0,0,0.15);1A-1u:K 1F 1r 1H(0,0,0,0.15);}\'}F{b+=\'.19 {1T:2J;1B:2c;z-2d:3C;1Q:1r T T T;1k:#2e;J-2P:S;H:G;2f-1e:-1m;2f-S:-K;O-1e:K 14 #3I;O-1s:K 14 #2g;O-3L:K 14 #3M;O-S:K 14 #2g;-1R-O-1z:1m;-1S-O-1z:1m;-1S-1A-1u:K 1F 1r 1H(0,0,0,0.15);-1R-1A-1u:K 1F 1r 1H(0,0,0,0.15);1A-1u:K 1F 1r 1H(0,0,0,0.15);}\'}b+=\'.19 N {1T:3T;H:1D;2y:3e;38-21:36%;1k:#2e;J-1t:G;13-1P:2x;1l:#2W;1Q:3m 1Y 1N 41;}\';b+=\'.19 N:2D {1k:#35;1l:#2W;J-1t:G;13-1P:2x;}\';b+=\'.6 N {H:G!1v;}\';b+=\'.6-7 .2j,.6-7 .2E,.6-7 .2z,.6-7 .2l,.6-7 .2i,.6-7 .2T,.6-7 .2q,.6-7 .2R,.6-7 .2o,.6-7 .2O,.6-7 .2k {H:G!1v;}\';b+=\'.19 .3N {1T:2J;21:42;H:1D;1B:30;2y:43;}\';b+=\'.19 .3O {1T:44;21:K;45:32;1k:#47;1B:2c;z-2d:48;S:1Y;1e:1N;}\';b+=\'.19 .2C {1B:2c;1e:49;2y:3e;1s:1Y;1Q-S:1Y;13-I:2Y;13-2u:2Y;J-2P:1s;z-2d:4b;38-21:36%;1k:#2e;J-1t:G;13-1P:1N;1l:#4c;}\';b+=\'.19 .2C:2D {1l:#2W;}\';5 c=8.2n("I");c.2X="J/1U";4(c.2b){c.2b.3J=b}F{c.1L(8.3H(b))}8.2a("3G")[0].1L(c)},2s:D(){1o{5 a=\'.6 {4j:32;}\';a+=\'.6-7 .2j,.6-7 .2E,.6-7 .2z,.6-7 .2l,.6-7 .2i,.6-7 .2T,.6-7 .2q,.6-7 .2R,.6-7 .2o,.6-7 .2O,.6-7 .2k {H:G!1v;}\';5 b=8.2n("I");b.2X="J/1U";4(b.2b){b.2b.3J=a}F{b.1L(8.3H(a))}8.2a("3G")[0].1L(b)}1h(e){}},P:D(f,o,a,b){5 c=f.2M;5 d=$d(c);5 g=$d(c+\'-7\');4(d&&g){4(1J!=c){6.28(1J)}5 h=6.3E(g,\'H\');1o{f.4m()}1h(e){};4(h==\'1D\'){4(b){}F{6.28(c)}}F{1J=c;d.M=\'6-7 6-3v\';d.I.3D=3l++;g.I.S=\'T\';g.I.1e=\'T\';g.I.H=\'1D\';2V("6.3B();",50);C=L;5 i=11(d.3x);5 j=11(d.3u);5 k=11(g.3x);5 l=11(g.3u);5 m=6.3t();5 n=m.3s(\'/\');5 p=11(n[0]);5 q=11(n[1]);5 r=11(n[2]);5 s=11(n[3]);5 t=6.3w(g);5 u=t.3s(\'/\');5 v=11(u[0]);5 w=11(u[1]);5 x=w+k;5 y=q+s;5 z=v+l;5 A=p+r;5 B=0,X=0;4(o==\'3F\'&&a==\'S\'){B=\'T\';X=i+\'R\'}F 4(o==\'3y\'&&a==\'S\'){B=\'T\';X=-k+\'R\'}F 4(o==\'3F\'&&a==\'1s\'){B=-(l-j)+\'R\';X=i+\'R\'}F 4(o==\'3y\'&&a==\'1s\'){B=-(l-j)+\'R\';X=-k+\'R\'}F 4(o==\'1E\'&&a==\'S\'){B=\'T\';4(x>y){X=-k+\'R\'}F{X=i+\'R\'}}F 4(o==\'1E\'&&a==\'1s\'){B=-(l-j)+\'R\';4(x>y){X=-k+\'R\'}F{X=i+\'R\'}}F{4(x>y){X=-k+\'R\'}F{X=i+\'R\'}4(z>A){B=-(l-j)+\'R\'}F{B=\'T\'}}g.I.S=B;g.I.1e=X;4(8.1Z){8.1Z("4M",D(){6.1O(c)},L)}F 4(8.22){8.22("Z",D(){6.1O(c)})}F{8.Z=D(){6.1O(c)}}}}},1O:D(f){5 a=$d(f);5 b=$d(f+\'-7\');4(a&&b){4(C&&b.I.H==\'1D\'){2V("6.28(\'"+f+"\');",3d)}}},3c:D(){6.1O(1J)},28:D(f){5 a=$d(f);5 b=$d(f+\'-7\');4(a&&b){a.M=\'6-7\';b.I.H=\'G\';b.I.3D=\'\'}},3B:D(){C=V},3t:D(){5 w=0,h=0,y=0,x=0;4(4P(W.3g)==\'4R\'){w=W.3g;h=W.4S}F 4(8.16&&(8.16.25||8.16.27)){w=8.16.25;h=8.16.27}F 4(8.1q&&(8.1q.25||8.1q.27)){w=8.1q.25;h=8.1q.27}4(8.4X){x=(8.16.2Q)?8.16.2Q:8.1q.2Q;y=(8.16.2S)?8.16.2S:8.1q.2S}F{x=W.51;y=W.52}1j w+\'/\'+h+\'/\'+x+\'/\'+y},3w:D(a){5 x=0,y=0;4(a.34){x=a.3n;y=a.3A;56(a=a.34){x+=a.3n;y+=a.3A}}1j x+\'/\'+y},3E:D(a,b){5 x=a;5 y;4(x.3z){y=x.3z[b]}F 4(W.3q){y=8.59.3q(x,5a).5b(b)}1j y},3i:D(f){5 b=2v.2w;5 c=V;5 d=f;5 e=d.29;4(e==20){5 a=d.2p(0,1);5 z=d.2p(9,10);5 m=d.2p(17,18);4(a!=\'a\'){c=L}4(z!=\'z\'){c=L}4(m!=\'m\'){c=L}}F{c=L}4(b.5d(\'6.12\')==-1&&d==\'5e\'){c=L}1j c},5f:D(){6.Y()},5g:D(f){1C=f},5h:D(l,t){5 x=l.5i();4(x==\'1f\'){1W=t}4(x==\'1c\'){1X=t}4(x==\'1b\'){2h=t}4(x==\'1a\'){23=t}4(x==\'5j\'){2r=t}},5k:D(c){4(c.3a!=E){1V=c.3a}4(c.1U!=E){4(c.1U){1K=\'V\'}F{1K=\'L\'}}4(c.3r!=E){24=c.3r}4(c.1f!=E){4(c.1f.P!=E){2t=c.1f.P}}4(c.1c!=E){4(c.1c.P!=E){2A=c.1c.P}}4(c.1b!=E){4(c.1b.P!=E){2B=c.1b.P}}4(c.1i!=E){4(c.1i.P!=E){2F=c.1i.P}}4(c.1a!=E){4(c.1a.P!=E){2L=c.1a.P}}4(c.1n!=E){4(c.1n.P!=E){2N=c.1n.P}}4(c.1f!=E){4(c.1f.J!=E){1W=c.1f.J}}4(c.1c!=E){4(c.1c.J!=E){1X=c.1c.J}}4(c.1b!=E){4(c.1b.J!=E){2h=c.1b.J}}4(c.1i!=E){4(c.1i.J!=E){2m=c.1i.J}}4(c.1a!=E){4(c.1a.J!=E){23=c.1a.J}}4(c.1n!=E){4(c.1n.J!=E){5o=c.1n.J}}4(c.3K!=E){1C=c.3K}}}}();6.2s();4(W.1Z){W.1Z("5q",D(){6.Y()},L)}F 4(W.22){W.22("3P",D(){6.Y()})}F{W.3P=D(){6.Y()}}',62,338,'||||if|var|addthisevent|drop|document|||||||||||||||||||||||||||||||function|undefined|else|none|display|style|text|1px|false|className|span|border|show|innerHTML|px|left|0px|encodeURIComponent|true|window|dropy|generate|onclick||parseInt|com|font|solid||documentElement|||addthisevent_dropdown|ical|yahoo|google|http|top|outlook|class|catch|hotmail|return|background|color|2px|facebook|try|cli|body|6px|right|decoration|shadow|important|reference|offset|service|radius|box|position|_ate_callback|block|auto|3px|em|rgba|_image_path|olddrop|_ate_css|appendChild|Calendar|9px|force|size|padding|moz|webkit|width|css|_ate_license|_ate_lbl_outlook|_ate_lbl_google|10px|addEventListener||height|attachEvent|_ate_lbl_ical|_ate_mouse|clientWidth|dropzcx|clientHeight|hide|length|getElementsByTagName|styleSheet|absolute|index|fff|margin|bebebe|_ate_lbl_yahoo|_summary|_url|_all_day_event|_zonecode|_ate_lbl_hotmail|createElement|_organizer_email|substring|_location|_ate_lbl_fb_event|trycss|_ate_show_outlook|weight|location|href|12px|cursor|_end|_ate_show_google|_ate_show_yahoo|frs|hover|_start|_ate_show_hotmail|for|gi|home|200px|replace|_ate_show_ical|id|_ate_show_facebook|_facebook_event|align|scrollLeft|_organizer|scrollTop|_description|dropmousetim|setTimeout|6d84b4|type|normal|AddThisEvent|relative|gfx|hidden|atedrop|offsetParent|f4f4f4|110|icon|line|this|license|calendar|out|200|pointer|555|innerWidth|bold|glicense|14px|t1|dropzind|8px|offsetLeft|png|applycss|getComputedStyle|mouse|split|viewport|offsetWidth|selected|elementposition|offsetHeight|up|currentStyle|offsetTop|tim|99999|zIndex|getstyle|down|head|createTextNode|c8c8c8|cssText|callback|bottom|a8a8a8|copyx|brx|onload|uid|f7f7f7|aab9d4|175px|35px|d9d9d9|repeat|no|url|333|arial|15px|21px|default|180px|overflow|family|e0e0e0|100|5px|inline|101|cacaca|description|eval|open|_trackEvent|push|_gaq|visibility|FACEBOOK|ICAL|blur|HOTMAIL|YAHOO|GOOGLE|OUTLOOK|getTimezoneOffset|Date|new|onmouseout|clearTimeout|onmouseover|title|ateical|atehotmail|ateyahoo|ategoogle|ateoutlook|credits|fbevent|active|_uid|dateformat|_date_format|dallday|dorgaem|dorga|click|dloca|ddesc|typeof|dsum|number|innerHeight|dzone|dend|dstart|durl|all|_css|_mouse||pageXOffset|pageYOffset|_license|999999|Event|while|Facebook|iCal|defaultView|null|getPropertyValue|Hotmail|indexOf|aao8iuet5zp9iqw5sm9z|refresh|callcack|setlabel|toLowerCase|facebookevent|settings|Yahoo|Google|Outlook|_ate_lbl_facebook|getElementById|load|alert'.split('|'),0,{}));
/*!** End file: atemay.js ***/
/*!** End TMP_BUILDbostad_thirdparty_all.js package ***/
/*!** Begin bostad_thirdparty_lite.js package ***/
/*!** Begin file: rsvp.js ***/
;(function(global) {
var define, requireModule, require, requirejs;

(function() {
  var registry = {}, seen = {};

  define = function(name, deps, callback) {
    registry[name] = { deps: deps, callback: callback };
  };

  requirejs = require = requireModule = function(name) {
  requirejs._eak_seen = registry;

    if (seen[name]) { return seen[name]; }
    seen[name] = {};

    if (!registry[name]) {
      throw new Error("Could not find module " + name);
    }

    var mod = registry[name],
        deps = mod.deps,
        callback = mod.callback,
        reified = [],
        exports;

    for (var i=0, l=deps.length; i<l; i++) {
      if (deps[i] === 'exports') {
        reified.push(exports = {});
      } else {
        reified.push(requireModule(resolve(deps[i])));
      }
    }

    var value = callback.apply(this, reified);
    return seen[name] = exports || value;

    function resolve(child) {
      if (child.charAt(0) !== '.') { return child; }
      var parts = child.split("/");
      var parentBase = name.split("/").slice(0, -1);

      for (var i=0, l=parts.length; i<l; i++) {
        var part = parts[i];

        if (part === '..') { parentBase.pop(); }
        else if (part === '.') { continue; }
        else { parentBase.push(part); }
      }

      return parentBase.join("/");
    }
  };
})();

define("rsvp/all", 
  ["./promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];

    __exports__["default"] = function all(array, label) {
      return Promise.all(array, label);
    };
  });
define("rsvp/all_settled", 
  ["./promise","./utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];
    var isArray = __dependency2__.isArray;
    var isNonThenable = __dependency2__.isNonThenable;

    /**
      `RSVP.allSettled` is similar to `RSVP.all`, but instead of implementing
      a fail-fast method, it waits until all the promises have returned and
      shows you all the results. This is useful if you want to handle multiple
      promises' failure states together as a set.

      Returns a promise that is fulfilled when all the given promises have been
      settled. The return promise is fulfilled with an array of the states of
      the promises passed into the `promises` array argument.

      Each state object will either indicate fulfillment or rejection, and
      provide the corresponding value or reason. The states will take one of
      the following formats:

      ```javascript
      { state: 'fulfilled', value: value }
        or
      { state: 'rejected', reason: reason }
      ```

      Example:

      ```javascript
      var promise1 = RSVP.Promise.resolve(1);
      var promise2 = RSVP.Promise.reject(new Error('2'));
      var promise3 = RSVP.Promise.reject(new Error('3'));
      var promises = [ promise1, promise2, promise3 ];

      RSVP.allSettled(promises).then(function(array){
        // array == [
        //   { state: 'fulfilled', value: 1 },
        //   { state: 'rejected', reason: Error },
        //   { state: 'rejected', reason: Error }
        // ]
        // Note that for the second item, reason.message will be "2", and for the
        // third item, reason.message will be "3".
      }, function(error) {
        // Not run. (This block would only be called if allSettled had failed,
        // for instance if passed an incorrect argument type.)
      });
      ```

      @method @allSettled
      @for RSVP
      @param {Array} promises;
      @param {String} label - optional string that describes the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled with an array of the settled
      states of the constituent promises.
    */

    __exports__["default"] = function allSettled(entries, label) {
      return new Promise(function(resolve, reject) {
        if (!isArray(entries)) {
          throw new TypeError('You must pass an array to allSettled.');
        }

        var remaining = entries.length;
        var entry;

        if (remaining === 0) {
          resolve([]);
          return;
        }

        var results = new Array(remaining);

        function fulfilledResolver(index) {
          return function(value) {
            resolveAll(index, fulfilled(value));
          };
        }

        function rejectedResolver(index) {
          return function(reason) {
            resolveAll(index, rejected(reason));
          };
        }

        function resolveAll(index, value) {
          results[index] = value;
          if (--remaining === 0) {
            resolve(results);
          }
        }

        for (var index = 0; index < entries.length; index++) {
          entry = entries[index];

          if (isNonThenable(entry)) {
            resolveAll(index, fulfilled(entry));
          } else {
            Promise.cast(entry).then(fulfilledResolver(index), rejectedResolver(index));
          }
        }
      }, label);
    };

    function fulfilled(value) {
      return { state: 'fulfilled', value: value };
    }

    function rejected(reason) {
      return { state: 'rejected', reason: reason };
    }
  });
define("rsvp/asap", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function asap(callback, arg) {
      var length = queue.push([callback, arg]);
      if (length === 1) {
        // If length is 1, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        scheduleFlush();
      }
    };

    var browserGlobal = (typeof window !== 'undefined') ? window : {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;

    // node
    function useNextTick() {
      return function() {
        process.nextTick(flush);
      };
    }

    function useMutationObserver() {
      var iterations = 0;
      var observer = new BrowserMutationObserver(flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    function useSetTimeout() {
      return function() {
        setTimeout(flush, 1);
      };
    }

    var queue = [];
    function flush() {
      for (var i = 0; i < queue.length; i++) {
        var tuple = queue[i];
        var callback = tuple[0], arg = tuple[1];
        callback(arg);
      }
      queue = [];
    }

    var scheduleFlush;

    // Decide what async method to use to triggering processing of queued callbacks:
    if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
      scheduleFlush = useNextTick();
    } else if (BrowserMutationObserver) {
      scheduleFlush = useMutationObserver();
    } else {
      scheduleFlush = useSetTimeout();
    }
  });
define("rsvp/config", 
  ["./events","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var EventTarget = __dependency1__["default"];

    var config = {
      instrument: false
    };

    EventTarget.mixin(config);

    function configure(name, value) {
      if (name === 'onerror') {
        // handle for legacy users that expect the actual
        // error to be passed to their function added via
        // `RSVP.configure('onerror', someFunctionHere);`
        config.on('error', value);
        return;
      }

      if (arguments.length === 2) {
        config[name] = value;
      } else {
        return config[name];
      }
    }

    __exports__.config = config;
    __exports__.configure = configure;
  });
define("rsvp/defer", 
  ["./promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];

    /**
      `RSVP.defer` returns an object similar to jQuery's `$.Deferred` objects.
      `RSVP.defer` should be used when porting over code reliant on `$.Deferred`'s
      interface. New code should use the `RSVP.Promise` constructor instead.

      The object returned from `RSVP.defer` is a plain object with three properties:

      * promise - an `RSVP.Promise`.
      * reject - a function that causes the `promise` property on this object to
        become rejected
      * resolve - a function that causes the `promise` property on this object to
        become fulfilled.

      Example:

       ```javascript
       var deferred = RSVP.defer();

       deferred.resolve("Success!");

       defered.promise.then(function(value){
         // value here is "Success!"
       });
       ```

      @method defer
      @for RSVP
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Object}
     */

    __exports__["default"] = function defer(label) {
      var deferred = { };

      deferred.promise = new Promise(function(resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
      }, label);

      return deferred;
    };
  });
define("rsvp/events", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var indexOf = function(callbacks, callback) {
      for (var i=0, l=callbacks.length; i<l; i++) {
        if (callbacks[i] === callback) { return i; }
      }

      return -1;
    };

    var callbacksFor = function(object) {
      var callbacks = object._promiseCallbacks;

      if (!callbacks) {
        callbacks = object._promiseCallbacks = {};
      }

      return callbacks;
    };

    /**
      //@module RSVP
      //@class EventTarget
    */
    __exports__["default"] = {

      /**
        `RSVP.EventTarget.mixin` extends an object with EventTarget methods. For
        Example:

        ```javascript
        var object = {};

        RSVP.EventTarget.mixin(object);

        object.on("finished", function(event) {
          // handle event
        });

        object.trigger("finished", { detail: value });
        ```

        `EventTarget.mixin` also works with prototypes:

        ```javascript
        var Person = function() {};
        RSVP.EventTarget.mixin(Person.prototype);

        var yehuda = new Person();
        var tom = new Person();

        yehuda.on("poke", function(event) {
          console.log("Yehuda says OW");
        });

        tom.on("poke", function(event) {
          console.log("Tom says OW");
        });

        yehuda.trigger("poke");
        tom.trigger("poke");
        ```

        @method mixin
        @param {Object} object object to extend with EventTarget methods
        @private
      */
      mixin: function(object) {
        object.on = this.on;
        object.off = this.off;
        object.trigger = this.trigger;
        object._promiseCallbacks = undefined;
        return object;
      },

      /**
        Registers a callback to be executed when `eventName` is triggered

        ```javascript
        object.on('event', function(eventInfo){
          // handle the event
        });

        object.trigger('event');
        ```

        @method on
        @param {String} eventName name of the event to listen for
        @param {Function} callback function to be called when the event is triggered.
        @private
      */
      on: function(eventName, callback) {
        var allCallbacks = callbacksFor(this), callbacks;

        callbacks = allCallbacks[eventName];

        if (!callbacks) {
          callbacks = allCallbacks[eventName] = [];
        }

        if (indexOf(callbacks, callback) === -1) {
          callbacks.push(callback);
        }
      },

      /**
        You can use `off` to stop firing a particular callback for an event:

        ```javascript
        function doStuff() { // do stuff! }
        object.on('stuff', doStuff);

        object.trigger('stuff'); // doStuff will be called

        // Unregister ONLY the doStuff callback
        object.off('stuff', doStuff);
        object.trigger('stuff'); // doStuff will NOT be called
        ```

        If you don't pass a `callback` argument to `off`, ALL callbacks for the
        event will not be executed when the event fires. For example:

        ```javascript
        var callback1 = function(){};
        var callback2 = function(){};

        object.on('stuff', callback1);
        object.on('stuff', callback2);

        object.trigger('stuff'); // callback1 and callback2 will be executed.

        object.off('stuff');
        object.trigger('stuff'); // callback1 and callback2 will not be executed!
        ```

        @method off
        @param {String} eventName event to stop listening to
        @param {Function} callback optional argument. If given, only the function
        given will be removed from the event's callback queue. If no `callback`
        argument is given, all callbacks will be removed from the event's callback
        queue.
        @private

      */
      off: function(eventName, callback) {
        var allCallbacks = callbacksFor(this), callbacks, index;

        if (!callback) {
          allCallbacks[eventName] = [];
          return;
        }

        callbacks = allCallbacks[eventName];

        index = indexOf(callbacks, callback);

        if (index !== -1) { callbacks.splice(index, 1); }
      },

      /**
        Use `trigger` to fire custom events. For example:

        ```javascript
        object.on('foo', function(){
          console.log('foo event happened!');
        });
        object.trigger('foo');
        // 'foo event happened!' logged to the console
        ```

        You can also pass a value as a second argument to `trigger` that will be
        passed as an argument to all event listeners for the event:

        ```javascript
        object.on('foo', function(value){
          console.log(value.name);
        });

        object.trigger('foo', { name: 'bar' });
        // 'bar' logged to the console
        ```

        @method trigger
        @param {String} eventName name of the event to be triggered
        @param {Any} options optional value to be passed to any event handlers for
        the given `eventName`
        @private
      */
      trigger: function(eventName, options) {
        var allCallbacks = callbacksFor(this),
            callbacks, callbackTuple, callback, binding;

        if (callbacks = allCallbacks[eventName]) {
          // Don't cache the callbacks.length since it may grow
          for (var i=0; i<callbacks.length; i++) {
            callback = callbacks[i];

            callback(options);
          }
        }
      }
    };
  });
define("rsvp/filter", 
  ["./all","./map","./utils","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var all = __dependency1__["default"];
    var map = __dependency2__["default"];
    var isFunction = __dependency3__.isFunction;
    var isArray = __dependency3__.isArray;

    /**
     `RSVP.filter` is similar to JavaScript's native `filter` method, except that it
      waits for all promises to become fulfilled before running the `filterFn` on
      each item in given to `promises`. `RSVP.filterFn` returns a promise that will
      become fulfilled with the result of running `filterFn` on the values the
      promises become fulfilled with.

      For example:

      ```javascript

      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.resolve(2);
      var promise3 = RSVP.resolve(3);

      var filterFn = function(item){
        return item > 1;
      };

      RSVP.filter(promises, filterFn).then(function(result){
        // result is [ 2, 3 ]
      });
      ```

      If any of the `promises` given to `RSVP.filter` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.reject(new Error("2"));
      var promise3 = RSVP.reject(new Error("3"));
      var promises = [ promise1, promise2, promise3 ];

      var filterFn = function(item){
        return item > 1;
      };

      RSVP.filter(promises, filterFn).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(reason) {
        // reason.message === "2"
      });
      ```

      `RSVP.filter` will also wait for any promises returned from `filterFn`.
      For instance, you may want to fetch a list of users then return a subset
      of those users based on some asynchronous operation:

      ```javascript

      var alice = { name: 'alice' };
      var bob   = { name: 'bob' };
      var users = [ alice, bob ];

      var promises = users.map(function(user){
        return RSVP.resolve(user);
      });

      var filterFn = function(user){
        // Here, Alice has permissions to create a blog post, but Bob does not.
        return getPrivilegesForUser(user).then(function(privs){
          return privs.can_create_blog_post === true;
        });
      };
      RSVP.filter(promises, filterFn).then(function(users){
        // true, because the server told us only Alice can create a blog post.
        users.length === 1;
        // false, because Alice is the only user present in `users`
        users[0] === bob;
      });
      ```

      @method filter
      @for RSVP
      @param {Array} promises
      @param {Function} filterFn - function to be called on each resolved value to
      filter the final results.
      @param {String} label optional string describing the promise. Useful for
      tooling.
      @return {Promise}
    */
    function filter(promises, filterFn, label) {
      if (!isArray(promises)) {
        throw new TypeError('You must pass an array to filter.');
      }

      if (!isFunction(filterFn)){
        throw new TypeError("You must pass a function to filter's second argument.");
      }

      return all(promises, label).then(function(values){
        return map(promises, filterFn, label).then(function(filterResults){
           var i,
               valuesLen = values.length,
               filtered = [];

           for (i = 0; i < valuesLen; i++){
             if(filterResults[i]) filtered.push(values[i]);
           }
           return filtered;
        });
      });
    }

    __exports__["default"] = filter;
  });
define("rsvp/hash", 
  ["./promise","./utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];
    var isNonThenable = __dependency2__.isNonThenable;
    var keysOf = __dependency2__.keysOf;

    /**
      `RSVP.hash` is similar to `RSVP.all`, but takes an object instead of an array
      for its `promises` argument.

      Returns a promise that is fulfilled when all the given promises have been
      fulfilled, or rejected if any of them become rejected. The returned promise
      is fulfilled with a hash that has the same key names as the `promises` object
      argument. If any of the values in the object are not promises, they will
      simply be copied over to the fulfilled object.

      Example:

      ```javascript
      var promises = {
        myPromise: RSVP.resolve(1),
        yourPromise: RSVP.resolve(2),
        theirPromise: RSVP.resolve(3),
        notAPromise: 4
      };

      RSVP.hash(promises).then(function(hash){
        // hash here is an object that looks like:
        // {
        //   myPromise: 1,
        //   yourPromise: 2,
        //   theirPromise: 3,
        //   notAPromise: 4
        // }
      });
      ````

      If any of the `promises` given to `RSVP.hash` are rejected, the first promise
      that is rejected will be given as as the first argument, or as the reason to
      the rejection handler. For example:

      ```javascript
      var promises = {
        myPromise: RSVP.resolve(1),
        rejectedPromise: RSVP.reject(new Error("rejectedPromise")),
        anotherRejectedPromise: RSVP.reject(new Error("anotherRejectedPromise")),
      };

      RSVP.hash(promises).then(function(hash){
        // Code here never runs because there are rejected promises!
      }, function(reason) {
        // reason.message === "rejectedPromise"
      });
      ```

      An important note: `RSVP.hash` is intended for plain JavaScript objects that
      are just a set of keys and values. `RSVP.hash` will NOT preserve prototype
      chains.

      Example:

      ```javascript
      function MyConstructor(){
        this.example = RSVP.resolve("Example");
      }

      MyConstructor.prototype = {
        protoProperty: RSVP.resolve("Proto Property")
      };

      var myObject = new MyConstructor();

      RSVP.hash(myObject).then(function(hash){
        // protoProperty will not be present, instead you will just have an
        // object that looks like:
        // {
        //   example: "Example"
        // }
        //
        // hash.hasOwnProperty('protoProperty'); // false
        // 'undefined' === typeof hash.protoProperty
      });
      ```

      @method hash
      @for RSVP
      @param {Object} promises
      @param {String} label - optional string that describes the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled when all properties of `promises`
      have been fulfilled, or rejected if any of them become rejected.
    */
    __exports__["default"] = function hash(object, label) {
      return new Promise(function(resolve, reject){
        var results = {};
        var keys = keysOf(object);
        var remaining = keys.length;
        var entry, property;

        if (remaining === 0) {
          resolve(results);
          return;
        }

       function fulfilledTo(property) {
          return function(value) {
            results[property] = value;
            if (--remaining === 0) {
              resolve(results);
            }
          };
        }

        function onRejection(reason) {
          remaining = 0;
          reject(reason);
        }

        for (var i = 0; i < keys.length; i++) {
          property = keys[i];
          entry = object[property];

          if (isNonThenable(entry)) {
            results[property] = entry;
            if (--remaining === 0) {
              resolve(results);
            }
          } else {
            Promise.cast(entry).then(fulfilledTo(property), onRejection);
          }
        }
      });
    };
  });
define("rsvp/instrument", 
  ["./config","./utils","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var config = __dependency1__.config;
    var now = __dependency2__.now;

    __exports__["default"] = function instrument(eventName, promise, child) {
      // instrumentation should not disrupt normal usage.
      try {
        config.trigger(eventName, {
          guid: promise._guidKey + promise._id,
          eventName: eventName,
          detail: promise._detail,
          childGuid: child && promise._guidKey + child._id,
          label: promise._label,
          timeStamp: now(),
          stack: new Error(promise._label).stack
        });
      } catch(error) {
        setTimeout(function(){
          throw error;
        }, 0);
      }
    };
  });
define("rsvp/map", 
  ["./promise","./all","./utils","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];
    var all = __dependency2__["default"];
    var isArray = __dependency3__.isArray;
    var isFunction = __dependency3__.isFunction;

    /**

     `RSVP.map` is similar to JavaScript's native `map` method, except that it
      waits for all promises to become fulfilled before running the `mapFn` on
      each item in given to `promises`. `RSVP.map` returns a promise that will
      become fulfilled with the result of running `mapFn` on the values the promises
      become fulfilled with.

      For example:

      ```javascript

      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.resolve(2);
      var promise3 = RSVP.resolve(3);
      var promises = [ promise1, promise2, promise3 ];

      var mapFn = function(item){
        return item + 1;
      };

      RSVP.map(promises, mapFn).then(function(result){
        // result is [ 2, 3, 4 ]
      });
      ```

      If any of the `promises` given to `RSVP.map` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.reject(new Error("2"));
      var promise3 = RSVP.reject(new Error("3"));
      var promises = [ promise1, promise2, promise3 ];

      var mapFn = function(item){
        return item + 1;
      };

      RSVP.map(promises, mapFn).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(reason) {
        // reason.message === "2"
      });
      ```

      `RSVP.map` will also wait if a promise is returned from `mapFn`. For example,
      say you want to get all comments from a set of blog posts, but you need
      the blog posts first becuase they contain a url to those comments.

      ```javscript

      var mapFn = function(blogPost){
        // getComments does some ajax and returns an RSVP.Promise that is fulfilled
        // with some comments data
        return getComments(blogPost.comments_url);
      };

      // getBlogPosts does some ajax and returns an RSVP.Promise that is fulfilled
      // with some blog post data
      RSVP.map(getBlogPosts(), mapFn).then(function(comments){
        // comments is the result of asking the server for the comments
        // of all blog posts returned from getBlogPosts()
      });
      ```

      @method map
      @for RSVP
      @param {Array} promises
      @param {Function} mapFn function to be called on each fulfilled promise.
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled with the result of calling
      `mapFn` on each fulfilled promise or value when they become fulfilled.
       The promise will be rejected if any of the given `promises` become rejected.
    */
    __exports__["default"] = function map(promises, mapFn, label) {

      if (!isArray(promises)) {
        throw new TypeError('You must pass an array to map.');
      }

      if (!isFunction(mapFn)){
        throw new TypeError("You must pass a function to map's second argument.");
      }

      return all(promises, label).then(function(results){
        var resultLen = results.length,
            mappedResults = [],
            i;

        for (i = 0; i < resultLen; i++){
          mappedResults.push(mapFn(results[i]));
        }

        return all(mappedResults, label);
      });
    };
  });
define("rsvp/node", 
  ["./promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];

    var slice = Array.prototype.slice;

    function makeNodeCallbackFor(resolve, reject) {
      return function (error, value) {
        if (error) {
          reject(error);
        } else if (arguments.length > 2) {
          resolve(slice.call(arguments, 1));
        } else {
          resolve(value);
        }
      };
    }

    /**
      `RSVP.denodeify` takes a "node-style" function and returns a function that
      will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the
      browser when you'd prefer to use promises over using callbacks. For example,
      `denodeify` transforms the following:

      ```javascript
      var fs = require('fs');

      fs.readFile('myfile.txt', function(err, data){
        if (err) return handleError(err);
        handleData(data);
      });
      ```

      into:

      ```javascript
      var fs = require('fs');

      var readFile = RSVP.denodeify(fs.readFile);

      readFile('myfile.txt').then(handleData, handleError);
      ```

      Using `denodeify` makes it easier to compose asynchronous operations instead
      of using callbacks. For example, instead of:

      ```javascript
      var fs = require('fs');
      var log = require('some-async-logger');

      fs.readFile('myfile.txt', function(err, data){
        if (err) return handleError(err);
        fs.writeFile('myfile2.txt', data, function(err){
          if (err) throw err;
          log('success', function(err) {
            if (err) throw err;
          });
        });
      });
      ```

      You can chain the operations together using `then` from the returned promise:

      ```javascript
      var fs = require('fs');
      var denodeify = RSVP.denodeify;
      var readFile = denodeify(fs.readFile);
      var writeFile = denodeify(fs.writeFile);
      var log = denodeify(require('some-async-logger'));

      readFile('myfile.txt').then(function(data){
        return writeFile('myfile2.txt', data);
      }).then(function(){
        return log('SUCCESS');
      }).then(function(){
        // success handler
      }, function(reason){
        // rejection handler
      });
      ```

      @method denodeify
      @for RSVP
      @param {Function} nodeFunc a "node-style" function that takes a callback as
      its last argument. The callback expects an error to be passed as its first
      argument (if an error occurred, otherwise null), and the value from the
      operation as its second argument ("function(err, value){ }").
      @param {Any} binding optional argument for binding the "this" value when
      calling the `nodeFunc` function.
      @return {Function} a function that wraps `nodeFunc` to return an
      `RSVP.Promise`
    */
    __exports__["default"] = function denodeify(nodeFunc, binding) {
      return function()  {
        var nodeArgs = slice.call(arguments), resolve, reject;
        var thisArg = this || binding;

        return new Promise(function(resolve, reject) {
          Promise.all(nodeArgs).then(function(nodeArgs) {
            try {
              nodeArgs.push(makeNodeCallbackFor(resolve, reject));
              nodeFunc.apply(thisArg, nodeArgs);
            } catch(e) {
              reject(e);
            }
          });
        });
      };
    };
  });
define("rsvp/promise", 
  ["./config","./events","./instrument","./utils","./promise/cast","./promise/all","./promise/race","./promise/resolve","./promise/reject","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __exports__) {
    "use strict";
    var config = __dependency1__.config;
    var EventTarget = __dependency2__["default"];
    var instrument = __dependency3__["default"];
    var objectOrFunction = __dependency4__.objectOrFunction;
    var isFunction = __dependency4__.isFunction;
    var now = __dependency4__.now;
    var cast = __dependency5__["default"];
    var all = __dependency6__["default"];
    var race = __dependency7__["default"];
    var Resolve = __dependency8__["default"];
    var Reject = __dependency9__["default"];

    var guidKey = 'rsvp_' + now() + '-';
    var counter = 0;

    function noop() {}

    __exports__["default"] = Promise;


    /**

      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promiseâ€™s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error("getJSON: `" + url + "` failed with status: [" + this.status + "]");
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function}
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @constructor
    */
    function Promise(resolver, label) {
      if (!isFunction(resolver)) {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
      }

      if (!(this instanceof Promise)) {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }

      this._id = counter++;
      this._label = label;
      this._subscribers = [];

      if (config.instrument) {
        instrument('created', this);
      }

      if (noop !== resolver) {
        invokeResolver(resolver, this);
      }
    }

    function invokeResolver(resolver, promise) {
      function resolvePromise(value) {
        resolve(promise, value);
      }

      function rejectPromise(reason) {
        reject(promise, reason);
      }

      try {
        resolver(resolvePromise, rejectPromise);
      } catch(e) {
        rejectPromise(e);
      }
    }

    Promise.cast = cast;
    Promise.all = all;
    Promise.race = race;
    Promise.resolve = Resolve;
    Promise.reject = Reject;

    var PENDING   = void 0;
    var SEALED    = 0;
    var FULFILLED = 1;
    var REJECTED  = 2;

    function subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      subscribers[length] = child;
      subscribers[length + FULFILLED] = onFulfillment;
      subscribers[length + REJECTED]  = onRejection;
    }

    function publish(promise, settled) {
      var child, callback, subscribers = promise._subscribers, detail = promise._detail;

      if (config.instrument) {
        instrument(settled === FULFILLED ? 'fulfilled' : 'rejected', promise);
      }

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        invokeCallback(settled, child, callback, detail);
      }

      promise._subscribers = null;
    }

    Promise.prototype = {
    /**
      @property constructor
    */
      constructor: Promise,

      _id: undefined,
      _guidKey: guidKey,
      _label: undefined,

      _state: undefined,
      _detail: undefined,
      _subscribers: undefined,

      _onerror: function (reason) {
        config.trigger('error', reason);
      },

    /**

      A promise represents the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, "downstream"
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return "default name";
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `"default name"`
      });

      findUser().then(function (user) {
        throw "Found user, but still unhappy";
      }, function (reason) {
        throw "`findUser` rejected and we're unhappy";
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be "Found user, but still unhappy".  
        // If `findUser` rejected, `reason` will be "`findUser` rejected and we're unhappy".
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException("Upstream error");
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously.  This can be achieved by returning a promise in the
      fulfillment or rejection handler.  The downstream promise will then be pending
      until the returned promise is settled.  This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javacsript
      findResult().then(function(result){

      }, function(reason){

      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javacsript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong;
      });
      ```

      @method then
      @param {Function} onFulfillment
      @param {Function} onRejection
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection, label) {
        var promise = this;
        this._onerror = null;

        var thenPromise = new this.constructor(noop, label);

        if (this._state) {
          var callbacks = arguments;
          config.async(function invokePromiseCallback() {
            invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
          });
        } else {
          subscribe(this, thenPromise, onFulfillment, onRejection);
        }

        if (config.instrument) {
          instrument('chained', promise, thenPromise);
        }

        return thenPromise;
      },

    /**
      `catch` is simply sugar for `then(null, onRejection)` which makes it the same
      as the catch block, of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error("couldn't find that author");
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {

      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong;
      });
      ```

      @method catch
      @param {Function} onRejection
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection, label) {
        return this.then(null, onRejection, label);
      },

    /**
      `finally` will be invoked regardless of the promise's fate just as native
      try/catch/finally behaves

      ```js
      findAuthor() {
        if (Math.random() > 0.5) {
          throw new Error();
        }
        return new Author();
      }

      try {
        return findAuthor(); // succeed or fail
      } catch(error) {
        return findOtherAuther();
      } finally {
        // always runs
        // doesn't effect the return value
      }

      findAuthor().finally(function(){
        // author was either found, or not
      });
      ```

      @method finally
      @param {Function} callback
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise}
    */
      'finally': function(callback, label) {
        var constructor = this.constructor;

        return this.then(function(value) {
          return constructor.cast(callback()).then(function(){
            return value;
          });
        }, function(reason) {
          return constructor.cast(callback()).then(function(){
            throw reason;
          });
        }, label);
      }
    };

    function invokeCallback(settled, promise, callback, detail) {
      var hasCallback = isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        try {
          value = callback(detail);
          succeeded = true;
        } catch(e) {
          failed = true;
          error = e;
        }
      } else {
        value = detail;
        succeeded = true;
      }

      if (handleThenable(promise, value)) {
        return;
      } else if (hasCallback && succeeded) {
        resolve(promise, value);
      } else if (failed) {
        reject(promise, error);
      } else if (settled === FULFILLED) {
        resolve(promise, value);
      } else if (settled === REJECTED) {
        reject(promise, value);
      }
    }

    function handleThenable(promise, value) {
      var then = null,
      resolved;

      try {
        if (promise === value) {
          throw new TypeError("A promises callback cannot return that same promise.");
        }

        if (objectOrFunction(value)) {
          then = value.then;

          if (isFunction(then)) {
            then.call(value, function(val) {
              if (resolved) { return true; }
              resolved = true;

              if (value !== val) {
                resolve(promise, val);
              } else {
                fulfill(promise, val);
              }
            }, function(val) {
              if (resolved) { return true; }
              resolved = true;

              reject(promise, val);
            }, 'derived from: ' + (promise._label || ' unknown promise'));

            return true;
          }
        }
      } catch (error) {
        if (resolved) { return true; }
        reject(promise, error);
        return true;
      }

      return false;
    }

    function resolve(promise, value) {
      if (promise === value) {
        fulfill(promise, value);
      } else if (!handleThenable(promise, value)) {
        fulfill(promise, value);
      }
    }

    function fulfill(promise, value) {
      if (promise._state !== PENDING) { return; }
      promise._state = SEALED;
      promise._detail = value;

      config.async(publishFulfillment, promise);
    }

    function reject(promise, reason) {
      if (promise._state !== PENDING) { return; }
      promise._state = SEALED;
      promise._detail = reason;

      config.async(publishRejection, promise);
    }

    function publishFulfillment(promise) {
      publish(promise, promise._state = FULFILLED);
    }

    function publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._detail);
      }

      publish(promise, promise._state = REJECTED);
    }
  });
define("rsvp/promise/all", 
  ["../utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var isArray = __dependency1__.isArray;
    var isNonThenable = __dependency1__.isNonThenable;

    /**

      `RSVP.Promise.all` returns a new promise which is fulfilled with an array of
      fulfillment values for the passed promises, or rejects with the reason of the
      first passed promise that rejects. It casts all elements of the passed iterable
      to promises as it runs this algorithm.

      Example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.resolve(2);
      var promise3 = RSVP.resolve(3);
      var promises = [ promise1, promise2, promise3 ];

      RSVP.Promise.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
      ```

      If any of the `promises` given to `RSVP.all` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:

      Example:

      ```javascript
      var promise1 = RSVP.resolve(1);
      var promise2 = RSVP.reject(new Error("2"));
      var promise3 = RSVP.reject(new Error("3"));
      var promises = [ promise1, promise2, promise3 ];

      RSVP.Promise.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
      ```

      @method all
      @for RSVP.Promise
      @param {Array} promises
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled when all `promises` have been
      fulfilled, or rejected if any of them become rejected.
    */
    __exports__["default"] = function all(entries, label) {

      /*jshint validthis:true */
      var Constructor = this;

      return new Constructor(function(resolve, reject) {
        if (!isArray(entries)) {
          throw new TypeError('You must pass an array to all.');
        }

        var remaining = entries.length;
        var results = new Array(remaining);
        var entry, pending = true;

        if (remaining === 0) {
          resolve(results);
          return;
        }

        function fulfillmentAt(index) {
          return function(value) {
            results[index] = value;
            if (--remaining === 0) {
              resolve(results);
            }
          };
        }

        function onRejection(reason) {
          remaining = 0;
          reject(reason);
        }

        for (var index = 0; index < entries.length; index++) {
          entry = entries[index];
          if (isNonThenable(entry)) {
            results[index] = entry;
            if (--remaining === 0) {
              resolve(results);
            }
          } else {
            Constructor.cast(entry).then(fulfillmentAt(index), onRejection);
          }
        }
      }, label);
    };
  });
define("rsvp/promise/cast", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**

      `RSVP.Promise.cast` cast coerces its argument to a promise, or returns the
      argument if it is already a promise which shares a constructor with the caster;

      Example:

      ```javascript
      var promise = RSVP.Promise.resolve(1);
      var casted = RSVP.Promise.cast(promise);

      console.log(promise === casted); // true
      ```

      In the case of a promise whose constructor does not match, it is assimilated.
      The resulting promise will fulfill or reject based on the outcome of the
      promise being casted.

      In the case of a non-promise, a promise which will fulfill with that value is
      returned.

      Example:

      ```javascript
      var value = 1; // could be a number, boolean, string, undefined...
      var casted = RSVP.Promise.cast(value);

      console.log(value === casted); // false
      console.log(casted instanceof RSVP.Promise) // true

      casted.then(function(val) {
        val === value // => true
      });
      ```

      `RSVP.Promise.cast` is similar to `RSVP.Promise.resolve`, but `RSVP.Promise.cast` differs in the
      following ways:

      * `RSVP.Promise.cast` serves as a memory-efficient way of getting a promise, when you
      have something that could either be a promise or a value. RSVP.resolve
      will have the same effect but will create a new promise wrapper if the
      argument is a promise.
      * `RSVP.Promise.cast` is a way of casting incoming thenables or promise subclasses to
      promises of the exact class specified, so that the resulting object's `then` is
      ensured to have the behavior of the constructor you are calling cast on (i.e., RSVP.Promise).

      @method cast
      @for RSVP.Promise
      @param {Object} object to be casted
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise} promise
    */

    __exports__["default"] = function cast(object, label) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      return new Constructor(function(resolve) {
        resolve(object);
      }, label);
    };
  });
define("rsvp/promise/race", 
  ["../utils","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global toString */

    var isArray = __dependency1__.isArray;
    var isFunction = __dependency1__.isFunction;
    var isNonThenable = __dependency1__.isNonThenable;

    /**
      `RSVP.Promise.race` returns a new promise which is settled in the same way as the
      first passed promise to settle.

      Example:

      ```javascript
      var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

      var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 2");
        }, 100);
      });

      RSVP.Promise.race([promise1, promise2]).then(function(result){
        // result === "promise 2" because it was resolved before promise1
        // was resolved.
      });
      ```

      `RSVP.Promise.race` is deterministic in that only the state of the first
      completed promise matters. For example, even if other promises given to the
      `promises` array argument are resolved, but the first completed promise has
      become rejected before the other promises became fulfilled, the returned
      promise will become rejected:

      ```javascript
      var promise1 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          resolve("promise 1");
        }, 200);
      });

      var promise2 = new RSVP.Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error("promise 2"));
        }, 100);
      });

      RSVP.Promise.race([promise1, promise2]).then(function(result){
        // Code here never runs because there are rejected promises!
      }, function(reason){
        // reason.message === "promise2" because promise 2 became rejected before
        // promise 1 became fulfilled
      });
      ```

      @method race
      @for RSVP.Promise
      @param {Array} promises array of promises to observe
      @param {String} label optional string for describing the promise returned.
      Useful for tooling.
      @return {Promise} a promise which settles in the same way as the first passed
      promise to settle.
    */
    __exports__["default"] = function race(entries, label) {
      /*jshint validthis:true */
      var Constructor = this, entry;

      return new Constructor(function(resolve, reject) {
        if (!isArray(entries)) {
          throw new TypeError('You must pass an array to race.');
        }

        var pending = true;

        function onFulfillment(value) { if (pending) { pending = false; resolve(value); } }
        function onRejection(reason)  { if (pending) { pending = false; reject(reason); } }

        for (var i = 0; i < entries.length; i++) {
          entry = entries[i];
          if (isNonThenable(entry)) {
            pending = false;
            resolve(entry);
            return;
          } else {
            Constructor.cast(entry).then(onFulfillment, onRejection);
          }
        }
      }, label);
    };
  });
define("rsvp/promise/reject", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      `RSVP.Promise.reject` returns a promise  rejected with the passed `reason`.
      It is essentially shorthand for the following:

      ```javascript
      var promise = new RSVP.Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });

      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```

      Instead of writing the above, your code now simply becomes the following:

      ```javascript
      var promise = RSVP.Promise.reject(new Error('WHOOPS'));

      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```

      @method reject
      @for RSVP.Promise
      @param {Any} reason value that the returned promise will be rejected with.
      @param {String} label optional string for identifying the returned promise.
      Useful for tooling.
      @return {Promise} a promise rejected with the given `reason`.
    */
    __exports__["default"] = function reject(reason, label) {
      /*jshint validthis:true */
      var Constructor = this;

      return new Constructor(function (resolve, reject) {
        reject(reason);
      }, label);
    };
  });
define("rsvp/promise/resolve", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      `RSVP.Promise.resolve` returns a promise that will become fulfilled with the passed
      `value`. It is essentially shorthand for the following:

      ```javascript
      var promise = new RSVP.Promise(function(resolve, reject){
        resolve(1);
      });

      promise.then(function(value){
        // value === 1
      });
      ```

      Instead of writing the above, your code now simply becomes the following:

      ```javascript
      var promise = RSVP.Promise.resolve(1);

      promise.then(function(value){
        // value === 1
      });
      ```

      @method resolve
      @for RSVP.Promise
      @param {Any} value value that the returned promise will be resolved with
      @param {String} label optional string for identifying the returned promise.
      Useful for tooling.
      @return {Promise} a promise that will become fulfilled with the given
      `value`
    */
    __exports__["default"] = function resolve(value, label) {
      /*jshint validthis:true */
      var Constructor = this;

      return new Constructor(function(resolve, reject) {
        resolve(value);
      }, label);
    };
  });
define("rsvp/race", 
  ["./promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];

    __exports__["default"] = function race(array, label) {
      return Promise.race(array, label);
    };
  });
define("rsvp/reject", 
  ["./promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];

    __exports__["default"] = function reject(reason, label) {
      return Promise.reject(reason, label);
    };
  });
define("rsvp/resolve", 
  ["./promise","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];

    __exports__["default"] = function resolve(value, label) {
      return Promise.resolve(value, label);
    };
  });
define("rsvp/rethrow", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /**
      `RSVP.rethrow` will rethrow an error on the next turn of the JavaScript event
      loop in order to aid debugging.

      Promises A+ specifies that any exceptions that occur with a promise must be
      caught by the promises implementation and bubbled to the last handler. For
      this reason, it is recommended that you always specify a second rejection
      handler function to `then`. However, `RSVP.rethrow` will throw the exception
      outside of the promise, so it bubbles up to your console if in the browser,
      or domain/cause uncaught exception in Node. `rethrow` will throw the error
      again so the error can be handled by the promise.

      ```javascript
      function throws(){
        throw new Error('Whoops!');
      }

      var promise = new RSVP.Promise(function(resolve, reject){
        throws();
      });

      promise.catch(RSVP.rethrow).then(function(){
        // Code here doesn't run because the promise became rejected due to an
        // error!
      }, function (err){
        // handle the error here
      });
      ```

      The 'Whoops' error will be thrown on the next turn of the event loop
      and you can watch for it in your console. You can also handle it using a
      rejection handler given to `.then` or `.catch` on the returned promise.

      @method rethrow
      @for RSVP
      @param {Error} reason reason the promise became rejected.
      @throws Error
    */
    __exports__["default"] = function rethrow(reason) {
      setTimeout(function() {
        throw reason;
      });
      throw reason;
    };
  });
define("rsvp/utils", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function objectOrFunction(x) {
      return typeof x === "function" || (typeof x === "object" && x !== null);
    }

    __exports__.objectOrFunction = objectOrFunction;function isFunction(x) {
      return typeof x === "function";
    }

    __exports__.isFunction = isFunction;function isNonThenable(x) {
      return !objectOrFunction(x);
    }

    __exports__.isNonThenable = isNonThenable;function isArray(x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    }

    __exports__.isArray = isArray;// Date.now is not available in browsers < IE9
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
    var now = Date.now || function() { return new Date().getTime(); };
    __exports__.now = now;
    var keysOf = Object.keys || function(object) {
      var result = [];

      for (var prop in object) {
        result.push(prop);
      }

      return result;
    };
    __exports__.keysOf = keysOf;
  });
define("rsvp", 
  ["./rsvp/promise","./rsvp/events","./rsvp/node","./rsvp/all","./rsvp/all_settled","./rsvp/race","./rsvp/hash","./rsvp/rethrow","./rsvp/defer","./rsvp/config","./rsvp/map","./rsvp/resolve","./rsvp/reject","./rsvp/asap","./rsvp/filter","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __dependency15__, __exports__) {
    "use strict";
    var Promise = __dependency1__["default"];
    var EventTarget = __dependency2__["default"];
    var denodeify = __dependency3__["default"];
    var all = __dependency4__["default"];
    var allSettled = __dependency5__["default"];
    var race = __dependency6__["default"];
    var hash = __dependency7__["default"];
    var rethrow = __dependency8__["default"];
    var defer = __dependency9__["default"];
    var config = __dependency10__.config;
    var configure = __dependency10__.configure;
    var map = __dependency11__["default"];
    var resolve = __dependency12__["default"];
    var reject = __dependency13__["default"];
    var asap = __dependency14__["default"];
    var filter = __dependency15__["default"];

    config.async = asap; // default async is asap;

    function async(callback, arg) {
      config.async(callback, arg);
    }

    function on() {
      config.on.apply(config, arguments);
    }

    function off() {
      config.off.apply(config, arguments);
    }

    // Set up instrumentation through `window.__PROMISE_INTRUMENTATION__`
    if (typeof window !== 'undefined' && typeof window.__PROMISE_INSTRUMENTATION__ === 'object') {
      var callbacks = window.__PROMISE_INSTRUMENTATION__;
      configure('instrument', true);
      for (var eventName in callbacks) {
        if (callbacks.hasOwnProperty(eventName)) {
          on(eventName, callbacks[eventName]);
        }
      }
    }

    __exports__.Promise = Promise;
    __exports__.EventTarget = EventTarget;
    __exports__.all = all;
    __exports__.allSettled = allSettled;
    __exports__.race = race;
    __exports__.hash = hash;
    __exports__.rethrow = rethrow;
    __exports__.defer = defer;
    __exports__.denodeify = denodeify;
    __exports__.configure = configure;
    __exports__.on = on;
    __exports__.off = off;
    __exports__.resolve = resolve;
    __exports__.reject = reject;
    __exports__.async = async;
    __exports__.map = map;
    __exports__.filter = filter;
  });
global.RSVP = requireModule('rsvp');
}(window));/*!** End file: rsvp.js ***/
/*!** Begin file: handlebarTemplates.js ***/
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['autocompleteFooter'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"autocomplete-footer\">\n	<a href=\"/karta\" onclick=\"return xt_click(this, 'C', '28', 'Listning::Kartsök (autocomplete)', 'N');\"><span class=\"blocket-icon-map\"></span> S&ouml;k via karta</a>\n</div>";
  });
templates['multipleRangeList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "active";
  }

  buffer += "<div class=\"row header\">\n	<div class=\"col-xs-6\">\n		<h6>Min</h6>\n		<ul class=\"min\" data-control=\"";
  if (helper = helpers.minControl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.minControl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.minOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n	<div class=\"col-xs-6\">\n		<h6>Max</h6>\n		<ul class=\"max\" data-control=\"";
  if (helper = helpers.maxControl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.maxControl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.maxOptions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</ul>\n	</div>\n</div>\n<div class=\"row controls\">\n	<div class=\"col-xs-6\">\n		<button type=\"button\" class=\"btn btn-default btn-sm reset\">Rensa</button>\n	</div>\n	<div class=\"col-xs-6 align-right\">\n		<button class=\"btn btn-primary btn-sm\">OK</button>\n	</div>\n</div>";
  return buffer;
  });
templates['singleRangeList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "active";
  }

  buffer += "<div class=\"row header\">\n	<div class=\"col-xs-12\">\n	<h6>Min</h6>\n	<ul class=\"";
  if (helper = helpers.mode) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mode); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-control=\"";
  if (helper = helpers.control) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.control); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.options), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	</div>\n</div>\n<div class=\"row controls\">\n	<div class=\"col-xs-6\">\n		<button type=\"button\" class=\"btn btn-default btn-sm reset\">Rensa</button>\n	</div>\n	<div class=\"col-xs-6 align-right\">\n		<button class=\"btn btn-sm btn-primary\">Ok</button>\n	</div>\n</div>";
  return buffer;
  });
templates['mapSinglePopup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		<div class=\"item-img-container sprite_common_bostad_image_placeholder\">\n			<img src=\"";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"214\" height=\"123\" class=\"item-thumb\" alt=\""
    + escapeExpression((helper = helpers.stripTags || (depth0 && depth0.stripTags),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.address), options) : helperMissing.call(depth0, "stripTags", (depth0 && depth0.address), options)))
    + "\">\n		</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<tr>\n					<td class=\"price\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.price), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td class=\"rooms\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rooms), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n				</tr>\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n							"
    + escapeExpression((helper = helpers.formatCurrency || (depth0 && depth0.formatCurrency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.price), options) : helperMissing.call(depth0, "formatCurrency", (depth0 && depth0.price), options)))
    + ":-\n						";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							";
  if (helper = helpers.rooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " rum\n						";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<tr>\n					<td class=\"monthly-rent\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.monthly_rent), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td class=\"sqm\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sqm), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n				</tr>\n			";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n							"
    + escapeExpression((helper = helpers.formatCurrency || (depth0 && depth0.formatCurrency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.monthly_rent), options) : helperMissing.call(depth0, "formatCurrency", (depth0 && depth0.monthly_rent), options)))
    + " kr/m&aring;n\n						";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							";
  if (helper = helpers.sqm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sqm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " m&sup2;\n						";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"realtor-logo\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.realtor)),stack1 == null || stack1 === false ? stack1 : stack1.img)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.realtor)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n		";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<a href=\"";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-default item-popup-read-more\" title=\"Visa bostaden p� Blocket Bostad\">Mer om bostaden</a>\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logged_in), {hash:{},inverse:self.program(21, program21, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.watched), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<a id=\"save-link\" class=\"btn btn-default save-link\" data-list-id=\"";
  if (helper = helpers.list_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-watched=\"true\" href=\"#\" title=\"Ta bort sparad annons\"><span class=\"blocket-icon-heart\"></span><span class=\"sr-only\">Spara</span></a>\n					";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<a id=\"save-link\" class=\"btn btn-default save-link\" data-list-id=\"";
  if (helper = helpers.list_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-watched=\"false\" href=\"#\" title=\"Spara annons\"><span class=\"blocket-icon-heart\"></span><span class=\"sr-only\">Spara</span></a>\n					";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<a id=\"login-save-link\" class=\"btn btn-default save-link\" href=\"";
  if (helper = helpers.save_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.save_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"Logga in f�r att spara annons\"><span class=\"blocket-icon-heart\"></span><span class=\"sr-only\">Spara</span></a>\n				";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<a href=\"";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-default item-popup-read-more-full\" title=\"Visa bostaden p� Blocket Bostad\">Mer om bostaden</a>\n			";
  return buffer;
  }

  buffer += "<div class=\"item-popup\">\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.img), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"item-info\">\n		<h3>"
    + escapeExpression((helper = helpers.stripTags || (depth0 && depth0.stripTags),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.address), options) : helperMissing.call(depth0, "stripTags", (depth0 && depth0.address), options)))
    + "</h3>\n		<table>\n			";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.price), (depth0 && depth0.rooms), options) : helperMissing.call(depth0, "or", (depth0 && depth0.price), (depth0 && depth0.rooms), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.monthly_rent), (depth0 && depth0.sqm), options) : helperMissing.call(depth0, "or", (depth0 && depth0.monthly_rent), (depth0 && depth0.sqm), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</table>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realtor), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"buttons\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.watch_enabled), {hash:{},inverse:self.program(23, program23, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n</div>";
  return buffer;
  });
templates['mapMultiplePopup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n		<div class=\"item-img-container sprite_common_bostad_image_placeholder\">\n			<img src=\"";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"214\" height=\"123\" class=\"item-thumb\" alt=\""
    + escapeExpression((helper = helpers.stripTags || (depth0 && depth0.stripTags),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.address), options) : helperMissing.call(depth0, "stripTags", (depth0 && depth0.address), options)))
    + "\">\n		</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<tr>\n					<td class=\"price\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.price), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td class=\"rooms\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rooms), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n				</tr>\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n							"
    + escapeExpression((helper = helpers.formatCurrency || (depth0 && depth0.formatCurrency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.price), options) : helperMissing.call(depth0, "formatCurrency", (depth0 && depth0.price), options)))
    + ":-\n						";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							";
  if (helper = helpers.rooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " rum\n						";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<tr>\n					<td class=\"monthly-rent\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.monthly_rent), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td class=\"sqm\">\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sqm), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n				</tr>\n			";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n							"
    + escapeExpression((helper = helpers.formatCurrency || (depth0 && depth0.formatCurrency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.monthly_rent), options) : helperMissing.call(depth0, "formatCurrency", (depth0 && depth0.monthly_rent), options)))
    + " kr/m&aring;n\n						";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n							";
  if (helper = helpers.sqm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sqm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " m&sup2;\n						";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<div class=\"realtor-logo\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.realtor)),stack1 == null || stack1 === false ? stack1 : stack1.img)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.realtor)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n		";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<a href=\"";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-default item-popup-read-more\" title=\"Visa bostaden p� Blocket Bostad\">Mer om bostaden</a>\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logged_in), {hash:{},inverse:self.program(21, program21, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.watched), {hash:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<a id=\"save-link\" class=\"btn btn-default save-link\" data-list-id=\"";
  if (helper = helpers.list_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-watched=\"true\" href=\"#\" title=\"Ta bort sparad annons\"><span class=\"blocket-icon-heart\"></span><span class=\"sr-only\">Spara</span></a>\n					";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<a id=\"save-link\" class=\"btn btn-default save-link\" data-list-id=\"";
  if (helper = helpers.list_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-watched=\"false\" href=\"#\" title=\"Spara annons\"><span class=\"blocket-icon-heart\"></span><span class=\"sr-only\">Spara</span></a>\n					";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n					<a id=\"login-save-link\" class=\"btn btn-default save-link\" href=\"";
  if (helper = helpers.save_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.save_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"Logga in f�r att spara annons\"><span class=\"blocket-icon-heart\"></span><span class=\"sr-only\">Spara</span></a>\n				";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<a href=\"";
  if (helper = helpers.path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-default item-popup-read-more-full\" title=\"Visa bostaden p� Blocket Bostad\">Mer om bostaden</a>\n			";
  return buffer;
  }

  buffer += "<div class=\"item-popup\" data-list-id=\"";
  if (helper = helpers.list_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.list_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.img), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"item-info\">\n		<h3>"
    + escapeExpression((helper = helpers.stripTags || (depth0 && depth0.stripTags),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.address), options) : helperMissing.call(depth0, "stripTags", (depth0 && depth0.address), options)))
    + "</h3>\n		<table>\n			";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.price), (depth0 && depth0.rooms), options) : helperMissing.call(depth0, "or", (depth0 && depth0.price), (depth0 && depth0.rooms), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = (helper = helpers.or || (depth0 && depth0.or),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.monthly_rent), (depth0 && depth0.sqm), options) : helperMissing.call(depth0, "or", (depth0 && depth0.monthly_rent), (depth0 && depth0.sqm), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</table>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.realtor), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"buttons\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.watch_enabled), {hash:{},inverse:self.program(23, program23, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"pager\">\n		<div class=\"current_page\"><strong>";
  if (helper = helpers.current_page) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.current_page); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong> av ";
  if (helper = helpers.num_pages) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num_pages); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n		<div class=\"prev_next\">\n			<a href=\"#\" class=\"prev\">&laquo; F&ouml;rra</a>\n			<a href=\"#\" class=\"next\">N&auml;sta &raquo;</a>\n		</div>\n</div>";
  return buffer;
  });
templates['mapListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<li id=\"list-item-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"clearfix\">\n		<div class=\"item-img-container sprite_common_bostad_image_placeholder\">\n			";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.img), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n		<div class=\"item-info-container\">\n			<div class=\"item-address\">";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n			<table>\n				<tr>\n					<td class=\"wide\">\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.price), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td class=\"narrow\">\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.rooms), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n				</tr>\n				<tr>\n					<td class=\"wide\">\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.monthly_rent), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n					<td class=\"narrow\">\n					";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sqm), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</td>\n				</tr>\n			</table>\n		</div>\n	</li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<img src=\"";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" width=\"90\" height=\"65\" class=\"item-thumb\" alt=\"";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n						"
    + escapeExpression((helper = helpers.formatCurrency || (depth0 && depth0.formatCurrency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.price), options) : helperMissing.call(depth0, "formatCurrency", (depth0 && depth0.price), options)))
    + ":-\n					";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						";
  if (helper = helpers.rooms) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rooms); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " rum\n					";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n						"
    + escapeExpression((helper = helpers.formatCurrency || (depth0 && depth0.formatCurrency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.monthly_rent), options) : helperMissing.call(depth0, "formatCurrency", (depth0 && depth0.monthly_rent), options)))
    + " kr/m&aring;n\n					";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						";
  if (helper = helpers.sqm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sqm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " m&sup2;\n					";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();/*!** End file: handlebarTemplates.js ***/
/*!** Begin file: inception.js ***/

/*
	Copyright (c) 2010-2012 Filip Moberg, (filip@mcsquare.se)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	Author:		Filip Moberg
	Name:		inception.js
	Version:	1.2.4-6-g5b491b7.71
	Codename:	Awesomenessism
	Released:	2012-09-10 13:26:44 +0200
*/


// Root reference combatibility (for execution in a non browser environment)
(function () {

	if (typeof window === "undefined") {
		window = this;
		var __isBrowser = false;
	} else {
		var __isBrowser = true;
	}
})();


// Sandbox the environment
/** @param {...undefined} undefined */
(function(window, undefined) { 

	// Declare environment variables
	var document = window.document, navigator = window.navigator, location = window.location;


	// Create function in window object
	/** @constructor */
	window.inception = (function inception(oo) {

		var env = this;
		var self = this;
		var core = env.__core__;

		// Make sure core function is instantiated
		if (this === window) {
			return new inception(arguments[0]);
		}

		// Declare core object (with core functions)
		this.__core__ = {

			onload: [],
			instance: arguments[0],

			// Create deep copy of target object
			clone: function() {
				return this.extend({to: {}, from: arguments[0]});
			},
			// Count child objects
			count : function(o) {

				var c = 0, i;

				for (i in o) {
					if (o.hasOwnProperty(o)) {
						++c;
					}
				}

				return c;
			},
			// Error handling
			error: function() {
				var core = env.__core__;

				if (core.settings.error.show === true) {
					throw new Error(arguments[0]);
				}
				return
			},
			// Extend a primary object with a secondary
			extend: function(o) {

				// Make sure the environment is from the global scope.
                                if (env && env.__core__ && window[env.__core__.instance]) {
                                        env = window[env.__core__.instance];
                                }	

				// If set to true, the returned object will be a copy instead of reference
				if (o.clone === true) {
					o.from = this.clone(o.from); 
				}

				for (var n in o.from) {
					if (o.from.hasOwnProperty(n) === false) {
						continue;
					}

					if (o.construct === true && typeof o.from[n] === "function" && n !== "wrapper") {

						// Make a clone so the use of multiple selectors won't construct the same function twice
						o.from = this.clone(o.from);
						var core = env.__core__, node = [core.instance].concat(o.node.replace(/@/g, "").split(".")), wrapper = node[0], cache;
						o.wrapper = [];

						cache = core.wrapper.cache[core.instance];

						if (typeof cache === "function") {
							o.wrapper.push(cache);
						}

						for (var i=1; i < node.length; ++i) {
							wrapper = wrapper + "__" + node[i];
							cache = core.wrapper.cache[wrapper];
							if (typeof cache === "function") {
								o.wrapper.push(cache);
							}
						}

						for (var i=o.wrapper.length; i >= 0; --i) {

							// Construct the function
							o.from[n] = this.functionConstructor({method: o.from[n], func: n, node: o.node, loop: o.loop, wrapper: o.wrapper[i]});
						}

						// onReady executer
						this.onready({method: o.from[n], func: n, node: o.node, loop: o.loop});
					}

					if (typeof o.from[n] === "object" && n !== "selector" && n !== "$") {

						if (typeof o.to[n] === "undefined") {
							if (o.from[n] === null) {
								o.to[n] = null;
							} else if (o.from[n].constructor.toString().indexOf("Array") !== -1) {
								o.to[n] = [];
							} else {
								o.to[n] = {};
							}
						}

						this.extend({to: o.to[n], from: o.from[n], construct: o.construct, node: o.node, loop: o.loop});
					} else {
						o.to[n] = o.from[n];
					}
				}

				return o.to;
			},
			// Construct user function(s)
			functionConstructor: function(o) {

				var self = this;
				var core = env.__core__;

				// Construct function as ordinary
				return function() {

					if (typeof this[o.func] === "function") {

						// Set up selector
						this[o.func].selector = this[o.func].$ = core.selector;

						// Set up selector (for new methods, if the current method is used as a constructor)
						if (this[o.func].prototype) {
							this[o.func].prototype.selector = this[o.func].prototype.$ = core.selector;
						}

						// Set up node
						this[o.func].node = core.clone(core.node);

						// This line is for legacy purposes only (where the selector is called from the global object)
						window[core.instance].$ = window[core.instance].selector = core.selector;
					}

					// Execute user function in correct environment
					if (typeof o.wrapper === "function") {
						var self = this;
						var args = arguments;

						// Execute user function inside wrappers (if available)
						return o.wrapper.call({
							call: function() {

								// Apply method with its parent object as reference
								return o.method.apply(self, args);
							}
						});
					} else {
						// Execute user function as ordinary (if there are no wrappers defined for this object)
						return o.method.apply(this, arguments);
					}
				};
			},
			// Construct user function(s)
			onready: function(o) {

				var self = this;
				var core = env.__core__;

				switch(o.func) {

					// If function is an onReady function and it's the first node selector, load it into jQuery ready - else, load it straight after the window object.
					case "onReady":
						if (o.loop === "0" && typeof o.method !== "undefined") {

							if (typeof window.jQuery === "function") {

								window.jQuery(window[core.settings.jQuery.ready]).ready(function() {

									o.nodeKeys = o.node.split(".");
									o.parentNode = window[self.instance];
									for (var i in o.nodeKeys) {
										if (o.nodeKeys.hasOwnProperty(i) === false) {
											continue;
										}
										
										o.parentNode = o.parentNode[o.nodeKeys[i]];
									}

									// Call method with its parent object as reference
									o.method.call(o.parentNode);
								});

							} else {

								this.onload.push(o.method);

								window.onload = function() {
									for (o in self.onload) {
										if (self.onload.hasOwnProperty(o) === false) {
											continue;
										}
										
										o.nodeKeys = o.node.split(".");
										o.parentNode = window[self.instance];
										for (var i in o.nodeKeys) {
											if (o.nodeKeys.hasOwnProperty(i) === false) {
												continue;
											}
											
											o.parentNode = o.parentNode[o.nodeKeys[i]];
										}

										// Call method with its parent object as reference
										self.onload[o].call(o.parentNode);
									}
								}
							}
						}
						break;
				}
			},
			settings: {
				jQuery: {
					ready: "document"
				},
				error: {
					show: true
				}
			},
			// Create array from node string
			stringToArray: function() {
				return arguments[0].replace(/ /g, "").split("@").slice(1);
			},
			// Create object from node string
			stringToObject: function() {

				var selector = arguments[0].replace(/ /g, "").split("@").slice(1), a = [], s, o, i, node, shell;

				for (s in selector) {
					if (selector.hasOwnProperty(s) === false) {
						continue;
					}
					node = selector[s].split(".");

					if (node[0] !== "") {
						o = {};
						shell = o;

						for (i = 0; i < node.length-1; ++i) {
							o = o[node[i]] = {};
						}

						if (arguments[1]) {
							o = o[node[i]] = arguments[1];
						} else {
							o = o[node[i]] = {};
						}

						a.push(shell);
					}
				}

				return a;
			},
			// Create selector from node string
			stringToSelector: function() {
				var a = [], n = this.stringToArray(arguments[0]), i, x;

				for (i in n) {
					if (n.hasOwnProperty(i) === false) {
						continue;
					}
					var s = n[i].split(".");
					var node = env;

					for (x in s) {
						if (s.hasOwnProperty(x) === false) {
							continue;
						}
						
						if (typeof node[s[x]] !== "undefined") {
							node = node[s[x]];
						}
					}

					if (node !== env) {
						a.push(node);
					}
				}

				return a;
			},
			// Wrapper engine. Used for fetching stored wrappers in runtime.
			wrapper: {
				cache: {
				},

				get: function(o) {
					var wrapper, core = env.__core__, node = [core.instance].concat(o.node.replace(/@/g, "").split(".")), n, i;

					for (i in node) {
						if (node.hasOwnProperty(i) === false) {
							continue;
						}

						if (!n) {
							n = node[i];
						} else {
							n = n + "__" + node[i];
						}
						if (typeof core.wrapper.cache[n] === "function") {
							wrapper = core.wrapper.cache[n];
						}
					}
					return wrapper;
				}
			}
		};

		// Make the global object a reference to the instance function and return it
		/** @constructor */
		return new (window[arguments[0]] = function() {

			var extended, core = env.__core__;

			// Extend core object with instance object internally
			// Declare user functions and variables
			extended = core.extend({to: env, from: {

				// Default node and selector values
				__core__: {
					node: {
						getString: "",
						getArray: []
					},
					selector: []
				},

				// a DOM helper, to easily create new elements through jQuery. This actually is more of a jQuery plugin, but it's often useful - so I included it.
				append: function() {
					var core = env.__core__, o = arguments[0], jQuery = window.jQuery;

					// Faster than jQueries append, but lets you pass through css, bind and attribute objects to jQuery.
					if (typeof window.jQuery === "function") {
						return core.$.each(function() {

							if (o.element) {
								var obj = document.createElement(o.element);
								this.appendChild(obj);
							}

							if (o.css) {
								jQuery(obj).css(o.css);
							}

							if (o.attr) {
								jQuery(obj).attr(o.attr);
							}

							if (o.bind) {
								for (var k in o.bind) {
									if (o.bind.hasOwnProperty(k) === false) {
										continue;
									}
									
									jQuery(obj).bind(k, o.bind[k]);
								}
							}
						});
					}

					return env;
				},
				// Create a new instance and extend with a copy of selected objects
				clone: function() {

					var name = [], arg = arguments[0], i;

					if (arg) {
						name.push(arg);
					} else {
						name = core.node.getArray; 
					}

					for (i in name) {
						if (name.hasOwnProperty(i) === false) {
							continue;
						}
						
						// Create a new instance 
						new inception(name[i]);

						// Extend with core object
						core.extend({to: window[name[i]], from: core.clone(env)});

						// Extend with inner object
						core.extend({to: window[name[i]](), from: core.clone(env)});
					}

					return env;
				},
				// Extend selected node(s) with given object/function
				extend: function() {
					var shell, s = [], node;

					// Error on invalid node selector
					if (typeof core.node.getArray[0] === "undefined") {
						return core.error("inception.js: Trying to extend with invalid node selector.");
					}

					// Error on false input object
					if (typeof arguments[0] === "undefined") {
						return core.error("inception.js: Trying to extend with invalid input object.");
					}

					// Create shell object of selector node(s)
					shell = core.stringToObject(core.node.getString, arguments[0]);

					// Match shell with node array
					node = core.node.getArray;

					// Iterate over shell and extend each node
					for (var i in shell) {
						core.extend({to: this, from: shell[i], construct: true, node: node[i], loop: i});
						s.push(shell[i]);
					}

					// Extend up to the global object
					window[core.instance] = core.extend({to: window[core.instance], from: this});

					// Return inception object
					return env;
				},
				// Used to read and set new environment settings
				settings: function() {
					var core = env.__core__, settings = arguments[0];

					return core.extend({to: core.settings, from: settings});
				},
				// Crate a wrapper that sticks to a specified node, and then wraps the calling function with itself.
				wrap: function() {

					var a, i;

					if (typeof arguments[0] === "function") {

						a = core.node.getString.replace(/\./g, "__").replace(/ /g, "").split("@").slice(1);

						if (a.length === 0) {

							// Set wrapper cache
							core.wrapper.cache[core.instance] = arguments[0];
						}

						for (i in a) {
							if (a.hasOwnProperty(i) === false) {
								continue;
							}
							

							// Set wrapper cache
							core.wrapper.cache[core.instance + "__" + a[i]] = arguments[0];

							// Extend to core object
							core.extend({to: window[core.instance].__core__.wrapper, from: core.wrapper});
						}
					}

					return env;
				}
			}});

			// Extend up to the global object
			window[core.instance] = core.extend({to: window[core.instance], from: extended});

			// Append correct selector
			if (typeof arguments[0] === "string" && arguments[0].indexOf("@") !== -1) {

				// Set selector to an inception selector
				core.$ = core.selector = core.stringToSelector(arguments[0]);

				// Save original selector string
				core.node.getString = arguments[0];
				core.node.getArray = core.stringToArray(arguments[0]);

			} else if (typeof window.jQuery === "function") {

				// Set selector to a jQuery selector (if it's not an inception selector and if jQuery is present)
				core.$ = core.selector = window.jQuery(arguments[0]);
			} else if (arguments[0] && __isBrowser) {

				// Use native javascript CSS selector
				core.$ = core.selector = document.querySelectorAll(arguments[0]);
			} else {

				// Clear all old selectors
				core.node.getString = "";
				core.node.getArray = "";
				core.$ = core.selector = [];
			}
		
			// Return extended core object
			return extended;
		});
	});

})(window);
/*!** End file: inception.js ***/
/*!** Begin file: xtcore.js ***/
//-- Copyright 2013 AT Internet, All Rights Reserved.
//-- AT Internet Tag 4.3.001
var xt1='.blocket.se',xtLogDom='.xiti.com/hit.xiti',xtpreview=false,xtfirst=false,xtcode='',xt46='1',xt50='1',xt48='',xt54=false,xt58=false,xtdocl=false,xtud='undefined',xt2='0',xt3=3650,xtkwv='xtmc',xtkwp='xtnp',xtadch=new Array,xt4=new Array;xt4['sec']='20';xt4['rss']='20';xt4['epr']='20';xt4['erec']='20';xt4['adi']='20';xt4['adc']='20';xt4['al']='20';xt4['es']='20';xt4['ad']='20';
//do not modify below
var xtoid=new Array,xtnop=true,xtkey=false,xt49=null,xt5=30,xw=window,xd=document,xtg=navigator,xtv=(xw.xtczv!=null)?'43001-'+xw.xtczv:'43001',xt1=xw.xtdmc?';domain='+xw.xtdmc:(xt1!='')?';domain='+xw.xt1:'',xt6=(xw.xtnv!=null)?xw.xtnv:xd,xt7=(xw.xtsdi!=null)?xw.xtsdi:(xw.xtsd!=null)?xw.xtsd+xtLogDom:(((xd.location.protocol=='https:')?'https://logs2':'http://logc89')+xtLogDom),xt36=(xw.xtsts!=null)?xw.xtsts:0,xt37='';if(xt54){var xturl='';try{xturl=xt6.location.href;}catch(e){xturl=xw.location.href;}xt37=xtestr(xturl,/#.*/,1);xt37=xt37?'&sta='+encodeURIComponent(xtclURL(xt37)):'';}var xt38=(xw.xtcustom!=null)?xtserial(xw.xtcustom):'',xt8=(xw.xtsite!=null)?xw.xtsite:0,xt9=(xw.xtn2!=null)?'&s2='+xw.xtn2:'',xt8b=((xt8==0)?'':'s='+xt8)+((xt36==0)?'':((xt8==0)?'sts='+xt36:'&sts='+xt36)),xtp=(xw.xtpage!=null)?xw.xtpage:'',xt10=xw.xto_force?xw.xto_force.toLowerCase():null,xt11=(xt8=='redirect')?true:false,xtdi=xw.xtdi?'&di='+xw.xtdi:'',xt12=xw.xtidp?'&idpays='+xw.xtidp:'',xt13=xw.xtidprov?'&idprov='+xw.xtidprov:'',xtm=(xw.xtparam!=null)?xw.xtparam:'';xt46=((typeof(xw.xtnopage)!='undefined')&&(xw.xtnopage=='1'))?'0':xt46;xt50=((typeof(xw.xtergo)!='undefined')&&(xw.xtergo=='0'))?'0':xt50;var xtclzone=((typeof(xw.scriptOnClickZone)!='undefined')&&(xt50=='1'))?xw.scriptOnClickZone:0,xt15=(xw.xt_orderid!=null)?xw.xt_orderid:'',xt17=(xw.xtidcart!=null)?xw.xtidcart:'',xt44=(xw.xtprod_load!=null)?'&pdtl='+xw.xtprod_load:'',xt47=(xw.xtcode!='')?'&code='+xw.xtcode:'',xt60={i:[],u:[],d:[],l:[],e:[],p:[]};
if(xw.addEventListener){xw.addEventListener('unload',function(){},false);}else if(xw.attachEvent){xw.attachEvent('onunload',function(){});}
if(xd.addEventListener){xd.addEventListener('keydown',function(){xtkey=true},false);xd.addEventListener('keyup',function(){xtkey=false},false);}else if(xd.attachEvent){xd.attachEvent('onkeydown',function(){xtkey=true});xd.attachEvent('onkeyup',function(){xtkey=false});}
var xt18=(xw.roimt&&(xtm.indexOf('&roimt',0)<0))?'&roimt='+xw.roimt:'',xtmc=(xtm.indexOf('&mc=',0)<0)?(xw.xtmc?'&mc='+xw.xtmc:xtf3(xtkwv)?'&mc='+xtf3(xtkwv):xtf3('xtmc')?'&mc='+xtf3('xtmc'):''):'',xtcr=xtf3('xtcr')?'&mcrg='+xtf3('xtcr'):'',xtac=(xw.xtac&&(xtm.indexOf('&ac=',0)<0))?'&ac='+xw.xtac:'',xtat=(xw.xtat&&(xtm.indexOf('&at=',0)<0))?'&at='+xw.xtat:'',xtan=(xw.xtan&&(xtm.indexOf('&an=',0)<0))?'&an='+xw.xtan:'',xtnp=(xtm.indexOf('&np=',0)<0)?(xw.xtnp?'&np='+xw.xtnp:xtf3(xtkwp)?'&np='+xtf3(xtkwp):xtf3('xtnp')?'&np='+xtf3('xtnp'):''):'',xt19=((xw.xtprm!=null)&&(xtm.indexOf('&x',0)<0))?xw.xtprm:'';xtm+=xt18+xtmc+xtcr+xtac+((xtan!='')?xtan:xtat)+xtnp+xt19+xt37;var xt20='';try{xt20=top.document.referrer;}catch(e){try{xt20=xt6.referrer;}catch(e){}};var xts=screen,xt21=new Date(),xt22=xt21.getTime()/(1000*3600);
function xtserial(obj){var t=typeof(obj);if (t!="object"||obj===null){if(t=="string")obj=encodeURIComponent('"'+obj+'"');return String(obj);}else{var n,v,json=[],arr=(obj&&obj.constructor==Array);for(n in obj){v=obj[n];t=typeof(v);if(t=="string")v=encodeURIComponent('"'+v+'"');else if(t=="object"&&v!==null)v=xtserial(v);json.push((arr?"":encodeURIComponent('"'+n+'":'))+String(v));}return(arr?"[":"{")+String(json)+(arr?"]":"}");}}
function xtclURL(ch){return ch.replace(/%3C/g,'<').replace(/%3E/g,'>').replace(/[<>]/g,'');}
function xtf1(nom,xtenc){xtenc=((xtenc!=null)&&(xtenc!=xtud))?xtenc:'0';var cookies=xd.cookie,re=new RegExp('(?:^| )'+nom+'=([^;]+)'),result=re.exec(cookies)||null;if(result){result=xtclURL(result[1]);if(xtenc!='1'){result=unescape(result)}}return result}
function xt_addchain(val,varch){xtvarch=varch?varch:'abmv';itemp=(!xtadch[xtvarch])?0:xtadch[xtvarch];itemp++;xtm+='&'+xtvarch+''+itemp+'='+val;xtadch[xtvarch]=itemp;}if(typeof(xt_adch)=='function'){xt_adch();}
function wck(p1,p2,p3,p4,fmt){p2=(fmt==0)?p2:escape(p2);xd.cookie=p1+'='+p2+';expires='+p3.toGMTString()+';path=/'+p4;}
function xtf3(param,chba,a){var xtdeb=xt6.location.href,xturl=chba==null||chba==xtud?xtclURL(xtdeb.toLowerCase().replace(/%3d/g,'=')):chba,xtpos=xturl.indexOf(param+'=');if(xtpos>0){var chq=xturl.substr(1),mq=chq.substr(chq.indexOf(param+'='));if(a!=1){try{mq=decodeURIComponent(mq)}catch(e){mq=unescape(mq)}}var cr=mq.match(/(\[[^\]]*\])/g);if(cr){var str='';for(var i=0,l=cr.length;i<l;i++){str=cr[i].substring(1,cr[i].length-1);mq=mq.replace(str,encodeURIComponent(str))}}var posa=mq.indexOf("#"),pos=mq.search(/&.[^&]+=/gi);pos=(pos==-1)?((posa==-1)?mq.length:posa):((posa>0&&posa<pos)?posa:pos);if(a==1){return decodeURIComponent(mq.substring(mq.indexOf('=')+1,pos))}else{return mq.substring(mq.indexOf('=')+1,pos).replace('&','%26')}}else{return null}}
function xt_mvt(page,section,test,detail,varch){if(detail){for(var i=1;i<detail.length+1;i++){test+='&'+((varch)?varch:'abmv')+i+"="+detail[i-1]}}xtf4('','&p='+page+'&s2='+section+'&abmvc='+test+"&type=mvt")}
function xt_med(type,section,page,x1,x2,x3,x4,x5){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':(type=='M')?'&a='+x1+'&m1='+x2+'&m2='+x3+'&m3='+x4+'&m4='+x5:'&clic='+x1;xtf4(type,'&s2='+section+'&p='+page+xt_ajout,x2,x3);}
xtfirst=((xtg.userAgent.indexOf('Safari')!=-1&&xtg.userAgent.indexOf('Chrome')<0)||xtg.userAgent.indexOf('iPhone')!=-1||xtg.userAgent.indexOf('iPod')!=-1||xtg.userAgent.indexOf('iPad')!=-1||xtfirst||xw.xtidc);if(xtfirst){var xt40=(xw.xtidc)?xw.xtidc:xtf1('xtidc');if(xt40==null){var xt40=Math.floor(Math.random()*999999),xtane=xt21.getYear();if(xtane<100)xtane+=2000;if((xtane>100)&&(xtane<2000))xtane+=1900;var xt41=f_nb(xtane)+''+f_nb(xt21.getMonth())+''+f_nb(xt21.getDate())+''+f_nb(xt21.getHours())+''+f_nb(xt21.getMinutes())+''+f_nb(xt21.getSeconds());xt40=xt41+''+xt40}var xtdrc=new Date();xtdrc.setTime(xtdrc.getTime()+(315360000000));wck('xtidc',xt40,xtdrc,xt1,1);xt42=xtf1('xtidc');xt40+=((xt42==null)||(xt42!=xt40))?'-NO':''}
function xt_ad(x1,x2,x3){xtf4('AT','&atc='+x1+'&type=AT&patc='+xtp+'&s2atc='+xw.xtn2,x2,x3);}
function xt_adc(obj,x1,x2,x3){xtf4('AT','&atc='+x1+'&type=AT&patc='+xtp+'&s2atc='+xw.xtn2);return AT_click.do_navig(obj,x2,(x3)?'_blank':null,true)}
function xt_click(obj,type,n2,page,x1,x2,x3){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':'&clic='+x1;xtf4(type,'&s2='+n2+'&p='+page+xt_ajout);return AT_click.do_navig(obj,x2,(x3)?'_blank':null,true)}
function xt_form(obj,type,n2,page,x1,x2){xt_ajout=((type=='F')&&((x1==null)||(x1==xtud)))?'':'&clic='+x1;xtf4(type,'&s2='+n2+'&p='+page+xt_ajout);return AT_click.do_submit(obj,true,x2)}
var AT_click={id:0,objs:[],elem:function(a,d,e,b,c,g){var f={};f.urlDest=c;f.type=a;f.n2=d;f.label=e;f.typeClick=b;f.target=g;f.submit=!1===c?!1:!0;return f},addListener:function(a,d,e){window.addEventListener?a.addEventListener(d,e,!1):window.attachEvent&&a.attachEvent("on"+d,e)},tag:function(a,d,e,b,c,g,f){if(a.setAttribute)this.addElem(a,d,e,b,c,g,f);else for(var h in a)a[h].setAttribute&&this.addElem(a[h],d,e,b,c,g,f)},addElem:function(a,d,e,b,c,g,f){this.id++;a.setAttribute("data-xtclickid",
this.id);this.objs[this.id]=this.elem(d,e,b,c,g,f);"FORM"!=a.nodeName?this.addListener(a,"click",this.on_click_submit):this.addListener(a,"submit",this.on_click_submit)},on_click_submit:function(a){try{var d=a.target||a.srcElement,e=d.getAttribute("data-xtclickid"),b={},c="",g=a.defaultPrevented,f=AT_click;e&&(b=f.objs[e],"AT"!=b.type?c+="&p="+b.label+("C"==b.type?"&clic="+b.typeClick:""):"AT"==b.type&&(c+="&type=AT&atc="+b.label),xtf4(b.type,"&s2="+b.n2+c),g||(a.preventDefault(),"FORM"!=d.nodeName?
f.do_navig(d,b.urlDest,b.target):f.do_submit(d,null,b.submit)))}catch(h){}},do_navig:function(a,d,e,b){var c=null;if("A"!=a.nodeName)for(var g=a.parentNode;g;){if("A"==g.nodeName){c=g;break}g=g.parentNode}else c=a;if(c){if(c.target=e||a.target||"_self",c.href=d||a.href,!b||b&&!xtkey)if("_self"==c.target.toLowerCase()){if(setTimeout('self.location.href="'+c.href+'"',500),b)return!1}else if("_top"==c.target.toLowerCase()){if(setTimeout('top.location.href="'+c.href+'"',500),b)return!1}else if("_parent"==
c.target.toLowerCase()){if(setTimeout('parent.location.href="'+c.href+'"',500),b)return!1}else if("_blank"==c.target.toLowerCase()&&(setTimeout('(xw.open("'+c.href+'","_blank")).focus();',1),b))return!1}else d&&("_blank"==e?setTimeout('(xw.open("'+d+'","_blank")).focus();',500):setTimeout('self.location.href="'+d+'"',500));if(b)return xtkey=!1,!0},do_submit:function(a,d,e){if(e&&(setTimeout(function(){a.submit()},500),d&&e))return!1}};
function xt_rm(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14){var rmprm='&p='+x3+'&s2='+x2+'&type='+x1+'&a='+x4+'&m5='+x11+'&m6='+x12+(((x5!=null)&&(x5!='0'))?'&'+x5:'')+(((x7!=null)&&(x4!='pause')&&(x4!='stop'))?'&m1='+x7+'&'+x8+'&m3='+x9+'&m4='+x10+'&m7='+x13+'&m8='+x14+'&prich='+xtp+'&s2rich='+xw.xtn2:'')+(((x6!=null)&&(x6!='0')&&(x7!=null))?'&rfsh='+x6:'');xtf4(x1,rmprm);var t=new Date();if((x6!=null)&&(x6!='0')&&((x4=='play')||(x4=='play&buf=1')||(x4=='refresh'))){if(xt60.p[x1]&&(((t.getTime())-xt60.p[x1])>1800000)){xt60.d[x1]=0}if(((x4=='play')||(x4=='play&buf=1'))&&!xt60.d[x1]){xt60.d[x1]=t.getTime()/1e3;xt60.l[x1]=parseInt(x7);var y=Math.floor(x6),x=(y>1500)?1500:(y<5)?5:y;xt60.i[x1]=x;xt60.u[x1]=x;xt60.p[x1]=!1}else if(x4=='refresh'&&(x12=='live'||!xt60.l[x1]||(xt60.l[x1]>300&&xt60.i[x1]*100/xt60.l[x1]<2))){var e=(xt60.p[x1])?xt60.e[x1]:(t.getTime()/1e3)-xt60.d[x1];if(xt60.u[x1]*100/(e+30)<5){xt60.u[x1]=(e+30)/100*5}if(xt60.p[x1]){xt60.p[x1]=!1;xt60.d[x1]=(t.getTime()/1e3)-xt60.e[x1]}xt60.e[x1]=e}xtoid[x1]=xw.setTimeout("xt_rm('"+x1+"','"+x2+"','"+x3+"','refresh','0','"+x6+"',null,'"+x8+"','"+x9+"','"+x10+"','"+x11+"','"+x12+"')",xt60.u[x1]*1e3)}else if(((x4=='pause')||(x4=='stop'))&&(xw.xtoid!=null)){xw.clearTimeout(xtoid[x1]);if(x4=='stop'){xt60.i[x1]=0}else{xt60.p[x1]=t.getTime()}}}
function xtf4(x1,x2,x3,x4){if(((xtclzone==0)||(xtclzone==3)||(x1!='C'))&&(x1!='P')){if(x2.indexOf('&ati=')>-1){var a=xtf3('ati',x2,1)||"";if(a.length>1500){x2=x2.replace('&ati='+a,"");xt_ParseUrl3(Xt_id+xt8b+'&type=AT'+(xtfirst?'&idclient='+xt40:''),'&ati='+a.replace(/&/g,'%26'),1,1,'&ati=',',')}}if(xtnop&&xt46=='0'&&x1=='F'){Xt_param=Xt_param.replace('&p='+xtf3('p',Xt_param),'');Xt_param=Xt_param.replace('&s2='+xtf3('s2',Xt_param),'');xt_ParseUrl(Xt_id,Xt_param+x2+(xtfirst?'&idclient='+xt40:''),'&ref='+Xt_r.replace(/&/g,'$'),'1');xtnop=false}else{var xt22=new Date(),params=xt8b+x2+'&hl='+xt22.getHours()+'x'+xt22.getMinutes()+'x'+xt22.getSeconds();if(parseFloat(xtg.appVersion)>=4){try{params+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth}catch(e){}}xt_ParseUrl(Xt_id,params+(xtfirst?'&idclient='+xt40:''),'','1')}}if((x3!=null)&&(x3!=xtud)&&(x1!='M')){if((x4=='')||(x4==null)){xd.location=x3}else{xfen=window.open(x3,'xfen','');xfen.focus()}}else{return}}
function f_nb(a){a=a-Math.floor(a/100)*100;if(a<10){return '0'+a;}else{return a;}}
var xtidpg=f_nb(xt21.getHours())+''+f_nb(xt21.getMinutes())+''+f_nb(xt21.getSeconds())+''+xt_rd(7),xt23=0,xt16='',xt43=0;
function xt_addProduct(rg,pdt,qtt,unp,dsc,dscc){xt23++;xt16+='&pdt'+xt23+'=';xt16+=rg?rg+'::':'';xt16+=pdt?pdt:'';xt16+=qtt?'&qte'+xt23+'='+qtt:'';xt16+=unp?'&mt'+xt23+'='+unp:'';xt16+=dsc?'&dsc'+xt23+'='+dsc:'';xt16+=dscc?'&pcode'+xt23+'='+dscc:'';}
function xt_rd(nb){return Math.floor(Math.random()*Math.pow(10,nb));}
function xt_addProduct_v2(rg,pdt,qtt,unp,unpht,dsc,dscht,dscc,roimtp){xt23++;xt16+='&pdt'+xt23+'=';xt16+=rg?rg+'::':'';xt16+=pdt?pdt:'';xt16+=qtt?'&qte'+xt23+'='+qtt:'';xt16+=unp?'&mt'+xt23+'='+unp:'';xt16+=unpht?'&mtht'+xt23+'='+unpht:'';xt16+=dsc?'&dsc'+xt23+'='+dsc:'';xt16+=dscht?'&dscht'+xt23+'='+dscht:'';xt16+=roimtp?'&roimt'+xt23+'='+roimtp:'';xt16+=dscc?'&pcode'+xt23+'='+dscc:'';}
function xt_addProduct_load(rg,pdt,xv){if(pdt){xt43++;xt44+=(xt43==1)?'&pdtl=':'|';xt44+=rg?rg+'::':'';xt44+=pdt;xt44+=xv?';'+xv:'';}}if(typeof(xt_cart)=='function'){xt_cart();}else{xt16='';}
function xt_ParseUrl(hit,xtch,xtrefP,thit){var tabUrl=new Array;if(xtch.length>0){var xtlg=1600-xtrefP.length,i=0,j=0,xtch_prec='',xterr=0;while((xtch.length>xtlg)&&(xtch_prec!=xtch)&&(xterr==0)){xtch_prec=xtch;var xsep='&pdt';if(xtch.lastIndexOf(xsep,xtlg)<=0){if(xtch.lastIndexOf('&',xtlg)<=0){xterr=1}else{xsep='&';}}if(xterr==1){tabUrl[i]=xtch.substring(0,1600)+'&mherr=1';}else{tabUrl[i]=xtch.substring(0,xtch.lastIndexOf(xsep,xtlg));xtch=xtch.substring(xtch.lastIndexOf(xsep,xtlg),xtch.length);i++;xtlg=1600;}}if(xterr==0){tabUrl[i]=xtch;if(xt38!=''){var stc='&stc=';if((stc.length+xt38.length+xtch.length)<xtlg){tabUrl[i]+=(stc+xt38);}else{i++;xt38=stc+xt38;while((xt38.length>xtlg)&&(xtch_prec!=xt38)){xtch_prec=xt38;var xsep=',';if(xt38.lastIndexOf(xsep,xtlg)<=5){xterr=1;}if(xterr==1){tabUrl[i]=xt38.substring(0,1600)+'&mherr=1';}else{tabUrl[i]=xt38.substring(0,xt38.lastIndexOf(xsep,xtlg));xt38=stc+xt38.substring(xt38.lastIndexOf(xsep,xtlg),xt38.length);i++;xtlg=1600;}}if(xterr==0){tabUrl[i]=xt38;}}}}for(j=0;j<=i;j++){if(i>0){tabUrl[j]+='&mh='+(j+1)+'-'+(i+1)+'-'+xtidpg;}if(j>0){tabUrl[j]=((xt15!='')||(xt17!=''))?xt8b+'&cmd='+xt15+'&idcart='+xt17+tabUrl[j]:xt8b+tabUrl[j];}else{tabUrl[j]+=xtrefP;}if((thit=='')||(thit==null)){xd.write('<img width="1" height="1" src="'+hit+tabUrl[j]+'">');}else if(thit=='1'){var xt_img=new Image();xt_img.src=hit+tabUrl[j];xt_img.onload=function(){xt_img.onload=null;};}}}}
function xt_ParseUrl3(str1,str2,nt,ntg,name,sep,idp){if(idp){}else{idp=xtidpg.substring(0,6)+xt_rd(8)}var xt_imgc=new Image(),lim=1500,mh='&mh='+nt+'-'+ntg+'-'+idp;if(str2.length>lim){var reg=new RegExp('['+sep+']','gi'),tab=str2.split(reg),hit='',l=tab[0].length,i=0;while((l<lim)&&(i<tab.length)){hit+=tab[i]+sep;if(i<tab.length-1)l+=(tab[i+1].length)+1;i+=1}ntg=(ntg==1)?Math.ceil(str2.length/lim):ntg;mh='&mh='+nt+'-'+ntg+'-'+idp;if(hit!=''){xt_imgc.src=str1+'&idp='+idp+mh+hit;xt_imgc.onload=function(){xt_imgc.onload=null}}else{xt_imgc.src=str1+'&idp='+idp+mh+str2.substring(0,lim)+'&mherr=1';xt_imgc.onload=function(){xt_imgc.onload=null};return}str2=name;for(var j=i;j<tab.length;j++){str2+=tab[j]+((j==(tab.length-1))?'':sep)}xt_ParseUrl3(str1,str2,nt+1,ntg,name,sep,idp)}else if(str2.length>name.length){xt_imgc.src=(nt==1)?str1+'&idp='+idp+str2:str1+'&idp='+idp+mh+str2;xt_imgc.onload=function(){xt_imgc.onload=null}}}
function xtestr(str,expr,pos){var xtid=null;try{xtid=str.match(expr)[pos-1];}catch(e){xtid=null}return xtid;}
function xtLhit(){if((!xtpre&&xtone)||(!xd.webkitHidden&&xtone)){xt_ParseUrl(Xt_id,Xt_param+(xtfirst?'&idclient='+xt40:''),'&ref='+Xt_r.replace(/&/g,'$'),xt46);if(xt44!=''){xt_ParseUrl3(Xt_id+xt8b+'&p='+xtp+(xtfirst?'&idclient='+xt40:'')+(xw.xt_pageID?'&pid='+xw.xt_pageID+'&pchap='+(xw.xt_chap||'')+'&pidt='+(xw.xt_pageDate||''):'')+'&type=PDT'+xthl,xt44,1,1,'&pdtl=','|')}if(xtati.length>1500){xt_ParseUrl3(Xt_id+xt8b+'&p='+xtp+'&s2='+xw.xtn2+'&type=AT'+(xtfirst?'&idclient='+xt40:''),'&ati='+xtati.replace(/&/g,'%26'),1,1,'&ati=',',')}(function(){if(typeof(xtscript)!='undefined'){var at=document.createElement('script');at.type='text/javascript';at.async=true;at.src=xtscript;(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]||document.getElementsByTagName('script')[0].parentNode).insertBefore(at,null)}})();xtone=false}}
if((xt8!=0)||(xt36!=0)||(xt11)){if(xt48!=''){var xtvid=xtf1('xtvid');if(!xtvid){xtvid=xt21.getTime()+''+xt_rd(6);xt49=xtvid;}var xtexp=new Date();xtexp.setMinutes(xtexp.getMinutes()+30);wck('xtvid',xtvid,xtexp,'',1);}var xtpm='xtor'+ xt8,xtpmd='xtdate'+ xt8,xtpmc='xtocl'+ xt8,xtpan='xtan'+ xt8,xtpat='xtat'+ xt8,xtpant='xtant'+ xt8,xt24=xtf3('xtor'),xtdtgo=xtf3('xtdt'),xt25=xtf3('xtref'),xt26=xtf3('xtan'),xt55=xtf3('xtat'),xt27=xtf3('an',xtm),xt56=xtf3('at',xtm),xt28=xtf3('ac',xtm),cookie_xtpmc=xtf1(xtpmc),cookie_xtgo=xtf1('xtgo'),cookie_xtord=xtf1('xtord'),cookie_xtvrn=xtf1('xtvrn'),xtocl=(cookie_xtpmc!=null)?cookie_xtpmc:'$',xtord=(cookie_xtgo=='0')?cookie_xtord:null,xtgord=(cookie_xtgo!=null)?cookie_xtgo:'0',xtvrn=(cookie_xtvrn!=null)?cookie_xtvrn:'$',xtgmt=xt21.getTime()/60000,xtgo=(xtdtgo!=null)?(((xtgmt-xtdtgo)<30)&&(xtgmt-xtdtgo)>=0)?'2':'1':xtgord,xtpgt=(xtgord=='1')?'&pgt='+cookie_xtord:((xtgo=='1')&&(xt24!=null))?'&pgt='+xt24:'',xto=(xt10!=null)?xt10:((xt24!=null)&&(xtgo=='0'))?xt24:(!xt11)?xtord:null;
xto=((xtocl.indexOf('$'+xto+'$')<0)||(xtocl=='$'))?xto:null;var xtock=(xtgo=='0')?xto:(xtgord=='2')?cookie_xtord:(xtgo=='2')?xt24:null;if(xtock!=null){tmpxto=xtock.substring(0,xtock.indexOf('-'));var xtdrm=xt4[tmpxto];}else{xtdrm='1';}if((xtdrm==null)||(xtdrm==xtud)){xtdrm=xt4['ad'];}if((xt26==null)&&(!xt11)){xt26=xtf1('xtanrd');}if((xt55==null)&&(!xt11)){xt55=xtf1('xtatrd');}var xtanc=xtf1(xtpan),xtattc=xtf1(xtpat),xtanct=xtf1(xtpant),xtxp=new Date(),xt29=new Date(),xt30=new Date();
if(!xt11){xtxp.setTime(xtxp.getTime()+(xtdrm*24*3600*1000));}else{xtxp.setTime(xtxp.getTime()+(xt5*1000));}xt30.setTime(xt30.getTime()+1800000);xt29.setTime(xt29.getTime()+(xt3*24*3600*1000));var xt31=(xt26!=null)?xt26.indexOf('-'):0,xt57=(xt55!=null)?xt55.indexOf('-'):0,xtan2=(xt27!=null)?'':((xt26!=null)&&(xt31>0))?'&ac='+xt26.substring(0,xt31)+'&ant=0&an='+xt26.substring(xt31+1,xt26.length):(xtanc!=null)?'&anc='+xtanc+'&anct='+xtanct:'',xtat2=(xt56!=null)?'':((xt55!=null)&&(xt57>0))?'&ac='+xt55.substring(0,xt57)+'&ant=0&at='+xt55.substring(xt57+1,xt55.length):(xtattc!=null)?'&attc='+xtattc+'&anct='+xtanct:'',xt32=(xtvrn.indexOf('$'+xt8+'$')<0)?'&vrn=1':'',xt35=((xtf3('xtatc')!=null)&&(xtf3('atc',xtm)==null))?'&atc='+xtf3('xtatc'):'';
if(xt32!=''){wck('xtvrn',(xtvrn.length<141)?xtvrn+xt8+'$':xtvrn.substring(0,141),xt29,xt1,0);}xt32+=(xto==null)?'':'&xto='+xto;xt32+=((xtan2!='')?xtan2:xtat2)+xtpgt+xt35;if(xt27!=null){wck(xtpan,xt28+'-'+xt27,xt29,xt1,1);wck(xtpant,'1',xt29,xt1,1);}else if((xt26!=null)&&(xtanct!='1')){wck(xtpan,xt26,xt29,xt1,1);wck(xtpant,'0',xt29,xt1,1);}if(xt56!=null){wck(xtpat,xt28+'-'+xt56,xt29,xt1,1);wck(xtpant,'1',xt29,xt1,1);}else if((xt55!=null)&&(xtanct!='1')){wck(xtpat,xt55,xt29,xt1,1);wck(xtpant,'0',xt29,xt1,1);}
var xtor=xtf1(xtpm),xtor_duree=xtf1(xtpmd),xtdate2=(xtor_duree!=null)?new Date(xtor_duree):new Date(),xt34=xtdate2.getTime()/(1000*3600),xtecart=(Math.floor(xt22-xt34)>=0)?Math.floor(xt22-xt34):0;xt32+=(xtor==null)?'':'&xtor='+xtor+'&roinbh='+xtecart;var xt33='',Xt_r=(xt25!=null)?xt25.replace(/[<>]/g,''):xtf1('xtref');if(Xt_r==null){Xt_r=xt20.replace(/[<>]/g,'');}if(Xt_r!=null)Xt_r=Xt_r.substring(0,1000);if (!xt11){if((xtock!=null)&&((xtocl.indexOf('$'+escape(xtock)+'$')<0)||(xtocl=='$'))){wck(xtpmc,xtocl+xtock+'$',xt30,xt1,1);}xt33+=xtg.javaEnabled()?'&jv=1':'&jv=0';var xtnav=xtg.appName+' '+xtg.appVersion,xtIE=(xtnav.indexOf('MSIE'));if(xtIE>=0){var xtvers=parseInt(xtnav.substr(xtIE+5));xtIE=true;}else{xtvers=parseFloat(xtg.appVersion);xtIE=false;}var xtnet=(xtnav.indexOf('Netscape')>=0),xtmac=(xtnav.indexOf('Mac')>=0),xtOP=(xtg.userAgent.indexOf('Opera')>=0);if((xtIE)&&(xtvers >=5)&&(!xtmac)&&(!xtOP)&&(!xt11)){try{xd.body.addBehavior('#default#clientCaps');}catch(e){}var xtconn='&cn='+xd.body.connectionType;xtconn+='&ul='+xd.body.UserLanguage;try{xd.body.addBehavior('#default#homePage');}catch(e){}var xthome='';try{xthome=(xd.body.isHomePage(location.href))?'&hm=1':'&hm=0';}catch(e){};var xtresr='&re='+xd.body.offsetWidth+'x'+xd.body.offsetHeight;}else{var xtconn='',xthome='';if(xtvers>=5){xtresr='&re='+xw.innerWidth+'x'+xw.innerHeight;}else{xtresr=''}}
if((xtnet)&&(xtvers >=4)||(xtOP)){var xtlang='&lng='+xtg.language;}else{if((xtIE)&&(xtvers >=4)&&(!xtOP)){var xtlang='&lng='+xtg.userLanguage;}else{xtlang='';}}wck('xtord','',xt21,xt1,1);if(xtock!=null){if((xtor==null)||(xt2=='1')){wck(xtpm,xtock,xtxp,xt1,1);wck(xtpmd,xt21,xtxp,xt1,1);}}var xthl='&hl='+xt21.getHours()+'x'+xt21.getMinutes()+'x'+xt21.getSeconds(),xt45=(xtdocl)?'&docl='+encodeURIComponent(xt6.location.href.replace(/&/g,'#ec#')):'',Xt_param=xt8b+xt9+'&p='+xtp+xthl+xtdi+xt12+xt13+xt32+xt45+xt47+xtm+xtconn+xthome+xtlang+'&vtag='+xtv+'&idp='+xtidpg;var xtvalCZ=xtf1('xtvalCZ',1);if(xtvalCZ!=null){Xt_param+=xtvalCZ;var xtdateo=new Date();xtdateo.setTime(xtdateo.getTime()-3600000);wck('xtvalCZ',xtvalCZ,xtdateo,xt1,1);}var Xt_id=xt7+'?';if(xtvers >=4){try{xt33+='&r='+xts.width+'x'+xts.height+'x'+xts.pixelDepth+'x'+xts.colorDepth;}catch(e){}}
var xtide=xtf1('xtide');if(xtock!=null){switch(tmpxto.toLowerCase()){case'erec':case'epr':case'es':var xtmpide=null;try{var xtide_t=xtock.match(/(\[[^\]]*\])|([^\-]+)|(-)/g);var xtide_c=0;for(elem in xtide_t){if(xtide_t[elem]=="-"){xtide_c++}if(xtide_c==5&&xtide_t[elem]!="-"){xtmpide=xtide_t[elem]}}}catch(e){xtmpide=null}if(xtmpide!=null){xtide=xtmpide;wck('xtide',xtide,xt29,'',1)}break;default:break}}Xt_param+=xt33+xtresr+xt16+((xtide!=null)?'&ide='+xtide:'');var Xt_i=Xt_id+Xt_param+'&ref='+Xt_r.replace(/&/g,'$');if(xt49){Xt_param+='&lnk='+xt48+'&vid='+xt49;}var xtati=xtf3('ati',Xt_param,1)||'';if(xtati.length>1500){Xt_param=Xt_param.replace('&ati='+xtati,'')}var xtpre=false,xtone=true;if(window.navigator&&window.navigator.loadPurpose==="preview"&&xtg.userAgent.indexOf('Safari')!=-1&&xtg.userAgent.indexOf('Chrome')<0){if(xtpreview)xt_med('F',xt9.replace('&s2=',''),xtp+"&pvw=1")}else if(xd.webkitVisibilityState=="prerender"){xtpre=true;xd.addEventListener("webkitvisibilitychange",xtLhit,false)}else{xtLhit()}}else{wck('xtgo',xtgo,xtxp,xt1,1);if(xt24!=null){wck('xtord',xt24,xtxp,xt1,1);}if(xt26!=null){wck('xtanrd',xt26,xtxp,xt1,1);}if(xt55!=null){wck('xtatrd',xt55,xtxp,xt1,1);}if(Xt_r!=''){wck('xtref',Xt_r.replace(/&/g,'$'),xtxp,xt1,0);}if(xw.xtloc!=null){xt6.location=xw.xtloc;}}}
if((xtclzone>0)&&(typeof(xtNodesload)=='function')){if(!xt58){xtNodesload();}else if(xw.addEventListener){xw.addEventListener('load',xtNodesload,false);}else if(xw.attachEvent){xw.attachEvent('onload',xtNodesload);}}/*!** End file: xtcore.js ***/
/*!** Begin file: common.js ***/
jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
/*
	* Initialize blocket top node, and set global wrappers.
	* IMPORTANT! -> This affects ALL js functions within the blocket namespace.
	*/
new inception("blocket");

blocket("@apps @common @campaigns").wrap(function() {
	try {
		return this.call();
	} catch(e) {
		if (typeof(blocket.params) != "undefined" && blocket.params.regress == 1) {
			throw e;
		}
		if (e.fileName !== undefined) {
			console.log(e.fileName + ":" + e.lineNumber + ": " + e.message);
		} else {
			console.log("Caught exception: " + e.message);
		}
	}
});

/* Create init functionality for application level */

blocket("@init.base @init.clean @init.simple").extend(function() {
	var application = blocket.params.application;

	blocket.init.common();

	if (typeof(blocket.init[application]) === "function") {
		blocket.init[application]();
	}

	for (var key in blocket.init[application]) {
		if (typeof(blocket.init[application][key]) === "function") {
			blocket.init[application][key]();
		}
	}

	/* Execute campaigns */
	var func_arr = blocket.apps.common.campaigns[application];

	if (typeof func_arr !== "undefined") {
		for (var i = 0; i < func_arr.length; ++i) {
			if (typeof func_arr[i] === "function") {
				func_arr[i]();
			}
		}
	}
});



blocket("@init.common").extend(function() {

	// will resize div#blocket_content so white site background will follow al the way down to the end of the window
	blocket.apps.common.resize_blocket_content();
	$(window).resize(function() {
		blocket.apps.common.resize_blocket_content();
	});

	// Clear No JavaScript cookie
	$.removeCookie("nojs", {path: "/", domain: blocket.bconf.common.cookie_domain})

	blocket.common.BrowserDetect.init();
	blocket.common.fix_next_image();

	/// Lazy load images
	if ((blocket.params.application == "view" && lazy_load_conf.vi_enabled == 1) ||
		(blocket.params.application == "list" && lazy_load_conf.li_enabled == 1)) {

		/* We don't use the lazy load module at Bostad, so we only run it if it's available.
		Would love to not include this file at all, but there's a lot of stuff in here that we may or may not need. */
		if ($.lazyload !== undefined) {
			/* Lazyload on scroll */
			$.lazyload({
				placeholder : lazy_load_conf.placeholder,
				threshold : lazy_load_conf.threshold,
				event : "scroll",
				container : window
			});

			/* Lazyload on DOM change */
			$.lazyload({
				placeholder : lazy_load_conf.placeholder,
				threshold : lazy_load_conf.threshold,
				event : "DOMSubtreeModified",
				container : window
			});
		}
	}

	// Make middle mouse button clicks work on .link-elements
	$(".link").mouseup(function(event) {
		if (event.which == 2) {
			event.preventDefault();
			$(this).click();
		}
	});
	$(".link").mousedown(function(event) {
		if (event.which == 2) {
			event.preventDefault();
			$(this).click();
		}
	});

	$(".set_sq").bind("click", function(ev) {
		var sq = $(this).data("sq");
		if (sq) {
			$.cookie("sq", sq, {path: "/", domain: blocket.bconf.common.cookie_domain}, "disable_encoding");
		}
	});

	//set target="_blank" to links with class target_blank
	jQuery(".target_blank").attr("target", "_blank");


	blocket.apps.all_pages.document_write_org = document.write;
	document.write = blocket.apps.all_pages.document_write_override;
	//blocket.tools.breadcrumb_shortener();

	$('.link_disable').on("click", function(e) {
		e.preventDefault();
	});

	// Makes banners visible at the same time
	blocket.common.onload_queue.add( {
		onload_function: function(obj) {
			new lazy_iframe();
		}
	}, 'medium' );

	/* Avoid breaking */
	if (typeof(console) == "undefined") {
		console = {};
		console.log = function(str) {};
	}

	// This prevents multiple form submits. Disables submit-button after submit.
	$('form').bind("submit", function() {
		$(".one_click", $(this)).attr('value', 'V�nta...').prop('disabled', true);
	});

	// Determine and set OS variables
	blocket.apps.all_pages.detect_os(navigator.userAgent);

	// Ugliest fix ever. See below. (for friendly iframes - apparently, not so friendly with Safari...)
	blocket.apps.common.safari_ugly_fix.append();

	// Invoke impression counter on Bostad triplebanner
	blocket.apps.all_pages.invoke_impression();
});



blocket("@tools").extend({
	set_iframe_height : function(minHeight) {
		var elem = window.frameElement;
		var i = 0;

		if (elem != null) {
			var interval = setInterval(function() {
				var height = Math.max(document.body.scrollHeight, document.body.clientHeight);
				if (height > minHeight){
					clearInterval(interval);
					elem.height = height;
					elem.style.height = height + "px";
				}
				if(i > 3000){
					clearInterval(interval);
				}
				i++;

			}, 1);
		}
	},

	/*
	 * Truncate breadcrumbs, starting from the first element after the the First Page element.
	 * Reduces the size of the elments in #breadcrumb_container until it fits within #breadcrumb
	 */

	breadcrumb_truncator : function(max_breadcrumb_width) {
		var current_width;
		var current_height;
		var max_width = max_breadcrumb_width || 600;
		var $breadcrumb;
		var breadcrumb_elements;
		var bc_element;
		var current_label;

		if (blocket.params.application == "view" || blocket.params.application == "list") {
			if ($(".list_stores")[0]) // XXX Use sub_application instead?
				return;

		} else {
			return;
		}

		$breadcrumb = $("#breadcrumb_container");
		breadcrumb_elements = $breadcrumb.find("a");
		current_width = $breadcrumb.width();
		current_height = $breadcrumb.height();

		var i = 2;
		var number_of_elements = breadcrumb_elements.length;
		while ((current_width > max_width || current_height > 30) && i < number_of_elements) {
			bc_element = $(breadcrumb_elements[i]); // Element to truncate
			current_label = bc_element.html();
			if (current_label.length > 3) {
				bc_element.attr("title", bc_element.text());
				bc_element.html(current_label.substring(0, 3) + "...");
			}
			current_width = $breadcrumb.width();
			current_height = $breadcrumb.height();
			i++;
		}
	},

	parse_url: function(url) {
		/* http[colon]//www.blocket.se[colon2]port[slash]path[questionmark]query[hash]id */
		var colon = url.indexOf(":");
		var colon2 = url.indexOf(":", (colon !== -1) ? colon + 1 : 0);
		var slash = url.indexOf("/", (colon !== -1) ? colon + 3 : 0);
		var questionmark = url.indexOf("?");
		var hash = url.indexOf("#");

		var host_start;
		var host_end;

		var url_obj = {
			protocol: "",
			hostname: "",
			port: "",
			pathname: "",
			search: "",
			qs: {},
			hash: ""
		};

		/* Protocol */
		if (colon !== -1) {
			url_obj.protocol = url.slice(0, colon + 1);
			host_start = colon + 3;
		} else {
			host_start = 0;
		}

		/* Hostname */
		host_end = (colon2 !== -1) ? colon2 : slash;
		url_obj.hostname = url.slice(host_start, host_end);

		/* Port */
		if (colon2 !== -1) {
			url_obj.port = url.slice(colon2 + 1, (slash !== -1) ? slash : url.length);
		}

		/* Pathname */
		if (slash !== -1) {
			var path_end = (questionmark !== -1) ? questionmark : ((hash !== -1 ) ? hash : url.length);
			url_obj.pathname = url.slice(slash, path_end);

			/* Default */
			if (url_obj.pathname == "") {
				url_obj.pathname = "/";
			}
		}

		/* Query string */
		if (questionmark !== -1) {
			url_obj.search = (hash !== -1) ? url.slice(questionmark, hash) : url.slice(questionmark);

			var qs = url_obj.search.slice(1).split("&");

			for (var i = 0; i < qs.length; ++i) {
				var split = qs[i].split("=");
				url_obj.qs[split[0]] = split[1];
			}
		}



		/* Hash */
		if (hash !== -1) {
			url_obj.hash = url.slice(hash);
		}

		var qs_sep = url.indexOf()

		return url_obj;
	},
	escapeHtml: function(str) {
		var entities = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			"/": '&#x2F;'
		};
		return String(str).replace(/[&<>"'\/]/g, function (chr) {
			return entities[chr];
		});
	}
});

blocket("@apps.common").extend({

	resize_blocket_content: function () {
		//Don't do this on Bostad, plz
		if ($("#blocket").hasClass("realestate")) { return; }

		var set_height = $(window).height();
		var extra_height;

		if ($("body").attr("id") === "index") {
			extra_height = 0; // Footer is already included in blokcet_content
		}else{
			extra_height = 38 + $(".footer").outerHeight(); // footer is not included
		}

		var set_height = set_height - $("#blocket_header").outerHeight() - extra_height; 
		$("#blocket_content").css("min-height", set_height + "px");
	},


	campaigns: {},

	campaign: function(app, func) {
		if (typeof this.campaigns[app] === "undefined") {
			this.campaigns[app] = [];
		}
		this.campaigns[app].push(func);
	},

	dialog_settings: {
		show_preload_text: true,
		pretext: {
			"phonenumber" : "Laddar telefonnummer...",
			"mail" : "Laddar mejlformul�ret...",
			"tellafriend" : "Laddar mejlformul�ret...",
			"trustly" : "Laddar direktbetalning...",
			"default" : "Laddar..."
		},
		prevent_scroll: false
	},

	print_ad_action_dialog: function(args) {
	 	"use strict";

		var $contact_container;
		var $contact_container_content;


		// grab container
		$contact_container = $("#contact_container")
		$contact_container_content = $("#contact_container_content");
		$contact_container_content.empty();

		//set defaults of args
		args = args || {};
		args.skin = args.skin || "skin_default";
		args.pretext = args.pretext || "Laddar...";

		// build preload text box
		if (blocket.apps.common.dialog_settings.show_preload_text) {

				var frag = document.createDocumentFragment();
				var new_div = document.createElement("div");
				new_div.setAttribute("class","preload_indicator")
				frag.appendChild(new_div);
				$contact_container_content[0].appendChild(frag);


			var contact_dialog_preload_text_interval = window.setTimeout(function() {
					$(".preload_indicator").text(args.pretext);
			}, 300);

		}

		// Add/remove skin css class
		if (args.skin === "skin_default") {
			args.remove_skin = "skin_raw";
		} else if (args.skin === "skin_raw") {
			args.remove_skin = "skin_default";
		}
		$contact_container.removeClass(args.remove_skin);
		$contact_container.addClass(args.skin);

		// Close link position
		$("#contact_container_close_link").css("top","0px");

		blocket.apps.common.show_contact_container(args.prevent_scroll);

		// Return data-append function for later execution
		return function(data) {

			// clear preload text interval
			window.clearTimeout(contact_dialog_preload_text_interval);

			// Reset container
			$contact_container_content.empty();

			// Add new data to the container
			$contact_container_content.append(data);

			// Placeholder fallback
			blocket.apps.common.init_placeholder_fallback();
		}

	},

	open_ad_action_dialog : function(args) {

		var $contact_container, $contact_container_content, insert_new_data;

		args.prevent_scroll = args.prevent_scroll || false;
		args.whoami = args.whoami || "default";

		// Reset dialog box and return data execute function
		insert_new_data = blocket.apps.common.print_ad_action_dialog({
			"prevent_scroll":args.prevent_scroll,
			"skin":"skin_default",
			"pretext": blocket.apps.common.dialog_settings.pretext[args.whoami]
		});

		if(args.url == "TRUSTLY"){

			/*
			---- Use again when trustly have released the new layout ----
			$contact_container.removeClass("skin_default");
			$contact_container.addClass("skin_raw");

			$("#contact_container_close_link").css("top","10px");
			*/

			url = trustly_iframe_url + '?h=' + blocket.params.trustly_h;
			var ifrm = document.createElement("IFRAME");
			ifrm.setAttribute("id", "trustly_iframe");
			ifrm.setAttribute("src", url);
			ifrm.setAttribute("class", "span14 float_none");
	 		ifrm.setAttribute("scrolling", "no");
	 		ifrm.setAttribute("frameBorder", "0");

			insert_new_data(ifrm);

		}else{
			$.ajax({
				url: args.url,
				context: "html",
				success: function(data) {
					insert_new_data(data);	
				},
				error: function(err, textStatus, errorThrown) {
					console.log(err,textStatus, errorThrown);
				}
			});
		}
		return false;
	},

	show_contact_container : function(prevent_scroll) {
		var contact_container = $("#contact_container");
		contact_container.show();

		if(!prevent_scroll) {
			var $win = $(window);
			var fold = $(document).scrollTop();
			var offset = 50;
			var top_margin = 20;
			var limit_bottom = fold + $(window).height();
			var scrollTop = 0;
			var element_bottom = contact_container.offset().top + contact_container.height() + offset;
			var element_top = contact_container.offset().top - offset;


			// Will scroll when object is above OR under window. 
			if(element_bottom > limit_bottom || fold > element_top) {
				scrollTop = contact_container.offset().top - top_margin;
				blocket.apps.scrollto.open({top: scrollTop, left: 0});
			}
		}
	},

	hide_contact_container : function() {
		$("#contact_container").hide();
		$("#contact_container_content").empty();
	},

	set_highlight: function(field, text, classprefix, idprefix) {
		var input_field = $('#' + field);
		var input_field_parent = input_field.closest('.field_container');

		if(input_field_parent.length == 0) {
			return;
		}

		input_field_parent.find('#' + idprefix + field).remove();
		if(text != null) {
			var ndiv = document.createElement('div');
			ndiv.id = idprefix + field;
			ndiv.className = classprefix + 'text';
			ndiv.innerHTML = text;
			input_field_parent.append(ndiv);
			input_field_parent.addClass(classprefix + 'highlight');
		} else {
			input_field_parent.find('div.' + classprefix + 'text[id=' + idprefix + field +']').remove();
			if(input_field_parent.find('div.' + classprefix + 'text').length == 0) {
				input_field_parent.removeClass(classprefix + 'highlight');
			}
		}
		input_field_parent.removeClass('backend_error');
	},

	set_err: function(field, err) {
		blocket.apps.common.set_highlight(field, err, 'error_', 'err_');
	},

	set_warning: function(field, warning) {
		blocket.apps.common.set_highlight(field, warning, 'warning_', 'warn_');
	},

	fetch_phone_number : function(callback) {
		var phone_challenge = $("#ph_link").attr("href");

		if (typeof(phone_challenge) != "undefined" && phone_challenge.length > 1) {
			phone_challenge = phone_challenge.substring(1);

			$("#ph_link").remove();
			$("#ph_num").remove();

			$.ajax({
				type: "GET",
				url: "/phoneview.json",
				data: { list_id: blocket.params.list_id, h: phone_challenge },
				dataType: "json"
				})
			.done(function(data) {
				if (typeof(data) != "undefined") {
					if (typeof(data.error) != "undefined" && typeof(data.message) != "undefined") {
						$("#ph_container").append($('<span class="text error">' + data.message + '</span>'));
					}
					if (typeof(callback) != "undefined") {
						$("#ph_container").bind("phone_shown", function() {
							callback();
						});
					}

					if (typeof(data.phone_text) != "undefined") { 
						$("#ph_container").append($('<span id="ph_num">' + data.phone_text + '</span>'))
						$("#ph_container").trigger("phone_shown");
						xt_med('C','','phoneview_show_number','A');
					}
					if (typeof(data.phone_img) != "undefined")  {
						var phone_image = $('<img id="ph_num" class="phone_gif" alt="" src="' + data.phone_img + '"></img>').load(function() {
							$("#ph_container").trigger("phone_shown");
						});
						$("#ph_container").append(phone_image);
						xt_med('C','','phoneview_show_number','A');
					}
				}
			});
		}
	},

	index_of_object_in_array : function(item, list, identifier_name) {
		var i = 0;
		var in_array = false;
		if (typeof(item) == "object" && typeof(list) == "object" && item.hasOwnProperty(identifier_name)) {
			while (!in_array && i < list.length) {
				if (list[i].hasOwnProperty(identifier_name) && list[i][identifier_name].toLowerCase() === item[identifier_name].toLowerCase()) {
					in_array = true;
					break;
				}
				i++;
			}
		}
		return in_array ? i : -1;
	},

	crop_image_to_fit_container : function(image, image_container) {
		if (image.width > 1 && image.height > 1) {
			var image_ratio = image.height / image.width;
			var container_height = image_container.height();
			var container_width = image_container.width();
			var container_ratio = container_height / container_width;
			if (image_ratio < container_ratio) {
				$(image).css("height", container_height);
				$(image).css("margin-left", Math.round((image.width - container_width) / 2)*-1);
			} else if (image_ratio >= container_ratio) {
				$(image).css("width", container_width);
				$(image).css("margin-top", Math.round((image.height - container_height) / 2)*-1);
			}
		}
	},

	lazy_load_content : function(element_to_load, call_back) {
		if (blocket.apps.common.is_element_within_screen(element_to_load)) {
			call_back();
		} else {
			var id = $(element_to_load).attr("id");
			var event_namespace = "scroll.lazy_load_content";
			if(id.length > 0) {
				event_namespace += "_" + id;
			}
			$(window).bind(event_namespace, function(event) {
				var fold = $(document).scrollTop();
				var offset = 150;
				var limit = fold + $(window).height() + offset;
				var element_y = $(element_to_load).offset().top;
				if (limit >= element_y) {
					call_back();
					$(window).unbind(event_namespace);
				}
			});
		}
	},

	is_element_within_screen : function(element) {
		var window_scroll_top = $(window).scrollTop();
		var element_position = $(element).offset().top
		return (window_scroll_top < element_position && element_position < ($(window).height() + window_scroll_top));
	},

	crop_text: function(text_container, max_chars) {
		if (typeof text_container === "object") {
			if (jQuery(text_container).length > 0) {
				var str = jQuery(text_container).text().trim();
				if (str.length > max_chars) {
					str = str.substring(0, max_chars);
					str += "...";
				jQuery(text_container).text(str);
				}
			}
		}
	},

	load_fif: function (divId, easSrc, width, height, cls) {
		if (typeof(easSrc) === 'undefined' || easSrc === '') {
			return;
		}
		var frame = document.createElement("iframe");
		var container = document.getElementById(divId);

		easSrc += "&amp;now=" + new Date().getTime();

		if (cls !== undefined) {
			frame.className = cls;
		}

		// New school
		$(frame).attr({
			id: divId + "_iframe",
			src: blocket.bconf.postmessage.base_url[location.protocol.slice(0, -1)] + "/fif.html?s=1" + "#" + divId + "_iframe|" + encodeURIComponent(easSrc),
			frameBorder: "0",
			scrolling: "no"
		}).css({
			width: width + "px",
			height: height + "px",
			margin: "0px",
			borderWidth: "0px",
			padding: "0px"
		});
		container.appendChild(frame);
	},

	load_fif_with_rsi_segs : function(divId, easSrc, width, height, cls) {

		var cookie_value = $.cookie("rsi_segs");
		var cookie_value2 = $.cookie("nPsegs");

		if (cookie_value != null) {
			// Only a maximum of 20 values are supported
			var value_list = cookie_value.split("|").slice(0, 20).join("|");
			easSrc += "&amp;EASTbt=" + value_list;
		}

		if (cookie_value2 != null) {
			var value_list2 = cookie_value2.split("|").slice(0, 20).join("|");
			easSrc += "&amp;EASTnp=" + value_list2;
		}
		blocket.apps.common.load_fif(divId, easSrc, width, height, cls);
	},
	toggle_placeholder : function(element, placeholders) {
		if(element != null) {
			if((element.value == null) || (typeof(element.value) == "undefined") || element.value == "") {
				$(placeholders[element.id]).removeClass("hidden");
			} else {
				$(placeholders[element.id]).addClass("hidden");
			}
		}
	},
	init_placeholder_fallback : function(start_element) {
		if('placeholder' in document.createElement('input')) {
			return;
		}

		if(start_element == null) {
			start_element = $("#blocket");
		}

		var placeholders = new Array();
		var parent, wrapper, label, id;
		start_element.find("input[placeholder], textarea[placeholder]").each(function() {
			if(!this.parentNode.className.match(/\binput_placeholder\b/)) {
				parent = this.parentNode;
				wrapper = document.createElement('div');
				wrapper.className = "input_placeholder";
				parent.replaceChild(wrapper, this);
				wrapper.appendChild(this);
				label = document.createElement('label');
				label.className = 'placeholder';
				label.setAttribute('for', this.id);
				label.innerHTML = this.getAttribute('placeholder') === null ? this.getAttribute('data-placeholder') : this.getAttribute('placeholder');
				wrapper.appendChild(label);
			}
		});

		start_element.find("label.placeholder").each(function(index, element) {
			id = element.getAttribute("for"),
			    input_field = $("#" + id);

			if(placeholders[id] == undefined) {
				placeholders[id] = [];
			}
			placeholders[id].push(element);
			blocket.apps.common.toggle_placeholder(input_field[0], placeholders);

			input_field.unbind("input.placeholder propertychange.placeholder paste.placeholder cut.placeholder drop.placeholder change.placeholder");
			input_field.bind("input.placeholder propertychange.placeholder paste.placeholder cut.placeholder drop.placeholder change.placeholder", function(e){
				blocket.apps.common.toggle_placeholder(e.target, placeholders);
			});
		});
	},

	postmessage: {
		resize_iframe: function (data, event) {
			var target = document.querySelector(data.target);

			if (target) {
				if (data.settings) {
					target.style.transition = data.settings.transition ? data.settings.transition : "none";
				}
				target.width = data.width;
				target.height = data.height;
				target.style.width = data.width + "px";
				target.style.height = data.height + "px";

				// Send reply
				event.source.postMessage(JSON.stringify({success: true}), event.origin);
			}
		}
	}
});


blocket("@apps.all_pages").extend({
	invoke_impression : function() {
	    if (typeof EAad == 'undefined' && typeof count_impression == 'function') {
		count_impression();
	    }
	},

	selectField : function(field_id,mode) {
		$("#"+field_id).prop("checked", mode);
	},

	ajax_check : function() {
		var xmlhttp = false;
		try {
			xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			return false;
		}
		return true;
	},

	preload_image : function(_image) {
		var image = new Image;
		image.src = _image;
	},

	clickcounter : function(name) {
		if (this.ajax_check()) {
			var httpreq = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			httpreq.open('GET', '/redir?nc=1&s=' + name, true);
			httpreq.send(null);
		}
	},

	include_script : function(src, callback) {
		if (typeof(src) === 'undefined' || src === '') return;
		var script = document.createElement('script');
		script.src = src;
		script.type = 'text/javascript';
		if (callback) {
			script.onload = callback;
			script.onreadystatechange = function () {
				if (this.readyState == "complete" || this.readyState == "loaded") {
					this.onload();
					this.onload = this.onreadystatechange = null;
				}
			};
		}
		document.getElementsByTagName('body')[0].appendChild(script);
	},

	document_write_override : function(str) {
		if (str.toLowerCase().indexOf('src=') > 0) {
			if (str.toLowerCase().indexOf('script') >= 0) {
				str = str.substring(str.toLowerCase().indexOf('src'));
				var script = str.replace(/^[^"']+["']/, '').replace(/["'].+$/, '');
				this.include_script(script);
				return;
			} else if (str.toLowerCase().indexOf('img') >= 0) {
				/**
				 * This is a hack to avoid xiti's document.write and instead
				 * use createelement to append the xiti stats image
				 */
				// '<img width="1" height="1" src="'+url+'">
				// '<img width="1" height="1" src="'js_comment_override1'">
				str = str.substring(str.toLowerCase().indexOf('src'));
				var script = str.replace(/^[^"']+["']/, '').replace(/["'].+$/, '');
				var img = new Image;
				img.src = script;
				return;
			}
		}

		document.write = this.document_write_org;
		document.write(str);
		document.write = this.document_write_override;
	},

	xiti_debug_info: function () {
		var html = "Xiti-status: " + (xtpage.length > 0 ? (xtn2.length > 0 ? (xtpage.search("\:\:\:\:")>0 ? "Invalid" : "Found") : "Unclassified") : "missing!") + "<br />";
		for (var k in window) {
			if (k.substr(0,2) == "xt" && typeof(window[k]) == "string")
				html += k + ": " + window[k] +"<br />";
		}
		$(".xiti_box").html(html);
	},

	reset_iframe_opacity : function(iframeid) {
		$(iframeid).css("opacity",'1');
	},

	get_outerwidth : function(element) {
		var total_width = 0;
		var item = jQuery(element);
		total_width += item.width();
		total_width += parseInt(item.css("padding-left"), 10) + parseInt(item.css("padding-right"), 10); //Total Padding Width
		total_width += parseInt(item.css("margin-left"), 10) + parseInt(item.css("margin-right"), 10); //Total Margin Width
		total_width += parseInt(item.css("borderLeftWidth"), 10) + parseInt(item.css("borderRightWidth"), 10); //Total Border Width
		return total_width;
	},

	get_innerwidth : function(element) {
		var total_width = 0;
		var item = jQuery(element);
		total_width += item.width();
		total_width -= parseInt(item.css("padding-left"), 10) + parseInt(item.css("padding-right"), 10); //Total Padding Width
		return total_width;
	},

	resize_list_items : function(data) {
		var options = { 	//Optionals
			offset : 0
		};
		jQuery.extend(options, data);
		var target_items = jQuery(options.target_items);
		var list_items = jQuery(options.list_items);
		var offset = options.offset;
		var word_containers = options.word_containers;
		var max_width = blocket.apps.all_pages.get_innerwidth(options.parent_container);

		var items_width = 0;
		for(var i=0; i<list_items.length; i++) {
			items_width += blocket.apps.all_pages.get_outerwidth(list_items.get(i));
		}
		if (items_width > max_width) {
			var over = parseInt((items_width - max_width) + offset);
			var longest = null;
			while(over > 0) {
				for(var i=0; i < target_items.length; i++) {
					var item = jQuery(target_items.get(i));
					if (longest != null && item.width() > longest.width())
						longest = item;
					else if (longest == null)
						longest = item;
				}
				word = longest.find(word_containers);
				before = word.width();
				word.html(word.html().slice(0, (word.html().length - 1)));
				over -= before - word.width()
			}
		}

	},

	detect_os: function(ua) {

		var match;

		// Store the OS variables in "non-volatile" memory
		window.params = { os: {} };
		blocket.apps.all_pages.os = window.params.os;

		// Windows
		if (match = ua.match(/Windows NT (\d\.\d)/)) {
			blocket.apps.all_pages.os.major = "windows";
			switch (match[1]) {
				case "6.1":
					blocket.apps.all_pages.os.minor = "windows_7";
					return;
				case "6.0":
					blocket.apps.all_pages.os.minor = "windows_vista";
					return;
				case "5.2":
					blocket.apps.all_pages.os.minor = "windows_xp64"; // And Server 2003
					return;
				case "5.1":
					blocket.apps.all_pages.os.minor = "windows_xp";
					return;
			}
			blocket.apps.all_pages.os.minor = "windows_" + match[1];
			return;
		} else if (match = ua.match(/Windows (\d\d)/)) {
			blocket.apps.all_pages.os.major = "windows";
			blocket.apps.all_pages.os.minor = "windows_" + match[1];
			return;
		}

		// Mac OS X
		if (match = ua.match(/Mac OS X 10.(\d)/)) {
			blocket.apps.all_pages.os.major = "mac_os";
			switch (match[1]) {
				case "7":
					blocket.apps.all_pages.os.minor = "mac_os_lion";
					return;
				case "6":
					blocket.apps.all_pages.os.minor = "mac_os_snow_leopard";
					return;
				case "5":
					blocket.apps.all_pages.os.minor = "mac_os_leopard";
					return;
				case "4":
					blocket.apps.all_pages.os.minor = "mac_os_tiger";
					return;
			}
			blocket.apps.all_pages.os.minor = "mac_os_10." + match[1];
			return;
		}

		// iPad
		if (ua.indexOf("iPad") != -1) {
			blocket.apps.all_pages.os.major = "ios";
			blocket.apps.all_pages.os.minor = "ipad";
		}

		// iPhone
		if (ua.indexOf("iPhone") != -1) {
			blocket.apps.all_pages.os.major = "ios";
			blocket.apps.all_pages.os.minor = "iphone";
		}

		// Android
		if (match = ua.match(/Android (\d)\.(\d)/)) {
			blocket.apps.all_pages.os.major = "android";
			switch (match[1]) {
				case "3":
					blocket.apps.all_pages.os.minor = "android_honeycomb";
					return;
				case "2":
					switch (match[2]) {
						case "3":
							blocket.apps.all_pages.os.minor = "android_gingerbread";
							return;
						case "2":
							blocket.apps.all_pages.os.minor = "android_froyo";
							return;
						case "1":
						case "0":
							blocket.apps.all_pages.os.minor = "android_eclair";
							return;
						default:
							blocket.apps.all_pages.os.minor = "android_2." + match[2];
							return;
					}
				case "1":
					switch (match[2]) {
					case "6":
						blocket.apps.all_pages.os.minor = "android_donut";
						return;
					case "4":
						blocket.apps.all_pages.os.minor = "android_cupcake";
						return;
					default:
						blocket.apps.all_pages.os.minor = "android_1." + match[2];
						return;
				}
			}
			blocket.apps.all_pages.os.minor = "android_" + match[1] + "." + + match[2];
		}

		// Symbian
		if (ua.match(/Symb(ian|OS)/)) {
			blocket.apps.all_pages.os.major = "symbian";
			blocket.apps.all_pages.os.minor = "unknown";
		}

		// Linux
		if (ua.indexOf("Linux") != -1) {
			blocket.apps.all_pages.os.major = "linux";
			blocket.apps.all_pages.os.minor = "unknown";
		}

	}
});



// An ugly bug deserves an ugly solution. Safari doesn't render flash in dynamically created iframes,
// unless there is some form of triggered change that makes the browser rerender the item. Here we
// modify the width with one pixel, and then reverts the modification within one millisecond - for
// five seconds with a 250 ms interval (hopefully long enough time to let the flash banner load).

blocket("@apps.common.safari_ugly_fix").extend({
	append: function() {
		if ($.browser.webkit) {
			this.time = new Date().getTime();
			this.interval = setInterval(function() {

				var self = blocket.apps.common.safari_ugly_fix;
				var now = new Date().getTime();

				if (self.time + 5000 > now) {

					$(".safari .fif iframe").each(function() {
						var o = this;
						var w = parseInt(o.style.width.replace("px", ""));
						o.style.width = w + 1 + "px";
					});

					setTimeout(function() {

						$(".safari .fif iframe").each(function() {
							var o = this;
							var w = parseInt(o.style.width.replace("px", ""));
							o.style.width = w - 1 + "px";
						});
					}, 1);

				} else {
					clearInterval(blocket.apps.common.safari_ugly_fix.interval);
				}

			}, 250);
		}
	}
});

blocket("@apps.news").extend({
	/*
	 * Truncate each news element matching the class .newstext
	 * until the object #news reaches or is shorter than max_width
	 * by removing 4 characters at a time and suffixing with "..."
	 * (Will stop after 50 truncates)
	 */
	truncate : function(max_width) {
		if(!max_width) {
			max_width = $("#news").width();
		}
		max_width -= 18; //CSS bug in ie7 needs this ofset to correctly truncate the third element
		var news_container = $("#news");
		var links = $(".newstext");
		var link_widths = 0;
		$(".newsitem").each(function() {
			link_widths += parseInt($(this).width());
			link_widths += parseInt($(this).css("margin-right"));
			link_widths += parseInt($(this).css("margin-left"));
		});
		if(($(news_container).length == 0) || (links.length < 1 && link_widths <= max_width)) {
			return;
		}
		for(var i = 0; i < 50 && link_widths > max_width; i++) {
			var link = $(links[i % links.length])
			var str = link.html();

			str = str.substring(0, str.length - 4);

			if (str.length == 0) {
				link.parent().hide();
				break;
			}

			// Trim
			if (typeof str != 'undefined') {
				str = str.replace(/^\s+|\s+$/g,"") + "...";
				link.html(str);
			}
			link_widths = 0;
			$(".newsitem").each(function() {
				link_widths += parseInt($(this).width());
				link_widths += parseInt($(this).css("margin-right"));
				link_widths += parseInt($(this).css("margin-left"));
			});
		}

	}
});

blocket("@common").extend({
	last_clicked_at: 0,

	/* Browser detection */
	BrowserDetect: {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++) {
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
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1) return;
			var version = dataString.substring(index+this.versionSearchString.length+1);

			if (version.indexOf(' ') > 0) {
				version = version.substring(0, version.indexOf(' '));
			}

			return version;
		},
		isValid: function (browsers, exact_version_compare) {
			var i = 0;
			var valid = false;

			if (typeof exact_version_compare === 'undefined') {
				exact_version_compare = false;
			}

			for (i = 0; i < browsers.length; i++) {
				if (browsers[i].agent == this.browser) {
					if (exact_version_compare) {
						if (blocket.common.compare_version(browsers[i].version, this.version) === 0) {
							valid = true;
							break;
						}
					} else {
						if (blocket.common.compare_version(browsers[i].version, this.version) >= 0) {
							valid = true;
							break;
						}
					}
				}
			}

			return valid;
		},
		dataBrowser: [
			 {
				string: navigator.vendor,
				subString: "Google",
				identity: "Chrome",
				versionSearch: "Chrome"
			},
			 {
				string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb"
			},
			 {
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari"
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
			{	// for newer Netscapes (6+)
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
			{	// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla"
			}
		],
		dataOS : [
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
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]

	},

	FeatureDetect: {
		localStorage: function() {
			try {
				localStorage.setItem("test", "test");
				localStorage.removeItem("test");
				return true;
			} catch(e) {
				return false;
			}
		},
		pushState: function() {
			return !!((window.history && history.pushState) ||�(window.History && History.enabled));
		},
		replaceState: function() {
			return !!((window.history && history.replaceState) ||�(window.History && History.enabled));
		}
	},

	compare_version: function(ver1, ver2) {
		if (typeof(ver1) == 'string')
			ver1 = ver1.split('.');
		else if (typeof(ver1) == 'number')
			ver1 = [ver1];

		if (typeof(ver2) == 'string')
			ver2 = ver2.split('.');
		else if (typeof(ver2) == 'number')
			ver2 = [ver2];

		var i = 0;
		while (1) {
			if (!ver1[i]) {
				if (!ver2[i])
					return 0;
				else
					return 1;
			} else if (!ver2[i])
				return -1;

			if (parseInt(ver1[i]) > parseInt(ver2[i]))
				return -1;
			else if (parseInt(ver1[i]) < parseInt(ver2[i]))
				return 1;

			i++;
		}
	},

	/**
	*
	*  MD5 (Message-Digest Algorithm)
	*  http://www.webtoolkit.info/
	*
	**/
	MD5: function (string) {
		function RotateLeft(lValue, iShiftBits) {
			return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
		}

		function AddUnsigned(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) {
				return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			}
			if (lX4 | lY4) {
				if (lResult & 0x40000000) {
					return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				} else {
					return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
				}
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}

		function F(x,y,z) { return (x & y) | ((~x) & z); }
		function G(x,y,z) { return (x & z) | (y & (~z)); }
		function H(x,y,z) { return (x ^ y ^ z); }
		function I(x,y,z) { return (y ^ (x | (~z))); }

		function FF(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function GG(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function HH(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function II(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function ConvertToWordArray(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		};

		function WordToHex(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		};

		function Utf8Encode(string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if ((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		};

		var x=Array();
		var k,AA,BB,CC,DD,a,b,c,d;
		var S11=7, S12=12, S13=17, S14=22;
		var S21=5, S22=9 , S23=14, S24=20;
		var S31=4, S32=11, S33=16, S34=23;
		var S41=6, S42=10, S43=15, S44=21;

		string = Utf8Encode(string);

		x = ConvertToWordArray(string);

		a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

		for (k=0;k<x.length;k+=16) {
			AA=a; BB=b; CC=c; DD=d;
			a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
			d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
			c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
			b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
			a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
			d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
			c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
			b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
			a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
			d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
			c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
			b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
			a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
			d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
			c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
			b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
			a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
			d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
			c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
			b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
			a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
			d=GG(d,a,b,c,x[k+10],S22,0x2441453);
			c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
			b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
			a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
			d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
			c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
			b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
			a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
			d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
			c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
			b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
			a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
			d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
			c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
			b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
			a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
			d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
			c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
			b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
			a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
			d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
			c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
			b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
			a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
			d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
			c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
			b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
			a=II(a,b,c,d,x[k+0], S41,0xF4292244);
			d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
			c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
			b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
			a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
			d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
			c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
			b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
			a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
			d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
			c=II(c,d,a,b,x[k+6], S43,0xA3014314);
			b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
			a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
			d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
			c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
			b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
			a=AddUnsigned(a,AA);
			b=AddUnsigned(b,BB);
			c=AddUnsigned(c,CC);
			d=AddUnsigned(d,DD);
		}

		var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

		return temp.toLowerCase();
	},

	/* ----------------------------------------------------------------------- */
	// file: pagequery_api.js
	// javascript query string parsing utils
	// pass location.search to the constructor: var page = new PageQuery(location.search)
	// get values like: var myValue = page.getValue("param1") etc.
	// djohnson@ibsys.com {{djohnson}}
	// you may use this file as you wish but please keep this header with it thanks
	/* ----------------------------------------------------------------------- */
	PageQuery: function(q) {
		if (q.length > 1) this.q = q.substring(1, q.length);
		else this.q = null;
		this.keyValuePairs = new Array();
		if (q) {
			for(var i=0; i < this.q.split("&").length; i++) {
				this.keyValuePairs[i] = this.q.split("&")[i];
			}
		}
		this.getKeyValuePairs = function() { return this.keyValuePairs; }
		this.getValue = function(s) {
			for(var j=0; j < this.keyValuePairs.length; j++) {
				if (this.keyValuePairs[j].split("=")[0] == s)
					return this.keyValuePairs[j].split("=")[1];
			}
			return -1;
		}
		this.getParameters = function() {
			var a = new Array(this.getLength());
			for(var j=0; j < this.keyValuePairs.length; j++) {
				a[j] = this.keyValuePairs[j].split("=")[0];
			}
			return a;
		}
		this.getLength = function() { return this.keyValuePairs.length; }
	},

	queryString: function(key) {
			var page = new blocket.common.PageQuery(window.location.search);
			return unescape(page.getValue(key));
	},

	/*
	 * Array handling
	 */
	isInArray: function(needle, arrayHaystack) {
		if (!arrayHaystack || arrayHaystack.length == 0)
			return false;

		for (var x in arrayHaystack) {
			if (arrayHaystack[x].split(":")[0] == needle)
				return true;
		}

		return false;
	},

	/*
	 * Cookie handling
	 */
	setCookie: function(name, value, expires, path, domain, secure, dont_escape) {
		var today = new Date();

		today.setTime(today.getTime());

		if (expires)
			expires = expires * 1000 * 60 * 60 * 24;

		var expires_date = new Date(today.getTime() + (expires));

		document.cookie = name + '=' + (dont_escape ? value : blocket.common.escape_component(value)) +
			((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
			((path) ? ';path=' + path : '') +
			((domain) ? ';domain=' + domain : '') +
			((secure) ? ';secure' : '' );
	},

	getCookie: function(name) {
		var start = document.cookie.indexOf(name + "=");
		var len = start + name.length + 1;

		if (!start && name != document.cookie.substring(0, name.length))
			return null;

		if (start == -1)
			return null;

		var end = document.cookie.indexOf( ';', len );
		if (end == -1)
			end = document.cookie.length;

		return unescape(document.cookie.substring(len, end));
	},

	deleteCookie: function(name, path, domain) {
		if (blocket.common.getCookie(name)) {
			document.cookie = name + '=' +
				((path) ? ';path=' + path : '') +
				((domain) ? ';domain=' + domain : '' ) +
				';expires=Thu, 01-Jan-1970 00:00:01 GMT';
		}
	},

	/*
	 * Check if the given feature has been selected
	 */
	setFeatureVal: function(_feat, _id) {
		var Item = typeof(_id) == "string" ? getElementById(_id) : _id;

		var cookie_str = blocket.common.getCookie('features');
		var feat_elements = Item.length;
		if (cookie_str && cookie_str.indexOf(_feat) >= 0) {
			var feature = parseInt(cookie_str.substr(cookie_str.indexOf(_feat+': ')+_feat.length+1));
			for (var i = 0; i < feat_elements; i++) {
				if (feature == Item.options[i].value)
					Item.options[i].selected = true;
			}
		}
	},


	/*
	 * Check if the given feature has been selected
	 */
	setRadioVal: function() {
		var cookie_str = blocket.common.getCookie('features');
		if (cookie_str && cookie_str.indexOf("st") >= 0) {
			var feature = cookie_str.substr(cookie_str.indexOf('st: ')+3);
			for (var j = 0; j < document.f.st.length; j++) {
				if (document.f.st[j].value == feature) {
					document.f.st[j].checked = true;
				}
			}
		}
	},

	/*
	 * Layer handling
	 */
	showField: function() {
		var ShowItem = document.getElementById(blocket.common.showField.arguments[0]);
		if (ShowItem)
			ShowItem.style.display = blocket.common.showField.arguments[1];
		if (blocket.common.showField.arguments.length == 3) {
			ShowItem.innerHTML = blocket.common.showField.arguments[2];
		}

	},

	showElement: function(id, showHide, retval) {
		var element = document.getElementById(id);
		if (element)
			element.style.display = showHide == true ? "block" : "none";
		if (retval != null)
			return retval;
	},

	scrollToTop: function() {
		window.scrollTo(0, 0);
	},

	scrollToBottom: function() {
		window.scrollTo(0, 10000);
	},

	scrollToObject: function(offsetTrail) {
		var offsetLeft = 0;
		var offsetTop = 0;

		// Calculate the position
		while (offsetTrail) {
			offsetLeft += offsetTrail.offsetLeft;
			offsetTop += offsetTrail.offsetTop;
			offsetTrail = offsetTrail.offsetParent;
		}

		// Scroll
		window.scrollTo(0, offsetTop);
	},

	focused: false,

	scrollToError: function(elemId) {
		if (this.focused) return;
		var offsetTrail = document.getElementById(elemId);

		blocket.common.scrollToObject(offsetTrail);

		if (document.getElementById(elemId))
			document.getElementById(elemId).focus();
		this.focused = true;
	},

	setFocus: function(_field) {
		if (document.getElementById(_field)) {
			document.getElementById(_field).focus();
		}
	},

	setChecked: function(_Id, _check) {
		var Item = document.getElementById(_Id);
		if (Item == null) return;
		Item.checked = _check;
	},

	setValue: function(_Id, _check) {
		var Item = typeof(_Id) == "string" ? document.getElementById(_Id) : _Id;
		if (Item == null) return;

		Item.value = _check;
	},

	/*
	 * Popup
	 */
	//window.name = "shl";
	newWin: "",

	popUp: function(page, name, details) {
		this.newWin = window.open(page, name, details);
		this.newWin.focus();
		return false;
	},

	newsPopUp: function(page) {
		this.newWin = window.open(page, '_blank', ' width=800, height=' +Math.round(window.screen.availHeight * 0.8)+', scrollbars=yes, screenX = 0, screenY = 0, top = 0, left = 0');
		this.newWin.focus();
		return false;
	},

	/*
	 * Based on info at
	 * http://www.dynamic-tools.net/toolbox/isMouseLeaveOrEnter/
	 */
	eventWithinElement: function(ev, el) {
		var targ;

		if (typeof(ev.relatedTarget) == 'object' && ev.relatedTarget)
			targ = ev.relatedTarget;
		else if (ev.type == "mouseout")
			targ = ev.toElement;
		else
			targ = ev.fromElement;

		while (targ && targ != el)
			targ = targ.parentNode;

		return targ == el;
	},

	/*
	 * Table row hiliting
	 */
	tableRowHilite: function() {
		if (document.getElementById("hl") == null) return;
		
		var table = document.getElementById("hl");
		var rows = table.getElementsByTagName('tr');
		
		for (var i = 0; i < rows.length; i++)	{
			rows[i].onmouseover = function(ev) {
				if (typeof(ev) == "undefined" && window.event)
					ev = window.event;
				if (blocket.common.eventWithinElement(ev, this))
					return;

				var myid = this.id.replace("adrow_", "");
				this.className += 'hilite';
				if (typeof(hittacom) !== 'undefined' && myid) {
					hittacom.send("open=" + myid);
				}
			}
			
			rows[i].onmouseout = function(ev) {
				if (typeof(ev) == "undefined" && window.event)
					ev = window.event;
				if (blocket.common.eventWithinElement(ev, this))
					return;

				var myid = this.id.replace("adrow_", "");
				this.className = this.className.replace('hilite', '');
				if (typeof(hittacom) !== 'undefined' && myid) {
					hittacom.send("close=" + myid);
				}
			}
		}
			
		blocket.common.onload_queue.add({
			onload_function : function(obj) {
					var hittaframe = document.getElementById('hittaframe');
					if (hittaframe)
						hittaframe.style.width = hittaframe.scrollWidth + "px";
					}
				}, 'medium' );	
	},

	/*
	 * Disable and enable input fields in forms
	 */
	enable_field: function(_name) {
		var Item = typeof(_name) == "string" ? document.getElementById(_name) : _name;

		if (Item == null) return;

		if (Item.disabled)
			Item.disabled = false;
	},

	disable_field: function(_name) {
		var Item = typeof(_name) == "string" ? document.getElementById(_name) : _name;

		if (Item == null) return;

		if (!Item.disabled)
			Item.disabled = true;
	},

	check_dc: function(_key) {
		var date = new Date;
		var time = date.getTime();

		if ((blocket.common.last_clicked_at + 2500) >= time) {
			document.getElementById(_key).value = 1;
		} else {
			document.getElementById(_key).value = 0;
		}

		blocket.common.last_clicked_at = time;
	},

	/*
	 * Text area limit
	 */
	maxlength: function(e, obj, max) {
		if (!e) e = window.event; // IE

		if (e.which) {
			var keycode = e.which; // Mozilla
			var ie = false;
		} else {
			var keycode = e.keyCode; // IE
			var ie = true;
		}

		x = obj.value.length;

		if (x > max) {
			obj.value = obj.value.substr(0, max);
			x = max;
		}

		if (keycode == 0 && ie) { // PASTE ONLY FOR IE
			var select_range = document.selection.createRange();
			var max_insert = max - x + select_range.text.length;
			var data = window.clipboardData.getData("Text").substr(0, max_insert);
			select_range.text = data;
		} else if (x == max && (keycode != 8 && keycode != 46)) {
			return false;
		}

		return true;
	},

	/*
	 * Positioning of elements
	 */
	findPosX: function(obj, end) {
		var curleft = 0;
		var width = obj.clientWidth;

		if (obj.offsetParent) {
			while (obj.offsetParent) {
				curleft += obj.offsetLeft;
				obj = obj.offsetParent;
			}
		} else if (obj.x)
			curleft += obj.x;

		return curleft + (end?width: 0);
	},

	findPosY: function(obj, end) {
		var curtop = 0;
		var height = obj.clientHeight;

		if (obj.offsetParent) {
			while (obj.offsetParent) {
				curtop += obj.offsetTop
					obj = obj.offsetParent;
			}
		} else if (obj.y)
			curtop += obj.y;

		return curtop + (end?height: 0);
	},

	/*
	 * Progress bar
	 */
	ProgressBar: function(_container) {
		this.clear = function () {
			this.progress = [];

			var container = document.getElementById(this.container);
			if (!container) return;

			while (container.childNodes.length > 0)
				container.removeChild(container.childNodes[0]);
		};

		this.update = function (progress, total) {
			if (this.completed) return;

			var id = this.progress.length;
			var time = new Date();
			this.progress[id] = {progress: progress, total: total, time: time.getTime()};
			this.completed = progress == total;
		};

		this.current = function () {
			var id = this.progress.length;

			if (id == 0) return;

			return this.progress[id - 1];
		};

		this.procent = function (_id) {
			var progress = this.progress[_id] || this.current();

			if (progress && progress.progress)
				return Math.round( progress.progress / progress.total * 100 );

			return 0;
		};

		this.speed = function () {
			if (this.progress.length == 0) return;

			var start_at = this.progress.length - Math.floor(this.progress.length * this.SPEED_CALC_LATEST / 100) - 1;

			if (start_at < 0)
				start_at = 0;

			var first = this.progress[start_at];
			var current = this.current();

			var current_progress = current.progress - first.progress;
			var time = (current.time - first.time);

			return (current_progress / time);
		};

		this.estimate = function () {
			if (this.procent() < this.ESTIMATE_MIN_PROGRESS) return ;

			var speed = this.speed();
			var progress = this.current();

			var remaining_progress = progress.total - progress.progress;
			var remaining_time = Math.round(remaining_progress / speed);

			return remaining_time;
		};

		this.draw = function () {
			var container = document.getElementById(this.container);
			if (!container) return;
			container.style.display = 'block';

			var estimate = this.estimate() / 1000;
			var speed = this.speed();
			var procent = this.procent();

			if (container.childNodes.length) {
				var progress_bar = container.getElementsByTagName('div')[0];
				var progress_cell = container.getElementsByTagName('div')[1];
				//progress_cell.style.width = Math.round((progress_bar.offsetWidth - 2) * procent / 100)+'px';

				var debug = container.getElementsByTagName('div')[2];
				var minutes_left = Math.floor(estimate / 60);
				var seconds_left = Math.round(estimate - minutes_left * 60);
				var time_left = '';

				if (minutes_left  + seconds_left > 0)
					time_left = js_info['TIME_LEFT'] + ': ';
				if (minutes_left > 0)
					time_left += minutes_left + " min ";
				if (seconds_left > 0)
					time_left += seconds_left + " s";

				debug.innerHTML = procent + "%&nbsp;&nbsp;&nbsp;" + time_left;
			}
		};

		this.update_draw = function(progress, total) {
			if (this.completed) return;

			this.update(progress, total);
			this.draw();
		};

		this.progress = [];
		this.container = _container || 'progressbar_container';
		this.completed = false;

		/* Don't show estimate until progress reach (x) procent */
		this.ESTIMATE_MIN_PROGRESS = 10;
		/* Speed calculation include latest (x) procent */
		this.SPEED_CALC_LATEST = 30;

		/* Clear container */
		this.clear();

		/* Init the container */

		var container = document.getElementById(this.container);
		if (!container)
			return;

		/* Create progress table */
		var progress_bar = document.createElement('div');
		progress_bar.className = 'progress_bar';

		var progress_cell = document.createElement('div');
		progress_cell.className = 'progress_blue';
		progress_cell.style.width = '0px';

		var debug = document.createElement('div');
		debug.className = 'progress_debug';
		debug.id = 'progress_debug_id';

		progress_bar.appendChild(progress_cell);
		container.appendChild(progress_bar);
		container.appendChild(debug);
		container.appendChild(document.createElement('br'));
	},

	startProgressBar: function(pos) {
		var loading = document.getElementById('loading');
		var dots = "";

		pos %= 4;
		for (var i = 0; i < pos; i++)
			dots += ".";

		document.getElementById('loading_dots').innerHTML = dots;

		pos++;
		loading.timer = setTimeout('blocket.common.startProgressBar('+pos+')', 500);
	},

	/*
	 * Position progress bar
	 */
	showProgressBar: function(obj, posY) {
		var loading = document.getElementById('loading');

		if (!posY)
			posY = 0;

		blocket.common.startProgressBar(1);
		if ($.browser.msie && $.browser.version == "6.0") {
			var pos_fixY = posY-12;
			var pos_fixX = 0;
		} else if ($.browser.msie) {
			var pos_fixY = posY-12;
			var pos_fixX = 170;
		} else {
			var pos_fixY = posY-18;
			var pos_fixX = 70;

		}
		//loading.style.top = '' + (blocket.common.findPosY(obj, true) + pos_fix) + 'px';
		//loading.style.left = '' + (blocket.common.findPosX(obj, true) + 80) + 'px';
		//loading.style.top = '' + (blocket.common.findPosY(obj, true) + pos_fixY) + 'px';
		//loading.style.left = '' + (blocket.common.findPosX(obj, true) + pos_fixX) + 'px';
		loading.style.display = "inline";
	},

	hideProgressBar: function() {
		var loading = document.getElementById('loading');

		clearTimeout(loading.timer);
		loading.style.display = 'none';
		blocket.common.showElement("TipBox", true);
	},

	/*
	 * Display images. Show border and display large image
	 */

	// If we don't try to do and image load, the resize wont be correct
	// Directly after load we remove the image cause we need next_image to be false for the functions
	fix_next_image: function() {
		var next_image_load = new Image;
		var timestamp = new Date().getTime() / 1000;
		var randomflux = Math.floor(Math.random()*10000);
		next_image_load.src = "/img/" + Math.floor(timestamp) + randomflux + "/none.gif";
	},

	waitForNextImage: function(next_image, ad_id) {
		var ad_id = ad_id ? ad_id : "";
		var image = document.getElementById("display_image" + ad_id).firstChild;

		if (next_image.width > 0) {
			image.width = next_image.width;
			image.height = next_image.height;
		} else {
			setTimeout(function () { blocket.common.waitForNextImage(next_image, ad_id); }, 100);
		}
	},

	resizeImage: function(image, path, next_image, admin) {
		if (!next_image) {
			next_image = new Image;
			next_image.src = path;
		}

		if (next_image.width == 0) {
			next_image.onload = setTimeout(function () { blocket.common.resizeImage(image, path, next_image, admin); }, 0);
			return;
		}

		image.src = next_image.src;

		if (admin && next_image.width > 400) {
			var factor = (next_image.width - 400) / next_image.width;
			image.height = next_image.height * (1 - factor);
			image.width = 400;
		} else {
			image.width = next_image.width;
			image.height = next_image.height;
		}
	},

	showLargeImage: function(strDisplayPath, ad_id, admin) {
		var ad_id = ad_id ? ad_id : "";
		var admin = admin ? admin : false;
		var image = $("#display_image" + ad_id + " > img")[0];
		var map = document.getElementById("hittaframe");

		if (map) {
			map.style.display = 'none';
		}
		if (admin) {
			blocket.common.resizeImage(image, strDisplayPath, null, admin);
		} else {
			if (navigator.userAgent.toLowerCase().indexOf('safari') > 0) {
				var next_image = new Image;
				next_image.src = strDisplayPath;

				image.style.width = 'auto';
				image.style.height = 'auto';
				image.src = next_image.src;
				blocket.common.waitForNextImage(next_image, ad_id);
			} else {
				image.style.width = 'auto';
				image.style.height = 'auto';
				image.src = strDisplayPath;
			}
		}
	},

	flowplayer_conf_new: function(auto_play, auto_buffer) {
		var conf = new Object();

		conf.swf = "/swf/flowplayer.swf";
		conf.fullscreen = false;
		conf.embed = false;
		conf.key = '$298969198910939';
		conf.splash = true;

		conf.clip = new Object();
		conf.clip.scaling = 'fit';
		conf.clip.bufferLength = 10;

		if (auto_play) {
			conf.clip.autoPlay = auto_play;
		}

		if (auto_buffer) {
			conf.clip.autoBuffering = auto_buffer;
		}

		return conf;
	},

	/* Video */
	flowplayer_conf: function(video_flv, add_splash, auto_buffer, image_path) {
		var conf = new Object();
		var image_path = image_path ? image_path : false;

		conf.showLoopButton = false;
		conf.showMenu = false;
		conf.autoPlay = false;
		conf.loop = false;
		conf.initialScale = 'fit';
		conf.showFullScreenButton = false;
		conf.useNativeFullScreen = false;
		conf.bufferLength = 10;
		conf.videoFile = video_flv;

		if (auto_buffer) {
			conf.autoBuffering = true;
		} else if (add_splash && video_flv.indexOf('videos') > 0) {
			var video_splash = '';
			if (image_path == false) {
				video_splash = video_flv.replace(/.*videos/, add_splash).replace(/flv/, 'jpg');
			} else {
				var image_id = video_flv.substring(video_flv.lastIndexOf("/"));
				image_id = image_id.replace(/flv/, "jpg");
				video_splash = image_path + image_id.substring(0, 3) + image_id;
			}

			conf.autoBuffering = false;
			conf.splashImageFile = video_splash;
			conf.scaleSplash = true;
		} else if (add_splash && video_flv.indexOf('flush') > 0) {
			var video_splash = video_flv.replace(/flv/, 'splash');

			conf.splashImageFile = video_splash+'/.jpg';
			conf.scaleSplash = true;
		}


		return conf;
	},

	flowplayer_conf_to_string: function(conf) {
		var conf_string = '{';
		for (var i in conf) {
			conf_string += i + ':' + (typeof(conf[i]) == 'string'?"'":'') + conf[i] + (typeof(conf[i]) == 'string'?"'": '');
			conf_string += ',';
		}
		conf_string = conf_string.substring(0, conf_string.length - 1);
		conf_string += '}';
		return conf_string;
	},

	hide_video: function(ad_id) {
		ad_id = ad_id || '';

		var video = document.getElementById('flowplayerholder' + ad_id);
		var image = document.getElementById('display_image' + ad_id);

		if (video) {
			video.style.display = 'none';
			var container = video.parentNode;
			container.removeChild(video);
		}

		if (image)
			image.style.display = 'block';
	},

	show_video: function(video_file, width, height, ad_id) {
		ad_id = ad_id || '';
		var image = document.getElementById('display_image' + ad_id);
		var video = document.getElementById('flowplayerholder' + ad_id);
		var container;
		if (image) {
			container = image.parentNode;
		} else {
			container = video.parentNode;
		}
		var map = document.getElementById('hittaframe');

		var conf = blocket.common.flowplayer_conf(video_file, false);
		conf.autoPlay = true;
		conf = blocket.common.flowplayer_conf_to_string(conf);

		if (ad_id && width > 400)  {
			height = Math.round(400 / width * height);
			width = 400;
		}

		if (map)
			map.style.display = 'none';
		if (!video || container == video.parentNode) {
			if (!video) {
				video = document.createElement('div');
				video.id = 'flowplayerholder' + ad_id;
				container.appendChild(video);
			}

			if (image)
				image.style.display = 'none';

			var fo = {
				movie:"/swf/FlowPlayer.swf",
				width:width,
				height:height,
				majorversion:"7",
				build:"0",
				allowscriptaccess: "never",
				flashvars:"config=" + conf
				};

			UFO.create(fo, "flowplayerholder" + ad_id);

		} else if (video.style.display == 'none')  {
			image.style.display = 'none';
			video.style.display = 'block';
		} else {
			var fo = document.getElementById("flowplayerholder" + ad_id + "_obj");
			var time = fo.getTime();
			var dur = fo.getDuration();
			if (time >= dur)
				fo.Seek(0);


			if (!fo.getIsPaused() && fo.getIsPlaying())  {
				fo.Pause();
			} else {
				fo.DoPlay();
			}
		}
	},

	next_image: function(type) {
		if (!images[counter])
			counter = 0;

		/* If next item is an video, play video */
		if (blocket.common.video_exist == 1 && counter == 0) {
			var v_thumb = document.getElementById('thumb' + images.length);
			v_thumb.name = 'video';
			counter = 0;

			blocket.common.thumbnailBorder(v_thumb, images.length + 1, '', type);
			blocket.common.show_video(video_url, video_width, video_height);

			return;
		}

		/* Preload next image */
		var thumb = document.getElementById('thumb' + counter);
		var image = new Image;
		image.src = images[counter];

		blocket.common.showLargeImage(images[counter]);
		blocket.common.thumbnailBorder(thumb, images.length, '', type);

		blocket.common.set_alt_title('main_pict');

		counter++;
	},

	set_alt_title: function(call_div) {
		var main_image = document.getElementById('main_image');
		var adder = 0;

		if (call_div == 'thumb') {
			adder = 1;
		}

		/* When next thumb is a video, display other alt/title */
		if (blocket.common.video_exist == 1 && counter == images.length - 1 + adder)
		 {
			main_image.alt = js_info['SHOW_AD_VIDEO'];
			main_image.title = js_info['SHOW_AD_VIDEO'];
		} else {
			main_image.alt = js_info['CLICK_FOR_NEXT_IMAGE'];
			main_image.title = js_info['CLICK_FOR_NEXT_IMAGE'];
		}
	},

	styles: [],

	styles_name: [],

	thumbnailBorder: function(thumb, image_num, ad_id, type) {
		var ad_id = ad_id ? ad_id : "";

		if (!thumb)
			return;

		if (thumb.name != 'video')
			blocket.common.hide_video(ad_id);

		if (type == undefined) {
			for (i = 0; i < image_num; i++) {
				var thumb_obj = document.getElementById('thumb' + i + ad_id);
				if (!blocket.common.styles[i]) {
					blocket.common.styles[i] = thumb_obj.className.replace("ad_border_solid_black", "ad_border_solid_grey");
				}

				if (thumb.id == thumb_obj.id) {
					thumb_obj.className = "ad_thumb ad_border_solid_black";
				} else {
					thumb_obj.className = blocket.common.styles[i];
				}
			}

			var thumb_obj = document.getElementById('thumbmap' + ad_id);
			if (thumb_obj) {
				if (!blocket.common.styles_name['thumbmap']) {
					blocket.common.styles_name['thumbmap'] = thumb_obj.className.replace("ad_border_solid_black", "ad_border_solid_grey");
				}

				if (thumb.id == thumb_obj.id) {
					thumb_obj.className = "ad_thumb ad_border_solid_black";
				} else {
					thumb_obj.className = blocket.common.styles_name['thumbmap'];
				}
			}
		} else if (type == 'ikea') {
			for (i = 0; i < image_num; i++) {
				$("#thumb"+i+ad_id).removeClass("thumb_active").addClass("thumb_inactive");
			}
			$(thumb).removeClass("thumb_inactive").addClass("thumb_active");
		}
	},

	goto_hitta: function(link, address_id, zipcode_id, postal_city_id) {
		var address = document.getElementById(address_id);
		var zipcode = document.getElementById(zipcode_id);
		var postal_city = document.getElementById(postal_city_id);

		link.href = "http://www.hitta.se/SearchCombi.aspx?UCSB%3aTextBoxWhere=" + blocket.common.escape_component(address.value) + "+" + zipcode.value.replace(/ /, "") + "+" + blocket.common.escape_component(postal_city.value);
		link.target = '_blank';

		blocket.common.trafikfonden.register_trafikfonden(link, 'http: //www.hitta.se'); /* common.trafikfonden.hitta */

		return true;
	},

	/* Hide image and display image-add input */
	delete_image: function(element_show, element_hide, hidden) {
		var obj1 = document.getElementById(element_show);
		var obj2 = document.getElementById(element_hide);
		blocket.common.showField(obj1.id, "block");

		obj2.innerHTML = "<input type='hidden' name='" + hidden + "' value='1'>";

		return false;
	},

	getElementsByClassName: function(oElm, strTagName, strClassName) {
		var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
		var arrReturnElements = new Array();
		strClassName = strClassName.replace(/\-/g, "\\-");
		var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
		var oElement;
		for(var i=0; i<arrElements.length; i++) {
			oElement = arrElements[i];
			if (oRegExp.test(oElement.className)) {
				arrReturnElements[arrReturnElements.length] = oElement;
			}
		}
		return (arrReturnElements)
	},

	show_hidden_elements: function() {
		var elements = blocket.common.getElementsByClassName(document, "*", 'hide');
		for (var i = 0; i < elements.length; i++) {
			elements[i].className = elements[i].className.replace(/hide/, '');
		}
	},

	show_tabbed_data: function() {
		document.getElementById("tabbed_data").style.display = "block";
		document.getElementById("show_tabbed_text").style.display = "none";
	},

	hide_tabbed_data: function() {
		document.getElementById("tabbed_data").style.display = "none";
		document.getElementById("show_tabbed_text").style.display = "block";
	},

	get_settings: function(setting_name, keylookup_func, settings_root, extra) {
		if (!settings_root)
			settings_root = settings;

		var res;

		for (var i in settings_root[setting_name]) {
			var setting = settings_root[setting_name][i];
			var val;

			val = null;
			if (settings_root[setting_name][i]['keys']) {
				for (var j in settings_root[setting_name][i]['keys']) {
					var key = settings_root[setting_name][i]['keys'][j];
					var key_val = keylookup_func(key, extra);

					if (setting[key_val]) {
						setting = setting[key_val];
					} else {
						if (setting['*']) {
							setting = setting['*'];
						} else {
							break;
						}
					}
				}
				if (setting['value'])
					val = setting['value'];
			} else if (settings_root[setting_name][i]['default']) {
				val = settings_root[setting_name][i]['default'];
			}
			if (val) {
				if (res)
					res += ',' + val;
				else
					res = val;
				if (!settings_root[setting_name][i]['continue'])
					break;
			}
		}

		return res;
	},

	split_setting: function(val) {
		if (!val)
			return {};

		parts = val.replace(/\\,/g, "&44;").split(",");

		var arr = new Array();

		for(i in parts)
		{
		   part = parts[i].replace(/&44;/g, ",");
		   arr.push(part);
		}

		var res = {};

		for (i = 0; i < arr.length; i++) {
			var kv = arr[i].split(':', 2);

			if (kv && kv.length > 1) {
				if (kv[0] in res) {
					res[kv[0]] = [res[kv[0]], kv[1]];
				} else {
					res[kv[0]] = kv[1];
				}
			} else {
				res[arr[i]] = 1;
			}
		}

		return res;
	},

	mergeElementValues: function(arr, htmlCollection) {
		for (var ii = 0; ii < htmlCollection.length; ii++) {
			var elem = htmlCollection[ii];

			if (!elem.getAttribute('name'))
				continue;

			var key = null;
			var options = null;
			if (elem.className) {
				var element_group = elem.className.replace(/.*element_group([0-9]+).*/, "$1");
				if (element_group != "")
					element_group += ".";
				key = element_group + elem.getAttribute('name');

				if (elem.className.match(/(^| )cat_data_select($| )/)) {
					var a = [];
					for (var i = 0; i < elem.options.length; i++) {
						a[i] = elem.options[i];
					}
					options = a;
				}
			} else
				key = elem.getAttribute('name');
			if (key.match(/\[\]$/) && elem.value)
				key += elem.value;
			if (((elem.type == 'radio' || elem.type == 'checkbox') && !elem.checked)) {
				if (typeof arr[key] != "undefined")
					delete arr[key];
			} else if ((elem.value || options) && !elem.disabled) {
				arr[key] = elem.value;
				if (options)
					arr[key + ".options"] = options;
			} else {
				arr[key] = "";
				if (typeof arr[key + ".options"] != "undefined")
					delete arr[key + ".options"];
			}
		}

		return arr;
	},

	setElementValues: function(arr, htmlCollection) {
		for (var ii = 0; ii < htmlCollection.length; ii++) {
			var elem = htmlCollection[ii];

			var options = null;
			if (elem.className) {
				var element_group = elem.className.replace(/.*element_group([0-9]+).*/, "$1");
				if (element_group != "")
					element_group += ".";
				key = element_group + elem.getAttribute('name');
				if (elem.className.match(/(^| )cat_data_select($| )/)) {
					options = arr[key + ".options"];
				}
			} else
				key = elem.getAttribute('name');
			if (key.match(/\[\]$/) && elem.value)
				key += elem.value;
			var value = arr[key];

			if (elem.type == 'radio' || elem.type == 'checkbox') {
				if (value == elem.value)
					elem.checked = true;
			} else if (value || options) {
				if (options) {
					elem.options.length = 0;
					for (var i = 0; i < options.length; i++) {
						elem.options[i] = options[i];
					}
					elem.disabled = false;
				}
				elem.value = value;
			}
		}
	},

	/*
	 * AJAX
	 */

	running_xmlhttp_objects: 0,

	ajax_request: function(dest, post, callback, params, evaluate, method, timeout_obj) {
		var xmlhttp = false;
		if (method == null) {
			method = "POST";
		}

		if(typeof(post) == 'object' && post !== null) {
			post = $.param(post);
		}

		if(method == 'GET' && post != null && post.length) {
			if(dest[dest.length - 1] == '&') {
				dest += post;
			} else if(dest[dest.length - 1] == '?') {
				dest += post;
			} else if(dest.indexOf('?') > -1) {
				dest += '&' + post;
			} else {
				dest += '?' + post;
			}
		}

		if (typeof evaluate == "undefined")
			evaluate = true;
		try {
			xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			// browser doesn't support ajax. handle however you want
			// XXX ? callback(false, xmlhttp, params);
		}

		if (xmlhttp !== false) {
			if (callback) {
				xmlhttp.onreadystatechange = function () { blocket.common.ajax_callback(callback, params, xmlhttp, evaluate); };
			}
			xmlhttp.open(method, dest, true);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			if (timeout_obj && timeout_obj.timeout) {
				xmlhttp.timeout = timeout_obj.timeout;
				if (timeout_obj.on) {
					xmlhttp.ontimeout = timeout_obj.on;
				}
			}
			blocket.common.running_xmlhttp_objects++;
			if(method == 'POST') {
				xmlhttp.send(post);
			} else {
				xmlhttp.send();
			}
		}
	},

	ajax_callback: function(callback, params, xmlhttp, evaluate) {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200 && xmlhttp.responseText.indexOf('<!DOCTYPE') < 0) {
				if (evaluate)
					callback(eval("(" + xmlhttp.responseText + ")"), xmlhttp, params);
				else
					callback(xmlhttp.responseText, xmlhttp, params);
			} else {
				callback(false, xmlhttp, params);
			}
			blocket.common.running_xmlhttp_objects--;
		}
	},

	escape_component: function(str) {
		return escape(str).replace('+', '%2b');
	},

	gallery_price_update: function(checkbox) {
		$("#inv_price_checked").toggle();
		$("#inv_price_unchecked").toggle();
	},

	quiz_result: function(result, xmlhttp, form) {
		if (!result) {
			$(".prize_info").hide();
			$(".errors").show();
			$(".error").hide();
			$("#err_quiz_pnr").show();
			result = new Array();
			result['status'] = 'ERROR';
		} else if (result['status'] == 'OK') {
			form.reset();
			var divs = form.getElementsByTagName('div');
			for(var i in divs) {
				var e = divs[i];
				if (e.className && e.className.match(/okey/)) {
					e.style.display = 'block';
				}
			}
			$("#quiz_thanks").show();
			$(".prize_tickets").hide();
		} else {
			$(".prize_info").hide();
			$(".errors").show();
			$(".error").hide();
			for(var key in result) {
				var err = document.getElementById('err_quiz_' + key);
				if (err) {
					err.style.display = 'block';
				}
			}
		}
	},

	quiz_submit: function(form) {
		var post = '';
		var action = form.getAttribute('action');
		for (var i = 0; i < form.elements.length; i++) {
			var temp = form.elements[i];
			if (temp.name) {
				if (temp.type == "radio") {
					if (temp.checked)
						post += temp.name + '='+temp.value+'&';
				} else if (temp.type == "checkbox") {
					post += temp.name + '=' + (temp.checked ? '1' : '0') + '&';
				} else {
					post += temp.name + '=' + blocket.common.escape_component(temp.value).replace(/%u[0-9][0-9][0-9][0-9]/g, '%3F') + '&';
				}
			}
		}
		var divs = form.getElementsByTagName('div');
		for(var i in divs) {
			var e = divs[i];
			if ((e.id && e.id.match(/^err_/)) || (e.className && e.className.match(/okey/))) {
				e.style.display = 'none';
			}
		}
		blocket.common.ajax_request(action, post, blocket.common.quiz_result, form, true, "POST");
		return false;
	},

	/* Log to Firebug console */
	log: function(message) {
		if (typeof(console) !== 'undefined' && console != null && blocket.common.getCookie('console_log') == '1')
			console.log(message);
	},
	is_location: function(location_name) {
		if (typeof location_name === 'object'){
			for (var key in location_name){
				if (new RegExp('/'+location_name[key]+'/','i').test(document.location.pathname)){
					return true;
				}
			}
		} else {
			return (new RegExp('/'+location_name+'/','i').test(document.location.pathname));
		}
	},
	setAreas: function(region_selector, area_selector, area_readonly) {
		var munics;
		var i = 1;
		var region = region_selector.value;

		if (region > 0)
			munics = regionArray[region]['municipality'];

		if (!munics)
			return;

		var arr = Array();
		for (var k in munics) {
			var areas = munics[k]['subarea'];

			arr[k] = new Array();
			arr[k]['area'] = munics[k]['name'];
			if (areas) {
				for (var a in areas) 
					arr[k][a] = ' \xa0  - ' + areas[a]['name'];
			}
		}

		var oldArea = area_selector.value;
		area_selector.options.length = 1;
		var firstArea;
		var str;
		for (var a in arr) {
			area_selector.options[i] = new Option(arr[a]['area'], a);
			if (oldArea == a)
				area_selector.options[i].selected = true;

			for (var b in arr[a]) {
				if ( b != 'area' ) {
					if (i++ == 1)
						firstArea = arr[a]['area'];

					str= a + ':' + b;
					area_selector.options[i] = new Option(arr[a][b], str);
					if (oldArea == str)
						area_selector.options[i].selected = true;
				}

			}

			if (i++ == 1)
				firstArea = arr[a]['area'];
		}
		if (i == 2) {
			area_selector.style.display = "none";
			area_selector.options[1].selected = true;
			if(area_readonly != null) {
				area_readonly.innerHTML = firstArea;
			}
		} else {
			area_selector.style.display = "block";
			if(area_readonly != null) {
				area_readonly.innerHTML = '';
			}
		}
	},
	setAreas_ai: function(region_selector, area_selector, area_readonly) {
		var munics;
		var region = region_selector.value;

		if (region > 0)
			munics = regionArray[region]['municipality'];

		if (!munics)
			return;

		var $area = $(area_selector);

		// Save selected value
		var selected = $area.val();

		// Empty old select
		$area.children().remove();
		$area.append($(document.createElement("option")).attr("value", "").html("&laquo;V&auml;lj kommun&raquo;"));

		for (k in munics) {
			var $elem;

			if (typeof munics[k]['subarea'] === 'object') {
				$elem = $(document.createElement("optgroup")).attr("label", munics[k]['name']);
				$area.append($elem)
				// Feel free to put the children in the optgroup instead, I CBA
				for(k2 in munics[k]['subarea']) {
					$area.append($(document.createElement("option")).attr("value", k+":"+k2).html(' \xa0  - '+munics[k]['subarea'][k2]['name']));
				}
			} else {
				$elem = $(document.createElement("option")).attr("value", k).html(munics[k]['name']);
				$area.append($elem)
			}
		}

		// Check if there's only one value, then select it else try the old value for area (eg. same region chosen... you never know)
		if ($('#area > option').length === 2) {
			$area.val($('#area > option:nth-of-type(2)').val());
		} else {
			$area.val(selected);
		}
	}
});


// USAGE
// eventListner.bind(*'[function|string]', *[function], [namespace])
// eventListner.bind('blocket.apps.news.truncate', function() {console.log('truncate')}, 'truncate')

// eventListner.unbind(*'[function|string]', [namespace])
// eventListner.unbind('blocket.apps.news.truncate', 'truncate')

eventListener = {
        find: function(trigger) {

		if (typeof trigger === 'undefined') {
			throw 'TypeError: arguments[0] is undefined';
		} else if (typeof trigger !== 'string') {
			throw 'TypeError: arguments[0] is not a string';
		} 

                var c = trigger.split('.');
                var func = window;
                var name = 'window';
                var depth = window;

                (function search(o) {
                        func = func[o[0]];
                        name = o.shift();
                        if (o.length > 0) {
				if (typeof func === 'undefined') {
					throw 'TypeError: ' + trigger.split('.' + o[0])[0] + ' is undefined';
				}
				depth = func;
                                search(c);
                        }
                })(c);

		if (typeof depth[name] === 'undefined') {
			throw 'TypeError: ' + trigger + ' is undefined';
		}

                return {
                        func: func,
                        name: name,
                        depth: depth
                }
        },
        bind: function(trigger, action, namespace) {
                var
                        t = trigger,
                        a = action,
                        n = namespace

                t = this.find(t);

                var     d = '___' + t.name;


		if (typeof a === 'undefined') {
			throw 'TypeError: arguments[1] is undefined';
		} else if (typeof a !== 'function') {
			throw 'TypeError: arguments[1] is not a function';
		} 
		if (typeof n !== 'undefined' && typeof n !== 'string') {
			throw 'TypeError: arguments[2] is not a string';
		} 


		if (typeof t.depth[d] === 'undefined') {
                        t.depth[d] = t.func;
                        t.depth[d].__proto__.___actions = [];
		}
		if (typeof n !== 'undefined') {
			t.depth[d].___actions[n] = a;
		} else {
			t.depth[d].___actions.push(a);
		}

		if (typeof t.depth[t.name] === 'function') {
			t.depth[t.name] = function() {
				var result = t.depth[d].apply(t.depth, arguments);
				for (var k in t.depth[d].___actions) {
					if (typeof t.depth[d].___actions[k] === 'function') {
					    t.depth[d].___actions[k].call(t.depth, arguments, result);
					}
				}
				return result
			}
		} else if (typeof t.depth[t.name] === 'number' || typeof t.depth[t.name] === 'string') {
			t.depth.__defineSetter__(t.name, function(v) {
				var from = t.depth[d];
				t.depth[d] = v;
				for (var k in t.depth[d].___actions) {
					if (typeof t.depth[d].___actions[k] === 'function') {
					    t.depth[d].___actions[k](from, arguments[0]);
					}
				}
			});
			t.depth.__defineGetter__(t.name, function() {
				return t.depth[d];
			});
		}
		for (var k in t.depth[d]) {
			t.depth[t.name][k] = t.depth[d][k];
		}
                return true
        },
        unbind: function(trigger, namespace) {
                var
                        t = trigger,
                        n = namespace

                t = this.find(t);
                        
		if (typeof n !== 'undefined' && typeof n !== 'string') {
			throw 'TypeError: arguments[2] is not a string';
		} 

                var     d = '___' + t.name;

                if (typeof t.depth[d] !== 'undefined') {
                        if (typeof n === 'string') {
				var i = 0;
                                for (var k in t.depth[d].___actions) {
                                        if (k === n) {
                                                t.depth[d].___actions.splice(i,1);
						break;
                                        }
					i++;
                                }
				return false
                        } else {
				t.depth[d].___actions.splice(0,t.depth[d].___actions.length)
                        }
                }
                return true
        }
}

/* Seamless modification of jQuery cookie plugin to access the raw value of the cookie */
$.cookie_raw = function (key, value, options) {
	$.cookie.raw = true;
	var value = $.cookie(key, value, options);
	$.cookie.raw = false;

	return value;
};
/*!** End file: common.js ***/
/*!** Begin file: events.js ***/
blocket("@common.events").extend({
	global_pending_events: 0,
	service_status: [],

	set_service_status: function(service, status) {
		blocket.common.events.service_status[service] = status;
	},

	check_service: function(e, args) {
		if (service_enabled[args.service] != "1") {
			blocket.common.events.set_service_status(args.service, false);
			return;	
		}

		$.ajax({
			type: "GET",
			url: "/service.xml?service="+args.service,
			success: function(msg){
				blocket.common.events.set_service_status(args.service, (msg.getElementsByTagName('status')[0].firstChild.nodeValue == "OK"));
				blocket.common.category_dropdown.update_freespee_info(e,args);
			}
		});

		blocket.common.events.set_service_status(args.service, true);
	},

	clear_textarea_if: function(e, args) {
		var elem = document.getElementById(args.id);

		if (elem) {
			var v = elem.getAttribute(args.condvar);
			if (v && v == "1") {
				elem.setAttribute(args.condvar, '0');
				elem.value='';
			}
		}
	},


	display_element: function(e, args) {
		var elem = document.getElementById(args.id);

		if (elem) {
			elem.style.display = args.style;

			if(/^\s*$/.test(elem.innerHTML)) {
				elem.style.display = "none";
			}
		}
	},

	info_text: function(e, args) {
		var elem = document.getElementById(args.id);

		if (elem == null)
			return;

		if (elem.value == js_info[args.key] && args.style == "none") {
			elem.value = '';
			$(elem).removeClass('text_info');
			elem.removeAttribute("spellcheck");
		} else if (args.style == "block" && elem.value == "") {
			elem.value = js_info[args.key];
			$(elem).addClass('text_info');
			elem.setAttribute("spellcheck", "false");
		}
	},

	set_html: function(e, args) {
		var elem = document.getElementById(args.id);

		if (elem)
			elem.innerHTML = args.html;
	},

	set_focus: function(e, args) {
		if (args.check_focused && blocket.common.focused)
			return;
		for (var i in args.id) {
			var id = args.id[i];

			if (args.sel_id)
				id += this.getAttribute("data-sel_id");

			var element = document.getElementById(id);
			if (element && element.offsetWidth) {
				if (!args.only_if_empty || !element.value || element.value.length == 0)
					element.focus();
				break;
			}
		}
	},

	show_by_feature: function(e, args) {
		var id = args.id;
		var feat = args.feat;
		var klfun = args.klfun;
		var style = args.style;

		var elem = document.getElementById(id);
		if (!elem)
			return;

		if (!feat)
			feat = id;
		if (!klfun)
			klfun = blocket.common.category_dropdown.form_key_lookup;
		if (!style)
			style = '';
		
		var f = blocket.common.split_setting(blocket.common.get_settings(feat, klfun, category_features));
		if (f && f.show > 0) {
			elem.style.display = style;
		} else {
			elem.style.display = 'none';
		}
	},

	/*
	 * Registers all events to objects
	 * (uses root so that object searching can be narrower)
	 */
	register_events: function(events, root) {
		for (var event_id in events) {
			var current_event = events[event_id];
			var elements = [];

			/* Get all involved elements */
			if (current_event.id) {
				var element = root.getElementById(current_event.id);
				if (element)
					elements = [element];
			} else if (current_event.name) {
				elements = root.getElementsByName(current_event.name);
			} else if (current_event.array_name) {
				var element;
				var i = 0;
				while (element = root.getElementsByName(current_event.array_name + '[' + i + ']')[0]) {
					elements[i++] = element;
				}	
			} else if (current_event.array_id) {
				var element;
				var i = 0;
				while (element = root.getElementById(current_event.array_id + i)) {
					elements[i++] = element;
				}	
			}

			/* Check if object exists to attach event to */
			for (var element_index = 0; element_index < elements.length; element_index++) { 
				var element = elements[element_index];

				/* Init event id array */
				if (!element.event_ids)
					element.event_ids = [];

				/* Check if current event already have been attached to the object */
				if (blocket.common.isInArray(event_id, element.event_ids))
					continue;

				/* Store current event id */
				element.event_ids[element.event_ids.length] = event_id;

				/* Hijack the element, create an event array */
				if (!element.events)
					element.events = [];

				/* Create array for each event trigger (Support for multiple events each event) */
				if (!element.events[current_event.trigger])
					element.events[current_event.trigger] = [];

				/* Store the event in the objects event array */
				element.events[current_event.trigger][element.events[current_event.trigger].length] = current_event;

				/* Load events */
				if (current_event.trigger == 'init') {
					blocket.common.events.call_event_timeout(element, 'init', 0);
				} else if (element.attachEvent) {
					/* Add an event listener to the object */
					element.attachEvent("on" +  current_event.trigger, /* The event trigger name */
							blocket.common.events.call_event /* Event callback */
							);
				} else {
					element.addEventListener(current_event.trigger, /* The event trigger name */
							blocket.common.events.call_event, /* Event callback */
							true); /* Event bubbling */
				}
			}
		}
	},

	/*
	 * Event call back handler
	 */
	call_event: function(e) {
		/* This element */
		var element = this;
		var type = e.type;

		/* TODO srcElement is not necessarily the element we registered to. */
		if (window.event)
			element = window.event.srcElement;

		if (element.asyncs > 0) {
			/* Already running, reschedule ourselves. */
			blocket.common.events.call_event_timeout(element, type, 50);
			return;
		}

		blocket.common.events.global_pending_events++;
		element.asyncs = 1;

		/* Go through all events linked to the element event type */
		for (var ep in element.events[type]) {
			var current_event = element.events[type][ep];

			if (!current_event.bubble) {
				/* Don't do events below this object*/
				if (window.event) {
					window.event.cancelBubble = true;
				} else if (e && e.stopPropagation) {
					e.stopPropagation();
				}
			}

			/* Execute all actions in the current event */
			for (var function_index in current_event.action) {
				var function_conf = current_event.action[function_index];
				var f = eval(function_conf.name);
				var args = function_conf.args;

				/* 
				 * (element, f, args) need local binding within the higher order function. To bind them, we need to
				 * create a higher higher order function and evalutate it to force the binding.
				 */
				var run_me = (function (element, f, args) {
						return (function () {
							/* Get function reference */
							/* Execute function as if it was called by THIS, and send the event argument */
							f.call(element, [element, type], args);
						});
					})(element, f, args);

				if (function_conf.async) {
					blocket.common.events.global_pending_events++;
					element.asyncs++;
					run_me();
				} else
					blocket.common.events.queue_document_change([element, type], run_me);
				run_me = null;
			}
		}

		blocket.common.events.global_pending_events--;
		if (--element.asyncs == 0) {
			blocket.common.events.run_document_changes(element);
		}
	},

	queue_document_change: function(e, f) {
		var element = e[0];

		if (!element.document_changes || element.document_changes === "")
			element.document_changes = [];
		element.document_changes[element.document_changes.length] = f;
	},

	event_async_done: function(e) {
		var element = e[0];
		var type = e[1];

		blocket.common.events.global_pending_events--;
		element.asyncs--;

		if (element.asyncs == 0) {
			blocket.common.events.run_document_changes(element);
		}
	},

	run_document_changes: function(element) {
		while (element.document_changes) {
			var to_run = element.document_changes;
			element.document_changes = "";

			/* LIFO */
			for (var i = to_run.length - 1; i >= 0; i--) {
				var f = to_run[i];

				f();
			}
		}
	},

	call_event_timeout: function(element, type, time) {
		setTimeout(function() { blocket.common.events.call_event.call(element, {'type' : type}) }, time);
	}
});
/*!** End file: events.js ***/
/*!** Begin file: category_dropdown.js ***/
blocket("@common.category_dropdown").extend({
	form_key_lookup: function(key, sel_id) {
		sel_id = sel_id ? sel_id : '';

		if (key == 'b__lang') {
			return lang;
		}

		if (key == 'type') {
			var selectType = document.getElementById("type" + sel_id);

			if (selectType && selectType.tagName != 'SELECT') /* IE fix */
				selectType = false;

			if (selectType) {
				return selectType.value;
			} else {
				var cont = document.getElementById("type_container" + sel_id);
				var inputs = cont.getElementsByTagName('INPUT');

				for (var idx = 0; idx < inputs.length; idx++) {
					if (inputs[idx].type == 'radio' && inputs[idx].checked)
						return inputs[idx].value;
				}
				return 's';
			}
		}

		var category_group = document.getElementById("category_group" + sel_id);
		var sub_cat = document.getElementById("sub_category" + sel_id);
		var cat_id_elem = document.getElementById("cat_id");
		var cat_id;

		if (cat_id_elem && cat_id_elem.value != 0)
			cat_id = cat_id_elem.value;
		else if (sub_cat && sub_cat.style && sub_cat.style.display != 'none' && sub_cat.value != 0 && category_list[sub_cat.value].parent == category_group.value)
			cat_id = sub_cat.value;
		else
			cat_id = category_group.value;

		if (key == "category")
			return cat_id;
		if (key == "parent" && category_list[cat_id])
			return category_list[cat_id]['parent'];

		if (key == "has_store" || key == "store") {
			var store_row = document.getElementById('store_row');
			var res;

			if (store_row)
				res = store_row.style.display != 'none';
			else
				res = document.getElementById('store_holder') != null;
			if (res)
				return 1;
			else
				return 0;
		}
		
		if (key == "company_ad") {
			if ($('#c_ad').attr('type') == 'radio') {
				return document.getElementById('c_ad').checked ? 1 : 0;
			} else {
				return $('#c_ad').val();
			}
		}

		var elem = document.getElementById(key + sel_id);
		if (elem) {
			return elem.value;
		}
	},

	show_category_types: function(e, args) {
		var sel_id = this.getAttribute("data-sel_id");
		var selectType = document.getElementById("type" + sel_id);
		var selected;

		/* Don't display type radio buttons when editing an old category ad */
		if (selectType && selectType.type == 'hidden')
			return 0;

		if (selectType && selectType.tagName != 'SELECT')
			selectType = false;

		/* Get the selected type */
		if (selectType) {
			for (i = 0; i < selectType.options.length; i++) {
				if (selectType[i].selected)
					selected = selectType[i].value;
			}
		}

		var types = blocket.common.get_settings('types', blocket.common.category_dropdown.form_key_lookup, category_settings, sel_id);
		var type = types.split(',');

		if (!selectType) {
			for (var t in type) {
				var radio = document.getElementById("r" + type[t] + sel_id);
				if (radio && radio.checked) {
					selected = type[t];
					break;
				}
			}
		}

		/* Store new type options for this category */
		if (selectType) {
			selectType.options.length = 1;
			for (i = 0; i < type.length; i++) {
				selectType.options[i+1] = new Option(typeList[type[i]], type[i]);
				
				if (selected == type[i])
					selectType.options[i+1].selected = true;
			}
		} else {
			/* Don't try to optimize this code, it wont work for older ie if you do! */
			var cont = $("#type_container .row div:first-child")[0];
			if (cont != null) {
				cont.innerHTML = '';
				if (type.length > 1) {
					var inner_html = '';
					for (var i in type) {
						var t = type[i];
						var el = '<label class="radio-inline">';
						el += '<input name="type" type="radio" id="r' + t + sel_id + '" value="' + t + '" data-sel_id="' + sel_id + '"';
						el += t === 's' ? ' checked' : '';
						el += '>';
						el += typeList[t];
						el += '</label>';	
						inner_html += el;
					}
					cont.innerHTML = inner_html;
				}
				blocket.common.events.register_events(jsevents.ai, document);
				if (selected) {
					blocket.common.setChecked("r" + selected + sel_id, true);
				}
			}
		}
	},

	set_category_changed: function() {
		var sel_id = this.getAttribute("data-sel_id");
		var selectType = document.getElementById("type" + sel_id);
		if (document.getElementById('category_changed' + sel_id)) {
			var cat_id = blocket.common.category_dropdown.form_key_lookup('category', sel_id);
			document.getElementById('category_changed' + sel_id).value = (cat_id != document.getElementById('original_category' + sel_id).value) ? '1' : '0';
		}
	},

	show_sub_category: function(e, args) {
		var sel_id = this.getAttribute("data-sel_id");

		var ikea_categories = 0;
		if (this.getAttribute('ikea_categories') == '1' ||
		    $('#ikea_smokescreen').length > 0) {
			ikea_categories = 1;
		}

		var show_price = 1;
		var cat_list = category_list;
		var cat_order = category_order;

		if (args && args.noprice)
			show_price = 0;

		if (ikea_categories > 0) {
			cat_list = category_list_ikea;
			cat_order = category_order_ikea;
			show_price = 0;
		}

		var category_group = document.getElementById("category_group" + sel_id);
		var sub_cat = document.getElementById("sub_category" + sel_id);
		var company_ad = $('#pi_c_ad').attr("checked") ? 1 : 0;
		var par_id = category_group.value;

		var sub_cats = Array();
		if (cat_list[par_id] && cat_list[par_id]['level'] > 0) {
			for (var u = 0; u < cat_order.length; u++) {
				if (cat_list[cat_order[u]]['parent'] == par_id)
					sub_cats[sub_cats.length] = cat_order[u];
			}
		}

		var show_sub_cat = false;
		if (sub_cats.length > 0) {
			sub_cat.options.length = 1;
			for (var i = 0; i < sub_cats.length; i++) {
				var cat_id = sub_cats[i];
				var name = cat_list[cat_id]['name'];
				if (show_price > 0) {
					var price = blocket.common.split_setting(blocket.common.get_settings('price', 
								 function (key) {
									if (key == "company_ad")
										return company_ad;
									if (key == "category")
										return cat_id;
									if (key == "parent" && cat_list[cat_id])
										return cat_list[cat_id]['parent'];
								 },
								 category_settings));

					if (price)
						name += " \xA0 " + price.price + " " + js_info['MONETARY_UNIT'];
				}
				sub_cat.options[i + 1] = new Option(name, sub_cats[i]);
			}
			show_sub_cat = true;
		}

		var sub_cat_show_element = $("#subcat_group" + sel_id);
		if(sub_cat_show_element.length == 0) {
			sub_cat_show_element = $(sub_cat);
		}

		if(show_sub_cat) {
			sub_cat.disabled = false;
			sub_cat_show_element.removeClass('hidden');
			sub_cat_show_element.css('display', 'block');
		} else {
			sub_cat.disabled = true;
			sub_cat_show_element.addClass('hidden');
			sub_cat_show_element.css('display', 'none');
		}
	},

	update_freespee_info: function(e, args) {
		var sel_id = document.getElementById("p_ad");
		if (!sel_id) {
			return;
		}
		sel_id = sel_id.getAttribute("company_ad");
		var fs = blocket.common.split_setting(blocket.common.get_settings('freespee', blocket.common.category_dropdown.form_key_lookup, freespee_settings, sel_id));

		if (document.getElementById('freespee') == null) {
			return;
		}

		var cb = document.getElementById('freespee');

		if (blocket.common.events.service_status && fs) {
			var fs_elem = document.getElementById('freespee_info');
			var fs_elem_label = document.getElementById('freespee_info_label');
			var new_vis = "none";

			if ((cb.checked == true || blocket.common.events.service_status['freespee'] == true) && fs['visible'] == 1) {
				var fs_text = document.getElementById('freespee_text');
				if (fs_text) {
					var freespee_price = blocket.common.split_setting(blocket.common.get_settings('freespee_price', blocket.common.category_dropdown.form_key_lookup, freespee_settings, sel_id));
					if (freespee_price && freespee_price['price'])
						pinfo = js_info['INFO_AI_FREESPEE_PRICEINFO'].replace('#freespee_price#', freespee_price['price']);
					else
						pinfo = '';
					var ca = 11;
					/* ca = blocket.common.queryString('ca'); if (!ca || ca == -1) ca = '11'; */
					var s = js_info['INFO_AI_FREESPEE'].replace('#freespee_price_info#', pinfo).replace('#caller#', ca);
					fs_text.innerHTML = s;
				}
				new_vis = "block";
			} else {
				if (cb)
					cb.checked = false;
			}
			if (fs_elem)
				fs_elem.style.display = new_vis;
			if (fs_elem_label)
				fs_elem_label.style.display = new_vis;
		}
	}
});
/*!** End file: category_dropdown.js ***/
/*!** Begin file: ajax.js ***/
blocket("@common.ajax").extend({
	form_submit_result: function(result, xmlhttp, form) {

		if (!result) {
			result = new Array();
			result['status'] = 'ERROR';
		}

		if (result['status'] == 'OK') {
			form.reset();
			var divs = form.getElementsByTagName('div');
			for(var i in divs) {
				var e = divs[i];
				if (e.className && e.className.match(/okey/)) {
					e.style.display = 'block';
					$(e).removeClass("hide");
				}
			}
		} else {
			for(var key in result) {
				var err = document.getElementById('err_' + key);

				if (err) {
					err.innerHTML = result[key];
					err.style.display = 'inline';
				} 
			}
		}
	},

	form_ajax_submit: function(form) {
		var post = '';

		var action = form.getAttribute('action');

		for (var i = 0; i < form.elements.length; i++) {
			var temp = form.elements[i];

			if (temp.name) {
				if (temp.type == "radio") {
					if (temp.checked)
						post += temp.name + '='+temp.value+'&';
				} else if (temp.type == "checkbox") {
					post += temp.name + '=' + (temp.checked ? '1' : '0') + '&';
				} else {
					post += temp.name + '=' + blocket.common.escape_component(temp.value).replace(/%u[0-9][0-9][0-9][0-9]/g, '%3F') + '&';
				}
			}
		}
		var divs = form.getElementsByTagName('div');
		for(var i in divs) {
			var e = divs[i];
			if ((e.id && e.id.match(/^err_/)) || (e.className && e.className.match(/okey/))) {
				e.style.display = 'none';
			}
		}
		blocket.common.ajax_request(action, post, blocket.common.ajax.form_submit_result, form, true, "POST");

		return false;
	}
});
/*!** End file: ajax.js ***/
/*!** Begin file: b_onload.js ***/
/**
 * Blocket onload queue handler
 *
 */

blocket("@common.onload_queue").extend({
	queue: [],

	/**
	 * Process all functions added to a queue with specified prio
	 */
	handler: function(prio) {
		if (typeof(this.queue[prio]) == "undefined") {
			return;
		}

		for(var i = 0; i < this.queue[prio].length; i++) {
			try {
				this.queue[prio][i].onload_function(this.queue[prio][i]);
			} catch(ex) {
				console.log(ex);
			}
		}
	},

	/**
	 * Add an object to a specific queue
	 * The object must contain a function parameter to be valid
	 */
	add: function(obj, prio) {
		if (typeof(this.queue[prio]) == "undefined") {
			this.queue[prio] = Array();
		}

		try {
			this.queue[prio][this.queue[prio].length] = obj;
		} catch(ex) {
			console.log(ex);
		}
	},

	original_onload: window.onload
});

window.onload = function() {
	blocket.common.onload_queue.handler('high');
	blocket.common.onload_queue.handler('medium');
	blocket.common.onload_queue.handler('low');
	if (blocket.common.onload_queue.original_onload) {
		blocket.common.onload_queue.original_onload();
	}
};
/*!** End file: b_onload.js ***/
/*!** Begin file: prototypes.js ***/
/* Add support for trim to < IE8 */
if (typeof(String.prototype.trim) != "function") {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g,"");
	}
}

/**
* Returns the week number for this date. dowOffset is the day of week the week
* "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
* the week returned is the ISO 8601 week number.
* @param int dowOffset
* @return int
*/
Date.prototype.getWeek = function (dowOffset) {
	/*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */

	var newYear = new Date(this.getFullYear(),0,1);
	var day = newYear.getDay() - dowOffset; //the day of week the year begins on
	day = (day >= 0 ? day : day + 7);
	var daynum = Math.floor((this.getTime() - newYear.getTime() -
				(this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
	var weeknum;
	//if the year starts before the middle of a week
	if(day < 4) {
		weeknum = Math.floor((daynum+day-1)/7) + 1;
		if(weeknum > 52) {
			nYear = new Date(this.getFullYear() + 1,0,1);
			nday = nYear.getDay() - dowOffset;
			nday = nday >= 0 ? nday : nday + 7;
			/*if the next year starts before the middle of
			the week, it is week #1 of that year*/
			weeknum = nday < 4 ? 1 : 53;
		}
	} else {
		weeknum = Math.floor((daynum+day-1)/7);
		if (weeknum == 0) {
			var d = newYear;
			d.setDate(0);
			return d.getWeek(dowOffset);
		}
	}
	return weeknum;
};

/* Global elementary functions */
function isDefined(obj) {
	return typeof obj !== "undefined" && obj !== null;
}


/* var_dump like function */
function dump(arr, level) {
	var dumped_text = "";

	if (!level) {
		level = 0;
	}

	// The padding given at the beginning of the line
	var level_padding = "";

	for (var j =  0; j < level + 1; ++j) {
		level_padding += "    ";
	}

	if (typeof(arr) == "object") { // Arrays/Objects
		for (var item in arr) {
			var value = arr[item];

			if (value != null) {
				if (typeof(value) == "object") { // If it is an array
					dumped_text += level_padding + "'" + item + "' (" + value.length + ")\n";
					dumped_text += dump(value, level + 1);
				} else {
					dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
				}
			} else {
				dumped_text += level_padding + "'" + item + ": NULL \n";
			}
		}
	} else { // Strings/Booleans/Numbers etc.
		dumped_text = "===>" + arr + "<===(" + typeof(arr) + ")";
	}

	return dumped_text;
}
/*!** End file: prototypes.js ***/
/*!** Begin file: lazy_iframe.js ***/
function lazy_iframe(){
	var self = this;
	this.conf_timeout = lazy_iframe_conf.timeout;
	this.conf_enabled = lazy_iframe_conf.enabled;
	this.conf_fade_in = lazy_iframe_conf.fade_in;
	this.timeout_func = null;
	this.all_elems = new Array();
	this.iframes = new Array();
	this.heightLoaded = new Array();
	this.loadedElements = 0;
	this.init = function(){
		$(".lazy_iframe").each(function(i,elem){
			elem = jQuery(elem);
			if(elem.attr("loadheight")){
				elem.data("top", elem.offset().top);
				elem.data("loadheight", elem.attr("loadheight"));
				elem.data("loaded", false);
				self.heightLoaded.push(elem);	
			} else {
				if(jQuery(elem).is("iframe")){
					if (jQuery(elem).attr('longdesc') != undefined) {
						self.load_iframe(elem);
					}
					if(self.conf_enabled){
						self.iframes.push(elem);
						jQuery(elem).load(function(){
							self.set_loaded(this);
						});
					}
				}
		
				self.all_elems.push(elem);
			}
		});
		if(self.conf_enabled){
			this.timeout_func = setTimeout(function() {
				self.show_all();
			}, self.conf_timeout);
		} else {
			self.show_all();
		}
		self.should_load();
		jQuery(window).bind("scroll", self.on_scroll);
	}

	this.load_iframe = function(elem) {
		elem = jQuery(elem)[0];
		var new_src = jQuery(elem).attr("longdesc");
		/* IMPORTANT - use this way of setting the src since otherwise the history of
		/* the browser is modified and the backbutton won't work in explorer */
		if (new_src != "") {
			if(typeof(elem.contentWindow) != "undefined"){
				elem.contentWindow.location.replace(new_src);
			} else if(typeof(elem.contentDocument) != "undefined"){
				elem.contentDocument.location.replace(new_src);
			} else {
				jQuery(elem).attr('src', new_src);
			}
		}
		jQuery(elem).attr("data-is-lazy-loaded", "true");
	}

	this.on_scroll = function(){
		self.should_load();
	}

	this.should_load = function() {
		var scrollPos = jQuery(document).scrollTop();
		var viewPortHeight = jQuery(window).height();
		jQuery.each(self.heightLoaded, function(i, elem){
			if(!elem.data("loaded") && scrollPos + viewPortHeight > elem.data("top") - elem.data("loadheight")){
				elem.data("loaded", true);
				if(elem.is("iframe")){
					self.load_iframe(elem);
				}
			}
				
			
			self.show_element(elem);

		});
	
	}

	this.set_loaded = function(iframe){

		self.loadedElements++;

		if(self.loadedElements >= self.iframes.length) {
			blocket.common.log('DONE');
			self.loadedElements=0;
			self.show_all();
		}
	}
	this.show_all = function(s){
		
		clearTimeout(self.timeout_func);
		jQuery.each(self.all_elems,function(i,elem){
			self.show_element(elem);	
		});
	}

	this.show_element = function(elem) {
		jQuery(elem).css("display","");
		jQuery(elem).unbind("load");
		if(jQuery.support.opacity && self.conf_enabled){
			if(self.conf_fade_in){
				jQuery(elem).animate({opacity:"1"},{duration:500, easing:'swing'});
			} else {
				jQuery(elem).css("opacity",1);
			}
		} else{
			jQuery(elem).removeClass("lazy_iframe");
		}
	}

	this.init();
}









/*!** End file: lazy_iframe.js ***/
/*!** Begin file: clean_form.js ***/
blocket("@common.clean_form").extend({
	set_on_change: function(e, args) {
		var elements = $(":"+args.type+"");

		elements.each(function() { 
			var re = /[^\x04\s\x1e-\xfe]/g;
			if ($(this).is('textarea#body')) 
				/* Allow bullets (U+2022), but only in the body text. */
				var re = /[^\x04\s\x1e-\xfe\u2022\u25AA\u25AB]/g;

			$(this).unbind('change.clean_form');

			$(this).bind('change.clean_form', function() {
				blocket.common.clean_form.clean_field($(this), re);
			}); 
		});
	},

	clean_field: function(field, remove_regex) {
		if (field.attr("type") != "file") {
			var s = field.val().replace(remove_regex, "");
			s = s.replace(/\x04/g, "\n");
			field.val(s);
		}
	}
});

blocket("@init.common.clean_form").extend(function() {
	var args = Array();
	args['type'] = "input";
	blocket.common.clean_form.set_on_change(null, args);
});
/*!** End file: clean_form.js ***/
/*!** Begin file: campaigns.js ***/
blocket("@campaigns").extend({
	suredo: {
		onReady: function() {
			jQuery("#suredo .suredo_option").bind('change', function(e) {
				jQuery("#suredo .suredo_price").html(e.target.value);
			}).trigger('change');

			jQuery(".suredo_overlay_big").click(function(event) {
				event.stopPropagation();
			});
			jQuery("#suredo_info_link").click(function(event) {
				var overlay = jQuery(this).next("span.suredo_overlay"); 
				jQuery(overlay).toggle();
				jQuery("body").unbind("click.suredo_overlay");
				
				if(jQuery(overlay).is(":visible")) {
					jQuery("body").bind("click.suredo_overlay", function() {
						jQuery("span.suredo_overlay").hide();
						jQuery("body").unbind("click.suredo_overlay");
					});
				}
				event.stopPropagation();
			});
		}
	}
});


/*!** End file: campaigns.js ***/
/*!** Begin file: jquery.rangeselect.js ***/
(function ($, window, document, undefined) {
	"use strict";

	// Default config
	var name = "RangeSelect",
		defaults = {
			min: null, // Select input for min values
			max: null, // Select input for max values
			onChange: function () {},
			onReset: function (e) {
				e.preventDefault();
				e.stopPropagation();
				this.reset();
			},
			onApply: function () {}
		};

	function RangeSelect(element, options) {
		this.elements = {
			container: $(element)
		};

		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = name;
		this.init();
	}

	RangeSelect.prototype = {
		init: function () {
			if (this.settings.min) {
				this.elements.min = $(this.settings.min);
				this.elements.minOptions = this.elements.min.find("option");
			}

			if (this.settings.max) {
				this.elements.max = $(this.settings.max);
				this.elements.maxOptions = this.elements.max.find("option");
			}

			if (this.elements.min && this.elements.max) {
				this.single = false;
			} else {
				this.single = true;
				this.elements.multi = (this.elements.min || this.elements.max).attr("multiple") == "multiple";
			}

			this._buildPopup();

			this.settings.onChange(this.get());
		},

		set: function (min, max) {
			if (typeof min !== "undefined" && min !== null) {
				this._setMin(min);
			}

			if (typeof min !== "undefined" && max !== null) {
				this._setMax(max);
			}

			this.settings.onChange(this.get());
		},

		setMin: function (value) {
			this._setMin(value);
			this.settings.onChange(this.get());
		},

		setMax: function (value) {
			this._setMax(value);
			this.settings.onChange(this.get());
		},

		_setMin: function (value) {
			this._setControl(this.elements.min, this.elements.container.find("ul.min li[data-value=" + value + "]"), value);
		},

		_setMax: function (value) {
			this._setControl(this.elements.max, this.elements.container.find("ul.max li[data-value=" + value + "]"), value);
		},

		/*
		 * Sets the value of the select input and updates the list.
		 *
		 * @control Object A jQuery instance of the select input to update
		 * @widget Object A jQuery instance of the list item to update to
		 * @value String/Integer
		 *
		 */
		_setControl: function (control, widget, value) {
			var parent = widget.parent(),
			    siblings = widget.siblings();

			control.val(value);
			siblings.removeClass("active");
			widget.addClass("active");

			if (!this.single) {
				if (parent.hasClass("min")) {
					this._disableLower(this.elements.container.find("ul.max li[data-value='" + value + "']"));
				} else {
					this._disableHigher(this.elements.container.find("ul.min li[data-value='" + value + "']"));
				}
			}

			control.trigger("change");
		},

		_disableHigher: function (widget) {
			widget.siblings().addBack().removeClass("inactive");
			widget.nextAll().addClass("inactive");
		},

		_disableLower: function (widget) {
			widget.siblings().addBack().removeClass("inactive");
			widget.prevAll().addClass("inactive");
		},

		get: function () {
			var values = {};

			if (this.elements.min) {
				values.min = this.getMin();
			}

			if (this.elements.max) {
				values.max = this.getMax();
			}

			return values;
		},

		getMin: function () {
			if (this.elements.min) {
				return this.elements.min.val();
			} else {
				return null;
			}
		},

		getMax: function () {
			if (this.elements.max) {
				return this.elements.max.val();
			} else {
				return null;
			}
		},

		reset: function () {
			this._resetMin();
			this._resetMax();

			this.settings.onChange(this.get());
		},

		resetMin: function () {
			this._resetMin();

			this.settings.onChange(this.get());
		},

		resetMax: function () {
			this._resetMax();

			this.settings.onChange(this.get());
		},

		_resetMin: function () {
			if (this.elements.min) {
				this._resetControl(this.elements.min, this.elements.container.find("ul.min li"));
			}
		},

		_resetMax: function () {
			if (this.elements.max) {
				this._resetControl(this.elements.max, this.elements.container.find("ul.max li"));
			}
		},

		_toggleValue: function (control, value, enabled, widget) {
			var values = control.val() || [];
			var newValues = [];
			for(var i = 0; i < values.length; i++) {
				if (values[i] != value) {
					newValues.push(values[i]);
				}
			}
			widget.toggleClass("active", enabled);
			if (enabled) {
				newValues.push(value);
			}
			control.val(newValues);
			this.settings.onChange(this.get());
			control.trigger("change");
		},

		_resetControl: function (control, widget) {
			control.val(null);
			widget.removeClass("active");

			if (!this.single) {
				if (widget.parent().hasClass("min")) {
					this.elements.container.find("ul.max li").removeClass("inactive");
				} else {
					this.elements.container.find("ul.min li").removeClass("inactive");
				}
			}
			this.settings.onChange(this.get());
			control.trigger("change");
		},

		_buildPopup: function () {
			if (this.single === true) {
				if (this.elements.min) {
					this._buildPopupSingle({
						mode: "min",
						control: this.elements.min.attr("id"),
						options: this.elements.minOptions
					});
				} else if (this.elements.max) {
					this._buildPopupSingle({
						mode: "max",
						control: this.elements.max.attr("id"),
						options: this.elements.maxOptions
					});
				}

				this._bindSingle();
			} else {
				this._buildPopupMultiple({
					mode: "range",
					minControl: this.elements.min.attr("id"),
					maxControl: this.elements.max.attr("id"),
					minOptions: this.elements.minOptions,
					maxOptions: this.elements.maxOptions
				});

				this._bindMultiple();
			}

			this._bindControls();
		},

		_getOptionsList: function (options) {
			var out = [],
				option;

			options.each(function (index, el) {
				option = $(el);

				if (option.val() === "") {
					return;
				}

				out.push({
					active: option.is(":selected"),
					value: option.val(),
					text: option.text()
				});
			});

			return out;
		},

		_buildPopupSingle: function (options) {
			options.options = this._getOptionsList(options.options);
			this.elements.container.append(Handlebars.templates.singleRangeList(options));
			this.elements.container.find("h6").text(options.mode === "min" ? "Min" : "Max");
		},

		_buildPopupMultiple: function (options) {
			var minLis,
			    maxLis,
			    selectedMinLiValue,
			    selectedMaxLiValue;

			options.minOptions = this._getOptionsList(options.minOptions);
			options.maxOptions = this._getOptionsList(options.maxOptions);

			this.elements.container.append(Handlebars.templates.multipleRangeList(options));

			// Disable options outside of range
			minLis = this.elements.container.find(".min li");
			maxLis = this.elements.container.find(".max li");
			selectedMinLiValue = minLis.parent().find(".active").data("value");
			selectedMaxLiValue = maxLis.parent().find(".active").data("value");

			if (selectedMaxLiValue !== null) {
				minLis.parent().find("li[data-value='" + selectedMaxLiValue + "']").nextAll().addClass("inactive");
			}

			if (selectedMinLiValue !== null) {
				maxLis.parent().find("li[data-value='" + selectedMinLiValue + "']").prevAll().addClass("inactive");
			}
		},

		_bindControls: function () {
			this.elements.container.find(".reset").click($.proxy(function (e) {
				this.settings.onReset.call(this, e);
			}, this));

			this.elements.container.find(".apply").click($.proxy(function (e) {
				this.settings.onApply.call(this, e);
			}), this);
		},

		_bindSingle: function () {
			var self = this,
			    li,
			    value,
			    control;

			this.elements.container.find("li").click(function (e) {
				e.preventDefault();
				li = $(this);
				value = li.data("value");
				control = $("#" + li.parent().data("control"));

				if (self.elements.multi) {
					self._toggleValue(control, value, !li.hasClass("active"), li);
				} else {
					if (li.hasClass("active")) {
						self._resetControl(control, li);
					} else if (!li.hasClass("inactive")) {
						if (self.elements.min) {
							self.setMin(value);
						} else if (self.elements.max) {
							self.setMax(value);
						}
					}
				}

				return false;
			});
		},

		_bindMultiple: function () {
			var self = this,
			    li,
			    value,
			    control;

			this.elements.container.find("li").click(function (e) {
				e.preventDefault();
				li = $(this);
				value = li.data("value");
				control = $("#" + li.parent().data("control"));

				if (li.hasClass("active")) {
					self._resetControl(control, li);
				} else if (!li.hasClass("inactive")) {
					if (li.parent().hasClass("min")) {
						self.setMin(value);
					} else {
						self.setMax(value);
					}
				}

				return false;
			});
		}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[name] = function (options) {
		this.each(function () {
			if (!$.data(this, "plugin_" + name)) {
				$.data(this, "plugin_" + name, new RangeSelect(this, options));
			}
		});

		return this;
	};

})(jQuery, window, document);/*!** End file: jquery.rangeselect.js ***/
/*!** Begin file: trafikfonden_tracker.js ***/
/*

	Homebrewn Event Tracker (HET) for Google Analytics and Schibsted Trafikfonden.


		# TECHNICAL MUMBO JUMBO:	This script will add an onClick event listener to the BODY and to every BODY of every accessable iframe.
						When a click occur, the script will look and see if there are any tracking tags associated with the
						refferrer element, and all of its parent elements - bubbling to the top of the document.
						If there is, the script will modify the URL (if it's an anchor tag) and apply all of the necessary ugly
						details that you don't want to know about.

						Anchor tags that doesn't open in new tabs will be modified to a delay of 150 ms - enough time to send
						your Google Analytics requests - and then, change the document.location to the desired URL (and modify
						THAT URL, if it has any XITI tags associated with it).


		# DEPENDENCIES:		- inception.js - http://www.github.com/mcsquare/inception.js - (if you don't wanna use inception.js - just rewrite the code as a stand alone object.)
					- jQuery - http://www.jquery.com - (if you don't wanna use jQuery, write an own selector based framework.)



		# USABLE DATA ATTRIBUTES:

		- data-tracker			: (string) set to "enabled" if active.
		- data-tracker-link		: (string) url to target site (this isn't needed if the element is an anchor tag)
		- data-tracker-ga-category	: (string) tracking category.
		- data-tracker-ga-label		: (string) tracking label.
		- data-tracker-tf-tag		: (string) tf xtor tag
		- data-tracker-tf-category	: (string) tracking category.
		- data-tracker-tf-label		: (string) tracking label.
		- data-tracker-tf-sender	: (string) tracking sender.
		- data-tracker-tf-receiver	: (string) tracking receiver.
		- data-tracker-tf-xts		: (int) xiti xts id.
		- data-tracker-tf-id		: (int) xiti domain id.
		- data-tracker-tf-format	: (string) tracking format
		- data-tracker-tf-uid		: (int) unique integration id


		# PRO TIP #1:	If you use this for "Trafikfonden", please use it with an XTS-number and
				an ID - this forces the script to funnel the traffic through XITI (with	a 302
				to your target site) instead of applying ugly hash tags to the destination URL.


		# Below are some totally random examples:

		-	<a href="http://www.theoatmeal.com/"
				data-tracker="enabled"
				data-tracker-tf-tag="AD-500-[othersite.com]-[Label]-[Category]-[yoursite.com]-[]-[]"
			>Click me!</a>

		-	<a href="http://www.theoatmeal.com/"
				data-tracker="enabled"
				data-tracker-tf-id="189"
				data-tracker-tf-xts="142930493"
				data-tracker-tf-tag="AD-500-[othersite.com]-[]-[]-[yoursite.com]-[]-[]"
				data-tracker-tf-label="Label"
				data-tracker-tf-category="Category"
			>Click me!</a>

		-	<a href="http://www.theoatmeal.com/"
				data-tracker="enabled"
				data-tracker-tf-receiver="othersite.com"
				data-tracker-tf-label="Label"
				data-tracker-tf-category="Category"
			>Click me!</a>

		-	<div
				data-tracker="enabled"
				data-tracker-ga-category="Category"
				data-tracker-ga-label="Label"
			>Click me!</a>


		# PRO TIP #2:	Use a separate script to apply all these data values instead of putting them
				directly on the desired object. It will make it more neat, and you will have
				only ONE place from where you edit your tags.


	- Filip Moberg
*/
/*
	Blocket modifications

	- Renamed all klart references to blocket.
	- Changed sender and domain to blocket.
	- data-tracker-tf-id now wants logc89 instead of just 89. As we discovered that sometime the id is logi89 etc.
	- Removed all GA code. As we do not use GA.
	- Remove data-tracker-tf-enabled, we use a bconf named xiti_tf_tracker.enabled instead to globally turn on and off this script.
	- The event listner is added to all "a" tags instead of the body. The reason for this is to fix the problem  where an "a" element contains child elements. e.g. <a><img /></a> 

	// Andreas Ahlund & Emil Bryggare

*/


blocket("@tracker").extend({

	settings: {
		sender: "blocket",
		domain: "blocket.se"
	},

	validate: {

		state: function(o) {

			if (!o.state.recurse && o.elem.tagName.toLowerCase() === "a") {
				return true;
			}

			return false;
		},

		link: function(o) {

			if (o.link) {
				return o.link;
			}

			if ($(o.elem).attr("data-tracker-link")) {
				return $(o.elem).attr("data-tracker-link");
			}

			return "";
		},


		tf: {
			tag: function(o) {

				var xtor, tag, x, data = {};

				if ($(o.elem).attr("data-tracker-tf-tag")) {

					xtor = $(o.elem).attr("data-tracker-tf-tag").split("[");

					for (x in xtor) {

						xtor[x] = xtor[x].replace("]-", "");

						switch (x) {
							case "1":
								tag = "receiver";
								break;
							case "2":
								tag = "label";
								break;
							case "3":
								tag = "category";
								break;
							case "4":
								tag = "sender";
								break;
							default:
								tag = "";
								break;
						}

						if (tag) {
							if (xtor[x]) {
								data[tag] = xtor[x];
							}
						}
					}

					return data;
				}

				return "";
			},

			category: function(o) {

				if ($(o.elem).attr("data-tracker-tf-category")) {
					return $(o.elem).attr("data-tracker-tf-category");
				}

				validator = this.tag(o)["category"];
				if (validator) {
					return validator;
				}

				return "";
			},

			label: function(o) {

				if ($(o.elem).attr("data-tracker-tf-label")) {
					return $(o.elem).attr("data-tracker-tf-label");
				}

				validator = this.tag(o)["label"];
				if (validator) {
					return validator;
				}

				return "";
			},

			receiver: function(o) {

				if ($(o.elem).attr("data-tracker-tf-receiver")) {
					return $(o.elem).attr("data-tracker-tf-receiver");
				}

				validator = this.tag(o)["receiver"];
				if (validator) {
					return validator;
				}

				return "";
			},

			sender: function(o) {

				if ($(o.elem).attr("data-tracker-tf-sender")) {
					return $(o.elem).attr("data-tracker-tf-sender");
				}

				validator = this.tag(o)["sender"];
				if (validator) {
					return validator;
				}

				return blocket.tracker.settings.sender;
			},

			id: function(o) {

				if ($(o.elem).attr("data-tracker-tf-id")) {
					return $(o.elem).attr("data-tracker-tf-id");
				}

				return "";
			},

			xts: function(o) {

				if ($(o.elem).attr("data-tracker-tf-xts")) {
					return $(o.elem).attr("data-tracker-tf-xts");
				}

				return "";
			},

			// New format and UID 2014-01-29
			format: function(o) {

				if ($(o.elem).attr("data-tracker-tf-format")) {
					return $(o.elem).attr("data-tracker-tf-format");
				}

				return "";
			},

			uid: function(o) {

				if ($(o.elem).attr("data-tracker-tf-uid")) {
					return $(o.elem).attr("data-tracker-tf-uid");
				}

				return "";
			}
		}
	},

	recurse: function(o) {

		var state;

		if (o.target != o.doc) {

			state = {target: o.target.parentNode, win: o.win, doc: o.doc, link: o.link};

			if (xiti_trafikfonden_tracker_enabled === "1") {

				if (o.target.href) {
					state.link = o.target.href;
				}

				return this.trackme({elem: o.target, link: o.target.href, state: state});
			}
		}
	},

	onReady: function() {

		var that = this;

		// Set click event on body, checking every target for a valid tag.
		$("a").click(function(e) {
			//If no tf tracker attribute is set; do nothing. Otherwise Ajax will not work.
			if (typeof $(this).attr('data-tracker-tf-id') !== 'undefined') {
				return that.recurse({target: this, win: window, doc: document});
			}
		});
	},

	// This function either can be called directly, or summoned by declaring a data attribute called "tracker=enabled" on target object
	trackme: function(o) {

		var	validator,
			that = this;

		o.tf = {};


		// Link
		o.link = this.validate.link(o);

		// TF Category
		o.tf.category = this.validate.tf.category(o);

		// TF Label
		o.tf.label = this.validate.tf.label(o);

		// TF Sender
		o.tf.sender = this.validate.tf.sender(o);

		// TF Receiver
		o.tf.receiver = this.validate.tf.receiver(o);

		// TF ID
		o.tf.id = this.validate.tf.id(o);

		// TF XTS
		o.tf.xts = this.validate.tf.xts(o);

		// TF Format
		o.tf.format = this.validate.tf.format(o);

		// TF UID
		o.tf.uid = this.validate.tf.uid(o);

		// Only send data to XITI if element is an anchor tag, and if we're in a valid state.
		if (this.validate.state(o)) {

			// Save original url before modifying it
			if (!$(o.elem).attr("data-tracker-tf-url")) {
				$(o.elem).attr("data-tracker-tf-url", o.link);
			}

			// XITI Campaign data
			o.xtor = "AD-500-[" + o.tf.receiver + "]-[" + o.tf.label + "]-[" + o.tf.format + "]-[" + o.tf.sender + "]-[" + o.tf.category + "]-[" + o.tf.uid  + "]";

			// Use XITI Redirect method if applicable
			if (this.validate.tf.xts(o) && this.validate.tf.id(o) && this.validate.tf.category(o) && this.validate.tf.receiver(o)) {

				o.link = "http://" + o.tf.id + ".xiti.com/go.url?xts=" + o.tf.xts + "&xtor=" + o.xtor + "&url=" + o.link;

			// Use XITI HASH method as a last resort (if applicable)
			} else if (this.validate.tf.tag(o) || (this.validate.tf.category(o) && this.validate.tf.receiver(o))) {

				o.link += "#xtor=" + o.xtor;
			}

			// Set HREF to new URL 
			$(o.elem).attr("href", o.link);

			// Restore HREF to original URL
			setTimeout(function() {
				$(o.elem).attr("href", $(o.elem).attr("data-tracker-tf-url"));
			}, 1000);
		}


		// If referer element is an anchor tag, open it accordingly
		if (this.validate.state(o)) {

			if (!$(o.elem).attr("target")) {

				setTimeout(function() {

					document.location = o.link;

				}, 150);

				return false;
			}

			// If we reach this line, the link will be returned as usual.
		}
	}
});
/*!** End file: trafikfonden_tracker.js ***/
/*!** End bostad_thirdparty_lite.js package ***/
