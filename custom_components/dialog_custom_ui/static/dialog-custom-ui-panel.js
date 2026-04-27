var Of=Object.create;var zl=Object.defineProperty;var Rf=Object.getOwnPropertyDescriptor;var Uf=Object.getOwnPropertyNames;var Ff=Object.getPrototypeOf,jf=Object.prototype.hasOwnProperty;var wt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Bf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Uf(t))!jf.call(e,a)&&a!==n&&zl(e,a,{get:()=>t[a],enumerable:!(r=Rf(t,a))||r.enumerable});return e};var Ut=(e,t,n)=>(n=e!=null?Of(Ff(e)):{},Bf(t||!e||!e.__esModule?zl(n,"default",{value:e,enumerable:!0}):n,e));var Kl=wt(A=>{"use strict";var yn=Symbol.for("react.element"),Vf=Symbol.for("react.portal"),Hf=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),Wf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Xf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),Ol=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=Ol&&e[Ol]||e["@@iterator"],typeof e=="function"?e:null)}var Fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Bl={};function Ft(e,t,n){this.props=e,this.context=t,this.refs=Bl,this.updater=n||Fl}Ft.prototype.isReactComponent={};Ft.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vl(){}Vl.prototype=Ft.prototype;function ni(e,t,n){this.props=e,this.context=t,this.refs=Bl,this.updater=n||Fl}var ri=ni.prototype=new Vl;ri.constructor=ni;jl(ri,Ft.prototype);ri.isPureReactComponent=!0;var Rl=Array.isArray,Hl=Object.prototype.hasOwnProperty,ai={current:null},Yl={key:!0,ref:!0,__self:!0,__source:!0};function ql(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Hl.call(t,r)&&!Yl.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:yn,type:e,key:i,ref:o,props:a,_owner:ai.current}}function em(e,t){return{$$typeof:yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ii(e){return typeof e=="object"&&e!==null&&e.$$typeof===yn}function tm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ul=/\/+/g;function ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tm(""+e.key):t.toString(36)}function gr(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case yn:case Vf:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ti(o,0):r,Rl(a)?(n="",e!=null&&(n=e.replace(Ul,"$&/")+"/"),gr(a,t,n,"",function(d){return d})):a!=null&&(ii(a)&&(a=em(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ul,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Rl(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ti(i,l);o+=gr(i,t,n,s,a)}else if(s=Zf(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ti(i,l++),o+=gr(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,t,n){if(e==null)return e;var r=[],a=0;return gr(e,r,"","",function(i){return t.call(n,i,a++)}),r}function nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},hr={transition:null},rm={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:hr,ReactCurrentOwner:ai};function Wl(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ii(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Ft;A.Fragment=Hf;A.Profiler=qf;A.PureComponent=ni;A.StrictMode=Yf;A.Suspense=Gf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;A.act=Wl;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jl({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ai.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Hl.call(t,s)&&!Yl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:yn,type:e.type,key:a,ref:i,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:Kf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wf,_context:e},e.Consumer=e};A.createElement=ql;A.createFactory=function(e){var t=ql.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Qf,render:e}};A.isValidElement=ii;A.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:nm}};A.memo=function(e,t){return{$$typeof:Xf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=hr.transition;hr.transition={};try{e()}finally{hr.transition=t}};A.unstable_act=Wl;A.useCallback=function(e,t){return ie.current.useCallback(e,t)};A.useContext=function(e){return ie.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};A.useEffect=function(e,t){return ie.current.useEffect(e,t)};A.useId=function(){return ie.current.useId()};A.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ie.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};A.useRef=function(e){return ie.current.useRef(e)};A.useState=function(e){return ie.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ie.current.useTransition()};A.version="18.3.1"});var _r=wt((fh,Ql)=>{"use strict";Ql.exports=Kl()});var is=wt(P=>{"use strict";function di(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<yr(a,t))e[r]=t,e[n]=a,n=r;else break e}}function Ee(e){return e.length===0?null:e[0]}function Sr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var o=2*(r+1)-1,l=e[o],s=o+1,d=e[s];if(0>yr(l,n))s<a&&0>yr(d,l)?(e[r]=d,e[s]=n,r=s):(e[r]=l,e[o]=n,r=o);else if(s<a&&0>yr(d,n))e[r]=d,e[s]=n,r=s;else break e}}return t}function yr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Gl=performance,P.unstable_now=function(){return Gl.now()}):(oi=Date,Xl=oi.now(),P.unstable_now=function(){return oi.now()-Xl});var Gl,oi,Xl,ze=[],tt=[],am=1,Se=null,Z=3,br=!1,Ct=!1,Sn=!1,es=typeof setTimeout=="function"?setTimeout:null,ts=typeof clearTimeout=="function"?clearTimeout:null,Jl=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ui(e){for(var t=Ee(tt);t!==null;){if(t.callback===null)Sr(tt);else if(t.startTime<=e)Sr(tt),t.sortIndex=t.expirationTime,di(ze,t);else break;t=Ee(tt)}}function ci(e){if(Sn=!1,ui(e),!Ct)if(Ee(ze)!==null)Ct=!0,fi(pi);else{var t=Ee(tt);t!==null&&mi(ci,t.startTime-e)}}function pi(e,t){Ct=!1,Sn&&(Sn=!1,ts(bn),bn=-1),br=!0;var n=Z;try{for(ui(t),Se=Ee(ze);Se!==null&&(!(Se.expirationTime>t)||e&&!as());){var r=Se.callback;if(typeof r=="function"){Se.callback=null,Z=Se.priorityLevel;var a=r(Se.expirationTime<=t);t=P.unstable_now(),typeof a=="function"?Se.callback=a:Se===Ee(ze)&&Sr(ze),ui(t)}else Sr(ze);Se=Ee(ze)}if(Se!==null)var i=!0;else{var o=Ee(tt);o!==null&&mi(ci,o.startTime-t),i=!1}return i}finally{Se=null,Z=n,br=!1}}var wr=!1,vr=null,bn=-1,ns=5,rs=-1;function as(){return!(P.unstable_now()-rs<ns)}function li(){if(vr!==null){var e=P.unstable_now();rs=e;var t=!0;try{t=vr(!0,e)}finally{t?vn():(wr=!1,vr=null)}}else wr=!1}var vn;typeof Jl=="function"?vn=function(){Jl(li)}:typeof MessageChannel<"u"?(si=new MessageChannel,Zl=si.port2,si.port1.onmessage=li,vn=function(){Zl.postMessage(null)}):vn=function(){es(li,0)};var si,Zl;function fi(e){vr=e,wr||(wr=!0,vn())}function mi(e,t){bn=es(function(){e(P.unstable_now())},t)}P.unstable_IdlePriority=5;P.unstable_ImmediatePriority=1;P.unstable_LowPriority=4;P.unstable_NormalPriority=3;P.unstable_Profiling=null;P.unstable_UserBlockingPriority=2;P.unstable_cancelCallback=function(e){e.callback=null};P.unstable_continueExecution=function(){Ct||br||(Ct=!0,fi(pi))};P.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ns=0<e?Math.floor(1e3/e):5};P.unstable_getCurrentPriorityLevel=function(){return Z};P.unstable_getFirstCallbackNode=function(){return Ee(ze)};P.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};P.unstable_pauseExecution=function(){};P.unstable_requestPaint=function(){};P.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};P.unstable_scheduleCallback=function(e,t,n){var r=P.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:am++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,di(tt,e),Ee(ze)===null&&e===Ee(tt)&&(Sn?(ts(bn),bn=-1):Sn=!0,mi(ci,n-r))):(e.sortIndex=a,di(ze,e),Ct||br||(Ct=!0,fi(pi))),e};P.unstable_shouldYield=as;P.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var ls=wt((gh,os)=>{"use strict";os.exports=is()});var cc=wt(ve=>{"use strict";var im=_r(),_e=ls();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var md=new Set,Vn={};function zt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)md.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oi=Object.prototype.hasOwnProperty,om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ss={},ds={};function lm(e){return Oi.call(ds,e)?!0:Oi.call(ss,e)?!1:om.test(e)?ds[e]=!0:(ss[e]=!0,!1)}function sm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dm(e,t,n,r){if(t===null||typeof t>"u"||sm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var $o=/[\-:]([a-z])/g;function Mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($o,Mo);J[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($o,Mo);J[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($o,Mo);J[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var a=J.hasOwnProperty(t)?J[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dm(t,n,a,r)&&(n=null),r||a===null?lm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),Po=Symbol.for("react.strict_mode"),Ri=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),hd=Symbol.for("react.context"),Lo=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Fi=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),rt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var _d=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var us=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,gi;function $n(e){if(gi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gi=t&&t[1]||""}return`
`+gi+e}var hi=!1;function _i(e,t){if(!e||hi)return"";hi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{hi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function um(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case Ri:return"Profiler";case Po:return"StrictMode";case Ui:return"Suspense";case Fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hd:return(e.displayName||"Context")+".Consumer";case gd:return(e._context.displayName||"Context")+".Provider";case Lo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return t=e.displayName||null,t!==null?t:ji(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return ji(e(t))}catch{}}return null}function cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(t);case 8:return t===Po?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=yd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=pm(e))}function vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bi(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sd(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function Vi(e,t){Sd(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hi(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hi(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Yi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(Mn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function bd(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Cd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fm=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){fm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function kd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var mm=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(e,t){if(t){if(mm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,nn=null,rn=null;function gs(e){if(e=sr(e)){if(typeof Gi!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Ia(t),Gi(e.stateNode,e.type,t))}}function Id(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Dd(){if(nn){var e=nn,t=rn;if(rn=nn=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function Ed(e,t){return e(t)}function Ad(){}var yi=!1;function $d(e,t,n){if(yi)return e(t,n);yi=!0;try{return Ed(e,t,n)}finally{yi=!1,(nn!==null||rn!==null)&&(Ad(),Dd())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ia(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var Xi=!1;if(Qe)try{jt={},Object.defineProperty(jt,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",jt,jt),window.removeEventListener("test",jt,jt)}catch{Xi=!1}var jt;function gm(e,t,n,r,a,i,o,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Nn=!1,Zr=null,ea=!1,Ji=null,hm={onError:function(e){Nn=!0,Zr=e}};function _m(e,t,n,r,a,i,o,l,s){Nn=!1,Zr=null,gm.apply(hm,arguments)}function ym(e,t,n,r,a,i,o,l,s){if(_m.apply(this,arguments),Nn){if(Nn){var d=Zr;Nn=!1,Zr=null}else throw Error(v(198));ea||(ea=!0,Ji=d)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hs(e){if(Ot(e)!==e)throw Error(v(188))}function vm(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return hs(a),e;if(i===r)return hs(a),t;i=i.sibling}throw Error(v(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function xd(e){return e=vm(e),e!==null?Pd(e):null}function Pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pd(e);if(t!==null)return t;e=e.sibling}return null}var Ld=_e.unstable_scheduleCallback,_s=_e.unstable_cancelCallback,Sm=_e.unstable_shouldYield,bm=_e.unstable_requestPaint,V=_e.unstable_now,wm=_e.unstable_getCurrentPriorityLevel,Oo=_e.unstable_ImmediatePriority,Nd=_e.unstable_UserBlockingPriority,ta=_e.unstable_NormalPriority,Cm=_e.unstable_LowPriority,zd=_e.unstable_IdlePriority,wa=null,Fe=null;function Tm(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(wa,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:Dm,km=Math.log,Im=Math.LN2;function Dm(e){return e>>>=0,e===0?32:31-(km(e)/Im|0)|0}var Ir=64,Dr=4194304;function xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=xn(l):(i&=o,i!==0&&(r=xn(i)))}else o=n&~a,o!==0?r=xn(o):i!==0&&(r=xn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pe(t),a=1<<n,r|=e[n],t&=~a;return r}function Em(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Pe(i),l=1<<o,s=a[o];s===-1?((l&n)===0||(l&r)!==0)&&(a[o]=Em(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Od(){var e=Ir;return Ir<<=1,(Ir&4194240)===0&&(Ir=64),e}function vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pe(t),e[t]=n}function $m(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Pe(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var x=0;function Rd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ud,Uo,Fd,jd,Bd,eo=!1,Er=[],dt=null,ut=null,ct=null,qn=new Map,Wn=new Map,it=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Cn(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=sr(t),t!==null&&Uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function xm(e,t,n,r,a){switch(t){case"focusin":return dt=Cn(dt,e,t,n,r,a),!0;case"dragenter":return ut=Cn(ut,e,t,n,r,a),!0;case"mouseover":return ct=Cn(ct,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return qn.set(i,Cn(qn.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Wn.set(i,Cn(Wn.get(i)||null,e,t,n,r,a)),!0}return!1}function Vd(e){var t=It(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Md(n),t!==null){e.blockedOn=t,Bd(e.priority,function(){Fd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=to(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qi=r,n.target.dispatchEvent(r),Qi=null}else return t=sr(n),t!==null&&Uo(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){Br(e)&&n.delete(t)}function Pm(){eo=!1,dt!==null&&Br(dt)&&(dt=null),ut!==null&&Br(ut)&&(ut=null),ct!==null&&Br(ct)&&(ct=null),qn.forEach(vs),Wn.forEach(vs)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,eo||(eo=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Pm)))}function Kn(e){function t(a){return Tn(a,e)}if(0<Er.length){Tn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Tn(dt,e),ut!==null&&Tn(ut,e),ct!==null&&Tn(ct,e),qn.forEach(t),Wn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Vd(n),n.blockedOn===null&&it.shift()}var an=Ze.ReactCurrentBatchConfig,ra=!0;function Lm(e,t,n,r){var a=x,i=an.transition;an.transition=null;try{x=1,Fo(e,t,n,r)}finally{x=a,an.transition=i}}function Nm(e,t,n,r){var a=x,i=an.transition;an.transition=null;try{x=4,Fo(e,t,n,r)}finally{x=a,an.transition=i}}function Fo(e,t,n,r){if(ra){var a=to(e,t,n,r);if(a===null)Ii(e,t,r,aa,n),ys(e,r);else if(xm(a,e,t,n,r))r.stopPropagation();else if(ys(e,r),t&4&&-1<Mm.indexOf(e)){for(;a!==null;){var i=sr(a);if(i!==null&&Ud(i),i=to(e,t,n,r),i===null&&Ii(e,t,r,aa,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ii(e,t,r,null,n)}}var aa=null;function to(e,t,n,r){if(aa=null,e=zo(r),e=It(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return aa=e,null}function Hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wm()){case Oo:return 1;case Nd:return 4;case ta:case Cm:return 16;case zd:return 536870912;default:return 16}default:return 16}}var lt=null,jo=null,Vr=null;function Yd(){if(Vr)return Vr;var e,t=jo,n=t.length,r,a="value"in lt?lt.value:lt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Vr=a.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function Ss(){return!1}function ye(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ar:Ss,this.isPropagationStopped=Ss,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=ye(gn),lr=j({},gn,{view:0,detail:0}),zm=ye(lr),Si,bi,kn,Ca=j({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Si=e.screenX-kn.screenX,bi=e.screenY-kn.screenY):bi=Si=0,kn=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),bs=ye(Ca),Om=j({},Ca,{dataTransfer:0}),Rm=ye(Om),Um=j({},lr,{relatedTarget:0}),wi=ye(Um),Fm=j({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=ye(Fm),Bm=j({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vm=ye(Bm),Hm=j({},gn,{data:0}),ws=ye(Hm),Ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wm[e])?!!t[e]:!1}function Vo(){return Km}var Qm=j({},lr,{key:function(e){if(e.key){var t=Ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=ye(Qm),Xm=j({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=ye(Xm),Jm=j({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),Zm=ye(Jm),eg=j({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=ye(eg),ng=j({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=ye(ng),ag=[9,13,27,32],Ho=Qe&&"CompositionEvent"in window,zn=null;Qe&&"documentMode"in document&&(zn=document.documentMode);var ig=Qe&&"TextEvent"in window&&!zn,qd=Qe&&(!Ho||zn&&8<zn&&11>=zn),Ts=" ",ks=!1;function Wd(e,t){switch(e){case"keyup":return ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function og(e,t){switch(e){case"compositionend":return Kd(t);case"keypress":return t.which!==32?null:(ks=!0,Ts);case"textInput":return e=t.data,e===Ts&&ks?null:e;default:return null}}function lg(e,t){if(Yt)return e==="compositionend"||!Ho&&Wd(e,t)?(e=Yd(),Vr=jo=lt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function Qd(e,t,n,r){Id(r),t=ia(t,"onChange"),0<t.length&&(n=new Bo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Qn=null;function dg(e){ou(e,0)}function Ta(e){var t=Kt(e);if(vd(t))return e}function ug(e,t){if(e==="change")return t}var Gd=!1;Qe&&(Qe?(Mr="oninput"in document,Mr||(Ci=document.createElement("div"),Ci.setAttribute("oninput","return;"),Mr=typeof Ci.oninput=="function"),$r=Mr):$r=!1,Gd=$r&&(!document.documentMode||9<document.documentMode));var $r,Mr,Ci;function Ds(){On&&(On.detachEvent("onpropertychange",Xd),Qn=On=null)}function Xd(e){if(e.propertyName==="value"&&Ta(Qn)){var t=[];Qd(t,Qn,e,zo(e)),$d(dg,t)}}function cg(e,t,n){e==="focusin"?(Ds(),On=t,Qn=n,On.attachEvent("onpropertychange",Xd)):e==="focusout"&&Ds()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(Qn)}function fg(e,t){if(e==="click")return Ta(t)}function mg(e,t){if(e==="input"||e==="change")return Ta(t)}function gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:gg;function Gn(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Oi.call(t,a)||!Ne(e[a],t[a]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var n=Es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Es(n)}}function Jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hg(e){var t=Zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jd(n.ownerDocument.documentElement,n)){if(r!==null&&Yo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=As(n,i);var o=As(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _g=Qe&&"documentMode"in document&&11>=document.documentMode,qt=null,no=null,Rn=null,ro=!1;function $s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ro||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&Yo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Gn(Rn,r)||(Rn=r,r=ia(no,"onSelect"),0<r.length&&(t=new Bo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Ti={},eu={};Qe&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ka(e){if(Ti[e])return Ti[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return Ti[e]=t[n];return e}var tu=ka("animationend"),nu=ka("animationiteration"),ru=ka("animationstart"),au=ka("transitionend"),iu=new Map,Ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){iu.set(e,t),zt(t,[e])}for(Pr=0;Pr<Ms.length;Pr++)Lr=Ms[Pr],xs=Lr.toLowerCase(),Ps=Lr[0].toUpperCase()+Lr.slice(1),vt(xs,"on"+Ps);var Lr,xs,Ps,Pr;vt(tu,"onAnimationEnd");vt(nu,"onAnimationIteration");vt(ru,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(au,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ym(r,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Ls(a,l,d),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,d=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Ls(a,l,d),i=s}}}if(ea)throw e=Ji,ea=!1,Ji=null,e}function z(e,t){var n=t[so];n===void 0&&(n=t[so]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function ki(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Nr]){e[Nr]=!0,md.forEach(function(n){n!=="selectionchange"&&(yg.has(n)||ki(n,!1,e),ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,ki("selectionchange",!1,t))}}function lu(e,t,n,r){switch(Hd(t)){case 1:var a=Lm;break;case 4:a=Nm;break;default:a=Fo}n=a.bind(null,t,n,e),a=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ii(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=It(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}$d(function(){var d=i,m=zo(n),p=[];e:{var g=iu.get(e);if(g!==void 0){var S=Bo,b=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":S=Gm;break;case"focusin":b="focus",S=wi;break;case"focusout":b="blur",S=wi;break;case"beforeblur":case"afterblur":S=wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Zm;break;case tu:case nu:case ru:S=jm;break;case au:S=tg;break;case"scroll":S=zm;break;case"wheel":S=rg;break;case"copy":case"cut":case"paste":S=Vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Cs}var _=(t&4)!==0,N=!_&&e==="scroll",f=_?g!==null?g+"Capture":null:g;_=[];for(var u=d,c;u!==null;){c=u;var y=c.stateNode;if(c.tag===5&&y!==null&&(c=y,f!==null&&(y=Yn(u,f),y!=null&&_.push(Jn(u,y,c)))),N)break;u=u.return}0<_.length&&(g=new S(g,b,null,n,m),p.push({event:g,listeners:_}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Qi&&(b=n.relatedTarget||n.fromElement)&&(It(b)||b[Ge]))break e;if((S||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,S?(b=n.relatedTarget||n.toElement,S=d,b=b?It(b):null,b!==null&&(N=Ot(b),b!==N||b.tag!==5&&b.tag!==6)&&(b=null)):(S=null,b=d),S!==b)){if(_=bs,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(_=Cs,y="onPointerLeave",f="onPointerEnter",u="pointer"),N=S==null?g:Kt(S),c=b==null?g:Kt(b),g=new _(y,u+"leave",S,n,m),g.target=N,g.relatedTarget=c,y=null,It(m)===d&&(_=new _(f,u+"enter",b,n,m),_.target=c,_.relatedTarget=N,y=_),N=y,S&&b)t:{for(_=S,f=b,u=0,c=_;c;c=Bt(c))u++;for(c=0,y=f;y;y=Bt(y))c++;for(;0<u-c;)_=Bt(_),u--;for(;0<c-u;)f=Bt(f),c--;for(;u--;){if(_===f||f!==null&&_===f.alternate)break t;_=Bt(_),f=Bt(f)}_=null}else _=null;S!==null&&Ns(p,g,S,_,!1),b!==null&&N!==null&&Ns(p,N,b,_,!0)}}e:{if(g=d?Kt(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var C=ug;else if(Is(g))if(Gd)C=mg;else{C=pg;var k=cg}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=fg);if(C&&(C=C(e,d))){Qd(p,C,n,m);break e}k&&k(e,g,d),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Hi(g,"number",g.value)}switch(k=d?Kt(d):window,e){case"focusin":(Is(k)||k.contentEditable==="true")&&(qt=k,no=d,Rn=null);break;case"focusout":Rn=no=qt=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,$s(p,n,m);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":$s(p,n,m)}var I;if(Ho)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Yt?Wd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qd&&n.locale!=="ko"&&(Yt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Yt&&(I=Yd()):(lt=m,jo="value"in lt?lt.value:lt.textContent,Yt=!0)),k=ia(d,E),0<k.length&&(E=new ws(E,e,null,n,m),p.push({event:E,listeners:k}),I?E.data=I:(I=Kd(n),I!==null&&(E.data=I)))),(I=ig?og(e,n):lg(e,n))&&(d=ia(d,"onBeforeInput"),0<d.length&&(m=new ws("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=I))}ou(p,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Yn(e,n),i!=null&&r.unshift(Jn(e,i,a)),i=Yn(e,t),i!=null&&r.push(Jn(e,i,a))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ns(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,a?(s=Yn(n,i),s!=null&&o.unshift(Jn(n,s,l))):a||(s=Yn(n,i),s!=null&&o.push(Jn(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var vg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(Sg,"")}function zr(e,t,n){if(t=zs(t),zs(e)!==t&&n)throw Error(v(425))}function oa(){}var ao=null,io=null;function oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lo=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Os=typeof Promise=="function"?Promise:void 0,wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Os<"u"?function(e){return Os.resolve(null).then(e).catch(Cg)}:lo;function Cg(e){setTimeout(function(){throw e})}function Di(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Kn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+hn,Zn="__reactProps$"+hn,Ge="__reactContainer$"+hn,so="__reactEvents$"+hn,Tg="__reactListeners$"+hn,kg="__reactHandles$"+hn;function It(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rs(e);e!==null;){if(n=e[Ue])return n;e=Rs(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Ue]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Ia(e){return e[Zn]||null}var uo=[],Qt=-1;function St(e){return{current:e}}function O(e){0>Qt||(e.current=uo[Qt],uo[Qt]=null,Qt--)}function L(e,t){Qt++,uo[Qt]=e.current,e.current=t}var yt={},re=St(yt),ce=St(!1),Mt=yt;function dn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function pe(e){return e=e.childContextTypes,e!=null}function la(){O(ce),O(re)}function Us(e,t,n){if(re.current!==yt)throw Error(v(168));L(re,t),L(ce,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(v(108,cm(e)||"Unknown",a));return j({},n,r)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Mt=re.current,L(re,e),L(ce,ce.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=su(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,O(ce),O(re),L(re,e)):O(ce),L(ce,n)}var Ye=null,Da=!1,Ei=!1;function du(e){Ye===null?Ye=[e]:Ye.push(e)}function Ig(e){Da=!0,du(e)}function bt(){if(!Ei&&Ye!==null){Ei=!0;var e=0,t=x;try{var n=Ye;for(x=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Da=!1}catch(a){throw Ye!==null&&(Ye=Ye.slice(e+1)),Ld(Oo,bt),a}finally{x=t,Ei=!1}}return null}var Gt=[],Xt=0,da=null,ua=0,be=[],we=0,xt=null,qe=1,We="";function Tt(e,t){Gt[Xt++]=ua,Gt[Xt++]=da,da=e,ua=t}function uu(e,t,n){be[we++]=qe,be[we++]=We,be[we++]=xt,xt=e;var r=qe;e=We;var a=32-Pe(r)-1;r&=~(1<<a),n+=1;var i=32-Pe(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qe=1<<32-Pe(t)+a|n<<a|r,We=i+e}else qe=1<<i|n<<a|r,We=e}function qo(e){e.return!==null&&(Tt(e,1),uu(e,1,0))}function Wo(e){for(;e===da;)da=Gt[--Xt],Gt[Xt]=null,ua=Gt[--Xt],Gt[Xt]=null;for(;e===xt;)xt=be[--we],be[we]=null,We=be[--we],be[we]=null,qe=be[--we],be[we]=null}var he=null,ge=null,R=!1,xe=null;function cu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,ge=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xt!==null?{id:qe,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,ge=null,!0):!1;default:return!1}}function co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function po(e){if(R){var t=ge;if(t){var n=t;if(!js(e,t)){if(co(e))throw Error(v(418));t=pt(n.nextSibling);var r=he;t&&js(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,R=!1,he=e)}}else{if(co(e))throw Error(v(418));e.flags=e.flags&-4097|2,R=!1,he=e}}}function Bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function Or(e){if(e!==he)return!1;if(!R)return Bs(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oo(e.type,e.memoizedProps)),t&&(t=ge)){if(co(e))throw pu(),Error(v(418));for(;t;)cu(e,t),t=pt(t.nextSibling)}if(Bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=he?pt(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=ge;e;)e=pt(e.nextSibling)}function un(){ge=he=null,R=!1}function Ko(e){xe===null?xe=[e]:xe.push(e)}var Dg=Ze.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vs(e){var t=e._init;return t(e._payload)}function fu(e){function t(f,u){if(e){var c=f.deletions;c===null?(f.deletions=[u],f.flags|=16):c.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function a(f,u){return f=ht(f,u),f.index=0,f.sibling=null,f}function i(f,u,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<u?(f.flags|=2,u):c):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,c,y){return u===null||u.tag!==6?(u=Ni(c,f.mode,y),u.return=f,u):(u=a(u,c),u.return=f,u)}function s(f,u,c,y){var C=c.type;return C===Ht?m(f,u,c.props.children,y,c.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&Vs(C)===u.type)?(y=a(u,c.props),y.ref=In(f,u,c),y.return=f,y):(y=Xr(c.type,c.key,c.props,null,f.mode,y),y.ref=In(f,u,c),y.return=f,y)}function d(f,u,c,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=zi(c,f.mode,y),u.return=f,u):(u=a(u,c.children||[]),u.return=f,u)}function m(f,u,c,y,C){return u===null||u.tag!==7?(u=$t(c,f.mode,y,C),u.return=f,u):(u=a(u,c),u.return=f,u)}function p(f,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ni(""+u,f.mode,c),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Cr:return c=Xr(u.type,u.key,u.props,null,f.mode,c),c.ref=In(f,null,u),c.return=f,c;case Vt:return u=zi(u,f.mode,c),u.return=f,u;case rt:var y=u._init;return p(f,y(u._payload),c)}if(Mn(u)||wn(u))return u=$t(u,f.mode,c,null),u.return=f,u;Rr(f,u)}return null}function g(f,u,c,y){var C=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return C!==null?null:l(f,u,""+c,y);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Cr:return c.key===C?s(f,u,c,y):null;case Vt:return c.key===C?d(f,u,c,y):null;case rt:return C=c._init,g(f,u,C(c._payload),y)}if(Mn(c)||wn(c))return C!==null?null:m(f,u,c,y,null);Rr(f,c)}return null}function S(f,u,c,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(c)||null,l(u,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cr:return f=f.get(y.key===null?c:y.key)||null,s(u,f,y,C);case Vt:return f=f.get(y.key===null?c:y.key)||null,d(u,f,y,C);case rt:var k=y._init;return S(f,u,c,k(y._payload),C)}if(Mn(y)||wn(y))return f=f.get(c)||null,m(u,f,y,C,null);Rr(u,y)}return null}function b(f,u,c,y){for(var C=null,k=null,I=u,E=u=0,W=null;I!==null&&E<c.length;E++){I.index>E?(W=I,I=null):W=I.sibling;var M=g(f,I,c[E],y);if(M===null){I===null&&(I=W);break}e&&I&&M.alternate===null&&t(f,I),u=i(M,u,E),k===null?C=M:k.sibling=M,k=M,I=W}if(E===c.length)return n(f,I),R&&Tt(f,E),C;if(I===null){for(;E<c.length;E++)I=p(f,c[E],y),I!==null&&(u=i(I,u,E),k===null?C=I:k.sibling=I,k=I);return R&&Tt(f,E),C}for(I=r(f,I);E<c.length;E++)W=S(I,f,E,c[E],y),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?E:W.key),u=i(W,u,E),k===null?C=W:k.sibling=W,k=W);return e&&I.forEach(function(et){return t(f,et)}),R&&Tt(f,E),C}function _(f,u,c,y){var C=wn(c);if(typeof C!="function")throw Error(v(150));if(c=C.call(c),c==null)throw Error(v(151));for(var k=C=null,I=u,E=u=0,W=null,M=c.next();I!==null&&!M.done;E++,M=c.next()){I.index>E?(W=I,I=null):W=I.sibling;var et=g(f,I,M.value,y);if(et===null){I===null&&(I=W);break}e&&I&&et.alternate===null&&t(f,I),u=i(et,u,E),k===null?C=et:k.sibling=et,k=et,I=W}if(M.done)return n(f,I),R&&Tt(f,E),C;if(I===null){for(;!M.done;E++,M=c.next())M=p(f,M.value,y),M!==null&&(u=i(M,u,E),k===null?C=M:k.sibling=M,k=M);return R&&Tt(f,E),C}for(I=r(f,I);!M.done;E++,M=c.next())M=S(I,f,E,M.value,y),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?E:M.key),u=i(M,u,E),k===null?C=M:k.sibling=M,k=M);return e&&I.forEach(function(zf){return t(f,zf)}),R&&Tt(f,E),C}function N(f,u,c,y){if(typeof c=="object"&&c!==null&&c.type===Ht&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Cr:e:{for(var C=c.key,k=u;k!==null;){if(k.key===C){if(C=c.type,C===Ht){if(k.tag===7){n(f,k.sibling),u=a(k,c.props.children),u.return=f,f=u;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&Vs(C)===k.type){n(f,k.sibling),u=a(k,c.props),u.ref=In(f,k,c),u.return=f,f=u;break e}n(f,k);break}else t(f,k);k=k.sibling}c.type===Ht?(u=$t(c.props.children,f.mode,y,c.key),u.return=f,f=u):(y=Xr(c.type,c.key,c.props,null,f.mode,y),y.ref=In(f,u,c),y.return=f,f=y)}return o(f);case Vt:e:{for(k=c.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(f,u.sibling),u=a(u,c.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=zi(c,f.mode,y),u.return=f,f=u}return o(f);case rt:return k=c._init,N(f,u,k(c._payload),y)}if(Mn(c))return b(f,u,c,y);if(wn(c))return _(f,u,c,y);Rr(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(n(f,u.sibling),u=a(u,c),u.return=f,f=u):(n(f,u),u=Ni(c,f.mode,y),u.return=f,f=u),o(f)):n(f,u)}return N}var cn=fu(!0),mu=fu(!1),ca=St(null),pa=null,Jt=null,Qo=null;function Go(){Qo=Jt=pa=null}function Xo(e){var t=ca.current;O(ca),e._currentValue=t}function fo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){pa=e,Qo=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ue=!0),e.firstContext=null)}function ke(e){var t=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(pa===null)throw Error(v(308));Jt=e,pa.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Dt=null;function Jo(e){Dt===null?Dt=[e]:Dt.push(e)}function gu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Jo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Xe(e,n)}return a=r.interleaved,a===null?(t.next=t,Jo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Xe(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ro(e,n)}}function Hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fa(e,t,n,r){var a=e.updateQueue;at=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,d=s.next;s.next=null,o===null?i=d:o.next=d,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=s))}if(i!==null){var p=a.baseState;o=0,m=d=s=null,l=i;do{var g=l.lane,S=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,_=l;switch(g=t,S=n,_.tag){case 1:if(b=_.payload,typeof b=="function"){p=b.call(S,p,g);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=_.payload,g=typeof b=="function"?b.call(S,p,g):b,g==null)break e;p=j({},p,g);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=S,s=p):m=m.next=S,o|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(s=p),a.baseState=s,a.firstBaseUpdate=d,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Lt|=o,e.lanes=o,e.memoizedState=p}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(v(191,a));a.call(r)}}}var dr={},je=St(dr),er=St(dr),tr=St(dr);function Et(e){if(e===dr)throw Error(v(174));return e}function el(e,t){switch(L(tr,t),L(er,e),L(je,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qi(t,e)}O(je),L(je,t)}function pn(){O(je),O(er),O(tr)}function _u(e){Et(tr.current);var t=Et(je.current),n=qi(t,e.type);t!==n&&(L(er,e),L(je,n))}function tl(e){er.current===e&&(O(je),O(er))}var U=St(0);function ma(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ai=[];function nl(){for(var e=0;e<Ai.length;e++)Ai[e]._workInProgressVersionPrimary=null;Ai.length=0}var qr=Ze.ReactCurrentDispatcher,$i=Ze.ReactCurrentBatchConfig,Pt=0,F=null,Y=null,K=null,ga=!1,Un=!1,nr=0,Eg=0;function ee(){throw Error(v(321))}function rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ne(e[n],t[n]))return!1;return!0}function al(e,t,n,r,a,i){if(Pt=i,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?xg:Pg,e=n(r,a),Un){i=0;do{if(Un=!1,nr=0,25<=i)throw Error(v(301));i+=1,K=Y=null,t.updateQueue=null,qr.current=Lg,e=n(r,a)}while(Un)}if(qr.current=ha,t=Y!==null&&Y.next!==null,Pt=0,K=Y=F=null,ga=!1,t)throw Error(v(300));return e}function il(){var e=nr!==0;return nr=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?F.memoizedState=K=e:K=K.next=e,K}function Ie(){if(Y===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=K===null?F.memoizedState:K.next;if(t!==null)K=t,Y=e;else{if(e===null)throw Error(v(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},K===null?F.memoizedState=K=e:K=K.next=e}return K}function rr(e,t){return typeof t=="function"?t(e):t}function Mi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=Y,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,d=i;do{var m=d.lane;if((Pt&m)===m)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,F.lanes|=m,Lt|=m}d=d.next}while(d!==null&&d!==i);s===null?o=r:s.next=l,Ne(r,t.memoizedState)||(ue=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,F.lanes|=i,Lt|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Ne(i,t.memoizedState)||(ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yu(){}function vu(e,t){var n=F,r=Ie(),a=t(),i=!Ne(r.memoizedState,a);if(i&&(r.memoizedState=a,ue=!0),r=r.queue,ol(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,ar(9,bu.bind(null,n,r,a,t),void 0,null),Q===null)throw Error(v(349));(Pt&30)!==0||Su(n,t,a)}return a}function Su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bu(e,t,n,r){t.value=n,t.getSnapshot=r,Cu(t)&&Tu(e)}function wu(e,t,n){return n(function(){Cu(t)&&Tu(e)})}function Cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ne(e,n)}catch{return!0}}function Tu(e){var t=Xe(e,1);t!==null&&Le(t,e,1,-1)}function qs(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mg.bind(null,F,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return Ie().memoizedState}function Wr(e,t,n,r){var a=Re();F.flags|=e,a.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Ea(e,t,n,r){var a=Ie();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&rl(r,o.deps)){a.memoizedState=ar(t,n,i,r);return}}F.flags|=e,a.memoizedState=ar(1|t,n,i,r)}function Ws(e,t){return Wr(8390656,8,e,t)}function ol(e,t){return Ea(2048,8,e,t)}function Iu(e,t){return Ea(4,2,e,t)}function Du(e,t){return Ea(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Au(e,t,n){return n=n!=null?n.concat([e]):null,Ea(4,4,Eu.bind(null,t,e),n)}function ll(){}function $u(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xu(e,t,n){return(Pt&21)===0?(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n):(Ne(n,t)||(n=Od(),F.lanes|=n,Lt|=n,e.baseState=!0),t)}function Ag(e,t){var n=x;x=n!==0&&4>n?n:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),t()}finally{x=n,$i.transition=r}}function Pu(){return Ie().memoizedState}function $g(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Nu(t,n);else if(n=gu(e,t,n,r),n!==null){var a=le();Le(n,e,r,a),zu(n,t,r)}}function Mg(e,t,n){var r=gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Nu(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Ne(l,o)){var s=t.interleaved;s===null?(a.next=a,Jo(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=gu(e,t,a,r),n!==null&&(a=le(),Le(n,e,r,a),zu(n,t,r))}}function Lu(e){var t=e.alternate;return e===F||t!==null&&t===F}function Nu(e,t){Un=ga=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ro(e,n)}}var ha={readContext:ke,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},xg={readContext:ke,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Re();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Re();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$g.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:qs,useDebugValue:ll,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=qs(!1),t=e[0];return e=Ag.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,a=Re();if(R){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Q===null)throw Error(v(349));(Pt&30)!==0||Su(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ws(wu.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,bu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Re(),t=Q.identifierPrefix;if(R){var n=We,r=qe;n=(r&~(1<<32-Pe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Eg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pg={readContext:ke,useCallback:$u,useContext:ke,useEffect:ol,useImperativeHandle:Au,useInsertionEffect:Iu,useLayoutEffect:Du,useMemo:Mu,useReducer:Mi,useRef:ku,useState:function(){return Mi(rr)},useDebugValue:ll,useDeferredValue:function(e){var t=Ie();return xu(t,Y.memoizedState,e)},useTransition:function(){var e=Mi(rr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:vu,useId:Pu,unstable_isNewReconciler:!1},Lg={readContext:ke,useCallback:$u,useContext:ke,useEffect:ol,useImperativeHandle:Au,useInsertionEffect:Iu,useLayoutEffect:Du,useMemo:Mu,useReducer:xi,useRef:ku,useState:function(){return xi(rr)},useDebugValue:ll,useDeferredValue:function(e){var t=Ie();return Y===null?t.memoizedState=e:xu(t,Y.memoizedState,e)},useTransition:function(){var e=xi(rr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:vu,useId:Pu,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),a=gt(e),i=Ke(r,a);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,a),t!==null&&(Le(t,e,a,r),Yr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),a=gt(e),i=Ke(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,a),t!==null&&(Le(t,e,a,r),Yr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=gt(e),a=Ke(n,r);a.tag=2,t!=null&&(a.callback=t),t=ft(e,a,r),t!==null&&(Le(t,e,r,n),Yr(t,e,r))}};function Ks(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(a,i):!0}function Ou(e,t,n){var r=!1,a=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=ke(i):(a=pe(t)?Mt:re.current,r=t.contextTypes,i=(r=r!=null)?dn(e,a):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function go(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Zo(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=ke(i):(i=pe(t)?Mt:re.current,a.context=dn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(mo(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Aa.enqueueReplaceState(a,a.state,null),fa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=um(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Pi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ng=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ya||(ya=!0,Io=r),ho(e,t)},n}function Uu(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ho(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ho(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ng;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function Xs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Js(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var zg=Ze.ReactCurrentOwner,ue=!1;function oe(e,t,n,r){t.child=e===null?mu(t,null,n,r):cn(t,e.child,n,r)}function Zs(e,t,n,r,a){n=n.render;var i=t.ref;return on(t,a),r=al(e,t,n,r,i,a),n=il(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(R&&n&&qo(t),t.flags|=1,oe(e,t,r,a),t.child)}function ed(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!gl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Fu(e,t,i,r,a)):(e=Xr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(o,r)&&e.ref===t.ref)return Je(e,t,a)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function Fu(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref)if(ue=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ue=!0);else return t.lanes=e.lanes,Je(e,t,a)}return _o(e,t,n,r,a)}function ju(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(en,me),me|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(en,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,L(en,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,L(en,me),me|=r;return oe(e,t,a,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,a){var i=pe(n)?Mt:re.current;return i=dn(t,i),on(t,a),n=al(e,t,n,r,i,a),r=il(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(R&&r&&qo(t),t.flags|=1,oe(e,t,n,a),t.child)}function td(e,t,n,r,a){if(pe(n)){var i=!0;sa(t)}else i=!1;if(on(t,a),t.stateNode===null)Kr(e,t),Ou(t,n,r),go(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=pe(n)?Mt:re.current,d=dn(t,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Qs(t,o,r,d),at=!1;var g=t.memoizedState;o.state=g,fa(t,r,o,a),s=t.memoizedState,l!==r||g!==s||ce.current||at?(typeof m=="function"&&(mo(t,n,m,r),s=t.memoizedState),(l=at||Ks(t,n,l,r,g,s,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:$e(t.type,l),o.props=d,p=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ke(s):(s=pe(n)?Mt:re.current,s=dn(t,s));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==s)&&Qs(t,o,r,s),at=!1,g=t.memoizedState,o.state=g,fa(t,r,o,a);var b=t.memoizedState;l!==p||g!==b||ce.current||at?(typeof S=="function"&&(mo(t,n,S,r),b=t.memoizedState),(d=at||Ks(t,n,d,r,g,b,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return yo(e,t,n,r,i,a)}function yo(e,t,n,r,a,i){Bu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Fs(t,n,!1),Je(e,t,i);r=t.stateNode,zg.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,l,i)):oe(e,t,l,i),t.memoizedState=r.state,a&&Fs(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?Us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Us(e,t.context,!1),el(e,t.containerInfo)}function nd(e,t,n,r,a){return un(),Ko(a),t.flags|=256,oe(e,t,n,r),t.child}var vo={dehydrated:null,treeContext:null,retryLane:0};function So(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,a=U.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),L(U,a&1),e===null)return po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=xa(o,r,0,null),e=$t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=So(n),t.memoizedState=vo,e):sl(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Og(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ht(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=ht(l,i):(i=$t(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?So(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=vo,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sl(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&Ko(r),cn(t,e.child,null,n),e=sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Og(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Pi(Error(v(422))),Ur(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=xa({mode:"visible",children:r.children},a,0,null),i=$t(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&cn(t,e.child,null,o),t.child.memoizedState=So(o),t.memoizedState=vo,i);if((t.mode&1)===0)return Ur(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(v(419)),r=Pi(i,r,void 0),Ur(e,t,o,r)}if(l=(o&e.childLanes)!==0,ue||l){if(r=Q,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|o))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Xe(e,a),Le(r,e,a,-1))}return ml(),r=Pi(Error(v(421))),Ur(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Gg.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ge=pt(a.nextSibling),he=t,R=!0,xe=null,e!==null&&(be[we++]=qe,be[we++]=We,be[we++]=xt,qe=e.id,We=e.overflow,xt=t),t=sl(t,r.children),t.flags|=4096,t)}function rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fo(e.return,t,n)}function Li(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Yu(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=U.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,n,t);else if(e.tag===19)rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(U,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ma(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Li(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ma(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Li(t,!0,n,null,i);break;case"together":Li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rg(e,t,n){switch(t.tag){case 3:Vu(t),un();break;case 5:_u(t);break;case 1:pe(t.type)&&sa(t);break;case 4:el(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;L(ca,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(U,U.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Hu(e,t,n):(L(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);L(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Yu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,ju(e,t,n)}return Je(e,t,n)}var qu,bo,Wu,Ku;qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bo=function(){};Wu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Et(je.current);var i=null;switch(n){case"input":a=Bi(e,a),r=Bi(e,r),i=[];break;case"select":a=j({},a,{value:void 0}),r=j({},r,{value:void 0}),i=[];break;case"textarea":a=Yi(e,a),r=Yi(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}Wi(n,r);var o;n=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var s=r[d];if(l=a?.[d],r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&z("scroll",e),i||l===s||(i=[])):(i=i||[]).push(d,s))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ug(e,t,n){var r=t.pendingProps;switch(Wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return pe(t.type)&&la(),te(t),null;case 3:return r=t.stateNode,pn(),O(ce),O(re),nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xe!==null&&(Ao(xe),xe=null))),bo(e,t),te(t),null;case 5:tl(t);var a=Et(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return te(t),null}if(e=Et(je.current),Or(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[Zn]=i,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(a=0;a<Pn.length;a++)z(Pn[a],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":cs(r,i),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},z("invalid",r);break;case"textarea":fs(r,i),z("invalid",r)}Wi(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),a=["children",""+l]):Vn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":Tr(r),ps(r,i,!0);break;case"textarea":Tr(r),ms(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oa)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Zn]=r,qu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ki(n,r),n){case"dialog":z("cancel",e),z("close",e),a=r;break;case"iframe":case"object":case"embed":z("load",e),a=r;break;case"video":case"audio":for(a=0;a<Pn.length;a++)z(Pn[a],e);a=r;break;case"source":z("error",e),a=r;break;case"img":case"image":case"link":z("error",e),z("load",e),a=r;break;case"details":z("toggle",e),a=r;break;case"input":cs(e,r),a=Bi(e,r),z("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=j({},r,{value:void 0}),z("invalid",e);break;case"textarea":fs(e,r),a=Yi(e,r),z("invalid",e);break;default:a=r}Wi(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?kd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hn(e,s):typeof s=="number"&&Hn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&z("scroll",e):s!=null&&xo(e,i,s,o))}switch(n){case"input":Tr(e),ps(e,r,!1);break;case"textarea":Tr(e),ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Et(tr.current),Et(je.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return te(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pu(),un(),t.flags|=98560,i=!1;else if(i=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Ue]=t}else un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),i=!1}else xe!==null&&(Ao(xe),xe=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(U.current&1)!==0?q===0&&(q=3):ml())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return pn(),bo(e,t),e===null&&Xn(t.stateNode.containerInfo),te(t),null;case 10:return Xo(t.type._context),te(t),null;case 17:return pe(t.type)&&la(),te(t),null;case 19:if(O(U),i=t.memoizedState,i===null)return te(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Dn(i,!1);else{if(q!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ma(e),o!==null){for(t.flags|=128,Dn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&V()>mn&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304)}else{if(!r)if(e=ma(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!R)return te(t),null}else 2*V()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=V(),t.sibling=null,n=U.current,L(U,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return fl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(me&1073741824)!==0&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function Fg(e,t){switch(Wo(t),t.tag){case 1:return pe(t.type)&&la(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),O(ce),O(re),nl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return tl(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return pn(),null;case 10:return Xo(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Fr=!1,ne=!1,jg=typeof WeakSet=="function"?WeakSet:Set,T=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function wo(e,t,n){try{n()}catch(r){B(e,t,r)}}var ad=!1;function Bg(e,t){if(ao=ra,e=Zd(),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,d=0,m=0,p=e,g=null;t:for(;;){for(var S;p!==n||a!==0&&p.nodeType!==3||(l=o+a),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===e)break t;if(g===n&&++d===a&&(l=o),g===i&&++m===r&&(s=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(io={focusedElem:e,selectionRange:n},ra=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var _=b.memoizedProps,N=b.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:$e(t.type,_),N);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(y){B(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=ad,ad=!1,b}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&wo(t,n,i)}a=a.next}while(a!==r)}}function $a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Zn],delete t[so],delete t[Tg],delete t[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function To(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(To(e,t,n),e=e.sibling;e!==null;)To(e,t,n),e=e.sibling}function ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}var G=null,Me=!1;function nt(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(wa,n)}catch{}switch(n.tag){case 5:ne||Zt(n,t);case 6:var r=G,a=Me;G=null,nt(e,t,n),G=r,Me=a,G!==null&&(Me?(e=G,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):G.removeChild(n.stateNode));break;case 18:G!==null&&(Me?(e=G,n=n.stateNode,e.nodeType===8?Di(e.parentNode,n):e.nodeType===1&&Di(e,n),Kn(e)):Di(G,n.stateNode));break;case 4:r=G,a=Me,G=n.stateNode.containerInfo,Me=!0,nt(e,t,n),G=r,Me=a;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&wo(n,t,o),a=a.next}while(a!==r)}nt(e,t,n);break;case 1:if(!ne&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){B(n,t,l)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,nt(e,t,n),ne=r):nt(e,t,n);break;default:nt(e,t,n)}}function od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jg),t.forEach(function(r){var a=Xg.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:G=l.stateNode,Me=!1;break e;case 3:G=l.stateNode.containerInfo,Me=!0;break e;case 4:G=l.stateNode.containerInfo,Me=!0;break e}l=l.return}if(G===null)throw Error(v(160));Xu(i,o,a),G=null,Me=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(d){B(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}function Ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Oe(e),r&4){try{Fn(3,e,e.return),$a(3,e)}catch(_){B(e,e.return,_)}try{Fn(5,e,e.return)}catch(_){B(e,e.return,_)}}break;case 1:Ae(t,e),Oe(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Ae(t,e),Oe(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var a=e.stateNode;try{Hn(a,"")}catch(_){B(e,e.return,_)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Sd(a,i),Ki(l,o);var d=Ki(l,i);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?kd(a,p):m==="dangerouslySetInnerHTML"?Cd(a,p):m==="children"?Hn(a,p):xo(a,m,p,d)}switch(l){case"input":Vi(a,i);break;case"textarea":bd(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?tn(a,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?tn(a,!!i.multiple,i.defaultValue,!0):tn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Zn]=i}catch(_){B(e,e.return,_)}}break;case 6:if(Ae(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(v(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(_){B(e,e.return,_)}}break;case 3:if(Ae(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(_){B(e,e.return,_)}break;case 4:Ae(t,e),Oe(e);break;case 13:Ae(t,e),Oe(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(cl=V())),r&4&&od(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||m,Ae(t,e),ne=d):Ae(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(T=e,m=e.child;m!==null;){for(p=T=m;T!==null;){switch(g=T,S=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:Zt(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(_){B(r,n,_)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){sd(p);continue}}S!==null?(S.return=g,T=S):sd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Td("display",o))}catch(_){B(e,e.return,_)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(_){B(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ae(t,e),Oe(e),r&4&&od(e);break;case 21:break;default:Ae(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Hn(a,""),r.flags&=-33);var i=id(e);ko(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=id(e);To(e,l,o);break;default:throw Error(v(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vg(e,t,n){T=e,Zu(e,t,n)}function Zu(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var a=T,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Fr;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||ne;l=Fr;var d=ne;if(Fr=o,(ne=s)&&!d)for(T=a;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?dd(a):s!==null?(s.return=o,T=s):dd(a);for(;i!==null;)T=i,Zu(i,t,n),i=i.sibling;T=a,Fr=l,ne=d}ld(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,T=i):ld(e,t,n)}}function ld(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ne||$a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ys(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Kn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ne||t.flags&512&&Co(t)}catch(g){B(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function sd(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function dd(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$a(4,t)}catch(s){B(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){B(t,a,s)}}var i=t.return;try{Co(t)}catch(s){B(t,i,s)}break;case 5:var o=t.return;try{Co(t)}catch(s){B(t,o,s)}}}catch(s){B(t,t.return,s)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var Hg=Math.ceil,_a=Ze.ReactCurrentDispatcher,dl=Ze.ReactCurrentOwner,Te=Ze.ReactCurrentBatchConfig,$=0,Q=null,H=null,X=0,me=0,en=St(0),q=0,ir=null,Lt=0,Ma=0,ul=0,jn=null,de=null,cl=0,mn=1/0,He=null,ya=!1,Io=null,mt=null,jr=!1,st=null,va=0,Bn=0,Do=null,Qr=-1,Gr=0;function le(){return($&6)!==0?V():Qr!==-1?Qr:Qr=V()}function gt(e){return(e.mode&1)===0?1:($&2)!==0&&X!==0?X&-X:Dg.transition!==null?(Gr===0&&(Gr=Od()),Gr):(e=x,e!==0||(e=window.event,e=e===void 0?16:Hd(e.type)),e)}function Le(e,t,n,r){if(50<Bn)throw Bn=0,Do=null,Error(v(185));or(e,n,r),(($&2)===0||e!==Q)&&(e===Q&&(($&2)===0&&(Ma|=n),q===4&&ot(e,X)),fe(e,r),n===1&&$===0&&(t.mode&1)===0&&(mn=V()+500,Da&&bt()))}function fe(e,t){var n=e.callbackNode;Am(e,t);var r=na(e,e===Q?X:0);if(r===0)n!==null&&_s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_s(n),t===1)e.tag===0?Ig(ud.bind(null,e)):du(ud.bind(null,e)),wg(function(){($&6)===0&&bt()}),n=null;else{switch(Rd(r)){case 1:n=Oo;break;case 4:n=Nd;break;case 16:n=ta;break;case 536870912:n=zd;break;default:n=ta}n=lc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Qr=-1,Gr=0,($&6)!==0)throw Error(v(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=na(e,e===Q?X:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Sa(e,r);else{t=r;var a=$;$|=2;var i=nc();(Q!==e||X!==t)&&(He=null,mn=V()+500,At(e,t));do try{Wg();break}catch(l){tc(e,l)}while(!0);Go(),_a.current=i,$=a,H!==null?t=0:(Q=null,X=0,t=q)}if(t!==0){if(t===2&&(a=Zi(e),a!==0&&(r=a,t=Eo(e,a))),t===1)throw n=ir,At(e,0),ot(e,r),fe(e,V()),n;if(t===6)ot(e,r);else{if(a=e.current.alternate,(r&30)===0&&!Yg(a)&&(t=Sa(e,r),t===2&&(i=Zi(e),i!==0&&(r=i,t=Eo(e,i))),t===1))throw n=ir,At(e,0),ot(e,r),fe(e,V()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:kt(e,de,He);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=cl+500-V(),10<t)){if(na(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=lo(kt.bind(null,e,de,He),t);break}kt(e,de,He);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Pe(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hg(r/1960))-r,10<r){e.timeoutHandle=lo(kt.bind(null,e,de,He),r);break}kt(e,de,He);break;case 5:kt(e,de,He);break;default:throw Error(v(329))}}}return fe(e,V()),e.callbackNode===n?ec.bind(null,e):null}function Eo(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Sa(e,t),e!==2&&(t=de,de=n,t!==null&&Ao(t)),e}function Ao(e){de===null?de=e:de.push.apply(de,e)}function Yg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Ne(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~ul,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pe(t),r=1<<n;e[n]=-1,t&=~r}}function ud(e){if(($&6)!==0)throw Error(v(327));ln();var t=na(e,0);if((t&1)===0)return fe(e,V()),null;var n=Sa(e,t);if(e.tag!==0&&n===2){var r=Zi(e);r!==0&&(t=r,n=Eo(e,r))}if(n===1)throw n=ir,At(e,0),ot(e,t),fe(e,V()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,He),fe(e,V()),null}function pl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(mn=V()+500,Da&&bt())}}function Nt(e){st!==null&&st.tag===0&&($&6)===0&&ln();var t=$;$|=1;var n=Te.transition,r=x;try{if(Te.transition=null,x=1,e)return e()}finally{x=r,Te.transition=n,$=t,($&6)===0&&bt()}}function fl(){me=en.current,O(en)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(Wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&la();break;case 3:pn(),O(ce),O(re),nl();break;case 5:tl(r);break;case 4:pn();break;case 13:O(U);break;case 19:O(U);break;case 10:Xo(r.type._context);break;case 22:case 23:fl()}n=n.return}if(Q=e,H=e=ht(e.current,null),X=me=t,q=0,ir=null,ul=Ma=Lt=0,de=jn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}Dt=null}return e}function tc(e,t){do{var n=H;try{if(Go(),qr.current=ha,ga){for(var r=F.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ga=!1}if(Pt=0,K=Y=F=null,Un=!1,nr=0,dl.current=null,n===null||n.return===null){q=1,ir=t,H=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=X,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,m=l,p=m.tag;if((m.mode&1)===0&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Xs(o);if(S!==null){S.flags&=-257,Js(S,o,l,i,t),S.mode&1&&Gs(i,d,t),t=S,s=d;var b=t.updateQueue;if(b===null){var _=new Set;_.add(s),t.updateQueue=_}else b.add(s);break e}else{if((t&1)===0){Gs(i,d,t),ml();break e}s=Error(v(426))}}else if(R&&l.mode&1){var N=Xs(o);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),Js(N,o,l,i,t),Ko(fn(s,l));break e}}i=s=fn(s,l),q!==4&&(q=2),jn===null?jn=[i]:jn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ru(i,s,t);Hs(i,f);break e;case 1:l=s;var u=i.type,c=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(mt===null||!mt.has(c)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Uu(i,l,t);Hs(i,y);break e}}i=i.return}while(i!==null)}ac(n)}catch(C){t=C,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function nc(){var e=_a.current;return _a.current=ha,e===null?ha:e}function ml(){(q===0||q===3||q===2)&&(q=4),Q===null||(Lt&268435455)===0&&(Ma&268435455)===0||ot(Q,X)}function Sa(e,t){var n=$;$|=2;var r=nc();(Q!==e||X!==t)&&(He=null,At(e,t));do try{qg();break}catch(a){tc(e,a)}while(!0);if(Go(),$=n,_a.current=r,H!==null)throw Error(v(261));return Q=null,X=0,q}function qg(){for(;H!==null;)rc(H)}function Wg(){for(;H!==null&&!Sm();)rc(H)}function rc(e){var t=oc(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?ac(e):H=t,dl.current=null}function ac(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ug(n,t,me),n!==null){H=n;return}}else{if(n=Fg(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,H=null;return}}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);q===0&&(q=5)}function kt(e,t,n){var r=x,a=Te.transition;try{Te.transition=null,x=1,Kg(e,t,n,r)}finally{Te.transition=a,x=r}return null}function Kg(e,t,n,r){do ln();while(st!==null);if(($&6)!==0)throw Error(v(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($m(e,i),e===Q&&(H=Q=null,X=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||jr||(jr=!0,lc(ta,function(){return ln(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Te.transition,Te.transition=null;var o=x;x=1;var l=$;$|=4,dl.current=null,Bg(e,n),Ju(n,e),hg(io),ra=!!ao,io=ao=null,e.current=n,Vg(n,e,a),bm(),$=l,x=o,Te.transition=i}else e.current=n;if(jr&&(jr=!1,st=e,va=a),i=e.pendingLanes,i===0&&(mt=null),Tm(n.stateNode,r),fe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ya)throw ya=!1,e=Io,Io=null,e;return(va&1)!==0&&e.tag!==0&&ln(),i=e.pendingLanes,(i&1)!==0?e===Do?Bn++:(Bn=0,Do=e):Bn=0,bt(),null}function ln(){if(st!==null){var e=Rd(va),t=Te.transition,n=x;try{if(Te.transition=null,x=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,va=0,($&6)!==0)throw Error(v(331));var a=$;for($|=4,T=e.current;T!==null;){var i=T,o=i.child;if((T.flags&16)!==0){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(T=d;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Fn(8,m,i)}var p=m.child;if(p!==null)p.return=m,T=p;else for(;T!==null;){m=T;var g=m.sibling,S=m.return;if(Qu(m),m===d){T=null;break}if(g!==null){g.return=S,T=g;break}T=S}}}var b=i.alternate;if(b!==null){var _=b.child;if(_!==null){b.child=null;do{var N=_.sibling;_.sibling=null,_=N}while(_!==null)}}T=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,T=o;else e:for(;T!==null;){if(i=T,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var u=e.current;for(T=u;T!==null;){o=T;var c=o.child;if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,T=c;else e:for(o=u;T!==null;){if(l=T,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:$a(9,l)}}catch(C){B(l,l.return,C)}if(l===o){T=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}if($=a,bt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(wa,e)}catch{}r=!0}return r}finally{x=n,Te.transition=t}}return!1}function cd(e,t,n){t=fn(n,t),t=Ru(e,t,1),e=ft(e,t,1),t=le(),e!==null&&(or(e,1,t),fe(e,t))}function B(e,t,n){if(e.tag===3)cd(e,e,n);else for(;t!==null;){if(t.tag===3){cd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=Uu(t,e,1),t=ft(t,e,1),e=le(),t!==null&&(or(t,1,e),fe(t,e));break}}t=t.return}}function Qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Q===e&&(X&n)===n&&(q===4||q===3&&(X&130023424)===X&&500>V()-cl?At(e,0):ul|=n),fe(e,t)}function ic(e,t){t===0&&((e.mode&1)===0?t=1:(t=Dr,Dr<<=1,(Dr&130023424)===0&&(Dr=4194304)));var n=le();e=Xe(e,t),e!==null&&(or(e,t,n),fe(e,n))}function Gg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ic(e,n)}function Xg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),ic(e,n)}var oc;oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ue=!1,Rg(e,t,n);ue=(e.flags&131072)!==0}else ue=!1,R&&(t.flags&1048576)!==0&&uu(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var a=dn(t,re.current);on(t,n),a=al(null,t,r,e,a,n);var i=il();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,sa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Zo(t),a.updater=Aa,t.stateNode=a,a._reactInternals=t,go(t,r,e,n),t=yo(null,t,r,!0,i,n)):(t.tag=0,R&&i&&qo(t),oe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Zg(r),e=$e(r,e),a){case 0:t=_o(null,t,r,e,n);break e;case 1:t=td(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=ed(null,t,r,$e(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:$e(r,a),_o(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:$e(r,a),td(e,t,r,a,n);case 3:e:{if(Vu(t),e===null)throw Error(v(387));r=t.pendingProps,i=t.memoizedState,a=i.element,hu(e,t),fa(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=fn(Error(v(423)),t),t=nd(e,t,r,n,a);break e}else if(r!==a){a=fn(Error(v(424)),t),t=nd(e,t,r,n,a);break e}else for(ge=pt(t.stateNode.containerInfo.firstChild),he=t,R=!0,xe=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===a){t=Je(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return _u(t),e===null&&po(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,oo(r,a)?o=null:i!==null&&oo(r,i)&&(t.flags|=32),Bu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&po(t),null;case 13:return Hu(e,t,n);case 4:return el(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:$e(r,a),Zs(e,t,r,a,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,L(ca,r._currentValue),r._currentValue=o,i!==null)if(Ne(i.value,o)){if(i.children===a.children&&!ce.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ke(-1,n&-n),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),fo(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fo(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,on(t,n),a=ke(a),r=r(a),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,a=$e(r,t.pendingProps),a=$e(r.type,a),ed(e,t,r,a,n);case 15:return Fu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:$e(r,a),Kr(e,t),t.tag=1,pe(r)?(e=!0,sa(t)):e=!1,on(t,n),Ou(t,r,a),go(t,r,a,n),yo(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return ju(e,t,n)}throw Error(v(156,t.tag))};function lc(e,t){return Ld(e,t)}function Jg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Jg(e,t,n,r)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zg(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lo)return 11;if(e===No)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")gl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return $t(n.children,a,i,t);case Po:o=8,a|=8;break;case Ri:return e=Ce(12,n,t,a|2),e.elementType=Ri,e.lanes=i,e;case Ui:return e=Ce(13,n,t,a),e.elementType=Ui,e.lanes=i,e;case Fi:return e=Ce(19,n,t,a),e.elementType=Fi,e.lanes=i,e;case _d:return xa(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gd:o=10;break e;case hd:o=9;break e;case Lo:o=11;break e;case No:o=14;break e;case rt:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function $t(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=_d,e.lanes=n,e.stateNode={isHidden:!1},e}function Ni(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function zi(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function hl(e,t,n,r,a,i,o,l,s){return e=new eh(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zo(i),e}function th(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sc(e){if(!e)return yt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(pe(n))return su(e,n,t)}return t}function dc(e,t,n,r,a,i,o,l,s){return e=hl(n,r,!0,e,a,i,o,l,s),e.context=sc(null),n=e.current,r=le(),a=gt(n),i=Ke(r,a),i.callback=t??null,ft(n,i,a),e.current.lanes=a,or(e,a,r),fe(e,r),e}function Pa(e,t,n,r){var a=t.current,i=le(),o=gt(a);return n=sc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(a,t,o),e!==null&&(Le(e,a,o,i),Yr(e,a,o)),o}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _l(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function nh(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function yl(e){this._internalRoot=e}La.prototype.render=yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));Pa(e,t,null,null)};La.prototype.unmount=yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){Pa(null,e,null,null)}),t[Ge]=null}};function La(e){this._internalRoot=e}La.prototype.unstable_scheduleHydration=function(e){if(e){var t=jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Vd(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function rh(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var d=ba(o);i.call(d)}}var o=dc(t,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=o,e[Ge]=o.current,Xn(e.nodeType===8?e.parentNode:e),Nt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var d=ba(s);l.call(d)}}var s=hl(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=s,e[Ge]=s.current,Xn(e.nodeType===8?e.parentNode:e),Nt(function(){Pa(t,s,n,r)}),s}function za(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=ba(o);l.call(s)}}Pa(t,o,e,a)}else o=rh(n,t,e,a,r);return ba(o)}Ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xn(t.pendingLanes);n!==0&&(Ro(t,n|1),fe(t,V()),($&6)===0&&(mn=V()+500,bt()))}break;case 13:Nt(function(){var r=Xe(e,1);if(r!==null){var a=le();Le(r,e,1,a)}}),_l(e,1)}};Uo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=le();Le(t,e,134217728,n)}_l(e,134217728)}};Fd=function(e){if(e.tag===13){var t=gt(e),n=Xe(e,t);if(n!==null){var r=le();Le(n,e,t,r)}_l(e,t)}};jd=function(){return x};Bd=function(e,t){var n=x;try{return x=e,t()}finally{x=n}};Gi=function(e,t,n){switch(t){case"input":if(Vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ia(r);if(!a)throw Error(v(90));vd(r),Vi(r,a)}}}break;case"textarea":bd(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Ed=pl;Ad=Nt;var ah={usingClientEntryPoint:!1,Events:[sr,Kt,Ia,Id,Dd,pl]},En={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ih={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xd(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(An=__REACT_DEVTOOLS_GLOBAL_HOOK__,!An.isDisabled&&An.supportsFiber))try{wa=An.inject(ih),Fe=An}catch{}var An;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ah;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(t))throw Error(v(200));return th(e,t,null,n)};ve.createRoot=function(e,t){if(!vl(e))throw Error(v(299));var n=!1,r="",a=uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=hl(e,1,!1,null,null,n,!1,r,a),e[Ge]=t.current,Xn(e.nodeType===8?e.parentNode:e),new yl(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=xd(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Nt(e)};ve.hydrate=function(e,t,n){if(!Na(t))throw Error(v(200));return za(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!vl(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=uc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dc(t,null,e,1,n??null,a,!1,i,o),e[Ge]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new La(t)};ve.render=function(e,t,n){if(!Na(t))throw Error(v(200));return za(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!Na(e))throw Error(v(40));return e._reactRootContainer?(Nt(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ve.unstable_batchedUpdates=pl;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Na(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return za(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426"});var Oa=wt((_h,fc)=>{"use strict";function pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc)}catch(e){console.error(e)}}pc(),fc.exports=cc()});var bl=wt(Sl=>{"use strict";var mc=Oa();Sl.createRoot=mc.createRoot,Sl.hydrateRoot=mc.hydrateRoot;var yh});var Nl=Ut(_r()),Lf=Ut(Oa()),Nf=Ut(bl());var $l=Ut(_r()),Zp=Ut(Oa()),ef=Ut(bl());var D={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},ae={basic:"basic",templates:"templates"},Ra=["children","children_error","custom"],ur=["all","string","int","time","date","command"];var De=[{type:"default_main",title:"Default Main",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"Not Understand",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"Finish Miss",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"Default Search",supportsLlm:!0,hasModal:!0}];var h=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Be=()=>{let e=Date.now(),t=String(e).slice(-5);if(globalThis.crypto?.randomUUID){let n=globalThis.crypto.randomUUID().replaceAll("-","").slice(0,8);return`${t}_${e}_${n}`}return`${t}_${e}_${Math.random().toString(16).slice(2,10)}`},wl=(e={})=>{let t=!!e.llm||!!String(e.system??"").trim()||!!String(e.model??"").trim();return{id:Be(),type:String(e.type??e.actionType??""),voiceResponse:String(e.voiceResponse??""),llmEnabled:t,system:String(e.system??""),model:String(e.model??"")}},Cl=(e={})=>({id:Be(),uuid:String(e.uuid??""),displayValue:String(e.displayValue??""),mappingType:String(e.mappingType??e.mapping_type??e.actionType??e.action_type??e.type??"")}),Tl=(e={})=>({id:Be(),actionTypeComponent:String(e.actionTypeComponent??(String(e.actionType??e.mappingType??"").trim()?"custom":"children")),actionType:String(e.actionType??e.action_type??e.mappingType??e.mapping_type??""),mappingType:String(e.mappingType??e.mapping_type??e.actionType??e.action_type??""),uuid:String(e.uuid??""),displayValue:String(e.displayValue??"")}),pr=(e={})=>({id:Be(),subType:String(e.subType??e.subMappingType??""),subVoiceCommands:String(e.subVoiceCommands??"")}),cr=e=>(Array.isArray(e)?e:[]).filter(t=>t&&typeof t=="object"),Ua=e=>De.find(t=>t.type===e)??De[0],gc=(e=null)=>{let t=e??{},n=typeof t.componentDialog=="object"&&t.componentDialog?t.componentDialog:typeof t.subComponentDialog=="object"&&t.subComponentDialog?t.subComponentDialog:{};return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDialog??""),type:String(n.actionType??""),endStatus:!!n.endStatus,forwardText:!!n.forwardText,answerType:String(n.answerType??"default"),voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),responseItems:cr(n.voiceResponseArray).map(r=>wl(r)),directControlItems:cr(n.nextDirectControl).map(r=>Cl(r)),nextActionItems:cr(n.nextAction).map(r=>Tl(r))}},hc=(e=null)=>{let t=e??{},n=typeof t.directControl=="object"&&t.directControl?t.directControl:{},r=!!n.manual,a=n.subDirectControl;return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDirect??""),type:String(n.mappingType??n.actionType??""),typeData:ur.includes(String(n.valueType??n.typeData??"all"))?String(n.valueType??n.typeData??"all"):"all",voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),manual:r,subDirectControlItems:r?cr(a).map(i=>pr(i)):[],subDirectControl:r?"":String((typeof a=="string"?a:"")||n.subDirectControlArray||"")}},_c=(e=null)=>{let t=e??{};return{title:String(t.title??""),uuid:String(t.uuid??""),subDirectControlItems:cr(t.subDirectControl).map(n=>pr(n))}},kl=(e,t=null)=>{let n=t??{},r=Ua(e);return{_id:String(n._id??""),type:r.type,title:String(n.title??r.title),endStatus:!!n.endStatus,llmEnabled:r.supportsLlm?!!(n.llmEnabled??n.LLM??n.llm):!1,message:String(n.message??""),system:r.supportsLlm?String(n.system??""):"",model:r.supportsLlm?String(n.model??""):""}},yc=()=>De.reduce((e,t)=>(e[t.type]=kl(t.type),e),{}),Fa=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??"").trim(),i=String(e.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let l=(Array.isArray(e.responseItems)?e.responseItems:[]).map(p=>{let g={actionType:String(p.type??p.actionType??"").trim(),voiceResponse:String(p.voiceResponse??"").trim()};return p.llmEnabled&&(g.llm=!0,g.system=String(p.system??"").trim(),g.model=String(p.model??"").trim()),g}),s=(Array.isArray(e.directControlItems)?e.directControlItems:[]).map(p=>({uuid:String(p.uuid??"").trim()})).filter(p=>p.uuid),d=(Array.isArray(e.nextActionItems)?e.nextActionItems:[]).map(p=>({actionTypeComponent:Ra.includes(String(p.actionTypeComponent??"").trim())?String(p.actionTypeComponent??"").trim():"children",actionType:String(p.actionType??p.mappingType??"").trim(),uuid:String(p.uuid??"").trim()})).filter(p=>p.uuid).map(p=>p.actionTypeComponent==="custom"?p:{...p,actionType:""}),m={endStatus:!!e.endStatus,actionType:r,forwardText:!!e.forwardText,answerType:i,voiceCommands:String(e.voiceCommands??"").split(";").map(p=>p.trim()).filter(p=>p),nextDirectControl:s,voiceResponseArray:l,nextAction:d};return{title:t,uuid:n,componentDialog:m,subComponentDialog:m}},ja=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??e.mappingType??"").trim(),a=ur.includes(String(e.typeData??"all"))?String(e.typeData??"all"):"all",i=!!e.manual;if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let o={title:t,uuid:n,directControl:{mappingType:r,valueType:a}};if(a==="command"){let l=String(e.voiceCommands??"").trim();o.directControl.voiceCommands=l?l.split(";").map(s=>s.trim()).filter(s=>s):null,o.directControl.manual=i,i?o.directControl.subDirectControl=(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((s,d)=>{let m=String(s.subType??s.subMappingType??"").trim(),p=String(s.subVoiceCommands??"").trim();return{id:Number(s.id)||d+1,subMappingType:m||null,title:null,subVoiceCommands:p||null}}).filter(s=>s.subMappingType||s.subVoiceCommands):o.directControl.subDirectControl=String(e.subDirectControl??"").trim()}return o},vc=(e={})=>{let t=String(e.title??"").trim();if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let n=String(e.uuid??"").trim();if(n||(n=Be()),!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title:t,uuid:n,subDirectControl:(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((r,a)=>{let i=String(r.subType??r.subMappingType??"").trim(),o=String(r.subVoiceCommands??"").trim();return{id:Number(r.id)||a+1,subMappingType:i||null,title:null,subVoiceCommands:o||null}}).filter(r=>r.subMappingType||r.subVoiceCommands)}},Sc=(e,t={})=>{let n=Ua(e),r={actionType:n.type,title:String(t.title??n.title).trim()||n.title,endStatus:!!t.endStatus,message:String(t.message??"").trim()||null};return n.supportsLlm&&(r.LLM=!!t.llmEnabled,r.llm=r.LLM,r.system=r.LLM&&String(t.system??"").trim()||null,r.model=r.LLM&&String(t.model??"").trim()||null),r};var Rt=(e,t)=>{let n=t===D.secondary,r=e._pageByTab[t]||1,a=e._totalByTab[t]||0,i=e._totalPagesByTab[t]||1,o=n?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",l="/api/cms/commands?page=1&pageSize=20",s=Math.max(1,i||Math.ceil((a||1)/20)),d=e._buildPaginationItems(r,s),m=e._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._commands.length?e._commands.map(p=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit" data-command-id="${h(p._id)}">
              <span class="command-item-title">${h(p.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${h(p.componentDialog?.actionType||p.subComponentDialog?.actionType||p.componentDialog?.type||p.subComponentDialog?.type||"actionType: -")}</span>
                <span>${h(p.uuid||p.uuidDialog||"uuid: -")}</span>
                <span>${p.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="command"
              data-item-id="${h(p._id)}"
              data-item-title="${h(p.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
              data-item-collection="${n?"sub-commands":"commands"}"
              data-item-status="${p.status?"true":"false"}"
              aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
              title="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
            >...</button>
          </div>
        `).join(""):'<div class="empty">\u041A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
    <section class="hero-card">
      <h2>${o}</h2>
      <p>\u0417\u0430\u043F\u0440\u043E\u0441: <code>${l}</code></p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload" ${e._loading?"disabled":""}>${e._loading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        <button type="button" class="primary" data-action="create">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
      </div>
    </section>
    <section class="help-card command-list">
      ${m}
      <div class="command-pagination">
        <button type="button" class="ghost" data-action="prev" ${r<=1||e._loading?"disabled":""}>&lt;</button>
        <div class="pagination-pages">
          ${d.map(p=>p==="ellipsis"?'<span class="pagination-ellipsis">...</span>':`<button type="button" class="ghost pagination-page ${p===r?"active":""}" data-action="goto-page" data-page="${p}" ${e._loading?"disabled":""}>${p}</button>`).join("")}
        </div>
        <button type="button" class="ghost" data-action="next" ${r>=s||e._loading?"disabled":""}>&gt;</button>
      </div>
    </section>
  `};var Ba=e=>Rt(e,D.primary);var Va=e=>Rt(e,D.secondary);var Ha=(e,t)=>`
  <section class="hero-card">
    <h3>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</h3>
    <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-direct" ${e._directLoading?"disabled":""}>${e._directLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      <button type="button" class="primary" data-action="create-direct">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
    </div>
    ${e._directError?`<div class="status error">${h(e._directError)}</div>`:""}
  </section>
  <section class="help-card command-list">
    ${t}
  </section>
`,Ya=(e,t)=>`
  <section class="hero-card">
    <h3>\u0428\u0430\u0431\u043B\u043E\u043D\u044B</h3>
    <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430\u043C\u0438 subDirectControl.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-template" ${e._templateLoading?"disabled":""}>${e._templateLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      <button type="button" class="primary" data-action="create-template">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
    </div>
    ${e._templateError?`<div class="status error">${h(e._templateError)}</div>`:""}
  </section>
  <section class="help-card command-list">
    ${t}
  </section>
`,qa=e=>{let t=e._directLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._directCommands.length?e._directCommands.map(r=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit-direct" data-direct-id="${h(r._id)}">
              <span class="command-item-title">${h(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${h(r.directControl?.mappingType||r.directControl?.actionType||r.directControl?.type||"actionType: -")}</span>
                <span>${h(r.uuid||r.uuidDirect||"uuid: -")}</span>
                <span>${h(r.directControl?.valueType||r.directControl?.typeData||"typeData: -")}</span>
                <span>${r.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="direct"
              data-item-id="${h(r._id)}"
              data-item-title="${h(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
              data-item-status="${r.status?"true":"false"}"
              aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
              title="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
            >...</button>
          </div>
        `).join(""):'<div class="empty">Direct-\u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>',n=e._templateLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432...</div>':e._templateCommands.length?e._templateCommands.map(r=>`
          <button type="button" class="command-item-main" data-action="edit-template" data-template-id="${h(r._id)}">
            <span class="command-item-title">${h(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
            <span class="command-item-meta">
              <span>subDirectControl: ${Array.isArray(r.subDirectControl)?r.subDirectControl.length:0}</span>
            </span>
          </button>
        `).join(""):'<div class="empty">\u0428\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
    <section class="hero-card">
      <h2>\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</h2>
      <div class="inner-subtabs">
        <button type="button" class="subtab-button ${e._directSubtab===ae.basic?"active":""}" data-direct-subtab="${ae.basic}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</button>
        <button type="button" class="subtab-button ${e._directSubtab===ae.templates?"active":""}" data-direct-subtab="${ae.templates}">\u0428\u0430\u0431\u043B\u043E\u043D\u044B</button>
      </div>
    </section>
    ${e._directSubtab===ae.basic?Ha(e,t):Ya(e,n)}
  `};var Wa=e=>{let t=De.map((n,r)=>{let a=e._defaultsByType[n.type]??e._newDefaultsDraft(n.type),i=String(a.title||n.title||n.type).trim(),o=[`actionType: ${n.type}`,`endStatus: ${a.endStatus?"on":"off"}`];return n.supportsLlm&&o.push(`LLM: ${a.llmEnabled?"on":"off"}`),`
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${h(n.type)}" ${e._defaultsLoading?"disabled":""}>
        <span class="command-item-title">${r+1}. ${h(i)}</span>
        <span class="command-item-meta">
          ${o.map(l=>`<span>${h(l)}</span>`).join("")}
        </span>
      </button>
    `}).join("");return`
    <section class="hero-card">
      <h2>\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</h2>
      <p>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438, \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload-defaults" ${e._defaultsLoading?"disabled":""}>${e._defaultsLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      </div>
      ${e._defaultsError?`<div class="status error">${h(e._defaultsError)}</div>`:""}
    </section>
    <section class="help-card command-list">
      ${t}
    </section>
  `};var Il=(e,t)=>`
  <section class="hero-card">
    <h2>${h(e)}</h2>
    <p>${h(t)}</p>
  </section>
  <section class="help-card">
    <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
  </section>
`;var bc=e=>e._tab===D.primary?Ba(e):e._tab===D.secondary?Va(e):e._tab===D.direct?qa(e):Wa(e);var wc=e=>{e._addModalBackdrop(),e._modalOpen=!0,e._modalMode="create",e._editingId="",e._draft=e._newDraft(),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render()},Cc=(e,t)=>{e._addModalBackdrop();let n=e._commands.find(r=>String(r._id??"")===String(t??""));if(!n){e._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._modalOpen=!0,e._modalMode="edit",e._editingId=String(n._id??""),e._editingStatus=!!n.status,e._draft=e._newDraft(n),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render(),e._hydrateDirectControlTitles(),e._hydrateNextActionTitles()},Tc=e=>{e._modalSaving||(e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._draft=e._newDraft(),e._render())},kc=async e=>{if(!e._apiUrl("")){e._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildPayload()}catch(l){e._error=l?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",e._render();return}let r=e._modalMode==="edit"&&e._editingId;!r&&!e._isCurrentUserAdmin()&&(n.account=e._getCurrentUserId());let a=e._tab===D.secondary?"sub-commands":"commands",i=r?e._apiUrl(`/api/cms/${a}/${encodeURIComponent(e._editingId)}`):e._apiUrl(`/api/cms/${a}`),o=r?"PUT":"POST";e._modalSaving=!0,e._error="",e._render();try{let l=await fetch(i,{method:o,headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${l.status}`);e._status=r?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft(),await e._loadPage(e._pageByTab[e._tab]||1)}catch(l){e._error=l?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",e._render()}finally{e._modalSaving=!1,e._render()}},Ic=async e=>{if(!e._editingId||!confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439?"))return;let t=e._tab===D.secondary?"sub-commands":"commands";e._modalSaving=!0,e._error="",e._render();try{await e._deleteItem(t,e._editingId),e._commands=e._commands.filter(n=>String(n._id??"")!==String(e._editingId)),e._status="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft()}catch(n){e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."}finally{e._modalSaving=!1,e._render()}};var Dc=e=>{e._updateDraft("uuid",Be()),e._render()},Ec=e=>{let t=Array.isArray(e._draft.responseItems)?e._draft.responseItems:[],n=wl();e._draft={...e._draft,responseItems:[...t,n]},e._openResponseItemIds.add(n.id),e._render()},Ac=(e,t)=>{let n=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,responseItems:n},e._openResponseItemIds=new Set([...e._openResponseItemIds].filter(r=>e._draft.responseItems.some(a=>a.id===r))),e._render()},$c=(e,t,n,r)=>{let a=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map(i=>i.id!==t?i:{...i,[n]:r});e._draft={...e._draft,responseItems:a}},Mc=(e,t)=>{e._openResponseItemIds.has(t)?e._openResponseItemIds.delete(t):e._openResponseItemIds.add(t),e._render()},xc=e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[],n=Cl();e._draft={...e._draft,directControlItems:[...t,n]},e._openDirectControlItemIds.add(n.id),e._render()},Pc=(e,t)=>{let n=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,directControlItems:n},e._openDirectControlItemIds=new Set([...e._openDirectControlItemIds].filter(r=>n.some(a=>a.id===r))),e._render()},Lc=(e,t,n,r=!0)=>{let a=String(t??"").trim(),i=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(o=>{if(o.id!==a)return o;let l=String(n??""),s=l.trim(),d=String(o.uuid??"").trim();return{...o,uuid:l,displayValue:s&&s===d?o.displayValue:"",mappingType:s&&s===d?o.mappingType:""}});e._draft={...e._draft,directControlItems:i},r&&n.length>0&&e._debouncedPerformUuidSearch(n,"directControl",a)},Nc=(e,t)=>{e._openDirectControlItemIds.has(t)?e._openDirectControlItemIds.delete(t):e._openDirectControlItemIds.add(t),e._render()},zc=e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[],n=Tl();e._draft={...e._draft,nextActionItems:[...t,n]},e._openNextActionItemIds.add(n.id),e._render()},Oc=(e,t)=>{let n=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,nextActionItems:n},e._openNextActionItemIds=new Set([...e._openNextActionItemIds].filter(r=>n.some(a=>a.id===r))),e._render()},Rc=(e,t,n,r,a=!0,i=!0)=>{let o=String(t??"").trim(),l=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(s=>{if(s.id!==o)return s;if(n==="uuid"){let d=String(r??""),m=d.trim(),p=String(s.uuid??"").trim();return{...s,uuid:d,displayValue:m&&m===p?s.displayValue:"",mappingType:m&&m===p?s.mappingType:"",actionType:m&&m===p?s.actionType:""}}if(n==="actionTypeComponent"){let d=String(r??"").trim();return d==="custom"?{...s,actionTypeComponent:d}:{...s,actionTypeComponent:d,actionType:""}}return{...s,[n]:r}});e._draft={...e._draft,nextActionItems:l},(a||n==="actionTypeComponent")&&e._render(),i&&n==="uuid"&&r.length>0&&e._debouncedPerformUuidSearch(r,"nextAction",o)},Uc=(e,t)=>{e._openNextActionItemIds.has(t)?e._openNextActionItemIds.delete(t):e._openNextActionItemIds.add(t),e._render()};var Fc=(e,{kind:t,id:n,title:r,collection:a,status:i})=>{n&&(e._addModalBackdrop(),e._itemActionsModalOpen=!0,e._itemActionsSaving=!1,e._itemActionsKind=String(t??""),e._itemActionsId=String(n??""),e._itemActionsTitle=String(r??"").trim(),e._itemActionsCollection=String(a??""),e._itemActionsStatus=!!i,e._render())},jc=e=>{e._itemActionsSaving||(e._removeModalBackdrop(),e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsKind="",e._itemActionsId="",e._itemActionsTitle="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._render())},Bc=async(e,t,n,r)=>{let a=e._commands.find(d=>String(d._id??"")===String(t??""));if(!a)throw new Error("\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let i=e._newDraft(a),o=Fa(i);n==="sub-commands"?delete o.componentDialog:delete o.subComponentDialog,o.status=!!r;let l=e._apiUrl(`/api/cms/${encodeURIComponent(n)}/${encodeURIComponent(t)}`),s=await fetch(l,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(o)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430: HTTP ${s.status}`);e._commands=e._commands.map(d=>String(d._id??"")===String(t??"")?{...d,status:!!r}:d),String(e._editingId??"")===String(t??"")&&(e._editingStatus=!!r)},Vc=async(e,t,n)=>{let r=e._directCommands.find(s=>String(s._id??"")===String(t??""));if(!r)throw new Error("Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let a=e._newDirectDraft(r),i={...ja(a),status:!!n},o=e._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(t)}`),l=await fetch(o,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(i)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);e._directCommands=e._directCommands.map(s=>String(s._id??"")===String(t??"")?{...s,status:!!n}:s),String(e._directEditingId??"")===String(t??"")&&(e._directEditingStatus=!!n)},Hc=async e=>{if(e._itemActionsSaving||!e._itemActionsId)return;let t=!e._itemActionsStatus;e._itemActionsSaving=!0,e._error="",e._directError="",e._render();try{if(e._itemActionsKind==="command")await e._updateCommandStatusById(e._itemActionsId,e._itemActionsCollection||"commands",t);else if(e._itemActionsKind==="direct")await e._updateDirectStatusById(e._itemActionsId,t);else throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.");e._itemActionsStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442.",e._itemActionsSaving=!1,e._closeItemActionsModal()}catch(n){e._itemActionsKind==="direct"?e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.":e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.",e._itemActionsSaving=!1,e._render()}},Yc=async e=>{if(!(e._modalSaving||!e._editingId)){e._modalSaving=!0,e._error="",e._render();try{let t=!e._editingStatus,n=e._tab===D.secondary?"sub-commands":"commands";await e._updateCommandStatusById(e._editingId,n,t),e._editingStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442."}catch(t){e._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."}finally{e._modalSaving=!1,e._render()}}};var qc=(e,t)=>{e._directSubtab=t,e._directError="",t===ae.basic&&!e._directCommands.length&&!e._directLoading?e._loadDirectCommands():t===ae.templates&&!e._templateCommands.length&&!e._templateLoading&&e._loadTemplateCommands(),e._render()},Wc=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls?page=1&pageSize="+20);if(!t){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._directLoading=!0,e._directError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),a=Array.isArray(r.data)?r.data:[];e._directCommands=a,e._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${a.length}.`}catch(n){e._directCommands=[],e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directLoading=!1,e._render()}},Kc=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls-sample?page=1&pageSize="+20);if(!t){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._templateLoading=!0,e._templateError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432: HTTP ${n.status}`);let r=await n.json(),a=Array.isArray(r.data)?r.data:[];e._templateCommands=a,e._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${a.length}.`}catch(n){e._templateCommands=[],e._templateError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B."}finally{e._templateLoading=!1,e._render()}},Qc=e=>{e._directLoading||(e._directCommands=[],e._loadDirectCommands())},Gc=e=>{e._templateLoading||(e._templateCommands=[],e._loadTemplateCommands())},Xc=e=>{e._addModalBackdrop(),e._directModalOpen=!0,e._directModalMode="create",e._directEditingId="",e._directDraft=e._newDirectDraft(),e._openDirectSubControlItemIds=new Set,e._directError="",e._render()},Jc=(e,t)=>{e._addModalBackdrop();let n=e._directCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._directModalOpen=!0,e._directModalMode="edit",e._directEditingId=String(n._id??""),e._directEditingStatus=!!n.status,e._directDraft=e._newDirectDraft(n),e._openDirectSubControlItemIds=new Set,e._directError="",e._render(),e._hydrateSelectedSubDirectControlSample()},Zc=e=>{e._directModalSaving||(e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._subDirectControlSampleOptions=[],e._render())},ep=(e,t,n)=>{e._directDraft={...e._directDraft,[t]:n}},tp=async e=>{let t=e._directDraft.typeData==="command",n=!!e._directDraft.manual,r=String(e._directDraft.subDirectControl??"").trim();if(!t||n||!r||(Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]).some(s=>String(s?.uuid??"").trim()===r))return;let o=(await e._searchUuid(r,["sub-direct-controls-sample"])).find(s=>String(s?.uuid??"").trim()===r);if(!o)return;let l={...o,uuid:String(o.uuid??"").trim(),title:String(o.title??"").trim()};e._subDirectControlSampleOptions=[l,...Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]],e._render()},np=e=>{e._updateDirectDraft("uuid",Be()),e._render()},rp=e=>{e._updateTemplateDraft("uuid",Be()),e._render()},ap=e=>{let t=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],n=pr();e._directDraft={...e._directDraft,subDirectControlItems:[...t,n]},e._openDirectSubControlItemIds.add(n.id),e._render()},ip=(e,t)=>{let n=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._directDraft={...e._directDraft,subDirectControlItems:n},e._openDirectSubControlItemIds=new Set([...e._openDirectSubControlItemIds].filter(r=>n.some(a=>a.id===r))),e._render()},op=(e,t)=>{e._openDirectSubControlItemIds.has(t)?e._openDirectSubControlItemIds.delete(t):e._openDirectSubControlItemIds.add(t),e._render()},lp=(e,t,n,r)=>{let a=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).map(i=>i.id===t?{...i,[n]:r}:i);e._directDraft={...e._directDraft,subDirectControlItems:a}},sp=async e=>{if(!e._searchLoading){e._searchLoading=!0,e._searchActiveType="subDirectControlSample",e._searchActiveItemId=null,e._render();try{let t=await e._searchUuid("",["sub-direct-controls-sample"]);e._subDirectControlSampleOptions=t}catch{e._subDirectControlSampleOptions=[]}finally{e._searchLoading=!1,e._render()}}},dp=async e=>{if(!(e._directModalSaving||!e._directEditingId)){e._directModalSaving=!0,e._directError="",e._render();try{let t=!e._directEditingStatus;await e._updateDirectStatusById(e._directEditingId,t),e._directEditingStatus=t,e._status=t?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043A\u0440\u044B\u0442\u0430."}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directModalSaving=!1,e._render()}}},up=async e=>{if(!e._apiUrl("")){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildDirectPayload()}catch(r){e._directError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._directModalSaving=!0,e._directError="",e._render();try{let r=e._directModalMode==="edit"&&e._directEditingId,a="sub-direct-controls",i=r?e._apiUrl(`/api/cms/${a}/${encodeURIComponent(e._directEditingId)}`):e._apiUrl(`/api/cms/${a}`),l=await fetch(i,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._directCommands=e._directCommands.map(m=>String(m._id??"")===String(e._directEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._directEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??n.uuidDirect??Date.now());e._directCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._directCommands]}await e._loadDirectCommands(),e._status=r?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(r){e._directError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}},cp=async e=>{if(e._directEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443?")){e._directModalSaving=!0,e._directError="",e._render();try{await e._deleteItem("sub-direct-controls",e._directEditingId),e._directCommands=e._directCommands.filter(t=>String(t._id??"")!==String(e._directEditingId)),e._status="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}}},pp=e=>{e._addModalBackdrop(),e._templateModalOpen=!0,e._templateModalMode="create",e._templateEditingId="",e._templateDraft=e._newTemplateDraft(),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},fp=(e,t)=>{e._addModalBackdrop();let n=e._templateCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",e._render();return}e._templateModalOpen=!0,e._templateModalMode="edit",e._templateEditingId=String(n._id??""),e._templateDraft=e._newTemplateDraft(n),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},mp=e=>{e._templateModalSaving||(e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._render())},gp=(e,t,n)=>{e._templateDraft={...e._templateDraft,[t]:n}},hp=e=>{let t=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[],n=pr();e._templateDraft={...e._templateDraft,subDirectControlItems:[...t,n]},e._openTemplateSubControlItemIds.add(n.id),e._render()},_p=(e,t)=>{let n=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._templateDraft={...e._templateDraft,subDirectControlItems:n},e._openTemplateSubControlItemIds=new Set([...e._openTemplateSubControlItemIds].filter(r=>n.some(a=>a.id===r))),e._render()},yp=(e,t)=>{e._openTemplateSubControlItemIds.has(t)?e._openTemplateSubControlItemIds.delete(t):e._openTemplateSubControlItemIds.add(t),e._render()},vp=(e,t,n,r)=>{let a=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).map(i=>i.id===t?{...i,[n]:r}:i);e._templateDraft={...e._templateDraft,subDirectControlItems:a}},Sp=async e=>{if(!e._apiUrl("")){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildTemplatePayload()}catch(r){e._templateError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",e._render();return}e._templateModalSaving=!0,e._templateError="",e._render();try{let r=e._templateModalMode==="edit"&&e._templateEditingId,a="sub-direct-controls-sample",i=r?e._apiUrl(`/api/cms/${a}/${encodeURIComponent(e._templateEditingId)}`):e._apiUrl(`/api/cms/${a}`),l=await fetch(i,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._templateCommands=e._templateCommands.map(m=>String(m._id??"")===String(e._templateEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._templateEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??Date.now());e._templateCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._templateCommands]}await e._loadTemplateCommands(),e._status=r?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(r){e._templateError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}},bp=async e=>{if(e._templateEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D?")){e._templateModalSaving=!0,e._templateError="",e._render();try{await e._deleteItem("sub-direct-controls-sample",e._templateEditingId),e._templateCommands=e._templateCommands.filter(t=>String(t._id??"")!==String(e._templateEditingId)),e._status="\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(t){e._templateError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}}};var Dl=e=>String(e?.title??e?.name??"").trim(),El=e=>String(e?.mappingType??e?.mapping_type??e?.actionType??e?.action_type??e?.type??"").trim(),wp=async(e,t,n,r=null)=>{if(!t||t.length===0){e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render();return}e._searchActiveItemId=r,e._searchActiveType=n,e._searchLoading=!0;try{let a=[];n==="directControl"?a=["sub-direct-controls"]:n==="nextAction"?a=["sub-commands","commands"]:n==="subDirectControlSample"&&(a=["sub-direct-controls-sample"]);let i=await e._searchUuid(t,a);if(e._searchResults=i,n==="directControl"&&r){let l=String(t??"").trim().toLowerCase(),s=i.find(d=>String(d?.uuid??"").trim().toLowerCase()===l)||(i.length===1?i[0]:null);if(s&&(s?.title||s?.mappingType||s?.actionType||s?.type||s?.uuid)){let d=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(m=>m.id===r?{...m,displayValue:Dl(s)||String(m.displayValue??""),mappingType:El(s)}:m);e._draft={...e._draft,directControlItems:d}}}}catch{e._searchResults=[]}finally{e._searchLoading=!1,e._render()}},Cp=(e,t,n,r=null)=>{e._searchDebounceTimer&&clearTimeout(e._searchDebounceTimer),e._searchDebounceTimer=setTimeout(()=>{e._performUuidSearch(t,n,r)},300)},Tp=(e,t,n)=>{let r=String(t??"").trim(),a=e._searchActiveType;if(a==="directControl"){let i=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(o=>o.id===r?{...o,uuid:String(n.uuid??""),displayValue:Dl(n),mappingType:El(n)}:o);e._draft={...e._draft,directControlItems:i}}else if(a==="nextAction"){let i=El(n);e._updateNextActionItem(r,"displayValue",Dl(n)),e._updateNextActionItem(r,"mappingType",i),e._updateNextActionItem(r,"actionType",i);let o=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(l=>l.id===r?{...l,uuid:n.uuid}:l);e._draft={...e._draft,nextActionItems:o}}e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render()},kp=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)return[];try{let a=Array.isArray(n)?n.join(","):String(n),i=`${r}/api/cms/search?collections=${encodeURIComponent(a)}&text=${encodeURIComponent(t)}`,o=await fetch(i,{method:"GET",headers:e._apiHeaders(!1)});if(!o.ok)return[];let l=await o.json();return Array.isArray(l.data)?l.data:Array.isArray(l)?l:[]}catch{return[]}},Ip=async(e,t,n)=>{let r=String(t??"").trim();if(!r)return"";let a=await e._searchUuid(r,n),i=a.find(o=>String(o?.uuid??"").trim()===r);return String(i?.title??a[0]?.title??"").trim()},Dp=async e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let a=String(r.uuid??"").trim(),i=String(r.displayValue??"").trim(),o=String(r.mappingType??"").trim();if(!a||i&&o)return r;let l=await e._searchUuid(a,["sub-direct-controls"]),s=l.find(p=>String(p?.uuid??"").trim()===a)||l[0]||null,d=String(s?.title??""),m=String(s?.mappingType??s?.mapping_type??s?.actionType??s?.action_type??s?.type??"").trim();return{...r,displayValue:i||d,mappingType:o||m}}));e._draft={...e._draft,directControlItems:n},e._render()},Ep=async e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let a=String(r.uuid??"").trim(),i=String(r.displayValue??"").trim();if(!a||i)return r;let o=await e._resolveTitleByUuid(a,["sub-commands","commands"]);return{...r,displayValue:o}}));e._draft={...e._draft,nextActionItems:n},e._render()},Ap=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)throw new Error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.");let a=`${r}/api/cms/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,i=await fetch(a,{method:"DELETE",headers:e._apiHeaders(!0)});if(!i.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F: HTTP ${i.status}`)};var $p=async e=>{let t=De.map(r=>r.type).join(","),n=e._apiUrl(`/api/cms/search?actionType=${encodeURIComponent(t)}&collections=settings-dialog`);if(!n){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._defaultsLoading=!0,e._defaultsError="",e._render();try{let r=await fetch(n,{method:"GET",headers:e._apiHeaders(!1)});if(!r.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${r.status}`);let a=await r.json(),i=Array.isArray(a?.data)?a.data:Array.isArray(a)?a:[],o=e._newDefaultsState(),l=new Set,s=De.map(m=>m.type),d=(m,p)=>{let g=String(m?.actionType??m?.componentDialog?.actionType??"").trim();if(g&&o[g]&&!l.has(g))return g;let S=De.find(_=>String(_.title).trim()===String(m?.title??"").trim()&&!l.has(_.type));if(S?.type&&o[S.type])return S.type;let b=s[p];return b&&o[b]&&!l.has(b)?b:""};i.forEach((m,p)=>{let g=d(m,p);g&&(l.add(g),o[g]=e._newDefaultsDraft(g,m))}),e._defaultsByType=o,e._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}catch(r){e._defaultsError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._defaultsLoading=!1,e._render()}},Mp=(e,t)=>{let n=e._defaultConfig(t);e._addModalBackdrop(),e._defaultsActiveType=n.type,e._defaultsActiveId=String(e._defaultsByType[n.type]?._id??""),e._defaultsModalOpen=!0,e._defaultsError="",e._render()},xp=e=>{e._defaultsModalSaving||(e._removeModalBackdrop(),e._defaultsModalOpen=!1,e._render())},Pp=(e,t,n)=>{let r=e._defaultsActiveType,a=e._defaultsByType[r]??e._newDefaultsDraft(r);e._defaultsByType={...e._defaultsByType,[r]:{...a,[t]:n}}},Lp=async(e,t,n=!1)=>{let r=e._defaultConfig(t);if(e._defaultsActiveType=r.type,e._defaultsActiveId=String(e._defaultsByType[r.type]?._id??e._defaultsActiveId??""),!e._apiUrl("")){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let i;try{i=e._buildDefaultsPayload()}catch(o){e._defaultsError=o?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._defaultsModalSaving=n,e._defaultsLoading=!n,e._defaultsError="",e._render();try{let o=!!e._defaultsActiveId,l="settings-dialog",s=o?e._apiUrl(`/api/cms/${l}/${encodeURIComponent(e._defaultsActiveId)}`):e._apiUrl(`/api/cms/${l}`),m=await fetch(s,{method:o?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(i)});if(!m.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${m.status}`);let p=await m.json().catch(()=>null),g=p?.data&&typeof p.data=="object"?p.data:p&&typeof p=="object"?p:null,S=e._defaultsActiveType,b=e._defaultsByType[S]??e._newDefaultsDraft(S),_=String(g?._id??b._id??e._defaultsActiveId??"");e._defaultsByType={...e._defaultsByType,[S]:{...b,...g&&typeof g=="object"?g:i,_id:_}},e._defaultsActiveId=_,await e._reloadDefaultsCommands(),e._status=o?"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",n&&(e._removeModalBackdrop(),e._defaultsModalOpen=!1)}catch(o){e._defaultsError=o?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._defaultsModalSaving=!1,e._defaultsLoading=!1,e._render()}},Np=async e=>{await e._saveDefaultsType(e._defaultsActiveType,!0)};var zp=(e,t,n)=>{t.querySelectorAll("[data-field]").forEach(r=>{let a=r.dataset.field,i=o=>{let l=r.type==="checkbox"?o.currentTarget.checked:o.currentTarget.value;e._updateDraft(a,l)};n(r,"input",i),n(r,"change",i)}),t.querySelectorAll("[data-direct-field]").forEach(r=>{let a=r.dataset.directField,i=o=>{let l=r.type==="checkbox"?o.currentTarget.checked:o.currentTarget.value;e._updateDirectDraft(a,l),a==="typeData"&&(o.currentTarget.value!=="command"?(e._updateDirectDraft("manual",!1),e._updateDirectDraft("voiceCommands","")):(e._searchResults=[],e._searchActiveType=null)),a==="subDirectControl"&&l.length>0&&e._performUuidSearch(l,"subDirectControlSample"),(r.type==="checkbox"||r.tagName==="SELECT")&&e._render()};n(r,"input",i),n(r,"change",i),a==="subDirectControl"&&(n(r,"focus",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}),n(r,"click",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}))}),t.querySelectorAll("[data-template-field]").forEach(r=>{let a=r.dataset.templateField,i=o=>e._updateTemplateDraft(a,o.currentTarget.value);n(r,"input",i),n(r,"change",i)}),t.querySelectorAll("[data-defaults-field]").forEach(r=>{let a=r.dataset.defaultsField,i=o=>{let l=r.type==="checkbox"?o.currentTarget.checked:o.currentTarget.value;e._updateDefaultsDraft(a,l);let s=e._defaultConfig(e._defaultsActiveType);a==="llmEnabled"&&r.type==="checkbox"&&s.supportsLlm&&e._render()};n(r,"input",i),(r.type==="checkbox"||r.tagName==="SELECT")&&n(r,"change",i)}),t.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(r=>{let a=r.dataset.responseItemId,i=r.dataset.responseItemField,o=l=>{let s=r.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;e._updateVoiceResponseItem(a,i,s),r.type==="checkbox"&&e._render()};n(r,"input",o),r.type==="checkbox"&&n(r,"change",o)}),t.querySelectorAll("[data-direct-control-item-id]").forEach(r=>{let a=r.dataset.directControlItemId;r.tagName==="INPUT"||r.tagName==="TEXTAREA"?(n(r,"input",o=>e._updateDirectControlItem(a,o.currentTarget.value,!1)),n(r,"change",o=>e._updateDirectControlItem(a,o.currentTarget.value,!0))):(n(r,"input",o=>e._updateDirectControlItem(a,o.currentTarget.value,!0)),n(r,"change",o=>e._updateDirectControlItem(a,o.currentTarget.value,!0)))}),t.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(r=>{let a=r.dataset.nextActionItemId,i=r.dataset.nextActionItemField;if(r.tagName==="INPUT"||r.tagName==="TEXTAREA")n(r,"input",l=>e._updateNextActionItem(a,i,l.currentTarget.value,!1,!1)),n(r,"change",l=>e._updateNextActionItem(a,i,l.currentTarget.value,!0,!0));else{let l=s=>e._updateNextActionItem(a,i,s.currentTarget.value,!0,!0);n(r,"input",l),n(r,"change",l)}}),t.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(r=>{let a=r.dataset.directSubControlItemId,i=r.dataset.directSubControlItemField,o=l=>e._updateDirectSubControlItem(a,i,l.currentTarget.value);n(r,"input",o),n(r,"change",o)}),t.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(r=>{let a=r.dataset.templateSubControlItemId,i=r.dataset.templateSubControlItemField,o=l=>e._updateTemplateSubControlItem(a,i,l.currentTarget.value);n(r,"input",o),n(r,"change",o)})};var Op=(e,t,n)=>{n(t.querySelector('[data-action="generate-uuid"]'),"click",()=>e._refreshUuid()),n(t.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>e._refreshDirectUuid()),n(t.querySelector('[data-action="generate-template-uuid"]'),"click",()=>e._refreshTemplateUuid()),n(t.querySelector('[data-action="add-voice-response-item"]'),"click",()=>e._addVoiceResponseItem()),n(t.querySelector('[data-action="add-direct-control-item"]'),"click",()=>e._addDirectControlItem()),n(t.querySelector('[data-action="add-next-action-item"]'),"click",()=>e._addNextActionItem()),n(t.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>e._addDirectSubControlItem()),n(t.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>e._addTemplateSubControlItem()),t.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(r=>{n(r,"click",()=>e._removeVoiceResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="remove-next-action-item"]').forEach(r=>{n(r,"click",()=>e._removeNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(r=>{n(r,"click",()=>e._toggleNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-response-item"]').forEach(r=>{n(r,"click",()=>e._toggleResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="open-item-actions"]').forEach(r=>{n(r,"click",a=>{a.stopPropagation(),e._openItemActionsModal({kind:r.dataset.itemKind,id:r.dataset.itemId,title:r.dataset.itemTitle,collection:r.dataset.itemCollection,status:String(r.dataset.itemStatus??"").toLowerCase()==="true"})})})};var Rp=(e,t,n)=>{t.querySelectorAll('[data-action="close"]').forEach(r=>{n(r,"click",()=>e._closeModal())}),t.querySelectorAll('[data-action="close-direct"]').forEach(r=>{n(r,"click",()=>e._closeDirectModal())}),t.querySelectorAll('[data-action="close-template"]').forEach(r=>{n(r,"click",()=>e._closeTemplateModal())}),t.querySelectorAll('[data-action="close-defaults"]').forEach(r=>{n(r,"click",()=>e._closeDefaultsModal())}),t.querySelectorAll('[data-action="close-item-actions"]').forEach(r=>{n(r,"click",()=>e._closeItemActionsModal())}),n(t.querySelector('[data-action="save"]'),"click",()=>e._saveModal()),n(t.querySelector('[data-action="save-direct"]'),"click",()=>e._saveDirectModal()),n(t.querySelector('[data-action="save-template"]'),"click",()=>e._saveTemplateModal()),n(t.querySelector('[data-action="save-defaults"]'),"click",()=>e._saveDefaultsModal()),n(t.querySelector('[data-action="delete"]'),"click",()=>e._deleteModal()),n(t.querySelector('[data-action="delete-direct"]'),"click",()=>e._deleteDirectModal()),n(t.querySelector('[data-action="delete-template"]'),"click",()=>e._deleteTemplateModal()),n(t.querySelector('[data-action="toggle-status"]'),"click",()=>e._toggleEditModalStatus()),n(t.querySelector('[data-action="toggle-direct-status"]'),"click",()=>e._toggleDirectEditModalStatus()),n(t.querySelector('[data-action="apply-item-status"]'),"click",()=>e._applyItemStatus())};var Up=(e,t,n)=>{t.querySelectorAll('[data-action="select-search-result"]').forEach(r=>{n(r,"click",a=>{a.preventDefault(),a.stopPropagation();let i=r.dataset.directControlItemId||r.dataset.nextActionItemId,o={uuid:r.dataset.resultUuid,title:r.dataset.resultTitle,mappingType:r.dataset.resultMappingType||r.dataset.resultActiveType||r.dataset.resultType};e._selectSearchResult(i,o)})})};var Fp=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._setTab(r.dataset.tab)})}),n(t.querySelector('[data-action="reload"]'),"click",()=>{e._hasAnyModalOpen?.()||e._loadPage(e._pageByTab[e._tab]||1,{force:!0})}),n(t.querySelector('[data-action="create"]'),"click",()=>{e._hasAnyModalOpen?.()||e._openCreateModal()}),n(t.querySelector('[data-action="prev"]'),"click",()=>{e._hasAnyModalOpen?.()||e._loadPage((e._pageByTab[e._tab]||1)-1)}),n(t.querySelector('[data-action="next"]'),"click",()=>{e._hasAnyModalOpen?.()||e._loadPage((e._pageByTab[e._tab]||1)+1)}),t.querySelectorAll('[data-action="goto-page"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._loadPage(Number(r.dataset.page)||1)})}),n(t.querySelector('[data-action="reload-direct"]'),"click",()=>{e._hasAnyModalOpen?.()||e._reloadDirectCommands()}),n(t.querySelector('[data-action="create-direct"]'),"click",()=>{e._hasAnyModalOpen?.()||e._openCreateDirectModal()}),n(t.querySelector('[data-action="reload-template"]'),"click",()=>{e._hasAnyModalOpen?.()||e._reloadTemplateCommands()}),n(t.querySelector('[data-action="create-template"]'),"click",()=>{e._hasAnyModalOpen?.()||e._openCreateTemplateModal()}),n(t.querySelector('[data-action="reload-defaults"]'),"click",()=>{e._hasAnyModalOpen?.()||e._reloadDefaultsCommands()}),t.querySelectorAll('[data-action="open-defaults-item"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openDefaultsModal(r.dataset.defaultType)})}),t.querySelectorAll('[data-action="edit"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openEditModal(r.dataset.commandId)})}),t.querySelectorAll('[data-action="edit-direct"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openEditDirectModal(r.dataset.directId)})}),t.querySelectorAll('[data-action="edit-template"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openEditTemplateModal(r.dataset.templateId)})}),t.querySelectorAll("[data-direct-subtab]").forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._setDirectSubtab(r.dataset.directSubtab)})})};var jp=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(a=>{n(r,a,i=>e._swallowUiEvent(i))})})};var Bp=e=>{let t=e.shadowRoot;if(!t)return null;e._bindController?.abort&&e._bindController.abort(),e._legacyListeners.length&&(e._legacyListeners.forEach(({element:i,eventName:o,handler:l})=>{i.removeEventListener(o,l)}),e._legacyListeners=[]);let n=typeof AbortController<"u";e._bindController=n?new AbortController:null;let r=e._bindController?.signal??null;return{root:t,on:(i,o,l)=>{if(i)try{r?i.addEventListener(o,l,{signal:r}):(i.addEventListener(o,l),e._legacyListeners.push({element:i,eventName:o,handler:l}))}catch{i.addEventListener(o,l),e._legacyListeners.push({element:i,eventName:o,handler:l})}}}};var Vp=e=>{let t=Bp(e);if(!t)return;let{root:n,on:r}=t;Fp(e,n,r),Rp(e,n,r),Op(e,n,r),Up(e,n,r),zp(e,n,r),jp(e,n,r)};var Hp=e=>{if(!e._directModalOpen)return"";let t=e._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",n=e._directDraft.typeData==="command",r=e._directModalMode==="edit",a=!r&&!String(e._directDraft.uuid??"").trim(),i=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],o=Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[],l=String(e._directDraft.subDirectControl??"").trim(),s=o.some(d=>String(d?.uuid??"").trim()===l);return`
    <div class="modal-backdrop" data-action="close-direct"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${h(t)}">
      <div class="modal-header">
        <h3>${h(t)}</h3>
        <div class="modal-header-actions">
          ${e._directModalMode==="edit"?`
            <button type="button" class="secondary" data-action="toggle-direct-status" ${e._directModalSaving?"disabled":""}>
              ${e._directEditingStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"}
            </button>
          `:""}
          <button type="button" class="ghost" data-action="close-direct" ${e._directModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-direct-field="title" value="${h(e._directDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-direct-field="uuid" value="${h(e._directDraft.uuid)}" ${r?"readonly":""} />
            ${a?`
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-direct-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                ${e._directModalSaving?"disabled":""}
              >\u21BB</button>
            `:""}
          </div>
        </label>
        <label>
          <span>directControl.mappingType</span>
          <input data-direct-field="type" value="${h(e._directDraft.type)}" />
        </label>
        <label>
          <span>directControl.valueType</span>
          <select data-direct-field="typeData">
            ${ur.map(d=>`
              <option value="${d}" ${e._directDraft.typeData===d?"selected":""}>${d}</option>
            `).join("")}
          </select>
        </label>
        ${n?`
          <label class="field-span-2">
            <span>voiceCommands</span>
            <textarea rows="3" data-direct-field="voiceCommands">${h(e._directDraft.voiceCommands)}</textarea>
          </label>
          <label class="field-span-2">
            <span>manual</span>
            <div class="switch-control">
              <input type="checkbox" data-direct-field="manual" ${e._directDraft.manual?"checked":""} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${e._directDraft.manual?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
            </div>
          </label>
          ${e._directDraft.manual?`
            <section class="field-span-2 array-builder">
              <div class="array-builder-header">
                <span>subDirectControl</span>
                <button type="button" class="secondary compact-button" data-action="add-direct-sub-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>
              </div>
              <div class="array-builder-list">
                ${i.map((d,m)=>{let p=e._openDirectSubControlItemIds.has(d.id);return`
                    <section class="response-item-card ${p?"open":""}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-direct-sub-control-item"
                        data-direct-sub-control-item-id="${h(d.id)}"
                      >
                        <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${m+1}</span>
                        <span class="response-accordion-icon">${p?"\u2212":"+"}</span>
                      </button>
                      ${p?`
                        <div class="response-item-grid">
                          <label>
                            <span>subMappingType</span>
                            <input
                              data-direct-sub-control-item-id="${h(d.id)}"
                              data-direct-sub-control-item-field="subType"
                              value="${h(d.subType)}"
                            />
                          </label>
                          <label>
                            <span>subVoiceCommands</span>
                            <textarea
                              rows="3"
                              data-direct-sub-control-item-id="${h(d.id)}"
                              data-direct-sub-control-item-field="subVoiceCommands"
                            >${h(d.subVoiceCommands)}</textarea>
                          </label>
                          <div class="response-item-actions">
                            <button
                              type="button"
                              class="ghost compact-delete-button"
                              data-action="remove-direct-sub-control-item"
                              data-direct-sub-control-item-id="${h(d.id)}"
                            >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                          </div>
                        </div>
                      `:""}
                    </section>
                  `}).join("")}
                ${i.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
              </div>
            </section>
          `:`
            <label class="field-span-2">
              <span>subDirectControl</span>
              <select data-direct-field="subDirectControl">
                <option value="">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E (\u0434\u043E\u0431\u0430\u0432\u0438\u043C \u043F\u043E\u0437\u0436\u0435)</option>
                ${l&&!s?`
                  <option value="${h(l)}" selected>${h(l)}</option>
                `:""}
                ${o.map(d=>`
                  <option value="${h(d.uuid)}" ${e._directDraft.subDirectControl===d.uuid?"selected":""}>${h(d.title)} (${h(d.uuid)})</option>
                `).join("")}
              </select>
            </label>
          `}
        `:""}
      </div>
      <div class="modal-footer">
        ${e._directModalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete-direct" ${e._directModalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save-direct" ${e._directModalSaving?"disabled":""}>${e._directModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},Yp=e=>{if(!e._templateModalOpen)return"";let t=e._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",n=e._templateModalMode==="edit",r=!n&&!String(e._templateDraft.uuid??"").trim(),a=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[];return`
    <div class="modal-backdrop" data-action="close-template"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${h(t)}">
      <div class="modal-header">
        <h3>${h(t)}</h3>
        <button type="button" class="ghost" data-action="close-template" ${e._templateModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-template-field="title" value="${h(e._templateDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-template-field="uuid" value="${h(e._templateDraft.uuid)}" ${n?"readonly":""} />
            ${r?`
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-template-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                ${e._templateModalSaving?"disabled":""}
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
            ${a.map((i,o)=>{let l=e._openTemplateSubControlItemIds.has(i.id);return`
                <section class="response-item-card ${l?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-template-sub-control-item"
                    data-template-sub-control-item-id="${h(i.id)}"
                  >
                    <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}</span>
                    <span class="response-accordion-icon">${l?"\u2212":"+"}</span>
                  </button>
                  ${l?`
                    <div class="response-item-grid">
                      <label>
                        <span>subMappingType</span>
                        <input
                          data-template-sub-control-item-id="${h(i.id)}"
                          data-template-sub-control-item-field="subType"
                          value="${h(i.subType)}"
                        />
                      </label>
                      <label>
                        <span>subVoiceCommands</span>
                        <textarea
                          rows="3"
                          data-template-sub-control-item-id="${h(i.id)}"
                          data-template-sub-control-item-field="subVoiceCommands"
                        >${h(i.subVoiceCommands)}</textarea>
                      </label>
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-template-sub-control-item"
                          data-template-sub-control-item-id="${h(i.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${a.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
          </div>
        </section>
      </div>
      <div class="modal-footer">
        ${e._templateModalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete-template" ${e._templateModalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save-template" ${e._templateModalSaving?"disabled":""}>${e._templateModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},qp=e=>{if(!e._defaultsModalOpen)return"";let t=e._defaultsActiveType,n=e._defaultConfig(t),r=e._defaultsByType[t]??e._newDefaultsDraft(t);return`
    <div class="modal-backdrop" data-action="close-defaults"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${h(n.title)}">
      <div class="modal-header">
        <h3>${h(n.title)}</h3>
        <button type="button" class="ghost" data-action="close-defaults" ${e._defaultsModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <div class="modal-grid">
        <label class="field-span-2">
          <span>title</span>
          <input data-defaults-field="title" value="${h(r.title||n.title)}" disabled />
        </label>
        <label>
          <span>endStatus</span>
          <div class="switch-control">
            <input type="checkbox" data-defaults-field="endStatus" ${r.endStatus?"checked":""} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${r.endStatus?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
          </div>
        </label>
        ${n.supportsLlm?`
          <label>
            <span>LLM</span>
            <div class="switch-control">
              <input type="checkbox" data-defaults-field="llmEnabled" ${r.llmEnabled?"checked":""} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${r.llmEnabled?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
            </div>
          </label>
        `:""}
        <label class="field-span-2">
          <span>message</span>
          <input data-defaults-field="message" value="${h(r.message)}" />
        </label>
        ${n.supportsLlm&&r.llmEnabled?`
          <label class="field-span-2">
            <span>system</span>
            <textarea rows="6" data-defaults-field="system">${h(r.system)}</textarea>
          </label>
          <label class="field-span-2">
            <span>model</span>
            <input data-defaults-field="model" value="${h(r.model)}" />
          </label>
        `:""}
      </div>
      <div class="modal-footer">
        <button type="button" class="primary" data-action="save-defaults" ${e._defaultsModalSaving?"disabled":""}>${e._defaultsModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},Wp=e=>{if(!e._itemActionsModalOpen)return"";let t=e._itemActionsStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",n=e._itemActionsStatus?"\u0421\u0435\u0439\u0447\u0430\u0441: \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u0435\u0439\u0447\u0430\u0441: \u0441\u043A\u0440\u044B\u0442",r=e._itemActionsTitle||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <div class="modal-backdrop" data-action="close-item-actions"></div>
    <section class="modal modal-compact modal-item-actions" role="dialog" aria-modal="true" aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F">
      <div class="modal-header">
        <h3>${h(r)}</h3>
        <button type="button" class="ghost item-actions-close" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" data-action="close-item-actions" ${e._itemActionsSaving?"disabled":""}>\xD7</button>
      </div>
      <div class="item-actions-body">
        <p class="item-actions-status">${n}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="secondary" data-action="apply-item-status" ${e._itemActionsSaving?"disabled":""}>
          ${e._itemActionsSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":t}
        </button>
      </div>
    </section>
  `};var Kp=e=>{if(!e._modalOpen)return"";let t=e._modalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",n=e._modalMode==="edit",r=!n&&!String(e._draft.uuid??"").trim();return`
    <div class="modal-backdrop" data-action="close"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${h(t)}">
      <div class="modal-header">
        <h3>${h(t)}</h3>
        <div class="modal-header-actions">
          ${e._modalMode==="edit"?`
            <button type="button" class="secondary" data-action="toggle-status" ${e._modalSaving?"disabled":""}>
              ${e._editingStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"}
            </button>
          `:""}
          <button type="button" class="ghost" data-action="close" ${e._modalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
      </div>
      <div class="modal-grid">
        <label><span>Title</span><input data-field="title" value="${h(e._draft.title)}" /></label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-field="uuid" value="${h(e._draft.uuid)}" ${n?"readonly":""} />
            ${r?`
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                ${e._modalSaving?"disabled":""}
              >\u21BB</button>
            `:""}
          </div>
        </label>
        <label><span>actionType</span><input data-field="type" value="${h(e._draft.type)}" /></label>
        <label>
          <span>answerType</span>
          <select data-field="answerType">
            <option value="default" ${e._draft.answerType==="default"?"selected":""}>default</option>
            <option value="redis" ${e._draft.answerType==="redis"?"selected":""}>redis</option>
          </select>
        </label>
        <label>
          <span>endStatus</span>
          <div class="switch-control">
            <input type="checkbox" data-field="endStatus" ${e._draft.endStatus?"checked":""} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${e._draft.endStatus?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
          </div>
        </label>
        <label>
          <span>forwardText</span>
          <div class="switch-control">
            <input type="checkbox" data-field="forwardText" ${e._draft.forwardText?"checked":""} />
            <span class="switch-slider" aria-hidden="true"></span>
            <span class="switch-label">${e._draft.forwardText?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
          </div>
        </label>
        <label class="field-span-2">
          <span>voiceCommands (string)</span>
          <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${h(e._draft.voiceCommands)}</textarea>
        </label>
        <section class="field-span-2 response-accordion open">
          <div class="response-accordion-head-static">
            <span class="response-accordion-title">voiceResponseArray</span>
          </div>
          <div class="response-accordion-body">
            <div class="response-items">
              ${(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map((a,i)=>{let o=e._openResponseItemIds.has(a.id);return`
                  <section class="response-item-card ${o?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-response-item"
                      data-response-item-id="${h(a.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${i+1}</span>
                      <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                    </button>
                    ${o?`
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>actionType</span>
                            <input
                              data-response-item-id="${h(a.id)}"
                              data-response-item-field="type"
                              value="${h(a.type)}"
                              placeholder="default"
                            />
                          </label>
                          <label>
                            <span>LLM</span>
                            <div class="switch-control">
                              <input
                                type="checkbox"
                                data-response-item-id="${h(a.id)}"
                                data-response-item-field="llmEnabled"
                                ${a.llmEnabled?"checked":""}
                              />
                              <span class="switch-slider" aria-hidden="true"></span>
                              <span class="switch-label">${a.llmEnabled?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
                            </div>
                          </label>
                        </div>
                        <label>
                          <span>voiceResponse</span>
                          <textarea
                            rows="3"
                            data-response-item-id="${h(a.id)}"
                            data-response-item-field="voiceResponse"
                          >${h(a.voiceResponse)}</textarea>
                        </label>
                        ${a.llmEnabled?`
                          <label>
                            <span>system</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${h(a.id)}"
                              data-response-item-field="system"
                            >${h(a.system)}</textarea>
                          </label>
                          <label>
                            <span>model</span>
                            <input
                              data-response-item-id="${h(a.id)}"
                              data-response-item-field="model"
                              value="${h(a.model)}"
                            />
                          </label>
                        `:""}
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-voice-response-item"
                            data-response-item-id="${h(a.id)}"
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
            ${(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map((a,i)=>{let o=e._openNextActionItemIds.has(a.id);return`
                <section class="response-item-card ${o?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-next-action-item"
                    data-next-action-item-id="${h(a.id)}"
                  >
                    <span>${h(a.uuid?a.displayValue||a.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${i+1}`)}</span>
                    <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                  </button>
                  ${o?`
                    <div class="response-item-grid">
                      <div class="response-inline-row">
                        <label>
                          <span>actionTypeComponent</span>
                          <select data-next-action-item-id="${h(a.id)}" data-next-action-item-field="actionTypeComponent">
                            ${Ra.map(l=>`
                              <option value="${l}" ${a.actionTypeComponent===l?"selected":""}>${l}</option>
                            `).join("")}
                          </select>
                        </label>
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-next-action-item-id="${h(a.id)}"
                              data-next-action-item-field="uuid"
                              value="${h(a.uuid)}"
                              placeholder="uuid"
                            />
                            ${e._searchActiveType==="nextAction"&&e._searchActiveItemId===a.id&&e._searchResults.length>0?`
                              <div class="dropdown-options">
                                ${e._searchResults.map(l=>`
                                  <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${h(a.id)}" data-result-uuid="${h(l.uuid)}" data-result-title="${h(l.title??l.name??"")}" data-result-mapping-type="${h(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}">
                                    ${h(l.title??l.name??"")} (${h(l.uuid)})
                                  </div>
                                `).join("")}
                              </div>
                            `:""}
                          </div>
                        </label>
                      </div>
                      ${a.actionTypeComponent==="custom"?`
                        <label>
                          <span>actionType</span>
                          <input
                            data-next-action-item-id="${h(a.id)}"
                            data-next-action-item-field="actionType"
                            value="${h(a.actionType??a.mappingType??"")}"
                            placeholder="custom actionType"
                          />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-next-action-item"
                          data-next-action-item-id="${h(a.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${(e._draft.nextActionItems?.length||0)===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
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
            ${(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map((a,i)=>{let o=e._openDirectControlItemIds.has(a.id);return`
                <section class="response-item-card ${o?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-direct-control-item"
                    data-direct-control-item-id="${h(a.id)}"
                  >
                    <span>${h(a.uuid?a.displayValue||a.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${i+1}`)}</span>
                    <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                  </button>
                  ${o?`
                    <div class="response-item-grid">
                      <label>
                        <span>uuid</span>
                        <div class="dropdown-container">
                          <input
                            data-direct-control-item-id="${h(a.id)}"
                            value="${h(a.uuid)}"
                            placeholder="uuid"
                          />
                          ${e._searchActiveType==="directControl"&&e._searchActiveItemId===a.id&&e._searchResults.length>0?`
                            <div class="dropdown-options">
                              ${e._searchResults.map(l=>`
                                <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${h(a.id)}" data-result-uuid="${h(l.uuid)}" data-result-title="${h(l.title??l.name??"")}" data-result-mapping-type="${h(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}" data-result-active-type="${h(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}" data-result-type="${h(l.type??"")}">
                                  ${h(l.title??l.name??"")} (${h(l.uuid)})
                                </div>
                              `).join("")}
                            </div>
                          `:""}
                        </div>
                      </label>
                      ${String(a.uuid??"").trim()||String(a.mappingType??"").trim()?`
                        <label>
                          <span>mappingType</span>
                          <input value="${h(a.mappingType??"")}" placeholder="mappingType" disabled />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-direct-control-item"
                          data-direct-control-item-id="${h(a.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${(e._draft.directControlItems?.length||0)===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
          </div>
          <div class="array-builder-footer">
            <button type="button" class="secondary compact-button" data-action="add-direct-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
          </div>
        </section>
      </div>
      <div class="modal-footer">
        ${e._modalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete" ${e._modalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save" ${e._modalSaving?"disabled":""}>${e._modalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `};var Qp=`
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
`;var Gp=e=>{let t=e._hasAnyModalOpen?.()??!1,n=e._renderActiveTabBody(),r=`
    ${Qp}
    <div class="create-scenario-shell ${t?"modal-context-open":""}">
      <section class="subtabs-dock">
        <div class="subtabs">
          <button type="button" class="subtab-button ${e._tab===D.primary?"active":""}" data-tab="${D.primary}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${e._tab===D.secondary?"active":""}" data-tab="${D.secondary}">\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${e._tab===D.direct?"active":""}" data-tab="${D.direct}">\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</button>
          <button type="button" class="subtab-button ${e._tab===D.defaults?"active":""}" data-tab="${D.defaults}">\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
        </div>
      </section>
      ${e._error?`<div class="status error">${h(e._error)}</div>`:""}
      ${e._status?`<div class="status ok">${h(e._status)}</div>`:""}
      ${n}
    </div>
    ${e._renderModal()}
    ${e._renderDirectModal()}
    ${e._renderTemplateModal()}
    ${e._renderDefaultsModal()}
    ${e._renderItemActionsModal()}
  `;e._mountReact(r),e._bind()};var Xp=()=>{if(typeof document>"u")return;let e=document.getElementById("dialog-custom-ui-modal-style");e||(e=document.createElement("style"),e.id="dialog-custom-ui-modal-style",e.textContent="body.modal-open { overflow: hidden; }",document.head.appendChild(e))},Jp=e=>{e._reactRoot=null,e._hass=null,e._config={base_url:"",timer_alarm_token:"",theme:"light"},e._tab=D.primary,e._commands=[],e._pageByTab={[D.primary]:1,[D.secondary]:1},e._totalByTab={[D.primary]:0,[D.secondary]:0},e._totalPagesByTab={[D.primary]:1,[D.secondary]:1},e._lastLoadedTab=D.primary,e._lastLoadPageKey="",e._inFlightPageKey="",e._lastLoadedPageKey="",e._lastLoadedPageAt=0,e._loading=!1,e._error="",e._status="",e._modalOpen=!1,e._modalMode="create",e._modalSaving=!1,e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._bindController=null,e._legacyListeners=[],e._draft=e._newDraft(),e._searchActiveItemId=null,e._searchActiveType=null,e._searchResults=[],e._searchLoading=!1,e._searchDebounceTimer=null,e._modalScrollTop=0,e._directSubtab=ae.basic,e._directCommands=[],e._directLoading=!1,e._directError="",e._directModalOpen=!1,e._directModalMode="create",e._directModalSaving=!1,e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._templateCommands=[],e._templateLoading=!1,e._templateError="",e._templateModalOpen=!1,e._templateModalMode="create",e._templateModalSaving=!1,e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._subDirectControlSampleOptions=[],e._defaultsLoading=!1,e._defaultsError="",e._defaultsModalOpen=!1,e._defaultsModalSaving=!1,e._defaultsByType=e._newDefaultsState(),e._defaultsActiveType=De[0].type,e._defaultsActiveId="",e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsId="",e._itemActionsKind="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._itemActionsTitle="",e._modalCount=0};var oh=({html:e})=>$l.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Al=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),Xp(),Jp(this)}set hass(t){let n=!this._hass;this._hass=t,(n||!this.shadowRoot?.innerHTML)&&this._render()}set config(t){let n={base_url:String(t?.base_url??"").trim(),timer_alarm_token:String(t?.timer_alarm_token??"").trim(),theme:String(t?.theme??"light").trim().toLowerCase()==="dark"?"dark":"light"},r=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token||n.theme!==this._config.theme,a=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token;if(!r){this.shadowRoot?.innerHTML||this._render();return}if(this._config=n,this._applyTheme(),a&&(this._tab===D.primary||this._tab===D.secondary)&&!this._loading&&n.base_url){this._error="",this._loadPage(this._pageByTab[this._tab]||1,{force:!0});return}if(a&&this._tab===D.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._applyTheme(),this._render(),(this._tab===D.primary||this._tab===D.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1),this._tab===D.direct&&!this._directCommands.length&&!this._directLoading&&this._directSubtab===ae.basic&&this._loadDirectCommands(),this._tab===D.direct&&!this._templateCommands.length&&!this._templateLoading&&this._directSubtab===ae.templates&&this._loadTemplateCommands()}disconnectedCallback(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}_mountReact(t){this._reactRoot||(this._reactRoot=(0,ef.createRoot)(this.shadowRoot));let n=this.shadowRoot.querySelector(".modal");n&&(this._modalScrollTop=n.scrollTop),(0,Zp.flushSync)(()=>{this._reactRoot.render($l.default.createElement(oh,{html:t}))});let r=this.shadowRoot.querySelector(".modal");r&&(r.scrollTop=this._modalScrollTop)}_addModalBackdrop(){this._modalCount++,this._modalCount===1&&typeof document<"u"&&document.body&&document.body.classList.add("modal-open")}_removeModalBackdrop(){this._modalCount=Math.max(0,this._modalCount-1),this._modalCount===0&&typeof document<"u"&&document.body&&document.body.classList.remove("modal-open")}_newDraft(t=null){return gc(t)}_newDirectDraft(t=null){return hc(t)}_newTemplateDraft(t=null){return _c(t)}_defaultConfig(t){return Ua(t)}_newDefaultsDraft(t,n=null){return kl(t,n)}_newDefaultsState(){return yc()}_apiHeaders(t=!1){let n={};return t&&(n["Content-Type"]="application/json"),this._config.timer_alarm_token&&(n.Authorization=this._config.timer_alarm_token),n["x-user"]=this._resolveXUserHeader(),n}_getCurrentUserId(){return String(this._hass?.user?.id??"").trim()}_isCurrentUserAdmin(){return!!this._hass?.user?.is_admin}_resolveXUserHeader(){return this._isCurrentUserAdmin()?"":this._getCurrentUserId()}_apiUrl(t){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}${t}`:""}async _loadPage(t=1,n={}){if(this._tab!==D.primary&&this._tab!==D.secondary)return;let{force:r=!1}=n??{},a=this._tab,i=Math.max(1,Number(t)||1),o=`${a}:${i}`;if(this._inFlightPageKey===o)return;let l=Date.now();if(!r&&this._lastLoadedPageKey===o&&l-this._lastLoadedPageAt<1500)return;let d=a===D.secondary?"/api/cms/sub-commands":"/api/cms/commands",m=this._apiUrl(`${d}?page=${encodeURIComponent(i)}&pageSize=${20}`);if(!m){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._lastLoadPageKey=o,this._inFlightPageKey=o,this._loading=!0,this._error="",this._render();try{let p=await fetch(m,{method:"GET",headers:this._apiHeaders(!1)});if(!p.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${p.status}`);let g=await p.json(),S=Array.isArray(g.data)?g.data:[],b=g?.meta?.pagination??g?.pagination??{},_=Number(b.total??g.total??g.count??g.meta?.total??0),N=Number(b.page??i)||i,f=Number(b.pageSize??20)||20,u=Number(b.totalPages??b.pageCount??0),c=Number.isFinite(u)&&u>0?u:Math.max(1,Math.ceil((Number.isFinite(_)&&_>0?_:S.length)/f));this._commands=S,this._lastLoadedTab=a,this._pageByTab[a]=Math.max(1,N),this._totalPagesByTab[a]=Math.max(1,c),this._totalByTab[a]=Number.isFinite(_)&&_>0?_:Number.isFinite(u)&&u>0?u*f:i*20+(S.length===20?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${S.length}.`,this._lastLoadedPageKey=o,this._lastLoadedPageAt=Date.now()}catch(p){this._commands=[],this._error=p?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._inFlightPageKey===o&&(this._inFlightPageKey=""),this._loading=!1,this._render()}}_setTab(t){if(this._tab=t,this._error="",this._status="",this._render(),t===D.primary||t===D.secondary){let n=this._pageByTab[t]||1;(!this._loading||this._lastLoadedTab!==t)&&this._loadPage(n)}t===D.direct&&(this._directSubtab===ae.basic&&!this._directCommands.length&&!this._directLoading&&this._loadDirectCommands(),this._directSubtab===ae.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands()),t===D.defaults&&!this._defaultsLoading&&this._reloadDefaultsCommands()}_buildPaginationItems(t,n){let r=Math.max(1,Number(t)||1),a=Math.max(1,Number(n)||1);return a<=7?Array.from({length:a},(i,o)=>o+1):r<=4?[1,2,3,4,"ellipsis",a]:r>=a-3?[1,"ellipsis",a-3,a-2,a-1,a]:[1,"ellipsis",r-1,r,r+1,"ellipsis",a]}_openCreateModal(){return wc(this)}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_openEditModal(t){return Cc(this,t)}_closeModal(){return Tc(this)}_updateDraft(t,n){this._draft={...this._draft,[t]:n}}_buildPayload(){let t=Fa(this._draft);return this._tab===D.secondary?(delete t.componentDialog,t):(delete t.subComponentDialog,t)}_refreshUuid(){return Dc(this)}_addVoiceResponseItem(){return Ec(this)}_removeVoiceResponseItem(t){return Ac(this,t)}_updateVoiceResponseItem(t,n,r){return $c(this,t,n,r)}_toggleResponseItem(t){return Mc(this,t)}_addDirectControlItem(){return xc(this)}_removeDirectControlItem(t){return Pc(this,t)}_updateDirectControlItem(t,n){return Lc(this,t,n)}_toggleDirectControlItem(t){return Nc(this,t)}_addNextActionItem(){return zc(this)}_removeNextActionItem(t){return Oc(this,t)}_updateNextActionItem(t,n,r){return Rc(this,t,n,r)}_toggleNextActionItem(t){return Uc(this,t)}_setDirectSubtab(t){return qc(this,t)}async _loadDirectCommands(){return Wc(this)}async _loadTemplateCommands(){return Kc(this)}_reloadDirectCommands(){return Qc(this)}_reloadTemplateCommands(){return Gc(this)}_openCreateDirectModal(){return Xc(this)}_openEditDirectModal(t){return Jc(this,t)}_closeDirectModal(){return Zc(this)}_updateDirectDraft(t,n){return ep(this,t,n)}async _hydrateSelectedSubDirectControlSample(){return tp(this)}_refreshDirectUuid(){return np(this)}_refreshTemplateUuid(){return rp(this)}_addDirectSubControlItem(){return ap(this)}_removeDirectSubControlItem(t){return ip(this,t)}_toggleDirectSubControlItem(t){return op(this,t)}_updateDirectSubControlItem(t,n,r){return lp(this,t,n,r)}_buildDirectPayload(){return ja(this._directDraft)}async _loadSubDirectControlSamples(){return sp(this)}async _performUuidSearch(t,n,r=null){return wp(this,t,n,r)}_debouncedPerformUuidSearch(t,n,r=null){return Cp(this,t,n,r)}_selectSearchResult(t,n){return Tp(this,t,n)}async _searchUuid(t,n){return kp(this,t,n)}async _resolveTitleByUuid(t,n){return Ip(this,t,n)}async _hydrateDirectControlTitles(){return Dp(this)}async _hydrateNextActionTitles(){return Ep(this)}async _deleteItem(t,n){return Ap(this,t,n)}_openItemActionsModal({kind:t,id:n,title:r,collection:a,status:i}){return Fc(this,{kind:t,id:n,title:r,collection:a,status:i})}_closeItemActionsModal(){return jc(this)}async _updateCommandStatusById(t,n,r){return Bc(this,t,n,r)}async _updateDirectStatusById(t,n){return Vc(this,t,n)}async _applyItemStatus(){return Hc(this)}async _toggleEditModalStatus(){return Yc(this)}async _toggleDirectEditModalStatus(){return dp(this)}async _saveDirectModal(){return up(this)}async _deleteDirectModal(){return cp(this)}_openCreateTemplateModal(){return pp(this)}_openEditTemplateModal(t){return fp(this,t)}_closeTemplateModal(){return mp(this)}_updateTemplateDraft(t,n){return gp(this,t,n)}_addTemplateSubControlItem(){return hp(this)}_removeTemplateSubControlItem(t){return _p(this,t)}_toggleTemplateSubControlItem(t){return yp(this,t)}_updateTemplateSubControlItem(t,n,r){return vp(this,t,n,r)}_buildTemplatePayload(){return vc(this._templateDraft)}async _saveTemplateModal(){return Sp(this)}async _deleteTemplateModal(){return bp(this)}_reloadDefaultsCommands(){return $p(this)}_openDefaultsModal(t){return Mp(this,t)}_closeDefaultsModal(){return xp(this)}_updateDefaultsDraft(t,n){return Pp(this,t,n)}_buildDefaultsPayload(){let t=this._defaultsActiveType,n=this._defaultsByType[t]??this._newDefaultsDraft(t);return Sc(t,n)}async _saveDefaultsType(t,n=!1){return Lp(this,t,n)}async _saveDefaultsModal(){return Np(this)}async _saveModal(){return kc(this)}async _deleteModal(){return Ic(this)}_renderCommandsTab(t){return Rt(this,t)}_renderPrimaryCommandsPage(){return Ba(this)}_renderSecondaryCommandsPage(){return Va(this)}_renderDirectBasicSection(t){return Ha(this,t)}_renderDirectTemplatesSection(t){return Ya(this,t)}_renderDirectCommandsTab(){return qa(this)}_renderActiveTabBody(){return bc(this)}_renderStub(t,n){return Il(t,n)}_renderDirectModal(){return Hp(this)}_renderTemplateModal(){return Yp(this)}_renderDefaultsTab(){return Wa(this)}_renderDefaultsModal(){return qp(this)}_renderModal(){return Kp(this)}_renderItemActionsModal(){return Wp(this)}_swallowUiEvent(t){t.stopPropagation()}_hasAnyModalOpen(){return!!(this._modalOpen||this._directModalOpen||this._templateModalOpen||this._defaultsModalOpen||this._itemActionsModalOpen)}_bind(){Vp(this)}_render(){Gp(this)}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",Al);var fr={base_url:"http://127.0.0.1:8000",client_id:"",timer_alarm_token:"",yandex_tts_api_key:"",yandex_tts_folder_id:"",yandex_tts_lang:"ru-RU",yandex_tts_codec:"oggopus",yandex_tts_voice:"oksana",yandex_tts_emotion:"good",yandex_tts_speed:1.1,timer_alarm_device_ids:[""],theme:"light",timeout:10,scenarios:[]},nf=`{
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
}`,rf=2e3,Ml=new URL(import.meta.url).searchParams.get("v")||"",tf=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),xl=Ml?tf?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(Ml)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(Ml)}`:tf?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js";var af=e=>(t,n,r)=>{t&&t.addEventListener(n,r)};var of=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(i=>{n(i,"click",()=>e._setActiveTab(i.dataset.tab))}),n(t.querySelector('[data-action="save"]'),"click",()=>e._save()),n(t.querySelector('[data-action="refresh-logs"]'),"click",()=>e._loadLogs()),n(t.querySelector('[data-action="download-json"]'),"click",()=>e._downloadJson()),n(t.querySelector('[data-action="upload-json"]'),"click",()=>e._openJsonFilePicker()),n(t.querySelector('[data-action="reset-commands-cache"]'),"click",()=>e._resetCommandsCache()),n(t.querySelector('[data-action="reload-yandex-scenarios"]'),"click",()=>e._loadYandexScenarios()),n(t.querySelector('[data-action="create-yandex-tab"]'),"click",()=>e._startYandexScenarioCreate()),n(t.querySelector('[data-action="save-yandex-scenario"]'),"click",()=>e._saveYandexScenarioFromModal()),n(t.querySelector('[data-action="delete-yandex-scenario"]'),"click",()=>e._deleteActiveYandexScenario()),t.querySelectorAll('[data-action="toggle-secret"]').forEach(i=>{n(i,"click",()=>e._toggleSecretField(i.dataset.secretField))});let r=t.querySelector('[data-action="add-scenario"]');r&&(r.onclick=()=>e._addScenario()),t.querySelectorAll('[data-action="select-yandex-tab"]').forEach(i=>{n(i,"click",()=>e._setYandexActiveScenario(i.dataset.yandexTab))}),n(t.querySelector('[data-action="select-yandex-tab-dropdown"]'),"change",i=>{e._setYandexActiveScenario(i.currentTarget.value)}),t.querySelectorAll('[data-action="add-yandex-sub"]').forEach(i=>{n(i,"click",()=>e._addYandexDraftSubItem(i.dataset.subType))}),t.querySelectorAll('[data-action="remove-yandex-sub"]').forEach(i=>{n(i,"click",()=>e._removeYandexDraftSubItem(i.dataset.subType,Number(i.dataset.subIndex)))}),t.querySelectorAll("[data-yandex-sub-accordion]").forEach(i=>{n(i,"toggle",()=>e._setYandexSubEditorOpen(i.dataset.yandexSubAccordion,i.open))}),t.querySelectorAll("[data-yandex-sub-item-accordion]").forEach(i=>{n(i,"toggle",()=>{let o=i.dataset.yandexSubItemAccordion,l=i.dataset.yandexSubItemId;e._setYandexSubItemOpen(o,i.open?l:"")})}),n(t.querySelector('[data-action="import-json-input"]'),"change",i=>{let[o]=i.currentTarget.files||[];e._importJsonFile(o)}),t.querySelectorAll('[data-action="add-condition"]').forEach(i=>{n(i,"click",()=>e._addCondition(i.dataset.scenarioId))}),t.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(i=>{n(i,"click",()=>e._enableConditionChildrenType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(i=>{n(i,"click",()=>e._disableConditionChildrenType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(i=>{n(i,"click",()=>e._enableConditionChildrenDirectType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(i=>{n(i,"click",()=>e._disableConditionChildrenDirectType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll("[data-toggle-scenario]").forEach(i=>{n(i,"click",()=>e._toggleScenario(i.dataset.toggleScenario))}),t.querySelectorAll("[data-toggle-condition]").forEach(i=>{n(i,"click",()=>e._toggleCondition(i.dataset.toggleCondition))}),t.querySelectorAll("[data-remove-id]").forEach(i=>{n(i,"click",()=>e._removeScenario(i.dataset.removeId))}),t.querySelectorAll("[data-remove-condition-id]").forEach(i=>{n(i,"click",()=>e._removeCondition(i.dataset.scenarioId,i.dataset.removeConditionId))}),t.querySelectorAll('[data-action="scenarios-page"]').forEach(i=>{n(i,"click",()=>e._setScenariosPage(i.dataset.page))}),t.querySelectorAll('[data-action="scenarios-page-nav"]').forEach(i=>{n(i,"click",()=>{let o=i.dataset.direction==="prev"?-1:1;e._setScenariosPage((Number(e._scenariosPage)||1)+o)})});let a=t.querySelector("dialog-custom-ui-create-scenario");a&&(a.hass=e._hass,a.config={base_url:e._config.base_url,timer_alarm_token:e._config.timer_alarm_token,theme:e._config.theme})};var lf=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(a=>{n(r,a,i=>e._swallowUiEvent(i))})}),t.querySelectorAll("[data-config-field]").forEach(r=>{let a=i=>r.dataset.configField==="theme"?i.currentTarget.checked?"dark":"light":r.dataset.configBool==="true"?i.currentTarget.checked:i.currentTarget.value;n(r,"input",i=>{e._updateConfigField(i.currentTarget.dataset.configField,a(i),!1)}),n(r,"change",i=>{e._updateConfigField(i.currentTarget.dataset.configField,a(i),!0)})}),t.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(r=>{let a=r.dataset.scenarioField,i=r.dataset.scenarioId;r.tagName==="SELECT"?n(r,"change",o=>{e._updateScenario(i,a,o.currentTarget.value,!0)}):(n(r,"input",o=>{e._updateScenario(i,a,o.currentTarget.value,!1)}),n(r,"change",o=>{e._updateScenario(i,a,o.currentTarget.value,!0)}))}),t.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(r=>{let a=r.dataset.scenarioId,i=r.dataset.conditionId,o=r.dataset.conditionField;n(r,"input",l=>{e._updateCondition(a,i,o,l.currentTarget.value,!1)}),n(r,"change",l=>{e._updateCondition(a,i,o,l.currentTarget.value,!0)})}),t.querySelectorAll("[data-yandex-field]").forEach(r=>{n(r,"input",a=>{e._updateYandexDraftField(a.currentTarget.dataset.yandexField,a.currentTarget.value,!1)}),n(r,"change",a=>{e._updateYandexDraftField(a.currentTarget.dataset.yandexField,a.currentTarget.value,!1)})}),t.querySelectorAll("[data-yandex-sub-field][data-yandex-sub-type][data-yandex-sub-index]").forEach(r=>{n(r,"input",a=>{e._updateYandexDraftSubItem(a.currentTarget.dataset.yandexSubType,Number(a.currentTarget.dataset.yandexSubIndex),a.currentTarget.dataset.yandexSubField,a.currentTarget.value,!1)}),n(r,"change",a=>{e._updateYandexDraftSubItem(a.currentTarget.dataset.yandexSubType,Number(a.currentTarget.dataset.yandexSubIndex),a.currentTarget.dataset.yandexSubField,a.currentTarget.value,!1)})})};var Ka=()=>`
    <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
  `;var w=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),lh=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Pl=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,_n=()=>({id:Pl(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),sf=()=>({id:lh(),name:"",script_entity_id:"",conditions:[_n()]});var Qa=e=>{let t=e._buildConfigPayload();return`
      <section class="hero-card">
        <h1>JSON</h1>
        <p>\u041C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0432 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u0439 JSON \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0444\u043E\u0440\u043C\u0443.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="download-json">\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON</button>
          <button type="button" class="primary" data-action="upload-json">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON</button>
          <input type="file" accept=".json,application/json" data-action="import-json-input" hidden />
        </div>
        ${e._error?`<div class="status error">${w(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${w(e._status)}</div>`:""}
      </section>
      <section class="help-card">
        <div><strong>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E JSON</strong></div>
        <pre><code>${w(JSON.stringify(t,null,2))}</code></pre>
      </section>
    `};var Ga=e=>{let t=e._logs.length?e._logs.map(n=>`
          <div class="log-item ${w(n.level)}">
            <div class="log-meta">
              <span class="log-time">${w(n.ts)}</span>
              <span class="log-level">${w(n.level)}</span>
            </div>
            <div class="log-message">${w(n.message)}</div>
          </div>
        `).join(""):'<div class="empty">\u041B\u043E\u0433\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h1>Logs</h1>
        <p>\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 10 \u0441\u043E\u0431\u044B\u0442\u0438\u0439: \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, 204, \u043E\u0448\u0438\u0431\u043A\u0438, \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u043A\u0440\u0438\u043F\u0442\u0430.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-logs" ${e._loadingLogs?"disabled":""}>${e._loadingLogs?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        </div>
      </section>
      <section class="help-card logs-card">
        ${t}
      </section>
    `};var df=(e,t,n,r,a="")=>{let i=e._isSecretVisible(t);return`
    <label>
      <span>${n}</span>
      <div class="secret-field">
        <input
          data-config-field="${t}"
          type="${i?"text":"password"}"
          value="${w(r??"")}"
          placeholder="${w(a)}"
          autocomplete="off"
          spellcheck="false"
        />
        <button
          type="button"
          class="ghost secret-toggle-button"
          data-action="toggle-secret"
          data-secret-field="${t}"
          title="${i?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"}"
          aria-label="${i?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"}"
        >${i?"\u{1F648}":"\u{1F441}"}</button>
      </div>
    </label>
  `},Xa=e=>`
      <section class="hero-card">
        <h1>Settings</h1>
        <p>\u041E\u0431\u0449\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432 \u0438 Yandex TTS: IP, client_id, \u0442\u043E\u043A\u0435\u043D\u044B, timeout, voice/speed/folderId \u0438 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${w(e._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 POST \u043D\u0430 <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
          <label>
            <span>Client ID</span>
            <input data-config-field="client_id" value="${w(e._config.client_id)}" placeholder="user-123" />
            <small>\u041F\u043E\u043B\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0435\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A\u0430\u043A <code>{"clientId":"..."}</code>.</small>
          </label>
          ${df(e,"timer_alarm_token","Authorization token",e._config.timer_alarm_token,"Bearer xxx")}
          <label class="field-narrow">
            <span>Timeout, \u0441\u0435\u043A\u0443\u043D\u0434</span>
            <input data-config-field="timeout" type="number" min="1" value="${w(e._config.timeout)}" />
          </label>
          <label class="field-narrow">
            <span>\u0422\u0435\u043C\u0430</span>
            <div class="switch-control">
              <input
                type="checkbox"
                data-config-field="theme"
                data-config-bool="true"
                ${e._config.theme==="dark"?"checked":""}
              />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${e._config.theme==="dark"?"Dark":"Light"}</span>
            </div>
          </label>
          <div class="field-span-2 settings-subsection">
            <div class="section-label">Yandex TTS</div>
            <div class="config-grid">
              ${df(e,"yandex_tts_api_key","API Key",e._config.yandex_tts_api_key,"AQVN...")}
              <label>
                <span>folderId</span>
                <input data-config-field="yandex_tts_folder_id" value="${w(e._config.yandex_tts_folder_id)}" placeholder="b1g..." />
              </label>
              <label>
                <span>Voice</span>
                <select data-config-field="yandex_tts_voice">
                  ${["oksana","jane","omazh","zahar","ermil","silaerkan","erkanyavas","alyss","nick","alena","filipp"].map(t=>`<option value="${t}" ${String(e._config.yandex_tts_voice??"")===t?"selected":""}>${t}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Speed</span>
                <input data-config-field="yandex_tts_speed" type="number" min="0.1" max="3" step="0.1" value="${w(e._config.yandex_tts_speed)}" />
              </label>
              <label>
                <span>Language</span>
                <select data-config-field="yandex_tts_lang">
                  ${["ru-RU","en-US","tr-TR"].map(t=>`<option value="${t}" ${String(e._config.yandex_tts_lang??"")===t?"selected":""}>${t}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Codec</span>
                <select data-config-field="yandex_tts_codec">
                  ${["oggopus","wav","lpcm"].map(t=>`<option value="${t}" ${String(e._config.yandex_tts_codec??"")===t?"selected":""}>${t}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Emotion</span>
                <select data-config-field="yandex_tts_emotion">
                  ${["good","neutral","evil"].map(t=>`<option value="${t}" ${String(e._config.yandex_tts_emotion??"")===t?"selected":""}>${t}</option>`).join("")}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <button type="button" class="ghost" data-action="reset-commands-cache">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448</button>
          <button type="button" class="primary" data-action="save" ${e._saving?"disabled":""}>${e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${e._error?`<div class="status error">${w(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${w(e._status)}</div>`:""}
      </section>
    `;var Ja=e=>{let t=e._scripts(),n=Array.isArray(e._config.scenarios)?e._config.scenarios:[],r=Math.max(1,Number(e._scenariosPageSize)||20),a=n.length,i=Math.max(1,Math.ceil(a/r)),o=Number(e._scenariosPage)||1,l=Math.min(Math.max(1,Math.trunc(o)),i);e._scenariosPage!==l&&(e._scenariosPage=l);let s=(l-1)*r,d=n.slice(s,s+r),m=Math.max(1,l-2),p=Math.min(i,m+4),g=[];for(let _=m;_<=p;_+=1)g.push(`
      <button
        type="button"
        class="${_===l?"primary compact-button":"ghost compact-button"}"
        data-action="scenarios-page"
        data-page="${_}"
        ${_===l?"disabled":""}
      >${_}</button>
    `);let S=d.length?d.map((_,N)=>{let f=e._expandedScenarios.has(_.id),u=_.conditions.map((c,y)=>`
            ${(()=>{let C=e._expandedConditions.has(c.id),k=[];c.parent_type&&k.push(`Parent: ${w(c.parent_type)}`),c.children_type_enabled&&c.children_type&&k.push(`Children: ${w(c.children_type)}`),c.children_direct_type_enabled&&c.children_direct_type&&k.push(`Children Direct: ${w(c.children_direct_type)}`);let I=k.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return`
            <div class="condition-card ${C?"expanded":"collapsed"}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${w(c.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ${y+1}</span>
                  <span class="condition-preview">${I}</span>
                </span>
                <span class="condition-header-side">
                  <span class="condition-accordion-icon">${C?"\u2212":"+"}</span>
                </span>
              </button>
              <div class="condition-body ${C?"open":"hidden"}">
                <div class="condition-actions">
                  ${_.conditions.length>1?`
                    <button
                      type="button"
                      class="ghost remove-inline-button"
                      data-scenario-id="${w(_.id)}"
                      data-remove-condition-id="${w(c.id)}"
                    >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                  `:""}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${w(_.id)}"
                      data-condition-id="${w(c.id)}"
                      data-condition-field="parent_type"
                      value="${w(c.parent_type)}"
                      placeholder="status_door"
                    />
                    <small>\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D children_type \u0432 \u044D\u0442\u043E\u043C \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0438.</small>
                  </div>
                  ${c.children_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-type"
                          data-scenario-id="${w(_.id)}"
                          data-condition-id="${w(c.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${w(_.id)}"
                        data-condition-id="${w(c.id)}"
                        data-condition-field="children_type"
                        value="${w(c.children_type??"")}"
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
                        data-scenario-id="${w(_.id)}"
                        data-condition-id="${w(c.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E parent_type.</small>
                    </div>
                  `}
                  ${c.children_direct_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-direct-type"
                          data-scenario-id="${w(_.id)}"
                          data-condition-id="${w(c.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${w(_.id)}"
                        data-condition-id="${w(c.id)}"
                        data-condition-field="children_direct_type"
                        value="${w(c.children_direct_type??"")}"
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
                        data-scenario-id="${w(_.id)}"
                        data-condition-id="${w(c.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `})()}
          `).join("");return`
            <section class="scenario-card ${f?"expanded":"collapsed"}" data-scenario-card-id="${w(_.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${w(_.id)}">
                  <span class="scenario-toggle-icon">${f?"\u2212":"+"}</span>
                  <span>
                    <span class="scenario-kicker">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${s+N+1}</span>
                    <span class="scenario-title">${w(_.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${w(_.id)}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
              </div>
              <div class="scenario-body ${f?"open":"hidden"}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430</span>
                    <input data-scenario-id="${w(_.id)}" data-scenario-field="name" value="${w(_.name)}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">\u0423\u0441\u043B\u043E\u0432\u0438\u044F</span>
                        <small>\u0427\u0435\u0440\u0435\u0437 <code>+</code> \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. \u0415\u0441\u043B\u0438 \u0432 <code>Parent Type</code> \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 <code>;</code>, \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${w(_.id)}">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                    </div>
                    <div class="conditions-list">${u}</div>
                  </div>
                  <label class="field-span-2">
                    <span>\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant</span>
                    <select data-scenario-id="${w(_.id)}" data-scenario-field="script_entity_id">
                      <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*</option>
                      ${t.map(c=>{let y=c.entity_id===_.script_entity_id?"selected":"",C=c.attributes.friendly_name||c.entity_id;return`<option value="${w(c.entity_id)}" ${y}>${w(C)} (${w(c.entity_id)})</option>`}).join("")}
                      <option value="timer" ${_.script_entity_id==="timer"?"selected":""}>\u0422\u0430\u0439\u043C\u0435\u0440 (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                      <option value="alarm" ${_.script_entity_id==="alarm"?"selected":""}>\u0411\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>
          `}).join(""):'<div class="empty">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u043B\u044E\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.</div>',b=a>r?`
      <section class="scenarios-pagination">
        <button
          type="button"
          class="ghost compact-button"
          data-action="scenarios-page-nav"
          data-direction="prev"
          ${l<=1?"disabled":""}
        >\u041D\u0430\u0437\u0430\u0434</button>
        <div class="scenarios-pagination-pages">
          ${g.join("")}
        </div>
        <button
          type="button"
          class="ghost compact-button"
          data-action="scenarios-page-nav"
          data-direction="next"
          ${l>=i?"disabled":""}
        >\u0412\u043F\u0435\u0440\u0435\u0434</button>
      </section>
      <div class="scenarios-pagination-meta">\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${d.length} \u0438\u0437 ${a} \u2022 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${l} \u0438\u0437 ${i}</div>
    `:"";return`
      <section class="hero-card">
        <h1>Scenarios</h1>
        <p>\u0417\u0434\u0435\u0441\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="add-scenario">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
          <button type="button" class="primary" data-action="save" ${e._saving?"disabled":""}>${e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${e._error?`<div class="status error">${w(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${w(e._status)}</div>`:""}
      </section>
      <div class="scenario-list">${S}</div>
      ${b}
      <section class="help-card">
        <div><strong>\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check   -H "Content-Type: application/json"   -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442</strong></div>
        <div>\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 <code>script.*</code> \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${w(nf)}</code></pre>
      </section>
    `};var Za=e=>e._timerAlarmLoaded?`
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `:(e._timerAlarmLoading||e._ensureTimerAlarmModule(),`
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">\u041C\u043E\u0434\u0443\u043B\u044C timer/alarm \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F...</div>
        </section>
      `);var uf=(e,t,n,r=999)=>{let a=t==="subVoice"?"subVoice":"subCommands",i=Array.isArray(e._yandexDraft?.[a])?e._yandexDraft[a]:[],o=i.length<r,l=String(e._yandexSubItemOpen?.[a]??"");return`
    <section class="condition-card">
      <div class="condition-title">${n}</div>
      <div class="condition-body open">
        ${i.length?i.map((s,d)=>{let m=String(s?.id??`${a}_${d}`),p=l===m,g=String(s?.text??"").trim()||"text";return`
            <details class="yandex-item-accordion" data-yandex-sub-item-accordion="${a}" data-yandex-sub-item-id="${w(m)}" ${p?"open":""}>
              <summary class="condition-title">${w(g)}</summary>
              <div class="yandex-sub-item-body">
                <div class="device-row">
                  <label class="field-grow">
                    <span>text</span>
                    <input
                      data-yandex-sub-field="text"
                      data-yandex-sub-type="${a}"
                      data-yandex-sub-index="${d}"
                      value="${w(s.text||"")}"
                      placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442"
                    />
                  </label>
                  <button type="button" class="ghost device-remove-button" data-action="remove-yandex-sub" data-sub-type="${a}" data-sub-index="${d}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                </div>
              </div>
            </details>
          `}).join(""):'<div class="condition-preview">\u041F\u0443\u0441\u0442\u043E</div>'}
        <div class="yandex-sub-add-row">
          <button
            type="button"
            class="secondary yandex-sub-add-button"
            data-action="add-yandex-sub"
            data-sub-type="${a}"
            ${o?"":"disabled"}
          >
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C
          </button>
        </div>
      </div>
    </section>
  `},sh=(e,t)=>{let n=String(e._yandexActiveScenarioKey??"").trim();return`
    <section class="hero-card">
      ${`
    <div class="yandex-tabs-toolbar">
      <label class="yandex-scenario-select">
        <span>\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439</span>
        <select data-action="select-yandex-tab-dropdown">
          ${t.map((a,i)=>{let o=String(a.mainCommand??"").trim(),l=a.mainCommand||`\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${i+1}`;return`<option value="${w(o)}" ${n===o?"selected":""}>${w(l)}</option>`}).join("")}
          <option value="__new__" ${n==="__new__"?"selected":""}>\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</option>
        </select>
      </label>
      <button type="button" class="subtab-button" data-action="create-yandex-tab" data-yandex-tab="__new__">+ \u041D\u043E\u0432\u044B\u0439</button>
    </div>
  `}
    </section>
  `},dh=e=>{let t=String(e._yandexActiveScenarioKey??"")==="__new__",n=t?"\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":String(e._yandexDraft?.mainCommand??"").trim()||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <section class="scenario-card expanded">
      <div class="condition-header">
        <div class="condition-heading">
          <span class="condition-title">${t?"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435":"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"}</span>
          <span class="scenario-title">${w(n)}</span>
        </div>
      </div>
      <div class="condition-body open">
        <div class="condition-grid">
          <label>
            <span>mainCommand *</span>
            <input data-yandex-field="mainCommand" value="${w(e._yandexDraft?.mainCommand||"")}" placeholder="\u0412\u043A\u043B\u044E\u0447\u0438 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u043B\u0438\u0446\u0430" />
          </label>
          <label>
            <span>voiceResponse</span>
            <input data-yandex-field="voiceResponse" value="${w(e._yandexDraft?.voiceResponse||"")}" placeholder="\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E" />
          </label>
          <label class="field-span-2">
            <span>accounts (\u0447\u0435\u0440\u0435\u0437 ;)</span>
            <input data-yandex-field="accounts" value="${w(e._yandexDraft?.accounts||"")}" placeholder="mihailhimei;another_account" />
          </label>
        </div>
        ${uf(e,"subVoice","subVoice (\u0434\u043E 3)",3)}
        ${uf(e,"subCommands","subCommands")}
        <div class="toolbar">
          <button type="button" class="primary" data-action="save-yandex-scenario" ${e._yandexSaving?"disabled":""}>${e._yandexSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
          ${t?"":`<button type="button" class="ghost" data-action="delete-yandex-scenario" ${e._yandexSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`}
        </div>
      </div>
    </section>
  `},ei=e=>{let t=Array.isArray(e._yandexScenarios)?e._yandexScenarios:[];return`
    <section class="hero-card">
      <h1>\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</h1>
      <p>\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: <code>homeassistant/yandex_intents.yaml</code>. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u0444\u043E\u0440\u043C\u0435 \u043D\u0438\u0436\u0435.</p>
      <div class="toolbar">
        <button type="button" class="ghost" data-action="reload-yandex-scenarios" ${e._yandexLoading?"disabled":""}>${e._yandexLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      </div>
      ${e._yandexStatus?`<div class="status ok">${w(e._yandexStatus)}</div>`:""}
      ${e._yandexError?`<div class="status error">${w(e._yandexError)}</div>`:""}
    </section>
    ${sh(e,t)}
    ${dh(e)}
  `};var cf=e=>e._activeTab==="logs"?Ga(e):e._activeTab==="scenarios"?Ja(e):e._activeTab==="create-scenario"?Ka():e._activeTab==="timer-alarm"?Za(e):e._activeTab==="json"?Qa(e):e._activeTab==="yandex-scenarios"?ei(e):Xa(e);var pf=(e,t)=>{let n=Math.max(1,Number(e._scenariosPageSize)||20),r=Array.isArray(e._config?.scenarios)?e._config.scenarios.length:0,a=Math.max(1,Math.ceil(r/n)),i=Number(t),o=Number.isFinite(i)?Math.trunc(i):1;return Math.min(Math.max(1,o),a)},ff=(e,t)=>{e._expandedScenarios.has(t)?e._expandedScenarios.delete(t):e._expandedScenarios.add(t),e._render()},mf=(e,t)=>{e._expandedConditions.has(t)?e._expandedConditions.delete(t):e._expandedConditions.add(t),e._render()},gf=(e,t,n,r=!1)=>{e._config={...e._config,[t]:n},t==="theme"&&e._applyTheme(),e._status="",e._error="",r&&e._render()},hf=e=>{e._deviceAccordionOpen=!e._deviceAccordionOpen,e._render()},_f=e=>{let t=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[];t.push(""),e._config={...e._config,timer_alarm_device_ids:t},e._status="",e._error="",e._render()},yf=(e,t,n)=>{let r=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""];r[t]=n,e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error=""},vf=(e,t)=>{let r=(Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""]).filter((a,i)=>i!==t);e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error="",e._render()},Sf=(e,t,n,r,a=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(i=>i.id===t?{...i,[n]:r}:i)},e._status="",e._error="",a&&e._render()},bf=(e,t,n,r,a,i=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(o=>o.id===t?{...o,conditions:o.conditions.map(l=>l.id===n?{...l,[r]:a}:l)}:o)},e._status="",e._error="",i&&e._render()},wf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(a=>a.id===n?{...a,children_type_enabled:!0,children_type:a.children_type??""}:a)}:r)},e._status="",e._error="",e._render()},Cf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(a=>a.id===n?{...a,children_type_enabled:!1,children_type:""}:a)}:r)},e._status="",e._error="",e._render()},Tf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(a=>a.id===n?{...a,children_direct_type_enabled:!0,children_direct_type:a.children_direct_type??""}:a)}:r)},e._status="",e._error="",e._render()},kf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(a=>a.id===n?{...a,children_direct_type_enabled:!1,children_direct_type:""}:a)}:r)},e._status="",e._error="",e._render()},If=(e,t)=>{let n=_n();e._expandedConditions.add(n.id),e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:[...r.conditions,n]}:r)},e._status="",e._error="",e._render()},Df=(e,t,n)=>{e._expandedConditions.delete(n),e._config={...e._config,scenarios:e._config.scenarios.map(r=>{if(r.id!==t)return r;let a=r.conditions.filter(i=>i.id!==n);return{...r,conditions:a.length?a:[_n()]}})},e._status="",e._error="",e._render()},Ef=e=>{let t=Date.now();if(t<e._addScenarioLockUntil)return;e._addScenarioLockUntil=t+300;let n=sf();e._expandedScenarios.add(n.id),e._config={...e._config,scenarios:[n,...e._config.scenarios]},e._scenariosPage=1,e._status="",e._render(),window.requestAnimationFrame(()=>e._scrollScenarioIntoView(n.id))},Af=(e,t)=>{let n=globalThis.CSS?.escape?globalThis.CSS.escape(t):t;e.shadowRoot.querySelector(`[data-scenario-card-id="${n}"]`)?.scrollIntoView({block:"start",behavior:"smooth"})},$f=(e,t)=>{e._expandedScenarios.delete(t),e._config={...e._config,scenarios:e._config.scenarios.filter(n=>n.id!==t)},e._scenariosPage=pf(e,e._scenariosPage),e._status="",e._render()},Mf=(e,t)=>{let n=pf(e,t);n!==e._scenariosPage&&(e._scenariosPage=n,e._render())};var xf=(e,t)=>{e._reactRoot=null,e._hass=null,e._config={...t},e._logs=[],e._activeTab="scenarios",e._expandedScenarios=new Set,e._expandedConditions=new Set,e._scenariosPage=1,e._scenariosPageSize=20,e._loaded=!1,e._loading=!1,e._saving=!1,e._loadingLogs=!1,e._error="",e._status="",e._logsTimer=null,e._timerAlarmLoaded=!1,e._timerAlarmLoading=!1,e._timerAlarmLoadPromise=null,e._deviceAccordionOpen=!0,e._addScenarioLockUntil=0,e._yandexLoaded=!1,e._yandexLoading=!1,e._yandexSaving=!1,e._yandexScenarios=[],e._yandexStatus="",e._yandexError="",e._yandexActiveScenarioKey="",e._yandexEditorOpen=!1,e._yandexDraft={},e._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},e._yandexSubItemOpen={subVoice:"",subCommands:""},e._visibleSecrets={timer_alarm_token:!1,yandex_tts_api_key:!1}};var Pf=`
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
`;var uh=({html:e})=>Nl.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Ll=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),xf(this,fr)}set hass(t){let n=!this._hass;if(this._hass=t,!this._loaded&&!this._loading){this._loadConfig();return}(n||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this._applyTheme(),this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Nf.createRoot)(this.shadowRoot)),(0,Lf.flushSync)(()=>{this._reactRoot.render(Nl.default.createElement(uh,{html:t}))})}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded){if(!this._timerAlarmLoadPromise){this._timerAlarmLoading=!0;let t=`${xl}${xl.includes("?")?"&":"?"}ts=${Date.now()}`;this._timerAlarmLoadPromise=import(t).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(n=>{this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})}return this._timerAlarmLoadPromise}}async _loadConfig(){this._loading=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...fr,...t,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(t.timer_alarm_device_ids??[]),scenarios:Array.isArray(t.scenarios)?t.scenarios.map(n=>this._normalizeScenarioForUi(n)):[]},this._applyTheme(),this._expandedScenarios=new Set,this._scenariosPage=1,this._error=""}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(t.logs)?t.logs:[]}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},rf)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("script.")).sort((t,n)=>{let r=t.attributes.friendly_name||t.entity_id,a=n.attributes.friendly_name||n.entity_id;return r.localeCompare(a,"ru")}):[]}_setActiveTab(t){this._activeTab=t,this._status="",this._error="",this._render(),t==="logs"?this._startLogsPolling():(this._stopLogsPolling(),t==="timer-alarm"&&this._ensureTimerAlarmModule(),t==="yandex-scenarios"&&this._loadYandexScenarios())}_newYandexSubItem(){return{id:globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,text:""}}_newYandexDraft(){return{mainCommand:"",voiceResponse:"",accounts:"",subVoice:[],subCommands:[]}}_normalizeYandexScenarioForUi(t){let n=r=>Array.isArray(r)?r.map(a=>({id:String(a?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}`)),text:String(a?.text??"").trim()})).filter(a=>a.text):[];return{id:String(t?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_${Date.now()}`)),mainCommand:String(t?.mainCommand??"").trim(),voiceResponse:String(t?.voiceResponse??"").trim(),accounts:String(t?.accounts??"").trim(),subVoice:n(t?.subVoice),subCommands:n(t?.subCommands)}}_cloneYandexDraft(t){let n=this._normalizeYandexScenarioForUi(t??{});return{...n,subVoice:Array.isArray(n.subVoice)?n.subVoice.map(r=>({...r})):[],subCommands:Array.isArray(n.subCommands)?n.subCommands.map(r=>({...r})):[]}}_yandexScenarioKey(t){return String(t?.mainCommand??"").trim()}_findYandexScenarioByKey(t){let n=String(t??"").trim();return this._yandexScenarios.find(r=>this._yandexScenarioKey(r)===n)||null}_syncYandexSelection(t=""){let n=String(t||this._yandexActiveScenarioKey||"").trim(),r=Array.isArray(this._yandexScenarios)?this._yandexScenarios:[];if(!r.length){this._yandexActiveScenarioKey="__new__",this._yandexDraft=this._newYandexDraft(),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""};return}let a=this._findYandexScenarioByKey(n)||r[0];this._yandexActiveScenarioKey=this._yandexScenarioKey(a),this._yandexDraft=this._cloneYandexDraft(a),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""}}async _loadYandexScenarios(){if(!(!this._hass||this._yandexLoading)){this._yandexLoading=!0,this._yandexError="",this._yandexLoaded||(this._yandexStatus=""),this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_yandex_scenarios"}),n=Array.isArray(t?.scenarios)?t.scenarios:[];this._yandexScenarios=n.map(r=>this._normalizeYandexScenarioForUi(r)),this._syncYandexSelection(),this._yandexLoaded=!0,this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B.",this._yandexError=""}catch(t){this._yandexError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C yandex_intents.yaml.",this._yandexStatus=""}finally{this._yandexLoading=!1,this._render()}}}_startYandexScenarioCreate(){this._yandexDraft=this._newYandexDraft(),this._yandexActiveScenarioKey="__new__",this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexStatus="",this._yandexError="",this._render()}_setYandexActiveScenario(t){let n=String(t??"").trim();if(!n)return;if(n==="__new__"){this._startYandexScenarioCreate();return}let r=this._findYandexScenarioByKey(n);r&&(this._yandexActiveScenarioKey=n,this._yandexDraft=this._cloneYandexDraft(r),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexError="",this._render())}_setYandexSubEditorOpen(t,n){let r=t==="subVoice"?"subVoice":"subCommands";this._yandexSubEditorsOpen={...this._yandexSubEditorsOpen||{},[r]:!!n}}_setYandexSubItemOpen(t,n){let r=t==="subVoice"?"subVoice":"subCommands";this._yandexSubItemOpen={...this._yandexSubItemOpen||{},[r]:String(n??"")}}_toggleYandexEditorAccordion(){this._yandexEditorOpen=!this._yandexEditorOpen,this._render()}_updateYandexDraftField(t,n,r=!1){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft()),this._yandexDraft={...this._yandexDraft,[t]:n},this._yandexError="",r&&this._render()}_addYandexDraftSubItem(t){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft());let n=t==="subVoice"?"subVoice":"subCommands",r=Array.isArray(this._yandexDraft[n])?[...this._yandexDraft[n]]:[];if(n==="subVoice"&&r.length>=3)return;let a=this._newYandexSubItem();r.push(a),this._yandexDraft={...this._yandexDraft,[n]:r},this._setYandexSubEditorOpen(n,!0),this._setYandexSubItemOpen(n,a.id),this._yandexError="",this._render()}_removeYandexDraftSubItem(t,n){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let r=t==="subVoice"?"subVoice":"subCommands",i=(Array.isArray(this._yandexDraft[r])?[...this._yandexDraft[r]]:[]).filter((l,s)=>s!==n);this._yandexDraft={...this._yandexDraft,[r]:i};let o=String(this._yandexSubItemOpen?.[r]??"");o&&!i.some(l=>String(l?.id??"")===o)&&this._setYandexSubItemOpen(r,""),this._yandexError="",this._render()}_updateYandexDraftSubItem(t,n,r,a,i=!1){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let o=t==="subVoice"?"subVoice":"subCommands",l=Array.isArray(this._yandexDraft[o])?[...this._yandexDraft[o]]:[];this._yandexDraft={...this._yandexDraft,[o]:l.map((s,d)=>d===n?{...s,[r]:a}:s)},this._yandexError="",i&&this._render()}_serializeYandexScenarioDraft(){let t=this._yandexDraft||this._newYandexDraft(),n=r=>(Array.isArray(r)?r:[]).map(a=>({text:String(a?.text??"").trim()})).filter(a=>a.text);return{mainCommand:String(t.mainCommand??"").trim(),voiceResponse:String(t.voiceResponse??"").trim(),accounts:String(t.accounts??"").trim(),subVoice:n(t.subVoice),subCommands:n(t.subCommands)}}async _saveYandexScenarioFromModal(){let t=this._serializeYandexScenarioDraft();if(!t.mainCommand){this._yandexError="\u041F\u043E\u043B\u0435 mainCommand \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E.",this._render();return}this._yandexSaving=!0,this._yandexError="",this._render();try{let n=String(this._yandexActiveScenarioKey??"").trim(),r=n&&n!=="__new__"?this._yandexScenarios.map(o=>this._yandexScenarioKey(o)===n?t:o):[...this._yandexScenarios,t],a=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:r}),i=Array.isArray(a?.scenarios)?a.scenarios:[];this._yandexScenarios=i.map(o=>this._normalizeYandexScenarioForUi(o)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u0438 \u0444\u0430\u0439\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection(t.mainCommand)}catch(n){this._yandexError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}async _deleteActiveYandexScenario(){let t=String(this._yandexActiveScenarioKey??"").trim();if(!(!t||t==="__new__")){this._yandexSaving=!0,this._yandexError="",this._render();try{let n=this._yandexScenarios.filter(i=>this._yandexScenarioKey(i)!==t),r=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:n}),a=Array.isArray(r?.scenarios)?r.scenarios:[];this._yandexScenarios=a.map(i=>this._normalizeYandexScenarioForUi(i)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection()}catch(n){this._yandexError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438\u0437 yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_renderSettings(){return Xa(this)}_toggleScenario(t){return ff(this,t)}_toggleCondition(t){return mf(this,t)}_updateConfigField(t,n,r=!1){return gf(this,t,n,r)}_isSecretVisible(t){return!!this._visibleSecrets?.[t]}_toggleSecretField(t){this._visibleSecrets={...this._visibleSecrets||{},[t]:!this._isSecretVisible(t)},this._render()}_normalizeTimerAlarmDeviceIdsForUi(t){let r=(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(a=>String(a??"").trim());return r.length?r:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(t=>t)}_toggleDeviceAccordion(){return hf(this)}_addTimerAlarmDeviceId(){return _f(this)}_updateTimerAlarmDeviceId(t,n){return yf(this,t,n)}_removeTimerAlarmDeviceId(t){return vf(this,t)}_updateScenario(t,n,r,a=!1){return Sf(this,t,n,r,a)}_normalizeScenarioForUi(t){let n=this._normalizeConditionsForUi(t);return{...t,conditions:n}}_serializeScenario(t){let n=(Array.isArray(t.conditions)?t.conditions:[]).flatMap(a=>this._serializeCondition(a)).filter(Boolean),r={id:t.id,name:t.name,script_entity_id:t.script_entity_id,conditions:n};return n.length===1&&(r.parent_type=n[0].parent_type??"",n[0].children_type&&(r.children_type=n[0].children_type),n[0].children_direct_type&&(r.children_direct_type=n[0].children_direct_type)),r}_normalizeConditionsForUi(t){if(Array.isArray(t.conditions)&&t.conditions.length)return t.conditions.map(l=>this._normalizeConditionForUi(l));let n=String(t.parent_type??"").split(";").map(l=>l.trim()),r=String(t.children_type??t.type??"").split(";").map(l=>l.trim()),a=this._normalizeChildrenDirectTypeForUi(t.children_direct_type),i=Math.max(n.length,r.length,a.length,1),o=[];for(let l=0;l<i;l+=1){let s=this._normalizeConditionForUi({parent_type:n[l]??"",children_type:r[l]??"",children_direct_type:a[l]??""});(s.parent_type||s.children_type_enabled||s.children_direct_type_enabled)&&o.push(s)}return o.length?o:[_n()]}_normalizeConditionForUi(t){let n=String(t.children_type??t.type??"").trim(),r=this._normalizeChildrenDirectTypeForUi(t.children_direct_type).join(";");return{id:String(t.id??Pl()),parent_type:String(t.parent_type??"").trim(),children_type:n,children_type_enabled:n!=="",children_direct_type:r,children_direct_type_enabled:r!==""}}_serializeCondition(t){let n=String(t.parent_type??"").trim(),r=String(t.children_type??"").trim(),a=String(t.children_direct_type??"").trim();if(!n&&!r&&!a)return[];let i=n.split(";").map(d=>d.trim()),o=r.split(";").map(d=>d.trim()),l=Math.max(i.length,o.length,1),s=[];for(let d=0;d<l;d+=1){let m=i[d]??"",p=o[d]??"";if(!m&&!p)continue;let g={parent_type:m};t.children_type_enabled&&p&&(g.children_type=p),t.children_direct_type_enabled&&a&&(g.children_direct_type=a),s.push(g)}return s}_updateCondition(t,n,r,a,i=!1){return bf(this,t,n,r,a,i)}_normalizeChildrenDirectTypeForUi(t){if(Array.isArray(t))return t.map(n=>typeof n=="string"?n.trim():n&&typeof n=="object"?String(n.mapping_type??n.mappingType??n.type??"").trim():"").filter(Boolean);if(t&&typeof t=="object"){let n=String(t.mapping_type??t.mappingType??t.type??"").trim();return n?[n]:[]}return String(t??"").split(";").map(n=>n.trim()).filter(Boolean)}_enableConditionChildrenType(t,n){return wf(this,t,n)}_disableConditionChildrenType(t,n){return Cf(this,t,n)}_enableConditionChildrenDirectType(t,n){return Tf(this,t,n)}_disableConditionChildrenDirectType(t,n){return kf(this,t,n)}_addCondition(t){return If(this,t)}_removeCondition(t,n){return Df(this,t,n)}_addScenario(){return Ef(this)}_scrollScenarioIntoView(t){return Af(this,t)}_removeScenario(t){return $f(this,t)}_setScenariosPage(t){return Mf(this,t)}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(n=>{let r=Array.isArray(n.conditions)?n.conditions:[];return r.length?!!r.find(i=>{let o=String(i.children_type??"").trim(),l=String(i.children_direct_type??"").trim();return!!(!String(i.parent_type??"").trim()&&!o&&!l||i.children_type_enabled&&!o||i.children_direct_type_enabled&&!l)})||!String(n.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,timer_alarm_token:this._config.timer_alarm_token,yandex_tts_api_key:this._config.yandex_tts_api_key,yandex_tts_folder_id:this._config.yandex_tts_folder_id,yandex_tts_lang:this._config.yandex_tts_lang,yandex_tts_codec:this._config.yandex_tts_codec,yandex_tts_voice:this._config.yandex_tts_voice,yandex_tts_emotion:this._config.yandex_tts_emotion,yandex_tts_speed:Number(this._config.yandex_tts_speed)||1.1,theme:this._config.theme,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(t=>this._serializeScenario(t))}}_downloadJson(){let t=this._buildConfigPayload(),n=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download="dialog-custom-ui-config.json",a.click(),URL.revokeObjectURL(r),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}async _importJsonFile(t){if(!t)return;try{let r=await t.text(),a=JSON.parse(r),i=Array.isArray(a.scenarios)?a.scenarios:[];this._config={...fr,...a,timeout:Number(a.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(a.timer_alarm_device_ids??[]),scenarios:i.map(o=>this._normalizeScenarioForUi(o))},this._applyTheme(),this._expandedScenarios=new Set(this._config.scenarios.map(o=>o.id)),this._scenariosPage=1,this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-json-input"]');n&&(n.value=""),this._render()}async _save(){let t=this._validate();if(t){this._error=t,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let n=this._buildConfigPayload();await this._hass.callWS({type:"dialog_custom_ui/save_config",...n});let r=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...fr,...r,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r.timer_alarm_device_ids??[]),scenarios:Array.isArray(r.scenarios)?r.scenarios.map(a=>this._normalizeScenarioForUi(a)):[]},this._applyTheme(),this._scenariosPage=1,this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(t){t.stopPropagation()}_bindEvents(){let t=this.shadowRoot;if(!t)return;let n=af(t);of(this,t,n),lf(this,t,n)}async _resetCommandsCache(){let t=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!t){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._status="",this._render();return}this._error="",this._status="",this._render();let n=`${t}/api/setting/commands`,r={};this._config.timer_alarm_token&&(r.Authorization=this._config.timer_alarm_token),r["Content-Type"]="application/json";try{let a=await fetch(n,{method:"POST",headers:r,body:JSON.stringify({clientId:String(this._config.client_id??"").trim()})});if((a.status===405||a.status===404)&&(a=await fetch(n,{method:"GET",headers:this._config.timer_alarm_token?{Authorization:this._config.timer_alarm_token}:{}})),!a.ok)throw new Error(`HTTP ${a.status}`);this._status="\u041A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434 \u0441\u0431\u0440\u043E\u0448\u0435\u043D."}catch(a){this._error=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434."}finally{this._render()}}_renderScenarios(){return Ja(this)}_renderLogs(){return Ga(this)}_renderTimerAlarm(){return Za(this)}_renderJsonTools(){return Qa(this)}_renderYandexScenarios(){return ei(this)}_renderCreateScenario(){return Ka()}_renderActiveTopLevelPage(){return cf(this)}_render(){let t=this._renderActiveTopLevelPage(),n=`
      ${Pf}
      <div class="page">
        <div class="hero">
          <section class="panel-shell">
            <div class="tabs">
              <button type="button" class="tab-button ${this._activeTab==="scenarios"?"active":""}" data-tab="scenarios">Scenarios</button>
              <button type="button" class="tab-button ${this._activeTab==="create-scenario"?"active":""}" data-tab="create-scenario">Create Scenario</button>
              <button type="button" class="tab-button ${this._activeTab==="timer-alarm"?"active":""}" data-tab="timer-alarm">Timer / Alarm</button>
              <button type="button" class="tab-button ${this._activeTab==="yandex-scenarios"?"active":""}" data-tab="yandex-scenarios">\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</button>
              <button type="button" class="tab-button ${this._activeTab==="json"?"active":""}" data-tab="json">JSON</button>
              <button type="button" class="tab-button ${this._activeTab==="logs"?"active":""}" data-tab="logs">Logs</button>
              <button type="button" class="tab-button ${this._activeTab==="settings"?"active":""}" data-tab="settings">Settings</button>
            </div>
            ${t}
          </section>
        </div>
      </div>
    `;this._mountReact(n),this._bindEvents(),this._syncEmbeddedTimerAlarmHass()}_syncEmbeddedTimerAlarmHass(){if(!this._hass||!this.shadowRoot)return;let t=this.shadowRoot.querySelector("dialog-custom-ui-timer-alarm");t&&(t.hass=this._hass,t.config={theme:this._config.theme})}};customElements.get("dialog-custom-ui-panel")||customElements.define("dialog-custom-ui-panel",Ll);
