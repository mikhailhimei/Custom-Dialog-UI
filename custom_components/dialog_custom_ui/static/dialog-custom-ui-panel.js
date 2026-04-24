var Mf=Object.create;var Pl=Object.defineProperty;var $f=Object.getOwnPropertyDescriptor;var Pf=Object.getOwnPropertyNames;var Lf=Object.getPrototypeOf,Nf=Object.prototype.hasOwnProperty;var bt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Rf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Pf(t))!Nf.call(e,i)&&i!==n&&Pl(e,i,{get:()=>t[i],enumerable:!(r=$f(t,i))||r.enumerable});return e};var jt=(e,t,n)=>(n=e!=null?Mf(Lf(e)):{},Rf(t||!e||!e.__esModule?Pl(n,"default",{value:e,enumerable:!0}):n,e));var Hl=bt(A=>{"use strict";var yn=Symbol.for("react.element"),zf=Symbol.for("react.portal"),Of=Symbol.for("react.fragment"),Uf=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Hf=Symbol.for("react.memo"),Wf=Symbol.for("react.lazy"),Ll=Symbol.iterator;function qf(e){return e===null||typeof e!="object"?null:(e=Ll&&e[Ll]||e["@@iterator"],typeof e=="function"?e:null)}var zl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ol=Object.assign,Ul={};function Bt(e,t,n){this.props=e,this.context=t,this.refs=Ul,this.updater=n||zl}Bt.prototype.isReactComponent={};Bt.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jl(){}jl.prototype=Bt.prototype;function to(e,t,n){this.props=e,this.context=t,this.refs=Ul,this.updater=n||zl}var no=to.prototype=new jl;no.constructor=to;Ol(no,Bt.prototype);no.isPureReactComponent=!0;var Nl=Array.isArray,Bl=Object.prototype.hasOwnProperty,ro={current:null},Fl={key:!0,ref:!0,__self:!0,__source:!0};function xl(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Bl.call(t,r)&&!Fl.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:yn,type:e,key:o,ref:a,props:i,_owner:ro.current}}function Qf(e,t){return{$$typeof:yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===yn}function Yf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rl=/\/+/g;function eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yf(""+e.key):t.toString(36)}function gr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yn:case zf:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+eo(a,0):r,Nl(i)?(n="",e!=null&&(n=e.replace(Rl,"$&/")+"/"),gr(i,t,n,"",function(d){return d})):i!=null&&(io(i)&&(i=Qf(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Rl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nl(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+eo(o,l);a+=gr(o,t,n,s,i)}else if(s=qf(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+eo(o,l++),a+=gr(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,t,n){if(e==null)return e;var r=[],i=0;return gr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Kf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},hr={transition:null},Gf={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:hr,ReactCurrentOwner:ro};function Vl(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Bt;A.Fragment=Of;A.Profiler=jf;A.PureComponent=to;A.StrictMode=Uf;A.Suspense=Vf;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf;A.act=Vl;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ol({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ro.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Bl.call(t,s)&&!Fl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:yn,type:e.type,key:i,ref:o,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:Ff,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bf,_context:e},e.Consumer=e};A.createElement=xl;A.createFactory=function(e){var t=xl.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:xf,render:e}};A.isValidElement=io;A.lazy=function(e){return{$$typeof:Wf,_payload:{_status:-1,_result:e},_init:Kf}};A.memo=function(e,t){return{$$typeof:Hf,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=hr.transition;hr.transition={};try{e()}finally{hr.transition=t}};A.unstable_act=Vl;A.useCallback=function(e,t){return oe.current.useCallback(e,t)};A.useContext=function(e){return oe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};A.useEffect=function(e,t){return oe.current.useEffect(e,t)};A.useId=function(){return oe.current.useId()};A.useImperativeHandle=function(e,t,n){return oe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return oe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return oe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return oe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return oe.current.useReducer(e,t,n)};A.useRef=function(e){return oe.current.useRef(e)};A.useState=function(e){return oe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return oe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return oe.current.useTransition()};A.version="18.3.1"});var _r=bt((ih,Wl)=>{"use strict";Wl.exports=Hl()});var ts=bt(L=>{"use strict";function so(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<yr(i,t))e[r]=t,e[n]=i,n=r;else break e}}function Ee(e){return e.length===0?null:e[0]}function Sr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var a=2*(r+1)-1,l=e[a],s=a+1,d=e[s];if(0>yr(l,n))s<i&&0>yr(d,l)?(e[r]=d,e[s]=n,r=s):(e[r]=l,e[a]=n,r=a);else if(s<i&&0>yr(d,n))e[r]=d,e[s]=n,r=s;else break e}}return t}function yr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(ql=performance,L.unstable_now=function(){return ql.now()}):(oo=Date,Ql=oo.now(),L.unstable_now=function(){return oo.now()-Ql});var ql,oo,Ql,ze=[],tt=[],Jf=1,Se=null,Z=3,wr=!1,Ct=!1,Sn=!1,Gl=typeof setTimeout=="function"?setTimeout:null,Jl=typeof clearTimeout=="function"?clearTimeout:null,Yl=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function uo(e){for(var t=Ee(tt);t!==null;){if(t.callback===null)Sr(tt);else if(t.startTime<=e)Sr(tt),t.sortIndex=t.expirationTime,so(ze,t);else break;t=Ee(tt)}}function co(e){if(Sn=!1,uo(e),!Ct)if(Ee(ze)!==null)Ct=!0,fo(po);else{var t=Ee(tt);t!==null&&mo(co,t.startTime-e)}}function po(e,t){Ct=!1,Sn&&(Sn=!1,Jl(wn),wn=-1),wr=!0;var n=Z;try{for(uo(t),Se=Ee(ze);Se!==null&&(!(Se.expirationTime>t)||e&&!es());){var r=Se.callback;if(typeof r=="function"){Se.callback=null,Z=Se.priorityLevel;var i=r(Se.expirationTime<=t);t=L.unstable_now(),typeof i=="function"?Se.callback=i:Se===Ee(ze)&&Sr(ze),uo(t)}else Sr(ze);Se=Ee(ze)}if(Se!==null)var o=!0;else{var a=Ee(tt);a!==null&&mo(co,a.startTime-t),o=!1}return o}finally{Se=null,Z=n,wr=!1}}var br=!1,vr=null,wn=-1,Xl=5,Zl=-1;function es(){return!(L.unstable_now()-Zl<Xl)}function ao(){if(vr!==null){var e=L.unstable_now();Zl=e;var t=!0;try{t=vr(!0,e)}finally{t?vn():(br=!1,vr=null)}}else br=!1}var vn;typeof Yl=="function"?vn=function(){Yl(ao)}:typeof MessageChannel<"u"?(lo=new MessageChannel,Kl=lo.port2,lo.port1.onmessage=ao,vn=function(){Kl.postMessage(null)}):vn=function(){Gl(ao,0)};var lo,Kl;function fo(e){vr=e,br||(br=!0,vn())}function mo(e,t){wn=Gl(function(){e(L.unstable_now())},t)}L.unstable_IdlePriority=5;L.unstable_ImmediatePriority=1;L.unstable_LowPriority=4;L.unstable_NormalPriority=3;L.unstable_Profiling=null;L.unstable_UserBlockingPriority=2;L.unstable_cancelCallback=function(e){e.callback=null};L.unstable_continueExecution=function(){Ct||wr||(Ct=!0,fo(po))};L.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xl=0<e?Math.floor(1e3/e):5};L.unstable_getCurrentPriorityLevel=function(){return Z};L.unstable_getFirstCallbackNode=function(){return Ee(ze)};L.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};L.unstable_pauseExecution=function(){};L.unstable_requestPaint=function(){};L.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};L.unstable_scheduleCallback=function(e,t,n){var r=L.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:Jf++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,so(tt,e),Ee(ze)===null&&e===Ee(tt)&&(Sn?(Jl(wn),wn=-1):Sn=!0,mo(co,n-r))):(e.sortIndex=i,so(ze,e),Ct||wr||(Ct=!0,fo(po))),e};L.unstable_shouldYield=es;L.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var rs=bt((ah,ns)=>{"use strict";ns.exports=ts()});var lc=bt(ve=>{"use strict";var Xf=_r(),_e=rs();function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,Vn={};function zt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=Object.prototype.hasOwnProperty,Zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,is={},os={};function em(e){return Oo.call(os,e)?!0:Oo.call(is,e)?!1:Zf.test(e)?os[e]=!0:(is[e]=!0,!1)}function tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nm(e,t,n,r){if(t===null||typeof t>"u"||tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){X[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){X[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){X[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){X[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Aa=/[\-:]([a-z])/g;function Ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Aa,Ma);X[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Aa,Ma);X[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Aa,Ma);X[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){X[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});X.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){X[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function $a(e,t,n,r){var i=X.hasOwnProperty(t)?X[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nm(t,n,i,r)&&(n=null),r||i===null?em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),Pa=Symbol.for("react.strict_mode"),Uo=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),jo=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),Na=Symbol.for("react.memo"),rt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var fd=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var as=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,go;function Mn(e){if(go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);go=t&&t[1]||""}return`
`+go+e}var ho=!1;function _o(e,t){if(!e||ho)return"";ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function rm(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=_o(e.type,!1),e;case 11:return e=_o(e.type.render,!1),e;case 1:return e=_o(e.type,!0),e;default:return""}}function Fo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case Uo:return"Profiler";case Pa:return"StrictMode";case jo:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case La:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Na:return t=e.displayName||null,t!==null?t:Fo(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return Fo(e(t))}catch{}}return null}function im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fo(t);case 8:return t===Pa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function om(e){var t=md(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=om(e))}function gd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=md(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xo(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ls(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&$a(e,"checked",t,!1)}function Vo(e,t){hd(e,t);var n=_t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ho(e,t.type,_t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ss(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ho(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if($n(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_t(n)}}function _d(e,t){var n=_t(t.value),r=_t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function us(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,vd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},am=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){am.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function Sd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lm=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ko=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Go=null,nn=null,rn=null;function cs(e){if(e=sr(e)){if(typeof Go!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ii(t),Go(e.stateNode,e.type,t))}}function bd(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Cd(){if(nn){var e=nn,t=rn;if(rn=nn=null,cs(e),t)for(e=0;e<t.length;e++)cs(t[e])}}function Td(e,t){return e(t)}function kd(){}var yo=!1;function Id(e,t,n){if(yo)return e(t,n);yo=!0;try{return Td(e,t,n)}finally{yo=!1,(nn!==null||rn!==null)&&(kd(),Cd())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Jo=!1;if(Ke)try{Ft={},Object.defineProperty(Ft,"passive",{get:function(){Jo=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{Jo=!1}var Ft;function sm(e,t,n,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Rn=!1,Zr=null,ei=!1,Xo=null,dm={onError:function(e){Rn=!0,Zr=e}};function um(e,t,n,r,i,o,a,l,s){Rn=!1,Zr=null,sm.apply(dm,arguments)}function cm(e,t,n,r,i,o,a,l,s){if(um.apply(this,arguments),Rn){if(Rn){var d=Zr;Rn=!1,Zr=null}else throw Error(_(198));ei||(ei=!0,Xo=d)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ps(e){if(Ot(e)!==e)throw Error(_(188))}function pm(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ps(i),e;if(o===r)return ps(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ed(e){return e=pm(e),e!==null?Ad(e):null}function Ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ad(e);if(t!==null)return t;e=e.sibling}return null}var Md=_e.unstable_scheduleCallback,fs=_e.unstable_cancelCallback,fm=_e.unstable_shouldYield,mm=_e.unstable_requestPaint,V=_e.unstable_now,gm=_e.unstable_getCurrentPriorityLevel,za=_e.unstable_ImmediatePriority,$d=_e.unstable_UserBlockingPriority,ti=_e.unstable_NormalPriority,hm=_e.unstable_LowPriority,Pd=_e.unstable_IdlePriority,bi=null,Be=null;function _m(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Sm,ym=Math.log,vm=Math.LN2;function Sm(e){return e>>>=0,e===0?32:31-(ym(e)/vm|0)|0}var Ir=64,Dr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Pn(l):(o&=a,o!==0&&(r=Pn(o)))}else a=n&~i,a!==0?r=Pn(a):o!==0&&(r=Pn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Le(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=wm(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ld(){var e=Ir;return Ir<<=1,(Ir&4194240)===0&&(Ir=64),e}function vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Cm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var P=0;function Nd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rd,Ua,zd,Od,Ud,ea=!1,Er=[],dt=null,ut=null,ct=null,qn=new Map,Qn=new Map,ot=[],Tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ms(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Cn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=sr(t),t!==null&&Ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function km(e,t,n,r,i){switch(t){case"focusin":return dt=Cn(dt,e,t,n,r,i),!0;case"dragenter":return ut=Cn(ut,e,t,n,r,i),!0;case"mouseover":return ct=Cn(ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qn.set(o,Cn(qn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qn.set(o,Cn(Qn.get(o)||null,e,t,n,r,i)),!0}return!1}function jd(e){var t=It(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Dd(n),t!==null){e.blockedOn=t,Ud(e.priority,function(){zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ko=r,n.target.dispatchEvent(r),Ko=null}else return t=sr(n),t!==null&&Ua(t),e.blockedOn=n,!1;t.shift()}return!0}function gs(e,t,n){xr(e)&&n.delete(t)}function Im(){ea=!1,dt!==null&&xr(dt)&&(dt=null),ut!==null&&xr(ut)&&(ut=null),ct!==null&&xr(ct)&&(ct=null),qn.forEach(gs),Qn.forEach(gs)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Im)))}function Yn(e){function t(i){return Tn(i,e)}if(0<Er.length){Tn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Tn(dt,e),ut!==null&&Tn(ut,e),ct!==null&&Tn(ct,e),qn.forEach(t),Qn.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&ot.shift()}var on=Ze.ReactCurrentBatchConfig,ri=!0;function Dm(e,t,n,r){var i=P,o=on.transition;on.transition=null;try{P=1,ja(e,t,n,r)}finally{P=i,on.transition=o}}function Em(e,t,n,r){var i=P,o=on.transition;on.transition=null;try{P=4,ja(e,t,n,r)}finally{P=i,on.transition=o}}function ja(e,t,n,r){if(ri){var i=ta(e,t,n,r);if(i===null)Io(e,t,r,ii,n),ms(e,r);else if(km(i,e,t,n,r))r.stopPropagation();else if(ms(e,r),t&4&&-1<Tm.indexOf(e)){for(;i!==null;){var o=sr(i);if(o!==null&&Rd(o),o=ta(e,t,n,r),o===null&&Io(e,t,r,ii,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Io(e,t,r,null,n)}}var ii=null;function ta(e,t,n,r){if(ii=null,e=Ra(r),e=It(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Bd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gm()){case za:return 1;case $d:return 4;case ti:case hm:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var lt=null,Ba=null,Vr=null;function Fd(){if(Vr)return Vr;var e,t=Ba,n=t.length,r,i="value"in lt?lt.value:lt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Vr=i.slice(e,1<r?1-r:void 0)}function Hr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function hs(){return!1}function ye(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ar:hs,this.isPropagationStopped=hs,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=ye(gn),lr=F({},gn,{view:0,detail:0}),Am=ye(lr),So,wo,kn,Ci=F({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(So=e.screenX-kn.screenX,wo=e.screenY-kn.screenY):wo=So=0,kn=e),So)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),_s=ye(Ci),Mm=F({},Ci,{dataTransfer:0}),$m=ye(Mm),Pm=F({},lr,{relatedTarget:0}),bo=ye(Pm),Lm=F({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nm=ye(Lm),Rm=F({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zm=ye(Rm),Om=F({},gn,{data:0}),ys=ye(Om),Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bm[e])?!!t[e]:!1}function xa(){return Fm}var xm=F({},lr,{key:function(e){if(e.key){var t=Um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?Hr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=ye(xm),Hm=F({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vs=ye(Hm),Wm=F({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),qm=ye(Wm),Qm=F({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=ye(Qm),Km=F({},Ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gm=ye(Km),Jm=[9,13,27,32],Va=Ke&&"CompositionEvent"in window,zn=null;Ke&&"documentMode"in document&&(zn=document.documentMode);var Xm=Ke&&"TextEvent"in window&&!zn,xd=Ke&&(!Va||zn&&8<zn&&11>=zn),Ss=" ",ws=!1;function Vd(e,t){switch(e){case"keyup":return Jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Zm(e,t){switch(e){case"compositionend":return Hd(t);case"keypress":return t.which!==32?null:(ws=!0,Ss);case"textInput":return e=t.data,e===Ss&&ws?null:e;default:return null}}function eg(e,t){if(Wt)return e==="compositionend"||!Va&&Vd(e,t)?(e=Fd(),Vr=Ba=lt=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xd&&t.locale!=="ko"?null:t.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tg[e.type]:t==="textarea"}function Wd(e,t,n,r){bd(r),t=oi(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Kn=null;function ng(e){nu(e,0)}function Ti(e){var t=Yt(e);if(gd(t))return e}function rg(e,t){if(e==="change")return t}var qd=!1;Ke&&(Ke?($r="oninput"in document,$r||(Co=document.createElement("div"),Co.setAttribute("oninput","return;"),$r=typeof Co.oninput=="function"),Mr=$r):Mr=!1,qd=Mr&&(!document.documentMode||9<document.documentMode));var Mr,$r,Co;function Cs(){On&&(On.detachEvent("onpropertychange",Qd),Kn=On=null)}function Qd(e){if(e.propertyName==="value"&&Ti(Kn)){var t=[];Wd(t,Kn,e,Ra(e)),Id(ng,t)}}function ig(e,t,n){e==="focusin"?(Cs(),On=t,Kn=n,On.attachEvent("onpropertychange",Qd)):e==="focusout"&&Cs()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Kn)}function ag(e,t){if(e==="click")return Ti(t)}function lg(e,t){if(e==="input"||e==="change")return Ti(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:sg;function Gn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oo.call(t,i)||!Re(e[i],t[i]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=Ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ts(n)}}function Yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kd(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dg(e){var t=Kd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yd(n.ownerDocument.documentElement,n)){if(r!==null&&Ha(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ks(n,o);var a=ks(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ug=Ke&&"documentMode"in document&&11>=document.documentMode,qt=null,na=null,Un=null,ra=!1;function Is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||qt==null||qt!==Xr(r)||(r=qt,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Gn(Un,r)||(Un=r,r=oi(na,"onSelect"),0<r.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},To={},Gd={};Ke&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function ki(e){if(To[e])return To[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gd)return To[e]=t[n];return e}var Jd=ki("animationend"),Xd=ki("animationiteration"),Zd=ki("animationstart"),eu=ki("transitionend"),tu=new Map,Ds="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){tu.set(e,t),zt(t,[e])}for(Lr=0;Lr<Ds.length;Lr++)Nr=Ds[Lr],Es=Nr.toLowerCase(),As=Nr[0].toUpperCase()+Nr.slice(1),vt(Es,"on"+As);var Nr,Es,As,Lr;vt(Jd,"onAnimationEnd");vt(Xd,"onAnimationIteration");vt(Zd,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(eu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cm(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ms(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ms(i,l,d),o=s}}}if(ei)throw e=Xo,ei=!1,Xo=null,e}function R(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function ko(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Rr]){e[Rr]=!0,ud.forEach(function(n){n!=="selectionchange"&&(cg.has(n)||ko(n,!1,e),ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,ko("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Bd(t)){case 1:var i=Dm;break;case 4:i=Em;break;default:i=ja}n=i.bind(null,t,n,e),i=void 0,!Jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Io(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=It(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Id(function(){var d=o,m=Ra(n),c=[];e:{var g=tu.get(e);if(g!==void 0){var v=Fa,S=e;switch(e){case"keypress":if(Hr(n)===0)break e;case"keydown":case"keyup":v=Vm;break;case"focusin":S="focus",v=bo;break;case"focusout":S="blur",v=bo;break;case"beforeblur":case"afterblur":v=bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=qm;break;case Jd:case Xd:case Zd:v=Nm;break;case eu:v=Ym;break;case"scroll":v=Am;break;case"wheel":v=Gm;break;case"copy":case"cut":case"paste":v=zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=vs}var w=(t&4)!==0,U=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var u=d,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,p!==null&&(y=Wn(u,p),y!=null&&w.push(Xn(u,y,f)))),U)break;u=u.return}0<w.length&&(g=new v(g,S,null,n,m),c.push({event:g,listeners:w}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Ko&&(S=n.relatedTarget||n.fromElement)&&(It(S)||S[Ge]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=d,S=S?It(S):null,S!==null&&(U=Ot(S),S!==U||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=d),v!==S)){if(w=_s,y="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=vs,y="onPointerLeave",p="onPointerEnter",u="pointer"),U=v==null?g:Yt(v),f=S==null?g:Yt(S),g=new w(y,u+"leave",v,n,m),g.target=U,g.relatedTarget=f,y=null,It(m)===d&&(w=new w(p,u+"enter",S,n,m),w.target=f,w.relatedTarget=U,y=w),U=y,v&&S)t:{for(w=v,p=S,u=0,f=w;f;f=xt(f))u++;for(f=0,y=p;y;y=xt(y))f++;for(;0<u-f;)w=xt(w),u--;for(;0<f-u;)p=xt(p),f--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break t;w=xt(w),p=xt(p)}w=null}else w=null;v!==null&&$s(c,g,v,w,!1),S!==null&&U!==null&&$s(c,U,S,w,!0)}}e:{if(g=d?Yt(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var C=rg;else if(bs(g))if(qd)C=lg;else{C=og;var k=ig}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=ag);if(C&&(C=C(e,d))){Wd(c,C,n,m);break e}k&&k(e,g,d),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Ho(g,"number",g.value)}switch(k=d?Yt(d):window,e){case"focusin":(bs(k)||k.contentEditable==="true")&&(qt=k,na=d,Un=null);break;case"focusout":Un=na=qt=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Is(c,n,m);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":Is(c,n,m)}var I;if(Va)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wt?Vd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(xd&&n.locale!=="ko"&&(Wt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wt&&(I=Fd()):(lt=m,Ba="value"in lt?lt.value:lt.textContent,Wt=!0)),k=oi(d,E),0<k.length&&(E=new ys(E,e,null,n,m),c.push({event:E,listeners:k}),I?E.data=I:(I=Hd(n),I!==null&&(E.data=I)))),(I=Xm?Zm(e,n):eg(e,n))&&(d=oi(d,"onBeforeInput"),0<d.length&&(m=new ys("onBeforeInput","beforeinput",null,n,m),c.push({event:m,listeners:d}),m.data=I))}nu(c,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wn(e,n),o!=null&&r.unshift(Xn(e,o,i)),o=Wn(e,t),o!=null&&r.push(Xn(e,o,i))),e=e.return}return r}function xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $s(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=Wn(n,o),s!=null&&a.unshift(Xn(n,s,l))):i||(s=Wn(n,o),s!=null&&a.push(Xn(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var pg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function Ps(e){return(typeof e=="string"?e:""+e).replace(pg,`
`).replace(fg,"")}function zr(e,t,n){if(t=Ps(t),Ps(e)!==t&&n)throw Error(_(425))}function ai(){}var ia=null,oa=null;function aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var la=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,Ls=typeof Promise=="function"?Promise:void 0,gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ls<"u"?function(e){return Ls.resolve(null).then(e).catch(hg)}:la;function hg(e){setTimeout(function(){throw e})}function Do(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),je="__reactFiber$"+hn,Zn="__reactProps$"+hn,Ge="__reactContainer$"+hn,sa="__reactEvents$"+hn,_g="__reactListeners$"+hn,yg="__reactHandles$"+hn;function It(e){var t=e[je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ns(e);e!==null;){if(n=e[je])return n;e=Ns(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[je]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ii(e){return e[Zn]||null}var da=[],Kt=-1;function St(e){return{current:e}}function z(e){0>Kt||(e.current=da[Kt],da[Kt]=null,Kt--)}function N(e,t){Kt++,da[Kt]=e.current,e.current=t}var yt={},re=St(yt),ce=St(!1),$t=yt;function dn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function li(){z(ce),z(re)}function Rs(e,t,n){if(re.current!==yt)throw Error(_(168));N(re,t),N(ce,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,im(e)||"Unknown",i));return F({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,$t=re.current,N(re,e),N(ce,ce.current),!0}function zs(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=iu(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,z(ce),z(re),N(re,e)):z(ce),N(ce,n)}var We=null,Di=!1,Eo=!1;function ou(e){We===null?We=[e]:We.push(e)}function vg(e){Di=!0,ou(e)}function wt(){if(!Eo&&We!==null){Eo=!0;var e=0,t=P;try{var n=We;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,Di=!1}catch(i){throw We!==null&&(We=We.slice(e+1)),Md(za,wt),i}finally{P=t,Eo=!1}}return null}var Gt=[],Jt=0,di=null,ui=0,we=[],be=0,Pt=null,qe=1,Qe="";function Tt(e,t){Gt[Jt++]=ui,Gt[Jt++]=di,di=e,ui=t}function au(e,t,n){we[be++]=qe,we[be++]=Qe,we[be++]=Pt,Pt=e;var r=qe;e=Qe;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var o=32-Le(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qe=1<<32-Le(t)+i|n<<i|r,Qe=o+e}else qe=1<<o|n<<i|r,Qe=e}function Wa(e){e.return!==null&&(Tt(e,1),au(e,1,0))}function qa(e){for(;e===di;)di=Gt[--Jt],Gt[Jt]=null,ui=Gt[--Jt],Gt[Jt]=null;for(;e===Pt;)Pt=we[--be],we[be]=null,Qe=we[--be],we[be]=null,qe=we[--be],we[be]=null}var he=null,ge=null,O=!1,Pe=null;function lu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Os(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,he=e,ge=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,he=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:qe,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,he=e,ge=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(O){var t=ge;if(t){var n=t;if(!Os(e,t)){if(ua(e))throw Error(_(418));t=pt(n.nextSibling);var r=he;t&&Os(e,t)?lu(r,n):(e.flags=e.flags&-4097|2,O=!1,he=e)}}else{if(ua(e))throw Error(_(418));e.flags=e.flags&-4097|2,O=!1,he=e}}}function Us(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function Or(e){if(e!==he)return!1;if(!O)return Us(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!aa(e.type,e.memoizedProps)),t&&(t=ge)){if(ua(e))throw su(),Error(_(418));for(;t;)lu(e,t),t=pt(t.nextSibling)}if(Us(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=he?pt(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ge;e;)e=pt(e.nextSibling)}function un(){ge=he=null,O=!1}function Qa(e){Pe===null?Pe=[e]:Pe.push(e)}var Sg=Ze.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function js(e){var t=e._init;return t(e._payload)}function du(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=ht(p,u),p.index=0,p.sibling=null,p}function o(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,u,f,y){return u===null||u.tag!==6?(u=Ro(f,p.mode,y),u.return=p,u):(u=i(u,f),u.return=p,u)}function s(p,u,f,y){var C=f.type;return C===Ht?m(p,u,f.props.children,y,f.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&js(C)===u.type)?(y=i(u,f.props),y.ref=In(p,u,f),y.return=p,y):(y=Jr(f.type,f.key,f.props,null,p.mode,y),y.ref=In(p,u,f),y.return=p,y)}function d(p,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=zo(f,p.mode,y),u.return=p,u):(u=i(u,f.children||[]),u.return=p,u)}function m(p,u,f,y,C){return u===null||u.tag!==7?(u=Mt(f,p.mode,y,C),u.return=p,u):(u=i(u,f),u.return=p,u)}function c(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ro(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Cr:return f=Jr(u.type,u.key,u.props,null,p.mode,f),f.ref=In(p,null,u),f.return=p,f;case Vt:return u=zo(u,p.mode,f),u.return=p,u;case rt:var y=u._init;return c(p,y(u._payload),f)}if($n(u)||bn(u))return u=Mt(u,p.mode,f,null),u.return=p,u;Ur(p,u)}return null}function g(p,u,f,y){var C=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:l(p,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cr:return f.key===C?s(p,u,f,y):null;case Vt:return f.key===C?d(p,u,f,y):null;case rt:return C=f._init,g(p,u,C(f._payload),y)}if($n(f)||bn(f))return C!==null?null:m(p,u,f,y,null);Ur(p,f)}return null}function v(p,u,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(f)||null,l(u,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cr:return p=p.get(y.key===null?f:y.key)||null,s(u,p,y,C);case Vt:return p=p.get(y.key===null?f:y.key)||null,d(u,p,y,C);case rt:var k=y._init;return v(p,u,f,k(y._payload),C)}if($n(y)||bn(y))return p=p.get(f)||null,m(u,p,y,C,null);Ur(u,y)}return null}function S(p,u,f,y){for(var C=null,k=null,I=u,E=u=0,Q=null;I!==null&&E<f.length;E++){I.index>E?(Q=I,I=null):Q=I.sibling;var $=g(p,I,f[E],y);if($===null){I===null&&(I=Q);break}e&&I&&$.alternate===null&&t(p,I),u=o($,u,E),k===null?C=$:k.sibling=$,k=$,I=Q}if(E===f.length)return n(p,I),O&&Tt(p,E),C;if(I===null){for(;E<f.length;E++)I=c(p,f[E],y),I!==null&&(u=o(I,u,E),k===null?C=I:k.sibling=I,k=I);return O&&Tt(p,E),C}for(I=r(p,I);E<f.length;E++)Q=v(I,p,E,f[E],y),Q!==null&&(e&&Q.alternate!==null&&I.delete(Q.key===null?E:Q.key),u=o(Q,u,E),k===null?C=Q:k.sibling=Q,k=Q);return e&&I.forEach(function(et){return t(p,et)}),O&&Tt(p,E),C}function w(p,u,f,y){var C=bn(f);if(typeof C!="function")throw Error(_(150));if(f=C.call(f),f==null)throw Error(_(151));for(var k=C=null,I=u,E=u=0,Q=null,$=f.next();I!==null&&!$.done;E++,$=f.next()){I.index>E?(Q=I,I=null):Q=I.sibling;var et=g(p,I,$.value,y);if(et===null){I===null&&(I=Q);break}e&&I&&et.alternate===null&&t(p,I),u=o(et,u,E),k===null?C=et:k.sibling=et,k=et,I=Q}if($.done)return n(p,I),O&&Tt(p,E),C;if(I===null){for(;!$.done;E++,$=f.next())$=c(p,$.value,y),$!==null&&(u=o($,u,E),k===null?C=$:k.sibling=$,k=$);return O&&Tt(p,E),C}for(I=r(p,I);!$.done;E++,$=f.next())$=v(I,p,E,$.value,y),$!==null&&(e&&$.alternate!==null&&I.delete($.key===null?E:$.key),u=o($,u,E),k===null?C=$:k.sibling=$,k=$);return e&&I.forEach(function(Af){return t(p,Af)}),O&&Tt(p,E),C}function U(p,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Ht&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Cr:e:{for(var C=f.key,k=u;k!==null;){if(k.key===C){if(C=f.type,C===Ht){if(k.tag===7){n(p,k.sibling),u=i(k,f.props.children),u.return=p,p=u;break e}}else if(k.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&js(C)===k.type){n(p,k.sibling),u=i(k,f.props),u.ref=In(p,k,f),u.return=p,p=u;break e}n(p,k);break}else t(p,k);k=k.sibling}f.type===Ht?(u=Mt(f.props.children,p.mode,y,f.key),u.return=p,p=u):(y=Jr(f.type,f.key,f.props,null,p.mode,y),y.ref=In(p,u,f),y.return=p,p=y)}return a(p);case Vt:e:{for(k=f.key;u!==null;){if(u.key===k)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=i(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=zo(f,p.mode,y),u.return=p,p=u}return a(p);case rt:return k=f._init,U(p,u,k(f._payload),y)}if($n(f))return S(p,u,f,y);if(bn(f))return w(p,u,f,y);Ur(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,f),u.return=p,p=u):(n(p,u),u=Ro(f,p.mode,y),u.return=p,p=u),a(p)):n(p,u)}return U}var cn=du(!0),uu=du(!1),ci=St(null),pi=null,Xt=null,Ya=null;function Ka(){Ya=Xt=pi=null}function Ga(e){var t=ci.current;z(ci),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){pi=e,Ya=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ue=!0),e.firstContext=null)}function ke(e){var t=e._currentValue;if(Ya!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(pi===null)throw Error(_(308));Xt=e,pi.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Dt=null;function Ja(e){Dt===null?Dt=[e]:Dt.push(e)}function cu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ja(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(M&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,Ja(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}function Bs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var i=e.updateQueue;it=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,m=d=s=null,l=o;do{var g=l.lane,v=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,w=l;switch(g=t,v=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){c=S.call(v,c,g);break e}c=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,g=typeof S=="function"?S.call(v,c,g):S,g==null)break e;c=F({},c,g);break e;case 2:it=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=v,s=c):m=m.next=v,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(s=c),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nt|=a,e.lanes=a,e.memoizedState=c}}function Fs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var dr={},Fe=St(dr),er=St(dr),tr=St(dr);function Et(e){if(e===dr)throw Error(_(174));return e}function Za(e,t){switch(N(tr,t),N(er,e),N(Fe,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qo(t,e)}z(Fe),N(Fe,t)}function pn(){z(Fe),z(er),z(tr)}function fu(e){Et(tr.current);var t=Et(Fe.current),n=qo(t,e.type);t!==n&&(N(er,e),N(Fe,n))}function el(e){er.current===e&&(z(Fe),z(er))}var j=St(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function tl(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var qr=Ze.ReactCurrentDispatcher,Mo=Ze.ReactCurrentBatchConfig,Lt=0,B=null,W=null,Y=null,gi=!1,jn=!1,nr=0,wg=0;function ee(){throw Error(_(321))}function nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function rl(e,t,n,r,i,o){if(Lt=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qr.current=e===null||e.memoizedState===null?kg:Ig,e=n(r,i),jn){o=0;do{if(jn=!1,nr=0,25<=o)throw Error(_(301));o+=1,Y=W=null,t.updateQueue=null,qr.current=Dg,e=n(r,i)}while(jn)}if(qr.current=hi,t=W!==null&&W.next!==null,Lt=0,Y=W=B=null,gi=!1,t)throw Error(_(300));return e}function il(){var e=nr!==0;return nr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?B.memoizedState=Y=e:Y=Y.next=e,Y}function Ie(){if(W===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=Y===null?B.memoizedState:Y.next;if(t!==null)Y=t,W=e;else{if(e===null)throw Error(_(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},Y===null?B.memoizedState=Y=e:Y=Y.next=e}return Y}function rr(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Ie(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=W,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var m=d.lane;if((Lt&m)===m)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var c={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,B.lanes|=m,Nt|=m}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Re(r,t.memoizedState)||(ue=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,Nt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Po(e){var t=Ie(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Re(o,t.memoizedState)||(ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mu(){}function gu(e,t){var n=B,r=Ie(),i=t(),o=!Re(r.memoizedState,i);if(o&&(r.memoizedState=i,ue=!0),r=r.queue,ol(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,ir(9,_u.bind(null,n,r,i,t),void 0,null),K===null)throw Error(_(349));(Lt&30)!==0||hu(n,t,i)}return i}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _u(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&Su(e)}function yu(e,t,n){return n(function(){vu(t)&&Su(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function Su(e){var t=Je(e,1);t!==null&&Ne(t,e,1,-1)}function xs(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tg.bind(null,B,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wu(){return Ie().memoizedState}function Qr(e,t,n,r){var i=Ue();B.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var i=Ie();r=r===void 0?null:r;var o=void 0;if(W!==null){var a=W.memoizedState;if(o=a.destroy,r!==null&&nl(r,a.deps)){i.memoizedState=ir(t,n,o,r);return}}B.flags|=e,i.memoizedState=ir(1|t,n,o,r)}function Vs(e,t){return Qr(8390656,8,e,t)}function ol(e,t){return Ei(2048,8,e,t)}function bu(e,t){return Ei(4,2,e,t)}function Cu(e,t){return Ei(4,4,e,t)}function Tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ku(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,Tu.bind(null,t,e),n)}function al(){}function Iu(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Du(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return(Lt&21)===0?(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n):(Re(n,t)||(n=Ld(),B.lanes|=n,Nt|=n,e.baseState=!0),t)}function bg(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=Mo.transition;Mo.transition={};try{e(!1),t()}finally{P=n,Mo.transition=r}}function Au(){return Ie().memoizedState}function Cg(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))$u(t,n);else if(n=cu(e,t,n,r),n!==null){var i=le();Ne(n,e,r,i),Pu(n,t,r)}}function Tg(e,t,n){var r=gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))$u(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Re(l,a)){var s=t.interleaved;s===null?(i.next=i,Ja(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=cu(e,t,i,r),n!==null&&(i=le(),Ne(n,e,r,i),Pu(n,t,r))}}function Mu(e){var t=e.alternate;return e===B||t!==null&&t===B}function $u(e,t){jn=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}var hi={readContext:ke,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},kg={readContext:ke,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Vs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Tu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cg.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:al,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=bg.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=Ue();if(O){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),K===null)throw Error(_(349));(Lt&30)!==0||hu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Vs(yu.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,_u.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ue(),t=K.identifierPrefix;if(O){var n=Qe,r=qe;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ig={readContext:ke,useCallback:Iu,useContext:ke,useEffect:ol,useImperativeHandle:ku,useInsertionEffect:bu,useLayoutEffect:Cu,useMemo:Du,useReducer:$o,useRef:wu,useState:function(){return $o(rr)},useDebugValue:al,useDeferredValue:function(e){var t=Ie();return Eu(t,W.memoizedState,e)},useTransition:function(){var e=$o(rr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:gu,useId:Au,unstable_isNewReconciler:!1},Dg={readContext:ke,useCallback:Iu,useContext:ke,useEffect:ol,useImperativeHandle:ku,useInsertionEffect:bu,useLayoutEffect:Cu,useMemo:Du,useReducer:Po,useRef:wu,useState:function(){return Po(rr)},useDebugValue:al,useDeferredValue:function(e){var t=Ie();return W===null?t.memoizedState=e:Eu(t,W.memoizedState,e)},useTransition:function(){var e=Po(rr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:gu,useId:Au,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ai={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),i=gt(e),o=Ye(r,i);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,i),t!==null&&(Ne(t,e,i,r),Wr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),i=gt(e),o=Ye(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,i),t!==null&&(Ne(t,e,i,r),Wr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=gt(e),i=Ye(n,r);i.tag=2,t!=null&&(i.callback=t),t=ft(e,i,r),t!==null&&(Ne(t,e,r,n),Wr(t,e,r))}};function Hs(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(i,o):!0}function Lu(e,t,n){var r=!1,i=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=ke(o):(i=pe(t)?$t:re.current,r=t.contextTypes,o=(r=r!=null)?dn(e,i):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ai,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ai.enqueueReplaceState(t,t.state,null)}function ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ke(o):(o=pe(t)?$t:re.current,i.context=dn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ai.enqueueReplaceState(i,i.state,null),fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=rm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Lo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Eg=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,ka=r),ga(e,t)},n}function Ru(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Eg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xg.bind(null,e,t,n),t.then(e,e))}function Qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ys(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ag=Ze.ReactCurrentOwner,ue=!1;function ae(e,t,n,r){t.child=e===null?uu(t,null,n,r):cn(t,e.child,n,r)}function Ks(e,t,n,r,i){n=n.render;var o=t.ref;return an(t,i),r=rl(e,t,n,r,o,i),n=il(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(O&&n&&Wa(t),t.flags|=1,ae(e,t,r,i),t.child)}function Gs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ml(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zu(e,t,o,r,i)):(e=Jr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(a,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Gn(o,r)&&e.ref===t.ref)if(ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ue=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return ha(e,t,n,r,i)}function Ou(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},N(en,me),me|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,N(en,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,N(en,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,N(en,me),me|=r;return ae(e,t,i,n),t.child}function Uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ha(e,t,n,r,i){var o=pe(n)?$t:re.current;return o=dn(t,o),an(t,i),n=rl(e,t,n,r,o,i),r=il(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(O&&r&&Wa(t),t.flags|=1,ae(e,t,n,i),t.child)}function Js(e,t,n,r,i){if(pe(n)){var o=!0;si(t)}else o=!1;if(an(t,i),t.stateNode===null)Yr(e,t),Lu(t,n,r),ma(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=pe(n)?$t:re.current,d=dn(t,d));var m=n.getDerivedStateFromProps,c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Ws(t,a,r,d),it=!1;var g=t.memoizedState;a.state=g,fi(t,r,a,i),s=t.memoizedState,l!==r||g!==s||ce.current||it?(typeof m=="function"&&(fa(t,n,m,r),s=t.memoizedState),(l=it||Hs(t,n,l,r,g,s,d))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,pu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Me(t.type,l),a.props=d,c=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=ke(s):(s=pe(n)?$t:re.current,s=dn(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||g!==s)&&Ws(t,a,r,s),it=!1,g=t.memoizedState,a.state=g,fi(t,r,a,i);var S=t.memoizedState;l!==c||g!==S||ce.current||it?(typeof v=="function"&&(fa(t,n,v,r),S=t.memoizedState),(d=it||Hs(t,n,d,r,g,S,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return _a(e,t,n,r,o,i)}function _a(e,t,n,r,i,o){Uu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zs(t,n,!1),Xe(e,t,o);r=t.stateNode,Ag.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=cn(t,e.child,null,o),t.child=cn(t,null,l,o)):ae(e,t,l,o),t.memoizedState=r.state,i&&zs(t,n,!0),t.child}function ju(e){var t=e.stateNode;t.pendingContext?Rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rs(e,t.context,!1),Za(e,t.containerInfo)}function Xs(e,t,n,r,i){return un(),Qa(i),t.flags|=256,ae(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,n){var r=t.pendingProps,i=j.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),N(j,i&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Pi(a,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=va(n),t.memoizedState=ya,e):ll(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Mg(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ht(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ht(l,o):(o=Mt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?va(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ll(e,t){return t=Pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jr(e,t,n,r){return r!==null&&Qa(r),cn(t,e.child,null,n),e=ll(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Lo(Error(_(422))),jr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Pi({mode:"visible",children:r.children},i,0,null),o=Mt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&cn(t,e.child,null,a),t.child.memoizedState=va(a),t.memoizedState=ya,o);if((t.mode&1)===0)return jr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(_(419)),r=Lo(o,r,void 0),jr(e,t,a,r)}if(l=(a&e.childLanes)!==0,ue||l){if(r=K,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Je(e,i),Ne(r,e,i,-1))}return fl(),r=Lo(Error(_(421))),jr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ge=pt(i.nextSibling),he=t,O=!0,Pe=null,e!==null&&(we[be++]=qe,we[be++]=Qe,we[be++]=Pt,qe=e.id,Qe=e.overflow,Pt=t),t=ll(t,r.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function No(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=j.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(N(j,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),No(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}No(t,!0,n,null,o);break;case"together":No(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $g(e,t,n){switch(t.tag){case 3:ju(t),un();break;case 5:fu(t);break;case 1:pe(t.type)&&si(t);break;case 4:Za(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;N(ci,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(N(j,j.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Bu(e,t,n):(N(j,j.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);N(j,j.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(j,j.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return Xe(e,t,n)}var xu,Sa,Vu,Hu;xu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};Vu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Et(Fe.current);var o=null;switch(n){case"input":i=xo(e,i),r=xo(e,r),o=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":i=Wo(e,i),r=Wo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}Qo(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i?.[d],r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&R("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pg(e,t,n){var r=t.pendingProps;switch(qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return pe(t.type)&&li(),te(t),null;case 3:return r=t.stateNode,pn(),z(ce),z(re),tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pe!==null&&(Ea(Pe),Pe=null))),Sa(e,t),te(t),null;case 5:el(t);var i=Et(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return te(t),null}if(e=Et(Fe.current),Or(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[je]=t,r[Zn]=o,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(i=0;i<Ln.length;i++)R(Ln[i],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":ls(r,o),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},R("invalid",r);break;case"textarea":ds(r,o),R("invalid",r)}Qo(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&zr(r.textContent,l,e),i=["children",""+l]):Vn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&R("scroll",r)}switch(n){case"input":Tr(r),ss(r,o,!0);break;case"textarea":Tr(r),us(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ai)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[je]=t,e[Zn]=r,xu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Yo(n,r),n){case"dialog":R("cancel",e),R("close",e),i=r;break;case"iframe":case"object":case"embed":R("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ln.length;i++)R(Ln[i],e);i=r;break;case"source":R("error",e),i=r;break;case"img":case"image":case"link":R("error",e),R("load",e),i=r;break;case"details":R("toggle",e),i=r;break;case"input":ls(e,r),i=xo(e,r),R("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),R("invalid",e);break;case"textarea":ds(e,r),i=Wo(e,r),R("invalid",e);break;default:i=r}Qo(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?wd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vd(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hn(e,s):typeof s=="number"&&Hn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&R("scroll",e):s!=null&&$a(e,o,s,a))}switch(n){case"input":Tr(e),ss(e,r,!1);break;case"textarea":Tr(e),us(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Et(tr.current),Et(Fe.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[je]=t,(o=r.nodeValue!==n)&&(e=he,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[je]=t,t.stateNode=r}return te(t),null;case 13:if(z(j),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)su(),un(),t.flags|=98560,o=!1;else if(o=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[je]=t}else un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),o=!1}else Pe!==null&&(Ea(Pe),Pe=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(j.current&1)!==0?q===0&&(q=3):fl())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return pn(),Sa(e,t),e===null&&Jn(t.stateNode.containerInfo),te(t),null;case 10:return Ga(t.type._context),te(t),null;case 17:return pe(t.type)&&li(),te(t),null;case 19:if(z(j),o=t.memoizedState,o===null)return te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Dn(o,!1);else{if(q!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=mi(e),a!==null){for(t.flags|=128,Dn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return N(j,j.current&1|2),t.child}e=e.sibling}o.tail!==null&&V()>mn&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304)}else{if(!r)if(e=mi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!O)return te(t),null}else 2*V()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=V(),t.sibling=null,n=j.current,N(j,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(me&1073741824)!==0&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Lg(e,t){switch(qa(t),t.tag){case 1:return pe(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),z(ce),z(re),tl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return el(t),null;case 13:if(z(j),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(j),null;case 4:return pn(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return pl(),null;case 24:return null;default:return null}}var Br=!1,ne=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,b=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){x(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){x(e,t,r)}}var ed=!1;function Rg(e,t){if(ia=ri,e=Kd(),Ha(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,m=0,c=e,g=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)g=c,c=v;for(;;){if(c===e)break t;if(g===n&&++d===i&&(l=a),g===o&&++m===r&&(s=a),(v=c.nextSibling)!==null)break;c=g,g=c.parentNode}c=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},ri=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var S=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,U=S.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Me(t.type,w),U);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){x(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return S=ed,ed=!1,S}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wa(t,n,o)}i=i.next}while(i!==r)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[je],delete t[Zn],delete t[sa],delete t[_g],delete t[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}var G=null,$e=!1;function nt(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(bi,n)}catch{}switch(n.tag){case 5:ne||Zt(n,t);case 6:var r=G,i=$e;G=null,nt(e,t,n),G=r,$e=i,G!==null&&($e?(e=G,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):G.removeChild(n.stateNode));break;case 18:G!==null&&($e?(e=G,n=n.stateNode,e.nodeType===8?Do(e.parentNode,n):e.nodeType===1&&Do(e,n),Yn(e)):Do(G,n.stateNode));break;case 4:r=G,i=$e,G=n.stateNode.containerInfo,$e=!0,nt(e,t,n),G=r,$e=i;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&wa(n,t,a),i=i.next}while(i!==r)}nt(e,t,n);break;case 1:if(!ne&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){x(n,t,l)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,nt(e,t,n),ne=r):nt(e,t,n);break;default:nt(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ng),t.forEach(function(r){var i=Hg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:G=l.stateNode,$e=!1;break e;case 3:G=l.stateNode.containerInfo,$e=!0;break e;case 4:G=l.stateNode.containerInfo,$e=!0;break e}l=l.return}if(G===null)throw Error(_(160));Qu(o,a,i),G=null,$e=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){x(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Oe(e),r&4){try{Bn(3,e,e.return),Mi(3,e)}catch(w){x(e,e.return,w)}try{Bn(5,e,e.return)}catch(w){x(e,e.return,w)}}break;case 1:Ae(t,e),Oe(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Ae(t,e),Oe(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(w){x(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&hd(i,o),Yo(l,a);var d=Yo(l,o);for(a=0;a<s.length;a+=2){var m=s[a],c=s[a+1];m==="style"?wd(i,c):m==="dangerouslySetInnerHTML"?vd(i,c):m==="children"?Hn(i,c):$a(i,m,c,d)}switch(l){case"input":Vo(i,o);break;case"textarea":_d(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?tn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?tn(i,!!o.multiple,o.defaultValue,!0):tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zn]=o}catch(w){x(e,e.return,w)}}break;case 6:if(Ae(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){x(e,e.return,w)}}break;case 3:if(Ae(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(w){x(e,e.return,w)}break;case 4:Ae(t,e),Oe(e);break;case 13:Ae(t,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ul=V())),r&4&&nd(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||m,Ae(t,e),ne=d):Ae(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(b=e,m=e.child;m!==null;){for(c=b=m;b!==null;){switch(g=b,v=g.child,g.tag){case 0:case 11:case 14:case 15:Bn(4,g,g.return);break;case 1:Zt(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){x(r,n,w)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){id(c);continue}}v!==null?(v.return=g,b=v):id(c)}m=m.sibling}e:for(m=null,c=e;;){if(c.tag===5){if(m===null){m=c;try{i=c.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Sd("display",a))}catch(w){x(e,e.return,w)}}}else if(c.tag===6){if(m===null)try{c.stateNode.nodeValue=d?"":c.memoizedProps}catch(w){x(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;m===c&&(m=null),c=c.return}m===c&&(m=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ae(t,e),Oe(e),r&4&&nd(e);break;case 21:break;default:Ae(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qu(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var o=td(e);Ta(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=td(e);Ca(e,l,a);break;default:throw Error(_(161))}}catch(s){x(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zg(e,t,n){b=e,Ku(e,t,n)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Br;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ne;l=Br;var d=ne;if(Br=a,(ne=s)&&!d)for(b=i;b!==null;)a=b,s=a.child,a.tag===22&&a.memoizedState!==null?od(i):s!==null?(s.return=a,b=s):od(i);for(;o!==null;)b=o,Ku(o,t,n),o=o.sibling;b=i,Br=l,ne=d}rd(e,t,n)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,b=o):rd(e,t,n)}}function rd(e){for(;b!==null;){var t=b;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ne||Mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fs(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fs(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var c=m.dehydrated;c!==null&&Yn(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ne||t.flags&512&&ba(t)}catch(g){x(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function id(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function od(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mi(4,t)}catch(s){x(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){x(t,i,s)}}var o=t.return;try{ba(t)}catch(s){x(t,o,s)}break;case 5:var a=t.return;try{ba(t)}catch(s){x(t,a,s)}}}catch(s){x(t,t.return,s)}if(t===e){b=null;break}var l=t.sibling;if(l!==null){l.return=t.return,b=l;break}b=t.return}}var Og=Math.ceil,_i=Ze.ReactCurrentDispatcher,sl=Ze.ReactCurrentOwner,Te=Ze.ReactCurrentBatchConfig,M=0,K=null,H=null,J=0,me=0,en=St(0),q=0,or=null,Nt=0,$i=0,dl=0,Fn=null,de=null,ul=0,mn=1/0,He=null,yi=!1,ka=null,mt=null,Fr=!1,st=null,vi=0,xn=0,Ia=null,Kr=-1,Gr=0;function le(){return(M&6)!==0?V():Kr!==-1?Kr:Kr=V()}function gt(e){return(e.mode&1)===0?1:(M&2)!==0&&J!==0?J&-J:Sg.transition!==null?(Gr===0&&(Gr=Ld()),Gr):(e=P,e!==0||(e=window.event,e=e===void 0?16:Bd(e.type)),e)}function Ne(e,t,n,r){if(50<xn)throw xn=0,Ia=null,Error(_(185));ar(e,n,r),((M&2)===0||e!==K)&&(e===K&&((M&2)===0&&($i|=n),q===4&&at(e,J)),fe(e,r),n===1&&M===0&&(t.mode&1)===0&&(mn=V()+500,Di&&wt()))}function fe(e,t){var n=e.callbackNode;bm(e,t);var r=ni(e,e===K?J:0);if(r===0)n!==null&&fs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fs(n),t===1)e.tag===0?vg(ad.bind(null,e)):ou(ad.bind(null,e)),gg(function(){(M&6)===0&&wt()}),n=null;else{switch(Nd(r)){case 1:n=za;break;case 4:n=$d;break;case 16:n=ti;break;case 536870912:n=Pd;break;default:n=ti}n=rc(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(Kr=-1,Gr=0,(M&6)!==0)throw Error(_(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=ni(e,e===K?J:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=M;M|=2;var o=Xu();(K!==e||J!==t)&&(He=null,mn=V()+500,At(e,t));do try{Bg();break}catch(l){Ju(e,l)}while(!0);Ka(),_i.current=o,M=i,H!==null?t=0:(K=null,J=0,t=q)}if(t!==0){if(t===2&&(i=Zo(e),i!==0&&(r=i,t=Da(e,i))),t===1)throw n=or,At(e,0),at(e,r),fe(e,V()),n;if(t===6)at(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Ug(i)&&(t=Si(e,r),t===2&&(o=Zo(e),o!==0&&(r=o,t=Da(e,o))),t===1))throw n=or,At(e,0),at(e,r),fe(e,V()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:kt(e,de,He);break;case 3:if(at(e,r),(r&130023424)===r&&(t=ul+500-V(),10<t)){if(ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=la(kt.bind(null,e,de,He),t);break}kt(e,de,He);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Le(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Og(r/1960))-r,10<r){e.timeoutHandle=la(kt.bind(null,e,de,He),r);break}kt(e,de,He);break;case 5:kt(e,de,He);break;default:throw Error(_(329))}}}return fe(e,V()),e.callbackNode===n?Gu.bind(null,e):null}function Da(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Si(e,t),e!==2&&(t=de,de=n,t!==null&&Ea(t)),e}function Ea(e){de===null?de=e:de.push.apply(de,e)}function Ug(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Re(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~dl,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function ad(e){if((M&6)!==0)throw Error(_(327));ln();var t=ni(e,0);if((t&1)===0)return fe(e,V()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Zo(e);r!==0&&(t=r,n=Da(e,r))}if(n===1)throw n=or,At(e,0),at(e,t),fe(e,V()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,He),fe(e,V()),null}function cl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(mn=V()+500,Di&&wt())}}function Rt(e){st!==null&&st.tag===0&&(M&6)===0&&ln();var t=M;M|=1;var n=Te.transition,r=P;try{if(Te.transition=null,P=1,e)return e()}finally{P=r,Te.transition=n,M=t,(M&6)===0&&wt()}}function pl(){me=en.current,z(en)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mg(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:pn(),z(ce),z(re),tl();break;case 5:el(r);break;case 4:pn();break;case 13:z(j);break;case 19:z(j);break;case 10:Ga(r.type._context);break;case 22:case 23:pl()}n=n.return}if(K=e,H=e=ht(e.current,null),J=me=t,q=0,or=null,dl=$i=Nt=0,de=Fn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Dt=null}return e}function Ju(e,t){do{var n=H;try{if(Ka(),qr.current=hi,gi){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(Lt=0,Y=W=B=null,jn=!1,nr=0,sl.current=null,n===null||n.return===null){q=1,or=t,H=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=J,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,m=l,c=m.tag;if((m.mode&1)===0&&(c===0||c===11||c===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Qs(a);if(v!==null){v.flags&=-257,Ys(v,a,l,o,t),v.mode&1&&qs(o,d,t),t=v,s=d;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if((t&1)===0){qs(o,d,t),fl();break e}s=Error(_(426))}}else if(O&&l.mode&1){var U=Qs(a);if(U!==null){(U.flags&65536)===0&&(U.flags|=256),Ys(U,a,l,o,t),Qa(fn(s,l));break e}}o=s=fn(s,l),q!==4&&(q=2),Fn===null?Fn=[o]:Fn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Nu(o,s,t);Bs(o,p);break e;case 1:l=s;var u=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mt===null||!mt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ru(o,l,t);Bs(o,y);break e}}o=o.return}while(o!==null)}ec(n)}catch(C){t=C,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function Xu(){var e=_i.current;return _i.current=hi,e===null?hi:e}function fl(){(q===0||q===3||q===2)&&(q=4),K===null||(Nt&268435455)===0&&($i&268435455)===0||at(K,J)}function Si(e,t){var n=M;M|=2;var r=Xu();(K!==e||J!==t)&&(He=null,At(e,t));do try{jg();break}catch(i){Ju(e,i)}while(!0);if(Ka(),M=n,_i.current=r,H!==null)throw Error(_(261));return K=null,J=0,q}function jg(){for(;H!==null;)Zu(H)}function Bg(){for(;H!==null&&!fm();)Zu(H)}function Zu(e){var t=nc(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?ec(e):H=t,sl.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Pg(n,t,me),n!==null){H=n;return}}else{if(n=Lg(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,H=null;return}}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);q===0&&(q=5)}function kt(e,t,n){var r=P,i=Te.transition;try{Te.transition=null,P=1,Fg(e,t,n,r)}finally{Te.transition=i,P=r}return null}function Fg(e,t,n,r){do ln();while(st!==null);if((M&6)!==0)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cm(e,o),e===K&&(H=K=null,J=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fr||(Fr=!0,rc(ti,function(){return ln(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Te.transition,Te.transition=null;var a=P;P=1;var l=M;M|=4,sl.current=null,Rg(e,n),Yu(n,e),dg(oa),ri=!!ia,oa=ia=null,e.current=n,zg(n,e,i),mm(),M=l,P=a,Te.transition=o}else e.current=n;if(Fr&&(Fr=!1,st=e,vi=i),o=e.pendingLanes,o===0&&(mt=null),_m(n.stateNode,r),fe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yi)throw yi=!1,e=ka,ka=null,e;return(vi&1)!==0&&e.tag!==0&&ln(),o=e.pendingLanes,(o&1)!==0?e===Ia?xn++:(xn=0,Ia=e):xn=0,wt(),null}function ln(){if(st!==null){var e=Nd(vi),t=Te.transition,n=P;try{if(Te.transition=null,P=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,vi=0,(M&6)!==0)throw Error(_(331));var i=M;for(M|=4,b=e.current;b!==null;){var o=b,a=o.child;if((b.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(b=d;b!==null;){var m=b;switch(m.tag){case 0:case 11:case 15:Bn(8,m,o)}var c=m.child;if(c!==null)c.return=m,b=c;else for(;b!==null;){m=b;var g=m.sibling,v=m.return;if(Wu(m),m===d){b=null;break}if(g!==null){g.return=v,b=g;break}b=v}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var U=w.sibling;w.sibling=null,w=U}while(w!==null)}}b=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,b=a;else e:for(;b!==null;){if(o=b,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Bn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,b=p;break e}b=o.return}}var u=e.current;for(b=u;b!==null;){a=b;var f=a.child;if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,b=f;else e:for(a=u;b!==null;){if(l=b,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(C){x(l,l.return,C)}if(l===a){b=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,b=y;break e}b=l.return}}if(M=i,wt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(bi,e)}catch{}r=!0}return r}finally{P=n,Te.transition=t}}return!1}function ld(e,t,n){t=fn(n,t),t=Nu(e,t,1),e=ft(e,t,1),t=le(),e!==null&&(ar(e,1,t),fe(e,t))}function x(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=fn(n,e),e=Ru(t,e,1),t=ft(t,e,1),e=le(),t!==null&&(ar(t,1,e),fe(t,e));break}}t=t.return}}function xg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,K===e&&(J&n)===n&&(q===4||q===3&&(J&130023424)===J&&500>V()-ul?At(e,0):dl|=n),fe(e,t)}function tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Dr,Dr<<=1,(Dr&130023424)===0&&(Dr=4194304)));var n=le();e=Je(e,t),e!==null&&(ar(e,t,n),fe(e,n))}function Vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Hg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ue=!1,$g(e,t,n);ue=(e.flags&131072)!==0}else ue=!1,O&&(t.flags&1048576)!==0&&au(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yr(e,t),e=t.pendingProps;var i=dn(t,re.current);an(t,n),i=rl(null,t,r,e,i,n);var o=il();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,si(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xa(t),i.updater=Ai,t.stateNode=i,i._reactInternals=t,ma(t,r,e,n),t=_a(null,t,r,!0,o,n)):(t.tag=0,O&&o&&Wa(t),ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=qg(r),e=Me(r,e),i){case 0:t=ha(null,t,r,e,n);break e;case 1:t=Js(null,t,r,e,n);break e;case 11:t=Ks(null,t,r,e,n);break e;case 14:t=Gs(null,t,r,Me(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ha(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Js(e,t,r,i,n);case 3:e:{if(ju(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,pu(e,t),fi(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fn(Error(_(423)),t),t=Xs(e,t,r,n,i);break e}else if(r!==i){i=fn(Error(_(424)),t),t=Xs(e,t,r,n,i);break e}else for(ge=pt(t.stateNode.containerInfo.firstChild),he=t,O=!0,Pe=null,n=uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===i){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return fu(t),e===null&&ca(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,aa(r,i)?a=null:o!==null&&aa(r,o)&&(t.flags|=32),Uu(e,t),ae(e,t,a,n),t.child;case 6:return e===null&&ca(t),null;case 13:return Bu(e,t,n);case 4:return Za(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Ks(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,N(ci,r._currentValue),r._currentValue=a,o!==null)if(Re(o.value,a)){if(o.children===i.children&&!ce.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ye(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),pa(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),pa(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,an(t,n),i=ke(i),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Gs(e,t,r,i,n);case 15:return zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Yr(e,t),t.tag=1,pe(r)?(e=!0,si(t)):e=!1,an(t,n),Lu(t,r,i),ma(t,r,i,n),_a(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return Ou(e,t,n)}throw Error(_(156,t.tag))};function rc(e,t){return Md(e,t)}function Wg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Wg(e,t,n,r)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qg(e){if(typeof e=="function")return ml(e)?1:0;if(e!=null){if(e=e.$$typeof,e===La)return 11;if(e===Na)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ml(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ht:return Mt(n.children,i,o,t);case Pa:a=8,i|=8;break;case Uo:return e=Ce(12,n,t,i|2),e.elementType=Uo,e.lanes=o,e;case jo:return e=Ce(13,n,t,i),e.elementType=jo,e.lanes=o,e;case Bo:return e=Ce(19,n,t,i),e.elementType=Bo,e.lanes=o,e;case fd:return Pi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:a=10;break e;case pd:a=9;break e;case La:a=11;break e;case Na:a=14;break e;case rt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Pi(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=fd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ro(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function zo(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vo(0),this.expirationTimes=vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gl(e,t,n,r,i,o,a,l,s){return e=new Qg(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(o),e}function Yg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return yt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(pe(n))return iu(e,n,t)}return t}function oc(e,t,n,r,i,o,a,l,s){return e=gl(n,r,!0,e,i,o,a,l,s),e.context=ic(null),n=e.current,r=le(),i=gt(n),o=Ye(r,i),o.callback=t??null,ft(n,o,i),e.current.lanes=i,ar(e,i,r),fe(e,r),e}function Li(e,t,n,r){var i=t.current,o=le(),a=gt(i);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(i,t,a),e!==null&&(Ne(e,i,a,o),Wr(e,i,a)),a}function wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hl(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function Kg(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function _l(e){this._internalRoot=e}Ni.prototype.render=_l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Li(e,t,null,null)};Ni.prototype.unmount=_l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){Li(null,e,null,null)}),t[Ge]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&jd(e)}};function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dd(){}function Gg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=wi(a);o.call(d)}}var a=oc(t,r,e,0,null,!1,!1,"",dd);return e._reactRootContainer=a,e[Ge]=a.current,Jn(e.nodeType===8?e.parentNode:e),Rt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=wi(s);l.call(d)}}var s=gl(e,0,!1,null,null,!1,!1,"",dd);return e._reactRootContainer=s,e[Ge]=s.current,Jn(e.nodeType===8?e.parentNode:e),Rt(function(){Li(t,s,n,r)}),s}function zi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=wi(a);l.call(s)}}Li(t,a,e,i)}else a=Gg(n,t,e,i,r);return wi(a)}Rd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(Oa(t,n|1),fe(t,V()),(M&6)===0&&(mn=V()+500,wt()))}break;case 13:Rt(function(){var r=Je(e,1);if(r!==null){var i=le();Ne(r,e,1,i)}}),hl(e,1)}};Ua=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=le();Ne(t,e,134217728,n)}hl(e,134217728)}};zd=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=le();Ne(n,e,t,r)}hl(e,t)}};Od=function(){return P};Ud=function(e,t){var n=P;try{return P=e,t()}finally{P=n}};Go=function(e,t,n){switch(t){case"input":if(Vo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ii(r);if(!i)throw Error(_(90));gd(r),Vo(r,i)}}}break;case"textarea":_d(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Td=cl;kd=Rt;var Jg={usingClientEntryPoint:!1,Events:[sr,Yt,Ii,bd,Cd,cl]},En={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xg={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ed(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||Kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(An=__REACT_DEVTOOLS_GLOBAL_HOOK__,!An.isDisabled&&An.supportsFiber))try{bi=An.inject(Xg),Be=An}catch{}var An;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yl(t))throw Error(_(200));return Yg(e,t,null,n)};ve.createRoot=function(e,t){if(!yl(e))throw Error(_(299));var n=!1,r="",i=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gl(e,1,!1,null,null,n,!1,r,i),e[Ge]=t.current,Jn(e.nodeType===8?e.parentNode:e),new _l(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ed(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Rt(e)};ve.hydrate=function(e,t,n){if(!Ri(t))throw Error(_(200));return zi(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!yl(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ac;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=oc(t,null,e,1,n??null,i,!1,o,a),e[Ge]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ni(t)};ve.render=function(e,t,n){if(!Ri(t))throw Error(_(200));return zi(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(_(40));return e._reactRootContainer?(Rt(function(){zi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ve.unstable_batchedUpdates=cl;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return zi(e,t,n,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426"});var Oi=bt((sh,dc)=>{"use strict";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),dc.exports=lc()});var Sl=bt(vl=>{"use strict";var uc=Oi();vl.createRoot=uc.createRoot,vl.hydrateRoot=uc.hydrateRoot;var dh});var $l=jt(_r()),Df=jt(Oi()),Ef=jt(Sl());var Dl=jt(_r()),Kp=jt(Oi()),Gp=jt(Sl());var D={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},ie={basic:"basic",templates:"templates"},Ui=["children","children_error","custom"],ur=["all","string","int","time","date","command"];var De=[{type:"default_main",title:"Default Main",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"Not Understand",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"Finish Miss",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"Default Search",supportsLlm:!0,hasModal:!0},{type:"default_miss",title:"Default Miss",supportsLlm:!1,hasModal:!0},{type:"default_integrations",title:"Default Integrations",supportsLlm:!1,hasModal:!0}];var h=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),xe=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`uuid_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,wl=(e={})=>{let t=!!e.llm||!!String(e.system??"").trim()||!!String(e.model??"").trim();return{id:xe(),type:String(e.type??e.actionType??""),voiceResponse:String(e.voiceResponse??""),llmEnabled:t,system:String(e.system??""),model:String(e.model??"")}},bl=(e={})=>({id:xe(),uuid:String(e.uuid??""),displayValue:String(e.displayValue??""),mappingType:String(e.mappingType??"")}),Cl=(e={})=>({id:xe(),actionTypeComponent:String(e.actionTypeComponent??(String(e.actionType??e.mappingType??"").trim()?"custom":"children")),actionType:String(e.actionType??e.mappingType??""),mappingType:String(e.mappingType??e.actionType??""),uuid:String(e.uuid??""),displayValue:String(e.displayValue??"")}),pr=(e={})=>({id:xe(),subType:String(e.subType??e.subMappingType??""),subVoiceCommands:String(e.subVoiceCommands??"")}),cr=e=>(Array.isArray(e)?e:[]).filter(t=>t&&typeof t=="object"),ji=e=>De.find(t=>t.type===e)??De[0],cc=(e=null)=>{let t=e??{},n=typeof t.componentDialog=="object"&&t.componentDialog?t.componentDialog:typeof t.subComponentDialog=="object"&&t.subComponentDialog?t.subComponentDialog:{};return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDialog??""),type:String(n.actionType??""),endStatus:!!n.endStatus,forwardText:!!n.forwardText,answerType:String(n.answerType??"default"),voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),responseItems:cr(n.voiceResponseArray).map(r=>wl(r)),directControlItems:cr(n.nextDirectControl).map(r=>bl(r)),nextActionItems:cr(n.nextAction).map(r=>Cl(r))}},pc=(e=null)=>{let t=e??{},n=typeof t.directControl=="object"&&t.directControl?t.directControl:{},r=!!n.manual,i=n.subDirectControl;return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDirect??""),type:String(n.mappingType??n.actionType??""),typeData:ur.includes(String(n.valueType??n.typeData??"all"))?String(n.valueType??n.typeData??"all"):"all",voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),manual:r,subDirectControlItems:r?cr(i).map(o=>pr(o)):[],subDirectControl:r?"":String((typeof i=="string"?i:"")||n.subDirectControlArray||"")}},fc=(e=null)=>{let t=e??{};return{title:String(t.title??""),uuid:String(t.uuid??""),subDirectControlItems:cr(t.subDirectControl).map(n=>pr(n))}},Tl=(e,t=null)=>{let n=t??{},r=ji(e);return{_id:String(n._id??""),type:r.type,title:String(n.title??r.title),endStatus:!!n.endStatus,llmEnabled:r.supportsLlm?!!(n.llmEnabled??n.LLM??n.llm):!1,message:String(n.message??""),system:r.supportsLlm?String(n.system??""):"",model:r.supportsLlm?String(n.model??""):""}},mc=()=>De.reduce((e,t)=>(e[t.type]=Tl(t.type),e),{}),Bi=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??"").trim(),o=String(e.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let l=(Array.isArray(e.responseItems)?e.responseItems:[]).map(c=>{let g={actionType:String(c.type??c.actionType??"").trim(),voiceResponse:String(c.voiceResponse??"").trim()};return c.llmEnabled&&(g.llm=!0,g.system=String(c.system??"").trim(),g.model=String(c.model??"").trim()),g}),s=(Array.isArray(e.directControlItems)?e.directControlItems:[]).map(c=>({uuid:String(c.uuid??"").trim()})).filter(c=>c.uuid),d=(Array.isArray(e.nextActionItems)?e.nextActionItems:[]).map(c=>({actionTypeComponent:Ui.includes(String(c.actionTypeComponent??"").trim())?String(c.actionTypeComponent??"").trim():"children",actionType:String(c.actionType??c.mappingType??"").trim(),uuid:String(c.uuid??"").trim()})).filter(c=>c.uuid).map(c=>c.actionTypeComponent==="custom"?c:{...c,actionType:""}),m={endStatus:!!e.endStatus,actionType:r,forwardText:!!e.forwardText,answerType:o,voiceCommands:String(e.voiceCommands??"").split(";").map(c=>c.trim()).filter(c=>c),nextDirectControl:s,voiceResponseArray:l,nextAction:d};return{title:t,uuid:n,componentDialog:m,subComponentDialog:m}},Fi=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??e.mappingType??"").trim(),i=ur.includes(String(e.typeData??"all"))?String(e.typeData??"all"):"all",o=!!e.manual;if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let a={title:t,uuid:n,directControl:{mappingType:r,valueType:i}};if(i==="command"){let l=String(e.voiceCommands??"").trim();a.directControl.voiceCommands=l?l.split(";").map(s=>s.trim()).filter(s=>s):null,a.directControl.manual=o,o?a.directControl.subDirectControl=(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((s,d)=>{let m=String(s.subType??s.subMappingType??"").trim(),c=String(s.subVoiceCommands??"").trim();return{id:Number(s.id)||d+1,subMappingType:m||null,title:null,subVoiceCommands:c||null}}).filter(s=>s.subMappingType||s.subVoiceCommands):a.directControl.subDirectControl=String(e.subDirectControl??"").trim()}return a},gc=(e={})=>{let t=String(e.title??"").trim();if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let n=String(e.uuid??"").trim();if(n||(n=xe()),!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title:t,uuid:n,subDirectControl:(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((r,i)=>{let o=String(r.subType??r.subMappingType??"").trim(),a=String(r.subVoiceCommands??"").trim();return{id:Number(r.id)||i+1,subMappingType:o||null,title:null,subVoiceCommands:a||null}}).filter(r=>r.subMappingType||r.subVoiceCommands)}},hc=(e,t={})=>{let n=ji(e),r={actionType:n.type,title:String(t.title??n.title).trim()||n.title,endStatus:!!t.endStatus,message:String(t.message??"").trim()||null};return n.supportsLlm&&(r.LLM=!!t.llmEnabled,r.llm=r.LLM,r.system=r.LLM&&String(t.system??"").trim()||null,r.model=r.LLM&&String(t.model??"").trim()||null),r};var Ut=(e,t)=>{let n=t===D.secondary,r=e._pageByTab[t]||1,i=e._totalByTab[t]||0,o=e._totalPagesByTab[t]||1,a=n?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",l="/api/cms/commands?page=1&pageSize=20",s=Math.max(1,o||Math.ceil((i||1)/20)),d=e._buildPaginationItems(r,s),m=e._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._commands.length?e._commands.map(c=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit" data-command-id="${h(c._id)}">
              <span class="command-item-title">${h(c.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${h(c.componentDialog?.actionType||c.subComponentDialog?.actionType||c.componentDialog?.type||c.subComponentDialog?.type||"actionType: -")}</span>
                <span>${h(c.uuid||c.uuidDialog||"uuid: -")}</span>
                <span>${c.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="command"
              data-item-id="${h(c._id)}"
              data-item-title="${h(c.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
              data-item-collection="${n?"sub-commands":"commands"}"
              data-item-status="${c.status?"true":"false"}"
              aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
              title="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
            >...</button>
          </div>
        `).join(""):'<div class="empty">\u041A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
    <section class="hero-card">
      <h2>${a}</h2>
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
          ${d.map(c=>c==="ellipsis"?'<span class="pagination-ellipsis">...</span>':`<button type="button" class="ghost pagination-page ${c===r?"active":""}" data-action="goto-page" data-page="${c}" ${e._loading?"disabled":""}>${c}</button>`).join("")}
        </div>
        <button type="button" class="ghost" data-action="next" ${r>=s||e._loading?"disabled":""}>&gt;</button>
      </div>
    </section>
  `};var xi=e=>Ut(e,D.primary);var Vi=e=>Ut(e,D.secondary);var Hi=(e,t)=>`
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
`,Wi=(e,t)=>`
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
    ${e._directSubtab===ie.basic?Hi(e,t):Wi(e,n)}
  `};var Qi=e=>{let t=De.map((n,r)=>{let i=e._defaultsByType[n.type]??e._newDefaultsDraft(n.type),o=String(i.title||n.title||n.type).trim(),a=[`actionType: ${n.type}`,`endStatus: ${i.endStatus?"on":"off"}`];return n.supportsLlm&&a.push(`LLM: ${i.llmEnabled?"on":"off"}`),`
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${h(n.type)}" ${e._defaultsLoading?"disabled":""}>
        <span class="command-item-title">${r+1}. ${h(o)}</span>
        <span class="command-item-meta">
          ${a.map(l=>`<span>${h(l)}</span>`).join("")}
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
  `};var kl=(e,t)=>`
  <section class="hero-card">
    <h2>${h(e)}</h2>
    <p>${h(t)}</p>
  </section>
  <section class="help-card">
    <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
  </section>
`;var _c=e=>e._tab===D.primary?xi(e):e._tab===D.secondary?Vi(e):e._tab===D.direct?qi(e):Qi(e);var yc=e=>{e._addModalBackdrop(),e._modalOpen=!0,e._modalMode="create",e._editingId="",e._draft=e._newDraft(),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render()},vc=(e,t)=>{e._addModalBackdrop();let n=e._commands.find(r=>String(r._id??"")===String(t??""));if(!n){e._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._modalOpen=!0,e._modalMode="edit",e._editingId=String(n._id??""),e._editingStatus=!!n.status,e._draft=e._newDraft(n),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render(),e._hydrateDirectControlTitles(),e._hydrateNextActionTitles()},Sc=e=>{e._modalSaving||(e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._draft=e._newDraft(),e._render())},wc=async e=>{if(!e._apiUrl("")){e._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildPayload()}catch(l){e._error=l?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",e._render();return}let r=e._modalMode==="edit"&&e._editingId,i=e._tab===D.secondary?"sub-commands":"commands",o=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._editingId)}`):e._apiUrl(`/api/cms/${i}`),a=r?"PUT":"POST";e._modalSaving=!0,e._error="",e._render();try{let l=await fetch(o,{method:a,headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${l.status}`);e._status=r?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft(),await e._loadPage(e._pageByTab[e._tab]||1)}catch(l){e._error=l?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",e._render()}finally{e._modalSaving=!1,e._render()}},bc=async e=>{if(!e._editingId||!confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439?"))return;let t=e._tab===D.secondary?"sub-commands":"commands";e._modalSaving=!0,e._error="",e._render();try{await e._deleteItem(t,e._editingId),e._commands=e._commands.filter(n=>String(n._id??"")!==String(e._editingId)),e._status="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft()}catch(n){e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."}finally{e._modalSaving=!1,e._render()}};var Cc=e=>{e._updateDraft("uuid",xe()),e._render()},Tc=e=>{let t=Array.isArray(e._draft.responseItems)?e._draft.responseItems:[],n=wl();e._draft={...e._draft,responseItems:[...t,n]},e._openResponseItemIds.add(n.id),e._render()},kc=(e,t)=>{let n=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,responseItems:n},e._openResponseItemIds=new Set([...e._openResponseItemIds].filter(r=>e._draft.responseItems.some(i=>i.id===r))),e._render()},Ic=(e,t,n,r)=>{let i=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map(o=>o.id!==t?o:{...o,[n]:r});e._draft={...e._draft,responseItems:i}},Dc=(e,t)=>{e._openResponseItemIds.has(t)?e._openResponseItemIds.delete(t):e._openResponseItemIds.add(t),e._render()},Ec=e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[],n=bl();e._draft={...e._draft,directControlItems:[...t,n]},e._openDirectControlItemIds.add(n.id),e._render()},Ac=(e,t)=>{let n=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,directControlItems:n},e._openDirectControlItemIds=new Set([...e._openDirectControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},Mc=(e,t,n)=>{let r=String(t??"").trim(),i=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(o=>{if(o.id!==r)return o;let a=String(n??""),l=a.trim(),s=String(o.uuid??"").trim();return{...o,uuid:a,displayValue:l&&l===s?o.displayValue:"",mappingType:l&&l===s?o.mappingType:""}});e._draft={...e._draft,directControlItems:i},n.length>0&&e._debouncedPerformUuidSearch(n,"directControl",r)},$c=(e,t)=>{e._openDirectControlItemIds.has(t)?e._openDirectControlItemIds.delete(t):e._openDirectControlItemIds.add(t),e._render()},Pc=e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[],n=Cl();e._draft={...e._draft,nextActionItems:[...t,n]},e._openNextActionItemIds.add(n.id),e._render()},Lc=(e,t)=>{let n=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,nextActionItems:n},e._openNextActionItemIds=new Set([...e._openNextActionItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},Nc=(e,t,n,r)=>{let i=String(t??"").trim(),o=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(a=>{if(a.id!==i)return a;if(n==="uuid"){let l=String(r??""),s=l.trim(),d=String(a.uuid??"").trim();return{...a,uuid:l,displayValue:s&&s===d?a.displayValue:"",mappingType:s&&s===d?a.mappingType:"",actionType:s&&s===d?a.actionType:""}}if(n==="actionTypeComponent"){let l=String(r??"").trim();return l==="custom"?{...a,actionTypeComponent:l}:{...a,actionTypeComponent:l,actionType:""}}return{...a,[n]:r}});e._draft={...e._draft,nextActionItems:o},e._render(),n==="uuid"&&r.length>0&&e._debouncedPerformUuidSearch(r,"nextAction",i)},Rc=(e,t)=>{e._openNextActionItemIds.has(t)?e._openNextActionItemIds.delete(t):e._openNextActionItemIds.add(t),e._render()};var zc=(e,{kind:t,id:n,title:r,collection:i,status:o})=>{n&&(e._addModalBackdrop(),e._itemActionsModalOpen=!0,e._itemActionsSaving=!1,e._itemActionsKind=String(t??""),e._itemActionsId=String(n??""),e._itemActionsTitle=String(r??"").trim(),e._itemActionsCollection=String(i??""),e._itemActionsStatus=!!o,e._render())},Oc=e=>{e._itemActionsSaving||(e._removeModalBackdrop(),e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsKind="",e._itemActionsId="",e._itemActionsTitle="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._render())},Uc=async(e,t,n,r)=>{let i=e._commands.find(d=>String(d._id??"")===String(t??""));if(!i)throw new Error("\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let o=e._newDraft(i),a=Bi(o);n==="sub-commands"?delete a.componentDialog:delete a.subComponentDialog,a.status=!!r;let l=e._apiUrl(`/api/cms/${encodeURIComponent(n)}/${encodeURIComponent(t)}`),s=await fetch(l,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(a)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430: HTTP ${s.status}`);e._commands=e._commands.map(d=>String(d._id??"")===String(t??"")?{...d,status:!!r}:d),String(e._editingId??"")===String(t??"")&&(e._editingStatus=!!r)},jc=async(e,t,n)=>{let r=e._directCommands.find(s=>String(s._id??"")===String(t??""));if(!r)throw new Error("Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let i=e._newDirectDraft(r),o={...Fi(i),status:!!n},a=e._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(t)}`),l=await fetch(a,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(o)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);e._directCommands=e._directCommands.map(s=>String(s._id??"")===String(t??"")?{...s,status:!!n}:s),String(e._directEditingId??"")===String(t??"")&&(e._directEditingStatus=!!n)},Bc=async e=>{if(e._itemActionsSaving||!e._itemActionsId)return;let t=!e._itemActionsStatus;e._itemActionsSaving=!0,e._error="",e._directError="",e._render();try{if(e._itemActionsKind==="command")await e._updateCommandStatusById(e._itemActionsId,e._itemActionsCollection||"commands",t);else if(e._itemActionsKind==="direct")await e._updateDirectStatusById(e._itemActionsId,t);else throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.");e._itemActionsStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442.",e._closeItemActionsModal()}catch(n){e._itemActionsKind==="direct"?e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.":e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.",e._itemActionsSaving=!1,e._render()}},Fc=async e=>{if(!(e._modalSaving||!e._editingId)){e._modalSaving=!0,e._error="",e._render();try{let t=!e._editingStatus,n=e._tab===D.secondary?"sub-commands":"commands";await e._updateCommandStatusById(e._editingId,n,t),e._editingStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442."}catch(t){e._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."}finally{e._modalSaving=!1,e._render()}}};var xc=(e,t)=>{e._directSubtab=t,e._directError="",t===ie.basic&&!e._directCommands.length&&!e._directLoading?e._loadDirectCommands():t===ie.templates&&!e._templateCommands.length&&!e._templateLoading&&e._loadTemplateCommands(),e._render()},Vc=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls?page=1&pageSize="+20);if(!t){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._directLoading=!0,e._directError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];e._directCommands=i,e._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){e._directCommands=[],e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directLoading=!1,e._render()}},Hc=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls-sample?page=1&pageSize="+20);if(!t){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._templateLoading=!0,e._templateError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];e._templateCommands=i,e._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){e._templateCommands=[],e._templateError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B."}finally{e._templateLoading=!1,e._render()}},Wc=e=>{e._directLoading||(e._directCommands=[],e._loadDirectCommands())},qc=e=>{e._templateLoading||(e._templateCommands=[],e._loadTemplateCommands())},Qc=e=>{e._addModalBackdrop(),e._directModalOpen=!0,e._directModalMode="create",e._directEditingId="",e._directDraft=e._newDirectDraft(),e._openDirectSubControlItemIds=new Set,e._directError="",e._render()},Yc=(e,t)=>{e._addModalBackdrop();let n=e._directCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._directModalOpen=!0,e._directModalMode="edit",e._directEditingId=String(n._id??""),e._directEditingStatus=!!n.status,e._directDraft=e._newDirectDraft(n),e._openDirectSubControlItemIds=new Set,e._directError="",e._render(),e._hydrateSelectedSubDirectControlSample()},Kc=e=>{e._directModalSaving||(e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._subDirectControlSampleOptions=[],e._render())},Gc=(e,t,n)=>{e._directDraft={...e._directDraft,[t]:n}},Jc=async e=>{let t=e._directDraft.typeData==="command",n=!!e._directDraft.manual,r=String(e._directDraft.subDirectControl??"").trim();if(!t||n||!r||(Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]).some(s=>String(s?.uuid??"").trim()===r))return;let a=(await e._searchUuid(r,["sub-direct-controls-sample"])).find(s=>String(s?.uuid??"").trim()===r);if(!a)return;let l={...a,uuid:String(a.uuid??"").trim(),title:String(a.title??"").trim()};e._subDirectControlSampleOptions=[l,...Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]],e._render()},Xc=e=>{e._updateDirectDraft("uuid",xe()),e._render()},Zc=e=>{e._updateTemplateDraft("uuid",xe()),e._render()},ep=e=>{let t=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],n=pr();e._directDraft={...e._directDraft,subDirectControlItems:[...t,n]},e._openDirectSubControlItemIds.add(n.id),e._render()},tp=(e,t)=>{let n=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._directDraft={...e._directDraft,subDirectControlItems:n},e._openDirectSubControlItemIds=new Set([...e._openDirectSubControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},np=(e,t)=>{e._openDirectSubControlItemIds.has(t)?e._openDirectSubControlItemIds.delete(t):e._openDirectSubControlItemIds.add(t),e._render()},rp=(e,t,n,r)=>{let i=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);e._directDraft={...e._directDraft,subDirectControlItems:i}},ip=async e=>{if(!e._searchLoading){e._searchLoading=!0,e._searchActiveType="subDirectControlSample",e._searchActiveItemId=null,e._render();try{let t=await e._searchUuid("",["sub-direct-controls-sample"]);e._subDirectControlSampleOptions=t}catch{e._subDirectControlSampleOptions=[]}finally{e._searchLoading=!1,e._render()}}},op=async e=>{if(!(e._directModalSaving||!e._directEditingId)){e._directModalSaving=!0,e._directError="",e._render();try{let t=!e._directEditingStatus;await e._updateDirectStatusById(e._directEditingId,t),e._directEditingStatus=t,e._status=t?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043A\u0440\u044B\u0442\u0430."}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directModalSaving=!1,e._render()}}},ap=async e=>{if(!e._apiUrl("")){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildDirectPayload()}catch(r){e._directError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._directModalSaving=!0,e._directError="",e._render();try{let r=e._directModalMode==="edit"&&e._directEditingId,i="sub-direct-controls",o=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._directEditingId)}`):e._apiUrl(`/api/cms/${i}`),l=await fetch(o,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._directCommands=e._directCommands.map(m=>String(m._id??"")===String(e._directEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._directEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??n.uuidDirect??Date.now());e._directCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._directCommands]}await e._loadDirectCommands(),e._status=r?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(r){e._directError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}},lp=async e=>{if(e._directEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443?")){e._directModalSaving=!0,e._directError="",e._render();try{await e._deleteItem("sub-direct-controls",e._directEditingId),e._directCommands=e._directCommands.filter(t=>String(t._id??"")!==String(e._directEditingId)),e._status="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}}},sp=e=>{e._addModalBackdrop(),e._templateModalOpen=!0,e._templateModalMode="create",e._templateEditingId="",e._templateDraft=e._newTemplateDraft(),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},dp=(e,t)=>{e._addModalBackdrop();let n=e._templateCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",e._render();return}e._templateModalOpen=!0,e._templateModalMode="edit",e._templateEditingId=String(n._id??""),e._templateDraft=e._newTemplateDraft(n),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},up=e=>{e._templateModalSaving||(e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._render())},cp=(e,t,n)=>{e._templateDraft={...e._templateDraft,[t]:n}},pp=e=>{let t=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[],n=pr();e._templateDraft={...e._templateDraft,subDirectControlItems:[...t,n]},e._openTemplateSubControlItemIds.add(n.id),e._render()},fp=(e,t)=>{let n=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._templateDraft={...e._templateDraft,subDirectControlItems:n},e._openTemplateSubControlItemIds=new Set([...e._openTemplateSubControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},mp=(e,t)=>{e._openTemplateSubControlItemIds.has(t)?e._openTemplateSubControlItemIds.delete(t):e._openTemplateSubControlItemIds.add(t),e._render()},gp=(e,t,n,r)=>{let i=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);e._templateDraft={...e._templateDraft,subDirectControlItems:i}},hp=async e=>{if(!e._apiUrl("")){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildTemplatePayload()}catch(r){e._templateError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",e._render();return}e._templateModalSaving=!0,e._templateError="",e._render();try{let r=e._templateModalMode==="edit"&&e._templateEditingId,i="sub-direct-controls-sample",o=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._templateEditingId)}`):e._apiUrl(`/api/cms/${i}`),l=await fetch(o,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._templateCommands=e._templateCommands.map(m=>String(m._id??"")===String(e._templateEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._templateEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??Date.now());e._templateCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._templateCommands]}await e._loadTemplateCommands(),e._status=r?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(r){e._templateError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}},_p=async e=>{if(e._templateEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D?")){e._templateModalSaving=!0,e._templateError="",e._render();try{await e._deleteItem("sub-direct-controls-sample",e._templateEditingId),e._templateCommands=e._templateCommands.filter(t=>String(t._id??"")!==String(e._templateEditingId)),e._status="\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(t){e._templateError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}}};var yp=async(e,t,n,r=null)=>{if(!t||t.length===0){e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render();return}e._searchActiveItemId=r,e._searchActiveType=n,e._searchLoading=!0;try{let i=[];n==="directControl"?i=["sub-direct-controls"]:n==="nextAction"?i=["sub-commands","commands"]:n==="subDirectControlSample"&&(i=["sub-direct-controls-sample"]);let o=await e._searchUuid(t,i);if(e._searchResults=o,n==="directControl"&&r){let a=String(t??"").trim(),l=o.find(s=>String(s?.uuid??"").trim()===a);if(l&&(l?.title||l?.mappingType||l?.actionType||l?.type)){let s=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(d=>d.id===r?{...d,displayValue:String(l.title??d.displayValue??""),mappingType:String(l.mappingType??l.actionType??l.type??"")}:d);e._draft={...e._draft,directControlItems:s}}}}catch{e._searchResults=[]}finally{e._searchLoading=!1,e._render()}},vp=(e,t,n,r=null)=>{e._searchDebounceTimer&&clearTimeout(e._searchDebounceTimer),e._searchDebounceTimer=setTimeout(()=>{e._performUuidSearch(t,n,r)},300)},Sp=(e,t,n)=>{let r=String(t??"").trim(),i=e._searchActiveType;if(i==="directControl"){let o=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(a=>a.id===r?{...a,uuid:String(n.uuid??""),displayValue:String(n.title??""),mappingType:String(n.mappingType??n.actionType??n.type??"")}:a);e._draft={...e._draft,directControlItems:o}}else if(i==="nextAction"){e._updateNextActionItem(r,"displayValue",n.title),e._updateNextActionItem(r,"mappingType",String(n.mappingType??"")),e._updateNextActionItem(r,"actionType",String(n.mappingType??""));let o=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(a=>a.id===r?{...a,uuid:n.uuid}:a);e._draft={...e._draft,nextActionItems:o}}e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render()},wp=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)return[];try{let i=Array.isArray(n)?n.join(","):String(n),o=`${r}/api/cms/search?collections=${encodeURIComponent(i)}&text=${encodeURIComponent(t)}`,a=await fetch(o,{method:"GET",headers:e._apiHeaders(!1)});if(!a.ok)return[];let l=await a.json();return Array.isArray(l.data)?l.data:Array.isArray(l)?l:[]}catch{return[]}},bp=async(e,t,n)=>{let r=String(t??"").trim();if(!r)return"";let i=await e._searchUuid(r,n),o=i.find(a=>String(a?.uuid??"").trim()===r);return String(o?.title??i[0]?.title??"").trim()},Cp=async e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let i=String(r.uuid??"").trim(),o=String(r.displayValue??"").trim();if(!i||o)return r;let a=await e._resolveTitleByUuid(i,["sub-direct-controls"]);return{...r,displayValue:a}}));e._draft={...e._draft,directControlItems:n},e._render()},Tp=async e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let i=String(r.uuid??"").trim(),o=String(r.displayValue??"").trim();if(!i||o)return r;let a=await e._resolveTitleByUuid(i,["sub-commands","commands"]);return{...r,displayValue:a}}));e._draft={...e._draft,nextActionItems:n},e._render()},kp=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)throw new Error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.");let i=`${r}/api/cms/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,o=await fetch(i,{method:"DELETE",headers:e._apiHeaders(!0)});if(!o.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F: HTTP ${o.status}`)};var Ip=async e=>{let t=De.map(r=>r.type).join(","),n=e._apiUrl(`/api/cms/search?actionType=${encodeURIComponent(t)}&collections=settings-dialog`);if(!n){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._defaultsLoading=!0,e._defaultsError="",e._render();try{let r=await fetch(n,{method:"GET",headers:e._apiHeaders(!1)});if(!r.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${r.status}`);let i=await r.json(),o=Array.isArray(i?.data)?i.data:Array.isArray(i)?i:[],a=e._newDefaultsState(),l=new Set,s=De.map(m=>m.type),d=(m,c)=>{let g=String(m?.actionType??m?.componentDialog?.actionType??"").trim();if(g&&a[g]&&!l.has(g))return g;let v=De.find(w=>String(w.title).trim()===String(m?.title??"").trim()&&!l.has(w.type));if(v?.type&&a[v.type])return v.type;let S=s[c];return S&&a[S]&&!l.has(S)?S:""};o.forEach((m,c)=>{let g=d(m,c);g&&(l.add(g),a[g]=e._newDefaultsDraft(g,m))}),e._defaultsByType=a,e._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}catch(r){e._defaultsError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._defaultsLoading=!1,e._render()}},Dp=(e,t)=>{let n=e._defaultConfig(t);e._addModalBackdrop(),e._defaultsActiveType=n.type,e._defaultsActiveId=String(e._defaultsByType[n.type]?._id??""),e._defaultsModalOpen=!0,e._defaultsError="",e._render()},Ep=e=>{e._defaultsModalSaving||(e._removeModalBackdrop(),e._defaultsModalOpen=!1,e._render())},Ap=(e,t,n)=>{let r=e._defaultsActiveType,i=e._defaultsByType[r]??e._newDefaultsDraft(r);e._defaultsByType={...e._defaultsByType,[r]:{...i,[t]:n}}},Mp=async(e,t,n=!1)=>{let r=e._defaultConfig(t);if(e._defaultsActiveType=r.type,e._defaultsActiveId=String(e._defaultsByType[r.type]?._id??e._defaultsActiveId??""),!e._apiUrl("")){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let o;try{o=e._buildDefaultsPayload()}catch(a){e._defaultsError=a?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._defaultsModalSaving=n,e._defaultsLoading=!n,e._defaultsError="",e._render();try{let a=!!e._defaultsActiveId,l="settings-dialog",s=a?e._apiUrl(`/api/cms/${l}/${encodeURIComponent(e._defaultsActiveId)}`):e._apiUrl(`/api/cms/${l}`),m=await fetch(s,{method:a?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(o)});if(!m.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${m.status}`);let c=await m.json().catch(()=>null),g=c?.data&&typeof c.data=="object"?c.data:c&&typeof c=="object"?c:null,v=e._defaultsActiveType,S=e._defaultsByType[v]??e._newDefaultsDraft(v),w=String(g?._id??S._id??e._defaultsActiveId??"");e._defaultsByType={...e._defaultsByType,[v]:{...S,...g&&typeof g=="object"?g:o,_id:w}},e._defaultsActiveId=w,await e._reloadDefaultsCommands(),e._status=a?"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",n&&(e._removeModalBackdrop(),e._defaultsModalOpen=!1)}catch(a){e._defaultsError=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._defaultsModalSaving=!1,e._defaultsLoading=!1,e._render()}},$p=async e=>{await e._saveDefaultsType(e._defaultsActiveType,!0)};var Pp=(e,t,n)=>{t.querySelectorAll("[data-field]").forEach(r=>{let i=r.dataset.field,o=a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;e._updateDraft(i,l)};n(r,"input",o),n(r,"change",o)}),t.querySelectorAll("[data-direct-field]").forEach(r=>{let i=r.dataset.directField,o=a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;e._updateDirectDraft(i,l),i==="typeData"&&(a.currentTarget.value!=="command"?(e._updateDirectDraft("manual",!1),e._updateDirectDraft("voiceCommands","")):(e._searchResults=[],e._searchActiveType=null)),i==="subDirectControl"&&l.length>0&&e._performUuidSearch(l,"subDirectControlSample"),(r.type==="checkbox"||r.tagName==="SELECT")&&e._render()};n(r,"input",o),n(r,"change",o),i==="subDirectControl"&&(n(r,"focus",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}),n(r,"click",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}))}),t.querySelectorAll("[data-template-field]").forEach(r=>{let i=r.dataset.templateField,o=a=>e._updateTemplateDraft(i,a.currentTarget.value);n(r,"input",o),n(r,"change",o)}),t.querySelectorAll("[data-defaults-field]").forEach(r=>{let i=r.dataset.defaultsField,o=a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;e._updateDefaultsDraft(i,l);let s=e._defaultConfig(e._defaultsActiveType);i==="llmEnabled"&&r.type==="checkbox"&&s.supportsLlm&&e._render()};n(r,"input",o),(r.type==="checkbox"||r.tagName==="SELECT")&&n(r,"change",o)}),t.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(r=>{let i=r.dataset.responseItemId,o=r.dataset.responseItemField,a=l=>{let s=r.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;e._updateVoiceResponseItem(i,o,s),r.type==="checkbox"&&e._render()};n(r,"input",a),r.type==="checkbox"&&n(r,"change",a)}),t.querySelectorAll("[data-direct-control-item-id]").forEach(r=>{let i=r.dataset.directControlItemId;n(r,"input",o=>e._updateDirectControlItem(i,o.currentTarget.value)),n(r,"change",o=>e._updateDirectControlItem(i,o.currentTarget.value))}),t.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(r=>{let i=r.dataset.nextActionItemId,o=r.dataset.nextActionItemField,a=l=>e._updateNextActionItem(i,o,l.currentTarget.value);n(r,"input",a),n(r,"change",a)}),t.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(r=>{let i=r.dataset.directSubControlItemId,o=r.dataset.directSubControlItemField,a=l=>e._updateDirectSubControlItem(i,o,l.currentTarget.value);n(r,"input",a),n(r,"change",a)}),t.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(r=>{let i=r.dataset.templateSubControlItemId,o=r.dataset.templateSubControlItemField,a=l=>e._updateTemplateSubControlItem(i,o,l.currentTarget.value);n(r,"input",a),n(r,"change",a)})};var Lp=(e,t,n)=>{n(t.querySelector('[data-action="generate-uuid"]'),"click",()=>e._refreshUuid()),n(t.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>e._refreshDirectUuid()),n(t.querySelector('[data-action="generate-template-uuid"]'),"click",()=>e._refreshTemplateUuid()),n(t.querySelector('[data-action="add-voice-response-item"]'),"click",()=>e._addVoiceResponseItem()),n(t.querySelector('[data-action="add-direct-control-item"]'),"click",()=>e._addDirectControlItem()),n(t.querySelector('[data-action="add-next-action-item"]'),"click",()=>e._addNextActionItem()),n(t.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>e._addDirectSubControlItem()),n(t.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>e._addTemplateSubControlItem()),t.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(r=>{n(r,"click",()=>e._removeVoiceResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="remove-next-action-item"]').forEach(r=>{n(r,"click",()=>e._removeNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(r=>{n(r,"click",()=>e._toggleNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-response-item"]').forEach(r=>{n(r,"click",()=>e._toggleResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="open-item-actions"]').forEach(r=>{n(r,"click",i=>{i.stopPropagation(),e._openItemActionsModal({kind:r.dataset.itemKind,id:r.dataset.itemId,title:r.dataset.itemTitle,collection:r.dataset.itemCollection,status:String(r.dataset.itemStatus??"").toLowerCase()==="true"})})})};var Np=(e,t,n)=>{t.querySelectorAll('[data-action="close"]').forEach(r=>{n(r,"click",()=>e._closeModal())}),t.querySelectorAll('[data-action="close-direct"]').forEach(r=>{n(r,"click",()=>e._closeDirectModal())}),t.querySelectorAll('[data-action="close-template"]').forEach(r=>{n(r,"click",()=>e._closeTemplateModal())}),t.querySelectorAll('[data-action="close-defaults"]').forEach(r=>{n(r,"click",()=>e._closeDefaultsModal())}),t.querySelectorAll('[data-action="close-item-actions"]').forEach(r=>{n(r,"click",()=>e._closeItemActionsModal())}),n(t.querySelector('[data-action="save"]'),"click",()=>e._saveModal()),n(t.querySelector('[data-action="save-direct"]'),"click",()=>e._saveDirectModal()),n(t.querySelector('[data-action="save-template"]'),"click",()=>e._saveTemplateModal()),n(t.querySelector('[data-action="save-defaults"]'),"click",()=>e._saveDefaultsModal()),n(t.querySelector('[data-action="delete"]'),"click",()=>e._deleteModal()),n(t.querySelector('[data-action="delete-direct"]'),"click",()=>e._deleteDirectModal()),n(t.querySelector('[data-action="delete-template"]'),"click",()=>e._deleteTemplateModal()),n(t.querySelector('[data-action="toggle-status"]'),"click",()=>e._toggleEditModalStatus()),n(t.querySelector('[data-action="toggle-direct-status"]'),"click",()=>e._toggleDirectEditModalStatus()),n(t.querySelector('[data-action="apply-item-status"]'),"click",()=>e._applyItemStatus())};var Rp=(e,t,n)=>{t.querySelectorAll('[data-action="select-search-result"]').forEach(r=>{n(r,"click",i=>{i.preventDefault(),i.stopPropagation();let o=r.dataset.directControlItemId||r.dataset.nextActionItemId,a={uuid:r.dataset.resultUuid,title:r.dataset.resultTitle,mappingType:r.dataset.resultMappingType};e._selectSearchResult(o,a)})})};var zp=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(r=>{n(r,"click",()=>e._setTab(r.dataset.tab))}),n(t.querySelector('[data-action="reload"]'),"click",()=>e._loadPage(e._pageByTab[e._tab]||1,{force:!0})),n(t.querySelector('[data-action="create"]'),"click",()=>e._openCreateModal()),n(t.querySelector('[data-action="prev"]'),"click",()=>e._loadPage((e._pageByTab[e._tab]||1)-1)),n(t.querySelector('[data-action="next"]'),"click",()=>e._loadPage((e._pageByTab[e._tab]||1)+1)),t.querySelectorAll('[data-action="goto-page"]').forEach(r=>{n(r,"click",()=>e._loadPage(Number(r.dataset.page)||1))}),n(t.querySelector('[data-action="reload-direct"]'),"click",()=>e._reloadDirectCommands()),n(t.querySelector('[data-action="create-direct"]'),"click",()=>e._openCreateDirectModal()),n(t.querySelector('[data-action="reload-template"]'),"click",()=>e._reloadTemplateCommands()),n(t.querySelector('[data-action="create-template"]'),"click",()=>e._openCreateTemplateModal()),n(t.querySelector('[data-action="reload-defaults"]'),"click",()=>e._reloadDefaultsCommands()),t.querySelectorAll('[data-action="open-defaults-item"]').forEach(r=>{n(r,"click",()=>e._openDefaultsModal(r.dataset.defaultType))}),t.querySelectorAll('[data-action="edit"]').forEach(r=>{n(r,"click",()=>e._openEditModal(r.dataset.commandId))}),t.querySelectorAll('[data-action="edit-direct"]').forEach(r=>{n(r,"click",()=>e._openEditDirectModal(r.dataset.directId))}),t.querySelectorAll('[data-action="edit-template"]').forEach(r=>{n(r,"click",()=>e._openEditTemplateModal(r.dataset.templateId))}),t.querySelectorAll("[data-direct-subtab]").forEach(r=>{n(r,"click",()=>e._setDirectSubtab(r.dataset.directSubtab))})};var Op=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(i=>{n(r,i,o=>e._swallowUiEvent(o))})})};var Up=e=>{let t=e.shadowRoot;if(!t)return null;e._bindController?.abort&&e._bindController.abort(),e._legacyListeners.length&&(e._legacyListeners.forEach(({element:o,eventName:a,handler:l})=>{o.removeEventListener(a,l)}),e._legacyListeners=[]);let n=typeof AbortController<"u";e._bindController=n?new AbortController:null;let r=e._bindController?.signal??null;return{root:t,on:(o,a,l)=>{if(o)try{r?o.addEventListener(a,l,{signal:r}):(o.addEventListener(a,l),e._legacyListeners.push({element:o,eventName:a,handler:l}))}catch{o.addEventListener(a,l),e._legacyListeners.push({element:o,eventName:a,handler:l})}}}};var jp=e=>{let t=Up(e);if(!t)return;let{root:n,on:r}=t;zp(e,n,r),Np(e,n,r),Lp(e,n,r),Rp(e,n,r),Pp(e,n,r),Op(e,n,r)};var Bp=e=>{if(!e._directModalOpen)return"";let t=e._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",n=e._directDraft.typeData==="command",r=e._directModalMode==="edit",i=!r&&!String(e._directDraft.uuid??"").trim(),o=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],a=Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[],l=String(e._directDraft.subDirectControl??"").trim(),s=a.some(d=>String(d?.uuid??"").trim()===l);return`
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
                ${o.map((d,m)=>{let c=e._openDirectSubControlItemIds.has(d.id);return`
                    <section class="response-item-card ${c?"open":""}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-direct-sub-control-item"
                        data-direct-sub-control-item-id="${h(d.id)}"
                      >
                        <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${m+1}</span>
                        <span class="response-accordion-icon">${c?"\u2212":"+"}</span>
                      </button>
                      ${c?`
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
                ${o.length===0?'<div class="empty">\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>':""}
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
                ${a.map(d=>`
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
  `},Fp=e=>{if(!e._templateModalOpen)return"";let t=e._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",n=e._templateModalMode==="edit",r=!n&&!String(e._templateDraft.uuid??"").trim(),i=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[];return`
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
            ${i.map((o,a)=>{let l=e._openTemplateSubControlItemIds.has(o.id);return`
                <section class="response-item-card ${l?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-template-sub-control-item"
                    data-template-sub-control-item-id="${h(o.id)}"
                  >
                    <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${a+1}</span>
                    <span class="response-accordion-icon">${l?"\u2212":"+"}</span>
                  </button>
                  ${l?`
                    <div class="response-item-grid">
                      <label>
                        <span>subMappingType</span>
                        <input
                          data-template-sub-control-item-id="${h(o.id)}"
                          data-template-sub-control-item-field="subType"
                          value="${h(o.subType)}"
                        />
                      </label>
                      <label>
                        <span>subVoiceCommands</span>
                        <textarea
                          rows="3"
                          data-template-sub-control-item-id="${h(o.id)}"
                          data-template-sub-control-item-field="subVoiceCommands"
                        >${h(o.subVoiceCommands)}</textarea>
                      </label>
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-template-sub-control-item"
                          data-template-sub-control-item-id="${h(o.id)}"
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
  `},xp=e=>{if(!e._defaultsModalOpen)return"";let t=e._defaultsActiveType,n=e._defaultConfig(t),r=e._defaultsByType[t]??e._newDefaultsDraft(t);return`
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
  `},Vp=e=>{if(!e._itemActionsModalOpen)return"";let t=e._itemActionsStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",n=e._itemActionsStatus?"\u0421\u0435\u0439\u0447\u0430\u0441: \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u0435\u0439\u0447\u0430\u0441: \u0441\u043A\u0440\u044B\u0442",r=e._itemActionsTitle||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <div class="modal-backdrop" data-action="close-item-actions"></div>
    <section class="modal modal-compact" role="dialog" aria-modal="true" aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F">
      <div class="modal-header">
        <h3>${h(r)}</h3>
        <button type="button" class="ghost" data-action="close-item-actions" ${e._itemActionsSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <p>${n}</p>
      <div class="modal-footer">
        <button type="button" class="secondary" data-action="apply-item-status" ${e._itemActionsSaving?"disabled":""}>
          ${e._itemActionsSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":t}
        </button>
      </div>
    </section>
  `};var Hp=e=>{if(!e._modalOpen)return"";let t=e._modalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",n=e._modalMode==="edit",r=!n&&!String(e._draft.uuid??"").trim();return`
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
              ${(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map((i,o)=>{let a=e._openResponseItemIds.has(i.id);return`
                  <section class="response-item-card ${a?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-response-item"
                      data-response-item-id="${h(i.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}</span>
                      <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                    </button>
                    ${a?`
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
                        ${(e._draft.responseItems?.length||0)>1?`
                          <div class="response-item-actions">
                            <button
                              type="button"
                              class="ghost compact-delete-button"
                              data-action="remove-voice-response-item"
                              data-response-item-id="${h(i.id)}"
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
            <span>nextAction</span>
            <button type="button" class="secondary compact-button" data-action="add-next-action-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
          </div>
          <div class="array-builder-list">
            ${(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map((i,o)=>{let a=e._openNextActionItemIds.has(i.id);return`
                <section class="response-item-card ${a?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-next-action-item"
                    data-next-action-item-id="${h(i.id)}"
                  >
                    <span>${h(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}`)}</span>
                    <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                  </button>
                  ${a?`
                    <div class="response-item-grid">
                      <div class="response-inline-row">
                        <label>
                          <span>actionTypeComponent</span>
                          <select data-next-action-item-id="${h(i.id)}" data-next-action-item-field="actionTypeComponent">
                            ${Ui.map(l=>`
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
                                  <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${h(i.id)}" data-result-uuid="${h(l.uuid)}" data-result-title="${h(l.title)}" data-result-mapping-type="${h(l.mappingType??"")}">
                                    ${h(l.title)} (${h(l.uuid)})
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
        </section>
        <section class="field-span-2 array-builder">
          <div class="array-builder-header">
            <span>nextDirectControl</span>
            <button type="button" class="secondary compact-button" data-action="add-direct-control-item">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442</button>
          </div>
          <div class="array-builder-list">
            ${(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map((i,o)=>{let a=e._openDirectControlItemIds.has(i.id);return`
                <section class="response-item-card ${a?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-direct-control-item"
                    data-direct-control-item-id="${h(i.id)}"
                  >
                    <span>${h(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}`)}</span>
                    <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                  </button>
                  ${a?`
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
                                <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${h(i.id)}" data-result-uuid="${h(l.uuid)}" data-result-title="${h(l.title)}" data-result-mapping-type="${h(l.mappingType??"")}">
                                  ${h(l.title)} (${h(l.uuid)})
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
        </section>
      </div>
      <div class="modal-footer">
        ${e._modalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete" ${e._modalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
        <button type="button" class="primary" data-action="save" ${e._modalSaving?"disabled":""}>${e._modalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `};var Wp=`
<style>
:host {
          --ui-border: rgba(34, 45, 67, 0.16);
          --ui-text: #1b2432;
          --ui-muted: #5c667a;
          --ui-accent: #234f7d;
          --ui-accent-warm: #a64b2a;
          --ui-card-bg: linear-gradient(175deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.86));
          --ui-card-bg-soft: rgba(255, 255, 255, 0.8);
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
          background: rgba(255,255,255,.88);
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
          box-shadow: 0 0 0 3px var(--ui-ring);
          background: #fff;
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
          background: rgba(255,255,255,.9);
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
          background: white;
          border: 1px solid var(--ui-border);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .dropdown-option {
          padding: 8px 12px;
          cursor: pointer;
          border-bottom: 1px solid var(--ui-border);
        }
        .dropdown-option:hover {
          background: rgba(34,45,67,.04);
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
          background: white;
          border-bottom: 1px solid var(--ui-border);
        }
        datalist option:hover {
          background: rgba(34,45,67,.04);
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
        }
        @media (max-width: 700px) {
          .modal { inset:0; transform:none; width:100vw; height:100vh; max-height:none; border-radius:0; border:none; padding:16px; }
        }
</style>
`;var qp=e=>{let t=e._renderActiveTabBody(),n=`
    ${Wp}
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
    ${t}
    ${e._renderModal()}
    ${e._renderDirectModal()}
    ${e._renderTemplateModal()}
    ${e._renderDefaultsModal()}
    ${e._renderItemActionsModal()}
  `;e._mountReact(n),e._bind()};var Qp=()=>{if(typeof document>"u")return;let e=document.getElementById("dialog-custom-ui-modal-style");e||(e=document.createElement("style"),e.id="dialog-custom-ui-modal-style",e.textContent="body.modal-open { overflow: hidden; }",document.head.appendChild(e))},Yp=e=>{e._reactRoot=null,e._hass=null,e._config={base_url:"",timer_alarm_token:"",theme:"light"},e._tab=D.primary,e._commands=[],e._pageByTab={[D.primary]:1,[D.secondary]:1},e._totalByTab={[D.primary]:0,[D.secondary]:0},e._totalPagesByTab={[D.primary]:1,[D.secondary]:1},e._lastLoadedTab=D.primary,e._lastLoadPageKey="",e._inFlightPageKey="",e._lastLoadedPageKey="",e._lastLoadedPageAt=0,e._loading=!1,e._error="",e._status="",e._modalOpen=!1,e._modalMode="create",e._modalSaving=!1,e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._bindController=null,e._legacyListeners=[],e._draft=e._newDraft(),e._searchActiveItemId=null,e._searchActiveType=null,e._searchResults=[],e._searchLoading=!1,e._searchDebounceTimer=null,e._modalScrollTop=0,e._directSubtab=ie.basic,e._directCommands=[],e._directLoading=!1,e._directError="",e._directModalOpen=!1,e._directModalMode="create",e._directModalSaving=!1,e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._templateCommands=[],e._templateLoading=!1,e._templateError="",e._templateModalOpen=!1,e._templateModalMode="create",e._templateModalSaving=!1,e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._subDirectControlSampleOptions=[],e._defaultsLoading=!1,e._defaultsError="",e._defaultsModalOpen=!1,e._defaultsModalSaving=!1,e._defaultsByType=e._newDefaultsState(),e._defaultsActiveType=De[0].type,e._defaultsActiveId="",e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsId="",e._itemActionsKind="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._itemActionsTitle="",e._modalCount=0};var Zg=({html:e})=>Dl.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Il=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),Qp(),Yp(this)}set hass(t){let n=!this._hass;this._hass=t,(n||!this.shadowRoot?.innerHTML)&&this._render()}set config(t){let n={base_url:String(t?.base_url??"").trim(),timer_alarm_token:String(t?.timer_alarm_token??"").trim(),theme:String(t?.theme??"light").trim().toLowerCase()==="dark"?"dark":"light"},r=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token||n.theme!==this._config.theme,i=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token;if(!r){this.shadowRoot?.innerHTML||this._render();return}if(this._config=n,this._applyTheme(),i&&(this._tab===D.primary||this._tab===D.secondary)&&!this._loading&&n.base_url){this._error="",this._loadPage(this._pageByTab[this._tab]||1,{force:!0});return}if(i&&this._tab===D.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._applyTheme(),this._render(),(this._tab===D.primary||this._tab===D.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1),this._tab===D.direct&&!this._directCommands.length&&!this._directLoading&&this._directSubtab===ie.basic&&this._loadDirectCommands(),this._tab===D.direct&&!this._templateCommands.length&&!this._templateLoading&&this._directSubtab===ie.templates&&this._loadTemplateCommands()}disconnectedCallback(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Gp.createRoot)(this.shadowRoot));let n=this.shadowRoot.querySelector(".modal");n&&(this._modalScrollTop=n.scrollTop),(0,Kp.flushSync)(()=>{this._reactRoot.render(Dl.default.createElement(Zg,{html:t}))});let r=this.shadowRoot.querySelector(".modal");r&&(r.scrollTop=this._modalScrollTop)}_addModalBackdrop(){this._modalCount++,this._modalCount===1&&typeof document<"u"&&document.body&&document.body.classList.add("modal-open")}_removeModalBackdrop(){this._modalCount--,this._modalCount===0&&typeof document<"u"&&document.body&&document.body.classList.remove("modal-open")}_newDraft(t=null){return cc(t)}_newDirectDraft(t=null){return pc(t)}_newTemplateDraft(t=null){return fc(t)}_defaultConfig(t){return ji(t)}_newDefaultsDraft(t,n=null){return Tl(t,n)}_newDefaultsState(){return mc()}_apiHeaders(t=!1){let n={};return t&&(n["Content-Type"]="application/json"),this._config.timer_alarm_token&&(n.Authorization=this._config.timer_alarm_token),n}_apiUrl(t){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}${t}`:""}async _loadPage(t=1,n={}){if(this._tab!==D.primary&&this._tab!==D.secondary)return;let{force:r=!1}=n??{},i=this._tab,o=Math.max(1,Number(t)||1),a=`${i}:${o}`;if(this._inFlightPageKey===a)return;let l=Date.now();if(!r&&this._lastLoadedPageKey===a&&l-this._lastLoadedPageAt<1500)return;let d=i===D.secondary?"/api/cms/sub-commands":"/api/cms/commands",m=this._apiUrl(`${d}?page=${encodeURIComponent(o)}&pageSize=${20}`);if(!m){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._lastLoadPageKey=a,this._inFlightPageKey=a,this._loading=!0,this._error="",this._render();try{let c=await fetch(m,{method:"GET",headers:this._apiHeaders(!1)});if(!c.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${c.status}`);let g=await c.json(),v=Array.isArray(g.data)?g.data:[],S=g?.meta?.pagination??g?.pagination??{},w=Number(S.total??g.total??g.count??g.meta?.total??0),U=Number(S.page??o)||o,p=Number(S.pageSize??20)||20,u=Number(S.totalPages??S.pageCount??0),f=Number.isFinite(u)&&u>0?u:Math.max(1,Math.ceil((Number.isFinite(w)&&w>0?w:v.length)/p));this._commands=v,this._lastLoadedTab=i,this._pageByTab[i]=Math.max(1,U),this._totalPagesByTab[i]=Math.max(1,f),this._totalByTab[i]=Number.isFinite(w)&&w>0?w:Number.isFinite(u)&&u>0?u*p:o*20+(v.length===20?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${v.length}.`,this._lastLoadedPageKey=a,this._lastLoadedPageAt=Date.now()}catch(c){this._commands=[],this._error=c?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._inFlightPageKey===a&&(this._inFlightPageKey=""),this._loading=!1,this._render()}}_setTab(t){if(this._tab=t,this._error="",this._status="",this._render(),t===D.primary||t===D.secondary){let n=this._pageByTab[t]||1;(!this._loading||this._lastLoadedTab!==t)&&this._loadPage(n)}t===D.direct&&(this._directSubtab===ie.basic&&!this._directCommands.length&&!this._directLoading&&this._loadDirectCommands(),this._directSubtab===ie.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands()),t===D.defaults&&!this._defaultsLoading&&this._reloadDefaultsCommands()}_buildPaginationItems(t,n){let r=Math.max(1,Number(t)||1),i=Math.max(1,Number(n)||1);return i<=7?Array.from({length:i},(o,a)=>a+1):r<=4?[1,2,3,4,"ellipsis",i]:r>=i-3?[1,"ellipsis",i-3,i-2,i-1,i]:[1,"ellipsis",r-1,r,r+1,"ellipsis",i]}_openCreateModal(){return yc(this)}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_openEditModal(t){return vc(this,t)}_closeModal(){return Sc(this)}_updateDraft(t,n){this._draft={...this._draft,[t]:n}}_buildPayload(){let t=Bi(this._draft);return this._tab===D.secondary?(delete t.componentDialog,t):(delete t.subComponentDialog,t)}_refreshUuid(){return Cc(this)}_addVoiceResponseItem(){return Tc(this)}_removeVoiceResponseItem(t){return kc(this,t)}_updateVoiceResponseItem(t,n,r){return Ic(this,t,n,r)}_toggleResponseItem(t){return Dc(this,t)}_addDirectControlItem(){return Ec(this)}_removeDirectControlItem(t){return Ac(this,t)}_updateDirectControlItem(t,n){return Mc(this,t,n)}_toggleDirectControlItem(t){return $c(this,t)}_addNextActionItem(){return Pc(this)}_removeNextActionItem(t){return Lc(this,t)}_updateNextActionItem(t,n,r){return Nc(this,t,n,r)}_toggleNextActionItem(t){return Rc(this,t)}_setDirectSubtab(t){return xc(this,t)}async _loadDirectCommands(){return Vc(this)}async _loadTemplateCommands(){return Hc(this)}_reloadDirectCommands(){return Wc(this)}_reloadTemplateCommands(){return qc(this)}_openCreateDirectModal(){return Qc(this)}_openEditDirectModal(t){return Yc(this,t)}_closeDirectModal(){return Kc(this)}_updateDirectDraft(t,n){return Gc(this,t,n)}async _hydrateSelectedSubDirectControlSample(){return Jc(this)}_refreshDirectUuid(){return Xc(this)}_refreshTemplateUuid(){return Zc(this)}_addDirectSubControlItem(){return ep(this)}_removeDirectSubControlItem(t){return tp(this,t)}_toggleDirectSubControlItem(t){return np(this,t)}_updateDirectSubControlItem(t,n,r){return rp(this,t,n,r)}_buildDirectPayload(){return Fi(this._directDraft)}async _loadSubDirectControlSamples(){return ip(this)}async _performUuidSearch(t,n,r=null){return yp(this,t,n,r)}_debouncedPerformUuidSearch(t,n,r=null){return vp(this,t,n,r)}_selectSearchResult(t,n){return Sp(this,t,n)}async _searchUuid(t,n){return wp(this,t,n)}async _resolveTitleByUuid(t,n){return bp(this,t,n)}async _hydrateDirectControlTitles(){return Cp(this)}async _hydrateNextActionTitles(){return Tp(this)}async _deleteItem(t,n){return kp(this,t,n)}_openItemActionsModal({kind:t,id:n,title:r,collection:i,status:o}){return zc(this,{kind:t,id:n,title:r,collection:i,status:o})}_closeItemActionsModal(){return Oc(this)}async _updateCommandStatusById(t,n,r){return Uc(this,t,n,r)}async _updateDirectStatusById(t,n){return jc(this,t,n)}async _applyItemStatus(){return Bc(this)}async _toggleEditModalStatus(){return Fc(this)}async _toggleDirectEditModalStatus(){return op(this)}async _saveDirectModal(){return ap(this)}async _deleteDirectModal(){return lp(this)}_openCreateTemplateModal(){return sp(this)}_openEditTemplateModal(t){return dp(this,t)}_closeTemplateModal(){return up(this)}_updateTemplateDraft(t,n){return cp(this,t,n)}_addTemplateSubControlItem(){return pp(this)}_removeTemplateSubControlItem(t){return fp(this,t)}_toggleTemplateSubControlItem(t){return mp(this,t)}_updateTemplateSubControlItem(t,n,r){return gp(this,t,n,r)}_buildTemplatePayload(){return gc(this._templateDraft)}async _saveTemplateModal(){return hp(this)}async _deleteTemplateModal(){return _p(this)}_reloadDefaultsCommands(){return Ip(this)}_openDefaultsModal(t){return Dp(this,t)}_closeDefaultsModal(){return Ep(this)}_updateDefaultsDraft(t,n){return Ap(this,t,n)}_buildDefaultsPayload(){let t=this._defaultsActiveType,n=this._defaultsByType[t]??this._newDefaultsDraft(t);return hc(t,n)}async _saveDefaultsType(t,n=!1){return Mp(this,t,n)}async _saveDefaultsModal(){return $p(this)}async _saveModal(){return wc(this)}async _deleteModal(){return bc(this)}_renderCommandsTab(t){return Ut(this,t)}_renderPrimaryCommandsPage(){return xi(this)}_renderSecondaryCommandsPage(){return Vi(this)}_renderDirectBasicSection(t){return Hi(this,t)}_renderDirectTemplatesSection(t){return Wi(this,t)}_renderDirectCommandsTab(){return qi(this)}_renderActiveTabBody(){return _c(this)}_renderStub(t,n){return kl(t,n)}_renderDirectModal(){return Bp(this)}_renderTemplateModal(){return Fp(this)}_renderDefaultsTab(){return Qi(this)}_renderDefaultsModal(){return xp(this)}_renderModal(){return Hp(this)}_renderItemActionsModal(){return Vp(this)}_swallowUiEvent(t){t.stopPropagation()}_bind(){jp(this)}_render(){qp(this)}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",Il);var fr={base_url:"http://127.0.0.1:8000",client_id:"",timer_alarm_token:"",timer_alarm_device_ids:[""],theme:"light",timeout:10,scenarios:[]},Xp=`{
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
}`,Zp=2e3,El=new URL(import.meta.url).searchParams.get("v")||"",Jp=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),ef=El?Jp?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(El)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(El)}`:Jp?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js";var tf=e=>(t,n,r)=>{t&&t.addEventListener(n,r)};var nf=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(o=>{n(o,"click",()=>e._setActiveTab(o.dataset.tab))}),n(t.querySelector('[data-action="save"]'),"click",()=>e._save()),n(t.querySelector('[data-action="refresh-logs"]'),"click",()=>e._loadLogs()),n(t.querySelector('[data-action="download-json"]'),"click",()=>e._downloadJson()),n(t.querySelector('[data-action="upload-json"]'),"click",()=>e._openJsonFilePicker()),n(t.querySelector('[data-action="reset-commands-cache"]'),"click",()=>e._resetCommandsCache());let r=t.querySelector('[data-action="add-scenario"]');r&&(r.onclick=()=>e._addScenario()),n(t.querySelector('[data-action="import-json-input"]'),"change",o=>{let[a]=o.currentTarget.files||[];e._importJsonFile(a)}),t.querySelectorAll('[data-action="add-condition"]').forEach(o=>{n(o,"click",()=>e._addCondition(o.dataset.scenarioId))}),t.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(o=>{n(o,"click",()=>e._enableConditionChildrenType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(o=>{n(o,"click",()=>e._disableConditionChildrenType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(o=>{n(o,"click",()=>e._enableConditionChildrenDirectType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(o=>{n(o,"click",()=>e._disableConditionChildrenDirectType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll("[data-toggle-scenario]").forEach(o=>{n(o,"click",()=>e._toggleScenario(o.dataset.toggleScenario))}),t.querySelectorAll("[data-toggle-condition]").forEach(o=>{n(o,"click",()=>e._toggleCondition(o.dataset.toggleCondition))}),t.querySelectorAll("[data-remove-id]").forEach(o=>{n(o,"click",()=>e._removeScenario(o.dataset.removeId))}),t.querySelectorAll("[data-remove-condition-id]").forEach(o=>{n(o,"click",()=>e._removeCondition(o.dataset.scenarioId,o.dataset.removeConditionId))});let i=t.querySelector("dialog-custom-ui-create-scenario");i&&(i.hass=e._hass,i.config={base_url:e._config.base_url,timer_alarm_token:e._config.timer_alarm_token,theme:e._config.theme})};var rf=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(i=>{n(r,i,o=>e._swallowUiEvent(o))})}),t.querySelectorAll("[data-config-field]").forEach(r=>{let i=o=>r.dataset.configBool==="true"?o.currentTarget.checked:o.currentTarget.value;n(r,"input",o=>{e._updateConfigField(o.currentTarget.dataset.configField,i(o),!1)}),n(r,"change",o=>{e._updateConfigField(o.currentTarget.dataset.configField,i(o),!0)})}),t.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(r=>{let i=r.dataset.scenarioField,o=r.dataset.scenarioId;r.tagName==="SELECT"?n(r,"change",a=>{e._updateScenario(o,i,a.currentTarget.value,!0)}):(n(r,"input",a=>{e._updateScenario(o,i,a.currentTarget.value,!1)}),n(r,"change",a=>{e._updateScenario(o,i,a.currentTarget.value,!0)}))}),t.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(r=>{let i=r.dataset.scenarioId,o=r.dataset.conditionId,a=r.dataset.conditionField;n(r,"input",l=>{e._updateCondition(i,o,a,l.currentTarget.value,!1)}),n(r,"change",l=>{e._updateCondition(i,o,a,l.currentTarget.value,!0)})})};var Yi=()=>`
    <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
  `;var T=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),eh=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Al=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,_n=()=>({id:Al(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),of=()=>({id:eh(),name:"",script_entity_id:"",conditions:[_n()]});var Ki=e=>{let t=e._buildConfigPayload();return`
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
    `};var Ji=e=>`
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
    `;var Xi=e=>{let t=e._scripts(),n=e._config.scenarios.length?e._config.scenarios.map((r,i)=>{let o=e._expandedScenarios.has(r.id),a=r.conditions.map((l,s)=>`
            ${(()=>{let d=e._expandedConditions.has(l.id),m=[];l.parent_type&&m.push(`Parent: ${T(l.parent_type)}`),l.children_type_enabled&&l.children_type&&m.push(`Children: ${T(l.children_type)}`),l.children_direct_type_enabled&&l.children_direct_type&&m.push(`Children Direct: ${T(l.children_direct_type)}`);let c=m.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return`
            <div class="condition-card ${d?"expanded":"collapsed"}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${T(l.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ${s+1}</span>
                  <span class="condition-preview">${c}</span>
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
                      data-scenario-id="${T(r.id)}"
                      data-remove-condition-id="${T(l.id)}"
                    >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                  `:""}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${T(r.id)}"
                      data-condition-id="${T(l.id)}"
                      data-condition-field="parent_type"
                      value="${T(l.parent_type)}"
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
                          data-scenario-id="${T(r.id)}"
                          data-condition-id="${T(l.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${T(r.id)}"
                        data-condition-id="${T(l.id)}"
                        data-condition-field="children_type"
                        value="${T(l.children_type??"")}"
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
                        data-scenario-id="${T(r.id)}"
                        data-condition-id="${T(l.id)}"
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
                          data-scenario-id="${T(r.id)}"
                          data-condition-id="${T(l.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${T(r.id)}"
                        data-condition-id="${T(l.id)}"
                        data-condition-field="children_direct_type"
                        value="${T(l.children_direct_type??"")}"
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
                        data-scenario-id="${T(r.id)}"
                        data-condition-id="${T(l.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `})()}
          `).join("");return`
            <section class="scenario-card ${o?"expanded":"collapsed"}" data-scenario-card-id="${T(r.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${T(r.id)}">
                  <span class="scenario-toggle-icon">${o?"\u2212":"+"}</span>
                  <span>
                    <span class="scenario-kicker">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${i+1}</span>
                    <span class="scenario-title">${T(r.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${T(r.id)}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
              </div>
              <div class="scenario-body ${o?"open":"hidden"}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430</span>
                    <input data-scenario-id="${T(r.id)}" data-scenario-field="name" value="${T(r.name)}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">\u0423\u0441\u043B\u043E\u0432\u0438\u044F</span>
                        <small>\u0427\u0435\u0440\u0435\u0437 <code>+</code> \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. \u0415\u0441\u043B\u0438 \u0432 <code>Parent Type</code> \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 <code>;</code>, \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${T(r.id)}">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                    </div>
                    <div class="conditions-list">${a}</div>
                  </div>
                  <label class="field-span-2">
                    <span>\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant</span>
                    <select data-scenario-id="${T(r.id)}" data-scenario-field="script_entity_id">
                      <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*</option>
                      ${t.map(l=>{let s=l.entity_id===r.script_entity_id?"selected":"",d=l.attributes.friendly_name||l.entity_id;return`<option value="${T(l.entity_id)}" ${s}>${T(d)} (${T(l.entity_id)})</option>`}).join("")}
                      <option value="timer" ${r.script_entity_id==="timer"?"selected":""}>\u0422\u0430\u0439\u043C\u0435\u0440 (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
                      <option value="alarm" ${r.script_entity_id==="alarm"?"selected":""}>\u0411\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)</option>
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
          <button type="button" class="primary" data-action="save" ${e._saving?"disabled":""}>${e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${e._error?`<div class="status error">${T(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${T(e._status)}</div>`:""}
      </section>
      <div class="scenario-list">${n}</div>
      <section class="help-card">
        <div><strong>\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check   -H "Content-Type: application/json"   -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442</strong></div>
        <div>\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 <code>script.*</code> \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${T(Xp)}</code></pre>
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
      `);var af=e=>e._activeTab==="logs"?Gi(e):e._activeTab==="scenarios"?Xi(e):e._activeTab==="create-scenario"?Yi():e._activeTab==="timer-alarm"?Zi(e):e._activeTab==="json"?Ki(e):Ji(e);var lf=(e,t)=>{e._expandedScenarios.has(t)?e._expandedScenarios.delete(t):e._expandedScenarios.add(t),e._render()},sf=(e,t)=>{e._expandedConditions.has(t)?e._expandedConditions.delete(t):e._expandedConditions.add(t),e._render()},df=(e,t,n,r=!1)=>{e._config={...e._config,[t]:n},t==="theme"&&e._applyTheme(),e._status="",e._error="",r&&e._render()},uf=e=>{e._deviceAccordionOpen=!e._deviceAccordionOpen,e._render()},cf=e=>{let t=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[];t.push(""),e._config={...e._config,timer_alarm_device_ids:t},e._status="",e._error="",e._render()},pf=(e,t,n)=>{let r=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""];r[t]=n,e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error=""},ff=(e,t)=>{let r=(Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""]).filter((i,o)=>o!==t);e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error="",e._render()},mf=(e,t,n,r,i=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(o=>o.id===t?{...o,[n]:r}:o)},e._status="",e._error="",i&&e._render()},gf=(e,t,n,r,i,o=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(a=>a.id===t?{...a,conditions:a.conditions.map(l=>l.id===n?{...l,[r]:i}:l)}:a)},e._status="",e._error="",o&&e._render()},hf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!0,children_type:i.children_type??""}:i)}:r)},e._status="",e._error="",e._render()},_f=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!1,children_type:""}:i)}:r)},e._status="",e._error="",e._render()},yf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!0,children_direct_type:i.children_direct_type??""}:i)}:r)},e._status="",e._error="",e._render()},vf=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!1,children_direct_type:""}:i)}:r)},e._status="",e._error="",e._render()},Sf=(e,t)=>{let n=_n();e._expandedConditions.add(n.id),e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:[...r.conditions,n]}:r)},e._status="",e._error="",e._render()},wf=(e,t,n)=>{e._expandedConditions.delete(n),e._config={...e._config,scenarios:e._config.scenarios.map(r=>{if(r.id!==t)return r;let i=r.conditions.filter(o=>o.id!==n);return{...r,conditions:i.length?i:[_n()]}})},e._status="",e._error="",e._render()},bf=e=>{let t=Date.now();if(t<e._addScenarioLockUntil)return;e._addScenarioLockUntil=t+300;let n=of();e._expandedScenarios.add(n.id),e._config={...e._config,scenarios:[n,...e._config.scenarios]},e._status="",e._render(),window.requestAnimationFrame(()=>e._scrollScenarioIntoView(n.id))},Cf=(e,t)=>{let n=globalThis.CSS?.escape?globalThis.CSS.escape(t):t;e.shadowRoot.querySelector(`[data-scenario-card-id="${n}"]`)?.scrollIntoView({block:"start",behavior:"smooth"})},Tf=(e,t)=>{e._expandedScenarios.delete(t),e._config={...e._config,scenarios:e._config.scenarios.filter(n=>n.id!==t)},e._status="",e._render()};var kf=(e,t)=>{e._reactRoot=null,e._hass=null,e._config={...t},e._logs=[],e._activeTab="scenarios",e._expandedScenarios=new Set,e._expandedConditions=new Set,e._loaded=!1,e._loading=!1,e._saving=!1,e._loadingLogs=!1,e._error="",e._status="",e._logsTimer=null,e._timerAlarmLoaded=!1,e._timerAlarmLoading=!1,e._timerAlarmLoadPromise=null,e._deviceAccordionOpen=!0,e._addScenarioLockUntil=0};var If=`
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
        .subtab-button {
          border: 1px solid var(--border);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
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
          background: rgba(255, 255, 255, 0.99);
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
          background: rgba(255, 255, 255, 0.9);
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
          background: rgba(255, 255, 255, 0.92);
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
          background: #fff;
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
          background: rgba(255, 255, 255, 0.76);
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
</style>
`;var th=({html:e})=>$l.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),Ml=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),kf(this,fr)}set hass(t){let n=!this._hass;if(this._hass=t,!this._loaded&&!this._loading){this._loadConfig();return}(n||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this._applyTheme(),this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Ef.createRoot)(this.shadowRoot)),(0,Df.flushSync)(()=>{this._reactRoot.render($l.default.createElement(th,{html:t}))})}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded)return this._timerAlarmLoadPromise||(this._timerAlarmLoading=!0,this._timerAlarmLoadPromise=import(ef).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(t=>{this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})),this._timerAlarmLoadPromise}async _loadConfig(){this._loading=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...fr,...t,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(t.timer_alarm_device_ids??[]),scenarios:Array.isArray(t.scenarios)?t.scenarios.map(n=>this._normalizeScenarioForUi(n)):[]},this._applyTheme(),this._expandedScenarios=new Set,this._error=""}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(t.logs)?t.logs:[]}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},Zp)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("script.")).sort((t,n)=>{let r=t.attributes.friendly_name||t.entity_id,i=n.attributes.friendly_name||n.entity_id;return r.localeCompare(i,"ru")}):[]}_setActiveTab(t){this._activeTab=t,this._status="",this._error="",this._render(),t==="logs"?this._startLogsPolling():(this._stopLogsPolling(),t==="timer-alarm"&&this._ensureTimerAlarmModule())}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_renderSettings(){return Ji(this)}_toggleScenario(t){return lf(this,t)}_toggleCondition(t){return sf(this,t)}_updateConfigField(t,n,r=!1){return df(this,t,n,r)}_normalizeTimerAlarmDeviceIdsForUi(t){let r=(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(i=>String(i??"").trim());return r.length?r:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(t=>t)}_toggleDeviceAccordion(){return uf(this)}_addTimerAlarmDeviceId(){return cf(this)}_updateTimerAlarmDeviceId(t,n){return pf(this,t,n)}_removeTimerAlarmDeviceId(t){return ff(this,t)}_updateScenario(t,n,r,i=!1){return mf(this,t,n,r,i)}_normalizeScenarioForUi(t){let n=this._normalizeConditionsForUi(t);return{...t,conditions:n}}_serializeScenario(t){let n=(Array.isArray(t.conditions)?t.conditions:[]).flatMap(i=>this._serializeCondition(i)).filter(Boolean),r={id:t.id,name:t.name,script_entity_id:t.script_entity_id,conditions:n};return n.length===1&&(r.parent_type=n[0].parent_type??"",n[0].children_type&&(r.children_type=n[0].children_type),n[0].children_direct_type&&(r.children_direct_type=n[0].children_direct_type)),r}_normalizeConditionsForUi(t){if(Array.isArray(t.conditions)&&t.conditions.length)return t.conditions.map(l=>this._normalizeConditionForUi(l));let n=String(t.parent_type??"").split(";").map(l=>l.trim()),r=String(t.children_type??t.type??"").split(";").map(l=>l.trim()),i=this._normalizeChildrenDirectTypeForUi(t.children_direct_type),o=Math.max(n.length,r.length,i.length,1),a=[];for(let l=0;l<o;l+=1){let s=this._normalizeConditionForUi({parent_type:n[l]??"",children_type:r[l]??"",children_direct_type:i[l]??""});(s.parent_type||s.children_type_enabled||s.children_direct_type_enabled)&&a.push(s)}return a.length?a:[_n()]}_normalizeConditionForUi(t){let n=String(t.children_type??t.type??"").trim(),r=this._normalizeChildrenDirectTypeForUi(t.children_direct_type).join(";");return{id:String(t.id??Al()),parent_type:String(t.parent_type??"").trim(),children_type:n,children_type_enabled:n!=="",children_direct_type:r,children_direct_type_enabled:r!==""}}_serializeCondition(t){let n=String(t.parent_type??"").trim(),r=String(t.children_type??"").trim(),i=String(t.children_direct_type??"").trim();if(!n&&!r&&!i)return[];let o=n.split(";").map(d=>d.trim()),a=r.split(";").map(d=>d.trim()),l=Math.max(o.length,a.length,1),s=[];for(let d=0;d<l;d+=1){let m=o[d]??"",c=a[d]??"";if(!m&&!c)continue;let g={parent_type:m};t.children_type_enabled&&c&&(g.children_type=c),t.children_direct_type_enabled&&i&&(g.children_direct_type=i),s.push(g)}return s}_updateCondition(t,n,r,i,o=!1){return gf(this,t,n,r,i,o)}_normalizeChildrenDirectTypeForUi(t){if(Array.isArray(t))return t.map(n=>typeof n=="string"?n.trim():n&&typeof n=="object"?String(n.mapping_type??n.mappingType??n.type??"").trim():"").filter(Boolean);if(t&&typeof t=="object"){let n=String(t.mapping_type??t.mappingType??t.type??"").trim();return n?[n]:[]}return String(t??"").split(";").map(n=>n.trim()).filter(Boolean)}_enableConditionChildrenType(t,n){return hf(this,t,n)}_disableConditionChildrenType(t,n){return _f(this,t,n)}_enableConditionChildrenDirectType(t,n){return yf(this,t,n)}_disableConditionChildrenDirectType(t,n){return vf(this,t,n)}_addCondition(t){return Sf(this,t)}_removeCondition(t,n){return wf(this,t,n)}_addScenario(){return bf(this)}_scrollScenarioIntoView(t){return Cf(this,t)}_removeScenario(t){return Tf(this,t)}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(n=>{let r=Array.isArray(n.conditions)?n.conditions:[];return r.length?!!r.find(o=>{let a=String(o.children_type??"").trim(),l=String(o.children_direct_type??"").trim();return!!(!String(o.parent_type??"").trim()&&!a&&!l||o.children_type_enabled&&!a||o.children_direct_type_enabled&&!l)})||!String(n.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,timer_alarm_token:this._config.timer_alarm_token,theme:this._config.theme,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(t=>this._serializeScenario(t))}}_downloadJson(){let t=this._buildConfigPayload(),n=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="dialog-custom-ui-config.json",i.click(),URL.revokeObjectURL(r),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}async _importJsonFile(t){if(!t)return;try{let r=await t.text(),i=JSON.parse(r),o=Array.isArray(i.scenarios)?i.scenarios:[];this._config={...fr,...i,timeout:Number(i.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(i.timer_alarm_device_ids??[]),scenarios:o.map(a=>this._normalizeScenarioForUi(a))},this._applyTheme(),this._expandedScenarios=new Set(this._config.scenarios.map(a=>a.id)),this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-json-input"]');n&&(n.value=""),this._render()}async _save(){let t=this._validate();if(t){this._error=t,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let n=this._buildConfigPayload();await this._hass.callWS({type:"dialog_custom_ui/save_config",...n});let r=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...fr,...r,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r.timer_alarm_device_ids??[]),scenarios:Array.isArray(r.scenarios)?r.scenarios.map(i=>this._normalizeScenarioForUi(i)):[]},this._applyTheme(),this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(t){t.stopPropagation()}_bindEvents(){let t=this.shadowRoot;if(!t)return;let n=tf(t);nf(this,t,n),rf(this,t,n)}async _resetCommandsCache(){let t=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!t){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._status="",this._render();return}this._error="",this._status="",this._render();let n=`${t}/api/setting/commands`,r={};this._config.timer_alarm_token&&(r.Authorization=this._config.timer_alarm_token),r["Content-Type"]="application/json";try{let i=await fetch(n,{method:"POST",headers:r,body:JSON.stringify({clientId:String(this._config.client_id??"").trim()})});if((i.status===405||i.status===404)&&(i=await fetch(n,{method:"GET",headers:this._config.timer_alarm_token?{Authorization:this._config.timer_alarm_token}:{}})),!i.ok)throw new Error(`HTTP ${i.status}`);this._status="\u041A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434 \u0441\u0431\u0440\u043E\u0448\u0435\u043D."}catch(i){this._error=i?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434."}finally{this._render()}}_renderScenarios(){return Xi(this)}_renderLogs(){return Gi(this)}_renderTimerAlarm(){return Zi(this)}_renderJsonTools(){return Ki(this)}_renderCreateScenario(){return Yi()}_renderActiveTopLevelPage(){return af(this)}_render(){let t=this._renderActiveTopLevelPage(),n=`
      ${If}
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
    `;this._mountReact(n),this._bindEvents()}};customElements.get("dialog-custom-ui-panel")||customElements.define("dialog-custom-ui-panel",Ml);
