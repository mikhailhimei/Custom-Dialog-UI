var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __commonJS=(cb,mod)=>function(){return mod||(0,cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));var require_react_production_min=__commonJS({"node_modules/react/cjs/react.production.min.js"(exports){"use strict";var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){return a===null||typeof a!="object"?null:(a=z&&a[z]||a["@@iterator"],typeof a=="function"?a:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a,this.context=b,this.refs=D,this.updater=e||B}var H=G.prototype=new F;H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function M(a,b,e){var d,c={},k=null,h=null;if(b!=null)for(d in b.ref!==void 0&&(h=b.ref),b.key!==void 0&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(g===1)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)c[d]===void 0&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return typeof a=="object"&&a!==null&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a2){return b[a2]})}var P=/\/+/g;function Q(a,b){return typeof a=="object"&&a!==null&&a.key!=null?escape(""+a.key):b.toString(36)}function R(a,b,e,d,c){var k=typeof a;(k==="undefined"||k==="boolean")&&(a=null);var h=!1;if(a===null)h=!0;else switch(k){case"string":case"number":h=!0;break;case"object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=d===""?"."+Q(h,0):d,I(c)?(e="",a!=null&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a2){return a2})):c!=null&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;if(h=0,d=d===""?".":d+":",I(a))for(var g=0;g<a.length;g++){k=a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),typeof f=="function")for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if(k==="object")throw b=String(a),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function S(a,b,e){if(a==null)return a;var d=[],c=0;return R(a,d,"","",function(a2){return b.call(e,a2,c++)}),d}function T(a){if(a._status===-1){var b=a._result;b=b(),b.then(function(b2){(a._status===0||a._status===-1)&&(a._status=1,a._result=b2)},function(b2){(a._status===0||a._status===-1)&&(a._status=2,a._result=b2)}),a._status===-1&&(a._status=0,a._result=b)}if(a._status===1)return a._result.default;throw a._result}var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.")}exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;return S(a,function(){b++}),b},toArray:function(a){return S(a,function(a2){return a2})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;exports.cloneElement=function(a,b,e){if(a==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(b!=null){if(b.ref!==void 0&&(k=b.ref,h=K.current),b.key!==void 0&&(c=""+b.key),a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=b[f]===void 0&&g!==void 0?g[f]:b[f])}var f=arguments.length-2;if(f===1)d.children=e;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){return a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},a.Provider={$$typeof:t,_context:a},a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);return b.type=a,b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:b===void 0?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1"}});var require_react=__commonJS({"node_modules/react/index.js"(exports,module){"use strict";module.exports=require_react_production_min()}});var require_scheduler_production_min=__commonJS({"node_modules/scheduler/cjs/scheduler.production.min.js"(exports){"use strict";function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return a.length===0?null:a[0]}function k(a){if(a.length===0)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}function g(a,b){var c=a.sortIndex-b.sortIndex;return c!==0?c:a.id-b.id}typeof performance=="object"&&typeof performance.now=="function"?(l=performance,exports.unstable_now=function(){return l.now()}):(p=Date,q=p.now(),exports.unstable_now=function(){return p.now()-q});var l,p,q,r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);b!==null;){if(b.callback===null)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){if(B=!1,G(a),!A)if(h(r)!==null)A=!0,I(J);else{var b=h(t);b!==null&&K(H,b.startTime-a)}}function J(a,b){A=!1,B&&(B=!1,E(L),L=-1),z=!0;var c=y;try{for(G(b),v=h(r);v!==null&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if(typeof d=="function"){v.callback=null,y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now(),typeof e=="function"?v.callback=e:v===h(r)&&k(r),G(b)}else k(r);v=h(r)}if(v!==null)var w=!0;else{var m=h(t);m!==null&&K(H,m.startTime-b),w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;function M(){return!(exports.unstable_now()-Q<P)}function R(){if(O!==null){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;typeof F=="function"?S=function(){F(R)}:typeof MessageChannel<"u"?(T=new MessageChannel,U=T.port2,T.port1.onmessage=R,S=function(){U.postMessage(null)}):S=function(){D(R,0)};var T,U;function I(a){O=a,N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1e3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?d+c:d):c=d,a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1e4;break;default:e=5e3}return e=c+e,a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1},c>d?(a.sortIndex=c,f(t,a),h(r)===null&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J))),a};exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}}}});var require_scheduler=__commonJS({"node_modules/scheduler/index.js"(exports,module){"use strict";module.exports=require_scheduler_production_min()}});var require_react_dom_production_min=__commonJS({"node_modules/react-dom/cjs/react-dom.production.min.js"(exports){"use strict";var aa=require_react(),ca=require_scheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b),ha(a+"Capture",b)}function ha(a,b){for(ea[a]=b,a=0;a<b.length;a++)da.add(b[a])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(a){return ja.call(ma,a)?!0:ja.call(la,a)?!1:ka.test(a)?ma[a]=!0:(la[a]=!0,!1)}function pa(a,b,c,d){if(c!==null&&c.type===0)return!1;switch(typeof b){case"function":case"symbol":return!0;case"boolean":return d?!1:c!==null?!c.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function qa(a,b,c,d){if(b===null||typeof b>"u"||pa(a,b,c,d))return!0;if(d)return!1;if(c!==null)switch(c.type){case 3:return!b;case 4:return b===!1;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=b===2||b===3||b===4,this.attributeName=d,this.attributeNamespace=e,this.mustUseProperty=c,this.propertyName=a,this.type=b,this.sanitizeURL=f,this.removeEmptyString=g}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;(e!==null?e.type!==0:d||!(2<b.length)||b[0]!=="o"&&b[0]!=="O"||b[1]!=="n"&&b[1]!=="N")&&(qa(b,c,e,d)&&(c=null),d||e===null?oa(b)&&(c===null?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=c===null?e.type===3?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,c===null?a.removeAttribute(b):(e=e.type,c=e===3||e===4&&c===!0?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){return a===null||typeof a!="object"?null:(a=Ja&&a[Ja]||a["@@iterator"],typeof a=="function"?a:null)}var A=Object.assign,La;function Ma(a){if(La===void 0)try{throw Error()}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return`
`+La+a}var Na=!1;function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error()},Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error()}catch(l){d=l}a()}}catch(l){if(l&&d&&typeof l.stack=="string"){for(var e=l.stack.split(`
`),f=d.stack.split(`
`),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(g!==1||h!==1)do if(g--,h--,0>h||e[g]!==f[h]){var k=`
`+e[g].replace(" at new "," at ");return a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName)),k}while(1<=g&&0<=h);break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}function Qa(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;return a=a.displayName,a||(a=b.displayName||b.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case Ga:return b=a.displayName||null,b!==null?b:Qa(a.type)||"Memo";case Ha:b=a._payload,a=a._init;try{return Qa(a(b))}catch{}}return null}function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof b=="function")return b.displayName||b.name||null;if(typeof b=="string")return b}return null}function Sa(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(b==="checkbox"||b==="radio")}function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var e=c.get,f=c.set;return Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a2){d=""+a2,f.call(this,a2)}}),Object.defineProperty(a,b,{enumerable:c.enumerable}),{getValue:function(){return d},setValue:function(a2){d=""+a2},stopTracking:function(){a._valueTracker=null,delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue(),d="";return a&&(d=Ta(a)?a.checked?"true":"false":a.value),a=d,a!==c?(b.setValue(a),!0):!1}function Xa(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??a._wrapperState.initialChecked})}function Za(a,b){var c=b.defaultValue==null?"":b.defaultValue,d=b.checked!=null?b.checked:b.defaultChecked;c=Sa(b.value!=null?b.value:c),a._wrapperState={initialChecked:d,initialValue:c,controlled:b.type==="checkbox"||b.type==="radio"?b.checked!=null:b.value!=null}}function ab(a,b){b=b.checked,b!=null&&ta(a,"checked",b,!1)}function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(c!=null)d==="number"?(c===0&&a.value===""||a.value!=c)&&(a.value=""+c):a.value!==""+c&&(a.value=""+c);else if(d==="submit"||d==="reset"){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue)),b.checked==null&&b.defaultChecked!=null&&(a.defaultChecked=!!b.defaultChecked)}function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!(d!=="submit"&&d!=="reset"||b.value!==void 0&&b.value!==null))return;b=""+a._wrapperState.initialValue,c||b===a.value||(a.value=b),a.defaultValue=b}c=a.name,c!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,c!==""&&(a.name=c)}function cb(a,b,c){(b!=="number"||Xa(a.ownerDocument)!==a)&&(c==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c))}var eb=Array.isArray;function fb(a,b,c,d){if(a=a.options,b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{for(c=""+Sa(c),b=null,e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0,d&&(a[e].defaultSelected=!0);return}b!==null||a[e].disabled||(b=a[e])}b!==null&&(b.selected=!0)}}function gb(a,b){if(b.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(c==null){if(c=b.children,b=b.defaultValue,c!=null){if(b!=null)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}b==null&&(b=""),c=b}a._wrapperState={initialValue:Sa(c)}}function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);c!=null&&(c=""+c,c!==a.value&&(a.value=c),b.defaultValue==null&&a.defaultValue!==c&&(a.defaultValue=c)),d!=null&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&b!==""&&b!==null&&(a.value=b)}function kb(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(a,b){return a==null||a==="http://www.w3.org/1999/xhtml"?kb(b):a==="http://www.w3.org/2000/svg"&&b==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var mb,nb=(function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a})(function(a,b){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=b;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>",b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&c.nodeType===3){c.nodeValue=b;return}}a.textContent=b}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1),pb[b]=pb[a]})});function rb(a,b,c){return b==null||typeof b=="boolean"||b===""?"":c||typeof b!="number"||b===0||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=c.indexOf("--")===0,e=rb(c,b[c],d);c==="float"&&(c="cssFloat"),d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(a,b){if(b){if(tb[a]&&(b.children!=null||b.dangerouslySetInnerHTML!=null))throw Error(p(137,a));if(b.dangerouslySetInnerHTML!=null){if(b.children!=null)throw Error(p(60));if(typeof b.dangerouslySetInnerHTML!="object"||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61))}if(b.style!=null&&typeof b.style!="object")throw Error(p(62))}}function vb(a,b){if(a.indexOf("-")===-1)return typeof b.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var yb=null,zb=null,Ab=null;function Bb(a){if(a=Cb(a)){if(typeof yb!="function")throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;if(Ab=zb=null,Bb(a),b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(a,b){var c=a.stateNode;if(c===null)return null;var d=Db(c);if(d===null)return null;c=d[b];a:switch(b){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(a=a.type,d=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!d;break a;default:a=!1}if(a)return null;if(c&&typeof c!="function")throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{Mb={},Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}var Mb;function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0,Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(a,b,c,d,e,f,g,h,k){if(Tb.apply(this,arguments),Ob){if(Ob){var l=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,(b.flags&4098)!==0&&(c=b.return),a=b.return;while(a)}return b.tag===3?c:null}function Wb(a){if(a.tag===13){var b=a.memoizedState;if(b===null&&(a=a.alternate,a!==null&&(b=a.memoizedState)),b!==null)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188))}function Yb(a){var b=a.alternate;if(!b){if(b=Vb(a),b===null)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(e===null)break;var f=e.alternate;if(f===null){if(d=e.return,d!==null){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188))}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0,c=e,d=f;break}if(h===d){g=!0,d=e,c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0,c=f,d=e;break}if(h===d){g=!0,d=f,c=e;break}h=h.sibling}if(!g)throw Error(p(189))}}if(c.alternate!==d)throw Error(p(190))}if(c.tag!==3)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){return a=Yb(a),a!==null?$b(a):null}function $b(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var b=$b(a);if(b!==null)return b;a=a.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,a,void 0,(a.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){return a>>>=0,a===0?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function uc(a,b){var c=a.pendingLanes;if(c===0)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(g!==0){var h=g&~e;h!==0?d=tc(h):(f&=g,f!==0&&(d=tc(f)))}else g=c&~e,g!==0?d=tc(g):f!==0&&(d=tc(f));if(d===0)return 0;if(b!==0&&b!==d&&(b&e)===0&&(e=d&-d,f=b&-b,e>=f||e===16&&(f&4194240)!==0))return b;if((d&4)!==0&&(d|=c&16),b=a.entangledLanes,b!==0)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];k===-1?((h&c)===0||(h&d)!==0)&&(e[g]=vc(h,b)):k<=b&&(a.expiredLanes|=h),f&=~h}}function xc(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function yc(){var a=rc;return rc<<=1,(rc&4194240)===0&&(rc=64),a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}function Ac(a,b,c){a.pendingLanes|=b,b!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,b=31-oc(b),a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=b,a.mutableReadLanes&=b,a.entangledLanes&=b,b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0,d[e]=-1,a[e]=-1,c&=~f}}function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b),c&=~e}}var C=0;function Dc(a){return a&=-a,1<a?4<a?(a&268435455)!==0?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(a,b){switch(a){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(b.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(b.pointerId)}}function Tc(a,b,c,d,e,f){return a===null||a.nativeEvent!==f?(a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},b!==null&&(b=Cb(b),b!==null&&Fc(b)),a):(a.eventSystemFlags|=d,b=a.targetContainers,e!==null&&b.indexOf(e)===-1&&b.push(e),a)}function Uc(a,b,c,d,e){switch(b){case"focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case"dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case"mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case"pointerover":var f=e.pointerId;return Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e)),!0;case"gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}function Vc(a){var b=Wc(a.target);if(b!==null){var c=Vb(b);if(c!==null){if(b=c.tag,b===13){if(b=Wb(c),b!==null){a.blockedOn=b,Ic(a.priority,function(){Gc(c)});return}}else if(b===3&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Xc(a){if(a.blockedOn!==null)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(c===null){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d,c.target.dispatchEvent(d),wb=null}else return b=Cb(c),b!==null&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(a){function b(b2){return ad(b2,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}for(Lc!==null&&ad(Lc,a),Mc!==null&&ad(Mc,a),Nc!==null&&ad(Nc,a),Oc.forEach(b),Pc.forEach(b),c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],c.blockedOn===null);)Vc(c),c.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(e===null)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;e!==null;){var f=Cb(e);if(f!==null&&Ec(f),f=Yc(a,b,c,d),f===null&&hd(a,b,d,id,c),f===e)break;e=f}e!==null&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;function Yc(a,b,c,d){if(id=null,a=xb(d),a=Wc(a),a!==null)if(b=Vb(a),b===null)a=null;else if(c=b.tag,c===13){if(a=Wb(b),a!==null)return a;a=null}else if(c===3){if(b.stateNode.current.memoizedState.isDehydrated)return b.tag===3?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);return id=a,null}function jd(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&b===13&&(a=13)):a=b,a===10&&(a=13),32<=a||a===13?a:0}function pd(){return!0}function qd(){return!1}function rd(a){function b(b2,d,e,f,g){this._reactName=b2,this._targetInst=e,this.type=d,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b2=a[c],this[c]=b2?b2(f):f[c]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a2=this.nativeEvent;a2&&(a2.preventDefault?a2.preventDefault():typeof a2.returnValue!="unknown"&&(a2.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a2=this.nativeEvent;a2&&(a2.stopPropagation?a2.stopPropagation():typeof a2.cancelBubble!="unknown"&&(a2.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),b}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==yd&&(yd&&a.type==="mousemove"?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a),wd)},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if(b!=="Unidentified")return b}return a.type==="keypress"?(a=od(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return a.type==="keypress"?od(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?od(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=" ",fe=!1;function ge(a,b){switch(a){case"keyup":return $d.indexOf(b.keyCode)!==-1;case"keydown":return b.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case"compositionend":return he(b);case"keypress":return b.which!==32?null:(fe=!0,ee);case"textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}function ke(a,b){if(ie)return a==="compositionend"||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case"compositionend":return de&&b.locale!=="ko"?null:b.data;default:return null}}var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b==="input"?!!le[a.type]:b==="textarea"}function ne(a,b,c,d){Eb(d),b=oe(b,"onChange"),0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}function ve(a,b){if(a==="change")return b}var we=!1;ia&&(ia?(ye="oninput"in document,ye||(ze=document.createElement("div"),ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"),xe=ye):xe=!1,we=xe&&(!document.documentMode||9<document.documentMode));var xe,ye,ze;function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if(a.propertyName==="value"&&te(qe)){var b=[];ne(b,qe,a,xb(a)),Jb(re,b)}}function Ce(a,b,c){a==="focusin"?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):a==="focusout"&&Ae()}function De(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return te(qe)}function Ee(a,b){if(a==="click")return te(b)}function Fe(a,b){if(a==="input"||a==="change")return te(b)}function Ge(a,b){return a===b&&(a!==0||1/a===1/b)||a!==a&&b!==b}var He=typeof Object.is=="function"?Object.is:Ge;function Ie(a,b){if(He(a,b))return!0;if(typeof a!="object"||a===null||typeof b!="object"||b===null)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(c.nodeType===3){if(d=a+c.textContent.length,a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&a.nodeType===3?!1:b&&b.nodeType===3?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c=typeof b.contentWindow.location.href=="string"}catch{c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&(b==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||b==="textarea"||a.contentEditable==="true")}function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(d!==null&&Ne(c)){if(b=d.start,a=d.end,a===void 0&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=d.end===void 0?f:Math.min(d.end,e),!a.extend&&f>d&&(e=d,d=f,f=e),e=Ke(c,f);var g=Ke(c,d);e&&g&&(a.rangeCount!==1||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}}for(b=[],a=c;a=a.parentNode;)a.nodeType===1&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(a,b,c){var d=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Te||Qe==null||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}function Ve(a,b){var c={};return c[a.toLowerCase()]=b.toLowerCase(),c["Webkit"+a]="webkit"+b,c["Moz"+a]="moz"+b,c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(a,b){df.set(a,b),fa(b,[a])}for(gf=0;gf<ef.length;gf++)hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1),ff(jf,"on"+kf);var hf,jf,kf,gf;ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c,Ub(d,b,void 0,a),a.currentTarget=null}function se(a,b){b=(b&4)!==0;for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;if(h=h.listener,k!==f&&e.isPropagationStopped())break a;nf(e,h,l),f=k}else for(g=0;g<d.length;g++){if(h=d[g],k=h.instance,l=h.currentTarget,h=h.listener,k!==f&&e.isPropagationStopped())break a;nf(e,h,l),f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a}function D(a,b){var c=b[of];c===void 0&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4),pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0,da.forEach(function(b2){b2!=="selectionchange"&&(mf.has(b2)||qf(b2,!1,a),qf(b2,!0,a))});var b=a.nodeType===9?a:a.ownerDocument;b===null||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a),e=void 0,!Lb||b!=="touchstart"&&b!=="touchmove"&&b!=="wheel"||(e=!0),d?e!==void 0?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):e!==void 0?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}function hd(a,b,c,d,e){var f=d;if((b&1)===0&&(b&2)===0&&d!==null)a:for(;;){if(d===null)return;var g=d.tag;if(g===3||g===4){var h=d.stateNode.containerInfo;if(h===e||h.nodeType===8&&h.parentNode===e)break;if(g===4)for(g=d.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===e||k.nodeType===8&&k.parentNode===e))return;g=g.return}for(;h!==null;){if(g=Wc(h),g===null)return;if(k=g.tag,k===5||k===6){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d2=f,e2=xb(c),g2=[];a:{var h2=df.get(a);if(h2!==void 0){var k2=td,n=a;switch(a){case"keypress":if(od(c)===0)break a;case"keydown":case"keyup":k2=Rd;break;case"focusin":n="focus",k2=Fd;break;case"focusout":n="blur",k2=Fd;break;case"beforeblur":case"afterblur":k2=Fd;break;case"click":if(c.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k2=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k2=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k2=Vd;break;case $e:case af:case bf:k2=Hd;break;case cf:k2=Xd;break;case"scroll":k2=vd;break;case"wheel":k2=Zd;break;case"copy":case"cut":case"paste":k2=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k2=Td}var t=(b&4)!==0,J=!t&&a==="scroll",x=t?h2!==null?h2+"Capture":null:h2;t=[];for(var w=d2,u;w!==null;){u=w;var F=u.stateNode;if(u.tag===5&&F!==null&&(u=F,x!==null&&(F=Kb(w,x),F!=null&&t.push(tf(w,F,u)))),J)break;w=w.return}0<t.length&&(h2=new k2(h2,n,null,c,e2),g2.push({event:h2,listeners:t}))}}if((b&7)===0){a:{if(h2=a==="mouseover"||a==="pointerover",k2=a==="mouseout"||a==="pointerout",h2&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if((k2||h2)&&(h2=e2.window===e2?e2:(h2=e2.ownerDocument)?h2.defaultView||h2.parentWindow:window,k2?(n=c.relatedTarget||c.toElement,k2=d2,n=n?Wc(n):null,n!==null&&(J=Vb(n),n!==J||n.tag!==5&&n.tag!==6)&&(n=null)):(k2=null,n=d2),k2!==n)){if(t=Bd,F="onMouseLeave",x="onMouseEnter",w="mouse",(a==="pointerout"||a==="pointerover")&&(t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer"),J=k2==null?h2:ue(k2),u=n==null?h2:ue(n),h2=new t(F,w+"leave",k2,c,e2),h2.target=J,h2.relatedTarget=u,F=null,Wc(e2)===d2&&(t=new t(x,w+"enter",n,c,e2),t.target=u,t.relatedTarget=J,F=t),J=F,k2&&n)b:{for(t=k2,x=n,w=0,u=t;u;u=vf(u))w++;for(u=0,F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=vf(x),u--;for(;w--;){if(t===x||x!==null&&t===x.alternate)break b;t=vf(t),x=vf(x)}t=null}else t=null;k2!==null&&wf(g2,h2,k2,t,!1),n!==null&&J!==null&&wf(g2,J,n,t,!0)}}a:{if(h2=d2?ue(d2):window,k2=h2.nodeName&&h2.nodeName.toLowerCase(),k2==="select"||k2==="input"&&h2.type==="file")var na=ve;else if(me(h2))if(we)na=Fe;else{na=De;var xa=Ce}else(k2=h2.nodeName)&&k2.toLowerCase()==="input"&&(h2.type==="checkbox"||h2.type==="radio")&&(na=Ee);if(na&&(na=na(a,d2))){ne(g2,na,c,e2);break a}xa&&xa(a,h2,d2),a==="focusout"&&(xa=h2._wrapperState)&&xa.controlled&&h2.type==="number"&&cb(h2,"number",h2.value)}switch(xa=d2?ue(d2):window,a){case"focusin":(me(xa)||xa.contentEditable==="true")&&(Qe=xa,Re=d2,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(g2,c,e2);break;case"selectionchange":if(Pe)break;case"keydown":case"keyup":Ue(g2,c,e2)}var $a;if(ae)b:{switch(a){case"compositionstart":var ba="onCompositionStart";break b;case"compositionend":ba="onCompositionEnd";break b;case"compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):a==="keydown"&&c.keyCode===229&&(ba="onCompositionStart");ba&&(de&&c.locale!=="ko"&&(ie||ba!=="onCompositionStart"?ba==="onCompositionEnd"&&ie&&($a=nd()):(kd=e2,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d2,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e2),g2.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),$a!==null&&(ba.data=$a)))),($a=ce?je(a,c):ke(a,c))&&(d2=oe(d2,"onBeforeInput"),0<d2.length&&(e2=new Ld("onBeforeInput","beforeinput",null,c,e2),g2.push({event:e2,listeners:d2}),e2.data=$a))}se(g2,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];a!==null;){var e=a,f=e.stateNode;e.tag===5&&f!==null&&(e=f,f=Kb(a,c),f!=null&&d.unshift(tf(a,f,e)),f=Kb(a,b),f!=null&&d.push(tf(a,f,e))),a=a.return}return d}function vf(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function wf(a,b,c,d,e){for(var f=b._reactName,g=[];c!==null&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(k!==null&&k===d)break;h.tag===5&&l!==null&&(h=l,e?(k=Kb(c,f),k!=null&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),k!=null&&g.push(tf(c,k,h)))),c=c.return}g.length!==0&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return(typeof a=="string"?a:""+a).replace(xf,`
`).replace(yf,"")}function Af(a,b,c){if(b=zf(b),zf(a)!==b&&c)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(a,b){return a==="textarea"||a==="noscript"||typeof b.children=="string"||typeof b.children=="number"||typeof b.dangerouslySetInnerHTML=="object"&&b.dangerouslySetInnerHTML!==null&&b.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a})}function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;if(a.removeChild(c),e&&e.nodeType===8)if(c=e.data,c==="/$"){if(d===0){a.removeChild(e),bd(b);return}d--}else c!=="$"&&c!=="$?"&&c!=="$!"||d++;c=e}while(c);bd(b)}function Lf(a){for(;a!=null;a=a.nextSibling){var b=a.nodeType;if(b===1||b===3)break;if(b===8){if(b=a.data,b==="$"||b==="$!"||b==="$?")break;if(b==="/$")return null}}return a}function Mf(a){a=a.previousSibling;for(var b=0;a;){if(a.nodeType===8){var c=a.data;if(c==="$"||c==="$!"||c==="$?"){if(b===0)return a;b--}else c==="/$"&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){if(c=b.alternate,b.child!==null||c!==null&&c.child!==null)for(a=Mf(a);a!==null;){if(c=a[Of])return c;a=Mf(a)}return b}a=c,c=a.parentNode}return null}function Cb(a){return a=a[Of]||a[uf],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function ue(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(p(33))}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++,Sf[Tf]=a.current,a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];return d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e),e}function Zf(a){return a=a.childContextTypes,a!=null}function $f(){E(Wf),E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b),G(Wf,c)}function bg(a,b,c){var d=a.stateNode;if(b=b.childContextTypes,typeof d.getChildContext!="function")return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}function cg(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf,Xf=H.current,G(H,a),G(Wf,Wf.current),!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf),G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){eg===null?eg=[a]:eg.push(a)}function ig(a){fg=!0,hg(a)}function jg(){if(!gg&&eg!==null){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(d!==null)}eg=null,fg=!1}catch(e){throw eg!==null&&(eg=eg.slice(a+1)),ac(fc,jg),e}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng,kg[lg++]=mg,mg=a,ng=b}function ug(a,b,c){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e),c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32),d>>=g,e-=g,rg=1<<32-oc(b)+e|c<<e|d,sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){a.return!==null&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED",c.stateNode=b,c.return=a,b=a.deletions,b===null?(a.deletions=[c],a.flags|=16):b.push(c)}function Cg(a,b){switch(a.tag){case 5:var c=a.type;return b=b.nodeType!==1||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b,b!==null?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=a.pendingProps===""||b.nodeType!==3?null:b,b!==null?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=b.nodeType!==8?null:b,b!==null?(c=qg!==null?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=null,!0):!1;default:return!1}}function Dg(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2,I=!1,xg=a}}}function Fg(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;xg=a}function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;if((b=a.tag!==3)&&!(b=a.tag!==5)&&(b=a.type,b=b!=="head"&&b!=="body"&&!Ef(a.type,a.memoizedProps)),b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}if(Fg(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a:{for(a=a.nextSibling,b=0;a;){if(a.nodeType===8){var c=a.data;if(c==="/$"){if(b===0){yg=Lf(a.nextSibling);break a}b--}else c!=="$"&&c!=="$!"&&c!=="$?"||b++}a=a.nextSibling}yg=null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(a){zg===null?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b,c){if(a=c.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;return b!==null&&b.ref!==null&&typeof b.ref=="function"&&b.ref._stringRef===f?b.ref:(b=function(a2){var b2=e.refs;a2===null?delete b2[f]:b2[f]=a2},b._stringRef=f,b)}if(typeof a!="string")throw Error(p(284));if(!c._owner)throw Error(p(290,a))}return a}function Mg(a,b){throw a=Object.prototype.toString.call(b),Error(p(31,a==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":a))}function Ng(a){var b=a._init;return b(a._payload)}function Og(a){function b(b2,c2){if(a){var d2=b2.deletions;d2===null?(b2.deletions=[c2],b2.flags|=16):d2.push(c2)}}function c(c2,d2){if(!a)return null;for(;d2!==null;)b(c2,d2),d2=d2.sibling;return null}function d(a2,b2){for(a2=new Map;b2!==null;)b2.key!==null?a2.set(b2.key,b2):a2.set(b2.index,b2),b2=b2.sibling;return a2}function e(a2,b2){return a2=Pg(a2,b2),a2.index=0,a2.sibling=null,a2}function f(b2,c2,d2){return b2.index=d2,a?(d2=b2.alternate,d2!==null?(d2=d2.index,d2<c2?(b2.flags|=2,c2):d2):(b2.flags|=2,c2)):(b2.flags|=1048576,c2)}function g(b2){return a&&b2.alternate===null&&(b2.flags|=2),b2}function h(a2,b2,c2,d2){return b2===null||b2.tag!==6?(b2=Qg(c2,a2.mode,d2),b2.return=a2,b2):(b2=e(b2,c2),b2.return=a2,b2)}function k(a2,b2,c2,d2){var f2=c2.type;return f2===ya?m(a2,b2,c2.props.children,d2,c2.key):b2!==null&&(b2.elementType===f2||typeof f2=="object"&&f2!==null&&f2.$$typeof===Ha&&Ng(f2)===b2.type)?(d2=e(b2,c2.props),d2.ref=Lg(a2,b2,c2),d2.return=a2,d2):(d2=Rg(c2.type,c2.key,c2.props,null,a2.mode,d2),d2.ref=Lg(a2,b2,c2),d2.return=a2,d2)}function l(a2,b2,c2,d2){return b2===null||b2.tag!==4||b2.stateNode.containerInfo!==c2.containerInfo||b2.stateNode.implementation!==c2.implementation?(b2=Sg(c2,a2.mode,d2),b2.return=a2,b2):(b2=e(b2,c2.children||[]),b2.return=a2,b2)}function m(a2,b2,c2,d2,f2){return b2===null||b2.tag!==7?(b2=Tg(c2,a2.mode,d2,f2),b2.return=a2,b2):(b2=e(b2,c2),b2.return=a2,b2)}function q(a2,b2,c2){if(typeof b2=="string"&&b2!==""||typeof b2=="number")return b2=Qg(""+b2,a2.mode,c2),b2.return=a2,b2;if(typeof b2=="object"&&b2!==null){switch(b2.$$typeof){case va:return c2=Rg(b2.type,b2.key,b2.props,null,a2.mode,c2),c2.ref=Lg(a2,null,b2),c2.return=a2,c2;case wa:return b2=Sg(b2,a2.mode,c2),b2.return=a2,b2;case Ha:var d2=b2._init;return q(a2,d2(b2._payload),c2)}if(eb(b2)||Ka(b2))return b2=Tg(b2,a2.mode,c2,null),b2.return=a2,b2;Mg(a2,b2)}return null}function r(a2,b2,c2,d2){var e2=b2!==null?b2.key:null;if(typeof c2=="string"&&c2!==""||typeof c2=="number")return e2!==null?null:h(a2,b2,""+c2,d2);if(typeof c2=="object"&&c2!==null){switch(c2.$$typeof){case va:return c2.key===e2?k(a2,b2,c2,d2):null;case wa:return c2.key===e2?l(a2,b2,c2,d2):null;case Ha:return e2=c2._init,r(a2,b2,e2(c2._payload),d2)}if(eb(c2)||Ka(c2))return e2!==null?null:m(a2,b2,c2,d2,null);Mg(a2,c2)}return null}function y(a2,b2,c2,d2,e2){if(typeof d2=="string"&&d2!==""||typeof d2=="number")return a2=a2.get(c2)||null,h(b2,a2,""+d2,e2);if(typeof d2=="object"&&d2!==null){switch(d2.$$typeof){case va:return a2=a2.get(d2.key===null?c2:d2.key)||null,k(b2,a2,d2,e2);case wa:return a2=a2.get(d2.key===null?c2:d2.key)||null,l(b2,a2,d2,e2);case Ha:var f2=d2._init;return y(a2,b2,c2,f2(d2._payload),e2)}if(eb(d2)||Ka(d2))return a2=a2.get(c2)||null,m(b2,a2,d2,e2,null);Mg(b2,d2)}return null}function n(e2,g2,h2,k2){for(var l2=null,m2=null,u=g2,w=g2=0,x=null;u!==null&&w<h2.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n2=r(e2,u,h2[w],k2);if(n2===null){u===null&&(u=x);break}a&&u&&n2.alternate===null&&b(e2,u),g2=f(n2,g2,w),m2===null?l2=n2:m2.sibling=n2,m2=n2,u=x}if(w===h2.length)return c(e2,u),I&&tg(e2,w),l2;if(u===null){for(;w<h2.length;w++)u=q(e2,h2[w],k2),u!==null&&(g2=f(u,g2,w),m2===null?l2=u:m2.sibling=u,m2=u);return I&&tg(e2,w),l2}for(u=d(e2,u);w<h2.length;w++)x=y(u,e2,w,h2[w],k2),x!==null&&(a&&x.alternate!==null&&u.delete(x.key===null?w:x.key),g2=f(x,g2,w),m2===null?l2=x:m2.sibling=x,m2=x);return a&&u.forEach(function(a2){return b(e2,a2)}),I&&tg(e2,w),l2}function t(e2,g2,h2,k2){var l2=Ka(h2);if(typeof l2!="function")throw Error(p(150));if(h2=l2.call(h2),h2==null)throw Error(p(151));for(var u=l2=null,m2=g2,w=g2=0,x=null,n2=h2.next();m2!==null&&!n2.done;w++,n2=h2.next()){m2.index>w?(x=m2,m2=null):x=m2.sibling;var t2=r(e2,m2,n2.value,k2);if(t2===null){m2===null&&(m2=x);break}a&&m2&&t2.alternate===null&&b(e2,m2),g2=f(t2,g2,w),u===null?l2=t2:u.sibling=t2,u=t2,m2=x}if(n2.done)return c(e2,m2),I&&tg(e2,w),l2;if(m2===null){for(;!n2.done;w++,n2=h2.next())n2=q(e2,n2.value,k2),n2!==null&&(g2=f(n2,g2,w),u===null?l2=n2:u.sibling=n2,u=n2);return I&&tg(e2,w),l2}for(m2=d(e2,m2);!n2.done;w++,n2=h2.next())n2=y(m2,e2,w,n2.value,k2),n2!==null&&(a&&n2.alternate!==null&&m2.delete(n2.key===null?w:n2.key),g2=f(n2,g2,w),u===null?l2=n2:u.sibling=n2,u=n2);return a&&m2.forEach(function(a2){return b(e2,a2)}),I&&tg(e2,w),l2}function J(a2,d2,f2,h2){if(typeof f2=="object"&&f2!==null&&f2.type===ya&&f2.key===null&&(f2=f2.props.children),typeof f2=="object"&&f2!==null){switch(f2.$$typeof){case va:a:{for(var k2=f2.key,l2=d2;l2!==null;){if(l2.key===k2){if(k2=f2.type,k2===ya){if(l2.tag===7){c(a2,l2.sibling),d2=e(l2,f2.props.children),d2.return=a2,a2=d2;break a}}else if(l2.elementType===k2||typeof k2=="object"&&k2!==null&&k2.$$typeof===Ha&&Ng(k2)===l2.type){c(a2,l2.sibling),d2=e(l2,f2.props),d2.ref=Lg(a2,l2,f2),d2.return=a2,a2=d2;break a}c(a2,l2);break}else b(a2,l2);l2=l2.sibling}f2.type===ya?(d2=Tg(f2.props.children,a2.mode,h2,f2.key),d2.return=a2,a2=d2):(h2=Rg(f2.type,f2.key,f2.props,null,a2.mode,h2),h2.ref=Lg(a2,d2,f2),h2.return=a2,a2=h2)}return g(a2);case wa:a:{for(l2=f2.key;d2!==null;){if(d2.key===l2)if(d2.tag===4&&d2.stateNode.containerInfo===f2.containerInfo&&d2.stateNode.implementation===f2.implementation){c(a2,d2.sibling),d2=e(d2,f2.children||[]),d2.return=a2,a2=d2;break a}else{c(a2,d2);break}else b(a2,d2);d2=d2.sibling}d2=Sg(f2,a2.mode,h2),d2.return=a2,a2=d2}return g(a2);case Ha:return l2=f2._init,J(a2,d2,l2(f2._payload),h2)}if(eb(f2))return n(a2,d2,f2,h2);if(Ka(f2))return t(a2,d2,f2,h2);Mg(a2,f2)}return typeof f2=="string"&&f2!==""||typeof f2=="number"?(f2=""+f2,d2!==null&&d2.tag===6?(c(a2,d2.sibling),d2=e(d2,f2),d2.return=a2,a2=d2):(c(a2,d2),d2=Qg(f2,a2.mode,h2),d2.return=a2,a2=d2),g(a2)):c(a2,d2)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg),a._currentValue=b}function bh(a,b,c){for(;a!==null;){var d=a.alternate;if((a.childLanes&b)!==b?(a.childLanes|=b,d!==null&&(d.childLanes|=b)):d!==null&&(d.childLanes&b)!==b&&(d.childLanes|=b),a===c)break;a=a.return}}function ch(a,b){Xg=a,Zg=Yg=null,a=a.dependencies,a!==null&&a.firstContext!==null&&((a.lanes&b)!==0&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},Yg===null){if(Xg===null)throw Error(p(308));Yg=a,Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){fh===null?fh=[a]:fh.push(a)}function hh(a,b,c,d){var e=b.interleaved;return e===null?(c.next=c,gh(b)):(c.next=e.next,e.next=c),b.interleaved=c,ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;for(c!==null&&(c.lanes|=b),c=a,a=a.return;a!==null;)a.childLanes|=b,c=a.alternate,c!==null&&(c.childLanes|=b),c=a,a=a.return;return c.tag===3?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(a,b){a=a.updateQueue,b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function nh(a,b,c){var d=a.updateQueue;if(d===null)return null;if(d=d.shared,(K&2)!==0){var e=d.pending;return e===null?b.next=b:(b.next=e.next,e.next=b),d.pending=b,ih(a,c)}return e=d.interleaved,e===null?(b.next=b,gh(d)):(b.next=e.next,e.next=b),d.interleaved=b,ih(a,c)}function oh(a,b,c){if(b=b.updateQueue,b!==null&&(b=b.shared,(c&4194240)!==0)){var d=b.lanes;d&=a.pendingLanes,c|=d,b.lanes=c,Cc(a,c)}}function ph(a,b){var c=a.updateQueue,d=a.alternate;if(d!==null&&(d=d.updateQueue,c===d)){var e=null,f=null;if(c=c.firstBaseUpdate,c!==null){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};f===null?e=f=g:f=f.next=g,c=c.next}while(c!==null);f===null?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects},a.updateQueue=c;return}a=c.lastBaseUpdate,a===null?c.firstBaseUpdate=b:a.next=b,c.lastBaseUpdate=b}function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(h!==null){e.shared.pending=null;var k=h,l=k.next;k.next=null,g===null?f=l:g.next=l,g=k;var m=a.alternate;m!==null&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(h===null?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(f!==null){var q=e.baseState;g=0,m=l=k=null,h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){m!==null&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var n=a,t=h;switch(r=b,y=c,t.tag){case 1:if(n=t.payload,typeof n=="function"){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:if(n=t.payload,r=typeof n=="function"?n.call(y,q,r):n,r==null)break a;q=A({},q,r);break a;case 2:jh=!0}}h.callback!==null&&h.lane!==0&&(a.flags|=64,r=e.effects,r===null?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},m===null?(l=m=y,k=q):m=m.next=y,g|=r;if(h=h.next,h===null){if(h=e.shared.pending,h===null)break;r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}}while(!0);if(m===null&&(k=q),e.baseState=k,e.firstBaseUpdate=l,e.lastBaseUpdate=m,b=e.shared.interleaved,b!==null){e=b;do g|=e.lane,e=e.next;while(e!==b)}else f===null&&(e.shared.lanes=0);rh|=g,a.lanes=g,a.memoizedState=q}}function sh(a,b,c){if(a=b.effects,b.effects=null,a!==null)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(e!==null){if(d.callback=null,d=c,typeof e!="function")throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}function yh(a,b){switch(G(wh,b),G(vh,a),G(uh,th),a=b.nodeType,a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=a===8?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh),G(uh,b)}function zh(){E(uh),E(vh),E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current),c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);function Ch(a){for(var b=a;b!==null;){if(b.tag===13){var c=b.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return b}else if(b.tag===19&&b.memoizedProps.revealOrder!==void 0){if((b.flags&128)!==0)return b}else if(b.child!==null){b.child.return=b,b=b.child;continue}if(b===a)break;for(;b.sibling===null;){if(b.return===null||b.return===a)return null;b=b.return}b.sibling.return=b.return,b=b.sibling}return null}var Dh=[];function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321))}function Mh(a,b){if(b===null)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}function Nh(a,b,c,d,e,f){if(Hh=f,M=b,b.memoizedState=null,b.updateQueue=null,b.lanes=0,Fh.current=a===null||a.memoizedState===null?Oh:Ph,a=c(d,e),Jh){f=0;do{if(Jh=!1,Kh=0,25<=f)throw Error(p(301));f+=1,O=N=null,b.updateQueue=null,Fh.current=Qh,a=c(d,e)}while(Jh)}if(Fh.current=Rh,b=N!==null&&N.next!==null,Hh=0,O=N=M=null,Ih=!1,b)throw Error(p(300));return a}function Sh(){var a=Kh!==0;return Kh=0,a}function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O===null?M.memoizedState=O=a:O=O.next=a,O}function Uh(){if(N===null){var a=M.alternate;a=a!==null?a.memoizedState:null}else a=N.next;var b=O===null?M.memoizedState:O.next;if(b!==null)O=b,N=a;else{if(a===null)throw Error(p(310));N=a,a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},O===null?M.memoizedState=O=a:O=O.next=a}return O}function Vh(a,b){return typeof b=="function"?b(a):b}function Wh(a){var b=Uh(),c=b.queue;if(c===null)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(f!==null){if(e!==null){var g=e.next;e.next=f.next,f.next=g}d.baseQueue=e=f,c.pending=null}if(e!==null){f=e.next,d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)k!==null&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};k===null?(h=k=q,g=d):k=k.next=q,M.lanes|=m,rh|=m}l=l.next}while(l!==null&&l!==f);k===null?g=d:k.next=h,He(d,b.memoizedState)||(dh=!0),b.memoizedState=d,b.baseState=g,b.baseQueue=k,c.lastRenderedState=d}if(a=c.interleaved,a!==null){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else e===null&&(c.lanes=0);return[b.memoizedState,c.dispatch]}function Xh(a){var b=Uh(),c=b.queue;if(c===null)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(e!==null){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0),b.memoizedState=f,b.baseQueue===null&&(b.baseState=f),c.lastRenderedState=f}return[f,d]}function Yh(){}function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);if(f&&(d.memoizedState=e,dh=!0),d=d.queue,$h(ai.bind(null,c,d,a),[a]),d.getSnapshot!==b||f||O!==null&&O.memoizedState.tag&1){if(c.flags|=2048,bi(9,ci.bind(null,c,d,e,b),void 0,null),Q===null)throw Error(p(349));(Hh&30)!==0||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384,a={getSnapshot:b,value:c},b=M.updateQueue,b===null?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,c===null?b.stores=[a]:c.push(a))}function ci(a,b,c,d){b.value=c,b.getSnapshot=d,ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch{return!0}}function fi(a){var b=ih(a,1);b!==null&&gi(b,a,1,-1)}function hi(a){var b=Th();return typeof a=="function"&&(a=a()),b.memoizedState=b.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a},b.queue=a,a=a.dispatch=ii.bind(null,M,a),[b.memoizedState,a]}function bi(a,b,c,d){return a={tag:a,create:b,destroy:c,deps:d,next:null},b=M.updateQueue,b===null?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,c===null?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a)),a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a,e.memoizedState=bi(1|b,c,void 0,d===void 0?null:d)}function li(a,b,c,d){var e=Uh();d=d===void 0?null:d;var f=void 0;if(N!==null){var g=N.memoizedState;if(f=g.destroy,d!==null&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a,e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}function pi(a,b){if(typeof b=="function")return a=a(),b(a),function(){b(null)};if(b!=null)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){return c=c!=null?c.concat([a]):null,li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=b===void 0?null:b;var d=c.memoizedState;return d!==null&&b!==null&&Mh(b,d[1])?d[0]:(c.memoizedState=[a,b],a)}function ti(a,b){var c=Uh();b=b===void 0?null:b;var d=c.memoizedState;return d!==null&&b!==null&&Mh(b,d[1])?d[0]:(a=a(),c.memoizedState=[a,b],a)}function ui(a,b,c){return(Hh&21)===0?(a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c):(He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0),b)}function vi(a,b){var c=C;C=c!==0&&4>c?c:4,a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}function xi(a,b,c){var d=yi(a);if(c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null},zi(a))Ai(b,c);else if(c=hh(a,b,c,d),c!==null){var e=R();gi(c,a,d,e),Bi(c,b,d)}}function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(a.lanes===0&&(f===null||f.lanes===0)&&(f=b.lastRenderedReducer,f!==null))try{var g=b.lastRenderedState,h=f(g,c);if(e.hasEagerState=!0,e.eagerState=h,He(h,g)){var k=b.interleaved;k===null?(e.next=e,gh(b)):(e.next=k.next,k.next=e),b.interleaved=e;return}}catch{}finally{}c=hh(a,b,e,d),c!==null&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}function zi(a){var b=a.alternate;return a===M||b!==null&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;c===null?b.next=b:(b.next=c.next,c.next=b),a.pending=b}function Bi(a,b,c){if((c&4194240)!==0){var d=b.lanes;d&=a.pendingLanes,c|=d,b.lanes=c,Cc(a,c)}}var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){return Th().memoizedState=[a,b===void 0?null:b],a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){return c=c!=null?c.concat([a]):null,ki(4194308,4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();return b=b===void 0?null:b,a=a(),c.memoizedState=[a,b],a},useReducer:function(a,b,c){var d=Th();return b=c!==void 0?c(b):b,d.memoizedState=d.baseState=b,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b},d.queue=a,a=a.dispatch=xi.bind(null,M,a),[d.memoizedState,a]},useRef:function(a){var b=Th();return a={current:a},b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];return a=vi.bind(null,a[1]),Th().memoizedState=a,[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(c===void 0)throw Error(p(407));c=c()}else{if(c=b(),Q===null)throw Error(p(349));(Hh&30)!==0||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};return e.queue=f,mi(ai.bind(null,d,f,a),[a]),d.flags|=2048,bi(9,ci.bind(null,d,f,c,b),void 0,null),c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg,d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c,b=":"+b+"R"+c,c=Kh++,0<c&&(b+="H"+c.toString(32)),b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return N===null?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b),a=a.defaultProps;for(var c in a)b[c]===void 0&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState,c=c(d,b),c=c==null?b:A({},b,c),a.memoizedState=c,a.lanes===0&&(a.updateQueue.baseState=c)}var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b,c!=null&&(f.callback=c),b=nh(a,f,e),b!==null&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1,f.payload=b,c!=null&&(f.callback=c),b=nh(a,f,e),b!==null&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=yi(a),e=mh(c,d);e.tag=2,b!=null&&(e.callback=b),b=nh(a,e,d),b!==null&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}function Gi(a,b,c){var d=!1,e=Vf,f=b.contextType;return typeof f=="object"&&f!==null?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=d!=null)?Yf(a,e):Vf),b=new b(c,f),a.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Ei,a.stateNode=b,b._reactInternals=a,d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f),b}function Hi(a,b,c,d){a=b.state,typeof b.componentWillReceiveProps=="function"&&b.componentWillReceiveProps(c,d),typeof b.UNSAFE_componentWillReceiveProps=="function"&&b.UNSAFE_componentWillReceiveProps(c,d),b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}function Ii(a,b,c,d){var e=a.stateNode;e.props=c,e.state=a.memoizedState,e.refs={},kh(a);var f=b.contextType;typeof f=="object"&&f!==null?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f)),e.state=a.memoizedState,f=b.getDerivedStateFromProps,typeof f=="function"&&(Di(a,b,f,c),e.state=a.memoizedState),typeof b.getDerivedStateFromProps=="function"||typeof e.getSnapshotBeforeUpdate=="function"||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(b=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState),typeof e.componentDidMount=="function"&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e=`
Error generating stack: `+f.message+`
`+f.stack}return{value:a,source:b,stack:e,digest:null}}function Ki(a,b,c){return{value:a,source:null,stack:c??null,digest:b??null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c})}}var Mi=typeof WeakMap=="function"?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c),c.tag=3,c.payload={element:null};var d=b.value;return c.callback=function(){Oi||(Oi=!0,Pi=d),Li(a,b)},c}function Qi(a,b,c){c=mh(-1,c),c.tag=3;var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var e=b.value;c.payload=function(){return d(e)},c.callback=function(){Li(a,b)}}var f=a.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(c.callback=function(){Li(a,b),typeof d!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var c2=b.stack;this.componentDidCatch(b.value,{componentStack:c2!==null?c2:""})}),c}function Si(a,b,c){var d=a.pingCache;if(d===null){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),e===void 0&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if((b=a.tag===13)&&(b=a.memoizedState,b=b!==null?b.dehydrated!==null:!0),b)return a;a=a.return}while(a!==null);return null}function Vi(a,b,c,d,e){return(a.mode&1)===0?(a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a):(a.flags|=65536,a.lanes=e,a)}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=a===null?Vg(b,null,c,d):Ug(b,a.child,c,d)}function Yi(a,b,c,d,e){c=c.render;var f=b.ref;return ch(b,e),d=Nh(a,b,c,d,f,e),c=Sh(),a!==null&&!dh?(b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e)):(I&&c&&vg(b),b.flags|=1,Xi(a,b,d,e),b.child)}function $i(a,b,c,d,e){if(a===null){var f=c.type;return typeof f=="function"&&!aj(f)&&f.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(b.tag=15,b.type=f,bj(a,b,f,d,e)):(a=Rg(c.type,null,d,b,b.mode,e),a.ref=b.ref,a.return=b,b.child=a)}if(f=a.child,(a.lanes&e)===0){var g=f.memoizedProps;if(c=c.compare,c=c!==null?c:Ie,c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}return b.flags|=1,a=Pg(f,d),a.ref=b.ref,a.return=b,b.child=a}function bj(a,b,c,d,e){if(a!==null){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,(a.lanes&e)!==0)(a.flags&131072)!==0&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}function dj(a,b,c){var d=b.pendingProps,e=d.children,f=a!==null?a.memoizedState:null;if(d.mode==="hidden")if((b.mode&1)===0)b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if((c&1073741824)===0)return a=f!==null?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=f!==null?f.baseLanes:c,G(ej,fj),fj|=d}else f!==null?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;return Xi(a,b,e,c),b.child}function gj(a,b){var c=b.ref;(a===null&&c!==null||a!==null&&a.ref!==c)&&(b.flags|=512,b.flags|=2097152)}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;return f=Yf(b,f),ch(b,e),c=Nh(a,b,c,d,f,e),d=Sh(),a!==null&&!dh?(b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e)):(I&&d&&vg(b),b.flags|=1,Xi(a,b,c,e),b.child)}function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;if(ch(b,e),b.stateNode===null)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(a===null){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;typeof l=="object"&&l!==null?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q=typeof m=="function"||typeof g.getSnapshotBeforeUpdate=="function";q||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(h!==d||k!==l)&&Hi(b,g,d,l),jh=!1;var r=b.memoizedState;g.state=r,qh(b,d,g,e),k=b.memoizedState,h!==d||r!==k||Wf.current||jh?(typeof m=="function"&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(b.flags|=4194308)):(typeof g.componentDidMount=="function"&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):(typeof g.componentDidMount=="function"&&(b.flags|=4194308),d=!1)}else{g=b.stateNode,lh(a,b),h=b.memoizedProps,l=b.type===b.elementType?h:Ci(b.type,h),g.props=l,q=b.pendingProps,r=g.context,k=c.contextType,typeof k=="object"&&k!==null?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m=typeof y=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(h!==q||r!==k)&&Hi(b,g,d,k),jh=!1,r=b.memoizedState,g.state=r,qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?(typeof y=="function"&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(d,n,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(d,n,k)),typeof g.componentDidUpdate=="function"&&(b.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(b.flags|=1024)):(typeof g.componentDidUpdate!="function"||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):(typeof g.componentDidUpdate!="function"||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}function jj(a,b,c,d,e,f){gj(a,b);var g=(b.flags&128)!==0;if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode,Wi.current=b;var h=g&&typeof c.getDerivedStateFromError!="function"?null:d.render();return b.flags|=1,a!==null&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f),b.memoizedState=d.state,e&&dg(b,c,!0),b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1),yh(a,b.containerInfo)}function lj(a,b,c,d,e){return Ig(),Jg(e),b.flags|=256,Xi(a,b,c,d),b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=(b.flags&128)!==0,h;if((h=g)||(h=a!==null&&a.memoizedState===null?!1:(e&2)!==0),h?(f=!0,b.flags&=-129):(a===null||a.memoizedState!==null)&&(e|=1),G(L,e&1),a===null)return Eg(b),a=b.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?((b.mode&1)===0?b.lanes=1:a.data==="$!"?b.lanes=8:b.lanes=1073741824,null):(g=d.children,a=d.fallback,f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},(d&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g));if(e=a.memoizedState,e!==null&&(h=e.dehydrated,h!==null))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback,g=b.mode,e=a.child,h=e.sibling;var k={mode:"hidden",children:d.children};return(g&1)===0&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064),h!==null?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2),f.return=b,d.return=b,d.sibling=f,b.child=d,d=f,f=b.child,g=a.child.memoizedState,g=g===null?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=a.childLanes&~c,b.memoizedState=mj,d}return f=a.child,a=f.sibling,d=Pg(f,{mode:"visible",children:d.children}),(b.mode&1)===0&&(d.lanes=c),d.return=b,d.sibling=null,a!==null&&(c=b.deletions,c===null?(b.deletions=[a],b.flags|=16):c.push(a)),b.child=d,b.memoizedState=null,d}function qj(a,b){return b=pj({mode:"visible",children:b},a.mode,0,null),b.return=a,a.child=b}function sj(a,b,c,d){return d!==null&&Jg(d),Ug(b,a.child,null,c),a=qj(b,b.pendingProps.children),a.flags|=2,b.memoizedState=null,a}function rj(a,b,c,d,e,f,g){if(c)return b.flags&256?(b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d)):b.memoizedState!==null?(b.child=a.child,b.flags|=128,null):(f=d.fallback,e=b.mode,d=pj({mode:"visible",children:d.children},e,0,null),f=Tg(f,e,g,null),f.flags|=2,d.return=b,f.return=b,d.sibling=f,b.child=d,(b.mode&1)!==0&&Ug(b,a.child,null,g),b.child.memoizedState=nj(g),b.memoizedState=mj,f);if((b.mode&1)===0)return sj(a,b,g,null);if(e.data==="$!"){if(d=e.nextSibling&&e.nextSibling.dataset,d)var h=d.dgst;return d=h,f=Error(p(419)),d=Ki(f,d,void 0),sj(a,b,g,d)}if(h=(g&a.childLanes)!==0,dh||h){if(d=Q,d!==null){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=(e&(d.suspendedLanes|g))!==0?0:e,e!==0&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}return tj(),d=Ki(Error(p(421))),sj(a,b,g,d)}return e.data==="$?"?(b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null):(a=f.treeContext,yg=Lf(e.nextSibling),xg=b,I=!0,zg=null,a!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b),b=qj(b,d.children),b.flags|=4096,b)}function vj(a,b,c){a.lanes|=b;var d=a.alternate;d!==null&&(d.lanes|=b),bh(a.return,b,c)}function wj(a,b,c,d,e){var f=a.memoizedState;f===null?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;if(Xi(a,b,d.children,c),d=L.current,(d&2)!==0)d=d&1|2,b.flags|=128;else{if(a!==null&&(a.flags&128)!==0)a:for(a=b.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&vj(a,c,b);else if(a.tag===19)vj(a,c,b);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===b)break a;for(;a.sibling===null;){if(a.return===null||a.return===b)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}d&=1}if(G(L,d),(b.mode&1)===0)b.memoizedState=null;else switch(e){case"forwards":for(c=b.child,e=null;c!==null;)a=c.alternate,a!==null&&Ch(a)===null&&(e=c),c=c.sibling;c=e,c===null?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null),wj(b,!1,e,c,f);break;case"backwards":for(c=null,e=b.child,b.child=null;e!==null;){if(a=e.alternate,a!==null&&Ch(a)===null){b.child=e;break}a=e.sibling,e.sibling=c,c=e,e=a}wj(b,!0,c,null,f);break;case"together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function ij(a,b){(b.mode&1)===0&&a!==null&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){if(a!==null&&(b.dependencies=a.dependencies),rh|=b.lanes,(c&b.childLanes)===0)return null;if(a!==null&&b.child!==a.child)throw Error(p(153));if(b.child!==null){for(a=b.child,c=Pg(a,a.pendingProps),b.child=c,c.return=b;a.sibling!==null;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}function yj(a,b,c){switch(b.tag){case 3:kj(b),Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue),d._currentValue=e;break;case 13:if(d=b.memoizedState,d!==null)return d.dehydrated!==null?(G(L,L.current&1),b.flags|=128,null):(c&b.child.childLanes)!==0?oj(a,b,c):(G(L,L.current&1),a=Zi(a,b,c),a!==null?a.sibling:null);G(L,L.current&1);break;case 19:if(d=(c&b.childLanes)!==0,(a.flags&128)!==0){if(d)return xj(a,b,c);b.flags|=128}if(e=b.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),G(L,L.current),d)break;return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;zj=function(a,b){for(var c=b.child;c!==null;){if(c.tag===5||c.tag===6)a.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===b)break;for(;c.sibling===null;){if(c.return===null||c.return===b)return;c=c.return}c.sibling.return=c.return,c=c.sibling}};Aj=function(){};Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode,xh(uh.current);var f=null;switch(c){case"input":e=Ya(a,e),d=Ya(a,d),f=[];break;case"select":e=A({},e,{value:void 0}),d=A({},d,{value:void 0}),f=[];break;case"textarea":e=gb(a,e),d=gb(a,d),f=[];break;default:typeof e.onClick!="function"&&typeof d.onClick=="function"&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&e[l]!=null)if(l==="style"){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];if(h=e?.[l],d.hasOwnProperty(l)&&k!==h&&(k!=null||h!=null))if(l==="style")if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else l==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,h=h?h.__html:void 0,k!=null&&h!==k&&(f=f||[]).push(l,k)):l==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(l,""+k):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(ea.hasOwnProperty(l)?(k!=null&&l==="onScroll"&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;(b.updateQueue=l)&&(b.flags|=4)}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};function Dj(a,b){if(!I)switch(a.tailMode){case"hidden":b=a.tail;for(var c=null;b!==null;)b.alternate!==null&&(c=b),b=b.sibling;c===null?a.tail=null:c.sibling=null;break;case"collapsed":c=a.tail;for(var d=null;c!==null;)c.alternate!==null&&(d=c),c=c.sibling;d===null?b||a.tail===null?a.tail=null:a.tail.sibling=null:d.sibling=null}}function S(a){var b=a.alternate!==null&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;e!==null;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;e!==null;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;return a.subtreeFlags|=d,a.childLanes=c,b}function Ej(a,b,c){var d=b.pendingProps;switch(wg(b),b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:return d=b.stateNode,zh(),E(Wf),E(H),Eh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(a===null||a.child===null)&&(Gg(b)?b.flags|=4:a===null||a.memoizedState.isDehydrated&&(b.flags&256)===0||(b.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(a,b),S(b),null;case 5:Bh(b);var e=xh(wh.current);if(c=b.type,a!==null&&b.stateNode!=null)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(b.stateNode===null)throw Error(p(166));return S(b),null}if(a=xh(uh.current),Gg(b)){d=b.stateNode,c=b.type;var f=b.memoizedProps;switch(d[Of]=b,d[Pf]=f,a=(b.mode&1)!==0,c){case"dialog":D("cancel",d),D("close",d);break;case"iframe":case"object":case"embed":D("load",d);break;case"video":case"audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case"source":D("error",d);break;case"img":case"image":case"link":D("error",d),D("load",d);break;case"details":D("toggle",d);break;case"input":Za(d,f),D("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!f.multiple},D("invalid",d);break;case"textarea":hb(d,f),D("invalid",d)}ub(c,f),e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];g==="children"?typeof h=="string"?d.textContent!==h&&(f.suppressHydrationWarning!==!0&&Af(d.textContent,h,a),e=["children",h]):typeof h=="number"&&d.textContent!==""+h&&(f.suppressHydrationWarning!==!0&&Af(d.textContent,h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&h!=null&&g==="onScroll"&&D("scroll",d)}switch(c){case"input":Va(d),db(d,f,!0);break;case"textarea":Va(d),jb(d);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(d.onclick=Bf)}d=e,b.updateQueue=d,d!==null&&(b.flags|=4)}else{g=e.nodeType===9?e:e.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=kb(c)),a==="http://www.w3.org/1999/xhtml"?c==="script"?(a=g.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof d.is=="string"?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),c==="select"&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c),a[Of]=b,a[Pf]=d,zj(a,b,!1,!1),b.stateNode=a;a:{switch(g=vb(c,d),c){case"dialog":D("cancel",a),D("close",a),e=d;break;case"iframe":case"object":case"embed":D("load",a),e=d;break;case"video":case"audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case"source":D("error",a),e=d;break;case"img":case"image":case"link":D("error",a),D("load",a),e=d;break;case"details":D("toggle",a),e=d;break;case"input":Za(a,d),e=Ya(a,d),D("invalid",a);break;case"option":e=d;break;case"select":a._wrapperState={wasMultiple:!!d.multiple},e=A({},d,{value:void 0}),D("invalid",a);break;case"textarea":hb(a,d),e=gb(a,d),D("invalid",a);break;default:e=d}ub(c,e),h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];f==="style"?sb(a,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&nb(a,k)):f==="children"?typeof k=="string"?(c!=="textarea"||k!=="")&&ob(a,k):typeof k=="number"&&ob(a,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ea.hasOwnProperty(f)?k!=null&&f==="onScroll"&&D("scroll",a):k!=null&&ta(a,f,k,g))}switch(c){case"input":Va(a),db(a,d,!1);break;case"textarea":Va(a),jb(a);break;case"option":d.value!=null&&a.setAttribute("value",""+Sa(d.value));break;case"select":a.multiple=!!d.multiple,f=d.value,f!=null?fb(a,!!d.multiple,f,!1):d.defaultValue!=null&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:typeof e.onClick=="function"&&(a.onclick=Bf)}switch(c){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break a;case"img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}b.ref!==null&&(b.flags|=512,b.flags|=2097152)}return S(b),null;case 6:if(a&&b.stateNode!=null)Cj(a,b,a.memoizedProps,d);else{if(typeof d!="string"&&b.stateNode===null)throw Error(p(166));if(c=xh(wh.current),xh(uh.current),Gg(b)){if(d=b.stateNode,c=b.memoizedProps,d[Of]=b,(f=d.nodeValue!==c)&&(a=xg,a!==null))switch(a.tag){case 3:Af(d.nodeValue,c,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&Af(d.nodeValue,c,(a.mode&1)!==0)}f&&(b.flags|=4)}else d=(c.nodeType===9?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}return S(b),null;case 13:if(E(L),d=b.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(I&&yg!==null&&(b.mode&1)!==0&&(b.flags&128)===0)Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),d!==null&&d.dehydrated!==null){if(a===null){if(!f)throw Error(p(318));if(f=b.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(p(317));f[Of]=b}else Ig(),(b.flags&128)===0&&(b.memoizedState=null),b.flags|=4;S(b),f=!1}else zg!==null&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}return(b.flags&128)!==0?(b.lanes=c,b):(d=d!==null,d!==(a!==null&&a.memoizedState!==null)&&d&&(b.child.flags|=8192,(b.mode&1)!==0&&(a===null||(L.current&1)!==0?T===0&&(T=3):tj())),b.updateQueue!==null&&(b.flags|=4),S(b),null);case 4:return zh(),Aj(a,b),a===null&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:if(E(L),f=b.memoizedState,f===null)return S(b),null;if(d=(b.flags&128)!==0,g=f.rendering,g===null)if(d)Dj(f,!1);else{if(T!==0||a!==null&&(a.flags&128)!==0)for(a=b.child;a!==null;){if(g=Ch(a),g!==null){for(b.flags|=128,Dj(f,!1),d=g.updateQueue,d!==null&&(b.updateQueue=d,b.flags|=4),b.subtreeFlags=0,d=c,c=b.child;c!==null;)f=c,a=d,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;return G(L,L.current&1|2),b.child}a=a.sibling}f.tail!==null&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),a!==null){if(b.flags|=128,d=!0,c=a.updateQueue,c!==null&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&c!==1073741824&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,c!==null?c.sibling=g:b.child=g,f.last=g)}return f.tail!==null?(b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b):(S(b),null);case 22:case 23:return Hj(),d=b.memoizedState!==null,a!==null&&a.memoizedState!==null!==d&&(b.flags|=8192),d&&(b.mode&1)!==0?(fj&1073741824)!==0&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag))}function Ij(a,b){switch(wg(b),b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,(a&65536)!==0&&(a&128)===0?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:if(E(L),a=b.memoizedState,a!==null&&a.dehydrated!==null){if(b.alternate===null)throw Error(p(340));Ig()}return a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;function Oj(a,b){if(Cf=dd,a=Me(),Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&d.rangeCount!==0){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch{c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;q!==c||e!==0&&q.nodeType!==3||(h=g+e),q!==f||d!==0&&q.nodeType!==3||(k=g+d),q.nodeType===3&&(g+=q.nodeValue.length),(y=q.firstChild)!==null;)r=q,q=y;for(;;){if(q===a)break b;if(r===c&&++l===e&&(h=g),r===f&&++m===d&&(k=g),(y=q.nextSibling)!==null)break;q=r,r=q.parentNode}q=y}c=h===-1||k===-1?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;for(Df={focusedElem:a,selectionRange:c},dd=!1,V=b;V!==null;)if(b=V,a=b.child,(b.subtreeFlags&1028)!==0&&a!==null)a.return=b,V=a;else for(;V!==null;){b=V;try{var n=b.alternate;if((b.flags&1024)!==0)switch(b.tag){case 0:case 11:case 15:break;case 1:if(n!==null){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(F){W(b,b.return,F)}if(a=b.sibling,a!==null){a.return=b.return,V=a;break}V=b.return}return n=Nj,Nj=!1,n}function Pj(a,b,c){var d=b.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0,f!==void 0&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){if(b=b.updateQueue,b=b!==null?b.lastEffect:null,b!==null){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(b!==null){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}typeof b=="function"?b(a):b.current=a}}function Sj(a){var b=a.alternate;b!==null&&(a.alternate=null,Sj(b)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(b=a.stateNode,b!==null&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Tj(a){return a.tag===5||a.tag===3||a.tag===4}function Uj(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Tj(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Vj(a,b,c){var d=a.tag;if(d===5||d===6)a=a.stateNode,b?c.nodeType===8?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(c.nodeType===8?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,c!=null||b.onclick!==null||(b.onclick=Bf));else if(d!==4&&(a=a.child,a!==null))for(Vj(a,b,c),a=a.sibling;a!==null;)Vj(a,b,c),a=a.sibling}function Wj(a,b,c){var d=a.tag;if(d===5||d===6)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(d!==4&&(a=a.child,a!==null))for(Wj(a,b,c),a=a.sibling;a!==null;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;c!==null;)Zj(a,b,c),c=c.sibling}function Zj(a,b,c){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,c)}catch{}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null,Yj(a,b,c),X=d,Xj=e,X!==null&&(Xj?(a=X,c=c.stateNode,a.nodeType===8?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:X!==null&&(Xj?(a=X,c=c.stateNode,a.nodeType===8?Kf(a.parentNode,c):a.nodeType===1&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X,e=Xj,X=c.stateNode.containerInfo,Xj=!0,Yj(a,b,c),X=d,Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag,g!==void 0&&((f&2)!==0||(f&4)!==0)&&Mj(c,b,g),e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||c.memoizedState!==null,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(b!==null){a.updateQueue=null;var c=a.stateNode;c===null&&(c=a.stateNode=new Kj),b.forEach(function(b2){var d=bk.bind(null,a,b2);c.has(b2)||(c.add(b2),b2.then(d,d))})}}function ck(a,b){var c=b.deletions;if(c!==null)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;h!==null;){switch(h.tag){case 5:X=h.stateNode,Xj=!1;break a;case 3:X=h.stateNode.containerInfo,Xj=!0;break a;case 4:X=h.stateNode.containerInfo,Xj=!0;break a}h=h.return}if(X===null)throw Error(p(160));Zj(f,g,e),X=null,Xj=!1;var k=e.alternate;k!==null&&(k.return=null),e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;b!==null;)dk(b,a),b=b.sibling}function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(ck(b,a),ek(a),d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a),ek(a),d&512&&c!==null&&Lj(c,c.return);break;case 5:if(ck(b,a),ek(a),d&512&&c!==null&&Lj(c,c.return),a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,e!=null)){var f=a.memoizedProps,g=c!==null?c.memoizedProps:f,h=a.type,k=a.updateQueue;if(a.updateQueue=null,k!==null)try{h==="input"&&f.type==="radio"&&f.name!=null&&ab(e,f),vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];m==="style"?sb(e,q):m==="dangerouslySetInnerHTML"?nb(e,q):m==="children"?ob(e,q):ta(e,m,q,l)}switch(h){case"input":bb(e,f);break;case"textarea":ib(e,f);break;case"select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;y!=null?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(f.defaultValue!=null?fb(e,!!f.multiple,f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:if(ck(b,a),ek(a),d&4){if(a.stateNode===null)throw Error(p(162));e=a.stateNode,f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:if(ck(b,a),ek(a),d&4&&c!==null&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a),ek(a);break;case 13:ck(b,a),ek(a),e=a.child,e.flags&8192&&(f=e.memoizedState!==null,e.stateNode.isHidden=f,!f||e.alternate!==null&&e.alternate.memoizedState!==null||(fk=B())),d&4&&ak(a);break;case 22:if(m=c!==null&&c.memoizedState!==null,a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a),ek(a),d&8192){if(l=a.memoizedState!==null,(a.stateNode.isHidden=l)&&!m&&(a.mode&1)!==0)for(V=a,m=a.child;m!==null;){for(q=V=m;V!==null;){switch(r=V,y=r.child,r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if(typeof n.componentWillUnmount=="function"){d=r,c=r.return;try{b=d,n.props=b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(r.memoizedState!==null){gk(q);continue}}y!==null?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(q.tag===5){if(m===null){m=q;try{e=q.stateNode,l?(f=e.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,h.style.display=rb("display",g))}catch(t){W(a,a.return,t)}}}else if(q.tag===6){if(m===null)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===a)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===a)break a;for(;q.sibling===null;){if(q.return===null||q.return===a)break a;m===q&&(m=null),q=q.return}m===q&&(m=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:ck(b,a),ek(a),d&4&&ak(a);break;case 21:break;default:ck(b,a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;c!==null;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160))}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161))}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a,ik(a,b,c)}function ik(a,b,c){for(var d=(a.mode&1)!==0;V!==null;){var e=V,f=e.child;if(e.tag===22&&d){var g=e.memoizedState!==null||Jj;if(!g){var h=e.alternate,k=h!==null&&h.memoizedState!==null||U;h=Jj;var l=U;if(Jj=g,(U=k)&&!l)for(V=e;V!==null;)g=V,k=g.child,g.tag===22&&g.memoizedState!==null?jk(e):k!==null?(k.return=g,V=k):jk(e);for(;f!==null;)V=f,ik(f,b,c),f=f.sibling;V=e,Jj=h,U=l}kk(a,b,c)}else(e.subtreeFlags&8772)!==0&&f!==null?(f.return=e,V=f):kk(a,b,c)}}function kk(a){for(;V!==null;){var b=V;if((b.flags&8772)!==0){var c=b.alternate;try{if((b.flags&8772)!==0)switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(c===null)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;f!==null&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(g!==null){if(c=null,b.child!==null)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(c===null&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&c.focus();break;case"img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(b.memoizedState===null){var l=b.alternate;if(l!==null){var m=l.memoizedState;if(m!==null){var q=m.dehydrated;q!==null&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}if(c=b.sibling,c!==null){c.return=b.return,V=c;break}V=b.return}}function gk(a){for(;V!==null;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(c!==null){c.return=b.return,V=c;break}V=b.return}}function jk(a){for(;V!==null;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if(typeof d.componentDidMount=="function"){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(h!==null){h.return=b.return,V=h;break}V=b.return}}var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=1/0,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return(K&6)!==0?B():Ak!==-1?Ak:Ak=B()}function yi(a){return(a.mode&1)===0?1:(K&2)!==0&&Z!==0?Z&-Z:Kg.transition!==null?(Bk===0&&(Bk=yc()),Bk):(a=C,a!==0||(a=window.event,a=a===void 0?16:jd(a.type)),a)}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d),((K&2)===0||a!==Q)&&(a===Q&&((K&2)===0&&(qk|=c),T===4&&Ck(a,Z)),Dk(a,d),c===1&&K===0&&(b.mode&1)===0&&(Gj=B()+500,fg&&jg()))}function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(d===0)c!==null&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){if(c!=null&&bc(c),b===1)a.tag===0?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){(K&6)===0&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b,a.callbackNode=c}}function Gk(a,b){if(Ak=-1,Bk=0,(K&6)!==0)throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(d===0)return null;if((d&30)!==0||(d&a.expiredLanes)!==0||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();(Q!==a||Z!==b)&&(uk=null,Gj=B()+500,Kk(a,b));do try{Lk();break}catch(h){Mk(a,h)}while(!0);$g(),mk.current=f,K=e,Y!==null?b=0:(Q=null,Z=0,b=T)}if(b!==0){if(b===2&&(e=xc(a),e!==0&&(d=e,b=Nk(a,e))),b===1)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(b===6)Ck(a,d);else{if(e=a.current.alternate,(d&30)===0&&!Ok(e)&&(b=Ik(a,d),b===2&&(f=xc(a),f!==0&&(d=f,b=Nk(a,f))),b===1))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;switch(a.finishedWork=e,a.finishedLanes=d,b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:if(Ck(a,d),(d&130023424)===d&&(b=fk+500-B(),10<b)){if(uc(a,0)!==0)break;if(e=a.suspendedLanes,(e&d)!==d){R(),a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:if(Ck(a,d),(d&4194240)===d)break;for(b=a.eventTimes,e=-1;0<d;){var g=31-oc(d);f=1<<g,g=b[g],g>e&&(e=g),d&=~f}if(d=e,d=B()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*lk(d/1960))-d,10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329))}}}return Dk(a,B()),a.callbackNode===c?Gk.bind(null,a):null}function Nk(a,b){var c=sk;return a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256),a=Ik(a,b),a!==2&&(b=tk,tk=c,b!==null&&Fj(b)),a}function Fj(a){tk===null?tk=a:tk.push.apply(tk,a)}function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch{return!1}}}if(c=b.child,b.subtreeFlags&16384&&c!==null)c.return=b,b=c;else{if(b===a)break;for(;b.sibling===null;){if(b.return===null||b.return===a)return!0;b=b.return}b.sibling.return=b.return,b=b.sibling}}return!0}function Ck(a,b){for(b&=~rk,b&=~qk,a.suspendedLanes|=b,a.pingedLanes&=~b,a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1,b&=~d}}function Ek(a){if((K&6)!==0)throw Error(p(327));Hk();var b=uc(a,0);if((b&1)===0)return Dk(a,B()),null;var c=Ik(a,b);if(a.tag!==0&&c===2){var d=xc(a);d!==0&&(b=d,c=Nk(a,d))}if(c===1)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(c===6)throw Error(p(345));return a.finishedWork=a.current.alternate,a.finishedLanes=b,Pk(a,tk,uk),Dk(a,B()),null}function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,K===0&&(Gj=B()+500,fg&&jg())}}function Rk(a){wk!==null&&wk.tag===0&&(K&6)===0&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,(K&6)===0&&jg()}}function Hj(){fj=ej.current,E(ej)}function Kk(a,b){a.finishedWork=null,a.finishedLanes=0;var c=a.timeoutHandle;if(c!==-1&&(a.timeoutHandle=-1,Gf(c)),Y!==null)for(c=Y.return;c!==null;){var d=c;switch(wg(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&$f();break;case 3:zh(),E(Wf),E(H),Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}if(Q=a,Y=a=Pg(a.current,null),Z=fj=b,T=0,pk=null,rk=qk=rh=0,tk=sk=null,fh!==null){for(b=0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,d!==null){c.interleaved=null;var e=d.next,f=c.pending;if(f!==null){var g=f.next;f.next=e,d.next=g}c.pending=d}fh=null}return a}function Mk(a,b){do{var c=Y;try{if($g(),Fh.current=Rh,Ih){for(var d=M.memoizedState;d!==null;){var e=d.queue;e!==null&&(e.pending=null),d=d.next}Ih=!1}if(Hh=0,O=N=M=null,Jh=!1,Kh=0,nk.current=null,c===null||c.return===null){T=1,pk=b,Y=null;break}a:{var f=a,g=c.return,h=c,k=b;if(b=Z,h.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var l=k,m=h,q=m.tag;if((m.mode&1)===0&&(q===0||q===11||q===15)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(y!==null){y.flags&=-257,Vi(y,g,h,f,b),y.mode&1&&Si(f,l,b),b=y,k=l;var n=b.updateQueue;if(n===null){var t=new Set;t.add(k),b.updateQueue=t}else n.add(k);break a}else{if((b&1)===0){Si(f,l,b),tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(J!==null){(J.flags&65536)===0&&(J.flags|=256),Vi(J,g,h,f,b),Jg(Ji(k,h));break a}}f=k=Ji(k,h),T!==4&&(T=2),sk===null?sk=[f]:sk.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,b&=-b,f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if((f.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ri===null||!Ri.has(u)))){f.flags|=65536,b&=-b,f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(f!==null)}Sk(c)}catch(na){b=na,Y===c&&c!==null&&(Y=c=c.return);continue}break}while(!0)}function Jk(){var a=mk.current;return mk.current=Rh,a===null?Rh:a}function tj(){(T===0||T===3||T===2)&&(T=4),Q===null||(rh&268435455)===0&&(qk&268435455)===0||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();(Q!==a||Z!==b)&&(uk=null,Kk(a,b));do try{Tk();break}catch(e){Mk(a,e)}while(!0);if($g(),K=c,mk.current=d,Y!==null)throw Error(p(261));return Q=null,Z=0,T}function Tk(){for(;Y!==null;)Uk(Y)}function Lk(){for(;Y!==null&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps,b===null?Sk(a):Y=b,nk.current=null}function Sk(a){var b=a;do{var c=b.alternate;if(a=b.return,(b.flags&32768)===0){if(c=Ej(c,b,fj),c!==null){Y=c;return}}else{if(c=Ij(c,b),c!==null){c.flags&=32767,Y=c;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6,Y=null;return}}if(b=b.sibling,b!==null){Y=b;return}Y=b=a}while(b!==null);T===0&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}function Wk(a,b,c,d){do Hk();while(wk!==null);if((K&6)!==0)throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(c===null)return null;if(a.finishedWork=null,a.finishedLanes=0,c===a.current)throw Error(p(177));a.callbackNode=null,a.callbackPriority=0;var f=c.lanes|c.childLanes;if(Bc(a,f),a===Q&&(Y=Q=null,Z=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||vk||(vk=!0,Fk(hc,function(){return Hk(),null})),f=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||f){f=ok.transition,ok.transition=null;var g=C;C=1;var h=K;K|=4,nk.current=null,Oj(a,c),dk(c,a),Oe(Df),dd=!!Cf,Df=Cf=null,a.current=c,hk(c,a,e),dc(),K=h,C=g,ok.transition=f}else a.current=c;if(vk&&(vk=!1,wk=a,xk=e),f=a.pendingLanes,f===0&&(Ri=null),mc(c.stateNode,d),Dk(a,B()),b!==null)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;return(xk&1)!==0&&a.tag!==0&&Hk(),f=a.pendingLanes,(f&1)!==0?a===zk?yk++:(yk=0,zk=a):yk=0,jg(),null}function Hk(){if(wk!==null){var a=Dc(xk),b=ok.transition,c=C;try{if(ok.transition=null,C=16>a?16:a,wk===null)var d=!1;else{if(a=wk,wk=null,xk=0,(K&6)!==0)throw Error(p(331));var e=K;for(K|=4,V=a.current;V!==null;){var f=V,g=f.child;if((V.flags&16)!==0){var h=f.deletions;if(h!==null){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;V!==null;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(q!==null)q.return=m,V=q;else for(;V!==null;){m=V;var r=m.sibling,y=m.return;if(Sj(m),m===l){V=null;break}if(r!==null){r.return=y,V=r;break}V=y}}}var n=f.alternate;if(n!==null){var t=n.child;if(t!==null){n.child=null;do{var J=t.sibling;t.sibling=null,t=J}while(t!==null)}}V=f}}if((f.subtreeFlags&2064)!==0&&g!==null)g.return=f,V=g;else b:for(;V!==null;){if(f=V,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(x!==null){x.return=f.return,V=x;break b}V=f.return}}var w=a.current;for(V=w;V!==null;){g=V;var u=g.child;if((g.subtreeFlags&2064)!==0&&u!==null)u.return=g,V=u;else b:for(g=w;V!==null;){if(h=V,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(F!==null){F.return=h.return,V=F;break b}V=h.return}}if(K=e,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,a)}catch{}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b),b=Ni(a,b,1),a=nh(a,b,1),b=R(),a!==null&&(Ac(a,1,b),Dk(a,b))}function W(a,b,c){if(a.tag===3)Xk(a,a,c);else for(;b!==null;){if(b.tag===3){Xk(b,a,c);break}else if(b.tag===1){var d=b.stateNode;if(typeof b.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ri===null||!Ri.has(d))){a=Ji(c,a),a=Qi(b,a,1),b=nh(b,a,1),a=R(),b!==null&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}function Ti(a,b,c){var d=a.pingCache;d!==null&&d.delete(b),b=R(),a.pingedLanes|=a.suspendedLanes&c,Q===a&&(Z&c)===c&&(T===4||T===3&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c),Dk(a,b)}function Yk(a,b){b===0&&((a.mode&1)===0?b=1:(b=sc,sc<<=1,(sc&130023424)===0&&(sc=4194304)));var c=R();a=ih(a,b),a!==null&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;b!==null&&(c=b.retryLane),Yk(a,c)}function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode,e=a.memoizedState;e!==null&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314))}d!==null&&d.delete(b),Yk(a,c)}var Vk;Vk=function(a,b,c){if(a!==null)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if((a.lanes&c)===0&&(b.flags&128)===0)return dh=!1,yj(a,b,c);dh=(a.flags&131072)!==0}else dh=!1,I&&(b.flags&1048576)!==0&&ug(b,ng,b.index);switch(b.lanes=0,b.tag){case 2:var d=b.type;ij(a,b),a=b.pendingProps;var e=Yf(b,H.current);ch(b,c),e=Nh(null,b,d,a,e,c);var f=Sh();return b.flags|=1,typeof e=="object"&&e!==null&&typeof e.render=="function"&&e.$$typeof===void 0?(b.tag=1,b.memoizedState=null,b.updateQueue=null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child),b;case 16:d=b.elementType;a:{switch(ij(a,b),a=b.pendingProps,e=d._init,d=e(d._payload),b.type=d,e=b.tag=Zk(d),a=Ci(d,a),e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,d,""))}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{if(kj(b),a===null)throw Error(p(387));d=b.pendingProps,f=b.memoizedState,e=f.element,lh(a,b),qh(b,d,null,c);var g=b.memoizedState;if(d=g.element,f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b),b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b),b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ig(),d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),a===null&&Eg(b),d=b.type,e=b.pendingProps,f=a!==null?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:f!==null&&Ef(d,f)&&(b.flags|=32),gj(a,b),Xi(a,b,g,c),b.child;case 6:return a===null&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,a===null?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{if(d=b.type._context,e=b.pendingProps,f=b.memoizedProps,g=e.value,G(Wg,d._currentValue),d._currentValue=g,f!==null)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,f!==null&&(f.return=b);f!==null;){var h=f.dependencies;if(h!==null){g=f.child;for(var k=h.firstContext;k!==null;){if(k.context===d){if(f.tag===1){k=mh(-1,c&-c),k.tag=2;var l=f.updateQueue;if(l!==null){l=l.shared;var m=l.pending;m===null?k.next=k:(k.next=m.next,m.next=k),l.pending=k}}f.lanes|=c,k=f.alternate,k!==null&&(k.lanes|=c),bh(f.return,c,b),h.lanes|=c;break}k=k.next}}else if(f.tag===10)g=f.type===b.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(p(341));g.lanes|=c,h=g.alternate,h!==null&&(h.lanes|=c),bh(g,c,b),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===b){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}Xi(a,b,e.children,c),b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag))};function Fk(a,b){return ac(a,b)}function $k(a,b,c,d){this.tag=a,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=b,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Zk(a){if(typeof a=="function")return aj(a)?1:0;if(a!=null){if(a=a.$$typeof,a===Da)return 11;if(a===Ga)return 14}return 2}function Pg(a,b){var c=a.alternate;return c===null?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=a.flags&14680064,c.childLanes=a.childLanes,c.lanes=a.lanes,c.child=a.child,c.memoizedProps=a.memoizedProps,c.memoizedState=a.memoizedState,c.updateQueue=a.updateQueue,b=a.dependencies,c.dependencies=b===null?null:{lanes:b.lanes,firstContext:b.firstContext},c.sibling=a.sibling,c.index=a.index,c.ref=a.ref,c}function Rg(a,b,c,d,e,f){var g=2;if(d=a,typeof a=="function")aj(a)&&(g=1);else if(typeof a=="string")g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8,e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;break a;case Ga:g=14;break a;case Ha:g=16,d=null;break a}throw Error(p(130,a==null?a:typeof a,""))}return b=Bg(g,c,b,e),b.elementType=a,b.type=d,b.lanes=f,b}function Tg(a,b,c,d){return a=Bg(7,a,d,b),a.lanes=c,a}function pj(a,b,c,d){return a=Bg(22,a,d,b),a.elementType=Ia,a.lanes=c,a.stateNode={isHidden:!1},a}function Qg(a,b,c){return a=Bg(6,a,null,b),a.lanes=c,a}function Sg(a,b,c){return b=Bg(4,a.children!==null?a.children:[],a.key,b),b.lanes=c,b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},b}function al(a,b,c,d,e){this.tag=b,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=d,this.onRecoverableError=e,this.mutableSourceEagerHydrationData=null}function bl(a,b,c,d,e,f,g,h,k){return a=new al(a,b,c,h,k),b===1?(b=1,f===!0&&(b|=8)):b=0,f=Bg(3,null,null,b),a.current=f,f.stateNode=a,f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(f),a}function cl(a,b,c){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:d==null?null:""+d,children:a,containerInfo:b,implementation:c}}function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||a.tag!==1)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(b!==null);throw Error(p(171))}if(a.tag===1){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}function el(a,b,c,d,e,f,g,h,k){return a=bl(c,d,!0,a,e,f,g,h,k),a.context=dl(null),c=a.current,d=R(),e=yi(c),f=mh(d,e),f.callback=b??null,nh(c,f,e),a.current.lanes=e,Ac(a,e,d),Dk(a,d),a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);return c=dl(c),b.context===null?b.context=c:b.pendingContext=c,b=mh(f,g),b.payload={element:a},d=d===void 0?null:d,d!==null&&(b.callback=d),a=nh(e,b,g),a!==null&&(gi(a,e,g,f),oh(a,e,g)),g}function gl(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var c=a.retryLane;a.retryLane=c!==0&&c<b?c:b}}function il(a,b){hl(a,b),(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl=typeof reportError=="function"?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(b===null)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)}),b[uf]=null}};function ml(a){this._internalRoot=a}ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&b!==0&&b<Qc[c].priority;c++);Qc.splice(c,0,a),c===0&&Vc(a)}};function nl(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function ol(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function pl(){}function ql(a,b,c,d,e){if(e){if(typeof d=="function"){var f=d;d=function(){var a2=gl(g);f.call(a2)}}var g=el(b,d,a,0,null,!1,!1,"",pl);return a._reactRootContainer=g,a[uf]=g.current,sf(a.nodeType===8?a.parentNode:a),Rk(),g}for(;e=a.lastChild;)a.removeChild(e);if(typeof d=="function"){var h=d;d=function(){var a2=gl(k);h.call(a2)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);return a._reactRootContainer=k,a[uf]=k.current,sf(a.nodeType===8?a.parentNode:a),Rk(function(){fl(b,k,c,d)}),k}function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if(typeof e=="function"){var h=e;e=function(){var a2=gl(g);h.call(a2)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);c!==0&&(Cc(b,c|1),Dk(b,B()),(K&6)===0&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b2=ih(a,1);if(b2!==null){var c2=R();gi(b2,a,1,c2)}}),il(a,1)}};Fc=function(a){if(a.tag===13){var b=ih(a,134217728);if(b!==null){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(a.tag===13){var b=yi(a),c=ih(a,b);if(c!==null){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};yb=function(a,b,c){switch(b){case"input":if(bb(a,c),b=c.name,c.type==="radio"&&b!=null){for(c=a;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]'),b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d),bb(d,e)}}}break;case"textarea":ib(a,c);break;case"select":b=c.value,b!=null&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=Zb(a),a===null?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(vl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vl.isDisabled&&vl.supportsFiber))try{kc=vl.inject(ul),lc=vl}catch{}var vl;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;exports.createPortal=function(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;return b!=null&&(b.unstable_strictMode===!0&&(c=!0),b.identifierPrefix!==void 0&&(d=b.identifierPrefix),b.onRecoverableError!==void 0&&(e=b.onRecoverableError)),b=bl(a,1,!1,null,null,c,!1,d,e),a[uf]=b.current,sf(a.nodeType===8?a.parentNode:a),new ll(b)};exports.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var b=a._reactInternals;if(b===void 0)throw typeof a.render=="function"?Error(p(188)):(a=Object.keys(a).join(","),Error(p(268,a)));return a=Zb(b),a=a===null?null:a.stateNode,a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=c!=null&&c.hydratedSources||null,e=!1,f="",g=kl;if(c!=null&&(c.unstable_strictMode===!0&&(e=!0),c.identifierPrefix!==void 0&&(f=c.identifierPrefix),c.onRecoverableError!==void 0&&(g=c.onRecoverableError)),b=el(b,null,a,1,c??null,e,!1,f,g),a[uf]=b.current,sf(a),d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),b.mutableSourceEagerHydrationData==null?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null,a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(a==null||a._reactInternals===void 0)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426"}});var require_react_dom=__commonJS({"node_modules/react-dom/index.js"(exports,module){"use strict";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}checkDCE(),module.exports=require_react_dom_production_min()}});var require_client=__commonJS({"node_modules/react-dom/client.js"(exports){"use strict";var m=require_react_dom();exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot;var i}});var import_react2=__toESM(require_react()),import_client2=__toESM(require_client());var import_react=__toESM(require_react()),import_client=__toESM(require_client());var TABS={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},DIRECT_SUBTABS={basic:"basic",templates:"templates"},TYPE_COMPONENT_OPTIONS=["children","children_error","custom"],DIRECT_TYPE_DATA_OPTIONS=["all","string","int","time","date","command"];var DEFAULT_COMMAND_CONFIGS=[{type:"default_main",title:"Default Main",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"Not Understand",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"Finish Miss",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"Default Search",supportsLlm:!0,hasModal:!0}];var escapeHtml=value=>String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),createUuid=()=>{let now=Date.now(),firstFiveDigits=String(now).slice(-5);if(globalThis.crypto?.randomUUID){let entropy=globalThis.crypto.randomUUID().replaceAll("-","").slice(0,8);return`${firstFiveDigits}_${now}_${entropy}`}return`${firstFiveDigits}_${now}_${Math.random().toString(16).slice(2,10)}`},createVoiceResponseItem=(item={})=>{let llmEnabled=!!item.llm||!!String(item.system??"").trim()||!!String(item.model??"").trim();return{id:createUuid(),type:String(item.type??item.actionType??""),voiceResponse:String(item.voiceResponse??""),llmEnabled,system:String(item.system??""),model:String(item.model??"")}},createDirectControlItem=(item={})=>({id:createUuid(),uuid:String(item.uuid??""),displayValue:String(item.displayValue??""),mappingType:String(item.mappingType??item.mapping_type??item.actionType??item.action_type??item.type??"")}),createNextActionItem=(item={})=>({id:createUuid(),actionTypeComponent:String(item.actionTypeComponent??(String(item.actionType??item.mappingType??"").trim()?"custom":"children")),actionType:String(item.actionType??item.action_type??item.mappingType??item.mapping_type??""),mappingType:String(item.mappingType??item.mapping_type??item.actionType??item.action_type??""),uuid:String(item.uuid??""),displayValue:String(item.displayValue??"")}),createDirectSubControlItem=(item={})=>({id:createUuid(),subType:String(item.subType??item.subMappingType??""),subVoiceCommands:String(item.subVoiceCommands??"")}),objectEntries=value=>(Array.isArray(value)?value:[]).filter(entry=>entry&&typeof entry=="object"),getDefaultCommandConfig=type=>DEFAULT_COMMAND_CONFIGS.find(item=>item.type===type)??DEFAULT_COMMAND_CONFIGS[0],createCommandDraft=(source=null)=>{let item=source??{},componentDialog=typeof item.componentDialog=="object"&&item.componentDialog?item.componentDialog:typeof item.subComponentDialog=="object"&&item.subComponentDialog?item.subComponentDialog:{};return{title:String(item.title??""),uuid:String(item.uuid??item.uuidDialog??""),type:String(componentDialog.actionType??""),endStatus:!!componentDialog.endStatus,forwardText:!!componentDialog.forwardText,answerType:String(componentDialog.answerType??"default"),voiceCommands:Array.isArray(componentDialog.voiceCommands)?componentDialog.voiceCommands.join("; "):String(componentDialog.voiceCommands??""),responseItems:objectEntries(componentDialog.voiceResponseArray).map(entry=>createVoiceResponseItem(entry)),directControlItems:objectEntries(componentDialog.nextDirectControl).map(entry=>createDirectControlItem(entry)),nextActionItems:objectEntries(componentDialog.nextAction).map(entry=>createNextActionItem(entry))}},createDirectCommandDraft=(source=null)=>{let item=source??{},directControl=typeof item.directControl=="object"&&item.directControl?item.directControl:{},manual=!!directControl.manual,rawSubDirectControl=directControl.subDirectControl;return{title:String(item.title??""),uuid:String(item.uuid??item.uuidDirect??""),type:String(directControl.mappingType??directControl.actionType??""),typeData:DIRECT_TYPE_DATA_OPTIONS.includes(String(directControl.valueType??directControl.typeData??"all"))?String(directControl.valueType??directControl.typeData??"all"):"all",voiceCommands:Array.isArray(directControl.voiceCommands)?directControl.voiceCommands.join("; "):String(directControl.voiceCommands??""),manual,subDirectControlItems:manual?objectEntries(rawSubDirectControl).map(entry=>createDirectSubControlItem(entry)):[],subDirectControl:manual?"":String((typeof rawSubDirectControl=="string"?rawSubDirectControl:"")||directControl.subDirectControlArray||"")}},createTemplateCommandDraft=(source=null)=>{let item=source??{};return{title:String(item.title??""),uuid:String(item.uuid??""),subDirectControlItems:objectEntries(item.subDirectControl).map(entry=>createDirectSubControlItem(entry))}},createDefaultsDraft=(type,source=null)=>{let item=source??{},config=getDefaultCommandConfig(type);return{_id:String(item._id??""),type:config.type,title:String(item.title??config.title),endStatus:!!item.endStatus,llmEnabled:config.supportsLlm?!!(item.llmEnabled??item.LLM??item.llm):!1,message:String(item.message??""),system:config.supportsLlm?String(item.system??""):"",model:config.supportsLlm?String(item.model??""):""}},createDefaultsState=()=>DEFAULT_COMMAND_CONFIGS.reduce((acc,config)=>(acc[config.type]=createDefaultsDraft(config.type),acc),{}),buildCommandPayloadFromDraft=(draft={})=>{let title=String(draft.title??"").trim(),uuid=String(draft.uuid??"").trim(),type=String(draft.type??"").trim(),answerType=String(draft.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!title)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!uuid)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!type)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let voiceResponseArray=(Array.isArray(draft.responseItems)?draft.responseItems:[]).map(item=>{let normalized={actionType:String(item.type??item.actionType??"").trim(),voiceResponse:String(item.voiceResponse??"").trim()};return item.llmEnabled&&(normalized.llm=!0,normalized.system=String(item.system??"").trim(),normalized.model=String(item.model??"").trim()),normalized}),nextDirectControl=(Array.isArray(draft.directControlItems)?draft.directControlItems:[]).map(item=>({uuid:String(item.uuid??"").trim()})).filter(item=>item.uuid),nextAction=(Array.isArray(draft.nextActionItems)?draft.nextActionItems:[]).map(item=>({actionTypeComponent:TYPE_COMPONENT_OPTIONS.includes(String(item.actionTypeComponent??"").trim())?String(item.actionTypeComponent??"").trim():"children",actionType:String(item.actionType??item.mappingType??"").trim(),uuid:String(item.uuid??"").trim()})).filter(item=>item.uuid).map(item=>item.actionTypeComponent==="custom"?item:{...item,actionType:""}),dialogPayload={endStatus:!!draft.endStatus,actionType:type,forwardText:!!draft.forwardText,answerType,voiceCommands:String(draft.voiceCommands??"").split(";").map(s=>s.trim()).filter(s=>s),nextDirectControl,voiceResponseArray,nextAction};return{title,uuid,componentDialog:dialogPayload,subComponentDialog:dialogPayload}},buildDirectPayloadFromDraft=(draft={})=>{let title=String(draft.title??"").trim(),uuid=String(draft.uuid??"").trim(),type=String(draft.type??draft.mappingType??"").trim(),typeData=DIRECT_TYPE_DATA_OPTIONS.includes(String(draft.typeData??"all"))?String(draft.typeData??"all"):"all",manual=!!draft.manual;if(!title)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!uuid)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!type)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let payload={title,uuid,directControl:{mappingType:type,valueType:typeData}};if(typeData==="command"){let voiceCommandsRaw=String(draft.voiceCommands??"").trim();payload.directControl.voiceCommands=voiceCommandsRaw?voiceCommandsRaw.split(";").map(s=>s.trim()).filter(s=>s):null,payload.directControl.manual=manual,manual?payload.directControl.subDirectControl=(Array.isArray(draft.subDirectControlItems)?draft.subDirectControlItems:[]).map((item,index)=>{let subType=String(item.subType??item.subMappingType??"").trim(),subVoiceCommandsRaw=String(item.subVoiceCommands??"").trim();return{id:Number(item.id)||index+1,subMappingType:subType||null,title:null,subVoiceCommands:subVoiceCommandsRaw||null}}).filter(item=>item.subMappingType||item.subVoiceCommands):payload.directControl.subDirectControl=String(draft.subDirectControl??"").trim()}return payload},buildTemplatePayloadFromDraft=(draft={})=>{let title=String(draft.title??"").trim();if(!title)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let uuid=String(draft.uuid??"").trim();if(uuid||(uuid=createUuid()),!uuid)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title,uuid,subDirectControl:(Array.isArray(draft.subDirectControlItems)?draft.subDirectControlItems:[]).map((item,index)=>{let subType=String(item.subType??item.subMappingType??"").trim(),subVoiceCommandsRaw=String(item.subVoiceCommands??"").trim();return{id:Number(item.id)||index+1,subMappingType:subType||null,title:null,subVoiceCommands:subVoiceCommandsRaw||null}}).filter(item=>item.subMappingType||item.subVoiceCommands)}},buildDefaultsPayloadFromDraft=(type,draft={})=>{let config=getDefaultCommandConfig(type),payload={actionType:config.type,title:String(draft.title??config.title).trim()||config.title,endStatus:!!draft.endStatus,message:String(draft.message??"").trim()||null};return config.supportsLlm&&(payload.LLM=!!draft.llmEnabled,payload.llm=payload.LLM,payload.system=payload.LLM&&String(draft.system??"").trim()||null,payload.model=payload.LLM&&String(draft.model??"").trim()||null),payload};var renderCommandsTab=(ctx,tabKey)=>{let isSecondaryTab=tabKey===TABS.secondary,activePage=ctx._pageByTab[tabKey]||1,activeTotal=ctx._totalByTab[tabKey]||0,activeTotalPages=ctx._totalPagesByTab[tabKey]||1,tabTitle=isSecondaryTab?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",queryHint="/api/cms/commands?page=1&pageSize=20",totalPages=Math.max(1,activeTotalPages||Math.ceil((activeTotal||1)/20)),paginationItems=ctx._buildPaginationItems(activePage,totalPages),listMarkup=ctx._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':ctx._commands.length?ctx._commands.map(item=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit" data-command-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.componentDialog?.actionType||item.subComponentDialog?.actionType||item.componentDialog?.type||item.subComponentDialog?.type||"actionType: -")}</span>
                <span>${escapeHtml(item.uuid||item.uuidDialog||"uuid: -")}</span>
                <span>${item.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="command"
              data-item-id="${escapeHtml(item._id)}"
              data-item-title="${escapeHtml(item.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
              data-item-collection="${isSecondaryTab?"sub-commands":"commands"}"
              data-item-status="${item.status?"true":"false"}"
              aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
              title="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
            >...</button>
          </div>
        `).join(""):'<div class="empty">\u041A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
    <section class="hero-card">
      <h2>${tabTitle}</h2>
      <p>\u0417\u0430\u043F\u0440\u043E\u0441: <code>${queryHint}</code></p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload" ${ctx._loading?"disabled":""}>${ctx._loading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        <button type="button" class="primary" data-action="create">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
      </div>
    </section>
    <section class="help-card command-list">
      ${listMarkup}
      <div class="command-pagination">
        <button type="button" class="ghost" data-action="prev" ${activePage<=1||ctx._loading?"disabled":""}>&lt;</button>
        <div class="pagination-pages">
          ${paginationItems.map(item=>item==="ellipsis"?'<span class="pagination-ellipsis">...</span>':`<button type="button" class="ghost pagination-page ${item===activePage?"active":""}" data-action="goto-page" data-page="${item}" ${ctx._loading?"disabled":""}>${item}</button>`).join("")}
        </div>
        <button type="button" class="ghost" data-action="next" ${activePage>=totalPages||ctx._loading?"disabled":""}>&gt;</button>
      </div>
    </section>
  `};var renderPrimaryCommandsPage=ctx=>renderCommandsTab(ctx,TABS.primary);var renderSecondaryCommandsPage=ctx=>renderCommandsTab(ctx,TABS.secondary);var renderDirectBasicSection=(ctx,listMarkup)=>`
  <section class="hero-card">
    <h3>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</h3>
    <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-direct" ${ctx._directLoading?"disabled":""}>${ctx._directLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      <button type="button" class="primary" data-action="create-direct">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
    </div>
    ${ctx._directError?`<div class="status error">${escapeHtml(ctx._directError)}</div>`:""}
  </section>
  <section class="help-card command-list">
    ${listMarkup}
  </section>
`,renderDirectTemplatesSection=(ctx,templateListMarkup)=>`
  <section class="hero-card">
    <h3>\u0428\u0430\u0431\u043B\u043E\u043D\u044B</h3>
    <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430\u043C\u0438 subDirectControl.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-template" ${ctx._templateLoading?"disabled":""}>${ctx._templateLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      <button type="button" class="primary" data-action="create-template">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
    </div>
    ${ctx._templateError?`<div class="status error">${escapeHtml(ctx._templateError)}</div>`:""}
  </section>
  <section class="help-card command-list">
    ${templateListMarkup}
  </section>
`,renderDirectCommandsTab=ctx=>{let listMarkup=ctx._directLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434...</div>':ctx._directCommands.length?ctx._directCommands.map(item=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit-direct" data-direct-id="${escapeHtml(item._id)}">
              <span class="command-item-title">${escapeHtml(item.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${escapeHtml(item.directControl?.mappingType||item.directControl?.actionType||item.directControl?.type||"actionType: -")}</span>
                <span>${escapeHtml(item.uuid||item.uuidDirect||"uuid: -")}</span>
                <span>${escapeHtml(item.directControl?.valueType||item.directControl?.typeData||"typeData: -")}</span>
                <span>${item.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="direct"
              data-item-id="${escapeHtml(item._id)}"
              data-item-title="${escapeHtml(item.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
              data-item-status="${item.status?"true":"false"}"
              aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
              title="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
            >...</button>
          </div>
        `).join(""):'<div class="empty">Direct-\u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>',templateListMarkup=ctx._templateLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432...</div>':ctx._templateCommands.length?ctx._templateCommands.map(item=>`
          <button type="button" class="command-item-main" data-action="edit-template" data-template-id="${escapeHtml(item._id)}">
            <span class="command-item-title">${escapeHtml(item.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
            <span class="command-item-meta">
              <span>subDirectControl: ${Array.isArray(item.subDirectControl)?item.subDirectControl.length:0}</span>
            </span>
          </button>
        `).join(""):'<div class="empty">\u0428\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
    <section class="hero-card">
      <h2>\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</h2>
      <div class="inner-subtabs">
        <button type="button" class="subtab-button ${ctx._directSubtab===DIRECT_SUBTABS.basic?"active":""}" data-direct-subtab="${DIRECT_SUBTABS.basic}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</button>
        <button type="button" class="subtab-button ${ctx._directSubtab===DIRECT_SUBTABS.templates?"active":""}" data-direct-subtab="${DIRECT_SUBTABS.templates}">\u0428\u0430\u0431\u043B\u043E\u043D\u044B</button>
      </div>
    </section>
    ${ctx._directSubtab===DIRECT_SUBTABS.basic?renderDirectBasicSection(ctx,listMarkup):renderDirectTemplatesSection(ctx,templateListMarkup)}
  `};var renderDefaultsTab=ctx=>{let listMarkup=DEFAULT_COMMAND_CONFIGS.map((config,index)=>{let draft=ctx._defaultsByType[config.type]??ctx._newDefaultsDraft(config.type),displayTitle=String(draft.title||config.title||config.type).trim(),metaParts=[`actionType: ${config.type}`,`endStatus: ${draft.endStatus?"on":"off"}`];return config.supportsLlm&&metaParts.push(`LLM: ${draft.llmEnabled?"on":"off"}`),`
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${escapeHtml(config.type)}" ${ctx._defaultsLoading?"disabled":""}>
        <span class="command-item-title">${index+1}. ${escapeHtml(displayTitle)}</span>
        <span class="command-item-meta">
          ${metaParts.map(part=>`<span>${escapeHtml(part)}</span>`).join("")}
        </span>
      </button>
    `}).join("");return`
    <section class="hero-card">
      <h2>\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</h2>
      <p>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438, \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload-defaults" ${ctx._defaultsLoading?"disabled":""}>${ctx._defaultsLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      </div>
      ${ctx._defaultsError?`<div class="status error">${escapeHtml(ctx._defaultsError)}</div>`:""}
    </section>
    <section class="help-card command-list">
      ${listMarkup}
    </section>
  `};var renderStub=(title,description)=>`
  <section class="hero-card">
    <h2>${escapeHtml(title)}</h2>
    <p>${escapeHtml(description)}</p>
  </section>
  <section class="help-card">
    <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
  </section>
`;var renderActiveTabBody=ctx=>ctx._tab===TABS.primary?renderPrimaryCommandsPage(ctx):ctx._tab===TABS.secondary?renderSecondaryCommandsPage(ctx):ctx._tab===TABS.direct?renderDirectCommandsTab(ctx):renderDefaultsTab(ctx);var openCreateModal=ctx=>{ctx._addModalBackdrop(),ctx._modalOpen=!0,ctx._modalMode="create",ctx._editingId="",ctx._draft=ctx._newDraft(),ctx._openResponseItemIds=new Set,ctx._openDirectControlItemIds=new Set,ctx._openNextActionItemIds=new Set,ctx._error="",ctx._render()},openEditModal=(ctx,commandId)=>{ctx._addModalBackdrop();let item=ctx._commands.find(command=>String(command._id??"")===String(commandId??""));if(!item){ctx._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",ctx._render();return}ctx._modalOpen=!0,ctx._modalMode="edit",ctx._editingId=String(item._id??""),ctx._editingStatus=!!item.status,ctx._draft=ctx._newDraft(item),ctx._openResponseItemIds=new Set,ctx._openDirectControlItemIds=new Set,ctx._openNextActionItemIds=new Set,ctx._error="",ctx._render(),ctx._hydrateDirectControlTitles(),ctx._hydrateNextActionTitles()},closeModal=ctx=>{ctx._modalSaving||(ctx._removeModalBackdrop(),ctx._modalOpen=!1,ctx._modalMode="create",ctx._editingId="",ctx._editingStatus=!1,ctx._openResponseItemIds=new Set,ctx._openDirectControlItemIds=new Set,ctx._openNextActionItemIds=new Set,(ctx._modalMode!=="create"||ctx._editingId||ctx._draft?.title||ctx._draft?.message)&&(ctx._draft=ctx._newDraft()),ctx._render())},saveModal=async ctx=>{let activeElement=ctx.shadowRoot?.activeElement;if(activeElement instanceof HTMLElement&&typeof activeElement.blur=="function"&&activeElement.blur(),!ctx._apiUrl("")){ctx._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}let payload;try{payload=ctx._buildPayload()}catch(error){ctx._error=error?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",ctx._render();return}let isEdit=ctx._modalMode==="edit"&&ctx._editingId;!isEdit&&!ctx._isCurrentUserAdmin()&&(payload.account=ctx._getCurrentUserId());let collection=ctx._tab===TABS.secondary?"sub-commands":"commands",url=isEdit?ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._editingId)}`):ctx._apiUrl(`/api/cms/${collection}`),method=isEdit?"PUT":"POST";ctx._modalSaving=!0,ctx._error="",ctx._render();try{let response=await fetch(url,{method,headers:ctx._apiHeaders(!0),body:JSON.stringify(payload)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${response.status}`);ctx._status=isEdit?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",ctx._removeModalBackdrop(),ctx._modalOpen=!1,ctx._modalMode="create",ctx._editingId="",ctx._editingStatus=!1,ctx._draft=ctx._newDraft(),await ctx._loadPage(ctx._pageByTab[ctx._tab]||1)}catch(error){ctx._error=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",ctx._render()}finally{ctx._modalSaving=!1,ctx._render()}},deleteModal=async ctx=>{if(!ctx._editingId||!confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439?"))return;let collection=ctx._tab===TABS.secondary?"sub-commands":"commands";ctx._modalSaving=!0,ctx._error="",ctx._render();try{await ctx._deleteItem(collection,ctx._editingId),ctx._commands=ctx._commands.filter(item=>String(item._id??"")!==String(ctx._editingId)),ctx._status="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",ctx._removeModalBackdrop(),ctx._modalOpen=!1,ctx._modalMode="create",ctx._editingId="",ctx._editingStatus=!1,ctx._draft=ctx._newDraft()}catch(error){ctx._error=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."}finally{ctx._modalSaving=!1,ctx._render()}};var refreshUuid=ctx=>{ctx._updateDraft("uuid",createUuid()),ctx._render()},addVoiceResponseItem=ctx=>{let nextItems=Array.isArray(ctx._draft.responseItems)?ctx._draft.responseItems:[],newItem=createVoiceResponseItem();ctx._draft={...ctx._draft,responseItems:[...nextItems,newItem]},ctx._openResponseItemIds.add(newItem.id),ctx._render()},removeVoiceResponseItem=(ctx,itemId)=>{let nextItems=(Array.isArray(ctx._draft.responseItems)?ctx._draft.responseItems:[]).filter(item=>item.id!==itemId);ctx._draft={...ctx._draft,responseItems:nextItems},ctx._openResponseItemIds=new Set([...ctx._openResponseItemIds].filter(id=>ctx._draft.responseItems.some(item=>item.id===id))),ctx._render()},updateVoiceResponseItem=(ctx,itemId,field,value)=>{let nextItems=(Array.isArray(ctx._draft.responseItems)?ctx._draft.responseItems:[]).map(item=>item.id!==itemId?item:{...item,[field]:value});ctx._draft={...ctx._draft,responseItems:nextItems}},toggleResponseItem=(ctx,itemId)=>{ctx._openResponseItemIds.has(itemId)?ctx._openResponseItemIds.delete(itemId):ctx._openResponseItemIds.add(itemId),ctx._render()},addDirectControlItem=ctx=>{let nextItems=Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[],newItem=createDirectControlItem();ctx._draft={...ctx._draft,directControlItems:[...nextItems,newItem]},ctx._openDirectControlItemIds.add(newItem.id),ctx._render()},removeDirectControlItem=(ctx,itemId)=>{let nextItems=(Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[]).filter(item=>item.id!==itemId);ctx._draft={...ctx._draft,directControlItems:nextItems},ctx._openDirectControlItemIds=new Set([...ctx._openDirectControlItemIds].filter(id=>nextItems.some(item=>item.id===id))),ctx._render()},updateDirectControlItem=(ctx,itemId,value,triggerSearch=!0)=>{let normalizedItemId=String(itemId??"").trim(),nextItems=(Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[]).map(item=>{if(item.id!==normalizedItemId)return item;let selectedMeta=ctx._lastSelectedDirectControlUuid;if(selectedMeta&&selectedMeta.itemId===normalizedItemId&&Date.now()-Number(selectedMeta.at??0)<1e3&&String(value??"").trim()!==String(selectedMeta.uuid??"").trim())return item;let nextUuid=String(value??""),nextTrimmedUuid=nextUuid.trim(),currentTrimmedUuid=String(item.uuid??"").trim();return{...item,uuid:nextUuid,displayValue:nextTrimmedUuid&&nextTrimmedUuid===currentTrimmedUuid?item.displayValue:"",mappingType:nextTrimmedUuid&&nextTrimmedUuid===currentTrimmedUuid?item.mappingType:""}});ctx._draft={...ctx._draft,directControlItems:nextItems},triggerSearch&&value.length>0&&ctx._debouncedPerformUuidSearch(value,"directControl",normalizedItemId),ctx._lastSelectedDirectControlUuid?.itemId===normalizedItemId&&(ctx._lastSelectedDirectControlUuid=null)},toggleDirectControlItem=(ctx,itemId)=>{ctx._openDirectControlItemIds.has(itemId)?ctx._openDirectControlItemIds.delete(itemId):ctx._openDirectControlItemIds.add(itemId),ctx._render()},addNextActionItem=ctx=>{let nextItems=Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[],newItem=createNextActionItem();ctx._draft={...ctx._draft,nextActionItems:[...nextItems,newItem]},ctx._openNextActionItemIds.add(newItem.id),ctx._render()},removeNextActionItem=(ctx,itemId)=>{let nextItems=(Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[]).filter(item=>item.id!==itemId);ctx._draft={...ctx._draft,nextActionItems:nextItems},ctx._openNextActionItemIds=new Set([...ctx._openNextActionItemIds].filter(id=>nextItems.some(item=>item.id===id))),ctx._render()},updateNextActionItem=(ctx,itemId,field,value,rerender=!0,triggerSearch=!0)=>{let normalizedItemId=String(itemId??"").trim(),nextItems=(Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[]).map(item=>{if(item.id!==normalizedItemId)return item;if(field==="uuid"){let selectedMeta=ctx._lastSelectedNextActionUuid;if(selectedMeta&&selectedMeta.itemId===normalizedItemId&&Date.now()-Number(selectedMeta.at??0)<1e3&&String(value??"").trim()!==String(selectedMeta.uuid??"").trim())return item;let nextUuid=String(value??""),nextTrimmedUuid=nextUuid.trim(),currentTrimmedUuid=String(item.uuid??"").trim();return{...item,uuid:nextUuid,displayValue:nextTrimmedUuid&&nextTrimmedUuid===currentTrimmedUuid?item.displayValue:"",mappingType:nextTrimmedUuid&&nextTrimmedUuid===currentTrimmedUuid?item.mappingType:"",actionType:nextTrimmedUuid&&nextTrimmedUuid===currentTrimmedUuid?item.actionType:""}}if(field==="actionTypeComponent"){let nextComponent=String(value??"").trim();return nextComponent==="custom"?{...item,actionTypeComponent:nextComponent}:{...item,actionTypeComponent:nextComponent,actionType:""}}return{...item,[field]:value}});ctx._draft={...ctx._draft,nextActionItems:nextItems},(rerender||field==="actionTypeComponent")&&ctx._render(),triggerSearch&&field==="uuid"&&value.length>0&&ctx._debouncedPerformUuidSearch(value,"nextAction",normalizedItemId),field==="uuid"&&ctx._lastSelectedNextActionUuid?.itemId===normalizedItemId&&(ctx._lastSelectedNextActionUuid=null)},toggleNextActionItem=(ctx,itemId)=>{ctx._openNextActionItemIds.has(itemId)?ctx._openNextActionItemIds.delete(itemId):ctx._openNextActionItemIds.add(itemId),ctx._render()};var openItemActionsModal=(ctx,{kind,id,title,collection,status})=>{id&&(ctx._addModalBackdrop(),ctx._itemActionsModalOpen=!0,ctx._itemActionsSaving=!1,ctx._itemActionsKind=String(kind??""),ctx._itemActionsId=String(id??""),ctx._itemActionsTitle=String(title??"").trim(),ctx._itemActionsCollection=String(collection??""),ctx._itemActionsStatus=!!status,ctx._render())},closeItemActionsModal=ctx=>{ctx._itemActionsSaving||(ctx._removeModalBackdrop(),ctx._itemActionsModalOpen=!1,ctx._itemActionsSaving=!1,ctx._itemActionsKind="",ctx._itemActionsId="",ctx._itemActionsTitle="",ctx._itemActionsCollection="",ctx._itemActionsStatus=!1,ctx._render())},updateCommandStatusById=async(ctx,commandId,collection,nextStatus)=>{let item=ctx._commands.find(command=>String(command._id??"")===String(commandId??""));if(!item)throw new Error("\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let draft=ctx._newDraft(item),payload=buildCommandPayloadFromDraft(draft);collection==="sub-commands"?delete payload.componentDialog:delete payload.subComponentDialog,payload.status=!!nextStatus;let url=ctx._apiUrl(`/api/cms/${encodeURIComponent(collection)}/${encodeURIComponent(commandId)}`),response=await fetch(url,{method:"PUT",headers:ctx._apiHeaders(!0),body:JSON.stringify(payload)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430: HTTP ${response.status}`);ctx._commands=ctx._commands.map(command=>String(command._id??"")===String(commandId??"")?{...command,status:!!nextStatus}:command),String(ctx._editingId??"")===String(commandId??"")&&(ctx._editingStatus=!!nextStatus)},updateDirectStatusById=async(ctx,directId,nextStatus)=>{let item=ctx._directCommands.find(command=>String(command._id??"")===String(directId??""));if(!item)throw new Error("Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let draft=ctx._newDirectDraft(item),payload={...buildDirectPayloadFromDraft(draft),status:!!nextStatus},url=ctx._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(directId)}`),response=await fetch(url,{method:"PUT",headers:ctx._apiHeaders(!0),body:JSON.stringify(payload)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${response.status}`);ctx._directCommands=ctx._directCommands.map(command=>String(command._id??"")===String(directId??"")?{...command,status:!!nextStatus}:command),String(ctx._directEditingId??"")===String(directId??"")&&(ctx._directEditingStatus=!!nextStatus)},applyItemStatus=async ctx=>{if(ctx._itemActionsSaving||!ctx._itemActionsId)return;let nextStatus=!ctx._itemActionsStatus;ctx._itemActionsSaving=!0,ctx._error="",ctx._directError="",ctx._render();try{if(ctx._itemActionsKind==="command")await ctx._updateCommandStatusById(ctx._itemActionsId,ctx._itemActionsCollection||"commands",nextStatus);else if(ctx._itemActionsKind==="direct")await ctx._updateDirectStatusById(ctx._itemActionsId,nextStatus);else throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.");ctx._itemActionsStatus=nextStatus,ctx._status=nextStatus?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442.",ctx._itemActionsSaving=!1,ctx._closeItemActionsModal()}catch(error){ctx._itemActionsKind==="direct"?ctx._directError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.":ctx._error=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.",ctx._itemActionsSaving=!1,ctx._render()}},toggleEditModalStatus=async ctx=>{if(!(ctx._modalSaving||!ctx._editingId)){ctx._modalSaving=!0,ctx._error="",ctx._render();try{let nextStatus=!ctx._editingStatus,collection=ctx._tab===TABS.secondary?"sub-commands":"commands";await ctx._updateCommandStatusById(ctx._editingId,collection,nextStatus),ctx._editingStatus=nextStatus,ctx._status=nextStatus?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442."}catch(error){ctx._error=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."}finally{ctx._modalSaving=!1,ctx._render()}}};var setDirectSubtab=(ctx,subtab)=>{ctx._directSubtab=subtab,ctx._directError="",subtab===DIRECT_SUBTABS.basic&&!ctx._directCommands.length&&!ctx._directLoading?ctx._loadDirectCommands():subtab===DIRECT_SUBTABS.templates&&!ctx._templateCommands.length&&!ctx._templateLoading&&ctx._loadTemplateCommands(),ctx._render()},loadDirectCommands=async ctx=>{let url=ctx._apiUrl("/api/cms/sub-direct-controls?page=1&pageSize="+20);if(!url){ctx._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}ctx._directLoading=!0,ctx._directError="",ctx._render();try{let response=await fetch(url,{method:"GET",headers:ctx._apiHeaders(!1)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${response.status}`);let result=await response.json(),data=Array.isArray(result.data)?result.data:[];ctx._directCommands=data,ctx._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${data.length}.`}catch(error){ctx._directCommands=[],ctx._directError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{ctx._directLoading=!1,ctx._render()}},loadTemplateCommands=async ctx=>{let url=ctx._apiUrl("/api/cms/sub-direct-controls-sample?page=1&pageSize="+20);if(!url){ctx._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}ctx._templateLoading=!0,ctx._templateError="",ctx._render();try{let response=await fetch(url,{method:"GET",headers:ctx._apiHeaders(!1)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432: HTTP ${response.status}`);let result=await response.json(),data=Array.isArray(result.data)?result.data:[];ctx._templateCommands=data,ctx._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${data.length}.`}catch(error){ctx._templateCommands=[],ctx._templateError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B."}finally{ctx._templateLoading=!1,ctx._render()}},reloadDirectCommands=ctx=>{ctx._directLoading||(ctx._directCommands=[],ctx._loadDirectCommands())},reloadTemplateCommands=ctx=>{ctx._templateLoading||(ctx._templateCommands=[],ctx._loadTemplateCommands())},openCreateDirectModal=ctx=>{ctx._addModalBackdrop(),ctx._directModalOpen=!0,ctx._directModalMode="create",ctx._directEditingId="",ctx._directDraft=ctx._newDirectDraft(),ctx._openDirectSubControlItemIds=new Set,ctx._directError="",ctx._render()},openEditDirectModal=(ctx,commandId)=>{ctx._addModalBackdrop();let item=ctx._directCommands.find(command=>String(command._id??"")===String(commandId??""));if(!item){ctx._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",ctx._render();return}ctx._directModalOpen=!0,ctx._directModalMode="edit",ctx._directEditingId=String(item._id??""),ctx._directEditingStatus=!!item.status,ctx._directDraft=ctx._newDirectDraft(item),ctx._openDirectSubControlItemIds=new Set,ctx._directError="",ctx._render(),ctx._hydrateSelectedSubDirectControlSample()},closeDirectModal=ctx=>{ctx._directModalSaving||(ctx._removeModalBackdrop(),ctx._directModalOpen=!1,ctx._directModalMode="create",ctx._directEditingId="",ctx._directEditingStatus=!1,ctx._openDirectSubControlItemIds=new Set,ctx._directDraft=ctx._newDirectDraft(),ctx._searchResults=[],ctx._searchActiveItemId=null,ctx._searchActiveType=null,ctx._subDirectControlSampleOptions=[],ctx._render())},updateDirectDraft=(ctx,field,value)=>{ctx._directDraft={...ctx._directDraft,[field]:value}},hydrateSelectedSubDirectControlSample=async ctx=>{let isCommandType=ctx._directDraft.typeData==="command",isManual=!!ctx._directDraft.manual,selectedUuid=String(ctx._directDraft.subDirectControl??"").trim();if(!isCommandType||isManual||!selectedUuid||(Array.isArray(ctx._subDirectControlSampleOptions)?ctx._subDirectControlSampleOptions:[]).some(item=>String(item?.uuid??"").trim()===selectedUuid))return;let selected=(await ctx._searchUuid(selectedUuid,["sub-direct-controls-sample"])).find(item=>String(item?.uuid??"").trim()===selectedUuid);if(!selected)return;let option={...selected,uuid:String(selected.uuid??"").trim(),title:String(selected.title??"").trim()};ctx._subDirectControlSampleOptions=[option,...Array.isArray(ctx._subDirectControlSampleOptions)?ctx._subDirectControlSampleOptions:[]],ctx._render()},refreshDirectUuid=ctx=>{ctx._updateDirectDraft("uuid",createUuid()),ctx._render()},refreshTemplateUuid=ctx=>{ctx._updateTemplateDraft("uuid",createUuid()),ctx._render()},addDirectSubControlItem=ctx=>{let nextItems=Array.isArray(ctx._directDraft.subDirectControlItems)?ctx._directDraft.subDirectControlItems:[],newItem=createDirectSubControlItem();ctx._directDraft={...ctx._directDraft,subDirectControlItems:[...nextItems,newItem]},ctx._openDirectSubControlItemIds.add(newItem.id),ctx._render()},removeDirectSubControlItem=(ctx,itemId)=>{let nextItems=(Array.isArray(ctx._directDraft.subDirectControlItems)?ctx._directDraft.subDirectControlItems:[]).filter(item=>item.id!==itemId);ctx._directDraft={...ctx._directDraft,subDirectControlItems:nextItems},ctx._openDirectSubControlItemIds=new Set([...ctx._openDirectSubControlItemIds].filter(id=>nextItems.some(item=>item.id===id))),ctx._render()},toggleDirectSubControlItem=(ctx,itemId)=>{ctx._openDirectSubControlItemIds.has(itemId)?ctx._openDirectSubControlItemIds.delete(itemId):ctx._openDirectSubControlItemIds.add(itemId),ctx._render()},updateDirectSubControlItem=(ctx,itemId,field,value)=>{let nextItems=(Array.isArray(ctx._directDraft.subDirectControlItems)?ctx._directDraft.subDirectControlItems:[]).map(item=>item.id===itemId?{...item,[field]:value}:item);ctx._directDraft={...ctx._directDraft,subDirectControlItems:nextItems}},loadSubDirectControlSamples=async ctx=>{if(!ctx._searchLoading){ctx._searchLoading=!0,ctx._searchActiveType="subDirectControlSample",ctx._searchActiveItemId=null,ctx._render();try{let results=await ctx._searchUuid("",["sub-direct-controls-sample"]);ctx._subDirectControlSampleOptions=results}catch{ctx._subDirectControlSampleOptions=[]}finally{ctx._searchLoading=!1,ctx._render()}}},toggleDirectEditModalStatus=async ctx=>{if(!(ctx._directModalSaving||!ctx._directEditingId)){ctx._directModalSaving=!0,ctx._directError="",ctx._render();try{let nextStatus=!ctx._directEditingStatus;await ctx._updateDirectStatusById(ctx._directEditingId,nextStatus),ctx._directEditingStatus=nextStatus,ctx._status=nextStatus?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043A\u0440\u044B\u0442\u0430."}catch(error){ctx._directError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{ctx._directModalSaving=!1,ctx._render()}}},saveDirectModal=async ctx=>{if(!ctx._apiUrl("")){ctx._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}let payload;try{payload=ctx._buildDirectPayload()}catch(error){ctx._directError=error?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",ctx._render();return}ctx._directModalSaving=!0,ctx._directError="",ctx._render();try{let isEdit=ctx._directModalMode==="edit"&&ctx._directEditingId,collection="sub-direct-controls",url=isEdit?ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._directEditingId)}`):ctx._apiUrl(`/api/cms/${collection}`),response=await fetch(url,{method:isEdit?"PUT":"POST",headers:ctx._apiHeaders(!0),body:JSON.stringify(payload)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${response.status}`);let result=await response.json().catch(()=>null),savedItem=result?.data&&typeof result.data=="object"?result.data:result&&typeof result=="object"?result:null;if(isEdit)ctx._directCommands=ctx._directCommands.map(item=>String(item._id??"")===String(ctx._directEditingId)?{...item,...savedItem&&typeof savedItem=="object"?savedItem:payload,_id:ctx._directEditingId}:item);else{let tempId=String(savedItem?._id??savedItem?.id??payload.uuid??payload.uuidDirect??Date.now());ctx._directCommands=[{...savedItem&&typeof savedItem=="object"?savedItem:payload,_id:tempId},...ctx._directCommands]}await ctx._loadDirectCommands(),ctx._status=isEdit?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",ctx._removeModalBackdrop(),ctx._directModalOpen=!1,ctx._directModalMode="create",ctx._directEditingId="",ctx._directEditingStatus=!1,ctx._openDirectSubControlItemIds=new Set,ctx._directDraft=ctx._newDirectDraft()}catch(error){ctx._directError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{ctx._directModalSaving=!1,ctx._render()}},deleteDirectModal=async ctx=>{if(ctx._directEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443?")){ctx._directModalSaving=!0,ctx._directError="",ctx._render();try{await ctx._deleteItem("sub-direct-controls",ctx._directEditingId),ctx._directCommands=ctx._directCommands.filter(item=>String(item._id??"")!==String(ctx._directEditingId)),ctx._status="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",ctx._removeModalBackdrop(),ctx._directModalOpen=!1,ctx._directModalMode="create",ctx._directEditingId="",ctx._directEditingStatus=!1,ctx._openDirectSubControlItemIds=new Set,ctx._directDraft=ctx._newDirectDraft()}catch(error){ctx._directError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{ctx._directModalSaving=!1,ctx._render()}}},openCreateTemplateModal=ctx=>{ctx._addModalBackdrop(),ctx._templateModalOpen=!0,ctx._templateModalMode="create",ctx._templateEditingId="",ctx._templateDraft=ctx._newTemplateDraft(),ctx._openTemplateSubControlItemIds=new Set,ctx._templateError="",ctx._render()},openEditTemplateModal=(ctx,templateId)=>{ctx._addModalBackdrop();let item=ctx._templateCommands.find(command=>String(command._id??"")===String(templateId??""));if(!item){ctx._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",ctx._render();return}ctx._templateModalOpen=!0,ctx._templateModalMode="edit",ctx._templateEditingId=String(item._id??""),ctx._templateDraft=ctx._newTemplateDraft(item),ctx._openTemplateSubControlItemIds=new Set,ctx._templateError="",ctx._render()},closeTemplateModal=ctx=>{ctx._templateModalSaving||(ctx._removeModalBackdrop(),ctx._templateModalOpen=!1,ctx._templateModalMode="create",ctx._templateEditingId="",ctx._openTemplateSubControlItemIds=new Set,ctx._templateDraft=ctx._newTemplateDraft(),ctx._render())},updateTemplateDraft=(ctx,field,value)=>{ctx._templateDraft={...ctx._templateDraft,[field]:value}},addTemplateSubControlItem=ctx=>{let nextItems=Array.isArray(ctx._templateDraft.subDirectControlItems)?ctx._templateDraft.subDirectControlItems:[],newItem=createDirectSubControlItem();ctx._templateDraft={...ctx._templateDraft,subDirectControlItems:[...nextItems,newItem]},ctx._openTemplateSubControlItemIds.add(newItem.id),ctx._render()},removeTemplateSubControlItem=(ctx,itemId)=>{let nextItems=(Array.isArray(ctx._templateDraft.subDirectControlItems)?ctx._templateDraft.subDirectControlItems:[]).filter(item=>item.id!==itemId);ctx._templateDraft={...ctx._templateDraft,subDirectControlItems:nextItems},ctx._openTemplateSubControlItemIds=new Set([...ctx._openTemplateSubControlItemIds].filter(id=>nextItems.some(item=>item.id===id))),ctx._render()},toggleTemplateSubControlItem=(ctx,itemId)=>{ctx._openTemplateSubControlItemIds.has(itemId)?ctx._openTemplateSubControlItemIds.delete(itemId):ctx._openTemplateSubControlItemIds.add(itemId),ctx._render()},updateTemplateSubControlItem=(ctx,itemId,field,value)=>{let nextItems=(Array.isArray(ctx._templateDraft.subDirectControlItems)?ctx._templateDraft.subDirectControlItems:[]).map(item=>item.id===itemId?{...item,[field]:value}:item);ctx._templateDraft={...ctx._templateDraft,subDirectControlItems:nextItems}},saveTemplateModal=async ctx=>{if(!ctx._apiUrl("")){ctx._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}let payload;try{payload=ctx._buildTemplatePayload()}catch(error){ctx._templateError=error?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",ctx._render();return}ctx._templateModalSaving=!0,ctx._templateError="",ctx._render();try{let isEdit=ctx._templateModalMode==="edit"&&ctx._templateEditingId,collection="sub-direct-controls-sample",url=isEdit?ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._templateEditingId)}`):ctx._apiUrl(`/api/cms/${collection}`),response=await fetch(url,{method:isEdit?"PUT":"POST",headers:ctx._apiHeaders(!0),body:JSON.stringify(payload)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430: HTTP ${response.status}`);let result=await response.json().catch(()=>null),savedItem=result?.data&&typeof result.data=="object"?result.data:result&&typeof result=="object"?result:null;if(isEdit)ctx._templateCommands=ctx._templateCommands.map(item=>String(item._id??"")===String(ctx._templateEditingId)?{...item,...savedItem&&typeof savedItem=="object"?savedItem:payload,_id:ctx._templateEditingId}:item);else{let tempId=String(savedItem?._id??savedItem?.id??payload.uuid??Date.now());ctx._templateCommands=[{...savedItem&&typeof savedItem=="object"?savedItem:payload,_id:tempId},...ctx._templateCommands]}await ctx._loadTemplateCommands(),ctx._status=isEdit?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",ctx._removeModalBackdrop(),ctx._templateModalOpen=!1,ctx._templateModalMode="create",ctx._templateEditingId="",ctx._openTemplateSubControlItemIds=new Set,ctx._templateDraft=ctx._newTemplateDraft()}catch(error){ctx._templateError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{ctx._templateModalSaving=!1,ctx._render()}},deleteTemplateModal=async ctx=>{if(ctx._templateEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D?")){ctx._templateModalSaving=!0,ctx._templateError="",ctx._render();try{await ctx._deleteItem("sub-direct-controls-sample",ctx._templateEditingId),ctx._templateCommands=ctx._templateCommands.filter(item=>String(item._id??"")!==String(ctx._templateEditingId)),ctx._status="\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0434\u0430\u043B\u0435\u043D.",ctx._removeModalBackdrop(),ctx._templateModalOpen=!1,ctx._templateModalMode="create",ctx._templateEditingId="",ctx._openTemplateSubControlItemIds=new Set,ctx._templateDraft=ctx._newTemplateDraft()}catch(error){ctx._templateError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{ctx._templateModalSaving=!1,ctx._render()}}};var resolveResultTitle=result=>String(result?.title??result?.name??"").trim(),resolveResultMappingType=result=>String(result?.mappingType??result?.mapping_type??result?.actionType??result?.action_type??result?.type??"").trim(),performUuidSearch=async(ctx,searchText,searchType,itemId=null)=>{let canUseDropdownOnlyRender=searchType==="directControl"||searchType==="nextAction";if(!searchText||searchText.length===0){ctx._searchResults=[],ctx._searchActiveItemId=null,ctx._searchActiveType=null,canUseDropdownOnlyRender&&typeof ctx._clearSearchDropdown=="function"?ctx._clearSearchDropdown():ctx._render();return}ctx._searchActiveItemId=itemId,ctx._searchActiveType=searchType,ctx._searchLoading=!0;try{let collections=[];searchType==="directControl"?collections=["sub-direct-controls"]:searchType==="nextAction"?collections=["sub-commands","commands"]:searchType==="subDirectControlSample"&&(collections=["sub-direct-controls-sample"]);let results=await ctx._searchUuid(searchText,collections);if(ctx._searchResults=results,searchType==="directControl"&&itemId){let normalizedSearchLower=String(searchText??"").trim().toLowerCase(),exactMatch=results.find(entry=>String(entry?.uuid??"").trim().toLowerCase()===normalizedSearchLower)||(results.length===1?results[0]:null);if(exactMatch&&(exactMatch?.title||exactMatch?.mappingType||exactMatch?.actionType||exactMatch?.type||exactMatch?.uuid)){let nextItems=(Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[]).map(item=>item.id===itemId?{...item,displayValue:resolveResultTitle(exactMatch)||String(item.displayValue??""),mappingType:resolveResultMappingType(exactMatch)}:item);ctx._draft={...ctx._draft,directControlItems:nextItems}}}}catch{ctx._searchResults=[]}finally{ctx._searchLoading=!1,canUseDropdownOnlyRender&&typeof ctx._renderSearchDropdown=="function"?ctx._renderSearchDropdown():ctx._render()}},debouncedPerformUuidSearch=(ctx,searchText,searchType,itemId=null)=>{ctx._searchDebounceTimer&&clearTimeout(ctx._searchDebounceTimer),ctx._searchDebounceTimer=setTimeout(()=>{ctx._performUuidSearch(searchText,searchType,itemId)},300)},selectSearchResult=(ctx,itemId,result)=>{let normalizedItemId=String(itemId??"").trim(),activeType=ctx._searchActiveType;if(activeType==="directControl"){let resolvedUuid=String(result.uuid??"").trim();ctx._lastSelectedDirectControlUuid={itemId:normalizedItemId,uuid:resolvedUuid,at:Date.now()};let nextItems=(Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[]).map(item=>item.id===normalizedItemId?{...item,uuid:resolvedUuid,displayValue:resolveResultTitle(result),mappingType:resolveResultMappingType(result)}:item);ctx._draft={...ctx._draft,directControlItems:nextItems}}else if(activeType==="nextAction"){let resolvedMappingType=resolveResultMappingType(result),resolvedUuid=String(result.uuid??"").trim();ctx._lastSelectedNextActionUuid={itemId:normalizedItemId,uuid:resolvedUuid,at:Date.now()};let nextItems=(Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[]).map(item=>item.id===normalizedItemId?{...item,uuid:resolvedUuid,displayValue:resolveResultTitle(result),mappingType:resolvedMappingType,actionType:resolvedMappingType}:item);ctx._draft={...ctx._draft,nextActionItems:nextItems}}ctx._searchResults=[],ctx._searchActiveItemId=null,ctx._searchActiveType=null,ctx._render()},searchUuid=async(ctx,searchText,collections)=>{let baseUrl=String(ctx._config.base_url??"").trim().replace(/\/$/,"");if(!baseUrl)return[];try{let collectionsParam=Array.isArray(collections)?collections.join(","):String(collections),url=`${baseUrl}/api/cms/search?collections=${encodeURIComponent(collectionsParam)}&text=${encodeURIComponent(searchText)}`,response=await fetch(url,{method:"GET",headers:ctx._apiHeaders(!1)});if(!response.ok)return[];let result=await response.json();return Array.isArray(result.data)?result.data:Array.isArray(result)?result:[]}catch{return[]}},resolveTitleByUuid=async(ctx,uuid,collections)=>{let normalizedUuid=String(uuid??"").trim();if(!normalizedUuid)return"";let results=await ctx._searchUuid(normalizedUuid,collections),exactMatch=results.find(entry=>String(entry?.uuid??"").trim()===normalizedUuid);return String(exactMatch?.title??results[0]?.title??"").trim()},hydrateDirectControlTitles=async ctx=>{let items=Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[];if(!items.length)return;let patches=await Promise.all(items.map(async item=>{let uuid=String(item.uuid??"").trim(),displayValue=String(item.displayValue??"").trim(),mappingType=String(item.mappingType??"").trim();if(!uuid||displayValue&&mappingType)return{id:String(item.id??""),uuid,displayValue,mappingType};let results=await ctx._searchUuid(uuid,["sub-direct-controls"]),exactMatch=results.find(entry=>String(entry?.uuid??"").trim()===uuid)||results[0]||null,title=String(exactMatch?.title??""),resolvedMappingType=String(exactMatch?.mappingType??exactMatch?.mapping_type??exactMatch?.actionType??exactMatch?.action_type??exactMatch?.type??"").trim();return{id:String(item.id??""),uuid,displayValue:displayValue||title,mappingType:mappingType||resolvedMappingType}})),patchById=new Map(patches.map(patch=>[String(patch.id??""),patch]));ctx._draft={...ctx._draft,directControlItems:(Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[]).map(item=>{let id=String(item.id??""),patch=patchById.get(id);return!patch||String(item.uuid??"").trim()!==patch.uuid?item:{...item,displayValue:String(item.displayValue??"").trim()||patch.displayValue,mappingType:String(item.mappingType??"").trim()||patch.mappingType}})},ctx._render()},hydrateNextActionTitles=async ctx=>{let items=Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[];if(!items.length)return;let patches=await Promise.all(items.map(async item=>{let uuid=String(item.uuid??"").trim(),displayValue=String(item.displayValue??"").trim();if(!uuid||displayValue)return{id:String(item.id??""),uuid,displayValue};let title=await ctx._resolveTitleByUuid(uuid,["sub-commands","commands"]);return{id:String(item.id??""),uuid,displayValue:title}})),patchById=new Map(patches.map(patch=>[String(patch.id??""),patch]));ctx._draft={...ctx._draft,nextActionItems:(Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[]).map(item=>{let id=String(item.id??""),patch=patchById.get(id);return!patch||String(item.uuid??"").trim()!==patch.uuid?item:{...item,displayValue:String(item.displayValue??"").trim()||patch.displayValue}})},ctx._render()},deleteItem=async(ctx,collection,uuid)=>{let baseUrl=String(ctx._config.base_url??"").trim().replace(/\/$/,"");if(!baseUrl)throw new Error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.");let url=`${baseUrl}/api/cms/${encodeURIComponent(collection)}/${encodeURIComponent(uuid)}`,response=await fetch(url,{method:"DELETE",headers:ctx._apiHeaders(!0)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F: HTTP ${response.status}`)};var reloadDefaultsCommands=async ctx=>{let url=ctx._apiUrl("/api/cms/settings-dialog");if(!url){ctx._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}ctx._defaultsLoading=!0,ctx._defaultsError="",ctx._render();try{let response=await fetch(url,{method:"GET",headers:ctx._apiHeaders(!1)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${response.status}`);let result=await response.json(),items=Array.isArray(result?.data)?result.data:Array.isArray(result)?result:[],nextState={...ctx._defaultsByType},usedTypes=new Set,fallbackOrder=DEFAULT_COMMAND_CONFIGS.map(config=>config.type),resolveType=(item,index)=>{let directType=String(item?.actionType??item?.componentDialog?.actionType??"").trim();if(directType&&nextState[directType]&&!usedTypes.has(directType))return directType;let byIndex=fallbackOrder[index];return byIndex&&nextState[byIndex]&&!usedTypes.has(byIndex)?byIndex:""};items.forEach((item,index)=>{let type=resolveType(item,index);type&&(usedTypes.add(type),nextState[type]=ctx._newDefaultsDraft(type,item))}),ctx._defaultsByType={...ctx._newDefaultsState(),...nextState},ctx._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}catch(error){ctx._defaultsError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{ctx._defaultsLoading=!1,ctx._render()}},openDefaultsModal=(ctx,type)=>{let config=ctx._defaultConfig(type);ctx._addModalBackdrop(),ctx._defaultsActiveType=config.type,ctx._defaultsActiveId=String(ctx._defaultsByType[config.type]?._id??""),ctx._defaultsModalOpen=!0,ctx._defaultsError="",ctx._render()},closeDefaultsModal=ctx=>{ctx._defaultsModalSaving||(ctx._removeModalBackdrop(),ctx._defaultsModalOpen=!1,ctx._render())},updateDefaultsDraft=(ctx,field,value)=>{let type=ctx._defaultsActiveType,current=ctx._defaultsByType[type]??ctx._newDefaultsDraft(type);ctx._defaultsByType={...ctx._defaultsByType,[type]:{...current,[field]:value}}},saveDefaultsType=async(ctx,type,closeModal2=!1)=>{let config=ctx._defaultConfig(type);if(ctx._defaultsActiveType=config.type,ctx._defaultsActiveId=String(ctx._defaultsByType[config.type]?._id??ctx._defaultsActiveId??""),!ctx._apiUrl("")){ctx._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",ctx._render();return}let payload;try{payload=ctx._buildDefaultsPayload()}catch(error){ctx._defaultsError=error?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",ctx._render();return}ctx._defaultsModalSaving=closeModal2,ctx._defaultsLoading=!closeModal2,ctx._defaultsError="",ctx._render();try{let isEdit=!!ctx._defaultsActiveId,collection="settings-dialog",url=isEdit?ctx._apiUrl(`/api/cms/${collection}/${encodeURIComponent(ctx._defaultsActiveId)}`):ctx._apiUrl(`/api/cms/${collection}`),response=await fetch(url,{method:isEdit?"PUT":"POST",headers:ctx._apiHeaders(!0),body:JSON.stringify(payload)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${response.status}`);let result=await response.json().catch(()=>null),savedPayload=result?.data&&typeof result.data=="object"?result.data:result&&typeof result=="object"?result:null,nextType=ctx._defaultsActiveType,current=ctx._defaultsByType[nextType]??ctx._newDefaultsDraft(nextType),nextId=String(savedPayload?._id??current._id??ctx._defaultsActiveId??"");ctx._defaultsByType={...ctx._defaultsByType,[nextType]:{...current,...savedPayload&&typeof savedPayload=="object"?savedPayload:payload,_id:nextId}},ctx._defaultsActiveId=nextId,await ctx._reloadDefaultsCommands(),ctx._status=isEdit?"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",closeModal2&&(ctx._removeModalBackdrop(),ctx._defaultsModalOpen=!1)}catch(error){ctx._defaultsError=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{ctx._defaultsModalSaving=!1,ctx._defaultsLoading=!1,ctx._render()}},saveDefaultsModal=async ctx=>{await ctx._saveDefaultsType(ctx._defaultsActiveType,!0)};var bindFieldActions=(ctx,root,on)=>{root.querySelectorAll("[data-field]").forEach(element=>{let field=element.dataset.field,onInput=event=>{let value=element.type==="checkbox"?event.currentTarget.checked:event.currentTarget.value;ctx._updateDraft(field,value)};on(element,"input",onInput),on(element,"change",onInput)}),root.querySelectorAll("[data-direct-field]").forEach(element=>{let field=element.dataset.directField,onInput=event=>{let value=element.type==="checkbox"?event.currentTarget.checked:event.currentTarget.value;ctx._updateDirectDraft(field,value),field==="typeData"&&(event.currentTarget.value!=="command"?(ctx._updateDirectDraft("manual",!1),ctx._updateDirectDraft("voiceCommands","")):(ctx._searchResults=[],ctx._searchActiveType=null)),field==="subDirectControl"&&value.length>0&&ctx._performUuidSearch(value,"subDirectControlSample"),(element.type==="checkbox"||element.tagName==="SELECT")&&ctx._render()};on(element,"input",onInput),on(element,"change",onInput),field==="subDirectControl"&&(on(element,"focus",()=>{ctx._subDirectControlSampleOptions.length||ctx._loadSubDirectControlSamples()}),on(element,"click",()=>{ctx._subDirectControlSampleOptions.length||ctx._loadSubDirectControlSamples()}))}),root.querySelectorAll("[data-template-field]").forEach(element=>{let field=element.dataset.templateField,handler=event=>ctx._updateTemplateDraft(field,event.currentTarget.value);on(element,"input",handler),on(element,"change",handler)}),root.querySelectorAll("[data-defaults-field]").forEach(element=>{let field=element.dataset.defaultsField,handler=event=>{let value=element.type==="checkbox"?event.currentTarget.checked:event.currentTarget.value;ctx._updateDefaultsDraft(field,value);let activeConfig=ctx._defaultConfig(ctx._defaultsActiveType);field==="llmEnabled"&&element.type==="checkbox"&&activeConfig.supportsLlm&&ctx._render()};on(element,"input",handler),(element.type==="checkbox"||element.tagName==="SELECT")&&on(element,"change",handler)}),root.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(element=>{let itemId=element.dataset.responseItemId,field=element.dataset.responseItemField,onInput=event=>{let value=element.type==="checkbox"?event.currentTarget.checked:event.currentTarget.value;ctx._updateVoiceResponseItem(itemId,field,value),element.type==="checkbox"&&ctx._render()};on(element,"input",onInput),element.type==="checkbox"&&on(element,"change",onInput)}),root.querySelectorAll("input[data-direct-control-item-id], textarea[data-direct-control-item-id], select[data-direct-control-item-id]").forEach(element=>{let itemId=element.dataset.directControlItemId;element.tagName==="INPUT"||element.tagName==="TEXTAREA"?(on(element,"input",event=>ctx._updateDirectControlItem(itemId,event.currentTarget.value,!1)),on(element,"change",event=>ctx._updateDirectControlItem(itemId,event.currentTarget.value,!0))):(on(element,"input",event=>ctx._updateDirectControlItem(itemId,event.currentTarget.value,!0)),on(element,"change",event=>ctx._updateDirectControlItem(itemId,event.currentTarget.value,!0)))}),root.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(element=>{let itemId=element.dataset.nextActionItemId,field=element.dataset.nextActionItemField;if(element.tagName==="INPUT"||element.tagName==="TEXTAREA")on(element,"input",event=>ctx._updateNextActionItem(itemId,field,event.currentTarget.value,!1,!1)),on(element,"change",event=>ctx._updateNextActionItem(itemId,field,event.currentTarget.value,!0,!0));else{let handler=event=>ctx._updateNextActionItem(itemId,field,event.currentTarget.value,!0,!0);on(element,"input",handler),on(element,"change",handler)}}),root.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(element=>{let itemId=element.dataset.directSubControlItemId,field=element.dataset.directSubControlItemField,handler=event=>ctx._updateDirectSubControlItem(itemId,field,event.currentTarget.value);on(element,"input",handler),on(element,"change",handler)}),root.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(element=>{let itemId=element.dataset.templateSubControlItemId,field=element.dataset.templateSubControlItemField,handler=event=>ctx._updateTemplateSubControlItem(itemId,field,event.currentTarget.value);on(element,"input",handler),on(element,"change",handler)})};var bindListItemActions=(ctx,root,on)=>{on(root.querySelector('[data-action="generate-uuid"]'),"click",()=>ctx._refreshUuid()),on(root.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>ctx._refreshDirectUuid()),on(root.querySelector('[data-action="generate-template-uuid"]'),"click",()=>ctx._refreshTemplateUuid()),on(root.querySelector('[data-action="add-voice-response-item"]'),"click",()=>ctx._addVoiceResponseItem()),on(root.querySelector('[data-action="add-direct-control-item"]'),"click",()=>ctx._addDirectControlItem()),on(root.querySelector('[data-action="add-next-action-item"]'),"click",()=>ctx._addNextActionItem()),on(root.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>ctx._addDirectSubControlItem()),on(root.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>ctx._addTemplateSubControlItem()),root.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(element=>{on(element,"click",()=>ctx._removeVoiceResponseItem(element.dataset.responseItemId))}),root.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(element=>{on(element,"click",()=>ctx._removeDirectControlItem(element.dataset.directControlItemId))}),root.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(element=>{on(element,"click",()=>ctx._toggleDirectControlItem(element.dataset.directControlItemId))}),root.querySelectorAll('[data-action="remove-next-action-item"]').forEach(element=>{on(element,"click",()=>ctx._removeNextActionItem(element.dataset.nextActionItemId))}),root.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(element=>{on(element,"click",()=>ctx._toggleNextActionItem(element.dataset.nextActionItemId))}),root.querySelectorAll('[data-action="toggle-response-item"]').forEach(element=>{on(element,"click",()=>ctx._toggleResponseItem(element.dataset.responseItemId))}),root.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(element=>{on(element,"click",()=>ctx._removeDirectSubControlItem(element.dataset.directSubControlItemId))}),root.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(element=>{on(element,"click",()=>ctx._toggleDirectSubControlItem(element.dataset.directSubControlItemId))}),root.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(element=>{on(element,"click",()=>ctx._removeTemplateSubControlItem(element.dataset.templateSubControlItemId))}),root.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(element=>{on(element,"click",()=>ctx._toggleTemplateSubControlItem(element.dataset.templateSubControlItemId))}),root.querySelectorAll('[data-action="open-item-actions"]').forEach(element=>{on(element,"click",event=>{event.stopPropagation(),ctx._openItemActionsModal({kind:element.dataset.itemKind,id:element.dataset.itemId,title:element.dataset.itemTitle,collection:element.dataset.itemCollection,status:String(element.dataset.itemStatus??"").toLowerCase()==="true"})})})};var bindModalActions=(ctx,root,on)=>{root.querySelectorAll('[data-action="close"]').forEach(element=>{on(element,"click",()=>ctx._closeModal())}),root.querySelectorAll('[data-action="close-direct"]').forEach(element=>{on(element,"click",()=>ctx._closeDirectModal())}),root.querySelectorAll('[data-action="close-template"]').forEach(element=>{on(element,"click",()=>ctx._closeTemplateModal())}),root.querySelectorAll('[data-action="close-defaults"]').forEach(element=>{on(element,"click",()=>ctx._closeDefaultsModal())}),root.querySelectorAll('[data-action="close-item-actions"]').forEach(element=>{on(element,"click",()=>ctx._closeItemActionsModal())}),on(root.querySelector('[data-action="save"]'),"click",()=>ctx._saveModal()),on(root.querySelector('[data-action="save-direct"]'),"click",()=>ctx._saveDirectModal()),on(root.querySelector('[data-action="save-template"]'),"click",()=>ctx._saveTemplateModal()),on(root.querySelector('[data-action="save-defaults"]'),"click",()=>ctx._saveDefaultsModal()),on(root.querySelector('[data-action="delete"]'),"click",()=>ctx._deleteModal()),on(root.querySelector('[data-action="delete-direct"]'),"click",()=>ctx._deleteDirectModal()),on(root.querySelector('[data-action="delete-template"]'),"click",()=>ctx._deleteTemplateModal()),on(root.querySelector('[data-action="toggle-status"]'),"click",()=>ctx._toggleEditModalStatus()),on(root.querySelector('[data-action="toggle-direct-status"]'),"click",()=>ctx._toggleDirectEditModalStatus()),on(root.querySelector('[data-action="apply-item-status"]'),"click",()=>ctx._applyItemStatus())};var bindSearchActions=(ctx,root,on)=>{root.querySelectorAll('[data-action="select-search-result"]').forEach(element=>{on(element,"click",event=>{event.preventDefault(),event.stopPropagation();let itemId=element.dataset.directControlItemId||element.dataset.nextActionItemId,result={uuid:element.dataset.resultUuid,title:element.dataset.resultTitle,mappingType:element.dataset.resultMappingType||element.dataset.resultActiveType||element.dataset.resultType};ctx._selectSearchResult(itemId,result)})})};var bindTabActions=(ctx,root,on)=>{root.querySelectorAll("[data-tab]").forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._setTab(element.dataset.tab)})}),on(root.querySelector('[data-action="reload"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._loadPage(ctx._pageByTab[ctx._tab]||1,{force:!0})}),on(root.querySelector('[data-action="create"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openCreateModal()}),on(root.querySelector('[data-action="prev"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._loadPage((ctx._pageByTab[ctx._tab]||1)-1)}),on(root.querySelector('[data-action="next"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._loadPage((ctx._pageByTab[ctx._tab]||1)+1)}),root.querySelectorAll('[data-action="goto-page"]').forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._loadPage(Number(element.dataset.page)||1)})}),on(root.querySelector('[data-action="reload-direct"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._reloadDirectCommands()}),on(root.querySelector('[data-action="create-direct"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openCreateDirectModal()}),on(root.querySelector('[data-action="reload-template"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._reloadTemplateCommands()}),on(root.querySelector('[data-action="create-template"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openCreateTemplateModal()}),on(root.querySelector('[data-action="reload-defaults"]'),"click",()=>{ctx._hasAnyModalOpen?.()||ctx._reloadDefaultsCommands()}),root.querySelectorAll('[data-action="open-defaults-item"]').forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openDefaultsModal(element.dataset.defaultType)})}),root.querySelectorAll('[data-action="edit"]').forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openEditModal(element.dataset.commandId)})}),root.querySelectorAll('[data-action="edit-direct"]').forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openEditDirectModal(element.dataset.directId)})}),root.querySelectorAll('[data-action="edit-template"]').forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._openEditTemplateModal(element.dataset.templateId)})}),root.querySelectorAll("[data-direct-subtab]").forEach(element=>{on(element,"click",()=>{ctx._hasAnyModalOpen?.()||ctx._setDirectSubtab(element.dataset.directSubtab)})})};var bindUiGuard=(ctx,root,on)=>{root.querySelectorAll("input, select, textarea").forEach(element=>{["click","focusin"].forEach(eventName=>{on(element,eventName,event=>ctx._swallowUiEvent(event))})})};var prepareEventBinding=ctx=>{let root=ctx.shadowRoot;if(!root)return null;ctx._bindController?.abort&&ctx._bindController.abort(),ctx._legacyListeners.length&&(ctx._legacyListeners.forEach(({element,eventName,handler})=>{element.removeEventListener(eventName,handler)}),ctx._legacyListeners=[]);let supportsAbortController=typeof AbortController<"u";ctx._bindController=supportsAbortController?new AbortController:null;let signal=ctx._bindController?.signal??null;return{root,on:(element,eventName,handler)=>{if(element)try{signal?element.addEventListener(eventName,handler,{signal}):(element.addEventListener(eventName,handler),ctx._legacyListeners.push({element,eventName,handler}))}catch{element.addEventListener(eventName,handler),ctx._legacyListeners.push({element,eventName,handler})}}}};var bindEvents=ctx=>{let binding=prepareEventBinding(ctx);if(!binding)return;let{root,on}=binding;bindTabActions(ctx,root,on),bindModalActions(ctx,root,on),bindListItemActions(ctx,root,on),bindSearchActions(ctx,root,on),bindFieldActions(ctx,root,on),bindUiGuard(ctx,root,on)};var renderDirectModal=ctx=>{if(!ctx._directModalOpen)return"";let title=ctx._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",isCommandType=ctx._directDraft.typeData==="command",isEditMode=ctx._directModalMode==="edit",canRefreshDirectUuid=!isEditMode&&!String(ctx._directDraft.uuid??"").trim(),subItems=Array.isArray(ctx._directDraft.subDirectControlItems)?ctx._directDraft.subDirectControlItems:[],sampleOptions=Array.isArray(ctx._subDirectControlSampleOptions)?ctx._subDirectControlSampleOptions:[],selectedSampleUuid=String(ctx._directDraft.subDirectControl??"").trim(),hasSelectedSample=sampleOptions.some(item=>String(item?.uuid??"").trim()===selectedSampleUuid);return`
    <div class="modal-backdrop" data-action="close-direct"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <div class="modal-header-actions">
          ${ctx._directModalMode==="edit"?`
            <button type="button" class="secondary" data-action="toggle-direct-status" ${ctx._directModalSaving?"disabled":""}>
              ${ctx._directEditingStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"}
            </button>
          `:""}
          <button type="button" class="ghost" data-action="close-direct" ${ctx._directModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-direct-field="title" value="${escapeHtml(ctx._directDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-direct-field="uuid" value="${escapeHtml(ctx._directDraft.uuid)}" ${isEditMode?"readonly":""} />
            ${canRefreshDirectUuid?`
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-direct-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                ${ctx._directModalSaving?"disabled":""}
              >\u21BB</button>
            `:""}
          </div>
        </label>
        <label>
          <span>directControl.mappingType</span>
          <input data-direct-field="type" value="${escapeHtml(ctx._directDraft.type)}" />
        </label>
        <label>
          <span>directControl.valueType</span>
          <select data-direct-field="typeData">
            ${DIRECT_TYPE_DATA_OPTIONS.map(option=>`
              <option value="${option}" ${ctx._directDraft.typeData===option?"selected":""}>${option}</option>
            `).join("")}
          </select>
        </label>
        ${isCommandType?`
          <label class="field-span-2">
            <span>voiceCommands</span>
            <textarea rows="3" data-direct-field="voiceCommands">${escapeHtml(ctx._directDraft.voiceCommands)}</textarea>
          </label>
          <label class="field-span-2">
            <span>manual</span>
            <div class="switch-control">
              <input type="checkbox" data-direct-field="manual" ${ctx._directDraft.manual?"checked":""} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${ctx._directDraft.manual?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
            </div>
          </label>
          ${ctx._directDraft.manual?`
            <section class="field-span-2 array-builder">
              <div class="array-builder-header">
                <span>subDirectControl</span>
                <button type="button" class="secondary compact-button" data-action="add-direct-sub-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>
              </div>
              <div class="array-builder-list">
                ${subItems.map((item,index)=>{let isOpen=ctx._openDirectSubControlItemIds.has(item.id);return`
                    <section class="response-item-card ${isOpen?"open":""}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-direct-sub-control-item"
                        data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                      >
                        <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${index+1}</span>
                        <span class="response-accordion-icon">${isOpen?"\u2212":"+"}</span>
                      </button>
                      ${isOpen?`
                        <div class="response-item-grid">
                          <label>
                            <span>subMappingType</span>
                            <input
                              data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                              data-direct-sub-control-item-field="subType"
                              value="${escapeHtml(item.subType)}"
                            />
                          </label>
                          <label>
                            <span>subVoiceCommands</span>
                            <textarea
                              rows="3"
                              data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                              data-direct-sub-control-item-field="subVoiceCommands"
                            >${escapeHtml(item.subVoiceCommands)}</textarea>
                          </label>
                          <div class="response-item-actions">
                            <button
                              type="button"
                              class="ghost compact-delete-button"
                              data-action="remove-direct-sub-control-item"
                              data-direct-sub-control-item-id="${escapeHtml(item.id)}"
                            >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                          </div>
                        </div>
                      `:""}
                    </section>
                  `}).join("")}
                ${subItems.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
              </div>
            </section>
          `:`
            <label class="field-span-2">
              <span>subDirectControl</span>
              <select data-direct-field="subDirectControl">
                <option value="">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E (\u0434\u043E\u0431\u0430\u0432\u0438\u043C \u043F\u043E\u0437\u0436\u0435)</option>
                ${selectedSampleUuid&&!hasSelectedSample?`
                  <option value="${escapeHtml(selectedSampleUuid)}" selected>${escapeHtml(selectedSampleUuid)}</option>
                `:""}
                ${sampleOptions.map(result=>`
                  <option value="${escapeHtml(result.uuid)}" ${ctx._directDraft.subDirectControl===result.uuid?"selected":""}>${escapeHtml(result.title)} (${escapeHtml(result.uuid)})</option>
                `).join("")}
              </select>
            </label>
          `}
        `:""}
      </div>
      <div class="modal-footer">
        ${ctx._directModalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete-direct" ${ctx._directModalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save-direct" ${ctx._directModalSaving?"disabled":""}>${ctx._directModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},renderTemplateModal=ctx=>{if(!ctx._templateModalOpen)return"";let title=ctx._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",isEditMode=ctx._templateModalMode==="edit",canRefreshTemplateUuid=!isEditMode&&!String(ctx._templateDraft.uuid??"").trim(),subItems=Array.isArray(ctx._templateDraft.subDirectControlItems)?ctx._templateDraft.subDirectControlItems:[];return`
    <div class="modal-backdrop" data-action="close-template"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <button type="button" class="ghost" data-action="close-template" ${ctx._templateModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-template-field="title" value="${escapeHtml(ctx._templateDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-template-field="uuid" value="${escapeHtml(ctx._templateDraft.uuid)}" ${isEditMode?"readonly":""} />
            ${canRefreshTemplateUuid?`
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-template-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                ${ctx._templateModalSaving?"disabled":""}
              >\u21BB</button>
            `:""}
          </div>
        </label>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>subDirectControl</span>
            <button type="button" class="secondary compact-button" data-action="add-template-sub-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>
          </div>
          <div class="array-builder-list">
            ${subItems.map((item,index)=>{let isOpen=ctx._openTemplateSubControlItemIds.has(item.id);return`
                <section class="response-item-card ${isOpen?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-template-sub-control-item"
                    data-template-sub-control-item-id="${escapeHtml(item.id)}"
                  >
                    <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${index+1}</span>
                    <span class="response-accordion-icon">${isOpen?"\u2212":"+"}</span>
                  </button>
                  ${isOpen?`
                    <div class="response-item-grid">
                      <label>
                        <span>subMappingType</span>
                        <input
                          data-template-sub-control-item-id="${escapeHtml(item.id)}"
                          data-template-sub-control-item-field="subType"
                          value="${escapeHtml(item.subType)}"
                        />
                      </label>
                      <label>
                        <span>subVoiceCommands</span>
                        <textarea
                          rows="3"
                          data-template-sub-control-item-id="${escapeHtml(item.id)}"
                          data-template-sub-control-item-field="subVoiceCommands"
                        >${escapeHtml(item.subVoiceCommands)}</textarea>
                      </label>
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-template-sub-control-item"
                          data-template-sub-control-item-id="${escapeHtml(item.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${subItems.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
          </div>
        </section>
      </div>
      <div class="modal-footer">
        ${ctx._templateModalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete-template" ${ctx._templateModalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save-template" ${ctx._templateModalSaving?"disabled":""}>${ctx._templateModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},renderDefaultsModal=ctx=>{if(!ctx._defaultsModalOpen)return"";let type=ctx._defaultsActiveType,config=ctx._defaultConfig(type),draft=ctx._defaultsByType[type]??ctx._newDefaultsDraft(type);return`
    <div class="modal-backdrop" data-action="close-defaults"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(config.title)}">
      <div class="modal-header">
        <h3>${escapeHtml(config.title)}</h3>
        <button type="button" class="ghost" data-action="close-defaults" ${ctx._defaultsModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <div class="modal-grid">
        <label class="field-span-2">
          <span>title</span>
          <input data-defaults-field="title" value="${escapeHtml(draft.title||config.title)}" disabled />
        </label>
        <label>
          <span>endStatus</span>
          <div class="switch-control">
            <input type="checkbox" data-defaults-field="endStatus" ${draft.endStatus?"checked":""} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${draft.endStatus?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
          </div>
        </label>
        ${config.supportsLlm?`
          <label>
            <span>LLM</span>
            <div class="switch-control">
              <input type="checkbox" data-defaults-field="llmEnabled" ${draft.llmEnabled?"checked":""} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${draft.llmEnabled?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
            </div>
          </label>
        `:""}
        <label class="field-span-2">
          <span>message</span>
          <input data-defaults-field="message" value="${escapeHtml(draft.message)}" />
        </label>
        ${config.supportsLlm&&draft.llmEnabled?`
          <label class="field-span-2">
            <span>system</span>
            <textarea rows="6" data-defaults-field="system">${escapeHtml(draft.system)}</textarea>
          </label>
          <label class="field-span-2">
            <span>model</span>
            <input data-defaults-field="model" value="${escapeHtml(draft.model)}" />
          </label>
        `:""}
      </div>
      <div class="modal-footer">
        <button type="button" class="primary" data-action="save-defaults" ${ctx._defaultsModalSaving?"disabled":""}>${ctx._defaultsModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},renderItemActionsModal=ctx=>{if(!ctx._itemActionsModalOpen)return"";let actionLabel=ctx._itemActionsStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",statusLabel=ctx._itemActionsStatus?"\u0421\u0435\u0439\u0447\u0430\u0441: \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u0435\u0439\u0447\u0430\u0441: \u0441\u043A\u0440\u044B\u0442",targetTitle=ctx._itemActionsTitle||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <div class="modal-backdrop" data-action="close-item-actions"></div>
    <section class="modal modal-compact modal-item-actions" role="dialog" aria-modal="true" aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F">
      <div class="modal-header">
        <h3>${escapeHtml(targetTitle)}</h3>
        <button type="button" class="ghost item-actions-close" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" data-action="close-item-actions" ${ctx._itemActionsSaving?"disabled":""}>\xD7</button>
      </div>
      <div class="item-actions-body">
        <p class="item-actions-status">${statusLabel}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="secondary" data-action="apply-item-status" ${ctx._itemActionsSaving?"disabled":""}>
          ${ctx._itemActionsSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":actionLabel}
        </button>
      </div>
    </section>
  `};var renderMainModal=ctx=>{if(!ctx._modalOpen)return"";let title=ctx._modalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",isEditMode=ctx._modalMode==="edit",canRefreshUuid=!isEditMode&&!String(ctx._draft.uuid??"").trim();return`
    <div class="modal-backdrop" data-action="close"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
      <div class="modal-header">
        <h3>${escapeHtml(title)}</h3>
        <div class="modal-header-actions">
          ${ctx._modalMode==="edit"?`
            <button type="button" class="secondary" data-action="toggle-status" ${ctx._modalSaving?"disabled":""}>
              ${ctx._editingStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"}
            </button>
          `:""}
          <button type="button" class="ghost" data-action="close" ${ctx._modalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
      </div>
      <div class="modal-grid">
        <label><span>Title</span><input data-field="title" value="${escapeHtml(ctx._draft.title)}" /></label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-field="uuid" value="${escapeHtml(ctx._draft.uuid)}" ${isEditMode?"readonly":""} />
            ${canRefreshUuid?`
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                ${ctx._modalSaving?"disabled":""}
              >\u21BB</button>
            `:""}
          </div>
        </label>
        <label><span>actionType</span><input data-field="type" value="${escapeHtml(ctx._draft.type)}" /></label>
        <label>
          <span>answerType</span>
          <select data-field="answerType">
            <option value="default" ${ctx._draft.answerType==="default"?"selected":""}>default</option>
            <option value="redis" ${ctx._draft.answerType==="redis"?"selected":""}>redis</option>
          </select>
        </label>
        <label>
          <span>endStatus</span>
          <div class="switch-control">
            <input type="checkbox" data-field="endStatus" ${ctx._draft.endStatus?"checked":""} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${ctx._draft.endStatus?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
          </div>
        </label>
        <label>
          <span>forwardText</span>
          <div class="switch-control">
            <input type="checkbox" data-field="forwardText" ${ctx._draft.forwardText?"checked":""} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${ctx._draft.forwardText?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
          </div>
        </label>
        <label class="field-span-2">
          <span>voiceCommands (string)</span>
          <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${escapeHtml(ctx._draft.voiceCommands)}</textarea>
        </label>
        <section class="field-span-2 response-accordion open">
          <div class="response-accordion-head-static">
            <span class="response-accordion-title">voiceResponseArray</span>
          </div>
          <div class="response-accordion-body">
            <div class="response-items">
              ${(Array.isArray(ctx._draft.responseItems)?ctx._draft.responseItems:[]).map((responseItem,index)=>{let isOpen=ctx._openResponseItemIds.has(responseItem.id);return`
                  <section class="response-item-card ${isOpen?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-response-item"
                      data-response-item-id="${escapeHtml(responseItem.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${index+1}</span>
                      <span class="response-accordion-icon">${isOpen?"\u2212":"+"}</span>
                    </button>
                    ${isOpen?`
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>actionType</span>
                            <input
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="type"
                              value="${escapeHtml(responseItem.type)}"
                              placeholder="default"
                            />
                          </label>
                          <label>
                            <span>LLM</span>
                            <div class="switch-control">
                              <input
                                type="checkbox"
                                data-response-item-id="${escapeHtml(responseItem.id)}"
                                data-response-item-field="llmEnabled"
                                ${responseItem.llmEnabled?"checked":""}
                              />
                              <span class="switch-slider" aria-hidden="true"></span>
                              <span class="switch-label">${responseItem.llmEnabled?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
                            </div>
                          </label>
                        </div>
                        <label>
                          <span>voiceResponse</span>
                          <textarea
                            rows="3"
                            data-response-item-id="${escapeHtml(responseItem.id)}"
                            data-response-item-field="voiceResponse"
                          >${escapeHtml(responseItem.voiceResponse)}</textarea>
                        </label>
                        ${responseItem.llmEnabled?`
                          <label>
                            <span>system</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="system"
                            >${escapeHtml(responseItem.system)}</textarea>
                          </label>
                          <label>
                            <span>model</span>
                            <input
                              data-response-item-id="${escapeHtml(responseItem.id)}"
                              data-response-item-field="model"
                              value="${escapeHtml(responseItem.model)}"
                            />
                          </label>
                        `:""}
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-voice-response-item"
                            data-response-item-id="${escapeHtml(responseItem.id)}"
                          >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                        </div>
                      </div>
                    `:""}
                  </section>
                `}).join("")}
            </div>
            <button type="button" class="secondary compact-button" data-action="add-voice-response-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
          </div>
        </section>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>nextAction</span>
          </div>
          <div class="array-builder-list">
            ${(Array.isArray(ctx._draft.nextActionItems)?ctx._draft.nextActionItems:[]).map((item,index)=>{let isOpen=ctx._openNextActionItemIds.has(item.id);return`
                <section class="response-item-card ${isOpen?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-next-action-item"
                    data-next-action-item-id="${escapeHtml(item.id)}"
                  >
                    <span>${escapeHtml(item.uuid?item.displayValue||item.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${index+1}`)}</span>
                    <span class="response-accordion-icon">${isOpen?"\u2212":"+"}</span>
                  </button>
                  ${isOpen?`
                    <div class="response-item-grid">
                      <div class="response-inline-row">
                        <label>
                          <span>actionTypeComponent</span>
                          <select data-next-action-item-id="${escapeHtml(item.id)}" data-next-action-item-field="actionTypeComponent">
                            ${TYPE_COMPONENT_OPTIONS.map(option=>`
                              <option value="${option}" ${item.actionTypeComponent===option?"selected":""}>${option}</option>
                            `).join("")}
                          </select>
                        </label>
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-next-action-item-id="${escapeHtml(item.id)}"
                              data-next-action-item-field="uuid"
                              value="${escapeHtml(item.uuid)}"
                              placeholder="uuid"
                            />
                            ${ctx._searchActiveType==="nextAction"&&ctx._searchActiveItemId===item.id&&ctx._searchResults.length>0?`
                              <div class="dropdown-options">
                                ${ctx._searchResults.map(result=>`
                                  <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${escapeHtml(item.id)}" data-result-uuid="${escapeHtml(result.uuid)}" data-result-title="${escapeHtml(result.title??result.name??"")}" data-result-mapping-type="${escapeHtml(result.mappingType??result.mapping_type??result.actionType??result.action_type??result.type??"")}">
                                    ${escapeHtml(result.title??result.name??"")} (${escapeHtml(result.uuid)})
                                  </div>
                                `).join("")}
                              </div>
                            `:""}
                          </div>
                        </label>
                      </div>
                      ${item.actionTypeComponent==="custom"?`
                        <label>
                          <span>actionType</span>
                          <input
                            data-next-action-item-id="${escapeHtml(item.id)}"
                            data-next-action-item-field="actionType"
                            value="${escapeHtml(item.actionType??item.mappingType??"")}"
                            placeholder="custom actionType"
                          />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-next-action-item"
                          data-next-action-item-id="${escapeHtml(item.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${(ctx._draft.nextActionItems?.length||0)===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
          </div>
          <div class="array-builder-footer">
            <button type="button" class="secondary compact-button" data-action="add-next-action-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
          </div>
        </section>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>nextDirectControl</span>
          </div>
          <div class="array-builder-list">
            ${(Array.isArray(ctx._draft.directControlItems)?ctx._draft.directControlItems:[]).map((item,index)=>{let isOpen=ctx._openDirectControlItemIds.has(item.id);return`
                <section class="response-item-card ${isOpen?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-direct-control-item"
                    data-direct-control-item-id="${escapeHtml(item.id)}"
                  >
                    <span>${escapeHtml(item.uuid?item.displayValue||item.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${index+1}`)}</span>
                    <span class="response-accordion-icon">${isOpen?"\u2212":"+"}</span>
                  </button>
                  ${isOpen?`
                    <div class="response-item-grid">
                      <label>
                        <span>uuid</span>
                        <div class="dropdown-container">
                          <input
                            data-direct-control-item-id="${escapeHtml(item.id)}"
                            value="${escapeHtml(item.uuid)}"
                            placeholder="uuid"
                          />
                          ${ctx._searchActiveType==="directControl"&&ctx._searchActiveItemId===item.id&&ctx._searchResults.length>0?`
                            <div class="dropdown-options">
                              ${ctx._searchResults.map(result=>`
                                <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${escapeHtml(item.id)}" data-result-uuid="${escapeHtml(result.uuid)}" data-result-title="${escapeHtml(result.title??result.name??"")}" data-result-mapping-type="${escapeHtml(result.mappingType??result.mapping_type??result.actionType??result.action_type??result.type??"")}" data-result-active-type="${escapeHtml(result.mappingType??result.mapping_type??result.actionType??result.action_type??result.type??"")}" data-result-type="${escapeHtml(result.type??"")}">
                                  ${escapeHtml(result.title??result.name??"")} (${escapeHtml(result.uuid)})
                                </div>
                              `).join("")}
                            </div>
                          `:""}
                        </div>
                      </label>
                      ${String(item.uuid??"").trim()||String(item.mappingType??"").trim()?`
                        <label>
                          <span>mappingType</span>
                          <input value="${escapeHtml(item.mappingType??"")}" placeholder="mappingType" disabled />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-direct-control-item"
                          data-direct-control-item-id="${escapeHtml(item.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${(ctx._draft.directControlItems?.length||0)===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
          </div>
          <div class="array-builder-footer">
            <button type="button" class="secondary compact-button" data-action="add-direct-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
          </div>
        </section>
      </div>
      <div class="modal-footer">
        ${ctx._modalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete" ${ctx._modalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save" ${ctx._modalSaving?"disabled":""}>${ctx._modalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `};var CREATE_SCENARIO_STYLES=`
<style>
:host {
          --ui-border: rgba(34, 45, 67, 0.16);
          --ui-text: #1b2432;
          --ui-muted: #5c667a;
          --ui-accent: #234f7d;
          --ui-accent-warm: #a64b2a;
          --ui-card-bg: linear-gradient(175deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86));
          --ui-card-bg-soft: rgba(255, 255, 255, 0.8);
          --ui-surface: rgba(255, 255, 255, 0.92);
          --ui-input-bg: rgba(255, 255, 255, 0.95);
          --ui-input-bg-focus: #ffffff;
          --ui-popup-bg: rgba(255, 255, 255, 0.98);
          --ui-hover: rgba(34, 45, 67, 0.06);
          --ui-backdrop: rgba(15, 23, 42, 0.5);
          --ui-ring: rgba(35, 79, 125, 0.2);
          --ui-elev-1: 0 12px 32px rgba(31, 41, 55, 0.1);
          --ui-elev-2: 0 18px 40px rgba(31, 41, 55, 0.14);
          display: grid;
          gap: 12px;
          color: var(--ui-text);
          font-family: "Manrope", "Segoe UI", "Trebuchet MS", sans-serif;
        }
        :host([data-theme="dark"]) {
          --ui-border: rgba(164, 180, 214, 0.24);
          --ui-text: #ecf2ff;
          --ui-muted: #b3c0da;
          --ui-accent: #4f86d8;
          --ui-accent-warm: #ff8a5a;
          --ui-card-bg: linear-gradient(175deg, rgba(19, 28, 44, 0.96), rgba(14, 22, 36, 0.92));
          --ui-card-bg-soft: rgba(20, 30, 47, 0.84);
          --ui-surface: rgba(23, 34, 52, 0.9);
          --ui-input-bg: rgba(17, 27, 41, 0.92);
          --ui-input-bg-focus: rgba(24, 37, 55, 0.98);
          --ui-popup-bg: rgba(15, 24, 38, 0.98);
          --ui-hover: rgba(164, 180, 214, 0.12);
          --ui-backdrop: rgba(2, 8, 20, 0.72);
          --ui-ring: rgba(79, 134, 216, 0.26);
          --ui-elev-1: 0 12px 32px rgba(1, 5, 14, 0.44);
          --ui-elev-2: 0 18px 40px rgba(1, 5, 14, 0.54);
        }
        * { box-sizing: border-box; min-width: 0; }
        .hero-card, .help-card {
          background: var(--ui-card-bg);
          border: 1px solid var(--ui-border);
          border-radius: 20px;
          box-shadow: var(--ui-elev-1);
          backdrop-filter: blur(6px);
          animation: rise-in 220ms ease-out both;
        }
        .hero-card { padding: 24px; }
        h2,h3 { margin:0; }
        p { margin: 6px 0 0; color: var(--ui-muted); }
        .subtabs-dock {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          width: 100%;
          padding: 8px;
          border-radius: 999px;
          background: var(--ui-card-bg-soft);
          border: 1px solid var(--ui-border);
          box-shadow: var(--ui-elev-1);
        }
        .create-scenario-shell.modal-context-open {
          pointer-events: none;
        }
        .create-scenario-shell.modal-context-open .subtabs-dock,
        .create-scenario-shell.modal-context-open .status,
        .create-scenario-shell.modal-context-open .hero-card,
        .create-scenario-shell.modal-context-open .help-card,
        .create-scenario-shell.modal-context-open .command-item-main {
          animation: none !important;
          transition: none !important;
        }
        .subtabs { display:flex; flex-wrap:wrap; gap:10px; width: 100%; }
        .inner-subtabs { margin-top: 14px; display:flex; flex-wrap:wrap; gap:10px; }
        .subtab-button {
          border: 1px solid var(--ui-border);
          border-radius: 999px;
          background: var(--ui-surface);
          color: var(--ui-muted);
          padding: 10px 16px;
          cursor: pointer;
          font-weight: 600;
          transition: transform .12s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
        }
        .subtab-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 7px 16px rgba(31,41,55,.12);
          background: var(--ui-input-bg-focus);
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--ui-accent), #4c78a8);
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(35,79,125,.3);
        }
        .toolbar { margin-top:16px; display:flex; gap:10px; flex-wrap:wrap; }
        button {
          border:none;
          border-radius:999px;
          padding:11px 16px;
          font:inherit;
          cursor:pointer;
          transition: transform .12s ease, box-shadow .2s ease, opacity .2s ease;
        }
        button:hover { transform: translateY(-1px); }
        .primary {
          color:#fff;
          background:linear-gradient(135deg,var(--ui-accent-warm),#d4743d);
          box-shadow: 0 8px 18px rgba(166,75,42,.3);
        }
        .secondary {
          color:#fff;
          background:linear-gradient(135deg,var(--ui-accent),#4c78a8);
          box-shadow: 0 8px 18px rgba(35,79,125,.25);
        }
        .ghost { background:rgba(34,45,67,.08); color:var(--ui-text); }
        button:disabled { opacity: .55; cursor: not-allowed; transform: none; box-shadow: none; }
        .status {
          padding: 11px 14px;
          border-radius: 12px;
          border: 1px solid transparent;
          box-shadow: 0 6px 14px rgba(31,41,55,.05);
        }
        .status.error {
          background: rgba(180,43,43,.09);
          color: #8a2323;
          border-color: rgba(180,43,43,.24);
        }
        .status.ok {
          background: rgba(35,111,73,.1);
          color: #155c3a;
          border-color: rgba(35,111,73,.24);
        }
        .help-card { padding:20px; }
        .command-list { display:grid; gap:10px; }
        .command-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 8px;
          align-items: stretch;
        }
        .command-item-main {
          display:grid;
          gap:8px;
          width:100%;
          text-align:left;
          border:1px solid var(--ui-border);
          border-radius:14px;
          background:var(--ui-card-bg-soft);
          color:var(--ui-text);
          padding:14px;
          transition: transform .12s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .command-item-main:hover {
          transform: translateY(-1px);
          border-color: rgba(35,79,125,.3);
          box-shadow: 0 9px 20px rgba(31,41,55,.1);
        }
        .command-item-menu-button {
          align-self: center;
          min-width: 42px;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          padding: 0;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .command-item-title { font-size:16px; font-weight:700; }
        .command-item-meta { display:flex; flex-wrap:wrap; gap:8px; color:var(--ui-muted); font-size:13px; }
        .command-pagination { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:8px; }
        .pagination-pages { display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:center; }
        .pagination-page { min-width: 38px; text-align: center; }
        .pagination-page.active {
          color:#fff;
          background:linear-gradient(135deg,var(--ui-accent),#4c78a8);
          box-shadow: 0 8px 18px rgba(35,79,125,.25);
        }
        .pagination-ellipsis { color: var(--ui-muted); font-weight: 700; padding: 0 2px; }
        .empty {
          padding: 18px 6px;
          color: var(--ui-muted);
          text-align: center;
          border: 1px dashed var(--ui-border);
          border-radius: 12px;
          background: var(--ui-surface);
        }
        label { display:grid; gap:8px; }
        label span { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--ui-accent); }
        input, select, textarea {
          width:100%;
          border:1px solid var(--ui-border);
          border-radius:14px;
          padding:12px 14px;
          font:inherit;
          background: var(--ui-input-bg);
          color:var(--ui-text);
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: rgba(35,79,125,.48);
          box-shadow: 0 0 0 3px var(--ui-ring);
          background: var(--ui-input-bg-focus);
        }
        textarea { resize: vertical; }
        .switch-control {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px 0;
        }
        .switch-control input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .switch-slider {
          position: relative;
          width: 54px;
          height: 30px;
          border-radius: 999px;
          background: rgba(34, 45, 67, 0.2);
          border: 1px solid rgba(34, 45, 67, 0.15);
          transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .switch-slider::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 3px 8px rgba(15, 23, 42, 0.25);
          transition: transform .2s ease;
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider {
          background: linear-gradient(135deg, var(--ui-accent), #4c78a8);
          border-color: transparent;
          box-shadow: 0 8px 18px rgba(35,79,125,.28);
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider::after {
          transform: translateX(24px);
        }
        .switch-label {
          font-weight: 600;
          color: var(--ui-muted);
        }
        .voice-commands-field {
          min-height: 140px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .voice-commands-field::-webkit-scrollbar { width: 0; height: 0; }
        .response-accordion {
          border: 1px solid var(--ui-border);
          border-radius: 16px;
          background: var(--ui-card-bg-soft);
          overflow: hidden;
        }
        .response-accordion-head-static {
          padding: 12px 14px;
          border-bottom: 1px solid var(--ui-border);
        }
        .response-accordion-title {
          text-transform: uppercase;
          letter-spacing: .08em;
          font-size: 13px;
          color: var(--ui-accent);
        }
        .response-accordion-icon {
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: rgba(34,45,67,.08);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          line-height: 1;
        }
        .response-accordion-body {
          display: grid;
          gap: 12px;
          padding: 14px;
        }
        .response-items {
          display: grid;
          gap: 12px;
        }
        .response-item-card {
          display: grid;
          gap: 0;
          border: 1px solid var(--ui-border);
          border-radius: 14px;
          background: var(--ui-surface);
        }
        .response-item-toggle {
          width: 100%;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 11px 12px;
          font-weight: 700;
          text-align: left;
          color: var(--ui-text);
        }
        .response-item-card.open .response-item-toggle {
          border-bottom: 1px solid var(--ui-border);
        }
        .response-item-grid {
          display: grid;
          gap: 10px;
          padding: 12px;
        }
        .response-inline-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          align-items: start;
        }
        .response-item-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: 2px;
        }
        .array-builder {
          display: grid;
          gap: 10px;
          padding: 12px;
          border: 1px solid var(--ui-border);
          border-radius: 14px;
          background: var(--ui-card-bg-soft);
        }
        .array-builder-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .array-builder-footer {
          display: flex;
          justify-content: flex-start;
        }
        .array-builder-footer .compact-button {
          width: 100%;
          max-width: 100%;
          white-space: normal;
          word-break: break-word;
        }
        .array-builder-header > span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: var(--ui-accent);
        }
        .array-builder-list {
          display: grid;
          gap: 10px;
        }
        .array-item-row {
          display: flex;
          align-items: end;
          gap: 10px;
        }
        .array-item-row .field-grow {
          flex: 1 1 auto;
        }
        .array-item-row-2 {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
          align-items: end;
          gap: 10px;
        }
        .compact-delete-button {
          padding: 7px 12px;
          font-size: 12px;
        }
        .modal-backdrop { position:fixed; inset:0; background: var(--ui-backdrop); z-index:40; }
        .modal {
          position:fixed;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:min(640px,calc(100vw - 32px));
          max-height:calc(100vh - 56px);
          overflow-y:auto;
          overflow-x:hidden;
          padding:16px;
          border-radius:16px;
          border:1px solid var(--ui-border);
          background: var(--ui-popup-bg);
          z-index:41;
          display:grid;
          gap:14px;
          box-shadow: var(--ui-elev-2);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal-compact {
          width: min(520px, calc(100vw - 32px));
        }
        .modal::-webkit-scrollbar { width: 0; height: 0; }
        .modal-header, .modal-footer { display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .modal-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .modal-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
        .modal-grid > * { min-width: 0; }
        .field-inline { display:grid; grid-template-columns:1fr auto; gap:8px; align-items:center; }
        .field-inline-icon {
          position: relative;
          display: block;
        }
        .field-inline-icon input {
          padding-right: 48px;
        }
        .inline-icon-button {
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          font-size: 17px;
          line-height: 1;
        }
        .inline-icon-button:hover,
        .inline-icon-button:focus-visible {
          transform: translateY(-50%);
        }
        .field-span-2 { grid-column:1 / -1; }
        .dropdown-container {
          position: relative;
        }
        .dropdown-container input {
          width: 100%;
        }
        .dropdown-options {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          max-height: 200px;
          overflow-y: auto;
          background: var(--ui-popup-bg);
          color: var(--ui-text);
          border: 1px solid var(--ui-border);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
          max-width: 100%;
        }
        .dropdown-option {
          padding: 8px 12px;
          cursor: pointer;
          border-bottom: 1px solid var(--ui-border);
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        .dropdown-option:hover {
          background: var(--ui-hover);
        }
        .dropdown-option:last-child {
          border-bottom: none;
        }
        datalist {
          display: block;
          max-height: 200px;
          overflow-y: auto;
        }
        datalist option {
          padding: 8px;
          background: var(--ui-popup-bg);
          border-bottom: 1px solid var(--ui-border);
        }
        datalist option:hover {
          background: var(--ui-hover);
        }
        :host([data-theme="dark"]) .status.error {
          background: rgba(180,43,43,.18);
          color: #ffd2d2;
          border-color: rgba(255,140,140,.35);
        }
        :host([data-theme="dark"]) .status.ok {
          background: rgba(35,111,73,.2);
          color: #cbffe4;
          border-color: rgba(122,232,173,.32);
        }
        .modal-item-actions {
          gap: 10px;
        }
        .item-actions-close {
          width: 36px;
          height: 36px;
          padding: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          line-height: 1;
          font-weight: 600;
        }
        .item-actions-body {
          display: grid;
          gap: 12px;
        }
        .item-actions-status {
          margin: 0;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid var(--ui-border);
          background: linear-gradient(160deg, var(--ui-card-bg-soft), rgba(79, 134, 216, 0.08));
          color: var(--ui-text);
          font-weight: 600;
        }
        @keyframes rise-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 900px) {
          .modal-grid { grid-template-columns:1fr; }
          .response-inline-row { grid-template-columns: 1fr; }
          .array-item-row-2 { grid-template-columns: 1fr; }
          .array-item-row { flex-direction: column; align-items: stretch; }
          .subtabs-dock {
            overflow-x: auto;
            flex-wrap: nowrap;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }
          .subtabs {
            flex-wrap: nowrap;
            width: max-content;
          }
          .subtabs .subtab-button {
            flex: 0 0 auto;
            white-space: nowrap;
          }
        }
        @keyframes sheet-in {
          from {
            transform: translateY(16px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @media (max-width: 700px) {
          .modal {
            inset: 0;
            transform: none;
            width: 100vw;
            height: 100vh;
            max-height: none;
            border-radius: 0;
            border: none;
            padding: 16px;
          }
          .modal.modal-item-actions {
            top: auto;
            left: 0;
            right: 0;
            bottom: 0;
            inset: auto 0 0 0;
            width: 100%;
            height: auto;
            max-height: min(88vh, calc(100vh - 12px));
            border-radius: 20px 20px 0 0;
            border-left: none;
            border-right: none;
            border-bottom: none;
            padding: 14px 14px calc(14px + env(safe-area-inset-bottom));
            animation: sheet-in 180ms ease-out both;
          }
          .array-builder-footer .compact-button {
            width: 100%;
          }
          .modal-item-actions .modal-header {
            flex-direction: row;
            align-items: center;
          }
          .modal-item-actions .modal-header button {
            width: auto;
          }
          .modal-item-actions .modal-footer button {
            width: 100%;
          }
        }
</style>
`;var renderRoot=ctx=>{let hasModal=ctx._hasAnyModalOpen?.()??!1,canAccessDefaultsTab=ctx._isCurrentUserAdmin?.()??!1,body=ctx._renderActiveTabBody(),markup=`
    ${CREATE_SCENARIO_STYLES}
    <div class="create-scenario-shell ${hasModal?"modal-context-open":""}">
      <section class="subtabs-dock">
        <div class="subtabs">
          <button type="button" class="subtab-button ${ctx._tab===TABS.primary?"active":""}" data-tab="${TABS.primary}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${ctx._tab===TABS.secondary?"active":""}" data-tab="${TABS.secondary}">\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${ctx._tab===TABS.direct?"active":""}" data-tab="${TABS.direct}">\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</button>
          ${canAccessDefaultsTab?`<button type="button" class="subtab-button ${ctx._tab===TABS.defaults?"active":""}" data-tab="${TABS.defaults}">\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>`:""}
        </div>
      </section>
      ${ctx._error?`<div class="status error">${escapeHtml(ctx._error)}</div>`:""}
      ${ctx._status?`<div class="status ok">${escapeHtml(ctx._status)}</div>`:""}
      ${body}
    </div>
    ${ctx._renderModal()}
    ${ctx._renderDirectModal()}
    ${ctx._renderTemplateModal()}
    ${ctx._renderDefaultsModal()}
    ${ctx._renderItemActionsModal()}
  `;ctx._mountReact(markup)};var ensureModalBackdropStyle=()=>{if(typeof document>"u")return;let modalStyle=document.getElementById("dialog-custom-ui-modal-style");modalStyle||(modalStyle=document.createElement("style"),modalStyle.id="dialog-custom-ui-modal-style",modalStyle.textContent="body.modal-open { overflow: hidden; }",document.head.appendChild(modalStyle))},initializeCreateScenarioState=ctx=>{ctx._reactRoot=null,ctx._hass=null,ctx._config={base_url:"",timer_alarm_token:"",theme:"light"},ctx._tab=TABS.primary,ctx._commands=[],ctx._pageByTab={[TABS.primary]:1,[TABS.secondary]:1},ctx._totalByTab={[TABS.primary]:0,[TABS.secondary]:0},ctx._totalPagesByTab={[TABS.primary]:1,[TABS.secondary]:1},ctx._lastLoadedTab=TABS.primary,ctx._lastLoadPageKey="",ctx._inFlightPageKey="",ctx._lastLoadedPageKey="",ctx._lastLoadedPageAt=0,ctx._loading=!1,ctx._error="",ctx._status="",ctx._modalOpen=!1,ctx._modalMode="create",ctx._modalSaving=!1,ctx._editingId="",ctx._editingStatus=!1,ctx._openResponseItemIds=new Set,ctx._openDirectControlItemIds=new Set,ctx._openNextActionItemIds=new Set,ctx._bindController=null,ctx._legacyListeners=[],ctx._draft=ctx._newDraft(),ctx._searchActiveItemId=null,ctx._searchActiveType=null,ctx._searchResults=[],ctx._searchLoading=!1,ctx._searchDebounceTimer=null,ctx._modalScrollTop=0,ctx._directSubtab=DIRECT_SUBTABS.basic,ctx._directCommands=[],ctx._directLoading=!1,ctx._directError="",ctx._directModalOpen=!1,ctx._directModalMode="create",ctx._directModalSaving=!1,ctx._directEditingId="",ctx._directEditingStatus=!1,ctx._openDirectSubControlItemIds=new Set,ctx._directDraft=ctx._newDirectDraft(),ctx._templateCommands=[],ctx._templateLoading=!1,ctx._templateError="",ctx._templateModalOpen=!1,ctx._templateModalMode="create",ctx._templateModalSaving=!1,ctx._templateEditingId="",ctx._openTemplateSubControlItemIds=new Set,ctx._templateDraft=ctx._newTemplateDraft(),ctx._subDirectControlSampleOptions=[],ctx._defaultsLoading=!1,ctx._defaultsError="",ctx._defaultsModalOpen=!1,ctx._defaultsModalSaving=!1,ctx._defaultsByType=ctx._newDefaultsState(),ctx._defaultsActiveType=DEFAULT_COMMAND_CONFIGS[0].type,ctx._defaultsActiveId="",ctx._itemActionsModalOpen=!1,ctx._itemActionsSaving=!1,ctx._itemActionsId="",ctx._itemActionsKind="",ctx._itemActionsCollection="",ctx._itemActionsStatus=!1,ctx._itemActionsTitle="",ctx._modalCount=0};var CreateScenarioReactRoot=({controller,initialRenderState})=>{let mountRef=(0,import_react.useRef)(null),[renderState,setRenderState]=(0,import_react.useState)(initialRenderState);return(0,import_react.useLayoutEffect)(()=>{if(controller._reactRender=nextState=>setRenderState(nextState),controller._queuedReactRenderState){let queuedState=controller._queuedReactRenderState;controller._queuedReactRenderState=null,setRenderState(queuedState)}},[controller]),(0,import_react.useEffect)(()=>()=>{controller._reactRender&&(controller._reactRender=null)},[controller]),(0,import_react.useLayoutEffect)(()=>{mountRef.current&&controller._applyMarkupPatch(mountRef.current,renderState.markup)},[controller,renderState]),import_react.default.createElement("div",{ref:mountRef,"data-create-scenario-react-root":!0})},DialogCustomUiCreateScenario=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),ensureModalBackdropStyle(),initializeCreateScenarioState(this)}set hass(hass){let firstAttach=!this._hass,prevIsAdmin=this._isCurrentUserAdmin();this._hass=hass;let nextIsAdmin=this._isCurrentUserAdmin(),adminChanged=prevIsAdmin!==nextIsAdmin;this._tab===TABS.defaults&&!this._isCurrentUserAdmin()&&(this._tab=TABS.primary),(firstAttach||!this.shadowRoot?.innerHTML||adminChanged)&&this._render()}set config(config){let nextConfig={base_url:String(config?.base_url??"").trim(),timer_alarm_token:String(config?.timer_alarm_token??"").trim(),theme:String(config?.theme??"light").trim().toLowerCase()==="dark"?"dark":"light"},changed=nextConfig.base_url!==this._config.base_url||nextConfig.timer_alarm_token!==this._config.timer_alarm_token||nextConfig.theme!==this._config.theme,endpointChanged=nextConfig.base_url!==this._config.base_url||nextConfig.timer_alarm_token!==this._config.timer_alarm_token;if(!changed){this.shadowRoot?.innerHTML||this._render();return}if(this._config=nextConfig,this._applyTheme(),endpointChanged&&(this._tab===TABS.primary||this._tab===TABS.secondary)&&!this._loading&&nextConfig.base_url){this._error="",this._loadPage(this._pageByTab[this._tab]||1,{force:!0});return}if(endpointChanged&&this._tab===TABS.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._applyTheme(),this._render(),(this._tab===TABS.primary||this._tab===TABS.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1),this._tab===TABS.direct&&!this._directCommands.length&&!this._directLoading&&this._directSubtab===DIRECT_SUBTABS.basic&&this._loadDirectCommands(),this._tab===TABS.direct&&!this._templateCommands.length&&!this._templateLoading&&this._directSubtab===DIRECT_SUBTABS.templates&&this._loadTemplateCommands()}disconnectedCallback(){this._bindController?.abort&&(this._bindController.abort(),this._bindController=null),this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null,this._reactRender=null)}_mountReact(markup){let nextRenderState={markup,version:(this._reactRenderVersion??0)+1};this._reactRenderVersion=nextRenderState.version,this._reactRoot?this._reactRender?this._reactRender(nextRenderState):this._queuedReactRenderState=nextRenderState:(this._reactRoot=(0,import_client.createRoot)(this.shadowRoot),this._reactRoot.render(import_react.default.createElement(CreateScenarioReactRoot,{controller:this,initialRenderState:nextRenderState})))}_applyMarkupPatch(parent,markup){let viewportX=typeof window<"u"?window.scrollX:0,viewportY=typeof window<"u"?window.scrollY:0,scrollingElement=typeof document<"u"?document.scrollingElement:null,documentScrollTop=scrollingElement?scrollingElement.scrollTop:0,documentScrollLeft=scrollingElement?scrollingElement.scrollLeft:0,activeInputState=this._captureActiveInputState(),modal=this.shadowRoot.querySelector(".modal");modal&&(this._modalScrollTop=modal.scrollTop);let template=document.createElement("template");template.innerHTML=markup,this._patchChildren(parent,template.content);let newModal=this.shadowRoot.querySelector(".modal");newModal&&(newModal.scrollTop=this._modalScrollTop),this._restoreActiveInputState(activeInputState),scrollingElement&&(scrollingElement.scrollTop=documentScrollTop,scrollingElement.scrollLeft=documentScrollLeft),typeof window<"u"&&window.scrollTo(viewportX,viewportY),this._bind()}_patchChildren(parent,nextParent){let currentChildren=Array.from(parent.childNodes),nextChildren=Array.from(nextParent.childNodes),maxLength=Math.max(currentChildren.length,nextChildren.length);for(let index=0;index<maxLength;index+=1){let current=currentChildren[index],next=nextChildren[index];if(!next){current?.remove();continue}if(!current){parent.appendChild(next.cloneNode(!0));continue}this._patchNode(parent,current,next)}}_patchNode(parent,current,next){if(!this._canPatchNode(current,next)){parent.replaceChild(next.cloneNode(!0),current);return}if(!current.isEqualNode?.(next)){if(current.nodeType===Node.TEXT_NODE||current.nodeType===Node.COMMENT_NODE){current.nodeValue!==next.nodeValue&&(current.nodeValue=next.nodeValue);return}current.nodeType!==Node.ELEMENT_NODE||next.nodeType!==Node.ELEMENT_NODE||(this._patchAttributes(current,next),this._syncFormElement(current,next),this._patchChildren(current,next))}}_canPatchNode(current,next){return!current||!next||current.nodeType!==next.nodeType?!1:current.nodeType!==Node.ELEMENT_NODE?!0:current.nodeName===next.nodeName}_patchAttributes(current,next){Array.from(current.attributes).forEach(attribute=>{next.hasAttribute(attribute.name)||current.removeAttribute(attribute.name)}),Array.from(next.attributes).forEach(attribute=>{current.getAttribute(attribute.name)!==attribute.value&&current.setAttribute(attribute.name,attribute.value)})}_syncFormElement(current,next){let tagName=String(current.tagName??"").toLowerCase();if(tagName==="input"){current.type==="checkbox"||current.type==="radio"?current.checked=next.checked:this.shadowRoot?.activeElement!==current&&current.value!==next.value&&(current.value=next.value);return}if(tagName==="textarea"){this.shadowRoot?.activeElement!==current&&current.value!==next.value&&(current.value=next.value);return}tagName==="select"&&current.value!==next.value&&(current.value=next.value)}_captureActiveInputState(){let active=this.shadowRoot?.activeElement;if(!active||!(active instanceof HTMLElement))return null;let tagName=String(active.tagName||"").toLowerCase(),isTextInput=tagName==="textarea"||tagName==="input"&&!["checkbox","radio","button","submit","reset","file"].includes(String(active.getAttribute("type")||"").toLowerCase());return{tagName,directControlItemId:active.getAttribute("data-direct-control-item-id")||"",nextActionItemId:active.getAttribute("data-next-action-item-id")||"",nextActionItemField:active.getAttribute("data-next-action-item-field")||"",field:active.getAttribute("data-field")||"",isTextInput,selectionStart:isTextInput&&typeof active.selectionStart=="number"?active.selectionStart:null,selectionEnd:isTextInput&&typeof active.selectionEnd=="number"?active.selectionEnd:null}}_restoreActiveInputState(state){if(!state||!this.shadowRoot)return;let selector="";if(state.directControlItemId?selector=`input[data-direct-control-item-id="${state.directControlItemId}"],textarea[data-direct-control-item-id="${state.directControlItemId}"]`:state.nextActionItemId&&state.nextActionItemField?selector=`[data-next-action-item-id="${state.nextActionItemId}"][data-next-action-item-field="${state.nextActionItemField}"]`:state.field&&(selector=`[data-field="${state.field}"]`),!selector)return;let element=this.shadowRoot.querySelector(selector);if(element instanceof HTMLElement&&(element.focus({preventScroll:!0}),state.isTextInput&&typeof state.selectionStart=="number"&&typeof state.selectionEnd=="number"&&typeof element.setSelectionRange=="function")){let valueLength=String(element.value??"").length,start=Math.min(state.selectionStart,valueLength),end=Math.min(state.selectionEnd,valueLength);element.setSelectionRange(start,end)}}_resolveSearchInputElement(searchType,itemId){if(!this.shadowRoot)return null;let normalizedId=String(itemId??"").trim();return normalizedId?searchType==="directControl"?this.shadowRoot.querySelector(`input[data-direct-control-item-id="${normalizedId}"]`):searchType==="nextAction"?this.shadowRoot.querySelector(`input[data-next-action-item-id="${normalizedId}"][data-next-action-item-field="uuid"]`):null:null}_clearSearchDropdown(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".dropdown-container > .dropdown-options").forEach(element=>{element.remove()})}_renderSearchDropdown(){if(!this.shadowRoot)return;this._clearSearchDropdown();let searchType=String(this._searchActiveType??"").trim(),itemId=String(this._searchActiveItemId??"").trim(),results=Array.isArray(this._searchResults)?this._searchResults:[];if(!itemId||!results.length||searchType!=="directControl"&&searchType!=="nextAction")return;let container=this._resolveSearchInputElement(searchType,itemId)?.closest?.(".dropdown-container");if(!(container instanceof HTMLElement))return;let options=document.createElement("div");options.className="dropdown-options",results.forEach(result=>{let option=document.createElement("div");option.className="dropdown-option";let title=String(result?.title??result?.name??"").trim(),uuid=String(result?.uuid??"").trim();option.textContent=title?`${title} (${uuid})`:uuid,option.addEventListener("mousedown",event=>event.preventDefault()),option.addEventListener("click",event=>{event.preventDefault(),event.stopPropagation(),this._selectSearchResult(itemId,{uuid,title,mappingType:String(result?.mappingType??result?.mapping_type??result?.actionType??result?.action_type??result?.type??"").trim()})}),options.appendChild(option)}),container.appendChild(options)}_addModalBackdrop(){this._modalCount++,this._modalCount===1&&typeof document<"u"&&document.body&&document.body.classList.add("modal-open")}_removeModalBackdrop(){this._modalCount=Math.max(0,this._modalCount-1),this._modalCount===0&&typeof document<"u"&&document.body&&document.body.classList.remove("modal-open")}_newDraft(source=null){return createCommandDraft(source)}_newDirectDraft(source=null){return createDirectCommandDraft(source)}_newTemplateDraft(source=null){return createTemplateCommandDraft(source)}_defaultConfig(type){return getDefaultCommandConfig(type)}_newDefaultsDraft(type,source=null){return createDefaultsDraft(type,source)}_newDefaultsState(){return createDefaultsState()}_apiHeaders(withJson=!1){let headers={};return withJson&&(headers["Content-Type"]="application/json"),this._config.timer_alarm_token&&(headers.Authorization=this._config.timer_alarm_token),headers["x-user"]=this._resolveXUserHeader(),headers}_getCurrentUserId(){return String(this._hass?.user?.id??"").trim()}_isCurrentUserAdmin(){let raw=this._hass?.user?.is_admin??this._hass?.user?.isAdmin;if(typeof raw=="boolean")return raw;if(typeof raw=="number")return raw===1;if(typeof raw=="string"){let normalized=raw.trim().toLowerCase();return normalized==="true"||normalized==="1"||normalized==="yes"}return!1}_resolveXUserHeader(){return this._isCurrentUserAdmin()?"":this._getCurrentUserId()}_apiUrl(path){let base=String(this._config.base_url??"").trim().replace(/\/$/,"");return base?`${base}${path}`:""}async _loadPage(page=1,options={}){if(this._tab!==TABS.primary&&this._tab!==TABS.secondary)return;let{force=!1}=options??{},tab=this._tab,pageNumber=Math.max(1,Number(page)||1),requestKey=`${tab}:${pageNumber}`;if(this._inFlightPageKey===requestKey)return;let now=Date.now();if(!force&&this._lastLoadedPageKey===requestKey&&now-this._lastLoadedPageAt<1500)return;let endpoint=tab===TABS.secondary?"/api/cms/sub-commands":"/api/cms/commands",url=this._apiUrl(`${endpoint}?page=${encodeURIComponent(pageNumber)}&pageSize=${20}`);if(!url){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._lastLoadPageKey=requestKey,this._inFlightPageKey=requestKey,this._loading=!0,this._error="",this._render();try{let response=await fetch(url,{method:"GET",headers:this._apiHeaders(!1)});if(!response.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${response.status}`);let result=await response.json(),data=Array.isArray(result.data)?result.data:[],pagination=result?.meta?.pagination??result?.pagination??{},total=Number(pagination.total??result.total??result.count??result.meta?.total??0),responsePage=Number(pagination.page??pageNumber)||pageNumber,responsePageSize=Number(pagination.pageSize??20)||20,responseTotalPages=Number(pagination.totalPages??pagination.pageCount??0),resolvedTotalPages=Number.isFinite(responseTotalPages)&&responseTotalPages>0?responseTotalPages:Math.max(1,Math.ceil((Number.isFinite(total)&&total>0?total:data.length)/responsePageSize));this._commands=data,this._lastLoadedTab=tab,this._pageByTab[tab]=Math.max(1,responsePage),this._totalPagesByTab[tab]=Math.max(1,resolvedTotalPages),this._totalByTab[tab]=Number.isFinite(total)&&total>0?total:Number.isFinite(responseTotalPages)&&responseTotalPages>0?responseTotalPages*responsePageSize:pageNumber*20+(data.length===20?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${data.length}.`,this._lastLoadedPageKey=requestKey,this._lastLoadedPageAt=Date.now()}catch(error){this._commands=[],this._error=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._inFlightPageKey===requestKey&&(this._inFlightPageKey=""),this._loading=!1,this._render()}}_setTab(tab){let viewportScrollY=typeof window<"u"?window.scrollY:0;if(tab===TABS.defaults&&!this._isCurrentUserAdmin()){this._tab=TABS.primary,this._error="",this._status="",this._render(),typeof window<"u"&&window.scrollTo(0,viewportScrollY),(!this._loading||this._lastLoadedTab!==TABS.primary)&&this._loadPage(this._pageByTab[TABS.primary]||1);return}if(this._tab=tab,this._error="",this._status="",this._render(),typeof window<"u"&&window.scrollTo(0,viewportScrollY),tab===TABS.primary||tab===TABS.secondary){let page=this._pageByTab[tab]||1;(!this._loading||this._lastLoadedTab!==tab)&&this._loadPage(page)}tab===TABS.direct&&(this._directSubtab===DIRECT_SUBTABS.basic&&!this._directCommands.length&&!this._directLoading&&this._loadDirectCommands(),this._directSubtab===DIRECT_SUBTABS.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands()),tab===TABS.defaults&&!this._defaultsLoading&&this._reloadDefaultsCommands()}_buildPaginationItems(currentPage,totalPages){let current=Math.max(1,Number(currentPage)||1),total=Math.max(1,Number(totalPages)||1);return total<=7?Array.from({length:total},(_,i)=>i+1):current<=4?[1,2,3,4,"ellipsis",total]:current>=total-3?[1,"ellipsis",total-3,total-2,total-1,total]:[1,"ellipsis",current-1,current,current+1,"ellipsis",total]}_openCreateModal(){return openCreateModal(this)}_applyTheme(){let theme=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme},this.setAttribute("data-theme",theme)}_openEditModal(commandId){return openEditModal(this,commandId)}_closeModal(){return closeModal(this)}_updateDraft(field,value){this._draft={...this._draft,[field]:value}}_buildPayload(){let payload=buildCommandPayloadFromDraft(this._draft);return this._tab===TABS.secondary?(delete payload.componentDialog,payload):(delete payload.subComponentDialog,payload)}_refreshUuid(){return refreshUuid(this)}_addVoiceResponseItem(){return addVoiceResponseItem(this)}_removeVoiceResponseItem(itemId){return removeVoiceResponseItem(this,itemId)}_updateVoiceResponseItem(itemId,field,value){return updateVoiceResponseItem(this,itemId,field,value)}_toggleResponseItem(itemId){return toggleResponseItem(this,itemId)}_addDirectControlItem(){return addDirectControlItem(this)}_removeDirectControlItem(itemId){return removeDirectControlItem(this,itemId)}_updateDirectControlItem(itemId,value){return updateDirectControlItem(this,itemId,value)}_toggleDirectControlItem(itemId){return toggleDirectControlItem(this,itemId)}_addNextActionItem(){return addNextActionItem(this)}_removeNextActionItem(itemId){return removeNextActionItem(this,itemId)}_updateNextActionItem(itemId,field,value){return updateNextActionItem(this,itemId,field,value)}_toggleNextActionItem(itemId){return toggleNextActionItem(this,itemId)}_setDirectSubtab(subtab){return setDirectSubtab(this,subtab)}async _loadDirectCommands(){return loadDirectCommands(this)}async _loadTemplateCommands(){return loadTemplateCommands(this)}_reloadDirectCommands(){return reloadDirectCommands(this)}_reloadTemplateCommands(){return reloadTemplateCommands(this)}_openCreateDirectModal(){return openCreateDirectModal(this)}_openEditDirectModal(commandId){return openEditDirectModal(this,commandId)}_closeDirectModal(){return closeDirectModal(this)}_updateDirectDraft(field,value){return updateDirectDraft(this,field,value)}async _hydrateSelectedSubDirectControlSample(){return hydrateSelectedSubDirectControlSample(this)}_refreshDirectUuid(){return refreshDirectUuid(this)}_refreshTemplateUuid(){return refreshTemplateUuid(this)}_addDirectSubControlItem(){return addDirectSubControlItem(this)}_removeDirectSubControlItem(itemId){return removeDirectSubControlItem(this,itemId)}_toggleDirectSubControlItem(itemId){return toggleDirectSubControlItem(this,itemId)}_updateDirectSubControlItem(itemId,field,value){return updateDirectSubControlItem(this,itemId,field,value)}_buildDirectPayload(){return buildDirectPayloadFromDraft(this._directDraft)}async _loadSubDirectControlSamples(){return loadSubDirectControlSamples(this)}async _performUuidSearch(searchText,searchType,itemId=null){return performUuidSearch(this,searchText,searchType,itemId)}_debouncedPerformUuidSearch(searchText,searchType,itemId=null){return debouncedPerformUuidSearch(this,searchText,searchType,itemId)}_selectSearchResult(itemId,result){return selectSearchResult(this,itemId,result)}async _searchUuid(searchText,collections){return searchUuid(this,searchText,collections)}async _resolveTitleByUuid(uuid,collections){return resolveTitleByUuid(this,uuid,collections)}async _hydrateDirectControlTitles(){return hydrateDirectControlTitles(this)}async _hydrateNextActionTitles(){return hydrateNextActionTitles(this)}async _deleteItem(collection,uuid){return deleteItem(this,collection,uuid)}_openItemActionsModal({kind,id,title,collection,status}){return openItemActionsModal(this,{kind,id,title,collection,status})}_closeItemActionsModal(){return closeItemActionsModal(this)}async _updateCommandStatusById(commandId,collection,nextStatus){return updateCommandStatusById(this,commandId,collection,nextStatus)}async _updateDirectStatusById(directId,nextStatus){return updateDirectStatusById(this,directId,nextStatus)}async _applyItemStatus(){return applyItemStatus(this)}async _toggleEditModalStatus(){return toggleEditModalStatus(this)}async _toggleDirectEditModalStatus(){return toggleDirectEditModalStatus(this)}async _saveDirectModal(){return saveDirectModal(this)}async _deleteDirectModal(){return deleteDirectModal(this)}_openCreateTemplateModal(){return openCreateTemplateModal(this)}_openEditTemplateModal(templateId){return openEditTemplateModal(this,templateId)}_closeTemplateModal(){return closeTemplateModal(this)}_updateTemplateDraft(field,value){return updateTemplateDraft(this,field,value)}_addTemplateSubControlItem(){return addTemplateSubControlItem(this)}_removeTemplateSubControlItem(itemId){return removeTemplateSubControlItem(this,itemId)}_toggleTemplateSubControlItem(itemId){return toggleTemplateSubControlItem(this,itemId)}_updateTemplateSubControlItem(itemId,field,value){return updateTemplateSubControlItem(this,itemId,field,value)}_buildTemplatePayload(){return buildTemplatePayloadFromDraft(this._templateDraft)}async _saveTemplateModal(){return saveTemplateModal(this)}async _deleteTemplateModal(){return deleteTemplateModal(this)}_reloadDefaultsCommands(){return reloadDefaultsCommands(this)}_openDefaultsModal(type){return openDefaultsModal(this,type)}_closeDefaultsModal(){return closeDefaultsModal(this)}_updateDefaultsDraft(field,value){return updateDefaultsDraft(this,field,value)}_buildDefaultsPayload(){let type=this._defaultsActiveType,draft=this._defaultsByType[type]??this._newDefaultsDraft(type);return buildDefaultsPayloadFromDraft(type,draft)}async _saveDefaultsType(type,closeModal2=!1){return saveDefaultsType(this,type,closeModal2)}async _saveDefaultsModal(){return saveDefaultsModal(this)}async _saveModal(){return saveModal(this)}async _deleteModal(){return deleteModal(this)}_renderCommandsTab(tabKey){return renderCommandsTab(this,tabKey)}_renderPrimaryCommandsPage(){return renderPrimaryCommandsPage(this)}_renderSecondaryCommandsPage(){return renderSecondaryCommandsPage(this)}_renderDirectBasicSection(listMarkup){return renderDirectBasicSection(this,listMarkup)}_renderDirectTemplatesSection(templateListMarkup){return renderDirectTemplatesSection(this,templateListMarkup)}_renderDirectCommandsTab(){return renderDirectCommandsTab(this)}_renderActiveTabBody(){return renderActiveTabBody(this)}_renderStub(title,description){return renderStub(title,description)}_renderDirectModal(){return renderDirectModal(this)}_renderTemplateModal(){return renderTemplateModal(this)}_renderDefaultsTab(){return renderDefaultsTab(this)}_renderDefaultsModal(){return renderDefaultsModal(this)}_renderModal(){return renderMainModal(this)}_renderItemActionsModal(){return renderItemActionsModal(this)}_swallowUiEvent(event){event.stopPropagation()}_hasAnyModalOpen(){return!!(this._modalOpen||this._directModalOpen||this._templateModalOpen||this._defaultsModalOpen||this._itemActionsModalOpen)}_bind(){bindEvents(this)}_render(){renderRoot(this)}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",DialogCustomUiCreateScenario);var DEFAULT_CONFIG={base_url:"http://127.0.0.1:8000",allow_non_admin_panel:!0,client_id:"",command_receive_mode:"http",redis_url:"redis://127.0.0.1:6379/0",redis_channel:"dialog_commands",timer_alarm_token:"",yandex_tts_api_key:"",yandex_tts_folder_id:"",yandex_tts_lang:"ru-RU",yandex_tts_codec:"oggopus",yandex_tts_voice:"oksana",yandex_tts_emotion:"good",yandex_tts_speed:1.1,timer_alarm_device_ids:[""],theme:"light",timeout:10,scenarios:[]},EXAMPLE_PAYLOAD=`{
  "children_type": "some_subcommand",
  "children_direct_type": [
    {
      "mapping_type": "some_direct_subcommand",
      "value": {
        "some_direct_subcommand": "example"
      }
    }
  ],
  "parent_type": "weather_metno",
  "value": {"commands": "\u043C\u043E\u0441\u043A\u0432\u0430"},
  "client_id": "...",
  "device_id": "..."
}`,LOG_POLL_INTERVAL_MS=2e3,MODULE_VERSION=new URL(import.meta.url).searchParams.get("v")||"",IS_LOCAL_DEV=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),TIMER_ALARM_MODULE_URL=MODULE_VERSION?IS_LOCAL_DEV?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(MODULE_VERSION)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(MODULE_VERSION)}`:IS_LOCAL_DEV?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js";var createEventBinder=root=>(element,eventName,handler)=>{element&&element.addEventListener(eventName,handler)};var bindPanelActions=(ctx,root,on)=>{root.querySelectorAll("[data-tab]").forEach(element=>{on(element,"click",()=>ctx._setActiveTab(element.dataset.tab))}),on(root.querySelector('[data-action="save"]'),"click",()=>ctx._save()),on(root.querySelector('[data-action="refresh-logs"]'),"click",()=>ctx._loadLogs()),on(root.querySelector('[data-action="download-json"]'),"click",()=>ctx._downloadJson()),on(root.querySelector('[data-action="upload-json"]'),"click",()=>ctx._openJsonFilePicker()),on(root.querySelector('[data-action="download-yandex-tts-files"]'),"click",()=>ctx._downloadYandexTtsFiles()),on(root.querySelector('[data-action="upload-yandex-tts-files"]'),"click",()=>ctx._openYandexTtsFilePicker()),on(root.querySelector('[data-action="reset-commands-cache"]'),"click",()=>ctx._resetCommandsCache()),on(root.querySelector('[data-action="reload-yandex-scenarios"]'),"click",()=>ctx._loadYandexScenarios()),on(root.querySelector('[data-action="create-yandex-tab"]'),"click",()=>ctx._startYandexScenarioCreate()),on(root.querySelector('[data-action="save-yandex-scenario"]'),"click",()=>ctx._saveYandexScenarioFromModal()),on(root.querySelector('[data-action="delete-yandex-scenario"]'),"click",()=>ctx._deleteActiveYandexScenario()),root.querySelectorAll('[data-action="toggle-secret"]').forEach(element=>{on(element,"click",()=>ctx._toggleSecretField(element.dataset.secretField))});let addScenarioButton=root.querySelector('[data-action="add-scenario"]');addScenarioButton&&(addScenarioButton.onclick=()=>ctx._addScenario()),root.querySelectorAll('[data-action="select-yandex-tab"]').forEach(element=>{on(element,"click",()=>ctx._setYandexActiveScenario(element.dataset.yandexTab))}),on(root.querySelector('[data-action="select-yandex-tab-dropdown"]'),"change",event=>{ctx._setYandexActiveScenario(event.currentTarget.value)}),root.querySelectorAll('[data-action="add-yandex-sub"]').forEach(element=>{on(element,"click",()=>ctx._addYandexDraftSubItem(element.dataset.subType))}),root.querySelectorAll('[data-action="remove-yandex-sub"]').forEach(element=>{on(element,"click",()=>ctx._removeYandexDraftSubItem(element.dataset.subType,Number(element.dataset.subIndex)))}),root.querySelectorAll("[data-yandex-sub-accordion]").forEach(element=>{on(element,"toggle",()=>ctx._setYandexSubEditorOpen(element.dataset.yandexSubAccordion,element.open))}),root.querySelectorAll("[data-yandex-sub-item-accordion]").forEach(element=>{on(element,"toggle",()=>{let key=element.dataset.yandexSubItemAccordion,itemId=element.dataset.yandexSubItemId;ctx._setYandexSubItemOpen(key,element.open?itemId:"")})}),on(root.querySelector('[data-action="import-json-input"]'),"change",event=>{let[file]=event.currentTarget.files||[];ctx._importJsonFile(file)}),on(root.querySelector('[data-action="import-yandex-tts-input"]'),"change",event=>{let[file]=event.currentTarget.files||[];ctx._importYandexTtsArchive(file)}),root.querySelectorAll('[data-action="add-condition"]').forEach(element=>{on(element,"click",()=>ctx._addCondition(element.dataset.scenarioId))}),root.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(element=>{on(element,"click",()=>ctx._enableConditionChildrenType(element.dataset.scenarioId,element.dataset.conditionId))}),root.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(element=>{on(element,"click",()=>ctx._disableConditionChildrenType(element.dataset.scenarioId,element.dataset.conditionId))}),root.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(element=>{on(element,"click",()=>ctx._enableConditionChildrenDirectType(element.dataset.scenarioId,element.dataset.conditionId))}),root.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(element=>{on(element,"click",()=>ctx._disableConditionChildrenDirectType(element.dataset.scenarioId,element.dataset.conditionId))}),root.querySelectorAll("[data-toggle-scenario]").forEach(element=>{on(element,"click",()=>ctx._toggleScenario(element.dataset.toggleScenario))}),root.querySelectorAll("[data-toggle-condition]").forEach(element=>{on(element,"click",()=>ctx._toggleCondition(element.dataset.toggleCondition))}),root.querySelectorAll("[data-remove-id]").forEach(element=>{on(element,"click",()=>ctx._removeScenario(element.dataset.removeId))}),root.querySelectorAll("[data-remove-condition-id]").forEach(element=>{on(element,"click",()=>ctx._removeCondition(element.dataset.scenarioId,element.dataset.removeConditionId))}),root.querySelectorAll('[data-action="scenarios-page"]').forEach(element=>{on(element,"click",()=>ctx._setScenariosPage(element.dataset.page))}),root.querySelectorAll('[data-action="scenarios-page-nav"]').forEach(element=>{on(element,"click",()=>{let direction=element.dataset.direction==="prev"?-1:1;ctx._setScenariosPage((Number(ctx._scenariosPage)||1)+direction)})});let createScenarioElement=root.querySelector("dialog-custom-ui-create-scenario");createScenarioElement&&(createScenarioElement.hass=ctx._hass,createScenarioElement.config={base_url:ctx._config.base_url,timer_alarm_token:ctx._config.timer_alarm_token,theme:ctx._config.theme})};var bindPanelFields=(ctx,root,on)=>{root.querySelectorAll("input, select, textarea").forEach(element=>{["click","focusin"].forEach(eventName=>{on(element,eventName,event=>ctx._swallowUiEvent(event))})}),root.querySelectorAll("[data-config-field]").forEach(element=>{let readValue=event=>element.dataset.configField==="theme"?event.currentTarget.checked?"dark":"light":element.dataset.configBool==="true"?event.currentTarget.checked:event.currentTarget.value;on(element,"input",event=>{ctx._updateConfigField(event.currentTarget.dataset.configField,readValue(event),!1)}),on(element,"change",event=>{ctx._updateConfigField(event.currentTarget.dataset.configField,readValue(event),!0)})}),root.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(element=>{let field=element.dataset.scenarioField,id=element.dataset.scenarioId;element.tagName==="SELECT"?on(element,"change",event=>{ctx._updateScenario(id,field,event.currentTarget.value,!0)}):(on(element,"input",event=>{ctx._updateScenario(id,field,event.currentTarget.value,!1)}),on(element,"change",event=>{ctx._updateScenario(id,field,event.currentTarget.value,!0)}))}),root.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(element=>{let scenarioId=element.dataset.scenarioId,conditionId=element.dataset.conditionId,field=element.dataset.conditionField;on(element,"input",event=>{ctx._updateCondition(scenarioId,conditionId,field,event.currentTarget.value,!1)}),on(element,"change",event=>{ctx._updateCondition(scenarioId,conditionId,field,event.currentTarget.value,!0)})}),root.querySelectorAll("[data-yandex-field]").forEach(element=>{on(element,"input",event=>{ctx._updateYandexDraftField(event.currentTarget.dataset.yandexField,event.currentTarget.value,!1)}),on(element,"change",event=>{ctx._updateYandexDraftField(event.currentTarget.dataset.yandexField,event.currentTarget.value,!1)})}),root.querySelectorAll("[data-yandex-sub-field][data-yandex-sub-type][data-yandex-sub-index]").forEach(element=>{on(element,"input",event=>{ctx._updateYandexDraftSubItem(event.currentTarget.dataset.yandexSubType,Number(event.currentTarget.dataset.yandexSubIndex),event.currentTarget.dataset.yandexSubField,event.currentTarget.value,!1)}),on(element,"change",event=>{ctx._updateYandexDraftSubItem(event.currentTarget.dataset.yandexSubType,Number(event.currentTarget.dataset.yandexSubIndex),event.currentTarget.dataset.yandexSubField,event.currentTarget.value,!1)})})};var renderCreateScenario=()=>`
    <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
  `;var escapeHtml2=value=>String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),generateScenarioId=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,generateConditionId=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,newCondition=()=>({id:generateConditionId(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),newScenario=()=>({id:generateScenarioId(),name:"",script_entity_id:"",conditions:[newCondition()]});var renderJsonTools=ctx=>{let payload=ctx._buildConfigPayload();return`
      <section class="hero-card">
        <h1>JSON</h1>
        <p>\u041C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0432 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u0439 JSON \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0444\u043E\u0440\u043C\u0443.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="download-json">\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON</button>
          <button type="button" class="primary" data-action="upload-json">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON</button>
          <input type="file" accept=".json,application/json" data-action="import-json-input" hidden />
        </div>
        ${ctx._error?`<div class="status error">${escapeHtml2(ctx._error)}</div>`:""}
        ${ctx._status?`<div class="status ok">${escapeHtml2(ctx._status)}</div>`:""}
      </section>
      <section class="help-card">
        <div><strong>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E JSON</strong></div>
        <pre><code>${escapeHtml2(JSON.stringify(payload,null,2))}</code></pre>
      </section>
    `};var renderLogs=ctx=>{let logMarkup=ctx._logs.length?ctx._logs.map(item=>`
          <div class="log-item ${escapeHtml2(item.level)}">
            <div class="log-meta">
              <span class="log-time">${escapeHtml2(item.ts)}</span>
              <span class="log-level">${escapeHtml2(item.level)}</span>
            </div>
            <div class="log-message">${escapeHtml2(item.message)}</div>
          </div>
        `).join(""):'<div class="empty">\u041B\u043E\u0433\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h1>Logs</h1>
        <p>\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 10 \u0441\u043E\u0431\u044B\u0442\u0438\u0439: \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, 204, \u043E\u0448\u0438\u0431\u043A\u0438, \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u043A\u0440\u0438\u043F\u0442\u0430.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-logs" ${ctx._loadingLogs?"disabled":""}>${ctx._loadingLogs?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        </div>
      </section>
      <section class="help-card logs-card">
        ${logMarkup}
      </section>
    `};var renderSecretField=(ctx,field,title,value,placeholder="")=>{let visible=ctx._isSecretVisible(field);return`
    <label>
      <span>${title}</span>
      <div class="secret-field">
        <input
          data-config-field="${field}"
          type="${visible?"text":"password"}"
          value="${escapeHtml2(value??"")}"
          placeholder="${escapeHtml2(placeholder)}"
          autocomplete="off"
          spellcheck="false"
        />
        <button
          type="button"
          class="ghost secret-toggle-button"
          data-action="toggle-secret"
          data-secret-field="${field}"
          title="${visible?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"}"
          aria-label="${visible?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"}"
        >${visible?"Hide":"Show"}</button>
      </div>
    </label>
  `},renderSettings=ctx=>`
      <section class="hero-card">
        <h1>Settings</h1>
        <p>\u041E\u0431\u0449\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432 \u0438 Yandex TTS: IP, client_id, \u0442\u043E\u043A\u0435\u043D\u044B, timeout, voice/speed/folderId \u0438 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${escapeHtml2(ctx._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 POST \u043D\u0430 <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
          <label>
            <span>Client ID</span>
            <input data-config-field="client_id" value="${escapeHtml2(ctx._config.client_id)}" placeholder="user-123" />
            <small>\u041F\u043E\u043B\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0435\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A\u0430\u043A <code>{"clientId":"..."}</code>.</small>
          </label>
          <label>
            <span>\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u0430\u043D\u0434</span>
            <select data-config-field="command_receive_mode">
              <option value="http" ${String(ctx._config.command_receive_mode??"http")==="http"?"selected":""}>HTTP polling</option>
              <option value="redis_subscribe" ${String(ctx._config.command_receive_mode??"")==="redis_subscribe"?"selected":""}>Redis SUBSCRIBE</option>
            </select>
            <small>HTTP \u0434\u0435\u043B\u0430\u0435\u0442 <code>command-check</code> \u0440\u0430\u0437 \u0432 \u0441\u0435\u043A\u0443\u043D\u0434\u0443, Redis \u0441\u043B\u0443\u0448\u0430\u0435\u0442 \u043A\u0430\u043D\u0430\u043B \u0447\u0435\u0440\u0435\u0437 <code>SUBSCRIBE</code>.</small>
          </label>
          <label>
            <span>Redis URL</span>
            <input data-config-field="redis_url" value="${escapeHtml2(ctx._config.redis_url)}" placeholder="redis://127.0.0.1:6379/0" />
            <small>\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 Redis SUBSCRIBE.</small>
          </label>
          <label>
            <span>Redis channel</span>
            <input data-config-field="redis_channel" value="${escapeHtml2(ctx._config.redis_channel)}" placeholder="dialog_commands" />
            <small>\u041A\u0430\u043D\u0430\u043B, \u043A\u0443\u0434\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u044E\u0442\u0441\u044F JSON-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432.</small>
          </label>
          ${renderSecretField(ctx,"timer_alarm_token","Authorization token",ctx._config.timer_alarm_token,"Bearer xxx")}
          <label class="field-narrow">
            <span>Timeout, \u0441\u0435\u043A\u0443\u043D\u0434</span>
            <input data-config-field="timeout" type="number" min="1" value="${escapeHtml2(ctx._config.timeout)}" />
          </label>
          <label class="field-narrow">
            <span>\u0422\u0435\u043C\u0430</span>
            <div class="switch-control">
              <input
                type="checkbox"
                data-config-field="theme"
                data-config-bool="true"
                ${ctx._config.theme==="dark"?"checked":""}
              />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${ctx._config.theme==="dark"?"Dark":"Light"}</span>
            </div>
          </label>
          <label class="field-narrow">
            <span>\u0414\u043E\u0441\u0442\u0443\u043F \u043D\u0435-\u0430\u0434\u043C\u0438\u043D\u0430\u043C</span>
            <div class="switch-control">
              <input
                type="checkbox"
                data-config-field="allow_non_admin_panel"
                data-config-bool="true"
                ${ctx._config.allow_non_admin_panel?"checked":""}
              />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${ctx._config.allow_non_admin_panel?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D"}</span>
            </div>
          </label>
          <div class="field-span-2 settings-subsection">
            <div class="section-label">Yandex TTS</div>
            <div class="config-grid">
              ${renderSecretField(ctx,"yandex_tts_api_key","API Key",ctx._config.yandex_tts_api_key,"AQVN...")}
              <label>
                <span>folderId</span>
                <input data-config-field="yandex_tts_folder_id" value="${escapeHtml2(ctx._config.yandex_tts_folder_id)}" placeholder="b1g..." />
              </label>
              <label>
                <span>Voice</span>
                <select data-config-field="yandex_tts_voice">
                  ${["oksana","jane","omazh","zahar","ermil","silaerkan","erkanyavas","alyss","nick","alena","filipp"].map(voice=>`<option value="${voice}" ${String(ctx._config.yandex_tts_voice??"")===voice?"selected":""}>${voice}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Speed</span>
                <input data-config-field="yandex_tts_speed" type="number" min="0.1" max="3" step="0.1" value="${escapeHtml2(ctx._config.yandex_tts_speed)}" />
              </label>
              <label>
                <span>Language</span>
                <select data-config-field="yandex_tts_lang">
                  ${["ru-RU","en-US","tr-TR"].map(lang=>`<option value="${lang}" ${String(ctx._config.yandex_tts_lang??"")===lang?"selected":""}>${lang}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Codec</span>
                <select data-config-field="yandex_tts_codec">
                  ${["oggopus","wav","lpcm"].map(codec=>`<option value="${codec}" ${String(ctx._config.yandex_tts_codec??"")===codec?"selected":""}>${codec}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Emotion</span>
                <select data-config-field="yandex_tts_emotion">
                  ${["good","neutral","evil"].map(emotion=>`<option value="${emotion}" ${String(ctx._config.yandex_tts_emotion??"")===emotion?"selected":""}>${emotion}</option>`).join("")}
                </select>
              </label>
              <div class="field-span-2 toolbar">
                <button type="button" class="ghost" data-action="download-yandex-tts-files">\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B /homeassistant/tts</button>
                <button type="button" class="ghost" data-action="upload-yandex-tts-files">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B \u0432 /homeassistant/tts</button>
                <input type="file" accept=".zip,application/zip" data-action="import-yandex-tts-input" style="display:none" />
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <button type="button" class="ghost" data-action="reset-commands-cache">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448</button>
          <button type="button" class="primary" data-action="save" ${ctx._saving?"disabled":""}>${ctx._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${ctx._error?`<div class="status error">${escapeHtml2(ctx._error)}</div>`:""}
        ${ctx._status?`<div class="status ok">${escapeHtml2(ctx._status)}</div>`:""}
      </section>
    `;var renderScenarios=ctx=>{let scripts=ctx._scripts(),allScenarios=Array.isArray(ctx._config.scenarios)?ctx._config.scenarios:[],pageSize=Math.max(1,Number(ctx._scenariosPageSize)||20),totalScenarios=allScenarios.length,totalPages=Math.max(1,Math.ceil(totalScenarios/pageSize)),requestedPage=Number(ctx._scenariosPage)||1,currentPage=Math.min(Math.max(1,Math.trunc(requestedPage)),totalPages);ctx._scenariosPage!==currentPage&&(ctx._scenariosPage=currentPage);let startIndex=(currentPage-1)*pageSize,visibleScenarios=allScenarios.slice(startIndex,startIndex+pageSize),pageStart=Math.max(1,currentPage-2),pageEnd=Math.min(totalPages,pageStart+4),pageButtons=[];for(let page=pageStart;page<=pageEnd;page+=1)pageButtons.push(`
      <button
        type="button"
        class="${page===currentPage?"primary compact-button":"ghost compact-button"}"
        data-action="scenarios-page"
        data-page="${page}"
        ${page===currentPage?"disabled":""}
      >${page}</button>
    `);let scenarioMarkup=visibleScenarios.length?visibleScenarios.map((scenario,index)=>{let isExpanded=ctx._expandedScenarios.has(scenario.id),conditionsMarkup=scenario.conditions.map((condition,conditionIndex)=>`
            ${(()=>{let isConditionExpanded=ctx._expandedConditions.has(condition.id),previewParts=[];condition.parent_type&&previewParts.push(`Parent: ${escapeHtml2(condition.parent_type)}`),condition.children_type_enabled&&condition.children_type&&previewParts.push(`Children: ${escapeHtml2(condition.children_type)}`),condition.children_direct_type_enabled&&condition.children_direct_type&&previewParts.push(`Children Direct: ${escapeHtml2(condition.children_direct_type)}`);let preview=previewParts.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return`
            <div class="condition-card ${isConditionExpanded?"expanded":"collapsed"}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${escapeHtml2(condition.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ${conditionIndex+1}</span>
                  <span class="condition-preview">${preview}</span>
                </span>
                <span class="condition-header-side">
                  <span class="condition-accordion-icon">${isConditionExpanded?"\u2212":"+"}</span>
                </span>
              </button>
              <div class="condition-body ${isConditionExpanded?"open":"hidden"}">
                <div class="condition-actions">
                  ${scenario.conditions.length>1?`
                    <button
                      type="button"
                      class="ghost remove-inline-button"
                      data-scenario-id="${escapeHtml2(scenario.id)}"
                      data-remove-condition-id="${escapeHtml2(condition.id)}"
                    >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                  `:""}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${escapeHtml2(scenario.id)}"
                      data-condition-id="${escapeHtml2(condition.id)}"
                      data-condition-field="parent_type"
                      value="${escapeHtml2(condition.parent_type)}"
                      placeholder="status_door"
                    />
                    <small>\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D children_type \u0432 \u044D\u0442\u043E\u043C \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0438.</small>
                  </div>
                  ${condition.children_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-type"
                          data-scenario-id="${escapeHtml2(scenario.id)}"
                          data-condition-id="${escapeHtml2(condition.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${escapeHtml2(scenario.id)}"
                        data-condition-id="${escapeHtml2(condition.id)}"
                        data-condition-field="children_type"
                        value="${escapeHtml2(condition.children_type??"")}"
                        placeholder="some_subcommand"
                      />
                      <small>\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D. <code>all</code> \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043B\u044E\u0431\u043E\u0439 \u043D\u0435\u043F\u0443\u0441\u0442\u043E\u0439 children_type \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                    </div>
                  `:`
                    <div class="scenario-type-field field-placeholder">
                      <div class="field-title-row">
                        <span>Children Type</span>
                      </div>
                      <button
                        type="button"
                        class="ghost add-inline-button"
                        data-action="enable-condition-children-type"
                        data-scenario-id="${escapeHtml2(scenario.id)}"
                        data-condition-id="${escapeHtml2(condition.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E parent_type.</small>
                    </div>
                  `}
                  ${condition.children_direct_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-direct-type"
                          data-scenario-id="${escapeHtml2(scenario.id)}"
                          data-condition-id="${escapeHtml2(condition.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${escapeHtml2(scenario.id)}"
                        data-condition-id="${escapeHtml2(condition.id)}"
                        data-condition-field="children_direct_type"
                        value="${escapeHtml2(condition.children_direct_type??"")}"
                        placeholder="direct_subcommand | all_test"
                      />
                      <small>\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D. \u0415\u0441\u043B\u0438 direct type \u043D\u0435 \u043F\u0440\u0438\u0448\u0435\u043B \u0432\u043E \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u043C payload, \u044D\u0442\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043D\u0435\u043C\u0443.</small>
                    </div>
                  `:`
                    <div class="scenario-type-field field-placeholder">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                      </div>
                      <button
                        type="button"
                        class="ghost add-inline-button"
                        data-action="enable-condition-children-direct-type"
                        data-scenario-id="${escapeHtml2(scenario.id)}"
                        data-condition-id="${escapeHtml2(condition.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `})()}
          `).join("");return`
            <section class="scenario-card ${isExpanded?"expanded":"collapsed"}" data-scenario-card-id="${escapeHtml2(scenario.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${escapeHtml2(scenario.id)}">
                  <span class="scenario-toggle-icon">${isExpanded?"\u2212":"+"}</span>
                  <span>
                    <span class="scenario-kicker">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${startIndex+index+1}</span>
                    <span class="scenario-title">${escapeHtml2(scenario.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${escapeHtml2(scenario.id)}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
              </div>
              <div class="scenario-body ${isExpanded?"open":"hidden"}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430</span>
                    <input data-scenario-id="${escapeHtml2(scenario.id)}" data-scenario-field="name" value="${escapeHtml2(scenario.name)}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">\u0423\u0441\u043B\u043E\u0432\u0438\u044F</span>
                        <small>\u0427\u0435\u0440\u0435\u0437 <code>+</code> \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. \u0415\u0441\u043B\u0438 \u0432 <code>Parent Type</code> \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 <code>;</code>, \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${escapeHtml2(scenario.id)}">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                    </div>
                    <div class="conditions-list">${conditionsMarkup}</div>
                  </div>
                  <label class="field-span-2">
                    <span>\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant</span>
                    <select data-scenario-id="${escapeHtml2(scenario.id)}" data-scenario-field="script_entity_id">
                      <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*</option>
                      ${scripts.map(script=>{let selected=script.entity_id===scenario.script_entity_id?"selected":"",label=script.attributes.friendly_name||script.entity_id;return`<option value="${escapeHtml2(script.entity_id)}" ${selected}>${escapeHtml2(label)} (${escapeHtml2(script.entity_id)})</option>`}).join("")}
                      <option value="timer" ${scenario.script_entity_id==="timer"?"selected":""}>\u0422\u0430\u0439\u043C\u0435\u0440 (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                      <option value="alarm" ${scenario.script_entity_id==="alarm"?"selected":""}>\u0411\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>
          `}).join(""):'<div class="empty">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u043B\u044E\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.</div>',paginationMarkup=totalScenarios>pageSize?`
      <section class="scenarios-pagination">
        <button
          type="button"
          class="ghost compact-button"
          data-action="scenarios-page-nav"
          data-direction="prev"
          ${currentPage<=1?"disabled":""}
        >\u041D\u0430\u0437\u0430\u0434</button>
        <div class="scenarios-pagination-pages">
          ${pageButtons.join("")}
        </div>
        <button
          type="button"
          class="ghost compact-button"
          data-action="scenarios-page-nav"
          data-direction="next"
          ${currentPage>=totalPages?"disabled":""}
        >\u0412\u043F\u0435\u0440\u0435\u0434</button>
      </section>
      <div class="scenarios-pagination-meta">\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${visibleScenarios.length} \u0438\u0437 ${totalScenarios} \u2022 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${currentPage} \u0438\u0437 ${totalPages}</div>
    `:"";return`
      <section class="hero-card">
        <h1>Scenarios</h1>
        <p>\u0417\u0434\u0435\u0441\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="add-scenario">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
          <button type="button" class="primary" data-action="save" ${ctx._saving?"disabled":""}>${ctx._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${ctx._error?`<div class="status error">${escapeHtml2(ctx._error)}</div>`:""}
        ${ctx._status?`<div class="status ok">${escapeHtml2(ctx._status)}</div>`:""}
      </section>
      <div class="scenario-list">${scenarioMarkup}</div>
      ${paginationMarkup}
      <section class="help-card">
        <div><strong>\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check   -H "Content-Type: application/json"   -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442</strong></div>
        <div>\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 <code>script.*</code> \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${escapeHtml2(EXAMPLE_PAYLOAD)}</code></pre>
      </section>
    `};var renderTimerAlarm=ctx=>ctx._timerAlarmLoaded?`
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `:(ctx._timerAlarmLoading||ctx._ensureTimerAlarmModule(),`
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">\u041C\u043E\u0434\u0443\u043B\u044C timer/alarm \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F...</div>
        </section>
      `);var renderSubItemsEditor=(ctx,type,title,maxCount=999)=>{let key=type==="subVoice"?"subVoice":"subCommands",items=Array.isArray(ctx._yandexDraft?.[key])?ctx._yandexDraft[key]:[],canAdd=items.length<maxCount,openedItemId=String(ctx._yandexSubItemOpen?.[key]??"");return`
    <section class="condition-card">
      <div class="condition-title">${title}</div>
      <div class="condition-body open">
        ${items.length?items.map((item,index)=>{let itemId=String(item?.id??`${key}_${index}`),itemOpen=openedItemId===itemId,itemTitle=String(item?.text??"").trim()||"text";return`
            <details class="yandex-item-accordion" data-yandex-sub-item-accordion="${key}" data-yandex-sub-item-id="${escapeHtml2(itemId)}" ${itemOpen?"open":""}>
              <summary class="condition-title">${escapeHtml2(itemTitle)}</summary>
              <div class="yandex-sub-item-body">
                <div class="device-row">
                  <label class="field-grow">
                    <span>text</span>
                    <input
                      data-yandex-sub-field="text"
                      data-yandex-sub-type="${key}"
                      data-yandex-sub-index="${index}"
                      value="${escapeHtml2(item.text||"")}"
                      placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442"
                    />
                  </label>
                  <button type="button" class="ghost device-remove-button" data-action="remove-yandex-sub" data-sub-type="${key}" data-sub-index="${index}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                </div>
              </div>
            </details>
          `}).join(""):'<div class="condition-preview">\u041F\u0443\u0441\u0442\u043E</div>'}
        <div class="yandex-sub-add-row">
          <button
            type="button"
            class="secondary yandex-sub-add-button"
            data-action="add-yandex-sub"
            data-sub-type="${key}"
            ${canAdd?"":"disabled"}
          >
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C
          </button>
        </div>
      </div>
    </section>
  `},renderScenarioTabs=(ctx,scenarios)=>{let active=String(ctx._yandexActiveScenarioKey??"").trim();return`
    <section class="hero-card">
      ${`
    <div class="yandex-tabs-toolbar">
      <label class="yandex-scenario-select">
        <span>\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439</span>
        <select data-action="select-yandex-tab-dropdown">
          ${scenarios.map((scenario,index)=>{let key=String(scenario.mainCommand??"").trim(),label=scenario.mainCommand||`\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${index+1}`;return`<option value="${escapeHtml2(key)}" ${active===key?"selected":""}>${escapeHtml2(label)}</option>`}).join("")}
          <option value="__new__" ${active==="__new__"?"selected":""}>\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</option>
        </select>
      </label>
      <button type="button" class="subtab-button" data-action="create-yandex-tab" data-yandex-tab="__new__">+ \u041D\u043E\u0432\u044B\u0439</button>
    </div>
  `}
    </section>
  `},renderEditor=ctx=>{let isNew=String(ctx._yandexActiveScenarioKey??"")==="__new__",title=isNew?"\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":String(ctx._yandexDraft?.mainCommand??"").trim()||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <section class="scenario-card expanded">
      <div class="condition-header">
        <div class="condition-heading">
          <span class="condition-title">${isNew?"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435":"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"}</span>
          <span class="scenario-title">${escapeHtml2(title)}</span>
        </div>
      </div>
      <div class="condition-body open">
        <div class="condition-grid">
          <label>
            <span>mainCommand *</span>
            <input data-yandex-field="mainCommand" value="${escapeHtml2(ctx._yandexDraft?.mainCommand||"")}" placeholder="\u0412\u043A\u043B\u044E\u0447\u0438 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u043B\u0438\u0446\u0430" />
          </label>
          <label>
            <span>voiceResponse</span>
            <input data-yandex-field="voiceResponse" value="${escapeHtml2(ctx._yandexDraft?.voiceResponse||"")}" placeholder="\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E" />
          </label>
          <label class="field-span-2">
            <span>accounts (\u0447\u0435\u0440\u0435\u0437 ;)</span>
            <input data-yandex-field="accounts" value="${escapeHtml2(ctx._yandexDraft?.accounts||"")}" placeholder="mihailhimei;another_account" />
          </label>
        </div>
        ${renderSubItemsEditor(ctx,"subVoice","subVoice (\u0434\u043E 3)",3)}
        ${renderSubItemsEditor(ctx,"subCommands","subCommands")}
        <div class="toolbar">
          <button type="button" class="primary" data-action="save-yandex-scenario" ${ctx._yandexSaving?"disabled":""}>${ctx._yandexSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
          ${isNew?"":`<button type="button" class="ghost" data-action="delete-yandex-scenario" ${ctx._yandexSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`}
        </div>
      </div>
    </section>
  `},renderYandexScenarios=ctx=>{let scenarios=Array.isArray(ctx._yandexScenarios)?ctx._yandexScenarios:[];return`
    <section class="hero-card">
      <h1>\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</h1>
      <p>\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: <code>homeassistant/yandex_intents.yaml</code>. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u0444\u043E\u0440\u043C\u0435 \u043D\u0438\u0436\u0435.</p>
      <div class="toolbar">
        <button type="button" class="ghost" data-action="reload-yandex-scenarios" ${ctx._yandexLoading?"disabled":""}>${ctx._yandexLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      </div>
      ${ctx._yandexStatus?`<div class="status ok">${escapeHtml2(ctx._yandexStatus)}</div>`:""}
      ${ctx._yandexError?`<div class="status error">${escapeHtml2(ctx._yandexError)}</div>`:""}
    </section>
    ${renderScenarioTabs(ctx,scenarios)}
    ${renderEditor(ctx)}
  `};var renderActiveTopLevelPage=ctx=>ctx._accessDenied?`
      <section class="hero-card">
        <h1>\u0414\u043E\u0441\u0442\u0443\u043F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D</h1>
        <p>\u041F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u043F\u0446\u0438\u044E "\u0414\u043E\u0441\u0442\u0443\u043F \u043D\u0435-\u0430\u0434\u043C\u0438\u043D\u0430\u043C" \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.</p>
      </section>
    `:ctx._activeTab==="logs"?renderLogs(ctx):ctx._activeTab==="scenarios"?renderScenarios(ctx):ctx._activeTab==="create-scenario"?renderCreateScenario():ctx._activeTab==="timer-alarm"?renderTimerAlarm(ctx):ctx._activeTab==="json"?renderJsonTools(ctx):ctx._activeTab==="yandex-scenarios"?renderYandexScenarios(ctx):renderSettings(ctx);var normalizeScenariosPage=(ctx,requestedPage)=>{let pageSize=Math.max(1,Number(ctx._scenariosPageSize)||20),totalItems=Array.isArray(ctx._config?.scenarios)?ctx._config.scenarios.length:0,totalPages=Math.max(1,Math.ceil(totalItems/pageSize)),parsedPage=Number(requestedPage),safePage=Number.isFinite(parsedPage)?Math.trunc(parsedPage):1;return Math.min(Math.max(1,safePage),totalPages)},toggleScenario=(ctx,id)=>{ctx._expandedScenarios.has(id)?ctx._expandedScenarios.delete(id):ctx._expandedScenarios.add(id),ctx._render()},toggleCondition=(ctx,id)=>{ctx._expandedConditions.has(id)?ctx._expandedConditions.delete(id):ctx._expandedConditions.add(id),ctx._render()},updateConfigField=(ctx,field,value,rerender=!1)=>{ctx._config={...ctx._config,[field]:value},field==="theme"&&ctx._applyTheme(),ctx._status="",ctx._error="",rerender&&ctx._render()},toggleDeviceAccordion=ctx=>{ctx._deviceAccordionOpen=!ctx._deviceAccordionOpen,ctx._render()},addTimerAlarmDeviceId=ctx=>{let deviceIds=Array.isArray(ctx._config.timer_alarm_device_ids)?[...ctx._config.timer_alarm_device_ids]:[];deviceIds.push(""),ctx._config={...ctx._config,timer_alarm_device_ids:deviceIds},ctx._status="",ctx._error="",ctx._render()},updateTimerAlarmDeviceId=(ctx,index,value)=>{let deviceIds=Array.isArray(ctx._config.timer_alarm_device_ids)?[...ctx._config.timer_alarm_device_ids]:[""];deviceIds[index]=value,ctx._config={...ctx._config,timer_alarm_device_ids:ctx._normalizeTimerAlarmDeviceIdsForUi(deviceIds)},ctx._status="",ctx._error=""},removeTimerAlarmDeviceId=(ctx,index)=>{let nextDeviceIds=(Array.isArray(ctx._config.timer_alarm_device_ids)?[...ctx._config.timer_alarm_device_ids]:[""]).filter((_,currentIndex)=>currentIndex!==index);ctx._config={...ctx._config,timer_alarm_device_ids:ctx._normalizeTimerAlarmDeviceIdsForUi(nextDeviceIds)},ctx._status="",ctx._error="",ctx._render()},updateScenario=(ctx,id,field,value,rerender=!1)=>{ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===id?{...scenario,[field]:value}:scenario)},ctx._status="",ctx._error="",rerender&&ctx._render()},updateCondition=(ctx,scenarioId,conditionId,field,value,rerender=!1)=>{ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===scenarioId?{...scenario,conditions:scenario.conditions.map(condition=>condition.id===conditionId?{...condition,[field]:value}:condition)}:scenario)},ctx._status="",ctx._error="",rerender&&ctx._render()},enableConditionChildrenType=(ctx,scenarioId,conditionId)=>{ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===scenarioId?{...scenario,conditions:scenario.conditions.map(condition=>condition.id===conditionId?{...condition,children_type_enabled:!0,children_type:condition.children_type??""}:condition)}:scenario)},ctx._status="",ctx._error="",ctx._render()},disableConditionChildrenType=(ctx,scenarioId,conditionId)=>{ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===scenarioId?{...scenario,conditions:scenario.conditions.map(condition=>condition.id===conditionId?{...condition,children_type_enabled:!1,children_type:""}:condition)}:scenario)},ctx._status="",ctx._error="",ctx._render()},enableConditionChildrenDirectType=(ctx,scenarioId,conditionId)=>{ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===scenarioId?{...scenario,conditions:scenario.conditions.map(condition=>condition.id===conditionId?{...condition,children_direct_type_enabled:!0,children_direct_type:condition.children_direct_type??""}:condition)}:scenario)},ctx._status="",ctx._error="",ctx._render()},disableConditionChildrenDirectType=(ctx,scenarioId,conditionId)=>{ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===scenarioId?{...scenario,conditions:scenario.conditions.map(condition=>condition.id===conditionId?{...condition,children_direct_type_enabled:!1,children_direct_type:""}:condition)}:scenario)},ctx._status="",ctx._error="",ctx._render()},addCondition=(ctx,scenarioId)=>{let condition=newCondition();ctx._expandedConditions.add(condition.id),ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>scenario.id===scenarioId?{...scenario,conditions:[...scenario.conditions,condition]}:scenario)},ctx._status="",ctx._error="",ctx._render()},removeCondition=(ctx,scenarioId,conditionId)=>{ctx._expandedConditions.delete(conditionId),ctx._config={...ctx._config,scenarios:ctx._config.scenarios.map(scenario=>{if(scenario.id!==scenarioId)return scenario;let nextConditions=scenario.conditions.filter(condition=>condition.id!==conditionId);return{...scenario,conditions:nextConditions.length?nextConditions:[newCondition()]}})},ctx._status="",ctx._error="",ctx._render()},addScenario=ctx=>{let now=Date.now();if(now<ctx._addScenarioLockUntil)return;ctx._addScenarioLockUntil=now+300;let scenario=newScenario();ctx._expandedScenarios.add(scenario.id),ctx._config={...ctx._config,scenarios:[scenario,...ctx._config.scenarios]},ctx._scenariosPage=1,ctx._status="",ctx._render(),window.requestAnimationFrame(()=>ctx._scrollScenarioIntoView(scenario.id))},scrollScenarioIntoView=(ctx,id)=>{let selectorId=globalThis.CSS?.escape?globalThis.CSS.escape(id):id;ctx.shadowRoot.querySelector(`[data-scenario-card-id="${selectorId}"]`)?.scrollIntoView({block:"start",behavior:"smooth"})},removeScenario=(ctx,id)=>{ctx._expandedScenarios.delete(id),ctx._config={...ctx._config,scenarios:ctx._config.scenarios.filter(scenario=>scenario.id!==id)},ctx._scenariosPage=normalizeScenariosPage(ctx,ctx._scenariosPage),ctx._status="",ctx._render()},setScenariosPage=(ctx,page)=>{let nextPage=normalizeScenariosPage(ctx,page);nextPage!==ctx._scenariosPage&&(ctx._scenariosPage=nextPage,ctx._render())};var initializePanelState=(ctx,defaultConfig)=>{ctx._reactRoot=null,ctx._hass=null,ctx._config={...defaultConfig},ctx._logs=[],ctx._activeTab="scenarios",ctx._expandedScenarios=new Set,ctx._expandedConditions=new Set,ctx._scenariosPage=1,ctx._scenariosPageSize=20,ctx._loaded=!1,ctx._loading=!1,ctx._saving=!1,ctx._loadingLogs=!1,ctx._error="",ctx._status="",ctx._accessDenied=!1,ctx._logsTimer=null,ctx._timerAlarmLoaded=!1,ctx._timerAlarmLoading=!1,ctx._timerAlarmLoadPromise=null,ctx._deviceAccordionOpen=!0,ctx._addScenarioLockUntil=0,ctx._yandexLoaded=!1,ctx._yandexLoading=!1,ctx._yandexSaving=!1,ctx._yandexScenarios=[],ctx._yandexStatus="",ctx._yandexError="",ctx._yandexActiveScenarioKey="",ctx._yandexEditorOpen=!1,ctx._yandexDraft={},ctx._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},ctx._yandexSubItemOpen={subVoice:"",subCommands:""},ctx._visibleSecrets={timer_alarm_token:!1,yandex_tts_api_key:!1}};var PANEL_STYLES=`
<style>
:host {
          --panel-bg: radial-gradient(circle at 16% 12%, #fff7ef 0%, #eef3ff 42%, #e8f2f8 100%);
          --card-bg: linear-gradient(175deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86));
          --card-bg-soft: rgba(255, 255, 255, 0.8);
          --border: rgba(34, 45, 67, 0.16);
          --text: #1b2432;
          --muted: #5c667a;
          --accent: #a64b2a;
          --accent-2: #234f7d;
          --ring: rgba(35, 79, 125, 0.2);
          --elev-1: 0 12px 32px rgba(31, 41, 55, 0.1);
          --elev-2: 0 18px 40px rgba(31, 41, 55, 0.14);
          display: block;
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          color: var(--text);
          background: var(--panel-bg);
          font-family: "Manrope", "Segoe UI", "Trebuchet MS", sans-serif;
          overflow-x: hidden;
        }
        :host([data-theme="dark"]) {
          --panel-bg: radial-gradient(circle at 16% 12%, #182033 0%, #121827 44%, #0f1728 100%);
          --card-bg: linear-gradient(175deg, rgba(19, 28, 44, 0.96), rgba(14, 22, 36, 0.92));
          --card-bg-soft: rgba(20, 30, 47, 0.84);
          --border: rgba(164, 180, 214, 0.24);
          --text: #ecf2ff;
          --muted: #b3c0da;
          --accent: #ff8a5a;
          --accent-2: #4f86d8;
          --ring: rgba(79, 134, 216, 0.26);
          --elev-1: 0 12px 32px rgba(1, 5, 14, 0.44);
          --elev-2: 0 18px 40px rgba(1, 5, 14, 0.54);
        }
        * {
          box-sizing: border-box;
          min-width: 0;
        }
        .page {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px;
          overflow-x: hidden;
        }
        .hero {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
        }
        .hero-card, .scenario-card, .help-card {
          background: var(--card-bg);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: 20px;
          box-shadow: var(--elev-1);
          animation: rise-in 220ms ease-out both;
        }
        .hero-card {
          padding: 24px;
        }
        .hero h1 {
          margin: 0;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }
        .hero p {
          margin: 0;
          color: var(--muted);
          max-width: 860px;
        }
        .tabs {
          display: flex;
          gap: 8px;
          width: 100%;
          flex-wrap: wrap;
          padding: 8px;
          border-radius: 999px;
          background: var(--card-bg-soft);
          border: 1px solid var(--border);
        }
        .tab-button {
          border: none;
          border-radius: 999px;
          padding: 10px 16px;
          font: inherit;
          cursor: pointer;
          background: transparent;
          color: var(--muted);
          transition: transform 0.14s ease, background 0.2s ease, color 0.2s ease;
        }
        .tab-button:hover {
          transform: translateY(-1px);
          background: rgba(34, 45, 67, 0.08);
          color: var(--text);
        }
        .tab-button.active {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          box-shadow: 0 10px 20px rgba(35, 79, 125, 0.28);
        }
        .panel-shell {
          display: grid;
          gap: 8px;
          width: 100%;
          padding: 10px;
          border-radius: 24px;
          background: var(--card-bg-soft);
          border: 1px solid var(--border);
          box-shadow: var(--elev-1);
        }
        .panel-shell .tabs {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
        }
        .subtabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .yandex-tabs-toolbar {
          display: flex;
          gap: 10px;
          align-items: end;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .yandex-scenario-select {
          display: grid;
          gap: 6px;
          flex: 1 1 320px;
          margin: 0;
        }
        .yandex-scenario-select span {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
          font-weight: 700;
        }
        .yandex-scenario-select select {
          width: 100%;
        }
        .yandex-subtabs-scroll {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 4px;
        }
        .yandex-subtabs-scroll .subtab-button {
          flex: 0 0 auto;
          white-space: nowrap;
        }
        .subtab-button {
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--card-bg-soft);
          color: var(--muted);
          padding: 10px 14px;
          cursor: pointer;
          transition: transform 0.14s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .subtab-button:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 8px 18px rgba(31, 41, 55, 0.12);
          color: var(--text);
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(35, 79, 125, 0.3);
        }
        .command-list {
          display: grid;
          gap: 10px;
        }
        .command-item {
          display: grid;
          gap: 8px;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--card-bg-soft);
          color: var(--text);
          padding: 14px;
          text-align: left;
          transition: transform 0.14s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .command-item:hover {
          transform: translateY(-1px);
          border-color: rgba(35, 79, 125, 0.34);
          box-shadow: 0 10px 20px rgba(31, 41, 55, 0.11);
        }
        .command-item-title {
          font-size: 16px;
          font-weight: 700;
        }
        .command-item-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          color: var(--muted);
          font-size: 13px;
        }
        .command-pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 8px;
        }
        .command-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          z-index: 40;
        }
        .command-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(860px, calc(100vw - 32px));
          max-height: calc(100vh - 40px);
          overflow: auto;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: var(--card-bg);
          z-index: 41;
          display: grid;
          gap: 14px;
          box-shadow: var(--elev-2);
        }
        .command-modal-header,
        .command-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .command-modal-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .command-modal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        textarea {
          width: 100%;
          max-width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          font: inherit;
          color: var(--text);
          background: var(--card-bg-soft);
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .checkbox-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          align-self: end;
        }
        .checkbox-row input {
          width: auto;
        }
        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
          gap: 16px;
          margin-top: 20px;
          align-items: start;
        }
        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .field-span-2 {
          grid-column: 1 / -1;
        }
        .field-narrow {
          max-width: 220px;
        }
        .field-grow {
          flex: 1 1 auto;
        }
        .settings-subsection {
          margin-top: 4px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--card-bg-soft);
          display: grid;
          gap: 12px;
        }
        .secret-field {
          position: relative;
        }
        .secret-field input {
          padding-right: 50px;
        }
        .secret-toggle-button {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          border-radius: 10px;
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          font-size: 16px;
        }
        .secret-toggle-button:hover {
          transform: translateY(-50%);
        }
        .field-placeholder {
          display: grid;
          gap: 8px;
          min-width: 0;
          align-content: start;
        }
        .scenario-type-field {
          display: grid;
          gap: 8px;
          min-width: 0;
          align-content: start;
        }
        .settings-accordion {
          margin-top: 20px;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--card-bg-soft);
          display: grid;
          gap: 14px;
        }
        .settings-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          text-align: left;
          font: inherit;
          cursor: pointer;
        }
        .settings-accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(35, 79, 125, 0.08);
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1;
          flex: 0 0 auto;
        }
        .settings-accordion-body {
          display: grid;
          gap: 14px;
        }
        .settings-accordion-body.hidden {
          display: none;
        }
        .settings-accordion-note {
          margin: 0;
          color: var(--muted);
        }
        .device-list {
          display: grid;
          gap: 10px;
        }
        .device-row {
          display: flex;
          gap: 10px;
          align-items: end;
        }
        .device-remove-button {
          flex: 0 0 auto;
          align-self: end;
        }
        .conditions-block {
          display: grid;
          gap: 14px;
        }
        .conditions-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
          flex-wrap: wrap;
        }
        .conditions-list {
          display: grid;
          gap: 12px;
        }
        .condition-card {
          display: grid;
          gap: 12px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--card-bg-soft);
        }
        .condition-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          text-align: left;
        }
        .condition-heading {
          display: grid;
          gap: 4px;
          min-width: 0;
          flex: 1 1 auto;
        }
        .condition-header-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 auto;
        }
        .condition-preview {
          font-size: 13px;
          color: var(--muted);
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        .condition-accordion-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(35, 79, 125, 0.08);
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1;
          flex: 0 0 auto;
        }
        .condition-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .condition-body.hidden {
          display: none;
        }
        .condition-body.open {
          display: grid;
          gap: 12px;
        }
        .yandex-sub-body {
          display: none;
          gap: 12px;
        }
        details.condition-card[open] > .yandex-sub-body {
          display: grid;
        }
        .yandex-item-accordion {
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--card-bg-soft);
          padding: 10px 12px;
        }
        .yandex-sub-item-body {
          display: none;
          gap: 12px;
          margin-top: 10px;
        }
        details.yandex-item-accordion[open] > .yandex-sub-item-body {
          display: grid;
        }
        .yandex-sub-add-row {
          margin-top: 8px;
        }
        .yandex-sub-add-button {
          width: 100%;
          border-radius: 12px;
          padding: 12px 14px;
          text-align: center;
        }
        details.condition-card:not([open]) > .condition-body {
          display: none !important;
        }
        .condition-title,
        .section-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        .condition-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }
        .field-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: nowrap;
          min-height: 24px;
        }
        .field-title-row > span {
          min-width: 0;
        }
        .add-inline-button {
          justify-self: start;
          max-width: 100%;
          white-space: normal;
          word-break: break-word;
        }
        .remove-inline-button {
          padding: 6px 12px;
          font-size: 12px;
          line-height: 1.2;
        }
        label {
          display: grid;
          gap: 8px;
          min-width: 0;
        }
        label span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        .field-title-row > span {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-2);
        }
        input, select {
          width: 100%;
          max-width: 100%;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          font: inherit;
          color: var(--text);
          background: var(--card-bg-soft);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .switch-control {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 6px 0;
        }
        .switch-control input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .switch-slider {
          position: relative;
          width: 54px;
          height: 30px;
          border-radius: 999px;
          background: rgba(34, 45, 67, 0.2);
          border: 1px solid rgba(34, 45, 67, 0.15);
          transition: background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .switch-slider::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 3px 8px rgba(15, 23, 42, 0.25);
          transition: transform .2s ease;
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider {
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          border-color: transparent;
          box-shadow: 0 8px 18px rgba(35,79,125,.28);
        }
        .switch-control input[type="checkbox"]:checked + .switch-slider::after {
          transform: translateX(24px);
        }
        .switch-label {
          font-weight: 600;
          color: var(--muted);
        }
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: rgba(35, 79, 125, 0.52);
          box-shadow: 0 0 0 3px var(--ring);
          background: var(--card-bg-soft);
          color: var(--text);
        }
        code, pre, small, .log-message, .scenario-title {
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        small {
          color: var(--muted);
          line-height: 1.35;
        }
        .toolbar {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        button {
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          font: inherit;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        button:hover {
          transform: translateY(-1px);
        }
        button.primary {
          color: white;
          background: linear-gradient(135deg, var(--accent), #d4743d);
        }
        button.secondary {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
        }
        button.compact-button {
          padding: 8px 14px;
          font-size: 13px;
        }
        button.ghost {
          background: rgba(34, 45, 67, 0.06);
          color: var(--text);
        }
        .scenario-toggle {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          flex: 1 1 auto;
          padding: 0;
          background: transparent;
          color: var(--text);
          text-align: left;
        }
        .scenario-toggle-icon {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          background: rgba(34, 45, 67, 0.08);
          font-size: 20px;
          line-height: 1;
          transform: translateY(-1px);
        }
        button:disabled {
          opacity: 0.5;
          cursor: progress;
          transform: none;
        }
        .status {
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          font-size: 14px;
        }
        .status.error {
          background: rgba(180, 43, 43, 0.1);
          color: #8a2323;
        }
        .status.ok {
          background: rgba(35, 111, 73, 0.1);
          color: #155c3a;
        }
        .scenario-list {
          display: grid;
          gap: 16px;
          width: 100%;
        }
        .scenarios-pagination {
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }
        .scenarios-pagination-pages {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .scenarios-pagination-meta {
          margin-top: 6px;
          color: var(--muted);
          font-size: 13px;
        }
        .scenario-card {
          padding: 18px;
          width: 100%;
          max-width: 100%;
          transition: transform 0.16s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .scenario-card:hover {
          transform: translateY(-1px);
          border-color: rgba(35, 79, 125, 0.3);
          box-shadow: 0 12px 26px rgba(31, 41, 55, 0.12);
        }
        .scenario-header {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 0;
        }
        .scenario-card.expanded .scenario-header {
          margin-bottom: 16px;
        }
        .scenario-kicker {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 4px;
        }
        .scenario-title {
          display: block;
          font-size: 20px;
          font-weight: 700;
        }
        .scenario-body.hidden {
          display: none;
        }
        .scenario-body.open {
          display: block;
        }
        .empty, .help-card {
          padding: 20px;
        }
        .help-card pre {
          margin: 10px 0 0;
          padding: 14px;
          max-width: 100%;
          overflow: auto;
          white-space: pre-wrap;
          border-radius: 14px;
          background: #17202b;
          color: #f5f7fb;
          font-size: 13px;
        }
        .help-card code {
          font-family: Consolas, monospace;
        }
        .logs-card {
          display: grid;
          gap: 12px;
        }
        .log-item {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px;
          background: var(--card-bg-soft);
        }
        @keyframes rise-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .log-item.request { border-left: 4px solid #4c78a8; }
        .log-item.success { border-left: 4px solid #2f855a; }
        .log-item.error { border-left: 4px solid #c53030; }
        .log-item.match { border-left: 4px solid #805ad5; }
        .log-item.idle { border-left: 4px solid #718096; }
        .log-item.info { border-left: 4px solid #dd6b20; }
        .log-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 6px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
        }
        .log-message {
          font-size: 14px;
          line-height: 1.4;
        }
        @media (max-width: 900px) {
          .scenario-grid,
          .condition-grid,
          .command-modal-grid {
            grid-template-columns: 1fr;
          }
          .field-span-2 {
            grid-column: auto;
          }
          .field-narrow {
            max-width: none;
          }
          .device-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
        @media (max-width: 700px) {
          .command-modal {
            inset: 0;
            transform: none;
            width: 100vw;
            height: 100vh;
            max-height: none;
            border-radius: 0;
            border: none;
            padding: 16px;
          }
        }
        @media (max-width: 800px) {
          .page {
            padding: 16px;
          }
          .hero h1 {
            font-size: 28px;
          }
        }
        @media (max-width: 640px) {
          .page {
            padding: 10px;
          }
          .panel-shell {
            padding: 8px;
            border-radius: 16px;
          }
          .hero-card,
          .scenario-card,
          .help-card {
            border-radius: 14px;
          }
          .hero-card,
          .scenario-card,
          .empty,
          .help-card {
            padding: 14px;
          }
          .tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            scrollbar-width: thin;
          }
          .tab-button {
            flex: 0 0 auto;
            white-space: nowrap;
          }
          .toolbar {
            display: grid;
            grid-template-columns: 1fr;
          }
          .toolbar button {
            width: 100%;
          }
          .yandex-tabs-toolbar {
            display: grid;
            grid-template-columns: 1fr;
          }
          .yandex-tabs-toolbar .subtab-button {
            width: 100%;
          }
          .yandex-subtabs-scroll {
            display: flex;
            flex-wrap: nowrap;
          }
          .scenario-header,
          .condition-header {
            align-items: flex-start;
          }
          .scenarios-pagination {
            display: grid;
            grid-template-columns: 1fr;
          }
          .scenarios-pagination button {
            width: 100%;
          }
          .scenarios-pagination-pages {
            order: -1;
          }
          .scenario-header {
            flex-wrap: nowrap;
            gap: 8px;
          }
          .scenario-header .scenario-toggle {
            flex: 1 1 auto;
            min-width: 0;
          }
          .scenario-header [data-remove-id] {
            flex: 0 0 auto;
            white-space: nowrap;
            padding: 8px 10px;
            font-size: 12px;
          }
          .scenario-toggle > span:last-child {
            min-width: 0;
            display: block;
            width: 100%;
          }
          .scenario-toggle .scenario-title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .condition-actions {
            width: 100%;
            justify-content: stretch;
          }
          .condition-actions button {
            flex: 1 1 auto;
          }
          .command-modal-header,
          .command-modal-footer {
            flex-direction: column;
            align-items: stretch;
          }
        }
        @media (max-width: 420px) {
          .hero h1 {
            font-size: 22px;
          }
          button,
          .tab-button {
            padding: 10px 12px;
            font-size: 14px;
          }
        }
</style>
`;var ShadowMarkup=({html,onRendered})=>((0,import_react2.useLayoutEffect)(()=>{onRendered?.()},[html,onRendered]),import_react2.default.createElement("div",{dangerouslySetInnerHTML:{__html:html}})),DialogCustomUiPanel=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),initializePanelState(this,DEFAULT_CONFIG)}set hass(hass){let firstAttach=!this._hass;if(this._hass=hass,!this._loaded&&!this._loading){this._loadConfig();return}(firstAttach||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this._applyTheme(),this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(markup){this._reactRoot||(this._reactRoot=(0,import_client2.createRoot)(this.shadowRoot)),this._reactRoot.render(import_react2.default.createElement(ShadowMarkup,{html:markup,onRendered:()=>this._afterReactRender()}))}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded){if(!this._timerAlarmLoadPromise){this._timerAlarmLoading=!0;let cacheBustedTimerAlarmUrl=`${TIMER_ALARM_MODULE_URL}${TIMER_ALARM_MODULE_URL.includes("?")?"&":"?"}ts=${Date.now()}`;this._timerAlarmLoadPromise=import(cacheBustedTimerAlarmUrl).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(err=>{this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})}return this._timerAlarmLoadPromise}}async _loadConfig(){this._loading=!0,this._render();try{let result=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...DEFAULT_CONFIG,...result,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(result.timer_alarm_device_ids??[]),scenarios:Array.isArray(result.scenarios)?result.scenarios.map(scenario=>this._normalizeScenarioForUi(scenario)):[]},this._applyTheme(),this._expandedScenarios=new Set,this._scenariosPage=1,this._accessDenied=!1,this._error=""}catch(err){let errorCode=String(err?.code??"").trim().toLowerCase(),errorMessage=String(err?.message??"").toLowerCase();this._accessDenied=errorCode==="unauthorized"||errorMessage.includes("access denied"),this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let result=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(result.logs)?result.logs:[]}catch(err){this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},LOG_POLL_INTERVAL_MS)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(stateObj=>stateObj.entity_id.startsWith("script.")).sort((left,right)=>{let leftName=left.attributes.friendly_name||left.entity_id,rightName=right.attributes.friendly_name||right.entity_id;return leftName.localeCompare(rightName,"ru")}):[]}_isCurrentUserAdmin(){return!!this._hass?.user?.is_admin}_isTabAllowed(tab){return this._isCurrentUserAdmin()?!0:tab!=="settings"}_resolveAllowedTab(tab){return this._isTabAllowed(tab)?tab:"scenarios"}_setActiveTab(tab){if(this._accessDenied)return;let nextTab=this._resolveAllowedTab(tab);this._activeTab=nextTab,this._status="",this._error="",this._render(),nextTab==="logs"?this._startLogsPolling():(this._stopLogsPolling(),nextTab==="timer-alarm"&&this._ensureTimerAlarmModule(),nextTab==="yandex-scenarios"&&this._loadYandexScenarios())}_newYandexSubItem(){return{id:globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,text:""}}_newYandexDraft(){return{mainCommand:"",voiceResponse:"",accounts:"",subVoice:[],subCommands:[]}}_normalizeYandexScenarioForUi(item){let toItems=value=>Array.isArray(value)?value.map(entry=>({id:String(entry?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}`)),text:String(entry?.text??"").trim()})).filter(entry=>entry.text):[];return{id:String(item?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_${Date.now()}`)),mainCommand:String(item?.mainCommand??"").trim(),voiceResponse:String(item?.voiceResponse??"").trim(),accounts:String(item?.accounts??"").trim(),subVoice:toItems(item?.subVoice),subCommands:toItems(item?.subCommands)}}_cloneYandexDraft(source){let normalized=this._normalizeYandexScenarioForUi(source??{});return{...normalized,subVoice:Array.isArray(normalized.subVoice)?normalized.subVoice.map(entry=>({...entry})):[],subCommands:Array.isArray(normalized.subCommands)?normalized.subCommands.map(entry=>({...entry})):[]}}_yandexScenarioKey(item){return String(item?.mainCommand??"").trim()}_findYandexScenarioByKey(key){let normalizedKey=String(key??"").trim();return this._yandexScenarios.find(item=>this._yandexScenarioKey(item)===normalizedKey)||null}_syncYandexSelection(preferredKey=""){let normalizedKey=String(preferredKey||this._yandexActiveScenarioKey||"").trim(),scenarios=Array.isArray(this._yandexScenarios)?this._yandexScenarios:[];if(!scenarios.length){this._yandexActiveScenarioKey="__new__",this._yandexDraft=this._newYandexDraft(),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""};return}let active=this._findYandexScenarioByKey(normalizedKey)||scenarios[0];this._yandexActiveScenarioKey=this._yandexScenarioKey(active),this._yandexDraft=this._cloneYandexDraft(active),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""}}async _loadYandexScenarios(){if(!(!this._hass||this._yandexLoading)){this._yandexLoading=!0,this._yandexError="",this._yandexLoaded||(this._yandexStatus=""),this._render();try{let result=await this._hass.callWS({type:"dialog_custom_ui/get_yandex_scenarios"}),scenarios=Array.isArray(result?.scenarios)?result.scenarios:[];this._yandexScenarios=scenarios.map(item=>this._normalizeYandexScenarioForUi(item)),this._syncYandexSelection(),this._yandexLoaded=!0,this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B.",this._yandexError=""}catch(err){this._yandexError=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C yandex_intents.yaml.",this._yandexStatus=""}finally{this._yandexLoading=!1,this._render()}}}_startYandexScenarioCreate(){this._yandexDraft=this._newYandexDraft(),this._yandexActiveScenarioKey="__new__",this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexStatus="",this._yandexError="",this._render()}_setYandexActiveScenario(key){let normalizedKey=String(key??"").trim();if(!normalizedKey)return;if(normalizedKey==="__new__"){this._startYandexScenarioCreate();return}let scenario=this._findYandexScenarioByKey(normalizedKey);scenario&&(this._yandexActiveScenarioKey=normalizedKey,this._yandexDraft=this._cloneYandexDraft(scenario),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexError="",this._render())}_setYandexSubEditorOpen(type,isOpen){let key=type==="subVoice"?"subVoice":"subCommands";this._yandexSubEditorsOpen={...this._yandexSubEditorsOpen||{},[key]:!!isOpen}}_setYandexSubItemOpen(type,itemId){let key=type==="subVoice"?"subVoice":"subCommands";this._yandexSubItemOpen={...this._yandexSubItemOpen||{},[key]:String(itemId??"")}}_toggleYandexEditorAccordion(){this._yandexEditorOpen=!this._yandexEditorOpen,this._render()}_updateYandexDraftField(field,value,rerender=!1){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft()),this._yandexDraft={...this._yandexDraft,[field]:value},this._yandexError="",rerender&&this._render()}_addYandexDraftSubItem(type){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft());let key=type==="subVoice"?"subVoice":"subCommands",list=Array.isArray(this._yandexDraft[key])?[...this._yandexDraft[key]]:[];if(key==="subVoice"&&list.length>=3)return;let nextItem=this._newYandexSubItem();list.push(nextItem),this._yandexDraft={...this._yandexDraft,[key]:list},this._setYandexSubEditorOpen(key,!0),this._setYandexSubItemOpen(key,nextItem.id),this._yandexError="",this._render()}_removeYandexDraftSubItem(type,index){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let key=type==="subVoice"?"subVoice":"subCommands",next=(Array.isArray(this._yandexDraft[key])?[...this._yandexDraft[key]]:[]).filter((_,currentIndex)=>currentIndex!==index);this._yandexDraft={...this._yandexDraft,[key]:next};let openedId=String(this._yandexSubItemOpen?.[key]??"");openedId&&!next.some(entry=>String(entry?.id??"")===openedId)&&this._setYandexSubItemOpen(key,""),this._yandexError="",this._render()}_updateYandexDraftSubItem(type,index,field,value,rerender=!1){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let key=type==="subVoice"?"subVoice":"subCommands",list=Array.isArray(this._yandexDraft[key])?[...this._yandexDraft[key]]:[];this._yandexDraft={...this._yandexDraft,[key]:list.map((entry,currentIndex)=>currentIndex===index?{...entry,[field]:value}:entry)},this._yandexError="",rerender&&this._render()}_serializeYandexScenarioDraft(){let draft=this._yandexDraft||this._newYandexDraft(),normalizeItems=items=>(Array.isArray(items)?items:[]).map(item=>({text:String(item?.text??"").trim()})).filter(item=>item.text);return{mainCommand:String(draft.mainCommand??"").trim(),voiceResponse:String(draft.voiceResponse??"").trim(),accounts:String(draft.accounts??"").trim(),subVoice:normalizeItems(draft.subVoice),subCommands:normalizeItems(draft.subCommands)}}async _saveYandexScenarioFromModal(){let item=this._serializeYandexScenarioDraft();if(!item.mainCommand){this._yandexError="\u041F\u043E\u043B\u0435 mainCommand \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E.",this._render();return}this._yandexSaving=!0,this._yandexError="",this._render();try{let activeKey=String(this._yandexActiveScenarioKey??"").trim(),payload=activeKey&&activeKey!=="__new__"?this._yandexScenarios.map(entry=>this._yandexScenarioKey(entry)===activeKey?item:entry):[...this._yandexScenarios,item],result=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:payload}),scenarios=Array.isArray(result?.scenarios)?result.scenarios:[];this._yandexScenarios=scenarios.map(entry=>this._normalizeYandexScenarioForUi(entry)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u0438 \u0444\u0430\u0439\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection(item.mainCommand)}catch(err){this._yandexError=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}async _deleteActiveYandexScenario(){let activeKey=String(this._yandexActiveScenarioKey??"").trim();if(!(!activeKey||activeKey==="__new__")){this._yandexSaving=!0,this._yandexError="",this._render();try{let payload=this._yandexScenarios.filter(item=>this._yandexScenarioKey(item)!==activeKey),result=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:payload}),scenarios=Array.isArray(result?.scenarios)?result.scenarios:[];this._yandexScenarios=scenarios.map(entry=>this._normalizeYandexScenarioForUi(entry)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection()}catch(err){this._yandexError=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438\u0437 yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}}_applyTheme(){let theme=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme},this.setAttribute("data-theme",theme)}_renderSettings(){return renderSettings(this)}_toggleScenario(id){return toggleScenario(this,id)}_toggleCondition(id){return toggleCondition(this,id)}_updateConfigField(field,value,rerender=!1){return updateConfigField(this,field,value,rerender)}_isSecretVisible(field){return!!this._visibleSecrets?.[field]}_toggleSecretField(field){this._visibleSecrets={...this._visibleSecrets||{},[field]:!this._isSecretVisible(field)},this._render()}_normalizeTimerAlarmDeviceIdsForUi(deviceIds){let values=(Array.isArray(deviceIds)?deviceIds:typeof deviceIds=="string"?[deviceIds]:[]).map(deviceId=>String(deviceId??"").trim());return values.length?values:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(deviceId=>deviceId)}_toggleDeviceAccordion(){return toggleDeviceAccordion(this)}_addTimerAlarmDeviceId(){return addTimerAlarmDeviceId(this)}_updateTimerAlarmDeviceId(index,value){return updateTimerAlarmDeviceId(this,index,value)}_removeTimerAlarmDeviceId(index){return removeTimerAlarmDeviceId(this,index)}_updateScenario(id,field,value,rerender=!1){return updateScenario(this,id,field,value,rerender)}_normalizeScenarioForUi(scenario){let conditions=this._normalizeConditionsForUi(scenario);return{...scenario,conditions}}_serializeScenario(scenario){let conditions=(Array.isArray(scenario.conditions)?scenario.conditions:[]).flatMap(condition=>this._serializeCondition(condition)).filter(Boolean),payload={id:scenario.id,name:scenario.name,script_entity_id:scenario.script_entity_id,conditions};return conditions.length===1&&(payload.parent_type=conditions[0].parent_type??"",conditions[0].children_type&&(payload.children_type=conditions[0].children_type),conditions[0].children_direct_type&&(payload.children_direct_type=conditions[0].children_direct_type)),payload}_normalizeConditionsForUi(scenario){if(Array.isArray(scenario.conditions)&&scenario.conditions.length)return scenario.conditions.map(condition=>this._normalizeConditionForUi(condition));let parents=String(scenario.parent_type??"").split(";").map(value=>value.trim()),children=String(scenario.children_type??scenario.type??"").split(";").map(value=>value.trim()),directChildren=this._normalizeChildrenDirectTypeForUi(scenario.children_direct_type),size=Math.max(parents.length,children.length,directChildren.length,1),conditions=[];for(let index=0;index<size;index+=1){let condition=this._normalizeConditionForUi({parent_type:parents[index]??"",children_type:children[index]??"",children_direct_type:directChildren[index]??""});(condition.parent_type||condition.children_type_enabled||condition.children_direct_type_enabled)&&conditions.push(condition)}return conditions.length?conditions:[newCondition()]}_normalizeConditionForUi(condition){let childrenType=String(condition.children_type??condition.type??"").trim(),childrenDirectType=this._normalizeChildrenDirectTypeForUi(condition.children_direct_type).join(";");return{id:String(condition.id??generateConditionId()),parent_type:String(condition.parent_type??"").trim(),children_type:childrenType,children_type_enabled:childrenType!=="",children_direct_type:childrenDirectType,children_direct_type_enabled:childrenDirectType!==""}}_serializeCondition(condition){let parentType=String(condition.parent_type??"").trim(),childrenType=String(condition.children_type??"").trim(),childrenDirectType=String(condition.children_direct_type??"").trim();if(!parentType&&!childrenType&&!childrenDirectType)return[];let parentValues=parentType.split(";").map(value=>value.trim()),childrenValues=childrenType.split(";").map(value=>value.trim()),size=Math.max(parentValues.length,childrenValues.length,1),payloads=[];for(let index=0;index<size;index+=1){let nextParentType=parentValues[index]??"",nextChildrenType=childrenValues[index]??"";if(!nextParentType&&!nextChildrenType)continue;let payload={parent_type:nextParentType};condition.children_type_enabled&&nextChildrenType&&(payload.children_type=nextChildrenType),condition.children_direct_type_enabled&&childrenDirectType&&(payload.children_direct_type=childrenDirectType),payloads.push(payload)}return payloads}_updateCondition(scenarioId,conditionId,field,value,rerender=!1){return updateCondition(this,scenarioId,conditionId,field,value,rerender)}_normalizeChildrenDirectTypeForUi(value){if(Array.isArray(value))return value.map(item=>typeof item=="string"?item.trim():item&&typeof item=="object"?String(item.mapping_type??item.mappingType??item.type??"").trim():"").filter(Boolean);if(value&&typeof value=="object"){let single=String(value.mapping_type??value.mappingType??value.type??"").trim();return single?[single]:[]}return String(value??"").split(";").map(item=>item.trim()).filter(Boolean)}_enableConditionChildrenType(scenarioId,conditionId){return enableConditionChildrenType(this,scenarioId,conditionId)}_disableConditionChildrenType(scenarioId,conditionId){return disableConditionChildrenType(this,scenarioId,conditionId)}_enableConditionChildrenDirectType(scenarioId,conditionId){return enableConditionChildrenDirectType(this,scenarioId,conditionId)}_disableConditionChildrenDirectType(scenarioId,conditionId){return disableConditionChildrenDirectType(this,scenarioId,conditionId)}_addCondition(scenarioId){return addCondition(this,scenarioId)}_removeCondition(scenarioId,conditionId){return removeCondition(this,scenarioId,conditionId)}_addScenario(){return addScenario(this)}_scrollScenarioIntoView(id){return scrollScenarioIntoView(this,id)}_removeScenario(id){return removeScenario(this,id)}_setScenariosPage(page){return setScenariosPage(this,page)}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(scenario=>{let conditions=Array.isArray(scenario.conditions)?scenario.conditions:[];return conditions.length?!!conditions.find(condition=>{let childrenType=String(condition.children_type??"").trim(),childrenDirectType=String(condition.children_direct_type??"").trim();return!!(!String(condition.parent_type??"").trim()&&!childrenType&&!childrenDirectType||condition.children_type_enabled&&!childrenType||condition.children_direct_type_enabled&&!childrenDirectType)})||!String(scenario.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,command_receive_mode:this._config.command_receive_mode==="redis_subscribe"?"redis_subscribe":"http",redis_url:this._config.redis_url,redis_channel:this._config.redis_channel,allow_non_admin_panel:!!this._config.allow_non_admin_panel,timer_alarm_token:this._config.timer_alarm_token,yandex_tts_api_key:this._config.yandex_tts_api_key,yandex_tts_folder_id:this._config.yandex_tts_folder_id,yandex_tts_lang:this._config.yandex_tts_lang,yandex_tts_codec:this._config.yandex_tts_codec,yandex_tts_voice:this._config.yandex_tts_voice,yandex_tts_emotion:this._config.yandex_tts_emotion,yandex_tts_speed:Number(this._config.yandex_tts_speed)||1.1,theme:this._config.theme,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(scenario=>this._serializeScenario(scenario))}}_downloadJson(){let payload=this._buildConfigPayload(),blob=new Blob([`${JSON.stringify(payload,null,2)}
`],{type:"application/json"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url,link.download="dialog-custom-ui-config.json",link.click(),URL.revokeObjectURL(url),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}_openYandexTtsFilePicker(){this.shadowRoot.querySelector('[data-action="import-yandex-tts-input"]')?.click()}_arrayBufferToBase64(buffer){let bytes=new Uint8Array(buffer),chunkSize=32768,binary="";for(let offset=0;offset<bytes.length;offset+=chunkSize){let chunk=bytes.subarray(offset,offset+chunkSize);binary+=String.fromCharCode(...chunk)}return btoa(binary)}_base64ToUint8Array(base64){let binary=atob(String(base64??"")),bytes=new Uint8Array(binary.length);for(let index=0;index<binary.length;index+=1)bytes[index]=binary.charCodeAt(index);return bytes}async _downloadYandexTtsFiles(){if(this._hass){this._error="",this._status="",this._render();try{let result=await this._hass.callWS({type:"dialog_custom_ui/export_yandex_tts_files"}),filename=String(result?.filename??"yandex-tts-files.zip").trim()||"yandex-tts-files.zip",bytes=this._base64ToUint8Array(result?.zip_base64??""),blob=new Blob([bytes],{type:"application/zip"}),url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url,link.download=filename,link.click(),URL.revokeObjectURL(url),this._status="\u0410\u0440\u0445\u0438\u0432 TTS \u0441\u043A\u0430\u0447\u0430\u043D."}catch(err){this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0430\u0440\u0445\u0438\u0432 TTS.",this._status=""}finally{this._render()}}}async _importYandexTtsArchive(file){if(!file)return;this._error="",this._status="",this._render();try{let buffer=await file.arrayBuffer(),zipBase64=this._arrayBufferToBase64(buffer),result=await this._hass.callWS({type:"dialog_custom_ui/import_yandex_tts_files",zip_base64:zipBase64}),importedCount=Number(result?.imported_count)||0,skippedCount=Number(result?.skipped_count)||0;this._status=`\u0418\u043C\u043F\u043E\u0440\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D: \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E ${importedCount}, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E \u0434\u0443\u0431\u043B\u0435\u0439 ${skippedCount}.`}catch(err){this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0440\u0445\u0438\u0432 TTS.",this._status=""}let input=this.shadowRoot.querySelector('[data-action="import-yandex-tts-input"]');input&&(input.value=""),this._render()}async _importJsonFile(file){if(!file)return;try{let raw=await file.text(),parsed=JSON.parse(raw),scenarios=Array.isArray(parsed.scenarios)?parsed.scenarios:[];this._config={...DEFAULT_CONFIG,...parsed,timeout:Number(parsed.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(parsed.timer_alarm_device_ids??[]),scenarios:scenarios.map(scenario=>this._normalizeScenarioForUi(scenario))},this._applyTheme(),this._expandedScenarios=new Set(this._config.scenarios.map(scenario=>scenario.id)),this._scenariosPage=1,this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(err){this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let input=this.shadowRoot.querySelector('[data-action="import-json-input"]');input&&(input.value=""),this._render()}async _save(){let validationError=this._validate();if(validationError){this._error=validationError,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let payload=this._buildConfigPayload();await this._hass.callWS({type:"dialog_custom_ui/save_config",...payload});let refreshed=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...DEFAULT_CONFIG,...refreshed,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(refreshed.timer_alarm_device_ids??[]),scenarios:Array.isArray(refreshed.scenarios)?refreshed.scenarios.map(scenario=>this._normalizeScenarioForUi(scenario)):[]},this._applyTheme(),this._scenariosPage=1,this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(err){this._error=err?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(event){event.stopPropagation()}_bindEvents(){let root=this.shadowRoot;if(!root)return;let on=createEventBinder(root);bindPanelActions(this,root,on),bindPanelFields(this,root,on)}async _resetCommandsCache(){let base=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!base){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._status="",this._render();return}this._error="",this._status="",this._render();let url=`${base}/api/setting/commands`,headers={};this._config.timer_alarm_token&&(headers.Authorization=this._config.timer_alarm_token),headers["Content-Type"]="application/json";try{let response=await fetch(url,{method:"POST",headers,body:JSON.stringify({clientId:String(this._config.client_id??"").trim()})});if((response.status===405||response.status===404)&&(response=await fetch(url,{method:"GET",headers:this._config.timer_alarm_token?{Authorization:this._config.timer_alarm_token}:{}})),!response.ok)throw new Error(`HTTP ${response.status}`);this._status="\u041A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434 \u0441\u0431\u0440\u043E\u0448\u0435\u043D."}catch(error){this._error=error?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434."}finally{this._render()}}_renderScenarios(){return renderScenarios(this)}_renderLogs(){return renderLogs(this)}_renderTimerAlarm(){return renderTimerAlarm(this)}_renderJsonTools(){return renderJsonTools(this)}_renderYandexScenarios(){return renderYandexScenarios(this)}_renderCreateScenario(){return renderCreateScenario()}_renderActiveTopLevelPage(){return renderActiveTopLevelPage(this)}_render(){this._activeTab=this._resolveAllowedTab(this._activeTab);let content=this._renderActiveTopLevelPage(),tabsMarkup=(this._isCurrentUserAdmin()?[{id:"scenarios",label:"Scenarios"},{id:"create-scenario",label:"Create Scenario"},{id:"timer-alarm",label:"Timer / Alarm"},{id:"yandex-scenarios",label:"\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"},{id:"json",label:"JSON"},{id:"logs",label:"Logs"},{id:"settings",label:"Settings"}]:[{id:"scenarios",label:"Scenarios"},{id:"create-scenario",label:"Create Scenario"},{id:"timer-alarm",label:"Timer / Alarm"},{id:"yandex-scenarios",label:"\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"},{id:"json",label:"JSON"},{id:"logs",label:"Logs"}]).map(tab=>`<button type="button" class="tab-button ${this._activeTab===tab.id?"active":""}" data-tab="${tab.id}">${tab.label}</button>`).join(""),markup=`
      ${PANEL_STYLES}
      <div class="page">
        <div class="hero">
          <section class="panel-shell">
            <div class="tabs">
              ${tabsMarkup}
            </div>
            ${content}
          </section>
        </div>
      </div>
    `;this._mountReact(markup)}_afterReactRender(){this._bindEvents(),this._syncEmbeddedTimerAlarmHass()}_syncEmbeddedTimerAlarmHass(){if(!this._hass||!this.shadowRoot)return;let timerAlarmElement=this.shadowRoot.querySelector("dialog-custom-ui-timer-alarm");timerAlarmElement&&(timerAlarmElement.hass=this._hass,timerAlarmElement.config={theme:this._config.theme})}};customElements.get("dialog-custom-ui-panel")||customElements.define("dialog-custom-ui-panel",DialogCustomUiPanel);
