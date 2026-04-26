var zf=Object.create;var zl=Object.defineProperty;var Rf=Object.getOwnPropertyDescriptor;var Of=Object.getOwnPropertyNames;var Uf=Object.getPrototypeOf,Ff=Object.prototype.hasOwnProperty;var wt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Of(t))!Ff.call(e,i)&&i!==n&&zl(e,i,{get:()=>t[i],enumerable:!(r=Rf(t,i))||r.enumerable});return e};var Ut=(e,t,n)=>(n=e!=null?zf(Uf(e)):{},jf(t||!e||!e.__esModule?zl(n,"default",{value:e,enumerable:!0}):n,e));var Kl=wt(A=>{"use strict";var _n=Symbol.for("react.element"),Bf=Symbol.for("react.portal"),Vf=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),Yf=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),Wf=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Gf=Symbol.for("react.memo"),Xf=Symbol.for("react.lazy"),Rl=Symbol.iterator;function Jf(e){return e===null||typeof e!="object"?null:(e=Rl&&e[Rl]||e["@@iterator"],typeof e=="function"?e:null)}var Fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Bl={};function Ft(e,t,n){this.props=e,this.context=t,this.refs=Bl,this.updater=n||Fl}Ft.prototype.isReactComponent={};Ft.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vl(){}Vl.prototype=Ft.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=Bl,this.updater=n||Fl}var ra=na.prototype=new Vl;ra.constructor=na;jl(ra,Ft.prototype);ra.isPureReactComponent=!0;var Ol=Array.isArray,Hl=Object.prototype.hasOwnProperty,ia={current:null},Yl={key:!0,ref:!0,__self:!0,__source:!0};function ql(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Hl.call(t,r)&&!Yl.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_n,type:e,key:a,ref:o,props:i,_owner:ia.current}}function Zf(e,t){return{$$typeof:_n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===_n}function em(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ul=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?em(""+e.key):t.toString(36)}function gr(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _n:case Bf:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ta(o,0):r,Ol(i)?(n="",e!=null&&(n=e.replace(Ul,"$&/")+"/"),gr(i,t,n,"",function(d){return d})):i!=null&&(aa(i)&&(i=Zf(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ul,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ol(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+ta(a,l);o+=gr(a,t,n,s,i)}else if(s=Jf(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+ta(a,l++),o+=gr(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return gr(e,r,"","",function(a){return t.call(n,a,i++)}),r}function tm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},hr={transition:null},nm={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:hr,ReactCurrentOwner:ia};function Wl(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Ft;A.Fragment=Vf;A.Profiler=Yf;A.PureComponent=na;A.StrictMode=Hf;A.Suspense=Qf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;A.act=Wl;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jl({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Hl.call(t,s)&&!Yl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:_n,type:e.type,key:i,ref:a,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:Wf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qf,_context:e},e.Consumer=e};A.createElement=ql;A.createFactory=function(e){var t=ql.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Kf,render:e}};A.isValidElement=aa;A.lazy=function(e){return{$$typeof:Xf,_payload:{_status:-1,_result:e},_init:tm}};A.memo=function(e,t){return{$$typeof:Gf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=hr.transition;hr.transition={};try{e()}finally{hr.transition=t}};A.unstable_act=Wl;A.useCallback=function(e,t){return ae.current.useCallback(e,t)};A.useContext=function(e){return ae.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};A.useEffect=function(e,t){return ae.current.useEffect(e,t)};A.useId=function(){return ae.current.useId()};A.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ae.current.useMemo(e,t)};A.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};A.useRef=function(e){return ae.current.useRef(e)};A.useState=function(e){return ae.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return ae.current.useTransition()};A.version="18.3.1"});var yr=wt((ph,Ql)=>{"use strict";Ql.exports=Kl()});var as=wt(P=>{"use strict";function da(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<_r(i,t))e[r]=t,e[n]=i,n=r;else break e}}function Ee(e){return e.length===0?null:e[0]}function Sr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var o=2*(r+1)-1,l=e[o],s=o+1,d=e[s];if(0>_r(l,n))s<i&&0>_r(d,l)?(e[r]=d,e[s]=n,r=s):(e[r]=l,e[o]=n,r=o);else if(s<i&&0>_r(d,n))e[r]=d,e[s]=n,r=s;else break e}}return t}function _r(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Gl=performance,P.unstable_now=function(){return Gl.now()}):(oa=Date,Xl=oa.now(),P.unstable_now=function(){return oa.now()-Xl});var Gl,oa,Xl,ze=[],tt=[],rm=1,Se=null,Z=3,br=!1,Ct=!1,Sn=!1,es=typeof setTimeout=="function"?setTimeout:null,ts=typeof clearTimeout=="function"?clearTimeout:null,Jl=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ua(e){for(var t=Ee(tt);t!==null;){if(t.callback===null)Sr(tt);else if(t.startTime<=e)Sr(tt),t.sortIndex=t.expirationTime,da(ze,t);else break;t=Ee(tt)}}function ca(e){if(Sn=!1,ua(e),!Ct)if(Ee(ze)!==null)Ct=!0,fa(pa);else{var t=Ee(tt);t!==null&&ma(ca,t.startTime-e)}}function pa(e,t){Ct=!1,Sn&&(Sn=!1,ts(bn),bn=-1),br=!0;var n=Z;try{for(ua(t),Se=Ee(ze);Se!==null&&(!(Se.expirationTime>t)||e&&!is());){var r=Se.callback;if(typeof r=="function"){Se.callback=null,Z=Se.priorityLevel;var i=r(Se.expirationTime<=t);t=P.unstable_now(),typeof i=="function"?Se.callback=i:Se===Ee(ze)&&Sr(ze),ua(t)}else Sr(ze);Se=Ee(ze)}if(Se!==null)var a=!0;else{var o=Ee(tt);o!==null&&ma(ca,o.startTime-t),a=!1}return a}finally{Se=null,Z=n,br=!1}}var wr=!1,vr=null,bn=-1,ns=5,rs=-1;function is(){return!(P.unstable_now()-rs<ns)}function la(){if(vr!==null){var e=P.unstable_now();rs=e;var t=!0;try{t=vr(!0,e)}finally{t?vn():(wr=!1,vr=null)}}else wr=!1}var vn;typeof Jl=="function"?vn=function(){Jl(la)}:typeof MessageChannel<"u"?(sa=new MessageChannel,Zl=sa.port2,sa.port1.onmessage=la,vn=function(){Zl.postMessage(null)}):vn=function(){es(la,0)};var sa,Zl;function fa(e){vr=e,wr||(wr=!0,vn())}function ma(e,t){bn=es(function(){e(P.unstable_now())},t)}P.unstable_IdlePriority=5;P.unstable_ImmediatePriority=1;P.unstable_LowPriority=4;P.unstable_NormalPriority=3;P.unstable_Profiling=null;P.unstable_UserBlockingPriority=2;P.unstable_cancelCallback=function(e){e.callback=null};P.unstable_continueExecution=function(){Ct||br||(Ct=!0,fa(pa))};P.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ns=0<e?Math.floor(1e3/e):5};P.unstable_getCurrentPriorityLevel=function(){return Z};P.unstable_getFirstCallbackNode=function(){return Ee(ze)};P.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};P.unstable_pauseExecution=function(){};P.unstable_requestPaint=function(){};P.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};P.unstable_scheduleCallback=function(e,t,n){var r=P.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:rm++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,da(tt,e),Ee(ze)===null&&e===Ee(tt)&&(Sn?(ts(bn),bn=-1):Sn=!0,ma(ca,n-r))):(e.sortIndex=i,da(ze,e),Ct||br||(Ct=!0,fa(pa))),e};P.unstable_shouldYield=is;P.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var ls=wt((mh,os)=>{"use strict";os.exports=as()});var cc=wt(ve=>{"use strict";var im=yr(),ye=ls();function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var md=new Set,Vn={};function zt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)md.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ra=Object.prototype.hasOwnProperty,am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ss={},ds={};function om(e){return Ra.call(ds,e)?!0:Ra.call(ss,e)?!1:am.test(e)?ds[e]=!0:(ss[e]=!0,!1)}function lm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sm(e,t,n,r){if(t===null||typeof t>"u"||lm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var $o=/[\-:]([a-z])/g;function Mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($o,Mo);J[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($o,Mo);J[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($o,Mo);J[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function xo(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sm(t,n,i,r)&&(n=null),r||i===null?om(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),Po=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),hd=Symbol.for("react.context"),Lo=Symbol.for("react.forward_ref"),Ua=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),No=Symbol.for("react.memo"),rt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var yd=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var us=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,ga;function $n(e){if(ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||""}return`
`+ga+e}var ha=!1;function ya(e,t){if(!e||ha)return"";ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{ha=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$n(e):""}function dm(e){switch(e.tag){case 5:return $n(e.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return e=ya(e.type,!1),e;case 11:return e=ya(e.type.render,!1),e;case 1:return e=ya(e.type,!0),e;default:return""}}function ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case Oa:return"Profiler";case Po:return"StrictMode";case Ua:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hd:return(e.displayName||"Context")+".Consumer";case gd:return(e._context.displayName||"Context")+".Provider";case Lo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case No:return t=e.displayName||null,t!==null?t:ja(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return ja(e(t))}catch{}}return null}function um(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ja(t);case 8:return t===Po?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cm(e){var t=_d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=cm(e))}function vd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_d(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ba(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sd(e,t){t=t.checked,t!=null&&xo(e,"checked",t,!1)}function Va(e,t){Sd(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ha(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ha(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ha(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(Mn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function bd(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,Cd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pm=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){pm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function kd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fm=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function Ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,nn=null,rn=null;function gs(e){if(e=sr(e)){if(typeof Ga!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Di(t),Ga(e.stateNode,e.type,t))}}function Dd(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Id(){if(nn){var e=nn,t=rn;if(rn=nn=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function Ed(e,t){return e(t)}function Ad(){}var _a=!1;function $d(e,t,n){if(_a)return e(t,n);_a=!0;try{return Ed(e,t,n)}finally{_a=!1,(nn!==null||rn!==null)&&(Ad(),Id())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var Xa=!1;if(Qe)try{jt={},Object.defineProperty(jt,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",jt,jt),window.removeEventListener("test",jt,jt)}catch{Xa=!1}var jt;function mm(e,t,n,r,i,a,o,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Nn=!1,Zr=null,ei=!1,Ja=null,gm={onError:function(e){Nn=!0,Zr=e}};function hm(e,t,n,r,i,a,o,l,s){Nn=!1,Zr=null,mm.apply(gm,arguments)}function ym(e,t,n,r,i,a,o,l,s){if(hm.apply(this,arguments),Nn){if(Nn){var d=Zr;Nn=!1,Zr=null}else throw Error(v(198));ei||(ei=!0,Ja=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hs(e){if(Rt(e)!==e)throw Error(v(188))}function _m(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return hs(i),e;if(a===r)return hs(i),t;a=a.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function xd(e){return e=_m(e),e!==null?Pd(e):null}function Pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pd(e);if(t!==null)return t;e=e.sibling}return null}var Ld=ye.unstable_scheduleCallback,ys=ye.unstable_cancelCallback,vm=ye.unstable_shouldYield,Sm=ye.unstable_requestPaint,V=ye.unstable_now,bm=ye.unstable_getCurrentPriorityLevel,Ro=ye.unstable_ImmediatePriority,Nd=ye.unstable_UserBlockingPriority,ti=ye.unstable_NormalPriority,wm=ye.unstable_LowPriority,zd=ye.unstable_IdlePriority,wi=null,Fe=null;function Cm(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:Dm,Tm=Math.log,km=Math.LN2;function Dm(e){return e>>>=0,e===0?32:31-(Tm(e)/km|0)|0}var Dr=64,Ir=4194304;function xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=xn(l):(a&=o,a!==0&&(r=xn(a)))}else o=n&~i,o!==0?r=xn(o):a!==0&&(r=xn(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pe(t),i=1<<n,r|=e[n],t&=~i;return r}function Im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Em(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Pe(a),l=1<<o,s=i[o];s===-1?((l&n)===0||(l&r)!==0)&&(i[o]=Im(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rd(){var e=Dr;return Dr<<=1,(Dr&4194240)===0&&(Dr=64),e}function va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pe(t),e[t]=n}function Am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pe(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Oo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var x=0;function Od(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ud,Uo,Fd,jd,Bd,eo=!1,Er=[],dt=null,ut=null,ct=null,qn=new Map,Wn=new Map,at=[],$m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _s(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Cn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&Uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mm(e,t,n,r,i){switch(t){case"focusin":return dt=Cn(dt,e,t,n,r,i),!0;case"dragenter":return ut=Cn(ut,e,t,n,r,i),!0;case"mouseover":return ct=Cn(ct,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qn.set(a,Cn(qn.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Wn.set(a,Cn(Wn.get(a)||null,e,t,n,r,i)),!0}return!1}function Vd(e){var t=Dt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Md(n),t!==null){e.blockedOn=t,Bd(e.priority,function(){Fd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=to(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return t=sr(n),t!==null&&Uo(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){Br(e)&&n.delete(t)}function xm(){eo=!1,dt!==null&&Br(dt)&&(dt=null),ut!==null&&Br(ut)&&(ut=null),ct!==null&&Br(ct)&&(ct=null),qn.forEach(vs),Wn.forEach(vs)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,eo||(eo=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,xm)))}function Kn(e){function t(i){return Tn(i,e)}if(0<Er.length){Tn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Tn(dt,e),ut!==null&&Tn(ut,e),ct!==null&&Tn(ct,e),qn.forEach(t),Wn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)Vd(n),n.blockedOn===null&&at.shift()}var an=Ze.ReactCurrentBatchConfig,ri=!0;function Pm(e,t,n,r){var i=x,a=an.transition;an.transition=null;try{x=1,Fo(e,t,n,r)}finally{x=i,an.transition=a}}function Lm(e,t,n,r){var i=x,a=an.transition;an.transition=null;try{x=4,Fo(e,t,n,r)}finally{x=i,an.transition=a}}function Fo(e,t,n,r){if(ri){var i=to(e,t,n,r);if(i===null)Da(e,t,r,ii,n),_s(e,r);else if(Mm(i,e,t,n,r))r.stopPropagation();else if(_s(e,r),t&4&&-1<$m.indexOf(e)){for(;i!==null;){var a=sr(i);if(a!==null&&Ud(a),a=to(e,t,n,r),a===null&&Da(e,t,r,ii,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var ii=null;function to(e,t,n,r){if(ii=null,e=zo(r),e=Dt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bm()){case Ro:return 1;case Nd:return 4;case ti:case wm:return 16;case zd:return 536870912;default:return 16}default:return 16}}var lt=null,jo=null,Vr=null;function Yd(){if(Vr)return Vr;var e,t=jo,n=t.length,r,i="value"in lt?lt.value:lt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Vr=i.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function Ss(){return!1}function _e(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ar:Ss,this.isPropagationStopped=Ss,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=_e(gn),lr=j({},gn,{view:0,detail:0}),Nm=_e(lr),Sa,ba,kn,Ci=j({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Sa=e.screenX-kn.screenX,ba=e.screenY-kn.screenY):ba=Sa=0,kn=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),bs=_e(Ci),zm=j({},Ci,{dataTransfer:0}),Rm=_e(zm),Om=j({},lr,{relatedTarget:0}),wa=_e(Om),Um=j({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=_e(Um),jm=j({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=_e(jm),Vm=j({},gn,{data:0}),ws=_e(Vm),Hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ym={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qm[e])?!!t[e]:!1}function Vo(){return Wm}var Km=j({},lr,{key:function(e){if(e.key){var t=Hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ym[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vo,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qm=_e(Km),Gm=j({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=_e(Gm),Xm=j({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vo}),Jm=_e(Xm),Zm=j({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),eg=_e(Zm),tg=j({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=_e(tg),rg=[9,13,27,32],Ho=Qe&&"CompositionEvent"in window,zn=null;Qe&&"documentMode"in document&&(zn=document.documentMode);var ig=Qe&&"TextEvent"in window&&!zn,qd=Qe&&(!Ho||zn&&8<zn&&11>=zn),Ts=" ",ks=!1;function Wd(e,t){switch(e){case"keyup":return rg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function ag(e,t){switch(e){case"compositionend":return Kd(t);case"keypress":return t.which!==32?null:(ks=!0,Ts);case"textInput":return e=t.data,e===Ts&&ks?null:e;default:return null}}function og(e,t){if(Yt)return e==="compositionend"||!Ho&&Wd(e,t)?(e=Yd(),Vr=jo=lt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qd&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function Qd(e,t,n,r){Dd(r),t=ai(t,"onChange"),0<t.length&&(n=new Bo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Qn=null;function sg(e){ou(e,0)}function Ti(e){var t=Kt(e);if(vd(t))return e}function dg(e,t){if(e==="change")return t}var Gd=!1;Qe&&(Qe?(Mr="oninput"in document,Mr||(Ca=document.createElement("div"),Ca.setAttribute("oninput","return;"),Mr=typeof Ca.oninput=="function"),$r=Mr):$r=!1,Gd=$r&&(!document.documentMode||9<document.documentMode));var $r,Mr,Ca;function Is(){Rn&&(Rn.detachEvent("onpropertychange",Xd),Qn=Rn=null)}function Xd(e){if(e.propertyName==="value"&&Ti(Qn)){var t=[];Qd(t,Qn,e,zo(e)),$d(sg,t)}}function ug(e,t,n){e==="focusin"?(Is(),Rn=t,Qn=n,Rn.attachEvent("onpropertychange",Xd)):e==="focusout"&&Is()}function cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Qn)}function pg(e,t){if(e==="click")return Ti(t)}function fg(e,t){if(e==="input"||e==="change")return Ti(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:mg;function Gn(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ra.call(t,i)||!Ne(e[i],t[i]))return!1}return!0}function Es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function As(e,t){var n=Es(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Es(n)}}function Jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=Zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jd(n.ownerDocument.documentElement,n)){if(r!==null&&Yo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=As(n,a);var o=As(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hg=Qe&&"documentMode"in document&&11>=document.documentMode,qt=null,no=null,On=null,ro=!1;function $s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ro||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&Yo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Gn(On,r)||(On=r,r=ai(no,"onSelect"),0<r.length&&(t=new Bo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Ta={},eu={};Qe&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ki(e){if(Ta[e])return Ta[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return Ta[e]=t[n];return e}var tu=ki("animationend"),nu=ki("animationiteration"),ru=ki("animationstart"),iu=ki("transitionend"),au=new Map,Ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){au.set(e,t),zt(t,[e])}for(Pr=0;Pr<Ms.length;Pr++)Lr=Ms[Pr],xs=Lr.toLowerCase(),Ps=Lr[0].toUpperCase()+Lr.slice(1),vt(xs,"on"+Ps);var Lr,xs,Ps,Pr;vt(tu,"onAnimationEnd");vt(nu,"onAnimationIteration");vt(ru,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(iu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function Ls(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ym(r,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Ls(i,l,d),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,d=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Ls(i,l,d),a=s}}}if(ei)throw e=Ja,ei=!1,Ja=null,e}function z(e,t){var n=t[so];n===void 0&&(n=t[so]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function ka(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Nr]){e[Nr]=!0,md.forEach(function(n){n!=="selectionchange"&&(yg.has(n)||ka(n,!1,e),ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,ka("selectionchange",!1,t))}}function lu(e,t,n,r){switch(Hd(t)){case 1:var i=Pm;break;case 4:i=Lm;break;default:i=Fo}n=i.bind(null,t,n,e),i=void 0,!Xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dt(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}$d(function(){var d=a,m=zo(n),p=[];e:{var g=au.get(e);if(g!==void 0){var S=Bo,b=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":S=Qm;break;case"focusin":b="focus",S=wa;break;case"focusout":b="blur",S=wa;break;case"beforeblur":case"afterblur":S=wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Rm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Jm;break;case tu:case nu:case ru:S=Fm;break;case iu:S=eg;break;case"scroll":S=Nm;break;case"wheel":S=ng;break;case"copy":case"cut":case"paste":S=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Cs}var y=(t&4)!==0,N=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var u=d,c;u!==null;){c=u;var _=c.stateNode;if(c.tag===5&&_!==null&&(c=_,f!==null&&(_=Yn(u,f),_!=null&&y.push(Jn(u,_,c)))),N)break;u=u.return}0<y.length&&(g=new S(g,b,null,n,m),p.push({event:g,listeners:y}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Qa&&(b=n.relatedTarget||n.fromElement)&&(Dt(b)||b[Ge]))break e;if((S||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,S?(b=n.relatedTarget||n.toElement,S=d,b=b?Dt(b):null,b!==null&&(N=Rt(b),b!==N||b.tag!==5&&b.tag!==6)&&(b=null)):(S=null,b=d),S!==b)){if(y=bs,_="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Cs,_="onPointerLeave",f="onPointerEnter",u="pointer"),N=S==null?g:Kt(S),c=b==null?g:Kt(b),g=new y(_,u+"leave",S,n,m),g.target=N,g.relatedTarget=c,_=null,Dt(m)===d&&(y=new y(f,u+"enter",b,n,m),y.target=c,y.relatedTarget=N,_=y),N=_,S&&b)t:{for(y=S,f=b,u=0,c=y;c;c=Bt(c))u++;for(c=0,_=f;_;_=Bt(_))c++;for(;0<u-c;)y=Bt(y),u--;for(;0<c-u;)f=Bt(f),c--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Bt(y),f=Bt(f)}y=null}else y=null;S!==null&&Ns(p,g,S,y,!1),b!==null&&N!==null&&Ns(p,N,b,y,!0)}}e:{if(g=d?Kt(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var w=dg;else if(Ds(g))if(Gd)w=fg;else{w=cg;var k=ug}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=pg);if(w&&(w=w(e,d))){Qd(p,w,n,m);break e}k&&k(e,g,d),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Ha(g,"number",g.value)}switch(k=d?Kt(d):window,e){case"focusin":(Ds(k)||k.contentEditable==="true")&&(qt=k,no=d,On=null);break;case"focusout":On=no=qt=null;break;case"mousedown":ro=!0;break;case"contextmenu":case"mouseup":case"dragend":ro=!1,$s(p,n,m);break;case"selectionchange":if(hg)break;case"keydown":case"keyup":$s(p,n,m)}var D;if(Ho)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Yt?Wd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qd&&n.locale!=="ko"&&(Yt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Yt&&(D=Yd()):(lt=m,jo="value"in lt?lt.value:lt.textContent,Yt=!0)),k=ai(d,E),0<k.length&&(E=new ws(E,e,null,n,m),p.push({event:E,listeners:k}),D?E.data=D:(D=Kd(n),D!==null&&(E.data=D)))),(D=ig?ag(e,n):og(e,n))&&(d=ai(d,"onBeforeInput"),0<d.length&&(m=new ws("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=D))}ou(p,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Yn(e,n),a!=null&&r.unshift(Jn(e,a,i)),a=Yn(e,t),a!=null&&r.push(Jn(e,a,i))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ns(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=Yn(n,a),s!=null&&o.unshift(Jn(n,s,l))):i||(s=Yn(n,a),s!=null&&o.push(Jn(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _g=/\r\n?/g,vg=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(_g,`
`).replace(vg,"")}function zr(e,t,n){if(t=zs(t),zs(e)!==t&&n)throw Error(v(425))}function oi(){}var io=null,ao=null;function oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lo=typeof setTimeout=="function"?setTimeout:void 0,Sg=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(wg)}:lo;function wg(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Os(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+hn,Zn="__reactProps$"+hn,Ge="__reactContainer$"+hn,so="__reactEvents$"+hn,Cg="__reactListeners$"+hn,Tg="__reactHandles$"+hn;function Dt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Os(e);e!==null;){if(n=e[Ue])return n;e=Os(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[Ue]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Di(e){return e[Zn]||null}var uo=[],Qt=-1;function St(e){return{current:e}}function R(e){0>Qt||(e.current=uo[Qt],uo[Qt]=null,Qt--)}function L(e,t){Qt++,uo[Qt]=e.current,e.current=t}var _t={},re=St(_t),ce=St(!1),Mt=_t;function dn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function li(){R(ce),R(re)}function Us(e,t,n){if(re.current!==_t)throw Error(v(168));L(re,t),L(ce,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(v(108,um(e)||"Unknown",i));return j({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Mt=re.current,L(re,e),L(ce,ce.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=su(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,R(ce),R(re),L(re,e)):R(ce),L(ce,n)}var Ye=null,Ii=!1,Ea=!1;function du(e){Ye===null?Ye=[e]:Ye.push(e)}function kg(e){Ii=!0,du(e)}function bt(){if(!Ea&&Ye!==null){Ea=!0;var e=0,t=x;try{var n=Ye;for(x=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ii=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),Ld(Ro,bt),i}finally{x=t,Ea=!1}}return null}var Gt=[],Xt=0,di=null,ui=0,be=[],we=0,xt=null,qe=1,We="";function Tt(e,t){Gt[Xt++]=ui,Gt[Xt++]=di,di=e,ui=t}function uu(e,t,n){be[we++]=qe,be[we++]=We,be[we++]=xt,xt=e;var r=qe;e=We;var i=32-Pe(r)-1;r&=~(1<<i),n+=1;var a=32-Pe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qe=1<<32-Pe(t)+i|n<<i|r,We=a+e}else qe=1<<a|n<<i|r,We=e}function qo(e){e.return!==null&&(Tt(e,1),uu(e,1,0))}function Wo(e){for(;e===di;)di=Gt[--Xt],Gt[Xt]=null,ui=Gt[--Xt],Gt[Xt]=null;for(;e===xt;)xt=be[--we],be[we]=null,We=be[--we],be[we]=null,qe=be[--we],be[we]=null}var he=null,ge=null,O=!1,xe=null;function cu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,ge=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xt!==null?{id:qe,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,ge=null,!0):!1;default:return!1}}function co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function po(e){if(O){var t=ge;if(t){var n=t;if(!js(e,t)){if(co(e))throw Error(v(418));t=pt(n.nextSibling);var r=he;t&&js(e,t)?cu(r,n):(e.flags=e.flags&-4097|2,O=!1,he=e)}}else{if(co(e))throw Error(v(418));e.flags=e.flags&-4097|2,O=!1,he=e}}}function Bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function Rr(e){if(e!==he)return!1;if(!O)return Bs(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oo(e.type,e.memoizedProps)),t&&(t=ge)){if(co(e))throw pu(),Error(v(418));for(;t;)cu(e,t),t=pt(t.nextSibling)}if(Bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=he?pt(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=ge;e;)e=pt(e.nextSibling)}function un(){ge=he=null,O=!1}function Ko(e){xe===null?xe=[e]:xe.push(e)}var Dg=Ze.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vs(e){var t=e._init;return t(e._payload)}function fu(e){function t(f,u){if(e){var c=f.deletions;c===null?(f.deletions=[u],f.flags|=16):c.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=ht(f,u),f.index=0,f.sibling=null,f}function a(f,u,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<u?(f.flags|=2,u):c):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,c,_){return u===null||u.tag!==6?(u=Na(c,f.mode,_),u.return=f,u):(u=i(u,c),u.return=f,u)}function s(f,u,c,_){var w=c.type;return w===Ht?m(f,u,c.props.children,_,c.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&Vs(w)===u.type)?(_=i(u,c.props),_.ref=Dn(f,u,c),_.return=f,_):(_=Xr(c.type,c.key,c.props,null,f.mode,_),_.ref=Dn(f,u,c),_.return=f,_)}function d(f,u,c,_){return u===null||u.tag!==4||u.stateNode.containerInfo!==c.containerInfo||u.stateNode.implementation!==c.implementation?(u=za(c,f.mode,_),u.return=f,u):(u=i(u,c.children||[]),u.return=f,u)}function m(f,u,c,_,w){return u===null||u.tag!==7?(u=$t(c,f.mode,_,w),u.return=f,u):(u=i(u,c),u.return=f,u)}function p(f,u,c){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Na(""+u,f.mode,c),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Cr:return c=Xr(u.type,u.key,u.props,null,f.mode,c),c.ref=Dn(f,null,u),c.return=f,c;case Vt:return u=za(u,f.mode,c),u.return=f,u;case rt:var _=u._init;return p(f,_(u._payload),c)}if(Mn(u)||wn(u))return u=$t(u,f.mode,c,null),u.return=f,u;Or(f,u)}return null}function g(f,u,c,_){var w=u!==null?u.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return w!==null?null:l(f,u,""+c,_);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Cr:return c.key===w?s(f,u,c,_):null;case Vt:return c.key===w?d(f,u,c,_):null;case rt:return w=c._init,g(f,u,w(c._payload),_)}if(Mn(c)||wn(c))return w!==null?null:m(f,u,c,_,null);Or(f,c)}return null}function S(f,u,c,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(c)||null,l(u,f,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Cr:return f=f.get(_.key===null?c:_.key)||null,s(u,f,_,w);case Vt:return f=f.get(_.key===null?c:_.key)||null,d(u,f,_,w);case rt:var k=_._init;return S(f,u,c,k(_._payload),w)}if(Mn(_)||wn(_))return f=f.get(c)||null,m(u,f,_,w,null);Or(u,_)}return null}function b(f,u,c,_){for(var w=null,k=null,D=u,E=u=0,W=null;D!==null&&E<c.length;E++){D.index>E?(W=D,D=null):W=D.sibling;var M=g(f,D,c[E],_);if(M===null){D===null&&(D=W);break}e&&D&&M.alternate===null&&t(f,D),u=a(M,u,E),k===null?w=M:k.sibling=M,k=M,D=W}if(E===c.length)return n(f,D),O&&Tt(f,E),w;if(D===null){for(;E<c.length;E++)D=p(f,c[E],_),D!==null&&(u=a(D,u,E),k===null?w=D:k.sibling=D,k=D);return O&&Tt(f,E),w}for(D=r(f,D);E<c.length;E++)W=S(D,f,E,c[E],_),W!==null&&(e&&W.alternate!==null&&D.delete(W.key===null?E:W.key),u=a(W,u,E),k===null?w=W:k.sibling=W,k=W);return e&&D.forEach(function(et){return t(f,et)}),O&&Tt(f,E),w}function y(f,u,c,_){var w=wn(c);if(typeof w!="function")throw Error(v(150));if(c=w.call(c),c==null)throw Error(v(151));for(var k=w=null,D=u,E=u=0,W=null,M=c.next();D!==null&&!M.done;E++,M=c.next()){D.index>E?(W=D,D=null):W=D.sibling;var et=g(f,D,M.value,_);if(et===null){D===null&&(D=W);break}e&&D&&et.alternate===null&&t(f,D),u=a(et,u,E),k===null?w=et:k.sibling=et,k=et,D=W}if(M.done)return n(f,D),O&&Tt(f,E),w;if(D===null){for(;!M.done;E++,M=c.next())M=p(f,M.value,_),M!==null&&(u=a(M,u,E),k===null?w=M:k.sibling=M,k=M);return O&&Tt(f,E),w}for(D=r(f,D);!M.done;E++,M=c.next())M=S(D,f,E,M.value,_),M!==null&&(e&&M.alternate!==null&&D.delete(M.key===null?E:M.key),u=a(M,u,E),k===null?w=M:k.sibling=M,k=M);return e&&D.forEach(function(Nf){return t(f,Nf)}),O&&Tt(f,E),w}function N(f,u,c,_){if(typeof c=="object"&&c!==null&&c.type===Ht&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Cr:e:{for(var w=c.key,k=u;k!==null;){if(k.key===w){if(w=c.type,w===Ht){if(k.tag===7){n(f,k.sibling),u=i(k,c.props.children),u.return=f,f=u;break e}}else if(k.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&Vs(w)===k.type){n(f,k.sibling),u=i(k,c.props),u.ref=Dn(f,k,c),u.return=f,f=u;break e}n(f,k);break}else t(f,k);k=k.sibling}c.type===Ht?(u=$t(c.props.children,f.mode,_,c.key),u.return=f,f=u):(_=Xr(c.type,c.key,c.props,null,f.mode,_),_.ref=Dn(f,u,c),_.return=f,f=_)}return o(f);case Vt:e:{for(k=c.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(f,u.sibling),u=i(u,c.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=za(c,f.mode,_),u.return=f,f=u}return o(f);case rt:return k=c._init,N(f,u,k(c._payload),_)}if(Mn(c))return b(f,u,c,_);if(wn(c))return y(f,u,c,_);Or(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,c),u.return=f,f=u):(n(f,u),u=Na(c,f.mode,_),u.return=f,f=u),o(f)):n(f,u)}return N}var cn=fu(!0),mu=fu(!1),ci=St(null),pi=null,Jt=null,Qo=null;function Go(){Qo=Jt=pi=null}function Xo(e){var t=ci.current;R(ci),e._currentValue=t}function fo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){pi=e,Qo=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ue=!0),e.firstContext=null)}function ke(e){var t=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(pi===null)throw Error(v(308));Jt=e,pi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var It=null;function Jo(e){It===null?It=[e]:It.push(e)}function gu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,Jo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oo(e,n)}}function Hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var i=e.updateQueue;it=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,o===null?a=d:o.next=d,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=s))}if(a!==null){var p=i.baseState;o=0,m=d=s=null,l=a;do{var g=l.lane,S=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,y=l;switch(g=t,S=n,y.tag){case 1:if(b=y.payload,typeof b=="function"){p=b.call(S,p,g);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,g=typeof b=="function"?b.call(S,p,g):b,g==null)break e;p=j({},p,g);break e;case 2:it=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=S,s=p):m=m.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(s=p),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Lt|=o,e.lanes=o,e.memoizedState=p}}function Ys(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var dr={},je=St(dr),er=St(dr),tr=St(dr);function Et(e){if(e===dr)throw Error(v(174));return e}function el(e,t){switch(L(tr,t),L(er,e),L(je,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qa(t,e)}R(je),L(je,t)}function pn(){R(je),R(er),R(tr)}function yu(e){Et(tr.current);var t=Et(je.current),n=qa(t,e.type);t!==n&&(L(er,e),L(je,n))}function tl(e){er.current===e&&(R(je),R(er))}var U=St(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Aa=[];function nl(){for(var e=0;e<Aa.length;e++)Aa[e]._workInProgressVersionPrimary=null;Aa.length=0}var qr=Ze.ReactCurrentDispatcher,$a=Ze.ReactCurrentBatchConfig,Pt=0,F=null,Y=null,K=null,gi=!1,Un=!1,nr=0,Ig=0;function ee(){throw Error(v(321))}function rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ne(e[n],t[n]))return!1;return!0}function il(e,t,n,r,i,a){if(Pt=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?Mg:xg,e=n(r,i),Un){a=0;do{if(Un=!1,nr=0,25<=a)throw Error(v(301));a+=1,K=Y=null,t.updateQueue=null,qr.current=Pg,e=n(r,i)}while(Un)}if(qr.current=hi,t=Y!==null&&Y.next!==null,Pt=0,K=Y=F=null,gi=!1,t)throw Error(v(300));return e}function al(){var e=nr!==0;return nr=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?F.memoizedState=K=e:K=K.next=e,K}function De(){if(Y===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=K===null?F.memoizedState:K.next;if(t!==null)K=t,Y=e;else{if(e===null)throw Error(v(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},K===null?F.memoizedState=K=e:K=K.next=e}return K}function rr(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=De(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,d=a;do{var m=d.lane;if((Pt&m)===m)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,F.lanes|=m,Lt|=m}d=d.next}while(d!==null&&d!==a);s===null?o=r:s.next=l,Ne(r,t.memoizedState)||(ue=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,F.lanes|=a,Lt|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xa(e){var t=De(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ne(a,t.memoizedState)||(ue=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function _u(){}function vu(e,t){var n=F,r=De(),i=t(),a=!Ne(r.memoizedState,i);if(a&&(r.memoizedState=i,ue=!0),r=r.queue,ol(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,ir(9,bu.bind(null,n,r,i,t),void 0,null),Q===null)throw Error(v(349));(Pt&30)!==0||Su(n,t,i)}return i}function Su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bu(e,t,n,r){t.value=n,t.getSnapshot=r,Cu(t)&&Tu(e)}function wu(e,t,n){return n(function(){Cu(t)&&Tu(e)})}function Cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ne(e,n)}catch{return!0}}function Tu(e){var t=Xe(e,1);t!==null&&Le(t,e,1,-1)}function qs(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,F,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return De().memoizedState}function Wr(e,t,n,r){var i=Oe();F.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var i=De();r=r===void 0?null:r;var a=void 0;if(Y!==null){var o=Y.memoizedState;if(a=o.destroy,r!==null&&rl(r,o.deps)){i.memoizedState=ir(t,n,a,r);return}}F.flags|=e,i.memoizedState=ir(1|t,n,a,r)}function Ws(e,t){return Wr(8390656,8,e,t)}function ol(e,t){return Ei(2048,8,e,t)}function Du(e,t){return Ei(4,2,e,t)}function Iu(e,t){return Ei(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Au(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,Eu.bind(null,t,e),n)}function ll(){}function $u(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mu(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xu(e,t,n){return(Pt&21)===0?(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n):(Ne(n,t)||(n=Rd(),F.lanes|=n,Lt|=n,e.baseState=!0),t)}function Eg(e,t){var n=x;x=n!==0&&4>n?n:4,e(!0);var r=$a.transition;$a.transition={};try{e(!1),t()}finally{x=n,$a.transition=r}}function Pu(){return De().memoizedState}function Ag(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Nu(t,n);else if(n=gu(e,t,n,r),n!==null){var i=le();Le(n,e,r,i),zu(n,t,r)}}function $g(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Nu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ne(l,o)){var s=t.interleaved;s===null?(i.next=i,Jo(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=gu(e,t,i,r),n!==null&&(i=le(),Le(n,e,r,i),zu(n,t,r))}}function Lu(e){var t=e.alternate;return e===F||t!==null&&t===F}function Nu(e,t){Un=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oo(e,n)}}var hi={readContext:ke,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},Mg={readContext:ke,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ag.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:qs,useDebugValue:ll,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=qs(!1),t=e[0];return e=Eg.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=F,i=Oe();if(O){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Q===null)throw Error(v(349));(Pt&30)!==0||Su(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ws(wu.bind(null,r,a,e),[e]),r.flags|=2048,ir(9,bu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Oe(),t=Q.identifierPrefix;if(O){var n=We,r=qe;n=(r&~(1<<32-Pe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ig++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xg={readContext:ke,useCallback:$u,useContext:ke,useEffect:ol,useImperativeHandle:Au,useInsertionEffect:Du,useLayoutEffect:Iu,useMemo:Mu,useReducer:Ma,useRef:ku,useState:function(){return Ma(rr)},useDebugValue:ll,useDeferredValue:function(e){var t=De();return xu(t,Y.memoizedState,e)},useTransition:function(){var e=Ma(rr)[0],t=De().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:vu,useId:Pu,unstable_isNewReconciler:!1},Pg={readContext:ke,useCallback:$u,useContext:ke,useEffect:ol,useImperativeHandle:Au,useInsertionEffect:Du,useLayoutEffect:Iu,useMemo:Mu,useReducer:xa,useRef:ku,useState:function(){return xa(rr)},useDebugValue:ll,useDeferredValue:function(e){var t=De();return Y===null?t.memoizedState=e:xu(t,Y.memoizedState,e)},useTransition:function(){var e=xa(rr)[0],t=De().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:vu,useId:Pu,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),i=gt(e),a=Ke(r,i);a.payload=t,n!=null&&(a.callback=n),t=ft(e,a,i),t!==null&&(Le(t,e,i,r),Yr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),i=gt(e),a=Ke(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ft(e,a,i),t!==null&&(Le(t,e,i,r),Yr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=gt(e),i=Ke(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(Le(t,e,r,n),Yr(t,e,r))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(i,a):!0}function Ru(e,t,n){var r=!1,i=_t,a=t.contextType;return typeof a=="object"&&a!==null?a=ke(a):(i=pe(t)?Mt:re.current,r=t.contextTypes,a=(r=r!=null)?dn(e,i):_t),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function go(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zo(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ke(a):(a=pe(t)?Mt:re.current,i.context=dn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(mo(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ai.enqueueReplaceState(i,i.state,null),fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=dm(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lg=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Do=r),ho(e,t)},n}function Uu(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ho(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ho(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kg.bind(null,e,t,n),t.then(e,e))}function Xs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Js(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ng=Ze.ReactCurrentOwner,ue=!1;function oe(e,t,n,r){t.child=e===null?mu(t,null,n,r):cn(t,e.child,n,r)}function Zs(e,t,n,r,i){n=n.render;var a=t.ref;return on(t,i),r=il(e,t,n,r,a,i),n=al(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(O&&n&&qo(t),t.flags|=1,oe(e,t,r,i),t.child)}function ed(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!gl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Fu(e,t,a,r,i)):(e=Xr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(o,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=ht(a,r),e.ref=t.ref,e.return=t,t.child=e}function Fu(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Gn(a,r)&&e.ref===t.ref)if(ue=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ue=!0);else return t.lanes=e.lanes,Je(e,t,i)}return yo(e,t,n,r,i)}function ju(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(en,me),me|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(en,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,L(en,me),me|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,L(en,me),me|=r;return oe(e,t,i,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yo(e,t,n,r,i){var a=pe(n)?Mt:re.current;return a=dn(t,a),on(t,i),n=il(e,t,n,r,a,i),r=al(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(O&&r&&qo(t),t.flags|=1,oe(e,t,n,i),t.child)}function td(e,t,n,r,i){if(pe(n)){var a=!0;si(t)}else a=!1;if(on(t,i),t.stateNode===null)Kr(e,t),Ru(t,n,r),go(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=pe(n)?Mt:re.current,d=dn(t,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Qs(t,o,r,d),it=!1;var g=t.memoizedState;o.state=g,fi(t,r,o,i),s=t.memoizedState,l!==r||g!==s||ce.current||it?(typeof m=="function"&&(mo(t,n,m,r),s=t.memoizedState),(l=it||Ks(t,n,l,r,g,s,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:$e(t.type,l),o.props=d,p=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ke(s):(s=pe(n)?Mt:re.current,s=dn(t,s));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==s)&&Qs(t,o,r,s),it=!1,g=t.memoizedState,o.state=g,fi(t,r,o,i);var b=t.memoizedState;l!==p||g!==b||ce.current||it?(typeof S=="function"&&(mo(t,n,S,r),b=t.memoizedState),(d=it||Ks(t,n,d,r,g,b,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=s,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return _o(e,t,n,r,a,i)}function _o(e,t,n,r,i,a){Bu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Fs(t,n,!1),Je(e,t,a);r=t.stateNode,Ng.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=cn(t,e.child,null,a),t.child=cn(t,null,l,a)):oe(e,t,l,a),t.memoizedState=r.state,i&&Fs(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?Us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Us(e,t.context,!1),el(e,t.containerInfo)}function nd(e,t,n,r,i){return un(),Ko(i),t.flags|=256,oe(e,t,n,r),t.child}var vo={dehydrated:null,treeContext:null,retryLane:0};function So(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hu(e,t,n){var r=t.pendingProps,i=U.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(U,i&1),e===null)return po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=xi(o,r,0,null),e=$t(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=So(n),t.memoizedState=vo,e):sl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zg(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ht(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=ht(l,a):(a=$t(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?So(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=vo,r}return a=e.child,e=a.sibling,r=ht(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sl(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,n,r){return r!==null&&Ko(r),cn(t,e.child,null,n),e=sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zg(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Pa(Error(v(422))),Ur(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=xi({mode:"visible",children:r.children},i,0,null),a=$t(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&cn(t,e.child,null,o),t.child.memoizedState=So(o),t.memoizedState=vo,a);if((t.mode&1)===0)return Ur(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(v(419)),r=Pa(a,r,void 0),Ur(e,t,o,r)}if(l=(o&e.childLanes)!==0,ue||l){if(r=Q,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Xe(e,i),Le(r,e,i,-1))}return ml(),r=Pa(Error(v(421))),Ur(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Qg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ge=pt(i.nextSibling),he=t,O=!0,xe=null,e!==null&&(be[we++]=qe,be[we++]=We,be[we++]=xt,qe=e.id,We=e.overflow,xt=t),t=sl(t,r.children),t.flags|=4096,t)}function rd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fo(e.return,t,n)}function La(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Yu(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(oe(e,t,r.children,n),r=U.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,n,t);else if(e.tag===19)rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(U,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),La(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}La(t,!0,n,null,a);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rg(e,t,n){switch(t.tag){case 3:Vu(t),un();break;case 5:yu(t);break;case 1:pe(t.type)&&si(t);break;case 4:el(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;L(ci,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(U,U.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Hu(e,t,n):(L(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);L(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Yu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,ju(e,t,n)}return Je(e,t,n)}var qu,bo,Wu,Ku;qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bo=function(){};Wu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Et(je.current);var a=null;switch(n){case"input":i=Ba(e,i),r=Ba(e,r),a=[];break;case"select":i=j({},i,{value:void 0}),r=j({},r,{value:void 0}),a=[];break;case"textarea":i=Ya(e,i),r=Ya(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oi)}Wa(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var s=r[d];if(l=i?.[d],r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&z("scroll",e),a||l===s||(a=[])):(a=a||[]).push(d,s))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Og(e,t,n){var r=t.pendingProps;switch(Wo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return pe(t.type)&&li(),te(t),null;case 3:return r=t.stateNode,pn(),R(ce),R(re),nl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xe!==null&&(Ao(xe),xe=null))),bo(e,t),te(t),null;case 5:tl(t);var i=Et(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return te(t),null}if(e=Et(je.current),Rr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ue]=t,r[Zn]=a,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<Pn.length;i++)z(Pn[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":cs(r,a),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},z("invalid",r);break;case"textarea":fs(r,a),z("invalid",r)}Wa(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),i=["children",""+l]):Vn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":Tr(r),ps(r,a,!0);break;case"textarea":Tr(r),ms(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=oi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Zn]=r,qu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ka(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pn.length;i++)z(Pn[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":cs(e,r),i=Ba(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=j({},r,{value:void 0}),z("invalid",e);break;case"textarea":fs(e,r),i=Ya(e,r),z("invalid",e);break;default:i=r}Wa(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?kd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cd(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hn(e,s):typeof s=="number"&&Hn(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vn.hasOwnProperty(a)?s!=null&&a==="onScroll"&&z("scroll",e):s!=null&&xo(e,a,s,o))}switch(n){case"input":Tr(e),ps(e,r,!1);break;case"textarea":Tr(e),ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?tn(e,!!r.multiple,a,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Et(tr.current),Et(je.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(a=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return te(t),null;case 13:if(R(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pu(),un(),t.flags|=98560,a=!1;else if(a=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(v(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(v(317));a[Ue]=t}else un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),a=!1}else xe!==null&&(Ao(xe),xe=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(U.current&1)!==0?q===0&&(q=3):ml())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return pn(),bo(e,t),e===null&&Xn(t.stateNode.containerInfo),te(t),null;case 10:return Xo(t.type._context),te(t),null;case 17:return pe(t.type)&&li(),te(t),null;case 19:if(R(U),a=t.memoizedState,a===null)return te(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)In(a,!1);else{if(q!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=mi(e),o!==null){for(t.flags|=128,In(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(U,U.current&1|2),t.child}e=e.sibling}a.tail!==null&&V()>mn&&(t.flags|=128,r=!0,In(a,!1),t.lanes=4194304)}else{if(!r)if(e=mi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!O)return te(t),null}else 2*V()-a.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,In(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=V(),t.sibling=null,n=U.current,L(U,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return fl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(me&1073741824)!==0&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function Ug(e,t){switch(Wo(t),t.tag){case 1:return pe(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),R(ce),R(re),nl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return tl(t),null;case 13:if(R(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(U),null;case 4:return pn(),null;case 10:return Xo(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Fr=!1,ne=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,C=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function wo(e,t,n){try{n()}catch(r){B(e,t,r)}}var id=!1;function jg(e,t){if(io=ri,e=Zd(),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,d=0,m=0,p=e,g=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==a||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===e)break t;if(g===n&&++d===i&&(l=o),g===a&&++m===r&&(s=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ao={focusedElem:e,selectionRange:n},ri=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,N=b.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:$e(t.type,y),N);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(_){B(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return b=id,id=!1,b}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&wo(t,n,a)}i=i.next}while(i!==r)}}function $i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Zn],delete t[so],delete t[Cg],delete t[Tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function To(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oi));else if(r!==4&&(e=e.child,e!==null))for(To(e,t,n),e=e.sibling;e!==null;)To(e,t,n),e=e.sibling}function ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}var G=null,Me=!1;function nt(e,t,n){for(n=n.child;n!==null;)Xu(e,t,n),n=n.sibling}function Xu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(wi,n)}catch{}switch(n.tag){case 5:ne||Zt(n,t);case 6:var r=G,i=Me;G=null,nt(e,t,n),G=r,Me=i,G!==null&&(Me?(e=G,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):G.removeChild(n.stateNode));break;case 18:G!==null&&(Me?(e=G,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),Kn(e)):Ia(G,n.stateNode));break;case 4:r=G,i=Me,G=n.stateNode.containerInfo,Me=!0,nt(e,t,n),G=r,Me=i;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&((a&2)!==0||(a&4)!==0)&&wo(n,t,o),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!ne&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){B(n,t,l)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,nt(e,t,n),ne=r):nt(e,t,n);break;default:nt(e,t,n)}}function od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fg),t.forEach(function(r){var i=Gg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:G=l.stateNode,Me=!1;break e;case 3:G=l.stateNode.containerInfo,Me=!0;break e;case 4:G=l.stateNode.containerInfo,Me=!0;break e}l=l.return}if(G===null)throw Error(v(160));Xu(a,o,i),G=null,Me=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){B(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}function Ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Re(e),r&4){try{Fn(3,e,e.return),$i(3,e)}catch(y){B(e,e.return,y)}try{Fn(5,e,e.return)}catch(y){B(e,e.return,y)}}break;case 1:Ae(t,e),Re(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Ae(t,e),Re(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(y){B(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Sd(i,a),Ka(l,o);var d=Ka(l,a);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?kd(i,p):m==="dangerouslySetInnerHTML"?Cd(i,p):m==="children"?Hn(i,p):xo(i,m,p,d)}switch(l){case"input":Va(i,a);break;case"textarea":bd(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?tn(i,!!a.multiple,S,!1):g!==!!a.multiple&&(a.defaultValue!=null?tn(i,!!a.multiple,a.defaultValue,!0):tn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Zn]=a}catch(y){B(e,e.return,y)}}break;case 6:if(Ae(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){B(e,e.return,y)}}break;case 3:if(Ae(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(y){B(e,e.return,y)}break;case 4:Ae(t,e),Re(e);break;case 13:Ae(t,e),Re(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(cl=V())),r&4&&od(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||m,Ae(t,e),ne=d):Ae(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(C=e,m=e.child;m!==null;){for(p=C=m;C!==null;){switch(g=C,S=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:Zt(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){B(r,n,y)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){sd(p);continue}}S!==null?(S.return=g,C=S):sd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Td("display",o))}catch(y){B(e,e.return,y)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(y){B(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ae(t,e),Re(e),r&4&&od(e);break;case 21:break;default:Ae(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var a=ad(e);ko(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ad(e);To(e,l,o);break;default:throw Error(v(161))}}catch(s){B(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bg(e,t,n){C=e,Zu(e,t,n)}function Zu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fr;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ne;l=Fr;var d=ne;if(Fr=o,(ne=s)&&!d)for(C=i;C!==null;)o=C,s=o.child,o.tag===22&&o.memoizedState!==null?dd(i):s!==null?(s.return=o,C=s):dd(i);for(;a!==null;)C=a,Zu(a,t,n),a=a.sibling;C=i,Fr=l,ne=d}ld(e,t,n)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,C=a):ld(e,t,n)}}function ld(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ne||$i(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ys(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ys(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Kn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}ne||t.flags&512&&Co(t)}catch(g){B(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function sd(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function dd(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$i(4,t)}catch(s){B(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){B(t,i,s)}}var a=t.return;try{Co(t)}catch(s){B(t,a,s)}break;case 5:var o=t.return;try{Co(t)}catch(s){B(t,o,s)}}}catch(s){B(t,t.return,s)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var Vg=Math.ceil,yi=Ze.ReactCurrentDispatcher,dl=Ze.ReactCurrentOwner,Te=Ze.ReactCurrentBatchConfig,$=0,Q=null,H=null,X=0,me=0,en=St(0),q=0,ar=null,Lt=0,Mi=0,ul=0,jn=null,de=null,cl=0,mn=1/0,He=null,_i=!1,Do=null,mt=null,jr=!1,st=null,vi=0,Bn=0,Io=null,Qr=-1,Gr=0;function le(){return($&6)!==0?V():Qr!==-1?Qr:Qr=V()}function gt(e){return(e.mode&1)===0?1:($&2)!==0&&X!==0?X&-X:Dg.transition!==null?(Gr===0&&(Gr=Rd()),Gr):(e=x,e!==0||(e=window.event,e=e===void 0?16:Hd(e.type)),e)}function Le(e,t,n,r){if(50<Bn)throw Bn=0,Io=null,Error(v(185));or(e,n,r),(($&2)===0||e!==Q)&&(e===Q&&(($&2)===0&&(Mi|=n),q===4&&ot(e,X)),fe(e,r),n===1&&$===0&&(t.mode&1)===0&&(mn=V()+500,Ii&&bt()))}function fe(e,t){var n=e.callbackNode;Em(e,t);var r=ni(e,e===Q?X:0);if(r===0)n!==null&&ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ys(n),t===1)e.tag===0?kg(ud.bind(null,e)):du(ud.bind(null,e)),bg(function(){($&6)===0&&bt()}),n=null;else{switch(Od(r)){case 1:n=Ro;break;case 4:n=Nd;break;case 16:n=ti;break;case 536870912:n=zd;break;default:n=ti}n=lc(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Qr=-1,Gr=0,($&6)!==0)throw Error(v(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=ni(e,e===Q?X:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=$;$|=2;var a=nc();(Q!==e||X!==t)&&(He=null,mn=V()+500,At(e,t));do try{qg();break}catch(l){tc(e,l)}while(!0);Go(),yi.current=a,$=i,H!==null?t=0:(Q=null,X=0,t=q)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(r=i,t=Eo(e,i))),t===1)throw n=ar,At(e,0),ot(e,r),fe(e,V()),n;if(t===6)ot(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Hg(i)&&(t=Si(e,r),t===2&&(a=Za(e),a!==0&&(r=a,t=Eo(e,a))),t===1))throw n=ar,At(e,0),ot(e,r),fe(e,V()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:kt(e,de,He);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=cl+500-V(),10<t)){if(ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lo(kt.bind(null,e,de,He),t);break}kt(e,de,He);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Pe(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vg(r/1960))-r,10<r){e.timeoutHandle=lo(kt.bind(null,e,de,He),r);break}kt(e,de,He);break;case 5:kt(e,de,He);break;default:throw Error(v(329))}}}return fe(e,V()),e.callbackNode===n?ec.bind(null,e):null}function Eo(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Si(e,t),e!==2&&(t=de,de=n,t!==null&&Ao(t)),e}function Ao(e){de===null?de=e:de.push.apply(de,e)}function Hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ne(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~ul,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pe(t),r=1<<n;e[n]=-1,t&=~r}}function ud(e){if(($&6)!==0)throw Error(v(327));ln();var t=ni(e,0);if((t&1)===0)return fe(e,V()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Za(e);r!==0&&(t=r,n=Eo(e,r))}if(n===1)throw n=ar,At(e,0),ot(e,t),fe(e,V()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,He),fe(e,V()),null}function pl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(mn=V()+500,Ii&&bt())}}function Nt(e){st!==null&&st.tag===0&&($&6)===0&&ln();var t=$;$|=1;var n=Te.transition,r=x;try{if(Te.transition=null,x=1,e)return e()}finally{x=r,Te.transition=n,$=t,($&6)===0&&bt()}}function fl(){me=en.current,R(en)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sg(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(Wo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:pn(),R(ce),R(re),nl();break;case 5:tl(r);break;case 4:pn();break;case 13:R(U);break;case 19:R(U);break;case 10:Xo(r.type._context);break;case 22:case 23:fl()}n=n.return}if(Q=e,H=e=ht(e.current,null),X=me=t,q=0,ar=null,ul=Mi=Lt=0,de=jn=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}It=null}return e}function tc(e,t){do{var n=H;try{if(Go(),qr.current=hi,gi){for(var r=F.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Pt=0,K=Y=F=null,Un=!1,nr=0,dl.current=null,n===null||n.return===null){q=1,ar=t,H=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=X,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,m=l,p=m.tag;if((m.mode&1)===0&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Xs(o);if(S!==null){S.flags&=-257,Js(S,o,l,a,t),S.mode&1&&Gs(a,d,t),t=S,s=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(s),t.updateQueue=y}else b.add(s);break e}else{if((t&1)===0){Gs(a,d,t),ml();break e}s=Error(v(426))}}else if(O&&l.mode&1){var N=Xs(o);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),Js(N,o,l,a,t),Ko(fn(s,l));break e}}a=s=fn(s,l),q!==4&&(q=2),jn===null?jn=[a]:jn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Ou(a,s,t);Hs(a,f);break e;case 1:l=s;var u=a.type,c=a.stateNode;if((a.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(mt===null||!mt.has(c)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=Uu(a,l,t);Hs(a,_);break e}}a=a.return}while(a!==null)}ic(n)}catch(w){t=w,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function nc(){var e=yi.current;return yi.current=hi,e===null?hi:e}function ml(){(q===0||q===3||q===2)&&(q=4),Q===null||(Lt&268435455)===0&&(Mi&268435455)===0||ot(Q,X)}function Si(e,t){var n=$;$|=2;var r=nc();(Q!==e||X!==t)&&(He=null,At(e,t));do try{Yg();break}catch(i){tc(e,i)}while(!0);if(Go(),$=n,yi.current=r,H!==null)throw Error(v(261));return Q=null,X=0,q}function Yg(){for(;H!==null;)rc(H)}function qg(){for(;H!==null&&!vm();)rc(H)}function rc(e){var t=oc(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?ic(e):H=t,dl.current=null}function ic(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Og(n,t,me),n!==null){H=n;return}}else{if(n=Ug(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,H=null;return}}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);q===0&&(q=5)}function kt(e,t,n){var r=x,i=Te.transition;try{Te.transition=null,x=1,Wg(e,t,n,r)}finally{Te.transition=i,x=r}return null}function Wg(e,t,n,r){do ln();while(st!==null);if(($&6)!==0)throw Error(v(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Am(e,a),e===Q&&(H=Q=null,X=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||jr||(jr=!0,lc(ti,function(){return ln(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Te.transition,Te.transition=null;var o=x;x=1;var l=$;$|=4,dl.current=null,jg(e,n),Ju(n,e),gg(ao),ri=!!io,ao=io=null,e.current=n,Bg(n,e,i),Sm(),$=l,x=o,Te.transition=a}else e.current=n;if(jr&&(jr=!1,st=e,vi=i),a=e.pendingLanes,a===0&&(mt=null),Cm(n.stateNode,r),fe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_i)throw _i=!1,e=Do,Do=null,e;return(vi&1)!==0&&e.tag!==0&&ln(),a=e.pendingLanes,(a&1)!==0?e===Io?Bn++:(Bn=0,Io=e):Bn=0,bt(),null}function ln(){if(st!==null){var e=Od(vi),t=Te.transition,n=x;try{if(Te.transition=null,x=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,vi=0,($&6)!==0)throw Error(v(331));var i=$;for($|=4,C=e.current;C!==null;){var a=C,o=a.child;if((C.flags&16)!==0){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(C=d;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Fn(8,m,a)}var p=m.child;if(p!==null)p.return=m,C=p;else for(;C!==null;){m=C;var g=m.sibling,S=m.return;if(Qu(m),m===d){C=null;break}if(g!==null){g.return=S,C=g;break}C=S}}}var b=a.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}C=a}}if((a.subtreeFlags&2064)!==0&&o!==null)o.return=a,C=o;else e:for(;C!==null;){if(a=C,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Fn(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,C=f;break e}C=a.return}}var u=e.current;for(C=u;C!==null;){o=C;var c=o.child;if((o.subtreeFlags&2064)!==0&&c!==null)c.return=o,C=c;else e:for(o=u;C!==null;){if(l=C,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:$i(9,l)}}catch(w){B(l,l.return,w)}if(l===o){C=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,C=_;break e}C=l.return}}if($=i,bt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{x=n,Te.transition=t}}return!1}function cd(e,t,n){t=fn(n,t),t=Ou(e,t,1),e=ft(e,t,1),t=le(),e!==null&&(or(e,1,t),fe(e,t))}function B(e,t,n){if(e.tag===3)cd(e,e,n);else for(;t!==null;){if(t.tag===3){cd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=Uu(t,e,1),t=ft(t,e,1),e=le(),t!==null&&(or(t,1,e),fe(t,e));break}}t=t.return}}function Kg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Q===e&&(X&n)===n&&(q===4||q===3&&(X&130023424)===X&&500>V()-cl?At(e,0):ul|=n),fe(e,t)}function ac(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ir,Ir<<=1,(Ir&130023424)===0&&(Ir=4194304)));var n=le();e=Xe(e,t),e!==null&&(or(e,t,n),fe(e,n))}function Qg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function Gg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),ac(e,n)}var oc;oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ue=!1,Rg(e,t,n);ue=(e.flags&131072)!==0}else ue=!1,O&&(t.flags&1048576)!==0&&uu(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Kr(e,t),e=t.pendingProps;var i=dn(t,re.current);on(t,n),i=il(null,t,r,e,i,n);var a=al();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(a=!0,si(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zo(t),i.updater=Ai,t.stateNode=i,i._reactInternals=t,go(t,r,e,n),t=_o(null,t,r,!0,a,n)):(t.tag=0,O&&a&&qo(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Jg(r),e=$e(r,e),i){case 0:t=yo(null,t,r,e,n);break e;case 1:t=td(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=ed(null,t,r,$e(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),yo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),td(e,t,r,i,n);case 3:e:{if(Vu(t),e===null)throw Error(v(387));r=t.pendingProps,a=t.memoizedState,i=a.element,hu(e,t),fi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=fn(Error(v(423)),t),t=nd(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(v(424)),t),t=nd(e,t,r,n,i);break e}else for(ge=pt(t.stateNode.containerInfo.firstChild),he=t,O=!0,xe=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=Je(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return yu(t),e===null&&po(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,oo(r,i)?o=null:a!==null&&oo(r,a)&&(t.flags|=32),Bu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&po(t),null;case 13:return Hu(e,t,n);case 4:return el(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Zs(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,L(ci,r._currentValue),r._currentValue=o,a!==null)if(Ne(a.value,o)){if(a.children===i.children&&!ce.current){t=Je(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Ke(-1,n&-n),s.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fo(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(v(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fo(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=ke(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=$e(r,t.pendingProps),i=$e(r.type,i),ed(e,t,r,i,n);case 15:return Fu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Kr(e,t),t.tag=1,pe(r)?(e=!0,si(t)):e=!1,on(t,n),Ru(t,r,i),go(t,r,i,n),_o(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return ju(e,t,n)}throw Error(v(156,t.tag))};function lc(e,t){return Ld(e,t)}function Xg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Xg(e,t,n,r)}function gl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return gl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lo)return 11;if(e===No)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")gl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return $t(n.children,i,a,t);case Po:o=8,i|=8;break;case Oa:return e=Ce(12,n,t,i|2),e.elementType=Oa,e.lanes=a,e;case Ua:return e=Ce(13,n,t,i),e.elementType=Ua,e.lanes=a,e;case Fa:return e=Ce(19,n,t,i),e.elementType=Fa,e.lanes=a,e;case yd:return xi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gd:o=10;break e;case hd:o=9;break e;case Lo:o=11;break e;case No:o=14;break e;case rt:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ce(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function $t(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function xi(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=yd,e.lanes=n,e.stateNode={isHidden:!1},e}function Na(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function za(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hl(e,t,n,r,i,a,o,l,s){return e=new Zg(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ce(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zo(a),e}function eh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sc(e){if(!e)return _t;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(pe(n))return su(e,n,t)}return t}function dc(e,t,n,r,i,a,o,l,s){return e=hl(n,r,!0,e,i,a,o,l,s),e.context=sc(null),n=e.current,r=le(),i=gt(n),a=Ke(r,i),a.callback=t??null,ft(n,a,i),e.current.lanes=i,or(e,i,r),fe(e,r),e}function Pi(e,t,n,r){var i=t.current,a=le(),o=gt(i);return n=sc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,o),e!==null&&(Le(e,i,o,a),Yr(e,i,o)),o}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yl(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function th(){return null}var uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function _l(e){this._internalRoot=e}Li.prototype.render=_l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));Pi(e,t,null,null)};Li.prototype.unmount=_l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){Pi(null,e,null,null)}),t[Ge]=null}};function Li(e){this._internalRoot=e}Li.prototype.unstable_scheduleHydration=function(e){if(e){var t=jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&Vd(e)}};function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function nh(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=bi(o);a.call(d)}}var o=dc(t,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=o,e[Ge]=o.current,Xn(e.nodeType===8?e.parentNode:e),Nt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=bi(s);l.call(d)}}var s=hl(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=s,e[Ge]=s.current,Xn(e.nodeType===8?e.parentNode:e),Nt(function(){Pi(t,s,n,r)}),s}function zi(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=bi(o);l.call(s)}}Pi(t,o,e,i)}else o=nh(n,t,e,i,r);return bi(o)}Ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xn(t.pendingLanes);n!==0&&(Oo(t,n|1),fe(t,V()),($&6)===0&&(mn=V()+500,bt()))}break;case 13:Nt(function(){var r=Xe(e,1);if(r!==null){var i=le();Le(r,e,1,i)}}),yl(e,1)}};Uo=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=le();Le(t,e,134217728,n)}yl(e,134217728)}};Fd=function(e){if(e.tag===13){var t=gt(e),n=Xe(e,t);if(n!==null){var r=le();Le(n,e,t,r)}yl(e,t)}};jd=function(){return x};Bd=function(e,t){var n=x;try{return x=e,t()}finally{x=n}};Ga=function(e,t,n){switch(t){case"input":if(Va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Di(r);if(!i)throw Error(v(90));vd(r),Va(r,i)}}}break;case"textarea":bd(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Ed=pl;Ad=Nt;var rh={usingClientEntryPoint:!1,Events:[sr,Kt,Di,Dd,Id,pl]},En={findFiberByHostInstance:Dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ih={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xd(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||th,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(An=__REACT_DEVTOOLS_GLOBAL_HOOK__,!An.isDisabled&&An.supportsFiber))try{wi=An.inject(ih),Fe=An}catch{}var An;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vl(t))throw Error(v(200));return eh(e,t,null,n)};ve.createRoot=function(e,t){if(!vl(e))throw Error(v(299));var n=!1,r="",i=uc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hl(e,1,!1,null,null,n,!1,r,i),e[Ge]=t.current,Xn(e.nodeType===8?e.parentNode:e),new _l(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=xd(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Nt(e)};ve.hydrate=function(e,t,n){if(!Ni(t))throw Error(v(200));return zi(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!vl(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=uc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dc(t,null,e,1,n??null,i,!1,a,o),e[Ge]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Li(t)};ve.render=function(e,t,n){if(!Ni(t))throw Error(v(200));return zi(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(v(40));return e._reactRootContainer?(Nt(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ve.unstable_batchedUpdates=pl;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ni(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return zi(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426"});var Ri=wt((hh,fc)=>{"use strict";function pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc)}catch(e){console.error(e)}}pc(),fc.exports=cc()});var bl=wt(Sl=>{"use strict";var mc=Ri();Sl.createRoot=mc.createRoot,Sl.hydrateRoot=mc.hydrateRoot;var yh});var Nl=Ut(yr()),Pf=Ut(Ri()),Lf=Ut(bl());var $l=Ut(yr()),Zp=Ut(Ri()),ef=Ut(bl());var I={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},ie={basic:"basic",templates:"templates"},Oi=["children","children_error","custom"],ur=["all","string","int","time","date","command"];var Ie=[{type:"default_main",title:"Default Main",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"Not Understand",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"Finish Miss",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"Default Search",supportsLlm:!0,hasModal:!0}];var h=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Be=()=>{let e=Date.now(),t=String(e).slice(-5);if(globalThis.crypto?.randomUUID){let n=globalThis.crypto.randomUUID().replaceAll("-","").slice(0,8);return`${t}_${e}_${n}`}return`${t}_${e}_${Math.random().toString(16).slice(2,10)}`},wl=(e={})=>{let t=!!e.llm||!!String(e.system??"").trim()||!!String(e.model??"").trim();return{id:Be(),type:String(e.type??e.actionType??""),voiceResponse:String(e.voiceResponse??""),llmEnabled:t,system:String(e.system??""),model:String(e.model??"")}},Cl=(e={})=>({id:Be(),uuid:String(e.uuid??""),displayValue:String(e.displayValue??""),mappingType:String(e.mappingType??e.mapping_type??e.actionType??e.action_type??e.type??"")}),Tl=(e={})=>({id:Be(),actionTypeComponent:String(e.actionTypeComponent??(String(e.actionType??e.mappingType??"").trim()?"custom":"children")),actionType:String(e.actionType??e.action_type??e.mappingType??e.mapping_type??""),mappingType:String(e.mappingType??e.mapping_type??e.actionType??e.action_type??""),uuid:String(e.uuid??""),displayValue:String(e.displayValue??"")}),pr=(e={})=>({id:Be(),subType:String(e.subType??e.subMappingType??""),subVoiceCommands:String(e.subVoiceCommands??"")}),cr=e=>(Array.isArray(e)?e:[]).filter(t=>t&&typeof t=="object"),Ui=e=>Ie.find(t=>t.type===e)??Ie[0],gc=(e=null)=>{let t=e??{},n=typeof t.componentDialog=="object"&&t.componentDialog?t.componentDialog:typeof t.subComponentDialog=="object"&&t.subComponentDialog?t.subComponentDialog:{};return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDialog??""),type:String(n.actionType??""),endStatus:!!n.endStatus,forwardText:!!n.forwardText,answerType:String(n.answerType??"default"),voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),responseItems:cr(n.voiceResponseArray).map(r=>wl(r)),directControlItems:cr(n.nextDirectControl).map(r=>Cl(r)),nextActionItems:cr(n.nextAction).map(r=>Tl(r))}},hc=(e=null)=>{let t=e??{},n=typeof t.directControl=="object"&&t.directControl?t.directControl:{},r=!!n.manual,i=n.subDirectControl;return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDirect??""),type:String(n.mappingType??n.actionType??""),typeData:ur.includes(String(n.valueType??n.typeData??"all"))?String(n.valueType??n.typeData??"all"):"all",voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),manual:r,subDirectControlItems:r?cr(i).map(a=>pr(a)):[],subDirectControl:r?"":String((typeof i=="string"?i:"")||n.subDirectControlArray||"")}},yc=(e=null)=>{let t=e??{};return{title:String(t.title??""),uuid:String(t.uuid??""),subDirectControlItems:cr(t.subDirectControl).map(n=>pr(n))}},kl=(e,t=null)=>{let n=t??{},r=Ui(e);return{_id:String(n._id??""),type:r.type,title:String(n.title??r.title),endStatus:!!n.endStatus,llmEnabled:r.supportsLlm?!!(n.llmEnabled??n.LLM??n.llm):!1,message:String(n.message??""),system:r.supportsLlm?String(n.system??""):"",model:r.supportsLlm?String(n.model??""):""}},_c=()=>Ie.reduce((e,t)=>(e[t.type]=kl(t.type),e),{}),Fi=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??"").trim(),a=String(e.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let l=(Array.isArray(e.responseItems)?e.responseItems:[]).map(p=>{let g={actionType:String(p.type??p.actionType??"").trim(),voiceResponse:String(p.voiceResponse??"").trim()};return p.llmEnabled&&(g.llm=!0,g.system=String(p.system??"").trim(),g.model=String(p.model??"").trim()),g}),s=(Array.isArray(e.directControlItems)?e.directControlItems:[]).map(p=>({uuid:String(p.uuid??"").trim()})).filter(p=>p.uuid),d=(Array.isArray(e.nextActionItems)?e.nextActionItems:[]).map(p=>({actionTypeComponent:Oi.includes(String(p.actionTypeComponent??"").trim())?String(p.actionTypeComponent??"").trim():"children",actionType:String(p.actionType??p.mappingType??"").trim(),uuid:String(p.uuid??"").trim()})).filter(p=>p.uuid).map(p=>p.actionTypeComponent==="custom"?p:{...p,actionType:""}),m={endStatus:!!e.endStatus,actionType:r,forwardText:!!e.forwardText,answerType:a,voiceCommands:String(e.voiceCommands??"").split(";").map(p=>p.trim()).filter(p=>p),nextDirectControl:s,voiceResponseArray:l,nextAction:d};return{title:t,uuid:n,componentDialog:m,subComponentDialog:m}},ji=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??e.mappingType??"").trim(),i=ur.includes(String(e.typeData??"all"))?String(e.typeData??"all"):"all",a=!!e.manual;if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let o={title:t,uuid:n,directControl:{mappingType:r,valueType:i}};if(i==="command"){let l=String(e.voiceCommands??"").trim();o.directControl.voiceCommands=l?l.split(";").map(s=>s.trim()).filter(s=>s):null,o.directControl.manual=a,a?o.directControl.subDirectControl=(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((s,d)=>{let m=String(s.subType??s.subMappingType??"").trim(),p=String(s.subVoiceCommands??"").trim();return{id:Number(s.id)||d+1,subMappingType:m||null,title:null,subVoiceCommands:p||null}}).filter(s=>s.subMappingType||s.subVoiceCommands):o.directControl.subDirectControl=String(e.subDirectControl??"").trim()}return o},vc=(e={})=>{let t=String(e.title??"").trim();if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let n=String(e.uuid??"").trim();if(n||(n=Be()),!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title:t,uuid:n,subDirectControl:(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((r,i)=>{let a=String(r.subType??r.subMappingType??"").trim(),o=String(r.subVoiceCommands??"").trim();return{id:Number(r.id)||i+1,subMappingType:a||null,title:null,subVoiceCommands:o||null}}).filter(r=>r.subMappingType||r.subVoiceCommands)}},Sc=(e,t={})=>{let n=Ui(e),r={actionType:n.type,title:String(t.title??n.title).trim()||n.title,endStatus:!!t.endStatus,message:String(t.message??"").trim()||null};return n.supportsLlm&&(r.LLM=!!t.llmEnabled,r.llm=r.LLM,r.system=r.LLM&&String(t.system??"").trim()||null,r.model=r.LLM&&String(t.model??"").trim()||null),r};var Ot=(e,t)=>{let n=t===I.secondary,r=e._pageByTab[t]||1,i=e._totalByTab[t]||0,a=e._totalPagesByTab[t]||1,o=n?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",l="/api/cms/commands?page=1&pageSize=20",s=Math.max(1,a||Math.ceil((i||1)/20)),d=e._buildPaginationItems(r,s),m=e._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._commands.length?e._commands.map(p=>`
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
  `};var Bi=e=>Ot(e,I.primary);var Vi=e=>Ot(e,I.secondary);var Hi=(e,t)=>`
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
`,Yi=(e,t)=>`
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
`,qi=e=>{let t=e._directLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._directCommands.length?e._directCommands.map(r=>`
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
        <button type="button" class="subtab-button ${e._directSubtab===ie.basic?"active":""}" data-direct-subtab="${ie.basic}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</button>
        <button type="button" class="subtab-button ${e._directSubtab===ie.templates?"active":""}" data-direct-subtab="${ie.templates}">\u0428\u0430\u0431\u043B\u043E\u043D\u044B</button>
      </div>
    </section>
    ${e._directSubtab===ie.basic?Hi(e,t):Yi(e,n)}
  `};var Wi=e=>{let t=Ie.map((n,r)=>{let i=e._defaultsByType[n.type]??e._newDefaultsDraft(n.type),a=String(i.title||n.title||n.type).trim(),o=[`actionType: ${n.type}`,`endStatus: ${i.endStatus?"on":"off"}`];return n.supportsLlm&&o.push(`LLM: ${i.llmEnabled?"on":"off"}`),`
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${h(n.type)}" ${e._defaultsLoading?"disabled":""}>
        <span class="command-item-title">${r+1}. ${h(a)}</span>
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
  `};var Dl=(e,t)=>`
  <section class="hero-card">
    <h2>${h(e)}</h2>
    <p>${h(t)}</p>
  </section>
  <section class="help-card">
    <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
  </section>
`;var bc=e=>e._tab===I.primary?Bi(e):e._tab===I.secondary?Vi(e):e._tab===I.direct?qi(e):Wi(e);var wc=e=>{e._addModalBackdrop(),e._modalOpen=!0,e._modalMode="create",e._editingId="",e._draft=e._newDraft(),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render()},Cc=(e,t)=>{e._addModalBackdrop();let n=e._commands.find(r=>String(r._id??"")===String(t??""));if(!n){e._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._modalOpen=!0,e._modalMode="edit",e._editingId=String(n._id??""),e._editingStatus=!!n.status,e._draft=e._newDraft(n),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render(),e._hydrateDirectControlTitles(),e._hydrateNextActionTitles()},Tc=e=>{e._modalSaving||(e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._draft=e._newDraft(),e._render())},kc=async e=>{if(!e._apiUrl("")){e._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildPayload()}catch(l){e._error=l?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",e._render();return}let r=e._modalMode==="edit"&&e._editingId,i=e._tab===I.secondary?"sub-commands":"commands",a=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._editingId)}`):e._apiUrl(`/api/cms/${i}`),o=r?"PUT":"POST";e._modalSaving=!0,e._error="",e._render();try{let l=await fetch(a,{method:o,headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${l.status}`);e._status=r?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft(),await e._loadPage(e._pageByTab[e._tab]||1)}catch(l){e._error=l?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",e._render()}finally{e._modalSaving=!1,e._render()}},Dc=async e=>{if(!e._editingId||!confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439?"))return;let t=e._tab===I.secondary?"sub-commands":"commands";e._modalSaving=!0,e._error="",e._render();try{await e._deleteItem(t,e._editingId),e._commands=e._commands.filter(n=>String(n._id??"")!==String(e._editingId)),e._status="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft()}catch(n){e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."}finally{e._modalSaving=!1,e._render()}};var Ic=e=>{e._updateDraft("uuid",Be()),e._render()},Ec=e=>{let t=Array.isArray(e._draft.responseItems)?e._draft.responseItems:[],n=wl();e._draft={...e._draft,responseItems:[...t,n]},e._openResponseItemIds.add(n.id),e._render()},Ac=(e,t)=>{let n=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,responseItems:n},e._openResponseItemIds=new Set([...e._openResponseItemIds].filter(r=>e._draft.responseItems.some(i=>i.id===r))),e._render()},$c=(e,t,n,r)=>{let i=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map(a=>a.id!==t?a:{...a,[n]:r});e._draft={...e._draft,responseItems:i}},Mc=(e,t)=>{e._openResponseItemIds.has(t)?e._openResponseItemIds.delete(t):e._openResponseItemIds.add(t),e._render()},xc=e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[],n=Cl();e._draft={...e._draft,directControlItems:[...t,n]},e._openDirectControlItemIds.add(n.id),e._render()},Pc=(e,t)=>{let n=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,directControlItems:n},e._openDirectControlItemIds=new Set([...e._openDirectControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},Lc=(e,t,n,r=!0)=>{let i=String(t??"").trim(),a=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(o=>{if(o.id!==i)return o;let l=String(n??""),s=l.trim(),d=String(o.uuid??"").trim();return{...o,uuid:l,displayValue:s&&s===d?o.displayValue:"",mappingType:s&&s===d?o.mappingType:""}});e._draft={...e._draft,directControlItems:a},r&&n.length>0&&e._debouncedPerformUuidSearch(n,"directControl",i)},Nc=(e,t)=>{e._openDirectControlItemIds.has(t)?e._openDirectControlItemIds.delete(t):e._openDirectControlItemIds.add(t),e._render()},zc=e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[],n=Tl();e._draft={...e._draft,nextActionItems:[...t,n]},e._openNextActionItemIds.add(n.id),e._render()},Rc=(e,t)=>{let n=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,nextActionItems:n},e._openNextActionItemIds=new Set([...e._openNextActionItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},Oc=(e,t,n,r,i=!0,a=!0)=>{let o=String(t??"").trim(),l=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(s=>{if(s.id!==o)return s;if(n==="uuid"){let d=String(r??""),m=d.trim(),p=String(s.uuid??"").trim();return{...s,uuid:d,displayValue:m&&m===p?s.displayValue:"",mappingType:m&&m===p?s.mappingType:"",actionType:m&&m===p?s.actionType:""}}if(n==="actionTypeComponent"){let d=String(r??"").trim();return d==="custom"?{...s,actionTypeComponent:d}:{...s,actionTypeComponent:d,actionType:""}}return{...s,[n]:r}});e._draft={...e._draft,nextActionItems:l},(i||n==="actionTypeComponent")&&e._render(),a&&n==="uuid"&&r.length>0&&e._debouncedPerformUuidSearch(r,"nextAction",o)},Uc=(e,t)=>{e._openNextActionItemIds.has(t)?e._openNextActionItemIds.delete(t):e._openNextActionItemIds.add(t),e._render()};var Fc=(e,{kind:t,id:n,title:r,collection:i,status:a})=>{n&&(e._addModalBackdrop(),e._itemActionsModalOpen=!0,e._itemActionsSaving=!1,e._itemActionsKind=String(t??""),e._itemActionsId=String(n??""),e._itemActionsTitle=String(r??"").trim(),e._itemActionsCollection=String(i??""),e._itemActionsStatus=!!a,e._render())},jc=e=>{e._itemActionsSaving||(e._removeModalBackdrop(),e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsKind="",e._itemActionsId="",e._itemActionsTitle="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._render())},Bc=async(e,t,n,r)=>{let i=e._commands.find(d=>String(d._id??"")===String(t??""));if(!i)throw new Error("\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let a=e._newDraft(i),o=Fi(a);n==="sub-commands"?delete o.componentDialog:delete o.subComponentDialog,o.status=!!r;let l=e._apiUrl(`/api/cms/${encodeURIComponent(n)}/${encodeURIComponent(t)}`),s=await fetch(l,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(o)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430: HTTP ${s.status}`);e._commands=e._commands.map(d=>String(d._id??"")===String(t??"")?{...d,status:!!r}:d),String(e._editingId??"")===String(t??"")&&(e._editingStatus=!!r)},Vc=async(e,t,n)=>{let r=e._directCommands.find(s=>String(s._id??"")===String(t??""));if(!r)throw new Error("Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let i=e._newDirectDraft(r),a={...ji(i),status:!!n},o=e._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(t)}`),l=await fetch(o,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(a)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);e._directCommands=e._directCommands.map(s=>String(s._id??"")===String(t??"")?{...s,status:!!n}:s),String(e._directEditingId??"")===String(t??"")&&(e._directEditingStatus=!!n)},Hc=async e=>{if(e._itemActionsSaving||!e._itemActionsId)return;let t=!e._itemActionsStatus;e._itemActionsSaving=!0,e._error="",e._directError="",e._render();try{if(e._itemActionsKind==="command")await e._updateCommandStatusById(e._itemActionsId,e._itemActionsCollection||"commands",t);else if(e._itemActionsKind==="direct")await e._updateDirectStatusById(e._itemActionsId,t);else throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.");e._itemActionsStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442.",e._itemActionsSaving=!1,e._closeItemActionsModal()}catch(n){e._itemActionsKind==="direct"?e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.":e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.",e._itemActionsSaving=!1,e._render()}},Yc=async e=>{if(!(e._modalSaving||!e._editingId)){e._modalSaving=!0,e._error="",e._render();try{let t=!e._editingStatus,n=e._tab===I.secondary?"sub-commands":"commands";await e._updateCommandStatusById(e._editingId,n,t),e._editingStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442."}catch(t){e._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."}finally{e._modalSaving=!1,e._render()}}};var qc=(e,t)=>{e._directSubtab=t,e._directError="",t===ie.basic&&!e._directCommands.length&&!e._directLoading?e._loadDirectCommands():t===ie.templates&&!e._templateCommands.length&&!e._templateLoading&&e._loadTemplateCommands(),e._render()},Wc=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls?page=1&pageSize="+20);if(!t){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._directLoading=!0,e._directError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];e._directCommands=i,e._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){e._directCommands=[],e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directLoading=!1,e._render()}},Kc=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls-sample?page=1&pageSize="+20);if(!t){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._templateLoading=!0,e._templateError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];e._templateCommands=i,e._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){e._templateCommands=[],e._templateError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B."}finally{e._templateLoading=!1,e._render()}},Qc=e=>{e._directLoading||(e._directCommands=[],e._loadDirectCommands())},Gc=e=>{e._templateLoading||(e._templateCommands=[],e._loadTemplateCommands())},Xc=e=>{e._addModalBackdrop(),e._directModalOpen=!0,e._directModalMode="create",e._directEditingId="",e._directDraft=e._newDirectDraft(),e._openDirectSubControlItemIds=new Set,e._directError="",e._render()},Jc=(e,t)=>{e._addModalBackdrop();let n=e._directCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._directModalOpen=!0,e._directModalMode="edit",e._directEditingId=String(n._id??""),e._directEditingStatus=!!n.status,e._directDraft=e._newDirectDraft(n),e._openDirectSubControlItemIds=new Set,e._directError="",e._render(),e._hydrateSelectedSubDirectControlSample()},Zc=e=>{e._directModalSaving||(e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._subDirectControlSampleOptions=[],e._render())},ep=(e,t,n)=>{e._directDraft={...e._directDraft,[t]:n}},tp=async e=>{let t=e._directDraft.typeData==="command",n=!!e._directDraft.manual,r=String(e._directDraft.subDirectControl??"").trim();if(!t||n||!r||(Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]).some(s=>String(s?.uuid??"").trim()===r))return;let o=(await e._searchUuid(r,["sub-direct-controls-sample"])).find(s=>String(s?.uuid??"").trim()===r);if(!o)return;let l={...o,uuid:String(o.uuid??"").trim(),title:String(o.title??"").trim()};e._subDirectControlSampleOptions=[l,...Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]],e._render()},np=e=>{e._updateDirectDraft("uuid",Be()),e._render()},rp=e=>{e._updateTemplateDraft("uuid",Be()),e._render()},ip=e=>{let t=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],n=pr();e._directDraft={...e._directDraft,subDirectControlItems:[...t,n]},e._openDirectSubControlItemIds.add(n.id),e._render()},ap=(e,t)=>{let n=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._directDraft={...e._directDraft,subDirectControlItems:n},e._openDirectSubControlItemIds=new Set([...e._openDirectSubControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},op=(e,t)=>{e._openDirectSubControlItemIds.has(t)?e._openDirectSubControlItemIds.delete(t):e._openDirectSubControlItemIds.add(t),e._render()},lp=(e,t,n,r)=>{let i=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).map(a=>a.id===t?{...a,[n]:r}:a);e._directDraft={...e._directDraft,subDirectControlItems:i}},sp=async e=>{if(!e._searchLoading){e._searchLoading=!0,e._searchActiveType="subDirectControlSample",e._searchActiveItemId=null,e._render();try{let t=await e._searchUuid("",["sub-direct-controls-sample"]);e._subDirectControlSampleOptions=t}catch{e._subDirectControlSampleOptions=[]}finally{e._searchLoading=!1,e._render()}}},dp=async e=>{if(!(e._directModalSaving||!e._directEditingId)){e._directModalSaving=!0,e._directError="",e._render();try{let t=!e._directEditingStatus;await e._updateDirectStatusById(e._directEditingId,t),e._directEditingStatus=t,e._status=t?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043A\u0440\u044B\u0442\u0430."}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directModalSaving=!1,e._render()}}},up=async e=>{if(!e._apiUrl("")){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildDirectPayload()}catch(r){e._directError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._directModalSaving=!0,e._directError="",e._render();try{let r=e._directModalMode==="edit"&&e._directEditingId,i="sub-direct-controls",a=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._directEditingId)}`):e._apiUrl(`/api/cms/${i}`),l=await fetch(a,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._directCommands=e._directCommands.map(m=>String(m._id??"")===String(e._directEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._directEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??n.uuidDirect??Date.now());e._directCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._directCommands]}await e._loadDirectCommands(),e._status=r?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(r){e._directError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}},cp=async e=>{if(e._directEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443?")){e._directModalSaving=!0,e._directError="",e._render();try{await e._deleteItem("sub-direct-controls",e._directEditingId),e._directCommands=e._directCommands.filter(t=>String(t._id??"")!==String(e._directEditingId)),e._status="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}}},pp=e=>{e._addModalBackdrop(),e._templateModalOpen=!0,e._templateModalMode="create",e._templateEditingId="",e._templateDraft=e._newTemplateDraft(),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},fp=(e,t)=>{e._addModalBackdrop();let n=e._templateCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",e._render();return}e._templateModalOpen=!0,e._templateModalMode="edit",e._templateEditingId=String(n._id??""),e._templateDraft=e._newTemplateDraft(n),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},mp=e=>{e._templateModalSaving||(e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._render())},gp=(e,t,n)=>{e._templateDraft={...e._templateDraft,[t]:n}},hp=e=>{let t=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[],n=pr();e._templateDraft={...e._templateDraft,subDirectControlItems:[...t,n]},e._openTemplateSubControlItemIds.add(n.id),e._render()},yp=(e,t)=>{let n=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._templateDraft={...e._templateDraft,subDirectControlItems:n},e._openTemplateSubControlItemIds=new Set([...e._openTemplateSubControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},_p=(e,t)=>{e._openTemplateSubControlItemIds.has(t)?e._openTemplateSubControlItemIds.delete(t):e._openTemplateSubControlItemIds.add(t),e._render()},vp=(e,t,n,r)=>{let i=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).map(a=>a.id===t?{...a,[n]:r}:a);e._templateDraft={...e._templateDraft,subDirectControlItems:i}},Sp=async e=>{if(!e._apiUrl("")){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildTemplatePayload()}catch(r){e._templateError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",e._render();return}e._templateModalSaving=!0,e._templateError="",e._render();try{let r=e._templateModalMode==="edit"&&e._templateEditingId,i="sub-direct-controls-sample",a=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._templateEditingId)}`):e._apiUrl(`/api/cms/${i}`),l=await fetch(a,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._templateCommands=e._templateCommands.map(m=>String(m._id??"")===String(e._templateEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._templateEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??Date.now());e._templateCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._templateCommands]}await e._loadTemplateCommands(),e._status=r?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(r){e._templateError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}},bp=async e=>{if(e._templateEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D?")){e._templateModalSaving=!0,e._templateError="",e._render();try{await e._deleteItem("sub-direct-controls-sample",e._templateEditingId),e._templateCommands=e._templateCommands.filter(t=>String(t._id??"")!==String(e._templateEditingId)),e._status="\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(t){e._templateError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}}};var Il=e=>String(e?.title??e?.name??"").trim(),El=e=>String(e?.mappingType??e?.mapping_type??e?.actionType??e?.action_type??e?.type??"").trim(),wp=async(e,t,n,r=null)=>{if(!t||t.length===0){e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render();return}e._searchActiveItemId=r,e._searchActiveType=n,e._searchLoading=!0;try{let i=[];n==="directControl"?i=["sub-direct-controls"]:n==="nextAction"?i=["sub-commands","commands"]:n==="subDirectControlSample"&&(i=["sub-direct-controls-sample"]);let a=await e._searchUuid(t,i);if(e._searchResults=a,n==="directControl"&&r){let l=String(t??"").trim().toLowerCase(),s=a.find(d=>String(d?.uuid??"").trim().toLowerCase()===l)||(a.length===1?a[0]:null);if(s&&(s?.title||s?.mappingType||s?.actionType||s?.type||s?.uuid)){let d=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(m=>m.id===r?{...m,displayValue:Il(s)||String(m.displayValue??""),mappingType:El(s)}:m);e._draft={...e._draft,directControlItems:d}}}}catch{e._searchResults=[]}finally{e._searchLoading=!1,e._render()}},Cp=(e,t,n,r=null)=>{e._searchDebounceTimer&&clearTimeout(e._searchDebounceTimer),e._searchDebounceTimer=setTimeout(()=>{e._performUuidSearch(t,n,r)},300)},Tp=(e,t,n)=>{let r=String(t??"").trim(),i=e._searchActiveType;if(i==="directControl"){let a=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(o=>o.id===r?{...o,uuid:String(n.uuid??""),displayValue:Il(n),mappingType:El(n)}:o);e._draft={...e._draft,directControlItems:a}}else if(i==="nextAction"){let a=El(n);e._updateNextActionItem(r,"displayValue",Il(n)),e._updateNextActionItem(r,"mappingType",a),e._updateNextActionItem(r,"actionType",a);let o=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(l=>l.id===r?{...l,uuid:n.uuid}:l);e._draft={...e._draft,nextActionItems:o}}e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render()},kp=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)return[];try{let i=Array.isArray(n)?n.join(","):String(n),a=`${r}/api/cms/search?collections=${encodeURIComponent(i)}&text=${encodeURIComponent(t)}`,o=await fetch(a,{method:"GET",headers:e._apiHeaders(!1)});if(!o.ok)return[];let l=await o.json();return Array.isArray(l.data)?l.data:Array.isArray(l)?l:[]}catch{return[]}},Dp=async(e,t,n)=>{let r=String(t??"").trim();if(!r)return"";let i=await e._searchUuid(r,n),a=i.find(o=>String(o?.uuid??"").trim()===r);return String(a?.title??i[0]?.title??"").trim()},Ip=async e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let i=String(r.uuid??"").trim(),a=String(r.displayValue??"").trim(),o=String(r.mappingType??"").trim();if(!i||a&&o)return r;let l=await e._searchUuid(i,["sub-direct-controls"]),s=l.find(p=>String(p?.uuid??"").trim()===i)||l[0]||null,d=String(s?.title??""),m=String(s?.mappingType??s?.mapping_type??s?.actionType??s?.action_type??s?.type??"").trim();return{...r,displayValue:a||d,mappingType:o||m}}));e._draft={...e._draft,directControlItems:n},e._render()},Ep=async e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let i=String(r.uuid??"").trim(),a=String(r.displayValue??"").trim();if(!i||a)return r;let o=await e._resolveTitleByUuid(i,["sub-commands","commands"]);return{...r,displayValue:o}}));e._draft={...e._draft,nextActionItems:n},e._render()},Ap=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)throw new Error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.");let i=`${r}/api/cms/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,a=await fetch(i,{method:"DELETE",headers:e._apiHeaders(!0)});if(!a.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F: HTTP ${a.status}`)};var $p=async e=>{let t=Ie.map(r=>r.type).join(","),n=e._apiUrl(`/api/cms/search?actionType=${encodeURIComponent(t)}&collections=settings-dialog`);if(!n){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._defaultsLoading=!0,e._defaultsError="",e._render();try{let r=await fetch(n,{method:"GET",headers:e._apiHeaders(!1)});if(!r.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${r.status}`);let i=await r.json(),a=Array.isArray(i?.data)?i.data:Array.isArray(i)?i:[],o=e._newDefaultsState(),l=new Set,s=Ie.map(m=>m.type),d=(m,p)=>{let g=String(m?.actionType??m?.componentDialog?.actionType??"").trim();if(g&&o[g]&&!l.has(g))return g;let S=Ie.find(y=>String(y.title).trim()===String(m?.title??"").trim()&&!l.has(y.type));if(S?.type&&o[S.type])return S.type;let b=s[p];return b&&o[b]&&!l.has(b)?b:""};a.forEach((m,p)=>{let g=d(m,p);g&&(l.add(g),o[g]=e._newDefaultsDraft(g,m))}),e._defaultsByType=o,e._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}catch(r){e._defaultsError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._defaultsLoading=!1,e._render()}},Mp=(e,t)=>{let n=e._defaultConfig(t);e._addModalBackdrop(),e._defaultsActiveType=n.type,e._defaultsActiveId=String(e._defaultsByType[n.type]?._id??""),e._defaultsModalOpen=!0,e._defaultsError="",e._render()},xp=e=>{e._defaultsModalSaving||(e._removeModalBackdrop(),e._defaultsModalOpen=!1,e._render())},Pp=(e,t,n)=>{let r=e._defaultsActiveType,i=e._defaultsByType[r]??e._newDefaultsDraft(r);e._defaultsByType={...e._defaultsByType,[r]:{...i,[t]:n}}},Lp=async(e,t,n=!1)=>{let r=e._defaultConfig(t);if(e._defaultsActiveType=r.type,e._defaultsActiveId=String(e._defaultsByType[r.type]?._id??e._defaultsActiveId??""),!e._apiUrl("")){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let a;try{a=e._buildDefaultsPayload()}catch(o){e._defaultsError=o?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._defaultsModalSaving=n,e._defaultsLoading=!n,e._defaultsError="",e._render();try{let o=!!e._defaultsActiveId,l="settings-dialog",s=o?e._apiUrl(`/api/cms/${l}/${encodeURIComponent(e._defaultsActiveId)}`):e._apiUrl(`/api/cms/${l}`),m=await fetch(s,{method:o?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(a)});if(!m.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${m.status}`);let p=await m.json().catch(()=>null),g=p?.data&&typeof p.data=="object"?p.data:p&&typeof p=="object"?p:null,S=e._defaultsActiveType,b=e._defaultsByType[S]??e._newDefaultsDraft(S),y=String(g?._id??b._id??e._defaultsActiveId??"");e._defaultsByType={...e._defaultsByType,[S]:{...b,...g&&typeof g=="object"?g:a,_id:y}},e._defaultsActiveId=y,await e._reloadDefaultsCommands(),e._status=o?"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",n&&(e._removeModalBackdrop(),e._defaultsModalOpen=!1)}catch(o){e._defaultsError=o?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._defaultsModalSaving=!1,e._defaultsLoading=!1,e._render()}},Np=async e=>{await e._saveDefaultsType(e._defaultsActiveType,!0)};var zp=(e,t,n)=>{t.querySelectorAll("[data-field]").forEach(r=>{let i=r.dataset.field,a=o=>{let l=r.type==="checkbox"?o.currentTarget.checked:o.currentTarget.value;e._updateDraft(i,l)};n(r,"input",a),n(r,"change",a)}),t.querySelectorAll("[data-direct-field]").forEach(r=>{let i=r.dataset.directField,a=o=>{let l=r.type==="checkbox"?o.currentTarget.checked:o.currentTarget.value;e._updateDirectDraft(i,l),i==="typeData"&&(o.currentTarget.value!=="command"?(e._updateDirectDraft("manual",!1),e._updateDirectDraft("voiceCommands","")):(e._searchResults=[],e._searchActiveType=null)),i==="subDirectControl"&&l.length>0&&e._performUuidSearch(l,"subDirectControlSample"),(r.type==="checkbox"||r.tagName==="SELECT")&&e._render()};n(r,"input",a),n(r,"change",a),i==="subDirectControl"&&(n(r,"focus",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}),n(r,"click",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}))}),t.querySelectorAll("[data-template-field]").forEach(r=>{let i=r.dataset.templateField,a=o=>e._updateTemplateDraft(i,o.currentTarget.value);n(r,"input",a),n(r,"change",a)}),t.querySelectorAll("[data-defaults-field]").forEach(r=>{let i=r.dataset.defaultsField,a=o=>{let l=r.type==="checkbox"?o.currentTarget.checked:o.currentTarget.value;e._updateDefaultsDraft(i,l);let s=e._defaultConfig(e._defaultsActiveType);i==="llmEnabled"&&r.type==="checkbox"&&s.supportsLlm&&e._render()};n(r,"input",a),(r.type==="checkbox"||r.tagName==="SELECT")&&n(r,"change",a)}),t.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(r=>{let i=r.dataset.responseItemId,a=r.dataset.responseItemField,o=l=>{let s=r.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;e._updateVoiceResponseItem(i,a,s),r.type==="checkbox"&&e._render()};n(r,"input",o),r.type==="checkbox"&&n(r,"change",o)}),t.querySelectorAll("[data-direct-control-item-id]").forEach(r=>{let i=r.dataset.directControlItemId;r.tagName==="INPUT"||r.tagName==="TEXTAREA"?(n(r,"input",o=>e._updateDirectControlItem(i,o.currentTarget.value,!1)),n(r,"change",o=>e._updateDirectControlItem(i,o.currentTarget.value,!0))):(n(r,"input",o=>e._updateDirectControlItem(i,o.currentTarget.value,!0)),n(r,"change",o=>e._updateDirectControlItem(i,o.currentTarget.value,!0)))}),t.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(r=>{let i=r.dataset.nextActionItemId,a=r.dataset.nextActionItemField;if(r.tagName==="INPUT"||r.tagName==="TEXTAREA")n(r,"input",l=>e._updateNextActionItem(i,a,l.currentTarget.value,!1,!1)),n(r,"change",l=>e._updateNextActionItem(i,a,l.currentTarget.value,!0,!0));else{let l=s=>e._updateNextActionItem(i,a,s.currentTarget.value,!0,!0);n(r,"input",l),n(r,"change",l)}}),t.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(r=>{let i=r.dataset.directSubControlItemId,a=r.dataset.directSubControlItemField,o=l=>e._updateDirectSubControlItem(i,a,l.currentTarget.value);n(r,"input",o),n(r,"change",o)}),t.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(r=>{let i=r.dataset.templateSubControlItemId,a=r.dataset.templateSubControlItemField,o=l=>e._updateTemplateSubControlItem(i,a,l.currentTarget.value);n(r,"input",o),n(r,"change",o)})};var Rp=(e,t,n)=>{n(t.querySelector('[data-action="generate-uuid"]'),"click",()=>e._refreshUuid()),n(t.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>e._refreshDirectUuid()),n(t.querySelector('[data-action="generate-template-uuid"]'),"click",()=>e._refreshTemplateUuid()),n(t.querySelector('[data-action="add-voice-response-item"]'),"click",()=>e._addVoiceResponseItem()),n(t.querySelector('[data-action="add-direct-control-item"]'),"click",()=>e._addDirectControlItem()),n(t.querySelector('[data-action="add-next-action-item"]'),"click",()=>e._addNextActionItem()),n(t.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>e._addDirectSubControlItem()),n(t.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>e._addTemplateSubControlItem()),t.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(r=>{n(r,"click",()=>e._removeVoiceResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="remove-next-action-item"]').forEach(r=>{n(r,"click",()=>e._removeNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(r=>{n(r,"click",()=>e._toggleNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-response-item"]').forEach(r=>{n(r,"click",()=>e._toggleResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="open-item-actions"]').forEach(r=>{n(r,"click",i=>{i.stopPropagation(),e._openItemActionsModal({kind:r.dataset.itemKind,id:r.dataset.itemId,title:r.dataset.itemTitle,collection:r.dataset.itemCollection,status:String(r.dataset.itemStatus??"").toLowerCase()==="true"})})})};var Op=(e,t,n)=>{t.querySelectorAll('[data-action="close"]').forEach(r=>{n(r,"click",()=>e._closeModal())}),t.querySelectorAll('[data-action="close-direct"]').forEach(r=>{n(r,"click",()=>e._closeDirectModal())}),t.querySelectorAll('[data-action="close-template"]').forEach(r=>{n(r,"click",()=>e._closeTemplateModal())}),t.querySelectorAll('[data-action="close-defaults"]').forEach(r=>{n(r,"click",()=>e._closeDefaultsModal())}),t.querySelectorAll('[data-action="close-item-actions"]').forEach(r=>{n(r,"click",()=>e._closeItemActionsModal())}),n(t.querySelector('[data-action="save"]'),"click",()=>e._saveModal()),n(t.querySelector('[data-action="save-direct"]'),"click",()=>e._saveDirectModal()),n(t.querySelector('[data-action="save-template"]'),"click",()=>e._saveTemplateModal()),n(t.querySelector('[data-action="save-defaults"]'),"click",()=>e._saveDefaultsModal()),n(t.querySelector('[data-action="delete"]'),"click",()=>e._deleteModal()),n(t.querySelector('[data-action="delete-direct"]'),"click",()=>e._deleteDirectModal()),n(t.querySelector('[data-action="delete-template"]'),"click",()=>e._deleteTemplateModal()),n(t.querySelector('[data-action="toggle-status"]'),"click",()=>e._toggleEditModalStatus()),n(t.querySelector('[data-action="toggle-direct-status"]'),"click",()=>e._toggleDirectEditModalStatus()),n(t.querySelector('[data-action="apply-item-status"]'),"click",()=>e._applyItemStatus())};var Up=(e,t,n)=>{t.querySelectorAll('[data-action="select-search-result"]').forEach(r=>{n(r,"click",i=>{i.preventDefault(),i.stopPropagation();let a=r.dataset.directControlItemId||r.dataset.nextActionItemId,o={uuid:r.dataset.resultUuid,title:r.dataset.resultTitle,mappingType:r.dataset.resultMappingType||r.dataset.resultActiveType||r.dataset.resultType};e._selectSearchResult(a,o)})})};var Fp=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(r=>{n(r,"click",()=>e._setTab(r.dataset.tab))}),n(t.querySelector('[data-action="reload"]'),"click",()=>e._loadPage(e._pageByTab[e._tab]||1,{force:!0})),n(t.querySelector('[data-action="create"]'),"click",()=>e._openCreateModal()),n(t.querySelector('[data-action="prev"]'),"click",()=>e._loadPage((e._pageByTab[e._tab]||1)-1)),n(t.querySelector('[data-action="next"]'),"click",()=>e._loadPage((e._pageByTab[e._tab]||1)+1)),t.querySelectorAll('[data-action="goto-page"]').forEach(r=>{n(r,"click",()=>e._loadPage(Number(r.dataset.page)||1))}),n(t.querySelector('[data-action="reload-direct"]'),"click",()=>e._reloadDirectCommands()),n(t.querySelector('[data-action="create-direct"]'),"click",()=>e._openCreateDirectModal()),n(t.querySelector('[data-action="reload-template"]'),"click",()=>e._reloadTemplateCommands()),n(t.querySelector('[data-action="create-template"]'),"click",()=>e._openCreateTemplateModal()),n(t.querySelector('[data-action="reload-defaults"]'),"click",()=>e._reloadDefaultsCommands()),t.querySelectorAll('[data-action="open-defaults-item"]').forEach(r=>{n(r,"click",()=>e._openDefaultsModal(r.dataset.defaultType))}),t.querySelectorAll('[data-action="edit"]').forEach(r=>{n(r,"click",()=>e._openEditModal(r.dataset.commandId))}),t.querySelectorAll('[data-action="edit-direct"]').forEach(r=>{n(r,"click",()=>e._openEditDirectModal(r.dataset.directId))}),t.querySelectorAll('[data-action="edit-template"]').forEach(r=>{n(r,"click",()=>e._openEditTemplateModal(r.dataset.templateId))}),t.querySelectorAll("[data-direct-subtab]").forEach(r=>{n(r,"click",()=>e._setDirectSubtab(r.dataset.directSubtab))})};var jp=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(i=>{n(r,i,a=>e._swallowUiEvent(a))})})};var Bp=e=>{let t=e.shadowRoot;if(!t)return null;e._bindController?.abort&&e._bindController.abort(),e._legacyListeners.length&&(e._legacyListeners.forEach(({element:a,eventName:o,handler:l})=>{a.removeEventListener(o,l)}),e._legacyListeners=[]);let n=typeof AbortController<"u";e._bindController=n?new AbortController:null;let r=e._bindController?.signal??null;return{root:t,on:(a,o,l)=>{if(a)try{r?a.addEventListener(o,l,{signal:r}):(a.addEventListener(o,l),e._legacyListeners.push({element:a,eventName:o,handler:l}))}catch{a.addEventListener(o,l),e._legacyListeners.push({element:a,eventName:o,handler:l})}}}};var Vp=e=>{let t=Bp(e);if(!t)return;let{root:n,on:r}=t;Fp(e,n,r),Op(e,n,r),Rp(e,n,r),Up(e,n,r),zp(e,n,r),jp(e,n,r)};var Hp=e=>{if(!e._directModalOpen)return"";let t=e._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",n=e._directDraft.typeData==="command",r=e._directModalMode==="edit",i=!r&&!String(e._directDraft.uuid??"").trim(),a=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],o=Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[],l=String(e._directDraft.subDirectControl??"").trim(),s=o.some(d=>String(d?.uuid??"").trim()===l);return`
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
            ${i?`
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
                ${a.map((d,m)=>{let p=e._openDirectSubControlItemIds.has(d.id);return`
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
                ${a.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
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
  `},Yp=e=>{if(!e._templateModalOpen)return"";let t=e._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",n=e._templateModalMode==="edit",r=!n&&!String(e._templateDraft.uuid??"").trim(),i=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[];return`
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
            ${i.map((a,o)=>{let l=e._openTemplateSubControlItemIds.has(a.id);return`
                <section class="response-item-card ${l?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-template-sub-control-item"
                    data-template-sub-control-item-id="${h(a.id)}"
                  >
                    <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}</span>
                    <span class="response-accordion-icon">${l?"\u2212":"+"}</span>
                  </button>
                  ${l?`
                    <div class="response-item-grid">
                      <label>
                        <span>subMappingType</span>
                        <input
                          data-template-sub-control-item-id="${h(a.id)}"
                          data-template-sub-control-item-field="subType"
                          value="${h(a.subType)}"
                        />
                      </label>
                      <label>
                        <span>subVoiceCommands</span>
                        <textarea
                          rows="3"
                          data-template-sub-control-item-id="${h(a.id)}"
                          data-template-sub-control-item-field="subVoiceCommands"
                        >${h(a.subVoiceCommands)}</textarea>
                      </label>
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-template-sub-control-item"
                          data-template-sub-control-item-id="${h(a.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                      </div>
                    </div>
                  `:""}
                </section>
              `}).join("")}
            ${i.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
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
              ${(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map((i,a)=>{let o=e._openResponseItemIds.has(i.id);return`
                  <section class="response-item-card ${o?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-response-item"
                      data-response-item-id="${h(i.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${a+1}</span>
                      <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                    </button>
                    ${o?`
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>actionType</span>
                            <input
                              data-response-item-id="${h(i.id)}"
                              data-response-item-field="type"
                              value="${h(i.type)}"
                              placeholder="default"
                            />
                          </label>
                          <label>
                            <span>LLM</span>
                            <div class="switch-control">
                              <input
                                type="checkbox"
                                data-response-item-id="${h(i.id)}"
                                data-response-item-field="llmEnabled"
                                ${i.llmEnabled?"checked":""}
                              />
                              <span class="switch-slider" aria-hidden="true"></span>
                              <span class="switch-label">${i.llmEnabled?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
                            </div>
                          </label>
                        </div>
                        <label>
                          <span>voiceResponse</span>
                          <textarea
                            rows="3"
                            data-response-item-id="${h(i.id)}"
                            data-response-item-field="voiceResponse"
                          >${h(i.voiceResponse)}</textarea>
                        </label>
                        ${i.llmEnabled?`
                          <label>
                            <span>system</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${h(i.id)}"
                              data-response-item-field="system"
                            >${h(i.system)}</textarea>
                          </label>
                          <label>
                            <span>model</span>
                            <input
                              data-response-item-id="${h(i.id)}"
                              data-response-item-field="model"
                              value="${h(i.model)}"
                            />
                          </label>
                        `:""}
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-voice-response-item"
                            data-response-item-id="${h(i.id)}"
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
            ${(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map((i,a)=>{let o=e._openNextActionItemIds.has(i.id);return`
                <section class="response-item-card ${o?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-next-action-item"
                    data-next-action-item-id="${h(i.id)}"
                  >
                    <span>${h(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${a+1}`)}</span>
                    <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                  </button>
                  ${o?`
                    <div class="response-item-grid">
                      <div class="response-inline-row">
                        <label>
                          <span>actionTypeComponent</span>
                          <select data-next-action-item-id="${h(i.id)}" data-next-action-item-field="actionTypeComponent">
                            ${Oi.map(l=>`
                              <option value="${l}" ${i.actionTypeComponent===l?"selected":""}>${l}</option>
                            `).join("")}
                          </select>
                        </label>
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-next-action-item-id="${h(i.id)}"
                              data-next-action-item-field="uuid"
                              value="${h(i.uuid)}"
                              placeholder="uuid"
                            />
                            ${e._searchActiveType==="nextAction"&&e._searchActiveItemId===i.id&&e._searchResults.length>0?`
                              <div class="dropdown-options">
                                ${e._searchResults.map(l=>`
                                  <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${h(i.id)}" data-result-uuid="${h(l.uuid)}" data-result-title="${h(l.title??l.name??"")}" data-result-mapping-type="${h(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}">
                                    ${h(l.title??l.name??"")} (${h(l.uuid)})
                                  </div>
                                `).join("")}
                              </div>
                            `:""}
                          </div>
                        </label>
                      </div>
                      ${i.actionTypeComponent==="custom"?`
                        <label>
                          <span>actionType</span>
                          <input
                            data-next-action-item-id="${h(i.id)}"
                            data-next-action-item-field="actionType"
                            value="${h(i.actionType??i.mappingType??"")}"
                            placeholder="custom actionType"
                          />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-next-action-item"
                          data-next-action-item-id="${h(i.id)}"
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
            ${(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map((i,a)=>{let o=e._openDirectControlItemIds.has(i.id);return`
                <section class="response-item-card ${o?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-direct-control-item"
                    data-direct-control-item-id="${h(i.id)}"
                  >
                    <span>${h(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${a+1}`)}</span>
                    <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                  </button>
                  ${o?`
                    <div class="response-item-grid">
                      <label>
                        <span>uuid</span>
                        <div class="dropdown-container">
                          <input
                            data-direct-control-item-id="${h(i.id)}"
                            value="${h(i.uuid)}"
                            placeholder="uuid"
                          />
                          ${e._searchActiveType==="directControl"&&e._searchActiveItemId===i.id&&e._searchResults.length>0?`
                            <div class="dropdown-options">
                              ${e._searchResults.map(l=>`
                                <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${h(i.id)}" data-result-uuid="${h(l.uuid)}" data-result-title="${h(l.title??l.name??"")}" data-result-mapping-type="${h(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}" data-result-active-type="${h(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}" data-result-type="${h(l.type??"")}">
                                  ${h(l.title??l.name??"")} (${h(l.uuid)})
                                </div>
                              `).join("")}
                            </div>
                          `:""}
                        </div>
                      </label>
                      ${String(i.uuid??"").trim()||String(i.mappingType??"").trim()?`
                        <label>
                          <span>mappingType</span>
                          <input value="${h(i.mappingType??"")}" placeholder="mappingType" disabled />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-direct-control-item"
                          data-direct-control-item-id="${h(i.id)}"
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
`;var Gp=e=>{let t=e._renderActiveTabBody(),n=`
    ${Qp}
    <section class="subtabs-dock">
      <div class="subtabs">
        <button type="button" class="subtab-button ${e._tab===I.primary?"active":""}" data-tab="${I.primary}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
        <button type="button" class="subtab-button ${e._tab===I.secondary?"active":""}" data-tab="${I.secondary}">\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
        <button type="button" class="subtab-button ${e._tab===I.direct?"active":""}" data-tab="${I.direct}">\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</button>
        <button type="button" class="subtab-button ${e._tab===I.defaults?"active":""}" data-tab="${I.defaults}">\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
      </div>
    </section>
    ${e._error?`<div class="status error">${h(e._error)}</div>`:""}
    ${e._status?`<div class="status ok">${h(e._status)}</div>`:""}
    ${t}
    ${e._renderModal()}
    ${e._renderDirectModal()}
    ${e._renderTemplateModal()}
    ${e._renderDefaultsModal()}
    ${e._renderItemActionsModal()}
  `;e._mountReact(n),e._bind()};var Xp=()=>{if(typeof document>"u")return;let e=document.getElementById("dialog-custom-ui-modal-style");e||(e=document.createElement("style"),e.id="dialog-custom-ui-modal-style",e.textContent="body.modal-open { overflow: hidden; }",document.head.appendChild(e))},Jp=e=>{e._reactRoot=null,e._hass=null,e._config={base_url:"",timer_alarm_token:"",theme:"light"},e._tab=I.primary,e._commands=[],e._pageByTab={[I.primary]:1,[I.secondary]:1},e._totalByTab={[I.primary]:0,[I.secondary]:0},e._totalPagesByTab={[I.primary]:1,[I.secondary]:1},e._lastLoadedTab=I.primary,e._lastLoadPageKey="",e._inFlightPageKey="",e._lastLoadedPageKey="",e._lastLoadedPageAt=0,e._loading=!1,e._error="",e._status="",e._modalOpen=!1,e._modalMode="create",e._modalSaving=!1,e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._bindController=null,e._legacyListeners=[],e._draft=e._newDraft(),e._searchActiveItemId=null,e._searchActiveType=null,e._searchResults=[],e._searchLoading=!1,e._searchDebounceTimer=null,e._modalScrollTop=0,e._directSubtab=ie.basic,e._directCommands=[],e._directLoading=!1,e._directError="",e._directModalOpen=!1,e._directModalMode="create",e._directModalSaving=!1,e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._templateCommands=[],e._templateLoading=!1,e._templateError="",e._templateModalOpen=!1,e._templateModalMode="create",e._templateModalSaving=!1,e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._subDirectControlSampleOptions=[],e._defaultsLoading=!1,e._defaultsError="",e._defaultsModalOpen=!1,e._defaultsModalSaving=!1,e._defaultsByType=e._newDefaultsState(),e._defaultsActiveType=Ie[0].type,e._defaultsActiveId="",e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsId="",e._itemActionsKind="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._itemActionsTitle="",e._modalCount=0};var ah=({html:e})=>$l.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Al=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),Xp(),Jp(this)}set hass(t){let n=!this._hass;this._hass=t,(n||!this.shadowRoot?.innerHTML)&&this._render()}set config(t){let n={base_url:String(t?.base_url??"").trim(),timer_alarm_token:String(t?.timer_alarm_token??"").trim(),theme:String(t?.theme??"light").trim().toLowerCase()==="dark"?"dark":"light"},r=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token||n.theme!==this._config.theme,i=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token;if(!r){this.shadowRoot?.innerHTML||this._render();return}if(this._config=n,this._applyTheme(),i&&(this._tab===I.primary||this._tab===I.secondary)&&!this._loading&&n.base_url){this._error="",this._loadPage(this._pageByTab[this._tab]||1,{force:!0});return}if(i&&this._tab===I.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._applyTheme(),this._render(),(this._tab===I.primary||this._tab===I.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1),this._tab===I.direct&&!this._directCommands.length&&!this._directLoading&&this._directSubtab===ie.basic&&this._loadDirectCommands(),this._tab===I.direct&&!this._templateCommands.length&&!this._templateLoading&&this._directSubtab===ie.templates&&this._loadTemplateCommands()}disconnectedCallback(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}_mountReact(t){this._reactRoot||(this._reactRoot=(0,ef.createRoot)(this.shadowRoot));let n=this.shadowRoot.querySelector(".modal");n&&(this._modalScrollTop=n.scrollTop),(0,Zp.flushSync)(()=>{this._reactRoot.render($l.default.createElement(ah,{html:t}))});let r=this.shadowRoot.querySelector(".modal");r&&(r.scrollTop=this._modalScrollTop)}_addModalBackdrop(){this._modalCount++,this._modalCount===1&&typeof document<"u"&&document.body&&document.body.classList.add("modal-open")}_removeModalBackdrop(){this._modalCount=Math.max(0,this._modalCount-1),this._modalCount===0&&typeof document<"u"&&document.body&&document.body.classList.remove("modal-open")}_newDraft(t=null){return gc(t)}_newDirectDraft(t=null){return hc(t)}_newTemplateDraft(t=null){return yc(t)}_defaultConfig(t){return Ui(t)}_newDefaultsDraft(t,n=null){return kl(t,n)}_newDefaultsState(){return _c()}_apiHeaders(t=!1){let n={};return t&&(n["Content-Type"]="application/json"),this._config.timer_alarm_token&&(n.Authorization=this._config.timer_alarm_token),n}_apiUrl(t){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}${t}`:""}async _loadPage(t=1,n={}){if(this._tab!==I.primary&&this._tab!==I.secondary)return;let{force:r=!1}=n??{},i=this._tab,a=Math.max(1,Number(t)||1),o=`${i}:${a}`;if(this._inFlightPageKey===o)return;let l=Date.now();if(!r&&this._lastLoadedPageKey===o&&l-this._lastLoadedPageAt<1500)return;let d=i===I.secondary?"/api/cms/sub-commands":"/api/cms/commands",m=this._apiUrl(`${d}?page=${encodeURIComponent(a)}&pageSize=${20}`);if(!m){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._lastLoadPageKey=o,this._inFlightPageKey=o,this._loading=!0,this._error="",this._render();try{let p=await fetch(m,{method:"GET",headers:this._apiHeaders(!1)});if(!p.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${p.status}`);let g=await p.json(),S=Array.isArray(g.data)?g.data:[],b=g?.meta?.pagination??g?.pagination??{},y=Number(b.total??g.total??g.count??g.meta?.total??0),N=Number(b.page??a)||a,f=Number(b.pageSize??20)||20,u=Number(b.totalPages??b.pageCount??0),c=Number.isFinite(u)&&u>0?u:Math.max(1,Math.ceil((Number.isFinite(y)&&y>0?y:S.length)/f));this._commands=S,this._lastLoadedTab=i,this._pageByTab[i]=Math.max(1,N),this._totalPagesByTab[i]=Math.max(1,c),this._totalByTab[i]=Number.isFinite(y)&&y>0?y:Number.isFinite(u)&&u>0?u*f:a*20+(S.length===20?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${S.length}.`,this._lastLoadedPageKey=o,this._lastLoadedPageAt=Date.now()}catch(p){this._commands=[],this._error=p?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._inFlightPageKey===o&&(this._inFlightPageKey=""),this._loading=!1,this._render()}}_setTab(t){if(this._tab=t,this._error="",this._status="",this._render(),t===I.primary||t===I.secondary){let n=this._pageByTab[t]||1;(!this._loading||this._lastLoadedTab!==t)&&this._loadPage(n)}t===I.direct&&(this._directSubtab===ie.basic&&!this._directCommands.length&&!this._directLoading&&this._loadDirectCommands(),this._directSubtab===ie.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands()),t===I.defaults&&!this._defaultsLoading&&this._reloadDefaultsCommands()}_buildPaginationItems(t,n){let r=Math.max(1,Number(t)||1),i=Math.max(1,Number(n)||1);return i<=7?Array.from({length:i},(a,o)=>o+1):r<=4?[1,2,3,4,"ellipsis",i]:r>=i-3?[1,"ellipsis",i-3,i-2,i-1,i]:[1,"ellipsis",r-1,r,r+1,"ellipsis",i]}_openCreateModal(){return wc(this)}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_openEditModal(t){return Cc(this,t)}_closeModal(){return Tc(this)}_updateDraft(t,n){this._draft={...this._draft,[t]:n}}_buildPayload(){let t=Fi(this._draft);return this._tab===I.secondary?(delete t.componentDialog,t):(delete t.subComponentDialog,t)}_refreshUuid(){return Ic(this)}_addVoiceResponseItem(){return Ec(this)}_removeVoiceResponseItem(t){return Ac(this,t)}_updateVoiceResponseItem(t,n,r){return $c(this,t,n,r)}_toggleResponseItem(t){return Mc(this,t)}_addDirectControlItem(){return xc(this)}_removeDirectControlItem(t){return Pc(this,t)}_updateDirectControlItem(t,n){return Lc(this,t,n)}_toggleDirectControlItem(t){return Nc(this,t)}_addNextActionItem(){return zc(this)}_removeNextActionItem(t){return Rc(this,t)}_updateNextActionItem(t,n,r){return Oc(this,t,n,r)}_toggleNextActionItem(t){return Uc(this,t)}_setDirectSubtab(t){return qc(this,t)}async _loadDirectCommands(){return Wc(this)}async _loadTemplateCommands(){return Kc(this)}_reloadDirectCommands(){return Qc(this)}_reloadTemplateCommands(){return Gc(this)}_openCreateDirectModal(){return Xc(this)}_openEditDirectModal(t){return Jc(this,t)}_closeDirectModal(){return Zc(this)}_updateDirectDraft(t,n){return ep(this,t,n)}async _hydrateSelectedSubDirectControlSample(){return tp(this)}_refreshDirectUuid(){return np(this)}_refreshTemplateUuid(){return rp(this)}_addDirectSubControlItem(){return ip(this)}_removeDirectSubControlItem(t){return ap(this,t)}_toggleDirectSubControlItem(t){return op(this,t)}_updateDirectSubControlItem(t,n,r){return lp(this,t,n,r)}_buildDirectPayload(){return ji(this._directDraft)}async _loadSubDirectControlSamples(){return sp(this)}async _performUuidSearch(t,n,r=null){return wp(this,t,n,r)}_debouncedPerformUuidSearch(t,n,r=null){return Cp(this,t,n,r)}_selectSearchResult(t,n){return Tp(this,t,n)}async _searchUuid(t,n){return kp(this,t,n)}async _resolveTitleByUuid(t,n){return Dp(this,t,n)}async _hydrateDirectControlTitles(){return Ip(this)}async _hydrateNextActionTitles(){return Ep(this)}async _deleteItem(t,n){return Ap(this,t,n)}_openItemActionsModal({kind:t,id:n,title:r,collection:i,status:a}){return Fc(this,{kind:t,id:n,title:r,collection:i,status:a})}_closeItemActionsModal(){return jc(this)}async _updateCommandStatusById(t,n,r){return Bc(this,t,n,r)}async _updateDirectStatusById(t,n){return Vc(this,t,n)}async _applyItemStatus(){return Hc(this)}async _toggleEditModalStatus(){return Yc(this)}async _toggleDirectEditModalStatus(){return dp(this)}async _saveDirectModal(){return up(this)}async _deleteDirectModal(){return cp(this)}_openCreateTemplateModal(){return pp(this)}_openEditTemplateModal(t){return fp(this,t)}_closeTemplateModal(){return mp(this)}_updateTemplateDraft(t,n){return gp(this,t,n)}_addTemplateSubControlItem(){return hp(this)}_removeTemplateSubControlItem(t){return yp(this,t)}_toggleTemplateSubControlItem(t){return _p(this,t)}_updateTemplateSubControlItem(t,n,r){return vp(this,t,n,r)}_buildTemplatePayload(){return vc(this._templateDraft)}async _saveTemplateModal(){return Sp(this)}async _deleteTemplateModal(){return bp(this)}_reloadDefaultsCommands(){return $p(this)}_openDefaultsModal(t){return Mp(this,t)}_closeDefaultsModal(){return xp(this)}_updateDefaultsDraft(t,n){return Pp(this,t,n)}_buildDefaultsPayload(){let t=this._defaultsActiveType,n=this._defaultsByType[t]??this._newDefaultsDraft(t);return Sc(t,n)}async _saveDefaultsType(t,n=!1){return Lp(this,t,n)}async _saveDefaultsModal(){return Np(this)}async _saveModal(){return kc(this)}async _deleteModal(){return Dc(this)}_renderCommandsTab(t){return Ot(this,t)}_renderPrimaryCommandsPage(){return Bi(this)}_renderSecondaryCommandsPage(){return Vi(this)}_renderDirectBasicSection(t){return Hi(this,t)}_renderDirectTemplatesSection(t){return Yi(this,t)}_renderDirectCommandsTab(){return qi(this)}_renderActiveTabBody(){return bc(this)}_renderStub(t,n){return Dl(t,n)}_renderDirectModal(){return Hp(this)}_renderTemplateModal(){return Yp(this)}_renderDefaultsTab(){return Wi(this)}_renderDefaultsModal(){return qp(this)}_renderModal(){return Kp(this)}_renderItemActionsModal(){return Wp(this)}_swallowUiEvent(t){t.stopPropagation()}_bind(){Vp(this)}_render(){Gp(this)}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",Al);var fr={base_url:"http://127.0.0.1:8000",client_id:"",timer_alarm_token:"",timer_alarm_device_ids:[""],theme:"light",timeout:10,scenarios:[]},nf=`{
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
}`,rf=2e3,Ml=new URL(import.meta.url).searchParams.get("v")||"",tf=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),xl=Ml?tf?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(Ml)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(Ml)}`:tf?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js";var af=e=>(t,n,r)=>{t&&t.addEventListener(n,r)};var of=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(a=>{n(a,"click",()=>e._setActiveTab(a.dataset.tab))}),n(t.querySelector('[data-action="save"]'),"click",()=>e._save()),n(t.querySelector('[data-action="refresh-logs"]'),"click",()=>e._loadLogs()),n(t.querySelector('[data-action="download-json"]'),"click",()=>e._downloadJson()),n(t.querySelector('[data-action="upload-json"]'),"click",()=>e._openJsonFilePicker()),n(t.querySelector('[data-action="reset-commands-cache"]'),"click",()=>e._resetCommandsCache()),n(t.querySelector('[data-action="reload-yandex-scenarios"]'),"click",()=>e._loadYandexScenarios()),n(t.querySelector('[data-action="create-yandex-tab"]'),"click",()=>e._startYandexScenarioCreate()),n(t.querySelector('[data-action="save-yandex-scenario"]'),"click",()=>e._saveYandexScenarioFromModal()),n(t.querySelector('[data-action="delete-yandex-scenario"]'),"click",()=>e._deleteActiveYandexScenario());let r=t.querySelector('[data-action="add-scenario"]');r&&(r.onclick=()=>e._addScenario()),t.querySelectorAll('[data-action="select-yandex-tab"]').forEach(a=>{n(a,"click",()=>e._setYandexActiveScenario(a.dataset.yandexTab))}),n(t.querySelector('[data-action="select-yandex-tab-dropdown"]'),"change",a=>{e._setYandexActiveScenario(a.currentTarget.value)}),t.querySelectorAll('[data-action="add-yandex-sub"]').forEach(a=>{n(a,"click",()=>e._addYandexDraftSubItem(a.dataset.subType))}),t.querySelectorAll('[data-action="remove-yandex-sub"]').forEach(a=>{n(a,"click",()=>e._removeYandexDraftSubItem(a.dataset.subType,Number(a.dataset.subIndex)))}),t.querySelectorAll("[data-yandex-sub-accordion]").forEach(a=>{n(a,"toggle",()=>e._setYandexSubEditorOpen(a.dataset.yandexSubAccordion,a.open))}),t.querySelectorAll("[data-yandex-sub-item-accordion]").forEach(a=>{n(a,"toggle",()=>{let o=a.dataset.yandexSubItemAccordion,l=a.dataset.yandexSubItemId;e._setYandexSubItemOpen(o,a.open?l:"")})}),n(t.querySelector('[data-action="import-json-input"]'),"change",a=>{let[o]=a.currentTarget.files||[];e._importJsonFile(o)}),t.querySelectorAll('[data-action="add-condition"]').forEach(a=>{n(a,"click",()=>e._addCondition(a.dataset.scenarioId))}),t.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(a=>{n(a,"click",()=>e._enableConditionChildrenType(a.dataset.scenarioId,a.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(a=>{n(a,"click",()=>e._disableConditionChildrenType(a.dataset.scenarioId,a.dataset.conditionId))}),t.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(a=>{n(a,"click",()=>e._enableConditionChildrenDirectType(a.dataset.scenarioId,a.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(a=>{n(a,"click",()=>e._disableConditionChildrenDirectType(a.dataset.scenarioId,a.dataset.conditionId))}),t.querySelectorAll("[data-toggle-scenario]").forEach(a=>{n(a,"click",()=>e._toggleScenario(a.dataset.toggleScenario))}),t.querySelectorAll("[data-toggle-condition]").forEach(a=>{n(a,"click",()=>e._toggleCondition(a.dataset.toggleCondition))}),t.querySelectorAll("[data-remove-id]").forEach(a=>{n(a,"click",()=>e._removeScenario(a.dataset.removeId))}),t.querySelectorAll("[data-remove-condition-id]").forEach(a=>{n(a,"click",()=>e._removeCondition(a.dataset.scenarioId,a.dataset.removeConditionId))}),t.querySelectorAll('[data-action="scenarios-page"]').forEach(a=>{n(a,"click",()=>e._setScenariosPage(a.dataset.page))}),t.querySelectorAll('[data-action="scenarios-page-nav"]').forEach(a=>{n(a,"click",()=>{let o=a.dataset.direction==="prev"?-1:1;e._setScenariosPage((Number(e._scenariosPage)||1)+o)})});let i=t.querySelector("dialog-custom-ui-create-scenario");i&&(i.hass=e._hass,i.config={base_url:e._config.base_url,timer_alarm_token:e._config.timer_alarm_token,theme:e._config.theme})};var lf=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(i=>{n(r,i,a=>e._swallowUiEvent(a))})}),t.querySelectorAll("[data-config-field]").forEach(r=>{let i=a=>r.dataset.configField==="theme"?a.currentTarget.checked?"dark":"light":r.dataset.configBool==="true"?a.currentTarget.checked:a.currentTarget.value;n(r,"input",a=>{e._updateConfigField(a.currentTarget.dataset.configField,i(a),!1)}),n(r,"change",a=>{e._updateConfigField(a.currentTarget.dataset.configField,i(a),!0)})}),t.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(r=>{let i=r.dataset.scenarioField,a=r.dataset.scenarioId;r.tagName==="SELECT"?n(r,"change",o=>{e._updateScenario(a,i,o.currentTarget.value,!0)}):(n(r,"input",o=>{e._updateScenario(a,i,o.currentTarget.value,!1)}),n(r,"change",o=>{e._updateScenario(a,i,o.currentTarget.value,!0)}))}),t.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(r=>{let i=r.dataset.scenarioId,a=r.dataset.conditionId,o=r.dataset.conditionField;n(r,"input",l=>{e._updateCondition(i,a,o,l.currentTarget.value,!1)}),n(r,"change",l=>{e._updateCondition(i,a,o,l.currentTarget.value,!0)})}),t.querySelectorAll("[data-yandex-field]").forEach(r=>{n(r,"input",i=>{e._updateYandexDraftField(i.currentTarget.dataset.yandexField,i.currentTarget.value,!1)}),n(r,"change",i=>{e._updateYandexDraftField(i.currentTarget.dataset.yandexField,i.currentTarget.value,!0)})}),t.querySelectorAll("[data-yandex-sub-field][data-yandex-sub-type][data-yandex-sub-index]").forEach(r=>{n(r,"input",i=>{e._updateYandexDraftSubItem(i.currentTarget.dataset.yandexSubType,Number(i.currentTarget.dataset.yandexSubIndex),i.currentTarget.dataset.yandexSubField,i.currentTarget.value,!1)}),n(r,"change",i=>{e._updateYandexDraftSubItem(i.currentTarget.dataset.yandexSubType,Number(i.currentTarget.dataset.yandexSubIndex),i.currentTarget.dataset.yandexSubField,i.currentTarget.value,!0)})})};var Ki=()=>`
    <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
  `;var T=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),oh=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Pl=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,yn=()=>({id:Pl(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),sf=()=>({id:oh(),name:"",script_entity_id:"",conditions:[yn()]});var Qi=e=>{let t=e._buildConfigPayload();return`
      <section class="hero-card">
        <h1>JSON</h1>
        <p>\u041C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0432 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u0439 JSON \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0444\u043E\u0440\u043C\u0443.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="download-json">\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON</button>
          <button type="button" class="primary" data-action="upload-json">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON</button>
          <input type="file" accept=".json,application/json" data-action="import-json-input" hidden />
        </div>
        ${e._error?`<div class="status error">${T(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${T(e._status)}</div>`:""}
      </section>
      <section class="help-card">
        <div><strong>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E JSON</strong></div>
        <pre><code>${T(JSON.stringify(t,null,2))}</code></pre>
      </section>
    `};var Gi=e=>{let t=e._logs.length?e._logs.map(n=>`
          <div class="log-item ${T(n.level)}">
            <div class="log-meta">
              <span class="log-time">${T(n.ts)}</span>
              <span class="log-level">${T(n.level)}</span>
            </div>
            <div class="log-message">${T(n.message)}</div>
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
    `};var Xi=e=>`
      <section class="hero-card">
        <h1>Settings</h1>
        <p>\u041E\u0431\u0449\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432: IP, client_id, token, timeout, \u0442\u0435\u043C\u0430 \u0438 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${T(e._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 POST \u043D\u0430 <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
          <label>
            <span>Client ID</span>
            <input data-config-field="client_id" value="${T(e._config.client_id)}" placeholder="user-123" />
            <small>\u041F\u043E\u043B\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0435\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A\u0430\u043A <code>{"clientId":"..."}</code>.</small>
          </label>
          <label>
            <span>Authorization token</span>
            <input data-config-field="timer_alarm_token" value="${T(e._config.timer_alarm_token)}" placeholder="Bearer xxx" />
            <small>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435 <code>Authorization</code> \u043A\u0430\u043A \u0435\u0441\u0442\u044C.</small>
          </label>
          <label class="field-narrow">
            <span>Timeout, \u0441\u0435\u043A\u0443\u043D\u0434</span>
            <input data-config-field="timeout" type="number" min="1" value="${T(e._config.timeout)}" />
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
        </div>
        <div class="toolbar">
          <button type="button" class="ghost" data-action="reset-commands-cache">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448</button>
          <button type="button" class="primary" data-action="save" ${e._saving?"disabled":""}>${e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${e._error?`<div class="status error">${T(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${T(e._status)}</div>`:""}
      </section>
    `;var Ji=e=>{let t=e._scripts(),n=Array.isArray(e._config.scenarios)?e._config.scenarios:[],r=Math.max(1,Number(e._scenariosPageSize)||20),i=n.length,a=Math.max(1,Math.ceil(i/r)),o=Number(e._scenariosPage)||1,l=Math.min(Math.max(1,Math.trunc(o)),a);e._scenariosPage!==l&&(e._scenariosPage=l);let s=(l-1)*r,d=n.slice(s,s+r),m=Math.max(1,l-2),p=Math.min(a,m+4),g=[];for(let y=m;y<=p;y+=1)g.push(`
      <button
        type="button"
        class="${y===l?"primary compact-button":"ghost compact-button"}"
        data-action="scenarios-page"
        data-page="${y}"
        ${y===l?"disabled":""}
      >${y}</button>
    `);let S=d.length?d.map((y,N)=>{let f=e._expandedScenarios.has(y.id),u=y.conditions.map((c,_)=>`
            ${(()=>{let w=e._expandedConditions.has(c.id),k=[];c.parent_type&&k.push(`Parent: ${T(c.parent_type)}`),c.children_type_enabled&&c.children_type&&k.push(`Children: ${T(c.children_type)}`),c.children_direct_type_enabled&&c.children_direct_type&&k.push(`Children Direct: ${T(c.children_direct_type)}`);let D=k.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return`
            <div class="condition-card ${w?"expanded":"collapsed"}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${T(c.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ${_+1}</span>
                  <span class="condition-preview">${D}</span>
                </span>
                <span class="condition-header-side">
                  <span class="condition-accordion-icon">${w?"\u2212":"+"}</span>
                </span>
              </button>
              <div class="condition-body ${w?"open":"hidden"}">
                <div class="condition-actions">
                  ${y.conditions.length>1?`
                    <button
                      type="button"
                      class="ghost remove-inline-button"
                      data-scenario-id="${T(y.id)}"
                      data-remove-condition-id="${T(c.id)}"
                    >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                  `:""}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${T(y.id)}"
                      data-condition-id="${T(c.id)}"
                      data-condition-field="parent_type"
                      value="${T(c.parent_type)}"
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
                          data-scenario-id="${T(y.id)}"
                          data-condition-id="${T(c.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${T(y.id)}"
                        data-condition-id="${T(c.id)}"
                        data-condition-field="children_type"
                        value="${T(c.children_type??"")}"
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
                        data-scenario-id="${T(y.id)}"
                        data-condition-id="${T(c.id)}"
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
                          data-scenario-id="${T(y.id)}"
                          data-condition-id="${T(c.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${T(y.id)}"
                        data-condition-id="${T(c.id)}"
                        data-condition-field="children_direct_type"
                        value="${T(c.children_direct_type??"")}"
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
                        data-scenario-id="${T(y.id)}"
                        data-condition-id="${T(c.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `})()}
          `).join("");return`
            <section class="scenario-card ${f?"expanded":"collapsed"}" data-scenario-card-id="${T(y.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${T(y.id)}">
                  <span class="scenario-toggle-icon">${f?"\u2212":"+"}</span>
                  <span>
                    <span class="scenario-kicker">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${s+N+1}</span>
                    <span class="scenario-title">${T(y.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${T(y.id)}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
              </div>
              <div class="scenario-body ${f?"open":"hidden"}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430</span>
                    <input data-scenario-id="${T(y.id)}" data-scenario-field="name" value="${T(y.name)}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">\u0423\u0441\u043B\u043E\u0432\u0438\u044F</span>
                        <small>\u0427\u0435\u0440\u0435\u0437 <code>+</code> \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. \u0415\u0441\u043B\u0438 \u0432 <code>Parent Type</code> \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 <code>;</code>, \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${T(y.id)}">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                    </div>
                    <div class="conditions-list">${u}</div>
                  </div>
                  <label class="field-span-2">
                    <span>\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant</span>
                    <select data-scenario-id="${T(y.id)}" data-scenario-field="script_entity_id">
                      <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*</option>
                      ${t.map(c=>{let _=c.entity_id===y.script_entity_id?"selected":"",w=c.attributes.friendly_name||c.entity_id;return`<option value="${T(c.entity_id)}" ${_}>${T(w)} (${T(c.entity_id)})</option>`}).join("")}
                      <option value="timer" ${y.script_entity_id==="timer"?"selected":""}>\u0422\u0430\u0439\u043C\u0435\u0440 (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                      <option value="alarm" ${y.script_entity_id==="alarm"?"selected":""}>\u0411\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                    </select>
                  </label>
                </div>
              </div>
            </section>
          `}).join(""):'<div class="empty">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u043B\u044E\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.</div>',b=i>r?`
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
          ${l>=a?"disabled":""}
        >\u0412\u043F\u0435\u0440\u0435\u0434</button>
      </section>
      <div class="scenarios-pagination-meta">\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ${d.length} \u0438\u0437 ${i} \u2022 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${l} \u0438\u0437 ${a}</div>
    `:"";return`
      <section class="hero-card">
        <h1>Scenarios</h1>
        <p>\u0417\u0434\u0435\u0441\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="add-scenario">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
          <button type="button" class="primary" data-action="save" ${e._saving?"disabled":""}>${e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${e._error?`<div class="status error">${T(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${T(e._status)}</div>`:""}
      </section>
      <div class="scenario-list">${S}</div>
      ${b}
      <section class="help-card">
        <div><strong>\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check   -H "Content-Type: application/json"   -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442</strong></div>
        <div>\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 <code>script.*</code> \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${T(nf)}</code></pre>
      </section>
    `};var Zi=e=>e._timerAlarmLoaded?`
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `:(e._timerAlarmLoading||e._ensureTimerAlarmModule(),`
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">\u041C\u043E\u0434\u0443\u043B\u044C timer/alarm \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F...</div>
        </section>
      `);var df=(e,t,n,r=999)=>{let i=t==="subVoice"?"subVoice":"subCommands",a=Array.isArray(e._yandexDraft?.[i])?e._yandexDraft[i]:[],o=a.length<r,l=String(e._yandexSubItemOpen?.[i]??"");return`
    <section class="condition-card">
      <div class="condition-title">${n}</div>
      <div class="condition-body open">
        ${a.length?a.map((s,d)=>{let m=String(s?.id??`${i}_${d}`),p=l===m,g=String(s?.text??"").trim()||"text";return`
            <details class="yandex-item-accordion" data-yandex-sub-item-accordion="${i}" data-yandex-sub-item-id="${T(m)}" ${p?"open":""}>
              <summary class="condition-title">${T(g)}</summary>
              <div class="yandex-sub-item-body">
                <div class="device-row">
                  <label class="field-grow">
                    <span>text</span>
                    <input
                      data-yandex-sub-field="text"
                      data-yandex-sub-type="${i}"
                      data-yandex-sub-index="${d}"
                      value="${T(s.text||"")}"
                      placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442"
                    />
                  </label>
                  <button type="button" class="ghost device-remove-button" data-action="remove-yandex-sub" data-sub-type="${i}" data-sub-index="${d}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                </div>
              </div>
            </details>
          `}).join(""):'<div class="condition-preview">\u041F\u0443\u0441\u0442\u043E</div>'}
        <div class="yandex-sub-add-row">
          <button
            type="button"
            class="secondary yandex-sub-add-button"
            data-action="add-yandex-sub"
            data-sub-type="${i}"
            ${o?"":"disabled"}
          >
            \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C
          </button>
        </div>
      </div>
    </section>
  `},lh=(e,t)=>{let n=String(e._yandexActiveScenarioKey??"").trim();return`
    <section class="hero-card">
      ${`
    <div class="yandex-tabs-toolbar">
      <label class="yandex-scenario-select">
        <span>\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439</span>
        <select data-action="select-yandex-tab-dropdown">
          ${t.map((i,a)=>{let o=String(i.mainCommand??"").trim(),l=i.mainCommand||`\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${a+1}`;return`<option value="${T(o)}" ${n===o?"selected":""}>${T(l)}</option>`}).join("")}
          <option value="__new__" ${n==="__new__"?"selected":""}>\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</option>
        </select>
      </label>
      <button type="button" class="subtab-button" data-action="create-yandex-tab" data-yandex-tab="__new__">+ \u041D\u043E\u0432\u044B\u0439</button>
    </div>
  `}
    </section>
  `},sh=e=>{let t=String(e._yandexActiveScenarioKey??"")==="__new__",n=t?"\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":String(e._yandexDraft?.mainCommand??"").trim()||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <section class="scenario-card expanded">
      <div class="condition-header">
        <div class="condition-heading">
          <span class="condition-title">${t?"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435":"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"}</span>
          <span class="scenario-title">${T(n)}</span>
        </div>
      </div>
      <div class="condition-body open">
        <div class="condition-grid">
          <label>
            <span>mainCommand *</span>
            <input data-yandex-field="mainCommand" value="${T(e._yandexDraft?.mainCommand||"")}" placeholder="\u0412\u043A\u043B\u044E\u0447\u0438 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u043B\u0438\u0446\u0430" />
          </label>
          <label>
            <span>voiceResponse</span>
            <input data-yandex-field="voiceResponse" value="${T(e._yandexDraft?.voiceResponse||"")}" placeholder="\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E" />
          </label>
          <label class="field-span-2">
            <span>accounts (\u0447\u0435\u0440\u0435\u0437 ;)</span>
            <input data-yandex-field="accounts" value="${T(e._yandexDraft?.accounts||"")}" placeholder="mihailhimei;another_account" />
          </label>
        </div>
        ${df(e,"subVoice","subVoice (\u0434\u043E 3)",3)}
        ${df(e,"subCommands","subCommands")}
        <div class="toolbar">
          <button type="button" class="primary" data-action="save-yandex-scenario" ${e._yandexSaving?"disabled":""}>${e._yandexSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
          ${t?"":`<button type="button" class="ghost" data-action="delete-yandex-scenario" ${e._yandexSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`}
        </div>
      </div>
    </section>
  `},ea=e=>{let t=Array.isArray(e._yandexScenarios)?e._yandexScenarios:[];return`
    <section class="hero-card">
      <h1>\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438</h1>
      <p>\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: <code>homeassistant/yandex_intents.yaml</code>. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u0444\u043E\u0440\u043C\u0435 \u043D\u0438\u0436\u0435.</p>
      <div class="toolbar">
        <button type="button" class="ghost" data-action="reload-yandex-scenarios" ${e._yandexLoading?"disabled":""}>${e._yandexLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      </div>
      ${e._yandexStatus?`<div class="status ok">${T(e._yandexStatus)}</div>`:""}
      ${e._yandexError?`<div class="status error">${T(e._yandexError)}</div>`:""}
    </section>
    ${lh(e,t)}
    ${sh(e)}
  `};var uf=e=>e._activeTab==="logs"?Gi(e):e._activeTab==="scenarios"?Ji(e):e._activeTab==="create-scenario"?Ki():e._activeTab==="timer-alarm"?Zi(e):e._activeTab==="json"?Qi(e):e._activeTab==="yandex-scenarios"?ea(e):Xi(e);var cf=(e,t)=>{let n=Math.max(1,Number(e._scenariosPageSize)||20),r=Array.isArray(e._config?.scenarios)?e._config.scenarios.length:0,i=Math.max(1,Math.ceil(r/n)),a=Number(t),o=Number.isFinite(a)?Math.trunc(a):1;return Math.min(Math.max(1,o),i)},pf=(e,t)=>{e._expandedScenarios.has(t)?e._expandedScenarios.delete(t):e._expandedScenarios.add(t),e._render()},ff=(e,t)=>{e._expandedConditions.has(t)?e._expandedConditions.delete(t):e._expandedConditions.add(t),e._render()},mf=(e,t,n,r=!1)=>{e._config={...e._config,[t]:n},t==="theme"&&e._applyTheme(),e._status="",e._error="",r&&e._render()},gf=e=>{e._deviceAccordionOpen=!e._deviceAccordionOpen,e._render()},hf=e=>{let t=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[];t.push(""),e._config={...e._config,timer_alarm_device_ids:t},e._status="",e._error="",e._render()},yf=(e,t,n)=>{let r=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""];r[t]=n,e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error=""},_f=(e,t)=>{let r=(Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""]).filter((i,a)=>a!==t);e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error="",e._render()},vf=(e,t,n,r,i=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(a=>a.id===t?{...a,[n]:r}:a)},e._status="",e._error="",i&&e._render()},Sf=(e,t,n,r,i,a=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(o=>o.id===t?{...o,conditions:o.conditions.map(l=>l.id===n?{...l,[r]:i}:l)}:o)},e._status="",e._error="",a&&e._render()},bf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!0,children_type:i.children_type??""}:i)}:r)},e._status="",e._error="",e._render()},wf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!1,children_type:""}:i)}:r)},e._status="",e._error="",e._render()},Cf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!0,children_direct_type:i.children_direct_type??""}:i)}:r)},e._status="",e._error="",e._render()},Tf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!1,children_direct_type:""}:i)}:r)},e._status="",e._error="",e._render()},kf=(e,t)=>{let n=yn();e._expandedConditions.add(n.id),e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:[...r.conditions,n]}:r)},e._status="",e._error="",e._render()},Df=(e,t,n)=>{e._expandedConditions.delete(n),e._config={...e._config,scenarios:e._config.scenarios.map(r=>{if(r.id!==t)return r;let i=r.conditions.filter(a=>a.id!==n);return{...r,conditions:i.length?i:[yn()]}})},e._status="",e._error="",e._render()},If=e=>{let t=Date.now();if(t<e._addScenarioLockUntil)return;e._addScenarioLockUntil=t+300;let n=sf();e._expandedScenarios.add(n.id),e._config={...e._config,scenarios:[n,...e._config.scenarios]},e._scenariosPage=1,e._status="",e._render(),window.requestAnimationFrame(()=>e._scrollScenarioIntoView(n.id))},Ef=(e,t)=>{let n=globalThis.CSS?.escape?globalThis.CSS.escape(t):t;e.shadowRoot.querySelector(`[data-scenario-card-id="${n}"]`)?.scrollIntoView({block:"start",behavior:"smooth"})},Af=(e,t)=>{e._expandedScenarios.delete(t),e._config={...e._config,scenarios:e._config.scenarios.filter(n=>n.id!==t)},e._scenariosPage=cf(e,e._scenariosPage),e._status="",e._render()},$f=(e,t)=>{let n=cf(e,t);n!==e._scenariosPage&&(e._scenariosPage=n,e._render())};var Mf=(e,t)=>{e._reactRoot=null,e._hass=null,e._config={...t},e._logs=[],e._activeTab="scenarios",e._expandedScenarios=new Set,e._expandedConditions=new Set,e._scenariosPage=1,e._scenariosPageSize=20,e._loaded=!1,e._loading=!1,e._saving=!1,e._loadingLogs=!1,e._error="",e._status="",e._logsTimer=null,e._timerAlarmLoaded=!1,e._timerAlarmLoading=!1,e._timerAlarmLoadPromise=null,e._deviceAccordionOpen=!0,e._addScenarioLockUntil=0,e._yandexLoaded=!1,e._yandexLoading=!1,e._yandexSaving=!1,e._yandexScenarios=[],e._yandexStatus="",e._yandexError="",e._yandexActiveScenarioKey="",e._yandexEditorOpen=!1,e._yandexDraft={},e._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},e._yandexSubItemOpen={subVoice:"",subCommands:""}};var xf=`
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
`;var dh=({html:e})=>Nl.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Ll=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),Mf(this,fr)}set hass(t){let n=!this._hass;if(this._hass=t,!this._loaded&&!this._loading){this._loadConfig();return}(n||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this._applyTheme(),this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Lf.createRoot)(this.shadowRoot)),(0,Pf.flushSync)(()=>{this._reactRoot.render(Nl.default.createElement(dh,{html:t}))})}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded){if(!this._timerAlarmLoadPromise){this._timerAlarmLoading=!0;let t=`${xl}${xl.includes("?")?"&":"?"}ts=${Date.now()}`;this._timerAlarmLoadPromise=import(t).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(n=>{this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})}return this._timerAlarmLoadPromise}}async _loadConfig(){this._loading=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...fr,...t,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(t.timer_alarm_device_ids??[]),scenarios:Array.isArray(t.scenarios)?t.scenarios.map(n=>this._normalizeScenarioForUi(n)):[]},this._applyTheme(),this._expandedScenarios=new Set,this._scenariosPage=1,this._error=""}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(t.logs)?t.logs:[]}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},rf)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("script.")).sort((t,n)=>{let r=t.attributes.friendly_name||t.entity_id,i=n.attributes.friendly_name||n.entity_id;return r.localeCompare(i,"ru")}):[]}_setActiveTab(t){this._activeTab=t,this._status="",this._error="",this._render(),t==="logs"?this._startLogsPolling():(this._stopLogsPolling(),t==="timer-alarm"&&this._ensureTimerAlarmModule(),t==="yandex-scenarios"&&this._loadYandexScenarios())}_newYandexSubItem(){return{id:globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,text:""}}_newYandexDraft(){return{mainCommand:"",voiceResponse:"",accounts:"",subVoice:[],subCommands:[]}}_normalizeYandexScenarioForUi(t){let n=r=>Array.isArray(r)?r.map(i=>({id:String(i?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}`)),text:String(i?.text??"").trim()})).filter(i=>i.text):[];return{id:String(t?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_${Date.now()}`)),mainCommand:String(t?.mainCommand??"").trim(),voiceResponse:String(t?.voiceResponse??"").trim(),accounts:String(t?.accounts??"").trim(),subVoice:n(t?.subVoice),subCommands:n(t?.subCommands)}}_cloneYandexDraft(t){let n=this._normalizeYandexScenarioForUi(t??{});return{...n,subVoice:Array.isArray(n.subVoice)?n.subVoice.map(r=>({...r})):[],subCommands:Array.isArray(n.subCommands)?n.subCommands.map(r=>({...r})):[]}}_yandexScenarioKey(t){return String(t?.mainCommand??"").trim()}_findYandexScenarioByKey(t){let n=String(t??"").trim();return this._yandexScenarios.find(r=>this._yandexScenarioKey(r)===n)||null}_syncYandexSelection(t=""){let n=String(t||this._yandexActiveScenarioKey||"").trim(),r=Array.isArray(this._yandexScenarios)?this._yandexScenarios:[];if(!r.length){this._yandexActiveScenarioKey="__new__",this._yandexDraft=this._newYandexDraft(),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""};return}let i=this._findYandexScenarioByKey(n)||r[0];this._yandexActiveScenarioKey=this._yandexScenarioKey(i),this._yandexDraft=this._cloneYandexDraft(i),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""}}async _loadYandexScenarios(){if(!(!this._hass||this._yandexLoading)){this._yandexLoading=!0,this._yandexError="",this._yandexLoaded||(this._yandexStatus=""),this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_yandex_scenarios"}),n=Array.isArray(t?.scenarios)?t.scenarios:[];this._yandexScenarios=n.map(r=>this._normalizeYandexScenarioForUi(r)),this._syncYandexSelection(),this._yandexLoaded=!0,this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B.",this._yandexError=""}catch(t){this._yandexError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C yandex_intents.yaml.",this._yandexStatus=""}finally{this._yandexLoading=!1,this._render()}}}_startYandexScenarioCreate(){this._yandexDraft=this._newYandexDraft(),this._yandexActiveScenarioKey="__new__",this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexStatus="",this._yandexError="",this._render()}_setYandexActiveScenario(t){let n=String(t??"").trim();if(!n)return;if(n==="__new__"){this._startYandexScenarioCreate();return}let r=this._findYandexScenarioByKey(n);r&&(this._yandexActiveScenarioKey=n,this._yandexDraft=this._cloneYandexDraft(r),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexError="",this._render())}_setYandexSubEditorOpen(t,n){let r=t==="subVoice"?"subVoice":"subCommands";this._yandexSubEditorsOpen={...this._yandexSubEditorsOpen||{},[r]:!!n}}_setYandexSubItemOpen(t,n){let r=t==="subVoice"?"subVoice":"subCommands";this._yandexSubItemOpen={...this._yandexSubItemOpen||{},[r]:String(n??"")}}_toggleYandexEditorAccordion(){this._yandexEditorOpen=!this._yandexEditorOpen,this._render()}_updateYandexDraftField(t,n,r=!1){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft()),this._yandexDraft={...this._yandexDraft,[t]:n},this._yandexError="",r&&this._render()}_addYandexDraftSubItem(t){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft());let n=t==="subVoice"?"subVoice":"subCommands",r=Array.isArray(this._yandexDraft[n])?[...this._yandexDraft[n]]:[];if(n==="subVoice"&&r.length>=3)return;let i=this._newYandexSubItem();r.push(i),this._yandexDraft={...this._yandexDraft,[n]:r},this._setYandexSubEditorOpen(n,!0),this._setYandexSubItemOpen(n,i.id),this._yandexError="",this._render()}_removeYandexDraftSubItem(t,n){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let r=t==="subVoice"?"subVoice":"subCommands",a=(Array.isArray(this._yandexDraft[r])?[...this._yandexDraft[r]]:[]).filter((l,s)=>s!==n);this._yandexDraft={...this._yandexDraft,[r]:a};let o=String(this._yandexSubItemOpen?.[r]??"");o&&!a.some(l=>String(l?.id??"")===o)&&this._setYandexSubItemOpen(r,""),this._yandexError="",this._render()}_updateYandexDraftSubItem(t,n,r,i,a=!1){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let o=t==="subVoice"?"subVoice":"subCommands",l=Array.isArray(this._yandexDraft[o])?[...this._yandexDraft[o]]:[];this._yandexDraft={...this._yandexDraft,[o]:l.map((s,d)=>d===n?{...s,[r]:i}:s)},this._yandexError="",a&&this._render()}_serializeYandexScenarioDraft(){let t=this._yandexDraft||this._newYandexDraft(),n=r=>(Array.isArray(r)?r:[]).map(i=>({text:String(i?.text??"").trim()})).filter(i=>i.text);return{mainCommand:String(t.mainCommand??"").trim(),voiceResponse:String(t.voiceResponse??"").trim(),accounts:String(t.accounts??"").trim(),subVoice:n(t.subVoice),subCommands:n(t.subCommands)}}async _saveYandexScenarioFromModal(){let t=this._serializeYandexScenarioDraft();if(!t.mainCommand){this._yandexError="\u041F\u043E\u043B\u0435 mainCommand \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E.",this._render();return}this._yandexSaving=!0,this._yandexError="",this._render();try{let n=String(this._yandexActiveScenarioKey??"").trim(),r=n&&n!=="__new__"?this._yandexScenarios.map(o=>this._yandexScenarioKey(o)===n?t:o):[...this._yandexScenarios,t],i=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:r}),a=Array.isArray(i?.scenarios)?i.scenarios:[];this._yandexScenarios=a.map(o=>this._normalizeYandexScenarioForUi(o)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u0438 \u0444\u0430\u0439\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection(t.mainCommand)}catch(n){this._yandexError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}async _deleteActiveYandexScenario(){let t=String(this._yandexActiveScenarioKey??"").trim();if(!(!t||t==="__new__")){this._yandexSaving=!0,this._yandexError="",this._render();try{let n=this._yandexScenarios.filter(a=>this._yandexScenarioKey(a)!==t),r=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:n}),i=Array.isArray(r?.scenarios)?r.scenarios:[];this._yandexScenarios=i.map(a=>this._normalizeYandexScenarioForUi(a)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection()}catch(n){this._yandexError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438\u0437 yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_renderSettings(){return Xi(this)}_toggleScenario(t){return pf(this,t)}_toggleCondition(t){return ff(this,t)}_updateConfigField(t,n,r=!1){return mf(this,t,n,r)}_normalizeTimerAlarmDeviceIdsForUi(t){let r=(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(i=>String(i??"").trim());return r.length?r:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(t=>t)}_toggleDeviceAccordion(){return gf(this)}_addTimerAlarmDeviceId(){return hf(this)}_updateTimerAlarmDeviceId(t,n){return yf(this,t,n)}_removeTimerAlarmDeviceId(t){return _f(this,t)}_updateScenario(t,n,r,i=!1){return vf(this,t,n,r,i)}_normalizeScenarioForUi(t){let n=this._normalizeConditionsForUi(t);return{...t,conditions:n}}_serializeScenario(t){let n=(Array.isArray(t.conditions)?t.conditions:[]).flatMap(i=>this._serializeCondition(i)).filter(Boolean),r={id:t.id,name:t.name,script_entity_id:t.script_entity_id,conditions:n};return n.length===1&&(r.parent_type=n[0].parent_type??"",n[0].children_type&&(r.children_type=n[0].children_type),n[0].children_direct_type&&(r.children_direct_type=n[0].children_direct_type)),r}_normalizeConditionsForUi(t){if(Array.isArray(t.conditions)&&t.conditions.length)return t.conditions.map(l=>this._normalizeConditionForUi(l));let n=String(t.parent_type??"").split(";").map(l=>l.trim()),r=String(t.children_type??t.type??"").split(";").map(l=>l.trim()),i=this._normalizeChildrenDirectTypeForUi(t.children_direct_type),a=Math.max(n.length,r.length,i.length,1),o=[];for(let l=0;l<a;l+=1){let s=this._normalizeConditionForUi({parent_type:n[l]??"",children_type:r[l]??"",children_direct_type:i[l]??""});(s.parent_type||s.children_type_enabled||s.children_direct_type_enabled)&&o.push(s)}return o.length?o:[yn()]}_normalizeConditionForUi(t){let n=String(t.children_type??t.type??"").trim(),r=this._normalizeChildrenDirectTypeForUi(t.children_direct_type).join(";");return{id:String(t.id??Pl()),parent_type:String(t.parent_type??"").trim(),children_type:n,children_type_enabled:n!=="",children_direct_type:r,children_direct_type_enabled:r!==""}}_serializeCondition(t){let n=String(t.parent_type??"").trim(),r=String(t.children_type??"").trim(),i=String(t.children_direct_type??"").trim();if(!n&&!r&&!i)return[];let a=n.split(";").map(d=>d.trim()),o=r.split(";").map(d=>d.trim()),l=Math.max(a.length,o.length,1),s=[];for(let d=0;d<l;d+=1){let m=a[d]??"",p=o[d]??"";if(!m&&!p)continue;let g={parent_type:m};t.children_type_enabled&&p&&(g.children_type=p),t.children_direct_type_enabled&&i&&(g.children_direct_type=i),s.push(g)}return s}_updateCondition(t,n,r,i,a=!1){return Sf(this,t,n,r,i,a)}_normalizeChildrenDirectTypeForUi(t){if(Array.isArray(t))return t.map(n=>typeof n=="string"?n.trim():n&&typeof n=="object"?String(n.mapping_type??n.mappingType??n.type??"").trim():"").filter(Boolean);if(t&&typeof t=="object"){let n=String(t.mapping_type??t.mappingType??t.type??"").trim();return n?[n]:[]}return String(t??"").split(";").map(n=>n.trim()).filter(Boolean)}_enableConditionChildrenType(t,n){return bf(this,t,n)}_disableConditionChildrenType(t,n){return wf(this,t,n)}_enableConditionChildrenDirectType(t,n){return Cf(this,t,n)}_disableConditionChildrenDirectType(t,n){return Tf(this,t,n)}_addCondition(t){return kf(this,t)}_removeCondition(t,n){return Df(this,t,n)}_addScenario(){return If(this)}_scrollScenarioIntoView(t){return Ef(this,t)}_removeScenario(t){return Af(this,t)}_setScenariosPage(t){return $f(this,t)}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(n=>{let r=Array.isArray(n.conditions)?n.conditions:[];return r.length?!!r.find(a=>{let o=String(a.children_type??"").trim(),l=String(a.children_direct_type??"").trim();return!!(!String(a.parent_type??"").trim()&&!o&&!l||a.children_type_enabled&&!o||a.children_direct_type_enabled&&!l)})||!String(n.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,timer_alarm_token:this._config.timer_alarm_token,theme:this._config.theme,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(t=>this._serializeScenario(t))}}_downloadJson(){let t=this._buildConfigPayload(),n=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="dialog-custom-ui-config.json",i.click(),URL.revokeObjectURL(r),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}async _importJsonFile(t){if(!t)return;try{let r=await t.text(),i=JSON.parse(r),a=Array.isArray(i.scenarios)?i.scenarios:[];this._config={...fr,...i,timeout:Number(i.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(i.timer_alarm_device_ids??[]),scenarios:a.map(o=>this._normalizeScenarioForUi(o))},this._applyTheme(),this._expandedScenarios=new Set(this._config.scenarios.map(o=>o.id)),this._scenariosPage=1,this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-json-input"]');n&&(n.value=""),this._render()}async _save(){let t=this._validate();if(t){this._error=t,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let n=this._buildConfigPayload();await this._hass.callWS({type:"dialog_custom_ui/save_config",...n});let r=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...fr,...r,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r.timer_alarm_device_ids??[]),scenarios:Array.isArray(r.scenarios)?r.scenarios.map(i=>this._normalizeScenarioForUi(i)):[]},this._applyTheme(),this._scenariosPage=1,this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(t){t.stopPropagation()}_bindEvents(){let t=this.shadowRoot;if(!t)return;let n=af(t);of(this,t,n),lf(this,t,n)}async _resetCommandsCache(){let t=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!t){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._status="",this._render();return}this._error="",this._status="",this._render();let n=`${t}/api/setting/commands`,r={};this._config.timer_alarm_token&&(r.Authorization=this._config.timer_alarm_token),r["Content-Type"]="application/json";try{let i=await fetch(n,{method:"POST",headers:r,body:JSON.stringify({clientId:String(this._config.client_id??"").trim()})});if((i.status===405||i.status===404)&&(i=await fetch(n,{method:"GET",headers:this._config.timer_alarm_token?{Authorization:this._config.timer_alarm_token}:{}})),!i.ok)throw new Error(`HTTP ${i.status}`);this._status="\u041A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434 \u0441\u0431\u0440\u043E\u0448\u0435\u043D."}catch(i){this._error=i?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434."}finally{this._render()}}_renderScenarios(){return Ji(this)}_renderLogs(){return Gi(this)}_renderTimerAlarm(){return Zi(this)}_renderJsonTools(){return Qi(this)}_renderYandexScenarios(){return ea(this)}_renderCreateScenario(){return Ki()}_renderActiveTopLevelPage(){return uf(this)}_render(){let t=this._renderActiveTopLevelPage(),n=`
      ${xf}
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
