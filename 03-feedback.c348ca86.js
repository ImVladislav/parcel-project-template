!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n="feedback-form-state",r={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function b(e){return c=e,f=setTimeout(O,t),s?m(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=y();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?m(e):(r=i=void 0,a)}function w(){var e=y(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return b(l);if(d)return f=setTimeout(O,t),m(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=T(t)||0,S(n)&&(s=!!n.leading,u=(d="maxWait"in n)?g(T(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function S(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=f.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return S(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j,O,h=document.querySelector(".feedback-form"),w=document.querySelector("input"),x=document.querySelector("textarea");h.addEventListener("submit",(function(e){e.preventDefault();var t={email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value};console.log("onFormSubmit : formData",t),e.currentTarget.reset(),localStorage.removeItem(n)})),h.addEventListener("input",r((function(e){var t=w.value,r=x.value,i={email:t,message:r};localStorage.setItem(n,JSON.stringify(i))}),500)),j=localStorage.getItem(n),(O=JSON.parse(j))&&(w.value=O.email,x.value=O.message)}();
//# sourceMappingURL=03-feedback.c348ca86.js.map
