var tc=Object.create;var cl=Object.defineProperty;var nc=Object.getOwnPropertyDescriptor;var rc=Object.getOwnPropertyNames;var ic=Object.getPrototypeOf,oc=Object.prototype.hasOwnProperty;var vt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ac=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of rc(t))!oc.call(e,i)&&i!==n&&cl(e,i,{get:()=>t[i],enumerable:!(r=nc(t,i))||r.enumerable});return e};var Nt=(e,t,n)=>(n=e!=null?tc(ic(e)):{},ac(t||!e||!e.__esModule?cl(n,"default",{value:e,enumerable:!0}):n,e));var bl=vt(I=>{"use strict";var mn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),sc=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),pl=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=pl&&e[pl]||e["@@iterator"],typeof e=="function"?e:null)}var hl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gl=Object.assign,_l={};function zt(e,t,n){this.props=e,this.context=t,this.refs=_l,this.updater=n||hl}zt.prototype.isReactComponent={};zt.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yl(){}yl.prototype=zt.prototype;function zi(e,t,n){this.props=e,this.context=t,this.refs=_l,this.updater=n||hl}var Ri=zi.prototype=new yl;Ri.constructor=zi;gl(Ri,zt.prototype);Ri.isPureReactComponent=!0;var fl=Array.isArray,vl=Object.prototype.hasOwnProperty,Oi={current:null},Sl={key:!0,ref:!0,__self:!0,__source:!0};function xl(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)vl.call(t,r)&&!Sl.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:mn,type:e,key:o,ref:a,props:i,_owner:Oi.current}}function yc(e,t){return{$$typeof:mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===mn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ml=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function sr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mn:case lc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ni(a,0):r,fl(i)?(n="",e!=null&&(n=e.replace(ml,"$&/")+"/"),sr(i,t,n,"",function(d){return d})):i!=null&&(ji(i)&&(i=yc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ml,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",fl(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ni(o,l);a+=sr(o,t,n,s,i)}else if(s=_c(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ni(o,l++),a+=sr(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function lr(e,t,n){if(e==null)return e;var r=[],i=0;return sr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},dr={transition:null},xc={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:dr,ReactCurrentOwner:Oi};function wl(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=zt;I.Fragment=sc;I.Profiler=uc;I.PureComponent=zi;I.StrictMode=dc;I.Suspense=mc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;I.act=wl;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gl({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Oi.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)vl.call(t,s)&&!Sl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:mn,type:e.type,key:i,ref:o,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:pc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};I.createElement=xl;I.createFactory=function(e){var t=xl.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:fc,render:e}};I.isValidElement=ji;I.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:Sc}};I.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=dr.transition;dr.transition={};try{e()}finally{dr.transition=t}};I.unstable_act=wl;I.useCallback=function(e,t){return ie.current.useCallback(e,t)};I.useContext=function(e){return ie.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};I.useEffect=function(e,t){return ie.current.useEffect(e,t)};I.useId=function(){return ie.current.useId()};I.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ie.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};I.useRef=function(e){return ie.current.useRef(e)};I.useState=function(e){return ie.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ie.current.useTransition()};I.version="18.3.1"});var ur=vt((Pf,kl)=>{"use strict";kl.exports=bl()});var Pl=vt(L=>{"use strict";function Vi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<cr(i,t))e[r]=t,e[n]=i,n=r;else break e}}function Ee(e){return e.length===0?null:e[0]}function fr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var a=2*(r+1)-1,l=e[a],s=a+1,d=e[s];if(0>cr(l,n))s<i&&0>cr(d,l)?(e[r]=d,e[s]=n,r=s):(e[r]=l,e[a]=n,r=a);else if(s<i&&0>cr(d,n))e[r]=d,e[s]=n,r=s;else break e}}return t}function cr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Cl=performance,L.unstable_now=function(){return Cl.now()}):(Ui=Date,El=Ui.now(),L.unstable_now=function(){return Ui.now()-El});var Cl,Ui,El,Pe=[],Ge=[],wc=1,ve=null,Z=3,mr=!1,St=!1,gn=!1,Tl=typeof setTimeout=="function"?setTimeout:null,$l=typeof clearTimeout=="function"?clearTimeout:null,Dl=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Hi(e){for(var t=Ee(Ge);t!==null;){if(t.callback===null)fr(Ge);else if(t.startTime<=e)fr(Ge),t.sortIndex=t.expirationTime,Vi(Pe,t);else break;t=Ee(Ge)}}function Wi(e){if(gn=!1,Hi(e),!St)if(Ee(Pe)!==null)St=!0,Qi(qi);else{var t=Ee(Ge);t!==null&&Ji(Wi,t.startTime-e)}}function qi(e,t){St=!1,gn&&(gn=!1,$l(_n),_n=-1),mr=!0;var n=Z;try{for(Hi(t),ve=Ee(Pe);ve!==null&&(!(ve.expirationTime>t)||e&&!Ml());){var r=ve.callback;if(typeof r=="function"){ve.callback=null,Z=ve.priorityLevel;var i=r(ve.expirationTime<=t);t=L.unstable_now(),typeof i=="function"?ve.callback=i:ve===Ee(Pe)&&fr(Pe),Hi(t)}else fr(Pe);ve=Ee(Pe)}if(ve!==null)var o=!0;else{var a=Ee(Ge);a!==null&&Ji(Wi,a.startTime-t),o=!1}return o}finally{ve=null,Z=n,mr=!1}}var hr=!1,pr=null,_n=-1,Al=5,Ll=-1;function Ml(){return!(L.unstable_now()-Ll<Al)}function Fi(){if(pr!==null){var e=L.unstable_now();Ll=e;var t=!0;try{t=pr(!0,e)}finally{t?hn():(hr=!1,pr=null)}}else hr=!1}var hn;typeof Dl=="function"?hn=function(){Dl(Fi)}:typeof MessageChannel<"u"?(Bi=new MessageChannel,Il=Bi.port2,Bi.port1.onmessage=Fi,hn=function(){Il.postMessage(null)}):hn=function(){Tl(Fi,0)};var Bi,Il;function Qi(e){pr=e,hr||(hr=!0,hn())}function Ji(e,t){_n=Tl(function(){e(L.unstable_now())},t)}L.unstable_IdlePriority=5;L.unstable_ImmediatePriority=1;L.unstable_LowPriority=4;L.unstable_NormalPriority=3;L.unstable_Profiling=null;L.unstable_UserBlockingPriority=2;L.unstable_cancelCallback=function(e){e.callback=null};L.unstable_continueExecution=function(){St||mr||(St=!0,Qi(qi))};L.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Al=0<e?Math.floor(1e3/e):5};L.unstable_getCurrentPriorityLevel=function(){return Z};L.unstable_getFirstCallbackNode=function(){return Ee(Pe)};L.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};L.unstable_pauseExecution=function(){};L.unstable_requestPaint=function(){};L.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};L.unstable_scheduleCallback=function(e,t,n){var r=L.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:wc++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,Vi(Ge,e),Ee(Pe)===null&&e===Ee(Ge)&&(gn?($l(_n),_n=-1):gn=!0,Ji(Wi,n-r))):(e.sortIndex=i,Vi(Pe,e),St||mr||(St=!0,Qi(qi))),e};L.unstable_shouldYield=Ml;L.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var zl=vt((zf,Nl)=>{"use strict";Nl.exports=Pl()});var Uu=vt(ye=>{"use strict";var bc=ur(),ge=zl();function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vs=new Set,jn={};function Mt(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(jn[e]=t,e=0;e<t.length;e++)Vs.add(t[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yo=Object.prototype.hasOwnProperty,kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rl={},Ol={};function Cc(e){return yo.call(Ol,e)?!0:yo.call(Rl,e)?!1:kc.test(e)?Ol[e]=!0:(Rl[e]=!0,!1)}function Ec(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t>"u"||Ec(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){X[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){X[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){X[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){X[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var ua=/[\-:]([a-z])/g;function ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ua,ca);X[t]=new le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ua,ca);X[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ua,ca);X[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){X[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});X.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){X[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function pa(e,t,n,r){var i=X.hasOwnProperty(t)?X[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dc(t,n,i,r)&&(n=null),r||i===null?Cc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),jt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),fa=Symbol.for("react.strict_mode"),vo=Symbol.for("react.profiler"),Hs=Symbol.for("react.provider"),Ws=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),xo=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var qs=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var jl=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=jl&&e[jl]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,Yi;function En(e){if(Yi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||""}return`
`+Yi+e}var Ki=!1;function Gi(e,t){if(!e||Ki)return"";Ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function Ic(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case jt:return"Portal";case vo:return"Profiler";case fa:return"StrictMode";case So:return"Suspense";case xo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ws:return(e.displayName||"Context")+".Consumer";case Hs:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return t=e.displayName||null,t!==null?t:wo(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return wo(e(t))}catch{}}return null}function Tc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wo(t);case 8:return t===fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $c(e){var t=Qs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=$c(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bo(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ul(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ys(e,t){t=t.checked,t!=null&&pa(e,"checked",t,!1)}function ko(e,t){Ys(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Co(e,t.type,n):t.hasOwnProperty("defaultValue")&&Co(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Co(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(Dn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function Ks(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Xs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Zs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lc=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Io(e,t){if(t){if(Lc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function To(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ao=null,Xt=null,Zt=null;function Hl(e){if(e=ir(e)){if(typeof Ao!="function")throw Error(g(280));var t=e.stateNode;t&&(t=vi(t),Ao(e.stateNode,e.type,t))}}function td(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function nd(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,Hl(e),t)for(e=0;e<t.length;e++)Hl(t[e])}}function rd(e,t){return e(t)}function id(){}var Xi=!1;function od(e,t,n){if(Xi)return e(t,n);Xi=!0;try{return rd(e,t,n)}finally{Xi=!1,(Xt!==null||Zt!==null)&&(id(),nd())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var Lo=!1;if(We)try{Rt={},Object.defineProperty(Rt,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{Lo=!1}var Rt;function Mc(e,t,n,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var An=!1,qr=null,Qr=!1,Mo=null,Pc={onError:function(e){An=!0,qr=e}};function Nc(e,t,n,r,i,o,a,l,s){An=!1,qr=null,Mc.apply(Pc,arguments)}function zc(e,t,n,r,i,o,a,l,s){if(Nc.apply(this,arguments),An){if(An){var d=qr;An=!1,qr=null}else throw Error(g(198));Qr||(Qr=!0,Mo=d)}}function Pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wl(e){if(Pt(e)!==e)throw Error(g(188))}function Rc(e){var t=e.alternate;if(!t){if(t=Pt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wl(i),e;if(o===r)return Wl(i),t;o=o.sibling}throw Error(g(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function ld(e){return e=Rc(e),e!==null?sd(e):null}function sd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sd(e);if(t!==null)return t;e=e.sibling}return null}var dd=ge.unstable_scheduleCallback,ql=ge.unstable_cancelCallback,Oc=ge.unstable_shouldYield,jc=ge.unstable_requestPaint,V=ge.unstable_now,Uc=ge.unstable_getCurrentPriorityLevel,_a=ge.unstable_ImmediatePriority,ud=ge.unstable_UserBlockingPriority,Jr=ge.unstable_NormalPriority,Fc=ge.unstable_LowPriority,cd=ge.unstable_IdlePriority,hi=null,Oe=null;function Bc(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(hi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Wc,Vc=Math.log,Hc=Math.LN2;function Wc(e){return e>>>=0,e===0?32:31-(Vc(e)/Hc|0)|0}var vr=64,Sr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=In(l):(o&=a,o!==0&&(r=In(o)))}else a=n&~i,a!==0?r=In(a):o!==0&&(r=In(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),i=1<<n,r|=e[n],t&=~i;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ae(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=qc(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=vr;return vr<<=1,(vr&4194240)===0&&(vr=64),e}function Zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ae(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function fd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var md,va,hd,gd,_d,No=!1,xr=[],ot=null,at=null,lt=null,Bn=new Map,Vn=new Map,tt=[],Yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function vn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ir(t),t!==null&&va(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kc(e,t,n,r,i){switch(t){case"focusin":return ot=vn(ot,e,t,n,r,i),!0;case"dragenter":return at=vn(at,e,t,n,r,i),!0;case"mouseover":return lt=vn(lt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bn.set(o,vn(Bn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vn.set(o,vn(Vn.get(o)||null,e,t,n,r,i)),!0}return!1}function yd(e){var t=bt(e.target);if(t!==null){var n=Pt(t);if(n!==null){if(t=n.tag,t===13){if(t=ad(n),t!==null){e.blockedOn=t,_d(e.priority,function(){hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$o=r,n.target.dispatchEvent(r),$o=null}else return t=ir(n),t!==null&&va(t),e.blockedOn=n,!1;t.shift()}return!0}function Jl(e,t,n){Nr(e)&&n.delete(t)}function Gc(){No=!1,ot!==null&&Nr(ot)&&(ot=null),at!==null&&Nr(at)&&(at=null),lt!==null&&Nr(lt)&&(lt=null),Bn.forEach(Jl),Vn.forEach(Jl)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,Gc)))}function Hn(e){function t(i){return Sn(i,e)}if(0<xr.length){Sn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&Sn(ot,e),at!==null&&Sn(at,e),lt!==null&&Sn(lt,e),Bn.forEach(t),Vn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)yd(n),n.blockedOn===null&&tt.shift()}var en=Ye.ReactCurrentBatchConfig,Kr=!0;function Xc(e,t,n,r){var i=A,o=en.transition;en.transition=null;try{A=1,Sa(e,t,n,r)}finally{A=i,en.transition=o}}function Zc(e,t,n,r){var i=A,o=en.transition;en.transition=null;try{A=4,Sa(e,t,n,r)}finally{A=i,en.transition=o}}function Sa(e,t,n,r){if(Kr){var i=zo(e,t,n,r);if(i===null)ao(e,t,r,Gr,n),Ql(e,r);else if(Kc(i,e,t,n,r))r.stopPropagation();else if(Ql(e,r),t&4&&-1<Yc.indexOf(e)){for(;i!==null;){var o=ir(i);if(o!==null&&md(o),o=zo(e,t,n,r),o===null&&ao(e,t,r,Gr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ao(e,t,r,null,n)}}var Gr=null;function zo(e,t,n,r){if(Gr=null,e=ga(r),e=bt(e),e!==null)if(t=Pt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case _a:return 1;case ud:return 4;case Jr:case Fc:return 16;case cd:return 536870912;default:return 16}default:return 16}}var rt=null,xa=null,zr=null;function Sd(){if(zr)return zr;var e,t=xa,n=t.length,r,i="value"in rt?rt.value:rt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return zr=i.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function Yl(){return!1}function _e(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:Yl,this.isPropagationStopped=Yl,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=_e(cn),rr=j({},cn,{view:0,detail:0}),ep=_e(rr),eo,to,xn,gi=j({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(eo=e.screenX-xn.screenX,to=e.screenY-xn.screenY):to=eo=0,xn=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),Kl=_e(gi),tp=j({},gi,{dataTransfer:0}),np=_e(tp),rp=j({},rr,{relatedTarget:0}),no=_e(rp),ip=j({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),op=_e(ip),ap=j({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=_e(ap),sp=j({},cn,{data:0}),Gl=_e(sp),dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function ba(){return pp}var fp=j({},rr,{key:function(e){if(e.key){var t=dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=_e(fp),hp=j({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=_e(hp),gp=j({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),_p=_e(gp),yp=j({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=_e(yp),Sp=j({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=_e(Sp),wp=[9,13,27,32],ka=We&&"CompositionEvent"in window,Ln=null;We&&"documentMode"in document&&(Ln=document.documentMode);var bp=We&&"TextEvent"in window&&!Ln,xd=We&&(!ka||Ln&&8<Ln&&11>=Ln),Zl=" ",es=!1;function wd(e,t){switch(e){case"keyup":return wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function kp(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(es=!0,Zl);case"textInput":return e=t.data,e===Zl&&es?null:e;default:return null}}function Cp(e,t){if(Ft)return e==="compositionend"||!ka&&wd(e,t)?(e=Sd(),zr=xa=rt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xd&&t.locale!=="ko"?null:t.data;default:return null}}var Ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ep[e.type]:t==="textarea"}function kd(e,t,n,r){td(r),t=Xr(t,"onChange"),0<t.length&&(n=new wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Wn=null;function Dp(e){Nd(e,0)}function _i(e){var t=Ht(e);if(Js(t))return e}function Ip(e,t){if(e==="change")return t}var Cd=!1;We&&(We?(kr="oninput"in document,kr||(ro=document.createElement("div"),ro.setAttribute("oninput","return;"),kr=typeof ro.oninput=="function"),br=kr):br=!1,Cd=br&&(!document.documentMode||9<document.documentMode));var br,kr,ro;function ns(){Mn&&(Mn.detachEvent("onpropertychange",Ed),Wn=Mn=null)}function Ed(e){if(e.propertyName==="value"&&_i(Wn)){var t=[];kd(t,Wn,e,ga(e)),od(Dp,t)}}function Tp(e,t,n){e==="focusin"?(ns(),Mn=t,Wn=n,Mn.attachEvent("onpropertychange",Ed)):e==="focusout"&&ns()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Wn)}function Ap(e,t){if(e==="click")return _i(t)}function Lp(e,t){if(e==="input"||e==="change")return _i(t)}function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Mp;function qn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yo.call(t,i)||!Me(e[i],t[i]))return!1}return!0}function rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var n=rs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rs(n)}}function Dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Id(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pp(e){var t=Id(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dd(n.ownerDocument.documentElement,n)){if(r!==null&&Ca(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=is(n,o);var a=is(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Np=We&&"documentMode"in document&&11>=document.documentMode,Bt=null,Ro=null,Pn=null,Oo=!1;function os(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oo||Bt==null||Bt!==Wr(r)||(r=Bt,"selectionStart"in r&&Ca(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&qn(Pn,r)||(Pn=r,r=Xr(Ro,"onSelect"),0<r.length&&(t=new wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},io={},Td={};We&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function yi(e){if(io[e])return io[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Td)return io[e]=t[n];return e}var $d=yi("animationend"),Ad=yi("animationiteration"),Ld=yi("animationstart"),Md=yi("transitionend"),Pd=new Map,as="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Pd.set(e,t),Mt(t,[e])}for(Er=0;Er<as.length;Er++)Dr=as[Er],ls=Dr.toLowerCase(),ss=Dr[0].toUpperCase()+Dr.slice(1),ht(ls,"on"+ss);var Dr,ls,ss,Er;ht($d,"onAnimationEnd");ht(Ad,"onAnimationIteration");ht(Ld,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Md,"onTransitionEnd");rn("onMouseEnter",["mouseout","mouseover"]);rn("onMouseLeave",["mouseout","mouseover"]);rn("onPointerEnter",["pointerout","pointerover"]);rn("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function ds(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zc(r,t,void 0,e),e.currentTarget=null}function Nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;ds(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;ds(i,l,d),o=s}}}if(Qr)throw e=Mo,Qr=!1,Mo=null,e}function P(e,t){var n=t[Vo];n===void 0&&(n=t[Vo]=new Set);var r=e+"__bubble";n.has(r)||(zd(t,e,2,!1),n.add(r))}function oo(e,t,n){var r=0;t&&(r|=4),zd(n,e,r,t)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function Qn(e){if(!e[Ir]){e[Ir]=!0,Vs.forEach(function(n){n!=="selectionchange"&&(zp.has(n)||oo(n,!1,e),oo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ir]||(t[Ir]=!0,oo("selectionchange",!1,t))}}function zd(e,t,n,r){switch(vd(t)){case 1:var i=Xc;break;case 4:i=Zc;break;default:i=Sa}n=i.bind(null,t,n,e),i=void 0,!Lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ao(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=bt(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}od(function(){var d=o,f=ga(n),m=[];e:{var h=Pd.get(e);if(h!==void 0){var v=wa,w=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":v=mp;break;case"focusin":w="focus",v=no;break;case"focusout":w="blur",v=no;break;case"beforeblur":case"afterblur":v=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_p;break;case $d:case Ad:case Ld:v=op;break;case Md:v=vp;break;case"scroll":v=ep;break;case"wheel":v=xp;break;case"copy":case"cut":case"paste":v=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xl}var b=(t&4)!==0,B=!b&&e==="scroll",c=b?h!==null?h+"Capture":null:h;b=[];for(var u=d,p;u!==null;){p=u;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,c!==null&&(_=Fn(u,c),_!=null&&b.push(Jn(u,_,p)))),B)break;u=u.return}0<b.length&&(h=new v(h,w,null,n,f),m.push({event:h,listeners:b}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==$o&&(w=n.relatedTarget||n.fromElement)&&(bt(w)||w[qe]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=d,w=w?bt(w):null,w!==null&&(B=Pt(w),w!==B||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=d),v!==w)){if(b=Kl,_="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=Xl,_="onPointerLeave",c="onPointerEnter",u="pointer"),B=v==null?h:Ht(v),p=w==null?h:Ht(w),h=new b(_,u+"leave",v,n,f),h.target=B,h.relatedTarget=p,_=null,bt(f)===d&&(b=new b(c,u+"enter",w,n,f),b.target=p,b.relatedTarget=B,_=b),B=_,v&&w)t:{for(b=v,c=w,u=0,p=b;p;p=Ot(p))u++;for(p=0,_=c;_;_=Ot(_))p++;for(;0<u-p;)b=Ot(b),u--;for(;0<p-u;)c=Ot(c),p--;for(;u--;){if(b===c||c!==null&&b===c.alternate)break t;b=Ot(b),c=Ot(c)}b=null}else b=null;v!==null&&us(m,h,v,b,!1),w!==null&&B!==null&&us(m,B,w,b,!0)}}e:{if(h=d?Ht(d):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=Ip;else if(ts(h))if(Cd)k=Lp;else{k=$p;var C=Tp}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Ap);if(k&&(k=k(e,d))){kd(m,k,n,f);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Co(h,"number",h.value)}switch(C=d?Ht(d):window,e){case"focusin":(ts(C)||C.contentEditable==="true")&&(Bt=C,Ro=d,Pn=null);break;case"focusout":Pn=Ro=Bt=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,os(m,n,f);break;case"selectionchange":if(Np)break;case"keydown":case"keyup":os(m,n,f)}var E;if(ka)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ft?wd(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(xd&&n.locale!=="ko"&&(Ft||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ft&&(E=Sd()):(rt=f,xa="value"in rt?rt.value:rt.textContent,Ft=!0)),C=Xr(d,D),0<C.length&&(D=new Gl(D,e,null,n,f),m.push({event:D,listeners:C}),E?D.data=E:(E=bd(n),E!==null&&(D.data=E)))),(E=bp?kp(e,n):Cp(e,n))&&(d=Xr(d,"onBeforeInput"),0<d.length&&(f=new Gl("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=E))}Nd(m,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fn(e,n),o!=null&&r.unshift(Jn(e,o,i)),o=Fn(e,t),o!=null&&r.push(Jn(e,o,i))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function us(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=Fn(n,o),s!=null&&a.unshift(Jn(n,s,l))):i||(s=Fn(n,o),s!=null&&a.push(Jn(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Rp=/\r\n?/g,Op=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(Rp,`
`).replace(Op,"")}function Tr(e,t,n){if(t=cs(t),cs(e)!==t&&n)throw Error(g(425))}function Zr(){}var jo=null,Uo=null;function Fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(Fp)}:Bo;function Fp(e){setTimeout(function(){throw e})}function lo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),Re="__reactFiber$"+pn,Yn="__reactProps$"+pn,qe="__reactContainer$"+pn,Vo="__reactEvents$"+pn,Bp="__reactListeners$"+pn,Vp="__reactHandles$"+pn;function bt(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fs(e);e!==null;){if(n=e[Re])return n;e=fs(e)}return t}e=n,n=e.parentNode}return null}function ir(e){return e=e[Re]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function vi(e){return e[Yn]||null}var Ho=[],Wt=-1;function gt(e){return{current:e}}function N(e){0>Wt||(e.current=Ho[Wt],Ho[Wt]=null,Wt--)}function M(e,t){Wt++,Ho[Wt]=e.current,e.current=t}var mt={},re=gt(mt),ue=gt(!1),It=mt;function on(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ce(e){return e=e.childContextTypes,e!=null}function ei(){N(ue),N(re)}function ms(e,t,n){if(re.current!==mt)throw Error(g(168));M(re,t),M(ue,n)}function Rd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(g(108,Tc(e)||"Unknown",i));return j({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,It=re.current,M(re,e),M(ue,ue.current),!0}function hs(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=Rd(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,N(ue),N(re),M(re,e)):N(ue),M(ue,n)}var Fe=null,Si=!1,so=!1;function Od(e){Fe===null?Fe=[e]:Fe.push(e)}function Hp(e){Si=!0,Od(e)}function _t(){if(!so&&Fe!==null){so=!0;var e=0,t=A;try{var n=Fe;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Fe=null,Si=!1}catch(i){throw Fe!==null&&(Fe=Fe.slice(e+1)),dd(_a,_t),i}finally{A=t,so=!1}}return null}var qt=[],Qt=0,ni=null,ri=0,Se=[],xe=0,Tt=null,Be=1,Ve="";function xt(e,t){qt[Qt++]=ri,qt[Qt++]=ni,ni=e,ri=t}function jd(e,t,n){Se[xe++]=Be,Se[xe++]=Ve,Se[xe++]=Tt,Tt=e;var r=Be;e=Ve;var i=32-Ae(r)-1;r&=~(1<<i),n+=1;var o=32-Ae(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Be=1<<32-Ae(t)+i|n<<i|r,Ve=o+e}else Be=1<<o|n<<i|r,Ve=e}function Ea(e){e.return!==null&&(xt(e,1),jd(e,1,0))}function Da(e){for(;e===ni;)ni=qt[--Qt],qt[Qt]=null,ri=qt[--Qt],qt[Qt]=null;for(;e===Tt;)Tt=Se[--xe],Se[xe]=null,Ve=Se[--xe],Se[xe]=null,Be=Se[--xe],Se[xe]=null}var he=null,me=null,z=!1,$e=null;function Ud(e,t){var n=we(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,me=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Be,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=we(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,me=null,!0):!1;default:return!1}}function Wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(z){var t=me;if(t){var n=t;if(!gs(e,t)){if(Wo(e))throw Error(g(418));t=st(n.nextSibling);var r=he;t&&gs(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,z=!1,he=e)}}else{if(Wo(e))throw Error(g(418));e.flags=e.flags&-4097|2,z=!1,he=e}}}function _s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function $r(e){if(e!==he)return!1;if(!z)return _s(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fo(e.type,e.memoizedProps)),t&&(t=me)){if(Wo(e))throw Fd(),Error(g(418));for(;t;)Ud(e,t),t=st(t.nextSibling)}if(_s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=he?st(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=me;e;)e=st(e.nextSibling)}function an(){me=he=null,z=!1}function Ia(e){$e===null?$e=[e]:$e.push(e)}var Wp=Ye.ReactCurrentBatchConfig;function wn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ys(e){var t=e._init;return t(e._payload)}function Bd(e){function t(c,u){if(e){var p=c.deletions;p===null?(c.deletions=[u],c.flags|=16):p.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=pt(c,u),c.index=0,c.sibling=null,c}function o(c,u,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<u?(c.flags|=2,u):p):(c.flags|=2,u)):(c.flags|=1048576,u)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,u,p,_){return u===null||u.tag!==6?(u=go(p,c.mode,_),u.return=c,u):(u=i(u,p),u.return=c,u)}function s(c,u,p,_){var k=p.type;return k===Ut?f(c,u,p.props.children,_,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&ys(k)===u.type)?(_=i(u,p.props),_.ref=wn(c,u,p),_.return=c,_):(_=Hr(p.type,p.key,p.props,null,c.mode,_),_.ref=wn(c,u,p),_.return=c,_)}function d(c,u,p,_){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=_o(p,c.mode,_),u.return=c,u):(u=i(u,p.children||[]),u.return=c,u)}function f(c,u,p,_,k){return u===null||u.tag!==7?(u=Dt(p,c.mode,_,k),u.return=c,u):(u=i(u,p),u.return=c,u)}function m(c,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=go(""+u,c.mode,p),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case gr:return p=Hr(u.type,u.key,u.props,null,c.mode,p),p.ref=wn(c,null,u),p.return=c,p;case jt:return u=_o(u,c.mode,p),u.return=c,u;case Ze:var _=u._init;return m(c,_(u._payload),p)}if(Dn(u)||yn(u))return u=Dt(u,c.mode,p,null),u.return=c,u;Ar(c,u)}return null}function h(c,u,p,_){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(c,u,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return p.key===k?s(c,u,p,_):null;case jt:return p.key===k?d(c,u,p,_):null;case Ze:return k=p._init,h(c,u,k(p._payload),_)}if(Dn(p)||yn(p))return k!==null?null:f(c,u,p,_,null);Ar(c,p)}return null}function v(c,u,p,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return c=c.get(p)||null,l(u,c,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case gr:return c=c.get(_.key===null?p:_.key)||null,s(u,c,_,k);case jt:return c=c.get(_.key===null?p:_.key)||null,d(u,c,_,k);case Ze:var C=_._init;return v(c,u,p,C(_._payload),k)}if(Dn(_)||yn(_))return c=c.get(p)||null,f(u,c,_,k,null);Ar(u,_)}return null}function w(c,u,p,_){for(var k=null,C=null,E=u,D=u=0,Q=null;E!==null&&D<p.length;D++){E.index>D?(Q=E,E=null):Q=E.sibling;var $=h(c,E,p[D],_);if($===null){E===null&&(E=Q);break}e&&E&&$.alternate===null&&t(c,E),u=o($,u,D),C===null?k=$:C.sibling=$,C=$,E=Q}if(D===p.length)return n(c,E),z&&xt(c,D),k;if(E===null){for(;D<p.length;D++)E=m(c,p[D],_),E!==null&&(u=o(E,u,D),C===null?k=E:C.sibling=E,C=E);return z&&xt(c,D),k}for(E=r(c,E);D<p.length;D++)Q=v(E,c,D,p[D],_),Q!==null&&(e&&Q.alternate!==null&&E.delete(Q.key===null?D:Q.key),u=o(Q,u,D),C===null?k=Q:C.sibling=Q,C=Q);return e&&E.forEach(function(Ke){return t(c,Ke)}),z&&xt(c,D),k}function b(c,u,p,_){var k=yn(p);if(typeof k!="function")throw Error(g(150));if(p=k.call(p),p==null)throw Error(g(151));for(var C=k=null,E=u,D=u=0,Q=null,$=p.next();E!==null&&!$.done;D++,$=p.next()){E.index>D?(Q=E,E=null):Q=E.sibling;var Ke=h(c,E,$.value,_);if(Ke===null){E===null&&(E=Q);break}e&&E&&Ke.alternate===null&&t(c,E),u=o(Ke,u,D),C===null?k=Ke:C.sibling=Ke,C=Ke,E=Q}if($.done)return n(c,E),z&&xt(c,D),k;if(E===null){for(;!$.done;D++,$=p.next())$=m(c,$.value,_),$!==null&&(u=o($,u,D),C===null?k=$:C.sibling=$,C=$);return z&&xt(c,D),k}for(E=r(c,E);!$.done;D++,$=p.next())$=v(E,c,D,$.value,_),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?D:$.key),u=o($,u,D),C===null?k=$:C.sibling=$,C=$);return e&&E.forEach(function(ec){return t(c,ec)}),z&&xt(c,D),k}function B(c,u,p,_){if(typeof p=="object"&&p!==null&&p.type===Ut&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:e:{for(var k=p.key,C=u;C!==null;){if(C.key===k){if(k=p.type,k===Ut){if(C.tag===7){n(c,C.sibling),u=i(C,p.props.children),u.return=c,c=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&ys(k)===C.type){n(c,C.sibling),u=i(C,p.props),u.ref=wn(c,C,p),u.return=c,c=u;break e}n(c,C);break}else t(c,C);C=C.sibling}p.type===Ut?(u=Dt(p.props.children,c.mode,_,p.key),u.return=c,c=u):(_=Hr(p.type,p.key,p.props,null,c.mode,_),_.ref=wn(c,u,p),_.return=c,c=_)}return a(c);case jt:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(c,u.sibling),u=i(u,p.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=_o(p,c.mode,_),u.return=c,c=u}return a(c);case Ze:return C=p._init,B(c,u,C(p._payload),_)}if(Dn(p))return w(c,u,p,_);if(yn(p))return b(c,u,p,_);Ar(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,p),u.return=c,c=u):(n(c,u),u=go(p,c.mode,_),u.return=c,c=u),a(c)):n(c,u)}return B}var ln=Bd(!0),Vd=Bd(!1),ii=gt(null),oi=null,Jt=null,Ta=null;function $a(){Ta=Jt=oi=null}function Aa(e){var t=ii.current;N(ii),e._currentValue=t}function Qo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tn(e,t){oi=e,Ta=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(de=!0),e.firstContext=null)}function ke(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(oi===null)throw Error(g(308));Jt=e,oi.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var kt=null;function La(e){kt===null?kt=[e]:kt.push(e)}function Hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,La(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(T&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qe(e,n)}return i=r.interleaved,i===null?(t.next=t,La(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qe(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}function vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,r){var i=e.updateQueue;et=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,f=d=s=null,l=o;do{var h=l.lane,v=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,b=l;switch(h=t,v=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){m=w.call(v,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,h=typeof w=="function"?w.call(v,m,h):w,h==null)break e;m=j({},m,h);break e;case 2:et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=v,s=m):f=f.next=v,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(s=m),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);At|=a,e.lanes=a,e.memoizedState=m}}function Ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(g(191,i));i.call(r)}}}var or={},je=gt(or),Kn=gt(or),Gn=gt(or);function Ct(e){if(e===or)throw Error(g(174));return e}function Pa(e,t){switch(M(Gn,t),M(Kn,e),M(je,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}N(je),M(je,t)}function sn(){N(je),N(Kn),N(Gn)}function qd(e){Ct(Gn.current);var t=Ct(je.current),n=Do(t,e.type);t!==n&&(M(Kn,e),M(je,n))}function Na(e){Kn.current===e&&(N(je),N(Kn))}var R=gt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=[];function za(){for(var e=0;e<uo.length;e++)uo[e]._workInProgressVersionPrimary=null;uo.length=0}var jr=Ye.ReactCurrentDispatcher,co=Ye.ReactCurrentBatchConfig,$t=0,O=null,W=null,J=null,si=!1,Nn=!1,Xn=0,qp=0;function ee(){throw Error(g(321))}function Ra(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,i,o){if($t=o,O=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jr.current=e===null||e.memoizedState===null?Kp:Gp,e=n(r,i),Nn){o=0;do{if(Nn=!1,Xn=0,25<=o)throw Error(g(301));o+=1,J=W=null,t.updateQueue=null,jr.current=Xp,e=n(r,i)}while(Nn)}if(jr.current=di,t=W!==null&&W.next!==null,$t=0,J=W=O=null,si=!1,t)throw Error(g(300));return e}function ja(){var e=Xn!==0;return Xn=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?O.memoizedState=J=e:J=J.next=e,J}function Ce(){if(W===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=J===null?O.memoizedState:J.next;if(t!==null)J=t,W=e;else{if(e===null)throw Error(g(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},J===null?O.memoizedState=J=e:J=J.next=e}return J}function Zn(e,t){return typeof t=="function"?t(e):t}function po(e){var t=Ce(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=W,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var f=d.lane;if(($t&f)===f)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,O.lanes|=f,At|=f}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Me(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,O.lanes|=o,At|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fo(e){var t=Ce(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Me(o,t.memoizedState)||(de=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qd(){}function Jd(e,t){var n=O,r=Ce(),i=t(),o=!Me(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,Ua(Gd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,er(9,Kd.bind(null,n,r,i,t),void 0,null),Y===null)throw Error(g(349));($t&30)!==0||Yd(n,t,i)}return i}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kd(e,t,n,r){t.value=n,t.getSnapshot=r,Xd(t)&&Zd(e)}function Gd(e,t,n){return n(function(){Xd(t)&&Zd(e)})}function Xd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function Zd(e){var t=Qe(e,1);t!==null&&Le(t,e,1,-1)}function xs(e){var t=ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=Yp.bind(null,O,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eu(){return Ce().memoizedState}function Ur(e,t,n,r){var i=ze();O.flags|=e,i.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var i=Ce();r=r===void 0?null:r;var o=void 0;if(W!==null){var a=W.memoizedState;if(o=a.destroy,r!==null&&Ra(r,a.deps)){i.memoizedState=er(t,n,o,r);return}}O.flags|=e,i.memoizedState=er(1|t,n,o,r)}function ws(e,t){return Ur(8390656,8,e,t)}function Ua(e,t){return xi(2048,8,e,t)}function tu(e,t){return xi(4,2,e,t)}function nu(e,t){return xi(4,4,e,t)}function ru(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function iu(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,ru.bind(null,t,e),n)}function Fa(){}function ou(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function au(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ra(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lu(e,t,n){return($t&21)===0?(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n):(Me(n,t)||(n=pd(),O.lanes|=n,At|=n,e.baseState=!0),t)}function Qp(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=co.transition;co.transition={};try{e(!1),t()}finally{A=n,co.transition=r}}function su(){return Ce().memoizedState}function Jp(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},du(e))uu(t,n);else if(n=Hd(e,t,n,r),n!==null){var i=ae();Le(n,e,r,i),cu(n,t,r)}}function Yp(e,t,n){var r=ct(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(du(e))uu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Me(l,a)){var s=t.interleaved;s===null?(i.next=i,La(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Hd(e,t,i,r),n!==null&&(i=ae(),Le(n,e,r,i),cu(n,t,r))}}function du(e){var t=e.alternate;return e===O||t!==null&&t===O}function uu(e,t){Nn=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ya(e,n)}}var di={readContext:ke,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},Kp={readContext:ke,useCallback:function(e,t){return ze().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,ru.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jp.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var t=ze();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:Fa,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=Qp.bind(null,e[1]),ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=O,i=ze();if(z){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),Y===null)throw Error(g(349));($t&30)!==0||Yd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ws(Gd.bind(null,r,o,e),[e]),r.flags|=2048,er(9,Kd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ze(),t=Y.identifierPrefix;if(z){var n=Ve,r=Be;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gp={readContext:ke,useCallback:ou,useContext:ke,useEffect:Ua,useImperativeHandle:iu,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:au,useReducer:po,useRef:eu,useState:function(){return po(Zn)},useDebugValue:Fa,useDeferredValue:function(e){var t=Ce();return lu(t,W.memoizedState,e)},useTransition:function(){var e=po(Zn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Jd,useId:su,unstable_isNewReconciler:!1},Xp={readContext:ke,useCallback:ou,useContext:ke,useEffect:Ua,useImperativeHandle:iu,useInsertionEffect:tu,useLayoutEffect:nu,useMemo:au,useReducer:fo,useRef:eu,useState:function(){return fo(Zn)},useDebugValue:Fa,useDeferredValue:function(e){var t=Ce();return W===null?t.memoizedState=e:lu(t,W.memoizedState,e)},useTransition:function(){var e=fo(Zn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Jd,useId:su,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),i=ct(e),o=He(r,i);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Le(t,e,i,r),Or(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),i=ct(e),o=He(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Le(t,e,i,r),Or(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ct(e),i=He(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Le(t,e,r,n),Or(t,e,r))}};function bs(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(i,o):!0}function pu(e,t,n){var r=!1,i=mt,o=t.contextType;return typeof o=="object"&&o!==null?o=ke(o):(i=ce(t)?It:re.current,r=t.contextTypes,o=(r=r!=null)?on(e,i):mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function Yo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ma(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ke(o):(o=ce(t)?It:re.current,i.context=on(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),ai(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=Ic(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function mo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ko(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zp=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,aa=r),Ko(e,t)},n}function mu(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ko(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ko(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Cs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function Es(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ds(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ef=Ye.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?Vd(t,null,n,r):ln(t,e.child,n,r)}function Is(e,t,n,r,i){n=n.render;var o=t.ref;return tn(t,i),r=Oa(e,t,n,r,o,i),n=ja(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(z&&n&&Ea(t),t.flags|=1,oe(e,t,r,i),t.child)}function Ts(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ya(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,hu(e,t,o,r,i)):(e=Hr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(a,r)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=pt(o,r),e.ref=t.ref,e.return=t,t.child=e}function hu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qn(o,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(de=!0);else return t.lanes=e.lanes,Je(e,t,i)}return Go(e,t,n,r,i)}function gu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Kt,fe),fe|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Kt,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(Kt,fe),fe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(Kt,fe),fe|=r;return oe(e,t,i,n),t.child}function _u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Go(e,t,n,r,i){var o=ce(n)?It:re.current;return o=on(t,o),tn(t,i),n=Oa(e,t,n,r,o,i),r=ja(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(z&&r&&Ea(t),t.flags|=1,oe(e,t,n,i),t.child)}function $s(e,t,n,r,i){if(ce(n)){var o=!0;ti(t)}else o=!1;if(tn(t,i),t.stateNode===null)Fr(e,t),pu(t,n,r),Yo(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=ce(n)?It:re.current,d=on(t,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&ks(t,a,r,d),et=!1;var h=t.memoizedState;a.state=h,ai(t,r,a,i),s=t.memoizedState,l!==r||h!==s||ue.current||et?(typeof f=="function"&&(Jo(t,n,f,r),s=t.memoizedState),(l=et||bs(t,n,l,r,h,s,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wd(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ie(t.type,l),a.props=d,m=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=ke(s):(s=ce(n)?It:re.current,s=on(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==s)&&ks(t,a,r,s),et=!1,h=t.memoizedState,a.state=h,ai(t,r,a,i);var w=t.memoizedState;l!==m||h!==w||ue.current||et?(typeof v=="function"&&(Jo(t,n,v,r),w=t.memoizedState),(d=et||bs(t,n,d,r,h,w,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Xo(e,t,n,r,o,i)}function Xo(e,t,n,r,i,o){_u(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&hs(t,n,!1),Je(e,t,o);r=t.stateNode,ef.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ln(t,e.child,null,o),t.child=ln(t,null,l,o)):oe(e,t,l,o),t.memoizedState=r.state,i&&hs(t,n,!0),t.child}function yu(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),Pa(e,t.containerInfo)}function As(e,t,n,r,i){return an(),Ia(i),t.flags|=256,oe(e,t,n,r),t.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function vu(e,t,n){var r=t.pendingProps,i=R.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(R,i&1),e===null)return qo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ci(a,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ea(n),t.memoizedState=Zo,e):Ba(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return tf(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=pt(l,o):(o=Dt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ea(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Zo,r}return o=e.child,e=o.sibling,r=pt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ba(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Ia(r),ln(t,e.child,null,n),e=Ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tf(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=mo(Error(g(422))),Lr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ci({mode:"visible",children:r.children},i,0,null),o=Dt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&ln(t,e.child,null,a),t.child.memoizedState=ea(a),t.memoizedState=Zo,o);if((t.mode&1)===0)return Lr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(g(419)),r=mo(o,r,void 0),Lr(e,t,a,r)}if(l=(a&e.childLanes)!==0,de||l){if(r=Y,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qe(e,i),Le(r,e,i,-1))}return Ja(),r=mo(Error(g(421))),Lr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,me=st(i.nextSibling),he=t,z=!0,$e=null,e!==null&&(Se[xe++]=Be,Se[xe++]=Ve,Se[xe++]=Tt,Be=e.id,Ve=e.overflow,Tt=t),t=Ba(t,r.children),t.flags|=4096,t)}function Ls(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qo(e.return,t,n)}function ho(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Su(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=R.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,n,t);else if(e.tag===19)Ls(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(R,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ho(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&li(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ho(t,!0,n,null,o);break;case"together":ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nf(e,t,n){switch(t.tag){case 3:yu(t),an();break;case 5:qd(t);break;case 1:ce(t.type)&&ti(t);break;case 4:Pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;M(ii,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(R,R.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?vu(e,t,n):(M(R,R.current&1),e=Je(e,t,n),e!==null?e.sibling:null);M(R,R.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Su(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(R,R.current),r)break;return null;case 22:case 23:return t.lanes=0,gu(e,t,n)}return Je(e,t,n)}var xu,ta,wu,bu;xu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};wu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ct(je.current);var o=null;switch(n){case"input":i=bo(e,i),r=bo(e,r),o=[];break;case"select":i=j({},i,{value:void 0}),r=j({},r,{value:void 0}),o=[];break;case"textarea":i=Eo(e,i),r=Eo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}Io(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i?.[d],r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&P("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rf(e,t,n){var r=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return ce(t.type)&&ei(),te(t),null;case 3:return r=t.stateNode,sn(),N(ue),N(re),za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$e!==null&&(da($e),$e=null))),ta(e,t),te(t),null;case 5:Na(t);var i=Ct(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)wu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return te(t),null}if(e=Ct(je.current),$r(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Re]=t,r[Yn]=o,e=(t.mode&1)!==0,n){case"dialog":P("cancel",r),P("close",r);break;case"iframe":case"object":case"embed":P("load",r);break;case"video":case"audio":for(i=0;i<Tn.length;i++)P(Tn[i],r);break;case"source":P("error",r);break;case"img":case"image":case"link":P("error",r),P("load",r);break;case"details":P("toggle",r);break;case"input":Ul(r,o),P("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},P("invalid",r);break;case"textarea":Bl(r,o),P("invalid",r)}Io(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,l,e),i=["children",""+l]):jn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&P("scroll",r)}switch(n){case"input":_r(r),Fl(r,o,!0);break;case"textarea":_r(r),Vl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Re]=t,e[Yn]=r,xu(e,t,!1,!1),t.stateNode=e;e:{switch(a=To(n,r),n){case"dialog":P("cancel",e),P("close",e),i=r;break;case"iframe":case"object":case"embed":P("load",e),i=r;break;case"video":case"audio":for(i=0;i<Tn.length;i++)P(Tn[i],e);i=r;break;case"source":P("error",e),i=r;break;case"img":case"image":case"link":P("error",e),P("load",e),i=r;break;case"details":P("toggle",e),i=r;break;case"input":Ul(e,r),i=bo(e,r),P("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=j({},r,{value:void 0}),P("invalid",e);break;case"textarea":Bl(e,r),i=Eo(e,r),P("invalid",e);break;default:i=r}Io(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ed(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Un(e,s):typeof s=="number"&&Un(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&P("scroll",e):s!=null&&pa(e,o,s,a))}switch(n){case"input":_r(e),Fl(e,r,!1);break;case"textarea":_r(e),Vl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Ct(Gn.current),Ct(je.current),$r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Re]=t,(o=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Re]=t,t.stateNode=r}return te(t),null;case 13:if(N(R),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&me!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Fd(),an(),t.flags|=98560,o=!1;else if(o=$r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Re]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),o=!1}else $e!==null&&(da($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(R.current&1)!==0?q===0&&(q=3):Ja())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return sn(),ta(e,t),e===null&&Qn(t.stateNode.containerInfo),te(t),null;case 10:return Aa(t.type._context),te(t),null;case 17:return ce(t.type)&&ei(),te(t),null;case 19:if(N(R),o=t.memoizedState,o===null)return te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)bn(o,!1);else{if(q!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=li(e),a!==null){for(t.flags|=128,bn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(R,R.current&1|2),t.child}e=e.sibling}o.tail!==null&&V()>un&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=li(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!z)return te(t),null}else 2*V()-o.renderingStartTime>un&&n!==1073741824&&(t.flags|=128,r=!0,bn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=V(),t.sibling=null,n=R.current,M(R,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return Qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(fe&1073741824)!==0&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function of(e,t){switch(Da(t),t.tag){case 1:return ce(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(),N(ue),N(re),za(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Na(t),null;case 13:if(N(R),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(R),null;case 4:return sn(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return Qa(),null;case 24:return null;default:return null}}var Mr=!1,ne=!1,af=typeof WeakSet=="function"?WeakSet:Set,x=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){F(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){F(e,t,r)}}var Ms=!1;function lf(e,t){if(jo=Kr,e=Id(),Ca(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,f=0,m=e,h=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===n&&++d===i&&(l=a),h===o&&++f===r&&(s=a),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uo={focusedElem:e,selectionRange:n},Kr=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,B=w.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ie(t.type,b),B);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(_){F(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return w=Ms,Ms=!1,w}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&na(t,n,o)}i=i.next}while(i!==r)}}function bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ku(e){var t=e.alternate;t!==null&&(e.alternate=null,ku(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Re],delete t[Yn],delete t[Vo],delete t[Bp],delete t[Vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cu(e){return e.tag===5||e.tag===3||e.tag===4}function Ps(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var K=null,Te=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Eu(e,t,n),n=n.sibling}function Eu(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(hi,n)}catch{}switch(n.tag){case 5:ne||Yt(n,t);case 6:var r=K,i=Te;K=null,Xe(e,t,n),K=r,Te=i,K!==null&&(Te?(e=K,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):K.removeChild(n.stateNode));break;case 18:K!==null&&(Te?(e=K,n=n.stateNode,e.nodeType===8?lo(e.parentNode,n):e.nodeType===1&&lo(e,n),Hn(e)):lo(K,n.stateNode));break;case 4:r=K,i=Te,K=n.stateNode.containerInfo,Te=!0,Xe(e,t,n),K=r,Te=i;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&na(n,t,a),i=i.next}while(i!==r)}Xe(e,t,n);break;case 1:if(!ne&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){F(n,t,l)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,Xe(e,t,n),ne=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new af),t.forEach(function(r){var i=gf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:K=l.stateNode,Te=!1;break e;case 3:K=l.stateNode.containerInfo,Te=!0;break e;case 4:K=l.stateNode.containerInfo,Te=!0;break e}l=l.return}if(K===null)throw Error(g(160));Eu(o,a,i),K=null,Te=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){F(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Du(t,e),t=t.sibling}function Du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ne(e),r&4){try{zn(3,e,e.return),bi(3,e)}catch(b){F(e,e.return,b)}try{zn(5,e,e.return)}catch(b){F(e,e.return,b)}}break;case 1:De(t,e),Ne(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(De(t,e),Ne(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var i=e.stateNode;try{Un(i,"")}catch(b){F(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ys(i,o),To(l,a);var d=To(l,o);for(a=0;a<s.length;a+=2){var f=s[a],m=s[a+1];f==="style"?ed(i,m):f==="dangerouslySetInnerHTML"?Xs(i,m):f==="children"?Un(i,m):pa(i,f,m,d)}switch(l){case"input":ko(i,o);break;case"textarea":Ks(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Gt(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Gt(i,!!o.multiple,o.defaultValue,!0):Gt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yn]=o}catch(b){F(e,e.return,b)}}break;case 6:if(De(t,e),Ne(e),r&4){if(e.stateNode===null)throw Error(g(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){F(e,e.return,b)}}break;case 3:if(De(t,e),Ne(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(b){F(e,e.return,b)}break;case 4:De(t,e),Ne(e);break;case 13:De(t,e),Ne(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wa=V())),r&4&&Ns(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||f,De(t,e),ne=d):De(t,e),Ne(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&(e.mode&1)!==0)for(x=e,f=e.child;f!==null;){for(m=x=f;x!==null;){switch(h=x,v=h.child,h.tag){case 0:case 11:case 14:case 15:zn(4,h,h.return);break;case 1:Yt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){F(r,n,b)}}break;case 5:Yt(h,h.return);break;case 22:if(h.memoizedState!==null){Rs(m);continue}}v!==null?(v.return=h,x=v):Rs(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Zs("display",a))}catch(b){F(e,e.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(b){F(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),Ne(e),r&4&&Ns(e);break;case 21:break;default:De(t,e),Ne(e)}}function Ne(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cu(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Un(i,""),r.flags&=-33);var o=Ps(e);oa(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ps(e);ia(e,l,a);break;default:throw Error(g(161))}}catch(s){F(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sf(e,t,n){x=e,Iu(e,t,n)}function Iu(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Mr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ne;l=Mr;var d=ne;if(Mr=a,(ne=s)&&!d)for(x=i;x!==null;)a=x,s=a.child,a.tag===22&&a.memoizedState!==null?Os(i):s!==null?(s.return=a,x=s):Os(i);for(;o!==null;)x=o,Iu(o,t,n),o=o.sibling;x=i,Mr=l,ne=d}zs(e,t,n)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,x=o):zs(e,t,n)}}function zs(e){for(;x!==null;){var t=x;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ne||bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ss(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ss(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Hn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}ne||t.flags&512&&ra(t)}catch(h){F(t,t.return,h)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Rs(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function Os(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bi(4,t)}catch(s){F(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){F(t,i,s)}}var o=t.return;try{ra(t)}catch(s){F(t,o,s)}break;case 5:var a=t.return;try{ra(t)}catch(s){F(t,a,s)}}}catch(s){F(t,t.return,s)}if(t===e){x=null;break}var l=t.sibling;if(l!==null){l.return=t.return,x=l;break}x=t.return}}var df=Math.ceil,ui=Ye.ReactCurrentDispatcher,Va=Ye.ReactCurrentOwner,be=Ye.ReactCurrentBatchConfig,T=0,Y=null,H=null,G=0,fe=0,Kt=gt(0),q=0,tr=null,At=0,ki=0,Ha=0,Rn=null,se=null,Wa=0,un=1/0,Ue=null,ci=!1,aa=null,ut=null,Pr=!1,it=null,pi=0,On=0,la=null,Br=-1,Vr=0;function ae(){return(T&6)!==0?V():Br!==-1?Br:Br=V()}function ct(e){return(e.mode&1)===0?1:(T&2)!==0&&G!==0?G&-G:Wp.transition!==null?(Vr===0&&(Vr=pd()),Vr):(e=A,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e)}function Le(e,t,n,r){if(50<On)throw On=0,la=null,Error(g(185));nr(e,n,r),((T&2)===0||e!==Y)&&(e===Y&&((T&2)===0&&(ki|=n),q===4&&nt(e,G)),pe(e,r),n===1&&T===0&&(t.mode&1)===0&&(un=V()+500,Si&&_t()))}function pe(e,t){var n=e.callbackNode;Qc(e,t);var r=Yr(e,e===Y?G:0);if(r===0)n!==null&&ql(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ql(n),t===1)e.tag===0?Hp(js.bind(null,e)):Od(js.bind(null,e)),Up(function(){(T&6)===0&&_t()}),n=null;else{switch(fd(r)){case 1:n=_a;break;case 4:n=ud;break;case 16:n=Jr;break;case 536870912:n=cd;break;default:n=Jr}n=zu(n,Tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tu(e,t){if(Br=-1,Vr=0,(T&6)!==0)throw Error(g(327));var n=e.callbackNode;if(nn()&&e.callbackNode!==n)return null;var r=Yr(e,e===Y?G:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=fi(e,r);else{t=r;var i=T;T|=2;var o=Au();(Y!==e||G!==t)&&(Ue=null,un=V()+500,Et(e,t));do try{pf();break}catch(l){$u(e,l)}while(!0);$a(),ui.current=o,T=i,H!==null?t=0:(Y=null,G=0,t=q)}if(t!==0){if(t===2&&(i=Po(e),i!==0&&(r=i,t=sa(e,i))),t===1)throw n=tr,Et(e,0),nt(e,r),pe(e,V()),n;if(t===6)nt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!uf(i)&&(t=fi(e,r),t===2&&(o=Po(e),o!==0&&(r=o,t=sa(e,o))),t===1))throw n=tr,Et(e,0),nt(e,r),pe(e,V()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:wt(e,se,Ue);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Wa+500-V(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bo(wt.bind(null,e,se,Ue),t);break}wt(e,se,Ue);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ae(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*df(r/1960))-r,10<r){e.timeoutHandle=Bo(wt.bind(null,e,se,Ue),r);break}wt(e,se,Ue);break;case 5:wt(e,se,Ue);break;default:throw Error(g(329))}}}return pe(e,V()),e.callbackNode===n?Tu.bind(null,e):null}function sa(e,t){var n=Rn;return e.current.memoizedState.isDehydrated&&(Et(e,t).flags|=256),e=fi(e,t),e!==2&&(t=se,se=n,t!==null&&da(t)),e}function da(e){se===null?se=e:se.push.apply(se,e)}function uf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Me(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Ha,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function js(e){if((T&6)!==0)throw Error(g(327));nn();var t=Yr(e,0);if((t&1)===0)return pe(e,V()),null;var n=fi(e,t);if(e.tag!==0&&n===2){var r=Po(e);r!==0&&(t=r,n=sa(e,r))}if(n===1)throw n=tr,Et(e,0),nt(e,t),pe(e,V()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,se,Ue),pe(e,V()),null}function qa(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(un=V()+500,Si&&_t())}}function Lt(e){it!==null&&it.tag===0&&(T&6)===0&&nn();var t=T;T|=1;var n=be.transition,r=A;try{if(be.transition=null,A=1,e)return e()}finally{A=r,be.transition=n,T=t,(T&6)===0&&_t()}}function Qa(){fe=Kt.current,N(Kt)}function Et(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jp(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:sn(),N(ue),N(re),za();break;case 5:Na(r);break;case 4:sn();break;case 13:N(R);break;case 19:N(R);break;case 10:Aa(r.type._context);break;case 22:case 23:Qa()}n=n.return}if(Y=e,H=e=pt(e.current,null),G=fe=t,q=0,tr=null,Ha=ki=At=0,se=Rn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}kt=null}return e}function $u(e,t){do{var n=H;try{if($a(),jr.current=di,si){for(var r=O.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}si=!1}if($t=0,J=W=O=null,Nn=!1,Xn=0,Va.current=null,n===null||n.return===null){q=1,tr=t,H=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=G,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,f=l,m=f.tag;if((f.mode&1)===0&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Es(a);if(v!==null){v.flags&=-257,Ds(v,a,l,o,t),v.mode&1&&Cs(o,d,t),t=v,s=d;var w=t.updateQueue;if(w===null){var b=new Set;b.add(s),t.updateQueue=b}else w.add(s);break e}else{if((t&1)===0){Cs(o,d,t),Ja();break e}s=Error(g(426))}}else if(z&&l.mode&1){var B=Es(a);if(B!==null){(B.flags&65536)===0&&(B.flags|=256),Ds(B,a,l,o,t),Ia(dn(s,l));break e}}o=s=dn(s,l),q!==4&&(q=2),Rn===null?Rn=[o]:Rn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=fu(o,s,t);vs(o,c);break e;case 1:l=s;var u=o.type,p=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=mu(o,l,t);vs(o,_);break e}}o=o.return}while(o!==null)}Mu(n)}catch(k){t=k,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function Au(){var e=ui.current;return ui.current=di,e===null?di:e}function Ja(){(q===0||q===3||q===2)&&(q=4),Y===null||(At&268435455)===0&&(ki&268435455)===0||nt(Y,G)}function fi(e,t){var n=T;T|=2;var r=Au();(Y!==e||G!==t)&&(Ue=null,Et(e,t));do try{cf();break}catch(i){$u(e,i)}while(!0);if($a(),T=n,ui.current=r,H!==null)throw Error(g(261));return Y=null,G=0,q}function cf(){for(;H!==null;)Lu(H)}function pf(){for(;H!==null&&!Oc();)Lu(H)}function Lu(e){var t=Nu(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?Mu(e):H=t,Va.current=null}function Mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=rf(n,t,fe),n!==null){H=n;return}}else{if(n=of(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,H=null;return}}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);q===0&&(q=5)}function wt(e,t,n){var r=A,i=be.transition;try{be.transition=null,A=1,ff(e,t,n,r)}finally{be.transition=i,A=r}return null}function ff(e,t,n,r){do nn();while(it!==null);if((T&6)!==0)throw Error(g(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jc(e,o),e===Y&&(H=Y=null,G=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Pr||(Pr=!0,zu(Jr,function(){return nn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=be.transition,be.transition=null;var a=A;A=1;var l=T;T|=4,Va.current=null,lf(e,n),Du(n,e),Pp(Uo),Kr=!!jo,Uo=jo=null,e.current=n,sf(n,e,i),jc(),T=l,A=a,be.transition=o}else e.current=n;if(Pr&&(Pr=!1,it=e,pi=i),o=e.pendingLanes,o===0&&(ut=null),Bc(n.stateNode,r),pe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=aa,aa=null,e;return(pi&1)!==0&&e.tag!==0&&nn(),o=e.pendingLanes,(o&1)!==0?e===la?On++:(On=0,la=e):On=0,_t(),null}function nn(){if(it!==null){var e=fd(pi),t=be.transition,n=A;try{if(be.transition=null,A=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,pi=0,(T&6)!==0)throw Error(g(331));var i=T;for(T|=4,x=e.current;x!==null;){var o=x,a=o.child;if((x.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(x=d;x!==null;){var f=x;switch(f.tag){case 0:case 11:case 15:zn(8,f,o)}var m=f.child;if(m!==null)m.return=f,x=m;else for(;x!==null;){f=x;var h=f.sibling,v=f.return;if(ku(f),f===d){x=null;break}if(h!==null){h.return=v,x=h;break}x=v}}}var w=o.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var B=b.sibling;b.sibling=null,b=B}while(b!==null)}}x=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,x=a;else e:for(;x!==null;){if(o=x,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:zn(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,x=c;break e}x=o.return}}var u=e.current;for(x=u;x!==null;){a=x;var p=a.child;if((a.subtreeFlags&2064)!==0&&p!==null)p.return=a,x=p;else e:for(a=u;x!==null;){if(l=x,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:bi(9,l)}}catch(k){F(l,l.return,k)}if(l===a){x=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,x=_;break e}x=l.return}}if(T=i,_t(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(hi,e)}catch{}r=!0}return r}finally{A=n,be.transition=t}}return!1}function Us(e,t,n){t=dn(n,t),t=fu(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(nr(e,1,t),pe(e,t))}function F(e,t,n){if(e.tag===3)Us(e,e,n);else for(;t!==null;){if(t.tag===3){Us(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=dn(n,e),e=mu(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(nr(t,1,e),pe(t,e));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(G&n)===n&&(q===4||q===3&&(G&130023424)===G&&500>V()-Wa?Et(e,0):Ha|=n),pe(e,t)}function Pu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Sr,Sr<<=1,(Sr&130023424)===0&&(Sr=4194304)));var n=ae();e=Qe(e,t),e!==null&&(nr(e,t,n),pe(e,n))}function hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pu(e,n)}function gf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Pu(e,n)}var Nu;Nu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)de=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return de=!1,nf(e,t,n);de=(e.flags&131072)!==0}else de=!1,z&&(t.flags&1048576)!==0&&jd(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var i=on(t,re.current);tn(t,n),i=Oa(null,t,r,e,i,n);var o=ja();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ce(r)?(o=!0,ti(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ma(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,Yo(t,r,e,n),t=Xo(null,t,r,!0,o,n)):(t.tag=0,z&&o&&Ea(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yf(r),e=Ie(r,e),i){case 0:t=Go(null,t,r,e,n);break e;case 1:t=$s(null,t,r,e,n);break e;case 11:t=Is(null,t,r,e,n);break e;case 14:t=Ts(null,t,r,Ie(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Go(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),$s(e,t,r,i,n);case 3:e:{if(yu(t),e===null)throw Error(g(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wd(e,t),ai(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dn(Error(g(423)),t),t=As(e,t,r,n,i);break e}else if(r!==i){i=dn(Error(g(424)),t),t=As(e,t,r,n,i);break e}else for(me=st(t.stateNode.containerInfo.firstChild),he=t,z=!0,$e=null,n=Vd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===i){t=Je(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return qd(t),e===null&&qo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Fo(r,i)?a=null:o!==null&&Fo(r,o)&&(t.flags|=32),_u(e,t),oe(e,t,a,n),t.child;case 6:return e===null&&qo(t),null;case 13:return vu(e,t,n);case 4:return Pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Is(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,M(ii,r._currentValue),r._currentValue=a,o!==null)if(Me(o.value,a)){if(o.children===i.children&&!ue.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=He(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Qo(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(g(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,tn(t,n),i=ke(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=Ie(r,t.pendingProps),i=Ie(r.type,i),Ts(e,t,r,i,n);case 15:return hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Fr(e,t),t.tag=1,ce(r)?(e=!0,ti(t)):e=!1,tn(t,n),pu(t,r,i),Yo(t,r,i,n),Xo(null,t,r,!0,e,n);case 19:return Su(e,t,n);case 22:return gu(e,t,n)}throw Error(g(156,t.tag))};function zu(e,t){return dd(e,t)}function _f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function we(e,t,n,r){return new _f(e,t,n,r)}function Ya(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yf(e){if(typeof e=="function")return Ya(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ha)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=we(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ya(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ut:return Dt(n.children,i,o,t);case fa:a=8,i|=8;break;case vo:return e=we(12,n,t,i|2),e.elementType=vo,e.lanes=o,e;case So:return e=we(13,n,t,i),e.elementType=So,e.lanes=o,e;case xo:return e=we(19,n,t,i),e.elementType=xo,e.lanes=o,e;case qs:return Ci(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hs:a=10;break e;case Ws:a=9;break e;case ma:a=11;break e;case ha:a=14;break e;case Ze:a=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=we(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=we(7,e,r,t),e.lanes=n,e}function Ci(e,t,n,r){return e=we(22,e,r,t),e.elementType=qs,e.lanes=n,e.stateNode={isHidden:!1},e}function go(e,t,n){return e=we(6,e,null,t),e.lanes=n,e}function _o(e,t,n){return t=we(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ka(e,t,n,r,i,o,a,l,s){return e=new vf(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=we(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(o),e}function Sf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ru(e){if(!e)return mt;e=e._reactInternals;e:{if(Pt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(ce(n))return Rd(e,n,t)}return t}function Ou(e,t,n,r,i,o,a,l,s){return e=Ka(n,r,!0,e,i,o,a,l,s),e.context=Ru(null),n=e.current,r=ae(),i=ct(n),o=He(r,i),o.callback=t??null,dt(n,o,i),e.current.lanes=i,nr(e,i,r),pe(e,r),e}function Ei(e,t,n,r){var i=t.current,o=ae(),a=ct(i);return n=Ru(n),t.context===null?t.context=n:t.pendingContext=n,t=He(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,a),e!==null&&(Le(e,i,a,o),Or(e,i,a)),a}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ga(e,t){Fs(e,t),(e=e.alternate)&&Fs(e,t)}function xf(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}Di.prototype.render=Xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));Ei(e,t,null,null)};Di.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){Ei(null,e,null,null)}),t[qe]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&yd(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bs(){}function wf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=mi(a);o.call(d)}}var a=Ou(t,r,e,0,null,!1,!1,"",Bs);return e._reactRootContainer=a,e[qe]=a.current,Qn(e.nodeType===8?e.parentNode:e),Lt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=mi(s);l.call(d)}}var s=Ka(e,0,!1,null,null,!1,!1,"",Bs);return e._reactRootContainer=s,e[qe]=s.current,Qn(e.nodeType===8?e.parentNode:e),Lt(function(){Ei(t,s,n,r)}),s}function Ti(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=mi(a);l.call(s)}}Ei(t,a,e,i)}else a=wf(n,t,e,i,r);return mi(a)}md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(ya(t,n|1),pe(t,V()),(T&6)===0&&(un=V()+500,_t()))}break;case 13:Lt(function(){var r=Qe(e,1);if(r!==null){var i=ae();Le(r,e,1,i)}}),Ga(e,1)}};va=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=ae();Le(t,e,134217728,n)}Ga(e,134217728)}};hd=function(e){if(e.tag===13){var t=ct(e),n=Qe(e,t);if(n!==null){var r=ae();Le(n,e,t,r)}Ga(e,t)}};gd=function(){return A};_d=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Ao=function(e,t,n){switch(t){case"input":if(ko(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vi(r);if(!i)throw Error(g(90));Js(r),ko(r,i)}}}break;case"textarea":Ks(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};rd=qa;id=Lt;var bf={usingClientEntryPoint:!1,Events:[ir,Ht,vi,td,nd,qa]},kn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kf={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ld(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Cn=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Cn.isDisabled&&Cn.supportsFiber))try{hi=Cn.inject(kf),Oe=Cn}catch{}var Cn;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(t))throw Error(g(200));return Sf(e,t,null,n)};ye.createRoot=function(e,t){if(!Za(e))throw Error(g(299));var n=!1,r="",i=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ka(e,1,!1,null,null,n,!1,r,i),e[qe]=t.current,Qn(e.nodeType===8?e.parentNode:e),new Xa(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=ld(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Lt(e)};ye.hydrate=function(e,t,n){if(!Ii(t))throw Error(g(200));return Ti(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Za(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ju;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ou(t,null,e,1,n??null,i,!1,o,a),e[qe]=t.current,Qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Di(t)};ye.render=function(e,t,n){if(!Ii(t))throw Error(g(200));return Ti(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(g(40));return e._reactRootContainer?(Lt(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};ye.unstable_batchedUpdates=qa;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return Ti(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426"});var $i=vt((Of,Bu)=>{"use strict";function Fu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fu)}catch(e){console.error(e)}}Fu(),Bu.exports=Uu()});var tl=vt(el=>{"use strict";var Vu=$i();el.createRoot=Vu.createRoot,el.hydrateRoot=Vu.hydrateRoot;var jf});var ul=Nt(ur()),Gu=Nt($i()),Xu=Nt(tl());var ol=Nt(ur()),Ju=Nt($i()),Yu=Nt(tl()),Cf=({html:e})=>ol.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Ai=20,U={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},fn={basic:"basic",templates:"templates"},Hu=["children","children_error","custom"],nl=["all","string","int","time","date","command"],rl="/api/cms/default_commands",ar=[{type:"default_main",title:"\u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u043A\u043E\u043C\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"\u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u0430\u044F  \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"\u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043D\u0430\u0447\u0430\u043B\u0430",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0418\u0418",supportsLlm:!0,hasModal:!0}],y=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),yt=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`uuid_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Wu=(e={})=>{let t=!!e.llm||!!String(e.system??"").trim()||!!String(e.model??"").trim();return{id:yt(),type:String(e.type??""),voiceResponse:String(e.voiceResponse??""),llmEnabled:t,system:String(e.system??""),model:String(e.model??"")}},qu=(e={})=>({id:yt(),uuid:String(e.uuid??"")}),Qu=(e={})=>({id:yt(),typeComponent:String(e.typeComponent??e.type??"children"),uuid:String(e.uuid??"")}),Li=(e={})=>({id:yt(),subType:String(e.subType??""),subVoiceCommands:String(e.subVoiceCommands??"")}),il=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._reactRoot=null,this._hass=null,this._config={base_url:"",timer_alarm_token:""},this._tab=U.primary,this._commands=[],this._page=1,this._total=0,this._loading=!1,this._error="",this._status="",this._modalOpen=!1,this._modalMode="create",this._modalSaving=!1,this._editingId="",this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._bindController=null,this._draft=this._newDraft(),this._directSubtab=fn.basic,this._directCommands=[],this._directLoading=!1,this._directError="",this._directModalOpen=!1,this._directModalMode="create",this._directModalSaving=!1,this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft(),this._templateCommands=[],this._templateLoading=!1,this._templateError="",this._templateModalOpen=!1,this._templateModalMode="create",this._templateModalSaving=!1,this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft(),this._defaultsLoading=!1,this._defaultsError="",this._defaultsModalOpen=!1,this._defaultsModalSaving=!1,this._defaultsByType=this._newDefaultsState(),this._defaultsActiveType=ar[0].type,this._defaultsActiveId=""}set hass(t){this._hass=t,this._render()}set config(t){let n={base_url:String(t?.base_url??"").trim(),timer_alarm_token:String(t?.timer_alarm_token??"").trim()},r=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token;if(this._config=n,r&&(this._tab===U.primary||this._tab===U.secondary)&&!this._loading){this._loadPage(1);return}if(r&&this._tab===U.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._render(),(this._tab===U.primary||this._tab===U.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1)}disconnectedCallback(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Yu.createRoot)(this.shadowRoot)),(0,Ju.flushSync)(()=>{this._reactRoot.render(ol.default.createElement(Cf,{html:t}))})}_swallowUiEvent(t){t.stopPropagation()}_newDraft(t=null){let n=t??{},r=typeof n.componentDialog=="object"&&n.componentDialog?n.componentDialog:{},i=Array.isArray(r.voiceResponseArray)?r.voiceResponseArray.filter(l=>l&&typeof l=="object").map(l=>Wu(l)):[],o=Array.isArray(r.nextDirectControl)?r.nextDirectControl.filter(l=>l&&typeof l=="object").map(l=>qu(l)):[],a=Array.isArray(r.nextAction)?r.nextAction.filter(l=>l&&typeof l=="object").map(l=>Qu(l)):[];return{title:String(n.title??""),uuidDialog:String(n.uuidDialog??""),type:String(r.type??""),endStatus:!!r.endStatus,forwardText:!!r.forwardText,answerType:String(r.answerType??"default"),voiceCommands:typeof r.voiceCommands=="string"?r.voiceCommands:r.voiceCommands==null?"":JSON.stringify(r.voiceCommands),responseItems:i,directControlItems:o,nextActionItems:a}}_newDirectDraft(t=null){let n=t??{},r=typeof n.directControl=="object"&&n.directControl?n.directControl:{},i=Array.isArray(r.subDirectControl)?r.subDirectControl.filter(o=>o&&typeof o=="object").map(o=>Li(o)):[];return{title:String(n.title??""),uuidDirect:String(n.uuidDirect??""),type:String(r.type??""),typeData:nl.includes(String(r.typeData??"all"))?String(r.typeData??"all"):"all",voiceCommands:r.voiceCommands==null?"":String(r.voiceCommands),manual:!!r.manual,subDirectControlItems:i,subDirectControlArray:String(r.subDirectControlArray??"")}}_newTemplateDraft(t=null){let n=t??{},r=Array.isArray(n.subDirectControl)?n.subDirectControl.filter(i=>i&&typeof i=="object").map(i=>Li(i)):[];return{title:String(n.title??""),subDirectControlItems:r}}_defaultConfig(t){return ar.find(n=>n.type===t)??ar[0]}_newDefaultsDraft(t,n=null){let r=n??{},i=this._defaultConfig(t);return{_id:String(r._id??""),type:i.type,title:i.title,endStatus:!!r.endStatus,llmEnabled:i.supportsLlm?!!(r.llmEnabled??r.llm):!1,message:String(r.message??""),system:i.supportsLlm?String(r.system??""):"",model:i.supportsLlm?String(r.model??""):""}}_newDefaultsState(){return ar.reduce((t,n)=>(t[n.type]=this._newDefaultsDraft(n.type),t),{})}_apiHeaders(t=!1){let n={};return t&&(n["Content-Type"]="application/json"),this._config.timer_alarm_token&&(n.Authorization=this._config.timer_alarm_token),n}_apiUrl(t){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}${t}`:""}async _loadPage(t=1){if(this._tab!==U.primary&&this._tab!==U.secondary)return;let n=Math.max(1,Number(t)||1),r=this._apiUrl(`/api/cms/commands?page=${encodeURIComponent(n)}&pageSize=${Ai}`);if(!r){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._loading=!0,this._error="",this._render();try{let i=await fetch(r,{method:"GET",headers:this._apiHeaders(!1)});if(!i.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${i.status}`);let o=await i.json(),a=Array.isArray(o.data)?o.data:[],l=Number(o.total??o.count??o.meta?.total??o.pagination?.total??0);this._commands=a,this._page=n,this._total=Number.isFinite(l)&&l>0?l:n*Ai+(a.length===Ai?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${a.length}.`}catch(i){this._commands=[],this._error=i?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._loading=!1,this._render()}}_setTab(t){if(this._tab=t,this._error="",this._status="",(t===U.primary||t===U.secondary)&&!this._loading){this._loadPage(this._page||1);return}if(t===U.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}_openCreateModal(){this._modalOpen=!0,this._modalMode="create",this._editingId="",this._draft=this._newDraft(),this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._error="",this._render()}_openEditModal(t){let n=this._commands.find(r=>String(r._id??"")===String(t??""));if(!n){this._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",this._render();return}this._modalOpen=!0,this._modalMode="edit",this._editingId=String(n._id??""),this._draft=this._newDraft(n),this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._error="",this._render()}_closeModal(){this._modalSaving||(this._modalOpen=!1,this._modalMode="create",this._editingId="",this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._draft=this._newDraft(),this._render())}_updateDraft(t,n){this._draft={...this._draft,[t]:n}}_buildPayload(){let t=String(this._draft.title??"").trim(),n=String(this._draft.uuidDialog??"").trim(),r=String(this._draft.type??"").trim(),o=String(this._draft.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuidDialog - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("type - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let l=(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).map(f=>{let m={type:String(f.type??"").trim(),voiceResponse:String(f.voiceResponse??"").trim()};return f.llmEnabled&&(m.llm=!0,m.system=String(f.system??"").trim(),m.model=String(f.model??"").trim()),m}),s=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map(f=>({uuid:String(f.uuid??"").trim()})).filter(f=>f.uuid),d=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map(f=>({typeComponent:Hu.includes(String(f.typeComponent??"").trim())?String(f.typeComponent??"").trim():"children",uuid:String(f.uuid??"").trim()})).filter(f=>f.uuid);return{title:t,uuidDialog:n,componentDialog:{endStatus:!!this._draft.endStatus,type:r,forwardText:!!this._draft.forwardText,answerType:o,voiceCommands:String(this._draft.voiceCommands??""),nextDirectControl:s,voiceResponseArray:l,nextAction:d}}}_refreshUuid(){this._updateDraft("uuidDialog",yt()),this._render()}_addVoiceResponseItem(){let t=Array.isArray(this._draft.responseItems)?this._draft.responseItems:[],n=Wu();this._draft={...this._draft,responseItems:[...t,n]},this._openResponseItemIds.add(n.id),this._render()}_removeVoiceResponseItem(t){let n=(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).filter(r=>r.id!==t);this._draft={...this._draft,responseItems:n},this._openResponseItemIds=new Set([...this._openResponseItemIds].filter(r=>this._draft.responseItems.some(i=>i.id===r))),this._render()}_updateVoiceResponseItem(t,n,r){let i=(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).map(o=>o.id!==t?o:{...o,[n]:r});this._draft={...this._draft,responseItems:i}}_toggleResponseItem(t){this._openResponseItemIds.has(t)?this._openResponseItemIds.delete(t):this._openResponseItemIds.add(t),this._render()}_addDirectControlItem(){let t=Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[],n=qu();this._draft={...this._draft,directControlItems:[...t,n]},this._openDirectControlItemIds.add(n.id),this._render()}_removeDirectControlItem(t){let n=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).filter(r=>r.id!==t);this._draft={...this._draft,directControlItems:n},this._openDirectControlItemIds=new Set([...this._openDirectControlItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_updateDirectControlItem(t,n){let r=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map(i=>i.id===t?{...i,uuid:n}:i);this._draft={...this._draft,directControlItems:r}}_toggleDirectControlItem(t){this._openDirectControlItemIds.has(t)?this._openDirectControlItemIds.delete(t):this._openDirectControlItemIds.add(t),this._render()}_addNextActionItem(){let t=Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[],n=Qu();this._draft={...this._draft,nextActionItems:[...t,n]},this._openNextActionItemIds.add(n.id),this._render()}_removeNextActionItem(t){let n=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).filter(r=>r.id!==t);this._draft={...this._draft,nextActionItems:n},this._openNextActionItemIds=new Set([...this._openNextActionItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_updateNextActionItem(t,n,r){let i=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);this._draft={...this._draft,nextActionItems:i}}_toggleNextActionItem(t){this._openNextActionItemIds.has(t)?this._openNextActionItemIds.delete(t):this._openNextActionItemIds.add(t),this._render()}_setDirectSubtab(t){this._directSubtab=t,this._directError="",this._render()}_reloadDirectCommands(){this._directLoading=!0,this._directError="",this._render(),window.setTimeout(()=>{this._directLoading=!1,this._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${this._directCommands.length}.`,this._render()},200)}_openCreateDirectModal(){this._directModalOpen=!0,this._directModalMode="create",this._directEditingId="",this._directDraft=this._newDirectDraft(),this._openDirectSubControlItemIds=new Set,this._directError="",this._render()}_openEditDirectModal(t){let n=this._directCommands.find(r=>String(r._id??"")===String(t??""));if(!n){this._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",this._render();return}this._directModalOpen=!0,this._directModalMode="edit",this._directEditingId=String(n._id??""),this._directDraft=this._newDirectDraft(n),this._openDirectSubControlItemIds=new Set,this._directError="",this._render()}_closeDirectModal(){this._directModalSaving||(this._directModalOpen=!1,this._directModalMode="create",this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft(),this._render())}_updateDirectDraft(t,n){this._directDraft={...this._directDraft,[t]:n}}_refreshDirectUuid(){this._updateDirectDraft("uuidDirect",yt()),this._render()}_addDirectSubControlItem(){let t=Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[],n=Li();this._directDraft={...this._directDraft,subDirectControlItems:[...t,n]},this._openDirectSubControlItemIds.add(n.id),this._render()}_removeDirectSubControlItem(t){let n=(Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[]).filter(r=>r.id!==t);this._directDraft={...this._directDraft,subDirectControlItems:n},this._openDirectSubControlItemIds=new Set([...this._openDirectSubControlItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_toggleDirectSubControlItem(t){this._openDirectSubControlItemIds.has(t)?this._openDirectSubControlItemIds.delete(t):this._openDirectSubControlItemIds.add(t),this._render()}_updateDirectSubControlItem(t,n,r){let i=(Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);this._directDraft={...this._directDraft,subDirectControlItems:i}}_buildDirectPayload(){let t=String(this._directDraft.title??"").trim(),n=String(this._directDraft.uuidDirect??"").trim(),r=String(this._directDraft.type??"").trim(),i=nl.includes(String(this._directDraft.typeData??"all"))?String(this._directDraft.typeData??"all"):"all",o=!!this._directDraft.manual;if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuidDirect - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("type - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let a={title:t,uuidDirect:n,directControl:{type:r,typeData:i}};if(i==="command"){let l=String(this._directDraft.voiceCommands??"").trim();a.directControl.voiceCommands=l||null,a.directControl.manual=o,o?a.directControl.subDirectControl=(Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[]).map((s,d)=>{let f=String(s.subType??"").trim(),m=String(s.subVoiceCommands??"").trim();return{id:Number(s.id)||d+1,subType:f||null,title:null,subVoiceCommands:m||null}}).filter(s=>s.subType||s.subVoiceCommands):a.directControl.subDirectControlArray=String(this._directDraft.subDirectControlArray??"").trim()}return a}async _saveDirectModal(){if(!this._apiUrl("")){this._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let n;try{n=this._buildDirectPayload()}catch(r){this._directError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",this._render();return}this._directModalSaving=!0,this._directError="",this._render();try{let r=this._directModalMode==="edit"&&this._directEditingId,i="/api/cms/direct_commands",o=r?this._apiUrl(`${i}/${encodeURIComponent(this._directEditingId)}`):this._apiUrl(i),l=await fetch(o,{method:r?"PATCH":"POST",headers:this._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);let s=null;try{s=await l.json()}catch{s=null}if(r)this._directCommands=this._directCommands.map(d=>String(d._id??"")===String(this._directEditingId)?{...d,...s&&typeof s=="object"?s:n,_id:this._directEditingId}:d);else{let d=String(s?._id??yt());this._directCommands=[{...s&&typeof s=="object"?s:n,_id:d},...this._directCommands]}this._status=r?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",this._directModalOpen=!1,this._directModalMode="create",this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft()}finally{this._directModalSaving=!1,this._render()}}_reloadTemplateCommands(){this._templateLoading=!0,this._templateError="",this._render(),window.setTimeout(()=>{this._templateLoading=!1,this._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${this._templateCommands.length}.`,this._render()},200)}_openCreateTemplateModal(){this._templateModalOpen=!0,this._templateModalMode="create",this._templateEditingId="",this._templateDraft=this._newTemplateDraft(),this._openTemplateSubControlItemIds=new Set,this._templateError="",this._render()}_openEditTemplateModal(t){let n=this._templateCommands.find(r=>String(r._id??"")===String(t??""));if(!n){this._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",this._render();return}this._templateModalOpen=!0,this._templateModalMode="edit",this._templateEditingId=String(n._id??""),this._templateDraft=this._newTemplateDraft(n),this._openTemplateSubControlItemIds=new Set,this._templateError="",this._render()}_closeTemplateModal(){this._templateModalSaving||(this._templateModalOpen=!1,this._templateModalMode="create",this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft(),this._render())}_updateTemplateDraft(t,n){this._templateDraft={...this._templateDraft,[t]:n}}_addTemplateSubControlItem(){let t=Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[],n=Li();this._templateDraft={...this._templateDraft,subDirectControlItems:[...t,n]},this._openTemplateSubControlItemIds.add(n.id),this._render()}_removeTemplateSubControlItem(t){let n=(Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[]).filter(r=>r.id!==t);this._templateDraft={...this._templateDraft,subDirectControlItems:n},this._openTemplateSubControlItemIds=new Set([...this._openTemplateSubControlItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_toggleTemplateSubControlItem(t){this._openTemplateSubControlItemIds.has(t)?this._openTemplateSubControlItemIds.delete(t):this._openTemplateSubControlItemIds.add(t),this._render()}_updateTemplateSubControlItem(t,n,r){let i=(Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);this._templateDraft={...this._templateDraft,subDirectControlItems:i}}_buildTemplatePayload(){let t=String(this._templateDraft.title??"").trim();if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title:t,subDirectControl:(Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[]).map((n,r)=>{let i=String(n.subType??"").trim(),o=String(n.subVoiceCommands??"").trim();return{id:Number(n.id)||r+1,subType:i||null,title:null,subVoiceCommands:o||null}}).filter(n=>n.subType||n.subVoiceCommands)}}async _saveTemplateModal(){let t;try{t=this._buildTemplatePayload()}catch(n){this._templateError=n?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",this._render();return}this._templateModalSaving=!0,this._templateError="",this._render();try{let n=this._templateModalMode==="edit"&&this._templateEditingId;n?this._templateCommands=this._templateCommands.map(r=>String(r._id??"")===String(this._templateEditingId)?{...r,...t,_id:this._templateEditingId}:r):this._templateCommands=[{...t,_id:yt()},...this._templateCommands],this._status=n?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",this._templateModalOpen=!1,this._templateModalMode="create",this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft()}finally{this._templateModalSaving=!1,this._render()}}_reloadDefaultsCommands(){let t=this._apiUrl(rl);if(!t){this._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._defaultsLoading=!0,this._defaultsError="",this._render(),fetch(t,{method:"GET",headers:this._apiHeaders(!1)}).then(async n=>{if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r?.data)?r.data:Array.isArray(r)?r:[],o=this._newDefaultsState();i.forEach(a=>{let l=String(a?.type??"").trim();!l||!o[l]||(o[l]=this._newDefaultsDraft(l,a))}),this._defaultsByType=o,this._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}).catch(n=>{this._defaultsError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}).finally(()=>{this._defaultsLoading=!1,this._render()})}_openDefaultsModal(t){let n=this._defaultConfig(t);if(!n.hasModal){this._saveDefaultsType(n.type,!1);return}this._defaultsActiveType=n.type,this._defaultsActiveId=String(this._defaultsByType[n.type]?._id??""),this._defaultsModalOpen=!0,this._defaultsError="",this._render()}_closeDefaultsModal(){this._defaultsModalSaving||(this._defaultsModalOpen=!1,this._render())}_updateDefaultsDraft(t,n){let r=this._defaultsActiveType,i=this._defaultsByType[r]??this._newDefaultsDraft(r);this._defaultsByType={...this._defaultsByType,[r]:{...i,[t]:n}}}_buildDefaultsPayload(){let t=this._defaultsActiveType,n=this._defaultConfig(t),r=this._defaultsByType[t]??this._newDefaultsDraft(t),i={type:t,title:n.title,endStatus:!!r.endStatus,message:String(r.message??"").trim()||null};return n.supportsLlm&&(i.llm=!!r.llmEnabled,i.system=i.llm&&String(r.system??"").trim()||null,i.model=i.llm&&String(r.model??"").trim()||null),i}async _saveDefaultsType(t,n=!1){let r=this._defaultConfig(t);if(this._defaultsActiveType=r.type,this._defaultsActiveId=String(this._defaultsByType[r.type]?._id??""),!this._apiUrl("")){this._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let o;try{o=this._buildDefaultsPayload()}catch(a){this._defaultsError=a?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",this._render();return}this._defaultsModalSaving=n,this._defaultsLoading=!n,this._defaultsError="",this._render();try{let a=!!this._defaultsActiveId,l=a?this._apiUrl(`${rl}/${encodeURIComponent(this._defaultsActiveId)}`):this._apiUrl(rl),d=await fetch(l,{method:a?"PATCH":"POST",headers:this._apiHeaders(!0),body:JSON.stringify(o)});if(!d.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${d.status}`);let f=null;try{f=await d.json()}catch{f=null}let m=this._defaultsActiveType,h=this._defaultsByType[m]??this._newDefaultsDraft(m),v=String(f?._id??h._id??this._defaultsActiveId??"");this._defaultsByType={...this._defaultsByType,[m]:{...h,...o,_id:v,llmEnabled:o.llm??h.llmEnabled}},this._defaultsActiveId=v,this._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.",n&&(this._defaultsModalOpen=!1)}catch(a){this._defaultsError=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{this._defaultsModalSaving=!1,this._defaultsLoading=!1,this._render()}}async _saveDefaultsModal(){await this._saveDefaultsType(this._defaultsActiveType,!0)}async _saveModal(){if(!this._apiUrl("")){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let n;try{n=this._buildPayload()}catch(a){this._error=a?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",this._render();return}let r=this._modalMode==="edit"&&this._editingId,i=r?this._apiUrl(`/api/cms/commands/${encodeURIComponent(this._editingId)}`):this._apiUrl("/api/cms/commands"),o=r?"PATCH":"POST";this._modalSaving=!0,this._error="",this._render();try{let a=await fetch(i,{method:o,headers:this._apiHeaders(!0),body:JSON.stringify(n)});if(!a.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${a.status}`);this._status=r?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",this._modalOpen=!1,this._modalMode="create",this._editingId="",this._draft=this._newDraft(),await this._loadPage(this._page||1)}catch(a){this._error=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",this._render()}finally{this._modalSaving=!1,this._render()}}_renderCommandsTab(){let n=this._tab===U.secondary?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",r="/api/cms/commands?page=1&pageSize=20",i=Math.max(1,Math.ceil((this._total||1)/Ai)),o=this._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':this._commands.length?this._commands.map(a=>`
            <button type="button" class="command-item" data-action="edit" data-command-id="${y(a._id)}">
              <span class="command-item-title">${y(a.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${y(a.componentDialog?.type||"type: -")}</span>
                <span>${y(a.uuidDialog||"uuid: -")}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">\u041A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h2>${n}</h2>
        <p>\u0417\u0430\u043F\u0440\u043E\u0441: <code>${r}</code></p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload" ${this._loading?"disabled":""}>${this._loading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
          <button type="button" class="primary" data-action="create">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
        </div>
      </section>
      <section class="help-card command-list">
        ${o}
        <div class="command-pagination">
          <button type="button" class="ghost" data-action="prev" ${this._page<=1||this._loading?"disabled":""}>\u041D\u0430\u0437\u0430\u0434</button>
          <span>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${this._page} \u0438\u0437 ${i}</span>
          <button type="button" class="ghost" data-action="next" ${this._page>=i||this._loading?"disabled":""}>\u0412\u043F\u0435\u0440\u0435\u0434</button>
        </div>
      </section>
    `}_renderDirectCommandsTab(){let t=this._directLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434...</div>':this._directCommands.length?this._directCommands.map(r=>`
            <button type="button" class="command-item" data-action="edit-direct" data-direct-id="${y(r._id)}">
              <span class="command-item-title">${y(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${y(r.directControl?.type||"type: -")}</span>
                <span>${y(r.uuidDirect||"uuidDirect: -")}</span>
                <span>${y(r.directControl?.typeData||"typeData: -")}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">Direct-\u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>',n=this._templateLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432...</div>':this._templateCommands.length?this._templateCommands.map(r=>`
            <button type="button" class="command-item" data-action="edit-template" data-template-id="${y(r._id)}">
              <span class="command-item-title">${y(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>subDirectControl: ${Array.isArray(r.subDirectControl)?r.subDirectControl.length:0}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">\u0428\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h2>\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</h2>
        <div class="inner-subtabs">
          <button type="button" class="subtab-button ${this._directSubtab===fn.basic?"active":""}" data-direct-subtab="${fn.basic}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</button>
          <button type="button" class="subtab-button ${this._directSubtab===fn.templates?"active":""}" data-direct-subtab="${fn.templates}">\u0428\u0430\u0431\u043B\u043E\u043D\u044B</button>
        </div>
      </section>
      ${this._directSubtab===fn.basic?`
        <section class="hero-card">
          <h3>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</h3>
          <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438.</p>
          <div class="toolbar">
            <button type="button" class="secondary" data-action="reload-direct" ${this._directLoading?"disabled":""}>${this._directLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
            <button type="button" class="primary" data-action="create-direct">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
          </div>
          ${this._directError?`<div class="status error">${y(this._directError)}</div>`:""}
        </section>
        <section class="help-card command-list">
          ${t}
        </section>
      `:`
        <section class="hero-card">
          <h3>\u0428\u0430\u0431\u043B\u043E\u043D\u044B</h3>
          <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430\u043C\u0438 subDirectControl.</p>
          <div class="toolbar">
            <button type="button" class="secondary" data-action="reload-template" ${this._templateLoading?"disabled":""}>${this._templateLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
            <button type="button" class="primary" data-action="create-template">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
          </div>
          ${this._templateError?`<div class="status error">${y(this._templateError)}</div>`:""}
        </section>
        <section class="help-card command-list">
          ${n}
        </section>
      `}
    `}_renderStub(t,n){return`
      <section class="hero-card">
        <h2>${y(t)}</h2>
        <p>${y(n)}</p>
      </section>
      <section class="help-card">
        <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
      </section>
    `}_renderDirectModal(){if(!this._directModalOpen)return"";let t=this._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",n=this._directDraft.typeData==="command",r=Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[];return`
      <div class="modal-backdrop" data-action="close-direct"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${y(t)}">
        <div class="modal-header">
          <h3>${y(t)}</h3>
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label>
            <span>title</span>
            <input data-direct-field="title" value="${y(this._directDraft.title)}" />
          </label>
          <label>
            <span>uuidDirect</span>
            <div class="field-inline field-inline-icon">
              <input data-direct-field="uuidDirect" value="${y(this._directDraft.uuidDirect)}" />
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-direct-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDirect"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDirect"
                ${this._directModalSaving?"disabled":""}
              >\u21BB</button>
            </div>
          </label>
          <label>
            <span>directControl.type</span>
            <input data-direct-field="type" value="${y(this._directDraft.type)}" />
          </label>
          <label>
            <span>directControl.typeData</span>
            <select data-direct-field="typeData">
              ${nl.map(i=>`
                <option value="${i}" ${this._directDraft.typeData===i?"selected":""}>${i}</option>
              `).join("")}
            </select>
          </label>
          ${n?`
            <label class="field-span-2">
              <span>voiceCommands</span>
              <textarea rows="3" data-direct-field="voiceCommands">${y(this._directDraft.voiceCommands)}</textarea>
            </label>
            <label class="field-span-2">
              <span>manual</span>
              <div class="switch-control">
                <input type="checkbox" data-direct-field="manual" ${this._directDraft.manual?"checked":""} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${this._directDraft.manual?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
              </div>
            </label>
            ${this._directDraft.manual?`
              <section class="field-span-2 array-builder">
                <div class="array-builder-header">
                  <span>subDirectControl</span>
                  <button type="button" class="secondary compact-button" data-action="add-direct-sub-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>
                </div>
                <div class="array-builder-list">
                  ${r.map((i,o)=>{let a=this._openDirectSubControlItemIds.has(i.id);return`
                      <section class="response-item-card ${a?"open":""}">
                        <button
                          type="button"
                          class="response-item-toggle"
                          data-action="toggle-direct-sub-control-item"
                          data-direct-sub-control-item-id="${y(i.id)}"
                        >
                          <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}</span>
                          <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                        </button>
                        ${a?`
                          <div class="response-item-grid">
                            <label>
                              <span>subType</span>
                              <input
                                data-direct-sub-control-item-id="${y(i.id)}"
                                data-direct-sub-control-item-field="subType"
                                value="${y(i.subType)}"
                              />
                            </label>
                            <label>
                              <span>subVoiceCommands</span>
                              <textarea
                                rows="3"
                                data-direct-sub-control-item-id="${y(i.id)}"
                                data-direct-sub-control-item-field="subVoiceCommands"
                              >${y(i.subVoiceCommands)}</textarea>
                            </label>
                            <div class="response-item-actions">
                              <button
                                type="button"
                                class="ghost compact-delete-button"
                                data-action="remove-direct-sub-control-item"
                                data-direct-sub-control-item-id="${y(i.id)}"
                              >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                            </div>
                          </div>
                        `:""}
                      </section>
                    `}).join("")}
                  ${r.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
                </div>
              </section>
            `:`
              <label class="field-span-2">
                <span>subDirectControlArray</span>
                <select data-direct-field="subDirectControlArray">
                  <option value="" ${this._directDraft.subDirectControlArray?"":"selected"}>\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E (\u0434\u043E\u0431\u0430\u0432\u0438\u043C \u043F\u043E\u0437\u0436\u0435)</option>
                </select>
              </label>
            `}
          `:""}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          <button type="button" class="primary" data-action="save-direct" ${this._directModalSaving?"disabled":""}>${this._directModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderTemplateModal(){if(!this._templateModalOpen)return"";let t=this._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",n=Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[];return`
      <div class="modal-backdrop" data-action="close-template"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${y(t)}">
        <div class="modal-header">
          <h3>${y(t)}</h3>
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label class="field-span-2">
            <span>title</span>
            <input data-template-field="title" value="${y(this._templateDraft.title)}" />
          </label>
          <section class="field-span-2 array-builder">
            <div class="array-builder-header">
              <span>subDirectControl</span>
              <button type="button" class="secondary compact-button" data-action="add-template-sub-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>
            </div>
            <div class="array-builder-list">
              ${n.map((r,i)=>{let o=this._openTemplateSubControlItemIds.has(r.id);return`
                  <section class="response-item-card ${o?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-template-sub-control-item"
                      data-template-sub-control-item-id="${y(r.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${i+1}</span>
                      <span class="response-accordion-icon">${o?"\u2212":"+"}</span>
                    </button>
                    ${o?`
                      <div class="response-item-grid">
                        <label>
                          <span>subType</span>
                          <input
                            data-template-sub-control-item-id="${y(r.id)}"
                            data-template-sub-control-item-field="subType"
                            value="${y(r.subType)}"
                          />
                        </label>
                        <label>
                          <span>subVoiceCommands</span>
                          <textarea
                            rows="3"
                            data-template-sub-control-item-id="${y(r.id)}"
                            data-template-sub-control-item-field="subVoiceCommands"
                          >${y(r.subVoiceCommands)}</textarea>
                        </label>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-template-sub-control-item"
                            data-template-sub-control-item-id="${y(r.id)}"
                          >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                        </div>
                      </div>
                    `:""}
                  </section>
                `}).join("")}
              ${n.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          <button type="button" class="primary" data-action="save-template" ${this._templateModalSaving?"disabled":""}>${this._templateModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderDefaultsTab(){let t=ar.map((n,r)=>{let i=this._defaultsByType[n.type]??this._newDefaultsDraft(n.type),o=[`type: ${n.type}`,`endStatus: ${i.endStatus?"on":"off"}`];return n.supportsLlm&&o.push(`LLM: ${i.llmEnabled?"on":"off"}`),`
        <button type="button" class="command-item" data-action="open-defaults-item" data-default-type="${y(n.type)}" ${this._defaultsLoading?"disabled":""}>
          <span class="command-item-title">${r+1}. ${y(n.title)}</span>
          <span class="command-item-meta">
            ${o.map(a=>`<span>${y(a)}</span>`).join("")}
          </span>
        </button>
      `}).join("");return`
      <section class="hero-card">
        <h2>\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</h2>
        <p>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438, \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload-defaults" ${this._defaultsLoading?"disabled":""}>${this._defaultsLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        </div>
        ${this._defaultsError?`<div class="status error">${y(this._defaultsError)}</div>`:""}
      </section>
      <section class="help-card command-list">
        ${t}
      </section>
    `}_renderDefaultsModal(){if(!this._defaultsModalOpen)return"";let t=this._defaultsActiveType,n=this._defaultConfig(t),r=this._defaultsByType[t]??this._newDefaultsDraft(t);return`
      <div class="modal-backdrop" data-action="close-defaults"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${y(n.title)}">
        <div class="modal-header">
          <h3>${y(n.title)}</h3>
          <button type="button" class="ghost" data-action="close-defaults" ${this._defaultsModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label class="field-span-2">
            <span>title</span>
            <input data-defaults-field="title" value="${y(n.title)}" disabled />
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
            <input data-defaults-field="message" value="${y(r.message)}" />
          </label>
          ${n.supportsLlm&&r.llmEnabled?`
            <label class="field-span-2">
              <span>system</span>
              <textarea rows="6" data-defaults-field="system">${y(r.system)}</textarea>
            </label>
            <label class="field-span-2">
              <span>model</span>
              <input data-defaults-field="model" value="${y(r.model)}" />
            </label>
          `:""}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-defaults" ${this._defaultsModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          <button type="button" class="primary" data-action="save-defaults" ${this._defaultsModalSaving?"disabled":""}>${this._defaultsModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderModal(){if(!this._modalOpen)return"";let t=this._modalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
      <div class="modal-backdrop" data-action="close"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${y(t)}">
        <div class="modal-header">
          <h3>${y(t)}</h3>
          <button type="button" class="ghost" data-action="close" ${this._modalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label><span>Title</span><input data-field="title" value="${y(this._draft.title)}" /></label>
          <label>
            <span>uuidDialog</span>
            <div class="field-inline field-inline-icon">
              <input data-field="uuidDialog" value="${y(this._draft.uuidDialog)}" />
              <button
                type="button"
                class="ghost inline-icon-button"
                data-action="generate-uuid"
                aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDialog"
                title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDialog"
                ${this._modalSaving?"disabled":""}
              >\u21BB</button>
            </div>
          </label>
          <label><span>type</span><input data-field="type" value="${y(this._draft.type)}" /></label>
          <label>
            <span>answerType</span>
            <select data-field="answerType">
              <option value="default" ${this._draft.answerType==="default"?"selected":""}>default</option>
              <option value="redis" ${this._draft.answerType==="redis"?"selected":""}>redis</option>
            </select>
          </label>
          <div class="response-inline-row field-span-2">
            <label>
              <span>endStatus</span>
              <div class="switch-control">
                <input type="checkbox" data-field="endStatus" ${this._draft.endStatus?"checked":""} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${this._draft.endStatus?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
              </div>
            </label>
            <label>
              <span>forwardText</span>
              <div class="switch-control">
                <input type="checkbox" data-field="forwardText" ${this._draft.forwardText?"checked":""} />
                <span class="switch-slider" aria-hidden="true"></span>
                <span class="switch-label">${this._draft.forwardText?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
              </div>
            </label>
          </div>
          <label class="field-span-2">
            <span>voiceCommands (string)</span>
            <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${y(this._draft.voiceCommands)}</textarea>
          </label>
          <section class="field-span-2 response-accordion open">
            <div class="response-accordion-head-static">
              <span class="response-accordion-title">voiceResponseArray</span>
            </div>
            <div class="response-accordion-body">
              <div class="response-items">
                ${(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).map((n,r)=>{let i=this._openResponseItemIds.has(n.id);return`
                    <section class="response-item-card ${i?"open":""}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-response-item"
                        data-response-item-id="${y(n.id)}"
                      >
                        <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${r+1}</span>
                        <span class="response-accordion-icon">${i?"\u2212":"+"}</span>
                      </button>
                      ${i?`
                        <div class="response-item-grid">
                          <div class="response-inline-row">
                            <label>
                              <span>type</span>
                              <input
                                data-response-item-id="${y(n.id)}"
                                data-response-item-field="type"
                                value="${y(n.type)}"
                                placeholder="default"
                              />
                            </label>
                            <label>
                              <span>LLM</span>
                              <div class="switch-control">
                                <input
                                  type="checkbox"
                                  data-response-item-id="${y(n.id)}"
                                  data-response-item-field="llmEnabled"
                                  ${n.llmEnabled?"checked":""}
                                />
                                <span class="switch-slider" aria-hidden="true"></span>
                                <span class="switch-label">${n.llmEnabled?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
                              </div>
                            </label>
                          </div>
                          <label>
                            <span>voiceResponse</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${y(n.id)}"
                              data-response-item-field="voiceResponse"
                            >${y(n.voiceResponse)}</textarea>
                          </label>
                          ${n.llmEnabled?`
                            <label>
                              <span>system</span>
                              <textarea
                                rows="3"
                                data-response-item-id="${y(n.id)}"
                                data-response-item-field="system"
                              >${y(n.system)}</textarea>
                            </label>
                            <label>
                              <span>model</span>
                              <input
                                data-response-item-id="${y(n.id)}"
                                data-response-item-field="model"
                                value="${y(n.model)}"
                              />
                            </label>
                          `:""}
                          ${(this._draft.responseItems?.length||0)>1?`
                            <div class="response-item-actions">
                              <button
                                type="button"
                                class="ghost compact-delete-button"
                                data-action="remove-voice-response-item"
                                data-response-item-id="${y(n.id)}"
                              >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                            </div>
                          `:""}
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
              <span>nextDirectControl</span>
              <button type="button" class="secondary compact-button" data-action="add-direct-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
            </div>
            <div class="array-builder-list">
              ${(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map((n,r)=>{let i=this._openDirectControlItemIds.has(n.id);return`
                  <section class="response-item-card ${i?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-direct-control-item"
                      data-direct-control-item-id="${y(n.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${r+1}</span>
                      <span class="response-accordion-icon">${i?"\u2212":"+"}</span>
                    </button>
                    ${i?`
                      <div class="response-item-grid">
                        <label>
                          <span>uuid</span>
                          <input
                            data-direct-control-item-id="${y(n.id)}"
                            value="${y(n.uuid)}"
                            placeholder="uuid"
                          />
                        </label>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-direct-control-item"
                            data-direct-control-item-id="${y(n.id)}"
                          >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                        </div>
                      </div>
                    `:""}
                  </section>
                `}).join("")}
              ${(this._draft.directControlItems?.length||0)===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
            </div>
          </section>
          <section class="field-span-2 array-builder">
            <div class="array-builder-header">
              <span>nextAction</span>
              <button type="button" class="secondary compact-button" data-action="add-next-action-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
            </div>
            <div class="array-builder-list">
              ${(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map((n,r)=>{let i=this._openNextActionItemIds.has(n.id);return`
                  <section class="response-item-card ${i?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-next-action-item"
                      data-next-action-item-id="${y(n.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${r+1}</span>
                      <span class="response-accordion-icon">${i?"\u2212":"+"}</span>
                    </button>
                    ${i?`
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>typeComponent</span>
                            <select data-next-action-item-id="${y(n.id)}" data-next-action-item-field="typeComponent">
                              ${Hu.map(o=>`
                                <option value="${o}" ${n.typeComponent===o?"selected":""}>${o}</option>
                              `).join("")}
                            </select>
                          </label>
                          <label>
                            <span>uuid</span>
                            <input
                              data-next-action-item-id="${y(n.id)}"
                              data-next-action-item-field="uuid"
                              value="${y(n.uuid)}"
                              placeholder="uuid"
                            />
                          </label>
                        </div>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-next-action-item"
                            data-next-action-item-id="${y(n.id)}"
                          >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
                        </div>
                      </div>
                    `:""}
                  </section>
                `}).join("")}
              ${(this._draft.nextActionItems?.length||0)===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close" ${this._modalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          <button type="button" class="primary" data-action="save" ${this._modalSaving?"disabled":""}>${this._modalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_bind(){let t=this.shadowRoot;this._bindController&&this._bindController.abort(),this._bindController=new AbortController;let{signal:n}=this._bindController,r=(i,o,a)=>{i?.addEventListener(o,a,{signal:n})};t.querySelectorAll("[data-tab]").forEach(i=>{r(i,"click",()=>this._setTab(i.dataset.tab))}),r(t.querySelector('[data-action="reload"]'),"click",()=>this._loadPage(this._page||1)),r(t.querySelector('[data-action="create"]'),"click",()=>this._openCreateModal()),r(t.querySelector('[data-action="prev"]'),"click",()=>this._loadPage(this._page-1)),r(t.querySelector('[data-action="next"]'),"click",()=>this._loadPage(this._page+1)),r(t.querySelector('[data-action="reload-direct"]'),"click",()=>this._reloadDirectCommands()),r(t.querySelector('[data-action="create-direct"]'),"click",()=>this._openCreateDirectModal()),r(t.querySelector('[data-action="reload-template"]'),"click",()=>this._reloadTemplateCommands()),r(t.querySelector('[data-action="create-template"]'),"click",()=>this._openCreateTemplateModal()),r(t.querySelector('[data-action="reload-defaults"]'),"click",()=>this._reloadDefaultsCommands()),t.querySelectorAll('[data-action="open-defaults-item"]').forEach(i=>{r(i,"click",()=>this._openDefaultsModal(i.dataset.defaultType))}),t.querySelectorAll('[data-action="edit"]').forEach(i=>{r(i,"click",()=>this._openEditModal(i.dataset.commandId))}),t.querySelectorAll('[data-action="edit-direct"]').forEach(i=>{r(i,"click",()=>this._openEditDirectModal(i.dataset.directId))}),t.querySelectorAll('[data-action="edit-template"]').forEach(i=>{r(i,"click",()=>this._openEditTemplateModal(i.dataset.templateId))}),t.querySelectorAll("[data-direct-subtab]").forEach(i=>{r(i,"click",()=>this._setDirectSubtab(i.dataset.directSubtab))}),t.querySelectorAll('[data-action="close"]').forEach(i=>{r(i,"click",()=>this._closeModal())}),t.querySelectorAll('[data-action="close-direct"]').forEach(i=>{r(i,"click",()=>this._closeDirectModal())}),t.querySelectorAll('[data-action="close-template"]').forEach(i=>{r(i,"click",()=>this._closeTemplateModal())}),t.querySelectorAll('[data-action="close-defaults"]').forEach(i=>{r(i,"click",()=>this._closeDefaultsModal())}),r(t.querySelector('[data-action="save"]'),"click",()=>this._saveModal()),r(t.querySelector('[data-action="save-direct"]'),"click",()=>this._saveDirectModal()),r(t.querySelector('[data-action="save-template"]'),"click",()=>this._saveTemplateModal()),r(t.querySelector('[data-action="save-defaults"]'),"click",()=>this._saveDefaultsModal()),r(t.querySelector('[data-action="generate-uuid"]'),"click",()=>this._refreshUuid()),r(t.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>this._refreshDirectUuid()),r(t.querySelector('[data-action="add-voice-response-item"]'),"click",()=>this._addVoiceResponseItem()),r(t.querySelector('[data-action="add-direct-control-item"]'),"click",()=>this._addDirectControlItem()),r(t.querySelector('[data-action="add-next-action-item"]'),"click",()=>this._addNextActionItem()),r(t.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>this._addDirectSubControlItem()),r(t.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>this._addTemplateSubControlItem()),t.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(i=>{r(i,"click",()=>this._removeVoiceResponseItem(i.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(i=>{r(i,"click",()=>this._removeDirectControlItem(i.dataset.directControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(i=>{r(i,"click",()=>this._toggleDirectControlItem(i.dataset.directControlItemId))}),t.querySelectorAll('[data-action="remove-next-action-item"]').forEach(i=>{r(i,"click",()=>this._removeNextActionItem(i.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(i=>{r(i,"click",()=>this._toggleNextActionItem(i.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-response-item"]').forEach(i=>{r(i,"click",()=>this._toggleResponseItem(i.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(i=>{r(i,"click",()=>this._removeDirectSubControlItem(i.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(i=>{r(i,"click",()=>this._toggleDirectSubControlItem(i.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(i=>{r(i,"click",()=>this._removeTemplateSubControlItem(i.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(i=>{r(i,"click",()=>this._toggleTemplateSubControlItem(i.dataset.templateSubControlItemId))}),t.querySelectorAll("[data-field]").forEach(i=>{let o=i.dataset.field,a=l=>{let s=i.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;this._updateDraft(o,s)};r(i,"input",a),(i.type==="checkbox"||i.tagName==="SELECT")&&r(i,"change",a)}),t.querySelectorAll("[data-direct-field]").forEach(i=>{let o=i.dataset.directField,a=l=>{let s=i.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;this._updateDirectDraft(o,s),o==="typeData"&&l.currentTarget.value!=="command"&&(this._updateDirectDraft("manual",!1),this._updateDirectDraft("voiceCommands","")),(i.type==="checkbox"||i.tagName==="SELECT")&&this._render()};r(i,"input",a),(i.type==="checkbox"||i.tagName==="SELECT")&&r(i,"change",a)}),t.querySelectorAll("[data-template-field]").forEach(i=>{let o=i.dataset.templateField,a=l=>this._updateTemplateDraft(o,l.currentTarget.value);r(i,"input",a),r(i,"change",a)}),t.querySelectorAll("[data-defaults-field]").forEach(i=>{let o=i.dataset.defaultsField,a=l=>{let s=i.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;this._updateDefaultsDraft(o,s);let d=this._defaultConfig(this._defaultsActiveType);o==="llmEnabled"&&i.type==="checkbox"&&d.supportsLlm&&this._render()};r(i,"input",a),(i.type==="checkbox"||i.tagName==="SELECT")&&r(i,"change",a)}),t.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(i=>{let o=i.dataset.responseItemId,a=i.dataset.responseItemField,l=s=>{let d=i.type==="checkbox"?s.currentTarget.checked:s.currentTarget.value;this._updateVoiceResponseItem(o,a,d),i.type==="checkbox"&&this._render()};r(i,"input",l),i.type==="checkbox"&&r(i,"change",l)}),t.querySelectorAll("[data-direct-control-item-id]").forEach(i=>{let o=i.dataset.directControlItemId;r(i,"input",a=>this._updateDirectControlItem(o,a.currentTarget.value)),r(i,"change",a=>this._updateDirectControlItem(o,a.currentTarget.value))}),t.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(i=>{let o=i.dataset.nextActionItemId,a=i.dataset.nextActionItemField,l=s=>this._updateNextActionItem(o,a,s.currentTarget.value);r(i,"input",l),r(i,"change",l)}),t.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(i=>{let o=i.dataset.directSubControlItemId,a=i.dataset.directSubControlItemField,l=s=>this._updateDirectSubControlItem(o,a,s.currentTarget.value);r(i,"input",l),r(i,"change",l)}),t.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(i=>{let o=i.dataset.templateSubControlItemId,a=i.dataset.templateSubControlItemField,l=s=>this._updateTemplateSubControlItem(o,a,s.currentTarget.value);r(i,"input",l),r(i,"change",l)}),t.querySelectorAll("input, select, button, textarea").forEach(i=>{["click","mousedown","mouseup","keydown","keyup","keypress","focusin"].forEach(o=>{r(i,o,a=>this._swallowUiEvent(a))})})}_render(){let t=this._tab===U.primary?this._renderCommandsTab():this._tab===U.secondary?this._renderCommandsTab():this._tab===U.direct?this._renderDirectCommandsTab():this._renderDefaultsTab(),n=`
      <style>
        :host {
          --ui-border: rgba(34, 45, 67, 0.14);
          --ui-text: #1b2432;
          --ui-muted: #5c667a;
          --ui-accent: #234f7d;
          --ui-accent-warm: #a64b2a;
          display: grid;
          gap: 12px;
          color: var(--ui-text);
        }
        * { box-sizing: border-box; min-width: 0; }
        .hero-card, .help-card {
          background: linear-gradient(175deg, rgba(255,255,255,.94), rgba(255,255,255,.86));
          border: 1px solid var(--ui-border);
          border-radius: 20px;
          box-shadow: 0 12px 28px rgba(31, 41, 55, 0.07);
          backdrop-filter: blur(6px);
        }
        .hero-card { padding: 24px; }
        h2,h3 { margin:0; }
        p { margin: 6px 0 0; color: var(--ui-muted); }
        .subtabs-dock {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          width: 100%;
          padding: 8px 0 2px;
          border-radius: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }
        .subtabs { display:flex; flex-wrap:wrap; gap:10px; width: 100%; }
        .inner-subtabs { margin-top: 14px; display:flex; flex-wrap:wrap; gap:10px; }
        .subtab-button {
          border: 1px solid var(--ui-border);
          border-radius: 999px;
          background: rgba(255,255,255,.86);
          color: var(--ui-muted);
          padding: 10px 16px;
          cursor: pointer;
          font-weight: 600;
          transition: transform .12s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
        }
        .subtab-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 7px 16px rgba(31,41,55,.12);
          background: rgba(255,255,255,.98);
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--ui-accent), #4c78a8);
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(35,79,125,.34);
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
          display:grid;
          gap:8px;
          width:100%;
          text-align:left;
          border:1px solid var(--ui-border);
          border-radius:14px;
          background:rgba(255,255,255,.84);
          color:var(--ui-text);
          padding:14px;
          transition: transform .12s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .command-item:hover {
          transform: translateY(-1px);
          border-color: rgba(35,79,125,.3);
          box-shadow: 0 9px 20px rgba(31,41,55,.1);
        }
        .command-item-title { font-size:16px; font-weight:700; }
        .command-item-meta { display:flex; flex-wrap:wrap; gap:8px; color:var(--ui-muted); font-size:13px; }
        .command-pagination { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:8px; }
        .empty {
          padding: 18px 6px;
          color: var(--ui-muted);
          text-align: center;
          border: 1px dashed rgba(34,45,67,.2);
          border-radius: 12px;
          background: rgba(255,255,255,.56);
        }
        label { display:grid; gap:8px; }
        label span { font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; color:var(--ui-accent); }
        input, select, textarea {
          width:100%;
          border:1px solid var(--ui-border);
          border-radius:14px;
          padding:12px 14px;
          font:inherit;
          background:rgba(255,255,255,.95);
          color:var(--ui-text);
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: rgba(35,79,125,.48);
          box-shadow: 0 0 0 3px rgba(35,79,125,.12);
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
          background: rgba(255,255,255,.72);
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
          background: rgba(255,255,255,.86);
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
          background: rgba(255,255,255,.72);
        }
        .array-builder-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
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
        .modal-backdrop { position:fixed; inset:0; background:rgba(15,23,42,.5); z-index:40; }
        .modal {
          position:fixed;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          width:min(860px,calc(100vw - 32px));
          max-height:calc(100vh - 40px);
          overflow:auto;
          padding:18px;
          border-radius:20px;
          border:1px solid var(--ui-border);
          background:rgba(255,255,255,.98);
          z-index:41;
          display:grid;
          gap:14px;
          box-shadow: 0 24px 60px rgba(15,23,42,.24);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal::-webkit-scrollbar { width: 0; height: 0; }
        .modal-header, .modal-footer { display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .modal-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
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
        @media (max-width: 900px) {
          .modal-grid { grid-template-columns:1fr; }
          .response-inline-row { grid-template-columns: 1fr; }
          .array-item-row-2 { grid-template-columns: 1fr; }
          .array-item-row { flex-direction: column; align-items: stretch; }
        }
        @media (max-width: 700px) {
          .modal { inset:0; transform:none; width:100vw; height:100vh; max-height:none; border-radius:0; border:none; padding:16px; }
        }
      </style>
      <section class="subtabs-dock">
        <div class="subtabs">
          <button type="button" class="subtab-button ${this._tab===U.primary?"active":""}" data-tab="${U.primary}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${this._tab===U.secondary?"active":""}" data-tab="${U.secondary}">\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${this._tab===U.direct?"active":""}" data-tab="${U.direct}">\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</button>
          <button type="button" class="subtab-button ${this._tab===U.defaults?"active":""}" data-tab="${U.defaults}">\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
        </div>
      </section>
      ${this._error?`<div class="status error">${y(this._error)}</div>`:""}
      ${this._status?`<div class="status ok">${y(this._status)}</div>`:""}
      ${t}
      ${this._renderModal()}
      ${this._renderDirectModal()}
      ${this._renderTemplateModal()}
      ${this._renderDefaultsModal()}
    `;this._mountReact(n),this._bind()}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",il);var Ef=({html:e})=>ul.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),al={base_url:"http://127.0.0.1:8000",client_id:"",timer_alarm_token:"",timer_alarm_device_ids:[""],timeout:10,scenarios:[]},Df=`{
  "children_type": "some_subcommand",
  "children_direct_type": [{"type": "some_direct_subcommand"}],
  "parent_type": "weather_metno",
  "value": {"commands": "\u043C\u043E\u0441\u043A\u0432\u0430"},
  "client_id": "...",
  "device_id": "..."
}`,If=2e3,Mi=20,ll={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},sl=new URL(import.meta.url).searchParams.get("v")||"",Ku=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),Tf=sl?Ku?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(sl)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(sl)}`:Ku?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js",S=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),$f=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Zu=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Pi=()=>({id:Zu(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),Af=()=>({id:$f(),name:"",script_entity_id:"",conditions:[Pi()]}),dl=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._reactRoot=null,this._hass=null,this._config={...al},this._logs=[],this._activeTab="scenarios",this._expandedScenarios=new Set,this._expandedConditions=new Set,this._loaded=!1,this._loading=!1,this._saving=!1,this._loadingLogs=!1,this._error="",this._status="",this._logsTimer=null,this._timerAlarmLoaded=!1,this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._deviceAccordionOpen=!0,this._createScenarioTab=ll.primary,this._commands=[],this._commandsPage=1,this._commandsTotal=0,this._commandsLoading=!1,this._commandsError="",this._commandsModalOpen=!1,this._commandsModalMode="create",this._commandsModalSaving=!1,this._commandsModalDraft=this._createCommandDraft(),this._commandsEditingId=""}set hass(t){let n=!this._hass;if(this._hass=t,!this._loaded&&!this._loading){this._loadConfig();return}(n||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Xu.createRoot)(this.shadowRoot)),(0,Gu.flushSync)(()=>{this._reactRoot.render(ul.default.createElement(Ef,{html:t}))})}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded)return this._timerAlarmLoadPromise||(this._timerAlarmLoading=!0,this._timerAlarmLoadPromise=import(Tf).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(t=>{this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})),this._timerAlarmLoadPromise}async _loadConfig(){this._loading=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...al,...t,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(t.timer_alarm_device_ids??[]),scenarios:Array.isArray(t.scenarios)?t.scenarios.map(n=>this._normalizeScenarioForUi(n)):[]},this._expandedScenarios=new Set,this._error=""}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(t.logs)?t.logs:[]}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},If)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("script.")).sort((t,n)=>{let r=t.attributes.friendly_name||t.entity_id,i=n.attributes.friendly_name||n.entity_id;return r.localeCompare(i,"ru")}):[]}_createCommandDraft(t=null){let n=t??{},r=typeof n.componentDialog=="object"&&n.componentDialog?n.componentDialog:{};return{_id:String(n._id??""),title:String(n.title??""),uuidDialog:String(n.uuidDialog??""),type:String(r.type??""),endStatus:!!r.endStatus,forwardText:!!r.forwardText,answerType:String(r.answerType??"default"),voiceCommands:r.voiceCommands==null?"":JSON.stringify(r.voiceCommands,null,2),nextDirectControl:JSON.stringify(Array.isArray(r.nextDirectControl)?r.nextDirectControl:[],null,2),voiceResponseArray:JSON.stringify(Array.isArray(r.voiceResponseArray)?r.voiceResponseArray:[],null,2),nextAction:JSON.stringify(Array.isArray(r.nextAction)?r.nextAction:[],null,2)}}_setCreateScenarioTab(t){if(this._createScenarioTab=t,this._commandsError="",t===ll.primary&&!this._commands.length&&!this._commandsLoading){this._loadCommandsPage(1);return}this._render()}_commandsApiUrl(t=this._commandsPage){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}/api/cms/commands?page=${encodeURIComponent(t)}&pageSize=${Mi}`:""}_commandsApiHeaders(t=!1){let n={};t&&(n["Content-Type"]="application/json");let r=String(this._config.timer_alarm_token??"").trim();return r&&(n.Authorization=r),n}async _loadCommandsPage(t=1){let n=Math.max(1,Number(t)||1),r=this._commandsApiUrl(n);if(!r){this._commandsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._commandsLoading=!1,this._render();return}this._commandsLoading=!0,this._commandsError="",this._render();try{let i=await fetch(r,{method:"GET",headers:this._commandsApiHeaders(!1)});if(!i.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${i.status}`);let o=await i.json(),a=Array.isArray(o.data)?o.data:[],l=Number(o.total??o.count??o.meta?.total??o.pagination?.total??0);this._commands=a,this._commandsPage=n,this._commandsTotal=Number.isFinite(l)&&l>0?l:n*Mi+(a.length===Mi?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${a.length}.`}catch(i){this._commandsError=i?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",this._commands=[]}finally{this._commandsLoading=!1,this._render()}}_openCreateCommandModal(){this._commandsModalOpen=!0,this._commandsModalMode="create",this._commandsEditingId="",this._commandsModalDraft=this._createCommandDraft(),this._commandsError="",this._render()}_openEditCommandModal(t){let n=this._commands.find(r=>String(r._id??"")===String(t??""));if(!n){this._commandsError="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.",this._render();return}this._commandsModalOpen=!0,this._commandsModalMode="edit",this._commandsEditingId=String(n._id??""),this._commandsModalDraft=this._createCommandDraft(n),this._commandsError="",this._render()}_closeCommandModal(){this._commandsModalSaving||(this._commandsModalOpen=!1,this._commandsModalMode="create",this._commandsEditingId="",this._commandsModalDraft=this._createCommandDraft(),this._render())}_updateCommandDraft(t,n){this._commandsModalDraft={...this._commandsModalDraft,[t]:n}}_toArrayField(t,n){let r=String(t??"").trim();if(!r)return[];let i;try{i=JSON.parse(r)}catch{throw new Error(`\u041F\u043E\u043B\u0435 ${n} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u043C JSON-\u043C\u0430\u0441\u0441\u0438\u0432\u043E\u043C.`)}if(!Array.isArray(i))throw new Error(`\u041F\u043E\u043B\u0435 ${n} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u043C.`);return i}_toNullableJson(t,n){let r=String(t??"").trim();if(!r)return null;try{return JSON.parse(r)}catch{throw new Error(`\u041F\u043E\u043B\u0435 ${n} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u043C JSON.`)}}_buildCommandPayloadFromDraft(){let t=this._commandsModalDraft,n=String(t.title??"").trim(),r=String(t.uuidDialog??"").trim(),i=String(t.type??"").trim();if(!n)throw new Error("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 title \u043A\u043E\u043C\u0430\u043D\u0434\u044B.");if(!r)throw new Error("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 uuidDialog.");if(!i)throw new Error("\u0423\u043A\u0430\u0436\u0438\u0442\u0435 componentDialog.type.");return{title:n,uuidDialog:r,componentDialog:{endStatus:!!t.endStatus,type:i,forwardText:!!t.forwardText,answerType:String(t.answerType??"default")||"default",voiceCommands:this._toNullableJson(t.voiceCommands,"voiceCommands"),nextDirectControl:this._toArrayField(t.nextDirectControl,"nextDirectControl"),voiceResponseArray:this._toArrayField(t.voiceResponseArray,"voiceResponseArray"),nextAction:this._toArrayField(t.nextAction,"nextAction")}}}async _saveCommandModal(){let t=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!t){this._commandsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let n;try{n=this._buildCommandPayloadFromDraft()}catch(a){this._commandsError=a?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0444\u043E\u0440\u043C\u044B.",this._render();return}let r=this._commandsModalMode==="edit"&&this._commandsEditingId,i=r?`${t}/api/cms/commands/${encodeURIComponent(this._commandsEditingId)}`:`${t}/api/cms/commands`,o=r?"PATCH":"POST";this._commandsModalSaving=!0,this._commandsError="",this._render();try{let a=await fetch(i,{method:o,headers:this._commandsApiHeaders(!0),body:JSON.stringify(n)});if(!a.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${a.status}`);this._status=r?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",this._commandsModalOpen=!1,this._commandsModalMode="create",this._commandsEditingId="",this._commandsModalDraft=this._createCommandDraft(),await this._loadCommandsPage(this._commandsPage)}catch(a){this._commandsError=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",this._render()}finally{this._commandsModalSaving=!1,this._render()}}_setActiveTab(t){this._activeTab=t,this._status="",this._error="",t!=="create-scenario"&&(this._commandsModalOpen=!1),this._render(),t==="logs"?this._startLogsPolling():(this._stopLogsPolling(),t==="timer-alarm"&&this._ensureTimerAlarmModule(),t==="create-scenario"&&this._createScenarioTab===ll.primary&&this._loadCommandsPage(this._commandsPage||1))}_renderSettings(){let t=this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids),n=this._deviceAccordionOpen,r=t.map((i,o)=>`
      <div class="device-row">
        <label class="field-grow">
          <span>device_id ${o+1}</span>
          <input
            data-timer-device-index="${o}"
            value="${S(i)}"
            placeholder="media_player.living_room"
          />
        </label>
        <button
          type="button"
          class="ghost device-remove-button"
          data-action="remove-device-id"
          data-timer-device-index="${o}"
          ${t.length===1?"disabled":""}
        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
      </div>
    `).join("");return`
      <section class="hero-card">
        <h1>Settings</h1>
        <p>\u041E\u0431\u0449\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432 \u0438 timer/alarm: IP, client_id, token, timeout \u0438 \u0441\u043F\u0438\u0441\u043E\u043A device_id.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${S(this._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 POST \u043D\u0430 <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
        <label>
          <span>Client ID</span>
          <input data-config-field="client_id" value="${S(this._config.client_id)}" placeholder="user-123" />
          <small>\u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0435\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A\u0430\u043A <code>{"clientId":"..."}</code>.</small>
        </label>
        <label>
          <span>Authorization token</span>
          <input data-config-field="timer_alarm_token" value="${S(this._config.timer_alarm_token)}" placeholder="Bearer xxx" />
          <small>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435 <code>Authorization</code> \u043A\u0430\u043A \u0435\u0441\u0442\u044C.</small>
        </label>
        <label class="field-narrow">
          <span>Timeout, \u0441\u0435\u043A\u0443\u043D\u0434</span>
          <input data-config-field="timeout" type="number" min="1" value="${S(this._config.timeout)}" />
        </label>
        </div>
        <section class="settings-accordion">
          <button type="button" class="settings-accordion-header" data-action="toggle-device-accordion">
            <span>Device</span>
            <span class="settings-accordion-icon">${n?"\u2212":"+"}</span>
          </button>
          <div class="settings-accordion-body ${n?"open":"hidden"}">
            <p class="settings-accordion-note">\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E <code>device_id</code>. \u0412 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 timer/alarm \u043E\u043D\u0438 \u0443\u0439\u0434\u0443\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u043C.</p>
            <div class="device-list">
              ${r}
            </div>
            <button type="button" class="secondary add-inline-button" data-action="add-device-id">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C device_id</button>
          </div>
        </section>
        <div class="toolbar">
          <button type="button" class="primary" data-action="save" ${this._saving?"disabled":""}>${this._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${this._error?`<div class="status error">${S(this._error)}</div>`:""}
        ${this._status?`<div class="status ok">${S(this._status)}</div>`:""}
      </section>
    `}_toggleScenario(t){this._expandedScenarios.has(t)?this._expandedScenarios.delete(t):this._expandedScenarios.add(t),this._render()}_toggleCondition(t){this._expandedConditions.has(t)?this._expandedConditions.delete(t):this._expandedConditions.add(t),this._render()}_updateConfigField(t,n,r=!1){this._config={...this._config,[t]:n},this._status="",this._error="",r&&this._render()}_normalizeTimerAlarmDeviceIdsForUi(t){let r=(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(i=>String(i??"").trim());return r.length?r:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(t=>t)}_toggleDeviceAccordion(){this._deviceAccordionOpen=!this._deviceAccordionOpen,this._render()}_addTimerAlarmDeviceId(){let t=Array.isArray(this._config.timer_alarm_device_ids)?[...this._config.timer_alarm_device_ids]:[];t.push(""),this._config={...this._config,timer_alarm_device_ids:t},this._status="",this._error="",this._render()}_updateTimerAlarmDeviceId(t,n){let r=Array.isArray(this._config.timer_alarm_device_ids)?[...this._config.timer_alarm_device_ids]:[""];r[t]=n,this._config={...this._config,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r)},this._status="",this._error=""}_removeTimerAlarmDeviceId(t){let r=(Array.isArray(this._config.timer_alarm_device_ids)?[...this._config.timer_alarm_device_ids]:[""]).filter((i,o)=>o!==t);this._config={...this._config,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r)},this._status="",this._error="",this._render()}_updateScenario(t,n,r,i=!1){this._config={...this._config,scenarios:this._config.scenarios.map(o=>o.id===t?{...o,[n]:r}:o)},this._status="",this._error="",i&&this._render()}_normalizeScenarioForUi(t){let n=this._normalizeConditionsForUi(t);return{...t,conditions:n}}_serializeScenario(t){let n=(Array.isArray(t.conditions)?t.conditions:[]).flatMap(i=>this._serializeCondition(i)).filter(Boolean),r={id:t.id,name:t.name,script_entity_id:t.script_entity_id,conditions:n};return n.length===1&&(r.parent_type=n[0].parent_type??"",n[0].children_type&&(r.children_type=n[0].children_type),n[0].children_direct_type&&(r.children_direct_type=n[0].children_direct_type)),r}_normalizeConditionsForUi(t){if(Array.isArray(t.conditions)&&t.conditions.length)return t.conditions.map(l=>this._normalizeConditionForUi(l));let n=String(t.parent_type??"").split(";").map(l=>l.trim()),r=String(t.children_type??t.type??"").split(";").map(l=>l.trim()),i=String(t.children_direct_type??"").split(";").map(l=>l.trim()),o=Math.max(n.length,r.length,i.length,1),a=[];for(let l=0;l<o;l+=1){let s=this._normalizeConditionForUi({parent_type:n[l]??"",children_type:r[l]??"",children_direct_type:i[l]??""});(s.parent_type||s.children_type_enabled||s.children_direct_type_enabled)&&a.push(s)}return a.length?a:[Pi()]}_normalizeConditionForUi(t){let n=String(t.children_type??t.type??"").trim(),r=String(t.children_direct_type??"").trim();return{id:String(t.id??Zu()),parent_type:String(t.parent_type??"").trim(),children_type:n,children_type_enabled:n!=="",children_direct_type:r,children_direct_type_enabled:r!==""}}_serializeCondition(t){let n=String(t.parent_type??"").trim(),r=String(t.children_type??"").trim(),i=String(t.children_direct_type??"").trim();if(!n&&!r&&!i)return[];let o=n.split(";").map(d=>d.trim()),a=r.split(";").map(d=>d.trim()),l=Math.max(o.length,a.length,1),s=[];for(let d=0;d<l;d+=1){let f=o[d]??"",m=a[d]??"";if(!f&&!m)continue;let h={parent_type:f};t.children_type_enabled&&m&&(h.children_type=m),t.children_direct_type_enabled&&i&&(h.children_direct_type=i),s.push(h)}return s}_updateCondition(t,n,r,i,o=!1){this._config={...this._config,scenarios:this._config.scenarios.map(a=>a.id===t?{...a,conditions:a.conditions.map(l=>l.id===n?{...l,[r]:i}:l)}:a)},this._status="",this._error="",o&&this._render()}_enableConditionChildrenType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!0,children_type:i.children_type??""}:i)}:r)},this._status="",this._error="",this._render()}_disableConditionChildrenType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!1,children_type:""}:i)}:r)},this._status="",this._error="",this._render()}_enableConditionChildrenDirectType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!0,children_direct_type:i.children_direct_type??""}:i)}:r)},this._status="",this._error="",this._render()}_disableConditionChildrenDirectType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!1,children_direct_type:""}:i)}:r)},this._status="",this._error="",this._render()}_addCondition(t){let n=Pi();this._expandedConditions.add(n.id),this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:[...r.conditions,n]}:r)},this._status="",this._error="",this._render()}_removeCondition(t,n){this._expandedConditions.delete(n),this._config={...this._config,scenarios:this._config.scenarios.map(r=>{if(r.id!==t)return r;let i=r.conditions.filter(o=>o.id!==n);return{...r,conditions:i.length?i:[Pi()]}})},this._status="",this._error="",this._render()}_addScenario(){let t=Af();this._expandedScenarios.add(t.id),this._config={...this._config,scenarios:[...this._config.scenarios,t]},this._status="",this._render(),window.requestAnimationFrame(()=>this._scrollScenarioIntoView(t.id))}_scrollScenarioIntoView(t){let n=globalThis.CSS?.escape?globalThis.CSS.escape(t):t;this.shadowRoot.querySelector(`[data-scenario-card-id="${n}"]`)?.scrollIntoView({block:"end",behavior:"smooth"})}_removeScenario(t){this._expandedScenarios.delete(t),this._config={...this._config,scenarios:this._config.scenarios.filter(n=>n.id!==t)},this._status="",this._render()}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(n=>{let r=Array.isArray(n.conditions)?n.conditions:[];return r.length?!!r.find(o=>{let a=String(o.children_type??"").trim(),l=String(o.children_direct_type??"").trim();return!!(!String(o.parent_type??"").trim()&&!a&&!l||o.children_type_enabled&&!a||o.children_direct_type_enabled&&!l)})||!String(n.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,timer_alarm_token:this._config.timer_alarm_token,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(t=>this._serializeScenario(t))}}_downloadJson(){let t=this._buildConfigPayload(),n=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="dialog-custom-ui-config.json",i.click(),URL.revokeObjectURL(r),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}async _importJsonFile(t){if(!t)return;try{let r=await t.text(),i=JSON.parse(r),o=Array.isArray(i.scenarios)?i.scenarios:[];this._config={...al,...i,timeout:Number(i.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(i.timer_alarm_device_ids??[]),scenarios:o.map(a=>this._normalizeScenarioForUi(a))},this._expandedScenarios=new Set(this._config.scenarios.map(a=>a.id)),this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-json-input"]');n&&(n.value=""),this._render()}async _save(){let t=this._validate();if(t){this._error=t,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let n=this._buildConfigPayload(),r=n.scenarios;await this._hass.callWS({type:"dialog_custom_ui/save_config",...n}),this._config={...this._config,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(n.timer_alarm_device_ids),scenarios:r.map(i=>this._normalizeScenarioForUi(i))},this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(t){t.stopPropagation()}_bindEvents(){let t=this.shadowRoot;t.querySelectorAll("[data-tab]").forEach(r=>{r.addEventListener("click",()=>this._setActiveTab(r.dataset.tab))}),t.querySelector('[data-action="save"]')?.addEventListener("click",()=>this._save()),t.querySelector('[data-action="add-scenario"]')?.addEventListener("click",()=>this._addScenario()),t.querySelector('[data-action="refresh-logs"]')?.addEventListener("click",()=>this._loadLogs()),t.querySelector('[data-action="refresh-commands"]')?.addEventListener("click",()=>this._loadCommandsPage(this._commandsPage||1)),t.querySelector('[data-action="create-command"]')?.addEventListener("click",()=>this._openCreateCommandModal()),t.querySelector('[data-action="commands-prev-page"]')?.addEventListener("click",()=>this._loadCommandsPage(this._commandsPage-1)),t.querySelector('[data-action="commands-next-page"]')?.addEventListener("click",()=>this._loadCommandsPage(this._commandsPage+1)),t.querySelectorAll("[data-create-scenario-tab]").forEach(r=>{r.addEventListener("click",()=>this._setCreateScenarioTab(r.dataset.createScenarioTab))}),t.querySelectorAll('[data-action="edit-command"]').forEach(r=>{r.addEventListener("click",()=>this._openEditCommandModal(r.dataset.commandId))}),t.querySelectorAll('[data-action="close-command-modal"]').forEach(r=>{r.addEventListener("click",()=>this._closeCommandModal())}),t.querySelector('[data-action="save-command-modal"]')?.addEventListener("click",()=>this._saveCommandModal()),t.querySelector('[data-action="download-json"]')?.addEventListener("click",()=>this._downloadJson()),t.querySelector('[data-action="upload-json"]')?.addEventListener("click",()=>this._openJsonFilePicker()),t.querySelector('[data-action="import-json-input"]')?.addEventListener("change",r=>{let[i]=r.currentTarget.files||[];this._importJsonFile(i)}),t.querySelector('[data-action="toggle-device-accordion"]')?.addEventListener("click",()=>this._toggleDeviceAccordion()),t.querySelector('[data-action="add-device-id"]')?.addEventListener("click",()=>this._addTimerAlarmDeviceId()),t.querySelectorAll('[data-action="add-condition"]').forEach(r=>{r.addEventListener("click",()=>this._addCondition(r.dataset.scenarioId))}),t.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(r=>{r.addEventListener("click",()=>this._enableConditionChildrenType(r.dataset.scenarioId,r.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(r=>{r.addEventListener("click",()=>this._disableConditionChildrenType(r.dataset.scenarioId,r.dataset.conditionId))}),t.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(r=>{r.addEventListener("click",()=>this._enableConditionChildrenDirectType(r.dataset.scenarioId,r.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(r=>{r.addEventListener("click",()=>this._disableConditionChildrenDirectType(r.dataset.scenarioId,r.dataset.conditionId))}),t.querySelectorAll("[data-toggle-scenario]").forEach(r=>{r.addEventListener("click",()=>this._toggleScenario(r.dataset.toggleScenario))}),t.querySelectorAll("[data-toggle-condition]").forEach(r=>{r.addEventListener("click",()=>this._toggleCondition(r.dataset.toggleCondition))}),t.querySelectorAll("input, select, button, textarea").forEach(r=>{["click","mousedown","mouseup","keydown","keyup","keypress","focusin"].forEach(i=>{r.addEventListener(i,o=>this._swallowUiEvent(o))})}),t.querySelectorAll("[data-config-field]").forEach(r=>{r.addEventListener("input",i=>{this._updateConfigField(i.currentTarget.dataset.configField,i.currentTarget.value,!1)}),r.addEventListener("change",i=>{this._updateConfigField(i.currentTarget.dataset.configField,i.currentTarget.value,!1)})}),t.querySelectorAll("[data-timer-device-index]").forEach(r=>{let i=Number(r.dataset.timerDeviceIndex);r.addEventListener("input",o=>{this._updateTimerAlarmDeviceId(i,o.currentTarget.value)}),r.addEventListener("change",o=>{this._updateTimerAlarmDeviceId(i,o.currentTarget.value),this._render()})}),t.querySelectorAll('[data-action="remove-device-id"]').forEach(r=>{r.addEventListener("click",()=>this._removeTimerAlarmDeviceId(Number(r.dataset.timerDeviceIndex)))}),t.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(r=>{let i=r.dataset.scenarioField,o=r.dataset.scenarioId;r.tagName==="SELECT"?r.addEventListener("change",a=>{this._updateScenario(o,i,a.currentTarget.value,!0)}):(r.addEventListener("input",a=>{this._updateScenario(o,i,a.currentTarget.value,!1)}),r.addEventListener("change",a=>{this._updateScenario(o,i,a.currentTarget.value,!0)}))}),t.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(r=>{let i=r.dataset.scenarioId,o=r.dataset.conditionId,a=r.dataset.conditionField;r.addEventListener("input",l=>{this._updateCondition(i,o,a,l.currentTarget.value,!1)}),r.addEventListener("change",l=>{this._updateCondition(i,o,a,l.currentTarget.value,!0)})}),t.querySelectorAll("[data-remove-id]").forEach(r=>{r.addEventListener("click",()=>this._removeScenario(r.dataset.removeId))}),t.querySelectorAll("[data-remove-condition-id]").forEach(r=>{r.addEventListener("click",()=>this._removeCondition(r.dataset.scenarioId,r.dataset.removeConditionId))}),t.querySelectorAll("[data-command-draft-field]").forEach(r=>{let i=r.dataset.commandDraftField,o=r.tagName==="TEXTAREA"||r.tagName==="INPUT"?"input":"change";r.addEventListener(o,a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;this._updateCommandDraft(i,l)}),r.type==="checkbox"&&r.addEventListener("change",a=>{this._updateCommandDraft(i,a.currentTarget.checked)})});let n=t.querySelector("dialog-custom-ui-create-scenario");n&&(n.hass=this._hass,n.config={base_url:this._config.base_url,timer_alarm_token:this._config.timer_alarm_token})}_renderScenarios(){let t=this._scripts(),n=this._config.scenarios.length?this._config.scenarios.map((r,i)=>{let o=this._expandedScenarios.has(r.id),a=r.conditions.map((l,s)=>`
            ${(()=>{let d=this._expandedConditions.has(l.id),f=[];l.parent_type&&f.push(`Parent: ${S(l.parent_type)}`),l.children_type_enabled&&l.children_type&&f.push(`Children: ${S(l.children_type)}`),l.children_direct_type_enabled&&l.children_direct_type&&f.push(`Children Direct: ${S(l.children_direct_type)}`);let m=f.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return`
            <div class="condition-card ${d?"expanded":"collapsed"}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${S(l.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ${s+1}</span>
                  <span class="condition-preview">${m}</span>
                </span>
                <span class="condition-header-side">
                  <span class="condition-accordion-icon">${d?"\u2212":"+"}</span>
                </span>
              </button>
              <div class="condition-body ${d?"open":"hidden"}">
                <div class="condition-actions">
                  ${r.conditions.length>1?`
                    <button
                      type="button"
                      class="ghost remove-inline-button"
                      data-scenario-id="${S(r.id)}"
                      data-remove-condition-id="${S(l.id)}"
                    >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                  `:""}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${S(r.id)}"
                      data-condition-id="${S(l.id)}"
                      data-condition-field="parent_type"
                      value="${S(l.parent_type)}"
                      placeholder="status_door"
                    />
                    <small>\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D children_type \u0432 \u044D\u0442\u043E\u043C \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0438.</small>
                  </div>
                  ${l.children_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-type"
                          data-scenario-id="${S(r.id)}"
                          data-condition-id="${S(l.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${S(r.id)}"
                        data-condition-id="${S(l.id)}"
                        data-condition-field="children_type"
                        value="${S(l.children_type??"")}"
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
                        data-scenario-id="${S(r.id)}"
                        data-condition-id="${S(l.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E parent_type.</small>
                    </div>
                  `}
                  ${l.children_direct_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-direct-type"
                          data-scenario-id="${S(r.id)}"
                          data-condition-id="${S(l.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${S(r.id)}"
                        data-condition-id="${S(l.id)}"
                        data-condition-field="children_direct_type"
                        value="${S(l.children_direct_type??"")}"
                        placeholder="direct_subcommand"
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
                        data-scenario-id="${S(r.id)}"
                        data-condition-id="${S(l.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `})()}
          `).join("");return`
            <section class="scenario-card ${o?"expanded":"collapsed"}" data-scenario-card-id="${S(r.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${S(r.id)}">
                  <span class="scenario-toggle-icon">${o?"\u2212":"+"}</span>
                  <span>
                    <span class="scenario-kicker">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${i+1}</span>
                    <span class="scenario-title">${S(r.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${S(r.id)}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
              </div>
              <div class="scenario-body ${o?"open":"hidden"}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430</span>
                    <input data-scenario-id="${S(r.id)}" data-scenario-field="name" value="${S(r.name)}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">\u0423\u0441\u043B\u043E\u0432\u0438\u044F</span>
                        <small>\u0427\u0435\u0440\u0435\u0437 <code>+</code> \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. \u0415\u0441\u043B\u0438 \u0432 <code>Parent Type</code> \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 <code>;</code>, \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${S(r.id)}">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                    </div>
                    <div class="conditions-list">${a}</div>
                  </div>
                  <label class="field-span-2">
                    <span>\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant</span>
                    <select data-scenario-id="${S(r.id)}" data-scenario-field="script_entity_id">
                      <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*</option>
                      ${t.map(l=>{let s=l.entity_id===r.script_entity_id?"selected":"",d=l.attributes.friendly_name||l.entity_id;return`<option value="${S(l.entity_id)}" ${s}>${S(d)} (${S(l.entity_id)})</option>`}).join("")}
                    </select>
                  </label>
                </div>
              </div>
            </section>
          `}).join(""):'<div class="empty">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u043B\u044E\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.</div>';return`
      <section class="hero-card">
        <h1>Scenarios</h1>
        <p>\u0417\u0434\u0435\u0441\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="add-scenario">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
          <button type="button" class="primary" data-action="save" ${this._saving?"disabled":""}>${this._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${this._error?`<div class="status error">${S(this._error)}</div>`:""}
        ${this._status?`<div class="status ok">${S(this._status)}</div>`:""}
      </section>
      <div class="scenario-list">${n}</div>
      <section class="help-card">
        <div><strong>\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check   -H "Content-Type: application/json"   -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442</strong></div>
        <div>\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 <code>script.*</code> \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${S(Df)}</code></pre>
      </section>
    `}_renderLogs(){let t=this._logs.length?this._logs.map(n=>`
          <div class="log-item ${S(n.level)}">
            <div class="log-meta">
              <span class="log-time">${S(n.ts)}</span>
              <span class="log-level">${S(n.level)}</span>
            </div>
            <div class="log-message">${S(n.message)}</div>
          </div>
        `).join(""):'<div class="empty">\u041B\u043E\u0433\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h1>Logs</h1>
        <p>\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 10 \u0441\u043E\u0431\u044B\u0442\u0438\u0439: \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430, 204, \u043E\u0448\u0438\u0431\u043A\u0438, \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0438 \u0437\u0430\u043F\u0443\u0441\u043A \u0441\u043A\u0440\u0438\u043F\u0442\u0430.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-logs" ${this._loadingLogs?"disabled":""}>${this._loadingLogs?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        </div>
      </section>
      <section class="help-card logs-card">
        ${t}
      </section>
    `}_renderTimerAlarm(){return this._timerAlarmLoaded?`
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `:(this._timerAlarmLoading||this._ensureTimerAlarmModule(),`
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">\u041C\u043E\u0434\u0443\u043B\u044C timer/alarm \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F...</div>
        </section>
      `)}_renderJsonTools(){let t=this._buildConfigPayload();return`
      <section class="hero-card">
        <h1>JSON</h1>
        <p>\u041C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0432 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u0439 JSON \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0444\u043E\u0440\u043C\u0443.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="download-json">\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON</button>
          <button type="button" class="primary" data-action="upload-json">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON</button>
          <input type="file" accept=".json,application/json" data-action="import-json-input" hidden />
        </div>
        ${this._error?`<div class="status error">${S(this._error)}</div>`:""}
        ${this._status?`<div class="status ok">${S(this._status)}</div>`:""}
      </section>
      <section class="help-card">
        <div><strong>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E JSON</strong></div>
        <pre><code>${S(JSON.stringify(t,null,2))}</code></pre>
      </section>
    `}_renderCreateScenarioPrimary(){let t=this._commandsPage>1&&!this._commandsLoading,n=Math.max(1,Math.ceil((this._commandsTotal||1)/Mi)),r=this._commandsPage<n&&!this._commandsLoading,i=this._commandsLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':this._commands.length?this._commands.map(o=>`
            <button
              type="button"
              class="command-item"
              data-action="edit-command"
              data-command-id="${S(o._id)}"
            >
              <span class="command-item-title">${S(o.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${S(o.componentDialog?.type||"type: -")}</span>
                <span>${S(o.uuidDialog||"uuid: -")}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">\u041A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h1>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</h1>
        <p>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u043E 20 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F/\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="refresh-commands" ${this._commandsLoading?"disabled":""}>${this._commandsLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"}</button>
          <button type="button" class="primary" data-action="create-command">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
        </div>
        ${this._commandsError?`<div class="status error">${S(this._commandsError)}</div>`:""}
        ${this._status?`<div class="status ok">${S(this._status)}</div>`:""}
      </section>
      <section class="help-card command-list">
        ${i}
        <div class="command-pagination">
          <button type="button" class="ghost" data-action="commands-prev-page" ${t?"":"disabled"}>\u041D\u0430\u0437\u0430\u0434</button>
          <span>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ${this._commandsPage} \u0438\u0437 ${n}</span>
          <button type="button" class="ghost" data-action="commands-next-page" ${r?"":"disabled"}>\u0412\u043F\u0435\u0440\u0435\u0434</button>
        </div>
      </section>
    `}_renderCreateScenarioStub(t,n){return`
      <section class="hero-card">
        <h1>${S(t)}</h1>
        <p>${S(n)}</p>
      </section>
      <section class="help-card">
        <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D. \u041C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u043E\u0433\u0438\u043A\u0443 \u0438 API \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0442\u0438\u043F\u0430 \u043A\u043E\u043C\u0430\u043D\u0434 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0448\u0430\u0433\u043E\u043C.</div>
      </section>
    `}_renderCommandModal(){if(!this._commandsModalOpen)return"";let t=this._commandsModalDraft,n=this._commandsModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
      <div class="command-modal-backdrop" data-action="close-command-modal"></div>
      <section class="command-modal" role="dialog" aria-modal="true" aria-label="${S(n)}">
        <div class="command-modal-header">
          <h2>${S(n)}</h2>
          <button type="button" class="ghost" data-action="close-command-modal" ${this._commandsModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="command-modal-body">
          <div class="command-modal-grid">
            <label>
              <span>Title</span>
              <input data-command-draft-field="title" value="${S(t.title)}" placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F" />
            </label>
            <label>
              <span>uuidDialog</span>
              <input data-command-draft-field="uuidDialog" value="${S(t.uuidDialog)}" placeholder="xxxx-xxxx-xxxx-xxxx" />
            </label>
            <label>
              <span>componentDialog.type</span>
              <input data-command-draft-field="type" value="${S(t.type)}" placeholder="continue_cleaning" />
            </label>
            <label>
              <span>answerType</span>
              <input data-command-draft-field="answerType" value="${S(t.answerType)}" placeholder="default" />
            </label>
            <label class="checkbox-row">
              <input type="checkbox" data-command-draft-field="endStatus" ${t.endStatus?"checked":""} />
              <span>endStatus</span>
            </label>
            <label class="checkbox-row">
              <input type="checkbox" data-command-draft-field="forwardText" ${t.forwardText?"checked":""} />
              <span>forwardText</span>
            </label>
            <label class="field-span-2">
              <span>voiceCommands (JSON, nullable)</span>
              <textarea data-command-draft-field="voiceCommands" rows="3" placeholder="null \u0438\u043B\u0438 JSON">${S(t.voiceCommands)}</textarea>
            </label>
            <label class="field-span-2">
              <span>nextDirectControl (JSON array)</span>
              <textarea data-command-draft-field="nextDirectControl" rows="3">${S(t.nextDirectControl)}</textarea>
            </label>
            <label class="field-span-2">
              <span>voiceResponseArray (JSON array)</span>
              <textarea data-command-draft-field="voiceResponseArray" rows="3">${S(t.voiceResponseArray)}</textarea>
            </label>
            <label class="field-span-2">
              <span>nextAction (JSON array)</span>
              <textarea data-command-draft-field="nextAction" rows="3">${S(t.nextAction)}</textarea>
            </label>
          </div>
        </div>
        <div class="command-modal-footer">
          <button type="button" class="ghost" data-action="close-command-modal" ${this._commandsModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          <button type="button" class="primary" data-action="save-command-modal" ${this._commandsModalSaving?"disabled":""}>${this._commandsModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderCreateScenario(){return`
      <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
    `}_render(){let t=this._activeTab==="logs"?this._renderLogs():this._activeTab==="scenarios"?this._renderScenarios():this._activeTab==="create-scenario"?this._renderCreateScenario():this._activeTab==="timer-alarm"?this._renderTimerAlarm():this._activeTab==="json"?this._renderJsonTools():this._renderSettings(),n=`
      <style>
        :host {
          --panel-bg: linear-gradient(160deg, #f6efe7 0%, #eef3ff 100%);
          --card-bg: rgba(255, 255, 255, 0.9);
          --border: rgba(34, 45, 67, 0.14);
          --text: #1b2432;
          --muted: #5c667a;
          --accent: #a64b2a;
          --accent-2: #234f7d;
          display: block;
          width: 100%;
          max-width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          color: var(--text);
          background: var(--panel-bg);
          font-family: "Segoe UI", "Trebuchet MS", sans-serif;
          overflow-x: hidden;
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
          box-shadow: 0 18px 40px rgba(31, 41, 55, 0.08);
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
          background: rgba(255, 255, 255, 0.72);
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
        }
        .tab-button.active {
          color: white;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
        }
        .panel-shell {
          display: grid;
          gap: 8px;
          width: 100%;
          padding: 10px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid var(--border);
          box-shadow: 0 10px 24px rgba(31, 41, 55, 0.08);
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
        .subtab-button {
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          color: var(--muted);
          padding: 10px 14px;
          cursor: pointer;
        }
        .subtab-button.active {
          color: #fff;
          background: linear-gradient(135deg, var(--accent-2), #4c78a8);
          border-color: transparent;
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
          background: rgba(255, 255, 255, 0.72);
          color: var(--text);
          padding: 14px;
          text-align: left;
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
          background: rgba(255, 255, 255, 0.98);
          z-index: 41;
          display: grid;
          gap: 14px;
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
          background: rgba(255, 255, 255, 0.9);
          resize: vertical;
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
          background: rgba(255, 255, 255, 0.72);
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
          background: rgba(255, 255, 255, 0.72);
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
          background: rgba(255, 255, 255, 0.9);
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
        .scenario-card {
          padding: 18px;
          width: 100%;
          max-width: 100%;
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
          background: rgba(255, 255, 255, 0.6);
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
      </style>
      <div class="page">
        <div class="hero">
          <section class="panel-shell">
            <div class="tabs">
              <button type="button" class="tab-button ${this._activeTab==="scenarios"?"active":""}" data-tab="scenarios">Scenarios</button>
              <button type="button" class="tab-button ${this._activeTab==="create-scenario"?"active":""}" data-tab="create-scenario">Create Scenario</button>
              <button type="button" class="tab-button ${this._activeTab==="timer-alarm"?"active":""}" data-tab="timer-alarm">Timer / Alarm</button>
              <button type="button" class="tab-button ${this._activeTab==="json"?"active":""}" data-tab="json">JSON</button>
              <button type="button" class="tab-button ${this._activeTab==="logs"?"active":""}" data-tab="logs">Logs</button>
              <button type="button" class="tab-button ${this._activeTab==="settings"?"active":""}" data-tab="settings">Settings</button>
            </div>
            ${t}
          </section>
        </div>
      </div>
    `;this._mountReact(n),this._bindEvents()}};customElements.get("dialog-custom-ui-panel")||customElements.define("dialog-custom-ui-panel",dl);
