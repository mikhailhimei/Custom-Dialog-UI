function Gc(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var mi = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc;
function _p() {
  if (Mc) return le;
  Mc = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), v = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.iterator;
  function I(m) {
    return m === null || typeof m != "object" ? null : (m = x && m[x] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, U = Object.assign, F = {};
  function T(m, N, H) {
    this.props = m, this.context = N, this.refs = F, this.updater = H || A;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(m, N) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, N, "setState");
  }, T.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function L() {
  }
  L.prototype = T.prototype;
  function $(m, N, H) {
    this.props = m, this.context = N, this.refs = F, this.updater = H || A;
  }
  var j = $.prototype = new L();
  j.constructor = $, U(j, T.prototype), j.isPureReactComponent = !0;
  var G = Array.isArray, te = Object.prototype.hasOwnProperty, re = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(m, N, H) {
    var ee, oe = {}, ue = null, ve = null;
    if (N != null) for (ee in N.ref !== void 0 && (ve = N.ref), N.key !== void 0 && (ue = "" + N.key), N) te.call(N, ee) && !ie.hasOwnProperty(ee) && (oe[ee] = N[ee]);
    var fe = arguments.length - 2;
    if (fe === 1) oe.children = H;
    else if (1 < fe) {
      for (var Ee = Array(fe), lt = 0; lt < fe; lt++) Ee[lt] = arguments[lt + 2];
      oe.children = Ee;
    }
    if (m && m.defaultProps) for (ee in fe = m.defaultProps, fe) oe[ee] === void 0 && (oe[ee] = fe[ee]);
    return { $$typeof: l, type: m, key: ue, ref: ve, props: oe, _owner: re.current };
  }
  function Se(m, N) {
    return { $$typeof: l, type: m.type, key: N, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Te(m) {
    return typeof m == "object" && m !== null && m.$$typeof === l;
  }
  function yt(m) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(H) {
      return N[H];
    });
  }
  var Xe = /\/+/g;
  function Fe(m, N) {
    return typeof m == "object" && m !== null && m.key != null ? yt("" + m.key) : N.toString(36);
  }
  function Le(m, N, H, ee, oe) {
    var ue = typeof m;
    (ue === "undefined" || ue === "boolean") && (m = null);
    var ve = !1;
    if (m === null) ve = !0;
    else switch (ue) {
      case "string":
      case "number":
        ve = !0;
        break;
      case "object":
        switch (m.$$typeof) {
          case l:
          case i:
            ve = !0;
        }
    }
    if (ve) return ve = m, oe = oe(ve), m = ee === "" ? "." + Fe(ve, 0) : ee, G(oe) ? (H = "", m != null && (H = m.replace(Xe, "$&/") + "/"), Le(oe, N, H, "", function(lt) {
      return lt;
    })) : oe != null && (Te(oe) && (oe = Se(oe, H + (!oe.key || ve && ve.key === oe.key ? "" : ("" + oe.key).replace(Xe, "$&/") + "/") + m)), N.push(oe)), 1;
    if (ve = 0, ee = ee === "" ? "." : ee + ":", G(m)) for (var fe = 0; fe < m.length; fe++) {
      ue = m[fe];
      var Ee = ee + Fe(ue, fe);
      ve += Le(ue, N, H, Ee, oe);
    }
    else if (Ee = I(m), typeof Ee == "function") for (m = Ee.call(m), fe = 0; !(ue = m.next()).done; ) ue = ue.value, Ee = ee + Fe(ue, fe++), ve += Le(ue, N, H, Ee, oe);
    else if (ue === "object") throw N = String(m), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return ve;
  }
  function Ce(m, N, H) {
    if (m == null) return m;
    var ee = [], oe = 0;
    return Le(m, ee, "", "", function(ue) {
      return N.call(H, ue, oe++);
    }), ee;
  }
  function Ae(m) {
    if (m._status === -1) {
      var N = m._result;
      N = N(), N.then(function(H) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = H);
      }, function(H) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = H);
      }), m._status === -1 && (m._status = 0, m._result = N);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var he = { current: null }, B = { transition: null }, X = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: B, ReactCurrentOwner: re };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return le.Children = { map: Ce, forEach: function(m, N, H) {
    Ce(m, function() {
      N.apply(this, arguments);
    }, H);
  }, count: function(m) {
    var N = 0;
    return Ce(m, function() {
      N++;
    }), N;
  }, toArray: function(m) {
    return Ce(m, function(N) {
      return N;
    }) || [];
  }, only: function(m) {
    if (!Te(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } }, le.Component = T, le.Fragment = s, le.Profiler = f, le.PureComponent = $, le.StrictMode = c, le.Suspense = w, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, le.act = V, le.cloneElement = function(m, N, H) {
    if (m == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var ee = U({}, m.props), oe = m.key, ue = m.ref, ve = m._owner;
    if (N != null) {
      if (N.ref !== void 0 && (ue = N.ref, ve = re.current), N.key !== void 0 && (oe = "" + N.key), m.type && m.type.defaultProps) var fe = m.type.defaultProps;
      for (Ee in N) te.call(N, Ee) && !ie.hasOwnProperty(Ee) && (ee[Ee] = N[Ee] === void 0 && fe !== void 0 ? fe[Ee] : N[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) ee.children = H;
    else if (1 < Ee) {
      fe = Array(Ee);
      for (var lt = 0; lt < Ee; lt++) fe[lt] = arguments[lt + 2];
      ee.children = fe;
    }
    return { $$typeof: l, type: m.type, key: oe, ref: ue, props: ee, _owner: ve };
  }, le.createContext = function(m) {
    return m = { $$typeof: v, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: p, _context: m }, m.Consumer = m;
  }, le.createElement = Pe, le.createFactory = function(m) {
    var N = Pe.bind(null, m);
    return N.type = m, N;
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(m) {
    return { $$typeof: _, render: m };
  }, le.isValidElement = Te, le.lazy = function(m) {
    return { $$typeof: P, _payload: { _status: -1, _result: m }, _init: Ae };
  }, le.memo = function(m, N) {
    return { $$typeof: C, type: m, compare: N === void 0 ? null : N };
  }, le.startTransition = function(m) {
    var N = B.transition;
    B.transition = {};
    try {
      m();
    } finally {
      B.transition = N;
    }
  }, le.unstable_act = V, le.useCallback = function(m, N) {
    return he.current.useCallback(m, N);
  }, le.useContext = function(m) {
    return he.current.useContext(m);
  }, le.useDebugValue = function() {
  }, le.useDeferredValue = function(m) {
    return he.current.useDeferredValue(m);
  }, le.useEffect = function(m, N) {
    return he.current.useEffect(m, N);
  }, le.useId = function() {
    return he.current.useId();
  }, le.useImperativeHandle = function(m, N, H) {
    return he.current.useImperativeHandle(m, N, H);
  }, le.useInsertionEffect = function(m, N) {
    return he.current.useInsertionEffect(m, N);
  }, le.useLayoutEffect = function(m, N) {
    return he.current.useLayoutEffect(m, N);
  }, le.useMemo = function(m, N) {
    return he.current.useMemo(m, N);
  }, le.useReducer = function(m, N, H) {
    return he.current.useReducer(m, N, H);
  }, le.useRef = function(m) {
    return he.current.useRef(m);
  }, le.useState = function(m) {
    return he.current.useState(m);
  }, le.useSyncExternalStore = function(m, N, H) {
    return he.current.useSyncExternalStore(m, N, H);
  }, le.useTransition = function() {
    return he.current.useTransition();
  }, le.version = "18.3.1", le;
}
var zc;
function Xc() {
  return zc || (zc = 1, mi.exports = _p()), mi.exports;
}
var E = Xc();
const d = /* @__PURE__ */ Gc(E);
var la = {}, hi = { exports: {} }, nt = {}, vi = { exports: {} }, yi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dc;
function Ep() {
  return Dc || (Dc = 1, (function(l) {
    function i(B, X) {
      var V = B.length;
      B.push(X);
      e: for (; 0 < V; ) {
        var m = V - 1 >>> 1, N = B[m];
        if (0 < f(N, X)) B[m] = X, B[V] = N, V = m;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function c(B) {
      if (B.length === 0) return null;
      var X = B[0], V = B.pop();
      if (V !== X) {
        B[0] = V;
        e: for (var m = 0, N = B.length, H = N >>> 1; m < H; ) {
          var ee = 2 * (m + 1) - 1, oe = B[ee], ue = ee + 1, ve = B[ue];
          if (0 > f(oe, V)) ue < N && 0 > f(ve, oe) ? (B[m] = ve, B[ue] = V, m = ue) : (B[m] = oe, B[ee] = V, m = ee);
          else if (ue < N && 0 > f(ve, V)) B[m] = ve, B[ue] = V, m = ue;
          else break e;
        }
      }
      return X;
    }
    function f(B, X) {
      var V = B.sortIndex - X.sortIndex;
      return V !== 0 ? V : B.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      l.unstable_now = function() {
        return p.now();
      };
    } else {
      var v = Date, _ = v.now();
      l.unstable_now = function() {
        return v.now() - _;
      };
    }
    var w = [], C = [], P = 1, x = null, I = 3, A = !1, U = !1, F = !1, T = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(B) {
      for (var X = s(C); X !== null; ) {
        if (X.callback === null) c(C);
        else if (X.startTime <= B) c(C), X.sortIndex = X.expirationTime, i(w, X);
        else break;
        X = s(C);
      }
    }
    function G(B) {
      if (F = !1, j(B), !U) if (s(w) !== null) U = !0, Ae(te);
      else {
        var X = s(C);
        X !== null && he(G, X.startTime - B);
      }
    }
    function te(B, X) {
      U = !1, F && (F = !1, L(Pe), Pe = -1), A = !0;
      var V = I;
      try {
        for (j(X), x = s(w); x !== null && (!(x.expirationTime > X) || B && !yt()); ) {
          var m = x.callback;
          if (typeof m == "function") {
            x.callback = null, I = x.priorityLevel;
            var N = m(x.expirationTime <= X);
            X = l.unstable_now(), typeof N == "function" ? x.callback = N : x === s(w) && c(w), j(X);
          } else c(w);
          x = s(w);
        }
        if (x !== null) var H = !0;
        else {
          var ee = s(C);
          ee !== null && he(G, ee.startTime - X), H = !1;
        }
        return H;
      } finally {
        x = null, I = V, A = !1;
      }
    }
    var re = !1, ie = null, Pe = -1, Se = 5, Te = -1;
    function yt() {
      return !(l.unstable_now() - Te < Se);
    }
    function Xe() {
      if (ie !== null) {
        var B = l.unstable_now();
        Te = B;
        var X = !0;
        try {
          X = ie(!0, B);
        } finally {
          X ? Fe() : (re = !1, ie = null);
        }
      } else re = !1;
    }
    var Fe;
    if (typeof $ == "function") Fe = function() {
      $(Xe);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), Ce = Le.port2;
      Le.port1.onmessage = Xe, Fe = function() {
        Ce.postMessage(null);
      };
    } else Fe = function() {
      T(Xe, 0);
    };
    function Ae(B) {
      ie = B, re || (re = !0, Fe());
    }
    function he(B, X) {
      Pe = T(function() {
        B(l.unstable_now());
      }, X);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      U || A || (U = !0, Ae(te));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Se = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(w);
    }, l.unstable_next = function(B) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = I;
      }
      var V = I;
      I = X;
      try {
        return B();
      } finally {
        I = V;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(B, X) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var V = I;
      I = B;
      try {
        return X();
      } finally {
        I = V;
      }
    }, l.unstable_scheduleCallback = function(B, X, V) {
      var m = l.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? m + V : m) : V = m, B) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = V + N, B = { id: P++, callback: X, priorityLevel: B, startTime: V, expirationTime: N, sortIndex: -1 }, V > m ? (B.sortIndex = V, i(C, B), s(w) === null && B === s(C) && (F ? (L(Pe), Pe = -1) : F = !0, he(G, V - m))) : (B.sortIndex = N, i(w, B), U || A || (U = !0, Ae(te))), B;
    }, l.unstable_shouldYield = yt, l.unstable_wrapCallback = function(B) {
      var X = I;
      return function() {
        var V = I;
        I = X;
        try {
          return B.apply(this, arguments);
        } finally {
          I = V;
        }
      };
    };
  })(yi)), yi;
}
var Ic;
function wp() {
  return Ic || (Ic = 1, vi.exports = Ep()), vi.exports;
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
var Oc;
function kp() {
  if (Oc) return nt;
  Oc = 1;
  var l = Xc(), i = wp();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), f = {};
  function p(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var _ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, x = {};
  function I(e) {
    return w.call(x, e) ? !0 : w.call(P, e) ? !1 : C.test(e) ? x[e] = !0 : (P[e] = !0, !1);
  }
  function A(e, t, n, r) {
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
  function U(e, t, n, r) {
    if (t === null || typeof t > "u" || A(e, t, n, r)) return !0;
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
  function F(e, t, n, r, a, o, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new F(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new F(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new F(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new F(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new F(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new F(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var L = /[\-:]([a-z])/g;
  function $(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      L,
      $
    );
    T[t] = new F(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(L, $);
    T[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(L, $);
    T[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, n, r) {
    var a = T.hasOwnProperty(t) ? T[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (U(t, n, a, r) && (n = null), r || a === null ? I(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), re = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), Te = Symbol.for("react.provider"), yt = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var V = Object.assign, m;
  function N(e) {
    if (m === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      m = t && t[1] || "";
    }
    return `
` + m + e;
  }
  var H = !1;
  function ee(e, t) {
    if (!e || H) return "";
    H = !0;
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
        } catch (R) {
          var r = R;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (R) {
          r = R;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (R) {
          r = R;
        }
        e();
      }
    } catch (R) {
      if (R && r && typeof R.stack == "string") {
        for (var a = R.stack.split(`
`), o = r.stack.split(`
`), u = a.length - 1, h = o.length - 1; 1 <= u && 0 <= h && a[u] !== o[h]; ) h--;
        for (; 1 <= u && 0 <= h; u--, h--) if (a[u] !== o[h]) {
          if (u !== 1 || h !== 1)
            do
              if (u--, h--, 0 > h || a[u] !== o[h]) {
                var y = `
` + a[u].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= u && 0 <= h);
          break;
        }
      }
    } finally {
      H = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function oe(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ee(e.type, !1), e;
      case 11:
        return e = ee(e.type.render, !1), e;
      case 1:
        return e = ee(e.type, !0), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ie:
        return "Fragment";
      case re:
        return "Portal";
      case Se:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case Le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case yt:
        return (e.displayName || "Context") + ".Consumer";
      case Te:
        return (e._context.displayName || "Context") + ".Provider";
      case Xe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ce:
        return t = e.displayName || null, t !== null ? t : ue(e.type) || "Memo";
      case Ae:
        t = e._payload, e = e._init;
        try {
          return ue(e(t));
        } catch {
        }
    }
    return null;
  }
  function ve(e) {
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
        return ue(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
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
  function fe(e) {
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
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function lt(e) {
    var t = Ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(u) {
        r = "" + u, o.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Yr(e) {
    e._valueTracker || (e._valueTracker = lt(e));
  }
  function Ai(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ee(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Gr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ea(e, t) {
    var n = t.checked;
    return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function $i(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = fe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ji(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function wa(e, t) {
    ji(e, t);
    var n = fe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ka(e, t.type, n) : t.hasOwnProperty("defaultValue") && ka(e, t.type, fe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ui(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ka(e, t, n) {
    (t !== "number" || Gr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var er = Array.isArray;
  function Tn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + fe(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Sa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Bi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (er(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function Hi(e, t) {
    var n = fe(t.value), r = fe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Wi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ca(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Xr, Qi = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Xr = Xr || document.createElement("div"), Xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function tr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var nr = {
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
  }, kd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(nr).forEach(function(e) {
    kd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
    });
  });
  function Ki(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
  }
  function qi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Ki(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Sd = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xa(e, t) {
    if (t) {
      if (Sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Na(e, t) {
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
  var Ta = null;
  function Ra(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Pa = null, Rn = null, Pn = null;
  function Yi(e) {
    if (e = Cr(e)) {
      if (typeof Pa != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = _l(t), Pa(e.stateNode, e.type, t));
    }
  }
  function Gi(e) {
    Rn ? Pn ? Pn.push(e) : Pn = [e] : Rn = e;
  }
  function Xi() {
    if (Rn) {
      var e = Rn, t = Pn;
      if (Pn = Rn = null, Yi(e), t) for (e = 0; e < t.length; e++) Yi(t[e]);
    }
  }
  function Ji(e, t) {
    return e(t);
  }
  function bi() {
  }
  var La = !1;
  function Zi(e, t, n) {
    if (La) return e(t, n);
    La = !0;
    try {
      return Ji(e, t, n);
    } finally {
      La = !1, (Rn !== null || Pn !== null) && (bi(), Xi());
    }
  }
  function rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = _l(n);
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
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Ma = !1;
  if (_) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      Ma = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    Ma = !1;
  }
  function Cd(e, t, n, r, a, o, u, h, y) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (z) {
      this.onError(z);
    }
  }
  var ar = !1, Jr = null, br = !1, za = null, xd = { onError: function(e) {
    ar = !0, Jr = e;
  } };
  function Nd(e, t, n, r, a, o, u, h, y) {
    ar = !1, Jr = null, Cd.apply(xd, arguments);
  }
  function Td(e, t, n, r, a, o, u, h, y) {
    if (Nd.apply(this, arguments), ar) {
      if (ar) {
        var R = Jr;
        ar = !1, Jr = null;
      } else throw Error(s(198));
      br || (br = !0, za = R);
    }
  }
  function un(e) {
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
  function es(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ts(e) {
    if (un(e) !== e) throw Error(s(188));
  }
  function Rd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = un(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (r = a.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === n) return ts(a), e;
          if (o === r) return ts(a), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = a, r = o;
      else {
        for (var u = !1, h = a.child; h; ) {
          if (h === n) {
            u = !0, n = a, r = o;
            break;
          }
          if (h === r) {
            u = !0, r = a, n = o;
            break;
          }
          h = h.sibling;
        }
        if (!u) {
          for (h = o.child; h; ) {
            if (h === n) {
              u = !0, n = o, r = a;
              break;
            }
            if (h === r) {
              u = !0, r = o, n = a;
              break;
            }
            h = h.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ns(e) {
    return e = Rd(e), e !== null ? rs(e) : null;
  }
  function rs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = rs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ls = i.unstable_scheduleCallback, as = i.unstable_cancelCallback, Pd = i.unstable_shouldYield, Ld = i.unstable_requestPaint, Me = i.unstable_now, Md = i.unstable_getCurrentPriorityLevel, Da = i.unstable_ImmediatePriority, os = i.unstable_UserBlockingPriority, Zr = i.unstable_NormalPriority, zd = i.unstable_LowPriority, is = i.unstable_IdlePriority, el = null, Nt = null;
  function Dd(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
      Nt.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var gt = Math.clz32 ? Math.clz32 : Fd, Id = Math.log, Od = Math.LN2;
  function Fd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Id(e) / Od | 0) | 0;
  }
  var tl = 64, nl = 4194304;
  function or(e) {
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
  function rl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var h = u & ~a;
      h !== 0 ? r = or(h) : (o &= u, o !== 0 && (r = or(o)));
    } else u = n & ~a, u !== 0 ? r = or(u) : o !== 0 && (r = or(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - gt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Ad(e, t) {
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
  function $d(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - gt(o), h = 1 << u, y = a[u];
      y === -1 ? ((h & n) === 0 || (h & r) !== 0) && (a[u] = Ad(h, t)) : y <= t && (e.expiredLanes |= h), o &= ~h;
    }
  }
  function Ia(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ss() {
    var e = tl;
    return tl <<= 1, (tl & 4194240) === 0 && (tl = 64), e;
  }
  function Oa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ir(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
  }
  function jd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - gt(n), o = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
    }
  }
  function Fa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var pe = 0;
  function us(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var cs, Aa, ds, fs, ps, $a = !1, ll = [], Wt = null, Vt = null, Qt = null, sr = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), Kt = [], Ud = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ms(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wt = null;
        break;
      case "dragenter":
      case "dragleave":
        Vt = null;
        break;
      case "mouseover":
      case "mouseout":
        Qt = null;
        break;
      case "pointerover":
      case "pointerout":
        sr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ur.delete(t.pointerId);
    }
  }
  function cr(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Cr(t), t !== null && Aa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Bd(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Wt = cr(Wt, e, t, n, r, a), !0;
      case "dragenter":
        return Vt = cr(Vt, e, t, n, r, a), !0;
      case "mouseover":
        return Qt = cr(Qt, e, t, n, r, a), !0;
      case "pointerover":
        var o = a.pointerId;
        return sr.set(o, cr(sr.get(o) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return o = a.pointerId, ur.set(o, cr(ur.get(o) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function hs(e) {
    var t = cn(e.target);
    if (t !== null) {
      var n = un(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = es(n), t !== null) {
            e.blockedOn = t, ps(e.priority, function() {
              ds(n);
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
  function al(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ua(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ta = r, n.target.dispatchEvent(r), Ta = null;
      } else return t = Cr(n), t !== null && Aa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function vs(e, t, n) {
    al(e) && n.delete(t);
  }
  function Hd() {
    $a = !1, Wt !== null && al(Wt) && (Wt = null), Vt !== null && al(Vt) && (Vt = null), Qt !== null && al(Qt) && (Qt = null), sr.forEach(vs), ur.forEach(vs);
  }
  function dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $a || ($a = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Hd)));
  }
  function fr(e) {
    function t(a) {
      return dr(a, e);
    }
    if (0 < ll.length) {
      dr(ll[0], e);
      for (var n = 1; n < ll.length; n++) {
        var r = ll[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Wt !== null && dr(Wt, e), Vt !== null && dr(Vt, e), Qt !== null && dr(Qt, e), sr.forEach(t), ur.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) hs(n), n.blockedOn === null && Kt.shift();
  }
  var Ln = G.ReactCurrentBatchConfig, ol = !0;
  function Wd(e, t, n, r) {
    var a = pe, o = Ln.transition;
    Ln.transition = null;
    try {
      pe = 1, ja(e, t, n, r);
    } finally {
      pe = a, Ln.transition = o;
    }
  }
  function Vd(e, t, n, r) {
    var a = pe, o = Ln.transition;
    Ln.transition = null;
    try {
      pe = 4, ja(e, t, n, r);
    } finally {
      pe = a, Ln.transition = o;
    }
  }
  function ja(e, t, n, r) {
    if (ol) {
      var a = Ua(e, t, n, r);
      if (a === null) ro(e, t, r, il, n), ms(e, r);
      else if (Bd(a, e, t, n, r)) r.stopPropagation();
      else if (ms(e, r), t & 4 && -1 < Ud.indexOf(e)) {
        for (; a !== null; ) {
          var o = Cr(a);
          if (o !== null && cs(o), o = Ua(e, t, n, r), o === null && ro(e, t, r, il, n), o === a) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else ro(e, t, r, null, n);
    }
  }
  var il = null;
  function Ua(e, t, n, r) {
    if (il = null, e = Ra(r), e = cn(e), e !== null) if (t = un(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = es(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return il = e, null;
  }
  function ys(e) {
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
        switch (Md()) {
          case Da:
            return 1;
          case os:
            return 4;
          case Zr:
          case zd:
            return 16;
          case is:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var qt = null, Ba = null, sl = null;
  function gs() {
    if (sl) return sl;
    var e, t = Ba, n = t.length, r, a = "value" in qt ? qt.value : qt.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === a[o - r]; r++) ;
    return sl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ul(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function cl() {
    return !0;
  }
  function _s() {
    return !1;
  }
  function at(e) {
    function t(n, r, a, o, u) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var h in e) e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(o) : o[h]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? cl : _s, this.isPropagationStopped = _s, this;
    }
    return V(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = cl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = cl);
    }, persist: function() {
    }, isPersistent: cl }), t;
  }
  var Mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ha = at(Mn), pr = V({}, Mn, { view: 0, detail: 0 }), Qd = at(pr), Wa, Va, mr, dl = V({}, pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ka, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (Wa = e.screenX - mr.screenX, Va = e.screenY - mr.screenY) : Va = Wa = 0, mr = e), Wa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Va;
  } }), Es = at(dl), Kd = V({}, dl, { dataTransfer: 0 }), qd = at(Kd), Yd = V({}, pr, { relatedTarget: 0 }), Qa = at(Yd), Gd = V({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = at(Gd), Jd = V({}, Mn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), bd = at(Jd), Zd = V({}, Mn, { data: 0 }), ws = at(Zd), ef = {
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
  }, tf = {
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
  }, nf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function rf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nf[e]) ? !!t[e] : !1;
  }
  function Ka() {
    return rf;
  }
  var lf = V({}, pr, { key: function(e) {
    if (e.key) {
      var t = ef[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ul(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ka, charCode: function(e) {
    return e.type === "keypress" ? ul(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), af = at(lf), of = V({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ks = at(of), sf = V({}, pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ka }), uf = at(sf), cf = V({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), df = at(cf), ff = V({}, dl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pf = at(ff), mf = [9, 13, 27, 32], qa = _ && "CompositionEvent" in window, hr = null;
  _ && "documentMode" in document && (hr = document.documentMode);
  var hf = _ && "TextEvent" in window && !hr, Ss = _ && (!qa || hr && 8 < hr && 11 >= hr), Cs = " ", xs = !1;
  function Ns(e, t) {
    switch (e) {
      case "keyup":
        return mf.indexOf(t.keyCode) !== -1;
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
  function Ts(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zn = !1;
  function vf(e, t) {
    switch (e) {
      case "compositionend":
        return Ts(t);
      case "keypress":
        return t.which !== 32 ? null : (xs = !0, Cs);
      case "textInput":
        return e = t.data, e === Cs && xs ? null : e;
      default:
        return null;
    }
  }
  function yf(e, t) {
    if (zn) return e === "compositionend" || !qa && Ns(e, t) ? (e = gs(), sl = Ba = qt = null, zn = !1, e) : null;
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
        return Ss && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gf[e.type] : t === "textarea";
  }
  function Ps(e, t, n, r) {
    Gi(r), t = vl(t, "onChange"), 0 < t.length && (n = new Ha("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var vr = null, yr = null;
  function _f(e) {
    qs(e, 0);
  }
  function fl(e) {
    var t = An(e);
    if (Ai(t)) return e;
  }
  function Ef(e, t) {
    if (e === "change") return t;
  }
  var Ls = !1;
  if (_) {
    var Ya;
    if (_) {
      var Ga = "oninput" in document;
      if (!Ga) {
        var Ms = document.createElement("div");
        Ms.setAttribute("oninput", "return;"), Ga = typeof Ms.oninput == "function";
      }
      Ya = Ga;
    } else Ya = !1;
    Ls = Ya && (!document.documentMode || 9 < document.documentMode);
  }
  function zs() {
    vr && (vr.detachEvent("onpropertychange", Ds), yr = vr = null);
  }
  function Ds(e) {
    if (e.propertyName === "value" && fl(yr)) {
      var t = [];
      Ps(t, yr, e, Ra(e)), Zi(_f, t);
    }
  }
  function wf(e, t, n) {
    e === "focusin" ? (zs(), vr = t, yr = n, vr.attachEvent("onpropertychange", Ds)) : e === "focusout" && zs();
  }
  function kf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(yr);
  }
  function Sf(e, t) {
    if (e === "click") return fl(t);
  }
  function Cf(e, t) {
    if (e === "input" || e === "change") return fl(t);
  }
  function xf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var _t = typeof Object.is == "function" ? Object.is : xf;
  function gr(e, t) {
    if (_t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!w.call(t, a) || !_t(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Is(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Os(e, t) {
    var n = Is(e);
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
      n = Is(n);
    }
  }
  function Fs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function As() {
    for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Gr(e.document);
    }
    return t;
  }
  function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Nf(e) {
    var t = As(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fs(n.ownerDocument.documentElement, n)) {
      if (r !== null && Xa(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, o = Math.min(r.start, a);
          r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = Os(n, o);
          var u = Os(
            n,
            r
          );
          a && u && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Tf = _ && "documentMode" in document && 11 >= document.documentMode, Dn = null, Ja = null, _r = null, ba = !1;
  function $s(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ba || Dn == null || Dn !== Gr(r) || (r = Dn, "selectionStart" in r && Xa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _r && gr(_r, r) || (_r = r, r = vl(Ja, "onSelect"), 0 < r.length && (t = new Ha("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dn)));
  }
  function pl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var In = { animationend: pl("Animation", "AnimationEnd"), animationiteration: pl("Animation", "AnimationIteration"), animationstart: pl("Animation", "AnimationStart"), transitionend: pl("Transition", "TransitionEnd") }, Za = {}, js = {};
  _ && (js = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
  function ml(e) {
    if (Za[e]) return Za[e];
    if (!In[e]) return e;
    var t = In[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in js) return Za[e] = t[n];
    return e;
  }
  var Us = ml("animationend"), Bs = ml("animationiteration"), Hs = ml("animationstart"), Ws = ml("transitionend"), Vs = /* @__PURE__ */ new Map(), Qs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yt(e, t) {
    Vs.set(e, t), p(t, [e]);
  }
  for (var eo = 0; eo < Qs.length; eo++) {
    var to = Qs[eo], Rf = to.toLowerCase(), Pf = to[0].toUpperCase() + to.slice(1);
    Yt(Rf, "on" + Pf);
  }
  Yt(Us, "onAnimationEnd"), Yt(Bs, "onAnimationIteration"), Yt(Hs, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt(Ws, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), p("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), p("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), p("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
  function Ks(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Td(r, t, void 0, e), e.currentTarget = null;
  }
  function qs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var h = r[u], y = h.instance, R = h.currentTarget;
          if (h = h.listener, y !== o && a.isPropagationStopped()) break e;
          Ks(a, h, R), o = y;
        }
        else for (u = 0; u < r.length; u++) {
          if (h = r[u], y = h.instance, R = h.currentTarget, h = h.listener, y !== o && a.isPropagationStopped()) break e;
          Ks(a, h, R), o = y;
        }
      }
    }
    if (br) throw e = za, br = !1, za = null, e;
  }
  function ge(e, t) {
    var n = t[uo];
    n === void 0 && (n = t[uo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ys(t, e, 2, !1), n.add(r));
  }
  function no(e, t, n) {
    var r = 0;
    t && (r |= 4), Ys(n, e, r, t);
  }
  var hl = "_reactListening" + Math.random().toString(36).slice(2);
  function wr(e) {
    if (!e[hl]) {
      e[hl] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Lf.has(n) || no(n, !1, e), no(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hl] || (t[hl] = !0, no("selectionchange", !1, t));
    }
  }
  function Ys(e, t, n, r) {
    switch (ys(t)) {
      case 1:
        var a = Wd;
        break;
      case 4:
        a = Vd;
        break;
      default:
        a = ja;
    }
    n = a.bind(null, t, n, e), a = void 0, !Ma || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function ro(e, t, n, r, a) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var h = r.stateNode.containerInfo;
        if (h === a || h.nodeType === 8 && h.parentNode === a) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var y = u.tag;
          if ((y === 3 || y === 4) && (y = u.stateNode.containerInfo, y === a || y.nodeType === 8 && y.parentNode === a)) return;
          u = u.return;
        }
        for (; h !== null; ) {
          if (u = cn(h), u === null) return;
          if (y = u.tag, y === 5 || y === 6) {
            r = o = u;
            continue e;
          }
          h = h.parentNode;
        }
      }
      r = r.return;
    }
    Zi(function() {
      var R = o, z = Ra(n), D = [];
      e: {
        var M = Vs.get(e);
        if (M !== void 0) {
          var W = Ha, K = e;
          switch (e) {
            case "keypress":
              if (ul(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = af;
              break;
            case "focusin":
              K = "focus", W = Qa;
              break;
            case "focusout":
              K = "blur", W = Qa;
              break;
            case "beforeblur":
            case "afterblur":
              W = Qa;
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
              W = Es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = qd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = uf;
              break;
            case Us:
            case Bs:
            case Hs:
              W = Xd;
              break;
            case Ws:
              W = df;
              break;
            case "scroll":
              W = Qd;
              break;
            case "wheel":
              W = pf;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = bd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = ks;
          }
          var q = (t & 4) !== 0, ze = !q && e === "scroll", k = q ? M !== null ? M + "Capture" : null : M;
          q = [];
          for (var g = R, S; g !== null; ) {
            S = g;
            var O = S.stateNode;
            if (S.tag === 5 && O !== null && (S = O, k !== null && (O = rr(g, k), O != null && q.push(kr(g, O, S)))), ze) break;
            g = g.return;
          }
          0 < q.length && (M = new W(M, K, null, n, z), D.push({ event: M, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", M && n !== Ta && (K = n.relatedTarget || n.fromElement) && (cn(K) || K[It])) break e;
          if ((W || M) && (M = z.window === z ? z : (M = z.ownerDocument) ? M.defaultView || M.parentWindow : window, W ? (K = n.relatedTarget || n.toElement, W = R, K = K ? cn(K) : null, K !== null && (ze = un(K), K !== ze || K.tag !== 5 && K.tag !== 6) && (K = null)) : (W = null, K = R), W !== K)) {
            if (q = Es, O = "onMouseLeave", k = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (q = ks, O = "onPointerLeave", k = "onPointerEnter", g = "pointer"), ze = W == null ? M : An(W), S = K == null ? M : An(K), M = new q(O, g + "leave", W, n, z), M.target = ze, M.relatedTarget = S, O = null, cn(z) === R && (q = new q(k, g + "enter", K, n, z), q.target = S, q.relatedTarget = ze, O = q), ze = O, W && K) t: {
              for (q = W, k = K, g = 0, S = q; S; S = On(S)) g++;
              for (S = 0, O = k; O; O = On(O)) S++;
              for (; 0 < g - S; ) q = On(q), g--;
              for (; 0 < S - g; ) k = On(k), S--;
              for (; g--; ) {
                if (q === k || k !== null && q === k.alternate) break t;
                q = On(q), k = On(k);
              }
              q = null;
            }
            else q = null;
            W !== null && Gs(D, M, W, q, !1), K !== null && ze !== null && Gs(D, ze, K, q, !0);
          }
        }
        e: {
          if (M = R ? An(R) : window, W = M.nodeName && M.nodeName.toLowerCase(), W === "select" || W === "input" && M.type === "file") var Y = Ef;
          else if (Rs(M)) if (Ls) Y = Cf;
          else {
            Y = kf;
            var J = wf;
          }
          else (W = M.nodeName) && W.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (Y = Sf);
          if (Y && (Y = Y(e, R))) {
            Ps(D, Y, n, z);
            break e;
          }
          J && J(e, M, R), e === "focusout" && (J = M._wrapperState) && J.controlled && M.type === "number" && ka(M, "number", M.value);
        }
        switch (J = R ? An(R) : window, e) {
          case "focusin":
            (Rs(J) || J.contentEditable === "true") && (Dn = J, Ja = R, _r = null);
            break;
          case "focusout":
            _r = Ja = Dn = null;
            break;
          case "mousedown":
            ba = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ba = !1, $s(D, n, z);
            break;
          case "selectionchange":
            if (Tf) break;
          case "keydown":
          case "keyup":
            $s(D, n, z);
        }
        var b;
        if (qa) e: {
          switch (e) {
            case "compositionstart":
              var ne = "onCompositionStart";
              break e;
            case "compositionend":
              ne = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ne = "onCompositionUpdate";
              break e;
          }
          ne = void 0;
        }
        else zn ? Ns(e, n) && (ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ne = "onCompositionStart");
        ne && (Ss && n.locale !== "ko" && (zn || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && zn && (b = gs()) : (qt = z, Ba = "value" in qt ? qt.value : qt.textContent, zn = !0)), J = vl(R, ne), 0 < J.length && (ne = new ws(ne, e, null, n, z), D.push({ event: ne, listeners: J }), b ? ne.data = b : (b = Ts(n), b !== null && (ne.data = b)))), (b = hf ? vf(e, n) : yf(e, n)) && (R = vl(R, "onBeforeInput"), 0 < R.length && (z = new ws("onBeforeInput", "beforeinput", null, n, z), D.push({ event: z, listeners: R }), z.data = b));
      }
      qs(D, t);
    });
  }
  function kr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function vl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, o = a.stateNode;
      a.tag === 5 && o !== null && (a = o, o = rr(e, n), o != null && r.unshift(kr(e, o, a)), o = rr(e, t), o != null && r.push(kr(e, o, a))), e = e.return;
    }
    return r;
  }
  function On(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Gs(e, t, n, r, a) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var h = n, y = h.alternate, R = h.stateNode;
      if (y !== null && y === r) break;
      h.tag === 5 && R !== null && (h = R, a ? (y = rr(n, o), y != null && u.unshift(kr(n, y, h))) : a || (y = rr(n, o), y != null && u.push(kr(n, y, h)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Mf = /\r\n?/g, zf = /\u0000|\uFFFD/g;
  function Xs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Mf, `
`).replace(zf, "");
  }
  function yl(e, t, n) {
    if (t = Xs(t), Xs(e) !== t && n) throw Error(s(425));
  }
  function gl() {
  }
  var lo = null, ao = null;
  function oo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var io = typeof setTimeout == "function" ? setTimeout : void 0, Df = typeof clearTimeout == "function" ? clearTimeout : void 0, Js = typeof Promise == "function" ? Promise : void 0, If = typeof queueMicrotask == "function" ? queueMicrotask : typeof Js < "u" ? function(e) {
    return Js.resolve(null).then(e).catch(Of);
  } : io;
  function Of(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function so(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), fr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    fr(t);
  }
  function Gt(e) {
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
  function bs(e) {
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
  var Fn = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + Fn, Sr = "__reactProps$" + Fn, It = "__reactContainer$" + Fn, uo = "__reactEvents$" + Fn, Ff = "__reactListeners$" + Fn, Af = "__reactHandles$" + Fn;
  function cn(e) {
    var t = e[Tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[It] || n[Tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = bs(e); e !== null; ) {
          if (n = e[Tt]) return n;
          e = bs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Cr(e) {
    return e = e[Tt] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function An(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function _l(e) {
    return e[Sr] || null;
  }
  var co = [], $n = -1;
  function Xt(e) {
    return { current: e };
  }
  function _e(e) {
    0 > $n || (e.current = co[$n], co[$n] = null, $n--);
  }
  function ye(e, t) {
    $n++, co[$n] = e.current, e.current = t;
  }
  var Jt = {}, We = Xt(Jt), Je = Xt(!1), dn = Jt;
  function jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, o;
    for (o in n) a[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function be(e) {
    return e = e.childContextTypes, e != null;
  }
  function El() {
    _e(Je), _e(We);
  }
  function Zs(e, t, n) {
    if (We.current !== Jt) throw Error(s(168));
    ye(We, t), ye(Je, n);
  }
  function eu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, ve(e) || "Unknown", a));
    return V({}, n, r);
  }
  function wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, dn = We.current, ye(We, e), ye(Je, Je.current), !0;
  }
  function tu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = eu(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, _e(Je), _e(We), ye(We, e)) : _e(Je), ye(Je, n);
  }
  var Ot = null, kl = !1, fo = !1;
  function nu(e) {
    Ot === null ? Ot = [e] : Ot.push(e);
  }
  function $f(e) {
    kl = !0, nu(e);
  }
  function bt() {
    if (!fo && Ot !== null) {
      fo = !0;
      var e = 0, t = pe;
      try {
        var n = Ot;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ot = null, kl = !1;
      } catch (a) {
        throw Ot !== null && (Ot = Ot.slice(e + 1)), ls(Da, bt), a;
      } finally {
        pe = t, fo = !1;
      }
    }
    return null;
  }
  var Un = [], Bn = 0, Sl = null, Cl = 0, ct = [], dt = 0, fn = null, Ft = 1, At = "";
  function pn(e, t) {
    Un[Bn++] = Cl, Un[Bn++] = Sl, Sl = e, Cl = t;
  }
  function ru(e, t, n) {
    ct[dt++] = Ft, ct[dt++] = At, ct[dt++] = fn, fn = e;
    var r = Ft;
    e = At;
    var a = 32 - gt(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - gt(t) + a;
    if (30 < o) {
      var u = a - a % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, a -= u, Ft = 1 << 32 - gt(t) + a | n << a | r, At = o + e;
    } else Ft = 1 << o | n << a | r, At = e;
  }
  function po(e) {
    e.return !== null && (pn(e, 1), ru(e, 1, 0));
  }
  function mo(e) {
    for (; e === Sl; ) Sl = Un[--Bn], Un[Bn] = null, Cl = Un[--Bn], Un[Bn] = null;
    for (; e === fn; ) fn = ct[--dt], ct[dt] = null, At = ct[--dt], ct[dt] = null, Ft = ct[--dt], ct[dt] = null;
  }
  var ot = null, it = null, we = !1, Et = null;
  function lu(e, t) {
    var n = ht(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function au(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ot = e, it = Gt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ot = e, it = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: Ft, overflow: At } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ot = e, it = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ho(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vo(e) {
    if (we) {
      var t = it;
      if (t) {
        var n = t;
        if (!au(e, t)) {
          if (ho(e)) throw Error(s(418));
          t = Gt(n.nextSibling);
          var r = ot;
          t && au(e, t) ? lu(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, ot = e);
        }
      } else {
        if (ho(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, we = !1, ot = e;
      }
    }
  }
  function ou(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function xl(e) {
    if (e !== ot) return !1;
    if (!we) return ou(e), we = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !oo(e.type, e.memoizedProps)), t && (t = it)) {
      if (ho(e)) throw iu(), Error(s(418));
      for (; t; ) lu(e, t), t = Gt(t.nextSibling);
    }
    if (ou(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                it = Gt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = ot ? Gt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function iu() {
    for (var e = it; e; ) e = Gt(e.nextSibling);
  }
  function Hn() {
    it = ot = null, we = !1;
  }
  function yo(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var jf = G.ReactCurrentBatchConfig;
  function xr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
          var h = a.refs;
          u === null ? delete h[o] : h[o] = u;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Nl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function su(e) {
    var t = e._init;
    return t(e._payload);
  }
  function uu(e) {
    function t(k, g) {
      if (e) {
        var S = k.deletions;
        S === null ? (k.deletions = [g], k.flags |= 16) : S.push(g);
      }
    }
    function n(k, g) {
      if (!e) return null;
      for (; g !== null; ) t(k, g), g = g.sibling;
      return null;
    }
    function r(k, g) {
      for (k = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? k.set(g.key, g) : k.set(g.index, g), g = g.sibling;
      return k;
    }
    function a(k, g) {
      return k = on(k, g), k.index = 0, k.sibling = null, k;
    }
    function o(k, g, S) {
      return k.index = S, e ? (S = k.alternate, S !== null ? (S = S.index, S < g ? (k.flags |= 2, g) : S) : (k.flags |= 2, g)) : (k.flags |= 1048576, g);
    }
    function u(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function h(k, g, S, O) {
      return g === null || g.tag !== 6 ? (g = si(S, k.mode, O), g.return = k, g) : (g = a(g, S), g.return = k, g);
    }
    function y(k, g, S, O) {
      var Y = S.type;
      return Y === ie ? z(k, g, S.props.children, O, S.key) : g !== null && (g.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Ae && su(Y) === g.type) ? (O = a(g, S.props), O.ref = xr(k, g, S), O.return = k, O) : (O = Xl(S.type, S.key, S.props, null, k.mode, O), O.ref = xr(k, g, S), O.return = k, O);
    }
    function R(k, g, S, O) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = ui(S, k.mode, O), g.return = k, g) : (g = a(g, S.children || []), g.return = k, g);
    }
    function z(k, g, S, O, Y) {
      return g === null || g.tag !== 7 ? (g = wn(S, k.mode, O, Y), g.return = k, g) : (g = a(g, S), g.return = k, g);
    }
    function D(k, g, S) {
      if (typeof g == "string" && g !== "" || typeof g == "number") return g = si("" + g, k.mode, S), g.return = k, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case te:
            return S = Xl(g.type, g.key, g.props, null, k.mode, S), S.ref = xr(k, null, g), S.return = k, S;
          case re:
            return g = ui(g, k.mode, S), g.return = k, g;
          case Ae:
            var O = g._init;
            return D(k, O(g._payload), S);
        }
        if (er(g) || X(g)) return g = wn(g, k.mode, S, null), g.return = k, g;
        Nl(k, g);
      }
      return null;
    }
    function M(k, g, S, O) {
      var Y = g !== null ? g.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number") return Y !== null ? null : h(k, g, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case te:
            return S.key === Y ? y(k, g, S, O) : null;
          case re:
            return S.key === Y ? R(k, g, S, O) : null;
          case Ae:
            return Y = S._init, M(
              k,
              g,
              Y(S._payload),
              O
            );
        }
        if (er(S) || X(S)) return Y !== null ? null : z(k, g, S, O, null);
        Nl(k, S);
      }
      return null;
    }
    function W(k, g, S, O, Y) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return k = k.get(S) || null, h(g, k, "" + O, Y);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case te:
            return k = k.get(O.key === null ? S : O.key) || null, y(g, k, O, Y);
          case re:
            return k = k.get(O.key === null ? S : O.key) || null, R(g, k, O, Y);
          case Ae:
            var J = O._init;
            return W(k, g, S, J(O._payload), Y);
        }
        if (er(O) || X(O)) return k = k.get(S) || null, z(g, k, O, Y, null);
        Nl(g, O);
      }
      return null;
    }
    function K(k, g, S, O) {
      for (var Y = null, J = null, b = g, ne = g = 0, Ue = null; b !== null && ne < S.length; ne++) {
        b.index > ne ? (Ue = b, b = null) : Ue = b.sibling;
        var ce = M(k, b, S[ne], O);
        if (ce === null) {
          b === null && (b = Ue);
          break;
        }
        e && b && ce.alternate === null && t(k, b), g = o(ce, g, ne), J === null ? Y = ce : J.sibling = ce, J = ce, b = Ue;
      }
      if (ne === S.length) return n(k, b), we && pn(k, ne), Y;
      if (b === null) {
        for (; ne < S.length; ne++) b = D(k, S[ne], O), b !== null && (g = o(b, g, ne), J === null ? Y = b : J.sibling = b, J = b);
        return we && pn(k, ne), Y;
      }
      for (b = r(k, b); ne < S.length; ne++) Ue = W(b, k, ne, S[ne], O), Ue !== null && (e && Ue.alternate !== null && b.delete(Ue.key === null ? ne : Ue.key), g = o(Ue, g, ne), J === null ? Y = Ue : J.sibling = Ue, J = Ue);
      return e && b.forEach(function(sn) {
        return t(k, sn);
      }), we && pn(k, ne), Y;
    }
    function q(k, g, S, O) {
      var Y = X(S);
      if (typeof Y != "function") throw Error(s(150));
      if (S = Y.call(S), S == null) throw Error(s(151));
      for (var J = Y = null, b = g, ne = g = 0, Ue = null, ce = S.next(); b !== null && !ce.done; ne++, ce = S.next()) {
        b.index > ne ? (Ue = b, b = null) : Ue = b.sibling;
        var sn = M(k, b, ce.value, O);
        if (sn === null) {
          b === null && (b = Ue);
          break;
        }
        e && b && sn.alternate === null && t(k, b), g = o(sn, g, ne), J === null ? Y = sn : J.sibling = sn, J = sn, b = Ue;
      }
      if (ce.done) return n(
        k,
        b
      ), we && pn(k, ne), Y;
      if (b === null) {
        for (; !ce.done; ne++, ce = S.next()) ce = D(k, ce.value, O), ce !== null && (g = o(ce, g, ne), J === null ? Y = ce : J.sibling = ce, J = ce);
        return we && pn(k, ne), Y;
      }
      for (b = r(k, b); !ce.done; ne++, ce = S.next()) ce = W(b, k, ne, ce.value, O), ce !== null && (e && ce.alternate !== null && b.delete(ce.key === null ? ne : ce.key), g = o(ce, g, ne), J === null ? Y = ce : J.sibling = ce, J = ce);
      return e && b.forEach(function(gp) {
        return t(k, gp);
      }), we && pn(k, ne), Y;
    }
    function ze(k, g, S, O) {
      if (typeof S == "object" && S !== null && S.type === ie && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case te:
            e: {
              for (var Y = S.key, J = g; J !== null; ) {
                if (J.key === Y) {
                  if (Y = S.type, Y === ie) {
                    if (J.tag === 7) {
                      n(k, J.sibling), g = a(J, S.props.children), g.return = k, k = g;
                      break e;
                    }
                  } else if (J.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Ae && su(Y) === J.type) {
                    n(k, J.sibling), g = a(J, S.props), g.ref = xr(k, J, S), g.return = k, k = g;
                    break e;
                  }
                  n(k, J);
                  break;
                } else t(k, J);
                J = J.sibling;
              }
              S.type === ie ? (g = wn(S.props.children, k.mode, O, S.key), g.return = k, k = g) : (O = Xl(S.type, S.key, S.props, null, k.mode, O), O.ref = xr(k, g, S), O.return = k, k = O);
            }
            return u(k);
          case re:
            e: {
              for (J = S.key; g !== null; ) {
                if (g.key === J) if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
                  n(k, g.sibling), g = a(g, S.children || []), g.return = k, k = g;
                  break e;
                } else {
                  n(k, g);
                  break;
                }
                else t(k, g);
                g = g.sibling;
              }
              g = ui(S, k.mode, O), g.return = k, k = g;
            }
            return u(k);
          case Ae:
            return J = S._init, ze(k, g, J(S._payload), O);
        }
        if (er(S)) return K(k, g, S, O);
        if (X(S)) return q(k, g, S, O);
        Nl(k, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, g !== null && g.tag === 6 ? (n(k, g.sibling), g = a(g, S), g.return = k, k = g) : (n(k, g), g = si(S, k.mode, O), g.return = k, k = g), u(k)) : n(k, g);
    }
    return ze;
  }
  var Wn = uu(!0), cu = uu(!1), Tl = Xt(null), Rl = null, Vn = null, go = null;
  function _o() {
    go = Vn = Rl = null;
  }
  function Eo(e) {
    var t = Tl.current;
    _e(Tl), e._currentValue = t;
  }
  function wo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Qn(e, t) {
    Rl = e, go = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ze = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (go !== e) if (e = { context: e, memoizedValue: t, next: null }, Vn === null) {
      if (Rl === null) throw Error(s(308));
      Vn = e, Rl.dependencies = { lanes: 0, firstContext: e };
    } else Vn = Vn.next = e;
    return t;
  }
  var mn = null;
  function ko(e) {
    mn === null ? mn = [e] : mn.push(e);
  }
  function du(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, ko(t)) : (n.next = a.next, a.next = n), t.interleaved = n, $t(e, r);
  }
  function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zt = !1;
  function So(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function fu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function jt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function en(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (se & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, $t(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, ko(r)) : (t.next = a.next, a.next = t), r.interleaved = t, $t(e, n);
  }
  function Pl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fa(e, n);
    }
  }
  function pu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? a = o = u : o = o.next = u, n = n.next;
        } while (n !== null);
        o === null ? a = o = t : o = o.next = t;
      } else a = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ll(e, t, n, r) {
    var a = e.updateQueue;
    Zt = !1;
    var o = a.firstBaseUpdate, u = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var y = h, R = y.next;
      y.next = null, u === null ? o = R : u.next = R, u = y;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== u && (h === null ? z.firstBaseUpdate = R : h.next = R, z.lastBaseUpdate = y));
    }
    if (o !== null) {
      var D = a.baseState;
      u = 0, z = R = y = null, h = o;
      do {
        var M = h.lane, W = h.eventTime;
        if ((r & M) === M) {
          z !== null && (z = z.next = {
            eventTime: W,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          e: {
            var K = e, q = h;
            switch (M = t, W = n, q.tag) {
              case 1:
                if (K = q.payload, typeof K == "function") {
                  D = K.call(W, D, M);
                  break e;
                }
                D = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = q.payload, M = typeof K == "function" ? K.call(W, D, M) : K, M == null) break e;
                D = V({}, D, M);
                break e;
              case 2:
                Zt = !0;
            }
          }
          h.callback !== null && h.lane !== 0 && (e.flags |= 64, M = a.effects, M === null ? a.effects = [h] : M.push(h));
        } else W = { eventTime: W, lane: M, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, z === null ? (R = z = W, y = D) : z = z.next = W, u |= M;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null) break;
          M = h, h = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      if (z === null && (y = D), a.baseState = y, a.firstBaseUpdate = R, a.lastBaseUpdate = z, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          u |= a.lane, a = a.next;
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      yn |= u, e.lanes = u, e.memoizedState = D;
    }
  }
  function mu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var Nr = {}, Rt = Xt(Nr), Tr = Xt(Nr), Rr = Xt(Nr);
  function hn(e) {
    if (e === Nr) throw Error(s(174));
    return e;
  }
  function Co(e, t) {
    switch (ye(Rr, t), ye(Tr, e), ye(Rt, Nr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ca(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ca(t, e);
    }
    _e(Rt), ye(Rt, t);
  }
  function Kn() {
    _e(Rt), _e(Tr), _e(Rr);
  }
  function hu(e) {
    hn(Rr.current);
    var t = hn(Rt.current), n = Ca(t, e.type);
    t !== n && (ye(Tr, e), ye(Rt, n));
  }
  function xo(e) {
    Tr.current === e && (_e(Rt), _e(Tr));
  }
  var xe = Xt(0);
  function Ml(e) {
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
  var No = [];
  function To() {
    for (var e = 0; e < No.length; e++) No[e]._workInProgressVersionPrimary = null;
    No.length = 0;
  }
  var zl = G.ReactCurrentDispatcher, Ro = G.ReactCurrentBatchConfig, vn = 0, Ne = null, Ie = null, $e = null, Dl = !1, Pr = !1, Lr = 0, Uf = 0;
  function Ve() {
    throw Error(s(321));
  }
  function Po(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function Lo(e, t, n, r, a, o) {
    if (vn = o, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zl.current = e === null || e.memoizedState === null ? Vf : Qf, e = n(r, a), Pr) {
      o = 0;
      do {
        if (Pr = !1, Lr = 0, 25 <= o) throw Error(s(301));
        o += 1, $e = Ie = null, t.updateQueue = null, zl.current = Kf, e = n(r, a);
      } while (Pr);
    }
    if (zl.current = Fl, t = Ie !== null && Ie.next !== null, vn = 0, $e = Ie = Ne = null, Dl = !1, t) throw Error(s(300));
    return e;
  }
  function Mo() {
    var e = Lr !== 0;
    return Lr = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return $e === null ? Ne.memoizedState = $e = e : $e = $e.next = e, $e;
  }
  function pt() {
    if (Ie === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = $e === null ? Ne.memoizedState : $e.next;
    if (t !== null) $e = t, Ie = e;
    else {
      if (e === null) throw Error(s(310));
      Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, $e === null ? Ne.memoizedState = $e = e : $e = $e.next = e;
    }
    return $e;
  }
  function Mr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zo(e) {
    var t = pt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ie, a = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (a !== null) {
        var u = a.next;
        a.next = o.next, o.next = u;
      }
      r.baseQueue = a = o, n.pending = null;
    }
    if (a !== null) {
      o = a.next, r = r.baseState;
      var h = u = null, y = null, R = o;
      do {
        var z = R.lane;
        if ((vn & z) === z) y !== null && (y = y.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), r = R.hasEagerState ? R.eagerState : e(r, R.action);
        else {
          var D = {
            lane: z,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          y === null ? (h = y = D, u = r) : y = y.next = D, Ne.lanes |= z, yn |= z;
        }
        R = R.next;
      } while (R !== null && R !== o);
      y === null ? u = r : y.next = h, _t(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        o = a.lane, Ne.lanes |= o, yn |= o, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Do(e) {
    var t = pt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== a);
      _t(o, t.memoizedState) || (Ze = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function vu() {
  }
  function yu(e, t) {
    var n = Ne, r = pt(), a = t(), o = !_t(r.memoizedState, a);
    if (o && (r.memoizedState = a, Ze = !0), r = r.queue, Io(Eu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || $e !== null && $e.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, _u.bind(null, n, r, a, t), void 0, null), je === null) throw Error(s(349));
      (vn & 30) !== 0 || gu(n, t, a);
    }
    return a;
  }
  function gu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function _u(e, t, n, r) {
    t.value = n, t.getSnapshot = r, wu(t) && ku(e);
  }
  function Eu(e, t, n) {
    return n(function() {
      wu(t) && ku(e);
    });
  }
  function wu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function ku(e) {
    var t = $t(e, 1);
    t !== null && Ct(t, e, 1, -1);
  }
  function Su(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wf.bind(null, Ne, e), [t.memoizedState, e];
  }
  function zr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Cu() {
    return pt().memoizedState;
  }
  function Il(e, t, n, r) {
    var a = Pt();
    Ne.flags |= e, a.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ol(e, t, n, r) {
    var a = pt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ie !== null) {
      var u = Ie.memoizedState;
      if (o = u.destroy, r !== null && Po(r, u.deps)) {
        a.memoizedState = zr(t, n, o, r);
        return;
      }
    }
    Ne.flags |= e, a.memoizedState = zr(1 | t, n, o, r);
  }
  function xu(e, t) {
    return Il(8390656, 8, e, t);
  }
  function Io(e, t) {
    return Ol(2048, 8, e, t);
  }
  function Nu(e, t) {
    return Ol(4, 2, e, t);
  }
  function Tu(e, t) {
    return Ol(4, 4, e, t);
  }
  function Ru(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Pu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ol(4, 4, Ru.bind(null, t, e), n);
  }
  function Oo() {
  }
  function Lu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Po(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Mu(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Po(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zu(e, t, n) {
    return (vn & 21) === 0 ? (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n) : (_t(n, t) || (n = ss(), Ne.lanes |= n, yn |= n, e.baseState = !0), t);
  }
  function Bf(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ro.transition;
    Ro.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, Ro.transition = r;
    }
  }
  function Du() {
    return pt().memoizedState;
  }
  function Hf(e, t, n) {
    var r = ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Iu(e)) Ou(t, n);
    else if (n = du(e, t, n, r), n !== null) {
      var a = Ge();
      Ct(n, e, r, a), Fu(n, t, r);
    }
  }
  function Wf(e, t, n) {
    var r = ln(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Iu(e)) Ou(t, a);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var u = t.lastRenderedState, h = o(u, n);
        if (a.hasEagerState = !0, a.eagerState = h, _t(h, u)) {
          var y = t.interleaved;
          y === null ? (a.next = a, ko(t)) : (a.next = y.next, y.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = du(e, t, a, r), n !== null && (a = Ge(), Ct(n, e, r, a), Fu(n, t, r));
    }
  }
  function Iu(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function Ou(e, t) {
    Pr = Dl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Fu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Fa(e, n);
    }
  }
  var Fl = { readContext: ft, useCallback: Ve, useContext: Ve, useEffect: Ve, useImperativeHandle: Ve, useInsertionEffect: Ve, useLayoutEffect: Ve, useMemo: Ve, useReducer: Ve, useRef: Ve, useState: Ve, useDebugValue: Ve, useDeferredValue: Ve, useTransition: Ve, useMutableSource: Ve, useSyncExternalStore: Ve, useId: Ve, unstable_isNewReconciler: !1 }, Vf = { readContext: ft, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: xu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Il(
      4194308,
      4,
      Ru.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Il(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Il(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hf.bind(null, Ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Su, useDebugValue: Oo, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = Su(!1), t = e[0];
    return e = Bf.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ne, a = Pt();
    if (we) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), je === null) throw Error(s(349));
      (vn & 30) !== 0 || gu(r, t, n);
    }
    a.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return a.queue = o, xu(Eu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, zr(9, _u.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = je.identifierPrefix;
    if (we) {
      var n = At, r = Ft;
      n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Uf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Qf = {
    readContext: ft,
    useCallback: Lu,
    useContext: ft,
    useEffect: Io,
    useImperativeHandle: Pu,
    useInsertionEffect: Nu,
    useLayoutEffect: Tu,
    useMemo: Mu,
    useReducer: zo,
    useRef: Cu,
    useState: function() {
      return zo(Mr);
    },
    useDebugValue: Oo,
    useDeferredValue: function(e) {
      var t = pt();
      return zu(t, Ie.memoizedState, e);
    },
    useTransition: function() {
      var e = zo(Mr)[0], t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: vu,
    useSyncExternalStore: yu,
    useId: Du,
    unstable_isNewReconciler: !1
  }, Kf = { readContext: ft, useCallback: Lu, useContext: ft, useEffect: Io, useImperativeHandle: Pu, useInsertionEffect: Nu, useLayoutEffect: Tu, useMemo: Mu, useReducer: Do, useRef: Cu, useState: function() {
    return Do(Mr);
  }, useDebugValue: Oo, useDeferredValue: function(e) {
    var t = pt();
    return Ie === null ? t.memoizedState = e : zu(t, Ie.memoizedState, e);
  }, useTransition: function() {
    var e = Do(Mr)[0], t = pt().memoizedState;
    return [e, t];
  }, useMutableSource: vu, useSyncExternalStore: yu, useId: Du, unstable_isNewReconciler: !1 };
  function wt(e, t) {
    if (e && e.defaultProps) {
      t = V({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Fo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Al = { isMounted: function(e) {
    return (e = e._reactInternals) ? un(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ge(), a = ln(e), o = jt(r, a);
    o.payload = t, n != null && (o.callback = n), t = en(e, o, a), t !== null && (Ct(t, e, a, r), Pl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ge(), a = ln(e), o = jt(r, a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = en(e, o, a), t !== null && (Ct(t, e, a, r), Pl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ge(), r = ln(e), a = jt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = en(e, a, r), t !== null && (Ct(t, e, r, n), Pl(t, e, r));
  } };
  function Au(e, t, n, r, a, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(a, o) : !0;
  }
  function $u(e, t, n) {
    var r = !1, a = Jt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ft(o) : (a = be(t) ? dn : We.current, r = t.contextTypes, o = (r = r != null) ? jn(e, a) : Jt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ju(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Al.enqueueReplaceState(t, t.state, null);
  }
  function Ao(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, So(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = ft(o) : (o = be(t) ? dn : We.current, a.context = jn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Fo(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Al.enqueueReplaceState(a, a.state, null), Ll(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function qn(e, t) {
    try {
      var n = "", r = t;
      do
        n += oe(r), r = r.return;
      while (r);
      var a = n;
    } catch (o) {
      a = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function $o(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function jo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var qf = typeof WeakMap == "function" ? WeakMap : Map;
  function Uu(e, t, n) {
    n = jt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Vl || (Vl = !0, ei = r), jo(e, t);
    }, n;
  }
  function Bu(e, t, n) {
    n = jt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        jo(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      jo(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function Hu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new qf();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = ip.bind(null, e, t, n), t.then(e, e));
  }
  function Wu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vu(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Yf = G.ReactCurrentOwner, Ze = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? cu(t, null, n, r) : Wn(t, e.child, n, r);
  }
  function Qu(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Qn(t, a), r = Lo(e, t, n, r, o, a), n = Mo(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ut(e, t, a)) : (we && n && po(t), t.flags |= 1, Ye(e, t, r, a), t.child);
  }
  function Ku(e, t, n, r, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ii(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, qu(e, t, o, r, a)) : (e = Xl(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & a) === 0) {
      var u = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : gr, n(u, r) && e.ref === t.ref) return Ut(e, t, a);
    }
    return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qu(e, t, n, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (gr(o, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ze = !0);
      else return t.lanes = e.lanes, Ut(e, t, a);
    }
    return Uo(e, t, n, r, a);
  }
  function Yu(e, t, n) {
    var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Gn, st), st |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Gn, st), st |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ye(Gn, st), st |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ye(Gn, st), st |= r;
    return Ye(e, t, a, n), t.child;
  }
  function Gu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Uo(e, t, n, r, a) {
    var o = be(n) ? dn : We.current;
    return o = jn(t, o), Qn(t, a), n = Lo(e, t, n, r, o, a), r = Mo(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ut(e, t, a)) : (we && r && po(t), t.flags |= 1, Ye(e, t, n, a), t.child);
  }
  function Xu(e, t, n, r, a) {
    if (be(n)) {
      var o = !0;
      wl(t);
    } else o = !1;
    if (Qn(t, a), t.stateNode === null) jl(e, t), $u(t, n, r), Ao(t, n, r, a), r = !0;
    else if (e === null) {
      var u = t.stateNode, h = t.memoizedProps;
      u.props = h;
      var y = u.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = ft(R) : (R = be(n) ? dn : We.current, R = jn(t, R));
      var z = n.getDerivedStateFromProps, D = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== r || y !== R) && ju(t, u, r, R), Zt = !1;
      var M = t.memoizedState;
      u.state = M, Ll(t, r, u, a), y = t.memoizedState, h !== r || M !== y || Je.current || Zt ? (typeof z == "function" && (Fo(t, n, z, r), y = t.memoizedState), (h = Zt || Au(t, n, h, r, M, y, R)) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), u.props = r, u.state = y, u.context = R, r = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, fu(e, t), h = t.memoizedProps, R = t.type === t.elementType ? h : wt(t.type, h), u.props = R, D = t.pendingProps, M = u.context, y = n.contextType, typeof y == "object" && y !== null ? y = ft(y) : (y = be(n) ? dn : We.current, y = jn(t, y));
      var W = n.getDerivedStateFromProps;
      (z = typeof W == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== D || M !== y) && ju(t, u, r, y), Zt = !1, M = t.memoizedState, u.state = M, Ll(t, r, u, a);
      var K = t.memoizedState;
      h !== D || M !== K || Je.current || Zt ? (typeof W == "function" && (Fo(t, n, W, r), K = t.memoizedState), (R = Zt || Au(t, n, R, r, M, K, y) || !1) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, K, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, K, y)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), u.props = r, u.state = K, u.context = y, r = R) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Bo(e, t, n, r, o, a);
  }
  function Bo(e, t, n, r, a, o) {
    Gu(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return a && tu(t, n, !1), Ut(e, t, o);
    r = t.stateNode, Yf.current = t;
    var h = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = Wn(t, e.child, null, o), t.child = Wn(t, null, h, o)) : Ye(e, t, h, o), t.memoizedState = r.state, a && tu(t, n, !0), t.child;
  }
  function Ju(e) {
    var t = e.stateNode;
    t.pendingContext ? Zs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zs(e, t.context, !1), Co(e, t.containerInfo);
  }
  function bu(e, t, n, r, a) {
    return Hn(), yo(a), t.flags |= 256, Ye(e, t, n, r), t.child;
  }
  var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Zu(e, t, n) {
    var r = t.pendingProps, a = xe.current, o = !1, u = (t.flags & 128) !== 0, h;
    if ((h = u) || (h = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), h ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ye(xe, a & 1), e === null)
      return vo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = Jl(u, r, 0, null), e = wn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Wo(n), t.memoizedState = Ho, e) : Vo(t, u));
    if (a = e.memoizedState, a !== null && (h = a.dehydrated, h !== null)) return Gf(e, t, u, r, h, a, n);
    if (o) {
      o = r.fallback, u = t.mode, a = e.child, h = a.sibling;
      var y = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = on(a, y), r.subtreeFlags = a.subtreeFlags & 14680064), h !== null ? o = on(h, o) : (o = wn(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? Wo(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = Ho, r;
    }
    return o = e.child, e = o.sibling, r = on(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Vo(e, t) {
    return t = Jl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function $l(e, t, n, r) {
    return r !== null && yo(r), Wn(t, e.child, null, n), e = Vo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Gf(e, t, n, r, a, o, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = $o(Error(s(422))), $l(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Jl({ mode: "visible", children: r.children }, a, 0, null), o = wn(o, a, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Wn(t, e.child, null, u), t.child.memoizedState = Wo(u), t.memoizedState = Ho, o);
    if ((t.mode & 1) === 0) return $l(e, t, u, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var h = r.dgst;
      return r = h, o = Error(s(419)), r = $o(o, r, void 0), $l(e, t, u, r);
    }
    if (h = (u & e.childLanes) !== 0, Ze || h) {
      if (r = je, r !== null) {
        switch (u & -u) {
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
        a = (a & (r.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, $t(e, a), Ct(r, e, a, -1));
      }
      return oi(), r = $o(Error(s(421))), $l(e, t, u, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sp.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, it = Gt(a.nextSibling), ot = t, we = !0, Et = null, e !== null && (ct[dt++] = Ft, ct[dt++] = At, ct[dt++] = fn, Ft = e.id, At = e.overflow, fn = t), t = Vo(t, r.children), t.flags |= 4096, t);
  }
  function ec(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), wo(e.return, t, n);
  }
  function Qo(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
  }
  function tc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, o = r.tail;
    if (Ye(e, t, r.children, n), r = xe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ec(e, n, t);
        else if (e.tag === 19) ec(e, n, t);
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
    if (ye(xe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ml(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Qo(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ml(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Qo(t, !0, n, null, o);
        break;
      case "together":
        Qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ut(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Xf(e, t, n) {
    switch (t.tag) {
      case 3:
        Ju(t), Hn();
        break;
      case 5:
        hu(t);
        break;
      case 1:
        be(t.type) && wl(t);
        break;
      case 4:
        Co(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        ye(Tl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(xe, xe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zu(e, t, n) : (ye(xe, xe.current & 1), e = Ut(e, t, n), e !== null ? e.sibling : null);
        ye(xe, xe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return tc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ye(xe, xe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Yu(e, t, n);
    }
    return Ut(e, t, n);
  }
  var nc, Ko, rc, lc;
  nc = function(e, t) {
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
  }, Ko = function() {
  }, rc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, hn(Rt.current);
      var o = null;
      switch (n) {
        case "input":
          a = Ea(e, a), r = Ea(e, r), o = [];
          break;
        case "select":
          a = V({}, a, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          a = Sa(e, a), r = Sa(e, r), o = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gl);
      }
      xa(n, r);
      var u;
      n = null;
      for (R in a) if (!r.hasOwnProperty(R) && a.hasOwnProperty(R) && a[R] != null) if (R === "style") {
        var h = a[R];
        for (u in h) h.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (f.hasOwnProperty(R) ? o || (o = []) : (o = o || []).push(R, null));
      for (R in r) {
        var y = r[R];
        if (h = a != null ? a[R] : void 0, r.hasOwnProperty(R) && y !== h && (y != null || h != null)) if (R === "style") if (h) {
          for (u in h) !h.hasOwnProperty(u) || y && y.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in y) y.hasOwnProperty(u) && h[u] !== y[u] && (n || (n = {}), n[u] = y[u]);
        } else n || (o || (o = []), o.push(
          R,
          n
        )), n = y;
        else R === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, h = h ? h.__html : void 0, y != null && h !== y && (o = o || []).push(R, y)) : R === "children" ? typeof y != "string" && typeof y != "number" || (o = o || []).push(R, "" + y) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (f.hasOwnProperty(R) ? (y != null && R === "onScroll" && ge("scroll", e), o || h === y || (o = [])) : (o = o || []).push(R, y));
      }
      n && (o = o || []).push("style", n);
      var R = o;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, lc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Dr(e, t) {
    if (!we) switch (e.tailMode) {
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
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Jf(e, t, n) {
    var r = t.pendingProps;
    switch (mo(t), t.tag) {
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
        return Qe(t), null;
      case 1:
        return be(t.type) && El(), Qe(t), null;
      case 3:
        return r = t.stateNode, Kn(), _e(Je), _e(We), To(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Et !== null && (ri(Et), Et = null))), Ko(e, t), Qe(t), null;
      case 5:
        xo(t);
        var a = hn(Rr.current);
        if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Qe(t), null;
          }
          if (e = hn(Rt.current), xl(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Tt] = t, r[Sr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ge("cancel", r), ge("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Er.length; a++) ge(Er[a], r);
                break;
              case "source":
                ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ge(
                  "error",
                  r
                ), ge("load", r);
                break;
              case "details":
                ge("toggle", r);
                break;
              case "input":
                $i(r, o), ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ge("invalid", r);
                break;
              case "textarea":
                Bi(r, o), ge("invalid", r);
            }
            xa(n, o), a = null;
            for (var u in o) if (o.hasOwnProperty(u)) {
              var h = o[u];
              u === "children" ? typeof h == "string" ? r.textContent !== h && (o.suppressHydrationWarning !== !0 && yl(r.textContent, h, e), a = ["children", h]) : typeof h == "number" && r.textContent !== "" + h && (o.suppressHydrationWarning !== !0 && yl(
                r.textContent,
                h,
                e
              ), a = ["children", "" + h]) : f.hasOwnProperty(u) && h != null && u === "onScroll" && ge("scroll", r);
            }
            switch (n) {
              case "input":
                Yr(r), Ui(r, o, !0);
                break;
              case "textarea":
                Yr(r), Wi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = gl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Tt] = t, e[Sr] = r, nc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = Na(n, r), n) {
                case "dialog":
                  ge("cancel", e), ge("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Er.length; a++) ge(Er[a], e);
                  a = r;
                  break;
                case "source":
                  ge("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ge(
                    "error",
                    e
                  ), ge("load", e), a = r;
                  break;
                case "details":
                  ge("toggle", e), a = r;
                  break;
                case "input":
                  $i(e, r), a = Ea(e, r), ge("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = V({}, r, { value: void 0 }), ge("invalid", e);
                  break;
                case "textarea":
                  Bi(e, r), a = Sa(e, r), ge("invalid", e);
                  break;
                default:
                  a = r;
              }
              xa(n, a), h = a;
              for (o in h) if (h.hasOwnProperty(o)) {
                var y = h[o];
                o === "style" ? qi(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && Qi(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && tr(e, y) : typeof y == "number" && tr(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? y != null && o === "onScroll" && ge("scroll", e) : y != null && j(e, o, y, u));
              }
              switch (n) {
                case "input":
                  Yr(e), Ui(e, r, !1);
                  break;
                case "textarea":
                  Yr(e), Wi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + fe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Tn(e, !!r.multiple, o, !1) : r.defaultValue != null && Tn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = gl);
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
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) lc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = hn(Rr.current), hn(Rt.current), xl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Tt] = t, (o = r.nodeValue !== n) && (e = ot, e !== null)) switch (e.tag) {
              case 3:
                yl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && yl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Tt] = t, t.stateNode = r;
        }
        return Qe(t), null;
      case 13:
        if (_e(xe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (we && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) iu(), Hn(), t.flags |= 98560, o = !1;
          else if (o = xl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Tt] = t;
            } else Hn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), o = !1;
          } else Et !== null && (ri(Et), Et = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xe.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : oi())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
      case 4:
        return Kn(), Ko(e, t), e === null && wr(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Eo(t.type._context), Qe(t), null;
      case 17:
        return be(t.type) && El(), Qe(t), null;
      case 19:
        if (_e(xe), o = t.memoizedState, o === null) return Qe(t), null;
        if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) Dr(o, !1);
        else {
          if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Ml(e), u !== null) {
              for (t.flags |= 128, Dr(o, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ye(xe, xe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Me() > Xn && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ml(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !we) return Qe(t), null;
          } else 2 * Me() - o.renderingStartTime > Xn && n !== 1073741824 && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Me(), t.sibling = null, n = xe.current, ye(xe, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
      case 22:
      case 23:
        return ai(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (st & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function bf(e, t) {
    switch (mo(t), t.tag) {
      case 1:
        return be(t.type) && El(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Kn(), _e(Je), _e(We), To(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return xo(t), null;
      case 13:
        if (_e(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Hn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e(xe), null;
      case 4:
        return Kn(), null;
      case 10:
        return Eo(t.type._context), null;
      case 22:
      case 23:
        return ai(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ul = !1, Ke = !1, Zf = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function Yn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Re(e, t, r);
    }
    else n.current = null;
  }
  function qo(e, t, n) {
    try {
      n();
    } catch (r) {
      Re(e, t, r);
    }
  }
  var ac = !1;
  function ep(e, t) {
    if (lo = ol, e = As(), Xa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, h = -1, y = -1, R = 0, z = 0, D = e, M = null;
          t: for (; ; ) {
            for (var W; D !== n || a !== 0 && D.nodeType !== 3 || (h = u + a), D !== o || r !== 0 && D.nodeType !== 3 || (y = u + r), D.nodeType === 3 && (u += D.nodeValue.length), (W = D.firstChild) !== null; )
              M = D, D = W;
            for (; ; ) {
              if (D === e) break t;
              if (M === n && ++R === a && (h = u), M === o && ++z === r && (y = u), (W = D.nextSibling) !== null) break;
              D = M, M = D.parentNode;
            }
            D = W;
          }
          n = h === -1 || y === -1 ? null : { start: h, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ao = { focusedElem: e, selectionRange: n }, ol = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
    else for (; Q !== null; ) {
      t = Q;
      try {
        var K = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (K !== null) {
              var q = K.memoizedProps, ze = K.memoizedState, k = t.stateNode, g = k.getSnapshotBeforeUpdate(t.elementType === t.type ? q : wt(t.type, q), ze);
              k.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          case 3:
            var S = t.stateNode.containerInfo;
            S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (O) {
        Re(t, t.return, O);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return K = ac, ac = !1, K;
  }
  function Ir(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          a.destroy = void 0, o !== void 0 && qo(t, n, o);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function Bl(e, t) {
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
  function Yo(e) {
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
  function oc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, oc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[Sr], delete t[uo], delete t[Ff], delete t[Af])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ic(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ic(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Go(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gl));
    else if (r !== 4 && (e = e.child, e !== null)) for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), e = e.sibling;
  }
  function Xo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), e = e.sibling;
  }
  var Be = null, kt = !1;
  function tn(e, t, n) {
    for (n = n.child; n !== null; ) uc(e, t, n), n = n.sibling;
  }
  function uc(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function") try {
      Nt.onCommitFiberUnmount(el, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ke || Yn(n, t);
      case 6:
        var r = Be, a = kt;
        Be = null, tn(e, t, n), Be = r, kt = a, Be !== null && (kt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
      case 18:
        Be !== null && (kt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? so(e.parentNode, n) : e.nodeType === 1 && so(e, n), fr(e)) : so(Be, n.stateNode));
        break;
      case 4:
        r = Be, a = kt, Be = n.stateNode.containerInfo, kt = !0, tn(e, t, n), Be = r, kt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var o = a, u = o.destroy;
            o = o.tag, u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && qo(n, t, u), a = a.next;
          } while (a !== r);
        }
        tn(e, t, n);
        break;
      case 1:
        if (!Ke && (Yn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (h) {
          Re(n, t, h);
        }
        tn(e, t, n);
        break;
      case 21:
        tn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ke = (r = Ke) || n.memoizedState !== null, tn(e, t, n), Ke = r) : tn(e, t, n);
        break;
      default:
        tn(e, t, n);
    }
  }
  function cc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Zf()), t.forEach(function(r) {
        var a = up.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e, u = t, h = u;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 5:
              Be = h.stateNode, kt = !1;
              break e;
            case 3:
              Be = h.stateNode.containerInfo, kt = !0;
              break e;
            case 4:
              Be = h.stateNode.containerInfo, kt = !0;
              break e;
          }
          h = h.return;
        }
        if (Be === null) throw Error(s(160));
        uc(o, u, a), Be = null, kt = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (R) {
        Re(a, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) dc(t, e), t = t.sibling;
  }
  function dc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (St(t, e), Lt(e), r & 4) {
          try {
            Ir(3, e, e.return), Bl(3, e);
          } catch (q) {
            Re(e, e.return, q);
          }
          try {
            Ir(5, e, e.return);
          } catch (q) {
            Re(e, e.return, q);
          }
        }
        break;
      case 1:
        St(t, e), Lt(e), r & 512 && n !== null && Yn(n, n.return);
        break;
      case 5:
        if (St(t, e), Lt(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            tr(a, "");
          } catch (q) {
            Re(e, e.return, q);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, h = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            h === "input" && o.type === "radio" && o.name != null && ji(a, o), Na(h, u);
            var R = Na(h, o);
            for (u = 0; u < y.length; u += 2) {
              var z = y[u], D = y[u + 1];
              z === "style" ? qi(a, D) : z === "dangerouslySetInnerHTML" ? Qi(a, D) : z === "children" ? tr(a, D) : j(a, z, D, R);
            }
            switch (h) {
              case "input":
                wa(a, o);
                break;
              case "textarea":
                Hi(a, o);
                break;
              case "select":
                var M = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var W = o.value;
                W != null ? Tn(a, !!o.multiple, W, !1) : M !== !!o.multiple && (o.defaultValue != null ? Tn(
                  a,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Tn(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[Sr] = o;
          } catch (q) {
            Re(e, e.return, q);
          }
        }
        break;
      case 6:
        if (St(t, e), Lt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, o = e.memoizedProps;
          try {
            a.nodeValue = o;
          } catch (q) {
            Re(e, e.return, q);
          }
        }
        break;
      case 3:
        if (St(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          fr(t.containerInfo);
        } catch (q) {
          Re(e, e.return, q);
        }
        break;
      case 4:
        St(t, e), Lt(e);
        break;
      case 13:
        St(t, e), Lt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Zo = Me())), r & 4 && cc(e);
        break;
      case 22:
        if (z = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ke = (R = Ke) || z, St(t, e), Ke = R) : St(t, e), Lt(e), r & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !z && (e.mode & 1) !== 0) for (Q = e, z = e.child; z !== null; ) {
            for (D = Q = z; Q !== null; ) {
              switch (M = Q, W = M.child, M.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, M, M.return);
                  break;
                case 1:
                  Yn(M, M.return);
                  var K = M.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    r = M, n = M.return;
                    try {
                      t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (q) {
                      Re(r, n, q);
                    }
                  }
                  break;
                case 5:
                  Yn(M, M.return);
                  break;
                case 22:
                  if (M.memoizedState !== null) {
                    mc(D);
                    continue;
                  }
              }
              W !== null ? (W.return = M, Q = W) : mc(D);
            }
            z = z.sibling;
          }
          e: for (z = null, D = e; ; ) {
            if (D.tag === 5) {
              if (z === null) {
                z = D;
                try {
                  a = D.stateNode, R ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (h = D.stateNode, y = D.memoizedProps.style, u = y != null && y.hasOwnProperty("display") ? y.display : null, h.style.display = Ki("display", u));
                } catch (q) {
                  Re(e, e.return, q);
                }
              }
            } else if (D.tag === 6) {
              if (z === null) try {
                D.stateNode.nodeValue = R ? "" : D.memoizedProps;
              } catch (q) {
                Re(e, e.return, q);
              }
            } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
              D.child.return = D, D = D.child;
              continue;
            }
            if (D === e) break e;
            for (; D.sibling === null; ) {
              if (D.return === null || D.return === e) break e;
              z === D && (z = null), D = D.return;
            }
            z === D && (z = null), D.sibling.return = D.return, D = D.sibling;
          }
        }
        break;
      case 19:
        St(t, e), Lt(e), r & 4 && cc(e);
        break;
      case 21:
        break;
      default:
        St(
          t,
          e
        ), Lt(e);
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ic(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (tr(a, ""), r.flags &= -33);
            var o = sc(e);
            Xo(e, o, a);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, h = sc(e);
            Go(e, h, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (y) {
        Re(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function tp(e, t, n) {
    Q = e, fc(e);
  }
  function fc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, o = a.child;
      if (a.tag === 22 && r) {
        var u = a.memoizedState !== null || Ul;
        if (!u) {
          var h = a.alternate, y = h !== null && h.memoizedState !== null || Ke;
          h = Ul;
          var R = Ke;
          if (Ul = u, (Ke = y) && !R) for (Q = a; Q !== null; ) u = Q, y = u.child, u.tag === 22 && u.memoizedState !== null ? hc(a) : y !== null ? (y.return = u, Q = y) : hc(a);
          for (; o !== null; ) Q = o, fc(o), o = o.sibling;
          Q = a, Ul = h, Ke = R;
        }
        pc(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = a, Q = o) : pc(e);
    }
  }
  function pc(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && mu(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                mu(t, u, n);
              }
              break;
            case 5:
              var h = t.stateNode;
              if (n === null && t.flags & 4) {
                n = h;
                var y = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    y.autoFocus && n.focus();
                    break;
                  case "img":
                    y.src && (n.src = y.src);
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
                var R = t.alternate;
                if (R !== null) {
                  var z = R.memoizedState;
                  if (z !== null) {
                    var D = z.dehydrated;
                    D !== null && fr(D);
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
              throw Error(s(163));
          }
          Ke || t.flags & 512 && Yo(t);
        } catch (M) {
          Re(t, t.return, M);
        }
      }
      if (t === e) {
        Q = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, Q = n;
        break;
      }
      Q = t.return;
    }
  }
  function mc(e) {
    for (; Q !== null; ) {
      var t = Q;
      if (t === e) {
        Q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, Q = n;
        break;
      }
      Q = t.return;
    }
  }
  function hc(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bl(4, t);
            } catch (y) {
              Re(t, n, y);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (y) {
                Re(t, a, y);
              }
            }
            var o = t.return;
            try {
              Yo(t);
            } catch (y) {
              Re(t, o, y);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Yo(t);
            } catch (y) {
              Re(t, u, y);
            }
        }
      } catch (y) {
        Re(t, t.return, y);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        h.return = t.return, Q = h;
        break;
      }
      Q = t.return;
    }
  }
  var np = Math.ceil, Hl = G.ReactCurrentDispatcher, Jo = G.ReactCurrentOwner, mt = G.ReactCurrentBatchConfig, se = 0, je = null, De = null, He = 0, st = 0, Gn = Xt(0), Oe = 0, Or = null, yn = 0, Wl = 0, bo = 0, Fr = null, et = null, Zo = 0, Xn = 1 / 0, Bt = null, Vl = !1, ei = null, nn = null, Ql = !1, rn = null, Kl = 0, Ar = 0, ti = null, ql = -1, Yl = 0;
  function Ge() {
    return (se & 6) !== 0 ? Me() : ql !== -1 ? ql : ql = Me();
  }
  function ln(e) {
    return (e.mode & 1) === 0 ? 1 : (se & 2) !== 0 && He !== 0 ? He & -He : jf.transition !== null ? (Yl === 0 && (Yl = ss()), Yl) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ys(e.type)), e);
  }
  function Ct(e, t, n, r) {
    if (50 < Ar) throw Ar = 0, ti = null, Error(s(185));
    ir(e, n, r), ((se & 2) === 0 || e !== je) && (e === je && ((se & 2) === 0 && (Wl |= n), Oe === 4 && an(e, He)), tt(e, r), n === 1 && se === 0 && (t.mode & 1) === 0 && (Xn = Me() + 500, kl && bt()));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    $d(e, t);
    var r = rl(e, e === je ? He : 0);
    if (r === 0) n !== null && as(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && as(n), t === 1) e.tag === 0 ? $f(yc.bind(null, e)) : nu(yc.bind(null, e)), If(function() {
        (se & 6) === 0 && bt();
      }), n = null;
      else {
        switch (us(r)) {
          case 1:
            n = Da;
            break;
          case 4:
            n = os;
            break;
          case 16:
            n = Zr;
            break;
          case 536870912:
            n = is;
            break;
          default:
            n = Zr;
        }
        n = xc(n, vc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function vc(e, t) {
    if (ql = -1, Yl = 0, (se & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (Jn() && e.callbackNode !== n) return null;
    var r = rl(e, e === je ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Gl(e, r);
    else {
      t = r;
      var a = se;
      se |= 2;
      var o = _c();
      (je !== e || He !== t) && (Bt = null, Xn = Me() + 500, _n(e, t));
      do
        try {
          ap();
          break;
        } catch (h) {
          gc(e, h);
        }
      while (!0);
      _o(), Hl.current = o, se = a, De !== null ? t = 0 : (je = null, He = 0, t = Oe);
    }
    if (t !== 0) {
      if (t === 2 && (a = Ia(e), a !== 0 && (r = a, t = ni(e, a))), t === 1) throw n = Or, _n(e, 0), an(e, r), tt(e, Me()), n;
      if (t === 6) an(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !rp(a) && (t = Gl(e, r), t === 2 && (o = Ia(e), o !== 0 && (r = o, t = ni(e, o))), t === 1)) throw n = Or, _n(e, 0), an(e, r), tt(e, Me()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            En(e, et, Bt);
            break;
          case 3:
            if (an(e, r), (r & 130023424) === r && (t = Zo + 500 - Me(), 10 < t)) {
              if (rl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Ge(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = io(En.bind(null, e, et, Bt), t);
              break;
            }
            En(e, et, Bt);
            break;
          case 4:
            if (an(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var u = 31 - gt(r);
              o = 1 << u, u = t[u], u > a && (a = u), r &= ~o;
            }
            if (r = a, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * np(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = io(En.bind(null, e, et, Bt), r);
              break;
            }
            En(e, et, Bt);
            break;
          case 5:
            En(e, et, Bt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return tt(e, Me()), e.callbackNode === n ? vc.bind(null, e) : null;
  }
  function ni(e, t) {
    var n = Fr;
    return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = Gl(e, t), e !== 2 && (t = et, et = n, t !== null && ri(t)), e;
  }
  function ri(e) {
    et === null ? et = e : et.push.apply(et, e);
  }
  function rp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], o = a.getSnapshot;
          a = a.value;
          try {
            if (!_t(o(), a)) return !1;
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
  function an(e, t) {
    for (t &= ~bo, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - gt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function yc(e) {
    if ((se & 6) !== 0) throw Error(s(327));
    Jn();
    var t = rl(e, 0);
    if ((t & 1) === 0) return tt(e, Me()), null;
    var n = Gl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ia(e);
      r !== 0 && (t = r, n = ni(e, r));
    }
    if (n === 1) throw n = Or, _n(e, 0), an(e, t), tt(e, Me()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, En(e, et, Bt), tt(e, Me()), null;
  }
  function li(e, t) {
    var n = se;
    se |= 1;
    try {
      return e(t);
    } finally {
      se = n, se === 0 && (Xn = Me() + 500, kl && bt());
    }
  }
  function gn(e) {
    rn !== null && rn.tag === 0 && (se & 6) === 0 && Jn();
    var t = se;
    se |= 1;
    var n = mt.transition, r = pe;
    try {
      if (mt.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, mt.transition = n, se = t, (se & 6) === 0 && bt();
    }
  }
  function ai() {
    st = Gn.current, _e(Gn);
  }
  function _n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Df(n)), De !== null) for (n = De.return; n !== null; ) {
      var r = n;
      switch (mo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && El();
          break;
        case 3:
          Kn(), _e(Je), _e(We), To();
          break;
        case 5:
          xo(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          _e(xe);
          break;
        case 19:
          _e(xe);
          break;
        case 10:
          Eo(r.type._context);
          break;
        case 22:
        case 23:
          ai();
      }
      n = n.return;
    }
    if (je = e, De = e = on(e.current, null), He = st = t, Oe = 0, Or = null, bo = Wl = yn = 0, et = Fr = null, mn !== null) {
      for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, o = n.pending;
        if (o !== null) {
          var u = o.next;
          o.next = a, r.next = u;
        }
        n.pending = r;
      }
      mn = null;
    }
    return e;
  }
  function gc(e, t) {
    do {
      var n = De;
      try {
        if (_o(), zl.current = Fl, Dl) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Dl = !1;
        }
        if (vn = 0, $e = Ie = Ne = null, Pr = !1, Lr = 0, Jo.current = null, n === null || n.return === null) {
          Oe = 1, Or = t, De = null;
          break;
        }
        e: {
          var o = e, u = n.return, h = n, y = t;
          if (t = He, h.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var R = y, z = h, D = z.tag;
            if ((z.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
              var M = z.alternate;
              M ? (z.updateQueue = M.updateQueue, z.memoizedState = M.memoizedState, z.lanes = M.lanes) : (z.updateQueue = null, z.memoizedState = null);
            }
            var W = Wu(u);
            if (W !== null) {
              W.flags &= -257, Vu(W, u, h, o, t), W.mode & 1 && Hu(o, R, t), t = W, y = R;
              var K = t.updateQueue;
              if (K === null) {
                var q = /* @__PURE__ */ new Set();
                q.add(y), t.updateQueue = q;
              } else K.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Hu(o, R, t), oi();
                break e;
              }
              y = Error(s(426));
            }
          } else if (we && h.mode & 1) {
            var ze = Wu(u);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), Vu(ze, u, h, o, t), yo(qn(y, h));
              break e;
            }
          }
          o = y = qn(y, h), Oe !== 4 && (Oe = 2), Fr === null ? Fr = [o] : Fr.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var k = Uu(o, y, t);
                pu(o, k);
                break e;
              case 1:
                h = y;
                var g = o.type, S = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof g.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (nn === null || !nn.has(S)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var O = Bu(o, h, t);
                  pu(o, O);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        wc(n);
      } catch (Y) {
        t = Y, De === n && n !== null && (De = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _c() {
    var e = Hl.current;
    return Hl.current = Fl, e === null ? Fl : e;
  }
  function oi() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), je === null || (yn & 268435455) === 0 && (Wl & 268435455) === 0 || an(je, He);
  }
  function Gl(e, t) {
    var n = se;
    se |= 2;
    var r = _c();
    (je !== e || He !== t) && (Bt = null, _n(e, t));
    do
      try {
        lp();
        break;
      } catch (a) {
        gc(e, a);
      }
    while (!0);
    if (_o(), se = n, Hl.current = r, De !== null) throw Error(s(261));
    return je = null, He = 0, Oe;
  }
  function lp() {
    for (; De !== null; ) Ec(De);
  }
  function ap() {
    for (; De !== null && !Pd(); ) Ec(De);
  }
  function Ec(e) {
    var t = Cc(e.alternate, e, st);
    e.memoizedProps = e.pendingProps, t === null ? wc(e) : De = t, Jo.current = null;
  }
  function wc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Jf(n, t, st), n !== null) {
          De = n;
          return;
        }
      } else {
        if (n = bf(n, t), n !== null) {
          n.flags &= 32767, De = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Oe = 6, De = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function En(e, t, n) {
    var r = pe, a = mt.transition;
    try {
      mt.transition = null, pe = 1, op(e, t, n, r);
    } finally {
      mt.transition = a, pe = r;
    }
    return null;
  }
  function op(e, t, n, r) {
    do
      Jn();
    while (rn !== null);
    if ((se & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (jd(e, o), e === je && (De = je = null, He = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ql || (Ql = !0, xc(Zr, function() {
      return Jn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = mt.transition, mt.transition = null;
      var u = pe;
      pe = 1;
      var h = se;
      se |= 4, Jo.current = null, ep(e, n), dc(n, e), Nf(ao), ol = !!lo, ao = lo = null, e.current = n, tp(n), Ld(), se = h, pe = u, mt.transition = o;
    } else e.current = n;
    if (Ql && (Ql = !1, rn = e, Kl = a), o = e.pendingLanes, o === 0 && (nn = null), Dd(n.stateNode), tt(e, Me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (Vl) throw Vl = !1, e = ei, ei = null, e;
    return (Kl & 1) !== 0 && e.tag !== 0 && Jn(), o = e.pendingLanes, (o & 1) !== 0 ? e === ti ? Ar++ : (Ar = 0, ti = e) : Ar = 0, bt(), null;
  }
  function Jn() {
    if (rn !== null) {
      var e = us(Kl), t = mt.transition, n = pe;
      try {
        if (mt.transition = null, pe = 16 > e ? 16 : e, rn === null) var r = !1;
        else {
          if (e = rn, rn = null, Kl = 0, (se & 6) !== 0) throw Error(s(331));
          var a = se;
          for (se |= 4, Q = e.current; Q !== null; ) {
            var o = Q, u = o.child;
            if ((Q.flags & 16) !== 0) {
              var h = o.deletions;
              if (h !== null) {
                for (var y = 0; y < h.length; y++) {
                  var R = h[y];
                  for (Q = R; Q !== null; ) {
                    var z = Q;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ir(8, z, o);
                    }
                    var D = z.child;
                    if (D !== null) D.return = z, Q = D;
                    else for (; Q !== null; ) {
                      z = Q;
                      var M = z.sibling, W = z.return;
                      if (oc(z), z === R) {
                        Q = null;
                        break;
                      }
                      if (M !== null) {
                        M.return = W, Q = M;
                        break;
                      }
                      Q = W;
                    }
                  }
                }
                var K = o.alternate;
                if (K !== null) {
                  var q = K.child;
                  if (q !== null) {
                    K.child = null;
                    do {
                      var ze = q.sibling;
                      q.sibling = null, q = ze;
                    } while (q !== null);
                  }
                }
                Q = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) u.return = o, Q = u;
            else e: for (; Q !== null; ) {
              if (o = Q, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Ir(9, o, o.return);
              }
              var k = o.sibling;
              if (k !== null) {
                k.return = o.return, Q = k;
                break e;
              }
              Q = o.return;
            }
          }
          var g = e.current;
          for (Q = g; Q !== null; ) {
            u = Q;
            var S = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && S !== null) S.return = u, Q = S;
            else e: for (u = g; Q !== null; ) {
              if (h = Q, (h.flags & 2048) !== 0) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bl(9, h);
                }
              } catch (Y) {
                Re(h, h.return, Y);
              }
              if (h === u) {
                Q = null;
                break e;
              }
              var O = h.sibling;
              if (O !== null) {
                O.return = h.return, Q = O;
                break e;
              }
              Q = h.return;
            }
          }
          if (se = a, bt(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
            Nt.onPostCommitFiberRoot(el, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        pe = n, mt.transition = t;
      }
    }
    return !1;
  }
  function kc(e, t, n) {
    t = qn(n, t), t = Uu(e, t, 1), e = en(e, t, 1), t = Ge(), e !== null && (ir(e, 1, t), tt(e, t));
  }
  function Re(e, t, n) {
    if (e.tag === 3) kc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
          e = qn(n, e), e = Bu(t, e, 1), t = en(t, e, 1), e = Ge(), t !== null && (ir(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function ip(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ge(), e.pingedLanes |= e.suspendedLanes & n, je === e && (He & n) === n && (Oe === 4 || Oe === 3 && (He & 130023424) === He && 500 > Me() - Zo ? _n(e, 0) : bo |= n), tt(e, t);
  }
  function Sc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = nl, nl <<= 1, (nl & 130023424) === 0 && (nl = 4194304)));
    var n = Ge();
    e = $t(e, t), e !== null && (ir(e, t, n), tt(e, n));
  }
  function sp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Sc(e, n);
  }
  function up(e, t) {
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
        throw Error(s(314));
    }
    r !== null && r.delete(t), Sc(e, n);
  }
  var Cc;
  Cc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ze = !1, Xf(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
    else Ze = !1, we && (t.flags & 1048576) !== 0 && ru(t, Cl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        jl(e, t), e = t.pendingProps;
        var a = jn(t, We.current);
        Qn(t, n), a = Lo(null, t, r, e, a, n);
        var o = Mo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (o = !0, wl(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, So(t), a.updater = Al, t.stateNode = a, a._reactInternals = t, Ao(t, r, e, n), t = Bo(null, t, r, !0, o, n)) : (t.tag = 0, we && o && po(t), Ye(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (jl(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = dp(r), e = wt(r, e), a) {
            case 0:
              t = Uo(null, t, r, e, n);
              break e;
            case 1:
              t = Xu(null, t, r, e, n);
              break e;
            case 11:
              t = Qu(null, t, r, e, n);
              break e;
            case 14:
              t = Ku(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), Uo(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), Xu(e, t, r, a, n);
      case 3:
        e: {
          if (Ju(t), e === null) throw Error(s(387));
          r = t.pendingProps, o = t.memoizedState, a = o.element, fu(e, t), Ll(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            a = qn(Error(s(423)), t), t = bu(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = qn(Error(s(424)), t), t = bu(e, t, r, n, a);
            break e;
          } else for (it = Gt(t.stateNode.containerInfo.firstChild), ot = t, we = !0, Et = null, n = cu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Hn(), r === a) {
              t = Ut(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return hu(t), e === null && vo(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = a.children, oo(r, a) ? u = null : o !== null && oo(r, o) && (t.flags |= 32), Gu(e, t), Ye(e, t, u, n), t.child;
      case 6:
        return e === null && vo(t), null;
      case 13:
        return Zu(e, t, n);
      case 4:
        return Co(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), Qu(e, t, r, a, n);
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, u = a.value, ye(Tl, r._currentValue), r._currentValue = u, o !== null) if (_t(o.value, u)) {
            if (o.children === a.children && !Je.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var h = o.dependencies;
            if (h !== null) {
              u = o.child;
              for (var y = h.firstContext; y !== null; ) {
                if (y.context === r) {
                  if (o.tag === 1) {
                    y = jt(-1, n & -n), y.tag = 2;
                    var R = o.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var z = R.pending;
                      z === null ? y.next = y : (y.next = z.next, z.next = y), R.pending = y;
                    }
                  }
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), wo(
                    o.return,
                    n,
                    t
                  ), h.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (u = o.return, u === null) throw Error(s(341));
              u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), wo(u, n, t), u = o.sibling;
            } else u = o.child;
            if (u !== null) u.return = o;
            else for (u = o; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (o = u.sibling, o !== null) {
                o.return = u.return, u = o;
                break;
              }
              u = u.return;
            }
            o = u;
          }
          Ye(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Qn(t, n), a = ft(a), r = r(a), t.flags |= 1, Ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = wt(r, t.pendingProps), a = wt(r.type, a), Ku(e, t, r, a, n);
      case 15:
        return qu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), jl(e, t), t.tag = 1, be(r) ? (e = !0, wl(t)) : e = !1, Qn(t, n), $u(t, r, a), Ao(t, r, a, n), Bo(null, t, r, !0, e, n);
      case 19:
        return tc(e, t, n);
      case 22:
        return Yu(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function xc(e, t) {
    return ls(e, t);
  }
  function cp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, n, r) {
    return new cp(e, t, n, r);
  }
  function ii(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function dp(e) {
    if (typeof e == "function") return ii(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Xe) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function on(e, t) {
    var n = e.alternate;
    return n === null ? (n = ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Xl(e, t, n, r, a, o) {
    var u = 2;
    if (r = e, typeof e == "function") ii(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case ie:
        return wn(n.children, a, o, t);
      case Pe:
        u = 8, a |= 8;
        break;
      case Se:
        return e = ht(12, n, t, a | 2), e.elementType = Se, e.lanes = o, e;
      case Fe:
        return e = ht(13, n, t, a), e.elementType = Fe, e.lanes = o, e;
      case Le:
        return e = ht(19, n, t, a), e.elementType = Le, e.lanes = o, e;
      case he:
        return Jl(n, a, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Te:
            u = 10;
            break e;
          case yt:
            u = 9;
            break e;
          case Xe:
            u = 11;
            break e;
          case Ce:
            u = 14;
            break e;
          case Ae:
            u = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = ht(u, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function wn(e, t, n, r) {
    return e = ht(7, e, r, t), e.lanes = n, e;
  }
  function Jl(e, t, n, r) {
    return e = ht(22, e, r, t), e.elementType = he, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function si(e, t, n) {
    return e = ht(6, e, null, t), e.lanes = n, e;
  }
  function ui(e, t, n) {
    return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function fp(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Oa(0), this.expirationTimes = Oa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oa(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function ci(e, t, n, r, a, o, u, h, y) {
    return e = new fp(e, t, n, h, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ht(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, So(o), e;
  }
  function pp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Nc(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
      if (un(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (be(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (be(n)) return eu(e, n, t);
    }
    return t;
  }
  function Tc(e, t, n, r, a, o, u, h, y) {
    return e = ci(n, r, !0, e, a, o, u, h, y), e.context = Nc(null), n = e.current, r = Ge(), a = ln(n), o = jt(r, a), o.callback = t ?? null, en(n, o, a), e.current.lanes = a, ir(e, a, r), tt(e, r), e;
  }
  function bl(e, t, n, r) {
    var a = t.current, o = Ge(), u = ln(a);
    return n = Nc(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(o, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(a, t, u), e !== null && (Ct(e, a, u, o), Pl(e, a, u)), u;
  }
  function Zl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function di(e, t) {
    Rc(e, t), (e = e.alternate) && Rc(e, t);
  }
  function mp() {
    return null;
  }
  var Pc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function fi(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = fi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    bl(e, t, null, null);
  }, ea.prototype.unmount = fi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      gn(function() {
        bl(null, e, null, null);
      }), t[It] = null;
    }
  };
  function ea(e) {
    this._internalRoot = e;
  }
  ea.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = fs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
      Kt.splice(n, 0, e), n === 0 && hs(e);
    }
  };
  function pi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Lc() {
  }
  function hp(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var R = Zl(u);
          o.call(R);
        };
      }
      var u = Tc(t, r, e, 0, null, !1, !1, "", Lc);
      return e._reactRootContainer = u, e[It] = u.current, wr(e.nodeType === 8 ? e.parentNode : e), gn(), u;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var h = r;
      r = function() {
        var R = Zl(y);
        h.call(R);
      };
    }
    var y = ci(e, 0, !1, null, null, !1, !1, "", Lc);
    return e._reactRootContainer = y, e[It] = y.current, wr(e.nodeType === 8 ? e.parentNode : e), gn(function() {
      bl(t, y, n, r);
    }), y;
  }
  function na(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof a == "function") {
        var h = a;
        a = function() {
          var y = Zl(u);
          h.call(y);
        };
      }
      bl(t, u, e, a);
    } else u = hp(n, t, e, a, r);
    return Zl(u);
  }
  cs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = or(t.pendingLanes);
          n !== 0 && (Fa(t, n | 1), tt(t, Me()), (se & 6) === 0 && (Xn = Me() + 500, bt()));
        }
        break;
      case 13:
        gn(function() {
          var r = $t(e, 1);
          if (r !== null) {
            var a = Ge();
            Ct(r, e, 1, a);
          }
        }), di(e, 1);
    }
  }, Aa = function(e) {
    if (e.tag === 13) {
      var t = $t(e, 134217728);
      if (t !== null) {
        var n = Ge();
        Ct(t, e, 134217728, n);
      }
      di(e, 134217728);
    }
  }, ds = function(e) {
    if (e.tag === 13) {
      var t = ln(e), n = $t(e, t);
      if (n !== null) {
        var r = Ge();
        Ct(n, e, t, r);
      }
      di(e, t);
    }
  }, fs = function() {
    return pe;
  }, ps = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, Pa = function(e, t, n) {
    switch (t) {
      case "input":
        if (wa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = _l(r);
              if (!a) throw Error(s(90));
              Ai(r), wa(r, a);
            }
          }
        }
        break;
      case "textarea":
        Hi(e, n);
        break;
      case "select":
        t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
    }
  }, Ji = li, bi = gn;
  var vp = { usingClientEntryPoint: !1, Events: [Cr, An, _l, Gi, Xi, li] }, $r = { findFiberByHostInstance: cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, yp = { bundleType: $r.bundleType, version: $r.version, rendererPackageName: $r.rendererPackageName, rendererConfig: $r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ns(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: $r.findFiberByHostInstance || mp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ra.isDisabled && ra.supportsFiber) try {
      el = ra.inject(yp), Nt = ra;
    } catch {
    }
  }
  return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp, nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pi(t)) throw Error(s(200));
    return pp(e, t, null, n);
  }, nt.createRoot = function(e, t) {
    if (!pi(e)) throw Error(s(299));
    var n = !1, r = "", a = Pc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ci(e, 1, !1, null, null, n, !1, r, a), e[It] = t.current, wr(e.nodeType === 8 ? e.parentNode : e), new fi(t);
  }, nt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = ns(t), e = e === null ? null : e.stateNode, e;
  }, nt.flushSync = function(e) {
    return gn(e);
  }, nt.hydrate = function(e, t, n) {
    if (!ta(t)) throw Error(s(200));
    return na(null, e, t, !0, n);
  }, nt.hydrateRoot = function(e, t, n) {
    if (!pi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, o = "", u = Pc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Tc(t, null, e, 1, n ?? null, a, !1, o, u), e[It] = t.current, wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ea(t);
  }, nt.render = function(e, t, n) {
    if (!ta(t)) throw Error(s(200));
    return na(null, e, t, !1, n);
  }, nt.unmountComponentAtNode = function(e) {
    if (!ta(e)) throw Error(s(40));
    return e._reactRootContainer ? (gn(function() {
      na(null, null, e, !1, function() {
        e._reactRootContainer = null, e[It] = null;
      });
    }), !0) : !1;
  }, nt.unstable_batchedUpdates = li, nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ta(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return na(e, t, n, !1, r);
  }, nt.version = "18.3.1-next-f1338f8080-20240426", nt;
}
var Fc;
function Sp() {
  if (Fc) return hi.exports;
  Fc = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), hi.exports = kp(), hi.exports;
}
var Ac;
function Cp() {
  if (Ac) return la;
  Ac = 1;
  var l = Sp();
  return la.createRoot = l.createRoot, la.hydrateRoot = l.hydrateRoot, la;
}
var xp = Cp();
const Np = /* @__PURE__ */ Gc(xp);
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
var $c = "popstate";
function jc(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Tp(l = {}) {
  function i(f, p) {
    let {
      pathname: v = "/",
      search: _ = "",
      hash: w = ""
    } = Nn(f.location.hash.substring(1));
    return !v.startsWith("/") && !v.startsWith(".") && (v = "/" + v), Ni(
      "",
      { pathname: v, search: _, hash: w },
      // state defaults to `null` because `window.history.state` does
      p.state && p.state.usr || null,
      p.state && p.state.key || "default"
    );
  }
  function s(f, p) {
    let v = f.document.querySelector("base"), _ = "";
    if (v && v.getAttribute("href")) {
      let w = f.location.href, C = w.indexOf("#");
      _ = C === -1 ? w : w.slice(0, C);
    }
    return _ + "#" + (typeof p == "string" ? p : Wr(p));
  }
  function c(f, p) {
    vt(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        p
      )})`
    );
  }
  return Pp(
    i,
    s,
    c,
    l
  );
}
function ke(l, i) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(i);
}
function vt(l, i) {
  if (!l) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {
    }
  }
}
function Rp() {
  return Math.random().toString(36).substring(2, 10);
}
function Uc(l, i) {
  return {
    usr: l.state,
    key: l.key,
    idx: i,
    masked: l.mask ? {
      pathname: l.pathname,
      search: l.search,
      hash: l.hash
    } : void 0
  };
}
function Ni(l, i, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? Nn(i) : i,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || c || Rp(),
    mask: f
  };
}
function Wr({
  pathname: l = "/",
  search: i = "",
  hash: s = ""
}) {
  return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function Nn(l) {
  let i = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (i.hash = l.substring(s), l = l.substring(0, s));
    let c = l.indexOf("?");
    c >= 0 && (i.search = l.substring(c), l = l.substring(0, c)), l && (i.pathname = l);
  }
  return i;
}
function Pp(l, i, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: p = !1 } = c, v = f.history, _ = "POP", w = null, C = P();
  C == null && (C = 0, v.replaceState({ ...v.state, idx: C }, ""));
  function P() {
    return (v.state || { idx: null }).idx;
  }
  function x() {
    _ = "POP";
    let T = P(), L = T == null ? null : T - C;
    C = T, w && w({ action: _, location: F.location, delta: L });
  }
  function I(T, L) {
    _ = "PUSH";
    let $ = jc(T) ? T : Ni(F.location, T, L);
    s && s($, T), C = P() + 1;
    let j = Uc($, C), G = F.createHref($.mask || $);
    try {
      v.pushState(j, "", G);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError")
        throw te;
      f.location.assign(G);
    }
    p && w && w({ action: _, location: F.location, delta: 1 });
  }
  function A(T, L) {
    _ = "REPLACE";
    let $ = jc(T) ? T : Ni(F.location, T, L);
    s && s($, T), C = P();
    let j = Uc($, C), G = F.createHref($.mask || $);
    v.replaceState(j, "", G), p && w && w({ action: _, location: F.location, delta: 0 });
  }
  function U(T) {
    return Lp(f, T);
  }
  let F = {
    get action() {
      return _;
    },
    get location() {
      return l(f, v);
    },
    listen(T) {
      if (w)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener($c, x), w = T, () => {
        f.removeEventListener($c, x), w = null;
      };
    },
    createHref(T) {
      return i(f, T);
    },
    createURL: U,
    encodeLocation(T) {
      let L = U(T);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: I,
    replace: A,
    go(T) {
      return v.go(T);
    }
  };
  return F;
}
function Lp(l, i, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), ke(c, "No window.location.(origin|href) available to create URL");
  let f = typeof i == "string" ? i : Wr(i);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Jc(l, i, s = "/") {
  return Mp(l, i, s, !1);
}
function Mp(l, i, s, c, f) {
  let p = typeof i == "string" ? Nn(i) : i, v = Ht(p.pathname || "/", s);
  if (v == null)
    return null;
  let _ = zp(l), w = null, C = Vp(v);
  for (let P = 0; w == null && P < _.length; ++P)
    w = Hp(
      _[P],
      C,
      c
    );
  return w;
}
function zp(l) {
  let i = bc(l);
  return Dp(i), i;
}
function bc(l, i = [], s = [], c = "", f = !1) {
  let p = (v, _, w = f, C) => {
    let P = {
      relativePath: C === void 0 ? v.path || "" : C,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: _,
      route: v
    };
    if (P.relativePath.startsWith("/")) {
      if (!P.relativePath.startsWith(c) && w)
        return;
      ke(
        P.relativePath.startsWith(c),
        `Absolute route path "${P.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), P.relativePath = P.relativePath.slice(c.length);
    }
    let x = xt([c, P.relativePath]), I = s.concat(P);
    v.children && v.children.length > 0 && (ke(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      v.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), bc(
      v.children,
      i,
      I,
      x,
      w
    )), !(v.path == null && !v.index) && i.push({
      path: x,
      score: Up(x, v.index),
      routesMeta: I
    });
  };
  return l.forEach((v, _) => {
    var w;
    if (v.path === "" || !((w = v.path) != null && w.includes("?")))
      p(v, _);
    else
      for (let C of Zc(v.path))
        p(v, _, !0, C);
  }), i;
}
function Zc(l) {
  let i = l.split("/");
  if (i.length === 0) return [];
  let [s, ...c] = i, f = s.endsWith("?"), p = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [p, ""] : [p];
  let v = Zc(c.join("/")), _ = [];
  return _.push(
    ...v.map(
      (w) => w === "" ? p : [p, w].join("/")
    )
  ), f && _.push(...v), _.map(
    (w) => l.startsWith("/") && w === "" ? "/" : w
  );
}
function Dp(l) {
  l.sort(
    (i, s) => i.score !== s.score ? s.score - i.score : Bp(
      i.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Ip = /^:[\w-]+$/, Op = 3, Fp = 2, Ap = 1, $p = 10, jp = -2, Bc = (l) => l === "*";
function Up(l, i) {
  let s = l.split("/"), c = s.length;
  return s.some(Bc) && (c += jp), i && (c += Fp), s.filter((f) => !Bc(f)).reduce(
    (f, p) => f + (Ip.test(p) ? Op : p === "" ? Ap : $p),
    c
  );
}
function Bp(l, i) {
  return l.length === i.length && l.slice(0, -1).every((c, f) => c === i[f]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    l[l.length - 1] - i[i.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Hp(l, i, s = !1) {
  let { routesMeta: c } = l, f = {}, p = "/", v = [];
  for (let _ = 0; _ < c.length; ++_) {
    let w = c[_], C = _ === c.length - 1, P = p === "/" ? i : i.slice(p.length) || "/", x = da(
      { path: w.relativePath, caseSensitive: w.caseSensitive, end: C },
      P
    ), I = w.route;
    if (!x && C && s && !c[c.length - 1].route.index && (x = da(
      {
        path: w.relativePath,
        caseSensitive: w.caseSensitive,
        end: !1
      },
      P
    )), !x)
      return null;
    Object.assign(f, x.params), v.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: xt([p, x.pathname]),
      pathnameBase: Yp(
        xt([p, x.pathnameBase])
      ),
      route: I
    }), x.pathnameBase !== "/" && (p = xt([p, x.pathnameBase]));
  }
  return v;
}
function da(l, i) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = Wp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = i.match(s);
  if (!f) return null;
  let p = f[0], v = p.replace(/(.)\/+$/, "$1"), _ = f.slice(1);
  return {
    params: c.reduce(
      (C, { paramName: P, isOptional: x }, I) => {
        if (P === "*") {
          let U = _[I] || "";
          v = p.slice(0, p.length - U.length).replace(/(.)\/+$/, "$1");
        }
        const A = _[I];
        return x && !A ? C[P] = void 0 : C[P] = (A || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: p,
    pathnameBase: v,
    pattern: l
  };
}
function Wp(l, i = !1, s = !0) {
  vt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (v, _, w, C, P) => {
      if (c.push({ paramName: _, isOptional: w != null }), w) {
        let x = P.charAt(C + v.length);
        return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, i ? void 0 : "i"), c];
}
function Vp(l) {
  try {
    return l.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
  } catch (i) {
    return vt(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
    ), l;
  }
}
function Ht(l, i) {
  if (i === "/") return l;
  if (!l.toLowerCase().startsWith(i.toLowerCase()))
    return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length, c = l.charAt(s);
  return c && c !== "/" ? null : l.slice(s) || "/";
}
var Qp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Kp(l, i = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? Nn(l) : l, p;
  return s ? (s = ed(s), s.startsWith("/") ? p = Hc(s.substring(1), "/") : p = Hc(s, i)) : p = i, {
    pathname: p,
    search: Gp(c),
    hash: Xp(f)
  };
}
function Hc(l, i) {
  let s = fa(i).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function gi(l, i, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function qp(l) {
  return l.filter(
    (i, s) => s === 0 || i.route.path && i.route.path.length > 0
  );
}
function Ri(l) {
  let i = qp(l);
  return i.map(
    (s, c) => c === i.length - 1 ? s.pathname : s.pathnameBase
  );
}
function ha(l, i, s, c = !1) {
  let f;
  typeof l == "string" ? f = Nn(l) : (f = { ...l }, ke(
    !f.pathname || !f.pathname.includes("?"),
    gi("?", "pathname", "search", f)
  ), ke(
    !f.pathname || !f.pathname.includes("#"),
    gi("#", "pathname", "hash", f)
  ), ke(
    !f.search || !f.search.includes("#"),
    gi("#", "search", "hash", f)
  ));
  let p = l === "" || f.pathname === "", v = p ? "/" : f.pathname, _;
  if (v == null)
    _ = s;
  else {
    let x = i.length - 1;
    if (!c && v.startsWith("..")) {
      let I = v.split("/");
      for (; I[0] === ".."; )
        I.shift(), x -= 1;
      f.pathname = I.join("/");
    }
    _ = x >= 0 ? i[x] : "/";
  }
  let w = Kp(f, _), C = v && v !== "/" && v.endsWith("/"), P = (p || v === ".") && s.endsWith("/");
  return !w.pathname.endsWith("/") && (C || P) && (w.pathname += "/"), w;
}
var ed = (l) => l.replace(/\/\/+/g, "/"), xt = (l) => ed(l.join("/")), fa = (l) => l.replace(/\/+$/, ""), Yp = (l) => fa(l).replace(/^\/*/, "/"), Gp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Xp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Jp = class {
  constructor(l, i, s, c = !1) {
    this.status = l, this.statusText = i || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function bp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Zp(l) {
  let i = l.map((s) => s.route.path).filter(Boolean);
  return xt(i) || "/";
}
var td = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function nd(l, i) {
  let s = l;
  if (typeof s != "string" || !Qp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (td)
    try {
      let p = new URL(window.location.href), v = s.startsWith("//") ? new URL(p.protocol + s) : new URL(s), _ = Ht(v.pathname, i);
      v.origin === p.origin && _ != null ? s = _ + v.search + v.hash : f = !0;
    } catch {
      vt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: f,
    to: s
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var rd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  rd
);
var em = [
  "GET",
  ...rd
];
new Set(em);
var bn = E.createContext(null);
bn.displayName = "DataRouter";
var va = E.createContext(null);
va.displayName = "DataRouterState";
var ld = E.createContext(!1);
function tm() {
  return E.useContext(ld);
}
var ad = E.createContext({
  isTransitioning: !1
});
ad.displayName = "ViewTransition";
var nm = E.createContext(
  /* @__PURE__ */ new Map()
);
nm.displayName = "Fetchers";
var rm = E.createContext(null);
rm.displayName = "Await";
var ut = E.createContext(
  null
);
ut.displayName = "Navigation";
var Vr = E.createContext(
  null
);
Vr.displayName = "Location";
var zt = E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
zt.displayName = "Route";
var Pi = E.createContext(null);
Pi.displayName = "RouteError";
var od = "REACT_ROUTER_ERROR", lm = "REDIRECT", am = "ROUTE_ERROR_RESPONSE";
function om(l) {
  if (l.startsWith(`${od}:${lm}:{`))
    try {
      let i = JSON.parse(l.slice(28));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
        return i;
    } catch {
    }
}
function im(l) {
  if (l.startsWith(
    `${od}:${am}:{`
  ))
    try {
      let i = JSON.parse(l.slice(40));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
        return new Jp(
          i.status,
          i.statusText,
          i.data
        );
    } catch {
    }
}
function sm(l, { relative: i } = {}) {
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = E.useContext(ut), { hash: f, pathname: p, search: v } = Qr(l, { relative: i }), _ = p;
  return s !== "/" && (_ = p === "/" ? s : xt([s, p])), c.createHref({ pathname: _, search: v, hash: f });
}
function Zn() {
  return E.useContext(Vr) != null;
}
function Dt() {
  return ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), E.useContext(Vr).location;
}
var id = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function sd(l) {
  E.useContext(ut).static || E.useLayoutEffect(l);
}
function Li() {
  let { isDataRoute: l } = E.useContext(zt);
  return l ? wm() : um();
}
function um() {
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = E.useContext(bn), { basename: i, navigator: s } = E.useContext(ut), { matches: c } = E.useContext(zt), { pathname: f } = Dt(), p = JSON.stringify(Ri(c)), v = E.useRef(!1);
  return sd(() => {
    v.current = !0;
  }), E.useCallback(
    (w, C = {}) => {
      if (vt(v.current, id), !v.current) return;
      if (typeof w == "number") {
        s.go(w);
        return;
      }
      let P = ha(
        w,
        JSON.parse(p),
        f,
        C.relative === "path"
      );
      l == null && i !== "/" && (P.pathname = P.pathname === "/" ? i : xt([i, P.pathname])), (C.replace ? s.replace : s.push)(
        P,
        C.state,
        C
      );
    },
    [
      i,
      s,
      p,
      f,
      l
    ]
  );
}
E.createContext(null);
function Qr(l, { relative: i } = {}) {
  let { matches: s } = E.useContext(zt), { pathname: c } = Dt(), f = JSON.stringify(Ri(s));
  return E.useMemo(
    () => ha(
      l,
      JSON.parse(f),
      c,
      i === "path"
    ),
    [l, f, c, i]
  );
}
function cm(l, i) {
  return ud(l, i);
}
function ud(l, i, s) {
  var T;
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = E.useContext(ut), { matches: f } = E.useContext(zt), p = f[f.length - 1], v = p ? p.params : {}, _ = p ? p.pathname : "/", w = p ? p.pathnameBase : "/", C = p && p.route;
  {
    let L = C && C.path || "";
    dd(
      _,
      !C || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`
    );
  }
  let P = Dt(), x;
  if (i) {
    let L = typeof i == "string" ? Nn(i) : i;
    ke(
      w === "/" || ((T = L.pathname) == null ? void 0 : T.startsWith(w)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ), x = L;
  } else
    x = P;
  let I = x.pathname || "/", A = I;
  if (w !== "/") {
    let L = w.replace(/^\//, "").split("/");
    A = "/" + I.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let U = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (L) => Object.assign(L, {
        route: s.manifest[L.route.id] || L.route
      })
    )
  ) : Jc(l, { pathname: A });
  vt(
    C || U != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), vt(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let F = hm(
    U && U.map(
      (L) => Object.assign({}, L, {
        params: Object.assign({}, v, L.params),
        pathname: xt([
          w,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            L.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathname
        ]),
        pathnameBase: L.pathnameBase === "/" ? w : xt([
          w,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            L.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathnameBase
        ])
      })
    ),
    f,
    s
  );
  return i && F ? /* @__PURE__ */ E.createElement(
    Vr.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...x
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    F
  ) : F;
}
function dm() {
  let l = Em(), i = bp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, p = { padding: "2px 4px", backgroundColor: c }, v = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), v = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", { style: p }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", { style: p }, "errorElement"), " prop on your route.")), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", { style: { fontStyle: "italic" } }, i), s ? /* @__PURE__ */ E.createElement("pre", { style: f }, s) : null, v);
}
var fm = /* @__PURE__ */ E.createElement(dm, null), cd = class extends E.Component {
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
  static getDerivedStateFromProps(l, i) {
    return i.location !== l.location || i.revalidation !== "idle" && l.revalidation === "idle" ? {
      error: l.error,
      location: l.location,
      revalidation: l.revalidation
    } : {
      error: l.error !== void 0 ? l.error : i.error,
      location: i.location,
      revalidation: l.revalidation || i.revalidation
    };
  }
  componentDidCatch(l, i) {
    this.props.onError ? this.props.onError(l, i) : console.error(
      "React Router caught the following error during render",
      l
    );
  }
  render() {
    let l = this.state.error;
    if (this.context && typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
      const s = im(l.digest);
      s && (l = s);
    }
    let i = l !== void 0 ? /* @__PURE__ */ E.createElement(zt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ E.createElement(
      Pi.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ E.createElement(pm, { error: l }, i) : i;
  }
};
cd.contextType = ld;
var _i = /* @__PURE__ */ new WeakMap();
function pm({
  children: l,
  error: i
}) {
  let { basename: s } = E.useContext(ut);
  if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
    let c = om(i.digest);
    if (c) {
      let f = _i.get(i);
      if (f) throw f;
      let p = nd(c.location, s);
      if (td && !_i.get(i))
        if (p.isExternal || c.reloadDocument)
          window.location.href = p.absoluteURL || p.to;
        else {
          const v = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(p.to, {
              replace: c.replace
            })
          );
          throw _i.set(i, v), v;
        }
      return /* @__PURE__ */ E.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${p.absoluteURL || p.to}`
        }
      );
    }
  }
  return l;
}
function mm({ routeContext: l, match: i, children: s }) {
  let c = E.useContext(bn);
  return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ E.createElement(zt.Provider, { value: l }, s);
}
function hm(l, i = [], s) {
  let c = s == null ? void 0 : s.state;
  if (l == null) {
    if (!c)
      return null;
    if (c.errors)
      l = c.matches;
    else if (i.length === 0 && !c.initialized && c.matches.length > 0)
      l = c.matches;
    else
      return null;
  }
  let f = l, p = c == null ? void 0 : c.errors;
  if (p != null) {
    let P = f.findIndex(
      (x) => x.route.id && (p == null ? void 0 : p[x.route.id]) !== void 0
    );
    ke(
      P >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, P + 1)
    );
  }
  let v = !1, _ = -1;
  if (s && c) {
    v = c.renderFallback;
    for (let P = 0; P < f.length; P++) {
      let x = f[P];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (_ = P), x.route.id) {
        let { loaderData: I, errors: A } = c, U = x.route.loader && !I.hasOwnProperty(x.route.id) && (!A || A[x.route.id] === void 0);
        if (x.route.lazy || U) {
          s.isStatic && (v = !0), _ >= 0 ? f = f.slice(0, _ + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let w = s == null ? void 0 : s.onError, C = c && w ? (P, x) => {
    var I, A;
    w(P, {
      location: c.location,
      params: ((A = (I = c.matches) == null ? void 0 : I[0]) == null ? void 0 : A.params) ?? {},
      pattern: Zp(c.matches),
      errorInfo: x
    });
  } : void 0;
  return f.reduceRight(
    (P, x, I) => {
      let A, U = !1, F = null, T = null;
      c && (A = p && x.route.id ? p[x.route.id] : void 0, F = x.route.errorElement || fm, v && (_ < 0 && I === 0 ? (dd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), U = !0, T = null) : _ === I && (U = !0, T = x.route.hydrateFallbackElement || null)));
      let L = i.concat(f.slice(0, I + 1)), $ = () => {
        let j;
        return A ? j = F : U ? j = T : x.route.Component ? j = /* @__PURE__ */ E.createElement(x.route.Component, null) : x.route.element ? j = x.route.element : j = P, /* @__PURE__ */ E.createElement(
          mm,
          {
            match: x,
            routeContext: {
              outlet: P,
              matches: L,
              isDataRoute: c != null
            },
            children: j
          }
        );
      };
      return c && (x.route.ErrorBoundary || x.route.errorElement || I === 0) ? /* @__PURE__ */ E.createElement(
        cd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: F,
          error: A,
          children: $(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          onError: C
        }
      ) : $();
    },
    null
  );
}
function Mi(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vm(l) {
  let i = E.useContext(bn);
  return ke(i, Mi(l)), i;
}
function ym(l) {
  let i = E.useContext(va);
  return ke(i, Mi(l)), i;
}
function gm(l) {
  let i = E.useContext(zt);
  return ke(i, Mi(l)), i;
}
function zi(l) {
  let i = gm(l), s = i.matches[i.matches.length - 1];
  return ke(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function _m() {
  return zi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Em() {
  var c;
  let l = E.useContext(Pi), i = ym(
    "useRouteError"
    /* UseRouteError */
  ), s = zi(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = i.errors) == null ? void 0 : c[s];
}
function wm() {
  let { router: l } = vm(
    "useNavigate"
    /* UseNavigateStable */
  ), i = zi(
    "useNavigate"
    /* UseNavigateStable */
  ), s = E.useRef(!1);
  return sd(() => {
    s.current = !0;
  }), E.useCallback(
    async (f, p = {}) => {
      vt(s.current, id), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: i, ...p }));
    },
    [l, i]
  );
}
var Wc = {};
function dd(l, i, s) {
  !i && !Wc[l] && (Wc[l] = !0, vt(!1, s));
}
E.memo(km);
function km({
  routes: l,
  manifest: i,
  future: s,
  state: c,
  isStatic: f,
  onError: p
}) {
  return ud(l, void 0, {
    manifest: i,
    state: c,
    isStatic: f,
    onError: p
  });
}
function aa({
  to: l,
  replace: i,
  state: s,
  relative: c
}) {
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = E.useContext(ut);
  vt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: p } = E.useContext(zt), { pathname: v } = Dt(), _ = Li(), w = ha(
    l,
    Ri(p),
    v,
    c === "path"
  ), C = JSON.stringify(w);
  return E.useEffect(() => {
    _(JSON.parse(C), { replace: i, state: s, relative: c });
  }, [_, C, c, i, s]), null;
}
function rt(l) {
  ke(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Sm({
  basename: l = "/",
  children: i = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: p = !1,
  useTransitions: v
}) {
  ke(
    !Zn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let _ = l.replace(/^\/*/, "/"), w = E.useMemo(
    () => ({
      basename: _,
      navigator: f,
      static: p,
      useTransitions: v,
      future: {}
    }),
    [_, f, p, v]
  );
  typeof s == "string" && (s = Nn(s));
  let {
    pathname: C = "/",
    search: P = "",
    hash: x = "",
    state: I = null,
    key: A = "default",
    mask: U
  } = s, F = E.useMemo(() => {
    let T = Ht(C, _);
    return T == null ? null : {
      location: {
        pathname: T,
        search: P,
        hash: x,
        state: I,
        key: A,
        mask: U
      },
      navigationType: c
    };
  }, [_, C, P, x, I, A, c, U]);
  return vt(
    F != null,
    `<Router basename="${_}"> is not able to match the URL "${C}${P}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), F == null ? null : /* @__PURE__ */ E.createElement(ut.Provider, { value: w }, /* @__PURE__ */ E.createElement(Vr.Provider, { children: i, value: F }));
}
function Cm({
  children: l,
  location: i
}) {
  return cm(Ti(l), i);
}
function Ti(l, i = []) {
  let s = [];
  return E.Children.forEach(l, (c, f) => {
    if (!E.isValidElement(c))
      return;
    let p = [...i, f];
    if (c.type === E.Fragment) {
      s.push.apply(
        s,
        Ti(c.props.children, p)
      );
      return;
    }
    ke(
      c.type === rt,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ke(
      !c.props.index || !c.props.children,
      "An index route cannot have child routes."
    );
    let v = {
      id: c.props.id || p.join("-"),
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
    c.props.children && (v.children = Ti(
      c.props.children,
      p
    )), s.push(v);
  }), s;
}
var ua = "get", ca = "application/x-www-form-urlencoded";
function ya(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function xm(l) {
  return ya(l) && l.tagName.toLowerCase() === "button";
}
function Nm(l) {
  return ya(l) && l.tagName.toLowerCase() === "form";
}
function Tm(l) {
  return ya(l) && l.tagName.toLowerCase() === "input";
}
function Rm(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Pm(l, i) {
  return l.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !Rm(l);
}
var oa = null;
function Lm() {
  if (oa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), oa = !1;
    } catch {
      oa = !0;
    }
  return oa;
}
var Mm = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Ei(l) {
  return l != null && !Mm.has(l) ? (vt(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ca}"`
  ), null) : l;
}
function zm(l, i) {
  let s, c, f, p, v;
  if (Nm(l)) {
    let _ = l.getAttribute("action");
    c = _ ? Ht(_, i) : null, s = l.getAttribute("method") || ua, f = Ei(l.getAttribute("enctype")) || ca, p = new FormData(l);
  } else if (xm(l) || Tm(l) && (l.type === "submit" || l.type === "image")) {
    let _ = l.form;
    if (_ == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = l.getAttribute("formaction") || _.getAttribute("action");
    if (c = w ? Ht(w, i) : null, s = l.getAttribute("formmethod") || _.getAttribute("method") || ua, f = Ei(l.getAttribute("formenctype")) || Ei(_.getAttribute("enctype")) || ca, p = new FormData(_, l), !Lm()) {
      let { name: C, type: P, value: x } = l;
      if (P === "image") {
        let I = C ? `${C}.` : "";
        p.append(`${I}x`, "0"), p.append(`${I}y`, "0");
      } else C && p.append(C, x);
    }
  } else {
    if (ya(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = ua, c = null, f = ca, v = l;
  }
  return p && f === "text/plain" && (v = p, p = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: p, body: v };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Di(l, i) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(i);
}
function fd(l, i, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : i && Ht(f.pathname, i) === "/" ? f.pathname = `${fa(i)}/_root.${c}` : f.pathname = `${fa(f.pathname)}.${c}`, f;
}
async function Dm(l, i) {
  if (l.id in i)
    return i[l.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return i[l.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Im(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Om(l, i, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let p = i.routes[f.route.id];
      if (p) {
        let v = await Dm(p, s);
        return v.links ? v.links() : [];
      }
      return [];
    })
  );
  return jm(
    c.flat(1).filter(Im).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function Vc(l, i, s, c, f, p) {
  let v = (w, C) => s[C] ? w.route.id !== s[C].route.id : !0, _ = (w, C) => {
    var P;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== w.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((P = s[C].route.path) == null ? void 0 : P.endsWith("*")) && s[C].params["*"] !== w.params["*"]
    );
  };
  return p === "assets" ? i.filter(
    (w, C) => v(w, C) || _(w, C)
  ) : p === "data" ? i.filter((w, C) => {
    var x;
    let P = c.routes[w.route.id];
    if (!P || !P.hasLoader)
      return !1;
    if (v(w, C) || _(w, C))
      return !0;
    if (w.route.shouldRevalidate) {
      let I = w.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((x = s[0]) == null ? void 0 : x.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: w.params,
        defaultShouldRevalidate: !0
      });
      if (typeof I == "boolean")
        return I;
    }
    return !0;
  }) : [];
}
function Fm(l, i, { includeHydrateFallback: s } = {}) {
  return Am(
    l.map((c) => {
      let f = i.routes[c.route.id];
      if (!f) return [];
      let p = [f.module];
      return f.clientActionModule && (p = p.concat(f.clientActionModule)), f.clientLoaderModule && (p = p.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (p = p.concat(f.hydrateFallbackModule)), f.imports && (p = p.concat(f.imports)), p;
    }).flat(1)
  );
}
function Am(l) {
  return [...new Set(l)];
}
function $m(l) {
  let i = {}, s = Object.keys(l).sort();
  for (let c of s)
    i[c] = l[c];
  return i;
}
function jm(l, i) {
  let s = /* @__PURE__ */ new Set();
  return new Set(i), l.reduce((c, f) => {
    let p = JSON.stringify($m(f));
    return s.has(p) || (s.add(p), c.push({ key: p, link: f })), c;
  }, []);
}
function Ii() {
  let l = E.useContext(bn);
  return Di(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Um() {
  let l = E.useContext(va);
  return Di(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Oi = E.createContext(void 0);
Oi.displayName = "FrameworkContext";
function Fi() {
  let l = E.useContext(Oi);
  return Di(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Bm(l, i) {
  let s = E.useContext(Oi), [c, f] = E.useState(!1), [p, v] = E.useState(!1), { onFocus: _, onBlur: w, onMouseEnter: C, onMouseLeave: P, onTouchStart: x } = i, I = E.useRef(null);
  E.useEffect(() => {
    if (l === "render" && v(!0), l === "viewport") {
      let F = (L) => {
        L.forEach(($) => {
          v($.isIntersecting);
        });
      }, T = new IntersectionObserver(F, { threshold: 0.5 });
      return I.current && T.observe(I.current), () => {
        T.disconnect();
      };
    }
  }, [l]), E.useEffect(() => {
    if (c) {
      let F = setTimeout(() => {
        v(!0);
      }, 100);
      return () => {
        clearTimeout(F);
      };
    }
  }, [c]);
  let A = () => {
    f(!0);
  }, U = () => {
    f(!1), v(!1);
  };
  return s ? l !== "intent" ? [p, I, {}] : [
    p,
    I,
    {
      onFocus: jr(_, A),
      onBlur: jr(w, U),
      onMouseEnter: jr(C, A),
      onMouseLeave: jr(P, U),
      onTouchStart: jr(x, A)
    }
  ] : [!1, I, {}];
}
function jr(l, i) {
  return (s) => {
    l && l(s), s.defaultPrevented || i(s);
  };
}
function Hm({ page: l, ...i }) {
  let s = tm(), { router: c } = Ii(), f = E.useMemo(
    () => Jc(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ E.createElement(Vm, { page: l, matches: f, ...i }) : /* @__PURE__ */ E.createElement(Qm, { page: l, matches: f, ...i }) : null;
}
function Wm(l) {
  let { manifest: i, routeModules: s } = Fi(), [c, f] = E.useState([]);
  return E.useEffect(() => {
    let p = !1;
    return Om(l, i, s).then(
      (v) => {
        p || f(v);
      }
    ), () => {
      p = !0;
    };
  }, [l, i, s]), c;
}
function Vm({
  page: l,
  matches: i,
  ...s
}) {
  let c = Dt(), { future: f } = Fi(), { basename: p } = Ii(), v = E.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let _ = fd(
      l,
      p,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), w = !1, C = [];
    for (let P of i)
      typeof P.route.shouldRevalidate == "function" ? w = !0 : C.push(P.route.id);
    return w && C.length > 0 && _.searchParams.set("_routes", C.join(",")), [_.pathname + _.search];
  }, [
    p,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    i
  ]);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, v.map((_) => /* @__PURE__ */ E.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...s })));
}
function Qm({
  page: l,
  matches: i,
  ...s
}) {
  let c = Dt(), { future: f, manifest: p, routeModules: v } = Fi(), { basename: _ } = Ii(), { loaderData: w, matches: C } = Um(), P = E.useMemo(
    () => Vc(
      l,
      i,
      C,
      p,
      c,
      "data"
    ),
    [l, i, C, p, c]
  ), x = E.useMemo(
    () => Vc(
      l,
      i,
      C,
      p,
      c,
      "assets"
    ),
    [l, i, C, p, c]
  ), I = E.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let F = /* @__PURE__ */ new Set(), T = !1;
    if (i.forEach(($) => {
      var G;
      let j = p.routes[$.route.id];
      !j || !j.hasLoader || (!P.some((te) => te.route.id === $.route.id) && $.route.id in w && ((G = v[$.route.id]) != null && G.shouldRevalidate) || j.hasClientLoader ? T = !0 : F.add($.route.id));
    }), F.size === 0)
      return [];
    let L = fd(
      l,
      _,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return T && F.size > 0 && L.searchParams.set(
      "_routes",
      i.filter(($) => F.has($.route.id)).map(($) => $.route.id).join(",")
    ), [L.pathname + L.search];
  }, [
    _,
    f.v8_trailingSlashAwareDataRequests,
    w,
    c,
    p,
    P,
    i,
    l,
    v
  ]), A = E.useMemo(
    () => Fm(x, p),
    [x, p]
  ), U = Wm(x);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, I.map((F) => /* @__PURE__ */ E.createElement("link", { key: F, rel: "prefetch", as: "fetch", href: F, ...s })), A.map((F) => /* @__PURE__ */ E.createElement("link", { key: F, rel: "modulepreload", href: F, ...s })), U.map(({ key: F, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ E.createElement(
      "link",
      {
        key: F,
        nonce: s.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function Km(...l) {
  return (i) => {
    l.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var qm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  qm && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Ym({
  basename: l,
  children: i,
  useTransitions: s,
  window: c
}) {
  let f = E.useRef();
  f.current == null && (f.current = Tp({ window: c, v5Compat: !0 }));
  let p = f.current, [v, _] = E.useState({
    action: p.action,
    location: p.location
  }), w = E.useCallback(
    (C) => {
      s === !1 ? _(C) : E.startTransition(() => _(C));
    },
    [s]
  );
  return E.useLayoutEffect(() => p.listen(w), [p, w]), /* @__PURE__ */ E.createElement(
    Sm,
    {
      basename: l,
      children: i,
      location: v.location,
      navigationType: v.action,
      navigator: p,
      useTransitions: s
    }
  );
}
var pd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, md = E.forwardRef(
  function({
    onClick: i,
    discover: s = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: p,
    replace: v,
    mask: _,
    state: w,
    target: C,
    to: P,
    preventScrollReset: x,
    viewTransition: I,
    defaultShouldRevalidate: A,
    ...U
  }, F) {
    let { basename: T, navigator: L, useTransitions: $ } = E.useContext(ut), j = typeof P == "string" && pd.test(P), G = nd(P, T);
    P = G.to;
    let te = sm(P, { relative: f }), re = Dt(), ie = null;
    if (_) {
      let Ce = ha(
        _,
        [],
        re.mask ? re.mask.pathname : "/",
        !0
      );
      T !== "/" && (Ce.pathname = Ce.pathname === "/" ? T : xt([T, Ce.pathname])), ie = L.createHref(Ce);
    }
    let [Pe, Se, Te] = Bm(
      c,
      U
    ), yt = Jm(P, {
      replace: v,
      mask: _,
      state: w,
      target: C,
      preventScrollReset: x,
      relative: f,
      viewTransition: I,
      defaultShouldRevalidate: A,
      useTransitions: $
    });
    function Xe(Ce) {
      i && i(Ce), Ce.defaultPrevented || yt(Ce);
    }
    let Fe = !(G.isExternal || p), Le = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ E.createElement(
        "a",
        {
          ...U,
          ...Te,
          href: (Fe ? ie : void 0) || G.absoluteURL || te,
          onClick: Fe ? Xe : i,
          ref: Km(F, Se),
          target: C,
          "data-discover": !j && s === "render" ? "true" : void 0
        }
      )
    );
    return Pe && !j ? /* @__PURE__ */ E.createElement(E.Fragment, null, Le, /* @__PURE__ */ E.createElement(Hm, { page: te })) : Le;
  }
);
md.displayName = "Link";
var hd = E.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: p,
    to: v,
    viewTransition: _,
    children: w,
    ...C
  }, P) {
    let x = Qr(v, { relative: C.relative }), I = Dt(), A = E.useContext(va), { navigator: U, basename: F } = E.useContext(ut), T = A != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    nh(x) && _ === !0, L = U.encodeLocation ? U.encodeLocation(x).pathname : x.pathname, $ = I.pathname, j = A && A.navigation && A.navigation.location ? A.navigation.location.pathname : null;
    s || ($ = $.toLowerCase(), j = j ? j.toLowerCase() : null, L = L.toLowerCase()), j && F && (j = Ht(j, F) || j);
    const G = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let te = $ === L || !f && $.startsWith(L) && $.charAt(G) === "/", re = j != null && (j === L || !f && j.startsWith(L) && j.charAt(L.length) === "/"), ie = {
      isActive: te,
      isPending: re,
      isTransitioning: T
    }, Pe = te ? i : void 0, Se;
    typeof c == "function" ? Se = c(ie) : Se = [
      c,
      te ? "active" : null,
      re ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Te = typeof p == "function" ? p(ie) : p;
    return /* @__PURE__ */ E.createElement(
      md,
      {
        ...C,
        "aria-current": Pe,
        className: Se,
        ref: P,
        style: Te,
        to: v,
        viewTransition: _
      },
      typeof w == "function" ? w(ie) : w
    );
  }
);
hd.displayName = "NavLink";
var Gm = E.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: i,
    navigate: s,
    reloadDocument: c,
    replace: f,
    state: p,
    method: v = ua,
    action: _,
    onSubmit: w,
    relative: C,
    preventScrollReset: P,
    viewTransition: x,
    defaultShouldRevalidate: I,
    ...A
  }, U) => {
    let { useTransitions: F } = E.useContext(ut), T = eh(), L = th(_, { relative: C }), $ = v.toLowerCase() === "get" ? "get" : "post", j = typeof _ == "string" && pd.test(_), G = (te) => {
      if (w && w(te), te.defaultPrevented) return;
      te.preventDefault();
      let re = te.nativeEvent.submitter, ie = (re == null ? void 0 : re.getAttribute("formmethod")) || v, Pe = () => T(re || te.currentTarget, {
        fetcherKey: i,
        method: ie,
        navigate: s,
        replace: f,
        state: p,
        relative: C,
        preventScrollReset: P,
        viewTransition: x,
        defaultShouldRevalidate: I
      });
      F && s !== !1 ? E.startTransition(() => Pe()) : Pe();
    };
    return /* @__PURE__ */ E.createElement(
      "form",
      {
        ref: U,
        method: $,
        action: L,
        onSubmit: c ? w : G,
        ...A,
        "data-discover": !j && l === "render" ? "true" : void 0
      }
    );
  }
);
Gm.displayName = "Form";
function Xm(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function vd(l) {
  let i = E.useContext(bn);
  return ke(i, Xm(l)), i;
}
function Jm(l, {
  target: i,
  replace: s,
  mask: c,
  state: f,
  preventScrollReset: p,
  relative: v,
  viewTransition: _,
  defaultShouldRevalidate: w,
  useTransitions: C
} = {}) {
  let P = Li(), x = Dt(), I = Qr(l, { relative: v });
  return E.useCallback(
    (A) => {
      if (Pm(A, i)) {
        A.preventDefault();
        let U = s !== void 0 ? s : Wr(x) === Wr(I), F = () => P(l, {
          replace: U,
          mask: c,
          state: f,
          preventScrollReset: p,
          relative: v,
          viewTransition: _,
          defaultShouldRevalidate: w
        });
        C ? E.startTransition(() => F()) : F();
      }
    },
    [
      x,
      P,
      I,
      s,
      c,
      f,
      i,
      l,
      p,
      v,
      _,
      w,
      C
    ]
  );
}
var bm = 0, Zm = () => `__${String(++bm)}__`;
function eh() {
  let { router: l } = vd(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = E.useContext(ut), s = _m(), c = l.fetch, f = l.navigate;
  return E.useCallback(
    async (p, v = {}) => {
      let { action: _, method: w, encType: C, formData: P, body: x } = zm(
        p,
        i
      );
      if (v.navigate === !1) {
        let I = v.fetcherKey || Zm();
        await c(I, s, v.action || _, {
          defaultShouldRevalidate: v.defaultShouldRevalidate,
          preventScrollReset: v.preventScrollReset,
          formData: P,
          body: x,
          formMethod: v.method || w,
          formEncType: v.encType || C,
          flushSync: v.flushSync
        });
      } else
        await f(v.action || _, {
          defaultShouldRevalidate: v.defaultShouldRevalidate,
          preventScrollReset: v.preventScrollReset,
          formData: P,
          body: x,
          formMethod: v.method || w,
          formEncType: v.encType || C,
          replace: v.replace,
          state: v.state,
          fromRouteId: s,
          flushSync: v.flushSync,
          viewTransition: v.viewTransition
        });
    },
    [c, f, i, s]
  );
}
function th(l, { relative: i } = {}) {
  let { basename: s } = E.useContext(ut), c = E.useContext(zt);
  ke(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), p = { ...Qr(l || ".", { relative: i }) }, v = Dt();
  if (l == null) {
    p.search = v.search;
    let _ = new URLSearchParams(p.search), w = _.getAll("index");
    if (w.some((P) => P === "")) {
      _.delete("index"), w.filter((x) => x).forEach((x) => _.append("index", x));
      let P = _.toString();
      p.search = P ? `?${P}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (p.pathname = p.pathname === "/" ? s : xt([s, p.pathname])), Wr(p);
}
function nh(l, { relative: i } = {}) {
  let s = E.useContext(ad);
  ke(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = vd(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = Qr(l, { relative: i });
  if (!s.isTransitioning)
    return !1;
  let p = Ht(s.currentLocation.pathname, c) || s.currentLocation.pathname, v = Ht(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return da(f.pathname, v) != null || da(f.pathname, p) != null;
}
const rh = "_tabs_1gqes_1", lh = "_tab_1gqes_1", ah = "_active_1gqes_32", ia = {
  tabs: rh,
  tab: lh,
  active: ah
}, oh = [
  {
    to: "/scripts",
    label: "Скрипты"
  },
  {
    to: "/commands/main",
    label: "Команды основные"
  },
  {
    to: "/commands/sub",
    label: "Команды второстепенные"
  },
  {
    to: "/commands/direct/main",
    label: "Команды прямые"
  },
  {
    to: "/commands/settings",
    label: "Команды настройки"
  },
  {
    to: "/timer",
    label: "Таймер"
  },
  {
    to: "/alarm",
    label: "Будильник"
  },
  {
    to: "/settings",
    label: "Настройки"
  }
], Kr = () => /* @__PURE__ */ d.createElement("div", { className: ia.tabs }, oh.map((l) => /* @__PURE__ */ d.createElement(
  hd,
  {
    key: l.to,
    to: l.to,
    className: ({ isActive: i }) => i ? `${ia.tab} ${ia.active}` : ia.tab
  },
  l.label
))), ih = "_button_1u3jy_1", sh = "_full_1u3jy_20", uh = "_primary_1u3jy_24", ch = "_secondary_1u3jy_33", dh = "_ghost_1u3jy_44", wi = {
  button: ih,
  full: sh,
  primary: uh,
  secondary: ch,
  ghost: dh
}, me = ({
  children: l,
  variant: i = "primary",
  fullWidth: s = !1,
  className: c = "",
  ...f
}) => /* @__PURE__ */ d.createElement(
  "button",
  {
    ...f,
    className: `
        ${wi.button}
        ${wi[i]}
        ${s ? wi.full : ""}
        ${c}
      `
  },
  l
), fh = "_overlay_q6y41_1", ph = "_modal_q6y41_13", mh = "_header_q6y41_25", hh = "_title_q6y41_35", vh = "_body_q6y41_42", yh = "_footer_q6y41_49", gh = "_close_q6y41_59", kn = {
  overlay: fh,
  modal: ph,
  header: mh,
  title: hh,
  body: vh,
  footer: yh,
  close: gh
}, ga = ({
  open: l,
  onClose: i,
  title: s,
  footer: c,
  children: f
}) => (E.useEffect(() => {
  if (!l) return;
  document.body.style.overflow = "hidden";
  const p = (v) => {
    v.key === "Escape" && i();
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
}, [l, i]), l ? /* @__PURE__ */ d.createElement(
  "div",
  {
    className: kn.overlay,
    onClick: i
  },
  /* @__PURE__ */ d.createElement(
    "div",
    {
      className: kn.modal,
      onClick: (p) => p.stopPropagation()
    },
    /* @__PURE__ */ d.createElement("div", { className: kn.header }, s && /* @__PURE__ */ d.createElement("h2", { className: kn.title }, s), /* @__PURE__ */ d.createElement(
      me,
      {
        variant: "ghost",
        className: kn.close,
        onClick: i
      },
      "✕"
    )),
    /* @__PURE__ */ d.createElement("div", { className: kn.body }, f),
    c && /* @__PURE__ */ d.createElement("div", { className: kn.footer }, c)
  )
) : null), yd = ({
  page: l,
  totalPages: i,
  onChange: s
}) => i <= 1 ? null : /* @__PURE__ */ d.createElement("div", { className: "pagination" }, /* @__PURE__ */ d.createElement(
  "button",
  {
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ d.createElement("span", null, l, " / ", i), /* @__PURE__ */ d.createElement(
  "button",
  {
    disabled: l === i,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), _h = "_accordion_1wwmk_1", Eh = "_header_1wwmk_7", wh = "_content_1wwmk_20", sa = {
  accordion: _h,
  header: Eh,
  content: wh
}, Mt = ({
  title: l,
  defaultOpen: i = !1,
  children: s
}) => {
  const [c, f] = E.useState(i);
  return /* @__PURE__ */ d.createElement(
    "div",
    {
      className: sa.accordion,
      "data-open": c
    },
    /* @__PURE__ */ d.createElement(
      "button",
      {
        type: "button",
        className: sa.header,
        onClick: () => f((p) => !p),
        "aria-expanded": c
      },
      /* @__PURE__ */ d.createElement("span", null, l),
      /* @__PURE__ */ d.createElement("span", { className: sa.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ d.createElement("div", { className: sa.content }, s)
  );
}, kh = "_field_fc25i_1", Sh = "_label_fc25i_7", Ch = "_input_fc25i_13", xh = "_error_fc25i_38", Nh = "_errorText_fc25i_46", Ur = {
  field: kh,
  label: Sh,
  input: Ch,
  error: xh,
  errorText: Nh
}, de = ({
  label: l,
  error: i,
  className: s = "",
  ...c
}) => /* @__PURE__ */ d.createElement("div", { className: Ur.field }, l && /* @__PURE__ */ d.createElement("label", { className: Ur.label }, l), /* @__PURE__ */ d.createElement(
  "input",
  {
    ...c,
    className: `
          ${Ur.input}
          ${i ? Ur.error : ""}
          ${s}
        `
  }
), i && /* @__PURE__ */ d.createElement("span", { className: Ur.errorText }, i)), Th = ({
  condition: l,
  index: i,
  defaultOpen: s,
  onChange: c
}) => {
  const [f, p] = E.useState(
    !!l.children_type
  ), [v, _] = E.useState(!!l.children_direct_type);
  return /* @__PURE__ */ d.createElement(
    Mt,
    {
      title: `Условие ${i + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(
      de,
      {
        label: "Parent_type",
        value: l.parent_type,
        onChange: (w) => c({
          ...l,
          parent_type: w.target.value
        })
      }
    )),
    /* @__PURE__ */ d.createElement("div", null, !f && /* @__PURE__ */ d.createElement(me, { onClick: () => p(!0) }, "Добавить children_type"), f && /* @__PURE__ */ d.createElement(
      de,
      {
        label: "children_type",
        value: l.children_type || "",
        onChange: (w) => c({
          ...l,
          children_type: w.target.value
        })
      }
    )),
    /* @__PURE__ */ d.createElement("div", null, !v && /* @__PURE__ */ d.createElement(me, { onClick: () => _(!0) }, "Добавить children_direct_type"), v && /* @__PURE__ */ d.createElement(
      de,
      {
        label: "children_direct_type",
        value: l.children_direct_type || "",
        onChange: (w) => c({
          ...l,
          children_direct_type: w.target.value
        })
      }
    ))
  );
}, Rh = "_dropdown_4l5n9_1", Ph = "_button_4l5n9_6", Lh = "_arrow_4l5n9_28", Mh = "_menu_4l5n9_32", zh = "_active_4l5n9_51", Dh = "_item_4l5n9_58", Sn = {
  dropdown: Rh,
  button: Ph,
  arrow: Lh,
  menu: Mh,
  active: zh,
  item: Dh
};
function Ih({
  options: l,
  value: i,
  placeholder: s = "Выберите",
  onSelect: c
}) {
  const [f, p] = E.useState(!1), v = E.useRef(null), _ = l.find(
    (P) => P.value === i
  ), w = () => {
    p((P) => !P);
  }, C = (P) => {
    c == null || c(P.value), p(!1);
  };
  return E.useEffect(() => {
    const P = (x) => {
      v.current && !v.current.contains(
        x.target
      ) && p(!1);
    };
    return document.addEventListener(
      "mousedown",
      P
    ), () => {
      document.removeEventListener(
        "mousedown",
        P
      );
    };
  }, []), /* @__PURE__ */ d.createElement(
    "div",
    {
      className: `${Sn.dropdown} ${f ? Sn.active : ""}`,
      ref: v
    },
    /* @__PURE__ */ d.createElement(
      "button",
      {
        className: Sn.button,
        onClick: w,
        type: "button"
      },
      /* @__PURE__ */ d.createElement("span", null, (_ == null ? void 0 : _.label) || s),
      /* @__PURE__ */ d.createElement("span", { className: Sn.arrow }, "▼")
    ),
    /* @__PURE__ */ d.createElement("div", { className: Sn.menu }, l.map((P) => /* @__PURE__ */ d.createElement(
      "div",
      {
        key: P.value,
        className: `${Sn.item} ${i === P.value ? Sn.selected : ""}`,
        onClick: () => C(P)
      },
      P.label
    )))
  );
}
const Oh = "_form_1fyva_1", Qc = {
  form: Oh
}, Fh = ({
  initialData: l,
  isOptionData: i,
  isEdit: s,
  onChange: c
}) => {
  const [f, p] = E.useState({
    uuid: (l == null ? void 0 : l.uuid) || "",
    name: (l == null ? void 0 : l.name) || "",
    script_entity_id: (l == null ? void 0 : l.script_entity_id) || "",
    conditions: (l == null ? void 0 : l.conditions) || [
      {
        parent_type: ""
      }
    ]
  }), v = (C) => {
    p(C), c == null || c(C);
  }, _ = () => {
    v({
      ...f,
      conditions: [
        ...f.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, w = (C, P) => {
    const x = [...f.conditions];
    x[C] = P, v({
      ...f,
      conditions: x
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: Qc.form }, /* @__PURE__ */ d.createElement(
    de,
    {
      label: "Название",
      value: f.name,
      onChange: (C) => v({
        ...f,
        name: C.target.value
      })
    }
  ), /* @__PURE__ */ d.createElement(
    Ih,
    {
      options: i.map((C) => ({
        label: C.name,
        value: C.entity_id
      })),
      value: f.script_entity_id,
      onSelect: (C) => v({
        ...f,
        script_entity_id: C
      })
    }
  ), f.conditions.map(
    (C, P) => /* @__PURE__ */ d.createElement(
      Th,
      {
        key: P,
        index: P,
        condition: C,
        defaultOpen: !s,
        onChange: (x) => w(P, x)
      }
    )
  ), /* @__PURE__ */ d.createElement(
    me,
    {
      type: "button",
      className: Qc.addCondition,
      onClick: _
    },
    "+ Добавить условие"
  ));
}, Ah = "_card_b4x7a_1", $h = "_content_b4x7a_28", jh = "_title_b4x7a_34", Uh = "_subtitle_b4x7a_40", Bh = "_arrow_b4x7a_45", Br = {
  card: Ah,
  content: $h,
  title: jh,
  subtitle: Uh,
  arrow: Bh
}, Hh = ({
  title: l,
  onClick: i
}) => /* @__PURE__ */ d.createElement(
  "button",
  {
    type: "button",
    className: Br.card,
    onClick: i
  },
  /* @__PURE__ */ d.createElement("div", { className: Br.content }, /* @__PURE__ */ d.createElement("div", { className: Br.title }, l), /* @__PURE__ */ d.createElement("div", { className: Br.subtitle }, "Нажмите для редактирования")),
  /* @__PURE__ */ d.createElement("div", { className: Br.arrow }, "→")
), Wh = "_page_tlhec_1", Vh = "_header_tlhec_10", Qh = "_title_tlhec_23", Kh = "_description_tlhec_32", Cn = {
  page: Wh,
  header: Vh,
  title: Qh,
  description: Kh
}, gd = E.createContext(null);
function _a() {
  const l = E.useContext(gd);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
function qh() {
  const l = _a(), [i, s] = E.useState(!0), [c, f] = E.useState(null), p = E.useCallback(async () => {
    s(!0);
    try {
      const x = await l._getShort("get_script_actions_short");
      console.log(x), f(x.data);
    } finally {
      s(!1);
    }
  }, [l]);
  return E.useEffect(() => {
    p();
  }, []), {
    loading: i,
    scripts: c,
    loadScripts: p,
    scriptData: () => l.getScripts(),
    saveScript: async (x) => {
      await l._save(x, "save_script_action");
    },
    updateScript: async (x, I) => {
      await l._update(x, "update_script_action", I), await p();
    },
    getScriptAction: async (x) => (await l._getDetail(
      x,
      "get_script_action"
    )).data,
    deleteScriptAction: async (x) => {
      await l._delete(x, "delete_script_action"), await p();
    }
  };
}
const Yh = () => {
  const [l, i] = E.useState(), [s, c] = E.useState(), [f, p] = E.useState(!1), [v, _] = E.useState(!1), {
    loading: w,
    scripts: C,
    scriptData: P,
    saveScript: x,
    updateScript: I,
    getScriptAction: A,
    deleteScriptAction: U
  } = qh(), F = () => {
    c(void 0), _(!1), p(!0);
  }, T = async ($) => {
    _(!0);
    const j = await A(
      $.uuid
    );
    c(j), p(!0);
  }, L = async () => {
    if (v) {
      const $ = l == null ? void 0 : l.uuid;
      l == null || delete l.uuid, await I($, l);
    } else
      await x(l);
    p(!1);
  };
  return /* @__PURE__ */ d.createElement("div", { className: Cn.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: Cn.header }, /* @__PURE__ */ d.createElement("div", { className: Cn.heading }, /* @__PURE__ */ d.createElement("h1", { className: Cn.title }, "Создание запускающих скриптов"), /* @__PURE__ */ d.createElement("p", { className: Cn.description }, "Создавайте и редактируйте автоматизации и условия")), /* @__PURE__ */ d.createElement("div", { className: Cn.actions }, /* @__PURE__ */ d.createElement(
    me,
    {
      variant: "primary",
      onClick: F
    },
    "Добавить сценарий"
  ))), w && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Cn.list }, C == null ? void 0 : C.map(($) => /* @__PURE__ */ d.createElement(
    Hh,
    {
      key: $.uuid,
      title: $.title,
      onClick: () => T($)
    }
  ))), /* @__PURE__ */ d.createElement(
    yd,
    {
      page: (C == null ? void 0 : C.page) || 1,
      totalPages: (C == null ? void 0 : C.total_pages) || 1,
      onChange: ($) => {
        console.log($);
      }
    }
  ), /* @__PURE__ */ d.createElement(
    ga,
    {
      open: f,
      onClose: () => p(!1),
      title: v ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ d.createElement(d.Fragment, null, v && /* @__PURE__ */ d.createElement(
        me,
        {
          variant: "ghost",
          onClick: async () => {
            s != null && s.uuid && (await U(
              s.uuid
            ), p(!1));
          }
        },
        "Удалить"
      ), /* @__PURE__ */ d.createElement(
        me,
        {
          onClick: L
        },
        "Сохранить"
      ))
    },
    /* @__PURE__ */ d.createElement(
      Fh,
      {
        initialData: s,
        isEdit: v,
        isOptionData: P(),
        onChange: i
      }
    )
  ));
}, Gh = "_page_zolbx_1", Xh = "_header_zolbx_10", Jh = "_headerTop_zolbx_16", bh = "_title_zolbx_23", Zh = "_description_zolbx_32", ev = "_state_zolbx_98", tv = "_commandList_zolbx_102", nv = "_commandTab_zolbx_107", rv = "_commandButton_zolbx_114", lv = "_moreButton_zolbx_115", av = "_form_zolbx_153", ov = "_checkboxRow_zolbx_159", iv = "_field_zolbx_167", sv = "_textarea_zolbx_176", uv = "_arrayItem_zolbx_189", cv = "_sheetOverlay_zolbx_207", dv = "_bottomSheet_zolbx_217", fv = "_sheetHandle_zolbx_235", pv = "_innerTabs_zolbx_249", mv = "_innerTab_zolbx_249", hv = "_activeInnerTab_zolbx_270", ae = {
  page: Gh,
  header: Xh,
  headerTop: Jh,
  title: bh,
  description: Zh,
  state: ev,
  commandList: tv,
  commandTab: nv,
  commandButton: rv,
  moreButton: lv,
  form: av,
  checkboxRow: ov,
  field: iv,
  textarea: sv,
  arrayItem: uv,
  sheetOverlay: cv,
  bottomSheet: dv,
  sheetHandle: fv,
  innerTabs: pv,
  innerTab: mv,
  activeInnerTab: hv
}, vv = [
  { key: "main", label: "Основной" },
  { key: "template", label: "Шаблон" }
], Hr = {
  primary: {
    key: "primary",
    label: "Основная команда",
    kind: "dialog",
    shortType: "get_assistant_commands_short",
    detailType: "get_assistant_command",
    saveType: "save_assistant_command",
    updateType: "update_assistant_command",
    deleteType: "delete_assistant_command",
    componentKey: "componentDialog",
    hasStatus: !0
  },
  secondary: {
    key: "secondary",
    label: "Второстепенная команда",
    kind: "dialog",
    shortType: "get_assistant_sub_commands_short",
    detailType: "get_assistant_sub_command",
    saveType: "save_assistant_sub_command",
    updateType: "update_assistant_sub_command",
    deleteType: "delete_assistant_sub_command",
    componentKey: "subComponentDialog",
    hasStatus: !0,
    hasForwardText: !0
  },
  directMain: {
    key: "directMain",
    label: "Прямая команда",
    kind: "direct",
    shortType: "get_assistant_sub_direct_controls_short",
    detailType: "get_assistant_sub_direct_control",
    saveType: "save_assistant_sub_direct_control",
    updateType: "update_assistant_sub_direct_control",
    deleteType: "delete_assistant_sub_direct_control",
    hasStatus: !0
  },
  directTemplate: {
    key: "directTemplate",
    label: "Шаблон прямой команды",
    kind: "template",
    shortType: "get_assistant_sub_direct_control_samples_short",
    detailType: "get_assistant_sub_direct_control_sample",
    saveType: "save_assistant_sub_direct_control_sample",
    updateType: "update_assistant_sub_direct_control_sample",
    deleteType: "delete_assistant_sub_direct_control_sample",
    hasStatus: !1
  },
  settings: {
    key: "settings",
    label: "Настройки команды",
    kind: "assistantSettings",
    shortType: "get_assistant_settings_short",
    detailType: "get_assistant_setting",
    saveType: "save_assistant_setting",
    updateType: "update_assistant_setting",
    deleteType: "delete_assistant_setting",
    hasStatus: !1
  }
}, _d = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), ki = (l) => l.kind === "dialog" ? {
  status: !0,
  title: "",
  [l.componentKey ?? "componentDialog"]: {
    ..._d(),
    ...l.hasForwardText ? { forwardText: !1 } : {}
  }
} : l.kind === "direct" ? {
  status: !0,
  title: "",
  directControl: {
    mappingType: "",
    valueType: "all",
    voiceCommands: [],
    manual: !1,
    subDirectControl: ""
  }
} : l.kind === "assistantSettings" ? {
  title: "",
  actionType: "",
  message: null,
  endStatus: !1
} : {
  title: "",
  subDirectControl: [{ subMappingType: "", title: null, subVoiceCommands: "" }]
}, yv = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
}), qr = ({ configKey: l }) => {
  const i = _a(), s = Li(), [c, f] = E.useState(l === "directTemplate" ? "template" : "main"), [p, v] = E.useState(null), [_, w] = E.useState(!1), [C, P] = E.useState(!1), [x, I] = E.useState(!1), [A, U] = E.useState(() => ki(Hr[l])), [F, T] = E.useState(null), L = E.useMemo(() => l === "directMain" || l === "directTemplate" ? c === "main" ? Hr.directMain : Hr.directTemplate : Hr[l], [c, l]), $ = E.useMemo(() => {
    if (L.kind === "dialog")
      return A[L.componentKey ?? "componentDialog"];
  }, [L, A]), j = A.directControl, G = Array.isArray(A.subDirectControl) ? A.subDirectControl : [], te = Array.isArray(j == null ? void 0 : j.subDirectControl) ? j.subDirectControl : [], re = async (m = 1) => {
    w(!0);
    try {
      const N = await i._getShort(L.shortType, m);
      v(yv(N));
    } finally {
      w(!1);
    }
  };
  E.useEffect(() => {
    re();
  }, [L]);
  const ie = () => {
    I(!1), U(ki(L)), P(!0);
  }, Pe = async (m) => {
    I(!0);
    const N = await i._getDetail(m.uuid, L.detailType);
    U(N.data), P(!0);
  }, Se = (m) => {
    const N = L.componentKey ?? "componentDialog";
    U((H) => ({
      ...H,
      [N]: {
        ...H[N] ?? _d(),
        ...m
      }
    }));
  }, Te = (m) => {
    U((N) => ({
      ...N,
      directControl: {
        ...N.directControl ?? ki(Hr.directMain).directControl,
        ...m
      }
    }));
  }, yt = async () => {
    if (x && A.uuid) {
      const { uuid: m, ...N } = A;
      await i._update(m, L.updateType, N);
    } else
      await i._save(A, L.saveType);
    P(!1), await re((p == null ? void 0 : p.page) ?? 1);
  }, Xe = async (m) => {
    await i._delete(m, L.deleteType), T(null), await re((p == null ? void 0 : p.page) ?? 1);
  }, Fe = async (m) => {
    await i._update(m.uuid, L.updateType, { status: !0 }), T(null), await re((p == null ? void 0 : p.page) ?? 1);
  }, Le = (m, N, H) => {
    const ee = [...($ == null ? void 0 : $[m]) ?? []];
    ee[N] = { ...ee[N], ...H }, Se({ [m]: ee });
  }, Ce = (m, N) => {
    Se({ [m]: [...($ == null ? void 0 : $[m]) ?? [], N] });
  }, Ae = (m, N) => {
    Se({ [m]: (($ == null ? void 0 : $[m]) ?? []).filter((H, ee) => ee !== N) });
  }, he = (m, N, H) => {
    const ee = m === "direct" ? [...te] : [...G];
    ee[N] = { ...ee[N], ...H }, m === "direct" ? Te({ subDirectControl: ee }) : U((oe) => ({ ...oe, subDirectControl: ee }));
  }, B = (m) => {
    const N = { subMappingType: "", title: null, subVoiceCommands: "" };
    m === "direct" ? Te({ subDirectControl: [...te, N] }) : U((H) => ({ ...H, subDirectControl: [...G, N] }));
  }, X = (m, N) => {
    const H = (m === "direct" ? te : G).filter((ee, oe) => oe !== N);
    m === "direct" ? Te({ subDirectControl: H }) : U((ee) => ({ ...ee, subDirectControl: H }));
  }, V = `${x ? "Редактировать" : "Создать"}: ${L.label}`;
  return /* @__PURE__ */ d.createElement("div", { className: ae.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: ae.header }, /* @__PURE__ */ d.createElement("div", { className: ae.headerTop }, /* @__PURE__ */ d.createElement("div", { className: ae.heading }, /* @__PURE__ */ d.createElement("h1", { className: ae.title }, L.label), /* @__PURE__ */ d.createElement("p", { className: ae.description }, "Создавайте и редактируйте голосовые команды ассистента.")), /* @__PURE__ */ d.createElement(me, { onClick: ie }, "Создать команду")), (l === "directMain" || l === "directTemplate") && /* @__PURE__ */ d.createElement("div", { className: ae.innerTabs }, vv.map((m) => /* @__PURE__ */ d.createElement(
    "button",
    {
      key: m.key,
      type: "button",
      className: `${ae.innerTab} ${c === m.key ? ae.activeInnerTab : ""}`,
      onClick: () => {
        f(m.key), s(`/commands/direct/${m.key === "main" ? "main" : "template"}`);
      }
    },
    m.label
  )))), _ && /* @__PURE__ */ d.createElement("div", { className: ae.state }, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: ae.commandList }, p == null ? void 0 : p.data.map((m) => /* @__PURE__ */ d.createElement("div", { key: m.uuid, className: ae.commandTab }, /* @__PURE__ */ d.createElement("button", { type: "button", className: ae.commandButton, onClick: () => Pe(m) }, /* @__PURE__ */ d.createElement("span", null, m.title), L.hasStatus && /* @__PURE__ */ d.createElement("small", null, m.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      className: ae.moreButton,
      "aria-label": `Действия команды ${m.title}`,
      onClick: () => T(m)
    },
    "⋯"
  )))), /* @__PURE__ */ d.createElement(
    yd,
    {
      page: (p == null ? void 0 : p.page) || 1,
      totalPages: (p == null ? void 0 : p.total_pages) || 1,
      onChange: re
    }
  ), /* @__PURE__ */ d.createElement(
    ga,
    {
      open: C,
      onClose: () => P(!1),
      title: V,
      footer: /* @__PURE__ */ d.createElement(me, { onClick: yt }, "Сохранить")
    },
    /* @__PURE__ */ d.createElement("div", { className: ae.form }, L.hasStatus && /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: A.status ?? !0, onChange: (m) => U({ ...A, status: m.target.checked }) }), "Команда включена"), /* @__PURE__ */ d.createElement(de, { label: "Название команды", value: A.title, onChange: (m) => U({ ...A, title: m.target.value }) }), L.kind === "dialog" && $ && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: $.endStatus, onChange: (m) => Se({ endStatus: m.target.checked }) }), "Завершать диалог"), L.hasForwardText && /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!$.forwardText, onChange: (m) => Se({ forwardText: m.target.checked }) }), "forwardText"), /* @__PURE__ */ d.createElement(de, { label: "actionType", value: $.actionType ?? "", onChange: (m) => Se({ actionType: m.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "answerType", value: $.answerType ?? "", onChange: (m) => Se({ answerType: m.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "voiceCommands"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ae.textarea,
        value: ($.voiceCommands ?? []).join(`
`),
        onChange: (m) => Se({ voiceCommands: m.target.value.split(`
`) }),
        rows: 6
      }
    )), /* @__PURE__ */ d.createElement(Mt, { title: "nextDirectControl", defaultOpen: !0 }, ($.nextDirectControl ?? []).map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "uuid", value: m.uuid ?? "", onChange: (H) => Le("nextDirectControl", N, { uuid: H.target.value }) }), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => Ae("nextDirectControl", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => Ce("nextDirectControl", { uuid: "" }) }, "Добавить ещё")), /* @__PURE__ */ d.createElement(Mt, { title: "voiceResponseArray", defaultOpen: !0 }, ($.voiceResponseArray ?? []).map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "actionType", value: m.actionType ?? "", onChange: (H) => Le("voiceResponseArray", N, { actionType: H.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "voiceResponse", value: m.voiceResponse ?? "", onChange: (H) => Le("voiceResponseArray", N, { voiceResponse: H.target.value }) }), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => Ae("voiceResponseArray", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => Ce("voiceResponseArray", { actionType: "", voiceResponse: "" }) }, "Добавить ещё")), /* @__PURE__ */ d.createElement(Mt, { title: "nextAction", defaultOpen: !0 }, ($.nextAction ?? []).map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "actionTypeComponent", value: m.actionTypeComponent ?? "", onChange: (H) => Le("nextAction", N, { actionTypeComponent: H.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "actionType", value: m.actionType ?? "", onChange: (H) => Le("nextAction", N, { actionType: H.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "uuid", value: m.uuid ?? "", onChange: (H) => Le("nextAction", N, { uuid: H.target.value }) }), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => Ae("nextAction", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => Ce("nextAction", { actionTypeComponent: "", actionType: "", uuid: "" }) }, "Добавить ещё"))), L.kind === "direct" && j && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(de, { label: "directControl.mappingType", value: j.mappingType ?? "", onChange: (m) => Te({ mappingType: m.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "directControl.valueType", value: j.valueType ?? "", onChange: (m) => Te({ valueType: m.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "voiceCommands"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ae.textarea,
        value: Array.isArray(j.voiceCommands) ? j.voiceCommands.join(`
`) : "",
        onChange: (m) => Te({ voiceCommands: m.target.value.split(`
`).filter(Boolean) }),
        rows: 5
      }
    )), /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement(
      "input",
      {
        type: "checkbox",
        checked: !!j.manual,
        onChange: (m) => Te({ manual: m.target.checked, subDirectControl: m.target.checked ? [] : "" })
      }
    ), "manual"), j.manual ? /* @__PURE__ */ d.createElement(Mt, { title: "directControl.subDirectControl", defaultOpen: !0 }, te.map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "subMappingType", value: m.subMappingType ?? "", onChange: (H) => he("direct", N, { subMappingType: H.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ d.createElement("textarea", { className: ae.textarea, value: m.subVoiceCommands ?? "", onChange: (H) => he("direct", N, { subVoiceCommands: H.target.value }), rows: 3 })), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => X("direct", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => B("direct") }, "Добавить ещё")) : /* @__PURE__ */ d.createElement(de, { label: "directControl.subDirectControl", value: typeof j.subDirectControl == "string" ? j.subDirectControl : "", onChange: (m) => Te({ subDirectControl: m.target.value }) })), L.kind === "assistantSettings" && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(de, { label: "actionType", value: A.actionType ?? "", onChange: (m) => U({ ...A, actionType: m.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "message"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ae.textarea,
        value: A.message ?? "",
        onChange: (m) => U({ ...A, message: m.target.value || null }),
        rows: 4
      }
    )), /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!A.endStatus, onChange: (m) => U({ ...A, endStatus: m.target.checked }) }), "endStatus")), L.kind === "template" && /* @__PURE__ */ d.createElement(Mt, { title: "subDirectControl", defaultOpen: !0 }, G.map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "subMappingType", value: m.subMappingType ?? "", onChange: (H) => he("template", N, { subMappingType: H.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ d.createElement("textarea", { className: ae.textarea, value: m.subVoiceCommands ?? "", onChange: (H) => he("template", N, { subVoiceCommands: H.target.value }), rows: 3 })), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => X("template", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => B("template") }, "Добавить ещё")))
  ), F && /* @__PURE__ */ d.createElement("div", { className: ae.sheetOverlay, onClick: () => T(null) }, /* @__PURE__ */ d.createElement("div", { className: ae.bottomSheet, onClick: (m) => m.stopPropagation() }, /* @__PURE__ */ d.createElement("div", { className: ae.sheetHandle }), /* @__PURE__ */ d.createElement("h3", null, F.title), L.hasStatus && F.status === !1 && /* @__PURE__ */ d.createElement(me, { fullWidth: !0, onClick: () => Fe(F) }, "Включить"), /* @__PURE__ */ d.createElement(me, { fullWidth: !0, variant: "ghost", onClick: () => Xe(F.uuid) }, "Удалить"))));
}, gv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "primary" }), _v = () => /* @__PURE__ */ d.createElement(qr, { configKey: "secondary" }), Ev = () => /* @__PURE__ */ d.createElement(qr, { configKey: "directMain" }), wv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "directTemplate" }), kv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "settings" }), Sv = "_form_1bj0d_1", Cv = "_field_1bj0d_7", xv = "_input_1bj0d_13", Nv = "_label_1bj0d_32", Tv = "_checkboxRow_1bj0d_38", qe = {
  form: Sv,
  field: Cv,
  input: xv,
  label: Nv,
  checkboxRow: Tv
}, Rv = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(de, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ d.createElement("label", { className: qe.field }, /* @__PURE__ */ d.createElement("span", { className: qe.label }, "Codec"), /* @__PURE__ */ d.createElement("select", { className: qe.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ d.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ d.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ d.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ d.createElement("label", { className: qe.field }, /* @__PURE__ */ d.createElement("span", { className: qe.label }, "Emotion"), /* @__PURE__ */ d.createElement("select", { className: qe.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ d.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ d.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ d.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ d.createElement(de, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, Pv = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(de, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, Lv = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(de, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, Mv = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(
    de,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ d.createElement("label", { className: qe.field }, /* @__PURE__ */ d.createElement("span", { className: qe.label }, "Theme"), /* @__PURE__ */ d.createElement("select", { className: qe.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ d.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ d.createElement("label", { className: qe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Is admin")), /* @__PURE__ */ d.createElement("label", { className: qe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Active remout")), /* @__PURE__ */ d.createElement("label", { className: qe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Enable API /api/dialog/commands")), l.api_commands_enabled && /* @__PURE__ */ d.createElement(
    de,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для /api/dialog/commands",
      type: "password"
    }
  ));
}, zv = "_page_tlhec_1", Dv = {
  page: zv
};
function Iv() {
  const l = _a(), [i, s] = E.useState(!0), [c, f] = E.useState(null), p = E.useCallback(async () => {
    s(!0);
    try {
      const _ = await l._getShort("get_settings");
      console.log(_), f((_ == null ? void 0 : _.result) ?? _);
    } finally {
      s(!1);
    }
  }, [l]);
  return E.useEffect(() => {
    p();
  }, []), {
    loading: i,
    settings: c,
    saveSettings: async (_) => {
      await l._save(_, "save_settings");
    },
    loadScripts: p
  };
}
const Ov = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, pa = {
  base_url: "",
  token: ""
}, Fv = {
  global_music_timer: "",
  global_music_alarm: ""
}, Kc = {
  yandex_tts: Ov,
  remout: pa,
  timer_alarm: Fv,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, Av = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), $v = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), jv = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), Uv = (l) => ({
  yandex_tts: Av(l == null ? void 0 : l.yandex_tts),
  remout: $v(l == null ? void 0 : l.remout),
  timer_alarm: jv(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Si = (l, i) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== i[f] && (s[f] = l[f]);
  }), s;
}, Bv = (l, i) => {
  const s = {}, c = Si(l.yandex_tts, i.yandex_tts), f = Si(l.timer_alarm, i.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== i.theme && (s.theme = l.theme), l.is_admin !== i.is_admin && (s.is_admin = l.is_admin), l.active_remout !== i.active_remout && (s.active_remout = l.active_remout), l.client_id !== i.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== i.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== i.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const p = Si(l.remout ?? pa, i.remout ?? pa);
    Object.keys(p).length > 0 && (s.remout = p);
  }
  return s;
}, Hv = () => {
  const [l, i] = E.useState(Kc), [s, c] = E.useState(Kc), { settings: f, saveSettings: p } = Iv();
  E.useEffect(() => {
    if (!f) return;
    const _ = Uv(f);
    i(_), c(_);
  }, [f]);
  const v = () => {
    const _ = Bv(l, s);
    p(_);
  };
  return /* @__PURE__ */ d.createElement("div", { className: Dv.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("h1", null, "Настройки"), /* @__PURE__ */ d.createElement(Mt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ d.createElement(
    Mv,
    {
      data: {
        active_remout: l.active_remout,
        is_admin: l.is_admin,
        theme: l.theme,
        client_id: l.client_id,
        api_commands_enabled: l.api_commands_enabled,
        api_commands_token: l.api_commands_token
      },
      onChange: (_) => i({ ...l, ..._ })
    }
  )), /* @__PURE__ */ d.createElement(Mt, { title: "Яндекс TTS" }, /* @__PURE__ */ d.createElement(
    Rv,
    {
      data: l.yandex_tts,
      onChange: (_) => i({ ...l, yandex_tts: _ })
    }
  )), l.active_remout && /* @__PURE__ */ d.createElement(Mt, { title: "Remote" }, /* @__PURE__ */ d.createElement(
    Pv,
    {
      data: l.remout ?? pa,
      onChange: (_) => i({ ...l, remout: _ })
    }
  )), /* @__PURE__ */ d.createElement(Mt, { title: "Timer / Alarm" }, /* @__PURE__ */ d.createElement(
    Lv,
    {
      data: l.timer_alarm,
      onChange: (_) => i({ ...l, timer_alarm: _ })
    }
  )), /* @__PURE__ */ d.createElement(me, { onClick: v }, "Сохранить"));
}, xn = (l) => {
  var i;
  return ((i = l == null ? void 0 : l.result) == null ? void 0 : i.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, Wv = (l) => {
  const i = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + i * 60 * 1e3).toISOString();
}, Ed = (l) => {
  if (typeof l == "number") return l;
  if (typeof l == "string") {
    const i = l.split(":").map((s) => Number(s));
    return i.length === 3 ? (i[0] || 0) * 3600 + (i[1] || 0) * 60 + (i[2] || 0) : i.length === 2 ? (i[0] || 0) * 60 + (i[1] || 0) : Number(l) || 0;
  }
  if (l && typeof l == "object") {
    if (l.date_end) {
      const i = Date.parse(l.date_end);
      if (!Number.isNaN(i))
        return Math.max(0, Math.ceil((i - Date.now()) / 1e3));
    }
    return Number(l.total_seconds) || Ed(l.count_timer || "");
  }
  return 0;
}, Vv = (l) => {
  const i = Math.max(1, Number(l) || 1), s = Math.floor(i / 60), c = i % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, Ci = (l) => {
  const i = xn(l);
  return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.data) ? i.data : [];
};
function wd() {
  const l = _a(), [i, s] = E.useState([]), [c, f] = E.useState([]), [p, v] = E.useState([]), [_, w] = E.useState(!0), C = E.useMemo(() => l.getDevices(), [l]), P = E.useCallback(async () => {
    const j = await l._getShort("get_timer_requests_short", 1, 100), G = await Promise.all(
      Ci(j).map(async (te) => {
        var ie;
        const re = await l._getDetail(te.uuid, "get_timer_request");
        return ((ie = xn(re)) == null ? void 0 : ie.data) ?? xn(re);
      })
    );
    s(G.filter((te) => !!te && te.action_type === "create_timer"));
  }, [l]), x = E.useCallback(async () => {
    const j = await l._getShort("get_alarm_requests_short", 1, 100), G = await Promise.all(
      Ci(j).map(async (te) => {
        var ie;
        const re = await l._getDetail(te.uuid, "get_alarm_request");
        return ((ie = xn(re)) == null ? void 0 : ie.data) ?? xn(re);
      })
    );
    f(G.filter((te) => !!te && te.action_type !== "delete_alarm"));
  }, [l]), I = E.useCallback(async () => {
    const j = await l._getShort("get_alarm_time_widgets_short", 1, 100), G = await Promise.all(
      Ci(j).map(async (te) => {
        var ie;
        const re = await l._getDetail(te.uuid, "get_alarm_time_widget");
        return ((ie = xn(re)) == null ? void 0 : ie.data) ?? xn(re);
      })
    );
    v(G.filter(Boolean));
  }, [l]), A = E.useCallback(async () => {
    w(!0);
    try {
      await Promise.all([P(), x(), I()]);
    } finally {
      w(!1);
    }
  }, [x, I, P]);
  return E.useEffect(() => {
    A();
  }, []), {
    alarmTimeWidgets: p,
    alarms: c,
    createAlarm: async (j, G) => {
      await l._save({ name: `Будильник ${G}`, action_type: "create_alarm", device_id: j, status: "on", time: G }, "save_alarm_request"), await x();
    },
    createTimer: async (j, G) => {
      const te = {
        count_timer: Vv(G),
        date_end: Wv(G),
        total_seconds: Math.max(1, Number(G) || 1) * 60
      };
      await l._save({ name: `Таймер ${G} мин`, action_type: "create_timer", device_id: j, timer_time: te }, "save_timer_request"), await P();
    },
    deleteAlarm: async (j) => {
      await l._delete(j.uuid, "delete_alarm_request"), await x();
    },
    devices: C,
    loading: _,
    stopTimer: async (j) => {
      await l._delete(j.uuid, "delete_timer_request"), await P();
    },
    timers: i,
    toTimerSeconds: Ed,
    updateAlarm: async (j, G) => {
      await l._update(j.uuid, "update_alarm_request", { ...j, action_type: "edit_alarm", ...G }), await x();
    }
  };
}
const Qv = "_page_di7r7_1", Kv = "_header_di7r7_11", qv = "_title_di7r7_18", Yv = "_description_di7r7_25", Gv = "_grid_di7r7_31", Xv = "_card_di7r7_37", Jv = "_empty_di7r7_37", bv = "_cardHeader_di7r7_44", Zv = "_cardTitle_di7r7_51", ey = "_meta_di7r7_56", ty = "_time_di7r7_62", ny = "_form_di7r7_69", ry = "_field_di7r7_75", ly = "_label_di7r7_81", ay = "_select_di7r7_87", oy = "_input_di7r7_87", iy = "_quickTabs_di7r7_97", sy = "_quickTab_di7r7_97", uy = "_activeQuickTab_di7r7_113", cy = "_row_di7r7_118", Z = {
  page: Qv,
  header: Kv,
  title: qv,
  description: Yv,
  grid: Gv,
  card: Xv,
  empty: Jv,
  cardHeader: bv,
  cardTitle: Zv,
  meta: ey,
  time: ty,
  form: ny,
  field: ry,
  label: ly,
  select: ay,
  input: oy,
  quickTabs: iy,
  quickTab: sy,
  activeQuickTab: uy,
  row: cy,
  switch: "_switch_di7r7_124"
}, dy = [5, 10, 15, 30, 60], fy = (l) => {
  const i = Math.max(0, l), s = Math.floor(i / 3600), c = Math.floor(i % 3600 / 60), f = i % 60;
  return [s, c, f].map((p) => String(p).padStart(2, "0")).join(":");
}, py = () => {
  const { createTimer: l, devices: i, loading: s, stopTimer: c, timers: f, toTimerSeconds: p } = wd(), [v, _] = E.useState(!1), [w, C] = E.useState(""), [P, x] = E.useState(5), [I, A] = E.useState({});
  E.useEffect(() => {
    A((T) => Object.fromEntries(f.map((L) => [L.uuid, T[L.uuid] ?? p(L.timer_time)])));
  }, [f, p]), E.useEffect(() => {
    const T = window.setInterval(() => {
      A((L) => Object.fromEntries(Object.entries(L).map(([$, j]) => [$, Math.max(0, j - 1)])));
    }, 1e3);
    return () => window.clearInterval(T);
  }, []);
  const U = E.useMemo(() => new Map(i.map((T) => [T.id, T.name])), [i]), F = async () => {
    w && (await l(w, P), _(!1));
  };
  return /* @__PURE__ */ d.createElement("div", { className: Z.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: Z.header }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h1", { className: Z.title }, "Таймер"), /* @__PURE__ */ d.createElement("p", { className: Z.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ d.createElement(me, { onClick: () => _(!0) }, "Создать")), s && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Z.grid }, f.length ? f.map((T) => /* @__PURE__ */ d.createElement("div", { className: Z.card, key: T.uuid }, /* @__PURE__ */ d.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", { className: Z.cardTitle }, T.name || "Таймер"), /* @__PURE__ */ d.createElement("div", { className: Z.meta }, "Устройство: ", U.get(T.device_id) || T.device_id)), /* @__PURE__ */ d.createElement(me, { variant: "ghost", onClick: () => c(T) }, "Стоп")), /* @__PURE__ */ d.createElement("div", { className: Z.time }, fy(I[T.uuid] ?? p(T.timer_time))))) : /* @__PURE__ */ d.createElement("div", { className: Z.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ d.createElement(ga, { open: v, onClose: () => _(!1), title: "Создать таймер", footer: /* @__PURE__ */ d.createElement(me, { onClick: F, disabled: !w }, "Создать") }, /* @__PURE__ */ d.createElement("div", { className: Z.form }, /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ d.createElement("select", { className: Z.select, value: w, onChange: (T) => C(T.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Выберите устройство"), i.map((T) => /* @__PURE__ */ d.createElement("option", { key: T.id, value: T.id }, T.name)))), /* @__PURE__ */ d.createElement("div", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ d.createElement("div", { className: Z.quickTabs }, dy.map((T) => /* @__PURE__ */ d.createElement("button", { key: T, type: "button", className: `${Z.quickTab} ${P === T ? Z.activeQuickTab : ""}`, onClick: () => x(T) }, T, " мин")))), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Свое значение, минут"), /* @__PURE__ */ d.createElement("input", { className: Z.input, type: "number", min: "1", value: P, onChange: (T) => x(Number(T.target.value) || 1) })))));
}, my = () => {
  const { alarmTimeWidgets: l, alarms: i, createAlarm: s, deleteAlarm: c, devices: f, loading: p, updateAlarm: v } = wd(), [_, w] = E.useState(!1), [C, P] = E.useState(""), [x, I] = E.useState("08:00"), A = E.useMemo(() => {
    const T = l.flatMap((L) => L.time || []);
    return Array.from(new Set(T)).filter(Boolean);
  }, [l]), U = E.useMemo(() => new Map(f.map((T) => [T.id, T.name])), [f]), F = async () => {
    !C || !x || (await s(C, x), w(!1));
  };
  return /* @__PURE__ */ d.createElement("div", { className: Z.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: Z.header }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h1", { className: Z.title }, "Будильник"), /* @__PURE__ */ d.createElement("p", { className: Z.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ d.createElement(me, { onClick: () => w(!0) }, "Создать")), p && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Z.grid }, i.length ? i.map((T) => /* @__PURE__ */ d.createElement("div", { className: Z.card, key: T.uuid }, /* @__PURE__ */ d.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", { className: Z.cardTitle }, T.name || "Будильник"), /* @__PURE__ */ d.createElement("div", { className: Z.meta }, "Устройство: ", U.get(T.device_id) || T.device_id)), /* @__PURE__ */ d.createElement(me, { variant: "ghost", onClick: () => c(T) }, "Удалить")), /* @__PURE__ */ d.createElement("label", { className: `${Z.row} ${Z.meta}` }, /* @__PURE__ */ d.createElement("input", { className: Z.switch, type: "checkbox", checked: T.status !== "off", onChange: (L) => v(T, { status: L.target.checked ? "on" : "off" }) }), T.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ d.createElement("input", { className: Z.input, type: "time", value: T.time, onChange: (L) => v(T, { time: L.target.value }) })))) : /* @__PURE__ */ d.createElement("div", { className: Z.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ d.createElement(ga, { open: _, onClose: () => w(!1), title: "Создать будильник", footer: /* @__PURE__ */ d.createElement(me, { onClick: F, disabled: !C || !x }, "Создать") }, /* @__PURE__ */ d.createElement("div", { className: Z.form }, /* @__PURE__ */ d.createElement("div", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ d.createElement("div", { className: Z.quickTabs }, A.length ? A.map((T) => /* @__PURE__ */ d.createElement("button", { key: T, type: "button", className: `${Z.quickTab} ${x === T ? Z.activeQuickTab : ""}`, onClick: () => I(T) }, T)) : /* @__PURE__ */ d.createElement("span", { className: Z.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ d.createElement("select", { className: Z.select, value: C, onChange: (T) => P(T.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Выберите устройство"), f.map((T) => /* @__PURE__ */ d.createElement("option", { key: T.id, value: T.id }, T.name)))), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ d.createElement("input", { className: Z.input, type: "time", value: x, onChange: (T) => I(T.target.value) })))));
}, hy = () => /* @__PURE__ */ d.createElement(Cm, null, /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/",
    element: /* @__PURE__ */ d.createElement(
      aa,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/scripts",
    element: /* @__PURE__ */ d.createElement(Yh, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands",
    element: /* @__PURE__ */ d.createElement(
      aa,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ d.createElement(gv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ d.createElement(_v, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ d.createElement(
      aa,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ d.createElement(Ev, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ d.createElement(wv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ d.createElement(kv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/timer",
    element: /* @__PURE__ */ d.createElement(py, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/alarm",
    element: /* @__PURE__ */ d.createElement(my, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/settings",
    element: /* @__PURE__ */ d.createElement(Hv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "*",
    element: /* @__PURE__ */ d.createElement(
      aa,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), vy = () => /* @__PURE__ */ d.createElement(hy, null);
class yy {
  constructor(i) {
    this.hass = i;
  }
  async _getShort(i, s, c) {
    const f = await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      ...s ? { page: s } : {},
      ...c ? { page_size: c } : {}
    });
    return console.log("WS <=", f), f;
  }
  async _getDetail(i, s) {
    return await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: i
    });
  }
  async _save(i, s) {
    return console.log(i), this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      data: i
    });
  }
  async _update(i, s, c) {
    return console.log(c), this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: i,
      data: c
    });
  }
  async _delete(i, s) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: i
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((i) => {
      const s = String(i.entity_id || "");
      return s.startsWith("media_player.") || s.startsWith("speaker.");
    }).map((i) => {
      var s;
      return {
        id: i.entity_id,
        name: ((s = i.attributes) == null ? void 0 : s.friendly_name) ?? i.entity_id
      };
    });
  }
  getScripts() {
    return Object.values(this.hass.states).filter(
      (i) => i.entity_id.startsWith("script.")
    ).map((i) => {
      var s;
      return {
        entity_id: i.entity_id,
        name: ((s = i.attributes) == null ? void 0 : s.friendly_name) ?? i.entity_id
      };
    });
  }
  async runScript(i) {
    return this.hass.connection.sendMessagePromise({
      type: "call_service",
      domain: "script",
      service: "turn_on",
      service_data: {
        entity_id: i
      }
    });
  }
}
const gy = 1, ma = 2, xi = 3, _y = 4, Ey = 5;
function wy(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function ky() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function Sy(l) {
  const i = {
    type: "subscribe_events"
  };
  return l && (i.event_type = l), i;
}
function qc(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function Cy() {
  return {
    type: "ping"
  };
}
function xy(l, i) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: i
    }
  };
}
const Ny = (l, i, s, c) => {
  const [f, p, v] = l.split(".", 3);
  return Number(f) > i || Number(f) === i && Number(p) >= s || c !== void 0;
}, Ty = "auth_invalid", Ry = "auth_ok";
function Py(l) {
  if (!l.auth)
    throw _y;
  const i = l.auth;
  let s = i.expired ? i.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const c = i.wsUrl;
  function f(p, v, _) {
    const w = new WebSocket(c);
    let C = !1;
    const P = () => {
      if (w.removeEventListener("close", P), C) {
        _(ma);
        return;
      }
      if (p === 0) {
        _(gy);
        return;
      }
      const A = p === -1 ? -1 : p - 1;
      setTimeout(() => f(A, v, _), 1e3);
    }, x = async (A) => {
      try {
        i.expired && await (s || i.refreshAccessToken()), w.send(JSON.stringify(wy(i.accessToken)));
      } catch (U) {
        C = U === ma, w.close();
      }
    }, I = async (A) => {
      const U = JSON.parse(A.data);
      switch (U.type) {
        case Ty:
          C = !0, w.close();
          break;
        case Ry:
          w.removeEventListener("open", x), w.removeEventListener("message", I), w.removeEventListener("close", P), w.removeEventListener("error", P), w.haVersion = U.ha_version, Ny(w.haVersion, 2022, 9) && w.send(JSON.stringify(ky())), v(w);
          break;
      }
    };
    w.addEventListener("open", x), w.addEventListener("message", I), w.addEventListener("close", P), w.addEventListener("error", P);
  }
  return new Promise((p, v) => f(l.setupRetry, p, v));
}
class Ly {
  constructor(i, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((p) => {
        const v = this.commands.get(p.id);
        switch (p.type) {
          case "event":
            v ? v.callback(p.event) : (console.warn(`Received event for unknown subscription ${p.id}. Unsubscribing.`), this.sendMessagePromise(qc(p.id)).catch((_) => {
            }));
            break;
          case "result":
            v && (p.success ? (v.resolve(p.result), "subscribe" in v || this.commands.delete(p.id)) : (v.reject(p.error), this.commands.delete(p.id)));
            break;
          case "pong":
            v ? (v.resolve(), this.commands.delete(p.id)) : console.warn(`Received unknown pong response ${p.id}`);
            break;
        }
      });
    }, this._handleClose = async () => {
      const c = this.commands;
      if (this.commandId = 1, this.oldSubscriptions = this.commands, this.commands = /* @__PURE__ */ new Map(), this.socket = void 0, c.forEach((v) => {
        "subscribe" in v || v.reject(xy(xi, "Connection lost"));
      }), this.closeRequested)
        return;
      this.fireEvent("disconnected");
      const f = Object.assign(Object.assign({}, this.options), { setupRetry: 0 }), p = (v) => {
        setTimeout(async () => {
          if (!this.closeRequested)
            try {
              const _ = await f.createSocket(f);
              this._setSocket(_);
            } catch (_) {
              if (this._queuedMessages) {
                const w = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const C of w)
                  C.reject && C.reject(xi);
              }
              _ === ma ? this.fireEvent("reconnect-error", _) : p(v + 1);
            }
        }, Math.min(v, 5) * 1e3);
      };
      this.suspendReconnectPromise && (await this.suspendReconnectPromise, this.suspendReconnectPromise = void 0, this._queuedMessages = []), p(0);
    }, this.options = s, this.commandId = 2, this.commands = /* @__PURE__ */ new Map(), this.eventListeners = /* @__PURE__ */ new Map(), this.closeRequested = !1, this._setSocket(i);
  }
  get connected() {
    return this.socket !== void 0 && this.socket.readyState == this.socket.OPEN;
  }
  _setSocket(i) {
    this.socket = i, this.haVersion = i.haVersion, i.addEventListener("message", this._handleMessage), i.addEventListener("close", this._handleClose);
    const s = this.oldSubscriptions;
    s && (this.oldSubscriptions = void 0, s.forEach((f) => {
      "subscribe" in f && f.subscribe && f.subscribe().then((p) => {
        f.unsubscribe = p, f.resolve();
      });
    }));
    const c = this._queuedMessages;
    if (c) {
      this._queuedMessages = void 0;
      for (const f of c)
        f.resolve();
    }
    this.fireEvent("ready");
  }
  addEventListener(i, s) {
    let c = this.eventListeners.get(i);
    c || (c = [], this.eventListeners.set(i, c)), c.push(s);
  }
  removeEventListener(i, s) {
    const c = this.eventListeners.get(i);
    if (!c)
      return;
    const f = c.indexOf(s);
    f !== -1 && c.splice(f, 1);
  }
  fireEvent(i, s) {
    (this.eventListeners.get(i) || []).forEach((c) => c(this, s));
  }
  suspendReconnectUntil(i) {
    this.suspendReconnectPromise = i;
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
  reconnect(i = !1) {
    if (this.socket) {
      if (!i) {
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
  async subscribeEvents(i, s) {
    return this.subscribeMessage(i, Sy(s));
  }
  ping() {
    return this.sendMessagePromise(Cy());
  }
  sendMessage(i, s) {
    if (!this.connected)
      throw xi;
    if (this._queuedMessages) {
      if (s)
        throw new Error("Cannot queue with commandId");
      this._queuedMessages.push({ resolve: () => this.sendMessage(i) });
      return;
    }
    s || (s = this._genCmdId()), i.id = s, this.socket.send(JSON.stringify(i));
  }
  sendMessagePromise(i) {
    return new Promise((s, c) => {
      if (this._queuedMessages) {
        this._queuedMessages.push({
          reject: c,
          resolve: async () => {
            try {
              s(await this.sendMessagePromise(i));
            } catch (p) {
              c(p);
            }
          }
        });
        return;
      }
      const f = this._genCmdId();
      this.commands.set(f, { resolve: s, reject: c }), this.sendMessage(i, f);
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
  async subscribeMessage(i, s, c) {
    if (this._queuedMessages && await new Promise((p, v) => {
      this._queuedMessages.push({ resolve: p, reject: v });
    }), c != null && c.preCheck && !await c.preCheck())
      throw new Error("Pre-check failed");
    let f;
    return await new Promise((p, v) => {
      const _ = this._genCmdId();
      f = {
        resolve: p,
        reject: v,
        callback: i,
        subscribe: (c == null ? void 0 : c.resubscribe) !== !1 ? () => this.subscribeMessage(i, s, c) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(qc(_)), this.commands.delete(_);
        }
      }, this.commands.set(_, f);
      try {
        this.sendMessage(s, _);
      } catch {
      }
    }), () => f.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const My = (l) => l * 1e3 + Date.now();
async function zy(l, i, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const _ = document.createElement("a");
    if (_.href = l, _.protocol === "http:" && _.hostname !== "localhost")
      throw Ey;
  }
  const f = new FormData();
  i !== null && f.append("client_id", i), Object.keys(s).forEach((_) => {
    f.append(_, s[_]);
  });
  const p = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: f
  });
  if (!p.ok)
    throw p.status === 400 || p.status === 403 ? ma : new Error("Unable to fetch tokens");
  const v = await p.json();
  return v.hassUrl = l, v.clientId = i, v.expires = My(v.expires_in), v;
}
class Dy {
  constructor(i, s) {
    this.data = i, this._saveTokens = s;
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
    const i = await zy(this.data.hassUrl, this.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: this.data.refresh_token
    });
    i.refresh_token = this.data.refresh_token, this.data = i, this._saveTokens && this._saveTokens(i);
  }
  /**
   * Revoke the refresh & access tokens.
   */
  async revoke() {
    if (!this.data.refresh_token)
      throw new Error("No refresh_token to revoke");
    const i = new FormData();
    i.append("token", this.data.refresh_token), await fetch(`${this.data.hassUrl}/auth/revoke`, {
      method: "POST",
      credentials: "same-origin",
      body: i
    }), this._saveTokens && this._saveTokens(null);
  }
}
function Iy(l, i) {
  return new Dy({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: i,
    expires_in: 1e11
  });
}
async function Oy(l) {
  const i = Object.assign({ setupRetry: 0, createSocket: Py }, l), s = await i.createSocket(i);
  return new Ly(s, i);
}
function Fy(l) {
  var i;
  return (i = l == null ? void 0 : l.connection) != null && i.sendMessagePromise ? l : typeof (l == null ? void 0 : l.callWS) == "function" ? {
    connection: {
      sendMessagePromise: (s) => l.callWS(s)
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
async function Ay() {
  const s = Iy(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3NGI4MWRjMjQ0YWQ0N2EzOGM2MWM0NjM2ODEzNTFkOSIsImlhdCI6MTc4MjExNjkyMCwiZXhwIjoxNzgyMTE4NzIwfQ.QWaghsPJgAKR3zzmqt_Dk3wBDh3FkkIL4zn6ClCLVBw"
  ), c = await Oy({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function $y({
  children: l,
  hass: i
}) {
  const [s, c] = E.useState(null);
  return E.useEffect(() => {
    async function f() {
      const p = i ? Fy(i) : await Ay();
      c(new yy(p));
    }
    f().catch(console.error);
  }, [i]), s ? /* @__PURE__ */ d.createElement(gd.Provider, { value: s }, l) : /* @__PURE__ */ d.createElement("div", null, "Connecting to Home Assistant...");
}
function jy({ hass: l }) {
  return /* @__PURE__ */ d.createElement(Ym, null, /* @__PURE__ */ d.createElement($y, { hass: l }, /* @__PURE__ */ d.createElement(vy, null)));
}
const Yc = "dialog-custom-ui-panel";
class Uy extends HTMLElement {
  set hass(i) {
    this.hassValue = i, this.render();
  }
  get hass() {
    return this.hassValue;
  }
  connectedCallback() {
    this.loadStyles(), this.render();
  }
  disconnectedCallback() {
    var i;
    (i = this.root) == null || i.unmount(), this.root = void 0;
  }
  loadStyles() {
    const i = "dialog-custom-ui-panel.css", s = "dialog-custom-ui-panel.js", c = Array.from(document.getElementsByTagName("script")).find((v) => v.src && v.src.includes(s)), f = c && c.src ? new URL(c.src, window.location.href).search : "", p = `/dialog_custom_ui_static/${i}${f}`;
    if (!document.querySelector(`link[href*="${i}"]`)) {
      const v = document.createElement("link");
      v.rel = "stylesheet", v.href = p, document.head.appendChild(v);
    }
  }
  render() {
    this.isConnected && (this.root || (this.root = Np.createRoot(this)), this.root.render(
      /* @__PURE__ */ d.createElement(d.StrictMode, null, /* @__PURE__ */ d.createElement(jy, { hass: this.hassValue }))
    ));
  }
}
customElements.get(Yc) || customElements.define(Yc, Uy);
