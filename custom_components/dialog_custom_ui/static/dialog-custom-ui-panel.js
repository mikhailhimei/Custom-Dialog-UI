var Vm=Object.create;var Vl=Object.defineProperty;var Rm=Object.getOwnPropertyDescriptor;var Ym=Object.getOwnPropertyNames;var Hm=Object.getPrototypeOf,qm=Object.prototype.hasOwnProperty;var At=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Wm=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ym(t))!qm.call(e,i)&&i!==n&&Vl(e,i,{get:()=>t[i],enumerable:!(r=Rm(t,i))||r.enumerable});return e};var Be=(e,t,n)=>(n=e!=null?Vm(Hm(e)):{},Wm(t||!e||!e.__esModule?Vl(n,"default",{value:e,enumerable:!0}):n,e));var es=At(x=>{"use strict";var kn=Symbol.for("react.element"),Km=Symbol.for("react.portal"),Qm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Xm=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),Zm=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),rf=Symbol.for("react.lazy"),Rl=Symbol.iterator;function of(e){return e===null||typeof e!="object"?null:(e=Rl&&e[Rl]||e["@@iterator"],typeof e=="function"?e:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wl=Object.assign,Kl={};function Wt(e,t,n){this.props=e,this.context=t,this.refs=Kl,this.updater=n||ql}Wt.prototype.isReactComponent={};Wt.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ql(){}Ql.prototype=Wt.prototype;function so(e,t,n){this.props=e,this.context=t,this.refs=Kl,this.updater=n||ql}var uo=so.prototype=new Ql;uo.constructor=so;Wl(uo,Wt.prototype);uo.isPureReactComponent=!0;var Yl=Array.isArray,Gl=Object.prototype.hasOwnProperty,co={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Gl.call(t,r)&&!Xl.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:kn,type:e,key:o,ref:a,props:i,_owner:co.current}}function af(e,t){return{$$typeof:kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function po(e){return typeof e=="object"&&e!==null&&e.$$typeof===kn}function lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hl=/\/+/g;function lo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):t.toString(36)}function Cr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case kn:case Km:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+lo(a,0):r,Yl(i)?(n="",e!=null&&(n=e.replace(Hl,"$&/")+"/"),Cr(i,t,n,"",function(d){return d})):i!=null&&(po(i)&&(i=af(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Hl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Yl(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+lo(o,l);a+=Cr(o,t,n,s,i)}else if(s=of(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+lo(o,l++),a+=Cr(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function wr(e,t,n){if(e==null)return e;var r=[],i=0;return Cr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function sf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Tr={transition:null},df={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:co};function Zl(){throw Error("act(...) is not supported in production builds of React.")}x.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};x.Component=Wt;x.Fragment=Qm;x.Profiler=Xm;x.PureComponent=so;x.StrictMode=Gm;x.Suspense=tf;x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=df;x.act=Zl;x.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wl({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=co.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Gl.call(t,s)&&!Xl.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:kn,type:e.type,key:i,ref:o,props:r,_owner:a}};x.createContext=function(e){return e={$$typeof:Zm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jm,_context:e},e.Consumer=e};x.createElement=Jl;x.createFactory=function(e){var t=Jl.bind(null,e);return t.type=e,t};x.createRef=function(){return{current:null}};x.forwardRef=function(e){return{$$typeof:ef,render:e}};x.isValidElement=po;x.lazy=function(e){return{$$typeof:rf,_payload:{_status:-1,_result:e},_init:sf}};x.memo=function(e,t){return{$$typeof:nf,type:e,compare:t===void 0?null:t}};x.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};x.unstable_act=Zl;x.useCallback=function(e,t){return de.current.useCallback(e,t)};x.useContext=function(e){return de.current.useContext(e)};x.useDebugValue=function(){};x.useDeferredValue=function(e){return de.current.useDeferredValue(e)};x.useEffect=function(e,t){return de.current.useEffect(e,t)};x.useId=function(){return de.current.useId()};x.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};x.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};x.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};x.useMemo=function(e,t){return de.current.useMemo(e,t)};x.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};x.useRef=function(e){return de.current.useRef(e)};x.useState=function(e){return de.current.useState(e)};x.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};x.useTransition=function(){return de.current.useTransition()};x.version="18.3.1"});var je=At((bg,ts)=>{"use strict";ts.exports=es()});var cs=At(z=>{"use strict";function go(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<kr(i,t))e[r]=t,e[n]=i,n=r;else break e}}function xe(e){return e.length===0?null:e[0]}function Ir(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var a=2*(r+1)-1,l=e[a],s=a+1,d=e[s];if(0>kr(l,n))s<i&&0>kr(d,l)?(e[r]=d,e[s]=n,r=s):(e[r]=l,e[a]=n,r=a);else if(s<i&&0>kr(d,n))e[r]=d,e[s]=n,r=s;else break e}}return t}function kr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(ns=performance,z.unstable_now=function(){return ns.now()}):(mo=Date,rs=mo.now(),z.unstable_now=function(){return mo.now()-rs});var ns,mo,rs,Ve=[],st=[],uf=1,ke=null,re=3,Er=!1,Mt=!1,In=!1,as=typeof setTimeout=="function"?setTimeout:null,ls=typeof clearTimeout=="function"?clearTimeout:null,is=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _o(e){for(var t=xe(st);t!==null;){if(t.callback===null)Ir(st);else if(t.startTime<=e)Ir(st),t.sortIndex=t.expirationTime,go(Ve,t);else break;t=xe(st)}}function yo(e){if(In=!1,_o(e),!Mt)if(xe(Ve)!==null)Mt=!0,So(vo);else{var t=xe(st);t!==null&&bo(yo,t.startTime-e)}}function vo(e,t){Mt=!1,In&&(In=!1,ls(En),En=-1),Er=!0;var n=re;try{for(_o(t),ke=xe(Ve);ke!==null&&(!(ke.expirationTime>t)||e&&!us());){var r=ke.callback;if(typeof r=="function"){ke.callback=null,re=ke.priorityLevel;var i=r(ke.expirationTime<=t);t=z.unstable_now(),typeof i=="function"?ke.callback=i:ke===xe(Ve)&&Ir(Ve),_o(t)}else Ir(Ve);ke=xe(Ve)}if(ke!==null)var o=!0;else{var a=xe(st);a!==null&&bo(yo,a.startTime-t),o=!1}return o}finally{ke=null,re=n,Er=!1}}var Ar=!1,Dr=null,En=-1,ss=5,ds=-1;function us(){return!(z.unstable_now()-ds<ss)}function fo(){if(Dr!==null){var e=z.unstable_now();ds=e;var t=!0;try{t=Dr(!0,e)}finally{t?Dn():(Ar=!1,Dr=null)}}else Ar=!1}var Dn;typeof is=="function"?Dn=function(){is(fo)}:typeof MessageChannel<"u"?(ho=new MessageChannel,os=ho.port2,ho.port1.onmessage=fo,Dn=function(){os.postMessage(null)}):Dn=function(){as(fo,0)};var ho,os;function So(e){Dr=e,Ar||(Ar=!0,Dn())}function bo(e,t){En=as(function(){e(z.unstable_now())},t)}z.unstable_IdlePriority=5;z.unstable_ImmediatePriority=1;z.unstable_LowPriority=4;z.unstable_NormalPriority=3;z.unstable_Profiling=null;z.unstable_UserBlockingPriority=2;z.unstable_cancelCallback=function(e){e.callback=null};z.unstable_continueExecution=function(){Mt||Er||(Mt=!0,So(vo))};z.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ss=0<e?Math.floor(1e3/e):5};z.unstable_getCurrentPriorityLevel=function(){return re};z.unstable_getFirstCallbackNode=function(){return xe(Ve)};z.unstable_next=function(e){switch(re){case 1:case 2:case 3:var t=3;break;default:t=re}var n=re;re=t;try{return e()}finally{re=n}};z.unstable_pauseExecution=function(){};z.unstable_requestPaint=function(){};z.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=re;re=e;try{return t()}finally{re=n}};z.unstable_scheduleCallback=function(e,t,n){var r=z.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,e={id:uf++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1},n>r?(e.sortIndex=n,go(st,e),xe(Ve)===null&&e===xe(st)&&(In?(ls(En),En=-1):In=!0,bo(yo,n-r))):(e.sortIndex=i,go(Ve,e),Mt||Er||(Mt=!0,So(vo))),e};z.unstable_shouldYield=us;z.unstable_wrapCallback=function(e){var t=re;return function(){var n=re;re=t;try{return e.apply(this,arguments)}finally{re=n}}}});var ms=At((Cg,ps)=>{"use strict";ps.exports=cs()});var _c=At(Te=>{"use strict";var cf=je(),we=ms();function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sd=new Set,Gn={};function Rt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)Sd.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=Object.prototype.hasOwnProperty,pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},hs={};function mf(e){return Yo.call(hs,e)?!0:Yo.call(fs,e)?!1:pf.test(e)?hs[e]=!0:(fs[e]=!0,!1)}function ff(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hf(e,t,n,r){if(t===null||typeof t>"u"||ff(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ua=/[\-:]([a-z])/g;function za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ua,za);te[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ua,za);te[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ua,za);te[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oa(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hf(t,n,i,r)&&(n=null),r||i===null?mf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),Fa=Symbol.for("react.strict_mode"),Ho=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),qo=Symbol.for("react.suspense"),Wo=Symbol.for("react.suspense_list"),ja=Symbol.for("react.memo"),ut=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Cd=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var gs=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,wo;function zn(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var Co=!1;function To(e,t){if(!e||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function gf(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=To(e.type,!1),e;case 11:return e=To(e.type.render,!1),e;case 1:return e=To(e.type,!0),e;default:return""}}function Ko(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Gt:return"Portal";case Ho:return"Profiler";case Fa:return"StrictMode";case qo:return"Suspense";case Wo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wd:return(e.displayName||"Context")+".Consumer";case bd:return(e._context.displayName||"Context")+".Provider";case Ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ja:return t=e.displayName||null,t!==null?t:Ko(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Ko(e(t))}catch{}}return null}function _f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ko(t);case 8:return t===Fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yf(e){var t=Td(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=yf(e))}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Td(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qo(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _s(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dd(e,t){t=t.checked,t!=null&&Oa(e,"checked",t,!1)}function Go(e,t){Dd(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xo(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xo(e,t,n){(t!=="number"||oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(On(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function Id(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ed(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ed(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ad=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vf=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){vf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Md(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function Nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Md(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sf=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(e,t){if(t){if(Sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=null;function Va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ra=null,un=null,cn=null;function bs(e){if(e=hr(e)){if(typeof ra!="function")throw Error(y(280));var t=e.stateNode;t&&(t=$i(t),ra(e.stateNode,e.type,t))}}function xd(e){un?cn?cn.push(e):cn=[e]:un=e}function $d(){if(un){var e=un,t=cn;if(cn=un=null,bs(e),t)for(e=0;e<t.length;e++)bs(t[e])}}function Pd(e,t){return e(t)}function Ld(){}var ko=!1;function Ud(e,t,n){if(ko)return e(t,n);ko=!0;try{return Pd(e,t,n)}finally{ko=!1,(un!==null||cn!==null)&&(Ld(),$d())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=$i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ia=!1;if(nt)try{Kt={},Object.defineProperty(Kt,"passive",{get:function(){ia=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{ia=!1}var Kt;function bf(e,t,n,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Vn=!1,ai=null,li=!1,oa=null,wf={onError:function(e){Vn=!0,ai=e}};function Cf(e,t,n,r,i,o,a,l,s){Vn=!1,ai=null,bf.apply(wf,arguments)}function Tf(e,t,n,r,i,o,a,l,s){if(Cf.apply(this,arguments),Vn){if(Vn){var d=ai;Vn=!1,ai=null}else throw Error(y(198));li||(li=!0,oa=d)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ws(e){if(Yt(e)!==e)throw Error(y(188))}function kf(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ws(i),e;if(o===r)return ws(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Od(e){return e=kf(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fd(e);if(t!==null)return t;e=e.sibling}return null}var Bd=we.unstable_scheduleCallback,Cs=we.unstable_cancelCallback,Df=we.unstable_shouldYield,If=we.unstable_requestPaint,q=we.unstable_now,Ef=we.unstable_getCurrentPriorityLevel,Ra=we.unstable_ImmediatePriority,jd=we.unstable_UserBlockingPriority,si=we.unstable_NormalPriority,Af=we.unstable_LowPriority,Vd=we.unstable_IdlePriority,Ai=null,qe=null;function Mf(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Ai,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:$f,Nf=Math.log,xf=Math.LN2;function $f(e){return e>>>=0,e===0?32:31-(Nf(e)/xf|0)|0}var $r=64,Pr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Fn(l):(o&=a,o!==0&&(r=Fn(o)))}else a=n&~i,a!==0?r=Fn(a):o!==0&&(r=Fn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-ze(o),l=1<<a,s=i[a];s===-1?((l&n)===0||(l&r)!==0)&&(i[a]=Pf(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rd(){var e=$r;return $r<<=1,($r&4194240)===0&&($r=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Yd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Hd,Ha,qd,Wd,Kd,la=!1,Lr=[],gt=null,_t=null,yt=null,Zn=new Map,er=new Map,pt=[],zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Mn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=hr(t),t!==null&&Ha(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Of(e,t,n,r,i){switch(t){case"focusin":return gt=Mn(gt,e,t,n,r,i),!0;case"dragenter":return _t=Mn(_t,e,t,n,r,i),!0;case"mouseover":return yt=Mn(yt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zn.set(o,Mn(Zn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,er.set(o,Mn(er.get(o)||null,e,t,n,r,i)),!0}return!1}function Qd(e){var t=$t(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=zd(n),t!==null){e.blockedOn=t,Kd(e.priority,function(){qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);na=r,n.target.dispatchEvent(r),na=null}else return t=hr(n),t!==null&&Ha(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){Qr(e)&&n.delete(t)}function Ff(){la=!1,gt!==null&&Qr(gt)&&(gt=null),_t!==null&&Qr(_t)&&(_t=null),yt!==null&&Qr(yt)&&(yt=null),Zn.forEach(ks),er.forEach(ks)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Ff)))}function tr(e){function t(i){return Nn(i,e)}if(0<Lr.length){Nn(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Nn(gt,e),_t!==null&&Nn(_t,e),yt!==null&&Nn(yt,e),Zn.forEach(t),er.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Qd(n),n.blockedOn===null&&pt.shift()}var pn=at.ReactCurrentBatchConfig,ui=!0;function Bf(e,t,n,r){var i=U,o=pn.transition;pn.transition=null;try{U=1,qa(e,t,n,r)}finally{U=i,pn.transition=o}}function jf(e,t,n,r){var i=U,o=pn.transition;pn.transition=null;try{U=4,qa(e,t,n,r)}finally{U=i,pn.transition=o}}function qa(e,t,n,r){if(ui){var i=sa(e,t,n,r);if(i===null)$o(e,t,r,ci,n),Ts(e,r);else if(Of(i,e,t,n,r))r.stopPropagation();else if(Ts(e,r),t&4&&-1<zf.indexOf(e)){for(;i!==null;){var o=hr(i);if(o!==null&&Hd(o),o=sa(e,t,n,r),o===null&&$o(e,t,r,ci,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $o(e,t,r,null,n)}}var ci=null;function sa(e,t,n,r){if(ci=null,e=Va(r),e=$t(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ef()){case Ra:return 1;case jd:return 4;case si:case Af:return 16;case Vd:return 536870912;default:return 16}default:return 16}}var ft=null,Wa=null,Gr=null;function Xd(){if(Gr)return Gr;var e,t=Wa,n=t.length,r,i="value"in ft?ft.value:ft.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Gr=i.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function Ds(){return!1}function Ce(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ur:Ds,this.isPropagationStopped=Ds,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=Ce(wn),fr=Y({},wn,{view:0,detail:0}),Vf=Ce(fr),Io,Eo,xn,Mi=Y({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Io=e.screenX-xn.screenX,Eo=e.screenY-xn.screenY):Eo=Io=0,xn=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),Is=Ce(Mi),Rf=Y({},Mi,{dataTransfer:0}),Yf=Ce(Rf),Hf=Y({},fr,{relatedTarget:0}),Ao=Ce(Hf),qf=Y({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wf=Ce(qf),Kf=Y({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qf=Ce(Kf),Gf=Y({},wn,{data:0}),Es=Ce(Gf),Xf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zf[e])?!!t[e]:!1}function Qa(){return eh}var th=Y({},fr,{key:function(e){if(e.key){var t=Xf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nh=Ce(th),rh=Y({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=Ce(rh),ih=Y({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),oh=Ce(ih),ah=Y({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=Ce(ah),sh=Y({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dh=Ce(sh),uh=[9,13,27,32],Ga=nt&&"CompositionEvent"in window,Rn=null;nt&&"documentMode"in document&&(Rn=document.documentMode);var ch=nt&&"TextEvent"in window&&!Rn,Jd=nt&&(!Ga||Rn&&8<Rn&&11>=Rn),Ms=" ",Ns=!1;function Zd(e,t){switch(e){case"keyup":return uh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function ph(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(Ns=!0,Ms);case"textInput":return e=t.data,e===Ms&&Ns?null:e;default:return null}}function mh(e,t){if(Jt)return e==="compositionend"||!Ga&&Zd(e,t)?(e=Xd(),Gr=Wa=ft=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jd&&t.locale!=="ko"?null:t.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fh[e.type]:t==="textarea"}function tu(e,t,n,r){xd(r),t=pi(t,"onChange"),0<t.length&&(n=new Ka("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,nr=null;function hh(e){pu(e,0)}function Ni(e){var t=tn(e);if(kd(t))return e}function gh(e,t){if(e==="change")return t}var nu=!1;nt&&(nt?(Or="oninput"in document,Or||(Mo=document.createElement("div"),Mo.setAttribute("oninput","return;"),Or=typeof Mo.oninput=="function"),zr=Or):zr=!1,nu=zr&&(!document.documentMode||9<document.documentMode));var zr,Or,Mo;function $s(){Yn&&(Yn.detachEvent("onpropertychange",ru),nr=Yn=null)}function ru(e){if(e.propertyName==="value"&&Ni(nr)){var t=[];tu(t,nr,e,Va(e)),Ud(hh,t)}}function _h(e,t,n){e==="focusin"?($s(),Yn=t,nr=n,Yn.attachEvent("onpropertychange",ru)):e==="focusout"&&$s()}function yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(nr)}function vh(e,t){if(e==="click")return Ni(t)}function Sh(e,t){if(e==="input"||e==="change")return Ni(t)}function bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:bh;function rr(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yo.call(t,i)||!Fe(e[i],t[i]))return!1}return!0}function Ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ls(e,t){var n=Ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ps(n)}}function iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ou(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wh(e){var t=ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&iu(n.ownerDocument.documentElement,n)){if(r!==null&&Xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ls(n,o);var a=Ls(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=nt&&"documentMode"in document&&11>=document.documentMode,Zt=null,da=null,Hn=null,ua=!1;function Us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||Zt==null||Zt!==oi(r)||(r=Zt,"selectionStart"in r&&Xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&rr(Hn,r)||(Hn=r,r=pi(da,"onSelect"),0<r.length&&(t=new Ka("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},No={},au={};nt&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function xi(e){if(No[e])return No[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in au)return No[e]=t[n];return e}var lu=xi("animationend"),su=xi("animationiteration"),du=xi("animationstart"),uu=xi("transitionend"),cu=new Map,zs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){cu.set(e,t),Rt(t,[e])}for(Br=0;Br<zs.length;Br++)jr=zs[Br],Os=jr.toLowerCase(),Fs=jr[0].toUpperCase()+jr.slice(1),Dt(Os,"on"+Fs);var jr,Os,Fs,Br;Dt(lu,"onAnimationEnd");Dt(su,"onAnimationIteration");Dt(du,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(uu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Th=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tf(r,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Bs(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Bs(i,l,d),o=s}}}if(li)throw e=oa,li=!1,oa=null,e}function F(e,t){var n=t[ha];n===void 0&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(mu(t,e,2,!1),n.add(r))}function xo(e,t,n){var r=0;t&&(r|=4),mu(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Vr]){e[Vr]=!0,Sd.forEach(function(n){n!=="selectionchange"&&(Th.has(n)||xo(n,!1,e),xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,xo("selectionchange",!1,t))}}function mu(e,t,n,r){switch(Gd(t)){case 1:var i=Bf;break;case 4:i=jf;break;default:i=qa}n=i.bind(null,t,n,e),i=void 0,!ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $o(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=$t(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Ud(function(){var d=o,m=Va(n),c=[];e:{var h=cu.get(e);if(h!==void 0){var v=Ka,w=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":v=nh;break;case"focusin":w="focus",v=Ao;break;case"focusout":w="blur",v=Ao;break;case"beforeblur":case"afterblur":v=Ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=oh;break;case lu:case su:case du:v=Wf;break;case uu:v=lh;break;case"scroll":v=Vf;break;case"wheel":v=dh;break;case"copy":case"cut":case"paste":v=Qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=As}var S=(t&4)!==0,L=!S&&e==="scroll",p=S?h!==null?h+"Capture":null:h;S=[];for(var u=d,f;u!==null;){f=u;var _=f.stateNode;if(f.tag===5&&_!==null&&(f=_,p!==null&&(_=Jn(u,p),_!=null&&S.push(or(u,_,f)))),L)break;u=u.return}0<S.length&&(h=new v(h,w,null,n,m),c.push({event:h,listeners:S}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==na&&(w=n.relatedTarget||n.fromElement)&&($t(w)||w[rt]))break e;if((v||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=d,w=w?$t(w):null,w!==null&&(L=Yt(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=d),v!==w)){if(S=Is,_="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(S=As,_="onPointerLeave",p="onPointerEnter",u="pointer"),L=v==null?h:tn(v),f=w==null?h:tn(w),h=new S(_,u+"leave",v,n,m),h.target=L,h.relatedTarget=f,_=null,$t(m)===d&&(S=new S(p,u+"enter",w,n,m),S.target=f,S.relatedTarget=L,_=S),L=_,v&&w)t:{for(S=v,p=w,u=0,f=S;f;f=Qt(f))u++;for(f=0,_=p;_;_=Qt(_))f++;for(;0<u-f;)S=Qt(S),u--;for(;0<f-u;)p=Qt(p),f--;for(;u--;){if(S===p||p!==null&&S===p.alternate)break t;S=Qt(S),p=Qt(p)}S=null}else S=null;v!==null&&js(c,h,v,S,!1),w!==null&&L!==null&&js(c,L,w,S,!0)}}e:{if(h=d?tn(d):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var b=gh;else if(xs(h))if(nu)b=Sh;else{b=yh;var T=_h}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=vh);if(b&&(b=b(e,d))){tu(c,b,n,m);break e}T&&T(e,h,d),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Xo(h,"number",h.value)}switch(T=d?tn(d):window,e){case"focusin":(xs(T)||T.contentEditable==="true")&&(Zt=T,da=d,Hn=null);break;case"focusout":Hn=da=Zt=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,Us(c,n,m);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Us(c,n,m)}var D;if(Ga)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Jt?Zd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Jd&&n.locale!=="ko"&&(Jt||A!=="onCompositionStart"?A==="onCompositionEnd"&&Jt&&(D=Xd()):(ft=m,Wa="value"in ft?ft.value:ft.textContent,Jt=!0)),T=pi(d,A),0<T.length&&(A=new Es(A,e,null,n,m),c.push({event:A,listeners:T}),D?A.data=D:(D=eu(n),D!==null&&(A.data=D)))),(D=ch?ph(e,n):mh(e,n))&&(d=pi(d,"onBeforeInput"),0<d.length&&(m=new Es("onBeforeInput","beforeinput",null,n,m),c.push({event:m,listeners:d}),m.data=D))}pu(c,t)})}function or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jn(e,n),o!=null&&r.unshift(or(e,o,i)),o=Jn(e,t),o!=null&&r.push(or(e,o,i))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function js(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=Jn(n,o),s!=null&&a.unshift(or(n,s,l))):i||(s=Jn(n,o),s!=null&&a.push(or(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kh=/\r\n?/g,Dh=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(kh,`
`).replace(Dh,"")}function Rr(e,t,n){if(t=Vs(t),Vs(e)!==t&&n)throw Error(y(425))}function mi(){}var ca=null,pa=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,Rs=typeof Promise=="function"?Promise:void 0,Eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Rs<"u"?function(e){return Rs.resolve(null).then(e).catch(Ah)}:fa;function Ah(e){setTimeout(function(){throw e})}function Po(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tr(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),He="__reactFiber$"+Cn,ar="__reactProps$"+Cn,rt="__reactContainer$"+Cn,ha="__reactEvents$"+Cn,Mh="__reactListeners$"+Cn,Nh="__reactHandles$"+Cn;function $t(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ys(e);e!==null;){if(n=e[He])return n;e=Ys(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[He]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function $i(e){return e[ar]||null}var ga=[],nn=-1;function It(e){return{current:e}}function B(e){0>nn||(e.current=ga[nn],ga[nn]=null,nn--)}function O(e,t){nn++,ga[nn]=e.current,e.current=t}var kt={},le=It(kt),ge=It(!1),Ot=kt;function gn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function fi(){B(ge),B(le)}function Hs(e,t,n){if(le.current!==kt)throw Error(y(168));O(le,t),O(ge,n)}function fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,_f(e)||"Unknown",i));return Y({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ot=le.current,O(le,e),O(ge,ge.current),!0}function qs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=fu(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(le),O(le,e)):B(ge),O(ge,n)}var Je=null,Pi=!1,Lo=!1;function hu(e){Je===null?Je=[e]:Je.push(e)}function xh(e){Pi=!0,hu(e)}function Et(){if(!Lo&&Je!==null){Lo=!0;var e=0,t=U;try{var n=Je;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,Pi=!1}catch(i){throw Je!==null&&(Je=Je.slice(e+1)),Bd(Ra,Et),i}finally{U=t,Lo=!1}}return null}var rn=[],on=0,gi=null,_i=0,De=[],Ie=0,Ft=null,Ze=1,et="";function Nt(e,t){rn[on++]=_i,rn[on++]=gi,gi=e,_i=t}function gu(e,t,n){De[Ie++]=Ze,De[Ie++]=et,De[Ie++]=Ft,Ft=e;var r=Ze;e=et;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var o=32-ze(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ze=1<<32-ze(t)+i|n<<i|r,et=o+e}else Ze=1<<o|n<<i|r,et=e}function Ja(e){e.return!==null&&(Nt(e,1),gu(e,1,0))}function Za(e){for(;e===gi;)gi=rn[--on],rn[on]=null,_i=rn[--on],rn[on]=null;for(;e===Ft;)Ft=De[--Ie],De[Ie]=null,et=De[--Ie],De[Ie]=null,Ze=De[--Ie],De[Ie]=null}var be=null,Se=null,j=!1,Ue=null;function _u(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Se=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Ze,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Se=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ya(e){if(j){var t=Se;if(t){var n=t;if(!Ws(e,t)){if(_a(e))throw Error(y(418));t=vt(n.nextSibling);var r=be;t&&Ws(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,j=!1,be=e)}}else{if(_a(e))throw Error(y(418));e.flags=e.flags&-4097|2,j=!1,be=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Yr(e){if(e!==be)return!1;if(!j)return Ks(e),j=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=Se)){if(_a(e))throw yu(),Error(y(418));for(;t;)_u(e,t),t=vt(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=be?vt(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=Se;e;)e=vt(e.nextSibling)}function _n(){Se=be=null,j=!1}function el(e){Ue===null?Ue=[e]:Ue.push(e)}var $h=at.ReactCurrentBatchConfig;function $n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qs(e){var t=e._init;return t(e._payload)}function vu(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function i(p,u){return p=Ct(p,u),p.index=0,p.sibling=null,p}function o(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,u,f,_){return u===null||u.tag!==6?(u=Vo(f,p.mode,_),u.return=p,u):(u=i(u,f),u.return=p,u)}function s(p,u,f,_){var b=f.type;return b===Xt?m(p,u,f.props.children,_,f.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ut&&Qs(b)===u.type)?(_=i(u,f.props),_.ref=$n(p,u,f),_.return=p,_):(_=ii(f.type,f.key,f.props,null,p.mode,_),_.ref=$n(p,u,f),_.return=p,_)}function d(p,u,f,_){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ro(f,p.mode,_),u.return=p,u):(u=i(u,f.children||[]),u.return=p,u)}function m(p,u,f,_,b){return u===null||u.tag!==7?(u=zt(f,p.mode,_,b),u.return=p,u):(u=i(u,f),u.return=p,u)}function c(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Vo(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mr:return f=ii(u.type,u.key,u.props,null,p.mode,f),f.ref=$n(p,null,u),f.return=p,f;case Gt:return u=Ro(u,p.mode,f),u.return=p,u;case ut:var _=u._init;return c(p,_(u._payload),f)}if(On(u)||An(u))return u=zt(u,p.mode,f,null),u.return=p,u;Hr(p,u)}return null}function h(p,u,f,_){var b=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:l(p,u,""+f,_);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Mr:return f.key===b?s(p,u,f,_):null;case Gt:return f.key===b?d(p,u,f,_):null;case ut:return b=f._init,h(p,u,b(f._payload),_)}if(On(f)||An(f))return b!==null?null:m(p,u,f,_,null);Hr(p,f)}return null}function v(p,u,f,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(f)||null,l(u,p,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Mr:return p=p.get(_.key===null?f:_.key)||null,s(u,p,_,b);case Gt:return p=p.get(_.key===null?f:_.key)||null,d(u,p,_,b);case ut:var T=_._init;return v(p,u,f,T(_._payload),b)}if(On(_)||An(_))return p=p.get(f)||null,m(u,p,_,b,null);Hr(u,_)}return null}function w(p,u,f,_){for(var b=null,T=null,D=u,A=u=0,G=null;D!==null&&A<f.length;A++){D.index>A?(G=D,D=null):G=D.sibling;var P=h(p,D,f[A],_);if(P===null){D===null&&(D=G);break}e&&D&&P.alternate===null&&t(p,D),u=o(P,u,A),T===null?b=P:T.sibling=P,T=P,D=G}if(A===f.length)return n(p,D),j&&Nt(p,A),b;if(D===null){for(;A<f.length;A++)D=c(p,f[A],_),D!==null&&(u=o(D,u,A),T===null?b=D:T.sibling=D,T=D);return j&&Nt(p,A),b}for(D=r(p,D);A<f.length;A++)G=v(D,p,A,f[A],_),G!==null&&(e&&G.alternate!==null&&D.delete(G.key===null?A:G.key),u=o(G,u,A),T===null?b=G:T.sibling=G,T=G);return e&&D.forEach(function(lt){return t(p,lt)}),j&&Nt(p,A),b}function S(p,u,f,_){var b=An(f);if(typeof b!="function")throw Error(y(150));if(f=b.call(f),f==null)throw Error(y(151));for(var T=b=null,D=u,A=u=0,G=null,P=f.next();D!==null&&!P.done;A++,P=f.next()){D.index>A?(G=D,D=null):G=D.sibling;var lt=h(p,D,P.value,_);if(lt===null){D===null&&(D=G);break}e&&D&&lt.alternate===null&&t(p,D),u=o(lt,u,A),T===null?b=lt:T.sibling=lt,T=lt,D=G}if(P.done)return n(p,D),j&&Nt(p,A),b;if(D===null){for(;!P.done;A++,P=f.next())P=c(p,P.value,_),P!==null&&(u=o(P,u,A),T===null?b=P:T.sibling=P,T=P);return j&&Nt(p,A),b}for(D=r(p,D);!P.done;A++,P=f.next())P=v(D,p,A,P.value,_),P!==null&&(e&&P.alternate!==null&&D.delete(P.key===null?A:P.key),u=o(P,u,A),T===null?b=P:T.sibling=P,T=P);return e&&D.forEach(function(jm){return t(p,jm)}),j&&Nt(p,A),b}function L(p,u,f,_){if(typeof f=="object"&&f!==null&&f.type===Xt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Mr:e:{for(var b=f.key,T=u;T!==null;){if(T.key===b){if(b=f.type,b===Xt){if(T.tag===7){n(p,T.sibling),u=i(T,f.props.children),u.return=p,p=u;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ut&&Qs(b)===T.type){n(p,T.sibling),u=i(T,f.props),u.ref=$n(p,T,f),u.return=p,p=u;break e}n(p,T);break}else t(p,T);T=T.sibling}f.type===Xt?(u=zt(f.props.children,p.mode,_,f.key),u.return=p,p=u):(_=ii(f.type,f.key,f.props,null,p.mode,_),_.ref=$n(p,u,f),_.return=p,p=_)}return a(p);case Gt:e:{for(T=f.key;u!==null;){if(u.key===T)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=i(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Ro(f,p.mode,_),u.return=p,p=u}return a(p);case ut:return T=f._init,L(p,u,T(f._payload),_)}if(On(f))return w(p,u,f,_);if(An(f))return S(p,u,f,_);Hr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=i(u,f),u.return=p,p=u):(n(p,u),u=Vo(f,p.mode,_),u.return=p,p=u),a(p)):n(p,u)}return L}var yn=vu(!0),Su=vu(!1),yi=It(null),vi=null,an=null,tl=null;function nl(){tl=an=vi=null}function rl(e){var t=yi.current;B(yi),e._currentValue=t}function va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){vi=e,tl=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(he=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(tl!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(vi===null)throw Error(y(308));an=e,vi.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Pt=null;function il(e){Pt===null?Pt=[e]:Pt.push(e)}function bu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,il(t)):(n.next=i.next,i.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,($&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,it(e,n)}return i=r.interleaved,i===null?(t.next=t,il(r)):(t.next=i.next,i.next=t),r.interleaved=t,it(e,n)}function Jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Si(e,t,n,r){var i=e.updateQueue;ct=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;a=0,m=d=s=null,l=o;do{var h=l.lane,v=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,S=l;switch(h=t,v=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){c=w.call(v,c,h);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(v,c,h):w,h==null)break e;c=Y({},c,h);break e;case 2:ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=v,s=c):m=m.next=v,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(s=c),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);jt|=a,e.lanes=a,e.memoizedState=c}}function Xs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var gr={},We=It(gr),lr=It(gr),sr=It(gr);function Lt(e){if(e===gr)throw Error(y(174));return e}function al(e,t){switch(O(sr,t),O(lr,e),O(We,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zo(t,e)}B(We),O(We,t)}function vn(){B(We),B(lr),B(sr)}function Cu(e){Lt(sr.current);var t=Lt(We.current),n=Zo(t,e.type);t!==n&&(O(lr,e),O(We,n))}function ll(e){lr.current===e&&(B(We),B(lr))}var V=It(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=[];function sl(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Zr=at.ReactCurrentDispatcher,zo=at.ReactCurrentBatchConfig,Bt=0,R=null,K=null,X=null,wi=!1,qn=!1,dr=0,Ph=0;function ie(){throw Error(y(321))}function dl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function ul(e,t,n,r,i,o){if(Bt=o,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Oh:Fh,e=n(r,i),qn){o=0;do{if(qn=!1,dr=0,25<=o)throw Error(y(301));o+=1,X=K=null,t.updateQueue=null,Zr.current=Bh,e=n(r,i)}while(qn)}if(Zr.current=Ci,t=K!==null&&K.next!==null,Bt=0,X=K=R=null,wi=!1,t)throw Error(y(300));return e}function cl(){var e=dr!==0;return dr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?R.memoizedState=X=e:X=X.next=e,X}function Ne(){if(K===null){var e=R.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=X===null?R.memoizedState:X.next;if(t!==null)X=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},X===null?R.memoizedState=X=e:X=X.next=e}return X}function ur(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var m=d.lane;if((Bt&m)===m)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var c={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,R.lanes|=m,jt|=m}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Fe(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,R.lanes|=o,jt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fo(e){var t=Ne(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Fe(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tu(){}function ku(e,t){var n=R,r=Ne(),i=t(),o=!Fe(r.memoizedState,i);if(o&&(r.memoizedState=i,he=!0),r=r.queue,pl(Eu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,cr(9,Iu.bind(null,n,r,i,t),void 0,null),J===null)throw Error(y(349));(Bt&30)!==0||Du(n,t,i)}return i}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t={lastEffect:null,stores:null},R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iu(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&Mu(e)}function Eu(e,t,n){return n(function(){Au(t)&&Mu(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function Mu(e){var t=it(e,1);t!==null&&Oe(t,e,1,-1)}function Js(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=zh.bind(null,R,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=R.updateQueue,t===null?(t={lastEffect:null,stores:null},R.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return Ne().memoizedState}function ei(e,t,n,r){var i=Ye();R.flags|=e,i.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var i=Ne();r=r===void 0?null:r;var o=void 0;if(K!==null){var a=K.memoizedState;if(o=a.destroy,r!==null&&dl(r,a.deps)){i.memoizedState=cr(t,n,o,r);return}}R.flags|=e,i.memoizedState=cr(1|t,n,o,r)}function Zs(e,t){return ei(8390656,8,e,t)}function pl(e,t){return Li(2048,8,e,t)}function xu(e,t){return Li(4,2,e,t)}function $u(e,t){return Li(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lu(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,Pu.bind(null,t,e),n)}function ml(){}function Uu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&dl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ou(e,t,n){return(Bt&21)===0?(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n):(Fe(n,t)||(n=Rd(),R.lanes|=n,jt|=n,e.baseState=!0),t)}function Lh(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=zo.transition;zo.transition={};try{e(!1),t()}finally{U=n,zo.transition=r}}function Fu(){return Ne().memoizedState}function Uh(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))ju(t,n);else if(n=bu(e,t,n,r),n!==null){var i=ce();Oe(n,e,r,i),Vu(n,t,r)}}function zh(e,t,n){var r=wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))ju(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Fe(l,a)){var s=t.interleaved;s===null?(i.next=i,il(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=bu(e,t,i,r),n!==null&&(i=ce(),Oe(n,e,r,i),Vu(n,t,r))}}function Bu(e){var t=e.alternate;return e===R||t!==null&&t===R}function ju(e,t){qn=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}var Ci={readContext:Me,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Oh={readContext:Me,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Zs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,Pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Uh.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:Js,useDebugValue:ml,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=Js(!1),t=e[0];return e=Lh.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=R,i=Ye();if(j){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));(Bt&30)!==0||Du(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Zs(Eu.bind(null,r,o,e),[e]),r.flags|=2048,cr(9,Iu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ye(),t=J.identifierPrefix;if(j){var n=et,r=Ze;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fh={readContext:Me,useCallback:Uu,useContext:Me,useEffect:pl,useImperativeHandle:Lu,useInsertionEffect:xu,useLayoutEffect:$u,useMemo:zu,useReducer:Oo,useRef:Nu,useState:function(){return Oo(ur)},useDebugValue:ml,useDeferredValue:function(e){var t=Ne();return Ou(t,K.memoizedState,e)},useTransition:function(){var e=Oo(ur)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:ku,useId:Fu,unstable_isNewReconciler:!1},Bh={readContext:Me,useCallback:Uu,useContext:Me,useEffect:pl,useImperativeHandle:Lu,useInsertionEffect:xu,useLayoutEffect:$u,useMemo:zu,useReducer:Fo,useRef:Nu,useState:function(){return Fo(ur)},useDebugValue:ml,useDeferredValue:function(e){var t=Ne();return K===null?t.memoizedState=e:Ou(t,K.memoizedState,e)},useTransition:function(){var e=Fo(ur)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Tu,useSyncExternalStore:ku,useId:Fu,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=wt(e),o=tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=St(e,o,i),t!==null&&(Oe(t,e,i,r),Jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=wt(e),o=tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=St(e,o,i),t!==null&&(Oe(t,e,i,r),Jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=wt(e),i=tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,r),t!==null&&(Oe(t,e,r,n),Jr(t,e,r))}};function ed(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(i,o):!0}function Ru(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=_e(t)?Ot:le.current,r=t.contextTypes,o=(r=r!=null)?gn(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function td(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function ba(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ol(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=_e(t)?Ot:le.current,i.context=gn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ui.enqueueReplaceState(i,i.state,null),Si(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=gf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jh=typeof WeakMap=="function"?WeakMap:Map;function Yu(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ki||(ki=!0,xa=r),wa(e,t)},n}function Hu(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wa(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function nd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tg.bind(null,e,t,n),t.then(e,e))}function rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Vh=at.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?Su(t,null,n,r):yn(t,e.child,n,r)}function od(e,t,n,r,i){n=n.render;var o=t.ref;return mn(t,i),r=ul(e,t,n,r,o,i),n=cl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):(j&&n&&Ja(t),t.flags|=1,ue(e,t,r,i),t.child)}function ad(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qu(e,t,o,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(a,r)&&e.ref===t.ref)return ot(e,t,i)}return t.flags|=1,e=Ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function qu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(rr(o,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(he=!0);else return t.lanes=e.lanes,ot(e,t,i)}return Ca(e,t,n,r,i)}function Wu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(sn,ve),ve|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(sn,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,O(sn,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,O(sn,ve),ve|=r;return ue(e,t,i,n),t.child}function Ku(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,n,r,i){var o=_e(n)?Ot:le.current;return o=gn(t,o),mn(t,i),n=ul(e,t,n,r,o,i),r=cl(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):(j&&r&&Ja(t),t.flags|=1,ue(e,t,n,i),t.child)}function ld(e,t,n,r,i){if(_e(n)){var o=!0;hi(t)}else o=!1;if(mn(t,i),t.stateNode===null)ti(e,t),Ru(t,n,r),ba(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=_e(n)?Ot:le.current,d=gn(t,d));var m=n.getDerivedStateFromProps,c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&td(t,a,r,d),ct=!1;var h=t.memoizedState;a.state=h,Si(t,r,a,i),s=t.memoizedState,l!==r||h!==s||ge.current||ct?(typeof m=="function"&&(Sa(t,n,m,r),s=t.memoizedState),(l=ct||ed(t,n,l,r,h,s,d))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Pe(t.type,l),a.props=d,c=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=_e(n)?Ot:le.current,s=gn(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||h!==s)&&td(t,a,r,s),ct=!1,h=t.memoizedState,a.state=h,Si(t,r,a,i);var w=t.memoizedState;l!==c||h!==w||ge.current||ct?(typeof v=="function"&&(Sa(t,n,v,r),w=t.memoizedState),(d=ct||ed(t,n,d,r,h,w,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ta(e,t,n,r,o,i)}function Ta(e,t,n,r,i,o){Ku(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&qs(t,n,!1),ot(e,t,o);r=t.stateNode,Vh.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,l,o)):ue(e,t,l,o),t.memoizedState=r.state,i&&qs(t,n,!0),t.child}function Qu(e){var t=e.stateNode;t.pendingContext?Hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hs(e,t.context,!1),al(e,t.containerInfo)}function sd(e,t,n,r,i){return _n(),el(i),t.flags|=256,ue(e,t,n,r),t.child}var ka={dehydrated:null,treeContext:null,retryLane:0};function Da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gu(e,t,n){var r=t.pendingProps,i=V.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(V,i&1),e===null)return ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fi(a,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Da(n),t.memoizedState=ka,e):fl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Rh(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ct(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ct(l,o):(o=zt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Da(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ka,r}return o=e.child,e=o.sibling,r=Ct(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fl(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qr(e,t,n,r){return r!==null&&el(r),yn(t,e.child,null,n),e=fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rh(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Bo(Error(y(422))),qr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fi({mode:"visible",children:r.children},i,0,null),o=zt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&yn(t,e.child,null,a),t.child.memoizedState=Da(a),t.memoizedState=ka,o);if((t.mode&1)===0)return qr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(y(419)),r=Bo(o,r,void 0),qr(e,t,a,r)}if(l=(a&e.childLanes)!==0,he||l){if(r=J,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,it(e,i),Oe(r,e,i,-1))}return Sl(),r=Bo(Error(y(421))),qr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ng.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Se=vt(i.nextSibling),be=t,j=!0,Ue=null,e!==null&&(De[Ie++]=Ze,De[Ie++]=et,De[Ie++]=Ft,Ze=e.id,et=e.overflow,Ft=t),t=fl(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),va(e.return,t,n)}function jo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=V.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(V,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jo(t,!0,n,null,o);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ti(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=Ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yh(e,t,n){switch(t.tag){case 3:Qu(t),_n();break;case 5:Cu(t);break;case 1:_e(t.type)&&hi(t);break;case 4:al(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(yi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(V,V.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gu(e,t,n):(O(V,V.current&1),e=ot(e,t,n),e!==null?e.sibling:null);O(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Xu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,n)}return ot(e,t,n)}var Ju,Ia,Zu,ec;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};Zu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(We.current);var o=null;switch(n){case"input":i=Qo(e,i),r=Qo(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=Jo(e,i),r=Jo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}ea(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i?.[d],r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&F("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hh(e,t,n){var r=t.pendingProps;switch(Za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return _e(t.type)&&fi(),oe(t),null;case 3:return r=t.stateNode,vn(),B(ge),B(le),sl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ue!==null&&(La(Ue),Ue=null))),Ia(e,t),oe(t),null;case 5:ll(t);var i=Lt(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return oe(t),null}if(e=Lt(We.current),Yr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[ar]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Bn.length;i++)F(Bn[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":_s(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":vs(r,o),F("invalid",r)}ea(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Rr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Rr(r.textContent,l,e),i=["children",""+l]):Gn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":Nr(r),ys(r,o,!0);break;case"textarea":Nr(r),Ss(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ed(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[ar]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(a=ta(n,r),n){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Bn.length;i++)F(Bn[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":_s(e,r),i=Qo(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),F("invalid",e);break;case"textarea":vs(e,r),i=Jo(e,r),F("invalid",e);break;default:i=r}ea(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Nd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ad(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Xn(e,s):typeof s=="number"&&Xn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&F("scroll",e):s!=null&&Oa(e,o,s,a))}switch(n){case"input":Nr(e),ys(e,r,!1);break;case"textarea":Nr(e),Ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Lt(sr.current),Lt(We.current),Yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return oe(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(j&&Se!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yu(),_n(),t.flags|=98560,o=!1;else if(o=Yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[He]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Ue!==null&&(La(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(V.current&1)!==0?Q===0&&(Q=3):Sl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return vn(),Ia(e,t),e===null&&ir(t.stateNode.containerInfo),oe(t),null;case 10:return rl(t.type._context),oe(t),null;case 17:return _e(t.type)&&fi(),oe(t),null;case 19:if(B(V),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Pn(o,!1);else{if(Q!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=bi(e),a!==null){for(t.flags|=128,Pn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>bn&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304)}else{if(!r)if(e=bi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!j)return oe(t),null}else 2*q()-o.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=V.current,O(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return vl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ve&1073741824)!==0&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function qh(e,t){switch(Za(t),t.tag){case 1:return _e(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),B(ge),B(le),sl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ll(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return vn(),null;case 10:return rl(t.type._context),null;case 22:case 23:return vl(),null;case 24:return null;default:return null}}var Wr=!1,ae=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,C=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ea(e,t,n){try{n()}catch(r){H(e,t,r)}}var ud=!1;function Kh(e,t){if(ca=ui,e=ou(),Xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,d=0,m=0,c=e,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=a+i),c!==o||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===e)break t;if(h===n&&++d===i&&(l=a),h===o&&++m===r&&(s=a),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(pa={focusedElem:e,selectionRange:n},ui=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,L=w.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:Pe(t.type,S),L);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(_){H(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=ud,ud=!1,w}function Wn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ea(t,n,o)}i=i.next}while(i!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[ar],delete t[ha],delete t[Mh],delete t[Nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(Ma(e,t,n),e=e.sibling;e!==null;)Ma(e,t,n),e=e.sibling}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}var Z=null,Le=!1;function dt(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:ae||ln(n,t);case 6:var r=Z,i=Le;Z=null,dt(e,t,n),Z=r,Le=i,Z!==null&&(Le?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Le?(e=Z,n=n.stateNode,e.nodeType===8?Po(e.parentNode,n):e.nodeType===1&&Po(e,n),tr(e)):Po(Z,n.stateNode));break;case 4:r=Z,i=Le,Z=n.stateNode.containerInfo,Le=!0,dt(e,t,n),Z=r,Le=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&((o&2)!==0||(o&4)!==0)&&Ea(n,t,a),i=i.next}while(i!==r)}dt(e,t,n);break;case 1:if(!ae&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){H(n,t,l)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,dt(e,t,n),ae=r):dt(e,t,n);break;default:dt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wh),t.forEach(function(r){var i=rg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Z=l.stateNode,Le=!1;break e;case 3:Z=l.stateNode.containerInfo,Le=!0;break e;case 4:Z=l.stateNode.containerInfo,Le=!0;break e}l=l.return}if(Z===null)throw Error(y(160));rc(o,a,i),Z=null,Le=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){H(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ic(t,e),t=t.sibling}function ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Re(e),r&4){try{Wn(3,e,e.return),zi(3,e)}catch(S){H(e,e.return,S)}try{Wn(5,e,e.return)}catch(S){H(e,e.return,S)}}break;case 1:$e(t,e),Re(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if($e(t,e),Re(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var i=e.stateNode;try{Xn(i,"")}catch(S){H(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Dd(i,o),ta(l,a);var d=ta(l,o);for(a=0;a<s.length;a+=2){var m=s[a],c=s[a+1];m==="style"?Nd(i,c):m==="dangerouslySetInnerHTML"?Ad(i,c):m==="children"?Xn(i,c):Oa(i,m,c,d)}switch(l){case"input":Go(i,o);break;case"textarea":Id(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?dn(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?dn(i,!!o.multiple,o.defaultValue,!0):dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ar]=o}catch(S){H(e,e.return,S)}}break;case 6:if($e(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){H(e,e.return,S)}}break;case 3:if($e(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(S){H(e,e.return,S)}break;case 4:$e(t,e),Re(e);break;case 13:$e(t,e),Re(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_l=q())),r&4&&pd(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||m,$e(t,e),ae=d):$e(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(C=e,m=e.child;m!==null;){for(c=C=m;C!==null;){switch(h=C,v=h.child,h.tag){case 0:case 11:case 14:case 15:Wn(4,h,h.return);break;case 1:ln(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){H(r,n,S)}}break;case 5:ln(h,h.return);break;case 22:if(h.memoizedState!==null){fd(c);continue}}v!==null?(v.return=h,C=v):fd(c)}m=m.sibling}e:for(m=null,c=e;;){if(c.tag===5){if(m===null){m=c;try{i=c.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Md("display",a))}catch(S){H(e,e.return,S)}}}else if(c.tag===6){if(m===null)try{c.stateNode.nodeValue=d?"":c.memoizedProps}catch(S){H(e,e.return,S)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;m===c&&(m=null),c=c.return}m===c&&(m=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:$e(t,e),Re(e),r&4&&pd(e);break;case 21:break;default:$e(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xn(i,""),r.flags&=-33);var o=cd(e);Na(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=cd(e);Ma(e,l,a);break;default:throw Error(y(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qh(e,t,n){C=e,oc(e,t,n)}function oc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Wr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||ae;l=Wr;var d=ae;if(Wr=a,(ae=s)&&!d)for(C=i;C!==null;)a=C,s=a.child,a.tag===22&&a.memoizedState!==null?hd(i):s!==null?(s.return=a,C=s):hd(i);for(;o!==null;)C=o,oc(o,t,n),o=o.sibling;C=i,Wr=l,ae=d}md(e,t,n)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,C=o):md(e,t,n)}}function md(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ae||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Xs(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xs(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var c=m.dehydrated;c!==null&&tr(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||t.flags&512&&Aa(t)}catch(h){H(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function fd(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function hd(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){H(t,i,s)}}var o=t.return;try{Aa(t)}catch(s){H(t,o,s)}break;case 5:var a=t.return;try{Aa(t)}catch(s){H(t,a,s)}}}catch(s){H(t,t.return,s)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var Gh=Math.ceil,Ti=at.ReactCurrentDispatcher,hl=at.ReactCurrentOwner,Ae=at.ReactCurrentBatchConfig,$=0,J=null,W=null,ee=0,ve=0,sn=It(0),Q=0,pr=null,jt=0,Oi=0,gl=0,Kn=null,fe=null,_l=0,bn=1/0,Xe=null,ki=!1,xa=null,bt=null,Kr=!1,ht=null,Di=0,Qn=0,$a=null,ni=-1,ri=0;function ce(){return($&6)!==0?q():ni!==-1?ni:ni=q()}function wt(e){return(e.mode&1)===0?1:($&2)!==0&&ee!==0?ee&-ee:$h.transition!==null?(ri===0&&(ri=Rd()),ri):(e=U,e!==0||(e=window.event,e=e===void 0?16:Gd(e.type)),e)}function Oe(e,t,n,r){if(50<Qn)throw Qn=0,$a=null,Error(y(185));mr(e,n,r),(($&2)===0||e!==J)&&(e===J&&(($&2)===0&&(Oi|=n),Q===4&&mt(e,ee)),ye(e,r),n===1&&$===0&&(t.mode&1)===0&&(bn=q()+500,Pi&&Et()))}function ye(e,t){var n=e.callbackNode;Lf(e,t);var r=di(e,e===J?ee:0);if(r===0)n!==null&&Cs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cs(n),t===1)e.tag===0?xh(gd.bind(null,e)):hu(gd.bind(null,e)),Eh(function(){($&6)===0&&Et()}),n=null;else{switch(Yd(r)){case 1:n=Ra;break;case 4:n=jd;break;case 16:n=si;break;case 536870912:n=Vd;break;default:n=si}n=mc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(ni=-1,ri=0,($&6)!==0)throw Error(y(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=di(e,e===J?ee:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ii(e,r);else{t=r;var i=$;$|=2;var o=sc();(J!==e||ee!==t)&&(Xe=null,bn=q()+500,Ut(e,t));do try{Zh();break}catch(l){lc(e,l)}while(!0);nl(),Ti.current=o,$=i,W!==null?t=0:(J=null,ee=0,t=Q)}if(t!==0){if(t===2&&(i=aa(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=pr,Ut(e,0),mt(e,r),ye(e,q()),n;if(t===6)mt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Xh(i)&&(t=Ii(e,r),t===2&&(o=aa(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=pr,Ut(e,0),mt(e,r),ye(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,fe,Xe);break;case 3:if(mt(e,r),(r&130023424)===r&&(t=_l+500-q(),10<t)){if(di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fa(xt.bind(null,e,fe,Xe),t);break}xt(e,fe,Xe);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ze(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gh(r/1960))-r,10<r){e.timeoutHandle=fa(xt.bind(null,e,fe,Xe),r);break}xt(e,fe,Xe);break;case 5:xt(e,fe,Xe);break;default:throw Error(y(329))}}}return ye(e,q()),e.callbackNode===n?ac.bind(null,e):null}function Pa(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=fe,fe=n,t!==null&&La(t)),e}function La(e){fe===null?fe=e:fe.push.apply(fe,e)}function Xh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~gl,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function gd(e){if(($&6)!==0)throw Error(y(327));fn();var t=di(e,0);if((t&1)===0)return ye(e,q()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var r=aa(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=pr,Ut(e,0),mt(e,t),ye(e,q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,fe,Xe),ye(e,q()),null}function yl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(bn=q()+500,Pi&&Et())}}function Vt(e){ht!==null&&ht.tag===0&&($&6)===0&&fn();var t=$;$|=1;var n=Ae.transition,r=U;try{if(Ae.transition=null,U=1,e)return e()}finally{U=r,Ae.transition=n,$=t,($&6)===0&&Et()}}function vl(){ve=sn.current,B(sn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ih(n)),W!==null)for(n=W.return;n!==null;){var r=n;switch(Za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:vn(),B(ge),B(le),sl();break;case 5:ll(r);break;case 4:vn();break;case 13:B(V);break;case 19:B(V);break;case 10:rl(r.type._context);break;case 22:case 23:vl()}n=n.return}if(J=e,W=e=Ct(e.current,null),ee=ve=t,Q=0,pr=null,gl=Oi=jt=0,fe=Kn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Pt=null}return e}function lc(e,t){do{var n=W;try{if(nl(),Zr.current=Ci,wi){for(var r=R.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wi=!1}if(Bt=0,X=K=R=null,qn=!1,dr=0,hl.current=null,n===null||n.return===null){Q=1,pr=t,W=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ee,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,m=l,c=m.tag;if((m.mode&1)===0&&(c===0||c===11||c===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=rd(a);if(v!==null){v.flags&=-257,id(v,a,l,o,t),v.mode&1&&nd(o,d,t),t=v,s=d;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if((t&1)===0){nd(o,d,t),Sl();break e}s=Error(y(426))}}else if(j&&l.mode&1){var L=rd(a);if(L!==null){(L.flags&65536)===0&&(L.flags|=256),id(L,a,l,o,t),el(Sn(s,l));break e}}o=s=Sn(s,l),Q!==4&&(Q=2),Kn===null?Kn=[o]:Kn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Yu(o,s,t);Gs(o,p);break e;case 1:l=s;var u=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(bt===null||!bt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=Hu(o,l,t);Gs(o,_);break e}}o=o.return}while(o!==null)}uc(n)}catch(b){t=b,W===n&&n!==null&&(W=n=n.return);continue}break}while(!0)}function sc(){var e=Ti.current;return Ti.current=Ci,e===null?Ci:e}function Sl(){(Q===0||Q===3||Q===2)&&(Q=4),J===null||(jt&268435455)===0&&(Oi&268435455)===0||mt(J,ee)}function Ii(e,t){var n=$;$|=2;var r=sc();(J!==e||ee!==t)&&(Xe=null,Ut(e,t));do try{Jh();break}catch(i){lc(e,i)}while(!0);if(nl(),$=n,Ti.current=r,W!==null)throw Error(y(261));return J=null,ee=0,Q}function Jh(){for(;W!==null;)dc(W)}function Zh(){for(;W!==null&&!Df();)dc(W)}function dc(e){var t=pc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?uc(e):W=t,hl.current=null}function uc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Hh(n,t,ve),n!==null){W=n;return}}else{if(n=qh(n,t),n!==null){n.flags&=32767,W=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,W=null;return}}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Q===0&&(Q=5)}function xt(e,t,n){var r=U,i=Ae.transition;try{Ae.transition=null,U=1,eg(e,t,n,r)}finally{Ae.transition=i,U=r}return null}function eg(e,t,n,r){do fn();while(ht!==null);if(($&6)!==0)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Uf(e,o),e===J&&(W=J=null,ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Kr||(Kr=!0,mc(si,function(){return fn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ae.transition,Ae.transition=null;var a=U;U=1;var l=$;$|=4,hl.current=null,Kh(e,n),ic(n,e),wh(pa),ui=!!ca,pa=ca=null,e.current=n,Qh(n,e,i),If(),$=l,U=a,Ae.transition=o}else e.current=n;if(Kr&&(Kr=!1,ht=e,Di=i),o=e.pendingLanes,o===0&&(bt=null),Mf(n.stateNode,r),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ki)throw ki=!1,e=xa,xa=null,e;return(Di&1)!==0&&e.tag!==0&&fn(),o=e.pendingLanes,(o&1)!==0?e===$a?Qn++:(Qn=0,$a=e):Qn=0,Et(),null}function fn(){if(ht!==null){var e=Yd(Di),t=Ae.transition,n=U;try{if(Ae.transition=null,U=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,Di=0,($&6)!==0)throw Error(y(331));var i=$;for($|=4,C=e.current;C!==null;){var o=C,a=o.child;if((C.flags&16)!==0){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(C=d;C!==null;){var m=C;switch(m.tag){case 0:case 11:case 15:Wn(8,m,o)}var c=m.child;if(c!==null)c.return=m,C=c;else for(;C!==null;){m=C;var h=m.sibling,v=m.return;if(tc(m),m===d){C=null;break}if(h!==null){h.return=v,C=h;break}C=v}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var L=S.sibling;S.sibling=null,S=L}while(S!==null)}}C=o}}if((o.subtreeFlags&2064)!==0&&a!==null)a.return=o,C=a;else e:for(;C!==null;){if(o=C,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Wn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,C=p;break e}C=o.return}}var u=e.current;for(C=u;C!==null;){a=C;var f=a.child;if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,C=f;else e:for(a=u;C!==null;){if(l=C,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:zi(9,l)}}catch(b){H(l,l.return,b)}if(l===a){C=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,C=_;break e}C=l.return}}if($=i,Et(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Ai,e)}catch{}r=!0}return r}finally{U=n,Ae.transition=t}}return!1}function _d(e,t,n){t=Sn(n,t),t=Yu(e,t,1),e=St(e,t,1),t=ce(),e!==null&&(mr(e,1,t),ye(e,t))}function H(e,t,n){if(e.tag===3)_d(e,e,n);else for(;t!==null;){if(t.tag===3){_d(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Sn(n,e),e=Hu(t,e,1),t=St(t,e,1),e=ce(),t!==null&&(mr(t,1,e),ye(t,e));break}}t=t.return}}function tg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(Q===4||Q===3&&(ee&130023424)===ee&&500>q()-_l?Ut(e,0):gl|=n),ye(e,t)}function cc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pr,Pr<<=1,(Pr&130023424)===0&&(Pr=4194304)));var n=ce();e=it(e,t),e!==null&&(mr(e,t,n),ye(e,n))}function ng(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cc(e,n)}function rg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),cc(e,n)}var pc;pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return he=!1,Yh(e,t,n);he=(e.flags&131072)!==0}else he=!1,j&&(t.flags&1048576)!==0&&gu(t,_i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ti(e,t),e=t.pendingProps;var i=gn(t,le.current);mn(t,n),i=ul(null,t,r,e,i,n);var o=cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ol(t),i.updater=Ui,t.stateNode=i,i._reactInternals=t,ba(t,r,e,n),t=Ta(null,t,r,!0,o,n)):(t.tag=0,j&&o&&Ja(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ti(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=og(r),e=Pe(r,e),i){case 0:t=Ca(null,t,r,e,n);break e;case 1:t=ld(null,t,r,e,n);break e;case 11:t=od(null,t,r,e,n);break e;case 14:t=ad(null,t,r,Pe(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),Ca(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),ld(e,t,r,i,n);case 3:e:{if(Qu(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wu(e,t),Si(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Sn(Error(y(423)),t),t=sd(e,t,r,n,i);break e}else if(r!==i){i=Sn(Error(y(424)),t),t=sd(e,t,r,n,i);break e}else for(Se=vt(t.stateNode.containerInfo.firstChild),be=t,j=!0,Ue=null,n=Su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===i){t=ot(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Cu(t),e===null&&ya(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ma(r,i)?a=null:o!==null&&ma(r,o)&&(t.flags|=32),Ku(e,t),ue(e,t,a,n),t.child;case 6:return e===null&&ya(t),null;case 13:return Gu(e,t,n);case 4:return al(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),od(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,O(yi,r._currentValue),r._currentValue=a,o!==null)if(Fe(o.value,a)){if(o.children===i.children&&!ge.current){t=ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=tt(-1,n&-n),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),va(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(y(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),va(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mn(t,n),i=Me(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Pe(r,t.pendingProps),i=Pe(r.type,i),ad(e,t,r,i,n);case 15:return qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pe(r,i),ti(e,t),t.tag=1,_e(r)?(e=!0,hi(t)):e=!1,mn(t,n),Ru(t,r,i),ba(t,r,i,n),Ta(null,t,r,!0,e,n);case 19:return Xu(e,t,n);case 22:return Wu(e,t,n)}throw Error(y(156,t.tag))};function mc(e,t){return Bd(e,t)}function ig(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new ig(e,t,n,r)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function og(e){if(typeof e=="function")return bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ba)return 11;if(e===ja)return 14}return 2}function Ct(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ii(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")bl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xt:return zt(n.children,i,o,t);case Fa:a=8,i|=8;break;case Ho:return e=Ee(12,n,t,i|2),e.elementType=Ho,e.lanes=o,e;case qo:return e=Ee(13,n,t,i),e.elementType=qo,e.lanes=o,e;case Wo:return e=Ee(19,n,t,i),e.elementType=Wo,e.lanes=o,e;case Cd:return Fi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bd:a=10;break e;case wd:a=9;break e;case Ba:a=11;break e;case ja:a=14;break e;case ut:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Cd,e.lanes=n,e.stateNode={isHidden:!1},e}function Vo(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Ro(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ag(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wl(e,t,n,r,i,o,a,l,s){return e=new ag(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ol(o),e}function lg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fc(e){if(!e)return kt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(_e(n))return fu(e,n,t)}return t}function hc(e,t,n,r,i,o,a,l,s){return e=wl(n,r,!0,e,i,o,a,l,s),e.context=fc(null),n=e.current,r=ce(),i=wt(n),o=tt(r,i),o.callback=t??null,St(n,o,i),e.current.lanes=i,mr(e,i,r),ye(e,r),e}function Bi(e,t,n,r){var i=t.current,o=ce(),a=wt(i);return n=fc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(i,t,a),e!==null&&(Oe(e,i,a,o),Jr(e,i,a)),a}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cl(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function sg(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tl(e){this._internalRoot=e}ji.prototype.render=Tl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Bi(e,t,null,null)};ji.prototype.unmount=Tl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Bi(null,e,null,null)}),t[rt]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Qd(e)}};function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(){}function dg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Ei(a);o.call(d)}}var a=hc(t,r,e,0,null,!1,!1,"",vd);return e._reactRootContainer=a,e[rt]=a.current,ir(e.nodeType===8?e.parentNode:e),Vt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ei(s);l.call(d)}}var s=wl(e,0,!1,null,null,!1,!1,"",vd);return e._reactRootContainer=s,e[rt]=s.current,ir(e.nodeType===8?e.parentNode:e),Vt(function(){Bi(t,s,n,r)}),s}function Ri(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Ei(a);l.call(s)}}Bi(t,a,e,i)}else a=dg(n,t,e,i,r);return Ei(a)}Hd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(Ya(t,n|1),ye(t,q()),($&6)===0&&(bn=q()+500,Et()))}break;case 13:Vt(function(){var r=it(e,1);if(r!==null){var i=ce();Oe(r,e,1,i)}}),Cl(e,1)}};Ha=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ce();Oe(t,e,134217728,n)}Cl(e,134217728)}};qd=function(e){if(e.tag===13){var t=wt(e),n=it(e,t);if(n!==null){var r=ce();Oe(n,e,t,r)}Cl(e,t)}};Wd=function(){return U};Kd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ra=function(e,t,n){switch(t){case"input":if(Go(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$i(r);if(!i)throw Error(y(90));kd(r),Go(r,i)}}}break;case"textarea":Id(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Pd=yl;Ld=Vt;var ug={usingClientEntryPoint:!1,Events:[hr,tn,$i,xd,$d,yl]},Ln={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cg={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Od(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Un=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Un.isDisabled&&Un.supportsFiber))try{Ai=Un.inject(cg),qe=Un}catch{}var Un;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kl(t))throw Error(y(200));return lg(e,t,null,n)};Te.createRoot=function(e,t){if(!kl(e))throw Error(y(299));var n=!1,r="",i=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wl(e,1,!1,null,null,n,!1,r,i),e[rt]=t.current,ir(e.nodeType===8?e.parentNode:e),new Tl(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Od(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Vt(e)};Te.hydrate=function(e,t,n){if(!Vi(t))throw Error(y(200));return Ri(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!kl(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=gc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=hc(t,null,e,1,n??null,i,!1,o,a),e[rt]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ji(t)};Te.render=function(e,t,n){if(!Vi(t))throw Error(y(200));return Ri(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Vi(e))throw Error(y(40));return e._reactRootContainer?(Vt(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Te.unstable_batchedUpdates=yl;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vi(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ri(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426"});var Dl=At((kg,vc)=>{"use strict";function yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc)}catch(e){console.error(e)}}yc(),vc.exports=_c()});var bc=At(Il=>{"use strict";var Sc=Dl();Il.createRoot=Sc.createRoot,Il.hydrateRoot=Sc.hydrateRoot;var Dg});var ao=Be(je()),Fl=Be(Dl()),Bl=Be(bc());var k={primary:"primary",secondary:"secondary",direct:"direct",defaults:"defaults"},se={basic:"basic",templates:"templates"},Yi=["children","children_error","custom"],_r=["all","string","int","time","date","command"];var Ke=[{type:"default_main",title:"Default Main",supportsLlm:!0,hasModal:!0},{type:"not_understand",title:"Not Understand",supportsLlm:!1,hasModal:!0},{type:"finish_miss",title:"Finish Miss",supportsLlm:!1,hasModal:!1},{type:"default_search",title:"Default Search",supportsLlm:!0,hasModal:!0}];var g=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),Qe=()=>{let e=Date.now(),t=String(e).slice(-5);if(globalThis.crypto?.randomUUID){let n=globalThis.crypto.randomUUID().replaceAll("-","").slice(0,8);return`${t}_${e}_${n}`}return`${t}_${e}_${Math.random().toString(16).slice(2,10)}`},El=(e={})=>{let t=!!e.llm||!!String(e.system??"").trim()||!!String(e.model??"").trim();return{id:Qe(),type:String(e.type??e.actionType??""),voiceResponse:String(e.voiceResponse??""),llmEnabled:t,system:String(e.system??""),model:String(e.model??"")}},Al=(e={})=>({id:Qe(),uuid:String(e.uuid??""),displayValue:String(e.displayValue??""),mappingType:String(e.mappingType??e.mapping_type??e.actionType??e.action_type??e.type??"")}),Ml=(e={})=>({id:Qe(),actionTypeComponent:String(e.actionTypeComponent??(String(e.actionType??e.mappingType??"").trim()?"custom":"children")),actionType:String(e.actionType??e.action_type??e.mappingType??e.mapping_type??""),mappingType:String(e.mappingType??e.mapping_type??e.actionType??e.action_type??""),uuid:String(e.uuid??""),displayValue:String(e.displayValue??"")}),vr=(e={})=>({id:Qe(),subType:String(e.subType??e.subMappingType??""),subVoiceCommands:String(e.subVoiceCommands??"")}),yr=e=>(Array.isArray(e)?e:[]).filter(t=>t&&typeof t=="object"),Hi=e=>Ke.find(t=>t.type===e)??Ke[0],wc=(e=null)=>{let t=e??{},n=typeof t.componentDialog=="object"&&t.componentDialog?t.componentDialog:typeof t.subComponentDialog=="object"&&t.subComponentDialog?t.subComponentDialog:{};return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDialog??""),type:String(n.actionType??""),endStatus:!!n.endStatus,forwardText:!!n.forwardText,answerType:String(n.answerType??"default"),voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),responseItems:yr(n.voiceResponseArray).map(r=>El(r)),directControlItems:yr(n.nextDirectControl).map(r=>Al(r)),nextActionItems:yr(n.nextAction).map(r=>Ml(r))}},Cc=(e=null)=>{let t=e??{},n=typeof t.directControl=="object"&&t.directControl?t.directControl:{},r=!!n.manual,i=n.subDirectControl;return{title:String(t.title??""),uuid:String(t.uuid??t.uuidDirect??""),type:String(n.mappingType??n.actionType??""),typeData:_r.includes(String(n.valueType??n.typeData??"all"))?String(n.valueType??n.typeData??"all"):"all",voiceCommands:Array.isArray(n.voiceCommands)?n.voiceCommands.join("; "):String(n.voiceCommands??""),manual:r,subDirectControlItems:r?yr(i).map(o=>vr(o)):[],subDirectControl:r?"":String((typeof i=="string"?i:"")||n.subDirectControlArray||"")}},Tc=(e=null)=>{let t=e??{};return{title:String(t.title??""),uuid:String(t.uuid??""),subDirectControlItems:yr(t.subDirectControl).map(n=>vr(n))}},Nl=(e,t=null)=>{let n=t??{},r=Hi(e);return{_id:String(n._id??""),type:r.type,title:String(n.title??r.title),endStatus:!!n.endStatus,llmEnabled:r.supportsLlm?!!(n.llmEnabled??n.LLM??n.llm):!1,message:String(n.message??""),system:r.supportsLlm?String(n.system??""):"",model:r.supportsLlm?String(n.model??""):""}},kc=()=>Ke.reduce((e,t)=>(e[t.type]=Nl(t.type),e),{}),qi=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??"").trim(),o=String(e.answerType??"default").trim().toLowerCase()==="redis"?"redis":"default";if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let l=(Array.isArray(e.responseItems)?e.responseItems:[]).map(c=>{let h={actionType:String(c.type??c.actionType??"").trim(),voiceResponse:String(c.voiceResponse??"").trim()};return c.llmEnabled&&(h.llm=!0,h.system=String(c.system??"").trim(),h.model=String(c.model??"").trim()),h}),s=(Array.isArray(e.directControlItems)?e.directControlItems:[]).map(c=>({uuid:String(c.uuid??"").trim()})).filter(c=>c.uuid),d=(Array.isArray(e.nextActionItems)?e.nextActionItems:[]).map(c=>({actionTypeComponent:Yi.includes(String(c.actionTypeComponent??"").trim())?String(c.actionTypeComponent??"").trim():"children",actionType:String(c.actionType??c.mappingType??"").trim(),uuid:String(c.uuid??"").trim()})).filter(c=>c.uuid).map(c=>c.actionTypeComponent==="custom"?c:{...c,actionType:""}),m={endStatus:!!e.endStatus,actionType:r,forwardText:!!e.forwardText,answerType:o,voiceCommands:String(e.voiceCommands??"").split(";").map(c=>c.trim()).filter(c=>c),nextDirectControl:s,voiceResponseArray:l,nextAction:d};return{title:t,uuid:n,componentDialog:m,subComponentDialog:m}},Wi=(e={})=>{let t=String(e.title??"").trim(),n=String(e.uuid??"").trim(),r=String(e.type??e.mappingType??"").trim(),i=_r.includes(String(e.typeData??"all"))?String(e.typeData??"all"):"all",o=!!e.manual;if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");if(!r)throw new Error("actionType - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let a={title:t,uuid:n,directControl:{mappingType:r,valueType:i}};if(i==="command"){let l=String(e.voiceCommands??"").trim();a.directControl.voiceCommands=l?l.split(";").map(s=>s.trim()).filter(s=>s):null,a.directControl.manual=o,o?a.directControl.subDirectControl=(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((s,d)=>{let m=String(s.subType??s.subMappingType??"").trim(),c=String(s.subVoiceCommands??"").trim();return{id:Number(s.id)||d+1,subMappingType:m||null,title:null,subVoiceCommands:c||null}}).filter(s=>s.subMappingType||s.subVoiceCommands):a.directControl.subDirectControl=String(e.subDirectControl??"").trim()}return a},Dc=(e={})=>{let t=String(e.title??"").trim();if(!t)throw new Error("Title - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");let n=String(e.uuid??"").trim();if(n||(n=Qe()),!n)throw new Error("uuid - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");return{title:t,uuid:n,subDirectControl:(Array.isArray(e.subDirectControlItems)?e.subDirectControlItems:[]).map((r,i)=>{let o=String(r.subType??r.subMappingType??"").trim(),a=String(r.subVoiceCommands??"").trim();return{id:Number(r.id)||i+1,subMappingType:o||null,title:null,subVoiceCommands:a||null}}).filter(r=>r.subMappingType||r.subVoiceCommands)}},Ic=(e,t={})=>{let n=Hi(e),r={actionType:n.type,title:String(t.title??n.title).trim()||n.title,endStatus:!!t.endStatus,message:String(t.message??"").trim()||null};return n.supportsLlm&&(r.LLM=!!t.llmEnabled,r.llm=r.LLM,r.system=r.LLM&&String(t.system??"").trim()||null,r.model=r.LLM&&String(t.model??"").trim()||null),r};var Ht=(e,t)=>{let n=t===k.secondary,r=e._pageByTab[t]||1,i=e._totalByTab[t]||0,o=e._totalPagesByTab[t]||1,a=n?"\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B":"\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",l="/api/cms/commands?page=1&pageSize=20",s=Math.max(1,o||Math.ceil((i||1)/20)),d=e._buildPaginationItems(r,s),m=e._loading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._commands.length?e._commands.map(c=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit" data-command-id="${g(c._id)}">
              <span class="command-item-title">${g(c.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${g(c.componentDialog?.actionType||c.subComponentDialog?.actionType||c.componentDialog?.type||c.subComponentDialog?.type||"actionType: -")}</span>
                <span>${g(c.uuid||c.uuidDialog||"uuid: -")}</span>
                <span>${c.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="command"
              data-item-id="${g(c._id)}"
              data-item-title="${g(c.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
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
  `};var Ki=e=>Ht(e,k.primary);var Qi=e=>Ht(e,k.secondary);var Gi=(e,t)=>`
  <section class="hero-card">
    <h3>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</h3>
    <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C\u0438.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-direct" ${e._directLoading?"disabled":""}>${e._directLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      <button type="button" class="primary" data-action="create-direct">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
    </div>
    ${e._directError?`<div class="status error">${g(e._directError)}</div>`:""}
  </section>
  <section class="help-card command-list">
    ${t}
  </section>
`,Xi=(e,t)=>`
  <section class="hero-card">
    <h3>\u0428\u0430\u0431\u043B\u043E\u043D\u044B</h3>
    <p>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u0430\u043C\u0438 subDirectControl.</p>
    <div class="toolbar">
      <button type="button" class="secondary" data-action="reload-template" ${e._templateLoading?"disabled":""}>${e._templateLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      <button type="button" class="primary" data-action="create-template">+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C</button>
    </div>
    ${e._templateError?`<div class="status error">${g(e._templateError)}</div>`:""}
  </section>
  <section class="help-card command-list">
    ${t}
  </section>
`,Ji=e=>{let t=e._directLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434...</div>':e._directCommands.length?e._directCommands.map(r=>`
          <div class="command-item">
            <button type="button" class="command-item-main" data-action="edit-direct" data-direct-id="${g(r._id)}">
              <span class="command-item-title">${g(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
              <span class="command-item-meta">
                <span>${g(r.directControl?.mappingType||r.directControl?.actionType||r.directControl?.type||"actionType: -")}</span>
                <span>${g(r.uuid||r.uuidDirect||"uuid: -")}</span>
                <span>${g(r.directControl?.valueType||r.directControl?.typeData||"typeData: -")}</span>
                <span>${r.status?"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u043A\u0440\u044B\u0442"}</span>
              </span>
            </button>
            <button
              type="button"
              class="ghost command-item-menu-button"
              data-action="open-item-actions"
              data-item-kind="direct"
              data-item-id="${g(r._id)}"
              data-item-title="${g(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}"
              data-item-status="${r.status?"true":"false"}"
              aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
              title="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
            >...</button>
          </div>
        `).join(""):'<div class="empty">Direct-\u043A\u043E\u043C\u0430\u043D\u0434 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>',n=e._templateLoading?'<div class="empty">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432...</div>':e._templateCommands.length?e._templateCommands.map(r=>`
          <button type="button" class="command-item-main" data-action="edit-template" data-template-id="${g(r._id)}">
            <span class="command-item-title">${g(r.title||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F")}</span>
            <span class="command-item-meta">
              <span>subDirectControl: ${Array.isArray(r.subDirectControl)?r.subDirectControl.length:0}</span>
            </span>
          </button>
        `).join(""):'<div class="empty">\u0428\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442.</div>';return`
    <section class="hero-card">
      <h2>\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</h2>
      <div class="inner-subtabs">
        <button type="button" class="subtab-button ${e._directSubtab===se.basic?"active":""}" data-direct-subtab="${se.basic}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435</button>
        <button type="button" class="subtab-button ${e._directSubtab===se.templates?"active":""}" data-direct-subtab="${se.templates}">\u0428\u0430\u0431\u043B\u043E\u043D\u044B</button>
      </div>
    </section>
    ${e._directSubtab===se.basic?Gi(e,t):Xi(e,n)}
  `};var Zi=e=>{let t=Ke.map((n,r)=>{let i=e._defaultsByType[n.type]??e._newDefaultsDraft(n.type),o=String(i.title||n.title||n.type).trim(),a=[`actionType: ${n.type}`,`endStatus: ${i.endStatus?"on":"off"}`];return n.supportsLlm&&a.push(`LLM: ${i.llmEnabled?"on":"off"}`),`
      <button type="button" class="command-item-main" data-action="open-defaults-item" data-default-type="${g(n.type)}" ${e._defaultsLoading?"disabled":""}>
        <span class="command-item-title">${r+1}. ${g(o)}</span>
        <span class="command-item-meta">
          ${a.map(l=>`<span>${g(l)}</span>`).join("")}
        </span>
      </button>
    `}).join("");return`
    <section class="hero-card">
      <h2>\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</h2>
      <p>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u0440\u0435\u0430\u043A\u0446\u0438\u0438, \u0435\u0441\u043B\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p>
      <div class="toolbar">
        <button type="button" class="secondary" data-action="reload-defaults" ${e._defaultsLoading?"disabled":""}>${e._defaultsLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"}</button>
      </div>
      ${e._defaultsError?`<div class="status error">${g(e._defaultsError)}</div>`:""}
    </section>
    <section class="help-card command-list">
      ${t}
    </section>
  `};var xl=(e,t)=>`
  <section class="hero-card">
    <h2>${g(e)}</h2>
    <p>${g(t)}</p>
  </section>
  <section class="help-card">
    <div class="empty">\u0420\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D.</div>
  </section>
`;var Ec=e=>e._tab===k.primary?Ki(e):e._tab===k.secondary?Qi(e):e._tab===k.direct?Ji(e):Zi(e);var Ac=e=>{e._addModalBackdrop(),e._modalOpen=!0,e._modalMode="create",e._editingId="",e._draft=e._newDraft(),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render()},Mc=(e,t)=>{e._addModalBackdrop();let n=e._commands.find(r=>String(r._id??"")===String(t??""));if(!n){e._error="\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._modalOpen=!0,e._modalMode="edit",e._editingId=String(n._id??""),e._editingStatus=!!n.status,e._draft=e._newDraft(n),e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._error="",e._render(),e._hydrateDirectControlTitles(),e._hydrateNextActionTitles()},Nc=e=>{e._modalSaving||(e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,(e._modalMode!=="create"||e._editingId||e._draft?.title||e._draft?.message)&&(e._draft=e._newDraft()),e._render())},xc=async e=>{let t=e.shadowRoot?.activeElement;if(t instanceof HTMLElement&&typeof t.blur=="function"&&t.blur(),!e._apiUrl("")){e._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let r;try{r=e._buildPayload()}catch(s){e._error=s?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438.",e._render();return}let i=e._modalMode==="edit"&&e._editingId;!i&&!e._isCurrentUserAdmin()&&(r.account=e._getCurrentUserId());let o=e._tab===k.secondary?"sub-commands":"commands",a=i?e._apiUrl(`/api/cms/${o}/${encodeURIComponent(e._editingId)}`):e._apiUrl(`/api/cms/${o}`),l=i?"PUT":"POST";e._modalSaving=!0,e._error="",e._render();try{let s=await fetch(a,{method:l,headers:e._apiHeaders(!0),body:JSON.stringify(r)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F: HTTP ${s.status}`);e._status=i?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft(),await e._loadPage(e._pageByTab[e._tab]||1)}catch(s){e._error=s?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439.",e._render()}finally{e._modalSaving=!1,e._render()}},$c=async e=>{if(!e._editingId||!confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439?"))return;let t=e._tab===k.secondary?"sub-commands":"commands";e._modalSaving=!0,e._error="",e._render();try{await e._deleteItem(t,e._editingId),e._commands=e._commands.filter(n=>String(n._id??"")!==String(e._editingId)),e._status="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._modalOpen=!1,e._modalMode="create",e._editingId="",e._editingStatus=!1,e._draft=e._newDraft()}catch(n){e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439."}finally{e._modalSaving=!1,e._render()}};var Pc=e=>{e._updateDraft("uuid",Qe()),e._render()},Lc=e=>{let t=Array.isArray(e._draft.responseItems)?e._draft.responseItems:[],n=El();e._draft={...e._draft,responseItems:[...t,n]},e._openResponseItemIds.add(n.id),e._render()},Uc=(e,t)=>{let n=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,responseItems:n},e._openResponseItemIds=new Set([...e._openResponseItemIds].filter(r=>e._draft.responseItems.some(i=>i.id===r))),e._render()},zc=(e,t,n,r)=>{let i=(Array.isArray(e._draft.responseItems)?e._draft.responseItems:[]).map(o=>o.id!==t?o:{...o,[n]:r});e._draft={...e._draft,responseItems:i}},Oc=(e,t)=>{e._openResponseItemIds.has(t)?e._openResponseItemIds.delete(t):e._openResponseItemIds.add(t),e._render()},Fc=e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[],n=Al();e._draft={...e._draft,directControlItems:[...t,n]},e._openDirectControlItemIds.add(n.id),e._render()},Bc=(e,t)=>{let n=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,directControlItems:n},e._openDirectControlItemIds=new Set([...e._openDirectControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},jc=(e,t,n,r=!0)=>{let i=String(t??"").trim(),o=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(a=>{if(a.id!==i)return a;let l=e._lastSelectedDirectControlUuid;if(l&&l.itemId===i&&Date.now()-Number(l.at??0)<1e3&&String(n??"").trim()!==String(l.uuid??"").trim())return a;let s=String(n??""),d=s.trim(),m=String(a.uuid??"").trim();return{...a,uuid:s,displayValue:d&&d===m?a.displayValue:"",mappingType:d&&d===m?a.mappingType:""}});e._draft={...e._draft,directControlItems:o},r&&n.length>0&&e._debouncedPerformUuidSearch(n,"directControl",i),e._lastSelectedDirectControlUuid?.itemId===i&&(e._lastSelectedDirectControlUuid=null)},Vc=(e,t)=>{e._openDirectControlItemIds.has(t)?e._openDirectControlItemIds.delete(t):e._openDirectControlItemIds.add(t),e._render()},Rc=e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[],n=Ml();e._draft={...e._draft,nextActionItems:[...t,n]},e._openNextActionItemIds.add(n.id),e._render()},Yc=(e,t)=>{let n=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).filter(r=>r.id!==t);e._draft={...e._draft,nextActionItems:n},e._openNextActionItemIds=new Set([...e._openNextActionItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},Hc=(e,t,n,r,i=!0,o=!0)=>{let a=String(t??"").trim(),l=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(s=>{if(s.id!==a)return s;if(n==="uuid"){let d=e._lastSelectedNextActionUuid;if(d&&d.itemId===a&&Date.now()-Number(d.at??0)<1e3&&String(r??"").trim()!==String(d.uuid??"").trim())return s;let m=String(r??""),c=m.trim(),h=String(s.uuid??"").trim();return{...s,uuid:m,displayValue:c&&c===h?s.displayValue:"",mappingType:c&&c===h?s.mappingType:"",actionType:c&&c===h?s.actionType:""}}if(n==="actionTypeComponent"){let d=String(r??"").trim();return d==="custom"?{...s,actionTypeComponent:d}:{...s,actionTypeComponent:d,actionType:""}}return{...s,[n]:r}});e._draft={...e._draft,nextActionItems:l},(i||n==="actionTypeComponent")&&e._render(),o&&n==="uuid"&&r.length>0&&e._debouncedPerformUuidSearch(r,"nextAction",a),n==="uuid"&&e._lastSelectedNextActionUuid?.itemId===a&&(e._lastSelectedNextActionUuid=null)},qc=(e,t)=>{e._openNextActionItemIds.has(t)?e._openNextActionItemIds.delete(t):e._openNextActionItemIds.add(t),e._render()};var Wc=(e,{kind:t,id:n,title:r,collection:i,status:o})=>{n&&(e._addModalBackdrop(),e._itemActionsModalOpen=!0,e._itemActionsSaving=!1,e._itemActionsKind=String(t??""),e._itemActionsId=String(n??""),e._itemActionsTitle=String(r??"").trim(),e._itemActionsCollection=String(i??""),e._itemActionsStatus=!!o,e._render())},Kc=e=>{e._itemActionsSaving||(e._removeModalBackdrop(),e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsKind="",e._itemActionsId="",e._itemActionsTitle="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._render())},Qc=async(e,t,n,r)=>{let i=e._commands.find(d=>String(d._id??"")===String(t??""));if(!i)throw new Error("\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let o=e._newDraft(i),a=qi(o);n==="sub-commands"?delete a.componentDialog:delete a.subComponentDialog,a.status=!!r;let l=e._apiUrl(`/api/cms/${encodeURIComponent(n)}/${encodeURIComponent(t)}`),s=await fetch(l,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(a)});if(!s.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430: HTTP ${s.status}`);e._commands=e._commands.map(d=>String(d._id??"")===String(t??"")?{...d,status:!!r}:d),String(e._editingId??"")===String(t??"")&&(e._editingStatus=!!r)},Gc=async(e,t,n)=>{let r=e._directCommands.find(s=>String(s._id??"")===String(t??""));if(!r)throw new Error("Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");let i=e._newDirectDraft(r),o={...Wi(i),status:!!n},a=e._apiUrl(`/api/cms/sub-direct-controls/${encodeURIComponent(t)}`),l=await fetch(a,{method:"PUT",headers:e._apiHeaders(!0),body:JSON.stringify(o)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);e._directCommands=e._directCommands.map(s=>String(s._id??"")===String(t??"")?{...s,status:!!n}:s),String(e._directEditingId??"")===String(t??"")&&(e._directEditingStatus=!!n)},Xc=async e=>{if(e._itemActionsSaving||!e._itemActionsId)return;let t=!e._itemActionsStatus;e._itemActionsSaving=!0,e._error="",e._directError="",e._render();try{if(e._itemActionsKind==="command")await e._updateCommandStatusById(e._itemActionsId,e._itemActionsCollection||"commands",t);else if(e._itemActionsKind==="direct")await e._updateDirectStatusById(e._itemActionsId,t);else throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.");e._itemActionsStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442.",e._itemActionsSaving=!1,e._closeItemActionsModal()}catch(n){e._itemActionsKind==="direct"?e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.":e._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F.",e._itemActionsSaving=!1,e._render()}},Jc=async e=>{if(!(e._modalSaving||!e._editingId)){e._modalSaving=!0,e._error="",e._render();try{let t=!e._editingStatus,n=e._tab===k.secondary?"sub-commands":"commands";await e._updateCommandStatusById(e._editingId,n,t),e._editingStatus=t,e._status=t?"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.":"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043A\u0440\u044B\u0442."}catch(t){e._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F."}finally{e._modalSaving=!1,e._render()}}};var Zc=(e,t)=>{e._directSubtab=t,e._directError="",t===se.basic&&!e._directCommands.length&&!e._directLoading?e._loadDirectCommands():t===se.templates&&!e._templateCommands.length&&!e._templateLoading&&e._loadTemplateCommands(),e._render()},ep=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls?page=1&pageSize="+20);if(!t){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._directLoading=!0,e._directError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];e._directCommands=i,e._status=`Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){e._directCommands=[],e._directError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directLoading=!1,e._render()}},tp=async e=>{let t=e._apiUrl("/api/cms/sub-direct-controls-sample?page=1&pageSize="+20);if(!t){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._templateLoading=!0,e._templateError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r.data)?r.data:[];e._templateCommands=i,e._status=`\u0428\u0430\u0431\u043B\u043E\u043D\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${i.length}.`}catch(n){e._templateCommands=[],e._templateError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u044B."}finally{e._templateLoading=!1,e._render()}},np=e=>{e._directLoading||(e._directCommands=[],e._loadDirectCommands())},rp=e=>{e._templateLoading||(e._templateCommands=[],e._loadTemplateCommands())},ip=e=>{e._addModalBackdrop(),e._directModalOpen=!0,e._directModalMode="create",e._directEditingId="",e._directDraft=e._newDirectDraft(),e._openDirectSubControlItemIds=new Set,e._directError="",e._render()},op=(e,t)=>{e._addModalBackdrop();let n=e._directCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._directError="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.",e._render();return}e._directModalOpen=!0,e._directModalMode="edit",e._directEditingId=String(n._id??""),e._directEditingStatus=!!n.status,e._directDraft=e._newDirectDraft(n),e._openDirectSubControlItemIds=new Set,e._directError="",e._render(),e._hydrateSelectedSubDirectControlSample()},ap=e=>{e._directModalSaving||(e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._subDirectControlSampleOptions=[],e._render())},lp=(e,t,n)=>{e._directDraft={...e._directDraft,[t]:n}},sp=async e=>{let t=e._directDraft.typeData==="command",n=!!e._directDraft.manual,r=String(e._directDraft.subDirectControl??"").trim();if(!t||n||!r||(Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]).some(s=>String(s?.uuid??"").trim()===r))return;let a=(await e._searchUuid(r,["sub-direct-controls-sample"])).find(s=>String(s?.uuid??"").trim()===r);if(!a)return;let l={...a,uuid:String(a.uuid??"").trim(),title:String(a.title??"").trim()};e._subDirectControlSampleOptions=[l,...Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[]],e._render()},dp=e=>{e._updateDirectDraft("uuid",Qe()),e._render()},up=e=>{e._updateTemplateDraft("uuid",Qe()),e._render()},cp=e=>{let t=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],n=vr();e._directDraft={...e._directDraft,subDirectControlItems:[...t,n]},e._openDirectSubControlItemIds.add(n.id),e._render()},pp=(e,t)=>{let n=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._directDraft={...e._directDraft,subDirectControlItems:n},e._openDirectSubControlItemIds=new Set([...e._openDirectSubControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},mp=(e,t)=>{e._openDirectSubControlItemIds.has(t)?e._openDirectSubControlItemIds.delete(t):e._openDirectSubControlItemIds.add(t),e._render()},fp=(e,t,n,r)=>{let i=(Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);e._directDraft={...e._directDraft,subDirectControlItems:i}},hp=async e=>{if(!e._searchLoading){e._searchLoading=!0,e._searchActiveType="subDirectControlSample",e._searchActiveItemId=null,e._render();try{let t=await e._searchUuid("",["sub-direct-controls-sample"]);e._subDirectControlSampleOptions=t}catch{e._subDirectControlSampleOptions=[]}finally{e._searchLoading=!1,e._render()}}},gp=async e=>{if(!(e._directModalSaving||!e._directEditingId)){e._directModalSaving=!0,e._directError="",e._render();try{let t=!e._directEditingStatus;await e._updateDirectStatusById(e._directEditingId,t),e._directEditingStatus=t,e._status=t?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043A\u0440\u044B\u0442\u0430."}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._directModalSaving=!1,e._render()}}},_p=async e=>{if(!e._apiUrl("")){e._directError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildDirectPayload()}catch(r){e._directError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._directModalSaving=!0,e._directError="",e._render();try{let r=e._directModalMode==="edit"&&e._directEditingId,i="sub-direct-controls",o=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._directEditingId)}`):e._apiUrl(`/api/cms/${i}`),l=await fetch(o,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F direct-\u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._directCommands=e._directCommands.map(m=>String(m._id??"")===String(e._directEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._directEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??n.uuidDirect??Date.now());e._directCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._directCommands]}await e._loadDirectCommands(),e._status=r?"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(r){e._directError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}},yp=async e=>{if(e._directEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443?")){e._directModalSaving=!0,e._directError="",e._render();try{await e._deleteItem("sub-direct-controls",e._directEditingId),e._directCommands=e._directCommands.filter(t=>String(t._id??"")!==String(e._directEditingId)),e._status="Direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.",e._removeModalBackdrop(),e._directModalOpen=!1,e._directModalMode="create",e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft()}catch(t){e._directError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._directModalSaving=!1,e._render()}}},vp=e=>{e._addModalBackdrop(),e._templateModalOpen=!0,e._templateModalMode="create",e._templateEditingId="",e._templateDraft=e._newTemplateDraft(),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},Sp=(e,t)=>{e._addModalBackdrop();let n=e._templateCommands.find(r=>String(r._id??"")===String(t??""));if(!n){e._templateError="\u0428\u0430\u0431\u043B\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.",e._render();return}e._templateModalOpen=!0,e._templateModalMode="edit",e._templateEditingId=String(n._id??""),e._templateDraft=e._newTemplateDraft(n),e._openTemplateSubControlItemIds=new Set,e._templateError="",e._render()},bp=e=>{e._templateModalSaving||(e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._render())},wp=(e,t,n)=>{e._templateDraft={...e._templateDraft,[t]:n}},Cp=e=>{let t=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[],n=vr();e._templateDraft={...e._templateDraft,subDirectControlItems:[...t,n]},e._openTemplateSubControlItemIds.add(n.id),e._render()},Tp=(e,t)=>{let n=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).filter(r=>r.id!==t);e._templateDraft={...e._templateDraft,subDirectControlItems:n},e._openTemplateSubControlItemIds=new Set([...e._openTemplateSubControlItemIds].filter(r=>n.some(i=>i.id===r))),e._render()},kp=(e,t)=>{e._openTemplateSubControlItemIds.has(t)?e._openTemplateSubControlItemIds.delete(t):e._openTemplateSubControlItemIds.add(t),e._render()},Dp=(e,t,n,r)=>{let i=(Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[]).map(o=>o.id===t?{...o,[n]:r}:o);e._templateDraft={...e._templateDraft,subDirectControlItems:i}},Ip=async e=>{if(!e._apiUrl("")){e._templateError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let n;try{n=e._buildTemplatePayload()}catch(r){e._templateError=r?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0430.",e._render();return}e._templateModalSaving=!0,e._templateError="",e._render();try{let r=e._templateModalMode==="edit"&&e._templateEditingId,i="sub-direct-controls-sample",o=r?e._apiUrl(`/api/cms/${i}/${encodeURIComponent(e._templateEditingId)}`):e._apiUrl(`/api/cms/${i}`),l=await fetch(o,{method:r?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(n)});if(!l.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430: HTTP ${l.status}`);let s=await l.json().catch(()=>null),d=s?.data&&typeof s.data=="object"?s.data:s&&typeof s=="object"?s:null;if(r)e._templateCommands=e._templateCommands.map(m=>String(m._id??"")===String(e._templateEditingId)?{...m,...d&&typeof d=="object"?d:n,_id:e._templateEditingId}:m);else{let m=String(d?._id??d?.id??n.uuid??Date.now());e._templateCommands=[{...d&&typeof d=="object"?d:n,_id:m},...e._templateCommands]}await e._loadTemplateCommands(),e._status=r?"\u0428\u0430\u0431\u043B\u043E\u043D \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.":"\u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0437\u0434\u0430\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(r){e._templateError=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}},Ep=async e=>{if(e._templateEditingId&&confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D?")){e._templateModalSaving=!0,e._templateError="",e._render();try{await e._deleteItem("sub-direct-controls-sample",e._templateEditingId),e._templateCommands=e._templateCommands.filter(t=>String(t._id??"")!==String(e._templateEditingId)),e._status="\u0428\u0430\u0431\u043B\u043E\u043D \u0443\u0434\u0430\u043B\u0435\u043D.",e._removeModalBackdrop(),e._templateModalOpen=!1,e._templateModalMode="create",e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft()}catch(t){e._templateError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D."}finally{e._templateModalSaving=!1,e._render()}}};var $l=e=>String(e?.title??e?.name??"").trim(),Pl=e=>String(e?.mappingType??e?.mapping_type??e?.actionType??e?.action_type??e?.type??"").trim(),Ap=async(e,t,n,r=null)=>{let i=n==="directControl"||n==="nextAction";if(!t||t.length===0){e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,i&&typeof e._clearSearchDropdown=="function"?e._clearSearchDropdown():e._render();return}e._searchActiveItemId=r,e._searchActiveType=n,e._searchLoading=!0;try{let o=[];n==="directControl"?o=["sub-direct-controls"]:n==="nextAction"?o=["sub-commands","commands"]:n==="subDirectControlSample"&&(o=["sub-direct-controls-sample"]);let a=await e._searchUuid(t,o);if(e._searchResults=a,n==="directControl"&&r){let s=String(t??"").trim().toLowerCase(),d=a.find(m=>String(m?.uuid??"").trim().toLowerCase()===s)||(a.length===1?a[0]:null);if(d&&(d?.title||d?.mappingType||d?.actionType||d?.type||d?.uuid)){let m=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(c=>c.id===r?{...c,displayValue:$l(d)||String(c.displayValue??""),mappingType:Pl(d)}:c);e._draft={...e._draft,directControlItems:m}}}}catch{e._searchResults=[]}finally{e._searchLoading=!1,i&&typeof e._renderSearchDropdown=="function"?e._renderSearchDropdown():e._render()}},Mp=(e,t,n,r=null)=>{e._searchDebounceTimer&&clearTimeout(e._searchDebounceTimer),e._searchDebounceTimer=setTimeout(()=>{e._performUuidSearch(t,n,r)},300)},Np=(e,t,n)=>{let r=String(t??"").trim(),i=e._searchActiveType;if(i==="directControl"){let o=String(n.uuid??"").trim();e._lastSelectedDirectControlUuid={itemId:r,uuid:o,at:Date.now()};let a=(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(l=>l.id===r?{...l,uuid:o,displayValue:$l(n),mappingType:Pl(n)}:l);e._draft={...e._draft,directControlItems:a}}else if(i==="nextAction"){let o=Pl(n),a=String(n.uuid??"").trim();e._lastSelectedNextActionUuid={itemId:r,uuid:a,at:Date.now()};let l=(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(s=>s.id===r?{...s,uuid:a,displayValue:$l(n),mappingType:o,actionType:o}:s);e._draft={...e._draft,nextActionItems:l}}e._searchResults=[],e._searchActiveItemId=null,e._searchActiveType=null,e._render()},xp=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)return[];try{let i=Array.isArray(n)?n.join(","):String(n),o=`${r}/api/cms/search?collections=${encodeURIComponent(i)}&text=${encodeURIComponent(t)}`,a=await fetch(o,{method:"GET",headers:e._apiHeaders(!1)});if(!a.ok)return[];let l=await a.json();return Array.isArray(l.data)?l.data:Array.isArray(l)?l:[]}catch{return[]}},$p=async(e,t,n)=>{let r=String(t??"").trim();if(!r)return"";let i=await e._searchUuid(r,n),o=i.find(a=>String(a?.uuid??"").trim()===r);return String(o?.title??i[0]?.title??"").trim()},Pp=async e=>{let t=Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[];if(!t.length)return;let n=await Promise.all(t.map(async i=>{let o=String(i.uuid??"").trim(),a=String(i.displayValue??"").trim(),l=String(i.mappingType??"").trim();if(!o||a&&l)return{id:String(i.id??""),uuid:o,displayValue:a,mappingType:l};let s=await e._searchUuid(o,["sub-direct-controls"]),d=s.find(h=>String(h?.uuid??"").trim()===o)||s[0]||null,m=String(d?.title??""),c=String(d?.mappingType??d?.mapping_type??d?.actionType??d?.action_type??d?.type??"").trim();return{id:String(i.id??""),uuid:o,displayValue:a||m,mappingType:l||c}})),r=new Map(n.map(i=>[String(i.id??""),i]));e._draft={...e._draft,directControlItems:(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map(i=>{let o=String(i.id??""),a=r.get(o);return!a||String(i.uuid??"").trim()!==a.uuid?i:{...i,displayValue:String(i.displayValue??"").trim()||a.displayValue,mappingType:String(i.mappingType??"").trim()||a.mappingType}})},e._render()},Lp=async e=>{let t=Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[];if(!t.length)return;let n=await Promise.all(t.map(async i=>{let o=String(i.uuid??"").trim(),a=String(i.displayValue??"").trim();if(!o||a)return{id:String(i.id??""),uuid:o,displayValue:a};let l=await e._resolveTitleByUuid(o,["sub-commands","commands"]);return{id:String(i.id??""),uuid:o,displayValue:l}})),r=new Map(n.map(i=>[String(i.id??""),i]));e._draft={...e._draft,nextActionItems:(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map(i=>{let o=String(i.id??""),a=r.get(o);return!a||String(i.uuid??"").trim()!==a.uuid?i:{...i,displayValue:String(i.displayValue??"").trim()||a.displayValue}})},e._render()},Up=async(e,t,n)=>{let r=String(e._config.base_url??"").trim().replace(/\/$/,"");if(!r)throw new Error("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.");let i=`${r}/api/cms/${encodeURIComponent(t)}/${encodeURIComponent(n)}`,o=await fetch(i,{method:"DELETE",headers:e._apiHeaders(!0)});if(!o.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F: HTTP ${o.status}`)};var zp=async e=>{let t=e._apiUrl("/api/cms/settings-dialog");if(!t){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}e._defaultsLoading=!0,e._defaultsError="",e._render();try{let n=await fetch(t,{method:"GET",headers:e._apiHeaders(!1)});if(!n.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${n.status}`);let r=await n.json(),i=Array.isArray(r?.data)?r.data:Array.isArray(r)?r:[],o={...e._defaultsByType},a=new Set,l=Ke.map(d=>d.type),s=(d,m)=>{let c=String(d?.actionType??d?.componentDialog?.actionType??"").trim();if(c&&o[c]&&!a.has(c))return c;let h=l[m];return h&&o[h]&&!a.has(h)?h:""};i.forEach((d,m)=>{let c=s(d,m);c&&(a.add(c),o[c]=e._newDefaultsDraft(c,d))}),e._defaultsByType={...e._newDefaultsState(),...o},e._status="\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B."}catch(n){e._defaultsError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{e._defaultsLoading=!1,e._render()}},Op=(e,t)=>{let n=e._defaultConfig(t);e._addModalBackdrop(),e._defaultsActiveType=n.type,e._defaultsActiveId=String(e._defaultsByType[n.type]?._id??""),e._defaultsModalOpen=!0,e._defaultsError="",e._render()},Fp=e=>{e._defaultsModalSaving||(e._removeModalBackdrop(),e._defaultsModalOpen=!1,e._render())},Bp=(e,t,n)=>{let r=e._defaultsActiveType,i=e._defaultsByType[r]??e._newDefaultsDraft(r);e._defaultsByType={...e._defaultsByType,[r]:{...i,[t]:n}}},jp=async(e,t,n=!1)=>{let r=e._defaultConfig(t);if(e._defaultsActiveType=r.type,e._defaultsActiveId=String(e._defaultsByType[r.type]?._id??e._defaultsActiveId??""),!e._apiUrl("")){e._defaultsError="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",e._render();return}let o;try{o=e._buildDefaultsPayload()}catch(a){e._defaultsError=a?.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",e._render();return}e._defaultsModalSaving=n,e._defaultsLoading=!n,e._defaultsError="",e._render();try{let a=!!e._defaultsActiveId,l="settings-dialog",s=a?e._apiUrl(`/api/cms/${l}/${encodeURIComponent(e._defaultsActiveId)}`):e._apiUrl(`/api/cms/${l}`),m=await fetch(s,{method:a?"PUT":"POST",headers:e._apiHeaders(!0),body:JSON.stringify(o)});if(!m.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B: HTTP ${m.status}`);let c=await m.json().catch(()=>null),h=c?.data&&typeof c.data=="object"?c.data:c&&typeof c=="object"?c:null,v=e._defaultsActiveType,w=e._defaultsByType[v]??e._newDefaultsDraft(v),S=String(h?._id??w._id??e._defaultsActiveId??"");e._defaultsByType={...e._defaultsByType,[v]:{...w,...h&&typeof h=="object"?h:o,_id:S}},e._defaultsActiveId=S,await e._reloadDefaultsCommands(),e._status=a?"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430.":"\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430.",n&&(e._removeModalBackdrop(),e._defaultsModalOpen=!1)}catch(a){e._defaultsError=a?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0435\u0444\u043E\u043B\u0442\u043D\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0443."}finally{e._defaultsModalSaving=!1,e._defaultsLoading=!1,e._render()}},Vp=async e=>{await e._saveDefaultsType(e._defaultsActiveType,!0)};var Rp=(e,t,n)=>{t.querySelectorAll("[data-field]").forEach(r=>{let i=r.dataset.field,o=a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;e._updateDraft(i,l)};n(r,"input",o),n(r,"change",o)}),t.querySelectorAll("[data-direct-field]").forEach(r=>{let i=r.dataset.directField,o=a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;e._updateDirectDraft(i,l),i==="typeData"&&(a.currentTarget.value!=="command"?(e._updateDirectDraft("manual",!1),e._updateDirectDraft("voiceCommands","")):(e._searchResults=[],e._searchActiveType=null)),i==="subDirectControl"&&l.length>0&&e._performUuidSearch(l,"subDirectControlSample"),(r.type==="checkbox"||r.tagName==="SELECT")&&e._render()};n(r,"input",o),n(r,"change",o),i==="subDirectControl"&&(n(r,"focus",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}),n(r,"click",()=>{e._subDirectControlSampleOptions.length||e._loadSubDirectControlSamples()}))}),t.querySelectorAll("[data-template-field]").forEach(r=>{let i=r.dataset.templateField,o=a=>e._updateTemplateDraft(i,a.currentTarget.value);n(r,"input",o),n(r,"change",o)}),t.querySelectorAll("[data-defaults-field]").forEach(r=>{let i=r.dataset.defaultsField,o=a=>{let l=r.type==="checkbox"?a.currentTarget.checked:a.currentTarget.value;e._updateDefaultsDraft(i,l);let s=e._defaultConfig(e._defaultsActiveType);i==="llmEnabled"&&r.type==="checkbox"&&s.supportsLlm&&e._render()};n(r,"input",o),(r.type==="checkbox"||r.tagName==="SELECT")&&n(r,"change",o)}),t.querySelectorAll("[data-response-item-id][data-response-item-field]").forEach(r=>{let i=r.dataset.responseItemId,o=r.dataset.responseItemField,a=l=>{let s=r.type==="checkbox"?l.currentTarget.checked:l.currentTarget.value;e._updateVoiceResponseItem(i,o,s),r.type==="checkbox"&&e._render()};n(r,"input",a),r.type==="checkbox"&&n(r,"change",a)}),t.querySelectorAll("input[data-direct-control-item-id], textarea[data-direct-control-item-id], select[data-direct-control-item-id]").forEach(r=>{let i=r.dataset.directControlItemId;r.tagName==="INPUT"||r.tagName==="TEXTAREA"?(n(r,"input",a=>e._updateDirectControlItem(i,a.currentTarget.value,!1)),n(r,"change",a=>e._updateDirectControlItem(i,a.currentTarget.value,!0))):(n(r,"input",a=>e._updateDirectControlItem(i,a.currentTarget.value,!0)),n(r,"change",a=>e._updateDirectControlItem(i,a.currentTarget.value,!0)))}),t.querySelectorAll("[data-next-action-item-id][data-next-action-item-field]").forEach(r=>{let i=r.dataset.nextActionItemId,o=r.dataset.nextActionItemField;if(r.tagName==="INPUT"||r.tagName==="TEXTAREA")n(r,"input",l=>e._updateNextActionItem(i,o,l.currentTarget.value,!1,!1)),n(r,"change",l=>e._updateNextActionItem(i,o,l.currentTarget.value,!0,!0));else{let l=s=>e._updateNextActionItem(i,o,s.currentTarget.value,!0,!0);n(r,"input",l),n(r,"change",l)}}),t.querySelectorAll("[data-direct-sub-control-item-id][data-direct-sub-control-item-field]").forEach(r=>{let i=r.dataset.directSubControlItemId,o=r.dataset.directSubControlItemField,a=l=>e._updateDirectSubControlItem(i,o,l.currentTarget.value);n(r,"input",a),n(r,"change",a)}),t.querySelectorAll("[data-template-sub-control-item-id][data-template-sub-control-item-field]").forEach(r=>{let i=r.dataset.templateSubControlItemId,o=r.dataset.templateSubControlItemField,a=l=>e._updateTemplateSubControlItem(i,o,l.currentTarget.value);n(r,"input",a),n(r,"change",a)})};var Yp=(e,t,n)=>{n(t.querySelector('[data-action="generate-uuid"]'),"click",()=>e._refreshUuid()),n(t.querySelector('[data-action="generate-direct-uuid"]'),"click",()=>e._refreshDirectUuid()),n(t.querySelector('[data-action="generate-template-uuid"]'),"click",()=>e._refreshTemplateUuid()),n(t.querySelector('[data-action="add-voice-response-item"]'),"click",()=>e._addVoiceResponseItem()),n(t.querySelector('[data-action="add-direct-control-item"]'),"click",()=>e._addDirectControlItem()),n(t.querySelector('[data-action="add-next-action-item"]'),"click",()=>e._addNextActionItem()),n(t.querySelector('[data-action="add-direct-sub-control-item"]'),"click",()=>e._addDirectSubControlItem()),n(t.querySelector('[data-action="add-template-sub-control-item"]'),"click",()=>e._addTemplateSubControlItem()),t.querySelectorAll('[data-action="remove-voice-response-item"]').forEach(r=>{n(r,"click",()=>e._removeVoiceResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectControlItem(r.dataset.directControlItemId))}),t.querySelectorAll('[data-action="remove-next-action-item"]').forEach(r=>{n(r,"click",()=>e._removeNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-next-action-item"]').forEach(r=>{n(r,"click",()=>e._toggleNextActionItem(r.dataset.nextActionItemId))}),t.querySelectorAll('[data-action="toggle-response-item"]').forEach(r=>{n(r,"click",()=>e._toggleResponseItem(r.dataset.responseItemId))}),t.querySelectorAll('[data-action="remove-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="toggle-direct-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleDirectSubControlItem(r.dataset.directSubControlItemId))}),t.querySelectorAll('[data-action="remove-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._removeTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="toggle-template-sub-control-item"]').forEach(r=>{n(r,"click",()=>e._toggleTemplateSubControlItem(r.dataset.templateSubControlItemId))}),t.querySelectorAll('[data-action="open-item-actions"]').forEach(r=>{n(r,"click",i=>{i.stopPropagation(),e._openItemActionsModal({kind:r.dataset.itemKind,id:r.dataset.itemId,title:r.dataset.itemTitle,collection:r.dataset.itemCollection,status:String(r.dataset.itemStatus??"").toLowerCase()==="true"})})})};var Hp=(e,t,n)=>{t.querySelectorAll('[data-action="close"]').forEach(r=>{n(r,"click",()=>e._closeModal())}),t.querySelectorAll('[data-action="close-direct"]').forEach(r=>{n(r,"click",()=>e._closeDirectModal())}),t.querySelectorAll('[data-action="close-template"]').forEach(r=>{n(r,"click",()=>e._closeTemplateModal())}),t.querySelectorAll('[data-action="close-defaults"]').forEach(r=>{n(r,"click",()=>e._closeDefaultsModal())}),t.querySelectorAll('[data-action="close-item-actions"]').forEach(r=>{n(r,"click",()=>e._closeItemActionsModal())}),n(t.querySelector('[data-action="save"]'),"click",()=>e._saveModal()),n(t.querySelector('[data-action="save-direct"]'),"click",()=>e._saveDirectModal()),n(t.querySelector('[data-action="save-template"]'),"click",()=>e._saveTemplateModal()),n(t.querySelector('[data-action="save-defaults"]'),"click",()=>e._saveDefaultsModal()),n(t.querySelector('[data-action="delete"]'),"click",()=>e._deleteModal()),n(t.querySelector('[data-action="delete-direct"]'),"click",()=>e._deleteDirectModal()),n(t.querySelector('[data-action="delete-template"]'),"click",()=>e._deleteTemplateModal()),n(t.querySelector('[data-action="toggle-status"]'),"click",()=>e._toggleEditModalStatus()),n(t.querySelector('[data-action="toggle-direct-status"]'),"click",()=>e._toggleDirectEditModalStatus()),n(t.querySelector('[data-action="apply-item-status"]'),"click",()=>e._applyItemStatus())};var qp=(e,t,n)=>{t.querySelectorAll('[data-action="select-search-result"]').forEach(r=>{n(r,"click",i=>{i.preventDefault(),i.stopPropagation();let o=r.dataset.directControlItemId||r.dataset.nextActionItemId,a={uuid:r.dataset.resultUuid,title:r.dataset.resultTitle,mappingType:r.dataset.resultMappingType||r.dataset.resultActiveType||r.dataset.resultType};e._selectSearchResult(o,a)})})};var Wp=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._setTab(r.dataset.tab)})}),n(t.querySelector('[data-action="reload"]'),"click",()=>{e._hasAnyModalOpen?.()||e._loadPage(e._pageByTab[e._tab]||1,{force:!0})}),n(t.querySelector('[data-action="create"]'),"click",()=>{e._hasAnyModalOpen?.()||e._openCreateModal()}),n(t.querySelector('[data-action="prev"]'),"click",()=>{e._hasAnyModalOpen?.()||e._loadPage((e._pageByTab[e._tab]||1)-1)}),n(t.querySelector('[data-action="next"]'),"click",()=>{e._hasAnyModalOpen?.()||e._loadPage((e._pageByTab[e._tab]||1)+1)}),t.querySelectorAll('[data-action="goto-page"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._loadPage(Number(r.dataset.page)||1)})}),n(t.querySelector('[data-action="reload-direct"]'),"click",()=>{e._hasAnyModalOpen?.()||e._reloadDirectCommands()}),n(t.querySelector('[data-action="create-direct"]'),"click",()=>{e._hasAnyModalOpen?.()||e._openCreateDirectModal()}),n(t.querySelector('[data-action="reload-template"]'),"click",()=>{e._hasAnyModalOpen?.()||e._reloadTemplateCommands()}),n(t.querySelector('[data-action="create-template"]'),"click",()=>{e._hasAnyModalOpen?.()||e._openCreateTemplateModal()}),n(t.querySelector('[data-action="reload-defaults"]'),"click",()=>{e._hasAnyModalOpen?.()||e._reloadDefaultsCommands()}),t.querySelectorAll('[data-action="open-defaults-item"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openDefaultsModal(r.dataset.defaultType)})}),t.querySelectorAll('[data-action="edit"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openEditModal(r.dataset.commandId)})}),t.querySelectorAll('[data-action="edit-direct"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openEditDirectModal(r.dataset.directId)})}),t.querySelectorAll('[data-action="edit-template"]').forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._openEditTemplateModal(r.dataset.templateId)})}),t.querySelectorAll("[data-direct-subtab]").forEach(r=>{n(r,"click",()=>{e._hasAnyModalOpen?.()||e._setDirectSubtab(r.dataset.directSubtab)})})};var Kp=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(i=>{n(r,i,o=>e._swallowUiEvent(o))})})};var Qp=e=>{let t=e.shadowRoot;if(!t)return null;e._bindController?.abort&&e._bindController.abort(),e._legacyListeners.length&&(e._legacyListeners.forEach(({element:o,eventName:a,handler:l})=>{o.removeEventListener(a,l)}),e._legacyListeners=[]);let n=typeof AbortController<"u";e._bindController=n?new AbortController:null;let r=e._bindController?.signal??null;return{root:t,on:(o,a,l)=>{if(o)try{r?o.addEventListener(a,l,{signal:r}):(o.addEventListener(a,l),e._legacyListeners.push({element:o,eventName:a,handler:l}))}catch{o.addEventListener(a,l),e._legacyListeners.push({element:o,eventName:a,handler:l})}}}};var Gp=e=>{let t=Qp(e);if(!t)return;let{root:n,on:r}=t;Wp(e,n,r),Hp(e,n,r),Yp(e,n,r),qp(e,n,r),Rp(e,n,r),Kp(e,n,r)};var Xp=e=>{if(!e._directModalOpen)return"";let t=e._directModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C direct-\u043A\u043E\u043C\u0430\u043D\u0434\u0443",n=e._directDraft.typeData==="command",r=e._directModalMode==="edit",i=!r&&!String(e._directDraft.uuid??"").trim(),o=Array.isArray(e._directDraft.subDirectControlItems)?e._directDraft.subDirectControlItems:[],a=Array.isArray(e._subDirectControlSampleOptions)?e._subDirectControlSampleOptions:[],l=String(e._directDraft.subDirectControl??"").trim(),s=a.some(d=>String(d?.uuid??"").trim()===l);return`
    <div class="modal-backdrop" data-action="close-direct"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${g(t)}">
      <div class="modal-header">
        <h3>${g(t)}</h3>
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
          <input data-direct-field="title" value="${g(e._directDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-direct-field="uuid" value="${g(e._directDraft.uuid)}" ${r?"readonly":""} />
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
          <input data-direct-field="type" value="${g(e._directDraft.type)}" />
        </label>
        <label>
          <span>directControl.valueType</span>
          <select data-direct-field="typeData">
            ${_r.map(d=>`
              <option value="${d}" ${e._directDraft.typeData===d?"selected":""}>${d}</option>
            `).join("")}
          </select>
        </label>
        ${n?`
          <label class="field-span-2">
            <span>voiceCommands</span>
            <textarea rows="3" data-direct-field="voiceCommands">${g(e._directDraft.voiceCommands)}</textarea>
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
                        data-direct-sub-control-item-id="${g(d.id)}"
                      >
                        <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${m+1}</span>
                        <span class="response-accordion-icon">${c?"\u2212":"+"}</span>
                      </button>
                      ${c?`
                        <div class="response-item-grid">
                          <label>
                            <span>subMappingType</span>
                            <input
                              data-direct-sub-control-item-id="${g(d.id)}"
                              data-direct-sub-control-item-field="subType"
                              value="${g(d.subType)}"
                            />
                          </label>
                          <label>
                            <span>subVoiceCommands</span>
                            <textarea
                              rows="3"
                              data-direct-sub-control-item-id="${g(d.id)}"
                              data-direct-sub-control-item-field="subVoiceCommands"
                            >${g(d.subVoiceCommands)}</textarea>
                          </label>
                          <div class="response-item-actions">
                            <button
                              type="button"
                              class="ghost compact-delete-button"
                              data-action="remove-direct-sub-control-item"
                              data-direct-sub-control-item-id="${g(d.id)}"
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
                  <option value="${g(l)}" selected>${g(l)}</option>
                `:""}
                ${a.map(d=>`
                  <option value="${g(d.uuid)}" ${e._directDraft.subDirectControl===d.uuid?"selected":""}>${g(d.title)} (${g(d.uuid)})</option>
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
  `},Jp=e=>{if(!e._templateModalOpen)return"";let t=e._templateModalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D",n=e._templateModalMode==="edit",r=!n&&!String(e._templateDraft.uuid??"").trim(),i=Array.isArray(e._templateDraft.subDirectControlItems)?e._templateDraft.subDirectControlItems:[];return`
    <div class="modal-backdrop" data-action="close-template"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${g(t)}">
      <div class="modal-header">
        <h3>${g(t)}</h3>
        <button type="button" class="ghost" data-action="close-template" ${e._templateModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <div class="modal-grid">
        <label>
          <span>title</span>
          <input data-template-field="title" value="${g(e._templateDraft.title)}" />
        </label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-template-field="uuid" value="${g(e._templateDraft.uuid)}" ${n?"readonly":""} />
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
                    data-template-sub-control-item-id="${g(o.id)}"
                  >
                    <span>\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${a+1}</span>
                    <span class="response-accordion-icon">${l?"\u2212":"+"}</span>
                  </button>
                  ${l?`
                    <div class="response-item-grid">
                      <label>
                        <span>subMappingType</span>
                        <input
                          data-template-sub-control-item-id="${g(o.id)}"
                          data-template-sub-control-item-field="subType"
                          value="${g(o.subType)}"
                        />
                      </label>
                      <label>
                        <span>subVoiceCommands</span>
                        <textarea
                          rows="3"
                          data-template-sub-control-item-id="${g(o.id)}"
                          data-template-sub-control-item-field="subVoiceCommands"
                        >${g(o.subVoiceCommands)}</textarea>
                      </label>
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-template-sub-control-item"
                          data-template-sub-control-item-id="${g(o.id)}"
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
  `},Zp=e=>{if(!e._defaultsModalOpen)return"";let t=e._defaultsActiveType,n=e._defaultConfig(t),r=e._defaultsByType[t]??e._newDefaultsDraft(t);return`
    <div class="modal-backdrop" data-action="close-defaults"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${g(n.title)}">
      <div class="modal-header">
        <h3>${g(n.title)}</h3>
        <button type="button" class="ghost" data-action="close-defaults" ${e._defaultsModalSaving?"disabled":""}>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
      </div>
      <div class="modal-grid">
        <label class="field-span-2">
          <span>title</span>
          <input data-defaults-field="title" value="${g(r.title||n.title)}" disabled />
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
          <input data-defaults-field="message" value="${g(r.message)}" />
        </label>
        ${n.supportsLlm&&r.llmEnabled?`
          <label class="field-span-2">
            <span>system</span>
            <textarea rows="6" data-defaults-field="system">${g(r.system)}</textarea>
          </label>
          <label class="field-span-2">
            <span>model</span>
            <input data-defaults-field="model" value="${g(r.model)}" />
          </label>
        `:""}
      </div>
      <div class="modal-footer">
        <button type="button" class="primary" data-action="save-defaults" ${e._defaultsModalSaving?"disabled":""}>${e._defaultsModalSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
      </div>
    </section>
  `},em=e=>{if(!e._itemActionsModalOpen)return"";let t=e._itemActionsStatus?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",n=e._itemActionsStatus?"\u0421\u0435\u0439\u0447\u0430\u0441: \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D":"\u0421\u0435\u0439\u0447\u0430\u0441: \u0441\u043A\u0440\u044B\u0442",r=e._itemActionsTitle||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return`
    <div class="modal-backdrop" data-action="close-item-actions"></div>
    <section class="modal modal-compact modal-item-actions" role="dialog" aria-modal="true" aria-label="\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F">
      <div class="modal-header">
        <h3>${g(r)}</h3>
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
  `};var tm=e=>{if(!e._modalOpen)return"";let t=e._modalMode==="edit"?"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439",n=e._modalMode==="edit",r=!n&&!String(e._draft.uuid??"").trim();return`
    <div class="modal-backdrop" data-action="close"></div>
    <section class="modal" role="dialog" aria-modal="true" aria-label="${g(t)}">
      <div class="modal-header">
        <h3>${g(t)}</h3>
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
        <label><span>Title</span><input data-field="title" value="${g(e._draft.title)}" /></label>
        <label>
          <span>uuid</span>
          <div class="field-inline field-inline-icon">
            <input data-field="uuid" value="${g(e._draft.uuid)}" ${n?"readonly":""} />
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
        <label><span>actionType</span><input data-field="type" value="${g(e._draft.type)}" /></label>
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
          <textarea rows="6" class="voice-commands-field" data-field="voiceCommands">${g(e._draft.voiceCommands)}</textarea>
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
                      data-response-item-id="${g(i.id)}"
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
                              data-response-item-id="${g(i.id)}"
                              data-response-item-field="type"
                              value="${g(i.type)}"
                              placeholder="default"
                            />
                          </label>
                          <label>
                            <span>LLM</span>
                            <div class="switch-control">
                              <input
                                type="checkbox"
                                data-response-item-id="${g(i.id)}"
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
                            data-response-item-id="${g(i.id)}"
                            data-response-item-field="voiceResponse"
                          >${g(i.voiceResponse)}</textarea>
                        </label>
                        ${i.llmEnabled?`
                          <label>
                            <span>system</span>
                            <textarea
                              rows="3"
                              data-response-item-id="${g(i.id)}"
                              data-response-item-field="system"
                            >${g(i.system)}</textarea>
                          </label>
                          <label>
                            <span>model</span>
                            <input
                              data-response-item-id="${g(i.id)}"
                              data-response-item-field="model"
                              value="${g(i.model)}"
                            />
                          </label>
                        `:""}
                        <div class="response-item-actions">
                          <button
                            type="button"
                            class="ghost compact-delete-button"
                            data-action="remove-voice-response-item"
                            data-response-item-id="${g(i.id)}"
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
            ${(Array.isArray(e._draft.nextActionItems)?e._draft.nextActionItems:[]).map((i,o)=>{let a=e._openNextActionItemIds.has(i.id);return`
                <section class="response-item-card ${a?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-next-action-item"
                    data-next-action-item-id="${g(i.id)}"
                  >
                    <span>${g(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}`)}</span>
                    <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                  </button>
                  ${a?`
                    <div class="response-item-grid">
                      <div class="response-inline-row">
                        <label>
                          <span>actionTypeComponent</span>
                          <select data-next-action-item-id="${g(i.id)}" data-next-action-item-field="actionTypeComponent">
                            ${Yi.map(l=>`
                              <option value="${l}" ${i.actionTypeComponent===l?"selected":""}>${l}</option>
                            `).join("")}
                          </select>
                        </label>
                        <label>
                          <span>uuid</span>
                          <div class="dropdown-container">
                            <input
                              data-next-action-item-id="${g(i.id)}"
                              data-next-action-item-field="uuid"
                              value="${g(i.uuid)}"
                              placeholder="uuid"
                            />
                            ${e._searchActiveType==="nextAction"&&e._searchActiveItemId===i.id&&e._searchResults.length>0?`
                              <div class="dropdown-options">
                                ${e._searchResults.map(l=>`
                                  <div class="dropdown-option" data-action="select-search-result" data-next-action-item-id="${g(i.id)}" data-result-uuid="${g(l.uuid)}" data-result-title="${g(l.title??l.name??"")}" data-result-mapping-type="${g(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}">
                                    ${g(l.title??l.name??"")} (${g(l.uuid)})
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
                            data-next-action-item-id="${g(i.id)}"
                            data-next-action-item-field="actionType"
                            value="${g(i.actionType??i.mappingType??"")}"
                            placeholder="custom actionType"
                          />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-next-action-item"
                          data-next-action-item-id="${g(i.id)}"
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
            ${(Array.isArray(e._draft.directControlItems)?e._draft.directControlItems:[]).map((i,o)=>{let a=e._openDirectControlItemIds.has(i.id);return`
                <section class="response-item-card ${a?"open":""}">
                  <button
                    type="button"
                    class="response-item-toggle"
                    data-action="toggle-direct-control-item"
                    data-direct-control-item-id="${g(i.id)}"
                  >
                    <span>${g(i.uuid?i.displayValue||i.uuid:`\u042D\u043B\u0435\u043C\u0435\u043D\u0442 ${o+1}`)}</span>
                    <span class="response-accordion-icon">${a?"\u2212":"+"}</span>
                  </button>
                  ${a?`
                    <div class="response-item-grid">
                      <label>
                        <span>uuid</span>
                        <div class="dropdown-container">
                          <input
                            data-direct-control-item-id="${g(i.id)}"
                            value="${g(i.uuid)}"
                            placeholder="uuid"
                          />
                          ${e._searchActiveType==="directControl"&&e._searchActiveItemId===i.id&&e._searchResults.length>0?`
                            <div class="dropdown-options">
                              ${e._searchResults.map(l=>`
                                <div class="dropdown-option" data-action="select-search-result" data-direct-control-item-id="${g(i.id)}" data-result-uuid="${g(l.uuid)}" data-result-title="${g(l.title??l.name??"")}" data-result-mapping-type="${g(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}" data-result-active-type="${g(l.mappingType??l.mapping_type??l.actionType??l.action_type??l.type??"")}" data-result-type="${g(l.type??"")}">
                                  ${g(l.title??l.name??"")} (${g(l.uuid)})
                                </div>
                              `).join("")}
                            </div>
                          `:""}
                        </div>
                      </label>
                      ${String(i.uuid??"").trim()||String(i.mappingType??"").trim()?`
                        <label>
                          <span>mappingType</span>
                          <input value="${g(i.mappingType??"")}" placeholder="mappingType" disabled />
                        </label>
                      `:""}
                      <div class="response-item-actions">
                        <button
                          type="button"
                          class="ghost compact-delete-button"
                          data-action="remove-direct-control-item"
                          data-direct-control-item-id="${g(i.id)}"
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
  `};var nm=`
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
`;var rm=e=>{let t=e._hasAnyModalOpen?.()??!1,n=e._isCurrentUserAdmin?.()??!1,r=e._renderActiveTabBody(),i=`
    ${nm}
    <div class="create-scenario-shell ${t?"modal-context-open":""}">
      <section class="subtabs-dock">
        <div class="subtabs">
          <button type="button" class="subtab-button ${e._tab===k.primary?"active":""}" data-tab="${k.primary}">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${e._tab===k.secondary?"active":""}" data-tab="${k.secondary}">\u0412\u0442\u043E\u0440\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>
          <button type="button" class="subtab-button ${e._tab===k.direct?"active":""}" data-tab="${k.direct}">\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</button>
          ${n?`<button type="button" class="subtab-button ${e._tab===k.defaults?"active":""}" data-tab="${k.defaults}">\u0414\u0435\u0444\u043E\u043B\u0442\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B</button>`:""}
        </div>
      </section>
      ${e._error?`<div class="status error">${g(e._error)}</div>`:""}
      ${e._status?`<div class="status ok">${g(e._status)}</div>`:""}
      ${r}
    </div>
    ${e._renderModal()}
    ${e._renderDirectModal()}
    ${e._renderTemplateModal()}
    ${e._renderDefaultsModal()}
    ${e._renderItemActionsModal()}
  `;e._mountReact(i),e._bind()};var im=()=>{if(typeof document>"u")return;let e=document.getElementById("dialog-custom-ui-modal-style");e||(e=document.createElement("style"),e.id="dialog-custom-ui-modal-style",e.textContent="body.modal-open { overflow: hidden; }",document.head.appendChild(e))},om=e=>{e._reactRoot=null,e._hass=null,e._config={base_url:"",timer_alarm_token:"",theme:"light"},e._tab=k.primary,e._commands=[],e._pageByTab={[k.primary]:1,[k.secondary]:1},e._totalByTab={[k.primary]:0,[k.secondary]:0},e._totalPagesByTab={[k.primary]:1,[k.secondary]:1},e._lastLoadedTab=k.primary,e._lastLoadPageKey="",e._inFlightPageKey="",e._lastLoadedPageKey="",e._lastLoadedPageAt=0,e._loading=!1,e._error="",e._status="",e._modalOpen=!1,e._modalMode="create",e._modalSaving=!1,e._editingId="",e._editingStatus=!1,e._openResponseItemIds=new Set,e._openDirectControlItemIds=new Set,e._openNextActionItemIds=new Set,e._bindController=null,e._legacyListeners=[],e._draft=e._newDraft(),e._searchActiveItemId=null,e._searchActiveType=null,e._searchResults=[],e._searchLoading=!1,e._searchDebounceTimer=null,e._modalScrollTop=0,e._directSubtab=se.basic,e._directCommands=[],e._directLoading=!1,e._directError="",e._directModalOpen=!1,e._directModalMode="create",e._directModalSaving=!1,e._directEditingId="",e._directEditingStatus=!1,e._openDirectSubControlItemIds=new Set,e._directDraft=e._newDirectDraft(),e._templateCommands=[],e._templateLoading=!1,e._templateError="",e._templateModalOpen=!1,e._templateModalMode="create",e._templateModalSaving=!1,e._templateEditingId="",e._openTemplateSubControlItemIds=new Set,e._templateDraft=e._newTemplateDraft(),e._subDirectControlSampleOptions=[],e._defaultsLoading=!1,e._defaultsError="",e._defaultsModalOpen=!1,e._defaultsModalSaving=!1,e._defaultsByType=e._newDefaultsState(),e._defaultsActiveType=Ke[0].type,e._defaultsActiveId="",e._itemActionsModalOpen=!1,e._itemActionsSaving=!1,e._itemActionsId="",e._itemActionsKind="",e._itemActionsCollection="",e._itemActionsStatus=!1,e._itemActionsTitle="",e._modalCount=0};var Ll=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),im(),om(this)}set hass(t){let n=!this._hass,r=this._isCurrentUserAdmin();this._hass=t;let i=this._isCurrentUserAdmin(),o=r!==i;this._tab===k.defaults&&!this._isCurrentUserAdmin()&&(this._tab=k.primary),(n||!this.shadowRoot?.innerHTML||o)&&this._render()}set config(t){let n={base_url:String(t?.base_url??"").trim(),timer_alarm_token:String(t?.timer_alarm_token??"").trim(),theme:String(t?.theme??"light").trim().toLowerCase()==="dark"?"dark":"light"},r=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token||n.theme!==this._config.theme,i=n.base_url!==this._config.base_url||n.timer_alarm_token!==this._config.timer_alarm_token;if(!r){this.shadowRoot?.innerHTML||this._render();return}if(this._config=n,this._applyTheme(),i&&(this._tab===k.primary||this._tab===k.secondary)&&!this._loading&&n.base_url){this._error="",this._loadPage(this._pageByTab[this._tab]||1,{force:!0});return}if(i&&this._tab===k.defaults&&!this._defaultsLoading){this._reloadDefaultsCommands();return}this._render()}connectedCallback(){this._applyTheme(),this._render(),(this._tab===k.primary||this._tab===k.secondary)&&!this._commands.length&&!this._loading&&this._loadPage(1),this._tab===k.direct&&!this._directCommands.length&&!this._directLoading&&this._directSubtab===se.basic&&this._loadDirectCommands(),this._tab===k.direct&&!this._templateCommands.length&&!this._templateLoading&&this._directSubtab===se.templates&&this._loadTemplateCommands()}disconnectedCallback(){this._bindController?.abort&&(this._bindController.abort(),this._bindController=null),this.shadowRoot.replaceChildren()}_mountReact(t){let n=typeof window<"u"?window.scrollX:0,r=typeof window<"u"?window.scrollY:0,i=typeof document<"u"?document.scrollingElement:null,o=i?i.scrollTop:0,a=i?i.scrollLeft:0,l=this._captureActiveInputState(),s=this.shadowRoot.querySelector(".modal");s&&(this._modalScrollTop=s.scrollTop);let d=document.createElement("template");d.innerHTML=t,this._patchChildren(this.shadowRoot,d.content);let m=this.shadowRoot.querySelector(".modal");m&&(m.scrollTop=this._modalScrollTop),this._restoreActiveInputState(l),i&&(i.scrollTop=o,i.scrollLeft=a),typeof window<"u"&&window.scrollTo(n,r)}_patchChildren(t,n){let r=Array.from(t.childNodes),i=Array.from(n.childNodes),o=Math.max(r.length,i.length);for(let a=0;a<o;a+=1){let l=r[a],s=i[a];if(!s){l?.remove();continue}if(!l){t.appendChild(s.cloneNode(!0));continue}this._patchNode(t,l,s)}}_patchNode(t,n,r){if(!this._canPatchNode(n,r)){t.replaceChild(r.cloneNode(!0),n);return}if(n.nodeType===Node.TEXT_NODE||n.nodeType===Node.COMMENT_NODE){n.nodeValue!==r.nodeValue&&(n.nodeValue=r.nodeValue);return}n.nodeType!==Node.ELEMENT_NODE||r.nodeType!==Node.ELEMENT_NODE||(this._patchAttributes(n,r),this._syncFormElement(n,r),this._patchChildren(n,r))}_canPatchNode(t,n){return!t||!n||t.nodeType!==n.nodeType?!1:t.nodeType!==Node.ELEMENT_NODE?!0:t.nodeName===n.nodeName}_patchAttributes(t,n){Array.from(t.attributes).forEach(r=>{n.hasAttribute(r.name)||t.removeAttribute(r.name)}),Array.from(n.attributes).forEach(r=>{t.getAttribute(r.name)!==r.value&&t.setAttribute(r.name,r.value)})}_syncFormElement(t,n){let r=String(t.tagName??"").toLowerCase();if(r==="input"){t.type==="checkbox"||t.type==="radio"?t.checked=n.checked:this.shadowRoot?.activeElement!==t&&t.value!==n.value&&(t.value=n.value);return}if(r==="textarea"){this.shadowRoot?.activeElement!==t&&t.value!==n.value&&(t.value=n.value);return}r==="select"&&t.value!==n.value&&(t.value=n.value)}_captureActiveInputState(){let t=this.shadowRoot?.activeElement;if(!t||!(t instanceof HTMLElement))return null;let n=String(t.tagName||"").toLowerCase(),r=n==="textarea"||n==="input"&&!["checkbox","radio","button","submit","reset","file"].includes(String(t.getAttribute("type")||"").toLowerCase());return{tagName:n,directControlItemId:t.getAttribute("data-direct-control-item-id")||"",nextActionItemId:t.getAttribute("data-next-action-item-id")||"",nextActionItemField:t.getAttribute("data-next-action-item-field")||"",field:t.getAttribute("data-field")||"",isTextInput:r,selectionStart:r&&typeof t.selectionStart=="number"?t.selectionStart:null,selectionEnd:r&&typeof t.selectionEnd=="number"?t.selectionEnd:null}}_restoreActiveInputState(t){if(!t||!this.shadowRoot)return;let n="";if(t.directControlItemId?n=`input[data-direct-control-item-id="${t.directControlItemId}"],textarea[data-direct-control-item-id="${t.directControlItemId}"]`:t.nextActionItemId&&t.nextActionItemField?n=`[data-next-action-item-id="${t.nextActionItemId}"][data-next-action-item-field="${t.nextActionItemField}"]`:t.field&&(n=`[data-field="${t.field}"]`),!n)return;let r=this.shadowRoot.querySelector(n);if(r instanceof HTMLElement&&(r.focus({preventScroll:!0}),t.isTextInput&&typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&typeof r.setSelectionRange=="function")){let i=String(r.value??"").length,o=Math.min(t.selectionStart,i),a=Math.min(t.selectionEnd,i);r.setSelectionRange(o,a)}}_resolveSearchInputElement(t,n){if(!this.shadowRoot)return null;let r=String(n??"").trim();return r?t==="directControl"?this.shadowRoot.querySelector(`input[data-direct-control-item-id="${r}"]`):t==="nextAction"?this.shadowRoot.querySelector(`input[data-next-action-item-id="${r}"][data-next-action-item-field="uuid"]`):null:null}_clearSearchDropdown(){this.shadowRoot&&this.shadowRoot.querySelectorAll(".dropdown-container > .dropdown-options").forEach(t=>{t.remove()})}_renderSearchDropdown(){if(!this.shadowRoot)return;this._clearSearchDropdown();let t=String(this._searchActiveType??"").trim(),n=String(this._searchActiveItemId??"").trim(),r=Array.isArray(this._searchResults)?this._searchResults:[];if(!n||!r.length||t!=="directControl"&&t!=="nextAction")return;let o=this._resolveSearchInputElement(t,n)?.closest?.(".dropdown-container");if(!(o instanceof HTMLElement))return;let a=document.createElement("div");a.className="dropdown-options",r.forEach(l=>{let s=document.createElement("div");s.className="dropdown-option";let d=String(l?.title??l?.name??"").trim(),m=String(l?.uuid??"").trim();s.textContent=d?`${d} (${m})`:m,s.addEventListener("mousedown",c=>c.preventDefault()),s.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),this._selectSearchResult(n,{uuid:m,title:d,mappingType:String(l?.mappingType??l?.mapping_type??l?.actionType??l?.action_type??l?.type??"").trim()})}),a.appendChild(s)}),o.appendChild(a)}_addModalBackdrop(){this._modalCount++,this._modalCount===1&&typeof document<"u"&&document.body&&document.body.classList.add("modal-open")}_removeModalBackdrop(){this._modalCount=Math.max(0,this._modalCount-1),this._modalCount===0&&typeof document<"u"&&document.body&&document.body.classList.remove("modal-open")}_newDraft(t=null){return wc(t)}_newDirectDraft(t=null){return Cc(t)}_newTemplateDraft(t=null){return Tc(t)}_defaultConfig(t){return Hi(t)}_newDefaultsDraft(t,n=null){return Nl(t,n)}_newDefaultsState(){return kc()}_apiHeaders(t=!1){let n={};return t&&(n["Content-Type"]="application/json"),this._config.timer_alarm_token&&(n.Authorization=this._config.timer_alarm_token),n["x-user"]=this._resolveXUserHeader(),n}_getCurrentUserId(){return String(this._hass?.user?.id??"").trim()}_isCurrentUserAdmin(){let t=this._hass?.user?.is_admin??this._hass?.user?.isAdmin;if(typeof t=="boolean")return t;if(typeof t=="number")return t===1;if(typeof t=="string"){let n=t.trim().toLowerCase();return n==="true"||n==="1"||n==="yes"}return!1}_resolveXUserHeader(){return this._isCurrentUserAdmin()?"":this._getCurrentUserId()}_apiUrl(t){let n=String(this._config.base_url??"").trim().replace(/\/$/,"");return n?`${n}${t}`:""}async _loadPage(t=1,n={}){if(this._tab!==k.primary&&this._tab!==k.secondary)return;let{force:r=!1}=n??{},i=this._tab,o=Math.max(1,Number(t)||1),a=`${i}:${o}`;if(this._inFlightPageKey===a)return;let l=Date.now();if(!r&&this._lastLoadedPageKey===a&&l-this._lastLoadedPageAt<1500)return;let d=i===k.secondary?"/api/cms/sub-commands":"/api/cms/commands",m=this._apiUrl(`${d}?page=${encodeURIComponent(o)}&pageSize=${20}`);if(!m){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._render();return}this._lastLoadPageKey=a,this._inFlightPageKey=a,this._loading=!0,this._error="",this._render();try{let c=await fetch(m,{method:"GET",headers:this._apiHeaders(!1)});if(!c.ok)throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u043E\u043C\u0430\u043D\u0434: HTTP ${c.status}`);let h=await c.json(),v=Array.isArray(h.data)?h.data:[],w=h?.meta?.pagination??h?.pagination??{},S=Number(w.total??h.total??h.count??h.meta?.total??0),L=Number(w.page??o)||o,p=Number(w.pageSize??20)||20,u=Number(w.totalPages??w.pageCount??0),f=Number.isFinite(u)&&u>0?u:Math.max(1,Math.ceil((Number.isFinite(S)&&S>0?S:v.length)/p));this._commands=v,this._lastLoadedTab=i,this._pageByTab[i]=Math.max(1,L),this._totalPagesByTab[i]=Math.max(1,f),this._totalByTab[i]=Number.isFinite(S)&&S>0?S:Number.isFinite(u)&&u>0?u*p:o*20+(v.length===20?1:0),this._status=`\u041A\u043E\u043C\u0430\u043D\u0434\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B: ${v.length}.`,this._lastLoadedPageKey=a,this._lastLoadedPageAt=Date.now()}catch(c){this._commands=[],this._error=c?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u044B."}finally{this._inFlightPageKey===a&&(this._inFlightPageKey=""),this._loading=!1,this._render()}}_setTab(t){let n=typeof window<"u"?window.scrollY:0;if(t===k.defaults&&!this._isCurrentUserAdmin()){this._tab=k.primary,this._error="",this._status="",this._render(),typeof window<"u"&&window.scrollTo(0,n),(!this._loading||this._lastLoadedTab!==k.primary)&&this._loadPage(this._pageByTab[k.primary]||1);return}if(this._tab=t,this._error="",this._status="",this._render(),typeof window<"u"&&window.scrollTo(0,n),t===k.primary||t===k.secondary){let r=this._pageByTab[t]||1;(!this._loading||this._lastLoadedTab!==t)&&this._loadPage(r)}t===k.direct&&(this._directSubtab===se.basic&&!this._directCommands.length&&!this._directLoading&&this._loadDirectCommands(),this._directSubtab===se.templates&&!this._templateCommands.length&&!this._templateLoading&&this._loadTemplateCommands()),t===k.defaults&&!this._defaultsLoading&&this._reloadDefaultsCommands()}_buildPaginationItems(t,n){let r=Math.max(1,Number(t)||1),i=Math.max(1,Number(n)||1);return i<=7?Array.from({length:i},(o,a)=>a+1):r<=4?[1,2,3,4,"ellipsis",i]:r>=i-3?[1,"ellipsis",i-3,i-2,i-1,i]:[1,"ellipsis",r-1,r,r+1,"ellipsis",i]}_openCreateModal(){return Ac(this)}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_openEditModal(t){return Mc(this,t)}_closeModal(){return Nc(this)}_updateDraft(t,n){this._draft={...this._draft,[t]:n}}_buildPayload(){let t=qi(this._draft);return this._tab===k.secondary?(delete t.componentDialog,t):(delete t.subComponentDialog,t)}_refreshUuid(){return Pc(this)}_addVoiceResponseItem(){return Lc(this)}_removeVoiceResponseItem(t){return Uc(this,t)}_updateVoiceResponseItem(t,n,r){return zc(this,t,n,r)}_toggleResponseItem(t){return Oc(this,t)}_addDirectControlItem(){return Fc(this)}_removeDirectControlItem(t){return Bc(this,t)}_updateDirectControlItem(t,n){return jc(this,t,n)}_toggleDirectControlItem(t){return Vc(this,t)}_addNextActionItem(){return Rc(this)}_removeNextActionItem(t){return Yc(this,t)}_updateNextActionItem(t,n,r){return Hc(this,t,n,r)}_toggleNextActionItem(t){return qc(this,t)}_setDirectSubtab(t){return Zc(this,t)}async _loadDirectCommands(){return ep(this)}async _loadTemplateCommands(){return tp(this)}_reloadDirectCommands(){return np(this)}_reloadTemplateCommands(){return rp(this)}_openCreateDirectModal(){return ip(this)}_openEditDirectModal(t){return op(this,t)}_closeDirectModal(){return ap(this)}_updateDirectDraft(t,n){return lp(this,t,n)}async _hydrateSelectedSubDirectControlSample(){return sp(this)}_refreshDirectUuid(){return dp(this)}_refreshTemplateUuid(){return up(this)}_addDirectSubControlItem(){return cp(this)}_removeDirectSubControlItem(t){return pp(this,t)}_toggleDirectSubControlItem(t){return mp(this,t)}_updateDirectSubControlItem(t,n,r){return fp(this,t,n,r)}_buildDirectPayload(){return Wi(this._directDraft)}async _loadSubDirectControlSamples(){return hp(this)}async _performUuidSearch(t,n,r=null){return Ap(this,t,n,r)}_debouncedPerformUuidSearch(t,n,r=null){return Mp(this,t,n,r)}_selectSearchResult(t,n){return Np(this,t,n)}async _searchUuid(t,n){return xp(this,t,n)}async _resolveTitleByUuid(t,n){return $p(this,t,n)}async _hydrateDirectControlTitles(){return Pp(this)}async _hydrateNextActionTitles(){return Lp(this)}async _deleteItem(t,n){return Up(this,t,n)}_openItemActionsModal({kind:t,id:n,title:r,collection:i,status:o}){return Wc(this,{kind:t,id:n,title:r,collection:i,status:o})}_closeItemActionsModal(){return Kc(this)}async _updateCommandStatusById(t,n,r){return Qc(this,t,n,r)}async _updateDirectStatusById(t,n){return Gc(this,t,n)}async _applyItemStatus(){return Xc(this)}async _toggleEditModalStatus(){return Jc(this)}async _toggleDirectEditModalStatus(){return gp(this)}async _saveDirectModal(){return _p(this)}async _deleteDirectModal(){return yp(this)}_openCreateTemplateModal(){return vp(this)}_openEditTemplateModal(t){return Sp(this,t)}_closeTemplateModal(){return bp(this)}_updateTemplateDraft(t,n){return wp(this,t,n)}_addTemplateSubControlItem(){return Cp(this)}_removeTemplateSubControlItem(t){return Tp(this,t)}_toggleTemplateSubControlItem(t){return kp(this,t)}_updateTemplateSubControlItem(t,n,r){return Dp(this,t,n,r)}_buildTemplatePayload(){return Dc(this._templateDraft)}async _saveTemplateModal(){return Ip(this)}async _deleteTemplateModal(){return Ep(this)}_reloadDefaultsCommands(){return zp(this)}_openDefaultsModal(t){return Op(this,t)}_closeDefaultsModal(){return Fp(this)}_updateDefaultsDraft(t,n){return Bp(this,t,n)}_buildDefaultsPayload(){let t=this._defaultsActiveType,n=this._defaultsByType[t]??this._newDefaultsDraft(t);return Ic(t,n)}async _saveDefaultsType(t,n=!1){return jp(this,t,n)}async _saveDefaultsModal(){return Vp(this)}async _saveModal(){return xc(this)}async _deleteModal(){return $c(this)}_renderCommandsTab(t){return Ht(this,t)}_renderPrimaryCommandsPage(){return Ki(this)}_renderSecondaryCommandsPage(){return Qi(this)}_renderDirectBasicSection(t){return Gi(this,t)}_renderDirectTemplatesSection(t){return Xi(this,t)}_renderDirectCommandsTab(){return Ji(this)}_renderActiveTabBody(){return Ec(this)}_renderStub(t,n){return xl(t,n)}_renderDirectModal(){return Xp(this)}_renderTemplateModal(){return Jp(this)}_renderDefaultsTab(){return Zi(this)}_renderDefaultsModal(){return Zp(this)}_renderModal(){return tm(this)}_renderItemActionsModal(){return em(this)}_swallowUiEvent(t){t.stopPropagation()}_hasAnyModalOpen(){return!!(this._modalOpen||this._directModalOpen||this._templateModalOpen||this._defaultsModalOpen||this._itemActionsModalOpen)}_bind(){Gp(this)}_render(){rm(this)}};customElements.get("dialog-custom-ui-create-scenario")||customElements.define("dialog-custom-ui-create-scenario",Ll);var Sr={base_url:"http://127.0.0.1:8000",allow_non_admin_panel:!0,client_id:"",timer_alarm_token:"",yandex_tts_api_key:"",yandex_tts_folder_id:"",yandex_tts_lang:"ru-RU",yandex_tts_codec:"oggopus",yandex_tts_voice:"oksana",yandex_tts_emotion:"good",yandex_tts_speed:1.1,timer_alarm_device_ids:[""],theme:"light",timeout:10,scenarios:[]},lm=`{
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
}`,sm=2e3,Ul=new URL(import.meta.url).searchParams.get("v")||"",am=["localhost","127.0.0.1"].includes(globalThis.location?.hostname??""),zl=Ul?am?`/src/dialog-custom-ui-timer-alarm.jsx?v=${encodeURIComponent(Ul)}`:`/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js?v=${encodeURIComponent(Ul)}`:am?"/src/dialog-custom-ui-timer-alarm.jsx":"/dialog_custom_ui_static/dialog-custom-ui-timer-alarm.js";var dm=e=>(t,n,r)=>{t&&t.addEventListener(n,r)};var um=(e,t,n)=>{t.querySelectorAll("[data-tab]").forEach(o=>{n(o,"click",()=>e._setActiveTab(o.dataset.tab))}),n(t.querySelector('[data-action="save"]'),"click",()=>e._save()),n(t.querySelector('[data-action="refresh-logs"]'),"click",()=>e._loadLogs()),n(t.querySelector('[data-action="download-json"]'),"click",()=>e._downloadJson()),n(t.querySelector('[data-action="upload-json"]'),"click",()=>e._openJsonFilePicker()),n(t.querySelector('[data-action="download-yandex-tts-files"]'),"click",()=>e._downloadYandexTtsFiles()),n(t.querySelector('[data-action="upload-yandex-tts-files"]'),"click",()=>e._openYandexTtsFilePicker()),n(t.querySelector('[data-action="reset-commands-cache"]'),"click",()=>e._resetCommandsCache()),n(t.querySelector('[data-action="reload-yandex-scenarios"]'),"click",()=>e._loadYandexScenarios()),n(t.querySelector('[data-action="create-yandex-tab"]'),"click",()=>e._startYandexScenarioCreate()),n(t.querySelector('[data-action="save-yandex-scenario"]'),"click",()=>e._saveYandexScenarioFromModal()),n(t.querySelector('[data-action="delete-yandex-scenario"]'),"click",()=>e._deleteActiveYandexScenario()),t.querySelectorAll('[data-action="toggle-secret"]').forEach(o=>{n(o,"click",()=>e._toggleSecretField(o.dataset.secretField))});let r=t.querySelector('[data-action="add-scenario"]');r&&(r.onclick=()=>e._addScenario()),t.querySelectorAll('[data-action="select-yandex-tab"]').forEach(o=>{n(o,"click",()=>e._setYandexActiveScenario(o.dataset.yandexTab))}),n(t.querySelector('[data-action="select-yandex-tab-dropdown"]'),"change",o=>{e._setYandexActiveScenario(o.currentTarget.value)}),t.querySelectorAll('[data-action="add-yandex-sub"]').forEach(o=>{n(o,"click",()=>e._addYandexDraftSubItem(o.dataset.subType))}),t.querySelectorAll('[data-action="remove-yandex-sub"]').forEach(o=>{n(o,"click",()=>e._removeYandexDraftSubItem(o.dataset.subType,Number(o.dataset.subIndex)))}),t.querySelectorAll("[data-yandex-sub-accordion]").forEach(o=>{n(o,"toggle",()=>e._setYandexSubEditorOpen(o.dataset.yandexSubAccordion,o.open))}),t.querySelectorAll("[data-yandex-sub-item-accordion]").forEach(o=>{n(o,"toggle",()=>{let a=o.dataset.yandexSubItemAccordion,l=o.dataset.yandexSubItemId;e._setYandexSubItemOpen(a,o.open?l:"")})}),n(t.querySelector('[data-action="import-json-input"]'),"change",o=>{let[a]=o.currentTarget.files||[];e._importJsonFile(a)}),n(t.querySelector('[data-action="import-yandex-tts-input"]'),"change",o=>{let[a]=o.currentTarget.files||[];e._importYandexTtsArchive(a)}),t.querySelectorAll('[data-action="add-condition"]').forEach(o=>{n(o,"click",()=>e._addCondition(o.dataset.scenarioId))}),t.querySelectorAll('[data-action="enable-condition-children-type"]').forEach(o=>{n(o,"click",()=>e._enableConditionChildrenType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-type"]').forEach(o=>{n(o,"click",()=>e._disableConditionChildrenType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll('[data-action="enable-condition-children-direct-type"]').forEach(o=>{n(o,"click",()=>e._enableConditionChildrenDirectType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll('[data-action="disable-condition-children-direct-type"]').forEach(o=>{n(o,"click",()=>e._disableConditionChildrenDirectType(o.dataset.scenarioId,o.dataset.conditionId))}),t.querySelectorAll("[data-toggle-scenario]").forEach(o=>{n(o,"click",()=>e._toggleScenario(o.dataset.toggleScenario))}),t.querySelectorAll("[data-toggle-condition]").forEach(o=>{n(o,"click",()=>e._toggleCondition(o.dataset.toggleCondition))}),t.querySelectorAll("[data-remove-id]").forEach(o=>{n(o,"click",()=>e._removeScenario(o.dataset.removeId))}),t.querySelectorAll("[data-remove-condition-id]").forEach(o=>{n(o,"click",()=>e._removeCondition(o.dataset.scenarioId,o.dataset.removeConditionId))}),t.querySelectorAll('[data-action="scenarios-page"]').forEach(o=>{n(o,"click",()=>e._setScenariosPage(o.dataset.page))}),t.querySelectorAll('[data-action="scenarios-page-nav"]').forEach(o=>{n(o,"click",()=>{let a=o.dataset.direction==="prev"?-1:1;e._setScenariosPage((Number(e._scenariosPage)||1)+a)})});let i=t.querySelector("dialog-custom-ui-create-scenario");i&&(i.hass=e._hass,i.config={base_url:e._config.base_url,timer_alarm_token:e._config.timer_alarm_token,theme:e._config.theme})};var cm=(e,t,n)=>{t.querySelectorAll("input, select, textarea").forEach(r=>{["click","focusin"].forEach(i=>{n(r,i,o=>e._swallowUiEvent(o))})}),t.querySelectorAll("[data-config-field]").forEach(r=>{let i=o=>r.dataset.configField==="theme"?o.currentTarget.checked?"dark":"light":r.dataset.configBool==="true"?o.currentTarget.checked:o.currentTarget.value;n(r,"input",o=>{e._updateConfigField(o.currentTarget.dataset.configField,i(o),!1)}),n(r,"change",o=>{e._updateConfigField(o.currentTarget.dataset.configField,i(o),!0)})}),t.querySelectorAll("[data-scenario-id][data-scenario-field]").forEach(r=>{let i=r.dataset.scenarioField,o=r.dataset.scenarioId;r.tagName==="SELECT"?n(r,"change",a=>{e._updateScenario(o,i,a.currentTarget.value,!0)}):(n(r,"input",a=>{e._updateScenario(o,i,a.currentTarget.value,!1)}),n(r,"change",a=>{e._updateScenario(o,i,a.currentTarget.value,!0)}))}),t.querySelectorAll("[data-scenario-id][data-condition-id][data-condition-field]").forEach(r=>{let i=r.dataset.scenarioId,o=r.dataset.conditionId,a=r.dataset.conditionField;n(r,"input",l=>{e._updateCondition(i,o,a,l.currentTarget.value,!1)}),n(r,"change",l=>{e._updateCondition(i,o,a,l.currentTarget.value,!0)})}),t.querySelectorAll("[data-yandex-field]").forEach(r=>{n(r,"input",i=>{e._updateYandexDraftField(i.currentTarget.dataset.yandexField,i.currentTarget.value,!1)}),n(r,"change",i=>{e._updateYandexDraftField(i.currentTarget.dataset.yandexField,i.currentTarget.value,!1)})}),t.querySelectorAll("[data-yandex-sub-field][data-yandex-sub-type][data-yandex-sub-index]").forEach(r=>{n(r,"input",i=>{e._updateYandexDraftSubItem(i.currentTarget.dataset.yandexSubType,Number(i.currentTarget.dataset.yandexSubIndex),i.currentTarget.dataset.yandexSubField,i.currentTarget.value,!1)}),n(r,"change",i=>{e._updateYandexDraftSubItem(i.currentTarget.dataset.yandexSubType,Number(i.currentTarget.dataset.yandexSubIndex),i.currentTarget.dataset.yandexSubField,i.currentTarget.value,!1)})})};var qt=Be(je());var N=Be(je());var M=Be(je());var me=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),pg=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`scenario_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Ol=()=>globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`condition_${Date.now()}_${Math.random().toString(16).slice(2,10)}`,Tn=()=>({id:Ol(),parent_type:"",children_type:"",children_type_enabled:!1,children_direct_type:"",children_direct_type_enabled:!1}),pm=()=>({id:pg(),name:"",script_entity_id:"",conditions:[Tn()]});var E=Be(je());var mg=E.default.memo(({condition:e,conditionIndex:t,scenarioId:n,isExpanded:r,onToggle:i,onUpdate:o,onEnableChildrenType:a,onDisableChildrenType:l,onEnableChildrenDirectType:s,onDisableChildrenDirectType:d,onRemove:m,canRemove:c})=>{let h=(0,E.useCallback)(()=>{i(e.id)},[i,e.id]),v=(0,E.useCallback)((b,T)=>{o(n,e.id,b,T)},[o,n,e.id]),w=(0,E.useCallback)(()=>{a(n,e.id)},[a,n,e.id]),S=(0,E.useCallback)(()=>{l(n,e.id)},[l,n,e.id]),L=(0,E.useCallback)(()=>{s(n,e.id)},[s,n,e.id]),p=(0,E.useCallback)(()=>{d(n,e.id)},[d,n,e.id]),u=(0,E.useCallback)(()=>{m(n,e.id)},[m,n,e.id]),f=[];e.parent_type&&f.push(`Parent: ${e.parent_type}`),e.children_type_enabled&&e.children_type&&f.push(`Children: ${e.children_type}`),e.children_direct_type_enabled&&e.children_direct_type&&f.push(`Children Direct: ${e.children_direct_type}`);let _=f.join(" \u2022 ")||"\u041F\u0443\u0441\u0442\u043E\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0435";return E.default.createElement("div",{className:`condition-card ${r?"expanded":"collapsed"}`},E.default.createElement("button",{type:"button",className:"condition-header",onClick:h},E.default.createElement("span",{className:"condition-heading"},E.default.createElement("span",{className:"condition-title"},"\u0423\u0441\u043B\u043E\u0432\u0438\u0435 ",t+1),E.default.createElement("span",{className:"condition-preview"},_)),E.default.createElement("span",{className:"condition-header-side"},E.default.createElement("span",{className:"condition-accordion-icon"},r?"\u2212":"+"))),E.default.createElement("div",{className:`condition-body ${r?"open":"hidden"}`},E.default.createElement("div",{className:"condition-actions"},c&&E.default.createElement("button",{type:"button",className:"ghost remove-inline-button",onClick:u},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435")),E.default.createElement("div",{className:"condition-grid"},E.default.createElement("div",{className:"scenario-type-field"},E.default.createElement("div",{className:"field-title-row"},E.default.createElement("span",null,"Parent Type")),E.default.createElement("input",{value:e.parent_type||"",placeholder:"status_door",onChange:b=>v("parent_type",b.target.value)}),E.default.createElement("small",null,"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D children_type \u0432 \u044D\u0442\u043E\u043C \u0436\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0438.")),e.children_type_enabled?E.default.createElement("div",{className:"scenario-type-field"},E.default.createElement("div",{className:"field-title-row"},E.default.createElement("span",null,"Children Type"),E.default.createElement("button",{type:"button",className:"ghost remove-inline-button",onClick:S},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")),E.default.createElement("input",{value:e.children_type||"",placeholder:"some_subcommand",onChange:b=>v("children_type",b.target.value)}),E.default.createElement("small",null,"\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D. ",E.default.createElement("code",null,"all")," \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043B\u044E\u0431\u043E\u0439 \u043D\u0435\u043F\u0443\u0441\u0442\u043E\u0439 children_type \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u044F.")):E.default.createElement("div",{className:"scenario-type-field field-placeholder"},E.default.createElement("div",{className:"field-title-row"},E.default.createElement("span",null,"Children Type")),E.default.createElement("button",{type:"button",className:"ghost add-inline-button",onClick:w},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_type"),E.default.createElement("small",null,"\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E parent_type.")),e.children_direct_type_enabled?E.default.createElement("div",{className:"scenario-type-field"},E.default.createElement("div",{className:"field-title-row"},E.default.createElement("span",null,"Children Direct Type"),E.default.createElement("button",{type:"button",className:"ghost remove-inline-button",onClick:p},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")),E.default.createElement("input",{value:e.children_direct_type||"",placeholder:"direct_subcommand | all_test",onChange:b=>v("children_direct_type",b.target.value)}),E.default.createElement("small",null,"\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D. \u0415\u0441\u043B\u0438 direct type \u043D\u0435 \u043F\u0440\u0438\u0448\u0435\u043B \u0432\u043E \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u043C payload, \u044D\u0442\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u043D\u0435\u043C\u0443.")):E.default.createElement("div",{className:"scenario-type-field field-placeholder"},E.default.createElement("div",{className:"field-title-row"},E.default.createElement("span",null,"Children Direct Type")),E.default.createElement("button",{type:"button",className:"ghost add-inline-button",onClick:L},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C children_direct_type"),E.default.createElement("small",null,"\u0415\u0441\u043B\u0438 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 direct type.")))))}),mm=mg;var fg=M.default.memo(({scenario:e,index:t,startIndex:n,scripts:r,isExpanded:i,expandedConditions:o,onToggleScenario:a,onUpdateScenario:l,onRemoveScenario:s,onAddCondition:d,onRemoveCondition:m,onUpdateCondition:c,onEnableChildrenType:h,onDisableChildrenType:v,onEnableChildrenDirectType:w,onDisableChildrenDirectType:S,onToggleCondition:L})=>{let p=(0,M.useCallback)(()=>{a(e.id)},[a,e.id]),u=(0,M.useCallback)(()=>{s(e.id)},[s,e.id]),f=(0,M.useCallback)((b,T)=>{l(e.id,b,T)},[l,e.id]),_=(0,M.useCallback)(()=>{d(e.id)},[d,e.id]);return M.default.createElement("section",{className:`scenario-card ${i?"expanded":"collapsed"}`,"data-scenario-card-id":e.id},M.default.createElement("div",{className:"scenario-header"},M.default.createElement("button",{type:"button",className:"scenario-toggle",onClick:p},M.default.createElement("span",{className:"scenario-toggle-icon"},i?"\u2212":"+"),M.default.createElement("span",null,M.default.createElement("span",{className:"scenario-kicker"},"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ",n+t+1),M.default.createElement("span",{className:"scenario-title"},e.name||"\u0411\u0435\u0437 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F"))),M.default.createElement("button",{type:"button",className:"ghost",onClick:u},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C")),M.default.createElement("div",{className:`scenario-body ${i?"open":"hidden"}`},M.default.createElement("div",{className:"scenario-grid"},M.default.createElement("label",{className:"field-span-2"},M.default.createElement("span",null,"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430"),M.default.createElement("input",{value:e.name||"",placeholder:"\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0432\u0435\u0440\u044C",onChange:b=>f("name",b.target.value)})),M.default.createElement("div",{className:"field-span-2 conditions-block"},M.default.createElement("div",{className:"conditions-toolbar"},M.default.createElement("div",null,M.default.createElement("span",{className:"section-label"},"\u0423\u0441\u043B\u043E\u0432\u0438\u044F"),M.default.createElement("small",null,"\u0427\u0435\u0440\u0435\u0437 ",M.default.createElement("code",null,"+")," \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043F\u0430\u0440\u0443 ",M.default.createElement("code",null,"Parent Type")," + ",M.default.createElement("code",null,"Children Type")," + ",M.default.createElement("code",null,"Children Direct Type"),". \u0415\u0441\u043B\u0438 \u0432 ",M.default.createElement("code",null,"Parent Type")," \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 ",M.default.createElement("code",null,";"),", \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0430\u0442\u0441\u044F \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.")),M.default.createElement("button",{type:"button",className:"secondary compact-button",onClick:_},"+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u0435")),M.default.createElement("div",{className:"conditions-list"},e.conditions.map((b,T)=>M.default.createElement(mm,{key:b.id,condition:b,conditionIndex:T,scenarioId:e.id,isExpanded:o.has(b.id),onToggle:L,onUpdate:c,onEnableChildrenType:h,onDisableChildrenType:v,onEnableChildrenDirectType:w,onDisableChildrenDirectType:S,onRemove:m,canRemove:e.conditions.length>1})))),M.default.createElement("label",{className:"field-span-2"},M.default.createElement("span",null,"\u0421\u043A\u0440\u0438\u043F\u0442 Home Assistant"),M.default.createElement("select",{value:e.script_entity_id||"",onChange:b=>f("script_entity_id",b.target.value)},M.default.createElement("option",{value:""},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 script.*"),r.map(b=>{let T=b.attributes.friendly_name||b.entity_id;return M.default.createElement("option",{key:b.entity_id,value:b.entity_id},T," (",b.entity_id,")")}),M.default.createElement("option",{value:"timer"},"\u0422\u0430\u0439\u043C\u0435\u0440 (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)"),M.default.createElement("option",{value:"alarm"},"\u0411\u0443\u0434\u0438\u043B\u044C\u043D\u0438\u043A (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430)"))))))}),fm=fg;var br=e=>{let t=e._scripts(),n=Array.isArray(e._config.scenarios)?e._config.scenarios:[],r=Math.max(1,Number(e._scenariosPageSize)||20),i=n.length,o=Math.max(1,Math.ceil(i/r)),a=Number(e._scenariosPage)||1,l=Math.min(Math.max(1,Math.trunc(a)),o);e._scenariosPage!==l&&(e._scenariosPage=l);let s=(l-1)*r,d=n.slice(s,s+r),m=Math.max(1,l-2),c=Math.min(o,m+4),h=[];for(let S=m;S<=c;S+=1)h.push(N.default.createElement("button",{key:S,type:"button",className:S===l?"primary compact-button":"ghost compact-button",onClick:()=>e.setScenariosPage(S),disabled:S===l},S));let v=d.length?d.map((S,L)=>N.default.createElement(fm,{key:S.id,scenario:S,index:L,startIndex:s,scripts:t,isExpanded:e._expandedScenarios.has(S.id),expandedConditions:e._expandedConditions,onToggleScenario:e.toggleScenario,onUpdateScenario:e.updateScenario,onRemoveScenario:e.removeScenario,onAddCondition:e.addCondition,onRemoveCondition:e.removeCondition,onUpdateCondition:e.updateCondition,onEnableChildrenType:e.enableConditionChildrenType,onDisableChildrenType:e.disableConditionChildrenType,onEnableChildrenDirectType:e.enableConditionChildrenDirectType,onDisableChildrenDirectType:e.disableConditionChildrenDirectType,onToggleCondition:e.toggleCondition})):N.default.createElement("div",{className:"empty"},"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u043B\u044E\u0441 \u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438."),w=i>r?N.default.createElement(N.default.Fragment,null,N.default.createElement("section",{className:"scenarios-pagination"},N.default.createElement("button",{type:"button",className:"ghost compact-button",onClick:()=>e.setScenariosPage(l-1),disabled:l<=1},"\u041D\u0430\u0437\u0430\u0434"),N.default.createElement("div",{className:"scenarios-pagination-pages"},h),N.default.createElement("button",{type:"button",className:"ghost compact-button",onClick:()=>e.setScenariosPage(l+1),disabled:l>=o},"\u0412\u043F\u0435\u0440\u0435\u0434")),N.default.createElement("div",{className:"scenarios-pagination-meta"},"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E ",d.length," \u0438\u0437 ",i," \u2022 \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ",l," \u0438\u0437 ",o)):null;return N.default.createElement(N.default.Fragment,null,N.default.createElement("section",{className:"hero-card"},N.default.createElement("h1",null,"Scenarios"),N.default.createElement("p",null,"\u0417\u0434\u0435\u0441\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432. \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A."),N.default.createElement("div",{className:"toolbar"},N.default.createElement("button",{type:"button",className:"secondary",onClick:e.addScenario},"+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439"),N.default.createElement("button",{type:"button",className:"primary",onClick:e.saveConfig,disabled:e._saving},e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),e._error&&N.default.createElement("div",{className:"status error"},e._error),e._status&&N.default.createElement("div",{className:"status ok"},e._status)),N.default.createElement("div",{className:"scenario-list"},v),w,N.default.createElement("section",{className:"help-card"},N.default.createElement("div",null,N.default.createElement("strong",null,"\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0437\u0430\u043F\u0440\u043E\u0441")),N.default.createElement("pre",null,N.default.createElement("code",null,`curl -X POST http://localhost:8000/api/dialog/command-check \\
  -H "Content-Type: application/json" \\
  -d '{"clientId":"user-123"}'`)),N.default.createElement("div",{style:{marginTop:"12px"}},N.default.createElement("strong",null,"\u0427\u0442\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0432 \u0441\u043A\u0440\u0438\u043F\u0442")),N.default.createElement("div",null,"\u041F\u0440\u0438 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 ",N.default.createElement("code",null,"script.*")," \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: ",N.default.createElement("code",null,"dialog_payload"),", ",N.default.createElement("code",null,"dialog_children_type"),", ",N.default.createElement("code",null,"dialog_children_direct_type"),", ",N.default.createElement("code",null,"dialog_type"),", ",N.default.createElement("code",null,"dialog_parent_type"),", ",N.default.createElement("code",null,"dialog_value"),", ",N.default.createElement("code",null,"dialog_client_id"),", ",N.default.createElement("code",null,"dialog_device_id"),"."),N.default.createElement("pre",null,N.default.createElement("code",null,lm))))};var hm=(e,t,n,r,i="")=>{let o=e._isSecretVisible(t);return`
    <label>
      <span>${n}</span>
      <div class="secret-field">
        <input
          data-config-field="${t}"
          type="${o?"text":"password"}"
          value="${me(r??"")}"
          placeholder="${me(i)}"
          autocomplete="off"
          spellcheck="false"
        />
        <button
          type="button"
          class="ghost secret-toggle-button"
          data-action="toggle-secret"
          data-secret-field="${t}"
          title="${o?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"}"
          aria-label="${o?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"}"
        >${o?"Hide":"Show"}</button>
      </div>
    </label>
  `},eo=e=>`
      <section class="hero-card">
        <h1>Settings</h1>
        <p>\u041E\u0431\u0449\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0435\u0432 \u0438 Yandex TTS: IP, client_id, \u0442\u043E\u043A\u0435\u043D\u044B, timeout, voice/speed/folderId \u0438 \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.</p>
        <div class="config-grid">
          <label>
            <span>Base URL</span>
            <input data-config-field="base_url" value="${me(e._config.base_url)}" placeholder="http://127.0.0.1:8000" />
            <small>\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 POST \u043D\u0430 <code>{base_url}/api/dialog/command-check</code>.</small>
          </label>
          <label>
            <span>Client ID</span>
            <input data-config-field="client_id" value="${me(e._config.client_id)}" placeholder="user-123" />
            <small>\u041F\u043E\u043B\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0435\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A\u0430\u043A <code>{"clientId":"..."}</code>.</small>
          </label>
          ${hm(e,"timer_alarm_token","Authorization token",e._config.timer_alarm_token,"Bearer xxx")}
          <label class="field-narrow">
            <span>Timeout, \u0441\u0435\u043A\u0443\u043D\u0434</span>
            <input data-config-field="timeout" type="number" min="1" value="${me(e._config.timeout)}" />
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
          <label class="field-narrow">
            <span>\u0414\u043E\u0441\u0442\u0443\u043F \u043D\u0435-\u0430\u0434\u043C\u0438\u043D\u0430\u043C</span>
            <div class="switch-control">
              <input
                type="checkbox"
                data-config-field="allow_non_admin_panel"
                data-config-bool="true"
                ${e._config.allow_non_admin_panel?"checked":""}
              />
              <span class="switch-slider" aria-hidden="true"></span>
              <span class="switch-label">${e._config.allow_non_admin_panel?"\u0412\u043A\u043B\u044E\u0447\u0435\u043D":"\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D"}</span>
            </div>
          </label>
          <div class="field-span-2 settings-subsection">
            <div class="section-label">Yandex TTS</div>
            <div class="config-grid">
              ${hm(e,"yandex_tts_api_key","API Key",e._config.yandex_tts_api_key,"AQVN...")}
              <label>
                <span>folderId</span>
                <input data-config-field="yandex_tts_folder_id" value="${me(e._config.yandex_tts_folder_id)}" placeholder="b1g..." />
              </label>
              <label>
                <span>Voice</span>
                <select data-config-field="yandex_tts_voice">
                  ${["oksana","jane","omazh","zahar","ermil","silaerkan","erkanyavas","alyss","nick","alena","filipp"].map(t=>`<option value="${t}" ${String(e._config.yandex_tts_voice??"")===t?"selected":""}>${t}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Speed</span>
                <input data-config-field="yandex_tts_speed" type="number" min="0.1" max="3" step="0.1" value="${me(e._config.yandex_tts_speed)}" />
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
          <button type="button" class="primary" data-action="save" ${e._saving?"disabled":""}>${e._saving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"}</button>
        </div>
        ${e._error?`<div class="status error">${me(e._error)}</div>`:""}
        ${e._status?`<div class="status ok">${me(e._status)}</div>`:""}
      </section>
    `;var to=e=>{let t=e._logs.length?e._logs.map(n=>`
          <div class="log-item ${me(n.level)}">
            <div class="log-meta">
              <span class="log-time">${me(n.ts)}</span>
              <span class="log-level">${me(n.level)}</span>
            </div>
            <div class="log-message">${me(n.message)}</div>
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
    `};var no=e=>e._timerAlarmLoaded?`
      <section class="hero-card">
        <h1>Timer / Alarm</h1>
      </section>
      <dialog-custom-ui-timer-alarm></dialog-custom-ui-timer-alarm>
    `:(e._timerAlarmLoading||e._ensureTimerAlarmModule(),`
        <section class="hero-card">
          <h1>Timer / Alarm</h1>
          <div class="status ok">\u041C\u043E\u0434\u0443\u043B\u044C timer/alarm \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F...</div>
        </section>
      `);var ne=Be(je()),ro=e=>{let t=e._buildConfigPayload();return ne.default.createElement(ne.default.Fragment,null,ne.default.createElement("section",{className:"hero-card"},ne.default.createElement("h1",null,"JSON"),ne.default.createElement("p",null,"\u041C\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u0432 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0432\u043E\u0439 JSON \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0444\u043E\u0440\u043C\u0443."),ne.default.createElement("div",{className:"toolbar"},ne.default.createElement("button",{type:"button",className:"secondary",onClick:()=>e._downloadJson()},"\u0421\u043A\u0430\u0447\u0430\u0442\u044C JSON"),ne.default.createElement("button",{type:"button",className:"primary",onClick:()=>e._openJsonFilePicker()},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON"),ne.default.createElement("input",{type:"file",accept:".json,application/json",onChange:n=>e._importJsonFile(n.target.files[0]),hidden:!0})),e._error&&ne.default.createElement("div",{className:"status error"},e._error),e._status&&ne.default.createElement("div",{className:"status ok"},e._status)),ne.default.createElement("section",{className:"help-card"},ne.default.createElement("div",null,ne.default.createElement("strong",null,"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E JSON")),ne.default.createElement("pre",null,ne.default.createElement("code",null,JSON.stringify(t,null,2)))))};var I=Be(je()),gm=(e,t,n,r=999)=>{let i=t==="subVoice"?"subVoice":"subCommands",o=Array.isArray(e._yandexDraft?.[i])?e._yandexDraft[i]:[],a=o.length<r,l=String(e._yandexSubItemOpen?.[i]??""),s=o.length?o.map((d,m)=>{let c=String(d?.id??`${i}_${m}`),h=l===c,v=String(d?.text??"").trim()||"text";return I.default.createElement("details",{key:c,className:"yandex-item-accordion",open:h,onToggle:w=>e._setYandexSubItemOpen(t,h?"":c)},I.default.createElement("summary",{className:"condition-title"},v),I.default.createElement("div",{className:"yandex-sub-item-body"},I.default.createElement("div",{className:"device-row"},I.default.createElement("label",{className:"field-grow"},I.default.createElement("span",null,"text"),I.default.createElement("input",{"data-yandex-sub-field":"text","data-yandex-sub-type":i,"data-yandex-sub-index":m,value:d.text||"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442",onChange:w=>e._updateYandexDraftSubItem(t,m,"text",w.target.value,!0)})),I.default.createElement("button",{type:"button",className:"ghost device-remove-button",onClick:()=>e._removeYandexDraftSubItem(t,m)},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))))}):I.default.createElement("div",{className:"condition-preview"},"\u041F\u0443\u0441\u0442\u043E");return I.default.createElement("section",{className:"condition-card"},I.default.createElement("div",{className:"condition-title"},n),I.default.createElement("div",{className:"condition-body open"},s,I.default.createElement("div",{className:"yandex-sub-add-row"},I.default.createElement("button",{type:"button",className:"secondary yandex-sub-add-button",onClick:()=>e._addYandexDraftSubItem(t),disabled:!a},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))))},hg=(e,t)=>{let n=String(e._yandexActiveScenarioKey??"").trim(),r=I.default.createElement("div",{className:"yandex-tabs-toolbar"},I.default.createElement("label",{className:"yandex-scenario-select"},I.default.createElement("span",null,"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439"),I.default.createElement("select",{value:n,onChange:i=>e._setYandexActiveScenario(i.target.value)},t.map((i,o)=>{let a=String(i.mainCommand??"").trim(),l=i.mainCommand||`\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 ${o+1}`;return I.default.createElement("option",{key:a,value:a},l)}),I.default.createElement("option",{value:"__new__"},"\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439"))),I.default.createElement("button",{type:"button",className:"subtab-button",onClick:()=>e._setYandexActiveScenario("__new__")},"+ \u041D\u043E\u0432\u044B\u0439"));return I.default.createElement("section",{className:"hero-card"},r)},gg=e=>{let t=String(e._yandexActiveScenarioKey??"")==="__new__",n=t?"\u041D\u043E\u0432\u044B\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439":String(e._yandexDraft?.mainCommand??"").trim()||"\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439";return I.default.createElement("section",{className:"scenario-card expanded"},I.default.createElement("div",{className:"condition-header"},I.default.createElement("div",{className:"condition-heading"},I.default.createElement("span",{className:"condition-title"},t?"\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435":"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"),I.default.createElement("span",{className:"scenario-title"},n))),I.default.createElement("div",{className:"condition-body open"},I.default.createElement("div",{className:"condition-grid"},I.default.createElement("label",null,I.default.createElement("span",null,"mainCommand *"),I.default.createElement("input",{"data-yandex-field":"mainCommand",value:e._yandexDraft?.mainCommand||"",placeholder:"\u0412\u043A\u043B\u044E\u0447\u0438 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u043B\u0438\u0446\u0430",onChange:r=>e._updateYandexDraftField("mainCommand",r.target.value,!0)})),I.default.createElement("label",null,I.default.createElement("span",null,"voiceResponse"),I.default.createElement("input",{"data-yandex-field":"voiceResponse",value:e._yandexDraft?.voiceResponse||"",placeholder:"\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E",onChange:r=>e._updateYandexDraftField("voiceResponse",r.target.value,!0)})),I.default.createElement("label",{className:"field-span-2"},I.default.createElement("span",null,"accounts (\u0447\u0435\u0440\u0435\u0437 ;)"),I.default.createElement("input",{"data-yandex-field":"accounts",value:e._yandexDraft?.accounts||"",placeholder:"mihailhimei;another_account",onChange:r=>e._updateYandexDraftField("accounts",r.target.value,!0)}))),gm(e,"subVoice","subVoice (\u0434\u043E 3)",3),gm(e,"subCommands","subCommands"),I.default.createElement("div",{className:"toolbar"},I.default.createElement("button",{type:"button",className:"primary",onClick:()=>e._saveYandexScenarioFromModal(),disabled:e._yandexSaving},e._yandexSaving?"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),!t&&I.default.createElement("button",{type:"button",className:"ghost",onClick:()=>e._deleteActiveYandexScenario(),disabled:e._yandexSaving},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))))},io=e=>{let t=Array.isArray(e._yandexScenarios)?e._yandexScenarios:[];return I.default.createElement(I.default.Fragment,null,I.default.createElement("section",{className:"hero-card"},I.default.createElement("h1",null,"\u042F\u043D\u0434\u0435\u043A\u0441 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438"),I.default.createElement("p",null,"\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: ",I.default.createElement("code",null,"homeassistant/yandex_intents.yaml"),". \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u0444\u043E\u0440\u043C\u0435 \u043D\u0438\u0436\u0435."),I.default.createElement("div",{className:"toolbar"},I.default.createElement("button",{type:"button",className:"ghost",onClick:()=>e._loadYandexScenarios(),disabled:e._yandexLoading},e._yandexLoading?"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435...":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C")),e._yandexStatus&&I.default.createElement("div",{className:"status ok"},e._yandexStatus),e._yandexError&&I.default.createElement("div",{className:"status error"},e._yandexError)),hg(e,t),gg(e))};var _m=Be(je()),oo=()=>_m.default.createElement("dialog-custom-ui-create-scenario",null);var _g=({ctx:e})=>{let t=e._resolveAllowedTab(e._activeTab),n=e._isCurrentUserAdmin()?[{id:"scenarios",label:"Scenarios"},{id:"create-scenario",label:"Create Scenario"},{id:"timer-alarm",label:"Timer / Alarm"},{id:"settings",label:"Settings"},{id:"json-tools",label:"JSON Tools"},{id:"logs",label:"Logs"},{id:"yandex-scenarios",label:"Yandex Scenarios"}]:[{id:"scenarios",label:"Scenarios"},{id:"create-scenario",label:"Create Scenario"},{id:"timer-alarm",label:"Timer / Alarm"},{id:"logs",label:"Logs"}],r=(()=>{switch(t){case"scenarios":return br(e);case"create-scenario":return oo(e);case"timer-alarm":return no(e);case"settings":return eo(e);case"json-tools":return ro(e);case"logs":return to(e);case"yandex-scenarios":return io(e);default:return br(e)}})(),i=n.map(o=>qt.default.createElement("button",{key:o.id,type:"button",className:o.id===t?"primary":"ghost",onClick:()=>e._setActiveTab(o.id)},o.label));return qt.default.createElement("div",{className:"panel"},qt.default.createElement("style",null,e._styles()),qt.default.createElement("div",{className:"panel-content"},qt.default.createElement("section",{className:"tabs-section"},qt.default.createElement("div",{className:"tabs"},i),r)))},ym=_g;var vm=(e,t)=>{let n=Math.max(1,Number(e._scenariosPageSize)||20),r=Array.isArray(e._config?.scenarios)?e._config.scenarios.length:0,i=Math.max(1,Math.ceil(r/n)),o=Number(t),a=Number.isFinite(o)?Math.trunc(o):1;return Math.min(Math.max(1,a),i)},Sm=(e,t)=>{e._expandedScenarios.has(t)?e._expandedScenarios.delete(t):e._expandedScenarios.add(t),e._forceUpdate()},bm=(e,t)=>{e._expandedConditions.has(t)?e._expandedConditions.delete(t):e._expandedConditions.add(t),e._forceUpdate()},wm=(e,t,n,r=!1)=>{e._config={...e._config,[t]:n},t==="theme"&&e._applyTheme(),e._status="",e._error=""},Cm=e=>{e._deviceAccordionOpen=!e._deviceAccordionOpen,e._forceUpdate()},Tm=e=>{let t=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[];t.push(""),e._config={...e._config,timer_alarm_device_ids:t},e._status="",e._error="",e._render()},km=(e,t,n)=>{let r=Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""];r[t]=n,e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error=""},Dm=(e,t)=>{let r=(Array.isArray(e._config.timer_alarm_device_ids)?[...e._config.timer_alarm_device_ids]:[""]).filter((i,o)=>o!==t);e._config={...e._config,timer_alarm_device_ids:e._normalizeTimerAlarmDeviceIdsForUi(r)},e._status="",e._error="",e._forceUpdate()},Im=(e,t,n,r,i=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(o=>o.id===t?{...o,[n]:r}:o)},e._status="",e._error="",e._forceUpdate()},Em=(e,t,n,r,i,o=!1)=>{e._config={...e._config,scenarios:e._config.scenarios.map(a=>a.id===t?{...a,conditions:a.conditions.map(l=>l.id===n?{...l,[r]:i}:l)}:a)},e._status="",e._error="",e._forceUpdate()},Am=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!0,children_type:i.children_type??""}:i)}:r)},e._status="",e._error="",e._forceUpdate()},Mm=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_type_enabled:!1,children_type:""}:i)}:r)},e._status="",e._error="",e._forceUpdate()},Nm=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!0,children_direct_type:i.children_direct_type??""}:i)}:r)},e._status="",e._error="",e._forceUpdate()},xm=(e,t,n)=>{e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:r.conditions.map(i=>i.id===n?{...i,children_direct_type_enabled:!1,children_direct_type:""}:i)}:r)},e._status="",e._error="",e._forceUpdate()},$m=(e,t)=>{let n=Tn();e._expandedConditions.add(n.id),e._config={...e._config,scenarios:e._config.scenarios.map(r=>r.id===t?{...r,conditions:[...r.conditions,n]}:r)},e._status="",e._error="",e._forceUpdate()},Pm=(e,t,n)=>{e._expandedConditions.delete(n),e._config={...e._config,scenarios:e._config.scenarios.map(r=>{if(r.id!==t)return r;let i=r.conditions.filter(o=>o.id!==n);return{...r,conditions:i.length?i:[Tn()]}})},e._status="",e._error="",e._forceUpdate()},Lm=e=>{let t=Date.now();if(t<e._addScenarioLockUntil)return;e._addScenarioLockUntil=t+300;let n=pm();e._expandedScenarios.add(n.id),e._config={...e._config,scenarios:[n,...e._config.scenarios]},e._scenariosPage=1,e._status="",e._forceUpdate(),window.requestAnimationFrame(()=>e._scrollScenarioIntoView(n.id))},Um=(e,t)=>{let n=globalThis.CSS?.escape?globalThis.CSS.escape(t):t;e.shadowRoot.querySelector(`[data-scenario-card-id="${n}"]`)?.scrollIntoView({block:"start",behavior:"smooth"})},zm=(e,t)=>{e._expandedScenarios.delete(t),e._config={...e._config,scenarios:e._config.scenarios.filter(n=>n.id!==t)},e._scenariosPage=vm(e,e._scenariosPage),e._status="",e._forceUpdate()},Om=(e,t)=>{let n=vm(e,t);n!==e._scenariosPage&&(e._scenariosPage=n,e._forceUpdate())};var Fm=(e,t)=>{e._reactRoot=null,e._hass=null,e._config={...t},e._logs=[],e._activeTab="scenarios",e._expandedScenarios=new Set,e._expandedConditions=new Set,e._scenariosPage=1,e._scenariosPageSize=20,e._loaded=!1,e._loading=!1,e._saving=!1,e._loadingLogs=!1,e._error="",e._status="",e._accessDenied=!1,e._logsTimer=null,e._timerAlarmLoaded=!1,e._timerAlarmLoading=!1,e._timerAlarmLoadPromise=null,e._deviceAccordionOpen=!0,e._addScenarioLockUntil=0,e._yandexLoaded=!1,e._yandexLoading=!1,e._yandexSaving=!1,e._yandexScenarios=[],e._yandexStatus="",e._yandexError="",e._yandexActiveScenarioKey="",e._yandexEditorOpen=!1,e._yandexDraft={},e._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},e._yandexSubItemOpen={subVoice:"",subCommands:""},e._visibleSecrets={timer_alarm_token:!1,yandex_tts_api_key:!1}};var Bm=`
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
`;var yg=({html:e})=>ao.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}),jl=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),Fm(this,Sr)}set hass(t){let n=!this._hass;if(this._hass=t,!this._loaded&&!this._loading){this._loadConfig();return}(n||!this.shadowRoot.innerHTML)&&this._render()}get hass(){return this._hass}connectedCallback(){this._applyTheme(),this.shadowRoot.innerHTML||this._render()}disconnectedCallback(){this._stopLogsPolling(),this._unmountReact()}_mountReact(t){this._reactRoot||(this._reactRoot=(0,Bl.createRoot)(this.shadowRoot)),(0,Fl.flushSync)(()=>{this._reactRoot.render(ao.default.createElement(yg,{html:t}))})}_unmountReact(){this._reactRoot&&(this._reactRoot.unmount(),this._reactRoot=null)}async _ensureTimerAlarmModule(){if(!this._timerAlarmLoaded){if(!this._timerAlarmLoadPromise){this._timerAlarmLoading=!0;let t=`${zl}${zl.includes("?")?"&":"?"}ts=${Date.now()}`;this._timerAlarmLoadPromise=import(t).then(()=>{this._timerAlarmLoaded=!0,this._error="",this._status=""}).catch(n=>{this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C timer/alarm.",this._timerAlarmLoaded=!1}).finally(()=>{this._timerAlarmLoading=!1,this._timerAlarmLoadPromise=null,this._render()})}return this._timerAlarmLoadPromise}}async _loadConfig(){this._loading=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...Sr,...t,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(t.timer_alarm_device_ids??[]),scenarios:Array.isArray(t.scenarios)?t.scenarios.map(n=>this._normalizeScenarioForUi(n)):[]},this._applyTheme(),this._expandedScenarios=new Set,this._scenariosPage=1,this._accessDenied=!1,this._error=""}catch(t){let n=String(t?.code??"").trim().toLowerCase(),r=String(t?.message??"").toLowerCase();this._accessDenied=n==="unauthorized"||r.includes("access denied"),this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E Dialog Custom UI."}finally{this._loaded=!0,this._loading=!1,this._render(),this._activeTab==="logs"&&this._startLogsPolling()}}async _loadLogs(){if(!(!this._hass||this._loadingLogs)){this._loadingLogs=!0,this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_logs"});this._logs=Array.isArray(t.logs)?t.logs:[]}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C logs."}finally{this._loadingLogs=!1,this._render()}}}_startLogsPolling(){this._stopLogsPolling(),this._loadLogs(),this._logsTimer=window.setInterval(()=>{this._activeTab==="logs"&&this._loadLogs()},sm)}_stopLogsPolling(){this._logsTimer&&(window.clearInterval(this._logsTimer),this._logsTimer=null)}_scripts(){return this._hass?Object.values(this._hass.states).filter(t=>t.entity_id.startsWith("script.")).sort((t,n)=>{let r=t.attributes.friendly_name||t.entity_id,i=n.attributes.friendly_name||n.entity_id;return r.localeCompare(i,"ru")}):[]}_isCurrentUserAdmin(){return!!this._hass?.user?.is_admin}_isTabAllowed(t){return this._isCurrentUserAdmin()?!0:t!=="settings"}_resolveAllowedTab(t){return this._isTabAllowed(t)?t:"scenarios"}_setActiveTab(t){if(this._accessDenied)return;let n=this._resolveAllowedTab(t);this._activeTab=n,this._status="",this._error="",this._render(),n==="logs"?this._startLogsPolling():(this._stopLogsPolling(),n==="timer-alarm"&&this._ensureTimerAlarmModule(),n==="yandex-scenarios"&&this._loadYandexScenarios())}_newYandexSubItem(){return{id:globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}_${Math.random().toString(16).slice(2,8)}`,text:""}}_newYandexDraft(){return{mainCommand:"",voiceResponse:"",accounts:"",subVoice:[],subCommands:[]}}_normalizeYandexScenarioForUi(t){let n=r=>Array.isArray(r)?r.map(i=>({id:String(i?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_sub_${Date.now()}`)),text:String(i?.text??"").trim()})).filter(i=>i.text):[];return{id:String(t?.id??(globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`yandex_${Date.now()}`)),mainCommand:String(t?.mainCommand??"").trim(),voiceResponse:String(t?.voiceResponse??"").trim(),accounts:String(t?.accounts??"").trim(),subVoice:n(t?.subVoice),subCommands:n(t?.subCommands)}}_cloneYandexDraft(t){let n=this._normalizeYandexScenarioForUi(t??{});return{...n,subVoice:Array.isArray(n.subVoice)?n.subVoice.map(r=>({...r})):[],subCommands:Array.isArray(n.subCommands)?n.subCommands.map(r=>({...r})):[]}}_yandexScenarioKey(t){return String(t?.mainCommand??"").trim()}_findYandexScenarioByKey(t){let n=String(t??"").trim();return this._yandexScenarios.find(r=>this._yandexScenarioKey(r)===n)||null}_syncYandexSelection(t=""){let n=String(t||this._yandexActiveScenarioKey||"").trim(),r=Array.isArray(this._yandexScenarios)?this._yandexScenarios:[];if(!r.length){this._yandexActiveScenarioKey="__new__",this._yandexDraft=this._newYandexDraft(),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""};return}let i=this._findYandexScenarioByKey(n)||r[0];this._yandexActiveScenarioKey=this._yandexScenarioKey(i),this._yandexDraft=this._cloneYandexDraft(i),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""}}async _loadYandexScenarios(){if(!(!this._hass||this._yandexLoading)){this._yandexLoading=!0,this._yandexError="",this._yandexLoaded||(this._yandexStatus=""),this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/get_yandex_scenarios"}),n=Array.isArray(t?.scenarios)?t.scenarios:[];this._yandexScenarios=n.map(r=>this._normalizeYandexScenarioForUi(r)),this._syncYandexSelection(),this._yandexLoaded=!0,this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B.",this._yandexError=""}catch(t){this._yandexError=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C yandex_intents.yaml.",this._yandexStatus=""}finally{this._yandexLoading=!1,this._render()}}}_startYandexScenarioCreate(){this._yandexDraft=this._newYandexDraft(),this._yandexActiveScenarioKey="__new__",this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexStatus="",this._yandexError="",this._render()}_setYandexActiveScenario(t){let n=String(t??"").trim();if(!n)return;if(n==="__new__"){this._startYandexScenarioCreate();return}let r=this._findYandexScenarioByKey(n);r&&(this._yandexActiveScenarioKey=n,this._yandexDraft=this._cloneYandexDraft(r),this._yandexEditorOpen=!1,this._yandexSubEditorsOpen={subVoice:!1,subCommands:!1},this._yandexSubItemOpen={subVoice:"",subCommands:""},this._yandexError="",this._render())}_setYandexSubEditorOpen(t,n){let r=t==="subVoice"?"subVoice":"subCommands";this._yandexSubEditorsOpen={...this._yandexSubEditorsOpen||{},[r]:!!n}}_setYandexSubItemOpen(t,n){let r=t==="subVoice"?"subVoice":"subCommands";this._yandexSubItemOpen={...this._yandexSubItemOpen||{},[r]:String(n??"")}}_toggleYandexEditorAccordion(){this._yandexEditorOpen=!this._yandexEditorOpen,this._render()}_updateYandexDraftField(t,n,r=!1){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft()),this._yandexDraft={...this._yandexDraft,[t]:n},this._yandexError="",r&&this._render()}_addYandexDraftSubItem(t){(!this._yandexDraft||typeof this._yandexDraft!="object")&&(this._yandexDraft=this._newYandexDraft());let n=t==="subVoice"?"subVoice":"subCommands",r=Array.isArray(this._yandexDraft[n])?[...this._yandexDraft[n]]:[];if(n==="subVoice"&&r.length>=3)return;let i=this._newYandexSubItem();r.push(i),this._yandexDraft={...this._yandexDraft,[n]:r},this._setYandexSubEditorOpen(n,!0),this._setYandexSubItemOpen(n,i.id),this._yandexError="",this._render()}_removeYandexDraftSubItem(t,n){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let r=t==="subVoice"?"subVoice":"subCommands",o=(Array.isArray(this._yandexDraft[r])?[...this._yandexDraft[r]]:[]).filter((l,s)=>s!==n);this._yandexDraft={...this._yandexDraft,[r]:o};let a=String(this._yandexSubItemOpen?.[r]??"");a&&!o.some(l=>String(l?.id??"")===a)&&this._setYandexSubItemOpen(r,""),this._yandexError="",this._render()}_updateYandexDraftSubItem(t,n,r,i,o=!1){if(!this._yandexDraft||typeof this._yandexDraft!="object")return;let a=t==="subVoice"?"subVoice":"subCommands",l=Array.isArray(this._yandexDraft[a])?[...this._yandexDraft[a]]:[];this._yandexDraft={...this._yandexDraft,[a]:l.map((s,d)=>d===n?{...s,[r]:i}:s)},this._yandexError="",o&&this._render()}_serializeYandexScenarioDraft(){let t=this._yandexDraft||this._newYandexDraft(),n=r=>(Array.isArray(r)?r:[]).map(i=>({text:String(i?.text??"").trim()})).filter(i=>i.text);return{mainCommand:String(t.mainCommand??"").trim(),voiceResponse:String(t.voiceResponse??"").trim(),accounts:String(t.accounts??"").trim(),subVoice:n(t.subVoice),subCommands:n(t.subCommands)}}async _saveYandexScenarioFromModal(){let t=this._serializeYandexScenarioDraft();if(!t.mainCommand){this._yandexError="\u041F\u043E\u043B\u0435 mainCommand \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E.",this._render();return}this._yandexSaving=!0,this._yandexError="",this._render();try{let n=String(this._yandexActiveScenarioKey??"").trim(),r=n&&n!=="__new__"?this._yandexScenarios.map(a=>this._yandexScenarioKey(a)===n?t:a):[...this._yandexScenarios,t],i=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:r}),o=Array.isArray(i?.scenarios)?i.scenarios:[];this._yandexScenarios=o.map(a=>this._normalizeYandexScenarioForUi(a)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D \u0438 \u0444\u0430\u0439\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection(t.mainCommand)}catch(n){this._yandexError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}async _deleteActiveYandexScenario(){let t=String(this._yandexActiveScenarioKey??"").trim();if(!(!t||t==="__new__")){this._yandexSaving=!0,this._yandexError="",this._render();try{let n=this._yandexScenarios.filter(o=>this._yandexScenarioKey(o)!==t),r=await this._hass.callWS({type:"dialog_custom_ui/save_yandex_scenarios",scenarios:n}),i=Array.isArray(r?.scenarios)?r.scenarios:[];this._yandexScenarios=i.map(o=>this._normalizeYandexScenarioForUi(o)),this._yandexStatus="\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0443\u0434\u0430\u043B\u0435\u043D.",this._yandexLoaded=!0,this._syncYandexSelection()}catch(n){this._yandexError=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439 \u0438\u0437 yandex_intents.yaml."}finally{this._yandexSaving=!1,this._render()}}}_applyTheme(){let t=String(this._config?.theme??"light").toLowerCase()==="dark"?"dark":"light";this._config={...this._config,theme:t},this.setAttribute("data-theme",t)}_renderSettings(){return eo(this)}_toggleScenario(t){return Sm(this,t)}_toggleCondition(t){return bm(this,t)}_updateConfigField(t,n,r=!1){return wm(this,t,n,r)}_isSecretVisible(t){return!!this._visibleSecrets?.[t]}_toggleSecretField(t){this._visibleSecrets={...this._visibleSecrets||{},[t]:!this._isSecretVisible(t)},this._render()}_normalizeTimerAlarmDeviceIdsForUi(t){let r=(Array.isArray(t)?t:typeof t=="string"?[t]:[]).map(i=>String(i??"").trim());return r.length?r:[""]}_timerAlarmDeviceIdsForSave(){return this._normalizeTimerAlarmDeviceIdsForUi(this._config.timer_alarm_device_ids).filter(t=>t)}_toggleDeviceAccordion(){return Cm(this)}_addTimerAlarmDeviceId(){return Tm(this)}_updateTimerAlarmDeviceId(t,n){return km(this,t,n)}_removeTimerAlarmDeviceId(t){return Dm(this,t)}_updateScenario(t,n,r,i=!1){return Im(this,t,n,r,i)}_normalizeScenarioForUi(t){let n=this._normalizeConditionsForUi(t);return{...t,conditions:n}}_serializeScenario(t){let n=(Array.isArray(t.conditions)?t.conditions:[]).flatMap(i=>this._serializeCondition(i)).filter(Boolean),r={id:t.id,name:t.name,script_entity_id:t.script_entity_id,conditions:n};return n.length===1&&(r.parent_type=n[0].parent_type??"",n[0].children_type&&(r.children_type=n[0].children_type),n[0].children_direct_type&&(r.children_direct_type=n[0].children_direct_type)),r}_normalizeConditionsForUi(t){if(Array.isArray(t.conditions)&&t.conditions.length)return t.conditions.map(l=>this._normalizeConditionForUi(l));let n=String(t.parent_type??"").split(";").map(l=>l.trim()),r=String(t.children_type??t.type??"").split(";").map(l=>l.trim()),i=this._normalizeChildrenDirectTypeForUi(t.children_direct_type),o=Math.max(n.length,r.length,i.length,1),a=[];for(let l=0;l<o;l+=1){let s=this._normalizeConditionForUi({parent_type:n[l]??"",children_type:r[l]??"",children_direct_type:i[l]??""});(s.parent_type||s.children_type_enabled||s.children_direct_type_enabled)&&a.push(s)}return a.length?a:[Tn()]}_normalizeConditionForUi(t){let n=String(t.children_type??t.type??"").trim(),r=this._normalizeChildrenDirectTypeForUi(t.children_direct_type).join(";");return{id:String(t.id??Ol()),parent_type:String(t.parent_type??"").trim(),children_type:n,children_type_enabled:n!=="",children_direct_type:r,children_direct_type_enabled:r!==""}}_serializeCondition(t){let n=String(t.parent_type??"").trim(),r=String(t.children_type??"").trim(),i=String(t.children_direct_type??"").trim();if(!n&&!r&&!i)return[];let o=n.split(";").map(d=>d.trim()),a=r.split(";").map(d=>d.trim()),l=Math.max(o.length,a.length,1),s=[];for(let d=0;d<l;d+=1){let m=o[d]??"",c=a[d]??"";if(!m&&!c)continue;let h={parent_type:m};t.children_type_enabled&&c&&(h.children_type=c),t.children_direct_type_enabled&&i&&(h.children_direct_type=i),s.push(h)}return s}_updateCondition(t,n,r,i,o=!1){return Em(this,t,n,r,i,o)}_normalizeChildrenDirectTypeForUi(t){if(Array.isArray(t))return t.map(n=>typeof n=="string"?n.trim():n&&typeof n=="object"?String(n.mapping_type??n.mappingType??n.type??"").trim():"").filter(Boolean);if(t&&typeof t=="object"){let n=String(t.mapping_type??t.mappingType??t.type??"").trim();return n?[n]:[]}return String(t??"").split(";").map(n=>n.trim()).filter(Boolean)}_enableConditionChildrenType(t,n){return Am(this,t,n)}_disableConditionChildrenType(t,n){return Mm(this,t,n)}_enableConditionChildrenDirectType(t,n){return Nm(this,t,n)}_disableConditionChildrenDirectType(t,n){return xm(this,t,n)}_addCondition(t){return $m(this,t)}_removeCondition(t,n){return Pm(this,t,n)}_addScenario(){return Lm(this)}_scrollScenarioIntoView(t){return Um(this,t)}_removeScenario(t){return zm(this,t)}_setScenariosPage(t){return Om(this,t)}_validate(){return this._config.base_url.trim()?this._config.client_id.trim()?this._config.scenarios.find(n=>{let r=Array.isArray(n.conditions)?n.conditions:[];return r.length?!!r.find(o=>{let a=String(o.children_type??"").trim(),l=String(o.children_direct_type??"").trim();return!!(!String(o.parent_type??"").trim()&&!a&&!l||o.children_type_enabled&&!a||o.children_direct_type_enabled&&!l)})||!String(n.script_entity_id??"").trim():!0})?"\u0423 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u0443\u0441\u043B\u043E\u0432\u0438\u0435. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D parent_type, children_type \u0438\u043B\u0438 children_direct_type. \u0415\u0441\u043B\u0438 children_type \u0438\u043B\u0438 children_direct_type \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B, \u043E\u043D\u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C\u0438. \u0422\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D script.":"":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 client_id.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 base URL \u0434\u043B\u044F \u043E\u043F\u0440\u043E\u0441\u0430."}_buildConfigPayload(){return{base_url:this._config.base_url,client_id:this._config.client_id,allow_non_admin_panel:!!this._config.allow_non_admin_panel,timer_alarm_token:this._config.timer_alarm_token,yandex_tts_api_key:this._config.yandex_tts_api_key,yandex_tts_folder_id:this._config.yandex_tts_folder_id,yandex_tts_lang:this._config.yandex_tts_lang,yandex_tts_codec:this._config.yandex_tts_codec,yandex_tts_voice:this._config.yandex_tts_voice,yandex_tts_emotion:this._config.yandex_tts_emotion,yandex_tts_speed:Number(this._config.yandex_tts_speed)||1.1,theme:this._config.theme,timer_alarm_device_ids:this._timerAlarmDeviceIdsForSave(),timeout:Number(this._config.timeout)||10,scenarios:this._config.scenarios.map(t=>this._serializeScenario(t))}}_downloadJson(){let t=this._buildConfigPayload(),n=new Blob([`${JSON.stringify(t,null,2)}
`],{type:"application/json"}),r=URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download="dialog-custom-ui-config.json",i.click(),URL.revokeObjectURL(r),this._status="JSON \u0441\u043A\u0430\u0447\u0430\u043D.",this._error="",this._render()}_openJsonFilePicker(){this.shadowRoot.querySelector('[data-action="import-json-input"]')?.click()}_openYandexTtsFilePicker(){this.shadowRoot.querySelector('[data-action="import-yandex-tts-input"]')?.click()}_arrayBufferToBase64(t){let n=new Uint8Array(t),r=32768,i="";for(let o=0;o<n.length;o+=r){let a=n.subarray(o,o+r);i+=String.fromCharCode(...a)}return btoa(i)}_base64ToUint8Array(t){let n=atob(String(t??"")),r=new Uint8Array(n.length);for(let i=0;i<n.length;i+=1)r[i]=n.charCodeAt(i);return r}async _downloadYandexTtsFiles(){if(this._hass){this._error="",this._status="",this._render();try{let t=await this._hass.callWS({type:"dialog_custom_ui/export_yandex_tts_files"}),n=String(t?.filename??"yandex-tts-files.zip").trim()||"yandex-tts-files.zip",r=this._base64ToUint8Array(t?.zip_base64??""),i=new Blob([r],{type:"application/zip"}),o=URL.createObjectURL(i),a=document.createElement("a");a.href=o,a.download=n,a.click(),URL.revokeObjectURL(o),this._status="\u0410\u0440\u0445\u0438\u0432 TTS \u0441\u043A\u0430\u0447\u0430\u043D."}catch(t){this._error=t?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0430\u0440\u0445\u0438\u0432 TTS.",this._status=""}finally{this._render()}}}async _importYandexTtsArchive(t){if(!t)return;this._error="",this._status="",this._render();try{let r=await t.arrayBuffer(),i=this._arrayBufferToBase64(r),o=await this._hass.callWS({type:"dialog_custom_ui/import_yandex_tts_files",zip_base64:i}),a=Number(o?.imported_count)||0,l=Number(o?.skipped_count)||0;this._status=`\u0418\u043C\u043F\u043E\u0440\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D: \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E ${a}, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E \u0434\u0443\u0431\u043B\u0435\u0439 ${l}.`}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0430\u0440\u0445\u0438\u0432 TTS.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-yandex-tts-input"]');n&&(n.value=""),this._render()}async _importJsonFile(t){if(!t)return;try{let r=await t.text(),i=JSON.parse(r),o=Array.isArray(i.scenarios)?i.scenarios:[];this._config={...Sr,...i,timeout:Number(i.timeout)||10,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(i.timer_alarm_device_ids??[]),scenarios:o.map(a=>this._normalizeScenarioForUi(a))},this._applyTheme(),this._expandedScenarios=new Set(this._config.scenarios.map(a=>a.id)),this._scenariosPage=1,this._status="JSON \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u0432 \u0444\u043E\u0440\u043C\u0443.",this._error=""}catch(r){this._error=r?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C JSON.",this._status=""}let n=this.shadowRoot.querySelector('[data-action="import-json-input"]');n&&(n.value=""),this._render()}async _save(){let t=this._validate();if(t){this._error=t,this._status="",this._render();return}this._saving=!0,this._error="",this._status="",this._render();try{let n=this._buildConfigPayload();await this._hass.callWS({type:"dialog_custom_ui/save_config",...n});let r=await this._hass.callWS({type:"dialog_custom_ui/get_config"});this._config={...Sr,...r,timer_alarm_device_ids:this._normalizeTimerAlarmDeviceIdsForUi(r.timer_alarm_device_ids??[]),scenarios:Array.isArray(r.scenarios)?r.scenarios.map(i=>this._normalizeScenarioForUi(i)):[]},this._applyTheme(),this._scenariosPage=1,this._status="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B."}catch(n){this._error=n?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438."}finally{this._saving=!1,this._render()}}_swallowUiEvent(t){t.stopPropagation()}_bindEvents(){let t=this.shadowRoot;if(!t)return;let n=dm(t);um(this,t,n),cm(this,t,n)}async _resetCommandsCache(){let t=String(this._config.base_url??"").trim().replace(/\/$/,"");if(!t){this._error="\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 Base URL \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 Settings.",this._status="",this._render();return}this._error="",this._status="",this._render();let n=`${t}/api/setting/commands`,r={};this._config.timer_alarm_token&&(r.Authorization=this._config.timer_alarm_token),r["Content-Type"]="application/json";try{let i=await fetch(n,{method:"POST",headers:r,body:JSON.stringify({clientId:String(this._config.client_id??"").trim()})});if((i.status===405||i.status===404)&&(i=await fetch(n,{method:"GET",headers:this._config.timer_alarm_token?{Authorization:this._config.timer_alarm_token}:{}})),!i.ok)throw new Error(`HTTP ${i.status}`);this._status="\u041A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434 \u0441\u0431\u0440\u043E\u0448\u0435\u043D."}catch(i){this._error=i?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u044D\u0448 \u043A\u043E\u043C\u0430\u043D\u0434."}finally{this._render()}}_renderScenarios(){return br(this)}_renderLogs(){return to(this)}_renderTimerAlarm(){return no(this)}_renderJsonTools(){return ro(this)}_renderYandexScenarios(){return io(this)}_renderCreateScenario(){return oo()}_renderActiveTopLevelPage(){return renderActiveTopLevelPage(this)}_render(){(0,Fl.flushSync)(()=>{this._reactRoot||(this._reactRoot=(0,Bl.createRoot)(this.shadowRoot)),this._reactRoot.render(ao.default.createElement(ym,{ctx:this}))}),this._bindEvents(),this._syncEmbeddedTimerAlarmHass()}_forceUpdate(){this._render()}_styles(){return Bm}_syncEmbeddedTimerAlarmHass(){if(!this._hass||!this.shadowRoot)return;let t=this.shadowRoot.querySelector("dialog-custom-ui-timer-alarm");t&&(t.hass=this._hass,t.config={theme:this._config.theme})}};customElements.get("dialog-custom-ui-panel")||customElements.define("dialog-custom-ui-panel",jl);
