var ic=Object.create;var fs=Object.defineProperty;var oc=Object.getOwnPropertyDescriptor;var ac=Object.getOwnPropertyNames;var sc=Object.getPrototypeOf,lc=Object.prototype.hasOwnProperty;var wt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var dc=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ac(t))!lc.call(e,i)&&i!==n&&fs(e,i,{get:()=>t[i],enumerable:!(r=oc(t,i))||r.enumerable});return e};var Ot=(e,t,n)=>(n=e!=null?ic(sc(e)):{},dc(t||!e||!e.__esModule?fs(n,"default",{value:e,enumerable:!0}):n,e));var ks=wt(T=>{"use strict";var gn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),cc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),hs=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=hs&&e[hs]||e["@@iterator"],typeof e=="function"?e:null)}var _s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ys=Object.assign,vs={};function Ut(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||_s}Ut.prototype.isReactComponent={};Ut.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ut.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ss(){}Ss.prototype=Ut.prototype;function zi(e,t,n){this.props=e,this.context=t,this.refs=vs,this.updater=n||_s}var Oi=zi.prototype=new Ss;Oi.constructor=zi;ys(Oi,Ut.prototype);Oi.isPureReactComponent=!0;var ms=Array.isArray,xs=Object.prototype.hasOwnProperty,Ui={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)xs.call(t,r)&&!ws.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:gn,type:e,key:o,ref:a,props:i,_owner:Ui.current}}function xc(e,t){return{$$typeof:gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn}function wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gs=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wc(""+e.key):t.toString(36)}function pr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gn:case uc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ri(a,0):r,ms(i)?(n="",e!=null&&(n=e.replace(gs,"$&/")+"/"),pr(i,t,n,"",function(d){return d})):i!=null&&(ji(i)&&(i=xc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gs,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ms(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Ri(o,s);a+=pr(o,t,n,l,i)}else if(l=Sc(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Ri(o,s++),a+=pr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cr(e,t,n){if(e==null)return e;var r=[],i=0;return pr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},fr={transition:null},Cc={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:fr,ReactCurrentOwner:Ui};function Cs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:cr,forEach:function(e,t,n){cr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cr(e,function(){t++}),t},toArray:function(e){return cr(e,function(t){return t})||[]},only:function(e){if(!ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Ut;T.Fragment=cc;T.Profiler=fc;T.PureComponent=zi;T.StrictMode=pc;T.Suspense=_c;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;T.act=Cs;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ys({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ui.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)xs.call(t,l)&&!ws.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:gn,type:e.type,key:i,ref:o,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:mc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hc,_context:e},e.Consumer=e};T.createElement=bs;T.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:gc,render:e}};T.isValidElement=ji;T.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:bc}};T.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=fr.transition;fr.transition={};try{e()}finally{fr.transition=t}};T.unstable_act=Cs;T.useCallback=function(e,t){return ie.current.useCallback(e,t)};T.useContext=function(e){return ie.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};T.useEffect=function(e,t){return ie.current.useEffect(e,t)};T.useId=function(){return ie.current.useId()};T.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ie.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};T.useRef=function(e){return ie.current.useRef(e)};T.useState=function(e){return ie.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ie.current.useTransition()};T.version="18.3.1"});var hr=wt((Mf,Es)=>{"use strict";Es.exports=ks()});var Rs=wt(M=>{"use strict";function Hi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<mr(i,t))e[r]=t,e[n]=i,n=r;else break e}}function Ie(e){return e.length===0?null:e[0]}function _r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var a=2*(r+1)-1,s=e[a],l=a+1,d=e[l];if(0>mr(s,n))l<i&&0>mr(d,s)?(e[r]=d,e[l]=n,r=l):(e[r]=s,e[a]=n,r=a);else if(l<i&&0>mr(d,n))e[r]=d,e[l]=n,r=l;else break e}}return t}function mr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Is=performance,M.unstable_now=function(){return Is.now()}):(Fi=Date,Ds=Fi.now(),M.unstable_now=function(){return Fi.now()-Ds});var Is,Fi,Ds,Re=[],Ze=[],kc=1,Se=null,Z=3,yr=!1,bt=!1,yn=!1,$s=typeof setTimeout=="function"?setTimeout:null,Ls=typeof clearTimeout=="function"?clearTimeout:null,Ts=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Wi(e){for(var t=Ie(Ze);t!==null;){if(t.callback===null)_r(Ze);else if(t.startTime<=e)_r(Ze),t.sortIndex=t.expirationTime,Hi(Re,t);else break;t=Ie(Ze)}}function Qi(e){if(yn=!1,Wi(e),!bt)if(Ie(Re)!==null)bt=!0,Yi(qi);else{var t=Ie(Ze);t!==null&&Ki(Qi,t.startTime-e)}}function qi(e,t){bt=!1,yn&&(yn=!1,Ls(vn),vn=-1),yr=!0;var n=Z;try{for(Wi(t),Se=Ie(Re);Se!==null&&(!(Se.expirationTime>t)||e&&!Ns());){var r=Se.callback;if(typeof r=="function"){Se.callback=null,Z=Se.priorityLevel;var i=r(Se.expirationTime<=t);t=M.unstable_now(),typeof i=="function"?Se.callback=i:Se===Ie(Re)&&_r(Re),Wi(t)}else _r(Re);Se=Ie(Re)}if(Se!==null)var o=!0;else{var a=Ie(Ze);a!==null&&Ki(Qi,a.startTime-t),o=!1}return o}finally{Se=null,Z=n,yr=!1}}var vr=!1,gr=null,vn=-1,Ms=5,Ps=-1;function Ns(){return!(M.unstable_now()-Ps<Ms)}function Bi(){if(gr!==null){var e=M.unstable_now();Ps=e;var t=!0;try{t=gr(!0,e)}finally{t?_n():(vr=!1,gr=null)}}else vr=!1}var _n;typeof Ts=="function"?_n=function(){Ts(Bi)}:typeof MessageChannel<"u"?(Vi=new MessageChannel,As=Vi.port2,Vi.port1.onmessage=Bi,_n=function(){As.postMessage(null)}):_n=function(){$s(Bi,0)};var Vi,As;function Yi(e){gr=e,vr||(vr=!0,_n())}function Ki(e,t){vn=$s(function(){e(M.unstable_now())},t)}M.unstable_IdlePriority=5;M.unstable_ImmediatePriority=1;M.unstable_LowPriority=4;M.unstable_NormalPriority=3;M.unstable_Profiling=null;M.unstable_UserBlockingPriority=2;M.unstable_cancelCallback=function(e){e.callback=null};M.unstable_continueExecution=function(){bt||yr||(bt=!0,Yi(qi))};M.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ms=0<e?Math.floor(1e3/e):5};M.unstable_getCurrentPriorityLevel=function(){return Z};M.unstable_getFirstCallbackNode=function(){return Ie(Re)};M.unstable_next=function(e){switch(Z){case 1:case 2:case 3:var t=3;break;default:t=Z}var n=Z;Z=t;try{return e()}finally{Z=n}};M.unstable_pauseExecution=function(){};M.unstable_requestPaint=function(){};M.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Z;Z=e;try{return t()}finally{Z=n}};M.unstable_scheduleCallback=function(e,t,n){var r=M.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:kc++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,Hi(Ze,e),Ie(Re)===null&&e===Ie(Ze)&&(yn?(Ls(vn),vn=-1):yn=!0,Ki(Qi,n-r))):(e.sortIndex=i,Hi(Re,e),bt||yr||(bt=!0,Yi(qi))),e};M.unstable_shouldYield=Ns;M.unstable_wrapCallback=function(e){var t=Z;return function(){var n=Z;Z=t;try{return e.apply(this,arguments)}finally{Z=n}}}});var Os=wt((Nf,zs)=>{"use strict";zs.exports=Rs()});var Bu=wt(ye=>{"use strict";var Ec=hr(),ge=Os();function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wl=new Set,Fn={};function Rt(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Fn[e]=t,e=0;e<t.length;e++)Wl.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},js={};function Dc(e){return vo.call(js,e)?!0:vo.call(Us,e)?!1:Ic.test(e)?js[e]=!0:(Us[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];J[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){J[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){J[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){J[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){J[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ca,pa);J[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ca,pa);J[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ca,pa);J[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});J.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){J[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function fa(e,t,n,r){var i=J.hasOwnProperty(t)?J[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ac(t,n,i,r)&&(n=null),r||i===null?Dc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ha=Symbol.for("react.strict_mode"),So=Symbol.for("react.profiler"),Ql=Symbol.for("react.provider"),ql=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),ga=Symbol.for("react.memo"),tt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Yl=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Fs=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,Gi;function Dn(e){if(Gi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gi=t&&t[1]||""}return`
`+Gi+e}var Xi=!1;function Ji(e,t){if(!e||Xi)return"";Xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function $c(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Bt:return"Portal";case So:return"Profiler";case ha:return"StrictMode";case xo:return"Suspense";case wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ql:return(e.displayName||"Context")+".Consumer";case Ql:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ga:return t=e.displayName||null,t!==null?t:bo(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return bo(e(t))}catch{}}return null}function Lc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bo(t);case 8:return t===ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mc(e){var t=Kl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Mc(e))}function Gl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Kl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Co(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xl(e,t){t=t.checked,t!=null&&fa(e,"checked",t,!1)}function ko(e,t){Xl(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Eo(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Eo(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(Tn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Jl(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Do(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,ed=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pc=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Pc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nc=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,t){if(t){if(Nc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function Ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function _a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lo=null,tn=null,nn=null;function Qs(e){if(e=ar(e)){if(typeof Lo!="function")throw Error(g(280));var t=e.stateNode;t&&(t=bi(t),Lo(e.stateNode,e.type,t))}}function rd(e){tn?nn?nn.push(e):nn=[e]:tn=e}function id(){if(tn){var e=tn,t=nn;if(nn=tn=null,Qs(e),t)for(e=0;e<t.length;e++)Qs(t[e])}}function od(e,t){return e(t)}function ad(){}var Zi=!1;function sd(e,t,n){if(Zi)return e(t,n);Zi=!0;try{return od(e,t,n)}finally{Zi=!1,(tn!==null||nn!==null)&&(ad(),id())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var Mo=!1;if(qe)try{jt={},Object.defineProperty(jt,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",jt,jt),window.removeEventListener("test",jt,jt)}catch{Mo=!1}var jt;function Rc(e,t,n,r,i,o,a,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Mn=!1,Gr=null,Xr=!1,Po=null,zc={onError:function(e){Mn=!0,Gr=e}};function Oc(e,t,n,r,i,o,a,s,l){Mn=!1,Gr=null,Rc.apply(zc,arguments)}function Uc(e,t,n,r,i,o,a,s,l){if(Oc.apply(this,arguments),Mn){if(Mn){var d=Gr;Mn=!1,Gr=null}else throw Error(g(198));Xr||(Xr=!0,Po=d)}}function zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ld(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qs(e){if(zt(e)!==e)throw Error(g(188))}function jc(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qs(i),e;if(o===r)return qs(i),t;o=o.sibling}throw Error(g(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function dd(e){return e=jc(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var cd=ge.unstable_scheduleCallback,Ys=ge.unstable_cancelCallback,Fc=ge.unstable_shouldYield,Bc=ge.unstable_requestPaint,V=ge.unstable_now,Vc=ge.unstable_getCurrentPriorityLevel,ya=ge.unstable_ImmediatePriority,pd=ge.unstable_UserBlockingPriority,Jr=ge.unstable_NormalPriority,Hc=ge.unstable_LowPriority,fd=ge.unstable_IdlePriority,vi=null,je=null;function Wc(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Yc,Qc=Math.log,qc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Qc(e)/qc|0)|0}var br=64,Cr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=An(s):(o&=a,o!==0&&(r=An(o)))}else a=n&~i,a!==0?r=An(a):o!==0&&(r=An(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function Kc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Le(o),s=1<<a,l=i[a];l===-1?((s&n)===0||(s&r)!==0)&&(i[a]=Kc(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hd(){var e=br;return br<<=1,(br&4194240)===0&&(br=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function Xc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var L=0;function md(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gd,Sa,_d,yd,vd,Ro=!1,kr=[],st=null,lt=null,dt=null,Hn=new Map,Wn=new Map,rt=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ks(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function xn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ar(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zc(e,t,n,r,i){switch(t){case"focusin":return st=xn(st,e,t,n,r,i),!0;case"dragenter":return lt=xn(lt,e,t,n,r,i),!0;case"mouseover":return dt=xn(dt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hn.set(o,xn(Hn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,xn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function Sd(e){var t=Et(e.target);if(t!==null){var n=zt(t);if(n!==null){if(t=n.tag,t===13){if(t=ld(n),t!==null){e.blockedOn=t,vd(e.priority,function(){_d(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$o=r,n.target.dispatchEvent(r),$o=null}else return t=ar(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function Gs(e,t,n){Ur(e)&&n.delete(t)}function ep(){Ro=!1,st!==null&&Ur(st)&&(st=null),lt!==null&&Ur(lt)&&(lt=null),dt!==null&&Ur(dt)&&(dt=null),Hn.forEach(Gs),Wn.forEach(Gs)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ro||(Ro=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,ep)))}function Qn(e){function t(i){return wn(i,e)}if(0<kr.length){wn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&wn(st,e),lt!==null&&wn(lt,e),dt!==null&&wn(dt,e),Hn.forEach(t),Wn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Sd(n),n.blockedOn===null&&rt.shift()}var rn=Xe.ReactCurrentBatchConfig,ei=!0;function tp(e,t,n,r){var i=L,o=rn.transition;rn.transition=null;try{L=1,xa(e,t,n,r)}finally{L=i,rn.transition=o}}function np(e,t,n,r){var i=L,o=rn.transition;rn.transition=null;try{L=4,xa(e,t,n,r)}finally{L=i,rn.transition=o}}function xa(e,t,n,r){if(ei){var i=zo(e,t,n,r);if(i===null)so(e,t,r,ti,n),Ks(e,r);else if(Zc(i,e,t,n,r))r.stopPropagation();else if(Ks(e,r),t&4&&-1<Jc.indexOf(e)){for(;i!==null;){var o=ar(i);if(o!==null&&gd(o),o=zo(e,t,n,r),o===null&&so(e,t,r,ti,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else so(e,t,r,null,n)}}var ti=null;function zo(e,t,n,r){if(ti=null,e=_a(r),e=Et(e),e!==null)if(t=zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case ya:return 1;case pd:return 4;case Jr:case Hc:return 16;case fd:return 536870912;default:return 16}default:return 16}}var ot=null,wa=null,jr=null;function wd(){if(jr)return jr;var e,t=wa,n=t.length,r,i="value"in ot?ot.value:ot.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return jr=i.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Xs(){return!1}function _e(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:Xs,this.isPropagationStopped=Xs,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=_e(hn),or=F({},hn,{view:0,detail:0}),rp=_e(or),to,no,bn,Si=F({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(to=e.screenX-bn.screenX,no=e.screenY-bn.screenY):no=to=0,bn=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Js=_e(Si),ip=F({},Si,{dataTransfer:0}),op=_e(ip),ap=F({},or,{relatedTarget:0}),ro=_e(ap),sp=F({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),lp=_e(sp),dp=F({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),up=_e(dp),cp=F({},hn,{data:0}),Zs=_e(cp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hp[e])?!!t[e]:!1}function Ca(){return mp}var gp=F({},or,{key:function(e){if(e.key){var t=pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ca,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=_e(gp),yp=F({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),el=_e(yp),vp=F({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ca}),Sp=_e(vp),xp=F({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=_e(xp),bp=F({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=_e(bp),kp=[9,13,27,32],ka=qe&&"CompositionEvent"in window,Pn=null;qe&&"documentMode"in document&&(Pn=document.documentMode);var Ep=qe&&"TextEvent"in window&&!Pn,bd=qe&&(!ka||Pn&&8<Pn&&11>=Pn),tl=" ",nl=!1;function Cd(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Ip(e,t){switch(e){case"compositionend":return kd(t);case"keypress":return t.which!==32?null:(nl=!0,tl);case"textInput":return e=t.data,e===tl&&nl?null:e;default:return null}}function Dp(e,t){if(Ht)return e==="compositionend"||!ka&&Cd(e,t)?(e=wd(),jr=wa=ot=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bd&&t.locale!=="ko"?null:t.data;default:return null}}var Tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tp[e.type]:t==="textarea"}function Ed(e,t,n,r){rd(r),t=ni(t,"onChange"),0<t.length&&(n=new ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,qn=null;function Ap(e){zd(e,0)}function xi(e){var t=qt(e);if(Gl(t))return e}function $p(e,t){if(e==="change")return t}var Id=!1;qe&&(qe?(Dr="oninput"in document,Dr||(io=document.createElement("div"),io.setAttribute("oninput","return;"),Dr=typeof io.oninput=="function"),Ir=Dr):Ir=!1,Id=Ir&&(!document.documentMode||9<document.documentMode));var Ir,Dr,io;function il(){Nn&&(Nn.detachEvent("onpropertychange",Dd),qn=Nn=null)}function Dd(e){if(e.propertyName==="value"&&xi(qn)){var t=[];Ed(t,qn,e,_a(e)),sd(Ap,t)}}function Lp(e,t,n){e==="focusin"?(il(),Nn=t,qn=n,Nn.attachEvent("onpropertychange",Dd)):e==="focusout"&&il()}function Mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(qn)}function Pp(e,t){if(e==="click")return xi(t)}function Np(e,t){if(e==="input"||e==="change")return xi(t)}function Rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Rp;function Yn(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vo.call(t,i)||!Pe(e[i],t[i]))return!1}return!0}function ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function al(e,t){var n=ol(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ol(n)}}function Td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ad(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zp(e){var t=Ad(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Td(n.ownerDocument.documentElement,n)){if(r!==null&&Ea(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=al(n,o);var a=al(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Op=qe&&"documentMode"in document&&11>=document.documentMode,Wt=null,Oo=null,Rn=null,Uo=!1;function sl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uo||Wt==null||Wt!==Kr(r)||(r=Wt,"selectionStart"in r&&Ea(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=ni(Oo,"onSelect"),0<r.length&&(t=new ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},oo={},$d={};qe&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function wi(e){if(oo[e])return oo[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $d)return oo[e]=t[n];return e}var Ld=wi("animationend"),Md=wi("animationiteration"),Pd=wi("animationstart"),Nd=wi("transitionend"),Rd=new Map,ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Rd.set(e,t),Rt(t,[e])}for(Ar=0;Ar<ll.length;Ar++)$r=ll[Ar],dl=$r.toLowerCase(),ul=$r[0].toUpperCase()+$r.slice(1),_t(dl,"on"+ul);var $r,dl,ul,Ar;_t(Ld,"onAnimationEnd");_t(Md,"onAnimationIteration");_t(Pd,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Nd,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function cl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uc(r,t,void 0,e),e.currentTarget=null}function zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;cl(i,s,d),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,d=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;cl(i,s,d),o=l}}}if(Xr)throw e=Po,Xr=!1,Po=null,e}function N(e,t){var n=t[Ho];n===void 0&&(n=t[Ho]=new Set);var r=e+"__bubble";n.has(r)||(Od(t,e,2,!1),n.add(r))}function ao(e,t,n){var r=0;t&&(r|=4),Od(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Lr]){e[Lr]=!0,Wl.forEach(function(n){n!=="selectionchange"&&(Up.has(n)||ao(n,!1,e),ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ao("selectionchange",!1,t))}}function Od(e,t,n,r){switch(xd(t)){case 1:var i=tp;break;case 4:i=np;break;default:i=xa}n=i.bind(null,t,n,e),i=void 0,!Mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function so(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Et(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}sd(function(){var d=o,f=_a(n),h=[];e:{var m=Rd.get(e);if(m!==void 0){var v=ba,S=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":v=_p;break;case"focusin":S="focus",v=ro;break;case"focusout":S="blur",v=ro;break;case"beforeblur":case"afterblur":v=ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Sp;break;case Ld:case Md:case Pd:v=lp;break;case Nd:v=wp;break;case"scroll":v=rp;break;case"wheel":v=Cp;break;case"copy":case"cut":case"paste":v=up;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=el}var x=(t&4)!==0,O=!x&&e==="scroll",c=x?m!==null?m+"Capture":null:m;x=[];for(var u=d,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,c!==null&&(y=Vn(u,c),y!=null&&x.push(Gn(u,y,p)))),O)break;u=u.return}0<x.length&&(m=new v(m,S,null,n,f),h.push({event:m,listeners:x}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==$o&&(S=n.relatedTarget||n.fromElement)&&(Et(S)||S[Ye]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=d,S=S?Et(S):null,S!==null&&(O=zt(S),S!==O||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=d),v!==S)){if(x=Js,y="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=el,y="onPointerLeave",c="onPointerEnter",u="pointer"),O=v==null?m:qt(v),p=S==null?m:qt(S),m=new x(y,u+"leave",v,n,f),m.target=O,m.relatedTarget=p,y=null,Et(f)===d&&(x=new x(c,u+"enter",S,n,f),x.target=p,x.relatedTarget=O,y=x),O=y,v&&S)t:{for(x=v,c=S,u=0,p=x;p;p=Ft(p))u++;for(p=0,y=c;y;y=Ft(y))p++;for(;0<u-p;)x=Ft(x),u--;for(;0<p-u;)c=Ft(c),p--;for(;u--;){if(x===c||c!==null&&x===c.alternate)break t;x=Ft(x),c=Ft(c)}x=null}else x=null;v!==null&&pl(h,m,v,x,!1),S!==null&&O!==null&&pl(h,O,S,x,!0)}}e:{if(m=d?qt(d):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var b=$p;else if(rl(m))if(Id)b=Np;else{b=Mp;var C=Lp}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=Pp);if(b&&(b=b(e,d))){Ed(h,b,n,f);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Eo(m,"number",m.value)}switch(C=d?qt(d):window,e){case"focusin":(rl(C)||C.contentEditable==="true")&&(Wt=C,Oo=d,Rn=null);break;case"focusout":Rn=Oo=Wt=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,sl(h,n,f);break;case"selectionchange":if(Op)break;case"keydown":case"keyup":sl(h,n,f)}var k;if(ka)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ht?Cd(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(bd&&n.locale!=="ko"&&(Ht||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ht&&(k=wd()):(ot=f,wa="value"in ot?ot.value:ot.textContent,Ht=!0)),C=ni(d,I),0<C.length&&(I=new Zs(I,e,null,n,f),h.push({event:I,listeners:C}),k?I.data=k:(k=kd(n),k!==null&&(I.data=k)))),(k=Ep?Ip(e,n):Dp(e,n))&&(d=ni(d,"onBeforeInput"),0<d.length&&(f=new Zs("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=k))}zd(h,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vn(e,n),o!=null&&r.unshift(Gn(e,o,i)),o=Vn(e,t),o!=null&&r.push(Gn(e,o,i))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pl(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&d!==null&&(s=d,i?(l=Vn(n,o),l!=null&&a.unshift(Gn(n,l,s))):i||(l=Vn(n,o),l!=null&&a.push(Gn(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var jp=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function fl(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(Fp,"")}function Mr(e,t,n){if(t=fl(t),fl(e)!==t&&n)throw Error(g(425))}function ri(){}var jo=null,Fo=null;function Bo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,hl=typeof Promise=="function"?Promise:void 0,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof hl<"u"?function(e){return hl.resolve(null).then(e).catch(Hp)}:Vo;function Hp(e){setTimeout(function(){throw e})}function lo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ml(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+mn,Xn="__reactProps$"+mn,Ye="__reactContainer$"+mn,Ho="__reactEvents$"+mn,Wp="__reactListeners$"+mn,Qp="__reactHandles$"+mn;function Et(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ml(e);e!==null;){if(n=e[Ue])return n;e=ml(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function bi(e){return e[Xn]||null}var Wo=[],Yt=-1;function yt(e){return{current:e}}function R(e){0>Yt||(e.current=Wo[Yt],Wo[Yt]=null,Yt--)}function P(e,t){Yt++,Wo[Yt]=e.current,e.current=t}var gt={},re=yt(gt),ue=yt(!1),$t=gt;function ln(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ce(e){return e=e.childContextTypes,e!=null}function ii(){R(ue),R(re)}function gl(e,t,n){if(re.current!==gt)throw Error(g(168));P(re,t),P(ue,n)}function Ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(g(108,Lc(e)||"Unknown",i));return F({},n,r)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,$t=re.current,P(re,e),P(ue,ue.current),!0}function _l(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=Ud(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,R(ue),R(re),P(re,e)):R(ue),P(ue,n)}var Ve=null,Ci=!1,uo=!1;function jd(e){Ve===null?Ve=[e]:Ve.push(e)}function qp(e){Ci=!0,jd(e)}function vt(){if(!uo&&Ve!==null){uo=!0;var e=0,t=L;try{var n=Ve;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,Ci=!1}catch(i){throw Ve!==null&&(Ve=Ve.slice(e+1)),cd(ya,vt),i}finally{L=t,uo=!1}}return null}var Kt=[],Gt=0,ai=null,si=0,xe=[],we=0,Lt=null,He=1,We="";function Ct(e,t){Kt[Gt++]=si,Kt[Gt++]=ai,ai=e,si=t}function Fd(e,t,n){xe[we++]=He,xe[we++]=We,xe[we++]=Lt,Lt=e;var r=He;e=We;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var o=32-Le(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,He=1<<32-Le(t)+i|n<<i|r,We=o+e}else He=1<<o|n<<i|r,We=e}function Ia(e){e.return!==null&&(Ct(e,1),Fd(e,1,0))}function Da(e){for(;e===ai;)ai=Kt[--Gt],Kt[Gt]=null,si=Kt[--Gt],Kt[Gt]=null;for(;e===Lt;)Lt=xe[--we],xe[we]=null,We=xe[--we],xe[we]=null,He=xe[--we],xe[we]=null}var me=null,he=null,z=!1,$e=null;function Bd(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function yl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,me=e,he=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,me=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,me=e,he=null,!0):!1;default:return!1}}function Qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qo(e){if(z){var t=he;if(t){var n=t;if(!yl(e,t)){if(Qo(e))throw Error(g(418));t=ut(n.nextSibling);var r=me;t&&yl(e,t)?Bd(r,n):(e.flags=e.flags&-4097|2,z=!1,me=e)}}else{if(Qo(e))throw Error(g(418));e.flags=e.flags&-4097|2,z=!1,me=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function Pr(e){if(e!==me)return!1;if(!z)return vl(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bo(e.type,e.memoizedProps)),t&&(t=he)){if(Qo(e))throw Vd(),Error(g(418));for(;t;)Bd(e,t),t=ut(t.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=me?ut(e.stateNode.nextSibling):null;return!0}function Vd(){for(var e=he;e;)e=ut(e.nextSibling)}function dn(){he=me=null,z=!1}function Ta(e){$e===null?$e=[e]:$e.push(e)}var Yp=Xe.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sl(e){var t=e._init;return t(e._payload)}function Hd(e){function t(c,u){if(e){var p=c.deletions;p===null?(c.deletions=[u],c.flags|=16):p.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=ht(c,u),c.index=0,c.sibling=null,c}function o(c,u,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<u?(c.flags|=2,u):p):(c.flags|=2,u)):(c.flags|=1048576,u)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function s(c,u,p,y){return u===null||u.tag!==6?(u=_o(p,c.mode,y),u.return=c,u):(u=i(u,p),u.return=c,u)}function l(c,u,p,y){var b=p.type;return b===Vt?f(c,u,p.props.children,y,p.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tt&&Sl(b)===u.type)?(y=i(u,p.props),y.ref=Cn(c,u,p),y.return=c,y):(y=Yr(p.type,p.key,p.props,null,c.mode,y),y.ref=Cn(c,u,p),y.return=c,y)}function d(c,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=yo(p,c.mode,y),u.return=c,u):(u=i(u,p.children||[]),u.return=c,u)}function f(c,u,p,y,b){return u===null||u.tag!==7?(u=At(p,c.mode,y,b),u.return=c,u):(u=i(u,p),u.return=c,u)}function h(c,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_o(""+u,c.mode,p),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sr:return p=Yr(u.type,u.key,u.props,null,c.mode,p),p.ref=Cn(c,null,u),p.return=c,p;case Bt:return u=yo(u,c.mode,p),u.return=c,u;case tt:var y=u._init;return h(c,y(u._payload),p)}if(Tn(u)||Sn(u))return u=At(u,c.mode,p,null),u.return=c,u;Nr(c,u)}return null}function m(c,u,p,y){var b=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:s(c,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:return p.key===b?l(c,u,p,y):null;case Bt:return p.key===b?d(c,u,p,y):null;case tt:return b=p._init,m(c,u,b(p._payload),y)}if(Tn(p)||Sn(p))return b!==null?null:f(c,u,p,y,null);Nr(c,p)}return null}function v(c,u,p,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(p)||null,s(u,c,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sr:return c=c.get(y.key===null?p:y.key)||null,l(u,c,y,b);case Bt:return c=c.get(y.key===null?p:y.key)||null,d(u,c,y,b);case tt:var C=y._init;return v(c,u,p,C(y._payload),b)}if(Tn(y)||Sn(y))return c=c.get(p)||null,f(u,c,y,b,null);Nr(u,y)}return null}function S(c,u,p,y){for(var b=null,C=null,k=u,I=u=0,q=null;k!==null&&I<p.length;I++){k.index>I?(q=k,k=null):q=k.sibling;var $=m(c,k,p[I],y);if($===null){k===null&&(k=q);break}e&&k&&$.alternate===null&&t(c,k),u=o($,u,I),C===null?b=$:C.sibling=$,C=$,k=q}if(I===p.length)return n(c,k),z&&Ct(c,I),b;if(k===null){for(;I<p.length;I++)k=h(c,p[I],y),k!==null&&(u=o(k,u,I),C===null?b=k:C.sibling=k,C=k);return z&&Ct(c,I),b}for(k=r(c,k);I<p.length;I++)q=v(k,c,I,p[I],y),q!==null&&(e&&q.alternate!==null&&k.delete(q.key===null?I:q.key),u=o(q,u,I),C===null?b=q:C.sibling=q,C=q);return e&&k.forEach(function(Je){return t(c,Je)}),z&&Ct(c,I),b}function x(c,u,p,y){var b=Sn(p);if(typeof b!="function")throw Error(g(150));if(p=b.call(p),p==null)throw Error(g(151));for(var C=b=null,k=u,I=u=0,q=null,$=p.next();k!==null&&!$.done;I++,$=p.next()){k.index>I?(q=k,k=null):q=k.sibling;var Je=m(c,k,$.value,y);if(Je===null){k===null&&(k=q);break}e&&k&&Je.alternate===null&&t(c,k),u=o(Je,u,I),C===null?b=Je:C.sibling=Je,C=Je,k=q}if($.done)return n(c,k),z&&Ct(c,I),b;if(k===null){for(;!$.done;I++,$=p.next())$=h(c,$.value,y),$!==null&&(u=o($,u,I),C===null?b=$:C.sibling=$,C=$);return z&&Ct(c,I),b}for(k=r(c,k);!$.done;I++,$=p.next())$=v(k,c,I,$.value,y),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?I:$.key),u=o($,u,I),C===null?b=$:C.sibling=$,C=$);return e&&k.forEach(function(rc){return t(c,rc)}),z&&Ct(c,I),b}function O(c,u,p,y){if(typeof p=="object"&&p!==null&&p.type===Vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sr:e:{for(var b=p.key,C=u;C!==null;){if(C.key===b){if(b=p.type,b===Vt){if(C.tag===7){n(c,C.sibling),u=i(C,p.props.children),u.return=c,c=u;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===tt&&Sl(b)===C.type){n(c,C.sibling),u=i(C,p.props),u.ref=Cn(c,C,p),u.return=c,c=u;break e}n(c,C);break}else t(c,C);C=C.sibling}p.type===Vt?(u=At(p.props.children,c.mode,y,p.key),u.return=c,c=u):(y=Yr(p.type,p.key,p.props,null,c.mode,y),y.ref=Cn(c,u,p),y.return=c,c=y)}return a(c);case Bt:e:{for(C=p.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(c,u.sibling),u=i(u,p.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=yo(p,c.mode,y),u.return=c,c=u}return a(c);case tt:return C=p._init,O(c,u,C(p._payload),y)}if(Tn(p))return S(c,u,p,y);if(Sn(p))return x(c,u,p,y);Nr(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,p),u.return=c,c=u):(n(c,u),u=_o(p,c.mode,y),u.return=c,c=u),a(c)):n(c,u)}return O}var un=Hd(!0),Wd=Hd(!1),li=yt(null),di=null,Xt=null,Aa=null;function $a(){Aa=Xt=di=null}function La(e){var t=li.current;R(li),e._currentValue=t}function Yo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){di=e,Aa=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(de=!0),e.firstContext=null)}function ke(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(di===null)throw Error(g(308));Xt=e,di.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var It=null;function Ma(e){It===null?It=[e]:It.push(e)}function Qd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ma(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(A&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ke(e,n)}return i=r.interleaved,i===null?(t.next=t,Ma(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ke(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}function xl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var i=e.updateQueue;nt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,a===null?o=d:a.next=d,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=d:s.next=d,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;a=0,f=d=l=null,s=o;do{var m=s.lane,v=s.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,x=s;switch(m=t,v=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){h=S.call(v,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,m=typeof S=="function"?S.call(v,h,m):S,m==null)break e;h=F({},h,m);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(d=f=v,l=h):f=f.next=v,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pt|=a,e.lanes=a,e.memoizedState=h}}function wl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(g(191,i));i.call(r)}}}var sr={},Fe=yt(sr),Jn=yt(sr),Zn=yt(sr);function Dt(e){if(e===sr)throw Error(g(174));return e}function Na(e,t){switch(P(Zn,t),P(Jn,e),P(Fe,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Do(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Do(t,e)}R(Fe),P(Fe,t)}function cn(){R(Fe),R(Jn),R(Zn)}function Yd(e){Dt(Zn.current);var t=Dt(Fe.current),n=Do(t,e.type);t!==n&&(P(Jn,e),P(Fe,n))}function Ra(e){Jn.current===e&&(R(Fe),R(Jn))}var U=yt(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function za(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Vr=Xe.ReactCurrentDispatcher,po=Xe.ReactCurrentBatchConfig,Mt=0,j=null,W=null,Y=null,pi=!1,zn=!1,er=0,Kp=0;function ee(){throw Error(g(321))}function Oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pe(e[n],t[n]))return!1;return!0}function Ua(e,t,n,r,i,o){if(Mt=o,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?Zp:ef,e=n(r,i),zn){o=0;do{if(zn=!1,er=0,25<=o)throw Error(g(301));o+=1,Y=W=null,t.updateQueue=null,Vr.current=tf,e=n(r,i)}while(zn)}if(Vr.current=fi,t=W!==null&&W.next!==null,Mt=0,Y=W=j=null,pi=!1,t)throw Error(g(300));return e}function ja(){var e=er!==0;return er=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?j.memoizedState=Y=e:Y=Y.next=e,Y}function Ee(){if(W===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=Y===null?j.memoizedState:Y.next;if(t!==null)Y=t,W=e;else{if(e===null)throw Error(g(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},Y===null?j.memoizedState=Y=e:Y=Y.next=e}return Y}function tr(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=Ee(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=W,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,d=o;do{var f=d.lane;if((Mt&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=h,a=r):l=l.next=h,j.lanes|=f,Pt|=f}d=d.next}while(d!==null&&d!==o);l===null?a=r:l.next=s,Pe(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,j.lanes|=o,Pt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ho(e){var t=Ee(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Pe(o,t.memoizedState)||(de=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kd(){}function Gd(e,t){var n=j,r=Ee(),i=t(),o=!Pe(r.memoizedState,i);if(o&&(r.memoizedState=i,de=!0),r=r.queue,Fa(Zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,nr(9,Jd.bind(null,n,r,i,t),void 0,null),K===null)throw Error(g(349));(Mt&30)!==0||Xd(n,t,i)}return i}function Xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,r){t.value=n,t.getSnapshot=r,eu(t)&&tu(e)}function Zd(e,t,n){return n(function(){eu(t)&&tu(e)})}function eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pe(e,n)}catch{return!0}}function tu(e){var t=Ke(e,1);t!==null&&Me(t,e,1,-1)}function bl(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jp.bind(null,j,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nu(){return Ee().memoizedState}function Hr(e,t,n,r){var i=Oe();j.flags|=e,i.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(W!==null){var a=W.memoizedState;if(o=a.destroy,r!==null&&Oa(r,a.deps)){i.memoizedState=nr(t,n,o,r);return}}j.flags|=e,i.memoizedState=nr(1|t,n,o,r)}function Cl(e,t){return Hr(8390656,8,e,t)}function Fa(e,t){return ki(2048,8,e,t)}function ru(e,t){return ki(4,2,e,t)}function iu(e,t){return ki(4,4,e,t)}function ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function au(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,ou.bind(null,t,e),n)}function Ba(){}function su(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function du(e,t,n){return(Mt&21)===0?(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n):(Pe(n,t)||(n=hd(),j.lanes|=n,Pt|=n,e.baseState=!0),t)}function Gp(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=po.transition;po.transition={};try{e(!1),t()}finally{L=n,po.transition=r}}function uu(){return Ee().memoizedState}function Xp(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cu(e))pu(t,n);else if(n=Qd(e,t,n,r),n!==null){var i=ae();Me(n,e,r,i),fu(n,t,r)}}function Jp(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cu(e))pu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Pe(s,a)){var l=t.interleaved;l===null?(i.next=i,Ma(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Qd(e,t,i,r),n!==null&&(i=ae(),Me(n,e,r,i),fu(n,t,r))}}function cu(e){var t=e.alternate;return e===j||t!==null&&t===j}function pu(e,t){zn=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,va(e,n)}}var fi={readContext:ke,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},Zp={readContext:ke,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Cl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,ou.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xp.bind(null,j,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:bl,useDebugValue:Ba,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=bl(!1),t=e[0];return e=Gp.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=j,i=Oe();if(z){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),K===null)throw Error(g(349));(Mt&30)!==0||Xd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Cl(Zd.bind(null,r,o,e),[e]),r.flags|=2048,nr(9,Jd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Oe(),t=K.identifierPrefix;if(z){var n=We,r=He;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ef={readContext:ke,useCallback:su,useContext:ke,useEffect:Fa,useImperativeHandle:au,useInsertionEffect:ru,useLayoutEffect:iu,useMemo:lu,useReducer:fo,useRef:nu,useState:function(){return fo(tr)},useDebugValue:Ba,useDeferredValue:function(e){var t=Ee();return du(t,W.memoizedState,e)},useTransition:function(){var e=fo(tr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Gd,useId:uu,unstable_isNewReconciler:!1},tf={readContext:ke,useCallback:su,useContext:ke,useEffect:Fa,useImperativeHandle:au,useInsertionEffect:ru,useLayoutEffect:iu,useMemo:lu,useReducer:ho,useRef:nu,useState:function(){return ho(tr)},useDebugValue:Ba,useDeferredValue:function(e){var t=Ee();return W===null?t.memoizedState=e:du(t,W.memoizedState,e)},useTransition:function(){var e=ho(tr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:Kd,useSyncExternalStore:Gd,useId:uu,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ko(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),i=ft(e),o=Qe(r,i);o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,i),t!==null&&(Me(t,e,i,r),Br(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),i=ft(e),o=Qe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ct(e,o,i),t!==null&&(Me(t,e,i,r),Br(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ft(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ct(e,i,r),t!==null&&(Me(t,e,r,n),Br(t,e,r))}};function kl(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,o):!0}function hu(e,t,n){var r=!1,i=gt,o=t.contextType;return typeof o=="object"&&o!==null?o=ke(o):(i=ce(t)?$t:re.current,r=t.contextTypes,o=(r=r!=null)?ln(e,i):gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function El(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function Go(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Pa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ke(o):(o=ce(t)?$t:re.current,i.context=ln(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ko(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ei.enqueueReplaceState(i,i.state,null),ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function mo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nf=typeof WeakMap=="function"?WeakMap:Map;function mu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,sa=r),Xo(e,t)},n}function gu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xo(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Il(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Dl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tl(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var rf=Xe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?Wd(t,null,n,r):un(t,e.child,n,r)}function Al(e,t,n,r,i){n=n.render;var o=t.ref;return on(t,i),r=Ua(e,t,n,r,o,i),n=ja(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(z&&n&&Ia(t),t.flags|=1,oe(e,t,r,i),t.child)}function $l(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ga(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_u(e,t,o,r,i)):(e=Yr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(a,r)&&e.ref===t.ref)return Ge(e,t,i)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function _u(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,i)}return Jo(e,t,n,r,i)}function yu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},P(Zt,fe),fe|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,P(Zt,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,P(Zt,fe),fe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,P(Zt,fe),fe|=r;return oe(e,t,i,n),t.child}function vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jo(e,t,n,r,i){var o=ce(n)?$t:re.current;return o=ln(t,o),on(t,i),n=Ua(e,t,n,r,o,i),r=ja(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(z&&r&&Ia(t),t.flags|=1,oe(e,t,n,i),t.child)}function Ll(e,t,n,r,i){if(ce(n)){var o=!0;oi(t)}else o=!1;if(on(t,i),t.stateNode===null)Wr(e,t),hu(t,n,r),Go(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ke(d):(d=ce(n)?$t:re.current,d=ln(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==d)&&El(t,a,r,d),nt=!1;var m=t.memoizedState;a.state=m,ui(t,r,a,i),l=t.memoizedState,s!==r||m!==l||ue.current||nt?(typeof f=="function"&&(Ko(t,n,f,r),l=t.memoizedState),(s=nt||kl(t,n,s,r,m,l,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qd(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Te(t.type,s),a.props=d,h=t.pendingProps,m=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ke(l):(l=ce(n)?$t:re.current,l=ln(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==l)&&El(t,a,r,l),nt=!1,m=t.memoizedState,a.state=m,ui(t,r,a,i);var S=t.memoizedState;s!==h||m!==S||ue.current||nt?(typeof v=="function"&&(Ko(t,n,v,r),S=t.memoizedState),(d=nt||kl(t,n,d,r,m,S,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=l,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Zo(e,t,n,r,o,i)}function Zo(e,t,n,r,i,o){vu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&_l(t,n,!1),Ge(e,t,o);r=t.stateNode,rf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=un(t,e.child,null,o),t.child=un(t,null,s,o)):oe(e,t,s,o),t.memoizedState=r.state,i&&_l(t,n,!0),t.child}function Su(e){var t=e.stateNode;t.pendingContext?gl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gl(e,t.context,!1),Na(e,t.containerInfo)}function Ml(e,t,n,r,i){return dn(),Ta(i),t.flags|=256,oe(e,t,n,r),t.child}var ea={dehydrated:null,treeContext:null,retryLane:0};function ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function xu(e,t,n){var r=t.pendingProps,i=U.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),P(U,i&1),e===null)return qo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ti(a,r,0,null),e=At(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ta(n),t.memoizedState=ea,e):Va(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return of(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ht(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ht(s,o):(o=At(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ta(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ea,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&Ta(r),un(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function of(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=mo(Error(g(422))),Rr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ti({mode:"visible",children:r.children},i,0,null),o=At(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&un(t,e.child,null,a),t.child.memoizedState=ta(a),t.memoizedState=ea,o);if((t.mode&1)===0)return Rr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(g(419)),r=mo(o,r,void 0),Rr(e,t,a,r)}if(s=(a&e.childLanes)!==0,de||s){if(r=K,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(e,i),Me(r,e,i,-1))}return Ka(),r=mo(Error(g(421))),Rr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,he=ut(i.nextSibling),me=t,z=!0,$e=null,e!==null&&(xe[we++]=He,xe[we++]=We,xe[we++]=Lt,He=e.id,We=e.overflow,Lt=t),t=Va(t,r.children),t.flags|=4096,t)}function Pl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yo(e.return,t,n)}function go(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,t,r.children,n),r=U.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pl(e,n,t);else if(e.tag===19)Pl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(P(U,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ci(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),go(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}go(t,!0,n,null,o);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:Su(t),dn();break;case 5:Yd(t);break;case 1:ce(t.type)&&oi(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;P(li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(P(U,U.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?xu(e,t,n):(P(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);P(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return wu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,yu(e,t,n)}return Ge(e,t,n)}var bu,na,Cu,ku;bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};na=function(){};Cu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dt(Fe.current);var o=null;switch(n){case"input":i=Co(e,i),r=Co(e,r),o=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":i=Io(e,i),r=Io(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}To(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(s=i?.[d],r.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&N("scroll",e),o||s===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function kn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sf(e,t,n){var r=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return ce(t.type)&&ii(),te(t),null;case 3:return r=t.stateNode,cn(),R(ue),R(re),za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$e!==null&&(ua($e),$e=null))),na(e,t),te(t),null;case 5:Ra(t);var i=Dt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)Cu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return te(t),null}if(e=Dt(Fe.current),Pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[Xn]=o,e=(t.mode&1)!==0,n){case"dialog":N("cancel",r),N("close",r);break;case"iframe":case"object":case"embed":N("load",r);break;case"video":case"audio":for(i=0;i<$n.length;i++)N($n[i],r);break;case"source":N("error",r);break;case"img":case"image":case"link":N("error",r),N("load",r);break;case"details":N("toggle",r);break;case"input":Bs(r,o),N("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},N("invalid",r);break;case"textarea":Hs(r,o),N("invalid",r)}To(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,s,e),i=["children",""+s]):Fn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&N("scroll",r)}switch(n){case"input":xr(r),Vs(r,o,!0);break;case"textarea":xr(r),Ws(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ue]=t,e[Xn]=r,bu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ao(n,r),n){case"dialog":N("cancel",e),N("close",e),i=r;break;case"iframe":case"object":case"embed":N("load",e),i=r;break;case"video":case"audio":for(i=0;i<$n.length;i++)N($n[i],e);i=r;break;case"source":N("error",e),i=r;break;case"img":case"image":case"link":N("error",e),N("load",e),i=r;break;case"details":N("toggle",e),i=r;break;case"input":Bs(e,r),i=Co(e,r),N("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),N("invalid",e);break;case"textarea":Hs(e,r),i=Io(e,r),N("invalid",e);break;default:i=r}To(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?nd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ed(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bn(e,l):typeof l=="number"&&Bn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&N("scroll",e):l!=null&&fa(e,o,l,a))}switch(n){case"input":xr(e),Vs(e,r,!1);break;case"textarea":xr(e),Ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?en(e,!!r.multiple,o,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Dt(Zn.current),Dt(Fe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=me,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return te(t),null;case 13:if(R(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&he!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Vd(),dn(),t.flags|=98560,o=!1;else if(o=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Ue]=t}else dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;te(t),o=!1}else $e!==null&&(ua($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(U.current&1)!==0?Q===0&&(Q=3):Ka())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return cn(),na(e,t),e===null&&Kn(t.stateNode.containerInfo),te(t),null;case 10:return La(t.type._context),te(t),null;case 17:return ce(t.type)&&ii(),te(t),null;case 19:if(R(U),o=t.memoizedState,o===null)return te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)kn(o,!1);else{if(Q!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ci(e),a!==null){for(t.flags|=128,kn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return P(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&V()>fn&&(t.flags|=128,r=!0,kn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ci(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!z)return te(t),null}else 2*V()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,kn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=V(),t.sibling=null,n=U.current,P(U,r?n&1|2:n&1),t):(te(t),null);case 22:case 23:return Ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(fe&1073741824)!==0&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function lf(e,t){switch(Da(t),t.tag){case 1:return ce(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),R(ue),R(re),za(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ra(t),null;case 13:if(R(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(U),null;case 4:return cn(),null;case 10:return La(t.type._context),null;case 22:case 23:return Ya(),null;case 24:return null;default:return null}}var zr=!1,ne=!1,df=typeof WeakSet=="function"?WeakSet:Set,w=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function ra(e,t,n){try{n()}catch(r){B(e,t,r)}}var Nl=!1;function uf(e,t){if(jo=ei,e=Ad(),Ea(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,d=0,f=0,h=e,m=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(s=a+i),h!==o||r!==0&&h.nodeType!==3||(l=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(v=h.firstChild)!==null;)m=h,h=v;for(;;){if(h===e)break t;if(m===n&&++d===i&&(s=a),m===o&&++f===r&&(l=a),(v=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fo={focusedElem:e,selectionRange:n},ei=!1,w=t;w!==null;)if(t=w,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,w=e;else for(;w!==null;){t=w;try{var S=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,O=S.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?x:Te(t.type,x),O);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){B(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,w=e;break}w=t.return}return S=Nl,Nl=!1,S}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ra(t,n,o)}i=i.next}while(i!==r)}}function Ii(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eu(e){var t=e.alternate;t!==null&&(e.alternate=null,Eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Xn],delete t[Ho],delete t[Wp],delete t[Qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iu(e){return e.tag===5||e.tag===3||e.tag===4}function Rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}var G=null,Ae=!1;function et(e,t,n){for(n=n.child;n!==null;)Du(e,t,n),n=n.sibling}function Du(e,t,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:ne||Jt(n,t);case 6:var r=G,i=Ae;G=null,et(e,t,n),G=r,Ae=i,G!==null&&(Ae?(e=G,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):G.removeChild(n.stateNode));break;case 18:G!==null&&(Ae?(e=G,n=n.stateNode,e.nodeType===8?lo(e.parentNode,n):e.nodeType===1&&lo(e,n),Qn(e)):lo(G,n.stateNode));break;case 4:r=G,i=Ae,G=n.stateNode.containerInfo,Ae=!0,et(e,t,n),G=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&ra(n,t,a),i=i.next}while(i!==r)}et(e,t,n);break;case 1:if(!ne&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){B(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ne=(r=ne)||n.memoizedState!==null,et(e,t,n),ne=r):et(e,t,n);break;default:et(e,t,n)}}function zl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var i=vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:G=s.stateNode,Ae=!1;break e;case 3:G=s.stateNode.containerInfo,Ae=!0;break e;case 4:G=s.stateNode.containerInfo,Ae=!0;break e}s=s.return}if(G===null)throw Error(g(160));Du(o,a,i),G=null,Ae=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){B(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tu(t,e),t=t.sibling}function Tu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),ze(e),r&4){try{On(3,e,e.return),Ii(3,e)}catch(x){B(e,e.return,x)}try{On(5,e,e.return)}catch(x){B(e,e.return,x)}}break;case 1:De(t,e),ze(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(De(t,e),ze(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{Bn(i,"")}catch(x){B(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Xl(i,o),Ao(s,a);var d=Ao(s,o);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?nd(i,h):f==="dangerouslySetInnerHTML"?ed(i,h):f==="children"?Bn(i,h):fa(i,f,h,d)}switch(s){case"input":ko(i,o);break;case"textarea":Jl(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?en(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?en(i,!!o.multiple,o.defaultValue,!0):en(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xn]=o}catch(x){B(e,e.return,x)}}break;case 6:if(De(t,e),ze(e),r&4){if(e.stateNode===null)throw Error(g(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){B(e,e.return,x)}}break;case 3:if(De(t,e),ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(x){B(e,e.return,x)}break;case 4:De(t,e),ze(e);break;case 13:De(t,e),ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qa=V())),r&4&&zl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||f,De(t,e),ne=d):De(t,e),ze(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&(e.mode&1)!==0)for(w=e,f=e.child;f!==null;){for(h=w=f;w!==null;){switch(m=w,v=m.child,m.tag){case 0:case 11:case 14:case 15:On(4,m,m.return);break;case 1:Jt(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(x){B(r,n,x)}}break;case 5:Jt(m,m.return);break;case 22:if(m.memoizedState!==null){Ul(h);continue}}v!==null?(v.return=m,w=v):Ul(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=td("display",a))}catch(x){B(e,e.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(x){B(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(t,e),ze(e),r&4&&zl(e);break;case 21:break;default:De(t,e),ze(e)}}function ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iu(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bn(i,""),r.flags&=-33);var o=Rl(e);aa(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Rl(e);oa(e,s,a);break;default:throw Error(g(161))}}catch(l){B(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,n){w=e,Au(e,t,n)}function Au(e,t,n){for(var r=(e.mode&1)!==0;w!==null;){var i=w,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||zr;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ne;s=zr;var d=ne;if(zr=a,(ne=l)&&!d)for(w=i;w!==null;)a=w,l=a.child,a.tag===22&&a.memoizedState!==null?jl(i):l!==null?(l.return=a,w=l):jl(i);for(;o!==null;)w=o,Au(o,t,n),o=o.sibling;w=i,zr=s,ne=d}Ol(e,t,n)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,w=o):Ol(e,t,n)}}function Ol(e){for(;w!==null;){var t=w;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ne||Ii(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wl(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}ne||t.flags&512&&ia(t)}catch(m){B(t,t.return,m)}}if(t===e){w=null;break}if(n=t.sibling,n!==null){n.return=t.return,w=n;break}w=t.return}}function Ul(e){for(;w!==null;){var t=w;if(t===e){w=null;break}var n=t.sibling;if(n!==null){n.return=t.return,w=n;break}w=t.return}}function jl(e){for(;w!==null;){var t=w;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ii(4,t)}catch(l){B(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){B(t,i,l)}}var o=t.return;try{ia(t)}catch(l){B(t,o,l)}break;case 5:var a=t.return;try{ia(t)}catch(l){B(t,a,l)}}}catch(l){B(t,t.return,l)}if(t===e){w=null;break}var s=t.sibling;if(s!==null){s.return=t.return,w=s;break}w=t.return}}var pf=Math.ceil,hi=Xe.ReactCurrentDispatcher,Ha=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,A=0,K=null,H=null,X=0,fe=0,Zt=yt(0),Q=0,rr=null,Pt=0,Di=0,Wa=0,Un=null,le=null,Qa=0,fn=1/0,Be=null,mi=!1,sa=null,pt=null,Or=!1,at=null,gi=0,jn=0,la=null,Qr=-1,qr=0;function ae(){return(A&6)!==0?V():Qr!==-1?Qr:Qr=V()}function ft(e){return(e.mode&1)===0?1:(A&2)!==0&&X!==0?X&-X:Yp.transition!==null?(qr===0&&(qr=hd()),qr):(e=L,e!==0||(e=window.event,e=e===void 0?16:xd(e.type)),e)}function Me(e,t,n,r){if(50<jn)throw jn=0,la=null,Error(g(185));ir(e,n,r),((A&2)===0||e!==K)&&(e===K&&((A&2)===0&&(Di|=n),Q===4&&it(e,X)),pe(e,r),n===1&&A===0&&(t.mode&1)===0&&(fn=V()+500,Ci&&vt()))}function pe(e,t){var n=e.callbackNode;Gc(e,t);var r=Zr(e,e===K?X:0);if(r===0)n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ys(n),t===1)e.tag===0?qp(Fl.bind(null,e)):jd(Fl.bind(null,e)),Vp(function(){(A&6)===0&&vt()}),n=null;else{switch(md(r)){case 1:n=ya;break;case 4:n=pd;break;case 16:n=Jr;break;case 536870912:n=fd;break;default:n=Jr}n=Ou(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(Qr=-1,qr=0,(A&6)!==0)throw Error(g(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Zr(e,e===K?X:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=_i(e,r);else{t=r;var i=A;A|=2;var o=Mu();(K!==e||X!==t)&&(Be=null,fn=V()+500,Tt(e,t));do try{mf();break}catch(s){Lu(e,s)}while(!0);$a(),hi.current=o,A=i,H!==null?t=0:(K=null,X=0,t=Q)}if(t!==0){if(t===2&&(i=No(e),i!==0&&(r=i,t=da(e,i))),t===1)throw n=rr,Tt(e,0),it(e,r),pe(e,V()),n;if(t===6)it(e,r);else{if(i=e.current.alternate,(r&30)===0&&!ff(i)&&(t=_i(e,r),t===2&&(o=No(e),o!==0&&(r=o,t=da(e,o))),t===1))throw n=rr,Tt(e,0),it(e,r),pe(e,V()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:kt(e,le,Be);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Qa+500-V(),10<t)){if(Zr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vo(kt.bind(null,e,le,Be),t);break}kt(e,le,Be);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Le(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pf(r/1960))-r,10<r){e.timeoutHandle=Vo(kt.bind(null,e,le,Be),r);break}kt(e,le,Be);break;case 5:kt(e,le,Be);break;default:throw Error(g(329))}}}return pe(e,V()),e.callbackNode===n?$u.bind(null,e):null}function da(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=_i(e,t),e!==2&&(t=le,le=n,t!==null&&ua(t)),e}function ua(e){le===null?le=e:le.push.apply(le,e)}function ff(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Wa,t&=~Di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Fl(e){if((A&6)!==0)throw Error(g(327));an();var t=Zr(e,0);if((t&1)===0)return pe(e,V()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=No(e);r!==0&&(t=r,n=da(e,r))}if(n===1)throw n=rr,Tt(e,0),it(e,t),pe(e,V()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,le,Be),pe(e,V()),null}function qa(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(fn=V()+500,Ci&&vt())}}function Nt(e){at!==null&&at.tag===0&&(A&6)===0&&an();var t=A;A|=1;var n=Ce.transition,r=L;try{if(Ce.transition=null,L=1,e)return e()}finally{L=r,Ce.transition=n,A=t,(A&6)===0&&vt()}}function Ya(){fe=Zt.current,R(Zt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bp(n)),H!==null)for(n=H.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:cn(),R(ue),R(re),za();break;case 5:Ra(r);break;case 4:cn();break;case 13:R(U);break;case 19:R(U);break;case 10:La(r.type._context);break;case 22:case 23:Ya()}n=n.return}if(K=e,H=e=ht(e.current,null),X=fe=t,Q=0,rr=null,Wa=Di=Pt=0,le=Un=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}It=null}return e}function Lu(e,t){do{var n=H;try{if($a(),Vr.current=fi,pi){for(var r=j.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pi=!1}if(Mt=0,Y=W=j=null,zn=!1,er=0,Ha.current=null,n===null||n.return===null){Q=1,rr=t,H=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=X,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=s,h=f.tag;if((f.mode&1)===0&&(h===0||h===11||h===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Dl(a);if(v!==null){v.flags&=-257,Tl(v,a,s,o,t),v.mode&1&&Il(o,d,t),t=v,l=d;var S=t.updateQueue;if(S===null){var x=new Set;x.add(l),t.updateQueue=x}else S.add(l);break e}else{if((t&1)===0){Il(o,d,t),Ka();break e}l=Error(g(426))}}else if(z&&s.mode&1){var O=Dl(a);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),Tl(O,a,s,o,t),Ta(pn(l,s));break e}}o=l=pn(l,s),Q!==4&&(Q=2),Un===null?Un=[o]:Un.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=mu(o,l,t);xl(o,c);break e;case 1:s=l;var u=o.type,p=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=gu(o,s,t);xl(o,y);break e}}o=o.return}while(o!==null)}Nu(n)}catch(b){t=b,H===n&&n!==null&&(H=n=n.return);continue}break}while(!0)}function Mu(){var e=hi.current;return hi.current=fi,e===null?fi:e}function Ka(){(Q===0||Q===3||Q===2)&&(Q=4),K===null||(Pt&268435455)===0&&(Di&268435455)===0||it(K,X)}function _i(e,t){var n=A;A|=2;var r=Mu();(K!==e||X!==t)&&(Be=null,Tt(e,t));do try{hf();break}catch(i){Lu(e,i)}while(!0);if($a(),A=n,hi.current=r,H!==null)throw Error(g(261));return K=null,X=0,Q}function hf(){for(;H!==null;)Pu(H)}function mf(){for(;H!==null&&!Fc();)Pu(H)}function Pu(e){var t=zu(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?Nu(e):H=t,Ha.current=null}function Nu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sf(n,t,fe),n!==null){H=n;return}}else{if(n=lf(n,t),n!==null){n.flags&=32767,H=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,H=null;return}}if(t=t.sibling,t!==null){H=t;return}H=t=e}while(t!==null);Q===0&&(Q=5)}function kt(e,t,n){var r=L,i=Ce.transition;try{Ce.transition=null,L=1,gf(e,t,n,r)}finally{Ce.transition=i,L=r}return null}function gf(e,t,n,r){do an();while(at!==null);if((A&6)!==0)throw Error(g(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Xc(e,o),e===K&&(H=K=null,X=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Or||(Or=!0,Ou(Jr,function(){return an(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ce.transition,Ce.transition=null;var a=L;L=1;var s=A;A|=4,Ha.current=null,uf(e,n),Tu(n,e),zp(Fo),ei=!!jo,Fo=jo=null,e.current=n,cf(n,e,i),Bc(),A=s,L=a,Ce.transition=o}else e.current=n;if(Or&&(Or=!1,at=e,gi=i),o=e.pendingLanes,o===0&&(pt=null),Wc(n.stateNode,r),pe(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mi)throw mi=!1,e=sa,sa=null,e;return(gi&1)!==0&&e.tag!==0&&an(),o=e.pendingLanes,(o&1)!==0?e===la?jn++:(jn=0,la=e):jn=0,vt(),null}function an(){if(at!==null){var e=md(gi),t=Ce.transition,n=L;try{if(Ce.transition=null,L=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,gi=0,(A&6)!==0)throw Error(g(331));var i=A;for(A|=4,w=e.current;w!==null;){var o=w,a=o.child;if((w.flags&16)!==0){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(w=d;w!==null;){var f=w;switch(f.tag){case 0:case 11:case 15:On(8,f,o)}var h=f.child;if(h!==null)h.return=f,w=h;else for(;w!==null;){f=w;var m=f.sibling,v=f.return;if(Eu(f),f===d){w=null;break}if(m!==null){m.return=v,w=m;break}w=v}}}var S=o.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var O=x.sibling;x.sibling=null,x=O}while(x!==null)}}w=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,w=a;else e:for(;w!==null;){if(o=w,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:On(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,w=c;break e}w=o.return}}var u=e.current;for(w=u;w!==null;){a=w;var p=a.child;if((a.subtreeFlags&2064)!==0&&p!==null)p.return=a,w=p;else e:for(a=u;w!==null;){if(s=w,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ii(9,s)}}catch(b){B(s,s.return,b)}if(s===a){w=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,w=y;break e}w=s.return}}if(A=i,vt(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{L=n,Ce.transition=t}}return!1}function Bl(e,t,n){t=pn(n,t),t=mu(e,t,1),e=ct(e,t,1),t=ae(),e!==null&&(ir(e,1,t),pe(e,t))}function B(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=pn(n,e),e=gu(t,e,1),t=ct(t,e,1),e=ae(),t!==null&&(ir(t,1,e),pe(t,e));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,K===e&&(X&n)===n&&(Q===4||Q===3&&(X&130023424)===X&&500>V()-Qa?Tt(e,0):Wa|=n),pe(e,t)}function Ru(e,t){t===0&&((e.mode&1)===0?t=1:(t=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var n=ae();e=Ke(e,t),e!==null&&(ir(e,t,n),pe(e,n))}function yf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ru(e,n)}function vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Ru(e,n)}var zu;zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)de=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return de=!1,af(e,t,n);de=(e.flags&131072)!==0}else de=!1,z&&(t.flags&1048576)!==0&&Fd(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var i=ln(t,re.current);on(t,n),i=Ua(null,t,r,e,i,n);var o=ja();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ce(r)?(o=!0,oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pa(t),i.updater=Ei,t.stateNode=i,i._reactInternals=t,Go(t,r,e,n),t=Zo(null,t,r,!0,o,n)):(t.tag=0,z&&o&&Ia(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xf(r),e=Te(r,e),i){case 0:t=Jo(null,t,r,e,n);break e;case 1:t=Ll(null,t,r,e,n);break e;case 11:t=Al(null,t,r,e,n);break e;case 14:t=$l(null,t,r,Te(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Jo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Ll(e,t,r,i,n);case 3:e:{if(Su(t),e===null)throw Error(g(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qd(e,t),ui(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=pn(Error(g(423)),t),t=Ml(e,t,r,n,i);break e}else if(r!==i){i=pn(Error(g(424)),t),t=Ml(e,t,r,n,i);break e}else for(he=ut(t.stateNode.containerInfo.firstChild),me=t,z=!0,$e=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return Yd(t),e===null&&qo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Bo(r,i)?a=null:o!==null&&Bo(r,o)&&(t.flags|=32),vu(e,t),oe(e,t,a,n),t.child;case 6:return e===null&&qo(t),null;case 13:return xu(e,t,n);case 4:return Na(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Al(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,P(li,r._currentValue),r._currentValue=a,o!==null)if(Pe(o.value,a)){if(o.children===i.children&&!ue.current){t=Ge(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Qe(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yo(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(g(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Yo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=ke(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=Te(r,t.pendingProps),i=Te(r.type,i),$l(e,t,r,i,n);case 15:return _u(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Te(r,i),Wr(e,t),t.tag=1,ce(r)?(e=!0,oi(t)):e=!1,on(t,n),hu(t,r,i),Go(t,r,i,n),Zo(null,t,r,!0,e,n);case 19:return wu(e,t,n);case 22:return yu(e,t,n)}throw Error(g(156,t.tag))};function Ou(e,t){return cd(e,t)}function Sf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Sf(e,t,n,r)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ga)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Vt:return At(n.children,i,o,t);case ha:a=8,i|=8;break;case So:return e=be(12,n,t,i|2),e.elementType=So,e.lanes=o,e;case xo:return e=be(13,n,t,i),e.elementType=xo,e.lanes=o,e;case wo:return e=be(19,n,t,i),e.elementType=wo,e.lanes=o,e;case Yl:return Ti(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ql:a=10;break e;case ql:a=9;break e;case ma:a=11;break e;case ga:a=14;break e;case tt:a=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=be(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function At(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=be(22,e,r,t),e.elementType=Yl,e.lanes=n,e.stateNode={isHidden:!1},e}function _o(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function yo(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,i,o,a,s,l){return e=new wf(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(o),e}function bf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uu(e){if(!e)return gt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(ce(n))return Ud(e,n,t)}return t}function ju(e,t,n,r,i,o,a,s,l){return e=Xa(n,r,!0,e,i,o,a,s,l),e.context=Uu(null),n=e.current,r=ae(),i=ft(n),o=Qe(r,i),o.callback=t??null,ct(n,o,i),e.current.lanes=i,ir(e,i,r),pe(e,r),e}function Ai(e,t,n,r){var i=t.current,o=ae(),a=ft(i);return n=Uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(i,t,a),e!==null&&(Me(e,i,a,o),Br(e,i,a)),a}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ja(e,t){Vl(e,t),(e=e.alternate)&&Vl(e,t)}function Cf(){return null}var Fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}$i.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));Ai(e,t,null,null)};$i.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){Ai(null,e,null,null)}),t[Ye]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=yd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Sd(e)}};function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hl(){}function kf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=yi(a);o.call(d)}}var a=ju(t,r,e,0,null,!1,!1,"",Hl);return e._reactRootContainer=a,e[Ye]=a.current,Kn(e.nodeType===8?e.parentNode:e),Nt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=yi(l);s.call(d)}}var l=Xa(e,0,!1,null,null,!1,!1,"",Hl);return e._reactRootContainer=l,e[Ye]=l.current,Kn(e.nodeType===8?e.parentNode:e),Nt(function(){Ai(t,l,n,r)}),l}function Mi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=yi(a);s.call(l)}}Ai(t,a,e,i)}else a=kf(n,t,e,i,r);return yi(a)}gd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(va(t,n|1),pe(t,V()),(A&6)===0&&(fn=V()+500,vt()))}break;case 13:Nt(function(){var r=Ke(e,1);if(r!==null){var i=ae();Me(r,e,1,i)}}),Ja(e,1)}};Sa=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=ae();Me(t,e,134217728,n)}Ja(e,134217728)}};_d=function(e){if(e.tag===13){var t=ft(e),n=Ke(e,t);if(n!==null){var r=ae();Me(n,e,t,r)}Ja(e,t)}};yd=function(){return L};vd=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};Lo=function(e,t,n){switch(t){case"input":if(ko(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bi(r);if(!i)throw Error(g(90));Gl(r),ko(r,i)}}}break;case"textarea":Jl(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};od=qa;ad=Nt;var Ef={usingClientEntryPoint:!1,Events:[ar,qt,bi,rd,id,qa]},En={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dd(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||Cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(In=__REACT_DEVTOOLS_GLOBAL_HOOK__,!In.isDisabled&&In.supportsFiber))try{vi=In.inject(If),je=In}catch{}var In;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!es(t))throw Error(g(200));return bf(e,t,null,n)};ye.createRoot=function(e,t){if(!es(e))throw Error(g(299));var n=!1,r="",i=Fu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Za(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=dd(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Nt(e)};ye.hydrate=function(e,t,n){if(!Li(t))throw Error(g(200));return Mi(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!es(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Fu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ju(t,null,e,1,n??null,i,!1,o,a),e[Ye]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $i(t)};ye.render=function(e,t,n){if(!Li(t))throw Error(g(200));return Mi(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!Li(e))throw Error(g(40));return e._reactRootContainer?(Nt(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ye.unstable_batchedUpdates=qa;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return Mi(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426"});var Pi=wt((zf,Hu)=>{"use strict";function Vu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vu)}catch(e){console.error(e)}}Vu(),Hu.exports=Bu()});var ns=wt(ts=>{"use strict";var Wu=Pi();ts.createRoot=Wu.createRoot,ts.hydrateRoot=Wu.hydrateRoot;var Of});var ps=Ot(hr()),tc=Ot(Pi()),nc=Ot(ns());var ls=Ot(hr()),qu=Ot(Pi()),Yu=Ot(ns());var D={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},ve={basic:"basic",templates:"templates"},rs=["children","children_error","custom"],Ni=["all","string","int","time","date","command"];var St=[{type:"default_main",title:"\u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u043A\u043E\u043C\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"\u041D\u0435 \u043F\u043E\u043D\u044F\u043B\u0430, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043D\u0430\u0447\u043D\u0451\u043C \u0441\u043D\u0430\u0447\u0430\u043B\u0430",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"\u041F\u043E\u0438\u0441\u043A \u0432 \u0433\u0443\u0433\u043B\u0435",supportsLlm:!0,hasModal:!0}];var Qu=`
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
        .command-item:hover {
          transform: translateY(-1px);
          border-color: rgba(35,79,125,.3);
          box-shadow: 0 9px 20px rgba(31,41,55,.1);
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
`;var _=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Ne=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`uuid_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,is=(e={})=>{let t=!!e.llm||!!String(e.system??"").trim()||!!String(e.model??"").trim();return{id:Ne(),type:String(e.type??""),voiceResponse:String(e.voiceResponse??""),llmEnabled:t,system:String(e.system??""),model:String(e.model??"")}},os=(e={})=>({id:Ne(),uuid:String(e.uuid??""),displayValue:String(e.displayValue??"")}),as=(e={})=>({id:Ne(),typeComponent:String(e.typeComponent??e.type??"children"),uuid:String(e.uuid??""),displayValue:String(e.displayValue??"")}),lr=(e={})=>({id:Ne(),subType:String(e.subType??""),subVoiceCommands:String(e.subVoiceCommands??"")});var Df=({html:e})=>ls.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),ss=class extends HTMLElement{constructor(){if(super(),this.attachShadow({mode:"open"}),this._reactRoot=null,this._hass=null,this._config={base_url:"",timer_alarm_token:""},typeof document<"u"){let t=document.getElementById("dialog-custom-ui-modal-style");t||(t=document.createElement("style"),t.id="dialog-custom-ui-modal-style",t.textContent="body.modal-open { overflow: hidden; }",document.head.appendChild(t))}this._tab=D.primary,this._commands=[],this._pageByTab={[D.primary]:1,[D.secondary]:1},this._totalByTab={[D.primary]:0,[D.secondary]:0},this._totalPagesByTab={[D.primary]:1,[D.secondary]:1},this._lastLoadedTab=D.primary,this._lastLoadPageKey="",this._inFlightPageKey="",this._lastLoadedPageKey="",this._lastLoadedPageAt=0,this._loading=!1,this._error="",this._status="",this._modalOpen=!1,this._modalMode="create",this._modalSaving=!1,this._editingId="",this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._bindController=null,this._legacyListeners=[],this._draft=this._newDraft(),this._searchActiveItemId=null,this._searchActiveType=null,this._searchResults=[],this._searchLoading=!1,this._searchDebounceTimer=null,this._modalScrollTop=0,this._directSubtab=ve.basic,this._directCommands=[],this._directLoading=!1,this._directError="",this._directModalOpen=!1,this._directModalMode="create",this._directModalSaving=!1,this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft(),this._templateCommands=[],this._templateLoading=!1,this._templateError="",this._templateModalOpen=!1,this._templateModalMode="create",this._templateModalSaving=!1,this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft(),this._subDirectControlSampleOptions=[],this._defaultsLoading=!1,this._defaultsError="",this._defaultsModalOpen=!1,this._defaultsModalSaving=!1,this._defaultsByType=this._newDefaultsState(),this._defaultsActiveType=St[0].type,this._defaultsActiveId="",this._modalCount=0}set hass(t){let n=!this._hass;this._hass=t,(n||!this.shadowRoot?.innerHTML)&&this._render()}set config(t){let n={base_url:String(t?.base_url??"").trim(),timer_alarm_token:String(t?.timer_alarm_token??"").trim()},r=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token;if(!r){this.shadowRoot?.innerHTML||this._render();return}if(this._config=n,r&&(this._tab===D.primary||this._tab===D.secondary)&&!this._loading&&n.base_url){this._error="",this._loadPage(this._pageByTab[this._tab]||1,{force:!0});return}if(r&&this._tab===D.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._render(),(this._tab===D.primary||this._tab===D.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1),this._tab===D.direct&&!this._directCommands.length&&!this._directLoading&&this._directSubtab===ve.basic&&this._loadDirectCommands(),this._tab===D.direct&&!this._templateCommands.length&&!this._templateLoading&&this._directSubtab===ve.templates&&this._loadTemplateCommands()}disconnectedCallback(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Yu.createRoot)(this.shadowRoot));let n=this.shadowRoot.querySelector(".modal");n&&(this._modalScrollTop=n.scrollTop),(0,qu.flushSync)(()=>{this._reactRoot.render(ls.default.createElement(Df,{html:t}))});let r=this.shadowRoot.querySelector(".modal");r&&(r.scrollTop=this._modalScrollTop)}_addModalBackdrop(){this._modalCount++,this._modalCount===1&&typeof document<"u"&&document.body&&document.body.classList.add("modal-open")}_removeModalBackdrop(){this._modalCount--,this._modalCount===0&&typeof document<"u"&&document.body&&document.body.classList.remove("modal-open")}_newDraft(t=null){let n=t??{},r=typeof n.componentDialog=="object"&&n.componentDialog?n.componentDialog:{},i=Array.isArray(r.voiceResponseArray)?r.voiceResponseArray.filter(s=>s&&typeof s=="object").map(s=>is(s)):[],o=Array.isArray(r.nextDirectControl)?r.nextDirectControl.filter(s=>s&&typeof s=="object").map(s=>os(s)):[],a=Array.isArray(r.nextAction)?r.nextAction.filter(s=>s&&typeof s=="object").map(s=>as(s)):[];return{title:String(n.title??""),uuidDialog:String(n.uuidDialog??""),type:String(r.type??""),endStatus:!!r.endStatus,forwardText:!!r.forwardText,answerType:String(r.answerType??"default"),voiceCommands:Array.isArray(r.voiceCommands)?r.voiceCommands.join("; "):String(r.voiceCommands??""),responseItems:i,directControlItems:o,nextActionItems:a}}_newDirectDraft(t=null){let n=t??{},r=typeof n.directControl=="object"&&n.directControl?n.directControl:{},i=Array.isArray(r.subDirectControl)?r.subDirectControl.filter(o=>o&&typeof o=="object").map(o=>lr(o)):[];return{title:String(n.title??""),uuidDirect:String(n.uuidDirect??""),type:String(r.type??""),typeData:Ni.includes(String(r.typeData??"all"))?String(r.typeData??"all"):"all",voiceCommands:Array.isArray(r.voiceCommands)?r.voiceCommands.join("; "):String(r.voiceCommands??""),manual:!!r.manual,subDirectControlItems:i,subDirectControlArray:String(r.subDirectControlArray??"")}}_newTemplateDraft(t=null){let n=t??{},r=Array.isArray(n.subDirectControl)?n.subDirectControl.filter(i=>i&&typeof i=="object").map(i=>lr(i)):[];return{title:String(n.title??""),uuid:String(n.uuid??""),subDirectControlItems:r}}_defaultConfig(t){return St.find(n=>n.type===t)??St[0]}_newDefaultsDraft(t,n=null){let r=n??{},i=this._defaultConfig(t);return{_id:String(r._id??""),type:i.type,title:String(r.title??i.title),endStatus:!!r.endStatus,llmEnabled:i.supportsLlm?!!(r.llmEnabled??r.llm):!1,message:String(r.message??""),system:i.supportsLlm?String(r.system??""):"",model:i.supportsLlm?String(r.model??""):""}}_newDefaultsState(){return St.reduce((t,n)=>(t[n.type]=this._newDefaultsDraft(n.type),t),{})}_apiHeaders(t=!1){let n={};return t&&(n["Content-Type"]="application/json"),this._config.timer_alarm_token&&(n.Authorization=this._config.timer_alarm_token),n}_apiUrl(t){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}${t}`:""}async _loadPage(t=1,n={}){if(this._tab!==D.primary&&this._tab!==D.secondary)return;let{force:r=!1}=n??{},i=this._tab,o=Math.max(1,Number(t)||1),a=`${i}:${o}`;if(this._inFlightPageKey===a)return;let s=Date.now();if(!r&&this._lastLoadedPageKey===a&&s-this._lastLoadedPageAt<1500)return;let d=i===D.secondary?"/api/cms/sub-commands":"/api/cms/commands",f=this._apiUrl(`${d}?page=${encodeURIComponent(o)}&pageSize=${20}`);if(!f){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._lastLoadPageKey=a,this._inFlightPageKey=a,this._loading=!0,this._error="",this._render();try{let h=await fetch(f,{method:"GET",headers:this._apiHeaders(!1)});if(!h.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${h.status}`);let m=await h.json(),v=Array.isArray(m.data)?m.data:[],S=m?.meta?.pagination??m?.pagination??{},x=Number(S.total??m.total??m.count??m.meta?.total??0),O=Number(S.page??o)||o,c=Number(S.pageSize??20)||20,u=Number(S.totalPages??S.pageCount??0),p=Number.isFinite(u)&&u>0?u:Math.max(1,Math.ceil((Number.isFinite(x)&&x>0?x:v.length)/c));this._commands=v,this._lastLoadedTab=i,this._pageByTab[i]=Math.max(1,O),this._totalPagesByTab[i]=Math.max(1,p),this._totalByTab[i]=Number.isFinite(x)&&x>0?x:Number.isFinite(u)&&u>0?u*c:o*20+(v.length===20?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${v.length}.`,this._lastLoadedPageKey=a,this._lastLoadedPageAt=Date.now()}catch(h){this._commands=[],this._error=h?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._inFlightPageKey===a&&(this._inFlightPageKey=""),this._loading=!1,this._render()}}_setTab(t){if(this._tab=t,this._error="",this._status="",this._render(),t===D.primary||t===D.secondary){let n=this._pageByTab[t]||1;(!this._loading||this._lastLoadedTab!==t)&&this._loadPage(n)}t===D.direct&&(this._directSubtab===ve.basic&&!this._directCommands.length&&!this._directLoading&&this._loadDirectCommands(),this._directSubtab===ve.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands()),t===D.defaults&&!this._defaultsLoading&&this._reloadDefaultsCommands()}_buildPaginationItems(t,n){let r=Math.max(1,Number(t)||1),i=Math.max(1,Number(n)||1);return i<=7?Array.from({length:i},(o,a)=>a+1):r<=4?[1,2,3,4,"ellipsis",i]:r>=i-3?[1,"ellipsis",i-3,i-2,i-1,i]:[1,"ellipsis",r-1,r,r+1,"ellipsis",i]}_openCreateModal(){this._addModalBackdrop(),this._modalOpen=!0,this._modalMode="create",this._editingId="",this._draft=this._newDraft(),this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._error="",this._render()}_openEditModal(t){this._addModalBackdrop();let n=this._commands.find(r=>String(r._id??"")===String(t??""));if(!n){this._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",this._render();return}this._modalOpen=!0,this._modalMode="edit",this._editingId=String(n._id??""),this._draft=this._newDraft(n),this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._error="",this._render(),this._hydrateDirectControlTitles(),this._hydrateNextActionTitles()}_closeModal(){this._modalSaving||(this._removeModalBackdrop(),this._modalOpen=!1,this._modalMode="create",this._editingId="",this._openResponseItemIds=new Set,this._openDirectControlItemIds=new Set,this._openNextActionItemIds=new Set,this._draft=this._newDraft(),this._render())}_updateDraft(t,n){this._draft={...this._draft,[t]:n}}_buildPayload(){let t=String(this._draft.title??"").trim(),n=String(this._draft.uuidDialog??"").trim(),r=String(this._draft.type??"").trim(),o=String(this._draft.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuidDialog - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("type - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let s=(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).map(f=>{let h={type:String(f.type??"").trim(),voiceResponse:String(f.voiceResponse??"").trim()};return f.llmEnabled&&(h.llm=!0,h.system=String(f.system??"").trim(),h.model=String(f.model??"").trim()),h}),l=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map(f=>({uuid:String(f.uuid??"").trim()})).filter(f=>f.uuid),d=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map(f=>({typeComponent:rs.includes(String(f.typeComponent??"").trim())?String(f.typeComponent??"").trim():"children",uuid:String(f.uuid??"").trim()})).filter(f=>f.uuid);return{title:t,uuidDialog:n,componentDialog:{endStatus:!!this._draft.endStatus,type:r,forwardText:!!this._draft.forwardText,answerType:o,voiceCommands:String(this._draft.voiceCommands??"").split(";").map(f=>f.trim()).filter(f=>f),nextDirectControl:l,voiceResponseArray:s,nextAction:d}}}_refreshUuid(){this._updateDraft("uuidDialog",Ne()),this._render()}_addVoiceResponseItem(){let t=Array.isArray(this._draft.responseItems)?this._draft.responseItems:[],n=is();this._draft={...this._draft,responseItems:[...t,n]},this._openResponseItemIds.add(n.id),this._render()}_removeVoiceResponseItem(t){let n=(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).filter(r=>r.id!==t);this._draft={...this._draft,responseItems:n},this._openResponseItemIds=new Set([...this._openResponseItemIds].filter(r=>this._draft.responseItems.some(i=>i.id===r))),this._render()}_updateVoiceResponseItem(t,n,r){let i=(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).map(o=>o.id!==t?o:{...o,[n]:r});this._draft={...this._draft,responseItems:i}}_toggleResponseItem(t){this._openResponseItemIds.has(t)?this._openResponseItemIds.delete(t):this._openResponseItemIds.add(t),this._render()}_addDirectControlItem(){let t=Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[],n=os();this._draft={...this._draft,directControlItems:[...t,n]},this._openDirectControlItemIds.add(n.id),this._render()}_removeDirectControlItem(t){let n=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).filter(r=>r.id!==t);this._draft={...this._draft,directControlItems:n},this._openDirectControlItemIds=new Set([...this._openDirectControlItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_updateDirectControlItem(t,n){t=t.trim();let r=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map(i=>{if(i.id!==t)return i;let o=String(n??""),a=o.trim(),s=String(i.uuid??"").trim();return{...i,uuid:o,displayValue:a&&a===s?i.displayValue:""}});this._draft={...this._draft,directControlItems:r},n.length>0&&this._debouncedPerformUuidSearch(n,"directControl",t)}_toggleDirectControlItem(t){this._openDirectControlItemIds.has(t)?this._openDirectControlItemIds.delete(t):this._openDirectControlItemIds.add(t),this._render()}_addNextActionItem(){let t=Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[],n=as();this._draft={...this._draft,nextActionItems:[...t,n]},this._openNextActionItemIds.add(n.id),this._render()}_removeNextActionItem(t){let n=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).filter(r=>r.id!==t);this._draft={...this._draft,nextActionItems:n},this._openNextActionItemIds=new Set([...this._openNextActionItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_updateNextActionItem(t,n,r){t=t.trim();let i=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map(o=>{if(o.id!==t)return o;if(n==="uuid"){let a=String(r??""),s=a.trim(),l=String(o.uuid??"").trim();return{...o,uuid:a,displayValue:s&&s===l?o.displayValue:""}}return{...o,[n]:r}});this._draft={...this._draft,nextActionItems:i},n==="uuid"&&r.length>0&&this._debouncedPerformUuidSearch(r,"nextAction",t)}_toggleNextActionItem(t){this._openNextActionItemIds.has(t)?this._openNextActionItemIds.delete(t):this._openNextActionItemIds.add(t),this._render()}_setDirectSubtab(t){this._directSubtab=t,this._directError="",t===ve.basic&&!this._directCommands.length&&!this._directLoading?this._loadDirectCommands():t===ve.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands(),this._render()}async _loadDirectCommands(){let t=this._apiUrl("/api/cms/sub-direct-controls?page=1&pageSize="+20);if(!t){this._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._directLoading=!0,this._directError="",this._render();try{let n=await fetch(t,{method:"GET",headers:this._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];this._directCommands=i,this._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){this._directCommands=[],this._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._directLoading=!1,this._render()}}async _loadTemplateCommands(){let t=this._apiUrl("/api/cms/sub-direct-controls-sample?page=1&pageSize="+20);if(!t){this._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._templateLoading=!0,this._templateError="",this._render();try{let n=await fetch(t,{method:"GET",headers:this._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];this._templateCommands=i,this._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){this._templateCommands=[],this._templateError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B."}finally{this._templateLoading=!1,this._render()}}_reloadDirectCommands(){this._directLoading||(this._directCommands=[],this._loadDirectCommands())}_reloadTemplateCommands(){this._templateLoading||(this._templateCommands=[],this._loadTemplateCommands())}_openCreateDirectModal(){this._addModalBackdrop(),this._directModalOpen=!0,this._directModalMode="create",this._directEditingId="",this._directDraft=this._newDirectDraft(),this._openDirectSubControlItemIds=new Set,this._directError="",this._render()}_openEditDirectModal(t){this._addModalBackdrop();let n=this._directCommands.find(r=>String(r._id??"")===String(t??""));if(!n){this._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",this._render();return}this._directModalOpen=!0,this._directModalMode="edit",this._directEditingId=String(n._id??""),this._directDraft=this._newDirectDraft(n),this._openDirectSubControlItemIds=new Set,this._directError="",this._render(),this._hydrateSelectedSubDirectControlSample()}_closeDirectModal(){this._directModalSaving||(this._removeModalBackdrop(),this._directModalOpen=!1,this._directModalMode="create",this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft(),this._searchResults=[],this._searchActiveType=null,this._subDirectControlSampleOptions=[],this._render())}_updateDirectDraft(t,n){this._directDraft={...this._directDraft,[t]:n}}async _hydrateSelectedSubDirectControlSample(){let t=this._directDraft.typeData==="command",n=!!this._directDraft.manual,r=String(this._directDraft.subDirectControlArray??"").trim();if(!t||n||!r||(Array.isArray(this._subDirectControlSampleOptions)?this._subDirectControlSampleOptions:[]).some(l=>String(l?.uuid??"").trim()===r))return;let a=(await this._searchUuid(r,["sub-direct-controls-sample"])).find(l=>String(l?.uuid??"").trim()===r),s=a?{uuid:String(a.uuid??r),title:String(a.title??"").trim()||r}:{uuid:r,title:r};this._subDirectControlSampleOptions=[s,...Array.isArray(this._subDirectControlSampleOptions)?this._subDirectControlSampleOptions:[]],this._render()}_refreshDirectUuid(){this._updateDirectDraft("uuidDirect",Ne()),this._render()}_refreshTemplateUuid(){this._updateTemplateDraft("uuid",Ne()),this._render()}_addDirectSubControlItem(){let t=Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[],n=lr();this._directDraft={...this._directDraft,subDirectControlItems:[...t,n]},this._openDirectSubControlItemIds.add(n.id),this._render()}_removeDirectSubControlItem(t){let n=(Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[]).filter(r=>r.id!==t);this._directDraft={...this._directDraft,subDirectControlItems:n},this._openDirectSubControlItemIds=new Set([...this._openDirectSubControlItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_toggleDirectSubControlItem(t){this._openDirectSubControlItemIds.has(t)?this._openDirectSubControlItemIds.delete(t):this._openDirectSubControlItemIds.add(t),this._render()}_updateDirectSubControlItem(t,n,r){let i=(Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);this._directDraft={...this._directDraft,subDirectControlItems:i}}_buildDirectPayload(){let t=String(this._directDraft.title??"").trim(),n=String(this._directDraft.uuidDirect??"").trim(),r=String(this._directDraft.type??"").trim(),i=Ni.includes(String(this._directDraft.typeData??"all"))?String(this._directDraft.typeData??"all"):"all",o=!!this._directDraft.manual;if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuidDirect - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("type - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let a={title:t,uuidDirect:n,directControl:{type:r,typeData:i}};if(i==="command"){let s=String(this._directDraft.voiceCommands??"").trim();a.directControl.voiceCommands=s?s.split(";").map(l=>l.trim()).filter(l=>l):null,a.directControl.manual=o,o?a.directControl.subDirectControl=(Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[]).map((l,d)=>{let f=String(l.subType??"").trim(),h=String(l.subVoiceCommands??"").trim();return{id:Number(l.id)||d+1,subType:f||null,title:null,subVoiceCommands:h||null}}).filter(l=>l.subType||l.subVoiceCommands):a.directControl.subDirectControlArray=String(this._directDraft.subDirectControlArray??"").trim()}return a}async _loadSubDirectControlSamples(){if(!this._searchLoading){this._searchActiveType="subDirectControlSample",this._searchLoading=!0,this._render();try{let t=await this._searchUuid("",["sub-direct-controls-sample"]);this._searchResults=t,this._subDirectControlSampleOptions=t}catch{this._searchResults=[],this._subDirectControlSampleOptions=[]}finally{this._searchLoading=!1,this._render()}}}async _performUuidSearch(t,n,r=null){if(!t||t.length===0){this._searchResults=[],this._searchActiveItemId=null,this._searchActiveType=null,this._render();return}this._searchActiveItemId=r,this._searchActiveType=n,this._searchLoading=!0;try{let i=[];n==="directControl"?i=["sub-direct-controls"]:n==="nextAction"?i=["sub-commands","commands"]:n==="subDirectControlSample"&&(i=["sub-direct-controls-sample"]);let o=await this._searchUuid(t,i);if(this._searchResults=o,n==="directControl"&&r){let a=String(t??"").trim(),s=o.find(l=>String(l?.uuid??"").trim()===a);if(s?.title){let l=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map(d=>d.id===r?{...d,displayValue:String(s.title)}:d);this._draft={...this._draft,directControlItems:l}}}}catch{this._searchResults=[]}finally{this._searchLoading=!1,this._render()}}_debouncedPerformUuidSearch(t,n,r=null){this._searchDebounceTimer&&clearTimeout(this._searchDebounceTimer),this._searchDebounceTimer=setTimeout(()=>{this._performUuidSearch(t,n,r)},300)}_selectSearchResult(t,n){t=t.trim();let r=this._searchActiveType;if(r==="directControl"){let i=(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map(o=>o.id===t?{...o,uuid:String(n.uuid??""),displayValue:String(n.title??"")}:o);this._draft={...this._draft,directControlItems:i}}else if(r==="nextAction"){this._updateNextActionItem(t,"displayValue",n.title);let i=(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map(o=>o.id===t?{...o,uuid:n.uuid}:o);this._draft={...this._draft,nextActionItems:i}}this._searchResults=[],this._searchActiveItemId=null,this._searchActiveType=null,this._render()}async _searchUuid(t,n){let r=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!r)return[];try{let i=Array.isArray(n)?n.join(","):String(n),o=`${r}/api/cms/search?collections=${encodeURIComponent(i)}&text=${encodeURIComponent(t)}`,a=await fetch(o,{method:"GET",headers:this._apiHeaders(!1)});if(!a.ok)return[];let s=await a.json();return Array.isArray(s.data)?s.data:Array.isArray(s)?s:[]}catch{return[]}}async _resolveTitleByUuid(t,n){let r=String(t??"").trim();if(!r)return"";let i=await this._searchUuid(r,n),o=i.find(a=>String(a?.uuid??"").trim()===r);return String(o?.title??i[0]?.title??"").trim()}async _hydrateDirectControlTitles(){let t=Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let i=String(r.uuid??"").trim(),o=String(r.displayValue??"").trim();if(!i||o)return r;let a=await this._resolveTitleByUuid(i,["sub-direct-controls"]);return{...r,displayValue:a}}));this._draft={...this._draft,directControlItems:n},this._render()}async _hydrateNextActionTitles(){let t=Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[];if(!t.length)return;let n=await Promise.all(t.map(async r=>{let i=String(r.uuid??"").trim(),o=String(r.displayValue??"").trim();if(!i||o)return r;let a=await this._resolveTitleByUuid(i,["sub-commands","commands"]);return{...r,displayValue:a}}));this._draft={...this._draft,nextActionItems:n},this._render()}async _deleteItem(t,n){let r=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!r)throw new Error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.");let i=`${r}/api/cms/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,o=await fetch(i,{method:"DELETE",headers:this._apiHeaders(!0)});if(!o.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F: HTTP ${o.status}`)}async _saveDirectModal(){if(!this._apiUrl("")){this._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let n;try{n=this._buildDirectPayload()}catch(r){this._directError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",this._render();return}this._directModalSaving=!0,this._directError="",this._render();try{let r=this._directModalMode==="edit"&&this._directEditingId,i="sub-direct-controls",o=r?this._apiUrl(`/api/cms/${i}/${encodeURIComponent(this._directEditingId)}`):this._apiUrl(`/api/cms/${i}`),s=await fetch(o,{method:r?"PUT":"POST",headers:this._apiHeaders(!0),body:JSON.stringify(n)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${s.status}`);let l=null;try{l=await s.json()}catch{l=null}if(r)this._directCommands=this._directCommands.map(d=>String(d._id??"")===String(this._directEditingId)?{...d,...l&&typeof l=="object"?l:n,_id:this._directEditingId}:d);else{let d=String(l?._id??Ne());this._directCommands=[{...l&&typeof l=="object"?l:n,_id:d},...this._directCommands]}await this._loadDirectCommands(),this._status=r?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",this._directModalOpen=!1,this._directModalMode="create",this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft()}catch(r){this._directError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{this._directModalSaving=!1,this._render()}}async _deleteDirectModal(){if(this._directEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443?")){this._directModalSaving=!0,this._directError="",this._render();try{await this._deleteItem("sub-direct-controls",this._directEditingId),this._directCommands=this._directCommands.filter(t=>String(t._id??"")!==String(this._directEditingId)),this._status="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",this._removeModalBackdrop(),this._directModalOpen=!1,this._directModalMode="create",this._directEditingId="",this._openDirectSubControlItemIds=new Set,this._directDraft=this._newDirectDraft()}catch(t){this._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{this._directModalSaving=!1,this._render()}}}_openCreateTemplateModal(){this._addModalBackdrop(),this._templateModalOpen=!0,this._templateModalMode="create",this._templateEditingId="",this._templateDraft=this._newTemplateDraft(),this._openTemplateSubControlItemIds=new Set,this._templateError="",this._render()}_openEditTemplateModal(t){this._addModalBackdrop();let n=this._templateCommands.find(r=>String(r._id??"")===String(t??""));if(!n){this._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",this._render();return}this._templateModalOpen=!0,this._templateModalMode="edit",this._templateEditingId=String(n._id??""),this._templateDraft=this._newTemplateDraft(n),this._openTemplateSubControlItemIds=new Set,this._templateError="",this._render()}_closeTemplateModal(){this._templateModalSaving||(this._removeModalBackdrop(),this._templateModalOpen=!1,this._templateModalMode="create",this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft(),this._render())}_updateTemplateDraft(t,n){this._templateDraft={...this._templateDraft,[t]:n}}_addTemplateSubControlItem(){let t=Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[],n=lr();this._templateDraft={...this._templateDraft,subDirectControlItems:[...t,n]},this._openTemplateSubControlItemIds.add(n.id),this._render()}_removeTemplateSubControlItem(t){let n=(Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[]).filter(r=>r.id!==t);this._templateDraft={...this._templateDraft,subDirectControlItems:n},this._openTemplateSubControlItemIds=new Set([...this._openTemplateSubControlItemIds].filter(r=>n.some(i=>i.id===r))),this._render()}_toggleTemplateSubControlItem(t){this._openTemplateSubControlItemIds.has(t)?this._openTemplateSubControlItemIds.delete(t):this._openTemplateSubControlItemIds.add(t),this._render()}_updateTemplateSubControlItem(t,n,r){let i=(Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);this._templateDraft={...this._templateDraft,subDirectControlItems:i}}_buildTemplatePayload(){let t=String(this._templateDraft.title??"").trim();if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let n=String(this._templateDraft.uuid??"").trim();if(n||(n=Ne()),!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title:t,uuid:n,subDirectControl:(Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[]).map((r,i)=>{let o=String(r.subType??"").trim(),a=String(r.subVoiceCommands??"").trim();return{id:Number(r.id)||i+1,subType:o||null,title:null,subVoiceCommands:a||null}}).filter(r=>r.subType||r.subVoiceCommands)}}async _saveTemplateModal(){if(!this._apiUrl("")){this._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let n;try{n=this._buildTemplatePayload()}catch(r){this._templateError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",this._render();return}this._templateModalSaving=!0,this._templateError="",this._render();try{let r=this._templateModalMode==="edit"&&this._templateEditingId,i="sub-direct-controls-sample",o=r?this._apiUrl(`/api/cms/${i}/${encodeURIComponent(this._templateEditingId)}`):this._apiUrl(`/api/cms/${i}`),s=await fetch(o,{method:r?"PUT":"POST",headers:this._apiHeaders(!0),body:JSON.stringify(n)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430: HTTP ${s.status}`);let l=null;try{l=await s.json()}catch{l=null}if(r)this._templateCommands=this._templateCommands.map(d=>String(d._id??"")===String(this._templateEditingId)?{...d,...l&&typeof l=="object"?l:n,_id:this._templateEditingId}:d);else{let d=String(l?._id??Ne());this._templateCommands=[{...l&&typeof l=="object"?l:n,_id:d},...this._templateCommands]}await this._loadTemplateCommands(),this._status=r?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",this._templateModalOpen=!1,this._templateModalMode="create",this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft()}catch(r){this._templateError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{this._templateModalSaving=!1,this._render()}}async _deleteTemplateModal(){if(this._templateEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D?")){this._templateModalSaving=!0,this._templateError="",this._render();try{await this._deleteItem("sub-direct-controls-sample",this._templateEditingId),this._templateCommands=this._templateCommands.filter(t=>String(t._id??"")!==String(this._templateEditingId)),this._status="\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0434\u0430\u043B\u0435\u043D.",this._removeModalBackdrop(),this._templateModalOpen=!1,this._templateModalMode="create",this._templateEditingId="",this._openTemplateSubControlItemIds=new Set,this._templateDraft=this._newTemplateDraft()}catch(t){this._templateError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{this._templateModalSaving=!1,this._render()}}}_reloadDefaultsCommands(){let t=this._apiUrl("/api/cms/search?type=default_search,default_main,not_understand,finish_miss&collections=settings-dialog");if(!t){this._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}return this._defaultsLoading=!0,this._defaultsError="",this._render(),fetch(t,{method:"GET",headers:this._apiHeaders(!1)}).then(async n=>{if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r?.data)?r.data:Array.isArray(r)?r:[],o=this._newDefaultsState(),a=new Set,s=St.map(d=>d.type),l=(d,f)=>{let h=String(d?.type??d?.componentDialog?.type??"").trim();if(h&&o[h]&&!a.has(h))return h;let m=St.find(S=>String(S.title).trim()===String(d?.title??"").trim()&&!a.has(S.type));if(m?.type&&o[m.type])return m.type;let v=s[f];return v&&o[v]&&!a.has(v)?v:""};i.forEach((d,f)=>{let h=l(d,f);h&&(a.add(h),o[h]=this._newDefaultsDraft(h,d))}),this._defaultsByType=o,this._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}).catch(n=>{this._defaultsError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}).finally(()=>{this._defaultsLoading=!1,this._render()})}_openDefaultsModal(t){this._addModalBackdrop();let n=this._defaultConfig(t);if(!n.hasModal){this._saveDefaultsType(n.type,!1);return}this._defaultsActiveType=n.type,this._defaultsActiveId=String(this._defaultsByType[n.type]?._id??""),this._defaultsModalOpen=!0,this._defaultsError="",this._render()}_closeDefaultsModal(){this._defaultsModalSaving||(this._removeModalBackdrop(),this._defaultsModalOpen=!1,this._render())}_updateDefaultsDraft(t,n){let r=this._defaultsActiveType,i=this._defaultsByType[r]??this._newDefaultsDraft(r);this._defaultsByType={...this._defaultsByType,[r]:{...i,[t]:n}}}_buildDefaultsPayload(){let t=this._defaultsActiveType,n=this._defaultConfig(t),r=this._defaultsByType[t]??this._newDefaultsDraft(t),i={type:t,title:n.title,endStatus:!!r.endStatus,message:String(r.message??"").trim()||null};return n.supportsLlm&&(i.llm=!!r.llmEnabled,i.system=i.llm&&String(r.system??"").trim()||null,i.model=i.llm&&String(r.model??"").trim()||null),i}async _saveDefaultsType(t,n=!1){let r=this._defaultConfig(t);if(this._defaultsActiveType=r.type,this._defaultsActiveId=String(this._defaultsByType[r.type]?._id??this._defaultsActiveId??""),!this._apiUrl("")){this._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let o;try{o=this._buildDefaultsPayload()}catch(a){this._defaultsError=a?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",this._render();return}this._defaultsModalSaving=n,this._defaultsLoading=!n,this._defaultsError="",this._render();try{let a=!!this._defaultsActiveId,s="settings-dialog",l=a?this._apiUrl(`/api/cms/${s}/${encodeURIComponent(this._defaultsActiveId)}`):this._apiUrl(`/api/cms/${s}`),f=await fetch(l,{method:a?"PUT":"POST",headers:this._apiHeaders(!0),body:JSON.stringify(o)});if(!f.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${f.status}`);let h=null;try{h=await f.json()}catch{h=null}let m=h?.data&&typeof h.data=="object"?h.data:h,v=this._defaultsActiveType,S=this._defaultsByType[v]??this._newDefaultsDraft(v),x=String(m?._id??S._id??this._defaultsActiveId??"");this._defaultsByType={...this._defaultsByType,[v]:{...S,...o,_id:x,llmEnabled:o.llm??S.llmEnabled}},this._defaultsActiveId=x,await this._reloadDefaultsCommands(),this._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.",n&&(this._defaultsModalOpen=!1)}catch(a){this._defaultsError=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{this._defaultsModalSaving=!1,this._defaultsLoading=!1,this._render()}}async _saveDefaultsModal(){await this._saveDefaultsType(this._defaultsActiveType,!0)}async _saveModal(){if(!this._apiUrl("")){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}let n;try{n=this._buildPayload()}catch(s){this._error=s?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",this._render();return}let r=this._modalMode==="edit"&&this._editingId,i=this._tab===D.secondary?"sub-commands":"commands",o=r?this._apiUrl(`/api/cms/${i}/${encodeURIComponent(this._editingId)}`):this._apiUrl(`/api/cms/${i}`),a=r?"PUT":"POST";this._modalSaving=!0,this._error="",this._render();try{let s=await fetch(o,{method:a,headers:this._apiHeaders(!0),body:JSON.stringify(n)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${s.status}`);this._status=r?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",this._modalOpen=!1,this._modalMode="create",this._editingId="",this._draft=this._newDraft(),await this._loadPage(this._pageByTab[this._tab]||1)}catch(s){this._error=s?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",this._render()}finally{this._modalSaving=!1,this._render()}}async _deleteModal(){if(!this._editingId||!confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439?"))return;let t=this._tab===D.secondary?"sub-commands":"commands";this._modalSaving=!0,this._error="",this._render();try{await this._deleteItem(t,this._editingId),this._commands=this._commands.filter(n=>String(n._id??"")!==String(this._editingId)),this._status="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",this._removeModalBackdrop(),this._modalOpen=!1,this._modalMode="create",this._editingId="",this._draft=this._newDraft()}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."}finally{this._modalSaving=!1,this._render()}}_renderCommandsTab(t){let n=t===D.secondary,r=this._pageByTab[t]||1,i=this._totalByTab[t]||0,o=this._totalPagesByTab[t]||1,a=n?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",s="/api/cms/commands?page=1&pageSize=20",l=Math.max(1,o||Math.ceil((i||1)/20)),d=this._buildPaginationItems(r,l),f=this._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':this._commands.length?this._commands.map(h=>`
            <button type="button" class="command-item" data-action="edit" data-command-id="${_(h._id)}">
              <span class="command-item-title">${_(h.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${_(h.componentDialog?.type||"type: -")}</span>
                <span>${_(h.uuidDialog||"uuid: -")}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">\u041A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h2>${a}</h2>
        <p>\u0417\u0430\u043F\u0440\u043E\u0441: <code>${s}</code></p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload" ${this._loading?"disabled":""}>${this._loading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
          <button type="button" class="primary" data-action="create">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439</button>
        </div>
      </section>
      <section class="help-card command-list">
        ${f}
        <div class="command-pagination">
          <button type="button" class="ghost" data-action="prev" ${r<=1||this._loading?"disabled":""}>&lt;</button>
          <div class="pagination-pages">
            ${d.map(h=>h==="ellipsis"?'<span class="pagination-ellipsis">...</span>':`<button type="button" class="ghost pagination-page ${h===r?"active":""}" data-action="goto-page" data-page="${h}" ${this._loading?"disabled":""}>${h}</button>`).join("")}
          </div>
          <button type="button" class="ghost" data-action="next" ${r>=l||this._loading?"disabled":""}>&gt;</button>
        </div>
      </section>
    `}_renderPrimaryCommandsPage(){return this._renderCommandsTab(D.primary)}_renderSecondaryCommandsPage(){return this._renderCommandsTab(D.secondary)}_renderDirectBasicSection(t){return`
      <section class="hero-card">
        <h3>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</h3>
        <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload-direct" ${this._directLoading?"disabled":""}>${this._directLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
          <button type="button" class="primary" data-action="create-direct">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
        </div>
        ${this._directError?`<div class="status error">${_(this._directError)}</div>`:""}
      </section>
      <section class="help-card command-list">
        ${t}
      </section>
    `}_renderDirectTemplatesSection(t){return`
      <section class="hero-card">
        <h3>\u0428\u0430\u0431\u043B\u043E\u043D\u044B</h3>
        <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430\u043C\u0438 subDirectControl.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload-template" ${this._templateLoading?"disabled":""}>${this._templateLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
          <button type="button" class="primary" data-action="create-template">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
        </div>
        ${this._templateError?`<div class="status error">${_(this._templateError)}</div>`:""}
      </section>
      <section class="help-card command-list">
        ${t}
      </section>
    `}_renderDirectCommandsTab(){let t=this._directLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434...</div>':this._directCommands.length?this._directCommands.map(r=>`
            <button type="button" class="command-item" data-action="edit-direct" data-direct-id="${_(r._id)}">
              <span class="command-item-title">${_(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${_(r.directControl?.type||"type: -")}</span>
                <span>${_(r.uuidDirect||"uuidDirect: -")}</span>
                <span>${_(r.directControl?.typeData||"typeData: -")}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">Direct-\u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>',n=this._templateLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432...</div>':this._templateCommands.length?this._templateCommands.map(r=>`
            <button type="button" class="command-item" data-action="edit-template" data-template-id="${_(r._id)}">
              <span class="command-item-title">${_(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>subDirectControl: ${Array.isArray(r.subDirectControl)?r.subDirectControl.length:0}</span>
              </span>
            </button>
          `).join(""):'<div class="empty">\u0428\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
      <section class="hero-card">
        <h2>\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</h2>
        <div class="inner-subtabs">
          <button type="button" class="subtab-button ${this._directSubtab===ve.basic?"active":""}" data-direct-subtab="${ve.basic}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</button>
          <button type="button" class="subtab-button ${this._directSubtab===ve.templates?"active":""}" data-direct-subtab="${ve.templates}">\u0428\u0430\u0431\u043B\u043E\u043D\u044B</button>
        </div>
      </section>
      ${this._directSubtab===ve.basic?this._renderDirectBasicSection(t):this._renderDirectTemplatesSection(n)}
    `}_renderActiveTabBody(){return this._tab===D.primary?this._renderPrimaryCommandsPage():this._tab===D.secondary?this._renderSecondaryCommandsPage():this._tab===D.direct?this._renderDirectCommandsTab():this._renderDefaultsTab()}_renderStub(t,n){return`
      <section class="hero-card">
        <h2>${_(t)}</h2>
        <p>${_(n)}</p>
      </section>
      <section class="help-card">
        <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
      </section>
    `}_renderDirectModal(){if(!this._directModalOpen)return"";let t=this._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",n=this._directDraft.typeData==="command",r=this._directModalMode==="edit",i=!r&&!String(this._directDraft.uuidDirect??"").trim(),o=Array.isArray(this._directDraft.subDirectControlItems)?this._directDraft.subDirectControlItems:[],a=Array.isArray(this._subDirectControlSampleOptions)?this._subDirectControlSampleOptions:[],s=String(this._directDraft.subDirectControlArray??"").trim(),l=a.some(d=>String(d?.uuid??"").trim()===s);return`
      <div class="modal-backdrop" data-action="close-direct"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${_(t)}">
        <div class="modal-header">
          <h3>${_(t)}</h3>
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label>
            <span>title</span>
            <input data-direct-field="title" value="${_(this._directDraft.title)}" />
          </label>
          <label>
            <span>uuidDirect</span>
            <div class="field-inline field-inline-icon">
              <input data-direct-field="uuidDirect" value="${_(this._directDraft.uuidDirect)}" ${r?"readonly":""} />
              ${i?`
                <button
                  type="button"
                  class="ghost inline-icon-button"
                  data-action="generate-direct-uuid"
                  aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDirect"
                  title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDirect"
                  ${this._directModalSaving?"disabled":""}
                >\u21BB</button>
              `:""}
            </div>
          </label>
          <label>
            <span>directControl.type</span>
            <input data-direct-field="type" value="${_(this._directDraft.type)}" />
          </label>
          <label>
            <span>directControl.typeData</span>
            <select data-direct-field="typeData">
              ${Ni.map(d=>`
                <option value="${d}" ${this._directDraft.typeData===d?"selected":""}>${d}</option>
              `).join("")}
            </select>
          </label>
          ${n?`
            <label class="field-span-2">
              <span>voiceCommands</span>
              <textarea rows="3" data-direct-field="voiceCommands">${_(this._directDraft.voiceCommands)}</textarea>
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
                  ${o.map((d,f)=>{let h=this._openDirectSubControlItemIds.has(d.id);return`
                      <section class="response-item-card ${h?"open":""}">
                        <button
                          type="button"
                          class="response-item-toggle"
                          data-action="toggle-direct-sub-control-item"
                          data-direct-sub-control-item-id="${_(d.id)}"
                        >
                          <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${f+1}</span>
                          <span class="response-accordion-icon">${h?"\u2212":"+"}</span>
                        </button>
                        ${h?`
                          <div class="response-item-grid">
                            <label>
                              <span>subType</span>
                              <input
                                data-direct-sub-control-item-id="${_(d.id)}"
                                data-direct-sub-control-item-field="subType"
                                value="${_(d.subType)}"
                              />
                            </label>
                            <label>
                              <span>subVoiceCommands</span>
                              <textarea
                                rows="3"
                                data-direct-sub-control-item-id="${_(d.id)}"
                                data-direct-sub-control-item-field="subVoiceCommands"
                              >${_(d.subVoiceCommands)}</textarea>
                            </label>
                            <div class="response-item-actions">
                              <button
                                type="button"
                                class="ghost compact-delete-button"
                                data-action="remove-direct-sub-control-item"
                                data-direct-sub-control-item-id="${_(d.id)}"
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
                <span>subDirectControlArray</span>
                <select data-direct-field="subDirectControlArray">
                  <option value="">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E (\u0434\u043E\u0431\u0430\u0432\u0438\u043C \u043F\u043E\u0437\u0436\u0435)</option>
                  ${s&&!l?`
                    <option value="${_(s)}" selected>${_(s)}</option>
                  `:""}
                  ${a.map(d=>`
                    <option value="${_(d.uuid)}" ${this._directDraft.subDirectControlArray===d.uuid?"selected":""}>${_(d.title)} (${_(d.uuid)})</option>
                  `).join("")}
                </select>
              </label>
            `}
          `:""}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-direct" ${this._directModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          ${this._directModalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete-direct" ${this._directModalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
          <button type="button" class="primary" data-action="save-direct" ${this._directModalSaving?"disabled":""}>${this._directModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderTemplateModal(){if(!this._templateModalOpen)return"";let t=this._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",n=this._templateModalMode==="edit",r=!n&&!String(this._templateDraft.uuid??"").trim(),i=Array.isArray(this._templateDraft.subDirectControlItems)?this._templateDraft.subDirectControlItems:[];return`
      <div class="modal-backdrop" data-action="close-template"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${_(t)}">
        <div class="modal-header">
          <h3>${_(t)}</h3>
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label>
            <span>title</span>
            <input data-template-field="title" value="${_(this._templateDraft.title)}" />
          </label>
          <label>
            <span>uuid</span>
            <div class="field-inline field-inline-icon">
              <input data-template-field="uuid" value="${_(this._templateDraft.uuid)}" ${n?"readonly":""} />
              ${r?`
                <button
                  type="button"
                  class="ghost inline-icon-button"
                  data-action="generate-template-uuid"
                  aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                  title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuid"
                  ${this._templateModalSaving?"disabled":""}
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
              ${i.map((o,a)=>{let s=this._openTemplateSubControlItemIds.has(o.id);return`
                  <section class="response-item-card ${s?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-template-sub-control-item"
                      data-template-sub-control-item-id="${_(o.id)}"
                    >
                      <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${a+1}</span>
                      <span class="response-accordion-icon">${s?"\u2212":"+"}</span>
                    </button>
                    ${s?`
                      <div class="response-item-grid">
                        <label>
                          <span>subType</span>
                          <input
                            data-template-sub-control-item-id="${_(o.id)}"
                            data-template-sub-control-item-field="subType"
                            value="${_(o.subType)}"
                          />
                        </label>
                        <label>
                          <span>subVoiceCommands</span>
                          <textarea
                            rows="3"
                            data-template-sub-control-item-id="${_(o.id)}"
                            data-template-sub-control-item-field="subVoiceCommands"
                          >${_(o.subVoiceCommands)}</textarea>
                        </label>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-template-sub-control-item"
                            data-template-sub-control-item-id="${_(o.id)}"
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
          <button type="button" class="ghost" data-action="close-template" ${this._templateModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          ${this._templateModalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete-template" ${this._templateModalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
          <button type="button" class="primary" data-action="save-template" ${this._templateModalSaving?"disabled":""}>${this._templateModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderDefaultsTab(){let t=St.map((n,r)=>{let i=this._defaultsByType[n.type]??this._newDefaultsDraft(n.type),o=[`type: ${n.type}`,`endStatus: ${i.endStatus?"on":"off"}`];return n.supportsLlm&&o.push(`LLM: ${i.llmEnabled?"on":"off"}`),`
        <button type="button" class="command-item" data-action="open-defaults-item" data-default-type="${_(n.type)}" ${this._defaultsLoading?"disabled":""}>
          <span class="command-item-title">${r+1}. ${_(n.title)}</span>
          <span class="command-item-meta">
            ${o.map(a=>`<span>${_(a)}</span>`).join("")}
          </span>
        </button>
      `}).join("");return`
      <section class="hero-card">
        <h2>\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</h2>
        <p>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438, \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p>
        <div class="toolbar">
          <button type="button" class="secondary" data-action="reload-defaults" ${this._defaultsLoading?"disabled":""}>${this._defaultsLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
        </div>
        ${this._defaultsError?`<div class="status error">${_(this._defaultsError)}</div>`:""}
      </section>
      <section class="help-card command-list">
        ${t}
      </section>
    `}_renderDefaultsModal(){if(!this._defaultsModalOpen)return"";let t=this._defaultsActiveType,n=this._defaultConfig(t),r=this._defaultsByType[t]??this._newDefaultsDraft(t);return`
      <div class="modal-backdrop" data-action="close-defaults"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${_(n.title)}">
        <div class="modal-header">
          <h3>${_(n.title)}</h3>
          <button type="button" class="ghost" data-action="close-defaults" ${this._defaultsModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label class="field-span-2">
            <span>title</span>
            <input data-defaults-field="title" value="${_(n.title)}" disabled />
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
            <input data-defaults-field="message" value="${_(r.message)}" />
          </label>
          ${n.supportsLlm&&r.llmEnabled?`
            <label class="field-span-2">
              <span>system</span>
              <textarea rows="6" data-defaults-field="system">${_(r.system)}</textarea>
            </label>
            <label class="field-span-2">
              <span>model</span>
              <input data-defaults-field="model" value="${_(r.model)}" />
            </label>
          `:""}
        </div>
        <div class="modal-footer">
          <button type="button" class="ghost" data-action="close-defaults" ${this._defaultsModalSaving?"disabled":""}>\u041E\u0442\u043C\u0435\u043D\u0430</button>
          <button type="button" class="primary" data-action="save-defaults" ${this._defaultsModalSaving?"disabled":""}>${this._defaultsModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_renderModal(){if(!this._modalOpen)return"";let t=this._modalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",n=this._modalMode==="edit",r=!n&&!String(this._draft.uuidDialog??"").trim();return`
      <div class="modal-backdrop" data-action="close"></div>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${_(t)}">
        <div class="modal-header">
          <h3>${_(t)}</h3>
          <button type="button" class="ghost" data-action="close" ${this._modalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <div class="modal-grid">
          <label><span>Title</span><input data-field="title" value="${_(this._draft.title)}" /></label>
          <label>
            <span>uuidDialog</span>
            <div class="field-inline field-inline-icon">
              <input data-field="uuidDialog" value="${_(this._draft.uuidDialog)}" ${n?"readonly":""} />
              ${r?`
                <button
                  type="button"
                  class="ghost inline-icon-button"
                  data-action="generate-uuid"
                  aria-label="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDialog"
                  title="\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C uuidDialog"
                  ${this._modalSaving?"disabled":""}
                >\u21BB</button>
              `:""}
            </div>
          </label>
          <label><span>type</span><input data-field="type" value="${_(this._draft.type)}" /></label>
          <label>
            <span>answerType</span>
            <select data-field="answerType">
              <option value="default" ${this._draft.answerType==="default"?"selected":""}>default</option>
              <option value="redis" ${this._draft.answerType==="redis"?"selected":""}>redis</option>
            </select>
          </label>
          <label>
            <span>endStatus</span>
            <div class="switch-control">
              <input type="checkbox" data-field="endStatus" ${this._draft.endStatus?"checked":""} />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${this._draft.endStatus?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043E"}</span>
            </div>
          </label>
          <label class="field-span-2">
            <span>voiceCommands (string)</span>
            <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${_(this._draft.voiceCommands)}</textarea>
          </label>
          <section class="field-span-2 response-accordion open">
            <div class="response-accordion-head-static">
              <span class="response-accordion-title">voiceResponseArray</span>
            </div>
            <div class="response-accordion-body">
              <div class="response-items">
                ${(Array.isArray(this._draft.responseItems)?this._draft.responseItems:[]).map((i,o)=>{let a=this._openResponseItemIds.has(i.id);return`
                    <section class="response-item-card ${a?"open":""}">
                      <button
                        type="button"
                        class="response-item-toggle"
                        data-action="toggle-response-item"
                        data-response-item-id="${_(i.id)}"
                      >
                        <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}</span>
                        <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                      </button>
                      ${a?`
                        <div class="response-item-grid">
                          <div class="response-inline-row">
                            <label>
                              <span>type</span>
                              <input
                                data-response-item-id="${_(i.id)}"
                                data-response-item-field="type"
                                value="${_(i.type)}"
                                placeholder="default"
                              />
                            </label>
                            <label>
                              <span>LLM</span>
                              <div class="switch-control">
                                <input
                                  type="checkbox"
                                  data-response-item-id="${_(i.id)}"
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
                              data-response-item-id="${_(i.id)}"
                              data-response-item-field="voiceResponse"
                            >${_(i.voiceResponse)}</textarea>
                          </label>
                          ${i.llmEnabled?`
                            <label>
                              <span>system</span>
                              <textarea
                                rows="3"
                                data-response-item-id="${_(i.id)}"
                                data-response-item-field="system"
                              >${_(i.system)}</textarea>
                            </label>
                            <label>
                              <span>model</span>
                              <input
                                data-response-item-id="${_(i.id)}"
                                data-response-item-field="model"
                                value="${_(i.model)}"
                              />
                            </label>
                          `:""}
                          ${(this._draft.responseItems?.length||0)>1?`
                            <div class="response-item-actions">
                              <button
                                type="button"
                                class="ghost compact-delete-button"
                                data-action="remove-voice-response-item"
                                data-response-item-id="${_(i.id)}"
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
              ${(Array.isArray(this._draft.directControlItems)?this._draft.directControlItems:[]).map((i,o)=>{let a=this._openDirectControlItemIds.has(i.id);return`
                  <section class="response-item-card ${a?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-direct-control-item"
                      data-direct-control-item-id="${_(i.id)}"
                    >
                      <span>${_(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}`)}</span>
                      <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                    </button>
                    ${a?`
                      <div class="response-item-grid">
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-direct-control-item-id="${_(i.id)}"
                              value="${_(i.uuid)}"
                              placeholder="uuid"
                            />
                            ${this._searchActiveType==="directControl"&&this._searchActiveItemId===i.id&&this._searchResults.length>0?`
                              <div class="dropdown-options">
                                ${this._searchResults.map(s=>`
                                  <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${_(i.id)}" data-result-uuid="${_(s.uuid)}" data-result-title="${_(s.title)}">
                                    ${_(s.title)} (${_(s.uuid)})
                                  </div>
                                `).join("")}
                              </div>
                            `:""}
                          </div>
                        </label>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-direct-control-item"
                            data-direct-control-item-id="${_(i.id)}"
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
              ${(Array.isArray(this._draft.nextActionItems)?this._draft.nextActionItems:[]).map((i,o)=>{let a=this._openNextActionItemIds.has(i.id);return`
                  <section class="response-item-card ${a?"open":""}">
                    <button
                      type="button"
                      class="response-item-toggle"
                      data-action="toggle-next-action-item"
                      data-next-action-item-id="${_(i.id)}"
                    >
                      <span>${_(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}`)}</span>
                      <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                    </button>
                    ${a?`
                      <div class="response-item-grid">
                        <div class="response-inline-row">
                          <label>
                            <span>typeComponent</span>
                            <select data-next-action-item-id="${_(i.id)}" data-next-action-item-field="typeComponent">
                              ${rs.map(s=>`
                                <option value="${s}" ${i.typeComponent===s?"selected":""}>${s}</option>
                              `).join("")}
                            </select>
                          </label>
                          <label>
                            <span>uuid</span>
                            <div class="dropdown-container">
                              <input
                                data-next-action-item-id="${_(i.id)}"
                                data-next-action-item-field="uuid"
                                value="${_(i.uuid)}"
                                placeholder="uuid"
                              />
                              ${this._searchActiveType==="nextAction"&&this._searchActiveItemId===i.id&&this._searchResults.length>0?`
                                <div class="dropdown-options">
                                  ${this._searchResults.map(s=>`
                                    <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${_(i.id)}" data-result-uuid="${_(s.uuid)}" data-result-title="${_(s.title)}">
                                      ${_(s.title)} (${_(s.uuid)})
                                    </div>
                                  `).join("")}
                                </div>
                              `:""}
                            </div>
                          </label>
                        </div>
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-next-action-item"
                            data-next-action-item-id="${_(i.id)}"
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
          ${this._modalMode==="edit"?`<button type="button" class="ghost compact-delete-button" data-action="delete" ${this._modalSaving?"disabled":""}>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>`:""}
          <button type="button" class="primary" data-action="save" ${this._modalSaving?"disabled":""}>${this._modalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
      </section>
    `}_swallowUiEvent(t){t.stopPropagation()}_bind(){let t=this.shadowRoot;if(!t)return;this._bindController?.abort&&this._bindController.abort(),this._legacyListeners.length&&(this._legacyListeners.forEach(({element:o,eventName:a,handler:s})=>{o.removeEventListener(a,s)}),this._legacyListeners=[]);let n=typeof AbortController<"u";this._bindController=n?new AbortController:null;let r=this._bindController?.signal??null,i=(o,a,s)=>{if(o)try{r?o.addEventListener(a,s,{signal:r}):(o.addEventListener(a,s),this._legacyListeners.push({element:o,eventName:a,handler:s}))}catch{o.addEventListener(a,s),this._legacyListeners.push({element:o,eventName:a,handler:s})}};t.querySelectorAll("[data-tab]").forEach(o=>{i(o,"click",()=>this._setTab(o.dataset.tab))}),i(t.querySelector('[data-action="reload"]'),"click",()=>this._loadPage(this._pageByTab[this._tab]||1,{force:!0})),i(t.querySelector('[data-action="create"]'),"click",()=>this._openCreateModal()),i(t.querySelector('[data-action="prev"]'),"click",()=>this._loadPage((this._pageByTab[this._tab]||1)-1)),i(t.querySelector('[data-action="next"]'),"click",()=>this._loadPage((this._pageByTab[this._tab]||1)+1)),t.querySelectorAll('[data-action="goto-page"]').forEach(o=>{i(o,"click",()=>this._loadPage(Number(o.dataset.page)||1))}),i(t.querySelector('[data-action="reload-direct"]'),"click",()=>this._reloadDirectCommands()),i(t.querySelector('[data-action="create-direct"]'),"click",()=>this._openCreateDirectModal()),i(t.querySelector('[data-action="reload-template"]'),"click",()=>this._reloadTemplateCommands()),i(t.querySelector('[data-action="create-template"]'),"click",()=>this._openCreateTemplateModal()),i(t.querySelector('[data-action="reload-defaults"]'),"click",()=>this._reloadDefaultsCommands()),t.querySelectorAll('[data-action="open-defaults-item"]').forEach(o=>{i(o,"click",()=>this._openDefaultsModal(o.dataset.defaultType))}),t.querySelectorAll('[data-action="edit"]').forEach(o=>{i(o,"click",()=>this._openEditModal(o.dataset.commandId))}),t.querySelectorAll('[data-action="edit-direct"]').forEach(o=>{i(o,"click",()=>this._openEditDirectModal(o.dataset.directId))}),t.querySelectorAll('[data-action="edit-template"]').forEach(o=>{i(o,"click",()=>this._openEditTemplateModal(o.dataset.templateId))}),t.querySelectorAll("[data-direct-subtab]").forEach(o=>{i(o,"click",()=>this._setDirectSubtab(o.dataset.directSubtab))}),t.querySelectorAll('[data-action="close"]').forEach(o=>{i(o,"click",()=>this._closeModal())}),t.querySelectorAll('[data-action="close-direct"]').forEach(o=>{i(o,"click",()=>this._closeDirectModal())}),t.querySelectorAll('[data-action="close-template"]').forEach(o=>{i(o,"click",()=>this._closeTemplateModal())}),t.querySelectorAll('[data-action="close-defaults"]').forEach(o=>{i(o,"click",()=>this._closeDefaultsModal())}),i(t.querySelector('[data-action="save"]'),"click",()=>this._saveModal()),i(t.querySelector('[data-action="save-direct"]'),"click",()=>this._saveDirectModal()),i(t.querySelector('[data-action="save-template"]'),"click",()=>this._saveTemplateModal()),i(t.querySelector('[data-action="save-defaults"]'),"click",()=>this._saveDefaultsModal()),i(t.querySelector('[data-action="delete"]'),"click",()=>this._deleteModal()),i(t.querySelector('[data-action="delete-direct"]'),"click",()=>this._deleteDirectModal()),i(t.querySelector('[data-action="delete-template"]'),"click",()=>this._deleteTemplateModal()),i(t.querySelector('[data-action="generate-uuid"]'),"click",()=>this._refreshUuid()),i(t.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>this._refreshDirectUuid()),i(t.querySelector('[data-action="generate-template-uuid"]'),"click",()=>this._refreshTemplateUuid()),i(t.querySelector('[data-action="add-voice-response-item"]'),"click",()=>this._addVoiceResponseItem()),i(t.querySelector('[data-action="add-direct-control-item"]'),"click",()=>this._addDirectControlItem()),i(t.querySelector('[data-action="add-next-action-item"]'),"click",()=>this._addNextActionItem()),i(t.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>this._addDirectSubControlItem()),i(t.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>this._addTemplateSubControlItem()),t.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(o=>{i(o,"click",()=>this._removeVoiceResponseItem(o.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(o=>{i(o,"click",()=>this._removeDirectControlItem(o.dataset.directControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(o=>{i(o,"click",()=>this._toggleDirectControlItem(o.dataset.directControlItemId))}),t.querySelectorAll('[data-action="remove-next-action-item"]').forEach(o=>{i(o,"click",()=>this._removeNextActionItem(o.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(o=>{i(o,"click",()=>this._toggleNextActionItem(o.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-response-item"]').forEach(o=>{i(o,"click",()=>this._toggleResponseItem(o.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(o=>{i(o,"click",()=>this._removeDirectSubControlItem(o.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(o=>{i(o,"click",()=>this._toggleDirectSubControlItem(o.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(o=>{i(o,"click",()=>this._removeTemplateSubControlItem(o.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(o=>{i(o,"click",()=>this._toggleTemplateSubControlItem(o.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="select-search-result"]').forEach(o=>{i(o,"click",a=>{a.preventDefault(),a.stopPropagation();let s=o.dataset.directControlItemId||o.dataset.nextActionItemId,l={uuid:o.dataset.resultUuid,title:o.dataset.resultTitle};this._selectSearchResult(s,l)})}),t.querySelectorAll("[data-field]").forEach(o=>{let a=o.dataset.field,s=l=>{let d=o.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;this._updateDraft(a,d)};i(o,"input",s),i(o,"change",s)}),t.querySelectorAll("[data-direct-field]").forEach(o=>{let a=o.dataset.directField,s=l=>{let d=o.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;this._updateDirectDraft(a,d),a==="typeData"&&(l.currentTarget.value!=="command"?(this._updateDirectDraft("manual",!1),this._updateDirectDraft("voiceCommands","")):(this._searchResults=[],this._searchActiveType=null)),a==="subDirectControlArray"&&d.length>0&&this._performUuidSearch(d,"subDirectControlSample"),(o.type==="checkbox"||o.tagName==="SELECT")&&this._render()};i(o,"input",s),i(o,"change",s),a==="subDirectControlArray"&&(i(o,"focus",()=>{this._subDirectControlSampleOptions.length||this._loadSubDirectControlSamples()}),i(o,"click",()=>{this._subDirectControlSampleOptions.length||this._loadSubDirectControlSamples()}))}),t.querySelectorAll("[data-template-field]").forEach(o=>{let a=o.dataset.templateField,s=l=>this._updateTemplateDraft(a,l.currentTarget.value);i(o,"input",s),i(o,"change",s)}),t.querySelectorAll("[data-defaults-field]").forEach(o=>{let a=o.dataset.defaultsField,s=l=>{let d=o.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;this._updateDefaultsDraft(a,d);let f=this._defaultConfig(this._defaultsActiveType);a==="llmEnabled"&&o.type==="checkbox"&&f.supportsLlm&&this._render()};i(o,"input",s),(o.type==="checkbox"||o.tagName==="SELECT")&&i(o,"change",s)}),t.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(o=>{let a=o.dataset.responseItemId,s=o.dataset.responseItemField,l=d=>{let f=o.type==="checkbox"?d.currentTarget.checked:d.currentTarget.value;this._updateVoiceResponseItem(a,s,f),o.type==="checkbox"&&this._render()};i(o,"input",l),o.type==="checkbox"&&i(o,"change",l)}),t.querySelectorAll("[data-direct-control-item-id]").forEach(o=>{let a=o.dataset.directControlItemId;i(o,"input",s=>this._updateDirectControlItem(a,s.currentTarget.value)),i(o,"change",s=>this._updateDirectControlItem(a,s.currentTarget.value))}),t.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(o=>{let a=o.dataset.nextActionItemId,s=o.dataset.nextActionItemField,l=d=>this._updateNextActionItem(a,s,d.currentTarget.value);i(o,"input",l),i(o,"change",l)}),t.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(o=>{let a=o.dataset.directSubControlItemId,s=o.dataset.directSubControlItemField,l=d=>this._updateDirectSubControlItem(a,s,d.currentTarget.value);i(o,"input",l),i(o,"change",l)}),t.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(o=>{let a=o.dataset.templateSubControlItemId,s=o.dataset.templateSubControlItemField,l=d=>this._updateTemplateSubControlItem(a,s,d.currentTarget.value);i(o,"input",l),i(o,"change",l)}),t.querySelectorAll("input, select, textarea").forEach(o=>{["click","focusin"].forEach(a=>{i(o,a,s=>this._swallowUiEvent(s))})})}_render(){let t=this._renderActiveTabBody(),n=`
      ${Qu}
      <section class="subtabs-dock">
        <div class="subtabs">
          <button type="button" class="subtab-button ${this._tab===D.primary?"active":""}" data-tab="${D.primary}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${this._tab===D.secondary?"active":""}" data-tab="${D.secondary}">\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${this._tab===D.direct?"active":""}" data-tab="${D.direct}">\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</button>
          <button type="button" class="subtab-button ${this._tab===D.defaults?"active":""}" data-tab="${D.defaults}">\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
        </div>
      </section>
      ${this._error?`<div class="status error">${_(this._error)}</div>`:""}
      ${this._status?`<div class="status ok">${_(this._status)}</div>`:""}
      ${t}
      ${this._renderModal()}
      ${this._renderDirectModal()}
      ${this._renderTemplateModal()}
      ${this._renderDefaultsModal()}
    `;this._mountReact(n),this._bind()}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",ss);var dr={base_url:"http://127.0.0.1:8000",client_id:"",timer_alarm_token:"",timer_alarm_device_ids:[""],timeout:10,scenarios:[]},Gu=`{
  "children_type": "some_subcommand",
  "children_direct_type": [{"type": "some_direct_subcommand"}],
  "parent_type": "weather_metno",
  "value": {"commands": "\u043C\u043E\u0441\u043A\u0432\u0430"},
  "client_id": "...",
  "device_id": "..."
}`,Xu=2e3,ds=new URL(import.meta.url).searchParams.get("v")||"",Ku=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),Ju=ds?Ku?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(ds)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(ds)}`:Ku?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js";var Zu=`
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
`;var E=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Tf=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,us=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,ur=()=>({id:us(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),ec=()=>({id:Tf(),name:"",script_entity_id:"",conditions:[ur()]});var Af=({html:e})=>ps.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),cs=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._reactRoot=null,this._hass=null,this._config={...dr},this._logs=[],this._activeTab="scenarios",this._expandedScenarios=new Set,this._expandedConditions=new Set,this._loaded=!1,this._loading=!1,this._saving=!1,this._loadingLogs=!1,this._error="",this._status="",this._logsTimer=null,this._timerAlarmLoaded=!1,this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._deviceAccordionOpen=!0,this._addScenarioLockUntil=0}set hass(t){let n=!this._hass;if(this._hass=t,!this._loaded&&!this._loading){this._loadConfig();return}(n||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(t){this._reactRoot||(this._reactRoot=(0,nc.createRoot)(this.shadowRoot)),(0,tc.flushSync)(()=>{this._reactRoot.render(ps.default.createElement(Af,{html:t}))})}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded)return this._timerAlarmLoadPromise||(this._timerAlarmLoading=!0,this._timerAlarmLoadPromise=import(Ju).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(t=>{this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})),this._timerAlarmLoadPromise}async _loadConfig(){this._loading=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...dr,...t,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(t.timer_alarm_device_ids??[]),scenarios:Array.isArray(t.scenarios)?t.scenarios.map(n=>this._normalizeScenarioForUi(n)):[]},this._expandedScenarios=new Set,this._error=""}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(t.logs)?t.logs:[]}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},Xu)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("script.")).sort((t,n)=>{let r=t.attributes.friendly_name||t.entity_id,i=n.attributes.friendly_name||n.entity_id;return r.localeCompare(i,"ru")}):[]}_setActiveTab(t){this._activeTab=t,this._status="",this._error="",this._render(),t==="logs"?this._startLogsPolling():(this._stopLogsPolling(),t==="timer-alarm"&&this._ensureTimerAlarmModule())}_renderSettings(){let t=this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids),n=this._deviceAccordionOpen,r=t.map((i,o)=>`
      <div class="device-row">
        <label class="field-grow">
          <span>device_id ${o+1}</span>
          <input
            data-timer-device-index="${o}"
            value="${E(i)}"
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
            <input data-config-field="base_url" value="${E(this._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 POST \u043D\u0430 <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
        <label>
          <span>Client ID</span>
          <input data-config-field="client_id" value="${E(this._config.client_id)}" placeholder="user-123" />
          <small>\u041F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0435\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A\u0430\u043A <code>{"clientId":"..."}</code>.</small>
        </label>
        <label>
          <span>Authorization token</span>
          <input data-config-field="timer_alarm_token" value="${E(this._config.timer_alarm_token)}" placeholder="Bearer xxx" />
          <small>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435 <code>Authorization</code> \u043A\u0430\u043A \u0435\u0441\u0442\u044C.</small>
        </label>
        <label class="field-narrow">
          <span>Timeout, \u0441\u0435\u043A\u0443\u043D\u0434</span>
          <input data-config-field="timeout" type="number" min="1" value="${E(this._config.timeout)}" />
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
        ${this._error?`<div class="status error">${E(this._error)}</div>`:""}
        ${this._status?`<div class="status ok">${E(this._status)}</div>`:""}
      </section>
    `}_toggleScenario(t){this._expandedScenarios.has(t)?this._expandedScenarios.delete(t):this._expandedScenarios.add(t),this._render()}_toggleCondition(t){this._expandedConditions.has(t)?this._expandedConditions.delete(t):this._expandedConditions.add(t),this._render()}_updateConfigField(t,n,r=!1){this._config={...this._config,[t]:n},this._status="",this._error="",r&&this._render()}_normalizeTimerAlarmDeviceIdsForUi(t){let r=(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(i=>String(i??"").trim());return r.length?r:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(t=>t)}_toggleDeviceAccordion(){this._deviceAccordionOpen=!this._deviceAccordionOpen,this._render()}_addTimerAlarmDeviceId(){let t=Array.isArray(this._config.timer_alarm_device_ids)?[...this._config.timer_alarm_device_ids]:[];t.push(""),this._config={...this._config,timer_alarm_device_ids:t},this._status="",this._error="",this._render()}_updateTimerAlarmDeviceId(t,n){let r=Array.isArray(this._config.timer_alarm_device_ids)?[...this._config.timer_alarm_device_ids]:[""];r[t]=n,this._config={...this._config,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r)},this._status="",this._error=""}_removeTimerAlarmDeviceId(t){let r=(Array.isArray(this._config.timer_alarm_device_ids)?[...this._config.timer_alarm_device_ids]:[""]).filter((i,o)=>o!==t);this._config={...this._config,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r)},this._status="",this._error="",this._render()}_updateScenario(t,n,r,i=!1){this._config={...this._config,scenarios:this._config.scenarios.map(o=>o.id===t?{...o,[n]:r}:o)},this._status="",this._error="",i&&this._render()}_normalizeScenarioForUi(t){let n=this._normalizeConditionsForUi(t);return{...t,conditions:n}}_serializeScenario(t){let n=(Array.isArray(t.conditions)?t.conditions:[]).flatMap(i=>this._serializeCondition(i)).filter(Boolean),r={id:t.id,name:t.name,script_entity_id:t.script_entity_id,conditions:n};return n.length===1&&(r.parent_type=n[0].parent_type??"",n[0].children_type&&(r.children_type=n[0].children_type),n[0].children_direct_type&&(r.children_direct_type=n[0].children_direct_type)),r}_normalizeConditionsForUi(t){if(Array.isArray(t.conditions)&&t.conditions.length)return t.conditions.map(s=>this._normalizeConditionForUi(s));let n=String(t.parent_type??"").split(";").map(s=>s.trim()),r=String(t.children_type??t.type??"").split(";").map(s=>s.trim()),i=String(t.children_direct_type??"").split(";").map(s=>s.trim()),o=Math.max(n.length,r.length,i.length,1),a=[];for(let s=0;s<o;s+=1){let l=this._normalizeConditionForUi({parent_type:n[s]??"",children_type:r[s]??"",children_direct_type:i[s]??""});(l.parent_type||l.children_type_enabled||l.children_direct_type_enabled)&&a.push(l)}return a.length?a:[ur()]}_normalizeConditionForUi(t){let n=String(t.children_type??t.type??"").trim(),r=String(t.children_direct_type??"").trim();return{id:String(t.id??us()),parent_type:String(t.parent_type??"").trim(),children_type:n,children_type_enabled:n!=="",children_direct_type:r,children_direct_type_enabled:r!==""}}_serializeCondition(t){let n=String(t.parent_type??"").trim(),r=String(t.children_type??"").trim(),i=String(t.children_direct_type??"").trim();if(!n&&!r&&!i)return[];let o=n.split(";").map(d=>d.trim()),a=r.split(";").map(d=>d.trim()),s=Math.max(o.length,a.length,1),l=[];for(let d=0;d<s;d+=1){let f=o[d]??"",h=a[d]??"";if(!f&&!h)continue;let m={parent_type:f};t.children_type_enabled&&h&&(m.children_type=h),t.children_direct_type_enabled&&i&&(m.children_direct_type=i),l.push(m)}return l}_updateCondition(t,n,r,i,o=!1){this._config={...this._config,scenarios:this._config.scenarios.map(a=>a.id===t?{...a,conditions:a.conditions.map(s=>s.id===n?{...s,[r]:i}:s)}:a)},this._status="",this._error="",o&&this._render()}_enableConditionChildrenType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!0,children_type:i.children_type??""}:i)}:r)},this._status="",this._error="",this._render()}_disableConditionChildrenType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!1,children_type:""}:i)}:r)},this._status="",this._error="",this._render()}_enableConditionChildrenDirectType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!0,children_direct_type:i.children_direct_type??""}:i)}:r)},this._status="",this._error="",this._render()}_disableConditionChildrenDirectType(t,n){this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!1,children_direct_type:""}:i)}:r)},this._status="",this._error="",this._render()}_addCondition(t){let n=ur();this._expandedConditions.add(n.id),this._config={...this._config,scenarios:this._config.scenarios.map(r=>r.id===t?{...r,conditions:[...r.conditions,n]}:r)},this._status="",this._error="",this._render()}_removeCondition(t,n){this._expandedConditions.delete(n),this._config={...this._config,scenarios:this._config.scenarios.map(r=>{if(r.id!==t)return r;let i=r.conditions.filter(o=>o.id!==n);return{...r,conditions:i.length?i:[ur()]}})},this._status="",this._error="",this._render()}_addScenario(){let t=Date.now();if(t<this._addScenarioLockUntil)return;this._addScenarioLockUntil=t+300;let n=ec();this._expandedScenarios.add(n.id),this._config={...this._config,scenarios:[n,...this._config.scenarios]},this._status="",this._render(),window.requestAnimationFrame(()=>this._scrollScenarioIntoView(n.id))}_scrollScenarioIntoView(t){let n=globalThis.CSS?.escape?globalThis.CSS.escape(t):t;this.shadowRoot.querySelector(`[data-scenario-card-id="${n}"]`)?.scrollIntoView({block:"start",behavior:"smooth"})}_removeScenario(t){this._expandedScenarios.delete(t),this._config={...this._config,scenarios:this._config.scenarios.filter(n=>n.id!==t)},this._status="",this._render()}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(n=>{let r=Array.isArray(n.conditions)?n.conditions:[];return r.length?!!r.find(o=>{let a=String(o.children_type??"").trim(),s=String(o.children_direct_type??"").trim();return!!(!String(o.parent_type??"").trim()&&!a&&!s||o.children_type_enabled&&!a||o.children_direct_type_enabled&&!s)})||!String(n.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,timer_alarm_token:this._config.timer_alarm_token,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(t=>this._serializeScenario(t))}}_downloadJson(){let t=this._buildConfigPayload(),n=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="dialog-custom-ui-config.json",i.click(),URL.revokeObjectURL(r),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}async _importJsonFile(t){if(!t)return;try{let r=await t.text(),i=JSON.parse(r),o=Array.isArray(i.scenarios)?i.scenarios:[];this._config={...dr,...i,timeout:Number(i.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(i.timer_alarm_device_ids??[]),scenarios:o.map(a=>this._normalizeScenarioForUi(a))},this._expandedScenarios=new Set(this._config.scenarios.map(a=>a.id)),this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-json-input"]');n&&(n.value=""),this._render()}async _save(){let t=this._validate();if(t){this._error=t,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let n=this._buildConfigPayload();await this._hass.callWS({type:"dialog_custom_ui/save_config",...n});let r=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...dr,...r,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r.timer_alarm_device_ids??[]),scenarios:Array.isArray(r.scenarios)?r.scenarios.map(i=>this._normalizeScenarioForUi(i)):[]},this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(t){t.stopPropagation()}_bindEvents(){let t=this.shadowRoot;t.querySelectorAll("[data-tab]").forEach(i=>{i.addEventListener("click",()=>this._setActiveTab(i.dataset.tab))}),t.querySelector('[data-action="save"]')?.addEventListener("click",()=>this._save());let n=t.querySelector('[data-action="add-scenario"]');n&&(n.onclick=()=>this._addScenario()),t.querySelector('[data-action="refresh-logs"]')?.addEventListener("click",()=>this._loadLogs()),t.querySelector('[data-action="download-json"]')?.addEventListener("click",()=>this._downloadJson()),t.querySelector('[data-action="upload-json"]')?.addEventListener("click",()=>this._openJsonFilePicker()),t.querySelector('[data-action="import-json-input"]')?.addEventListener("change",i=>{let[o]=i.currentTarget.files||[];this._importJsonFile(o)}),t.querySelector('[data-action="toggle-device-accordion"]')?.addEventListener("click",()=>this._toggleDeviceAccordion()),t.querySelector('[data-action="add-device-id"]')?.addEventListener("click",()=>this._addTimerAlarmDeviceId()),t.querySelectorAll('[data-action="add-condition"]').forEach(i=>{i.addEventListener("click",()=>this._addCondition(i.dataset.scenarioId))}),t.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(i=>{i.addEventListener("click",()=>this._enableConditionChildrenType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(i=>{i.addEventListener("click",()=>this._disableConditionChildrenType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(i=>{i.addEventListener("click",()=>this._enableConditionChildrenDirectType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(i=>{i.addEventListener("click",()=>this._disableConditionChildrenDirectType(i.dataset.scenarioId,i.dataset.conditionId))}),t.querySelectorAll("[data-toggle-scenario]").forEach(i=>{i.addEventListener("click",()=>this._toggleScenario(i.dataset.toggleScenario))}),t.querySelectorAll("[data-toggle-condition]").forEach(i=>{i.addEventListener("click",()=>this._toggleCondition(i.dataset.toggleCondition))}),t.querySelectorAll("input, select, textarea").forEach(i=>{["click","focusin"].forEach(o=>{i.addEventListener(o,a=>this._swallowUiEvent(a))})}),t.querySelectorAll("[data-config-field]").forEach(i=>{i.addEventListener("input",o=>{this._updateConfigField(o.currentTarget.dataset.configField,o.currentTarget.value,!1)}),i.addEventListener("change",o=>{this._updateConfigField(o.currentTarget.dataset.configField,o.currentTarget.value,!1)})}),t.querySelectorAll("[data-timer-device-index]").forEach(i=>{let o=Number(i.dataset.timerDeviceIndex);i.addEventListener("input",a=>{this._updateTimerAlarmDeviceId(o,a.currentTarget.value)}),i.addEventListener("change",a=>{this._updateTimerAlarmDeviceId(o,a.currentTarget.value),this._render()})}),t.querySelectorAll('[data-action="remove-device-id"]').forEach(i=>{i.addEventListener("click",()=>this._removeTimerAlarmDeviceId(Number(i.dataset.timerDeviceIndex)))}),t.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(i=>{let o=i.dataset.scenarioField,a=i.dataset.scenarioId;i.tagName==="SELECT"?i.addEventListener("change",s=>{this._updateScenario(a,o,s.currentTarget.value,!0)}):(i.addEventListener("input",s=>{this._updateScenario(a,o,s.currentTarget.value,!1)}),i.addEventListener("change",s=>{this._updateScenario(a,o,s.currentTarget.value,!0)}))}),t.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(i=>{let o=i.dataset.scenarioId,a=i.dataset.conditionId,s=i.dataset.conditionField;i.addEventListener("input",l=>{this._updateCondition(o,a,s,l.currentTarget.value,!1)}),i.addEventListener("change",l=>{this._updateCondition(o,a,s,l.currentTarget.value,!0)})}),t.querySelectorAll("[data-remove-id]").forEach(i=>{i.addEventListener("click",()=>this._removeScenario(i.dataset.removeId))}),t.querySelectorAll("[data-remove-condition-id]").forEach(i=>{i.addEventListener("click",()=>this._removeCondition(i.dataset.scenarioId,i.dataset.removeConditionId))});let r=t.querySelector("dialog-custom-ui-create-scenario");r&&(r.hass=this._hass,r.config={base_url:this._config.base_url,timer_alarm_token:this._config.timer_alarm_token})}_renderScenarios(){let t=this._scripts(),n=this._config.scenarios.length?this._config.scenarios.map((r,i)=>{let o=this._expandedScenarios.has(r.id),a=r.conditions.map((s,l)=>`
            ${(()=>{let d=this._expandedConditions.has(s.id),f=[];s.parent_type&&f.push(`Parent: ${E(s.parent_type)}`),s.children_type_enabled&&s.children_type&&f.push(`Children: ${E(s.children_type)}`),s.children_direct_type_enabled&&s.children_direct_type&&f.push(`Children Direct: ${E(s.children_direct_type)}`);let h=f.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return`
            <div class="condition-card ${d?"expanded":"collapsed"}">
              <button
                type="button"
                class="condition-header"
                data-toggle-condition="${E(s.id)}"
              >
                <span class="condition-heading">
                  <span class="condition-title">\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ${l+1}</span>
                  <span class="condition-preview">${h}</span>
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
                      data-scenario-id="${E(r.id)}"
                      data-remove-condition-id="${E(s.id)}"
                    >\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                  `:""}
                </div>
                <div class="condition-grid">
                  <div class="scenario-type-field">
                    <div class="field-title-row">
                      <span>Parent Type</span>
                    </div>
                    <input
                      data-scenario-id="${E(r.id)}"
                      data-condition-id="${E(s.id)}"
                      data-condition-field="parent_type"
                      value="${E(s.parent_type)}"
                      placeholder="status_door"
                    />
                    <small>\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D children_type \u0432 \u044D\u0442\u043E\u043C \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0438.</small>
                  </div>
                  ${s.children_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-type"
                          data-scenario-id="${E(r.id)}"
                          data-condition-id="${E(s.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${E(r.id)}"
                        data-condition-id="${E(s.id)}"
                        data-condition-field="children_type"
                        value="${E(s.children_type??"")}"
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
                        data-scenario-id="${E(r.id)}"
                        data-condition-id="${E(s.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E parent_type.</small>
                    </div>
                  `}
                  ${s.children_direct_type_enabled?`
                    <div class="scenario-type-field">
                      <div class="field-title-row">
                        <span>Children Direct Type</span>
                        <button
                          type="button"
                          class="ghost remove-inline-button"
                          data-action="disable-condition-children-direct-type"
                          data-scenario-id="${E(r.id)}"
                          data-condition-id="${E(s.id)}"
                        >\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
                      </div>
                      <input
                        data-scenario-id="${E(r.id)}"
                        data-condition-id="${E(s.id)}"
                        data-condition-field="children_direct_type"
                        value="${E(s.children_direct_type??"")}"
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
                        data-scenario-id="${E(r.id)}"
                        data-condition-id="${E(s.id)}"
                      >\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type</button>
                      <small>\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.</small>
                    </div>
                  `}
                </div>
              </div>
            </div>
              `})()}
          `).join("");return`
            <section class="scenario-card ${o?"expanded":"collapsed"}" data-scenario-card-id="${E(r.id)}">
              <div class="scenario-header">
                <button type="button" class="scenario-toggle" data-toggle-scenario="${E(r.id)}">
                  <span class="scenario-toggle-icon">${o?"\u2212":"+"}</span>
                  <span>
                    <span class="scenario-kicker">\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${i+1}</span>
                    <span class="scenario-title">${E(r.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
                  </span>
                </button>
                <button type="button" class="ghost" data-remove-id="${E(r.id)}">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>
              </div>
              <div class="scenario-body ${o?"open":"hidden"}">
                <div class="scenario-grid">
                  <label class="field-span-2">
                    <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430</span>
                    <input data-scenario-id="${E(r.id)}" data-scenario-field="name" value="${E(r.name)}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C" />
                  </label>
                  <div class="field-span-2 conditions-block">
                    <div class="conditions-toolbar">
                      <div>
                        <span class="section-label">\u0423\u0441\u043B\u043E\u0432\u0438\u044F</span>
                        <small>\u0427\u0435\u0440\u0435\u0437 <code>+</code> \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 <code>Parent Type</code> + <code>Children Type</code> + <code>Children Direct Type</code>. \u0415\u0441\u043B\u0438 \u0432 <code>Parent Type</code> \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 <code>;</code>, \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.</small>
                      </div>
                      <button type="button" class="secondary compact-button" data-action="add-condition" data-scenario-id="${E(r.id)}">+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435</button>
                    </div>
                    <div class="conditions-list">${a}</div>
                  </div>
                  <label class="field-span-2">
                    <span>\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant</span>
                    <select data-scenario-id="${E(r.id)}" data-scenario-field="script_entity_id">
                      <option value="">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*</option>
                      ${t.map(s=>{let l=s.entity_id===r.script_entity_id?"selected":"",d=s.attributes.friendly_name||s.entity_id;return`<option value="${E(s.entity_id)}" ${l}>${E(d)} (${E(s.entity_id)})</option>`}).join("")}
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
        ${this._error?`<div class="status error">${E(this._error)}</div>`:""}
        ${this._status?`<div class="status ok">${E(this._status)}</div>`:""}
      </section>
      <div class="scenario-list">${n}</div>
      <section class="help-card">
        <div><strong>\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441</strong></div>
        <pre><code>curl -X POST http://localhost:8000/api/dialog/command-check   -H "Content-Type: application/json"   -d '{"clientId":"user-123"}'</code></pre>
        <div style="margin-top: 12px;"><strong>\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442</strong></div>
        <div>\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 <code>script.*</code> \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: <code>dialog_payload</code>, <code>dialog_children_type</code>, <code>dialog_children_direct_type</code>, <code>dialog_type</code>, <code>dialog_parent_type</code>, <code>dialog_value</code>, <code>dialog_client_id</code>, <code>dialog_device_id</code>.</div>
        <pre><code>${E(Gu)}</code></pre>
      </section>
    `}_renderLogs(){let t=this._logs.length?this._logs.map(n=>`
          <div class="log-item ${E(n.level)}">
            <div class="log-meta">
              <span class="log-time">${E(n.ts)}</span>
              <span class="log-level">${E(n.level)}</span>
            </div>
            <div class="log-message">${E(n.message)}</div>
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
        ${this._error?`<div class="status error">${E(this._error)}</div>`:""}
        ${this._status?`<div class="status ok">${E(this._status)}</div>`:""}
      </section>
      <section class="help-card">
        <div><strong>\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E JSON</strong></div>
        <pre><code>${E(JSON.stringify(t,null,2))}</code></pre>
      </section>
    `}_renderCreateScenario(){return`
      <dialog-custom-ui-create-scenario></dialog-custom-ui-create-scenario>
    `}_renderActiveTopLevelPage(){return this._activeTab==="logs"?this._renderLogs():this._activeTab==="scenarios"?this._renderScenarios():this._activeTab==="create-scenario"?this._renderCreateScenario():this._activeTab==="timer-alarm"?this._renderTimerAlarm():this._activeTab==="json"?this._renderJsonTools():this._renderSettings()}_render(){let t=this._renderActiveTopLevelPage(),n=`
      ${Zu}
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
    `;this._mountReact(n),this._bindEvents()}};customElements.get("dialog-custom-ui-panel")||customElements.define("dialog-custom-ui-panel",cs);
