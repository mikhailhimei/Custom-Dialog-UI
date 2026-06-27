function Xc(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var hi = { exports: {} }, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc;
function Ep() {
  if (zc) return le;
  zc = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), v = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), x = Symbol.iterator;
  function D(m) {
    return m === null || typeof m != "object" ? null : (m = x && m[x] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var $ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, F = {};
  function T(m, N, B) {
    this.props = m, this.context = N, this.refs = F, this.updater = B || $;
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
  function H(m, N, B) {
    this.props = m, this.context = N, this.refs = F, this.updater = B || $;
  }
  var A = H.prototype = new L();
  A.constructor = H, j(A, T.prototype), A.isPureReactComponent = !0;
  var G = Array.isArray, ee = Object.prototype.hasOwnProperty, re = { current: null }, ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(m, N, B) {
    var te, oe = {}, se = null, ve = null;
    if (N != null) for (te in N.ref !== void 0 && (ve = N.ref), N.key !== void 0 && (se = "" + N.key), N) ee.call(N, te) && !ie.hasOwnProperty(te) && (oe[te] = N[te]);
    var fe = arguments.length - 2;
    if (fe === 1) oe.children = B;
    else if (1 < fe) {
      for (var Ee = Array(fe), lt = 0; lt < fe; lt++) Ee[lt] = arguments[lt + 2];
      oe.children = Ee;
    }
    if (m && m.defaultProps) for (te in fe = m.defaultProps, fe) oe[te] === void 0 && (oe[te] = fe[te]);
    return { $$typeof: l, type: m, key: se, ref: ve, props: oe, _owner: re.current };
  }
  function Se(m, N) {
    return { $$typeof: l, type: m.type, key: N, ref: m.ref, props: m.props, _owner: m._owner };
  }
  function Te(m) {
    return typeof m == "object" && m !== null && m.$$typeof === l;
  }
  function yt(m) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(B) {
      return N[B];
    });
  }
  var Xe = /\/+/g;
  function Fe(m, N) {
    return typeof m == "object" && m !== null && m.key != null ? yt("" + m.key) : N.toString(36);
  }
  function Le(m, N, B, te, oe) {
    var se = typeof m;
    (se === "undefined" || se === "boolean") && (m = null);
    var ve = !1;
    if (m === null) ve = !0;
    else switch (se) {
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
    if (ve) return ve = m, oe = oe(ve), m = te === "" ? "." + Fe(ve, 0) : te, G(oe) ? (B = "", m != null && (B = m.replace(Xe, "$&/") + "/"), Le(oe, N, B, "", function(lt) {
      return lt;
    })) : oe != null && (Te(oe) && (oe = Se(oe, B + (!oe.key || ve && ve.key === oe.key ? "" : ("" + oe.key).replace(Xe, "$&/") + "/") + m)), N.push(oe)), 1;
    if (ve = 0, te = te === "" ? "." : te + ":", G(m)) for (var fe = 0; fe < m.length; fe++) {
      se = m[fe];
      var Ee = te + Fe(se, fe);
      ve += Le(se, N, B, Ee, oe);
    }
    else if (Ee = D(m), typeof Ee == "function") for (m = Ee.call(m), fe = 0; !(se = m.next()).done; ) se = se.value, Ee = te + Fe(se, fe++), ve += Le(se, N, B, Ee, oe);
    else if (se === "object") throw N = String(m), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return ve;
  }
  function Ce(m, N, B) {
    if (m == null) return m;
    var te = [], oe = 0;
    return Le(m, te, "", "", function(se) {
      return N.call(B, se, oe++);
    }), te;
  }
  function Ae(m) {
    if (m._status === -1) {
      var N = m._result;
      N = N(), N.then(function(B) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = B);
      }, function(B) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = B);
      }), m._status === -1 && (m._status = 0, m._result = N);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var he = { current: null }, U = { transition: null }, X = { ReactCurrentDispatcher: he, ReactCurrentBatchConfig: U, ReactCurrentOwner: re };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return le.Children = { map: Ce, forEach: function(m, N, B) {
    Ce(m, function() {
      N.apply(this, arguments);
    }, B);
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
  } }, le.Component = T, le.Fragment = u, le.Profiler = f, le.PureComponent = H, le.StrictMode = s, le.Suspense = w, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, le.act = V, le.cloneElement = function(m, N, B) {
    if (m == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + m + ".");
    var te = j({}, m.props), oe = m.key, se = m.ref, ve = m._owner;
    if (N != null) {
      if (N.ref !== void 0 && (se = N.ref, ve = re.current), N.key !== void 0 && (oe = "" + N.key), m.type && m.type.defaultProps) var fe = m.type.defaultProps;
      for (Ee in N) ee.call(N, Ee) && !ie.hasOwnProperty(Ee) && (te[Ee] = N[Ee] === void 0 && fe !== void 0 ? fe[Ee] : N[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) te.children = B;
    else if (1 < Ee) {
      fe = Array(Ee);
      for (var lt = 0; lt < Ee; lt++) fe[lt] = arguments[lt + 2];
      te.children = fe;
    }
    return { $$typeof: l, type: m.type, key: oe, ref: se, props: te, _owner: ve };
  }, le.createContext = function(m) {
    return m = { $$typeof: v, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, m.Provider = { $$typeof: p, _context: m }, m.Consumer = m;
  }, le.createElement = Pe, le.createFactory = function(m) {
    var N = Pe.bind(null, m);
    return N.type = m, N;
  }, le.createRef = function() {
    return { current: null };
  }, le.forwardRef = function(m) {
    return { $$typeof: g, render: m };
  }, le.isValidElement = Te, le.lazy = function(m) {
    return { $$typeof: P, _payload: { _status: -1, _result: m }, _init: Ae };
  }, le.memo = function(m, N) {
    return { $$typeof: C, type: m, compare: N === void 0 ? null : N };
  }, le.startTransition = function(m) {
    var N = U.transition;
    U.transition = {};
    try {
      m();
    } finally {
      U.transition = N;
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
  }, le.useImperativeHandle = function(m, N, B) {
    return he.current.useImperativeHandle(m, N, B);
  }, le.useInsertionEffect = function(m, N) {
    return he.current.useInsertionEffect(m, N);
  }, le.useLayoutEffect = function(m, N) {
    return he.current.useLayoutEffect(m, N);
  }, le.useMemo = function(m, N) {
    return he.current.useMemo(m, N);
  }, le.useReducer = function(m, N, B) {
    return he.current.useReducer(m, N, B);
  }, le.useRef = function(m) {
    return he.current.useRef(m);
  }, le.useState = function(m) {
    return he.current.useState(m);
  }, le.useSyncExternalStore = function(m, N, B) {
    return he.current.useSyncExternalStore(m, N, B);
  }, le.useTransition = function() {
    return he.current.useTransition();
  }, le.version = "18.3.1", le;
}
var Dc;
function Jc() {
  return Dc || (Dc = 1, hi.exports = Ep()), hi.exports;
}
var E = Jc();
const d = /* @__PURE__ */ Xc(E);
var la = {}, vi = { exports: {} }, nt = {}, yi = { exports: {} }, gi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic;
function wp() {
  return Ic || (Ic = 1, (function(l) {
    function i(U, X) {
      var V = U.length;
      U.push(X);
      e: for (; 0 < V; ) {
        var m = V - 1 >>> 1, N = U[m];
        if (0 < f(N, X)) U[m] = X, U[V] = N, V = m;
        else break e;
      }
    }
    function u(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var X = U[0], V = U.pop();
      if (V !== X) {
        U[0] = V;
        e: for (var m = 0, N = U.length, B = N >>> 1; m < B; ) {
          var te = 2 * (m + 1) - 1, oe = U[te], se = te + 1, ve = U[se];
          if (0 > f(oe, V)) se < N && 0 > f(ve, oe) ? (U[m] = ve, U[se] = V, m = se) : (U[m] = oe, U[te] = V, m = te);
          else if (se < N && 0 > f(ve, V)) U[m] = ve, U[se] = V, m = se;
          else break e;
        }
      }
      return X;
    }
    function f(U, X) {
      var V = U.sortIndex - X.sortIndex;
      return V !== 0 ? V : U.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      l.unstable_now = function() {
        return p.now();
      };
    } else {
      var v = Date, g = v.now();
      l.unstable_now = function() {
        return v.now() - g;
      };
    }
    var w = [], C = [], P = 1, x = null, D = 3, $ = !1, j = !1, F = !1, T = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function A(U) {
      for (var X = u(C); X !== null; ) {
        if (X.callback === null) s(C);
        else if (X.startTime <= U) s(C), X.sortIndex = X.expirationTime, i(w, X);
        else break;
        X = u(C);
      }
    }
    function G(U) {
      if (F = !1, A(U), !j) if (u(w) !== null) j = !0, Ae(ee);
      else {
        var X = u(C);
        X !== null && he(G, X.startTime - U);
      }
    }
    function ee(U, X) {
      j = !1, F && (F = !1, L(Pe), Pe = -1), $ = !0;
      var V = D;
      try {
        for (A(X), x = u(w); x !== null && (!(x.expirationTime > X) || U && !yt()); ) {
          var m = x.callback;
          if (typeof m == "function") {
            x.callback = null, D = x.priorityLevel;
            var N = m(x.expirationTime <= X);
            X = l.unstable_now(), typeof N == "function" ? x.callback = N : x === u(w) && s(w), A(X);
          } else s(w);
          x = u(w);
        }
        if (x !== null) var B = !0;
        else {
          var te = u(C);
          te !== null && he(G, te.startTime - X), B = !1;
        }
        return B;
      } finally {
        x = null, D = V, $ = !1;
      }
    }
    var re = !1, ie = null, Pe = -1, Se = 5, Te = -1;
    function yt() {
      return !(l.unstable_now() - Te < Se);
    }
    function Xe() {
      if (ie !== null) {
        var U = l.unstable_now();
        Te = U;
        var X = !0;
        try {
          X = ie(!0, U);
        } finally {
          X ? Fe() : (re = !1, ie = null);
        }
      } else re = !1;
    }
    var Fe;
    if (typeof H == "function") Fe = function() {
      H(Xe);
    };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), Ce = Le.port2;
      Le.port1.onmessage = Xe, Fe = function() {
        Ce.postMessage(null);
      };
    } else Fe = function() {
      T(Xe, 0);
    };
    function Ae(U) {
      ie = U, re || (re = !0, Fe());
    }
    function he(U, X) {
      Pe = T(function() {
        U(l.unstable_now());
      }, X);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, l.unstable_continueExecution = function() {
      j || $ || (j = !0, Ae(ee));
    }, l.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Se = 0 < U ? Math.floor(1e3 / U) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, l.unstable_getFirstCallbackNode = function() {
      return u(w);
    }, l.unstable_next = function(U) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = D;
      }
      var V = D;
      D = X;
      try {
        return U();
      } finally {
        D = V;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(U, X) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var V = D;
      D = U;
      try {
        return X();
      } finally {
        D = V;
      }
    }, l.unstable_scheduleCallback = function(U, X, V) {
      var m = l.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? m + V : m) : V = m, U) {
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
      return N = V + N, U = { id: P++, callback: X, priorityLevel: U, startTime: V, expirationTime: N, sortIndex: -1 }, V > m ? (U.sortIndex = V, i(C, U), u(w) === null && U === u(C) && (F ? (L(Pe), Pe = -1) : F = !0, he(G, V - m))) : (U.sortIndex = N, i(w, U), j || $ || (j = !0, Ae(ee))), U;
    }, l.unstable_shouldYield = yt, l.unstable_wrapCallback = function(U) {
      var X = D;
      return function() {
        var V = D;
        D = X;
        try {
          return U.apply(this, arguments);
        } finally {
          D = V;
        }
      };
    };
  })(gi)), gi;
}
var Oc;
function kp() {
  return Oc || (Oc = 1, yi.exports = wp()), yi.exports;
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
var Fc;
function Sp() {
  if (Fc) return nt;
  Fc = 1;
  var l = Jc(), i = kp();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var s = /* @__PURE__ */ new Set(), f = {};
  function p(e, t) {
    v(e, t), v(e + "Capture", t);
  }
  function v(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, x = {};
  function D(e) {
    return w.call(x, e) ? !0 : w.call(P, e) ? !1 : C.test(e) ? x[e] = !0 : (P[e] = !0, !1);
  }
  function $(e, t, n, r) {
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
  function j(e, t, n, r) {
    if (t === null || typeof t > "u" || $(e, t, n, r)) return !0;
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
  function F(e, t, n, r, a, o, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = c;
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
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      L,
      H
    );
    T[t] = new F(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(L, H);
    T[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(L, H);
    T[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function A(e, t, n, r) {
    var a = T.hasOwnProperty(t) ? T[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (j(t, n, a, r) && (n = null), r || a === null ? D(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var G = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ee = Symbol.for("react.element"), re = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), Te = Symbol.for("react.provider"), yt = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), he = Symbol.for("react.offscreen"), U = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = U && e[U] || e["@@iterator"], typeof e == "function" ? e : null);
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
  var B = !1;
  function te(e, t) {
    if (!e || B) return "";
    B = !0;
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
`), c = a.length - 1, h = o.length - 1; 1 <= c && 0 <= h && a[c] !== o[h]; ) h--;
        for (; 1 <= c && 0 <= h; c--, h--) if (a[c] !== o[h]) {
          if (c !== 1 || h !== 1)
            do
              if (c--, h--, 0 > h || a[c] !== o[h]) {
                var y = `
` + a[c].replace(" at new ", " at ");
                return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), y;
              }
            while (1 <= c && 0 <= h);
          break;
        }
      }
    } finally {
      B = !1, Error.prepareStackTrace = n;
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
        return e = te(e.type, !1), e;
      case 11:
        return e = te(e.type.render, !1), e;
      case 1:
        return e = te(e.type, !0), e;
      default:
        return "";
    }
  }
  function se(e) {
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
        return t = e.displayName || null, t !== null ? t : se(e.type) || "Memo";
      case Ae:
        t = e._payload, e = e._init;
        try {
          return se(e(t));
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
        return se(t);
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
      }, set: function(c) {
        r = "" + c, o.call(this, c);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(c) {
        r = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Yr(e) {
    e._valueTracker || (e._valueTracker = lt(e));
  }
  function $i(e) {
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
  function wa(e, t) {
    var n = t.checked;
    return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ji(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = fe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ui(e, t) {
    t = t.checked, t != null && A(e, "checked", t, !1);
  }
  function ka(e, t) {
    Ui(e, t);
    var n = fe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Sa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Sa(e, t.type, fe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Bi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Sa(e, t, n) {
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
  function Ca(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Hi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (er(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: fe(n) };
  }
  function Wi(e, t) {
    var n = fe(t.value), r = fe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Vi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Qi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function xa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Xr, Ki = (function(e) {
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
  }, Sd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(nr).forEach(function(e) {
    Sd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
    });
  });
  function qi(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
  }
  function Yi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = qi(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Cd = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Na(e, t) {
    if (t) {
      if (Cd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function Ta(e, t) {
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
  var Ra = null;
  function Pa(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var La = null, Rn = null, Pn = null;
  function Gi(e) {
    if (e = Cr(e)) {
      if (typeof La != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = _l(t), La(e.stateNode, e.type, t));
    }
  }
  function Xi(e) {
    Rn ? Pn ? Pn.push(e) : Pn = [e] : Rn = e;
  }
  function Ji() {
    if (Rn) {
      var e = Rn, t = Pn;
      if (Pn = Rn = null, Gi(e), t) for (e = 0; e < t.length; e++) Gi(t[e]);
    }
  }
  function bi(e, t) {
    return e(t);
  }
  function Zi() {
  }
  var Ma = !1;
  function eu(e, t, n) {
    if (Ma) return e(t, n);
    Ma = !0;
    try {
      return bi(e, t, n);
    } finally {
      Ma = !1, (Rn !== null || Pn !== null) && (Zi(), Ji());
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
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var za = !1;
  if (g) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      za = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    za = !1;
  }
  function xd(e, t, n, r, a, o, c, h, y) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (z) {
      this.onError(z);
    }
  }
  var ar = !1, Jr = null, br = !1, Da = null, Nd = { onError: function(e) {
    ar = !0, Jr = e;
  } };
  function Td(e, t, n, r, a, o, c, h, y) {
    ar = !1, Jr = null, xd.apply(Nd, arguments);
  }
  function Rd(e, t, n, r, a, o, c, h, y) {
    if (Td.apply(this, arguments), ar) {
      if (ar) {
        var R = Jr;
        ar = !1, Jr = null;
      } else throw Error(u(198));
      br || (br = !0, Da = R);
    }
  }
  function sn(e) {
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
  function tu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function nu(e) {
    if (sn(e) !== e) throw Error(u(188));
  }
  function Pd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = sn(e), t === null) throw Error(u(188));
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
          if (o === n) return nu(a), e;
          if (o === r) return nu(a), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = a, r = o;
      else {
        for (var c = !1, h = a.child; h; ) {
          if (h === n) {
            c = !0, n = a, r = o;
            break;
          }
          if (h === r) {
            c = !0, r = a, n = o;
            break;
          }
          h = h.sibling;
        }
        if (!c) {
          for (h = o.child; h; ) {
            if (h === n) {
              c = !0, n = o, r = a;
              break;
            }
            if (h === r) {
              c = !0, r = o, n = a;
              break;
            }
            h = h.sibling;
          }
          if (!c) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function ru(e) {
    return e = Pd(e), e !== null ? lu(e) : null;
  }
  function lu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = lu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var au = i.unstable_scheduleCallback, ou = i.unstable_cancelCallback, Ld = i.unstable_shouldYield, Md = i.unstable_requestPaint, Me = i.unstable_now, zd = i.unstable_getCurrentPriorityLevel, Ia = i.unstable_ImmediatePriority, iu = i.unstable_UserBlockingPriority, Zr = i.unstable_NormalPriority, Dd = i.unstable_LowPriority, uu = i.unstable_IdlePriority, el = null, Nt = null;
  function Id(e) {
    if (Nt && typeof Nt.onCommitFiberRoot == "function") try {
      Nt.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var gt = Math.clz32 ? Math.clz32 : Ad, Od = Math.log, Fd = Math.LN2;
  function Ad(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Od(e) / Fd | 0) | 0;
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
    var r = 0, a = e.suspendedLanes, o = e.pingedLanes, c = n & 268435455;
    if (c !== 0) {
      var h = c & ~a;
      h !== 0 ? r = or(h) : (o &= c, o !== 0 && (r = or(o)));
    } else c = n & ~a, c !== 0 ? r = or(c) : o !== 0 && (r = or(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - gt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function $d(e, t) {
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
  function jd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var c = 31 - gt(o), h = 1 << c, y = a[c];
      y === -1 ? ((h & n) === 0 || (h & r) !== 0) && (a[c] = $d(h, t)) : y <= t && (e.expiredLanes |= h), o &= ~h;
    }
  }
  function Oa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function su() {
    var e = tl;
    return tl <<= 1, (tl & 4194240) === 0 && (tl = 64), e;
  }
  function Fa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ir(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - gt(t), e[t] = n;
  }
  function Ud(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - gt(n), o = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
    }
  }
  function Aa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - gt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var pe = 0;
  function cu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var du, $a, fu, pu, mu, ja = !1, ll = [], Wt = null, Vt = null, Qt = null, ur = /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ new Map(), Kt = [], Bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function hu(e, t) {
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
        ur.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sr.delete(t.pointerId);
    }
  }
  function cr(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Cr(t), t !== null && $a(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Hd(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Wt = cr(Wt, e, t, n, r, a), !0;
      case "dragenter":
        return Vt = cr(Vt, e, t, n, r, a), !0;
      case "mouseover":
        return Qt = cr(Qt, e, t, n, r, a), !0;
      case "pointerover":
        var o = a.pointerId;
        return ur.set(o, cr(ur.get(o) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return o = a.pointerId, sr.set(o, cr(sr.get(o) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function vu(e) {
    var t = cn(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = tu(n), t !== null) {
            e.blockedOn = t, mu(e.priority, function() {
              fu(n);
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
      var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ra = r, n.target.dispatchEvent(r), Ra = null;
      } else return t = Cr(n), t !== null && $a(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function yu(e, t, n) {
    al(e) && n.delete(t);
  }
  function Wd() {
    ja = !1, Wt !== null && al(Wt) && (Wt = null), Vt !== null && al(Vt) && (Vt = null), Qt !== null && al(Qt) && (Qt = null), ur.forEach(yu), sr.forEach(yu);
  }
  function dr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ja || (ja = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Wd)));
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
    for (Wt !== null && dr(Wt, e), Vt !== null && dr(Vt, e), Qt !== null && dr(Qt, e), ur.forEach(t), sr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) vu(n), n.blockedOn === null && Kt.shift();
  }
  var Ln = G.ReactCurrentBatchConfig, ol = !0;
  function Vd(e, t, n, r) {
    var a = pe, o = Ln.transition;
    Ln.transition = null;
    try {
      pe = 1, Ua(e, t, n, r);
    } finally {
      pe = a, Ln.transition = o;
    }
  }
  function Qd(e, t, n, r) {
    var a = pe, o = Ln.transition;
    Ln.transition = null;
    try {
      pe = 4, Ua(e, t, n, r);
    } finally {
      pe = a, Ln.transition = o;
    }
  }
  function Ua(e, t, n, r) {
    if (ol) {
      var a = Ba(e, t, n, r);
      if (a === null) lo(e, t, r, il, n), hu(e, r);
      else if (Hd(a, e, t, n, r)) r.stopPropagation();
      else if (hu(e, r), t & 4 && -1 < Bd.indexOf(e)) {
        for (; a !== null; ) {
          var o = Cr(a);
          if (o !== null && du(o), o = Ba(e, t, n, r), o === null && lo(e, t, r, il, n), o === a) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else lo(e, t, r, null, n);
    }
  }
  var il = null;
  function Ba(e, t, n, r) {
    if (il = null, e = Pa(r), e = cn(e), e !== null) if (t = sn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = tu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return il = e, null;
  }
  function gu(e) {
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
        switch (zd()) {
          case Ia:
            return 1;
          case iu:
            return 4;
          case Zr:
          case Dd:
            return 16;
          case uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var qt = null, Ha = null, ul = null;
  function _u() {
    if (ul) return ul;
    var e, t = Ha, n = t.length, r, a = "value" in qt ? qt.value : qt.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === a[o - r]; r++) ;
    return ul = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function sl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function cl() {
    return !0;
  }
  function Eu() {
    return !1;
  }
  function at(e) {
    function t(n, r, a, o, c) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = c, this.currentTarget = null;
      for (var h in e) e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(o) : o[h]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? cl : Eu, this.isPropagationStopped = Eu, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Wa = at(Mn), pr = V({}, Mn, { view: 0, detail: 0 }), Kd = at(pr), Va, Qa, mr, dl = V({}, pr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qa, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (Va = e.screenX - mr.screenX, Qa = e.screenY - mr.screenY) : Qa = Va = 0, mr = e), Va);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Qa;
  } }), wu = at(dl), qd = V({}, dl, { dataTransfer: 0 }), Yd = at(qd), Gd = V({}, pr, { relatedTarget: 0 }), Ka = at(Gd), Xd = V({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jd = at(Xd), bd = V({}, Mn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Zd = at(bd), ef = V({}, Mn, { data: 0 }), ku = at(ef), tf = {
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
  }, nf = {
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
  }, rf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rf[e]) ? !!t[e] : !1;
  }
  function qa() {
    return lf;
  }
  var af = V({}, pr, { key: function(e) {
    if (e.key) {
      var t = tf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qa, charCode: function(e) {
    return e.type === "keypress" ? sl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), of = at(af), uf = V({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Su = at(uf), sf = V({}, pr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qa }), cf = at(sf), df = V({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ff = at(df), pf = V({}, dl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mf = at(pf), hf = [9, 13, 27, 32], Ya = g && "CompositionEvent" in window, hr = null;
  g && "documentMode" in document && (hr = document.documentMode);
  var vf = g && "TextEvent" in window && !hr, Cu = g && (!Ya || hr && 8 < hr && 11 >= hr), xu = " ", Nu = !1;
  function Tu(e, t) {
    switch (e) {
      case "keyup":
        return hf.indexOf(t.keyCode) !== -1;
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
  function Ru(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zn = !1;
  function yf(e, t) {
    switch (e) {
      case "compositionend":
        return Ru(t);
      case "keypress":
        return t.which !== 32 ? null : (Nu = !0, xu);
      case "textInput":
        return e = t.data, e === xu && Nu ? null : e;
      default:
        return null;
    }
  }
  function gf(e, t) {
    if (zn) return e === "compositionend" || !Ya && Tu(e, t) ? (e = _u(), ul = Ha = qt = null, zn = !1, e) : null;
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
        return Cu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _f = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_f[e.type] : t === "textarea";
  }
  function Lu(e, t, n, r) {
    Xi(r), t = vl(t, "onChange"), 0 < t.length && (n = new Wa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var vr = null, yr = null;
  function Ef(e) {
    Yu(e, 0);
  }
  function fl(e) {
    var t = An(e);
    if ($i(t)) return e;
  }
  function wf(e, t) {
    if (e === "change") return t;
  }
  var Mu = !1;
  if (g) {
    var Ga;
    if (g) {
      var Xa = "oninput" in document;
      if (!Xa) {
        var zu = document.createElement("div");
        zu.setAttribute("oninput", "return;"), Xa = typeof zu.oninput == "function";
      }
      Ga = Xa;
    } else Ga = !1;
    Mu = Ga && (!document.documentMode || 9 < document.documentMode);
  }
  function Du() {
    vr && (vr.detachEvent("onpropertychange", Iu), yr = vr = null);
  }
  function Iu(e) {
    if (e.propertyName === "value" && fl(yr)) {
      var t = [];
      Lu(t, yr, e, Pa(e)), eu(Ef, t);
    }
  }
  function kf(e, t, n) {
    e === "focusin" ? (Du(), vr = t, yr = n, vr.attachEvent("onpropertychange", Iu)) : e === "focusout" && Du();
  }
  function Sf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(yr);
  }
  function Cf(e, t) {
    if (e === "click") return fl(t);
  }
  function xf(e, t) {
    if (e === "input" || e === "change") return fl(t);
  }
  function Nf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var _t = typeof Object.is == "function" ? Object.is : Nf;
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
  function Ou(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fu(e, t) {
    var n = Ou(e);
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
      n = Ou(n);
    }
  }
  function Au(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Au(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $u() {
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
  function Ja(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Tf(e) {
    var t = $u(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Au(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ja(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, o = Math.min(r.start, a);
          r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = Fu(n, o);
          var c = Fu(
            n,
            r
          );
          a && c && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Rf = g && "documentMode" in document && 11 >= document.documentMode, Dn = null, ba = null, _r = null, Za = !1;
  function ju(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Za || Dn == null || Dn !== Gr(r) || (r = Dn, "selectionStart" in r && Ja(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _r && gr(_r, r) || (_r = r, r = vl(ba, "onSelect"), 0 < r.length && (t = new Wa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dn)));
  }
  function pl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var In = { animationend: pl("Animation", "AnimationEnd"), animationiteration: pl("Animation", "AnimationIteration"), animationstart: pl("Animation", "AnimationStart"), transitionend: pl("Transition", "TransitionEnd") }, eo = {}, Uu = {};
  g && (Uu = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);
  function ml(e) {
    if (eo[e]) return eo[e];
    if (!In[e]) return e;
    var t = In[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Uu) return eo[e] = t[n];
    return e;
  }
  var Bu = ml("animationend"), Hu = ml("animationiteration"), Wu = ml("animationstart"), Vu = ml("transitionend"), Qu = /* @__PURE__ */ new Map(), Ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Yt(e, t) {
    Qu.set(e, t), p(t, [e]);
  }
  for (var to = 0; to < Ku.length; to++) {
    var no = Ku[to], Pf = no.toLowerCase(), Lf = no[0].toUpperCase() + no.slice(1);
    Yt(Pf, "on" + Lf);
  }
  Yt(Bu, "onAnimationEnd"), Yt(Hu, "onAnimationIteration"), Yt(Wu, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt(Vu, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), p("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), p("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), p("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
  function qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Rd(r, t, void 0, e), e.currentTarget = null;
  }
  function Yu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var c = r.length - 1; 0 <= c; c--) {
          var h = r[c], y = h.instance, R = h.currentTarget;
          if (h = h.listener, y !== o && a.isPropagationStopped()) break e;
          qu(a, h, R), o = y;
        }
        else for (c = 0; c < r.length; c++) {
          if (h = r[c], y = h.instance, R = h.currentTarget, h = h.listener, y !== o && a.isPropagationStopped()) break e;
          qu(a, h, R), o = y;
        }
      }
    }
    if (br) throw e = Da, br = !1, Da = null, e;
  }
  function ge(e, t) {
    var n = t[co];
    n === void 0 && (n = t[co] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Gu(t, e, 2, !1), n.add(r));
  }
  function ro(e, t, n) {
    var r = 0;
    t && (r |= 4), Gu(n, e, r, t);
  }
  var hl = "_reactListening" + Math.random().toString(36).slice(2);
  function wr(e) {
    if (!e[hl]) {
      e[hl] = !0, s.forEach(function(n) {
        n !== "selectionchange" && (Mf.has(n) || ro(n, !1, e), ro(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[hl] || (t[hl] = !0, ro("selectionchange", !1, t));
    }
  }
  function Gu(e, t, n, r) {
    switch (gu(t)) {
      case 1:
        var a = Vd;
        break;
      case 4:
        a = Qd;
        break;
      default:
        a = Ua;
    }
    n = a.bind(null, t, n, e), a = void 0, !za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function lo(e, t, n, r, a) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var c = r.tag;
      if (c === 3 || c === 4) {
        var h = r.stateNode.containerInfo;
        if (h === a || h.nodeType === 8 && h.parentNode === a) break;
        if (c === 4) for (c = r.return; c !== null; ) {
          var y = c.tag;
          if ((y === 3 || y === 4) && (y = c.stateNode.containerInfo, y === a || y.nodeType === 8 && y.parentNode === a)) return;
          c = c.return;
        }
        for (; h !== null; ) {
          if (c = cn(h), c === null) return;
          if (y = c.tag, y === 5 || y === 6) {
            r = o = c;
            continue e;
          }
          h = h.parentNode;
        }
      }
      r = r.return;
    }
    eu(function() {
      var R = o, z = Pa(n), I = [];
      e: {
        var M = Qu.get(e);
        if (M !== void 0) {
          var W = Wa, K = e;
          switch (e) {
            case "keypress":
              if (sl(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = of;
              break;
            case "focusin":
              K = "focus", W = Ka;
              break;
            case "focusout":
              K = "blur", W = Ka;
              break;
            case "beforeblur":
            case "afterblur":
              W = Ka;
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
              W = wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Yd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = cf;
              break;
            case Bu:
            case Hu:
            case Wu:
              W = Jd;
              break;
            case Vu:
              W = ff;
              break;
            case "scroll":
              W = Kd;
              break;
            case "wheel":
              W = mf;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Zd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Su;
          }
          var q = (t & 4) !== 0, ze = !q && e === "scroll", k = q ? M !== null ? M + "Capture" : null : M;
          q = [];
          for (var _ = R, S; _ !== null; ) {
            S = _;
            var O = S.stateNode;
            if (S.tag === 5 && O !== null && (S = O, k !== null && (O = rr(_, k), O != null && q.push(kr(_, O, S)))), ze) break;
            _ = _.return;
          }
          0 < q.length && (M = new W(M, K, null, n, z), I.push({ event: M, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", M && n !== Ra && (K = n.relatedTarget || n.fromElement) && (cn(K) || K[It])) break e;
          if ((W || M) && (M = z.window === z ? z : (M = z.ownerDocument) ? M.defaultView || M.parentWindow : window, W ? (K = n.relatedTarget || n.toElement, W = R, K = K ? cn(K) : null, K !== null && (ze = sn(K), K !== ze || K.tag !== 5 && K.tag !== 6) && (K = null)) : (W = null, K = R), W !== K)) {
            if (q = wu, O = "onMouseLeave", k = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (q = Su, O = "onPointerLeave", k = "onPointerEnter", _ = "pointer"), ze = W == null ? M : An(W), S = K == null ? M : An(K), M = new q(O, _ + "leave", W, n, z), M.target = ze, M.relatedTarget = S, O = null, cn(z) === R && (q = new q(k, _ + "enter", K, n, z), q.target = S, q.relatedTarget = ze, O = q), ze = O, W && K) t: {
              for (q = W, k = K, _ = 0, S = q; S; S = On(S)) _++;
              for (S = 0, O = k; O; O = On(O)) S++;
              for (; 0 < _ - S; ) q = On(q), _--;
              for (; 0 < S - _; ) k = On(k), S--;
              for (; _--; ) {
                if (q === k || k !== null && q === k.alternate) break t;
                q = On(q), k = On(k);
              }
              q = null;
            }
            else q = null;
            W !== null && Xu(I, M, W, q, !1), K !== null && ze !== null && Xu(I, ze, K, q, !0);
          }
        }
        e: {
          if (M = R ? An(R) : window, W = M.nodeName && M.nodeName.toLowerCase(), W === "select" || W === "input" && M.type === "file") var Y = wf;
          else if (Pu(M)) if (Mu) Y = xf;
          else {
            Y = Sf;
            var J = kf;
          }
          else (W = M.nodeName) && W.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (Y = Cf);
          if (Y && (Y = Y(e, R))) {
            Lu(I, Y, n, z);
            break e;
          }
          J && J(e, M, R), e === "focusout" && (J = M._wrapperState) && J.controlled && M.type === "number" && Sa(M, "number", M.value);
        }
        switch (J = R ? An(R) : window, e) {
          case "focusin":
            (Pu(J) || J.contentEditable === "true") && (Dn = J, ba = R, _r = null);
            break;
          case "focusout":
            _r = ba = Dn = null;
            break;
          case "mousedown":
            Za = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Za = !1, ju(I, n, z);
            break;
          case "selectionchange":
            if (Rf) break;
          case "keydown":
          case "keyup":
            ju(I, n, z);
        }
        var b;
        if (Ya) e: {
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
        else zn ? Tu(e, n) && (ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ne = "onCompositionStart");
        ne && (Cu && n.locale !== "ko" && (zn || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && zn && (b = _u()) : (qt = z, Ha = "value" in qt ? qt.value : qt.textContent, zn = !0)), J = vl(R, ne), 0 < J.length && (ne = new ku(ne, e, null, n, z), I.push({ event: ne, listeners: J }), b ? ne.data = b : (b = Ru(n), b !== null && (ne.data = b)))), (b = vf ? yf(e, n) : gf(e, n)) && (R = vl(R, "onBeforeInput"), 0 < R.length && (z = new ku("onBeforeInput", "beforeinput", null, n, z), I.push({ event: z, listeners: R }), z.data = b));
      }
      Yu(I, t);
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
  function Xu(e, t, n, r, a) {
    for (var o = t._reactName, c = []; n !== null && n !== r; ) {
      var h = n, y = h.alternate, R = h.stateNode;
      if (y !== null && y === r) break;
      h.tag === 5 && R !== null && (h = R, a ? (y = rr(n, o), y != null && c.unshift(kr(n, y, h))) : a || (y = rr(n, o), y != null && c.push(kr(n, y, h)))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var zf = /\r\n?/g, Df = /\u0000|\uFFFD/g;
  function Ju(e) {
    return (typeof e == "string" ? e : "" + e).replace(zf, `
`).replace(Df, "");
  }
  function yl(e, t, n) {
    if (t = Ju(t), Ju(e) !== t && n) throw Error(u(425));
  }
  function gl() {
  }
  var ao = null, oo = null;
  function io(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uo = typeof setTimeout == "function" ? setTimeout : void 0, If = typeof clearTimeout == "function" ? clearTimeout : void 0, bu = typeof Promise == "function" ? Promise : void 0, Of = typeof queueMicrotask == "function" ? queueMicrotask : typeof bu < "u" ? function(e) {
    return bu.resolve(null).then(e).catch(Ff);
  } : uo;
  function Ff(e) {
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
  function Zu(e) {
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
  var Fn = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + Fn, Sr = "__reactProps$" + Fn, It = "__reactContainer$" + Fn, co = "__reactEvents$" + Fn, Af = "__reactListeners$" + Fn, $f = "__reactHandles$" + Fn;
  function cn(e) {
    var t = e[Tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[It] || n[Tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Zu(e); e !== null; ) {
          if (n = e[Tt]) return n;
          e = Zu(e);
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
    throw Error(u(33));
  }
  function _l(e) {
    return e[Sr] || null;
  }
  var fo = [], $n = -1;
  function Xt(e) {
    return { current: e };
  }
  function _e(e) {
    0 > $n || (e.current = fo[$n], fo[$n] = null, $n--);
  }
  function ye(e, t) {
    $n++, fo[$n] = e.current, e.current = t;
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
  function es(e, t, n) {
    if (We.current !== Jt) throw Error(u(168));
    ye(We, t), ye(Je, n);
  }
  function ts(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(u(108, ve(e) || "Unknown", a));
    return V({}, n, r);
  }
  function wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, dn = We.current, ye(We, e), ye(Je, Je.current), !0;
  }
  function ns(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = ts(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, _e(Je), _e(We), ye(We, e)) : _e(Je), ye(Je, n);
  }
  var Ot = null, kl = !1, po = !1;
  function rs(e) {
    Ot === null ? Ot = [e] : Ot.push(e);
  }
  function jf(e) {
    kl = !0, rs(e);
  }
  function bt() {
    if (!po && Ot !== null) {
      po = !0;
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
        throw Ot !== null && (Ot = Ot.slice(e + 1)), au(Ia, bt), a;
      } finally {
        pe = t, po = !1;
      }
    }
    return null;
  }
  var Un = [], Bn = 0, Sl = null, Cl = 0, ct = [], dt = 0, fn = null, Ft = 1, At = "";
  function pn(e, t) {
    Un[Bn++] = Cl, Un[Bn++] = Sl, Sl = e, Cl = t;
  }
  function ls(e, t, n) {
    ct[dt++] = Ft, ct[dt++] = At, ct[dt++] = fn, fn = e;
    var r = Ft;
    e = At;
    var a = 32 - gt(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - gt(t) + a;
    if (30 < o) {
      var c = a - a % 5;
      o = (r & (1 << c) - 1).toString(32), r >>= c, a -= c, Ft = 1 << 32 - gt(t) + a | n << a | r, At = o + e;
    } else Ft = 1 << o | n << a | r, At = e;
  }
  function mo(e) {
    e.return !== null && (pn(e, 1), ls(e, 1, 0));
  }
  function ho(e) {
    for (; e === Sl; ) Sl = Un[--Bn], Un[Bn] = null, Cl = Un[--Bn], Un[Bn] = null;
    for (; e === fn; ) fn = ct[--dt], ct[dt] = null, At = ct[--dt], ct[dt] = null, Ft = ct[--dt], ct[dt] = null;
  }
  var ot = null, it = null, we = !1, Et = null;
  function as(e, t) {
    var n = ht(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function os(e, t) {
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
  function vo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function yo(e) {
    if (we) {
      var t = it;
      if (t) {
        var n = t;
        if (!os(e, t)) {
          if (vo(e)) throw Error(u(418));
          t = Gt(n.nextSibling);
          var r = ot;
          t && os(e, t) ? as(r, n) : (e.flags = e.flags & -4097 | 2, we = !1, ot = e);
        }
      } else {
        if (vo(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, we = !1, ot = e;
      }
    }
  }
  function is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
  }
  function xl(e) {
    if (e !== ot) return !1;
    if (!we) return is(e), we = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !io(e.type, e.memoizedProps)), t && (t = it)) {
      if (vo(e)) throw us(), Error(u(418));
      for (; t; ) as(e, t), t = Gt(t.nextSibling);
    }
    if (is(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
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
  function us() {
    for (var e = it; e; ) e = Gt(e.nextSibling);
  }
  function Hn() {
    it = ot = null, we = !1;
  }
  function go(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  var Uf = G.ReactCurrentBatchConfig;
  function xr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var a = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(c) {
          var h = a.refs;
          c === null ? delete h[o] : h[o] = c;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function Nl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ss(e) {
    var t = e._init;
    return t(e._payload);
  }
  function cs(e) {
    function t(k, _) {
      if (e) {
        var S = k.deletions;
        S === null ? (k.deletions = [_], k.flags |= 16) : S.push(_);
      }
    }
    function n(k, _) {
      if (!e) return null;
      for (; _ !== null; ) t(k, _), _ = _.sibling;
      return null;
    }
    function r(k, _) {
      for (k = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? k.set(_.key, _) : k.set(_.index, _), _ = _.sibling;
      return k;
    }
    function a(k, _) {
      return k = on(k, _), k.index = 0, k.sibling = null, k;
    }
    function o(k, _, S) {
      return k.index = S, e ? (S = k.alternate, S !== null ? (S = S.index, S < _ ? (k.flags |= 2, _) : S) : (k.flags |= 2, _)) : (k.flags |= 1048576, _);
    }
    function c(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function h(k, _, S, O) {
      return _ === null || _.tag !== 6 ? (_ = si(S, k.mode, O), _.return = k, _) : (_ = a(_, S), _.return = k, _);
    }
    function y(k, _, S, O) {
      var Y = S.type;
      return Y === ie ? z(k, _, S.props.children, O, S.key) : _ !== null && (_.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Ae && ss(Y) === _.type) ? (O = a(_, S.props), O.ref = xr(k, _, S), O.return = k, O) : (O = Xl(S.type, S.key, S.props, null, k.mode, O), O.ref = xr(k, _, S), O.return = k, O);
    }
    function R(k, _, S, O) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== S.containerInfo || _.stateNode.implementation !== S.implementation ? (_ = ci(S, k.mode, O), _.return = k, _) : (_ = a(_, S.children || []), _.return = k, _);
    }
    function z(k, _, S, O, Y) {
      return _ === null || _.tag !== 7 ? (_ = wn(S, k.mode, O, Y), _.return = k, _) : (_ = a(_, S), _.return = k, _);
    }
    function I(k, _, S) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = si("" + _, k.mode, S), _.return = k, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case ee:
            return S = Xl(_.type, _.key, _.props, null, k.mode, S), S.ref = xr(k, null, _), S.return = k, S;
          case re:
            return _ = ci(_, k.mode, S), _.return = k, _;
          case Ae:
            var O = _._init;
            return I(k, O(_._payload), S);
        }
        if (er(_) || X(_)) return _ = wn(_, k.mode, S, null), _.return = k, _;
        Nl(k, _);
      }
      return null;
    }
    function M(k, _, S, O) {
      var Y = _ !== null ? _.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number") return Y !== null ? null : h(k, _, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ee:
            return S.key === Y ? y(k, _, S, O) : null;
          case re:
            return S.key === Y ? R(k, _, S, O) : null;
          case Ae:
            return Y = S._init, M(
              k,
              _,
              Y(S._payload),
              O
            );
        }
        if (er(S) || X(S)) return Y !== null ? null : z(k, _, S, O, null);
        Nl(k, S);
      }
      return null;
    }
    function W(k, _, S, O, Y) {
      if (typeof O == "string" && O !== "" || typeof O == "number") return k = k.get(S) || null, h(_, k, "" + O, Y);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ee:
            return k = k.get(O.key === null ? S : O.key) || null, y(_, k, O, Y);
          case re:
            return k = k.get(O.key === null ? S : O.key) || null, R(_, k, O, Y);
          case Ae:
            var J = O._init;
            return W(k, _, S, J(O._payload), Y);
        }
        if (er(O) || X(O)) return k = k.get(S) || null, z(_, k, O, Y, null);
        Nl(_, O);
      }
      return null;
    }
    function K(k, _, S, O) {
      for (var Y = null, J = null, b = _, ne = _ = 0, Ue = null; b !== null && ne < S.length; ne++) {
        b.index > ne ? (Ue = b, b = null) : Ue = b.sibling;
        var ce = M(k, b, S[ne], O);
        if (ce === null) {
          b === null && (b = Ue);
          break;
        }
        e && b && ce.alternate === null && t(k, b), _ = o(ce, _, ne), J === null ? Y = ce : J.sibling = ce, J = ce, b = Ue;
      }
      if (ne === S.length) return n(k, b), we && pn(k, ne), Y;
      if (b === null) {
        for (; ne < S.length; ne++) b = I(k, S[ne], O), b !== null && (_ = o(b, _, ne), J === null ? Y = b : J.sibling = b, J = b);
        return we && pn(k, ne), Y;
      }
      for (b = r(k, b); ne < S.length; ne++) Ue = W(b, k, ne, S[ne], O), Ue !== null && (e && Ue.alternate !== null && b.delete(Ue.key === null ? ne : Ue.key), _ = o(Ue, _, ne), J === null ? Y = Ue : J.sibling = Ue, J = Ue);
      return e && b.forEach(function(un) {
        return t(k, un);
      }), we && pn(k, ne), Y;
    }
    function q(k, _, S, O) {
      var Y = X(S);
      if (typeof Y != "function") throw Error(u(150));
      if (S = Y.call(S), S == null) throw Error(u(151));
      for (var J = Y = null, b = _, ne = _ = 0, Ue = null, ce = S.next(); b !== null && !ce.done; ne++, ce = S.next()) {
        b.index > ne ? (Ue = b, b = null) : Ue = b.sibling;
        var un = M(k, b, ce.value, O);
        if (un === null) {
          b === null && (b = Ue);
          break;
        }
        e && b && un.alternate === null && t(k, b), _ = o(un, _, ne), J === null ? Y = un : J.sibling = un, J = un, b = Ue;
      }
      if (ce.done) return n(
        k,
        b
      ), we && pn(k, ne), Y;
      if (b === null) {
        for (; !ce.done; ne++, ce = S.next()) ce = I(k, ce.value, O), ce !== null && (_ = o(ce, _, ne), J === null ? Y = ce : J.sibling = ce, J = ce);
        return we && pn(k, ne), Y;
      }
      for (b = r(k, b); !ce.done; ne++, ce = S.next()) ce = W(b, k, ne, ce.value, O), ce !== null && (e && ce.alternate !== null && b.delete(ce.key === null ? ne : ce.key), _ = o(ce, _, ne), J === null ? Y = ce : J.sibling = ce, J = ce);
      return e && b.forEach(function(_p) {
        return t(k, _p);
      }), we && pn(k, ne), Y;
    }
    function ze(k, _, S, O) {
      if (typeof S == "object" && S !== null && S.type === ie && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ee:
            e: {
              for (var Y = S.key, J = _; J !== null; ) {
                if (J.key === Y) {
                  if (Y = S.type, Y === ie) {
                    if (J.tag === 7) {
                      n(k, J.sibling), _ = a(J, S.props.children), _.return = k, k = _;
                      break e;
                    }
                  } else if (J.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === Ae && ss(Y) === J.type) {
                    n(k, J.sibling), _ = a(J, S.props), _.ref = xr(k, J, S), _.return = k, k = _;
                    break e;
                  }
                  n(k, J);
                  break;
                } else t(k, J);
                J = J.sibling;
              }
              S.type === ie ? (_ = wn(S.props.children, k.mode, O, S.key), _.return = k, k = _) : (O = Xl(S.type, S.key, S.props, null, k.mode, O), O.ref = xr(k, _, S), O.return = k, k = O);
            }
            return c(k);
          case re:
            e: {
              for (J = S.key; _ !== null; ) {
                if (_.key === J) if (_.tag === 4 && _.stateNode.containerInfo === S.containerInfo && _.stateNode.implementation === S.implementation) {
                  n(k, _.sibling), _ = a(_, S.children || []), _.return = k, k = _;
                  break e;
                } else {
                  n(k, _);
                  break;
                }
                else t(k, _);
                _ = _.sibling;
              }
              _ = ci(S, k.mode, O), _.return = k, k = _;
            }
            return c(k);
          case Ae:
            return J = S._init, ze(k, _, J(S._payload), O);
        }
        if (er(S)) return K(k, _, S, O);
        if (X(S)) return q(k, _, S, O);
        Nl(k, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, _ !== null && _.tag === 6 ? (n(k, _.sibling), _ = a(_, S), _.return = k, k = _) : (n(k, _), _ = si(S, k.mode, O), _.return = k, k = _), c(k)) : n(k, _);
    }
    return ze;
  }
  var Wn = cs(!0), ds = cs(!1), Tl = Xt(null), Rl = null, Vn = null, _o = null;
  function Eo() {
    _o = Vn = Rl = null;
  }
  function wo(e) {
    var t = Tl.current;
    _e(Tl), e._currentValue = t;
  }
  function ko(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Qn(e, t) {
    Rl = e, _o = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ze = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (_o !== e) if (e = { context: e, memoizedValue: t, next: null }, Vn === null) {
      if (Rl === null) throw Error(u(308));
      Vn = e, Rl.dependencies = { lanes: 0, firstContext: e };
    } else Vn = Vn.next = e;
    return t;
  }
  var mn = null;
  function So(e) {
    mn === null ? mn = [e] : mn.push(e);
  }
  function fs(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, So(t)) : (n.next = a.next, a.next = n), t.interleaved = n, $t(e, r);
  }
  function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Zt = !1;
  function Co(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ps(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function jt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function en(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ue & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, $t(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, So(r)) : (t.next = a.next, a.next = t), r.interleaved = t, $t(e, n);
  }
  function Pl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Aa(e, n);
    }
  }
  function ms(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? a = o = c : o = o.next = c, n = n.next;
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
    var o = a.firstBaseUpdate, c = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var y = h, R = y.next;
      y.next = null, c === null ? o = R : c.next = R, c = y;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== c && (h === null ? z.firstBaseUpdate = R : h.next = R, z.lastBaseUpdate = y));
    }
    if (o !== null) {
      var I = a.baseState;
      c = 0, z = R = y = null, h = o;
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
                  I = K.call(W, I, M);
                  break e;
                }
                I = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = q.payload, M = typeof K == "function" ? K.call(W, I, M) : K, M == null) break e;
                I = V({}, I, M);
                break e;
              case 2:
                Zt = !0;
            }
          }
          h.callback !== null && h.lane !== 0 && (e.flags |= 64, M = a.effects, M === null ? a.effects = [h] : M.push(h));
        } else W = { eventTime: W, lane: M, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, z === null ? (R = z = W, y = I) : z = z.next = W, c |= M;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null) break;
          M = h, h = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      if (z === null && (y = I), a.baseState = y, a.firstBaseUpdate = R, a.lastBaseUpdate = z, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          c |= a.lane, a = a.next;
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      yn |= c, e.lanes = c, e.memoizedState = I;
    }
  }
  function hs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(u(191, a));
        a.call(r);
      }
    }
  }
  var Nr = {}, Rt = Xt(Nr), Tr = Xt(Nr), Rr = Xt(Nr);
  function hn(e) {
    if (e === Nr) throw Error(u(174));
    return e;
  }
  function xo(e, t) {
    switch (ye(Rr, t), ye(Tr, e), ye(Rt, Nr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : xa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xa(t, e);
    }
    _e(Rt), ye(Rt, t);
  }
  function Kn() {
    _e(Rt), _e(Tr), _e(Rr);
  }
  function vs(e) {
    hn(Rr.current);
    var t = hn(Rt.current), n = xa(t, e.type);
    t !== n && (ye(Tr, e), ye(Rt, n));
  }
  function No(e) {
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
  var To = [];
  function Ro() {
    for (var e = 0; e < To.length; e++) To[e]._workInProgressVersionPrimary = null;
    To.length = 0;
  }
  var zl = G.ReactCurrentDispatcher, Po = G.ReactCurrentBatchConfig, vn = 0, Ne = null, Ie = null, $e = null, Dl = !1, Pr = !1, Lr = 0, Bf = 0;
  function Ve() {
    throw Error(u(321));
  }
  function Lo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function Mo(e, t, n, r, a, o) {
    if (vn = o, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zl.current = e === null || e.memoizedState === null ? Qf : Kf, e = n(r, a), Pr) {
      o = 0;
      do {
        if (Pr = !1, Lr = 0, 25 <= o) throw Error(u(301));
        o += 1, $e = Ie = null, t.updateQueue = null, zl.current = qf, e = n(r, a);
      } while (Pr);
    }
    if (zl.current = Fl, t = Ie !== null && Ie.next !== null, vn = 0, $e = Ie = Ne = null, Dl = !1, t) throw Error(u(300));
    return e;
  }
  function zo() {
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
      if (e === null) throw Error(u(310));
      Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, $e === null ? Ne.memoizedState = $e = e : $e = $e.next = e;
    }
    return $e;
  }
  function Mr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Do(e) {
    var t = pt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ie, a = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = o.next, o.next = c;
      }
      r.baseQueue = a = o, n.pending = null;
    }
    if (a !== null) {
      o = a.next, r = r.baseState;
      var h = c = null, y = null, R = o;
      do {
        var z = R.lane;
        if ((vn & z) === z) y !== null && (y = y.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), r = R.hasEagerState ? R.eagerState : e(r, R.action);
        else {
          var I = {
            lane: z,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          y === null ? (h = y = I, c = r) : y = y.next = I, Ne.lanes |= z, yn |= z;
        }
        R = R.next;
      } while (R !== null && R !== o);
      y === null ? c = r : y.next = h, _t(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = y, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        o = a.lane, Ne.lanes |= o, yn |= o, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Io(e) {
    var t = pt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var c = a = a.next;
      do
        o = e(o, c.action), c = c.next;
      while (c !== a);
      _t(o, t.memoizedState) || (Ze = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function ys() {
  }
  function gs(e, t) {
    var n = Ne, r = pt(), a = t(), o = !_t(r.memoizedState, a);
    if (o && (r.memoizedState = a, Ze = !0), r = r.queue, Oo(ws.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || $e !== null && $e.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, Es.bind(null, n, r, a, t), void 0, null), je === null) throw Error(u(349));
      (vn & 30) !== 0 || _s(n, t, a);
    }
    return a;
  }
  function _s(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Es(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ks(t) && Ss(e);
  }
  function ws(e, t, n) {
    return n(function() {
      ks(t) && Ss(e);
    });
  }
  function ks(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function Ss(e) {
    var t = $t(e, 1);
    t !== null && Ct(t, e, 1, -1);
  }
  function Cs(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Vf.bind(null, Ne, e), [t.memoizedState, e];
  }
  function zr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function xs() {
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
      var c = Ie.memoizedState;
      if (o = c.destroy, r !== null && Lo(r, c.deps)) {
        a.memoizedState = zr(t, n, o, r);
        return;
      }
    }
    Ne.flags |= e, a.memoizedState = zr(1 | t, n, o, r);
  }
  function Ns(e, t) {
    return Il(8390656, 8, e, t);
  }
  function Oo(e, t) {
    return Ol(2048, 8, e, t);
  }
  function Ts(e, t) {
    return Ol(4, 2, e, t);
  }
  function Rs(e, t) {
    return Ol(4, 4, e, t);
  }
  function Ps(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ls(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ol(4, 4, Ps.bind(null, t, e), n);
  }
  function Fo() {
  }
  function Ms(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Lo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function zs(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Lo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ds(e, t, n) {
    return (vn & 21) === 0 ? (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n) : (_t(n, t) || (n = su(), Ne.lanes |= n, yn |= n, e.baseState = !0), t);
  }
  function Hf(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Po.transition;
    Po.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, Po.transition = r;
    }
  }
  function Is() {
    return pt().memoizedState;
  }
  function Wf(e, t, n) {
    var r = ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Os(e)) Fs(t, n);
    else if (n = fs(e, t, n, r), n !== null) {
      var a = Ge();
      Ct(n, e, r, a), As(n, t, r);
    }
  }
  function Vf(e, t, n) {
    var r = ln(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Os(e)) Fs(t, a);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var c = t.lastRenderedState, h = o(c, n);
        if (a.hasEagerState = !0, a.eagerState = h, _t(h, c)) {
          var y = t.interleaved;
          y === null ? (a.next = a, So(t)) : (a.next = y.next, y.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = fs(e, t, a, r), n !== null && (a = Ge(), Ct(n, e, r, a), As(n, t, r));
    }
  }
  function Os(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function Fs(e, t) {
    Pr = Dl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function As(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Aa(e, n);
    }
  }
  var Fl = { readContext: ft, useCallback: Ve, useContext: Ve, useEffect: Ve, useImperativeHandle: Ve, useInsertionEffect: Ve, useLayoutEffect: Ve, useMemo: Ve, useReducer: Ve, useRef: Ve, useState: Ve, useDebugValue: Ve, useDeferredValue: Ve, useTransition: Ve, useMutableSource: Ve, useSyncExternalStore: Ve, useId: Ve, unstable_isNewReconciler: !1 }, Qf = { readContext: ft, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: Ns, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Il(
      4194308,
      4,
      Ps.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Wf.bind(null, Ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Cs, useDebugValue: Fo, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = Cs(!1), t = e[0];
    return e = Hf.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ne, a = Pt();
    if (we) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), je === null) throw Error(u(349));
      (vn & 30) !== 0 || _s(r, t, n);
    }
    a.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return a.queue = o, Ns(ws.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, zr(9, Es.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = je.identifierPrefix;
    if (we) {
      var n = At, r = Ft;
      n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Lr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Bf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Kf = {
    readContext: ft,
    useCallback: Ms,
    useContext: ft,
    useEffect: Oo,
    useImperativeHandle: Ls,
    useInsertionEffect: Ts,
    useLayoutEffect: Rs,
    useMemo: zs,
    useReducer: Do,
    useRef: xs,
    useState: function() {
      return Do(Mr);
    },
    useDebugValue: Fo,
    useDeferredValue: function(e) {
      var t = pt();
      return Ds(t, Ie.memoizedState, e);
    },
    useTransition: function() {
      var e = Do(Mr)[0], t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: ys,
    useSyncExternalStore: gs,
    useId: Is,
    unstable_isNewReconciler: !1
  }, qf = { readContext: ft, useCallback: Ms, useContext: ft, useEffect: Oo, useImperativeHandle: Ls, useInsertionEffect: Ts, useLayoutEffect: Rs, useMemo: zs, useReducer: Io, useRef: xs, useState: function() {
    return Io(Mr);
  }, useDebugValue: Fo, useDeferredValue: function(e) {
    var t = pt();
    return Ie === null ? t.memoizedState = e : Ds(t, Ie.memoizedState, e);
  }, useTransition: function() {
    var e = Io(Mr)[0], t = pt().memoizedState;
    return [e, t];
  }, useMutableSource: ys, useSyncExternalStore: gs, useId: Is, unstable_isNewReconciler: !1 };
  function wt(e, t) {
    if (e && e.defaultProps) {
      t = V({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ao(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Al = { isMounted: function(e) {
    return (e = e._reactInternals) ? sn(e) === e : !1;
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
  function $s(e, t, n, r, a, o, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, c) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(a, o) : !0;
  }
  function js(e, t, n) {
    var r = !1, a = Jt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ft(o) : (a = be(t) ? dn : We.current, r = t.contextTypes, o = (r = r != null) ? jn(e, a) : Jt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Us(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Al.enqueueReplaceState(t, t.state, null);
  }
  function $o(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Co(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = ft(o) : (o = be(t) ? dn : We.current, a.context = jn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ao(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Al.enqueueReplaceState(a, a.state, null), Ll(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
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
  function jo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Uo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Yf = typeof WeakMap == "function" ? WeakMap : Map;
  function Bs(e, t, n) {
    n = jt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Vl || (Vl = !0, ti = r), Uo(e, t);
    }, n;
  }
  function Hs(e, t, n) {
    n = jt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        Uo(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Uo(e, t), typeof r != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
    }), n;
  }
  function Ws(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Yf();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = up.bind(null, e, t, n), t.then(e, e));
  }
  function Vs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Qs(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Gf = G.ReactCurrentOwner, Ze = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? ds(t, null, n, r) : Wn(t, e.child, n, r);
  }
  function Ks(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Qn(t, a), r = Mo(e, t, n, r, o, a), n = zo(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ut(e, t, a)) : (we && n && mo(t), t.flags |= 1, Ye(e, t, r, a), t.child);
  }
  function qs(e, t, n, r, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ui(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ys(e, t, o, r, a)) : (e = Xl(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & a) === 0) {
      var c = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : gr, n(c, r) && e.ref === t.ref) return Ut(e, t, a);
    }
    return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ys(e, t, n, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (gr(o, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (Ze = !0);
      else return t.lanes = e.lanes, Ut(e, t, a);
    }
    return Bo(e, t, n, r, a);
  }
  function Gs(e, t, n) {
    var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Gn, ut), ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Gn, ut), ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ye(Gn, ut), ut |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ye(Gn, ut), ut |= r;
    return Ye(e, t, a, n), t.child;
  }
  function Xs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bo(e, t, n, r, a) {
    var o = be(n) ? dn : We.current;
    return o = jn(t, o), Qn(t, a), n = Mo(e, t, n, r, o, a), r = zo(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ut(e, t, a)) : (we && r && mo(t), t.flags |= 1, Ye(e, t, n, a), t.child);
  }
  function Js(e, t, n, r, a) {
    if (be(n)) {
      var o = !0;
      wl(t);
    } else o = !1;
    if (Qn(t, a), t.stateNode === null) jl(e, t), js(t, n, r), $o(t, n, r, a), r = !0;
    else if (e === null) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var y = c.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = ft(R) : (R = be(n) ? dn : We.current, R = jn(t, R));
      var z = n.getDerivedStateFromProps, I = typeof z == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      I || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== r || y !== R) && Us(t, c, r, R), Zt = !1;
      var M = t.memoizedState;
      c.state = M, Ll(t, r, c, a), y = t.memoizedState, h !== r || M !== y || Je.current || Zt ? (typeof z == "function" && (Ao(t, n, z, r), y = t.memoizedState), (h = Zt || $s(t, n, h, r, M, y, R)) ? (I || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = y), c.props = r, c.state = y, c.context = R, r = h) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, ps(e, t), h = t.memoizedProps, R = t.type === t.elementType ? h : wt(t.type, h), c.props = R, I = t.pendingProps, M = c.context, y = n.contextType, typeof y == "object" && y !== null ? y = ft(y) : (y = be(n) ? dn : We.current, y = jn(t, y));
      var W = n.getDerivedStateFromProps;
      (z = typeof W == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== I || M !== y) && Us(t, c, r, y), Zt = !1, M = t.memoizedState, c.state = M, Ll(t, r, c, a);
      var K = t.memoizedState;
      h !== I || M !== K || Je.current || Zt ? (typeof W == "function" && (Ao(t, n, W, r), K = t.memoizedState), (R = Zt || $s(t, n, R, r, M, K, y) || !1) ? (z || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, K, y), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, K, y)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), c.props = r, c.state = K, c.context = y, r = R) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ho(e, t, n, r, o, a);
  }
  function Ho(e, t, n, r, a, o) {
    Xs(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return a && ns(t, n, !1), Ut(e, t, o);
    r = t.stateNode, Gf.current = t;
    var h = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && c ? (t.child = Wn(t, e.child, null, o), t.child = Wn(t, null, h, o)) : Ye(e, t, h, o), t.memoizedState = r.state, a && ns(t, n, !0), t.child;
  }
  function bs(e) {
    var t = e.stateNode;
    t.pendingContext ? es(e, t.pendingContext, t.pendingContext !== t.context) : t.context && es(e, t.context, !1), xo(e, t.containerInfo);
  }
  function Zs(e, t, n, r, a) {
    return Hn(), go(a), t.flags |= 256, Ye(e, t, n, r), t.child;
  }
  var Wo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ec(e, t, n) {
    var r = t.pendingProps, a = xe.current, o = !1, c = (t.flags & 128) !== 0, h;
    if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), h ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ye(xe, a & 1), e === null)
      return yo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (c = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, c = { mode: "hidden", children: c }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = c) : o = Jl(c, r, 0, null), e = wn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vo(n), t.memoizedState = Wo, e) : Qo(t, c));
    if (a = e.memoizedState, a !== null && (h = a.dehydrated, h !== null)) return Xf(e, t, c, r, h, a, n);
    if (o) {
      o = r.fallback, c = t.mode, a = e.child, h = a.sibling;
      var y = { mode: "hidden", children: r.children };
      return (c & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = y, t.deletions = null) : (r = on(a, y), r.subtreeFlags = a.subtreeFlags & 14680064), h !== null ? o = on(h, o) : (o = wn(o, c, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, c = e.child.memoizedState, c = c === null ? Vo(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, o.memoizedState = c, o.childLanes = e.childLanes & ~n, t.memoizedState = Wo, r;
    }
    return o = e.child, e = o.sibling, r = on(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Qo(e, t) {
    return t = Jl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function $l(e, t, n, r) {
    return r !== null && go(r), Wn(t, e.child, null, n), e = Qo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xf(e, t, n, r, a, o, c) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = jo(Error(u(422))), $l(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Jl({ mode: "visible", children: r.children }, a, 0, null), o = wn(o, a, c, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Wn(t, e.child, null, c), t.child.memoizedState = Vo(c), t.memoizedState = Wo, o);
    if ((t.mode & 1) === 0) return $l(e, t, c, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var h = r.dgst;
      return r = h, o = Error(u(419)), r = jo(o, r, void 0), $l(e, t, c, r);
    }
    if (h = (c & e.childLanes) !== 0, Ze || h) {
      if (r = je, r !== null) {
        switch (c & -c) {
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
        a = (a & (r.suspendedLanes | c)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, $t(e, a), Ct(r, e, a, -1));
      }
      return ii(), r = jo(Error(u(421))), $l(e, t, c, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sp.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, it = Gt(a.nextSibling), ot = t, we = !0, Et = null, e !== null && (ct[dt++] = Ft, ct[dt++] = At, ct[dt++] = fn, Ft = e.id, At = e.overflow, fn = t), t = Qo(t, r.children), t.flags |= 4096, t);
  }
  function tc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ko(e.return, t, n);
  }
  function Ko(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
  }
  function nc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, o = r.tail;
    if (Ye(e, t, r.children, n), r = xe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
        else if (e.tag === 19) tc(e, n, t);
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
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ko(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ml(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Ko(t, !0, n, null, o);
        break;
      case "together":
        Ko(t, !1, null, null, void 0);
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
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Jf(e, t, n) {
    switch (t.tag) {
      case 3:
        bs(t), Hn();
        break;
      case 5:
        vs(t);
        break;
      case 1:
        be(t.type) && wl(t);
        break;
      case 4:
        xo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        ye(Tl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(xe, xe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ec(e, t, n) : (ye(xe, xe.current & 1), e = Ut(e, t, n), e !== null ? e.sibling : null);
        ye(xe, xe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return nc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ye(xe, xe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Gs(e, t, n);
    }
    return Ut(e, t, n);
  }
  var rc, qo, lc, ac;
  rc = function(e, t) {
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
  }, qo = function() {
  }, lc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, hn(Rt.current);
      var o = null;
      switch (n) {
        case "input":
          a = wa(e, a), r = wa(e, r), o = [];
          break;
        case "select":
          a = V({}, a, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          a = Ca(e, a), r = Ca(e, r), o = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gl);
      }
      Na(n, r);
      var c;
      n = null;
      for (R in a) if (!r.hasOwnProperty(R) && a.hasOwnProperty(R) && a[R] != null) if (R === "style") {
        var h = a[R];
        for (c in h) h.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (f.hasOwnProperty(R) ? o || (o = []) : (o = o || []).push(R, null));
      for (R in r) {
        var y = r[R];
        if (h = a != null ? a[R] : void 0, r.hasOwnProperty(R) && y !== h && (y != null || h != null)) if (R === "style") if (h) {
          for (c in h) !h.hasOwnProperty(c) || y && y.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
          for (c in y) y.hasOwnProperty(c) && h[c] !== y[c] && (n || (n = {}), n[c] = y[c]);
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
  }, ac = function(e, t, n, r) {
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
  function bf(e, t, n) {
    var r = t.pendingProps;
    switch (ho(t), t.tag) {
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
        return r = t.stateNode, Kn(), _e(Je), _e(We), Ro(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Et !== null && (li(Et), Et = null))), qo(e, t), Qe(t), null;
      case 5:
        No(t);
        var a = hn(Rr.current);
        if (n = t.type, e !== null && t.stateNode != null) lc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
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
                ji(r, o), ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ge("invalid", r);
                break;
              case "textarea":
                Hi(r, o), ge("invalid", r);
            }
            Na(n, o), a = null;
            for (var c in o) if (o.hasOwnProperty(c)) {
              var h = o[c];
              c === "children" ? typeof h == "string" ? r.textContent !== h && (o.suppressHydrationWarning !== !0 && yl(r.textContent, h, e), a = ["children", h]) : typeof h == "number" && r.textContent !== "" + h && (o.suppressHydrationWarning !== !0 && yl(
                r.textContent,
                h,
                e
              ), a = ["children", "" + h]) : f.hasOwnProperty(c) && h != null && c === "onScroll" && ge("scroll", r);
            }
            switch (n) {
              case "input":
                Yr(r), Bi(r, o, !0);
                break;
              case "textarea":
                Yr(r), Vi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = gl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Tt] = t, e[Sr] = r, rc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (c = Ta(n, r), n) {
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
                  ji(e, r), a = wa(e, r), ge("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = V({}, r, { value: void 0 }), ge("invalid", e);
                  break;
                case "textarea":
                  Hi(e, r), a = Ca(e, r), ge("invalid", e);
                  break;
                default:
                  a = r;
              }
              Na(n, a), h = a;
              for (o in h) if (h.hasOwnProperty(o)) {
                var y = h[o];
                o === "style" ? Yi(e, y) : o === "dangerouslySetInnerHTML" ? (y = y ? y.__html : void 0, y != null && Ki(e, y)) : o === "children" ? typeof y == "string" ? (n !== "textarea" || y !== "") && tr(e, y) : typeof y == "number" && tr(e, "" + y) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? y != null && o === "onScroll" && ge("scroll", e) : y != null && A(e, o, y, c));
              }
              switch (n) {
                case "input":
                  Yr(e), Bi(e, r, !1);
                  break;
                case "textarea":
                  Yr(e), Vi(e);
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
        if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
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
          if (we && it !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) us(), Hn(), t.flags |= 98560, o = !1;
          else if (o = xl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[Tt] = t;
            } else Hn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), o = !1;
          } else Et !== null && (li(Et), Et = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xe.current & 1) !== 0 ? Oe === 0 && (Oe = 3) : ii())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
      case 4:
        return Kn(), qo(e, t), e === null && wr(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return wo(t.type._context), Qe(t), null;
      case 17:
        return be(t.type) && El(), Qe(t), null;
      case 19:
        if (_e(xe), o = t.memoizedState, o === null) return Qe(t), null;
        if (r = (t.flags & 128) !== 0, c = o.rendering, c === null) if (r) Dr(o, !1);
        else {
          if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (c = Ml(e), c !== null) {
              for (t.flags |= 128, Dr(o, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, c = o.alternate, c === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = c.childLanes, o.lanes = c.lanes, o.child = c.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, o.type = c.type, e = c.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ye(xe, xe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Me() > Xn && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ml(c), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dr(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !we) return Qe(t), null;
          } else 2 * Me() - o.renderingStartTime > Xn && n !== 1073741824 && (t.flags |= 128, r = !0, Dr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (c.sibling = t.child, t.child = c) : (n = o.last, n !== null ? n.sibling = c : t.child = c, o.last = c);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Me(), t.sibling = null, n = xe.current, ye(xe, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
      case 22:
      case 23:
        return oi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ut & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Zf(e, t) {
    switch (ho(t), t.tag) {
      case 1:
        return be(t.type) && El(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Kn(), _e(Je), _e(We), Ro(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return No(t), null;
      case 13:
        if (_e(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Hn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _e(xe), null;
      case 4:
        return Kn(), null;
      case 10:
        return wo(t.type._context), null;
      case 22:
      case 23:
        return oi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ul = !1, Ke = !1, ep = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function Yn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Re(e, t, r);
    }
    else n.current = null;
  }
  function Yo(e, t, n) {
    try {
      n();
    } catch (r) {
      Re(e, t, r);
    }
  }
  var oc = !1;
  function tp(e, t) {
    if (ao = ol, e = $u(), Ja(e)) {
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
          var c = 0, h = -1, y = -1, R = 0, z = 0, I = e, M = null;
          t: for (; ; ) {
            for (var W; I !== n || a !== 0 && I.nodeType !== 3 || (h = c + a), I !== o || r !== 0 && I.nodeType !== 3 || (y = c + r), I.nodeType === 3 && (c += I.nodeValue.length), (W = I.firstChild) !== null; )
              M = I, I = W;
            for (; ; ) {
              if (I === e) break t;
              if (M === n && ++R === a && (h = c), M === o && ++z === r && (y = c), (W = I.nextSibling) !== null) break;
              I = M, M = I.parentNode;
            }
            I = W;
          }
          n = h === -1 || y === -1 ? null : { start: h, end: y };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (oo = { focusedElem: e, selectionRange: n }, ol = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
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
              var q = K.memoizedProps, ze = K.memoizedState, k = t.stateNode, _ = k.getSnapshotBeforeUpdate(t.elementType === t.type ? q : wt(t.type, q), ze);
              k.__reactInternalSnapshotBeforeUpdate = _;
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
            throw Error(u(163));
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
    return K = oc, oc = !1, K;
  }
  function Ir(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          a.destroy = void 0, o !== void 0 && Yo(t, n, o);
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
  function Go(e) {
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
  function ic(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[Sr], delete t[co], delete t[Af], delete t[$f])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || uc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gl));
    else if (r !== 4 && (e = e.child, e !== null)) for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), e = e.sibling;
  }
  function Jo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), e = e.sibling;
  }
  var Be = null, kt = !1;
  function tn(e, t, n) {
    for (n = n.child; n !== null; ) cc(e, t, n), n = n.sibling;
  }
  function cc(e, t, n) {
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
            var o = a, c = o.destroy;
            o = o.tag, c !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Yo(n, t, c), a = a.next;
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
  function dc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ep()), t.forEach(function(r) {
        var a = cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e, c = t, h = c;
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
        if (Be === null) throw Error(u(160));
        cc(o, c, a), Be = null, kt = !1;
        var y = a.alternate;
        y !== null && (y.return = null), a.return = null;
      } catch (R) {
        Re(a, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fc(t, e), t = t.sibling;
  }
  function fc(e, t) {
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
          var o = e.memoizedProps, c = n !== null ? n.memoizedProps : o, h = e.type, y = e.updateQueue;
          if (e.updateQueue = null, y !== null) try {
            h === "input" && o.type === "radio" && o.name != null && Ui(a, o), Ta(h, c);
            var R = Ta(h, o);
            for (c = 0; c < y.length; c += 2) {
              var z = y[c], I = y[c + 1];
              z === "style" ? Yi(a, I) : z === "dangerouslySetInnerHTML" ? Ki(a, I) : z === "children" ? tr(a, I) : A(a, z, I, R);
            }
            switch (h) {
              case "input":
                ka(a, o);
                break;
              case "textarea":
                Wi(a, o);
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
          if (e.stateNode === null) throw Error(u(162));
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
        St(t, e), Lt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (ei = Me())), r & 4 && dc(e);
        break;
      case 22:
        if (z = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ke = (R = Ke) || z, St(t, e), Ke = R) : St(t, e), Lt(e), r & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !z && (e.mode & 1) !== 0) for (Q = e, z = e.child; z !== null; ) {
            for (I = Q = z; Q !== null; ) {
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
                    hc(I);
                    continue;
                  }
              }
              W !== null ? (W.return = M, Q = W) : hc(I);
            }
            z = z.sibling;
          }
          e: for (z = null, I = e; ; ) {
            if (I.tag === 5) {
              if (z === null) {
                z = I;
                try {
                  a = I.stateNode, R ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (h = I.stateNode, y = I.memoizedProps.style, c = y != null && y.hasOwnProperty("display") ? y.display : null, h.style.display = qi("display", c));
                } catch (q) {
                  Re(e, e.return, q);
                }
              }
            } else if (I.tag === 6) {
              if (z === null) try {
                I.stateNode.nodeValue = R ? "" : I.memoizedProps;
              } catch (q) {
                Re(e, e.return, q);
              }
            } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === e) && I.child !== null) {
              I.child.return = I, I = I.child;
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              z === I && (z = null), I = I.return;
            }
            z === I && (z = null), I.sibling.return = I.return, I = I.sibling;
          }
        }
        break;
      case 19:
        St(t, e), Lt(e), r & 4 && dc(e);
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
            if (uc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (tr(a, ""), r.flags &= -33);
            var o = sc(e);
            Jo(e, o, a);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, h = sc(e);
            Xo(e, h, c);
            break;
          default:
            throw Error(u(161));
        }
      } catch (y) {
        Re(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function np(e, t, n) {
    Q = e, pc(e);
  }
  function pc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, o = a.child;
      if (a.tag === 22 && r) {
        var c = a.memoizedState !== null || Ul;
        if (!c) {
          var h = a.alternate, y = h !== null && h.memoizedState !== null || Ke;
          h = Ul;
          var R = Ke;
          if (Ul = c, (Ke = y) && !R) for (Q = a; Q !== null; ) c = Q, y = c.child, c.tag === 22 && c.memoizedState !== null ? vc(a) : y !== null ? (y.return = c, Q = y) : vc(a);
          for (; o !== null; ) Q = o, pc(o), o = o.sibling;
          Q = a, Ul = h, Ke = R;
        }
        mc(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = a, Q = o) : mc(e);
    }
  }
  function mc(e) {
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
              o !== null && hs(t, o, r);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                hs(t, c, n);
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
                    var I = z.dehydrated;
                    I !== null && fr(I);
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
              throw Error(u(163));
          }
          Ke || t.flags & 512 && Go(t);
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
  function hc(e) {
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
  function vc(e) {
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
              Go(t);
            } catch (y) {
              Re(t, o, y);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Go(t);
            } catch (y) {
              Re(t, c, y);
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
  var rp = Math.ceil, Hl = G.ReactCurrentDispatcher, bo = G.ReactCurrentOwner, mt = G.ReactCurrentBatchConfig, ue = 0, je = null, De = null, He = 0, ut = 0, Gn = Xt(0), Oe = 0, Or = null, yn = 0, Wl = 0, Zo = 0, Fr = null, et = null, ei = 0, Xn = 1 / 0, Bt = null, Vl = !1, ti = null, nn = null, Ql = !1, rn = null, Kl = 0, Ar = 0, ni = null, ql = -1, Yl = 0;
  function Ge() {
    return (ue & 6) !== 0 ? Me() : ql !== -1 ? ql : ql = Me();
  }
  function ln(e) {
    return (e.mode & 1) === 0 ? 1 : (ue & 2) !== 0 && He !== 0 ? He & -He : Uf.transition !== null ? (Yl === 0 && (Yl = su()), Yl) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : gu(e.type)), e);
  }
  function Ct(e, t, n, r) {
    if (50 < Ar) throw Ar = 0, ni = null, Error(u(185));
    ir(e, n, r), ((ue & 2) === 0 || e !== je) && (e === je && ((ue & 2) === 0 && (Wl |= n), Oe === 4 && an(e, He)), tt(e, r), n === 1 && ue === 0 && (t.mode & 1) === 0 && (Xn = Me() + 500, kl && bt()));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    jd(e, t);
    var r = rl(e, e === je ? He : 0);
    if (r === 0) n !== null && ou(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ou(n), t === 1) e.tag === 0 ? jf(gc.bind(null, e)) : rs(gc.bind(null, e)), Of(function() {
        (ue & 6) === 0 && bt();
      }), n = null;
      else {
        switch (cu(r)) {
          case 1:
            n = Ia;
            break;
          case 4:
            n = iu;
            break;
          case 16:
            n = Zr;
            break;
          case 536870912:
            n = uu;
            break;
          default:
            n = Zr;
        }
        n = Nc(n, yc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function yc(e, t) {
    if (ql = -1, Yl = 0, (ue & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Jn() && e.callbackNode !== n) return null;
    var r = rl(e, e === je ? He : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Gl(e, r);
    else {
      t = r;
      var a = ue;
      ue |= 2;
      var o = Ec();
      (je !== e || He !== t) && (Bt = null, Xn = Me() + 500, _n(e, t));
      do
        try {
          op();
          break;
        } catch (h) {
          _c(e, h);
        }
      while (!0);
      Eo(), Hl.current = o, ue = a, De !== null ? t = 0 : (je = null, He = 0, t = Oe);
    }
    if (t !== 0) {
      if (t === 2 && (a = Oa(e), a !== 0 && (r = a, t = ri(e, a))), t === 1) throw n = Or, _n(e, 0), an(e, r), tt(e, Me()), n;
      if (t === 6) an(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !lp(a) && (t = Gl(e, r), t === 2 && (o = Oa(e), o !== 0 && (r = o, t = ri(e, o))), t === 1)) throw n = Or, _n(e, 0), an(e, r), tt(e, Me()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            En(e, et, Bt);
            break;
          case 3:
            if (an(e, r), (r & 130023424) === r && (t = ei + 500 - Me(), 10 < t)) {
              if (rl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Ge(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = uo(En.bind(null, e, et, Bt), t);
              break;
            }
            En(e, et, Bt);
            break;
          case 4:
            if (an(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var c = 31 - gt(r);
              o = 1 << c, c = t[c], c > a && (a = c), r &= ~o;
            }
            if (r = a, r = Me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rp(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = uo(En.bind(null, e, et, Bt), r);
              break;
            }
            En(e, et, Bt);
            break;
          case 5:
            En(e, et, Bt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return tt(e, Me()), e.callbackNode === n ? yc.bind(null, e) : null;
  }
  function ri(e, t) {
    var n = Fr;
    return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = Gl(e, t), e !== 2 && (t = et, et = n, t !== null && li(t)), e;
  }
  function li(e) {
    et === null ? et = e : et.push.apply(et, e);
  }
  function lp(e) {
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
    for (t &= ~Zo, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - gt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function gc(e) {
    if ((ue & 6) !== 0) throw Error(u(327));
    Jn();
    var t = rl(e, 0);
    if ((t & 1) === 0) return tt(e, Me()), null;
    var n = Gl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Oa(e);
      r !== 0 && (t = r, n = ri(e, r));
    }
    if (n === 1) throw n = Or, _n(e, 0), an(e, t), tt(e, Me()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, En(e, et, Bt), tt(e, Me()), null;
  }
  function ai(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      ue = n, ue === 0 && (Xn = Me() + 500, kl && bt());
    }
  }
  function gn(e) {
    rn !== null && rn.tag === 0 && (ue & 6) === 0 && Jn();
    var t = ue;
    ue |= 1;
    var n = mt.transition, r = pe;
    try {
      if (mt.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, mt.transition = n, ue = t, (ue & 6) === 0 && bt();
    }
  }
  function oi() {
    ut = Gn.current, _e(Gn);
  }
  function _n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, If(n)), De !== null) for (n = De.return; n !== null; ) {
      var r = n;
      switch (ho(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && El();
          break;
        case 3:
          Kn(), _e(Je), _e(We), Ro();
          break;
        case 5:
          No(r);
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
          wo(r.type._context);
          break;
        case 22:
        case 23:
          oi();
      }
      n = n.return;
    }
    if (je = e, De = e = on(e.current, null), He = ut = t, Oe = 0, Or = null, Zo = Wl = yn = 0, et = Fr = null, mn !== null) {
      for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, o = n.pending;
        if (o !== null) {
          var c = o.next;
          o.next = a, r.next = c;
        }
        n.pending = r;
      }
      mn = null;
    }
    return e;
  }
  function _c(e, t) {
    do {
      var n = De;
      try {
        if (Eo(), zl.current = Fl, Dl) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Dl = !1;
        }
        if (vn = 0, $e = Ie = Ne = null, Pr = !1, Lr = 0, bo.current = null, n === null || n.return === null) {
          Oe = 1, Or = t, De = null;
          break;
        }
        e: {
          var o = e, c = n.return, h = n, y = t;
          if (t = He, h.flags |= 32768, y !== null && typeof y == "object" && typeof y.then == "function") {
            var R = y, z = h, I = z.tag;
            if ((z.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var M = z.alternate;
              M ? (z.updateQueue = M.updateQueue, z.memoizedState = M.memoizedState, z.lanes = M.lanes) : (z.updateQueue = null, z.memoizedState = null);
            }
            var W = Vs(c);
            if (W !== null) {
              W.flags &= -257, Qs(W, c, h, o, t), W.mode & 1 && Ws(o, R, t), t = W, y = R;
              var K = t.updateQueue;
              if (K === null) {
                var q = /* @__PURE__ */ new Set();
                q.add(y), t.updateQueue = q;
              } else K.add(y);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ws(o, R, t), ii();
                break e;
              }
              y = Error(u(426));
            }
          } else if (we && h.mode & 1) {
            var ze = Vs(c);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), Qs(ze, c, h, o, t), go(qn(y, h));
              break e;
            }
          }
          o = y = qn(y, h), Oe !== 4 && (Oe = 2), Fr === null ? Fr = [o] : Fr.push(o), o = c;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var k = Bs(o, y, t);
                ms(o, k);
                break e;
              case 1:
                h = y;
                var _ = o.type, S = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (nn === null || !nn.has(S)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var O = Hs(o, h, t);
                  ms(o, O);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        kc(n);
      } catch (Y) {
        t = Y, De === n && n !== null && (De = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ec() {
    var e = Hl.current;
    return Hl.current = Fl, e === null ? Fl : e;
  }
  function ii() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), je === null || (yn & 268435455) === 0 && (Wl & 268435455) === 0 || an(je, He);
  }
  function Gl(e, t) {
    var n = ue;
    ue |= 2;
    var r = Ec();
    (je !== e || He !== t) && (Bt = null, _n(e, t));
    do
      try {
        ap();
        break;
      } catch (a) {
        _c(e, a);
      }
    while (!0);
    if (Eo(), ue = n, Hl.current = r, De !== null) throw Error(u(261));
    return je = null, He = 0, Oe;
  }
  function ap() {
    for (; De !== null; ) wc(De);
  }
  function op() {
    for (; De !== null && !Ld(); ) wc(De);
  }
  function wc(e) {
    var t = xc(e.alternate, e, ut);
    e.memoizedProps = e.pendingProps, t === null ? kc(e) : De = t, bo.current = null;
  }
  function kc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = bf(n, t, ut), n !== null) {
          De = n;
          return;
        }
      } else {
        if (n = Zf(n, t), n !== null) {
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
      mt.transition = null, pe = 1, ip(e, t, n, r);
    } finally {
      mt.transition = a, pe = r;
    }
    return null;
  }
  function ip(e, t, n, r) {
    do
      Jn();
    while (rn !== null);
    if ((ue & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Ud(e, o), e === je && (De = je = null, He = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ql || (Ql = !0, Nc(Zr, function() {
      return Jn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = mt.transition, mt.transition = null;
      var c = pe;
      pe = 1;
      var h = ue;
      ue |= 4, bo.current = null, tp(e, n), fc(n, e), Tf(oo), ol = !!ao, oo = ao = null, e.current = n, np(n), Md(), ue = h, pe = c, mt.transition = o;
    } else e.current = n;
    if (Ql && (Ql = !1, rn = e, Kl = a), o = e.pendingLanes, o === 0 && (nn = null), Id(n.stateNode), tt(e, Me()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (Vl) throw Vl = !1, e = ti, ti = null, e;
    return (Kl & 1) !== 0 && e.tag !== 0 && Jn(), o = e.pendingLanes, (o & 1) !== 0 ? e === ni ? Ar++ : (Ar = 0, ni = e) : Ar = 0, bt(), null;
  }
  function Jn() {
    if (rn !== null) {
      var e = cu(Kl), t = mt.transition, n = pe;
      try {
        if (mt.transition = null, pe = 16 > e ? 16 : e, rn === null) var r = !1;
        else {
          if (e = rn, rn = null, Kl = 0, (ue & 6) !== 0) throw Error(u(331));
          var a = ue;
          for (ue |= 4, Q = e.current; Q !== null; ) {
            var o = Q, c = o.child;
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
                    var I = z.child;
                    if (I !== null) I.return = z, Q = I;
                    else for (; Q !== null; ) {
                      z = Q;
                      var M = z.sibling, W = z.return;
                      if (ic(z), z === R) {
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
            if ((o.subtreeFlags & 2064) !== 0 && c !== null) c.return = o, Q = c;
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
          var _ = e.current;
          for (Q = _; Q !== null; ) {
            c = Q;
            var S = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && S !== null) S.return = c, Q = S;
            else e: for (c = _; Q !== null; ) {
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
              if (h === c) {
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
          if (ue = a, bt(), Nt && typeof Nt.onPostCommitFiberRoot == "function") try {
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
  function Sc(e, t, n) {
    t = qn(n, t), t = Bs(e, t, 1), e = en(e, t, 1), t = Ge(), e !== null && (ir(e, 1, t), tt(e, t));
  }
  function Re(e, t, n) {
    if (e.tag === 3) Sc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
          e = qn(n, e), e = Hs(t, e, 1), t = en(t, e, 1), e = Ge(), t !== null && (ir(t, 1, e), tt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function up(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ge(), e.pingedLanes |= e.suspendedLanes & n, je === e && (He & n) === n && (Oe === 4 || Oe === 3 && (He & 130023424) === He && 500 > Me() - ei ? _n(e, 0) : Zo |= n), tt(e, t);
  }
  function Cc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = nl, nl <<= 1, (nl & 130023424) === 0 && (nl = 4194304)));
    var n = Ge();
    e = $t(e, t), e !== null && (ir(e, t, n), tt(e, n));
  }
  function sp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Cc(e, n);
  }
  function cp(e, t) {
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
        throw Error(u(314));
    }
    r !== null && r.delete(t), Cc(e, n);
  }
  var xc;
  xc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) Ze = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ze = !1, Jf(e, t, n);
      Ze = (e.flags & 131072) !== 0;
    }
    else Ze = !1, we && (t.flags & 1048576) !== 0 && ls(t, Cl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        jl(e, t), e = t.pendingProps;
        var a = jn(t, We.current);
        Qn(t, n), a = Mo(null, t, r, e, a, n);
        var o = zo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (o = !0, wl(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Co(t), a.updater = Al, t.stateNode = a, a._reactInternals = t, $o(t, r, e, n), t = Ho(null, t, r, !0, o, n)) : (t.tag = 0, we && o && mo(t), Ye(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (jl(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = fp(r), e = wt(r, e), a) {
            case 0:
              t = Bo(null, t, r, e, n);
              break e;
            case 1:
              t = Js(null, t, r, e, n);
              break e;
            case 11:
              t = Ks(null, t, r, e, n);
              break e;
            case 14:
              t = qs(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), Bo(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), Js(e, t, r, a, n);
      case 3:
        e: {
          if (bs(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, a = o.element, ps(e, t), Ll(t, r, null, n);
          var c = t.memoizedState;
          if (r = c.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            a = qn(Error(u(423)), t), t = Zs(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = qn(Error(u(424)), t), t = Zs(e, t, r, n, a);
            break e;
          } else for (it = Gt(t.stateNode.containerInfo.firstChild), ot = t, we = !0, Et = null, n = ds(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return vs(t), e === null && yo(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, c = a.children, io(r, a) ? c = null : o !== null && io(r, o) && (t.flags |= 32), Xs(e, t), Ye(e, t, c, n), t.child;
      case 6:
        return e === null && yo(t), null;
      case 13:
        return ec(e, t, n);
      case 4:
        return xo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : Ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), Ks(e, t, r, a, n);
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, c = a.value, ye(Tl, r._currentValue), r._currentValue = c, o !== null) if (_t(o.value, c)) {
            if (o.children === a.children && !Je.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var h = o.dependencies;
            if (h !== null) {
              c = o.child;
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
                  o.lanes |= n, y = o.alternate, y !== null && (y.lanes |= n), ko(
                    o.return,
                    n,
                    t
                  ), h.lanes |= n;
                  break;
                }
                y = y.next;
              }
            } else if (o.tag === 10) c = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (c = o.return, c === null) throw Error(u(341));
              c.lanes |= n, h = c.alternate, h !== null && (h.lanes |= n), ko(c, n, t), c = o.sibling;
            } else c = o.child;
            if (c !== null) c.return = o;
            else for (c = o; c !== null; ) {
              if (c === t) {
                c = null;
                break;
              }
              if (o = c.sibling, o !== null) {
                o.return = c.return, c = o;
                break;
              }
              c = c.return;
            }
            o = c;
          }
          Ye(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Qn(t, n), a = ft(a), r = r(a), t.flags |= 1, Ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = wt(r, t.pendingProps), a = wt(r.type, a), qs(e, t, r, a, n);
      case 15:
        return Ys(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : wt(r, a), jl(e, t), t.tag = 1, be(r) ? (e = !0, wl(t)) : e = !1, Qn(t, n), js(t, r, a), $o(t, r, a, n), Ho(null, t, r, !0, e, n);
      case 19:
        return nc(e, t, n);
      case 22:
        return Gs(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Nc(e, t) {
    return au(e, t);
  }
  function dp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, n, r) {
    return new dp(e, t, n, r);
  }
  function ui(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function fp(e) {
    if (typeof e == "function") return ui(e) ? 1 : 0;
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
    var c = 2;
    if (r = e, typeof e == "function") ui(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else e: switch (e) {
      case ie:
        return wn(n.children, a, o, t);
      case Pe:
        c = 8, a |= 8;
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
            c = 10;
            break e;
          case yt:
            c = 9;
            break e;
          case Xe:
            c = 11;
            break e;
          case Ce:
            c = 14;
            break e;
          case Ae:
            c = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = ht(c, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
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
  function ci(e, t, n) {
    return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function pp(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fa(0), this.expirationTimes = Fa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fa(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function di(e, t, n, r, a, o, c, h, y) {
    return e = new pp(e, t, n, h, y), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ht(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Co(o), e;
  }
  function mp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Tc(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
      if (sn(e) !== e || e.tag !== 1) throw Error(u(170));
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
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (be(n)) return ts(e, n, t);
    }
    return t;
  }
  function Rc(e, t, n, r, a, o, c, h, y) {
    return e = di(n, r, !0, e, a, o, c, h, y), e.context = Tc(null), n = e.current, r = Ge(), a = ln(n), o = jt(r, a), o.callback = t ?? null, en(n, o, a), e.current.lanes = a, ir(e, a, r), tt(e, r), e;
  }
  function bl(e, t, n, r) {
    var a = t.current, o = Ge(), c = ln(a);
    return n = Tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(o, c), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(a, t, c), e !== null && (Ct(e, a, c, o), Pl(e, a, c)), c;
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
  function Pc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fi(e, t) {
    Pc(e, t), (e = e.alternate) && Pc(e, t);
  }
  function hp() {
    return null;
  }
  var Lc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function pi(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = pi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    bl(e, t, null, null);
  }, ea.prototype.unmount = pi.prototype.unmount = function() {
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
      var t = pu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
      Kt.splice(n, 0, e), n === 0 && vu(e);
    }
  };
  function mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Mc() {
  }
  function vp(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var R = Zl(c);
          o.call(R);
        };
      }
      var c = Rc(t, r, e, 0, null, !1, !1, "", Mc);
      return e._reactRootContainer = c, e[It] = c.current, wr(e.nodeType === 8 ? e.parentNode : e), gn(), c;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var h = r;
      r = function() {
        var R = Zl(y);
        h.call(R);
      };
    }
    var y = di(e, 0, !1, null, null, !1, !1, "", Mc);
    return e._reactRootContainer = y, e[It] = y.current, wr(e.nodeType === 8 ? e.parentNode : e), gn(function() {
      bl(t, y, n, r);
    }), y;
  }
  function na(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var c = o;
      if (typeof a == "function") {
        var h = a;
        a = function() {
          var y = Zl(c);
          h.call(y);
        };
      }
      bl(t, c, e, a);
    } else c = vp(n, t, e, a, r);
    return Zl(c);
  }
  du = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = or(t.pendingLanes);
          n !== 0 && (Aa(t, n | 1), tt(t, Me()), (ue & 6) === 0 && (Xn = Me() + 500, bt()));
        }
        break;
      case 13:
        gn(function() {
          var r = $t(e, 1);
          if (r !== null) {
            var a = Ge();
            Ct(r, e, 1, a);
          }
        }), fi(e, 1);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = $t(e, 134217728);
      if (t !== null) {
        var n = Ge();
        Ct(t, e, 134217728, n);
      }
      fi(e, 134217728);
    }
  }, fu = function(e) {
    if (e.tag === 13) {
      var t = ln(e), n = $t(e, t);
      if (n !== null) {
        var r = Ge();
        Ct(n, e, t, r);
      }
      fi(e, t);
    }
  }, pu = function() {
    return pe;
  }, mu = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, La = function(e, t, n) {
    switch (t) {
      case "input":
        if (ka(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = _l(r);
              if (!a) throw Error(u(90));
              $i(r), ka(r, a);
            }
          }
        }
        break;
      case "textarea":
        Wi(e, n);
        break;
      case "select":
        t = n.value, t != null && Tn(e, !!n.multiple, t, !1);
    }
  }, bi = ai, Zi = gn;
  var yp = { usingClientEntryPoint: !1, Events: [Cr, An, _l, Xi, Ji, ai] }, $r = { findFiberByHostInstance: cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gp = { bundleType: $r.bundleType, version: $r.version, rendererPackageName: $r.rendererPackageName, rendererConfig: $r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ru(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: $r.findFiberByHostInstance || hp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ra.isDisabled && ra.supportsFiber) try {
      el = ra.inject(gp), Nt = ra;
    } catch {
    }
  }
  return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp, nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mi(t)) throw Error(u(200));
    return mp(e, t, null, n);
  }, nt.createRoot = function(e, t) {
    if (!mi(e)) throw Error(u(299));
    var n = !1, r = "", a = Lc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = di(e, 1, !1, null, null, n, !1, r, a), e[It] = t.current, wr(e.nodeType === 8 ? e.parentNode : e), new pi(t);
  }, nt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = ru(t), e = e === null ? null : e.stateNode, e;
  }, nt.flushSync = function(e) {
    return gn(e);
  }, nt.hydrate = function(e, t, n) {
    if (!ta(t)) throw Error(u(200));
    return na(null, e, t, !0, n);
  }, nt.hydrateRoot = function(e, t, n) {
    if (!mi(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, a = !1, o = "", c = Lc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = Rc(t, null, e, 1, n ?? null, a, !1, o, c), e[It] = t.current, wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ea(t);
  }, nt.render = function(e, t, n) {
    if (!ta(t)) throw Error(u(200));
    return na(null, e, t, !1, n);
  }, nt.unmountComponentAtNode = function(e) {
    if (!ta(e)) throw Error(u(40));
    return e._reactRootContainer ? (gn(function() {
      na(null, null, e, !1, function() {
        e._reactRootContainer = null, e[It] = null;
      });
    }), !0) : !1;
  }, nt.unstable_batchedUpdates = ai, nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ta(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return na(e, t, n, !1, r);
  }, nt.version = "18.3.1-next-f1338f8080-20240426", nt;
}
var Ac;
function Cp() {
  if (Ac) return vi.exports;
  Ac = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), vi.exports = Sp(), vi.exports;
}
var $c;
function xp() {
  if ($c) return la;
  $c = 1;
  var l = Cp();
  return la.createRoot = l.createRoot, la.hydrateRoot = l.hydrateRoot, la;
}
var Np = xp();
const Tp = /* @__PURE__ */ Xc(Np);
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
var jc = "popstate";
function Uc(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Rp(l = {}) {
  function i(f, p) {
    let {
      pathname: v = "/",
      search: g = "",
      hash: w = ""
    } = Nn(f.location.hash.substring(1));
    return !v.startsWith("/") && !v.startsWith(".") && (v = "/" + v), Ti(
      "",
      { pathname: v, search: g, hash: w },
      // state defaults to `null` because `window.history.state` does
      p.state && p.state.usr || null,
      p.state && p.state.key || "default"
    );
  }
  function u(f, p) {
    let v = f.document.querySelector("base"), g = "";
    if (v && v.getAttribute("href")) {
      let w = f.location.href, C = w.indexOf("#");
      g = C === -1 ? w : w.slice(0, C);
    }
    return g + "#" + (typeof p == "string" ? p : Wr(p));
  }
  function s(f, p) {
    vt(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        p
      )})`
    );
  }
  return Lp(
    i,
    u,
    s,
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
function Pp() {
  return Math.random().toString(36).substring(2, 10);
}
function Bc(l, i) {
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
function Ti(l, i, u = null, s, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? Nn(i) : i,
    state: u,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || s || Pp(),
    mask: f
  };
}
function Wr({
  pathname: l = "/",
  search: i = "",
  hash: u = ""
}) {
  return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i), u && u !== "#" && (l += u.charAt(0) === "#" ? u : "#" + u), l;
}
function Nn(l) {
  let i = {};
  if (l) {
    let u = l.indexOf("#");
    u >= 0 && (i.hash = l.substring(u), l = l.substring(0, u));
    let s = l.indexOf("?");
    s >= 0 && (i.search = l.substring(s), l = l.substring(0, s)), l && (i.pathname = l);
  }
  return i;
}
function Lp(l, i, u, s = {}) {
  let { window: f = document.defaultView, v5Compat: p = !1 } = s, v = f.history, g = "POP", w = null, C = P();
  C == null && (C = 0, v.replaceState({ ...v.state, idx: C }, ""));
  function P() {
    return (v.state || { idx: null }).idx;
  }
  function x() {
    g = "POP";
    let T = P(), L = T == null ? null : T - C;
    C = T, w && w({ action: g, location: F.location, delta: L });
  }
  function D(T, L) {
    g = "PUSH";
    let H = Uc(T) ? T : Ti(F.location, T, L);
    u && u(H, T), C = P() + 1;
    let A = Bc(H, C), G = F.createHref(H.mask || H);
    try {
      v.pushState(A, "", G);
    } catch (ee) {
      if (ee instanceof DOMException && ee.name === "DataCloneError")
        throw ee;
      f.location.assign(G);
    }
    p && w && w({ action: g, location: F.location, delta: 1 });
  }
  function $(T, L) {
    g = "REPLACE";
    let H = Uc(T) ? T : Ti(F.location, T, L);
    u && u(H, T), C = P();
    let A = Bc(H, C), G = F.createHref(H.mask || H);
    v.replaceState(A, "", G), p && w && w({ action: g, location: F.location, delta: 0 });
  }
  function j(T) {
    return Mp(f, T);
  }
  let F = {
    get action() {
      return g;
    },
    get location() {
      return l(f, v);
    },
    listen(T) {
      if (w)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(jc, x), w = T, () => {
        f.removeEventListener(jc, x), w = null;
      };
    },
    createHref(T) {
      return i(f, T);
    },
    createURL: j,
    encodeLocation(T) {
      let L = j(T);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: D,
    replace: $,
    go(T) {
      return v.go(T);
    }
  };
  return F;
}
function Mp(l, i, u = !1) {
  let s = "http://localhost";
  l && (s = l.location.origin !== "null" ? l.location.origin : l.location.href), ke(s, "No window.location.(origin|href) available to create URL");
  let f = typeof i == "string" ? i : Wr(i);
  return f = f.replace(/ $/, "%20"), !u && f.startsWith("//") && (f = s + f), new URL(f, s);
}
function bc(l, i, u = "/") {
  return zp(l, i, u, !1);
}
function zp(l, i, u, s, f) {
  let p = typeof i == "string" ? Nn(i) : i, v = Ht(p.pathname || "/", u);
  if (v == null)
    return null;
  let g = Dp(l), w = null, C = Qp(v);
  for (let P = 0; w == null && P < g.length; ++P)
    w = Wp(
      g[P],
      C,
      s
    );
  return w;
}
function Dp(l) {
  let i = Zc(l);
  return Ip(i), i;
}
function Zc(l, i = [], u = [], s = "", f = !1) {
  let p = (v, g, w = f, C) => {
    let P = {
      relativePath: C === void 0 ? v.path || "" : C,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: g,
      route: v
    };
    if (P.relativePath.startsWith("/")) {
      if (!P.relativePath.startsWith(s) && w)
        return;
      ke(
        P.relativePath.startsWith(s),
        `Absolute route path "${P.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), P.relativePath = P.relativePath.slice(s.length);
    }
    let x = xt([s, P.relativePath]), D = u.concat(P);
    v.children && v.children.length > 0 && (ke(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      v.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Zc(
      v.children,
      i,
      D,
      x,
      w
    )), !(v.path == null && !v.index) && i.push({
      path: x,
      score: Bp(x, v.index),
      routesMeta: D
    });
  };
  return l.forEach((v, g) => {
    var w;
    if (v.path === "" || !((w = v.path) != null && w.includes("?")))
      p(v, g);
    else
      for (let C of ed(v.path))
        p(v, g, !0, C);
  }), i;
}
function ed(l) {
  let i = l.split("/");
  if (i.length === 0) return [];
  let [u, ...s] = i, f = u.endsWith("?"), p = u.replace(/\?$/, "");
  if (s.length === 0)
    return f ? [p, ""] : [p];
  let v = ed(s.join("/")), g = [];
  return g.push(
    ...v.map(
      (w) => w === "" ? p : [p, w].join("/")
    )
  ), f && g.push(...v), g.map(
    (w) => l.startsWith("/") && w === "" ? "/" : w
  );
}
function Ip(l) {
  l.sort(
    (i, u) => i.score !== u.score ? u.score - i.score : Hp(
      i.routesMeta.map((s) => s.childrenIndex),
      u.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var Op = /^:[\w-]+$/, Fp = 3, Ap = 2, $p = 1, jp = 10, Up = -2, Hc = (l) => l === "*";
function Bp(l, i) {
  let u = l.split("/"), s = u.length;
  return u.some(Hc) && (s += Up), i && (s += Ap), u.filter((f) => !Hc(f)).reduce(
    (f, p) => f + (Op.test(p) ? Fp : p === "" ? $p : jp),
    s
  );
}
function Hp(l, i) {
  return l.length === i.length && l.slice(0, -1).every((s, f) => s === i[f]) ? (
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
function Wp(l, i, u = !1) {
  let { routesMeta: s } = l, f = {}, p = "/", v = [];
  for (let g = 0; g < s.length; ++g) {
    let w = s[g], C = g === s.length - 1, P = p === "/" ? i : i.slice(p.length) || "/", x = fa(
      { path: w.relativePath, caseSensitive: w.caseSensitive, end: C },
      P
    ), D = w.route;
    if (!x && C && u && !s[s.length - 1].route.index && (x = fa(
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
      pathnameBase: Gp(
        xt([p, x.pathnameBase])
      ),
      route: D
    }), x.pathnameBase !== "/" && (p = xt([p, x.pathnameBase]));
  }
  return v;
}
function fa(l, i) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [u, s] = Vp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = i.match(u);
  if (!f) return null;
  let p = f[0], v = p.replace(/(.)\/+$/, "$1"), g = f.slice(1);
  return {
    params: s.reduce(
      (C, { paramName: P, isOptional: x }, D) => {
        if (P === "*") {
          let j = g[D] || "";
          v = p.slice(0, p.length - j.length).replace(/(.)\/+$/, "$1");
        }
        const $ = g[D];
        return x && !$ ? C[P] = void 0 : C[P] = ($ || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: p,
    pathnameBase: v,
    pattern: l
  };
}
function Vp(l, i = !1, u = !0) {
  vt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let s = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (v, g, w, C, P) => {
      if (s.push({ paramName: g, isOptional: w != null }), w) {
        let x = P.charAt(C + v.length);
        return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (s.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : u ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, i ? void 0 : "i"), s];
}
function Qp(l) {
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
  let u = i.endsWith("/") ? i.length - 1 : i.length, s = l.charAt(u);
  return s && s !== "/" ? null : l.slice(u) || "/";
}
var Kp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function qp(l, i = "/") {
  let {
    pathname: u,
    search: s = "",
    hash: f = ""
  } = typeof l == "string" ? Nn(l) : l, p;
  return u ? (u = td(u), u.startsWith("/") ? p = Wc(u.substring(1), "/") : p = Wc(u, i)) : p = i, {
    pathname: p,
    search: Xp(s),
    hash: Jp(f)
  };
}
function Wc(l, i) {
  let u = pa(i).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? u.length > 1 && u.pop() : f !== "." && u.push(f);
  }), u.length > 1 ? u.join("/") : "/";
}
function _i(l, i, u, s) {
  return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Yp(l) {
  return l.filter(
    (i, u) => u === 0 || i.route.path && i.route.path.length > 0
  );
}
function Pi(l) {
  let i = Yp(l);
  return i.map(
    (u, s) => s === i.length - 1 ? u.pathname : u.pathnameBase
  );
}
function va(l, i, u, s = !1) {
  let f;
  typeof l == "string" ? f = Nn(l) : (f = { ...l }, ke(
    !f.pathname || !f.pathname.includes("?"),
    _i("?", "pathname", "search", f)
  ), ke(
    !f.pathname || !f.pathname.includes("#"),
    _i("#", "pathname", "hash", f)
  ), ke(
    !f.search || !f.search.includes("#"),
    _i("#", "search", "hash", f)
  ));
  let p = l === "" || f.pathname === "", v = p ? "/" : f.pathname, g;
  if (v == null)
    g = u;
  else {
    let x = i.length - 1;
    if (!s && v.startsWith("..")) {
      let D = v.split("/");
      for (; D[0] === ".."; )
        D.shift(), x -= 1;
      f.pathname = D.join("/");
    }
    g = x >= 0 ? i[x] : "/";
  }
  let w = qp(f, g), C = v && v !== "/" && v.endsWith("/"), P = (p || v === ".") && u.endsWith("/");
  return !w.pathname.endsWith("/") && (C || P) && (w.pathname += "/"), w;
}
var td = (l) => l.replace(/\/\/+/g, "/"), xt = (l) => td(l.join("/")), pa = (l) => l.replace(/\/+$/, ""), Gp = (l) => pa(l).replace(/^\/*/, "/"), Xp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Jp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, bp = class {
  constructor(l, i, u, s = !1) {
    this.status = l, this.statusText = i || "", this.internal = s, u instanceof Error ? (this.data = u.toString(), this.error = u) : this.data = u;
  }
};
function Zp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function em(l) {
  let i = l.map((u) => u.route.path).filter(Boolean);
  return xt(i) || "/";
}
var nd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function rd(l, i) {
  let u = l;
  if (typeof u != "string" || !Kp.test(u))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: u
    };
  let s = u, f = !1;
  if (nd)
    try {
      let p = new URL(window.location.href), v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u), g = Ht(v.pathname, i);
      v.origin === p.origin && g != null ? u = g + v.search + v.hash : f = !0;
    } catch {
      vt(
        !1,
        `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: s,
    isExternal: f,
    to: u
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ld = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  ld
);
var tm = [
  "GET",
  ...ld
];
new Set(tm);
var bn = E.createContext(null);
bn.displayName = "DataRouter";
var ya = E.createContext(null);
ya.displayName = "DataRouterState";
var ad = E.createContext(!1);
function nm() {
  return E.useContext(ad);
}
var od = E.createContext({
  isTransitioning: !1
});
od.displayName = "ViewTransition";
var rm = E.createContext(
  /* @__PURE__ */ new Map()
);
rm.displayName = "Fetchers";
var lm = E.createContext(null);
lm.displayName = "Await";
var st = E.createContext(
  null
);
st.displayName = "Navigation";
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
var Li = E.createContext(null);
Li.displayName = "RouteError";
var id = "REACT_ROUTER_ERROR", am = "REDIRECT", om = "ROUTE_ERROR_RESPONSE";
function im(l) {
  if (l.startsWith(`${id}:${am}:{`))
    try {
      let i = JSON.parse(l.slice(28));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
        return i;
    } catch {
    }
}
function um(l) {
  if (l.startsWith(
    `${id}:${om}:{`
  ))
    try {
      let i = JSON.parse(l.slice(40));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
        return new bp(
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
  let { basename: u, navigator: s } = E.useContext(st), { hash: f, pathname: p, search: v } = Qr(l, { relative: i }), g = p;
  return u !== "/" && (g = p === "/" ? u : xt([u, p])), s.createHref({ pathname: g, search: v, hash: f });
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
var ud = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function sd(l) {
  E.useContext(st).static || E.useLayoutEffect(l);
}
function Mi() {
  let { isDataRoute: l } = E.useContext(zt);
  return l ? km() : cm();
}
function cm() {
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = E.useContext(bn), { basename: i, navigator: u } = E.useContext(st), { matches: s } = E.useContext(zt), { pathname: f } = Dt(), p = JSON.stringify(Pi(s)), v = E.useRef(!1);
  return sd(() => {
    v.current = !0;
  }), E.useCallback(
    (w, C = {}) => {
      if (vt(v.current, ud), !v.current) return;
      if (typeof w == "number") {
        u.go(w);
        return;
      }
      let P = va(
        w,
        JSON.parse(p),
        f,
        C.relative === "path"
      );
      l == null && i !== "/" && (P.pathname = P.pathname === "/" ? i : xt([i, P.pathname])), (C.replace ? u.replace : u.push)(
        P,
        C.state,
        C
      );
    },
    [
      i,
      u,
      p,
      f,
      l
    ]
  );
}
E.createContext(null);
function Qr(l, { relative: i } = {}) {
  let { matches: u } = E.useContext(zt), { pathname: s } = Dt(), f = JSON.stringify(Pi(u));
  return E.useMemo(
    () => va(
      l,
      JSON.parse(f),
      s,
      i === "path"
    ),
    [l, f, s, i]
  );
}
function dm(l, i) {
  return cd(l, i);
}
function cd(l, i, u) {
  var T;
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = E.useContext(st), { matches: f } = E.useContext(zt), p = f[f.length - 1], v = p ? p.params : {}, g = p ? p.pathname : "/", w = p ? p.pathnameBase : "/", C = p && p.route;
  {
    let L = C && C.path || "";
    fd(
      g,
      !C || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

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
  let D = x.pathname || "/", $ = D;
  if (w !== "/") {
    let L = w.replace(/^\//, "").split("/");
    $ = "/" + D.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let j = u && u.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    u.state.matches.map(
      (L) => Object.assign(L, {
        route: u.manifest[L.route.id] || L.route
      })
    )
  ) : bc(l, { pathname: $ });
  vt(
    C || j != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `
  ), vt(
    j == null || j[j.length - 1].route.element !== void 0 || j[j.length - 1].route.Component !== void 0 || j[j.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let F = vm(
    j && j.map(
      (L) => Object.assign({}, L, {
        params: Object.assign({}, v, L.params),
        pathname: xt([
          w,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          s.encodeLocation ? s.encodeLocation(
            L.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathname
        ]),
        pathnameBase: L.pathnameBase === "/" ? w : xt([
          w,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          s.encodeLocation ? s.encodeLocation(
            L.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathnameBase
        ])
      })
    ),
    f,
    u
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
function fm() {
  let l = wm(), i = Zp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), u = l instanceof Error ? l.stack : null, s = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: s }, p = { padding: "2px 4px", backgroundColor: s }, v = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), v = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", { style: p }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", { style: p }, "errorElement"), " prop on your route.")), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", { style: { fontStyle: "italic" } }, i), u ? /* @__PURE__ */ E.createElement("pre", { style: f }, u) : null, v);
}
var pm = /* @__PURE__ */ E.createElement(fm, null), dd = class extends E.Component {
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
      const u = um(l.digest);
      u && (l = u);
    }
    let i = l !== void 0 ? /* @__PURE__ */ E.createElement(zt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ E.createElement(
      Li.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ E.createElement(mm, { error: l }, i) : i;
  }
};
dd.contextType = ad;
var Ei = /* @__PURE__ */ new WeakMap();
function mm({
  children: l,
  error: i
}) {
  let { basename: u } = E.useContext(st);
  if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
    let s = im(i.digest);
    if (s) {
      let f = Ei.get(i);
      if (f) throw f;
      let p = rd(s.location, u);
      if (nd && !Ei.get(i))
        if (p.isExternal || s.reloadDocument)
          window.location.href = p.absoluteURL || p.to;
        else {
          const v = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(p.to, {
              replace: s.replace
            })
          );
          throw Ei.set(i, v), v;
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
function hm({ routeContext: l, match: i, children: u }) {
  let s = E.useContext(bn);
  return s && s.static && s.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ E.createElement(zt.Provider, { value: l }, u);
}
function vm(l, i = [], u) {
  let s = u == null ? void 0 : u.state;
  if (l == null) {
    if (!s)
      return null;
    if (s.errors)
      l = s.matches;
    else if (i.length === 0 && !s.initialized && s.matches.length > 0)
      l = s.matches;
    else
      return null;
  }
  let f = l, p = s == null ? void 0 : s.errors;
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
  let v = !1, g = -1;
  if (u && s) {
    v = s.renderFallback;
    for (let P = 0; P < f.length; P++) {
      let x = f[P];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = P), x.route.id) {
        let { loaderData: D, errors: $ } = s, j = x.route.loader && !D.hasOwnProperty(x.route.id) && (!$ || $[x.route.id] === void 0);
        if (x.route.lazy || j) {
          u.isStatic && (v = !0), g >= 0 ? f = f.slice(0, g + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let w = u == null ? void 0 : u.onError, C = s && w ? (P, x) => {
    var D, $;
    w(P, {
      location: s.location,
      params: (($ = (D = s.matches) == null ? void 0 : D[0]) == null ? void 0 : $.params) ?? {},
      pattern: em(s.matches),
      errorInfo: x
    });
  } : void 0;
  return f.reduceRight(
    (P, x, D) => {
      let $, j = !1, F = null, T = null;
      s && ($ = p && x.route.id ? p[x.route.id] : void 0, F = x.route.errorElement || pm, v && (g < 0 && D === 0 ? (fd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), j = !0, T = null) : g === D && (j = !0, T = x.route.hydrateFallbackElement || null)));
      let L = i.concat(f.slice(0, D + 1)), H = () => {
        let A;
        return $ ? A = F : j ? A = T : x.route.Component ? A = /* @__PURE__ */ E.createElement(x.route.Component, null) : x.route.element ? A = x.route.element : A = P, /* @__PURE__ */ E.createElement(
          hm,
          {
            match: x,
            routeContext: {
              outlet: P,
              matches: L,
              isDataRoute: s != null
            },
            children: A
          }
        );
      };
      return s && (x.route.ErrorBoundary || x.route.errorElement || D === 0) ? /* @__PURE__ */ E.createElement(
        dd,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: F,
          error: $,
          children: H(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          onError: C
        }
      ) : H();
    },
    null
  );
}
function zi(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ym(l) {
  let i = E.useContext(bn);
  return ke(i, zi(l)), i;
}
function gm(l) {
  let i = E.useContext(ya);
  return ke(i, zi(l)), i;
}
function _m(l) {
  let i = E.useContext(zt);
  return ke(i, zi(l)), i;
}
function Di(l) {
  let i = _m(l), u = i.matches[i.matches.length - 1];
  return ke(
    u.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), u.route.id;
}
function Em() {
  return Di(
    "useRouteId"
    /* UseRouteId */
  );
}
function wm() {
  var s;
  let l = E.useContext(Li), i = gm(
    "useRouteError"
    /* UseRouteError */
  ), u = Di(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (s = i.errors) == null ? void 0 : s[u];
}
function km() {
  let { router: l } = ym(
    "useNavigate"
    /* UseNavigateStable */
  ), i = Di(
    "useNavigate"
    /* UseNavigateStable */
  ), u = E.useRef(!1);
  return sd(() => {
    u.current = !0;
  }), E.useCallback(
    async (f, p = {}) => {
      vt(u.current, ud), u.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: i, ...p }));
    },
    [l, i]
  );
}
var Vc = {};
function fd(l, i, u) {
  !i && !Vc[l] && (Vc[l] = !0, vt(!1, u));
}
E.memo(Sm);
function Sm({
  routes: l,
  manifest: i,
  future: u,
  state: s,
  isStatic: f,
  onError: p
}) {
  return cd(l, void 0, {
    manifest: i,
    state: s,
    isStatic: f,
    onError: p
  });
}
function aa({
  to: l,
  replace: i,
  state: u,
  relative: s
}) {
  ke(
    Zn(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = E.useContext(st);
  vt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: p } = E.useContext(zt), { pathname: v } = Dt(), g = Mi(), w = va(
    l,
    Pi(p),
    v,
    s === "path"
  ), C = JSON.stringify(w);
  return E.useEffect(() => {
    g(JSON.parse(C), { replace: i, state: u, relative: s });
  }, [g, C, s, i, u]), null;
}
function rt(l) {
  ke(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Cm({
  basename: l = "/",
  children: i = null,
  location: u,
  navigationType: s = "POP",
  navigator: f,
  static: p = !1,
  useTransitions: v
}) {
  ke(
    !Zn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = l.replace(/^\/*/, "/"), w = E.useMemo(
    () => ({
      basename: g,
      navigator: f,
      static: p,
      useTransitions: v,
      future: {}
    }),
    [g, f, p, v]
  );
  typeof u == "string" && (u = Nn(u));
  let {
    pathname: C = "/",
    search: P = "",
    hash: x = "",
    state: D = null,
    key: $ = "default",
    mask: j
  } = u, F = E.useMemo(() => {
    let T = Ht(C, g);
    return T == null ? null : {
      location: {
        pathname: T,
        search: P,
        hash: x,
        state: D,
        key: $,
        mask: j
      },
      navigationType: s
    };
  }, [g, C, P, x, D, $, s, j]);
  return vt(
    F != null,
    `<Router basename="${g}"> is not able to match the URL "${C}${P}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), F == null ? null : /* @__PURE__ */ E.createElement(st.Provider, { value: w }, /* @__PURE__ */ E.createElement(Vr.Provider, { children: i, value: F }));
}
function xm({
  children: l,
  location: i
}) {
  return dm(Ri(l), i);
}
function Ri(l, i = []) {
  let u = [];
  return E.Children.forEach(l, (s, f) => {
    if (!E.isValidElement(s))
      return;
    let p = [...i, f];
    if (s.type === E.Fragment) {
      u.push.apply(
        u,
        Ri(s.props.children, p)
      );
      return;
    }
    ke(
      s.type === rt,
      `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ke(
      !s.props.index || !s.props.children,
      "An index route cannot have child routes."
    );
    let v = {
      id: s.props.id || p.join("-"),
      caseSensitive: s.props.caseSensitive,
      element: s.props.element,
      Component: s.props.Component,
      index: s.props.index,
      path: s.props.path,
      middleware: s.props.middleware,
      loader: s.props.loader,
      action: s.props.action,
      hydrateFallbackElement: s.props.hydrateFallbackElement,
      HydrateFallback: s.props.HydrateFallback,
      errorElement: s.props.errorElement,
      ErrorBoundary: s.props.ErrorBoundary,
      hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
      shouldRevalidate: s.props.shouldRevalidate,
      handle: s.props.handle,
      lazy: s.props.lazy
    };
    s.props.children && (v.children = Ri(
      s.props.children,
      p
    )), u.push(v);
  }), u;
}
var ca = "get", da = "application/x-www-form-urlencoded";
function ga(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function Nm(l) {
  return ga(l) && l.tagName.toLowerCase() === "button";
}
function Tm(l) {
  return ga(l) && l.tagName.toLowerCase() === "form";
}
function Rm(l) {
  return ga(l) && l.tagName.toLowerCase() === "input";
}
function Pm(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Lm(l, i) {
  return l.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !Pm(l);
}
var oa = null;
function Mm() {
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
var zm = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function wi(l) {
  return l != null && !zm.has(l) ? (vt(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${da}"`
  ), null) : l;
}
function Dm(l, i) {
  let u, s, f, p, v;
  if (Tm(l)) {
    let g = l.getAttribute("action");
    s = g ? Ht(g, i) : null, u = l.getAttribute("method") || ca, f = wi(l.getAttribute("enctype")) || da, p = new FormData(l);
  } else if (Nm(l) || Rm(l) && (l.type === "submit" || l.type === "image")) {
    let g = l.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = l.getAttribute("formaction") || g.getAttribute("action");
    if (s = w ? Ht(w, i) : null, u = l.getAttribute("formmethod") || g.getAttribute("method") || ca, f = wi(l.getAttribute("formenctype")) || wi(g.getAttribute("enctype")) || da, p = new FormData(g, l), !Mm()) {
      let { name: C, type: P, value: x } = l;
      if (P === "image") {
        let D = C ? `${C}.` : "";
        p.append(`${D}x`, "0"), p.append(`${D}y`, "0");
      } else C && p.append(C, x);
    }
  } else {
    if (ga(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    u = ca, s = null, f = da, v = l;
  }
  return p && f === "text/plain" && (v = p, p = void 0), { action: s, method: u.toLowerCase(), encType: f, formData: p, body: v };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ii(l, i) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(i);
}
function pd(l, i, u, s) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return u ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${s}` : f.pathname = `${f.pathname}.${s}` : f.pathname === "/" ? f.pathname = `_root.${s}` : i && Ht(f.pathname, i) === "/" ? f.pathname = `${pa(i)}/_root.${s}` : f.pathname = `${pa(f.pathname)}.${s}`, f;
}
async function Im(l, i) {
  if (l.id in i)
    return i[l.id];
  try {
    let u = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return i[l.id] = u, u;
  } catch (u) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(u), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Om(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Fm(l, i, u) {
  let s = await Promise.all(
    l.map(async (f) => {
      let p = i.routes[f.route.id];
      if (p) {
        let v = await Im(p, u);
        return v.links ? v.links() : [];
      }
      return [];
    })
  );
  return Um(
    s.flat(1).filter(Om).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function Qc(l, i, u, s, f, p) {
  let v = (w, C) => u[C] ? w.route.id !== u[C].route.id : !0, g = (w, C) => {
    var P;
    return (
      // param change, /users/123 -> /users/456
      u[C].pathname !== w.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((P = u[C].route.path) == null ? void 0 : P.endsWith("*")) && u[C].params["*"] !== w.params["*"]
    );
  };
  return p === "assets" ? i.filter(
    (w, C) => v(w, C) || g(w, C)
  ) : p === "data" ? i.filter((w, C) => {
    var x;
    let P = s.routes[w.route.id];
    if (!P || !P.hasLoader)
      return !1;
    if (v(w, C) || g(w, C))
      return !0;
    if (w.route.shouldRevalidate) {
      let D = w.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((x = u[0]) == null ? void 0 : x.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: w.params,
        defaultShouldRevalidate: !0
      });
      if (typeof D == "boolean")
        return D;
    }
    return !0;
  }) : [];
}
function Am(l, i, { includeHydrateFallback: u } = {}) {
  return $m(
    l.map((s) => {
      let f = i.routes[s.route.id];
      if (!f) return [];
      let p = [f.module];
      return f.clientActionModule && (p = p.concat(f.clientActionModule)), f.clientLoaderModule && (p = p.concat(f.clientLoaderModule)), u && f.hydrateFallbackModule && (p = p.concat(f.hydrateFallbackModule)), f.imports && (p = p.concat(f.imports)), p;
    }).flat(1)
  );
}
function $m(l) {
  return [...new Set(l)];
}
function jm(l) {
  let i = {}, u = Object.keys(l).sort();
  for (let s of u)
    i[s] = l[s];
  return i;
}
function Um(l, i) {
  let u = /* @__PURE__ */ new Set();
  return new Set(i), l.reduce((s, f) => {
    let p = JSON.stringify(jm(f));
    return u.has(p) || (u.add(p), s.push({ key: p, link: f })), s;
  }, []);
}
function Oi() {
  let l = E.useContext(bn);
  return Ii(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Bm() {
  let l = E.useContext(ya);
  return Ii(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Fi = E.createContext(void 0);
Fi.displayName = "FrameworkContext";
function Ai() {
  let l = E.useContext(Fi);
  return Ii(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Hm(l, i) {
  let u = E.useContext(Fi), [s, f] = E.useState(!1), [p, v] = E.useState(!1), { onFocus: g, onBlur: w, onMouseEnter: C, onMouseLeave: P, onTouchStart: x } = i, D = E.useRef(null);
  E.useEffect(() => {
    if (l === "render" && v(!0), l === "viewport") {
      let F = (L) => {
        L.forEach((H) => {
          v(H.isIntersecting);
        });
      }, T = new IntersectionObserver(F, { threshold: 0.5 });
      return D.current && T.observe(D.current), () => {
        T.disconnect();
      };
    }
  }, [l]), E.useEffect(() => {
    if (s) {
      let F = setTimeout(() => {
        v(!0);
      }, 100);
      return () => {
        clearTimeout(F);
      };
    }
  }, [s]);
  let $ = () => {
    f(!0);
  }, j = () => {
    f(!1), v(!1);
  };
  return u ? l !== "intent" ? [p, D, {}] : [
    p,
    D,
    {
      onFocus: jr(g, $),
      onBlur: jr(w, j),
      onMouseEnter: jr(C, $),
      onMouseLeave: jr(P, j),
      onTouchStart: jr(x, $)
    }
  ] : [!1, D, {}];
}
function jr(l, i) {
  return (u) => {
    l && l(u), u.defaultPrevented || i(u);
  };
}
function Wm({ page: l, ...i }) {
  let u = nm(), { router: s } = Oi(), f = E.useMemo(
    () => bc(s.routes, l, s.basename),
    [s.routes, l, s.basename]
  );
  return f ? u ? /* @__PURE__ */ E.createElement(Qm, { page: l, matches: f, ...i }) : /* @__PURE__ */ E.createElement(Km, { page: l, matches: f, ...i }) : null;
}
function Vm(l) {
  let { manifest: i, routeModules: u } = Ai(), [s, f] = E.useState([]);
  return E.useEffect(() => {
    let p = !1;
    return Fm(l, i, u).then(
      (v) => {
        p || f(v);
      }
    ), () => {
      p = !0;
    };
  }, [l, i, u]), s;
}
function Qm({
  page: l,
  matches: i,
  ...u
}) {
  let s = Dt(), { future: f } = Ai(), { basename: p } = Oi(), v = E.useMemo(() => {
    if (l === s.pathname + s.search + s.hash)
      return [];
    let g = pd(
      l,
      p,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), w = !1, C = [];
    for (let P of i)
      typeof P.route.shouldRevalidate == "function" ? w = !0 : C.push(P.route.id);
    return w && C.length > 0 && g.searchParams.set("_routes", C.join(",")), [g.pathname + g.search];
  }, [
    p,
    f.v8_trailingSlashAwareDataRequests,
    l,
    s,
    i
  ]);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, v.map((g) => /* @__PURE__ */ E.createElement("link", { key: g, rel: "prefetch", as: "fetch", href: g, ...u })));
}
function Km({
  page: l,
  matches: i,
  ...u
}) {
  let s = Dt(), { future: f, manifest: p, routeModules: v } = Ai(), { basename: g } = Oi(), { loaderData: w, matches: C } = Bm(), P = E.useMemo(
    () => Qc(
      l,
      i,
      C,
      p,
      s,
      "data"
    ),
    [l, i, C, p, s]
  ), x = E.useMemo(
    () => Qc(
      l,
      i,
      C,
      p,
      s,
      "assets"
    ),
    [l, i, C, p, s]
  ), D = E.useMemo(() => {
    if (l === s.pathname + s.search + s.hash)
      return [];
    let F = /* @__PURE__ */ new Set(), T = !1;
    if (i.forEach((H) => {
      var G;
      let A = p.routes[H.route.id];
      !A || !A.hasLoader || (!P.some((ee) => ee.route.id === H.route.id) && H.route.id in w && ((G = v[H.route.id]) != null && G.shouldRevalidate) || A.hasClientLoader ? T = !0 : F.add(H.route.id));
    }), F.size === 0)
      return [];
    let L = pd(
      l,
      g,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return T && F.size > 0 && L.searchParams.set(
      "_routes",
      i.filter((H) => F.has(H.route.id)).map((H) => H.route.id).join(",")
    ), [L.pathname + L.search];
  }, [
    g,
    f.v8_trailingSlashAwareDataRequests,
    w,
    s,
    p,
    P,
    i,
    l,
    v
  ]), $ = E.useMemo(
    () => Am(x, p),
    [x, p]
  ), j = Vm(x);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, D.map((F) => /* @__PURE__ */ E.createElement("link", { key: F, rel: "prefetch", as: "fetch", href: F, ...u })), $.map((F) => /* @__PURE__ */ E.createElement("link", { key: F, rel: "modulepreload", href: F, ...u })), j.map(({ key: F, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ E.createElement(
      "link",
      {
        key: F,
        nonce: u.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? u.crossOrigin
      }
    )
  )));
}
function qm(...l) {
  return (i) => {
    l.forEach((u) => {
      typeof u == "function" ? u(i) : u != null && (u.current = i);
    });
  };
}
var Ym = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Ym && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Gm({
  basename: l,
  children: i,
  useTransitions: u,
  window: s
}) {
  let f = E.useRef();
  f.current == null && (f.current = Rp({ window: s, v5Compat: !0 }));
  let p = f.current, [v, g] = E.useState({
    action: p.action,
    location: p.location
  }), w = E.useCallback(
    (C) => {
      u === !1 ? g(C) : E.startTransition(() => g(C));
    },
    [u]
  );
  return E.useLayoutEffect(() => p.listen(w), [p, w]), /* @__PURE__ */ E.createElement(
    Cm,
    {
      basename: l,
      children: i,
      location: v.location,
      navigationType: v.action,
      navigator: p,
      useTransitions: u
    }
  );
}
var md = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, hd = E.forwardRef(
  function({
    onClick: i,
    discover: u = "render",
    prefetch: s = "none",
    relative: f,
    reloadDocument: p,
    replace: v,
    mask: g,
    state: w,
    target: C,
    to: P,
    preventScrollReset: x,
    viewTransition: D,
    defaultShouldRevalidate: $,
    ...j
  }, F) {
    let { basename: T, navigator: L, useTransitions: H } = E.useContext(st), A = typeof P == "string" && md.test(P), G = rd(P, T);
    P = G.to;
    let ee = sm(P, { relative: f }), re = Dt(), ie = null;
    if (g) {
      let Ce = va(
        g,
        [],
        re.mask ? re.mask.pathname : "/",
        !0
      );
      T !== "/" && (Ce.pathname = Ce.pathname === "/" ? T : xt([T, Ce.pathname])), ie = L.createHref(Ce);
    }
    let [Pe, Se, Te] = Hm(
      s,
      j
    ), yt = bm(P, {
      replace: v,
      mask: g,
      state: w,
      target: C,
      preventScrollReset: x,
      relative: f,
      viewTransition: D,
      defaultShouldRevalidate: $,
      useTransitions: H
    });
    function Xe(Ce) {
      i && i(Ce), Ce.defaultPrevented || yt(Ce);
    }
    let Fe = !(G.isExternal || p), Le = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ E.createElement(
        "a",
        {
          ...j,
          ...Te,
          href: (Fe ? ie : void 0) || G.absoluteURL || ee,
          onClick: Fe ? Xe : i,
          ref: qm(F, Se),
          target: C,
          "data-discover": !A && u === "render" ? "true" : void 0
        }
      )
    );
    return Pe && !A ? /* @__PURE__ */ E.createElement(E.Fragment, null, Le, /* @__PURE__ */ E.createElement(Wm, { page: ee })) : Le;
  }
);
hd.displayName = "Link";
var vd = E.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: u = !1,
    className: s = "",
    end: f = !1,
    style: p,
    to: v,
    viewTransition: g,
    children: w,
    ...C
  }, P) {
    let x = Qr(v, { relative: C.relative }), D = Dt(), $ = E.useContext(ya), { navigator: j, basename: F } = E.useContext(st), T = $ != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    rh(x) && g === !0, L = j.encodeLocation ? j.encodeLocation(x).pathname : x.pathname, H = D.pathname, A = $ && $.navigation && $.navigation.location ? $.navigation.location.pathname : null;
    u || (H = H.toLowerCase(), A = A ? A.toLowerCase() : null, L = L.toLowerCase()), A && F && (A = Ht(A, F) || A);
    const G = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let ee = H === L || !f && H.startsWith(L) && H.charAt(G) === "/", re = A != null && (A === L || !f && A.startsWith(L) && A.charAt(L.length) === "/"), ie = {
      isActive: ee,
      isPending: re,
      isTransitioning: T
    }, Pe = ee ? i : void 0, Se;
    typeof s == "function" ? Se = s(ie) : Se = [
      s,
      ee ? "active" : null,
      re ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Te = typeof p == "function" ? p(ie) : p;
    return /* @__PURE__ */ E.createElement(
      hd,
      {
        ...C,
        "aria-current": Pe,
        className: Se,
        ref: P,
        style: Te,
        to: v,
        viewTransition: g
      },
      typeof w == "function" ? w(ie) : w
    );
  }
);
vd.displayName = "NavLink";
var Xm = E.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: i,
    navigate: u,
    reloadDocument: s,
    replace: f,
    state: p,
    method: v = ca,
    action: g,
    onSubmit: w,
    relative: C,
    preventScrollReset: P,
    viewTransition: x,
    defaultShouldRevalidate: D,
    ...$
  }, j) => {
    let { useTransitions: F } = E.useContext(st), T = th(), L = nh(g, { relative: C }), H = v.toLowerCase() === "get" ? "get" : "post", A = typeof g == "string" && md.test(g), G = (ee) => {
      if (w && w(ee), ee.defaultPrevented) return;
      ee.preventDefault();
      let re = ee.nativeEvent.submitter, ie = (re == null ? void 0 : re.getAttribute("formmethod")) || v, Pe = () => T(re || ee.currentTarget, {
        fetcherKey: i,
        method: ie,
        navigate: u,
        replace: f,
        state: p,
        relative: C,
        preventScrollReset: P,
        viewTransition: x,
        defaultShouldRevalidate: D
      });
      F && u !== !1 ? E.startTransition(() => Pe()) : Pe();
    };
    return /* @__PURE__ */ E.createElement(
      "form",
      {
        ref: j,
        method: H,
        action: L,
        onSubmit: s ? w : G,
        ...$,
        "data-discover": !A && l === "render" ? "true" : void 0
      }
    );
  }
);
Xm.displayName = "Form";
function Jm(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yd(l) {
  let i = E.useContext(bn);
  return ke(i, Jm(l)), i;
}
function bm(l, {
  target: i,
  replace: u,
  mask: s,
  state: f,
  preventScrollReset: p,
  relative: v,
  viewTransition: g,
  defaultShouldRevalidate: w,
  useTransitions: C
} = {}) {
  let P = Mi(), x = Dt(), D = Qr(l, { relative: v });
  return E.useCallback(
    ($) => {
      if (Lm($, i)) {
        $.preventDefault();
        let j = u !== void 0 ? u : Wr(x) === Wr(D), F = () => P(l, {
          replace: j,
          mask: s,
          state: f,
          preventScrollReset: p,
          relative: v,
          viewTransition: g,
          defaultShouldRevalidate: w
        });
        C ? E.startTransition(() => F()) : F();
      }
    },
    [
      x,
      P,
      D,
      u,
      s,
      f,
      i,
      l,
      p,
      v,
      g,
      w,
      C
    ]
  );
}
var Zm = 0, eh = () => `__${String(++Zm)}__`;
function th() {
  let { router: l } = yd(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = E.useContext(st), u = Em(), s = l.fetch, f = l.navigate;
  return E.useCallback(
    async (p, v = {}) => {
      let { action: g, method: w, encType: C, formData: P, body: x } = Dm(
        p,
        i
      );
      if (v.navigate === !1) {
        let D = v.fetcherKey || eh();
        await s(D, u, v.action || g, {
          defaultShouldRevalidate: v.defaultShouldRevalidate,
          preventScrollReset: v.preventScrollReset,
          formData: P,
          body: x,
          formMethod: v.method || w,
          formEncType: v.encType || C,
          flushSync: v.flushSync
        });
      } else
        await f(v.action || g, {
          defaultShouldRevalidate: v.defaultShouldRevalidate,
          preventScrollReset: v.preventScrollReset,
          formData: P,
          body: x,
          formMethod: v.method || w,
          formEncType: v.encType || C,
          replace: v.replace,
          state: v.state,
          fromRouteId: u,
          flushSync: v.flushSync,
          viewTransition: v.viewTransition
        });
    },
    [s, f, i, u]
  );
}
function nh(l, { relative: i } = {}) {
  let { basename: u } = E.useContext(st), s = E.useContext(zt);
  ke(s, "useFormAction must be used inside a RouteContext");
  let [f] = s.matches.slice(-1), p = { ...Qr(l || ".", { relative: i }) }, v = Dt();
  if (l == null) {
    p.search = v.search;
    let g = new URLSearchParams(p.search), w = g.getAll("index");
    if (w.some((P) => P === "")) {
      g.delete("index"), w.filter((x) => x).forEach((x) => g.append("index", x));
      let P = g.toString();
      p.search = P ? `?${P}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"), u !== "/" && (p.pathname = p.pathname === "/" ? u : xt([u, p.pathname])), Wr(p);
}
function rh(l, { relative: i } = {}) {
  let u = E.useContext(od);
  ke(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = yd(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = Qr(l, { relative: i });
  if (!u.isTransitioning)
    return !1;
  let p = Ht(u.currentLocation.pathname, s) || u.currentLocation.pathname, v = Ht(u.nextLocation.pathname, s) || u.nextLocation.pathname;
  return fa(f.pathname, v) != null || fa(f.pathname, p) != null;
}
const lh = "_tabs_1gqes_1", ah = "_tab_1gqes_1", oh = "_active_1gqes_32", ia = {
  tabs: lh,
  tab: ah,
  active: oh
}, ih = [
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
], Kr = () => /* @__PURE__ */ d.createElement("div", { className: ia.tabs }, ih.map((l) => /* @__PURE__ */ d.createElement(
  vd,
  {
    key: l.to,
    to: l.to,
    className: ({ isActive: i }) => i ? `${ia.tab} ${ia.active}` : ia.tab
  },
  l.label
))), uh = "_button_1u3jy_1", sh = "_full_1u3jy_20", ch = "_primary_1u3jy_24", dh = "_secondary_1u3jy_33", fh = "_ghost_1u3jy_44", ki = {
  button: uh,
  full: sh,
  primary: ch,
  secondary: dh,
  ghost: fh
}, me = ({
  children: l,
  variant: i = "primary",
  fullWidth: u = !1,
  className: s = "",
  ...f
}) => /* @__PURE__ */ d.createElement(
  "button",
  {
    ...f,
    className: `
        ${ki.button}
        ${ki[i]}
        ${u ? ki.full : ""}
        ${s}
      `
  },
  l
), ph = "_overlay_q6y41_1", mh = "_modal_q6y41_13", hh = "_header_q6y41_25", vh = "_title_q6y41_35", yh = "_body_q6y41_42", gh = "_footer_q6y41_49", _h = "_close_q6y41_59", kn = {
  overlay: ph,
  modal: mh,
  header: hh,
  title: vh,
  body: yh,
  footer: gh,
  close: _h
}, _a = ({
  open: l,
  onClose: i,
  title: u,
  footer: s,
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
    /* @__PURE__ */ d.createElement("div", { className: kn.header }, u && /* @__PURE__ */ d.createElement("h2", { className: kn.title }, u), /* @__PURE__ */ d.createElement(
      me,
      {
        variant: "ghost",
        className: kn.close,
        onClick: i
      },
      "✕"
    )),
    /* @__PURE__ */ d.createElement("div", { className: kn.body }, f),
    s && /* @__PURE__ */ d.createElement("div", { className: kn.footer }, s)
  )
) : null), Eh = "_pagination_1hg7e_1", wh = "_button_1hg7e_9", kh = "_label_1hg7e_33", ua = {
  pagination: Eh,
  button: wh,
  label: kh
}, gd = ({
  page: l,
  totalPages: i,
  onChange: u
}) => i <= 1 ? null : /* @__PURE__ */ d.createElement("div", { className: ua.pagination }, /* @__PURE__ */ d.createElement(
  "button",
  {
    className: ua.button,
    disabled: l === 1,
    onClick: () => u(l - 1)
  },
  "Назад"
), /* @__PURE__ */ d.createElement("span", { className: ua.label }, l, " / ", i), /* @__PURE__ */ d.createElement(
  "button",
  {
    className: ua.button,
    disabled: l === i,
    onClick: () => u(l + 1)
  },
  "Вперёд"
)), Sh = "_accordion_1wwmk_1", Ch = "_header_1wwmk_7", xh = "_content_1wwmk_20", sa = {
  accordion: Sh,
  header: Ch,
  content: xh
}, Mt = ({
  title: l,
  defaultOpen: i = !1,
  children: u
}) => {
  const [s, f] = E.useState(i);
  return /* @__PURE__ */ d.createElement(
    "div",
    {
      className: sa.accordion,
      "data-open": s
    },
    /* @__PURE__ */ d.createElement(
      "button",
      {
        type: "button",
        className: sa.header,
        onClick: () => f((p) => !p),
        "aria-expanded": s
      },
      /* @__PURE__ */ d.createElement("span", null, l),
      /* @__PURE__ */ d.createElement("span", { className: sa.icon }, s ? "−" : "+")
    ),
    s && /* @__PURE__ */ d.createElement("div", { className: sa.content }, u)
  );
}, Nh = "_field_fc25i_1", Th = "_label_fc25i_7", Rh = "_input_fc25i_13", Ph = "_error_fc25i_38", Lh = "_errorText_fc25i_46", Ur = {
  field: Nh,
  label: Th,
  input: Rh,
  error: Ph,
  errorText: Lh
}, de = ({
  label: l,
  error: i,
  className: u = "",
  ...s
}) => /* @__PURE__ */ d.createElement("div", { className: Ur.field }, l && /* @__PURE__ */ d.createElement("label", { className: Ur.label }, l), /* @__PURE__ */ d.createElement(
  "input",
  {
    ...s,
    className: `
          ${Ur.input}
          ${i ? Ur.error : ""}
          ${u}
        `
  }
), i && /* @__PURE__ */ d.createElement("span", { className: Ur.errorText }, i)), Mh = ({
  condition: l,
  index: i,
  defaultOpen: u,
  onChange: s
}) => {
  const [f, p] = E.useState(
    !!l.children_type
  ), [v, g] = E.useState(!!l.children_direct_type);
  return /* @__PURE__ */ d.createElement(
    Mt,
    {
      title: `Условие ${i + 1}`,
      defaultOpen: u
    },
    /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(
      de,
      {
        label: "Parent_type",
        value: l.parent_type,
        onChange: (w) => s({
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
        onChange: (w) => s({
          ...l,
          children_type: w.target.value
        })
      }
    )),
    /* @__PURE__ */ d.createElement("div", null, !v && /* @__PURE__ */ d.createElement(me, { onClick: () => g(!0) }, "Добавить children_direct_type"), v && /* @__PURE__ */ d.createElement(
      de,
      {
        label: "children_direct_type",
        value: l.children_direct_type || "",
        onChange: (w) => s({
          ...l,
          children_direct_type: w.target.value
        })
      }
    ))
  );
}, zh = "_dropdown_4l5n9_1", Dh = "_button_4l5n9_6", Ih = "_arrow_4l5n9_28", Oh = "_menu_4l5n9_32", Fh = "_active_4l5n9_51", Ah = "_item_4l5n9_58", Sn = {
  dropdown: zh,
  button: Dh,
  arrow: Ih,
  menu: Oh,
  active: Fh,
  item: Ah
};
function $h({
  options: l,
  value: i,
  placeholder: u = "Выберите",
  onSelect: s
}) {
  const [f, p] = E.useState(!1), v = E.useRef(null), g = l.find(
    (P) => P.value === i
  ), w = () => {
    p((P) => !P);
  }, C = (P) => {
    s == null || s(P.value), p(!1);
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
      /* @__PURE__ */ d.createElement("span", null, (g == null ? void 0 : g.label) || u),
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
const jh = "_form_1fyva_1", Kc = {
  form: jh
}, Uh = ({
  initialData: l,
  isOptionData: i,
  isEdit: u,
  onChange: s
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
    p(C), s == null || s(C);
  }, g = () => {
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
  return /* @__PURE__ */ d.createElement("div", { className: Kc.form }, /* @__PURE__ */ d.createElement(
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
    $h,
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
      Mh,
      {
        key: P,
        index: P,
        condition: C,
        defaultOpen: !u,
        onChange: (x) => w(P, x)
      }
    )
  ), /* @__PURE__ */ d.createElement(
    me,
    {
      type: "button",
      className: Kc.addCondition,
      onClick: g
    },
    "+ Добавить условие"
  ));
}, Bh = "_card_b4x7a_1", Hh = "_content_b4x7a_28", Wh = "_title_b4x7a_34", Vh = "_subtitle_b4x7a_40", Qh = "_arrow_b4x7a_45", Br = {
  card: Bh,
  content: Hh,
  title: Wh,
  subtitle: Vh,
  arrow: Qh
}, Kh = ({
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
), qh = "_page_10y0m_1", Yh = "_header_10y0m_10", Gh = "_title_10y0m_23", Xh = "_description_10y0m_32", Jh = "_heading_10y0m_72", bh = "_actions_10y0m_77", Zh = "_list_10y0m_83", Cn = {
  page: qh,
  header: Yh,
  title: Gh,
  description: Xh,
  heading: Jh,
  actions: bh,
  list: Zh
}, _d = E.createContext(null);
function Ea() {
  const l = E.useContext(_d);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const ev = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function tv() {
  const l = Ea(), [i, u] = E.useState(!0), [s, f] = E.useState(null), p = E.useCallback(async (x = 1) => {
    u(!0);
    try {
      const D = await l._getShort(
        "get_script_actions_short",
        x
      );
      f(ev(D));
    } finally {
      u(!1);
    }
  }, [l]);
  return E.useEffect(() => {
    p();
  }, [p]), {
    loading: i,
    scripts: s,
    loadScripts: p,
    scriptData: () => l.getScripts(),
    saveScript: async (x) => {
      await l._save(x, "save_script_action"), await p((s == null ? void 0 : s.page) ?? 1);
    },
    updateScript: async (x, D) => {
      await l._update(x, "update_script_action", D), await p((s == null ? void 0 : s.page) ?? 1);
    },
    getScriptAction: async (x) => (await l._getDetail(
      x,
      "get_script_action"
    )).data,
    deleteScriptAction: async (x) => {
      await l._delete(x, "delete_script_action"), await p((s == null ? void 0 : s.page) ?? 1);
    }
  };
}
const nv = () => {
  const [l, i] = E.useState(), [u, s] = E.useState(), [f, p] = E.useState(!1), [v, g] = E.useState(!1), {
    loading: w,
    scripts: C,
    scriptData: P,
    loadScripts: x,
    saveScript: D,
    updateScript: $,
    getScriptAction: j,
    deleteScriptAction: F
  } = tv(), T = () => {
    s(void 0), g(!1), p(!0);
  }, L = async (A) => {
    g(!0);
    const G = await j(
      A.uuid
    );
    s(G), p(!0);
  }, H = async () => {
    if (v) {
      const A = l == null ? void 0 : l.uuid;
      if (!A) return;
      const { uuid: G, ...ee } = l;
      await $(A, ee);
    } else
      await D(l);
    p(!1);
  };
  return /* @__PURE__ */ d.createElement("div", { className: Cn.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: Cn.header }, /* @__PURE__ */ d.createElement("div", { className: Cn.heading }, /* @__PURE__ */ d.createElement("h1", { className: Cn.title }, "Создание запускающих скриптов"), /* @__PURE__ */ d.createElement("p", { className: Cn.description }, "Создавайте и редактируйте автоматизации и условия")), /* @__PURE__ */ d.createElement("div", { className: Cn.actions }, /* @__PURE__ */ d.createElement(
    me,
    {
      variant: "primary",
      onClick: T
    },
    "Добавить сценарий"
  ))), w && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Cn.list }, C == null ? void 0 : C.script_actions.map((A) => /* @__PURE__ */ d.createElement(
    Kh,
    {
      key: A.uuid,
      title: A.title,
      onClick: () => L(A)
    }
  ))), /* @__PURE__ */ d.createElement(
    gd,
    {
      page: (C == null ? void 0 : C.page) || 1,
      totalPages: (C == null ? void 0 : C.total_pages) || 1,
      onChange: x
    }
  ), /* @__PURE__ */ d.createElement(
    _a,
    {
      open: f,
      onClose: () => p(!1),
      title: v ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ d.createElement(d.Fragment, null, v && /* @__PURE__ */ d.createElement(
        me,
        {
          variant: "ghost",
          onClick: async () => {
            u != null && u.uuid && (await F(
              u.uuid
            ), p(!1));
          }
        },
        "Удалить"
      ), /* @__PURE__ */ d.createElement(
        me,
        {
          onClick: H
        },
        "Сохранить"
      ))
    },
    /* @__PURE__ */ d.createElement(
      Uh,
      {
        initialData: u,
        isEdit: v,
        isOptionData: P(),
        onChange: i
      }
    )
  ));
}, rv = "_page_zolbx_1", lv = "_header_zolbx_10", av = "_headerTop_zolbx_16", ov = "_title_zolbx_23", iv = "_description_zolbx_32", uv = "_state_zolbx_98", sv = "_commandList_zolbx_102", cv = "_commandTab_zolbx_107", dv = "_commandButton_zolbx_114", fv = "_moreButton_zolbx_115", pv = "_form_zolbx_153", mv = "_checkboxRow_zolbx_159", hv = "_field_zolbx_167", vv = "_textarea_zolbx_176", yv = "_arrayItem_zolbx_189", gv = "_sheetOverlay_zolbx_207", _v = "_bottomSheet_zolbx_217", Ev = "_sheetHandle_zolbx_235", wv = "_innerTabs_zolbx_249", kv = "_innerTab_zolbx_249", Sv = "_activeInnerTab_zolbx_270", ae = {
  page: rv,
  header: lv,
  headerTop: av,
  title: ov,
  description: iv,
  state: uv,
  commandList: sv,
  commandTab: cv,
  commandButton: dv,
  moreButton: fv,
  form: pv,
  checkboxRow: mv,
  field: hv,
  textarea: vv,
  arrayItem: yv,
  sheetOverlay: gv,
  bottomSheet: _v,
  sheetHandle: Ev,
  innerTabs: wv,
  innerTab: kv,
  activeInnerTab: Sv
}, Cv = [
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
}, Ed = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Si = (l) => l.kind === "dialog" ? {
  status: !0,
  title: "",
  [l.componentKey ?? "componentDialog"]: {
    ...Ed(),
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
}, xv = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
}), qr = ({ configKey: l }) => {
  const i = Ea(), u = Mi(), [s, f] = E.useState(l === "directTemplate" ? "template" : "main"), [p, v] = E.useState(null), [g, w] = E.useState(!1), [C, P] = E.useState(!1), [x, D] = E.useState(!1), [$, j] = E.useState(() => Si(Hr[l])), [F, T] = E.useState(null), L = E.useMemo(() => l === "directMain" || l === "directTemplate" ? s === "main" ? Hr.directMain : Hr.directTemplate : Hr[l], [s, l]), H = E.useMemo(() => {
    if (L.kind === "dialog")
      return $[L.componentKey ?? "componentDialog"];
  }, [L, $]), A = $.directControl, G = Array.isArray($.subDirectControl) ? $.subDirectControl : [], ee = Array.isArray(A == null ? void 0 : A.subDirectControl) ? A.subDirectControl : [], re = async (m = 1) => {
    w(!0);
    try {
      const N = await i._getShort(L.shortType, m);
      v(xv(N));
    } finally {
      w(!1);
    }
  };
  E.useEffect(() => {
    re();
  }, [L]);
  const ie = () => {
    D(!1), j(Si(L)), P(!0);
  }, Pe = async (m) => {
    D(!0);
    const N = await i._getDetail(m.uuid, L.detailType);
    j(N.data), P(!0);
  }, Se = (m) => {
    const N = L.componentKey ?? "componentDialog";
    j((B) => ({
      ...B,
      [N]: {
        ...B[N] ?? Ed(),
        ...m
      }
    }));
  }, Te = (m) => {
    j((N) => ({
      ...N,
      directControl: {
        ...N.directControl ?? Si(Hr.directMain).directControl,
        ...m
      }
    }));
  }, yt = async () => {
    if (x && $.uuid) {
      const { uuid: m, ...N } = $;
      await i._update(m, L.updateType, N);
    } else
      await i._save($, L.saveType);
    P(!1), await re((p == null ? void 0 : p.page) ?? 1);
  }, Xe = async (m) => {
    await i._delete(m, L.deleteType), T(null), await re((p == null ? void 0 : p.page) ?? 1);
  }, Fe = async (m) => {
    await i._update(m.uuid, L.updateType, { status: !0 }), T(null), await re((p == null ? void 0 : p.page) ?? 1);
  }, Le = (m, N, B) => {
    const te = [...(H == null ? void 0 : H[m]) ?? []];
    te[N] = { ...te[N], ...B }, Se({ [m]: te });
  }, Ce = (m, N) => {
    Se({ [m]: [...(H == null ? void 0 : H[m]) ?? [], N] });
  }, Ae = (m, N) => {
    Se({ [m]: ((H == null ? void 0 : H[m]) ?? []).filter((B, te) => te !== N) });
  }, he = (m, N, B) => {
    const te = m === "direct" ? [...ee] : [...G];
    te[N] = { ...te[N], ...B }, m === "direct" ? Te({ subDirectControl: te }) : j((oe) => ({ ...oe, subDirectControl: te }));
  }, U = (m) => {
    const N = { subMappingType: "", title: null, subVoiceCommands: "" };
    m === "direct" ? Te({ subDirectControl: [...ee, N] }) : j((B) => ({ ...B, subDirectControl: [...G, N] }));
  }, X = (m, N) => {
    const B = (m === "direct" ? ee : G).filter((te, oe) => oe !== N);
    m === "direct" ? Te({ subDirectControl: B }) : j((te) => ({ ...te, subDirectControl: B }));
  }, V = `${x ? "Редактировать" : "Создать"}: ${L.label}`;
  return /* @__PURE__ */ d.createElement("div", { className: ae.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: ae.header }, /* @__PURE__ */ d.createElement("div", { className: ae.headerTop }, /* @__PURE__ */ d.createElement("div", { className: ae.heading }, /* @__PURE__ */ d.createElement("h1", { className: ae.title }, L.label), /* @__PURE__ */ d.createElement("p", { className: ae.description }, "Создавайте и редактируйте голосовые команды ассистента.")), /* @__PURE__ */ d.createElement(me, { onClick: ie }, "Создать команду")), (l === "directMain" || l === "directTemplate") && /* @__PURE__ */ d.createElement("div", { className: ae.innerTabs }, Cv.map((m) => /* @__PURE__ */ d.createElement(
    "button",
    {
      key: m.key,
      type: "button",
      className: `${ae.innerTab} ${s === m.key ? ae.activeInnerTab : ""}`,
      onClick: () => {
        f(m.key), u(`/commands/direct/${m.key === "main" ? "main" : "template"}`);
      }
    },
    m.label
  )))), g && /* @__PURE__ */ d.createElement("div", { className: ae.state }, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: ae.commandList }, p == null ? void 0 : p.data.map((m) => /* @__PURE__ */ d.createElement("div", { key: m.uuid, className: ae.commandTab }, /* @__PURE__ */ d.createElement("button", { type: "button", className: ae.commandButton, onClick: () => Pe(m) }, /* @__PURE__ */ d.createElement("span", null, m.title), L.hasStatus && /* @__PURE__ */ d.createElement("small", null, m.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      className: ae.moreButton,
      "aria-label": `Действия команды ${m.title}`,
      onClick: () => T(m)
    },
    "⋯"
  )))), /* @__PURE__ */ d.createElement(
    gd,
    {
      page: (p == null ? void 0 : p.page) || 1,
      totalPages: (p == null ? void 0 : p.total_pages) || 1,
      onChange: re
    }
  ), /* @__PURE__ */ d.createElement(
    _a,
    {
      open: C,
      onClose: () => P(!1),
      title: V,
      footer: /* @__PURE__ */ d.createElement(me, { onClick: yt }, "Сохранить")
    },
    /* @__PURE__ */ d.createElement("div", { className: ae.form }, L.hasStatus && /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: $.status ?? !0, onChange: (m) => j({ ...$, status: m.target.checked }) }), "Команда включена"), /* @__PURE__ */ d.createElement(de, { label: "Название команды", value: $.title, onChange: (m) => j({ ...$, title: m.target.value }) }), L.kind === "dialog" && H && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: H.endStatus, onChange: (m) => Se({ endStatus: m.target.checked }) }), "Завершать диалог"), L.hasForwardText && /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!H.forwardText, onChange: (m) => Se({ forwardText: m.target.checked }) }), "forwardText"), /* @__PURE__ */ d.createElement(de, { label: "actionType", value: H.actionType ?? "", onChange: (m) => Se({ actionType: m.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "answerType", value: H.answerType ?? "", onChange: (m) => Se({ answerType: m.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "voiceCommands"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ae.textarea,
        value: (H.voiceCommands ?? []).join(`
`),
        onChange: (m) => Se({ voiceCommands: m.target.value.split(`
`) }),
        rows: 6
      }
    )), /* @__PURE__ */ d.createElement(Mt, { title: "nextDirectControl", defaultOpen: !0 }, (H.nextDirectControl ?? []).map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "uuid", value: m.uuid ?? "", onChange: (B) => Le("nextDirectControl", N, { uuid: B.target.value }) }), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => Ae("nextDirectControl", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => Ce("nextDirectControl", { uuid: "" }) }, "Добавить ещё")), /* @__PURE__ */ d.createElement(Mt, { title: "voiceResponseArray", defaultOpen: !0 }, (H.voiceResponseArray ?? []).map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "actionType", value: m.actionType ?? "", onChange: (B) => Le("voiceResponseArray", N, { actionType: B.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "voiceResponse", value: m.voiceResponse ?? "", onChange: (B) => Le("voiceResponseArray", N, { voiceResponse: B.target.value }) }), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => Ae("voiceResponseArray", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => Ce("voiceResponseArray", { actionType: "", voiceResponse: "" }) }, "Добавить ещё")), /* @__PURE__ */ d.createElement(Mt, { title: "nextAction", defaultOpen: !0 }, (H.nextAction ?? []).map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "actionTypeComponent", value: m.actionTypeComponent ?? "", onChange: (B) => Le("nextAction", N, { actionTypeComponent: B.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "actionType", value: m.actionType ?? "", onChange: (B) => Le("nextAction", N, { actionType: B.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "uuid", value: m.uuid ?? "", onChange: (B) => Le("nextAction", N, { uuid: B.target.value }) }), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => Ae("nextAction", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => Ce("nextAction", { actionTypeComponent: "", actionType: "", uuid: "" }) }, "Добавить ещё"))), L.kind === "direct" && A && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(de, { label: "directControl.mappingType", value: A.mappingType ?? "", onChange: (m) => Te({ mappingType: m.target.value }) }), /* @__PURE__ */ d.createElement(de, { label: "directControl.valueType", value: A.valueType ?? "", onChange: (m) => Te({ valueType: m.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "voiceCommands"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ae.textarea,
        value: Array.isArray(A.voiceCommands) ? A.voiceCommands.join(`
`) : "",
        onChange: (m) => Te({ voiceCommands: m.target.value.split(`
`).filter(Boolean) }),
        rows: 5
      }
    )), /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement(
      "input",
      {
        type: "checkbox",
        checked: !!A.manual,
        onChange: (m) => Te({ manual: m.target.checked, subDirectControl: m.target.checked ? [] : "" })
      }
    ), "manual"), A.manual ? /* @__PURE__ */ d.createElement(Mt, { title: "directControl.subDirectControl", defaultOpen: !0 }, ee.map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "subMappingType", value: m.subMappingType ?? "", onChange: (B) => he("direct", N, { subMappingType: B.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ d.createElement("textarea", { className: ae.textarea, value: m.subVoiceCommands ?? "", onChange: (B) => he("direct", N, { subVoiceCommands: B.target.value }), rows: 3 })), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => X("direct", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => U("direct") }, "Добавить ещё")) : /* @__PURE__ */ d.createElement(de, { label: "directControl.subDirectControl", value: typeof A.subDirectControl == "string" ? A.subDirectControl : "", onChange: (m) => Te({ subDirectControl: m.target.value }) })), L.kind === "assistantSettings" && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(de, { label: "actionType", value: $.actionType ?? "", onChange: (m) => j({ ...$, actionType: m.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "message"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ae.textarea,
        value: $.message ?? "",
        onChange: (m) => j({ ...$, message: m.target.value || null }),
        rows: 4
      }
    )), /* @__PURE__ */ d.createElement("label", { className: ae.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!$.endStatus, onChange: (m) => j({ ...$, endStatus: m.target.checked }) }), "endStatus")), L.kind === "template" && /* @__PURE__ */ d.createElement(Mt, { title: "subDirectControl", defaultOpen: !0 }, G.map((m, N) => /* @__PURE__ */ d.createElement("div", { key: N, className: ae.arrayItem }, /* @__PURE__ */ d.createElement(de, { label: "subMappingType", value: m.subMappingType ?? "", onChange: (B) => he("template", N, { subMappingType: B.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ae.field }, /* @__PURE__ */ d.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ d.createElement("textarea", { className: ae.textarea, value: m.subVoiceCommands ?? "", onChange: (B) => he("template", N, { subVoiceCommands: B.target.value }), rows: 3 })), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "ghost", onClick: () => X("template", N) }, "Удалить"))), /* @__PURE__ */ d.createElement(me, { type: "button", variant: "secondary", onClick: () => U("template") }, "Добавить ещё")))
  ), F && /* @__PURE__ */ d.createElement("div", { className: ae.sheetOverlay, onClick: () => T(null) }, /* @__PURE__ */ d.createElement("div", { className: ae.bottomSheet, onClick: (m) => m.stopPropagation() }, /* @__PURE__ */ d.createElement("div", { className: ae.sheetHandle }), /* @__PURE__ */ d.createElement("h3", null, F.title), L.hasStatus && F.status === !1 && /* @__PURE__ */ d.createElement(me, { fullWidth: !0, onClick: () => Fe(F) }, "Включить"), /* @__PURE__ */ d.createElement(me, { fullWidth: !0, variant: "ghost", onClick: () => Xe(F.uuid) }, "Удалить"))));
}, Nv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "primary" }), Tv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "secondary" }), Rv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "directMain" }), Pv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "directTemplate" }), Lv = () => /* @__PURE__ */ d.createElement(qr, { configKey: "settings" }), Mv = "_form_1bj0d_1", zv = "_field_1bj0d_7", Dv = "_input_1bj0d_13", Iv = "_label_1bj0d_32", Ov = "_checkboxRow_1bj0d_38", qe = {
  form: Mv,
  field: zv,
  input: Dv,
  label: Iv,
  checkboxRow: Ov
}, Fv = ({ data: l, onChange: i }) => {
  const u = (s, f) => {
    i({
      ...l,
      [s]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(de, { label: "API Key", value: l.api_key ?? "", onChange: (s) => u("api_key", s.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Folder ID", value: l.folderId ?? "", onChange: (s) => u("folderId", s.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (s) => u("language", s.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Voice", value: l.voice ?? "", onChange: (s) => u("voice", s.target.value) }), /* @__PURE__ */ d.createElement("label", { className: qe.field }, /* @__PURE__ */ d.createElement("span", { className: qe.label }, "Codec"), /* @__PURE__ */ d.createElement("select", { className: qe.input, value: l.codec ?? "", onChange: (s) => u("codec", s.target.value || void 0) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ d.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ d.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ d.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ d.createElement("label", { className: qe.field }, /* @__PURE__ */ d.createElement("span", { className: qe.label }, "Emotion"), /* @__PURE__ */ d.createElement("select", { className: qe.input, value: l.emotion ?? "", onChange: (s) => u("emotion", s.target.value || void 0) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ d.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ d.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ d.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ d.createElement(de, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (s) => u("speed", s.target.value === "" ? void 0 : Number(s.target.value)) }));
}, Av = ({ data: l, onChange: i }) => {
  const u = (s, f) => {
    i({
      ...l,
      [s]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(de, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (s) => u("base_url", s.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (s) => u("token", s.target.value) }));
}, $v = ({ data: l, onChange: i }) => {
  const u = (s, f) => {
    i({
      ...l,
      [s]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(de, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (s) => u("global_music_timer", s.target.value) }), /* @__PURE__ */ d.createElement(de, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (s) => u("global_music_alarm", s.target.value) }));
}, jv = ({ data: l, onChange: i }) => {
  const u = (s, f) => {
    i({
      ...l,
      [s]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qe.form }, /* @__PURE__ */ d.createElement(
    de,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (s) => u("client_id", s.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ d.createElement("label", { className: qe.field }, /* @__PURE__ */ d.createElement("span", { className: qe.label }, "Theme"), /* @__PURE__ */ d.createElement("select", { className: qe.input, value: l.theme ?? "dark", onChange: (s) => u("theme", s.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ d.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ d.createElement("label", { className: qe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.is_admin, onChange: (s) => u("is_admin", s.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Is admin")), /* @__PURE__ */ d.createElement("label", { className: qe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.active_remout, onChange: (s) => u("active_remout", s.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Active remout")), /* @__PURE__ */ d.createElement("label", { className: qe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.api_commands_enabled, onChange: (s) => u("api_commands_enabled", s.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)")), l.api_commands_enabled && /* @__PURE__ */ d.createElement(
    de,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (s) => u("api_commands_token", s.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, Uv = "_page_tlhec_1", Bv = {
  page: Uv
};
function Hv() {
  const l = Ea(), [i, u] = E.useState(!0), [s, f] = E.useState(null), p = E.useCallback(async () => {
    u(!0);
    try {
      const g = await l._getShort("get_settings");
      console.log(g), f((g == null ? void 0 : g.result) ?? g);
    } finally {
      u(!1);
    }
  }, [l]);
  return E.useEffect(() => {
    p();
  }, []), {
    loading: i,
    settings: s,
    saveSettings: async (g) => {
      await l._save(g, "save_settings");
    },
    loadScripts: p
  };
}
const Wv = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, ma = {
  base_url: "",
  token: ""
}, Vv = {
  global_music_timer: "",
  global_music_alarm: ""
}, qc = {
  yandex_tts: Wv,
  remout: ma,
  timer_alarm: Vv,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, Qv = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), Kv = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), qv = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), Yv = (l) => ({
  yandex_tts: Qv(l == null ? void 0 : l.yandex_tts),
  remout: Kv(l == null ? void 0 : l.remout),
  timer_alarm: qv(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Ci = (l, i) => {
  const u = {};
  return Object.keys(l).forEach((s) => {
    const f = s;
    l[f] !== i[f] && (u[f] = l[f]);
  }), u;
}, Gv = (l, i) => {
  const u = {}, s = Ci(l.yandex_tts, i.yandex_tts), f = Ci(l.timer_alarm, i.timer_alarm);
  if (Object.keys(s).length > 0 && (u.yandex_tts = s), Object.keys(f).length > 0 && (u.timer_alarm = f), l.theme !== i.theme && (u.theme = l.theme), l.is_admin !== i.is_admin && (u.is_admin = l.is_admin), l.active_remout !== i.active_remout && (u.active_remout = l.active_remout), l.client_id !== i.client_id && (u.client_id = l.client_id), l.api_commands_enabled !== i.api_commands_enabled && (u.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== i.api_commands_token && (u.api_commands_token = l.api_commands_token), l.active_remout) {
    const p = Ci(l.remout ?? ma, i.remout ?? ma);
    Object.keys(p).length > 0 && (u.remout = p);
  }
  return u;
}, Xv = () => {
  const [l, i] = E.useState(qc), [u, s] = E.useState(qc), { settings: f, saveSettings: p } = Hv();
  E.useEffect(() => {
    if (!f) return;
    const g = Yv(f);
    i(g), s(g);
  }, [f]);
  const v = () => {
    const g = Gv(l, u);
    p(g);
  };
  return /* @__PURE__ */ d.createElement("div", { className: Bv.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("h1", null, "Настройки"), /* @__PURE__ */ d.createElement(Mt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ d.createElement(
    jv,
    {
      data: {
        active_remout: l.active_remout,
        is_admin: l.is_admin,
        theme: l.theme,
        client_id: l.client_id,
        api_commands_enabled: l.api_commands_enabled,
        api_commands_token: l.api_commands_token
      },
      onChange: (g) => i({ ...l, ...g })
    }
  )), /* @__PURE__ */ d.createElement(Mt, { title: "Яндекс TTS" }, /* @__PURE__ */ d.createElement(
    Fv,
    {
      data: l.yandex_tts,
      onChange: (g) => i({ ...l, yandex_tts: g })
    }
  )), l.active_remout && /* @__PURE__ */ d.createElement(Mt, { title: "Remote" }, /* @__PURE__ */ d.createElement(
    Av,
    {
      data: l.remout ?? ma,
      onChange: (g) => i({ ...l, remout: g })
    }
  )), /* @__PURE__ */ d.createElement(Mt, { title: "Timer / Alarm" }, /* @__PURE__ */ d.createElement(
    $v,
    {
      data: l.timer_alarm,
      onChange: (g) => i({ ...l, timer_alarm: g })
    }
  )), /* @__PURE__ */ d.createElement(me, { onClick: v }, "Сохранить"));
}, xn = (l) => {
  var i;
  return ((i = l == null ? void 0 : l.result) == null ? void 0 : i.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, Jv = (l) => {
  const i = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + i * 60 * 1e3).toISOString();
}, wd = (l) => {
  if (typeof l == "number") return l;
  if (typeof l == "string") {
    const i = l.split(":").map((u) => Number(u));
    return i.length === 3 ? (i[0] || 0) * 3600 + (i[1] || 0) * 60 + (i[2] || 0) : i.length === 2 ? (i[0] || 0) * 60 + (i[1] || 0) : Number(l) || 0;
  }
  if (l && typeof l == "object") {
    if (l.date_end) {
      const i = Date.parse(l.date_end);
      if (!Number.isNaN(i))
        return Math.max(0, Math.ceil((i - Date.now()) / 1e3));
    }
    return Number(l.total_seconds) || wd(l.count_timer || "");
  }
  return 0;
}, bv = (l) => {
  const i = Math.max(1, Number(l) || 1), u = Math.floor(i / 60), s = i % 60;
  return `${String(u).padStart(2, "0")}:${String(s).padStart(2, "0")}:00`;
}, xi = (l) => {
  const i = xn(l);
  return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.data) ? i.data : [];
};
function kd() {
  const l = Ea(), [i, u] = E.useState([]), [s, f] = E.useState([]), [p, v] = E.useState([]), [g, w] = E.useState(!0), C = E.useMemo(() => l.getDevices(), [l]), P = E.useCallback(async () => {
    const A = await l._getShort("get_timer_requests_short", 1, 100), G = await Promise.all(
      xi(A).map(async (ee) => {
        var ie;
        const re = await l._getDetail(ee.uuid, "get_timer_request");
        return ((ie = xn(re)) == null ? void 0 : ie.data) ?? xn(re);
      })
    );
    u(G.filter((ee) => !!ee && ee.action_type === "create_timer"));
  }, [l]), x = E.useCallback(async () => {
    const A = await l._getShort("get_alarm_requests_short", 1, 100), G = await Promise.all(
      xi(A).map(async (ee) => {
        var ie;
        const re = await l._getDetail(ee.uuid, "get_alarm_request");
        return ((ie = xn(re)) == null ? void 0 : ie.data) ?? xn(re);
      })
    );
    f(G.filter((ee) => !!ee && ee.action_type !== "delete_alarm"));
  }, [l]), D = E.useCallback(async () => {
    const A = await l._getShort("get_alarm_time_widgets_short", 1, 100), G = await Promise.all(
      xi(A).map(async (ee) => {
        var ie;
        const re = await l._getDetail(ee.uuid, "get_alarm_time_widget");
        return ((ie = xn(re)) == null ? void 0 : ie.data) ?? xn(re);
      })
    );
    v(G.filter(Boolean));
  }, [l]), $ = E.useCallback(async () => {
    w(!0);
    try {
      await Promise.all([P(), x(), D()]);
    } finally {
      w(!1);
    }
  }, [x, D, P]);
  return E.useEffect(() => {
    $();
  }, []), {
    alarmTimeWidgets: p,
    alarms: s,
    createAlarm: async (A, G) => {
      await l._save({ name: `Будильник ${G}`, action_type: "create_alarm", device_id: A, status: "on", time: G }, "save_alarm_request"), await x();
    },
    createTimer: async (A, G) => {
      const ee = {
        count_timer: bv(G),
        date_end: Jv(G),
        total_seconds: Math.max(1, Number(G) || 1) * 60
      };
      await l._save({ name: `Таймер ${G} мин`, action_type: "create_timer", device_id: A, timer_time: ee }, "save_timer_request"), await P();
    },
    deleteAlarm: async (A) => {
      await l._delete(A.uuid, "delete_alarm_request"), await x();
    },
    devices: C,
    loading: g,
    stopTimer: async (A) => {
      await l._delete(A.uuid, "delete_timer_request"), await P();
    },
    timers: i,
    toTimerSeconds: wd,
    updateAlarm: async (A, G) => {
      await l._update(A.uuid, "update_alarm_request", { ...A, action_type: "edit_alarm", ...G }), await x();
    }
  };
}
const Zv = "_page_di7r7_1", ey = "_header_di7r7_11", ty = "_title_di7r7_18", ny = "_description_di7r7_25", ry = "_grid_di7r7_31", ly = "_card_di7r7_37", ay = "_empty_di7r7_37", oy = "_cardHeader_di7r7_44", iy = "_cardTitle_di7r7_51", uy = "_meta_di7r7_56", sy = "_time_di7r7_62", cy = "_form_di7r7_69", dy = "_field_di7r7_75", fy = "_label_di7r7_81", py = "_select_di7r7_87", my = "_input_di7r7_87", hy = "_quickTabs_di7r7_97", vy = "_quickTab_di7r7_97", yy = "_activeQuickTab_di7r7_113", gy = "_row_di7r7_118", Z = {
  page: Zv,
  header: ey,
  title: ty,
  description: ny,
  grid: ry,
  card: ly,
  empty: ay,
  cardHeader: oy,
  cardTitle: iy,
  meta: uy,
  time: sy,
  form: cy,
  field: dy,
  label: fy,
  select: py,
  input: my,
  quickTabs: hy,
  quickTab: vy,
  activeQuickTab: yy,
  row: gy,
  switch: "_switch_di7r7_124"
}, _y = [5, 10, 15, 30, 60], Ey = (l) => {
  const i = Math.max(0, l), u = Math.floor(i / 3600), s = Math.floor(i % 3600 / 60), f = i % 60;
  return [u, s, f].map((p) => String(p).padStart(2, "0")).join(":");
}, wy = () => {
  const { createTimer: l, devices: i, loading: u, stopTimer: s, timers: f, toTimerSeconds: p } = kd(), [v, g] = E.useState(!1), [w, C] = E.useState(""), [P, x] = E.useState(5), [D, $] = E.useState({});
  E.useEffect(() => {
    $((T) => Object.fromEntries(f.map((L) => [L.uuid, T[L.uuid] ?? p(L.timer_time)])));
  }, [f, p]), E.useEffect(() => {
    const T = window.setInterval(() => {
      $((L) => Object.fromEntries(Object.entries(L).map(([H, A]) => [H, Math.max(0, A - 1)])));
    }, 1e3);
    return () => window.clearInterval(T);
  }, []);
  const j = E.useMemo(() => new Map(i.map((T) => [T.id, T.name])), [i]), F = async () => {
    w && (await l(w, P), g(!1));
  };
  return /* @__PURE__ */ d.createElement("div", { className: Z.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: Z.header }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h1", { className: Z.title }, "Таймер"), /* @__PURE__ */ d.createElement("p", { className: Z.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ d.createElement(me, { onClick: () => g(!0) }, "Создать")), u && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Z.grid }, f.length ? f.map((T) => /* @__PURE__ */ d.createElement("div", { className: Z.card, key: T.uuid }, /* @__PURE__ */ d.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", { className: Z.cardTitle }, T.name || "Таймер"), /* @__PURE__ */ d.createElement("div", { className: Z.meta }, "Устройство: ", j.get(T.device_id) || T.device_id)), /* @__PURE__ */ d.createElement(me, { variant: "ghost", onClick: () => s(T) }, "Стоп")), /* @__PURE__ */ d.createElement("div", { className: Z.time }, Ey(D[T.uuid] ?? p(T.timer_time))))) : /* @__PURE__ */ d.createElement("div", { className: Z.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ d.createElement(_a, { open: v, onClose: () => g(!1), title: "Создать таймер", footer: /* @__PURE__ */ d.createElement(me, { onClick: F, disabled: !w }, "Создать") }, /* @__PURE__ */ d.createElement("div", { className: Z.form }, /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ d.createElement("select", { className: Z.select, value: w, onChange: (T) => C(T.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Выберите устройство"), i.map((T) => /* @__PURE__ */ d.createElement("option", { key: T.id, value: T.id }, T.name)))), /* @__PURE__ */ d.createElement("div", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ d.createElement("div", { className: Z.quickTabs }, _y.map((T) => /* @__PURE__ */ d.createElement("button", { key: T, type: "button", className: `${Z.quickTab} ${P === T ? Z.activeQuickTab : ""}`, onClick: () => x(T) }, T, " мин")))), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Свое значение, минут"), /* @__PURE__ */ d.createElement("input", { className: Z.input, type: "number", min: "1", value: P, onChange: (T) => x(Number(T.target.value) || 1) })))));
}, ky = () => {
  const { alarmTimeWidgets: l, alarms: i, createAlarm: u, deleteAlarm: s, devices: f, loading: p, updateAlarm: v } = kd(), [g, w] = E.useState(!1), [C, P] = E.useState(""), [x, D] = E.useState("08:00"), $ = E.useMemo(() => {
    const T = l.flatMap((L) => L.time || []);
    return Array.from(new Set(T)).filter(Boolean);
  }, [l]), j = E.useMemo(() => new Map(f.map((T) => [T.id, T.name])), [f]), F = async () => {
    !C || !x || (await u(C, x), w(!1));
  };
  return /* @__PURE__ */ d.createElement("div", { className: Z.page }, /* @__PURE__ */ d.createElement(Kr, null), /* @__PURE__ */ d.createElement("div", { className: Z.header }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h1", { className: Z.title }, "Будильник"), /* @__PURE__ */ d.createElement("p", { className: Z.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ d.createElement(me, { onClick: () => w(!0) }, "Создать")), p && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Z.grid }, i.length ? i.map((T) => /* @__PURE__ */ d.createElement("div", { className: Z.card, key: T.uuid }, /* @__PURE__ */ d.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", { className: Z.cardTitle }, T.name || "Будильник"), /* @__PURE__ */ d.createElement("div", { className: Z.meta }, "Устройство: ", j.get(T.device_id) || T.device_id)), /* @__PURE__ */ d.createElement(me, { variant: "ghost", onClick: () => s(T) }, "Удалить")), /* @__PURE__ */ d.createElement("label", { className: `${Z.row} ${Z.meta}` }, /* @__PURE__ */ d.createElement("input", { className: Z.switch, type: "checkbox", checked: T.status !== "off", onChange: (L) => v(T, { status: L.target.checked ? "on" : "off" }) }), T.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ d.createElement("input", { className: Z.input, type: "time", value: T.time, onChange: (L) => v(T, { time: L.target.value }) })))) : /* @__PURE__ */ d.createElement("div", { className: Z.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ d.createElement(_a, { open: g, onClose: () => w(!1), title: "Создать будильник", footer: /* @__PURE__ */ d.createElement(me, { onClick: F, disabled: !C || !x }, "Создать") }, /* @__PURE__ */ d.createElement("div", { className: Z.form }, /* @__PURE__ */ d.createElement("div", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ d.createElement("div", { className: Z.quickTabs }, $.length ? $.map((T) => /* @__PURE__ */ d.createElement("button", { key: T, type: "button", className: `${Z.quickTab} ${x === T ? Z.activeQuickTab : ""}`, onClick: () => D(T) }, T)) : /* @__PURE__ */ d.createElement("span", { className: Z.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ d.createElement("select", { className: Z.select, value: C, onChange: (T) => P(T.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Выберите устройство"), f.map((T) => /* @__PURE__ */ d.createElement("option", { key: T.id, value: T.id }, T.name)))), /* @__PURE__ */ d.createElement("label", { className: Z.field }, /* @__PURE__ */ d.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ d.createElement("input", { className: Z.input, type: "time", value: x, onChange: (T) => D(T.target.value) })))));
}, Sy = () => /* @__PURE__ */ d.createElement(xm, null, /* @__PURE__ */ d.createElement(
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
    element: /* @__PURE__ */ d.createElement(nv, null)
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
    element: /* @__PURE__ */ d.createElement(Nv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ d.createElement(Tv, null)
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
    element: /* @__PURE__ */ d.createElement(Rv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ d.createElement(Pv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ d.createElement(Lv, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/timer",
    element: /* @__PURE__ */ d.createElement(wy, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/alarm",
    element: /* @__PURE__ */ d.createElement(ky, null)
  }
), /* @__PURE__ */ d.createElement(
  rt,
  {
    path: "/settings",
    element: /* @__PURE__ */ d.createElement(Xv, null)
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
)), Cy = () => /* @__PURE__ */ d.createElement(Sy, null);
class xy {
  constructor(i) {
    this.hass = i;
  }
  async _getShort(i, u, s) {
    const f = await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      ...u ? { page: u } : {},
      ...s ? { page_size: s } : {}
    });
    return console.log("WS <=", f), f;
  }
  async _getDetail(i, u) {
    return await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${u}`,
      uuid: i
    });
  }
  async _save(i, u) {
    return console.log(i), this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${u}`,
      data: i
    });
  }
  async _update(i, u, s) {
    return console.log(s), this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${u}`,
      uuid: i,
      data: s
    });
  }
  async _delete(i, u) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${u}`,
      uuid: i
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((i) => {
      const u = String(i.entity_id || "");
      return u.startsWith("media_player.") || u.startsWith("speaker.");
    }).map((i) => {
      var u;
      return {
        id: i.entity_id,
        name: ((u = i.attributes) == null ? void 0 : u.friendly_name) ?? i.entity_id
      };
    });
  }
  getScripts() {
    return Object.values(this.hass.states).filter(
      (i) => i.entity_id.startsWith("script.")
    ).map((i) => {
      var u;
      return {
        entity_id: i.entity_id,
        name: ((u = i.attributes) == null ? void 0 : u.friendly_name) ?? i.entity_id
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
const Ny = 1, ha = 2, Ni = 3, Ty = 4, Ry = 5;
function Py(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function Ly() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function My(l) {
  const i = {
    type: "subscribe_events"
  };
  return l && (i.event_type = l), i;
}
function Yc(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function zy() {
  return {
    type: "ping"
  };
}
function Dy(l, i) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: i
    }
  };
}
const Iy = (l, i, u, s) => {
  const [f, p, v] = l.split(".", 3);
  return Number(f) > i || Number(f) === i && Number(p) >= u || s !== void 0;
}, Oy = "auth_invalid", Fy = "auth_ok";
function Ay(l) {
  if (!l.auth)
    throw Ty;
  const i = l.auth;
  let u = i.expired ? i.refreshAccessToken().then(() => {
    u = void 0;
  }, () => {
    u = void 0;
  }) : void 0;
  const s = i.wsUrl;
  function f(p, v, g) {
    const w = new WebSocket(s);
    let C = !1;
    const P = () => {
      if (w.removeEventListener("close", P), C) {
        g(ha);
        return;
      }
      if (p === 0) {
        g(Ny);
        return;
      }
      const $ = p === -1 ? -1 : p - 1;
      setTimeout(() => f($, v, g), 1e3);
    }, x = async ($) => {
      try {
        i.expired && await (u || i.refreshAccessToken()), w.send(JSON.stringify(Py(i.accessToken)));
      } catch (j) {
        C = j === ha, w.close();
      }
    }, D = async ($) => {
      const j = JSON.parse($.data);
      switch (j.type) {
        case Oy:
          C = !0, w.close();
          break;
        case Fy:
          w.removeEventListener("open", x), w.removeEventListener("message", D), w.removeEventListener("close", P), w.removeEventListener("error", P), w.haVersion = j.ha_version, Iy(w.haVersion, 2022, 9) && w.send(JSON.stringify(Ly())), v(w);
          break;
      }
    };
    w.addEventListener("open", x), w.addEventListener("message", D), w.addEventListener("close", P), w.addEventListener("error", P);
  }
  return new Promise((p, v) => f(l.setupRetry, p, v));
}
class $y {
  constructor(i, u) {
    this._handleMessage = (s) => {
      let f = JSON.parse(s.data);
      Array.isArray(f) || (f = [f]), f.forEach((p) => {
        const v = this.commands.get(p.id);
        switch (p.type) {
          case "event":
            v ? v.callback(p.event) : (console.warn(`Received event for unknown subscription ${p.id}. Unsubscribing.`), this.sendMessagePromise(Yc(p.id)).catch((g) => {
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
      const s = this.commands;
      if (this.commandId = 1, this.oldSubscriptions = this.commands, this.commands = /* @__PURE__ */ new Map(), this.socket = void 0, s.forEach((v) => {
        "subscribe" in v || v.reject(Dy(Ni, "Connection lost"));
      }), this.closeRequested)
        return;
      this.fireEvent("disconnected");
      const f = Object.assign(Object.assign({}, this.options), { setupRetry: 0 }), p = (v) => {
        setTimeout(async () => {
          if (!this.closeRequested)
            try {
              const g = await f.createSocket(f);
              this._setSocket(g);
            } catch (g) {
              if (this._queuedMessages) {
                const w = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const C of w)
                  C.reject && C.reject(Ni);
              }
              g === ha ? this.fireEvent("reconnect-error", g) : p(v + 1);
            }
        }, Math.min(v, 5) * 1e3);
      };
      this.suspendReconnectPromise && (await this.suspendReconnectPromise, this.suspendReconnectPromise = void 0, this._queuedMessages = []), p(0);
    }, this.options = u, this.commandId = 2, this.commands = /* @__PURE__ */ new Map(), this.eventListeners = /* @__PURE__ */ new Map(), this.closeRequested = !1, this._setSocket(i);
  }
  get connected() {
    return this.socket !== void 0 && this.socket.readyState == this.socket.OPEN;
  }
  _setSocket(i) {
    this.socket = i, this.haVersion = i.haVersion, i.addEventListener("message", this._handleMessage), i.addEventListener("close", this._handleClose);
    const u = this.oldSubscriptions;
    u && (this.oldSubscriptions = void 0, u.forEach((f) => {
      "subscribe" in f && f.subscribe && f.subscribe().then((p) => {
        f.unsubscribe = p, f.resolve();
      });
    }));
    const s = this._queuedMessages;
    if (s) {
      this._queuedMessages = void 0;
      for (const f of s)
        f.resolve();
    }
    this.fireEvent("ready");
  }
  addEventListener(i, u) {
    let s = this.eventListeners.get(i);
    s || (s = [], this.eventListeners.set(i, s)), s.push(u);
  }
  removeEventListener(i, u) {
    const s = this.eventListeners.get(i);
    if (!s)
      return;
    const f = s.indexOf(u);
    f !== -1 && s.splice(f, 1);
  }
  fireEvent(i, u) {
    (this.eventListeners.get(i) || []).forEach((s) => s(this, u));
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
  async subscribeEvents(i, u) {
    return this.subscribeMessage(i, My(u));
  }
  ping() {
    return this.sendMessagePromise(zy());
  }
  sendMessage(i, u) {
    if (!this.connected)
      throw Ni;
    if (this._queuedMessages) {
      if (u)
        throw new Error("Cannot queue with commandId");
      this._queuedMessages.push({ resolve: () => this.sendMessage(i) });
      return;
    }
    u || (u = this._genCmdId()), i.id = u, this.socket.send(JSON.stringify(i));
  }
  sendMessagePromise(i) {
    return new Promise((u, s) => {
      if (this._queuedMessages) {
        this._queuedMessages.push({
          reject: s,
          resolve: async () => {
            try {
              u(await this.sendMessagePromise(i));
            } catch (p) {
              s(p);
            }
          }
        });
        return;
      }
      const f = this._genCmdId();
      this.commands.set(f, { resolve: u, reject: s }), this.sendMessage(i, f);
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
  async subscribeMessage(i, u, s) {
    if (this._queuedMessages && await new Promise((p, v) => {
      this._queuedMessages.push({ resolve: p, reject: v });
    }), s != null && s.preCheck && !await s.preCheck())
      throw new Error("Pre-check failed");
    let f;
    return await new Promise((p, v) => {
      const g = this._genCmdId();
      f = {
        resolve: p,
        reject: v,
        callback: i,
        subscribe: (s == null ? void 0 : s.resubscribe) !== !1 ? () => this.subscribeMessage(i, u, s) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(Yc(g)), this.commands.delete(g);
        }
      }, this.commands.set(g, f);
      try {
        this.sendMessage(u, g);
      } catch {
      }
    }), () => f.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const jy = (l) => l * 1e3 + Date.now();
async function Uy(l, i, u) {
  const s = typeof location < "u" && location;
  if (s && s.protocol === "https:") {
    const g = document.createElement("a");
    if (g.href = l, g.protocol === "http:" && g.hostname !== "localhost")
      throw Ry;
  }
  const f = new FormData();
  i !== null && f.append("client_id", i), Object.keys(u).forEach((g) => {
    f.append(g, u[g]);
  });
  const p = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: f
  });
  if (!p.ok)
    throw p.status === 400 || p.status === 403 ? ha : new Error("Unable to fetch tokens");
  const v = await p.json();
  return v.hassUrl = l, v.clientId = i, v.expires = jy(v.expires_in), v;
}
class By {
  constructor(i, u) {
    this.data = i, this._saveTokens = u;
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
    const i = await Uy(this.data.hassUrl, this.data.clientId, {
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
function Hy(l, i) {
  return new By({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: i,
    expires_in: 1e11
  });
}
async function Wy(l) {
  const i = Object.assign({ setupRetry: 0, createSocket: Ay }, l), u = await i.createSocket(i);
  return new $y(u, i);
}
function Vy(l) {
  var i;
  return (i = l == null ? void 0 : l.connection) != null && i.sendMessagePromise ? l : typeof (l == null ? void 0 : l.callWS) == "function" ? {
    connection: {
      sendMessagePromise: (u) => l.callWS(u)
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
async function Qy() {
  const u = Hy(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI3NGI4MWRjMjQ0YWQ0N2EzOGM2MWM0NjM2ODEzNTFkOSIsImlhdCI6MTc4MjExNjkyMCwiZXhwIjoxNzgyMTE4NzIwfQ.QWaghsPJgAKR3zzmqt_Dk3wBDh3FkkIL4zn6ClCLVBw"
  ), s = await Wy({
    auth: u
  }), f = await s.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: s,
    states: f
  };
}
function Ky({
  children: l,
  hass: i
}) {
  const [u, s] = E.useState(null);
  return E.useEffect(() => {
    async function f() {
      const p = i ? Vy(i) : await Qy();
      s(new xy(p));
    }
    f().catch(console.error);
  }, [i]), u ? /* @__PURE__ */ d.createElement(_d.Provider, { value: u }, l) : /* @__PURE__ */ d.createElement("div", null, "Connecting to Home Assistant...");
}
function qy({ hass: l }) {
  return /* @__PURE__ */ d.createElement(Gm, null, /* @__PURE__ */ d.createElement(Ky, { hass: l }, /* @__PURE__ */ d.createElement(Cy, null)));
}
const Gc = "dialog-custom-ui-panel";
class Yy extends HTMLElement {
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
    const i = "dialog-custom-ui-panel.css", u = "dialog-custom-ui-panel.js", s = Array.from(document.getElementsByTagName("script")).find((w) => w.src && w.src.includes(u)), f = s && s.src ? new URL(s.src, window.location.href).search : "", p = `/dialog_custom_ui_static/${i}${f}`, v = document.querySelector(`link[href*="${i}"]`);
    if (v) {
      v.href !== new URL(p, window.location.href).href && (v.href = p);
      return;
    }
    const g = document.createElement("link");
    g.rel = "stylesheet", g.href = p, document.head.appendChild(g);
  }
  render() {
    this.isConnected && (this.root || (this.root = Tp.createRoot(this)), this.root.render(
      /* @__PURE__ */ d.createElement(d.StrictMode, null, /* @__PURE__ */ d.createElement(qy, { hass: this.hassValue }))
    ));
  }
}
customElements.get(Gc) || customElements.define(Gc, Yy);
