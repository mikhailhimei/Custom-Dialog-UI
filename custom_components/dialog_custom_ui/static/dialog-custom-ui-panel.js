function Dd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Oi = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ld;
function up() {
  if (ld) return ce;
  ld = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), g = Symbol.iterator;
  function x(N) {
    return N === null || typeof N != "object" ? null : (N = g && N[g] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, L = {};
  function k(N, A, ue) {
    this.props = N, this.context = A, this.refs = L, this.updater = ue || P;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(N, A) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, A, "setState");
  }, k.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function D() {
  }
  D.prototype = k.prototype;
  function R(N, A, ue) {
    this.props = N, this.context = A, this.refs = L, this.updater = ue || P;
  }
  var O = R.prototype = new D();
  O.constructor = R, $(O, k.prototype), O.isPureReactComponent = !0;
  var b = Array.isArray, H = Object.prototype.hasOwnProperty, W = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(N, A, ue) {
    var de, pe = {}, he = null, ke = null;
    if (A != null) for (de in A.ref !== void 0 && (ke = A.ref), A.key !== void 0 && (he = "" + A.key), A) H.call(A, de) && !le.hasOwnProperty(de) && (pe[de] = A[de]);
    var _e = arguments.length - 2;
    if (_e === 1) pe.children = ue;
    else if (1 < _e) {
      for (var Te = Array(_e), ot = 0; ot < _e; ot++) Te[ot] = arguments[ot + 2];
      pe.children = Te;
    }
    if (N && N.defaultProps) for (de in _e = N.defaultProps, _e) pe[de] === void 0 && (pe[de] = _e[de]);
    return { $$typeof: l, type: N, key: he, ref: ke, props: pe, _owner: W.current };
  }
  function fe(N, A) {
    return { $$typeof: l, type: N.type, key: A, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ye(N) {
    return typeof N == "object" && N !== null && N.$$typeof === l;
  }
  function Q(N) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ue) {
      return A[ue];
    });
  }
  var ae = /\/+/g;
  function Se(N, A) {
    return typeof N == "object" && N !== null && N.key != null ? Q("" + N.key) : A.toString(36);
  }
  function Ie(N, A, ue, de, pe) {
    var he = typeof N;
    (he === "undefined" || he === "boolean") && (N = null);
    var ke = !1;
    if (N === null) ke = !0;
    else switch (he) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case l:
          case o:
            ke = !0;
        }
    }
    if (ke) return ke = N, pe = pe(ke), N = de === "" ? "." + Se(ke, 0) : de, b(pe) ? (ue = "", N != null && (ue = N.replace(ae, "$&/") + "/"), Ie(pe, A, ue, "", function(ot) {
      return ot;
    })) : pe != null && (ye(pe) && (pe = fe(pe, ue + (!pe.key || ke && ke.key === pe.key ? "" : ("" + pe.key).replace(ae, "$&/") + "/") + N)), A.push(pe)), 1;
    if (ke = 0, de = de === "" ? "." : de + ":", b(N)) for (var _e = 0; _e < N.length; _e++) {
      he = N[_e];
      var Te = de + Se(he, _e);
      ke += Ie(he, A, ue, Te, pe);
    }
    else if (Te = x(N), typeof Te == "function") for (N = Te.call(N), _e = 0; !(he = N.next()).done; ) he = he.value, Te = de + Se(he, _e++), ke += Ie(he, A, ue, Te, pe);
    else if (he === "object") throw A = String(N), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function J(N, A, ue) {
    if (N == null) return N;
    var de = [], pe = 0;
    return Ie(N, de, "", "", function(he) {
      return A.call(ue, he, pe++);
    }), de;
  }
  function $e(N) {
    if (N._status === -1) {
      var A = N._result;
      A = A(), A.then(function(ue) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ue);
      }, function(ue) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ue);
      }), N._status === -1 && (N._status = 0, N._result = A);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var De = { current: null }, B = { transition: null }, oe = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: B, ReactCurrentOwner: W };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: J, forEach: function(N, A, ue) {
    J(N, function() {
      A.apply(this, arguments);
    }, ue);
  }, count: function(N) {
    var A = 0;
    return J(N, function() {
      A++;
    }), A;
  }, toArray: function(N) {
    return J(N, function(A) {
      return A;
    }) || [];
  }, only: function(N) {
    if (!ye(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, ce.Component = k, ce.Fragment = s, ce.Profiler = f, ce.PureComponent = R, ce.StrictMode = c, ce.Suspense = _, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, ce.act = K, ce.cloneElement = function(N, A, ue) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var de = $({}, N.props), pe = N.key, he = N.ref, ke = N._owner;
    if (A != null) {
      if (A.ref !== void 0 && (he = A.ref, ke = W.current), A.key !== void 0 && (pe = "" + A.key), N.type && N.type.defaultProps) var _e = N.type.defaultProps;
      for (Te in A) H.call(A, Te) && !le.hasOwnProperty(Te) && (de[Te] = A[Te] === void 0 && _e !== void 0 ? _e[Te] : A[Te]);
    }
    var Te = arguments.length - 2;
    if (Te === 1) de.children = ue;
    else if (1 < Te) {
      _e = Array(Te);
      for (var ot = 0; ot < Te; ot++) _e[ot] = arguments[ot + 2];
      de.children = _e;
    }
    return { $$typeof: l, type: N.type, key: pe, ref: he, props: de, _owner: ke };
  }, ce.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: m, _context: N }, N.Consumer = N;
  }, ce.createElement = q, ce.createFactory = function(N) {
    var A = q.bind(null, N);
    return A.type = N, A;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(N) {
    return { $$typeof: h, render: N };
  }, ce.isValidElement = ye, ce.lazy = function(N) {
    return { $$typeof: S, _payload: { _status: -1, _result: N }, _init: $e };
  }, ce.memo = function(N, A) {
    return { $$typeof: C, type: N, compare: A === void 0 ? null : A };
  }, ce.startTransition = function(N) {
    var A = B.transition;
    B.transition = {};
    try {
      N();
    } finally {
      B.transition = A;
    }
  }, ce.unstable_act = K, ce.useCallback = function(N, A) {
    return De.current.useCallback(N, A);
  }, ce.useContext = function(N) {
    return De.current.useContext(N);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(N) {
    return De.current.useDeferredValue(N);
  }, ce.useEffect = function(N, A) {
    return De.current.useEffect(N, A);
  }, ce.useId = function() {
    return De.current.useId();
  }, ce.useImperativeHandle = function(N, A, ue) {
    return De.current.useImperativeHandle(N, A, ue);
  }, ce.useInsertionEffect = function(N, A) {
    return De.current.useInsertionEffect(N, A);
  }, ce.useLayoutEffect = function(N, A) {
    return De.current.useLayoutEffect(N, A);
  }, ce.useMemo = function(N, A) {
    return De.current.useMemo(N, A);
  }, ce.useReducer = function(N, A, ue) {
    return De.current.useReducer(N, A, ue);
  }, ce.useRef = function(N) {
    return De.current.useRef(N);
  }, ce.useState = function(N) {
    return De.current.useState(N);
  }, ce.useSyncExternalStore = function(N, A, ue) {
    return De.current.useSyncExternalStore(N, A, ue);
  }, ce.useTransition = function() {
    return De.current.useTransition();
  }, ce.version = "18.3.1", ce;
}
var ad;
function zd() {
  return ad || (ad = 1, Oi.exports = up()), Oi.exports;
}
var v = zd();
const u = /* @__PURE__ */ Dd(v);
var xa = {}, Ai = { exports: {} }, lt = {}, Fi = { exports: {} }, ji = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;
function cp() {
  return od || (od = 1, (function(l) {
    function o(B, oe) {
      var K = B.length;
      B.push(oe);
      e: for (; 0 < K; ) {
        var N = K - 1 >>> 1, A = B[N];
        if (0 < f(A, oe)) B[N] = oe, B[K] = A, K = N;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function c(B) {
      if (B.length === 0) return null;
      var oe = B[0], K = B.pop();
      if (K !== oe) {
        B[0] = K;
        e: for (var N = 0, A = B.length, ue = A >>> 1; N < ue; ) {
          var de = 2 * (N + 1) - 1, pe = B[de], he = de + 1, ke = B[he];
          if (0 > f(pe, K)) he < A && 0 > f(ke, pe) ? (B[N] = ke, B[he] = K, N = he) : (B[N] = pe, B[de] = K, N = de);
          else if (he < A && 0 > f(ke, K)) B[N] = ke, B[he] = K, N = he;
          else break e;
        }
      }
      return oe;
    }
    function f(B, oe) {
      var K = B.sortIndex - oe.sortIndex;
      return K !== 0 ? K : B.id - oe.id;
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
    var _ = [], C = [], S = 1, g = null, x = 3, P = !1, $ = !1, L = !1, k = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(B) {
      for (var oe = s(C); oe !== null; ) {
        if (oe.callback === null) c(C);
        else if (oe.startTime <= B) c(C), oe.sortIndex = oe.expirationTime, o(_, oe);
        else break;
        oe = s(C);
      }
    }
    function b(B) {
      if (L = !1, O(B), !$) if (s(_) !== null) $ = !0, $e(H);
      else {
        var oe = s(C);
        oe !== null && De(b, oe.startTime - B);
      }
    }
    function H(B, oe) {
      $ = !1, L && (L = !1, D(q), q = -1), P = !0;
      var K = x;
      try {
        for (O(oe), g = s(_); g !== null && (!(g.expirationTime > oe) || B && !Q()); ) {
          var N = g.callback;
          if (typeof N == "function") {
            g.callback = null, x = g.priorityLevel;
            var A = N(g.expirationTime <= oe);
            oe = l.unstable_now(), typeof A == "function" ? g.callback = A : g === s(_) && c(_), O(oe);
          } else c(_);
          g = s(_);
        }
        if (g !== null) var ue = !0;
        else {
          var de = s(C);
          de !== null && De(b, de.startTime - oe), ue = !1;
        }
        return ue;
      } finally {
        g = null, x = K, P = !1;
      }
    }
    var W = !1, le = null, q = -1, fe = 5, ye = -1;
    function Q() {
      return !(l.unstable_now() - ye < fe);
    }
    function ae() {
      if (le !== null) {
        var B = l.unstable_now();
        ye = B;
        var oe = !0;
        try {
          oe = le(!0, B);
        } finally {
          oe ? Se() : (W = !1, le = null);
        }
      } else W = !1;
    }
    var Se;
    if (typeof R == "function") Se = function() {
      R(ae);
    };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel(), J = Ie.port2;
      Ie.port1.onmessage = ae, Se = function() {
        J.postMessage(null);
      };
    } else Se = function() {
      k(ae, 0);
    };
    function $e(B) {
      le = B, W || (W = !0, Se());
    }
    function De(B, oe) {
      q = k(function() {
        B(l.unstable_now());
      }, oe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      $ || P || ($ = !0, $e(H));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : fe = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(_);
    }, l.unstable_next = function(B) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = x;
      }
      var K = x;
      x = oe;
      try {
        return B();
      } finally {
        x = K;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(B, oe) {
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
      var K = x;
      x = B;
      try {
        return oe();
      } finally {
        x = K;
      }
    }, l.unstable_scheduleCallback = function(B, oe, K) {
      var N = l.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? N + K : N) : K = N, B) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = K + A, B = { id: S++, callback: oe, priorityLevel: B, startTime: K, expirationTime: A, sortIndex: -1 }, K > N ? (B.sortIndex = K, o(C, B), s(_) === null && B === s(C) && (L ? (D(q), q = -1) : L = !0, De(b, K - N))) : (B.sortIndex = A, o(_, B), $ || P || ($ = !0, $e(H))), B;
    }, l.unstable_shouldYield = Q, l.unstable_wrapCallback = function(B) {
      var oe = x;
      return function() {
        var K = x;
        x = oe;
        try {
          return B.apply(this, arguments);
        } finally {
          x = K;
        }
      };
    };
  })(ji)), ji;
}
var id;
function dp() {
  return id || (id = 1, Fi.exports = cp()), Fi.exports;
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
var sd;
function fp() {
  if (sd) return lt;
  sd = 1;
  var l = zd(), o = dp();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), f = {};
  function m(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, g = {};
  function x(e) {
    return _.call(g, e) ? !0 : _.call(S, e) ? !1 : C.test(e) ? g[e] = !0 : (S[e] = !0, !1);
  }
  function P(e, t, n, r) {
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
  function $(e, t, n, r) {
    if (t === null || typeof t > "u" || P(e, t, n, r)) return !0;
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
  function L(e, t, n, r, a, i, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = d;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new L(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    k[t] = new L(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new L(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new L(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new L(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      D,
      R
    );
    k[t] = new L(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(D, R);
    k[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(D, R);
    k[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, n, r) {
    var a = k.hasOwnProperty(t) ? k[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($(t, n, a, r) && (n = null), r || a === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), W = Symbol.for("react.portal"), le = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), fe = Symbol.for("react.profiler"), ye = Symbol.for("react.provider"), Q = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), Se = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign, N;
  function A(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
  }
  var ue = !1;
  function de(e, t) {
    if (!e || ue) return "";
    ue = !0;
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
`), i = r.stack.split(`
`), d = a.length - 1, y = i.length - 1; 1 <= d && 0 <= y && a[d] !== i[y]; ) y--;
        for (; 1 <= d && 0 <= y; d--, y--) if (a[d] !== i[y]) {
          if (d !== 1 || y !== 1)
            do
              if (d--, y--, 0 > y || a[d] !== i[y]) {
                var E = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= d && 0 <= y);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case le:
        return "Fragment";
      case W:
        return "Portal";
      case fe:
        return "Profiler";
      case q:
        return "StrictMode";
      case Se:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Q:
        return (e.displayName || "Context") + ".Consumer";
      case ye:
        return (e._context.displayName || "Context") + ".Provider";
      case ae:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case J:
        return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
      case $e:
        t = e._payload, e = e._init;
        try {
          return he(e(t));
        } catch {
        }
    }
    return null;
  }
  function ke(e) {
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
        return he(t);
      case 8:
        return t === q ? "StrictMode" : "Mode";
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
  function _e(e) {
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
  function Te(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = Te(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        r = "" + d, i.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(d) {
        r = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function vl(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function cs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Te(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function yl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wa(e, t) {
    var n = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ds(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = _e(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function fs(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function ba(e, t) {
    fs(e, t);
    var n = _e(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ha(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ha(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ha(e, t, n) {
    (t !== "number" || yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var _r = Array.isArray;
  function Un(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + _e(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Va(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ps(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (_r(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: _e(n) };
  }
  function hs(e, t) {
    var n = _e(t.value), r = _e(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function vs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ys(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function qa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ys(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var gl, gs = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (gl = gl || document.createElement("div"), gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Er(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wr = {
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
  }, mf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wr).forEach(function(e) {
    mf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
    });
  });
  function _s(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
  }
  function Es(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = _s(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var pf = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Qa(e, t) {
    if (t) {
      if (pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ya(e, t) {
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
  var Ka = null;
  function Ga(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, Bn = null, Wn = null;
  function ws(e) {
    if (e = br(e)) {
      if (typeof Xa != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Bl(t), Xa(e.stateNode, e.type, t));
    }
  }
  function ks(e) {
    Bn ? Wn ? Wn.push(e) : Wn = [e] : Bn = e;
  }
  function Cs() {
    if (Bn) {
      var e = Bn, t = Wn;
      if (Wn = Bn = null, ws(e), t) for (e = 0; e < t.length; e++) ws(t[e]);
    }
  }
  function Ss(e, t) {
    return e(t);
  }
  function Ns() {
  }
  var Ja = !1;
  function xs(e, t, n) {
    if (Ja) return e(t, n);
    Ja = !0;
    try {
      return Ss(e, t, n);
    } finally {
      Ja = !1, (Bn !== null || Wn !== null) && (Ns(), Cs());
    }
  }
  function kr(e, t) {
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
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Za = !1;
  if (h) try {
    var Cr = {};
    Object.defineProperty(Cr, "passive", { get: function() {
      Za = !0;
    } }), window.addEventListener("test", Cr, Cr), window.removeEventListener("test", Cr, Cr);
  } catch {
    Za = !1;
  }
  function hf(e, t, n, r, a, i, d, y, E) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (F) {
      this.onError(F);
    }
  }
  var Sr = !1, _l = null, El = !1, eo = null, vf = { onError: function(e) {
    Sr = !0, _l = e;
  } };
  function yf(e, t, n, r, a, i, d, y, E) {
    Sr = !1, _l = null, hf.apply(vf, arguments);
  }
  function gf(e, t, n, r, a, i, d, y, E) {
    if (yf.apply(this, arguments), Sr) {
      if (Sr) {
        var I = _l;
        Sr = !1, _l = null;
      } else throw Error(s(198));
      El || (El = !0, eo = I);
    }
  }
  function En(e) {
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
  function Ts(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Rs(e) {
    if (En(e) !== e) throw Error(s(188));
  }
  function _f(e) {
    var t = e.alternate;
    if (!t) {
      if (t = En(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (r = a.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === n) return Rs(a), e;
          if (i === r) return Rs(a), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = a, r = i;
      else {
        for (var d = !1, y = a.child; y; ) {
          if (y === n) {
            d = !0, n = a, r = i;
            break;
          }
          if (y === r) {
            d = !0, r = a, n = i;
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = i.child; y; ) {
            if (y === n) {
              d = !0, n = i, r = a;
              break;
            }
            if (y === r) {
              d = !0, r = i, n = a;
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ps(e) {
    return e = _f(e), e !== null ? Ms(e) : null;
  }
  function Ms(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ms(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ls = o.unstable_scheduleCallback, Is = o.unstable_cancelCallback, Ef = o.unstable_shouldYield, wf = o.unstable_requestPaint, Oe = o.unstable_now, kf = o.unstable_getCurrentPriorityLevel, to = o.unstable_ImmediatePriority, $s = o.unstable_UserBlockingPriority, wl = o.unstable_NormalPriority, Cf = o.unstable_LowPriority, Ds = o.unstable_IdlePriority, kl = null, Lt = null;
  function Sf(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
      Lt.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var kt = Math.clz32 ? Math.clz32 : Tf, Nf = Math.log, xf = Math.LN2;
  function Tf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Nf(e) / xf | 0) | 0;
  }
  var Cl = 64, Sl = 4194304;
  function Nr(e) {
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
  function Nl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, i = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var y = d & ~a;
      y !== 0 ? r = Nr(y) : (i &= d, i !== 0 && (r = Nr(i)));
    } else d = n & ~a, d !== 0 ? r = Nr(d) : i !== 0 && (r = Nr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Rf(e, t) {
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
  function Pf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var d = 31 - kt(i), y = 1 << d, E = a[d];
      E === -1 ? ((y & n) === 0 || (y & r) !== 0) && (a[d] = Rf(y, t)) : E <= t && (e.expiredLanes |= y), i &= ~y;
    }
  }
  function no(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function zs() {
    var e = Cl;
    return Cl <<= 1, (Cl & 4194240) === 0 && (Cl = 64), e;
  }
  function ro(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function xr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
  }
  function Mf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - kt(n), i = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
    }
  }
  function lo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - kt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var Ee = 0;
  function Os(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var As, ao, Fs, js, Us, oo = !1, xl = [], Xt = null, Jt = null, Zt = null, Tr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), en = [], Lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xt = null;
        break;
      case "dragenter":
      case "dragleave":
        Jt = null;
        break;
      case "mouseover":
      case "mouseout":
        Zt = null;
        break;
      case "pointerover":
      case "pointerout":
        Tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, a, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = br(t), t !== null && ao(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function If(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Xt = Pr(Xt, e, t, n, r, a), !0;
      case "dragenter":
        return Jt = Pr(Jt, e, t, n, r, a), !0;
      case "mouseover":
        return Zt = Pr(Zt, e, t, n, r, a), !0;
      case "pointerover":
        var i = a.pointerId;
        return Tr.set(i, Pr(Tr.get(i) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return i = a.pointerId, Rr.set(i, Pr(Rr.get(i) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Ws(e) {
    var t = wn(e.target);
    if (t !== null) {
      var n = En(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ts(n), t !== null) {
            e.blockedOn = t, Us(e.priority, function() {
              Fs(n);
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
  function Tl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = so(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ka = r, n.target.dispatchEvent(r), Ka = null;
      } else return t = br(n), t !== null && ao(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function bs(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function $f() {
    oo = !1, Xt !== null && Tl(Xt) && (Xt = null), Jt !== null && Tl(Jt) && (Jt = null), Zt !== null && Tl(Zt) && (Zt = null), Tr.forEach(bs), Rr.forEach(bs);
  }
  function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, oo || (oo = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, $f)));
  }
  function Lr(e) {
    function t(a) {
      return Mr(a, e);
    }
    if (0 < xl.length) {
      Mr(xl[0], e);
      for (var n = 1; n < xl.length; n++) {
        var r = xl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Xt !== null && Mr(Xt, e), Jt !== null && Mr(Jt, e), Zt !== null && Mr(Zt, e), Tr.forEach(t), Rr.forEach(t), n = 0; n < en.length; n++) r = en[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < en.length && (n = en[0], n.blockedOn === null); ) Ws(n), n.blockedOn === null && en.shift();
  }
  var bn = b.ReactCurrentBatchConfig, Rl = !0;
  function Df(e, t, n, r) {
    var a = Ee, i = bn.transition;
    bn.transition = null;
    try {
      Ee = 1, io(e, t, n, r);
    } finally {
      Ee = a, bn.transition = i;
    }
  }
  function zf(e, t, n, r) {
    var a = Ee, i = bn.transition;
    bn.transition = null;
    try {
      Ee = 4, io(e, t, n, r);
    } finally {
      Ee = a, bn.transition = i;
    }
  }
  function io(e, t, n, r) {
    if (Rl) {
      var a = so(e, t, n, r);
      if (a === null) xo(e, t, r, Pl, n), Bs(e, r);
      else if (If(a, e, t, n, r)) r.stopPropagation();
      else if (Bs(e, r), t & 4 && -1 < Lf.indexOf(e)) {
        for (; a !== null; ) {
          var i = br(a);
          if (i !== null && As(i), i = so(e, t, n, r), i === null && xo(e, t, r, Pl, n), i === a) break;
          a = i;
        }
        a !== null && r.stopPropagation();
      } else xo(e, t, r, null, n);
    }
  }
  var Pl = null;
  function so(e, t, n, r) {
    if (Pl = null, e = Ga(r), e = wn(e), e !== null) if (t = En(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ts(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Pl = e, null;
  }
  function Hs(e) {
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
        switch (kf()) {
          case to:
            return 1;
          case $s:
            return 4;
          case wl:
          case Cf:
            return 16;
          case Ds:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var tn = null, uo = null, Ml = null;
  function Vs() {
    if (Ml) return Ml;
    var e, t = uo, n = t.length, r, a = "value" in tn ? tn.value : tn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[i - r]; r++) ;
    return Ml = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ll(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Il() {
    return !0;
  }
  function qs() {
    return !1;
  }
  function it(e) {
    function t(n, r, a, i, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(i) : i[y]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Il : qs, this.isPropagationStopped = qs, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Il);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Il);
    }, persist: function() {
    }, isPersistent: Il }), t;
  }
  var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, co = it(Hn), Ir = K({}, Hn, { view: 0, detail: 0 }), Of = it(Ir), fo, mo, $r, $l = K({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ho, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== $r && ($r && e.type === "mousemove" ? (fo = e.screenX - $r.screenX, mo = e.screenY - $r.screenY) : mo = fo = 0, $r = e), fo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : mo;
  } }), Qs = it($l), Af = K({}, $l, { dataTransfer: 0 }), Ff = it(Af), jf = K({}, Ir, { relatedTarget: 0 }), po = it(jf), Uf = K({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bf = it(Uf), Wf = K({}, Hn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), bf = it(Wf), Hf = K({}, Hn, { data: 0 }), Ys = it(Hf), Vf = {
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
  }, qf = {
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
  }, Qf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qf[e]) ? !!t[e] : !1;
  }
  function ho() {
    return Yf;
  }
  var Kf = K({}, Ir, { key: function(e) {
    if (e.key) {
      var t = Vf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ho, charCode: function(e) {
    return e.type === "keypress" ? Ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gf = it(Kf), Xf = K({}, $l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ks = it(Xf), Jf = K({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ho }), Zf = it(Jf), em = K({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tm = it(em), nm = K({}, $l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rm = it(nm), lm = [9, 13, 27, 32], vo = h && "CompositionEvent" in window, Dr = null;
  h && "documentMode" in document && (Dr = document.documentMode);
  var am = h && "TextEvent" in window && !Dr, Gs = h && (!vo || Dr && 8 < Dr && 11 >= Dr), Xs = " ", Js = !1;
  function Zs(e, t) {
    switch (e) {
      case "keyup":
        return lm.indexOf(t.keyCode) !== -1;
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
  function eu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vn = !1;
  function om(e, t) {
    switch (e) {
      case "compositionend":
        return eu(t);
      case "keypress":
        return t.which !== 32 ? null : (Js = !0, Xs);
      case "textInput":
        return e = t.data, e === Xs && Js ? null : e;
      default:
        return null;
    }
  }
  function im(e, t) {
    if (Vn) return e === "compositionend" || !vo && Zs(e, t) ? (e = Vs(), Ml = uo = tn = null, Vn = !1, e) : null;
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
        return Gs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sm[e.type] : t === "textarea";
  }
  function nu(e, t, n, r) {
    ks(r), t = Fl(t, "onChange"), 0 < t.length && (n = new co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var zr = null, Or = null;
  function um(e) {
    Eu(e, 0);
  }
  function Dl(e) {
    var t = Gn(e);
    if (cs(t)) return e;
  }
  function cm(e, t) {
    if (e === "change") return t;
  }
  var ru = !1;
  if (h) {
    var yo;
    if (h) {
      var go = "oninput" in document;
      if (!go) {
        var lu = document.createElement("div");
        lu.setAttribute("oninput", "return;"), go = typeof lu.oninput == "function";
      }
      yo = go;
    } else yo = !1;
    ru = yo && (!document.documentMode || 9 < document.documentMode);
  }
  function au() {
    zr && (zr.detachEvent("onpropertychange", ou), Or = zr = null);
  }
  function ou(e) {
    if (e.propertyName === "value" && Dl(Or)) {
      var t = [];
      nu(t, Or, e, Ga(e)), xs(um, t);
    }
  }
  function dm(e, t, n) {
    e === "focusin" ? (au(), zr = t, Or = n, zr.attachEvent("onpropertychange", ou)) : e === "focusout" && au();
  }
  function fm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(Or);
  }
  function mm(e, t) {
    if (e === "click") return Dl(t);
  }
  function pm(e, t) {
    if (e === "input" || e === "change") return Dl(t);
  }
  function hm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : hm;
  function Ar(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!_.call(t, a) || !Ct(e[a], t[a])) return !1;
    }
    return !0;
  }
  function iu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function su(e, t) {
    var n = iu(e);
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
      n = iu(n);
    }
  }
  function uu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function cu() {
    for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = yl(e.document);
    }
    return t;
  }
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function vm(e) {
    var t = cu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && uu(n.ownerDocument.documentElement, n)) {
      if (r !== null && _o(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, i = Math.min(r.start, a);
          r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = su(n, i);
          var d = su(
            n,
            r
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ym = h && "documentMode" in document && 11 >= document.documentMode, qn = null, Eo = null, Fr = null, wo = !1;
  function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo || qn == null || qn !== yl(r) || (r = qn, "selectionStart" in r && _o(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && Ar(Fr, r) || (Fr = r, r = Fl(Eo, "onSelect"), 0 < r.length && (t = new co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = qn)));
  }
  function zl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Qn = { animationend: zl("Animation", "AnimationEnd"), animationiteration: zl("Animation", "AnimationIteration"), animationstart: zl("Animation", "AnimationStart"), transitionend: zl("Transition", "TransitionEnd") }, ko = {}, fu = {};
  h && (fu = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);
  function Ol(e) {
    if (ko[e]) return ko[e];
    if (!Qn[e]) return e;
    var t = Qn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in fu) return ko[e] = t[n];
    return e;
  }
  var mu = Ol("animationend"), pu = Ol("animationiteration"), hu = Ol("animationstart"), vu = Ol("transitionend"), yu = /* @__PURE__ */ new Map(), gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function nn(e, t) {
    yu.set(e, t), m(t, [e]);
  }
  for (var Co = 0; Co < gu.length; Co++) {
    var So = gu[Co], gm = So.toLowerCase(), _m = So[0].toUpperCase() + So.slice(1);
    nn(gm, "on" + _m);
  }
  nn(mu, "onAnimationEnd"), nn(pu, "onAnimationIteration"), nn(hu, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(vu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Em = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
  function _u(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, gf(r, t, void 0, e), e.currentTarget = null;
  }
  function Eu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var y = r[d], E = y.instance, I = y.currentTarget;
          if (y = y.listener, E !== i && a.isPropagationStopped()) break e;
          _u(a, y, I), i = E;
        }
        else for (d = 0; d < r.length; d++) {
          if (y = r[d], E = y.instance, I = y.currentTarget, y = y.listener, E !== i && a.isPropagationStopped()) break e;
          _u(a, y, I), i = E;
        }
      }
    }
    if (El) throw e = eo, El = !1, eo = null, e;
  }
  function Ne(e, t) {
    var n = t[Io];
    n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (wu(t, e, 2, !1), n.add(r));
  }
  function No(e, t, n) {
    var r = 0;
    t && (r |= 4), wu(n, e, r, t);
  }
  var Al = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Al]) {
      e[Al] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Em.has(n) || No(n, !1, e), No(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Al] || (t[Al] = !0, No("selectionchange", !1, t));
    }
  }
  function wu(e, t, n, r) {
    switch (Hs(t)) {
      case 1:
        var a = Df;
        break;
      case 4:
        a = zf;
        break;
      default:
        a = io;
    }
    n = a.bind(null, t, n, e), a = void 0, !Za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function xo(e, t, n, r, a) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var y = r.stateNode.containerInfo;
        if (y === a || y.nodeType === 8 && y.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var E = d.tag;
          if ((E === 3 || E === 4) && (E = d.stateNode.containerInfo, E === a || E.nodeType === 8 && E.parentNode === a)) return;
          d = d.return;
        }
        for (; y !== null; ) {
          if (d = wn(y), d === null) return;
          if (E = d.tag, E === 5 || E === 6) {
            r = i = d;
            continue e;
          }
          y = y.parentNode;
        }
      }
      r = r.return;
    }
    xs(function() {
      var I = i, F = Ga(n), j = [];
      e: {
        var z = yu.get(e);
        if (z !== void 0) {
          var V = co, G = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = Gf;
              break;
            case "focusin":
              G = "focus", V = po;
              break;
            case "focusout":
              G = "blur", V = po;
              break;
            case "beforeblur":
            case "afterblur":
              V = po;
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
              V = Qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Ff;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Zf;
              break;
            case mu:
            case pu:
            case hu:
              V = Bf;
              break;
            case vu:
              V = tm;
              break;
            case "scroll":
              V = Of;
              break;
            case "wheel":
              V = rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = bf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Ks;
          }
          var X = (t & 4) !== 0, Ae = !X && e === "scroll", T = X ? z !== null ? z + "Capture" : null : z;
          X = [];
          for (var w = I, M; w !== null; ) {
            M = w;
            var U = M.stateNode;
            if (M.tag === 5 && U !== null && (M = U, T !== null && (U = kr(w, T), U != null && X.push(Br(w, U, M)))), Ae) break;
            w = w.return;
          }
          0 < X.length && (z = new V(z, G, null, n, F), j.push({ event: z, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", z && n !== Ka && (G = n.relatedTarget || n.fromElement) && (wn(G) || G[jt])) break e;
          if ((V || z) && (z = F.window === F ? F : (z = F.ownerDocument) ? z.defaultView || z.parentWindow : window, V ? (G = n.relatedTarget || n.toElement, V = I, G = G ? wn(G) : null, G !== null && (Ae = En(G), G !== Ae || G.tag !== 5 && G.tag !== 6) && (G = null)) : (V = null, G = I), V !== G)) {
            if (X = Qs, U = "onMouseLeave", T = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (X = Ks, U = "onPointerLeave", T = "onPointerEnter", w = "pointer"), Ae = V == null ? z : Gn(V), M = G == null ? z : Gn(G), z = new X(U, w + "leave", V, n, F), z.target = Ae, z.relatedTarget = M, U = null, wn(F) === I && (X = new X(T, w + "enter", G, n, F), X.target = M, X.relatedTarget = Ae, U = X), Ae = U, V && G) t: {
              for (X = V, T = G, w = 0, M = X; M; M = Yn(M)) w++;
              for (M = 0, U = T; U; U = Yn(U)) M++;
              for (; 0 < w - M; ) X = Yn(X), w--;
              for (; 0 < M - w; ) T = Yn(T), M--;
              for (; w--; ) {
                if (X === T || T !== null && X === T.alternate) break t;
                X = Yn(X), T = Yn(T);
              }
              X = null;
            }
            else X = null;
            V !== null && ku(j, z, V, X, !1), G !== null && Ae !== null && ku(j, Ae, G, X, !0);
          }
        }
        e: {
          if (z = I ? Gn(I) : window, V = z.nodeName && z.nodeName.toLowerCase(), V === "select" || V === "input" && z.type === "file") var Z = cm;
          else if (tu(z)) if (ru) Z = pm;
          else {
            Z = fm;
            var ne = dm;
          }
          else (V = z.nodeName) && V.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (Z = mm);
          if (Z && (Z = Z(e, I))) {
            nu(j, Z, n, F);
            break e;
          }
          ne && ne(e, z, I), e === "focusout" && (ne = z._wrapperState) && ne.controlled && z.type === "number" && Ha(z, "number", z.value);
        }
        switch (ne = I ? Gn(I) : window, e) {
          case "focusin":
            (tu(ne) || ne.contentEditable === "true") && (qn = ne, Eo = I, Fr = null);
            break;
          case "focusout":
            Fr = Eo = qn = null;
            break;
          case "mousedown":
            wo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wo = !1, du(j, n, F);
            break;
          case "selectionchange":
            if (ym) break;
          case "keydown":
          case "keyup":
            du(j, n, F);
        }
        var re;
        if (vo) e: {
          switch (e) {
            case "compositionstart":
              var ie = "onCompositionStart";
              break e;
            case "compositionend":
              ie = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ie = "onCompositionUpdate";
              break e;
          }
          ie = void 0;
        }
        else Vn ? Zs(e, n) && (ie = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");
        ie && (Gs && n.locale !== "ko" && (Vn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Vn && (re = Vs()) : (tn = F, uo = "value" in tn ? tn.value : tn.textContent, Vn = !0)), ne = Fl(I, ie), 0 < ne.length && (ie = new Ys(ie, e, null, n, F), j.push({ event: ie, listeners: ne }), re ? ie.data = re : (re = eu(n), re !== null && (ie.data = re)))), (re = am ? om(e, n) : im(e, n)) && (I = Fl(I, "onBeforeInput"), 0 < I.length && (F = new Ys("onBeforeInput", "beforeinput", null, n, F), j.push({ event: F, listeners: I }), F.data = re));
      }
      Eu(j, t);
    });
  }
  function Br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Fl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, i = a.stateNode;
      a.tag === 5 && i !== null && (a = i, i = kr(e, n), i != null && r.unshift(Br(e, i, a)), i = kr(e, t), i != null && r.push(Br(e, i, a))), e = e.return;
    }
    return r;
  }
  function Yn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ku(e, t, n, r, a) {
    for (var i = t._reactName, d = []; n !== null && n !== r; ) {
      var y = n, E = y.alternate, I = y.stateNode;
      if (E !== null && E === r) break;
      y.tag === 5 && I !== null && (y = I, a ? (E = kr(n, i), E != null && d.unshift(Br(n, E, y))) : a || (E = kr(n, i), E != null && d.push(Br(n, E, y)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var wm = /\r\n?/g, km = /\u0000|\uFFFD/g;
  function Cu(e) {
    return (typeof e == "string" ? e : "" + e).replace(wm, `
`).replace(km, "");
  }
  function jl(e, t, n) {
    if (t = Cu(t), Cu(e) !== t && n) throw Error(s(425));
  }
  function Ul() {
  }
  var To = null, Ro = null;
  function Po(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0, Cm = typeof clearTimeout == "function" ? clearTimeout : void 0, Su = typeof Promise == "function" ? Promise : void 0, Sm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Su < "u" ? function(e) {
    return Su.resolve(null).then(e).catch(Nm);
  } : Mo;
  function Nm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Lo(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), Lr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    Lr(t);
  }
  function rn(e) {
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
  function Nu(e) {
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
  var Kn = Math.random().toString(36).slice(2), It = "__reactFiber$" + Kn, Wr = "__reactProps$" + Kn, jt = "__reactContainer$" + Kn, Io = "__reactEvents$" + Kn, xm = "__reactListeners$" + Kn, Tm = "__reactHandles$" + Kn;
  function wn(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[jt] || n[It]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Nu(e); e !== null; ) {
          if (n = e[It]) return n;
          e = Nu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function br(e) {
    return e = e[It] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Bl(e) {
    return e[Wr] || null;
  }
  var $o = [], Xn = -1;
  function ln(e) {
    return { current: e };
  }
  function xe(e) {
    0 > Xn || (e.current = $o[Xn], $o[Xn] = null, Xn--);
  }
  function Ce(e, t) {
    Xn++, $o[Xn] = e.current, e.current = t;
  }
  var an = {}, Qe = ln(an), Ze = ln(!1), kn = an;
  function Jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, i;
    for (i in n) a[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function et(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wl() {
    xe(Ze), xe(Qe);
  }
  function xu(e, t, n) {
    if (Qe.current !== an) throw Error(s(168));
    Ce(Qe, t), Ce(Ze, n);
  }
  function Tu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, ke(e) || "Unknown", a));
    return K({}, n, r);
  }
  function bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, kn = Qe.current, Ce(Qe, e), Ce(Ze, Ze.current), !0;
  }
  function Ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Tu(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, xe(Ze), xe(Qe), Ce(Qe, e)) : xe(Ze), Ce(Ze, n);
  }
  var Ut = null, Hl = !1, Do = !1;
  function Pu(e) {
    Ut === null ? Ut = [e] : Ut.push(e);
  }
  function Rm(e) {
    Hl = !0, Pu(e);
  }
  function on() {
    if (!Do && Ut !== null) {
      Do = !0;
      var e = 0, t = Ee;
      try {
        var n = Ut;
        for (Ee = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ut = null, Hl = !1;
      } catch (a) {
        throw Ut !== null && (Ut = Ut.slice(e + 1)), Ls(to, on), a;
      } finally {
        Ee = t, Do = !1;
      }
    }
    return null;
  }
  var Zn = [], er = 0, Vl = null, ql = 0, mt = [], pt = 0, Cn = null, Bt = 1, Wt = "";
  function Sn(e, t) {
    Zn[er++] = ql, Zn[er++] = Vl, Vl = e, ql = t;
  }
  function Mu(e, t, n) {
    mt[pt++] = Bt, mt[pt++] = Wt, mt[pt++] = Cn, Cn = e;
    var r = Bt;
    e = Wt;
    var a = 32 - kt(r) - 1;
    r &= ~(1 << a), n += 1;
    var i = 32 - kt(t) + a;
    if (30 < i) {
      var d = a - a % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Bt = 1 << 32 - kt(t) + a | n << a | r, Wt = i + e;
    } else Bt = 1 << i | n << a | r, Wt = e;
  }
  function zo(e) {
    e.return !== null && (Sn(e, 1), Mu(e, 1, 0));
  }
  function Oo(e) {
    for (; e === Vl; ) Vl = Zn[--er], Zn[er] = null, ql = Zn[--er], Zn[er] = null;
    for (; e === Cn; ) Cn = mt[--pt], mt[pt] = null, Wt = mt[--pt], mt[pt] = null, Bt = mt[--pt], mt[pt] = null;
  }
  var st = null, ut = null, Re = !1, St = null;
  function Lu(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Iu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, ut = rn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, ut = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cn !== null ? { id: Bt, overflow: Wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ao(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fo(e) {
    if (Re) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Iu(e, t)) {
          if (Ao(e)) throw Error(s(418));
          t = rn(n.nextSibling);
          var r = st;
          t && Iu(e, t) ? Lu(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, st = e);
        }
      } else {
        if (Ao(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Re = !1, st = e;
      }
    }
  }
  function $u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function Ql(e) {
    if (e !== st) return !1;
    if (!Re) return $u(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps)), t && (t = ut)) {
      if (Ao(e)) throw Du(), Error(s(418));
      for (; t; ) Lu(e, t), t = rn(t.nextSibling);
    }
    if ($u(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ut = rn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = st ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Du() {
    for (var e = ut; e; ) e = rn(e.nextSibling);
  }
  function tr() {
    ut = st = null, Re = !1;
  }
  function jo(e) {
    St === null ? St = [e] : St.push(e);
  }
  var Pm = b.ReactCurrentBatchConfig;
  function Hr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(d) {
          var y = a.refs;
          d === null ? delete y[i] : y[i] = d;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Yl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ou(e) {
    function t(T, w) {
      if (e) {
        var M = T.deletions;
        M === null ? (T.deletions = [w], T.flags |= 16) : M.push(w);
      }
    }
    function n(T, w) {
      if (!e) return null;
      for (; w !== null; ) t(T, w), w = w.sibling;
      return null;
    }
    function r(T, w) {
      for (T = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? T.set(w.key, w) : T.set(w.index, w), w = w.sibling;
      return T;
    }
    function a(T, w) {
      return T = hn(T, w), T.index = 0, T.sibling = null, T;
    }
    function i(T, w, M) {
      return T.index = M, e ? (M = T.alternate, M !== null ? (M = M.index, M < w ? (T.flags |= 2, w) : M) : (T.flags |= 2, w)) : (T.flags |= 1048576, w);
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function y(T, w, M, U) {
      return w === null || w.tag !== 6 ? (w = Mi(M, T.mode, U), w.return = T, w) : (w = a(w, M), w.return = T, w);
    }
    function E(T, w, M, U) {
      var Z = M.type;
      return Z === le ? F(T, w, M.props.children, U, M.key) : w !== null && (w.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $e && zu(Z) === w.type) ? (U = a(w, M.props), U.ref = Hr(T, w, M), U.return = T, U) : (U = ga(M.type, M.key, M.props, null, T.mode, U), U.ref = Hr(T, w, M), U.return = T, U);
    }
    function I(T, w, M, U) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = Li(M, T.mode, U), w.return = T, w) : (w = a(w, M.children || []), w.return = T, w);
    }
    function F(T, w, M, U, Z) {
      return w === null || w.tag !== 7 ? (w = In(M, T.mode, U, Z), w.return = T, w) : (w = a(w, M), w.return = T, w);
    }
    function j(T, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Mi("" + w, T.mode, M), w.return = T, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case H:
            return M = ga(w.type, w.key, w.props, null, T.mode, M), M.ref = Hr(T, null, w), M.return = T, M;
          case W:
            return w = Li(w, T.mode, M), w.return = T, w;
          case $e:
            var U = w._init;
            return j(T, U(w._payload), M);
        }
        if (_r(w) || oe(w)) return w = In(w, T.mode, M, null), w.return = T, w;
        Yl(T, w);
      }
      return null;
    }
    function z(T, w, M, U) {
      var Z = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return Z !== null ? null : y(T, w, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case H:
            return M.key === Z ? E(T, w, M, U) : null;
          case W:
            return M.key === Z ? I(T, w, M, U) : null;
          case $e:
            return Z = M._init, z(
              T,
              w,
              Z(M._payload),
              U
            );
        }
        if (_r(M) || oe(M)) return Z !== null ? null : F(T, w, M, U, null);
        Yl(T, M);
      }
      return null;
    }
    function V(T, w, M, U, Z) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return T = T.get(M) || null, y(w, T, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case H:
            return T = T.get(U.key === null ? M : U.key) || null, E(w, T, U, Z);
          case W:
            return T = T.get(U.key === null ? M : U.key) || null, I(w, T, U, Z);
          case $e:
            var ne = U._init;
            return V(T, w, M, ne(U._payload), Z);
        }
        if (_r(U) || oe(U)) return T = T.get(M) || null, F(w, T, U, Z, null);
        Yl(w, U);
      }
      return null;
    }
    function G(T, w, M, U) {
      for (var Z = null, ne = null, re = w, ie = w = 0, be = null; re !== null && ie < M.length; ie++) {
        re.index > ie ? (be = re, re = null) : be = re.sibling;
        var ve = z(T, re, M[ie], U);
        if (ve === null) {
          re === null && (re = be);
          break;
        }
        e && re && ve.alternate === null && t(T, re), w = i(ve, w, ie), ne === null ? Z = ve : ne.sibling = ve, ne = ve, re = be;
      }
      if (ie === M.length) return n(T, re), Re && Sn(T, ie), Z;
      if (re === null) {
        for (; ie < M.length; ie++) re = j(T, M[ie], U), re !== null && (w = i(re, w, ie), ne === null ? Z = re : ne.sibling = re, ne = re);
        return Re && Sn(T, ie), Z;
      }
      for (re = r(T, re); ie < M.length; ie++) be = V(re, T, ie, M[ie], U), be !== null && (e && be.alternate !== null && re.delete(be.key === null ? ie : be.key), w = i(be, w, ie), ne === null ? Z = be : ne.sibling = be, ne = be);
      return e && re.forEach(function(vn) {
        return t(T, vn);
      }), Re && Sn(T, ie), Z;
    }
    function X(T, w, M, U) {
      var Z = oe(M);
      if (typeof Z != "function") throw Error(s(150));
      if (M = Z.call(M), M == null) throw Error(s(151));
      for (var ne = Z = null, re = w, ie = w = 0, be = null, ve = M.next(); re !== null && !ve.done; ie++, ve = M.next()) {
        re.index > ie ? (be = re, re = null) : be = re.sibling;
        var vn = z(T, re, ve.value, U);
        if (vn === null) {
          re === null && (re = be);
          break;
        }
        e && re && vn.alternate === null && t(T, re), w = i(vn, w, ie), ne === null ? Z = vn : ne.sibling = vn, ne = vn, re = be;
      }
      if (ve.done) return n(
        T,
        re
      ), Re && Sn(T, ie), Z;
      if (re === null) {
        for (; !ve.done; ie++, ve = M.next()) ve = j(T, ve.value, U), ve !== null && (w = i(ve, w, ie), ne === null ? Z = ve : ne.sibling = ve, ne = ve);
        return Re && Sn(T, ie), Z;
      }
      for (re = r(T, re); !ve.done; ie++, ve = M.next()) ve = V(re, T, ie, ve.value, U), ve !== null && (e && ve.alternate !== null && re.delete(ve.key === null ? ie : ve.key), w = i(ve, w, ie), ne === null ? Z = ve : ne.sibling = ve, ne = ve);
      return e && re.forEach(function(sp) {
        return t(T, sp);
      }), Re && Sn(T, ie), Z;
    }
    function Ae(T, w, M, U) {
      if (typeof M == "object" && M !== null && M.type === le && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case H:
            e: {
              for (var Z = M.key, ne = w; ne !== null; ) {
                if (ne.key === Z) {
                  if (Z = M.type, Z === le) {
                    if (ne.tag === 7) {
                      n(T, ne.sibling), w = a(ne, M.props.children), w.return = T, T = w;
                      break e;
                    }
                  } else if (ne.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $e && zu(Z) === ne.type) {
                    n(T, ne.sibling), w = a(ne, M.props), w.ref = Hr(T, ne, M), w.return = T, T = w;
                    break e;
                  }
                  n(T, ne);
                  break;
                } else t(T, ne);
                ne = ne.sibling;
              }
              M.type === le ? (w = In(M.props.children, T.mode, U, M.key), w.return = T, T = w) : (U = ga(M.type, M.key, M.props, null, T.mode, U), U.ref = Hr(T, w, M), U.return = T, T = U);
            }
            return d(T);
          case W:
            e: {
              for (ne = M.key; w !== null; ) {
                if (w.key === ne) if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                  n(T, w.sibling), w = a(w, M.children || []), w.return = T, T = w;
                  break e;
                } else {
                  n(T, w);
                  break;
                }
                else t(T, w);
                w = w.sibling;
              }
              w = Li(M, T.mode, U), w.return = T, T = w;
            }
            return d(T);
          case $e:
            return ne = M._init, Ae(T, w, ne(M._payload), U);
        }
        if (_r(M)) return G(T, w, M, U);
        if (oe(M)) return X(T, w, M, U);
        Yl(T, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (n(T, w.sibling), w = a(w, M), w.return = T, T = w) : (n(T, w), w = Mi(M, T.mode, U), w.return = T, T = w), d(T)) : n(T, w);
    }
    return Ae;
  }
  var nr = Ou(!0), Au = Ou(!1), Kl = ln(null), Gl = null, rr = null, Uo = null;
  function Bo() {
    Uo = rr = Gl = null;
  }
  function Wo(e) {
    var t = Kl.current;
    xe(Kl), e._currentValue = t;
  }
  function bo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function lr(e, t) {
    Gl = e, Uo = rr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (tt = !0), e.firstContext = null);
  }
  function ht(e) {
    var t = e._currentValue;
    if (Uo !== e) if (e = { context: e, memoizedValue: t, next: null }, rr === null) {
      if (Gl === null) throw Error(s(308));
      rr = e, Gl.dependencies = { lanes: 0, firstContext: e };
    } else rr = rr.next = e;
    return t;
  }
  var Nn = null;
  function Ho(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  function Fu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Ho(t)) : (n.next = a.next, a.next = n), t.interleaved = n, bt(e, r);
  }
  function bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var sn = !1;
  function Vo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ju(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function un(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (me & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, bt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Ho(r)) : (t.next = a.next, a.next = t), r.interleaved = t, bt(e, n);
  }
  function Xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
    }
  }
  function Uu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? a = i = d : i = i.next = d, n = n.next;
        } while (n !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Jl(e, t, n, r) {
    var a = e.updateQueue;
    sn = !1;
    var i = a.firstBaseUpdate, d = a.lastBaseUpdate, y = a.shared.pending;
    if (y !== null) {
      a.shared.pending = null;
      var E = y, I = E.next;
      E.next = null, d === null ? i = I : d.next = I, d = E;
      var F = e.alternate;
      F !== null && (F = F.updateQueue, y = F.lastBaseUpdate, y !== d && (y === null ? F.firstBaseUpdate = I : y.next = I, F.lastBaseUpdate = E));
    }
    if (i !== null) {
      var j = a.baseState;
      d = 0, F = I = E = null, y = i;
      do {
        var z = y.lane, V = y.eventTime;
        if ((r & z) === z) {
          F !== null && (F = F.next = {
            eventTime: V,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var G = e, X = y;
            switch (z = t, V = n, X.tag) {
              case 1:
                if (G = X.payload, typeof G == "function") {
                  j = G.call(V, j, z);
                  break e;
                }
                j = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = X.payload, z = typeof G == "function" ? G.call(V, j, z) : G, z == null) break e;
                j = K({}, j, z);
                break e;
              case 2:
                sn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, z = a.effects, z === null ? a.effects = [y] : z.push(y));
        } else V = { eventTime: V, lane: z, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, F === null ? (I = F = V, E = j) : F = F.next = V, d |= z;
        if (y = y.next, y === null) {
          if (y = a.shared.pending, y === null) break;
          z = y, y = z.next, z.next = null, a.lastBaseUpdate = z, a.shared.pending = null;
        }
      } while (!0);
      if (F === null && (E = j), a.baseState = E, a.firstBaseUpdate = I, a.lastBaseUpdate = F, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else i === null && (a.shared.lanes = 0);
      Rn |= d, e.lanes = d, e.memoizedState = j;
    }
  }
  function Bu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var Vr = {}, $t = ln(Vr), qr = ln(Vr), Qr = ln(Vr);
  function xn(e) {
    if (e === Vr) throw Error(s(174));
    return e;
  }
  function qo(e, t) {
    switch (Ce(Qr, t), Ce(qr, e), Ce($t, Vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qa(t, e);
    }
    xe($t), Ce($t, t);
  }
  function ar() {
    xe($t), xe(qr), xe(Qr);
  }
  function Wu(e) {
    xn(Qr.current);
    var t = xn($t.current), n = qa(t, e.type);
    t !== n && (Ce(qr, e), Ce($t, n));
  }
  function Qo(e) {
    qr.current === e && (xe($t), xe(qr));
  }
  var Me = ln(0);
  function Zl(e) {
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
  var Yo = [];
  function Ko() {
    for (var e = 0; e < Yo.length; e++) Yo[e]._workInProgressVersionPrimary = null;
    Yo.length = 0;
  }
  var ea = b.ReactCurrentDispatcher, Go = b.ReactCurrentBatchConfig, Tn = 0, Le = null, je = null, Be = null, ta = !1, Yr = !1, Kr = 0, Mm = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Xo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function Jo(e, t, n, r, a, i) {
    if (Tn = i, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ea.current = e === null || e.memoizedState === null ? Dm : zm, e = n(r, a), Yr) {
      i = 0;
      do {
        if (Yr = !1, Kr = 0, 25 <= i) throw Error(s(301));
        i += 1, Be = je = null, t.updateQueue = null, ea.current = Om, e = n(r, a);
      } while (Yr);
    }
    if (ea.current = la, t = je !== null && je.next !== null, Tn = 0, Be = je = Le = null, ta = !1, t) throw Error(s(300));
    return e;
  }
  function Zo() {
    var e = Kr !== 0;
    return Kr = 0, e;
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Be === null ? Le.memoizedState = Be = e : Be = Be.next = e, Be;
  }
  function vt() {
    if (je === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Be === null ? Le.memoizedState : Be.next;
    if (t !== null) Be = t, je = e;
    else {
      if (e === null) throw Error(s(310));
      je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, Be === null ? Le.memoizedState = Be = e : Be = Be.next = e;
    }
    return Be;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ei(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = je, a = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = i.next, i.next = d;
      }
      r.baseQueue = a = i, n.pending = null;
    }
    if (a !== null) {
      i = a.next, r = r.baseState;
      var y = d = null, E = null, I = i;
      do {
        var F = I.lane;
        if ((Tn & F) === F) E !== null && (E = E.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var j = {
            lane: F,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          E === null ? (y = E = j, d = r) : E = E.next = j, Le.lanes |= F, Rn |= F;
        }
        I = I.next;
      } while (I !== null && I !== i);
      E === null ? d = r : E.next = y, Ct(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = E, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        i = a.lane, Le.lanes |= i, Rn |= i, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ti(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, i = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        i = e(i, d.action), d = d.next;
      while (d !== a);
      Ct(i, t.memoizedState) || (tt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function bu() {
  }
  function Hu(e, t) {
    var n = Le, r = vt(), a = t(), i = !Ct(r.memoizedState, a);
    if (i && (r.memoizedState = a, tt = !0), r = r.queue, ni(Qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Be !== null && Be.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, qu.bind(null, n, r, a, t), void 0, null), We === null) throw Error(s(349));
      (Tn & 30) !== 0 || Vu(n, t, a);
    }
    return a;
  }
  function Vu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function qu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Yu(t) && Ku(e);
  }
  function Qu(e, t, n) {
    return n(function() {
      Yu(t) && Ku(e);
    });
  }
  function Yu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function Ku(e) {
    var t = bt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function Gu(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $m.bind(null, Le, e), [t.memoizedState, e];
  }
  function Xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Xu() {
    return vt().memoizedState;
  }
  function na(e, t, n, r) {
    var a = Dt();
    Le.flags |= e, a.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ra(e, t, n, r) {
    var a = vt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (i = d.destroy, r !== null && Xo(r, d.deps)) {
        a.memoizedState = Xr(t, n, i, r);
        return;
      }
    }
    Le.flags |= e, a.memoizedState = Xr(1 | t, n, i, r);
  }
  function Ju(e, t) {
    return na(8390656, 8, e, t);
  }
  function ni(e, t) {
    return ra(2048, 8, e, t);
  }
  function Zu(e, t) {
    return ra(4, 2, e, t);
  }
  function ec(e, t) {
    return ra(4, 4, e, t);
  }
  function tc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function nc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ra(4, 4, tc.bind(null, t, e), n);
  }
  function ri() {
  }
  function rc(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function lc(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ac(e, t, n) {
    return (Tn & 21) === 0 ? (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n) : (Ct(n, t) || (n = zs(), Le.lanes |= n, Rn |= n, e.baseState = !0), t);
  }
  function Lm(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Go.transition;
    Go.transition = {};
    try {
      e(!1), t();
    } finally {
      Ee = n, Go.transition = r;
    }
  }
  function oc() {
    return vt().memoizedState;
  }
  function Im(e, t, n) {
    var r = mn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ic(e)) sc(t, n);
    else if (n = Fu(e, t, n, r), n !== null) {
      var a = Je();
      Rt(n, e, r, a), uc(n, t, r);
    }
  }
  function $m(e, t, n) {
    var r = mn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ic(e)) sc(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, y = i(d, n);
        if (a.hasEagerState = !0, a.eagerState = y, Ct(y, d)) {
          var E = t.interleaved;
          E === null ? (a.next = a, Ho(t)) : (a.next = E.next, E.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = Fu(e, t, a, r), n !== null && (a = Je(), Rt(n, e, r, a), uc(n, t, r));
    }
  }
  function ic(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le;
  }
  function sc(e, t) {
    Yr = ta = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function uc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
    }
  }
  var la = { readContext: ht, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Dm = { readContext: ht, useCallback: function(e, t) {
    return Dt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: Ju, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, na(
      4194308,
      4,
      tc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return na(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return na(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Dt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Dt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Im.bind(null, Le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Dt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Gu, useDebugValue: ri, useDeferredValue: function(e) {
    return Dt().memoizedState = e;
  }, useTransition: function() {
    var e = Gu(!1), t = e[0];
    return e = Lm.bind(null, e[1]), Dt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Le, a = Dt();
    if (Re) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), We === null) throw Error(s(349));
      (Tn & 30) !== 0 || Vu(r, t, n);
    }
    a.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return a.queue = i, Ju(Qu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Xr(9, qu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = We.identifierPrefix;
    if (Re) {
      var n = Wt, r = Bt;
      n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Mm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zm = {
    readContext: ht,
    useCallback: rc,
    useContext: ht,
    useEffect: ni,
    useImperativeHandle: nc,
    useInsertionEffect: Zu,
    useLayoutEffect: ec,
    useMemo: lc,
    useReducer: ei,
    useRef: Xu,
    useState: function() {
      return ei(Gr);
    },
    useDebugValue: ri,
    useDeferredValue: function(e) {
      var t = vt();
      return ac(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = ei(Gr)[0], t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: bu,
    useSyncExternalStore: Hu,
    useId: oc,
    unstable_isNewReconciler: !1
  }, Om = { readContext: ht, useCallback: rc, useContext: ht, useEffect: ni, useImperativeHandle: nc, useInsertionEffect: Zu, useLayoutEffect: ec, useMemo: lc, useReducer: ti, useRef: Xu, useState: function() {
    return ti(Gr);
  }, useDebugValue: ri, useDeferredValue: function(e) {
    var t = vt();
    return je === null ? t.memoizedState = e : ac(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = ti(Gr)[0], t = vt().memoizedState;
    return [e, t];
  }, useMutableSource: bu, useSyncExternalStore: Hu, useId: oc, unstable_isNewReconciler: !1 };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function li(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var aa = { isMounted: function(e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = mn(e), i = Ht(r, a);
    i.payload = t, n != null && (i.callback = n), t = un(e, i, a), t !== null && (Rt(t, e, a, r), Xl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = mn(e), i = Ht(r, a);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = un(e, i, a), t !== null && (Rt(t, e, a, r), Xl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Je(), r = mn(e), a = Ht(n, r);
    a.tag = 2, t != null && (a.callback = t), t = un(e, a, r), t !== null && (Rt(t, e, r, n), Xl(t, e, r));
  } };
  function cc(e, t, n, r, a, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(a, i) : !0;
  }
  function dc(e, t, n) {
    var r = !1, a = an, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ht(i) : (a = et(t) ? kn : Qe.current, r = t.contextTypes, i = (r = r != null) ? Jn(e, a) : an), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function fc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && aa.enqueueReplaceState(t, t.state, null);
  }
  function ai(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Vo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = ht(i) : (i = et(t) ? kn : Qe.current, a.context = Jn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (li(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && aa.enqueueReplaceState(a, a.state, null), Jl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function or(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
      while (r);
      var a = n;
    } catch (i) {
      a = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function oi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ii(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Am = typeof WeakMap == "function" ? WeakMap : Map;
  function mc(e, t, n) {
    n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      fa || (fa = !0, ki = r), ii(e, t);
    }, n;
  }
  function pc(e, t, n) {
    n = Ht(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        ii(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      ii(e, t), typeof r != "function" && (dn === null ? dn = /* @__PURE__ */ new Set([this]) : dn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function hc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Am();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Xm.bind(null, e, t, n), t.then(e, e));
  }
  function vc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function yc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Fm = b.ReactCurrentOwner, tt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : nr(t, e.child, n, r);
  }
  function gc(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return lr(t, a), r = Jo(e, t, n, r, i, a), n = Zo(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vt(e, t, a)) : (Re && n && zo(t), t.flags |= 1, Xe(e, t, r, a), t.child);
  }
  function _c(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Pi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ec(e, t, i, r, a)) : (e = ga(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ar, n(d, r) && e.ref === t.ref) return Vt(e, t, a);
    }
    return t.flags |= 1, e = hn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ec(e, t, n, r, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Ar(i, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, Vt(e, t, a);
    }
    return si(e, t, n, r, a);
  }
  function wc(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(sr, ct), ct |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(sr, ct), ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ce(sr, ct), ct |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ce(sr, ct), ct |= r;
    return Xe(e, t, a, n), t.child;
  }
  function kc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function si(e, t, n, r, a) {
    var i = et(n) ? kn : Qe.current;
    return i = Jn(t, i), lr(t, a), n = Jo(e, t, n, r, i, a), r = Zo(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vt(e, t, a)) : (Re && r && zo(t), t.flags |= 1, Xe(e, t, n, a), t.child);
  }
  function Cc(e, t, n, r, a) {
    if (et(n)) {
      var i = !0;
      bl(t);
    } else i = !1;
    if (lr(t, a), t.stateNode === null) ia(e, t), dc(t, n, r), ai(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, y = t.memoizedProps;
      d.props = y;
      var E = d.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = ht(I) : (I = et(n) ? kn : Qe.current, I = Jn(t, I));
      var F = n.getDerivedStateFromProps, j = typeof F == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      j || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== r || E !== I) && fc(t, d, r, I), sn = !1;
      var z = t.memoizedState;
      d.state = z, Jl(t, r, d, a), E = t.memoizedState, y !== r || z !== E || Ze.current || sn ? (typeof F == "function" && (li(t, n, F, r), E = t.memoizedState), (y = sn || cc(t, n, y, r, z, E, I)) ? (j || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = E), d.props = r, d.state = E, d.context = I, r = y) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, ju(e, t), y = t.memoizedProps, I = t.type === t.elementType ? y : Nt(t.type, y), d.props = I, j = t.pendingProps, z = d.context, E = n.contextType, typeof E == "object" && E !== null ? E = ht(E) : (E = et(n) ? kn : Qe.current, E = Jn(t, E));
      var V = n.getDerivedStateFromProps;
      (F = typeof V == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== j || z !== E) && fc(t, d, r, E), sn = !1, z = t.memoizedState, d.state = z, Jl(t, r, d, a);
      var G = t.memoizedState;
      y !== j || z !== G || Ze.current || sn ? (typeof V == "function" && (li(t, n, V, r), G = t.memoizedState), (I = sn || cc(t, n, I, r, z, G, E) || !1) ? (F || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, G, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, G, E)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = G), d.props = r, d.state = G, d.context = E, r = I) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ui(e, t, n, r, i, a);
  }
  function ui(e, t, n, r, a, i) {
    kc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Ru(t, n, !1), Vt(e, t, i);
    r = t.stateNode, Fm.current = t;
    var y = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = nr(t, e.child, null, i), t.child = nr(t, null, y, i)) : Xe(e, t, y, i), t.memoizedState = r.state, a && Ru(t, n, !0), t.child;
  }
  function Sc(e) {
    var t = e.stateNode;
    t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), qo(e, t.containerInfo);
  }
  function Nc(e, t, n, r, a) {
    return tr(), jo(a), t.flags |= 256, Xe(e, t, n, r), t.child;
  }
  var ci = { dehydrated: null, treeContext: null, retryLane: 0 };
  function di(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xc(e, t, n) {
    var r = t.pendingProps, a = Me.current, i = !1, d = (t.flags & 128) !== 0, y;
    if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), y ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Ce(Me, a & 1), e === null)
      return Fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = _a(d, r, 0, null), e = In(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = di(n), t.memoizedState = ci, e) : fi(t, d));
    if (a = e.memoizedState, a !== null && (y = a.dehydrated, y !== null)) return jm(e, t, d, r, y, a, n);
    if (i) {
      i = r.fallback, d = t.mode, a = e.child, y = a.sibling;
      var E = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = E, t.deletions = null) : (r = hn(a, E), r.subtreeFlags = a.subtreeFlags & 14680064), y !== null ? i = hn(y, i) : (i = In(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? di(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = ci, r;
    }
    return i = e.child, e = i.sibling, r = hn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function fi(e, t) {
    return t = _a({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oa(e, t, n, r) {
    return r !== null && jo(r), nr(t, e.child, null, n), e = fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function jm(e, t, n, r, a, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = oi(Error(s(422))), oa(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = _a({ mode: "visible", children: r.children }, a, 0, null), i = In(i, a, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && nr(t, e.child, null, d), t.child.memoizedState = di(d), t.memoizedState = ci, i);
    if ((t.mode & 1) === 0) return oa(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var y = r.dgst;
      return r = y, i = Error(s(419)), r = oi(i, r, void 0), oa(e, t, d, r);
    }
    if (y = (d & e.childLanes) !== 0, tt || y) {
      if (r = We, r !== null) {
        switch (d & -d) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, bt(e, a), Rt(r, e, a, -1));
      }
      return Ri(), r = oi(Error(s(421))), oa(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ut = rn(a.nextSibling), st = t, Re = !0, St = null, e !== null && (mt[pt++] = Bt, mt[pt++] = Wt, mt[pt++] = Cn, Bt = e.id, Wt = e.overflow, Cn = t), t = fi(t, r.children), t.flags |= 4096, t);
  }
  function Tc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), bo(e.return, t, n);
  }
  function mi(e, t, n, r, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
  }
  function Rc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, i = r.tail;
    if (Xe(e, t, r.children, n), r = Me.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
        else if (e.tag === 19) Tc(e, n, t);
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
    if (Ce(Me, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Zl(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), mi(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Zl(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        mi(t, !0, n, null, i);
        break;
      case "together":
        mi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ia(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Um(e, t, n) {
    switch (t.tag) {
      case 3:
        Sc(t), tr();
        break;
      case 5:
        Wu(t);
        break;
      case 1:
        et(t.type) && bl(t);
        break;
      case 4:
        qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Ce(Kl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xc(e, t, n) : (Ce(Me, Me.current & 1), e = Vt(e, t, n), e !== null ? e.sibling : null);
        Ce(Me, Me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Rc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ce(Me, Me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wc(e, t, n);
    }
    return Vt(e, t, n);
  }
  var Pc, pi, Mc, Lc;
  Pc = function(e, t) {
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
  }, pi = function() {
  }, Mc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, xn($t.current);
      var i = null;
      switch (n) {
        case "input":
          a = Wa(e, a), r = Wa(e, r), i = [];
          break;
        case "select":
          a = K({}, a, { value: void 0 }), r = K({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = Va(e, a), r = Va(e, r), i = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
      }
      Qa(n, r);
      var d;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var y = a[I];
        for (d in y) y.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (f.hasOwnProperty(I) ? i || (i = []) : (i = i || []).push(I, null));
      for (I in r) {
        var E = r[I];
        if (y = a != null ? a[I] : void 0, r.hasOwnProperty(I) && E !== y && (E != null || y != null)) if (I === "style") if (y) {
          for (d in y) !y.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in E) E.hasOwnProperty(d) && y[d] !== E[d] && (n || (n = {}), n[d] = E[d]);
        } else n || (i || (i = []), i.push(
          I,
          n
        )), n = E;
        else I === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, y = y ? y.__html : void 0, E != null && y !== E && (i = i || []).push(I, E)) : I === "children" ? typeof E != "string" && typeof E != "number" || (i = i || []).push(I, "" + E) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (f.hasOwnProperty(I) ? (E != null && I === "onScroll" && Ne("scroll", e), i || y === E || (i = [])) : (i = i || []).push(I, E));
      }
      n && (i = i || []).push("style", n);
      var I = i;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, Lc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Jr(e, t) {
    if (!Re) switch (e.tailMode) {
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
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Bm(e, t, n) {
    var r = t.pendingProps;
    switch (Oo(t), t.tag) {
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
        return Ke(t), null;
      case 1:
        return et(t.type) && Wl(), Ke(t), null;
      case 3:
        return r = t.stateNode, ar(), xe(Ze), xe(Qe), Ko(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, St !== null && (Ni(St), St = null))), pi(e, t), Ke(t), null;
      case 5:
        Qo(t);
        var a = xn(Qr.current);
        if (n = t.type, e !== null && t.stateNode != null) Mc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = xn($t.current), Ql(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[It] = t, r[Wr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ne("cancel", r), Ne("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < jr.length; a++) Ne(jr[a], r);
                break;
              case "source":
                Ne("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ne(
                  "error",
                  r
                ), Ne("load", r);
                break;
              case "details":
                Ne("toggle", r);
                break;
              case "input":
                ds(r, i), Ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Ne("invalid", r);
                break;
              case "textarea":
                ps(r, i), Ne("invalid", r);
            }
            Qa(n, i), a = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var y = i[d];
              d === "children" ? typeof y == "string" ? r.textContent !== y && (i.suppressHydrationWarning !== !0 && jl(r.textContent, y, e), a = ["children", y]) : typeof y == "number" && r.textContent !== "" + y && (i.suppressHydrationWarning !== !0 && jl(
                r.textContent,
                y,
                e
              ), a = ["children", "" + y]) : f.hasOwnProperty(d) && y != null && d === "onScroll" && Ne("scroll", r);
            }
            switch (n) {
              case "input":
                vl(r), ms(r, i, !0);
                break;
              case "textarea":
                vl(r), vs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Ul);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ys(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[It] = t, e[Wr] = r, Pc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ya(n, r), n) {
                case "dialog":
                  Ne("cancel", e), Ne("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ne("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < jr.length; a++) Ne(jr[a], e);
                  a = r;
                  break;
                case "source":
                  Ne("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ne(
                    "error",
                    e
                  ), Ne("load", e), a = r;
                  break;
                case "details":
                  Ne("toggle", e), a = r;
                  break;
                case "input":
                  ds(e, r), a = Wa(e, r), Ne("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = K({}, r, { value: void 0 }), Ne("invalid", e);
                  break;
                case "textarea":
                  ps(e, r), a = Va(e, r), Ne("invalid", e);
                  break;
                default:
                  a = r;
              }
              Qa(n, a), y = a;
              for (i in y) if (y.hasOwnProperty(i)) {
                var E = y[i];
                i === "style" ? Es(e, E) : i === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && gs(e, E)) : i === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && Er(e, E) : typeof E == "number" && Er(e, "" + E) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? E != null && i === "onScroll" && Ne("scroll", e) : E != null && O(e, i, E, d));
              }
              switch (n) {
                case "input":
                  vl(e), ms(e, r, !1);
                  break;
                case "textarea":
                  vl(e), vs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + _e(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? Un(e, !!r.multiple, i, !1) : r.defaultValue != null && Un(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Ul);
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
        return Ke(t), null;
      case 6:
        if (e && t.stateNode != null) Lc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = xn(Qr.current), xn($t.current), Ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[It] = t, (i = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[It] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (xe(Me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Du(), tr(), t.flags |= 98560, i = !1;
          else if (i = Ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[It] = t;
            } else tr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else St !== null && (Ni(St), St = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Ri())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return ar(), pi(e, t), e === null && Ur(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Wo(t.type._context), Ke(t), null;
      case 17:
        return et(t.type) && Wl(), Ke(t), null;
      case 19:
        if (xe(Me), i = t.memoizedState, i === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) Jr(i, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Zl(e), d !== null) {
              for (t.flags |= 128, Jr(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ce(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Oe() > ur && (t.flags |= 128, r = !0, Jr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zl(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jr(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !Re) return Ke(t), null;
          } else 2 * Oe() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, Jr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Oe(), t.sibling = null, n = Me.current, Ce(Me, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Ti(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ct & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Wm(e, t) {
    switch (Oo(t), t.tag) {
      case 1:
        return et(t.type) && Wl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ar(), xe(Ze), xe(Qe), Ko(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Qo(t), null;
      case 13:
        if (xe(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          tr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xe(Me), null;
      case 4:
        return ar(), null;
      case 10:
        return Wo(t.type._context), null;
      case 22:
      case 23:
        return Ti(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var sa = !1, Ge = !1, bm = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
  function ir(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ze(e, t, r);
    }
    else n.current = null;
  }
  function hi(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var Ic = !1;
  function Hm(e, t) {
    if (To = Rl, e = cu(), _o(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, y = -1, E = -1, I = 0, F = 0, j = e, z = null;
          t: for (; ; ) {
            for (var V; j !== n || a !== 0 && j.nodeType !== 3 || (y = d + a), j !== i || r !== 0 && j.nodeType !== 3 || (E = d + r), j.nodeType === 3 && (d += j.nodeValue.length), (V = j.firstChild) !== null; )
              z = j, j = V;
            for (; ; ) {
              if (j === e) break t;
              if (z === n && ++I === a && (y = d), z === i && ++F === r && (E = d), (V = j.nextSibling) !== null) break;
              j = z, z = j.parentNode;
            }
            j = V;
          }
          n = y === -1 || E === -1 ? null : { start: y, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ro = { focusedElem: e, selectionRange: n }, Rl = !1, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
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
              var X = G.memoizedProps, Ae = G.memoizedState, T = t.stateNode, w = T.getSnapshotBeforeUpdate(t.elementType === t.type ? X : Nt(t.type, X), Ae);
              T.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var M = t.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (U) {
        ze(t, t.return, U);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Y = e;
        break;
      }
      Y = t.return;
    }
    return G = Ic, Ic = !1, G;
  }
  function Zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var i = a.destroy;
          a.destroy = void 0, i !== void 0 && hi(t, n, i);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function ua(e, t) {
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
  function vi(e) {
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
  function $c(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[It], delete t[Wr], delete t[Io], delete t[xm], delete t[Tm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ul));
    else if (r !== 4 && (e = e.child, e !== null)) for (yi(e, t, n), e = e.sibling; e !== null; ) yi(e, t, n), e = e.sibling;
  }
  function gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  var Ve = null, xt = !1;
  function cn(e, t, n) {
    for (n = n.child; n !== null; ) Oc(e, t, n), n = n.sibling;
  }
  function Oc(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
      Lt.onCommitFiberUnmount(kl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || ir(n, t);
      case 6:
        var r = Ve, a = xt;
        Ve = null, cn(e, t, n), Ve = r, xt = a, Ve !== null && (xt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null && (xt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Lo(e.parentNode, n) : e.nodeType === 1 && Lo(e, n), Lr(e)) : Lo(Ve, n.stateNode));
        break;
      case 4:
        r = Ve, a = xt, Ve = n.stateNode.containerInfo, xt = !0, cn(e, t, n), Ve = r, xt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var i = a, d = i.destroy;
            i = i.tag, d !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && hi(n, t, d), a = a.next;
          } while (a !== r);
        }
        cn(e, t, n);
        break;
      case 1:
        if (!Ge && (ir(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (y) {
          ze(n, t, y);
        }
        cn(e, t, n);
        break;
      case 21:
        cn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, cn(e, t, n), Ge = r) : cn(e, t, n);
        break;
      default:
        cn(e, t, n);
    }
  }
  function Ac(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new bm()), t.forEach(function(r) {
        var a = Zm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e, d = t, y = d;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              Ve = y.stateNode, xt = !1;
              break e;
            case 3:
              Ve = y.stateNode.containerInfo, xt = !0;
              break e;
            case 4:
              Ve = y.stateNode.containerInfo, xt = !0;
              break e;
          }
          y = y.return;
        }
        if (Ve === null) throw Error(s(160));
        Oc(i, d, a), Ve = null, xt = !1;
        var E = a.alternate;
        E !== null && (E.return = null), a.return = null;
      } catch (I) {
        ze(a, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Fc(t, e), t = t.sibling;
  }
  function Fc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Tt(t, e), zt(e), r & 4) {
          try {
            Zr(3, e, e.return), ua(3, e);
          } catch (X) {
            ze(e, e.return, X);
          }
          try {
            Zr(5, e, e.return);
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        break;
      case 1:
        Tt(t, e), zt(e), r & 512 && n !== null && ir(n, n.return);
        break;
      case 5:
        if (Tt(t, e), zt(e), r & 512 && n !== null && ir(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Er(a, "");
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, y = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            y === "input" && i.type === "radio" && i.name != null && fs(a, i), Ya(y, d);
            var I = Ya(y, i);
            for (d = 0; d < E.length; d += 2) {
              var F = E[d], j = E[d + 1];
              F === "style" ? Es(a, j) : F === "dangerouslySetInnerHTML" ? gs(a, j) : F === "children" ? Er(a, j) : O(a, F, j, I);
            }
            switch (y) {
              case "input":
                ba(a, i);
                break;
              case "textarea":
                hs(a, i);
                break;
              case "select":
                var z = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var V = i.value;
                V != null ? Un(a, !!i.multiple, V, !1) : z !== !!i.multiple && (i.defaultValue != null ? Un(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Un(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[Wr] = i;
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        break;
      case 6:
        if (Tt(t, e), zt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, i = e.memoizedProps;
          try {
            a.nodeValue = i;
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        break;
      case 3:
        if (Tt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Lr(t.containerInfo);
        } catch (X) {
          ze(e, e.return, X);
        }
        break;
      case 4:
        Tt(t, e), zt(e);
        break;
      case 13:
        Tt(t, e), zt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (wi = Oe())), r & 4 && Ac(e);
        break;
      case 22:
        if (F = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (I = Ge) || F, Tt(t, e), Ge = I) : Tt(t, e), zt(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !F && (e.mode & 1) !== 0) for (Y = e, F = e.child; F !== null; ) {
            for (j = Y = F; Y !== null; ) {
              switch (z = Y, V = z.child, z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, z, z.return);
                  break;
                case 1:
                  ir(z, z.return);
                  var G = z.stateNode;
                  if (typeof G.componentWillUnmount == "function") {
                    r = z, n = z.return;
                    try {
                      t = r, G.props = t.memoizedProps, G.state = t.memoizedState, G.componentWillUnmount();
                    } catch (X) {
                      ze(r, n, X);
                    }
                  }
                  break;
                case 5:
                  ir(z, z.return);
                  break;
                case 22:
                  if (z.memoizedState !== null) {
                    Bc(j);
                    continue;
                  }
              }
              V !== null ? (V.return = z, Y = V) : Bc(j);
            }
            F = F.sibling;
          }
          e: for (F = null, j = e; ; ) {
            if (j.tag === 5) {
              if (F === null) {
                F = j;
                try {
                  a = j.stateNode, I ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (y = j.stateNode, E = j.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, y.style.display = _s("display", d));
                } catch (X) {
                  ze(e, e.return, X);
                }
              }
            } else if (j.tag === 6) {
              if (F === null) try {
                j.stateNode.nodeValue = I ? "" : j.memoizedProps;
              } catch (X) {
                ze(e, e.return, X);
              }
            } else if ((j.tag !== 22 && j.tag !== 23 || j.memoizedState === null || j === e) && j.child !== null) {
              j.child.return = j, j = j.child;
              continue;
            }
            if (j === e) break e;
            for (; j.sibling === null; ) {
              if (j.return === null || j.return === e) break e;
              F === j && (F = null), j = j.return;
            }
            F === j && (F = null), j.sibling.return = j.return, j = j.sibling;
          }
        }
        break;
      case 19:
        Tt(t, e), zt(e), r & 4 && Ac(e);
        break;
      case 21:
        break;
      default:
        Tt(
          t,
          e
        ), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Dc(n)) {
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
            r.flags & 32 && (Er(a, ""), r.flags &= -33);
            var i = zc(e);
            gi(e, i, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, y = zc(e);
            yi(e, y, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (E) {
        ze(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vm(e, t, n) {
    Y = e, jc(e);
  }
  function jc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
      var a = Y, i = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || sa;
        if (!d) {
          var y = a.alternate, E = y !== null && y.memoizedState !== null || Ge;
          y = sa;
          var I = Ge;
          if (sa = d, (Ge = E) && !I) for (Y = a; Y !== null; ) d = Y, E = d.child, d.tag === 22 && d.memoizedState !== null ? Wc(a) : E !== null ? (E.return = d, Y = E) : Wc(a);
          for (; i !== null; ) Y = i, jc(i), i = i.sibling;
          Y = a, sa = y, Ge = I;
        }
        Uc(e);
      } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, Y = i) : Uc(e);
    }
  }
  function Uc(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || ua(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : Nt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Bu(t, i, r);
              break;
            case 3:
              var d = t.updateQueue;
              if (d !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Bu(t, d, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var E = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && n.focus();
                    break;
                  case "img":
                    E.src && (n.src = E.src);
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
                  var F = I.memoizedState;
                  if (F !== null) {
                    var j = F.dehydrated;
                    j !== null && Lr(j);
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
          Ge || t.flags & 512 && vi(t);
        } catch (z) {
          ze(t, t.return, z);
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
  function Bc(e) {
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
  function Wc(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ua(4, t);
            } catch (E) {
              ze(t, n, E);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (E) {
                ze(t, a, E);
              }
            }
            var i = t.return;
            try {
              vi(t);
            } catch (E) {
              ze(t, i, E);
            }
            break;
          case 5:
            var d = t.return;
            try {
              vi(t);
            } catch (E) {
              ze(t, d, E);
            }
        }
      } catch (E) {
        ze(t, t.return, E);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, Y = y;
        break;
      }
      Y = t.return;
    }
  }
  var qm = Math.ceil, ca = b.ReactCurrentDispatcher, _i = b.ReactCurrentOwner, yt = b.ReactCurrentBatchConfig, me = 0, We = null, Fe = null, qe = 0, ct = 0, sr = ln(0), Ue = 0, el = null, Rn = 0, da = 0, Ei = 0, tl = null, nt = null, wi = 0, ur = 1 / 0, qt = null, fa = !1, ki = null, dn = null, ma = !1, fn = null, pa = 0, nl = 0, Ci = null, ha = -1, va = 0;
  function Je() {
    return (me & 6) !== 0 ? Oe() : ha !== -1 ? ha : ha = Oe();
  }
  function mn(e) {
    return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && qe !== 0 ? qe & -qe : Pm.transition !== null ? (va === 0 && (va = zs()), va) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hs(e.type)), e);
  }
  function Rt(e, t, n, r) {
    if (50 < nl) throw nl = 0, Ci = null, Error(s(185));
    xr(e, n, r), ((me & 2) === 0 || e !== We) && (e === We && ((me & 2) === 0 && (da |= n), Ue === 4 && pn(e, qe)), rt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (ur = Oe() + 500, Hl && on()));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    Pf(e, t);
    var r = Nl(e, e === We ? qe : 0);
    if (r === 0) n !== null && Is(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Is(n), t === 1) e.tag === 0 ? Rm(Hc.bind(null, e)) : Pu(Hc.bind(null, e)), Sm(function() {
        (me & 6) === 0 && on();
      }), n = null;
      else {
        switch (Os(r)) {
          case 1:
            n = to;
            break;
          case 4:
            n = $s;
            break;
          case 16:
            n = wl;
            break;
          case 536870912:
            n = Ds;
            break;
          default:
            n = wl;
        }
        n = Jc(n, bc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function bc(e, t) {
    if (ha = -1, va = 0, (me & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n) return null;
    var r = Nl(e, e === We ? qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ya(e, r);
    else {
      t = r;
      var a = me;
      me |= 2;
      var i = qc();
      (We !== e || qe !== t) && (qt = null, ur = Oe() + 500, Mn(e, t));
      do
        try {
          Km();
          break;
        } catch (y) {
          Vc(e, y);
        }
      while (!0);
      Bo(), ca.current = i, me = a, Fe !== null ? t = 0 : (We = null, qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = no(e), a !== 0 && (r = a, t = Si(e, a))), t === 1) throw n = el, Mn(e, 0), pn(e, r), rt(e, Oe()), n;
      if (t === 6) pn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Qm(a) && (t = ya(e, r), t === 2 && (i = no(e), i !== 0 && (r = i, t = Si(e, i))), t === 1)) throw n = el, Mn(e, 0), pn(e, r), rt(e, Oe()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ln(e, nt, qt);
            break;
          case 3:
            if (pn(e, r), (r & 130023424) === r && (t = wi + 500 - Oe(), 10 < t)) {
              if (Nl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Je(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Mo(Ln.bind(null, e, nt, qt), t);
              break;
            }
            Ln(e, nt, qt);
            break;
          case 4:
            if (pn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - kt(r);
              i = 1 << d, d = t[d], d > a && (a = d), r &= ~i;
            }
            if (r = a, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Mo(Ln.bind(null, e, nt, qt), r);
              break;
            }
            Ln(e, nt, qt);
            break;
          case 5:
            Ln(e, nt, qt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return rt(e, Oe()), e.callbackNode === n ? bc.bind(null, e) : null;
  }
  function Si(e, t) {
    var n = tl;
    return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = ya(e, t), e !== 2 && (t = nt, nt = n, t !== null && Ni(t)), e;
  }
  function Ni(e) {
    nt === null ? nt = e : nt.push.apply(nt, e);
  }
  function Qm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], i = a.getSnapshot;
          a = a.value;
          try {
            if (!Ct(i(), a)) return !1;
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
  function pn(e, t) {
    for (t &= ~Ei, t &= ~da, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - kt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Hc(e) {
    if ((me & 6) !== 0) throw Error(s(327));
    cr();
    var t = Nl(e, 0);
    if ((t & 1) === 0) return rt(e, Oe()), null;
    var n = ya(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = no(e);
      r !== 0 && (t = r, n = Si(e, r));
    }
    if (n === 1) throw n = el, Mn(e, 0), pn(e, t), rt(e, Oe()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ln(e, nt, qt), rt(e, Oe()), null;
  }
  function xi(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      me = n, me === 0 && (ur = Oe() + 500, Hl && on());
    }
  }
  function Pn(e) {
    fn !== null && fn.tag === 0 && (me & 6) === 0 && cr();
    var t = me;
    me |= 1;
    var n = yt.transition, r = Ee;
    try {
      if (yt.transition = null, Ee = 1, e) return e();
    } finally {
      Ee = r, yt.transition = n, me = t, (me & 6) === 0 && on();
    }
  }
  function Ti() {
    ct = sr.current, xe(sr);
  }
  function Mn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Cm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Oo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wl();
          break;
        case 3:
          ar(), xe(Ze), xe(Qe), Ko();
          break;
        case 5:
          Qo(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          xe(Me);
          break;
        case 19:
          xe(Me);
          break;
        case 10:
          Wo(r.type._context);
          break;
        case 22:
        case 23:
          Ti();
      }
      n = n.return;
    }
    if (We = e, Fe = e = hn(e.current, null), qe = ct = t, Ue = 0, el = null, Ei = da = Rn = 0, nt = tl = null, Nn !== null) {
      for (t = 0; t < Nn.length; t++) if (n = Nn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, i = n.pending;
        if (i !== null) {
          var d = i.next;
          i.next = a, r.next = d;
        }
        n.pending = r;
      }
      Nn = null;
    }
    return e;
  }
  function Vc(e, t) {
    do {
      var n = Fe;
      try {
        if (Bo(), ea.current = la, ta) {
          for (var r = Le.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          ta = !1;
        }
        if (Tn = 0, Be = je = Le = null, Yr = !1, Kr = 0, _i.current = null, n === null || n.return === null) {
          Ue = 1, el = t, Fe = null;
          break;
        }
        e: {
          var i = e, d = n.return, y = n, E = t;
          if (t = qe, y.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var I = E, F = y, j = F.tag;
            if ((F.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var z = F.alternate;
              z ? (F.updateQueue = z.updateQueue, F.memoizedState = z.memoizedState, F.lanes = z.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var V = vc(d);
            if (V !== null) {
              V.flags &= -257, yc(V, d, y, i, t), V.mode & 1 && hc(i, I, t), t = V, E = I;
              var G = t.updateQueue;
              if (G === null) {
                var X = /* @__PURE__ */ new Set();
                X.add(E), t.updateQueue = X;
              } else G.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                hc(i, I, t), Ri();
                break e;
              }
              E = Error(s(426));
            }
          } else if (Re && y.mode & 1) {
            var Ae = vc(d);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), yc(Ae, d, y, i, t), jo(or(E, y));
              break e;
            }
          }
          i = E = or(E, y), Ue !== 4 && (Ue = 2), tl === null ? tl = [i] : tl.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var T = mc(i, E, t);
                Uu(i, T);
                break e;
              case 1:
                y = E;
                var w = i.type, M = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (dn === null || !dn.has(M)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var U = pc(i, y, t);
                  Uu(i, U);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Yc(n);
      } catch (Z) {
        t = Z, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qc() {
    var e = ca.current;
    return ca.current = la, e === null ? la : e;
  }
  function Ri() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), We === null || (Rn & 268435455) === 0 && (da & 268435455) === 0 || pn(We, qe);
  }
  function ya(e, t) {
    var n = me;
    me |= 2;
    var r = qc();
    (We !== e || qe !== t) && (qt = null, Mn(e, t));
    do
      try {
        Ym();
        break;
      } catch (a) {
        Vc(e, a);
      }
    while (!0);
    if (Bo(), me = n, ca.current = r, Fe !== null) throw Error(s(261));
    return We = null, qe = 0, Ue;
  }
  function Ym() {
    for (; Fe !== null; ) Qc(Fe);
  }
  function Km() {
    for (; Fe !== null && !Ef(); ) Qc(Fe);
  }
  function Qc(e) {
    var t = Xc(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps, t === null ? Yc(e) : Fe = t, _i.current = null;
  }
  function Yc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Bm(n, t, ct), n !== null) {
          Fe = n;
          return;
        }
      } else {
        if (n = Wm(n, t), n !== null) {
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
  function Ln(e, t, n) {
    var r = Ee, a = yt.transition;
    try {
      yt.transition = null, Ee = 1, Gm(e, t, n, r);
    } finally {
      yt.transition = a, Ee = r;
    }
    return null;
  }
  function Gm(e, t, n, r) {
    do
      cr();
    while (fn !== null);
    if ((me & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Mf(e, i), e === We && (Fe = We = null, qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ma || (ma = !0, Jc(wl, function() {
      return cr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = yt.transition, yt.transition = null;
      var d = Ee;
      Ee = 1;
      var y = me;
      me |= 4, _i.current = null, Hm(e, n), Fc(n, e), vm(Ro), Rl = !!To, Ro = To = null, e.current = n, Vm(n), wf(), me = y, Ee = d, yt.transition = i;
    } else e.current = n;
    if (ma && (ma = !1, fn = e, pa = a), i = e.pendingLanes, i === 0 && (dn = null), Sf(n.stateNode), rt(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (fa) throw fa = !1, e = ki, ki = null, e;
    return (pa & 1) !== 0 && e.tag !== 0 && cr(), i = e.pendingLanes, (i & 1) !== 0 ? e === Ci ? nl++ : (nl = 0, Ci = e) : nl = 0, on(), null;
  }
  function cr() {
    if (fn !== null) {
      var e = Os(pa), t = yt.transition, n = Ee;
      try {
        if (yt.transition = null, Ee = 16 > e ? 16 : e, fn === null) var r = !1;
        else {
          if (e = fn, fn = null, pa = 0, (me & 6) !== 0) throw Error(s(331));
          var a = me;
          for (me |= 4, Y = e.current; Y !== null; ) {
            var i = Y, d = i.child;
            if ((Y.flags & 16) !== 0) {
              var y = i.deletions;
              if (y !== null) {
                for (var E = 0; E < y.length; E++) {
                  var I = y[E];
                  for (Y = I; Y !== null; ) {
                    var F = Y;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, F, i);
                    }
                    var j = F.child;
                    if (j !== null) j.return = F, Y = j;
                    else for (; Y !== null; ) {
                      F = Y;
                      var z = F.sibling, V = F.return;
                      if ($c(F), F === I) {
                        Y = null;
                        break;
                      }
                      if (z !== null) {
                        z.return = V, Y = z;
                        break;
                      }
                      Y = V;
                    }
                  }
                }
                var G = i.alternate;
                if (G !== null) {
                  var X = G.child;
                  if (X !== null) {
                    G.child = null;
                    do {
                      var Ae = X.sibling;
                      X.sibling = null, X = Ae;
                    } while (X !== null);
                  }
                }
                Y = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) d.return = i, Y = d;
            else e: for (; Y !== null; ) {
              if (i = Y, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Zr(9, i, i.return);
              }
              var T = i.sibling;
              if (T !== null) {
                T.return = i.return, Y = T;
                break e;
              }
              Y = i.return;
            }
          }
          var w = e.current;
          for (Y = w; Y !== null; ) {
            d = Y;
            var M = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && M !== null) M.return = d, Y = M;
            else e: for (d = w; Y !== null; ) {
              if (y = Y, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ua(9, y);
                }
              } catch (Z) {
                ze(y, y.return, Z);
              }
              if (y === d) {
                Y = null;
                break e;
              }
              var U = y.sibling;
              if (U !== null) {
                U.return = y.return, Y = U;
                break e;
              }
              Y = y.return;
            }
          }
          if (me = a, on(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(kl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ee = n, yt.transition = t;
      }
    }
    return !1;
  }
  function Kc(e, t, n) {
    t = or(n, t), t = mc(e, t, 1), e = un(e, t, 1), t = Je(), e !== null && (xr(e, 1, t), rt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
          e = or(n, e), e = pc(t, e, 1), t = un(t, e, 1), e = Je(), t !== null && (xr(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Xm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Je(), e.pingedLanes |= e.suspendedLanes & n, We === e && (qe & n) === n && (Ue === 4 || Ue === 3 && (qe & 130023424) === qe && 500 > Oe() - wi ? Mn(e, 0) : Ei |= n), rt(e, t);
  }
  function Gc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Sl, Sl <<= 1, (Sl & 130023424) === 0 && (Sl = 4194304)));
    var n = Je();
    e = bt(e, t), e !== null && (xr(e, t, n), rt(e, n));
  }
  function Jm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Gc(e, n);
  }
  function Zm(e, t) {
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
    r !== null && r.delete(t), Gc(e, n);
  }
  var Xc;
  Xc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) tt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return tt = !1, Um(e, t, n);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, Re && (t.flags & 1048576) !== 0 && Mu(t, ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var a = Jn(t, Qe.current);
        lr(t, n), a = Jo(null, t, r, e, a, n);
        var i = Zo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (i = !0, bl(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Vo(t), a.updater = aa, t.stateNode = a, a._reactInternals = t, ai(t, r, e, n), t = ui(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && zo(t), Xe(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ia(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = tp(r), e = Nt(r, e), a) {
            case 0:
              t = si(null, t, r, e, n);
              break e;
            case 1:
              t = Cc(null, t, r, e, n);
              break e;
            case 11:
              t = gc(null, t, r, e, n);
              break e;
            case 14:
              t = _c(null, t, r, Nt(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Nt(r, a), si(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Nt(r, a), Cc(e, t, r, a, n);
      case 3:
        e: {
          if (Sc(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, a = i.element, ju(e, t), Jl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = or(Error(s(423)), t), t = Nc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = or(Error(s(424)), t), t = Nc(e, t, r, n, a);
            break e;
          } else for (ut = rn(t.stateNode.containerInfo.firstChild), st = t, Re = !0, St = null, n = Au(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (tr(), r === a) {
              t = Vt(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Wu(t), e === null && Fo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = a.children, Po(r, a) ? d = null : i !== null && Po(r, i) && (t.flags |= 32), kc(e, t), Xe(e, t, d, n), t.child;
      case 6:
        return e === null && Fo(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Xe(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Nt(r, a), gc(e, t, r, a, n);
      case 7:
        return Xe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, d = a.value, Ce(Kl, r._currentValue), r._currentValue = d, i !== null) if (Ct(i.value, d)) {
            if (i.children === a.children && !Ze.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var y = i.dependencies;
            if (y !== null) {
              d = i.child;
              for (var E = y.firstContext; E !== null; ) {
                if (E.context === r) {
                  if (i.tag === 1) {
                    E = Ht(-1, n & -n), E.tag = 2;
                    var I = i.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var F = I.pending;
                      F === null ? E.next = E : (E.next = F.next, F.next = E), I.pending = E;
                    }
                  }
                  i.lanes |= n, E = i.alternate, E !== null && (E.lanes |= n), bo(
                    i.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                E = E.next;
              }
            } else if (i.tag === 10) d = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (d = i.return, d === null) throw Error(s(341));
              d.lanes |= n, y = d.alternate, y !== null && (y.lanes |= n), bo(d, n, t), d = i.sibling;
            } else d = i.child;
            if (d !== null) d.return = i;
            else for (d = i; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (i = d.sibling, i !== null) {
                i.return = d.return, d = i;
                break;
              }
              d = d.return;
            }
            i = d;
          }
          Xe(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, lr(t, n), a = ht(a), r = r(a), t.flags |= 1, Xe(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = Nt(r, t.pendingProps), a = Nt(r.type, a), _c(e, t, r, a, n);
      case 15:
        return Ec(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Nt(r, a), ia(e, t), t.tag = 1, et(r) ? (e = !0, bl(t)) : e = !1, lr(t, n), dc(t, r, a), ai(t, r, a, n), ui(null, t, r, !0, e, n);
      case 19:
        return Rc(e, t, n);
      case 22:
        return wc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Jc(e, t) {
    return Ls(e, t);
  }
  function ep(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gt(e, t, n, r) {
    return new ep(e, t, n, r);
  }
  function Pi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function tp(e) {
    if (typeof e == "function") return Pi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ae) return 11;
      if (e === J) return 14;
    }
    return 2;
  }
  function hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ga(e, t, n, r, a, i) {
    var d = 2;
    if (r = e, typeof e == "function") Pi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case le:
        return In(n.children, a, i, t);
      case q:
        d = 8, a |= 8;
        break;
      case fe:
        return e = gt(12, n, t, a | 2), e.elementType = fe, e.lanes = i, e;
      case Se:
        return e = gt(13, n, t, a), e.elementType = Se, e.lanes = i, e;
      case Ie:
        return e = gt(19, n, t, a), e.elementType = Ie, e.lanes = i, e;
      case De:
        return _a(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ye:
            d = 10;
            break e;
          case Q:
            d = 9;
            break e;
          case ae:
            d = 11;
            break e;
          case J:
            d = 14;
            break e;
          case $e:
            d = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = gt(d, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function In(e, t, n, r) {
    return e = gt(7, e, r, t), e.lanes = n, e;
  }
  function _a(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = De, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Mi(e, t, n) {
    return e = gt(6, e, null, t), e.lanes = n, e;
  }
  function Li(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function np(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ro(0), this.expirationTimes = ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ro(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Ii(e, t, n, r, a, i, d, y, E) {
    return e = new np(e, t, n, y, E), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = gt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vo(i), e;
  }
  function rp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Zc(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
      if (En(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (et(t.type)) {
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
      if (et(n)) return Tu(e, n, t);
    }
    return t;
  }
  function ed(e, t, n, r, a, i, d, y, E) {
    return e = Ii(n, r, !0, e, a, i, d, y, E), e.context = Zc(null), n = e.current, r = Je(), a = mn(n), i = Ht(r, a), i.callback = t ?? null, un(n, i, a), e.current.lanes = a, xr(e, a, r), rt(e, r), e;
  }
  function Ea(e, t, n, r) {
    var a = t.current, i = Je(), d = mn(a);
    return n = Zc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(a, t, d), e !== null && (Rt(e, a, d, i), Xl(e, a, d)), d;
  }
  function wa(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function td(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $i(e, t) {
    td(e, t), (e = e.alternate) && td(e, t);
  }
  function lp() {
    return null;
  }
  var nd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Di(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = Di.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ea(e, t, null, null);
  }, ka.prototype.unmount = Di.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Pn(function() {
        Ea(null, e, null, null);
      }), t[jt] = null;
    }
  };
  function ka(e) {
    this._internalRoot = e;
  }
  ka.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = js();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++) ;
      en.splice(n, 0, e), n === 0 && Ws(e);
    }
  };
  function zi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ca(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function rd() {
  }
  function ap(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var I = wa(d);
          i.call(I);
        };
      }
      var d = ed(t, r, e, 0, null, !1, !1, "", rd);
      return e._reactRootContainer = d, e[jt] = d.current, Ur(e.nodeType === 8 ? e.parentNode : e), Pn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var y = r;
      r = function() {
        var I = wa(E);
        y.call(I);
      };
    }
    var E = Ii(e, 0, !1, null, null, !1, !1, "", rd);
    return e._reactRootContainer = E, e[jt] = E.current, Ur(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
      Ea(t, E, n, r);
    }), E;
  }
  function Sa(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
      var d = i;
      if (typeof a == "function") {
        var y = a;
        a = function() {
          var E = wa(d);
          y.call(E);
        };
      }
      Ea(t, d, e, a);
    } else d = ap(n, t, e, a, r);
    return wa(d);
  }
  As = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Nr(t.pendingLanes);
          n !== 0 && (lo(t, n | 1), rt(t, Oe()), (me & 6) === 0 && (ur = Oe() + 500, on()));
        }
        break;
      case 13:
        Pn(function() {
          var r = bt(e, 1);
          if (r !== null) {
            var a = Je();
            Rt(r, e, 1, a);
          }
        }), $i(e, 1);
    }
  }, ao = function(e) {
    if (e.tag === 13) {
      var t = bt(e, 134217728);
      if (t !== null) {
        var n = Je();
        Rt(t, e, 134217728, n);
      }
      $i(e, 134217728);
    }
  }, Fs = function(e) {
    if (e.tag === 13) {
      var t = mn(e), n = bt(e, t);
      if (n !== null) {
        var r = Je();
        Rt(n, e, t, r);
      }
      $i(e, t);
    }
  }, js = function() {
    return Ee;
  }, Us = function(e, t) {
    var n = Ee;
    try {
      return Ee = e, t();
    } finally {
      Ee = n;
    }
  }, Xa = function(e, t, n) {
    switch (t) {
      case "input":
        if (ba(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Bl(r);
              if (!a) throw Error(s(90));
              cs(r), ba(r, a);
            }
          }
        }
        break;
      case "textarea":
        hs(e, n);
        break;
      case "select":
        t = n.value, t != null && Un(e, !!n.multiple, t, !1);
    }
  }, Ss = xi, Ns = Pn;
  var op = { usingClientEntryPoint: !1, Events: [br, Gn, Bl, ks, Cs, xi] }, rl = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ip = { bundleType: rl.bundleType, version: rl.version, rendererPackageName: rl.rendererPackageName, rendererConfig: rl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ps(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: rl.findFiberByHostInstance || lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Na.isDisabled && Na.supportsFiber) try {
      kl = Na.inject(ip), Lt = Na;
    } catch {
    }
  }
  return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = op, lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zi(t)) throw Error(s(200));
    return rp(e, t, null, n);
  }, lt.createRoot = function(e, t) {
    if (!zi(e)) throw Error(s(299));
    var n = !1, r = "", a = nd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ii(e, 1, !1, null, null, n, !1, r, a), e[jt] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new Di(t);
  }, lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Ps(t), e = e === null ? null : e.stateNode, e;
  }, lt.flushSync = function(e) {
    return Pn(e);
  }, lt.hydrate = function(e, t, n) {
    if (!Ca(t)) throw Error(s(200));
    return Sa(null, e, t, !0, n);
  }, lt.hydrateRoot = function(e, t, n) {
    if (!zi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, i = "", d = nd;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = ed(t, null, e, 1, n ?? null, a, !1, i, d), e[jt] = t.current, Ur(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ka(t);
  }, lt.render = function(e, t, n) {
    if (!Ca(t)) throw Error(s(200));
    return Sa(null, e, t, !1, n);
  }, lt.unmountComponentAtNode = function(e) {
    if (!Ca(e)) throw Error(s(40));
    return e._reactRootContainer ? (Pn(function() {
      Sa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[jt] = null;
      });
    }), !0) : !1;
  }, lt.unstable_batchedUpdates = xi, lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ca(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Sa(e, t, n, !1, r);
  }, lt.version = "18.3.1-next-f1338f8080-20240426", lt;
}
var ud;
function Od() {
  if (ud) return Ai.exports;
  ud = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Ai.exports = fp(), Ai.exports;
}
var cd;
function mp() {
  if (cd) return xa;
  cd = 1;
  var l = Od();
  return xa.createRoot = l.createRoot, xa.hydrateRoot = l.hydrateRoot, xa;
}
var pp = mp();
const hp = /* @__PURE__ */ Dd(pp);
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
var dd = "popstate";
function fd(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function vp(l = {}) {
  function o(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: _ = ""
    } = Fn(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Ji(
      "",
      { pathname: p, search: h, hash: _ },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function s(f, m) {
    let p = f.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let _ = f.location.href, C = _.indexOf("#");
      h = C === -1 ? _ : _.slice(0, C);
    }
    return h + "#" + (typeof m == "string" ? m : cl(m));
  }
  function c(f, m) {
    _t(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return gp(
    o,
    s,
    c,
    l
  );
}
function Pe(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function _t(l, o) {
  if (!l) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {
    }
  }
}
function yp() {
  return Math.random().toString(36).substring(2, 10);
}
function md(l, o) {
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
function Ji(l, o, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? Fn(o) : o,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || c || yp(),
    mask: f
  };
}
function cl({
  pathname: l = "/",
  search: o = "",
  hash: s = ""
}) {
  return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function Fn(l) {
  let o = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (o.hash = l.substring(s), l = l.substring(0, s));
    let c = l.indexOf("?");
    c >= 0 && (o.search = l.substring(c), l = l.substring(0, c)), l && (o.pathname = l);
  }
  return o;
}
function gp(l, o, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", _ = null, C = S();
  C == null && (C = 0, p.replaceState({ ...p.state, idx: C }, ""));
  function S() {
    return (p.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let k = S(), D = k == null ? null : k - C;
    C = k, _ && _({ action: h, location: L.location, delta: D });
  }
  function x(k, D) {
    h = "PUSH";
    let R = fd(k) ? k : Ji(L.location, k, D);
    s && s(R, k), C = S() + 1;
    let O = md(R, C), b = L.createHref(R.mask || R);
    try {
      p.pushState(O, "", b);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError")
        throw H;
      f.location.assign(b);
    }
    m && _ && _({ action: h, location: L.location, delta: 1 });
  }
  function P(k, D) {
    h = "REPLACE";
    let R = fd(k) ? k : Ji(L.location, k, D);
    s && s(R, k), C = S();
    let O = md(R, C), b = L.createHref(R.mask || R);
    p.replaceState(O, "", b), m && _ && _({ action: h, location: L.location, delta: 0 });
  }
  function $(k) {
    return _p(f, k);
  }
  let L = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(k) {
      if (_)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(dd, g), _ = k, () => {
        f.removeEventListener(dd, g), _ = null;
      };
    },
    createHref(k) {
      return o(f, k);
    },
    createURL: $,
    encodeLocation(k) {
      let D = $(k);
      return {
        pathname: D.pathname,
        search: D.search,
        hash: D.hash
      };
    },
    push: x,
    replace: P,
    go(k) {
      return p.go(k);
    }
  };
  return L;
}
function _p(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Pe(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : cl(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Ad(l, o, s = "/") {
  return Ep(l, o, s, !1);
}
function Ep(l, o, s, c, f) {
  let m = typeof o == "string" ? Fn(o) : o, p = Qt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = wp(l), _ = null, C = $p(p);
  for (let S = 0; _ == null && S < h.length; ++S)
    _ = Lp(
      h[S],
      C,
      c
    );
  return _;
}
function wp(l) {
  let o = Fd(l);
  return kp(o), o;
}
function Fd(l, o = [], s = [], c = "", f = !1) {
  let m = (p, h, _ = f, C) => {
    let S = {
      relativePath: C === void 0 ? p.path || "" : C,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(c) && _)
        return;
      Pe(
        S.relativePath.startsWith(c),
        `Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(c.length);
    }
    let g = Pt([c, S.relativePath]), x = s.concat(S);
    p.children && p.children.length > 0 && (Pe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
    ), Fd(
      p.children,
      o,
      x,
      g,
      _
    )), !(p.path == null && !p.index) && o.push({
      path: g,
      score: Pp(g, p.index),
      routesMeta: x
    });
  };
  return l.forEach((p, h) => {
    var _;
    if (p.path === "" || !((_ = p.path) != null && _.includes("?")))
      m(p, h);
    else
      for (let C of jd(p.path))
        m(p, h, !0, C);
  }), o;
}
function jd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [s, ...c] = o, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = jd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (_) => _ === "" ? m : [m, _].join("/")
    )
  ), f && h.push(...p), h.map(
    (_) => l.startsWith("/") && _ === "" ? "/" : _
  );
}
function kp(l) {
  l.sort(
    (o, s) => o.score !== s.score ? s.score - o.score : Mp(
      o.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Cp = /^:[\w-]+$/, Sp = 3, Np = 2, xp = 1, Tp = 10, Rp = -2, pd = (l) => l === "*";
function Pp(l, o) {
  let s = l.split("/"), c = s.length;
  return s.some(pd) && (c += Rp), o && (c += Np), s.filter((f) => !pd(f)).reduce(
    (f, m) => f + (Cp.test(m) ? Sp : m === "" ? xp : Tp),
    c
  );
}
function Mp(l, o) {
  return l.length === o.length && l.slice(0, -1).every((c, f) => c === o[f]) ? (
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
function Lp(l, o, s = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let _ = c[h], C = h === c.length - 1, S = m === "/" ? o : o.slice(m.length) || "/", g = za(
      { path: _.relativePath, caseSensitive: _.caseSensitive, end: C },
      S
    ), x = _.route;
    if (!g && C && s && !c[c.length - 1].route.index && (g = za(
      {
        path: _.relativePath,
        caseSensitive: _.caseSensitive,
        end: !1
      },
      S
    )), !g)
      return null;
    Object.assign(f, g.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Pt([m, g.pathname]),
      pathnameBase: Ap(
        Pt([m, g.pathnameBase])
      ),
      route: x
    }), g.pathnameBase !== "/" && (m = Pt([m, g.pathnameBase]));
  }
  return p;
}
function za(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = Ip(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (C, { paramName: S, isOptional: g }, x) => {
        if (S === "*") {
          let $ = h[x] || "";
          p = m.slice(0, m.length - $.length).replace(/(.)\/+$/, "$1");
        }
        const P = h[x];
        return g && !P ? C[S] = void 0 : C[S] = (P || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function Ip(l, o = !1, s = !0) {
  _t(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, _, C, S) => {
      if (c.push({ paramName: h, isOptional: _ != null }), _) {
        let g = S.charAt(C + p.length);
        return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function $p(l) {
  try {
    return l.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return _t(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), l;
  }
}
function Qt(l, o) {
  if (o === "/") return l;
  if (!l.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let s = o.endsWith("/") ? o.length - 1 : o.length, c = l.charAt(s);
  return c && c !== "/" ? null : l.slice(s) || "/";
}
var Dp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function zp(l, o = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? Fn(l) : l, m;
  return s ? (s = Ud(s), s.startsWith("/") ? m = hd(s.substring(1), "/") : m = hd(s, o)) : m = o, {
    pathname: m,
    search: Fp(c),
    hash: jp(f)
  };
}
function hd(l, o) {
  let s = Oa(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function Ui(l, o, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Op(l) {
  return l.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function ns(l) {
  let o = Op(l);
  return o.map(
    (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function ja(l, o, s, c = !1) {
  let f;
  typeof l == "string" ? f = Fn(l) : (f = { ...l }, Pe(
    !f.pathname || !f.pathname.includes("?"),
    Ui("?", "pathname", "search", f)
  ), Pe(
    !f.pathname || !f.pathname.includes("#"),
    Ui("#", "pathname", "hash", f)
  ), Pe(
    !f.search || !f.search.includes("#"),
    Ui("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let g = o.length - 1;
    if (!c && p.startsWith("..")) {
      let x = p.split("/");
      for (; x[0] === ".."; )
        x.shift(), g -= 1;
      f.pathname = x.join("/");
    }
    h = g >= 0 ? o[g] : "/";
  }
  let _ = zp(f, h), C = p && p !== "/" && p.endsWith("/"), S = (m || p === ".") && s.endsWith("/");
  return !_.pathname.endsWith("/") && (C || S) && (_.pathname += "/"), _;
}
var Ud = (l) => l.replace(/\/\/+/g, "/"), Pt = (l) => Ud(l.join("/")), Oa = (l) => l.replace(/\/+$/, ""), Ap = (l) => Oa(l).replace(/^\/*/, "/"), Fp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, jp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Up = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Bp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Wp(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Pt(o) || "/";
}
var Bd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Wd(l, o) {
  let s = l;
  if (typeof s != "string" || !Dp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (Bd)
    try {
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), h = Qt(p.pathname, o);
      p.origin === m.origin && h != null ? s = h + p.search + p.hash : f = !0;
    } catch {
      _t(
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
var bd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  bd
);
var bp = [
  "GET",
  ...bd
];
new Set(bp);
var mr = v.createContext(null);
mr.displayName = "DataRouter";
var Ua = v.createContext(null);
Ua.displayName = "DataRouterState";
var Hd = v.createContext(!1);
function Hp() {
  return v.useContext(Hd);
}
var Vd = v.createContext({
  isTransitioning: !1
});
Vd.displayName = "ViewTransition";
var Vp = v.createContext(
  /* @__PURE__ */ new Map()
);
Vp.displayName = "Fetchers";
var qp = v.createContext(null);
qp.displayName = "Await";
var ft = v.createContext(
  null
);
ft.displayName = "Navigation";
var dl = v.createContext(
  null
);
dl.displayName = "Location";
var Ft = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ft.displayName = "Route";
var rs = v.createContext(null);
rs.displayName = "RouteError";
var qd = "REACT_ROUTER_ERROR", Qp = "REDIRECT", Yp = "ROUTE_ERROR_RESPONSE";
function Kp(l) {
  if (l.startsWith(`${qd}:${Qp}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function Gp(l) {
  if (l.startsWith(
    `${qd}:${Yp}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Up(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function Xp(l, { relative: o } = {}) {
  Pe(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = v.useContext(ft), { hash: f, pathname: m, search: p } = fl(l, { relative: o }), h = m;
  return s !== "/" && (h = m === "/" ? s : Pt([s, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function pr() {
  return v.useContext(dl) != null;
}
function Et() {
  return Pe(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(dl).location;
}
var Qd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Yd(l) {
  v.useContext(ft).static || v.useLayoutEffect(l);
}
function hr() {
  let { isDataRoute: l } = v.useContext(Ft);
  return l ? ch() : Jp();
}
function Jp() {
  Pe(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(mr), { basename: o, navigator: s } = v.useContext(ft), { matches: c } = v.useContext(Ft), { pathname: f } = Et(), m = JSON.stringify(ns(c)), p = v.useRef(!1);
  return Yd(() => {
    p.current = !0;
  }), v.useCallback(
    (_, C = {}) => {
      if (_t(p.current, Qd), !p.current) return;
      if (typeof _ == "number") {
        s.go(_);
        return;
      }
      let S = ja(
        _,
        JSON.parse(m),
        f,
        C.relative === "path"
      );
      l == null && o !== "/" && (S.pathname = S.pathname === "/" ? o : Pt([o, S.pathname])), (C.replace ? s.replace : s.push)(
        S,
        C.state,
        C
      );
    },
    [
      o,
      s,
      m,
      f,
      l
    ]
  );
}
v.createContext(null);
function fl(l, { relative: o } = {}) {
  let { matches: s } = v.useContext(Ft), { pathname: c } = Et(), f = JSON.stringify(ns(s));
  return v.useMemo(
    () => ja(
      l,
      JSON.parse(f),
      c,
      o === "path"
    ),
    [l, f, c, o]
  );
}
function Zp(l, o) {
  return Kd(l, o);
}
function Kd(l, o, s) {
  var k;
  Pe(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(ft), { matches: f } = v.useContext(Ft), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", _ = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let D = C && C.path || "";
    Xd(
      h,
      !C || D.endsWith("*") || D.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D === "/" ? "*" : `${D}/*`}">.`
    );
  }
  let S = Et(), g;
  if (o) {
    let D = typeof o == "string" ? Fn(o) : o;
    Pe(
      _ === "/" || ((k = D.pathname) == null ? void 0 : k.startsWith(_)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${D.pathname}" was given in the \`location\` prop.`
    ), g = D;
  } else
    g = S;
  let x = g.pathname || "/", P = x;
  if (_ !== "/") {
    let D = _.replace(/^\//, "").split("/");
    P = "/" + x.replace(/^\//, "").split("/").slice(D.length).join("/");
  }
  let $ = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (D) => Object.assign(D, {
        route: s.manifest[D.route.id] || D.route
      })
    )
  ) : Ad(l, { pathname: P });
  _t(
    C || $ != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), _t(
    $ == null || $[$.length - 1].route.element !== void 0 || $[$.length - 1].route.Component !== void 0 || $[$.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let L = lh(
    $ && $.map(
      (D) => Object.assign({}, D, {
        params: Object.assign({}, p, D.params),
        pathname: Pt([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            D.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : D.pathname
        ]),
        pathnameBase: D.pathnameBase === "/" ? _ : Pt([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            D.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : D.pathnameBase
        ])
      })
    ),
    f,
    s
  );
  return o && L ? /* @__PURE__ */ v.createElement(
    dl.Provider,
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
    L
  ) : L;
}
function eh() {
  let l = uh(), o = Bp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ v.createElement("pre", { style: f }, s) : null, p);
}
var th = /* @__PURE__ */ v.createElement(eh, null), Gd = class extends v.Component {
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
      const s = Gp(l.digest);
      s && (l = s);
    }
    let o = l !== void 0 ? /* @__PURE__ */ v.createElement(Ft.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      rs.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(nh, { error: l }, o) : o;
  }
};
Gd.contextType = Hd;
var Bi = /* @__PURE__ */ new WeakMap();
function nh({
  children: l,
  error: o
}) {
  let { basename: s } = v.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = Kp(o.digest);
    if (c) {
      let f = Bi.get(o);
      if (f) throw f;
      let m = Wd(c.location, s);
      if (Bd && !Bi.get(o))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw Bi.set(o, p), p;
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
function rh({ routeContext: l, match: o, children: s }) {
  let c = v.useContext(mr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ v.createElement(Ft.Provider, { value: l }, s);
}
function lh(l, o = [], s) {
  let c = s == null ? void 0 : s.state;
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
  let f = l, m = c == null ? void 0 : c.errors;
  if (m != null) {
    let S = f.findIndex(
      (g) => g.route.id && (m == null ? void 0 : m[g.route.id]) !== void 0
    );
    Pe(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, S + 1)
    );
  }
  let p = !1, h = -1;
  if (s && c) {
    p = c.renderFallback;
    for (let S = 0; S < f.length; S++) {
      let g = f[S];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = S), g.route.id) {
        let { loaderData: x, errors: P } = c, $ = g.route.loader && !x.hasOwnProperty(g.route.id) && (!P || P[g.route.id] === void 0);
        if (g.route.lazy || $) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let _ = s == null ? void 0 : s.onError, C = c && _ ? (S, g) => {
    var x, P;
    _(S, {
      location: c.location,
      params: ((P = (x = c.matches) == null ? void 0 : x[0]) == null ? void 0 : P.params) ?? {},
      pattern: Wp(c.matches),
      errorInfo: g
    });
  } : void 0;
  return f.reduceRight(
    (S, g, x) => {
      let P, $ = !1, L = null, k = null;
      c && (P = m && g.route.id ? m[g.route.id] : void 0, L = g.route.errorElement || th, p && (h < 0 && x === 0 ? (Xd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), $ = !0, k = null) : h === x && ($ = !0, k = g.route.hydrateFallbackElement || null)));
      let D = o.concat(f.slice(0, x + 1)), R = () => {
        let O;
        return P ? O = L : $ ? O = k : g.route.Component ? O = /* @__PURE__ */ v.createElement(g.route.Component, null) : g.route.element ? O = g.route.element : O = S, /* @__PURE__ */ v.createElement(
          rh,
          {
            match: g,
            routeContext: {
              outlet: S,
              matches: D,
              isDataRoute: c != null
            },
            children: O
          }
        );
      };
      return c && (g.route.ErrorBoundary || g.route.errorElement || x === 0) ? /* @__PURE__ */ v.createElement(
        Gd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: L,
          error: P,
          children: R(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
          onError: C
        }
      ) : R();
    },
    null
  );
}
function ls(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ah(l) {
  let o = v.useContext(mr);
  return Pe(o, ls(l)), o;
}
function oh(l) {
  let o = v.useContext(Ua);
  return Pe(o, ls(l)), o;
}
function ih(l) {
  let o = v.useContext(Ft);
  return Pe(o, ls(l)), o;
}
function as(l) {
  let o = ih(l), s = o.matches[o.matches.length - 1];
  return Pe(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function sh() {
  return as(
    "useRouteId"
    /* UseRouteId */
  );
}
function uh() {
  var c;
  let l = v.useContext(rs), o = oh(
    "useRouteError"
    /* UseRouteError */
  ), s = as(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[s];
}
function ch() {
  let { router: l } = ah(
    "useNavigate"
    /* UseNavigateStable */
  ), o = as(
    "useNavigate"
    /* UseNavigateStable */
  ), s = v.useRef(!1);
  return Yd(() => {
    s.current = !0;
  }), v.useCallback(
    async (f, m = {}) => {
      _t(s.current, Qd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var vd = {};
function Xd(l, o, s) {
  !o && !vd[l] && (vd[l] = !0, _t(!1, s));
}
v.memo(dh);
function dh({
  routes: l,
  manifest: o,
  future: s,
  state: c,
  isStatic: f,
  onError: m
}) {
  return Kd(l, void 0, {
    manifest: o,
    state: c,
    isStatic: f,
    onError: m
  });
}
function Ta({
  to: l,
  replace: o,
  state: s,
  relative: c
}) {
  Pe(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = v.useContext(ft);
  _t(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = v.useContext(Ft), { pathname: p } = Et(), h = hr(), _ = ja(
    l,
    ns(m),
    p,
    c === "path"
  ), C = JSON.stringify(_);
  return v.useEffect(() => {
    h(JSON.parse(C), { replace: o, state: s, relative: c });
  }, [h, C, c, o, s]), null;
}
function at(l) {
  Pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function fh({
  basename: l = "/",
  children: o = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: m = !1,
  useTransitions: p
}) {
  Pe(
    !pr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), _ = v.useMemo(
    () => ({
      basename: h,
      navigator: f,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [h, f, m, p]
  );
  typeof s == "string" && (s = Fn(s));
  let {
    pathname: C = "/",
    search: S = "",
    hash: g = "",
    state: x = null,
    key: P = "default",
    mask: $
  } = s, L = v.useMemo(() => {
    let k = Qt(C, h);
    return k == null ? null : {
      location: {
        pathname: k,
        search: S,
        hash: g,
        state: x,
        key: P,
        mask: $
      },
      navigationType: c
    };
  }, [h, C, S, g, x, P, c, $]);
  return _t(
    L != null,
    `<Router basename="${h}"> is not able to match the URL "${C}${S}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), L == null ? null : /* @__PURE__ */ v.createElement(ft.Provider, { value: _ }, /* @__PURE__ */ v.createElement(dl.Provider, { children: o, value: L }));
}
function mh({
  children: l,
  location: o
}) {
  return Zp(Zi(l), o);
}
function Zi(l, o = []) {
  let s = [];
  return v.Children.forEach(l, (c, f) => {
    if (!v.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === v.Fragment) {
      s.push.apply(
        s,
        Zi(c.props.children, m)
      );
      return;
    }
    Pe(
      c.type === at,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Pe(
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
    c.props.children && (p.children = Zi(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var $a = "get", Da = "application/x-www-form-urlencoded";
function Ba(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function ph(l) {
  return Ba(l) && l.tagName.toLowerCase() === "button";
}
function hh(l) {
  return Ba(l) && l.tagName.toLowerCase() === "form";
}
function vh(l) {
  return Ba(l) && l.tagName.toLowerCase() === "input";
}
function yh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function gh(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !yh(l);
}
var Ra = null;
function _h() {
  if (Ra === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ra = !1;
    } catch {
      Ra = !0;
    }
  return Ra;
}
var Eh = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Wi(l) {
  return l != null && !Eh.has(l) ? (_t(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`
  ), null) : l;
}
function wh(l, o) {
  let s, c, f, m, p;
  if (hh(l)) {
    let h = l.getAttribute("action");
    c = h ? Qt(h, o) : null, s = l.getAttribute("method") || $a, f = Wi(l.getAttribute("enctype")) || Da, m = new FormData(l);
  } else if (ph(l) || vh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let _ = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = _ ? Qt(_, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || $a, f = Wi(l.getAttribute("formenctype")) || Wi(h.getAttribute("enctype")) || Da, m = new FormData(h, l), !_h()) {
      let { name: C, type: S, value: g } = l;
      if (S === "image") {
        let x = C ? `${C}.` : "";
        m.append(`${x}x`, "0"), m.append(`${x}y`, "0");
      } else C && m.append(C, g);
    }
  } else {
    if (Ba(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = $a, c = null, f = Da, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function os(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function Jd(l, o, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Qt(f.pathname, o) === "/" ? f.pathname = `${Oa(o)}/_root.${c}` : f.pathname = `${Oa(f.pathname)}.${c}`, f;
}
async function kh(l, o) {
  if (l.id in o)
    return o[l.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return o[l.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Ch(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Sh(l, o, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = o.routes[f.route.id];
      if (m) {
        let p = await kh(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Rh(
    c.flat(1).filter(Ch).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function yd(l, o, s, c, f, m) {
  let p = (_, C) => s[C] ? _.route.id !== s[C].route.id : !0, h = (_, C) => {
    var S;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== _.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((S = s[C].route.path) == null ? void 0 : S.endsWith("*")) && s[C].params["*"] !== _.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (_, C) => p(_, C) || h(_, C)
  ) : m === "data" ? o.filter((_, C) => {
    var g;
    let S = c.routes[_.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (p(_, C) || h(_, C))
      return !0;
    if (_.route.shouldRevalidate) {
      let x = _.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((g = s[0]) == null ? void 0 : g.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: _.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function Nh(l, o, { includeHydrateFallback: s } = {}) {
  return xh(
    l.map((c) => {
      let f = o.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function xh(l) {
  return [...new Set(l)];
}
function Th(l) {
  let o = {}, s = Object.keys(l).sort();
  for (let c of s)
    o[c] = l[c];
  return o;
}
function Rh(l, o) {
  let s = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, f) => {
    let m = JSON.stringify(Th(f));
    return s.has(m) || (s.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function is() {
  let l = v.useContext(mr);
  return os(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Ph() {
  let l = v.useContext(Ua);
  return os(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var ss = v.createContext(void 0);
ss.displayName = "FrameworkContext";
function us() {
  let l = v.useContext(ss);
  return os(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Mh(l, o) {
  let s = v.useContext(ss), [c, f] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: _, onMouseEnter: C, onMouseLeave: S, onTouchStart: g } = o, x = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let L = (D) => {
        D.forEach((R) => {
          p(R.isIntersecting);
        });
      }, k = new IntersectionObserver(L, { threshold: 0.5 });
      return x.current && k.observe(x.current), () => {
        k.disconnect();
      };
    }
  }, [l]), v.useEffect(() => {
    if (c) {
      let L = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [c]);
  let P = () => {
    f(!0);
  }, $ = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, x, {}] : [
    m,
    x,
    {
      onFocus: ll(h, P),
      onBlur: ll(_, $),
      onMouseEnter: ll(C, P),
      onMouseLeave: ll(S, $),
      onTouchStart: ll(g, P)
    }
  ] : [!1, x, {}];
}
function ll(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function Lh({ page: l, ...o }) {
  let s = Hp(), { router: c } = is(), f = v.useMemo(
    () => Ad(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ v.createElement($h, { page: l, matches: f, ...o }) : /* @__PURE__ */ v.createElement(Dh, { page: l, matches: f, ...o }) : null;
}
function Ih(l) {
  let { manifest: o, routeModules: s } = us(), [c, f] = v.useState([]);
  return v.useEffect(() => {
    let m = !1;
    return Sh(l, o, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, s]), c;
}
function $h({
  page: l,
  matches: o,
  ...s
}) {
  let c = Et(), { future: f } = us(), { basename: m } = is(), p = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = Jd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), _ = !1, C = [];
    for (let S of o)
      typeof S.route.shouldRevalidate == "function" ? _ = !0 : C.push(S.route.id);
    return _ && C.length > 0 && h.searchParams.set("_routes", C.join(",")), [h.pathname + h.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...s })));
}
function Dh({
  page: l,
  matches: o,
  ...s
}) {
  let c = Et(), { future: f, manifest: m, routeModules: p } = us(), { basename: h } = is(), { loaderData: _, matches: C } = Ph(), S = v.useMemo(
    () => yd(
      l,
      o,
      C,
      m,
      c,
      "data"
    ),
    [l, o, C, m, c]
  ), g = v.useMemo(
    () => yd(
      l,
      o,
      C,
      m,
      c,
      "assets"
    ),
    [l, o, C, m, c]
  ), x = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let L = /* @__PURE__ */ new Set(), k = !1;
    if (o.forEach((R) => {
      var b;
      let O = m.routes[R.route.id];
      !O || !O.hasLoader || (!S.some((H) => H.route.id === R.route.id) && R.route.id in _ && ((b = p[R.route.id]) != null && b.shouldRevalidate) || O.hasClientLoader ? k = !0 : L.add(R.route.id));
    }), L.size === 0)
      return [];
    let D = Jd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return k && L.size > 0 && D.searchParams.set(
      "_routes",
      o.filter((R) => L.has(R.route.id)).map((R) => R.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    _,
    c,
    m,
    S,
    o,
    l,
    p
  ]), P = v.useMemo(
    () => Nh(g, m),
    [g, m]
  ), $ = Ih(g);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, x.map((L) => /* @__PURE__ */ v.createElement("link", { key: L, rel: "prefetch", as: "fetch", href: L, ...s })), P.map((L) => /* @__PURE__ */ v.createElement("link", { key: L, rel: "modulepreload", href: L, ...s })), $.map(({ key: L, link: k }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: L,
        nonce: s.nonce,
        ...k,
        crossOrigin: k.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function zh(...l) {
  return (o) => {
    l.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var Oh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Oh && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Ah({
  basename: l,
  children: o,
  useTransitions: s,
  window: c
}) {
  let f = v.useRef();
  f.current == null && (f.current = vp({ window: c, v5Compat: !0 }));
  let m = f.current, [p, h] = v.useState({
    action: m.action,
    location: m.location
  }), _ = v.useCallback(
    (C) => {
      s === !1 ? h(C) : v.startTransition(() => h(C));
    },
    [s]
  );
  return v.useLayoutEffect(() => m.listen(_), [m, _]), /* @__PURE__ */ v.createElement(
    fh,
    {
      basename: l,
      children: o,
      location: p.location,
      navigationType: p.action,
      navigator: m,
      useTransitions: s
    }
  );
}
var Zd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ef = v.forwardRef(
  function({
    onClick: o,
    discover: s = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: _,
    target: C,
    to: S,
    preventScrollReset: g,
    viewTransition: x,
    defaultShouldRevalidate: P,
    ...$
  }, L) {
    let { basename: k, navigator: D, useTransitions: R } = v.useContext(ft), O = typeof S == "string" && Zd.test(S), b = Wd(S, k);
    S = b.to;
    let H = Xp(S, { relative: f }), W = Et(), le = null;
    if (h) {
      let J = ja(
        h,
        [],
        W.mask ? W.mask.pathname : "/",
        !0
      );
      k !== "/" && (J.pathname = J.pathname === "/" ? k : Pt([k, J.pathname])), le = D.createHref(J);
    }
    let [q, fe, ye] = Mh(
      c,
      $
    ), Q = Uh(S, {
      replace: p,
      mask: h,
      state: _,
      target: C,
      preventScrollReset: g,
      relative: f,
      viewTransition: x,
      defaultShouldRevalidate: P,
      useTransitions: R
    });
    function ae(J) {
      o && o(J), J.defaultPrevented || Q(J);
    }
    let Se = !(b.isExternal || m), Ie = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...$,
          ...ye,
          href: (Se ? le : void 0) || b.absoluteURL || H,
          onClick: Se ? ae : o,
          ref: zh(L, fe),
          target: C,
          "data-discover": !O && s === "render" ? "true" : void 0
        }
      )
    );
    return q && !O ? /* @__PURE__ */ v.createElement(v.Fragment, null, Ie, /* @__PURE__ */ v.createElement(Lh, { page: H })) : Ie;
  }
);
ef.displayName = "Link";
var He = v.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: _,
    ...C
  }, S) {
    let g = fl(p, { relative: C.relative }), x = Et(), P = v.useContext(Ua), { navigator: $, basename: L } = v.useContext(ft), k = P != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Vh(g) && h === !0, D = $.encodeLocation ? $.encodeLocation(g).pathname : g.pathname, R = x.pathname, O = P && P.navigation && P.navigation.location ? P.navigation.location.pathname : null;
    s || (R = R.toLowerCase(), O = O ? O.toLowerCase() : null, D = D.toLowerCase()), O && L && (O = Qt(O, L) || O);
    const b = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
    let H = R === D || !f && R.startsWith(D) && R.charAt(b) === "/", W = O != null && (O === D || !f && O.startsWith(D) && O.charAt(D.length) === "/"), le = {
      isActive: H,
      isPending: W,
      isTransitioning: k
    }, q = H ? o : void 0, fe;
    typeof c == "function" ? fe = c(le) : fe = [
      c,
      H ? "active" : null,
      W ? "pending" : null,
      k ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ye = typeof m == "function" ? m(le) : m;
    return /* @__PURE__ */ v.createElement(
      ef,
      {
        ...C,
        "aria-current": q,
        className: fe,
        ref: S,
        style: ye,
        to: p,
        viewTransition: h
      },
      typeof _ == "function" ? _(le) : _
    );
  }
);
He.displayName = "NavLink";
var Fh = v.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: s,
    reloadDocument: c,
    replace: f,
    state: m,
    method: p = $a,
    action: h,
    onSubmit: _,
    relative: C,
    preventScrollReset: S,
    viewTransition: g,
    defaultShouldRevalidate: x,
    ...P
  }, $) => {
    let { useTransitions: L } = v.useContext(ft), k = bh(), D = Hh(h, { relative: C }), R = p.toLowerCase() === "get" ? "get" : "post", O = typeof h == "string" && Zd.test(h), b = (H) => {
      if (_ && _(H), H.defaultPrevented) return;
      H.preventDefault();
      let W = H.nativeEvent.submitter, le = (W == null ? void 0 : W.getAttribute("formmethod")) || p, q = () => k(W || H.currentTarget, {
        fetcherKey: o,
        method: le,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: S,
        viewTransition: g,
        defaultShouldRevalidate: x
      });
      L && s !== !1 ? v.startTransition(() => q()) : q();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: $,
        method: R,
        action: D,
        onSubmit: c ? _ : b,
        ...P,
        "data-discover": !O && l === "render" ? "true" : void 0
      }
    );
  }
);
Fh.displayName = "Form";
function jh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function tf(l) {
  let o = v.useContext(mr);
  return Pe(o, jh(l)), o;
}
function Uh(l, {
  target: o,
  replace: s,
  mask: c,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: _,
  useTransitions: C
} = {}) {
  let S = hr(), g = Et(), x = fl(l, { relative: p });
  return v.useCallback(
    (P) => {
      if (gh(P, o)) {
        P.preventDefault();
        let $ = s !== void 0 ? s : cl(g) === cl(x), L = () => S(l, {
          replace: $,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: _
        });
        C ? v.startTransition(() => L()) : L();
      }
    },
    [
      g,
      S,
      x,
      s,
      c,
      f,
      o,
      l,
      m,
      p,
      h,
      _,
      C
    ]
  );
}
var Bh = 0, Wh = () => `__${String(++Bh)}__`;
function bh() {
  let { router: l } = tf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(ft), s = sh(), c = l.fetch, f = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: _, encType: C, formData: S, body: g } = wh(
        m,
        o
      );
      if (p.navigate === !1) {
        let x = p.fetcherKey || Wh();
        await c(x, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: g,
          formMethod: p.method || _,
          formEncType: p.encType || C,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: g,
          formMethod: p.method || _,
          formEncType: p.encType || C,
          replace: p.replace,
          state: p.state,
          fromRouteId: s,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, f, o, s]
  );
}
function Hh(l, { relative: o } = {}) {
  let { basename: s } = v.useContext(ft), c = v.useContext(Ft);
  Pe(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...fl(l || ".", { relative: o }) }, p = Et();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), _ = h.getAll("index");
    if (_.some((S) => S === "")) {
      h.delete("index"), _.filter((g) => g).forEach((g) => h.append("index", g));
      let S = h.toString();
      m.search = S ? `?${S}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Pt([s, m.pathname])), cl(m);
}
function Vh(l, { relative: o } = {}) {
  let s = v.useContext(Vd);
  Pe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = tf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = fl(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Qt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Qt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return za(f.pathname, p) != null || za(f.pathname, m) != null;
}
var qh = Od(), es = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new WeakMap(), gd = 0, Qh;
function Yh(l) {
  return l ? (Pa.has(l) || (gd += 1, Pa.set(l, gd.toString())), Pa.get(l)) : "0";
}
function Kh(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? Yh(l.root) : l[o]}`).toString();
}
function Gh(l) {
  const o = Kh(l);
  let s = es.get(o);
  if (!s) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var _;
        const C = h.isIntersecting && f.some((S) => h.intersectionRatio >= S);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = C), [...(_ = c.get(h.target)) != null ? _ : []].forEach((S) => {
          S(C, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), s = {
      id: o,
      observer: m,
      elements: c
    }, es.set(o, s);
  }
  return s;
}
function Xh(l, o, s = {}, c = Qh) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const _ = l.getBoundingClientRect();
    return o(c, {
      isIntersecting: c,
      target: l,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: _,
      intersectionRect: _,
      rootBounds: _
    }), () => {
    };
  }
  const { id: f, observer: m, elements: p } = Gh(s), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), es.delete(f));
  };
}
function vr({
  threshold: l,
  delay: o,
  trackVisibility: s,
  rootMargin: c,
  root: f,
  triggerOnce: m,
  skip: p,
  initialInView: h,
  fallbackInView: _,
  onChange: C
} = {}) {
  var S;
  const [g, x] = v.useState(null), P = v.useRef(C), $ = v.useRef(h), [L, k] = v.useState({
    inView: !!h,
    entry: void 0
  });
  P.current = C, v.useEffect(
    () => {
      if ($.current === void 0 && ($.current = h), p || !g) return;
      let b;
      return b = Xh(
        g,
        (H, W) => {
          const le = $.current;
          $.current = H, !(le === void 0 && !H) && (k({
            inView: H,
            entry: W
          }), P.current && P.current(H, W), W.isIntersecting && m && b && (b(), b = void 0));
        },
        {
          root: f,
          rootMargin: c,
          threshold: l,
          // @ts-expect-error
          trackVisibility: s,
          delay: o
        },
        _
      ), () => {
        b && b();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(l) ? l.toString() : l,
      g,
      f,
      c,
      m,
      p,
      s,
      _,
      o
    ]
  );
  const D = (S = L.entry) == null ? void 0 : S.target, R = v.useRef(void 0);
  !g && D && !m && !p && R.current !== D && (R.current = D, k({
    inView: !!h,
    entry: void 0
  }), $.current = h);
  const O = [x, L.inView, L.entry];
  return O.ref = O[0], O.inView = O[1], O.entry = O[2], O;
}
const wt = (l = 768) => {
  const [o, s] = v.useState(
    window.innerWidth <= l
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), o;
}, nf = v.createContext(null);
function ml() {
  const l = v.useContext(nf);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const Jh = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function Zh() {
  const l = ml(), [o, s] = v.useState(!0), [c, f] = v.useState(null), m = v.useRef(!1), p = v.useCallback(
    async (x = 1, P = !1) => {
      s(!0);
      try {
        const $ = Jh(
          await l._getShort(
            "get_script_actions_short",
            x
          )
        );
        f((L) => !P || !L ? $ : {
          ...$,
          script_actions: [
            ...L.script_actions,
            ...$.script_actions
          ]
        });
      } finally {
        s(!1);
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
    saveScript: async (x) => {
      await l._save(x, "save_script_action"), await p(1);
    },
    updateScript: async (x, P) => {
      await l._update(x, "update_script_action", P), await p(1);
    },
    getScriptAction: async (x) => (await l._getDetail(
      x,
      "get_script_action"
    )).data,
    deleteScriptAction: async (x) => {
      await l._delete(x, "delete_script_action"), await p(1);
    }
  };
}
const ev = "_subtitle_g5b3f_1", tv = "_card_g5b3f_6", nv = "_content_g5b3f_50", rv = "_title_g5b3f_58", lv = "_arrow_g5b3f_64", al = {
  subtitle: ev,
  card: tv,
  content: nv,
  title: rv,
  arrow: lv
}, rf = ({
  title: l,
  subTitle: o,
  onClick: s
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    className: al.card,
    onClick: s
  },
  /* @__PURE__ */ u.createElement("div", { className: al.content }, /* @__PURE__ */ u.createElement("div", { className: al.title }, l), /* @__PURE__ */ u.createElement("div", { className: al.subtitle }, o)),
  /* @__PURE__ */ u.createElement("div", { className: al.arrow }, "→")
), av = "_button_2udlt_1", ov = "_full_2udlt_32", iv = "_primary_2udlt_37", sv = "_secondary_2udlt_50", uv = "_ghost_2udlt_62", bi = {
  button: av,
  full: ov,
  primary: iv,
  secondary: sv,
  ghost: uv
}, se = ({
  children: l,
  variant: o = "primary",
  fullWidth: s = !1,
  leftIcon: c,
  rightIcon: f,
  className: m = "",
  ...p
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    ...p,
    className: `
        ${bi.button}
        ${bi[o]}
        ${s ? bi.full : ""}
        ${m}
      `
  },
  c,
  l,
  f
), cv = "_pagination_1hg7e_1", dv = "_button_1hg7e_9", fv = "_label_1hg7e_33", Ma = {
  pagination: cv,
  button: dv,
  label: fv
}, yr = ({
  page: l,
  totalPages: o,
  onChange: s
}) => o <= 1 ? null : /* @__PURE__ */ u.createElement("div", { className: Ma.pagination }, /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ma.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ u.createElement("span", { className: Ma.label }, l, " / ", o), /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ma.button,
    disabled: l === o,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), mv = "_overlay_1ew9y_1", pv = "_modal_1ew9y_13", hv = "_sm_1ew9y_27", vv = "_md_1ew9y_31", yv = "_lg_1ew9y_35", gv = "_xl_1ew9y_39", _v = "_header_1ew9y_43", Ev = "_title_1ew9y_53", wv = "_body_1ew9y_60", kv = "_footer_1ew9y_67", Cv = "_close_1ew9y_76", yn = {
  overlay: mv,
  modal: pv,
  sm: hv,
  md: vv,
  lg: yv,
  xl: gv,
  header: _v,
  title: Ev,
  body: wv,
  footer: kv,
  close: Cv
}, Yt = ({
  open: l,
  onClose: o,
  title: s,
  footer: c,
  children: f,
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
}, [l, o]), l ? /* @__PURE__ */ u.createElement(
  "div",
  {
    className: yn.overlay,
    onClick: o
  },
  /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${yn.modal} ${yn[m]}`,
      onClick: (p) => p.stopPropagation()
    },
    /* @__PURE__ */ u.createElement("div", { className: yn.header }, s && /* @__PURE__ */ u.createElement("h2", { className: yn.title }, s), /* @__PURE__ */ u.createElement(
      se,
      {
        variant: "ghost",
        className: yn.close,
        onClick: o
      },
      "✕"
    )),
    /* @__PURE__ */ u.createElement("div", { className: yn.body }, f),
    c && /* @__PURE__ */ u.createElement("div", { className: yn.footer }, c)
  )
) : null), Sv = "_overlay_w83z1_1", Nv = "_sheet_w83z1_11", xv = "_handle_w83z1_21", $n = {
  overlay: Sv,
  sheet: Nv,
  handle: xv
}, lf = ({
  open: l,
  onClose: o,
  children: s
}) => {
  const [c, f] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), _ = v.useRef(0), [C, S] = v.useState(0);
  v.useEffect(() => {
    if (l)
      f(!0), requestAnimationFrame(() => {
        p(!0);
      }), document.body.style.overflow = "hidden";
    else {
      p(!1);
      const $ = setTimeout(() => {
        f(!1);
      }, 300);
      return document.body.style.overflow = "", () => clearTimeout($);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [l]);
  const g = ($) => {
    h.current = $.touches[0].clientY;
  }, x = ($) => {
    _.current = $.touches[0].clientY;
    const L = _.current - h.current;
    L > 0 && S(L);
  }, P = () => {
    C > 120 && o(), S(0);
  };
  return v.useEffect(() => {
    const $ = (L) => {
      L.key === "Escape" && o();
    };
    return l && window.addEventListener(
      "keydown",
      $
    ), () => {
      window.removeEventListener(
        "keydown",
        $
      );
    };
  }, [l, o]), c ? /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${$n.overlay} ${m ? $n.visible : ""}`,
      onClick: o
    },
    /* @__PURE__ */ u.createElement(
      "section",
      {
        className: `${$n.sheet} ${m ? $n.open : ""}`,
        style: {
          transform: `translateY(${C}px)`,
          transition: C === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
        },
        onClick: ($) => $.stopPropagation(),
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ u.createElement(
        "div",
        {
          className: $n.handleArea,
          onTouchStart: g,
          onTouchMove: x,
          onTouchEnd: P
        },
        /* @__PURE__ */ u.createElement("div", { className: $n.handle })
      ),
      /* @__PURE__ */ u.createElement("div", { className: $n.content }, s)
    )
  ) : null;
}, Tv = "_content_1p38v_1", Rv = "_title_1p38v_7", Pv = "_actions_1p38v_14", Hi = {
  content: Tv,
  title: Rv,
  actions: Pv
}, Mv = ({
  uuid: l,
  open: o,
  title: s,
  onClose: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = wt();
  if (console.log("isMobile", p, l), !l) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Hi.content }, /* @__PURE__ */ u.createElement("h3", { className: Hi.title }, s), /* @__PURE__ */ u.createElement("div", { className: Hi.actions }, /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        f(l), c();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(l), c();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(lf, { open: o, onClose: c }, h) : /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: o,
      onClose: c,
      title: "Действия",
      size: "sm"
    },
    h
  ));
}, Lv = "_accordion_1wwmk_1", Iv = "_header_1wwmk_7", $v = "_content_1wwmk_20", La = {
  accordion: Lv,
  header: Iv,
  content: $v
}, At = ({
  title: l,
  defaultOpen: o = !1,
  children: s
}) => {
  const [c, f] = v.useState(o);
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      className: La.accordion,
      "data-open": c
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: La.header,
        onClick: () => f((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ u.createElement("span", null, l),
      /* @__PURE__ */ u.createElement("span", { className: La.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ u.createElement("div", { className: La.content }, s)
  );
}, Dv = "_field_1srf6_1", zv = "_label_1srf6_8", Ov = "_input_1srf6_16", Av = "_error_1srf6_50", Fv = "_errorText_1srf6_63", ol = {
  field: Dv,
  label: zv,
  input: Ov,
  error: Av,
  errorText: Fv
}, we = ({
  label: l,
  error: o,
  className: s = "",
  id: c,
  ...f
}) => {
  const m = v.useId(), p = c ?? m;
  return /* @__PURE__ */ u.createElement("div", { className: ol.field }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: p,
      className: ol.label
    },
    l
  ), /* @__PURE__ */ u.createElement(
    "input",
    {
      id: p,
      ...f,
      className: `
          ${ol.input}
          ${o ? ol.error : ""}
          ${s}
        `
    }
  ), o && /* @__PURE__ */ u.createElement("span", { className: ol.errorText }, o));
}, jv = "_wrapper_1vsqt_1", Uv = "_labelRow_1vsqt_6", Bv = "_label_1vsqt_6", Wv = "_selectedTitle_1vsqt_25", bv = "_dropdown_1vsqt_34", Hv = "_option_1vsqt_49", Vv = "_title_1vsqt_71", qv = "_uuid_1vsqt_76", Qv = "_hint_1vsqt_77", Ot = {
  wrapper: jv,
  labelRow: Uv,
  label: Bv,
  selectedTitle: Wv,
  dropdown: bv,
  option: Hv,
  title: Vv,
  uuid: qv,
  hint: Qv
}, fr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = "assistant_commands",
  minQueryLength: f = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: _
}) => {
  const C = ml(), [S, g] = v.useState([]), [x, P] = v.useState(!1), [$, L] = v.useState(!1), [k, D] = v.useState(null), [R, O] = v.useState(!1), b = v.useRef(0), H = v.useRef(null), W = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (W.length < f) {
      g([]), P(!1);
      return;
    }
    if (!R) return;
    const q = b.current + 1;
    b.current = q;
    const fe = window.setTimeout(async () => {
      L(!0);
      try {
        const ye = await C.searchAssistantCommands(W, c), Q = Array.isArray(ye == null ? void 0 : ye.data) ? ye.data : [];
        if (Q.length === S.length && Q.every((Se, Ie) => Se.uuid === S[Ie].uuid)) return;
        g(Q), P(Q.length > 0);
      } finally {
        b.current === q && L(!1);
      }
    }, 250);
    return () => window.clearTimeout(fe);
  }, [C, W, c, f]);
  const le = (q) => {
    const fe = h ? h(q) : q.uuid;
    m(fe), p == null || p(q), P(!1);
  };
  return v.useEffect(() => {
    if (!x) return;
    const q = () => {
      H.current && D(H.current.getBoundingClientRect());
    };
    return q(), window.addEventListener("resize", q), window.addEventListener("scroll", q, !0), () => {
      window.removeEventListener("resize", q), window.removeEventListener("scroll", q, !0);
    };
  }, [x]), /* @__PURE__ */ u.createElement("div", { ref: H, className: Ot.wrapper }, /* @__PURE__ */ u.createElement("div", { className: Ot.labelRow }, /* @__PURE__ */ u.createElement("span", { className: Ot.label }, l), s && /* @__PURE__ */ u.createElement("span", { className: Ot.selectedTitle }, s)), /* @__PURE__ */ u.createElement(
    we,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: _,
      onBlur: () => window.setTimeout(() => P(!1), 150),
      onFocus: () => {
        O(!0), P(S.length > 0);
      },
      onChange: (q) => m(q.target.value)
    }
  ), x && k && qh.createPortal(
    /* @__PURE__ */ u.createElement(
      "div",
      {
        className: Ot.dropdown,
        style: {
          position: "fixed",
          left: k.left,
          top: k.bottom + 6,
          width: k.width,
          zIndex: 200001
        }
      },
      S.map((q) => /* @__PURE__ */ u.createElement(
        "button",
        {
          key: q.uuid,
          type: "button",
          className: Ot.option,
          onMouseDown: (fe) => fe.preventDefault(),
          onClick: () => le(q)
        },
        /* @__PURE__ */ u.createElement("span", { className: Ot.title }, q.title || "Без названия"),
        /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, q.uuid),
        q.mappingType && /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, "mappingType: ", q.mappingType)
      ))
    ),
    document.body
  ), $ && /* @__PURE__ */ u.createElement("span", { className: Ot.hint }, "Поиск..."));
}, Yv = "_field_xxbds_1", Kv = "_row_xxbds_5", Gv = "_inputWrapper_xxbds_11", Xv = "_deleteButton_xxbds_15", gn = {
  field: Yv,
  row: Kv,
  inputWrapper: Gv,
  deleteButton: Xv
}, Jv = ({
  condition: l,
  index: o,
  defaultOpen: s,
  onChange: c,
  onDelete: f,
  totalCount: m,
  errors: p
}) => {
  const h = l.children_type !== void 0, _ = l.children_direct_type !== void 0, C = () => {
    c({
      ...l,
      children_type: void 0
    });
  }, S = () => {
    c({
      ...l,
      children_direct_type: void 0
    });
  };
  return /* @__PURE__ */ u.createElement(
    At,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ u.createElement("div", { className: gn.field }, /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "parent_type",
        value: l.parent_type ?? "",
        searchSource: "search_assistant_commands",
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
    /* @__PURE__ */ u.createElement("div", { className: gn.field }, h ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: gn.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: gn.inputWrapper }, /* @__PURE__ */ u.createElement(
        fr,
        {
          label: "children_type",
          value: l.children_type ?? "",
          searchSource: "search_assistant_sub_commands",
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
      /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: C
        },
        "×"
      )
    ) : /* @__PURE__ */ u.createElement(
      se,
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
    /* @__PURE__ */ u.createElement("div", { className: gn.field }, _ ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: gn.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: gn.inputWrapper }, /* @__PURE__ */ u.createElement(
        fr,
        {
          label: "children_direct_type",
          value: l.children_direct_type ?? "",
          searchSource: "search_assistant_sub_direct_controls",
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
      /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: S
        },
        "×"
      )
    ) : /* @__PURE__ */ u.createElement(
      se,
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
    m > 1 && /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        className: gn.deleteButton,
        onClick: f
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
const af = (...l) => l.filter((o, s, c) => !!o && o.trim() !== "" && c.indexOf(o) === s).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ey = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, s, c) => c ? c.toUpperCase() : s.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = (l) => {
  const o = ey(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vi = {
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
const ty = (l) => {
  for (const o in l)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
  return !1;
}, ny = v.createContext({}), ry = () => v.useContext(ny), ly = v.forwardRef(
  ({ color: l, size: o, strokeWidth: s, absoluteStrokeWidth: c, className: f = "", children: m, iconNode: p, ...h }, _) => {
    const {
      size: C = 24,
      strokeWidth: S = 2,
      absoluteStrokeWidth: g = !1,
      color: x = "currentColor",
      className: P = ""
    } = ry() ?? {}, $ = c ?? g ? Number(s ?? S) * 24 / Number(o ?? C) : s ?? S;
    return v.createElement(
      "svg",
      {
        ref: _,
        ...Vi,
        width: o ?? C ?? Vi.width,
        height: o ?? C ?? Vi.height,
        stroke: l ?? x,
        strokeWidth: $,
        className: af("lucide", P, f),
        ...!m && !ty(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([L, k]) => v.createElement(L, k)),
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
const Mt = (l, o) => {
  const s = v.forwardRef(
    ({ className: c, ...f }, m) => v.createElement(ly, {
      ref: m,
      iconNode: o,
      className: af(
        `lucide-${Zv(_d(l))}`,
        `lucide-${l}`,
        c
      ),
      ...f
    })
  );
  return s.displayName = _d(l), s;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], of = Mt("alarm-clock", ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], iy = Mt("arrow-left", oy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], il = Mt("bot", sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], cy = Mt("chevron-down", uy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], fy = Mt("clock-3", dy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], py = Mt("command", my);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
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
], vy = Mt("file-code-corner", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], gy = Mt("house", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], sf = Mt("settings", _y);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], wy = Mt("timer", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], Cy = Mt("workflow", ky), Sy = "_dropdown_x51vc_2", Ny = "_label_x51vc_9", xy = "_wrapper_x51vc_17", Ty = "_select_x51vc_21", Ry = "_arrow_x51vc_61", Py = "_error_x51vc_81", My = "_errorText_x51vc_99", Dn = {
  dropdown: Sy,
  label: Ny,
  wrapper: xy,
  select: Ty,
  arrow: Ry,
  error: Py,
  errorText: My
};
function Ly({
  label: l,
  options: o,
  value: s = "",
  placeholder: c = "Выберите",
  error: f,
  onSelect: m
}) {
  const p = v.useId();
  return /* @__PURE__ */ u.createElement("div", { className: Dn.dropdown }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: p,
      className: Dn.label
    },
    l
  ), /* @__PURE__ */ u.createElement("div", { className: Dn.wrapper }, /* @__PURE__ */ u.createElement(
    "select",
    {
      id: p,
      className: `
            ${Dn.select}
            ${f ? Dn.error : ""}
          `,
      value: s,
      onChange: (h) => m == null ? void 0 : m(h.target.value)
    },
    /* @__PURE__ */ u.createElement("option", { value: "", disabled: !0 }, c),
    o.map((h) => /* @__PURE__ */ u.createElement(
      "option",
      {
        key: h.value,
        value: h.value
      },
      h.label
    ))
  ), /* @__PURE__ */ u.createElement(
    cy,
    {
      size: 18,
      className: Dn.arrow
    }
  )), f && /* @__PURE__ */ u.createElement("span", { className: Dn.errorText }, f));
}
const Iy = "_form_q1ad6_1", $y = "_section_q1ad6_7", Dy = "_sectionTitle_q1ad6_17", zy = "_conditions_q1ad6_36", Oy = "_addCondition_q1ad6_42", Ay = "_footer_q1ad6_63", Fy = "_right_q1ad6_77", _n = {
  form: Iy,
  section: $y,
  sectionTitle: Dy,
  conditions: zy,
  addCondition: Oy,
  footer: Ay,
  right: Fy
}, jy = ({
  open: l,
  initialData: o,
  isOptionData: s,
  isEdit: c = !1,
  loading: f = !1,
  onSave: m,
  onCancel: p
}) => {
  const [h, _] = v.useState({
    uuid: "",
    name: "",
    script_entity_id: "",
    conditions: [
      {
        parent_type: ""
      }
    ]
  }), [C, S] = v.useState({
    conditions: []
  });
  v.useEffect(() => {
    _({
      uuid: (o == null ? void 0 : o.uuid) || "",
      name: (o == null ? void 0 : o.name) || "",
      script_entity_id: (o == null ? void 0 : o.script_entity_id) || "",
      conditions: (o == null ? void 0 : o.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), S({
      conditions: []
    });
  }, [o, l]);
  const g = (k) => {
    _(k);
  }, x = () => {
    g({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, P = (k, D) => {
    const R = [...h.conditions];
    R[k] = D, g({
      ...h,
      conditions: R
    });
  }, $ = (k) => {
    const D = h.conditions.filter(
      (R, O) => O !== k
    );
    g({
      ...h,
      conditions: D.length > 0 ? D : [
        {
          parent_type: ""
        }
      ]
    });
  }, L = () => {
    const k = {
      conditions: []
    };
    return h.name.trim() || (k.name = "Обязательное поле"), h.script_entity_id || (k.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (D, R) => {
        const O = {};
        D.parent_type.trim() || (O.parent_type = "Обязательное поле"), D.children_type !== void 0 && !D.children_type.trim() && (O.children_type = "Обязательное поле"), D.children_direct_type !== void 0 && !D.children_direct_type.trim() && (O.children_direct_type = "Обязательное поле"), k.conditions[R] = O;
      }
    ), S(k), !k.name && !k.script_entity_id && k.conditions.every(
      (D) => Object.keys(D).length === 0
    );
  };
  return /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: l,
      onClose: p,
      title: c ? "Редактировать сценарий" : "Создать сценарий"
    },
    /* @__PURE__ */ u.createElement("div", { className: _n.form }, /* @__PURE__ */ u.createElement("div", { className: _n.section }, /* @__PURE__ */ u.createElement(
      we,
      {
        label: "Название",
        value: h.name,
        error: C.name,
        onChange: (k) => g({
          ...h,
          name: k.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ly,
      {
        label: "Скрипт",
        error: C.script_entity_id,
        options: s.map(
          (k) => ({
            label: k.name,
            value: k.entity_id
          })
        ),
        value: h.script_entity_id,
        onSelect: (k) => g({
          ...h,
          script_entity_id: k
        })
      }
    )), /* @__PURE__ */ u.createElement("div", { className: _n.section }, /* @__PURE__ */ u.createElement("h3", { className: _n.sectionTitle }, "Условия"), /* @__PURE__ */ u.createElement("div", { className: _n.conditions }, h.conditions.map(
      (k, D, R) => /* @__PURE__ */ u.createElement(
        Jv,
        {
          key: D,
          index: D,
          condition: k,
          defaultOpen: !c,
          errors: C.conditions[D],
          onChange: (O) => P(
            D,
            O
          ),
          onDelete: () => $(D),
          totalCount: R.length
        }
      )
    )), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        className: _n.addCondition,
        onClick: x
      },
      "+ Добавить условие"
    )), /* @__PURE__ */ u.createElement("div", { className: _n.footer }, /* @__PURE__ */ u.createElement("div", { className: _n.right }, /* @__PURE__ */ u.createElement(
      se,
      {
        disabled: f,
        onClick: () => {
          L() && (m == null || m(h));
        }
      },
      "Сохранить"
    ))))
  );
}, Uy = "_header_1m7ok_1", By = "_title_1m7ok_15", Wy = "_backButton_1m7ok_22", by = "_homeButton_1m7ok_23", Ia = {
  header: Uy,
  title: By,
  backButton: Wy,
  homeButton: by
}, jn = () => {
  const l = hr(), s = Et().pathname.startsWith("/commands"), c = s ? "Команды" : "Скрипты", f = () => {
    l(s ? "/scripts" : "home assistant");
  };
  return /* @__PURE__ */ u.createElement("header", { className: Ia.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: Ia.backButton,
      onClick: f
    },
    /* @__PURE__ */ u.createElement(iy, { size: 18 })
  ), /* @__PURE__ */ u.createElement("h1", { className: Ia.title }, c), /* @__PURE__ */ u.createElement(
    "button",
    {
      className: Ia.homeButton,
      onClick: () => l("/scripts")
    },
    /* @__PURE__ */ u.createElement(gy, { size: 18 })
  ));
}, Hy = "_tabs_17nxl_1", Vy = "_dropdown_17nxl_14", qy = "_tab_17nxl_1", Qy = "_active_17nxl_43", Yy = "_menu_17nxl_53", Ky = "_menuItem_17nxl_80", ge = {
  tabs: Hy,
  dropdown: Vy,
  tab: qy,
  active: Qy,
  menu: Yy,
  menuItem: Ky
}, Kt = () => {
  if (!wt())
    return /* @__PURE__ */ u.createElement("div", { className: ge.tabs }, /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${ge.tab} ${ge.active}` : ge.tab
      },
      /* @__PURE__ */ u.createElement(vy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ u.createElement("div", { className: ge.dropdown }, /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ge.tab} ${ge.active}` : ge.tab
      },
      /* @__PURE__ */ u.createElement(py, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Команды")
    ), /* @__PURE__ */ u.createElement("div", { className: ge.menu }, /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${ge.tab} ${ge.active}` : ge.tab
      },
      /* @__PURE__ */ u.createElement(wy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${ge.tab} ${ge.active}` : ge.tab
      },
      /* @__PURE__ */ u.createElement(of, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${ge.tab} ${ge.active}` : ge.tab
      },
      /* @__PURE__ */ u.createElement(sf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Настройки")
    ));
}, Gy = "_nav_gn5m2_1", Ed = {
  nav: Gy
}, Gt = () => {
  const l = Et(), o = hr(), [s, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: Ed.nav }, /* @__PURE__ */ u.createElement(He, { to: "/commands/main" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Основные")), /* @__PURE__ */ u.createElement(He, { to: "/commands/sub" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Второстепенные")), /* @__PURE__ */ u.createElement(He, { to: "/commands/direct/main" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Прямые")), /* @__PURE__ */ u.createElement(He, { to: "/commands/settings" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки"))) : /* @__PURE__ */ u.createElement("nav", { className: Ed.nav }, /* @__PURE__ */ u.createElement(He, { to: "/scripts" }, /* @__PURE__ */ u.createElement(Cy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Скрипты")), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ u.createElement(il, { size: 20 }),
    /* @__PURE__ */ u.createElement("span", null, "Команды")
  ), /* @__PURE__ */ u.createElement(He, { to: "/timer" }, /* @__PURE__ */ u.createElement(fy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Таймер")), /* @__PURE__ */ u.createElement(He, { to: "/alarm" }, /* @__PURE__ */ u.createElement(of, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Будильник")), /* @__PURE__ */ u.createElement(He, { to: "/settings" }, /* @__PURE__ */ u.createElement(sf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки")));
}, Xy = "_container_a5fzw_1", Jy = "_visible_a5fzw_21", wd = {
  container: Xy,
  visible: Jy
}, gr = ({
  children: l,
  offset: o = 100
}) => {
  const [s, c] = v.useState(!1);
  return v.useEffect(() => {
    let f = window.scrollY;
    const m = () => {
      const p = window.scrollY;
      p > f && p > o ? c(!0) : c(!1), f = p;
    };
    return window.addEventListener("scroll", m, {
      passive: !0
    }), () => window.removeEventListener(
      "scroll",
      m
    );
  }, [o]), /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${wd.container} ${s ? wd.visible : ""}`
    },
    l
  );
}, Zy = "_page_qfpja_7", eg = "_header_qfpja_15", tg = "_heading_qfpja_27", ng = "_title_qfpja_32", rg = "_description_qfpja_41", lg = "_actions_qfpja_48", ag = "_list_qfpja_75", zn = {
  page: Zy,
  header: eg,
  heading: tg,
  title: ng,
  description: rg,
  actions: lg,
  list: ag
}, og = () => {
  const l = wt();
  console.log(l);
  const { ref: o, inView: s } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = v.useState(), [m, p] = v.useState(!1), [h, _] = v.useState(!1), [C, S] = v.useState({}), [g, x] = v.useState(!1), [P, $] = v.useState(!1), {
    loading: L,
    scripts: k,
    scriptData: D,
    loadScripts: R,
    saveScript: O,
    updateScript: b,
    getScriptAction: H,
    deleteScriptAction: W
  } = Zh();
  v.useEffect(() => {
    !P || !l || !s || L || !k || k.page >= k.total_pages || R(k.page + 1, !0);
  }, [
    s,
    l,
    L,
    k,
    R
  ]), v.useEffect(() => {
    !L && k && k.page === 1 && $(!0);
  }, [L, k]);
  const le = () => {
    f(void 0), x(!1), p(!0);
  }, q = (ae) => {
    _(!0), S(ae);
  }, fe = async (ae) => {
    x(!0);
    const Se = await H(
      ae
    );
    f(Se), p(!0);
  }, ye = async (ae) => {
    if (g) {
      if (!ae.uuid) return;
      const { uuid: Se, ...Ie } = ae;
      await b(ae.uuid, Ie);
    } else
      await O(ae);
    p(!1);
  }, Q = async (ae) => {
    ae && await W(ae);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: zn.page }, /* @__PURE__ */ u.createElement(Kt, null), /* @__PURE__ */ u.createElement("div", { className: zn.header }, /* @__PURE__ */ u.createElement("div", { className: zn.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: zn.title }, "Сценарии"), /* @__PURE__ */ u.createElement("p", { className: zn.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: zn.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: le
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: le
    },
    "🞢 Добавить сценарий"
  ))), L && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: zn.list }, k == null ? void 0 : k.script_actions.map((ae) => /* @__PURE__ */ u.createElement(
    rf,
    {
      key: ae.uuid,
      title: ae.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => q(ae)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (k == null ? void 0 : k.page) || 1,
      totalPages: (k == null ? void 0 : k.total_pages) || 1,
      onChange: R
    }
  ), /* @__PURE__ */ u.createElement(
    Mv,
    {
      uuid: C.uuid,
      open: h,
      title: C.title,
      onClose: () => _(!1),
      onEdit: fe,
      onDelete: Q
    }
  ), /* @__PURE__ */ u.createElement(
    jy,
    {
      open: m,
      initialData: c,
      isEdit: g,
      isOptionData: D(),
      loading: L,
      onCancel: () => p(!1),
      onSave: async (ae) => {
        await ye(ae);
      }
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, ig = "_field_1qtfn_1", sg = "_label_1qtfn_7", ug = "_select_1qtfn_13", qi = {
  field: ig,
  label: sg,
  select: ug
}, ts = ({
  label: l,
  options: o,
  className: s = "",
  value: c,
  ...f
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ u.createElement("div", { className: qi.field }, l && /* @__PURE__ */ u.createElement("label", { className: qi.label }, l), /* @__PURE__ */ u.createElement(
    "select",
    {
      ...f,
      value: m,
      className: `${qi.select} ${s}`
    },
    !p && /* @__PURE__ */ u.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ u.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, cg = "_switchRow_1lfy8_1", dg = "_input_1lfy8_11", fg = "_track_1lfy8_22", mg = "_thumb_1lfy8_33", pg = "_label_1lfy8_62", sl = {
  switchRow: cg,
  input: dg,
  track: fg,
  thumb: mg,
  label: pg
}, An = ({ label: l, className: o = "", ...s }) => /* @__PURE__ */ u.createElement("label", { className: `${sl.switchRow} ${o}` }, /* @__PURE__ */ u.createElement("input", { ...s, type: "checkbox", className: sl.input }), /* @__PURE__ */ u.createElement("span", { className: sl.track, "aria-hidden": "true" }, /* @__PURE__ */ u.createElement("span", { className: sl.thumb })), /* @__PURE__ */ u.createElement("span", { className: sl.label }, l)), hg = [
  { label: "default", value: "default" },
  { label: "builtin", value: "builtin" },
  { label: "ha_storage", value: "ha_storage" },
  { label: "ha", value: "ha" },
  { label: "external", value: "external" },
  { label: "redis", value: "redis" }
], vg = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], yg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" },
  { label: "chidren_error", value: "chidren_error" }
], gg = "_form_nymr0_1", _g = "_field_nymr0_15", Eg = "_textarea_nymr0_24", wg = "_arrayItem_nymr0_37", dr = {
  form: gg,
  field: _g,
  textarea: Eg,
  arrayItem: wg
}, kd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), uf = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const _ = v.useMemo(() => {
    if (s[c]) return s[c] ?? kd();
  }, [s]), C = (P) => {
    f(($) => ({
      ...$,
      [c]: {
        ...$[c] ?? kd(),
        ...P
      }
    }));
  }, S = (P, $, L) => {
    const k = [..._[P] ?? []];
    k[$] = { ...k[$], ...L }, C({
      [P]: k
    });
  }, g = (P, $) => {
    C({
      [P]: [..._[P] ?? [], $]
    });
  }, x = (P, $) => {
    C({
      [P]: (_[P] ?? []).filter(
        (L, k) => k !== $
      )
    });
  };
  return /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: dr.form }, /* @__PURE__ */ u.createElement(
      we,
      {
        label: "Название команды",
        value: s.title,
        onChange: (P) => f({
          ...s,
          title: P.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      An,
      {
        label: "Завершать диалог",
        checked: _.endStatus,
        onChange: (P) => C({
          endStatus: P.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement(
      An,
      {
        label: "forwardText",
        checked: _.forwardText,
        onChange: (P) => C({
          forwardText: P.target.checked
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "actionType",
        value: _.actionType,
        onChange: (P) => C({
          actionType: P.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ts,
      {
        label: "answerType",
        value: _.answerType,
        options: hg,
        onChange: (P) => C({
          answerType: P.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: dr.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: dr.textarea,
        rows: 6,
        value: (_.voiceCommands == null ? [] : typeof _.voiceCommands != "object" ? _ == null ? void 0 : _.voiceCommands.split(";") : _ == null ? void 0 : _.voiceCommands).join(`
`),
        onChange: (P) => C({
          voiceCommands: P.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(At, { title: "nextDirectControl", defaultOpen: !0 }, (_.nextDirectControl ?? []).map((P, $) => /* @__PURE__ */ u.createElement("div", { key: $, className: dr.arrayItem }, /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "uuid",
        value: P.uuid,
        selectedTitle: P.title,
        searchSource: "sub_direct_controls",
        onChange: (L) => S("nextDirectControl", $, {
          uuid: L
        }),
        onSelect: (L) => S("nextDirectControl", $, {
          uuid: L.uuid,
          actionType: L.actionType ?? L.mappingType ?? "",
          title: L.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "actionType",
        value: P.actionType ?? "",
        onChange: (L) => S("nextDirectControl", $, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => x("nextDirectControl", $)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => g("nextDirectControl", {
          uuid: "",
          actionType: "",
          title: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(At, { title: "voiceResponseArray", defaultOpen: !0 }, (_.voiceResponseArray ?? []).map((P, $) => /* @__PURE__ */ u.createElement("div", { key: $, className: dr.arrayItem }, /* @__PURE__ */ u.createElement(
      we,
      {
        label: "actionType",
        value: P.actionType,
        onChange: (L) => S("voiceResponseArray", $, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "voiceResponse",
        value: P.voiceResponse,
        onChange: (L) => S("voiceResponseArray", $, {
          voiceResponse: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => x("voiceResponseArray", $)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => g("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(At, { title: "nextAction", defaultOpen: !0 }, (_.nextAction ?? []).map((P, $) => /* @__PURE__ */ u.createElement("div", { key: $, className: dr.arrayItem }, /* @__PURE__ */ u.createElement(
      ts,
      {
        label: "actionTypeComponent",
        value: P.actionTypeComponent,
        options: yg,
        onChange: (L) => S("nextAction", $, {
          actionTypeComponent: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "actionType",
        value: P.actionType,
        onChange: (L) => S("nextAction", $, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "uuid",
        value: P.uuid,
        selectedTitle: P.title,
        onChange: (L) => S("nextAction", $, {
          uuid: L
        }),
        onSelect: (L) => S("nextAction", $, {
          uuid: L.uuid,
          actionType: L.actionType ?? "",
          title: L.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => x("nextAction", $)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => g("nextAction", {
          actionTypeComponent: "",
          actionType: "",
          uuid: "",
          title: ""
        })
      },
      "Добавить ещё"
    )))
  );
}, kg = "_content_19r5a_1", Cg = "_title_19r5a_7", Sg = "_actions_19r5a_14", Qi = {
  content: kg,
  title: Cg,
  actions: Sg
}, pl = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = wt();
  if (!o) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Qi.content }, /* @__PURE__ */ u.createElement("h3", { className: Qi.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: Qi.actions }, /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), s();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        f(o.uuid), s();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o.uuid), s();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(lf, { open: l, onClose: s }, h) : /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    h
  ));
}, Ng = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function hl(l) {
  const o = ml(), [s, c] = v.useState(null), [f, m] = v.useState(!0), p = v.useRef(!1), h = async (P, $ = 1, L = !1) => {
    m(!0);
    try {
      const k = Ng(await o._getShort(`${P}`, $));
      c((D) => !L || !D ? k : {
        ...k,
        data: [
          ...D.data,
          ...k.data
        ]
      });
    } finally {
      m(!1);
    }
  };
  return v.useEffect(() => {
    p.current || (p.current = !0, h(l));
  }, [h]), {
    loading: f,
    commands: s,
    loadCommands: h,
    saveCommand: async (P, $) => await o._save($, P),
    deleteCommand: async (P, $) => await o._delete($, P),
    updateCommand: async (P, $) => {
      if (console.log($), !$.uuid) return;
      const { uuid: L, ...k } = $;
      return await o._update(L, P, k);
    },
    editStatusCommand: async (P, $, L) => await o._update_status(P, $, L),
    detailInformationCommand: async (P, $) => await o._getDetail($, P)
  };
}
const xg = "_page_qfpja_7", Tg = "_header_qfpja_15", Rg = "_headerTop_qfpja_20", Pg = "_heading_qfpja_27", Mg = "_description_qfpja_41", Lg = "_state_qfpja_83", ee = {
  page: xg,
  header: Tg,
  headerTop: Rg,
  heading: Pg,
  description: Mg,
  state: Lg
}, Ig = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Cd = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...Ig(),
    forwardText: !1
  }
}), $g = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Cd()), [h, _] = v.useState(null), { ref: C, inView: S } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: g,
    loadCommands: x,
    deleteCommand: P,
    detailInformationCommand: $,
    saveCommand: L,
    updateCommand: k,
    editStatusCommand: D,
    commands: R
  } = hl("get_assistant_commands_short"), [O, b] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !S || g || !R || R.page >= R.total_pages || x("get_assistant_commands_short", R.page + 1, !0);
  }, [
    S,
    l,
    g,
    R,
    x
  ]), v.useEffect(() => {
    !g && R && R.page === 1 && b(!0);
  }, [g, R]);
  const H = () => {
    f(!1), p(Cd()), s(!0);
  }, W = async (Q) => {
    f(!0);
    const ae = await $("get_assistant_command", Q);
    p(ae.data), s(!0);
  }, le = async (Q, ae) => {
    console.log(Q, ae), await D("update_assistant_command_status", Q, ae), x("get_assistant_commands_short");
  }, q = async (Q) => {
    await P("delete_assistant_command", Q), x("get_assistant_commands_short");
  }, fe = async () => {
    await L("save_assistant_command", m), s(!1);
  }, ye = async () => {
    await k("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Kt, null), g && /* @__PURE__ */ u.createElement("div", { className: ee.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", { className: ee.headerTop }, /* @__PURE__ */ u.createElement("div", { className: ee.heading }, /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.commandList }, R == null ? void 0 : R.data.map((Q) => /* @__PURE__ */ u.createElement(
    rf,
    {
      key: Q.uuid,
      title: Q.title,
      subTitle: Q.status === !1 ? "Выключена" : "Включена",
      onClick: () => _(Q)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (Q) => x("get_assistant_commands_short", Q)
    }
  ), /* @__PURE__ */ u.createElement(
    uf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: fe,
      onUpdate: ye
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => _(null),
      onToggleStatus: le,
      onDelete: q,
      onEdit: (Q) => W(Q)
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Dg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Sd = () => ({
  status: !1,
  title: "",
  subComponentDialog: {
    ...Dg(),
    forwardText: !1
  }
}), zg = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Sd()), [h, _] = v.useState(null), { ref: C, inView: S } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: g,
    loadCommands: x,
    deleteCommand: P,
    detailInformationCommand: $,
    saveCommand: L,
    updateCommand: k,
    editStatusCommand: D,
    commands: R
  } = hl("get_assistant_sub_commands_short"), [O, b] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !S || g || !R || R.page >= R.total_pages || x("get_assistant_sub_commands_short", R.page + 1, !0);
  }, [
    S,
    l,
    g,
    R,
    x
  ]), v.useEffect(() => {
    !g && R && R.page === 1 && b(!0);
  }, [g, R]);
  const H = () => {
    f(!1), p(Sd()), s(!0);
  }, W = async (Q) => {
    f(!0);
    const ae = await $("get_assistant_sub_command", Q.uuid);
    p(ae.data), s(!0);
  }, le = async (Q, ae) => {
    await D("update_assistant_sub_command_status", Q, ae), x("get_assistant_sub_commands_short");
  }, q = async (Q) => {
    await P("delete_assistant_sub_command", Q), x("get_assistant_sub_commands_short");
  }, fe = async () => {
    await L("save_assistant_sub_command", m), s(!1);
  }, ye = async () => {
    await k("update_assistant_sub_command_status", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Kt, null), g && /* @__PURE__ */ u.createElement("div", { className: ee.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", { className: ee.headerTop }, /* @__PURE__ */ u.createElement("div", { className: ee.heading }, /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.commandList }, R == null ? void 0 : R.data.map((Q) => /* @__PURE__ */ u.createElement("div", { key: Q.uuid, className: ee.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: ee.commandButton, onClick: () => W(Q) }, /* @__PURE__ */ u.createElement("span", null, Q.title), /* @__PURE__ */ u.createElement("small", null, Q.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: ee.moreButton,
      "aria-label": `Действия команды ${Q.title}`,
      onClick: () => _(Q)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (Q) => x("get_assistant_sub_commands_short", Q)
    }
  ), /* @__PURE__ */ u.createElement(
    uf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "subComponentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: fe,
      onUpdate: ye
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => _(null),
      onToggleStatus: le,
      onDelete: q
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Og = "_field_veq7g_1", Ag = "_label_veq7g_7", Fg = "_textarea_veq7g_13", jg = "_error_veq7g_40", Ug = "_errorText_veq7g_48", ul = {
  field: Og,
  label: Ag,
  textarea: Fg,
  error: jg,
  errorText: Ug
}, cf = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: ul.field }, l && /* @__PURE__ */ u.createElement("label", { className: ul.label }, l), /* @__PURE__ */ u.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${ul.textarea}
          ${o ? ul.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: ul.errorText }, o)), Nd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Bg = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? Nd(), [c]), h = (g) => {
    f((x) => ({
      ...x,
      directControl: {
        ...x.directControl ?? Nd(),
        ...g
      }
    }));
  }, _ = (g, x) => {
    const P = [...p.subDirectControl ?? []];
    P[g] = {
      ...P[g],
      ...x
    }, h({
      subDirectControl: P
    });
  }, C = () => {
    h({
      subDirectControl: [
        ...p.subDirectControl ?? [],
        {
          subMappingType: "",
          subVoiceCommands: ""
        }
      ]
    });
  }, S = (g) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((x, P) => P !== g)
    });
  };
  return /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: o }, "Отмена"), /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement(
      we,
      {
        label: "Название команды",
        value: c.title,
        onChange: (g) => f((x) => ({
          ...x,
          title: g.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (g) => h({
          mappingType: g.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ts,
      {
        label: "valueType",
        value: p.valueType,
        options: vg,
        onChange: (g) => h({
          valueType: g.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement(
      cf,
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
    )), /* @__PURE__ */ u.createElement(
      An,
      {
        label: "manual",
        checked: p.manual,
        onChange: (g) => h({
          manual: g.target.checked,
          subDirectControl: g.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ u.createElement(At, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (g, x) => /* @__PURE__ */ u.createElement("div", { key: x, className: ee.arrayItem }, /* @__PURE__ */ u.createElement(
        we,
        {
          label: "subMappingType",
          value: g.subMappingType,
          onChange: (P) => _(x, {
            subMappingType: P.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: ee.textarea,
          rows: 3,
          value: g.subVoiceCommands,
          onChange: (P) => _(x, {
            subVoiceCommands: P.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: () => S(x)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: C
      },
      "Добавить ещё"
    )) : /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "subDirectControl",
        value: typeof p.subDirectControl == "string" ? p.subDirectControl : "",
        selectedTitle: p.subDirectControlTitle,
        searchSource: "sub_direct_control_samples",
        onChange: (g) => h({
          subDirectControl: g
        }),
        onSelect: (g) => h({
          subDirectControl: g.uuid,
          subDirectControlTitle: g.title ?? ""
        })
      }
    ))
  );
}, xd = () => ({
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
}), Wg = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => xd()), [h, _] = v.useState(null), C = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [S, g] = v.useState("main"), x = hr(), { ref: P, inView: $ } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: L,
    loadCommands: k,
    deleteCommand: D,
    detailInformationCommand: R,
    saveCommand: O,
    updateCommand: b,
    editStatusCommand: H,
    commands: W
  } = hl("get_assistant_sub_direct_controls_short"), [le, q] = v.useState(!1);
  v.useEffect(() => {
    !le || !l || !$ || L || !W || W.page >= W.total_pages || k("get_assistant_sub_direct_controls_short", W.page + 1, !0);
  }, [
    $,
    l,
    L,
    W,
    k
  ]), v.useEffect(() => {
    !L && W && W.page === 1 && q(!0);
  }, [L, W]);
  const fe = () => {
    f(!1), p(xd()), s(!0);
  }, ye = async (J) => {
    f(!0);
    const $e = await R("get_assistant_sub_direct_control", J.uuid);
    p($e.data), s(!0);
  }, Q = async (J, $e) => {
    await H("update_assistant_sub_direct_controls_status", J, $e), k("get_assistant_sub_direct_controls_short");
  }, ae = async (J) => {
    await D("delete_assistant_sub_direct_control", J), k("get_assistant_sub_direct_controls_short");
  }, Se = async () => {
    await O("save_assistant_sub_direct_control", m), s(!1);
  }, Ie = async () => {
    await b("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Kt, null), L && /* @__PURE__ */ u.createElement("div", { className: ee.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", { className: ee.headerTop }, /* @__PURE__ */ u.createElement("div", { className: ee.innerTabs }, C.map((J) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: J.key,
      type: "button",
      className: `${ee.innerTab} ${S === J.key ? ee.activeInnerTab : ""}`,
      onClick: () => {
        g(J.key), x(`/commands/direct/${J.key === "main" ? "main" : "template"}`);
      }
    },
    J.label
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.heading }, /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: fe
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: fe
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.commandList }, W == null ? void 0 : W.data.map((J) => /* @__PURE__ */ u.createElement("div", { key: J.uuid, className: ee.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: ee.commandButton, onClick: () => ye(J) }, /* @__PURE__ */ u.createElement("span", null, J.title), /* @__PURE__ */ u.createElement("small", null, J.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: ee.moreButton,
      "aria-label": `Действия команды ${J.title}`,
      onClick: () => _(J)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: P, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (W == null ? void 0 : W.page) || 1,
      totalPages: (W == null ? void 0 : W.total_pages) || 1,
      onChange: (J) => k("get_assistant_sub_direct_controls_short", J)
    }
  ), /* @__PURE__ */ u.createElement(
    Bg,
    {
      open: o,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Ie : Se
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => _(null),
      onToggleStatus: Q,
      onDelete: ae
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, bg = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(
    () => c.subDirectControl ?? [],
    [c]
  ), h = (g) => {
    f((x) => ({
      ...x,
      subDirectControl: g
    }));
  }, _ = (g, x) => {
    const P = [...p];
    P[g] = {
      ...P[g],
      ...x
    }, h(P);
  }, C = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, S = (g) => {
    h(
      p.filter((x, P) => P !== g)
    );
  };
  return /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement(
      we,
      {
        label: "Название команды",
        value: c.title,
        onChange: (g) => f((x) => ({
          ...x,
          title: g.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      At,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((g, x) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: x,
          className: ee.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          we,
          {
            label: "subMappingType",
            value: g.subMappingType ?? "",
            onChange: (P) => _(x, {
              subMappingType: P.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          cf,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof g.subVoiceCommands == "object" ? g.subVoiceCommands : []).join(`
`),
            onChange: (P) => _(x, {
              subVoiceCommands: P.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          se,
          {
            type: "button",
            variant: "ghost",
            onClick: () => S(x)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "secondary",
          onClick: C
        },
        "Добавить ещё"
      )
    ))
  );
}, Td = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), Hg = () => {
  const l = wt(), o = hr(), [s, c] = v.useState(!1), [f, m] = v.useState(!1), [p, h] = v.useState(Td), [_, C] = v.useState(null), [S, g] = v.useState("template"), [x, P] = v.useState(!1), $ = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: L, inView: k } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: D,
    loadCommands: R,
    deleteCommand: O,
    detailInformationCommand: b,
    saveCommand: H,
    updateCommand: W,
    editStatusCommand: le,
    commands: q
  } = hl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !x || !l || !k || D || !q || q.page >= q.total_pages || R(
      "get_assistant_sub_direct_control_samples_short",
      q.page + 1,
      !0
    );
  }, [
    x,
    k,
    l,
    D,
    q,
    R
  ]), v.useEffect(() => {
    !D && q && q.page === 1 && P(!0);
  }, [D, q]);
  const fe = () => {
    m(!1), h(Td()), c(!0);
  }, ye = async (J) => {
    m(!0);
    const $e = await b(
      "get_assistant_sub_direct_control_sample",
      J.uuid
    );
    h($e.data), c(!0);
  }, Q = async (J, $e) => {
    await le(
      "update_assistant_sub_direct_control",
      J,
      $e
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ae = async (J) => {
    await O(
      "delete_assistant_sub_direct_control_sample",
      J
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Se = async () => {
    await H(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ie = async () => {
    await W(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: ee.page }, !l && /* @__PURE__ */ u.createElement(Kt, null), D && /* @__PURE__ */ u.createElement("div", { className: ee.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", { className: ee.headerTop }, /* @__PURE__ */ u.createElement("div", { className: ee.innerTabs }, $.map((J) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: J.key,
      type: "button",
      className: `${ee.innerTab} ${S === J.key ? ee.activeInnerTab : ""}`,
      onClick: () => {
        g(J.key), o(
          `/commands/direct/${J.key === "main" ? "main" : "template"}`
        );
      }
    },
    J.label
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.heading }, /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      onClick: fe
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      onClick: fe
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.commandList }, q == null ? void 0 : q.data.map((J) => /* @__PURE__ */ u.createElement(
    "div",
    {
      key: J.uuid,
      className: ee.commandTab
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: ee.commandButton,
        onClick: () => ye(J)
      },
      /* @__PURE__ */ u.createElement("span", null, J.title),
      /* @__PURE__ */ u.createElement("small", null, J.status === !1 ? "Выключена" : "Включена")
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: ee.moreButton,
        onClick: () => C(J)
      },
      "⋯"
    )
  ))), l ? /* @__PURE__ */ u.createElement(
    "div",
    {
      ref: L,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (q == null ? void 0 : q.page) ?? 1,
      totalPages: (q == null ? void 0 : q.total_pages) ?? 1,
      onChange: (J) => R(
        "get_assistant_sub_direct_control_samples_short",
        J
      )
    }
  ), /* @__PURE__ */ u.createElement(
    bg,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Ie : Se
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!_,
      command: _,
      onClose: () => C(null),
      onToggleStatus: Q,
      onDelete: ae
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Vg = "_form_nymr0_1", qg = "_field_nymr0_15", Qg = "_textarea_nymr0_24", Yi = {
  form: Vg,
  field: qg,
  textarea: Qg
}, Rd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Yg = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const _ = v.useMemo(() => {
    if (s[c]) return s[c] ?? Rd();
  }, [s]), C = (S) => {
    f((g) => ({
      ...g,
      [c]: {
        ...g[c] ?? Rd(),
        ...S
      }
    }));
  };
  return /* @__PURE__ */ u.createElement(
    Yt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Yi.form }, /* @__PURE__ */ u.createElement(
      we,
      {
        label: "Название команды",
        value: s.title,
        onChange: (S) => f({
          ...s,
          title: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      An,
      {
        label: "Завершать диалог",
        checked: _.endStatus,
        onChange: (S) => C({
          endStatus: S.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "actionType",
        value: _.actionType,
        onChange: (S) => C({
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      we,
      {
        label: "answerType",
        value: _.answerType,
        onChange: (S) => C({
          answerType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Yi.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: Yi.textarea,
        rows: 6,
        value: (_.voiceCommands == null ? [] : typeof _.voiceCommands != "object" ? _ == null ? void 0 : _.voiceCommands.split(";") : _ == null ? void 0 : _.voiceCommands).join(`
`),
        onChange: (S) => C({
          voiceCommands: S.target.value.split(`
`)
        })
      }
    )))
  );
}, Kg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Pd = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...Kg(),
    forwardText: !1
  }
}), Gg = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Pd()), [h, _] = v.useState(null), { ref: C, inView: S } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: g,
    loadCommands: x,
    deleteCommand: P,
    detailInformationCommand: $,
    saveCommand: L,
    updateCommand: k,
    editStatusCommand: D,
    commands: R
  } = hl("get_assistant_settings_short"), [O, b] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !S || g || !R || R.page >= R.total_pages || x("get_assistant_settings_short", R.page + 1, !0);
  }, [
    S,
    l,
    g,
    R,
    x
  ]), v.useEffect(() => {
    !g && R && R.page === 1 && b(!0);
  }, [g, R]);
  const H = () => {
    f(!1), p(Pd()), s(!0);
  }, W = async (Q) => {
    f(!0);
    const ae = await $("get_assistant_command", Q.uuid);
    p(ae.data), s(!0);
  }, le = async (Q, ae) => {
    console.log(Q, ae), await D("update_assistant_setting", Q, ae), x("get_assistant_settings_short");
  }, q = async (Q) => {
    await P("delete_assistant_setting", Q), x("get_assistant_settings_short");
  }, fe = async () => {
    await L("save_assistant_setting", m), s(!1);
  }, ye = async () => {
    await k("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: ee.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Kt, null), g && /* @__PURE__ */ u.createElement("div", { className: ee.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", { className: ee.headerTop }, /* @__PURE__ */ u.createElement("div", { className: ee.heading }, /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ee.commandList }, R == null ? void 0 : R.data.map((Q) => /* @__PURE__ */ u.createElement("div", { key: Q.uuid, className: ee.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: ee.commandButton, onClick: () => W(Q) }, /* @__PURE__ */ u.createElement("span", null, Q.title), /* @__PURE__ */ u.createElement("small", null, Q.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: ee.moreButton,
      "aria-label": `Действия команды ${Q.title}`,
      onClick: () => _(Q)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (Q) => x("get_assistant_settings_short", Q)
    }
  ), /* @__PURE__ */ u.createElement(
    Yg,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: fe,
      onUpdate: ye
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => _(null),
      onToggleStatus: le,
      onDelete: q
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Xg = "_form_1bj0d_1", Jg = "_field_1bj0d_7", Zg = "_input_1bj0d_13", e_ = "_label_1bj0d_32", dt = {
  form: Xg,
  field: Jg,
  input: Zg,
  label: e_
}, t_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(we, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(we, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(we, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(we, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(we, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, n_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(we, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(we, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, r_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(we, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(we, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, l_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(
    we,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement(An, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement(An, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement(An, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    we,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, a_ = "_page_tlhec_1", o_ = {
  page: a_
};
function i_() {
  const l = ml(), [o, s] = v.useState(!0), [c, f] = v.useState(null), m = v.useCallback(async () => {
    s(!0);
    try {
      const h = await l._getShort("get_settings");
      console.log(h), f((h == null ? void 0 : h.result) ?? h);
    } finally {
      s(!1);
    }
  }, [l]);
  return v.useEffect(() => {
    m();
  }, []), {
    loading: o,
    settings: c,
    saveSettings: async (h) => {
      await l._save(h, "save_settings");
    },
    loadScripts: m
  };
}
const s_ = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, Aa = {
  base_url: "",
  token: ""
}, u_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, Md = {
  yandex_tts: s_,
  remout: Aa,
  timer_alarm: u_,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, c_ = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), d_ = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), f_ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), m_ = (l) => ({
  yandex_tts: c_(l == null ? void 0 : l.yandex_tts),
  remout: d_(l == null ? void 0 : l.remout),
  timer_alarm: f_(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Ki = (l, o) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== o[f] && (s[f] = l[f]);
  }), s;
}, p_ = (l, o) => {
  const s = {}, c = Ki(l.yandex_tts, o.yandex_tts), f = Ki(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Ki(l.remout ?? Aa, o.remout ?? Aa);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, h_ = () => {
  wt();
  const [l, o] = v.useState(Md), [s, c] = v.useState(Md), { settings: f, saveSettings: m } = i_();
  v.useEffect(() => {
    if (!f) return;
    const h = m_(f);
    o(h), c(h);
  }, [f]);
  const p = () => {
    const h = p_(l, s);
    m(h);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement(Kt, null), /* @__PURE__ */ u.createElement("div", { className: o_.page }, /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement(At, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    l_,
    {
      data: {
        active_remout: l.active_remout,
        is_admin: l.is_admin,
        theme: l.theme,
        client_id: l.client_id,
        api_commands_enabled: l.api_commands_enabled,
        api_commands_token: l.api_commands_token
      },
      onChange: (h) => o({ ...l, ...h })
    }
  )), /* @__PURE__ */ u.createElement(At, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    t_,
    {
      data: l.yandex_tts,
      onChange: (h) => o({ ...l, yandex_tts: h })
    }
  )), l.active_remout && /* @__PURE__ */ u.createElement(At, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    n_,
    {
      data: l.remout ?? Aa,
      onChange: (h) => o({ ...l, remout: h })
    }
  )), /* @__PURE__ */ u.createElement(At, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    r_,
    {
      data: l.timer_alarm,
      onChange: (h) => o({ ...l, timer_alarm: h })
    }
  )), /* @__PURE__ */ u.createElement(se, { onClick: p }, "Сохранить")), /* @__PURE__ */ u.createElement(Gt, null));
}, On = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, v_ = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 60 * 1e3).toISOString();
}, df = (l) => {
  if (typeof l == "number") return l;
  if (typeof l == "string") {
    const o = l.split(":").map((s) => Number(s));
    return o.length === 3 ? (o[0] || 0) * 3600 + (o[1] || 0) * 60 + (o[2] || 0) : o.length === 2 ? (o[0] || 0) * 60 + (o[1] || 0) : Number(l) || 0;
  }
  if (l && typeof l == "object") {
    if (l.date_end) {
      const o = Date.parse(l.date_end);
      if (!Number.isNaN(o))
        return Math.max(0, Math.ceil((o - Date.now()) / 1e3));
    }
    return df(l.count_timer || "");
  }
  return 0;
}, y_ = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 60), c = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, Gi = (l) => {
  const o = On(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function ff() {
  const l = ml(), [o, s] = v.useState([]), [c, f] = v.useState([]), [m, p] = v.useState([]), [h, _] = v.useState(!0), C = v.useMemo(() => l.getDevices(), [l]), S = v.useCallback(async () => {
    const O = await l._getShort("get_timer_requests_short", 1, 100), b = await Promise.all(
      Gi(O).map(async (H) => {
        var le;
        const W = await l._getDetail(H.uuid, "get_timer_request");
        return ((le = On(W)) == null ? void 0 : le.data) ?? On(W);
      })
    );
    s(b.filter((H) => !!H && H.action_type === "create_timer"));
  }, [l]), g = v.useCallback(async () => {
    const O = await l._getShort("get_alarm_requests_short", 1, 100), b = await Promise.all(
      Gi(O).map(async (H) => {
        var le;
        const W = await l._getDetail(H.uuid, "get_alarm_request");
        return ((le = On(W)) == null ? void 0 : le.data) ?? On(W);
      })
    );
    f(b.filter((H) => !!H && H.action_type !== "delete_alarm"));
  }, [l]), x = v.useCallback(async () => {
    const O = await l._getShort("get_alarm_time_widgets_short", 1, 100), b = await Promise.all(
      Gi(O).map(async (H) => {
        var le;
        const W = await l._getDetail(H.uuid, "get_alarm_time_widget");
        return ((le = On(W)) == null ? void 0 : le.data) ?? On(W);
      })
    );
    p(b.filter(Boolean));
  }, [l]), P = v.useCallback(async () => {
    _(!0);
    try {
      await Promise.all([S(), g(), x()]);
    } finally {
      _(!1);
    }
  }, [g, x, S]);
  return v.useEffect(() => {
    P();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (O, b, H = 0.3) => {
      await l._save({ name: `Будильник ${b}`, action_type: "create_alarm", device_id: O, status: "on", time: b, volume_start: H }, "save_alarm_request"), await g();
    },
    createTimer: async (O, b) => {
      const H = {
        count_timer: y_(b),
        date_end: v_(b)
      };
      await l._save({ name: `Таймер ${b} мин`, action_type: "create_timer", device_id: O, timer_time: H }, "save_timer_request"), await S();
    },
    deleteAlarm: async (O) => {
      await l._delete(O.uuid, "delete_alarm_request"), await g();
    },
    devices: C,
    loading: h,
    stopTimer: async (O) => {
      await l._delete(O.uuid, "delete_timer_request"), await S();
    },
    timers: o,
    toTimerSeconds: df,
    updateAlarm: async (O, b) => {
      await l._update(O.uuid, "update_alarm_request", { ...O, action_type: "edit_alarm", ...b }), await g();
    }
  };
}
const g_ = "_page_di7r7_1", __ = "_header_di7r7_11", E_ = "_title_di7r7_18", w_ = "_description_di7r7_25", k_ = "_grid_di7r7_31", C_ = "_card_di7r7_37", S_ = "_empty_di7r7_37", N_ = "_cardHeader_di7r7_44", x_ = "_cardTitle_di7r7_51", T_ = "_meta_di7r7_56", R_ = "_time_di7r7_62", P_ = "_form_di7r7_69", M_ = "_field_di7r7_75", L_ = "_label_di7r7_81", I_ = "_select_di7r7_87", $_ = "_input_di7r7_87", D_ = "_quickTabs_di7r7_97", z_ = "_quickTab_di7r7_97", O_ = "_activeQuickTab_di7r7_113", A_ = "_row_di7r7_118", te = {
  page: g_,
  header: __,
  title: E_,
  description: w_,
  grid: k_,
  card: C_,
  empty: S_,
  cardHeader: N_,
  cardTitle: x_,
  meta: T_,
  time: R_,
  form: P_,
  field: M_,
  label: L_,
  select: I_,
  input: $_,
  quickTabs: D_,
  quickTab: z_,
  activeQuickTab: O_,
  row: A_,
  switch: "_switch_di7r7_124"
}, F_ = [5, 10, 15, 30, 60], j_ = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, U_ = () => {
  wt();
  const { createTimer: l, devices: o, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = ff(), [p, h] = v.useState(!1), [_, C] = v.useState(""), [S, g] = v.useState(5), [x, P] = v.useState({});
  v.useEffect(() => {
    P((k) => Object.fromEntries(f.map((D) => [D.uuid, k[D.uuid] ?? m(D.timer_time)])));
  }, [f, m]), v.useEffect(() => {
    const k = window.setInterval(() => {
      P((D) => Object.fromEntries(Object.entries(D).map(([R, O]) => [R, Math.max(0, O - 1)])));
    }, 1e3);
    return () => window.clearInterval(k);
  }, []);
  const $ = v.useMemo(() => new Map(o.map((k) => [k.id, k.name])), [o]), L = async () => {
    _ && (await l(_, S), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: te.page }, /* @__PURE__ */ u.createElement(Kt, null), /* @__PURE__ */ u.createElement("div", { className: te.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: te.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: te.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: te.grid }, f.length ? f.map((k) => /* @__PURE__ */ u.createElement("div", { className: te.card, key: k.uuid }, /* @__PURE__ */ u.createElement("div", { className: te.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: te.cardTitle }, k.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: te.meta }, "Устройство: ", $.get(k.device_id) || k.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(k) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: te.time }, j_(x[k.uuid] ?? m(k.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: te.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(Yt, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(se, { onClick: L, disabled: !_ }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: te.form }, /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: te.select, value: _, onChange: (k) => C(k.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((k) => /* @__PURE__ */ u.createElement("option", { key: k.id, value: k.id }, k.name)))), /* @__PURE__ */ u.createElement("div", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: te.quickTabs }, F_.map((k) => /* @__PURE__ */ u.createElement("button", { key: k, type: "button", className: `${te.quickTab} ${S === k ? te.activeQuickTab : ""}`, onClick: () => g(k) }, k, " мин")))), /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: te.input, type: "number", min: "1", value: S, onChange: (k) => g(Number(k.target.value) || 1) })))), /* @__PURE__ */ u.createElement(Gt, null));
}, B_ = () => {
  wt();
  const { alarmTimeWidgets: l, alarms: o, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = ff(), [h, _] = v.useState(!1), [C, S] = v.useState(""), [g, x] = v.useState("08:00"), [P, $] = v.useState(0.3), L = v.useMemo(() => {
    const R = l.flatMap((O) => O.time || []);
    return Array.from(new Set(R)).filter(Boolean);
  }, [l]), k = v.useMemo(() => new Map(f.map((R) => [R.id, R.name])), [f]), D = async () => {
    !C || !g || (await s(C, g, P), _(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: te.page }, /* @__PURE__ */ u.createElement(Kt, null), /* @__PURE__ */ u.createElement("div", { className: te.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: te.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: te.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(se, { onClick: () => _(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: te.grid }, o.length ? o.map((R) => /* @__PURE__ */ u.createElement("div", { className: te.card, key: R.uuid }, /* @__PURE__ */ u.createElement("div", { className: te.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: te.cardTitle }, R.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: te.meta }, "Устройство: ", k.get(R.device_id) || R.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(R) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${te.row} ${te.meta}` }, /* @__PURE__ */ u.createElement("input", { className: te.switch, type: "checkbox", checked: R.status !== "off", onChange: (O) => p(R, { status: O.target.checked ? "on" : "off" }) }), R.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: te.input, type: "time", value: R.time, onChange: (O) => p(R, { time: O.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: te.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: R.volume_start ?? 0.3,
      onChange: (O) => p(R, { volume_start: Number(O.target.value) })
    }
  )))) : /* @__PURE__ */ u.createElement("div", { className: te.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ u.createElement(Yt, { open: h, onClose: () => _(!1), title: "Создать будильник", footer: /* @__PURE__ */ u.createElement(se, { onClick: D, disabled: !C || !g }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: te.form }, /* @__PURE__ */ u.createElement("div", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: te.quickTabs }, L.length ? L.map((R) => /* @__PURE__ */ u.createElement("button", { key: R, type: "button", className: `${te.quickTab} ${g === R ? te.activeQuickTab : ""}`, onClick: () => x(R) }, R)) : /* @__PURE__ */ u.createElement("span", { className: te.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: te.select, value: C, onChange: (R) => S(R.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((R) => /* @__PURE__ */ u.createElement("option", { key: R.id, value: R.id }, R.name)))), /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: te.input, type: "time", value: g, onChange: (R) => x(R.target.value) })), /* @__PURE__ */ u.createElement("label", { className: te.field }, /* @__PURE__ */ u.createElement("span", { className: te.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: te.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: P,
      onChange: (R) => $(Number(R.target.value))
    }
  )))), /* @__PURE__ */ u.createElement(Gt, null));
}, W_ = () => /* @__PURE__ */ u.createElement(mh, null, /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/",
    element: /* @__PURE__ */ u.createElement(
      Ta,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/scripts",
    element: /* @__PURE__ */ u.createElement(og, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands",
    element: /* @__PURE__ */ u.createElement(
      Ta,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ u.createElement($g, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(zg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ u.createElement(
      Ta,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ u.createElement(Wg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement(Hg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(Gg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(U_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(B_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(h_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "*",
    element: /* @__PURE__ */ u.createElement(
      Ta,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), b_ = () => /* @__PURE__ */ u.createElement(W_, null);
class H_ {
  constructor(o) {
    this.hass = o;
  }
  setHass(o) {
    this.hass = o;
  }
  async _getShort(o, s, c) {
    const f = await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      ...s ? { page: s } : {},
      ...c ? { page_size: c } : {}
    });
    return console.log("WS <=", f), f;
  }
  async _getDetail(o, s) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: o
    });
  }
  async _save(o, s) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      data: o
    });
  }
  async _update(o, s, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: o,
      data: c
    });
  }
  async _update_status(o, s, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      uuid: s,
      status: c
    });
  }
  async searchAssistantCommands(o, s) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      query: o
    });
  }
  async _delete(o, s) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: o
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((o) => {
      const s = String(o.entity_id || "");
      return s.startsWith("media_player.") || s.startsWith("speaker.");
    }).map((o) => {
      var s;
      return {
        id: o.entity_id,
        name: ((s = o.attributes) == null ? void 0 : s.friendly_name) ?? o.entity_id
      };
    });
  }
  getScripts() {
    return Object.values(this.hass.states).filter((o) => o.entity_id.startsWith("script.")).map((o) => {
      var s;
      return {
        entity_id: o.entity_id,
        name: ((s = o.attributes) == null ? void 0 : s.friendly_name) ?? o.entity_id
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
const V_ = 1, Fa = 2, Xi = 3, q_ = 4, Q_ = 5;
function Y_(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function K_() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function G_(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Ld(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function X_() {
  return {
    type: "ping"
  };
}
function J_(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const Z_ = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, e0 = "auth_invalid", t0 = "auth_ok";
function n0(l) {
  if (!l.auth)
    throw q_;
  const o = l.auth;
  let s = o.expired ? o.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function f(m, p, h) {
    const _ = new WebSocket(c);
    let C = !1;
    const S = () => {
      if (_.removeEventListener("close", S), C) {
        h(Fa);
        return;
      }
      if (m === 0) {
        h(V_);
        return;
      }
      const P = m === -1 ? -1 : m - 1;
      setTimeout(() => f(P, p, h), 1e3);
    }, g = async (P) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), _.send(JSON.stringify(Y_(o.accessToken)));
      } catch ($) {
        C = $ === Fa, _.close();
      }
    }, x = async (P) => {
      const $ = JSON.parse(P.data);
      switch ($.type) {
        case e0:
          C = !0, _.close();
          break;
        case t0:
          _.removeEventListener("open", g), _.removeEventListener("message", x), _.removeEventListener("close", S), _.removeEventListener("error", S), _.haVersion = $.ha_version, Z_(_.haVersion, 2022, 9) && _.send(JSON.stringify(K_())), p(_);
          break;
      }
    };
    _.addEventListener("open", g), _.addEventListener("message", x), _.addEventListener("close", S), _.addEventListener("error", S);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class r0 {
  constructor(o, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Ld(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(J_(Xi, "Connection lost"));
      }), this.closeRequested)
        return;
      this.fireEvent("disconnected");
      const f = Object.assign(Object.assign({}, this.options), { setupRetry: 0 }), m = (p) => {
        setTimeout(async () => {
          if (!this.closeRequested)
            try {
              const h = await f.createSocket(f);
              this._setSocket(h);
            } catch (h) {
              if (this._queuedMessages) {
                const _ = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const C of _)
                  C.reject && C.reject(Xi);
              }
              h === Fa ? this.fireEvent("reconnect-error", h) : m(p + 1);
            }
        }, Math.min(p, 5) * 1e3);
      };
      this.suspendReconnectPromise && (await this.suspendReconnectPromise, this.suspendReconnectPromise = void 0, this._queuedMessages = []), m(0);
    }, this.options = s, this.commandId = 2, this.commands = /* @__PURE__ */ new Map(), this.eventListeners = /* @__PURE__ */ new Map(), this.closeRequested = !1, this._setSocket(o);
  }
  get connected() {
    return this.socket !== void 0 && this.socket.readyState == this.socket.OPEN;
  }
  _setSocket(o) {
    this.socket = o, this.haVersion = o.haVersion, o.addEventListener("message", this._handleMessage), o.addEventListener("close", this._handleClose);
    const s = this.oldSubscriptions;
    s && (this.oldSubscriptions = void 0, s.forEach((f) => {
      "subscribe" in f && f.subscribe && f.subscribe().then((m) => {
        f.unsubscribe = m, f.resolve();
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
  addEventListener(o, s) {
    let c = this.eventListeners.get(o);
    c || (c = [], this.eventListeners.set(o, c)), c.push(s);
  }
  removeEventListener(o, s) {
    const c = this.eventListeners.get(o);
    if (!c)
      return;
    const f = c.indexOf(s);
    f !== -1 && c.splice(f, 1);
  }
  fireEvent(o, s) {
    (this.eventListeners.get(o) || []).forEach((c) => c(this, s));
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
  async subscribeEvents(o, s) {
    return this.subscribeMessage(o, G_(s));
  }
  ping() {
    return this.sendMessagePromise(X_());
  }
  sendMessage(o, s) {
    if (!this.connected)
      throw Xi;
    if (this._queuedMessages) {
      if (s)
        throw new Error("Cannot queue with commandId");
      this._queuedMessages.push({ resolve: () => this.sendMessage(o) });
      return;
    }
    s || (s = this._genCmdId()), o.id = s, this.socket.send(JSON.stringify(o));
  }
  sendMessagePromise(o) {
    return new Promise((s, c) => {
      if (this._queuedMessages) {
        this._queuedMessages.push({
          reject: c,
          resolve: async () => {
            try {
              s(await this.sendMessagePromise(o));
            } catch (m) {
              c(m);
            }
          }
        });
        return;
      }
      const f = this._genCmdId();
      this.commands.set(f, { resolve: s, reject: c }), this.sendMessage(o, f);
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
  async subscribeMessage(o, s, c) {
    if (this._queuedMessages && await new Promise((m, p) => {
      this._queuedMessages.push({ resolve: m, reject: p });
    }), c != null && c.preCheck && !await c.preCheck())
      throw new Error("Pre-check failed");
    let f;
    return await new Promise((m, p) => {
      const h = this._genCmdId();
      f = {
        resolve: m,
        reject: p,
        callback: o,
        subscribe: (c == null ? void 0 : c.resubscribe) !== !1 ? () => this.subscribeMessage(o, s, c) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(Ld(h)), this.commands.delete(h);
        }
      }, this.commands.set(h, f);
      try {
        this.sendMessage(s, h);
      } catch {
      }
    }), () => f.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const l0 = (l) => l * 1e3 + Date.now();
async function a0(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw Q_;
  }
  const f = new FormData();
  o !== null && f.append("client_id", o), Object.keys(s).forEach((h) => {
    f.append(h, s[h]);
  });
  const m = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: f
  });
  if (!m.ok)
    throw m.status === 400 || m.status === 403 ? Fa : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = l0(p.expires_in), p;
}
class o0 {
  constructor(o, s) {
    this.data = o, this._saveTokens = s;
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
    const o = await a0(this.data.hassUrl, this.data.clientId, {
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
function i0(l, o) {
  return new o0({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function s0(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: n0 }, l), s = await o.createSocket(o);
  return new r0(s, o);
}
function u0(l) {
  var o;
  return (o = l == null ? void 0 : l.connection) != null && o.sendMessagePromise ? l : typeof (l == null ? void 0 : l.callWS) == "function" ? {
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
async function c0() {
  const s = i0(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await s0({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function d0({
  children: l,
  hass: o
}) {
  const s = v.useRef(null), [c, f] = v.useState(!1);
  return v.useEffect(() => {
    async function m() {
      const p = o ? u0(o) : await c0();
      s.current ? s.current.setHass(p) : s.current = new H_(p), f(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !s.current ? /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...") : /* @__PURE__ */ u.createElement(nf.Provider, { value: s.current }, l);
}
function f0({ hass: l }) {
  return /* @__PURE__ */ u.createElement(Ah, null, /* @__PURE__ */ u.createElement(d0, { hass: l }, /* @__PURE__ */ u.createElement(b_, null)));
}
const Id = "dialog-custom-ui-panel", $d = "dialog-custom-ui-style";
class m0 extends HTMLElement {
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
    const s = `/dialog_custom_ui_static/dialog-custom-ui-panel.css?v=${Date.now()}`, c = this.ensureShadowRoot();
    if (c.getElementById($d))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = $d, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
      return;
    } catch (m) {
      console.warn(
        "[dialog_custom_ui] Failed to inject panel styles into shadow root, falling back to link element.",
        m
      );
    }
    let f = c.querySelector(
      'link[data-dialog-ui="true"]'
    );
    if (!f) {
      f = document.createElement("link"), f.rel = "stylesheet", f.href = s, f.setAttribute("data-dialog-ui", "true"), c.appendChild(f);
      return;
    }
    f.href = s;
  }
  render() {
    if (!this.isConnected) return;
    const o = this.ensureShadowRoot();
    this.root || (this.root = hp.createRoot(o)), this.root.render(
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(f0, { hass: this.hassValue }))
    );
  }
}
customElements.get(Id) || customElements.define(Id, m0);
