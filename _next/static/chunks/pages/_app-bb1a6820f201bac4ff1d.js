_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/KGT":function(e,t,n){},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"4l1m":function(e,t,n){},Do4B:function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},"HP2+":function(e,t,n){},IlR1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ye}));var r={};n.r(r),n.d(r,"addTrackers",(function(){return $})),n.d(r,"initialize",(function(){return X})),n.d(r,"ga",(function(){return Z})),n.d(r,"set",(function(){return Q})),n.d(r,"send",(function(){return W})),n.d(r,"pageview",(function(){return Y})),n.d(r,"modalview",(function(){return ee})),n.d(r,"timing",(function(){return te})),n.d(r,"event",(function(){return ne})),n.d(r,"exception",(function(){return re})),n.d(r,"plugin",(function(){return oe})),n.d(r,"outboundLink",(function(){return ie})),n.d(r,"testModeAPI",(function(){return ae})),n.d(r,"default",(function(){return ce}));var o=n("q1tI"),i=n.n(o),a=n("nOHt"),c=n.n(a),u=n("17x9"),l=n.n(u);function f(e){console.warn("[react-ga]",e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o=m(a);function a(){var e;y(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return j(O(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f="_blank"!==r,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),a.trackLink(l,(function(){window.location.href=i}),u)):a.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=g(g({},b(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return"_blank"===n&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,i.a.createElement("a",r)}}])&&d(t.prototype,n),r&&d(t,r),a}(o.Component);j(k,"trackLink",(function(){f("ga tracking not enabled")})),k.propTypes={eventLabel:l.a.string.isRequired,target:l.a.string,to:l.a.string,onClick:l.a.func,trackerNames:l.a.arrayOf(l.a.string)},k.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function P(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(f("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function A(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var S=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function E(e){return A(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(S)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var x=!1;function T(e){console.info("[react-ga]",e)}var D=[],N={calls:D,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];D.push([].concat(t))},resetCalls:function(){D.length=0}};function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G="undefined"===typeof window||"undefined"===typeof document,J=!1,z=!0,K=!1,B=!0,H=!0,M=function(){var e;return K?N.ga.apply(N,arguments):!G&&(window.ga?(e=window).ga.apply(e,arguments):f("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function F(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=E(e)),t&&(n=P(n)),n}(e,z,H)}function U(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!B&&Array.isArray(e)||M.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){M.apply(void 0,I(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):f("ga command must be a string")}function V(e,t){e?t&&(t.debug&&!0===t.debug&&(J=!0),!1===t.titleCase&&(z=!1),!1===t.redactEmail&&(H=!1),t.useExistingGa)||(t&&t.gaOptions?M("create",e,t.gaOptions):M("create",e,"auto")):f("gaTrackingID is required in initialize()")}function $(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===L(e)?V(e.trackingId,e):f("All configs must be an object")})):V(e,t),!0}function X(e,t){if(t&&!0===t.testMode)K=!0;else{if(G)return;t&&!0===t.standardImplementation||function(e){if(!x){x=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,i,a,c,u,l=e&&e.onerror;n=window,r=document,o="script",i=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}B=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,$(e,t)}function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(M.apply(void 0,t),J&&(T("called ga('arguments');"),T("with arguments: ".concat(JSON.stringify(t))))),window.ga}function Q(e,t){e?"object"===L(e)?(0===Object.keys(e).length&&f("empty `fieldsObject` given to .set()"),U(t,"set",e),J&&(T("called ga('set', fieldsObject);"),T("with fieldsObject: ".concat(JSON.stringify(e))))):f("Expected `fieldsObject` arg to be an Object"):f("`fieldsObject` is required in .set()")}function W(e,t){U(t,"send",e),J&&(T("called ga('send', fieldObject);"),T("with fieldObject: ".concat(JSON.stringify(e))),T("with trackers: ".concat(JSON.stringify(t))))}function Y(e,t,n){if(e){var r=A(e);if(""!==r){var o={};if(n&&(o.title=n),U(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),J){T("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),T("with path: ".concat(r).concat(i))}}else f("path cannot be an empty string in .pageview()")}else f("path is required in .pageview()")}function ee(e,t){if(e){var n,r="/"===(n=A(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);U(t,"send","pageview",o),J&&(T("called ga('send', 'pageview', path);"),T("with path: ".concat(o)))}else f("modalName cannot be an empty string or a single / in .modalview()")}else f("modalName is required in .modalview(modalName)")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var a={hitType:"timing",timingCategory:F(t),timingVar:F(n),timingValue:r};o&&(a.timingLabel=F(o)),W(a,i)}else f("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=C(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:F(t),eventAction:F(n)};r&&(l.eventLabel=F(r)),"undefined"!==typeof o&&("number"!==typeof o?f("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?f("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?f("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&f("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),W(l,u)}else f("args.category AND args.action are required in event()")}function re(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=F(n)),"undefined"!==typeof r&&("boolean"!==typeof r?f("`args.fatal` must be a boolean."):o.exFatal=r),W(o,t)}var oe={require:function(e,t,n){if(e){var r=A(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==L(t))return void f("Expected `options` arg to be an Object");0===Object.keys(t).length&&f("Empty `options` given to .require()"),Z(o,r,t),J&&T("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Z(o,r),J&&T("called ga('require', '".concat(r,"');"))}else f("`name` cannot be an empty string in .require()")}else f("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!==typeof e)f("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)f("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(Z(c,r,n),J&&(T("called ga('".concat(c,"');")),T('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Z(c,n),J&&(T("called ga('".concat(c,"');")),T("with payload: ".concat(JSON.stringify(n))))):(Z(c),J&&T("called ga('".concat(c,"');")))}}};function ie(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:F(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},W(r,n)}else f("args.label is required in outboundLink()");else f("hitCallback function is required")}var ae=N,ce={initialize:X,ga:Z,set:Q,send:W,pageview:Y,modalview:ee,timing:te,event:ne,exception:re,plugin:oe,outboundLink:ie,testModeAPI:N};function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k.origTrackLink=k.trackLink,k.trackLink=ie;var se=k,pe=le(le({},r),{},{OutboundLink:se}),ge=function(){console.log("Logging pageview for ".concat(window.location.pathname)),pe.set({page:window.location.pathname}),pe.pageview(window.location.pathname)},be=(n("/KGT"),n("HP2+"),n("4l1m"),n("Do4B"),i.a.createElement);function ye(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){console.log("GA init"),pe.initialize("UA-xxxxxxxxx-1"),ge(),c.a.events.on("routeChangeComplete",ge)}),[]),be(t,n)}}},[[0,0,2,1]]]);