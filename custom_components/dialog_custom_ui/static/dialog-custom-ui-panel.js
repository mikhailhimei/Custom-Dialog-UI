function Bd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Us = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function vp() {
  if (cd) return fe;
  cd = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), g = Symbol.iterator;
  function T(N) {
    return N === null || typeof N != "object" ? null : (N = g && N[g] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, $ = {};
  function w(N, j, ce) {
    this.props = N, this.context = j, this.refs = $, this.updater = ce || M;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(N, j) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, j, "setState");
  }, w.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function P() {
  }
  P.prototype = w.prototype;
  function L(N, j, ce) {
    this.props = N, this.context = j, this.refs = $, this.updater = ce || M;
  }
  var z = L.prototype = new P();
  z.constructor = L, D(z, w.prototype), z.isPureReactComponent = !0;
  var H = Array.isArray, A = Object.prototype.hasOwnProperty, O = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(N, j, ce) {
    var me, ve = {}, ye = null, Ne = null;
    if (j != null) for (me in j.ref !== void 0 && (Ne = j.ref), j.key !== void 0 && (ye = "" + j.key), j) A.call(j, me) && !X.hasOwnProperty(me) && (ve[me] = j[me]);
    var ke = arguments.length - 2;
    if (ke === 1) ve.children = ce;
    else if (1 < ke) {
      for (var Pe = Array(ke), st = 0; st < ke; st++) Pe[st] = arguments[st + 2];
      ve.children = Pe;
    }
    if (N && N.defaultProps) for (me in ke = N.defaultProps, ke) ve[me] === void 0 && (ve[me] = ke[me]);
    return { $$typeof: l, type: N, key: ye, ref: Ne, props: ve, _owner: O.current };
  }
  function _e(N, j) {
    return { $$typeof: l, type: N.type, key: j, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function Ee(N) {
    return typeof N == "object" && N !== null && N.$$typeof === l;
  }
  function pe(N) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ce) {
      return j[ce];
    });
  }
  var Ce = /\/+/g;
  function ue(N, j) {
    return typeof N == "object" && N !== null && N.key != null ? pe("" + N.key) : j.toString(36);
  }
  function ie(N, j, ce, me, ve) {
    var ye = typeof N;
    (ye === "undefined" || ye === "boolean") && (N = null);
    var Ne = !1;
    if (N === null) Ne = !0;
    else switch (ye) {
      case "string":
      case "number":
        Ne = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case l:
          case o:
            Ne = !0;
        }
    }
    if (Ne) return Ne = N, ve = ve(Ne), N = me === "" ? "." + ue(Ne, 0) : me, H(ve) ? (ce = "", N != null && (ce = N.replace(Ce, "$&/") + "/"), ie(ve, j, ce, "", function(st) {
      return st;
    })) : ve != null && (Ee(ve) && (ve = _e(ve, ce + (!ve.key || Ne && Ne.key === ve.key ? "" : ("" + ve.key).replace(Ce, "$&/") + "/") + N)), j.push(ve)), 1;
    if (Ne = 0, me = me === "" ? "." : me + ":", H(N)) for (var ke = 0; ke < N.length; ke++) {
      ye = N[ke];
      var Pe = me + ue(ye, ke);
      Ne += ie(ye, j, ce, Pe, ve);
    }
    else if (Pe = T(N), typeof Pe == "function") for (N = Pe.call(N), ke = 0; !(ye = N.next()).done; ) ye = ye.value, Pe = me + ue(ye, ke++), Ne += ie(ye, j, ce, Pe, ve);
    else if (ye === "object") throw j = String(N), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return Ne;
  }
  function q(N, j, ce) {
    if (N == null) return N;
    var me = [], ve = 0;
    return ie(N, me, "", "", function(ye) {
      return j.call(ce, ye, ve++);
    }), me;
  }
  function W(N) {
    if (N._status === -1) {
      var j = N._result;
      j = j(), j.then(function(ce) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ce);
      }, function(ce) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ce);
      }), N._status === -1 && (N._status = 0, N._result = j);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var de = { current: null }, V = { transition: null }, oe = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: V, ReactCurrentOwner: O };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: q, forEach: function(N, j, ce) {
    q(N, function() {
      j.apply(this, arguments);
    }, ce);
  }, count: function(N) {
    var j = 0;
    return q(N, function() {
      j++;
    }), j;
  }, toArray: function(N) {
    return q(N, function(j) {
      return j;
    }) || [];
  }, only: function(N) {
    if (!Ee(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, fe.Component = w, fe.Fragment = i, fe.Profiler = d, fe.PureComponent = L, fe.StrictMode = c, fe.Suspense = y, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, fe.act = K, fe.cloneElement = function(N, j, ce) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var me = D({}, N.props), ve = N.key, ye = N.ref, Ne = N._owner;
    if (j != null) {
      if (j.ref !== void 0 && (ye = j.ref, Ne = O.current), j.key !== void 0 && (ve = "" + j.key), N.type && N.type.defaultProps) var ke = N.type.defaultProps;
      for (Pe in j) A.call(j, Pe) && !X.hasOwnProperty(Pe) && (me[Pe] = j[Pe] === void 0 && ke !== void 0 ? ke[Pe] : j[Pe]);
    }
    var Pe = arguments.length - 2;
    if (Pe === 1) me.children = ce;
    else if (1 < Pe) {
      ke = Array(Pe);
      for (var st = 0; st < Pe; st++) ke[st] = arguments[st + 2];
      me.children = ke;
    }
    return { $$typeof: l, type: N.type, key: ve, ref: ye, props: me, _owner: Ne };
  }, fe.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: m, _context: N }, N.Consumer = N;
  }, fe.createElement = re, fe.createFactory = function(N) {
    var j = re.bind(null, N);
    return j.type = N, j;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(N) {
    return { $$typeof: h, render: N };
  }, fe.isValidElement = Ee, fe.lazy = function(N) {
    return { $$typeof: C, _payload: { _status: -1, _result: N }, _init: W };
  }, fe.memo = function(N, j) {
    return { $$typeof: E, type: N, compare: j === void 0 ? null : j };
  }, fe.startTransition = function(N) {
    var j = V.transition;
    V.transition = {};
    try {
      N();
    } finally {
      V.transition = j;
    }
  }, fe.unstable_act = K, fe.useCallback = function(N, j) {
    return de.current.useCallback(N, j);
  }, fe.useContext = function(N) {
    return de.current.useContext(N);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(N) {
    return de.current.useDeferredValue(N);
  }, fe.useEffect = function(N, j) {
    return de.current.useEffect(N, j);
  }, fe.useId = function() {
    return de.current.useId();
  }, fe.useImperativeHandle = function(N, j, ce) {
    return de.current.useImperativeHandle(N, j, ce);
  }, fe.useInsertionEffect = function(N, j) {
    return de.current.useInsertionEffect(N, j);
  }, fe.useLayoutEffect = function(N, j) {
    return de.current.useLayoutEffect(N, j);
  }, fe.useMemo = function(N, j) {
    return de.current.useMemo(N, j);
  }, fe.useReducer = function(N, j, ce) {
    return de.current.useReducer(N, j, ce);
  }, fe.useRef = function(N) {
    return de.current.useRef(N);
  }, fe.useState = function(N) {
    return de.current.useState(N);
  }, fe.useSyncExternalStore = function(N, j, ce) {
    return de.current.useSyncExternalStore(N, j, ce);
  }, fe.useTransition = function() {
    return de.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var dd;
function Wd() {
  return dd || (dd = 1, Us.exports = vp()), Us.exports;
}
var v = Wd();
const s = /* @__PURE__ */ Bd(v);
var Ta = {}, bs = { exports: {} }, at = {}, Bs = { exports: {} }, Ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd;
function yp() {
  return fd || (fd = 1, (function(l) {
    function o(V, oe) {
      var K = V.length;
      V.push(oe);
      e: for (; 0 < K; ) {
        var N = K - 1 >>> 1, j = V[N];
        if (0 < d(j, oe)) V[N] = oe, V[K] = j, K = N;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var oe = V[0], K = V.pop();
      if (K !== oe) {
        V[0] = K;
        e: for (var N = 0, j = V.length, ce = j >>> 1; N < ce; ) {
          var me = 2 * (N + 1) - 1, ve = V[me], ye = me + 1, Ne = V[ye];
          if (0 > d(ve, K)) ye < j && 0 > d(Ne, ve) ? (V[N] = Ne, V[ye] = K, N = ye) : (V[N] = ve, V[me] = K, N = me);
          else if (ye < j && 0 > d(Ne, K)) V[N] = Ne, V[ye] = K, N = ye;
          else break e;
        }
      }
      return oe;
    }
    function d(V, oe) {
      var K = V.sortIndex - oe.sortIndex;
      return K !== 0 ? K : V.id - oe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      l.unstable_now = function() {
        return m.now();
      };
    } else {
      var p = Date, h = p.now();
      l.unstable_now = function() {
        return p.now() - h;
      };
    }
    var y = [], E = [], C = 1, g = null, T = 3, M = !1, D = !1, $ = !1, w = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(V) {
      for (var oe = i(E); oe !== null; ) {
        if (oe.callback === null) c(E);
        else if (oe.startTime <= V) c(E), oe.sortIndex = oe.expirationTime, o(y, oe);
        else break;
        oe = i(E);
      }
    }
    function H(V) {
      if ($ = !1, z(V), !D) if (i(y) !== null) D = !0, W(A);
      else {
        var oe = i(E);
        oe !== null && de(H, oe.startTime - V);
      }
    }
    function A(V, oe) {
      D = !1, $ && ($ = !1, P(re), re = -1), M = !0;
      var K = T;
      try {
        for (z(oe), g = i(y); g !== null && (!(g.expirationTime > oe) || V && !pe()); ) {
          var N = g.callback;
          if (typeof N == "function") {
            g.callback = null, T = g.priorityLevel;
            var j = N(g.expirationTime <= oe);
            oe = l.unstable_now(), typeof j == "function" ? g.callback = j : g === i(y) && c(y), z(oe);
          } else c(y);
          g = i(y);
        }
        if (g !== null) var ce = !0;
        else {
          var me = i(E);
          me !== null && de(H, me.startTime - oe), ce = !1;
        }
        return ce;
      } finally {
        g = null, T = K, M = !1;
      }
    }
    var O = !1, X = null, re = -1, _e = 5, Ee = -1;
    function pe() {
      return !(l.unstable_now() - Ee < _e);
    }
    function Ce() {
      if (X !== null) {
        var V = l.unstable_now();
        Ee = V;
        var oe = !0;
        try {
          oe = X(!0, V);
        } finally {
          oe ? ue() : (O = !1, X = null);
        }
      } else O = !1;
    }
    var ue;
    if (typeof L == "function") ue = function() {
      L(Ce);
    };
    else if (typeof MessageChannel < "u") {
      var ie = new MessageChannel(), q = ie.port2;
      ie.port1.onmessage = Ce, ue = function() {
        q.postMessage(null);
      };
    } else ue = function() {
      w(Ce, 0);
    };
    function W(V) {
      X = V, O || (O = !0, ue());
    }
    function de(V, oe) {
      re = w(function() {
        V(l.unstable_now());
      }, oe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, l.unstable_continueExecution = function() {
      D || M || (D = !0, W(A));
    }, l.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _e = 0 < V ? Math.floor(1e3 / V) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, l.unstable_getFirstCallbackNode = function() {
      return i(y);
    }, l.unstable_next = function(V) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = T;
      }
      var K = T;
      T = oe;
      try {
        return V();
      } finally {
        T = K;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(V, oe) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var K = T;
      T = V;
      try {
        return oe();
      } finally {
        T = K;
      }
    }, l.unstable_scheduleCallback = function(V, oe, K) {
      var N = l.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? N + K : N) : K = N, V) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = K + j, V = { id: C++, callback: oe, priorityLevel: V, startTime: K, expirationTime: j, sortIndex: -1 }, K > N ? (V.sortIndex = K, o(E, V), i(y) === null && V === i(E) && ($ ? (P(re), re = -1) : $ = !0, de(H, K - N))) : (V.sortIndex = j, o(y, V), D || M || (D = !0, W(A))), V;
    }, l.unstable_shouldYield = pe, l.unstable_wrapCallback = function(V) {
      var oe = T;
      return function() {
        var K = T;
        T = oe;
        try {
          return V.apply(this, arguments);
        } finally {
          T = K;
        }
      };
    };
  })(Ws)), Ws;
}
var md;
function gp() {
  return md || (md = 1, Bs.exports = yp()), Bs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd;
function _p() {
  if (pd) return at;
  pd = 1;
  var l = Wd(), o = gp();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function m(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, C = {}, g = {};
  function T(e) {
    return y.call(g, e) ? !0 : y.call(C, e) ? !1 : E.test(e) ? g[e] = !0 : (C[e] = !0, !1);
  }
  function M(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function D(e, t, n, r) {
    if (t === null || typeof t > "u" || M(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function $(e, t, n, r, a, u, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new $(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var P = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      L
    );
    w[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, L);
    w[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, L);
    w[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function z(e, t, n, r) {
    var a = w.hasOwnProperty(t) ? w[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, a, r) && (n = null), r || a === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, A = Symbol.for("react.element"), O = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), Ee = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign, N;
  function j(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
  }
  var ce = !1;
  function me(e, t) {
    if (!e || ce) return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (I) {
          var r = I;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (I) {
          r = I;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          r = I;
        }
        e();
      }
    } catch (I) {
      if (I && r && typeof I.stack == "string") {
        for (var a = I.stack.split(`
`), u = r.stack.split(`
`), f = a.length - 1, _ = u.length - 1; 1 <= f && 0 <= _ && a[f] !== u[_]; ) _--;
        for (; 1 <= f && 0 <= _; f--, _--) if (a[f] !== u[_]) {
          if (f !== 1 || _ !== 1)
            do
              if (f--, _--, 0 > _ || a[f] !== u[_]) {
                var k = `
` + a[f].replace(" at new ", " at ");
                return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k;
              }
            while (1 <= f && 0 <= _);
          break;
        }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j("Lazy");
      case 13:
        return j("Suspense");
      case 19:
        return j("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = me(e.type, !1), e;
      case 11:
        return e = me(e.type.render, !1), e;
      case 1:
        return e = me(e.type, !0), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case O:
        return "Portal";
      case _e:
        return "Profiler";
      case re:
        return "StrictMode";
      case ue:
        return "Suspense";
      case ie:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case pe:
        return (e.displayName || "Context") + ".Consumer";
      case Ee:
        return (e._context.displayName || "Context") + ".Provider";
      case Ce:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case q:
        return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
      case W:
        t = e._payload, e = e._init;
        try {
          return ye(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ne(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ye(t);
      case 8:
        return t === re ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ke(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function st(e) {
    var t = Pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(f) {
        r = "" + f, u.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(f) {
        r = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function yl(e) {
    e._valueTracker || (e._valueTracker = st(e));
  }
  function vi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Pe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function gl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Qa(e, t) {
    var n = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function yi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ke(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function gi(e, t) {
    t = t.checked, t != null && z(e, "checked", t, !1);
  }
  function qa(e, t) {
    gi(e, t);
    var n = ke(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ya(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ya(e, t.type, ke(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function _i(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ya(e, t, n) {
    (t !== "number" || gl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Sr = Array.isArray;
  function Bn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ke(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ka(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ei(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Sr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ke(n) };
  }
  function wi(e, t) {
    var n = ke(t.value), r = ke(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ki(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Si(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ga(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Si(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var _l, Ci = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (_l = _l || document.createElement("div"), _l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _l.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Cr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ef = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Nr).forEach(function(e) {
    Ef.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Nr[t] = Nr[e];
    });
  });
  function Ni(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nr.hasOwnProperty(e) && Nr[e] ? ("" + t).trim() : t + "px";
  }
  function xi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Ni(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var wf = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Xa(e, t) {
    if (t) {
      if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Ja(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Za = null;
  function eo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var to = null, Wn = null, Hn = null;
  function Ti(e) {
    if (e = qr(e)) {
      if (typeof to != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Bl(t), to(e.stateNode, e.type, t));
    }
  }
  function Ri(e) {
    Wn ? Hn ? Hn.push(e) : Hn = [e] : Wn = e;
  }
  function Pi() {
    if (Wn) {
      var e = Wn, t = Hn;
      if (Hn = Wn = null, Ti(e), t) for (e = 0; e < t.length; e++) Ti(t[e]);
    }
  }
  function Mi(e, t) {
    return e(t);
  }
  function Li() {
  }
  var no = !1;
  function Ii(e, t, n) {
    if (no) return e(t, n);
    no = !0;
    try {
      return Mi(e, t, n);
    } finally {
      no = !1, (Wn !== null || Hn !== null) && (Li(), Pi());
    }
  }
  function xr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Bl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var ro = !1;
  if (h) try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", { get: function() {
      ro = !0;
    } }), window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, Tr);
  } catch {
    ro = !1;
  }
  function kf(e, t, n, r, a, u, f, _, k) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (U) {
      this.onError(U);
    }
  }
  var Rr = !1, El = null, wl = !1, lo = null, Sf = { onError: function(e) {
    Rr = !0, El = e;
  } };
  function Cf(e, t, n, r, a, u, f, _, k) {
    Rr = !1, El = null, kf.apply(Sf, arguments);
  }
  function Nf(e, t, n, r, a, u, f, _, k) {
    if (Cf.apply(this, arguments), Rr) {
      if (Rr) {
        var I = El;
        Rr = !1, El = null;
      } else throw Error(i(198));
      wl || (wl = !0, lo = I);
    }
  }
  function Nn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function $i(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Di(e) {
    if (Nn(e) !== e) throw Error(i(188));
  }
  function xf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (r = a.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return Di(a), e;
          if (u === r) return Di(a), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) n = a, r = u;
      else {
        for (var f = !1, _ = a.child; _; ) {
          if (_ === n) {
            f = !0, n = a, r = u;
            break;
          }
          if (_ === r) {
            f = !0, r = a, n = u;
            break;
          }
          _ = _.sibling;
        }
        if (!f) {
          for (_ = u.child; _; ) {
            if (_ === n) {
              f = !0, n = u, r = a;
              break;
            }
            if (_ === r) {
              f = !0, r = u, n = a;
              break;
            }
            _ = _.sibling;
          }
          if (!f) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function zi(e) {
    return e = xf(e), e !== null ? Oi(e) : null;
  }
  function Oi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Oi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ai = o.unstable_scheduleCallback, Fi = o.unstable_cancelCallback, Tf = o.unstable_shouldYield, Rf = o.unstable_requestPaint, Oe = o.unstable_now, Pf = o.unstable_getCurrentPriorityLevel, ao = o.unstable_ImmediatePriority, ji = o.unstable_UserBlockingPriority, kl = o.unstable_NormalPriority, Mf = o.unstable_LowPriority, Ui = o.unstable_IdlePriority, Sl = null, It = null;
  function Lf(e) {
    if (It && typeof It.onCommitFiberRoot == "function") try {
      It.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : Df, If = Math.log, $f = Math.LN2;
  function Df(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (If(e) / $f | 0) | 0;
  }
  var Cl = 64, Nl = 4194304;
  function Pr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function xl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, u = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var _ = f & ~a;
      _ !== 0 ? r = Pr(_) : (u &= f, u !== 0 && (r = Pr(u)));
    } else f = n & ~a, f !== 0 ? r = Pr(f) : u !== 0 && (r = Pr(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, u = t & -t, a >= u || a === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function zf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Of(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var f = 31 - St(u), _ = 1 << f, k = a[f];
      k === -1 ? ((_ & n) === 0 || (_ & r) !== 0) && (a[f] = zf(_, t)) : k <= t && (e.expiredLanes |= _), u &= ~_;
    }
  }
  function oo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function bi() {
    var e = Cl;
    return Cl <<= 1, (Cl & 4194240) === 0 && (Cl = 64), e;
  }
  function so(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Mr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function Af(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - St(n), u = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~u;
    }
  }
  function io(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var Se = 0;
  function Bi(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Wi, uo, Hi, Vi, Qi, co = !1, Tl = [], tn = null, nn = null, rn = null, Lr = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), ln = [], Ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qi(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Lr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ir.delete(t.pointerId);
    }
  }
  function $r(e, t, n, r, a, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [a] }, t !== null && (t = qr(t), t !== null && uo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function jf(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return tn = $r(tn, e, t, n, r, a), !0;
      case "dragenter":
        return nn = $r(nn, e, t, n, r, a), !0;
      case "mouseover":
        return rn = $r(rn, e, t, n, r, a), !0;
      case "pointerover":
        var u = a.pointerId;
        return Lr.set(u, $r(Lr.get(u) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return u = a.pointerId, Ir.set(u, $r(Ir.get(u) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Yi(e) {
    var t = xn(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = $i(n), t !== null) {
            e.blockedOn = t, Qi(e.priority, function() {
              Hi(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Za = r, n.target.dispatchEvent(r), Za = null;
      } else return t = qr(n), t !== null && uo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ki(e, t, n) {
    Rl(e) && n.delete(t);
  }
  function Uf() {
    co = !1, tn !== null && Rl(tn) && (tn = null), nn !== null && Rl(nn) && (nn = null), rn !== null && Rl(rn) && (rn = null), Lr.forEach(Ki), Ir.forEach(Ki);
  }
  function Dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, co || (co = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Uf)));
  }
  function zr(e) {
    function t(a) {
      return Dr(a, e);
    }
    if (0 < Tl.length) {
      Dr(Tl[0], e);
      for (var n = 1; n < Tl.length; n++) {
        var r = Tl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (tn !== null && Dr(tn, e), nn !== null && Dr(nn, e), rn !== null && Dr(rn, e), Lr.forEach(t), Ir.forEach(t), n = 0; n < ln.length; n++) r = ln[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0], n.blockedOn === null); ) Yi(n), n.blockedOn === null && ln.shift();
  }
  var Vn = H.ReactCurrentBatchConfig, Pl = !0;
  function bf(e, t, n, r) {
    var a = Se, u = Vn.transition;
    Vn.transition = null;
    try {
      Se = 1, fo(e, t, n, r);
    } finally {
      Se = a, Vn.transition = u;
    }
  }
  function Bf(e, t, n, r) {
    var a = Se, u = Vn.transition;
    Vn.transition = null;
    try {
      Se = 4, fo(e, t, n, r);
    } finally {
      Se = a, Vn.transition = u;
    }
  }
  function fo(e, t, n, r) {
    if (Pl) {
      var a = mo(e, t, n, r);
      if (a === null) Mo(e, t, r, Ml, n), qi(e, r);
      else if (jf(a, e, t, n, r)) r.stopPropagation();
      else if (qi(e, r), t & 4 && -1 < Ff.indexOf(e)) {
        for (; a !== null; ) {
          var u = qr(a);
          if (u !== null && Wi(u), u = mo(e, t, n, r), u === null && Mo(e, t, r, Ml, n), u === a) break;
          a = u;
        }
        a !== null && r.stopPropagation();
      } else Mo(e, t, r, null, n);
    }
  }
  var Ml = null;
  function mo(e, t, n, r) {
    if (Ml = null, e = eo(r), e = xn(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = $i(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ml = e, null;
  }
  function Gi(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Pf()) {
          case ao:
            return 1;
          case ji:
            return 4;
          case kl:
          case Mf:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var an = null, po = null, Ll = null;
  function Xi() {
    if (Ll) return Ll;
    var e, t = po, n = t.length, r, a = "value" in an ? an.value : an.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === a[u - r]; r++) ;
    return Ll = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Il(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $l() {
    return !0;
  }
  function Ji() {
    return !1;
  }
  function it(e) {
    function t(n, r, a, u, f) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var _ in e) e.hasOwnProperty(_) && (n = e[_], this[_] = n ? n(u) : u[_]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? $l : Ji, this.isPropagationStopped = Ji, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $l);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $l);
    }, persist: function() {
    }, isPersistent: $l }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ho = it(Qn), Or = K({}, Qn, { view: 0, detail: 0 }), Wf = it(Or), vo, yo, Ar, Dl = K({}, Or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _o, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ar && (Ar && e.type === "mousemove" ? (vo = e.screenX - Ar.screenX, yo = e.screenY - Ar.screenY) : yo = vo = 0, Ar = e), vo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : yo;
  } }), Zi = it(Dl), Hf = K({}, Dl, { dataTransfer: 0 }), Vf = it(Hf), Qf = K({}, Or, { relatedTarget: 0 }), go = it(Qf), qf = K({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yf = it(qf), Kf = K({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Gf = it(Kf), Xf = K({}, Qn, { data: 0 }), eu = it(Xf), Jf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Zf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, em = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function tm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = em[e]) ? !!t[e] : !1;
  }
  function _o() {
    return tm;
  }
  var nm = K({}, Or, { key: function(e) {
    if (e.key) {
      var t = Jf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _o, charCode: function(e) {
    return e.type === "keypress" ? Il(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), rm = it(nm), lm = K({}, Dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tu = it(lm), am = K({}, Or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _o }), om = it(am), sm = K({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), im = it(sm), um = K({}, Dl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cm = it(um), dm = [9, 13, 27, 32], Eo = h && "CompositionEvent" in window, Fr = null;
  h && "documentMode" in document && (Fr = document.documentMode);
  var fm = h && "TextEvent" in window && !Fr, nu = h && (!Eo || Fr && 8 < Fr && 11 >= Fr), ru = " ", lu = !1;
  function au(e, t) {
    switch (e) {
      case "keyup":
        return dm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ou(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qn = !1;
  function mm(e, t) {
    switch (e) {
      case "compositionend":
        return ou(t);
      case "keypress":
        return t.which !== 32 ? null : (lu = !0, ru);
      case "textInput":
        return e = t.data, e === ru && lu ? null : e;
      default:
        return null;
    }
  }
  function pm(e, t) {
    if (qn) return e === "compositionend" || !Eo && au(e, t) ? (e = Xi(), Ll = po = an = null, qn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return nu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hm[e.type] : t === "textarea";
  }
  function iu(e, t, n, r) {
    Ri(r), t = jl(t, "onChange"), 0 < t.length && (n = new ho("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var jr = null, Ur = null;
  function vm(e) {
    xu(e, 0);
  }
  function zl(e) {
    var t = Jn(e);
    if (vi(t)) return e;
  }
  function ym(e, t) {
    if (e === "change") return t;
  }
  var uu = !1;
  if (h) {
    var wo;
    if (h) {
      var ko = "oninput" in document;
      if (!ko) {
        var cu = document.createElement("div");
        cu.setAttribute("oninput", "return;"), ko = typeof cu.oninput == "function";
      }
      wo = ko;
    } else wo = !1;
    uu = wo && (!document.documentMode || 9 < document.documentMode);
  }
  function du() {
    jr && (jr.detachEvent("onpropertychange", fu), Ur = jr = null);
  }
  function fu(e) {
    if (e.propertyName === "value" && zl(Ur)) {
      var t = [];
      iu(t, Ur, e, eo(e)), Ii(vm, t);
    }
  }
  function gm(e, t, n) {
    e === "focusin" ? (du(), jr = t, Ur = n, jr.attachEvent("onpropertychange", fu)) : e === "focusout" && du();
  }
  function _m(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(Ur);
  }
  function Em(e, t) {
    if (e === "click") return zl(t);
  }
  function wm(e, t) {
    if (e === "input" || e === "change") return zl(t);
  }
  function km(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : km;
  function br(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!y.call(t, a) || !Ct(e[a], t[a])) return !1;
    }
    return !0;
  }
  function mu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pu(e, t) {
    var n = mu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = mu(n);
    }
  }
  function hu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vu() {
    for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = gl(e.document);
    }
    return t;
  }
  function So(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Sm(e) {
    var t = vu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && hu(n.ownerDocument.documentElement, n)) {
      if (r !== null && So(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, u = Math.min(r.start, a);
          r = r.end === void 0 ? u : Math.min(r.end, a), !e.extend && u > r && (a = r, r = u, u = a), a = pu(n, u);
          var f = pu(
            n,
            r
          );
          a && f && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Cm = h && "documentMode" in document && 11 >= document.documentMode, Yn = null, Co = null, Br = null, No = !1;
  function yu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    No || Yn == null || Yn !== gl(r) || (r = Yn, "selectionStart" in r && So(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Br && br(Br, r) || (Br = r, r = jl(Co, "onSelect"), 0 < r.length && (t = new ho("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn)));
  }
  function Ol(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Kn = { animationend: Ol("Animation", "AnimationEnd"), animationiteration: Ol("Animation", "AnimationIteration"), animationstart: Ol("Animation", "AnimationStart"), transitionend: Ol("Transition", "TransitionEnd") }, xo = {}, gu = {};
  h && (gu = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
  function Al(e) {
    if (xo[e]) return xo[e];
    if (!Kn[e]) return e;
    var t = Kn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in gu) return xo[e] = t[n];
    return e;
  }
  var _u = Al("animationend"), Eu = Al("animationiteration"), wu = Al("animationstart"), ku = Al("transitionend"), Su = /* @__PURE__ */ new Map(), Cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function on(e, t) {
    Su.set(e, t), m(t, [e]);
  }
  for (var To = 0; To < Cu.length; To++) {
    var Ro = Cu[To], Nm = Ro.toLowerCase(), xm = Ro[0].toUpperCase() + Ro.slice(1);
    on(Nm, "on" + xm);
  }
  on(_u, "onAnimationEnd"), on(Eu, "onAnimationIteration"), on(wu, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(ku, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Tm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Nu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Nf(r, t, void 0, e), e.currentTarget = null;
  }
  function xu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var f = r.length - 1; 0 <= f; f--) {
          var _ = r[f], k = _.instance, I = _.currentTarget;
          if (_ = _.listener, k !== u && a.isPropagationStopped()) break e;
          Nu(a, _, I), u = k;
        }
        else for (f = 0; f < r.length; f++) {
          if (_ = r[f], k = _.instance, I = _.currentTarget, _ = _.listener, k !== u && a.isPropagationStopped()) break e;
          Nu(a, _, I), u = k;
        }
      }
    }
    if (wl) throw e = lo, wl = !1, lo = null, e;
  }
  function Te(e, t) {
    var n = t[Oo];
    n === void 0 && (n = t[Oo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Tu(t, e, 2, !1), n.add(r));
  }
  function Po(e, t, n) {
    var r = 0;
    t && (r |= 4), Tu(n, e, r, t);
  }
  var Fl = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Fl]) {
      e[Fl] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Tm.has(n) || Po(n, !1, e), Po(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fl] || (t[Fl] = !0, Po("selectionchange", !1, t));
    }
  }
  function Tu(e, t, n, r) {
    switch (Gi(t)) {
      case 1:
        var a = bf;
        break;
      case 4:
        a = Bf;
        break;
      default:
        a = fo;
    }
    n = a.bind(null, t, n, e), a = void 0, !ro || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function Mo(e, t, n, r, a) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var f = r.tag;
      if (f === 3 || f === 4) {
        var _ = r.stateNode.containerInfo;
        if (_ === a || _.nodeType === 8 && _.parentNode === a) break;
        if (f === 4) for (f = r.return; f !== null; ) {
          var k = f.tag;
          if ((k === 3 || k === 4) && (k = f.stateNode.containerInfo, k === a || k.nodeType === 8 && k.parentNode === a)) return;
          f = f.return;
        }
        for (; _ !== null; ) {
          if (f = xn(_), f === null) return;
          if (k = f.tag, k === 5 || k === 6) {
            r = u = f;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      r = r.return;
    }
    Ii(function() {
      var I = u, U = eo(n), b = [];
      e: {
        var F = Su.get(e);
        if (F !== void 0) {
          var Q = ho, G = e;
          switch (e) {
            case "keypress":
              if (Il(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = rm;
              break;
            case "focusin":
              G = "focus", Q = go;
              break;
            case "focusout":
              G = "blur", Q = go;
              break;
            case "beforeblur":
            case "afterblur":
              Q = go;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Zi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Vf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = om;
              break;
            case _u:
            case Eu:
            case wu:
              Q = Yf;
              break;
            case ku:
              Q = im;
              break;
            case "scroll":
              Q = Wf;
              break;
            case "wheel":
              Q = cm;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Gf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = tu;
          }
          var J = (t & 4) !== 0, Ae = !J && e === "scroll", x = J ? F !== null ? F + "Capture" : null : F;
          J = [];
          for (var S = I, R; S !== null; ) {
            R = S;
            var B = R.stateNode;
            if (R.tag === 5 && B !== null && (R = B, x !== null && (B = xr(S, x), B != null && J.push(Vr(S, B, R)))), Ae) break;
            S = S.return;
          }
          0 < J.length && (F = new Q(F, G, null, n, U), b.push({ event: F, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", F && n !== Za && (G = n.relatedTarget || n.fromElement) && (xn(G) || G[bt])) break e;
          if ((Q || F) && (F = U.window === U ? U : (F = U.ownerDocument) ? F.defaultView || F.parentWindow : window, Q ? (G = n.relatedTarget || n.toElement, Q = I, G = G ? xn(G) : null, G !== null && (Ae = Nn(G), G !== Ae || G.tag !== 5 && G.tag !== 6) && (G = null)) : (Q = null, G = I), Q !== G)) {
            if (J = Zi, B = "onMouseLeave", x = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (J = tu, B = "onPointerLeave", x = "onPointerEnter", S = "pointer"), Ae = Q == null ? F : Jn(Q), R = G == null ? F : Jn(G), F = new J(B, S + "leave", Q, n, U), F.target = Ae, F.relatedTarget = R, B = null, xn(U) === I && (J = new J(x, S + "enter", G, n, U), J.target = R, J.relatedTarget = Ae, B = J), Ae = B, Q && G) t: {
              for (J = Q, x = G, S = 0, R = J; R; R = Gn(R)) S++;
              for (R = 0, B = x; B; B = Gn(B)) R++;
              for (; 0 < S - R; ) J = Gn(J), S--;
              for (; 0 < R - S; ) x = Gn(x), R--;
              for (; S--; ) {
                if (J === x || x !== null && J === x.alternate) break t;
                J = Gn(J), x = Gn(x);
              }
              J = null;
            }
            else J = null;
            Q !== null && Ru(b, F, Q, J, !1), G !== null && Ae !== null && Ru(b, Ae, G, J, !0);
          }
        }
        e: {
          if (F = I ? Jn(I) : window, Q = F.nodeName && F.nodeName.toLowerCase(), Q === "select" || Q === "input" && F.type === "file") var te = ym;
          else if (su(F)) if (uu) te = wm;
          else {
            te = _m;
            var le = gm;
          }
          else (Q = F.nodeName) && Q.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (te = Em);
          if (te && (te = te(e, I))) {
            iu(b, te, n, U);
            break e;
          }
          le && le(e, F, I), e === "focusout" && (le = F._wrapperState) && le.controlled && F.type === "number" && Ya(F, "number", F.value);
        }
        switch (le = I ? Jn(I) : window, e) {
          case "focusin":
            (su(le) || le.contentEditable === "true") && (Yn = le, Co = I, Br = null);
            break;
          case "focusout":
            Br = Co = Yn = null;
            break;
          case "mousedown":
            No = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            No = !1, yu(b, n, U);
            break;
          case "selectionchange":
            if (Cm) break;
          case "keydown":
          case "keyup":
            yu(b, n, U);
        }
        var ae;
        if (Eo) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else qn ? au(e, n) && (se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (se = "onCompositionStart");
        se && (nu && n.locale !== "ko" && (qn || se !== "onCompositionStart" ? se === "onCompositionEnd" && qn && (ae = Xi()) : (an = U, po = "value" in an ? an.value : an.textContent, qn = !0)), le = jl(I, se), 0 < le.length && (se = new eu(se, e, null, n, U), b.push({ event: se, listeners: le }), ae ? se.data = ae : (ae = ou(n), ae !== null && (se.data = ae)))), (ae = fm ? mm(e, n) : pm(e, n)) && (I = jl(I, "onBeforeInput"), 0 < I.length && (U = new eu("onBeforeInput", "beforeinput", null, n, U), b.push({ event: U, listeners: I }), U.data = ae));
      }
      xu(b, t);
    });
  }
  function Vr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function jl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, u = a.stateNode;
      a.tag === 5 && u !== null && (a = u, u = xr(e, n), u != null && r.unshift(Vr(e, u, a)), u = xr(e, t), u != null && r.push(Vr(e, u, a))), e = e.return;
    }
    return r;
  }
  function Gn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ru(e, t, n, r, a) {
    for (var u = t._reactName, f = []; n !== null && n !== r; ) {
      var _ = n, k = _.alternate, I = _.stateNode;
      if (k !== null && k === r) break;
      _.tag === 5 && I !== null && (_ = I, a ? (k = xr(n, u), k != null && f.unshift(Vr(n, k, _))) : a || (k = xr(n, u), k != null && f.push(Vr(n, k, _)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Rm = /\r\n?/g, Pm = /\u0000|\uFFFD/g;
  function Pu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Rm, `
`).replace(Pm, "");
  }
  function Ul(e, t, n) {
    if (t = Pu(t), Pu(e) !== t && n) throw Error(i(425));
  }
  function bl() {
  }
  var Lo = null, Io = null;
  function $o(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Do = typeof setTimeout == "function" ? setTimeout : void 0, Mm = typeof clearTimeout == "function" ? clearTimeout : void 0, Mu = typeof Promise == "function" ? Promise : void 0, Lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mu < "u" ? function(e) {
    return Mu.resolve(null).then(e).catch(Im);
  } : Do;
  function Im(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function zo(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), zr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    zr(t);
  }
  function sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Lu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Xn = Math.random().toString(36).slice(2), $t = "__reactFiber$" + Xn, Qr = "__reactProps$" + Xn, bt = "__reactContainer$" + Xn, Oo = "__reactEvents$" + Xn, $m = "__reactListeners$" + Xn, Dm = "__reactHandles$" + Xn;
  function xn(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bt] || n[$t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lu(e); e !== null; ) {
          if (n = e[$t]) return n;
          e = Lu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function qr(e) {
    return e = e[$t] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Bl(e) {
    return e[Qr] || null;
  }
  var Ao = [], Zn = -1;
  function un(e) {
    return { current: e };
  }
  function Re(e) {
    0 > Zn || (e.current = Ao[Zn], Ao[Zn] = null, Zn--);
  }
  function xe(e, t) {
    Zn++, Ao[Zn] = e.current, e.current = t;
  }
  var cn = {}, Ye = un(cn), et = un(!1), Tn = cn;
  function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return cn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, u;
    for (u in n) a[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wl() {
    Re(et), Re(Ye);
  }
  function Iu(e, t, n) {
    if (Ye.current !== cn) throw Error(i(168));
    xe(Ye, t), xe(et, n);
  }
  function $u(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(i(108, Ne(e) || "Unknown", a));
    return K({}, n, r);
  }
  function Hl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Tn = Ye.current, xe(Ye, e), xe(et, et.current), !0;
  }
  function Du(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n ? (e = $u(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, Re(et), Re(Ye), xe(Ye, e)) : Re(et), xe(et, n);
  }
  var Bt = null, Vl = !1, Fo = !1;
  function zu(e) {
    Bt === null ? Bt = [e] : Bt.push(e);
  }
  function zm(e) {
    Vl = !0, zu(e);
  }
  function dn() {
    if (!Fo && Bt !== null) {
      Fo = !0;
      var e = 0, t = Se;
      try {
        var n = Bt;
        for (Se = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Bt = null, Vl = !1;
      } catch (a) {
        throw Bt !== null && (Bt = Bt.slice(e + 1)), Ai(ao, dn), a;
      } finally {
        Se = t, Fo = !1;
      }
    }
    return null;
  }
  var tr = [], nr = 0, Ql = null, ql = 0, ht = [], vt = 0, Rn = null, Wt = 1, Ht = "";
  function Pn(e, t) {
    tr[nr++] = ql, tr[nr++] = Ql, Ql = e, ql = t;
  }
  function Ou(e, t, n) {
    ht[vt++] = Wt, ht[vt++] = Ht, ht[vt++] = Rn, Rn = e;
    var r = Wt;
    e = Ht;
    var a = 32 - St(r) - 1;
    r &= ~(1 << a), n += 1;
    var u = 32 - St(t) + a;
    if (30 < u) {
      var f = a - a % 5;
      u = (r & (1 << f) - 1).toString(32), r >>= f, a -= f, Wt = 1 << 32 - St(t) + a | n << a | r, Ht = u + e;
    } else Wt = 1 << u | n << a | r, Ht = e;
  }
  function jo(e) {
    e.return !== null && (Pn(e, 1), Ou(e, 1, 0));
  }
  function Uo(e) {
    for (; e === Ql; ) Ql = tr[--nr], tr[nr] = null, ql = tr[--nr], tr[nr] = null;
    for (; e === Rn; ) Rn = ht[--vt], ht[vt] = null, Ht = ht[--vt], ht[vt] = null, Wt = ht[--vt], ht[vt] = null;
  }
  var ut = null, ct = null, Me = !1, Nt = null;
  function Au(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = sn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rn !== null ? { id: Wt, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function bo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Bo(e) {
    if (Me) {
      var t = ct;
      if (t) {
        var n = t;
        if (!Fu(e, t)) {
          if (bo(e)) throw Error(i(418));
          t = sn(n.nextSibling);
          var r = ut;
          t && Fu(e, t) ? Au(r, n) : (e.flags = e.flags & -4097 | 2, Me = !1, ut = e);
        }
      } else {
        if (bo(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Me = !1, ut = e;
      }
    }
  }
  function ju(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function Yl(e) {
    if (e !== ut) return !1;
    if (!Me) return ju(e), Me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps)), t && (t = ct)) {
      if (bo(e)) throw Uu(), Error(i(418));
      for (; t; ) Au(e, t), t = sn(t.nextSibling);
    }
    if (ju(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ct = sn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Uu() {
    for (var e = ct; e; ) e = sn(e.nextSibling);
  }
  function rr() {
    ct = ut = null, Me = !1;
  }
  function Wo(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  var Om = H.ReactCurrentBatchConfig;
  function Yr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var a = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(f) {
          var _ = a.refs;
          f === null ? delete _[u] : _[u] = f;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Kl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function bu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bu(e) {
    function t(x, S) {
      if (e) {
        var R = x.deletions;
        R === null ? (x.deletions = [S], x.flags |= 16) : R.push(S);
      }
    }
    function n(x, S) {
      if (!e) return null;
      for (; S !== null; ) t(x, S), S = S.sibling;
      return null;
    }
    function r(x, S) {
      for (x = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? x.set(S.key, S) : x.set(S.index, S), S = S.sibling;
      return x;
    }
    function a(x, S) {
      return x = _n(x, S), x.index = 0, x.sibling = null, x;
    }
    function u(x, S, R) {
      return x.index = R, e ? (R = x.alternate, R !== null ? (R = R.index, R < S ? (x.flags |= 2, S) : R) : (x.flags |= 2, S)) : (x.flags |= 1048576, S);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function _(x, S, R, B) {
      return S === null || S.tag !== 6 ? (S = Ds(R, x.mode, B), S.return = x, S) : (S = a(S, R), S.return = x, S);
    }
    function k(x, S, R, B) {
      var te = R.type;
      return te === X ? U(x, S, R.props.children, B, R.key) : S !== null && (S.elementType === te || typeof te == "object" && te !== null && te.$$typeof === W && bu(te) === S.type) ? (B = a(S, R.props), B.ref = Yr(x, S, R), B.return = x, B) : (B = _a(R.type, R.key, R.props, null, x.mode, B), B.ref = Yr(x, S, R), B.return = x, B);
    }
    function I(x, S, R, B) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== R.containerInfo || S.stateNode.implementation !== R.implementation ? (S = zs(R, x.mode, B), S.return = x, S) : (S = a(S, R.children || []), S.return = x, S);
    }
    function U(x, S, R, B, te) {
      return S === null || S.tag !== 7 ? (S = An(R, x.mode, B, te), S.return = x, S) : (S = a(S, R), S.return = x, S);
    }
    function b(x, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = Ds("" + S, x.mode, R), S.return = x, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case A:
            return R = _a(S.type, S.key, S.props, null, x.mode, R), R.ref = Yr(x, null, S), R.return = x, R;
          case O:
            return S = zs(S, x.mode, R), S.return = x, S;
          case W:
            var B = S._init;
            return b(x, B(S._payload), R);
        }
        if (Sr(S) || oe(S)) return S = An(S, x.mode, R, null), S.return = x, S;
        Kl(x, S);
      }
      return null;
    }
    function F(x, S, R, B) {
      var te = S !== null ? S.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return te !== null ? null : _(x, S, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            return R.key === te ? k(x, S, R, B) : null;
          case O:
            return R.key === te ? I(x, S, R, B) : null;
          case W:
            return te = R._init, F(
              x,
              S,
              te(R._payload),
              B
            );
        }
        if (Sr(R) || oe(R)) return te !== null ? null : U(x, S, R, B, null);
        Kl(x, R);
      }
      return null;
    }
    function Q(x, S, R, B, te) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return x = x.get(R) || null, _(S, x, "" + B, te);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case A:
            return x = x.get(B.key === null ? R : B.key) || null, k(S, x, B, te);
          case O:
            return x = x.get(B.key === null ? R : B.key) || null, I(S, x, B, te);
          case W:
            var le = B._init;
            return Q(x, S, R, le(B._payload), te);
        }
        if (Sr(B) || oe(B)) return x = x.get(R) || null, U(S, x, B, te, null);
        Kl(S, B);
      }
      return null;
    }
    function G(x, S, R, B) {
      for (var te = null, le = null, ae = S, se = S = 0, We = null; ae !== null && se < R.length; se++) {
        ae.index > se ? (We = ae, ae = null) : We = ae.sibling;
        var ge = F(x, ae, R[se], B);
        if (ge === null) {
          ae === null && (ae = We);
          break;
        }
        e && ae && ge.alternate === null && t(x, ae), S = u(ge, S, se), le === null ? te = ge : le.sibling = ge, le = ge, ae = We;
      }
      if (se === R.length) return n(x, ae), Me && Pn(x, se), te;
      if (ae === null) {
        for (; se < R.length; se++) ae = b(x, R[se], B), ae !== null && (S = u(ae, S, se), le === null ? te = ae : le.sibling = ae, le = ae);
        return Me && Pn(x, se), te;
      }
      for (ae = r(x, ae); se < R.length; se++) We = Q(ae, x, se, R[se], B), We !== null && (e && We.alternate !== null && ae.delete(We.key === null ? se : We.key), S = u(We, S, se), le === null ? te = We : le.sibling = We, le = We);
      return e && ae.forEach(function(En) {
        return t(x, En);
      }), Me && Pn(x, se), te;
    }
    function J(x, S, R, B) {
      var te = oe(R);
      if (typeof te != "function") throw Error(i(150));
      if (R = te.call(R), R == null) throw Error(i(151));
      for (var le = te = null, ae = S, se = S = 0, We = null, ge = R.next(); ae !== null && !ge.done; se++, ge = R.next()) {
        ae.index > se ? (We = ae, ae = null) : We = ae.sibling;
        var En = F(x, ae, ge.value, B);
        if (En === null) {
          ae === null && (ae = We);
          break;
        }
        e && ae && En.alternate === null && t(x, ae), S = u(En, S, se), le === null ? te = En : le.sibling = En, le = En, ae = We;
      }
      if (ge.done) return n(
        x,
        ae
      ), Me && Pn(x, se), te;
      if (ae === null) {
        for (; !ge.done; se++, ge = R.next()) ge = b(x, ge.value, B), ge !== null && (S = u(ge, S, se), le === null ? te = ge : le.sibling = ge, le = ge);
        return Me && Pn(x, se), te;
      }
      for (ae = r(x, ae); !ge.done; se++, ge = R.next()) ge = Q(ae, x, se, ge.value, B), ge !== null && (e && ge.alternate !== null && ae.delete(ge.key === null ? se : ge.key), S = u(ge, S, se), le === null ? te = ge : le.sibling = ge, le = ge);
      return e && ae.forEach(function(hp) {
        return t(x, hp);
      }), Me && Pn(x, se), te;
    }
    function Ae(x, S, R, B) {
      if (typeof R == "object" && R !== null && R.type === X && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            e: {
              for (var te = R.key, le = S; le !== null; ) {
                if (le.key === te) {
                  if (te = R.type, te === X) {
                    if (le.tag === 7) {
                      n(x, le.sibling), S = a(le, R.props.children), S.return = x, x = S;
                      break e;
                    }
                  } else if (le.elementType === te || typeof te == "object" && te !== null && te.$$typeof === W && bu(te) === le.type) {
                    n(x, le.sibling), S = a(le, R.props), S.ref = Yr(x, le, R), S.return = x, x = S;
                    break e;
                  }
                  n(x, le);
                  break;
                } else t(x, le);
                le = le.sibling;
              }
              R.type === X ? (S = An(R.props.children, x.mode, B, R.key), S.return = x, x = S) : (B = _a(R.type, R.key, R.props, null, x.mode, B), B.ref = Yr(x, S, R), B.return = x, x = B);
            }
            return f(x);
          case O:
            e: {
              for (le = R.key; S !== null; ) {
                if (S.key === le) if (S.tag === 4 && S.stateNode.containerInfo === R.containerInfo && S.stateNode.implementation === R.implementation) {
                  n(x, S.sibling), S = a(S, R.children || []), S.return = x, x = S;
                  break e;
                } else {
                  n(x, S);
                  break;
                }
                else t(x, S);
                S = S.sibling;
              }
              S = zs(R, x.mode, B), S.return = x, x = S;
            }
            return f(x);
          case W:
            return le = R._init, Ae(x, S, le(R._payload), B);
        }
        if (Sr(R)) return G(x, S, R, B);
        if (oe(R)) return J(x, S, R, B);
        Kl(x, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, S !== null && S.tag === 6 ? (n(x, S.sibling), S = a(S, R), S.return = x, x = S) : (n(x, S), S = Ds(R, x.mode, B), S.return = x, x = S), f(x)) : n(x, S);
    }
    return Ae;
  }
  var lr = Bu(!0), Wu = Bu(!1), Gl = un(null), Xl = null, ar = null, Ho = null;
  function Vo() {
    Ho = ar = Xl = null;
  }
  function Qo(e) {
    var t = Gl.current;
    Re(Gl), e._currentValue = t;
  }
  function qo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function or(e, t) {
    Xl = e, Ho = ar = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), e.firstContext = null);
  }
  function yt(e) {
    var t = e._currentValue;
    if (Ho !== e) if (e = { context: e, memoizedValue: t, next: null }, ar === null) {
      if (Xl === null) throw Error(i(308));
      ar = e, Xl.dependencies = { lanes: 0, firstContext: e };
    } else ar = ar.next = e;
    return t;
  }
  var Mn = null;
  function Yo(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function Hu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Yo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Vt(e, r);
  }
  function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var fn = !1;
  function Ko(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Vu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function mn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (he & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Vt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Yo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Vt(e, n);
  }
  function Jl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
    }
  }
  function Qu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? a = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Zl(e, t, n, r) {
    var a = e.updateQueue;
    fn = !1;
    var u = a.firstBaseUpdate, f = a.lastBaseUpdate, _ = a.shared.pending;
    if (_ !== null) {
      a.shared.pending = null;
      var k = _, I = k.next;
      k.next = null, f === null ? u = I : f.next = I, f = k;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, _ = U.lastBaseUpdate, _ !== f && (_ === null ? U.firstBaseUpdate = I : _.next = I, U.lastBaseUpdate = k));
    }
    if (u !== null) {
      var b = a.baseState;
      f = 0, U = I = k = null, _ = u;
      do {
        var F = _.lane, Q = _.eventTime;
        if ((r & F) === F) {
          U !== null && (U = U.next = {
            eventTime: Q,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var G = e, J = _;
            switch (F = t, Q = n, J.tag) {
              case 1:
                if (G = J.payload, typeof G == "function") {
                  b = G.call(Q, b, F);
                  break e;
                }
                b = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = J.payload, F = typeof G == "function" ? G.call(Q, b, F) : G, F == null) break e;
                b = K({}, b, F);
                break e;
              case 2:
                fn = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (e.flags |= 64, F = a.effects, F === null ? a.effects = [_] : F.push(_));
        } else Q = { eventTime: Q, lane: F, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, U === null ? (I = U = Q, k = b) : U = U.next = Q, f |= F;
        if (_ = _.next, _ === null) {
          if (_ = a.shared.pending, _ === null) break;
          F = _, _ = F.next, F.next = null, a.lastBaseUpdate = F, a.shared.pending = null;
        }
      } while (!0);
      if (U === null && (k = b), a.baseState = k, a.firstBaseUpdate = I, a.lastBaseUpdate = U, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          f |= a.lane, a = a.next;
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      $n |= f, e.lanes = f, e.memoizedState = b;
    }
  }
  function qu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(i(191, a));
        a.call(r);
      }
    }
  }
  var Kr = {}, Dt = un(Kr), Gr = un(Kr), Xr = un(Kr);
  function Ln(e) {
    if (e === Kr) throw Error(i(174));
    return e;
  }
  function Go(e, t) {
    switch (xe(Xr, t), xe(Gr, e), xe(Dt, Kr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ga(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ga(t, e);
    }
    Re(Dt), xe(Dt, t);
  }
  function sr() {
    Re(Dt), Re(Gr), Re(Xr);
  }
  function Yu(e) {
    Ln(Xr.current);
    var t = Ln(Dt.current), n = Ga(t, e.type);
    t !== n && (xe(Gr, e), xe(Dt, n));
  }
  function Xo(e) {
    Gr.current === e && (Re(Dt), Re(Gr));
  }
  var $e = un(0);
  function ea(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Jo = [];
  function Zo() {
    for (var e = 0; e < Jo.length; e++) Jo[e]._workInProgressVersionPrimary = null;
    Jo.length = 0;
  }
  var ta = H.ReactCurrentDispatcher, es = H.ReactCurrentBatchConfig, In = 0, De = null, je = null, be = null, na = !1, Jr = !1, Zr = 0, Am = 0;
  function Ke() {
    throw Error(i(321));
  }
  function ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function ns(e, t, n, r, a, u) {
    if (In = u, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ta.current = e === null || e.memoizedState === null ? bm : Bm, e = n(r, a), Jr) {
      u = 0;
      do {
        if (Jr = !1, Zr = 0, 25 <= u) throw Error(i(301));
        u += 1, be = je = null, t.updateQueue = null, ta.current = Wm, e = n(r, a);
      } while (Jr);
    }
    if (ta.current = aa, t = je !== null && je.next !== null, In = 0, be = je = De = null, na = !1, t) throw Error(i(300));
    return e;
  }
  function rs() {
    var e = Zr !== 0;
    return Zr = 0, e;
  }
  function zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return be === null ? De.memoizedState = be = e : be = be.next = e, be;
  }
  function gt() {
    if (je === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = be === null ? De.memoizedState : be.next;
    if (t !== null) be = t, je = e;
    else {
      if (e === null) throw Error(i(310));
      je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, be === null ? De.memoizedState = be = e : be = be.next = e;
    }
    return be;
  }
  function el(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ls(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = je, a = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = u.next, u.next = f;
      }
      r.baseQueue = a = u, n.pending = null;
    }
    if (a !== null) {
      u = a.next, r = r.baseState;
      var _ = f = null, k = null, I = u;
      do {
        var U = I.lane;
        if ((In & U) === U) k !== null && (k = k.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var b = {
            lane: U,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          k === null ? (_ = k = b, f = r) : k = k.next = b, De.lanes |= U, $n |= U;
        }
        I = I.next;
      } while (I !== null && I !== u);
      k === null ? f = r : k.next = _, Ct(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = f, t.baseQueue = k, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        u = a.lane, De.lanes |= u, $n |= u, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function as(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var f = a = a.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== a);
      Ct(u, t.memoizedState) || (nt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function Ku() {
  }
  function Gu(e, t) {
    var n = De, r = gt(), a = t(), u = !Ct(r.memoizedState, a);
    if (u && (r.memoizedState = a, nt = !0), r = r.queue, os(Zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || be !== null && be.memoizedState.tag & 1) {
      if (n.flags |= 2048, tl(9, Ju.bind(null, n, r, a, t), void 0, null), Be === null) throw Error(i(349));
      (In & 30) !== 0 || Xu(n, t, a);
    }
    return a;
  }
  function Xu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ju(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ec(t) && tc(e);
  }
  function Zu(e, t, n) {
    return n(function() {
      ec(t) && tc(e);
    });
  }
  function ec(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function tc(e) {
    var t = Vt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function nc(e) {
    var t = zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: el, lastRenderedState: e }, t.queue = e, e = e.dispatch = Um.bind(null, De, e), [t.memoizedState, e];
  }
  function tl(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function rc() {
    return gt().memoizedState;
  }
  function ra(e, t, n, r) {
    var a = zt();
    De.flags |= e, a.memoizedState = tl(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function la(e, t, n, r) {
    var a = gt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (je !== null) {
      var f = je.memoizedState;
      if (u = f.destroy, r !== null && ts(r, f.deps)) {
        a.memoizedState = tl(t, n, u, r);
        return;
      }
    }
    De.flags |= e, a.memoizedState = tl(1 | t, n, u, r);
  }
  function lc(e, t) {
    return ra(8390656, 8, e, t);
  }
  function os(e, t) {
    return la(2048, 8, e, t);
  }
  function ac(e, t) {
    return la(4, 2, e, t);
  }
  function oc(e, t) {
    return la(4, 4, e, t);
  }
  function sc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function ic(e, t, n) {
    return n = n != null ? n.concat([e]) : null, la(4, 4, sc.bind(null, t, e), n);
  }
  function ss() {
  }
  function uc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ts(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function cc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ts(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function dc(e, t, n) {
    return (In & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n) : (Ct(n, t) || (n = bi(), De.lanes |= n, $n |= n, e.baseState = !0), t);
  }
  function Fm(e, t) {
    var n = Se;
    Se = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = es.transition;
    es.transition = {};
    try {
      e(!1), t();
    } finally {
      Se = n, es.transition = r;
    }
  }
  function fc() {
    return gt().memoizedState;
  }
  function jm(e, t, n) {
    var r = yn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, mc(e)) pc(t, n);
    else if (n = Hu(e, t, n, r), n !== null) {
      var a = Ze();
      Pt(n, e, r, a), hc(n, t, r);
    }
  }
  function Um(e, t, n) {
    var r = yn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (mc(e)) pc(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var f = t.lastRenderedState, _ = u(f, n);
        if (a.hasEagerState = !0, a.eagerState = _, Ct(_, f)) {
          var k = t.interleaved;
          k === null ? (a.next = a, Yo(t)) : (a.next = k.next, k.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = Hu(e, t, a, r), n !== null && (a = Ze(), Pt(n, e, r, a), hc(n, t, r));
    }
  }
  function mc(e) {
    var t = e.alternate;
    return e === De || t !== null && t === De;
  }
  function pc(e, t) {
    Jr = na = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function hc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
    }
  }
  var aa = { readContext: yt, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, bm = { readContext: yt, useCallback: function(e, t) {
    return zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: yt, useEffect: lc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ra(
      4194308,
      4,
      sc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ra(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ra(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = zt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = zt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jm.bind(null, De, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: nc, useDebugValue: ss, useDeferredValue: function(e) {
    return zt().memoizedState = e;
  }, useTransition: function() {
    var e = nc(!1), t = e[0];
    return e = Fm.bind(null, e[1]), zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = De, a = zt();
    if (Me) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(i(349));
      (In & 30) !== 0 || Xu(r, t, n);
    }
    a.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return a.queue = u, lc(Zu.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, tl(9, Ju.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = zt(), t = Be.identifierPrefix;
    if (Me) {
      var n = Ht, r = Wt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Am++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Bm = {
    readContext: yt,
    useCallback: uc,
    useContext: yt,
    useEffect: os,
    useImperativeHandle: ic,
    useInsertionEffect: ac,
    useLayoutEffect: oc,
    useMemo: cc,
    useReducer: ls,
    useRef: rc,
    useState: function() {
      return ls(el);
    },
    useDebugValue: ss,
    useDeferredValue: function(e) {
      var t = gt();
      return dc(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = ls(el)[0], t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ku,
    useSyncExternalStore: Gu,
    useId: fc,
    unstable_isNewReconciler: !1
  }, Wm = { readContext: yt, useCallback: uc, useContext: yt, useEffect: os, useImperativeHandle: ic, useInsertionEffect: ac, useLayoutEffect: oc, useMemo: cc, useReducer: as, useRef: rc, useState: function() {
    return as(el);
  }, useDebugValue: ss, useDeferredValue: function(e) {
    var t = gt();
    return je === null ? t.memoizedState = e : dc(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = as(el)[0], t = gt().memoizedState;
    return [e, t];
  }, useMutableSource: Ku, useSyncExternalStore: Gu, useId: fc, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function is(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var oa = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = yn(e), u = Qt(r, a);
    u.payload = t, n != null && (u.callback = n), t = mn(e, u, a), t !== null && (Pt(t, e, a, r), Jl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = yn(e), u = Qt(r, a);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = mn(e, u, a), t !== null && (Pt(t, e, a, r), Jl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ze(), r = yn(e), a = Qt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = mn(e, a, r), t !== null && (Pt(t, e, r, n), Jl(t, e, r));
  } };
  function vc(e, t, n, r, a, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, f) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(a, u) : !0;
  }
  function yc(e, t, n) {
    var r = !1, a = cn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = yt(u) : (a = tt(t) ? Tn : Ye.current, r = t.contextTypes, u = (r = r != null) ? er(e, a) : cn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = oa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function gc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && oa.enqueueReplaceState(t, t.state, null);
  }
  function us(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Ko(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? a.context = yt(u) : (u = tt(t) ? Tn : Ye.current, a.context = er(e, u)), a.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (is(e, t, u, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && oa.enqueueReplaceState(a, a.state, null), Zl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ir(e, t) {
    try {
      var n = "", r = t;
      do
        n += ve(r), r = r.return;
      while (r);
      var a = n;
    } catch (u) {
      a = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function cs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ds(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Hm = typeof WeakMap == "function" ? WeakMap : Map;
  function _c(e, t, n) {
    n = Qt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ma || (ma = !0, xs = r), ds(e, t);
    }, n;
  }
  function Ec(e, t, n) {
    n = Qt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        ds(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      ds(e, t), typeof r != "function" && (hn === null ? hn = /* @__PURE__ */ new Set([this]) : hn.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function wc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Hm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = lp.bind(null, e, t, n), t.then(e, e));
  }
  function kc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Sc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1), t.tag = 2, mn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Vm = H.ReactCurrentOwner, nt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Wu(t, null, n, r) : lr(t, e.child, n, r);
  }
  function Cc(e, t, n, r, a) {
    n = n.render;
    var u = t.ref;
    return or(t, a), r = ns(e, t, n, r, u, a), n = rs(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Me && n && jo(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function Nc(e, t, n, r, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !$s(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, xc(e, t, u, r, a)) : (e = _a(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & a) === 0) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : br, n(f, r) && e.ref === t.ref) return qt(e, t, a);
    }
    return t.flags |= 1, e = _n(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function xc(e, t, n, r, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (br(u, r) && e.ref === t.ref) if (nt = !1, t.pendingProps = r = u, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (nt = !0);
      else return t.lanes = e.lanes, qt(e, t, a);
    }
    return fs(e, t, n, r, a);
  }
  function Tc(e, t, n) {
    var r = t.pendingProps, a = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(cr, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, xe(cr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, xe(cr, dt), dt |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, xe(cr, dt), dt |= r;
    return Je(e, t, a, n), t.child;
  }
  function Rc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function fs(e, t, n, r, a) {
    var u = tt(n) ? Tn : Ye.current;
    return u = er(t, u), or(t, a), n = ns(e, t, n, r, u, a), r = rs(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Me && r && jo(t), t.flags |= 1, Je(e, t, n, a), t.child);
  }
  function Pc(e, t, n, r, a) {
    if (tt(n)) {
      var u = !0;
      Hl(t);
    } else u = !1;
    if (or(t, a), t.stateNode === null) ia(e, t), yc(t, n, r), us(t, n, r, a), r = !0;
    else if (e === null) {
      var f = t.stateNode, _ = t.memoizedProps;
      f.props = _;
      var k = f.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = yt(I) : (I = tt(n) ? Tn : Ye.current, I = er(t, I));
      var U = n.getDerivedStateFromProps, b = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      b || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ !== r || k !== I) && gc(t, f, r, I), fn = !1;
      var F = t.memoizedState;
      f.state = F, Zl(t, r, f, a), k = t.memoizedState, _ !== r || F !== k || et.current || fn ? (typeof U == "function" && (is(t, n, U, r), k = t.memoizedState), (_ = fn || vc(t, n, _, r, F, k, I)) ? (b || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = k), f.props = r, f.state = k, f.context = I, r = _) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Vu(e, t), _ = t.memoizedProps, I = t.type === t.elementType ? _ : xt(t.type, _), f.props = I, b = t.pendingProps, F = f.context, k = n.contextType, typeof k == "object" && k !== null ? k = yt(k) : (k = tt(n) ? Tn : Ye.current, k = er(t, k));
      var Q = n.getDerivedStateFromProps;
      (U = typeof Q == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ !== b || F !== k) && gc(t, f, r, k), fn = !1, F = t.memoizedState, f.state = F, Zl(t, r, f, a);
      var G = t.memoizedState;
      _ !== b || F !== G || et.current || fn ? (typeof Q == "function" && (is(t, n, Q, r), G = t.memoizedState), (I = fn || vc(t, n, I, r, F, G, k) || !1) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, G, k), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, G, k)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = G), f.props = r, f.state = G, f.context = k, r = I) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ms(e, t, n, r, u, a);
  }
  function ms(e, t, n, r, a, u) {
    Rc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return a && Du(t, n, !1), qt(e, t, u);
    r = t.stateNode, Vm.current = t;
    var _ = f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && f ? (t.child = lr(t, e.child, null, u), t.child = lr(t, null, _, u)) : Je(e, t, _, u), t.memoizedState = r.state, a && Du(t, n, !0), t.child;
  }
  function Mc(e) {
    var t = e.stateNode;
    t.pendingContext ? Iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Iu(e, t.context, !1), Go(e, t.containerInfo);
  }
  function Lc(e, t, n, r, a) {
    return rr(), Wo(a), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var ps = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ic(e, t, n) {
    var r = t.pendingProps, a = $e.current, u = !1, f = (t.flags & 128) !== 0, _;
    if ((_ = f) || (_ = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), _ ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), xe($e, a & 1), e === null)
      return Bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, f = { mode: "hidden", children: f }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = f) : u = Ea(f, r, 0, null), e = An(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = hs(n), t.memoizedState = ps, e) : vs(t, f));
    if (a = e.memoizedState, a !== null && (_ = a.dehydrated, _ !== null)) return Qm(e, t, f, r, _, a, n);
    if (u) {
      u = r.fallback, f = t.mode, a = e.child, _ = a.sibling;
      var k = { mode: "hidden", children: r.children };
      return (f & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = k, t.deletions = null) : (r = _n(a, k), r.subtreeFlags = a.subtreeFlags & 14680064), _ !== null ? u = _n(_, u) : (u = An(u, f, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, f = e.child.memoizedState, f = f === null ? hs(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, u.memoizedState = f, u.childLanes = e.childLanes & ~n, t.memoizedState = ps, r;
    }
    return u = e.child, e = u.sibling, r = _n(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function vs(e, t) {
    return t = Ea({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function sa(e, t, n, r) {
    return r !== null && Wo(r), lr(t, e.child, null, n), e = vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qm(e, t, n, r, a, u, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = cs(Error(i(422))), sa(e, t, f, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, a = t.mode, r = Ea({ mode: "visible", children: r.children }, a, 0, null), u = An(u, a, f, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && lr(t, e.child, null, f), t.child.memoizedState = hs(f), t.memoizedState = ps, u);
    if ((t.mode & 1) === 0) return sa(e, t, f, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var _ = r.dgst;
      return r = _, u = Error(i(419)), r = cs(u, r, void 0), sa(e, t, f, r);
    }
    if (_ = (f & e.childLanes) !== 0, nt || _) {
      if (r = Be, r !== null) {
        switch (f & -f) {
          case 4:
            a = 2;
            break;
          case 16:
            a = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            a = 32;
            break;
          case 536870912:
            a = 268435456;
            break;
          default:
            a = 0;
        }
        a = (a & (r.suspendedLanes | f)) !== 0 ? 0 : a, a !== 0 && a !== u.retryLane && (u.retryLane = a, Vt(e, a), Pt(r, e, a, -1));
      }
      return Is(), r = cs(Error(i(421))), sa(e, t, f, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ap.bind(null, e), a._reactRetry = t, null) : (e = u.treeContext, ct = sn(a.nextSibling), ut = t, Me = !0, Nt = null, e !== null && (ht[vt++] = Wt, ht[vt++] = Ht, ht[vt++] = Rn, Wt = e.id, Ht = e.overflow, Rn = t), t = vs(t, r.children), t.flags |= 4096, t);
  }
  function $c(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qo(e.return, t, n);
  }
  function ys(e, t, n, r, a) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = a);
  }
  function Dc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, u = r.tail;
    if (Je(e, t, r.children, n), r = $e.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $c(e, n, t);
        else if (e.tag === 19) $c(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (xe($e, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && ea(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ys(t, !1, a, n, u);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && ea(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        ys(t, !0, n, null, u);
        break;
      case "together":
        ys(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ia(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _n(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function qm(e, t, n) {
    switch (t.tag) {
      case 3:
        Mc(t), rr();
        break;
      case 5:
        Yu(t);
        break;
      case 1:
        tt(t.type) && Hl(t);
        break;
      case 4:
        Go(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        xe(Gl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (xe($e, $e.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ic(e, t, n) : (xe($e, $e.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
        xe($e, $e.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Dc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), xe($e, $e.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Tc(e, t, n);
    }
    return qt(e, t, n);
  }
  var zc, gs, Oc, Ac;
  zc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, gs = function() {
  }, Oc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, Ln(Dt.current);
      var u = null;
      switch (n) {
        case "input":
          a = Qa(e, a), r = Qa(e, r), u = [];
          break;
        case "select":
          a = K({}, a, { value: void 0 }), r = K({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          a = Ka(e, a), r = Ka(e, r), u = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bl);
      }
      Xa(n, r);
      var f;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var _ = a[I];
        for (f in _) _.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (d.hasOwnProperty(I) ? u || (u = []) : (u = u || []).push(I, null));
      for (I in r) {
        var k = r[I];
        if (_ = a != null ? a[I] : void 0, r.hasOwnProperty(I) && k !== _ && (k != null || _ != null)) if (I === "style") if (_) {
          for (f in _) !_.hasOwnProperty(f) || k && k.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in k) k.hasOwnProperty(f) && _[f] !== k[f] && (n || (n = {}), n[f] = k[f]);
        } else n || (u || (u = []), u.push(
          I,
          n
        )), n = k;
        else I === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, _ = _ ? _.__html : void 0, k != null && _ !== k && (u = u || []).push(I, k)) : I === "children" ? typeof k != "string" && typeof k != "number" || (u = u || []).push(I, "" + k) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (d.hasOwnProperty(I) ? (k != null && I === "onScroll" && Te("scroll", e), u || _ === k || (u = [])) : (u = u || []).push(I, k));
      }
      n && (u = u || []).push("style", n);
      var I = u;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, Ac = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function nl(e, t) {
    if (!Me) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ym(e, t, n) {
    var r = t.pendingProps;
    switch (Uo(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return tt(t.type) && Wl(), Ge(t), null;
      case 3:
        return r = t.stateNode, sr(), Re(et), Re(Ye), Zo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Nt !== null && (Ps(Nt), Nt = null))), gs(e, t), Ge(t), null;
      case 5:
        Xo(t);
        var a = Ln(Xr.current);
        if (n = t.type, e !== null && t.stateNode != null) Oc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return Ge(t), null;
          }
          if (e = Ln(Dt.current), Yl(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[$t] = t, r[Qr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Te("cancel", r), Te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Wr.length; a++) Te(Wr[a], r);
                break;
              case "source":
                Te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Te(
                  "error",
                  r
                ), Te("load", r);
                break;
              case "details":
                Te("toggle", r);
                break;
              case "input":
                yi(r, u), Te("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, Te("invalid", r);
                break;
              case "textarea":
                Ei(r, u), Te("invalid", r);
            }
            Xa(n, u), a = null;
            for (var f in u) if (u.hasOwnProperty(f)) {
              var _ = u[f];
              f === "children" ? typeof _ == "string" ? r.textContent !== _ && (u.suppressHydrationWarning !== !0 && Ul(r.textContent, _, e), a = ["children", _]) : typeof _ == "number" && r.textContent !== "" + _ && (u.suppressHydrationWarning !== !0 && Ul(
                r.textContent,
                _,
                e
              ), a = ["children", "" + _]) : d.hasOwnProperty(f) && _ != null && f === "onScroll" && Te("scroll", r);
            }
            switch (n) {
              case "input":
                yl(r), _i(r, u, !0);
                break;
              case "textarea":
                yl(r), ki(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = bl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            f = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Si(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = f.createElement(n, { is: r.is }) : (e = f.createElement(n), n === "select" && (f = e, r.multiple ? f.multiple = !0 : r.size && (f.size = r.size))) : e = f.createElementNS(e, n), e[$t] = t, e[Qr] = r, zc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Ja(n, r), n) {
                case "dialog":
                  Te("cancel", e), Te("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Te("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Wr.length; a++) Te(Wr[a], e);
                  a = r;
                  break;
                case "source":
                  Te("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Te(
                    "error",
                    e
                  ), Te("load", e), a = r;
                  break;
                case "details":
                  Te("toggle", e), a = r;
                  break;
                case "input":
                  yi(e, r), a = Qa(e, r), Te("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = K({}, r, { value: void 0 }), Te("invalid", e);
                  break;
                case "textarea":
                  Ei(e, r), a = Ka(e, r), Te("invalid", e);
                  break;
                default:
                  a = r;
              }
              Xa(n, a), _ = a;
              for (u in _) if (_.hasOwnProperty(u)) {
                var k = _[u];
                u === "style" ? xi(e, k) : u === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && Ci(e, k)) : u === "children" ? typeof k == "string" ? (n !== "textarea" || k !== "") && Cr(e, k) : typeof k == "number" && Cr(e, "" + k) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? k != null && u === "onScroll" && Te("scroll", e) : k != null && z(e, u, k, f));
              }
              switch (n) {
                case "input":
                  yl(e), _i(e, r, !1);
                  break;
                case "textarea":
                  yl(e), ki(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ke(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? Bn(e, !!r.multiple, u, !1) : r.defaultValue != null && Bn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = bl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ge(t), null;
      case 6:
        if (e && t.stateNode != null) Ac(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Ln(Xr.current), Ln(Dt.current), Yl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (u = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$t] = t, t.stateNode = r;
        }
        return Ge(t), null;
      case 13:
        if (Re($e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Me && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Uu(), rr(), t.flags |= 98560, u = !1;
          else if (u = Yl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[$t] = t;
            } else rr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), u = !1;
          } else Nt !== null && (Ps(Nt), Nt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || ($e.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Is())), t.updateQueue !== null && (t.flags |= 4), Ge(t), null);
      case 4:
        return sr(), gs(e, t), e === null && Hr(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return Qo(t.type._context), Ge(t), null;
      case 17:
        return tt(t.type) && Wl(), Ge(t), null;
      case 19:
        if (Re($e), u = t.memoizedState, u === null) return Ge(t), null;
        if (r = (t.flags & 128) !== 0, f = u.rendering, f === null) if (r) nl(u, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = ea(e), f !== null) {
              for (t.flags |= 128, nl(u, !1), r = f.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, f = u.alternate, f === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = f.childLanes, u.lanes = f.lanes, u.child = f.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = f.memoizedProps, u.memoizedState = f.memoizedState, u.updateQueue = f.updateQueue, u.type = f.type, e = f.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return xe($e, $e.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Oe() > dr && (t.flags |= 128, r = !0, nl(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ea(f), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), nl(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !Me) return Ge(t), null;
          } else 2 * Oe() - u.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, nl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (n = u.last, n !== null ? n.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Oe(), t.sibling = null, n = $e.current, xe($e, r ? n & 1 | 2 : n & 1), t) : (Ge(t), null);
      case 22:
      case 23:
        return Ls(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Km(e, t) {
    switch (Uo(t), t.tag) {
      case 1:
        return tt(t.type) && Wl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return sr(), Re(et), Re(Ye), Zo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Xo(t), null;
      case 13:
        if (Re($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          rr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Re($e), null;
      case 4:
        return sr(), null;
      case 10:
        return Qo(t.type._context), null;
      case 22:
      case 23:
        return Ls(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ua = !1, Xe = !1, Gm = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
  function ur(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ze(e, t, r);
    }
    else n.current = null;
  }
  function _s(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var Fc = !1;
  function Xm(e, t) {
    if (Lo = Pl, e = vu(), So(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var f = 0, _ = -1, k = -1, I = 0, U = 0, b = e, F = null;
          t: for (; ; ) {
            for (var Q; b !== n || a !== 0 && b.nodeType !== 3 || (_ = f + a), b !== u || r !== 0 && b.nodeType !== 3 || (k = f + r), b.nodeType === 3 && (f += b.nodeValue.length), (Q = b.firstChild) !== null; )
              F = b, b = Q;
            for (; ; ) {
              if (b === e) break t;
              if (F === n && ++I === a && (_ = f), F === u && ++U === r && (k = f), (Q = b.nextSibling) !== null) break;
              b = F, F = b.parentNode;
            }
            b = Q;
          }
          n = _ === -1 || k === -1 ? null : { start: _, end: k };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Io = { focusedElem: e, selectionRange: n }, Pl = !1, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
    else for (; Y !== null; ) {
      t = Y;
      try {
        var G = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (G !== null) {
              var J = G.memoizedProps, Ae = G.memoizedState, x = t.stateNode, S = x.getSnapshotBeforeUpdate(t.elementType === t.type ? J : xt(t.type, J), Ae);
              x.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (B) {
        ze(t, t.return, B);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Y = e;
        break;
      }
      Y = t.return;
    }
    return G = Fc, Fc = !1, G;
  }
  function rl(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          a.destroy = void 0, u !== void 0 && _s(t, n, u);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function ca(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Es(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function jc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[Qr], delete t[Oo], delete t[$m], delete t[Dm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ws(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bl));
    else if (r !== 4 && (e = e.child, e !== null)) for (ws(e, t, n), e = e.sibling; e !== null; ) ws(e, t, n), e = e.sibling;
  }
  function ks(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ks(e, t, n), e = e.sibling; e !== null; ) ks(e, t, n), e = e.sibling;
  }
  var Ve = null, Tt = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; ) Bc(e, t, n), n = n.sibling;
  }
  function Bc(e, t, n) {
    if (It && typeof It.onCommitFiberUnmount == "function") try {
      It.onCommitFiberUnmount(Sl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Xe || ur(n, t);
      case 6:
        var r = Ve, a = Tt;
        Ve = null, pn(e, t, n), Ve = r, Tt = a, Ve !== null && (Tt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null && (Tt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? zo(e.parentNode, n) : e.nodeType === 1 && zo(e, n), zr(e)) : zo(Ve, n.stateNode));
        break;
      case 4:
        r = Ve, a = Tt, Ve = n.stateNode.containerInfo, Tt = !0, pn(e, t, n), Ve = r, Tt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var u = a, f = u.destroy;
            u = u.tag, f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && _s(n, t, f), a = a.next;
          } while (a !== r);
        }
        pn(e, t, n);
        break;
      case 1:
        if (!Xe && (ur(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (_) {
          ze(n, t, _);
        }
        pn(e, t, n);
        break;
      case 21:
        pn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null, pn(e, t, n), Xe = r) : pn(e, t, n);
        break;
      default:
        pn(e, t, n);
    }
  }
  function Wc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Gm()), t.forEach(function(r) {
        var a = op.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var u = e, f = t, _ = f;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              Ve = _.stateNode, Tt = !1;
              break e;
            case 3:
              Ve = _.stateNode.containerInfo, Tt = !0;
              break e;
            case 4:
              Ve = _.stateNode.containerInfo, Tt = !0;
              break e;
          }
          _ = _.return;
        }
        if (Ve === null) throw Error(i(160));
        Bc(u, f, a), Ve = null, Tt = !1;
        var k = a.alternate;
        k !== null && (k.return = null), a.return = null;
      } catch (I) {
        ze(a, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Hc(t, e), t = t.sibling;
  }
  function Hc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Rt(t, e), Ot(e), r & 4) {
          try {
            rl(3, e, e.return), ca(3, e);
          } catch (J) {
            ze(e, e.return, J);
          }
          try {
            rl(5, e, e.return);
          } catch (J) {
            ze(e, e.return, J);
          }
        }
        break;
      case 1:
        Rt(t, e), Ot(e), r & 512 && n !== null && ur(n, n.return);
        break;
      case 5:
        if (Rt(t, e), Ot(e), r & 512 && n !== null && ur(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Cr(a, "");
          } catch (J) {
            ze(e, e.return, J);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var u = e.memoizedProps, f = n !== null ? n.memoizedProps : u, _ = e.type, k = e.updateQueue;
          if (e.updateQueue = null, k !== null) try {
            _ === "input" && u.type === "radio" && u.name != null && gi(a, u), Ja(_, f);
            var I = Ja(_, u);
            for (f = 0; f < k.length; f += 2) {
              var U = k[f], b = k[f + 1];
              U === "style" ? xi(a, b) : U === "dangerouslySetInnerHTML" ? Ci(a, b) : U === "children" ? Cr(a, b) : z(a, U, b, I);
            }
            switch (_) {
              case "input":
                qa(a, u);
                break;
              case "textarea":
                wi(a, u);
                break;
              case "select":
                var F = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!u.multiple;
                var Q = u.value;
                Q != null ? Bn(a, !!u.multiple, Q, !1) : F !== !!u.multiple && (u.defaultValue != null ? Bn(
                  a,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Bn(a, !!u.multiple, u.multiple ? [] : "", !1));
            }
            a[Qr] = u;
          } catch (J) {
            ze(e, e.return, J);
          }
        }
        break;
      case 6:
        if (Rt(t, e), Ot(e), r & 4) {
          if (e.stateNode === null) throw Error(i(162));
          a = e.stateNode, u = e.memoizedProps;
          try {
            a.nodeValue = u;
          } catch (J) {
            ze(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Rt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          zr(t.containerInfo);
        } catch (J) {
          ze(e, e.return, J);
        }
        break;
      case 4:
        Rt(t, e), Ot(e);
        break;
      case 13:
        Rt(t, e), Ot(e), a = e.child, a.flags & 8192 && (u = a.memoizedState !== null, a.stateNode.isHidden = u, !u || a.alternate !== null && a.alternate.memoizedState !== null || (Ns = Oe())), r & 4 && Wc(e);
        break;
      case 22:
        if (U = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (I = Xe) || U, Rt(t, e), Xe = I) : Rt(t, e), Ot(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !U && (e.mode & 1) !== 0) for (Y = e, U = e.child; U !== null; ) {
            for (b = Y = U; Y !== null; ) {
              switch (F = Y, Q = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rl(4, F, F.return);
                  break;
                case 1:
                  ur(F, F.return);
                  var G = F.stateNode;
                  if (typeof G.componentWillUnmount == "function") {
                    r = F, n = F.return;
                    try {
                      t = r, G.props = t.memoizedProps, G.state = t.memoizedState, G.componentWillUnmount();
                    } catch (J) {
                      ze(r, n, J);
                    }
                  }
                  break;
                case 5:
                  ur(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    qc(b);
                    continue;
                  }
              }
              Q !== null ? (Q.return = F, Y = Q) : qc(b);
            }
            U = U.sibling;
          }
          e: for (U = null, b = e; ; ) {
            if (b.tag === 5) {
              if (U === null) {
                U = b;
                try {
                  a = b.stateNode, I ? (u = a.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (_ = b.stateNode, k = b.memoizedProps.style, f = k != null && k.hasOwnProperty("display") ? k.display : null, _.style.display = Ni("display", f));
                } catch (J) {
                  ze(e, e.return, J);
                }
              }
            } else if (b.tag === 6) {
              if (U === null) try {
                b.stateNode.nodeValue = I ? "" : b.memoizedProps;
              } catch (J) {
                ze(e, e.return, J);
              }
            } else if ((b.tag !== 22 && b.tag !== 23 || b.memoizedState === null || b === e) && b.child !== null) {
              b.child.return = b, b = b.child;
              continue;
            }
            if (b === e) break e;
            for (; b.sibling === null; ) {
              if (b.return === null || b.return === e) break e;
              U === b && (U = null), b = b.return;
            }
            U === b && (U = null), b.sibling.return = b.return, b = b.sibling;
          }
        }
        break;
      case 19:
        Rt(t, e), Ot(e), r & 4 && Wc(e);
        break;
      case 21:
        break;
      default:
        Rt(
          t,
          e
        ), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Uc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (Cr(a, ""), r.flags &= -33);
            var u = bc(e);
            ks(e, u, a);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo, _ = bc(e);
            ws(e, _, f);
            break;
          default:
            throw Error(i(161));
        }
      } catch (k) {
        ze(e, e.return, k);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jm(e, t, n) {
    Y = e, Vc(e);
  }
  function Vc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
      var a = Y, u = a.child;
      if (a.tag === 22 && r) {
        var f = a.memoizedState !== null || ua;
        if (!f) {
          var _ = a.alternate, k = _ !== null && _.memoizedState !== null || Xe;
          _ = ua;
          var I = Xe;
          if (ua = f, (Xe = k) && !I) for (Y = a; Y !== null; ) f = Y, k = f.child, f.tag === 22 && f.memoizedState !== null ? Yc(a) : k !== null ? (k.return = f, Y = k) : Yc(a);
          for (; u !== null; ) Y = u, Vc(u), u = u.sibling;
          Y = a, ua = _, Xe = I;
        }
        Qc(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a, Y = u) : Qc(e);
    }
  }
  function Qc(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || ca(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && qu(t, u, r);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                qu(t, f, n);
              }
              break;
            case 5:
              var _ = t.stateNode;
              if (n === null && t.flags & 4) {
                n = _;
                var k = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && n.focus();
                    break;
                  case "img":
                    k.src && (n.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var I = t.alternate;
                if (I !== null) {
                  var U = I.memoizedState;
                  if (U !== null) {
                    var b = U.dehydrated;
                    b !== null && zr(b);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(i(163));
          }
          Xe || t.flags & 512 && Es(t);
        } catch (F) {
          ze(t, t.return, F);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Y = n;
        break;
      }
      Y = t.return;
    }
  }
  function qc(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Y = n;
        break;
      }
      Y = t.return;
    }
  }
  function Yc(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ca(4, t);
            } catch (k) {
              ze(t, n, k);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (k) {
                ze(t, a, k);
              }
            }
            var u = t.return;
            try {
              Es(t);
            } catch (k) {
              ze(t, u, k);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Es(t);
            } catch (k) {
              ze(t, f, k);
            }
        }
      } catch (k) {
        ze(t, t.return, k);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var _ = t.sibling;
      if (_ !== null) {
        _.return = t.return, Y = _;
        break;
      }
      Y = t.return;
    }
  }
  var Zm = Math.ceil, da = H.ReactCurrentDispatcher, Ss = H.ReactCurrentOwner, _t = H.ReactCurrentBatchConfig, he = 0, Be = null, Fe = null, Qe = 0, dt = 0, cr = un(0), Ue = 0, ll = null, $n = 0, fa = 0, Cs = 0, al = null, rt = null, Ns = 0, dr = 1 / 0, Yt = null, ma = !1, xs = null, hn = null, pa = !1, vn = null, ha = 0, ol = 0, Ts = null, va = -1, ya = 0;
  function Ze() {
    return (he & 6) !== 0 ? Oe() : va !== -1 ? va : va = Oe();
  }
  function yn(e) {
    return (e.mode & 1) === 0 ? 1 : (he & 2) !== 0 && Qe !== 0 ? Qe & -Qe : Om.transition !== null ? (ya === 0 && (ya = bi()), ya) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gi(e.type)), e);
  }
  function Pt(e, t, n, r) {
    if (50 < ol) throw ol = 0, Ts = null, Error(i(185));
    Mr(e, n, r), ((he & 2) === 0 || e !== Be) && (e === Be && ((he & 2) === 0 && (fa |= n), Ue === 4 && gn(e, Qe)), lt(e, r), n === 1 && he === 0 && (t.mode & 1) === 0 && (dr = Oe() + 500, Vl && dn()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    Of(e, t);
    var r = xl(e, e === Be ? Qe : 0);
    if (r === 0) n !== null && Fi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fi(n), t === 1) e.tag === 0 ? zm(Gc.bind(null, e)) : zu(Gc.bind(null, e)), Lm(function() {
        (he & 6) === 0 && dn();
      }), n = null;
      else {
        switch (Bi(r)) {
          case 1:
            n = ao;
            break;
          case 4:
            n = ji;
            break;
          case 16:
            n = kl;
            break;
          case 536870912:
            n = Ui;
            break;
          default:
            n = kl;
        }
        n = ld(n, Kc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Kc(e, t) {
    if (va = -1, ya = 0, (he & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (fr() && e.callbackNode !== n) return null;
    var r = xl(e, e === Be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ga(e, r);
    else {
      t = r;
      var a = he;
      he |= 2;
      var u = Jc();
      (Be !== e || Qe !== t) && (Yt = null, dr = Oe() + 500, zn(e, t));
      do
        try {
          np();
          break;
        } catch (_) {
          Xc(e, _);
        }
      while (!0);
      Vo(), da.current = u, he = a, Fe !== null ? t = 0 : (Be = null, Qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = oo(e), a !== 0 && (r = a, t = Rs(e, a))), t === 1) throw n = ll, zn(e, 0), gn(e, r), lt(e, Oe()), n;
      if (t === 6) gn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !ep(a) && (t = ga(e, r), t === 2 && (u = oo(e), u !== 0 && (r = u, t = Rs(e, u))), t === 1)) throw n = ll, zn(e, 0), gn(e, r), lt(e, Oe()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            On(e, rt, Yt);
            break;
          case 3:
            if (gn(e, r), (r & 130023424) === r && (t = Ns + 500 - Oe(), 10 < t)) {
              if (xl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Ze(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Do(On.bind(null, e, rt, Yt), t);
              break;
            }
            On(e, rt, Yt);
            break;
          case 4:
            if (gn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var f = 31 - St(r);
              u = 1 << f, f = t[f], f > a && (a = f), r &= ~u;
            }
            if (r = a, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Do(On.bind(null, e, rt, Yt), r);
              break;
            }
            On(e, rt, Yt);
            break;
          case 5:
            On(e, rt, Yt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return lt(e, Oe()), e.callbackNode === n ? Kc.bind(null, e) : null;
  }
  function Rs(e, t) {
    var n = al;
    return e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256), e = ga(e, t), e !== 2 && (t = rt, rt = n, t !== null && Ps(t)), e;
  }
  function Ps(e) {
    rt === null ? rt = e : rt.push.apply(rt, e);
  }
  function ep(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Ct(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function gn(e, t) {
    for (t &= ~Cs, t &= ~fa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Gc(e) {
    if ((he & 6) !== 0) throw Error(i(327));
    fr();
    var t = xl(e, 0);
    if ((t & 1) === 0) return lt(e, Oe()), null;
    var n = ga(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = oo(e);
      r !== 0 && (t = r, n = Rs(e, r));
    }
    if (n === 1) throw n = ll, zn(e, 0), gn(e, t), lt(e, Oe()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, On(e, rt, Yt), lt(e, Oe()), null;
  }
  function Ms(e, t) {
    var n = he;
    he |= 1;
    try {
      return e(t);
    } finally {
      he = n, he === 0 && (dr = Oe() + 500, Vl && dn());
    }
  }
  function Dn(e) {
    vn !== null && vn.tag === 0 && (he & 6) === 0 && fr();
    var t = he;
    he |= 1;
    var n = _t.transition, r = Se;
    try {
      if (_t.transition = null, Se = 1, e) return e();
    } finally {
      Se = r, _t.transition = n, he = t, (he & 6) === 0 && dn();
    }
  }
  function Ls() {
    dt = cr.current, Re(cr);
  }
  function zn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Mm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Uo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wl();
          break;
        case 3:
          sr(), Re(et), Re(Ye), Zo();
          break;
        case 5:
          Xo(r);
          break;
        case 4:
          sr();
          break;
        case 13:
          Re($e);
          break;
        case 19:
          Re($e);
          break;
        case 10:
          Qo(r.type._context);
          break;
        case 22:
        case 23:
          Ls();
      }
      n = n.return;
    }
    if (Be = e, Fe = e = _n(e.current, null), Qe = dt = t, Ue = 0, ll = null, Cs = fa = $n = 0, rt = al = null, Mn !== null) {
      for (t = 0; t < Mn.length; t++) if (n = Mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, u = n.pending;
        if (u !== null) {
          var f = u.next;
          u.next = a, r.next = f;
        }
        n.pending = r;
      }
      Mn = null;
    }
    return e;
  }
  function Xc(e, t) {
    do {
      var n = Fe;
      try {
        if (Vo(), ta.current = aa, na) {
          for (var r = De.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          na = !1;
        }
        if (In = 0, be = je = De = null, Jr = !1, Zr = 0, Ss.current = null, n === null || n.return === null) {
          Ue = 1, ll = t, Fe = null;
          break;
        }
        e: {
          var u = e, f = n.return, _ = n, k = t;
          if (t = Qe, _.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var I = k, U = _, b = U.tag;
            if ((U.mode & 1) === 0 && (b === 0 || b === 11 || b === 15)) {
              var F = U.alternate;
              F ? (U.updateQueue = F.updateQueue, U.memoizedState = F.memoizedState, U.lanes = F.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var Q = kc(f);
            if (Q !== null) {
              Q.flags &= -257, Sc(Q, f, _, u, t), Q.mode & 1 && wc(u, I, t), t = Q, k = I;
              var G = t.updateQueue;
              if (G === null) {
                var J = /* @__PURE__ */ new Set();
                J.add(k), t.updateQueue = J;
              } else G.add(k);
              break e;
            } else {
              if ((t & 1) === 0) {
                wc(u, I, t), Is();
                break e;
              }
              k = Error(i(426));
            }
          } else if (Me && _.mode & 1) {
            var Ae = kc(f);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), Sc(Ae, f, _, u, t), Wo(ir(k, _));
              break e;
            }
          }
          u = k = ir(k, _), Ue !== 4 && (Ue = 2), al === null ? al = [u] : al.push(u), u = f;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var x = _c(u, k, t);
                Qu(u, x);
                break e;
              case 1:
                _ = k;
                var S = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (hn === null || !hn.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var B = Ec(u, _, t);
                  Qu(u, B);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ed(n);
      } catch (te) {
        t = te, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Jc() {
    var e = da.current;
    return da.current = aa, e === null ? aa : e;
  }
  function Is() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Be === null || ($n & 268435455) === 0 && (fa & 268435455) === 0 || gn(Be, Qe);
  }
  function ga(e, t) {
    var n = he;
    he |= 2;
    var r = Jc();
    (Be !== e || Qe !== t) && (Yt = null, zn(e, t));
    do
      try {
        tp();
        break;
      } catch (a) {
        Xc(e, a);
      }
    while (!0);
    if (Vo(), he = n, da.current = r, Fe !== null) throw Error(i(261));
    return Be = null, Qe = 0, Ue;
  }
  function tp() {
    for (; Fe !== null; ) Zc(Fe);
  }
  function np() {
    for (; Fe !== null && !Tf(); ) Zc(Fe);
  }
  function Zc(e) {
    var t = rd(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? ed(e) : Fe = t, Ss.current = null;
  }
  function ed(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Ym(n, t, dt), n !== null) {
          Fe = n;
          return;
        }
      } else {
        if (n = Km(n, t), n !== null) {
          n.flags &= 32767, Fe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ue = 6, Fe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function On(e, t, n) {
    var r = Se, a = _t.transition;
    try {
      _t.transition = null, Se = 1, rp(e, t, n, r);
    } finally {
      _t.transition = a, Se = r;
    }
    return null;
  }
  function rp(e, t, n, r) {
    do
      fr();
    while (vn !== null);
    if ((he & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Af(e, u), e === Be && (Fe = Be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || pa || (pa = !0, ld(kl, function() {
      return fr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = _t.transition, _t.transition = null;
      var f = Se;
      Se = 1;
      var _ = he;
      he |= 4, Ss.current = null, Xm(e, n), Hc(n, e), Sm(Io), Pl = !!Lo, Io = Lo = null, e.current = n, Jm(n), Rf(), he = _, Se = f, _t.transition = u;
    } else e.current = n;
    if (pa && (pa = !1, vn = e, ha = a), u = e.pendingLanes, u === 0 && (hn = null), Lf(n.stateNode), lt(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (ma) throw ma = !1, e = xs, xs = null, e;
    return (ha & 1) !== 0 && e.tag !== 0 && fr(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ts ? ol++ : (ol = 0, Ts = e) : ol = 0, dn(), null;
  }
  function fr() {
    if (vn !== null) {
      var e = Bi(ha), t = _t.transition, n = Se;
      try {
        if (_t.transition = null, Se = 16 > e ? 16 : e, vn === null) var r = !1;
        else {
          if (e = vn, vn = null, ha = 0, (he & 6) !== 0) throw Error(i(331));
          var a = he;
          for (he |= 4, Y = e.current; Y !== null; ) {
            var u = Y, f = u.child;
            if ((Y.flags & 16) !== 0) {
              var _ = u.deletions;
              if (_ !== null) {
                for (var k = 0; k < _.length; k++) {
                  var I = _[k];
                  for (Y = I; Y !== null; ) {
                    var U = Y;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rl(8, U, u);
                    }
                    var b = U.child;
                    if (b !== null) b.return = U, Y = b;
                    else for (; Y !== null; ) {
                      U = Y;
                      var F = U.sibling, Q = U.return;
                      if (jc(U), U === I) {
                        Y = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = Q, Y = F;
                        break;
                      }
                      Y = Q;
                    }
                  }
                }
                var G = u.alternate;
                if (G !== null) {
                  var J = G.child;
                  if (J !== null) {
                    G.child = null;
                    do {
                      var Ae = J.sibling;
                      J.sibling = null, J = Ae;
                    } while (J !== null);
                  }
                }
                Y = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && f !== null) f.return = u, Y = f;
            else e: for (; Y !== null; ) {
              if (u = Y, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  rl(9, u, u.return);
              }
              var x = u.sibling;
              if (x !== null) {
                x.return = u.return, Y = x;
                break e;
              }
              Y = u.return;
            }
          }
          var S = e.current;
          for (Y = S; Y !== null; ) {
            f = Y;
            var R = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && R !== null) R.return = f, Y = R;
            else e: for (f = S; Y !== null; ) {
              if (_ = Y, (_.flags & 2048) !== 0) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ca(9, _);
                }
              } catch (te) {
                ze(_, _.return, te);
              }
              if (_ === f) {
                Y = null;
                break e;
              }
              var B = _.sibling;
              if (B !== null) {
                B.return = _.return, Y = B;
                break e;
              }
              Y = _.return;
            }
          }
          if (he = a, dn(), It && typeof It.onPostCommitFiberRoot == "function") try {
            It.onPostCommitFiberRoot(Sl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Se = n, _t.transition = t;
      }
    }
    return !1;
  }
  function td(e, t, n) {
    t = ir(n, t), t = _c(e, t, 1), e = mn(e, t, 1), t = Ze(), e !== null && (Mr(e, 1, t), lt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) td(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        td(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hn === null || !hn.has(r))) {
          e = ir(n, e), e = Ec(t, e, 1), t = mn(t, e, 1), e = Ze(), t !== null && (Mr(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function lp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ze(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (Qe & n) === n && (Ue === 4 || Ue === 3 && (Qe & 130023424) === Qe && 500 > Oe() - Ns ? zn(e, 0) : Cs |= n), lt(e, t);
  }
  function nd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Nl, Nl <<= 1, (Nl & 130023424) === 0 && (Nl = 4194304)));
    var n = Ze();
    e = Vt(e, t), e !== null && (Mr(e, t, n), lt(e, n));
  }
  function ap(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), nd(e, n);
  }
  function op(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(t), nd(e, n);
  }
  var rd;
  rd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return nt = !1, qm(e, t, n);
      nt = (e.flags & 131072) !== 0;
    }
    else nt = !1, Me && (t.flags & 1048576) !== 0 && Ou(t, ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var a = er(t, Ye.current);
        or(t, n), a = ns(null, t, r, e, a, n);
        var u = rs();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (u = !0, Hl(t)) : u = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ko(t), a.updater = oa, t.stateNode = a, a._reactInternals = t, us(t, r, e, n), t = ms(null, t, r, !0, u, n)) : (t.tag = 0, Me && u && jo(t), Je(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ia(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = ip(r), e = xt(r, e), a) {
            case 0:
              t = fs(null, t, r, e, n);
              break e;
            case 1:
              t = Pc(null, t, r, e, n);
              break e;
            case 11:
              t = Cc(null, t, r, e, n);
              break e;
            case 14:
              t = Nc(null, t, r, xt(r.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), fs(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), Pc(e, t, r, a, n);
      case 3:
        e: {
          if (Mc(t), e === null) throw Error(i(387));
          r = t.pendingProps, u = t.memoizedState, a = u.element, Vu(e, t), Zl(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            a = ir(Error(i(423)), t), t = Lc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = ir(Error(i(424)), t), t = Lc(e, t, r, n, a);
            break e;
          } else for (ct = sn(t.stateNode.containerInfo.firstChild), ut = t, Me = !0, Nt = null, n = Wu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (rr(), r === a) {
              t = qt(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Yu(t), e === null && Bo(t), r = t.type, a = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = a.children, $o(r, a) ? f = null : u !== null && $o(r, u) && (t.flags |= 32), Rc(e, t), Je(e, t, f, n), t.child;
      case 6:
        return e === null && Bo(t), null;
      case 13:
        return Ic(e, t, n);
      case 4:
        return Go(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lr(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), Cc(e, t, r, a, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, u = t.memoizedProps, f = a.value, xe(Gl, r._currentValue), r._currentValue = f, u !== null) if (Ct(u.value, f)) {
            if (u.children === a.children && !et.current) {
              t = qt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var _ = u.dependencies;
            if (_ !== null) {
              f = u.child;
              for (var k = _.firstContext; k !== null; ) {
                if (k.context === r) {
                  if (u.tag === 1) {
                    k = Qt(-1, n & -n), k.tag = 2;
                    var I = u.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var U = I.pending;
                      U === null ? k.next = k : (k.next = U.next, U.next = k), I.pending = k;
                    }
                  }
                  u.lanes |= n, k = u.alternate, k !== null && (k.lanes |= n), qo(
                    u.return,
                    n,
                    t
                  ), _.lanes |= n;
                  break;
                }
                k = k.next;
              }
            } else if (u.tag === 10) f = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (f = u.return, f === null) throw Error(i(341));
              f.lanes |= n, _ = f.alternate, _ !== null && (_.lanes |= n), qo(f, n, t), f = u.sibling;
            } else f = u.child;
            if (f !== null) f.return = u;
            else for (f = u; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (u = f.sibling, u !== null) {
                u.return = f.return, f = u;
                break;
              }
              f = f.return;
            }
            u = f;
          }
          Je(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, or(t, n), a = yt(a), r = r(a), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = xt(r, t.pendingProps), a = xt(r.type, a), Nc(e, t, r, a, n);
      case 15:
        return xc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), ia(e, t), t.tag = 1, tt(r) ? (e = !0, Hl(t)) : e = !1, or(t, n), yc(t, r, a), us(t, r, a, n), ms(null, t, r, !0, e, n);
      case 19:
        return Dc(e, t, n);
      case 22:
        return Tc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function ld(e, t) {
    return Ai(e, t);
  }
  function sp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, n, r) {
    return new sp(e, t, n, r);
  }
  function $s(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ip(e) {
    if (typeof e == "function") return $s(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ce) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function _n(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function _a(e, t, n, r, a, u) {
    var f = 2;
    if (r = e, typeof e == "function") $s(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case X:
        return An(n.children, a, u, t);
      case re:
        f = 8, a |= 8;
        break;
      case _e:
        return e = Et(12, n, t, a | 2), e.elementType = _e, e.lanes = u, e;
      case ue:
        return e = Et(13, n, t, a), e.elementType = ue, e.lanes = u, e;
      case ie:
        return e = Et(19, n, t, a), e.elementType = ie, e.lanes = u, e;
      case de:
        return Ea(n, a, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ee:
            f = 10;
            break e;
          case pe:
            f = 9;
            break e;
          case Ce:
            f = 11;
            break e;
          case q:
            f = 14;
            break e;
          case W:
            f = 16, r = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Et(f, n, t, a), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function An(e, t, n, r) {
    return e = Et(7, e, r, t), e.lanes = n, e;
  }
  function Ea(e, t, n, r) {
    return e = Et(22, e, r, t), e.elementType = de, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ds(e, t, n) {
    return e = Et(6, e, null, t), e.lanes = n, e;
  }
  function zs(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function up(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = so(0), this.expirationTimes = so(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = so(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Os(e, t, n, r, a, u, f, _, k) {
    return e = new up(e, t, n, _, k), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Et(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ko(u), e;
  }
  function cp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: O, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ad(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (tt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (tt(n)) return $u(e, n, t);
    }
    return t;
  }
  function od(e, t, n, r, a, u, f, _, k) {
    return e = Os(n, r, !0, e, a, u, f, _, k), e.context = ad(null), n = e.current, r = Ze(), a = yn(n), u = Qt(r, a), u.callback = t ?? null, mn(n, u, a), e.current.lanes = a, Mr(e, a, r), lt(e, r), e;
  }
  function wa(e, t, n, r) {
    var a = t.current, u = Ze(), f = yn(a);
    return n = ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qt(u, f), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mn(a, t, f), e !== null && (Pt(e, a, f, u), Jl(e, a, f)), f;
  }
  function ka(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function sd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function As(e, t) {
    sd(e, t), (e = e.alternate) && sd(e, t);
  }
  function dp() {
    return null;
  }
  var id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Fs(e) {
    this._internalRoot = e;
  }
  Sa.prototype.render = Fs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    wa(e, t, null, null);
  }, Sa.prototype.unmount = Fs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Dn(function() {
        wa(null, e, null, null);
      }), t[bt] = null;
    }
  };
  function Sa(e) {
    this._internalRoot = e;
  }
  Sa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++) ;
      ln.splice(n, 0, e), n === 0 && Yi(e);
    }
  };
  function js(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ca(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ud() {
  }
  function fp(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var I = ka(f);
          u.call(I);
        };
      }
      var f = od(t, r, e, 0, null, !1, !1, "", ud);
      return e._reactRootContainer = f, e[bt] = f.current, Hr(e.nodeType === 8 ? e.parentNode : e), Dn(), f;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var _ = r;
      r = function() {
        var I = ka(k);
        _.call(I);
      };
    }
    var k = Os(e, 0, !1, null, null, !1, !1, "", ud);
    return e._reactRootContainer = k, e[bt] = k.current, Hr(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
      wa(t, k, n, r);
    }), k;
  }
  function Na(e, t, n, r, a) {
    var u = n._reactRootContainer;
    if (u) {
      var f = u;
      if (typeof a == "function") {
        var _ = a;
        a = function() {
          var k = ka(f);
          _.call(k);
        };
      }
      wa(t, f, e, a);
    } else f = fp(n, t, e, a, r);
    return ka(f);
  }
  Wi = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Pr(t.pendingLanes);
          n !== 0 && (io(t, n | 1), lt(t, Oe()), (he & 6) === 0 && (dr = Oe() + 500, dn()));
        }
        break;
      case 13:
        Dn(function() {
          var r = Vt(e, 1);
          if (r !== null) {
            var a = Ze();
            Pt(r, e, 1, a);
          }
        }), As(e, 1);
    }
  }, uo = function(e) {
    if (e.tag === 13) {
      var t = Vt(e, 134217728);
      if (t !== null) {
        var n = Ze();
        Pt(t, e, 134217728, n);
      }
      As(e, 134217728);
    }
  }, Hi = function(e) {
    if (e.tag === 13) {
      var t = yn(e), n = Vt(e, t);
      if (n !== null) {
        var r = Ze();
        Pt(n, e, t, r);
      }
      As(e, t);
    }
  }, Vi = function() {
    return Se;
  }, Qi = function(e, t) {
    var n = Se;
    try {
      return Se = e, t();
    } finally {
      Se = n;
    }
  }, to = function(e, t, n) {
    switch (t) {
      case "input":
        if (qa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Bl(r);
              if (!a) throw Error(i(90));
              vi(r), qa(r, a);
            }
          }
        }
        break;
      case "textarea":
        wi(e, n);
        break;
      case "select":
        t = n.value, t != null && Bn(e, !!n.multiple, t, !1);
    }
  }, Mi = Ms, Li = Dn;
  var mp = { usingClientEntryPoint: !1, Events: [qr, Jn, Bl, Ri, Pi, Ms] }, sl = { findFiberByHostInstance: xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, pp = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = zi(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: sl.findFiberByHostInstance || dp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xa.isDisabled && xa.supportsFiber) try {
      Sl = xa.inject(pp), It = xa;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!js(t)) throw Error(i(200));
    return cp(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!js(e)) throw Error(i(299));
    var n = !1, r = "", a = id;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Os(e, 1, !1, null, null, n, !1, r, a), e[bt] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new Fs(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = zi(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return Dn(e);
  }, at.hydrate = function(e, t, n) {
    if (!Ca(t)) throw Error(i(200));
    return Na(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!js(e)) throw Error(i(405));
    var r = n != null && n.hydratedSources || null, a = !1, u = "", f = id;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = od(t, null, e, 1, n ?? null, a, !1, u, f), e[bt] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new Sa(t);
  }, at.render = function(e, t, n) {
    if (!Ca(t)) throw Error(i(200));
    return Na(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!Ca(e)) throw Error(i(40));
    return e._reactRootContainer ? (Dn(function() {
      Na(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bt] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = Ms, at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ca(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Na(e, t, n, !1, r);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
var hd;
function Ep() {
  if (hd) return bs.exports;
  hd = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), bs.exports = _p(), bs.exports;
}
var vd;
function wp() {
  if (vd) return Ta;
  vd = 1;
  var l = Ep();
  return Ta.createRoot = l.createRoot, Ta.hydrateRoot = l.hydrateRoot, Ta;
}
var kp = wp();
const Sp = /* @__PURE__ */ Bd(kp);
/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var yd = "popstate";
function gd(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Cp(l = {}) {
  function o(d, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = bn(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), ri(
      "",
      { pathname: p, search: h, hash: y },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function i(d, m) {
    let p = d.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let y = d.location.href, E = y.indexOf("#");
      h = E === -1 ? y : y.slice(0, E);
    }
    return h + "#" + (typeof m == "string" ? m : ml(m));
  }
  function c(d, m) {
    wt(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return xp(
    o,
    i,
    c,
    l
  );
}
function Ie(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function wt(l, o) {
  if (!l) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {
    }
  }
}
function Np() {
  return Math.random().toString(36).substring(2, 10);
}
function _d(l, o) {
  return {
    usr: l.state,
    key: l.key,
    idx: o,
    masked: l.mask ? {
      pathname: l.pathname,
      search: l.search,
      hash: l.hash
    } : void 0
  };
}
function ri(l, o, i = null, c, d) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? bn(o) : o,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || c || Np(),
    mask: d
  };
}
function ml({
  pathname: l = "/",
  search: o = "",
  hash: i = ""
}) {
  return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), i && i !== "#" && (l += i.charAt(0) === "#" ? i : "#" + i), l;
}
function bn(l) {
  let o = {};
  if (l) {
    let i = l.indexOf("#");
    i >= 0 && (o.hash = l.substring(i), l = l.substring(0, i));
    let c = l.indexOf("?");
    c >= 0 && (o.search = l.substring(c), l = l.substring(0, c)), l && (o.pathname = l);
  }
  return o;
}
function xp(l, o, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: m = !1 } = c, p = d.history, h = "POP", y = null, E = C();
  E == null && (E = 0, p.replaceState({ ...p.state, idx: E }, ""));
  function C() {
    return (p.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let w = C(), P = w == null ? null : w - E;
    E = w, y && y({ action: h, location: $.location, delta: P });
  }
  function T(w, P) {
    h = "PUSH";
    let L = gd(w) ? w : ri($.location, w, P);
    i && i(L, w), E = C() + 1;
    let z = _d(L, E), H = $.createHref(L.mask || L);
    try {
      p.pushState(z, "", H);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError")
        throw A;
      d.location.assign(H);
    }
    m && y && y({ action: h, location: $.location, delta: 1 });
  }
  function M(w, P) {
    h = "REPLACE";
    let L = gd(w) ? w : ri($.location, w, P);
    i && i(L, w), E = C();
    let z = _d(L, E), H = $.createHref(L.mask || L);
    p.replaceState(z, "", H), m && y && y({ action: h, location: $.location, delta: 0 });
  }
  function D(w) {
    return Tp(d, w);
  }
  let $ = {
    get action() {
      return h;
    },
    get location() {
      return l(d, p);
    },
    listen(w) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(yd, g), y = w, () => {
        d.removeEventListener(yd, g), y = null;
      };
    },
    createHref(w) {
      return o(d, w);
    },
    createURL: D,
    encodeLocation(w) {
      let P = D(w);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: T,
    replace: M,
    go(w) {
      return p.go(w);
    }
  };
  return $;
}
function Tp(l, o, i = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Ie(c, "No window.location.(origin|href) available to create URL");
  let d = typeof o == "string" ? o : ml(o);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Hd(l, o, i = "/") {
  return Rp(l, o, i, !1);
}
function Rp(l, o, i, c, d) {
  let m = typeof o == "string" ? bn(o) : o, p = Gt(m.pathname || "/", i);
  if (p == null)
    return null;
  let h = Pp(l), y = null, E = bp(p);
  for (let C = 0; y == null && C < h.length; ++C)
    y = jp(
      h[C],
      E,
      c
    );
  return y;
}
function Pp(l) {
  let o = Vd(l);
  return Mp(o), o;
}
function Vd(l, o = [], i = [], c = "", d = !1) {
  let m = (p, h, y = d, E) => {
    let C = {
      relativePath: E === void 0 ? p.path || "" : E,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (C.relativePath.startsWith("/")) {
      if (!C.relativePath.startsWith(c) && y)
        return;
      Ie(
        C.relativePath.startsWith(c),
        `Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), C.relativePath = C.relativePath.slice(c.length);
    }
    let g = Mt([c, C.relativePath]), T = i.concat(C);
    p.children && p.children.length > 0 && (Ie(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
    ), Vd(
      p.children,
      o,
      T,
      g,
      y
    )), !(p.path == null && !p.index) && o.push({
      path: g,
      score: Ap(g, p.index),
      routesMeta: T
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let E of Qd(p.path))
        m(p, h, !0, E);
  }), o;
}
function Qd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [i, ...c] = o, d = i.endsWith("?"), m = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [m, ""] : [m];
  let p = Qd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), d && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function Mp(l) {
  l.sort(
    (o, i) => o.score !== i.score ? i.score - o.score : Fp(
      o.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Lp = /^:[\w-]+$/, Ip = 3, $p = 2, Dp = 1, zp = 10, Op = -2, Ed = (l) => l === "*";
function Ap(l, o) {
  let i = l.split("/"), c = i.length;
  return i.some(Ed) && (c += Op), o && (c += $p), i.filter((d) => !Ed(d)).reduce(
    (d, m) => d + (Lp.test(m) ? Ip : m === "" ? Dp : zp),
    c
  );
}
function Fp(l, o) {
  return l.length === o.length && l.slice(0, -1).every((c, d) => c === o[d]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    l[l.length - 1] - o[o.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function jp(l, o, i = !1) {
  let { routesMeta: c } = l, d = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], E = h === c.length - 1, C = m === "/" ? o : o.slice(m.length) || "/", g = Aa(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: E },
      C
    ), T = y.route;
    if (!g && E && i && !c[c.length - 1].route.index && (g = Aa(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      C
    )), !g)
      return null;
    Object.assign(d, g.params), p.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Mt([m, g.pathname]),
      pathnameBase: Vp(
        Mt([m, g.pathnameBase])
      ),
      route: T
    }), g.pathnameBase !== "/" && (m = Mt([m, g.pathnameBase]));
  }
  return p;
}
function Aa(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [i, c] = Up(
    l.path,
    l.caseSensitive,
    l.end
  ), d = o.match(i);
  if (!d) return null;
  let m = d[0], p = m.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: c.reduce(
      (E, { paramName: C, isOptional: g }, T) => {
        if (C === "*") {
          let D = h[T] || "";
          p = m.slice(0, m.length - D.length).replace(/(.)\/+$/, "$1");
        }
        const M = h[T];
        return g && !M ? E[C] = void 0 : E[C] = (M || "").replace(/%2F/g, "/"), E;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function Up(l, o = !1, i = !0) {
  wt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, E, C) => {
      if (c.push({ paramName: h, isOptional: y != null }), y) {
        let g = C.charAt(E + p.length);
        return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), d += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : l !== "" && l !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, o ? void 0 : "i"), c];
}
function bp(l) {
  try {
    return l.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return wt(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), l;
  }
}
function Gt(l, o) {
  if (o === "/") return l;
  if (!l.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length, c = l.charAt(i);
  return c && c !== "/" ? null : l.slice(i) || "/";
}
var Bp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Wp(l, o = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof l == "string" ? bn(l) : l, m;
  return i ? (i = qd(i), i.startsWith("/") ? m = wd(i.substring(1), "/") : m = wd(i, o)) : m = o, {
    pathname: m,
    search: Qp(c),
    hash: qp(d)
  };
}
function wd(l, o) {
  let i = Fa(o).split("/");
  return l.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function Hs(l, o, i, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Hp(l) {
  return l.filter(
    (o, i) => i === 0 || o.route.path && o.route.path.length > 0
  );
}
function si(l) {
  let o = Hp(l);
  return o.map(
    (i, c) => c === o.length - 1 ? i.pathname : i.pathnameBase
  );
}
function Ba(l, o, i, c = !1) {
  let d;
  typeof l == "string" ? d = bn(l) : (d = { ...l }, Ie(
    !d.pathname || !d.pathname.includes("?"),
    Hs("?", "pathname", "search", d)
  ), Ie(
    !d.pathname || !d.pathname.includes("#"),
    Hs("#", "pathname", "hash", d)
  ), Ie(
    !d.search || !d.search.includes("#"),
    Hs("#", "search", "hash", d)
  ));
  let m = l === "" || d.pathname === "", p = m ? "/" : d.pathname, h;
  if (p == null)
    h = i;
  else {
    let g = o.length - 1;
    if (!c && p.startsWith("..")) {
      let T = p.split("/");
      for (; T[0] === ".."; )
        T.shift(), g -= 1;
      d.pathname = T.join("/");
    }
    h = g >= 0 ? o[g] : "/";
  }
  let y = Wp(d, h), E = p && p !== "/" && p.endsWith("/"), C = (m || p === ".") && i.endsWith("/");
  return !y.pathname.endsWith("/") && (E || C) && (y.pathname += "/"), y;
}
var qd = (l) => l.replace(/\/\/+/g, "/"), Mt = (l) => qd(l.join("/")), Fa = (l) => l.replace(/\/+$/, ""), Vp = (l) => Fa(l).replace(/^\/*/, "/"), Qp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, qp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Yp = class {
  constructor(l, o, i, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Kp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Gp(l) {
  let o = l.map((i) => i.route.path).filter(Boolean);
  return Mt(o) || "/";
}
var Yd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Kd(l, o) {
  let i = l;
  if (typeof i != "string" || !Bp.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Yd)
    try {
      let m = new URL(window.location.href), p = i.startsWith("//") ? new URL(m.protocol + i) : new URL(i), h = Gt(p.pathname, o);
      p.origin === m.origin && h != null ? i = h + p.search + p.hash : d = !0;
    } catch {
      wt(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: d,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Gd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Gd
);
var Xp = [
  "GET",
  ...Gd
];
new Set(Xp);
var vr = v.createContext(null);
vr.displayName = "DataRouter";
var Wa = v.createContext(null);
Wa.displayName = "DataRouterState";
var Xd = v.createContext(!1);
function Jp() {
  return v.useContext(Xd);
}
var Jd = v.createContext({
  isTransitioning: !1
});
Jd.displayName = "ViewTransition";
var Zp = v.createContext(
  /* @__PURE__ */ new Map()
);
Zp.displayName = "Fetchers";
var eh = v.createContext(null);
eh.displayName = "Await";
var ft = v.createContext(
  null
);
ft.displayName = "Navigation";
var pl = v.createContext(
  null
);
pl.displayName = "Location";
var Ut = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ut.displayName = "Route";
var ii = v.createContext(null);
ii.displayName = "RouteError";
var Zd = "REACT_ROUTER_ERROR", th = "REDIRECT", nh = "ROUTE_ERROR_RESPONSE";
function rh(l) {
  if (l.startsWith(`${Zd}:${th}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function lh(l) {
  if (l.startsWith(
    `${Zd}:${nh}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Yp(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function ah(l, { relative: o } = {}) {
  Ie(
    yr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(ft), { hash: d, pathname: m, search: p } = hl(l, { relative: o }), h = m;
  return i !== "/" && (h = m === "/" ? i : Mt([i, m])), c.createHref({ pathname: h, search: p, hash: d });
}
function yr() {
  return v.useContext(pl) != null;
}
function kt() {
  return Ie(
    yr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(pl).location;
}
var ef = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function tf(l) {
  v.useContext(ft).static || v.useLayoutEffect(l);
}
function gr() {
  let { isDataRoute: l } = v.useContext(Ut);
  return l ? gh() : oh();
}
function oh() {
  Ie(
    yr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(vr), { basename: o, navigator: i } = v.useContext(ft), { matches: c } = v.useContext(Ut), { pathname: d } = kt(), m = JSON.stringify(si(c)), p = v.useRef(!1);
  return tf(() => {
    p.current = !0;
  }), v.useCallback(
    (y, E = {}) => {
      if (wt(p.current, ef), !p.current) return;
      if (typeof y == "number") {
        i.go(y);
        return;
      }
      let C = Ba(
        y,
        JSON.parse(m),
        d,
        E.relative === "path"
      );
      l == null && o !== "/" && (C.pathname = C.pathname === "/" ? o : Mt([o, C.pathname])), (E.replace ? i.replace : i.push)(
        C,
        E.state,
        E
      );
    },
    [
      o,
      i,
      m,
      d,
      l
    ]
  );
}
v.createContext(null);
function hl(l, { relative: o } = {}) {
  let { matches: i } = v.useContext(Ut), { pathname: c } = kt(), d = JSON.stringify(si(i));
  return v.useMemo(
    () => Ba(
      l,
      JSON.parse(d),
      c,
      o === "path"
    ),
    [l, d, c, o]
  );
}
function sh(l, o) {
  return nf(l, o);
}
function nf(l, o, i) {
  var w;
  Ie(
    yr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(ft), { matches: d } = v.useContext(Ut), m = d[d.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", E = m && m.route;
  {
    let P = E && E.path || "";
    lf(
      h,
      !E || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let C = kt(), g;
  if (o) {
    let P = typeof o == "string" ? bn(o) : o;
    Ie(
      y === "/" || ((w = P.pathname) == null ? void 0 : w.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), g = P;
  } else
    g = C;
  let T = g.pathname || "/", M = T;
  if (y !== "/") {
    let P = y.replace(/^\//, "").split("/");
    M = "/" + T.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let D = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (P) => Object.assign(P, {
        route: i.manifest[P.route.id] || P.route
      })
    )
  ) : Hd(l, { pathname: M });
  wt(
    E || D != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), wt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let $ = fh(
    D && D.map(
      (P) => Object.assign({}, P, {
        params: Object.assign({}, p, P.params),
        pathname: Mt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathname
        ]),
        pathnameBase: P.pathnameBase === "/" ? y : Mt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathnameBase
        ])
      })
    ),
    d,
    i
  );
  return o && $ ? /* @__PURE__ */ v.createElement(
    pl.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...g
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    $
  ) : $;
}
function ih() {
  let l = yh(), o = Kp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), i = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, o), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var uh = /* @__PURE__ */ v.createElement(ih, null), rf = class extends v.Component {
  constructor(l) {
    super(l), this.state = {
      location: l.location,
      revalidation: l.revalidation,
      error: l.error
    };
  }
  static getDerivedStateFromError(l) {
    return { error: l };
  }
  static getDerivedStateFromProps(l, o) {
    return o.location !== l.location || o.revalidation !== "idle" && l.revalidation === "idle" ? {
      error: l.error,
      location: l.location,
      revalidation: l.revalidation
    } : {
      error: l.error !== void 0 ? l.error : o.error,
      location: o.location,
      revalidation: l.revalidation || o.revalidation
    };
  }
  componentDidCatch(l, o) {
    this.props.onError ? this.props.onError(l, o) : console.error(
      "React Router caught the following error during render",
      l
    );
  }
  render() {
    let l = this.state.error;
    if (this.context && typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
      const i = lh(l.digest);
      i && (l = i);
    }
    let o = l !== void 0 ? /* @__PURE__ */ v.createElement(Ut.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      ii.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(ch, { error: l }, o) : o;
  }
};
rf.contextType = Xd;
var Vs = /* @__PURE__ */ new WeakMap();
function ch({
  children: l,
  error: o
}) {
  let { basename: i } = v.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = rh(o.digest);
    if (c) {
      let d = Vs.get(o);
      if (d) throw d;
      let m = Kd(c.location, i);
      if (Yd && !Vs.get(o))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw Vs.set(o, p), p;
        }
      return /* @__PURE__ */ v.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${m.absoluteURL || m.to}`
        }
      );
    }
  }
  return l;
}
function dh({ routeContext: l, match: o, children: i }) {
  let c = v.useContext(vr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ v.createElement(Ut.Provider, { value: l }, i);
}
function fh(l, o = [], i) {
  let c = i == null ? void 0 : i.state;
  if (l == null) {
    if (!c)
      return null;
    if (c.errors)
      l = c.matches;
    else if (o.length === 0 && !c.initialized && c.matches.length > 0)
      l = c.matches;
    else
      return null;
  }
  let d = l, m = c == null ? void 0 : c.errors;
  if (m != null) {
    let C = d.findIndex(
      (g) => g.route.id && (m == null ? void 0 : m[g.route.id]) !== void 0
    );
    Ie(
      C >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, C + 1)
    );
  }
  let p = !1, h = -1;
  if (i && c) {
    p = c.renderFallback;
    for (let C = 0; C < d.length; C++) {
      let g = d[C];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = C), g.route.id) {
        let { loaderData: T, errors: M } = c, D = g.route.loader && !T.hasOwnProperty(g.route.id) && (!M || M[g.route.id] === void 0);
        if (g.route.lazy || D) {
          i.isStatic && (p = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let y = i == null ? void 0 : i.onError, E = c && y ? (C, g) => {
    var T, M;
    y(C, {
      location: c.location,
      params: ((M = (T = c.matches) == null ? void 0 : T[0]) == null ? void 0 : M.params) ?? {},
      pattern: Gp(c.matches),
      errorInfo: g
    });
  } : void 0;
  return d.reduceRight(
    (C, g, T) => {
      let M, D = !1, $ = null, w = null;
      c && (M = m && g.route.id ? m[g.route.id] : void 0, $ = g.route.errorElement || uh, p && (h < 0 && T === 0 ? (lf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), D = !0, w = null) : h === T && (D = !0, w = g.route.hydrateFallbackElement || null)));
      let P = o.concat(d.slice(0, T + 1)), L = () => {
        let z;
        return M ? z = $ : D ? z = w : g.route.Component ? z = /* @__PURE__ */ v.createElement(g.route.Component, null) : g.route.element ? z = g.route.element : z = C, /* @__PURE__ */ v.createElement(
          dh,
          {
            match: g,
            routeContext: {
              outlet: C,
              matches: P,
              isDataRoute: c != null
            },
            children: z
          }
        );
      };
      return c && (g.route.ErrorBoundary || g.route.errorElement || T === 0) ? /* @__PURE__ */ v.createElement(
        rf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: $,
          error: M,
          children: L(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: E
        }
      ) : L();
    },
    null
  );
}
function ui(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function mh(l) {
  let o = v.useContext(vr);
  return Ie(o, ui(l)), o;
}
function ph(l) {
  let o = v.useContext(Wa);
  return Ie(o, ui(l)), o;
}
function hh(l) {
  let o = v.useContext(Ut);
  return Ie(o, ui(l)), o;
}
function ci(l) {
  let o = hh(l), i = o.matches[o.matches.length - 1];
  return Ie(
    i.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function vh() {
  return ci(
    "useRouteId"
    /* UseRouteId */
  );
}
function yh() {
  var c;
  let l = v.useContext(ii), o = ph(
    "useRouteError"
    /* UseRouteError */
  ), i = ci(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[i];
}
function gh() {
  let { router: l } = mh(
    "useNavigate"
    /* UseNavigateStable */
  ), o = ci(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return tf(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, m = {}) => {
      wt(i.current, ef), i.current && (typeof d == "number" ? await l.navigate(d) : await l.navigate(d, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var kd = {};
function lf(l, o, i) {
  !o && !kd[l] && (kd[l] = !0, wt(!1, i));
}
v.memo(_h);
function _h({
  routes: l,
  manifest: o,
  future: i,
  state: c,
  isStatic: d,
  onError: m
}) {
  return nf(l, void 0, {
    manifest: o,
    state: c,
    isStatic: d,
    onError: m
  });
}
function Ra({
  to: l,
  replace: o,
  state: i,
  relative: c
}) {
  Ie(
    yr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(ft);
  wt(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = v.useContext(Ut), { pathname: p } = kt(), h = gr(), y = Ba(
    l,
    si(m),
    p,
    c === "path"
  ), E = JSON.stringify(y);
  return v.useEffect(() => {
    h(JSON.parse(E), { replace: o, state: i, relative: c });
  }, [h, E, c, o, i]), null;
}
function ot(l) {
  Ie(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Eh({
  basename: l = "/",
  children: o = null,
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: m = !1,
  useTransitions: p
}) {
  Ie(
    !yr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), y = v.useMemo(
    () => ({
      basename: h,
      navigator: d,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [h, d, m, p]
  );
  typeof i == "string" && (i = bn(i));
  let {
    pathname: E = "/",
    search: C = "",
    hash: g = "",
    state: T = null,
    key: M = "default",
    mask: D
  } = i, $ = v.useMemo(() => {
    let w = Gt(E, h);
    return w == null ? null : {
      location: {
        pathname: w,
        search: C,
        hash: g,
        state: T,
        key: M,
        mask: D
      },
      navigationType: c
    };
  }, [h, E, C, g, T, M, c, D]);
  return wt(
    $ != null,
    `<Router basename="${h}"> is not able to match the URL "${E}${C}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), $ == null ? null : /* @__PURE__ */ v.createElement(ft.Provider, { value: y }, /* @__PURE__ */ v.createElement(pl.Provider, { children: o, value: $ }));
}
function wh({
  children: l,
  location: o
}) {
  return sh(li(l), o);
}
function li(l, o = []) {
  let i = [];
  return v.Children.forEach(l, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let m = [...o, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        li(c.props.children, m)
      );
      return;
    }
    Ie(
      c.type === ot,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ie(
      !c.props.index || !c.props.children,
      "An index route cannot have child routes."
    );
    let p = {
      id: c.props.id || m.join("-"),
      caseSensitive: c.props.caseSensitive,
      element: c.props.element,
      Component: c.props.Component,
      index: c.props.index,
      path: c.props.path,
      middleware: c.props.middleware,
      loader: c.props.loader,
      action: c.props.action,
      hydrateFallbackElement: c.props.hydrateFallbackElement,
      HydrateFallback: c.props.HydrateFallback,
      errorElement: c.props.errorElement,
      ErrorBoundary: c.props.ErrorBoundary,
      hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
      shouldRevalidate: c.props.shouldRevalidate,
      handle: c.props.handle,
      lazy: c.props.lazy
    };
    c.props.children && (p.children = li(
      c.props.children,
      m
    )), i.push(p);
  }), i;
}
var za = "get", Oa = "application/x-www-form-urlencoded";
function Ha(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function kh(l) {
  return Ha(l) && l.tagName.toLowerCase() === "button";
}
function Sh(l) {
  return Ha(l) && l.tagName.toLowerCase() === "form";
}
function Ch(l) {
  return Ha(l) && l.tagName.toLowerCase() === "input";
}
function Nh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function xh(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !Nh(l);
}
var Pa = null;
function Th() {
  if (Pa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Pa = !1;
    } catch {
      Pa = !0;
    }
  return Pa;
}
var Rh = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Qs(l) {
  return l != null && !Rh.has(l) ? (wt(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oa}"`
  ), null) : l;
}
function Ph(l, o) {
  let i, c, d, m, p;
  if (Sh(l)) {
    let h = l.getAttribute("action");
    c = h ? Gt(h, o) : null, i = l.getAttribute("method") || za, d = Qs(l.getAttribute("enctype")) || Oa, m = new FormData(l);
  } else if (kh(l) || Ch(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Gt(y, o) : null, i = l.getAttribute("formmethod") || h.getAttribute("method") || za, d = Qs(l.getAttribute("formenctype")) || Qs(h.getAttribute("enctype")) || Oa, m = new FormData(h, l), !Th()) {
      let { name: E, type: C, value: g } = l;
      if (C === "image") {
        let T = E ? `${E}.` : "";
        m.append(`${T}x`, "0"), m.append(`${T}y`, "0");
      } else E && m.append(E, g);
    }
  } else {
    if (Ha(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = za, c = null, d = Oa, p = l;
  }
  return m && d === "text/plain" && (p = m, m = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function di(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function af(l, o, i, c) {
  let d = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : o && Gt(d.pathname, o) === "/" ? d.pathname = `${Fa(o)}/_root.${c}` : d.pathname = `${Fa(d.pathname)}.${c}`, d;
}
async function Mh(l, o) {
  if (l.id in o)
    return o[l.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return o[l.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Lh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Ih(l, o, i) {
  let c = await Promise.all(
    l.map(async (d) => {
      let m = o.routes[d.route.id];
      if (m) {
        let p = await Mh(m, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Oh(
    c.flat(1).filter(Lh).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function Sd(l, o, i, c, d, m) {
  let p = (y, E) => i[E] ? y.route.id !== i[E].route.id : !0, h = (y, E) => {
    var C;
    return (
      // param change, /users/123 -> /users/456
      i[E].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((C = i[E].route.path) == null ? void 0 : C.endsWith("*")) && i[E].params["*"] !== y.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (y, E) => p(y, E) || h(y, E)
  ) : m === "data" ? o.filter((y, E) => {
    var g;
    let C = c.routes[y.route.id];
    if (!C || !C.hasLoader)
      return !1;
    if (p(y, E) || h(y, E))
      return !0;
    if (y.route.shouldRevalidate) {
      let T = y.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((g = i[0]) == null ? void 0 : g.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean")
        return T;
    }
    return !0;
  }) : [];
}
function $h(l, o, { includeHydrateFallback: i } = {}) {
  return Dh(
    l.map((c) => {
      let d = o.routes[c.route.id];
      if (!d) return [];
      let m = [d.module];
      return d.clientActionModule && (m = m.concat(d.clientActionModule)), d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (m = m.concat(d.hydrateFallbackModule)), d.imports && (m = m.concat(d.imports)), m;
    }).flat(1)
  );
}
function Dh(l) {
  return [...new Set(l)];
}
function zh(l) {
  let o = {}, i = Object.keys(l).sort();
  for (let c of i)
    o[c] = l[c];
  return o;
}
function Oh(l, o) {
  let i = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, d) => {
    let m = JSON.stringify(zh(d));
    return i.has(m) || (i.add(m), c.push({ key: m, link: d })), c;
  }, []);
}
function fi() {
  let l = v.useContext(vr);
  return di(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Ah() {
  let l = v.useContext(Wa);
  return di(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var mi = v.createContext(void 0);
mi.displayName = "FrameworkContext";
function pi() {
  let l = v.useContext(mi);
  return di(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Fh(l, o) {
  let i = v.useContext(mi), [c, d] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: E, onMouseLeave: C, onTouchStart: g } = o, T = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let $ = (P) => {
        P.forEach((L) => {
          p(L.isIntersecting);
        });
      }, w = new IntersectionObserver($, { threshold: 0.5 });
      return T.current && w.observe(T.current), () => {
        w.disconnect();
      };
    }
  }, [l]), v.useEffect(() => {
    if (c) {
      let $ = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout($);
      };
    }
  }, [c]);
  let M = () => {
    d(!0);
  }, D = () => {
    d(!1), p(!1);
  };
  return i ? l !== "intent" ? [m, T, {}] : [
    m,
    T,
    {
      onFocus: il(h, M),
      onBlur: il(y, D),
      onMouseEnter: il(E, M),
      onMouseLeave: il(C, D),
      onTouchStart: il(g, M)
    }
  ] : [!1, T, {}];
}
function il(l, o) {
  return (i) => {
    l && l(i), i.defaultPrevented || o(i);
  };
}
function jh({ page: l, ...o }) {
  let i = Jp(), { router: c } = fi(), d = v.useMemo(
    () => Hd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(bh, { page: l, matches: d, ...o }) : /* @__PURE__ */ v.createElement(Bh, { page: l, matches: d, ...o }) : null;
}
function Uh(l) {
  let { manifest: o, routeModules: i } = pi(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let m = !1;
    return Ih(l, o, i).then(
      (p) => {
        m || d(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, i]), c;
}
function bh({
  page: l,
  matches: o,
  ...i
}) {
  let c = kt(), { future: d } = pi(), { basename: m } = fi(), p = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = af(
      l,
      m,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, E = [];
    for (let C of o)
      typeof C.route.shouldRevalidate == "function" ? y = !0 : E.push(C.route.id);
    return y && E.length > 0 && h.searchParams.set("_routes", E.join(",")), [h.pathname + h.search];
  }, [
    m,
    d.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function Bh({
  page: l,
  matches: o,
  ...i
}) {
  let c = kt(), { future: d, manifest: m, routeModules: p } = pi(), { basename: h } = fi(), { loaderData: y, matches: E } = Ah(), C = v.useMemo(
    () => Sd(
      l,
      o,
      E,
      m,
      c,
      "data"
    ),
    [l, o, E, m, c]
  ), g = v.useMemo(
    () => Sd(
      l,
      o,
      E,
      m,
      c,
      "assets"
    ),
    [l, o, E, m, c]
  ), T = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let $ = /* @__PURE__ */ new Set(), w = !1;
    if (o.forEach((L) => {
      var H;
      let z = m.routes[L.route.id];
      !z || !z.hasLoader || (!C.some((A) => A.route.id === L.route.id) && L.route.id in y && ((H = p[L.route.id]) != null && H.shouldRevalidate) || z.hasClientLoader ? w = !0 : $.add(L.route.id));
    }), $.size === 0)
      return [];
    let P = af(
      l,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return w && $.size > 0 && P.searchParams.set(
      "_routes",
      o.filter((L) => $.has(L.route.id)).map((L) => L.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    h,
    d.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    C,
    o,
    l,
    p
  ]), M = v.useMemo(
    () => $h(g, m),
    [g, m]
  ), D = Uh(g);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, T.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "prefetch", as: "fetch", href: $, ...i })), M.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "modulepreload", href: $, ...i })), D.map(({ key: $, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: $,
        nonce: i.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function Wh(...l) {
  return (o) => {
    l.forEach((i) => {
      typeof i == "function" ? i(o) : i != null && (i.current = o);
    });
  };
}
var Hh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Hh && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Vh({
  basename: l,
  children: o,
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Cp({ window: c, v5Compat: !0 }));
  let m = d.current, [p, h] = v.useState({
    action: m.action,
    location: m.location
  }), y = v.useCallback(
    (E) => {
      i === !1 ? h(E) : v.startTransition(() => h(E));
    },
    [i]
  );
  return v.useLayoutEffect(() => m.listen(y), [m, y]), /* @__PURE__ */ v.createElement(
    Eh,
    {
      basename: l,
      children: o,
      location: p.location,
      navigationType: p.action,
      navigator: m,
      useTransitions: i
    }
  );
}
var of = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, sf = v.forwardRef(
  function({
    onClick: o,
    discover: i = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: y,
    target: E,
    to: C,
    preventScrollReset: g,
    viewTransition: T,
    defaultShouldRevalidate: M,
    ...D
  }, $) {
    let { basename: w, navigator: P, useTransitions: L } = v.useContext(ft), z = typeof C == "string" && of.test(C), H = Kd(C, w);
    C = H.to;
    let A = ah(C, { relative: d }), O = kt(), X = null;
    if (h) {
      let q = Ba(
        h,
        [],
        O.mask ? O.mask.pathname : "/",
        !0
      );
      w !== "/" && (q.pathname = q.pathname === "/" ? w : Mt([w, q.pathname])), X = P.createHref(q);
    }
    let [re, _e, Ee] = Fh(
      c,
      D
    ), pe = Yh(C, {
      replace: p,
      mask: h,
      state: y,
      target: E,
      preventScrollReset: g,
      relative: d,
      viewTransition: T,
      defaultShouldRevalidate: M,
      useTransitions: L
    });
    function Ce(q) {
      o && o(q), q.defaultPrevented || pe(q);
    }
    let ue = !(H.isExternal || m), ie = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...D,
          ...Ee,
          href: (ue ? X : void 0) || H.absoluteURL || A,
          onClick: ue ? Ce : o,
          ref: Wh($, _e),
          target: E,
          "data-discover": !z && i === "render" ? "true" : void 0
        }
      )
    );
    return re && !z ? /* @__PURE__ */ v.createElement(v.Fragment, null, ie, /* @__PURE__ */ v.createElement(jh, { page: A })) : ie;
  }
);
sf.displayName = "Link";
var He = v.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: i = !1,
    className: c = "",
    end: d = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: y,
    ...E
  }, C) {
    let g = hl(p, { relative: E.relative }), T = kt(), M = v.useContext(Wa), { navigator: D, basename: $ } = v.useContext(ft), w = M != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Zh(g) && h === !0, P = D.encodeLocation ? D.encodeLocation(g).pathname : g.pathname, L = T.pathname, z = M && M.navigation && M.navigation.location ? M.navigation.location.pathname : null;
    i || (L = L.toLowerCase(), z = z ? z.toLowerCase() : null, P = P.toLowerCase()), z && $ && (z = Gt(z, $) || z);
    const H = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let A = L === P || !d && L.startsWith(P) && L.charAt(H) === "/", O = z != null && (z === P || !d && z.startsWith(P) && z.charAt(P.length) === "/"), X = {
      isActive: A,
      isPending: O,
      isTransitioning: w
    }, re = A ? o : void 0, _e;
    typeof c == "function" ? _e = c(X) : _e = [
      c,
      A ? "active" : null,
      O ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Ee = typeof m == "function" ? m(X) : m;
    return /* @__PURE__ */ v.createElement(
      sf,
      {
        ...E,
        "aria-current": re,
        className: _e,
        ref: C,
        style: Ee,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(X) : y
    );
  }
);
He.displayName = "NavLink";
var Qh = v.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: m,
    method: p = za,
    action: h,
    onSubmit: y,
    relative: E,
    preventScrollReset: C,
    viewTransition: g,
    defaultShouldRevalidate: T,
    ...M
  }, D) => {
    let { useTransitions: $ } = v.useContext(ft), w = Xh(), P = Jh(h, { relative: E }), L = p.toLowerCase() === "get" ? "get" : "post", z = typeof h == "string" && of.test(h), H = (A) => {
      if (y && y(A), A.defaultPrevented) return;
      A.preventDefault();
      let O = A.nativeEvent.submitter, X = (O == null ? void 0 : O.getAttribute("formmethod")) || p, re = () => w(O || A.currentTarget, {
        fetcherKey: o,
        method: X,
        navigate: i,
        replace: d,
        state: m,
        relative: E,
        preventScrollReset: C,
        viewTransition: g,
        defaultShouldRevalidate: T
      });
      $ && i !== !1 ? v.startTransition(() => re()) : re();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: D,
        method: L,
        action: P,
        onSubmit: c ? y : H,
        ...M,
        "data-discover": !z && l === "render" ? "true" : void 0
      }
    );
  }
);
Qh.displayName = "Form";
function qh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function uf(l) {
  let o = v.useContext(vr);
  return Ie(o, qh(l)), o;
}
function Yh(l, {
  target: o,
  replace: i,
  mask: c,
  state: d,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: y,
  useTransitions: E
} = {}) {
  let C = gr(), g = kt(), T = hl(l, { relative: p });
  return v.useCallback(
    (M) => {
      if (xh(M, o)) {
        M.preventDefault();
        let D = i !== void 0 ? i : ml(g) === ml(T), $ = () => C(l, {
          replace: D,
          mask: c,
          state: d,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: y
        });
        E ? v.startTransition(() => $()) : $();
      }
    },
    [
      g,
      C,
      T,
      i,
      c,
      d,
      o,
      l,
      m,
      p,
      h,
      y,
      E
    ]
  );
}
var Kh = 0, Gh = () => `__${String(++Kh)}__`;
function Xh() {
  let { router: l } = uf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(ft), i = vh(), c = l.fetch, d = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: E, formData: C, body: g } = Ph(
        m,
        o
      );
      if (p.navigate === !1) {
        let T = p.fetcherKey || Gh();
        await c(T, i, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: g,
          formMethod: p.method || y,
          formEncType: p.encType || E,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: g,
          formMethod: p.method || y,
          formEncType: p.encType || E,
          replace: p.replace,
          state: p.state,
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, o, i]
  );
}
function Jh(l, { relative: o } = {}) {
  let { basename: i } = v.useContext(ft), c = v.useContext(Ut);
  Ie(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), m = { ...hl(l || ".", { relative: o }) }, p = kt();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), y = h.getAll("index");
    if (y.some((C) => C === "")) {
      h.delete("index"), y.filter((g) => g).forEach((g) => h.append("index", g));
      let C = h.toString();
      m.search = C ? `?${C}` : "";
    }
  }
  return (!l || l === ".") && d.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (m.pathname = m.pathname === "/" ? i : Mt([i, m.pathname])), ml(m);
}
function Zh(l, { relative: o } = {}) {
  let i = v.useContext(Jd);
  Ie(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = uf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = hl(l, { relative: o });
  if (!i.isTransitioning)
    return !1;
  let m = Gt(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = Gt(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return Aa(d.pathname, p) != null || Aa(d.pathname, m) != null;
}
const cf = v.createContext(null);
function _r() {
  const l = v.useContext(cf);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
var ai = /* @__PURE__ */ new Map(), Ma = /* @__PURE__ */ new WeakMap(), Cd = 0, ev;
function tv(l) {
  return l ? (Ma.has(l) || (Cd += 1, Ma.set(l, Cd.toString())), Ma.get(l)) : "0";
}
function nv(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? tv(l.root) : l[o]}`).toString();
}
function rv(l) {
  const o = nv(l);
  let i = ai.get(o);
  if (!i) {
    const c = /* @__PURE__ */ new Map();
    let d;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const E = h.isIntersecting && d.some((C) => h.intersectionRatio >= C);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = E), [...(y = c.get(h.target)) != null ? y : []].forEach((C) => {
          C(E, h);
        });
      });
    }, l);
    d = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), i = {
      id: o,
      observer: m,
      elements: c
    }, ai.set(o, i);
  }
  return i;
}
function lv(l, o, i = {}, c = ev) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const y = l.getBoundingClientRect();
    return o(c, {
      isIntersecting: c,
      target: l,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: y,
      intersectionRect: y,
      rootBounds: y
    }), () => {
    };
  }
  const { id: d, observer: m, elements: p } = rv(i), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), ai.delete(d));
  };
}
function Er({
  threshold: l,
  delay: o,
  trackVisibility: i,
  rootMargin: c,
  root: d,
  triggerOnce: m,
  skip: p,
  initialInView: h,
  fallbackInView: y,
  onChange: E
} = {}) {
  var C;
  const [g, T] = v.useState(null), M = v.useRef(E), D = v.useRef(h), [$, w] = v.useState({
    inView: !!h,
    entry: void 0
  });
  M.current = E, v.useEffect(
    () => {
      if (D.current === void 0 && (D.current = h), p || !g) return;
      let H;
      return H = lv(
        g,
        (A, O) => {
          const X = D.current;
          D.current = A, !(X === void 0 && !A) && (w({
            inView: A,
            entry: O
          }), M.current && M.current(A, O), O.isIntersecting && m && H && (H(), H = void 0));
        },
        {
          root: d,
          rootMargin: c,
          threshold: l,
          // @ts-expect-error
          trackVisibility: i,
          delay: o
        },
        y
      ), () => {
        H && H();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(l) ? l.toString() : l,
      g,
      d,
      c,
      m,
      p,
      i,
      y,
      o
    ]
  );
  const P = (C = $.entry) == null ? void 0 : C.target, L = v.useRef(void 0);
  !g && P && !m && !p && L.current !== P && (L.current = P, w({
    inView: !!h,
    entry: void 0
  }), D.current = h);
  const z = [T, $.inView, $.entry];
  return z.ref = z[0], z.inView = z[1], z.entry = z[2], z;
}
const mt = (l = 768) => {
  const [o, i] = v.useState(
    window.innerWidth <= l
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), d = (m) => {
      i(m.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [l]), o;
}, av = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function ov() {
  const l = _r(), [o, i] = v.useState(!0), [c, d] = v.useState(null), m = v.useRef(!1), p = v.useCallback(
    async (M = 1, D = !1) => {
      i(!0);
      try {
        const $ = av(
          await l._getShort(
            "get_script_actions_short",
            M
          )
        );
        d((w) => !D || !w ? $ : {
          ...$,
          script_actions: [
            ...w.script_actions,
            ...$.script_actions
          ]
        });
      } finally {
        i(!1);
      }
    },
    [l]
  );
  return v.useEffect(() => {
    m.current || (m.current = !0, p());
  }, [p]), {
    loading: o,
    scripts: c,
    loadScripts: p,
    scriptData: () => l.getScripts(),
    getAllScripts: () => l._getAllShort("get_script_actions_short"),
    saveScript: async (M) => {
      await l._save(M, "save_script_action"), await p(1);
    },
    updateScript: async (M, D) => {
      await l._update(M, "update_script_action", D), await p(1);
    },
    getScriptAction: async (M) => (await l._getDetail(
      M,
      "get_script_action"
    )).data,
    deleteScriptAction: async (M) => {
      await l._delete(M, "delete_script_action"), await p(1);
    }
  };
}
const sv = "_subtitle_ow5os_1", iv = "_card_ow5os_6", uv = "_content_ow5os_50", cv = "_title_ow5os_58", dv = "_arrow_ow5os_64", ul = {
  subtitle: sv,
  card: iv,
  content: uv,
  title: cv,
  arrow: dv
}, wr = ({
  title: l,
  subTitle: o,
  onClick: i
}) => /* @__PURE__ */ s.createElement(
  "button",
  {
    type: "button",
    className: ul.card,
    onClick: i
  },
  /* @__PURE__ */ s.createElement("div", { className: ul.content }, /* @__PURE__ */ s.createElement("div", { className: ul.title }, l), /* @__PURE__ */ s.createElement("div", { className: ul.subtitle }, o)),
  /* @__PURE__ */ s.createElement("div", { className: ul.arrow }, "→")
), fv = "_button_9qq9x_1", mv = "_full_9qq9x_32", pv = "_primary_9qq9x_37", hv = "_secondary_9qq9x_50", vv = "_ghost_9qq9x_62", qs = {
  button: fv,
  full: mv,
  primary: pv,
  secondary: hv,
  ghost: vv
}, ne = ({
  children: l,
  variant: o = "primary",
  fullWidth: i = !1,
  leftIcon: c,
  rightIcon: d,
  className: m = "",
  ...p
}) => /* @__PURE__ */ s.createElement(
  "button",
  {
    ...p,
    className: `
        ${qs.button}
        ${qs[o]}
        ${i ? qs.full : ""}
        ${m}
      `
  },
  c,
  l,
  d
), yv = "_pagination_1hg7e_1", gv = "_button_1hg7e_9", _v = "_label_1hg7e_33", La = {
  pagination: yv,
  button: gv,
  label: _v
}, kr = ({
  page: l,
  totalPages: o,
  onChange: i
}) => o <= 1 ? null : /* @__PURE__ */ s.createElement("div", { className: La.pagination }, /* @__PURE__ */ s.createElement(
  "button",
  {
    className: La.button,
    disabled: l === 1,
    onClick: () => i(l - 1)
  },
  "Назад"
), /* @__PURE__ */ s.createElement("span", { className: La.label }, l, " / ", o), /* @__PURE__ */ s.createElement(
  "button",
  {
    className: La.button,
    disabled: l === o,
    onClick: () => i(l + 1)
  },
  "Вперёд"
)), Ev = "_overlay_49s9e_1", wv = "_modal_49s9e_13", kv = "_sm_49s9e_27", Sv = "_md_49s9e_31", Cv = "_lg_49s9e_35", Nv = "_xl_49s9e_39", xv = "_header_49s9e_43", Tv = "_title_49s9e_53", Rv = "_body_49s9e_60", Pv = "_footer_49s9e_67", Mv = "_close_49s9e_77", wn = {
  overlay: Ev,
  modal: wv,
  sm: kv,
  md: Sv,
  lg: Cv,
  xl: Nv,
  header: xv,
  title: Tv,
  body: Rv,
  footer: Pv,
  close: Mv
}, Lt = ({
  open: l,
  onClose: o,
  title: i,
  footer: c,
  children: d,
  size: m = "md"
}) => (v.useEffect(() => {
  if (!l) return;
  document.body.style.overflow = "hidden";
  const p = (h) => {
    h.key === "Escape" && o();
  };
  return window.addEventListener(
    "keydown",
    p
  ), () => {
    document.body.style.overflow = "", window.removeEventListener(
      "keydown",
      p
    );
  };
}, [l, o]), l ? /* @__PURE__ */ s.createElement(
  "div",
  {
    className: wn.overlay,
    onClick: o
  },
  /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `${wn.modal} ${wn[m]}`,
      onClick: (p) => p.stopPropagation()
    },
    /* @__PURE__ */ s.createElement("div", { className: wn.header }, i && /* @__PURE__ */ s.createElement("h2", { className: wn.title }, i), /* @__PURE__ */ s.createElement(
      ne,
      {
        variant: "ghost",
        className: wn.close,
        onClick: o
      },
      "✕"
    )),
    /* @__PURE__ */ s.createElement("div", { className: wn.body }, d),
    c && /* @__PURE__ */ s.createElement("div", { className: wn.footer }, c)
  )
) : null), Lv = "_overlay_w83z1_1", Iv = "_sheet_w83z1_11", $v = "_handle_w83z1_21", Fn = {
  overlay: Lv,
  sheet: Iv,
  handle: $v
}, hi = ({
  open: l,
  onClose: o,
  children: i
}) => {
  const [c, d] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), y = v.useRef(0), [E, C] = v.useState(0);
  v.useEffect(() => {
    if (l)
      d(!0), requestAnimationFrame(() => {
        p(!0);
      }), document.body.style.overflow = "hidden";
    else {
      p(!1);
      const D = setTimeout(() => {
        d(!1);
      }, 300);
      return document.body.style.overflow = "", () => clearTimeout(D);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [l]);
  const g = (D) => {
    h.current = D.touches[0].clientY;
  }, T = (D) => {
    y.current = D.touches[0].clientY;
    const $ = y.current - h.current;
    $ > 0 && C($);
  }, M = () => {
    E > 120 && o(), C(0);
  };
  return v.useEffect(() => {
    const D = ($) => {
      $.key === "Escape" && o();
    };
    return l && window.addEventListener(
      "keydown",
      D
    ), () => {
      window.removeEventListener(
        "keydown",
        D
      );
    };
  }, [l, o]), c ? /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `${Fn.overlay} ${m ? Fn.visible : ""}`,
      onClick: o
    },
    /* @__PURE__ */ s.createElement(
      "section",
      {
        className: `${Fn.sheet} ${m ? Fn.open : ""}`,
        style: {
          transform: `translateY(${E}px)`,
          transition: E === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
        },
        onClick: (D) => D.stopPropagation(),
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ s.createElement(
        "div",
        {
          className: Fn.handleArea,
          onTouchStart: g,
          onTouchMove: T,
          onTouchEnd: M
        },
        /* @__PURE__ */ s.createElement("div", { className: Fn.handle })
      ),
      /* @__PURE__ */ s.createElement("div", { className: Fn.content }, i)
    )
  ) : null;
}, Dv = "_content_1p38v_1", zv = "_title_1p38v_7", Ov = "_actions_1p38v_14", Ys = {
  content: Dv,
  title: zv,
  actions: Ov
}, Av = ({
  uuid: l,
  open: o,
  title: i,
  onClose: c,
  onEdit: d,
  onDelete: m
}) => {
  const p = mt();
  if (!l) return null;
  const h = /* @__PURE__ */ s.createElement("div", { className: Ys.content }, /* @__PURE__ */ s.createElement("h3", { className: Ys.title }, i), /* @__PURE__ */ s.createElement("div", { className: Ys.actions }, /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      onClick: () => {
        d(l), c();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(l), c();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ s.createElement(s.Fragment, null, p ? /* @__PURE__ */ s.createElement(hi, { open: o, onClose: c }, h) : /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: o,
      onClose: c,
      title: "Действия",
      size: "sm"
    },
    h
  ));
}, Fv = "_accordion_5owbj_1", jv = "_header_5owbj_7", Uv = "_content_5owbj_20", Ia = {
  accordion: Fv,
  header: jv,
  content: Uv
}, jt = ({
  title: l,
  defaultOpen: o = !1,
  children: i
}) => {
  const [c, d] = v.useState(o);
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      className: Ia.accordion,
      "data-open": c
    },
    /* @__PURE__ */ s.createElement(
      "button",
      {
        type: "button",
        className: Ia.header,
        onClick: () => d((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ s.createElement("span", null, l),
      /* @__PURE__ */ s.createElement("span", { className: Ia.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ s.createElement("div", { className: Ia.content }, i)
  );
}, bv = "_field_aa3io_1", Bv = "_label_aa3io_8", Wv = "_inputWrapper_aa3io_16", Hv = "_input_aa3io_16", Vv = "_passwordInput_aa3io_34", Qv = "_passwordToggle_aa3io_60", qv = "_error_aa3io_89", Yv = "_errorText_aa3io_102", kn = {
  field: bv,
  label: Bv,
  inputWrapper: Wv,
  input: Hv,
  passwordInput: Vv,
  passwordToggle: Qv,
  error: qv,
  errorText: Yv
}, Le = ({
  label: l,
  error: o,
  disabled: i,
  className: c = "",
  id: d,
  type: m,
  ...p
}) => {
  const h = v.useId(), [y, E] = v.useState(!1), C = d ?? h, g = m === "password" && y ? "text" : m;
  return /* @__PURE__ */ s.createElement("div", { className: kn.field }, l && /* @__PURE__ */ s.createElement(
    "label",
    {
      htmlFor: C,
      className: kn.label
    },
    l
  ), /* @__PURE__ */ s.createElement("div", { className: kn.inputWrapper }, /* @__PURE__ */ s.createElement(
    "input",
    {
      id: C,
      disabled: i,
      type: g,
      ...p,
      className: `
            ${kn.input}
            ${m === "password" ? kn.passwordInput : ""}
            ${o ? kn.error : ""}
            ${c}
          `
    }
  ), m === "password" && /* @__PURE__ */ s.createElement(
    "button",
    {
      type: "button",
      className: kn.passwordToggle,
      onClick: () => E((T) => !T),
      disabled: i,
      "aria-label": y ? "Hide password" : "Show password"
    },
    y ? "🙈" : "👁"
  )), o && /* @__PURE__ */ s.createElement("span", { className: kn.errorText }, o));
}, Kv = "_wrapper_1oxcb_1", Gv = "_labelRow_1oxcb_7", Xv = "_label_1oxcb_7", Jv = "_selectedTitle_1oxcb_26", Zv = "_dropdown_1oxcb_35", ey = "_option_1oxcb_50", ty = "_title_1oxcb_72", ny = "_uuid_1oxcb_77", ry = "_hint_1oxcb_78", At = {
  wrapper: Kv,
  labelRow: Gv,
  label: Xv,
  selectedTitle: Jv,
  dropdown: Zv,
  option: ey,
  title: ty,
  uuid: ny,
  hint: ry
}, hr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: i,
  searchSource: c = ["assistant_commands"],
  minQueryLength: d = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: y
}) => {
  const E = _r(), [C, g] = v.useState([]), [T, M] = v.useState(!1), [D, $] = v.useState(!1), [w, P] = v.useState(!1), L = v.useRef(0), z = v.useRef(""), H = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (!H) {
      z.current = "", g([]), M(!1);
      return;
    }
    if (H.length < d) {
      g([]), M(!1);
      return;
    }
    if (!w || z.current === H)
      return;
    z.current = H;
    const O = L.current + 1;
    L.current = O;
    const X = window.setTimeout(async () => {
      $(!0);
      try {
        let re = [];
        for (const _e of c) {
          const Ee = await E.searchAssistantCommands(H, _e), pe = Array.isArray(Ee == null ? void 0 : Ee.data) ? Ee.data : [];
          re.push(...pe);
        }
        if (L.current !== O)
          return;
        g(re), M(re.length > 0);
      } finally {
        L.current === O && $(!1);
      }
    }, 250);
    return () => window.clearTimeout(X);
  }, [E, H, c, d, w]);
  const A = (O) => {
    const X = h ? h(O) : O.uuid;
    m(X), p == null || p(O), M(!1);
  };
  return /* @__PURE__ */ s.createElement("div", { className: At.wrapper }, /* @__PURE__ */ s.createElement("div", { className: At.labelRow }, /* @__PURE__ */ s.createElement("span", { className: At.label }, l), i && /* @__PURE__ */ s.createElement("span", { className: At.selectedTitle }, i)), /* @__PURE__ */ s.createElement(
    Le,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: y,
      onBlur: () => {
        P(!1), window.setTimeout(() => M(!1), 150);
      },
      onFocus: () => {
        P(!0), M(C.length > 0);
      },
      onChange: (O) => m(O.target.value)
    }
  ), T && /* @__PURE__ */ s.createElement("div", { className: At.dropdown }, C.map((O) => /* @__PURE__ */ s.createElement(
    "button",
    {
      key: O.uuid,
      type: "button",
      className: At.option,
      onMouseDown: (X) => X.preventDefault(),
      onClick: () => A(O)
    },
    /* @__PURE__ */ s.createElement("span", { className: At.title }, O.title || "Без названия"),
    /* @__PURE__ */ s.createElement("span", { className: At.uuid }, O.uuid),
    O.mappingType && /* @__PURE__ */ s.createElement("span", { className: At.uuid }, "mappingType: ", O.mappingType)
  ))), D && /* @__PURE__ */ s.createElement("span", { className: At.hint }, "Поиск..."));
}, ly = "_field_xxbds_1", ay = "_row_xxbds_5", oy = "_inputWrapper_xxbds_11", sy = "_deleteButton_xxbds_15", Sn = {
  field: ly,
  row: ay,
  inputWrapper: oy,
  deleteButton: sy
}, iy = ({
  condition: l,
  index: o,
  defaultOpen: i,
  onChange: c,
  onDelete: d,
  totalCount: m,
  errors: p
}) => {
  const h = l.children_type !== void 0, y = l.children_direct_type !== void 0, E = () => {
    c({
      ...l,
      children_type: void 0
    });
  }, C = () => {
    c({
      ...l,
      children_direct_type: void 0
    });
  };
  return /* @__PURE__ */ s.createElement(
    jt,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: i
    },
    /* @__PURE__ */ s.createElement("div", { className: Sn.field }, /* @__PURE__ */ s.createElement(
      hr,
      {
        label: "parent_type",
        value: l.parent_type ?? "",
        searchSource: ["search_assistant_commands"],
        minQueryLength: 3,
        error: p == null ? void 0 : p.parent_type,
        onChange: (g) => c({
          ...l,
          parent_type: g
        }),
        getSelectedValue: (g) => g.actionType ?? g.uuid,
        onSelect: (g) => c({
          ...l,
          parent_type: g.actionType ?? g.uuid
        })
      }
    )),
    /* @__PURE__ */ s.createElement("div", { className: Sn.field }, h ? /* @__PURE__ */ s.createElement(
      "div",
      {
        className: Sn.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ s.createElement("div", { className: Sn.inputWrapper }, /* @__PURE__ */ s.createElement(
        hr,
        {
          label: "children_type",
          value: l.children_type ?? "",
          searchSource: ["search_assistant_sub_commands"],
          minQueryLength: 3,
          error: p == null ? void 0 : p.children_type,
          onChange: (g) => c({
            ...l,
            children_type: g
          }),
          getSelectedValue: (g) => g.actionType ?? g.uuid,
          onSelect: (g) => c({
            ...l,
            children_type: g.actionType ?? g.uuid
          })
        }
      )),
      /* @__PURE__ */ s.createElement(
        ne,
        {
          type: "button",
          variant: "ghost",
          onClick: E
        },
        "×"
      )
    ) : /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        style: { width: "100%" },
        onClick: () => c({
          ...l,
          children_type: ""
        })
      },
      "🞢 Добавить children_type"
    )),
    /* @__PURE__ */ s.createElement("div", { className: Sn.field }, y ? /* @__PURE__ */ s.createElement(
      "div",
      {
        className: Sn.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ s.createElement("div", { className: Sn.inputWrapper }, /* @__PURE__ */ s.createElement(
        hr,
        {
          label: "children_direct_type",
          value: l.children_direct_type ?? "",
          searchSource: ["search_assistant_sub_direct_controls"],
          minQueryLength: 3,
          error: p == null ? void 0 : p.children_direct_type,
          onChange: (g) => c({
            ...l,
            children_direct_type: g
          }),
          getSelectedValue: (g) => g.mappingType ?? g.uuid,
          onSelect: (g) => c({
            ...l,
            children_direct_type: g.mappingType ?? g.uuid
          })
        }
      )),
      /* @__PURE__ */ s.createElement(
        ne,
        {
          type: "button",
          variant: "ghost",
          onClick: C
        },
        "×"
      )
    ) : /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        style: { width: "100%" },
        onClick: () => c({
          ...l,
          children_direct_type: ""
        })
      },
      "🞢 Добавить children_direct_type"
    )),
    m > 1 && /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "ghost",
        className: Sn.deleteButton,
        onClick: d
      },
      "🗑 Удалить условие"
    )
  );
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = (...l) => l.filter((o, i, c) => !!o && o.trim() !== "" && c.indexOf(o) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = (l) => {
  const o = cy(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ks = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = (l) => {
  for (const o in l)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
  return !1;
}, fy = v.createContext({}), my = () => v.useContext(fy), py = v.forwardRef(
  ({ color: l, size: o, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: m, iconNode: p, ...h }, y) => {
    const {
      size: E = 24,
      strokeWidth: C = 2,
      absoluteStrokeWidth: g = !1,
      color: T = "currentColor",
      className: M = ""
    } = my() ?? {}, D = c ?? g ? Number(i ?? C) * 24 / Number(o ?? E) : i ?? C;
    return v.createElement(
      "svg",
      {
        ref: y,
        ...Ks,
        width: o ?? E ?? Ks.width,
        height: o ?? E ?? Ks.height,
        stroke: l ?? T,
        strokeWidth: D,
        className: df("lucide", M, d),
        ...!m && !dy(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([$, w]) => v.createElement($, w)),
        ...Array.isArray(m) ? m : [m]
      ]
    );
  }
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = (l, o) => {
  const i = v.forwardRef(
    ({ className: c, ...d }, m) => v.createElement(py, {
      ref: m,
      iconNode: o,
      className: df(
        `lucide-${uy(Nd(l))}`,
        `lucide-${l}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = Nd(l), i;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], ff = pt("alarm-clock", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], yy = pt("arrow-left", vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], cl = pt("bot", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ey = pt("chevron-down", _y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], ky = pt("clock-3", wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Cy = pt("command", Sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
  [
    "path",
    {
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
      key: "1wthlu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
  ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
], xy = pt("file-code-corner", Ny);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ry = pt("house", Ty);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], mf = pt("settings", Py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], pf = pt("speaker", My);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Iy = pt("timer", Ly);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Dy = pt("trash-2", $y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], Oy = pt("workflow", zy), Ay = "_dropdown_x51vc_2", Fy = "_label_x51vc_9", jy = "_wrapper_x51vc_17", Uy = "_select_x51vc_21", by = "_arrow_x51vc_61", By = "_error_x51vc_81", Wy = "_errorText_x51vc_99", jn = {
  dropdown: Ay,
  label: Fy,
  wrapper: jy,
  select: Uy,
  arrow: by,
  error: By,
  errorText: Wy
};
function Hy({
  label: l,
  options: o,
  value: i = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: m
}) {
  const p = v.useId();
  return /* @__PURE__ */ s.createElement("div", { className: jn.dropdown }, l && /* @__PURE__ */ s.createElement(
    "label",
    {
      htmlFor: p,
      className: jn.label
    },
    l
  ), /* @__PURE__ */ s.createElement("div", { className: jn.wrapper }, /* @__PURE__ */ s.createElement(
    "select",
    {
      id: p,
      className: `
            ${jn.select}
            ${d ? jn.error : ""}
          `,
      value: i,
      onChange: (h) => m == null ? void 0 : m(h.target.value)
    },
    /* @__PURE__ */ s.createElement("option", { value: "", disabled: !0 }, c),
    o.map((h) => /* @__PURE__ */ s.createElement(
      "option",
      {
        key: h.value,
        value: h.value
      },
      h.label
    ))
  ), /* @__PURE__ */ s.createElement(
    Ey,
    {
      size: 18,
      className: jn.arrow
    }
  )), d && /* @__PURE__ */ s.createElement("span", { className: jn.errorText }, d));
}
const Vy = "_form_xh0jo_1", Qy = "_section_xh0jo_7", qy = "_sectionTitle_xh0jo_18", Yy = "_conditions_xh0jo_37", Ky = "_addCondition_xh0jo_43", mr = {
  form: Vy,
  section: Qy,
  sectionTitle: qy,
  conditions: Yy,
  addCondition: Ky
}, Gy = ({
  open: l,
  initialData: o,
  isOptionData: i,
  isEdit: c = !1,
  loading: d = !1,
  onSave: m,
  onCancel: p
}) => {
  const [h, y] = v.useState({
    uuid: "",
    name: "",
    script_entity_id: "",
    conditions: [
      {
        parent_type: ""
      }
    ]
  }), [E, C] = v.useState({
    conditions: []
  });
  v.useEffect(() => {
    y({
      uuid: (o == null ? void 0 : o.uuid) || "",
      name: (o == null ? void 0 : o.name) || "",
      script_entity_id: (o == null ? void 0 : o.script_entity_id) || "",
      conditions: (o == null ? void 0 : o.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), C({
      conditions: []
    });
  }, [o, l]);
  const g = (w) => {
    y(w);
  }, T = () => {
    g({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, M = (w, P) => {
    const L = [...h.conditions];
    L[w] = P, g({
      ...h,
      conditions: L
    });
  }, D = (w) => {
    const P = h.conditions.filter(
      (L, z) => z !== w
    );
    g({
      ...h,
      conditions: P.length > 0 ? P : [
        {
          parent_type: ""
        }
      ]
    });
  }, $ = () => {
    const w = {
      conditions: []
    };
    return h.name.trim() || (w.name = "Обязательное поле"), h.script_entity_id || (w.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (P, L) => {
        const z = {};
        P.parent_type.trim() || (z.parent_type = "Обязательное поле"), P.children_type !== void 0 && !P.children_type.trim() && (z.children_type = "Обязательное поле"), P.children_direct_type !== void 0 && !P.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), w.conditions[L] = z;
      }
    ), C(w), !w.name && !w.script_entity_id && w.conditions.every(
      (P) => Object.keys(P).length === 0
    );
  };
  return /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: p,
      title: c ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ s.createElement(
        ne,
        {
          disabled: d,
          onClick: () => {
            $() && (m == null || m(h));
          }
        },
        "Сохранить"
      )
    },
    /* @__PURE__ */ s.createElement("div", { className: mr.form }, /* @__PURE__ */ s.createElement("div", { className: mr.section }, /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "Название",
        value: h.name,
        error: E.name,
        onChange: (w) => g({
          ...h,
          name: w.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Hy,
      {
        label: "Скрипт",
        error: E.script_entity_id,
        options: i.map(
          (w) => ({
            label: w.name,
            value: w.entity_id
          })
        ),
        value: h.script_entity_id,
        onSelect: (w) => g({
          ...h,
          script_entity_id: w
        })
      }
    )), /* @__PURE__ */ s.createElement("div", { className: mr.section }, /* @__PURE__ */ s.createElement("h3", { className: mr.sectionTitle }, "Условия"), /* @__PURE__ */ s.createElement("div", { className: mr.conditions }, h.conditions.map(
      (w, P, L) => /* @__PURE__ */ s.createElement(
        iy,
        {
          key: P,
          index: P,
          condition: w,
          defaultOpen: !c,
          errors: E.conditions[P],
          onChange: (z) => M(
            P,
            z
          ),
          onDelete: () => D(P),
          totalCount: L.length
        }
      )
    )), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        className: mr.addCondition,
        onClick: T
      },
      "+ Добавить условие"
    )))
  );
}, Xy = "_header_1m7ok_1", Jy = "_title_1m7ok_15", Zy = "_backButton_1m7ok_22", eg = "_homeButton_1m7ok_23", $a = {
  header: Xy,
  title: Jy,
  backButton: Zy,
  homeButton: eg
}, Xt = ({
  title: l = ""
}) => {
  const o = gr(), c = kt().pathname.startsWith("/commands"), d = () => {
    o(c ? "/scripts" : "/");
  }, m = () => {
    if (c) {
      o("/scripts");
      return;
    }
    window.location.assign("/");
  };
  return /* @__PURE__ */ s.createElement("header", { className: $a.header }, /* @__PURE__ */ s.createElement(
    "button",
    {
      className: $a.backButton,
      onClick: d
    },
    /* @__PURE__ */ s.createElement(yy, { size: 18 })
  ), /* @__PURE__ */ s.createElement("h1", { className: $a.title }, l), /* @__PURE__ */ s.createElement(
    "button",
    {
      className: $a.homeButton,
      onClick: m
    },
    /* @__PURE__ */ s.createElement(Ry, { size: 18 })
  ));
}, tg = "_tabs_17nxl_1", ng = "_dropdown_17nxl_14", rg = "_tab_17nxl_1", lg = "_active_17nxl_43", ag = "_menu_17nxl_53", og = "_menuItem_17nxl_80", we = {
  tabs: tg,
  dropdown: ng,
  tab: rg,
  active: lg,
  menu: ag,
  menuItem: og
}, Jt = () => {
  if (!mt())
    return /* @__PURE__ */ s.createElement("div", { className: we.tabs }, /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${we.tab} ${we.active}` : we.tab
      },
      /* @__PURE__ */ s.createElement(xy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ s.createElement("div", { className: we.dropdown }, /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${we.tab} ${we.active}` : we.tab
      },
      /* @__PURE__ */ s.createElement(Cy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Команды")
    ), /* @__PURE__ */ s.createElement("div", { className: we.menu }, /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${we.menuItem} ${we.active}` : we.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${we.menuItem} ${we.active}` : we.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${we.menuItem} ${we.active}` : we.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${we.menuItem} ${we.active}` : we.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${we.tab} ${we.active}` : we.tab
      },
      /* @__PURE__ */ s.createElement(Iy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${we.tab} ${we.active}` : we.tab
      },
      /* @__PURE__ */ s.createElement(ff, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${we.tab} ${we.active}` : we.tab
      },
      /* @__PURE__ */ s.createElement(mf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Настройки")
    ));
}, sg = "_nav_gn5m2_1", xd = {
  nav: sg
}, Zt = () => {
  const l = kt(), o = gr(), [i, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return i ? /* @__PURE__ */ s.createElement("nav", { className: xd.nav }, /* @__PURE__ */ s.createElement(He, { to: "/commands/main" }, /* @__PURE__ */ s.createElement(cl, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Основные")), /* @__PURE__ */ s.createElement(He, { to: "/commands/sub" }, /* @__PURE__ */ s.createElement(cl, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Второстепенные")), /* @__PURE__ */ s.createElement(He, { to: "/commands/direct/main" }, /* @__PURE__ */ s.createElement(cl, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Прямые")), /* @__PURE__ */ s.createElement(He, { to: "/commands/settings" }, /* @__PURE__ */ s.createElement(cl, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Настройки"))) : /* @__PURE__ */ s.createElement("nav", { className: xd.nav }, /* @__PURE__ */ s.createElement(He, { to: "/scripts" }, /* @__PURE__ */ s.createElement(Oy, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Скрипты")), /* @__PURE__ */ s.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ s.createElement(cl, { size: 20 }),
    /* @__PURE__ */ s.createElement("span", null, "Команды")
  ), /* @__PURE__ */ s.createElement(He, { to: "/timer" }, /* @__PURE__ */ s.createElement(ky, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Таймер")), /* @__PURE__ */ s.createElement(He, { to: "/alarm" }, /* @__PURE__ */ s.createElement(ff, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Будильник")), /* @__PURE__ */ s.createElement(He, { to: "/settings" }, /* @__PURE__ */ s.createElement(mf, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Настройки")));
}, ig = "_loader_m2244_1", ug = "_fullscreen_m2244_11", cg = "_spinner_m2244_15", dg = "_label_m2244_24", Da = {
  loader: ig,
  fullscreen: ug,
  spinner: cg,
  label: dg
}, en = ({ label: l = "Загрузка...", fullscreen: o = !1 }) => /* @__PURE__ */ s.createElement("div", { className: `${Da.loader} ${o ? Da.fullscreen : ""}`, role: "status", "aria-live": "polite" }, /* @__PURE__ */ s.createElement("span", { className: Da.spinner, "aria-hidden": "true" }), l && /* @__PURE__ */ s.createElement("span", { className: Da.label }, l)), fg = "_container_99wio_1", mg = "_visible_99wio_20", Td = {
  container: fg,
  visible: mg
}, Cn = ({
  children: l,
  offset: o = 10,
  startVisible: i = !1
}) => {
  const [c, d] = v.useState(i);
  return v.useEffect(() => {
    let m = window.scrollY;
    const p = () => {
      const h = window.scrollY;
      h > m && h > o ? d(!0) : d(!1), m = h;
    };
    return window.addEventListener("scroll", p, {
      passive: !0
    }), () => window.removeEventListener(
      "scroll",
      p
    );
  }, [o]), /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `${Td.container} ${c ? Td.visible : ""}`
    },
    l
  );
}, pr = (l, o) => {
  const i = new Blob([JSON.stringify(o, null, 2)], {
    type: "application/json;charset=utf-8"
  }), c = URL.createObjectURL(i), d = document.createElement("a");
  d.href = c, d.download = l, document.body.appendChild(d), d.click(), d.remove(), URL.revokeObjectURL(c);
}, pg = "_page_24o94_8", hg = "_header_24o94_16", vg = "_headerTop_24o94_21", yg = "_heading_24o94_28", gg = "_title_24o94_33", _g = "_description_24o94_42", Eg = "_actions_24o94_49", wg = "_list_24o94_76", ee = {
  page: pg,
  header: hg,
  headerTop: vg,
  heading: yg,
  title: gg,
  description: _g,
  actions: Eg,
  list: wg
}, kg = () => {
  const l = mt(), { ref: o, inView: i } = Er({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), [c, d] = v.useState(), [m, p] = v.useState(!1), [h, y] = v.useState(!1), [E, C] = v.useState({}), [g, T] = v.useState(!1), [M, D] = v.useState(!1), {
    loading: $,
    scripts: w,
    scriptData: P,
    loadScripts: L,
    saveScript: z,
    updateScript: H,
    getScriptAction: A,
    getAllScripts: O,
    deleteScriptAction: X
  } = ov();
  v.useEffect(() => {
    !M || !l || !i || $ || !w || w.page >= w.total_pages || L(w.page + 1, !0);
  }, [
    i,
    l,
    $,
    w,
    L
  ]), v.useEffect(() => {
    !$ && w && w.page === 1 && D(!0);
  }, [$, w]);
  const re = () => {
    d(void 0), T(!1), p(!0);
  }, _e = (ie) => {
    y(!0), C(ie);
  }, Ee = async (ie) => {
    T(!0);
    const q = await A(
      ie
    );
    d(q), p(!0);
  }, pe = async (ie) => {
    if (g) {
      if (!ie.uuid) return;
      const { uuid: q, ...W } = ie;
      await H(ie.uuid, W);
    } else
      await z(ie);
    p(!1);
  }, Ce = async (ie) => {
    ie && await X(ie);
  }, ue = async () => {
    pr("dialog-custom-ui-scripts.json", await O());
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, $ && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Скрипты"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Сценарии"), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, null, /* @__PURE__ */ s.createElement(ne, { onClick: ue }, "Скачать скрипты"), /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: re
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ne, { onClick: ue }, "Скачать скрипты"), /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: re
    },
    "🞢 Добавить сценарий"
  )))), /* @__PURE__ */ s.createElement("div", { className: ee.list }, w == null ? void 0 : w.script_actions.map((ie) => /* @__PURE__ */ s.createElement(
    wr,
    {
      key: ie.uuid,
      title: ie.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => _e(ie)
    }
  )), l ? /* @__PURE__ */ s.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(s.Fragment, null)), l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(
    kr,
    {
      page: (w == null ? void 0 : w.page) || 1,
      totalPages: (w == null ? void 0 : w.total_pages) || 1,
      onChange: L
    }
  ), /* @__PURE__ */ s.createElement(
    Av,
    {
      uuid: E.uuid,
      open: h,
      title: E.title,
      onClose: () => y(!1),
      onEdit: Ee,
      onDelete: Ce
    }
  ), /* @__PURE__ */ s.createElement(
    Gy,
    {
      open: m,
      initialData: c,
      isEdit: g,
      isOptionData: P(),
      loading: $,
      onCancel: () => p(!1),
      onSave: async (ie) => {
        await pe(ie);
      }
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, Sg = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function vl(l) {
  const o = _r(), [i, c] = v.useState(null), [d, m] = v.useState(!0), p = v.useRef(!1), h = async (D, $ = 1, w = !1) => {
    m(!0);
    try {
      const P = Sg(await o._getShort(`${D}`, $));
      c((L) => !w || !L ? P : {
        ...P,
        data: [
          ...L.data,
          ...P.data
        ]
      });
    } finally {
      m(!1);
    }
  };
  return v.useEffect(() => {
    p.current || (p.current = !0, h(l));
  }, [h]), {
    loading: d,
    commands: i,
    loadCommands: h,
    saveCommand: async (D, $) => await o._save($, D),
    deleteCommand: async (D, $) => await o._delete($, D),
    updateCommand: async (D, $) => {
      if (!$.uuid) return;
      const { uuid: w, ...P } = $;
      return await o._update(w, D, P);
    },
    editStatusCommand: async (D, $, w) => await o._update_status(D, $, w),
    getAllCommands: async (D) => o._getAllShort(D),
    detailInformationCommand: async (D, $) => await o._getDetail($, D)
  };
}
const Cg = "_field_1qtfn_1", Ng = "_label_1qtfn_7", xg = "_select_1qtfn_13", Gs = {
  field: Cg,
  label: Ng,
  select: xg
}, oi = ({
  label: l,
  options: o,
  className: i = "",
  value: c,
  ...d
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ s.createElement("div", { className: Gs.field }, l && /* @__PURE__ */ s.createElement("label", { className: Gs.label }, l), /* @__PURE__ */ s.createElement(
    "select",
    {
      ...d,
      value: m,
      className: `${Gs.select} ${i}`
    },
    !p && /* @__PURE__ */ s.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ s.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, Tg = "_switchRow_1lfy8_1", Rg = "_input_1lfy8_11", Pg = "_track_1lfy8_22", Mg = "_thumb_1lfy8_33", Lg = "_label_1lfy8_62", dl = {
  switchRow: Tg,
  input: Rg,
  track: Pg,
  thumb: Mg,
  label: Lg
}, Kt = ({ label: l, className: o = "", ...i }) => /* @__PURE__ */ s.createElement("label", { className: `${dl.switchRow} ${o}` }, /* @__PURE__ */ s.createElement("input", { ...i, type: "checkbox", className: dl.input }), /* @__PURE__ */ s.createElement("span", { className: dl.track, "aria-hidden": "true" }, /* @__PURE__ */ s.createElement("span", { className: dl.thumb })), /* @__PURE__ */ s.createElement("span", { className: dl.label }, l)), Ig = "_field_veq7g_1", $g = "_label_veq7g_7", Dg = "_textarea_veq7g_13", zg = "_error_veq7g_40", Og = "_errorText_veq7g_48", fl = {
  field: Ig,
  label: $g,
  textarea: Dg,
  error: zg,
  errorText: Og
}, ja = ({
  label: l,
  error: o,
  className: i = "",
  ...c
}) => /* @__PURE__ */ s.createElement("div", { className: fl.field }, l && /* @__PURE__ */ s.createElement("label", { className: fl.label }, l), /* @__PURE__ */ s.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${fl.textarea}
          ${o ? fl.error : ""}
          ${i}
        `
  }
), o && /* @__PURE__ */ s.createElement("span", { className: fl.errorText }, o)), Ag = [
  { label: "ha_storage", value: "ha_storage" }
], Fg = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], jg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" }
], Ug = "_form_nymr0_1", bg = "_field_nymr0_15", Bg = "_textarea_nymr0_24", Wg = "_arrayItem_nymr0_37", Ft = {
  form: Ug,
  field: bg,
  textarea: Bg,
  arrayItem: Wg
}, Rd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "ha_storage",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), hf = ({
  open: l,
  isEdit: o,
  formData: i,
  formatData: c,
  setFormData: d,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = v.useMemo(() => {
    if (i[c]) return i[c] ?? Rd();
  }, [i]), [E, C] = v.useState({}), g = (w) => {
    d((P) => ({
      ...P,
      [c]: {
        ...P[c] ?? Rd(),
        ...w
      }
    }));
  }, T = (w, P, L) => {
    const z = [...y[w] ?? []];
    z[P] = { ...z[P], ...L }, g({
      [w]: z
    });
  }, M = (w, P) => {
    g({
      [w]: [...y[w] ?? [], P]
    });
  }, D = (w, P) => {
    g({
      [w]: (y[w] ?? []).filter(
        (L, z) => z !== P
      )
    });
  }, $ = () => {
    var L;
    const w = {};
    return i.title.trim() || (w.title = "Обязательное поле"), (L = y.actionType) != null && L.trim() || (w.actionType = "Обязательное поле"), C(w), Object.keys(w).length === 0;
  };
  return /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ s.createElement(
        ne,
        {
          onClick: () => {
            $() && (o ? h() : p());
          }
        },
        o ? "Обновить" : "Сохранить"
      )
    },
    /* @__PURE__ */ s.createElement("div", { className: Ft.form }, /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "Название команды",
        value: i.title,
        error: E.title,
        onChange: (w) => d({
          ...i,
          title: w.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Kt,
      {
        label: "Завершать диалог",
        checked: y.endStatus,
        onChange: (w) => g({
          endStatus: w.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ s.createElement(
      Kt,
      {
        label: "Отправить команду как есть",
        checked: y.forwardText,
        onChange: (w) => g({
          forwardText: w.target.checked
        })
      }
    ) : /* @__PURE__ */ s.createElement(s.Fragment, null), /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "actionType",
        value: y.actionType ?? "",
        error: E.actionType,
        onChange: (w) => g({
          actionType: w.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      oi,
      {
        label: "answerType",
        value: y.answerType,
        options: Ag,
        onChange: (w) => g({
          answerType: w.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement("div", { className: Ft.field }, /* @__PURE__ */ s.createElement(
      ja,
      {
        label: "voiceCommands",
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (w) => g({
          voiceCommands: w.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ s.createElement(jt, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((w, P) => /* @__PURE__ */ s.createElement("div", { key: P, className: Ft.arrayItem }, /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "actionType",
        value: w.actionType,
        onChange: (L) => T("voiceResponseArray", P, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      ja,
      {
        label: "voiceResponse",
        value: w.voiceResponse,
        onChange: (L) => T("voiceResponseArray", P, {
          voiceResponse: L.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("voiceResponseArray", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "secondary",
        onClick: () => M("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ s.createElement(jt, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((w, P) => /* @__PURE__ */ s.createElement("div", { key: P, className: Ft.arrayItem }, /* @__PURE__ */ s.createElement(
      oi,
      {
        label: "actionTypeComponent",
        value: w.actionTypeComponent,
        options: jg,
        onChange: (L) => T("nextAction", P, {
          actionTypeComponent: L.target.value
        })
      }
    ), w.actionTypeComponent == "custom" ? /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "actionType",
        value: w.actionType ?? "",
        onChange: (L) => T("nextAction", P, {
          actionType: L.target.value
        })
      }
    ) : /* @__PURE__ */ s.createElement(s.Fragment, null), /* @__PURE__ */ s.createElement(
      hr,
      {
        label: "uuid",
        value: w.uuid,
        searchSource: ["search_assistant_commands", "search_assistant_sub_commands"],
        selectedTitle: w.title,
        onChange: (L) => T("nextAction", P, {
          uuid: L
        }),
        onSelect: (L) => T("nextAction", P, {
          uuid: L.uuid,
          title: L.title ?? ""
        })
      }
    ), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextAction", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "secondary",
        onClick: () => M("nextAction", {
          actionTypeComponent: "",
          actionType: "",
          uuid: "",
          title: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ s.createElement(jt, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((w, P) => /* @__PURE__ */ s.createElement("div", { key: P, className: Ft.arrayItem }, /* @__PURE__ */ s.createElement(
      hr,
      {
        label: "uuid",
        value: w.uuid,
        selectedTitle: w.title,
        searchSource: ["search_assistant_sub_direct_controls"],
        onChange: (L) => T("nextDirectControl", P, {
          uuid: L
        }),
        onSelect: (L) => T("nextDirectControl", P, {
          uuid: L.uuid,
          mappingType: L.mappingType ?? "",
          title: L.title ?? ""
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "mappingType",
        disabled: !0,
        value: w.mappingType ?? "",
        onChange: (L) => T("nextDirectControl", P, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextDirectControl", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "secondary",
        onClick: () => M("nextDirectControl", {
          uuid: "",
          actionType: "",
          title: ""
        })
      },
      "Добавить ещё"
    )))
  );
}, Hg = "_content_19r5a_1", Vg = "_title_19r5a_7", Qg = "_actions_19r5a_14", Xs = {
  content: Hg,
  title: Vg,
  actions: Qg
}, Va = ({
  open: l,
  command: o,
  onClose: i,
  onToggleStatus: c,
  onEdit: d,
  onDelete: m
}) => {
  const p = mt();
  if (!o) return null;
  const h = /* @__PURE__ */ s.createElement("div", { className: Xs.content }, /* @__PURE__ */ s.createElement("h3", { className: Xs.title }, o.title), /* @__PURE__ */ s.createElement("div", { className: Xs.actions }, /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), i();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        d(o.uuid), i();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o.uuid), i();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ s.createElement(s.Fragment, null, p ? /* @__PURE__ */ s.createElement(hi, { open: l, onClose: i }, h) : /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: i,
      title: "Действия"
    },
    h
  ));
}, qg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "ha_storage",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Pd = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...qg(),
    forwardText: !1
  }
}), Yg = () => {
  const l = mt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(
    () => Pd()
  ), [h, y] = v.useState(
    null
  ), { ref: E, inView: C } = Er({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: g,
    loadCommands: T,
    deleteCommand: M,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: w,
    editStatusCommand: P,
    commands: L
  } = vl("get_assistant_commands_short"), [z, H] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !C || g || !L || L.page >= L.total_pages || T("get_assistant_commands_short", L.page + 1, !0);
  }, [C, l, g, L, T]), v.useEffect(() => {
    !g && L && L.page === 1 && H(!0);
  }, [g, L]);
  const A = () => {
    d(!1), p(Pd()), i(!0);
  }, O = async (pe) => {
    d(!0);
    const Ce = await D(
      "get_assistant_command",
      pe
    );
    p(Ce.data), i(!0);
  }, X = async (pe, Ce) => {
    await P(
      "update_assistant_command_status",
      pe,
      Ce
    ), T("get_assistant_commands_short");
  }, re = async (pe) => {
    await M("delete_assistant_command", pe), T("get_assistant_commands_short");
  }, _e = async () => {
    await $("save_assistant_command", m), i(!1);
  }, Ee = async () => {
    await w("update_assistant_command", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, g && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Комманды"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Комманды"), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, null, /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: A }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: A }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: ee.list }, L == null ? void 0 : L.data.map((pe) => /* @__PURE__ */ s.createElement(
    wr,
    {
      key: pe.uuid,
      title: pe.title,
      subTitle: pe.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(pe)
    }
  )), l ? /* @__PURE__ */ s.createElement("div", { ref: E, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(s.Fragment, null)), l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(
    kr,
    {
      page: (L == null ? void 0 : L.page) || 1,
      totalPages: (L == null ? void 0 : L.total_pages) || 1,
      onChange: (pe) => T("get_assistant_commands_short", pe)
    }
  ), /* @__PURE__ */ s.createElement(
    hf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => i(!1),
      onSave: _e,
      onUpdate: Ee
    }
  ), /* @__PURE__ */ s.createElement(
    Va,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: X,
      onDelete: re,
      onEdit: (pe) => O(pe)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, Kg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "ha_storage",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Md = () => ({
  status: !1,
  title: "",
  subComponentDialog: {
    ...Kg(),
    forwardText: !1
  }
}), Gg = () => {
  const l = mt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(() => Md()), [h, y] = v.useState(null), { ref: E, inView: C } = Er({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: g,
    loadCommands: T,
    deleteCommand: M,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: w,
    editStatusCommand: P,
    getAllCommands: L,
    commands: z
  } = vl("get_assistant_sub_commands_short"), [H, A] = v.useState(!1);
  v.useEffect(() => {
    !H || !l || !C || g || !z || z.page >= z.total_pages || T("get_assistant_sub_commands_short", z.page + 1, !0);
  }, [
    C,
    l,
    g,
    z,
    T
  ]), v.useEffect(() => {
    !g && z && z.page === 1 && A(!0);
  }, [g, z]);
  const O = () => {
    d(!1), p(Md()), i(!0);
  }, X = async (ue) => {
    d(!0);
    const ie = await D("get_assistant_sub_command", ue);
    p(ie.data), i(!0);
  }, re = async (ue, ie) => {
    await P("update_assistant_sub_command_status", ue, ie), T("get_assistant_sub_commands_short");
  }, _e = async (ue) => {
    await M("delete_assistant_sub_command", ue), T("get_assistant_sub_commands_short");
  }, Ee = async () => {
    await $("save_assistant_sub_command", m), i(!1);
  }, pe = async () => {
    await w("update_assistant_sub_command", m), i(!1);
  }, Ce = async () => {
    pr("dialog-custom-ui-scenarios.json", await L("get_assistant_sub_commands_short"));
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Второстепенные команды"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(Jt, null), g && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Второстепенные команды "), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, null, /* @__PURE__ */ s.createElement(ne, { onClick: Ce }, "Скачать сценарии"), /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: O }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ne, { onClick: Ce }, "Скачать сценарии"), /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: O }, "🞢 Добавить сценарий")))), /* @__PURE__ */ s.createElement("div", { className: ee.list }, z == null ? void 0 : z.data.map((ue) => /* @__PURE__ */ s.createElement(
    wr,
    {
      key: ue.uuid,
      title: ue.title,
      subTitle: ue.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(ue)
    }
  ))), l ? /* @__PURE__ */ s.createElement("div", { ref: E, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(
    kr,
    {
      page: (z == null ? void 0 : z.page) || 1,
      totalPages: (z == null ? void 0 : z.total_pages) || 1,
      onChange: (ue) => T("get_assistant_sub_commands_short", ue)
    }
  ), /* @__PURE__ */ s.createElement(
    hf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "subComponentDialog",
      setFormData: p,
      onClose: () => i(!1),
      onSave: Ee,
      onUpdate: pe
    }
  ), /* @__PURE__ */ s.createElement(
    Va,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: re,
      onDelete: _e,
      onEdit: (ue) => X(ue)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, Ld = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Xg = ({
  open: l,
  onClose: o,
  title: i,
  formData: c,
  setFormData: d,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? Ld(), [c]), h = (g) => {
    d((T) => ({
      ...T,
      directControl: {
        ...T.directControl ?? Ld(),
        ...g
      }
    }));
  }, y = (g, T) => {
    const M = [...p.subDirectControl ?? []];
    M[g] = {
      ...M[g],
      ...T
    }, h({
      subDirectControl: M
    });
  }, E = () => {
    h({
      subDirectControl: [
        ...p.subDirectControl ?? [],
        {
          subMappingType: "",
          subVoiceCommands: ""
        }
      ]
    });
  }, C = (g) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((T, M) => M !== g)
    });
  };
  return /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: o,
      title: i,
      footer: /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ne, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ s.createElement("div", { className: Ft.form }, /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "Название команды",
        value: c.title,
        onChange: (g) => d((T) => ({
          ...T,
          title: g.target.value
        }))
      }
    ), /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (g) => h({
          mappingType: g.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      oi,
      {
        label: "valueType",
        value: p.valueType,
        options: Fg,
        onChange: (g) => h({
          valueType: g.target.value
        })
      }
    ), p.valueType == "command" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { className: Ft.field }, /* @__PURE__ */ s.createElement(
      ja,
      {
        label: "voiceCommands",
        rows: 6,
        value: (p.voiceCommands ?? []).join(`
`),
        onChange: (g) => h({
          voiceCommands: g.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ s.createElement(
      Kt,
      {
        label: "manual",
        checked: p.manual,
        onChange: (g) => h({
          manual: g.target.checked,
          subDirectControl: g.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ s.createElement(jt, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (g, T) => /* @__PURE__ */ s.createElement("div", { key: T, className: Ft.arrayItem }, /* @__PURE__ */ s.createElement(
        Le,
        {
          label: "subMappingType",
          value: g.subMappingType,
          onChange: (M) => y(T, {
            subMappingType: M.target.value
          })
        }
      ), /* @__PURE__ */ s.createElement("div", { className: Ft.field }, /* @__PURE__ */ s.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ s.createElement(
        "textarea",
        {
          className: Ft.textarea,
          rows: 3,
          value: g.subVoiceCommands,
          onChange: (M) => y(T, {
            subVoiceCommands: M.target.value
          })
        }
      )), /* @__PURE__ */ s.createElement(
        ne,
        {
          type: "button",
          variant: "ghost",
          onClick: () => C(T)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ s.createElement(
      ne,
      {
        type: "button",
        variant: "secondary",
        onClick: E
      },
      "Добавить ещё"
    )) : /* @__PURE__ */ s.createElement(
      hr,
      {
        label: "subDirectControl",
        value: typeof p.subDirectControl == "string" ? p.subDirectControl : "",
        selectedTitle: p.subDirectControlTitle,
        searchSource: ["search_assistant_sub_direct_control_samples"],
        onChange: (g) => h({
          subDirectControl: g
        }),
        onSelect: (g) => h({
          subDirectControl: g.uuid,
          subDirectControlTitle: g.title ?? ""
        })
      }
    ), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null))
  );
}, Id = () => ({
  status: !1,
  title: "",
  directControl: {
    mappingType: "",
    valueType: "",
    voiceCommands: [""],
    manual: !1,
    subDirectControl: "",
    subDirectControlTitle: ""
  }
}), Jg = () => {
  const l = mt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(() => Id()), [h, y] = v.useState(null), E = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [C, g] = v.useState("main"), T = gr(), { ref: M, inView: D } = Er({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: $,
    loadCommands: w,
    deleteCommand: P,
    detailInformationCommand: L,
    saveCommand: z,
    updateCommand: H,
    editStatusCommand: A,
    commands: O
  } = vl("get_assistant_sub_direct_controls_short"), [X, re] = v.useState(!1);
  v.useEffect(() => {
    !X || !l || !D || $ || !O || O.page >= O.total_pages || w("get_assistant_sub_direct_controls_short", O.page + 1, !0);
  }, [
    D,
    l,
    $,
    O,
    w
  ]), v.useEffect(() => {
    !$ && O && O.page === 1 && re(!0);
  }, [$, O]);
  const _e = () => {
    d(!1), p(Id()), i(!0);
  }, Ee = async (q) => {
    d(!0);
    const W = await L("get_assistant_sub_direct_control", q);
    p(W.data), i(!0);
  }, pe = async (q, W) => {
    await A("update_assistant_sub_direct_controls_status", q, W), w("get_assistant_sub_direct_controls_short");
  }, Ce = async (q) => {
    await P("delete_assistant_sub_direct_control", q), w("get_assistant_sub_direct_controls_short");
  }, ue = async () => {
    await z("save_assistant_sub_direct_control", m), i(!1);
  }, ie = async () => {
    await H("update_assistant_sub_direct_control", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Прямые команды"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(Jt, null), $ && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Прямые команды"), /* @__PURE__ */ s.createElement("div", { className: ee.innerTabs }, E.map((q) => /* @__PURE__ */ s.createElement(
    "button",
    {
      key: q.key,
      type: "button",
      className: `${ee.innerTab} ${C === q.key ? ee.activeInnerTab : ""}`,
      onClick: () => {
        g(q.key), T(`/commands/direct/${q.key === "main" ? "main" : "template"}`);
      }
    },
    q.label
  ))), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, null, /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: _e }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: _e }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: ee.list }, O == null ? void 0 : O.data.map((q) => /* @__PURE__ */ s.createElement(
    wr,
    {
      key: q.uuid,
      title: q.title,
      subTitle: q.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(q)
    }
  ))), l ? /* @__PURE__ */ s.createElement("div", { ref: M, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(
    kr,
    {
      page: (O == null ? void 0 : O.page) || 1,
      totalPages: (O == null ? void 0 : O.total_pages) || 1,
      onChange: (q) => w("get_assistant_sub_direct_controls_short", q)
    }
  ), /* @__PURE__ */ s.createElement(
    Xg,
    {
      open: o,
      onClose: () => i(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? ie : ue
    }
  ), /* @__PURE__ */ s.createElement(
    Va,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: pe,
      onDelete: Ce,
      onEdit: (q) => Ee(q)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, $d = {}, Zg = ({
  open: l,
  onClose: o,
  title: i,
  formData: c,
  setFormData: d,
  onSave: m
}) => {
  const p = v.useMemo(
    () => c.subDirectControl ?? [],
    [c]
  ), h = (g) => {
    d((T) => ({
      ...T,
      subDirectControl: g
    }));
  }, y = (g, T) => {
    const M = [...p];
    M[g] = {
      ...M[g],
      ...T
    }, h(M);
  }, E = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, C = (g) => {
    h(
      p.filter((T, M) => M !== g)
    );
  };
  return /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: o,
      title: i,
      footer: /* @__PURE__ */ s.createElement(ne, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ s.createElement("div", { className: $d.form }, /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "Название команды",
        value: c.title,
        onChange: (g) => d((T) => ({
          ...T,
          title: g.target.value
        }))
      }
    ), /* @__PURE__ */ s.createElement(
      jt,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((g, T) => /* @__PURE__ */ s.createElement(
        "div",
        {
          key: T,
          className: $d.arrayItem
        },
        /* @__PURE__ */ s.createElement(
          Le,
          {
            label: "subMappingType",
            value: g.subMappingType ?? "",
            onChange: (M) => y(T, {
              subMappingType: M.target.value
            })
          }
        ),
        /* @__PURE__ */ s.createElement(
          ja,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof g.subVoiceCommands == "object" ? g.subVoiceCommands : []).join(`
`),
            onChange: (M) => y(T, {
              subVoiceCommands: M.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ s.createElement(
          ne,
          {
            type: "button",
            variant: "ghost",
            onClick: () => C(T)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ s.createElement(
        ne,
        {
          type: "button",
          variant: "secondary",
          onClick: E
        },
        "Добавить ещё"
      )
    ))
  );
}, Dd = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), e_ = () => {
  const l = mt(), o = gr(), [i, c] = v.useState(!1), [d, m] = v.useState(!1), [p, h] = v.useState(Dd), [y, E] = v.useState(null), [C, g] = v.useState("template"), [T, M] = v.useState(!1), D = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: $, inView: w } = Er({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: P,
    loadCommands: L,
    deleteCommand: z,
    detailInformationCommand: H,
    saveCommand: A,
    updateCommand: O,
    editStatusCommand: X,
    commands: re
  } = vl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !T || !l || !w || P || !re || re.page >= re.total_pages || L(
      "get_assistant_sub_direct_control_samples_short",
      re.page + 1,
      !0
    );
  }, [
    T,
    w,
    l,
    P,
    re,
    L
  ]), v.useEffect(() => {
    !P && re && re.page === 1 && M(!0);
  }, [P, re]);
  const _e = () => {
    m(!1), h(Dd()), c(!0);
  }, Ee = async (q) => {
    m(!0);
    const W = await H(
      "get_assistant_sub_direct_control_sample",
      q
    );
    h(W.data), c(!0);
  }, pe = async (q, W) => {
    await X(
      "update_assistant_sub_direct_control",
      q,
      W
    ), L(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ce = async (q) => {
    await z(
      "delete_assistant_sub_direct_control_sample",
      q
    ), L(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ue = async () => {
    await A(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), L(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ie = async () => {
    await O(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), L(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Прямые команды шаблоны"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, !l && /* @__PURE__ */ s.createElement(Jt, null), P && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Прямые команды шаблоны"), /* @__PURE__ */ s.createElement("div", { className: ee.innerTabs }, D.map((q) => /* @__PURE__ */ s.createElement(
    "button",
    {
      key: q.key,
      type: "button",
      className: `${ee.innerTab} ${C === q.key ? ee.activeInnerTab : ""}`,
      onClick: () => {
        g(q.key), o(`/commands/direct/${q.key === "main" ? "main" : "template"}`);
      }
    },
    q.label
  ))), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, null, /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: _e }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(ne, { variant: "primary", onClick: _e }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: ee.list }, re == null ? void 0 : re.data.map((q) => /* @__PURE__ */ s.createElement(
    wr,
    {
      key: q.uuid,
      title: q.title,
      subTitle: q.status === !1 ? "Выключена" : "Включена",
      onClick: () => E(q)
    }
  ))), l ? /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: $,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ s.createElement(
    kr,
    {
      page: (re == null ? void 0 : re.page) ?? 1,
      totalPages: (re == null ? void 0 : re.total_pages) ?? 1,
      onChange: (q) => L(
        "get_assistant_sub_direct_control_samples_short",
        q
      )
    }
  ), /* @__PURE__ */ s.createElement(
    Zg,
    {
      open: i,
      onClose: () => c(!1),
      title: d ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: d ? ie : ue
    }
  ), /* @__PURE__ */ s.createElement(
    Va,
    {
      open: !!y,
      command: y,
      onClose: () => E(null),
      onToggleStatus: pe,
      onDelete: Ce,
      onEdit: (q) => Ee(q)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, t_ = "_form_nymr0_1", n_ = {
  form: t_
}, r_ = ({
  open: l,
  isEdit: o,
  formData: i,
  setFormData: c,
  onClose: d,
  onUpdate: m
}) => {
  if (!i) return;
  const p = v.useMemo(() => {
    if (i) return i;
  }, [i]), h = (y) => {
    c((E) => ({
      ...E,
      ...y
    }));
  };
  return /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: d,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ s.createElement(ne, { onClick: m }, "Обновить")
    },
    /* @__PURE__ */ s.createElement("div", { className: n_.form }, /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "Название команды",
        value: i.title,
        onChange: (y) => c({
          ...i,
          title: y.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Kt,
      {
        label: "Завершать диалог",
        checked: p.endStatus,
        onChange: (y) => h({
          endStatus: y.target.checked
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Kt,
      {
        label: "Передать команду серверу",
        checked: p.forwardCommandToServer,
        onChange: (y) => h({
          forwardCommandToServer: y.target.checked
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "actionType",
        value: p.actionType,
        onChange: (y) => h({
          actionType: y.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Le,
      {
        label: "Ответное сообщение",
        value: p.voiceResponse,
        onChange: (y) => h({
          voiceResponse: y.target.value
        })
      }
    ))
  );
}, l_ = () => {
  const l = mt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(), { ref: h, inView: y } = Er({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: E,
    loadCommands: C,
    detailInformationCommand: g,
    updateCommand: T,
    commands: M
  } = vl("get_assistant_settings_short"), [D, $] = v.useState(!1);
  v.useEffect(() => {
    !D || !l || !y || E || !M || M.page >= M.total_pages || C("get_assistant_settings_short", M.page + 1, !0);
  }, [
    y,
    l,
    E,
    M,
    C
  ]), v.useEffect(() => {
    !E && M && M.page === 1 && $(!0);
  }, [E, M]);
  const w = async (L) => {
    d(!0);
    const z = await g("get_assistant_setting", L.uuid);
    p(z.data), i(!0);
  }, P = async () => {
    await T("update_assistant_setting", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Настройки команд"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(Jt, null), E && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.headerTop }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте и редактируйте голосовые команды ассистента.")))), /* @__PURE__ */ s.createElement("div", { className: ee.list }, M == null ? void 0 : M.data.map((L) => /* @__PURE__ */ s.createElement(
    wr,
    {
      key: L.uuid,
      title: L.title,
      subTitle: L.actionType,
      onClick: () => w(L)
    }
  ))), l ? /* @__PURE__ */ s.createElement("div", { ref: h, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(
    kr,
    {
      page: (M == null ? void 0 : M.page) || 1,
      totalPages: (M == null ? void 0 : M.total_pages) || 1,
      onChange: (L) => C("get_assistant_settings_short", L)
    }
  ), /* @__PURE__ */ s.createElement(
    r_,
    {
      open: o,
      isEdit: c,
      formData: m,
      setFormData: p,
      onClose: () => i(!1),
      onUpdate: P
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
};
function a_() {
  const l = _r(), [o, i] = v.useState(!0), [c, d] = v.useState(null), [m, p] = v.useState([]), h = v.useCallback(async () => {
    i(!0);
    try {
      const C = await l._getShort("get_settings");
      d((C == null ? void 0 : C.result) ?? C);
    } finally {
      i(!1);
    }
  }, [l]);
  v.useEffect(() => {
    h();
  }, []);
  const y = v.useCallback(async () => {
    const C = await l.getLocalMusicOptions();
    p(C);
  }, [l]);
  return v.useEffect(() => {
    y();
  }, []), {
    loading: o,
    settings: c,
    musicOptions: m,
    saveSettings: async (C) => {
      await l._save(C, "save_settings");
    },
    loadScripts: h
  };
}
const o_ = "_form_1o1aw_1", s_ = "_field_1o1aw_7", i_ = "_input_1o1aw_13", u_ = "_label_1o1aw_32", c_ = "_help_1o1aw_51", qe = {
  form: o_,
  field: s_,
  input: i_,
  label: u_,
  help: c_
}, d_ = ({ data: l, onChange: o }) => {
  const i = (c, d) => {
    o({
      ...l,
      [c]: d
    });
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, /* @__PURE__ */ s.createElement(Le, { label: "API Key", value: l.api_key ?? "", onChange: (c) => i("api_key", c.target.value) }), /* @__PURE__ */ s.createElement(Le, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => i("folderId", c.target.value) }), /* @__PURE__ */ s.createElement(Le, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => i("language", c.target.value) }), /* @__PURE__ */ s.createElement(Le, { label: "Voice", value: l.voice ?? "", onChange: (c) => i("voice", c.target.value) }), /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, "Codec"), /* @__PURE__ */ s.createElement("select", { className: qe.input, value: l.codec ?? "", onChange: (c) => i("codec", c.target.value || void 0) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ s.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ s.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ s.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, "Emotion"), /* @__PURE__ */ s.createElement("select", { className: qe.input, value: l.emotion ?? "", onChange: (c) => i("emotion", c.target.value || void 0) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ s.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ s.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ s.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ s.createElement(Le, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => i("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, f_ = ({ data: l, onChange: o }) => {
  const i = (c, d) => {
    o({
      ...l,
      [c]: d
    });
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, /* @__PURE__ */ s.createElement(Le, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => i("base_url", c.target.value) }), /* @__PURE__ */ s.createElement(Le, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => i("token", c.target.value) }));
}, m_ = ({ data: l, musicOptions: o, onChange: i }) => {
  const c = (m, p) => {
    i({
      ...l,
      [m]: p
    });
  }, d = (m, p, h = "") => {
    const y = o.some((E) => E.value === h);
    return /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, m), /* @__PURE__ */ s.createElement(
      "select",
      {
        className: qe.input,
        value: h,
        onChange: (E) => c(p, E.target.value)
      },
      /* @__PURE__ */ s.createElement("option", { value: "" }, "Не выбрано"),
      h && !y && /* @__PURE__ */ s.createElement("option", { value: h }, h),
      o.map((E) => /* @__PURE__ */ s.createElement("option", { key: E.value, value: E.value }, E.label))
    ));
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, d(
    "Global music timer",
    "global_music_timer",
    l.global_music_timer
  ), d(
    "Global music alarm",
    "global_music_alarm",
    l.global_music_alarm
  ), o.length === 0 && /* @__PURE__ */ s.createElement("span", { className: qe.help }, "Музыка на сервере не найдена."));
}, p_ = ({ data: l, onChange: o }) => {
  const i = (c, d) => {
    o({
      ...l,
      [c]: d
    });
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, /* @__PURE__ */ s.createElement(
    Le,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => i("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, "Theme"), /* @__PURE__ */ s.createElement("select", { className: qe.input, value: l.theme ?? "dark", onChange: (c) => i("theme", c.target.value) }, /* @__PURE__ */ s.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ s.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ s.createElement(Kt, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => i("is_admin", c.target.checked) }), /* @__PURE__ */ s.createElement(Kt, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => i("active_remout", c.target.checked) }), /* @__PURE__ */ s.createElement(Kt, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ s.createElement(
    Le,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => i("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, h_ = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, Ua = {
  base_url: "",
  token: ""
}, v_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, zd = {
  yandex_tts: h_,
  remout: Ua,
  timer_alarm: v_,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, y_ = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), g_ = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), __ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), E_ = (l) => ({
  yandex_tts: y_(l == null ? void 0 : l.yandex_tts),
  remout: g_(l == null ? void 0 : l.remout),
  timer_alarm: __(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Js = (l, o) => {
  const i = {};
  return Object.keys(l).forEach((c) => {
    const d = c;
    l[d] !== o[d] && (i[d] = l[d]);
  }), i;
}, w_ = (l, o) => {
  const i = {}, c = Js(l.yandex_tts, o.yandex_tts), d = Js(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (i.yandex_tts = c), Object.keys(d).length > 0 && (i.timer_alarm = d), l.theme !== o.theme && (i.theme = l.theme), l.is_admin !== o.is_admin && (i.is_admin = l.is_admin), l.active_remout !== o.active_remout && (i.active_remout = l.active_remout), l.client_id !== o.client_id && (i.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (i.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (i.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Js(l.remout ?? Ua, o.remout ?? Ua);
    Object.keys(m).length > 0 && (i.remout = m);
  }
  return i;
}, k_ = () => {
  const l = mt(), [o, i] = v.useState(zd), [c, d] = v.useState(zd), { settings: m, musicOptions: p, saveSettings: h } = a_();
  v.useEffect(() => {
    if (!m) return;
    const E = E_(m);
    i(E), d(E);
  }, [m]), v.useEffect(() => {
    window.dispatchEvent(new CustomEvent("dialog-custom-ui-theme-change", { detail: o.theme }));
  }, [o.theme]);
  const y = () => {
    const E = w_(o, c);
    h(E), d(o);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Настройки"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: ee.page }, /* @__PURE__ */ s.createElement(Jt, null), l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", null, "Настройки"), /* @__PURE__ */ s.createElement("div", { style: {
    display: "flex",
    "flex-direction": "column",
    height: "100%",
    ...l ? { marginBottom: "150px" } : {},
    gap: "15px"
  } }, /* @__PURE__ */ s.createElement(jt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ s.createElement(
    p_,
    {
      data: {
        active_remout: o.active_remout,
        is_admin: o.is_admin,
        theme: o.theme,
        client_id: o.client_id,
        api_commands_enabled: o.api_commands_enabled,
        api_commands_token: o.api_commands_token
      },
      onChange: (E) => i({ ...o, ...E })
    }
  )), /* @__PURE__ */ s.createElement(jt, { title: "Яндекс TTS" }, /* @__PURE__ */ s.createElement(
    d_,
    {
      data: o.yandex_tts,
      onChange: (E) => i({ ...o, yandex_tts: E })
    }
  )), o.active_remout && /* @__PURE__ */ s.createElement(jt, { title: "Remote" }, /* @__PURE__ */ s.createElement(
    f_,
    {
      data: o.remout ?? Ua,
      onChange: (E) => i({ ...o, remout: E })
    }
  )), /* @__PURE__ */ s.createElement(jt, { title: "Timer / Alarm" }, /* @__PURE__ */ s.createElement(
    m_,
    {
      data: o.timer_alarm,
      musicOptions: p,
      onChange: (E) => i({ ...o, timer_alarm: E })
    }
  ))), l ? /* @__PURE__ */ s.createElement(Cn, null, /* @__PURE__ */ s.createElement(ne, { onClick: () => pr("dialog-custom-ui-tts.json", o.yandex_tts) }, "Скачать TTS"), /* @__PURE__ */ s.createElement(ne, { onClick: () => pr("dialog-custom-ui-settings.json", o) }, "Скачать настройки"), /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: y
    },
    "Сохранить"
  )) : /* @__PURE__ */ s.createElement("div", { className: ee.actions }, /* @__PURE__ */ s.createElement(ne, { onClick: () => pr("dialog-custom-ui-tts.json", o.yandex_tts) }, "Скачать TTS"), /* @__PURE__ */ s.createElement(ne, { onClick: () => pr("dialog-custom-ui-settings.json", o) }, "Скачать настройки"), /* @__PURE__ */ s.createElement(ne, { onClick: y }, "Сохранить"))), /* @__PURE__ */ s.createElement(Zt, null));
}, Un = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, S_ = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 1e3).toISOString();
}, vf = (l) => {
  if (typeof l == "number") return l;
  if (typeof l == "string") {
    const o = l.split(":").map((i) => Number(i));
    return o.length === 3 ? (o[0] || 0) * 3600 + (o[1] || 0) * 60 + (o[2] || 0) : o.length === 2 ? (o[0] || 0) * 60 + (o[1] || 0) : Number(l) || 0;
  }
  if (l && typeof l == "object") {
    if (l.date_end) {
      const o = Date.parse(l.date_end);
      if (!Number.isNaN(o))
        return Math.max(0, Math.ceil((o - Date.now()) / 1e3));
    }
    return vf(l.count_timer || "");
  }
  return 0;
}, Od = (l) => {
  const o = Math.max(1, Number(l) || 1), i = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), d = o % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Zs = (l) => {
  const o = Un(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function yf() {
  const l = _r(), [o, i] = v.useState([]), [c, d] = v.useState([]), [m, p] = v.useState([]), [h, y] = v.useState(!0), E = v.useMemo(() => l.getDevices(), [l]), C = v.useCallback(async () => {
    const z = await l._getShort("get_timer_requests_short", 1, 100), H = await Promise.all(
      Zs(z).map(async (A) => {
        var X;
        const O = await l._getDetail(A.uuid, "get_timer_request");
        return ((X = Un(O)) == null ? void 0 : X.data) ?? Un(O);
      })
    );
    i(H.filter((A) => !!A && A.action_type === "create_timer"));
  }, [l]), g = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_requests_short", 1, 100), H = await Promise.all(
      Zs(z).map(async (A) => {
        var X;
        const O = await l._getDetail(A.uuid, "get_alarm_request");
        return ((X = Un(O)) == null ? void 0 : X.data) ?? Un(O);
      })
    );
    d(H.filter((A) => !!A && A.action_type !== "delete_alarm"));
  }, [l]), T = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_time_widgets_short", 1, 100), H = await Promise.all(
      Zs(z).map(async (A) => {
        var X;
        const O = await l._getDetail(A.uuid, "get_alarm_time_widget");
        return ((X = Un(O)) == null ? void 0 : X.data) ?? Un(O);
      })
    );
    p(H.filter(Boolean));
  }, [l]), M = v.useCallback(async () => {
    y(!0);
    try {
      await Promise.all([C(), g(), T()]);
    } finally {
      y(!1);
    }
  }, [g, T, C]);
  return v.useEffect(() => {
    M();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (z, H, A = 0.3, O = "once", X = []) => {
      await l._save({ name: `Будильник ${H}`, action_type: "create_alarm", device_id: z, status: "on", time: H, volume_start: A, repeat_type: O, repeat_days: X }, "save_alarm_request"), await g();
    },
    createTimer: async (z, H, A = 0.3) => {
      const O = {
        count_timer: Od(H),
        date_end: S_(H)
      };
      await l._save({ name: `Таймер ${Od(H)}`, action_type: "create_timer", device_id: z, timer_time: O, volume_start: A }, "save_timer_request"), await C();
    },
    deleteAlarm: async (z) => {
      await l._delete(z.uuid, "delete_alarm_request"), await g();
    },
    devices: E,
    loading: h,
    stopTimer: async (z) => {
      await l._delete(z.uuid, "delete_timer_request"), await C();
    },
    timers: o,
    toTimerSeconds: vf,
    updateAlarm: async (z, H) => {
      await l._update(z.uuid, "update_alarm_request", { ...z, action_type: "edit_alarm", ...H }), await g();
    }
  };
}
const C_ = "_page_1t9c7_1", N_ = "_header_1t9c7_11", x_ = "_title_1t9c7_18", T_ = "_description_1t9c7_25", R_ = "_grid_1t9c7_31", P_ = "_card_1t9c7_36", M_ = "_empty_1t9c7_36", L_ = "_cardHeader_1t9c7_43", I_ = "_cardTitle_1t9c7_50", $_ = "_meta_1t9c7_55", D_ = "_time_1t9c7_61", z_ = "_form_1t9c7_68", O_ = "_field_1t9c7_74", A_ = "_label_1t9c7_80", F_ = "_select_1t9c7_86", j_ = "_input_1t9c7_86", U_ = "_quickTabs_1t9c7_96", b_ = "_quickTab_1t9c7_96", B_ = "_activeQuickTab_1t9c7_112", W_ = "_row_1t9c7_117", H_ = "_cardLead_1t9c7_140", V_ = "_cardIcon_1t9c7_147", Q_ = "_cardButton_1t9c7_152", q_ = "_wheelPicker_1t9c7_164", Y_ = "_wheelColumn_1t9c7_174", K_ = "_wheelSelect_1t9c7_181", G_ = "_selectButton_1t9c7_193", X_ = "_timeInput_1t9c7_204", Z = {
  page: C_,
  header: N_,
  title: x_,
  description: T_,
  grid: R_,
  card: P_,
  empty: M_,
  cardHeader: L_,
  cardTitle: I_,
  meta: $_,
  time: D_,
  form: z_,
  field: O_,
  label: A_,
  select: F_,
  input: j_,
  quickTabs: U_,
  quickTab: b_,
  activeQuickTab: B_,
  row: W_,
  switch: "_switch_1t9c7_123",
  cardLead: H_,
  cardIcon: V_,
  cardButton: Q_,
  wheelPicker: q_,
  wheelColumn: Y_,
  wheelSelect: K_,
  selectButton: G_,
  timeInput: X_
}, J_ = [5, 10, 15, 30, 45, 60], Ad = (l) => {
  const o = Math.max(0, l), i = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), d = o % 60;
  return [i, c, d].map((m) => String(m).padStart(2, "0")).join(":");
}, Z_ = (l, o, i) => Math.max(1, l * 3600 + o * 60 + i), eE = (l) => ({
  hours: Math.floor(l / 3600),
  minutes: Math.floor(l % 3600 / 60),
  seconds: l % 60
}), tE = () => {
  const l = mt(), { createTimer: o, devices: i, loading: c, stopTimer: d, timers: m, toTimerSeconds: p } = yf(), [h, y] = v.useState(!1), [E, C] = v.useState(""), [g, T] = v.useState(0.3), [M, D] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [$, w] = v.useState({});
  v.useEffect(() => {
    w((A) => Object.fromEntries(m.map((O) => [O.uuid, A[O.uuid] ?? p(O.timer_time)])));
  }, [m, p]), v.useEffect(() => {
    const A = window.setInterval(() => {
      w((O) => Object.fromEntries(Object.entries(O).map(([X, re]) => [X, Math.max(0, re - 1)])));
    }, 1e3);
    return () => window.clearInterval(A);
  }, []);
  const P = v.useMemo(() => new Map(i.map((A) => [A.id, A.name])), [i]), L = Z_(M.hours, M.minutes, M.seconds), z = async () => {
    E && (await o(E, L, g), y(!1));
  }, H = (A) => D(eE(A * 60));
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Xt, { title: "Таймер" }), /* @__PURE__ */ s.createElement("div", { className: ee.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Таймер"), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, { startVisible: !0 }, /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: () => y(!0)
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: () => y(!0)
    },
    "🞢 Создать"
  ))), c && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement("div", { className: Z.grid }, m.length ? m.map((A) => {
    const O = p(A.timer_time);
    return /* @__PURE__ */ s.createElement("div", { className: Z.card, key: A.uuid }, /* @__PURE__ */ s.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ s.createElement("div", { className: Z.cardLead }, /* @__PURE__ */ s.createElement(pf, { className: Z.cardIcon, size: 26 }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("h2", { className: Z.cardTitle }, Ad($[A.uuid] ?? O)), /* @__PURE__ */ s.createElement("div", { className: Z.meta }, "Заведен на ", Ad(O), " • ", P.get(A.device_id) || A.device_id))), /* @__PURE__ */ s.createElement(ne, { variant: "ghost", onClick: () => d(A) }, /* @__PURE__ */ s.createElement(Dy, { size: 16 }))));
  }) : /* @__PURE__ */ s.createElement("div", { className: Z.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ s.createElement(Lt, { open: h, onClose: () => y(!1), title: "Создать таймер", footer: /* @__PURE__ */ s.createElement(ne, { onClick: z, disabled: !E }, "Создать") }, /* @__PURE__ */ s.createElement("div", { className: Z.form }, /* @__PURE__ */ s.createElement("div", { className: Z.wheelPicker, "aria-label": "Длительность таймера" }, ["hours", "minutes", "seconds"].map((A) => /* @__PURE__ */ s.createElement("label", { className: Z.wheelColumn, key: A }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, A === "hours" ? "чч" : A === "minutes" ? "мм" : "сс"), /* @__PURE__ */ s.createElement("select", { className: Z.wheelSelect, value: M[A], onChange: (O) => D((X) => ({ ...X, [A]: Number(O.target.value) })) }, Array.from({ length: A === "hours" ? 24 : 60 }, (O, X) => /* @__PURE__ */ s.createElement("option", { key: X, value: X }, String(X).padStart(2, "0"))))))), /* @__PURE__ */ s.createElement("div", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Быстрое создание"), /* @__PURE__ */ s.createElement("div", { className: Z.quickTabs }, J_.map((A) => /* @__PURE__ */ s.createElement("button", { key: A, type: "button", className: `${Z.quickTab} ${L === A * 60 ? Z.activeQuickTab : ""}`, onClick: () => H(A) }, A, " мин")))), /* @__PURE__ */ s.createElement("label", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Устройство воспроизведения"), /* @__PURE__ */ s.createElement("select", { className: Z.select, value: E, onChange: (A) => C(A.target.value) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Выберите устройство"), i.map((A) => /* @__PURE__ */ s.createElement("option", { key: A.id, value: A.id }, A.name)))), /* @__PURE__ */ s.createElement("label", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ s.createElement("input", { className: Z.input, type: "range", min: "0", max: "1", step: "0.05", value: g, onChange: (A) => T(Number(A.target.value)) }), /* @__PURE__ */ s.createElement("span", { className: Z.meta }, Math.round(g * 100), "%")))), /* @__PURE__ */ s.createElement(Zt, null)));
}, nE = "_content_19r5a_1", rE = "_title_19r5a_7", lE = "_actions_19r5a_14", ei = {
  content: nE,
  title: rE,
  actions: lE
}, aE = ({
  open: l,
  command: o,
  onClose: i,
  onToggleStatus: c,
  onEdit: d,
  onDelete: m
}) => {
  const p = mt();
  if (!o) return null;
  const h = (E) => {
    const C = E.status == "on" ? "off" : "on";
    c(E, C), i();
  }, y = /* @__PURE__ */ s.createElement("div", { className: ei.content }, /* @__PURE__ */ s.createElement("h3", { className: ei.title }, o.title), /* @__PURE__ */ s.createElement("div", { className: ei.actions }, /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      onClick: () => h(o)
    },
    o.status == "on" ? "Выключить" : "Включить"
  ), /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        d(o), i();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ s.createElement(
    ne,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o), i();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ s.createElement(s.Fragment, null, p ? /* @__PURE__ */ s.createElement(hi, { open: l, onClose: i }, y) : /* @__PURE__ */ s.createElement(
    Lt,
    {
      open: l,
      onClose: i,
      title: "Действия"
    },
    y
  ));
}, gf = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], oE = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Кастом" }
], Fd = (l = "once", o = []) => l === "daily" ? "ежедневно" : l === "weekdays" ? "по будням" : l === "weekends" ? "по выходным" : l === "custom" ? o.length ? o.map((i) => {
  var c;
  return ((c = gf.find((d) => d.key === i)) == null ? void 0 : c.label) || i;
}).join(", ") : "кастом" : "однократно", sE = () => {
  const l = mt(), { alarmTimeWidgets: o, alarms: i, createAlarm: c, deleteAlarm: d, devices: m, loading: p, updateAlarm: h } = yf(), [y, E] = v.useState(!1), [C, g] = v.useState(!1), [T, M] = v.useState(null), [D, $] = v.useState(null), [w, P] = v.useState(""), [L, z] = v.useState("08:00"), [H, A] = v.useState(0.3), [O, X] = v.useState("once"), [re, _e] = v.useState([]), Ee = v.useMemo(() => Array.from(new Set(o.flatMap((W) => W.time || []))).filter(Boolean), [o]), pe = v.useMemo(() => new Map(m.map((W) => [W.id, W.name])), [m]), Ce = i.find((W) => W.uuid === T) || null, ue = async () => {
    if (!w || !L) return;
    const W = i.find((de) => de.uuid === D);
    W ? await h(W, { device_id: w, time: L, volume_start: H, repeat_type: O, repeat_days: re }) : await c(w, L, H, O, re), $(null), E(!1);
  }, ie = (W) => {
    z(W.time), P(W.device_id), A(W.volume_start ?? 0.3), X(W.repeat_type ?? "once"), _e(W.repeat_days ?? []), $(W.uuid), M(null), E(!0);
  }, q = (W) => _e((de) => de.includes(W) ? de.filter((V) => V !== W) : [...de, W]);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Xt, { title: "Будильник" }), /* @__PURE__ */ s.createElement("div", { className: ee.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: ee.header }, /* @__PURE__ */ s.createElement("div", { className: ee.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: ee.title }, "Будильник"), /* @__PURE__ */ s.createElement("p", { className: ee.description }, "Создавайте будильники, настраивайте повторы, устройство и громкость.")), /* @__PURE__ */ s.createElement("div", { className: ee.actions }, l ? /* @__PURE__ */ s.createElement(Cn, { startVisible: !0 }, /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: () => E(!0)
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ s.createElement(
    ne,
    {
      variant: "primary",
      onClick: () => E(!0)
    },
    "🞢 Создать"
  ))), p && /* @__PURE__ */ s.createElement(en, null), /* @__PURE__ */ s.createElement("div", { className: Z.grid }, i.length ? i.map((W) => /* @__PURE__ */ s.createElement("button", { className: `${Z.card} ${Z.cardButton}`, key: W.uuid, type: "button", onClick: () => M(W.uuid) }, /* @__PURE__ */ s.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ s.createElement("div", { className: Z.cardLead }, /* @__PURE__ */ s.createElement(pf, { className: Z.cardIcon, size: 26 }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("h2", { className: Z.cardTitle }, W.time), /* @__PURE__ */ s.createElement("div", { className: Z.meta }, Fd(W.repeat_type, W.repeat_days), " • ", pe.get(W.device_id) || W.device_id))), /* @__PURE__ */ s.createElement(
    "div",
    {
      onClick: (de) => de.stopPropagation(),
      onMouseDown: (de) => de.stopPropagation()
    },
    /* @__PURE__ */ s.createElement(Kt, { label: "", checked: W.status !== "off", onClick: (de) => de.stopPropagation(), onChange: (de) => h(W, { status: de.currentTarget.checked ? "on" : "off" }) })
  )))) : /* @__PURE__ */ s.createElement("div", { className: Z.empty }, "Нет будильников.")), /* @__PURE__ */ s.createElement(Lt, { open: y, onClose: () => {
    E(!1), $(null);
  }, title: D ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ s.createElement(ne, { onClick: ue, disabled: !w || !L }, "Сохранить") }, /* @__PURE__ */ s.createElement("div", { className: Z.form }, /* @__PURE__ */ s.createElement("label", { className: Z.wheelColumn }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Круговая чч мм"), /* @__PURE__ */ s.createElement("input", { className: `${Z.input} ${Z.timeInput}`, type: "time", value: L, onChange: (W) => z(W.target.value) })), /* @__PURE__ */ s.createElement("div", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Ранее заводимые"), /* @__PURE__ */ s.createElement("div", { className: Z.quickTabs }, Ee.length ? Ee.map((W) => /* @__PURE__ */ s.createElement("button", { key: W, type: "button", className: `${Z.quickTab} ${L === W ? Z.activeQuickTab : ""}`, onClick: () => z(W) }, W)) : /* @__PURE__ */ s.createElement("span", { className: Z.meta }, "Нет быстрых значений."))), /* @__PURE__ */ s.createElement("label", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Повторы"), /* @__PURE__ */ s.createElement("button", { type: "button", className: Z.selectButton, onClick: () => g(!0) }, Fd(O, re))), /* @__PURE__ */ s.createElement("label", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Устройство воспроизведения"), /* @__PURE__ */ s.createElement("select", { className: Z, value: w, onChange: (W) => P(W.target.value) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Выберите устройство"), m.map((W) => /* @__PURE__ */ s.createElement("option", { key: W.id, value: W.id }, W.name)))), /* @__PURE__ */ s.createElement("label", { className: Z.field }, /* @__PURE__ */ s.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ s.createElement("input", { className: Z.input, type: "range", min: "0", max: "1", step: "0.05", value: H, onChange: (W) => A(Number(W.target.value)) }), /* @__PURE__ */ s.createElement("span", { className: Z.meta }, Math.round(H * 100), "%")))), /* @__PURE__ */ s.createElement(Lt, { open: C, onClose: () => g(!1), title: "Повторы", footer: /* @__PURE__ */ s.createElement(ne, { onClick: () => g(!1) }, "Готово") }, /* @__PURE__ */ s.createElement("div", { className: Z.form }, oE.map((W) => /* @__PURE__ */ s.createElement("button", { key: W.value, type: "button", className: `${Z.quickTab} ${O === W.value ? Z.activeQuickTab : ""}`, onClick: () => X(W.value) }, W.label)), O === "custom" && /* @__PURE__ */ s.createElement("div", { className: Z.quickTabs }, gf.map((W) => /* @__PURE__ */ s.createElement("button", { key: W.key, type: "button", className: `${Z.quickTab} ${re.includes(W.key) ? Z.activeQuickTab : ""}`, onClick: () => q(W.key) }, W.label))))), /* @__PURE__ */ s.createElement(
    aE,
    {
      open: !!Ce,
      onClose: () => M(null),
      command: Ce,
      onEdit: (W) => ie(W),
      onToggleStatus: (W, de) => h(W, { status: de }),
      onDelete: (W) => {
        d(W), M(null);
      }
    }
  ), /* @__PURE__ */ s.createElement(Zt, null)));
}, iE = () => /* @__PURE__ */ s.createElement(wh, null, /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/",
    element: /* @__PURE__ */ s.createElement(
      Ra,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/scripts",
    element: /* @__PURE__ */ s.createElement(kg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands",
    element: /* @__PURE__ */ s.createElement(
      Ra,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ s.createElement(Yg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ s.createElement(Gg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ s.createElement(
      Ra,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ s.createElement(Jg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ s.createElement(e_, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ s.createElement(l_, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/timer",
    element: /* @__PURE__ */ s.createElement(tE, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/alarm",
    element: /* @__PURE__ */ s.createElement(sE, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/settings",
    element: /* @__PURE__ */ s.createElement(k_, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "*",
    element: /* @__PURE__ */ s.createElement(
      Ra,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), _f = "dialog-custom-ui-theme", ti = (l) => l === "light" ? "light" : "dark", uE = (l) => {
  document.documentElement.dataset.theme = l, document.documentElement.style.colorScheme = l, localStorage.setItem(_f, l);
}, cE = () => {
  const l = _r(), [o, i] = v.useState(() => ti(localStorage.getItem(_f)));
  return v.useEffect(() => {
    uE(o);
  }, [o]), v.useEffect(() => {
    let c = !0;
    l._getShort("get_settings").then((m) => {
      var p;
      c && i(ti((p = (m == null ? void 0 : m.result) ?? m) == null ? void 0 : p.theme));
    }).catch(console.error);
    const d = (m) => {
      i(ti(m.detail));
    };
    return window.addEventListener("dialog-custom-ui-theme-change", d), () => {
      c = !1, window.removeEventListener("dialog-custom-ui-theme-change", d);
    };
  }, [l]), /* @__PURE__ */ s.createElement("div", { className: "appShell", "data-theme": o }, /* @__PURE__ */ s.createElement(iE, null));
};
class dE {
  constructor(o) {
    this.hass = o;
  }
  setHass(o) {
    this.hass = o;
  }
  async _getShort(o, i, c) {
    return await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      ...i ? { page: i } : {},
      ...c ? { page_size: c } : {}
    });
  }
  async _getAllShort(o, i = 100) {
    const c = await this._getShort(o, 1, i), d = (c == null ? void 0 : c.total_pages) ?? 1, m = Array.isArray(c == null ? void 0 : c.data) ? c.data : Array.isArray(c == null ? void 0 : c.script_actions) ? c.script_actions : [];
    return d <= 1 ? m : (await Promise.all(
      Array.from(
        { length: d - 1 },
        (h, y) => this._getShort(o, y + 2, i)
      )
    )).reduce((h, y) => {
      const E = Array.isArray(y == null ? void 0 : y.data) ? y.data : Array.isArray(y == null ? void 0 : y.script_actions) ? y.script_actions : [];
      return [...h, ...E];
    }, m);
  }
  async _getDetail(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: o
    });
  }
  async _save(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      data: o
    });
  }
  async _update(o, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: o,
      data: c
    });
  }
  async _update_status(o, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      uuid: i,
      status: c
    });
  }
  async searchAssistantCommands(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      query: o
    });
  }
  async _delete(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: o
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((o) => {
      const i = String(o.entity_id || "");
      return i.startsWith("media_player.") || i.startsWith("speaker.");
    }).map((o) => {
      var i;
      return {
        id: o.entity_id,
        name: ((i = o.attributes) == null ? void 0 : i.friendly_name) ?? o.entity_id
      };
    });
  }
  async getLocalMusicOptions() {
    const o = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, i = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = async (p) => {
      if (c.has(p)) return;
      c.add(p);
      const h = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: p
      }), y = Array.isArray(h == null ? void 0 : h.children) ? h.children : [];
      await Promise.all(y.map(async (E) => {
        const C = String((E == null ? void 0 : E.media_content_id) || ""), g = String((E == null ? void 0 : E.title) || C);
        if (C) {
          if (E != null && E.can_expand) {
            await m(C);
            return;
          }
          if (o.test(g) || o.test(C) || (E == null ? void 0 : E.media_content_type) === "music") {
            const T = "media-source://media_source/local/", M = C.startsWith(T) ? C.slice(T.length) : C;
            d.set(M, {
              value: M,
              label: g
            });
          }
        }
      }));
    };
    for (const p of i)
      try {
        await m(p);
      } catch (h) {
        console.warn("Failed to browse media source", p, h);
      }
    return Array.from(d.values()).sort(
      (p, h) => p.label.localeCompare(h.label)
    );
  }
  getScripts() {
    return Object.values(this.hass.states).filter((o) => o.entity_id.startsWith("script.")).map((o) => {
      var i;
      return {
        entity_id: o.entity_id,
        name: ((i = o.attributes) == null ? void 0 : i.friendly_name) ?? o.entity_id
      };
    });
  }
  async runScript(o) {
    return this.hass.connection.sendMessagePromise({
      type: "call_service",
      domain: "script",
      service: "turn_on",
      service_data: {
        entity_id: o
      }
    });
  }
}
const fE = 1, ba = 2, ni = 3, mE = 4, pE = 5;
function hE(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function vE() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function yE(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function jd(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function gE() {
  return {
    type: "ping"
  };
}
function _E(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const EE = (l, o, i, c) => {
  const [d, m, p] = l.split(".", 3);
  return Number(d) > o || Number(d) === o && Number(m) >= i || c !== void 0;
}, wE = "auth_invalid", kE = "auth_ok";
function SE(l) {
  if (!l.auth)
    throw mE;
  const o = l.auth;
  let i = o.expired ? o.refreshAccessToken().then(() => {
    i = void 0;
  }, () => {
    i = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function d(m, p, h) {
    const y = new WebSocket(c);
    let E = !1;
    const C = () => {
      if (y.removeEventListener("close", C), E) {
        h(ba);
        return;
      }
      if (m === 0) {
        h(fE);
        return;
      }
      const M = m === -1 ? -1 : m - 1;
      setTimeout(() => d(M, p, h), 1e3);
    }, g = async (M) => {
      try {
        o.expired && await (i || o.refreshAccessToken()), y.send(JSON.stringify(hE(o.accessToken)));
      } catch (D) {
        E = D === ba, y.close();
      }
    }, T = async (M) => {
      const D = JSON.parse(M.data);
      switch (D.type) {
        case wE:
          E = !0, y.close();
          break;
        case kE:
          y.removeEventListener("open", g), y.removeEventListener("message", T), y.removeEventListener("close", C), y.removeEventListener("error", C), y.haVersion = D.ha_version, EE(y.haVersion, 2022, 9) && y.send(JSON.stringify(vE())), p(y);
          break;
      }
    };
    y.addEventListener("open", g), y.addEventListener("message", T), y.addEventListener("close", C), y.addEventListener("error", C);
  }
  return new Promise((m, p) => d(l.setupRetry, m, p));
}
class CE {
  constructor(o, i) {
    this._handleMessage = (c) => {
      let d = JSON.parse(c.data);
      Array.isArray(d) || (d = [d]), d.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(jd(m.id)).catch((h) => {
            }));
            break;
          case "result":
            p && (m.success ? (p.resolve(m.result), "subscribe" in p || this.commands.delete(m.id)) : (p.reject(m.error), this.commands.delete(m.id)));
            break;
          case "pong":
            p ? (p.resolve(), this.commands.delete(m.id)) : console.warn(`Received unknown pong response ${m.id}`);
            break;
        }
      });
    }, this._handleClose = async () => {
      const c = this.commands;
      if (this.commandId = 1, this.oldSubscriptions = this.commands, this.commands = /* @__PURE__ */ new Map(), this.socket = void 0, c.forEach((p) => {
        "subscribe" in p || p.reject(_E(ni, "Connection lost"));
      }), this.closeRequested)
        return;
      this.fireEvent("disconnected");
      const d = Object.assign(Object.assign({}, this.options), { setupRetry: 0 }), m = (p) => {
        setTimeout(async () => {
          if (!this.closeRequested)
            try {
              const h = await d.createSocket(d);
              this._setSocket(h);
            } catch (h) {
              if (this._queuedMessages) {
                const y = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const E of y)
                  E.reject && E.reject(ni);
              }
              h === ba ? this.fireEvent("reconnect-error", h) : m(p + 1);
            }
        }, Math.min(p, 5) * 1e3);
      };
      this.suspendReconnectPromise && (await this.suspendReconnectPromise, this.suspendReconnectPromise = void 0, this._queuedMessages = []), m(0);
    }, this.options = i, this.commandId = 2, this.commands = /* @__PURE__ */ new Map(), this.eventListeners = /* @__PURE__ */ new Map(), this.closeRequested = !1, this._setSocket(o);
  }
  get connected() {
    return this.socket !== void 0 && this.socket.readyState == this.socket.OPEN;
  }
  _setSocket(o) {
    this.socket = o, this.haVersion = o.haVersion, o.addEventListener("message", this._handleMessage), o.addEventListener("close", this._handleClose);
    const i = this.oldSubscriptions;
    i && (this.oldSubscriptions = void 0, i.forEach((d) => {
      "subscribe" in d && d.subscribe && d.subscribe().then((m) => {
        d.unsubscribe = m, d.resolve();
      });
    }));
    const c = this._queuedMessages;
    if (c) {
      this._queuedMessages = void 0;
      for (const d of c)
        d.resolve();
    }
    this.fireEvent("ready");
  }
  addEventListener(o, i) {
    let c = this.eventListeners.get(o);
    c || (c = [], this.eventListeners.set(o, c)), c.push(i);
  }
  removeEventListener(o, i) {
    const c = this.eventListeners.get(o);
    if (!c)
      return;
    const d = c.indexOf(i);
    d !== -1 && c.splice(d, 1);
  }
  fireEvent(o, i) {
    (this.eventListeners.get(o) || []).forEach((c) => c(this, i));
  }
  suspendReconnectUntil(o) {
    this.suspendReconnectPromise = o;
  }
  suspend() {
    if (!this.suspendReconnectPromise)
      throw new Error("Suspend promise not set");
    this.socket && this.socket.close();
  }
  /**
   * Reconnect the websocket connection.
   * @param force discard old socket instead of gracefully closing it.
   */
  reconnect(o = !1) {
    if (this.socket) {
      if (!o) {
        this.socket.close();
        return;
      }
      this.socket.removeEventListener("message", this._handleMessage), this.socket.removeEventListener("close", this._handleClose), this.socket.close(), this._handleClose();
    }
  }
  close() {
    this.closeRequested = !0, this.socket && this.socket.close();
  }
  /**
   * Subscribe to a specific or all events.
   *
   * @param callback Callback  to be called when a new event fires
   * @param eventType
   * @returns promise that resolves to an unsubscribe function
   */
  async subscribeEvents(o, i) {
    return this.subscribeMessage(o, yE(i));
  }
  ping() {
    return this.sendMessagePromise(gE());
  }
  sendMessage(o, i) {
    if (!this.connected)
      throw ni;
    if (this._queuedMessages) {
      if (i)
        throw new Error("Cannot queue with commandId");
      this._queuedMessages.push({ resolve: () => this.sendMessage(o) });
      return;
    }
    i || (i = this._genCmdId()), o.id = i, this.socket.send(JSON.stringify(o));
  }
  sendMessagePromise(o) {
    return new Promise((i, c) => {
      if (this._queuedMessages) {
        this._queuedMessages.push({
          reject: c,
          resolve: async () => {
            try {
              i(await this.sendMessagePromise(o));
            } catch (m) {
              c(m);
            }
          }
        });
        return;
      }
      const d = this._genCmdId();
      this.commands.set(d, { resolve: i, reject: c }), this.sendMessage(o, d);
    });
  }
  /**
   * Call a websocket command that starts a subscription on the backend.
   *
   * @param message the message to start the subscription
   * @param callback the callback to be called when a new item arrives
   * @param [options.resubscribe] re-established a subscription after a reconnect. Defaults to true.
   * @returns promise that resolves to an unsubscribe function
   */
  async subscribeMessage(o, i, c) {
    if (this._queuedMessages && await new Promise((m, p) => {
      this._queuedMessages.push({ resolve: m, reject: p });
    }), c != null && c.preCheck && !await c.preCheck())
      throw new Error("Pre-check failed");
    let d;
    return await new Promise((m, p) => {
      const h = this._genCmdId();
      d = {
        resolve: m,
        reject: p,
        callback: o,
        subscribe: (c == null ? void 0 : c.resubscribe) !== !1 ? () => this.subscribeMessage(o, i, c) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(jd(h)), this.commands.delete(h);
        }
      }, this.commands.set(h, d);
      try {
        this.sendMessage(i, h);
      } catch {
      }
    }), () => d.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const NE = (l) => l * 1e3 + Date.now();
async function xE(l, o, i) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw pE;
  }
  const d = new FormData();
  o !== null && d.append("client_id", o), Object.keys(i).forEach((h) => {
    d.append(h, i[h]);
  });
  const m = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: d
  });
  if (!m.ok)
    throw m.status === 400 || m.status === 403 ? ba : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = NE(p.expires_in), p;
}
class TE {
  constructor(o, i) {
    this.data = o, this._saveTokens = i;
  }
  get wsUrl() {
    return `ws${this.data.hassUrl.substr(4)}/api/websocket`;
  }
  get accessToken() {
    return this.data.access_token;
  }
  get expired() {
    return Date.now() > this.data.expires;
  }
  /**
   * Refresh the access token.
   */
  async refreshAccessToken() {
    if (!this.data.refresh_token)
      throw new Error("No refresh_token");
    const o = await xE(this.data.hassUrl, this.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: this.data.refresh_token
    });
    o.refresh_token = this.data.refresh_token, this.data = o, this._saveTokens && this._saveTokens(o);
  }
  /**
   * Revoke the refresh & access tokens.
   */
  async revoke() {
    if (!this.data.refresh_token)
      throw new Error("No refresh_token to revoke");
    const o = new FormData();
    o.append("token", this.data.refresh_token), await fetch(`${this.data.hassUrl}/auth/revoke`, {
      method: "POST",
      credentials: "same-origin",
      body: o
    }), this._saveTokens && this._saveTokens(null);
  }
}
function RE(l, o) {
  return new TE({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function PE(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: SE }, l), i = await o.createSocket(o);
  return new CE(i, o);
}
function ME(l) {
  var o;
  return (o = l == null ? void 0 : l.connection) != null && o.sendMessagePromise ? l : typeof (l == null ? void 0 : l.callWS) == "function" ? {
    connection: {
      sendMessagePromise: (i) => l.callWS(i)
    },
    states: l.states ?? {}
  } : {
    connection: {
      sendMessagePromise: async () => {
        throw new Error("Home Assistant websocket API is not available");
      }
    },
    states: {}
  };
}
async function LE() {
  const i = RE(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await PE({
    auth: i
  }), d = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: d
  };
}
function IE({
  children: l,
  hass: o
}) {
  const i = v.useRef(null), [c, d] = v.useState(!1);
  return v.useEffect(() => {
    async function m() {
      const p = o ? ME(o) : await LE();
      i.current ? i.current.setHass(p) : i.current = new dE(p), d(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !i.current ? /* @__PURE__ */ s.createElement(en, { label: "Подключение к Home Assistant...", fullscreen: !0 }) : /* @__PURE__ */ s.createElement(cf.Provider, { value: i.current }, l);
}
function $E({ hass: l }) {
  return /* @__PURE__ */ s.createElement(Vh, null, /* @__PURE__ */ s.createElement(IE, { hass: l }, /* @__PURE__ */ s.createElement(cE, null)));
}
const Ud = "dialog-custom-ui-panel", bd = "dialog-custom-ui-style";
class DE extends HTMLElement {
  ensureShadowRoot() {
    return this.shadowRoot || this.attachShadow({ mode: "open" }), this.shadowRoot;
  }
  set hass(o) {
    this.hassValue = o, this.renderTimer === void 0 && (this.renderTimer = window.setTimeout(() => {
      this.renderTimer = void 0, this.render();
    }, 250));
  }
  get hass() {
    return this.hassValue;
  }
  connectedCallback() {
    this.ensureShadowRoot(), this.loadStyles(), this.render();
  }
  disconnectedCallback() {
    var o;
    this.renderTimer !== void 0 && (window.clearTimeout(this.renderTimer), this.renderTimer = void 0), (o = this.root) == null || o.unmount(), this.root = void 0;
  }
  async loadStyles() {
    const i = `/dialog_custom_ui_static/dialog-custom-ui-panel.css?v=${Date.now()}`, c = this.ensureShadowRoot();
    if (c.getElementById(bd))
      return;
    try {
      const m = await fetch(i, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = bd, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
      return;
    } catch (m) {
      console.warn(
        "[dialog_custom_ui] Failed to inject panel styles into shadow root, falling back to link element.",
        m
      );
    }
    let d = c.querySelector(
      'link[data-dialog-ui="true"]'
    );
    if (!d) {
      d = document.createElement("link"), d.rel = "stylesheet", d.href = i, d.setAttribute("data-dialog-ui", "true"), c.appendChild(d);
      return;
    }
    d.href = i;
  }
  render() {
    if (!this.isConnected) return;
    const o = this.ensureShadowRoot();
    this.root || (this.root = Sp.createRoot(o)), this.root.render(
      /* @__PURE__ */ s.createElement(s.StrictMode, null, /* @__PURE__ */ s.createElement($E, { hass: this.hassValue }))
    );
  }
}
customElements.get(Ud) || customElements.define(Ud, DE);
